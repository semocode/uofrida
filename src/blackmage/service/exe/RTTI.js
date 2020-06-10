export class RTTI {
  static findString(name) {
    var s1 = Memory.scanSync(
      ptr(data.base),
      uint64("" + data.size),
      buildScanPattern(".?AV" + name)
    );
    if (s1.length > 0) {
      return s1[0].address;
    } else {
      return 0;
    }
  }

  static findTypeDescriptor(name) {
    var str = this.findString(name);
    if (str) {
      return str.sub(8);
    } else {
      return 0;
    }
  }

  static findCompleteObjectLocator(name) {
    var td = this.findTypeDescriptor(name);
    if (td) {
      var s2 = Memory.scanSync(
        ptr(rdata.base),
        uint64("" + rdata.size),
        buildPatternAddr(td)
      );
      if (s2.length > 0) {
        return s2[0].address.sub(12);
      }
    }
    return 0;
  }

  static findVTable(name) {
    var ol = this.findCompleteObjectLocator(name);
    if (ol) {
      var s2 = Memory.scanSync(
        ptr(rdata.base),
        uint64("" + rdata.size),
        buildPatternAddr(ol)
      );
      if (s2.length > 0) {
        return s2[0].address;
      }
    }

    return 0;
  }

  static interceptVTableEntry(name, entry, hookObj) {
    var vtbl = this.findVTable(name);
    if (!vtbl) {
      console.log(
        "[##] Could not find vtable of ",
        name,
        " to hook entry ",
        entry
      );
      return;
    }
    var off = vtbl.add(4 + entry * 4);
    var hook = SafeHook.createVTableHook(off, hookObj.onEnter, "void", []);
    Memory.protect(off, 4, "rwx");
    Memory.writePointer(off, hook.mem);

    console.log("[  ]  Intercepted vtable entry", entry, "of", name, "at", off);
  }
}
