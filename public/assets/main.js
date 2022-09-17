var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/axios/lib/helpers/bind.js
var require_bind = __commonJS({
  "node_modules/axios/lib/helpers/bind.js"(exports, module) {
    "use strict";
    module.exports = function bind(fn2, thisArg) {
      return function wrap() {
        var args = new Array(arguments.length);
        for (var i3 = 0; i3 < args.length; i3++) {
          args[i3] = arguments[i3];
        }
        return fn2.apply(thisArg, args);
      };
    };
  }
});

// node_modules/axios/lib/utils.js
var require_utils = __commonJS({
  "node_modules/axios/lib/utils.js"(exports, module) {
    "use strict";
    var bind = require_bind();
    var toString = Object.prototype.toString;
    var kindOf = function(cache) {
      return function(thing) {
        var str = toString.call(thing);
        return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
      };
    }(/* @__PURE__ */ Object.create(null));
    function kindOfTest(type) {
      type = type.toLowerCase();
      return function isKindOf(thing) {
        return kindOf(thing) === type;
      };
    }
    function isArray(val) {
      return Array.isArray(val);
    }
    function isUndefined(val) {
      return typeof val === "undefined";
    }
    function isBuffer(val) {
      return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && typeof val.constructor.isBuffer === "function" && val.constructor.isBuffer(val);
    }
    var isArrayBuffer = kindOfTest("ArrayBuffer");
    function isArrayBufferView(val) {
      var result;
      if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
        result = ArrayBuffer.isView(val);
      } else {
        result = val && val.buffer && isArrayBuffer(val.buffer);
      }
      return result;
    }
    function isString(val) {
      return typeof val === "string";
    }
    function isNumber(val) {
      return typeof val === "number";
    }
    function isObject(val) {
      return val !== null && typeof val === "object";
    }
    function isPlainObject(val) {
      if (kindOf(val) !== "object") {
        return false;
      }
      var prototype = Object.getPrototypeOf(val);
      return prototype === null || prototype === Object.prototype;
    }
    var isDate = kindOfTest("Date");
    var isFile = kindOfTest("File");
    var isBlob = kindOfTest("Blob");
    var isFileList = kindOfTest("FileList");
    function isFunction(val) {
      return toString.call(val) === "[object Function]";
    }
    function isStream(val) {
      return isObject(val) && isFunction(val.pipe);
    }
    function isFormData(thing) {
      var pattern = "[object FormData]";
      return thing && (typeof FormData === "function" && thing instanceof FormData || toString.call(thing) === pattern || isFunction(thing.toString) && thing.toString() === pattern);
    }
    var isURLSearchParams = kindOfTest("URLSearchParams");
    function trim(str) {
      return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, "");
    }
    function isStandardBrowserEnv() {
      if (typeof navigator !== "undefined" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS")) {
        return false;
      }
      return typeof window !== "undefined" && typeof document !== "undefined";
    }
    function forEach(obj, fn2) {
      if (obj === null || typeof obj === "undefined") {
        return;
      }
      if (typeof obj !== "object") {
        obj = [obj];
      }
      if (isArray(obj)) {
        for (var i3 = 0, l4 = obj.length; i3 < l4; i3++) {
          fn2.call(null, obj[i3], i3, obj);
        }
      } else {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            fn2.call(null, obj[key], key, obj);
          }
        }
      }
    }
    function merge() {
      var result = {};
      function assignValue(val, key) {
        if (isPlainObject(result[key]) && isPlainObject(val)) {
          result[key] = merge(result[key], val);
        } else if (isPlainObject(val)) {
          result[key] = merge({}, val);
        } else if (isArray(val)) {
          result[key] = val.slice();
        } else {
          result[key] = val;
        }
      }
      for (var i3 = 0, l4 = arguments.length; i3 < l4; i3++) {
        forEach(arguments[i3], assignValue);
      }
      return result;
    }
    function extend(a4, b4, thisArg) {
      forEach(b4, function assignValue(val, key) {
        if (thisArg && typeof val === "function") {
          a4[key] = bind(val, thisArg);
        } else {
          a4[key] = val;
        }
      });
      return a4;
    }
    function stripBOM(content) {
      if (content.charCodeAt(0) === 65279) {
        content = content.slice(1);
      }
      return content;
    }
    function inherits(constructor, superConstructor, props, descriptors) {
      constructor.prototype = Object.create(superConstructor.prototype, descriptors);
      constructor.prototype.constructor = constructor;
      props && Object.assign(constructor.prototype, props);
    }
    function toFlatObject(sourceObj, destObj, filter) {
      var props;
      var i3;
      var prop;
      var merged = {};
      destObj = destObj || {};
      do {
        props = Object.getOwnPropertyNames(sourceObj);
        i3 = props.length;
        while (i3-- > 0) {
          prop = props[i3];
          if (!merged[prop]) {
            destObj[prop] = sourceObj[prop];
            merged[prop] = true;
          }
        }
        sourceObj = Object.getPrototypeOf(sourceObj);
      } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);
      return destObj;
    }
    function endsWith(str, searchString, position) {
      str = String(str);
      if (position === void 0 || position > str.length) {
        position = str.length;
      }
      position -= searchString.length;
      var lastIndex = str.indexOf(searchString, position);
      return lastIndex !== -1 && lastIndex === position;
    }
    function toArray(thing) {
      if (!thing)
        return null;
      var i3 = thing.length;
      if (isUndefined(i3))
        return null;
      var arr = new Array(i3);
      while (i3-- > 0) {
        arr[i3] = thing[i3];
      }
      return arr;
    }
    var isTypedArray = function(TypedArray) {
      return function(thing) {
        return TypedArray && thing instanceof TypedArray;
      };
    }(typeof Uint8Array !== "undefined" && Object.getPrototypeOf(Uint8Array));
    module.exports = {
      isArray,
      isArrayBuffer,
      isBuffer,
      isFormData,
      isArrayBufferView,
      isString,
      isNumber,
      isObject,
      isPlainObject,
      isUndefined,
      isDate,
      isFile,
      isBlob,
      isFunction,
      isStream,
      isURLSearchParams,
      isStandardBrowserEnv,
      forEach,
      merge,
      extend,
      trim,
      stripBOM,
      inherits,
      toFlatObject,
      kindOf,
      kindOfTest,
      endsWith,
      toArray,
      isTypedArray,
      isFileList
    };
  }
});

// node_modules/axios/lib/helpers/buildURL.js
var require_buildURL = __commonJS({
  "node_modules/axios/lib/helpers/buildURL.js"(exports, module) {
    "use strict";
    var utils = require_utils();
    function encode(val) {
      return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
    }
    module.exports = function buildURL(url, params, paramsSerializer) {
      if (!params) {
        return url;
      }
      var serializedParams;
      if (paramsSerializer) {
        serializedParams = paramsSerializer(params);
      } else if (utils.isURLSearchParams(params)) {
        serializedParams = params.toString();
      } else {
        var parts = [];
        utils.forEach(params, function serialize(val, key) {
          if (val === null || typeof val === "undefined") {
            return;
          }
          if (utils.isArray(val)) {
            key = key + "[]";
          } else {
            val = [val];
          }
          utils.forEach(val, function parseValue(v4) {
            if (utils.isDate(v4)) {
              v4 = v4.toISOString();
            } else if (utils.isObject(v4)) {
              v4 = JSON.stringify(v4);
            }
            parts.push(encode(key) + "=" + encode(v4));
          });
        });
        serializedParams = parts.join("&");
      }
      if (serializedParams) {
        var hashmarkIndex = url.indexOf("#");
        if (hashmarkIndex !== -1) {
          url = url.slice(0, hashmarkIndex);
        }
        url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
      }
      return url;
    };
  }
});

// node_modules/axios/lib/core/InterceptorManager.js
var require_InterceptorManager = __commonJS({
  "node_modules/axios/lib/core/InterceptorManager.js"(exports, module) {
    "use strict";
    var utils = require_utils();
    function InterceptorManager() {
      this.handlers = [];
    }
    InterceptorManager.prototype.use = function use(fulfilled, rejected, options) {
      this.handlers.push({
        fulfilled,
        rejected,
        synchronous: options ? options.synchronous : false,
        runWhen: options ? options.runWhen : null
      });
      return this.handlers.length - 1;
    };
    InterceptorManager.prototype.eject = function eject(id) {
      if (this.handlers[id]) {
        this.handlers[id] = null;
      }
    };
    InterceptorManager.prototype.forEach = function forEach(fn2) {
      utils.forEach(this.handlers, function forEachHandler(h4) {
        if (h4 !== null) {
          fn2(h4);
        }
      });
    };
    module.exports = InterceptorManager;
  }
});

// node_modules/axios/lib/helpers/normalizeHeaderName.js
var require_normalizeHeaderName = __commonJS({
  "node_modules/axios/lib/helpers/normalizeHeaderName.js"(exports, module) {
    "use strict";
    var utils = require_utils();
    module.exports = function normalizeHeaderName(headers, normalizedName) {
      utils.forEach(headers, function processHeader(value, name) {
        if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
          headers[normalizedName] = value;
          delete headers[name];
        }
      });
    };
  }
});

// node_modules/axios/lib/core/AxiosError.js
var require_AxiosError = __commonJS({
  "node_modules/axios/lib/core/AxiosError.js"(exports, module) {
    "use strict";
    var utils = require_utils();
    function AxiosError(message, code, config, request, response) {
      Error.call(this);
      this.message = message;
      this.name = "AxiosError";
      code && (this.code = code);
      config && (this.config = config);
      request && (this.request = request);
      response && (this.response = response);
    }
    utils.inherits(AxiosError, Error, {
      toJSON: function toJSON() {
        return {
          message: this.message,
          name: this.name,
          description: this.description,
          number: this.number,
          fileName: this.fileName,
          lineNumber: this.lineNumber,
          columnNumber: this.columnNumber,
          stack: this.stack,
          config: this.config,
          code: this.code,
          status: this.response && this.response.status ? this.response.status : null
        };
      }
    });
    var prototype = AxiosError.prototype;
    var descriptors = {};
    [
      "ERR_BAD_OPTION_VALUE",
      "ERR_BAD_OPTION",
      "ECONNABORTED",
      "ETIMEDOUT",
      "ERR_NETWORK",
      "ERR_FR_TOO_MANY_REDIRECTS",
      "ERR_DEPRECATED",
      "ERR_BAD_RESPONSE",
      "ERR_BAD_REQUEST",
      "ERR_CANCELED"
    ].forEach(function(code) {
      descriptors[code] = { value: code };
    });
    Object.defineProperties(AxiosError, descriptors);
    Object.defineProperty(prototype, "isAxiosError", { value: true });
    AxiosError.from = function(error, code, config, request, response, customProps) {
      var axiosError = Object.create(prototype);
      utils.toFlatObject(error, axiosError, function filter(obj) {
        return obj !== Error.prototype;
      });
      AxiosError.call(axiosError, error.message, code, config, request, response);
      axiosError.name = error.name;
      customProps && Object.assign(axiosError, customProps);
      return axiosError;
    };
    module.exports = AxiosError;
  }
});

// node_modules/axios/lib/defaults/transitional.js
var require_transitional = __commonJS({
  "node_modules/axios/lib/defaults/transitional.js"(exports, module) {
    "use strict";
    module.exports = {
      silentJSONParsing: true,
      forcedJSONParsing: true,
      clarifyTimeoutError: false
    };
  }
});

// node_modules/axios/lib/helpers/toFormData.js
var require_toFormData = __commonJS({
  "node_modules/axios/lib/helpers/toFormData.js"(exports, module) {
    "use strict";
    var utils = require_utils();
    function toFormData(obj, formData) {
      formData = formData || new FormData();
      var stack = [];
      function convertValue(value) {
        if (value === null)
          return "";
        if (utils.isDate(value)) {
          return value.toISOString();
        }
        if (utils.isArrayBuffer(value) || utils.isTypedArray(value)) {
          return typeof Blob === "function" ? new Blob([value]) : Buffer.from(value);
        }
        return value;
      }
      function build(data, parentKey) {
        if (utils.isPlainObject(data) || utils.isArray(data)) {
          if (stack.indexOf(data) !== -1) {
            throw Error("Circular reference detected in " + parentKey);
          }
          stack.push(data);
          utils.forEach(data, function each(value, key) {
            if (utils.isUndefined(value))
              return;
            var fullKey = parentKey ? parentKey + "." + key : key;
            var arr;
            if (value && !parentKey && typeof value === "object") {
              if (utils.endsWith(key, "{}")) {
                value = JSON.stringify(value);
              } else if (utils.endsWith(key, "[]") && (arr = utils.toArray(value))) {
                arr.forEach(function(el) {
                  !utils.isUndefined(el) && formData.append(fullKey, convertValue(el));
                });
                return;
              }
            }
            build(value, fullKey);
          });
          stack.pop();
        } else {
          formData.append(parentKey, convertValue(data));
        }
      }
      build(obj);
      return formData;
    }
    module.exports = toFormData;
  }
});

// node_modules/axios/lib/core/settle.js
var require_settle = __commonJS({
  "node_modules/axios/lib/core/settle.js"(exports, module) {
    "use strict";
    var AxiosError = require_AxiosError();
    module.exports = function settle(resolve, reject, response) {
      var validateStatus = response.config.validateStatus;
      if (!response.status || !validateStatus || validateStatus(response.status)) {
        resolve(response);
      } else {
        reject(new AxiosError(
          "Request failed with status code " + response.status,
          [AxiosError.ERR_BAD_REQUEST, AxiosError.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
          response.config,
          response.request,
          response
        ));
      }
    };
  }
});

// node_modules/axios/lib/helpers/cookies.js
var require_cookies = __commonJS({
  "node_modules/axios/lib/helpers/cookies.js"(exports, module) {
    "use strict";
    var utils = require_utils();
    module.exports = utils.isStandardBrowserEnv() ? function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + "=" + encodeURIComponent(value));
          if (utils.isNumber(expires)) {
            cookie.push("expires=" + new Date(expires).toGMTString());
          }
          if (utils.isString(path)) {
            cookie.push("path=" + path);
          }
          if (utils.isString(domain)) {
            cookie.push("domain=" + domain);
          }
          if (secure === true) {
            cookie.push("secure");
          }
          document.cookie = cookie.join("; ");
        },
        read: function read(name) {
          var match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
          return match ? decodeURIComponent(match[3]) : null;
        },
        remove: function remove(name) {
          this.write(name, "", Date.now() - 864e5);
        }
      };
    }() : function nonStandardBrowserEnv() {
      return {
        write: function write() {
        },
        read: function read() {
          return null;
        },
        remove: function remove() {
        }
      };
    }();
  }
});

// node_modules/axios/lib/helpers/isAbsoluteURL.js
var require_isAbsoluteURL = __commonJS({
  "node_modules/axios/lib/helpers/isAbsoluteURL.js"(exports, module) {
    "use strict";
    module.exports = function isAbsoluteURL(url) {
      return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
    };
  }
});

// node_modules/axios/lib/helpers/combineURLs.js
var require_combineURLs = __commonJS({
  "node_modules/axios/lib/helpers/combineURLs.js"(exports, module) {
    "use strict";
    module.exports = function combineURLs(baseURL, relativeURL) {
      return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
    };
  }
});

// node_modules/axios/lib/core/buildFullPath.js
var require_buildFullPath = __commonJS({
  "node_modules/axios/lib/core/buildFullPath.js"(exports, module) {
    "use strict";
    var isAbsoluteURL = require_isAbsoluteURL();
    var combineURLs = require_combineURLs();
    module.exports = function buildFullPath(baseURL, requestedURL) {
      if (baseURL && !isAbsoluteURL(requestedURL)) {
        return combineURLs(baseURL, requestedURL);
      }
      return requestedURL;
    };
  }
});

