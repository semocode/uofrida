(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports = require("core-js/library/fn/object/create");
},{"core-js/library/fn/object/create":18}],2:[function(require,module,exports){
module.exports = require("core-js/library/fn/object/define-property");
},{"core-js/library/fn/object/define-property":19}],3:[function(require,module,exports){
module.exports = require("core-js/library/fn/object/get-prototype-of");
},{"core-js/library/fn/object/get-prototype-of":20}],4:[function(require,module,exports){
module.exports = require("core-js/library/fn/object/set-prototype-of");
},{"core-js/library/fn/object/set-prototype-of":21}],5:[function(require,module,exports){
module.exports = require("core-js/library/fn/parse-int");
},{"core-js/library/fn/parse-int":22}],6:[function(require,module,exports){
module.exports = require("core-js/library/fn/reflect/construct");
},{"core-js/library/fn/reflect/construct":23}],7:[function(require,module,exports){
module.exports = require("core-js/library/fn/symbol");
},{"core-js/library/fn/symbol":24}],8:[function(require,module,exports){
module.exports = require("core-js/library/fn/symbol/iterator");
},{"core-js/library/fn/symbol/iterator":25}],9:[function(require,module,exports){
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;
},{}],10:[function(require,module,exports){
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
},{}],11:[function(require,module,exports){
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
},{"../core-js/object/define-property":2}],12:[function(require,module,exports){
var _Object$getPrototypeOf = require("../core-js/object/get-prototype-of");

var _Object$setPrototypeOf = require("../core-js/object/set-prototype-of");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
},{"../core-js/object/get-prototype-of":3,"../core-js/object/set-prototype-of":4}],13:[function(require,module,exports){
var _Object$create = require("../core-js/object/create");

var setPrototypeOf = require("./setPrototypeOf");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;
},{"../core-js/object/create":1,"./setPrototypeOf":16}],14:[function(require,module,exports){
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
},{}],15:[function(require,module,exports){
var _typeof = require("../helpers/typeof");

var assertThisInitialized = require("./assertThisInitialized");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;
},{"../helpers/typeof":17,"./assertThisInitialized":9}],16:[function(require,module,exports){
var _Object$setPrototypeOf = require("../core-js/object/set-prototype-of");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
},{"../core-js/object/set-prototype-of":4}],17:[function(require,module,exports){
var _Symbol$iterator = require("../core-js/symbol/iterator");

var _Symbol = require("../core-js/symbol");

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;
},{"../core-js/symbol":7,"../core-js/symbol/iterator":8}],18:[function(require,module,exports){
require('../../modules/es6.object.create');
var $Object = require('../../modules/_core').Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};

},{"../../modules/_core":32,"../../modules/es6.object.create":89}],19:[function(require,module,exports){
require('../../modules/es6.object.define-property');
var $Object = require('../../modules/_core').Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};

},{"../../modules/_core":32,"../../modules/es6.object.define-property":90}],20:[function(require,module,exports){
require('../../modules/es6.object.get-prototype-of');
module.exports = require('../../modules/_core').Object.getPrototypeOf;

},{"../../modules/_core":32,"../../modules/es6.object.get-prototype-of":91}],21:[function(require,module,exports){
require('../../modules/es6.object.set-prototype-of');
module.exports = require('../../modules/_core').Object.setPrototypeOf;

},{"../../modules/_core":32,"../../modules/es6.object.set-prototype-of":92}],22:[function(require,module,exports){
require('../modules/es6.parse-int');
module.exports = require('../modules/_core').parseInt;

},{"../modules/_core":32,"../modules/es6.parse-int":94}],23:[function(require,module,exports){
require('../../modules/es6.reflect.construct');
module.exports = require('../../modules/_core').Reflect.construct;

},{"../../modules/_core":32,"../../modules/es6.reflect.construct":95}],24:[function(require,module,exports){
require('../../modules/es6.symbol');
require('../../modules/es6.object.to-string');
require('../../modules/es7.symbol.async-iterator');
require('../../modules/es7.symbol.observable');
module.exports = require('../../modules/_core').Symbol;

},{"../../modules/_core":32,"../../modules/es6.object.to-string":93,"../../modules/es6.symbol":97,"../../modules/es7.symbol.async-iterator":98,"../../modules/es7.symbol.observable":99}],25:[function(require,module,exports){
require('../../modules/es6.string.iterator');
require('../../modules/web.dom.iterable');
module.exports = require('../../modules/_wks-ext').f('iterator');

},{"../../modules/_wks-ext":86,"../../modules/es6.string.iterator":96,"../../modules/web.dom.iterable":100}],26:[function(require,module,exports){
module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

},{}],27:[function(require,module,exports){
module.exports = function () { /* empty */ };

},{}],28:[function(require,module,exports){
var isObject = require('./_is-object');
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

},{"./_is-object":49}],29:[function(require,module,exports){
// false -> Array#indexOf
// true  -> Array#includes
var toIObject = require('./_to-iobject');
var toLength = require('./_to-length');
var toAbsoluteIndex = require('./_to-absolute-index');
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

},{"./_to-absolute-index":78,"./_to-iobject":80,"./_to-length":81}],30:[function(require,module,exports){
'use strict';
var aFunction = require('./_a-function');
var isObject = require('./_is-object');
var invoke = require('./_invoke');
var arraySlice = [].slice;
var factories = {};

var construct = function (F, len, args) {
  if (!(len in factories)) {
    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  } return factories[len](F, args);
};

module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = arraySlice.call(arguments, 1);
  var bound = function (/* args... */) {
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };
  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
  return bound;
};

},{"./_a-function":26,"./_invoke":46,"./_is-object":49}],31:[function(require,module,exports){
var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

},{}],32:[function(require,module,exports){
var core = module.exports = { version: '2.6.11' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

},{}],33:[function(require,module,exports){
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

},{"./_a-function":26}],34:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

},{}],35:[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./_fails')(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});

},{"./_fails":40}],36:[function(require,module,exports){
var isObject = require('./_is-object');
var document = require('./_global').document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};

},{"./_global":41,"./_is-object":49}],37:[function(require,module,exports){
// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

},{}],38:[function(require,module,exports){
// all enumerable object keys, includes symbols
var getKeys = require('./_object-keys');
var gOPS = require('./_object-gops');
var pIE = require('./_object-pie');
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};

},{"./_object-gops":62,"./_object-keys":65,"./_object-pie":66}],39:[function(require,module,exports){
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

},{"./_core":32,"./_ctx":33,"./_global":41,"./_has":42,"./_hide":43}],40:[function(require,module,exports){
module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

},{}],41:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

},{}],42:[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

},{}],43:[function(require,module,exports){
var dP = require('./_object-dp');
var createDesc = require('./_property-desc');
module.exports = require('./_descriptors') ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

},{"./_descriptors":35,"./_object-dp":57,"./_property-desc":69}],44:[function(require,module,exports){
var document = require('./_global').document;
module.exports = document && document.documentElement;

},{"./_global":41}],45:[function(require,module,exports){
module.exports = !require('./_descriptors') && !require('./_fails')(function () {
  return Object.defineProperty(require('./_dom-create')('div'), 'a', { get: function () { return 7; } }).a != 7;
});

},{"./_descriptors":35,"./_dom-create":36,"./_fails":40}],46:[function(require,module,exports){
// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};

},{}],47:[function(require,module,exports){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require('./_cof');
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};

},{"./_cof":31}],48:[function(require,module,exports){
// 7.2.2 IsArray(argument)
var cof = require('./_cof');
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};

},{"./_cof":31}],49:[function(require,module,exports){
module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

},{}],50:[function(require,module,exports){
'use strict';
var create = require('./_object-create');
var descriptor = require('./_property-desc');
var setToStringTag = require('./_set-to-string-tag');
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
require('./_hide')(IteratorPrototype, require('./_wks')('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};

},{"./_hide":43,"./_object-create":56,"./_property-desc":69,"./_set-to-string-tag":72,"./_wks":87}],51:[function(require,module,exports){
'use strict';
var LIBRARY = require('./_library');
var $export = require('./_export');
var redefine = require('./_redefine');
var hide = require('./_hide');
var Iterators = require('./_iterators');
var $iterCreate = require('./_iter-create');
var setToStringTag = require('./_set-to-string-tag');
var getPrototypeOf = require('./_object-gpo');
var ITERATOR = require('./_wks')('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

},{"./_export":39,"./_hide":43,"./_iter-create":50,"./_iterators":53,"./_library":54,"./_object-gpo":63,"./_redefine":70,"./_set-to-string-tag":72,"./_wks":87}],52:[function(require,module,exports){
module.exports = function (done, value) {
  return { value: value, done: !!done };
};

},{}],53:[function(require,module,exports){
module.exports = {};

},{}],54:[function(require,module,exports){
module.exports = true;

},{}],55:[function(require,module,exports){
var META = require('./_uid')('meta');
var isObject = require('./_is-object');
var has = require('./_has');
var setDesc = require('./_object-dp').f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !require('./_fails')(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};

},{"./_fails":40,"./_has":42,"./_is-object":49,"./_object-dp":57,"./_uid":84}],56:[function(require,module,exports){
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = require('./_an-object');
var dPs = require('./_object-dps');
var enumBugKeys = require('./_enum-bug-keys');
var IE_PROTO = require('./_shared-key')('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = require('./_dom-create')('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  require('./_html').appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};

},{"./_an-object":28,"./_dom-create":36,"./_enum-bug-keys":37,"./_html":44,"./_object-dps":58,"./_shared-key":73}],57:[function(require,module,exports){
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

},{"./_an-object":28,"./_descriptors":35,"./_ie8-dom-define":45,"./_to-primitive":83}],58:[function(require,module,exports){
var dP = require('./_object-dp');
var anObject = require('./_an-object');
var getKeys = require('./_object-keys');

module.exports = require('./_descriptors') ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

},{"./_an-object":28,"./_descriptors":35,"./_object-dp":57,"./_object-keys":65}],59:[function(require,module,exports){
var pIE = require('./_object-pie');
var createDesc = require('./_property-desc');
var toIObject = require('./_to-iobject');
var toPrimitive = require('./_to-primitive');
var has = require('./_has');
var IE8_DOM_DEFINE = require('./_ie8-dom-define');
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = require('./_descriptors') ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};

},{"./_descriptors":35,"./_has":42,"./_ie8-dom-define":45,"./_object-pie":66,"./_property-desc":69,"./_to-iobject":80,"./_to-primitive":83}],60:[function(require,module,exports){
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = require('./_to-iobject');
var gOPN = require('./_object-gopn').f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};

},{"./_object-gopn":61,"./_to-iobject":80}],61:[function(require,module,exports){
// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = require('./_object-keys-internal');
var hiddenKeys = require('./_enum-bug-keys').concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};

},{"./_enum-bug-keys":37,"./_object-keys-internal":64}],62:[function(require,module,exports){
exports.f = Object.getOwnPropertySymbols;

},{}],63:[function(require,module,exports){
// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = require('./_has');
var toObject = require('./_to-object');
var IE_PROTO = require('./_shared-key')('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

},{"./_has":42,"./_shared-key":73,"./_to-object":82}],64:[function(require,module,exports){
var has = require('./_has');
var toIObject = require('./_to-iobject');
var arrayIndexOf = require('./_array-includes')(false);
var IE_PROTO = require('./_shared-key')('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

},{"./_array-includes":29,"./_has":42,"./_shared-key":73,"./_to-iobject":80}],65:[function(require,module,exports){
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = require('./_object-keys-internal');
var enumBugKeys = require('./_enum-bug-keys');

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};

},{"./_enum-bug-keys":37,"./_object-keys-internal":64}],66:[function(require,module,exports){
exports.f = {}.propertyIsEnumerable;

},{}],67:[function(require,module,exports){
// most Object methods by ES6 should accept primitives
var $export = require('./_export');
var core = require('./_core');
var fails = require('./_fails');
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};

},{"./_core":32,"./_export":39,"./_fails":40}],68:[function(require,module,exports){
var $parseInt = require('./_global').parseInt;
var $trim = require('./_string-trim').trim;
var ws = require('./_string-ws');
var hex = /^[-+]?0[xX]/;

module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
  var string = $trim(String(str), 3);
  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
} : $parseInt;

},{"./_global":41,"./_string-trim":76,"./_string-ws":77}],69:[function(require,module,exports){
module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

},{}],70:[function(require,module,exports){
module.exports = require('./_hide');

},{"./_hide":43}],71:[function(require,module,exports){
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = require('./_is-object');
var anObject = require('./_an-object');
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = require('./_ctx')(Function.call, require('./_object-gopd').f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};

},{"./_an-object":28,"./_ctx":33,"./_is-object":49,"./_object-gopd":59}],72:[function(require,module,exports){
var def = require('./_object-dp').f;
var has = require('./_has');
var TAG = require('./_wks')('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};

},{"./_has":42,"./_object-dp":57,"./_wks":87}],73:[function(require,module,exports){
var shared = require('./_shared')('keys');
var uid = require('./_uid');
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};

},{"./_shared":74,"./_uid":84}],74:[function(require,module,exports){
var core = require('./_core');
var global = require('./_global');
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: require('./_library') ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});

},{"./_core":32,"./_global":41,"./_library":54}],75:[function(require,module,exports){
var toInteger = require('./_to-integer');
var defined = require('./_defined');
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

},{"./_defined":34,"./_to-integer":79}],76:[function(require,module,exports){
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

},{"./_defined":34,"./_export":39,"./_fails":40,"./_string-ws":77}],77:[function(require,module,exports){
module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

},{}],78:[function(require,module,exports){
var toInteger = require('./_to-integer');
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

},{"./_to-integer":79}],79:[function(require,module,exports){
// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

},{}],80:[function(require,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./_iobject');
var defined = require('./_defined');
module.exports = function (it) {
  return IObject(defined(it));
};

},{"./_defined":34,"./_iobject":47}],81:[function(require,module,exports){
// 7.1.15 ToLength
var toInteger = require('./_to-integer');
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

},{"./_to-integer":79}],82:[function(require,module,exports){
// 7.1.13 ToObject(argument)
var defined = require('./_defined');
module.exports = function (it) {
  return Object(defined(it));
};

},{"./_defined":34}],83:[function(require,module,exports){
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

},{"./_is-object":49}],84:[function(require,module,exports){
var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

},{}],85:[function(require,module,exports){
var global = require('./_global');
var core = require('./_core');
var LIBRARY = require('./_library');
var wksExt = require('./_wks-ext');
var defineProperty = require('./_object-dp').f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};

},{"./_core":32,"./_global":41,"./_library":54,"./_object-dp":57,"./_wks-ext":86}],86:[function(require,module,exports){
exports.f = require('./_wks');

},{"./_wks":87}],87:[function(require,module,exports){
var store = require('./_shared')('wks');
var uid = require('./_uid');
var Symbol = require('./_global').Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

},{"./_global":41,"./_shared":74,"./_uid":84}],88:[function(require,module,exports){
'use strict';
var addToUnscopables = require('./_add-to-unscopables');
var step = require('./_iter-step');
var Iterators = require('./_iterators');
var toIObject = require('./_to-iobject');

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = require('./_iter-define')(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

},{"./_add-to-unscopables":27,"./_iter-define":51,"./_iter-step":52,"./_iterators":53,"./_to-iobject":80}],89:[function(require,module,exports){
var $export = require('./_export');
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: require('./_object-create') });

},{"./_export":39,"./_object-create":56}],90:[function(require,module,exports){
var $export = require('./_export');
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !require('./_descriptors'), 'Object', { defineProperty: require('./_object-dp').f });

},{"./_descriptors":35,"./_export":39,"./_object-dp":57}],91:[function(require,module,exports){
// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = require('./_to-object');
var $getPrototypeOf = require('./_object-gpo');

require('./_object-sap')('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});

},{"./_object-gpo":63,"./_object-sap":67,"./_to-object":82}],92:[function(require,module,exports){
// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = require('./_export');
$export($export.S, 'Object', { setPrototypeOf: require('./_set-proto').set });

},{"./_export":39,"./_set-proto":71}],93:[function(require,module,exports){

},{}],94:[function(require,module,exports){
var $export = require('./_export');
var $parseInt = require('./_parse-int');
// 18.2.5 parseInt(string, radix)
$export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });

},{"./_export":39,"./_parse-int":68}],95:[function(require,module,exports){
// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var $export = require('./_export');
var create = require('./_object-create');
var aFunction = require('./_a-function');
var anObject = require('./_an-object');
var isObject = require('./_is-object');
var fails = require('./_fails');
var bind = require('./_bind');
var rConstruct = (require('./_global').Reflect || {}).construct;

// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(rConstruct(function () { /* empty */ }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  rConstruct(function () { /* empty */ });
});

