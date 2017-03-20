RE.Debugger.addExtension({
	name: 'PrintUODebugLog',
	description: 'Print messages from the UOSA debug log ' +
	   '(which is disabled by the Devs on production builds). ' +
	   'Mostly useless stuff though.',
	disable: true,
	status: 'stable, useless',
	
	logAddr: null,
	
    onAnalyze: function () {
        // Find UODebugLog function in .text
        var debug_log = Memory.scanSync(ptr(text.base), uint64("" + text.size), "e8 ?? ?? ?? ?? 81 c4 00 04 00 00 c3")
        for (var i = 0; i < debug_log.length; i++) {
            var m = debug_log[i];
            //console.log(m.address, m.size)
        }
        this.logAddr = debug_log[0];
    },
    
    onHooking: function () {
        // Hook UODebugLog function from UOSA.exe and print the message
        Interceptor.attach(this.logAddr.address, {
            onEnter: function (args) {
                var msg = Memory.readCString(this.context.eax)
                console.log("[*] UODebugLog: " + msg.trim());
            }
        });    	
    }
});