// node_modules/axios/lib/helpers/parseHeaders.js
var require_parseHeaders = __commonJS({
  "node_modules/axios/lib/helpers/parseHeaders.js"(exports, module) {
    "use strict";
    var utils = require_utils();
    var ignoreDuplicateOf = [
      "age",
      "authorization",
      "content-length",
      "content-type",
      "etag",
      "expires",
      "from",
      "host",
      "if-modified-since",
      "if-unmodified-since",
      "last-modified",
      "location",
      "max-forwards",
      "proxy-authorization",
      "referer",
      "retry-after",
      "user-agent"
    ];
    module.exports = function parseHeaders(headers) {
      var parsed = {};
      var key;
      var val;
      var i3;
      if (!headers) {
        return parsed;
      }
      utils.forEach(headers.split("\n"), function parser(line) {
        i3 = line.indexOf(":");
        key = utils.trim(line.substr(0, i3)).toLowerCase();
        val = utils.trim(line.substr(i3 + 1));
        if (key) {
          if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
            return;
          }
          if (key === "set-cookie") {
            parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
          } else {
            parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
          }
        }
      });
      return parsed;
    };
  }
});

// node_modules/axios/lib/helpers/isURLSameOrigin.js
var require_isURLSameOrigin = __commonJS({
  "node_modules/axios/lib/helpers/isURLSameOrigin.js"(exports, module) {
    "use strict";
    var utils = require_utils();
    module.exports = utils.isStandardBrowserEnv() ? function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement("a");
      var originURL;
      function resolveURL(url) {
        var href = url;
        if (msie) {
          urlParsingNode.setAttribute("href", href);
          href = urlParsingNode.href;
        }
        urlParsingNode.setAttribute("href", href);
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
        };
      }
      originURL = resolveURL(window.location.href);
      return function isURLSameOrigin(requestURL) {
        var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
        return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
      };
    }() : function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    }();
  }
});

// node_modules/axios/lib/cancel/CanceledError.js
var require_CanceledError = __commonJS({
  "node_modules/axios/lib/cancel/CanceledError.js"(exports, module) {
    "use strict";
    var AxiosError = require_AxiosError();
    var utils = require_utils();
    function CanceledError(message) {
      AxiosError.call(this, message == null ? "canceled" : message, AxiosError.ERR_CANCELED);
      this.name = "CanceledError";
    }
    utils.inherits(CanceledError, AxiosError, {
      __CANCEL__: true
    });
    module.exports = CanceledError;
  }
});

// node_modules/axios/lib/helpers/parseProtocol.js
var require_parseProtocol = __commonJS({
  "node_modules/axios/lib/helpers/parseProtocol.js"(exports, module) {
    "use strict";
    module.exports = function parseProtocol(url) {
      var match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
      return match && match[1] || "";
    };
  }
});

// node_modules/axios/lib/adapters/xhr.js
var require_xhr = __commonJS({
  "node_modules/axios/lib/adapters/xhr.js"(exports, module) {
    "use strict";
    var utils = require_utils();
    var settle = require_settle();
    var cookies = require_cookies();
    var buildURL = require_buildURL();
    var buildFullPath = require_buildFullPath();
    var parseHeaders = require_parseHeaders();
    var isURLSameOrigin = require_isURLSameOrigin();
    var transitionalDefaults = require_transitional();
    var AxiosError = require_AxiosError();
    var CanceledError = require_CanceledError();
    var parseProtocol = require_parseProtocol();
    module.exports = function xhrAdapter(config) {
      return new Promise(function dispatchXhrRequest(resolve, reject) {
        var requestData = config.data;
        var requestHeaders = config.headers;
        var responseType = config.responseType;
        var onCanceled;
        function done() {
          if (config.cancelToken) {
            config.cancelToken.unsubscribe(onCanceled);
          }
          if (config.signal) {
            config.signal.removeEventListener("abort", onCanceled);
          }
        }
        if (utils.isFormData(requestData) && utils.isStandardBrowserEnv()) {
          delete requestHeaders["Content-Type"];
        }
        var request = new XMLHttpRequest();
        if (config.auth) {
          var username = config.auth.username || "";
          var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : "";
          requestHeaders.Authorization = "Basic " + btoa(username + ":" + password);
        }
        var fullPath = buildFullPath(config.baseURL, config.url);
        request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);
        request.timeout = config.timeout;
        function onloadend() {
          if (!request) {
            return;
          }
          var responseHeaders = "getAllResponseHeaders" in request ? parseHeaders(request.getAllResponseHeaders()) : null;
          var responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
          var response = {
            data: responseData,
            status: request.status,
            statusText: request.statusText,
            headers: responseHeaders,
            config,
            request
          };
          settle(function _resolve(value) {
            resolve(value);
            done();
          }, function _reject(err) {
            reject(err);
            done();
          }, response);
          request = null;
        }
        if ("onloadend" in request) {
          request.onloadend = onloadend;
        } else {
          request.onreadystatechange = function handleLoad() {
            if (!request || request.readyState !== 4) {
              return;
            }
            if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) {
              return;
            }
            setTimeout(onloadend);
          };
        }
        request.onabort = function handleAbort() {
          if (!request) {
            return;
          }
          reject(new AxiosError("Request aborted", AxiosError.ECONNABORTED, config, request));
          request = null;
        };
        request.onerror = function handleError() {
          reject(new AxiosError("Network Error", AxiosError.ERR_NETWORK, config, request, request));
          request = null;
        };
        request.ontimeout = function handleTimeout() {
          var timeoutErrorMessage = config.timeout ? "timeout of " + config.timeout + "ms exceeded" : "timeout exceeded";
          var transitional = config.transitional || transitionalDefaults;
          if (config.timeoutErrorMessage) {
            timeoutErrorMessage = config.timeoutErrorMessage;
          }
          reject(new AxiosError(
            timeoutErrorMessage,
            transitional.clarifyTimeoutError ? AxiosError.ETIMEDOUT : AxiosError.ECONNABORTED,
            config,
            request
          ));
          request = null;
        };
        if (utils.isStandardBrowserEnv()) {
          var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : void 0;
          if (xsrfValue) {
            requestHeaders[config.xsrfHeaderName] = xsrfValue;
          }
        }
        if ("setRequestHeader" in request) {
          utils.forEach(requestHeaders, function setRequestHeader(val, key) {
            if (typeof requestData === "undefined" && key.toLowerCase() === "content-type") {
              delete requestHeaders[key];
            } else {
              request.setRequestHeader(key, val);
            }
          });
        }
        if (!utils.isUndefined(config.withCredentials)) {
          request.withCredentials = !!config.withCredentials;
        }
        if (responseType && responseType !== "json") {
          request.responseType = config.responseType;
        }
        if (typeof config.onDownloadProgress === "function") {
          request.addEventListener("progress", config.onDownloadProgress);
        }
        if (typeof config.onUploadProgress === "function" && request.upload) {
          request.upload.addEventListener("progress", config.onUploadProgress);
        }
        if (config.cancelToken || config.signal) {
          onCanceled = function(cancel) {
            if (!request) {
              return;
            }
            reject(!cancel || cancel && cancel.type ? new CanceledError() : cancel);
            request.abort();
            request = null;
          };
          config.cancelToken && config.cancelToken.subscribe(onCanceled);
          if (config.signal) {
            config.signal.aborted ? onCanceled() : config.signal.addEventListener("abort", onCanceled);
          }
        }
        if (!requestData) {
          requestData = null;
        }
        var protocol = parseProtocol(fullPath);
        if (protocol && ["http", "https", "file"].indexOf(protocol) === -1) {
          reject(new AxiosError("Unsupported protocol " + protocol + ":", AxiosError.ERR_BAD_REQUEST, config));
          return;
        }
        request.send(requestData);
      });
    };
  }
});

// node_modules/axios/lib/helpers/null.js
var require_null = __commonJS({
  "node_modules/axios/lib/helpers/null.js"(exports, module) {
    module.exports = null;
  }
});

// node_modules/axios/lib/defaults/index.js
var require_defaults = __commonJS({
  "node_modules/axios/lib/defaults/index.js"(exports, module) {
    "use strict";
    var utils = require_utils();
    var normalizeHeaderName = require_normalizeHeaderName();
    var AxiosError = require_AxiosError();
    var transitionalDefaults = require_transitional();
    var toFormData = require_toFormData();
    var DEFAULT_CONTENT_TYPE = {
      "Content-Type": "application/x-www-form-urlencoded"
    };
    function setContentTypeIfUnset(headers, value) {
      if (!utils.isUndefined(headers) && utils.isUndefined(headers["Content-Type"])) {
        headers["Content-Type"] = value;
      }
    }
    function getDefaultAdapter() {
      var adapter;
      if (typeof XMLHttpRequest !== "undefined") {
        adapter = require_xhr();
      } else if (typeof process !== "undefined" && Object.prototype.toString.call(process) === "[object process]") {
        adapter = require_xhr();
      }
      return adapter;
    }
    function stringifySafely(rawValue, parser, encoder) {
      if (utils.isString(rawValue)) {
        try {
          (parser || JSON.parse)(rawValue);
          return utils.trim(rawValue);
        } catch (e3) {
          if (e3.name !== "SyntaxError") {
            throw e3;
          }
        }
      }
      return (encoder || JSON.stringify)(rawValue);
    }
    var defaults = {
      transitional: transitionalDefaults,
      adapter: getDefaultAdapter(),
      transformRequest: [function transformRequest(data, headers) {
        normalizeHeaderName(headers, "Accept");
        normalizeHeaderName(headers, "Content-Type");
        if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
          return data;
        }
        if (utils.isArrayBufferView(data)) {
          return data.buffer;
        }
        if (utils.isURLSearchParams(data)) {
          setContentTypeIfUnset(headers, "application/x-www-form-urlencoded;charset=utf-8");
          return data.toString();
        }
        var isObjectPayload = utils.isObject(data);
        var contentType = headers && headers["Content-Type"];
        var isFileList;
        if ((isFileList = utils.isFileList(data)) || isObjectPayload && contentType === "multipart/form-data") {
          var _FormData = this.env && this.env.FormData;
          return toFormData(isFileList ? { "files[]": data } : data, _FormData && new _FormData());
        } else if (isObjectPayload || contentType === "application/json") {
          setContentTypeIfUnset(headers, "application/json");
          return stringifySafely(data);
        }
        return data;
      }],
      transformResponse: [function transformResponse(data) {
        var transitional = this.transitional || defaults.transitional;
        var silentJSONParsing = transitional && transitional.silentJSONParsing;
        var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
        var strictJSONParsing = !silentJSONParsing && this.responseType === "json";
        if (strictJSONParsing || forcedJSONParsing && utils.isString(data) && data.length) {
          try {
            return JSON.parse(data);
          } catch (e3) {
            if (strictJSONParsing) {
              if (e3.name === "SyntaxError") {
                throw AxiosError.from(e3, AxiosError.ERR_BAD_RESPONSE, this, null, this.response);
              }
              throw e3;
            }
          }
        }
        return data;
      }],
      timeout: 0,
      xsrfCookieName: "XSRF-TOKEN",
      xsrfHeaderName: "X-XSRF-TOKEN",
      maxContentLength: -1,
      maxBodyLength: -1,
      env: {
        FormData: require_null()
      },
      validateStatus: function validateStatus(status) {
        return status >= 200 && status < 300;
      },
      headers: {
        common: {
          "Accept": "application/json, text/plain, */*"
        }
      }
    };
    utils.forEach(["delete", "get", "head"], function forEachMethodNoData(method) {
      defaults.headers[method] = {};
    });
    utils.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
      defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
    });
    module.exports = defaults;
  }
});

// node_modules/axios/lib/core/transformData.js
var require_transformData = __commonJS({
  "node_modules/axios/lib/core/transformData.js"(exports, module) {
    "use strict";
    var utils = require_utils();
    var defaults = require_defaults();
    module.exports = function transformData(data, headers, fns) {
      var context = this || defaults;
      utils.forEach(fns, function transform(fn2) {
        data = fn2.call(context, data, headers);
      });
      return data;
    };
  }
});

// node_modules/axios/lib/cancel/isCancel.js
var require_isCancel = __commonJS({
  "node_modules/axios/lib/cancel/isCancel.js"(exports, module) {
    "use strict";
    module.exports = function isCancel(value) {
      return !!(value && value.__CANCEL__);
    };
  }
});

// node_modules/axios/lib/core/dispatchRequest.js
var require_dispatchRequest = __commonJS({
  "node_modules/axios/lib/core/dispatchRequest.js"(exports, module) {
    "use strict";
    var utils = require_utils();
    var transformData = require_transformData();
    var isCancel = require_isCancel();
    var defaults = require_defaults();
    var CanceledError = require_CanceledError();
    function throwIfCancellationRequested(config) {
      if (config.cancelToken) {
        config.cancelToken.throwIfRequested();
      }
      if (config.signal && config.signal.aborted) {
        throw new CanceledError();
      }
    }
    module.exports = function dispatchRequest(config) {
      throwIfCancellationRequested(config);
      config.headers = config.headers || {};
      config.data = transformData.call(
        config,
        config.data,
        config.headers,
        config.transformRequest
      );
      config.headers = utils.merge(
        config.headers.common || {},
        config.headers[config.method] || {},
        config.headers
      );
      utils.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        function cleanHeaderConfig(method) {
          delete config.headers[method];
        }
      );
      var adapter = config.adapter || defaults.adapter;
      return adapter(config).then(function onAdapterResolution(response) {
        throwIfCancellationRequested(config);
        response.data = transformData.call(
          config,
          response.data,
          response.headers,
          config.transformResponse
        );
        return response;
      }, function onAdapterRejection(reason) {
        if (!isCancel(reason)) {
          throwIfCancellationRequested(config);
          if (reason && reason.response) {
            reason.response.data = transformData.call(
              config,
              reason.response.data,
              reason.response.headers,
              config.transformResponse
            );
          }
        }
        return Promise.reject(reason);
      });
    };
  }
});

// node_modules/axios/lib/core/mergeConfig.js
var require_mergeConfig = __commonJS({
  "node_modules/axios/lib/core/mergeConfig.js"(exports, module) {
    "use strict";
    var utils = require_utils();
    module.exports = function mergeConfig(config1, config2) {
      config2 = config2 || {};
      var config = {};
      function getMergedValue(target, source) {
        if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
          return utils.merge(target, source);
        } else if (utils.isPlainObject(source)) {
          return utils.merge({}, source);
        } else if (utils.isArray(source)) {
          return source.slice();
        }
        return source;
      }
      function mergeDeepProperties(prop) {
        if (!utils.isUndefined(config2[prop])) {
          return getMergedValue(config1[prop], config2[prop]);
        } else if (!utils.isUndefined(config1[prop])) {
          return getMergedValue(void 0, config1[prop]);
        }
      }
      function valueFromConfig2(prop) {
        if (!utils.isUndefined(config2[prop])) {
          return getMergedValue(void 0, config2[prop]);
        }
      }
      function defaultToConfig2(prop) {
        if (!utils.isUndefined(config2[prop])) {
          return getMergedValue(void 0, config2[prop]);
        } else if (!utils.isUndefined(config1[prop])) {
          return getMergedValue(void 0, config1[prop]);
        }
      }
      function mergeDirectKeys(prop) {
        if (prop in config2) {
          return getMergedValue(config1[prop], config2[prop]);
        } else if (prop in config1) {
          return getMergedValue(void 0, config1[prop]);
        }
      }
      var mergeMap = {
        "url": valueFromConfig2,
        "method": valueFromConfig2,
        "data": valueFromConfig2,
        "baseURL": defaultToConfig2,
        "transformRequest": defaultToConfig2,
        "transformResponse": defaultToConfig2,
        "paramsSerializer": defaultToConfig2,
        "timeout": defaultToConfig2,
        "timeoutMessage": defaultToConfig2,
        "withCredentials": defaultToConfig2,
        "adapter": defaultToConfig2,
        "responseType": defaultToConfig2,
        "xsrfCookieName": defaultToConfig2,
        "xsrfHeaderName": defaultToConfig2,
        "onUploadProgress": defaultToConfig2,
        "onDownloadProgress": defaultToConfig2,
        "decompress": defaultToConfig2,
        "maxContentLength": defaultToConfig2,
        "maxBodyLength": defaultToConfig2,
        "beforeRedirect": defaultToConfig2,
        "transport": defaultToConfig2,
        "httpAgent": defaultToConfig2,
        "httpsAgent": defaultToConfig2,
        "cancelToken": defaultToConfig2,
        "socketPath": defaultToConfig2,
        "responseEncoding": defaultToConfig2,
        "validateStatus": mergeDirectKeys
      };
      utils.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
        var merge = mergeMap[prop] || mergeDeepProperties;
        var configValue = merge(prop);
        utils.isUndefined(configValue) && merge !== mergeDirectKeys || (config[prop] = configValue);
      });
      return config;
    };
  }
});

