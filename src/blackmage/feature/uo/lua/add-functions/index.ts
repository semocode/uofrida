import { rdata, text } from "../../../../service/exe"
import { buildScanPattern, buildPatternPushAbs } from "../../../../util";
import { Feature } from "../../../../Feature";

export class AddFunctions extends Feature {
    // Keep references to allocated memory so it does not get free'd (to avoid nasty crashes of UOSA.exe)
    names: any = {}
    callbacks: any = {}
    trampoline: NativePointer = new NativePointer(0)

    onExecute() {
        const s1 = Memory.scanSync(rdata.base, rdata.size, buildScanPattern("GetBuildVersion"))
        const sa = s1[0].address
        const getBuildVersionString = sa;
        console.log("[  ]  Found string \"GetBuildVersion\" @ " + getBuildVersionString.toString(16));
        
        // Search xref to string in .text
        var s2 = Memory.scanSync(text.base, text.size, buildPatternPushAbs(sa))
        var sa2 = s2[0].address;
        const hookAddr = sa2;
        
        Memory.protect(sa2, 1024, "rwx")
        
        // XXX: interceptor doesn't allow to modify eip somehow. maybe win7 / wow issue
        // so we just hook the control flow ouself here:
        // .text:0052B229                 push    offset aGetbuildversio ; "GetBuildVersion"
        // .text:0052B22E                 push    offset sub_528A90
        // .text:0052B233                 push    esi
        // .text:0052B234                 call    sub_988E2F
        
        // Find the call destination (i.e. RegisterLuaFunction)
        const  getBuildVersionImpl = sa2.add(6).readPointer()
        var callAddr = sa2.add(11);
        var callOffset = callAddr.sub(0x400000)
        var tar = ptr(callAddr.add(1).readS32())
        var sa3 = callAddr.add(5).add(tar);
        console.log("[  ]  Found RegisterLuaFunction @ " + sa3.toString(16), getBuildVersionImpl);
        
        const registerLuaFunction = sa3

        // prepare our inserted code
        this.trampoline = Memory.alloc(Process.pageSize)
        Memory.protect(this.trampoline, Process.pageSize, "rwx")

        console.log('[++]  Allocated memory for AddLuaFunctions injector @ ', this.trampoline)
        Memory.patchCode(this.trampoline, 256, (code) => {
            const cw = new X86Writer(code, { pc: this.trampoline })

            // Re-register overwritten UOGetBuildVersion
            this.luaLoadAddr(cw, registerLuaFunction, "GetBuildVersion", getBuildVersionImpl);

            // Load a couple of mouse and keyboard functions
            this.luaLoad(cw, registerLuaFunction, "MoveMouseAbs", function () {
                /*
                if (lua_state) {
                    var x = parseInt(win32.lua_tonumber(lua_state, 1));
                    var y = parseInt(win32.lua_tonumber(lua_state, 2));
                    UOInput.MouseMoveAbs(x, y);
                }
                */
            });
        
            cw.putRet()
        })

        // write actual hook into UO control flow
        Memory.patchCode(hookAddr, 32, (code) => {
            const cw = new X86Writer(code, { pc: hookAddr })
            cw.putCallAddress(this.trampoline)
            cw.putNopPadding(5 + 1 + 5)
        })        
        console.log('[++]  Written hooking code @', hookAddr.toString(16));
    }

    luaLoadAddr(cw: X86Writer, registerLuaFunction: NativePointer, name: string, addr: NativePointer) {
        console.log('[++]  Adding lua function \"' + name + '\"')
        const nameMemory = Memory.allocAnsiString(name)
        this.names[name] = nameMemory
    
        cw.putPushU32(nameMemory.toInt32())
        cw.putPushU32(addr.toInt32())
        cw.putPushReg("esi")
        cw.putCallAddress(registerLuaFunction)
        
    }

    luaLoadArgs(cw: X86Writer, registerLuaFunction: NativePointer, name: string, fn: any, args: any) {
        const nameMemory = Memory.allocAnsiString(name)
        this.names[name] = nameMemory
    
        this.callbacks[name] = new NativeCallback(fn, 'int', args);
        cw.putPushU32(this.names[name].toInt32())
        cw.putPushU32(this.callbacks[name].toInt32())
        cw.putPushReg("esi")
        cw.putCallAddress(registerLuaFunction)
    }
        
    
    luaLoad(cw: X86Writer, registerLuaFunction: NativePointer, name: string, fn: any) {
        console.log('[++]  Adding lua function \"' + name + '\"');
        this.luaLoadArgs(cw, registerLuaFunction, name, fn, []);
    }
}
