(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports = require("core-js/library/fn/object/define-property");
},{"core-js/library/fn/object/define-property":4}],2:[function(require,module,exports){
module.exports = require("core-js/library/fn/parse-int");
},{"core-js/library/fn/parse-int":5}],3:[function(require,module,exports){
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
},{}],4:[function(require,module,exports){
require('../../modules/es6.object.define-property');
var $Object = require('../../modules/_core').Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};

},{"../../modules/_core":8,"../../modules/es6.object.define-property":26}],5:[function(require,module,exports){
require('../modules/es6.parse-int');
module.exports = require('../modules/_core').parseInt;

},{"../modules/_core":8,"../modules/es6.parse-int":27}],6:[function(require,module,exports){
module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

},{}],7:[function(require,module,exports){
var isObject = require('./_is-object');
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

},{"./_is-object":19}],8:[function(require,module,exports){
var core = module.exports = { version: '2.6.11' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

},{}],9:[function(require,module,exports){
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

},{"./_a-function":6}],10:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

},{}],11:[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./_fails')(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});

},{"./_fails":14}],12:[function(require,module,exports){
var isObject = require('./_is-object');
var document = require('./_global').document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};

},{"./_global":15,"./_is-object":19}],13:[function(require,module,exports){
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

},{"./_core":8,"./_ctx":9,"./_global":15,"./_has":16,"./_hide":17}],14:[function(require,module,exports){
module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

},{}],15:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

},{}],16:[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

},{}],17:[function(require,module,exports){
var dP = require('./_object-dp');
var createDesc = require('./_property-desc');
module.exports = require('./_descriptors') ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

},{"./_descriptors":11,"./_object-dp":20,"./_property-desc":22}],18:[function(require,module,exports){
module.exports = !require('./_descriptors') && !require('./_fails')(function () {
  return Object.defineProperty(require('./_dom-create')('div'), 'a', { get: function () { return 7; } }).a != 7;
});

},{"./_descriptors":11,"./_dom-create":12,"./_fails":14}],19:[function(require,module,exports){
module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

},{}],20:[function(require,module,exports){
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

},{"./_an-object":7,"./_descriptors":11,"./_ie8-dom-define":18,"./_to-primitive":25}],21:[function(require,module,exports){
var $parseInt = require('./_global').parseInt;
var $trim = require('./_string-trim').trim;
var ws = require('./_string-ws');
var hex = /^[-+]?0[xX]/;

module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
  var string = $trim(String(str), 3);
  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
} : $parseInt;

},{"./_global":15,"./_string-trim":23,"./_string-ws":24}],22:[function(require,module,exports){
module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

},{}],23:[function(require,module,exports){
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

},{"./_defined":10,"./_export":13,"./_fails":14,"./_string-ws":24}],24:[function(require,module,exports){
module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

},{}],25:[function(require,module,exports){
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

},{"./_is-object":19}],26:[function(require,module,exports){
var $export = require('./_export');
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !require('./_descriptors'), 'Object', { defineProperty: require('./_object-dp').f });

},{"./_descriptors":11,"./_export":13,"./_object-dp":20}],27:[function(require,module,exports){
var $export = require('./_export');
var $parseInt = require('./_parse-int');
// 18.2.5 parseInt(string, radix)
$export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });

},{"./_export":13,"./_parse-int":21}],28:[function(require,module,exports){
"use strict";

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

var print_functions_1 = __importDefault(require("./feature/uo/lua/print-functions"));

var add_functions_1 = __importDefault(require("./feature/uo/lua/add-functions")); //EnableDebugLog.onExecute()
//PrintLibraries.onExecute()


print_functions_1["default"].onExecute();
add_functions_1["default"].onExecute();

},{"./feature/uo/lua/add-functions":29,"./feature/uo/lua/print-functions":30,"@babel/runtime-corejs2/core-js/object/define-property":1,"@babel/runtime-corejs2/helpers/interopRequireDefault":3}],29:[function(require,module,exports){
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

},{"../../../../service/exe":31,"../../../../util":32,"@babel/runtime-corejs2/core-js/object/define-property":1,"@babel/runtime-corejs2/helpers/interopRequireDefault":3}],30:[function(require,module,exports){
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

},{"../../../../service/exe":31,"../../../../util":32,"@babel/runtime-corejs2/core-js/object/define-property":1,"@babel/runtime-corejs2/helpers/interopRequireDefault":3}],31:[function(require,module,exports){
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

},{"@babel/runtime-corejs2/core-js/object/define-property":1,"@babel/runtime-corejs2/helpers/interopRequireDefault":3}],32:[function(require,module,exports){
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

},{"@babel/runtime-corejs2/core-js/object/define-property":1,"@babel/runtime-corejs2/core-js/parse-int":2,"@babel/runtime-corejs2/helpers/interopRequireDefault":3}]},{},[28])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUtY29yZWpzMi9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUtY29yZWpzMi9jb3JlLWpzL3BhcnNlLWludC5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMyL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9wYXJzZS1pbnQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2EtZnVuY3Rpb24uanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLW9iamVjdC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29yZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZWZpbmVkLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hpZGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcGFyc2UtaW50LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zdHJpbmctdHJpbS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3RyaW5nLXdzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHkuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnBhcnNlLWludC5qcyIsInNyYy9idW5kbGUvYmxhY2ttYWdlLnRzIiwic3JjL2J1bmRsZS9mZWF0dXJlL3VvL2x1YS9hZGQtZnVuY3Rpb25zL2luZGV4LnRzIiwic3JjL2J1bmRsZS9mZWF0dXJlL3VvL2x1YS9wcmludC1mdW5jdGlvbnMvaW5kZXgudHMiLCJzcmMvYnVuZGxlL3NlcnZpY2UvZXhlL2luZGV4LnRzIiwic3JjL2J1bmRsZS91dGlsL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7O0FDQUE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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
