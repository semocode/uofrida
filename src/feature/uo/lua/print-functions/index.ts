import { buildScanPattern, buildPatternPushAbs } from "../../../../util";
import { rdata, text } from "../../../../service/exe";

const PrintFunctions = {
    onExecute() {
        // Search "GetBuildVersion" string in .rdata
        console.log('test')
        var s1 = Memory.scanSync(rdata.base, rdata.size, buildScanPattern("GetBuildVersion"));
        var sa = s1[0].address
        //console.log("[  ] Found string \"GetBuildVersion\" @ " + sa.toString(16));
        
        // Search xref to string in .text
        var s2 = Memory.scanSync(text.base, text.size, buildPatternPushAbs(sa));
        var sa2 = s2[0].address;
        //console.log("[  ] Found string \"GetBuildVersion\" @ " + sa2.toString(16));
        Memory.protect(sa2, 1024, "rwx")
        
        // XXX: interceptor doesn't allow to modify eip somehow. maybe win7 / wow issue
        // so we just hook the control flow ouself here:
        // .text:0052B229                 push    offset aGetbuildversio ; "GetBuildVersion"
        // .text:0052B22E                 push    offset sub_528A90
        // .text:0052B233                 push    esi
        // .text:0052B234                 call    sub_988E2F
        
        // Find the call destination (i.e. RegisterLuaFunction)
        const callAddr = sa2.add(11)
        const callOffset = callAddr.sub(0x400000);
        const target = ptr(callAddr.add(1).readS32());
        const registerFunction = callAddr.add(5).add(target);
        //console.log("[  ] Found RegisterLuaFunction @ " + registerFunction.toString(16));
        
        Interceptor.attach(registerFunction, {
            onEnter: function (args) {
                var esp = this.context.sp;
                var off = esp.add(12);
                var addr = ptr(off.readU32())
                var msg = addr.readCString()
                console.log("[*] UORegisterLuaFunction: " + msg);
            }
        })
    }
}

export default PrintFunctions