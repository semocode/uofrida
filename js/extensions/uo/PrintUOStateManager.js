RE.Debugger.addExtension({
    name: 'PrintUOStateManager',
    description: 'Monitors the UO StateManager and logs a message ' +
       'when a state is changed. UOSA knows 5 states: Title-, ' +
       'Startup-, ClientStartup-, Login-, Play- and ShutdownState. Login- and PlayState have ' +
       'different lua_state instances though.',
    disable: false,
    status: 'testing',
    
    
    onHooking: function () {
    	//this.interceptState("ClientStartUpState");
        this.interceptState("LoginState");
        this.interceptState("TitleState");
        this.interceptState("PlayState");
        this.interceptState("ShutdownState");
        
    },
    
    interceptState: function (name) {
    	
    	RTTI.interceptVTableEntry(name, 0, {
            onEnter: function () {
                console.log('[UO]', name, '.destruct()');
            }
        });
        RTTI.interceptVTableEntry(name, 1, {
            onEnter: function () {
                console.log('[UO]', name, '.start()');
            }
        });
        // XXX: Update runs like every 50ms, so its comment out by default.
        // I guess this is also what drives the lua update loop / onUpdate() calls.
        // It is only implemented for PlayState.
        /*
        RTTI.interceptVTableEntry(name, 2, {
            onEnter: function () {
                console.log('[UO]', name, '.update()', (new Date()).toISOString());
            }
        });
        */
        RTTI.interceptVTableEntry(name, 3, {
            onEnter: function () {
                console.log('[UO]', name, '.stop()');
            }
        });
        
    }
});