$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
  construct: function construct(Target, args /* , newTarget */) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});

},{"./_a-function":26,"./_an-object":28,"./_bind":30,"./_export":39,"./_fails":40,"./_global":41,"./_is-object":49,"./_object-create":56}],96:[function(require,module,exports){
'use strict';
var $at = require('./_string-at')(true);

// 21.1.3.27 String.prototype[@@iterator]()
require('./_iter-define')(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});

},{"./_iter-define":51,"./_string-at":75}],97:[function(require,module,exports){
'use strict';
// ECMAScript 6 symbols shim
var global = require('./_global');
var has = require('./_has');
var DESCRIPTORS = require('./_descriptors');
var $export = require('./_export');
var redefine = require('./_redefine');
var META = require('./_meta').KEY;
var $fails = require('./_fails');
var shared = require('./_shared');
var setToStringTag = require('./_set-to-string-tag');
var uid = require('./_uid');
var wks = require('./_wks');
var wksExt = require('./_wks-ext');
var wksDefine = require('./_wks-define');
var enumKeys = require('./_enum-keys');
var isArray = require('./_is-array');
var anObject = require('./_an-object');
var isObject = require('./_is-object');
var toObject = require('./_to-object');
var toIObject = require('./_to-iobject');
var toPrimitive = require('./_to-primitive');
var createDesc = require('./_property-desc');
var _create = require('./_object-create');
var gOPNExt = require('./_object-gopn-ext');
var $GOPD = require('./_object-gopd');
var $GOPS = require('./_object-gops');
var $DP = require('./_object-dp');
var $keys = require('./_object-keys');
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  require('./_object-gopn').f = gOPNExt.f = $getOwnPropertyNames;
  require('./_object-pie').f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !require('./_library')) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || require('./_hide')($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

},{"./_an-object":28,"./_descriptors":35,"./_enum-keys":38,"./_export":39,"./_fails":40,"./_global":41,"./_has":42,"./_hide":43,"./_is-array":48,"./_is-object":49,"./_library":54,"./_meta":55,"./_object-create":56,"./_object-dp":57,"./_object-gopd":59,"./_object-gopn":61,"./_object-gopn-ext":60,"./_object-gops":62,"./_object-keys":65,"./_object-pie":66,"./_property-desc":69,"./_redefine":70,"./_set-to-string-tag":72,"./_shared":74,"./_to-iobject":80,"./_to-object":82,"./_to-primitive":83,"./_uid":84,"./_wks":87,"./_wks-define":85,"./_wks-ext":86}],98:[function(require,module,exports){
require('./_wks-define')('asyncIterator');

},{"./_wks-define":85}],99:[function(require,module,exports){
require('./_wks-define')('observable');

},{"./_wks-define":85}],100:[function(require,module,exports){
require('./es6.array.iterator');
var global = require('./_global');
var hide = require('./_hide');
var Iterators = require('./_iterators');
var TO_STRING_TAG = require('./_wks')('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

},{"./_global":41,"./_hide":43,"./_iterators":53,"./_wks":87,"./es6.array.iterator":88}],101:[function(require,module,exports){
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

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var Client_1 = require("./blackmage/Client");

var lua_1 = require("./blackmage/feature/lua");

var uo_1 = require("./blackmage/feature/uo");

var uosa = new Client_1.Client({
  features: [new lua_1.AddFunctions(), new uo_1.PrintDebugLog(), new lua_1.PrintUiLog()],
  bugfixes: []
}).start();

},{"./blackmage/Client":102,"./blackmage/feature/lua":106,"./blackmage/feature/uo":110,"@babel/runtime-corejs2/core-js/object/define-property":2,"@babel/runtime-corejs2/helpers/interopRequireDefault":14}],102:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/createClass"));

var _defineProperty = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/define-property"));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
exports.Client = void 0;

var Client = /*#__PURE__*/function () {
  function Client(config) {
    (0, _classCallCheck2["default"])(this, Client);
    this.properties = config;
  }

  (0, _createClass2["default"])(Client, [{
    key: "start",
    value: function start() {
      this.properties.bugfixes.forEach(function (bugfix) {
        bugfix.execute();
      });
      this.properties.features.forEach(function (feature) {
        feature.execute();
      });
    }
  }]);
  return Client;
}();

exports.Client = Client;

},{"@babel/runtime-corejs2/core-js/object/define-property":2,"@babel/runtime-corejs2/helpers/classCallCheck":10,"@babel/runtime-corejs2/helpers/createClass":11,"@babel/runtime-corejs2/helpers/interopRequireDefault":14}],103:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/createClass"));

