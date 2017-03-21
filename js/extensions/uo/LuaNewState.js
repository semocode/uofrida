var lua_state = null;

RE.Debugger.addExtension({
	name: 'LuaNewState',
	description: 'Monitors calls to lua_newstate to get hold of the lua_state struct',
    disable: false,
    status: 'stable, required',
    addr: null,
    
    onAnalyze: function () {        
        var n1 = Memory.scanSync(ptr(rdata.base), uint64("" + rdata.size), buildScanPattern("lua_State"));
        var na1 = n1[0].address
        console.log("[  ]  Found string \"lua_State\" @ " + na1.toString(16));
        
        var n2 = Memory.scanSync(ptr(text.base), uint64("" + text.size), "68 " + na1.toMatchPattern());
        var na2 = n2[1].address;
        this.addr = na2.add(15);
        
    },
    
    onHooking: function () {
        Interceptor.attach(this.addr, {
            onEnter: function () {
                console.log('[UO] lua_newstate() -> L = 0x' + this.context.eax.toString(16));
                lua_state = this.context.eax.add(0);
            }
        });
    }
});
