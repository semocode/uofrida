(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports = require("core-js/library/fn/object/define-property");
},{"core-js/library/fn/object/define-property":6}],2:[function(require,module,exports){
module.exports = require("core-js/library/fn/parse-int");
},{"core-js/library/fn/parse-int":7}],3:[function(require,module,exports){
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
},{}],4:[function(require,module,exports){
var _Object$defineProperty = require("../core-js/object/define-property");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;
},{"../core-js/object/define-property":1}],5:[function(require,module,exports){
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
},{}],6:[function(require,module,exports){
require('../../modules/es6.object.define-property');
var $Object = require('../../modules/_core').Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};

},{"../../modules/_core":10,"../../modules/es6.object.define-property":28}],7:[function(require,module,exports){
require('../modules/es6.parse-int');
module.exports = require('../modules/_core').parseInt;

},{"../modules/_core":10,"../modules/es6.parse-int":29}],8:[function(require,module,exports){
module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

},{}],9:[function(require,module,exports){
var isObject = require('./_is-object');
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

},{"./_is-object":21}],10:[function(require,module,exports){
var core = module.exports = { version: '2.6.11' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

},{}],11:[function(require,module,exports){
// optional / simple context binding
var aFunction = require('./_a-function');
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

},{"./_a-function":8}],12:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

},{}],13:[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./_fails')(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});

},{"./_fails":16}],14:[function(require,module,exports){
var isObject = require('./_is-object');
var document = require('./_global').document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};

},{"./_global":17,"./_is-object":21}],15:[function(require,module,exports){
var global = require('./_global');
var core = require('./_core');
var ctx = require('./_ctx');
var hide = require('./_hide');
var has = require('./_has');
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;

},{"./_core":10,"./_ctx":11,"./_global":17,"./_has":18,"./_hide":19}],16:[function(require,module,exports){
module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

},{}],17:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

},{}],18:[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

},{}],19:[function(require,module,exports){
var dP = require('./_object-dp');
var createDesc = require('./_property-desc');
module.exports = require('./_descriptors') ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

},{"./_descriptors":13,"./_object-dp":22,"./_property-desc":24}],20:[function(require,module,exports){
module.exports = !require('./_descriptors') && !require('./_fails')(function () {
  return Object.defineProperty(require('./_dom-create')('div'), 'a', { get: function () { return 7; } }).a != 7;
});

},{"./_descriptors":13,"./_dom-create":14,"./_fails":16}],21:[function(require,module,exports){
module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

},{}],22:[function(require,module,exports){
var anObject = require('./_an-object');
var IE8_DOM_DEFINE = require('./_ie8-dom-define');
var toPrimitive = require('./_to-primitive');
var dP = Object.defineProperty;

exports.f = require('./_descriptors') ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

},{"./_an-object":9,"./_descriptors":13,"./_ie8-dom-define":20,"./_to-primitive":27}],23:[function(require,module,exports){
var $parseInt = require('./_global').parseInt;
var $trim = require('./_string-trim').trim;
var ws = require('./_string-ws');
var hex = /^[-+]?0[xX]/;

module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
  var string = $trim(String(str), 3);
  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
} : $parseInt;

},{"./_global":17,"./_string-trim":25,"./_string-ws":26}],24:[function(require,module,exports){
module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

},{}],25:[function(require,module,exports){
var $export = require('./_export');
var defined = require('./_defined');
var fails = require('./_fails');
var spaces = require('./_string-ws');
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;

},{"./_defined":12,"./_export":15,"./_fails":16,"./_string-ws":26}],26:[function(require,module,exports){
module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

},{}],27:[function(require,module,exports){
// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = require('./_is-object');
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

},{"./_is-object":21}],28:[function(require,module,exports){
var $export = require('./_export');
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !require('./_descriptors'), 'Object', { defineProperty: require('./_object-dp').f });

},{"./_descriptors":13,"./_export":15,"./_object-dp":22}],29:[function(require,module,exports){
var $export = require('./_export');
var $parseInt = require('./_parse-int');
// 18.2.5 parseInt(string, radix)
$export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });

},{"./_export":15,"./_parse-int":23}],30:[function(require,module,exports){
"use strict";
/**
 * This file is the main entry point for code run inside UOSA.exe
 *
 * The code will be transpiled into plain javascript to bundle/bundle.js which
 * will then be loaded by frida when src/spawn-uosa.js is run
 * (usually through `npm run uo`)
 */

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _defineProperty = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/define-property"));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var print_functions_1 = __importDefault(require("./blackmage/feature/uo/lua/print-functions"));

var add_functions_1 = __importDefault(require("./blackmage/feature/uo/lua/add-functions"));

var UOSA_1 = require("./blackmage/UOSA");

var uosa = new UOSA_1.UOSA({
  features: [//EnableDebugLog,
  //PrintLibraries,
  print_functions_1["default"], add_functions_1["default"]],
  bugfixes: []
}).start();

},{"./blackmage/UOSA":31,"./blackmage/feature/uo/lua/add-functions":32,"./blackmage/feature/uo/lua/print-functions":33,"@babel/runtime-corejs2/core-js/object/define-property":1,"@babel/runtime-corejs2/helpers/interopRequireDefault":5}],31:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/createClass"));

