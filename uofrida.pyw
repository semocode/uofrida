import frida;
import sys;
import os;

import winreg

script_content = ''
uo_dir = ''
uo_frida_dir = ''

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

    key = winreg.OpenKey(winreg.HKEY_LOCAL_MACHINE, "SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\GameUX\\Games\\{30E124D7-B515-4778-91C5-4714CB238907}", access=winreg.KEY_READ | winreg.KEY_WOW64_64KEY)
    value = winreg.QueryValueEx(key, "ConfigApplicationPath")
    winreg.CloseKey(key)
    
    global uo_dir
    uo_dir = value[0]

    global uo_frida_dir
    uo_frida_dir = uo_dir + "\\uofrida"
    
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
    
    if not os.path.exists(uo_frida_dir + "\\tmp"):
        os.makedirs(uo_frida_dir + "\\tmp")
        
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

    input('[!!] Press Enter at any time to stop uofrida\n\n')
    session.detach()
    
if __name__ == '__main__':
    main() 
