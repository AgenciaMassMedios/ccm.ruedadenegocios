! function(e, t) { "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.DailyIframe = t() : e.DailyIframe = t() }(this, (function() {
    return function(e) {
        var t = {};

        function r(n) { if (t[n]) return t[n].exports; var i = t[n] = { i: n, l: !1, exports: {} }; return e[n].call(i.exports, i, i.exports, r), i.l = !0, i.exports }
        return r.m = e, r.c = t, r.d = function(e, t, n) { r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n }) }, r.r = function(e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, r.t = function(e, t) {
            if (1 & t && (e = r(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if (r.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e)
                for (var i in e) r.d(n, i, function(t) { return e[t] }.bind(null, i));
            return n
        }, r.n = function(e) { var t = e && e.__esModule ? function() { return e.default } : function() { return e }; return r.d(t, "a", t), t }, r.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, r.p = "", r(r.s = 64)
    }([function(e, t, r) { e.exports = r(66) }, function(e, t) {
        function r(e, t, r, n, i, a, o) {
            try {
                var s = e[a](o),
                    c = s.value
            } catch (e) { return void r(e) }
            s.done ? t(c) : Promise.resolve(c).then(n, i)
        }
        e.exports = function(e) {
            return function() {
                var t = this,
                    n = arguments;
                return new Promise((function(i, a) {
                    var o = e.apply(t, n);

                    function s(e) { r(o, i, a, s, c, "next", e) }

                    function c(e) { r(o, i, a, s, c, "throw", e) }
                    s(void 0)
                }))
            }
        }
    }, function(e, t, r) {
        "use strict";

        function n() { return !i() && "undefined" != typeof window && window.navigator && window.navigator.userAgent ? window.navigator.userAgent : "" }

        function i() { return "undefined" != typeof navigator && navigator.product && "ReactNative" === navigator.product }

        function a() { return navigator && navigator.mediaDevices && navigator.mediaDevices.getUserMedia }

        function o() {
            return !!(navigator && navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia) && function(e, t) {
                if (!e || !t) return !1;
                switch (e) {
                    case "Chrome":
                        return t.major >= 75;
                    case "Safari":
                        return RTCRtpTransceiver.prototype.hasOwnProperty("currentDirection") && !(13 === t.major && 0 === t.minor && 0 === t.point);
                    case "Firefox":
                        return t.major >= 67
                }
                return !1
            }(u(), function() {
                switch (u()) {
                    case "Chrome":
                        return l();
                    case "Safari":
                        return f();
                    case "Firefox":
                        return p();
                    case "Edge":
                        return function() {
                            var e = 0,
                                t = 0;
                            if ("undefined" != typeof window) { var r = n().match(/Edge\/(\d+).(\d+)/); if (r) try { e = parseInt(r[1]), t = parseInt(r[2]) } catch (e) {} }
                            return { major: e, minor: t }
                        }()
                }
            }())
        }

        function s() { return !!i() || c() }

        function c() {
            return a() && ! function() {
                var e, t = u();
                if (!n()) return !0;
                switch (t) {
                    case "Chrome":
                        return (e = l()).major && e.major > 0 && e.major < 61;
                    case "Firefox":
                        return (e = p()).major < 78;
                    case "Safari":
                        return (e = f()).major < 12;
                    default:
                        return !0
                }
            }()
        }

        function u() { if ("undefined" != typeof window) { var e = n(); return d() ? "Safari" : e.indexOf("Edge") > -1 ? "Edge" : e.match(/Chrome\//) ? "Chrome" : e.indexOf("Safari") > -1 ? "Safari" : e.indexOf("Firefox") > -1 ? "Firefox" : e.indexOf("MSIE") > -1 || e.indexOf(".NET") > -1 ? "IE" : "Unknown Browser" } }

        function l() {
            var e = 0,
                t = 0,
                r = 0,
                i = 0,
                a = !1;
            if ("undefined" != typeof window) {
                var o = n(),
                    s = o.match(/Chrome\/(\d+).(\d+).(\d+).(\d+)/);
                if (s) try { e = parseInt(s[1]), t = parseInt(s[2]), r = parseInt(s[3]), i = parseInt(s[4]), a = o.indexOf("OPR/") > -1 } catch (e) {}
            }
            return { major: e, minor: t, build: r, patch: i, opera: a }
        }

        function d() { return !!n().match(/iPad|iPhone|iPod/i) && a() }

        function f() {
            var e = 0,
                t = 0,
                r = 0;
            if ("undefined" != typeof window) { var i = n().match(/Version\/(\d+).(\d+)(.(\d+))?/); if (i) try { e = parseInt(i[1]), t = parseInt(i[2]), r = parseInt(i[4]) } catch (e) {} else d() && (e = 14, t = 0, r = 3) }
            return { major: e, minor: t, point: r }
        }

        function p() {
            var e = 0,
                t = 0;
            if ("undefined" != typeof window) { var r = n().match(/Firefox\/(\d+).(\d+)/); if (r) try { e = parseInt(r[1]), t = parseInt(r[2]) } catch (e) {} }
            return { major: e, minor: t }
        }
        r.d(t, "b", (function() { return n })), r.d(t, "c", (function() { return i })), r.d(t, "d", (function() { return o })), r.d(t, "e", (function() { return s })), r.d(t, "a", (function() { return c }))
    }, function(e, t, r) {
        "use strict";
        r.d(t, "c", (function() { return i })), r.d(t, "b", (function() { return a })), r.d(t, "a", (function() { return o }));
        var n = r(2);

        function i() { return Date.now() + Math.random().toString() }

        function a() { throw new Error("Method must be implemented in subclass") }

        function o(e) { var t = e ? new URL(e).origin : null; return !t || t.match(/https:\/\/[^.]+\.daily\.co/) ? Object(n.e)() ? "https://c.daily.co/static/call-machine-object-bundle.js" : "https://c.daily.co/static/call-machine-object-nosfu-bundle.js" : (t || (console.warn("No baseUrl provided for call object bundle. Defaulting to production CDN..."), t = "https://c.daily.co"), Object(n.e)() ? "".concat(t, "/static/call-machine-object-bundle.js") : "".concat(t, "/static/call-machine-object-nosfu-bundle.js")) }
    }, function(e, t) { e.exports = function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } }, function(e, t) {
        function r(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        e.exports = function(e, t, n) { return t && r(e.prototype, t), n && r(e, n), e }
    }, function(e, t) {
        function r(t) { return e.exports = r = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) { return e.__proto__ || Object.getPrototypeOf(e) }, r(t) }
        e.exports = r
    }, function(e, t) {
        var r = Array.isArray;
        e.exports = r
    }, function(e, t, r) {
        var n = r(41),
            i = "object" == typeof self && self && self.Object === Object && self,
            a = n || i || Function("return this")();
        e.exports = a
    }, function(e, t, r) {
        var n = r(26);
        e.exports = function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && n(e, t)
        }
    }, function(e, t, r) {
        var n = r(12),
            i = r(17);
        e.exports = function(e, t) { return !t || "object" !== n(t) && "function" != typeof t ? i(e) : t }
    }, function(e, t, r) {
        "use strict";
        var n, i = "object" == typeof Reflect ? Reflect : null,
            a = i && "function" == typeof i.apply ? i.apply : function(e, t, r) { return Function.prototype.apply.call(e, t, r) };
        n = i && "function" == typeof i.ownKeys ? i.ownKeys : Object.getOwnPropertySymbols ? function(e) { return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e)) } : function(e) { return Object.getOwnPropertyNames(e) };
        var o = Number.isNaN || function(e) { return e != e };

        function s() { s.init.call(this) }
        e.exports = s, s.EventEmitter = s, s.prototype._events = void 0, s.prototype._eventsCount = 0, s.prototype._maxListeners = void 0;
        var c = 10;

        function u(e) { if ("function" != typeof e) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e) }

        function l(e) { return void 0 === e._maxListeners ? s.defaultMaxListeners : e._maxListeners }

        function d(e, t, r, n) {
            var i, a, o, s;
            if (u(r), void 0 === (a = e._events) ? (a = e._events = Object.create(null), e._eventsCount = 0) : (void 0 !== a.newListener && (e.emit("newListener", t, r.listener ? r.listener : r), a = e._events), o = a[t]), void 0 === o) o = a[t] = r, ++e._eventsCount;
            else if ("function" == typeof o ? o = a[t] = n ? [r, o] : [o, r] : n ? o.unshift(r) : o.push(r), (i = l(e)) > 0 && o.length > i && !o.warned) {
                o.warned = !0;
                var c = new Error("Possible EventEmitter memory leak detected. " + o.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
                c.name = "MaxListenersExceededWarning", c.emitter = e, c.type = t, c.count = o.length, s = c, console && console.warn && console.warn(s)
            }
            return e
        }

        function f() { if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments) }

        function p(e, t, r) {
            var n = { fired: !1, wrapFn: void 0, target: e, type: t, listener: r },
                i = f.bind(n);
            return i.listener = r, n.wrapFn = i, i
        }

        function h(e, t, r) { var n = e._events; if (void 0 === n) return []; var i = n[t]; return void 0 === i ? [] : "function" == typeof i ? r ? [i.listener || i] : [i] : r ? function(e) { for (var t = new Array(e.length), r = 0; r < t.length; ++r) t[r] = e[r].listener || e[r]; return t }(i) : m(i, i.length) }

        function v(e) { var t = this._events; if (void 0 !== t) { var r = t[e]; if ("function" == typeof r) return 1; if (void 0 !== r) return r.length } return 0 }

        function m(e, t) { for (var r = new Array(t), n = 0; n < t; ++n) r[n] = e[n]; return r }
        Object.defineProperty(s, "defaultMaxListeners", {
            enumerable: !0,
            get: function() { return c },
            set: function(e) {
                if ("number" != typeof e || e < 0 || o(e)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
                c = e
            }
        }), s.init = function() { void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0 }, s.prototype.setMaxListeners = function(e) { if ("number" != typeof e || e < 0 || o(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + "."); return this._maxListeners = e, this }, s.prototype.getMaxListeners = function() { return l(this) }, s.prototype.emit = function(e) {
            for (var t = [], r = 1; r < arguments.length; r++) t.push(arguments[r]);
            var n = "error" === e,
                i = this._events;
            if (void 0 !== i) n = n && void 0 === i.error;
            else if (!n) return !1;
            if (n) { var o; if (t.length > 0 && (o = t[0]), o instanceof Error) throw o; var s = new Error("Unhandled error." + (o ? " (" + o.message + ")" : "")); throw s.context = o, s }
            var c = i[e];
            if (void 0 === c) return !1;
            if ("function" == typeof c) a(c, this, t);
            else {
                var u = c.length,
                    l = m(c, u);
                for (r = 0; r < u; ++r) a(l[r], this, t)
            }
            return !0
        }, s.prototype.addListener = function(e, t) { return d(this, e, t, !1) }, s.prototype.on = s.prototype.addListener, s.prototype.prependListener = function(e, t) { return d(this, e, t, !0) }, s.prototype.once = function(e, t) { return u(t), this.on(e, p(this, e, t)), this }, s.prototype.prependOnceListener = function(e, t) { return u(t), this.prependListener(e, p(this, e, t)), this }, s.prototype.removeListener = function(e, t) {
            var r, n, i, a, o;
            if (u(t), void 0 === (n = this._events)) return this;
            if (void 0 === (r = n[e])) return this;
            if (r === t || r.listener === t) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete n[e], n.removeListener && this.emit("removeListener", e, r.listener || t));
            else if ("function" != typeof r) {
                for (i = -1, a = r.length - 1; a >= 0; a--)
                    if (r[a] === t || r[a].listener === t) { o = r[a].listener, i = a; break }
                if (i < 0) return this;
                0 === i ? r.shift() : function(e, t) {
                    for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                    e.pop()
                }(r, i), 1 === r.length && (n[e] = r[0]), void 0 !== n.removeListener && this.emit("removeListener", e, o || t)
            }
            return this
        }, s.prototype.off = s.prototype.removeListener, s.prototype.removeAllListeners = function(e) {
            var t, r, n;
            if (void 0 === (r = this._events)) return this;
            if (void 0 === r.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== r[e] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete r[e]), this;
            if (0 === arguments.length) { var i, a = Object.keys(r); for (n = 0; n < a.length; ++n) "removeListener" !== (i = a[n]) && this.removeAllListeners(i); return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this }
            if ("function" == typeof(t = r[e])) this.removeListener(e, t);
            else if (void 0 !== t)
                for (n = t.length - 1; n >= 0; n--) this.removeListener(e, t[n]);
            return this
        }, s.prototype.listeners = function(e) { return h(this, e, !0) }, s.prototype.rawListeners = function(e) { return h(this, e, !1) }, s.listenerCount = function(e, t) { return "function" == typeof e.listenerCount ? e.listenerCount(t) : v.call(e, t) }, s.prototype.listenerCount = v, s.prototype.eventNames = function() { return this._eventsCount > 0 ? n(this._events) : [] }
    }, function(e, t) {
        function r(t) { return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? e.exports = r = function(e) { return typeof e } : e.exports = r = function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e }, r(t) }
        e.exports = r
    }, function(e, t, r) {
        var n = r(99),
            i = r(102);
        e.exports = function(e, t) { var r = i(e, t); return n(r) ? r : void 0 }
    }, function(e, t) { e.exports = function(e, t, r) { return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e } }, function(e, t, r) {
        var n = r(18),
            i = r(77),
            a = r(78),
            o = n ? n.toStringTag : void 0;
        e.exports = function(e) { return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : o && o in Object(e) ? i(e) : a(e) }
    }, function(e, t) { e.exports = function(e) { return null != e && "object" == typeof e } }, function(e, t) { e.exports = function(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e } }, function(e, t, r) {
        var n = r(8).Symbol;
        e.exports = n
    }, function(e, t, r) {
        var n = r(89),
            i = r(90),
            a = r(91),
            o = r(92),
            s = r(93);

        function c(e) {
            var t = -1,
                r = null == e ? 0 : e.length;
            for (this.clear(); ++t < r;) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        c.prototype.clear = n, c.prototype.delete = i, c.prototype.get = a, c.prototype.has = o, c.prototype.set = s, e.exports = c
    }, function(e, t, r) {
        var n = r(50);
        e.exports = function(e, t) {
            for (var r = e.length; r--;)
                if (n(e[r][0], t)) return r;
            return -1
        }
    }, function(e, t, r) {
        var n = r(13)(Object, "create");
        e.exports = n
    }, function(e, t, r) {
        var n = r(111);
        e.exports = function(e, t) { var r = e.__data__; return n(t) ? r["string" == typeof t ? "string" : "hash"] : r.map }
    }, function(e, t, r) {
        var n = r(15),
            i = r(16);
        e.exports = function(e) { return "symbol" == typeof e || i(e) && "[object Symbol]" == n(e) }
    }, function(e, t, r) {
        var n = r(23);
        e.exports = function(e) { if ("string" == typeof e || n(e)) return e; var t = e + ""; return "0" == t && 1 / e == -1 / 0 ? "-0" : t }
    }, function(e, t, r) {
        "use strict";
        r.d(t, "a", (function() { return c }));
        var n = r(4),
            i = r.n(n),
            a = r(5),
            o = r.n(a),
            s = r(3),
            c = function() {
                function e() { i()(this, e) }
                return o()(e, [{ key: "addListenerForMessagesFromCallMachine", value: function(e, t, r) { Object(s.b)() } }, { key: "addListenerForMessagesFromDailyJs", value: function(e, t, r) { Object(s.b)() } }, { key: "sendMessageToCallMachine", value: function(e, t, r, n) { Object(s.b)() } }, { key: "sendMessageToDailyJs", value: function(e, t, r) { Object(s.b)() } }, { key: "removeListener", value: function(e) { Object(s.b)() } }]), e
            }()
    }, function(e, t) {
        function r(t, n) { return e.exports = r = Object.setPrototypeOf || function(e, t) { return e.__proto__ = t, e }, r(t, n) }
        e.exports = r
    }, function(e, t, r) {
        var n = r(74),
            i = r(82),
            a = r(29);
        e.exports = function(e) { return a(e) ? n(e) : i(e) }
    }, function(e, t) { e.exports = function(e) { return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991 } }, function(e, t, r) {
        var n = r(47),
            i = r(28);
        e.exports = function(e) { return null != e && i(e.length) && !n(e) }
    }, function(e, t) { e.exports = function(e) { var t = typeof e; return null != e && ("object" == t || "function" == t) } }, function(e, t, r) {
        var n = r(13)(r(8), "Map");
        e.exports = n
    }, function(e, t, r) {
        var n = r(103),
            i = r(110),
            a = r(112),
            o = r(113),
            s = r(114);

        function c(e) {
            var t = -1,
                r = null == e ? 0 : e.length;
            for (this.clear(); ++t < r;) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        c.prototype.clear = n, c.prototype.delete = i, c.prototype.get = a, c.prototype.has = o, c.prototype.set = s, e.exports = c
    }, function(e, t, r) {
        var n = r(7),
            i = r(23),
            a = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            o = /^\w*$/;
        e.exports = function(e, t) { if (n(e)) return !1; var r = typeof e; return !("number" != r && "symbol" != r && "boolean" != r && null != e && !i(e)) || (o.test(e) || !a.test(e) || null != t && e in Object(t)) }
    }, function(e, t, r) {
        var n = r(38),
            i = r(70),
            a = r(48),
            o = r(7);
        e.exports = function(e, t) { return (o(e) ? n : i)(e, a(t, 3)) }
    }, function(e, t, r) {
        var n = r(150),
            i = r(7);
        e.exports = function(e, t, r, a) { return null == e ? [] : (i(t) || (t = null == t ? [] : [t]), i(r = a ? void 0 : r) || (r = null == r ? [] : [r]), n(e, t, r)) }
    }, function(e, t, r) {
        ! function(e) {
            "use strict";
            var t = "function" == typeof Map,
                r = "function" == typeof Set,
                n = "function" == typeof WeakSet,
                i = Object.keys,
                a = function(e, t) { return e && "object" == typeof e && t.add(e) },
                o = function(e, t, r, n) {
                    for (var i, a = 0; a < e.length; a++)
                        if (r((i = e[a])[0], t[0], n) && r(i[1], t[1], n)) return !0;
                    return !1
                },
                s = function(e, t, r, n) {
                    for (var i = 0; i < e.length; i++)
                        if (r(e[i], t, n)) return !0;
                    return !1
                },
                c = function(e, t) { return e === t || e != e && t != t },
                u = function(e) { return e.constructor === Object },
                l = function(e) { return "function" == typeof e.then },
                d = function(e) { return !(!e.$$typeof || !e._store) },
                f = function(e) {
                    return function(t) {
                        var r = e || t;
                        return function(e, t, i) {
                            void 0 === i && (i = n ? new WeakSet : Object.create({ _values: [], add: function(e) { this._values.push(e) }, has: function(e) { return !!~this._values.indexOf(e) } }));
                            var o = i.has(e),
                                s = i.has(t);
                            return o || s ? o && s : (a(e, i), a(t, i), r(e, t, i))
                        }
                    }
                },
                p = function(e) { var t = []; return e.forEach((function(e, r) { return t.push([r, e]) })), t },
                h = function(e) { var t = []; return e.forEach((function(e) { return t.push(e) })), t },
                v = function(e, t, r, n) {
                    var a, o = i(e),
                        u = i(t);
                    if (o.length !== u.length) return !1;
                    for (var l = 0; l < o.length; l++) { if (a = o[l], !s(u, a, c)) return !1; if (!("_owner" === a && d(e) && d(t) || r(e[a], t[a], n))) return !1 }
                    return !0
                },
                m = Array.isArray,
                g = function(e) {
                    var n = "function" == typeof e ? e(i) : i;

                    function i(e, i, a) {
                        if (c(e, i)) return !0;
                        var d = typeof e;
                        if (d !== typeof i || "object" !== d || !e || !i) return !1;
                        if (u(e) && u(i)) return v(e, i, n, a);
                        var f = m(e),
                            g = m(i);
                        if (f || g) return f === g && function(e, t, r, n) {
                            if (e.length !== t.length) return !1;
                            for (var i = 0; i < e.length; i++)
                                if (!r(e[i], t[i], n)) return !1;
                            return !0
                        }(e, i, n, a);
                        var y = e instanceof Date,
                            b = i instanceof Date;
                        if (y || b) return y === b && c(e.getTime(), i.getTime());
                        var _, w, k = e instanceof RegExp,
                            M = i instanceof RegExp;
                        if (k || M) return k === M && (w = i, (_ = e).source === w.source && _.global === w.global && _.ignoreCase === w.ignoreCase && _.multiline === w.multiline && _.unicode === w.unicode && _.sticky === w.sticky && _.lastIndex === w.lastIndex);
                        if (l(e) || l(i)) return e === i;
                        if (t) {
                            var A = e instanceof Map,
                                S = i instanceof Map;
                            if (A || S) return A === S && function(e, t, r, n) {
                                if (e.size !== t.size) return !1;
                                for (var i = p(e), a = p(t), s = 0; s < i.length; s++)
                                    if (!o(a, i[s], r, n) || !o(i, a[s], r, n)) return !1;
                                return !0
                            }(e, i, n, a)
                        }
                        if (r) {
                            var T = e instanceof Set,
                                E = i instanceof Set;
                            if (T || E) return T === E && function(e, t, r, n) {
                                if (e.size !== t.size) return !1;
                                for (var i = h(e), a = h(t), o = 0; o < i.length; o++)
                                    if (!s(a, i[o], r, n) || !s(i, a[o], r, n)) return !1;
                                return !0
                            }(e, i, n, a)
                        }
                        return v(e, i, n, a)
                    }
                    return i
                },
                y = g(f()),
                b = g(f(c)),
                _ = g(),
                w = g((function() { return c })),
                k = { circularDeep: y, circularShallow: b, createCustom: g, deep: _, sameValueZero: c, shallow: w };
            e.circularDeepEqual = y, e.circularShallowEqual = b, e.createCustomEqual = g, e.deepEqual = _, e.default = k, e.sameValueZeroEqual = c, e.shallowEqual = w, Object.defineProperty(e, "__esModule", { value: !0 })
        }(t)
    }, function(e, t) {
        var r;
        r = function() { return this }();
        try { r = r || new Function("return this")() } catch (e) { "object" == typeof window && (r = window) }
        e.exports = r
    }, function(e, t) {
        e.exports = function(e, t) {
            for (var r = -1, n = null == e ? 0 : e.length, i = 0, a = []; ++r < n;) {
                var o = e[r];
                t(o, r, e) && (a[i++] = o)
            }
            return a
        }
    }, function(e, t, r) {
        var n = r(71),
            i = r(86)(n);
        e.exports = i
    }, function(e, t, r) {
        var n = r(76),
            i = r(16),
            a = Object.prototype,
            o = a.hasOwnProperty,
            s = a.propertyIsEnumerable,
            c = n(function() { return arguments }()) ? n : function(e) { return i(e) && o.call(e, "callee") && !s.call(e, "callee") };
        e.exports = c
    }, function(e, t, r) {
        (function(t) {
            var r = "object" == typeof t && t && t.Object === Object && t;
            e.exports = r
        }).call(this, r(37))
    }, function(e, t, r) {
        (function(e) {
            var n = r(8),
                i = r(79),
                a = t && !t.nodeType && t,
                o = a && "object" == typeof e && e && !e.nodeType && e,
                s = o && o.exports === a ? n.Buffer : void 0,
                c = (s ? s.isBuffer : void 0) || i;
            e.exports = c
        }).call(this, r(43)(e))
    }, function(e, t) { e.exports = function(e) { return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", { enumerable: !0, get: function() { return e.l } }), Object.defineProperty(e, "id", { enumerable: !0, get: function() { return e.i } }), e.webpackPolyfill = 1), e } }, function(e, t) {
        var r = /^(?:0|[1-9]\d*)$/;
        e.exports = function(e, t) { var n = typeof e; return !!(t = null == t ? 9007199254740991 : t) && ("number" == n || "symbol" != n && r.test(e)) && e > -1 && e % 1 == 0 && e < t }
    }, function(e, t, r) {
        var n = r(80),
            i = r(46),
            a = r(81),
            o = a && a.isTypedArray,
            s = o ? i(o) : n;
        e.exports = s
    }, function(e, t) { e.exports = function(e) { return function(t) { return e(t) } } }, function(e, t, r) {
        var n = r(15),
            i = r(30);
        e.exports = function(e) { if (!i(e)) return !1; var t = n(e); return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t }
    }, function(e, t, r) {
        var n = r(87),
            i = r(137),
            a = r(59),
            o = r(7),
            s = r(147);
        e.exports = function(e) { return "function" == typeof e ? e : null == e ? a : "object" == typeof e ? o(e) ? i(e[0], e[1]) : n(e) : s(e) }
    }, function(e, t, r) {
        var n = r(19),
            i = r(94),
            a = r(95),
            o = r(96),
            s = r(97),
            c = r(98);

        function u(e) {
            var t = this.__data__ = new n(e);
            this.size = t.size
        }
        u.prototype.clear = i, u.prototype.delete = a, u.prototype.get = o, u.prototype.has = s, u.prototype.set = c, e.exports = u
    }, function(e, t) { e.exports = function(e, t) { return e === t || e != e && t != t } }, function(e, t) {
        var r = Function.prototype.toString;
        e.exports = function(e) { if (null != e) { try { return r.call(e) } catch (e) {} try { return e + "" } catch (e) {} } return "" }
    }, function(e, t, r) {
        var n = r(115),
            i = r(16);
        e.exports = function e(t, r, a, o, s) { return t === r || (null == t || null == r || !i(t) && !i(r) ? t != t && r != r : n(t, r, a, o, e, s)) }
    }, function(e, t, r) {
        var n = r(116),
            i = r(119),
            a = r(120);
        e.exports = function(e, t, r, o, s, c) {
            var u = 1 & r,
                l = e.length,
                d = t.length;
            if (l != d && !(u && d > l)) return !1;
            var f = c.get(e);
            if (f && c.get(t)) return f == t;
            var p = -1,
                h = !0,
                v = 2 & r ? new n : void 0;
            for (c.set(e, t), c.set(t, e); ++p < l;) {
                var m = e[p],
                    g = t[p];
                if (o) var y = u ? o(g, m, p, t, e, c) : o(m, g, p, e, t, c);
                if (void 0 !== y) {
                    if (y) continue;
                    h = !1;
                    break
                }
                if (v) { if (!i(t, (function(e, t) { if (!a(v, t) && (m === e || s(m, e, r, o, c))) return v.push(t) }))) { h = !1; break } } else if (m !== g && !s(m, g, r, o, c)) { h = !1; break }
            }
            return c.delete(e), c.delete(t), h
        }
    }, function(e, t, r) {
        var n = r(30);
        e.exports = function(e) { return e == e && !n(e) }
    }, function(e, t) { e.exports = function(e, t) { return function(r) { return null != r && (r[e] === t && (void 0 !== t || e in Object(r))) } } }, function(e, t, r) {
        var n = r(57),
            i = r(24);
        e.exports = function(e, t) { for (var r = 0, a = (t = n(t, e)).length; null != e && r < a;) e = e[i(t[r++])]; return r && r == a ? e : void 0 }
    }, function(e, t, r) {
        var n = r(7),
            i = r(33),
            a = r(139),
            o = r(142);
        e.exports = function(e, t) { return n(e) ? e : i(e, t) ? [e] : a(o(e)) }
    }, function(e, t) { e.exports = function(e, t) { for (var r = -1, n = null == e ? 0 : e.length, i = Array(n); ++r < n;) i[r] = t(e[r], r, e); return i } }, function(e, t) { e.exports = function(e) { return e } }, function(e, t, r) {
        var n = r(65);
        e.exports = function(e, t) { if (null == e) return {}; var r, i, a = n(e, t); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); for (i = 0; i < o.length; i++) r = o[i], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]) } return a }
    }, function(e, t, r) {
        e.exports = function(e) {
            var t = {};

            function r(n) { if (t[n]) return t[n].exports; var i = t[n] = { i: n, l: !1, exports: {} }; return e[n].call(i.exports, i, i.exports, r), i.l = !0, i.exports }
            return r.m = e, r.c = t, r.d = function(e, t, n) { r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n }) }, r.r = function(e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, r.t = function(e, t) {
                if (1 & t && (e = r(e)), 8 & t) return e;
                if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                var n = Object.create(null);
                if (r.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e)
                    for (var i in e) r.d(n, i, function(t) { return e[t] }.bind(null, i));
                return n
            }, r.n = function(e) { var t = e && e.__esModule ? function() { return e.default } : function() { return e }; return r.d(t, "a", t), t }, r.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, r.p = "", r(r.s = 90)
        }({
            17: function(e, t, r) {
                "use strict";
                t.__esModule = !0, t.default = void 0;
                var n = r(18),
                    i = function() {
                        function e() {}
                        return e.getFirstMatch = function(e, t) { var r = t.match(e); return r && r.length > 0 && r[1] || "" }, e.getSecondMatch = function(e, t) { var r = t.match(e); return r && r.length > 1 && r[2] || "" }, e.matchAndReturnConst = function(e, t, r) { if (e.test(t)) return r }, e.getWindowsVersionName = function(e) {
                            switch (e) {
                                case "NT":
                                    return "NT";
                                case "XP":
                                    return "XP";
                                case "NT 5.0":
                                    return "2000";
                                case "NT 5.1":
                                    return "XP";
                                case "NT 5.2":
                                    return "2003";
                                case "NT 6.0":
                                    return "Vista";
                                case "NT 6.1":
                                    return "7";
                                case "NT 6.2":
                                    return "8";
                                case "NT 6.3":
                                    return "8.1";
                                case "NT 10.0":
                                    return "10";
                                default:
                                    return
                            }
                        }, e.getMacOSVersionName = function(e) {
                            var t = e.split(".").splice(0, 2).map((function(e) { return parseInt(e, 10) || 0 }));
                            if (t.push(0), 10 === t[0]) switch (t[1]) {
                                case 5:
                                    return "Leopard";
                                case 6:
                                    return "Snow Leopard";
                                case 7:
                                    return "Lion";
                                case 8:
                                    return "Mountain Lion";
                                case 9:
                                    return "Mavericks";
                                case 10:
                                    return "Yosemite";
                                case 11:
                                    return "El Capitan";
                                case 12:
                                    return "Sierra";
                                case 13:
                                    return "High Sierra";
                                case 14:
                                    return "Mojave";
                                case 15:
                                    return "Catalina";
                                default:
                                    return
                            }
                        }, e.getAndroidVersionName = function(e) { var t = e.split(".").splice(0, 2).map((function(e) { return parseInt(e, 10) || 0 })); if (t.push(0), !(1 === t[0] && t[1] < 5)) return 1 === t[0] && t[1] < 6 ? "Cupcake" : 1 === t[0] && t[1] >= 6 ? "Donut" : 2 === t[0] && t[1] < 2 ? "Eclair" : 2 === t[0] && 2 === t[1] ? "Froyo" : 2 === t[0] && t[1] > 2 ? "Gingerbread" : 3 === t[0] ? "Honeycomb" : 4 === t[0] && t[1] < 1 ? "Ice Cream Sandwich" : 4 === t[0] && t[1] < 4 ? "Jelly Bean" : 4 === t[0] && t[1] >= 4 ? "KitKat" : 5 === t[0] ? "Lollipop" : 6 === t[0] ? "Marshmallow" : 7 === t[0] ? "Nougat" : 8 === t[0] ? "Oreo" : 9 === t[0] ? "Pie" : void 0 }, e.getVersionPrecision = function(e) { return e.split(".").length }, e.compareVersions = function(t, r, n) {
                            void 0 === n && (n = !1);
                            var i = e.getVersionPrecision(t),
                                a = e.getVersionPrecision(r),
                                o = Math.max(i, a),
                                s = 0,
                                c = e.map([t, r], (function(t) {
                                    var r = o - e.getVersionPrecision(t),
                                        n = t + new Array(r + 1).join(".0");
                                    return e.map(n.split("."), (function(e) { return new Array(20 - e.length).join("0") + e })).reverse()
                                }));
                            for (n && (s = o - Math.min(i, a)), o -= 1; o >= s;) {
                                if (c[0][o] > c[1][o]) return 1;
                                if (c[0][o] === c[1][o]) {
                                    if (o === s) return 0;
                                    o -= 1
                                } else if (c[0][o] < c[1][o]) return -1
                            }
                        }, e.map = function(e, t) { var r, n = []; if (Array.prototype.map) return Array.prototype.map.call(e, t); for (r = 0; r < e.length; r += 1) n.push(t(e[r])); return n }, e.find = function(e, t) { var r, n; if (Array.prototype.find) return Array.prototype.find.call(e, t); for (r = 0, n = e.length; r < n; r += 1) { var i = e[r]; if (t(i, r)) return i } }, e.assign = function(e) { for (var t, r, n = e, i = arguments.length, a = new Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++) a[o - 1] = arguments[o]; if (Object.assign) return Object.assign.apply(Object, [e].concat(a)); var s = function() { var e = a[t]; "object" == typeof e && null !== e && Object.keys(e).forEach((function(t) { n[t] = e[t] })) }; for (t = 0, r = a.length; t < r; t += 1) s(); return e }, e.getBrowserAlias = function(e) { return n.BROWSER_ALIASES_MAP[e] }, e.getBrowserTypeByAlias = function(e) { return n.BROWSER_MAP[e] || "" }, e
                    }();
                t.default = i, e.exports = t.default
            },
            18: function(e, t, r) {
                "use strict";
                t.__esModule = !0, t.ENGINE_MAP = t.OS_MAP = t.PLATFORMS_MAP = t.BROWSER_MAP = t.BROWSER_ALIASES_MAP = void 0, t.BROWSER_ALIASES_MAP = { "Amazon Silk": "amazon_silk", "Android Browser": "android", Bada: "bada", BlackBerry: "blackberry", Chrome: "chrome", Chromium: "chromium", Electron: "electron", Epiphany: "epiphany", Firefox: "firefox", Focus: "focus", Generic: "generic", "Google Search": "google_search", Googlebot: "googlebot", "Internet Explorer": "ie", "K-Meleon": "k_meleon", Maxthon: "maxthon", "Microsoft Edge": "edge", "MZ Browser": "mz", "NAVER Whale Browser": "naver", Opera: "opera", "Opera Coast": "opera_coast", PhantomJS: "phantomjs", Puffin: "puffin", QupZilla: "qupzilla", QQ: "qq", QQLite: "qqlite", Safari: "safari", Sailfish: "sailfish", "Samsung Internet for Android": "samsung_internet", SeaMonkey: "seamonkey", Sleipnir: "sleipnir", Swing: "swing", Tizen: "tizen", "UC Browser": "uc", Vivaldi: "vivaldi", "WebOS Browser": "webos", WeChat: "wechat", "Yandex Browser": "yandex", Roku: "roku" }, t.BROWSER_MAP = { amazon_silk: "Amazon Silk", android: "Android Browser", bada: "Bada", blackberry: "BlackBerry", chrome: "Chrome", chromium: "Chromium", electron: "Electron", epiphany: "Epiphany", firefox: "Firefox", focus: "Focus", generic: "Generic", googlebot: "Googlebot", google_search: "Google Search", ie: "Internet Explorer", k_meleon: "K-Meleon", maxthon: "Maxthon", edge: "Microsoft Edge", mz: "MZ Browser", naver: "NAVER Whale Browser", opera: "Opera", opera_coast: "Opera Coast", phantomjs: "PhantomJS", puffin: "Puffin", qupzilla: "QupZilla", qq: "QQ Browser", qqlite: "QQ Browser Lite", safari: "Safari", sailfish: "Sailfish", samsung_internet: "Samsung Internet for Android", seamonkey: "SeaMonkey", sleipnir: "Sleipnir", swing: "Swing", tizen: "Tizen", uc: "UC Browser", vivaldi: "Vivaldi", webos: "WebOS Browser", wechat: "WeChat", yandex: "Yandex Browser" }, t.PLATFORMS_MAP = { tablet: "tablet", mobile: "mobile", desktop: "desktop", tv: "tv" }, t.OS_MAP = { WindowsPhone: "Windows Phone", Windows: "Windows", MacOS: "macOS", iOS: "iOS", Android: "Android", WebOS: "WebOS", BlackBerry: "BlackBerry", Bada: "Bada", Tizen: "Tizen", Linux: "Linux", ChromeOS: "Chrome OS", PlayStation4: "PlayStation 4", Roku: "Roku" }, t.ENGINE_MAP = { EdgeHTML: "EdgeHTML", Blink: "Blink", Trident: "Trident", Presto: "Presto", Gecko: "Gecko", WebKit: "WebKit" }
            },
            90: function(e, t, r) {
                "use strict";
                t.__esModule = !0, t.default = void 0;
                var n, i = (n = r(91)) && n.__esModule ? n : { default: n },
                    a = r(18);

                function o(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                var s = function() {
                    function e() {}
                    var t, r;
                    return e.getParser = function(e, t) { if (void 0 === t && (t = !1), "string" != typeof e) throw new Error("UserAgent should be a string"); return new i.default(e, t) }, e.parse = function(e) { return new i.default(e).getResult() }, t = e, (r = [{ key: "BROWSER_MAP", get: function() { return a.BROWSER_MAP } }, { key: "ENGINE_MAP", get: function() { return a.ENGINE_MAP } }, { key: "OS_MAP", get: function() { return a.OS_MAP } }, { key: "PLATFORMS_MAP", get: function() { return a.PLATFORMS_MAP } }]) && o(t, r), e
                }();
                t.default = s, e.exports = t.default
            },
            91: function(e, t, r) {
                "use strict";
                t.__esModule = !0, t.default = void 0;
                var n = c(r(92)),
                    i = c(r(93)),
                    a = c(r(94)),
                    o = c(r(95)),
                    s = c(r(17));

                function c(e) { return e && e.__esModule ? e : { default: e } }
                var u = function() {
                    function e(e, t) {
                        if (void 0 === t && (t = !1), null == e || "" === e) throw new Error("UserAgent parameter can't be empty");
                        this._ua = e, this.parsedResult = {}, !0 !== t && this.parse()
                    }
                    var t = e.prototype;
                    return t.getUA = function() { return this._ua }, t.test = function(e) { return e.test(this._ua) }, t.parseBrowser = function() {
                        var e = this;
                        this.parsedResult.browser = {};
                        var t = s.default.find(n.default, (function(t) { if ("function" == typeof t.test) return t.test(e); if (t.test instanceof Array) return t.test.some((function(t) { return e.test(t) })); throw new Error("Browser's test function is not valid") }));
                        return t && (this.parsedResult.browser = t.describe(this.getUA())), this.parsedResult.browser
                    }, t.getBrowser = function() { return this.parsedResult.browser ? this.parsedResult.browser : this.parseBrowser() }, t.getBrowserName = function(e) { return e ? String(this.getBrowser().name).toLowerCase() || "" : this.getBrowser().name || "" }, t.getBrowserVersion = function() { return this.getBrowser().version }, t.getOS = function() { return this.parsedResult.os ? this.parsedResult.os : this.parseOS() }, t.parseOS = function() {
                        var e = this;
                        this.parsedResult.os = {};
                        var t = s.default.find(i.default, (function(t) { if ("function" == typeof t.test) return t.test(e); if (t.test instanceof Array) return t.test.some((function(t) { return e.test(t) })); throw new Error("Browser's test function is not valid") }));
                        return t && (this.parsedResult.os = t.describe(this.getUA())), this.parsedResult.os
                    }, t.getOSName = function(e) { var t = this.getOS().name; return e ? String(t).toLowerCase() || "" : t || "" }, t.getOSVersion = function() { return this.getOS().version }, t.getPlatform = function() { return this.parsedResult.platform ? this.parsedResult.platform : this.parsePlatform() }, t.getPlatformType = function(e) { void 0 === e && (e = !1); var t = this.getPlatform().type; return e ? String(t).toLowerCase() || "" : t || "" }, t.parsePlatform = function() {
                        var e = this;
                        this.parsedResult.platform = {};
                        var t = s.default.find(a.default, (function(t) { if ("function" == typeof t.test) return t.test(e); if (t.test instanceof Array) return t.test.some((function(t) { return e.test(t) })); throw new Error("Browser's test function is not valid") }));
                        return t && (this.parsedResult.platform = t.describe(this.getUA())), this.parsedResult.platform
                    }, t.getEngine = function() { return this.parsedResult.engine ? this.parsedResult.engine : this.parseEngine() }, t.getEngineName = function(e) { return e ? String(this.getEngine().name).toLowerCase() || "" : this.getEngine().name || "" }, t.parseEngine = function() {
                        var e = this;
                        this.parsedResult.engine = {};
                        var t = s.default.find(o.default, (function(t) { if ("function" == typeof t.test) return t.test(e); if (t.test instanceof Array) return t.test.some((function(t) { return e.test(t) })); throw new Error("Browser's test function is not valid") }));
                        return t && (this.parsedResult.engine = t.describe(this.getUA())), this.parsedResult.engine
                    }, t.parse = function() { return this.parseBrowser(), this.parseOS(), this.parsePlatform(), this.parseEngine(), this }, t.getResult = function() { return s.default.assign({}, this.parsedResult) }, t.satisfies = function(e) {
                        var t = this,
                            r = {},
                            n = 0,
                            i = {},
                            a = 0;
                        if (Object.keys(e).forEach((function(t) { var o = e[t]; "string" == typeof o ? (i[t] = o, a += 1) : "object" == typeof o && (r[t] = o, n += 1) })), n > 0) {
                            var o = Object.keys(r),
                                c = s.default.find(o, (function(e) { return t.isOS(e) }));
                            if (c) { var u = this.satisfies(r[c]); if (void 0 !== u) return u }
                            var l = s.default.find(o, (function(e) { return t.isPlatform(e) }));
                            if (l) { var d = this.satisfies(r[l]); if (void 0 !== d) return d }
                        }
                        if (a > 0) {
                            var f = Object.keys(i),
                                p = s.default.find(f, (function(e) { return t.isBrowser(e, !0) }));
                            if (void 0 !== p) return this.compareVersion(i[p])
                        }
                    }, t.isBrowser = function(e, t) {
                        void 0 === t && (t = !1);
                        var r = this.getBrowserName().toLowerCase(),
                            n = e.toLowerCase(),
                            i = s.default.getBrowserTypeByAlias(n);
                        return t && i && (n = i.toLowerCase()), n === r
                    }, t.compareVersion = function(e) {
                        var t = [0],
                            r = e,
                            n = !1,
                            i = this.getBrowserVersion();
                        if ("string" == typeof i) return ">" === e[0] || "<" === e[0] ? (r = e.substr(1), "=" === e[1] ? (n = !0, r = e.substr(2)) : t = [], ">" === e[0] ? t.push(1) : t.push(-1)) : "=" === e[0] ? r = e.substr(1) : "~" === e[0] && (n = !0, r = e.substr(1)), t.indexOf(s.default.compareVersions(i, r, n)) > -1
                    }, t.isOS = function(e) { return this.getOSName(!0) === String(e).toLowerCase() }, t.isPlatform = function(e) { return this.getPlatformType(!0) === String(e).toLowerCase() }, t.isEngine = function(e) { return this.getEngineName(!0) === String(e).toLowerCase() }, t.is = function(e) { return this.isBrowser(e) || this.isOS(e) || this.isPlatform(e) }, t.some = function(e) { var t = this; return void 0 === e && (e = []), e.some((function(e) { return t.is(e) })) }, e
                }();
                t.default = u, e.exports = t.default
            },
            92: function(e, t, r) {
                "use strict";
                t.__esModule = !0, t.default = void 0;
                var n, i = (n = r(17)) && n.__esModule ? n : { default: n },
                    a = /version\/(\d+(\.?_?\d+)+)/i,
                    o = [{
                        test: [/googlebot/i],
                        describe: function(e) {
                            var t = { name: "Googlebot" },
                                r = i.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, e) || i.default.getFirstMatch(a, e);
                            return r && (t.version = r), t
                        }
                    }, {
                        test: [/opera/i],
                        describe: function(e) {
                            var t = { name: "Opera" },
                                r = i.default.getFirstMatch(a, e) || i.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r), t
                        }
                    }, {
                        test: [/opr\/|opios/i],
                        describe: function(e) {
                            var t = { name: "Opera" },
                                r = i.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, e) || i.default.getFirstMatch(a, e);
                            return r && (t.version = r), t
                        }
                    }, {
                        test: [/SamsungBrowser/i],
                        describe: function(e) {
                            var t = { name: "Samsung Internet for Android" },
                                r = i.default.getFirstMatch(a, e) || i.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r), t
                        }
                    }, {
                        test: [/Whale/i],
                        describe: function(e) {
                            var t = { name: "NAVER Whale Browser" },
                                r = i.default.getFirstMatch(a, e) || i.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, e);
                            return r && (t.version = r), t
                        }
                    }, {
                        test: [/MZBrowser/i],
                        describe: function(e) {
                            var t = { name: "MZ Browser" },
                                r = i.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, e) || i.default.getFirstMatch(a, e);
                            return r && (t.version = r), t
                        }
                    }, {
                        test: [/focus/i],
                        describe: function(e) {
                            var t = { name: "Focus" },
                                r = i.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, e) || i.default.getFirstMatch(a, e);
                            return r && (t.version = r), t
                        }
                    }, {
                        test: [/swing/i],
                        describe: function(e) {
                            var t = { name: "Swing" },
                                r = i.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, e) || i.default.getFirstMatch(a, e);
                            return r && (t.version = r), t
                        }
                    }, {
                        test: [/coast/i],
                        describe: function(e) {
                            var t = { name: "Opera Coast" },
                                r = i.default.getFirstMatch(a, e) || i.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r), t
                        }
                    }, {
                        test: [/yabrowser/i],
                        describe: function(e) {
                            var t = { name: "Yandex Browser" },
                                r = i.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(a, e);
                            return r && (t.version = r), t
                        }
                    }, {
                        test: [/ucbrowser/i],
                        describe: function(e) {
                            var t = { name: "UC Browser" },
                                r = i.default.getFirstMatch(a, e) || i.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r), t
                        }
                    }, {
                        test: [/Maxthon|mxios/i],
                        describe: function(e) {
                            var t = { name: "Maxthon" },
                                r = i.default.getFirstMatch(a, e) || i.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r), t
                        }
                    }, {
                        test: [/epiphany/i],
                        describe: function(e) {
                            var t = { name: "Epiphany" },
                                r = i.default.getFirstMatch(a, e) || i.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r), t
                        }
                    }, {
                        test: [/puffin/i],
                        describe: function(e) {
                            var t = { name: "Puffin" },
                                r = i.default.getFirstMatch(a, e) || i.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r), t
                        }
                    }, {
                        test: [/sleipnir/i],
                        describe: function(e) {
                            var t = { name: "Sleipnir" },
                                r = i.default.getFirstMatch(a, e) || i.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r), t
                        }
                    }, {
                        test: [/k-meleon/i],
                        describe: function(e) {
                            var t = { name: "K-Meleon" },
                                r = i.default.getFirstMatch(a, e) || i.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r), t
                        }
                    }, {
                        test: [/micromessenger/i],
                        describe: function(e) {
                            var t = { name: "WeChat" },
                                r = i.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(a, e);
                            return r && (t.version = r), t
                        }
                    }, {
                        test: [/qqbrowser/i],
                        describe: function(e) {
                            var t = { name: /qqbrowserlite/i.test(e) ? "QQ Browser Lite" : "QQ Browser" },
                                r = i.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(a, e);
                            return r && (t.version = r), t
                        }
                    }, {
                        test: [/msie|trident/i],
                        describe: function(e) {
                            var t = { name: "Internet Explorer" },
                                r = i.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r), t
                        }
                    }, {
                        test: [/\sedg\//i],
                        describe: function(e) {
                            var t = { name: "Microsoft Edge" },
                                r = i.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r), t
                        }
                    }, {
                        test: [/edg([ea]|ios)/i],
                        describe: function(e) {
                            var t = { name: "Microsoft Edge" },
                                r = i.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r), t
                        }
                    }, {
                        test: [/vivaldi/i],
                        describe: function(e) {
                            var t = { name: "Vivaldi" },
                                r = i.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r), t
                        }
                    }, {
                        test: [/seamonkey/i],
                        describe: function(e) {
                            var t = { name: "SeaMonkey" },
                                r = i.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r), t
                        }
                    }, {
                        test: [/sailfish/i],
                        describe: function(e) {
                            var t = { name: "Sailfish" },
                                r = i.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, e);
                            return r && (t.version = r), t
                        }
                    }, {
                        test: [/silk/i],
                        describe: function(e) {
                            var t = { name: "Amazon Silk" },
                                r = i.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r), t
                        }
                    }, {
                        test: [/phantom/i],
                        describe: function(e) {
                            var t = { name: "PhantomJS" },
                                r = i.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r), t
                        }
                    }, {
                        test: [/slimerjs/i],
                        describe: function(e) {
                            var t = { name: "SlimerJS" },
                                r = i.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r), t
                        }
                    }, {
                        test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
                        describe: function(e) {
                            var t = { name: "BlackBerry" },
                                r = i.default.getFirstMatch(a, e) || i.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r), t
                        }
                    }, {
                        test: [/(web|hpw)[o0]s/i],
                        describe: function(e) {
                            var t = { name: "WebOS Browser" },
                                r = i.default.getFirstMatch(a, e) || i.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r), t
                        }
                    }, {
                        test: [/bada/i],
                        describe: function(e) {
                            var t = { name: "Bada" },
                                r = i.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r), t
                        }
                    }, {
                        test: [/tizen/i],
                        describe: function(e) {
                            var t = { name: "Tizen" },
                                r = i.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(a, e);
                            return r && (t.version = r), t
                        }
                    }, {
                        test: [/qupzilla/i],
                        describe: function(e) {
                            var t = { name: "QupZilla" },
                                r = i.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(a, e);
                            return r && (t.version = r), t
                        }
                    }, {
                        test: [/firefox|iceweasel|fxios/i],
                        describe: function(e) {
                            var t = { name: "Firefox" },
                                r = i.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r), t
                        }
                    }, {
                        test: [/electron/i],
                        describe: function(e) {
                            var t = { name: "Electron" },
                                r = i.default.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r), t
                        }
                    }, {
                        test: [/chromium/i],
                        describe: function(e) {
                            var t = { name: "Chromium" },
                                r = i.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(a, e);
                            return r && (t.version = r), t
                        }
                    }, {
                        test: [/chrome|crios|crmo/i],
                        describe: function(e) {
                            var t = { name: "Chrome" },
                                r = i.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r), t
                        }
                    }, {
                        test: [/GSA/i],
                        describe: function(e) {
                            var t = { name: "Google Search" },
                                r = i.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r), t
                        }
                    }, {
                        test: function(e) {
                            var t = !e.test(/like android/i),
                                r = e.test(/android/i);
                            return t && r
                        },
                        describe: function(e) {
                            var t = { name: "Android Browser" },
                                r = i.default.getFirstMatch(a, e);
                            return r && (t.version = r), t
                        }
                    }, {
                        test: [/playstation 4/i],
                        describe: function(e) {
                            var t = { name: "PlayStation 4" },
                                r = i.default.getFirstMatch(a, e);
                            return r && (t.version = r), t
                        }
                    }, {
                        test: [/safari|applewebkit/i],
                        describe: function(e) {
                            var t = { name: "Safari" },
                                r = i.default.getFirstMatch(a, e);
                            return r && (t.version = r), t
                        }
                    }, { test: [/.*/i], describe: function(e) { var t = -1 !== e.search("\\(") ? /^(.*)\/(.*)[ \t]\((.*)/ : /^(.*)\/(.*) /; return { name: i.default.getFirstMatch(t, e), version: i.default.getSecondMatch(t, e) } } }];
                t.default = o, e.exports = t.default
            },
            93: function(e, t, r) {
                "use strict";
                t.__esModule = !0, t.default = void 0;
                var n, i = (n = r(17)) && n.__esModule ? n : { default: n },
                    a = r(18),
                    o = [{ test: [/Roku\/DVP/], describe: function(e) { var t = i.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, e); return { name: a.OS_MAP.Roku, version: t } } }, { test: [/windows phone/i], describe: function(e) { var t = i.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, e); return { name: a.OS_MAP.WindowsPhone, version: t } } }, {
                        test: [/windows /i],
                        describe: function(e) {
                            var t = i.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, e),
                                r = i.default.getWindowsVersionName(t);
                            return { name: a.OS_MAP.Windows, version: t, versionName: r }
                        }
                    }, { test: [/Macintosh(.*?) FxiOS(.*?) Version\//], describe: function(e) { var t = i.default.getSecondMatch(/(Version\/)(\d[\d.]+)/, e); return { name: a.OS_MAP.iOS, version: t } } }, {
                        test: [/macintosh/i],
                        describe: function(e) {
                            var t = i.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, e).replace(/[_\s]/g, "."),
                                r = i.default.getMacOSVersionName(t),
                                n = { name: a.OS_MAP.MacOS, version: t };
                            return r && (n.versionName = r), n
                        }
                    }, { test: [/(ipod|iphone|ipad)/i], describe: function(e) { var t = i.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, e).replace(/[_\s]/g, "."); return { name: a.OS_MAP.iOS, version: t } } }, {
                        test: function(e) {
                            var t = !e.test(/like android/i),
                                r = e.test(/android/i);
                            return t && r
                        },
                        describe: function(e) {
                            var t = i.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, e),
                                r = i.default.getAndroidVersionName(t),
                                n = { name: a.OS_MAP.Android, version: t };
                            return r && (n.versionName = r), n
                        }
                    }, {
                        test: [/(web|hpw)[o0]s/i],
                        describe: function(e) {
                            var t = i.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, e),
                                r = { name: a.OS_MAP.WebOS };
                            return t && t.length && (r.version = t), r
                        }
                    }, { test: [/blackberry|\bbb\d+/i, /rim\stablet/i], describe: function(e) { var t = i.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, e) || i.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, e) || i.default.getFirstMatch(/\bbb(\d+)/i, e); return { name: a.OS_MAP.BlackBerry, version: t } } }, { test: [/bada/i], describe: function(e) { var t = i.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, e); return { name: a.OS_MAP.Bada, version: t } } }, { test: [/tizen/i], describe: function(e) { var t = i.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, e); return { name: a.OS_MAP.Tizen, version: t } } }, { test: [/linux/i], describe: function() { return { name: a.OS_MAP.Linux } } }, { test: [/CrOS/], describe: function() { return { name: a.OS_MAP.ChromeOS } } }, { test: [/PlayStation 4/], describe: function(e) { var t = i.default.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, e); return { name: a.OS_MAP.PlayStation4, version: t } } }];
                t.default = o, e.exports = t.default
            },
            94: function(e, t, r) {
                "use strict";
                t.__esModule = !0, t.default = void 0;
                var n, i = (n = r(17)) && n.__esModule ? n : { default: n },
                    a = r(18),
                    o = [{ test: [/googlebot/i], describe: function() { return { type: "bot", vendor: "Google" } } }, {
                        test: [/huawei/i],
                        describe: function(e) {
                            var t = i.default.getFirstMatch(/(can-l01)/i, e) && "Nova",
                                r = { type: a.PLATFORMS_MAP.mobile, vendor: "Huawei" };
                            return t && (r.model = t), r
                        }
                    }, { test: [/nexus\s*(?:7|8|9|10).*/i], describe: function() { return { type: a.PLATFORMS_MAP.tablet, vendor: "Nexus" } } }, { test: [/ipad/i], describe: function() { return { type: a.PLATFORMS_MAP.tablet, vendor: "Apple", model: "iPad" } } }, { test: [/Macintosh(.*?) FxiOS(.*?) Version\//], describe: function() { return { type: a.PLATFORMS_MAP.tablet, vendor: "Apple", model: "iPad" } } }, { test: [/kftt build/i], describe: function() { return { type: a.PLATFORMS_MAP.tablet, vendor: "Amazon", model: "Kindle Fire HD 7" } } }, { test: [/silk/i], describe: function() { return { type: a.PLATFORMS_MAP.tablet, vendor: "Amazon" } } }, { test: [/tablet(?! pc)/i], describe: function() { return { type: a.PLATFORMS_MAP.tablet } } }, {
                        test: function(e) {
                            var t = e.test(/ipod|iphone/i),
                                r = e.test(/like (ipod|iphone)/i);
                            return t && !r
                        },
                        describe: function(e) { var t = i.default.getFirstMatch(/(ipod|iphone)/i, e); return { type: a.PLATFORMS_MAP.mobile, vendor: "Apple", model: t } }
                    }, { test: [/nexus\s*[0-6].*/i, /galaxy nexus/i], describe: function() { return { type: a.PLATFORMS_MAP.mobile, vendor: "Nexus" } } }, { test: [/[^-]mobi/i], describe: function() { return { type: a.PLATFORMS_MAP.mobile } } }, { test: function(e) { return "blackberry" === e.getBrowserName(!0) }, describe: function() { return { type: a.PLATFORMS_MAP.mobile, vendor: "BlackBerry" } } }, { test: function(e) { return "bada" === e.getBrowserName(!0) }, describe: function() { return { type: a.PLATFORMS_MAP.mobile } } }, { test: function(e) { return "windows phone" === e.getBrowserName() }, describe: function() { return { type: a.PLATFORMS_MAP.mobile, vendor: "Microsoft" } } }, { test: function(e) { var t = Number(String(e.getOSVersion()).split(".")[0]); return "android" === e.getOSName(!0) && t >= 3 }, describe: function() { return { type: a.PLATFORMS_MAP.tablet } } }, { test: function(e) { return "android" === e.getOSName(!0) }, describe: function() { return { type: a.PLATFORMS_MAP.mobile } } }, { test: function(e) { return "macos" === e.getOSName(!0) }, describe: function() { return { type: a.PLATFORMS_MAP.desktop, vendor: "Apple" } } }, { test: function(e) { return "windows" === e.getOSName(!0) }, describe: function() { return { type: a.PLATFORMS_MAP.desktop } } }, { test: function(e) { return "linux" === e.getOSName(!0) }, describe: function() { return { type: a.PLATFORMS_MAP.desktop } } }, { test: function(e) { return "playstation 4" === e.getOSName(!0) }, describe: function() { return { type: a.PLATFORMS_MAP.tv } } }, { test: function(e) { return "roku" === e.getOSName(!0) }, describe: function() { return { type: a.PLATFORMS_MAP.tv } } }];
                t.default = o, e.exports = t.default
            },
            95: function(e, t, r) {
                "use strict";
                t.__esModule = !0, t.default = void 0;
                var n, i = (n = r(17)) && n.__esModule ? n : { default: n },
                    a = r(18),
                    o = [{ test: function(e) { return "microsoft edge" === e.getBrowserName(!0) }, describe: function(e) { if (/\sedg\//i.test(e)) return { name: a.ENGINE_MAP.Blink }; var t = i.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, e); return { name: a.ENGINE_MAP.EdgeHTML, version: t } } }, {
                        test: [/trident/i],
                        describe: function(e) {
                            var t = { name: a.ENGINE_MAP.Trident },
                                r = i.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r), t
                        }
                    }, {
                        test: function(e) { return e.test(/presto/i) },
                        describe: function(e) {
                            var t = { name: a.ENGINE_MAP.Presto },
                                r = i.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r), t
                        }
                    }, {
                        test: function(e) {
                            var t = e.test(/gecko/i),
                                r = e.test(/like gecko/i);
                            return t && !r
                        },
                        describe: function(e) {
                            var t = { name: a.ENGINE_MAP.Gecko },
                                r = i.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r), t
                        }
                    }, { test: [/(apple)?webkit\/537\.36/i], describe: function() { return { name: a.ENGINE_MAP.Blink } } }, {
                        test: [/(apple)?webkit/i],
                        describe: function(e) {
                            var t = { name: a.ENGINE_MAP.WebKit },
                                r = i.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r), t
                        }
                    }];
                t.default = o, e.exports = t.default
            }
        })
    }, function(e, t, r) {
        "use strict";
        (function(e) {
            r.d(t, "a", (function() { return g }));
            var n = r(4),
                i = r.n(n),
                a = r(5),
                o = r.n(a),
                s = r(9),
                c = r.n(s),
                u = r(10),
                l = r.n(u),
                d = r(6),
                f = r.n(d),
                p = r(25),
                h = r(11),
                v = r(3);

            function m(e) {
                var t = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0 } catch (e) { return !1 } }();
                return function() {
                    var r, n = f()(e);
                    if (t) {
                        var i = f()(this).constructor;
                        r = Reflect.construct(n, arguments, i)
                    } else r = n.apply(this, arguments);
                    return l()(this, r)
                }
            }
            e.callMachineToDailyJsEmitter = e.callMachineToDailyJsEmitter || new h.EventEmitter, e.dailyJsToCallMachineEmitter = e.dailyJsToCallMachineEmitter || new h.EventEmitter;
            var g = function(t) {
                c()(n, t);
                var r = m(n);

                function n() { var e; return i()(this, n), (e = r.call(this))._wrappedListeners = {}, e._messageCallbacks = {}, e }
                return o()(n, [{ key: "addListenerForMessagesFromCallMachine", value: function(t, r, n) { this._addListener(t, e.callMachineToDailyJsEmitter, n, "received call machine message") } }, { key: "addListenerForMessagesFromDailyJs", value: function(t, r, n) { this._addListener(t, e.dailyJsToCallMachineEmitter, n, "received daily-js message") } }, { key: "sendMessageToCallMachine", value: function(t, r) { this._sendMessage(t, e.dailyJsToCallMachineEmitter, "sending message to call machine", r) } }, { key: "sendMessageToDailyJs", value: function(t) { this._sendMessage(t, e.callMachineToDailyJsEmitter, "sending message to daily-js") } }, {
                    key: "removeListener",
                    value: function(t) {
                        var r = this._wrappedListeners[t];
                        r && (e.callMachineToDailyJsEmitter.removeListener("message", r), e.dailyJsToCallMachineEmitter.removeListener("message", r), delete this._wrappedListeners[t])
                    }
                }, {
                    key: "_addListener",
                    value: function(e, t, r, n) {
                        var i = this,
                            a = function(t) {
                                if (t.callbackStamp && i._messageCallbacks[t.callbackStamp]) {
                                    var n = t.callbackStamp;
                                    i._messageCallbacks[n].call(r, t), delete i._messageCallbacks[n]
                                }
                                e.call(r, t)
                            };
                        this._wrappedListeners[e] = a, t.addListener("message", a)
                    }
                }, {
                    key: "_sendMessage",
                    value: function(e, t, r, n) {
                        if (n) {
                            var i = Object(v.c)();
                            this._messageCallbacks[i] = n, e.callbackStamp = i
                        }
                        t.emit("message", e)
                    }
                }]), n
            }(p.a)
        }).call(this, r(37))
    }, function(e, t, r) {
        var n = r(6),
            i = r(26),
            a = r(67),
            o = r(68);

        function s(t) {
            var r = "function" == typeof Map ? new Map : void 0;
            return e.exports = s = function(e) {
                if (null === e || !a(e)) return e;
                if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
                if (void 0 !== r) {
                    if (r.has(e)) return r.get(e);
                    r.set(e, t)
                }

                function t() { return o(e, arguments, n(this).constructor) }
                return t.prototype = Object.create(e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), i(t, e)
            }, s(t)
        }
        e.exports = s
    }, function(e, t, r) {
        var n = r(155);
        e.exports = n.default
    }, function(e, t) {
        e.exports = function(e, t) {
            if (null == e) return {};
            var r, n, i = {},
                a = Object.keys(e);
            for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
            return i
        }
    }, function(e, t, r) {
        var n = function(e) {
            "use strict";
            var t = Object.prototype,
                r = t.hasOwnProperty,
                n = "function" == typeof Symbol ? Symbol : {},
                i = n.iterator || "@@iterator",
                a = n.asyncIterator || "@@asyncIterator",
                o = n.toStringTag || "@@toStringTag";

            function s(e, t, r) { return Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }), e[t] }
            try { s({}, "") } catch (e) { s = function(e, t, r) { return e[t] = r } }

            function c(e, t, r, n) {
                var i = t && t.prototype instanceof d ? t : d,
                    a = Object.create(i.prototype),
                    o = new M(n || []);
                return a._invoke = function(e, t, r) {
                    var n = "suspendedStart";
                    return function(i, a) {
                        if ("executing" === n) throw new Error("Generator is already running");
                        if ("completed" === n) { if ("throw" === i) throw a; return S() }
                        for (r.method = i, r.arg = a;;) {
                            var o = r.delegate;
                            if (o) { var s = _(o, r); if (s) { if (s === l) continue; return s } }
                            if ("next" === r.method) r.sent = r._sent = r.arg;
                            else if ("throw" === r.method) {
                                if ("suspendedStart" === n) throw n = "completed", r.arg;
                                r.dispatchException(r.arg)
                            } else "return" === r.method && r.abrupt("return", r.arg);
                            n = "executing";
                            var c = u(e, t, r);
                            if ("normal" === c.type) { if (n = r.done ? "completed" : "suspendedYield", c.arg === l) continue; return { value: c.arg, done: r.done } }
                            "throw" === c.type && (n = "completed", r.method = "throw", r.arg = c.arg)
                        }
                    }
                }(e, r, o), a
            }

            function u(e, t, r) { try { return { type: "normal", arg: e.call(t, r) } } catch (e) { return { type: "throw", arg: e } } }
            e.wrap = c;
            var l = {};

            function d() {}

            function f() {}

            function p() {}
            var h = {};
            h[i] = function() { return this };
            var v = Object.getPrototypeOf,
                m = v && v(v(A([])));
            m && m !== t && r.call(m, i) && (h = m);
            var g = p.prototype = d.prototype = Object.create(h);

            function y(e) {
                ["next", "throw", "return"].forEach((function(t) { s(e, t, (function(e) { return this._invoke(t, e) })) }))
            }

            function b(e, t) {
                var n;
                this._invoke = function(i, a) {
                    function o() {
                        return new t((function(n, o) {
                            ! function n(i, a, o, s) {
                                var c = u(e[i], e, a);
                                if ("throw" !== c.type) {
                                    var l = c.arg,
                                        d = l.value;
                                    return d && "object" == typeof d && r.call(d, "__await") ? t.resolve(d.__await).then((function(e) { n("next", e, o, s) }), (function(e) { n("throw", e, o, s) })) : t.resolve(d).then((function(e) { l.value = e, o(l) }), (function(e) { return n("throw", e, o, s) }))
                                }
                                s(c.arg)
                            }(i, a, n, o)
                        }))
                    }
                    return n = n ? n.then(o, o) : o()
                }
            }

            function _(e, t) {
                var r = e.iterator[t.method];
                if (void 0 === r) {
                    if (t.delegate = null, "throw" === t.method) {
                        if (e.iterator.return && (t.method = "return", t.arg = void 0, _(e, t), "throw" === t.method)) return l;
                        t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return l
                }
                var n = u(r, e.iterator, t.arg);
                if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, l;
                var i = n.arg;
                return i ? i.done ? (t[e.resultName] = i.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, l) : i : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, l)
            }

            function w(e) {
                var t = { tryLoc: e[0] };
                1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
            }

            function k(e) {
                var t = e.completion || {};
                t.type = "normal", delete t.arg, e.completion = t
            }

            function M(e) { this.tryEntries = [{ tryLoc: "root" }], e.forEach(w, this), this.reset(!0) }

            function A(e) {
                if (e) {
                    var t = e[i];
                    if (t) return t.call(e);
                    if ("function" == typeof e.next) return e;
                    if (!isNaN(e.length)) {
                        var n = -1,
                            a = function t() {
                                for (; ++n < e.length;)
                                    if (r.call(e, n)) return t.value = e[n], t.done = !1, t;
                                return t.value = void 0, t.done = !0, t
                            };
                        return a.next = a
                    }
                }
                return { next: S }
            }

            function S() { return { value: void 0, done: !0 } }
            return f.prototype = g.constructor = p, p.constructor = f, f.displayName = s(p, o, "GeneratorFunction"), e.isGeneratorFunction = function(e) { var t = "function" == typeof e && e.constructor; return !!t && (t === f || "GeneratorFunction" === (t.displayName || t.name)) }, e.mark = function(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, p) : (e.__proto__ = p, s(e, o, "GeneratorFunction")), e.prototype = Object.create(g), e }, e.awrap = function(e) { return { __await: e } }, y(b.prototype), b.prototype[a] = function() { return this }, e.AsyncIterator = b, e.async = function(t, r, n, i, a) { void 0 === a && (a = Promise); var o = new b(c(t, r, n, i), a); return e.isGeneratorFunction(r) ? o : o.next().then((function(e) { return e.done ? e.value : o.next() })) }, y(g), s(g, o, "Generator"), g[i] = function() { return this }, g.toString = function() { return "[object Generator]" }, e.keys = function(e) {
                var t = [];
                for (var r in e) t.push(r);
                return t.reverse(),
                    function r() { for (; t.length;) { var n = t.pop(); if (n in e) return r.value = n, r.done = !1, r } return r.done = !0, r }
            }, e.values = A, M.prototype = {
                constructor: M,
                reset: function(e) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(k), !e)
                        for (var t in this) "t" === t.charAt(0) && r.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                },
                stop: function() { this.done = !0; var e = this.tryEntries[0].completion; if ("throw" === e.type) throw e.arg; return this.rval },
                dispatchException: function(e) {
                    if (this.done) throw e;
                    var t = this;

                    function n(r, n) { return o.type = "throw", o.arg = e, t.next = r, n && (t.method = "next", t.arg = void 0), !!n }
                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                        var a = this.tryEntries[i],
                            o = a.completion;
                        if ("root" === a.tryLoc) return n("end");
                        if (a.tryLoc <= this.prev) {
                            var s = r.call(a, "catchLoc"),
                                c = r.call(a, "finallyLoc");
                            if (s && c) { if (this.prev < a.catchLoc) return n(a.catchLoc, !0); if (this.prev < a.finallyLoc) return n(a.finallyLoc) } else if (s) { if (this.prev < a.catchLoc) return n(a.catchLoc, !0) } else { if (!c) throw new Error("try statement without catch or finally"); if (this.prev < a.finallyLoc) return n(a.finallyLoc) }
                        }
                    }
                },
                abrupt: function(e, t) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) { var i = this.tryEntries[n]; if (i.tryLoc <= this.prev && r.call(i, "finallyLoc") && this.prev < i.finallyLoc) { var a = i; break } }
                    a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
                    var o = a ? a.completion : {};
                    return o.type = e, o.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, l) : this.complete(o)
                },
                complete: function(e, t) { if ("throw" === e.type) throw e.arg; return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), l },
                finish: function(e) { for (var t = this.tryEntries.length - 1; t >= 0; --t) { var r = this.tryEntries[t]; if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), k(r), l } },
                catch: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var r = this.tryEntries[t];
                        if (r.tryLoc === e) {
                            var n = r.completion;
                            if ("throw" === n.type) {
                                var i = n.arg;
                                k(r)
                            }
                            return i
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(e, t, r) { return this.delegate = { iterator: A(e), resultName: t, nextLoc: r }, "next" === this.method && (this.arg = void 0), l }
            }, e
        }(e.exports);
        try { regeneratorRuntime = n } catch (e) { Function("r", "regeneratorRuntime = r")(n) }
    }, function(e, t) { e.exports = function(e) { return -1 !== Function.toString.call(e).indexOf("[native code]") } }, function(e, t, r) {
        var n = r(26),
            i = r(69);

        function a(t, r, o) {
            return i() ? e.exports = a = Reflect.construct : e.exports = a = function(e, t, r) {
                var i = [null];
                i.push.apply(i, t);
                var a = new(Function.bind.apply(e, i));
                return r && n(a, r.prototype), a
            }, a.apply(null, arguments)
        }
        e.exports = a
    }, function(e, t) { e.exports = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0 } catch (e) { return !1 } } }, function(e, t, r) {
        var n = r(39);
        e.exports = function(e, t) { var r = []; return n(e, (function(e, n, i) { t(e, n, i) && r.push(e) })), r }
    }, function(e, t, r) {
        var n = r(72),
            i = r(27);
        e.exports = function(e, t) { return e && n(e, t, i) }
    }, function(e, t, r) {
        var n = r(73)();
        e.exports = n
    }, function(e, t) { e.exports = function(e) { return function(t, r, n) { for (var i = -1, a = Object(t), o = n(t), s = o.length; s--;) { var c = o[e ? s : ++i]; if (!1 === r(a[c], c, a)) break } return t } } }, function(e, t, r) {
        var n = r(75),
            i = r(40),
            a = r(7),
            o = r(42),
            s = r(44),
            c = r(45),
            u = Object.prototype.hasOwnProperty;
        e.exports = function(e, t) {
            var r = a(e),
                l = !r && i(e),
                d = !r && !l && o(e),
                f = !r && !l && !d && c(e),
                p = r || l || d || f,
                h = p ? n(e.length, String) : [],
                v = h.length;
            for (var m in e) !t && !u.call(e, m) || p && ("length" == m || d && ("offset" == m || "parent" == m) || f && ("buffer" == m || "byteLength" == m || "byteOffset" == m) || s(m, v)) || h.push(m);
            return h
        }
    }, function(e, t) { e.exports = function(e, t) { for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r); return n } }, function(e, t, r) {
        var n = r(15),
            i = r(16);
        e.exports = function(e) { return i(e) && "[object Arguments]" == n(e) }
    }, function(e, t, r) {
        var n = r(18),
            i = Object.prototype,
            a = i.hasOwnProperty,
            o = i.toString,
            s = n ? n.toStringTag : void 0;
        e.exports = function(e) {
            var t = a.call(e, s),
                r = e[s];
            try { e[s] = void 0; var n = !0 } catch (e) {}
            var i = o.call(e);
            return n && (t ? e[s] = r : delete e[s]), i
        }
    }, function(e, t) {
        var r = Object.prototype.toString;
        e.exports = function(e) { return r.call(e) }
    }, function(e, t) { e.exports = function() { return !1 } }, function(e, t, r) {
        var n = r(15),
            i = r(28),
            a = r(16),
            o = {};
        o["[object Float32Array]"] = o["[object Float64Array]"] = o["[object Int8Array]"] = o["[object Int16Array]"] = o["[object Int32Array]"] = o["[object Uint8Array]"] = o["[object Uint8ClampedArray]"] = o["[object Uint16Array]"] = o["[object Uint32Array]"] = !0, o["[object Arguments]"] = o["[object Array]"] = o["[object ArrayBuffer]"] = o["[object Boolean]"] = o["[object DataView]"] = o["[object Date]"] = o["[object Error]"] = o["[object Function]"] = o["[object Map]"] = o["[object Number]"] = o["[object Object]"] = o["[object RegExp]"] = o["[object Set]"] = o["[object String]"] = o["[object WeakMap]"] = !1, e.exports = function(e) { return a(e) && i(e.length) && !!o[n(e)] }
    }, function(e, t, r) {
        (function(e) {
            var n = r(41),
                i = t && !t.nodeType && t,
                a = i && "object" == typeof e && e && !e.nodeType && e,
                o = a && a.exports === i && n.process,
                s = function() { try { var e = a && a.require && a.require("util").types; return e || o && o.binding && o.binding("util") } catch (e) {} }();
            e.exports = s
        }).call(this, r(43)(e))
    }, function(e, t, r) {
        var n = r(83),
            i = r(84),
            a = Object.prototype.hasOwnProperty;
        e.exports = function(e) { if (!n(e)) return i(e); var t = []; for (var r in Object(e)) a.call(e, r) && "constructor" != r && t.push(r); return t }
    }, function(e, t) {
        var r = Object.prototype;
        e.exports = function(e) { var t = e && e.constructor; return e === ("function" == typeof t && t.prototype || r) }
    }, function(e, t, r) {
        var n = r(85)(Object.keys, Object);
        e.exports = n
    }, function(e, t) { e.exports = function(e, t) { return function(r) { return e(t(r)) } } }, function(e, t, r) {
        var n = r(29);
        e.exports = function(e, t) {
            return function(r, i) {
                if (null == r) return r;
                if (!n(r)) return e(r, i);
                for (var a = r.length, o = t ? a : -1, s = Object(r);
                    (t ? o-- : ++o < a) && !1 !== i(s[o], o, s););
                return r
            }
        }
    }, function(e, t, r) {
        var n = r(88),
            i = r(136),
            a = r(55);
        e.exports = function(e) { var t = i(e); return 1 == t.length && t[0][2] ? a(t[0][0], t[0][1]) : function(r) { return r === e || n(r, e, t) } }
    }, function(e, t, r) {
        var n = r(49),
            i = r(52);
        e.exports = function(e, t, r, a) {
            var o = r.length,
                s = o,
                c = !a;
            if (null == e) return !s;
            for (e = Object(e); o--;) { var u = r[o]; if (c && u[2] ? u[1] !== e[u[0]] : !(u[0] in e)) return !1 }
            for (; ++o < s;) {
                var l = (u = r[o])[0],
                    d = e[l],
                    f = u[1];
                if (c && u[2]) { if (void 0 === d && !(l in e)) return !1 } else { var p = new n; if (a) var h = a(d, f, l, e, t, p); if (!(void 0 === h ? i(f, d, 3, a, p) : h)) return !1 }
            }
            return !0
        }
    }, function(e, t) { e.exports = function() { this.__data__ = [], this.size = 0 } }, function(e, t, r) {
        var n = r(20),
            i = Array.prototype.splice;
        e.exports = function(e) {
            var t = this.__data__,
                r = n(t, e);
            return !(r < 0) && (r == t.length - 1 ? t.pop() : i.call(t, r, 1), --this.size, !0)
        }
    }, function(e, t, r) {
        var n = r(20);
        e.exports = function(e) {
            var t = this.__data__,
                r = n(t, e);
            return r < 0 ? void 0 : t[r][1]
        }
    }, function(e, t, r) {
        var n = r(20);
        e.exports = function(e) { return n(this.__data__, e) > -1 }
    }, function(e, t, r) {
        var n = r(20);
        e.exports = function(e, t) {
            var r = this.__data__,
                i = n(r, e);
            return i < 0 ? (++this.size, r.push([e, t])) : r[i][1] = t, this
        }
    }, function(e, t, r) {
        var n = r(19);
        e.exports = function() { this.__data__ = new n, this.size = 0 }
    }, function(e, t) {
        e.exports = function(e) {
            var t = this.__data__,
                r = t.delete(e);
            return this.size = t.size, r
        }
    }, function(e, t) { e.exports = function(e) { return this.__data__.get(e) } }, function(e, t) { e.exports = function(e) { return this.__data__.has(e) } }, function(e, t, r) {
        var n = r(19),
            i = r(31),
            a = r(32);
        e.exports = function(e, t) {
            var r = this.__data__;
            if (r instanceof n) {
                var o = r.__data__;
                if (!i || o.length < 199) return o.push([e, t]), this.size = ++r.size, this;
                r = this.__data__ = new a(o)
            }
            return r.set(e, t), this.size = r.size, this
        }
    }, function(e, t, r) {
        var n = r(47),
            i = r(100),
            a = r(30),
            o = r(51),
            s = /^\[object .+?Constructor\]$/,
            c = Function.prototype,
            u = Object.prototype,
            l = c.toString,
            d = u.hasOwnProperty,
            f = RegExp("^" + l.call(d).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
        e.exports = function(e) { return !(!a(e) || i(e)) && (n(e) ? f : s).test(o(e)) }
    }, function(e, t, r) {
        var n, i = r(101),
            a = (n = /[^.]+$/.exec(i && i.keys && i.keys.IE_PROTO || "")) ? "Symbol(src)_1." + n : "";
        e.exports = function(e) { return !!a && a in e }
    }, function(e, t, r) {
        var n = r(8)["__core-js_shared__"];
        e.exports = n
    }, function(e, t) { e.exports = function(e, t) { return null == e ? void 0 : e[t] } }, function(e, t, r) {
        var n = r(104),
            i = r(19),
            a = r(31);
        e.exports = function() { this.size = 0, this.__data__ = { hash: new n, map: new(a || i), string: new n } }
    }, function(e, t, r) {
        var n = r(105),
            i = r(106),
            a = r(107),
            o = r(108),
            s = r(109);

        function c(e) {
            var t = -1,
                r = null == e ? 0 : e.length;
            for (this.clear(); ++t < r;) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        c.prototype.clear = n, c.prototype.delete = i, c.prototype.get = a, c.prototype.has = o, c.prototype.set = s, e.exports = c
    }, function(e, t, r) {
        var n = r(21);
        e.exports = function() { this.__data__ = n ? n(null) : {}, this.size = 0 }
    }, function(e, t) { e.exports = function(e) { var t = this.has(e) && delete this.__data__[e]; return this.size -= t ? 1 : 0, t } }, function(e, t, r) {
        var n = r(21),
            i = Object.prototype.hasOwnProperty;
        e.exports = function(e) { var t = this.__data__; if (n) { var r = t[e]; return "__lodash_hash_undefined__" === r ? void 0 : r } return i.call(t, e) ? t[e] : void 0 }
    }, function(e, t, r) {
        var n = r(21),
            i = Object.prototype.hasOwnProperty;
        e.exports = function(e) { var t = this.__data__; return n ? void 0 !== t[e] : i.call(t, e) }
    }, function(e, t, r) {
        var n = r(21);
        e.exports = function(e, t) { var r = this.__data__; return this.size += this.has(e) ? 0 : 1, r[e] = n && void 0 === t ? "__lodash_hash_undefined__" : t, this }
    }, function(e, t, r) {
        var n = r(22);
        e.exports = function(e) { var t = n(this, e).delete(e); return this.size -= t ? 1 : 0, t }
    }, function(e, t) { e.exports = function(e) { var t = typeof e; return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e } }, function(e, t, r) {
        var n = r(22);
        e.exports = function(e) { return n(this, e).get(e) }
    }, function(e, t, r) {
        var n = r(22);
        e.exports = function(e) { return n(this, e).has(e) }
    }, function(e, t, r) {
        var n = r(22);
        e.exports = function(e, t) {
            var r = n(this, e),
                i = r.size;
            return r.set(e, t), this.size += r.size == i ? 0 : 1, this
        }
    }, function(e, t, r) {
        var n = r(49),
            i = r(53),
            a = r(121),
            o = r(125),
            s = r(131),
            c = r(7),
            u = r(42),
            l = r(45),
            d = "[object Object]",
            f = Object.prototype.hasOwnProperty;
        e.exports = function(e, t, r, p, h, v) {
            var m = c(e),
                g = c(t),
                y = m ? "[object Array]" : s(e),
                b = g ? "[object Array]" : s(t),
                _ = (y = "[object Arguments]" == y ? d : y) == d,
                w = (b = "[object Arguments]" == b ? d : b) == d,
                k = y == b;
            if (k && u(e)) {
                if (!u(t)) return !1;
                m = !0, _ = !1
            }
            if (k && !_) return v || (v = new n), m || l(e) ? i(e, t, r, p, h, v) : a(e, t, y, r, p, h, v);
            if (!(1 & r)) {
                var M = _ && f.call(e, "__wrapped__"),
                    A = w && f.call(t, "__wrapped__");
                if (M || A) {
                    var S = M ? e.value() : e,
                        T = A ? t.value() : t;
                    return v || (v = new n), h(S, T, r, p, v)
                }
            }
            return !!k && (v || (v = new n), o(e, t, r, p, h, v))
        }
    }, function(e, t, r) {
        var n = r(32),
            i = r(117),
            a = r(118);

        function o(e) {
            var t = -1,
                r = null == e ? 0 : e.length;
            for (this.__data__ = new n; ++t < r;) this.add(e[t])
        }
        o.prototype.add = o.prototype.push = i, o.prototype.has = a, e.exports = o
    }, function(e, t) { e.exports = function(e) { return this.__data__.set(e, "__lodash_hash_undefined__"), this } }, function(e, t) { e.exports = function(e) { return this.__data__.has(e) } }, function(e, t) {
        e.exports = function(e, t) {
            for (var r = -1, n = null == e ? 0 : e.length; ++r < n;)
                if (t(e[r], r, e)) return !0;
            return !1
        }
    }, function(e, t) { e.exports = function(e, t) { return e.has(t) } }, function(e, t, r) {
        var n = r(18),
            i = r(122),
            a = r(50),
            o = r(53),
            s = r(123),
            c = r(124),
            u = n ? n.prototype : void 0,
            l = u ? u.valueOf : void 0;
        e.exports = function(e, t, r, n, u, d, f) {
            switch (r) {
                case "[object DataView]":
                    if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                    e = e.buffer, t = t.buffer;
                case "[object ArrayBuffer]":
                    return !(e.byteLength != t.byteLength || !d(new i(e), new i(t)));
                case "[object Boolean]":
                case "[object Date]":
                case "[object Number]":
                    return a(+e, +t);
                case "[object Error]":
                    return e.name == t.name && e.message == t.message;
                case "[object RegExp]":
                case "[object String]":
                    return e == t + "";
                case "[object Map]":
                    var p = s;
                case "[object Set]":
                    var h = 1 & n;
                    if (p || (p = c), e.size != t.size && !h) return !1;
                    var v = f.get(e);
                    if (v) return v == t;
                    n |= 2, f.set(e, t);
                    var m = o(p(e), p(t), n, u, d, f);
                    return f.delete(e), m;
                case "[object Symbol]":
                    if (l) return l.call(e) == l.call(t)
            }
            return !1
        }
    }, function(e, t, r) {
        var n = r(8).Uint8Array;
        e.exports = n
    }, function(e, t) {
        e.exports = function(e) {
            var t = -1,
                r = Array(e.size);
            return e.forEach((function(e, n) { r[++t] = [n, e] })), r
        }
    }, function(e, t) {
        e.exports = function(e) {
            var t = -1,
                r = Array(e.size);
            return e.forEach((function(e) { r[++t] = e })), r
        }
    }, function(e, t, r) {
        var n = r(126),
            i = Object.prototype.hasOwnProperty;
        e.exports = function(e, t, r, a, o, s) {
            var c = 1 & r,
                u = n(e),
                l = u.length;
            if (l != n(t).length && !c) return !1;
            for (var d = l; d--;) { var f = u[d]; if (!(c ? f in t : i.call(t, f))) return !1 }
            var p = s.get(e);
            if (p && s.get(t)) return p == t;
            var h = !0;
            s.set(e, t), s.set(t, e);
            for (var v = c; ++d < l;) {
                var m = e[f = u[d]],
                    g = t[f];
                if (a) var y = c ? a(g, m, f, t, e, s) : a(m, g, f, e, t, s);
                if (!(void 0 === y ? m === g || o(m, g, r, a, s) : y)) { h = !1; break }
                v || (v = "constructor" == f)
            }
            if (h && !v) {
                var b = e.constructor,
                    _ = t.constructor;
                b != _ && "constructor" in e && "constructor" in t && !("function" == typeof b && b instanceof b && "function" == typeof _ && _ instanceof _) && (h = !1)
            }
            return s.delete(e), s.delete(t), h
        }
    }, function(e, t, r) {
        var n = r(127),
            i = r(129),
            a = r(27);
        e.exports = function(e) { return n(e, a, i) }
    }, function(e, t, r) {
        var n = r(128),
            i = r(7);
        e.exports = function(e, t, r) { var a = t(e); return i(e) ? a : n(a, r(e)) }
    }, function(e, t) { e.exports = function(e, t) { for (var r = -1, n = t.length, i = e.length; ++r < n;) e[i + r] = t[r]; return e } }, function(e, t, r) {
        var n = r(38),
            i = r(130),
            a = Object.prototype.propertyIsEnumerable,
            o = Object.getOwnPropertySymbols,
            s = o ? function(e) { return null == e ? [] : (e = Object(e), n(o(e), (function(t) { return a.call(e, t) }))) } : i;
        e.exports = s
    }, function(e, t) { e.exports = function() { return [] } }, function(e, t, r) {
        var n = r(132),
            i = r(31),
            a = r(133),
            o = r(134),
            s = r(135),
            c = r(15),
            u = r(51),
            l = u(n),
            d = u(i),
            f = u(a),
            p = u(o),
            h = u(s),
            v = c;
        (n && "[object DataView]" != v(new n(new ArrayBuffer(1))) || i && "[object Map]" != v(new i) || a && "[object Promise]" != v(a.resolve()) || o && "[object Set]" != v(new o) || s && "[object WeakMap]" != v(new s)) && (v = function(e) {
            var t = c(e),
                r = "[object Object]" == t ? e.constructor : void 0,
                n = r ? u(r) : "";
            if (n) switch (n) {
                case l:
                    return "[object DataView]";
                case d:
                    return "[object Map]";
                case f:
                    return "[object Promise]";
                case p:
                    return "[object Set]";
                case h:
                    return "[object WeakMap]"
            }
            return t
        }), e.exports = v
    }, function(e, t, r) {
        var n = r(13)(r(8), "DataView");
        e.exports = n
    }, function(e, t, r) {
        var n = r(13)(r(8), "Promise");
        e.exports = n
    }, function(e, t, r) {
        var n = r(13)(r(8), "Set");
        e.exports = n
    }, function(e, t, r) {
        var n = r(13)(r(8), "WeakMap");
        e.exports = n
    }, function(e, t, r) {
        var n = r(54),
            i = r(27);
        e.exports = function(e) {
            for (var t = i(e), r = t.length; r--;) {
                var a = t[r],
                    o = e[a];
                t[r] = [a, o, n(o)]
            }
            return t
        }
    }, function(e, t, r) {
        var n = r(52),
            i = r(138),
            a = r(144),
            o = r(33),
            s = r(54),
            c = r(55),
            u = r(24);
        e.exports = function(e, t) { return o(e) && s(t) ? c(u(e), t) : function(r) { var o = i(r, e); return void 0 === o && o === t ? a(r, e) : n(t, o, 3) } }
    }, function(e, t, r) {
        var n = r(56);
        e.exports = function(e, t, r) { var i = null == e ? void 0 : n(e, t); return void 0 === i ? r : i }
    }, function(e, t, r) {
        var n = r(140),
            i = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            a = /\\(\\)?/g,
            o = n((function(e) { var t = []; return 46 === e.charCodeAt(0) && t.push(""), e.replace(i, (function(e, r, n, i) { t.push(n ? i.replace(a, "$1") : r || e) })), t }));
        e.exports = o
    }, function(e, t, r) {
        var n = r(141);
        e.exports = function(e) {
            var t = n(e, (function(e) { return 500 === r.size && r.clear(), e })),
                r = t.cache;
            return t
        }
    }, function(e, t, r) {
        var n = r(32);

        function i(e, t) {
            if ("function" != typeof e || null != t && "function" != typeof t) throw new TypeError("Expected a function");
            var r = function() {
                var n = arguments,
                    i = t ? t.apply(this, n) : n[0],
                    a = r.cache;
                if (a.has(i)) return a.get(i);
                var o = e.apply(this, n);
                return r.cache = a.set(i, o) || a, o
            };
            return r.cache = new(i.Cache || n), r
        }
        i.Cache = n, e.exports = i
    }, function(e, t, r) {
        var n = r(143);
        e.exports = function(e) { return null == e ? "" : n(e) }
    }, function(e, t, r) {
        var n = r(18),
            i = r(58),
            a = r(7),
            o = r(23),
            s = n ? n.prototype : void 0,
            c = s ? s.toString : void 0;
        e.exports = function e(t) { if ("string" == typeof t) return t; if (a(t)) return i(t, e) + ""; if (o(t)) return c ? c.call(t) : ""; var r = t + ""; return "0" == r && 1 / t == -1 / 0 ? "-0" : r }
    }, function(e, t, r) {
        var n = r(145),
            i = r(146);
        e.exports = function(e, t) { return null != e && i(e, t, n) }
    }, function(e, t) { e.exports = function(e, t) { return null != e && t in Object(e) } }, function(e, t, r) {
        var n = r(57),
            i = r(40),
            a = r(7),
            o = r(44),
            s = r(28),
            c = r(24);
        e.exports = function(e, t, r) {
            for (var u = -1, l = (t = n(t, e)).length, d = !1; ++u < l;) {
                var f = c(t[u]);
                if (!(d = null != e && r(e, f))) break;
                e = e[f]
            }
            return d || ++u != l ? d : !!(l = null == e ? 0 : e.length) && s(l) && o(f, l) && (a(e) || i(e))
        }
    }, function(e, t, r) {
        var n = r(148),
            i = r(149),
            a = r(33),
            o = r(24);
        e.exports = function(e) { return a(e) ? n(o(e)) : i(e) }
    }, function(e, t) { e.exports = function(e) { return function(t) { return null == t ? void 0 : t[e] } } }, function(e, t, r) {
        var n = r(56);
        e.exports = function(e) { return function(t) { return n(t, e) } }
    }, function(e, t, r) {
        var n = r(58),
            i = r(48),
            a = r(151),
            o = r(152),
            s = r(46),
            c = r(153),
            u = r(59);
        e.exports = function(e, t, r) {
            var l = -1;
            t = n(t.length ? t : [u], s(i));
            var d = a(e, (function(e, r, i) { return { criteria: n(t, (function(t) { return t(e) })), index: ++l, value: e } }));
            return o(d, (function(e, t) { return c(e, t, r) }))
        }
    }, function(e, t, r) {
        var n = r(39),
            i = r(29);
        e.exports = function(e, t) {
            var r = -1,
                a = i(e) ? Array(e.length) : [];
            return n(e, (function(e, n, i) { a[++r] = t(e, n, i) })), a
        }
    }, function(e, t) { e.exports = function(e, t) { var r = e.length; for (e.sort(t); r--;) e[r] = e[r].value; return e } }, function(e, t, r) {
        var n = r(154);
        e.exports = function(e, t, r) { for (var i = -1, a = e.criteria, o = t.criteria, s = a.length, c = r.length; ++i < s;) { var u = n(a[i], o[i]); if (u) return i >= c ? u : u * ("desc" == r[i] ? -1 : 1) } return e.index - t.index }
    }, function(e, t, r) {
        var n = r(23);
        e.exports = function(e, t) {
            if (e !== t) {
                var r = void 0 !== e,
                    i = null === e,
                    a = e == e,
                    o = n(e),
                    s = void 0 !== t,
                    c = null === t,
                    u = t == t,
                    l = n(t);
                if (!c && !l && !o && e > t || o && s && u && !c && !l || i && s && u || !r && u || !a) return 1;
                if (!i && !o && !l && e < t || l && r && a && !i && !o || c && r && a || !s && a || !u) return -1
            }
            return 0
        }
    }, function(e, t, r) {
        "use strict";
        r.r(t);
        var n = r(60),
            i = r.n(n),
            a = r(12),
            o = r.n(a),
            s = r(0),
            c = r.n(s),
            u = r(1),
            l = r.n(u),
            d = r(4),
            f = r.n(d),
            p = r(17),
            h = r.n(p),
            v = r(5),
            m = r.n(v),
            g = r(9),
            y = r.n(g),
            b = r(10),
            _ = r.n(b),
            w = r(6),
            k = r.n(w),
            M = r(14),
            A = r.n(M),
            S = r(11),
            T = r.n(S),
            E = r(36),
            O = r(61),
            x = r.n(O),
            P = "new",
            C = "loading",
            j = "joining-meeting",
            L = "joined-meeting",
            I = "left-meeting",
            F = "error",
            N = r(2),
            R = r(25),
            D = r(3);

        function B(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), r.push.apply(r, n)
            }
            return r
        }

        function V(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? B(Object(r), !0).forEach((function(t) { A()(e, t, r[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : B(Object(r)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t)) }))
            }
            return e
        }

        function U(e) {
            var t = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0 } catch (e) { return !1 } }();
            return function() {
                var r, n = k()(e);
                if (t) {
                    var i = k()(this).constructor;
                    r = Reflect.construct(n, arguments, i)
                } else r = n.apply(this, arguments);
                return _()(this, r)
            }
        }
        var Y = function(e) {
                y()(r, e);
                var t = U(r);

                function r() { var e; return f()(this, r), (e = t.call(this))._wrappedListeners = {}, e._messageCallbacks = {}, e }
                return m()(r, [{
                    key: "addListenerForMessagesFromCallMachine",
                    value: function(e, t, r) {
                        var n = this,
                            i = function(i) {
                                if (i.data && "iframe-call-message" === i.data.what && (!i.data.callFrameId || i.data.callFrameId === t) && (!i.data.from || "module" !== i.data.from)) {
                                    var a = V({}, i.data);
                                    if (delete a.from, a.callbackStamp && n._messageCallbacks[a.callbackStamp]) {
                                        var o = a.callbackStamp;
                                        n._messageCallbacks[o].call(r, a), delete n._messageCallbacks[o]
                                    }
                                    delete a.what, delete a.callbackStamp, e.call(r, a)
                                }
                            };
                        this._wrappedListeners[e] = i, window.addEventListener("message", i)
                    }
                }, {
                    key: "addListenerForMessagesFromDailyJs",
                    value: function(e, t, r) {
                        var n = function(n) {
                            if (!(!n.data || "iframe-call-message" !== n.data.what || !n.data.action || n.data.from && "module" !== n.data.from || n.data.callFrameId && t && n.data.callFrameId !== t)) {
                                var i = n.data;
                                e.call(r, i)
                            }
                        };
                        this._wrappedListeners[e] = n, window.addEventListener("message", n)
                    }
                }, {
                    key: "sendMessageToCallMachine",
                    value: function(e, t, r, n) {
                        var i = V({}, e);
                        if (i.what = "iframe-call-message", i.from = "module", i.callFrameId = n, t) {
                            var a = Object(D.c)();
                            this._messageCallbacks[a] = t, i.callbackStamp = a
                        }(r ? r.contentWindow : window).postMessage(i, "*")
                    }
                }, { key: "sendMessageToDailyJs", value: function(e, t, r) { e.what = "iframe-call-message", e.callFrameId = r, e.from = "embedded", (t ? window : window.parent).postMessage(e, "*") } }, {
                    key: "removeListener",
                    value: function(e) {
                        var t = this._wrappedListeners[e];
                        t && (window.removeEventListener("message", t), delete this._wrappedListeners[e])
                    }
                }, {
                    key: "forwardPackagedMessageToCallMachine",
                    value: function(e, t, r) {
                        var n = V({}, e);
                        n.callFrameId = r, (t ? t.contentWindow : window).postMessage(n, "*")
                    }
                }, {
                    key: "addListenerForPackagedMessagesFromCallMachine",
                    value: function(e, t) {
                        var r = function(r) {
                            if (r.data && "iframe-call-message" === r.data.what && (!r.data.callFrameId || r.data.callFrameId === t) && (!r.data.from || "module" !== r.data.from)) {
                                var n = r.data;
                                e(n)
                            }
                        };
                        return this._wrappedListeners[e] = r, window.addEventListener("message", r), e
                    }
                }, {
                    key: "removeListenerForPackagedMessagesFromCallMachine",
                    value: function(e) {
                        var t = this._wrappedListeners[e];
                        t && (window.removeEventListener("message", t), delete this._wrappedListeners[e])
                    }
                }]), r
            }(R.a),
            G = r(62),
            W = r(63),
            q = r.n(W);

        function z(e) {
            var t = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0 } catch (e) { return !1 } }();
            return function() {
                var r, n = k()(e);
                if (t) {
                    var i = k()(this).constructor;
                    r = Reflect.construct(n, arguments, i)
                } else r = n.apply(this, arguments);
                return _()(this, r)
            }
        }
        var J = function() {
                function e() { f()(this, e), this._currentLoad = null }
                return m()(e, [{ key: "load", value: function(e, t, r, n) { if (this.loaded) return window._dailyCallObjectSetup(t), void r(!0);! function(e) { window._dailyConfig || (window._dailyConfig = {}), window._dailyConfig.callFrameId = e }(t), this._currentLoad && this._currentLoad.cancel(), this._currentLoad = new K(e, t, (function() { r(!1) }), n), this._currentLoad.start() } }, { key: "cancel", value: function() { this._currentLoad && this._currentLoad.cancel() } }, { key: "loaded", get: function() { return this._currentLoad && this._currentLoad.succeeded } }]), e
            }(),
            K = function() {
                function e(t, r, n, i) { f()(this, e), this._attemptsRemaining = 3, this._currentAttempt = null, this._meetingOrBaseUrl = t, this._callFrameId = r, this._successCallback = n, this._failureCallback = i }
                return m()(e, [{ key: "start", value: function() { var e = this; if (!this._currentAttempt) { this._currentAttempt = new Q(this._meetingOrBaseUrl, this._callFrameId, this._successCallback, (function t(r) { e._currentAttempt.cancelled || (e._attemptsRemaining--, e._failureCallback(r, e._attemptsRemaining > 0), e._attemptsRemaining <= 0 || setTimeout((function() { e._currentAttempt.cancelled || (e._currentAttempt = new Q(e._meetingOrBaseUrl, e._callFrameId, e._successCallback, t), e._currentAttempt.start()) }), 3e3)) })), this._currentAttempt.start() } } }, { key: "cancel", value: function() { this._currentAttempt && this._currentAttempt.cancel() } }, { key: "cancelled", get: function() { return this._currentAttempt && this._currentAttempt.cancelled } }, { key: "succeeded", get: function() { return this._currentAttempt && this._currentAttempt.succeeded } }]), e
            }(),
            H = function(e) {
                y()(r, e);
                var t = z(r);

                function r() { return f()(this, r), t.apply(this, arguments) }
                return r
            }(q()(Error)),
            Q = function() {
                function e(t, r, n, i) { f()(this, e), this.cancelled = !1, this.succeeded = !1, this._networkTimedOut = !1, this._networkTimeout = null, this._iosCache = "undefined" != typeof iOSCallObjectBundleCache && iOSCallObjectBundleCache, this._refetchHeaders = null, this._meetingOrBaseUrl = t, this._callFrameId = r, this._successCallback = n, this._failureCallback = i }
                var t, r, n, i;
                return m()(e, [{
                    key: "start",
                    value: (i = l()(c.a.mark((function e() {
                        var t;
                        return c.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = Object(D.a)(this._meetingOrBaseUrl), e.next = 3, this._tryLoadFromIOSCache(t);
                                case 3:
                                    !e.sent && this._loadFromNetwork(t);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function() { return i.apply(this, arguments) })
                }, { key: "cancel", value: function() { clearTimeout(this._networkTimeout), this.cancelled = !0 } }, {
                    key: "_tryLoadFromIOSCache",
                    value: (n = l()(c.a.mark((function e(t) {
                        var r;
                        return c.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (this._iosCache) { e.next = 2; break }
                                    return e.abrupt("return", !1);
                                case 2:
                                    return e.prev = 2, e.next = 5, this._iosCache.get(t);
                                case 5:
                                    if (r = e.sent, !this.cancelled) { e.next = 8; break }
                                    return e.abrupt("return", !0);
                                case 8:
                                    if (r) { e.next = 10; break }
                                    return e.abrupt("return", !1);
                                case 10:
                                    if (r.code) { e.next = 13; break }
                                    return this._refetchHeaders = r.refetchHeaders, e.abrupt("return", !1);
                                case 13:
                                    return Function('"use strict";' + r.code)(), this.succeeded = !0, this._successCallback(), e.abrupt("return", !0);
                                case 19:
                                    return e.prev = 19, e.t0 = e.catch(2), e.abrupt("return", !1);
                                case 22:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this, [
                            [2, 19]
                        ])
                    }))), function(e) { return n.apply(this, arguments) })
                }, {
                    key: "_loadFromNetwork",
                    value: (r = l()(c.a.mark((function e(t) {
                        var r, n, i, a = this;
                        return c.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return this._networkTimeout = setTimeout((function() { a._networkTimedOut = !0, a._failureCallback("Timed out (>".concat(2e4, " ms) when loading call object bundle ").concat(t)) }), 2e4), e.prev = 1, r = this._refetchHeaders ? { headers: this._refetchHeaders } : {}, e.next = 5, fetch(t, r);
                                case 5:
                                    if (n = e.sent, clearTimeout(this._networkTimeout), !this.cancelled && !this._networkTimedOut) { e.next = 9; break }
                                    throw new H;
                                case 9:
                                    return e.next = 11, this._getBundleCodeFromResponse(t, n);
                                case 11:
                                    if (i = e.sent, !this.cancelled) { e.next = 14; break }
                                    throw new H;
                                case 14:
                                    Function('"use strict";' + i)(), this._iosCache && this._iosCache.set(t, i, n.headers), this.succeeded = !0, this._successCallback(), e.next = 26;
                                    break;
                                case 20:
                                    if (e.prev = 20, e.t0 = e.catch(1), clearTimeout(this._networkTimeout), !(e.t0 instanceof H || this.cancelled || this._networkTimedOut)) { e.next = 25; break }
                                    return e.abrupt("return");
                                case 25:
                                    this._failureCallback("Failed to load call object bundle ".concat(t, ": ").concat(e.t0));
                                case 26:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this, [
                            [1, 20]
                        ])
                    }))), function(e) { return r.apply(this, arguments) })
                }, {
                    key: "_getBundleCodeFromResponse",
                    value: (t = l()(c.a.mark((function e(t, r) {
                        var n;
                        return c.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!r.ok) { e.next = 4; break }
                                    return e.next = 3, r.text();
                                case 3:
                                    return e.abrupt("return", e.sent);
                                case 4:
                                    if (!this._iosCache || 304 !== r.status) { e.next = 9; break }
                                    return e.next = 7, this._iosCache.renew(t, r.headers);
                                case 7:
                                    return n = e.sent, e.abrupt("return", n.code);
                                case 9:
                                    throw new Error("Received ".concat(r.status, " response"));
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function(e, r) { return t.apply(this, arguments) })
                }]), e
            }(),
            $ = r(34),
            Z = r.n($),
            X = r(35),
            ee = r.n(X),
            te = function(e, t, r) { return ie(e.local, t, r) },
            re = function(e, t, r) { return e.local.streams && e.local.streams[t] && e.local.streams[t].stream && e.local.streams[t].stream["get".concat("video" === r ? "Video" : "Audio", "Tracks")]()[0] },
            ne = function(e, t, r, n) { var i = ae(e, t, r, n); return i && i.pendingTrack },
            ie = function(e, t, r) { if (!e) return !1; var n = e.public.subscribedTracks; return n && n[t] ? !!n[t][r] : !n || !!n.ALL },
            ae = function(e, t, r, n) { var i = ee()(Z()(e.streams, (function(e) { return e.participantId === t && e.type === r && e.pendingTrack && e.pendingTrack.kind === n })), "starttime", "desc"); return i && i[0] },
            oe = function(e, t) { var r = e.local.public.customTracks; if (r && r[t]) return r[t].track },
            se = function(e, t, r, n) {
                var i = "soup-" + r,
                    a = ee()(Z()(e.streams, (function(e) { return e.participantId === t && e.streamId === i && e.pendingTrack && e.pendingTrack.kind === n })), "starttime", "desc");
                return a && a[0] && a[0].pendingTrack
            };

        function ce(e) {
            for (var t = store.getState(), r = 0, n = ["cam", "screen"]; r < n.length; r++)
                for (var i = n[r], a = 0, o = ["video", "audio"]; a < o.length; a++) {
                    var s = o[a],
                        c = "cam" === i ? s : "screen".concat(s.charAt(0).toUpperCase() + s.slice(1)),
                        u = e.tracks[c];
                    if (u) { var l = e.local ? re(t, i, s) : ne(t, e.session_id, i, s); "playable" === u.state && (u.track = l), u.persistentTrack = l }
                }
        }

        function ue(e) {
            try {
                var t = store.getState();
                for (var r in e.tracks)
                    if (!le(r)) {
                        var n = e.tracks[r].kind;
                        if (n) {
                            var i = e.local ? oe(t, r) : se(t, e.session_id, r, n),
                                a = e.tracks[r];
                            i && a && "playable" === a.state && (e.tracks[r].track = i)
                        } else console.error("unknown type for custom track")
                    }
            } catch (e) { console.error(e) }
        }

        function le(e) { return ["video", "audio", "screenVideo", "screenAudio"].includes(e) }

        function de(e, t) {
            var r = store.getState();
            if (e.local) {
                if (e.audio) try { e.audioTrack = r.local.streams.cam.stream.getAudioTracks()[0], e.audioTrack || (e.audio = !1) } catch (e) {}
                if (e.video) try { e.videoTrack = r.local.streams.cam.stream.getVideoTracks()[0], e.videoTrack || (e.video = !1) } catch (e) {}
                if (e.screen) try { e.screenVideoTrack = r.local.streams.screen.stream.getVideoTracks()[0], e.screenAudioTrack = r.local.streams.screen.stream.getAudioTracks()[0], e.screenVideoTrack || e.screenAudioTrack || (e.screen = !1) } catch (e) {}
            } else {
                var n = !0;
                try {
                    var i = r.participants[e.session_id];
                    i && i.public && i.public.rtcType && "peer-to-peer" === i.public.rtcType.impl && i.private && !["connected", "completed"].includes(i.private.peeringState) && (n = !1)
                } catch (e) { console.error(e) }
                if (!n) return e.audio = !1, e.audioTrack = !1, e.video = !1, e.videoTrack = !1, e.screen = !1, void(e.screenTrack = !1);
                try {
                    r.streams;
                    if (e.audio && te(r, e.session_id, "cam-audio")) {
                        var a = ne(r, e.session_id, "cam", "audio");
                        a && (t && t.audioTrack && t.audioTrack.id === a.id ? e.audioTrack = a : a.muted || (e.audioTrack = a)), e.audioTrack || (e.audio = !1)
                    }
                    if (e.video && te(r, e.session_id, "cam-video")) {
                        var o = ne(r, e.session_id, "cam", "video");
                        o && (t && t.videoTrack && t.videoTrack.id === o.id ? e.videoTrack = o : o.muted || (e.videoTrack = o)), e.videoTrack || (e.video = !1)
                    }
                    if (e.screen && te(r, e.session_id, "screen-audio")) {
                        var s = ne(r, e.session_id, "screen", "audio");
                        s && (t && t.screenAudioTrack && t.screenAudioTrack.id === s.id ? e.screenAudioTrack = s : s.muted || (e.screenAudioTrack = s))
                    }
                    if (e.screen && te(r, e.session_id, "screen-video")) {
                        var c = ne(r, e.session_id, "screen", "video");
                        c && (t && t.screenVideoTrack && t.screenVideoTrack.id === c.id ? e.screenVideoTrack = c : c.muted || (e.screenVideoTrack = c))
                    }
                    e.screenVideoTrack || e.screenAudioTrack || (e.screen = !1)
                } catch (e) { console.error("unexpected error matching up tracks", e) }
            }
        }

        function fe(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), r.push.apply(r, n)
            }
            return r
        }

        function pe(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? fe(Object(r), !0).forEach((function(t) { A()(e, t, r[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : fe(Object(r)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t)) }))
            }
            return e
        }

        function he(e) {
            var t = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0 } catch (e) { return !1 } }();
            return function() {
                var r, n = k()(e);
                if (t) {
                    var i = k()(this).constructor;
                    r = Reflect.construct(n, arguments, i)
                } else r = n.apply(this, arguments);
                return _()(this, r)
            }
        }
        r.d(t, "default", (function() { return _e })), r.d(t, "DAILY_STATE_NEW", (function() { return P })), r.d(t, "DAILY_STATE_JOINING", (function() { return j })), r.d(t, "DAILY_STATE_JOINED", (function() { return L })), r.d(t, "DAILY_STATE_LEFT", (function() { return I })), r.d(t, "DAILY_STATE_ERROR", (function() { return F })), r.d(t, "DAILY_TRACK_STATE_BLOCKED", (function() { return "blocked" })), r.d(t, "DAILY_TRACK_STATE_OFF", (function() { return "off" })), r.d(t, "DAILY_TRACK_STATE_SENDABLE", (function() { return "sendable" })), r.d(t, "DAILY_TRACK_STATE_LOADING", (function() { return "loading" })), r.d(t, "DAILY_TRACK_STATE_INTERRUPTED", (function() { return "interrupted" })), r.d(t, "DAILY_TRACK_STATE_PLAYABLE", (function() { return "playable" })), r.d(t, "DAILY_ACCESS_UNKNOWN", (function() { return "unknown" })), r.d(t, "DAILY_ACCESS_LEVEL_FULL", (function() { return "full" })), r.d(t, "DAILY_ACCESS_LEVEL_LOBBY", (function() { return "lobby" })), r.d(t, "DAILY_ACCESS_LEVEL_NONE", (function() { return "none" })), r.d(t, "DAILY_FATAL_ERROR_EJECTED", (function() { return "ejected" })), r.d(t, "DAILY_FATAL_ERROR_NBF_ROOM", (function() { return "nbf-room" })), r.d(t, "DAILY_FATAL_ERROR_NBF_TOKEN", (function() { return "nbf-token" })), r.d(t, "DAILY_FATAL_ERROR_EXP_ROOM", (function() { return "exp-room" })), r.d(t, "DAILY_FATAL_ERROR_EXP_TOKEN", (function() { return "exp-token" })), r.d(t, "DAILY_CAMERA_ERROR_CAM_IN_USE", (function() { return "cam-in-use" })), r.d(t, "DAILY_CAMERA_ERROR_MIC_IN_USE", (function() { return "mic-in-use" })), r.d(t, "DAILY_CAMERA_ERROR_CAM_AND_MIC_IN_USE", (function() { return "cam-mic-in-use" })), r.d(t, "DAILY_EVENT_LOADING", (function() { return "loading" })), r.d(t, "DAILY_EVENT_LOADED", (function() { return "loaded" })), r.d(t, "DAILY_EVENT_LOAD_ATTEMPT_FAILED", (function() { return "load-attempt-failed" })), r.d(t, "DAILY_EVENT_STARTED_CAMERA", (function() { return "started-camera" })), r.d(t, "DAILY_EVENT_CAMERA_ERROR", (function() { return "camera-error" })), r.d(t, "DAILY_EVENT_JOINING_MEETING", (function() { return "joining-meeting" })), r.d(t, "DAILY_EVENT_JOINED_MEETING", (function() { return "joined-meeting" })), r.d(t, "DAILY_EVENT_LEFT_MEETING", (function() { return "left-meeting" })), r.d(t, "DAILY_EVENT_PARTICIPANT_JOINED", (function() { return "participant-joined" })), r.d(t, "DAILY_EVENT_PARTICIPANT_UPDATED", (function() { return "participant-updated" })), r.d(t, "DAILY_EVENT_PARTICIPANT_LEFT", (function() { return "participant-left" })), r.d(t, "DAILY_EVENT_TRACK_STARTED", (function() { return "track-started" })), r.d(t, "DAILY_EVENT_TRACK_STOPPED", (function() { return "track-stopped" })), r.d(t, "DAILY_EVENT_RECORDING_STARTED", (function() { return "recording-started" })), r.d(t, "DAILY_EVENT_RECORDING_STOPPED", (function() { return "recording-stopped" })), r.d(t, "DAILY_EVENT_RECORDING_STATS", (function() { return "recording-stats" })), r.d(t, "DAILY_EVENT_RECORDING_ERROR", (function() { return "recording-error" })), r.d(t, "DAILY_EVENT_RECORDING_UPLOAD_COMPLETED", (function() { return "recording-upload-completed" })), r.d(t, "DAILY_EVENT_ERROR", (function() { return "error" })), r.d(t, "DAILY_EVENT_APP_MSG", (function() { return "app-message" })), r.d(t, "DAILY_EVENT_INPUT_EVENT", (function() { return "input-event" })), r.d(t, "DAILY_EVENT_LOCAL_SCREEN_SHARE_STARTED", (function() { return "local-screen-share-started" })), r.d(t, "DAILY_EVENT_LOCAL_SCREEN_SHARE_STOPPED", (function() { return "local-screen-share-stopped" })), r.d(t, "DAILY_EVENT_NETWORK_QUALITY_CHANGE", (function() { return "network-quality-change" })), r.d(t, "DAILY_EVENT_ACTIVE_SPEAKER_CHANGE", (function() { return "active-speaker-change" })), r.d(t, "DAILY_EVENT_ACTIVE_SPEAKER_MODE_CHANGE", (function() { return "active-speaker-mode-change" })), r.d(t, "DAILY_EVENT_FULLSCREEN", (function() { return "fullscreen" })), r.d(t, "DAILY_EVENT_EXIT_FULLSCREEN", (function() { return "exited-fullscreen" })), r.d(t, "DAILY_EVENT_NETWORK_CONNECTION", (function() { return "network-connection" })), r.d(t, "DAILY_EVENT_RECORDING_DATA", (function() { return "recording-data" })), r.d(t, "DAILY_EVENT_LIVE_STREAMING_STARTED", (function() { return "live-streaming-started" })), r.d(t, "DAILY_EVENT_LIVE_STREAMING_STOPPED", (function() { return "live-streaming-stopped" })), r.d(t, "DAILY_EVENT_LIVE_STREAMING_ERROR", (function() { return "live-streaming-error" })), r.d(t, "DAILY_EVENT_LANG_UPDATED", (function() { return "lang-updated" })), r.d(t, "DAILY_EVENT_ACCESS_STATE_UPDATED", (function() { return "access-state-updated" })), r.d(t, "DAILY_EVENT_MEETING_SESSION_UPDATED", (function() { return "meeting-session-updated" })), r.d(t, "DAILY_EVENT_WAITING_PARTICIPANT_ADDED", (function() { return "waiting-participant-added" })), r.d(t, "DAILY_EVENT_WAITING_PARTICIPANT_REMOVED", (function() { return "waiting-participant-removed" })), r.d(t, "DAILY_EVENT_WAITING_PARTICIPANT_UPDATED", (function() { return "waiting-participant-updated" }));
        var ve = "video",
            me = "voice",
            ge = { androidInCallNotification: { title: "string", subtitle: "string", iconName: "string", disableForCustomOverride: "boolean" }, disableAutoDeviceManagement: { audio: "boolean", video: "boolean" } },
            ye = {
                url: { validate: function(e) { return "string" == typeof e }, help: "url should be a string" },
                baseUrl: { validate: function(e) { return "string" == typeof e }, help: "baseUrl should be a string" },
                token: { validate: function(e) { return "string" == typeof e }, help: "token should be a string", queryString: "t" },
                dailyConfig: { validate: function(e) { return window._dailyConfig || (window._dailyConfig = {}), window._dailyConfig.experimentalGetUserMediaConstraintsModify = e.experimentalGetUserMediaConstraintsModify, delete e.experimentalGetUserMediaConstraintsModify, !0 } },
                reactNativeConfig: {
                    validate: function(e) {
                        return function e(t, r) {
                            if (void 0 === r) return !1;
                            switch (o()(r)) {
                                case "string":
                                    return o()(t) === r;
                                case "object":
                                    if ("object" !== o()(t)) return !1;
                                    for (var n in t)
                                        if (!e(t[n], r[n])) return !1;
                                    return !0;
                                default:
                                    return !1
                            }
                        }(e, ge)
                    },
                    help: "reactNativeConfig should look like ".concat(JSON.stringify(ge), ", all fields optional")
                },
                lang: { validate: function(e) { return ["de", "en-us", "en", "es", "fi", "fr", "it", "jp", "ka", "nl", "no", "pl", "pt", "sv", "tr", "user"].includes(e) }, help: "language not supported. Options are: de, en-us, en, es, fi, fr, it, jp, ka, nl, no, pl, pt, sv, tr, user" },
                userName: !0,
                showLeaveButton: !0,
                showLocalVideo: !0,
                showParticipantsBar: !0,
                showFullscreenButton: !0,
                iframeStyle: !0,
                customLayout: !0,
                cssFile: !0,
                cssText: !0,
                bodyClass: !0,
                videoSource: { validate: function(e, t) { return t._preloadCache.videoDeviceId = e, !0 } },
                audioSource: { validate: function(e, t) { return t._preloadCache.audioDeviceId = e, !0 } },
                subscribeToTracksAutomatically: { validate: function(e, t) { return t._preloadCache.subscribeToTracksAutomatically = e, !0 } },
                layout: { validate: function(e) { return "custom-v1" === e || "browser" === e || "none" === e }, help: 'layout may only be set to "custom-v1"', queryString: "layout" },
                emb: { queryString: "emb" },
                embHref: { queryString: "embHref" },
                dailyJsVersion: { queryString: "dailyJsVersion" }
            },
            be = {
                styles: {
                    validate: function(e) {
                        for (var t in e)
                            if ("cam" !== t && "screen" !== t) return !1;
                        if (e.cam)
                            for (var t in e.cam)
                                if ("div" !== t && "video" !== t) return !1;
                        if (e.screen)
                            for (var t in e.screen)
                                if ("div" !== t && "video" !== t) return !1;
                        return !0
                    },
                    help: "styles format should be a subset of: { cam: {div: {}, video: {}}, screen: {div: {}, video: {}} }"
                },
                setSubscribedTracks: {
                    validate: function(e, t, r) {
                        if (t._preloadCache.subscribeToTracksAutomatically) return !1;
                        var n = [!0, !1];
                        if (!Object(N.c)() && n.push("avatar"), n.includes(e)) return !0;
                        for (var i in e)
                            if ("audio" !== i && "video" !== i && "screenVideo" !== i && "screenAudio" !== i) return !1;
                        return !0
                    },
                    help: "setSubscribedTracks cannot be used when setSubscribeToTracksAutomatically is enabled, and should be of the form: " + "true".concat(Object(N.c)() ? "" : " | 'avatar'", " | false | { [audio: true|false], [video: true|false], [screenVideo: true|false] }")
                },
                setAudio: !0,
                setVideo: !0,
                eject: !0
            },
            _e = function(e) {
                y()(R, e);
                var t, r, n, a, s, u, d, p, v, g, b, _, w, k, M, S, O = he(R);

                function R(e) {
                    var t, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (f()(this, R), t = O.call(this), A()(h()(t), "handleNativeAppActiveStateChange", (function(e) { t.disableReactNativeAutoDeviceManagement("video") || (e ? t.camUnmutedBeforeLosingNativeActiveState && t.setLocalVideo(!0) : (t.camUnmutedBeforeLosingNativeActiveState = t.localVideo(), t.camUnmutedBeforeLosingNativeActiveState && t.setLocalVideo(!1))) })), A()(h()(t), "handleNativeAudioFocusChange", (function(e) { t.disableReactNativeAutoDeviceManagement("audio") || (t._hasNativeAudioFocus = e, t.toggleParticipantAudioBasedOnNativeAudioFocus(), t._hasNativeAudioFocus ? t.micUnmutedBeforeLosingNativeAudioFocus && t.setLocalAudio(!0) : (t.micUnmutedBeforeLosingNativeAudioFocus = t.localAudio(), t.setLocalAudio(!1))) })), r.dailyJsVersion = "0.14.0", t._iframe = e, t._callObjectMode = "none" === r.layout && !t._iframe, t._preloadCache = { subscribeToTracksAutomatically: !0, audioDeviceId: null, videoDeviceId: null, outputDeviceId: null }, t._callObjectMode && (window._dailyPreloadCache = t._preloadCache), void 0 !== r.showLocalVideo ? t._callObjectMode ? console.error("showLocalVideo is not available in callObject mode") : t._showLocalVideo = !!r.showLocalVideo : t._showLocalVideo = !0, void 0 !== r.showParticipantsBar ? t._callObjectMode ? console.error("showParticipantsBar is not available in callObject mode") : t._showParticipantsBar = !!r.showParticipantsBar : t._showParticipantsBar = !0, t.validateProperties(r), t.properties = pe({}, r), t._callObjectLoader = t._callObjectMode ? new J : null, t._meetingState = P, t._isPreparingToJoin = !1, t._accessState = { access: "unknown" }, t._nativeInCallAudioMode = ve, t._participants = {}, t._waitingParticipants = {}, t._inputEventsOn = {}, t._network = { threshold: "good", quality: 100 }, t._activeSpeaker = {}, t._activeSpeakerMode = !1, t._callFrameId = Object(D.c)(), t._messageChannel = Object(N.c)() ? new G.a : new Y, t._iframe && (t._iframe.requestFullscreen ? t._iframe.addEventListener("fullscreenchange", (function(e) { document.fullscreenElement === t._iframe ? (t.emit("fullscreen", { action: "fullscreen" }), t.sendMessageToCallMachine({ action: "fullscreen" })) : (t.emit("exited-fullscreen", { action: "exited-fullscreen" }), t.sendMessageToCallMachine({ action: "exited-fullscreen" })) })) : t._iframe.webkitRequestFullscreen && t._iframe.addEventListener("webkitfullscreenchange", (function(e) { document.webkitFullscreenElement === t._iframe ? (t.emit("fullscreen", { action: "fullscreen" }), t.sendMessageToCallMachine({ action: "fullscreen" })) : (t.emit("exited-fullscreen", { action: "exited-fullscreen" }), t.sendMessageToCallMachine({ action: "exited-fullscreen" })) }))), Object(N.c)()) {
                        var n = t.nativeUtils();
                        n.addAudioFocusChangeListener && n.removeAudioFocusChangeListener && n.addAppActiveStateChangeListener && n.removeAppActiveStateChangeListener || console.warn("expected (add|remove)(AudioFocus|AppActiveState)ChangeListener to be available in React Native"), t._hasNativeAudioFocus = !0, n.addAudioFocusChangeListener(t.handleNativeAudioFocusChange), n.addAppActiveStateChangeListener(t.handleNativeAppActiveStateChange)
                    }
                    return t._messageChannel.addListenerForMessagesFromCallMachine(t.handleMessageFromCallMachine, t._callFrameId, h()(t)), t
                }
                return m()(R, null, [{ key: "supportedBrowser", value: function() { if (Object(N.c)()) return { supported: !0, mobile: !0, name: "React Native", version: null, supportsScreenShare: !1, supportsSfu: !0 }; var e = x.a.getParser(Object(N.b)()); return { supported: !!Object(N.a)(), mobile: "mobile" === e.getPlatformType(), name: e.getBrowserName(), version: e.getBrowserVersion(), supportsScreenShare: !!Object(N.d)(), supportsSfu: !!Object(N.e)() } } }, { key: "version", value: function() { return "0.14.0" } }, { key: "createCallObject", value: function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; return e.layout = "none", new R(null, e) } }, { key: "wrap", value: function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; if (ke(), !e || !e.contentWindow || "string" != typeof e.src) throw new Error("DailyIframe::Wrap needs an iframe-like first argument"); return t.layout || (t.customLayout ? t.layout = "custom-v1" : t.layout = "browser"), new R(e, t) } }, {
                    key: "createFrame",
                    value: function(e, t) {
                        var r, n;
                        ke(), e && t ? (r = e, n = t) : e && e.append ? (r = e, n = {}) : (r = document.getElementById("screen"), n = e || {});
                        var i = n.iframeStyle;
                        i || (i = r === document.getElementById("screen") ? { position: "fixed", border: "1px solid black", backgroundColor: "white", width: "375px", height: "450px", right: "1em", bottom: "1em" } : { border: 0, width: "100%", height: "100%" });
                        var a = document.createElement("iframe");
                        window.navigator && window.navigator.userAgent.match(/Chrome\/61\./) ? a.allow = "microphone, camera" : a.allow = "microphone; camera; autoplay; display-capture", a.style.visibility = "hidden", r.appendChild(a), a.style.visibility = null, Object.keys(i).forEach((function(e) { return a.style[e] = i[e] })), n.layout || (n.customLayout ? n.layout = "custom-v1" : n.layout = "browser");
                        try { return new R(a, n) } catch (e) { throw r.removeChild(a), e }
                    }
                }, {
                    key: "createTransparentFrame",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        ke();
                        var t = document.createElement("iframe");
                        return t.allow = "microphone; camera; autoplay", t.style.cssText = "\n      position: fixed;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      border: 0;\n      pointer-events: none;\n    ", document.getElementById("screen").appendChild(t), e.layout || (e.layout = "custom-v1"), R.wrap(t, e)
                    }
                }]), m()(R, [{
                    key: "destroy",
                    value: (S = l()(c.a.mark((function e() {
                        var t, r, n;
                        return c.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (e.prev = 0, ![L, C].includes(this._meetingState)) { e.next = 4; break }
                                    return e.next = 4, this.leave();
                                case 4:
                                    e.next = 8;
                                    break;
                                case 6:
                                    e.prev = 6, e.t0 = e.catch(0);
                                case 8:
                                    (t = this._iframe) && (r = t.parentElement) && r.removeChild(t), this._messageChannel.removeListener(this.handleMessageFromCallMachine), Object(N.c)() && ((n = this.nativeUtils()).removeAudioFocusChangeListener(this.handleNativeAudioFocusChange), n.removeAppActiveStateChangeListener(this.handleNativeAppActiveStateChange)), this.resetMeetingDependentVars();
                                case 13:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this, [
                            [0, 6]
                        ])
                    }))), function() { return S.apply(this, arguments) })
                }, {
                    key: "loadCss",
                    value: function(e) {
                        var t = e.bodyClass,
                            r = e.cssFile,
                            n = e.cssText;
                        return ke(), this.sendMessageToCallMachine({ action: "load-css", cssFile: this.absoluteUrl(r), bodyClass: t, cssText: n }), this
                    }
                }, { key: "iframe", value: function() { return ke(), this._iframe } }, { key: "meetingState", value: function() { return this._meetingState } }, { key: "accessState", value: function() { if (!this._callObjectMode) throw new Error("accessState() currently only supported in call object mode"); return this._accessState } }, { key: "participants", value: function() { return this._participants } }, { key: "waitingParticipants", value: function() { if (!this._callObjectMode) throw new Error("waitingParticipants() currently only supported in call object mode"); return this._waitingParticipants } }, { key: "validateParticipantProperties", value: function(e, t) { for (var r in t) { if (!be[r]) throw new Error("unrecognized updateParticipant property ".concat(r)); if (be[r].validate && !be[r].validate(t[r], this, this._participants[e])) throw new Error(be[r].help) } } }, { key: "updateParticipant", value: function(e, t) { return this._participants.local && this._participants.local.session_id === e && (e = "local"), e && t && this._participants[e] && (this.validateParticipantProperties(e, t), this.sendMessageToCallMachine({ action: "update-participant", id: e, properties: t })), this } }, { key: "updateParticipants", value: function(e) { var t = this._participants.local && this._participants.local.session_id; for (var r in e) r === t && (r = "local"), r && e[r] && (this._participants[r] || "*" === r) ? this.validateParticipantProperties(r, e[r]) : (console.warn("unrecognized participant in updateParticipants: ".concat(r)), delete e[r]); return this.sendMessageToCallMachine({ action: "update-participants", participants: e }), this } }, {
                    key: "updateWaitingParticipant",
                    value: (M = l()(c.a.mark((function e() {
                        var t, r, n = this,
                            i = arguments;
                        return c.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (t = i.length > 0 && void 0 !== i[0] ? i[0] : "", r = i.length > 1 && void 0 !== i[1] ? i[1] : {}, this._callObjectMode) { e.next = 4; break }
                                    throw new Error("updateWaitingParticipant() currently only supported in call object mode");
                                case 4:
                                    if (this._meetingState === L) { e.next = 6; break }
                                    throw new Error("updateWaitingParticipant() only supported for joined meetings");
                                case 6:
                                    if ("string" == typeof t && "object" === o()(r)) { e.next = 8; break }
                                    throw new Error("updateWaitingParticipant() must take an id string and a updates object");
                                case 8:
                                    return e.abrupt("return", new Promise((function(e, i) { n.sendMessageToCallMachine({ action: "daily-method-update-waiting-participant", id: t, updates: r }, (function(t) { t.error && i(t.error), t.id || i(new Error("unknown error in updateWaitingParticipant()")), e({ id: t.id }) })) })));
                                case 9:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function() { return M.apply(this, arguments) })
                }, {
                    key: "updateWaitingParticipants",
                    value: (k = l()(c.a.mark((function e() {
                        var t, r = this,
                            n = arguments;
                        return c.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (t = n.length > 0 && void 0 !== n[0] ? n[0] : {}, this._callObjectMode) { e.next = 3; break }
                                    throw new Error("updateWaitingParticipants() currently only supported in call object mode");
                                case 3:
                                    if (this._meetingState === L) { e.next = 5; break }
                                    throw new Error("updateWaitingParticipants() only supported for joined meetings");
                                case 5:
                                    if ("object" === o()(t)) { e.next = 7; break }
                                    throw new Error("updateWaitingParticipants() must take a mapping between ids and update objects");
                                case 7:
                                    return e.abrupt("return", new Promise((function(e, n) { r.sendMessageToCallMachine({ action: "daily-method-update-waiting-participants", updatesById: t }, (function(t) { t.error && n(t.error), t.ids || n(new Error("unknown error in updateWaitingParticipants()")), e({ ids: t.ids }) })) })));
                                case 8:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function() { return k.apply(this, arguments) })
                }, {
                    key: "requestAccess",
                    value: (w = l()(c.a.mark((function e() {
                        var t, r, n, i, a, o = this,
                            s = arguments;
                        return c.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (t = s.length > 0 && void 0 !== s[0] ? s[0] : {}, r = t.access, n = void 0 === r ? { level: "full" } : r, i = t.name, a = void 0 === i ? "" : i, this._callObjectMode) { e.next = 3; break }
                                    throw new Error("requestAccess() currently only supported in call object mode");
                                case 3:
                                    if (this._meetingState === L) { e.next = 5; break }
                                    throw new Error("requestAccess() only supported for joined meetings");
                                case 5:
                                    return e.abrupt("return", new Promise((function(e, t) { o.sendMessageToCallMachine({ action: "daily-method-request-access", access: n, name: a }, (function(r) { r.error && t(r.error), r.access || t(new Error("unknown error in requestAccess()")), e({ access: r.access, granted: r.granted }) })) })));
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function() { return w.apply(this, arguments) })
                }, { key: "localAudio", value: function() { return this._participants.local ? this._participants.local.audio : null } }, { key: "localVideo", value: function() { return this._participants.local ? this._participants.local.video : null } }, { key: "setLocalAudio", value: function(e) { return this.sendMessageToCallMachine({ action: "local-audio", state: e }), this } }, { key: "setLocalVideo", value: function(e) { return this.sendMessageToCallMachine({ action: "local-video", state: e }), this } }, {
                    key: "setBandwidth",
                    value: function(e) {
                        var t = e.kbs,
                            r = e.trackConstraints;
                        return ke(), this.sendMessageToCallMachine({ action: "set-bandwidth", kbs: t, trackConstraints: r }), this
                    }
                }, {
                    key: "getDailyLang",
                    value: function() {
                        var e = this;
                        return ke(), new Promise(function() {
                            var t = l()(c.a.mark((function t(r) {
                                var n;
                                return c.a.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            n = function(e) { delete e.action, delete e.callbackStamp, r(e) }, e.sendMessageToCallMachine({ action: "get-daily-lang" }, n);
                                        case 2:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })));
                            return function(e) { return t.apply(this, arguments) }
                        }())
                    }
                }, { key: "setDailyLang", value: function(e) { return ke(), this.sendMessageToCallMachine({ action: "set-daily-lang", lang: e }), this } }, {
                    key: "getMeetingSession",
                    value: (_ = l()(c.a.mark((function e() {
                        var t = this;
                        return c.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (this._meetingState === L) { e.next = 2; break }
                                    throw new Error("getMeetingSession() is only allowed while in a meeting");
                                case 2:
                                    return e.abrupt("return", new Promise(function() {
                                        var e = l()(c.a.mark((function e(r) {
                                            var n;
                                            return c.a.wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        n = function(e) { delete e.action, delete e.callbackStamp, delete e.callFrameId, r(e) }, t.sendMessageToCallMachine({ action: "get-meeting-session" }, n);
                                                    case 2:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e)
                                        })));
                                        return function(t) { return e.apply(this, arguments) }
                                    }()));
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function() { return _.apply(this, arguments) })
                }, {
                    key: "setUserName",
                    value: function(e, t) {
                        var r = this;
                        return new Promise(function() {
                            var n = l()(c.a.mark((function n(i) {
                                var a;
                                return c.a.wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            a = function(e) { delete e.action, delete e.callbackStamp, i(e) }, r.sendMessageToCallMachine({ action: "set-user-name", name: null != e ? e : "", thisMeetingOnly: Object(N.c)() || !!t && !!t.thisMeetingOnly }, a);
                                        case 2:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n)
                            })));
                            return function(e) { return n.apply(this, arguments) }
                        }())
                    }
                }, {
                    key: "startCamera",
                    value: function() {
                        var e = this,
                            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return new Promise(function() {
                            var r = l()(c.a.mark((function r(n, i) {
                                var a;
                                return c.a.wrap((function(r) {
                                    for (;;) switch (r.prev = r.next) {
                                        case 0:
                                            if (a = function(e) { delete e.action, delete e.callbackStamp, n(e) }, !e.needsLoad()) { r.next = 10; break }
                                            return r.prev = 2, r.next = 5, e.load(t);
                                        case 5:
                                            r.next = 10;
                                            break;
                                        case 7:
                                            r.prev = 7, r.t0 = r.catch(2), i(r.t0);
                                        case 10:
                                            e.sendMessageToCallMachine({ action: "start-camera", properties: we(e.properties), preloadCache: we(e._preloadCache) }, a);
                                        case 11:
                                        case "end":
                                            return r.stop()
                                    }
                                }), r, null, [
                                    [2, 7]
                                ])
                            })));
                            return function(e, t) { return r.apply(this, arguments) }
                        }())
                    }
                }, { key: "cycleCamera", value: function() { var e = this; return new Promise((function(t, r) { e.sendMessageToCallMachine({ action: "cycle-camera" }, (function(e) { t({ device: e.device }) })) })) } }, { key: "cycleMic", value: function() { var e = this; return ke(), new Promise((function(t, r) { e.sendMessageToCallMachine({ action: "cycle-mic" }, (function(e) { t({ device: e.device }) })) })) } }, { key: "getCameraFacingMode", value: function() { var e = this; return Me(), new Promise((function(t, r) { e.sendMessageToCallMachine({ action: "get-camera-facing-mode" }, (function(e) { t(e.facingMode) })) })) } }, {
                    key: "setInputDevices",
                    value: function(e) {
                        var t = e.audioDeviceId,
                            r = e.videoDeviceId,
                            n = e.audioSource,
                            i = e.videoSource;
                        return console.warn("setInputDevices() is deprecated: instead use setInputDevicesAsync(), which returns a Promise"), this.setInputDevicesAsync({ audioDeviceId: t, videoDeviceId: r, audioSource: n, videoSource: i }), this
                    }
                }, {
                    key: "setInputDevicesAsync",
                    value: (b = l()(c.a.mark((function e(t) {
                        var r, n, i, a, o = this;
                        return c.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (r = t.audioDeviceId, n = t.videoDeviceId, i = t.audioSource, a = t.videoSource, ke(), void 0 !== i && (r = i), void 0 !== a && (n = a), r && (this._preloadCache.audioDeviceId = r), n && (this._preloadCache.videoDeviceId = n), !this._callObjectMode || !this.needsLoad()) { e.next = 8; break }
                                    return e.abrupt("return", { camera: { deviceId: this._preloadCache.videoDeviceId }, mic: { deviceId: this._preloadCache.audioDeviceId }, speaker: { deviceId: this._preloadCache.outputDeviceId } });
                                case 8:
                                    return r instanceof MediaStreamTrack && (r = "daily-custom-track"), n instanceof MediaStreamTrack && (n = "daily-custom-track"), e.abrupt("return", new Promise((function(e) { o.sendMessageToCallMachine({ action: "set-input-devices", audioDeviceId: r, videoDeviceId: n }, (function(t) { delete t.action, delete t.callbackStamp, t.returnPreloadCache ? e({ camera: { deviceId: o._preloadCache.videoDeviceId }, mic: { deviceId: o._preloadCache.audioDeviceId }, speaker: { deviceId: o._preloadCache.outputDeviceId } }) : e(t) })) })));
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function(e) { return b.apply(this, arguments) })
                }, { key: "setOutputDevice", value: function(e) { var t = e.outputDeviceId; return ke(), t && (this._preloadCache.outputDeviceId = t), this._callObjectMode && this._meetingState !== L ? this : (this.sendMessageToCallMachine({ action: "set-output-device", outputDeviceId: t }), this) } }, {
                    key: "getInputDevices",
                    value: (g = l()(c.a.mark((function e() {
                        var t = this;
                        return c.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (ke(), !this._callObjectMode || !this.needsLoad()) { e.next = 3; break }
                                    return e.abrupt("return", { camera: { deviceId: this._preloadCache.videoDeviceId }, mic: { deviceId: this._preloadCache.audioDeviceId }, speaker: { deviceId: this._preloadCache.outputDeviceId } });
                                case 3:
                                    return e.abrupt("return", new Promise((function(e, r) { t.sendMessageToCallMachine({ action: "get-input-devices" }, (function(r) { delete r.action, delete r.callbackStamp, r.returnPreloadCache ? e({ camera: { deviceId: t._preloadCache.videoDeviceId }, mic: { deviceId: t._preloadCache.audioDeviceId }, speaker: { deviceId: t._preloadCache.outputDeviceId } }) : e(r) })) })));
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function() { return g.apply(this, arguments) })
                }, { key: "nativeInCallAudioMode", value: function() { return Me(), this._nativeInCallAudioMode } }, { key: "setNativeInCallAudioMode", value: function(e) { if (Me(), [ve, me].includes(e)) { if (e !== this._nativeInCallAudioMode) return this._nativeInCallAudioMode = e, !this.disableReactNativeAutoDeviceManagement("audio") && this.isMeetingPendingOrOngoing(this._meetingState, this._isPreparingToJoin) && this.nativeUtils().setAudioMode(this._nativeInCallAudioMode), this } else console.error("invalid in-call audio mode specified: ", e) } }, {
                    key: "preAuth",
                    value: (v = l()(c.a.mark((function e() {
                        var t, r, n, i = this,
                            a = arguments;
                        return c.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (t = a.length > 0 && void 0 !== a[0] ? a[0] : {}, this._callObjectMode) { e.next = 3; break }
                                    throw new Error("preAuth() currently only supported in call object mode");
                                case 3:
                                    if (![j, L].includes(this._meetingState)) { e.next = 5; break }
                                    throw new Error("preAuth() not supported after joining a meeting");
                                case 5:
                                    if (!this.needsLoad()) { e.next = 8; break }
                                    return e.next = 8, this.load(t);
                                case 8:
                                    if (t.url) { e.next = 10; break }
                                    throw new Error("preAuth() requires at least a url to be provided");
                                case 10:
                                    if (r = Object(D.a)(t.url), n = Object(D.a)(this.properties.url || this.properties.baseUrl), r === n) { e.next = 14; break }
                                    throw new Error("url in preAuth() has a different bundle url than the one loaded (".concat(n, " -> ").concat(r, ")"));
                                case 14:
                                    return this.validateProperties(t), this.properties = pe(pe({}, this.properties), t), e.abrupt("return", new Promise((function(e, t) { i.sendMessageToCallMachine({ action: "daily-method-preauth", properties: we(i.properties) }, (function(r) { r.access || t(new Error("unknown error in preAuth()")), i._didPreAuth = !0, e({ access: r.access }) })) })));
                                case 17:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function() { return v.apply(this, arguments) })
                }, {
                    key: "load",
                    value: (p = l()(c.a.mark((function e(t) {
                        var r = this;
                        return c.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (this.needsLoad()) { e.next = 2; break }
                                    return e.abrupt("return");
                                case 2:
                                    if (t && (this.validateProperties(t), this.properties = pe(pe({}, this.properties), t)), this._callObjectMode || this.properties.url) { e.next = 5; break }
                                    throw new Error("can't load iframe meeting because url property isn't set");
                                case 5:
                                    this.updateMeetingState(C);
                                    try { this.emit("loading", { action: "loading" }) } catch (e) { console.log("could not emit 'loading'") }
                                    if (!this._callObjectMode) { e.next = 11; break }
                                    return e.abrupt("return", new Promise((function(e, t) { r._callObjectLoader.cancel(), r._callObjectLoader.load(r.properties.url || r.properties.baseUrl, r._callFrameId, (function(t) { r.updateMeetingState("loaded"), t && r.emit("loaded", { action: "loaded" }), e() }), (function(e, n) { r.emit("load-attempt-failed", { action: "load-attempt-failed", errorMsg: e }), n || (r.updateMeetingState(F), r.resetMeetingDependentVars(), r.emit("error", { action: "error", errorMsg: e }), t(e)) })) })));
                                case 11:
                                    return this._iframe.src = this.assembleMeetingUrl(), e.abrupt("return", new Promise((function(e, t) {
                                        r._loadedCallback = function(n) {
                                            if (r._meetingState !== F) {
                                                for (var i in r.updateMeetingState("loaded"), (r.properties.cssFile || r.properties.cssText) && r.loadCss(r.properties), r._inputEventsOn) r.sendMessageToCallMachine({ action: "register-input-handler", on: i });
                                                e()
                                            } else t(n)
                                        }
                                    })));
                                case 13:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function(e) { return p.apply(this, arguments) })
                }, {
                    key: "join",
                    value: (d = l()(c.a.mark((function e() {
                        var t, r, n, i, a = this,
                            o = arguments;
                        return c.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (t = o.length > 0 && void 0 !== o[0] ? o[0] : {}, r = !1, !this.needsLoad()) { e.next = 15; break }
                                    return this.updateIsPreparingToJoin(!0), e.prev = 4, e.next = 7, this.load(t);
                                case 7:
                                    e.next = 13;
                                    break;
                                case 9:
                                    return e.prev = 9, e.t0 = e.catch(4), this.updateIsPreparingToJoin(!1), e.abrupt("return", Promise.reject(e.t0));
                                case 13:
                                    e.next = 42;
                                    break;
                                case 15:
                                    if (r = !(!this.properties.cssFile && !this.properties.cssText), !this._didPreAuth) { e.next = 25; break }
                                    if (!t.url || t.url === this.properties.url) { e.next = 21; break }
                                    return console.error("url in join() is different than the one used in preAuth()"), this.updateIsPreparingToJoin(!1), e.abrupt("return", Promise.reject());
                                case 21:
                                    if (!t.token || t.token === this.properties.token) { e.next = 25; break }
                                    return console.error("token in join() is different than the one used in preAuth()"), this.updateIsPreparingToJoin(!1), e.abrupt("return", Promise.reject());
                                case 25:
                                    if (!t.url) { e.next = 40; break }
                                    if (!this._callObjectMode) { e.next = 36; break }
                                    if (n = Object(D.a)(t.url), i = Object(D.a)(this.properties.url || this.properties.baseUrl), n === i) { e.next = 33; break }
                                    return console.error("url in join() has a different bundle url than the one loaded (".concat(i, " -> ").concat(n, ")")), this.updateIsPreparingToJoin(!1), e.abrupt("return", Promise.reject());
                                case 33:
                                    this.properties.url = t.url, e.next = 40;
                                    break;
                                case 36:
                                    if (!t.url || t.url === this.properties.url) { e.next = 40; break }
                                    return console.error("url in join() is different than the one used in load() (".concat(this.properties.url, " -> ").concat(t.url, ")")), this.updateIsPreparingToJoin(!1), e.abrupt("return", Promise.reject());
                                case 40:
                                    this.validateProperties(t), this.properties = pe(pe({}, this.properties), t);
                                case 42:
                                    if (void 0 !== t.showLocalVideo && (this._callObjectMode ? console.error("showLocalVideo is not available in callObject mode") : this._showLocalVideo = !!t.showLocalVideo), void 0 !== t.showParticipantsBar && (this._callObjectMode ? console.error("showParticipantsBar is not available in callObject mode") : this._showParticipantsBar = !!t.showParticipantsBar), this._meetingState !== L && this._meetingState !== j) { e.next = 48; break }
                                    return console.warn("already joined meeting, call leave() before joining again"), this.updateIsPreparingToJoin(!1), e.abrupt("return");
                                case 48:
                                    this.updateMeetingState(j, !1);
                                    try { this.emit("joining-meeting", { action: "joining-meeting" }) } catch (e) { console.log("could not emit 'joining-meeting'") }
                                    return this.sendMessageToCallMachine({ action: "join-meeting", properties: we(this.properties), preloadCache: we(this._preloadCache) }), e.abrupt("return", new Promise((function(e, t) {
                                        a._joinedCallback = function(n, i) {
                                            if (a._meetingState !== F) {
                                                if (a.updateMeetingState(L), n)
                                                    for (var o in n) a._callObjectMode && (ce(n[o]), ue(n[o]), de(n[o], a._participants[o])), a._participants[o] = pe({}, n[o]), a.toggleParticipantAudioBasedOnNativeAudioFocus();
                                                r && a.loadCss(a.properties), e(n)
                                            } else t(i)
                                        }
                                    })));
                                case 52:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this, [
                            [4, 9]
                        ])
                    }))), function() { return d.apply(this, arguments) })
                }, {
                    key: "leave",
                    value: (u = l()(c.a.mark((function e() {
                        var t = this;
                        return c.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", new Promise((function(e, r) {
                                        if (t._callObjectLoader && !t._callObjectLoader.loaded) {
                                            t._callObjectLoader.cancel(), t.updateMeetingState(I), t.resetMeetingDependentVars();
                                            try { t.emit(I, { action: I }) } catch (e) { console.log("could not emit 'left-meeting'") }
                                            e()
                                        } else t._meetingState === I || t._meetingState === F ? e() : t.sendMessageToCallMachine({ action: "leave-meeting" }, (function() { e() }))
                                    })));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))), function() { return u.apply(this, arguments) })
                }, {
                    key: "startScreenShare",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        ke(), e.mediaStream && (this._preloadCache.screenMediaStream = e.mediaStream, e.mediaStream = "daily-custom-track"), this.sendMessageToCallMachine({ action: "local-screen-start", captureOptions: e })
                    }
                }, { key: "stopScreenShare", value: function() { ke(), this.sendMessageToCallMachine({ action: "local-screen-stop" }) } }, { key: "startRecording", value: function() { ke(), this.sendMessageToCallMachine({ action: "local-recording-start" }) } }, { key: "stopRecording", value: function() { ke(), this.sendMessageToCallMachine({ action: "local-recording-stop" }) } }, {
                    key: "startLiveStreaming",
                    value: function(e) {
                        var t = e.rtmpUrl,
                            r = e.width,
                            n = void 0 === r ? 1920 : r,
                            i = e.height,
                            a = void 0 === i ? 1080 : i,
                            o = e.backgroundColor,
                            s = void 0 === o ? "0xff000000" : o,
                            c = e.layout,
                            u = void 0 === c ? { preset: "default" } : c;
                        ke(), this.sendMessageToCallMachine({ action: "daily-method-start-live-streaming", rtmpUrl: t, width: n, height: a, backgroundColor: s, layout: u })
                    }
                }, {
                    key: "updateLiveStreaming",
                    value: function(e) {
                        var t = e.layout,
                            r = void 0 === t ? { preset: "default" } : t;
                        ke(), this.sendMessageToCallMachine({ action: "daily-method-update-live-streaming", layout: r })
                    }
                }, { key: "stopLiveStreaming", value: function() { ke(), this.sendMessageToCallMachine({ action: "daily-method-stop-live-streaming" }) } }, { key: "getNetworkStats", value: function() { var e = this; if (this._meetingState !== L) { return { stats: { latest: {} } } } return new Promise((function(t, r) { e.sendMessageToCallMachine({ action: "get-calc-stats" }, (function(r) { t(pe({ stats: r.stats }, e._network)) })) })) } }, { key: "getActiveSpeaker", value: function() { return ke(), this._activeSpeaker } }, { key: "setActiveSpeakerMode", value: function(e) { return ke(), this.sendMessageToCallMachine({ action: "set-active-speaker-mode", enabled: e }), this } }, { key: "activeSpeakerMode", value: function() { return ke(), this._activeSpeakerMode } }, { key: "subscribeToTracksAutomatically", value: function() { return this._preloadCache.subscribeToTracksAutomatically } }, { key: "setSubscribeToTracksAutomatically", value: function(e) { if (this._meetingState !== L) throw new Error("setSubscribeToTracksAutomatically() is only allowed while in a meeting"); return this._preloadCache.subscribeToTracksAutomatically = e, this.sendMessageToCallMachine({ action: "daily-method-subscribe-to-tracks-automatically", enabled: e }), this } }, {
                    key: "enumerateDevices",
                    value: (s = l()(c.a.mark((function e() {
                        var t, r = this;
                        return c.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (ke(), !this._callObjectMode) { e.next = 6; break }
                                    return e.next = 4, navigator.mediaDevices.enumerateDevices();
                                case 4:
                                    return t = e.sent, e.abrupt("return", { devices: t.map((function(e) { return JSON.parse(JSON.stringify(e)) })) });
                                case 6:
                                    return e.abrupt("return", new Promise((function(e, t) { r.sendMessageToCallMachine({ action: "enumerate-devices" }, (function(t) { e({ devices: t.devices }) })) })));
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function() { return s.apply(this, arguments) })
                }, { key: "sendAppMessage", value: function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "*"; if (JSON.stringify(e).length > 4096) throw new Error("Message data too large. Max size is 4096"); return this.sendMessageToCallMachine({ action: "app-msg", data: e, to: t }), this } }, { key: "addFakeParticipant", value: function(e) { return ke(), this.sendMessageToCallMachine(pe({ action: "add-fake-participant" }, e)), this } }, { key: "setShowNamesMode", value: function(e) { return ke(), e && "always" !== e && "never" !== e ? (console.error('setShowNamesMode argument should be "always", "never", or false'), this) : (this.sendMessageToCallMachine({ action: "set-show-names", mode: e }), this) } }, { key: "setShowLocalVideo", value: function() { var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]; return ke(), "boolean" != typeof e ? (console.error("setShowLocalVideo only accepts a boolean value"), this) : this._callObjectMode ? (console.error("setShowLocalVideo is not available in callObject mode"), this) : this._meetingState !== L ? (console.error("the meeting must be joined before calling setShowLocalVideo"), this) : (this.sendMessageToCallMachine({ action: "set-show-local-video", show: e }), this._showLocalVideo = e, this) } }, { key: "showLocalVideo", value: function() { return ke(), this._callObjectMode ? (console.error("showLocalVideo is not available in callObject mode"), this) : this._showLocalVideo } }, { key: "setShowParticipantsBar", value: function() { var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]; return ke(), "boolean" != typeof e ? (console.error("setShowParticipantsBar only accepts a boolean value"), this) : this._callObjectMode ? (console.error("setShowParticipantsBar is not available in callObject mode"), this) : this._meetingState !== L ? (console.error("the meeting must be joined before calling setShowParticipantsBar"), this) : (this.sendMessageToCallMachine({ action: "set-show-participants-bar", show: e }), this._showParticipantsBar = e, this) } }, { key: "showParticipantsBar", value: function() { return ke(), this._callObjectMode ? (console.error("showParticipantsBar is not available in callObject mode"), this) : this._showParticipantsBar } }, { key: "detectAllFaces", value: function() { var e = this; return ke(), new Promise((function(t, r) { e.sendMessageToCallMachine({ action: "detect-all-faces" }, (function(e) { delete e.action, delete e.callbackStamp, t(e) })) })) } }, {
                    key: "requestFullscreen",
                    value: (a = l()(c.a.mark((function e() {
                        return c.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (ke(), this._iframe && !document.fullscreenElement) { e.next = 3; break }
                                    return e.abrupt("return");
                                case 3:
                                    return e.prev = 3, e.next = 6, this._iframe.requestFullscreen;
                                case 6:
                                    if (!e.sent) { e.next = 10; break }
                                    this._iframe.requestFullscreen(), e.next = 11;
                                    break;
                                case 10:
                                    this._iframe.webkitRequestFullscreen();
                                case 11:
                                    e.next = 16;
                                    break;
                                case 13:
                                    e.prev = 13, e.t0 = e.catch(3), console.log("could not make video call fullscreen", e.t0);
                                case 16:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this, [
                            [3, 13]
                        ])
                    }))), function() { return a.apply(this, arguments) })
                }, { key: "exitFullscreen", value: function() { ke(), document.fullscreenElement ? document.exitFullscreen() : document.webkitFullscreenElement && document.webkitExitFullscreen() } }, {
                    key: "room",
                    value: (n = l()(c.a.mark((function e() {
                        var t, r, n, i = this,
                            a = arguments;
                        return c.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (t = a.length > 0 && void 0 !== a[0] ? a[0] : {}, r = t.includeRoomConfigDefaults, n = void 0 === r || r, this._meetingState !== L && !this._didPreAuth) { e.next = 5; break }
                                    return e.abrupt("return", new Promise((function(e, t) { i.sendMessageToCallMachine({ action: "lib-room-info", includeRoomConfigDefaults: n }, (function(t) { delete t.action, delete t.callbackStamp, e(t) })) })));
                                case 5:
                                    if (!this.properties.url) { e.next = 7; break }
                                    return e.abrupt("return", { roomUrlPendingJoin: this.properties.url });
                                case 7:
                                    return e.abrupt("return", null);
                                case 8:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function() { return n.apply(this, arguments) })
                }, {
                    key: "geo",
                    value: (r = l()(c.a.mark((function e() {
                        return c.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", new Promise(function() {
                                        var e = l()(c.a.mark((function e(t, r) {
                                            var n, i;
                                            return c.a.wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.prev = 0, e.next = 4, fetch("https://gs.daily.co/_ks_/x-swsl/:");
                                                    case 4:
                                                        return n = e.sent, e.next = 7, n.json();
                                                    case 7:
                                                        i = e.sent, t({ current: i.geo }), e.next = 15;
                                                        break;
                                                    case 11:
                                                        e.prev = 11, e.t0 = e.catch(0), console.error("geo lookup failed", e.t0), t({ current: "" });
                                                    case 15:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e, null, [
                                                [0, 11]
                                            ])
                                        })));
                                        return function(t, r) { return e.apply(this, arguments) }
                                    }()));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))), function() { return r.apply(this, arguments) })
                }, {
                    key: "setNetworkTopology",
                    value: (t = l()(c.a.mark((function e(t) {
                        var r = this;
                        return c.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return ke(), e.abrupt("return", new Promise(function() {
                                        var e = l()(c.a.mark((function e(n, i) {
                                            var a;
                                            return c.a.wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        a = function(e) { e.error ? i({ error: e.error }) : n({ workerId: e.workerId }) }, r.sendMessageToCallMachine({ action: "set-network-topology", opts: t }, a);
                                                    case 2:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e)
                                        })));
                                        return function(t, r) { return e.apply(this, arguments) }
                                    }()));
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))), function(e) { return t.apply(this, arguments) })
                }, {
                    key: "setPlayNewParticipantSound",
                    value: function(e) {
                        if (ke(), "number" != typeof e && !0 !== e && !1 !== e) throw new Error("argument to setShouldPlayNewParticipantSound should be true, false, or a number, but is ".concat(e));
                        this.sendMessageToCallMachine({ action: "daily-method-set-play-ding", arg: e })
                    }
                }, { key: "on", value: function(e, t) { return this._inputEventsOn[e] = {}, this.sendMessageToCallMachine({ action: "register-input-handler", on: e }), T.a.prototype.on.call(this, e, t) } }, { key: "once", value: function(e, t) { return this._inputEventsOn[e] = {}, this.sendMessageToCallMachine({ action: "register-input-handler", on: e }), T.a.prototype.once.call(this, e, t) } }, { key: "off", value: function(e, t) { return delete this._inputEventsOn[e], this.sendMessageToCallMachine({ action: "register-input-handler", off: e }), T.a.prototype.off.call(this, e, t) } }, { key: "validateProperties", value: function(e) { for (var t in e) { if (!ye[t]) throw new Error("unrecognized property '".concat(t, "'")); if (ye[t].validate && !ye[t].validate(e[t], this)) throw new Error("property '".concat(t, "': ").concat(ye[t].help)) } } }, {
                    key: "assembleMeetingUrl",
                    value: function() {
                        var e = pe(pe({}, this.properties), {}, { emb: this._callFrameId, embHref: encodeURIComponent(window.location.href) }),
                            t = e.url.match(/\?/) ? "&" : "?";
                        return e.url + t + Object.keys(ye).filter((function(t) { return ye[t].queryString && void 0 !== e[t] })).map((function(t) { return "".concat(ye[t].queryString, "=").concat(e[t]) })).join("&")
                    }
                }, { key: "needsLoad", value: function() { return [P, C, I, F].includes(this._meetingState) } }, { key: "sendMessageToCallMachine", value: function(e, t) { this._messageChannel.sendMessageToCallMachine(e, t, this._iframe, this._callFrameId) } }, { key: "forwardPackagedMessageToCallMachine", value: function(e) { this._messageChannel.forwardPackagedMessageToCallMachine(e, this._iframe, this._callFrameId) } }, { key: "addListenerForPackagedMessagesFromCallMachine", value: function(e) { return this._messageChannel.addListenerForPackagedMessagesFromCallMachine(e, this._callFrameId) } }, { key: "removeListenerForPackagedMessagesFromCallMachine", value: function(e) { this._messageChannel.removeListenerForPackagedMessagesFromCallMachine(e) } }, {
                    key: "handleMessageFromCallMachine",
                    value: function(e) {
                        switch (e.action) {
                            case "loaded":
                                this._loadedCallback && (this._loadedCallback(), this._loadedCallback = null);
                                try { this.emit(e.action, e) } catch (t) { console.log("could not emit", e) }
                                break;
                            case "joined-meeting":
                                this._joinedCallback && (this._joinedCallback(e.participants), this._joinedCallback = null);
                                try { this.emit(e.action, e) } catch (t) { console.log("could not emit", e) }
                                break;
                            case "participant-joined":
                            case "participant-updated":
                                if (this._meetingState === I) return;
                                if (e.participant && e.participant.session_id) {
                                    var t = e.participant.local ? "local" : e.participant.session_id;
                                    this._callObjectMode && (ce(e.participant), ue(e.participant), de(e.participant, this._participants[t]));
                                    try { this.maybeEventTrackStopped(this._participants[t], e.participant, "audioTrack"), this.maybeEventTrackStopped(this._participants[t], e.participant, "videoTrack"), this.maybeEventTrackStopped(this._participants[t], e.participant, "screenVideoTrack"), this.maybeEventTrackStopped(this._participants[t], e.participant, "screenAudioTrack"), this.maybeEventTrackStarted(this._participants[t], e.participant, "audioTrack"), this.maybeEventTrackStarted(this._participants[t], e.participant, "videoTrack"), this.maybeEventTrackStarted(this._participants[t], e.participant, "screenVideoTrack"), this.maybeEventTrackStarted(this._participants[t], e.participant, "screenAudioTrack"), this.maybeEventTrackStoppedForCustomTracks(this._participants[t], e.participant), this.maybeEventTrackStartedForCustomTracks(this._participants[t], e.participant), this.maybeEventRecordingStopped(this._participants[t], e.participant), this.maybeEventRecordingStarted(this._participants[t], e.participant) } catch (e) { console.error("track events error", e) }
                                    if (!this.compareEqualForParticipantUpdateEvent(e.participant, this._participants[t])) { this._participants[t] = pe({}, e.participant), this.toggleParticipantAudioBasedOnNativeAudioFocus(); try { this.emit(e.action, e) } catch (t) { console.log("could not emit", e) } }
                                }
                                break;
                            case "participant-left":
                                if (e.participant && e.participant.session_id) {
                                    var r = this._participants[e.participant.session_id];
                                    r && (this.maybeEventTrackStopped(r, null, "audioTrack"), this.maybeEventTrackStopped(r, null, "videoTrack"), this.maybeEventTrackStopped(r, null, "screenVideoTrack"), this.maybeEventTrackStopped(r, null, "screenAudioTrack"), this.maybeEventTrackStoppedForCustomTracks(r, null)), delete this._participants[e.participant.session_id];
                                    try { this.emit(e.action, e) } catch (t) { console.log("could not emit", e) }
                                }
                                break;
                            case "access-state-updated":
                                var n = { access: e.access };
                                if (e.awaitingAccess && (n.awaitingAccess = e.awaitingAccess), !Object(E.deepEqual)(this._accessState, n)) { this._accessState = n; try { this.emit(e.action, e) } catch (t) { console.log("could not emit", e) } }
                                break;
                            case "meeting-session-updated":
                                if (e.meetingSession) try { delete e.callFrameId, this.emit(e.action, e) } catch (t) { console.log("could not emit", e) }
                                break;
                            case "error":
                                this._iframe && !e.preserveIframe && (this._iframe.src = ""), this.updateMeetingState(F), this.resetMeetingDependentVars(), this._loadedCallback && (this._loadedCallback(e.errorMsg), this._loadedCallback = null), this._joinedCallback && (this._joinedCallback(null, e.errorMsg), this._joinedCallback = null);
                                try {
                                    e.preserveIframe;
                                    var a = i()(e, ["preserveIframe"]);
                                    this.emit(e.action, a)
                                } catch (t) { console.log("could not emit", e) }
                                break;
                            case "left-meeting":
                                this._meetingState !== F && this.updateMeetingState(I), this.resetMeetingDependentVars();
                                try { this.emit(e.action, e) } catch (t) { console.log("could not emit", e) }
                                break;
                            case "input-event":
                                var o = this._participants[e.session_id];
                                o || (o = e.session_id === this._participants.local.session_id ? this._participants.local : {});
                                try { this.emit(e.event.type, { action: e.event.type, event: e.event, participant: pe({}, o) }) } catch (t) { console.log("could not emit", e) }
                                break;
                            case "network-quality-change":
                                var s = e.threshold,
                                    c = e.quality;
                                if (s !== this._network.threshold || c !== this._network.quality) { this._network.quality = c, this._network.threshold = s; try { this.emit(e.action, e) } catch (t) { console.log("could not emit", e) } }
                                break;
                            case "active-speaker-change":
                                var u = e.activeSpeaker;
                                if (this._activeSpeaker.peerId !== u.peerId) { this._activeSpeaker.peerId = u.peerId; try { this.emit(e.action, { action: e.action, activeSpeaker: this._activeSpeaker }) } catch (t) { console.log("could not emit", e) } }
                                break;
                            case "active-speaker-mode-change":
                                var l = e.enabled;
                                if (this._activeSpeakerMode !== l) { this._activeSpeakerMode = l; try { this.emit(e.action, { action: e.action, enabled: this._activeSpeakerMode }) } catch (t) { console.log("could not emit", e) } }
                                break;
                            case "waiting-participant-added":
                            case "waiting-participant-updated":
                            case "waiting-participant-removed":
                                this._waitingParticipants = e.allWaitingParticipants;
                                try { this.emit(e.action, { action: e.action, participant: e.participant }) } catch (t) { console.log("could not emit", e, t) }
                                break;
                            case "recording-started":
                            case "recording-stopped":
                            case "recording-stats":
                            case "recording-error":
                            case "recording-upload-completed":
                            case "started-camera":
                            case "camera-error":
                            case "app-message":
                            case "local-screen-share-started":
                            case "local-screen-share-stopped":
                            case "network-connection":
                            case "recording-data":
                            case "live-streaming-started":
                            case "live-streaming-stopped":
                            case "live-streaming-error":
                            case "lang-updated":
                                try { this.emit(e.action, e) } catch (t) { console.log("could not emit", e, t) }
                                break;
                            case "request-fullscreen":
                                this.requestFullscreen();
                                break;
                            case "request-exit-fullscreen":
                                this.exitFullscreen()
                        }
                    }
                }, { key: "maybeEventRecordingStopped", value: function(e, t) { var r = "record"; if (e && !t.local && !1 === t[r] && e[r] !== t[r]) try { this.emit("recording-stopped", { action: "recording-stopped" }) } catch (e) { console.log("could not emit", e) } } }, { key: "maybeEventRecordingStarted", value: function(e, t) { var r = "record"; if (e && !t.local && !0 === t[r] && e[r] !== t[r]) try { this.emit("recording-started", { action: "recording-started" }) } catch (e) { console.log("could not emit", e) } } }, { key: "maybeEventTrackStopped", value: function(e, t, r) { if (e && (e[r] && "ended" === e[r].readyState || e[r] && (!t || !t[r]) || e[r] && e[r].id !== t[r].id)) try { this.emit("track-stopped", { action: "track-stopped", track: e[r], participant: t }) } catch (e) { console.log("could not emit", e) } } }, { key: "maybeEventTrackStarted", value: function(e, t, r) { if (t[r] && (!e || !e[r]) || t[r] && "ended" === e[r].readyState || t[r] && t[r].id !== e[r].id) try { this.emit("track-started", { action: "track-started", track: t[r], participant: t }) } catch (e) { console.log("could not emit", e) } } }, {
                    key: "maybeEventTrackStoppedForCustomTracks",
                    value: function(e, t) {
                        if (e)
                            for (var r in e.tracks) le(r) || this.maybeEventTrackStopped(e.tracks[r], t ? t.tracks[r] : null, "track")
                    }
                }, {
                    key: "maybeEventTrackStartedForCustomTracks",
                    value: function(e, t) {
                        if (t)
                            for (var r in t.tracks) le(r) || this.maybeEventTrackStarted(e ? e.tracks[r] : null, t.tracks[r], "track")
                    }
                }, { key: "compareEqualForParticipantUpdateEvent", value: function(e, t) { return !!Object(E.deepEqual)(e, t) && ((!e.videoTrack || !t.videoTrack || e.videoTrack.id === t.videoTrack.id && e.videoTrack.muted === t.videoTrack.muted && e.videoTrack.enabled === t.videoTrack.enabled) && (!e.audioTrack || !t.audioTrack || e.audioTrack.id === t.audioTrack.id && e.audioTrack.muted === t.audioTrack.muted && e.audioTrack.enabled === t.audioTrack.enabled)) } }, { key: "nativeUtils", value: function() { return Object(N.c)() ? "undefined" == typeof DailyNativeUtils ? (console.warn("in React Native, DailyNativeUtils is expected to be available"), null) : DailyNativeUtils : null } }, { key: "updateIsPreparingToJoin", value: function(e) { this.updateMeetingState(this._meetingState, e) } }, {
                    key: "updateMeetingState",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this._isPreparingToJoin;
                        if (e !== this._meetingState || t !== this._isPreparingToJoin) {
                            var r = this._meetingState,
                                n = this._isPreparingToJoin;
                            this._meetingState = e, this._isPreparingToJoin = t;
                            var i = this.isMeetingPendingOrOngoing(r, n),
                                a = this.isMeetingPendingOrOngoing(this._meetingState, this._isPreparingToJoin);
                            i !== a && (this.updateKeepDeviceAwake(a), this.updateDeviceAudioMode(a), this.updateShowAndroidOngoingMeetingNotification(a), this.updateNoOpRecordingEnsuringBackgroundContinuity(a))
                        }
                    }
                }, { key: "resetMeetingDependentVars", value: function() { this._participants = {}, this._waitingParticipants = {}, this._activeSpeakerMode = !1, this._didPreAuth = !1, this._accessState = { access: "unknown" }, this._preloadCache } }, { key: "updateKeepDeviceAwake", value: function(e) { Object(N.c)() && this.nativeUtils().setKeepDeviceAwake(e, this._callFrameId) } }, {
                    key: "updateDeviceAudioMode",
                    value: function(e) {
                        if (Object(N.c)() && !this.disableReactNativeAutoDeviceManagement("audio")) {
                            var t = e ? this._nativeInCallAudioMode : "idle";
                            this.nativeUtils().setAudioMode(t)
                        }
                    }
                }, {
                    key: "updateShowAndroidOngoingMeetingNotification",
                    value: function(e) {
                        if (Object(N.c)() && this.nativeUtils().setShowOngoingMeetingNotification) {
                            var t, r, n, i;
                            if (this.properties.reactNativeConfig && this.properties.reactNativeConfig.androidInCallNotification) {
                                var a = this.properties.reactNativeConfig.androidInCallNotification;
                                t = a.title, r = a.subtitle, n = a.iconName, i = a.disableForCustomOverride
                            }
                            i && (e = !1), this.nativeUtils().setShowOngoingMeetingNotification(e, t, r, n, this._callFrameId)
                        }
                    }
                }, { key: "updateNoOpRecordingEnsuringBackgroundContinuity", value: function(e) { Object(N.c)() && this.nativeUtils().enableNoOpRecordingEnsuringBackgroundContinuity && this.nativeUtils().enableNoOpRecordingEnsuringBackgroundContinuity(e) } }, { key: "isMeetingPendingOrOngoing", value: function(e, t) { return [j, L].includes(e) || t } }, {
                    key: "toggleParticipantAudioBasedOnNativeAudioFocus",
                    value: function() {
                        if (Object(N.c)()) {
                            var e = store.getState();
                            for (var t in e.streams) {
                                var r = e.streams[t];
                                r && r.pendingTrack && "audio" === r.pendingTrack.kind && (r.pendingTrack.enabled = this._hasNativeAudioFocus)
                            }
                        }
                    }
                }, { key: "disableReactNativeAutoDeviceManagement", value: function(e) { return this.properties.reactNativeConfig && this.properties.reactNativeConfig.disableAutoDeviceManagement && this.properties.reactNativeConfig.disableAutoDeviceManagement[e] } }, { key: "absoluteUrl", value: function(e) { if (void 0 !== e) { var t = document.createElement("a"); return t.href = e, t.href } } }, { key: "sayHello", value: function() { var e = "hello, world."; return console.log(e), e } }]), R
            }(T.a);

        function we(e) { var t = {}; for (var r in e) e[r] instanceof MediaStreamTrack ? t[r] = "daily-custom-track" : "dailyConfig" === r ? (e[r].modifyLocalSdpHook && (window._dailyConfig && (window._dailyConfig.modifyLocalSdpHook = e[r].modifyLocalSdpHook), delete e[r].modifyLocalSdpHook), e[r].modifyRemoteSdpHook && (window._dailyConfig && (window._dailyConfig.modifyRemoteSdpHook = e[r].modifyRemoteSdpHook), delete e[r].modifyRemoteSdpHook), t[r] = e[r]) : t[r] = e[r]; return t }

        function ke() { if (Object(N.c)()) throw new Error("This daily-js method is not currently supported in React Native") }

        function Me() { if (!Object(N.c)()) throw new Error("This daily-js method is only supported in React Native") }
    }])
}));