var _defineProperty = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/define-property"));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
exports.UOSA = void 0;

var UOSA = /*#__PURE__*/function () {
  function UOSA(config) {
    (0, _classCallCheck2["default"])(this, UOSA);
    this.features = config.features;
  }

  (0, _createClass2["default"])(UOSA, [{
    key: "start",
    value: function start() {
      this.features.forEach(function (feature) {
        feature.onExecute();
      });
    }
  }]);
  return UOSA;
}();

exports.UOSA = UOSA;

},{"@babel/runtime-corejs2/core-js/object/define-property":1,"@babel/runtime-corejs2/helpers/classCallCheck":3,"@babel/runtime-corejs2/helpers/createClass":4,"@babel/runtime-corejs2/helpers/interopRequireDefault":5}],32:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _defineProperty = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/define-property"));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var exe_1 = require("../../../../service/exe");

var util_1 = require("../../../../util"); // Keep references to allocated memory so it does not get free'd (to avoid nasty crashes of UOSA.exe)


var names = {};
var callbacks = {};
var trampoline;

function luaLoadArgs(cw, registerLuaFunction, name, fn, args) {
  var nameMemory = Memory.allocAnsiString(name);
  names[name] = nameMemory;
  callbacks[name] = new NativeCallback(fn, 'int', args);
  cw.putPushU32(names[name].toInt32());
  cw.putPushU32(callbacks[name].toInt32());
  cw.putPushReg("esi");
  cw.putCallAddress(registerLuaFunction);
}

function luaLoad(cw, registerLuaFunction, name, fn) {
  console.log('[++]  Adding lua function \"' + name + '\"');
  luaLoadArgs(cw, registerLuaFunction, name, fn, []);
}

function luaLoadAddr(cw, registerLuaFunction, name, addr) {
  console.log('[++]  Adding lua function \"' + name + '\"');
  var nameMemory = Memory.allocAnsiString(name);
  names[name] = nameMemory;
  cw.putPushU32(nameMemory.toInt32());
  cw.putPushU32(addr.toInt32());
  cw.putPushReg("esi");
  cw.putCallAddress(registerLuaFunction);
}