var _defineProperty = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/define-property"));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
exports.Extension = void 0;

var Extension = /*#__PURE__*/function () {
  function Extension() {
    (0, _classCallCheck2["default"])(this, Extension);
  }

  (0, _createClass2["default"])(Extension, [{
    key: "execute",
    value: function execute() {
      this.onExecute();
    }
  }]);
  return Extension;
}();

exports.Extension = Extension;

},{"@babel/runtime-corejs2/core-js/object/define-property":2,"@babel/runtime-corejs2/helpers/classCallCheck":10,"@babel/runtime-corejs2/helpers/createClass":11,"@babel/runtime-corejs2/helpers/interopRequireDefault":14}],104:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _construct = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/reflect/construct"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/getPrototypeOf"));

var _defineProperty = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/define-property"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = (0, _construct["default"])(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_construct["default"]) return false; if (_construct["default"].sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call((0, _construct["default"])(Date, [], function () {})); return true; } catch (e) { return false; } }

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
exports.Feature = void 0;

var Extension_1 = require("./Extension");

var Feature = /*#__PURE__*/function (_Extension_1$Extensio) {
  (0, _inherits2["default"])(Feature, _Extension_1$Extensio);

  var _super = _createSuper(Feature);

  function Feature() {
    (0, _classCallCheck2["default"])(this, Feature);
    return _super.apply(this, arguments);
  }

  return Feature;
}(Extension_1.Extension);

