var win32 = {
    addr: {},
    
    /**
     * Registers a new win32 native function for access from JS
     * 
     * @param {} module
     * @param {} name
     * @param {} ret
     * @param {} args
     */
    registerFunction: function (module, name, ret, args) {
    	if (!win32.addr[module]) {
    		win32.addr[module] = {};
    		win32[module] = {};
    	}
    	
    	// Find the function address by the specified module/name
        win32.addr[module][name] = Module.findExportByName(module, name);
        
        if (!win32.addr[module][name]) {
            console.log('[' + module + '] Could not find export: ' + name);
            return;
        }
        
        // Create a new NativeFunction object for access to the win32 API from JS
        win32[name] = new NativeFunction(
            win32.addr[module][name], ret, args
        );
    }
};

win32.registerFunction("kernel32.dll", "LoadLibraryA", 'int', ['pointer']);
win32.registerFunction("kernel32.dll", "Sleep", 'void', ['int']);
win32.registerFunction("kernel32.dll", "CreateThread", 'int', ['int', 'int', 'pointer', 'int', 'int', 'int']);
win32.registerFunction("kernel32.dll", "VirtualAlloc", 'pointer', ['int', 'int', 'int', 'int']);
win32.registerFunction("kernel32.dll", "GetLastError", 'int', []);
win32.registerFunction("kernel32.dll", "VirtualProtect", 'int', ['pointer', 'int', 'int', 'pointer']);
win32.registerFunction("user32.dll", "MessageBoxA", 'int', ['int', 'pointer', 'pointer', 'int']);
win32.registerFunction("user32.dll", "GetCursorPos", 'int', ['pointer']);
win32.registerFunction("user32.dll", "mouse_event", 'void', ['int', 'int', 'int', 'int', 'int']);
win32.registerFunction("user32.dll", "SendInput", 'int', ['int', 'pointer', 'int']);
win32.registerFunction("user32.dll", "GetActiveWindow", 'int', []);
win32.registerFunction("user32.dll", "ShowWindow", 'int', ['int', 'int']);