// node_modules/axios/lib/env/data.js
var require_data = __commonJS({
  "node_modules/axios/lib/env/data.js"(exports, module) {
    module.exports = {
      "version": "0.27.2"
    };
  }
});

// node_modules/axios/lib/helpers/validator.js
var require_validator = __commonJS({
  "node_modules/axios/lib/helpers/validator.js"(exports, module) {
    "use strict";
    var VERSION = require_data().version;
    var AxiosError = require_AxiosError();
    var validators = {};
    ["object", "boolean", "number", "function", "string", "symbol"].forEach(function(type, i3) {
      validators[type] = function validator(thing) {
        return typeof thing === type || "a" + (i3 < 1 ? "n " : " ") + type;
      };
    });
    var deprecatedWarnings = {};
    validators.transitional = function transitional(validator, version, message) {
      function formatMessage(opt, desc) {
        return "[Axios v" + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
      }
      return function(value, opt, opts) {
        if (validator === false) {
          throw new AxiosError(
            formatMessage(opt, " has been removed" + (version ? " in " + version : "")),
            AxiosError.ERR_DEPRECATED
          );
        }
        if (version && !deprecatedWarnings[opt]) {
          deprecatedWarnings[opt] = true;
          console.warn(
            formatMessage(
              opt,
              " has been deprecated since v" + version + " and will be removed in the near future"
            )
          );
        }
        return validator ? validator(value, opt, opts) : true;
      };
    };
    function assertOptions(options, schema, allowUnknown) {
      if (typeof options !== "object") {
        throw new AxiosError("options must be an object", AxiosError.ERR_BAD_OPTION_VALUE);
      }
      var keys = Object.keys(options);
      var i3 = keys.length;
      while (i3-- > 0) {
        var opt = keys[i3];
        var validator = schema[opt];
        if (validator) {
          var value = options[opt];
          var result = value === void 0 || validator(value, opt, options);
          if (result !== true) {
            throw new AxiosError("option " + opt + " must be " + result, AxiosError.ERR_BAD_OPTION_VALUE);
          }
          continue;
        }
        if (allowUnknown !== true) {
          throw new AxiosError("Unknown option " + opt, AxiosError.ERR_BAD_OPTION);
        }
      }
    }
    module.exports = {
      assertOptions,
      validators
    };
  }
});

// node_modules/axios/lib/core/Axios.js
var require_Axios = __commonJS({
  "node_modules/axios/lib/core/Axios.js"(exports, module) {
    "use strict";
    var utils = require_utils();
    var buildURL = require_buildURL();
    var InterceptorManager = require_InterceptorManager();
    var dispatchRequest = require_dispatchRequest();
    var mergeConfig = require_mergeConfig();
    var buildFullPath = require_buildFullPath();
    var validator = require_validator();
    var validators = validator.validators;
    function Axios(instanceConfig) {
      this.defaults = instanceConfig;
      this.interceptors = {
        request: new InterceptorManager(),
        response: new InterceptorManager()
      };
    }
    Axios.prototype.request = function request(configOrUrl, config) {
      if (typeof configOrUrl === "string") {
        config = config || {};
        config.url = configOrUrl;
      } else {
        config = configOrUrl || {};
      }
      config = mergeConfig(this.defaults, config);
      if (config.method) {
        config.method = config.method.toLowerCase();
      } else if (this.defaults.method) {
        config.method = this.defaults.method.toLowerCase();
      } else {
        config.method = "get";
      }
      var transitional = config.transitional;
      if (transitional !== void 0) {
        validator.assertOptions(transitional, {
          silentJSONParsing: validators.transitional(validators.boolean),
          forcedJSONParsing: validators.transitional(validators.boolean),
          clarifyTimeoutError: validators.transitional(validators.boolean)
        }, false);
      }
      var requestInterceptorChain = [];
      var synchronousRequestInterceptors = true;
      this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
        if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) {
          return;
        }
        synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
        requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
      });
      var responseInterceptorChain = [];
      this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
        responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
      });
      var promise;
      if (!synchronousRequestInterceptors) {
        var chain = [dispatchRequest, void 0];
        Array.prototype.unshift.apply(chain, requestInterceptorChain);
        chain = chain.concat(responseInterceptorChain);
        promise = Promise.resolve(config);
        while (chain.length) {
          promise = promise.then(chain.shift(), chain.shift());
        }
        return promise;
      }
      var newConfig = config;
      while (requestInterceptorChain.length) {
        var onFulfilled = requestInterceptorChain.shift();
        var onRejected = requestInterceptorChain.shift();
        try {
          newConfig = onFulfilled(newConfig);
        } catch (error) {
          onRejected(error);
          break;
        }
      }
      try {
        promise = dispatchRequest(newConfig);
      } catch (error) {
        return Promise.reject(error);
      }
      while (responseInterceptorChain.length) {
        promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
      }
      return promise;
    };
    Axios.prototype.getUri = function getUri(config) {
      config = mergeConfig(this.defaults, config);
      var fullPath = buildFullPath(config.baseURL, config.url);
      return buildURL(fullPath, config.params, config.paramsSerializer);
    };
    utils.forEach(["delete", "get", "head", "options"], function forEachMethodNoData(method) {
      Axios.prototype[method] = function(url, config) {
        return this.request(mergeConfig(config || {}, {
          method,
          url,
          data: (config || {}).data
        }));
      };
    });
    utils.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
      function generateHTTPMethod(isForm) {
        return function httpMethod(url, data, config) {
          return this.request(mergeConfig(config || {}, {
            method,
            headers: isForm ? {
              "Content-Type": "multipart/form-data"
            } : {},
            url,
            data
          }));
        };
      }
      Axios.prototype[method] = generateHTTPMethod();
      Axios.prototype[method + "Form"] = generateHTTPMethod(true);
    });
    module.exports = Axios;
  }
});

// node_modules/axios/lib/cancel/CancelToken.js
var require_CancelToken = __commonJS({
  "node_modules/axios/lib/cancel/CancelToken.js"(exports, module) {
    "use strict";
    var CanceledError = require_CanceledError();
    function CancelToken(executor) {
      if (typeof executor !== "function") {
        throw new TypeError("executor must be a function.");
      }
      var resolvePromise;
      this.promise = new Promise(function promiseExecutor(resolve) {
        resolvePromise = resolve;
      });
      var token2 = this;
      this.promise.then(function(cancel) {
        if (!token2._listeners)
          return;
        var i3;
        var l4 = token2._listeners.length;
        for (i3 = 0; i3 < l4; i3++) {
          token2._listeners[i3](cancel);
        }
        token2._listeners = null;
      });
      this.promise.then = function(onfulfilled) {
        var _resolve;
        var promise = new Promise(function(resolve) {
          token2.subscribe(resolve);
          _resolve = resolve;
        }).then(onfulfilled);
        promise.cancel = function reject() {
          token2.unsubscribe(_resolve);
        };
        return promise;
      };
      executor(function cancel(message) {
        if (token2.reason) {
          return;
        }
        token2.reason = new CanceledError(message);
        resolvePromise(token2.reason);
      });
    }
    CancelToken.prototype.throwIfRequested = function throwIfRequested() {
      if (this.reason) {
        throw this.reason;
      }
    };
    CancelToken.prototype.subscribe = function subscribe(listener) {
      if (this.reason) {
        listener(this.reason);
        return;
      }
      if (this._listeners) {
        this._listeners.push(listener);
      } else {
        this._listeners = [listener];
      }
    };
    CancelToken.prototype.unsubscribe = function unsubscribe(listener) {
      if (!this._listeners) {
        return;
      }
      var index = this._listeners.indexOf(listener);
      if (index !== -1) {
        this._listeners.splice(index, 1);
      }
    };
    CancelToken.source = function source() {
      var cancel;
      var token2 = new CancelToken(function executor(c5) {
        cancel = c5;
      });
      return {
        token: token2,
        cancel
      };
    };
    module.exports = CancelToken;
  }
});

// node_modules/axios/lib/helpers/spread.js
var require_spread = __commonJS({
  "node_modules/axios/lib/helpers/spread.js"(exports, module) {
    "use strict";
    module.exports = function spread(callback) {
      return function wrap(arr) {
        return callback.apply(null, arr);
      };
    };
  }
});

// node_modules/axios/lib/helpers/isAxiosError.js
var require_isAxiosError = __commonJS({
  "node_modules/axios/lib/helpers/isAxiosError.js"(exports, module) {
    "use strict";
    var utils = require_utils();
    module.exports = function isAxiosError(payload) {
      return utils.isObject(payload) && payload.isAxiosError === true;
    };
  }
});

// node_modules/axios/lib/axios.js
var require_axios = __commonJS({
  "node_modules/axios/lib/axios.js"(exports, module) {
    "use strict";
    var utils = require_utils();
    var bind = require_bind();
    var Axios = require_Axios();
    var mergeConfig = require_mergeConfig();
    var defaults = require_defaults();
    function createInstance(defaultConfig) {
      var context = new Axios(defaultConfig);
      var instance = bind(Axios.prototype.request, context);
      utils.extend(instance, Axios.prototype, context);
      utils.extend(instance, context);
      instance.create = function create(instanceConfig) {
        return createInstance(mergeConfig(defaultConfig, instanceConfig));
      };
      return instance;
    }
    var axios2 = createInstance(defaults);
    axios2.Axios = Axios;
    axios2.CanceledError = require_CanceledError();
    axios2.CancelToken = require_CancelToken();
    axios2.isCancel = require_isCancel();
    axios2.VERSION = require_data().version;
    axios2.toFormData = require_toFormData();
    axios2.AxiosError = require_AxiosError();
    axios2.Cancel = axios2.CanceledError;
    axios2.all = function all(promises) {
      return Promise.all(promises);
    };
    axios2.spread = require_spread();
    axios2.isAxiosError = require_isAxiosError();
    module.exports = axios2;
    module.exports.default = axios2;
  }
});

// node_modules/axios/index.js
var require_axios2 = __commonJS({
  "node_modules/axios/index.js"(exports, module) {
    module.exports = require_axios();
  }
});