exports.Feature = Feature;

},{"./Extension":103,"@babel/runtime-corejs2/core-js/object/define-property":2,"@babel/runtime-corejs2/core-js/reflect/construct":6,"@babel/runtime-corejs2/helpers/classCallCheck":10,"@babel/runtime-corejs2/helpers/getPrototypeOf":12,"@babel/runtime-corejs2/helpers/inherits":13,"@babel/runtime-corejs2/helpers/interopRequireDefault":14,"@babel/runtime-corejs2/helpers/possibleConstructorReturn":15}],105:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _construct = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/reflect/construct"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/getPrototypeOf"));

var _defineProperty = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/define-property"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = (0, _construct["default"])(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_construct["default"]) return false; if (_construct["default"].sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call((0, _construct["default"])(Date, [], function () {})); return true; } catch (e) { return false; } }

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
exports.AddFunctions = void 0;

var exe_1 = require("../../../service/exe");

var util_1 = require("../../../util");

var Feature_1 = require("../../../Feature");

var UOInput_1 = require("../../../service/uo/UOInput");

var AddFunctions = /*#__PURE__*/function (_Feature_1$Feature) {
  (0, _inherits2["default"])(AddFunctions, _Feature_1$Feature);

  var _super = _createSuper(AddFunctions);

  function AddFunctions() {
    var _this;

    (0, _classCallCheck2["default"])(this, AddFunctions);
    _this = _super.apply(this, arguments); // Keep references to allocated memory so it does not get free'd (to avoid nasty crashes of UOSA.exe)

    _this.names = {};
    _this.callbacks = {};
    _this.trampoline = new NativePointer(0);
    _this.registerLuaFunction = new NativePointer(0);
    return _this;
  }

  (0, _createClass2["default"])(AddFunctions, [{
    key: "onExecute",
    value: function onExecute() {
      var _this2 = this;

      var s1 = Memory.scanSync(exe_1.rdata.base, exe_1.rdata.size, util_1.buildScanPattern("GetBuildVersion"));
      var sa = s1[0].address;
      var getBuildVersionString = sa; // Search xref to string in .text

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
      this.registerLuaFunction = sa3; // prepare our inserted code

      this.trampoline = Memory.alloc(Process.pageSize);
      Memory.protect(this.trampoline, Process.pageSize, "rwx");
      Memory.patchCode(this.trampoline, 256, function (code) {
        var cw = new X86Writer(code, {
          pc: _this2.trampoline
        }); // Re-register overwritten UOGetBuildVersion

        _this2.luaLoadAddr(cw, "GetBuildVersion", getBuildVersionImpl);

        _this2.luaLoad(cw, "PrintHello", function () {
          console.debug("Hello from uo-blackmage");
          console.info("Hello from uo-blackmage.");
          console.log("Hello from uo-blackmage..");
          console.warn("Hello from uo-blackmage...");
          console.error("Hello from uo-blackmage...");
        }); // Load a couple of mouse and keyboard functions


        _this2.luaLoad(cw, "MoveMouseAbs", function () {
          /*
                  if (lua_state) {
                      var x = parseInt(win32.lua_tonumber(lua_state, 1));
                      var y = parseInt(win32.lua_tonumber(lua_state, 2));
                      UOInput.MouseMoveAbs(x, y);
                  }
                  */
        });

        _this2.luaLoad(cw, "MouseRClick", function () {
          UOInput_1.UOInput.MouseRClick();
        });

        _this2.luaLoad(cw, "MouseLClick", function () {
          UOInput_1.UOInput.MouseLClick();
        });

        _this2.luaLoad(cw, "DIKey1", function () {
          // emulate '1'
          UOInput_1.UOInput.DIKey(2);
        });

        _this2.luaLoad(cw, "DIKey2", function () {
          UOInput_1.UOInput.DIKey(3);
        });

        _this2.luaLoad(cw, "DIKey3", function () {
          UOInput_1.UOInput.DIKey(4);
        });

        _this2.luaLoad(cw, "DIKey4", function () {
          UOInput_1.UOInput.DIKey(5);
        });

        _this2.luaLoad(cw, "DIKey5", function () {
          UOInput_1.UOInput.DIKey(6);
        });

        cw.putRet();
      }); // write actual hook into UO control flow

      Memory.patchCode(hookAddr, 32, function (code) {
        var cw = new X86Writer(code, {
          pc: hookAddr
        });
        cw.putCallAddress(_this2.trampoline);
        cw.putNopPadding(5 + 1 + 5);
      });
    }
  }, {
    key: "luaLoadAddr",
    value: function luaLoadAddr(cw, name, addr) {
      console.log('Adding new lua function "' + name + '"');
      var nameMemory = Memory.allocAnsiString(name);
      this.names[name] = nameMemory;
      cw.putPushU32(nameMemory.toInt32());
      cw.putPushU32(addr.toInt32());
      cw.putPushReg("esi");
      cw.putCallAddress(this.registerLuaFunction);
    }
  }, {
    key: "luaLoadArgs",
    value: function luaLoadArgs(cw, name, fn, args) {
      var nameMemory = Memory.allocAnsiString(name);
      this.names[name] = nameMemory;
      this.callbacks[name] = new NativeCallback(fn, "int", args);
      cw.putPushU32(this.names[name].toInt32());
      cw.putPushU32(this.callbacks[name].toInt32());
      cw.putPushReg("esi");
      cw.putCallAddress(this.registerLuaFunction);
    }
  }, {
    key: "luaLoad",
    value: function luaLoad(cw, name, fn) {
      console.log('Adding new lua function "' + name + '"');
      this.luaLoadArgs(cw, name, fn, []);
    }
  }]);
  return AddFunctions;
}(Feature_1.Feature);