var AddFunctions = {
  onExecute: function onExecute() {
    var s1 = Memory.scanSync(exe_1.rdata.base, exe_1.rdata.size, util_1.buildScanPattern("GetBuildVersion"));
    var sa = s1[0].address;
    var getBuildVersionString = sa;
    console.log("[  ]  Found string \"GetBuildVersion\" @ " + getBuildVersionString.toString(16)); // Search xref to string in .text

    var s2 = Memory.scanSync(exe_1.text.base, exe_1.text.size, util_1.buildPatternPushAbs(sa));
    var sa2 = s2[0].address;
    var hookAddr = sa2;
    Memory.protect(sa2, 1024, "rwx"); // XXX: interceptor doesn't allow to modify eip somehow. maybe win7 / wow issue
    // so we just hook the control flow ouself here:
    // .text:0052B229                 push    offset aGetbuildversio ; "GetBuildVersion"
    // .text:0052B22E                 push    offset sub_528A90
    // .text:0052B233                 push    esi
    // .text:0052B234                 call    sub_988E2F
    // Find the call destination (i.e. RegisterLuaFunction)

    var getBuildVersionImpl = sa2.add(6).readPointer();
    var callAddr = sa2.add(11);
    var callOffset = callAddr.sub(0x400000);
    var tar = ptr(callAddr.add(1).readS32());
    var sa3 = callAddr.add(5).add(tar);
    console.log("[  ]  Found RegisterLuaFunction @ " + sa3.toString(16), getBuildVersionImpl);
    var registerLuaFunction = sa3; // prepare our inserted code

    trampoline = Memory.alloc(Process.pageSize);
    Memory.protect(trampoline, Process.pageSize, "rwx");
    console.log('[++]  Allocated memory for AddLuaFunctions injector @ ', trampoline);
    Memory.patchCode(trampoline, 256, function (code) {
      var cw = new X86Writer(code, {
        pc: trampoline
      }); // Re-register overwritten UOGetBuildVersion

      luaLoadAddr(cw, registerLuaFunction, "GetBuildVersion", getBuildVersionImpl); // Load a couple of mouse and keyboard functions

      luaLoad(cw, registerLuaFunction, "MoveMouseAbs", function () {
        /*
        if (lua_state) {
            var x = parseInt(win32.lua_tonumber(lua_state, 1));
            var y = parseInt(win32.lua_tonumber(lua_state, 2));
            UOInput.MouseMoveAbs(x, y);
        }
        */
      });
      cw.putRet();
    }); // write actual hook into UO control flow

    Memory.patchCode(hookAddr, 32, function (code) {
      var cw = new X86Writer(code, {
        pc: hookAddr
      });
      cw.putCallAddress(trampoline);
      cw.putNopPadding(5 + 1 + 5);
    });
    console.log('[++]  Written hooking code @', hookAddr.toString(16));
  }
};
exports["default"] = AddFunctions;

},{"../../../../service/exe":34,"../../../../util":35,"@babel/runtime-corejs2/core-js/object/define-property":1,"@babel/runtime-corejs2/helpers/interopRequireDefault":5}],33:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _defineProperty = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/define-property"));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var util_1 = require("../../../../util");

var exe_1 = require("../../../../service/exe");

var PrintFunctions = {
  onExecute: function onExecute() {
    // Search "GetBuildVersion" string in .rdata
    var s1 = Memory.scanSync(exe_1.rdata.base, exe_1.rdata.size, util_1.buildScanPattern("GetBuildVersion"));
    var sa = s1[0].address; //console.log("[  ] Found string \"GetBuildVersion\" @ " + sa.toString(16));
    // Search xref to string in .text

    var s2 = Memory.scanSync(exe_1.text.base, exe_1.text.size, util_1.buildPatternPushAbs(sa));
    var sa2 = s2[0].address; //console.log("[  ] Found string \"GetBuildVersion\" @ " + sa2.toString(16));

    Memory.protect(sa2, 1024, "rwx"); // XXX: interceptor doesn't allow to modify eip somehow. maybe win7 / wow issue
    // so we just hook the control flow ouself here:
    // .text:0052B229                 push    offset aGetbuildversio ; "GetBuildVersion"
    // .text:0052B22E                 push    offset sub_528A90
    // .text:0052B233                 push    esi
    // .text:0052B234                 call    sub_988E2F
    // Find the call destination (i.e. RegisterLuaFunction)

    var callAddr = sa2.add(11);
    var callOffset = callAddr.sub(0x400000);
    var target = ptr(callAddr.add(1).readS32());
    var registerFunction = callAddr.add(5).add(target); //console.log("[  ] Found RegisterLuaFunction @ " + registerFunction.toString(16));

    Interceptor.attach(registerFunction, {
      onEnter: function onEnter(args) {
        var esp = this.context.sp;
        var off = esp.add(12);
        var addr = ptr(off.readU32());
        var msg = addr.readCString();
        console.log("[*] UORegisterLuaFunction: " + msg);
      }
    });
  }
};
exports["default"] = PrintFunctions;

},{"../../../../service/exe":34,"../../../../util":35,"@babel/runtime-corejs2/core-js/object/define-property":1,"@babel/runtime-corejs2/helpers/interopRequireDefault":5}],34:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _defineProperty = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/define-property"));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
exports.data = exports.debug = exports.rdata = exports.text = exports.getUOSAModule = void 0;

function getUOSAModule() {
  var modules = Process.enumerateModules();

  for (var i = 0; i < modules.length; i++) {
    var module = modules[i];

    if (module.name == "UOSA.exe") {
      return module;
    }
  }

  return null;
}

exports.getUOSAModule = getUOSAModule;
var uosa = getUOSAModule();

