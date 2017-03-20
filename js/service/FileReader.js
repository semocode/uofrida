var FileReader = {
	
	readFileIntoMem: function (filename) {
		
	}
};

win32.registerFunction("kernel32.dll", "OpenFile", 'int', ['pointer', 'pointer', 'int']);