exports.AddFunctions = AddFunctions;

},{"../../../Feature":104,"../../../service/exe":113,"../../../service/uo/UOInput":114,"../../../util":117,"@babel/runtime-corejs2/core-js/object/define-property":2,"@babel/runtime-corejs2/core-js/reflect/construct":6,"@babel/runtime-corejs2/helpers/classCallCheck":10,"@babel/runtime-corejs2/helpers/createClass":11,"@babel/runtime-corejs2/helpers/getPrototypeOf":12,"@babel/runtime-corejs2/helpers/inherits":13,"@babel/runtime-corejs2/helpers/interopRequireDefault":14,"@babel/runtime-corejs2/helpers/possibleConstructorReturn":15}],106:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _defineProperty = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/define-property"));

var _create = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/create"));

var __createBinding = void 0 && (void 0).__createBinding || (_create["default"] ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  (0, _defineProperty["default"])(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __exportStar = void 0 && (void 0).__exportStar || function (m, exports) {
  for (var p in m) {
    if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
  }
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

__exportStar(require("./add-functions"), exports);

__exportStar(require("./print-functions"), exports);

__exportStar(require("./print-libraries"), exports);

__exportStar(require("./print-ui-log"), exports);

},{"./add-functions":105,"./print-functions":107,"./print-libraries":108,"./print-ui-log":109,"@babel/runtime-corejs2/core-js/object/create":1,"@babel/runtime-corejs2/core-js/object/define-property":2,"@babel/runtime-corejs2/helpers/interopRequireDefault":14}],107:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _construct = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/reflect/construct"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/getPrototypeOf"));

var _defineProperty = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/define-property"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = (0, _construct["default"])(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_construct["default"]) return false; if (_construct["default"].sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call((0, _construct["default"])(Date, [], function () {})); return true; } catch (e) { return false; } }

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
exports.PrintFunctions = void 0;

var util_1 = require("../../../util");

var exe_1 = require("../../../service/exe");

var Feature_1 = require("../../../Feature");

var PrintFunctions = /*#__PURE__*/function (_Feature_1$Feature) {
  (0, _inherits2["default"])(PrintFunctions, _Feature_1$Feature);

  var _super = _createSuper(PrintFunctions);

  function PrintFunctions() {
    (0, _classCallCheck2["default"])(this, PrintFunctions);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(PrintFunctions, [{
    key: "onExecute",
    value: function onExecute() {
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
  }]);
  return PrintFunctions;
}(Feature_1.Feature);

exports.PrintFunctions = PrintFunctions;

},{"../../../Feature":104,"../../../service/exe":113,"../../../util":117,"@babel/runtime-corejs2/core-js/object/define-property":2,"@babel/runtime-corejs2/core-js/reflect/construct":6,"@babel/runtime-corejs2/helpers/classCallCheck":10,"@babel/runtime-corejs2/helpers/createClass":11,"@babel/runtime-corejs2/helpers/getPrototypeOf":12,"@babel/runtime-corejs2/helpers/inherits":13,"@babel/runtime-corejs2/helpers/interopRequireDefault":14,"@babel/runtime-corejs2/helpers/possibleConstructorReturn":15}],108:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _defineProperty = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/define-property"));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var exe_1 = require("../../../service/exe");

var util_1 = require("../../../util");

var PrintLibraries = {
  onExecute: function onExecute() {
    var s1 = Memory.scanSync(exe_1.rdata.base, exe_1.rdata.size, "00 " + util_1.buildScanPattern("_LOADED") + " 00");
    var sa = s1[0].address.add(1); //console.log("[  ]  Found string \"_LOADED\" @ " + sa.toString(16))
    // Search xref to string in .text

    var s2 = Memory.scanSync(exe_1.text.base, exe_1.text.size, util_1.buildPatternPushAbs(sa));
    var sa2 = s2[0].address.sub(0x2e); //console.log("[  ]  Found luaL_register @ " + sa2.toString(16))

    Interceptor.attach(sa2, {
      onEnter: function onEnter(args) {
        var esp = this.context.sp;
        var off = esp.add(4);
        var addr = ptr(off.readU32());

        if (!addr.isNull()) {
          var msg = addr.readCString(); // @ts-ignore

          var eax = this.context.eax;
          console.log("[UO] Loading lua library '" + msg + "' on lua state @ ", eax);
        }
      }
    });
  }
};
exports["default"] = PrintLibraries;

},{"../../../service/exe":113,"../../../util":117,"@babel/runtime-corejs2/core-js/object/define-property":2,"@babel/runtime-corejs2/helpers/interopRequireDefault":14}],109:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _construct = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/reflect/construct"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/getPrototypeOf"));

var _defineProperty = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/define-property"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = (0, _construct["default"])(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_construct["default"]) return false; if (_construct["default"].sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call((0, _construct["default"])(Date, [], function () {})); return true; } catch (e) { return false; } }

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
exports.PrintUiLog = void 0;

var Feature_1 = require("../../../Feature");

var exe_1 = require("../../../service/exe");

var util_1 = require("../../../util");

var PrintUiLog = /*#__PURE__*/function (_Feature_1$Feature) {
  (0, _inherits2["default"])(PrintUiLog, _Feature_1$Feature);

  var _super = _createSuper(PrintUiLog);

  function PrintUiLog() {
    (0, _classCallCheck2["default"])(this, PrintUiLog);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(PrintUiLog, [{
    key: "onExecute",
    value: function onExecute() {
      var s1 = Memory.scanSync(exe_1.rdata.base, exe_1.rdata.size, util_1.buildScanPattern(" Set m_defaultDir to %s"));
      var sa = s1[0].address; //console.log('[  ]  Found string " Set m_defaultDir" @ ' + sa.toString(16));
      // Search xref to string in .text

      var s2 = Memory.scanSync(exe_1.text.base, exe_1.text.size, util_1.buildPatternPushAbs(sa));
      var sa2 = s2[0].address;
      var call = sa2.add(13);
      var tar = ptr(call.add(1).readU32());
      var LuaLogError = call.add(5).add(tar).and(uint64("0xffffffff")); //console.log('[  ]  Found string " LogLuaError" @ ', LuaLogError);

      var current = Instruction.parse(LuaLogError); // Look for first call in lua_log_uilog

      while (current.mnemonic != "call") {
        current = Instruction.parse(current.next);
      } // Look for second call in lua_log_uilog


      current = Instruction.parse(current.next);

      while (current.mnemonic != "call") {
        current = Instruction.parse(current.next);
      } // Look for third call in lua_log_uilog


      current = Instruction.parse(current.next);

      while (current.mnemonic != "call") {
        current = Instruction.parse(current.next);
      }

      var hook = current;
      var target = ptr(current.address.add(1).readS32());
      var LogError = current.address.add(5).add(target); // ESI has the formatted string in it @ hook
      //console.log("intercept @ ", hook);

      Interceptor.attach(LogError, {
        onEnter: function onEnter(args) {
          var channel = args[0];
          var message = args[1].readUtf16String(); // Do not log function calls, i.e. channel 5

          console.log("UiLog ", channel, ": ", message);
        }
      });
    }
  }]);
  return PrintUiLog;
}(Feature_1.Feature);

exports.PrintUiLog = PrintUiLog;

},{"../../../Feature":104,"../../../service/exe":113,"../../../util":117,"@babel/runtime-corejs2/core-js/object/define-property":2,"@babel/runtime-corejs2/core-js/reflect/construct":6,"@babel/runtime-corejs2/helpers/classCallCheck":10,"@babel/runtime-corejs2/helpers/createClass":11,"@babel/runtime-corejs2/helpers/getPrototypeOf":12,"@babel/runtime-corejs2/helpers/inherits":13,"@babel/runtime-corejs2/helpers/interopRequireDefault":14,"@babel/runtime-corejs2/helpers/possibleConstructorReturn":15}],110:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _defineProperty = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/define-property"));

