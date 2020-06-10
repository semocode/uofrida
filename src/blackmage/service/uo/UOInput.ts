import { SendInput, mouse_event, GetCursorPos } from "../win32/user32";

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
export class UOInput {
  static KEY_UP: number = 200;
  static KEY_LEFT: number = 203;
  static KEY_RIGHT: number = 205;
  static KEY_DOWN: number = 208;
  static KEY_CTRL: number = 29;

  static input: NativePointer;
  static point: any;
  static inputSize: number = 0x1c;

  static initialize() {
    this.input = Memory.alloc(0x30);
    this.input.writeU32(1); // type = keyboard
    this.input.add(16).writeU32(0); // extra = NULL
    this.input.add(12).writeU32(0); // time = NULL
    this.point = Memory.alloc(0x10);
  }
  static sendInput(vk: number, scan: number, flag: number) {
    this.input.add(4).writeU16(vk); // vk = NULL
    this.input.add(6).writeU16(scan); // scan
    this.input.add(8).writeU32(flag); // keydown
    SendInput(1, UOInput.input, UOInput.inputSize);
  }

  static DIKeyDown(key: number) {
    this.sendInput(0, key, 0);
  }

  static DIKeyUp(key: number) {
    this.sendInput(0, key, 2);
  }

  static DIKey(key: number) {
    this.DIKeyDown(key);
    this.DIKeyUp(key);
  }

  static KeyShiftUp() {
    this.sendInput(0, 42, 8 + 2);
  }

  static KeyShiftDown() {
    this.sendInput(0, 42, 8);
  }

  static MouseMoveAbs(x: number, y: number) {
    mouse_event(0x8000 | 0x1, x, y, 0, 0);
  }

  static MouseRClick() {
    var pos = this.GetCursorPos();
    mouse_event(0x8, pos.x, pos.y, 0, 0);
    mouse_event(0x10, pos.x, pos.y, 0, 0);
  }

  static MouseLClick() {
    var pos = this.GetCursorPos();
    mouse_event(0x2, pos.x, pos.y, 0, 0);
    mouse_event(0x4, pos.x, pos.y, 0, 0);
  }

  static GetCursorPos() {
    GetCursorPos(this.point);
    var x = this.point.readU32();
    var y = this.point.add(4).readU32();
    console.log("cursor at", x, y);
    return {
      x: x,
      y: y,
    };
  }
}
UOInput.initialize();
