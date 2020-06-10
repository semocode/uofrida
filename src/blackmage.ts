/**
 * This file is the main entry point for code run inside UOSA.exe
 *
 * The code will be transpiled into plain javascript to bundle/bundle.js which
 * will then be loaded by frida when src/spawn-uosa.js is run
 * (usually through `npm run uo`)
 */

import { Client } from "./blackmage/Client";
import { AddFunctions, PrintUiLog } from "./blackmage/feature/lua";
import { PrintDebugLog } from "./blackmage/feature/uo";

const uosa = new Client({
  features: [new AddFunctions(), new PrintDebugLog(), new PrintUiLog()],
  bugfixes: [],
}).start();
