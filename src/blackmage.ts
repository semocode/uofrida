/**
 * This file is the main entry point for code run inside UOSA.exe
 * 
 * The code will be transpiled into plain javascript into bundle/bundle.js which
 * will then be loaded by frida when src/frida/blackmage.js is run (usually through `npm run uo`)
 * 
 */

import PrintFunctions from "./bundle/feature/uo/lua/print-functions";
import PrintLibraries from "./bundle/feature/uo/lua/print-libraries";
import EnableDebugLog from "./bundle/feature/uo/debug-log";
import AddFunctions from "./bundle/feature/uo/lua/add-functions";
import { UOSA } from "./bundle/UOSA";

const uosa = new UOSA({
    features: [
        //EnableDebugLog,
        //PrintLibraries,
        PrintFunctions,
        AddFunctions
    ],
    bugfixes: []
}).start()
