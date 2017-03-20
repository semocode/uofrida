RE.Debugger.addExtension({
	name: 'HelloMsgBox',
	description: 'Prints a HelloWorld MessageBox from within the client',
	disable: true,
	status: 'stable',
	
    onAnalyze: function () {
        console.log('analysis in HelloMsgBox')
    },
    
    onHooking: function () {
        console.log('hooking in HelloMsgBox');
        var title = Memory.allocAnsiString("foo");
        var msg = Memory.allocAnsiString("hello msgboxa");
        win32.MessageBoxA(0, msg, title, 0);
    }
});