var _create = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/create"));

var __createBinding = void 0 && (void 0).__createBinding || (_create["default"] ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  (0, _defineProperty["default"])(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __exportStar = void 0 && (void 0).__exportStar || function (m, exports) {
  for (var p in m) {
    if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
  }
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

__exportStar(require("./print-debug-log"), exports);

},{"./print-debug-log":111,"@babel/runtime-corejs2/core-js/object/create":1,"@babel/runtime-corejs2/core-js/object/define-property":2,"@babel/runtime-corejs2/helpers/interopRequireDefault":14}],111:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _construct = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/reflect/construct"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/getPrototypeOf"));

var _defineProperty = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/define-property"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = (0, _construct["default"])(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_construct["default"]) return false; if (_construct["default"].sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call((0, _construct["default"])(Date, [], function () {})); return true; } catch (e) { return false; } }

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
exports.PrintDebugLog = void 0;

var exe_1 = require("../../../service/exe");

var Feature_1 = require("../../../Feature");

var PrintDebugLog = /*#__PURE__*/function (_Feature_1$Feature) {
  (0, _inherits2["default"])(PrintDebugLog, _Feature_1$Feature);

  var _super = _createSuper(PrintDebugLog);

  function PrintDebugLog() {
    (0, _classCallCheck2["default"])(this, PrintDebugLog);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(PrintDebugLog, [{
    key: "onExecute",
    value: function onExecute() {
      // Find UODebugLog function in .text
      var debug_log = Memory.scanSync(exe_1.text.base, exe_1.text.size, "e8 ?? ?? ?? ?? 81 c4 00 04 00 00 c3");
      var logAddr = debug_log[0];
      console.log(logAddr.address); // Hook UODebugLog function from UOSA.exe and print the message

      Interceptor.attach(logAddr.address, {
        onEnter: function onEnter(args) {
          // @ts-ignore
          var eax = this.context.eax;
          var msg = eax.readCString();
          console.log("DebugLog: " + msg.trim());
        }
      });
    }
  }]);
  return PrintDebugLog;
}(Feature_1.Feature);

exports.PrintDebugLog = PrintDebugLog;

},{"../../../Feature":104,"../../../service/exe":113,"@babel/runtime-corejs2/core-js/object/define-property":2,"@babel/runtime-corejs2/core-js/reflect/construct":6,"@babel/runtime-corejs2/helpers/classCallCheck":10,"@babel/runtime-corejs2/helpers/createClass":11,"@babel/runtime-corejs2/helpers/getPrototypeOf":12,"@babel/runtime-corejs2/helpers/inherits":13,"@babel/runtime-corejs2/helpers/interopRequireDefault":14,"@babel/runtime-corejs2/helpers/possibleConstructorReturn":15}],112:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/createClass"));

var _defineProperty = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/define-property"));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
exports.RTTI = void 0;

var RTTI = /*#__PURE__*/function () {
  function RTTI() {
    (0, _classCallCheck2["default"])(this, RTTI);
  }

  (0, _createClass2["default"])(RTTI, null, [{
    key: "findString",
    value: function findString(name) {
      var s1 = Memory.scanSync(ptr(data.base), uint64("" + data.size), buildScanPattern(".?AV" + name));

      if (s1.length > 0) {
        return s1[0].address;
      } else {
        return 0;
      }
    }
  }, {
    key: "findTypeDescriptor",
    value: function findTypeDescriptor(name) {
      var str = this.findString(name);

      if (str) {
        return str.sub(8);
      } else {
        return 0;
      }
    }
  }, {
    key: "findCompleteObjectLocator",
    value: function findCompleteObjectLocator(name) {
      var td = this.findTypeDescriptor(name);

      if (td) {
        var s2 = Memory.scanSync(ptr(rdata.base), uint64("" + rdata.size), buildPatternAddr(td));

        if (s2.length > 0) {
          return s2[0].address.sub(12);
        }
      }

      return 0;
    }
  }, {
    key: "findVTable",
    value: function findVTable(name) {
      var ol = this.findCompleteObjectLocator(name);

      if (ol) {
        var s2 = Memory.scanSync(ptr(rdata.base), uint64("" + rdata.size), buildPatternAddr(ol));

        if (s2.length > 0) {
          return s2[0].address;
        }
      }

      return 0;
    }
  }, {
    key: "interceptVTableEntry",
    value: function interceptVTableEntry(name, entry, hookObj) {
      var vtbl = this.findVTable(name);

      if (!vtbl) {
        console.log("[##] Could not find vtable of ", name, " to hook entry ", entry);
        return;
      }

      var off = vtbl.add(4 + entry * 4);
      var hook = SafeHook.createVTableHook(off, hookObj.onEnter, "void", []);
      Memory.protect(off, 4, "rwx");
      Memory.writePointer(off, hook.mem);
      console.log("[  ]  Intercepted vtable entry", entry, "of", name, "at", off);
    }
  }]);
  return RTTI;
}();

exports.RTTI = RTTI;

},{"@babel/runtime-corejs2/core-js/object/define-property":2,"@babel/runtime-corejs2/helpers/classCallCheck":10,"@babel/runtime-corejs2/helpers/createClass":11,"@babel/runtime-corejs2/helpers/interopRequireDefault":14}],113:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _defineProperty = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/define-property"));

var _create = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/create"));

var __createBinding = void 0 && (void 0).__createBinding || (_create["default"] ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  (0, _defineProperty["default"])(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __exportStar = void 0 && (void 0).__exportStar || function (m, exports) {
  for (var p in m) {
    if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
  }
};

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
  throw new Error("Could not find UOSA module");
}

var ranges = uosa.enumerateRanges("---");
exports.text = ranges[1];
exports.rdata = ranges[2];
exports.debug = ranges[ranges.length - 1];
exports.data = ranges[3];

__exportStar(require("./RTTI"), exports);

},{"./RTTI":112,"@babel/runtime-corejs2/core-js/object/create":1,"@babel/runtime-corejs2/core-js/object/define-property":2,"@babel/runtime-corejs2/helpers/interopRequireDefault":14}],114:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/createClass"));

var _defineProperty = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/define-property"));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
exports.UOInput = void 0;