// node_modules/preact/dist/preact.module.js
var n;
var l;
var u;
var i;
var t;
var o;
var r;
var f = {};
var e = [];
var c = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function s(n2, l4) {
  for (var u3 in l4)
    n2[u3] = l4[u3];
  return n2;
}
function a(n2) {
  var l4 = n2.parentNode;
  l4 && l4.removeChild(n2);
}
function h(l4, u3, i3) {
  var t2, o3, r3, f3 = {};
  for (r3 in u3)
    "key" == r3 ? t2 = u3[r3] : "ref" == r3 ? o3 = u3[r3] : f3[r3] = u3[r3];
  if (arguments.length > 2 && (f3.children = arguments.length > 3 ? n.call(arguments, 2) : i3), "function" == typeof l4 && null != l4.defaultProps)
    for (r3 in l4.defaultProps)
      void 0 === f3[r3] && (f3[r3] = l4.defaultProps[r3]);
  return v(l4, f3, t2, o3, null);
}
function v(n2, i3, t2, o3, r3) {
  var f3 = { type: n2, props: i3, key: t2, ref: o3, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == r3 ? ++u : r3 };
  return null == r3 && null != l.vnode && l.vnode(f3), f3;
}
function y() {
  return { current: null };
}
function p(n2) {
  return n2.children;
}
function d(n2, l4) {
  this.props = n2, this.context = l4;
}
function _(n2, l4) {
  if (null == l4)
    return n2.__ ? _(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
  for (var u3; l4 < n2.__k.length; l4++)
    if (null != (u3 = n2.__k[l4]) && null != u3.__e)
      return u3.__e;
  return "function" == typeof n2.type ? _(n2) : null;
}
function k(n2) {
  var l4, u3;
  if (null != (n2 = n2.__) && null != n2.__c) {
    for (n2.__e = n2.__c.base = null, l4 = 0; l4 < n2.__k.length; l4++)
      if (null != (u3 = n2.__k[l4]) && null != u3.__e) {
        n2.__e = n2.__c.base = u3.__e;
        break;
      }
    return k(n2);
  }
}
function b(n2) {
  (!n2.__d && (n2.__d = true) && t.push(n2) && !g.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || setTimeout)(g);
}
function g() {
  for (var n2; g.__r = t.length; )
    n2 = t.sort(function(n3, l4) {
      return n3.__v.__b - l4.__v.__b;
    }), t = [], n2.some(function(n3) {
      var l4, u3, i3, t2, o3, r3;
      n3.__d && (o3 = (t2 = (l4 = n3).__v).__e, (r3 = l4.__P) && (u3 = [], (i3 = s({}, t2)).__v = t2.__v + 1, j(r3, t2, i3, l4.__n, void 0 !== r3.ownerSVGElement, null != t2.__h ? [o3] : null, u3, null == o3 ? _(t2) : o3, t2.__h), z(u3, t2), t2.__e != o3 && k(t2)));
    });
}
function w(n2, l4, u3, i3, t2, o3, r3, c5, s5, a4) {
  var h4, y4, d4, k5, b4, g5, w5, x4 = i3 && i3.__k || e, C5 = x4.length;
  for (u3.__k = [], h4 = 0; h4 < l4.length; h4++)
    if (null != (k5 = u3.__k[h4] = null == (k5 = l4[h4]) || "boolean" == typeof k5 ? null : "string" == typeof k5 || "number" == typeof k5 || "bigint" == typeof k5 ? v(null, k5, null, null, k5) : Array.isArray(k5) ? v(p, { children: k5 }, null, null, null) : k5.__b > 0 ? v(k5.type, k5.props, k5.key, k5.ref ? k5.ref : null, k5.__v) : k5)) {
      if (k5.__ = u3, k5.__b = u3.__b + 1, null === (d4 = x4[h4]) || d4 && k5.key == d4.key && k5.type === d4.type)
        x4[h4] = void 0;
      else
        for (y4 = 0; y4 < C5; y4++) {
          if ((d4 = x4[y4]) && k5.key == d4.key && k5.type === d4.type) {
            x4[y4] = void 0;
            break;
          }
          d4 = null;
        }
      j(n2, k5, d4 = d4 || f, t2, o3, r3, c5, s5, a4), b4 = k5.__e, (y4 = k5.ref) && d4.ref != y4 && (w5 || (w5 = []), d4.ref && w5.push(d4.ref, null, k5), w5.push(y4, k5.__c || b4, k5)), null != b4 ? (null == g5 && (g5 = b4), "function" == typeof k5.type && k5.__k === d4.__k ? k5.__d = s5 = m(k5, s5, n2) : s5 = A(n2, k5, d4, x4, b4, s5), "function" == typeof u3.type && (u3.__d = s5)) : s5 && d4.__e == s5 && s5.parentNode != n2 && (s5 = _(d4));
    }
  for (u3.__e = g5, h4 = C5; h4--; )
    null != x4[h4] && ("function" == typeof u3.type && null != x4[h4].__e && x4[h4].__e == u3.__d && (u3.__d = _(i3, h4 + 1)), N(x4[h4], x4[h4]));
  if (w5)
    for (h4 = 0; h4 < w5.length; h4++)
      M(w5[h4], w5[++h4], w5[++h4]);
}
function m(n2, l4, u3) {
  for (var i3, t2 = n2.__k, o3 = 0; t2 && o3 < t2.length; o3++)
    (i3 = t2[o3]) && (i3.__ = n2, l4 = "function" == typeof i3.type ? m(i3, l4, u3) : A(u3, i3, i3, t2, i3.__e, l4));
  return l4;
}
function x(n2, l4) {
  return l4 = l4 || [], null == n2 || "boolean" == typeof n2 || (Array.isArray(n2) ? n2.some(function(n3) {
    x(n3, l4);
  }) : l4.push(n2)), l4;
}
function A(n2, l4, u3, i3, t2, o3) {
  var r3, f3, e3;
  if (void 0 !== l4.__d)
    r3 = l4.__d, l4.__d = void 0;
  else if (null == u3 || t2 != o3 || null == t2.parentNode)
    n:
      if (null == o3 || o3.parentNode !== n2)
        n2.appendChild(t2), r3 = null;
      else {
        for (f3 = o3, e3 = 0; (f3 = f3.nextSibling) && e3 < i3.length; e3 += 2)
          if (f3 == t2)
            break n;
        n2.insertBefore(t2, o3), r3 = o3;
      }
  return void 0 !== r3 ? r3 : t2.nextSibling;
}
function C(n2, l4, u3, i3, t2) {
  var o3;
  for (o3 in u3)
    "children" === o3 || "key" === o3 || o3 in l4 || H(n2, o3, null, u3[o3], i3);
  for (o3 in l4)
    t2 && "function" != typeof l4[o3] || "children" === o3 || "key" === o3 || "value" === o3 || "checked" === o3 || u3[o3] === l4[o3] || H(n2, o3, l4[o3], u3[o3], i3);
}
function $(n2, l4, u3) {
  "-" === l4[0] ? n2.setProperty(l4, u3) : n2[l4] = null == u3 ? "" : "number" != typeof u3 || c.test(l4) ? u3 : u3 + "px";
}
function H(n2, l4, u3, i3, t2) {
  var o3;
  n:
    if ("style" === l4)
      if ("string" == typeof u3)
        n2.style.cssText = u3;
      else {
        if ("string" == typeof i3 && (n2.style.cssText = i3 = ""), i3)
          for (l4 in i3)
            u3 && l4 in u3 || $(n2.style, l4, "");
        if (u3)
          for (l4 in u3)
            i3 && u3[l4] === i3[l4] || $(n2.style, l4, u3[l4]);
      }
    else if ("o" === l4[0] && "n" === l4[1])
      o3 = l4 !== (l4 = l4.replace(/Capture$/, "")), l4 = l4.toLowerCase() in n2 ? l4.toLowerCase().slice(2) : l4.slice(2), n2.l || (n2.l = {}), n2.l[l4 + o3] = u3, u3 ? i3 || n2.addEventListener(l4, o3 ? T : I, o3) : n2.removeEventListener(l4, o3 ? T : I, o3);
    else if ("dangerouslySetInnerHTML" !== l4) {
      if (t2)
        l4 = l4.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if ("href" !== l4 && "list" !== l4 && "form" !== l4 && "tabIndex" !== l4 && "download" !== l4 && l4 in n2)
        try {
          n2[l4] = null == u3 ? "" : u3;
          break n;
        } catch (n3) {
        }
      "function" == typeof u3 || (null != u3 && (false !== u3 || "a" === l4[0] && "r" === l4[1]) ? n2.setAttribute(l4, u3) : n2.removeAttribute(l4));
    }
}
function I(n2) {
  this.l[n2.type + false](l.event ? l.event(n2) : n2);
}
function T(n2) {
  this.l[n2.type + true](l.event ? l.event(n2) : n2);
}
function j(n2, u3, i3, t2, o3, r3, f3, e3, c5) {
  var a4, h4, v4, y4, _3, k5, b4, g5, m4, x4, A4, C5, $4, H3 = u3.type;
  if (void 0 !== u3.constructor)
    return null;
  null != i3.__h && (c5 = i3.__h, e3 = u3.__e = i3.__e, u3.__h = null, r3 = [e3]), (a4 = l.__b) && a4(u3);
  try {
    n:
      if ("function" == typeof H3) {
        if (g5 = u3.props, m4 = (a4 = H3.contextType) && t2[a4.__c], x4 = a4 ? m4 ? m4.props.value : a4.__ : t2, i3.__c ? b4 = (h4 = u3.__c = i3.__c).__ = h4.__E : ("prototype" in H3 && H3.prototype.render ? u3.__c = h4 = new H3(g5, x4) : (u3.__c = h4 = new d(g5, x4), h4.constructor = H3, h4.render = O), m4 && m4.sub(h4), h4.props = g5, h4.state || (h4.state = {}), h4.context = x4, h4.__n = t2, v4 = h4.__d = true, h4.__h = []), null == h4.__s && (h4.__s = h4.state), null != H3.getDerivedStateFromProps && (h4.__s == h4.state && (h4.__s = s({}, h4.__s)), s(h4.__s, H3.getDerivedStateFromProps(g5, h4.__s))), y4 = h4.props, _3 = h4.state, v4)
          null == H3.getDerivedStateFromProps && null != h4.componentWillMount && h4.componentWillMount(), null != h4.componentDidMount && h4.__h.push(h4.componentDidMount);
        else {
          if (null == H3.getDerivedStateFromProps && g5 !== y4 && null != h4.componentWillReceiveProps && h4.componentWillReceiveProps(g5, x4), !h4.__e && null != h4.shouldComponentUpdate && false === h4.shouldComponentUpdate(g5, h4.__s, x4) || u3.__v === i3.__v) {
            h4.props = g5, h4.state = h4.__s, u3.__v !== i3.__v && (h4.__d = false), h4.__v = u3, u3.__e = i3.__e, u3.__k = i3.__k, u3.__k.forEach(function(n3) {
              n3 && (n3.__ = u3);
            }), h4.__h.length && f3.push(h4);
            break n;
          }
          null != h4.componentWillUpdate && h4.componentWillUpdate(g5, h4.__s, x4), null != h4.componentDidUpdate && h4.__h.push(function() {
            h4.componentDidUpdate(y4, _3, k5);
          });
        }
        if (h4.context = x4, h4.props = g5, h4.__v = u3, h4.__P = n2, A4 = l.__r, C5 = 0, "prototype" in H3 && H3.prototype.render)
          h4.state = h4.__s, h4.__d = false, A4 && A4(u3), a4 = h4.render(h4.props, h4.state, h4.context);
        else
          do {
            h4.__d = false, A4 && A4(u3), a4 = h4.render(h4.props, h4.state, h4.context), h4.state = h4.__s;
          } while (h4.__d && ++C5 < 25);
        h4.state = h4.__s, null != h4.getChildContext && (t2 = s(s({}, t2), h4.getChildContext())), v4 || null == h4.getSnapshotBeforeUpdate || (k5 = h4.getSnapshotBeforeUpdate(y4, _3)), $4 = null != a4 && a4.type === p && null == a4.key ? a4.props.children : a4, w(n2, Array.isArray($4) ? $4 : [$4], u3, i3, t2, o3, r3, f3, e3, c5), h4.base = u3.__e, u3.__h = null, h4.__h.length && f3.push(h4), b4 && (h4.__E = h4.__ = null), h4.__e = false;
      } else
        null == r3 && u3.__v === i3.__v ? (u3.__k = i3.__k, u3.__e = i3.__e) : u3.__e = L(i3.__e, u3, i3, t2, o3, r3, f3, c5);
    (a4 = l.diffed) && a4(u3);
  } catch (n3) {
    u3.__v = null, (c5 || null != r3) && (u3.__e = e3, u3.__h = !!c5, r3[r3.indexOf(e3)] = null), l.__e(n3, u3, i3);
  }
}
function z(n2, u3) {
  l.__c && l.__c(u3, n2), n2.some(function(u4) {
    try {
      n2 = u4.__h, u4.__h = [], n2.some(function(n3) {
        n3.call(u4);
      });
    } catch (n3) {
      l.__e(n3, u4.__v);
    }
  });
}
function L(l4, u3, i3, t2, o3, r3, e3, c5) {
  var s5, h4, v4, y4 = i3.props, p4 = u3.props, d4 = u3.type, k5 = 0;
  if ("svg" === d4 && (o3 = true), null != r3) {
    for (; k5 < r3.length; k5++)
      if ((s5 = r3[k5]) && "setAttribute" in s5 == !!d4 && (d4 ? s5.localName === d4 : 3 === s5.nodeType)) {
        l4 = s5, r3[k5] = null;
        break;
      }
  }
  if (null == l4) {
    if (null === d4)
      return document.createTextNode(p4);
    l4 = o3 ? document.createElementNS("http://www.w3.org/2000/svg", d4) : document.createElement(d4, p4.is && p4), r3 = null, c5 = false;
  }
  if (null === d4)
    y4 === p4 || c5 && l4.data === p4 || (l4.data = p4);
  else {
    if (r3 = r3 && n.call(l4.childNodes), h4 = (y4 = i3.props || f).dangerouslySetInnerHTML, v4 = p4.dangerouslySetInnerHTML, !c5) {
      if (null != r3)
        for (y4 = {}, k5 = 0; k5 < l4.attributes.length; k5++)
          y4[l4.attributes[k5].name] = l4.attributes[k5].value;
      (v4 || h4) && (v4 && (h4 && v4.__html == h4.__html || v4.__html === l4.innerHTML) || (l4.innerHTML = v4 && v4.__html || ""));
    }
    if (C(l4, p4, y4, o3, c5), v4)
      u3.__k = [];
    else if (k5 = u3.props.children, w(l4, Array.isArray(k5) ? k5 : [k5], u3, i3, t2, o3 && "foreignObject" !== d4, r3, e3, r3 ? r3[0] : i3.__k && _(i3, 0), c5), null != r3)
      for (k5 = r3.length; k5--; )
        null != r3[k5] && a(r3[k5]);
    c5 || ("value" in p4 && void 0 !== (k5 = p4.value) && (k5 !== l4.value || "progress" === d4 && !k5 || "option" === d4 && k5 !== y4.value) && H(l4, "value", k5, y4.value, false), "checked" in p4 && void 0 !== (k5 = p4.checked) && k5 !== l4.checked && H(l4, "checked", k5, y4.checked, false));
  }
  return l4;
}
function M(n2, u3, i3) {
  try {
    "function" == typeof n2 ? n2(u3) : n2.current = u3;
  } catch (n3) {
    l.__e(n3, i3);
  }
}
function N(n2, u3, i3) {
  var t2, o3;
  if (l.unmount && l.unmount(n2), (t2 = n2.ref) && (t2.current && t2.current !== n2.__e || M(t2, null, u3)), null != (t2 = n2.__c)) {
    if (t2.componentWillUnmount)
      try {
        t2.componentWillUnmount();
      } catch (n3) {
        l.__e(n3, u3);
      }
    t2.base = t2.__P = null, n2.__c = void 0;
  }
  if (t2 = n2.__k)
    for (o3 = 0; o3 < t2.length; o3++)
      t2[o3] && N(t2[o3], u3, "function" != typeof n2.type);
  i3 || null == n2.__e || a(n2.__e), n2.__ = n2.__e = n2.__d = void 0;
}
function O(n2, l4, u3) {
  return this.constructor(n2, u3);
}
function P(u3, i3, t2) {
  var o3, r3, e3;
  l.__ && l.__(u3, i3), r3 = (o3 = "function" == typeof t2) ? null : t2 && t2.__k || i3.__k, e3 = [], j(i3, u3 = (!o3 && t2 || i3).__k = h(p, null, [u3]), r3 || f, f, void 0 !== i3.ownerSVGElement, !o3 && t2 ? [t2] : r3 ? null : i3.firstChild ? n.call(i3.childNodes) : null, e3, !o3 && t2 ? t2 : r3 ? r3.__e : i3.firstChild, o3), z(e3, u3);
}
function S(n2, l4) {
  P(n2, l4, S);
}
function q(l4, u3, i3) {
  var t2, o3, r3, f3 = s({}, l4.props);
  for (r3 in u3)
    "key" == r3 ? t2 = u3[r3] : "ref" == r3 ? o3 = u3[r3] : f3[r3] = u3[r3];
  return arguments.length > 2 && (f3.children = arguments.length > 3 ? n.call(arguments, 2) : i3), v(l4.type, f3, t2 || l4.key, o3 || l4.ref, null);
}
function B(n2, l4) {
  var u3 = { __c: l4 = "__cC" + r++, __: n2, Consumer: function(n3, l5) {
    return n3.children(l5);
  }, Provider: function(n3) {
    var u4, i3;
    return this.getChildContext || (u4 = [], (i3 = {})[l4] = this, this.getChildContext = function() {
      return i3;
    }, this.shouldComponentUpdate = function(n4) {
      this.props.value !== n4.value && u4.some(b);
    }, this.sub = function(n4) {
      u4.push(n4);
      var l5 = n4.componentWillUnmount;
      n4.componentWillUnmount = function() {
        u4.splice(u4.indexOf(n4), 1), l5 && l5.call(n4);
      };
    }), n3.children;
  } };
  return u3.Provider.__ = u3.Consumer.contextType = u3;
}
n = e.slice, l = { __e: function(n2, l4, u3, i3) {
  for (var t2, o3, r3; l4 = l4.__; )
    if ((t2 = l4.__c) && !t2.__)
      try {
        if ((o3 = t2.constructor) && null != o3.getDerivedStateFromError && (t2.setState(o3.getDerivedStateFromError(n2)), r3 = t2.__d), null != t2.componentDidCatch && (t2.componentDidCatch(n2, i3 || {}), r3 = t2.__d), r3)
          return t2.__E = t2;
      } catch (l5) {
        n2 = l5;
      }
  throw n2;
} }, u = 0, i = function(n2) {
  return null != n2 && void 0 === n2.constructor;
}, d.prototype.setState = function(n2, l4) {
  var u3;
  u3 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = s({}, this.state), "function" == typeof n2 && (n2 = n2(s({}, u3), this.props)), n2 && s(u3, n2), null != n2 && this.__v && (l4 && this.__h.push(l4), b(this));
}, d.prototype.forceUpdate = function(n2) {
  this.__v && (this.__e = true, n2 && this.__h.push(n2), b(this));
}, d.prototype.render = p, t = [], g.__r = 0, r = 0;

// node_modules/preact/hooks/dist/hooks.module.js
var r2;
var u2;
var i2;
var o2;
var f2 = 0;
var c2 = [];
var e2 = [];
var a2 = l.__b;
var v2 = l.__r;
var l2 = l.diffed;
var m2 = l.__c;
var d2 = l.unmount;
function p2(t2, r3) {
  l.__h && l.__h(u2, t2, f2 || r3), f2 = 0;
  var i3 = u2.__H || (u2.__H = { __: [], __h: [] });
  return t2 >= i3.__.length && i3.__.push({ __V: e2 }), i3.__[t2];
}
function y2(n2) {
  return f2 = 1, h2(C2, n2);
}
function h2(n2, t2, i3) {
  var o3 = p2(r2++, 2);
  if (o3.t = n2, !o3.__c && (o3.__ = [i3 ? i3(t2) : C2(void 0, t2), function(n3) {
    var t3 = o3.__N ? o3.__N[0] : o3.__[0], r3 = o3.t(t3, n3);
    t3 !== r3 && (o3.__N = [r3, o3.__[1]], o3.__c.setState({}));
  }], o3.__c = u2, !u2.u)) {
    u2.u = true;
    var f3 = u2.shouldComponentUpdate;
    u2.shouldComponentUpdate = function(n3, t3, r3) {
      if (!o3.__c.__H)
        return true;
      var u3 = o3.__c.__H.__.filter(function(n4) {
        return n4.__c;
      });
      if (u3.every(function(n4) {
        return !n4.__N;
      }))
        return !f3 || f3.call(this, n3, t3, r3);
      var i4 = false;
      return u3.forEach(function(n4) {
        if (n4.__N) {
          var t4 = n4.__[0];
          n4.__ = n4.__N, n4.__N = void 0, t4 !== n4.__[0] && (i4 = true);
        }
      }), !!i4 && (!f3 || f3.call(this, n3, t3, r3));
    };
  }
  return o3.__N || o3.__;
}
function s2(t2, i3) {
  var o3 = p2(r2++, 3);
  !l.__s && B2(o3.__H, i3) && (o3.__ = t2, o3.i = i3, u2.__H.__h.push(o3));
}
function _2(t2, i3) {
  var o3 = p2(r2++, 4);
  !l.__s && B2(o3.__H, i3) && (o3.__ = t2, o3.i = i3, u2.__h.push(o3));
}
function A2(n2) {
  return f2 = 5, T2(function() {
    return { current: n2 };
  }, []);
}
function F(n2, t2, r3) {
  f2 = 6, _2(function() {
    return "function" == typeof n2 ? (n2(t2()), function() {
      return n2(null);
    }) : n2 ? (n2.current = t2(), function() {
      return n2.current = null;
    }) : void 0;
  }, null == r3 ? r3 : r3.concat(n2));
}
function T2(n2, t2) {
  var u3 = p2(r2++, 7);
  return B2(u3.__H, t2) ? (u3.__V = n2(), u3.i = t2, u3.__h = n2, u3.__V) : u3.__;
}
function q2(n2, t2) {
  return f2 = 8, T2(function() {
    return n2;
  }, t2);
}
function x2(n2) {
  var t2 = u2.context[n2.__c], i3 = p2(r2++, 9);
  return i3.c = n2, t2 ? (null == i3.__ && (i3.__ = true, t2.sub(u2)), t2.props.value) : n2.__;
}
function P2(t2, r3) {
  l.useDebugValue && l.useDebugValue(r3 ? r3(t2) : t2);
}
function b2() {
  var n2 = p2(r2++, 11);
  return n2.__ || (n2.__ = "P" + function(n3) {
    for (var t2 = 0, r3 = n3.length; r3 > 0; )
      t2 = (t2 << 5) - t2 + n3.charCodeAt(--r3) | 0;
    return t2;
  }(u2.__v.o) + r2), n2.__;
}
function g2() {
  for (var t2; t2 = c2.shift(); )
    if (t2.__P && t2.__H)
      try {
        t2.__H.__h.forEach(w2), t2.__H.__h.forEach(z2), t2.__H.__h = [];
      } catch (r3) {
        t2.__H.__h = [], l.__e(r3, t2.__v);
      }
}
l.__b = function(n2) {
  "function" != typeof n2.type || n2.o || n2.type === p ? n2.o || (n2.o = n2.__ && n2.__.o ? n2.__.o : "") : n2.o = (n2.__ && n2.__.o ? n2.__.o : "") + (n2.__ && n2.__.__k ? n2.__.__k.indexOf(n2) : 0), u2 = null, a2 && a2(n2);
}, l.__r = function(n2) {
  v2 && v2(n2), r2 = 0;
  var t2 = (u2 = n2.__c).__H;
  t2 && (i2 === u2 ? (t2.__h = [], u2.__h = [], t2.__.forEach(function(n3) {
    n3.__N && (n3.__ = n3.__N), n3.__V = e2, n3.__N = n3.i = void 0;
  })) : (t2.__h.forEach(w2), t2.__h.forEach(z2), t2.__h = [])), i2 = u2;
}, l.diffed = function(t2) {
  l2 && l2(t2);
  var r3 = t2.__c;
  r3 && r3.__H && (r3.__H.__h.length && (1 !== c2.push(r3) && o2 === l.requestAnimationFrame || ((o2 = l.requestAnimationFrame) || k2)(g2)), r3.__H.__.forEach(function(n2) {
    n2.i && (n2.__H = n2.i), n2.__V !== e2 && (n2.__ = n2.__V), n2.i = void 0, n2.__V = e2;
  })), i2 = u2 = null;
}, l.__c = function(t2, r3) {
  r3.some(function(t3) {
    try {
      t3.__h.forEach(w2), t3.__h = t3.__h.filter(function(n2) {
        return !n2.__ || z2(n2);
      });
    } catch (u3) {
      r3.some(function(n2) {
        n2.__h && (n2.__h = []);
      }), r3 = [], l.__e(u3, t3.__v);
    }
  }), m2 && m2(t2, r3);
}, l.unmount = function(t2) {
  d2 && d2(t2);
  var r3, u3 = t2.__c;
  u3 && u3.__H && (u3.__H.__.forEach(function(n2) {
    try {
      w2(n2);
    } catch (n3) {
      r3 = n3;
    }
  }), u3.__H = void 0, r3 && l.__e(r3, u3.__v));
};
var j2 = "function" == typeof requestAnimationFrame;
function k2(n2) {
  var t2, r3 = function() {
    clearTimeout(u3), j2 && cancelAnimationFrame(t2), setTimeout(n2);
  }, u3 = setTimeout(r3, 100);
  j2 && (t2 = requestAnimationFrame(r3));
}
function w2(n2) {
  var t2 = u2, r3 = n2.__c;
  "function" == typeof r3 && (n2.__c = void 0, r3()), u2 = t2;
}
function z2(n2) {
  var t2 = u2;
  n2.__c = n2.__(), u2 = t2;
}
function B2(n2, t2) {
  return !n2 || n2.length !== t2.length || t2.some(function(t3, r3) {
    return t3 !== n2[r3];
  });
}
function C2(n2, t2) {
  return "function" == typeof t2 ? t2(n2) : t2;
}

// node_modules/preact-router/dist/preact-router.mjs
var a3 = {};
function c3(n2, t2) {
  for (var r3 in t2)
    n2[r3] = t2[r3];
  return n2;
}
function s3(n2, t2, r3) {
  var i3, o3 = /(?:\?([^#]*))?(#.*)?$/, e3 = n2.match(o3), u3 = {};
  if (e3 && e3[1])
    for (var f3 = e3[1].split("&"), c5 = 0; c5 < f3.length; c5++) {
      var s5 = f3[c5].split("=");
      u3[decodeURIComponent(s5[0])] = decodeURIComponent(s5.slice(1).join("="));
    }
  n2 = d3(n2.replace(o3, "")), t2 = d3(t2 || "");
  for (var h4 = Math.max(n2.length, t2.length), v4 = 0; v4 < h4; v4++)
    if (t2[v4] && ":" === t2[v4].charAt(0)) {
      var l4 = t2[v4].replace(/(^:|[+*?]+$)/g, ""), p4 = (t2[v4].match(/[+*?]+$/) || a3)[0] || "", m4 = ~p4.indexOf("+"), y4 = ~p4.indexOf("*"), U3 = n2[v4] || "";
      if (!U3 && !y4 && (p4.indexOf("?") < 0 || m4)) {
        i3 = false;
        break;
      }
      if (u3[l4] = decodeURIComponent(U3), m4 || y4) {
        u3[l4] = n2.slice(v4).map(decodeURIComponent).join("/");
        break;
      }
    } else if (t2[v4] !== n2[v4]) {
      i3 = false;
      break;
    }
  return (true === r3.default || false !== i3) && u3;
}
function h3(n2, t2) {
  return n2.rank < t2.rank ? 1 : n2.rank > t2.rank ? -1 : n2.index - t2.index;
}
function v3(n2, t2) {
  return n2.index = t2, n2.rank = function(n3) {
    return n3.props.default ? 0 : d3(n3.props.path).map(l3).join("");
  }(n2), n2.props;
}
function d3(n2) {
  return n2.replace(/(^\/+|\/+$)/g, "").split("/");
}
function l3(n2) {
  return ":" == n2.charAt(0) ? 1 + "*+?".indexOf(n2.charAt(n2.length - 1)) || 4 : 5;
}
var p3 = {};
var m3 = [];
var y3 = [];
var U = null;
var g3 = { url: R() };
var k3 = B(g3);
function C3() {
  var n2 = x2(k3);
  if (n2 === g3) {
    var t2 = y2()[1];
    s2(function() {
      return y3.push(t2), function() {
        return y3.splice(y3.indexOf(t2), 1);
      };
    }, []);
  }
  return [n2, $2];
}
function R() {
  var n2;
  return "" + ((n2 = U && U.location ? U.location : U && U.getCurrentLocation ? U.getCurrentLocation() : "undefined" != typeof location ? location : p3).pathname || "") + (n2.search || "");
}
function $2(n2, t2) {
  return void 0 === t2 && (t2 = false), "string" != typeof n2 && n2.url && (t2 = n2.replace, n2 = n2.url), function(n3) {
    for (var t3 = m3.length; t3--; )
      if (m3[t3].canRoute(n3))
        return true;
    return false;
  }(n2) && function(n3, t3) {
    void 0 === t3 && (t3 = "push"), U && U[t3] ? U[t3](n3) : "undefined" != typeof history && history[t3 + "State"] && history[t3 + "State"](null, null, n3);
  }(n2, t2 ? "replace" : "push"), I2(n2);
}
function I2(n2) {
  for (var t2 = false, r3 = 0; r3 < m3.length; r3++)
    m3[r3].routeTo(n2) && (t2 = true);
  return t2;
}
function M2(n2) {
  if (n2 && n2.getAttribute) {
    var t2 = n2.getAttribute("href"), r3 = n2.getAttribute("target");
    if (t2 && t2.match(/^\//g) && (!r3 || r3.match(/^_?self$/i)))
      return $2(t2);
  }
}
function b3(n2) {
  return n2.stopImmediatePropagation && n2.stopImmediatePropagation(), n2.stopPropagation && n2.stopPropagation(), n2.preventDefault(), false;
}
function W(n2) {
  if (!(n2.ctrlKey || n2.metaKey || n2.altKey || n2.shiftKey || n2.button)) {
    var t2 = n2.target;
    do {
      if ("a" === t2.localName && t2.getAttribute("href")) {
        if (t2.hasAttribute("data-native") || t2.hasAttribute("native"))
          return;
        if (M2(t2))
          return b3(n2);
      }
    } while (t2 = t2.parentNode);
  }
}
var w3 = false;
function D(n2) {
  n2.history && (U = n2.history), this.state = { url: n2.url || R() };
}
c3(D.prototype = new d(), { shouldComponentUpdate: function(n2) {
  return true !== n2.static || n2.url !== this.props.url || n2.onChange !== this.props.onChange;
}, canRoute: function(n2) {
  var t2 = x(this.props.children);
  return void 0 !== this.g(t2, n2);
}, routeTo: function(n2) {
  this.setState({ url: n2 });
  var t2 = this.canRoute(n2);
  return this.p || this.forceUpdate(), t2;
}, componentWillMount: function() {
  this.p = true;
}, componentDidMount: function() {
  var n2 = this;
  w3 || (w3 = true, U || addEventListener("popstate", function() {
    I2(R());
  }), addEventListener("click", W)), m3.push(this), U && (this.u = U.listen(function(t2) {
    var r3 = t2.location || t2;
    n2.routeTo("" + (r3.pathname || "") + (r3.search || ""));
  })), this.p = false;
}, componentWillUnmount: function() {
  "function" == typeof this.u && this.u(), m3.splice(m3.indexOf(this), 1);
}, componentWillUpdate: function() {
  this.p = true;
}, componentDidUpdate: function() {
  this.p = false;
}, g: function(n2, t2) {
  n2 = n2.filter(v3).sort(h3);
  for (var r3 = 0; r3 < n2.length; r3++) {
    var i3 = n2[r3], o3 = s3(t2, i3.props.path, i3.props);
    if (o3)
      return [i3, o3];
  }
}, render: function(n2, t2) {
  var e3, u3, f3 = n2.onChange, a4 = t2.url, s5 = this.c, h4 = this.g(x(n2.children), a4);
  if (h4 && (u3 = q(h4[0], c3(c3({ url: a4, matches: e3 = h4[1] }, e3), { key: void 0, ref: void 0 }))), a4 !== (s5 && s5.url)) {
    c3(g3, s5 = this.c = { url: a4, previous: s5 && s5.url, current: u3, path: u3 ? u3.props.path : null, matches: e3 }), s5.router = this, s5.active = u3 ? [u3] : [];
    for (var v4 = y3.length; v4--; )
      y3[v4]({});
    "function" == typeof f3 && f3(s5);
  }
  return h(k3.Provider, { value: s5 }, u3);
} });
var E = function(n2) {
  return h("a", c3({ onClick: W }, n2));
};

// node_modules/preact/compat/dist/compat.module.js
function g4(n2, t2) {
  for (var e3 in t2)
    n2[e3] = t2[e3];
  return n2;
}
function C4(n2, t2) {
  for (var e3 in n2)
    if ("__source" !== e3 && !(e3 in t2))
      return true;
  for (var r3 in t2)
    if ("__source" !== r3 && n2[r3] !== t2[r3])
      return true;
  return false;
}
function E2(n2) {
  this.props = n2;
}
function w4(n2, e3) {
  function r3(n3) {
    var t2 = this.props.ref, r4 = t2 == n3.ref;
    return !r4 && t2 && (t2.call ? t2(null) : t2.current = null), e3 ? !e3(this.props, n3) || !r4 : C4(this.props, n3);
  }
  function u3(e4) {
    return this.shouldComponentUpdate = r3, h(n2, e4);
  }
  return u3.displayName = "Memo(" + (n2.displayName || n2.name) + ")", u3.prototype.isReactComponent = true, u3.__f = true, u3;
}
(E2.prototype = new d()).isPureReactComponent = true, E2.prototype.shouldComponentUpdate = function(n2, t2) {
  return C4(this.props, n2) || C4(this.state, t2);
};
var R2 = l.__b;
l.__b = function(n2) {
  n2.type && n2.type.__f && n2.ref && (n2.props.ref = n2.ref, n2.ref = null), R2 && R2(n2);
};
var x3 = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function N2(n2) {
  function t2(t3) {
    var e3 = g4({}, t3);
    return delete e3.ref, n2(e3, t3.ref || null);
  }
  return t2.$$typeof = x3, t2.render = t2, t2.prototype.isReactComponent = t2.__f = true, t2.displayName = "ForwardRef(" + (n2.displayName || n2.name) + ")", t2;
}
var k4 = function(n2, t2) {
  return null == n2 ? null : x(x(n2).map(t2));
};
var A3 = { map: k4, forEach: k4, count: function(n2) {
  return n2 ? x(n2).length : 0;
}, only: function(n2) {
  var t2 = x(n2);
  if (1 !== t2.length)
    throw "Children.only";
  return t2[0];
}, toArray: x };
var O2 = l.__e;
l.__e = function(n2, t2, e3, r3) {
  if (n2.then) {
    for (var u3, o3 = t2; o3 = o3.__; )
      if ((u3 = o3.__c) && u3.__c)
        return null == t2.__e && (t2.__e = e3.__e, t2.__k = e3.__k), u3.__c(n2, t2);
  }
  O2(n2, t2, e3, r3);
};
var T3 = l.unmount;
function I3(n2, t2, e3) {
  return n2 && (n2.__c && n2.__c.__H && (n2.__c.__H.__.forEach(function(n3) {
    "function" == typeof n3.__c && n3.__c();
  }), n2.__c.__H = null), null != (n2 = g4({}, n2)).__c && (n2.__c.__P === e3 && (n2.__c.__P = t2), n2.__c = null), n2.__k = n2.__k && n2.__k.map(function(n3) {
    return I3(n3, t2, e3);
  })), n2;
}
function L2(n2, t2, e3) {
  return n2 && (n2.__v = null, n2.__k = n2.__k && n2.__k.map(function(n3) {
    return L2(n3, t2, e3);
  }), n2.__c && n2.__c.__P === t2 && (n2.__e && e3.insertBefore(n2.__e, n2.__d), n2.__c.__e = true, n2.__c.__P = e3)), n2;
}
function U2() {
  this.__u = 0, this.t = null, this.__b = null;
}
function D2(n2) {
  var t2 = n2.__.__c;
  return t2 && t2.__a && t2.__a(n2);
}
function F2(n2) {
  var e3, r3, u3;
  function o3(o4) {
    if (e3 || (e3 = n2()).then(function(n3) {
      r3 = n3.default || n3;
    }, function(n3) {
      u3 = n3;
    }), u3)
      throw u3;
    if (!r3)
      throw e3;
    return h(r3, o4);
  }
  return o3.displayName = "Lazy", o3.__f = true, o3;
}
function M3() {
  this.u = null, this.o = null;
}
l.unmount = function(n2) {
  var t2 = n2.__c;
  t2 && t2.__R && t2.__R(), t2 && true === n2.__h && (n2.type = null), T3 && T3(n2);
}, (U2.prototype = new d()).__c = function(n2, t2) {
  var e3 = t2.__c, r3 = this;
  null == r3.t && (r3.t = []), r3.t.push(e3);
  var u3 = D2(r3.__v), o3 = false, i3 = function() {
    o3 || (o3 = true, e3.__R = null, u3 ? u3(l4) : l4());
  };
  e3.__R = i3;
  var l4 = function() {
    if (!--r3.__u) {
      if (r3.state.__a) {
        var n3 = r3.state.__a;
        r3.__v.__k[0] = L2(n3, n3.__c.__P, n3.__c.__O);
      }
      var t3;
      for (r3.setState({ __a: r3.__b = null }); t3 = r3.t.pop(); )
        t3.forceUpdate();
    }
  }, c5 = true === t2.__h;
  r3.__u++ || c5 || r3.setState({ __a: r3.__b = r3.__v.__k[0] }), n2.then(i3, i3);
}, U2.prototype.componentWillUnmount = function() {
  this.t = [];
}, U2.prototype.render = function(n2, e3) {
  if (this.__b) {
    if (this.__v.__k) {
      var r3 = document.createElement("div"), o3 = this.__v.__k[0].__c;
      this.__v.__k[0] = I3(this.__b, r3, o3.__O = o3.__P);
    }
    this.__b = null;
  }
  var i3 = e3.__a && h(p, null, n2.fallback);
  return i3 && (i3.__h = null), [h(p, null, e3.__a ? null : n2.children), i3];
};
var V = function(n2, t2, e3) {
  if (++e3[1] === e3[0] && n2.o.delete(t2), n2.props.revealOrder && ("t" !== n2.props.revealOrder[0] || !n2.o.size))
    for (e3 = n2.u; e3; ) {
      for (; e3.length > 3; )
        e3.pop()();
      if (e3[1] < e3[0])
        break;
      n2.u = e3 = e3[2];
    }
};
function W2(n2) {
  return this.getChildContext = function() {
    return n2.context;
  }, n2.children;
}
function P3(n2) {
  var e3 = this, r3 = n2.i;
  e3.componentWillUnmount = function() {
    P(null, e3.l), e3.l = null, e3.i = null;
  }, e3.i && e3.i !== r3 && e3.componentWillUnmount(), n2.__v ? (e3.l || (e3.i = r3, e3.l = { nodeType: 1, parentNode: r3, childNodes: [], appendChild: function(n3) {
    this.childNodes.push(n3), e3.i.appendChild(n3);
  }, insertBefore: function(n3, t2) {
    this.childNodes.push(n3), e3.i.appendChild(n3);
  }, removeChild: function(n3) {
    this.childNodes.splice(this.childNodes.indexOf(n3) >>> 1, 1), e3.i.removeChild(n3);
  } }), P(h(W2, { context: e3.context }, n2.__v), e3.l)) : e3.l && e3.componentWillUnmount();
}
function $3(n2, e3) {
  var r3 = h(P3, { __v: n2, i: e3 });
  return r3.containerInfo = e3, r3;
}
(M3.prototype = new d()).__a = function(n2) {
  var t2 = this, e3 = D2(t2.__v), r3 = t2.o.get(n2);
  return r3[0]++, function(u3) {
    var o3 = function() {
      t2.props.revealOrder ? (r3.push(u3), V(t2, n2, r3)) : u3();
    };
    e3 ? e3(o3) : o3();
  };
}, M3.prototype.render = function(n2) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var t2 = x(n2.children);
  n2.revealOrder && "b" === n2.revealOrder[0] && t2.reverse();
  for (var e3 = t2.length; e3--; )
    this.o.set(t2[e3], this.u = [1, 0, this.u]);
  return n2.children;
}, M3.prototype.componentDidUpdate = M3.prototype.componentDidMount = function() {
  var n2 = this;
  this.o.forEach(function(t2, e3) {
    V(n2, e3, t2);
  });
};
var j3 = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;
var z3 = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
var B3 = "undefined" != typeof document;
var H2 = function(n2) {
  return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/i : /fil|che|ra/i).test(n2);
};
function Z(n2, t2, e3) {
  return null == t2.__k && (t2.textContent = ""), P(n2, t2), "function" == typeof e3 && e3(), n2 ? n2.__c : null;
}
function Y(n2, t2, e3) {
  return S(n2, t2), "function" == typeof e3 && e3(), n2 ? n2.__c : null;
}
d.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t2) {
  Object.defineProperty(d.prototype, t2, { configurable: true, get: function() {
    return this["UNSAFE_" + t2];
  }, set: function(n2) {
    Object.defineProperty(this, t2, { configurable: true, writable: true, value: n2 });
  } });
});
var q3 = l.event;
function G() {
}
function J() {
  return this.cancelBubble;
}
function K() {
  return this.defaultPrevented;
}
l.event = function(n2) {
  return q3 && (n2 = q3(n2)), n2.persist = G, n2.isPropagationStopped = J, n2.isDefaultPrevented = K, n2.nativeEvent = n2;
};
var Q;
var X = { configurable: true, get: function() {
  return this.class;
} };
var nn = l.vnode;
l.vnode = function(n2) {
  var t2 = n2.type, e3 = n2.props, u3 = e3;
  if ("string" == typeof t2) {
    var o3 = -1 === t2.indexOf("-");
    for (var i3 in u3 = {}, e3) {
      var l4 = e3[i3];
      B3 && "children" === i3 && "noscript" === t2 || "value" === i3 && "defaultValue" in e3 && null == l4 || ("defaultValue" === i3 && "value" in e3 && null == e3.value ? i3 = "value" : "download" === i3 && true === l4 ? l4 = "" : /ondoubleclick/i.test(i3) ? i3 = "ondblclick" : /^onchange(textarea|input)/i.test(i3 + t2) && !H2(e3.type) ? i3 = "oninput" : /^onfocus$/i.test(i3) ? i3 = "onfocusin" : /^onblur$/i.test(i3) ? i3 = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(i3) ? i3 = i3.toLowerCase() : o3 && z3.test(i3) ? i3 = i3.replace(/[A-Z0-9]/g, "-$&").toLowerCase() : null === l4 && (l4 = void 0), /^oninput$/i.test(i3) && (i3 = i3.toLowerCase(), u3[i3] && (i3 = "oninputCapture")), u3[i3] = l4);
    }
    "select" == t2 && u3.multiple && Array.isArray(u3.value) && (u3.value = x(e3.children).forEach(function(n3) {
      n3.props.selected = -1 != u3.value.indexOf(n3.props.value);
    })), "select" == t2 && null != u3.defaultValue && (u3.value = x(e3.children).forEach(function(n3) {
      n3.props.selected = u3.multiple ? -1 != u3.defaultValue.indexOf(n3.props.value) : u3.defaultValue == n3.props.value;
    })), n2.props = u3, e3.class != e3.className && (X.enumerable = "className" in e3, null != e3.className && (u3.class = e3.className), Object.defineProperty(u3, "className", X));
  }
  n2.$$typeof = j3, nn && nn(n2);
};
var tn = l.__r;
l.__r = function(n2) {
  tn && tn(n2), Q = n2.__c;
};
var en = { ReactCurrentDispatcher: { current: { readContext: function(n2) {
  return Q.__n[n2.__c].props.value;
} } } };
function un(n2) {
  return h.bind(null, n2);
}
function on(n2) {
  return !!n2 && n2.$$typeof === j3;
}
function ln(n2) {
  return on(n2) ? q.apply(null, arguments) : n2;
}
function cn(n2) {
  return !!n2.__k && (P(null, n2), true);
}
function fn(n2) {
  return n2 && (n2.base || 1 === n2.nodeType && n2) || null;
}
var an = function(n2, t2) {
  return n2(t2);
};
var sn = function(n2, t2) {
  return n2(t2);
};
var hn = p;
function vn(n2) {
  n2();
}
function dn(n2) {
  return n2;
}
function pn() {
  return [false, vn];
}
var mn = _2;
function yn(n2, t2) {
  var e3 = t2(), r3 = y2({ h: { __: e3, v: t2 } }), u3 = r3[0].h, o3 = r3[1];
  return _2(function() {
    u3.__ = e3, u3.v = t2, u3.__ !== t2() && o3({ h: u3 });
  }, [n2, e3, t2]), s2(function() {
    return u3.__ !== u3.v() && o3({ h: u3 }), n2(function() {
      u3.__ !== u3.v() && o3({ h: u3 });
    });
  }, [n2]), e3;
}
var _n = { useState: y2, useId: b2, useReducer: h2, useEffect: s2, useLayoutEffect: _2, useInsertionEffect: mn, useTransition: pn, useDeferredValue: dn, useSyncExternalStore: yn, startTransition: vn, useRef: A2, useImperativeHandle: F, useMemo: T2, useCallback: q2, useContext: x2, useDebugValue: P2, version: "17.0.2", Children: A3, render: Z, hydrate: Y, unmountComponentAtNode: cn, createPortal: $3, createElement: h, createContext: B, createFactory: un, cloneElement: ln, createRef: y, Fragment: p, isValidElement: on, findDOMNode: fn, Component: d, PureComponent: E2, memo: w4, forwardRef: N2, flushSync: sn, unstable_batchedUpdates: an, StrictMode: hn, Suspense: U2, SuspenseList: M3, lazy: F2, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: en };

// views/pages/AboutPage.jsx
var AboutPage = () => {
  return /* @__PURE__ */ _n.createElement("div", null, /* @__PURE__ */ _n.createElement("h1", null, "About page"));
};
var AboutPage_default = AboutPage;

// views/apis/index.js
var import_axios = __toESM(require_axios2());
var backend = "/";
var token = window.localStorage.getItem("token");
var apis = import_axios.default.create({
  baseURL: backend,
  headers: {
    authorization: token
  }
});
var apis_default = apis;

// views/store/types.js
var ACTION_TYPES = {
  FETCH_ALL_POSTS: "FETCH_ALL_POSTS",
  SET_ADMIN: "SET_ADMIN",
  SET_CATEGORIES: "SET_CATEGORIES"
};
var types_default = ACTION_TYPES;

// views/store/actions.js
var fetchAllPosts = (dispatch) => {
  apis_default.get("/api/posts").then((res) => {
    if (res.status === 200) {
      dispatch({
        type: types_default.FETCH_ALL_POSTS,
        payload: res.data.posts
      });
    }
  }).catch((ex) => {
    console.log(ex.message);
  });
};
var fetchCurrentAuth = (dispatch) => {
  (async function() {
    try {
      let token2 = "";
      if (typeof window !== "undefined") {
        token2 = window.localStorage.getItem("token");
      }
      let r3 = await apis_default.get("/api/auth/fetch_auth");
      if (r3.status === 200) {
        dispatch && dispatch({
          type: types_default.SET_ADMIN,
          payload: r3.data.user
        });
      }
    } catch (ex) {
      console.log(ex.message);
    }
  })();
};
var handleLoginAction = (dispatch, data, cb) => {
  apis_default.post("/api/auth/login", { email: data.email, password: data.password }).then((r3) => {
    if (r3.status === 201) {
      dispatch({
        type: types_default.SET_ADMIN,
        payload: r3.data.user
      });
      console.log(r3.data);
      if (r3.data.token) {
        localStorage.setItem("token", r3.data.token);
      }
      cb(null, r3.data);
    } else {
      cb(r3.data.message, null);
    }
  }).catch((ex) => {
    console.log(ex);
  });
};

// views/store/AppContext.js
var AppContext = B({});
var AppContext_default = AppContext;

// views/store/useStore.js
var useStore = () => {
  const { state, dispatch } = x2(AppContext_default);
  return [state, dispatch];
};
var useStore_default = useStore;

// views/pages/HomePage.jsx
var HomePage = () => {
  const [{ posts }, dispatch] = useStore_default();
  s2(() => {
    fetchAllPosts(dispatch);
  }, []);
  console.log(posts);
  return /* @__PURE__ */ _n.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ _n.createElement("h1", null, "Home page asd sad as-sad"), posts && posts.map((post) => /* @__PURE__ */ _n.createElement("div", null, /* @__PURE__ */ _n.createElement("li", null, post.title))));
};
var HomePage_default = HomePage;

// node_modules/preact-router/match/index.mjs
var s4 = ["className", "activeClass", "activeClassName", "path"];
function c4(l4) {
  var c5 = l4.className, n2 = l4.activeClass, u3 = l4.activeClassName, i3 = l4.path, p4 = function(a4, t2) {
    if (null == a4)
      return {};
    var r3, e3, s5 = {}, l5 = Object.keys(a4);
    for (e3 = 0; e3 < l5.length; e3++)
      t2.indexOf(r3 = l5[e3]) >= 0 || (s5[r3] = a4[r3]);
    return s5;
  }(l4, s4), h4 = C3()[0], f3 = i3 && h4.path && s3(h4.path, i3, {}) || s3(h4.url, p4.href, {}), o3 = p4.class || c5 || "", m4 = f3 && (n2 || u3) || "";
  return p4.class = o3 + (o3 && m4 && " ") + m4, h(E, p4);
}

// views/components/Navigation.jsx
var Navigation = () => {
  const [{ auth, categories }, dispatch] = useStore_default();
  const [state, setState] = y2({
    isOpen: false
  });
  s2(() => {
    fetch("/api/categories").then((res) => res.json()).then((result) => {
      dispatch({
        type: types_default.SET_CATEGORIES,
        payload: result
      });
    });
    window.addEventListener("resize", handleResize);
  }, []);
  function handleResize(e3) {
    if (window.innerWidth > 676) {
      setState({
        ...state,
        isOpen: false
      });
    }
  }
  function handleToggleNav(e3) {
    setState({
      ...state,
      isOpen: !state.isOpen
    });
  }
  return /* @__PURE__ */ _n.createElement("div", null, /* @__PURE__ */ _n.createElement("div", {
    className: "header"
  }, /* @__PURE__ */ _n.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ _n.createElement("div", {
    className: "navigation"
  }, /* @__PURE__ */ _n.createElement("div", {
    className: "logo"
  }, /* @__PURE__ */ _n.createElement("svg", {
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    width: "438.68",
    viewBox: "0 0 438.68 147.42"
  }, /* @__PURE__ */ _n.createElement("g", {
    id: "Group_366",
    "data-name": "Group 366",
    transform: "translate(-466 -368)"
  }, /* @__PURE__ */ _n.createElement("g", {
    id: "Group_365",
    "data-name": "Group 365",
    transform: "translate(0 0.42)"
  }, /* @__PURE__ */ _n.createElement("circle", {
    id: "Ellipse_4",
    "data-name": "Ellipse 4",
    cx: "73.71",
    cy: "73.71",
    r: "73.71",
    transform: "translate(466 367.58)",
    fill: "#f6df19"
  }), /* @__PURE__ */ _n.createElement("path", {
    id: "Path_12",
    "data-name": "Path 12",
    d: "M29,77.8H43.23v4.66a7.58,7.58,0,0,0,1,4.37,3.7,3.7,0,0,0,3.16,1.27,3.69,3.69,0,0,0,3.3-1.39q1-1.39,1-5.34V49.29H67.68V83q0,8.68-5.06,13.22t-14.73,4.54q-9.55,0-14.29-4.83T28.87,81.37c0-.73.05-1.85.14-3.37Z",
    transform: "translate(466 367.58)",
    fill: "#231f20"
  }), /* @__PURE__ */ _n.createElement("path", {
    id: "Path_13",
    "data-name": "Path 13",
    d: "M74.59,83.78H90.23a6.35,6.35,0,0,0,2.35,3.91,8.83,8.83,0,0,0,5.07,1.19,8.71,8.71,0,0,0,4.44-1,3,3,0,0,0,1.61-2.67c0-1.82-2.25-3.29-6.76-4.43l-2.08-.51q-5.55-1.43-8.83-2.6a22.14,22.14,0,0,1-4.77-2.19,13.56,13.56,0,0,1-4.34-5A14.5,14.5,0,0,1,75.47,64a13.87,13.87,0,0,1,5.62-11.7Q86.7,48,96.53,48q9.66,0,15.2,4.07A15.552,15.552,0,0,1,118,63.71H102.72a4.72,4.72,0,0,0-2-3.29,7.83,7.83,0,0,0-4.5-1.09,6.93,6.93,0,0,0-3.85.85,2.9,2.9,0,0,0-1.26,2.58q0,2.49,6.6,4.15a9.1,9.1,0,0,0,.89.24l2.89.71q8.73,2.22,11.43,4a14.38,14.38,0,0,1,4.86,5,13.8,13.8,0,0,1,1.53,6.67q0,8.3-5.8,12.75T96.9,100.74q-10,0-15.8-4.46A16.86,16.86,0,0,1,74.59,83.78Z",
    transform: "translate(466 367.58)",
    fill: "#231f20"
  })), /* @__PURE__ */ _n.createElement("g", {
    id: "Group_364",
    "data-name": "Group 364",
    transform: "translate(6 5.236)"
  }, /* @__PURE__ */ _n.createElement("g", {
    id: "Group_362",
    "data-name": "Group 362",
    transform: "translate(15.48 1)"
  }, /* @__PURE__ */ _n.createElement("path", {
    id: "Path_14",
    "data-name": "Path 14",
    d: "M176.379,37.824c-4.128.476-4.669.836-4.669,5.8V63.109c0,6.855-.643,12.591-6.251,17.015a20.733,20.733,0,0,1-7.331,3.6l-.939-2.238a8.823,8.823,0,0,0,5.672-7.267,73.094,73.094,0,0,0,.643-11.344V43.585c0-4.964-.592-5.376-5.145-5.8V35.65h18.006Z",
    transform: "translate(461.055 353.95)"
  }), /* @__PURE__ */ _n.createElement("path", {
    id: "Path_15",
    "data-name": "Path 15",
    d: "M194.048,72.2a5.466,5.466,0,0,1-3.665-1.286,6.186,6.186,0,0,1-1.543-2.186c-2.238,1.466-5.145,3.421-6.251,3.421a7.717,7.717,0,0,1-8.038-7.614c0-3.138,1.415-4.553,4.553-5.8,3.485-1.286,8.141-2.714,9.5-3.858V52.3c0-3.074-1.119-4.784-3.665-4.784a2.894,2.894,0,0,0-2.354,1.183,11.125,11.125,0,0,0-1.428,3.858,2.328,2.328,0,0,1-2.572,2.006,3.6,3.6,0,0,1-3.46-3.01c0-1.067.707-1.839,2.071-2.778a28.874,28.874,0,0,1,9.5-4.219,10.418,10.418,0,0,1,6.1,1.711c2.572,1.775,3.241,4.244,3.241,7.267V63.75c0,2.842.952,3.55,1.891,3.55a4.488,4.488,0,0,0,1.839-.476l.643,2.006Zm-5.44-14.881L185.3,59.146c-1.839.939-2.894,2.006-2.894,4.013,0,3.318,2.3,4.489,3.6,4.489a3.305,3.305,0,0,0,2.572-.939Z",
    transform: "translate(466.022 356.498)"
  }), /* @__PURE__ */ _n.createElement("path", {
    id: "Path_16",
    "data-name": "Path 16",
    d: "M224.108,47.116c-3.19.527-3.665,1.183-4.9,3.961-2.071,4.72-5.145,11.987-8.694,20.9h-2.469c-2.958-7.318-5.672-14.289-8.514-21.08-1.067-2.572-1.646-3.254-4.72-3.781V45.11h14.765v2.006c-2.662.527-3.01,1-2.3,2.945,1.479,4.077,3.6,9.749,4.54,12.18,1.016-2.572,3.022-7.717,4.373-11.82.592-1.775.476-2.894-3.19-3.305V45.11h11.112Z",
    transform: "translate(471.819 356.657)"
  }), /* @__PURE__ */ _n.createElement("path", {
    id: "Path_17",
    "data-name": "Path 17",
    d: "M239.018,72.195a5.466,5.466,0,0,1-3.665-1.286,6.186,6.186,0,0,1-1.543-2.186c-2.238,1.466-5.145,3.421-6.251,3.421a7.717,7.717,0,0,1-8.038-7.614c0-3.138,1.415-4.553,4.553-5.8,3.485-1.286,8.141-2.714,9.5-3.858V52.3c0-3.074-1.119-4.784-3.665-4.784a2.894,2.894,0,0,0-2.354,1.183,11.382,11.382,0,0,0-1.428,3.858,2.328,2.328,0,0,1-2.572,2.006,3.614,3.614,0,0,1-3.421-3.01c0-1.067.707-1.839,2.071-2.778a28.809,28.809,0,0,1,9.453-4.193,10.392,10.392,0,0,1,6.083,1.711c2.572,1.775,3.241,4.244,3.241,7.267V63.77c0,2.842.952,3.55,1.891,3.55a4.489,4.489,0,0,0,1.839-.476l.643,2.006Zm-5.44-14.881-3.305,1.826c-1.826.939-2.894,2.006-2.894,4.013,0,3.318,2.3,4.489,3.6,4.489a3.305,3.305,0,0,0,2.572-.939Z",
    transform: "translate(478.889 356.504)"
  }), /* @__PURE__ */ _n.createElement("path", {
    id: "Path_18",
    "data-name": "Path 18",
    d: "M264.879,45.572c-1.183-3.781-2.829-8.09-8.27-8.09a5.44,5.44,0,0,0-5.672,5.736c0,3.241,2.186,5.145,7.382,7.794,6.328,3.125,10.289,6.2,10.289,12.051,0,6.971-5.788,12.051-14.237,12.051a33.89,33.89,0,0,1-9.929-1.839c-.347-1.35-1.35-7.5-1.762-10.289l2.3-.527c1.183,3.717,4.489,10.16,10.289,10.16,3.6,0,5.788-2.251,5.788-6.032,0-3.421-2.122-5.427-7.087-8.09-6.148-3.305-10.16-6.263-10.16-12.4S248.7,35,257.56,35A43.33,43.33,0,0,1,266,36.067c.244,2.186.656,5.26,1.132,9Z",
    transform: "translate(485.516 353.764)"
  }), /* @__PURE__ */ _n.createElement("path", {
    id: "Path_19",
    "data-name": "Path 19",
    d: "M290.468,65.719c-2.727,3.858-6.675,6.431-10.289,6.431A12.475,12.475,0,0,1,267.24,59.456a14.148,14.148,0,0,1,6.019-11.292,17.247,17.247,0,0,1,10.289-3.653,9.17,9.17,0,0,1,5.145,1.415,2.456,2.456,0,0,1,1.132,2.186,3.755,3.755,0,0,1-2.662,3.305,1.826,1.826,0,0,1-1.286-.656c-2.572-2.122-4.553-3.061-6.148-3.061-2.3,0-5.145,2.238-5.145,8.617,0,7.858,5.736,10.392,8.27,10.392a8.81,8.81,0,0,0,6.328-2.469Z",
    transform: "translate(492.543 356.485)"
  }), /* @__PURE__ */ _n.createElement("path", {
    id: "Path_20",
    "data-name": "Path 20",
    d: "M303.738,71.52H288.15V69.514c3.125-.36,3.421-.656,3.421-4.193V52.383c0-2.958-.231-3.254-3.01-3.858V46.711A56.036,56.036,0,0,0,299.2,44.46v6.431c2.649-4.064,4.784-6.251,7.2-6.251a3.588,3.588,0,0,1,3.858,3.537,5.762,5.762,0,0,1-3.01,4.977,1.646,1.646,0,0,1-1.826-.3c-1-.836-1.775-1.775-2.778-1.775s-2.366.759-3.421,3.01V65.321c0,3.537.412,3.717,4.54,4.193Z",
    transform: "translate(498.526 356.471)"
  }), /* @__PURE__ */ _n.createElement("path", {
    id: "Path_21",
    "data-name": "Path 21",
    d: "M308.73,74.173V72.166c3.19-.412,3.537-.656,3.537-4.849V55.743c0-3.961-.3-4.206-3.074-4.553V49.3a65.13,65.13,0,0,0,10.7-2.122V67.318c0,4.013.232,4.437,3.653,4.849v2.006Zm6.907-30.6a4.3,4.3,0,0,1-4.257-4.193A4.231,4.231,0,0,1,315.7,35.19a4.141,4.141,0,0,1,4.244,4.193,4.231,4.231,0,0,1-4.309,4.193Z",
    transform: "translate(504.415 353.819)"
  }), /* @__PURE__ */ _n.createElement("path", {
    id: "Path_22",
    "data-name": "Path 22",
    d: "M323.332,46.749A99.255,99.255,0,0,0,334.2,44.1v4.244c.116,0,3.948-2.354,4.128-2.418a7.588,7.588,0,0,1,3.858-1.286c6.431,0,10.212,5.955,10.212,11.575,0,8.63-6.855,14.353-14.469,16.012a10.958,10.958,0,0,1-3.717-.527v7.087c0,3.305.3,3.665,4.373,4.193v1.942H322.74V83.083c3.6-.36,3.858-.887,3.858-4.141V52.6c0-3.19-.347-3.55-3.241-3.858ZM334.2,67.327a8.115,8.115,0,0,0,4.836,2.186c3.138,0,5.44-3.858,5.44-10.289,0-7.267-3.6-10.045-6.559-10.045a6.431,6.431,0,0,0-3.717,1.286Z",
    transform: "translate(508.423 356.368)"
  }), /* @__PURE__ */ _n.createElement("path", {
    id: "Path_23",
    "data-name": "Path 23",
    d: "M362.822,73.542a6.624,6.624,0,0,1-2.367.643c-4.54,0-7.267-2.122-7.267-7.5V50.2h-3.781l-.347-.707,1.711-2.238h2.418V42.34c2.006-1.415,4.9-3.305,6.971-4.72l.772.476c-.064,1.595-.18,4.72-.116,9.157h5.9a2.572,2.572,0,0,1-.476,2.945h-5.428V64.68c0,4.6,1.891,5.145,3.01,5.145a7.267,7.267,0,0,0,2.842-.592l.579,2.135Z",
    transform: "translate(515.954 354.514)"
  })), /* @__PURE__ */ _n.createElement("g", {
    id: "Group_363",
    "data-name": "Group 363",
    transform: "translate(0 7)"
  }, /* @__PURE__ */ _n.createElement("path", {
    id: "Path_24",
    "data-name": "Path 24",
    d: "M165.556,112.181H160.73V84.775h2.007a24.841,24.841,0,0,0,3.144-.148A35.473,35.473,0,0,1,170,84.48a15.835,15.835,0,0,1,3.749.428,8.855,8.855,0,0,1,3.04,1.358,6.523,6.523,0,0,1,2.051,2.465,8.589,8.589,0,0,1,.738,3.734,9.622,9.622,0,0,1-.856,4.265,6.434,6.434,0,0,1-2.406,2.686,9.387,9.387,0,0,1-3.675,1.313l-1.55.192c-.517,0-1.2.1-2.051.118s-2.007,0-3.468,0Zm0-14.507h3.985a5.328,5.328,0,0,0,3.9-1.313,5.062,5.062,0,0,0,1.343-3.822,5.7,5.7,0,0,0-.5-2.524,3.291,3.291,0,0,0-1.682-1.594,7.852,7.852,0,0,0-3.262-.561,14.893,14.893,0,0,0-1.992.089,14.069,14.069,0,0,0-1.786.251Zm10.537,14.507a4.5,4.5,0,0,1-.413-.738c-.1-.251-.31-.679-.59-1.269-.384-.826-.753-1.741-1.107-2.76s-.738-1.992-1.136-2.952a10.228,10.228,0,0,0-1.476-2.391,2.952,2.952,0,0,0-1.889-1.122l1.638-1.269h2.952a4.708,4.708,0,0,1,1.919,1.623,16.807,16.807,0,0,1,1.476,2.716c.472,1.033.93,2.066,1.373,3.143a30.03,30.03,0,0,0,1.4,2.952c.192.339.384.679.561,1.018l.576,1Z",
    transform: "translate(472.995 363.69)",
    fill: "#d2d2d2"
  }), /* @__PURE__ */ _n.createElement("path", {
    id: "Path_25",
    "data-name": "Path 25",
    d: "M182.63,112.086V84.68h16.234v3.675H187.5v7.837H196v3.616h-8.545v8.53h12.633v3.749Z",
    transform: "translate(485.713 363.785)",
    fill: "#d2d2d2"
  }), /* @__PURE__ */ _n.createElement("path", {
    id: "Path_26",
    "data-name": "Path 26",
    d: "M202.54,112.086V84.68h16.116v3.675h-11.29v8.265h8.471v3.645h-8.471v11.807Z",
    transform: "translate(497.243 363.785)",
    fill: "#d2d2d2"
  }), /* @__PURE__ */ _n.createElement("path", {
    id: "Path_27",
    "data-name": "Path 27",
    d: "M225.756,112.181H220.93V84.775h2.007a24.842,24.842,0,0,0,3.144-.148,35.607,35.607,0,0,1,4.132-.148,15.807,15.807,0,0,1,3.734.428,8.663,8.663,0,0,1,3.04,1.358,6.258,6.258,0,0,1,2.037,2.465,8.589,8.589,0,0,1,.738,3.734,9.43,9.43,0,0,1-.856,4.265,6.434,6.434,0,0,1-2.406,2.686,9.386,9.386,0,0,1-3.675,1.313l-1.476.192c-.531,0-1.21.1-2.066.118s-1.992,0-3.468,0Zm0-14.507h3.911a5.328,5.328,0,0,0,3.9-1.313,5.062,5.062,0,0,0,1.343-3.822,5.7,5.7,0,0,0-.5-2.524,3.291,3.291,0,0,0-1.564-1.491,7.822,7.822,0,0,0-3.247-.561,15.115,15.115,0,0,0-2.007.089,14.069,14.069,0,0,0-1.786.251Zm10.537,14.507a4.5,4.5,0,0,1-.413-.738c-.1-.251-.3-.679-.59-1.269-.369-.826-.738-1.741-1.107-2.76s-.738-1.992-1.136-2.952a9.313,9.313,0,0,0-1.476-2.391,2.952,2.952,0,0,0-1.889-1.122l1.653-1.269h2.952a4.752,4.752,0,0,1,1.933,1.623,19.366,19.366,0,0,1,1.476,2.716c.472,1.033.93,2.066,1.372,3.143a26.955,26.955,0,0,0,1.4,2.952c.177.339.369.679.561,1.018s.369.679.561,1Z",
    transform: "translate(508.067 363.69)",
    fill: "#d2d2d2"
  }), /* @__PURE__ */ _n.createElement("path", {
    id: "Path_28",
    "data-name": "Path 28",
    d: "M242.85,112.086V84.68h16.234v3.675H247.705v7.837h8.5v3.616h-8.5v8.53h12.633v3.749Z",
    transform: "translate(520.686 363.785)",
    fill: "#d2d2d2"
  }), /* @__PURE__ */ _n.createElement("path", {
    id: "Path_29",
    "data-name": "Path 29",
    d: "M270.153,112.478a21.3,21.3,0,0,1-3.453-.266,18.934,18.934,0,0,1-2.8-.649,9.03,9.03,0,0,1-1.7-.694l.915-3.867a10.611,10.611,0,0,0,1.756.8,16.617,16.617,0,0,0,2.361.635,12.677,12.677,0,0,0,2.583.266,6.833,6.833,0,0,0,3.66-.8,2.819,2.819,0,0,0,1.254-2.583,3.291,3.291,0,0,0-.635-2.037,6.7,6.7,0,0,0-1.948-1.579c-.856-.5-1.963-1.063-3.291-1.7a20.533,20.533,0,0,1-3.247-1.978,10.33,10.33,0,0,1-2.538-2.73,7.379,7.379,0,0,1-.221-6.966,6.316,6.316,0,0,1,2.066-2.228,9.269,9.269,0,0,1,2.952-1.225,14.965,14.965,0,0,1,3.468-.4,15.466,15.466,0,0,1,4.324.517,10.332,10.332,0,0,1,2.42.959l-.885,3.749a10.523,10.523,0,0,0-2.273-1.092,10.966,10.966,0,0,0-3.483-.472,7.866,7.866,0,0,0-2.42.339A3.852,3.852,0,0,0,267.29,89.5a2.376,2.376,0,0,0-.649,1.712,3.6,3.6,0,0,0,.531,2.007,5.062,5.062,0,0,0,1.682,1.476q1.151.738,2.952,1.682c.974.472,1.9.989,2.8,1.476a14.021,14.021,0,0,1,2.435,1.786,7.631,7.631,0,0,1,1.712,2.243,6.449,6.449,0,0,1,.62,2.952,6.789,6.789,0,0,1-4.427,6.745,12.854,12.854,0,0,1-4.8.9Z",
    transform: "translate(531.843 363.689)",
    fill: "#d2d2d2"
  }), /* @__PURE__ */ _n.createElement("path", {
    id: "Path_30",
    "data-name": "Path 30",
    d: "M282.05,112.086V84.68h4.841V96.487H298.8V84.68h4.8v27.406h-4.8V100.058h-11.91v12.028Z",
    transform: "translate(543.74 363.785)",
    fill: "#d2d2d2"
  })))))), /* @__PURE__ */ _n.createElement("div", {
    className: "flex items-center justify-between"
  }, /* @__PURE__ */ _n.createElement("ul", {
    className: `main-nav ${state.isOpen ? "main-nav__expand" : ""}`
  }, categories && categories.map((item) => {
    var _a;
    return /* @__PURE__ */ _n.createElement("li", {
      className: "nav-item relative flex items-center"
    }, /* @__PURE__ */ _n.createElement(c4, {
      href: "/"
    }, item.name), /* @__PURE__ */ _n.createElement("svg", {
      className: `angle-down-icon ${!item.subCategories ? "hidden" : "block"}`,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 448 512"
    }, /* @__PURE__ */ _n.createElement("path", {
      d: "M443.5 162.6l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L224 351 28.5 155.5c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l211 211.1c4.7 4.7 12.3 4.7 17 0l211-211.1c4.8-4.7 4.8-12.3.1-17z"
    })), item.subCategories && /* @__PURE__ */ _n.createElement("div", {
      className: "dropdown-nav"
    }, (_a = item.subCategories) == null ? void 0 : _a.map((sub) => /* @__PURE__ */ _n.createElement("li", {
      className: "item"
    }, /* @__PURE__ */ _n.createElement("a", {
      href: "/"
    }, sub.name)))));
  })), /* @__PURE__ */ _n.createElement("div", {
    className: "extra-menu"
  }, /* @__PURE__ */ _n.createElement("li", {
    className: "icon-item shown-icon-nav"
  }, /* @__PURE__ */ _n.createElement("svg", {
    className: "dark-mode-icon",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512"
  }, /* @__PURE__ */ _n.createElement("title", null, "Dark Mode"), /* @__PURE__ */ _n.createElement("path", {
    fill: "currentColor",
    d: "M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"
  }))), /* @__PURE__ */ _n.createElement("li", {
    className: "icon-item "
  }, /* @__PURE__ */ _n.createElement("svg", {
    className: "light-mode-icon ",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512"
  }, /* @__PURE__ */ _n.createElement("title", null, "Light Mode"), /* @__PURE__ */ _n.createElement("path", {
    fill: "currentColor",
    d: "M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"
  }))), /* @__PURE__ */ _n.createElement("li", {
    className: "icon-item shown-icon-nav",
    onClick: handleToggleNav
  }, /* @__PURE__ */ _n.createElement("svg", {
    className: "menu-bars-icon",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 512"
  }, /* @__PURE__ */ _n.createElement("path", {
    d: "M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
  }))), /* @__PURE__ */ _n.createElement("li", {
    className: "icon-item shown-icon-nav"
  }, auth ? /* @__PURE__ */ _n.createElement("div", {
    className: "auth-avatar relative"
  }, auth.avatar ? /* @__PURE__ */ _n.createElement("img", {
    src: auth.avatar,
    alt: ""
  }) : /* @__PURE__ */ _n.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512"
  }, /* @__PURE__ */ _n.createElement("path", {
    d: "M256 112c-48.6 0-88 39.4-88 88C168 248.6 207.4 288 256 288s88-39.4 88-88C344 151.4 304.6 112 256 112zM256 240c-22.06 0-40-17.95-40-40C216 177.9 233.9 160 256 160s40 17.94 40 40C296 222.1 278.1 240 256 240zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-46.73 0-89.76-15.68-124.5-41.79C148.8 389 182.4 368 220.2 368h71.69c37.75 0 71.31 21.01 88.68 54.21C345.8 448.3 302.7 464 256 464zM416.2 388.5C389.2 346.3 343.2 320 291.8 320H220.2c-51.36 0-97.35 26.25-124.4 68.48C65.96 352.5 48 306.3 48 256c0-114.7 93.31-208 208-208s208 93.31 208 208C464 306.3 446 352.5 416.2 388.5z"
  })), /* @__PURE__ */ _n.createElement("div", {
    className: "card auth-menu"
  }, /* @__PURE__ */ _n.createElement("li", null, /* @__PURE__ */ _n.createElement(c4, {
    href: "/add-post"
  }, "Add post")))) : /* @__PURE__ */ _n.createElement(c4, {
    href: "/login"
  }, "Login"))))))), /* @__PURE__ */ _n.createElement("div", {
    className: "spacer"
  }));
};
var Navigation_default = Navigation;

