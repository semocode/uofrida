RE.Debugger.addExtension({
	name: 'PrintUOLuaLibraries',
	description: 'Print all libraries registered to the lua_state',
    disable: false,
    status: 'beta',
    addr: null,
    
    onAnalyze: function () {
        var s1 = Memory.scanSync(ptr(rdata.base), uint64("" + rdata.size), '00 ' + buildScanPattern("_LOADED") + ' 00');
        var sa = s1[0].address.add(1)
        console.log("[  ]  Found string \"_LOADED\" @ " + sa.toString(16));
        
        // Search xref to string in .text
        var s2 = Memory.scanSync(ptr(text.base), uint64("" + text.size), buildPatternPushAbs(sa));
        var sa2 = s2[0].address.sub(0x2e);
            
        console.log("[  ]  Found luaL_register @ " + sa2.toString(16));
        
        this.addr = sa2;
    },
    
    onHooking: function () {
        Interceptor.attach(ptr("0x" + this.addr.toString(16)), {
            onEnter: function (args) {
                var esp = this.context.esp;
                var off = esp.add(0);
                var addr = Memory.readU32(off);
                var msg = 'null';
                if (addr > 0) {
                    msg = Memory.readCString(ptr(addr))	
                }
                
                console.log("[UO] luaL_register: " + msg);
            }
        });
    }
});