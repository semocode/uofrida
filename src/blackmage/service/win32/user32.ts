import { registerFunction } from './windows'

export default {
    MessageBoxA: (a: string, b: string) => {
        const f = registerFunction("user32.dll", "MessageBoxA", 'int', ['int', 'pointer', 'pointer', 'int'])
        if (f) {
            var title = Memory.allocAnsiString(a);
            var msg = Memory.allocAnsiString(b);
            f(0,title,msg,0)
        }
    }
}

/*

win32.registerFunction("user32.dll", "GetCursorPos", 'int', ['pointer']);
win32.registerFunction("user32.dll", "mouse_event", 'void', ['int', 'int', 'int', 'int', 'int']);
win32.registerFunction("user32.dll", "SendInput", 'int', ['int', 'pointer', 'int']);
win32.registerFunction("user32.dll", "GetActiveWindow", 'int', []);
win32.registerFunction("user32.dll", "ShowWindow", 'int', ['int', 'int']);
*/