RE.Debugger.addExtension({
    name: 'LogUOPNames',
    description: 'Log all .lua and .xml files loaded from UOP archives',
    disable: true,
    status: 'stable',
    addr: null,
    
    onAnalyze: function () {
        
    },
    
    onHooking: function () {
        var file = new File("uop-names.txt", "w")
        Interceptor.attach(ptr("0x9891C5"), {
            onEnter: function (args) {
                var name = Memory.readCString(args[1])
                if (name.endsWith(".lua") || name.endsWith(".xml")) {
                    console.log("uop: " + name)
                    file.write(name + "\n");
                    file.flush()
                }
            }
        });
    }
});