import { rdata, text } from "../../../../service/exe";
import { buildScanPattern, buildPatternPushAbs } from "../../../../util";

const PrintLibraries = {
    onExecute() {
        var s1 = Memory.scanSync(rdata.base, rdata.size, '00 ' + buildScanPattern("_LOADED") + ' 00')
        var sa = s1[0].address.add(1)
        //console.log("[  ]  Found string \"_LOADED\" @ " + sa.toString(16))
        
        // Search xref to string in .text
        var s2 = Memory.scanSync(text.base, text.size, buildPatternPushAbs(sa))
        var sa2 = s2[0].address.sub(0x2e)
        //console.log("[  ]  Found luaL_register @ " + sa2.toString(16))

        Interceptor.attach(sa2, {
            onEnter: function (args) {
                var esp = this.context.sp;
                var off = esp.add(4);
                var addr = ptr(off.readU32());
                if (!addr.isNull()) {
                    const msg = addr.readCString()
                    // @ts-ignore
                    const eax = this.context.eax
                    console.log("[UO] Loading lua library '" + msg + "' on lua state @ ", eax)
                }
            }
        })
    }
}

export default PrintLibraries