if (!uosa) {
  throw new Error('Could not find UOSA module');
}

var ranges = uosa.enumerateRanges('---');
exports.text = ranges[1];
exports.rdata = ranges[2];
exports.debug = ranges[ranges.length - 1];
exports.data = ranges[3];

},{"@babel/runtime-corejs2/core-js/object/define-property":1,"@babel/runtime-corejs2/helpers/interopRequireDefault":5}],35:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _parseInt2 = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/parse-int"));

var _defineProperty = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/define-property"));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
exports.equalsInt32 = exports.byteFromInt = exports.buildScanPattern = exports.buildPatternAddr = exports.buildPatternMovEaxAbs = exports.buildPatternPushAbs = exports.padLeft = exports.hexShift = void 0;

function hexShift(addr, shift) {
  var r = addr.shr(shift).and(0xff).toString(16);

  if (r.length < 2) {
    r = "0" + r;
  }

  return r;
}

exports.hexShift = hexShift;

function padLeft(str, pad, length) {
  if (str.length >= length) {
    return str;
  }

  var r = str;

  for (var i = str.length; i < length; i++) {
    r = pad + r;
    ;
  }

  return r;
}

exports.padLeft = padLeft;

function buildPatternPushAbs(address) {
  var p = "68 "; // push

  p += hexShift(address, 0) + " ";
  p += hexShift(address, 8) + " ";
  p += hexShift(address, 16) + " ";
  p += hexShift(address, 24); //console.log(p);

  return p;
}

exports.buildPatternPushAbs = buildPatternPushAbs;

function buildPatternMovEaxAbs(address) {
  var p = "b8 "; // push

  p += hexShift(address, 0) + " ";
  p += hexShift(address, 8) + " ";
  p += hexShift(address, 16) + " ";
  p += hexShift(address, 24); //console.log(p);

  return p;
}

exports.buildPatternMovEaxAbs = buildPatternMovEaxAbs;

function buildPatternAddr(address) {
  var p = "";
  p += hexShift(address, 0) + " ";
  p += hexShift(address, 8) + " ";
  p += hexShift(address, 16) + " ";
  p += hexShift(address, 24); //console.log(p);

  return p;
}

exports.buildPatternAddr = buildPatternAddr;

function buildScanPattern(str) {
  var p = "";

  for (var i = 0; i < str.length; i++) {
    p += str.charCodeAt(i).toString(16) + " ";
  } //console.log(str + " -> " + p);


  return p;
}

exports.buildScanPattern = buildScanPattern;

function byteFromInt(i, idx) {
  // doesnt give expected results on 64 bit???? so use parseInt foo below
  //return (i >> (idx * 8)) & 0xff;
  return (0, _parseInt2["default"])("0x" + padLeft(i.toString(16), '0', 8).substr(-2 * (idx + 1), 2));
}

exports.byteFromInt = byteFromInt;

function equalsInt32(a, b) {
  return byteFromInt(a, 0) == byteFromInt(b, 0) && byteFromInt(a, 1) == byteFromInt(b, 1) && byteFromInt(a, 2) == byteFromInt(b, 2) && byteFromInt(a, 3) == byteFromInt(b, 3);
}

