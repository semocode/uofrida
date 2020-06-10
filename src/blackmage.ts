/**
 * This file is the main entry point for code run inside UOSA.exe
 * 
 * The code will be transpiled into plain javascript to bundle/bundle.js which
 * will then be loaded by frida when src/spawn-uosa.js is run 
 * (usually through `npm run uo`)
 */

import PrintFunctions from "./blackmage/feature/uo/lua/print-functions";
import PrintLibraries from "./blackmage/feature/uo/lua/print-libraries";
import EnableDebugLog from "./blackmage/feature/uo/debug-log";
import AddFunctions from "./blackmage/feature/uo/lua/add-functions";
import { UOSA } from "./blackmage/UOSA";

const uosa = new UOSA({
    features: [
        //EnableDebugLog,
        //PrintLibraries,
        PrintFunctions,
        AddFunctions
    ],
    bugfixes: []
}).start()
