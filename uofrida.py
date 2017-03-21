import frida;
import sys;
import os;

from config.config import uo_dir;
from config.config import uo_frida_dir;

script_content = ''

def on_message(message, data):
    msg = "=> %s\n=> data: %s" % (message, data);
    print(msg.replace('\\n', '\n'));

def add_script(session, script):
    global script_content    
    print("[++] %s" % (script[len(uo_frida_dir):]))
    content = open(script).read()
    script_content = script_content + '\n' + content

def add_script_dir(session, directory):
    for root, dirs, files in os.walk(uo_frida_dir + "\\" + directory):
        for file in files:
            if file.endswith(".js"):
                add_script(session, os.path.join(root, file))
        
def main():
    global script_content;
    print("[  ] Spawning UOSA.exe through frida")
    os.chdir(uo_dir)
    pid = frida.spawn(["UOSA.exe"])
    session = frida.attach(pid)

    # Merge all javascript into one so they are all in the same scope
    add_script(session, uo_frida_dir + '\\js\\bootstrap.js')
    script_content = script_content + '\n' + """
        var uo_frida_dir = "%s";
    """ % (uo_frida_dir.replace("\\", "\\\\"));
    add_script_dir(session, 'js\\lib')
    add_script_dir(session, 'js\\core')
    add_script_dir(session, 'js\\service')
    add_script_dir(session, 'js\\extensions')
    add_script(session, uo_frida_dir + '\\js\\main.js')
    
    text_file = open(uo_frida_dir + "\\tmp\\script.js", "w")
    text_file.write(script_content)
    text_file.close()
    
    script = session.create_script(script_content)
    script.on('message', on_message)
    script.load()
    
    # Uncomment to require key-press to resume. Useful to attach
    # other debuggers and inspect UOSA memory before actually resuming 
    # UOSA execution but after scripts are already run.
    #
    #input('[!!] Press Enter to resume execution..\n\n')
    
    print("[  ] Resuming execution")
    frida.resume(pid)

    input('[!!] Press Enter at any time to detach from UOSA\n\n')
    session.detach()
    
if __name__ == '__main__':
    main() 