exports.equalsInt32 = equalsInt32;

},{"@babel/runtime-corejs2/core-js/object/define-property":1,"@babel/runtime-corejs2/core-js/parse-int":2,"@babel/runtime-corejs2/helpers/interopRequireDefault":5}]},{},[30])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUtY29yZWpzMi9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUtY29yZWpzMi9jb3JlLWpzL3BhcnNlLWludC5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMyL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUtY29yZWpzMi9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lLWNvcmVqczIvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL3BhcnNlLWludC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19leHBvcnQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wYXJzZS1pbnQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3N0cmluZy10cmltLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zdHJpbmctd3MuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYucGFyc2UtaW50LmpzIiwic3JjL2JsYWNrbWFnZS50cyIsInNyYy9ibGFja21hZ2UvVU9TQS50cyIsInNyYy9ibGFja21hZ2UvZmVhdHVyZS91by9sdWEvYWRkLWZ1bmN0aW9ucy9pbmRleC50cyIsInNyYy9ibGFja21hZ2UvZmVhdHVyZS91by9sdWEvcHJpbnQtZnVuY3Rpb25zL2luZGV4LnRzIiwic3JjL2JsYWNrbWFnZS9zZXJ2aWNlL2V4ZS9pbmRleC50cyIsInNyYy9ibGFja21hZ2UvdXRpbC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOztBQ0FBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlCQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDSkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRQSxJQUFBLGlCQUFBLEdBQUEsZUFBQSxDQUFBLE9BQUEsQ0FBQSw0Q0FBQSxDQUFBLENBQUE7O0FBR0EsSUFBQSxlQUFBLEdBQUEsZUFBQSxDQUFBLE9BQUEsQ0FBQSwwQ0FBQSxDQUFBLENBQUE7O0FBQ0EsSUFBQSxNQUFBLEdBQUEsT0FBQSxDQUFBLGtCQUFBLENBQUE7O0FBRUEsSUFBTSxJ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LENBQVYsQ0FBUixHQUF1QixHQUE1QjtBQUNBLEVBQUEsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxPQUFELEVBQVUsRUFBVixDQUFSLEdBQXdCLEdBQTdCO0FBQ0EsRUFBQSxDQUFDLElBQUksUUFBUSxDQUFDLE9BQUQsRUFBVSxFQUFWLENBQWIsQ0FMbUQsQ0FNbkQ7O0FBQ0EsU0FBTyxDQUFQO0FBQ0g7O0FBUkQsT0FBQSxDQUFBLGdCQUFBLEdBQUEsZ0JBQUE7O0FBVUEsU0FBZ0IsZ0JBQWhCLENBQWlDLEdBQWpDLEVBQTRDO0FBQ3hDLE1BQUksQ0FBQyxHQUFHLEVBQVI7O0FBQ0EsT0FBSyxJQUFJLENBQUMsR0FBRyxDQUFiLEVBQWdCLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBeEIsRUFBZ0MsQ0FBQyxFQUFqQyxFQUFxQztBQUNqQyxJQUFBLENBQUMsSUFBSSxHQUFHLENBQUMsVUFBSixDQUFlLENBQWYsRUFBa0IsUUFBbEIsQ0FBMkIsRUFBM0IsSUFBaUMsR0FBdEM7QUFDSCxHQUp1QyxDQUt4Qzs7O0FBQ0EsU0FBTyxDQUFQO0FBQ0g7O0FBUEQsT0FBQSxDQUFBLGdCQUFBLEdBQUEsZ0JBQUE7O0FBU0EsU0FBZ0IsV0FBaEIsQ0FBNEIsQ0FBNUIsRUFBb0MsR0FBcEMsRUFBNEM7QUFDeEM7QUFDQTtBQUNBLFNBQU8sMkJBQVMsT0FBTyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQUYsQ0FBVyxFQUFYLENBQUQsRUFBaUIsR0FBakIsRUFBc0IsQ0FBdEIsQ0FBUCxDQUFnQyxNQUFoQyxDQUF1QyxDQUFDLENBQUQsSUFBSSxHQUFHLEdBQUMsQ0FBUixDQUF2QyxFQUFtRCxDQUFuRCxDQUFoQixDQUFQO0FBQ0g7O0FBSkQsT0FBQSxDQUFBLFdBQUEsR0FBQSxXQUFBOztBQU1BLFNBQWdCLFdBQWhCLENBQTRCLENBQTVCLEVBQW9DLENBQXBDLEVBQTBDO0FBQ3RDLFNBQVEsV0FBVyxDQUFDLENBQUQsRUFBSSxDQUFKLENBQVgsSUFBcUIsV0FBVyxDQUFDLENBQUQsRUFBSSxDQUFKLENBQWpDLElBQ0gsV0FBVyxDQUFDLENBQUQsRUFBSSxDQUFKLENBQVgsSUFBcUIsV0FBVyxDQUFDLENBQUQsRUFBSSxDQUFKLENBRDdCLElBRUgsV0FBVyxDQUFDLENBQUQsRUFBSSxDQUFKLENBQVgsSUFBcUIsV0FBVyxDQUFDLENBQUQsRUFBSSxDQUFKLENBRjdCLElBR0gsV0FBVyxDQUFDLENBQUQsRUFBSSxDQUFKLENBQVgsSUFBcUIsV0FBVyxDQUFDLENBQUQsRUFBSSxDQUFKLENBSHBDO0FBSUg7O0FBTEQsT0FBQSxDQUFBLFdBQUEsR0FBQSxXQUFBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIifQ==
