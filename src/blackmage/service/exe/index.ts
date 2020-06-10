export function getUOSAModule(): Module | null {
  const modules = Process.enumerateModules();
  for (var i = 0; i < modules.length; i++) {
    var module = modules[i];
    if (module.name == "UOSA.exe") {
      return module;
    }
  }
  return null;
}

const uosa = getUOSAModule();
if (!uosa) {
  throw new Error("Could not find UOSA module");
}
var ranges = uosa.enumerateRanges("---");
export const text = ranges[1];
export const rdata = ranges[2];
export const debug = ranges[ranges.length - 1];
export const data = ranges[3];

export * from "./RTTI";