var user32_1 = require("../win32/user32");
/**
 * UOInput Helper class for emulating keyboard and mouse inputs to UO
 *
 * Use DIKey or DIMouse functions to emulate DirectInput compatible inputs
 * as expected by UOSA
 *
 * Implementation upon win32 SendInput
 *
 * Reference to INPUT structure:
 * size = 0x1c
 * 0x0  int   type mouse=0, kb=1, hw=2
 * 0x4  union
 * 0x4 mi
 * 0x4  struct  ki
 * 0x4  4 short  vk
 * 0x6  6 short  scan
 * 0x8  8 int flags // 0 keydown 1 extendedkey 2 keyup 8 scancode 4 unicode
 * 0xc  12 int time // 0
 * 0x10 16 int extraPtr // 0
 * 0x4 hi
 */


var UOInput = /*#__PURE__*/function () {
  function UOInput() {
    (0, _classCallCheck2["default"])(this, UOInput);
  }

  (0, _createClass2["default"])(UOInput, null, [{
    key: "initialize",
    value: function initialize() {
      this.input = Memory.alloc(0x30);
      this.input.writeU32(1); // type = keyboard

      this.input.add(16).writeU32(0); // extra = NULL

      this.input.add(12).writeU32(0); // time = NULL

      this.point = Memory.alloc(0x10);
    }
  }, {
    key: "sendInput",
    value: function sendInput(vk, scan, flag) {
      this.input.add(4).writeU16(vk); // vk = NULL

      this.input.add(6).writeU16(scan); // scan

      this.input.add(8).writeU32(flag); // keydown

      user32_1.SendInput(1, UOInput.input, UOInput.inputSize);
    }
  }, {
    key: "DIKeyDown",
    value: function DIKeyDown(key) {
      this.sendInput(0, key, 0);
    }
  }, {
    key: "DIKeyUp",
    value: function DIKeyUp(key) {
      this.sendInput(0, key, 2);
    }
  }, {
    key: "DIKey",
    value: function DIKey(key) {
      this.DIKeyDown(key);
      this.DIKeyUp(key);
    }
  }, {
    key: "KeyShiftUp",
    value: function KeyShiftUp() {
      this.sendInput(0, 42, 8 + 2);
    }
  }, {
    key: "KeyShiftDown",
    value: function KeyShiftDown() {
      this.sendInput(0, 42, 8);
    }
  }, {
    key: "MouseMoveAbs",
    value: function MouseMoveAbs(x, y) {
      user32_1.mouse_event(0x8000 | 0x1, x, y, 0, 0);
    }
  }, {
    key: "MouseRClick",
    value: function MouseRClick() {
      var pos = this.GetCursorPos();
      user32_1.mouse_event(0x8, pos.x, pos.y, 0, 0);
      user32_1.mouse_event(0x10, pos.x, pos.y, 0, 0);
    }
  }, {
    key: "MouseLClick",
    value: function MouseLClick() {
      var pos = this.GetCursorPos();
      user32_1.mouse_event(0x2, pos.x, pos.y, 0, 0);
      user32_1.mouse_event(0x4, pos.x, pos.y, 0, 0);
    }
  }, {
    key: "GetCursorPos",
    value: function GetCursorPos() {
      user32_1.GetCursorPos(this.point);
      var x = this.point.readU32();
      var y = this.point.add(4).readU32();
      console.log("cursor at", x, y);
      return {
        x: x,
        y: y
      };
    }
  }]);
  return UOInput;
}();

exports.UOInput = UOInput;
UOInput.KEY_UP = 200;
UOInput.KEY_LEFT = 203;
UOInput.KEY_RIGHT = 205;
UOInput.KEY_DOWN = 208;
UOInput.KEY_CTRL = 29;
UOInput.inputSize = 0x1c;
UOInput.initialize();

},{"../win32/user32":116,"@babel/runtime-corejs2/core-js/object/define-property":2,"@babel/runtime-corejs2/helpers/classCallCheck":10,"@babel/runtime-corejs2/helpers/createClass":11,"@babel/runtime-corejs2/helpers/interopRequireDefault":14}],115:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _defineProperty = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/define-property"));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
exports.registerFunction = void 0;

function registerFunction(module, name, ret, args) {
  var addr = Module.findExportByName(module, name);

  if (!addr) {
    console.log('[' + module + '] Could not find export: ' + name);
    return;
  } // Create a new NativeFunction object for access to the win32 API from JS


  return new NativeFunction(addr, ret, args);
}

exports.registerFunction = registerFunction;

},{"@babel/runtime-corejs2/core-js/object/define-property":2,"@babel/runtime-corejs2/helpers/interopRequireDefault":14}],116:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _defineProperty = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/object/define-property"));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
exports.ShowWindow = exports.GetActiveWindow = exports.GetCursorPos = exports.mouse_event = exports.SendInput = exports.MessageBoxA = void 0;

var _1 = require(".");

function MessageBoxA(a, b) {
  var f = _1.registerFunction("user32.dll", "MessageBoxA", "int", ["int", "pointer", "pointer", "int"]);

  if (f) {
    var title = Memory.allocAnsiString(a);
    var msg = Memory.allocAnsiString(b);
    f(0, title, msg, 0);
  }
}

exports.MessageBoxA = MessageBoxA;

function SendInput(a, b, c) {
  var f = _1.registerFunction("user32.dll", "SendInput", "int", ["int", "pointer", "int"]);

  if (f) {
    f(a, b, c);
  }
}

exports.SendInput = SendInput;

function mouse_event(a, b, c, d, e) {
  var f = _1.registerFunction("user32.dll", "mouse_event", "void", ["int", "int", "int", "int", "int"]);

  if (f) {
    f(a, b, c, d, e);
  }
}

exports.mouse_event = mouse_event;

function GetCursorPos(point) {
  var f = _1.registerFunction("user32.dll", "GetCursorPos", "int", ["pointer"]);

  if (f) {
    return f(point);
  }

  return null;
}

exports.GetCursorPos = GetCursorPos;

function GetActiveWindow() {
  var f = _1.registerFunction("user32.dll", "GetActiveWindow", "int", []);

  if (f) {
    return f();
  }

  return 0;
}

exports.GetActiveWindow = GetActiveWindow;

function ShowWindow(a, b) {
  var f = _1.registerFunction("user32.dll", "ShowWindow", "int", ["int", "int"]);

  if (f) {
    f();
  }
}