// views/pages/auth/Login.jsx
var Login = () => {
  const [app, dispatch] = useStore_default();
  const [state, setState] = y2({
    data: { email: "", password: "" }
  });
  function handleChange(e3) {
    setState({
      ...state,
      data: {
        ...state.data,
        [e3.target.name]: e3.target.value
      }
    });
  }
  async function handleSubmit(e3) {
    e3.preventDefault();
    handleLoginAction(dispatch, state.data, () => {
    });
  }
  return /* @__PURE__ */ _n.createElement("div", {
    className: "login-form card"
  }, /* @__PURE__ */ _n.createElement("form", {
    onSubmit: handleSubmit
  }, /* @__PURE__ */ _n.createElement("input", {
    type: "text",
    name: "email",
    className: "input",
    placeholder: "Admin Email",
    onChange: handleChange,
    value: state.data.email
  }), /* @__PURE__ */ _n.createElement("br", null), /* @__PURE__ */ _n.createElement("input", {
    type: "password",
    name: "password",
    className: "input",
    onChange: handleChange,
    placeholder: "Admin Password",
    value: state.data.password
  }), /* @__PURE__ */ _n.createElement("br", null), /* @__PURE__ */ _n.createElement("button", {
    className: "btn",
    type: "submit"
  }, "Login")));
};
var Login_default = Login;

