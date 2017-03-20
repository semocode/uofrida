RE.Debugger.addExtension({
	name: 'LuaLoad',
	description: 'Monitors calls to lua_load and stores the lua code in <uo_frida_dir>/tmp directory. ' +
	   "Should be expanded to modify the lua code before it is loaded.",
	disable: true,
	status: 'experimental',
	
	
    addr: null,
    
    onAnalyze: function () {
        var l1 = Memory.scanSync(ptr(rdata.base), uint64("" + rdata.size), buildScanPattern("=stdin"));
        var la1 = l1[0].address
        console.log("[  ] Found string \"=stdin\" @ " + la1.toString(16));
        
        var l2 = Memory.scanSync(ptr(text.base), uint64("" + text.size), "68 " + la1.toMatchPattern());
        var la2 = l2[0].address;
        var la3 = la2.add(0x196);
        var la4 = Memory.readPointer(la3);
        this.addr = la3.add(la4).add(4);
        console.log('[  ] Found lua_load @', this.addr.toString(16));
    },
    
    onHooking: function () {
        Interceptor.attach(this.addr, {
            onEnter: function () {
            	var off = this.context.esp.add(0x30)
            	var addr = Memory.readPointer(off);
            	var code = Memory.readCString(addr);
            	var nameAddr = this.context.ecx.add(4);
            	var name = Memory.readCString(nameAddr)
                console.log('[UO] lua_load', name);
                for (var i = 0; i < 20; i++) {
                	name = name.replace('/', '');
                	name = name.replace('\\', '');
                }
                var filename = uo_frida_dir + '\\tmp\\' + name;
                //console.log('[  ] Dumping', name);
                var file = new File(filename, "w");
                file.write(code);
                file.flush();
                file.close();
                //console.log(code);
            }
        });
        
        /*
        Interceptor.attach(ptr("0xa781b0"), {
            onEnter: function () {
            	var name = Memory.readCString(Memory.readPointer(this.context.esp.add(4)).add(4));
                console.log('[  ] lua_loadbuffer', name);                
            }
        });
        */
    }
});
