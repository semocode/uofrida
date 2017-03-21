var cbs = {};
var names = {};        
var mem;
var i = 0;

RE.Debugger.addExtension({
    
    name: 'AddLuaFunctions',
    description: 'Adds various lua functions (MoveMouseAbs, ' +
        'MouseLClick, DICtrlShift, DIKey*, etc. for mouse and keyboard control, ' +
        'package_open, io_open to load lua standard libraries normally not available)',
    disable: false,
    status: 'stable',
    
    
    addr: null,
    getBuildVersionString: null,
    getBuildVersionImpl: null,
    hookAddr: null,
    
    luaLoadArgs: function (name, fn, args) {
        names[name] = Memory.allocAnsiString(name);
        cbs[name] = new NativeCallback(fn, 'void', args);
        i += Assembly.writePushImm32(this.mem.add(i), names[name]);
        i += Assembly.writePushImm32(this.mem.add(i), cbs[name]);
        i += Assembly.writePushEsi(this.mem.add(i));
        i += Assembly.writeCall(this.mem.add(i), this.addr);
    },
        
    luaLoad: function (name, fn) {
        console.log('[++]  Adding lua function \"' + name + '\"');
        this.luaLoadArgs(name, fn, []);
    },
    
    luaLoadAddr: function (name, addr) {
        console.log('[++]  Adding lua function \"' + name + '\"');
        names[name] = Memory.allocAnsiString(name);
        i += Assembly.writePushImm32(this.mem.add(i), names[name]);
        i += Assembly.writePushImm32(this.mem.add(i), addr);
        i += Assembly.writePushEsi(this.mem.add(i));
        i += Assembly.writeCall(this.mem.add(i), this.addr);
    },
    
    luaLoadThreaded: function (name, fn) {
        console.log('[++]  Adding threaded lua function \"' + name + '\"');
        names[name] = Memory.allocAnsiString(name);
        cbs['threaded-' + name] = new NativeCallback(fn, 'void', []);
        cbs[name] = new NativeCallback(function () {
            win32.CreateThread(0, 0, cbs['threaded-' + name], 0, 0, 0);
        }, 'void', []);
        i += Assembly.writePushImm32(this.mem.add(i), names[name]);
        i += Assembly.writePushImm32(this.mem.add(i), cbs[name]);
        i += Assembly.writePushEsi(this.mem.add(i));
        i += Assembly.writeCall(this.mem.add(i), this.addr);
    },
    
    onAnalyze: function () {
        // Search "GetBuildVersion" string in .rdata
        var s1 = Memory.scanSync(ptr(rdata.base), uint64("" + rdata.size), buildScanPattern("GetBuildVersion"));
        var sa = s1[0].address
        this.getBuildVersionString = sa;
        console.log("[  ]  Found string \"GetBuildVersion\" @ " + this.getBuildVersionString.toString(16));
        
        // Search xref to string in .text
        var s2 = Memory.scanSync(ptr(text.base), uint64("" + text.size), buildPatternPushAbs(sa));
        var sa2 = s2[0].address;
        this.hookAddr = sa2;
        
        Memory.protect(sa2, 1024, "rwx")
        
        // XXX: interceptor doesn't allow to modify eip somehow. maybe win7 / wow issue
        // so we just hook the control flow ouself here:
        // .text:0052B229                 push    offset aGetbuildversio ; "GetBuildVersion"
        // .text:0052B22E                 push    offset sub_528A90
        // .text:0052B233                 push    esi
        // .text:0052B234                 call    sub_988E2F
        
        // Find the call destination (i.e. RegisterLuaFunction)
        this.getBuildVersionImpl = Memory.readPointer(ptr("" + sa2).add(6))
        var callAddr = uint64("" + sa2).add(11);
        var callOffset = callAddr.sub(0x400000);
        var tar = Memory.readS32(ptr(callAddr.add(1).toString()));
        var sa3 = callAddr.add(5).add(tar);
        console.log("[  ]  Found RegisterLuaFunction @ " + sa3.toString(16));
        
        this.addr = sa3;
        
        
        // 2. Find package lib open function
        var s1 = Memory.scanSync(ptr(rdata.base), uint64("" + rdata.size), buildScanPattern("_LOADLIB"));
        var sa = s1[0].address
        console.log("[  ]  Found string \"LOADLIB\" @ " + sa.toString(16));
        // Search xref to string in .text
        var s2 = Memory.scanSync(ptr(text.base), uint64("" + text.size), buildPatternMovEaxAbs(sa));
        this.load_package_lib = s2[1].address.sub(0xf);
        console.log("[  ]  Found luaopen_package @ " + this.load_package_lib.toString(16));
        
        // 3. find io lib open function
        var s1 = Memory.scanSync(ptr(rdata.base), uint64("" + rdata.size), buildScanPattern("no calling environment"));
        var sa = s1[0].address
        console.log("[  ]  Found string \"no calling environment\" @ " + sa.toString(16));
        // Search xref to string in .text
        var s2 = Memory.scanSync(ptr(text.base), uint64("" + text.size), buildPatternPushAbs(sa));
        this.load_io_lib = s2[1].address.sub(0x4e);
        console.log("[  ]  Found luaopen_io @ " + this.load_io_lib.toString(16));
        
        // 4. find os lib
        var s1 = Memory.scanSync(ptr(rdata.base), uint64("" + rdata.size), '00 ' + buildScanPattern("os") + ' 00');
        var sa = s1[0].address.add(1)
        console.log("[  ]  Found string \"os\" @ " + sa.toString(16));
        
        // Search xref to string in .text
        var s2 = Memory.scanSync(ptr(text.base), uint64("" + text.size), buildPatternPushAbs(sa));
        this.load_os_lib = s2[1].address.sub(9);
        console.log("[  ]  Found luaopen_os @ " + this.load_os_lib.toString(16));
        
    },
    
    onHooking: function () {
                
        // prepare our inserted code
        mem = Memory.alloc(1024);
        this.mem = mem;
        console.log('[++]  Allocated memory for AddLuaFunctions injector at', mem.toString(16));
        
        // write actual hook into UO control flow
        var hook = this.hookAddr;
        console.log('[++]  Writing hooking code @', hook.toString(16));
        i = 0;
        i += Assembly.writeCall(hook.add(i), mem);
        i += Assembly.writeNops(hook.add(i), 5 + 1 + 5);  
        
        // Create new lua functions in injector memory on-the-fly
        i = 0;

        // Re-register overwritten UOGetBuildVersion
        this.luaLoadAddr("GetBuildVersion", this.getBuildVersionImpl);
        
        // Those open io and package lib but must be called from inside a calling environment
        this.luaLoadAddr("load_package_lib", this.load_package_lib);
        this.luaLoadAddr("load_io_lib", this.load_io_lib);
        this.luaLoadAddr("load_os_lib", this.load_os_lib);
        
        // Load a couple of mouse and keyboard functions
        this.luaLoad("MoveMouseAbs", function () {
            if (lua_state) {
                var x = parseInt(win32.lua_tonumber(lua_state, 1));
                var y = parseInt(win32.lua_tonumber(lua_state, 2));
                UOInput.MouseMoveAbs(x, y);
            }
        });
        
        this.luaLoad("MouseRClick", function () {
            UOInput.MouseRClick();
        });
        this.luaLoad("MouseLClick", function () {
            UOInput.MouseLClick();
        });
        
        this.luaLoad("DIKey1", function () {
            // emulate '1'
            UOInput.DIKey(2);
        });
        this.luaLoad("DIKey2", function () {
            UOInput.DIKey(3);
        });
        this.luaLoad("DIKey3", function () {
            UOInput.DIKey(4);
        });
        this.luaLoad("DIKey4", function () {
            UOInput.DIKey(5);
        });
        this.luaLoad("DIKey5", function () {
            UOInput.DIKey(6);
        });
        this.luaLoadThreaded("DICtrlShift", function () {
            UOInput.KeyCtrlDown();
            UOInput.KeyShiftDown();
            win32.Sleep(200);
            UOInput.KeyShiftUp();
            UOInput.KeyCtrlUp();
        });
        
        this.luaLoad("MoveWUp", function () {
            UOInput.KeyUpUp();
            UOInput.KeyLeftUp();
        });
        this.luaLoad("MoveWDown", function () {
            UOInput.KeyUpDown();
            UOInput.KeyLeftDown();
        });
        
        this.luaLoad("MoveNWUp", function () {
            UOInput.KeyUpUp();
        });
        this.luaLoad("MoveNWDown", function () {
            UOInput.KeyUpDown();
        });
        
        this.luaLoad("MoveNUp", function () {
            UOInput.KeyUpUp();
            UOInput.KeyRightUp();
        });
        this.luaLoad("MoveNDown", function () {
            UOInput.KeyUpDown();
            UOInput.KeyRightDown();
        });
        
        this.luaLoad("MoveNEUp", function () {
            UOInput.KeyRightUp();
        });
        this.luaLoad("MoveNEDown", function () {
            UOInput.KeyRightDown();
        });
        
        this.luaLoad("MoveEUp", function () {
            UOInput.KeyDownUp();
            UOInput.KeyRightUp();
        });
        this.luaLoad("MoveEDown", function () {
            UOInput.KeyDownDown();
            UOInput.KeyRightDown();
        });
        
        this.luaLoad("MoveSEUp", function () {
            UOInput.KeyDownUp();
        });
        this.luaLoad("MoveSEDown", function () {
            UOInput.KeyDownDown();
        });
        
        this.luaLoad("MoveSUp", function () {
            UOInput.KeyDownUp();
            UOInput.KeyLeftUp();
        });
        this.luaLoad("MoveSDown", function () {
            UOInput.KeyDownDown();
            UOInput.KeyLeftDown();
        });
        
        this.luaLoad("MoveSWUp", function () {
            UOInput.KeyLeftUp();
        });
        this.luaLoad("MoveSWDown", function () {
            UOInput.KeyLeftDown();
        });
        
        // ret
        i += Assembly.writeRet(mem.add(i));
    }
});