RE.Debugger.addExtension({
    name: 'UILog',
    description: 'Hooks the UILog to be printed in console instead of DebugWindow in client',
    disable: false,
    status: 'stable',
    addr: null,
    
    onAnalyze: function () {
        var s1 = Memory.scanSync(ptr(rdata.base), uint64("" + rdata.size), buildScanPattern(" Set m_defaultDir to %s"));
        var sa = s1[0].address
        console.log("[  ]  Found string \" Set m_defaultDir\" @ " + sa.toString(16));
        
        // Search xref to string in .text
        var s2 = Memory.scanSync(ptr(text.base), uint64("" + text.size), buildPatternPushAbs(sa));
        var sa2 = s2[0].address;
        var call = uint64("" + sa2).add(13);
        var tar = Memory.readU32(ptr(call.add(1).toString()));
        this.LuaLogError = call.add(5).add(tar).and(uint64("0xffffffff"));
        console.log("[  ]  Found string \" LogLuaError\" @ " + this.LuaLogError.toString(16));
        
    },
    
    onHooking: function () {
        Interceptor.attach(ptr("0x9128D4"), {
            onEnter: function (args) {
                var channel = args[0];
                var message = Memory.readUtf16String(args[1]);
                // Do not log function calls, i.e. channel 5
                if (channel != 5) {
                    console.log("UiLog " + channel + ": " + message);
                }
            }
        });
    }
});