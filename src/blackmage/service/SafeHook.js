var SafeHooks = [];

var SafeHook = {
	createVTableHook: function (addr, cb, ret, args) {
		
		var target = Memory.readPointer(addr);
        
		var c = new NativeCallback(cb, ret, args);
		var mem = Memory.alloc(64);
		
		// Keep a reference to not get the NativeCallback gc()'ed
		
		var i = 0;
		i += Assembly.writePushAll(mem.add(i));
		i += Assembly.writePushEFlags(mem.add(i));
		
		i += Assembly.writeCall(mem.add(i), c);
		
		i += Assembly.writePopEFlags(mem.add(i));
		i += Assembly.writePopAll(mem.add(i));
		
		i += Assembly.writePushImm32(mem.add(i), target);
		i += Assembly.writeRet(mem.add(i));
        
		var hook = {
            mem: mem,
            cb: c,
            len: i
        }; 
		SafeHooks.push(hook);
		return hook;
	}
};