// views/components/inputs/MultiSelect.jsx
function MultiSelect({ name, value, label, placeholder, className, onChange, options, errorMessage }) {
  const [isOpen, setOpen] = _n.useState(false);
  function onClick(item, e3) {
    e3 && e3.stopPropagation();
    let updateState = [];
    if (value && Array.isArray(value)) {
      updateState = [...value];
    }
    let index = updateState.findIndex((v4) => v4.name === item.name);
    if (index === -1) {
      updateState.push(item);
    } else {
      updateState.splice(index, 1);
    }
    setOpen(false);
    onChange && onChange({ target: { value: updateState, name } });
  }
  function deleteSelectedInput(item) {
    let newState = value && value.filter((v4) => v4.name !== item.name);
    onChange && onChange({ target: { value: newState, name } });
  }
  function handleToggleSelect(e3) {
    setOpen(!isOpen);
  }
  return /* @__PURE__ */ _n.createElement("div", {
    className: ["multi-select", className].join(" ")
  }, /* @__PURE__ */ _n.createElement("label", {
    htmlFor: name,
    className: "block w-40 font-medium text-gray-200 mb-2 md:mb-0"
  }, label), /* @__PURE__ */ _n.createElement("div", {
    className: "w-full"
  }, /* @__PURE__ */ _n.createElement("div", {
    className: "flex flex-wrap gap-x-1 gap-y-1 mb-1"
  }, value && value.map((v4, i3) => /* @__PURE__ */ _n.createElement("li", {
    key: i3,
    className: "select-item "
  }, /* @__PURE__ */ _n.createElement("span", {
    className: "mr-2 text-white"
  }, v4.name), /* @__PURE__ */ _n.createElement("svg", {
    onClick: () => deleteSelectedInput(v4),
    className: "delete-svg w-2 fill-white cursor-pointer",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 320 512"
  }, /* @__PURE__ */ _n.createElement("path", {
    d: "M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z"
  }))))), /* @__PURE__ */ _n.createElement("div", {
    className: "input shrink w-full text-gray-300 relative flex items-center",
    placeholder,
    onClick: handleToggleSelect
  }, placeholder, isOpen && /* @__PURE__ */ _n.createElement("ul", {
    className: "absolute top-12 left-0 bg-neutral w-full p-4 shadow-11xl"
  }, options(onClick))), /* @__PURE__ */ _n.createElement("div", {
    className: "mt-1"
  }, errorMessage && /* @__PURE__ */ _n.createElement("span", {
    className: "rounded-md text-error"
  }, errorMessage))));
}
var MultiSelect_default = MultiSelect;

