import { text } from "../../../service/exe";

const EnableDebugLog = {
    onExecute() {
        // Find UODebugLog function in .text
        var debug_log = Memory.scanSync(text.base, text.size, "e8 ?? ?? ?? ?? 81 c4 00 04 00 00 c3")
        const logAddr = debug_log[0]

        // Hook UODebugLog function from UOSA.exe and print the message
        Interceptor.attach(logAddr.address, {
            onEnter: function (args) {
                // @ts-ignore
                const eax = this.context.eax
                var msg = eax.readCString()
                console.log("[*] UODebugLog: " + msg.trim());
            }
        }); 
    }
}

export default EnableDebugLog