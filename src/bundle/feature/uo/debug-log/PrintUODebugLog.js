RE.Debugger.addExtension({
	name: 'PrintUODebugLog',
	description: 'Print messages from the UOSA debug log ' +
	   '(which is disabled by the Devs on production builds). ' +
	   'Mostly useless stuff though.',
	disable: true,
	status: 'stable, useless',
	
	logAddr: null,
	
    onAnalyze: function () {
        
    },
    
    onHooking: function () {
           	
    }
});