// views/pages/admin/AddPost.jsx
var AddPost = () => {
  var _a;
  const [{ categories }, dispatch] = useStore_default();
  const router = {};
  const [state, setState] = y2({
    postData: {
      slug: "asd",
      title: "asd",
      summary: "asd",
      markdown: "sad",
      categories: [],
      isPortfolio: false,
      tags: []
    },
    errorMessage: "",
    httpReqProcess: false
  });
  const { postData, errorMessage, httpReqProcess } = state;
  function handleChange(e3) {
    let updatePostData = { ...postData };
    if (e3.target.name === "isPortfolio") {
      updatePostData[e3.target.name] = e3.target.checked;
    } else if (e3.target.name === "tags") {
      updatePostData[e3.target.name] = e3.target.values;
    } else {
      updatePostData[e3.target.name] = e3.target.value;
    }
    setState({ ...state, postData: updatePostData });
  }
  async function handleSubmit(e3) {
    var _a2, _b;
    e3.preventDefault();
    let errorMessage2 = "";
    let isComplete = true;
    for (let postDataKey in postData) {
      if (postDataKey !== "isPortfolio") {
        if (!postData[postDataKey]) {
          isComplete = false;
          errorMessage2 = "Please give " + postDataKey;
        }
      }
    }
    if (!isComplete) {
      setState({
        ...state,
        errorMessage: errorMessage2
      });
      return;
    }
    setState({
      ...state,
      errorMessage: "",
      httpReqProcess: true
    });
    const catNames = postData.categories ? postData.categories.map((c5) => c5.name) : [];
    if ((_a2 = router == null ? void 0 : router.query) == null ? void 0 : _a2.id) {
      apis_default.patch("/api/post", { id: (_b = router == null ? void 0 : router.query) == null ? void 0 : _b.id, ...postData }).then(({ status, data }) => {
        console.log(status, data);
      }).catch((ex) => {
      });
    } else {
      apis_default.post("/api/post", { ...postData, categories: catNames }).then(({ status, data }) => {
        console.log(status, data);
      }).catch((ex) => {
      });
    }
  }
  return /* @__PURE__ */ _n.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ _n.createElement("div", {
    className: "card"
  }, /* @__PURE__ */ _n.createElement("form", {
    onSubmit: handleSubmit
  }, /* @__PURE__ */ _n.createElement("label", {
    htmlFor: "",
    className: "label"
  }, "Post Slug"), /* @__PURE__ */ _n.createElement("input", {
    type: "text",
    name: "slug",
    className: "input",
    value: postData.slug,
    placeholder: "post slug",
    onChange: handleChange
  }), /* @__PURE__ */ _n.createElement("br", null), /* @__PURE__ */ _n.createElement("br", null), /* @__PURE__ */ _n.createElement("label", {
    htmlFor: "",
    className: "label"
  }, "Post Title"), /* @__PURE__ */ _n.createElement("input", {
    type: "text",
    name: "title",
    className: "input",
    value: postData.title,
    placeholder: "Enter Post title",
    onChange: handleChange
  }), /* @__PURE__ */ _n.createElement("br", null), /* @__PURE__ */ _n.createElement("br", null), /* @__PURE__ */ _n.createElement("label", {
    htmlFor: "",
    className: "label "
  }, "Category"), /* @__PURE__ */ _n.createElement(MultiSelect_default, {
    value: postData.categories,
    name: "categories",
    onChange: handleChange,
    options: (onClick) => categories && categories.map((cat) => cat.subCategories ? cat.subCategories.map((sub) => /* @__PURE__ */ _n.createElement("li", {
      onClick: () => onClick(sub)
    }, sub.name)) : /* @__PURE__ */ _n.createElement("li", {
      onClick: () => onClick(cat)
    }, cat.name))
  }), /* @__PURE__ */ _n.createElement("br", null), /* @__PURE__ */ _n.createElement("br", null), /* @__PURE__ */ _n.createElement("div", {
    className: "flex items-center gap-x-2"
  }, /* @__PURE__ */ _n.createElement("input", {
    type: "checkbox",
    name: "isPortfolio",
    className: "",
    id: "isPortfolio",
    checked: postData.isPortfolio,
    onChange: handleChange
  }), /* @__PURE__ */ _n.createElement("label", {
    htmlFor: "isPortfolio",
    className: "label "
  }, "Is Show on Portfolio ")), /* @__PURE__ */ _n.createElement("br", null), /* @__PURE__ */ _n.createElement("br", null), /* @__PURE__ */ _n.createElement("br", null), /* @__PURE__ */ _n.createElement("br", null), /* @__PURE__ */ _n.createElement("label", {
    htmlFor: "",
    className: "label "
  }, "Content"), /* @__PURE__ */ _n.createElement("textarea", {
    name: "markdown",
    className: "input ",
    value: postData.markdown,
    placeholder: "Enter Post content",
    onChange: handleChange
  }), /* @__PURE__ */ _n.createElement("button", {
    className: `btn ${httpReqProcess ? "btn-disable" : ""} `,
    type: "submit"
  }, ((_a = router == null ? void 0 : router.query) == null ? void 0 : _a.id) ? "Update Post" : "Add Post"))));
};
var AddPost_default = AddPost;

