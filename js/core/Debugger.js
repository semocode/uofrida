RE.Debugger = {
    extensions: [],
	
	addExtension: function (ext) {
		this.logExtension(ext);
		this.extensions.push(ext);
	},
	
	logExtension: function (ext) {
		console.log('[  ] ' + (ext.name || 'no-name') + ': ');
        console.log('[  ]   status: ' + ((ext.disable || false) ? 'disabled' : 'enabled'), '|', (ext.status || '-'));
        var desc = (ext.description || 'no-description').split(' ');
        var i = 0, line = '';
        for (var i = 0; i < desc.length; i++) {
            line += desc[i] + ' ';
            if (line.length > 60) {
                console.log('[  ]   ' + line);
                line = '';
            }
        }
        if (line != '') {
            console.log('[  ]   ' + line);  
        }
	},
	
	run: function () {
		for (var i = 0; i < this.extensions.length; i++) {
			var ext = this.extensions[i]
			var inactive = ext.disable || false;
			if (!inactive && ext.onAnalyze) {
			    ext.onAnalyze();	
			}
		}
		for (var i = 0; i < this.extensions.length; i++) {
			var ext = this.extensions[i]
            var inactive = ext.disable || false;
            if (!inactive && ext.onHooking) {
                ext.onHooking();    
            }
        }
	}
};