var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
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
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// wrangler-modules-watch:wrangler:modules-watch
var init_wrangler_modules_watch = __esm({
  "wrangler-modules-watch:wrangler:modules-watch"() {
    init_modules_watch_stub();
  }
});

// node_modules/wrangler/templates/modules-watch-stub.js
var init_modules_watch_stub = __esm({
  "node_modules/wrangler/templates/modules-watch-stub.js"() {
    init_wrangler_modules_watch();
  }
});

// node_modules/@prisma/client/runtime/edge.js
var require_edge = __commonJS({
  "node_modules/@prisma/client/runtime/edge.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    var Pa = Object.create;
    var lr = Object.defineProperty;
    var va = Object.getOwnPropertyDescriptor;
    var Ta = Object.getOwnPropertyNames;
    var Ca = Object.getPrototypeOf;
    var Aa = Object.prototype.hasOwnProperty;
    var me = /* @__PURE__ */ __name((e, t) => () => (e && (t = e(e = 0)), t), "me");
    var Re = /* @__PURE__ */ __name((e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), "Re");
    var Pt = /* @__PURE__ */ __name((e, t) => {
      for (var r in t) lr(e, r, { get: t[r], enumerable: true });
    }, "Pt");
    var li = /* @__PURE__ */ __name((e, t, r, n) => {
      if (t && typeof t == "object" || typeof t == "function") for (let i of Ta(t)) !Aa.call(e, i) && i !== r && lr(e, i, { get: /* @__PURE__ */ __name(() => t[i], "get"), enumerable: !(n = va(t, i)) || n.enumerable });
      return e;
    }, "li");
    var Le = /* @__PURE__ */ __name((e, t, r) => (r = e != null ? Pa(Ca(e)) : {}, li(t || !e || !e.__esModule ? lr(r, "default", { value: e, enumerable: true }) : r, e)), "Le");
    var Ra = /* @__PURE__ */ __name((e) => li(lr({}, "__esModule", { value: true }), e), "Ra");
    var y;
    var u = me(() => {
      "use strict";
      y = { nextTick: /* @__PURE__ */ __name((e, ...t) => {
        setTimeout(() => {
          e(...t);
        }, 0);
      }, "nextTick"), env: {}, version: "", cwd: /* @__PURE__ */ __name(() => "/", "cwd"), stderr: {}, argv: ["/bin/node"], pid: 1e4 };
    });
    var b2;
    var c = me(() => {
      "use strict";
      b2 = globalThis.performance ?? (() => {
        let e = Date.now();
        return { now: /* @__PURE__ */ __name(() => Date.now() - e, "now") };
      })();
    });
    var E;
    var p2 = me(() => {
      "use strict";
      E = /* @__PURE__ */ __name(() => {
      }, "E");
      E.prototype = E;
    });
    var m = me(() => {
      "use strict";
    });
    var Ri = Re((He) => {
      "use strict";
      d();
      u();
      c();
      p2();
      m();
      var di = /* @__PURE__ */ __name((e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), "di"), Sa = di((e) => {
        "use strict";
        e.byteLength = l2, e.toByteArray = g, e.fromByteArray = S2;
        var t = [], r = [], n = typeof Uint8Array < "u" ? Uint8Array : Array, i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        for (o = 0, s = i.length; o < s; ++o) t[o] = i[o], r[i.charCodeAt(o)] = o;
        var o, s;
        r[45] = 62, r[95] = 63;
        function a(C) {
          var R = C.length;
          if (R % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
          var D = C.indexOf("=");
          D === -1 && (D = R);
          var M = D === R ? 0 : 4 - D % 4;
          return [D, M];
        }
        __name(a, "a");
        function l2(C) {
          var R = a(C), D = R[0], M = R[1];
          return (D + M) * 3 / 4 - M;
        }
        __name(l2, "l");
        function f2(C, R, D) {
          return (R + D) * 3 / 4 - D;
        }
        __name(f2, "f");
        function g(C) {
          var R, D = a(C), M = D[0], U = D[1], k2 = new n(f2(C, M, U)), F2 = 0, ae = U > 0 ? M - 4 : M, G;
          for (G = 0; G < ae; G += 4) R = r[C.charCodeAt(G)] << 18 | r[C.charCodeAt(G + 1)] << 12 | r[C.charCodeAt(G + 2)] << 6 | r[C.charCodeAt(G + 3)], k2[F2++] = R >> 16 & 255, k2[F2++] = R >> 8 & 255, k2[F2++] = R & 255;
          return U === 2 && (R = r[C.charCodeAt(G)] << 2 | r[C.charCodeAt(G + 1)] >> 4, k2[F2++] = R & 255), U === 1 && (R = r[C.charCodeAt(G)] << 10 | r[C.charCodeAt(G + 1)] << 4 | r[C.charCodeAt(G + 2)] >> 2, k2[F2++] = R >> 8 & 255, k2[F2++] = R & 255), k2;
        }
        __name(g, "g");
        function h(C) {
          return t[C >> 18 & 63] + t[C >> 12 & 63] + t[C >> 6 & 63] + t[C & 63];
        }
        __name(h, "h");
        function v(C, R, D) {
          for (var M, U = [], k2 = R; k2 < D; k2 += 3) M = (C[k2] << 16 & 16711680) + (C[k2 + 1] << 8 & 65280) + (C[k2 + 2] & 255), U.push(h(M));
          return U.join("");
        }
        __name(v, "v");
        function S2(C) {
          for (var R, D = C.length, M = D % 3, U = [], k2 = 16383, F2 = 0, ae = D - M; F2 < ae; F2 += k2) U.push(v(C, F2, F2 + k2 > ae ? ae : F2 + k2));
          return M === 1 ? (R = C[D - 1], U.push(t[R >> 2] + t[R << 4 & 63] + "==")) : M === 2 && (R = (C[D - 2] << 8) + C[D - 1], U.push(t[R >> 10] + t[R >> 4 & 63] + t[R << 2 & 63] + "=")), U.join("");
        }
        __name(S2, "S");
      }), ka = di((e) => {
        e.read = function(t, r, n, i, o) {
          var s, a, l2 = o * 8 - i - 1, f2 = (1 << l2) - 1, g = f2 >> 1, h = -7, v = n ? o - 1 : 0, S2 = n ? -1 : 1, C = t[r + v];
          for (v += S2, s = C & (1 << -h) - 1, C >>= -h, h += l2; h > 0; s = s * 256 + t[r + v], v += S2, h -= 8) ;
          for (a = s & (1 << -h) - 1, s >>= -h, h += i; h > 0; a = a * 256 + t[r + v], v += S2, h -= 8) ;
          if (s === 0) s = 1 - g;
          else {
            if (s === f2) return a ? NaN : (C ? -1 : 1) * (1 / 0);
            a = a + Math.pow(2, i), s = s - g;
          }
          return (C ? -1 : 1) * a * Math.pow(2, s - i);
        }, e.write = function(t, r, n, i, o, s) {
          var a, l2, f2, g = s * 8 - o - 1, h = (1 << g) - 1, v = h >> 1, S2 = o === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, C = i ? 0 : s - 1, R = i ? 1 : -1, D = r < 0 || r === 0 && 1 / r < 0 ? 1 : 0;
          for (r = Math.abs(r), isNaN(r) || r === 1 / 0 ? (l2 = isNaN(r) ? 1 : 0, a = h) : (a = Math.floor(Math.log(r) / Math.LN2), r * (f2 = Math.pow(2, -a)) < 1 && (a--, f2 *= 2), a + v >= 1 ? r += S2 / f2 : r += S2 * Math.pow(2, 1 - v), r * f2 >= 2 && (a++, f2 /= 2), a + v >= h ? (l2 = 0, a = h) : a + v >= 1 ? (l2 = (r * f2 - 1) * Math.pow(2, o), a = a + v) : (l2 = r * Math.pow(2, v - 1) * Math.pow(2, o), a = 0)); o >= 8; t[n + C] = l2 & 255, C += R, l2 /= 256, o -= 8) ;
          for (a = a << o | l2, g += o; g > 0; t[n + C] = a & 255, C += R, a /= 256, g -= 8) ;
          t[n + C - R] |= D * 128;
        };
      }), cn = Sa(), We = ka(), ui = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
      He.Buffer = T2;
      He.SlowBuffer = Na;
      He.INSPECT_MAX_BYTES = 50;
      var ur = 2147483647;
      He.kMaxLength = ur;
      T2.TYPED_ARRAY_SUPPORT = Ia();
      !T2.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
      function Ia() {
        try {
          let e = new Uint8Array(1), t = { foo: /* @__PURE__ */ __name(function() {
            return 42;
          }, "foo") };
          return Object.setPrototypeOf(t, Uint8Array.prototype), Object.setPrototypeOf(e, t), e.foo() === 42;
        } catch {
          return false;
        }
      }
      __name(Ia, "Ia");
      Object.defineProperty(T2.prototype, "parent", { enumerable: true, get: /* @__PURE__ */ __name(function() {
        if (T2.isBuffer(this)) return this.buffer;
      }, "get") });
      Object.defineProperty(T2.prototype, "offset", { enumerable: true, get: /* @__PURE__ */ __name(function() {
        if (T2.isBuffer(this)) return this.byteOffset;
      }, "get") });
      function xe(e) {
        if (e > ur) throw new RangeError('The value "' + e + '" is invalid for option "size"');
        let t = new Uint8Array(e);
        return Object.setPrototypeOf(t, T2.prototype), t;
      }
      __name(xe, "xe");
      function T2(e, t, r) {
        if (typeof e == "number") {
          if (typeof t == "string") throw new TypeError('The "string" argument must be of type string. Received type number');
          return dn(e);
        }
        return fi(e, t, r);
      }
      __name(T2, "T");
      T2.poolSize = 8192;
      function fi(e, t, r) {
        if (typeof e == "string") return Da(e, t);
        if (ArrayBuffer.isView(e)) return Ma(e);
        if (e == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
        if (de(e, ArrayBuffer) || e && de(e.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (de(e, SharedArrayBuffer) || e && de(e.buffer, SharedArrayBuffer))) return hi(e, t, r);
        if (typeof e == "number") throw new TypeError('The "value" argument must not be of type number. Received type number');
        let n = e.valueOf && e.valueOf();
        if (n != null && n !== e) return T2.from(n, t, r);
        let i = _a(e);
        if (i) return i;
        if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof e[Symbol.toPrimitive] == "function") return T2.from(e[Symbol.toPrimitive]("string"), t, r);
        throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
      }
      __name(fi, "fi");
      T2.from = function(e, t, r) {
        return fi(e, t, r);
      };
      Object.setPrototypeOf(T2.prototype, Uint8Array.prototype);
      Object.setPrototypeOf(T2, Uint8Array);
      function gi(e) {
        if (typeof e != "number") throw new TypeError('"size" argument must be of type number');
        if (e < 0) throw new RangeError('The value "' + e + '" is invalid for option "size"');
      }
      __name(gi, "gi");
      function Oa(e, t, r) {
        return gi(e), e <= 0 ? xe(e) : t !== void 0 ? typeof r == "string" ? xe(e).fill(t, r) : xe(e).fill(t) : xe(e);
      }
      __name(Oa, "Oa");
      T2.alloc = function(e, t, r) {
        return Oa(e, t, r);
      };
      function dn(e) {
        return gi(e), xe(e < 0 ? 0 : fn(e) | 0);
      }
      __name(dn, "dn");
      T2.allocUnsafe = function(e) {
        return dn(e);
      };
      T2.allocUnsafeSlow = function(e) {
        return dn(e);
      };
      function Da(e, t) {
        if ((typeof t != "string" || t === "") && (t = "utf8"), !T2.isEncoding(t)) throw new TypeError("Unknown encoding: " + t);
        let r = yi(e, t) | 0, n = xe(r), i = n.write(e, t);
        return i !== r && (n = n.slice(0, i)), n;
      }
      __name(Da, "Da");
      function pn(e) {
        let t = e.length < 0 ? 0 : fn(e.length) | 0, r = xe(t);
        for (let n = 0; n < t; n += 1) r[n] = e[n] & 255;
        return r;
      }
      __name(pn, "pn");
      function Ma(e) {
        if (de(e, Uint8Array)) {
          let t = new Uint8Array(e);
          return hi(t.buffer, t.byteOffset, t.byteLength);
        }
        return pn(e);
      }
      __name(Ma, "Ma");
      function hi(e, t, r) {
        if (t < 0 || e.byteLength < t) throw new RangeError('"offset" is outside of buffer bounds');
        if (e.byteLength < t + (r || 0)) throw new RangeError('"length" is outside of buffer bounds');
        let n;
        return t === void 0 && r === void 0 ? n = new Uint8Array(e) : r === void 0 ? n = new Uint8Array(e, t) : n = new Uint8Array(e, t, r), Object.setPrototypeOf(n, T2.prototype), n;
      }
      __name(hi, "hi");
      function _a(e) {
        if (T2.isBuffer(e)) {
          let t = fn(e.length) | 0, r = xe(t);
          return r.length === 0 || e.copy(r, 0, 0, t), r;
        }
        if (e.length !== void 0) return typeof e.length != "number" || hn(e.length) ? xe(0) : pn(e);
        if (e.type === "Buffer" && Array.isArray(e.data)) return pn(e.data);
      }
      __name(_a, "_a");
      function fn(e) {
        if (e >= ur) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + ur.toString(16) + " bytes");
        return e | 0;
      }
      __name(fn, "fn");
      function Na(e) {
        return +e != e && (e = 0), T2.alloc(+e);
      }
      __name(Na, "Na");
      T2.isBuffer = function(e) {
        return e != null && e._isBuffer === true && e !== T2.prototype;
      };
      T2.compare = function(e, t) {
        if (de(e, Uint8Array) && (e = T2.from(e, e.offset, e.byteLength)), de(t, Uint8Array) && (t = T2.from(t, t.offset, t.byteLength)), !T2.isBuffer(e) || !T2.isBuffer(t)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
        if (e === t) return 0;
        let r = e.length, n = t.length;
        for (let i = 0, o = Math.min(r, n); i < o; ++i) if (e[i] !== t[i]) {
          r = e[i], n = t[i];
          break;
        }
        return r < n ? -1 : n < r ? 1 : 0;
      };
      T2.isEncoding = function(e) {
        switch (String(e).toLowerCase()) {
          case "hex":
          case "utf8":
          case "utf-8":
          case "ascii":
          case "latin1":
          case "binary":
          case "base64":
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return true;
          default:
            return false;
        }
      };
      T2.concat = function(e, t) {
        if (!Array.isArray(e)) throw new TypeError('"list" argument must be an Array of Buffers');
        if (e.length === 0) return T2.alloc(0);
        let r;
        if (t === void 0) for (t = 0, r = 0; r < e.length; ++r) t += e[r].length;
        let n = T2.allocUnsafe(t), i = 0;
        for (r = 0; r < e.length; ++r) {
          let o = e[r];
          if (de(o, Uint8Array)) i + o.length > n.length ? (T2.isBuffer(o) || (o = T2.from(o)), o.copy(n, i)) : Uint8Array.prototype.set.call(n, o, i);
          else if (T2.isBuffer(o)) o.copy(n, i);
          else throw new TypeError('"list" argument must be an Array of Buffers');
          i += o.length;
        }
        return n;
      };
      function yi(e, t) {
        if (T2.isBuffer(e)) return e.length;
        if (ArrayBuffer.isView(e) || de(e, ArrayBuffer)) return e.byteLength;
        if (typeof e != "string") throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e);
        let r = e.length, n = arguments.length > 2 && arguments[2] === true;
        if (!n && r === 0) return 0;
        let i = false;
        for (; ; ) switch (t) {
          case "ascii":
          case "latin1":
          case "binary":
            return r;
          case "utf8":
          case "utf-8":
            return mn(e).length;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return r * 2;
          case "hex":
            return r >>> 1;
          case "base64":
            return Ai(e).length;
          default:
            if (i) return n ? -1 : mn(e).length;
            t = ("" + t).toLowerCase(), i = true;
        }
      }
      __name(yi, "yi");
      T2.byteLength = yi;
      function Fa(e, t, r) {
        let n = false;
        if ((t === void 0 || t < 0) && (t = 0), t > this.length || ((r === void 0 || r > this.length) && (r = this.length), r <= 0) || (r >>>= 0, t >>>= 0, r <= t)) return "";
        for (e || (e = "utf8"); ; ) switch (e) {
          case "hex":
            return Ja(this, t, r);
          case "utf8":
          case "utf-8":
            return Ei(this, t, r);
          case "ascii":
            return Ga(this, t, r);
          case "latin1":
          case "binary":
            return Qa(this, t, r);
          case "base64":
            return Va(this, t, r);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return Wa(this, t, r);
          default:
            if (n) throw new TypeError("Unknown encoding: " + e);
            e = (e + "").toLowerCase(), n = true;
        }
      }
      __name(Fa, "Fa");
      T2.prototype._isBuffer = true;
      function Ue(e, t, r) {
        let n = e[t];
        e[t] = e[r], e[r] = n;
      }
      __name(Ue, "Ue");
      T2.prototype.swap16 = function() {
        let e = this.length;
        if (e % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
        for (let t = 0; t < e; t += 2) Ue(this, t, t + 1);
        return this;
      };
      T2.prototype.swap32 = function() {
        let e = this.length;
        if (e % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
        for (let t = 0; t < e; t += 4) Ue(this, t, t + 3), Ue(this, t + 1, t + 2);
        return this;
      };
      T2.prototype.swap64 = function() {
        let e = this.length;
        if (e % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
        for (let t = 0; t < e; t += 8) Ue(this, t, t + 7), Ue(this, t + 1, t + 6), Ue(this, t + 2, t + 5), Ue(this, t + 3, t + 4);
        return this;
      };
      T2.prototype.toString = function() {
        let e = this.length;
        return e === 0 ? "" : arguments.length === 0 ? Ei(this, 0, e) : Fa.apply(this, arguments);
      };
      T2.prototype.toLocaleString = T2.prototype.toString;
      T2.prototype.equals = function(e) {
        if (!T2.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
        return this === e ? true : T2.compare(this, e) === 0;
      };
      T2.prototype.inspect = function() {
        let e = "", t = He.INSPECT_MAX_BYTES;
        return e = this.toString("hex", 0, t).replace(/(.{2})/g, "$1 ").trim(), this.length > t && (e += " ... "), "<Buffer " + e + ">";
      };
      ui && (T2.prototype[ui] = T2.prototype.inspect);
      T2.prototype.compare = function(e, t, r, n, i) {
        if (de(e, Uint8Array) && (e = T2.from(e, e.offset, e.byteLength)), !T2.isBuffer(e)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e);
        if (t === void 0 && (t = 0), r === void 0 && (r = e ? e.length : 0), n === void 0 && (n = 0), i === void 0 && (i = this.length), t < 0 || r > e.length || n < 0 || i > this.length) throw new RangeError("out of range index");
        if (n >= i && t >= r) return 0;
        if (n >= i) return -1;
        if (t >= r) return 1;
        if (t >>>= 0, r >>>= 0, n >>>= 0, i >>>= 0, this === e) return 0;
        let o = i - n, s = r - t, a = Math.min(o, s), l2 = this.slice(n, i), f2 = e.slice(t, r);
        for (let g = 0; g < a; ++g) if (l2[g] !== f2[g]) {
          o = l2[g], s = f2[g];
          break;
        }
        return o < s ? -1 : s < o ? 1 : 0;
      };
      function wi(e, t, r, n, i) {
        if (e.length === 0) return -1;
        if (typeof r == "string" ? (n = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), r = +r, hn(r) && (r = i ? 0 : e.length - 1), r < 0 && (r = e.length + r), r >= e.length) {
          if (i) return -1;
          r = e.length - 1;
        } else if (r < 0) if (i) r = 0;
        else return -1;
        if (typeof t == "string" && (t = T2.from(t, n)), T2.isBuffer(t)) return t.length === 0 ? -1 : ci(e, t, r, n, i);
        if (typeof t == "number") return t = t & 255, typeof Uint8Array.prototype.indexOf == "function" ? i ? Uint8Array.prototype.indexOf.call(e, t, r) : Uint8Array.prototype.lastIndexOf.call(e, t, r) : ci(e, [t], r, n, i);
        throw new TypeError("val must be string, number or Buffer");
      }
      __name(wi, "wi");
      function ci(e, t, r, n, i) {
        let o = 1, s = e.length, a = t.length;
        if (n !== void 0 && (n = String(n).toLowerCase(), n === "ucs2" || n === "ucs-2" || n === "utf16le" || n === "utf-16le")) {
          if (e.length < 2 || t.length < 2) return -1;
          o = 2, s /= 2, a /= 2, r /= 2;
        }
        function l2(g, h) {
          return o === 1 ? g[h] : g.readUInt16BE(h * o);
        }
        __name(l2, "l");
        let f2;
        if (i) {
          let g = -1;
          for (f2 = r; f2 < s; f2++) if (l2(e, f2) === l2(t, g === -1 ? 0 : f2 - g)) {
            if (g === -1 && (g = f2), f2 - g + 1 === a) return g * o;
          } else g !== -1 && (f2 -= f2 - g), g = -1;
        } else for (r + a > s && (r = s - a), f2 = r; f2 >= 0; f2--) {
          let g = true;
          for (let h = 0; h < a; h++) if (l2(e, f2 + h) !== l2(t, h)) {
            g = false;
            break;
          }
          if (g) return f2;
        }
        return -1;
      }
      __name(ci, "ci");
      T2.prototype.includes = function(e, t, r) {
        return this.indexOf(e, t, r) !== -1;
      };
      T2.prototype.indexOf = function(e, t, r) {
        return wi(this, e, t, r, true);
      };
      T2.prototype.lastIndexOf = function(e, t, r) {
        return wi(this, e, t, r, false);
      };
      function La(e, t, r, n) {
        r = Number(r) || 0;
        let i = e.length - r;
        n ? (n = Number(n), n > i && (n = i)) : n = i;
        let o = t.length;
        n > o / 2 && (n = o / 2);
        let s;
        for (s = 0; s < n; ++s) {
          let a = parseInt(t.substr(s * 2, 2), 16);
          if (hn(a)) return s;
          e[r + s] = a;
        }
        return s;
      }
      __name(La, "La");
      function Ua(e, t, r, n) {
        return cr(mn(t, e.length - r), e, r, n);
      }
      __name(Ua, "Ua");
      function Ba(e, t, r, n) {
        return cr(Ya(t), e, r, n);
      }
      __name(Ba, "Ba");
      function qa(e, t, r, n) {
        return cr(Ai(t), e, r, n);
      }
      __name(qa, "qa");
      function $a(e, t, r, n) {
        return cr(Za(t, e.length - r), e, r, n);
      }
      __name($a, "$a");
      T2.prototype.write = function(e, t, r, n) {
        if (t === void 0) n = "utf8", r = this.length, t = 0;
        else if (r === void 0 && typeof t == "string") n = t, r = this.length, t = 0;
        else if (isFinite(t)) t = t >>> 0, isFinite(r) ? (r = r >>> 0, n === void 0 && (n = "utf8")) : (n = r, r = void 0);
        else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
        let i = this.length - t;
        if ((r === void 0 || r > i) && (r = i), e.length > 0 && (r < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
        n || (n = "utf8");
        let o = false;
        for (; ; ) switch (n) {
          case "hex":
            return La(this, e, t, r);
          case "utf8":
          case "utf-8":
            return Ua(this, e, t, r);
          case "ascii":
          case "latin1":
          case "binary":
            return Ba(this, e, t, r);
          case "base64":
            return qa(this, e, t, r);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return $a(this, e, t, r);
          default:
            if (o) throw new TypeError("Unknown encoding: " + n);
            n = ("" + n).toLowerCase(), o = true;
        }
      };
      T2.prototype.toJSON = function() {
        return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
      };
      function Va(e, t, r) {
        return t === 0 && r === e.length ? cn.fromByteArray(e) : cn.fromByteArray(e.slice(t, r));
      }
      __name(Va, "Va");
      function Ei(e, t, r) {
        r = Math.min(e.length, r);
        let n = [], i = t;
        for (; i < r; ) {
          let o = e[i], s = null, a = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1;
          if (i + a <= r) {
            let l2, f2, g, h;
            switch (a) {
              case 1:
                o < 128 && (s = o);
                break;
              case 2:
                l2 = e[i + 1], (l2 & 192) === 128 && (h = (o & 31) << 6 | l2 & 63, h > 127 && (s = h));
                break;
              case 3:
                l2 = e[i + 1], f2 = e[i + 2], (l2 & 192) === 128 && (f2 & 192) === 128 && (h = (o & 15) << 12 | (l2 & 63) << 6 | f2 & 63, h > 2047 && (h < 55296 || h > 57343) && (s = h));
                break;
              case 4:
                l2 = e[i + 1], f2 = e[i + 2], g = e[i + 3], (l2 & 192) === 128 && (f2 & 192) === 128 && (g & 192) === 128 && (h = (o & 15) << 18 | (l2 & 63) << 12 | (f2 & 63) << 6 | g & 63, h > 65535 && h < 1114112 && (s = h));
            }
          }
          s === null ? (s = 65533, a = 1) : s > 65535 && (s -= 65536, n.push(s >>> 10 & 1023 | 55296), s = 56320 | s & 1023), n.push(s), i += a;
        }
        return ja(n);
      }
      __name(Ei, "Ei");
      var pi = 4096;
      function ja(e) {
        let t = e.length;
        if (t <= pi) return String.fromCharCode.apply(String, e);
        let r = "", n = 0;
        for (; n < t; ) r += String.fromCharCode.apply(String, e.slice(n, n += pi));
        return r;
      }
      __name(ja, "ja");
      function Ga(e, t, r) {
        let n = "";
        r = Math.min(e.length, r);
        for (let i = t; i < r; ++i) n += String.fromCharCode(e[i] & 127);
        return n;
      }
      __name(Ga, "Ga");
      function Qa(e, t, r) {
        let n = "";
        r = Math.min(e.length, r);
        for (let i = t; i < r; ++i) n += String.fromCharCode(e[i]);
        return n;
      }
      __name(Qa, "Qa");
      function Ja(e, t, r) {
        let n = e.length;
        (!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n);
        let i = "";
        for (let o = t; o < r; ++o) i += Xa[e[o]];
        return i;
      }
      __name(Ja, "Ja");
      function Wa(e, t, r) {
        let n = e.slice(t, r), i = "";
        for (let o = 0; o < n.length - 1; o += 2) i += String.fromCharCode(n[o] + n[o + 1] * 256);
        return i;
      }
      __name(Wa, "Wa");
      T2.prototype.slice = function(e, t) {
        let r = this.length;
        e = ~~e, t = t === void 0 ? r : ~~t, e < 0 ? (e += r, e < 0 && (e = 0)) : e > r && (e = r), t < 0 ? (t += r, t < 0 && (t = 0)) : t > r && (t = r), t < e && (t = e);
        let n = this.subarray(e, t);
        return Object.setPrototypeOf(n, T2.prototype), n;
      };
      function W(e, t, r) {
        if (e % 1 !== 0 || e < 0) throw new RangeError("offset is not uint");
        if (e + t > r) throw new RangeError("Trying to access beyond buffer length");
      }
      __name(W, "W");
      T2.prototype.readUintLE = T2.prototype.readUIntLE = function(e, t, r) {
        e = e >>> 0, t = t >>> 0, r || W(e, t, this.length);
        let n = this[e], i = 1, o = 0;
        for (; ++o < t && (i *= 256); ) n += this[e + o] * i;
        return n;
      };
      T2.prototype.readUintBE = T2.prototype.readUIntBE = function(e, t, r) {
        e = e >>> 0, t = t >>> 0, r || W(e, t, this.length);
        let n = this[e + --t], i = 1;
        for (; t > 0 && (i *= 256); ) n += this[e + --t] * i;
        return n;
      };
      T2.prototype.readUint8 = T2.prototype.readUInt8 = function(e, t) {
        return e = e >>> 0, t || W(e, 1, this.length), this[e];
      };
      T2.prototype.readUint16LE = T2.prototype.readUInt16LE = function(e, t) {
        return e = e >>> 0, t || W(e, 2, this.length), this[e] | this[e + 1] << 8;
      };
      T2.prototype.readUint16BE = T2.prototype.readUInt16BE = function(e, t) {
        return e = e >>> 0, t || W(e, 2, this.length), this[e] << 8 | this[e + 1];
      };
      T2.prototype.readUint32LE = T2.prototype.readUInt32LE = function(e, t) {
        return e = e >>> 0, t || W(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + this[e + 3] * 16777216;
      };
      T2.prototype.readUint32BE = T2.prototype.readUInt32BE = function(e, t) {
        return e = e >>> 0, t || W(e, 4, this.length), this[e] * 16777216 + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
      };
      T2.prototype.readBigUInt64LE = Se(function(e) {
        e = e >>> 0, Ke(e, "offset");
        let t = this[e], r = this[e + 7];
        (t === void 0 || r === void 0) && vt(e, this.length - 8);
        let n = t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24, i = this[++e] + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + r * 2 ** 24;
        return BigInt(n) + (BigInt(i) << BigInt(32));
      });
      T2.prototype.readBigUInt64BE = Se(function(e) {
        e = e >>> 0, Ke(e, "offset");
        let t = this[e], r = this[e + 7];
        (t === void 0 || r === void 0) && vt(e, this.length - 8);
        let n = t * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e], i = this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + r;
        return (BigInt(n) << BigInt(32)) + BigInt(i);
      });
      T2.prototype.readIntLE = function(e, t, r) {
        e = e >>> 0, t = t >>> 0, r || W(e, t, this.length);
        let n = this[e], i = 1, o = 0;
        for (; ++o < t && (i *= 256); ) n += this[e + o] * i;
        return i *= 128, n >= i && (n -= Math.pow(2, 8 * t)), n;
      };
      T2.prototype.readIntBE = function(e, t, r) {
        e = e >>> 0, t = t >>> 0, r || W(e, t, this.length);
        let n = t, i = 1, o = this[e + --n];
        for (; n > 0 && (i *= 256); ) o += this[e + --n] * i;
        return i *= 128, o >= i && (o -= Math.pow(2, 8 * t)), o;
      };
      T2.prototype.readInt8 = function(e, t) {
        return e = e >>> 0, t || W(e, 1, this.length), this[e] & 128 ? (255 - this[e] + 1) * -1 : this[e];
      };
      T2.prototype.readInt16LE = function(e, t) {
        e = e >>> 0, t || W(e, 2, this.length);
        let r = this[e] | this[e + 1] << 8;
        return r & 32768 ? r | 4294901760 : r;
      };
      T2.prototype.readInt16BE = function(e, t) {
        e = e >>> 0, t || W(e, 2, this.length);
        let r = this[e + 1] | this[e] << 8;
        return r & 32768 ? r | 4294901760 : r;
      };
      T2.prototype.readInt32LE = function(e, t) {
        return e = e >>> 0, t || W(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
      };
      T2.prototype.readInt32BE = function(e, t) {
        return e = e >>> 0, t || W(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
      };
      T2.prototype.readBigInt64LE = Se(function(e) {
        e = e >>> 0, Ke(e, "offset");
        let t = this[e], r = this[e + 7];
        (t === void 0 || r === void 0) && vt(e, this.length - 8);
        let n = this[e + 4] + this[e + 5] * 2 ** 8 + this[e + 6] * 2 ** 16 + (r << 24);
        return (BigInt(n) << BigInt(32)) + BigInt(t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24);
      });
      T2.prototype.readBigInt64BE = Se(function(e) {
        e = e >>> 0, Ke(e, "offset");
        let t = this[e], r = this[e + 7];
        (t === void 0 || r === void 0) && vt(e, this.length - 8);
        let n = (t << 24) + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e];
        return (BigInt(n) << BigInt(32)) + BigInt(this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + r);
      });
      T2.prototype.readFloatLE = function(e, t) {
        return e = e >>> 0, t || W(e, 4, this.length), We.read(this, e, true, 23, 4);
      };
      T2.prototype.readFloatBE = function(e, t) {
        return e = e >>> 0, t || W(e, 4, this.length), We.read(this, e, false, 23, 4);
      };
      T2.prototype.readDoubleLE = function(e, t) {
        return e = e >>> 0, t || W(e, 8, this.length), We.read(this, e, true, 52, 8);
      };
      T2.prototype.readDoubleBE = function(e, t) {
        return e = e >>> 0, t || W(e, 8, this.length), We.read(this, e, false, 52, 8);
      };
      function te(e, t, r, n, i, o) {
        if (!T2.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
        if (t > i || t < o) throw new RangeError('"value" argument is out of bounds');
        if (r + n > e.length) throw new RangeError("Index out of range");
      }
      __name(te, "te");
      T2.prototype.writeUintLE = T2.prototype.writeUIntLE = function(e, t, r, n) {
        if (e = +e, t = t >>> 0, r = r >>> 0, !n) {
          let s = Math.pow(2, 8 * r) - 1;
          te(this, e, t, r, s, 0);
        }
        let i = 1, o = 0;
        for (this[t] = e & 255; ++o < r && (i *= 256); ) this[t + o] = e / i & 255;
        return t + r;
      };
      T2.prototype.writeUintBE = T2.prototype.writeUIntBE = function(e, t, r, n) {
        if (e = +e, t = t >>> 0, r = r >>> 0, !n) {
          let s = Math.pow(2, 8 * r) - 1;
          te(this, e, t, r, s, 0);
        }
        let i = r - 1, o = 1;
        for (this[t + i] = e & 255; --i >= 0 && (o *= 256); ) this[t + i] = e / o & 255;
        return t + r;
      };
      T2.prototype.writeUint8 = T2.prototype.writeUInt8 = function(e, t, r) {
        return e = +e, t = t >>> 0, r || te(this, e, t, 1, 255, 0), this[t] = e & 255, t + 1;
      };
      T2.prototype.writeUint16LE = T2.prototype.writeUInt16LE = function(e, t, r) {
        return e = +e, t = t >>> 0, r || te(this, e, t, 2, 65535, 0), this[t] = e & 255, this[t + 1] = e >>> 8, t + 2;
      };
      T2.prototype.writeUint16BE = T2.prototype.writeUInt16BE = function(e, t, r) {
        return e = +e, t = t >>> 0, r || te(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = e & 255, t + 2;
      };
      T2.prototype.writeUint32LE = T2.prototype.writeUInt32LE = function(e, t, r) {
        return e = +e, t = t >>> 0, r || te(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = e & 255, t + 4;
      };
      T2.prototype.writeUint32BE = T2.prototype.writeUInt32BE = function(e, t, r) {
        return e = +e, t = t >>> 0, r || te(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255, t + 4;
      };
      function bi(e, t, r, n, i) {
        Ci(t, n, i, e, r, 7);
        let o = Number(t & BigInt(4294967295));
        e[r++] = o, o = o >> 8, e[r++] = o, o = o >> 8, e[r++] = o, o = o >> 8, e[r++] = o;
        let s = Number(t >> BigInt(32) & BigInt(4294967295));
        return e[r++] = s, s = s >> 8, e[r++] = s, s = s >> 8, e[r++] = s, s = s >> 8, e[r++] = s, r;
      }
      __name(bi, "bi");
      function xi(e, t, r, n, i) {
        Ci(t, n, i, e, r, 7);
        let o = Number(t & BigInt(4294967295));
        e[r + 7] = o, o = o >> 8, e[r + 6] = o, o = o >> 8, e[r + 5] = o, o = o >> 8, e[r + 4] = o;
        let s = Number(t >> BigInt(32) & BigInt(4294967295));
        return e[r + 3] = s, s = s >> 8, e[r + 2] = s, s = s >> 8, e[r + 1] = s, s = s >> 8, e[r] = s, r + 8;
      }
      __name(xi, "xi");
      T2.prototype.writeBigUInt64LE = Se(function(e, t = 0) {
        return bi(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
      });
      T2.prototype.writeBigUInt64BE = Se(function(e, t = 0) {
        return xi(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
      });
      T2.prototype.writeIntLE = function(e, t, r, n) {
        if (e = +e, t = t >>> 0, !n) {
          let a = Math.pow(2, 8 * r - 1);
          te(this, e, t, r, a - 1, -a);
        }
        let i = 0, o = 1, s = 0;
        for (this[t] = e & 255; ++i < r && (o *= 256); ) e < 0 && s === 0 && this[t + i - 1] !== 0 && (s = 1), this[t + i] = (e / o >> 0) - s & 255;
        return t + r;
      };
      T2.prototype.writeIntBE = function(e, t, r, n) {
        if (e = +e, t = t >>> 0, !n) {
          let a = Math.pow(2, 8 * r - 1);
          te(this, e, t, r, a - 1, -a);
        }
        let i = r - 1, o = 1, s = 0;
        for (this[t + i] = e & 255; --i >= 0 && (o *= 256); ) e < 0 && s === 0 && this[t + i + 1] !== 0 && (s = 1), this[t + i] = (e / o >> 0) - s & 255;
        return t + r;
      };
      T2.prototype.writeInt8 = function(e, t, r) {
        return e = +e, t = t >>> 0, r || te(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = e & 255, t + 1;
      };
      T2.prototype.writeInt16LE = function(e, t, r) {
        return e = +e, t = t >>> 0, r || te(this, e, t, 2, 32767, -32768), this[t] = e & 255, this[t + 1] = e >>> 8, t + 2;
      };
      T2.prototype.writeInt16BE = function(e, t, r) {
        return e = +e, t = t >>> 0, r || te(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = e & 255, t + 2;
      };
      T2.prototype.writeInt32LE = function(e, t, r) {
        return e = +e, t = t >>> 0, r || te(this, e, t, 4, 2147483647, -2147483648), this[t] = e & 255, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4;
      };
      T2.prototype.writeInt32BE = function(e, t, r) {
        return e = +e, t = t >>> 0, r || te(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255, t + 4;
      };
      T2.prototype.writeBigInt64LE = Se(function(e, t = 0) {
        return bi(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
      });
      T2.prototype.writeBigInt64BE = Se(function(e, t = 0) {
        return xi(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
      });
      function Pi(e, t, r, n, i, o) {
        if (r + n > e.length) throw new RangeError("Index out of range");
        if (r < 0) throw new RangeError("Index out of range");
      }
      __name(Pi, "Pi");
      function vi(e, t, r, n, i) {
        return t = +t, r = r >>> 0, i || Pi(e, t, r, 4, 34028234663852886e22, -34028234663852886e22), We.write(e, t, r, n, 23, 4), r + 4;
      }
      __name(vi, "vi");
      T2.prototype.writeFloatLE = function(e, t, r) {
        return vi(this, e, t, true, r);
      };
      T2.prototype.writeFloatBE = function(e, t, r) {
        return vi(this, e, t, false, r);
      };
      function Ti(e, t, r, n, i) {
        return t = +t, r = r >>> 0, i || Pi(e, t, r, 8, 17976931348623157e292, -17976931348623157e292), We.write(e, t, r, n, 52, 8), r + 8;
      }
      __name(Ti, "Ti");
      T2.prototype.writeDoubleLE = function(e, t, r) {
        return Ti(this, e, t, true, r);
      };
      T2.prototype.writeDoubleBE = function(e, t, r) {
        return Ti(this, e, t, false, r);
      };
      T2.prototype.copy = function(e, t, r, n) {
        if (!T2.isBuffer(e)) throw new TypeError("argument should be a Buffer");
        if (r || (r = 0), !n && n !== 0 && (n = this.length), t >= e.length && (t = e.length), t || (t = 0), n > 0 && n < r && (n = r), n === r || e.length === 0 || this.length === 0) return 0;
        if (t < 0) throw new RangeError("targetStart out of bounds");
        if (r < 0 || r >= this.length) throw new RangeError("Index out of range");
        if (n < 0) throw new RangeError("sourceEnd out of bounds");
        n > this.length && (n = this.length), e.length - t < n - r && (n = e.length - t + r);
        let i = n - r;
        return this === e && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(t, r, n) : Uint8Array.prototype.set.call(e, this.subarray(r, n), t), i;
      };
      T2.prototype.fill = function(e, t, r, n) {
        if (typeof e == "string") {
          if (typeof t == "string" ? (n = t, t = 0, r = this.length) : typeof r == "string" && (n = r, r = this.length), n !== void 0 && typeof n != "string") throw new TypeError("encoding must be a string");
          if (typeof n == "string" && !T2.isEncoding(n)) throw new TypeError("Unknown encoding: " + n);
          if (e.length === 1) {
            let o = e.charCodeAt(0);
            (n === "utf8" && o < 128 || n === "latin1") && (e = o);
          }
        } else typeof e == "number" ? e = e & 255 : typeof e == "boolean" && (e = Number(e));
        if (t < 0 || this.length < t || this.length < r) throw new RangeError("Out of range index");
        if (r <= t) return this;
        t = t >>> 0, r = r === void 0 ? this.length : r >>> 0, e || (e = 0);
        let i;
        if (typeof e == "number") for (i = t; i < r; ++i) this[i] = e;
        else {
          let o = T2.isBuffer(e) ? e : T2.from(e, n), s = o.length;
          if (s === 0) throw new TypeError('The value "' + e + '" is invalid for argument "value"');
          for (i = 0; i < r - t; ++i) this[i + t] = o[i % s];
        }
        return this;
      };
      var Je = {};
      function gn(e, t, r) {
        Je[e] = class extends r {
          constructor() {
            super(), Object.defineProperty(this, "message", { value: t.apply(this, arguments), writable: true, configurable: true }), this.name = `${this.name} [${e}]`, this.stack, delete this.name;
          }
          get code() {
            return e;
          }
          set code(n) {
            Object.defineProperty(this, "code", { configurable: true, enumerable: true, value: n, writable: true });
          }
          toString() {
            return `${this.name} [${e}]: ${this.message}`;
          }
        };
      }
      __name(gn, "gn");
      gn("ERR_BUFFER_OUT_OF_BOUNDS", function(e) {
        return e ? `${e} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
      }, RangeError);
      gn("ERR_INVALID_ARG_TYPE", function(e, t) {
        return `The "${e}" argument must be of type number. Received type ${typeof t}`;
      }, TypeError);
      gn("ERR_OUT_OF_RANGE", function(e, t, r) {
        let n = `The value of "${e}" is out of range.`, i = r;
        return Number.isInteger(r) && Math.abs(r) > 2 ** 32 ? i = mi(String(r)) : typeof r == "bigint" && (i = String(r), (r > BigInt(2) ** BigInt(32) || r < -(BigInt(2) ** BigInt(32))) && (i = mi(i)), i += "n"), n += ` It must be ${t}. Received ${i}`, n;
      }, RangeError);
      function mi(e) {
        let t = "", r = e.length, n = e[0] === "-" ? 1 : 0;
        for (; r >= n + 4; r -= 3) t = `_${e.slice(r - 3, r)}${t}`;
        return `${e.slice(0, r)}${t}`;
      }
      __name(mi, "mi");
      function Ka(e, t, r) {
        Ke(t, "offset"), (e[t] === void 0 || e[t + r] === void 0) && vt(t, e.length - (r + 1));
      }
      __name(Ka, "Ka");
      function Ci(e, t, r, n, i, o) {
        if (e > r || e < t) {
          let s = typeof t == "bigint" ? "n" : "", a;
          throw o > 3 ? t === 0 || t === BigInt(0) ? a = `>= 0${s} and < 2${s} ** ${(o + 1) * 8}${s}` : a = `>= -(2${s} ** ${(o + 1) * 8 - 1}${s}) and < 2 ** ${(o + 1) * 8 - 1}${s}` : a = `>= ${t}${s} and <= ${r}${s}`, new Je.ERR_OUT_OF_RANGE("value", a, e);
        }
        Ka(n, i, o);
      }
      __name(Ci, "Ci");
      function Ke(e, t) {
        if (typeof e != "number") throw new Je.ERR_INVALID_ARG_TYPE(t, "number", e);
      }
      __name(Ke, "Ke");
      function vt(e, t, r) {
        throw Math.floor(e) !== e ? (Ke(e, r), new Je.ERR_OUT_OF_RANGE(r || "offset", "an integer", e)) : t < 0 ? new Je.ERR_BUFFER_OUT_OF_BOUNDS() : new Je.ERR_OUT_OF_RANGE(r || "offset", `>= ${r ? 1 : 0} and <= ${t}`, e);
      }
      __name(vt, "vt");
      var Ha = /[^+/0-9A-Za-z-_]/g;
      function za(e) {
        if (e = e.split("=")[0], e = e.trim().replace(Ha, ""), e.length < 2) return "";
        for (; e.length % 4 !== 0; ) e = e + "=";
        return e;
      }
      __name(za, "za");
      function mn(e, t) {
        t = t || 1 / 0;
        let r, n = e.length, i = null, o = [];
        for (let s = 0; s < n; ++s) {
          if (r = e.charCodeAt(s), r > 55295 && r < 57344) {
            if (!i) {
              if (r > 56319) {
                (t -= 3) > -1 && o.push(239, 191, 189);
                continue;
              } else if (s + 1 === n) {
                (t -= 3) > -1 && o.push(239, 191, 189);
                continue;
              }
              i = r;
              continue;
            }
            if (r < 56320) {
              (t -= 3) > -1 && o.push(239, 191, 189), i = r;
              continue;
            }
            r = (i - 55296 << 10 | r - 56320) + 65536;
          } else i && (t -= 3) > -1 && o.push(239, 191, 189);
          if (i = null, r < 128) {
            if ((t -= 1) < 0) break;
            o.push(r);
          } else if (r < 2048) {
            if ((t -= 2) < 0) break;
            o.push(r >> 6 | 192, r & 63 | 128);
          } else if (r < 65536) {
            if ((t -= 3) < 0) break;
            o.push(r >> 12 | 224, r >> 6 & 63 | 128, r & 63 | 128);
          } else if (r < 1114112) {
            if ((t -= 4) < 0) break;
            o.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, r & 63 | 128);
          } else throw new Error("Invalid code point");
        }
        return o;
      }
      __name(mn, "mn");
      function Ya(e) {
        let t = [];
        for (let r = 0; r < e.length; ++r) t.push(e.charCodeAt(r) & 255);
        return t;
      }
      __name(Ya, "Ya");
      function Za(e, t) {
        let r, n, i, o = [];
        for (let s = 0; s < e.length && !((t -= 2) < 0); ++s) r = e.charCodeAt(s), n = r >> 8, i = r % 256, o.push(i), o.push(n);
        return o;
      }
      __name(Za, "Za");
      function Ai(e) {
        return cn.toByteArray(za(e));
      }
      __name(Ai, "Ai");
      function cr(e, t, r, n) {
        let i;
        for (i = 0; i < n && !(i + r >= t.length || i >= e.length); ++i) t[i + r] = e[i];
        return i;
      }
      __name(cr, "cr");
      function de(e, t) {
        return e instanceof t || e != null && e.constructor != null && e.constructor.name != null && e.constructor.name === t.name;
      }
      __name(de, "de");
      function hn(e) {
        return e !== e;
      }
      __name(hn, "hn");
      var Xa = function() {
        let e = "0123456789abcdef", t = new Array(256);
        for (let r = 0; r < 16; ++r) {
          let n = r * 16;
          for (let i = 0; i < 16; ++i) t[n + i] = e[r] + e[i];
        }
        return t;
      }();
      function Se(e) {
        return typeof BigInt > "u" ? el : e;
      }
      __name(Se, "Se");
      function el() {
        throw new Error("BigInt not supported");
      }
      __name(el, "el");
    });
    var w2;
    var d = me(() => {
      "use strict";
      w2 = Le(Ri());
    });
    function sl() {
      return false;
    }
    __name(sl, "sl");
    function Gi() {
      return { dev: 0, ino: 0, mode: 0, nlink: 0, uid: 0, gid: 0, rdev: 0, size: 0, blksize: 0, blocks: 0, atimeMs: 0, mtimeMs: 0, ctimeMs: 0, birthtimeMs: 0, atime: /* @__PURE__ */ new Date(), mtime: /* @__PURE__ */ new Date(), ctime: /* @__PURE__ */ new Date(), birthtime: /* @__PURE__ */ new Date() };
    }
    __name(Gi, "Gi");
    function al() {
      return Gi();
    }
    __name(al, "al");
    function ll() {
      return [];
    }
    __name(ll, "ll");
    function ul(e) {
      e(null, []);
    }
    __name(ul, "ul");
    function cl() {
      return "";
    }
    __name(cl, "cl");
    function pl() {
      return "";
    }
    __name(pl, "pl");
    function ml() {
    }
    __name(ml, "ml");
    function dl() {
    }
    __name(dl, "dl");
    function fl() {
    }
    __name(fl, "fl");
    function gl() {
    }
    __name(gl, "gl");
    function hl() {
    }
    __name(hl, "hl");
    function yl() {
    }
    __name(yl, "yl");
    var wl;
    var El;
    var Qi;
    var Ji = me(() => {
      "use strict";
      d();
      u();
      c();
      p2();
      m();
      wl = {}, El = { existsSync: sl, lstatSync: Gi, statSync: al, readdirSync: ll, readdir: ul, readlinkSync: cl, realpathSync: pl, chmodSync: ml, renameSync: dl, mkdirSync: fl, rmdirSync: gl, rmSync: hl, unlinkSync: yl, promises: wl }, Qi = El;
    });
    function bl(...e) {
      return e.join("/");
    }
    __name(bl, "bl");
    function xl(...e) {
      return e.join("/");
    }
    __name(xl, "xl");
    function Pl(e) {
      let t = Wi(e), r = Ki(e), [n, i] = t.split(".");
      return { root: "/", dir: r, base: t, ext: i, name: n };
    }
    __name(Pl, "Pl");
    function Wi(e) {
      let t = e.split("/");
      return t[t.length - 1];
    }
    __name(Wi, "Wi");
    function Ki(e) {
      return e.split("/").slice(0, -1).join("/");
    }
    __name(Ki, "Ki");
    var Hi;
    var vl;
    var Tl;
    var fr;
    var zi = me(() => {
      "use strict";
      d();
      u();
      c();
      p2();
      m();
      Hi = "/", vl = { sep: Hi }, Tl = { basename: Wi, dirname: Ki, join: xl, parse: Pl, posix: vl, resolve: bl, sep: Hi }, fr = Tl;
    });
    var Yi = Re((fd, Cl) => {
      Cl.exports = { name: "@prisma/internals", version: "6.12.0", description: "This package is intended for Prisma's internal use", main: "dist/index.js", types: "dist/index.d.ts", repository: { type: "git", url: "https://github.com/prisma/prisma.git", directory: "packages/internals" }, homepage: "https://www.prisma.io", author: "Tim Suchanek <suchanek@prisma.io>", bugs: "https://github.com/prisma/prisma/issues", license: "Apache-2.0", scripts: { dev: "DEV=true tsx helpers/build.ts", build: "tsx helpers/build.ts", test: "dotenv -e ../../.db.env -- jest --silent", prepublishOnly: "pnpm run build" }, files: ["README.md", "dist", "!**/libquery_engine*", "!dist/get-generators/engines/*", "scripts"], devDependencies: { "@babel/helper-validator-identifier": "7.25.9", "@opentelemetry/api": "1.9.0", "@swc/core": "1.11.5", "@swc/jest": "0.2.37", "@types/babel__helper-validator-identifier": "7.15.2", "@types/jest": "29.5.14", "@types/node": "18.19.76", "@types/resolve": "1.20.6", archiver: "6.0.2", "checkpoint-client": "1.1.33", "cli-truncate": "4.0.0", dotenv: "16.5.0", esbuild: "0.25.5", "escape-string-regexp": "5.0.0", execa: "5.1.1", "fast-glob": "3.3.3", "find-up": "7.0.0", "fp-ts": "2.16.9", "fs-extra": "11.3.0", "fs-jetpack": "5.1.0", "global-dirs": "4.0.0", globby: "11.1.0", "identifier-regex": "1.0.0", "indent-string": "4.0.0", "is-windows": "1.0.2", "is-wsl": "3.1.0", jest: "29.7.0", "jest-junit": "16.0.0", kleur: "4.1.5", "mock-stdin": "1.0.0", "new-github-issue-url": "0.2.1", "node-fetch": "3.3.2", "npm-packlist": "5.1.3", open: "7.4.2", "p-map": "4.0.0", "read-package-up": "11.0.0", resolve: "1.22.10", "string-width": "7.2.0", "strip-ansi": "6.0.1", "strip-indent": "4.0.0", "temp-dir": "2.0.0", tempy: "1.0.1", "terminal-link": "4.0.0", tmp: "0.2.3", "ts-node": "10.9.2", "ts-pattern": "5.6.2", "ts-toolbelt": "9.6.0", typescript: "5.4.5", yarn: "1.22.22" }, dependencies: { "@prisma/config": "workspace:*", "@prisma/debug": "workspace:*", "@prisma/dmmf": "workspace:*", "@prisma/driver-adapter-utils": "workspace:*", "@prisma/engines": "workspace:*", "@prisma/fetch-engine": "workspace:*", "@prisma/generator": "workspace:*", "@prisma/generator-helper": "workspace:*", "@prisma/get-platform": "workspace:*", "@prisma/prisma-schema-wasm": "6.12.0-15.8047c96bbd92db98a2abc7c9323ce77c02c89dbc", "@prisma/schema-engine-wasm": "6.12.0-15.8047c96bbd92db98a2abc7c9323ce77c02c89dbc", "@prisma/schema-files-loader": "workspace:*", arg: "5.0.2", prompts: "2.4.2" }, peerDependencies: { typescript: ">=5.1.0" }, peerDependenciesMeta: { typescript: { optional: true } }, sideEffects: false };
    });
    var Pn = Re((Rd, kl) => {
      kl.exports = { name: "@prisma/engines-version", version: "6.12.0-15.8047c96bbd92db98a2abc7c9323ce77c02c89dbc", main: "index.js", types: "index.d.ts", license: "Apache-2.0", author: "Tim Suchanek <suchanek@prisma.io>", prisma: { enginesVersion: "8047c96bbd92db98a2abc7c9323ce77c02c89dbc" }, repository: { type: "git", url: "https://github.com/prisma/engines-wrapper.git", directory: "packages/engines-version" }, devDependencies: { "@types/node": "18.19.76", typescript: "4.9.5" }, files: ["index.js", "index.d.ts"], scripts: { build: "tsc -d" } };
    });
    var Zi = Re((gr) => {
      "use strict";
      d();
      u();
      c();
      p2();
      m();
      Object.defineProperty(gr, "__esModule", { value: true });
      gr.enginesVersion = void 0;
      gr.enginesVersion = Pn().prisma.enginesVersion;
    });
    var to = Re((qd, eo) => {
      "use strict";
      d();
      u();
      c();
      p2();
      m();
      eo.exports = (e, t = 1, r) => {
        if (r = { indent: " ", includeEmptyLines: false, ...r }, typeof e != "string") throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof e}\``);
        if (typeof t != "number") throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof t}\``);
        if (typeof r.indent != "string") throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof r.indent}\``);
        if (t === 0) return e;
        let n = r.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;
        return e.replace(n, r.indent.repeat(t));
      };
    });
    var io = Re((Zd, no) => {
      "use strict";
      d();
      u();
      c();
      p2();
      m();
      no.exports = ({ onlyFirst: e = false } = {}) => {
        let t = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");
        return new RegExp(t, e ? void 0 : "g");
      };
    });
    var so = Re((of, oo) => {
      "use strict";
      d();
      u();
      c();
      p2();
      m();
      var _l = io();
      oo.exports = (e) => typeof e == "string" ? e.replace(_l(), "") : e;
    });
    var Mn = Re((Wy, Ao) => {
      "use strict";
      d();
      u();
      c();
      p2();
      m();
      Ao.exports = /* @__PURE__ */ function() {
        function e(t, r, n, i, o) {
          return t < r || n < r ? t > n ? n + 1 : t + 1 : i === o ? r : r + 1;
        }
        __name(e, "e");
        return function(t, r) {
          if (t === r) return 0;
          if (t.length > r.length) {
            var n = t;
            t = r, r = n;
          }
          for (var i = t.length, o = r.length; i > 0 && t.charCodeAt(i - 1) === r.charCodeAt(o - 1); ) i--, o--;
          for (var s = 0; s < i && t.charCodeAt(s) === r.charCodeAt(s); ) s++;
          if (i -= s, o -= s, i === 0 || o < 3) return o;
          var a = 0, l2, f2, g, h, v, S2, C, R, D, M, U, k2, F2 = [];
          for (l2 = 0; l2 < i; l2++) F2.push(l2 + 1), F2.push(t.charCodeAt(s + l2));
          for (var ae = F2.length - 1; a < o - 3; ) for (D = r.charCodeAt(s + (f2 = a)), M = r.charCodeAt(s + (g = a + 1)), U = r.charCodeAt(s + (h = a + 2)), k2 = r.charCodeAt(s + (v = a + 3)), S2 = a += 4, l2 = 0; l2 < ae; l2 += 2) C = F2[l2], R = F2[l2 + 1], f2 = e(C, f2, g, D, R), g = e(f2, g, h, M, R), h = e(g, h, v, U, R), S2 = e(h, v, S2, k2, R), F2[l2] = S2, v = h, h = g, g = f2, f2 = C;
          for (; a < o; ) for (D = r.charCodeAt(s + (f2 = a)), S2 = ++a, l2 = 0; l2 < ae; l2 += 2) C = F2[l2], F2[l2] = S2 = e(C, f2, S2, D, F2[l2 + 1]), f2 = C;
          return S2;
        };
      }();
    });
    var Oo = me(() => {
      "use strict";
      d();
      u();
      c();
      p2();
      m();
    });
    var Do = me(() => {
      "use strict";
      d();
      u();
      c();
      p2();
      m();
    });
    var Gr;
    var rs = me(() => {
      "use strict";
      d();
      u();
      c();
      p2();
      m();
      Gr = class {
        static {
          __name(this, "Gr");
        }
        events = {};
        on(t, r) {
          return this.events[t] || (this.events[t] = []), this.events[t].push(r), this;
        }
        emit(t, ...r) {
          return this.events[t] ? (this.events[t].forEach((n) => {
            n(...r);
          }), true) : false;
        }
      };
    });
    var Ap = {};
    Pt(Ap, { DMMF: /* @__PURE__ */ __name(() => Ot, "DMMF"), Debug: /* @__PURE__ */ __name(() => H, "Debug"), Decimal: /* @__PURE__ */ __name(() => he, "Decimal"), Extensions: /* @__PURE__ */ __name(() => yn, "Extensions"), MetricsClient: /* @__PURE__ */ __name(() => pt, "MetricsClient"), PrismaClientInitializationError: /* @__PURE__ */ __name(() => Q, "PrismaClientInitializationError"), PrismaClientKnownRequestError: /* @__PURE__ */ __name(() => re, "PrismaClientKnownRequestError"), PrismaClientRustPanicError: /* @__PURE__ */ __name(() => ve, "PrismaClientRustPanicError"), PrismaClientUnknownRequestError: /* @__PURE__ */ __name(() => ne, "PrismaClientUnknownRequestError"), PrismaClientValidationError: /* @__PURE__ */ __name(() => Z, "PrismaClientValidationError"), Public: /* @__PURE__ */ __name(() => wn, "Public"), Sql: /* @__PURE__ */ __name(() => oe, "Sql"), createParam: /* @__PURE__ */ __name(() => Ko, "createParam"), defineDmmfProperty: /* @__PURE__ */ __name(() => es, "defineDmmfProperty"), deserializeJsonResponse: /* @__PURE__ */ __name(() => tt, "deserializeJsonResponse"), deserializeRawResult: /* @__PURE__ */ __name(() => on, "deserializeRawResult"), dmmfToRuntimeDataModel: /* @__PURE__ */ __name(() => Co, "dmmfToRuntimeDataModel"), empty: /* @__PURE__ */ __name(() => is, "empty"), getPrismaClient: /* @__PURE__ */ __name(() => Ea, "getPrismaClient"), getRuntime: /* @__PURE__ */ __name(() => Yr, "getRuntime"), join: /* @__PURE__ */ __name(() => ns, "join"), makeStrictEnum: /* @__PURE__ */ __name(() => ba, "makeStrictEnum"), makeTypedQueryFactory: /* @__PURE__ */ __name(() => ts, "makeTypedQueryFactory"), objectEnumValues: /* @__PURE__ */ __name(() => _r, "objectEnumValues"), raw: /* @__PURE__ */ __name(() => Vn, "raw"), serializeJsonQuery: /* @__PURE__ */ __name(() => $r, "serializeJsonQuery"), skip: /* @__PURE__ */ __name(() => qr, "skip"), sqltag: /* @__PURE__ */ __name(() => jn, "sqltag"), warnEnvConflicts: /* @__PURE__ */ __name(() => void 0, "warnEnvConflicts"), warnOnce: /* @__PURE__ */ __name(() => Rt, "warnOnce") });
    module.exports = Ra(Ap);
    d();
    u();
    c();
    p2();
    m();
    var yn = {};
    Pt(yn, { defineExtension: /* @__PURE__ */ __name(() => Si, "defineExtension"), getExtensionContext: /* @__PURE__ */ __name(() => ki, "getExtensionContext") });
    d();
    u();
    c();
    p2();
    m();
    d();
    u();
    c();
    p2();
    m();
    function Si(e) {
      return typeof e == "function" ? e : (t) => t.$extends(e);
    }
    __name(Si, "Si");
    d();
    u();
    c();
    p2();
    m();
    function ki(e) {
      return e;
    }
    __name(ki, "ki");
    var wn = {};
    Pt(wn, { validator: /* @__PURE__ */ __name(() => Ii, "validator") });
    d();
    u();
    c();
    p2();
    m();
    d();
    u();
    c();
    p2();
    m();
    function Ii(...e) {
      return (t) => t;
    }
    __name(Ii, "Ii");
    d();
    u();
    c();
    p2();
    m();
    d();
    u();
    c();
    p2();
    m();
    d();
    u();
    c();
    p2();
    m();
    var En;
    var Oi;
    var Di;
    var Mi;
    var _i = true;
    typeof y < "u" && ({ FORCE_COLOR: En, NODE_DISABLE_COLORS: Oi, NO_COLOR: Di, TERM: Mi } = y.env || {}, _i = y.stdout && y.stdout.isTTY);
    var tl = { enabled: !Oi && Di == null && Mi !== "dumb" && (En != null && En !== "0" || _i) };
    function V(e, t) {
      let r = new RegExp(`\\x1b\\[${t}m`, "g"), n = `\x1B[${e}m`, i = `\x1B[${t}m`;
      return function(o) {
        return !tl.enabled || o == null ? o : n + (~("" + o).indexOf(i) ? o.replace(r, i + n) : o) + i;
      };
    }
    __name(V, "V");
    var ym = V(0, 0);
    var pr = V(1, 22);
    var mr = V(2, 22);
    var wm = V(3, 23);
    var Ni = V(4, 24);
    var Em = V(7, 27);
    var bm = V(8, 28);
    var xm = V(9, 29);
    var Pm = V(30, 39);
    var ze = V(31, 39);
    var Fi = V(32, 39);
    var Li = V(33, 39);
    var Ui = V(34, 39);
    var vm = V(35, 39);
    var Bi = V(36, 39);
    var Tm = V(37, 39);
    var qi = V(90, 39);
    var Cm = V(90, 39);
    var Am = V(40, 49);
    var Rm = V(41, 49);
    var Sm = V(42, 49);
    var km = V(43, 49);
    var Im = V(44, 49);
    var Om = V(45, 49);
    var Dm = V(46, 49);
    var Mm = V(47, 49);
    d();
    u();
    c();
    p2();
    m();
    var rl = 100;
    var $i = ["green", "yellow", "blue", "magenta", "cyan", "red"];
    var dr = [];
    var Vi = Date.now();
    var nl = 0;
    var bn = typeof y < "u" ? y.env : {};
    globalThis.DEBUG ??= bn.DEBUG ?? "";
    globalThis.DEBUG_COLORS ??= bn.DEBUG_COLORS ? bn.DEBUG_COLORS === "true" : true;
    var Tt = { enable(e) {
      typeof e == "string" && (globalThis.DEBUG = e);
    }, disable() {
      let e = globalThis.DEBUG;
      return globalThis.DEBUG = "", e;
    }, enabled(e) {
      let t = globalThis.DEBUG.split(",").map((i) => i.replace(/[.+?^${}()|[\]\\]/g, "\\$&")), r = t.some((i) => i === "" || i[0] === "-" ? false : e.match(RegExp(i.split("*").join(".*") + "$"))), n = t.some((i) => i === "" || i[0] !== "-" ? false : e.match(RegExp(i.slice(1).split("*").join(".*") + "$")));
      return r && !n;
    }, log: /* @__PURE__ */ __name((...e) => {
      let [t, r, ...n] = e;
      (console.warn ?? console.log)(`${t} ${r}`, ...n);
    }, "log"), formatters: {} };
    function il(e) {
      let t = { color: $i[nl++ % $i.length], enabled: Tt.enabled(e), namespace: e, log: Tt.log, extend: /* @__PURE__ */ __name(() => {
      }, "extend") }, r = /* @__PURE__ */ __name((...n) => {
        let { enabled: i, namespace: o, color: s, log: a } = t;
        if (n.length !== 0 && dr.push([o, ...n]), dr.length > rl && dr.shift(), Tt.enabled(o) || i) {
          let l2 = n.map((g) => typeof g == "string" ? g : ol(g)), f2 = `+${Date.now() - Vi}ms`;
          Vi = Date.now(), a(o, ...l2, f2);
        }
      }, "r");
      return new Proxy(r, { get: /* @__PURE__ */ __name((n, i) => t[i], "get"), set: /* @__PURE__ */ __name((n, i, o) => t[i] = o, "set") });
    }
    __name(il, "il");
    var H = new Proxy(il, { get: /* @__PURE__ */ __name((e, t) => Tt[t], "get"), set: /* @__PURE__ */ __name((e, t, r) => Tt[t] = r, "set") });
    function ol(e, t = 2) {
      let r = /* @__PURE__ */ new Set();
      return JSON.stringify(e, (n, i) => {
        if (typeof i == "object" && i !== null) {
          if (r.has(i)) return "[Circular *]";
          r.add(i);
        } else if (typeof i == "bigint") return i.toString();
        return i;
      }, t);
    }
    __name(ol, "ol");
    function ji() {
      dr.length = 0;
    }
    __name(ji, "ji");
    d();
    u();
    c();
    p2();
    m();
    d();
    u();
    c();
    p2();
    m();
    var Al = Yi();
    var xn = Al.version;
    d();
    u();
    c();
    p2();
    m();
    function Ye(e) {
      let t = Rl();
      return t || (e?.config.engineType === "library" ? "library" : e?.config.engineType === "binary" ? "binary" : e?.config.engineType === "client" ? "client" : Sl(e));
    }
    __name(Ye, "Ye");
    function Rl() {
      let e = y.env.PRISMA_CLIENT_ENGINE_TYPE;
      return e === "library" ? "library" : e === "binary" ? "binary" : e === "client" ? "client" : void 0;
    }
    __name(Rl, "Rl");
    function Sl(e) {
      return e?.previewFeatures.includes("queryCompiler") ? "client" : "library";
    }
    __name(Sl, "Sl");
    d();
    u();
    c();
    p2();
    m();
    var Xi = "prisma+postgres";
    var hr = `${Xi}:`;
    function yr(e) {
      return e?.toString().startsWith(`${hr}//`) ?? false;
    }
    __name(yr, "yr");
    function vn(e) {
      if (!yr(e)) return false;
      let { host: t } = new URL(e);
      return t.includes("localhost") || t.includes("127.0.0.1") || t.includes("[::1]");
    }
    __name(vn, "vn");
    var At = {};
    Pt(At, { error: /* @__PURE__ */ __name(() => Dl, "error"), info: /* @__PURE__ */ __name(() => Ol, "info"), log: /* @__PURE__ */ __name(() => Il, "log"), query: /* @__PURE__ */ __name(() => Ml, "query"), should: /* @__PURE__ */ __name(() => ro, "should"), tags: /* @__PURE__ */ __name(() => Ct, "tags"), warn: /* @__PURE__ */ __name(() => Tn, "warn") });
    d();
    u();
    c();
    p2();
    m();
    var Ct = { error: ze("prisma:error"), warn: Li("prisma:warn"), info: Bi("prisma:info"), query: Ui("prisma:query") };
    var ro = { warn: /* @__PURE__ */ __name(() => !y.env.PRISMA_DISABLE_WARNINGS, "warn") };
    function Il(...e) {
      console.log(...e);
    }
    __name(Il, "Il");
    function Tn(e, ...t) {
      ro.warn() && console.warn(`${Ct.warn} ${e}`, ...t);
    }
    __name(Tn, "Tn");
    function Ol(e, ...t) {
      console.info(`${Ct.info} ${e}`, ...t);
    }
    __name(Ol, "Ol");
    function Dl(e, ...t) {
      console.error(`${Ct.error} ${e}`, ...t);
    }
    __name(Dl, "Dl");
    function Ml(e, ...t) {
      console.log(`${Ct.query} ${e}`, ...t);
    }
    __name(Ml, "Ml");
    d();
    u();
    c();
    p2();
    m();
    function Pe(e, t) {
      throw new Error(t);
    }
    __name(Pe, "Pe");
    d();
    u();
    c();
    p2();
    m();
    function Cn(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }
    __name(Cn, "Cn");
    d();
    u();
    c();
    p2();
    m();
    function Ze(e, t) {
      let r = {};
      for (let n of Object.keys(e)) r[n] = t(e[n], n);
      return r;
    }
    __name(Ze, "Ze");
    d();
    u();
    c();
    p2();
    m();
    function An(e, t) {
      if (e.length === 0) return;
      let r = e[0];
      for (let n = 1; n < e.length; n++) t(r, e[n]) < 0 && (r = e[n]);
      return r;
    }
    __name(An, "An");
    d();
    u();
    c();
    p2();
    m();
    function N(e, t) {
      Object.defineProperty(e, "name", { value: t, configurable: true });
    }
    __name(N, "N");
    d();
    u();
    c();
    p2();
    m();
    var ao = /* @__PURE__ */ new Set();
    var Rt = /* @__PURE__ */ __name((e, t, ...r) => {
      ao.has(e) || (ao.add(e), Tn(t, ...r));
    }, "Rt");
    var Q = class e extends Error {
      static {
        __name(this, "e");
      }
      clientVersion;
      errorCode;
      retryable;
      constructor(t, r, n) {
        super(t), this.name = "PrismaClientInitializationError", this.clientVersion = r, this.errorCode = n, Error.captureStackTrace(e);
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientInitializationError";
      }
    };
    N(Q, "PrismaClientInitializationError");
    d();
    u();
    c();
    p2();
    m();
    var re = class extends Error {
      static {
        __name(this, "re");
      }
      code;
      meta;
      clientVersion;
      batchRequestIdx;
      constructor(t, { code: r, clientVersion: n, meta: i, batchRequestIdx: o }) {
        super(t), this.name = "PrismaClientKnownRequestError", this.code = r, this.clientVersion = n, this.meta = i, Object.defineProperty(this, "batchRequestIdx", { value: o, enumerable: false, writable: true });
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientKnownRequestError";
      }
    };
    N(re, "PrismaClientKnownRequestError");
    d();
    u();
    c();
    p2();
    m();
    var ve = class extends Error {
      static {
        __name(this, "ve");
      }
      clientVersion;
      constructor(t, r) {
        super(t), this.name = "PrismaClientRustPanicError", this.clientVersion = r;
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientRustPanicError";
      }
    };
    N(ve, "PrismaClientRustPanicError");
    d();
    u();
    c();
    p2();
    m();
    var ne = class extends Error {
      static {
        __name(this, "ne");
      }
      clientVersion;
      batchRequestIdx;
      constructor(t, { clientVersion: r, batchRequestIdx: n }) {
        super(t), this.name = "PrismaClientUnknownRequestError", this.clientVersion = r, Object.defineProperty(this, "batchRequestIdx", { value: n, writable: true, enumerable: false });
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientUnknownRequestError";
      }
    };
    N(ne, "PrismaClientUnknownRequestError");
    d();
    u();
    c();
    p2();
    m();
    var Z = class extends Error {
      static {
        __name(this, "Z");
      }
      name = "PrismaClientValidationError";
      clientVersion;
      constructor(t, { clientVersion: r }) {
        super(t), this.clientVersion = r;
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientValidationError";
      }
    };
    N(Z, "PrismaClientValidationError");
    d();
    u();
    c();
    p2();
    m();
    d();
    u();
    c();
    p2();
    m();
    var Xe = 9e15;
    var De = 1e9;
    var Rn = "0123456789abcdef";
    var br = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058";
    var xr = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789";
    var Sn = { precision: 20, rounding: 4, modulo: 1, toExpNeg: -7, toExpPos: 21, minE: -Xe, maxE: Xe, crypto: false };
    var mo;
    var Te;
    var _ = true;
    var vr = "[DecimalError] ";
    var Oe = vr + "Invalid argument: ";
    var fo = vr + "Precision limit exceeded";
    var go = vr + "crypto unavailable";
    var ho = "[object Decimal]";
    var X = Math.floor;
    var J = Math.pow;
    var Nl = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i;
    var Fl = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i;
    var Ll = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i;
    var yo = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
    var ce = 1e7;
    var O = 7;
    var Ul = 9007199254740991;
    var Bl = br.length - 1;
    var kn = xr.length - 1;
    var A = { toStringTag: ho };
    A.absoluteValue = A.abs = function() {
      var e = new this.constructor(this);
      return e.s < 0 && (e.s = 1), I(e);
    };
    A.ceil = function() {
      return I(new this.constructor(this), this.e + 1, 2);
    };
    A.clampedTo = A.clamp = function(e, t) {
      var r, n = this, i = n.constructor;
      if (e = new i(e), t = new i(t), !e.s || !t.s) return new i(NaN);
      if (e.gt(t)) throw Error(Oe + t);
      return r = n.cmp(e), r < 0 ? e : n.cmp(t) > 0 ? t : new i(n);
    };
    A.comparedTo = A.cmp = function(e) {
      var t, r, n, i, o = this, s = o.d, a = (e = new o.constructor(e)).d, l2 = o.s, f2 = e.s;
      if (!s || !a) return !l2 || !f2 ? NaN : l2 !== f2 ? l2 : s === a ? 0 : !s ^ l2 < 0 ? 1 : -1;
      if (!s[0] || !a[0]) return s[0] ? l2 : a[0] ? -f2 : 0;
      if (l2 !== f2) return l2;
      if (o.e !== e.e) return o.e > e.e ^ l2 < 0 ? 1 : -1;
      for (n = s.length, i = a.length, t = 0, r = n < i ? n : i; t < r; ++t) if (s[t] !== a[t]) return s[t] > a[t] ^ l2 < 0 ? 1 : -1;
      return n === i ? 0 : n > i ^ l2 < 0 ? 1 : -1;
    };
    A.cosine = A.cos = function() {
      var e, t, r = this, n = r.constructor;
      return r.d ? r.d[0] ? (e = n.precision, t = n.rounding, n.precision = e + Math.max(r.e, r.sd()) + O, n.rounding = 1, r = ql(n, Po(n, r)), n.precision = e, n.rounding = t, I(Te == 2 || Te == 3 ? r.neg() : r, e, t, true)) : new n(1) : new n(NaN);
    };
    A.cubeRoot = A.cbrt = function() {
      var e, t, r, n, i, o, s, a, l2, f2, g = this, h = g.constructor;
      if (!g.isFinite() || g.isZero()) return new h(g);
      for (_ = false, o = g.s * J(g.s * g, 1 / 3), !o || Math.abs(o) == 1 / 0 ? (r = z(g.d), e = g.e, (o = (e - r.length + 1) % 3) && (r += o == 1 || o == -2 ? "0" : "00"), o = J(r, 1 / 3), e = X((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), o == 1 / 0 ? r = "5e" + e : (r = o.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + e), n = new h(r), n.s = g.s) : n = new h(o.toString()), s = (e = h.precision) + 3; ; ) if (a = n, l2 = a.times(a).times(a), f2 = l2.plus(g), n = q(f2.plus(g).times(a), f2.plus(l2), s + 2, 1), z(a.d).slice(0, s) === (r = z(n.d)).slice(0, s)) if (r = r.slice(s - 3, s + 1), r == "9999" || !i && r == "4999") {
        if (!i && (I(a, e + 1, 0), a.times(a).times(a).eq(g))) {
          n = a;
          break;
        }
        s += 4, i = 1;
      } else {
        (!+r || !+r.slice(1) && r.charAt(0) == "5") && (I(n, e + 1, 1), t = !n.times(n).times(n).eq(g));
        break;
      }
      return _ = true, I(n, e, h.rounding, t);
    };
    A.decimalPlaces = A.dp = function() {
      var e, t = this.d, r = NaN;
      if (t) {
        if (e = t.length - 1, r = (e - X(this.e / O)) * O, e = t[e], e) for (; e % 10 == 0; e /= 10) r--;
        r < 0 && (r = 0);
      }
      return r;
    };
    A.dividedBy = A.div = function(e) {
      return q(this, new this.constructor(e));
    };
    A.dividedToIntegerBy = A.divToInt = function(e) {
      var t = this, r = t.constructor;
      return I(q(t, new r(e), 0, 1, 1), r.precision, r.rounding);
    };
    A.equals = A.eq = function(e) {
      return this.cmp(e) === 0;
    };
    A.floor = function() {
      return I(new this.constructor(this), this.e + 1, 3);
    };
    A.greaterThan = A.gt = function(e) {
      return this.cmp(e) > 0;
    };
    A.greaterThanOrEqualTo = A.gte = function(e) {
      var t = this.cmp(e);
      return t == 1 || t === 0;
    };
    A.hyperbolicCosine = A.cosh = function() {
      var e, t, r, n, i, o = this, s = o.constructor, a = new s(1);
      if (!o.isFinite()) return new s(o.s ? 1 / 0 : NaN);
      if (o.isZero()) return a;
      r = s.precision, n = s.rounding, s.precision = r + Math.max(o.e, o.sd()) + 4, s.rounding = 1, i = o.d.length, i < 32 ? (e = Math.ceil(i / 3), t = (1 / Cr(4, e)).toString()) : (e = 16, t = "2.3283064365386962890625e-10"), o = et(s, 1, o.times(t), new s(1), true);
      for (var l2, f2 = e, g = new s(8); f2--; ) l2 = o.times(o), o = a.minus(l2.times(g.minus(l2.times(g))));
      return I(o, s.precision = r, s.rounding = n, true);
    };
    A.hyperbolicSine = A.sinh = function() {
      var e, t, r, n, i = this, o = i.constructor;
      if (!i.isFinite() || i.isZero()) return new o(i);
      if (t = o.precision, r = o.rounding, o.precision = t + Math.max(i.e, i.sd()) + 4, o.rounding = 1, n = i.d.length, n < 3) i = et(o, 2, i, i, true);
      else {
        e = 1.4 * Math.sqrt(n), e = e > 16 ? 16 : e | 0, i = i.times(1 / Cr(5, e)), i = et(o, 2, i, i, true);
        for (var s, a = new o(5), l2 = new o(16), f2 = new o(20); e--; ) s = i.times(i), i = i.times(a.plus(s.times(l2.times(s).plus(f2))));
      }
      return o.precision = t, o.rounding = r, I(i, t, r, true);
    };
    A.hyperbolicTangent = A.tanh = function() {
      var e, t, r = this, n = r.constructor;
      return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 7, n.rounding = 1, q(r.sinh(), r.cosh(), n.precision = e, n.rounding = t)) : new n(r.s);
    };
    A.inverseCosine = A.acos = function() {
      var e = this, t = e.constructor, r = e.abs().cmp(1), n = t.precision, i = t.rounding;
      return r !== -1 ? r === 0 ? e.isNeg() ? fe(t, n, i) : new t(0) : new t(NaN) : e.isZero() ? fe(t, n + 4, i).times(0.5) : (t.precision = n + 6, t.rounding = 1, e = new t(1).minus(e).div(e.plus(1)).sqrt().atan(), t.precision = n, t.rounding = i, e.times(2));
    };
    A.inverseHyperbolicCosine = A.acosh = function() {
      var e, t, r = this, n = r.constructor;
      return r.lte(1) ? new n(r.eq(1) ? 0 : NaN) : r.isFinite() ? (e = n.precision, t = n.rounding, n.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4, n.rounding = 1, _ = false, r = r.times(r).minus(1).sqrt().plus(r), _ = true, n.precision = e, n.rounding = t, r.ln()) : new n(r);
    };
    A.inverseHyperbolicSine = A.asinh = function() {
      var e, t, r = this, n = r.constructor;
      return !r.isFinite() || r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6, n.rounding = 1, _ = false, r = r.times(r).plus(1).sqrt().plus(r), _ = true, n.precision = e, n.rounding = t, r.ln());
    };
    A.inverseHyperbolicTangent = A.atanh = function() {
      var e, t, r, n, i = this, o = i.constructor;
      return i.isFinite() ? i.e >= 0 ? new o(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN) : (e = o.precision, t = o.rounding, n = i.sd(), Math.max(n, e) < 2 * -i.e - 1 ? I(new o(i), e, t, true) : (o.precision = r = n - i.e, i = q(i.plus(1), new o(1).minus(i), r + e, 1), o.precision = e + 4, o.rounding = 1, i = i.ln(), o.precision = e, o.rounding = t, i.times(0.5))) : new o(NaN);
    };
    A.inverseSine = A.asin = function() {
      var e, t, r, n, i = this, o = i.constructor;
      return i.isZero() ? new o(i) : (t = i.abs().cmp(1), r = o.precision, n = o.rounding, t !== -1 ? t === 0 ? (e = fe(o, r + 4, n).times(0.5), e.s = i.s, e) : new o(NaN) : (o.precision = r + 6, o.rounding = 1, i = i.div(new o(1).minus(i.times(i)).sqrt().plus(1)).atan(), o.precision = r, o.rounding = n, i.times(2)));
    };
    A.inverseTangent = A.atan = function() {
      var e, t, r, n, i, o, s, a, l2, f2 = this, g = f2.constructor, h = g.precision, v = g.rounding;
      if (f2.isFinite()) {
        if (f2.isZero()) return new g(f2);
        if (f2.abs().eq(1) && h + 4 <= kn) return s = fe(g, h + 4, v).times(0.25), s.s = f2.s, s;
      } else {
        if (!f2.s) return new g(NaN);
        if (h + 4 <= kn) return s = fe(g, h + 4, v).times(0.5), s.s = f2.s, s;
      }
      for (g.precision = a = h + 10, g.rounding = 1, r = Math.min(28, a / O + 2 | 0), e = r; e; --e) f2 = f2.div(f2.times(f2).plus(1).sqrt().plus(1));
      for (_ = false, t = Math.ceil(a / O), n = 1, l2 = f2.times(f2), s = new g(f2), i = f2; e !== -1; ) if (i = i.times(l2), o = s.minus(i.div(n += 2)), i = i.times(l2), s = o.plus(i.div(n += 2)), s.d[t] !== void 0) for (e = t; s.d[e] === o.d[e] && e--; ) ;
      return r && (s = s.times(2 << r - 1)), _ = true, I(s, g.precision = h, g.rounding = v, true);
    };
    A.isFinite = function() {
      return !!this.d;
    };
    A.isInteger = A.isInt = function() {
      return !!this.d && X(this.e / O) > this.d.length - 2;
    };
    A.isNaN = function() {
      return !this.s;
    };
    A.isNegative = A.isNeg = function() {
      return this.s < 0;
    };
    A.isPositive = A.isPos = function() {
      return this.s > 0;
    };
    A.isZero = function() {
      return !!this.d && this.d[0] === 0;
    };
    A.lessThan = A.lt = function(e) {
      return this.cmp(e) < 0;
    };
    A.lessThanOrEqualTo = A.lte = function(e) {
      return this.cmp(e) < 1;
    };
    A.logarithm = A.log = function(e) {
      var t, r, n, i, o, s, a, l2, f2 = this, g = f2.constructor, h = g.precision, v = g.rounding, S2 = 5;
      if (e == null) e = new g(10), t = true;
      else {
        if (e = new g(e), r = e.d, e.s < 0 || !r || !r[0] || e.eq(1)) return new g(NaN);
        t = e.eq(10);
      }
      if (r = f2.d, f2.s < 0 || !r || !r[0] || f2.eq(1)) return new g(r && !r[0] ? -1 / 0 : f2.s != 1 ? NaN : r ? 0 : 1 / 0);
      if (t) if (r.length > 1) o = true;
      else {
        for (i = r[0]; i % 10 === 0; ) i /= 10;
        o = i !== 1;
      }
      if (_ = false, a = h + S2, s = Ie(f2, a), n = t ? Pr(g, a + 10) : Ie(e, a), l2 = q(s, n, a, 1), St(l2.d, i = h, v)) do
        if (a += 10, s = Ie(f2, a), n = t ? Pr(g, a + 10) : Ie(e, a), l2 = q(s, n, a, 1), !o) {
          +z(l2.d).slice(i + 1, i + 15) + 1 == 1e14 && (l2 = I(l2, h + 1, 0));
          break;
        }
      while (St(l2.d, i += 10, v));
      return _ = true, I(l2, h, v);
    };
    A.minus = A.sub = function(e) {
      var t, r, n, i, o, s, a, l2, f2, g, h, v, S2 = this, C = S2.constructor;
      if (e = new C(e), !S2.d || !e.d) return !S2.s || !e.s ? e = new C(NaN) : S2.d ? e.s = -e.s : e = new C(e.d || S2.s !== e.s ? S2 : NaN), e;
      if (S2.s != e.s) return e.s = -e.s, S2.plus(e);
      if (f2 = S2.d, v = e.d, a = C.precision, l2 = C.rounding, !f2[0] || !v[0]) {
        if (v[0]) e.s = -e.s;
        else if (f2[0]) e = new C(S2);
        else return new C(l2 === 3 ? -0 : 0);
        return _ ? I(e, a, l2) : e;
      }
      if (r = X(e.e / O), g = X(S2.e / O), f2 = f2.slice(), o = g - r, o) {
        for (h = o < 0, h ? (t = f2, o = -o, s = v.length) : (t = v, r = g, s = f2.length), n = Math.max(Math.ceil(a / O), s) + 2, o > n && (o = n, t.length = 1), t.reverse(), n = o; n--; ) t.push(0);
        t.reverse();
      } else {
        for (n = f2.length, s = v.length, h = n < s, h && (s = n), n = 0; n < s; n++) if (f2[n] != v[n]) {
          h = f2[n] < v[n];
          break;
        }
        o = 0;
      }
      for (h && (t = f2, f2 = v, v = t, e.s = -e.s), s = f2.length, n = v.length - s; n > 0; --n) f2[s++] = 0;
      for (n = v.length; n > o; ) {
        if (f2[--n] < v[n]) {
          for (i = n; i && f2[--i] === 0; ) f2[i] = ce - 1;
          --f2[i], f2[n] += ce;
        }
        f2[n] -= v[n];
      }
      for (; f2[--s] === 0; ) f2.pop();
      for (; f2[0] === 0; f2.shift()) --r;
      return f2[0] ? (e.d = f2, e.e = Tr(f2, r), _ ? I(e, a, l2) : e) : new C(l2 === 3 ? -0 : 0);
    };
    A.modulo = A.mod = function(e) {
      var t, r = this, n = r.constructor;
      return e = new n(e), !r.d || !e.s || e.d && !e.d[0] ? new n(NaN) : !e.d || r.d && !r.d[0] ? I(new n(r), n.precision, n.rounding) : (_ = false, n.modulo == 9 ? (t = q(r, e.abs(), 0, 3, 1), t.s *= e.s) : t = q(r, e, 0, n.modulo, 1), t = t.times(e), _ = true, r.minus(t));
    };
    A.naturalExponential = A.exp = function() {
      return In(this);
    };
    A.naturalLogarithm = A.ln = function() {
      return Ie(this);
    };
    A.negated = A.neg = function() {
      var e = new this.constructor(this);
      return e.s = -e.s, I(e);
    };
    A.plus = A.add = function(e) {
      var t, r, n, i, o, s, a, l2, f2, g, h = this, v = h.constructor;
      if (e = new v(e), !h.d || !e.d) return !h.s || !e.s ? e = new v(NaN) : h.d || (e = new v(e.d || h.s === e.s ? h : NaN)), e;
      if (h.s != e.s) return e.s = -e.s, h.minus(e);
      if (f2 = h.d, g = e.d, a = v.precision, l2 = v.rounding, !f2[0] || !g[0]) return g[0] || (e = new v(h)), _ ? I(e, a, l2) : e;
      if (o = X(h.e / O), n = X(e.e / O), f2 = f2.slice(), i = o - n, i) {
        for (i < 0 ? (r = f2, i = -i, s = g.length) : (r = g, n = o, s = f2.length), o = Math.ceil(a / O), s = o > s ? o + 1 : s + 1, i > s && (i = s, r.length = 1), r.reverse(); i--; ) r.push(0);
        r.reverse();
      }
      for (s = f2.length, i = g.length, s - i < 0 && (i = s, r = g, g = f2, f2 = r), t = 0; i; ) t = (f2[--i] = f2[i] + g[i] + t) / ce | 0, f2[i] %= ce;
      for (t && (f2.unshift(t), ++n), s = f2.length; f2[--s] == 0; ) f2.pop();
      return e.d = f2, e.e = Tr(f2, n), _ ? I(e, a, l2) : e;
    };
    A.precision = A.sd = function(e) {
      var t, r = this;
      if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(Oe + e);
      return r.d ? (t = wo(r.d), e && r.e + 1 > t && (t = r.e + 1)) : t = NaN, t;
    };
    A.round = function() {
      var e = this, t = e.constructor;
      return I(new t(e), e.e + 1, t.rounding);
    };
    A.sine = A.sin = function() {
      var e, t, r = this, n = r.constructor;
      return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + Math.max(r.e, r.sd()) + O, n.rounding = 1, r = Vl(n, Po(n, r)), n.precision = e, n.rounding = t, I(Te > 2 ? r.neg() : r, e, t, true)) : new n(NaN);
    };
    A.squareRoot = A.sqrt = function() {
      var e, t, r, n, i, o, s = this, a = s.d, l2 = s.e, f2 = s.s, g = s.constructor;
      if (f2 !== 1 || !a || !a[0]) return new g(!f2 || f2 < 0 && (!a || a[0]) ? NaN : a ? s : 1 / 0);
      for (_ = false, f2 = Math.sqrt(+s), f2 == 0 || f2 == 1 / 0 ? (t = z(a), (t.length + l2) % 2 == 0 && (t += "0"), f2 = Math.sqrt(t), l2 = X((l2 + 1) / 2) - (l2 < 0 || l2 % 2), f2 == 1 / 0 ? t = "5e" + l2 : (t = f2.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + l2), n = new g(t)) : n = new g(f2.toString()), r = (l2 = g.precision) + 3; ; ) if (o = n, n = o.plus(q(s, o, r + 2, 1)).times(0.5), z(o.d).slice(0, r) === (t = z(n.d)).slice(0, r)) if (t = t.slice(r - 3, r + 1), t == "9999" || !i && t == "4999") {
        if (!i && (I(o, l2 + 1, 0), o.times(o).eq(s))) {
          n = o;
          break;
        }
        r += 4, i = 1;
      } else {
        (!+t || !+t.slice(1) && t.charAt(0) == "5") && (I(n, l2 + 1, 1), e = !n.times(n).eq(s));
        break;
      }
      return _ = true, I(n, l2, g.rounding, e);
    };
    A.tangent = A.tan = function() {
      var e, t, r = this, n = r.constructor;
      return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 10, n.rounding = 1, r = r.sin(), r.s = 1, r = q(r, new n(1).minus(r.times(r)).sqrt(), e + 10, 0), n.precision = e, n.rounding = t, I(Te == 2 || Te == 4 ? r.neg() : r, e, t, true)) : new n(NaN);
    };
    A.times = A.mul = function(e) {
      var t, r, n, i, o, s, a, l2, f2, g = this, h = g.constructor, v = g.d, S2 = (e = new h(e)).d;
      if (e.s *= g.s, !v || !v[0] || !S2 || !S2[0]) return new h(!e.s || v && !v[0] && !S2 || S2 && !S2[0] && !v ? NaN : !v || !S2 ? e.s / 0 : e.s * 0);
      for (r = X(g.e / O) + X(e.e / O), l2 = v.length, f2 = S2.length, l2 < f2 && (o = v, v = S2, S2 = o, s = l2, l2 = f2, f2 = s), o = [], s = l2 + f2, n = s; n--; ) o.push(0);
      for (n = f2; --n >= 0; ) {
        for (t = 0, i = l2 + n; i > n; ) a = o[i] + S2[n] * v[i - n - 1] + t, o[i--] = a % ce | 0, t = a / ce | 0;
        o[i] = (o[i] + t) % ce | 0;
      }
      for (; !o[--s]; ) o.pop();
      return t ? ++r : o.shift(), e.d = o, e.e = Tr(o, r), _ ? I(e, h.precision, h.rounding) : e;
    };
    A.toBinary = function(e, t) {
      return On(this, 2, e, t);
    };
    A.toDecimalPlaces = A.toDP = function(e, t) {
      var r = this, n = r.constructor;
      return r = new n(r), e === void 0 ? r : (ie(e, 0, De), t === void 0 ? t = n.rounding : ie(t, 0, 8), I(r, e + r.e + 1, t));
    };
    A.toExponential = function(e, t) {
      var r, n = this, i = n.constructor;
      return e === void 0 ? r = ge(n, true) : (ie(e, 0, De), t === void 0 ? t = i.rounding : ie(t, 0, 8), n = I(new i(n), e + 1, t), r = ge(n, true, e + 1)), n.isNeg() && !n.isZero() ? "-" + r : r;
    };
    A.toFixed = function(e, t) {
      var r, n, i = this, o = i.constructor;
      return e === void 0 ? r = ge(i) : (ie(e, 0, De), t === void 0 ? t = o.rounding : ie(t, 0, 8), n = I(new o(i), e + i.e + 1, t), r = ge(n, false, e + n.e + 1)), i.isNeg() && !i.isZero() ? "-" + r : r;
    };
    A.toFraction = function(e) {
      var t, r, n, i, o, s, a, l2, f2, g, h, v, S2 = this, C = S2.d, R = S2.constructor;
      if (!C) return new R(S2);
      if (f2 = r = new R(1), n = l2 = new R(0), t = new R(n), o = t.e = wo(C) - S2.e - 1, s = o % O, t.d[0] = J(10, s < 0 ? O + s : s), e == null) e = o > 0 ? t : f2;
      else {
        if (a = new R(e), !a.isInt() || a.lt(f2)) throw Error(Oe + a);
        e = a.gt(t) ? o > 0 ? t : f2 : a;
      }
      for (_ = false, a = new R(z(C)), g = R.precision, R.precision = o = C.length * O * 2; h = q(a, t, 0, 1, 1), i = r.plus(h.times(n)), i.cmp(e) != 1; ) r = n, n = i, i = f2, f2 = l2.plus(h.times(i)), l2 = i, i = t, t = a.minus(h.times(i)), a = i;
      return i = q(e.minus(r), n, 0, 1, 1), l2 = l2.plus(i.times(f2)), r = r.plus(i.times(n)), l2.s = f2.s = S2.s, v = q(f2, n, o, 1).minus(S2).abs().cmp(q(l2, r, o, 1).minus(S2).abs()) < 1 ? [f2, n] : [l2, r], R.precision = g, _ = true, v;
    };
    A.toHexadecimal = A.toHex = function(e, t) {
      return On(this, 16, e, t);
    };
    A.toNearest = function(e, t) {
      var r = this, n = r.constructor;
      if (r = new n(r), e == null) {
        if (!r.d) return r;
        e = new n(1), t = n.rounding;
      } else {
        if (e = new n(e), t === void 0 ? t = n.rounding : ie(t, 0, 8), !r.d) return e.s ? r : e;
        if (!e.d) return e.s && (e.s = r.s), e;
      }
      return e.d[0] ? (_ = false, r = q(r, e, 0, t, 1).times(e), _ = true, I(r)) : (e.s = r.s, r = e), r;
    };
    A.toNumber = function() {
      return +this;
    };
    A.toOctal = function(e, t) {
      return On(this, 8, e, t);
    };
    A.toPower = A.pow = function(e) {
      var t, r, n, i, o, s, a = this, l2 = a.constructor, f2 = +(e = new l2(e));
      if (!a.d || !e.d || !a.d[0] || !e.d[0]) return new l2(J(+a, f2));
      if (a = new l2(a), a.eq(1)) return a;
      if (n = l2.precision, o = l2.rounding, e.eq(1)) return I(a, n, o);
      if (t = X(e.e / O), t >= e.d.length - 1 && (r = f2 < 0 ? -f2 : f2) <= Ul) return i = Eo(l2, a, r, n), e.s < 0 ? new l2(1).div(i) : I(i, n, o);
      if (s = a.s, s < 0) {
        if (t < e.d.length - 1) return new l2(NaN);
        if ((e.d[t] & 1) == 0 && (s = 1), a.e == 0 && a.d[0] == 1 && a.d.length == 1) return a.s = s, a;
      }
      return r = J(+a, f2), t = r == 0 || !isFinite(r) ? X(f2 * (Math.log("0." + z(a.d)) / Math.LN10 + a.e + 1)) : new l2(r + "").e, t > l2.maxE + 1 || t < l2.minE - 1 ? new l2(t > 0 ? s / 0 : 0) : (_ = false, l2.rounding = a.s = 1, r = Math.min(12, (t + "").length), i = In(e.times(Ie(a, n + r)), n), i.d && (i = I(i, n + 5, 1), St(i.d, n, o) && (t = n + 10, i = I(In(e.times(Ie(a, t + r)), t), t + 5, 1), +z(i.d).slice(n + 1, n + 15) + 1 == 1e14 && (i = I(i, n + 1, 0)))), i.s = s, _ = true, l2.rounding = o, I(i, n, o));
    };
    A.toPrecision = function(e, t) {
      var r, n = this, i = n.constructor;
      return e === void 0 ? r = ge(n, n.e <= i.toExpNeg || n.e >= i.toExpPos) : (ie(e, 1, De), t === void 0 ? t = i.rounding : ie(t, 0, 8), n = I(new i(n), e, t), r = ge(n, e <= n.e || n.e <= i.toExpNeg, e)), n.isNeg() && !n.isZero() ? "-" + r : r;
    };
    A.toSignificantDigits = A.toSD = function(e, t) {
      var r = this, n = r.constructor;
      return e === void 0 ? (e = n.precision, t = n.rounding) : (ie(e, 1, De), t === void 0 ? t = n.rounding : ie(t, 0, 8)), I(new n(r), e, t);
    };
    A.toString = function() {
      var e = this, t = e.constructor, r = ge(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
      return e.isNeg() && !e.isZero() ? "-" + r : r;
    };
    A.truncated = A.trunc = function() {
      return I(new this.constructor(this), this.e + 1, 1);
    };
    A.valueOf = A.toJSON = function() {
      var e = this, t = e.constructor, r = ge(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
      return e.isNeg() ? "-" + r : r;
    };
    function z(e) {
      var t, r, n, i = e.length - 1, o = "", s = e[0];
      if (i > 0) {
        for (o += s, t = 1; t < i; t++) n = e[t] + "", r = O - n.length, r && (o += ke(r)), o += n;
        s = e[t], n = s + "", r = O - n.length, r && (o += ke(r));
      } else if (s === 0) return "0";
      for (; s % 10 === 0; ) s /= 10;
      return o + s;
    }
    __name(z, "z");
    function ie(e, t, r) {
      if (e !== ~~e || e < t || e > r) throw Error(Oe + e);
    }
    __name(ie, "ie");
    function St(e, t, r, n) {
      var i, o, s, a;
      for (o = e[0]; o >= 10; o /= 10) --t;
      return --t < 0 ? (t += O, i = 0) : (i = Math.ceil((t + 1) / O), t %= O), o = J(10, O - t), a = e[i] % o | 0, n == null ? t < 3 ? (t == 0 ? a = a / 100 | 0 : t == 1 && (a = a / 10 | 0), s = r < 4 && a == 99999 || r > 3 && a == 49999 || a == 5e4 || a == 0) : s = (r < 4 && a + 1 == o || r > 3 && a + 1 == o / 2) && (e[i + 1] / o / 100 | 0) == J(10, t - 2) - 1 || (a == o / 2 || a == 0) && (e[i + 1] / o / 100 | 0) == 0 : t < 4 ? (t == 0 ? a = a / 1e3 | 0 : t == 1 ? a = a / 100 | 0 : t == 2 && (a = a / 10 | 0), s = (n || r < 4) && a == 9999 || !n && r > 3 && a == 4999) : s = ((n || r < 4) && a + 1 == o || !n && r > 3 && a + 1 == o / 2) && (e[i + 1] / o / 1e3 | 0) == J(10, t - 3) - 1, s;
    }
    __name(St, "St");
    function wr(e, t, r) {
      for (var n, i = [0], o, s = 0, a = e.length; s < a; ) {
        for (o = i.length; o--; ) i[o] *= t;
        for (i[0] += Rn.indexOf(e.charAt(s++)), n = 0; n < i.length; n++) i[n] > r - 1 && (i[n + 1] === void 0 && (i[n + 1] = 0), i[n + 1] += i[n] / r | 0, i[n] %= r);
      }
      return i.reverse();
    }
    __name(wr, "wr");
    function ql(e, t) {
      var r, n, i;
      if (t.isZero()) return t;
      n = t.d.length, n < 32 ? (r = Math.ceil(n / 3), i = (1 / Cr(4, r)).toString()) : (r = 16, i = "2.3283064365386962890625e-10"), e.precision += r, t = et(e, 1, t.times(i), new e(1));
      for (var o = r; o--; ) {
        var s = t.times(t);
        t = s.times(s).minus(s).times(8).plus(1);
      }
      return e.precision -= r, t;
    }
    __name(ql, "ql");
    var q = /* @__PURE__ */ function() {
      function e(n, i, o) {
        var s, a = 0, l2 = n.length;
        for (n = n.slice(); l2--; ) s = n[l2] * i + a, n[l2] = s % o | 0, a = s / o | 0;
        return a && n.unshift(a), n;
      }
      __name(e, "e");
      function t(n, i, o, s) {
        var a, l2;
        if (o != s) l2 = o > s ? 1 : -1;
        else for (a = l2 = 0; a < o; a++) if (n[a] != i[a]) {
          l2 = n[a] > i[a] ? 1 : -1;
          break;
        }
        return l2;
      }
      __name(t, "t");
      function r(n, i, o, s) {
        for (var a = 0; o--; ) n[o] -= a, a = n[o] < i[o] ? 1 : 0, n[o] = a * s + n[o] - i[o];
        for (; !n[0] && n.length > 1; ) n.shift();
      }
      __name(r, "r");
      return function(n, i, o, s, a, l2) {
        var f2, g, h, v, S2, C, R, D, M, U, k2, F2, ae, G, an, or, xt, ln, ue, sr, ar = n.constructor, un = n.s == i.s ? 1 : -1, Y = n.d, $ = i.d;
        if (!Y || !Y[0] || !$ || !$[0]) return new ar(!n.s || !i.s || (Y ? $ && Y[0] == $[0] : !$) ? NaN : Y && Y[0] == 0 || !$ ? un * 0 : un / 0);
        for (l2 ? (S2 = 1, g = n.e - i.e) : (l2 = ce, S2 = O, g = X(n.e / S2) - X(i.e / S2)), ue = $.length, xt = Y.length, M = new ar(un), U = M.d = [], h = 0; $[h] == (Y[h] || 0); h++) ;
        if ($[h] > (Y[h] || 0) && g--, o == null ? (G = o = ar.precision, s = ar.rounding) : a ? G = o + (n.e - i.e) + 1 : G = o, G < 0) U.push(1), C = true;
        else {
          if (G = G / S2 + 2 | 0, h = 0, ue == 1) {
            for (v = 0, $ = $[0], G++; (h < xt || v) && G--; h++) an = v * l2 + (Y[h] || 0), U[h] = an / $ | 0, v = an % $ | 0;
            C = v || h < xt;
          } else {
            for (v = l2 / ($[0] + 1) | 0, v > 1 && ($ = e($, v, l2), Y = e(Y, v, l2), ue = $.length, xt = Y.length), or = ue, k2 = Y.slice(0, ue), F2 = k2.length; F2 < ue; ) k2[F2++] = 0;
            sr = $.slice(), sr.unshift(0), ln = $[0], $[1] >= l2 / 2 && ++ln;
            do
              v = 0, f2 = t($, k2, ue, F2), f2 < 0 ? (ae = k2[0], ue != F2 && (ae = ae * l2 + (k2[1] || 0)), v = ae / ln | 0, v > 1 ? (v >= l2 && (v = l2 - 1), R = e($, v, l2), D = R.length, F2 = k2.length, f2 = t(R, k2, D, F2), f2 == 1 && (v--, r(R, ue < D ? sr : $, D, l2))) : (v == 0 && (f2 = v = 1), R = $.slice()), D = R.length, D < F2 && R.unshift(0), r(k2, R, F2, l2), f2 == -1 && (F2 = k2.length, f2 = t($, k2, ue, F2), f2 < 1 && (v++, r(k2, ue < F2 ? sr : $, F2, l2))), F2 = k2.length) : f2 === 0 && (v++, k2 = [0]), U[h++] = v, f2 && k2[0] ? k2[F2++] = Y[or] || 0 : (k2 = [Y[or]], F2 = 1);
            while ((or++ < xt || k2[0] !== void 0) && G--);
            C = k2[0] !== void 0;
          }
          U[0] || U.shift();
        }
        if (S2 == 1) M.e = g, mo = C;
        else {
          for (h = 1, v = U[0]; v >= 10; v /= 10) h++;
          M.e = h + g * S2 - 1, I(M, a ? o + M.e + 1 : o, s, C);
        }
        return M;
      };
    }();
    function I(e, t, r, n) {
      var i, o, s, a, l2, f2, g, h, v, S2 = e.constructor;
      e: if (t != null) {
        if (h = e.d, !h) return e;
        for (i = 1, a = h[0]; a >= 10; a /= 10) i++;
        if (o = t - i, o < 0) o += O, s = t, g = h[v = 0], l2 = g / J(10, i - s - 1) % 10 | 0;
        else if (v = Math.ceil((o + 1) / O), a = h.length, v >= a) if (n) {
          for (; a++ <= v; ) h.push(0);
          g = l2 = 0, i = 1, o %= O, s = o - O + 1;
        } else break e;
        else {
          for (g = a = h[v], i = 1; a >= 10; a /= 10) i++;
          o %= O, s = o - O + i, l2 = s < 0 ? 0 : g / J(10, i - s - 1) % 10 | 0;
        }
        if (n = n || t < 0 || h[v + 1] !== void 0 || (s < 0 ? g : g % J(10, i - s - 1)), f2 = r < 4 ? (l2 || n) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : l2 > 5 || l2 == 5 && (r == 4 || n || r == 6 && (o > 0 ? s > 0 ? g / J(10, i - s) : 0 : h[v - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7)), t < 1 || !h[0]) return h.length = 0, f2 ? (t -= e.e + 1, h[0] = J(10, (O - t % O) % O), e.e = -t || 0) : h[0] = e.e = 0, e;
        if (o == 0 ? (h.length = v, a = 1, v--) : (h.length = v + 1, a = J(10, O - o), h[v] = s > 0 ? (g / J(10, i - s) % J(10, s) | 0) * a : 0), f2) for (; ; ) if (v == 0) {
          for (o = 1, s = h[0]; s >= 10; s /= 10) o++;
          for (s = h[0] += a, a = 1; s >= 10; s /= 10) a++;
          o != a && (e.e++, h[0] == ce && (h[0] = 1));
          break;
        } else {
          if (h[v] += a, h[v] != ce) break;
          h[v--] = 0, a = 1;
        }
        for (o = h.length; h[--o] === 0; ) h.pop();
      }
      return _ && (e.e > S2.maxE ? (e.d = null, e.e = NaN) : e.e < S2.minE && (e.e = 0, e.d = [0])), e;
    }
    __name(I, "I");
    function ge(e, t, r) {
      if (!e.isFinite()) return xo(e);
      var n, i = e.e, o = z(e.d), s = o.length;
      return t ? (r && (n = r - s) > 0 ? o = o.charAt(0) + "." + o.slice(1) + ke(n) : s > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (e.e < 0 ? "e" : "e+") + e.e) : i < 0 ? (o = "0." + ke(-i - 1) + o, r && (n = r - s) > 0 && (o += ke(n))) : i >= s ? (o += ke(i + 1 - s), r && (n = r - i - 1) > 0 && (o = o + "." + ke(n))) : ((n = i + 1) < s && (o = o.slice(0, n) + "." + o.slice(n)), r && (n = r - s) > 0 && (i + 1 === s && (o += "."), o += ke(n))), o;
    }
    __name(ge, "ge");
    function Tr(e, t) {
      var r = e[0];
      for (t *= O; r >= 10; r /= 10) t++;
      return t;
    }
    __name(Tr, "Tr");
    function Pr(e, t, r) {
      if (t > Bl) throw _ = true, r && (e.precision = r), Error(fo);
      return I(new e(br), t, 1, true);
    }
    __name(Pr, "Pr");
    function fe(e, t, r) {
      if (t > kn) throw Error(fo);
      return I(new e(xr), t, r, true);
    }
    __name(fe, "fe");
    function wo(e) {
      var t = e.length - 1, r = t * O + 1;
      if (t = e[t], t) {
        for (; t % 10 == 0; t /= 10) r--;
        for (t = e[0]; t >= 10; t /= 10) r++;
      }
      return r;
    }
    __name(wo, "wo");
    function ke(e) {
      for (var t = ""; e--; ) t += "0";
      return t;
    }
    __name(ke, "ke");
    function Eo(e, t, r, n) {
      var i, o = new e(1), s = Math.ceil(n / O + 4);
      for (_ = false; ; ) {
        if (r % 2 && (o = o.times(t), co(o.d, s) && (i = true)), r = X(r / 2), r === 0) {
          r = o.d.length - 1, i && o.d[r] === 0 && ++o.d[r];
          break;
        }
        t = t.times(t), co(t.d, s);
      }
      return _ = true, o;
    }
    __name(Eo, "Eo");
    function uo(e) {
      return e.d[e.d.length - 1] & 1;
    }
    __name(uo, "uo");
    function bo(e, t, r) {
      for (var n, i, o = new e(t[0]), s = 0; ++s < t.length; ) {
        if (i = new e(t[s]), !i.s) {
          o = i;
          break;
        }
        n = o.cmp(i), (n === r || n === 0 && o.s === r) && (o = i);
      }
      return o;
    }
    __name(bo, "bo");
    function In(e, t) {
      var r, n, i, o, s, a, l2, f2 = 0, g = 0, h = 0, v = e.constructor, S2 = v.rounding, C = v.precision;
      if (!e.d || !e.d[0] || e.e > 17) return new v(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : NaN);
      for (t == null ? (_ = false, l2 = C) : l2 = t, a = new v(0.03125); e.e > -2; ) e = e.times(a), h += 5;
      for (n = Math.log(J(2, h)) / Math.LN10 * 2 + 5 | 0, l2 += n, r = o = s = new v(1), v.precision = l2; ; ) {
        if (o = I(o.times(e), l2, 1), r = r.times(++g), a = s.plus(q(o, r, l2, 1)), z(a.d).slice(0, l2) === z(s.d).slice(0, l2)) {
          for (i = h; i--; ) s = I(s.times(s), l2, 1);
          if (t == null) if (f2 < 3 && St(s.d, l2 - n, S2, f2)) v.precision = l2 += 10, r = o = a = new v(1), g = 0, f2++;
          else return I(s, v.precision = C, S2, _ = true);
          else return v.precision = C, s;
        }
        s = a;
      }
    }
    __name(In, "In");
    function Ie(e, t) {
      var r, n, i, o, s, a, l2, f2, g, h, v, S2 = 1, C = 10, R = e, D = R.d, M = R.constructor, U = M.rounding, k2 = M.precision;
      if (R.s < 0 || !D || !D[0] || !R.e && D[0] == 1 && D.length == 1) return new M(D && !D[0] ? -1 / 0 : R.s != 1 ? NaN : D ? 0 : R);
      if (t == null ? (_ = false, g = k2) : g = t, M.precision = g += C, r = z(D), n = r.charAt(0), Math.abs(o = R.e) < 15e14) {
        for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3; ) R = R.times(e), r = z(R.d), n = r.charAt(0), S2++;
        o = R.e, n > 1 ? (R = new M("0." + r), o++) : R = new M(n + "." + r.slice(1));
      } else return f2 = Pr(M, g + 2, k2).times(o + ""), R = Ie(new M(n + "." + r.slice(1)), g - C).plus(f2), M.precision = k2, t == null ? I(R, k2, U, _ = true) : R;
      for (h = R, l2 = s = R = q(R.minus(1), R.plus(1), g, 1), v = I(R.times(R), g, 1), i = 3; ; ) {
        if (s = I(s.times(v), g, 1), f2 = l2.plus(q(s, new M(i), g, 1)), z(f2.d).slice(0, g) === z(l2.d).slice(0, g)) if (l2 = l2.times(2), o !== 0 && (l2 = l2.plus(Pr(M, g + 2, k2).times(o + ""))), l2 = q(l2, new M(S2), g, 1), t == null) if (St(l2.d, g - C, U, a)) M.precision = g += C, f2 = s = R = q(h.minus(1), h.plus(1), g, 1), v = I(R.times(R), g, 1), i = a = 1;
        else return I(l2, M.precision = k2, U, _ = true);
        else return M.precision = k2, l2;
        l2 = f2, i += 2;
      }
    }
    __name(Ie, "Ie");
    function xo(e) {
      return String(e.s * e.s / 0);
    }
    __name(xo, "xo");
    function Er(e, t) {
      var r, n, i;
      for ((r = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (n = t.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : r < 0 && (r = t.length), n = 0; t.charCodeAt(n) === 48; n++) ;
      for (i = t.length; t.charCodeAt(i - 1) === 48; --i) ;
      if (t = t.slice(n, i), t) {
        if (i -= n, e.e = r = r - n - 1, e.d = [], n = (r + 1) % O, r < 0 && (n += O), n < i) {
          for (n && e.d.push(+t.slice(0, n)), i -= O; n < i; ) e.d.push(+t.slice(n, n += O));
          t = t.slice(n), n = O - t.length;
        } else n -= i;
        for (; n--; ) t += "0";
        e.d.push(+t), _ && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
      } else e.e = 0, e.d = [0];
      return e;
    }
    __name(Er, "Er");
    function $l(e, t) {
      var r, n, i, o, s, a, l2, f2, g;
      if (t.indexOf("_") > -1) {
        if (t = t.replace(/(\d)_(?=\d)/g, "$1"), yo.test(t)) return Er(e, t);
      } else if (t === "Infinity" || t === "NaN") return +t || (e.s = NaN), e.e = NaN, e.d = null, e;
      if (Fl.test(t)) r = 16, t = t.toLowerCase();
      else if (Nl.test(t)) r = 2;
      else if (Ll.test(t)) r = 8;
      else throw Error(Oe + t);
      for (o = t.search(/p/i), o > 0 ? (l2 = +t.slice(o + 1), t = t.substring(2, o)) : t = t.slice(2), o = t.indexOf("."), s = o >= 0, n = e.constructor, s && (t = t.replace(".", ""), a = t.length, o = a - o, i = Eo(n, new n(r), o, o * 2)), f2 = wr(t, r, ce), g = f2.length - 1, o = g; f2[o] === 0; --o) f2.pop();
      return o < 0 ? new n(e.s * 0) : (e.e = Tr(f2, g), e.d = f2, _ = false, s && (e = q(e, i, a * 4)), l2 && (e = e.times(Math.abs(l2) < 54 ? J(2, l2) : Be.pow(2, l2))), _ = true, e);
    }
    __name($l, "$l");
    function Vl(e, t) {
      var r, n = t.d.length;
      if (n < 3) return t.isZero() ? t : et(e, 2, t, t);
      r = 1.4 * Math.sqrt(n), r = r > 16 ? 16 : r | 0, t = t.times(1 / Cr(5, r)), t = et(e, 2, t, t);
      for (var i, o = new e(5), s = new e(16), a = new e(20); r--; ) i = t.times(t), t = t.times(o.plus(i.times(s.times(i).minus(a))));
      return t;
    }
    __name(Vl, "Vl");
    function et(e, t, r, n, i) {
      var o, s, a, l2, f2 = 1, g = e.precision, h = Math.ceil(g / O);
      for (_ = false, l2 = r.times(r), a = new e(n); ; ) {
        if (s = q(a.times(l2), new e(t++ * t++), g, 1), a = i ? n.plus(s) : n.minus(s), n = q(s.times(l2), new e(t++ * t++), g, 1), s = a.plus(n), s.d[h] !== void 0) {
          for (o = h; s.d[o] === a.d[o] && o--; ) ;
          if (o == -1) break;
        }
        o = a, a = n, n = s, s = o, f2++;
      }
      return _ = true, s.d.length = h + 1, s;
    }
    __name(et, "et");
    function Cr(e, t) {
      for (var r = e; --t; ) r *= e;
      return r;
    }
    __name(Cr, "Cr");
    function Po(e, t) {
      var r, n = t.s < 0, i = fe(e, e.precision, 1), o = i.times(0.5);
      if (t = t.abs(), t.lte(o)) return Te = n ? 4 : 1, t;
      if (r = t.divToInt(i), r.isZero()) Te = n ? 3 : 2;
      else {
        if (t = t.minus(r.times(i)), t.lte(o)) return Te = uo(r) ? n ? 2 : 3 : n ? 4 : 1, t;
        Te = uo(r) ? n ? 1 : 4 : n ? 3 : 2;
      }
      return t.minus(i).abs();
    }
    __name(Po, "Po");
    function On(e, t, r, n) {
      var i, o, s, a, l2, f2, g, h, v, S2 = e.constructor, C = r !== void 0;
      if (C ? (ie(r, 1, De), n === void 0 ? n = S2.rounding : ie(n, 0, 8)) : (r = S2.precision, n = S2.rounding), !e.isFinite()) g = xo(e);
      else {
        for (g = ge(e), s = g.indexOf("."), C ? (i = 2, t == 16 ? r = r * 4 - 3 : t == 8 && (r = r * 3 - 2)) : i = t, s >= 0 && (g = g.replace(".", ""), v = new S2(1), v.e = g.length - s, v.d = wr(ge(v), 10, i), v.e = v.d.length), h = wr(g, 10, i), o = l2 = h.length; h[--l2] == 0; ) h.pop();
        if (!h[0]) g = C ? "0p+0" : "0";
        else {
          if (s < 0 ? o-- : (e = new S2(e), e.d = h, e.e = o, e = q(e, v, r, n, 0, i), h = e.d, o = e.e, f2 = mo), s = h[r], a = i / 2, f2 = f2 || h[r + 1] !== void 0, f2 = n < 4 ? (s !== void 0 || f2) && (n === 0 || n === (e.s < 0 ? 3 : 2)) : s > a || s === a && (n === 4 || f2 || n === 6 && h[r - 1] & 1 || n === (e.s < 0 ? 8 : 7)), h.length = r, f2) for (; ++h[--r] > i - 1; ) h[r] = 0, r || (++o, h.unshift(1));
          for (l2 = h.length; !h[l2 - 1]; --l2) ;
          for (s = 0, g = ""; s < l2; s++) g += Rn.charAt(h[s]);
          if (C) {
            if (l2 > 1) if (t == 16 || t == 8) {
              for (s = t == 16 ? 4 : 3, --l2; l2 % s; l2++) g += "0";
              for (h = wr(g, i, t), l2 = h.length; !h[l2 - 1]; --l2) ;
              for (s = 1, g = "1."; s < l2; s++) g += Rn.charAt(h[s]);
            } else g = g.charAt(0) + "." + g.slice(1);
            g = g + (o < 0 ? "p" : "p+") + o;
          } else if (o < 0) {
            for (; ++o; ) g = "0" + g;
            g = "0." + g;
          } else if (++o > l2) for (o -= l2; o--; ) g += "0";
          else o < l2 && (g = g.slice(0, o) + "." + g.slice(o));
        }
        g = (t == 16 ? "0x" : t == 2 ? "0b" : t == 8 ? "0o" : "") + g;
      }
      return e.s < 0 ? "-" + g : g;
    }
    __name(On, "On");
    function co(e, t) {
      if (e.length > t) return e.length = t, true;
    }
    __name(co, "co");
    function jl(e) {
      return new this(e).abs();
    }
    __name(jl, "jl");
    function Gl(e) {
      return new this(e).acos();
    }
    __name(Gl, "Gl");
    function Ql(e) {
      return new this(e).acosh();
    }
    __name(Ql, "Ql");
    function Jl(e, t) {
      return new this(e).plus(t);
    }
    __name(Jl, "Jl");
    function Wl(e) {
      return new this(e).asin();
    }
    __name(Wl, "Wl");
    function Kl(e) {
      return new this(e).asinh();
    }
    __name(Kl, "Kl");
    function Hl(e) {
      return new this(e).atan();
    }
    __name(Hl, "Hl");
    function zl(e) {
      return new this(e).atanh();
    }
    __name(zl, "zl");
    function Yl(e, t) {
      e = new this(e), t = new this(t);
      var r, n = this.precision, i = this.rounding, o = n + 4;
      return !e.s || !t.s ? r = new this(NaN) : !e.d && !t.d ? (r = fe(this, o, 1).times(t.s > 0 ? 0.25 : 0.75), r.s = e.s) : !t.d || e.isZero() ? (r = t.s < 0 ? fe(this, n, i) : new this(0), r.s = e.s) : !e.d || t.isZero() ? (r = fe(this, o, 1).times(0.5), r.s = e.s) : t.s < 0 ? (this.precision = o, this.rounding = 1, r = this.atan(q(e, t, o, 1)), t = fe(this, o, 1), this.precision = n, this.rounding = i, r = e.s < 0 ? r.minus(t) : r.plus(t)) : r = this.atan(q(e, t, o, 1)), r;
    }
    __name(Yl, "Yl");
    function Zl(e) {
      return new this(e).cbrt();
    }
    __name(Zl, "Zl");
    function Xl(e) {
      return I(e = new this(e), e.e + 1, 2);
    }
    __name(Xl, "Xl");
    function eu(e, t, r) {
      return new this(e).clamp(t, r);
    }
    __name(eu, "eu");
    function tu(e) {
      if (!e || typeof e != "object") throw Error(vr + "Object expected");
      var t, r, n, i = e.defaults === true, o = ["precision", 1, De, "rounding", 0, 8, "toExpNeg", -Xe, 0, "toExpPos", 0, Xe, "maxE", 0, Xe, "minE", -Xe, 0, "modulo", 0, 9];
      for (t = 0; t < o.length; t += 3) if (r = o[t], i && (this[r] = Sn[r]), (n = e[r]) !== void 0) if (X(n) === n && n >= o[t + 1] && n <= o[t + 2]) this[r] = n;
      else throw Error(Oe + r + ": " + n);
      if (r = "crypto", i && (this[r] = Sn[r]), (n = e[r]) !== void 0) if (n === true || n === false || n === 0 || n === 1) if (n) if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes)) this[r] = true;
      else throw Error(go);
      else this[r] = false;
      else throw Error(Oe + r + ": " + n);
      return this;
    }
    __name(tu, "tu");
    function ru(e) {
      return new this(e).cos();
    }
    __name(ru, "ru");
    function nu(e) {
      return new this(e).cosh();
    }
    __name(nu, "nu");
    function vo(e) {
      var t, r, n;
      function i(o) {
        var s, a, l2, f2 = this;
        if (!(f2 instanceof i)) return new i(o);
        if (f2.constructor = i, po(o)) {
          f2.s = o.s, _ ? !o.d || o.e > i.maxE ? (f2.e = NaN, f2.d = null) : o.e < i.minE ? (f2.e = 0, f2.d = [0]) : (f2.e = o.e, f2.d = o.d.slice()) : (f2.e = o.e, f2.d = o.d ? o.d.slice() : o.d);
          return;
        }
        if (l2 = typeof o, l2 === "number") {
          if (o === 0) {
            f2.s = 1 / o < 0 ? -1 : 1, f2.e = 0, f2.d = [0];
            return;
          }
          if (o < 0 ? (o = -o, f2.s = -1) : f2.s = 1, o === ~~o && o < 1e7) {
            for (s = 0, a = o; a >= 10; a /= 10) s++;
            _ ? s > i.maxE ? (f2.e = NaN, f2.d = null) : s < i.minE ? (f2.e = 0, f2.d = [0]) : (f2.e = s, f2.d = [o]) : (f2.e = s, f2.d = [o]);
            return;
          }
          if (o * 0 !== 0) {
            o || (f2.s = NaN), f2.e = NaN, f2.d = null;
            return;
          }
          return Er(f2, o.toString());
        }
        if (l2 === "string") return (a = o.charCodeAt(0)) === 45 ? (o = o.slice(1), f2.s = -1) : (a === 43 && (o = o.slice(1)), f2.s = 1), yo.test(o) ? Er(f2, o) : $l(f2, o);
        if (l2 === "bigint") return o < 0 ? (o = -o, f2.s = -1) : f2.s = 1, Er(f2, o.toString());
        throw Error(Oe + o);
      }
      __name(i, "i");
      if (i.prototype = A, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.EUCLID = 9, i.config = i.set = tu, i.clone = vo, i.isDecimal = po, i.abs = jl, i.acos = Gl, i.acosh = Ql, i.add = Jl, i.asin = Wl, i.asinh = Kl, i.atan = Hl, i.atanh = zl, i.atan2 = Yl, i.cbrt = Zl, i.ceil = Xl, i.clamp = eu, i.cos = ru, i.cosh = nu, i.div = iu, i.exp = ou, i.floor = su, i.hypot = au, i.ln = lu, i.log = uu, i.log10 = pu, i.log2 = cu, i.max = mu, i.min = du, i.mod = fu, i.mul = gu, i.pow = hu, i.random = yu, i.round = wu, i.sign = Eu, i.sin = bu, i.sinh = xu, i.sqrt = Pu, i.sub = vu, i.sum = Tu, i.tan = Cu, i.tanh = Au, i.trunc = Ru, e === void 0 && (e = {}), e && e.defaults !== true) for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], t = 0; t < n.length; ) e.hasOwnProperty(r = n[t++]) || (e[r] = this[r]);
      return i.config(e), i;
    }
    __name(vo, "vo");
    function iu(e, t) {
      return new this(e).div(t);
    }
    __name(iu, "iu");
    function ou(e) {
      return new this(e).exp();
    }
    __name(ou, "ou");
    function su(e) {
      return I(e = new this(e), e.e + 1, 3);
    }
    __name(su, "su");
    function au() {
      var e, t, r = new this(0);
      for (_ = false, e = 0; e < arguments.length; ) if (t = new this(arguments[e++]), t.d) r.d && (r = r.plus(t.times(t)));
      else {
        if (t.s) return _ = true, new this(1 / 0);
        r = t;
      }
      return _ = true, r.sqrt();
    }
    __name(au, "au");
    function po(e) {
      return e instanceof Be || e && e.toStringTag === ho || false;
    }
    __name(po, "po");
    function lu(e) {
      return new this(e).ln();
    }
    __name(lu, "lu");
    function uu(e, t) {
      return new this(e).log(t);
    }
    __name(uu, "uu");
    function cu(e) {
      return new this(e).log(2);
    }
    __name(cu, "cu");
    function pu(e) {
      return new this(e).log(10);
    }
    __name(pu, "pu");
    function mu() {
      return bo(this, arguments, -1);
    }
    __name(mu, "mu");
    function du() {
      return bo(this, arguments, 1);
    }
    __name(du, "du");
    function fu(e, t) {
      return new this(e).mod(t);
    }
    __name(fu, "fu");
    function gu(e, t) {
      return new this(e).mul(t);
    }
    __name(gu, "gu");
    function hu(e, t) {
      return new this(e).pow(t);
    }
    __name(hu, "hu");
    function yu(e) {
      var t, r, n, i, o = 0, s = new this(1), a = [];
      if (e === void 0 ? e = this.precision : ie(e, 1, De), n = Math.ceil(e / O), this.crypto) if (crypto.getRandomValues) for (t = crypto.getRandomValues(new Uint32Array(n)); o < n; ) i = t[o], i >= 429e7 ? t[o] = crypto.getRandomValues(new Uint32Array(1))[0] : a[o++] = i % 1e7;
      else if (crypto.randomBytes) {
        for (t = crypto.randomBytes(n *= 4); o < n; ) i = t[o] + (t[o + 1] << 8) + (t[o + 2] << 16) + ((t[o + 3] & 127) << 24), i >= 214e7 ? crypto.randomBytes(4).copy(t, o) : (a.push(i % 1e7), o += 4);
        o = n / 4;
      } else throw Error(go);
      else for (; o < n; ) a[o++] = Math.random() * 1e7 | 0;
      for (n = a[--o], e %= O, n && e && (i = J(10, O - e), a[o] = (n / i | 0) * i); a[o] === 0; o--) a.pop();
      if (o < 0) r = 0, a = [0];
      else {
        for (r = -1; a[0] === 0; r -= O) a.shift();
        for (n = 1, i = a[0]; i >= 10; i /= 10) n++;
        n < O && (r -= O - n);
      }
      return s.e = r, s.d = a, s;
    }
    __name(yu, "yu");
    function wu(e) {
      return I(e = new this(e), e.e + 1, this.rounding);
    }
    __name(wu, "wu");
    function Eu(e) {
      return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
    }
    __name(Eu, "Eu");
    function bu(e) {
      return new this(e).sin();
    }
    __name(bu, "bu");
    function xu(e) {
      return new this(e).sinh();
    }
    __name(xu, "xu");
    function Pu(e) {
      return new this(e).sqrt();
    }
    __name(Pu, "Pu");
    function vu(e, t) {
      return new this(e).sub(t);
    }
    __name(vu, "vu");
    function Tu() {
      var e = 0, t = arguments, r = new this(t[e]);
      for (_ = false; r.s && ++e < t.length; ) r = r.plus(t[e]);
      return _ = true, I(r, this.precision, this.rounding);
    }
    __name(Tu, "Tu");
    function Cu(e) {
      return new this(e).tan();
    }
    __name(Cu, "Cu");
    function Au(e) {
      return new this(e).tanh();
    }
    __name(Au, "Au");
    function Ru(e) {
      return I(e = new this(e), e.e + 1, 1);
    }
    __name(Ru, "Ru");
    A[Symbol.for("nodejs.util.inspect.custom")] = A.toString;
    A[Symbol.toStringTag] = "Decimal";
    var Be = A.constructor = vo(Sn);
    br = new Be(br);
    xr = new Be(xr);
    var he = Be;
    function tt(e) {
      return e === null ? e : Array.isArray(e) ? e.map(tt) : typeof e == "object" ? Su(e) ? ku(e) : e.constructor !== null && e.constructor.name !== "Object" ? e : Ze(e, tt) : e;
    }
    __name(tt, "tt");
    function Su(e) {
      return e !== null && typeof e == "object" && typeof e.$type == "string";
    }
    __name(Su, "Su");
    function ku({ $type: e, value: t }) {
      switch (e) {
        case "BigInt":
          return BigInt(t);
        case "Bytes": {
          let { buffer: r, byteOffset: n, byteLength: i } = w2.Buffer.from(t, "base64");
          return new Uint8Array(r, n, i);
        }
        case "DateTime":
          return new Date(t);
        case "Decimal":
          return new he(t);
        case "Json":
          return JSON.parse(t);
        default:
          Pe(t, "Unknown tagged value");
      }
    }
    __name(ku, "ku");
    d();
    u();
    c();
    p2();
    m();
    d();
    u();
    c();
    p2();
    m();
    d();
    u();
    c();
    p2();
    m();
    var ye = class {
      static {
        __name(this, "ye");
      }
      _map = /* @__PURE__ */ new Map();
      get(t) {
        return this._map.get(t)?.value;
      }
      set(t, r) {
        this._map.set(t, { value: r });
      }
      getOrCreate(t, r) {
        let n = this._map.get(t);
        if (n) return n.value;
        let i = r();
        return this.set(t, i), i;
      }
    };
    d();
    u();
    c();
    p2();
    m();
    function Me(e) {
      return e.substring(0, 1).toLowerCase() + e.substring(1);
    }
    __name(Me, "Me");
    d();
    u();
    c();
    p2();
    m();
    function To(e, t) {
      let r = {};
      for (let n of e) {
        let i = n[t];
        r[i] = n;
      }
      return r;
    }
    __name(To, "To");
    d();
    u();
    c();
    p2();
    m();
    function kt(e) {
      let t;
      return { get() {
        return t || (t = { value: e() }), t.value;
      } };
    }
    __name(kt, "kt");
    d();
    u();
    c();
    p2();
    m();
    function Co(e) {
      return { models: Dn(e.models), enums: Dn(e.enums), types: Dn(e.types) };
    }
    __name(Co, "Co");
    function Dn(e) {
      let t = {};
      for (let { name: r, ...n } of e) t[r] = n;
      return t;
    }
    __name(Dn, "Dn");
    d();
    u();
    c();
    p2();
    m();
    function rt(e) {
      return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
    }
    __name(rt, "rt");
    function Ar(e) {
      return e.toString() !== "Invalid Date";
    }
    __name(Ar, "Ar");
    d();
    u();
    c();
    p2();
    m();
    function nt(e) {
      return Be.isDecimal(e) ? true : e !== null && typeof e == "object" && typeof e.s == "number" && typeof e.e == "number" && typeof e.toFixed == "function" && Array.isArray(e.d);
    }
    __name(nt, "nt");
    d();
    u();
    c();
    p2();
    m();
    d();
    u();
    c();
    p2();
    m();
    var Ot = {};
    Pt(Ot, { ModelAction: /* @__PURE__ */ __name(() => It, "ModelAction"), datamodelEnumToSchemaEnum: /* @__PURE__ */ __name(() => Iu, "datamodelEnumToSchemaEnum") });
    d();
    u();
    c();
    p2();
    m();
    d();
    u();
    c();
    p2();
    m();
    function Iu(e) {
      return { name: e.name, values: e.values.map((t) => t.name) };
    }
    __name(Iu, "Iu");
    d();
    u();
    c();
    p2();
    m();
    var It = ((k2) => (k2.findUnique = "findUnique", k2.findUniqueOrThrow = "findUniqueOrThrow", k2.findFirst = "findFirst", k2.findFirstOrThrow = "findFirstOrThrow", k2.findMany = "findMany", k2.create = "create", k2.createMany = "createMany", k2.createManyAndReturn = "createManyAndReturn", k2.update = "update", k2.updateMany = "updateMany", k2.updateManyAndReturn = "updateManyAndReturn", k2.upsert = "upsert", k2.delete = "delete", k2.deleteMany = "deleteMany", k2.groupBy = "groupBy", k2.count = "count", k2.aggregate = "aggregate", k2.findRaw = "findRaw", k2.aggregateRaw = "aggregateRaw", k2))(It || {});
    var Ou = Le(to());
    var Du = { red: ze, gray: qi, dim: mr, bold: pr, underline: Ni, highlightSource: /* @__PURE__ */ __name((e) => e.highlight(), "highlightSource") };
    var Mu = { red: /* @__PURE__ */ __name((e) => e, "red"), gray: /* @__PURE__ */ __name((e) => e, "gray"), dim: /* @__PURE__ */ __name((e) => e, "dim"), bold: /* @__PURE__ */ __name((e) => e, "bold"), underline: /* @__PURE__ */ __name((e) => e, "underline"), highlightSource: /* @__PURE__ */ __name((e) => e, "highlightSource") };
    function _u({ message: e, originalMethod: t, isPanic: r, callArguments: n }) {
      return { functionName: `prisma.${t}()`, message: e, isPanic: r ?? false, callArguments: n };
    }
    __name(_u, "_u");
    function Nu({ functionName: e, location: t, message: r, isPanic: n, contextLines: i, callArguments: o }, s) {
      let a = [""], l2 = t ? " in" : ":";
      if (n ? (a.push(s.red(`Oops, an unknown error occurred! This is ${s.bold("on us")}, you did nothing wrong.`)), a.push(s.red(`It occurred in the ${s.bold(`\`${e}\``)} invocation${l2}`))) : a.push(s.red(`Invalid ${s.bold(`\`${e}\``)} invocation${l2}`)), t && a.push(s.underline(Fu(t))), i) {
        a.push("");
        let f2 = [i.toString()];
        o && (f2.push(o), f2.push(s.dim(")"))), a.push(f2.join("")), o && a.push("");
      } else a.push(""), o && a.push(o), a.push("");
      return a.push(r), a.join(`
`);
    }
    __name(Nu, "Nu");
    function Fu(e) {
      let t = [e.fileName];
      return e.lineNumber && t.push(String(e.lineNumber)), e.columnNumber && t.push(String(e.columnNumber)), t.join(":");
    }
    __name(Fu, "Fu");
    function Rr(e) {
      let t = e.showColors ? Du : Mu, r;
      return typeof $getTemplateParameters < "u" ? r = $getTemplateParameters(e, t) : r = _u(e), Nu(r, t);
    }
    __name(Rr, "Rr");
    d();
    u();
    c();
    p2();
    m();
    var _o = Le(Mn());
    d();
    u();
    c();
    p2();
    m();
    function ko(e, t, r) {
      let n = Io(e), i = Lu(n), o = Bu(i);
      o ? Sr(o, t, r) : t.addErrorMessage(() => "Unknown error");
    }
    __name(ko, "ko");
    function Io(e) {
      return e.errors.flatMap((t) => t.kind === "Union" ? Io(t) : [t]);
    }
    __name(Io, "Io");
    function Lu(e) {
      let t = /* @__PURE__ */ new Map(), r = [];
      for (let n of e) {
        if (n.kind !== "InvalidArgumentType") {
          r.push(n);
          continue;
        }
        let i = `${n.selectionPath.join(".")}:${n.argumentPath.join(".")}`, o = t.get(i);
        o ? t.set(i, { ...n, argument: { ...n.argument, typeNames: Uu(o.argument.typeNames, n.argument.typeNames) } }) : t.set(i, n);
      }
      return r.push(...t.values()), r;
    }
    __name(Lu, "Lu");
    function Uu(e, t) {
      return [...new Set(e.concat(t))];
    }
    __name(Uu, "Uu");
    function Bu(e) {
      return An(e, (t, r) => {
        let n = Ro(t), i = Ro(r);
        return n !== i ? n - i : So(t) - So(r);
      });
    }
    __name(Bu, "Bu");
    function Ro(e) {
      let t = 0;
      return Array.isArray(e.selectionPath) && (t += e.selectionPath.length), Array.isArray(e.argumentPath) && (t += e.argumentPath.length), t;
    }
    __name(Ro, "Ro");
    function So(e) {
      switch (e.kind) {
        case "InvalidArgumentValue":
        case "ValueTooLarge":
          return 20;
        case "InvalidArgumentType":
          return 10;
        case "RequiredArgumentMissing":
          return -10;
        default:
          return 0;
      }
    }
    __name(So, "So");
    d();
    u();
    c();
    p2();
    m();
    var le = class {
      static {
        __name(this, "le");
      }
      constructor(t, r) {
        this.name = t;
        this.value = r;
      }
      isRequired = false;
      makeRequired() {
        return this.isRequired = true, this;
      }
      write(t) {
        let { colors: { green: r } } = t.context;
        t.addMarginSymbol(r(this.isRequired ? "+" : "?")), t.write(r(this.name)), this.isRequired || t.write(r("?")), t.write(r(": ")), typeof this.value == "string" ? t.write(r(this.value)) : t.write(this.value);
      }
    };
    d();
    u();
    c();
    p2();
    m();
    d();
    u();
    c();
    p2();
    m();
    Do();
    d();
    u();
    c();
    p2();
    m();
    var it = class {
      static {
        __name(this, "it");
      }
      constructor(t = 0, r) {
        this.context = r;
        this.currentIndent = t;
      }
      lines = [];
      currentLine = "";
      currentIndent = 0;
      marginSymbol;
      afterNextNewLineCallback;
      write(t) {
        return typeof t == "string" ? this.currentLine += t : t.write(this), this;
      }
      writeJoined(t, r, n = (i, o) => o.write(i)) {
        let i = r.length - 1;
        for (let o = 0; o < r.length; o++) n(r[o], this), o !== i && this.write(t);
        return this;
      }
      writeLine(t) {
        return this.write(t).newLine();
      }
      newLine() {
        this.lines.push(this.indentedCurrentLine()), this.currentLine = "", this.marginSymbol = void 0;
        let t = this.afterNextNewLineCallback;
        return this.afterNextNewLineCallback = void 0, t?.(), this;
      }
      withIndent(t) {
        return this.indent(), t(this), this.unindent(), this;
      }
      afterNextNewline(t) {
        return this.afterNextNewLineCallback = t, this;
      }
      indent() {
        return this.currentIndent++, this;
      }
      unindent() {
        return this.currentIndent > 0 && this.currentIndent--, this;
      }
      addMarginSymbol(t) {
        return this.marginSymbol = t, this;
      }
      toString() {
        return this.lines.concat(this.indentedCurrentLine()).join(`
`);
      }
      getCurrentLineLength() {
        return this.currentLine.length;
      }
      indentedCurrentLine() {
        let t = this.currentLine.padStart(this.currentLine.length + 2 * this.currentIndent);
        return this.marginSymbol ? this.marginSymbol + t.slice(1) : t;
      }
    };
    Oo();
    d();
    u();
    c();
    p2();
    m();
    d();
    u();
    c();
    p2();
    m();
    var kr = class {
      static {
        __name(this, "kr");
      }
      constructor(t) {
        this.value = t;
      }
      write(t) {
        t.write(this.value);
      }
      markAsError() {
        this.value.markAsError();
      }
    };
    d();
    u();
    c();
    p2();
    m();
    var Ir = /* @__PURE__ */ __name((e) => e, "Ir");
    var Or = { bold: Ir, red: Ir, green: Ir, dim: Ir, enabled: false };
    var Mo = { bold: pr, red: ze, green: Fi, dim: mr, enabled: true };
    var ot = { write(e) {
      e.writeLine(",");
    } };
    d();
    u();
    c();
    p2();
    m();
    var we = class {
      static {
        __name(this, "we");
      }
      constructor(t) {
        this.contents = t;
      }
      isUnderlined = false;
      color = /* @__PURE__ */ __name((t) => t, "color");
      underline() {
        return this.isUnderlined = true, this;
      }
      setColor(t) {
        return this.color = t, this;
      }
      write(t) {
        let r = t.getCurrentLineLength();
        t.write(this.color(this.contents)), this.isUnderlined && t.afterNextNewline(() => {
          t.write(" ".repeat(r)).writeLine(this.color("~".repeat(this.contents.length)));
        });
      }
    };
    d();
    u();
    c();
    p2();
    m();
    var _e = class {
      static {
        __name(this, "_e");
      }
      hasError = false;
      markAsError() {
        return this.hasError = true, this;
      }
    };
    var st = class extends _e {
      static {
        __name(this, "st");
      }
      items = [];
      addItem(t) {
        return this.items.push(new kr(t)), this;
      }
      getField(t) {
        return this.items[t];
      }
      getPrintWidth() {
        return this.items.length === 0 ? 2 : Math.max(...this.items.map((r) => r.value.getPrintWidth())) + 2;
      }
      write(t) {
        if (this.items.length === 0) {
          this.writeEmpty(t);
          return;
        }
        this.writeWithItems(t);
      }
      writeEmpty(t) {
        let r = new we("[]");
        this.hasError && r.setColor(t.context.colors.red).underline(), t.write(r);
      }
      writeWithItems(t) {
        let { colors: r } = t.context;
        t.writeLine("[").withIndent(() => t.writeJoined(ot, this.items).newLine()).write("]"), this.hasError && t.afterNextNewline(() => {
          t.writeLine(r.red("~".repeat(this.getPrintWidth())));
        });
      }
      asObject() {
      }
    };
    var at = class e extends _e {
      static {
        __name(this, "e");
      }
      fields = {};
      suggestions = [];
      addField(t) {
        this.fields[t.name] = t;
      }
      addSuggestion(t) {
        this.suggestions.push(t);
      }
      getField(t) {
        return this.fields[t];
      }
      getDeepField(t) {
        let [r, ...n] = t, i = this.getField(r);
        if (!i) return;
        let o = i;
        for (let s of n) {
          let a;
          if (o.value instanceof e ? a = o.value.getField(s) : o.value instanceof st && (a = o.value.getField(Number(s))), !a) return;
          o = a;
        }
        return o;
      }
      getDeepFieldValue(t) {
        return t.length === 0 ? this : this.getDeepField(t)?.value;
      }
      hasField(t) {
        return !!this.getField(t);
      }
      removeAllFields() {
        this.fields = {};
      }
      removeField(t) {
        delete this.fields[t];
      }
      getFields() {
        return this.fields;
      }
      isEmpty() {
        return Object.keys(this.fields).length === 0;
      }
      getFieldValue(t) {
        return this.getField(t)?.value;
      }
      getDeepSubSelectionValue(t) {
        let r = this;
        for (let n of t) {
          if (!(r instanceof e)) return;
          let i = r.getSubSelectionValue(n);
          if (!i) return;
          r = i;
        }
        return r;
      }
      getDeepSelectionParent(t) {
        let r = this.getSelectionParent();
        if (!r) return;
        let n = r;
        for (let i of t) {
          let o = n.value.getFieldValue(i);
          if (!o || !(o instanceof e)) return;
          let s = o.getSelectionParent();
          if (!s) return;
          n = s;
        }
        return n;
      }
      getSelectionParent() {
        let t = this.getField("select")?.value.asObject();
        if (t) return { kind: "select", value: t };
        let r = this.getField("include")?.value.asObject();
        if (r) return { kind: "include", value: r };
      }
      getSubSelectionValue(t) {
        return this.getSelectionParent()?.value.fields[t].value;
      }
      getPrintWidth() {
        let t = Object.values(this.fields);
        return t.length == 0 ? 2 : Math.max(...t.map((n) => n.getPrintWidth())) + 2;
      }
      write(t) {
        let r = Object.values(this.fields);
        if (r.length === 0 && this.suggestions.length === 0) {
          this.writeEmpty(t);
          return;
        }
        this.writeWithContents(t, r);
      }
      asObject() {
        return this;
      }
      writeEmpty(t) {
        let r = new we("{}");
        this.hasError && r.setColor(t.context.colors.red).underline(), t.write(r);
      }
      writeWithContents(t, r) {
        t.writeLine("{").withIndent(() => {
          t.writeJoined(ot, [...r, ...this.suggestions]).newLine();
        }), t.write("}"), this.hasError && t.afterNextNewline(() => {
          t.writeLine(t.context.colors.red("~".repeat(this.getPrintWidth())));
        });
      }
    };
    d();
    u();
    c();
    p2();
    m();
    var K = class extends _e {
      static {
        __name(this, "K");
      }
      constructor(r) {
        super();
        this.text = r;
      }
      getPrintWidth() {
        return this.text.length;
      }
      write(r) {
        let n = new we(this.text);
        this.hasError && n.underline().setColor(r.context.colors.red), r.write(n);
      }
      asObject() {
      }
    };
    d();
    u();
    c();
    p2();
    m();
    var Dt = class {
      static {
        __name(this, "Dt");
      }
      fields = [];
      addField(t, r) {
        return this.fields.push({ write(n) {
          let { green: i, dim: o } = n.context.colors;
          n.write(i(o(`${t}: ${r}`))).addMarginSymbol(i(o("+")));
        } }), this;
      }
      write(t) {
        let { colors: { green: r } } = t.context;
        t.writeLine(r("{")).withIndent(() => {
          t.writeJoined(ot, this.fields).newLine();
        }).write(r("}")).addMarginSymbol(r("+"));
      }
    };
    function Sr(e, t, r) {
      switch (e.kind) {
        case "MutuallyExclusiveFields":
          qu(e, t);
          break;
        case "IncludeOnScalar":
          $u(e, t);
          break;
        case "EmptySelection":
          Vu(e, t, r);
          break;
        case "UnknownSelectionField":
          Ju(e, t);
          break;
        case "InvalidSelectionValue":
          Wu(e, t);
          break;
        case "UnknownArgument":
          Ku(e, t);
          break;
        case "UnknownInputField":
          Hu(e, t);
          break;
        case "RequiredArgumentMissing":
          zu(e, t);
          break;
        case "InvalidArgumentType":
          Yu(e, t);
          break;
        case "InvalidArgumentValue":
          Zu(e, t);
          break;
        case "ValueTooLarge":
          Xu(e, t);
          break;
        case "SomeFieldsMissing":
          ec(e, t);
          break;
        case "TooManyFieldsGiven":
          tc(e, t);
          break;
        case "Union":
          ko(e, t, r);
          break;
        default:
          throw new Error("not implemented: " + e.kind);
      }
    }
    __name(Sr, "Sr");
    function qu(e, t) {
      let r = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      r && (r.getField(e.firstField)?.markAsError(), r.getField(e.secondField)?.markAsError()), t.addErrorMessage((n) => `Please ${n.bold("either")} use ${n.green(`\`${e.firstField}\``)} or ${n.green(`\`${e.secondField}\``)}, but ${n.red("not both")} at the same time.`);
    }
    __name(qu, "qu");
    function $u(e, t) {
      let [r, n] = Mt(e.selectionPath), i = e.outputType, o = t.arguments.getDeepSelectionParent(r)?.value;
      if (o && (o.getField(n)?.markAsError(), i)) for (let s of i.fields) s.isRelation && o.addSuggestion(new le(s.name, "true"));
      t.addErrorMessage((s) => {
        let a = `Invalid scalar field ${s.red(`\`${n}\``)} for ${s.bold("include")} statement`;
        return i ? a += ` on model ${s.bold(i.name)}. ${_t(s)}` : a += ".", a += `
Note that ${s.bold("include")} statements only accept relation fields.`, a;
      });
    }
    __name($u, "$u");
    function Vu(e, t, r) {
      let n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      if (n) {
        let i = n.getField("omit")?.value.asObject();
        if (i) {
          ju(e, t, i);
          return;
        }
        if (n.hasField("select")) {
          Gu(e, t);
          return;
        }
      }
      if (r?.[Me(e.outputType.name)]) {
        Qu(e, t);
        return;
      }
      t.addErrorMessage(() => `Unknown field at "${e.selectionPath.join(".")} selection"`);
    }
    __name(Vu, "Vu");
    function ju(e, t, r) {
      r.removeAllFields();
      for (let n of e.outputType.fields) r.addSuggestion(new le(n.name, "false"));
      t.addErrorMessage((n) => `The ${n.red("omit")} statement includes every field of the model ${n.bold(e.outputType.name)}. At least one field must be included in the result`);
    }
    __name(ju, "ju");
    function Gu(e, t) {
      let r = e.outputType, n = t.arguments.getDeepSelectionParent(e.selectionPath)?.value, i = n?.isEmpty() ?? false;
      n && (n.removeAllFields(), Lo(n, r)), t.addErrorMessage((o) => i ? `The ${o.red("`select`")} statement for type ${o.bold(r.name)} must not be empty. ${_t(o)}` : `The ${o.red("`select`")} statement for type ${o.bold(r.name)} needs ${o.bold("at least one truthy value")}.`);
    }
    __name(Gu, "Gu");
    function Qu(e, t) {
      let r = new Dt();
      for (let i of e.outputType.fields) i.isRelation || r.addField(i.name, "false");
      let n = new le("omit", r).makeRequired();
      if (e.selectionPath.length === 0) t.arguments.addSuggestion(n);
      else {
        let [i, o] = Mt(e.selectionPath), a = t.arguments.getDeepSelectionParent(i)?.value.asObject()?.getField(o);
        if (a) {
          let l2 = a?.value.asObject() ?? new at();
          l2.addSuggestion(n), a.value = l2;
        }
      }
      t.addErrorMessage((i) => `The global ${i.red("omit")} configuration excludes every field of the model ${i.bold(e.outputType.name)}. At least one field must be included in the result`);
    }
    __name(Qu, "Qu");
    function Ju(e, t) {
      let r = Uo(e.selectionPath, t);
      if (r.parentKind !== "unknown") {
        r.field.markAsError();
        let n = r.parent;
        switch (r.parentKind) {
          case "select":
            Lo(n, e.outputType);
            break;
          case "include":
            rc(n, e.outputType);
            break;
          case "omit":
            nc(n, e.outputType);
            break;
        }
      }
      t.addErrorMessage((n) => {
        let i = [`Unknown field ${n.red(`\`${r.fieldName}\``)}`];
        return r.parentKind !== "unknown" && i.push(`for ${n.bold(r.parentKind)} statement`), i.push(`on model ${n.bold(`\`${e.outputType.name}\``)}.`), i.push(_t(n)), i.join(" ");
      });
    }
    __name(Ju, "Ju");
    function Wu(e, t) {
      let r = Uo(e.selectionPath, t);
      r.parentKind !== "unknown" && r.field.value.markAsError(), t.addErrorMessage((n) => `Invalid value for selection field \`${n.red(r.fieldName)}\`: ${e.underlyingError}`);
    }
    __name(Wu, "Wu");
    function Ku(e, t) {
      let r = e.argumentPath[0], n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      n && (n.getField(r)?.markAsError(), ic(n, e.arguments)), t.addErrorMessage((i) => No(i, r, e.arguments.map((o) => o.name)));
    }
    __name(Ku, "Ku");
    function Hu(e, t) {
      let [r, n] = Mt(e.argumentPath), i = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      if (i) {
        i.getDeepField(e.argumentPath)?.markAsError();
        let o = i.getDeepFieldValue(r)?.asObject();
        o && Bo(o, e.inputType);
      }
      t.addErrorMessage((o) => No(o, n, e.inputType.fields.map((s) => s.name)));
    }
    __name(Hu, "Hu");
    function No(e, t, r) {
      let n = [`Unknown argument \`${e.red(t)}\`.`], i = sc(t, r);
      return i && n.push(`Did you mean \`${e.green(i)}\`?`), r.length > 0 && n.push(_t(e)), n.join(" ");
    }
    __name(No, "No");
    function zu(e, t) {
      let r;
      t.addErrorMessage((l2) => r?.value instanceof K && r.value.text === "null" ? `Argument \`${l2.green(o)}\` must not be ${l2.red("null")}.` : `Argument \`${l2.green(o)}\` is missing.`);
      let n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      if (!n) return;
      let [i, o] = Mt(e.argumentPath), s = new Dt(), a = n.getDeepFieldValue(i)?.asObject();
      if (a) if (r = a.getField(o), r && a.removeField(o), e.inputTypes.length === 1 && e.inputTypes[0].kind === "object") {
        for (let l2 of e.inputTypes[0].fields) s.addField(l2.name, l2.typeNames.join(" | "));
        a.addSuggestion(new le(o, s).makeRequired());
      } else {
        let l2 = e.inputTypes.map(Fo).join(" | ");
        a.addSuggestion(new le(o, l2).makeRequired());
      }
    }
    __name(zu, "zu");
    function Fo(e) {
      return e.kind === "list" ? `${Fo(e.elementType)}[]` : e.name;
    }
    __name(Fo, "Fo");
    function Yu(e, t) {
      let r = e.argument.name, n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      n && n.getDeepFieldValue(e.argumentPath)?.markAsError(), t.addErrorMessage((i) => {
        let o = Dr("or", e.argument.typeNames.map((s) => i.green(s)));
        return `Argument \`${i.bold(r)}\`: Invalid value provided. Expected ${o}, provided ${i.red(e.inferredType)}.`;
      });
    }
    __name(Yu, "Yu");
    function Zu(e, t) {
      let r = e.argument.name, n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      n && n.getDeepFieldValue(e.argumentPath)?.markAsError(), t.addErrorMessage((i) => {
        let o = [`Invalid value for argument \`${i.bold(r)}\``];
        if (e.underlyingError && o.push(`: ${e.underlyingError}`), o.push("."), e.argument.typeNames.length > 0) {
          let s = Dr("or", e.argument.typeNames.map((a) => i.green(a)));
          o.push(` Expected ${s}.`);
        }
        return o.join("");
      });
    }
    __name(Zu, "Zu");
    function Xu(e, t) {
      let r = e.argument.name, n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject(), i;
      if (n) {
        let s = n.getDeepField(e.argumentPath)?.value;
        s?.markAsError(), s instanceof K && (i = s.text);
      }
      t.addErrorMessage((o) => {
        let s = ["Unable to fit value"];
        return i && s.push(o.red(i)), s.push(`into a 64-bit signed integer for field \`${o.bold(r)}\``), s.join(" ");
      });
    }
    __name(Xu, "Xu");
    function ec(e, t) {
      let r = e.argumentPath[e.argumentPath.length - 1], n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      if (n) {
        let i = n.getDeepFieldValue(e.argumentPath)?.asObject();
        i && Bo(i, e.inputType);
      }
      t.addErrorMessage((i) => {
        let o = [`Argument \`${i.bold(r)}\` of type ${i.bold(e.inputType.name)} needs`];
        return e.constraints.minFieldCount === 1 ? e.constraints.requiredFields ? o.push(`${i.green("at least one of")} ${Dr("or", e.constraints.requiredFields.map((s) => `\`${i.bold(s)}\``))} arguments.`) : o.push(`${i.green("at least one")} argument.`) : o.push(`${i.green(`at least ${e.constraints.minFieldCount}`)} arguments.`), o.push(_t(i)), o.join(" ");
      });
    }
    __name(ec, "ec");
    function tc(e, t) {
      let r = e.argumentPath[e.argumentPath.length - 1], n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject(), i = [];
      if (n) {
        let o = n.getDeepFieldValue(e.argumentPath)?.asObject();
        o && (o.markAsError(), i = Object.keys(o.getFields()));
      }
      t.addErrorMessage((o) => {
        let s = [`Argument \`${o.bold(r)}\` of type ${o.bold(e.inputType.name)} needs`];
        return e.constraints.minFieldCount === 1 && e.constraints.maxFieldCount == 1 ? s.push(`${o.green("exactly one")} argument,`) : e.constraints.maxFieldCount == 1 ? s.push(`${o.green("at most one")} argument,`) : s.push(`${o.green(`at most ${e.constraints.maxFieldCount}`)} arguments,`), s.push(`but you provided ${Dr("and", i.map((a) => o.red(a)))}. Please choose`), e.constraints.maxFieldCount === 1 ? s.push("one.") : s.push(`${e.constraints.maxFieldCount}.`), s.join(" ");
      });
    }
    __name(tc, "tc");
    function Lo(e, t) {
      for (let r of t.fields) e.hasField(r.name) || e.addSuggestion(new le(r.name, "true"));
    }
    __name(Lo, "Lo");
    function rc(e, t) {
      for (let r of t.fields) r.isRelation && !e.hasField(r.name) && e.addSuggestion(new le(r.name, "true"));
    }
    __name(rc, "rc");
    function nc(e, t) {
      for (let r of t.fields) !e.hasField(r.name) && !r.isRelation && e.addSuggestion(new le(r.name, "true"));
    }
    __name(nc, "nc");
    function ic(e, t) {
      for (let r of t) e.hasField(r.name) || e.addSuggestion(new le(r.name, r.typeNames.join(" | ")));
    }
    __name(ic, "ic");
    function Uo(e, t) {
      let [r, n] = Mt(e), i = t.arguments.getDeepSubSelectionValue(r)?.asObject();
      if (!i) return { parentKind: "unknown", fieldName: n };
      let o = i.getFieldValue("select")?.asObject(), s = i.getFieldValue("include")?.asObject(), a = i.getFieldValue("omit")?.asObject(), l2 = o?.getField(n);
      return o && l2 ? { parentKind: "select", parent: o, field: l2, fieldName: n } : (l2 = s?.getField(n), s && l2 ? { parentKind: "include", field: l2, parent: s, fieldName: n } : (l2 = a?.getField(n), a && l2 ? { parentKind: "omit", field: l2, parent: a, fieldName: n } : { parentKind: "unknown", fieldName: n }));
    }
    __name(Uo, "Uo");
    function Bo(e, t) {
      if (t.kind === "object") for (let r of t.fields) e.hasField(r.name) || e.addSuggestion(new le(r.name, r.typeNames.join(" | ")));
    }
    __name(Bo, "Bo");
    function Mt(e) {
      let t = [...e], r = t.pop();
      if (!r) throw new Error("unexpected empty path");
      return [t, r];
    }
    __name(Mt, "Mt");
    function _t({ green: e, enabled: t }) {
      return "Available options are " + (t ? `listed in ${e("green")}` : "marked with ?") + ".";
    }
    __name(_t, "_t");
    function Dr(e, t) {
      if (t.length === 1) return t[0];
      let r = [...t], n = r.pop();
      return `${r.join(", ")} ${e} ${n}`;
    }
    __name(Dr, "Dr");
    var oc = 3;
    function sc(e, t) {
      let r = 1 / 0, n;
      for (let i of t) {
        let o = (0, _o.default)(e, i);
        o > oc || o < r && (r = o, n = i);
      }
      return n;
    }
    __name(sc, "sc");
    d();
    u();
    c();
    p2();
    m();
    d();
    u();
    c();
    p2();
    m();
    var Nt = class {
      static {
        __name(this, "Nt");
      }
      modelName;
      name;
      typeName;
      isList;
      isEnum;
      constructor(t, r, n, i, o) {
        this.modelName = t, this.name = r, this.typeName = n, this.isList = i, this.isEnum = o;
      }
      _toGraphQLInputType() {
        let t = this.isList ? "List" : "", r = this.isEnum ? "Enum" : "";
        return `${t}${r}${this.typeName}FieldRefInput<${this.modelName}>`;
      }
    };
    function lt(e) {
      return e instanceof Nt;
    }
    __name(lt, "lt");
    d();
    u();
    c();
    p2();
    m();
    var Mr = Symbol();
    var Nn = /* @__PURE__ */ new WeakMap();
    var Ce = class {
      static {
        __name(this, "Ce");
      }
      constructor(t) {
        t === Mr ? Nn.set(this, `Prisma.${this._getName()}`) : Nn.set(this, `new Prisma.${this._getNamespace()}.${this._getName()}()`);
      }
      _getName() {
        return this.constructor.name;
      }
      toString() {
        return Nn.get(this);
      }
    };
    var Ft = class extends Ce {
      static {
        __name(this, "Ft");
      }
      _getNamespace() {
        return "NullTypes";
      }
    };
    var Lt = class extends Ft {
      static {
        __name(this, "Lt");
      }
      #e;
    };
    Fn(Lt, "DbNull");
    var Ut = class extends Ft {
      static {
        __name(this, "Ut");
      }
      #e;
    };
    Fn(Ut, "JsonNull");
    var Bt = class extends Ft {
      static {
        __name(this, "Bt");
      }
      #e;
    };
    Fn(Bt, "AnyNull");
    var _r = { classes: { DbNull: Lt, JsonNull: Ut, AnyNull: Bt }, instances: { DbNull: new Lt(Mr), JsonNull: new Ut(Mr), AnyNull: new Bt(Mr) } };
    function Fn(e, t) {
      Object.defineProperty(e, "name", { value: t, configurable: true });
    }
    __name(Fn, "Fn");
    d();
    u();
    c();
    p2();
    m();
    var qo = ": ";
    var Nr = class {
      static {
        __name(this, "Nr");
      }
      constructor(t, r) {
        this.name = t;
        this.value = r;
      }
      hasError = false;
      markAsError() {
        this.hasError = true;
      }
      getPrintWidth() {
        return this.name.length + this.value.getPrintWidth() + qo.length;
      }
      write(t) {
        let r = new we(this.name);
        this.hasError && r.underline().setColor(t.context.colors.red), t.write(r).write(qo).write(this.value);
      }
    };
    var Ln = class {
      static {
        __name(this, "Ln");
      }
      arguments;
      errorMessages = [];
      constructor(t) {
        this.arguments = t;
      }
      write(t) {
        t.write(this.arguments);
      }
      addErrorMessage(t) {
        this.errorMessages.push(t);
      }
      renderAllMessages(t) {
        return this.errorMessages.map((r) => r(t)).join(`
`);
      }
    };
    function ut(e) {
      return new Ln($o(e));
    }
    __name(ut, "ut");
    function $o(e) {
      let t = new at();
      for (let [r, n] of Object.entries(e)) {
        let i = new Nr(r, Vo(n));
        t.addField(i);
      }
      return t;
    }
    __name($o, "$o");
    function Vo(e) {
      if (typeof e == "string") return new K(JSON.stringify(e));
      if (typeof e == "number" || typeof e == "boolean") return new K(String(e));
      if (typeof e == "bigint") return new K(`${e}n`);
      if (e === null) return new K("null");
      if (e === void 0) return new K("undefined");
      if (nt(e)) return new K(`new Prisma.Decimal("${e.toFixed()}")`);
      if (e instanceof Uint8Array) return w2.Buffer.isBuffer(e) ? new K(`Buffer.alloc(${e.byteLength})`) : new K(`new Uint8Array(${e.byteLength})`);
      if (e instanceof Date) {
        let t = Ar(e) ? e.toISOString() : "Invalid Date";
        return new K(`new Date("${t}")`);
      }
      return e instanceof Ce ? new K(`Prisma.${e._getName()}`) : lt(e) ? new K(`prisma.${Me(e.modelName)}.$fields.${e.name}`) : Array.isArray(e) ? ac(e) : typeof e == "object" ? $o(e) : new K(Object.prototype.toString.call(e));
    }
    __name(Vo, "Vo");
    function ac(e) {
      let t = new st();
      for (let r of e) t.addItem(Vo(r));
      return t;
    }
    __name(ac, "ac");
    function Fr(e, t) {
      let r = t === "pretty" ? Mo : Or, n = e.renderAllMessages(r), i = new it(0, { colors: r }).write(e).toString();
      return { message: n, args: i };
    }
    __name(Fr, "Fr");
    function Lr({ args: e, errors: t, errorFormat: r, callsite: n, originalMethod: i, clientVersion: o, globalOmit: s }) {
      let a = ut(e);
      for (let h of t) Sr(h, a, s);
      let { message: l2, args: f2 } = Fr(a, r), g = Rr({ message: l2, callsite: n, originalMethod: i, showColors: r === "pretty", callArguments: f2 });
      throw new Z(g, { clientVersion: o });
    }
    __name(Lr, "Lr");
    d();
    u();
    c();
    p2();
    m();
    d();
    u();
    c();
    p2();
    m();
    function Ee(e) {
      return e.replace(/^./, (t) => t.toLowerCase());
    }
    __name(Ee, "Ee");
    d();
    u();
    c();
    p2();
    m();
    function Go(e, t, r) {
      let n = Ee(r);
      return !t.result || !(t.result.$allModels || t.result[n]) ? e : lc({ ...e, ...jo(t.name, e, t.result.$allModels), ...jo(t.name, e, t.result[n]) });
    }
    __name(Go, "Go");
    function lc(e) {
      let t = new ye(), r = /* @__PURE__ */ __name((n, i) => t.getOrCreate(n, () => i.has(n) ? [n] : (i.add(n), e[n] ? e[n].needs.flatMap((o) => r(o, i)) : [n])), "r");
      return Ze(e, (n) => ({ ...n, needs: r(n.name, /* @__PURE__ */ new Set()) }));
    }
    __name(lc, "lc");
    function jo(e, t, r) {
      return r ? Ze(r, ({ needs: n, compute: i }, o) => ({ name: o, needs: n ? Object.keys(n).filter((s) => n[s]) : [], compute: uc(t, o, i) })) : {};
    }
    __name(jo, "jo");
    function uc(e, t, r) {
      let n = e?.[t]?.compute;
      return n ? (i) => r({ ...i, [t]: n(i) }) : r;
    }
    __name(uc, "uc");
    function Qo(e, t) {
      if (!t) return e;
      let r = { ...e };
      for (let n of Object.values(t)) if (e[n.name]) for (let i of n.needs) r[i] = true;
      return r;
    }
    __name(Qo, "Qo");
    function Jo(e, t) {
      if (!t) return e;
      let r = { ...e };
      for (let n of Object.values(t)) if (!e[n.name]) for (let i of n.needs) delete r[i];
      return r;
    }
    __name(Jo, "Jo");
    var Ur = class {
      static {
        __name(this, "Ur");
      }
      constructor(t, r) {
        this.extension = t;
        this.previous = r;
      }
      computedFieldsCache = new ye();
      modelExtensionsCache = new ye();
      queryCallbacksCache = new ye();
      clientExtensions = kt(() => this.extension.client ? { ...this.previous?.getAllClientExtensions(), ...this.extension.client } : this.previous?.getAllClientExtensions());
      batchCallbacks = kt(() => {
        let t = this.previous?.getAllBatchQueryCallbacks() ?? [], r = this.extension.query?.$__internalBatch;
        return r ? t.concat(r) : t;
      });
      getAllComputedFields(t) {
        return this.computedFieldsCache.getOrCreate(t, () => Go(this.previous?.getAllComputedFields(t), this.extension, t));
      }
      getAllClientExtensions() {
        return this.clientExtensions.get();
      }
      getAllModelExtensions(t) {
        return this.modelExtensionsCache.getOrCreate(t, () => {
          let r = Ee(t);
          return !this.extension.model || !(this.extension.model[r] || this.extension.model.$allModels) ? this.previous?.getAllModelExtensions(t) : { ...this.previous?.getAllModelExtensions(t), ...this.extension.model.$allModels, ...this.extension.model[r] };
        });
      }
      getAllQueryCallbacks(t, r) {
        return this.queryCallbacksCache.getOrCreate(`${t}:${r}`, () => {
          let n = this.previous?.getAllQueryCallbacks(t, r) ?? [], i = [], o = this.extension.query;
          return !o || !(o[t] || o.$allModels || o[r] || o.$allOperations) ? n : (o[t] !== void 0 && (o[t][r] !== void 0 && i.push(o[t][r]), o[t].$allOperations !== void 0 && i.push(o[t].$allOperations)), t !== "$none" && o.$allModels !== void 0 && (o.$allModels[r] !== void 0 && i.push(o.$allModels[r]), o.$allModels.$allOperations !== void 0 && i.push(o.$allModels.$allOperations)), o[r] !== void 0 && i.push(o[r]), o.$allOperations !== void 0 && i.push(o.$allOperations), n.concat(i));
        });
      }
      getAllBatchQueryCallbacks() {
        return this.batchCallbacks.get();
      }
    };
    var ct = class e {
      static {
        __name(this, "e");
      }
      constructor(t) {
        this.head = t;
      }
      static empty() {
        return new e();
      }
      static single(t) {
        return new e(new Ur(t));
      }
      isEmpty() {
        return this.head === void 0;
      }
      append(t) {
        return new e(new Ur(t, this.head));
      }
      getAllComputedFields(t) {
        return this.head?.getAllComputedFields(t);
      }
      getAllClientExtensions() {
        return this.head?.getAllClientExtensions();
      }
      getAllModelExtensions(t) {
        return this.head?.getAllModelExtensions(t);
      }
      getAllQueryCallbacks(t, r) {
        return this.head?.getAllQueryCallbacks(t, r) ?? [];
      }
      getAllBatchQueryCallbacks() {
        return this.head?.getAllBatchQueryCallbacks() ?? [];
      }
    };
    d();
    u();
    c();
    p2();
    m();
    var Br = class {
      static {
        __name(this, "Br");
      }
      constructor(t) {
        this.name = t;
      }
    };
    function Wo(e) {
      return e instanceof Br;
    }
    __name(Wo, "Wo");
    function Ko(e) {
      return new Br(e);
    }
    __name(Ko, "Ko");
    d();
    u();
    c();
    p2();
    m();
    d();
    u();
    c();
    p2();
    m();
    var Ho = Symbol();
    var qt = class {
      static {
        __name(this, "qt");
      }
      constructor(t) {
        if (t !== Ho) throw new Error("Skip instance can not be constructed directly");
      }
      ifUndefined(t) {
        return t === void 0 ? qr : t;
      }
    };
    var qr = new qt(Ho);
    function be(e) {
      return e instanceof qt;
    }
    __name(be, "be");
    var cc = { findUnique: "findUnique", findUniqueOrThrow: "findUniqueOrThrow", findFirst: "findFirst", findFirstOrThrow: "findFirstOrThrow", findMany: "findMany", count: "aggregate", create: "createOne", createMany: "createMany", createManyAndReturn: "createManyAndReturn", update: "updateOne", updateMany: "updateMany", updateManyAndReturn: "updateManyAndReturn", upsert: "upsertOne", delete: "deleteOne", deleteMany: "deleteMany", executeRaw: "executeRaw", queryRaw: "queryRaw", aggregate: "aggregate", groupBy: "groupBy", runCommandRaw: "runCommandRaw", findRaw: "findRaw", aggregateRaw: "aggregateRaw" };
    var zo = "explicitly `undefined` values are not allowed";
    function $r({ modelName: e, action: t, args: r, runtimeDataModel: n, extensions: i = ct.empty(), callsite: o, clientMethod: s, errorFormat: a, clientVersion: l2, previewFeatures: f2, globalOmit: g }) {
      let h = new Un({ runtimeDataModel: n, modelName: e, action: t, rootArgs: r, callsite: o, extensions: i, selectionPath: [], argumentPath: [], originalMethod: s, errorFormat: a, clientVersion: l2, previewFeatures: f2, globalOmit: g });
      return { modelName: e, action: cc[t], query: $t(r, h) };
    }
    __name($r, "$r");
    function $t({ select: e, include: t, ...r } = {}, n) {
      let i = r.omit;
      return delete r.omit, { arguments: Zo(r, n), selection: pc(e, t, i, n) };
    }
    __name($t, "$t");
    function pc(e, t, r, n) {
      return e ? (t ? n.throwValidationError({ kind: "MutuallyExclusiveFields", firstField: "include", secondField: "select", selectionPath: n.getSelectionPath() }) : r && n.throwValidationError({ kind: "MutuallyExclusiveFields", firstField: "omit", secondField: "select", selectionPath: n.getSelectionPath() }), gc(e, n)) : mc(n, t, r);
    }
    __name(pc, "pc");
    function mc(e, t, r) {
      let n = {};
      return e.modelOrType && !e.isRawAction() && (n.$composites = true, n.$scalars = true), t && dc(n, t, e), fc(n, r, e), n;
    }
    __name(mc, "mc");
    function dc(e, t, r) {
      for (let [n, i] of Object.entries(t)) {
        if (be(i)) continue;
        let o = r.nestSelection(n);
        if (Bn(i, o), i === false || i === void 0) {
          e[n] = false;
          continue;
        }
        let s = r.findField(n);
        if (s && s.kind !== "object" && r.throwValidationError({ kind: "IncludeOnScalar", selectionPath: r.getSelectionPath().concat(n), outputType: r.getOutputTypeDescription() }), s) {
          e[n] = $t(i === true ? {} : i, o);
          continue;
        }
        if (i === true) {
          e[n] = true;
          continue;
        }
        e[n] = $t(i, o);
      }
    }
    __name(dc, "dc");
    function fc(e, t, r) {
      let n = r.getComputedFields(), i = { ...r.getGlobalOmit(), ...t }, o = Jo(i, n);
      for (let [s, a] of Object.entries(o)) {
        if (be(a)) continue;
        Bn(a, r.nestSelection(s));
        let l2 = r.findField(s);
        n?.[s] && !l2 || (e[s] = !a);
      }
    }
    __name(fc, "fc");
    function gc(e, t) {
      let r = {}, n = t.getComputedFields(), i = Qo(e, n);
      for (let [o, s] of Object.entries(i)) {
        if (be(s)) continue;
        let a = t.nestSelection(o);
        Bn(s, a);
        let l2 = t.findField(o);
        if (!(n?.[o] && !l2)) {
          if (s === false || s === void 0 || be(s)) {
            r[o] = false;
            continue;
          }
          if (s === true) {
            l2?.kind === "object" ? r[o] = $t({}, a) : r[o] = true;
            continue;
          }
          r[o] = $t(s, a);
        }
      }
      return r;
    }
    __name(gc, "gc");
    function Yo(e, t) {
      if (e === null) return null;
      if (typeof e == "string" || typeof e == "number" || typeof e == "boolean") return e;
      if (typeof e == "bigint") return { $type: "BigInt", value: String(e) };
      if (rt(e)) {
        if (Ar(e)) return { $type: "DateTime", value: e.toISOString() };
        t.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: t.getSelectionPath(), argumentPath: t.getArgumentPath(), argument: { name: t.getArgumentName(), typeNames: ["Date"] }, underlyingError: "Provided Date object is invalid" });
      }
      if (Wo(e)) return { $type: "Param", value: e.name };
      if (lt(e)) return { $type: "FieldRef", value: { _ref: e.name, _container: e.modelName } };
      if (Array.isArray(e)) return hc(e, t);
      if (ArrayBuffer.isView(e)) {
        let { buffer: r, byteOffset: n, byteLength: i } = e;
        return { $type: "Bytes", value: w2.Buffer.from(r, n, i).toString("base64") };
      }
      if (yc(e)) return e.values;
      if (nt(e)) return { $type: "Decimal", value: e.toFixed() };
      if (e instanceof Ce) {
        if (e !== _r.instances[e._getName()]) throw new Error("Invalid ObjectEnumValue");
        return { $type: "Enum", value: e._getName() };
      }
      if (wc(e)) return e.toJSON();
      if (typeof e == "object") return Zo(e, t);
      t.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: t.getSelectionPath(), argumentPath: t.getArgumentPath(), argument: { name: t.getArgumentName(), typeNames: [] }, underlyingError: `We could not serialize ${Object.prototype.toString.call(e)} value. Serialize the object to JSON or implement a ".toJSON()" method on it` });
    }
    __name(Yo, "Yo");
    function Zo(e, t) {
      if (e.$type) return { $type: "Raw", value: e };
      let r = {};
      for (let n in e) {
        let i = e[n], o = t.nestArgument(n);
        be(i) || (i !== void 0 ? r[n] = Yo(i, o) : t.isPreviewFeatureOn("strictUndefinedChecks") && t.throwValidationError({ kind: "InvalidArgumentValue", argumentPath: o.getArgumentPath(), selectionPath: t.getSelectionPath(), argument: { name: t.getArgumentName(), typeNames: [] }, underlyingError: zo }));
      }
      return r;
    }
    __name(Zo, "Zo");
    function hc(e, t) {
      let r = [];
      for (let n = 0; n < e.length; n++) {
        let i = t.nestArgument(String(n)), o = e[n];
        if (o === void 0 || be(o)) {
          let s = o === void 0 ? "undefined" : "Prisma.skip";
          t.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: i.getSelectionPath(), argumentPath: i.getArgumentPath(), argument: { name: `${t.getArgumentName()}[${n}]`, typeNames: [] }, underlyingError: `Can not use \`${s}\` value within array. Use \`null\` or filter out \`${s}\` values` });
        }
        r.push(Yo(o, i));
      }
      return r;
    }
    __name(hc, "hc");
    function yc(e) {
      return typeof e == "object" && e !== null && e.__prismaRawParameters__ === true;
    }
    __name(yc, "yc");
    function wc(e) {
      return typeof e == "object" && e !== null && typeof e.toJSON == "function";
    }
    __name(wc, "wc");
    function Bn(e, t) {
      e === void 0 && t.isPreviewFeatureOn("strictUndefinedChecks") && t.throwValidationError({ kind: "InvalidSelectionValue", selectionPath: t.getSelectionPath(), underlyingError: zo });
    }
    __name(Bn, "Bn");
    var Un = class e {
      static {
        __name(this, "e");
      }
      constructor(t) {
        this.params = t;
        this.params.modelName && (this.modelOrType = this.params.runtimeDataModel.models[this.params.modelName] ?? this.params.runtimeDataModel.types[this.params.modelName]);
      }
      modelOrType;
      throwValidationError(t) {
        Lr({ errors: [t], originalMethod: this.params.originalMethod, args: this.params.rootArgs ?? {}, callsite: this.params.callsite, errorFormat: this.params.errorFormat, clientVersion: this.params.clientVersion, globalOmit: this.params.globalOmit });
      }
      getSelectionPath() {
        return this.params.selectionPath;
      }
      getArgumentPath() {
        return this.params.argumentPath;
      }
      getArgumentName() {
        return this.params.argumentPath[this.params.argumentPath.length - 1];
      }
      getOutputTypeDescription() {
        if (!(!this.params.modelName || !this.modelOrType)) return { name: this.params.modelName, fields: this.modelOrType.fields.map((t) => ({ name: t.name, typeName: "boolean", isRelation: t.kind === "object" })) };
      }
      isRawAction() {
        return ["executeRaw", "queryRaw", "runCommandRaw", "findRaw", "aggregateRaw"].includes(this.params.action);
      }
      isPreviewFeatureOn(t) {
        return this.params.previewFeatures.includes(t);
      }
      getComputedFields() {
        if (this.params.modelName) return this.params.extensions.getAllComputedFields(this.params.modelName);
      }
      findField(t) {
        return this.modelOrType?.fields.find((r) => r.name === t);
      }
      nestSelection(t) {
        let r = this.findField(t), n = r?.kind === "object" ? r.type : void 0;
        return new e({ ...this.params, modelName: n, selectionPath: this.params.selectionPath.concat(t) });
      }
      getGlobalOmit() {
        return this.params.modelName && this.shouldApplyGlobalOmit() ? this.params.globalOmit?.[Me(this.params.modelName)] ?? {} : {};
      }
      shouldApplyGlobalOmit() {
        switch (this.params.action) {
          case "findFirst":
          case "findFirstOrThrow":
          case "findUniqueOrThrow":
          case "findMany":
          case "upsert":
          case "findUnique":
          case "createManyAndReturn":
          case "create":
          case "update":
          case "updateManyAndReturn":
          case "delete":
            return true;
          case "executeRaw":
          case "aggregateRaw":
          case "runCommandRaw":
          case "findRaw":
          case "createMany":
          case "deleteMany":
          case "groupBy":
          case "updateMany":
          case "count":
          case "aggregate":
          case "queryRaw":
            return false;
          default:
            Pe(this.params.action, "Unknown action");
        }
      }
      nestArgument(t) {
        return new e({ ...this.params, argumentPath: this.params.argumentPath.concat(t) });
      }
    };
    d();
    u();
    c();
    p2();
    m();
    function Xo(e) {
      if (!e._hasPreviewFlag("metrics")) throw new Z("`metrics` preview feature must be enabled in order to access metrics API", { clientVersion: e._clientVersion });
    }
    __name(Xo, "Xo");
    var pt = class {
      static {
        __name(this, "pt");
      }
      _client;
      constructor(t) {
        this._client = t;
      }
      prometheus(t) {
        return Xo(this._client), this._client._engine.metrics({ format: "prometheus", ...t });
      }
      json(t) {
        return Xo(this._client), this._client._engine.metrics({ format: "json", ...t });
      }
    };
    d();
    u();
    c();
    p2();
    m();
    function es(e, t) {
      let r = kt(() => Ec(t));
      Object.defineProperty(e, "dmmf", { get: /* @__PURE__ */ __name(() => r.get(), "get") });
    }
    __name(es, "es");
    function Ec(e) {
      return { datamodel: { models: qn(e.models), enums: qn(e.enums), types: qn(e.types) } };
    }
    __name(Ec, "Ec");
    function qn(e) {
      return Object.entries(e).map(([t, r]) => ({ name: t, ...r }));
    }
    __name(qn, "qn");
    d();
    u();
    c();
    p2();
    m();
    var $n = /* @__PURE__ */ new WeakMap();
    var Vr = "$$PrismaTypedSql";
    var Vt = class {
      static {
        __name(this, "Vt");
      }
      constructor(t, r) {
        $n.set(this, { sql: t, values: r }), Object.defineProperty(this, Vr, { value: Vr });
      }
      get sql() {
        return $n.get(this).sql;
      }
      get values() {
        return $n.get(this).values;
      }
    };
    function ts(e) {
      return (...t) => new Vt(e, t);
    }
    __name(ts, "ts");
    function jr(e) {
      return e != null && e[Vr] === Vr;
    }
    __name(jr, "jr");
    d();
    u();
    c();
    p2();
    m();
    var wa = Le(Pn());
    d();
    u();
    c();
    p2();
    m();
    rs();
    Ji();
    zi();
    d();
    u();
    c();
    p2();
    m();
    var oe = class e {
      static {
        __name(this, "e");
      }
      constructor(t, r) {
        if (t.length - 1 !== r.length) throw t.length === 0 ? new TypeError("Expected at least 1 string") : new TypeError(`Expected ${t.length} strings to have ${t.length - 1} values`);
        let n = r.reduce((s, a) => s + (a instanceof e ? a.values.length : 1), 0);
        this.values = new Array(n), this.strings = new Array(n + 1), this.strings[0] = t[0];
        let i = 0, o = 0;
        for (; i < r.length; ) {
          let s = r[i++], a = t[i];
          if (s instanceof e) {
            this.strings[o] += s.strings[0];
            let l2 = 0;
            for (; l2 < s.values.length; ) this.values[o++] = s.values[l2++], this.strings[o] = s.strings[l2];
            this.strings[o] += a;
          } else this.values[o++] = s, this.strings[o] = a;
        }
      }
      get sql() {
        let t = this.strings.length, r = 1, n = this.strings[0];
        for (; r < t; ) n += `?${this.strings[r++]}`;
        return n;
      }
      get statement() {
        let t = this.strings.length, r = 1, n = this.strings[0];
        for (; r < t; ) n += `:${r}${this.strings[r++]}`;
        return n;
      }
      get text() {
        let t = this.strings.length, r = 1, n = this.strings[0];
        for (; r < t; ) n += `$${r}${this.strings[r++]}`;
        return n;
      }
      inspect() {
        return { sql: this.sql, statement: this.statement, text: this.text, values: this.values };
      }
    };
    function ns(e, t = ",", r = "", n = "") {
      if (e.length === 0) throw new TypeError("Expected `join([])` to be called with an array of multiple elements, but got an empty array");
      return new oe([r, ...Array(e.length - 1).fill(t), n], e);
    }
    __name(ns, "ns");
    function Vn(e) {
      return new oe([e], []);
    }
    __name(Vn, "Vn");
    var is = Vn("");
    function jn(e, ...t) {
      return new oe(e, t);
    }
    __name(jn, "jn");
    d();
    u();
    c();
    p2();
    m();
    d();
    u();
    c();
    p2();
    m();
    function jt(e) {
      return { getKeys() {
        return Object.keys(e);
      }, getPropertyValue(t) {
        return e[t];
      } };
    }
    __name(jt, "jt");
    d();
    u();
    c();
    p2();
    m();
    function ee(e, t) {
      return { getKeys() {
        return [e];
      }, getPropertyValue() {
        return t();
      } };
    }
    __name(ee, "ee");
    d();
    u();
    c();
    p2();
    m();
    function qe(e) {
      let t = new ye();
      return { getKeys() {
        return e.getKeys();
      }, getPropertyValue(r) {
        return t.getOrCreate(r, () => e.getPropertyValue(r));
      }, getPropertyDescriptor(r) {
        return e.getPropertyDescriptor?.(r);
      } };
    }
    __name(qe, "qe");
    d();
    u();
    c();
    p2();
    m();
    d();
    u();
    c();
    p2();
    m();
    var Qr = { enumerable: true, configurable: true, writable: true };
    function Jr(e) {
      let t = new Set(e);
      return { getPrototypeOf: /* @__PURE__ */ __name(() => Object.prototype, "getPrototypeOf"), getOwnPropertyDescriptor: /* @__PURE__ */ __name(() => Qr, "getOwnPropertyDescriptor"), has: /* @__PURE__ */ __name((r, n) => t.has(n), "has"), set: /* @__PURE__ */ __name((r, n, i) => t.add(n) && Reflect.set(r, n, i), "set"), ownKeys: /* @__PURE__ */ __name(() => [...t], "ownKeys") };
    }
    __name(Jr, "Jr");
    var os = Symbol.for("nodejs.util.inspect.custom");
    function pe(e, t) {
      let r = bc(t), n = /* @__PURE__ */ new Set(), i = new Proxy(e, { get(o, s) {
        if (n.has(s)) return o[s];
        let a = r.get(s);
        return a ? a.getPropertyValue(s) : o[s];
      }, has(o, s) {
        if (n.has(s)) return true;
        let a = r.get(s);
        return a ? a.has?.(s) ?? true : Reflect.has(o, s);
      }, ownKeys(o) {
        let s = ss(Reflect.ownKeys(o), r), a = ss(Array.from(r.keys()), r);
        return [.../* @__PURE__ */ new Set([...s, ...a, ...n])];
      }, set(o, s, a) {
        return r.get(s)?.getPropertyDescriptor?.(s)?.writable === false ? false : (n.add(s), Reflect.set(o, s, a));
      }, getOwnPropertyDescriptor(o, s) {
        let a = Reflect.getOwnPropertyDescriptor(o, s);
        if (a && !a.configurable) return a;
        let l2 = r.get(s);
        return l2 ? l2.getPropertyDescriptor ? { ...Qr, ...l2?.getPropertyDescriptor(s) } : Qr : a;
      }, defineProperty(o, s, a) {
        return n.add(s), Reflect.defineProperty(o, s, a);
      }, getPrototypeOf: /* @__PURE__ */ __name(() => Object.prototype, "getPrototypeOf") });
      return i[os] = function() {
        let o = { ...this };
        return delete o[os], o;
      }, i;
    }
    __name(pe, "pe");
    function bc(e) {
      let t = /* @__PURE__ */ new Map();
      for (let r of e) {
        let n = r.getKeys();
        for (let i of n) t.set(i, r);
      }
      return t;
    }
    __name(bc, "bc");
    function ss(e, t) {
      return e.filter((r) => t.get(r)?.has?.(r) ?? true);
    }
    __name(ss, "ss");
    d();
    u();
    c();
    p2();
    m();
    function mt(e) {
      return { getKeys() {
        return e;
      }, has() {
        return false;
      }, getPropertyValue() {
      } };
    }
    __name(mt, "mt");
    d();
    u();
    c();
    p2();
    m();
    function Wr(e, t) {
      return { batch: e, transaction: t?.kind === "batch" ? { isolationLevel: t.options.isolationLevel } : void 0 };
    }
    __name(Wr, "Wr");
    d();
    u();
    c();
    p2();
    m();
    function as(e) {
      if (e === void 0) return "";
      let t = ut(e);
      return new it(0, { colors: Or }).write(t).toString();
    }
    __name(as, "as");
    d();
    u();
    c();
    p2();
    m();
    var xc = "P2037";
    function Kr({ error: e, user_facing_error: t }, r, n) {
      return t.error_code ? new re(Pc(t, n), { code: t.error_code, clientVersion: r, meta: t.meta, batchRequestIdx: t.batch_request_idx }) : new ne(e, { clientVersion: r, batchRequestIdx: t.batch_request_idx });
    }
    __name(Kr, "Kr");
    function Pc(e, t) {
      let r = e.message;
      return (t === "postgresql" || t === "postgres" || t === "mysql") && e.error_code === xc && (r += `
Prisma Accelerate has built-in connection pooling to prevent such errors: https://pris.ly/client/error-accelerate`), r;
    }
    __name(Pc, "Pc");
    d();
    u();
    c();
    p2();
    m();
    d();
    u();
    c();
    p2();
    m();
    d();
    u();
    c();
    p2();
    m();
    d();
    u();
    c();
    p2();
    m();
    d();
    u();
    c();
    p2();
    m();
    var Gn = class {
      static {
        __name(this, "Gn");
      }
      getLocation() {
        return null;
      }
    };
    function Ne(e) {
      return typeof $EnabledCallSite == "function" && e !== "minimal" ? new $EnabledCallSite() : new Gn();
    }
    __name(Ne, "Ne");
    d();
    u();
    c();
    p2();
    m();
    d();
    u();
    c();
    p2();
    m();
    d();
    u();
    c();
    p2();
    m();
    var ls = { _avg: true, _count: true, _sum: true, _min: true, _max: true };
    function dt(e = {}) {
      let t = Tc(e);
      return Object.entries(t).reduce((n, [i, o]) => (ls[i] !== void 0 ? n.select[i] = { select: o } : n[i] = o, n), { select: {} });
    }
    __name(dt, "dt");
    function Tc(e = {}) {
      return typeof e._count == "boolean" ? { ...e, _count: { _all: e._count } } : e;
    }
    __name(Tc, "Tc");
    function Hr(e = {}) {
      return (t) => (typeof e._count == "boolean" && (t._count = t._count._all), t);
    }
    __name(Hr, "Hr");
    function us(e, t) {
      let r = Hr(e);
      return t({ action: "aggregate", unpacker: r, argsMapper: dt })(e);
    }
    __name(us, "us");
    d();
    u();
    c();
    p2();
    m();
    function Cc(e = {}) {
      let { select: t, ...r } = e;
      return typeof t == "object" ? dt({ ...r, _count: t }) : dt({ ...r, _count: { _all: true } });
    }
    __name(Cc, "Cc");
    function Ac(e = {}) {
      return typeof e.select == "object" ? (t) => Hr(e)(t)._count : (t) => Hr(e)(t)._count._all;
    }
    __name(Ac, "Ac");
    function cs(e, t) {
      return t({ action: "count", unpacker: Ac(e), argsMapper: Cc })(e);
    }
    __name(cs, "cs");
    d();
    u();
    c();
    p2();
    m();
    function Rc(e = {}) {
      let t = dt(e);
      if (Array.isArray(t.by)) for (let r of t.by) typeof r == "string" && (t.select[r] = true);
      else typeof t.by == "string" && (t.select[t.by] = true);
      return t;
    }
    __name(Rc, "Rc");
    function Sc(e = {}) {
      return (t) => (typeof e?._count == "boolean" && t.forEach((r) => {
        r._count = r._count._all;
      }), t);
    }
    __name(Sc, "Sc");
    function ps(e, t) {
      return t({ action: "groupBy", unpacker: Sc(e), argsMapper: Rc })(e);
    }
    __name(ps, "ps");
    function ms(e, t, r) {
      if (t === "aggregate") return (n) => us(n, r);
      if (t === "count") return (n) => cs(n, r);
      if (t === "groupBy") return (n) => ps(n, r);
    }
    __name(ms, "ms");
    d();
    u();
    c();
    p2();
    m();
    function ds(e, t) {
      let r = t.fields.filter((i) => !i.relationName), n = To(r, "name");
      return new Proxy({}, { get(i, o) {
        if (o in i || typeof o == "symbol") return i[o];
        let s = n[o];
        if (s) return new Nt(e, o, s.type, s.isList, s.kind === "enum");
      }, ...Jr(Object.keys(n)) });
    }
    __name(ds, "ds");
    d();
    u();
    c();
    p2();
    m();
    d();
    u();
    c();
    p2();
    m();
    var fs = /* @__PURE__ */ __name((e) => Array.isArray(e) ? e : e.split("."), "fs");
    var Qn = /* @__PURE__ */ __name((e, t) => fs(t).reduce((r, n) => r && r[n], e), "Qn");
    var gs = /* @__PURE__ */ __name((e, t, r) => fs(t).reduceRight((n, i, o, s) => Object.assign({}, Qn(e, s.slice(0, o)), { [i]: n }), r), "gs");
    function kc(e, t) {
      return e === void 0 || t === void 0 ? [] : [...t, "select", e];
    }
    __name(kc, "kc");
    function Ic(e, t, r) {
      return t === void 0 ? e ?? {} : gs(t, r, e || true);
    }
    __name(Ic, "Ic");
    function Jn(e, t, r, n, i, o) {
      let a = e._runtimeDataModel.models[t].fields.reduce((l2, f2) => ({ ...l2, [f2.name]: f2 }), {});
      return (l2) => {
        let f2 = Ne(e._errorFormat), g = kc(n, i), h = Ic(l2, o, g), v = r({ dataPath: g, callsite: f2 })(h), S2 = Oc(e, t);
        return new Proxy(v, { get(C, R) {
          if (!S2.includes(R)) return C[R];
          let M = [a[R].type, r, R], U = [g, h];
          return Jn(e, ...M, ...U);
        }, ...Jr([...S2, ...Object.getOwnPropertyNames(v)]) });
      };
    }
    __name(Jn, "Jn");
    function Oc(e, t) {
      return e._runtimeDataModel.models[t].fields.filter((r) => r.kind === "object").map((r) => r.name);
    }
    __name(Oc, "Oc");
    var Dc = ["findUnique", "findUniqueOrThrow", "findFirst", "findFirstOrThrow", "create", "update", "upsert", "delete"];
    var Mc = ["aggregate", "count", "groupBy"];
    function Wn(e, t) {
      let r = e._extensions.getAllModelExtensions(t) ?? {}, n = [_c(e, t), Fc(e, t), jt(r), ee("name", () => t), ee("$name", () => t), ee("$parent", () => e._appliedParent)];
      return pe({}, n);
    }
    __name(Wn, "Wn");
    function _c(e, t) {
      let r = Ee(t), n = Object.keys(It).concat("count");
      return { getKeys() {
        return n;
      }, getPropertyValue(i) {
        let o = i, s = /* @__PURE__ */ __name((a) => (l2) => {
          let f2 = Ne(e._errorFormat);
          return e._createPrismaPromise((g) => {
            let h = { args: l2, dataPath: [], action: o, model: t, clientMethod: `${r}.${i}`, jsModelName: r, transaction: g, callsite: f2 };
            return e._request({ ...h, ...a });
          }, { action: o, args: l2, model: t });
        }, "s");
        return Dc.includes(o) ? Jn(e, t, s) : Nc(i) ? ms(e, i, s) : s({});
      } };
    }
    __name(_c, "_c");
    function Nc(e) {
      return Mc.includes(e);
    }
    __name(Nc, "Nc");
    function Fc(e, t) {
      return qe(ee("fields", () => {
        let r = e._runtimeDataModel.models[t];
        return ds(t, r);
      }));
    }
    __name(Fc, "Fc");
    d();
    u();
    c();
    p2();
    m();
    function hs(e) {
      return e.replace(/^./, (t) => t.toUpperCase());
    }
    __name(hs, "hs");
    var Kn = Symbol();
    function Gt(e) {
      let t = [Lc(e), Uc(e), ee(Kn, () => e), ee("$parent", () => e._appliedParent)], r = e._extensions.getAllClientExtensions();
      return r && t.push(jt(r)), pe(e, t);
    }
    __name(Gt, "Gt");
    function Lc(e) {
      let t = Object.getPrototypeOf(e._originalClient), r = [...new Set(Object.getOwnPropertyNames(t))];
      return { getKeys() {
        return r;
      }, getPropertyValue(n) {
        return e[n];
      } };
    }
    __name(Lc, "Lc");
    function Uc(e) {
      let t = Object.keys(e._runtimeDataModel.models), r = t.map(Ee), n = [...new Set(t.concat(r))];
      return qe({ getKeys() {
        return n;
      }, getPropertyValue(i) {
        let o = hs(i);
        if (e._runtimeDataModel.models[o] !== void 0) return Wn(e, o);
        if (e._runtimeDataModel.models[i] !== void 0) return Wn(e, i);
      }, getPropertyDescriptor(i) {
        if (!r.includes(i)) return { enumerable: false };
      } });
    }
    __name(Uc, "Uc");
    function ys(e) {
      return e[Kn] ? e[Kn] : e;
    }
    __name(ys, "ys");
    function ws(e) {
      if (typeof e == "function") return e(this);
      if (e.client?.__AccelerateEngine) {
        let r = e.client.__AccelerateEngine;
        this._originalClient._engine = new r(this._originalClient._accelerateEngineConfig);
      }
      let t = Object.create(this._originalClient, { _extensions: { value: this._extensions.append(e) }, _appliedParent: { value: this, configurable: true }, $use: { value: void 0 }, $on: { value: void 0 } });
      return Gt(t);
    }
    __name(ws, "ws");
    d();
    u();
    c();
    p2();
    m();
    d();
    u();
    c();
    p2();
    m();
    function Es({ result: e, modelName: t, select: r, omit: n, extensions: i }) {
      let o = i.getAllComputedFields(t);
      if (!o) return e;
      let s = [], a = [];
      for (let l2 of Object.values(o)) {
        if (n) {
          if (n[l2.name]) continue;
          let f2 = l2.needs.filter((g) => n[g]);
          f2.length > 0 && a.push(mt(f2));
        } else if (r) {
          if (!r[l2.name]) continue;
          let f2 = l2.needs.filter((g) => !r[g]);
          f2.length > 0 && a.push(mt(f2));
        }
        Bc(e, l2.needs) && s.push(qc(l2, pe(e, s)));
      }
      return s.length > 0 || a.length > 0 ? pe(e, [...s, ...a]) : e;
    }
    __name(Es, "Es");
    function Bc(e, t) {
      return t.every((r) => Cn(e, r));
    }
    __name(Bc, "Bc");
    function qc(e, t) {
      return qe(ee(e.name, () => e.compute(t)));
    }
    __name(qc, "qc");
    d();
    u();
    c();
    p2();
    m();
    function zr({ visitor: e, result: t, args: r, runtimeDataModel: n, modelName: i }) {
      if (Array.isArray(t)) {
        for (let s = 0; s < t.length; s++) t[s] = zr({ result: t[s], args: r, modelName: i, runtimeDataModel: n, visitor: e });
        return t;
      }
      let o = e(t, i, r) ?? t;
      return r.include && bs({ includeOrSelect: r.include, result: o, parentModelName: i, runtimeDataModel: n, visitor: e }), r.select && bs({ includeOrSelect: r.select, result: o, parentModelName: i, runtimeDataModel: n, visitor: e }), o;
    }
    __name(zr, "zr");
    function bs({ includeOrSelect: e, result: t, parentModelName: r, runtimeDataModel: n, visitor: i }) {
      for (let [o, s] of Object.entries(e)) {
        if (!s || t[o] == null || be(s)) continue;
        let l2 = n.models[r].fields.find((g) => g.name === o);
        if (!l2 || l2.kind !== "object" || !l2.relationName) continue;
        let f2 = typeof s == "object" ? s : {};
        t[o] = zr({ visitor: i, result: t[o], args: f2, modelName: l2.type, runtimeDataModel: n });
      }
    }
    __name(bs, "bs");
    function xs({ result: e, modelName: t, args: r, extensions: n, runtimeDataModel: i, globalOmit: o }) {
      return n.isEmpty() || e == null || typeof e != "object" || !i.models[t] ? e : zr({ result: e, args: r ?? {}, modelName: t, runtimeDataModel: i, visitor: /* @__PURE__ */ __name((a, l2, f2) => {
        let g = Ee(l2);
        return Es({ result: a, modelName: g, select: f2.select, omit: f2.select ? void 0 : { ...o?.[g], ...f2.omit }, extensions: n });
      }, "visitor") });
    }
    __name(xs, "xs");
    d();
    u();
    c();
    p2();
    m();
    d();
    u();
    c();
    p2();
    m();
    d();
    u();
    c();
    p2();
    m();
    var $c = ["$connect", "$disconnect", "$on", "$transaction", "$use", "$extends"];
    var Ps = $c;
    function vs(e) {
      if (e instanceof oe) return Vc(e);
      if (jr(e)) return jc(e);
      if (Array.isArray(e)) {
        let r = [e[0]];
        for (let n = 1; n < e.length; n++) r[n] = Qt(e[n]);
        return r;
      }
      let t = {};
      for (let r in e) t[r] = Qt(e[r]);
      return t;
    }
    __name(vs, "vs");
    function Vc(e) {
      return new oe(e.strings, e.values);
    }
    __name(Vc, "Vc");
    function jc(e) {
      return new Vt(e.sql, e.values);
    }
    __name(jc, "jc");
    function Qt(e) {
      if (typeof e != "object" || e == null || e instanceof Ce || lt(e)) return e;
      if (nt(e)) return new he(e.toFixed());
      if (rt(e)) return /* @__PURE__ */ new Date(+e);
      if (ArrayBuffer.isView(e)) return e.slice(0);
      if (Array.isArray(e)) {
        let t = e.length, r;
        for (r = Array(t); t--; ) r[t] = Qt(e[t]);
        return r;
      }
      if (typeof e == "object") {
        let t = {};
        for (let r in e) r === "__proto__" ? Object.defineProperty(t, r, { value: Qt(e[r]), configurable: true, enumerable: true, writable: true }) : t[r] = Qt(e[r]);
        return t;
      }
      Pe(e, "Unknown value");
    }
    __name(Qt, "Qt");
    function Cs(e, t, r, n = 0) {
      return e._createPrismaPromise((i) => {
        let o = t.customDataProxyFetch;
        return "transaction" in t && i !== void 0 && (t.transaction?.kind === "batch" && t.transaction.lock.then(), t.transaction = i), n === r.length ? e._executeRequest(t) : r[n]({ model: t.model, operation: t.model ? t.action : t.clientMethod, args: vs(t.args ?? {}), __internalParams: t, query: /* @__PURE__ */ __name((s, a = t) => {
          let l2 = a.customDataProxyFetch;
          return a.customDataProxyFetch = ks(o, l2), a.args = s, Cs(e, a, r, n + 1);
        }, "query") });
      });
    }
    __name(Cs, "Cs");
    function As(e, t) {
      let { jsModelName: r, action: n, clientMethod: i } = t, o = r ? n : i;
      if (e._extensions.isEmpty()) return e._executeRequest(t);
      let s = e._extensions.getAllQueryCallbacks(r ?? "$none", o);
      return Cs(e, t, s);
    }
    __name(As, "As");
    function Rs(e) {
      return (t) => {
        let r = { requests: t }, n = t[0].extensions.getAllBatchQueryCallbacks();
        return n.length ? Ss(r, n, 0, e) : e(r);
      };
    }
    __name(Rs, "Rs");
    function Ss(e, t, r, n) {
      if (r === t.length) return n(e);
      let i = e.customDataProxyFetch, o = e.requests[0].transaction;
      return t[r]({ args: { queries: e.requests.map((s) => ({ model: s.modelName, operation: s.action, args: s.args })), transaction: o ? { isolationLevel: o.kind === "batch" ? o.isolationLevel : void 0 } : void 0 }, __internalParams: e, query(s, a = e) {
        let l2 = a.customDataProxyFetch;
        return a.customDataProxyFetch = ks(i, l2), Ss(a, t, r + 1, n);
      } });
    }
    __name(Ss, "Ss");
    var Ts = /* @__PURE__ */ __name((e) => e, "Ts");
    function ks(e = Ts, t = Ts) {
      return (r) => e(t(r));
    }
    __name(ks, "ks");
    d();
    u();
    c();
    p2();
    m();
    var Is = H("prisma:client");
    var Os = { Vercel: "vercel", "Netlify CI": "netlify" };
    function Ds({ postinstall: e, ciName: t, clientVersion: r }) {
      if (Is("checkPlatformCaching:postinstall", e), Is("checkPlatformCaching:ciName", t), e === true && t && t in Os) {
        let n = `Prisma has detected that this project was built on ${t}, which caches dependencies. This leads to an outdated Prisma Client because Prisma's auto-generation isn't triggered. To fix this, make sure to run the \`prisma generate\` command during the build process.

Learn how: https://pris.ly/d/${Os[t]}-build`;
        throw console.error(n), new Q(n, r);
      }
    }
    __name(Ds, "Ds");
    d();
    u();
    c();
    p2();
    m();
    function Ms(e, t) {
      return e ? e.datasources ? e.datasources : e.datasourceUrl ? { [t[0]]: { url: e.datasourceUrl } } : {} : {};
    }
    __name(Ms, "Ms");
    d();
    u();
    c();
    p2();
    m();
    d();
    u();
    c();
    p2();
    m();
    var Gc = /* @__PURE__ */ __name(() => globalThis.process?.release?.name === "node", "Gc");
    var Qc = /* @__PURE__ */ __name(() => !!globalThis.Bun || !!globalThis.process?.versions?.bun, "Qc");
    var Jc = /* @__PURE__ */ __name(() => !!globalThis.Deno, "Jc");
    var Wc = /* @__PURE__ */ __name(() => typeof globalThis.Netlify == "object", "Wc");
    var Kc = /* @__PURE__ */ __name(() => typeof globalThis.EdgeRuntime == "object", "Kc");
    var Hc = /* @__PURE__ */ __name(() => globalThis.navigator?.userAgent === "Cloudflare-Workers", "Hc");
    function zc() {
      return [[Wc, "netlify"], [Kc, "edge-light"], [Hc, "workerd"], [Jc, "deno"], [Qc, "bun"], [Gc, "node"]].flatMap((r) => r[0]() ? [r[1]] : []).at(0) ?? "";
    }
    __name(zc, "zc");
    var Yc = { node: "Node.js", workerd: "Cloudflare Workers", deno: "Deno and Deno Deploy", netlify: "Netlify Edge Functions", "edge-light": "Edge Runtime (Vercel Edge Functions, Vercel Edge Middleware, Next.js (Pages Router) Edge API Routes, Next.js (App Router) Edge Route Handlers or Next.js Middleware)" };
    function Yr() {
      let e = zc();
      return { id: e, prettyName: Yc[e] || e, isEdge: ["workerd", "deno", "netlify", "edge-light"].includes(e) };
    }
    __name(Yr, "Yr");
    d();
    u();
    c();
    p2();
    m();
    var _s = "6.12.0";
    d();
    u();
    c();
    p2();
    m();
    d();
    u();
    c();
    p2();
    m();
    function ft({ inlineDatasources: e, overrideDatasources: t, env: r, clientVersion: n }) {
      let i, o = Object.keys(e)[0], s = e[o]?.url, a = t[o]?.url;
      if (o === void 0 ? i = void 0 : a ? i = a : s?.value ? i = s.value : s?.fromEnvVar && (i = r[s.fromEnvVar]), s?.fromEnvVar !== void 0 && i === void 0) throw Yr().id === "workerd" ? new Q(`error: Environment variable not found: ${s.fromEnvVar}.

In Cloudflare module Workers, environment variables are available only in the Worker's \`env\` parameter of \`fetch\`.
To solve this, provide the connection string directly: https://pris.ly/d/cloudflare-datasource-url`, n) : new Q(`error: Environment variable not found: ${s.fromEnvVar}.`, n);
      if (i === void 0) throw new Q("error: Missing URL environment variable, value, or override.", n);
      return i;
    }
    __name(ft, "ft");
    d();
    u();
    c();
    p2();
    m();
    d();
    u();
    c();
    p2();
    m();
    d();
    u();
    c();
    p2();
    m();
    var Zr = class extends Error {
      static {
        __name(this, "Zr");
      }
      clientVersion;
      cause;
      constructor(t, r) {
        super(t), this.clientVersion = r.clientVersion, this.cause = r.cause;
      }
      get [Symbol.toStringTag]() {
        return this.name;
      }
    };
    var se = class extends Zr {
      static {
        __name(this, "se");
      }
      isRetryable;
      constructor(t, r) {
        super(t, r), this.isRetryable = r.isRetryable ?? true;
      }
    };
    d();
    u();
    c();
    p2();
    m();
    function L(e, t) {
      return { ...e, isRetryable: t };
    }
    __name(L, "L");
    var $e = class extends se {
      static {
        __name(this, "$e");
      }
      name = "InvalidDatasourceError";
      code = "P6001";
      constructor(t, r) {
        super(t, L(r, false));
      }
    };
    N($e, "InvalidDatasourceError");
    function Ns(e) {
      let t = { clientVersion: e.clientVersion }, r = Object.keys(e.inlineDatasources)[0], n = ft({ inlineDatasources: e.inlineDatasources, overrideDatasources: e.overrideDatasources, clientVersion: e.clientVersion, env: { ...e.env, ...typeof y < "u" ? y.env : {} } }), i;
      try {
        i = new URL(n);
      } catch {
        throw new $e(`Error validating datasource \`${r}\`: the URL must start with the protocol \`prisma://\``, t);
      }
      let { protocol: o, searchParams: s } = i;
      if (o !== "prisma:" && o !== hr) throw new $e(`Error validating datasource \`${r}\`: the URL must start with the protocol \`prisma://\` or \`prisma+postgres://\``, t);
      let a = s.get("api_key");
      if (a === null || a.length < 1) throw new $e(`Error validating datasource \`${r}\`: the URL must contain a valid API key`, t);
      let l2 = vn(i) ? "http:" : "https:", f2 = new URL(i.href.replace(o, l2));
      return { apiKey: a, url: f2 };
    }
    __name(Ns, "Ns");
    d();
    u();
    c();
    p2();
    m();
    var Fs = Le(Zi());
    var Xr = class {
      static {
        __name(this, "Xr");
      }
      apiKey;
      tracingHelper;
      logLevel;
      logQueries;
      engineHash;
      constructor({ apiKey: t, tracingHelper: r, logLevel: n, logQueries: i, engineHash: o }) {
        this.apiKey = t, this.tracingHelper = r, this.logLevel = n, this.logQueries = i, this.engineHash = o;
      }
      build({ traceparent: t, transactionId: r } = {}) {
        let n = { Accept: "application/json", Authorization: `Bearer ${this.apiKey}`, "Content-Type": "application/json", "Prisma-Engine-Hash": this.engineHash, "Prisma-Engine-Version": Fs.enginesVersion };
        this.tracingHelper.isEnabled() && (n.traceparent = t ?? this.tracingHelper.getTraceParent()), r && (n["X-Transaction-Id"] = r);
        let i = this.#e();
        return i.length > 0 && (n["X-Capture-Telemetry"] = i.join(", ")), n;
      }
      #e() {
        let t = [];
        return this.tracingHelper.isEnabled() && t.push("tracing"), this.logLevel && t.push(this.logLevel), this.logQueries && t.push("query"), t;
      }
    };
    d();
    u();
    c();
    p2();
    m();
    function Xc(e) {
      return e[0] * 1e3 + e[1] / 1e6;
    }
    __name(Xc, "Xc");
    function Hn(e) {
      return new Date(Xc(e));
    }
    __name(Hn, "Hn");
    d();
    u();
    c();
    p2();
    m();
    d();
    u();
    c();
    p2();
    m();
    var gt = class extends se {
      static {
        __name(this, "gt");
      }
      name = "ForcedRetryError";
      code = "P5001";
      constructor(t) {
        super("This request must be retried", L(t, true));
      }
    };
    N(gt, "ForcedRetryError");
    d();
    u();
    c();
    p2();
    m();
    var Ve = class extends se {
      static {
        __name(this, "Ve");
      }
      name = "NotImplementedYetError";
      code = "P5004";
      constructor(t, r) {
        super(t, L(r, false));
      }
    };
    N(Ve, "NotImplementedYetError");
    d();
    u();
    c();
    p2();
    m();
    d();
    u();
    c();
    p2();
    m();
    var j = class extends se {
      static {
        __name(this, "j");
      }
      response;
      constructor(t, r) {
        super(t, r), this.response = r.response;
        let n = this.response.headers.get("prisma-request-id");
        if (n) {
          let i = `(The request id was: ${n})`;
          this.message = this.message + " " + i;
        }
      }
    };
    var je = class extends j {
      static {
        __name(this, "je");
      }
      name = "SchemaMissingError";
      code = "P5005";
      constructor(t) {
        super("Schema needs to be uploaded", L(t, true));
      }
    };
    N(je, "SchemaMissingError");
    d();
    u();
    c();
    p2();
    m();
    d();
    u();
    c();
    p2();
    m();
    var zn = "This request could not be understood by the server";
    var Jt = class extends j {
      static {
        __name(this, "Jt");
      }
      name = "BadRequestError";
      code = "P5000";
      constructor(t, r, n) {
        super(r || zn, L(t, false)), n && (this.code = n);
      }
    };
    N(Jt, "BadRequestError");
    d();
    u();
    c();
    p2();
    m();
    var Wt = class extends j {
      static {
        __name(this, "Wt");
      }
      name = "HealthcheckTimeoutError";
      code = "P5013";
      logs;
      constructor(t, r) {
        super("Engine not started: healthcheck timeout", L(t, true)), this.logs = r;
      }
    };
    N(Wt, "HealthcheckTimeoutError");
    d();
    u();
    c();
    p2();
    m();
    var Kt = class extends j {
      static {
        __name(this, "Kt");
      }
      name = "EngineStartupError";
      code = "P5014";
      logs;
      constructor(t, r, n) {
        super(r, L(t, true)), this.logs = n;
      }
    };
    N(Kt, "EngineStartupError");
    d();
    u();
    c();
    p2();
    m();
    var Ht = class extends j {
      static {
        __name(this, "Ht");
      }
      name = "EngineVersionNotSupportedError";
      code = "P5012";
      constructor(t) {
        super("Engine version is not supported", L(t, false));
      }
    };
    N(Ht, "EngineVersionNotSupportedError");
    d();
    u();
    c();
    p2();
    m();
    var Yn = "Request timed out";
    var zt = class extends j {
      static {
        __name(this, "zt");
      }
      name = "GatewayTimeoutError";
      code = "P5009";
      constructor(t, r = Yn) {
        super(r, L(t, false));
      }
    };
    N(zt, "GatewayTimeoutError");
    d();
    u();
    c();
    p2();
    m();
    var ep = "Interactive transaction error";
    var Yt = class extends j {
      static {
        __name(this, "Yt");
      }
      name = "InteractiveTransactionError";
      code = "P5015";
      constructor(t, r = ep) {
        super(r, L(t, false));
      }
    };
    N(Yt, "InteractiveTransactionError");
    d();
    u();
    c();
    p2();
    m();
    var tp = "Request parameters are invalid";
    var Zt = class extends j {
      static {
        __name(this, "Zt");
      }
      name = "InvalidRequestError";
      code = "P5011";
      constructor(t, r = tp) {
        super(r, L(t, false));
      }
    };
    N(Zt, "InvalidRequestError");
    d();
    u();
    c();
    p2();
    m();
    var Zn = "Requested resource does not exist";
    var Xt = class extends j {
      static {
        __name(this, "Xt");
      }
      name = "NotFoundError";
      code = "P5003";
      constructor(t, r = Zn) {
        super(r, L(t, false));
      }
    };
    N(Xt, "NotFoundError");
    d();
    u();
    c();
    p2();
    m();
    var Xn = "Unknown server error";
    var ht = class extends j {
      static {
        __name(this, "ht");
      }
      name = "ServerError";
      code = "P5006";
      logs;
      constructor(t, r, n) {
        super(r || Xn, L(t, true)), this.logs = n;
      }
    };
    N(ht, "ServerError");
    d();
    u();
    c();
    p2();
    m();
    var ei = "Unauthorized, check your connection string";
    var er = class extends j {
      static {
        __name(this, "er");
      }
      name = "UnauthorizedError";
      code = "P5007";
      constructor(t, r = ei) {
        super(r, L(t, false));
      }
    };
    N(er, "UnauthorizedError");
    d();
    u();
    c();
    p2();
    m();
    var ti = "Usage exceeded, retry again later";
    var tr = class extends j {
      static {
        __name(this, "tr");
      }
      name = "UsageExceededError";
      code = "P5008";
      constructor(t, r = ti) {
        super(r, L(t, true));
      }
    };
    N(tr, "UsageExceededError");
    async function rp(e) {
      let t;
      try {
        t = await e.text();
      } catch {
        return { type: "EmptyError" };
      }
      try {
        let r = JSON.parse(t);
        if (typeof r == "string") switch (r) {
          case "InternalDataProxyError":
            return { type: "DataProxyError", body: r };
          default:
            return { type: "UnknownTextError", body: r };
        }
        if (typeof r == "object" && r !== null) {
          if ("is_panic" in r && "message" in r && "error_code" in r) return { type: "QueryEngineError", body: r };
          if ("EngineNotStarted" in r || "InteractiveTransactionMisrouted" in r || "InvalidRequestError" in r) {
            let n = Object.values(r)[0].reason;
            return typeof n == "string" && !["SchemaMissing", "EngineVersionNotSupported"].includes(n) ? { type: "UnknownJsonError", body: r } : { type: "DataProxyError", body: r };
          }
        }
        return { type: "UnknownJsonError", body: r };
      } catch {
        return t === "" ? { type: "EmptyError" } : { type: "UnknownTextError", body: t };
      }
    }
    __name(rp, "rp");
    async function rr(e, t) {
      if (e.ok) return;
      let r = { clientVersion: t, response: e }, n = await rp(e);
      if (n.type === "QueryEngineError") throw new re(n.body.message, { code: n.body.error_code, clientVersion: t });
      if (n.type === "DataProxyError") {
        if (n.body === "InternalDataProxyError") throw new ht(r, "Internal Data Proxy error");
        if ("EngineNotStarted" in n.body) {
          if (n.body.EngineNotStarted.reason === "SchemaMissing") return new je(r);
          if (n.body.EngineNotStarted.reason === "EngineVersionNotSupported") throw new Ht(r);
          if ("EngineStartupError" in n.body.EngineNotStarted.reason) {
            let { msg: i, logs: o } = n.body.EngineNotStarted.reason.EngineStartupError;
            throw new Kt(r, i, o);
          }
          if ("KnownEngineStartupError" in n.body.EngineNotStarted.reason) {
            let { msg: i, error_code: o } = n.body.EngineNotStarted.reason.KnownEngineStartupError;
            throw new Q(i, t, o);
          }
          if ("HealthcheckTimeout" in n.body.EngineNotStarted.reason) {
            let { logs: i } = n.body.EngineNotStarted.reason.HealthcheckTimeout;
            throw new Wt(r, i);
          }
        }
        if ("InteractiveTransactionMisrouted" in n.body) {
          let i = { IDParseError: "Could not parse interactive transaction ID", NoQueryEngineFoundError: "Could not find Query Engine for the specified host and transaction ID", TransactionStartError: "Could not start interactive transaction" };
          throw new Yt(r, i[n.body.InteractiveTransactionMisrouted.reason]);
        }
        if ("InvalidRequestError" in n.body) throw new Zt(r, n.body.InvalidRequestError.reason);
      }
      if (e.status === 401 || e.status === 403) throw new er(r, yt(ei, n));
      if (e.status === 404) return new Xt(r, yt(Zn, n));
      if (e.status === 429) throw new tr(r, yt(ti, n));
      if (e.status === 504) throw new zt(r, yt(Yn, n));
      if (e.status >= 500) throw new ht(r, yt(Xn, n));
      if (e.status >= 400) throw new Jt(r, yt(zn, n));
    }
    __name(rr, "rr");
    function yt(e, t) {
      return t.type === "EmptyError" ? e : `${e}: ${JSON.stringify(t)}`;
    }
    __name(yt, "yt");
    d();
    u();
    c();
    p2();
    m();
    function Ls(e) {
      let t = Math.pow(2, e) * 50, r = Math.ceil(Math.random() * t) - Math.ceil(t / 2), n = t + r;
      return new Promise((i) => setTimeout(() => i(n), n));
    }
    __name(Ls, "Ls");
    d();
    u();
    c();
    p2();
    m();
    var Ae = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    function Us(e) {
      let t = new TextEncoder().encode(e), r = "", n = t.byteLength, i = n % 3, o = n - i, s, a, l2, f2, g;
      for (let h = 0; h < o; h = h + 3) g = t[h] << 16 | t[h + 1] << 8 | t[h + 2], s = (g & 16515072) >> 18, a = (g & 258048) >> 12, l2 = (g & 4032) >> 6, f2 = g & 63, r += Ae[s] + Ae[a] + Ae[l2] + Ae[f2];
      return i == 1 ? (g = t[o], s = (g & 252) >> 2, a = (g & 3) << 4, r += Ae[s] + Ae[a] + "==") : i == 2 && (g = t[o] << 8 | t[o + 1], s = (g & 64512) >> 10, a = (g & 1008) >> 4, l2 = (g & 15) << 2, r += Ae[s] + Ae[a] + Ae[l2] + "="), r;
    }
    __name(Us, "Us");
    d();
    u();
    c();
    p2();
    m();
    function Bs(e) {
      if (!!e.generator?.previewFeatures.some((r) => r.toLowerCase().includes("metrics"))) throw new Q("The `metrics` preview feature is not yet available with Accelerate.\nPlease remove `metrics` from the `previewFeatures` in your schema.\n\nMore information about Accelerate: https://pris.ly/d/accelerate", e.clientVersion);
    }
    __name(Bs, "Bs");
    d();
    u();
    c();
    p2();
    m();
    var qs = { "@prisma/debug": "workspace:*", "@prisma/engines-version": "6.12.0-15.8047c96bbd92db98a2abc7c9323ce77c02c89dbc", "@prisma/fetch-engine": "workspace:*", "@prisma/get-platform": "workspace:*" };
    d();
    u();
    c();
    p2();
    m();
    d();
    u();
    c();
    p2();
    m();
    var nr = class extends se {
      static {
        __name(this, "nr");
      }
      name = "RequestError";
      code = "P5010";
      constructor(t, r) {
        super(`Cannot fetch data from service:
${t}`, L(r, true));
      }
    };
    N(nr, "RequestError");
    async function Ge(e, t, r = (n) => n) {
      let { clientVersion: n, ...i } = t, o = r(fetch);
      try {
        return await o(e, i);
      } catch (s) {
        let a = s.message ?? "Unknown error";
        throw new nr(a, { clientVersion: n, cause: s });
      }
    }
    __name(Ge, "Ge");
    var ip = /^[1-9][0-9]*\.[0-9]+\.[0-9]+$/;
    var $s = H("prisma:client:dataproxyEngine");
    async function op(e, t) {
      let r = qs["@prisma/engines-version"], n = t.clientVersion ?? "unknown";
      if (y.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION || globalThis.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION) return y.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION || globalThis.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION;
      if (e.includes("accelerate") && n !== "0.0.0" && n !== "in-memory") return n;
      let [i, o] = n?.split("-") ?? [];
      if (o === void 0 && ip.test(i)) return i;
      if (o !== void 0 || n === "0.0.0" || n === "in-memory") {
        let [s] = r.split("-") ?? [], [a, l2, f2] = s.split("."), g = sp(`<=${a}.${l2}.${f2}`), h = await Ge(g, { clientVersion: n });
        if (!h.ok) throw new Error(`Failed to fetch stable Prisma version, unpkg.com status ${h.status} ${h.statusText}, response body: ${await h.text() || "<empty body>"}`);
        let v = await h.text();
        $s("length of body fetched from unpkg.com", v.length);
        let S2;
        try {
          S2 = JSON.parse(v);
        } catch (C) {
          throw console.error("JSON.parse error: body fetched from unpkg.com: ", v), C;
        }
        return S2.version;
      }
      throw new Ve("Only `major.minor.patch` versions are supported by Accelerate.", { clientVersion: n });
    }
    __name(op, "op");
    async function Vs(e, t) {
      let r = await op(e, t);
      return $s("version", r), r;
    }
    __name(Vs, "Vs");
    function sp(e) {
      return encodeURI(`https://unpkg.com/prisma@${e}/package.json`);
    }
    __name(sp, "sp");
    var js = 3;
    var ir = H("prisma:client:dataproxyEngine");
    var wt = class {
      static {
        __name(this, "wt");
      }
      name = "DataProxyEngine";
      inlineSchema;
      inlineSchemaHash;
      inlineDatasources;
      config;
      logEmitter;
      env;
      clientVersion;
      engineHash;
      tracingHelper;
      remoteClientVersion;
      host;
      headerBuilder;
      startPromise;
      protocol;
      constructor(t) {
        Bs(t), this.config = t, this.env = t.env, this.inlineSchema = Us(t.inlineSchema), this.inlineDatasources = t.inlineDatasources, this.inlineSchemaHash = t.inlineSchemaHash, this.clientVersion = t.clientVersion, this.engineHash = t.engineVersion, this.logEmitter = t.logEmitter, this.tracingHelper = t.tracingHelper;
      }
      apiKey() {
        return this.headerBuilder.apiKey;
      }
      version() {
        return this.engineHash;
      }
      async start() {
        this.startPromise !== void 0 && await this.startPromise, this.startPromise = (async () => {
          let { apiKey: t, url: r } = this.getURLAndAPIKey();
          this.host = r.host, this.protocol = r.protocol, this.headerBuilder = new Xr({ apiKey: t, tracingHelper: this.tracingHelper, logLevel: this.config.logLevel ?? "error", logQueries: this.config.logQueries, engineHash: this.engineHash }), this.remoteClientVersion = await Vs(this.host, this.config), ir("host", this.host), ir("protocol", this.protocol);
        })(), await this.startPromise;
      }
      async stop() {
      }
      propagateResponseExtensions(t) {
        t?.logs?.length && t.logs.forEach((r) => {
          switch (r.level) {
            case "debug":
            case "trace":
              ir(r);
              break;
            case "error":
            case "warn":
            case "info": {
              this.logEmitter.emit(r.level, { timestamp: Hn(r.timestamp), message: r.attributes.message ?? "", target: r.target });
              break;
            }
            case "query": {
              this.logEmitter.emit("query", { query: r.attributes.query ?? "", timestamp: Hn(r.timestamp), duration: r.attributes.duration_ms ?? 0, params: r.attributes.params ?? "", target: r.target });
              break;
            }
            default:
              r.level;
          }
        }), t?.traces?.length && this.tracingHelper.dispatchEngineSpans(t.traces);
      }
      onBeforeExit() {
        throw new Error('"beforeExit" hook is not applicable to the remote query engine');
      }
      async url(t) {
        return await this.start(), `${this.protocol}//${this.host}/${this.remoteClientVersion}/${this.inlineSchemaHash}/${t}`;
      }
      async uploadSchema() {
        let t = { name: "schemaUpload", internal: true };
        return this.tracingHelper.runInChildSpan(t, async () => {
          let r = await Ge(await this.url("schema"), { method: "PUT", headers: this.headerBuilder.build(), body: this.inlineSchema, clientVersion: this.clientVersion });
          r.ok || ir("schema response status", r.status);
          let n = await rr(r, this.clientVersion);
          if (n) throw this.logEmitter.emit("warn", { message: `Error while uploading schema: ${n.message}`, timestamp: /* @__PURE__ */ new Date(), target: "" }), n;
          this.logEmitter.emit("info", { message: `Schema (re)uploaded (hash: ${this.inlineSchemaHash})`, timestamp: /* @__PURE__ */ new Date(), target: "" });
        });
      }
      request(t, { traceparent: r, interactiveTransaction: n, customDataProxyFetch: i }) {
        return this.requestInternal({ body: t, traceparent: r, interactiveTransaction: n, customDataProxyFetch: i });
      }
      async requestBatch(t, { traceparent: r, transaction: n, customDataProxyFetch: i }) {
        let o = n?.kind === "itx" ? n.options : void 0, s = Wr(t, n);
        return (await this.requestInternal({ body: s, customDataProxyFetch: i, interactiveTransaction: o, traceparent: r })).map((l2) => (l2.extensions && this.propagateResponseExtensions(l2.extensions), "errors" in l2 ? this.convertProtocolErrorsToClientError(l2.errors) : l2));
      }
      requestInternal({ body: t, traceparent: r, customDataProxyFetch: n, interactiveTransaction: i }) {
        return this.withRetry({ actionGerund: "querying", callback: /* @__PURE__ */ __name(async ({ logHttpCall: o }) => {
          let s = i ? `${i.payload.endpoint}/graphql` : await this.url("graphql");
          o(s);
          let a = await Ge(s, { method: "POST", headers: this.headerBuilder.build({ traceparent: r, transactionId: i?.id }), body: JSON.stringify(t), clientVersion: this.clientVersion }, n);
          a.ok || ir("graphql response status", a.status), await this.handleError(await rr(a, this.clientVersion));
          let l2 = await a.json();
          if (l2.extensions && this.propagateResponseExtensions(l2.extensions), "errors" in l2) throw this.convertProtocolErrorsToClientError(l2.errors);
          return "batchResult" in l2 ? l2.batchResult : l2;
        }, "callback") });
      }
      async transaction(t, r, n) {
        let i = { start: "starting", commit: "committing", rollback: "rolling back" };
        return this.withRetry({ actionGerund: `${i[t]} transaction`, callback: /* @__PURE__ */ __name(async ({ logHttpCall: o }) => {
          if (t === "start") {
            let s = JSON.stringify({ max_wait: n.maxWait, timeout: n.timeout, isolation_level: n.isolationLevel }), a = await this.url("transaction/start");
            o(a);
            let l2 = await Ge(a, { method: "POST", headers: this.headerBuilder.build({ traceparent: r.traceparent }), body: s, clientVersion: this.clientVersion });
            await this.handleError(await rr(l2, this.clientVersion));
            let f2 = await l2.json(), { extensions: g } = f2;
            g && this.propagateResponseExtensions(g);
            let h = f2.id, v = f2["data-proxy"].endpoint;
            return { id: h, payload: { endpoint: v } };
          } else {
            let s = `${n.payload.endpoint}/${t}`;
            o(s);
            let a = await Ge(s, { method: "POST", headers: this.headerBuilder.build({ traceparent: r.traceparent }), clientVersion: this.clientVersion });
            await this.handleError(await rr(a, this.clientVersion));
            let l2 = await a.json(), { extensions: f2 } = l2;
            f2 && this.propagateResponseExtensions(f2);
            return;
          }
        }, "callback") });
      }
      getURLAndAPIKey() {
        return Ns({ clientVersion: this.clientVersion, env: this.env, inlineDatasources: this.inlineDatasources, overrideDatasources: this.config.overrideDatasources });
      }
      metrics() {
        throw new Ve("Metrics are not yet supported for Accelerate", { clientVersion: this.clientVersion });
      }
      async withRetry(t) {
        for (let r = 0; ; r++) {
          let n = /* @__PURE__ */ __name((i) => {
            this.logEmitter.emit("info", { message: `Calling ${i} (n=${r})`, timestamp: /* @__PURE__ */ new Date(), target: "" });
          }, "n");
          try {
            return await t.callback({ logHttpCall: n });
          } catch (i) {
            if (!(i instanceof se) || !i.isRetryable) throw i;
            if (r >= js) throw i instanceof gt ? i.cause : i;
            this.logEmitter.emit("warn", { message: `Attempt ${r + 1}/${js} failed for ${t.actionGerund}: ${i.message ?? "(unknown)"}`, timestamp: /* @__PURE__ */ new Date(), target: "" });
            let o = await Ls(r);
            this.logEmitter.emit("warn", { message: `Retrying after ${o}ms`, timestamp: /* @__PURE__ */ new Date(), target: "" });
          }
        }
      }
      async handleError(t) {
        if (t instanceof je) throw await this.uploadSchema(), new gt({ clientVersion: this.clientVersion, cause: t });
        if (t) throw t;
      }
      convertProtocolErrorsToClientError(t) {
        return t.length === 1 ? Kr(t[0], this.config.clientVersion, this.config.activeProvider) : new ne(JSON.stringify(t), { clientVersion: this.config.clientVersion });
      }
      applyPendingMigrations() {
        throw new Error("Method not implemented.");
      }
    };
    d();
    u();
    c();
    p2();
    m();
    function Gs({ url: e, adapter: t, copyEngine: r, targetBuildType: n }) {
      let i = [], o = [], s = /* @__PURE__ */ __name((R) => {
        i.push({ _tag: "warning", value: R });
      }, "s"), a = /* @__PURE__ */ __name((R) => {
        let D = R.join(`
`);
        o.push({ _tag: "error", value: D });
      }, "a"), l2 = !!e?.startsWith("prisma://"), f2 = yr(e), g = !!t, h = l2 || f2;
      !g && r && h && s(["recommend--no-engine", "In production, we recommend using `prisma generate --no-engine` (See: `prisma generate --help`)"]);
      let v = h || !r;
      g && (v || n === "edge") && (n === "edge" ? a(["Prisma Client was configured to use the `adapter` option but it was imported via its `/edge` endpoint.", "Please either remove the `/edge` endpoint or remove the `adapter` from the Prisma Client constructor."]) : r ? l2 && a(["Prisma Client was configured to use the `adapter` option but the URL was a `prisma://` URL.", "Please either use the `prisma://` URL or remove the `adapter` from the Prisma Client constructor."]) : a(["Prisma Client was configured to use the `adapter` option but `prisma generate` was run with `--no-engine`.", "Please run `prisma generate` without `--no-engine` to be able to use Prisma Client with the adapter."]));
      let S2 = { accelerate: v, ppg: f2, driverAdapters: g };
      function C(R) {
        return R.length > 0;
      }
      __name(C, "C");
      return C(o) ? { ok: false, diagnostics: { warnings: i, errors: o }, isUsing: S2 } : { ok: true, diagnostics: { warnings: i }, isUsing: S2 };
    }
    __name(Gs, "Gs");
    function Qs({ copyEngine: e = true }, t) {
      let r;
      try {
        r = ft({ inlineDatasources: t.inlineDatasources, overrideDatasources: t.overrideDatasources, env: { ...t.env, ...y.env }, clientVersion: t.clientVersion });
      } catch {
      }
      let { ok: n, isUsing: i, diagnostics: o } = Gs({ url: r, adapter: t.adapter, copyEngine: e, targetBuildType: "edge" });
      for (let h of o.warnings) Rt(...h.value);
      if (!n) {
        let h = o.errors[0];
        throw new Z(h.value, { clientVersion: t.clientVersion });
      }
      let s = Ye(t.generator), a = s === "library", l2 = s === "binary", f2 = s === "client", g = (i.accelerate || i.ppg) && !i.driverAdapters;
      return i.accelerate ? new wt(t) : (i.driverAdapters, i.accelerate, new wt(t));
    }
    __name(Qs, "Qs");
    d();
    u();
    c();
    p2();
    m();
    function en({ generator: e }) {
      return e?.previewFeatures ?? [];
    }
    __name(en, "en");
    d();
    u();
    c();
    p2();
    m();
    var Js = /* @__PURE__ */ __name((e) => ({ command: e }), "Js");
    d();
    u();
    c();
    p2();
    m();
    d();
    u();
    c();
    p2();
    m();
    var Ws = /* @__PURE__ */ __name((e) => e.strings.reduce((t, r, n) => `${t}@P${n}${r}`), "Ws");
    d();
    u();
    c();
    p2();
    m();
    function Et(e) {
      try {
        return Ks(e, "fast");
      } catch {
        return Ks(e, "slow");
      }
    }
    __name(Et, "Et");
    function Ks(e, t) {
      return JSON.stringify(e.map((r) => zs(r, t)));
    }
    __name(Ks, "Ks");
    function zs(e, t) {
      if (Array.isArray(e)) return e.map((r) => zs(r, t));
      if (typeof e == "bigint") return { prisma__type: "bigint", prisma__value: e.toString() };
      if (rt(e)) return { prisma__type: "date", prisma__value: e.toJSON() };
      if (he.isDecimal(e)) return { prisma__type: "decimal", prisma__value: e.toJSON() };
      if (w2.Buffer.isBuffer(e)) return { prisma__type: "bytes", prisma__value: e.toString("base64") };
      if (ap(e)) return { prisma__type: "bytes", prisma__value: w2.Buffer.from(e).toString("base64") };
      if (ArrayBuffer.isView(e)) {
        let { buffer: r, byteOffset: n, byteLength: i } = e;
        return { prisma__type: "bytes", prisma__value: w2.Buffer.from(r, n, i).toString("base64") };
      }
      return typeof e == "object" && t === "slow" ? Ys(e) : e;
    }
    __name(zs, "zs");
    function ap(e) {
      return e instanceof ArrayBuffer || e instanceof SharedArrayBuffer ? true : typeof e == "object" && e !== null ? e[Symbol.toStringTag] === "ArrayBuffer" || e[Symbol.toStringTag] === "SharedArrayBuffer" : false;
    }
    __name(ap, "ap");
    function Ys(e) {
      if (typeof e != "object" || e === null) return e;
      if (typeof e.toJSON == "function") return e.toJSON();
      if (Array.isArray(e)) return e.map(Hs);
      let t = {};
      for (let r of Object.keys(e)) t[r] = Hs(e[r]);
      return t;
    }
    __name(Ys, "Ys");
    function Hs(e) {
      return typeof e == "bigint" ? e.toString() : Ys(e);
    }
    __name(Hs, "Hs");
    var lp = /^(\s*alter\s)/i;
    var Zs = H("prisma:client");
    function ri(e, t, r, n) {
      if (!(e !== "postgresql" && e !== "cockroachdb") && r.length > 0 && lp.exec(t)) throw new Error(`Running ALTER using ${n} is not supported
Using the example below you can still execute your query with Prisma, but please note that it is vulnerable to SQL injection attacks and requires you to take care of input sanitization.

Example:
  await prisma.$executeRawUnsafe(\`ALTER USER prisma WITH PASSWORD '\${password}'\`)

More Information: https://pris.ly/d/execute-raw
`);
    }
    __name(ri, "ri");
    var ni = /* @__PURE__ */ __name(({ clientMethod: e, activeProvider: t }) => (r) => {
      let n = "", i;
      if (jr(r)) n = r.sql, i = { values: Et(r.values), __prismaRawParameters__: true };
      else if (Array.isArray(r)) {
        let [o, ...s] = r;
        n = o, i = { values: Et(s || []), __prismaRawParameters__: true };
      } else switch (t) {
        case "sqlite":
        case "mysql": {
          n = r.sql, i = { values: Et(r.values), __prismaRawParameters__: true };
          break;
        }
        case "cockroachdb":
        case "postgresql":
        case "postgres": {
          n = r.text, i = { values: Et(r.values), __prismaRawParameters__: true };
          break;
        }
        case "sqlserver": {
          n = Ws(r), i = { values: Et(r.values), __prismaRawParameters__: true };
          break;
        }
        default:
          throw new Error(`The ${t} provider does not support ${e}`);
      }
      return i?.values ? Zs(`prisma.${e}(${n}, ${i.values})`) : Zs(`prisma.${e}(${n})`), { query: n, parameters: i };
    }, "ni");
    var Xs = { requestArgsToMiddlewareArgs(e) {
      return [e.strings, ...e.values];
    }, middlewareArgsToRequestArgs(e) {
      let [t, ...r] = e;
      return new oe(t, r);
    } };
    var ea = { requestArgsToMiddlewareArgs(e) {
      return [e];
    }, middlewareArgsToRequestArgs(e) {
      return e[0];
    } };
    d();
    u();
    c();
    p2();
    m();
    function ii(e) {
      return function(r, n) {
        let i, o = /* @__PURE__ */ __name((s = e) => {
          try {
            return s === void 0 || s?.kind === "itx" ? i ??= ta(r(s)) : ta(r(s));
          } catch (a) {
            return Promise.reject(a);
          }
        }, "o");
        return { get spec() {
          return n;
        }, then(s, a) {
          return o().then(s, a);
        }, catch(s) {
          return o().catch(s);
        }, finally(s) {
          return o().finally(s);
        }, requestTransaction(s) {
          let a = o(s);
          return a.requestTransaction ? a.requestTransaction(s) : a;
        }, [Symbol.toStringTag]: "PrismaPromise" };
      };
    }
    __name(ii, "ii");
    function ta(e) {
      return typeof e.then == "function" ? e : Promise.resolve(e);
    }
    __name(ta, "ta");
    d();
    u();
    c();
    p2();
    m();
    var up = xn.split(".")[0];
    var cp = { isEnabled() {
      return false;
    }, getTraceParent() {
      return "00-10-10-00";
    }, dispatchEngineSpans() {
    }, getActiveContext() {
    }, runInChildSpan(e, t) {
      return t();
    } };
    var oi = class {
      static {
        __name(this, "oi");
      }
      isEnabled() {
        return this.getGlobalTracingHelper().isEnabled();
      }
      getTraceParent(t) {
        return this.getGlobalTracingHelper().getTraceParent(t);
      }
      dispatchEngineSpans(t) {
        return this.getGlobalTracingHelper().dispatchEngineSpans(t);
      }
      getActiveContext() {
        return this.getGlobalTracingHelper().getActiveContext();
      }
      runInChildSpan(t, r) {
        return this.getGlobalTracingHelper().runInChildSpan(t, r);
      }
      getGlobalTracingHelper() {
        let t = globalThis[`V${up}_PRISMA_INSTRUMENTATION`], r = globalThis.PRISMA_INSTRUMENTATION;
        return t?.helper ?? r?.helper ?? cp;
      }
    };
    function ra() {
      return new oi();
    }
    __name(ra, "ra");
    d();
    u();
    c();
    p2();
    m();
    function na(e, t = () => {
    }) {
      let r, n = new Promise((i) => r = i);
      return { then(i) {
        return --e === 0 && r(t()), i?.(n);
      } };
    }
    __name(na, "na");
    d();
    u();
    c();
    p2();
    m();
    function ia(e) {
      return typeof e == "string" ? e : e.reduce((t, r) => {
        let n = typeof r == "string" ? r : r.level;
        return n === "query" ? t : t && (r === "info" || t === "info") ? "info" : n;
      }, void 0);
    }
    __name(ia, "ia");
    d();
    u();
    c();
    p2();
    m();
    var tn = class {
      static {
        __name(this, "tn");
      }
      _middlewares = [];
      use(t) {
        this._middlewares.push(t);
      }
      get(t) {
        return this._middlewares[t];
      }
      has(t) {
        return !!this._middlewares[t];
      }
      length() {
        return this._middlewares.length;
      }
    };
    d();
    u();
    c();
    p2();
    m();
    var sa = Le(so());
    d();
    u();
    c();
    p2();
    m();
    function rn(e) {
      return typeof e.batchRequestIdx == "number";
    }
    __name(rn, "rn");
    d();
    u();
    c();
    p2();
    m();
    function oa(e) {
      if (e.action !== "findUnique" && e.action !== "findUniqueOrThrow") return;
      let t = [];
      return e.modelName && t.push(e.modelName), e.query.arguments && t.push(si(e.query.arguments)), t.push(si(e.query.selection)), t.join("");
    }
    __name(oa, "oa");
    function si(e) {
      return `(${Object.keys(e).sort().map((r) => {
        let n = e[r];
        return typeof n == "object" && n !== null ? `(${r} ${si(n)})` : r;
      }).join(" ")})`;
    }
    __name(si, "si");
    d();
    u();
    c();
    p2();
    m();
    var pp = { aggregate: false, aggregateRaw: false, createMany: true, createManyAndReturn: true, createOne: true, deleteMany: true, deleteOne: true, executeRaw: true, findFirst: false, findFirstOrThrow: false, findMany: false, findRaw: false, findUnique: false, findUniqueOrThrow: false, groupBy: false, queryRaw: false, runCommandRaw: true, updateMany: true, updateManyAndReturn: true, updateOne: true, upsertOne: true };
    function ai(e) {
      return pp[e];
    }
    __name(ai, "ai");
    d();
    u();
    c();
    p2();
    m();
    var nn = class {
      static {
        __name(this, "nn");
      }
      constructor(t) {
        this.options = t;
        this.batches = {};
      }
      batches;
      tickActive = false;
      request(t) {
        let r = this.options.batchBy(t);
        return r ? (this.batches[r] || (this.batches[r] = [], this.tickActive || (this.tickActive = true, y.nextTick(() => {
          this.dispatchBatches(), this.tickActive = false;
        }))), new Promise((n, i) => {
          this.batches[r].push({ request: t, resolve: n, reject: i });
        })) : this.options.singleLoader(t);
      }
      dispatchBatches() {
        for (let t in this.batches) {
          let r = this.batches[t];
          delete this.batches[t], r.length === 1 ? this.options.singleLoader(r[0].request).then((n) => {
            n instanceof Error ? r[0].reject(n) : r[0].resolve(n);
          }).catch((n) => {
            r[0].reject(n);
          }) : (r.sort((n, i) => this.options.batchOrder(n.request, i.request)), this.options.batchLoader(r.map((n) => n.request)).then((n) => {
            if (n instanceof Error) for (let i = 0; i < r.length; i++) r[i].reject(n);
            else for (let i = 0; i < r.length; i++) {
              let o = n[i];
              o instanceof Error ? r[i].reject(o) : r[i].resolve(o);
            }
          }).catch((n) => {
            for (let i = 0; i < r.length; i++) r[i].reject(n);
          }));
        }
      }
      get [Symbol.toStringTag]() {
        return "DataLoader";
      }
    };
    d();
    u();
    c();
    p2();
    m();
    function Qe(e, t) {
      if (t === null) return t;
      switch (e) {
        case "bigint":
          return BigInt(t);
        case "bytes": {
          let { buffer: r, byteOffset: n, byteLength: i } = w2.Buffer.from(t, "base64");
          return new Uint8Array(r, n, i);
        }
        case "decimal":
          return new he(t);
        case "datetime":
        case "date":
          return new Date(t);
        case "time":
          return /* @__PURE__ */ new Date(`1970-01-01T${t}Z`);
        case "bigint-array":
          return t.map((r) => Qe("bigint", r));
        case "bytes-array":
          return t.map((r) => Qe("bytes", r));
        case "decimal-array":
          return t.map((r) => Qe("decimal", r));
        case "datetime-array":
          return t.map((r) => Qe("datetime", r));
        case "date-array":
          return t.map((r) => Qe("date", r));
        case "time-array":
          return t.map((r) => Qe("time", r));
        default:
          return t;
      }
    }
    __name(Qe, "Qe");
    function on(e) {
      let t = [], r = mp(e);
      for (let n = 0; n < e.rows.length; n++) {
        let i = e.rows[n], o = { ...r };
        for (let s = 0; s < i.length; s++) o[e.columns[s]] = Qe(e.types[s], i[s]);
        t.push(o);
      }
      return t;
    }
    __name(on, "on");
    function mp(e) {
      let t = {};
      for (let r = 0; r < e.columns.length; r++) t[e.columns[r]] = null;
      return t;
    }
    __name(mp, "mp");
    var dp = H("prisma:client:request_handler");
    var sn = class {
      static {
        __name(this, "sn");
      }
      client;
      dataloader;
      logEmitter;
      constructor(t, r) {
        this.logEmitter = r, this.client = t, this.dataloader = new nn({ batchLoader: Rs(async ({ requests: n, customDataProxyFetch: i }) => {
          let { transaction: o, otelParentCtx: s } = n[0], a = n.map((h) => h.protocolQuery), l2 = this.client._tracingHelper.getTraceParent(s), f2 = n.some((h) => ai(h.protocolQuery.action));
          return (await this.client._engine.requestBatch(a, { traceparent: l2, transaction: fp(o), containsWrite: f2, customDataProxyFetch: i })).map((h, v) => {
            if (h instanceof Error) return h;
            try {
              return this.mapQueryEngineResult(n[v], h);
            } catch (S2) {
              return S2;
            }
          });
        }), singleLoader: /* @__PURE__ */ __name(async (n) => {
          let i = n.transaction?.kind === "itx" ? aa(n.transaction) : void 0, o = await this.client._engine.request(n.protocolQuery, { traceparent: this.client._tracingHelper.getTraceParent(), interactiveTransaction: i, isWrite: ai(n.protocolQuery.action), customDataProxyFetch: n.customDataProxyFetch });
          return this.mapQueryEngineResult(n, o);
        }, "singleLoader"), batchBy: /* @__PURE__ */ __name((n) => n.transaction?.id ? `transaction-${n.transaction.id}` : oa(n.protocolQuery), "batchBy"), batchOrder(n, i) {
          return n.transaction?.kind === "batch" && i.transaction?.kind === "batch" ? n.transaction.index - i.transaction.index : 0;
        } });
      }
      async request(t) {
        try {
          return await this.dataloader.request(t);
        } catch (r) {
          let { clientMethod: n, callsite: i, transaction: o, args: s, modelName: a } = t;
          this.handleAndLogRequestError({ error: r, clientMethod: n, callsite: i, transaction: o, args: s, modelName: a, globalOmit: t.globalOmit });
        }
      }
      mapQueryEngineResult({ dataPath: t, unpacker: r }, n) {
        let i = n?.data, o = this.unpack(i, t, r);
        return y.env.PRISMA_CLIENT_GET_TIME ? { data: o } : o;
      }
      handleAndLogRequestError(t) {
        try {
          this.handleRequestError(t);
        } catch (r) {
          throw this.logEmitter && this.logEmitter.emit("error", { message: r.message, target: t.clientMethod, timestamp: /* @__PURE__ */ new Date() }), r;
        }
      }
      handleRequestError({ error: t, clientMethod: r, callsite: n, transaction: i, args: o, modelName: s, globalOmit: a }) {
        if (dp(t), gp(t, i)) throw t;
        if (t instanceof re && hp(t)) {
          let f2 = la(t.meta);
          Lr({ args: o, errors: [f2], callsite: n, errorFormat: this.client._errorFormat, originalMethod: r, clientVersion: this.client._clientVersion, globalOmit: a });
        }
        let l2 = t.message;
        if (n && (l2 = Rr({ callsite: n, originalMethod: r, isPanic: t.isPanic, showColors: this.client._errorFormat === "pretty", message: l2 })), l2 = this.sanitizeMessage(l2), t.code) {
          let f2 = s ? { modelName: s, ...t.meta } : t.meta;
          throw new re(l2, { code: t.code, clientVersion: this.client._clientVersion, meta: f2, batchRequestIdx: t.batchRequestIdx });
        } else {
          if (t.isPanic) throw new ve(l2, this.client._clientVersion);
          if (t instanceof ne) throw new ne(l2, { clientVersion: this.client._clientVersion, batchRequestIdx: t.batchRequestIdx });
          if (t instanceof Q) throw new Q(l2, this.client._clientVersion);
          if (t instanceof ve) throw new ve(l2, this.client._clientVersion);
        }
        throw t.clientVersion = this.client._clientVersion, t;
      }
      sanitizeMessage(t) {
        return this.client._errorFormat && this.client._errorFormat !== "pretty" ? (0, sa.default)(t) : t;
      }
      unpack(t, r, n) {
        if (!t || (t.data && (t = t.data), !t)) return t;
        let i = Object.keys(t)[0], o = Object.values(t)[0], s = r.filter((f2) => f2 !== "select" && f2 !== "include"), a = Qn(o, s), l2 = i === "queryRaw" ? on(a) : tt(a);
        return n ? n(l2) : l2;
      }
      get [Symbol.toStringTag]() {
        return "RequestHandler";
      }
    };
    function fp(e) {
      if (e) {
        if (e.kind === "batch") return { kind: "batch", options: { isolationLevel: e.isolationLevel } };
        if (e.kind === "itx") return { kind: "itx", options: aa(e) };
        Pe(e, "Unknown transaction kind");
      }
    }
    __name(fp, "fp");
    function aa(e) {
      return { id: e.id, payload: e.payload };
    }
    __name(aa, "aa");
    function gp(e, t) {
      return rn(e) && t?.kind === "batch" && e.batchRequestIdx !== t.index;
    }
    __name(gp, "gp");
    function hp(e) {
      return e.code === "P2009" || e.code === "P2012";
    }
    __name(hp, "hp");
    function la(e) {
      if (e.kind === "Union") return { kind: "Union", errors: e.errors.map(la) };
      if (Array.isArray(e.selectionPath)) {
        let [, ...t] = e.selectionPath;
        return { ...e, selectionPath: t };
      }
      return e;
    }
    __name(la, "la");
    d();
    u();
    c();
    p2();
    m();
    var ua = _s;
    d();
    u();
    c();
    p2();
    m();
    var fa = Le(Mn());
    d();
    u();
    c();
    p2();
    m();
    var B = class extends Error {
      static {
        __name(this, "B");
      }
      constructor(t) {
        super(t + `
Read more at https://pris.ly/d/client-constructor`), this.name = "PrismaClientConstructorValidationError";
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientConstructorValidationError";
      }
    };
    N(B, "PrismaClientConstructorValidationError");
    var ca = ["datasources", "datasourceUrl", "errorFormat", "adapter", "log", "transactionOptions", "omit", "__internal"];
    var pa = ["pretty", "colorless", "minimal"];
    var ma = ["info", "query", "warn", "error"];
    var yp = { datasources: /* @__PURE__ */ __name((e, { datasourceNames: t }) => {
      if (e) {
        if (typeof e != "object" || Array.isArray(e)) throw new B(`Invalid value ${JSON.stringify(e)} for "datasources" provided to PrismaClient constructor`);
        for (let [r, n] of Object.entries(e)) {
          if (!t.includes(r)) {
            let i = bt(r, t) || ` Available datasources: ${t.join(", ")}`;
            throw new B(`Unknown datasource ${r} provided to PrismaClient constructor.${i}`);
          }
          if (typeof n != "object" || Array.isArray(n)) throw new B(`Invalid value ${JSON.stringify(e)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
          if (n && typeof n == "object") for (let [i, o] of Object.entries(n)) {
            if (i !== "url") throw new B(`Invalid value ${JSON.stringify(e)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
            if (typeof o != "string") throw new B(`Invalid value ${JSON.stringify(o)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
          }
        }
      }
    }, "datasources"), adapter: /* @__PURE__ */ __name((e, t) => {
      if (!e && Ye(t.generator) === "client") throw new B('Using engine type "client" requires a driver adapter to be provided to PrismaClient constructor.');
      if (e === null) return;
      if (e === void 0) throw new B('"adapter" property must not be undefined, use null to conditionally disable driver adapters.');
      if (!en(t).includes("driverAdapters")) throw new B('"adapter" property can only be provided to PrismaClient constructor when "driverAdapters" preview feature is enabled.');
      if (Ye(t.generator) === "binary") throw new B('Cannot use a driver adapter with the "binary" Query Engine. Please use the "library" Query Engine.');
    }, "adapter"), datasourceUrl: /* @__PURE__ */ __name((e) => {
      if (typeof e < "u" && typeof e != "string") throw new B(`Invalid value ${JSON.stringify(e)} for "datasourceUrl" provided to PrismaClient constructor.
Expected string or undefined.`);
    }, "datasourceUrl"), errorFormat: /* @__PURE__ */ __name((e) => {
      if (e) {
        if (typeof e != "string") throw new B(`Invalid value ${JSON.stringify(e)} for "errorFormat" provided to PrismaClient constructor.`);
        if (!pa.includes(e)) {
          let t = bt(e, pa);
          throw new B(`Invalid errorFormat ${e} provided to PrismaClient constructor.${t}`);
        }
      }
    }, "errorFormat"), log: /* @__PURE__ */ __name((e) => {
      if (!e) return;
      if (!Array.isArray(e)) throw new B(`Invalid value ${JSON.stringify(e)} for "log" provided to PrismaClient constructor.`);
      function t(r) {
        if (typeof r == "string" && !ma.includes(r)) {
          let n = bt(r, ma);
          throw new B(`Invalid log level "${r}" provided to PrismaClient constructor.${n}`);
        }
      }
      __name(t, "t");
      for (let r of e) {
        t(r);
        let n = { level: t, emit: /* @__PURE__ */ __name((i) => {
          let o = ["stdout", "event"];
          if (!o.includes(i)) {
            let s = bt(i, o);
            throw new B(`Invalid value ${JSON.stringify(i)} for "emit" in logLevel provided to PrismaClient constructor.${s}`);
          }
        }, "emit") };
        if (r && typeof r == "object") for (let [i, o] of Object.entries(r)) if (n[i]) n[i](o);
        else throw new B(`Invalid property ${i} for "log" provided to PrismaClient constructor`);
      }
    }, "log"), transactionOptions: /* @__PURE__ */ __name((e) => {
      if (!e) return;
      let t = e.maxWait;
      if (t != null && t <= 0) throw new B(`Invalid value ${t} for maxWait in "transactionOptions" provided to PrismaClient constructor. maxWait needs to be greater than 0`);
      let r = e.timeout;
      if (r != null && r <= 0) throw new B(`Invalid value ${r} for timeout in "transactionOptions" provided to PrismaClient constructor. timeout needs to be greater than 0`);
    }, "transactionOptions"), omit: /* @__PURE__ */ __name((e, t) => {
      if (typeof e != "object") throw new B('"omit" option is expected to be an object.');
      if (e === null) throw new B('"omit" option can not be `null`');
      let r = [];
      for (let [n, i] of Object.entries(e)) {
        let o = Ep(n, t.runtimeDataModel);
        if (!o) {
          r.push({ kind: "UnknownModel", modelKey: n });
          continue;
        }
        for (let [s, a] of Object.entries(i)) {
          let l2 = o.fields.find((f2) => f2.name === s);
          if (!l2) {
            r.push({ kind: "UnknownField", modelKey: n, fieldName: s });
            continue;
          }
          if (l2.relationName) {
            r.push({ kind: "RelationInOmit", modelKey: n, fieldName: s });
            continue;
          }
          typeof a != "boolean" && r.push({ kind: "InvalidFieldValue", modelKey: n, fieldName: s });
        }
      }
      if (r.length > 0) throw new B(bp(e, r));
    }, "omit"), __internal: /* @__PURE__ */ __name((e) => {
      if (!e) return;
      let t = ["debug", "engine", "configOverride"];
      if (typeof e != "object") throw new B(`Invalid value ${JSON.stringify(e)} for "__internal" to PrismaClient constructor`);
      for (let [r] of Object.entries(e)) if (!t.includes(r)) {
        let n = bt(r, t);
        throw new B(`Invalid property ${JSON.stringify(r)} for "__internal" provided to PrismaClient constructor.${n}`);
      }
    }, "__internal") };
    function ga(e, t) {
      for (let [r, n] of Object.entries(e)) {
        if (!ca.includes(r)) {
          let i = bt(r, ca);
          throw new B(`Unknown property ${r} provided to PrismaClient constructor.${i}`);
        }
        yp[r](n, t);
      }
      if (e.datasourceUrl && e.datasources) throw new B('Can not use "datasourceUrl" and "datasources" options at the same time. Pick one of them');
    }
    __name(ga, "ga");
    function bt(e, t) {
      if (t.length === 0 || typeof e != "string") return "";
      let r = wp(e, t);
      return r ? ` Did you mean "${r}"?` : "";
    }
    __name(bt, "bt");
    function wp(e, t) {
      if (t.length === 0) return null;
      let r = t.map((i) => ({ value: i, distance: (0, fa.default)(e, i) }));
      r.sort((i, o) => i.distance < o.distance ? -1 : 1);
      let n = r[0];
      return n.distance < 3 ? n.value : null;
    }
    __name(wp, "wp");
    function Ep(e, t) {
      return da(t.models, e) ?? da(t.types, e);
    }
    __name(Ep, "Ep");
    function da(e, t) {
      let r = Object.keys(e).find((n) => Me(n) === t);
      if (r) return e[r];
    }
    __name(da, "da");
    function bp(e, t) {
      let r = ut(e);
      for (let o of t) switch (o.kind) {
        case "UnknownModel":
          r.arguments.getField(o.modelKey)?.markAsError(), r.addErrorMessage(() => `Unknown model name: ${o.modelKey}.`);
          break;
        case "UnknownField":
          r.arguments.getDeepField([o.modelKey, o.fieldName])?.markAsError(), r.addErrorMessage(() => `Model "${o.modelKey}" does not have a field named "${o.fieldName}".`);
          break;
        case "RelationInOmit":
          r.arguments.getDeepField([o.modelKey, o.fieldName])?.markAsError(), r.addErrorMessage(() => 'Relations are already excluded by default and can not be specified in "omit".');
          break;
        case "InvalidFieldValue":
          r.arguments.getDeepFieldValue([o.modelKey, o.fieldName])?.markAsError(), r.addErrorMessage(() => "Omit field option value must be a boolean.");
          break;
      }
      let { message: n, args: i } = Fr(r, "colorless");
      return `Error validating "omit" option:

${i}

${n}`;
    }
    __name(bp, "bp");
    d();
    u();
    c();
    p2();
    m();
    function ha(e) {
      return e.length === 0 ? Promise.resolve([]) : new Promise((t, r) => {
        let n = new Array(e.length), i = null, o = false, s = 0, a = /* @__PURE__ */ __name(() => {
          o || (s++, s === e.length && (o = true, i ? r(i) : t(n)));
        }, "a"), l2 = /* @__PURE__ */ __name((f2) => {
          o || (o = true, r(f2));
        }, "l");
        for (let f2 = 0; f2 < e.length; f2++) e[f2].then((g) => {
          n[f2] = g, a();
        }, (g) => {
          if (!rn(g)) {
            l2(g);
            return;
          }
          g.batchRequestIdx === f2 ? l2(g) : (i || (i = g), a());
        });
      });
    }
    __name(ha, "ha");
    var Fe = H("prisma:client");
    typeof globalThis == "object" && (globalThis.NODE_CLIENT = true);
    var xp = { requestArgsToMiddlewareArgs: /* @__PURE__ */ __name((e) => e, "requestArgsToMiddlewareArgs"), middlewareArgsToRequestArgs: /* @__PURE__ */ __name((e) => e, "middlewareArgsToRequestArgs") };
    var Pp = Symbol.for("prisma.client.transaction.id");
    var vp = { id: 0, nextId() {
      return ++this.id;
    } };
    function Ea(e) {
      class t {
        static {
          __name(this, "t");
        }
        _originalClient = this;
        _runtimeDataModel;
        _requestHandler;
        _connectionPromise;
        _disconnectionPromise;
        _engineConfig;
        _accelerateEngineConfig;
        _clientVersion;
        _errorFormat;
        _tracingHelper;
        _middlewares = new tn();
        _previewFeatures;
        _activeProvider;
        _globalOmit;
        _extensions;
        _engine;
        _appliedParent;
        _createPrismaPromise = ii();
        constructor(n) {
          e = n?.__internal?.configOverride?.(e) ?? e, Ds(e), n && ga(n, e);
          let i = new Gr().on("error", () => {
          });
          this._extensions = ct.empty(), this._previewFeatures = en(e), this._clientVersion = e.clientVersion ?? ua, this._activeProvider = e.activeProvider, this._globalOmit = n?.omit, this._tracingHelper = ra();
          let o = e.relativeEnvPaths && { rootEnvPath: e.relativeEnvPaths.rootEnvPath && fr.resolve(e.dirname, e.relativeEnvPaths.rootEnvPath), schemaEnvPath: e.relativeEnvPaths.schemaEnvPath && fr.resolve(e.dirname, e.relativeEnvPaths.schemaEnvPath) }, s;
          if (n?.adapter) {
            s = n.adapter;
            let l2 = e.activeProvider === "postgresql" || e.activeProvider === "cockroachdb" ? "postgres" : e.activeProvider;
            if (s.provider !== l2) throw new Q(`The Driver Adapter \`${s.adapterName}\`, based on \`${s.provider}\`, is not compatible with the provider \`${l2}\` specified in the Prisma schema.`, this._clientVersion);
            if (n.datasources || n.datasourceUrl !== void 0) throw new Q("Custom datasource configuration is not compatible with Prisma Driver Adapters. Please define the database connection string directly in the Driver Adapter configuration.", this._clientVersion);
          }
          let a = e.injectableEdgeEnv?.();
          try {
            let l2 = n ?? {}, f2 = l2.__internal ?? {}, g = f2.debug === true;
            g && H.enable("prisma:client");
            let h = fr.resolve(e.dirname, e.relativePath);
            Qi.existsSync(h) || (h = e.dirname), Fe("dirname", e.dirname), Fe("relativePath", e.relativePath), Fe("cwd", h);
            let v = f2.engine || {};
            if (l2.errorFormat ? this._errorFormat = l2.errorFormat : y.env.NODE_ENV === "production" ? this._errorFormat = "minimal" : y.env.NO_COLOR ? this._errorFormat = "colorless" : this._errorFormat = "colorless", this._runtimeDataModel = e.runtimeDataModel, this._engineConfig = { cwd: h, dirname: e.dirname, enableDebugLogs: g, allowTriggerPanic: v.allowTriggerPanic, prismaPath: v.binaryPath ?? void 0, engineEndpoint: v.endpoint, generator: e.generator, showColors: this._errorFormat === "pretty", logLevel: l2.log && ia(l2.log), logQueries: l2.log && !!(typeof l2.log == "string" ? l2.log === "query" : l2.log.find((S2) => typeof S2 == "string" ? S2 === "query" : S2.level === "query")), env: a?.parsed ?? {}, flags: [], engineWasm: e.engineWasm, compilerWasm: e.compilerWasm, clientVersion: e.clientVersion, engineVersion: e.engineVersion, previewFeatures: this._previewFeatures, activeProvider: e.activeProvider, inlineSchema: e.inlineSchema, overrideDatasources: Ms(l2, e.datasourceNames), inlineDatasources: e.inlineDatasources, inlineSchemaHash: e.inlineSchemaHash, tracingHelper: this._tracingHelper, transactionOptions: { maxWait: l2.transactionOptions?.maxWait ?? 2e3, timeout: l2.transactionOptions?.timeout ?? 5e3, isolationLevel: l2.transactionOptions?.isolationLevel }, logEmitter: i, isBundled: e.isBundled, adapter: s }, this._accelerateEngineConfig = { ...this._engineConfig, accelerateUtils: { resolveDatasourceUrl: ft, getBatchRequestPayload: Wr, prismaGraphQLToJSError: Kr, PrismaClientUnknownRequestError: ne, PrismaClientInitializationError: Q, PrismaClientKnownRequestError: re, debug: H("prisma:client:accelerateEngine"), engineVersion: wa.version, clientVersion: e.clientVersion } }, Fe("clientVersion", e.clientVersion), this._engine = Qs(e, this._engineConfig), this._requestHandler = new sn(this, i), l2.log) for (let S2 of l2.log) {
              let C = typeof S2 == "string" ? S2 : S2.emit === "stdout" ? S2.level : null;
              C && this.$on(C, (R) => {
                At.log(`${At.tags[C] ?? ""}`, R.message || R.query);
              });
            }
          } catch (l2) {
            throw l2.clientVersion = this._clientVersion, l2;
          }
          return this._appliedParent = Gt(this);
        }
        get [Symbol.toStringTag]() {
          return "PrismaClient";
        }
        $use(n) {
          this._middlewares.use(n);
        }
        $on(n, i) {
          return n === "beforeExit" ? this._engine.onBeforeExit(i) : n && this._engineConfig.logEmitter.on(n, i), this;
        }
        $connect() {
          try {
            return this._engine.start();
          } catch (n) {
            throw n.clientVersion = this._clientVersion, n;
          }
        }
        async $disconnect() {
          try {
            await this._engine.stop();
          } catch (n) {
            throw n.clientVersion = this._clientVersion, n;
          } finally {
            ji();
          }
        }
        $executeRawInternal(n, i, o, s) {
          let a = this._activeProvider;
          return this._request({ action: "executeRaw", args: o, transaction: n, clientMethod: i, argsMapper: ni({ clientMethod: i, activeProvider: a }), callsite: Ne(this._errorFormat), dataPath: [], middlewareArgsMapper: s });
        }
        $executeRaw(n, ...i) {
          return this._createPrismaPromise((o) => {
            if (n.raw !== void 0 || n.sql !== void 0) {
              let [s, a] = ya(n, i);
              return ri(this._activeProvider, s.text, s.values, Array.isArray(n) ? "prisma.$executeRaw`<SQL>`" : "prisma.$executeRaw(sql`<SQL>`)"), this.$executeRawInternal(o, "$executeRaw", s, a);
            }
            throw new Z("`$executeRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#executeraw\n", { clientVersion: this._clientVersion });
          });
        }
        $executeRawUnsafe(n, ...i) {
          return this._createPrismaPromise((o) => (ri(this._activeProvider, n, i, "prisma.$executeRawUnsafe(<SQL>, [...values])"), this.$executeRawInternal(o, "$executeRawUnsafe", [n, ...i])));
        }
        $runCommandRaw(n) {
          if (e.activeProvider !== "mongodb") throw new Z(`The ${e.activeProvider} provider does not support $runCommandRaw. Use the mongodb provider.`, { clientVersion: this._clientVersion });
          return this._createPrismaPromise((i) => this._request({ args: n, clientMethod: "$runCommandRaw", dataPath: [], action: "runCommandRaw", argsMapper: Js, callsite: Ne(this._errorFormat), transaction: i }));
        }
        async $queryRawInternal(n, i, o, s) {
          let a = this._activeProvider;
          return this._request({ action: "queryRaw", args: o, transaction: n, clientMethod: i, argsMapper: ni({ clientMethod: i, activeProvider: a }), callsite: Ne(this._errorFormat), dataPath: [], middlewareArgsMapper: s });
        }
        $queryRaw(n, ...i) {
          return this._createPrismaPromise((o) => {
            if (n.raw !== void 0 || n.sql !== void 0) return this.$queryRawInternal(o, "$queryRaw", ...ya(n, i));
            throw new Z("`$queryRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#queryraw\n", { clientVersion: this._clientVersion });
          });
        }
        $queryRawTyped(n) {
          return this._createPrismaPromise((i) => {
            if (!this._hasPreviewFlag("typedSql")) throw new Z("`typedSql` preview feature must be enabled in order to access $queryRawTyped API", { clientVersion: this._clientVersion });
            return this.$queryRawInternal(i, "$queryRawTyped", n);
          });
        }
        $queryRawUnsafe(n, ...i) {
          return this._createPrismaPromise((o) => this.$queryRawInternal(o, "$queryRawUnsafe", [n, ...i]));
        }
        _transactionWithArray({ promises: n, options: i }) {
          let o = vp.nextId(), s = na(n.length), a = n.map((l2, f2) => {
            if (l2?.[Symbol.toStringTag] !== "PrismaPromise") throw new Error("All elements of the array need to be Prisma Client promises. Hint: Please make sure you are not awaiting the Prisma client calls you intended to pass in the $transaction function.");
            let g = i?.isolationLevel ?? this._engineConfig.transactionOptions.isolationLevel, h = { kind: "batch", id: o, index: f2, isolationLevel: g, lock: s };
            return l2.requestTransaction?.(h) ?? l2;
          });
          return ha(a);
        }
        async _transactionWithCallback({ callback: n, options: i }) {
          let o = { traceparent: this._tracingHelper.getTraceParent() }, s = { maxWait: i?.maxWait ?? this._engineConfig.transactionOptions.maxWait, timeout: i?.timeout ?? this._engineConfig.transactionOptions.timeout, isolationLevel: i?.isolationLevel ?? this._engineConfig.transactionOptions.isolationLevel }, a = await this._engine.transaction("start", o, s), l2;
          try {
            let f2 = { kind: "itx", ...a };
            l2 = await n(this._createItxClient(f2)), await this._engine.transaction("commit", o, a);
          } catch (f2) {
            throw await this._engine.transaction("rollback", o, a).catch(() => {
            }), f2;
          }
          return l2;
        }
        _createItxClient(n) {
          return pe(Gt(pe(ys(this), [ee("_appliedParent", () => this._appliedParent._createItxClient(n)), ee("_createPrismaPromise", () => ii(n)), ee(Pp, () => n.id)])), [mt(Ps)]);
        }
        $transaction(n, i) {
          let o;
          typeof n == "function" ? this._engineConfig.adapter?.adapterName === "@prisma/adapter-d1" ? o = /* @__PURE__ */ __name(() => {
            throw new Error("Cloudflare D1 does not support interactive transactions. We recommend you to refactor your queries with that limitation in mind, and use batch transactions with `prisma.$transactions([])` where applicable.");
          }, "o") : o = /* @__PURE__ */ __name(() => this._transactionWithCallback({ callback: n, options: i }), "o") : o = /* @__PURE__ */ __name(() => this._transactionWithArray({ promises: n, options: i }), "o");
          let s = { name: "transaction", attributes: { method: "$transaction" } };
          return this._tracingHelper.runInChildSpan(s, o);
        }
        _request(n) {
          n.otelParentCtx = this._tracingHelper.getActiveContext();
          let i = n.middlewareArgsMapper ?? xp, o = { args: i.requestArgsToMiddlewareArgs(n.args), dataPath: n.dataPath, runInTransaction: !!n.transaction, action: n.action, model: n.model }, s = { middleware: { name: "middleware", middleware: true, attributes: { method: "$use" }, active: false }, operation: { name: "operation", attributes: { method: o.action, model: o.model, name: o.model ? `${o.model}.${o.action}` : o.action } } }, a = -1, l2 = /* @__PURE__ */ __name(async (f2) => {
            let g = this._middlewares.get(++a);
            if (g) return this._tracingHelper.runInChildSpan(s.middleware, (D) => g(f2, (M) => (D?.end(), l2(M))));
            let { runInTransaction: h, args: v, ...S2 } = f2, C = { ...n, ...S2 };
            v && (C.args = i.middlewareArgsToRequestArgs(v)), n.transaction !== void 0 && h === false && delete C.transaction;
            let R = await As(this, C);
            return C.model ? xs({ result: R, modelName: C.model, args: C.args, extensions: this._extensions, runtimeDataModel: this._runtimeDataModel, globalOmit: this._globalOmit }) : R;
          }, "l");
          return this._tracingHelper.runInChildSpan(s.operation, () => l2(o));
        }
        async _executeRequest({ args: n, clientMethod: i, dataPath: o, callsite: s, action: a, model: l2, argsMapper: f2, transaction: g, unpacker: h, otelParentCtx: v, customDataProxyFetch: S2 }) {
          try {
            n = f2 ? f2(n) : n;
            let C = { name: "serialize" }, R = this._tracingHelper.runInChildSpan(C, () => $r({ modelName: l2, runtimeDataModel: this._runtimeDataModel, action: a, args: n, clientMethod: i, callsite: s, extensions: this._extensions, errorFormat: this._errorFormat, clientVersion: this._clientVersion, previewFeatures: this._previewFeatures, globalOmit: this._globalOmit }));
            return H.enabled("prisma:client") && (Fe("Prisma Client call:"), Fe(`prisma.${i}(${as(n)})`), Fe("Generated request:"), Fe(JSON.stringify(R, null, 2) + `
`)), g?.kind === "batch" && await g.lock, this._requestHandler.request({ protocolQuery: R, modelName: l2, action: a, clientMethod: i, dataPath: o, callsite: s, args: n, extensions: this._extensions, transaction: g, unpacker: h, otelParentCtx: v, otelChildCtx: this._tracingHelper.getActiveContext(), globalOmit: this._globalOmit, customDataProxyFetch: S2 });
          } catch (C) {
            throw C.clientVersion = this._clientVersion, C;
          }
        }
        $metrics = new pt(this);
        _hasPreviewFlag(n) {
          return !!this._engineConfig.previewFeatures?.includes(n);
        }
        $applyPendingMigrations() {
          return this._engine.applyPendingMigrations();
        }
        $extends = ws;
      }
      return t;
    }
    __name(Ea, "Ea");
    function ya(e, t) {
      return Tp(e) ? [new oe(e, t), Xs] : [e, ea];
    }
    __name(ya, "ya");
    function Tp(e) {
      return Array.isArray(e) && Array.isArray(e.raw);
    }
    __name(Tp, "Tp");
    d();
    u();
    c();
    p2();
    m();
    var Cp = /* @__PURE__ */ new Set(["toJSON", "$$typeof", "asymmetricMatch", Symbol.iterator, Symbol.toStringTag, Symbol.isConcatSpreadable, Symbol.toPrimitive]);
    function ba(e) {
      return new Proxy(e, { get(t, r) {
        if (r in t) return t[r];
        if (!Cp.has(r)) throw new TypeError(`Invalid enum value: ${String(r)}`);
      } });
    }
    __name(ba, "ba");
    d();
    u();
    c();
    p2();
    m();
  }
});

// node_modules/.prisma/client/edge.js
var require_edge2 = __commonJS({
  "node_modules/.prisma/client/edge.js"(exports) {
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    var {
      PrismaClientKnownRequestError: PrismaClientKnownRequestError2,
      PrismaClientUnknownRequestError: PrismaClientUnknownRequestError2,
      PrismaClientRustPanicError: PrismaClientRustPanicError2,
      PrismaClientInitializationError: PrismaClientInitializationError2,
      PrismaClientValidationError: PrismaClientValidationError2,
      getPrismaClient: getPrismaClient2,
      sqltag: sqltag2,
      empty: empty2,
      join: join2,
      raw: raw3,
      skip: skip2,
      Decimal: Decimal2,
      Debug: Debug2,
      objectEnumValues: objectEnumValues2,
      makeStrictEnum: makeStrictEnum2,
      Extensions: Extensions2,
      warnOnce: warnOnce2,
      defineDmmfProperty: defineDmmfProperty2,
      Public: Public2,
      getRuntime: getRuntime2,
      createParam: createParam2
    } = require_edge();
    var Prisma = {};
    exports.Prisma = Prisma;
    exports.$Enums = {};
    Prisma.prismaVersion = {
      client: "6.12.0",
      engine: "8047c96bbd92db98a2abc7c9323ce77c02c89dbc"
    };
    Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError2;
    Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError2;
    Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError2;
    Prisma.PrismaClientInitializationError = PrismaClientInitializationError2;
    Prisma.PrismaClientValidationError = PrismaClientValidationError2;
    Prisma.Decimal = Decimal2;
    Prisma.sql = sqltag2;
    Prisma.empty = empty2;
    Prisma.join = join2;
    Prisma.raw = raw3;
    Prisma.validator = Public2.validator;
    Prisma.getExtensionContext = Extensions2.getExtensionContext;
    Prisma.defineExtension = Extensions2.defineExtension;
    Prisma.DbNull = objectEnumValues2.instances.DbNull;
    Prisma.JsonNull = objectEnumValues2.instances.JsonNull;
    Prisma.AnyNull = objectEnumValues2.instances.AnyNull;
    Prisma.NullTypes = {
      DbNull: objectEnumValues2.classes.DbNull,
      JsonNull: objectEnumValues2.classes.JsonNull,
      AnyNull: objectEnumValues2.classes.AnyNull
    };
    exports.Prisma.TransactionIsolationLevel = makeStrictEnum2({
      ReadUncommitted: "ReadUncommitted",
      ReadCommitted: "ReadCommitted",
      RepeatableRead: "RepeatableRead",
      Serializable: "Serializable"
    });
    exports.Prisma.UserScalarFieldEnum = {
      id: "id",
      email: "email",
      username: "username",
      password: "password"
    };
    exports.Prisma.BlogScalarFieldEnum = {
      id: "id",
      title: "title",
      content: "content",
      published: "published",
      authorId: "authorId"
    };
    exports.Prisma.SortOrder = {
      asc: "asc",
      desc: "desc"
    };
    exports.Prisma.QueryMode = {
      default: "default",
      insensitive: "insensitive"
    };
    exports.Prisma.NullsOrder = {
      first: "first",
      last: "last"
    };
    exports.Prisma.ModelName = {
      User: "User",
      Blog: "Blog"
    };
    var config = {
      "generator": {
        "name": "client",
        "provider": {
          "fromEnvVar": null,
          "value": "prisma-client-js"
        },
        "output": {
          "value": "D:\\coding code\\Harkirat\\part5\\backend\\node_modules\\@prisma\\client",
          "fromEnvVar": null
        },
        "config": {
          "engineType": "library"
        },
        "binaryTargets": [
          {
            "fromEnvVar": null,
            "value": "windows",
            "native": true
          }
        ],
        "previewFeatures": [],
        "sourceFilePath": "D:\\coding code\\Harkirat\\part5\\backend\\prisma\\schema.prisma"
      },
      "relativeEnvPaths": {
        "rootEnvPath": null,
        "schemaEnvPath": "../../../.env"
      },
      "relativePath": "../../../prisma",
      "clientVersion": "6.12.0",
      "engineVersion": "8047c96bbd92db98a2abc7c9323ce77c02c89dbc",
      "datasourceNames": [
        "db"
      ],
      "activeProvider": "postgresql",
      "inlineDatasources": {
        "db": {
          "url": {
            "fromEnvVar": "DATABASE_URL",
            "value": null
          }
        }
      },
      "inlineSchema": '// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// Looking for ways to speed up your queries, or scale easily with your serverless or edge functions?\n// Try Prisma Accelerate: https://pris.ly/cli/accelerate-init\n\ngenerator client {\n  provider = "prisma-client-js"\n}\n\ndatasource db {\n  provider = "postgresql"\n  url      = env("DATABASE_URL")\n}\n\nmodel User {\n  id       Int     @id @default(autoincrement())\n  email    String  @unique\n  username String?\n  password String\n  blogs    Blog[]\n}\n\nmodel Blog {\n  id        Int     @id @default(autoincrement())\n  title     String\n  content   String\n  published Boolean @default(false)\n  authorId  Int\n  author    User    @relation(fields: [authorId], references: [id])\n}\n',
      "inlineSchemaHash": "0e0c9726c5411134e4148ca29f1d2d8c933cf22311186a57e577e1125ab8b22a",
      "copyEngine": true
    };
    config.dirname = "/";
    config.runtimeDataModel = JSON.parse('{"models":{"User":{"dbName":null,"schema":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","nativeType":null,"default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"email","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"username","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"password","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"blogs","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Blog","nativeType":null,"relationName":"BlogToUser","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Blog":{"dbName":null,"schema":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","nativeType":null,"default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"title","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"content","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"published","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Boolean","nativeType":null,"default":false,"isGenerated":false,"isUpdatedAt":false},{"name":"authorId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"Int","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"author","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"User","nativeType":null,"relationName":"BlogToUser","relationFromFields":["authorId"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false}},"enums":{},"types":{}}');
    defineDmmfProperty2(exports.Prisma, config.runtimeDataModel);
    config.engineWasm = void 0;
    config.compilerWasm = void 0;
    config.injectableEdgeEnv = () => ({
      parsed: {
        DATABASE_URL: typeof globalThis !== "undefined" && globalThis["DATABASE_URL"] || typeof process !== "undefined" && process.env && process.env.DATABASE_URL || void 0
      }
    });
    if (typeof globalThis !== "undefined" && globalThis["DEBUG"] || typeof process !== "undefined" && process.env && process.env.DEBUG || void 0) {
      Debug2.enable(typeof globalThis !== "undefined" && globalThis["DEBUG"] || typeof process !== "undefined" && process.env && process.env.DEBUG || void 0);
    }
    var PrismaClient3 = getPrismaClient2(config);
    exports.PrismaClient = PrismaClient3;
    Object.assign(exports, Prisma);
  }
});

// node_modules/@prisma/client/edge.js
var require_edge3 = __commonJS({
  "node_modules/@prisma/client/edge.js"(exports, module) {
    init_modules_watch_stub();
    module.exports = {
      // https://github.com/prisma/prisma/pull/12907
      ...require_edge2()
    };
  }
});

// node_modules/@prisma/client/scripts/default-index.js
var require_default_index = __commonJS({
  "node_modules/@prisma/client/scripts/default-index.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: /* @__PURE__ */ __name(() => from[key], "get"), enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var default_index_exports = {};
    __export(default_index_exports, {
      Prisma: /* @__PURE__ */ __name(() => Prisma, "Prisma"),
      PrismaClient: /* @__PURE__ */ __name(() => PrismaClient3, "PrismaClient"),
      default: /* @__PURE__ */ __name(() => default_index_default, "default")
    });
    module.exports = __toCommonJS(default_index_exports);
    var prisma = {
      enginesVersion: "8047c96bbd92db98a2abc7c9323ce77c02c89dbc"
    };
    var version = "6.12.0";
    var clientVersion = version;
    var PrismaClient3 = class {
      static {
        __name(this, "PrismaClient");
      }
      constructor() {
        throw new Error('@prisma/client did not initialize yet. Please run "prisma generate" and try to import it again.');
      }
    };
    function defineExtension(ext) {
      if (typeof ext === "function") {
        return ext;
      }
      return (client) => client.$extends(ext);
    }
    __name(defineExtension, "defineExtension");
    function getExtensionContext(that) {
      return that;
    }
    __name(getExtensionContext, "getExtensionContext");
    var Prisma = {
      defineExtension,
      getExtensionContext,
      prismaVersion: { client: clientVersion, engine: prisma.enginesVersion }
    };
    var default_index_default = { Prisma };
  }
});

// .wrangler/tmp/bundle-qqQTcI/middleware-loader.entry.ts
init_modules_watch_stub();

// .wrangler/tmp/bundle-qqQTcI/middleware-insertion-facade.js
init_modules_watch_stub();

// src/index.ts
init_modules_watch_stub();

// node_modules/hono/dist/index.js
init_modules_watch_stub();

// node_modules/hono/dist/hono.js
init_modules_watch_stub();

// node_modules/hono/dist/hono-base.js
init_modules_watch_stub();

// node_modules/hono/dist/compose.js
init_modules_watch_stub();
var compose = /* @__PURE__ */ __name((middleware, onError, onNotFound) => {
  return (context, next) => {
    let index = -1;
    return dispatch(0);
    async function dispatch(i) {
      if (i <= index) {
        throw new Error("next() called multiple times");
      }
      index = i;
      let res;
      let isError = false;
      let handler;
      if (middleware[i]) {
        handler = middleware[i][0][0];
        context.req.routeIndex = i;
      } else {
        handler = i === middleware.length && next || void 0;
      }
      if (handler) {
        try {
          res = await handler(context, () => dispatch(i + 1));
        } catch (err) {
          if (err instanceof Error && onError) {
            context.error = err;
            res = await onError(err, context);
            isError = true;
          } else {
            throw err;
          }
        }
      } else {
        if (context.finalized === false && onNotFound) {
          res = await onNotFound(context);
        }
      }
      if (res && (context.finalized === false || isError)) {
        context.res = res;
      }
      return context;
    }
    __name(dispatch, "dispatch");
  };
}, "compose");

// node_modules/hono/dist/context.js
init_modules_watch_stub();

// node_modules/hono/dist/request.js
init_modules_watch_stub();

// node_modules/hono/dist/request/constants.js
init_modules_watch_stub();
var GET_MATCH_RESULT = Symbol();

// node_modules/hono/dist/utils/body.js
init_modules_watch_stub();
var parseBody = /* @__PURE__ */ __name(async (request, options = /* @__PURE__ */ Object.create(null)) => {
  const { all = false, dot = false } = options;
  const headers = request instanceof HonoRequest ? request.raw.headers : request.headers;
  const contentType = headers.get("Content-Type");
  if (contentType?.startsWith("multipart/form-data") || contentType?.startsWith("application/x-www-form-urlencoded")) {
    return parseFormData(request, { all, dot });
  }
  return {};
}, "parseBody");
async function parseFormData(request, options) {
  const formData = await request.formData();
  if (formData) {
    return convertFormDataToBodyData(formData, options);
  }
  return {};
}
__name(parseFormData, "parseFormData");
function convertFormDataToBodyData(formData, options) {
  const form = /* @__PURE__ */ Object.create(null);
  formData.forEach((value, key) => {
    const shouldParseAllValues = options.all || key.endsWith("[]");
    if (!shouldParseAllValues) {
      form[key] = value;
    } else {
      handleParsingAllValues(form, key, value);
    }
  });
  if (options.dot) {
    Object.entries(form).forEach(([key, value]) => {
      const shouldParseDotValues = key.includes(".");
      if (shouldParseDotValues) {
        handleParsingNestedValues(form, key, value);
        delete form[key];
      }
    });
  }
  return form;
}
__name(convertFormDataToBodyData, "convertFormDataToBodyData");
var handleParsingAllValues = /* @__PURE__ */ __name((form, key, value) => {
  if (form[key] !== void 0) {
    if (Array.isArray(form[key])) {
      ;
      form[key].push(value);
    } else {
      form[key] = [form[key], value];
    }
  } else {
    if (!key.endsWith("[]")) {
      form[key] = value;
    } else {
      form[key] = [value];
    }
  }
}, "handleParsingAllValues");
var handleParsingNestedValues = /* @__PURE__ */ __name((form, key, value) => {
  let nestedForm = form;
  const keys = key.split(".");
  keys.forEach((key2, index) => {
    if (index === keys.length - 1) {
      nestedForm[key2] = value;
    } else {
      if (!nestedForm[key2] || typeof nestedForm[key2] !== "object" || Array.isArray(nestedForm[key2]) || nestedForm[key2] instanceof File) {
        nestedForm[key2] = /* @__PURE__ */ Object.create(null);
      }
      nestedForm = nestedForm[key2];
    }
  });
}, "handleParsingNestedValues");

// node_modules/hono/dist/utils/url.js
init_modules_watch_stub();
var splitPath = /* @__PURE__ */ __name((path) => {
  const paths = path.split("/");
  if (paths[0] === "") {
    paths.shift();
  }
  return paths;
}, "splitPath");
var splitRoutingPath = /* @__PURE__ */ __name((routePath) => {
  const { groups, path } = extractGroupsFromPath(routePath);
  const paths = splitPath(path);
  return replaceGroupMarks(paths, groups);
}, "splitRoutingPath");
var extractGroupsFromPath = /* @__PURE__ */ __name((path) => {
  const groups = [];
  path = path.replace(/\{[^}]+\}/g, (match, index) => {
    const mark = `@${index}`;
    groups.push([mark, match]);
    return mark;
  });
  return { groups, path };
}, "extractGroupsFromPath");
var replaceGroupMarks = /* @__PURE__ */ __name((paths, groups) => {
  for (let i = groups.length - 1; i >= 0; i--) {
    const [mark] = groups[i];
    for (let j = paths.length - 1; j >= 0; j--) {
      if (paths[j].includes(mark)) {
        paths[j] = paths[j].replace(mark, groups[i][1]);
        break;
      }
    }
  }
  return paths;
}, "replaceGroupMarks");
var patternCache = {};
var getPattern = /* @__PURE__ */ __name((label, next) => {
  if (label === "*") {
    return "*";
  }
  const match = label.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
  if (match) {
    const cacheKey = `${label}#${next}`;
    if (!patternCache[cacheKey]) {
      if (match[2]) {
        patternCache[cacheKey] = next && next[0] !== ":" && next[0] !== "*" ? [cacheKey, match[1], new RegExp(`^${match[2]}(?=/${next})`)] : [label, match[1], new RegExp(`^${match[2]}$`)];
      } else {
        patternCache[cacheKey] = [label, match[1], true];
      }
    }
    return patternCache[cacheKey];
  }
  return null;
}, "getPattern");
var tryDecode = /* @__PURE__ */ __name((str, decoder) => {
  try {
    return decoder(str);
  } catch {
    return str.replace(/(?:%[0-9A-Fa-f]{2})+/g, (match) => {
      try {
        return decoder(match);
      } catch {
        return match;
      }
    });
  }
}, "tryDecode");
var tryDecodeURI = /* @__PURE__ */ __name((str) => tryDecode(str, decodeURI), "tryDecodeURI");
var getPath = /* @__PURE__ */ __name((request) => {
  const url = request.url;
  const start = url.indexOf(
    "/",
    url.charCodeAt(9) === 58 ? 13 : 8
  );
  let i = start;
  for (; i < url.length; i++) {
    const charCode = url.charCodeAt(i);
    if (charCode === 37) {
      const queryIndex = url.indexOf("?", i);
      const path = url.slice(start, queryIndex === -1 ? void 0 : queryIndex);
      return tryDecodeURI(path.includes("%25") ? path.replace(/%25/g, "%2525") : path);
    } else if (charCode === 63) {
      break;
    }
  }
  return url.slice(start, i);
}, "getPath");
var getPathNoStrict = /* @__PURE__ */ __name((request) => {
  const result = getPath(request);
  return result.length > 1 && result.at(-1) === "/" ? result.slice(0, -1) : result;
}, "getPathNoStrict");
var mergePath = /* @__PURE__ */ __name((base, sub, ...rest) => {
  if (rest.length) {
    sub = mergePath(sub, ...rest);
  }
  return `${base?.[0] === "/" ? "" : "/"}${base}${sub === "/" ? "" : `${base?.at(-1) === "/" ? "" : "/"}${sub?.[0] === "/" ? sub.slice(1) : sub}`}`;
}, "mergePath");
var checkOptionalParameter = /* @__PURE__ */ __name((path) => {
  if (path.charCodeAt(path.length - 1) !== 63 || !path.includes(":")) {
    return null;
  }
  const segments = path.split("/");
  const results = [];
  let basePath = "";
  segments.forEach((segment) => {
    if (segment !== "" && !/\:/.test(segment)) {
      basePath += "/" + segment;
    } else if (/\:/.test(segment)) {
      if (/\?/.test(segment)) {
        if (results.length === 0 && basePath === "") {
          results.push("/");
        } else {
          results.push(basePath);
        }
        const optionalSegment = segment.replace("?", "");
        basePath += "/" + optionalSegment;
        results.push(basePath);
      } else {
        basePath += "/" + segment;
      }
    }
  });
  return results.filter((v, i, a) => a.indexOf(v) === i);
}, "checkOptionalParameter");
var _decodeURI = /* @__PURE__ */ __name((value) => {
  if (!/[%+]/.test(value)) {
    return value;
  }
  if (value.indexOf("+") !== -1) {
    value = value.replace(/\+/g, " ");
  }
  return value.indexOf("%") !== -1 ? tryDecode(value, decodeURIComponent_) : value;
}, "_decodeURI");
var _getQueryParam = /* @__PURE__ */ __name((url, key, multiple) => {
  let encoded;
  if (!multiple && key && !/[%+]/.test(key)) {
    let keyIndex2 = url.indexOf(`?${key}`, 8);
    if (keyIndex2 === -1) {
      keyIndex2 = url.indexOf(`&${key}`, 8);
    }
    while (keyIndex2 !== -1) {
      const trailingKeyCode = url.charCodeAt(keyIndex2 + key.length + 1);
      if (trailingKeyCode === 61) {
        const valueIndex = keyIndex2 + key.length + 2;
        const endIndex = url.indexOf("&", valueIndex);
        return _decodeURI(url.slice(valueIndex, endIndex === -1 ? void 0 : endIndex));
      } else if (trailingKeyCode == 38 || isNaN(trailingKeyCode)) {
        return "";
      }
      keyIndex2 = url.indexOf(`&${key}`, keyIndex2 + 1);
    }
    encoded = /[%+]/.test(url);
    if (!encoded) {
      return void 0;
    }
  }
  const results = {};
  encoded ??= /[%+]/.test(url);
  let keyIndex = url.indexOf("?", 8);
  while (keyIndex !== -1) {
    const nextKeyIndex = url.indexOf("&", keyIndex + 1);
    let valueIndex = url.indexOf("=", keyIndex);
    if (valueIndex > nextKeyIndex && nextKeyIndex !== -1) {
      valueIndex = -1;
    }
    let name = url.slice(
      keyIndex + 1,
      valueIndex === -1 ? nextKeyIndex === -1 ? void 0 : nextKeyIndex : valueIndex
    );
    if (encoded) {
      name = _decodeURI(name);
    }
    keyIndex = nextKeyIndex;
    if (name === "") {
      continue;
    }
    let value;
    if (valueIndex === -1) {
      value = "";
    } else {
      value = url.slice(valueIndex + 1, nextKeyIndex === -1 ? void 0 : nextKeyIndex);
      if (encoded) {
        value = _decodeURI(value);
      }
    }
    if (multiple) {
      if (!(results[name] && Array.isArray(results[name]))) {
        results[name] = [];
      }
      ;
      results[name].push(value);
    } else {
      results[name] ??= value;
    }
  }
  return key ? results[key] : results;
}, "_getQueryParam");
var getQueryParam = _getQueryParam;
var getQueryParams = /* @__PURE__ */ __name((url, key) => {
  return _getQueryParam(url, key, true);
}, "getQueryParams");
var decodeURIComponent_ = decodeURIComponent;

// node_modules/hono/dist/request.js
var tryDecodeURIComponent = /* @__PURE__ */ __name((str) => tryDecode(str, decodeURIComponent_), "tryDecodeURIComponent");
var HonoRequest = class {
  static {
    __name(this, "HonoRequest");
  }
  raw;
  #validatedData;
  #matchResult;
  routeIndex = 0;
  path;
  bodyCache = {};
  constructor(request, path = "/", matchResult = [[]]) {
    this.raw = request;
    this.path = path;
    this.#matchResult = matchResult;
    this.#validatedData = {};
  }
  param(key) {
    return key ? this.#getDecodedParam(key) : this.#getAllDecodedParams();
  }
  #getDecodedParam(key) {
    const paramKey = this.#matchResult[0][this.routeIndex][1][key];
    const param = this.#getParamValue(paramKey);
    return param ? /\%/.test(param) ? tryDecodeURIComponent(param) : param : void 0;
  }
  #getAllDecodedParams() {
    const decoded = {};
    const keys = Object.keys(this.#matchResult[0][this.routeIndex][1]);
    for (const key of keys) {
      const value = this.#getParamValue(this.#matchResult[0][this.routeIndex][1][key]);
      if (value && typeof value === "string") {
        decoded[key] = /\%/.test(value) ? tryDecodeURIComponent(value) : value;
      }
    }
    return decoded;
  }
  #getParamValue(paramKey) {
    return this.#matchResult[1] ? this.#matchResult[1][paramKey] : paramKey;
  }
  query(key) {
    return getQueryParam(this.url, key);
  }
  queries(key) {
    return getQueryParams(this.url, key);
  }
  header(name) {
    if (name) {
      return this.raw.headers.get(name) ?? void 0;
    }
    const headerData = {};
    this.raw.headers.forEach((value, key) => {
      headerData[key] = value;
    });
    return headerData;
  }
  async parseBody(options) {
    return this.bodyCache.parsedBody ??= await parseBody(this, options);
  }
  #cachedBody = /* @__PURE__ */ __name((key) => {
    const { bodyCache, raw: raw3 } = this;
    const cachedBody = bodyCache[key];
    if (cachedBody) {
      return cachedBody;
    }
    const anyCachedKey = Object.keys(bodyCache)[0];
    if (anyCachedKey) {
      return bodyCache[anyCachedKey].then((body) => {
        if (anyCachedKey === "json") {
          body = JSON.stringify(body);
        }
        return new Response(body)[key]();
      });
    }
    return bodyCache[key] = raw3[key]();
  }, "#cachedBody");
  json() {
    return this.#cachedBody("text").then((text) => JSON.parse(text));
  }
  text() {
    return this.#cachedBody("text");
  }
  arrayBuffer() {
    return this.#cachedBody("arrayBuffer");
  }
  blob() {
    return this.#cachedBody("blob");
  }
  formData() {
    return this.#cachedBody("formData");
  }
  addValidatedData(target, data) {
    this.#validatedData[target] = data;
  }
  valid(target) {
    return this.#validatedData[target];
  }
  get url() {
    return this.raw.url;
  }
  get method() {
    return this.raw.method;
  }
  get [GET_MATCH_RESULT]() {
    return this.#matchResult;
  }
  get matchedRoutes() {
    return this.#matchResult[0].map(([[, route]]) => route);
  }
  get routePath() {
    return this.#matchResult[0].map(([[, route]]) => route)[this.routeIndex].path;
  }
};

// node_modules/hono/dist/utils/html.js
init_modules_watch_stub();
var HtmlEscapedCallbackPhase = {
  Stringify: 1,
  BeforeStream: 2,
  Stream: 3
};
var raw2 = /* @__PURE__ */ __name((value, callbacks) => {
  const escapedString = new String(value);
  escapedString.isEscaped = true;
  escapedString.callbacks = callbacks;
  return escapedString;
}, "raw");
var resolveCallback = /* @__PURE__ */ __name(async (str, phase, preserveCallbacks, context, buffer) => {
  if (typeof str === "object" && !(str instanceof String)) {
    if (!(str instanceof Promise)) {
      str = str.toString();
    }
    if (str instanceof Promise) {
      str = await str;
    }
  }
  const callbacks = str.callbacks;
  if (!callbacks?.length) {
    return Promise.resolve(str);
  }
  if (buffer) {
    buffer[0] += str;
  } else {
    buffer = [str];
  }
  const resStr = Promise.all(callbacks.map((c) => c({ phase, buffer, context }))).then(
    (res) => Promise.all(
      res.filter(Boolean).map((str2) => resolveCallback(str2, phase, false, context, buffer))
    ).then(() => buffer[0])
  );
  if (preserveCallbacks) {
    return raw2(await resStr, callbacks);
  } else {
    return resStr;
  }
}, "resolveCallback");

// node_modules/hono/dist/context.js
var TEXT_PLAIN = "text/plain; charset=UTF-8";
var setDefaultContentType = /* @__PURE__ */ __name((contentType, headers) => {
  return {
    "Content-Type": contentType,
    ...headers
  };
}, "setDefaultContentType");
var Context = class {
  static {
    __name(this, "Context");
  }
  #rawRequest;
  #req;
  env = {};
  #var;
  finalized = false;
  error;
  #status;
  #executionCtx;
  #res;
  #layout;
  #renderer;
  #notFoundHandler;
  #preparedHeaders;
  #matchResult;
  #path;
  constructor(req, options) {
    this.#rawRequest = req;
    if (options) {
      this.#executionCtx = options.executionCtx;
      this.env = options.env;
      this.#notFoundHandler = options.notFoundHandler;
      this.#path = options.path;
      this.#matchResult = options.matchResult;
    }
  }
  get req() {
    this.#req ??= new HonoRequest(this.#rawRequest, this.#path, this.#matchResult);
    return this.#req;
  }
  get event() {
    if (this.#executionCtx && "respondWith" in this.#executionCtx) {
      return this.#executionCtx;
    } else {
      throw Error("This context has no FetchEvent");
    }
  }
  get executionCtx() {
    if (this.#executionCtx) {
      return this.#executionCtx;
    } else {
      throw Error("This context has no ExecutionContext");
    }
  }
  get res() {
    return this.#res ||= new Response(null, {
      headers: this.#preparedHeaders ??= new Headers()
    });
  }
  set res(_res) {
    if (this.#res && _res) {
      _res = new Response(_res.body, _res);
      for (const [k2, v] of this.#res.headers.entries()) {
        if (k2 === "content-type") {
          continue;
        }
        if (k2 === "set-cookie") {
          const cookies = this.#res.headers.getSetCookie();
          _res.headers.delete("set-cookie");
          for (const cookie of cookies) {
            _res.headers.append("set-cookie", cookie);
          }
        } else {
          _res.headers.set(k2, v);
        }
      }
    }
    this.#res = _res;
    this.finalized = true;
  }
  render = /* @__PURE__ */ __name((...args) => {
    this.#renderer ??= (content) => this.html(content);
    return this.#renderer(...args);
  }, "render");
  setLayout = /* @__PURE__ */ __name((layout) => this.#layout = layout, "setLayout");
  getLayout = /* @__PURE__ */ __name(() => this.#layout, "getLayout");
  setRenderer = /* @__PURE__ */ __name((renderer) => {
    this.#renderer = renderer;
  }, "setRenderer");
  header = /* @__PURE__ */ __name((name, value, options) => {
    if (this.finalized) {
      this.#res = new Response(this.#res.body, this.#res);
    }
    const headers = this.#res ? this.#res.headers : this.#preparedHeaders ??= new Headers();
    if (value === void 0) {
      headers.delete(name);
    } else if (options?.append) {
      headers.append(name, value);
    } else {
      headers.set(name, value);
    }
  }, "header");
  status = /* @__PURE__ */ __name((status) => {
    this.#status = status;
  }, "status");
  set = /* @__PURE__ */ __name((key, value) => {
    this.#var ??= /* @__PURE__ */ new Map();
    this.#var.set(key, value);
  }, "set");
  get = /* @__PURE__ */ __name((key) => {
    return this.#var ? this.#var.get(key) : void 0;
  }, "get");
  get var() {
    if (!this.#var) {
      return {};
    }
    return Object.fromEntries(this.#var);
  }
  #newResponse(data, arg, headers) {
    const responseHeaders = this.#res ? new Headers(this.#res.headers) : this.#preparedHeaders ?? new Headers();
    if (typeof arg === "object" && "headers" in arg) {
      const argHeaders = arg.headers instanceof Headers ? arg.headers : new Headers(arg.headers);
      for (const [key, value] of argHeaders) {
        if (key.toLowerCase() === "set-cookie") {
          responseHeaders.append(key, value);
        } else {
          responseHeaders.set(key, value);
        }
      }
    }
    if (headers) {
      for (const [k2, v] of Object.entries(headers)) {
        if (typeof v === "string") {
          responseHeaders.set(k2, v);
        } else {
          responseHeaders.delete(k2);
          for (const v2 of v) {
            responseHeaders.append(k2, v2);
          }
        }
      }
    }
    const status = typeof arg === "number" ? arg : arg?.status ?? this.#status;
    return new Response(data, { status, headers: responseHeaders });
  }
  newResponse = /* @__PURE__ */ __name((...args) => this.#newResponse(...args), "newResponse");
  body = /* @__PURE__ */ __name((data, arg, headers) => this.#newResponse(data, arg, headers), "body");
  text = /* @__PURE__ */ __name((text, arg, headers) => {
    return !this.#preparedHeaders && !this.#status && !arg && !headers && !this.finalized ? new Response(text) : this.#newResponse(
      text,
      arg,
      setDefaultContentType(TEXT_PLAIN, headers)
    );
  }, "text");
  json = /* @__PURE__ */ __name((object, arg, headers) => {
    return this.#newResponse(
      JSON.stringify(object),
      arg,
      setDefaultContentType("application/json", headers)
    );
  }, "json");
  html = /* @__PURE__ */ __name((html, arg, headers) => {
    const res = /* @__PURE__ */ __name((html2) => this.#newResponse(html2, arg, setDefaultContentType("text/html; charset=UTF-8", headers)), "res");
    return typeof html === "object" ? resolveCallback(html, HtmlEscapedCallbackPhase.Stringify, false, {}).then(res) : res(html);
  }, "html");
  redirect = /* @__PURE__ */ __name((location, status) => {
    const locationString = String(location);
    this.header(
      "Location",
      !/[^\x00-\xFF]/.test(locationString) ? locationString : encodeURI(locationString)
    );
    return this.newResponse(null, status ?? 302);
  }, "redirect");
  notFound = /* @__PURE__ */ __name(() => {
    this.#notFoundHandler ??= () => new Response();
    return this.#notFoundHandler(this);
  }, "notFound");
};

// node_modules/hono/dist/router.js
init_modules_watch_stub();
var METHOD_NAME_ALL = "ALL";
var METHOD_NAME_ALL_LOWERCASE = "all";
var METHODS = ["get", "post", "put", "delete", "options", "patch"];
var MESSAGE_MATCHER_IS_ALREADY_BUILT = "Can not add a route since the matcher is already built.";
var UnsupportedPathError = class extends Error {
  static {
    __name(this, "UnsupportedPathError");
  }
};

// node_modules/hono/dist/utils/constants.js
init_modules_watch_stub();
var COMPOSED_HANDLER = "__COMPOSED_HANDLER";

// node_modules/hono/dist/hono-base.js
var notFoundHandler = /* @__PURE__ */ __name((c) => {
  return c.text("404 Not Found", 404);
}, "notFoundHandler");
var errorHandler = /* @__PURE__ */ __name((err, c) => {
  if ("getResponse" in err) {
    const res = err.getResponse();
    return c.newResponse(res.body, res);
  }
  console.error(err);
  return c.text("Internal Server Error", 500);
}, "errorHandler");
var Hono = class {
  static {
    __name(this, "Hono");
  }
  get;
  post;
  put;
  delete;
  options;
  patch;
  all;
  on;
  use;
  router;
  getPath;
  _basePath = "/";
  #path = "/";
  routes = [];
  constructor(options = {}) {
    const allMethods = [...METHODS, METHOD_NAME_ALL_LOWERCASE];
    allMethods.forEach((method) => {
      this[method] = (args1, ...args) => {
        if (typeof args1 === "string") {
          this.#path = args1;
        } else {
          this.#addRoute(method, this.#path, args1);
        }
        args.forEach((handler) => {
          this.#addRoute(method, this.#path, handler);
        });
        return this;
      };
    });
    this.on = (method, path, ...handlers) => {
      for (const p2 of [path].flat()) {
        this.#path = p2;
        for (const m of [method].flat()) {
          handlers.map((handler) => {
            this.#addRoute(m.toUpperCase(), this.#path, handler);
          });
        }
      }
      return this;
    };
    this.use = (arg1, ...handlers) => {
      if (typeof arg1 === "string") {
        this.#path = arg1;
      } else {
        this.#path = "*";
        handlers.unshift(arg1);
      }
      handlers.forEach((handler) => {
        this.#addRoute(METHOD_NAME_ALL, this.#path, handler);
      });
      return this;
    };
    const { strict, ...optionsWithoutStrict } = options;
    Object.assign(this, optionsWithoutStrict);
    this.getPath = strict ?? true ? options.getPath ?? getPath : getPathNoStrict;
  }
  #clone() {
    const clone = new Hono({
      router: this.router,
      getPath: this.getPath
    });
    clone.errorHandler = this.errorHandler;
    clone.#notFoundHandler = this.#notFoundHandler;
    clone.routes = this.routes;
    return clone;
  }
  #notFoundHandler = notFoundHandler;
  errorHandler = errorHandler;
  route(path, app2) {
    const subApp = this.basePath(path);
    app2.routes.map((r) => {
      let handler;
      if (app2.errorHandler === errorHandler) {
        handler = r.handler;
      } else {
        handler = /* @__PURE__ */ __name(async (c, next) => (await compose([], app2.errorHandler)(c, () => r.handler(c, next))).res, "handler");
        handler[COMPOSED_HANDLER] = r.handler;
      }
      subApp.#addRoute(r.method, r.path, handler);
    });
    return this;
  }
  basePath(path) {
    const subApp = this.#clone();
    subApp._basePath = mergePath(this._basePath, path);
    return subApp;
  }
  onError = /* @__PURE__ */ __name((handler) => {
    this.errorHandler = handler;
    return this;
  }, "onError");
  notFound = /* @__PURE__ */ __name((handler) => {
    this.#notFoundHandler = handler;
    return this;
  }, "notFound");
  mount(path, applicationHandler, options) {
    let replaceRequest;
    let optionHandler;
    if (options) {
      if (typeof options === "function") {
        optionHandler = options;
      } else {
        optionHandler = options.optionHandler;
        if (options.replaceRequest === false) {
          replaceRequest = /* @__PURE__ */ __name((request) => request, "replaceRequest");
        } else {
          replaceRequest = options.replaceRequest;
        }
      }
    }
    const getOptions = optionHandler ? (c) => {
      const options2 = optionHandler(c);
      return Array.isArray(options2) ? options2 : [options2];
    } : (c) => {
      let executionContext = void 0;
      try {
        executionContext = c.executionCtx;
      } catch {
      }
      return [c.env, executionContext];
    };
    replaceRequest ||= (() => {
      const mergedPath = mergePath(this._basePath, path);
      const pathPrefixLength = mergedPath === "/" ? 0 : mergedPath.length;
      return (request) => {
        const url = new URL(request.url);
        url.pathname = url.pathname.slice(pathPrefixLength) || "/";
        return new Request(url, request);
      };
    })();
    const handler = /* @__PURE__ */ __name(async (c, next) => {
      const res = await applicationHandler(replaceRequest(c.req.raw), ...getOptions(c));
      if (res) {
        return res;
      }
      await next();
    }, "handler");
    this.#addRoute(METHOD_NAME_ALL, mergePath(path, "*"), handler);
    return this;
  }
  #addRoute(method, path, handler) {
    method = method.toUpperCase();
    path = mergePath(this._basePath, path);
    const r = { basePath: this._basePath, path, method, handler };
    this.router.add(method, path, [handler, r]);
    this.routes.push(r);
  }
  #handleError(err, c) {
    if (err instanceof Error) {
      return this.errorHandler(err, c);
    }
    throw err;
  }
  #dispatch(request, executionCtx, env, method) {
    if (method === "HEAD") {
      return (async () => new Response(null, await this.#dispatch(request, executionCtx, env, "GET")))();
    }
    const path = this.getPath(request, { env });
    const matchResult = this.router.match(method, path);
    const c = new Context(request, {
      path,
      matchResult,
      env,
      executionCtx,
      notFoundHandler: this.#notFoundHandler
    });
    if (matchResult[0].length === 1) {
      let res;
      try {
        res = matchResult[0][0][0][0](c, async () => {
          c.res = await this.#notFoundHandler(c);
        });
      } catch (err) {
        return this.#handleError(err, c);
      }
      return res instanceof Promise ? res.then(
        (resolved) => resolved || (c.finalized ? c.res : this.#notFoundHandler(c))
      ).catch((err) => this.#handleError(err, c)) : res ?? this.#notFoundHandler(c);
    }
    const composed = compose(matchResult[0], this.errorHandler, this.#notFoundHandler);
    return (async () => {
      try {
        const context = await composed(c);
        if (!context.finalized) {
          throw new Error(
            "Context is not finalized. Did you forget to return a Response object or `await next()`?"
          );
        }
        return context.res;
      } catch (err) {
        return this.#handleError(err, c);
      }
    })();
  }
  fetch = /* @__PURE__ */ __name((request, ...rest) => {
    return this.#dispatch(request, rest[1], rest[0], request.method);
  }, "fetch");
  request = /* @__PURE__ */ __name((input, requestInit, Env, executionCtx) => {
    if (input instanceof Request) {
      return this.fetch(requestInit ? new Request(input, requestInit) : input, Env, executionCtx);
    }
    input = input.toString();
    return this.fetch(
      new Request(
        /^https?:\/\//.test(input) ? input : `http://localhost${mergePath("/", input)}`,
        requestInit
      ),
      Env,
      executionCtx
    );
  }, "request");
  fire = /* @__PURE__ */ __name(() => {
    addEventListener("fetch", (event) => {
      event.respondWith(this.#dispatch(event.request, event, void 0, event.request.method));
    });
  }, "fire");
};

// node_modules/hono/dist/router/reg-exp-router/index.js
init_modules_watch_stub();

// node_modules/hono/dist/router/reg-exp-router/router.js
init_modules_watch_stub();

// node_modules/hono/dist/router/reg-exp-router/node.js
init_modules_watch_stub();
var LABEL_REG_EXP_STR = "[^/]+";
var ONLY_WILDCARD_REG_EXP_STR = ".*";
var TAIL_WILDCARD_REG_EXP_STR = "(?:|/.*)";
var PATH_ERROR = Symbol();
var regExpMetaChars = new Set(".\\+*[^]$()");
function compareKey(a, b2) {
  if (a.length === 1) {
    return b2.length === 1 ? a < b2 ? -1 : 1 : -1;
  }
  if (b2.length === 1) {
    return 1;
  }
  if (a === ONLY_WILDCARD_REG_EXP_STR || a === TAIL_WILDCARD_REG_EXP_STR) {
    return 1;
  } else if (b2 === ONLY_WILDCARD_REG_EXP_STR || b2 === TAIL_WILDCARD_REG_EXP_STR) {
    return -1;
  }
  if (a === LABEL_REG_EXP_STR) {
    return 1;
  } else if (b2 === LABEL_REG_EXP_STR) {
    return -1;
  }
  return a.length === b2.length ? a < b2 ? -1 : 1 : b2.length - a.length;
}
__name(compareKey, "compareKey");
var Node = class {
  static {
    __name(this, "Node");
  }
  #index;
  #varIndex;
  #children = /* @__PURE__ */ Object.create(null);
  insert(tokens, index, paramMap, context, pathErrorCheckOnly) {
    if (tokens.length === 0) {
      if (this.#index !== void 0) {
        throw PATH_ERROR;
      }
      if (pathErrorCheckOnly) {
        return;
      }
      this.#index = index;
      return;
    }
    const [token, ...restTokens] = tokens;
    const pattern = token === "*" ? restTokens.length === 0 ? ["", "", ONLY_WILDCARD_REG_EXP_STR] : ["", "", LABEL_REG_EXP_STR] : token === "/*" ? ["", "", TAIL_WILDCARD_REG_EXP_STR] : token.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
    let node;
    if (pattern) {
      const name = pattern[1];
      let regexpStr = pattern[2] || LABEL_REG_EXP_STR;
      if (name && pattern[2]) {
        regexpStr = regexpStr.replace(/^\((?!\?:)(?=[^)]+\)$)/, "(?:");
        if (/\((?!\?:)/.test(regexpStr)) {
          throw PATH_ERROR;
        }
      }
      node = this.#children[regexpStr];
      if (!node) {
        if (Object.keys(this.#children).some(
          (k2) => k2 !== ONLY_WILDCARD_REG_EXP_STR && k2 !== TAIL_WILDCARD_REG_EXP_STR
        )) {
          throw PATH_ERROR;
        }
        if (pathErrorCheckOnly) {
          return;
        }
        node = this.#children[regexpStr] = new Node();
        if (name !== "") {
          node.#varIndex = context.varIndex++;
        }
      }
      if (!pathErrorCheckOnly && name !== "") {
        paramMap.push([name, node.#varIndex]);
      }
    } else {
      node = this.#children[token];
      if (!node) {
        if (Object.keys(this.#children).some(
          (k2) => k2.length > 1 && k2 !== ONLY_WILDCARD_REG_EXP_STR && k2 !== TAIL_WILDCARD_REG_EXP_STR
        )) {
          throw PATH_ERROR;
        }
        if (pathErrorCheckOnly) {
          return;
        }
        node = this.#children[token] = new Node();
      }
    }
    node.insert(restTokens, index, paramMap, context, pathErrorCheckOnly);
  }
  buildRegExpStr() {
    const childKeys = Object.keys(this.#children).sort(compareKey);
    const strList = childKeys.map((k2) => {
      const c = this.#children[k2];
      return (typeof c.#varIndex === "number" ? `(${k2})@${c.#varIndex}` : regExpMetaChars.has(k2) ? `\\${k2}` : k2) + c.buildRegExpStr();
    });
    if (typeof this.#index === "number") {
      strList.unshift(`#${this.#index}`);
    }
    if (strList.length === 0) {
      return "";
    }
    if (strList.length === 1) {
      return strList[0];
    }
    return "(?:" + strList.join("|") + ")";
  }
};

// node_modules/hono/dist/router/reg-exp-router/trie.js
init_modules_watch_stub();
var Trie = class {
  static {
    __name(this, "Trie");
  }
  #context = { varIndex: 0 };
  #root = new Node();
  insert(path, index, pathErrorCheckOnly) {
    const paramAssoc = [];
    const groups = [];
    for (let i = 0; ; ) {
      let replaced = false;
      path = path.replace(/\{[^}]+\}/g, (m) => {
        const mark = `@\\${i}`;
        groups[i] = [mark, m];
        i++;
        replaced = true;
        return mark;
      });
      if (!replaced) {
        break;
      }
    }
    const tokens = path.match(/(?::[^\/]+)|(?:\/\*$)|./g) || [];
    for (let i = groups.length - 1; i >= 0; i--) {
      const [mark] = groups[i];
      for (let j = tokens.length - 1; j >= 0; j--) {
        if (tokens[j].indexOf(mark) !== -1) {
          tokens[j] = tokens[j].replace(mark, groups[i][1]);
          break;
        }
      }
    }
    this.#root.insert(tokens, index, paramAssoc, this.#context, pathErrorCheckOnly);
    return paramAssoc;
  }
  buildRegExp() {
    let regexp = this.#root.buildRegExpStr();
    if (regexp === "") {
      return [/^$/, [], []];
    }
    let captureIndex = 0;
    const indexReplacementMap = [];
    const paramReplacementMap = [];
    regexp = regexp.replace(/#(\d+)|@(\d+)|\.\*\$/g, (_, handlerIndex, paramIndex) => {
      if (handlerIndex !== void 0) {
        indexReplacementMap[++captureIndex] = Number(handlerIndex);
        return "$()";
      }
      if (paramIndex !== void 0) {
        paramReplacementMap[Number(paramIndex)] = ++captureIndex;
        return "";
      }
      return "";
    });
    return [new RegExp(`^${regexp}`), indexReplacementMap, paramReplacementMap];
  }
};

// node_modules/hono/dist/router/reg-exp-router/router.js
var emptyParam = [];
var nullMatcher = [/^$/, [], /* @__PURE__ */ Object.create(null)];
var wildcardRegExpCache = /* @__PURE__ */ Object.create(null);
function buildWildcardRegExp(path) {
  return wildcardRegExpCache[path] ??= new RegExp(
    path === "*" ? "" : `^${path.replace(
      /\/\*$|([.\\+*[^\]$()])/g,
      (_, metaChar) => metaChar ? `\\${metaChar}` : "(?:|/.*)"
    )}$`
  );
}
__name(buildWildcardRegExp, "buildWildcardRegExp");
function clearWildcardRegExpCache() {
  wildcardRegExpCache = /* @__PURE__ */ Object.create(null);
}
__name(clearWildcardRegExpCache, "clearWildcardRegExpCache");
function buildMatcherFromPreprocessedRoutes(routes) {
  const trie = new Trie();
  const handlerData = [];
  if (routes.length === 0) {
    return nullMatcher;
  }
  const routesWithStaticPathFlag = routes.map(
    (route) => [!/\*|\/:/.test(route[0]), ...route]
  ).sort(
    ([isStaticA, pathA], [isStaticB, pathB]) => isStaticA ? 1 : isStaticB ? -1 : pathA.length - pathB.length
  );
  const staticMap = /* @__PURE__ */ Object.create(null);
  for (let i = 0, j = -1, len = routesWithStaticPathFlag.length; i < len; i++) {
    const [pathErrorCheckOnly, path, handlers] = routesWithStaticPathFlag[i];
    if (pathErrorCheckOnly) {
      staticMap[path] = [handlers.map(([h]) => [h, /* @__PURE__ */ Object.create(null)]), emptyParam];
    } else {
      j++;
    }
    let paramAssoc;
    try {
      paramAssoc = trie.insert(path, j, pathErrorCheckOnly);
    } catch (e) {
      throw e === PATH_ERROR ? new UnsupportedPathError(path) : e;
    }
    if (pathErrorCheckOnly) {
      continue;
    }
    handlerData[j] = handlers.map(([h, paramCount]) => {
      const paramIndexMap = /* @__PURE__ */ Object.create(null);
      paramCount -= 1;
      for (; paramCount >= 0; paramCount--) {
        const [key, value] = paramAssoc[paramCount];
        paramIndexMap[key] = value;
      }
      return [h, paramIndexMap];
    });
  }
  const [regexp, indexReplacementMap, paramReplacementMap] = trie.buildRegExp();
  for (let i = 0, len = handlerData.length; i < len; i++) {
    for (let j = 0, len2 = handlerData[i].length; j < len2; j++) {
      const map = handlerData[i][j]?.[1];
      if (!map) {
        continue;
      }
      const keys = Object.keys(map);
      for (let k2 = 0, len3 = keys.length; k2 < len3; k2++) {
        map[keys[k2]] = paramReplacementMap[map[keys[k2]]];
      }
    }
  }
  const handlerMap = [];
  for (const i in indexReplacementMap) {
    handlerMap[i] = handlerData[indexReplacementMap[i]];
  }
  return [regexp, handlerMap, staticMap];
}
__name(buildMatcherFromPreprocessedRoutes, "buildMatcherFromPreprocessedRoutes");
function findMiddleware(middleware, path) {
  if (!middleware) {
    return void 0;
  }
  for (const k2 of Object.keys(middleware).sort((a, b2) => b2.length - a.length)) {
    if (buildWildcardRegExp(k2).test(path)) {
      return [...middleware[k2]];
    }
  }
  return void 0;
}
__name(findMiddleware, "findMiddleware");
var RegExpRouter = class {
  static {
    __name(this, "RegExpRouter");
  }
  name = "RegExpRouter";
  #middleware;
  #routes;
  constructor() {
    this.#middleware = { [METHOD_NAME_ALL]: /* @__PURE__ */ Object.create(null) };
    this.#routes = { [METHOD_NAME_ALL]: /* @__PURE__ */ Object.create(null) };
  }
  add(method, path, handler) {
    const middleware = this.#middleware;
    const routes = this.#routes;
    if (!middleware || !routes) {
      throw new Error(MESSAGE_MATCHER_IS_ALREADY_BUILT);
    }
    if (!middleware[method]) {
      ;
      [middleware, routes].forEach((handlerMap) => {
        handlerMap[method] = /* @__PURE__ */ Object.create(null);
        Object.keys(handlerMap[METHOD_NAME_ALL]).forEach((p2) => {
          handlerMap[method][p2] = [...handlerMap[METHOD_NAME_ALL][p2]];
        });
      });
    }
    if (path === "/*") {
      path = "*";
    }
    const paramCount = (path.match(/\/:/g) || []).length;
    if (/\*$/.test(path)) {
      const re = buildWildcardRegExp(path);
      if (method === METHOD_NAME_ALL) {
        Object.keys(middleware).forEach((m) => {
          middleware[m][path] ||= findMiddleware(middleware[m], path) || findMiddleware(middleware[METHOD_NAME_ALL], path) || [];
        });
      } else {
        middleware[method][path] ||= findMiddleware(middleware[method], path) || findMiddleware(middleware[METHOD_NAME_ALL], path) || [];
      }
      Object.keys(middleware).forEach((m) => {
        if (method === METHOD_NAME_ALL || method === m) {
          Object.keys(middleware[m]).forEach((p2) => {
            re.test(p2) && middleware[m][p2].push([handler, paramCount]);
          });
        }
      });
      Object.keys(routes).forEach((m) => {
        if (method === METHOD_NAME_ALL || method === m) {
          Object.keys(routes[m]).forEach(
            (p2) => re.test(p2) && routes[m][p2].push([handler, paramCount])
          );
        }
      });
      return;
    }
    const paths = checkOptionalParameter(path) || [path];
    for (let i = 0, len = paths.length; i < len; i++) {
      const path2 = paths[i];
      Object.keys(routes).forEach((m) => {
        if (method === METHOD_NAME_ALL || method === m) {
          routes[m][path2] ||= [
            ...findMiddleware(middleware[m], path2) || findMiddleware(middleware[METHOD_NAME_ALL], path2) || []
          ];
          routes[m][path2].push([handler, paramCount - len + i + 1]);
        }
      });
    }
  }
  match(method, path) {
    clearWildcardRegExpCache();
    const matchers = this.#buildAllMatchers();
    this.match = (method2, path2) => {
      const matcher = matchers[method2] || matchers[METHOD_NAME_ALL];
      const staticMatch = matcher[2][path2];
      if (staticMatch) {
        return staticMatch;
      }
      const match = path2.match(matcher[0]);
      if (!match) {
        return [[], emptyParam];
      }
      const index = match.indexOf("", 1);
      return [matcher[1][index], match];
    };
    return this.match(method, path);
  }
  #buildAllMatchers() {
    const matchers = /* @__PURE__ */ Object.create(null);
    Object.keys(this.#routes).concat(Object.keys(this.#middleware)).forEach((method) => {
      matchers[method] ||= this.#buildMatcher(method);
    });
    this.#middleware = this.#routes = void 0;
    return matchers;
  }
  #buildMatcher(method) {
    const routes = [];
    let hasOwnRoute = method === METHOD_NAME_ALL;
    [this.#middleware, this.#routes].forEach((r) => {
      const ownRoute = r[method] ? Object.keys(r[method]).map((path) => [path, r[method][path]]) : [];
      if (ownRoute.length !== 0) {
        hasOwnRoute ||= true;
        routes.push(...ownRoute);
      } else if (method !== METHOD_NAME_ALL) {
        routes.push(
          ...Object.keys(r[METHOD_NAME_ALL]).map((path) => [path, r[METHOD_NAME_ALL][path]])
        );
      }
    });
    if (!hasOwnRoute) {
      return null;
    } else {
      return buildMatcherFromPreprocessedRoutes(routes);
    }
  }
};

// node_modules/hono/dist/router/smart-router/index.js
init_modules_watch_stub();

// node_modules/hono/dist/router/smart-router/router.js
init_modules_watch_stub();
var SmartRouter = class {
  static {
    __name(this, "SmartRouter");
  }
  name = "SmartRouter";
  #routers = [];
  #routes = [];
  constructor(init) {
    this.#routers = init.routers;
  }
  add(method, path, handler) {
    if (!this.#routes) {
      throw new Error(MESSAGE_MATCHER_IS_ALREADY_BUILT);
    }
    this.#routes.push([method, path, handler]);
  }
  match(method, path) {
    if (!this.#routes) {
      throw new Error("Fatal error");
    }
    const routers = this.#routers;
    const routes = this.#routes;
    const len = routers.length;
    let i = 0;
    let res;
    for (; i < len; i++) {
      const router = routers[i];
      try {
        for (let i2 = 0, len2 = routes.length; i2 < len2; i2++) {
          router.add(...routes[i2]);
        }
        res = router.match(method, path);
      } catch (e) {
        if (e instanceof UnsupportedPathError) {
          continue;
        }
        throw e;
      }
      this.match = router.match.bind(router);
      this.#routers = [router];
      this.#routes = void 0;
      break;
    }
    if (i === len) {
      throw new Error("Fatal error");
    }
    this.name = `SmartRouter + ${this.activeRouter.name}`;
    return res;
  }
  get activeRouter() {
    if (this.#routes || this.#routers.length !== 1) {
      throw new Error("No active router has been determined yet.");
    }
    return this.#routers[0];
  }
};

// node_modules/hono/dist/router/trie-router/index.js
init_modules_watch_stub();

// node_modules/hono/dist/router/trie-router/router.js
init_modules_watch_stub();

// node_modules/hono/dist/router/trie-router/node.js
init_modules_watch_stub();
var emptyParams = /* @__PURE__ */ Object.create(null);
var Node2 = class {
  static {
    __name(this, "Node");
  }
  #methods;
  #children;
  #patterns;
  #order = 0;
  #params = emptyParams;
  constructor(method, handler, children) {
    this.#children = children || /* @__PURE__ */ Object.create(null);
    this.#methods = [];
    if (method && handler) {
      const m = /* @__PURE__ */ Object.create(null);
      m[method] = { handler, possibleKeys: [], score: 0 };
      this.#methods = [m];
    }
    this.#patterns = [];
  }
  insert(method, path, handler) {
    this.#order = ++this.#order;
    let curNode = this;
    const parts = splitRoutingPath(path);
    const possibleKeys = [];
    for (let i = 0, len = parts.length; i < len; i++) {
      const p2 = parts[i];
      const nextP = parts[i + 1];
      const pattern = getPattern(p2, nextP);
      const key = Array.isArray(pattern) ? pattern[0] : p2;
      if (key in curNode.#children) {
        curNode = curNode.#children[key];
        if (pattern) {
          possibleKeys.push(pattern[1]);
        }
        continue;
      }
      curNode.#children[key] = new Node2();
      if (pattern) {
        curNode.#patterns.push(pattern);
        possibleKeys.push(pattern[1]);
      }
      curNode = curNode.#children[key];
    }
    curNode.#methods.push({
      [method]: {
        handler,
        possibleKeys: possibleKeys.filter((v, i, a) => a.indexOf(v) === i),
        score: this.#order
      }
    });
    return curNode;
  }
  #getHandlerSets(node, method, nodeParams, params) {
    const handlerSets = [];
    for (let i = 0, len = node.#methods.length; i < len; i++) {
      const m = node.#methods[i];
      const handlerSet = m[method] || m[METHOD_NAME_ALL];
      const processedSet = {};
      if (handlerSet !== void 0) {
        handlerSet.params = /* @__PURE__ */ Object.create(null);
        handlerSets.push(handlerSet);
        if (nodeParams !== emptyParams || params && params !== emptyParams) {
          for (let i2 = 0, len2 = handlerSet.possibleKeys.length; i2 < len2; i2++) {
            const key = handlerSet.possibleKeys[i2];
            const processed = processedSet[handlerSet.score];
            handlerSet.params[key] = params?.[key] && !processed ? params[key] : nodeParams[key] ?? params?.[key];
            processedSet[handlerSet.score] = true;
          }
        }
      }
    }
    return handlerSets;
  }
  search(method, path) {
    const handlerSets = [];
    this.#params = emptyParams;
    const curNode = this;
    let curNodes = [curNode];
    const parts = splitPath(path);
    const curNodesQueue = [];
    for (let i = 0, len = parts.length; i < len; i++) {
      const part = parts[i];
      const isLast = i === len - 1;
      const tempNodes = [];
      for (let j = 0, len2 = curNodes.length; j < len2; j++) {
        const node = curNodes[j];
        const nextNode = node.#children[part];
        if (nextNode) {
          nextNode.#params = node.#params;
          if (isLast) {
            if (nextNode.#children["*"]) {
              handlerSets.push(
                ...this.#getHandlerSets(nextNode.#children["*"], method, node.#params)
              );
            }
            handlerSets.push(...this.#getHandlerSets(nextNode, method, node.#params));
          } else {
            tempNodes.push(nextNode);
          }
        }
        for (let k2 = 0, len3 = node.#patterns.length; k2 < len3; k2++) {
          const pattern = node.#patterns[k2];
          const params = node.#params === emptyParams ? {} : { ...node.#params };
          if (pattern === "*") {
            const astNode = node.#children["*"];
            if (astNode) {
              handlerSets.push(...this.#getHandlerSets(astNode, method, node.#params));
              astNode.#params = params;
              tempNodes.push(astNode);
            }
            continue;
          }
          if (!part) {
            continue;
          }
          const [key, name, matcher] = pattern;
          const child = node.#children[key];
          const restPathString = parts.slice(i).join("/");
          if (matcher instanceof RegExp) {
            const m = matcher.exec(restPathString);
            if (m) {
              params[name] = m[0];
              handlerSets.push(...this.#getHandlerSets(child, method, node.#params, params));
              if (Object.keys(child.#children).length) {
                child.#params = params;
                const componentCount = m[0].match(/\//)?.length ?? 0;
                const targetCurNodes = curNodesQueue[componentCount] ||= [];
                targetCurNodes.push(child);
              }
              continue;
            }
          }
          if (matcher === true || matcher.test(part)) {
            params[name] = part;
            if (isLast) {
              handlerSets.push(...this.#getHandlerSets(child, method, params, node.#params));
              if (child.#children["*"]) {
                handlerSets.push(
                  ...this.#getHandlerSets(child.#children["*"], method, params, node.#params)
                );
              }
            } else {
              child.#params = params;
              tempNodes.push(child);
            }
          }
        }
      }
      curNodes = tempNodes.concat(curNodesQueue.shift() ?? []);
    }
    if (handlerSets.length > 1) {
      handlerSets.sort((a, b2) => {
        return a.score - b2.score;
      });
    }
    return [handlerSets.map(({ handler, params }) => [handler, params])];
  }
};

// node_modules/hono/dist/router/trie-router/router.js
var TrieRouter = class {
  static {
    __name(this, "TrieRouter");
  }
  name = "TrieRouter";
  #node;
  constructor() {
    this.#node = new Node2();
  }
  add(method, path, handler) {
    const results = checkOptionalParameter(path);
    if (results) {
      for (let i = 0, len = results.length; i < len; i++) {
        this.#node.insert(method, results[i], handler);
      }
      return;
    }
    this.#node.insert(method, path, handler);
  }
  match(method, path) {
    return this.#node.search(method, path);
  }
};

// node_modules/hono/dist/hono.js
var Hono2 = class extends Hono {
  static {
    __name(this, "Hono");
  }
  constructor(options = {}) {
    super(options);
    this.router = options.router ?? new SmartRouter({
      routers: [new RegExpRouter(), new TrieRouter()]
    });
  }
};

// src/routes/user.routes.ts
init_modules_watch_stub();

// node_modules/hono/dist/middleware/jwt/index.js
init_modules_watch_stub();

// node_modules/hono/dist/middleware/jwt/jwt.js
init_modules_watch_stub();

// node_modules/hono/dist/helper/cookie/index.js
init_modules_watch_stub();

// node_modules/hono/dist/utils/cookie.js
init_modules_watch_stub();
var _serialize = /* @__PURE__ */ __name((name, value, opt = {}) => {
  let cookie = `${name}=${value}`;
  if (name.startsWith("__Secure-") && !opt.secure) {
    throw new Error("__Secure- Cookie must have Secure attributes");
  }
  if (name.startsWith("__Host-")) {
    if (!opt.secure) {
      throw new Error("__Host- Cookie must have Secure attributes");
    }
    if (opt.path !== "/") {
      throw new Error('__Host- Cookie must have Path attributes with "/"');
    }
    if (opt.domain) {
      throw new Error("__Host- Cookie must not have Domain attributes");
    }
  }
  if (opt && typeof opt.maxAge === "number" && opt.maxAge >= 0) {
    if (opt.maxAge > 3456e4) {
      throw new Error(
        "Cookies Max-Age SHOULD NOT be greater than 400 days (34560000 seconds) in duration."
      );
    }
    cookie += `; Max-Age=${opt.maxAge | 0}`;
  }
  if (opt.domain && opt.prefix !== "host") {
    cookie += `; Domain=${opt.domain}`;
  }
  if (opt.path) {
    cookie += `; Path=${opt.path}`;
  }
  if (opt.expires) {
    if (opt.expires.getTime() - Date.now() > 3456e7) {
      throw new Error(
        "Cookies Expires SHOULD NOT be greater than 400 days (34560000 seconds) in the future."
      );
    }
    cookie += `; Expires=${opt.expires.toUTCString()}`;
  }
  if (opt.httpOnly) {
    cookie += "; HttpOnly";
  }
  if (opt.secure) {
    cookie += "; Secure";
  }
  if (opt.sameSite) {
    cookie += `; SameSite=${opt.sameSite.charAt(0).toUpperCase() + opt.sameSite.slice(1)}`;
  }
  if (opt.priority) {
    cookie += `; Priority=${opt.priority}`;
  }
  if (opt.partitioned) {
    if (!opt.secure) {
      throw new Error("Partitioned Cookie must have Secure attributes");
    }
    cookie += "; Partitioned";
  }
  return cookie;
}, "_serialize");
var serialize = /* @__PURE__ */ __name((name, value, opt) => {
  value = encodeURIComponent(value);
  return _serialize(name, value, opt);
}, "serialize");

// node_modules/hono/dist/helper/cookie/index.js
var setCookie = /* @__PURE__ */ __name((c, name, value, opt) => {
  let cookie;
  if (opt?.prefix === "secure") {
    cookie = serialize("__Secure-" + name, value, { path: "/", ...opt, secure: true });
  } else if (opt?.prefix === "host") {
    cookie = serialize("__Host-" + name, value, {
      ...opt,
      path: "/",
      secure: true,
      domain: void 0
    });
  } else {
    cookie = serialize(name, value, { path: "/", ...opt });
  }
  c.header("Set-Cookie", cookie, { append: true });
}, "setCookie");

// node_modules/hono/dist/http-exception.js
init_modules_watch_stub();

// node_modules/hono/dist/utils/jwt/index.js
init_modules_watch_stub();

// node_modules/hono/dist/utils/jwt/jwt.js
init_modules_watch_stub();

// node_modules/hono/dist/utils/encode.js
init_modules_watch_stub();
var decodeBase64Url = /* @__PURE__ */ __name((str) => {
  return decodeBase64(str.replace(/_|-/g, (m) => ({ _: "/", "-": "+" })[m] ?? m));
}, "decodeBase64Url");
var encodeBase64Url = /* @__PURE__ */ __name((buf) => encodeBase64(buf).replace(/\/|\+/g, (m) => ({ "/": "_", "+": "-" })[m] ?? m), "encodeBase64Url");
var encodeBase64 = /* @__PURE__ */ __name((buf) => {
  let binary = "";
  const bytes = new Uint8Array(buf);
  for (let i = 0, len = bytes.length; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}, "encodeBase64");
var decodeBase64 = /* @__PURE__ */ __name((str) => {
  const binary = atob(str);
  const bytes = new Uint8Array(new ArrayBuffer(binary.length));
  const half = binary.length / 2;
  for (let i = 0, j = binary.length - 1; i <= half; i++, j--) {
    bytes[i] = binary.charCodeAt(i);
    bytes[j] = binary.charCodeAt(j);
  }
  return bytes;
}, "decodeBase64");

// node_modules/hono/dist/utils/jwt/jwa.js
init_modules_watch_stub();
var AlgorithmTypes = /* @__PURE__ */ ((AlgorithmTypes2) => {
  AlgorithmTypes2["HS256"] = "HS256";
  AlgorithmTypes2["HS384"] = "HS384";
  AlgorithmTypes2["HS512"] = "HS512";
  AlgorithmTypes2["RS256"] = "RS256";
  AlgorithmTypes2["RS384"] = "RS384";
  AlgorithmTypes2["RS512"] = "RS512";
  AlgorithmTypes2["PS256"] = "PS256";
  AlgorithmTypes2["PS384"] = "PS384";
  AlgorithmTypes2["PS512"] = "PS512";
  AlgorithmTypes2["ES256"] = "ES256";
  AlgorithmTypes2["ES384"] = "ES384";
  AlgorithmTypes2["ES512"] = "ES512";
  AlgorithmTypes2["EdDSA"] = "EdDSA";
  return AlgorithmTypes2;
})(AlgorithmTypes || {});

// node_modules/hono/dist/utils/jwt/jws.js
init_modules_watch_stub();

// node_modules/hono/dist/helper/adapter/index.js
init_modules_watch_stub();
var knownUserAgents = {
  deno: "Deno",
  bun: "Bun",
  workerd: "Cloudflare-Workers",
  node: "Node.js"
};
var getRuntimeKey = /* @__PURE__ */ __name(() => {
  const global = globalThis;
  const userAgentSupported = typeof navigator !== "undefined" && true;
  if (userAgentSupported) {
    for (const [runtimeKey, userAgent] of Object.entries(knownUserAgents)) {
      if (checkUserAgentEquals(userAgent)) {
        return runtimeKey;
      }
    }
  }
  if (typeof global?.EdgeRuntime === "string") {
    return "edge-light";
  }
  if (global?.fastly !== void 0) {
    return "fastly";
  }
  if (global?.process?.release?.name === "node") {
    return "node";
  }
  return "other";
}, "getRuntimeKey");
var checkUserAgentEquals = /* @__PURE__ */ __name((platform) => {
  const userAgent = "Cloudflare-Workers";
  return userAgent.startsWith(platform);
}, "checkUserAgentEquals");

// node_modules/hono/dist/utils/jwt/types.js
init_modules_watch_stub();
var JwtAlgorithmNotImplemented = class extends Error {
  static {
    __name(this, "JwtAlgorithmNotImplemented");
  }
  constructor(alg) {
    super(`${alg} is not an implemented algorithm`);
    this.name = "JwtAlgorithmNotImplemented";
  }
};
var JwtTokenInvalid = class extends Error {
  static {
    __name(this, "JwtTokenInvalid");
  }
  constructor(token) {
    super(`invalid JWT token: ${token}`);
    this.name = "JwtTokenInvalid";
  }
};
var JwtTokenNotBefore = class extends Error {
  static {
    __name(this, "JwtTokenNotBefore");
  }
  constructor(token) {
    super(`token (${token}) is being used before it's valid`);
    this.name = "JwtTokenNotBefore";
  }
};
var JwtTokenExpired = class extends Error {
  static {
    __name(this, "JwtTokenExpired");
  }
  constructor(token) {
    super(`token (${token}) expired`);
    this.name = "JwtTokenExpired";
  }
};
var JwtTokenIssuedAt = class extends Error {
  static {
    __name(this, "JwtTokenIssuedAt");
  }
  constructor(currentTimestamp, iat) {
    super(
      `Invalid "iat" claim, must be a valid number lower than "${currentTimestamp}" (iat: "${iat}")`
    );
    this.name = "JwtTokenIssuedAt";
  }
};
var JwtHeaderInvalid = class extends Error {
  static {
    __name(this, "JwtHeaderInvalid");
  }
  constructor(header) {
    super(`jwt header is invalid: ${JSON.stringify(header)}`);
    this.name = "JwtHeaderInvalid";
  }
};
var JwtHeaderRequiresKid = class extends Error {
  static {
    __name(this, "JwtHeaderRequiresKid");
  }
  constructor(header) {
    super(`required "kid" in jwt header: ${JSON.stringify(header)}`);
    this.name = "JwtHeaderRequiresKid";
  }
};
var JwtTokenSignatureMismatched = class extends Error {
  static {
    __name(this, "JwtTokenSignatureMismatched");
  }
  constructor(token) {
    super(`token(${token}) signature mismatched`);
    this.name = "JwtTokenSignatureMismatched";
  }
};
var CryptoKeyUsage = /* @__PURE__ */ ((CryptoKeyUsage2) => {
  CryptoKeyUsage2["Encrypt"] = "encrypt";
  CryptoKeyUsage2["Decrypt"] = "decrypt";
  CryptoKeyUsage2["Sign"] = "sign";
  CryptoKeyUsage2["Verify"] = "verify";
  CryptoKeyUsage2["DeriveKey"] = "deriveKey";
  CryptoKeyUsage2["DeriveBits"] = "deriveBits";
  CryptoKeyUsage2["WrapKey"] = "wrapKey";
  CryptoKeyUsage2["UnwrapKey"] = "unwrapKey";
  return CryptoKeyUsage2;
})(CryptoKeyUsage || {});

// node_modules/hono/dist/utils/jwt/utf8.js
init_modules_watch_stub();
var utf8Encoder = new TextEncoder();
var utf8Decoder = new TextDecoder();

// node_modules/hono/dist/utils/jwt/jws.js
async function signing(privateKey, alg, data) {
  const algorithm = getKeyAlgorithm(alg);
  const cryptoKey = await importPrivateKey(privateKey, algorithm);
  return await crypto.subtle.sign(algorithm, cryptoKey, data);
}
__name(signing, "signing");
async function verifying(publicKey, alg, signature, data) {
  const algorithm = getKeyAlgorithm(alg);
  const cryptoKey = await importPublicKey(publicKey, algorithm);
  return await crypto.subtle.verify(algorithm, cryptoKey, signature, data);
}
__name(verifying, "verifying");
function pemToBinary(pem) {
  return decodeBase64(pem.replace(/-+(BEGIN|END).*/g, "").replace(/\s/g, ""));
}
__name(pemToBinary, "pemToBinary");
async function importPrivateKey(key, alg) {
  if (!crypto.subtle || !crypto.subtle.importKey) {
    throw new Error("`crypto.subtle.importKey` is undefined. JWT auth middleware requires it.");
  }
  if (isCryptoKey(key)) {
    if (key.type !== "private" && key.type !== "secret") {
      throw new Error(
        `unexpected key type: CryptoKey.type is ${key.type}, expected private or secret`
      );
    }
    return key;
  }
  const usages = [CryptoKeyUsage.Sign];
  if (typeof key === "object") {
    return await crypto.subtle.importKey("jwk", key, alg, false, usages);
  }
  if (key.includes("PRIVATE")) {
    return await crypto.subtle.importKey("pkcs8", pemToBinary(key), alg, false, usages);
  }
  return await crypto.subtle.importKey("raw", utf8Encoder.encode(key), alg, false, usages);
}
__name(importPrivateKey, "importPrivateKey");
async function importPublicKey(key, alg) {
  if (!crypto.subtle || !crypto.subtle.importKey) {
    throw new Error("`crypto.subtle.importKey` is undefined. JWT auth middleware requires it.");
  }
  if (isCryptoKey(key)) {
    if (key.type === "public" || key.type === "secret") {
      return key;
    }
    key = await exportPublicJwkFrom(key);
  }
  if (typeof key === "string" && key.includes("PRIVATE")) {
    const privateKey = await crypto.subtle.importKey("pkcs8", pemToBinary(key), alg, true, [
      CryptoKeyUsage.Sign
    ]);
    key = await exportPublicJwkFrom(privateKey);
  }
  const usages = [CryptoKeyUsage.Verify];
  if (typeof key === "object") {
    return await crypto.subtle.importKey("jwk", key, alg, false, usages);
  }
  if (key.includes("PUBLIC")) {
    return await crypto.subtle.importKey("spki", pemToBinary(key), alg, false, usages);
  }
  return await crypto.subtle.importKey("raw", utf8Encoder.encode(key), alg, false, usages);
}
__name(importPublicKey, "importPublicKey");
async function exportPublicJwkFrom(privateKey) {
  if (privateKey.type !== "private") {
    throw new Error(`unexpected key type: ${privateKey.type}`);
  }
  if (!privateKey.extractable) {
    throw new Error("unexpected private key is unextractable");
  }
  const jwk = await crypto.subtle.exportKey("jwk", privateKey);
  const { kty } = jwk;
  const { alg, e, n } = jwk;
  const { crv, x: x2, y } = jwk;
  return { kty, alg, e, n, crv, x: x2, y, key_ops: [CryptoKeyUsage.Verify] };
}
__name(exportPublicJwkFrom, "exportPublicJwkFrom");
function getKeyAlgorithm(name) {
  switch (name) {
    case "HS256":
      return {
        name: "HMAC",
        hash: {
          name: "SHA-256"
        }
      };
    case "HS384":
      return {
        name: "HMAC",
        hash: {
          name: "SHA-384"
        }
      };
    case "HS512":
      return {
        name: "HMAC",
        hash: {
          name: "SHA-512"
        }
      };
    case "RS256":
      return {
        name: "RSASSA-PKCS1-v1_5",
        hash: {
          name: "SHA-256"
        }
      };
    case "RS384":
      return {
        name: "RSASSA-PKCS1-v1_5",
        hash: {
          name: "SHA-384"
        }
      };
    case "RS512":
      return {
        name: "RSASSA-PKCS1-v1_5",
        hash: {
          name: "SHA-512"
        }
      };
    case "PS256":
      return {
        name: "RSA-PSS",
        hash: {
          name: "SHA-256"
        },
        saltLength: 32
      };
    case "PS384":
      return {
        name: "RSA-PSS",
        hash: {
          name: "SHA-384"
        },
        saltLength: 48
      };
    case "PS512":
      return {
        name: "RSA-PSS",
        hash: {
          name: "SHA-512"
        },
        saltLength: 64
      };
    case "ES256":
      return {
        name: "ECDSA",
        hash: {
          name: "SHA-256"
        },
        namedCurve: "P-256"
      };
    case "ES384":
      return {
        name: "ECDSA",
        hash: {
          name: "SHA-384"
        },
        namedCurve: "P-384"
      };
    case "ES512":
      return {
        name: "ECDSA",
        hash: {
          name: "SHA-512"
        },
        namedCurve: "P-521"
      };
    case "EdDSA":
      return {
        name: "Ed25519",
        namedCurve: "Ed25519"
      };
    default:
      throw new JwtAlgorithmNotImplemented(name);
  }
}
__name(getKeyAlgorithm, "getKeyAlgorithm");
function isCryptoKey(key) {
  const runtime = getRuntimeKey();
  if (runtime === "node" && !!crypto.webcrypto) {
    return key instanceof crypto.webcrypto.CryptoKey;
  }
  return key instanceof CryptoKey;
}
__name(isCryptoKey, "isCryptoKey");

// node_modules/hono/dist/utils/jwt/jwt.js
var encodeJwtPart = /* @__PURE__ */ __name((part) => encodeBase64Url(utf8Encoder.encode(JSON.stringify(part)).buffer).replace(/=/g, ""), "encodeJwtPart");
var encodeSignaturePart = /* @__PURE__ */ __name((buf) => encodeBase64Url(buf).replace(/=/g, ""), "encodeSignaturePart");
var decodeJwtPart = /* @__PURE__ */ __name((part) => JSON.parse(utf8Decoder.decode(decodeBase64Url(part))), "decodeJwtPart");
function isTokenHeader(obj) {
  if (typeof obj === "object" && obj !== null) {
    const objWithAlg = obj;
    return "alg" in objWithAlg && Object.values(AlgorithmTypes).includes(objWithAlg.alg) && (!("typ" in objWithAlg) || objWithAlg.typ === "JWT");
  }
  return false;
}
__name(isTokenHeader, "isTokenHeader");
var sign = /* @__PURE__ */ __name(async (payload, privateKey, alg = "HS256") => {
  const encodedPayload = encodeJwtPart(payload);
  let encodedHeader;
  if (typeof privateKey === "object" && "alg" in privateKey) {
    alg = privateKey.alg;
    encodedHeader = encodeJwtPart({ alg, typ: "JWT", kid: privateKey.kid });
  } else {
    encodedHeader = encodeJwtPart({ alg, typ: "JWT" });
  }
  const partialToken = `${encodedHeader}.${encodedPayload}`;
  const signaturePart = await signing(privateKey, alg, utf8Encoder.encode(partialToken));
  const signature = encodeSignaturePart(signaturePart);
  return `${partialToken}.${signature}`;
}, "sign");
var verify = /* @__PURE__ */ __name(async (token, publicKey, alg = "HS256") => {
  const tokenParts = token.split(".");
  if (tokenParts.length !== 3) {
    throw new JwtTokenInvalid(token);
  }
  const { header, payload } = decode(token);
  if (!isTokenHeader(header)) {
    throw new JwtHeaderInvalid(header);
  }
  const now = Date.now() / 1e3 | 0;
  if (payload.nbf && payload.nbf > now) {
    throw new JwtTokenNotBefore(token);
  }
  if (payload.exp && payload.exp <= now) {
    throw new JwtTokenExpired(token);
  }
  if (payload.iat && now < payload.iat) {
    throw new JwtTokenIssuedAt(now, payload.iat);
  }
  const headerPayload = token.substring(0, token.lastIndexOf("."));
  const verified = await verifying(
    publicKey,
    alg,
    decodeBase64Url(tokenParts[2]),
    utf8Encoder.encode(headerPayload)
  );
  if (!verified) {
    throw new JwtTokenSignatureMismatched(token);
  }
  return payload;
}, "verify");
var verifyFromJwks = /* @__PURE__ */ __name(async (token, options, init) => {
  const header = decodeHeader(token);
  if (!isTokenHeader(header)) {
    throw new JwtHeaderInvalid(header);
  }
  if (!header.kid) {
    throw new JwtHeaderRequiresKid(header);
  }
  if (options.jwks_uri) {
    const response = await fetch(options.jwks_uri, init);
    if (!response.ok) {
      throw new Error(`failed to fetch JWKS from ${options.jwks_uri}`);
    }
    const data = await response.json();
    if (!data.keys) {
      throw new Error('invalid JWKS response. "keys" field is missing');
    }
    if (!Array.isArray(data.keys)) {
      throw new Error('invalid JWKS response. "keys" field is not an array');
    }
    if (options.keys) {
      options.keys.push(...data.keys);
    } else {
      options.keys = data.keys;
    }
  } else if (!options.keys) {
    throw new Error('verifyFromJwks requires options for either "keys" or "jwks_uri" or both');
  }
  const matchingKey = options.keys.find((key) => key.kid === header.kid);
  if (!matchingKey) {
    throw new JwtTokenInvalid(token);
  }
  return await verify(token, matchingKey, matchingKey.alg || header.alg);
}, "verifyFromJwks");
var decode = /* @__PURE__ */ __name((token) => {
  try {
    const [h, p2] = token.split(".");
    const header = decodeJwtPart(h);
    const payload = decodeJwtPart(p2);
    return {
      header,
      payload
    };
  } catch {
    throw new JwtTokenInvalid(token);
  }
}, "decode");
var decodeHeader = /* @__PURE__ */ __name((token) => {
  try {
    const [h] = token.split(".");
    return decodeJwtPart(h);
  } catch {
    throw new JwtTokenInvalid(token);
  }
}, "decodeHeader");

// node_modules/hono/dist/utils/jwt/index.js
var Jwt = { sign, verify, decode, verifyFromJwks };

// node_modules/hono/dist/middleware/jwt/jwt.js
var verify2 = Jwt.verify;
var decode2 = Jwt.decode;
var sign2 = Jwt.sign;

// src/routes/user.routes.ts
var import_edge = __toESM(require_edge3(), 1);

// node_modules/@prisma/extension-accelerate/dist/index.js
init_modules_watch_stub();
var import_default_index = __toESM(require_default_index(), 1);
var import_default_index2 = __toESM(require_default_index(), 1);
function f(a, n) {
  let [c = 0, u = 0, m = 0] = a.split(".").map(Number), [o = 0, h = 0, i = 0] = n.split(".").map(Number), r = o - c, e = h - u, t = i - m;
  return r || e || t;
}
__name(f, "f");
function p() {
  let a = import_default_index2.default.Prisma.prismaVersion;
  return [F(), `PrismaEngine/${a.engine}`, `PrismaClient/${a.client}`].join(" ");
}
__name(p, "p");
function F() {
  return typeof navigator < "u" ? "Cloudflare-Workers" : typeof process < "u" && typeof process.versions < "u" ? `Node/${process.versions.node} (${process.platform}; ${process.arch})` : "EdgeRuntime" in globalThis ? "Vercel-Edge-Runtime" : "UnknownRuntime";
}
__name(F, "F");
var P = "@prisma/extension-accelerate";
var x = "Unable to connect to the Accelerate API. This may be due to a network or DNS issue. Please check your connection and the Accelerate connection string. For details, visit https://www.prisma.io/docs/accelerate/troubleshoot.";
function b(a) {
  let n = p(), c;
  return async (u) => {
    let { args: m } = u, { cacheStrategy: o, __accelerateInfo: h = false, ...i } = m, r = null, { __internalParams: e, query: t } = u;
    return e.customDataProxyFetch = () => async (s, d) => {
      let A = new Array();
      typeof o?.ttl == "number" && A.push(`max-age=${o.ttl}`), typeof o?.swr == "number" && A.push(`stale-while-revalidate=${o.swr}`);
      let y = o?.tags?.join(",") ?? "";
      d.headers = { ...d.headers, "cache-control": A.length > 0 ? A.join(",") : "no-cache", "user-agent": n, ...y.length > 0 ? { "accelerate-cache-tags": y } : {} }, c && (d.headers["accelerate-query-engine-jwt"] = c);
      try {
        let g = await a(s, d);
        return r = { cacheStatus: g.headers.get("accelerate-cache-status"), lastModified: new Date(g.headers.get("last-modified") ?? ""), region: g.headers.get("cf-ray")?.split("-")[1] ?? "unspecified", requestId: g.headers.get("cf-ray") ?? "unspecified", signature: g.headers.get("accelerate-signature") ?? "unspecified" }, c = g.headers.get("accelerate-query-engine-jwt") ?? void 0, g;
      } catch {
        throw new Error(x);
      }
    }, h ? { data: await t(i, e), info: r } : t(i, e);
  };
}
__name(b, "b");
function T(a) {
  let n = f("5.1.0", import_default_index.default.Prisma.prismaVersion.client) >= 0;
  return import_default_index.default.Prisma.defineExtension((c) => {
    let { apiKeyPromise: u, baseURL: m } = S(c), o = b(a);
    async function h(r) {
      let e = await u;
      if (!e) return { requestId: "unspecified" };
      let t;
      try {
        t = await a(new URL("/invalidate", m).href, { method: "POST", headers: { authorization: `Bearer ${e}`, "content-type": "application/json" }, body: JSON.stringify(r) });
      } catch {
        throw new Error(x);
      }
      if (!t?.ok) {
        let s = await t.text();
        throw new Error(`Failed to invalidate Accelerate cache. Response was ${t.status} ${t.statusText}. ${s}`);
      }
      return t.body?.cancel(), { requestId: t.headers.get("cf-ray") ?? "unspecified" };
    }
    __name(h, "h");
    let i = c.$extends({ name: P, query: { $allModels: { $allOperations: o } } });
    return i.$extends({ name: P, client: { $accelerate: { invalidate: /* @__PURE__ */ __name((r) => h(r), "invalidate"), invalidateAll: /* @__PURE__ */ __name(() => h({ tags: "all" }), "invalidateAll") } }, model: { $allModels: { aggregate(r) {
      let e = import_default_index.default.Prisma.getExtensionContext(this), t = n ? e.$parent[e.$name] : i[e.name], s = t.aggregate(r);
      return Object.assign(s, { withAccelerateInfo() {
        return t.aggregate({ ...r, __accelerateInfo: true });
      } });
    }, count(r) {
      let e = import_default_index.default.Prisma.getExtensionContext(this), t = n ? e.$parent[e.$name] : i[e.name], s = t.count(r);
      return Object.assign(s, { withAccelerateInfo() {
        return t.count({ ...r, __accelerateInfo: true });
      } });
    }, findFirst(r) {
      let e = import_default_index.default.Prisma.getExtensionContext(this), t = n ? e.$parent[e.$name] : i[e.name], s = t.findFirst(r);
      return Object.assign(s, { withAccelerateInfo() {
        return t.findFirst({ ...r, __accelerateInfo: true });
      } });
    }, findFirstOrThrow(r) {
      let e = import_default_index.default.Prisma.getExtensionContext(this), t = n ? e.$parent[e.$name] : i[e.name], s = t.findFirstOrThrow(r);
      return Object.assign(s, { withAccelerateInfo() {
        return t.findFirstOrThrow({ ...r, __accelerateInfo: true });
      } });
    }, findMany(r) {
      let e = import_default_index.default.Prisma.getExtensionContext(this), t = n ? e.$parent[e.$name] : i[e.name], s = t.findMany(r);
      return Object.assign(s, { withAccelerateInfo() {
        return t.findMany({ ...r, __accelerateInfo: true });
      } });
    }, findUnique(r) {
      let e = import_default_index.default.Prisma.getExtensionContext(this), t = n ? e.$parent[e.$name] : i[e.name], s = t.findUnique(r);
      return Object.assign(s, { withAccelerateInfo() {
        return t.findUnique({ ...r, __accelerateInfo: true });
      } });
    }, findUniqueOrThrow(r) {
      let e = import_default_index.default.Prisma.getExtensionContext(this), t = n ? e.$parent[e.$name] : i[e.name], s = t.findUniqueOrThrow(r);
      return Object.assign(s, { withAccelerateInfo() {
        return t.findUniqueOrThrow({ ...r, __accelerateInfo: true });
      } });
    }, groupBy(r) {
      let e = import_default_index.default.Prisma.getExtensionContext(this), t = n ? e.$parent[e.$name] : i[e.name], s = t.groupBy(r);
      return Object.assign(s, { withAccelerateInfo() {
        return t.groupBy({ ...r, __accelerateInfo: true });
      } });
    } } } });
  });
}
__name(T, "T");
function S(a) {
  let n = Reflect.get(a, "_accelerateEngineConfig");
  try {
    let { host: c, hostname: u, protocol: m, searchParams: o } = new URL(n?.accelerateUtils?.resolveDatasourceUrl?.(n));
    if (m === "prisma+postgres:" && (u === "localhost" || u === "127.0.0.1")) return { apiKeyPromise: Promise.resolve(o.get("api_key")), baseURL: new URL(`http://${c}`) };
  } catch {
  }
  return { apiKeyPromise: a._engine.start().then(() => a._engine.apiKey?.() ?? null), baseURL: new URL("https://accelerate.prisma-data.net") };
}
__name(S, "S");
function k(a) {
  let n = a?.fetch ?? fetch;
  return T(n);
}
__name(k, "k");

// src/routes/user.routes.ts
var userRouter = new Hono2();
userRouter.post("/signup", async (c) => {
  const prisma = new import_edge.PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(k());
  try {
    console.log("hello");
    const body = await c.req.json();
    if (!body || !body?.email || !body?.password || !body?.username) {
      c.status(400);
      return c.json({
        error: "All fields (email, password, name) are required."
      });
    }
    console.log(body);
    try {
      const user = await prisma.user.create({
        data: {
          email: String(body.email),
          username: String(body.username),
          password: String(body.password)
        }
      });
      const token = await sign2({ id: user.id }, c.env.SECRET, "HS256");
      setCookie(c, "token", token);
      return c.json({ token, message: "Signup Completed" });
    } catch (E) {
      c.status(401);
      return c.json({ error: "User Email Already exist" });
    }
  } catch (E) {
    return c.json({ error: "Fill  All existing data" });
  }
});
userRouter.post("/signin", async (c) => {
  const prisma = new import_edge.PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(k());
  try {
    const body = await c.req.json();
    console.log(body);
    if (!body || !body?.email || !body?.password) {
      c.status(400);
      return c.json({
        error: "All fields (email, password) are required."
      });
    }
    const user = await prisma.user.findFirst({
      where: { email: String(body.email), password: String(body.password) }
    });
    if (!user?.id) {
      c.status(403);
      return c.json({ message: "Email or Password not matched" });
    }
    const token = await sign2({ id: user.id, name: user.email }, c.env.SECRET);
    setCookie(c, "token", token, {
      httpOnly: true,
      path: "/",
      maxAge: 1e3 * 60 * 60 * 6,
      sameSite: "lax"
    });
    return c.json({ id: user.id, token, message: "signin completed" });
  } catch (e) {
    return c.json({ message: "File all the data" });
  }
});

// src/routes/blog.routes.ts
init_modules_watch_stub();
var import_edge2 = __toESM(require_edge3(), 1);
var blogRouter = new Hono2();
blogRouter.get("/bulk", async (c) => {
  const prisma = new import_edge2.PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(k());
  try {
    const blogs = await prisma.blog.findMany({
      select: {
        id: true,
        title: true,
        content: true,
        published: true,
        author: {
          select: {
            username: true
          }
        }
      }
    });
    if (blogs.length > 0) {
      c.json(200);
      return c.json({ success: true, blog: blogs });
    }
  } catch (e) {
    c.json(500);
    return c.json({ success: false, message: "server side error" });
  }
});
blogRouter.get("/:id", async (c) => {
  const prisma = new import_edge2.PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(k());
  try {
    const param = c.req.param();
    const blog = await prisma.blog.findFirst({
      where: {
        id: parseInt(param.id)
        //Blog Id
      },
      select: {
        id: true,
        title: true,
        content: true,
        published: true,
        author: {
          select: {
            username: true
          }
        }
      }
    });
    if (blog) {
      c.status(200);
      return c.json({ blog, message: "Blog Showing with given id" });
    } else {
      c.status(200);
      return c.json({ blog });
    }
  } catch (e) {
    return c.json({ message: "Error " });
  }
});
blogRouter.use("/*", async (c, next) => {
  try {
    console.log("hello");
    const token = await c.req.header("authorization") || "";
    if (!token) {
      c.status(401);
      return c.json({ status: false, message: "Invalid token" });
    }
    const decode4 = await verify2(token, c.env.SECRET);
    console.log("Debug Output:", decode4);
    c.set("userId", Number(decode4.id));
    console.log("userId : ", c.get("userId"));
    await next();
  } catch (err) {
    c.status(401);
    return c.json({ status: false, message: "Invalid token" });
  }
});
blogRouter.post("/", async (c) => {
  const prisma = new import_edge2.PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(k());
  const body = await c.req.json();
  console.log("hello", body);
  if (!body || !body?.title || !body.content) {
    c.status(403);
    return c.json({ success: false, message: "Invalid Body!" });
  }
  try {
    const blog = await prisma.blog.create({
      data: {
        title: String(body.title),
        content: String(body.content),
        published: Boolean(body.published),
        authorId: c.get("userId")
      }
    });
    return c.json({ success: true, id: blog.id, message: "Blog Added" });
  } catch (e) {
    c.status(500);
    return c.json({ success: false, message: "Blog Not added" });
  }
});
blogRouter.put("/", async (c) => {
  const prisma = new import_edge2.PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(k());
  try {
    const body = await c.req.json();
    const blog = await prisma.blog.update({
      where: {
        id: body.id,
        //  Blog Id
        authorId: c.get("userId")
        //  Only allow user to update their own blog
      },
      data: {
        title: body.title,
        content: body.content,
        published: body.published
      }
    });
    c.status(200);
    return c.json({ blog, message: "Blog Updated Succesfully" });
  } catch (e) {
    return c.json({ message: "Your are not valid author" });
  }
});

// node_modules/hono/dist/middleware/cors/index.js
init_modules_watch_stub();
var cors = /* @__PURE__ */ __name((options) => {
  const defaults = {
    origin: "*",
    allowMethods: ["GET", "HEAD", "PUT", "POST", "DELETE", "PATCH"],
    allowHeaders: [],
    exposeHeaders: []
  };
  const opts = {
    ...defaults,
    ...options
  };
  const findAllowOrigin = ((optsOrigin) => {
    if (typeof optsOrigin === "string") {
      if (optsOrigin === "*") {
        return () => optsOrigin;
      } else {
        return (origin) => optsOrigin === origin ? origin : null;
      }
    } else if (typeof optsOrigin === "function") {
      return optsOrigin;
    } else {
      return (origin) => optsOrigin.includes(origin) ? origin : null;
    }
  })(opts.origin);
  const findAllowMethods = ((optsAllowMethods) => {
    if (typeof optsAllowMethods === "function") {
      return optsAllowMethods;
    } else if (Array.isArray(optsAllowMethods)) {
      return () => optsAllowMethods;
    } else {
      return () => [];
    }
  })(opts.allowMethods);
  return /* @__PURE__ */ __name(async function cors2(c, next) {
    function set(key, value) {
      c.res.headers.set(key, value);
    }
    __name(set, "set");
    const allowOrigin = findAllowOrigin(c.req.header("origin") || "", c);
    if (allowOrigin) {
      set("Access-Control-Allow-Origin", allowOrigin);
    }
    if (opts.origin !== "*") {
      const existingVary = c.req.header("Vary");
      if (existingVary) {
        set("Vary", existingVary);
      } else {
        set("Vary", "Origin");
      }
    }
    if (opts.credentials) {
      set("Access-Control-Allow-Credentials", "true");
    }
    if (opts.exposeHeaders?.length) {
      set("Access-Control-Expose-Headers", opts.exposeHeaders.join(","));
    }
    if (c.req.method === "OPTIONS") {
      if (opts.maxAge != null) {
        set("Access-Control-Max-Age", opts.maxAge.toString());
      }
      const allowMethods = findAllowMethods(c.req.header("origin") || "", c);
      if (allowMethods.length) {
        set("Access-Control-Allow-Methods", allowMethods.join(","));
      }
      let headers = opts.allowHeaders;
      if (!headers?.length) {
        const requestHeaders = c.req.header("Access-Control-Request-Headers");
        if (requestHeaders) {
          headers = requestHeaders.split(/\s*,\s*/);
        }
      }
      if (headers?.length) {
        set("Access-Control-Allow-Headers", headers.join(","));
        c.res.headers.append("Vary", "Access-Control-Request-Headers");
      }
      c.res.headers.delete("Content-Length");
      c.res.headers.delete("Content-Type");
      return new Response(null, {
        headers: c.res.headers,
        status: 204,
        statusText: "No Content"
      });
    }
    await next();
  }, "cors2");
}, "cors");

// src/index.ts
var app = new Hono2();
app.use("/api/v1/*", cors({
  origin: "http://localhost:5173",
  credentials: true,
  allowHeaders: ["Content-Type", "Authorization"],
  allowMethods: ["GET", "POST", "PUT", "OPTIONS"]
}));
app.route("/api/v1/user", userRouter);
app.route("/api/v1/blog", blogRouter);
app.get("/", (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Navbar</title>
      <script src="https://cdn.tailwindcss.com"><\/script>
    </head>
    <body>
      <!-- Navbar -->
      <nav class="bg-gray-800 text-white px-4 py-3 flex justify-between items-center">
        <div class="text-xl font-bold">
          <a href="/">MyBlog</a>
        </div>

        <div class="flex items-center space-x-4">
        <a href="/api/v1/blog/bulk" class="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded">All Blogs</a>
          <a href="/api/v1/blog" class="bg-green-500 hover:bg-green-700 px-4 py-2 rounded">Add Blog</a>

          <!-- Dropdown -->
          <div class="relative group">
            <button class="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded">
              Blog Options \u25BC
            </button>
            <div class="absolute hidden group-hover:block bg-white text-black mt-1 rounded shadow-lg z-10">
              <a href="/update-blog" class="block px-4 py-2 hover:bg-gray-100">Update Blog</a>
              <a href="/see-blog" class="block px-4 py-2 hover:bg-gray-100">See Blog</a>
            </div>
          </div>
        </div>

        <div class="flex items-center space-x-2">
          <a href="/signin" class="bg-green-600 hover:bg-green-700 px-4 py-2 rounded">Sign In</a>
          <a href="/signup" class="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded">Sign Up</a>
        </div>
      </nav>
    </body>
    </html>
  `);
});
var src_default = app;

// node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
init_modules_watch_stub();
var drainBody = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;

// node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
init_modules_watch_stub();
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
__name(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError(e);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;

// .wrangler/tmp/bundle-qqQTcI/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = src_default;

// node_modules/wrangler/templates/middleware/common.ts
init_modules_watch_stub();
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, "__facade_register__");
function __facade_invokeChain__(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
__name(__facade_invokeChain__, "__facade_invokeChain__");
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
__name(__facade_invoke__, "__facade_invoke__");

// .wrangler/tmp/bundle-qqQTcI/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class ___Facade_ScheduledController__ {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  static {
    __name(this, "__Facade_ScheduledController__");
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof ___Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name(function(request, env, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env, ctx) {
      const dispatcher = /* @__PURE__ */ __name(function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__(request, env, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler, "wrapExportedHandler");
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = /* @__PURE__ */ __name((request, env, ctx) => {
      this.env = env;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    }, "#fetchDispatcher");
    #dispatcher = /* @__PURE__ */ __name((type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    }, "#dispatcher");
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default as default
};
//# sourceMappingURL=index.js.map
