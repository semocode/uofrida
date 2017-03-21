var Assembly = {
	writePushAll: function (addr) {
		Memory.writeU8(addr, 0x60);
        return 1;
	},
	
	writePushEFlags: function (addr) {
		Memory.writeU8(addr, 0x9c);
        return 1;
	},
	
    writePushEsi: function (addr) {
        Memory.writeU8(addr, 0x56);
        return 1;
    },
    
    writePopEcx: function (addr) {
    	Memory.writeU8(addr, 0x59);
        return 1;
    },
	
	writePopAll: function (addr) {
		Memory.writeU8(addr, 0x61);
        return 1;
	},
	
	writePopEFlags: function (addr) {
		Memory.writeU8(addr, 0x9d);
        return 1;
	},
	
    writeRet: function (addr) {
        Memory.writeU8(addr, 0xc3);
        return 1;
    },
    
    writeCall: function (addr, target) {
        var off = target.sub(parseInt(addr)).sub(5);
        Memory.writeByteArray(addr, [
            // call mem
            0xe8, 
            Types.byteFromInt(off, 0),
            Types.byteFromInt(off, 1),
            Types.byteFromInt(off, 2),
            Types.byteFromInt(off, 3)
        ]);
        /*
        console.log('at', addr.toString(16), 'to', target.toString(16), 'diff', off.toString(16));
        console.log("0xe8", 
            Types.byteFromInt(off, 0).toString(16),
            Types.byteFromInt(off, 1).toString(16),
            Types.byteFromInt(off, 2).toString(16),
            Types.byteFromInt(off, 3).toString(16)
        );
        */
        return 5;
    },
    
    writeNops: function (addr, count) {
        var a = [];
        for (var i = 0; i < count; i++) {
            a[i] = 0x90;
        }
        Memory.writeByteArray(addr, a);
        return count;
    },
    
    writePushImm32: function (addr, imm32) {
        Memory.writeByteArray(addr, [
            // call mem
            0x68, 
            Types.byteFromInt(imm32, 0),
            Types.byteFromInt(imm32, 1),
            Types.byteFromInt(imm32, 2),
            Types.byteFromInt(imm32, 3)
        ]);
        return 5;
    }
};