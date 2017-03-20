RE.Debugger.addExtension({
	name: 'PrintUOLuaFunctions',
	description: 'Print all functions registered to the lua_state',
    disable: true,
    status: 'stable',
    addr: null,
    
    onAnalyze: function () {
        // Search "GetBuildVersion" string in .rdata
        var s1 = Memory.scanSync(ptr(rdata.base), uint64("" + rdata.size), buildScanPattern("GetBuildVersion"));
        var sa = s1[0].address
        //console.log("[  ] Found string \"GetBuildVersion\" @ " + sa.toString(16));
        
        // Search xref to string in .text
        var s2 = Memory.scanSync(ptr(text.base), uint64("" + text.size), buildPatternPushAbs(sa));
        var sa2 = s2[0].address;
        
        Memory.protect(sa2, 1024, "rwx")
        
        // XXX: interceptor doesn't allow to modify eip somehow. maybe win7 / wow issue
        // so we just hook the control flow ouself here:
        // .text:0052B229                 push    offset aGetbuildversio ; "GetBuildVersion"
        // .text:0052B22E                 push    offset sub_528A90
        // .text:0052B233                 push    esi
        // .text:0052B234                 call    sub_988E2F
        
        // Find the call destination (i.e. RegisterLuaFunction)
        var callAddr = uint64("" + sa2).add(11);
        var callOffset = callAddr.sub(0x400000);
        var tar = Memory.readS32(ptr(callAddr.add(1).toString()));
        var sa3 = callAddr.add(5).add(tar);
        //console.log("[  ] Found RegisterLuaFunction @ " + sa3.toString(16));
        
        this.addr = sa3;
    },
    
    onHooking: function () {
        Interceptor.attach(ptr("0x" + this.addr.toString(16)), {
            onEnter: function (args) {
                var esp = this.context.esp;
                var off = esp.add(8);
                var addr = Memory.readU32(off);
                var msg = Memory.readCString(ptr(addr))
                console.log("[*] UORegisterLuaFunction: " + msg);
            }
        });    
    }
});