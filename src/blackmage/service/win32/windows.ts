export function registerFunction(module : string, name: string, ret:string, args:Array<string>) {
    const addr = Module.findExportByName(module, name);
    if (!addr) {
        console.log('[' + module + '] Could not find export: ' + name);
        return;
    }
    
    // Create a new NativeFunction object for access to the win32 API from JS
    return new NativeFunction(addr, ret, args);
}