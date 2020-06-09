var luaplus = Memory.allocAnsiString(uo_frida_dir + "\\lib\\luaplus_1100.dll");
win32.LoadLibraryA(luaplus);
win32.registerFunction('luaplus_1100.dll', 'lua_tonumber', 'float', ['pointer', 'int']);
win32.registerFunction('luaplus_1100.dll', 'lua_tolstring', 'uint32', ['pointer', 'int', 'int']);
win32.registerFunction('luaplus_1100.dll', 'lua_pushnumber', 'void', ['pointer', 'int']);
win32.registerFunction('luaplus_1100.dll', 'lua_pushstring', 'void', ['pointer', 'pointer']);