exports.ShowWindow = ShowWindow;

},{".":115,"@babel/runtime-corejs2/core-js/object/define-property":2,"@babel/runtime-corejs2/helpers/interopRequireDefault":14}],117:[function(require,module,exports){
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

},{"@babel/runtime-corejs2/core-js/object/define-property":2,"@babel/runtime-corejs2/core-js/parse-int":5,"@babel/runtime-corejs2/helpers/interopRequireDefault":14}]},{},[101])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUtY29yZWpzMi9jb3JlLWpzL29iamVjdC9jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUtY29yZWpzMi9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUtY29yZWpzMi9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mLmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lLWNvcmVqczIvY29yZS1qcy9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZi5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMyL2NvcmUtanMvcGFyc2UtaW50LmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lLWNvcmVqczIvY29yZS1qcy9yZWZsZWN0L2NvbnN0cnVjdC5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMyL2NvcmUtanMvc3ltYm9sLmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lLWNvcmVqczIvY29yZS1qcy9zeW1ib2wvaXRlcmF0b3IuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUtY29yZWpzMi9oZWxwZXJzL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMyL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUtY29yZWpzMi9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lLWNvcmVqczIvaGVscGVycy9nZXRQcm90b3R5cGVPZi5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMyL2hlbHBlcnMvaW5oZXJpdHMuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUtY29yZWpzMi9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMyL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMyL2hlbHBlcnMvc2V0UHJvdG90eXBlT2YuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUtY29yZWpzMi9oZWxwZXJzL3R5cGVvZi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2NyZWF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1wcm90b3R5cGUtb2YuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9wYXJzZS1pbnQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL3JlZmxlY3QvY29uc3RydWN0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaW5kZXguanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19iaW5kLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2YuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2N0eC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVmaW5lZC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0ta2V5cy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hpZGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2h0bWwuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pbnZva2UuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lvYmplY3QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRlZmluZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1zdGVwLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyYXRvcnMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2xpYnJhcnkuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21ldGEuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwcy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcGQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLWV4dC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4uanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ3BvLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1waWUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1zYXAuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3BhcnNlLWludC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1wcm90by5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC1rZXkuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3RyaW5nLWF0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zdHJpbmctdHJpbS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3RyaW5nLXdzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1hYnNvbHV0ZS1pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW50ZWdlci5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW9iamVjdC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdWlkLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZGVmaW5lLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZXh0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuY3JlYXRlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnBhcnNlLWludC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYucmVmbGVjdC5jb25zdHJ1Y3QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3ltYm9sLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3IuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanMiLCJzcmMvYmxhY2ttYWdlLnRzIiwic3JjL2JsYWNrbWFnZS9DbGllbnQudHMiLCJzcmMvYmxhY2ttYWdlL0V4dGVuc2lvbi50cyIsInNyYy9ibGFja21hZ2UvRmVhdHVyZS50cyIsInNyYy9ibGFja21hZ2UvZmVhdHVyZS9sdWEvYWRkLWZ1bmN0aW9ucy9pbmRleC50cyIsInNyYy9ibGFja21hZ2UvZmVhdHVyZS9sdWEvaW5kZXgudHMiLCJzcmMvYmxhY2ttYWdlL2ZlYXR1cmUvbHVhL3ByaW50LWZ1bmN0aW9ucy9pbmRleC50cyIsInNyYy9ibGFja21hZ2UvZmVhdHVyZS9sdWEvcHJpbnQtbGlicmFyaWVzL2luZGV4LnRzIiwic3JjL2JsYWNrbWFnZS9mZWF0dXJlL2x1YS9wcmludC11aS1sb2cvaW5kZXgudHMiLCJzcmMvYmxhY2ttYWdlL2ZlYXR1cmUvdW8vaW5kZXgudHMiLCJzcmMvYmxhY2ttYWdlL2ZlYXR1cmUvdW8vcHJpbnQtZGVidWctbG9nL2luZGV4LnRzIiwic3JjL2JsYWNrbWFnZS9zZXJ2aWNlL2V4ZS9SVFRJLmpzIiwic3JjL2JsYWNrbWFnZS9zZXJ2aWNlL2V4ZS9pbmRleC50cyIsInNyYy9ibGFja21hZ2Uvc2VydmljZS91by9VT0lucHV0LnRzIiwic3JjL2JsYWNrbWFnZS9zZXJ2aWNlL3dpbjMyL2luZGV4LnRzIiwic3JjL2JsYWNrbWFnZS9zZXJ2aWNlL3dpbjMyL3VzZXIzMi50cyIsInNyYy9ibGFja21hZ2UvdXRpbC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOztBQ0FBOztBQ0FBOztBQ0FBOztBQ0FBOztBQ0FBOztBQ0FBOztBQ0FBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckVBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7O0FDREE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUJBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdFBBO0FBQ0E7O0FDREE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNuQkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRQSxJQUFBLFFBQUEsR0FBQSxPQUFBLENBQUEsb0JBQUEsQ0FBQTs7QUFDQSxJQUFBLEtBQUEsR0FBQSxPQUFBLENBQUEseUJBQUEsQ0FBQTs7QUFDQSxJQUFBLElBQUEsR0FBQSxPQUFBLENBQUEsd0JBQUEsQ0FBQTs7QUFFQSxJQUFNLElBQUksR0FBRyxJQUFJLFFBQUEsQ0FBQSxNQUFKLENBQVc7QUFDdEIsRUFBQSxR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QUMsT0FBRCxFQUFVLEVBQVYsQ0FBYixDQUxtRCxDQU1uRDs7QUFDQSxTQUFPLENBQVA7QUFDSDs7QUFSRCxPQUFBLENBQUEsZ0JBQUEsR0FBQSxnQkFBQTs7QUFVQSxTQUFnQixnQkFBaEIsQ0FBaUMsR0FBakMsRUFBNEM7QUFDeEMsTUFBSSxDQUFDLEdBQUcsRUFBUjs7QUFDQSxPQUFLLElBQUksQ0FBQyxHQUFHLENBQWIsRUFBZ0IsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUF4QixFQUFnQyxDQUFDLEVBQWpDLEVBQXFDO0FBQ2pDLElBQUEsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxVQUFKLENBQWUsQ0FBZixFQUFrQixRQUFsQixDQUEyQixFQUEzQixJQUFpQyxHQUF0QztBQUNILEdBSnVDLENBS3hDOzs7QUFDQSxTQUFPLENBQVA7QUFDSDs7QUFQRCxPQUFBLENBQUEsZ0JBQUEsR0FBQSxnQkFBQTs7QUFTQSxTQUFnQixXQUFoQixDQUE0QixDQUE1QixFQUFvQyxHQUFwQyxFQUE0QztBQUN4QztBQUNBO0FBQ0EsU0FBTywyQkFBUyxPQUFPLE9BQU8sQ0FBQyxDQUFDLENBQUMsUUFBRixDQUFXLEVBQVgsQ0FBRCxFQUFpQixHQUFqQixFQUFzQixDQUF0QixDQUFQLENBQWdDLE1BQWhDLENBQXVDLENBQUMsQ0FBRCxJQUFJLEdBQUcsR0FBQyxDQUFSLENBQXZDLEVBQW1ELENBQW5ELENBQWhCLENBQVA7QUFDSDs7QUFKRCxPQUFBLENBQUEsV0FBQSxHQUFBLFdBQUE7O0FBTUEsU0FBZ0IsV0FBaEIsQ0FBNEIsQ0FBNUIsRUFBb0MsQ0FBcEMsRUFBMEM7QUFDdEMsU0FBUSxXQUFXLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBWCxJQUFxQixXQUFXLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBakMsSUFDSCxXQUFXLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBWCxJQUFxQixXQUFXLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FEN0IsSUFFSCxXQUFXLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBWCxJQUFxQixXQUFXLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FGN0IsSUFHSCxXQUFXLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBWCxJQUFxQixXQUFXLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FIcEM7QUFJSDs7QUFMRCxPQUFBLENBQUEsV0FBQSxHQUFBLFdBQUEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiJ9
