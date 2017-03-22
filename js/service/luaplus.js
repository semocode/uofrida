var luaplus = Memory.allocAnsiString(uo_frida_dir + "\\lib\\luaplus_1100.dll");
win32.LoadLibraryA(luaplus);
win32.registerFunction('luaplus_1100.dll', 'lua_tonumber', 'float', ['pointer', 'int']);
