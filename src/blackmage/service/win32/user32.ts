import { registerFunction } from ".";

export function MessageBoxA(a: string, b: string) {
  const f = registerFunction("user32.dll", "MessageBoxA", "int", [
    "int",
    "pointer",
    "pointer",
    "int",
  ]);
  if (f) {
    var title = Memory.allocAnsiString(a);
    var msg = Memory.allocAnsiString(b);
    f(0, title, msg, 0);
  }
}

export function SendInput(a: number, b: NativePointer, c: number) {
  const f = registerFunction("user32.dll", "SendInput", "int", [
    "int",
    "pointer",
    "int",
  ]);
  if (f) {
    f(a, b, c);
  }
}

export function mouse_event(
  a: number,
  b: number,
  c: number,
  d: number,
  e: number
) {
  const f = registerFunction("user32.dll", "mouse_event", "void", [
    "int",
    "int",
    "int",
    "int",
    "int",
  ]);
  if (f) {
    f(a, b, c, d, e);
  }
}

export function GetCursorPos(point: NativePointer): NativeReturnValue | null {
  const f = registerFunction("user32.dll", "GetCursorPos", "int", ["pointer"]);
  if (f) {
    return f(point);
  }
  return null;
}

export function GetActiveWindow(): NativeReturnValue {
  const f = registerFunction("user32.dll", "GetActiveWindow", "int", []);
  if (f) {
    return f();
  }
  return 0;
}

export function ShowWindow(a: number, b: number) {
  const f = registerFunction("user32.dll", "ShowWindow", "int", ["int", "int"]);
  if (f) {
    f();
  }
}
