import { Feature } from "../../../Feature";
import { rdata, text } from "../../../service/exe";
import { buildScanPattern, buildPatternPushAbs } from "../../../util";

export class PrintUiLog extends Feature {
  onExecute() {
    var s1 = Memory.scanSync(
      rdata.base,
      rdata.size,
      buildScanPattern(" Set m_defaultDir to %s")
    );
    var sa = s1[0].address;
    //console.log('[  ]  Found string " Set m_defaultDir" @ ' + sa.toString(16));

    // Search xref to string in .text
    var s2 = Memory.scanSync(text.base, text.size, buildPatternPushAbs(sa));
    var sa2 = s2[0].address;
    var call = sa2.add(13);
    var tar = ptr(call.add(1).readU32());
    const LuaLogError = call.add(5).add(tar).and(uint64("0xffffffff"));
    //console.log('[  ]  Found string " LogLuaError" @ ', LuaLogError);

    let current = Instruction.parse(LuaLogError);

    // Look for first call in lua_log_uilog
    while (current.mnemonic != "call") {
      current = Instruction.parse(current.next);
    }
    // Look for second call in lua_log_uilog
    current = Instruction.parse(current.next);
    while (current.mnemonic != "call") {
      current = Instruction.parse(current.next);
    }
    // Look for third call in lua_log_uilog
    current = Instruction.parse(current.next);
    while (current.mnemonic != "call") {
      current = Instruction.parse(current.next);
    }

    const hook = current;
    const target = ptr(current.address.add(1).readS32());
    const LogError = current.address.add(5).add(target);
    // ESI has the formatted string in it @ hook
    //console.log("intercept @ ", hook);

    Interceptor.attach(LogError, {
      onEnter: function (args) {
        const channel = args[0];
        const message = args[1].readUtf16String();
        // Do not log function calls, i.e. channel 5
        console.log("UiLog ", channel, ": ", message);
      },
    });
  }
}
