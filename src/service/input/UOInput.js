/**
 * UOInput Helper class for emulating keyboard and mouse inputs to UO
 * 
 * Use DIKey or DIMouse functions to emulate DirectInput compatible inputs
 * as expected by UOSA
 * 
 * Implementation upon win32 SendInput
 * 
 * Reference to INPUT structure:
 * size = 0x1c
 * 0x0  int   type mouse=0, kb=1, hw=2
 * 0x4  union
 * 0x4 mi
 * 0x4  struct  ki
 * 0x4  4 short  vk
 * 0x6  6 short  scan
 * 0x8  8 int flags // 0 keydown 1 extendedkey 2 keyup 8 scancode 4 unicode
 * 0xc  12 int time // 0
 * 0x10 16 int extraPtr // 0
 * 0x4 hi
 */
var UOInput = {
    input: null,
    inputSize: 0x1c,
    
    point: null,
    
	DIKey: function (key) {
        // press key
        Memory.writeU16(UOInput.input.add(4), 0); // vk = NULL
        Memory.writeU16(UOInput.input.add(6), key); // scan
        Memory.writeU32(UOInput.input.add(8), 0); // keydown
        win32.SendInput(1, UOInput.input, UOInput.inputSize);
        
        // release key
        Memory.writeU32(UOInput.input.add(8), 2); // keyup
        win32.SendInput(1, UOInput.input, UOInput.inputSize);
    },
    
    DIKeyDown: function (key) {
    	Memory.writeU16(UOInput.input.add(4), 0); // vk = NULL
        Memory.writeU16(UOInput.input.add(6), key); // scan
        Memory.writeU32(UOInput.input.add(8), 0); // keydown
        win32.SendInput(1, UOInput.input, UOInput.inputSize);
    },
    
    DIKeyUp: function (key) {
    	Memory.writeU16(UOInput.input.add(4), 0); // vk = NULL
        Memory.writeU16(UOInput.input.add(6), key); // scan
        Memory.writeU32(UOInput.input.add(8), 2); // keyup
        win32.SendInput(1, UOInput.input, UOInput.inputSize);
    },
    
    KeyUpUp: function () {
    	UOInput.DIKeyUp(200);
    },
    KeyUpDown: function () {
    	UOInput.DIKeyDown(200);
    },
    KeyRightUp: function () {
        UOInput.DIKeyUp(205);
    },
    KeyRightDown: function () {
        UOInput.DIKeyDown(205);
    },
    KeyDownUp: function () {
        UOInput.DIKeyUp(208);
    },
    KeyDownDown: function () {
        UOInput.DIKeyDown(208);
    },
    KeyLeftUp: function () {
        UOInput.DIKeyUp(203);
    },
    KeyLeftDown: function () {
        UOInput.DIKeyDown(203);
    },
    
    KeyShiftUp: function () {
    	Memory.writeU16(UOInput.input.add(4), 0); // vk = NULL
        Memory.writeU16(UOInput.input.add(6), 42); // scan
        Memory.writeU32(UOInput.input.add(8), 2 + 8); // keyup + scancode
        win32.SendInput(1, UOInput.input, UOInput.inputSize);
    },
    KeyShiftDown: function () {
    	Memory.writeU16(UOInput.input.add(4), 0); // vk = NULL
        Memory.writeU16(UOInput.input.add(6), 42); // scan
        Memory.writeU32(UOInput.input.add(8), 0 + 8); // keydown + scancode
        win32.SendInput(1, UOInput.input, UOInput.inputSize);
    },
    KeyCtrlUp: function () {
    	UOInput.DIKeyUp(29);
    },
    KeyCtrlDown: function () {
    	UOInput.DIKeyDown(29);
    },
    
    MouseMoveAbs: function (x, y) {
    	win32.mouse_event(0x8000 | 0x1, x, y, 0, 0);
    },
    MouseRClick: function () {
    	var pos = UOInput.GetCursorPos();
    	win32.mouse_event(0x8, pos.x, pos.y, 0, 0);
    	win32.mouse_event(0x10, pos.x, pos.y, 0, 0);
    },
    MouseLClick: function() {
    	var pos = UOInput.GetCursorPos();
        win32.mouse_event(0x2, pos.x, pos.y, 0, 0);
        win32.mouse_event(0x4, pos.x, pos.y, 0, 0);
    },
    GetCursorPos: function () {
    	win32.GetCursorPos(UOInput.point);
    	var x = Memory.readU32(UOInput.point);
    	var y = Memory.readU32(UOInput.point.add(4));
    	
    	//console.log('cursor at', x, y);
    	return {
    		x: x, 
    		y: y
    	};
    }
};

// Initialize the INPUT structure memory used in later SendInput calls
UOInput.input = Memory.alloc(0x30);
Memory.writeU32(UOInput.input, 1); // type = keyboard 
Memory.writeU32(UOInput.input.add(16), 0); // extra = NULL
Memory.writeU32(UOInput.input.add(12), 0); // time = NULL
UOInput.point = Memory.alloc(0x10);