// views/app.jsx
function App() {
  const [count, setCount] = y2(0);
  const [state, dispatch] = useStore_default();
  s2(() => {
    fetchCurrentAuth(dispatch);
  }, []);
  return /* @__PURE__ */ _n.createElement("div", null, /* @__PURE__ */ _n.createElement(Navigation_default, null), /* @__PURE__ */ _n.createElement(D, null, /* @__PURE__ */ _n.createElement(HomePage_default, {
    path: "/"
  }), /* @__PURE__ */ _n.createElement(AboutPage_default, {
    path: "/about"
  }), /* @__PURE__ */ _n.createElement(Login_default, {
    path: "/login"
  }), /* @__PURE__ */ _n.createElement(AddPost_default, {
    path: "/add-post"
  })));
}

// views/store/AppProvider.jsx
{
}
var initialState = {
  filteredPosts: [],
  searchText: "",
  searchPosts: null,
  filterBy: "All",
  portfolioCachePosts: null,
  isShowBackdrop: false,
  post: null,
  categories: null,
  posts: null,
  postDetails: null,
  auth: null,
  allPosts: [],
  projects: []
};
function reducer(state, action) {
  switch (action.type) {
    case types_default.SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      };
    case types_default.FETCH_ALL_POSTS:
      return {
        ...state,
        posts: action.payload
      };
    case types_default.SET_ADMIN:
      return {
        ...state,
        auth: action.payload
      };
    default:
      return state;
  }
}
var AppProvider = (props) => {
  const [contextState, contextDispatch] = h2(reducer, initialState);
  return /* @__PURE__ */ _n.createElement(AppContext_default.Provider, {
    value: { state: contextState, dispatch: contextDispatch }
  }, props.children);
};
var AppProvider_default = AppProvider;

// views/main.jsx
P(/* @__PURE__ */ _n.createElement(AppProvider_default, null, /* @__PURE__ */ _n.createElement(App, null)), document.getElementById("app"));
//# sourceMappingURL=main.js.map
