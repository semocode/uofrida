var cbs = {};
var names = {};
var mem;
var i = 0;

RE.Debugger.addExtension({
  luaLoadThreaded: function (name, fn) {
    console.log('[++]  Adding threaded lua function "' + name + '"');
    names[name] = Memory.allocAnsiString(name);
    cbs["threaded-" + name] = new NativeCallback(fn, "void", []);
    cbs[name] = new NativeCallback(
      function () {
        win32.CreateThread(0, 0, cbs["threaded-" + name], 0, 0, 0);
      },
      "void",
      []
    );
    i += Assembly.writePushImm32(this.mem.add(i), names[name]);
    i += Assembly.writePushImm32(this.mem.add(i), cbs[name]);
    i += Assembly.writePushEsi(this.mem.add(i));
    i += Assembly.writeCall(this.mem.add(i), this.addr);
  },

  onAnalyze: function () {
    // 2. Find package lib open function
    var s1 = Memory.scanSync(
      ptr(rdata.base),
      uint64("" + rdata.size),
      buildScanPattern("_LOADLIB")
    );
    var sa = s1[0].address;
    console.log('[  ]  Found string "LOADLIB" @ ' + sa.toString(16));
    // Search xref to string in .text
    var s2 = Memory.scanSync(
      ptr(text.base),
      uint64("" + text.size),
      buildPatternMovEaxAbs(sa)
    );
    this.load_package_lib = s2[1].address.sub(0xf);
    console.log(
      "[  ]  Found luaopen_package @ " + this.load_package_lib.toString(16)
    );

    // 3. find io lib open function
    var s1 = Memory.scanSync(
      ptr(rdata.base),
      uint64("" + rdata.size),
      buildScanPattern("no calling environment")
    );
    var sa = s1[0].address;
    console.log(
      '[  ]  Found string "no calling environment" @ ' + sa.toString(16)
    );
    // Search xref to string in .text
    var s2 = Memory.scanSync(
      ptr(text.base),
      uint64("" + text.size),
      buildPatternPushAbs(sa)
    );
    this.load_io_lib = s2[1].address.sub(0x4e);
    console.log("[  ]  Found luaopen_io @ " + this.load_io_lib.toString(16));

    // 4. find os lib
    var s1 = Memory.scanSync(
      ptr(rdata.base),
      uint64("" + rdata.size),
      "00 " + buildScanPattern("os") + " 00"
    );
    var sa = s1[0].address.add(1);
    console.log('[  ]  Found string "os" @ ' + sa.toString(16));

    // Search xref to string in .text
    var s2 = Memory.scanSync(
      ptr(text.base),
      uint64("" + text.size),
      buildPatternPushAbs(sa)
    );
    this.load_os_lib = s2[1].address.sub(9);
    console.log("[  ]  Found luaopen_os @ " + this.load_os_lib.toString(16));
  },

  onHooking: function () {
    // Those open io and package lib but must be called from inside a calling environment
    this.luaLoadAddr("load_package_lib", this.load_package_lib);
    this.luaLoadAddr("load_io_lib", this.load_io_lib);
    this.luaLoadAddr("load_os_lib", this.load_os_lib);

    this.luaLoadThreaded("DICtrlShift", function () {
      UOInput.KeyCtrlDown();
      UOInput.KeyShiftDown();
      win32.Sleep(200);
      UOInput.KeyShiftUp();
      UOInput.KeyCtrlUp();
    });

    this.luaLoad("HTTPGet", function () {
      if (lua_state) {
        var ptr = new NativePointer(win32.lua_tolstring(lua_state, 1, 0));
        var url = Memory.readCString(ptr);
        var ret = Memory.allocAnsiString("yoolo");
        send({ url: url });
        win32.lua_pushstring(lua_state, ret);
        return 1;
      }
    });

    this.luaLoad("Win32WindowMaximize", function () {
      win32.ShowWindow(win32.GetActiveWindow(), 3);
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
  },
});
