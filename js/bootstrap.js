var RE = {};
RE.Extensions = {};

console.log('[  ]');

var modules = Process.enumerateModulesSync()
var uosa;
for (var i = 0; i < modules.length; i++) {
    var module = modules[i];
    //console.log("[+] Module " + module.name + " found")
    
    if (module.name == "UOSA.exe") {
        uosa = module;
    }
    
}

var ranges = Module.enumerateRangesSync(uosa.name, '---');
for (var i = 0; i < ranges.length; i++) {
    var range = ranges[i];  
    
    console.log("[  ] UOSA " + range.protection + 
                   " - " + range.base + 
                   " - 0x" + uint64("" + range.base).add(uint64("" + range.size)).toString(16) +
                   " [" + uint64("" + range.size).toString(16) + "] " +
                   (range.file ? range.file.name : 'unknown')
    );
    
}
console.log('[  ]');

var text = ranges[1]
var rdata = ranges[2];
var debug = ranges[ranges.length - 1];
var data = ranges[3];

var uosa_sections = {
	rdata: rdata,
	text: text,
	debug: debug,
	data: data
};