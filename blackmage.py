import frida
import sys
import os
import winreg
import psutil
import time

import signal
import sys

def on_message(message, data):
    msg = "=> %s\n=> data: %s" % (message, data)
    print(msg.replace('\\n', '\n'))
        
def main():
    # Get Ultima Online install directory from windows registry
    key = winreg.OpenKey(winreg.HKEY_LOCAL_MACHINE, "SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\GameUX\\Games\\{30E124D7-B515-4778-91C5-4714CB238907}", access=winreg.KEY_READ | winreg.KEY_WOW64_64KEY)
    value = winreg.QueryValueEx(key, "ConfigApplicationPath")
    winreg.CloseKey(key)
    uo_dir = value[0]
    print("Located UOSA in %s" % uo_dir)
    bundle = os.path.dirname(__file__) + '\\build\\bundle.js'
    print("Located uo-blackmage in %s\n" % bundle)

    # Switch to Ultima Online install directory and spawn UOSA.exe
    os.chdir(uo_dir)
    pid = frida.spawn(["UOSA.exe"])
    print("-- Spawned UOSA.exe with pid %s. Loading uo-blackmage..\n" % pid)

    # Attach frida.re framework and load javascript
    session = frida.attach(pid)
    content = open(bundle).read()
    script = session.create_script(content)
    script.on('message', on_message)
    script.load()
    
    # Uncomment to require key-press to resume. Useful to attach
    # other debuggers and inspect UOSA memory before actually resuming 
    # UOSA execution but after scripts are already run.
    #input('-- Press Enter to resume execution..\n\n')
    
    print("\n-- Successfully loaded uo-blackmage. Resuming execution..\n")
    frida.resume(pid)
    while pid in (p.pid for p in psutil.process_iter()):
        time.sleep(0.5)

    print("\n-- UOSA.exe with pid %s no longer exists. Exiting..\n" % pid)

    
    print("You can make your own changes to this tool by editing the javascript code in the src/ directory.")
    print("To update the code, you need to install nodejs and npm and then run 'npm install' followed by 'npm run build'.\n")
    print("Thank you for using uo-blackmage!")

if __name__ == '__main__':
    main() 
