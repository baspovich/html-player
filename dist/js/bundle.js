! function (t) {
    var e = {};

    function n(r) {
        if (e[r]) return e[r].exports;
        var i = e[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }
    n.m = t, n.c = e, n.d = function (t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: r
        })
    }, n.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, n.t = function (t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var i in t) n.d(r, i, function (e) {
                return t[e]
            }.bind(null, i));
        return r
    }, n.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 0)
}([function (t, e, n) {
    "use strict";

    function r(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function i(t, e) {
        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
    }
    /*!
     * GSAP 3.6.1
     * https://greensock.com
     *
     * @license Copyright 2008-2021, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    n.r(e);
    var o, a, s, l, u, c, h, f, p, d, g, _, m, v = {
            autoSleep: 120,
            force3D: "auto",
            nullTargetWarn: 1,
            units: {
                lineHeight: ""
            }
        },
        y = {
            duration: .5,
            overwrite: !1,
            delay: 0
        },
        x = 1e8,
        b = 2 * Math.PI,
        w = b / 4,
        T = 0,
        M = Math.sqrt,
        k = Math.cos,
        S = Math.sin,
        O = function (t) {
            return "string" == typeof t
        },
        E = function (t) {
            return "function" == typeof t
        },
        A = function (t) {
            return "number" == typeof t
        },
        C = function (t) {
            return void 0 === t
        },
        L = function (t) {
            return "object" == typeof t
        },
        D = function (t) {
            return !1 !== t
        },
        P = function () {
            return "undefined" != typeof window
        },
        R = function (t) {
            return E(t) || O(t)
        },
        X = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function () {},
        Y = Array.isArray,
        N = /(?:-?\.?\d|\.)+/gi,
        F = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        B = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        z = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
        q = /[+-]=-?[.\d]+/,
        I = /[#\-+.]*\b[a-z\d-=+%.]+/gi,
        H = /[\d.+\-=]+(?:e[-+]\d*)*/i,
        W = {},
        U = {},
        V = function (t) {
            return (U = vt(t, W)) && tn
        },
        j = function (t, e) {
            return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
        },
        G = function (t, e) {
            return !e && console.warn(t)
        },
        Q = function (t, e) {
            return t && (W[t] = e) && U && (U[t] = e) || W
        },
        K = function () {
            return 0
        },
        Z = {},
        $ = [],
        J = {},
        tt = {},
        et = {},
        nt = 30,
        rt = [],
        it = "",
        ot = function (t) {
            var e, n, r = t[0];
            if (L(r) || E(r) || (t = [t]), !(e = (r._gsap || {}).harness)) {
                for (n = rt.length; n-- && !rt[n].targetTest(r););
                e = rt[n]
            }
            for (n = t.length; n--;) t[n] && (t[n]._gsap || (t[n]._gsap = new ke(t[n], e))) || t.splice(n, 1);
            return t
        },
        at = function (t) {
            return t._gsap || ot(Ut(t))[0]._gsap
        },
        st = function (t, e, n) {
            return (n = t[e]) && E(n) ? t[e]() : C(n) && t.getAttribute && t.getAttribute(e) || n
        },
        lt = function (t, e) {
            return (t = t.split(",")).forEach(e) || t
        },
        ut = function (t) {
            return Math.round(1e5 * t) / 1e5 || 0
        },
        ct = function (t, e) {
            for (var n = e.length, r = 0; t.indexOf(e[r]) < 0 && ++r < n;);
            return r < n
        },
        ht = function (t, e, n) {
            var r, i = A(t[1]),
                o = (i ? 2 : 1) + (e < 2 ? 0 : 1),
                a = t[o];
            if (i && (a.duration = t[1]), a.parent = n, e) {
                for (r = a; n && !("immediateRender" in r);) r = n.vars.defaults || {}, n = D(n.vars.inherit) && n.parent;
                a.immediateRender = D(r.immediateRender), e < 2 ? a.runBackwards = 1 : a.startAt = t[o - 1]
            }
            return a
        },
        ft = function () {
            var t, e, n = $.length,
                r = $.slice(0);
            for (J = {}, $.length = 0, t = 0; t < n; t++)(e = r[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
        },
        pt = function (t, e, n, r) {
            $.length && ft(), t.render(e, n, r), $.length && ft()
        },
        dt = function (t) {
            var e = parseFloat(t);
            return (e || 0 === e) && (t + "").match(I).length < 2 ? e : O(t) ? t.trim() : t
        },
        gt = function (t) {
            return t
        },
        _t = function (t, e) {
            for (var n in e) n in t || (t[n] = e[n]);
            return t
        },
        mt = function (t, e) {
            for (var n in e) n in t || "duration" === n || "ease" === n || (t[n] = e[n])
        },
        vt = function (t, e) {
            for (var n in e) t[n] = e[n];
            return t
        },
        yt = function t(e, n) {
            for (var r in n) "__proto__" !== r && "constructor" !== r && "prototype" !== r && (e[r] = L(n[r]) ? t(e[r] || (e[r] = {}), n[r]) : n[r]);
            return e
        },
        xt = function (t, e) {
            var n, r = {};
            for (n in t) n in e || (r[n] = t[n]);
            return r
        },
        bt = function (t) {
            var e = t.parent || a,
                n = t.keyframes ? mt : _t;
            if (D(t.inherit))
                for (; e;) n(t, e.vars.defaults), e = e.parent || e._dp;
            return t
        },
        wt = function (t, e, n, r) {
            void 0 === n && (n = "_first"), void 0 === r && (r = "_last");
            var i = e._prev,
                o = e._next;
            i ? i._next = o : t[n] === e && (t[n] = o), o ? o._prev = i : t[r] === e && (t[r] = i), e._next = e._prev = e.parent = null
        },
        Tt = function (t, e) {
            t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t), t._act = 0
        },
        Mt = function (t, e) {
            if (t && (!e || e._end > t._dur || e._start < 0))
                for (var n = t; n;) n._dirty = 1, n = n.parent;
            return t
        },
        kt = function (t) {
            for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent;
            return t
        },
        St = function (t) {
            return t._repeat ? Ot(t._tTime, t = t.duration() + t._rDelay) * t : 0
        },
        Ot = function (t, e) {
            var n = Math.floor(t /= e);
            return t && n === t ? n - 1 : n
        },
        Et = function (t, e) {
            return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
        },
        At = function (t) {
            return t._end = ut(t._start + (t._tDur / Math.abs(t._ts || t._rts || 1e-8) || 0))
        },
        Ct = function (t, e) {
            var n = t._dp;
            return n && n.smoothChildTiming && t._ts && (t._start = ut(n._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), At(t), n._dirty || Mt(n, t)), t
        },
        Lt = function (t, e) {
            var n;
            if ((e._time || e._initted && !e._dur) && (n = Et(t.rawTime(), e), (!e._dur || zt(0, e.totalDuration(), n) - e._tTime > 1e-8) && e.render(n, !0)), Mt(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
                if (t._dur < t.duration())
                    for (n = t; n._dp;) n.rawTime() >= 0 && n.totalTime(n._tTime), n = n._dp;
                t._zTime = -1e-8
            }
        },
        Dt = function (t, e, n, r) {
            return e.parent && Tt(e), e._start = ut(n + e._delay), e._end = ut(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)),
                function (t, e, n, r, i) {
                    void 0 === n && (n = "_first"), void 0 === r && (r = "_last");
                    var o, a = t[r];
                    if (i)
                        for (o = e[i]; a && a[i] > o;) a = a._prev;
                    a ? (e._next = a._next, a._next = e) : (e._next = t[n], t[n] = e), e._next ? e._next._prev = e : t[r] = e, e._prev = a, e.parent = e._dp = t
                }(t, e, "_first", "_last", t._sort ? "_start" : 0), t._recent = e, r || Lt(t, e), t
        },
        Pt = function (t, e) {
            return (W.ScrollTrigger || j("scrollTrigger", e)) && W.ScrollTrigger.create(e, t)
        },
        Rt = function (t, e, n, r) {
            return De(t, e), t._initted ? !n && t._pt && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && h !== fe.frame ? ($.push(t), t._lazy = [e, r], 1) : void 0 : 1
        },
        Xt = function (t, e, n, r) {
            var i = t._repeat,
                o = ut(e) || 0,
                a = t._tTime / t._tDur;
            return a && !r && (t._time *= o / t._dur), t._dur = o, t._tDur = i ? i < 0 ? 1e10 : ut(o * (i + 1) + t._rDelay * i) : o, a && !r ? Ct(t, t._tTime = t._tDur * a) : t.parent && At(t), n || Mt(t.parent, t), t
        },
        Yt = function (t) {
            return t instanceof Oe ? Mt(t) : Xt(t, t._dur)
        },
        Nt = {
            _start: 0,
            endTime: K
        },
        Ft = function t(e, n) {
            var r, i, o = e.labels,
                a = e._recent || Nt,
                s = e.duration() >= x ? a.endTime(!1) : e._dur;
            return O(n) && (isNaN(n) || n in o) ? "<" === (r = n.charAt(0)) || ">" === r ? ("<" === r ? a._start : a.endTime(a._repeat >= 0)) + (parseFloat(n.substr(1)) || 0) : (r = n.indexOf("=")) < 0 ? (n in o || (o[n] = s), o[n]) : (i = +(n.charAt(r - 1) + n.substr(r + 1)), r > 1 ? t(e, n.substr(0, r - 1)) + i : s + i) : null == n ? s : +n
        },
        Bt = function (t, e) {
            return t || 0 === t ? e(t) : e
        },
        zt = function (t, e, n) {
            return n < t ? t : n > e ? e : n
        },
        qt = function (t) {
            if ("string" != typeof t) return "";
            var e = H.exec(t);
            return e ? t.substr(e.index + e[0].length) : ""
        },
        It = [].slice,
        Ht = function (t, e) {
            return t && L(t) && "length" in t && (!e && !t.length || t.length - 1 in t && L(t[0])) && !t.nodeType && t !== s
        },
        Wt = function (t, e, n) {
            return void 0 === n && (n = []), t.forEach((function (t) {
                var r;
                return O(t) && !e || Ht(t, 1) ? (r = n).push.apply(r, Ut(t)) : n.push(t)
            })) || n
        },
        Ut = function (t, e) {
            return !O(t) || e || !l && pe() ? Y(t) ? Wt(t, e) : Ht(t) ? It.call(t, 0) : t ? [t] : [] : It.call(u.querySelectorAll(t), 0)
        },
        Vt = function (t) {
            return t.sort((function () {
                return .5 - Math.random()
            }))
        },
        jt = function (t) {
            if (E(t)) return t;
            var e = L(t) ? t : {
                    each: t
                },
                n = xe(e.ease),
                r = e.from || 0,
                i = parseFloat(e.base) || 0,
                o = {},
                a = r > 0 && r < 1,
                s = isNaN(r) || a,
                l = e.axis,
                u = r,
                c = r;
            return O(r) ? u = c = {
                    center: .5,
                    edges: .5,
                    end: 1
                } [r] || 0 : !a && s && (u = r[0], c = r[1]),
                function (t, a, h) {
                    var f, p, d, g, _, m, v, y, b, w = (h || e).length,
                        T = o[w];
                    if (!T) {
                        if (!(b = "auto" === e.grid ? 0 : (e.grid || [1, x])[1])) {
                            for (v = -x; v < (v = h[b++].getBoundingClientRect().left) && b < w;);
                            b--
                        }
                        for (T = o[w] = [], f = s ? Math.min(b, w) * u - .5 : r % b, p = s ? w * c / b - .5 : r / b | 0, v = 0, y = x, m = 0; m < w; m++) d = m % b - f, g = p - (m / b | 0), T[m] = _ = l ? Math.abs("y" === l ? g : d) : M(d * d + g * g), _ > v && (v = _), _ < y && (y = _);
                        "random" === r && Vt(T), T.max = v - y, T.min = y, T.v = w = (parseFloat(e.amount) || parseFloat(e.each) * (b > w ? w - 1 : l ? "y" === l ? w / b : b : Math.max(b, w / b)) || 0) * ("edges" === r ? -1 : 1), T.b = w < 0 ? i - w : i, T.u = qt(e.amount || e.each) || 0, n = n && w < 0 ? ve(n) : n
                    }
                    return w = (T[t] - T.min) / T.max || 0, ut(T.b + (n ? n(w) : w) * T.v) + T.u
                }
        },
        Gt = function (t) {
            var e = t < 1 ? Math.pow(10, (t + "").length - 2) : 1;
            return function (n) {
                var r = Math.round(parseFloat(n) / t) * t * e;
                return (r - r % 1) / e + (A(n) ? 0 : qt(n))
            }
        },
        Qt = function (t, e) {
            var n, r, i = Y(t);
            return !i && L(t) && (n = i = t.radius || x, t.values ? (t = Ut(t.values), (r = !A(t[0])) && (n *= n)) : t = Gt(t.increment)), Bt(e, i ? E(t) ? function (e) {
                return r = t(e), Math.abs(r - e) <= n ? r : e
            } : function (e) {
                for (var i, o, a = parseFloat(r ? e.x : e), s = parseFloat(r ? e.y : 0), l = x, u = 0, c = t.length; c--;)(i = r ? (i = t[c].x - a) * i + (o = t[c].y - s) * o : Math.abs(t[c] - a)) < l && (l = i, u = c);
                return u = !n || l <= n ? t[u] : e, r || u === e || A(e) ? u : u + qt(e)
            } : Gt(t))
        },
        Kt = function (t, e, n, r) {
            return Bt(Y(t) ? !e : !0 === n ? !!(n = 0) : !r, (function () {
                return Y(t) ? t[~~(Math.random() * t.length)] : (n = n || 1e-5) && (r = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) && Math.floor(Math.round((t - n / 2 + Math.random() * (e - t + .99 * n)) / n) * n * r) / r
            }))
        },
        Zt = function (t, e, n) {
            return Bt(n, (function (n) {
                return t[~~e(n)]
            }))
        },
        $t = function (t) {
            for (var e, n, r, i, o = 0, a = ""; ~(e = t.indexOf("random(", o));) r = t.indexOf(")", e), i = "[" === t.charAt(e + 7), n = t.substr(e + 7, r - e - 7).match(i ? I : N), a += t.substr(o, e - o) + Kt(i ? n : +n[0], i ? 0 : +n[1], +n[2] || 1e-5), o = r + 1;
            return a + t.substr(o, t.length - o)
        },
        Jt = function (t, e, n, r, i) {
            var o = e - t,
                a = r - n;
            return Bt(i, (function (e) {
                return n + ((e - t) / o * a || 0)
            }))
        },
        te = function (t, e, n) {
            var r, i, o, a = t.labels,
                s = x;
            for (r in a)(i = a[r] - e) < 0 == !!n && i && s > (i = Math.abs(i)) && (o = r, s = i);
            return o
        },
        ee = function (t, e, n) {
            var r, i, o = t.vars,
                a = o[e];
            if (a) return r = o[e + "Params"], i = o.callbackScope || t, n && $.length && ft(), r ? a.apply(i, r) : a.call(i)
        },
        ne = function (t) {
            return Tt(t), t.scrollTrigger && t.scrollTrigger.kill(!1), t.progress() < 1 && ee(t, "onInterrupt"), t
        },
        re = function (t) {
            var e = (t = !t.name && t.default || t).name,
                n = E(t),
                r = e && !n && t.init ? function () {
                    this._props = []
                } : t,
                i = {
                    init: K,
                    render: Ue,
                    add: Ce,
                    kill: je,
                    modifier: Ve,
                    rawVars: 0
                },
                o = {
                    targetTest: 0,
                    get: 0,
                    getSetter: qe,
                    aliases: {},
                    register: 0
                };
            if (pe(), t !== r) {
                if (tt[e]) return;
                _t(r, _t(xt(t, i), o)), vt(r.prototype, vt(i, xt(t, o))), tt[r.prop = e] = r, t.targetTest && (rt.push(r), Z[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
            }
            Q(e, r), t.register && t.register(tn, r, Ke)
        },
        ie = {
            aqua: [0, 255, 255],
            lime: [0, 255, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, 255],
            navy: [0, 0, 128],
            white: [255, 255, 255],
            olive: [128, 128, 0],
            yellow: [255, 255, 0],
            orange: [255, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [255, 0, 0],
            pink: [255, 192, 203],
            cyan: [0, 255, 255],
            transparent: [255, 255, 255, 0]
        },
        oe = function (t, e, n) {
            return 255 * (6 * (t = t < 0 ? t + 1 : t > 1 ? t - 1 : t) < 1 ? e + (n - e) * t * 6 : t < .5 ? n : 3 * t < 2 ? e + (n - e) * (2 / 3 - t) * 6 : e) + .5 | 0
        },
        ae = function (t, e, n) {
            var r, i, o, a, s, l, u, c, h, f, p = t ? A(t) ? [t >> 16, t >> 8 & 255, 255 & t] : 0 : ie.black;
            if (!p) {
                if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), ie[t]) p = ie[t];
                else if ("#" === t.charAt(0)) {
                    if (t.length < 6 && (r = t.charAt(1), i = t.charAt(2), o = t.charAt(3), t = "#" + r + r + i + i + o + o + (5 === t.length ? t.charAt(4) + t.charAt(4) : "")), 9 === t.length) return [(p = parseInt(t.substr(1, 6), 16)) >> 16, p >> 8 & 255, 255 & p, parseInt(t.substr(7), 16) / 255];
                    p = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & 255, 255 & t]
                } else if ("hsl" === t.substr(0, 3))
                    if (p = f = t.match(N), e) {
                        if (~t.indexOf("=")) return p = t.match(F), n && p.length < 4 && (p[3] = 1), p
                    } else a = +p[0] % 360 / 360, s = +p[1] / 100, r = 2 * (l = +p[2] / 100) - (i = l <= .5 ? l * (s + 1) : l + s - l * s), p.length > 3 && (p[3] *= 1), p[0] = oe(a + 1 / 3, r, i), p[1] = oe(a, r, i), p[2] = oe(a - 1 / 3, r, i);
                else p = t.match(N) || ie.transparent;
                p = p.map(Number)
            }
            return e && !f && (r = p[0] / 255, i = p[1] / 255, o = p[2] / 255, l = ((u = Math.max(r, i, o)) + (c = Math.min(r, i, o))) / 2, u === c ? a = s = 0 : (h = u - c, s = l > .5 ? h / (2 - u - c) : h / (u + c), a = u === r ? (i - o) / h + (i < o ? 6 : 0) : u === i ? (o - r) / h + 2 : (r - i) / h + 4, a *= 60), p[0] = ~~(a + .5), p[1] = ~~(100 * s + .5), p[2] = ~~(100 * l + .5)), n && p.length < 4 && (p[3] = 1), p
        },
        se = function (t) {
            var e = [],
                n = [],
                r = -1;
            return t.split(ue).forEach((function (t) {
                var i = t.match(B) || [];
                e.push.apply(e, i), n.push(r += i.length + 1)
            })), e.c = n, e
        },
        le = function (t, e, n) {
            var r, i, o, a, s = "",
                l = (t + s).match(ue),
                u = e ? "hsla(" : "rgba(",
                c = 0;
            if (!l) return t;
            if (l = l.map((function (t) {
                    return (t = ae(t, e, 1)) && u + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
                })), n && (o = se(t), (r = n.c).join(s) !== o.c.join(s)))
                for (a = (i = t.replace(ue, "1").split(B)).length - 1; c < a; c++) s += i[c] + (~r.indexOf(c) ? l.shift() || u + "0,0,0,0)" : (o.length ? o : l.length ? l : n).shift());
            if (!i)
                for (a = (i = t.split(ue)).length - 1; c < a; c++) s += i[c] + l[c];
            return s + i[a]
        },
        ue = function () {
            var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
            for (t in ie) e += "|" + t + "\\b";
            return new RegExp(e + ")", "gi")
        }(),
        ce = /hsl[a]?\(/,
        he = function (t) {
            var e, n = t.join(" ");
            if (ue.lastIndex = 0, ue.test(n)) return e = ce.test(n), t[1] = le(t[1], e), t[0] = le(t[0], e, se(t[1])), !0
        },
        fe = function () {
            var t, e, n, r, i, o, a = Date.now,
                h = 500,
                f = 33,
                d = a(),
                g = d,
                _ = 1e3 / 240,
                m = _,
                v = [],
                y = function n(s) {
                    var l, u, c, p, y = a() - g,
                        x = !0 === s;
                    if (y > h && (d += y - f), ((l = (c = (g += y) - d) - m) > 0 || x) && (p = ++r.frame, i = c - 1e3 * r.time, r.time = c /= 1e3, m += l + (l >= _ ? 4 : _ - l), u = 1), x || (t = e(n)), u)
                        for (o = 0; o < v.length; o++) v[o](c, i, p, s)
                };
            return r = {
                time: 0,
                frame: 0,
                tick: function () {
                    y(!0)
                },
                deltaRatio: function (t) {
                    return i / (1e3 / (t || 60))
                },
                wake: function () {
                    c && (!l && P() && (s = l = window, u = s.document || {}, W.gsap = tn, (s.gsapVersions || (s.gsapVersions = [])).push(tn.version), V(U || s.GreenSockGlobals || !s.gsap && s || {}), n = s.requestAnimationFrame), t && r.sleep(), e = n || function (t) {
                        return setTimeout(t, m - 1e3 * r.time + 1 | 0)
                    }, p = 1, y(2))
                },
                sleep: function () {
                    (n ? s.cancelAnimationFrame : clearTimeout)(t), p = 0, e = K
                },
                lagSmoothing: function (t, e) {
                    h = t || 1 / 1e-8, f = Math.min(e, h, 0)
                },
                fps: function (t) {
                    _ = 1e3 / (t || 240), m = 1e3 * r.time + _
                },
                add: function (t) {
                    v.indexOf(t) < 0 && v.push(t), pe()
                },
                remove: function (t) {
                    var e;
                    ~(e = v.indexOf(t)) && v.splice(e, 1) && o >= e && o--
                },
                _listeners: v
            }
        }(),
        pe = function () {
            return !p && fe.wake()
        },
        de = {},
        ge = /^[\d.\-M][\d.\-,\s]/,
        _e = /["']/g,
        me = function (t) {
            for (var e, n, r, i = {}, o = t.substr(1, t.length - 3).split(":"), a = o[0], s = 1, l = o.length; s < l; s++) n = o[s], e = s !== l - 1 ? n.lastIndexOf(",") : n.length, r = n.substr(0, e), i[a] = isNaN(r) ? r.replace(_e, "").trim() : +r, a = n.substr(e + 1).trim();
            return i
        },
        ve = function (t) {
            return function (e) {
                return 1 - t(1 - e)
            }
        },
        ye = function t(e, n) {
            for (var r, i = e._first; i;) i instanceof Oe ? t(i, n) : !i.vars.yoyoEase || i._yoyo && i._repeat || i._yoyo === n || (i.timeline ? t(i.timeline, n) : (r = i._ease, i._ease = i._yEase, i._yEase = r, i._yoyo = n)), i = i._next
        },
        xe = function (t, e) {
            return t && (E(t) ? t : de[t] || function (t) {
                var e, n, r, i, o = (t + "").split("("),
                    a = de[o[0]];
                return a && o.length > 1 && a.config ? a.config.apply(null, ~t.indexOf("{") ? [me(o[1])] : (e = t, n = e.indexOf("(") + 1, r = e.indexOf(")"), i = e.indexOf("(", n), e.substring(n, ~i && i < r ? e.indexOf(")", r + 1) : r)).split(",").map(dt)) : de._CE && ge.test(t) ? de._CE("", t) : a
            }(t)) || e
        },
        be = function (t, e, n, r) {
            void 0 === n && (n = function (t) {
                return 1 - e(1 - t)
            }), void 0 === r && (r = function (t) {
                return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
            });
            var i, o = {
                easeIn: e,
                easeOut: n,
                easeInOut: r
            };
            return lt(t, (function (t) {
                for (var e in de[t] = W[t] = o, de[i = t.toLowerCase()] = n, o) de[i + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = de[t + "." + e] = o[e]
            })), o
        },
        we = function (t) {
            return function (e) {
                return e < .5 ? (1 - t(1 - 2 * e)) / 2 : .5 + t(2 * (e - .5)) / 2
            }
        },
        Te = function t(e, n, r) {
            var i = n >= 1 ? n : 1,
                o = (r || (e ? .3 : .45)) / (n < 1 ? n : 1),
                a = o / b * (Math.asin(1 / i) || 0),
                s = function (t) {
                    return 1 === t ? 1 : i * Math.pow(2, -10 * t) * S((t - a) * o) + 1
                },
                l = "out" === e ? s : "in" === e ? function (t) {
                    return 1 - s(1 - t)
                } : we(s);
            return o = b / o, l.config = function (n, r) {
                return t(e, n, r)
            }, l
        },
        Me = function t(e, n) {
            void 0 === n && (n = 1.70158);
            var r = function (t) {
                    return t ? --t * t * ((n + 1) * t + n) + 1 : 0
                },
                i = "out" === e ? r : "in" === e ? function (t) {
                    return 1 - r(1 - t)
                } : we(r);
            return i.config = function (n) {
                return t(e, n)
            }, i
        };
    lt("Linear,Quad,Cubic,Quart,Quint,Strong", (function (t, e) {
        var n = e < 5 ? e + 1 : e;
        be(t + ",Power" + (n - 1), e ? function (t) {
            return Math.pow(t, n)
        } : function (t) {
            return t
        }, (function (t) {
            return 1 - Math.pow(1 - t, n)
        }), (function (t) {
            return t < .5 ? Math.pow(2 * t, n) / 2 : 1 - Math.pow(2 * (1 - t), n) / 2
        }))
    })), de.Linear.easeNone = de.none = de.Linear.easeIn, be("Elastic", Te("in"), Te("out"), Te()), d = 7.5625, _ = 1 / (g = 2.75), be("Bounce", (function (t) {
        return 1 - m(1 - t)
    }), m = function (t) {
        return t < _ ? d * t * t : t < .7272727272727273 ? d * Math.pow(t - 1.5 / g, 2) + .75 : t < .9090909090909092 ? d * (t -= 2.25 / g) * t + .9375 : d * Math.pow(t - 2.625 / g, 2) + .984375
    }), be("Expo", (function (t) {
        return t ? Math.pow(2, 10 * (t - 1)) : 0
    })), be("Circ", (function (t) {
        return -(M(1 - t * t) - 1)
    })), be("Sine", (function (t) {
        return 1 === t ? 1 : 1 - k(t * w)
    })), be("Back", Me("in"), Me("out"), Me()), de.SteppedEase = de.steps = W.SteppedEase = {
        config: function (t, e) {
            void 0 === t && (t = 1);
            var n = 1 / t,
                r = t + (e ? 0 : 1),
                i = e ? 1 : 0;
            return function (t) {
                return ((r * zt(0, 1 - 1e-8, t) | 0) + i) * n
            }
        }
    }, y.ease = de["quad.out"], lt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", (function (t) {
        return it += t + "," + t + "Params,"
    }));
    var ke = function (t, e) {
            this.id = T++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : st, this.set = e ? e.getSetter : qe
        },
        Se = function () {
            function t(t, e) {
                var n = t.parent || a;
                this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, Xt(this, +t.duration, 1, 1), this.data = t.data, p || fe.wake(), n && Dt(n, this, e || 0 === e ? e : n._time, 1), t.reversed && this.reverse(), t.paused && this.paused(!0)
            }
            var e = t.prototype;
            return e.delay = function (t) {
                return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay
            }, e.duration = function (t) {
                return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
            }, e.totalDuration = function (t) {
                return arguments.length ? (this._dirty = 0, Xt(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
            }, e.totalTime = function (t, e) {
                if (pe(), !arguments.length) return this._tTime;
                var n = this._dp;
                if (n && n.smoothChildTiming && this._ts) {
                    for (Ct(this, t), !n._dp || n.parent || Lt(n, this); n.parent;) n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), n = n.parent;
                    !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && t < this._tDur || this._ts < 0 && t > 0 || !this._tDur && !t) && Dt(this._dp, this, this._start - this._delay)
                }
                return (this._tTime !== t || !this._dur && !e || this._initted && 1e-8 === Math.abs(this._zTime) || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), pt(this, t, e)), this
            }, e.time = function (t, e) {
                return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + St(this)) % this._dur || (t ? this._dur : 0), e) : this._time
            }, e.totalProgress = function (t, e) {
                return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
            }, e.progress = function (t, e) {
                return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + St(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
            }, e.iteration = function (t, e) {
                var n = this.duration() + this._rDelay;
                return arguments.length ? this.totalTime(this._time + (t - 1) * n, e) : this._repeat ? Ot(this._tTime, n) + 1 : 1
            }, e.timeScale = function (t) {
                if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
                if (this._rts === t) return this;
                var e = this.parent && this._ts ? Et(this.parent._time, this) : this._tTime;
                return this._rts = +t || 0, this._ts = this._ps || -1e-8 === t ? 0 : this._rts, kt(this.totalTime(zt(-this._delay, this._tDur, e), !0))
            }, e.paused = function (t) {
                return arguments.length ? (this._ps !== t && (this._ps = t, t ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (pe(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && (this._tTime -= 1e-8) && 1e-8 !== Math.abs(this._zTime)))), this) : this._ps
            }, e.startTime = function (t) {
                if (arguments.length) {
                    this._start = t;
                    var e = this.parent || this._dp;
                    return e && (e._sort || !this.parent) && Dt(e, this, t - this._delay), this
                }
                return this._start
            }, e.endTime = function (t) {
                return this._start + (D(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts)
            }, e.rawTime = function (t) {
                var e = this.parent || this._dp;
                return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Et(e.rawTime(t), this) : this._tTime : this._tTime
            }, e.globalTime = function (t) {
                for (var e = this, n = arguments.length ? t : e.rawTime(); e;) n = e._start + n / (e._ts || 1), e = e._dp;
                return n
            }, e.repeat = function (t) {
                return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t, Yt(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
            }, e.repeatDelay = function (t) {
                return arguments.length ? (this._rDelay = t, Yt(this)) : this._rDelay
            }, e.yoyo = function (t) {
                return arguments.length ? (this._yoyo = t, this) : this._yoyo
            }, e.seek = function (t, e) {
                return this.totalTime(Ft(this, t), D(e))
            }, e.restart = function (t, e) {
                return this.play().totalTime(t ? -this._delay : 0, D(e))
            }, e.play = function (t, e) {
                return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
            }, e.reverse = function (t, e) {
                return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
            }, e.pause = function (t, e) {
                return null != t && this.seek(t, e), this.paused(!0)
            }, e.resume = function () {
                return this.paused(!1)
            }, e.reversed = function (t) {
                return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -1e-8 : 0)), this) : this._rts < 0
            }, e.invalidate = function () {
                return this._initted = this._act = 0, this._zTime = -1e-8, this
            }, e.isActive = function () {
                var t, e = this.parent || this._dp,
                    n = this._start;
                return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= n && t < this.endTime(!0) - 1e-8))
            }, e.eventCallback = function (t, e, n) {
                var r = this.vars;
                return arguments.length > 1 ? (e ? (r[t] = e, n && (r[t + "Params"] = n), "onUpdate" === t && (this._onUpdate = e)) : delete r[t], this) : r[t]
            }, e.then = function (t) {
                var e = this;
                return new Promise((function (n) {
                    var r = E(t) ? t : gt,
                        i = function () {
                            var t = e.then;
                            e.then = null, E(r) && (r = r(e)) && (r.then || r === e) && (e.then = t), n(r), e.then = t
                        };
                    e._initted && 1 === e.totalProgress() && e._ts >= 0 || !e._tTime && e._ts < 0 ? i() : e._prom = i
                }))
            }, e.kill = function () {
                ne(this)
            }, t
        }();
    _t(Se.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -1e-8,
        _prom: 0,
        _ps: !1,
        _rts: 1
    });
    var Oe = function (t) {
        function e(e, n) {
            var i;
            return void 0 === e && (e = {}), (i = t.call(this, e, n) || this).labels = {}, i.smoothChildTiming = !!e.smoothChildTiming, i.autoRemoveChildren = !!e.autoRemoveChildren, i._sort = D(e.sortChildren), i.parent && Lt(i.parent, r(i)), e.scrollTrigger && Pt(r(i), e.scrollTrigger), i
        }
        i(e, t);
        var n = e.prototype;
        return n.to = function (t, e, n) {
            return new Ye(t, ht(arguments, 0, this), Ft(this, A(e) ? arguments[3] : n)), this
        }, n.from = function (t, e, n) {
            return new Ye(t, ht(arguments, 1, this), Ft(this, A(e) ? arguments[3] : n)), this
        }, n.fromTo = function (t, e, n, r) {
            return new Ye(t, ht(arguments, 2, this), Ft(this, A(e) ? arguments[4] : r)), this
        }, n.set = function (t, e, n) {
            return e.duration = 0, e.parent = this, bt(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new Ye(t, e, Ft(this, n), 1), this
        }, n.call = function (t, e, n) {
            return Dt(this, Ye.delayedCall(0, t, e), Ft(this, n))
        }, n.staggerTo = function (t, e, n, r, i, o, a) {
            return n.duration = e, n.stagger = n.stagger || r, n.onComplete = o, n.onCompleteParams = a, n.parent = this, new Ye(t, n, Ft(this, i)), this
        }, n.staggerFrom = function (t, e, n, r, i, o, a) {
            return n.runBackwards = 1, bt(n).immediateRender = D(n.immediateRender), this.staggerTo(t, e, n, r, i, o, a)
        }, n.staggerFromTo = function (t, e, n, r, i, o, a, s) {
            return r.startAt = n, bt(r).immediateRender = D(r.immediateRender), this.staggerTo(t, e, r, i, o, a, s)
        }, n.render = function (t, e, n) {
            var r, i, o, s, l, u, c, h, f, p, d, g, _ = this._time,
                m = this._dirty ? this.totalDuration() : this._tDur,
                v = this._dur,
                y = this !== a && t > m - 1e-8 && t >= 0 ? m : t < 1e-8 ? 0 : t,
                x = this._zTime < 0 != t < 0 && (this._initted || !v);
            if (y !== this._tTime || n || x) {
                if (_ !== this._time && v && (y += this._time - _, t += this._time - _), r = y, f = this._start, u = !(h = this._ts), x && (v || (_ = this._zTime), (t || !e) && (this._zTime = t)), this._repeat) {
                    if (d = this._yoyo, l = v + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * l + t, e, n);
                    if (r = ut(y % l), y === m ? (s = this._repeat, r = v) : ((s = ~~(y / l)) && s === y / l && (r = v, s--), r > v && (r = v)), p = Ot(this._tTime, l), !_ && this._tTime && p !== s && (p = s), d && 1 & s && (r = v - r, g = 1), s !== p && !this._lock) {
                        var b = d && 1 & p,
                            w = b === (d && 1 & s);
                        if (s < p && (b = !b), _ = b ? 0 : v, this._lock = 1, this.render(_ || (g ? 0 : ut(s * l)), e, !v)._lock = 0, !e && this.parent && ee(this, "onRepeat"), this.vars.repeatRefresh && !g && (this.invalidate()._lock = 1), _ && _ !== this._time || u !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                        if (v = this._dur, m = this._tDur, w && (this._lock = 2, _ = b ? v : -1e-4, this.render(_, !0)), this._lock = 0, !this._ts && !u) return this;
                        ye(this, g)
                    }
                }
                if (this._hasPause && !this._forcing && this._lock < 2 && (c = function (t, e, n) {
                        var r;
                        if (n > e)
                            for (r = t._first; r && r._start <= n;) {
                                if (!r._dur && "isPause" === r.data && r._start > e) return r;
                                r = r._next
                            } else
                                for (r = t._last; r && r._start >= n;) {
                                    if (!r._dur && "isPause" === r.data && r._start < e) return r;
                                    r = r._prev
                                }
                    }(this, ut(_), ut(r))) && (y -= r - (r = c._start)), this._tTime = y, this._time = r, this._act = !h, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t, _ = 0), !_ && r && !e && ee(this, "onStart"), r >= _ && t >= 0)
                    for (i = this._first; i;) {
                        if (o = i._next, (i._act || r >= i._start) && i._ts && c !== i) {
                            if (i.parent !== this) return this.render(t, e, n);
                            if (i.render(i._ts > 0 ? (r - i._start) * i._ts : (i._dirty ? i.totalDuration() : i._tDur) + (r - i._start) * i._ts, e, n), r !== this._time || !this._ts && !u) {
                                c = 0, o && (y += this._zTime = -1e-8);
                                break
                            }
                        }
                        i = o
                    } else {
                        i = this._last;
                        for (var T = t < 0 ? t : r; i;) {
                            if (o = i._prev, (i._act || T <= i._end) && i._ts && c !== i) {
                                if (i.parent !== this) return this.render(t, e, n);
                                if (i.render(i._ts > 0 ? (T - i._start) * i._ts : (i._dirty ? i.totalDuration() : i._tDur) + (T - i._start) * i._ts, e, n), r !== this._time || !this._ts && !u) {
                                    c = 0, o && (y += this._zTime = T ? -1e-8 : 1e-8);
                                    break
                                }
                            }
                            i = o
                        }
                    }
                if (c && !e && (this.pause(), c.render(r >= _ ? 0 : -1e-8)._zTime = r >= _ ? 1 : -1, this._ts)) return this._start = f, At(this), this.render(t, e, n);
                this._onUpdate && !e && ee(this, "onUpdate", !0), (y === m && m >= this.totalDuration() || !y && _) && (f !== this._start && Math.abs(h) === Math.abs(this._ts) || this._lock || ((t || !v) && (y === m && this._ts > 0 || !y && this._ts < 0) && Tt(this, 1), e || t < 0 && !_ || !y && !_ || (ee(this, y === m ? "onComplete" : "onReverseComplete", !0), this._prom && !(y < m && this.timeScale() > 0) && this._prom())))
            }
            return this
        }, n.add = function (t, e) {
            var n = this;
            if (A(e) || (e = Ft(this, e)), !(t instanceof Se)) {
                if (Y(t)) return t.forEach((function (t) {
                    return n.add(t, e)
                })), this;
                if (O(t)) return this.addLabel(t, e);
                if (!E(t)) return this;
                t = Ye.delayedCall(0, t)
            }
            return this !== t ? Dt(this, t, e) : this
        }, n.getChildren = function (t, e, n, r) {
            void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === n && (n = !0), void 0 === r && (r = -x);
            for (var i = [], o = this._first; o;) o._start >= r && (o instanceof Ye ? e && i.push(o) : (n && i.push(o), t && i.push.apply(i, o.getChildren(!0, e, n)))), o = o._next;
            return i
        }, n.getById = function (t) {
            for (var e = this.getChildren(1, 1, 1), n = e.length; n--;)
                if (e[n].vars.id === t) return e[n]
        }, n.remove = function (t) {
            return O(t) ? this.removeLabel(t) : E(t) ? this.killTweensOf(t) : (wt(this, t), t === this._recent && (this._recent = this._last), Mt(this))
        }, n.totalTime = function (e, n) {
            return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = ut(fe.time - (this._ts > 0 ? e / this._ts : (this.totalDuration() - e) / -this._ts))), t.prototype.totalTime.call(this, e, n), this._forcing = 0, this) : this._tTime
        }, n.addLabel = function (t, e) {
            return this.labels[t] = Ft(this, e), this
        }, n.removeLabel = function (t) {
            return delete this.labels[t], this
        }, n.addPause = function (t, e, n) {
            var r = Ye.delayedCall(0, e || K, n);
            return r.data = "isPause", this._hasPause = 1, Dt(this, r, Ft(this, t))
        }, n.removePause = function (t) {
            var e = this._first;
            for (t = Ft(this, t); e;) e._start === t && "isPause" === e.data && Tt(e), e = e._next
        }, n.killTweensOf = function (t, e, n) {
            for (var r = this.getTweensOf(t, n), i = r.length; i--;) Ee !== r[i] && r[i].kill(t, e);
            return this
        }, n.getTweensOf = function (t, e) {
            for (var n, r = [], i = Ut(t), o = this._first, a = A(e); o;) o instanceof Ye ? ct(o._targets, i) && (a ? (!Ee || o._initted && o._ts) && o.globalTime(0) <= e && o.globalTime(o.totalDuration()) > e : !e || o.isActive()) && r.push(o) : (n = o.getTweensOf(i, e)).length && r.push.apply(r, n), o = o._next;
            return r
        }, n.tweenTo = function (t, e) {
            e = e || {};
            var n = this,
                r = Ft(n, t),
                i = e,
                o = i.startAt,
                a = i.onStart,
                s = i.onStartParams,
                l = i.immediateRender,
                u = Ye.to(n, _t({
                    ease: e.ease || "none",
                    lazy: !1,
                    immediateRender: !1,
                    time: r,
                    overwrite: "auto",
                    duration: e.duration || Math.abs((r - (o && "time" in o ? o.time : n._time)) / n.timeScale()) || 1e-8,
                    onStart: function () {
                        n.pause();
                        var t = e.duration || Math.abs((r - n._time) / n.timeScale());
                        u._dur !== t && Xt(u, t, 0, 1).render(u._time, !0, !0), a && a.apply(u, s || [])
                    }
                }, e));
            return l ? u.render(0) : u
        }, n.tweenFromTo = function (t, e, n) {
            return this.tweenTo(e, _t({
                startAt: {
                    time: Ft(this, t)
                }
            }, n))
        }, n.recent = function () {
            return this._recent
        }, n.nextLabel = function (t) {
            return void 0 === t && (t = this._time), te(this, Ft(this, t))
        }, n.previousLabel = function (t) {
            return void 0 === t && (t = this._time), te(this, Ft(this, t), 1)
        }, n.currentLabel = function (t) {
            return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + 1e-8)
        }, n.shiftChildren = function (t, e, n) {
            void 0 === n && (n = 0);
            for (var r, i = this._first, o = this.labels; i;) i._start >= n && (i._start += t, i._end += t), i = i._next;
            if (e)
                for (r in o) o[r] >= n && (o[r] += t);
            return Mt(this)
        }, n.invalidate = function () {
            var e = this._first;
            for (this._lock = 0; e;) e.invalidate(), e = e._next;
            return t.prototype.invalidate.call(this)
        }, n.clear = function (t) {
            void 0 === t && (t = !0);
            for (var e, n = this._first; n;) e = n._next, this.remove(n), n = e;
            return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), Mt(this)
        }, n.totalDuration = function (t) {
            var e, n, r, i = 0,
                o = this,
                s = o._last,
                l = x;
            if (arguments.length) return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -t : t));
            if (o._dirty) {
                for (r = o.parent; s;) e = s._prev, s._dirty && s.totalDuration(), (n = s._start) > l && o._sort && s._ts && !o._lock ? (o._lock = 1, Dt(o, s, n - s._delay, 1)._lock = 0) : l = n, n < 0 && s._ts && (i -= n, (!r && !o._dp || r && r.smoothChildTiming) && (o._start += n / o._ts, o._time -= n, o._tTime -= n), o.shiftChildren(-n, !1, -Infinity), l = 0), s._end > i && s._ts && (i = s._end), s = e;
                Xt(o, o === a && o._time > i ? o._time : i, 1, 1), o._dirty = 0
            }
            return o._tDur
        }, e.updateRoot = function (t) {
            if (a._ts && (pt(a, Et(t, a)), h = fe.frame), fe.frame >= nt) {
                nt += v.autoSleep || 120;
                var e = a._first;
                if ((!e || !e._ts) && v.autoSleep && fe._listeners.length < 2) {
                    for (; e && !e._ts;) e = e._next;
                    e || fe.sleep()
                }
            }
        }, e
    }(Se);
    _t(Oe.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
    });
    var Ee, Ae = function (t, e, n, r, i, o, a) {
            var s, l, u, c, h, f, p, d, g = new Ke(this._pt, t, e, 0, 1, We, null, i),
                _ = 0,
                m = 0;
            for (g.b = n, g.e = r, n += "", (p = ~(r += "").indexOf("random(")) && (r = $t(r)), o && (o(d = [n, r], t, e), n = d[0], r = d[1]), l = n.match(z) || []; s = z.exec(r);) c = s[0], h = r.substring(_, s.index), u ? u = (u + 1) % 5 : "rgba(" === h.substr(-5) && (u = 1), c !== l[m++] && (f = parseFloat(l[m - 1]) || 0, g._pt = {
                _next: g._pt,
                p: h || 1 === m ? h : ",",
                s: f,
                c: "=" === c.charAt(1) ? parseFloat(c.substr(2)) * ("-" === c.charAt(0) ? -1 : 1) : parseFloat(c) - f,
                m: u && u < 4 ? Math.round : 0
            }, _ = z.lastIndex);
            return g.c = _ < r.length ? r.substring(_, r.length) : "", g.fp = a, (q.test(r) || p) && (g.e = 0), this._pt = g, g
        },
        Ce = function (t, e, n, r, i, o, a, s, l) {
            E(r) && (r = r(i || 0, t, o));
            var u, c = t[e],
                h = "get" !== n ? n : E(c) ? l ? t[e.indexOf("set") || !E(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](l) : t[e]() : c,
                f = E(c) ? l ? Be : Fe : Ne;
            if (O(r) && (~r.indexOf("random(") && (r = $t(r)), "=" === r.charAt(1) && (r = parseFloat(h) + parseFloat(r.substr(2)) * ("-" === r.charAt(0) ? -1 : 1) + (qt(h) || 0))), h !== r) return isNaN(h * r) ? (!c && !(e in t) && j(e, r), Ae.call(this, t, e, h, r, f, s || v.stringFilter, l)) : (u = new Ke(this._pt, t, e, +h || 0, r - (h || 0), "boolean" == typeof c ? He : Ie, 0, f), l && (u.fp = l), a && u.modifier(a, this, t), this._pt = u)
        },
        Le = function (t, e, n, r, i, o) {
            var a, s, l, u;
            if (tt[t] && !1 !== (a = new tt[t]).init(i, a.rawVars ? e[t] : function (t, e, n, r, i) {
                    if (E(t) && (t = Pe(t, i, e, n, r)), !L(t) || t.style && t.nodeType || Y(t) || X(t)) return O(t) ? Pe(t, i, e, n, r) : t;
                    var o, a = {};
                    for (o in t) a[o] = Pe(t[o], i, e, n, r);
                    return a
                }(e[t], r, i, o, n), n, r, o) && (n._pt = s = new Ke(n._pt, i, t, 0, 1, a.render, a, 0, a.priority), n !== f))
                for (l = n._ptLookup[n._targets.indexOf(i)], u = a._props.length; u--;) l[a._props[u]] = s;
            return a
        },
        De = function t(e, n) {
            var r, i, s, l, u, c, h, f, p, d, g, _, m, v = e.vars,
                x = v.ease,
                b = v.startAt,
                w = v.immediateRender,
                T = v.lazy,
                M = v.onUpdate,
                k = v.onUpdateParams,
                S = v.callbackScope,
                O = v.runBackwards,
                E = v.yoyoEase,
                A = v.keyframes,
                C = v.autoRevert,
                L = e._dur,
                P = e._startAt,
                R = e._targets,
                X = e.parent,
                Y = X && "nested" === X.data ? X.parent._targets : R,
                N = "auto" === e._overwrite && !o,
                F = e.timeline;
            if (F && (!A || !x) && (x = "none"), e._ease = xe(x, y.ease), e._yEase = E ? ve(xe(!0 === E ? x : E, y.ease)) : 0, E && e._yoyo && !e._repeat && (E = e._yEase, e._yEase = e._ease, e._ease = E), !F) {
                if (_ = (f = R[0] ? at(R[0]).harness : 0) && v[f.prop], r = xt(v, Z), P && P.render(-1, !0).kill(), b)
                    if (Tt(e._startAt = Ye.set(R, _t({
                            data: "isStart",
                            overwrite: !1,
                            parent: X,
                            immediateRender: !0,
                            lazy: D(T),
                            startAt: null,
                            delay: 0,
                            onUpdate: M,
                            onUpdateParams: k,
                            callbackScope: S,
                            stagger: 0
                        }, b))), w) {
                        if (n > 0) C || (e._startAt = 0);
                        else if (L && !(n < 0 && P)) return void(n && (e._zTime = n))
                    } else !1 === C && (e._startAt = 0);
                else if (O && L)
                    if (P) !C && (e._startAt = 0);
                    else if (n && (w = !1), s = _t({
                        overwrite: !1,
                        data: "isFromStart",
                        lazy: w && D(T),
                        immediateRender: w,
                        stagger: 0,
                        parent: X
                    }, r), _ && (s[f.prop] = _), Tt(e._startAt = Ye.set(R, s)), w) {
                    if (!n) return
                } else t(e._startAt, 1e-8);
                for (e._pt = 0, T = L && D(T) || T && !L, i = 0; i < R.length; i++) {
                    if (h = (u = R[i])._gsap || ot(R)[i]._gsap, e._ptLookup[i] = d = {}, J[h.id] && $.length && ft(), g = Y === R ? i : Y.indexOf(u), f && !1 !== (p = new f).init(u, _ || r, e, g, Y) && (e._pt = l = new Ke(e._pt, u, p.name, 0, 1, p.render, p, 0, p.priority), p._props.forEach((function (t) {
                            d[t] = l
                        })), p.priority && (c = 1)), !f || _)
                        for (s in r) tt[s] && (p = Le(s, r, e, g, u, Y)) ? p.priority && (c = 1) : d[s] = l = Ce.call(e, u, s, "get", r[s], g, Y, 0, v.stringFilter);
                    e._op && e._op[i] && e.kill(u, e._op[i]), N && e._pt && (Ee = e, a.killTweensOf(u, d, e.globalTime(0)), m = !e.parent, Ee = 0), e._pt && T && (J[h.id] = 1)
                }
                c && Qe(e), e._onInit && e._onInit(e)
            }
            e._from = !F && !!v.runBackwards, e._onUpdate = M, e._initted = (!e._op || e._pt) && !m
        },
        Pe = function (t, e, n, r, i) {
            return E(t) ? t.call(e, n, r, i) : O(t) && ~t.indexOf("random(") ? $t(t) : t
        },
        Re = it + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
        Xe = (Re + ",id,stagger,delay,duration,paused,scrollTrigger").split(","),
        Ye = function (t) {
            function e(e, n, i, s) {
                var l;
                "number" == typeof n && (i.duration = n, n = i, i = null);
                var u, c, h, f, p, d, g, _, m = (l = t.call(this, s ? n : bt(n), i) || this).vars,
                    y = m.duration,
                    x = m.delay,
                    b = m.immediateRender,
                    w = m.stagger,
                    T = m.overwrite,
                    M = m.keyframes,
                    k = m.defaults,
                    S = m.scrollTrigger,
                    O = m.yoyoEase,
                    E = l.parent,
                    C = (Y(e) || X(e) ? A(e[0]) : "length" in n) ? [e] : Ut(e);
                if (l._targets = C.length ? ot(C) : G("GSAP target " + e + " not found. https://greensock.com", !v.nullTargetWarn) || [], l._ptLookup = [], l._overwrite = T, M || w || R(y) || R(x)) {
                    if (n = l.vars, (u = l.timeline = new Oe({
                            data: "nested",
                            defaults: k || {}
                        })).kill(), u.parent = u._dp = r(l), u._start = 0, M) _t(u.vars.defaults, {
                        ease: "none"
                    }), M.forEach((function (t) {
                        return u.to(C, t, ">")
                    }));
                    else {
                        if (f = C.length, g = w ? jt(w) : K, L(w))
                            for (p in w) ~Re.indexOf(p) && (_ || (_ = {}), _[p] = w[p]);
                        for (c = 0; c < f; c++) {
                            for (p in h = {}, n) Xe.indexOf(p) < 0 && (h[p] = n[p]);
                            h.stagger = 0, O && (h.yoyoEase = O), _ && vt(h, _), d = C[c], h.duration = +Pe(y, r(l), c, d, C), h.delay = (+Pe(x, r(l), c, d, C) || 0) - l._delay, !w && 1 === f && h.delay && (l._delay = x = h.delay, l._start += x, h.delay = 0), u.to(d, h, g(c, d, C))
                        }
                        u.duration() ? y = x = 0 : l.timeline = 0
                    }
                    y || l.duration(y = u.duration())
                } else l.timeline = 0;
                return !0 !== T || o || (Ee = r(l), a.killTweensOf(C), Ee = 0), E && Lt(E, r(l)), (b || !y && !M && l._start === ut(E._time) && D(b) && function t(e) {
                    return !e || e._ts && t(e.parent)
                }(r(l)) && "nested" !== E.data) && (l._tTime = -1e-8, l.render(Math.max(0, -x))), S && Pt(r(l), S), l
            }
            i(e, t);
            var n = e.prototype;
            return n.render = function (t, e, n) {
                var r, i, o, a, s, l, u, c, h, f = this._time,
                    p = this._tDur,
                    d = this._dur,
                    g = t > p - 1e-8 && t >= 0 ? p : t < 1e-8 ? 0 : t;
                if (d) {
                    if (g !== this._tTime || !t || n || !this._initted && this._tTime || this._startAt && this._zTime < 0 != t < 0) {
                        if (r = g, c = this.timeline, this._repeat) {
                            if (a = d + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * a + t, e, n);
                            if (r = ut(g % a), g === p ? (o = this._repeat, r = d) : ((o = ~~(g / a)) && o === g / a && (r = d, o--), r > d && (r = d)), (l = this._yoyo && 1 & o) && (h = this._yEase, r = d - r), s = Ot(this._tTime, a), r === f && !n && this._initted) return this;
                            o !== s && (c && this._yEase && ye(c, l), !this.vars.repeatRefresh || l || this._lock || (this._lock = n = 1, this.render(ut(a * o), !0).invalidate()._lock = 0))
                        }
                        if (!this._initted) {
                            if (Rt(this, t < 0 ? t : r, n, e)) return this._tTime = 0, this;
                            if (d !== this._dur) return this.render(t, e, n)
                        }
                        for (this._tTime = g, this._time = r, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = u = (h || this._ease)(r / d), this._from && (this.ratio = u = 1 - u), r && !f && !e && ee(this, "onStart"), i = this._pt; i;) i.r(u, i.d), i = i._next;
                        c && c.render(t < 0 ? t : !r && l ? -1e-8 : c._dur * u, e, n) || this._startAt && (this._zTime = t), this._onUpdate && !e && (t < 0 && this._startAt && this._startAt.render(t, !0, n), ee(this, "onUpdate")), this._repeat && o !== s && this.vars.onRepeat && !e && this.parent && ee(this, "onRepeat"), g !== this._tDur && g || this._tTime !== g || (t < 0 && this._startAt && !this._onUpdate && this._startAt.render(t, !0, !0), (t || !d) && (g === this._tDur && this._ts > 0 || !g && this._ts < 0) && Tt(this, 1), e || t < 0 && !f || !g && !f || (ee(this, g === p ? "onComplete" : "onReverseComplete", !0), this._prom && !(g < p && this.timeScale() > 0) && this._prom()))
                    }
                } else ! function (t, e, n, r) {
                    var i, o, a, s = t.ratio,
                        l = e < 0 || !e && (!t._start && function t(e) {
                            var n = e.parent;
                            return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || t(n))
                        }(t) || (t._ts < 0 || t._dp._ts < 0) && "isFromStart" !== t.data && "isStart" !== t.data) ? 0 : 1,
                        u = t._rDelay,
                        c = 0;
                    if (u && t._repeat && (c = zt(0, t._tDur, e), o = Ot(c, u), a = Ot(t._tTime, u), t._yoyo && 1 & o && (l = 1 - l), o !== a && (s = 1 - l, t.vars.repeatRefresh && t._initted && t.invalidate())), l !== s || r || 1e-8 === t._zTime || !e && t._zTime) {
                        if (!t._initted && Rt(t, e, r, n)) return;
                        for (a = t._zTime, t._zTime = e || (n ? 1e-8 : 0), n || (n = e && !a), t.ratio = l, t._from && (l = 1 - l), t._time = 0, t._tTime = c, i = t._pt; i;) i.r(l, i.d), i = i._next;
                        t._startAt && e < 0 && t._startAt.render(e, !0, !0), t._onUpdate && !n && ee(t, "onUpdate"), c && t._repeat && !n && t.parent && ee(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === l && (l && Tt(t, 1), n || (ee(t, l ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()))
                    } else t._zTime || (t._zTime = e)
                }(this, t, e, n);
                return this
            }, n.targets = function () {
                return this._targets
            }, n.invalidate = function () {
                return this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(), t.prototype.invalidate.call(this)
            }, n.kill = function (t, e) {
                if (void 0 === e && (e = "all"), !(t || e && "all" !== e)) return this._lazy = this._pt = 0, this.parent ? ne(this) : this;
                if (this.timeline) {
                    var n = this.timeline.totalDuration();
                    return this.timeline.killTweensOf(t, e, Ee && !0 !== Ee.vars.overwrite)._first || ne(this), this.parent && n !== this.timeline.totalDuration() && Xt(this, this._dur * this.timeline._tDur / n, 0, 1), this
                }
                var r, i, o, a, s, l, u, c = this._targets,
                    h = t ? Ut(t) : c,
                    f = this._ptLookup,
                    p = this._pt;
                if ((!e || "all" === e) && function (t, e) {
                        for (var n = t.length, r = n === e.length; r && n-- && t[n] === e[n];);
                        return n < 0
                    }(c, h)) return "all" === e && (this._pt = 0), ne(this);
                for (r = this._op = this._op || [], "all" !== e && (O(e) && (s = {}, lt(e, (function (t) {
                        return s[t] = 1
                    })), e = s), e = function (t, e) {
                        var n, r, i, o, a = t[0] ? at(t[0]).harness : 0,
                            s = a && a.aliases;
                        if (!s) return e;
                        for (r in n = vt({}, e), s)
                            if (r in n)
                                for (i = (o = s[r].split(",")).length; i--;) n[o[i]] = n[r];
                        return n
                    }(c, e)), u = c.length; u--;)
                    if (~h.indexOf(c[u]))
                        for (s in i = f[u], "all" === e ? (r[u] = e, a = i, o = {}) : (o = r[u] = r[u] || {}, a = e), a)(l = i && i[s]) && ("kill" in l.d && !0 !== l.d.kill(s) || wt(this, l, "_pt"), delete i[s]), "all" !== o && (o[s] = 1);
                return this._initted && !this._pt && p && ne(this), this
            }, e.to = function (t, n) {
                return new e(t, n, arguments[2])
            }, e.from = function (t, n) {
                return new e(t, ht(arguments, 1))
            }, e.delayedCall = function (t, n, r, i) {
                return new e(n, 0, {
                    immediateRender: !1,
                    lazy: !1,
                    overwrite: !1,
                    delay: t,
                    onComplete: n,
                    onReverseComplete: n,
                    onCompleteParams: r,
                    onReverseCompleteParams: r,
                    callbackScope: i
                })
            }, e.fromTo = function (t, n, r) {
                return new e(t, ht(arguments, 2))
            }, e.set = function (t, n) {
                return n.duration = 0, n.repeatDelay || (n.repeat = 0), new e(t, n)
            }, e.killTweensOf = function (t, e, n) {
                return a.killTweensOf(t, e, n)
            }, e
        }(Se);
    _t(Ye.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
    }), lt("staggerTo,staggerFrom,staggerFromTo", (function (t) {
        Ye[t] = function () {
            var e = new Oe,
                n = It.call(arguments, 0);
            return n.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, n)
        }
    }));
    var Ne = function (t, e, n) {
            return t[e] = n
        },
        Fe = function (t, e, n) {
            return t[e](n)
        },
        Be = function (t, e, n, r) {
            return t[e](r.fp, n)
        },
        ze = function (t, e, n) {
            return t.setAttribute(e, n)
        },
        qe = function (t, e) {
            return E(t[e]) ? Fe : C(t[e]) && t.setAttribute ? ze : Ne
        },
        Ie = function (t, e) {
            return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4, e)
        },
        He = function (t, e) {
            return e.set(e.t, e.p, !!(e.s + e.c * t), e)
        },
        We = function (t, e) {
            var n = e._pt,
                r = "";
            if (!t && e.b) r = e.b;
            else if (1 === t && e.e) r = e.e;
            else {
                for (; n;) r = n.p + (n.m ? n.m(n.s + n.c * t) : Math.round(1e4 * (n.s + n.c * t)) / 1e4) + r, n = n._next;
                r += e.c
            }
            e.set(e.t, e.p, r, e)
        },
        Ue = function (t, e) {
            for (var n = e._pt; n;) n.r(t, n.d), n = n._next
        },
        Ve = function (t, e, n, r) {
            for (var i, o = this._pt; o;) i = o._next, o.p === r && o.modifier(t, e, n), o = i
        },
        je = function (t) {
            for (var e, n, r = this._pt; r;) n = r._next, r.p === t && !r.op || r.op === t ? wt(this, r, "_pt") : r.dep || (e = 1), r = n;
            return !e
        },
        Ge = function (t, e, n, r) {
            r.mSet(t, e, r.m.call(r.tween, n, r.mt), r)
        },
        Qe = function (t) {
            for (var e, n, r, i, o = t._pt; o;) {
                for (e = o._next, n = r; n && n.pr > o.pr;) n = n._next;
                (o._prev = n ? n._prev : i) ? o._prev._next = o: r = o, (o._next = n) ? n._prev = o : i = o, o = e
            }
            t._pt = r
        },
        Ke = function () {
            function t(t, e, n, r, i, o, a, s, l) {
                this.t = e, this.s = r, this.c = i, this.p = n, this.r = o || Ie, this.d = a || this, this.set = s || Ne, this.pr = l || 0, this._next = t, t && (t._prev = this)
            }
            return t.prototype.modifier = function (t, e, n) {
                this.mSet = this.mSet || this.set, this.set = Ge, this.m = t, this.mt = n, this.tween = e
            }, t
        }();
    lt(it + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", (function (t) {
        return Z[t] = 1
    })), W.TweenMax = W.TweenLite = Ye, W.TimelineLite = W.TimelineMax = Oe, a = new Oe({
        sortChildren: !1,
        defaults: y,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
    }), v.stringFilter = he;
    var Ze = {
        registerPlugin: function () {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
            e.forEach((function (t) {
                return re(t)
            }))
        },
        timeline: function (t) {
            return new Oe(t)
        },
        getTweensOf: function (t, e) {
            return a.getTweensOf(t, e)
        },
        getProperty: function (t, e, n, r) {
            O(t) && (t = Ut(t)[0]);
            var i = at(t || {}).get,
                o = n ? gt : dt;
            return "native" === n && (n = ""), t ? e ? o((tt[e] && tt[e].get || i)(t, e, n, r)) : function (e, n, r) {
                return o((tt[e] && tt[e].get || i)(t, e, n, r))
            } : t
        },
        quickSetter: function (t, e, n) {
            if ((t = Ut(t)).length > 1) {
                var r = t.map((function (t) {
                        return tn.quickSetter(t, e, n)
                    })),
                    i = r.length;
                return function (t) {
                    for (var e = i; e--;) r[e](t)
                }
            }
            t = t[0] || {};
            var o = tt[e],
                a = at(t),
                s = a.harness && (a.harness.aliases || {})[e] || e,
                l = o ? function (e) {
                    var r = new o;
                    f._pt = 0, r.init(t, n ? e + n : e, f, 0, [t]), r.render(1, r), f._pt && Ue(1, f)
                } : a.set(t, s);
            return o ? l : function (e) {
                return l(t, s, n ? e + n : e, a, 1)
            }
        },
        isTweening: function (t) {
            return a.getTweensOf(t, !0).length > 0
        },
        defaults: function (t) {
            return t && t.ease && (t.ease = xe(t.ease, y.ease)), yt(y, t || {})
        },
        config: function (t) {
            return yt(v, t || {})
        },
        registerEffect: function (t) {
            var e = t.name,
                n = t.effect,
                r = t.plugins,
                i = t.defaults,
                o = t.extendTimeline;
            (r || "").split(",").forEach((function (t) {
                return t && !tt[t] && !W[t] && G(e + " effect requires " + t + " plugin.")
            })), et[e] = function (t, e, r) {
                return n(Ut(t), _t(e || {}, i), r)
            }, o && (Oe.prototype[e] = function (t, n, r) {
                return this.add(et[e](t, L(n) ? n : (r = n) && {}, this), r)
            })
        },
        registerEase: function (t, e) {
            de[t] = xe(e)
        },
        parseEase: function (t, e) {
            return arguments.length ? xe(t, e) : de
        },
        getById: function (t) {
            return a.getById(t)
        },
        exportRoot: function (t, e) {
            void 0 === t && (t = {});
            var n, r, i = new Oe(t);
            for (i.smoothChildTiming = D(t.smoothChildTiming), a.remove(i), i._dp = 0, i._time = i._tTime = a._time, n = a._first; n;) r = n._next, !e && !n._dur && n instanceof Ye && n.vars.onComplete === n._targets[0] || Dt(i, n, n._start - n._delay), n = r;
            return Dt(a, i, 0), i
        },
        utils: {
            wrap: function t(e, n, r) {
                var i = n - e;
                return Y(e) ? Zt(e, t(0, e.length), n) : Bt(r, (function (t) {
                    return (i + (t - e) % i) % i + e
                }))
            },
            wrapYoyo: function t(e, n, r) {
                var i = n - e,
                    o = 2 * i;
                return Y(e) ? Zt(e, t(0, e.length - 1), n) : Bt(r, (function (t) {
                    return e + ((t = (o + (t - e) % o) % o || 0) > i ? o - t : t)
                }))
            },
            distribute: jt,
            random: Kt,
            snap: Qt,
            normalize: function (t, e, n) {
                return Jt(t, e, 0, 1, n)
            },
            getUnit: qt,
            clamp: function (t, e, n) {
                return Bt(n, (function (n) {
                    return zt(t, e, n)
                }))
            },
            splitColor: ae,
            toArray: Ut,
            mapRange: Jt,
            pipe: function () {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                return function (t) {
                    return e.reduce((function (t, e) {
                        return e(t)
                    }), t)
                }
            },
            unitize: function (t, e) {
                return function (n) {
                    return t(parseFloat(n)) + (e || qt(n))
                }
            },
            interpolate: function t(e, n, r, i) {
                var o = isNaN(e + n) ? 0 : function (t) {
                    return (1 - t) * e + t * n
                };
                if (!o) {
                    var a, s, l, u, c, h = O(e),
                        f = {};
                    if (!0 === r && (i = 1) && (r = null), h) e = {
                        p: e
                    }, n = {
                        p: n
                    };
                    else if (Y(e) && !Y(n)) {
                        for (l = [], u = e.length, c = u - 2, s = 1; s < u; s++) l.push(t(e[s - 1], e[s]));
                        u--, o = function (t) {
                            t *= u;
                            var e = Math.min(c, ~~t);
                            return l[e](t - e)
                        }, r = n
                    } else i || (e = vt(Y(e) ? [] : {}, e));
                    if (!l) {
                        for (a in n) Ce.call(f, e, a, "get", n[a]);
                        o = function (t) {
                            return Ue(t, f) || (h ? e.p : e)
                        }
                    }
                }
                return Bt(r, o)
            },
            shuffle: Vt
        },
        install: V,
        effects: et,
        ticker: fe,
        updateRoot: Oe.updateRoot,
        plugins: tt,
        globalTimeline: a,
        core: {
            PropTween: Ke,
            globals: Q,
            Tween: Ye,
            Timeline: Oe,
            Animation: Se,
            getCache: at,
            _removeLinkedListItem: wt,
            suppressOverwrites: function (t) {
                return o = t
            }
        }
    };
    lt("to,from,fromTo,delayedCall,set,killTweensOf", (function (t) {
        return Ze[t] = Ye[t]
    })), fe.add(Oe.updateRoot), f = Ze.to({}, {
        duration: 0
    });
    var $e = function (t, e) {
            for (var n = t._pt; n && n.p !== e && n.op !== e && n.fp !== e;) n = n._next;
            return n
        },
        Je = function (t, e) {
            return {
                name: t,
                rawVars: 1,
                init: function (t, n, r) {
                    r._onInit = function (t) {
                        var r, i;
                        if (O(n) && (r = {}, lt(n, (function (t) {
                                return r[t] = 1
                            })), n = r), e) {
                            for (i in r = {}, n) r[i] = e(n[i]);
                            n = r
                        }! function (t, e) {
                            var n, r, i, o = t._targets;
                            for (n in e)
                                for (r = o.length; r--;)(i = t._ptLookup[r][n]) && (i = i.d) && (i._pt && (i = $e(i, n)), i && i.modifier && i.modifier(e[n], t, o[r], n))
                        }(t, n)
                    }
                }
            }
        },
        tn = Ze.registerPlugin({
            name: "attr",
            init: function (t, e, n, r, i) {
                var o, a;
                for (o in e)(a = this.add(t, "setAttribute", (t.getAttribute(o) || 0) + "", e[o], r, i, 0, 0, o)) && (a.op = o), this._props.push(o)
            }
        }, {
            name: "endArray",
            init: function (t, e) {
                for (var n = e.length; n--;) this.add(t, n, t[n] || 0, e[n])
            }
        }, Je("roundProps", Gt), Je("modifiers"), Je("snap", Qt)) || Ze;
    Ye.version = Oe.version = tn.version = "3.6.1", c = 1, P() && pe();
    de.Power0, de.Power1, de.Power2, de.Power3, de.Power4, de.Linear, de.Quad, de.Cubic, de.Quart, de.Quint, de.Strong, de.Elastic, de.Back, de.SteppedEase, de.Bounce, de.Sine, de.Expo, de.Circ;
    /*!
     * CSSPlugin 3.6.1
     * https://greensock.com
     *
     * Copyright 2008-2021, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var en, nn, rn, on, an, sn, ln, un = {},
        cn = 180 / Math.PI,
        hn = Math.PI / 180,
        fn = Math.atan2,
        pn = /([A-Z])/g,
        dn = /(?:left|right|width|margin|padding|x)/i,
        gn = /[\s,\(]\S/,
        _n = {
            autoAlpha: "opacity,visibility",
            scale: "scaleX,scaleY",
            alpha: "opacity"
        },
        mn = function (t, e) {
            return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
        },
        vn = function (t, e) {
            return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
        },
        yn = function (t, e) {
            return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
        },
        xn = function (t, e) {
            var n = e.s + e.c * t;
            e.set(e.t, e.p, ~~(n + (n < 0 ? -.5 : .5)) + e.u, e)
        },
        bn = function (t, e) {
            return e.set(e.t, e.p, t ? e.e : e.b, e)
        },
        wn = function (t, e) {
            return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
        },
        Tn = function (t, e, n) {
            return t.style[e] = n
        },
        Mn = function (t, e, n) {
            return t.style.setProperty(e, n)
        },
        kn = function (t, e, n) {
            return t._gsap[e] = n
        },
        Sn = function (t, e, n) {
            return t._gsap.scaleX = t._gsap.scaleY = n
        },
        On = function (t, e, n, r, i) {
            var o = t._gsap;
            o.scaleX = o.scaleY = n, o.renderTransform(i, o)
        },
        En = function (t, e, n, r, i) {
            var o = t._gsap;
            o[e] = n, o.renderTransform(i, o)
        },
        An = "transform",
        Cn = An + "Origin",
        Ln = function (t, e) {
            var n = nn.createElementNS ? nn.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : nn.createElement(t);
            return n.style ? n : nn.createElement(t)
        },
        Dn = function t(e, n, r) {
            var i = getComputedStyle(e);
            return i[n] || i.getPropertyValue(n.replace(pn, "-$1").toLowerCase()) || i.getPropertyValue(n) || !r && t(e, Rn(n) || n, 1) || ""
        },
        Pn = "O,Moz,ms,Ms,Webkit".split(","),
        Rn = function (t, e, n) {
            var r = (e || an).style,
                i = 5;
            if (t in r && !n) return t;
            for (t = t.charAt(0).toUpperCase() + t.substr(1); i-- && !(Pn[i] + t in r););
            return i < 0 ? null : (3 === i ? "ms" : i >= 0 ? Pn[i] : "") + t
        },
        Xn = function () {
            "undefined" != typeof window && window.document && (en = window, nn = en.document, rn = nn.documentElement, an = Ln("div") || {
                style: {}
            }, Ln("div"), An = Rn(An), Cn = An + "Origin", an.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", ln = !!Rn("perspective"), on = 1)
        },
        Yn = function t(e) {
            var n, r = Ln("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                i = this.parentNode,
                o = this.nextSibling,
                a = this.style.cssText;
            if (rn.appendChild(r), r.appendChild(this), this.style.display = "block", e) try {
                n = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = t
            } catch (t) {} else this._gsapBBox && (n = this._gsapBBox());
            return i && (o ? i.insertBefore(this, o) : i.appendChild(this)), rn.removeChild(r), this.style.cssText = a, n
        },
        Nn = function (t, e) {
            for (var n = e.length; n--;)
                if (t.hasAttribute(e[n])) return t.getAttribute(e[n])
        },
        Fn = function (t) {
            var e;
            try {
                e = t.getBBox()
            } catch (n) {
                e = Yn.call(t, !0)
            }
            return e && (e.width || e.height) || t.getBBox === Yn || (e = Yn.call(t, !0)), !e || e.width || e.x || e.y ? e : {
                x: +Nn(t, ["x", "cx", "x1"]) || 0,
                y: +Nn(t, ["y", "cy", "y1"]) || 0,
                width: 0,
                height: 0
            }
        },
        Bn = function (t) {
            return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !Fn(t))
        },
        zn = function (t, e) {
            if (e) {
                var n = t.style;
                e in un && e !== Cn && (e = An), n.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), n.removeProperty(e.replace(pn, "-$1").toLowerCase())) : n.removeAttribute(e)
            }
        },
        qn = function (t, e, n, r, i, o) {
            var a = new Ke(t._pt, e, n, 0, 1, o ? wn : bn);
            return t._pt = a, a.b = r, a.e = i, t._props.push(n), a
        },
        In = {
            deg: 1,
            rad: 1,
            turn: 1
        },
        Hn = function t(e, n, r, i) {
            var o, a, s, l, u = parseFloat(r) || 0,
                c = (r + "").trim().substr((u + "").length) || "px",
                h = an.style,
                f = dn.test(n),
                p = "svg" === e.tagName.toLowerCase(),
                d = (p ? "client" : "offset") + (f ? "Width" : "Height"),
                g = "px" === i,
                _ = "%" === i;
            return i === c || !u || In[i] || In[c] ? u : ("px" !== c && !g && (u = t(e, n, r, "px")), l = e.getCTM && Bn(e), !_ && "%" !== c || !un[n] && !~n.indexOf("adius") ? (h[f ? "width" : "height"] = 100 + (g ? c : i), a = ~n.indexOf("adius") || "em" === i && e.appendChild && !p ? e : e.parentNode, l && (a = (e.ownerSVGElement || {}).parentNode), a && a !== nn && a.appendChild || (a = nn.body), (s = a._gsap) && _ && s.width && f && s.time === fe.time ? ut(u / s.width * 100) : ((_ || "%" === c) && (h.position = Dn(e, "position")), a === e && (h.position = "static"), a.appendChild(an), o = an[d], a.removeChild(an), h.position = "absolute", f && _ && ((s = at(a)).time = fe.time, s.width = a[d]), ut(g ? o * u / 100 : o && u ? 100 / o * u : 0))) : (o = l ? e.getBBox()[f ? "width" : "height"] : e[d], ut(_ ? u / o * 100 : u / 100 * o)))
        },
        Wn = function (t, e, n, r) {
            var i;
            return on || Xn(), e in _n && "transform" !== e && ~(e = _n[e]).indexOf(",") && (e = e.split(",")[0]), un[e] && "transform" !== e ? (i = er(t, r), i = "transformOrigin" !== e ? i[e] : nr(Dn(t, Cn)) + " " + i.zOrigin + "px") : (!(i = t.style[e]) || "auto" === i || r || ~(i + "").indexOf("calc(")) && (i = Gn[e] && Gn[e](t, e, n) || Dn(t, e) || st(t, e) || ("opacity" === e ? 1 : 0)), n && !~(i + "").trim().indexOf(" ") ? Hn(t, e, i, n) + n : i
        },
        Un = function (t, e, n, r) {
            if (!n || "none" === n) {
                var i = Rn(e, t, 1),
                    o = i && Dn(t, i, 1);
                o && o !== n ? (e = i, n = o) : "borderColor" === e && (n = Dn(t, "borderTopColor"))
            }
            var a, s, l, u, c, h, f, p, d, g, _, m, y = new Ke(this._pt, t.style, e, 0, 1, We),
                x = 0,
                b = 0;
            if (y.b = n, y.e = r, n += "", "auto" === (r += "") && (t.style[e] = r, r = Dn(t, e) || r, t.style[e] = n), he(a = [n, r]), r = a[1], l = (n = a[0]).match(B) || [], (r.match(B) || []).length) {
                for (; s = B.exec(r);) f = s[0], d = r.substring(x, s.index), c ? c = (c + 1) % 5 : "rgba(" !== d.substr(-5) && "hsla(" !== d.substr(-5) || (c = 1), f !== (h = l[b++] || "") && (u = parseFloat(h) || 0, _ = h.substr((u + "").length), (m = "=" === f.charAt(1) ? +(f.charAt(0) + "1") : 0) && (f = f.substr(2)), p = parseFloat(f), g = f.substr((p + "").length), x = B.lastIndex - g.length, g || (g = g || v.units[e] || _, x === r.length && (r += g, y.e += g)), _ !== g && (u = Hn(t, e, h, g) || 0), y._pt = {
                    _next: y._pt,
                    p: d || 1 === b ? d : ",",
                    s: u,
                    c: m ? m * p : p - u,
                    m: c && c < 4 || "zIndex" === e ? Math.round : 0
                });
                y.c = x < r.length ? r.substring(x, r.length) : ""
            } else y.r = "display" === e && "none" === r ? wn : bn;
            return q.test(r) && (y.e = 0), this._pt = y, y
        },
        Vn = {
            top: "0%",
            bottom: "100%",
            left: "0%",
            right: "100%",
            center: "50%"
        },
        jn = function (t, e) {
            if (e.tween && e.tween._time === e.tween._dur) {
                var n, r, i, o = e.t,
                    a = o.style,
                    s = e.u,
                    l = o._gsap;
                if ("all" === s || !0 === s) a.cssText = "", r = 1;
                else
                    for (i = (s = s.split(",")).length; --i > -1;) n = s[i], un[n] && (r = 1, n = "transformOrigin" === n ? Cn : An), zn(o, n);
                r && (zn(o, An), l && (l.svg && o.removeAttribute("transform"), er(o, 1), l.uncache = 1))
            }
        },
        Gn = {
            clearProps: function (t, e, n, r, i) {
                if ("isFromStart" !== i.data) {
                    var o = t._pt = new Ke(t._pt, e, n, 0, 0, jn);
                    return o.u = r, o.pr = -10, o.tween = i, t._props.push(n), 1
                }
            }
        },
        Qn = [1, 0, 0, 1, 0, 0],
        Kn = {},
        Zn = function (t) {
            return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
        },
        $n = function (t) {
            var e = Dn(t, An);
            return Zn(e) ? Qn : e.substr(7).match(F).map(ut)
        },
        Jn = function (t, e) {
            var n, r, i, o, a = t._gsap || at(t),
                s = t.style,
                l = $n(t);
            return a.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (l = [(i = t.transform.baseVal.consolidate().matrix).a, i.b, i.c, i.d, i.e, i.f]).join(",") ? Qn : l : (l !== Qn || t.offsetParent || t === rn || a.svg || (i = s.display, s.display = "block", (n = t.parentNode) && t.offsetParent || (o = 1, r = t.nextSibling, rn.appendChild(t)), l = $n(t), i ? s.display = i : zn(t, "display"), o && (r ? n.insertBefore(t, r) : n ? n.appendChild(t) : rn.removeChild(t))), e && l.length > 6 ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l)
        },
        tr = function (t, e, n, r, i, o) {
            var a, s, l, u = t._gsap,
                c = i || Jn(t, !0),
                h = u.xOrigin || 0,
                f = u.yOrigin || 0,
                p = u.xOffset || 0,
                d = u.yOffset || 0,
                g = c[0],
                _ = c[1],
                m = c[2],
                v = c[3],
                y = c[4],
                x = c[5],
                b = e.split(" "),
                w = parseFloat(b[0]) || 0,
                T = parseFloat(b[1]) || 0;
            n ? c !== Qn && (s = g * v - _ * m) && (l = w * (-_ / s) + T * (g / s) - (g * x - _ * y) / s, w = w * (v / s) + T * (-m / s) + (m * x - v * y) / s, T = l) : (w = (a = Fn(t)).x + (~b[0].indexOf("%") ? w / 100 * a.width : w), T = a.y + (~(b[1] || b[0]).indexOf("%") ? T / 100 * a.height : T)), r || !1 !== r && u.smooth ? (y = w - h, x = T - f, u.xOffset = p + (y * g + x * m) - y, u.yOffset = d + (y * _ + x * v) - x) : u.xOffset = u.yOffset = 0, u.xOrigin = w, u.yOrigin = T, u.smooth = !!r, u.origin = e, u.originIsAbsolute = !!n, t.style[Cn] = "0px 0px", o && (qn(o, u, "xOrigin", h, w), qn(o, u, "yOrigin", f, T), qn(o, u, "xOffset", p, u.xOffset), qn(o, u, "yOffset", d, u.yOffset)), t.setAttribute("data-svg-origin", w + " " + T)
        },
        er = function (t, e) {
            var n = t._gsap || new ke(t);
            if ("x" in n && !e && !n.uncache) return n;
            var r, i, o, a, s, l, u, c, h, f, p, d, g, _, m, y, x, b, w, T, M, k, S, O, E, A, C, L, D, P, R, X, Y = t.style,
                N = n.scaleX < 0,
                F = Dn(t, Cn) || "0";
            return r = i = o = l = u = c = h = f = p = 0, a = s = 1, n.svg = !(!t.getCTM || !Bn(t)), _ = Jn(t, n.svg), n.svg && (O = !n.uncache && !e && t.getAttribute("data-svg-origin"), tr(t, O || F, !!O || n.originIsAbsolute, !1 !== n.smooth, _)), d = n.xOrigin || 0, g = n.yOrigin || 0, _ !== Qn && (b = _[0], w = _[1], T = _[2], M = _[3], r = k = _[4], i = S = _[5], 6 === _.length ? (a = Math.sqrt(b * b + w * w), s = Math.sqrt(M * M + T * T), l = b || w ? fn(w, b) * cn : 0, (h = T || M ? fn(T, M) * cn + l : 0) && (s *= Math.abs(Math.cos(h * hn))), n.svg && (r -= d - (d * b + g * T), i -= g - (d * w + g * M))) : (X = _[6], P = _[7], C = _[8], L = _[9], D = _[10], R = _[11], r = _[12], i = _[13], o = _[14], u = (m = fn(X, D)) * cn, m && (O = k * (y = Math.cos(-m)) + C * (x = Math.sin(-m)), E = S * y + L * x, A = X * y + D * x, C = k * -x + C * y, L = S * -x + L * y, D = X * -x + D * y, R = P * -x + R * y, k = O, S = E, X = A), c = (m = fn(-T, D)) * cn, m && (y = Math.cos(-m), R = M * (x = Math.sin(-m)) + R * y, b = O = b * y - C * x, w = E = w * y - L * x, T = A = T * y - D * x), l = (m = fn(w, b)) * cn, m && (O = b * (y = Math.cos(m)) + w * (x = Math.sin(m)), E = k * y + S * x, w = w * y - b * x, S = S * y - k * x, b = O, k = E), u && Math.abs(u) + Math.abs(l) > 359.9 && (u = l = 0, c = 180 - c), a = ut(Math.sqrt(b * b + w * w + T * T)), s = ut(Math.sqrt(S * S + X * X)), m = fn(k, S), h = Math.abs(m) > 2e-4 ? m * cn : 0, p = R ? 1 / (R < 0 ? -R : R) : 0), n.svg && (O = t.getAttribute("transform"), n.forceCSS = t.setAttribute("transform", "") || !Zn(Dn(t, An)), O && t.setAttribute("transform", O))), Math.abs(h) > 90 && Math.abs(h) < 270 && (N ? (a *= -1, h += l <= 0 ? 180 : -180, l += l <= 0 ? 180 : -180) : (s *= -1, h += h <= 0 ? 180 : -180)), n.x = r - ((n.xPercent = r && (n.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-r) ? -50 : 0))) ? t.offsetWidth * n.xPercent / 100 : 0) + "px", n.y = i - ((n.yPercent = i && (n.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-i) ? -50 : 0))) ? t.offsetHeight * n.yPercent / 100 : 0) + "px", n.z = o + "px", n.scaleX = ut(a), n.scaleY = ut(s), n.rotation = ut(l) + "deg", n.rotationX = ut(u) + "deg", n.rotationY = ut(c) + "deg", n.skewX = h + "deg", n.skewY = f + "deg", n.transformPerspective = p + "px", (n.zOrigin = parseFloat(F.split(" ")[2]) || 0) && (Y[Cn] = nr(F)), n.xOffset = n.yOffset = 0, n.force3D = v.force3D, n.renderTransform = n.svg ? ar : ln ? or : ir, n.uncache = 0, n
        },
        nr = function (t) {
            return (t = t.split(" "))[0] + " " + t[1]
        },
        rr = function (t, e, n) {
            var r = qt(e);
            return ut(parseFloat(e) + parseFloat(Hn(t, "x", n + "px", r))) + r
        },
        ir = function (t, e) {
            e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, or(t, e)
        },
        or = function (t, e) {
            var n = e || this,
                r = n.xPercent,
                i = n.yPercent,
                o = n.x,
                a = n.y,
                s = n.z,
                l = n.rotation,
                u = n.rotationY,
                c = n.rotationX,
                h = n.skewX,
                f = n.skewY,
                p = n.scaleX,
                d = n.scaleY,
                g = n.transformPerspective,
                _ = n.force3D,
                m = n.target,
                v = n.zOrigin,
                y = "",
                x = "auto" === _ && t && 1 !== t || !0 === _;
            if (v && ("0deg" !== c || "0deg" !== u)) {
                var b, w = parseFloat(u) * hn,
                    T = Math.sin(w),
                    M = Math.cos(w);
                w = parseFloat(c) * hn, b = Math.cos(w), o = rr(m, o, T * b * -v), a = rr(m, a, -Math.sin(w) * -v), s = rr(m, s, M * b * -v + v)
            }
            "0px" !== g && (y += "perspective(" + g + ") "), (r || i) && (y += "translate(" + r + "%, " + i + "%) "), (x || "0px" !== o || "0px" !== a || "0px" !== s) && (y += "0px" !== s || x ? "translate3d(" + o + ", " + a + ", " + s + ") " : "translate(" + o + ", " + a + ") "), "0deg" !== l && (y += "rotate(" + l + ") "), "0deg" !== u && (y += "rotateY(" + u + ") "), "0deg" !== c && (y += "rotateX(" + c + ") "), "0deg" === h && "0deg" === f || (y += "skew(" + h + ", " + f + ") "), 1 === p && 1 === d || (y += "scale(" + p + ", " + d + ") "), m.style[An] = y || "translate(0, 0)"
        },
        ar = function (t, e) {
            var n, r, i, o, a, s = e || this,
                l = s.xPercent,
                u = s.yPercent,
                c = s.x,
                h = s.y,
                f = s.rotation,
                p = s.skewX,
                d = s.skewY,
                g = s.scaleX,
                _ = s.scaleY,
                m = s.target,
                v = s.xOrigin,
                y = s.yOrigin,
                x = s.xOffset,
                b = s.yOffset,
                w = s.forceCSS,
                T = parseFloat(c),
                M = parseFloat(h);
            f = parseFloat(f), p = parseFloat(p), (d = parseFloat(d)) && (p += d = parseFloat(d), f += d), f || p ? (f *= hn, p *= hn, n = Math.cos(f) * g, r = Math.sin(f) * g, i = Math.sin(f - p) * -_, o = Math.cos(f - p) * _, p && (d *= hn, a = Math.tan(p - d), i *= a = Math.sqrt(1 + a * a), o *= a, d && (a = Math.tan(d), n *= a = Math.sqrt(1 + a * a), r *= a)), n = ut(n), r = ut(r), i = ut(i), o = ut(o)) : (n = g, o = _, r = i = 0), (T && !~(c + "").indexOf("px") || M && !~(h + "").indexOf("px")) && (T = Hn(m, "x", c, "px"), M = Hn(m, "y", h, "px")), (v || y || x || b) && (T = ut(T + v - (v * n + y * i) + x), M = ut(M + y - (v * r + y * o) + b)), (l || u) && (a = m.getBBox(), T = ut(T + l / 100 * a.width), M = ut(M + u / 100 * a.height)), a = "matrix(" + n + "," + r + "," + i + "," + o + "," + T + "," + M + ")", m.setAttribute("transform", a), w && (m.style[An] = a)
        },
        sr = function (t, e, n, r, i, o) {
            var a, s, l = O(i),
                u = parseFloat(i) * (l && ~i.indexOf("rad") ? cn : 1),
                c = o ? u * o : u - r,
                h = r + c + "deg";
            return l && ("short" === (a = i.split("_")[1]) && (c %= 360) !== c % 180 && (c += c < 0 ? 360 : -360), "cw" === a && c < 0 ? c = (c + 36e9) % 360 - 360 * ~~(c / 360) : "ccw" === a && c > 0 && (c = (c - 36e9) % 360 - 360 * ~~(c / 360))), t._pt = s = new Ke(t._pt, e, n, r, c, vn), s.e = h, s.u = "deg", t._props.push(n), s
        },
        lr = function (t, e) {
            for (var n in e) t[n] = e[n];
            return t
        },
        ur = function (t, e, n) {
            var r, i, o, a, s, l, u, c = lr({}, n._gsap),
                h = n.style;
            for (i in c.svg ? (o = n.getAttribute("transform"), n.setAttribute("transform", ""), h[An] = e, r = er(n, 1), zn(n, An), n.setAttribute("transform", o)) : (o = getComputedStyle(n)[An], h[An] = e, r = er(n, 1), h[An] = o), un)(o = c[i]) !== (a = r[i]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(i) < 0 && (s = qt(o) !== (u = qt(a)) ? Hn(n, i, o, u) : parseFloat(o), l = parseFloat(a), t._pt = new Ke(t._pt, r, i, s, l - s, mn), t._pt.u = u || 0, t._props.push(i));
            lr(r, c)
        };
    lt("padding,margin,Width,Radius", (function (t, e) {
        var n = "Top",
            r = "Right",
            i = "Bottom",
            o = "Left",
            a = (e < 3 ? [n, r, i, o] : [n + o, n + r, i + r, i + o]).map((function (n) {
                return e < 2 ? t + n : "border" + n + t
            }));
        Gn[e > 1 ? "border" + t : t] = function (t, e, n, r, i) {
            var o, s;
            if (arguments.length < 4) return o = a.map((function (e) {
                return Wn(t, e, n)
            })), 5 === (s = o.join(" ")).split(o[0]).length ? o[0] : s;
            o = (r + "").split(" "), s = {}, a.forEach((function (t, e) {
                return s[t] = o[e] = o[e] || o[(e - 1) / 2 | 0]
            })), t.init(e, s, i)
        }
    }));
    var cr, hr, fr = {
        name: "css",
        register: Xn,
        targetTest: function (t) {
            return t.style && t.nodeType
        },
        init: function (t, e, n, r, i) {
            var o, a, s, l, u, c, h, f, p, d, g, _, m, y, x, b, w, T, M, k = this._props,
                S = t.style,
                O = n.vars.startAt;
            for (h in on || Xn(), e)
                if ("autoRound" !== h && (a = e[h], !tt[h] || !Le(h, e, n, r, t, i)))
                    if (u = typeof a, c = Gn[h], "function" === u && (u = typeof (a = a.call(n, r, t, i))), "string" === u && ~a.indexOf("random(") && (a = $t(a)), c) c(this, t, h, a, n) && (x = 1);
                    else if ("--" === h.substr(0, 2)) o = (getComputedStyle(t).getPropertyValue(h) + "").trim(), a += "", ue.lastIndex = 0, ue.test(o) || (f = qt(o), p = qt(a)), p ? f !== p && (o = Hn(t, h, o, p) + p) : f && (a += f), this.add(S, "setProperty", o, a, r, i, 0, 0, h);
            else if ("undefined" !== u) {
                if (O && h in O ? (o = "function" == typeof O[h] ? O[h].call(n, r, t, i) : O[h], h in v.units && !qt(o) && (o += v.units[h]), "=" === (o + "").charAt(1) && (o = Wn(t, h))) : o = Wn(t, h), l = parseFloat(o), (d = "string" === u && "=" === a.charAt(1) ? +(a.charAt(0) + "1") : 0) && (a = a.substr(2)), s = parseFloat(a), h in _n && ("autoAlpha" === h && (1 === l && "hidden" === Wn(t, "visibility") && s && (l = 0), qn(this, S, "visibility", l ? "inherit" : "hidden", s ? "inherit" : "hidden", !s)), "scale" !== h && "transform" !== h && ~(h = _n[h]).indexOf(",") && (h = h.split(",")[0])), g = h in un)
                    if (_ || ((m = t._gsap).renderTransform && !e.parseTransform || er(t, e.parseTransform), y = !1 !== e.smoothOrigin && m.smooth, (_ = this._pt = new Ke(this._pt, S, An, 0, 1, m.renderTransform, m, 0, -1)).dep = 1), "scale" === h) this._pt = new Ke(this._pt, m, "scaleY", m.scaleY, d ? d * s : s - m.scaleY), k.push("scaleY", h), h += "X";
                    else {
                        if ("transformOrigin" === h) {
                            w = void 0, T = void 0, M = void 0, w = (b = a).split(" "), T = w[0], M = w[1] || "50%", "top" !== T && "bottom" !== T && "left" !== M && "right" !== M || (b = T, T = M, M = b), w[0] = Vn[T] || T, w[1] = Vn[M] || M, a = w.join(" "), m.svg ? tr(t, a, 0, y, 0, this) : ((p = parseFloat(a.split(" ")[2]) || 0) !== m.zOrigin && qn(this, m, "zOrigin", m.zOrigin, p), qn(this, S, h, nr(o), nr(a)));
                            continue
                        }
                        if ("svgOrigin" === h) {
                            tr(t, a, 1, y, 0, this);
                            continue
                        }
                        if (h in Kn) {
                            sr(this, m, h, l, a, d);
                            continue
                        }
                        if ("smoothOrigin" === h) {
                            qn(this, m, "smooth", m.smooth, a);
                            continue
                        }
                        if ("force3D" === h) {
                            m[h] = a;
                            continue
                        }
                        if ("transform" === h) {
                            ur(this, a, t);
                            continue
                        }
                    }
                else h in S || (h = Rn(h) || h);
                if (g || (s || 0 === s) && (l || 0 === l) && !gn.test(a) && h in S) s || (s = 0), (f = (o + "").substr((l + "").length)) !== (p = qt(a) || (h in v.units ? v.units[h] : f)) && (l = Hn(t, h, o, p)), this._pt = new Ke(this._pt, g ? m : S, h, l, d ? d * s : s - l, g || "px" !== p && "zIndex" !== h || !1 === e.autoRound ? mn : xn), this._pt.u = p || 0, f !== p && (this._pt.b = o, this._pt.r = yn);
                else if (h in S) Un.call(this, t, h, o, a);
                else {
                    if (!(h in t)) {
                        j(h, a);
                        continue
                    }
                    this.add(t, h, t[h], a, r, i)
                }
                k.push(h)
            }
            x && Qe(this)
        },
        get: Wn,
        aliases: _n,
        getSetter: function (t, e, n) {
            var r = _n[e];
            return r && r.indexOf(",") < 0 && (e = r), e in un && e !== Cn && (t._gsap.x || Wn(t, "x")) ? n && sn === n ? "scale" === e ? Sn : kn : (sn = n || {}) && ("scale" === e ? On : En) : t.style && !C(t.style[e]) ? Tn : ~e.indexOf("-") ? Mn : qe(t, e)
        },
        core: {
            _removeProperty: zn,
            _getMatrix: Jn
        }
    };
    tn.utils.checkPrefix = Rn, hr = lt("x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + (cr = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", (function (t) {
        un[t] = 1
    })), lt(cr, (function (t) {
        v.units[t] = "deg", Kn[t] = 1
    })), _n[hr[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + cr, lt("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", (function (t) {
        var e = t.split(":");
        _n[e[1]] = hr[e[0]]
    })), lt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", (function (t) {
        v.units[t] = "px"
    })), tn.registerPlugin(fr);
    var pr, dr, gr, _r, mr, vr, yr, xr, br = tn.registerPlugin(fr) || tn,
        wr = (br.core.Tween, "transform"),
        Tr = wr + "Origin",
        Mr = function (t) {
            var e = t.ownerDocument || t;
            !(wr in t.style) && "msTransform" in t.style && (Tr = (wr = "msTransform") + "Origin");
            for (; e.parentNode && (e = e.parentNode););
            if (dr = window, yr = new Lr, e) {
                pr = e, gr = e.documentElement, _r = e.body;
                var n = e.createElement("div"),
                    r = e.createElement("div");
                _r.appendChild(n), n.appendChild(r), n.style.position = "static", n.style[wr] = "translate3d(0,0,1px)", xr = r.offsetParent !== n, _r.removeChild(n)
            }
            return e
        },
        kr = [],
        Sr = [],
        Or = function (t) {
            return t.ownerSVGElement || ("svg" === (t.tagName + "").toLowerCase() ? t : null)
        },
        Er = function t(e, n) {
            if (e.parentNode && (pr || Mr(e))) {
                var r = Or(e),
                    i = r ? r.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml",
                    o = r ? n ? "rect" : "g" : "div",
                    a = 2 !== n ? 0 : 100,
                    s = 3 === n ? 100 : 0,
                    l = "position:absolute;display:block;pointer-events:none;margin:0;padding:0;",
                    u = pr.createElementNS ? pr.createElementNS(i.replace(/^https/, "http"), o) : pr.createElement(o);
                return n && (r ? (vr || (vr = t(e)), u.setAttribute("width", .01), u.setAttribute("height", .01), u.setAttribute("transform", "translate(" + a + "," + s + ")"), vr.appendChild(u)) : (mr || ((mr = t(e)).style.cssText = l), u.style.cssText = l + "width:0.1px;height:0.1px;top:" + s + "px;left:" + a + "px", mr.appendChild(u))), u
            }
            throw "Need document and parent."
        },
        Ar = function (t, e) {
            var n, r, i, o, a, s, l = Or(t),
                u = t === l,
                c = l ? kr : Sr,
                h = t.parentNode;
            if (t === dr) return t;
            if (c.length || c.push(Er(t, 1), Er(t, 2), Er(t, 3)), n = l ? vr : mr, l) i = u ? {
                x: 0,
                y: 0
            } : t.getBBox(), (r = t.transform ? t.transform.baseVal : {}).numberOfItems ? (o = (r = r.numberOfItems > 1 ? function (t) {
                for (var e = new Lr, n = 0; n < t.numberOfItems; n++) e.multiply(t.getItem(n).matrix);
                return e
            }(r) : r.getItem(0).matrix).a * i.x + r.c * i.y, a = r.b * i.x + r.d * i.y) : (r = yr, o = i.x, a = i.y), e && "g" === t.tagName.toLowerCase() && (o = a = 0), (u ? l : h).appendChild(n), n.setAttribute("transform", "matrix(" + r.a + "," + r.b + "," + r.c + "," + r.d + "," + (r.e + o) + "," + (r.f + a) + ")");
            else {
                if (o = a = 0, xr)
                    for (r = t.offsetParent, i = t; i && (i = i.parentNode) && i !== r && i.parentNode;)(dr.getComputedStyle(i)[wr] + "").length > 4 && (o = i.offsetLeft, a = i.offsetTop, i = 0);
                if ("absolute" !== (s = dr.getComputedStyle(t)).position)
                    for (r = t.offsetParent; h && h !== r;) o += h.scrollLeft || 0, a += h.scrollTop || 0, h = h.parentNode;
                (i = n.style).top = t.offsetTop - a + "px", i.left = t.offsetLeft - o + "px", i[wr] = s[wr], i[Tr] = s[Tr], i.position = "fixed" === s.position ? "fixed" : "absolute", t.parentNode.appendChild(n)
            }
            return n
        },
        Cr = function (t, e, n, r, i, o, a) {
            return t.a = e, t.b = n, t.c = r, t.d = i, t.e = o, t.f = a, t
        },
        Lr = function () {
            function t(t, e, n, r, i, o) {
                void 0 === t && (t = 1), void 0 === e && (e = 0), void 0 === n && (n = 0), void 0 === r && (r = 1), void 0 === i && (i = 0), void 0 === o && (o = 0), Cr(this, t, e, n, r, i, o)
            }
            var e = t.prototype;
            return e.inverse = function () {
                var t = this.a,
                    e = this.b,
                    n = this.c,
                    r = this.d,
                    i = this.e,
                    o = this.f,
                    a = t * r - e * n || 1e-10;
                return Cr(this, r / a, -e / a, -n / a, t / a, (n * o - r * i) / a, -(t * o - e * i) / a)
            }, e.multiply = function (t) {
                var e = this.a,
                    n = this.b,
                    r = this.c,
                    i = this.d,
                    o = this.e,
                    a = this.f,
                    s = t.a,
                    l = t.c,
                    u = t.b,
                    c = t.d,
                    h = t.e,
                    f = t.f;
                return Cr(this, s * e + u * r, s * n + u * i, l * e + c * r, l * n + c * i, o + h * e + f * r, a + h * n + f * i)
            }, e.clone = function () {
                return new t(this.a, this.b, this.c, this.d, this.e, this.f)
            }, e.equals = function (t) {
                var e = this.a,
                    n = this.b,
                    r = this.c,
                    i = this.d,
                    o = this.e,
                    a = this.f;
                return e === t.a && n === t.b && r === t.c && i === t.d && o === t.e && a === t.f
            }, e.apply = function (t, e) {
                void 0 === e && (e = {});
                var n = t.x,
                    r = t.y,
                    i = this.a,
                    o = this.b,
                    a = this.c,
                    s = this.d,
                    l = this.e,
                    u = this.f;
                return e.x = n * i + r * a + l || 0, e.y = n * o + r * s + u || 0, e
            }, t
        }();
    /*!
     * matrix 3.6.1
     * https://greensock.com
     *
     * Copyright 2008-2021, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    function Dr(t, e, n, r) {
        if (!t || !t.parentNode || (pr || Mr(t)).documentElement === t) return new Lr;
        var i = function (t) {
                for (var e, n; t && t !== _r;)(n = t._gsap) && n.uncache && n.get(t, "x"), n && !n.scaleX && !n.scaleY && n.renderTransform && (n.scaleX = n.scaleY = 1e-4, n.renderTransform(1, n), e ? e.push(n) : e = [n]), t = t.parentNode;
                return e
            }(t),
            o = Or(t) ? kr : Sr,
            a = Ar(t, n),
            s = o[0].getBoundingClientRect(),
            l = o[1].getBoundingClientRect(),
            u = o[2].getBoundingClientRect(),
            c = a.parentNode,
            h = !r && function t(e) {
                return "fixed" === dr.getComputedStyle(e).position || ((e = e.parentNode) && 1 === e.nodeType ? t(e) : void 0)
            }(t),
            f = new Lr((l.left - s.left) / 100, (l.top - s.top) / 100, (u.left - s.left) / 100, (u.top - s.top) / 100, s.left + (h ? 0 : dr.pageXOffset || pr.scrollLeft || gr.scrollLeft || _r.scrollLeft || 0), s.top + (h ? 0 : dr.pageYOffset || pr.scrollTop || gr.scrollTop || _r.scrollTop || 0));
        if (c.removeChild(a), i)
            for (s = i.length; s--;)(l = i[s]).scaleX = l.scaleY = 0, l.renderTransform(1, l);
        return e ? f.inverse() : f
    }
    /*!
     * Draggable 3.6.1
     * https://greensock.com
     *
     * @license Copyright 2008-2021, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var Pr, Rr, Xr, Yr, Nr, Fr, Br, zr, qr, Ir, Hr, Wr, Ur, Vr, jr, Gr, Qr, Kr, Zr, $r, Jr, ti = function () {
            return "undefined" != typeof window
        },
        ei = function () {
            return Pr || ti() && (Pr = window.gsap) && Pr.registerPlugin && Pr
        },
        ni = function (t) {
            return "function" == typeof t
        },
        ri = function (t) {
            return "object" == typeof t
        },
        ii = function (t) {
            return void 0 === t
        },
        oi = function () {
            return !1
        },
        ai = "transform",
        si = "transformOrigin",
        li = function (t) {
            return Math.round(1e4 * t) / 1e4
        },
        ui = Array.isArray,
        ci = function (t, e) {
            var n = Xr.createElementNS ? Xr.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : Xr.createElement(t);
            return n.style ? n : Xr.createElement(t)
        },
        hi = 180 / Math.PI,
        fi = new Lr,
        pi = Date.now || function () {
            return (new Date).getTime()
        },
        di = [],
        gi = {},
        _i = 0,
        mi = /^(?:a|input|textarea|button|select)$/i,
        vi = 0,
        yi = {},
        xi = {},
        bi = function (t, e) {
            var n, r = {};
            for (n in t) r[n] = e ? t[n] * e : t[n];
            return r
        },
        wi = function t(e, n) {
            for (var r, i = e.length; i--;) n ? e[i].style.touchAction = n : e[i].style.removeProperty("touch-action"), (r = e[i].children) && r.length && t(r, n)
        },
        Ti = function () {
            return di.forEach((function (t) {
                return t()
            }))
        },
        Mi = function () {
            return !di.length && Pr.ticker.remove(Ti)
        },
        ki = function (t) {
            for (var e = di.length; e--;) di[e] === t && di.splice(e, 1);
            Pr.to(Mi, {
                overwrite: !0,
                delay: 15,
                duration: 0,
                onComplete: Mi,
                data: "_draggable"
            })
        },
        Si = function (t, e, n, r) {
            if (t.addEventListener) {
                var i = Ur[e];
                r = r || (Hr ? {
                    passive: !1
                } : null), t.addEventListener(i || e, n, r), i && e !== i && t.addEventListener(e, n, r)
            }
        },
        Oi = function (t, e, n) {
            if (t.removeEventListener) {
                var r = Ur[e];
                t.removeEventListener(r || e, n), r && e !== r && t.removeEventListener(e, n)
            }
        },
        Ei = function (t) {
            t.preventDefault && t.preventDefault(), t.preventManipulation && t.preventManipulation()
        },
        Ai = function t(e) {
            jr = e.touches && Vr < e.touches.length, Oi(e.target, "touchend", t)
        },
        Ci = function (t) {
            jr = t.touches && Vr < t.touches.length, Si(t.target, "touchend", Ai)
        },
        Li = function (t) {
            return Rr.pageYOffset || t.scrollTop || t.documentElement.scrollTop || t.body.scrollTop || 0
        },
        Di = function (t) {
            return Rr.pageXOffset || t.scrollLeft || t.documentElement.scrollLeft || t.body.scrollLeft || 0
        },
        Pi = function t(e, n) {
            Si(e, "scroll", n), Xi(e.parentNode) || t(e.parentNode, n)
        },
        Ri = function t(e, n) {
            Oi(e, "scroll", n), Xi(e.parentNode) || t(e.parentNode, n)
        },
        Xi = function (t) {
            return !(t && t !== Yr && 9 !== t.nodeType && t !== Xr.body && t !== Rr && t.nodeType && t.parentNode)
        },
        Yi = function (t, e) {
            var n = "x" === e ? "Width" : "Height",
                r = "scroll" + n,
                i = "client" + n;
            return Math.max(0, Xi(t) ? Math.max(Yr[r], Nr[r]) - (Rr["inner" + n] || Yr[i] || Nr[i]) : t[r] - t[i])
        },
        Ni = function t(e, n) {
            var r = Yi(e, "x"),
                i = Yi(e, "y");
            Xi(e) ? e = xi : t(e.parentNode, n), e._gsMaxScrollX = r, e._gsMaxScrollY = i, n || (e._gsScrollX = e.scrollLeft || 0, e._gsScrollY = e.scrollTop || 0)
        },
        Fi = function (t, e, n) {
            var r = t.style;
            r && (ii(r[e]) && (e = qr(e, t) || e), null == n ? r.removeProperty && r.removeProperty(e.replace(/([A-Z])/g, "-$1").toLowerCase()) : r[e] = n)
        },
        Bi = function (t) {
            return Rr.getComputedStyle(t instanceof Element ? t : t.host || (t.parentNode || {}).host || t)
        },
        zi = {},
        qi = function (t) {
            if (t === Rr) return zi.left = zi.top = 0, zi.width = zi.right = Yr.clientWidth || t.innerWidth || Nr.clientWidth || 0, zi.height = zi.bottom = (t.innerHeight || 0) - 20 < Yr.clientHeight ? Yr.clientHeight : t.innerHeight || Nr.clientHeight || 0, zi;
            var e = t.ownerDocument || Xr,
                n = ii(t.pageX) ? t.nodeType || ii(t.left) || ii(t.top) ? Ir(t)[0].getBoundingClientRect() : t : {
                    left: t.pageX - Di(e),
                    top: t.pageY - Li(e),
                    right: t.pageX - Di(e) + 1,
                    bottom: t.pageY - Li(e) + 1
                };
            return ii(n.right) && !ii(n.width) ? (n.right = n.left + n.width, n.bottom = n.top + n.height) : ii(n.width) && (n = {
                width: n.right - n.left,
                height: n.bottom - n.top,
                right: n.right,
                left: n.left,
                bottom: n.bottom,
                top: n.top
            }), n
        },
        Ii = function (t, e, n) {
            var r, i = t.vars,
                o = i[n],
                a = t._listeners[e];
            return ni(o) && (r = o.apply(i.callbackScope || t, i[n + "Params"] || [t.pointerEvent])), a && !1 === t.dispatchEvent(e) && (r = !1), r
        },
        Hi = function (t, e) {
            var n, r, i, o = Ir(t)[0];
            return o.nodeType || o === Rr ? Ui(o, e) : ii(t.left) ? {
                left: r = t.min || t.minX || t.minRotation || 0,
                top: n = t.min || t.minY || 0,
                width: (t.max || t.maxX || t.maxRotation || 0) - r,
                height: (t.max || t.maxY || 0) - n
            } : (i = {
                x: 0,
                y: 0
            }, {
                left: t.left - i.x,
                top: t.top - i.y,
                width: t.width,
                height: t.height
            })
        },
        Wi = {},
        Ui = function (t, e) {
            e = Ir(e)[0];
            var n, r, i, o, a, s, l, u, c, h, f, p, d, g, _ = t.getBBox && t.ownerSVGElement,
                m = t.ownerDocument || Xr;
            if (t === Rr) i = Li(m), r = (n = Di(m)) + (m.documentElement.clientWidth || t.innerWidth || m.body.clientWidth || 0), o = i + ((t.innerHeight || 0) - 20 < m.documentElement.clientHeight ? m.documentElement.clientHeight : t.innerHeight || m.body.clientHeight || 0);
            else {
                if (e === Rr || ii(e)) return t.getBoundingClientRect();
                n = i = 0, _ ? (f = (h = t.getBBox()).width, p = h.height) : (t.viewBox && (h = t.viewBox.baseVal) && (n = h.x || 0, i = h.y || 0, f = h.width, p = h.height), f || (h = "border-box" === (d = Bi(t)).boxSizing, f = (parseFloat(d.width) || t.clientWidth || 0) + (h ? 0 : parseFloat(d.borderLeftWidth) + parseFloat(d.borderRightWidth)), p = (parseFloat(d.height) || t.clientHeight || 0) + (h ? 0 : parseFloat(d.borderTopWidth) + parseFloat(d.borderBottomWidth)))), r = f, o = p
            }
            return t === e ? {
                left: n,
                top: i,
                width: r - n,
                height: o - i
            } : (s = (a = Dr(e, !0).multiply(Dr(t))).apply({
                x: n,
                y: i
            }), l = a.apply({
                x: r,
                y: i
            }), u = a.apply({
                x: r,
                y: o
            }), c = a.apply({
                x: n,
                y: o
            }), n = Math.min(s.x, l.x, u.x, c.x), i = Math.min(s.y, l.y, u.y, c.y), {
                left: n + ((g = e.parentNode || {}).scrollLeft || 0),
                top: i + (g.scrollTop || 0),
                width: Math.max(s.x, l.x, u.x, c.x) - n,
                height: Math.max(s.y, l.y, u.y, c.y) - i
            })
        },
        Vi = function (t, e, n, r, i, o) {
            var a, s, l, u = {};
            if (e)
                if (1 !== i && e instanceof Array) {
                    if (u.end = a = [], l = e.length, ri(e[0]))
                        for (s = 0; s < l; s++) a[s] = bi(e[s], i);
                    else
                        for (s = 0; s < l; s++) a[s] = e[s] * i;
                    n += 1.1, r -= 1.1
                } else ni(e) ? u.end = function (n) {
                    var r, o, a = e.call(t, n);
                    if (1 !== i)
                        if (ri(a)) {
                            for (o in r = {}, a) r[o] = a[o] * i;
                            a = r
                        } else a *= i;
                    return a
                } : u.end = e;
            return (n || 0 === n) && (u.max = n), (r || 0 === r) && (u.min = r), o && (u.velocity = 0), u
        },
        ji = function t(e) {
            var n;
            return !(!e || !e.getAttribute || e === Nr) && (!("true" !== (n = e.getAttribute("data-clickable")) && ("false" === n || !e.onclick && !mi.test(e.nodeName + "") && "true" !== e.getAttribute("contentEditable"))) || t(e.parentNode))
        },
        Gi = function (t, e) {
            for (var n, r = t.length; r--;)(n = t[r]).ondragstart = n.onselectstart = e ? null : oi, Pr.set(n, {
                lazy: !0,
                userSelect: e ? "text" : "none"
            })
        },
        Qi = function (t, e) {
            t = Pr.utils.toArray(t)[0], e = e || {};
            var n, r, i, o, a, s, l = document.createElement("div"),
                u = l.style,
                c = t.firstChild,
                h = 0,
                f = 0,
                p = t.scrollTop,
                d = t.scrollLeft,
                g = t.scrollWidth,
                _ = t.scrollHeight,
                m = 0,
                v = 0,
                y = 0;
            $r && !1 !== e.force3D ? (a = "translate3d(", s = "px,0px)") : ai && (a = "translate(", s = "px)"), this.scrollTop = function (t, e) {
                if (!arguments.length) return -this.top();
                this.top(-t, e)
            }, this.scrollLeft = function (t, e) {
                if (!arguments.length) return -this.left();
                this.left(-t, e)
            }, this.left = function (n, r) {
                if (!arguments.length) return -(t.scrollLeft + f);
                var i = t.scrollLeft - d,
                    o = f;
                if ((i > 2 || i < -2) && !r) return d = t.scrollLeft, Pr.killTweensOf(this, {
                    left: 1,
                    scrollLeft: 1
                }), this.left(-d), void(e.onKill && e.onKill());
                (n = -n) < 0 ? (f = n - .5 | 0, n = 0) : n > v ? (f = n - v | 0, n = v) : f = 0, (f || o) && (this._skip || (u[ai] = a + -f + "px," + -h + s), f + m >= 0 && (u.paddingRight = f + m + "px")), t.scrollLeft = 0 | n, d = t.scrollLeft
            }, this.top = function (n, r) {
                if (!arguments.length) return -(t.scrollTop + h);
                var i = t.scrollTop - p,
                    o = h;
                if ((i > 2 || i < -2) && !r) return p = t.scrollTop, Pr.killTweensOf(this, {
                    top: 1,
                    scrollTop: 1
                }), this.top(-p), void(e.onKill && e.onKill());
                (n = -n) < 0 ? (h = n - .5 | 0, n = 0) : n > y ? (h = n - y | 0, n = y) : h = 0, (h || o) && (this._skip || (u[ai] = a + -f + "px," + -h + s)), t.scrollTop = 0 | n, p = t.scrollTop
            }, this.maxScrollTop = function () {
                return y
            }, this.maxScrollLeft = function () {
                return v
            }, this.disable = function () {
                for (c = l.firstChild; c;) o = c.nextSibling, t.appendChild(c), c = o;
                t === l.parentNode && t.removeChild(l)
            }, this.enable = function () {
                if ((c = t.firstChild) !== l) {
                    for (; c;) o = c.nextSibling, l.appendChild(c), c = o;
                    t.appendChild(l), this.calibrate()
                }
            }, this.calibrate = function (e) {
                var o, a, s, c = t.clientWidth === n;
                p = t.scrollTop, d = t.scrollLeft, c && t.clientHeight === r && l.offsetHeight === i && g === t.scrollWidth && _ === t.scrollHeight && !e || ((h || f) && (a = this.left(), s = this.top(), this.left(-t.scrollLeft), this.top(-t.scrollTop)), o = Bi(t), c && !e || (u.display = "block", u.width = "auto", u.paddingRight = "0px", (m = Math.max(0, t.scrollWidth - t.clientWidth)) && (m += parseFloat(o.paddingLeft) + (Jr ? parseFloat(o.paddingRight) : 0))), u.display = "inline-block", u.position = "relative", u.overflow = "visible", u.verticalAlign = "top", u.boxSizing = "content-box", u.width = "100%", u.paddingRight = m + "px", Jr && (u.paddingBottom = o.paddingBottom), n = t.clientWidth, r = t.clientHeight, g = t.scrollWidth, _ = t.scrollHeight, v = t.scrollWidth - n, y = t.scrollHeight - r, i = l.offsetHeight, u.display = "block", (a || s) && (this.left(a), this.top(s)))
            }, this.content = l, this.element = t, this._skip = !1, this.enable()
        },
        Ki = function (t) {
            if (ti() && document.body) {
                var e = window && window.navigator;
                Rr = window, Xr = document, Yr = Xr.documentElement, Nr = Xr.body, Fr = ci("div"), Zr = !!window.PointerEvent, (Br = ci("div")).style.cssText = "visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab", Kr = "grab" === Br.style.cursor ? "grab" : "move", Gr = e && -1 !== e.userAgent.toLowerCase().indexOf("android"), Wr = "ontouchstart" in Yr && "orientation" in Rr || e && (e.MaxTouchPoints > 0 || e.msMaxTouchPoints > 0), r = ci("div"), i = ci("div"), o = i.style, a = Nr, o.display = "inline-block", o.position = "relative", r.style.cssText = i.innerHTML = "width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden", r.appendChild(i), a.appendChild(r), n = i.offsetHeight + 18 > r.scrollHeight, a.removeChild(r), Jr = n, Ur = function (t) {
                    for (var e = t.split(","), n = (("onpointerdown" in Fr ? "pointerdown,pointermove,pointerup,pointercancel" : "onmspointerdown" in Fr ? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel" : t).split(",")), r = {}, i = 4; --i > -1;) r[e[i]] = n[i], r[n[i]] = e[i];
                    try {
                        Yr.addEventListener("test", null, Object.defineProperty({}, "passive", {
                            get: function () {
                                Hr = 1
                            }
                        }))
                    } catch (t) {}
                    return r
                }("touchstart,touchmove,touchend,touchcancel"), Si(Xr, "touchcancel", oi), Si(Rr, "touchmove", oi), Nr && Nr.addEventListener("touchstart", oi), Si(Xr, "contextmenu", (function () {
                    for (var t in gi) gi[t].isPressed && gi[t].endDrag()
                })), Pr = zr = ei()
            }
            var n, r, i, o, a;
            Pr ? (Qr = Pr.plugins.inertia, qr = Pr.utils.checkPrefix, ai = qr(ai), si = qr(si), Ir = Pr.utils.toArray, $r = !!qr("perspective")) : t && console.warn("Please gsap.registerPlugin(Draggable)")
        },
        Zi = function (t) {
            var e, n;

            function r(e, n) {
                var i;
                i = t.call(this) || this, zr || Ki(1), e = Ir(e)[0], Qr || (Qr = Pr.plugins.inertia), i.vars = n = bi(n || {}), i.target = e, i.x = i.y = i.rotation = 0, i.dragResistance = parseFloat(n.dragResistance) || 0, i.edgeResistance = isNaN(n.edgeResistance) ? 1 : parseFloat(n.edgeResistance) || 0, i.lockAxis = n.lockAxis, i.autoScroll = n.autoScroll || 0, i.lockedAxis = null, i.allowEventDefault = !!n.allowEventDefault, Pr.getProperty(e, "x");
                var o, a, s, l, u, c, h, f, p, d, g, _, m, v, y, x, b, w, T, M, k, S, O, E, A, C, L, D, P, R, X, Y = (n.type || "x,y").toLowerCase(),
                    N = ~Y.indexOf("x") || ~Y.indexOf("y"),
                    F = -1 !== Y.indexOf("rotation"),
                    B = F ? "rotation" : N ? "x" : "left",
                    z = N ? "y" : "top",
                    q = !(!~Y.indexOf("x") && !~Y.indexOf("left") && "scroll" !== Y),
                    I = !(!~Y.indexOf("y") && !~Y.indexOf("top") && "scroll" !== Y),
                    H = n.minimumMovement || 2,
                    W = function (t) {
                        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return t
                    }(i),
                    U = Ir(n.trigger || n.handle || e),
                    V = {},
                    j = 0,
                    G = !1,
                    Q = n.autoScrollMarginTop || 40,
                    K = n.autoScrollMarginRight || 40,
                    Z = n.autoScrollMarginBottom || 40,
                    $ = n.autoScrollMarginLeft || 40,
                    J = n.clickableTest || ji,
                    tt = 0,
                    et = e._gsap || Pr.core.getCache(e),
                    nt = function t(e) {
                        return "fixed" === Bi(e).position || ((e = e.parentNode) && 1 === e.nodeType ? t(e) : void 0)
                    }(e),
                    rt = function (t, n) {
                        return parseFloat(et.get(e, t, n))
                    },
                    it = e.ownerDocument || Xr,
                    ot = function (t) {
                        return Ei(t), t.stopImmediatePropagation && t.stopImmediatePropagation(), !1
                    },
                    at = function t(n) {
                        if (W.autoScroll && W.isDragging && (G || b)) {
                            var r, i, o, s, l, u, c, h, p = e,
                                d = 15 * W.autoScroll;
                            for (G = !1, xi.scrollTop = null != Rr.pageYOffset ? Rr.pageYOffset : null != it.documentElement.scrollTop ? it.documentElement.scrollTop : it.body.scrollTop, xi.scrollLeft = null != Rr.pageXOffset ? Rr.pageXOffset : null != it.documentElement.scrollLeft ? it.documentElement.scrollLeft : it.body.scrollLeft, s = W.pointerX - xi.scrollLeft, l = W.pointerY - xi.scrollTop; p && !i;) r = (i = Xi(p.parentNode)) ? xi : p.parentNode, o = i ? {
                                bottom: Math.max(Yr.clientHeight, Rr.innerHeight || 0),
                                right: Math.max(Yr.clientWidth, Rr.innerWidth || 0),
                                left: 0,
                                top: 0
                            } : r.getBoundingClientRect(), u = c = 0, I && ((h = r._gsMaxScrollY - r.scrollTop) < 0 ? c = h : l > o.bottom - Z && h ? (G = !0, c = Math.min(h, d * (1 - Math.max(0, o.bottom - l) / Z) | 0)) : l < o.top + Q && r.scrollTop && (G = !0, c = -Math.min(r.scrollTop, d * (1 - Math.max(0, l - o.top) / Q) | 0)), c && (r.scrollTop += c)), q && ((h = r._gsMaxScrollX - r.scrollLeft) < 0 ? u = h : s > o.right - K && h ? (G = !0, u = Math.min(h, d * (1 - Math.max(0, o.right - s) / K) | 0)) : s < o.left + $ && r.scrollLeft && (G = !0, u = -Math.min(r.scrollLeft, d * (1 - Math.max(0, s - o.left) / $) | 0)), u && (r.scrollLeft += u)), i && (u || c) && (Rr.scrollTo(r.scrollLeft, r.scrollTop), yt(W.pointerX + u, W.pointerY + c)), p = r
                        }
                        if (b) {
                            var g = W.x,
                                _ = W.y;
                            F ? (W.deltaX = g - parseFloat(et.rotation), W.rotation = g, et.rotation = g + "deg", et.renderTransform(1, et)) : a ? (I && (W.deltaY = _ - a.top(), a.top(_)), q && (W.deltaX = g - a.left(), a.left(g))) : N ? (I && (W.deltaY = _ - parseFloat(et.y), et.y = _ + "px"), q && (W.deltaX = g - parseFloat(et.x), et.x = g + "px"), et.renderTransform(1, et)) : (I && (W.deltaY = _ - parseFloat(e.style.top || 0), e.style.top = _ + "px"), q && (W.deltaX = g - parseFloat(e.style.left || 0), e.style.left = g + "px")), !f || n || D || (D = !0, !1 === Ii(W, "drag", "onDrag") && (q && (W.x -= W.deltaX), I && (W.y -= W.deltaY), t(!0)), D = !1)
                        }
                        b = !1
                    },
                    st = function (t, n) {
                        var r, i, o = W.x,
                            s = W.y;
                        e._gsap || (et = Pr.core.getCache(e)), et.uncache && Pr.getProperty(e, "x"), N ? (W.x = parseFloat(et.x), W.y = parseFloat(et.y)) : F ? W.x = W.rotation = parseFloat(et.rotation) : a ? (W.y = a.top(), W.x = a.left()) : (W.y = parseFloat(e.style.top || (i = Bi(e)) && i.top) || 0, W.x = parseFloat(e.style.left || (i || {}).left) || 0), (T || M || k) && !n && (W.isDragging || W.isThrowing) && (k && (yi.x = W.x, yi.y = W.y, (r = k(yi)).x !== W.x && (W.x = r.x, b = !0), r.y !== W.y && (W.y = r.y, b = !0)), T && (r = T(W.x)) !== W.x && (W.x = r, F && (W.rotation = r), b = !0), M && ((r = M(W.y)) !== W.y && (W.y = r), b = !0)), b && at(!0), t || (W.deltaX = W.x - o, W.deltaY = W.y - s, Ii(W, "throwupdate", "onThrowUpdate"))
                    },
                    lt = function (t, e, n, r) {
                        return null == e && (e = -1e20), null == n && (n = 1e20), ni(t) ? function (i) {
                            var o = W.isPressed ? 1 - W.edgeResistance : 1;
                            return t.call(W, i > n ? n + (i - n) * o : i < e ? e + (i - e) * o : i) * r
                        } : ui(t) ? function (r) {
                            for (var i, o, a = t.length, s = 0, l = 1e20; --a > -1;)(o = (i = t[a]) - r) < 0 && (o = -o), o < l && i >= e && i <= n && (s = a, l = o);
                            return t[s]
                        } : isNaN(t) ? function (t) {
                            return t
                        } : function () {
                            return t * r
                        }
                    },
                    ut = function () {
                        var t, r, i, o;
                        h = !1, a ? (a.calibrate(), W.minX = g = -a.maxScrollLeft(), W.minY = m = -a.maxScrollTop(), W.maxX = d = W.maxY = _ = 0, h = !0) : n.bounds && (t = Hi(n.bounds, e.parentNode), F ? (W.minX = g = t.left, W.maxX = d = t.left + t.width, W.minY = m = W.maxY = _ = 0) : ii(n.bounds.maxX) && ii(n.bounds.maxY) ? (r = Hi(e, e.parentNode), W.minX = g = Math.round(rt(B, "px") + t.left - r.left - .5), W.minY = m = Math.round(rt(z, "px") + t.top - r.top - .5), W.maxX = d = Math.round(g + (t.width - r.width)), W.maxY = _ = Math.round(m + (t.height - r.height))) : (t = n.bounds, W.minX = g = t.minX, W.minY = m = t.minY, W.maxX = d = t.maxX, W.maxY = _ = t.maxY), g > d && (W.minX = d, W.maxX = d = g, g = W.minX), m > _ && (W.minY = _, W.maxY = _ = m, m = W.minY), F && (W.minRotation = g, W.maxRotation = d), h = !0), n.liveSnap && (i = !0 === n.liveSnap ? n.snap || {} : n.liveSnap, o = ui(i) || ni(i), F ? (T = lt(o ? i : i.rotation, g, d, 1), M = null) : i.points ? k = function (t, e, n, r, i, o, a) {
                            return o = o && o < 1e20 ? o * o : 1e20, ni(t) ? function (s) {
                                var l, u, c, h = W.isPressed ? 1 - W.edgeResistance : 1,
                                    f = s.x,
                                    p = s.y;
                                return s.x = f = f > n ? n + (f - n) * h : f < e ? e + (f - e) * h : f, s.y = p = p > i ? i + (p - i) * h : p < r ? r + (p - r) * h : p, (l = t.call(W, s)) !== s && (s.x = l.x, s.y = l.y), 1 !== a && (s.x *= a, s.y *= a), o < 1e20 && (u = s.x - f) * u + (c = s.y - p) * c > o && (s.x = f, s.y = p), s
                            } : ui(t) ? function (e) {
                                for (var n, r, i, a, s = t.length, l = 0, u = 1e20; --s > -1;)(a = (n = (i = t[s]).x - e.x) * n + (r = i.y - e.y) * r) < u && (l = s, u = a);
                                return u <= o ? t[l] : e
                            } : function (t) {
                                return t
                            }
                        }(o ? i : i.points, g, d, m, _, i.radius, a ? -1 : 1) : (q && (T = lt(o ? i : i.x || i.left || i.scrollLeft, g, d, a ? -1 : 1)), I && (M = lt(o ? i : i.y || i.top || i.scrollTop, m, _, a ? -1 : 1))))
                    },
                    ct = function () {
                        W.isThrowing = !1, Ii(W, "throwcomplete", "onThrowComplete")
                    },
                    ht = function () {
                        W.isThrowing = !1
                    },
                    ft = function (t, r) {
                        var i, o, s, l;
                        t && Qr ? (!0 === t && (i = n.snap || n.liveSnap || {}, o = ui(i) || ni(i), t = {
                            resistance: (n.throwResistance || n.resistance || 1e3) / (F ? 10 : 1)
                        }, F ? t.rotation = Vi(W, o ? i : i.rotation, d, g, 1, r) : (q && (t[B] = Vi(W, o ? i : i.points || i.x || i.left, d, g, a ? -1 : 1, r || "x" === W.lockedAxis)), I && (t[z] = Vi(W, o ? i : i.points || i.y || i.top, _, m, a ? -1 : 1, r || "y" === W.lockedAxis)), (i.points || ui(i) && ri(i[0])) && (t.linkedProps = B + "," + z, t.radius = i.radius))), W.isThrowing = !0, l = isNaN(n.overshootTolerance) ? 1 === n.edgeResistance ? 0 : 1 - W.edgeResistance + .2 : n.overshootTolerance, t.duration || (t.duration = {
                            max: Math.max(n.minDuration || 0, "maxDuration" in n ? n.maxDuration : 2),
                            min: isNaN(n.minDuration) ? 0 === l || ri(t) && t.resistance > 1e3 ? 0 : .5 : n.minDuration,
                            overshoot: l
                        }), W.tween = s = Pr.to(a || e, {
                            inertia: t,
                            data: "_draggable",
                            onComplete: ct,
                            onInterrupt: ht,
                            onUpdate: n.fastMode ? Ii : st,
                            onUpdateParams: n.fastMode ? [W, "onthrowupdate", "onThrowUpdate"] : i && i.radius ? [!1, !0] : []
                        }), n.fastMode || (a && (a._skip = !0), s.render(1e9, !0, !0), st(!0, !0), W.endX = W.x, W.endY = W.y, F && (W.endRotation = W.x), s.play(0), st(!0, !0), a && (a._skip = !1))) : h && W.applyBounds()
                    },
                    pt = function (t) {
                        var n, r = E;
                        E = Dr(e.parentNode, !0), t && W.isPressed && !E.equals(r || new Lr) && (n = r.inverse().apply({
                            x: s,
                            y: l
                        }), E.apply(n, n), s = n.x, l = n.y), E.equals(fi) && (E = null)
                    },
                    dt = function () {
                        var t, n, r, i = 1 - W.edgeResistance,
                            o = nt ? Di(it) : 0,
                            f = nt ? Li(it) : 0;
                        pt(!1), Wi.x = W.pointerX - o, Wi.y = W.pointerY - f, E && E.apply(Wi, Wi), s = Wi.x, l = Wi.y, b && (yt(W.pointerX, W.pointerY), at(!0)), a ? (ut(), c = a.top(), u = a.left()) : (gt() ? (st(!0, !0), ut()) : W.applyBounds(), F ? (t = e.ownerSVGElement ? [et.xOrigin - e.getBBox().x, et.yOrigin - e.getBBox().y] : (Bi(e)[si] || "0 0").split(" "), x = W.rotationOrigin = Dr(e).apply({
                            x: parseFloat(t[0]) || 0,
                            y: parseFloat(t[1]) || 0
                        }), st(!0, !0), n = W.pointerX - x.x - o, r = x.y - W.pointerY + f, u = W.x, c = W.y = Math.atan2(r, n) * hi) : (c = rt(z, "px"), u = rt(B, "px"))), h && i && (u > d ? u = d + (u - d) / i : u < g && (u = g - (g - u) / i), F || (c > _ ? c = _ + (c - _) / i : c < m && (c = m - (m - c) / i))), W.startX = u = li(u), W.startY = c = li(c)
                    },
                    gt = function () {
                        return W.tween && W.tween.isActive()
                    },
                    _t = function () {
                        !Br.parentNode || gt() || W.isDragging || Br.parentNode.removeChild(Br)
                    },
                    mt = function (t, i) {
                        var u;
                        if (!o || W.isPressed || !t || !("mousedown" !== t.type && "pointerdown" !== t.type || i) && pi() - tt < 30 && Ur[W.pointerEvent.type]) X && t && o && Ei(t);
                        else {
                            if (A = gt(), W.pointerEvent = t, Ur[t.type] ? (O = ~t.type.indexOf("touch") ? t.currentTarget || t.target : it, Si(O, "touchend", xt), Si(O, "touchmove", vt), Si(O, "touchcancel", xt), Si(it, "touchstart", Ci)) : (O = null, Si(it, "mousemove", vt)), L = null, Zr && O || (Si(it, "mouseup", xt), t && t.target && Si(t.target, "mouseup", xt)), S = J.call(W, t.target) && !1 === n.dragClickables && !i) return Si(t.target, "change", xt), Ii(W, "pressInit", "onPressInit"), Ii(W, "press", "onPress"), Gi(U, !0), void(X = !1);
                            var c;
                            if (C = !(!O || q === I || !1 === W.vars.allowNativeTouchScrolling || W.vars.allowContextMenu && t && (t.ctrlKey || t.which > 2)) && (q ? "y" : "x"), (X = !C && !W.allowEventDefault) && (Ei(t), Si(Rr, "touchforcechange", Ei)), t.changedTouches ? (t = v = t.changedTouches[0], y = t.identifier) : t.pointerId ? y = t.pointerId : v = y = null, Vr++, c = at, di.push(c), 1 === di.length && Pr.ticker.add(Ti), l = W.pointerY = t.pageY, s = W.pointerX = t.pageX, Ii(W, "pressInit", "onPressInit"), (C || W.autoScroll) && Ni(e.parentNode), !e.parentNode || !W.autoScroll || a || F || !e.parentNode._gsMaxScrollX || Br.parentNode || e.getBBox || (Br.style.width = e.parentNode.scrollWidth + "px", e.parentNode.appendChild(Br)), dt(), W.tween && W.tween.kill(), W.isThrowing = !1, Pr.killTweensOf(a || e, V, !0), a && Pr.killTweensOf(e, {
                                    scrollTo: 1
                                }, !0), W.tween = W.lockedAxis = null, (n.zIndexBoost || !F && !a && !1 !== n.zIndexBoost) && (e.style.zIndex = r.zIndex++), W.isPressed = !0, f = !(!n.onDrag && !W._listeners.drag), p = !(!n.onMove && !W._listeners.move), !F && (!1 !== n.cursor || n.activeCursor))
                                for (u = U.length; --u > -1;) Pr.set(U[u], {
                                    cursor: n.activeCursor || n.cursor || ("grab" === Kr ? "grabbing" : Kr)
                                });
                            Ii(W, "press", "onPress")
                        }
                    },
                    vt = function (t) {
                        var n, r, i, a, u, c, h = t;
                        if (o && !jr && W.isPressed && t) {
                            if (W.pointerEvent = t, n = t.changedTouches) {
                                if ((t = n[0]) !== v && t.identifier !== y) {
                                    for (a = n.length; --a > -1 && (t = n[a]).identifier !== y && t.target !== e;);
                                    if (a < 0) return
                                }
                            } else if (t.pointerId && y && t.pointerId !== y) return;
                            O && C && !L && (Wi.x = t.pageX, Wi.y = t.pageY, E && E.apply(Wi, Wi), r = Wi.x, i = Wi.y, ((u = Math.abs(r - s)) !== (c = Math.abs(i - l)) && (u > H || c > H) || Gr && C === L) && (L = u > c && q ? "x" : "y", C && L !== C && Si(Rr, "touchforcechange", Ei), !1 !== W.vars.lockAxisOnTouchScroll && q && I && (W.lockedAxis = "x" === L ? "y" : "x", ni(W.vars.onLockAxis) && W.vars.onLockAxis.call(W, h)), Gr && C === L)) ? xt(h) : (W.allowEventDefault || C && (!L || C === L) || !1 === h.cancelable ? X && (X = !1) : (Ei(h), X = !0), W.autoScroll && (G = !0), yt(t.pageX, t.pageY, p))
                        } else X && t && o && Ei(t)
                    },
                    yt = function (t, e, n) {
                        var r, i, o, a, f, p, v = 1 - W.dragResistance,
                            y = 1 - W.edgeResistance,
                            w = W.pointerX,
                            S = W.pointerY,
                            O = c,
                            A = W.x,
                            C = W.y,
                            L = W.endX,
                            D = W.endY,
                            P = W.endRotation,
                            R = b;
                        W.pointerX = t, W.pointerY = e, nt && (t -= Di(it), e -= Li(it)), F ? (a = Math.atan2(x.y - e, t - x.x) * hi, (f = W.y - a) > 180 ? (c -= 360, W.y = a) : f < -180 && (c += 360, W.y = a), W.x !== u || Math.abs(c - a) > H ? (W.y = a, o = u + (c - a) * v) : o = u) : (E && (p = t * E.a + e * E.c + E.e, e = t * E.b + e * E.d + E.f, t = p), (i = e - l) < H && i > -H && (i = 0), (r = t - s) < H && r > -H && (r = 0), (W.lockAxis || W.lockedAxis) && (r || i) && ((p = W.lockedAxis) || (W.lockedAxis = p = q && Math.abs(r) > Math.abs(i) ? "y" : I ? "x" : null, p && ni(W.vars.onLockAxis) && W.vars.onLockAxis.call(W, W.pointerEvent)), "y" === p ? i = 0 : "x" === p && (r = 0)), o = li(u + r * v), a = li(c + i * v)), (T || M || k) && (W.x !== o || W.y !== a && !F) ? (k && (yi.x = o, yi.y = a, p = k(yi), o = li(p.x), a = li(p.y)), T && (o = li(T(o))), M && (a = li(M(a)))) : h && (o > d ? o = d + Math.round((o - d) * y) : o < g && (o = g + Math.round((o - g) * y)), F || (a > _ ? a = Math.round(_ + (a - _) * y) : a < m && (a = Math.round(m + (a - m) * y)))), (W.x !== o || W.y !== a && !F) && (F ? (W.endRotation = W.x = W.endX = o, b = !0) : (I && (W.y = W.endY = a, b = !0), q && (W.x = W.endX = o, b = !0)), n && !1 === Ii(W, "move", "onMove") ? (W.pointerX = w, W.pointerY = S, c = O, W.x = A, W.y = C, W.endX = L, W.endY = D, W.endRotation = P, b = R) : !W.isDragging && W.isPressed && (W.isDragging = !0, Ii(W, "dragstart", "onDragStart")))
                    },
                    xt = function t(r, i) {
                        if (o && W.isPressed && (!r || null == y || i || !(r.pointerId && r.pointerId !== y && r.target !== e || r.changedTouches && ! function (t, e) {
                                for (var n = t.length; n--;)
                                    if (t[n].identifier === e) return !0
                            }(r.changedTouches, y)))) {
                            W.isPressed = !1;
                            var a, s, l, u, c, h = r,
                                f = W.isDragging,
                                p = W.vars.allowContextMenu && r && (r.ctrlKey || r.which > 2),
                                d = Pr.delayedCall(.001, _t);
                            if (O ? (Oi(O, "touchend", t), Oi(O, "touchmove", vt), Oi(O, "touchcancel", t), Oi(it, "touchstart", Ci)) : Oi(it, "mousemove", vt), Oi(Rr, "touchforcechange", Ei), Zr && O || (Oi(it, "mouseup", t), r && r.target && Oi(r.target, "mouseup", t)), b = !1, f && (j = vi = pi(), W.isDragging = !1), S && !p) return r && (Oi(r.target, "change", t), W.pointerEvent = h), Gi(U, !1), Ii(W, "release", "onRelease"), Ii(W, "click", "onClick"), void(S = !1);
                            if (ki(at), !F)
                                for (s = U.length; --s > -1;) Fi(U[s], "cursor", n.cursor || (!1 !== n.cursor ? Kr : null));
                            if (Vr--, r) {
                                if ((a = r.changedTouches) && (r = a[0]) !== v && r.identifier !== y) {
                                    for (s = a.length; --s > -1 && (r = a[s]).identifier !== y && r.target !== e;);
                                    if (s < 0) return
                                }
                                W.pointerEvent = h, W.pointerX = r.pageX, W.pointerY = r.pageY
                            }
                            return p && h ? (Ei(h), X = !0, Ii(W, "release", "onRelease")) : h && !f ? (X = !1, A && (n.snap || n.bounds) && ft(n.inertia || n.throwProps), Ii(W, "release", "onRelease"), Gr && "touchmove" === h.type || -1 !== h.type.indexOf("cancel") || (Ii(W, "click", "onClick"), pi() - tt < 300 && Ii(W, "doubleclick", "onDoubleClick"), u = h.target || e, tt = pi(), c = function () {
                                tt === P || !W.enabled() || W.isPressed || h.defaultPrevented || (u.click ? u.click() : it.createEvent && ((l = it.createEvent("MouseEvents")).initMouseEvent("click", !0, !0, Rr, 1, W.pointerEvent.screenX, W.pointerEvent.screenY, W.pointerX, W.pointerY, !1, !1, !1, !1, 0, null), u.dispatchEvent(l)))
                            }, Gr || h.defaultPrevented || Pr.delayedCall(.05, c))) : (ft(n.inertia || n.throwProps), W.allowEventDefault || !h || !1 === n.dragClickables && J.call(W, h.target) || !f || C && (!L || C !== L) || !1 === h.cancelable ? X = !1 : (X = !0, Ei(h)), Ii(W, "release", "onRelease")), gt() && d.duration(W.tween.duration()), f && Ii(W, "dragend", "onDragEnd"), !0
                        }
                        X && r && o && Ei(r)
                    },
                    bt = function (t) {
                        if (t && W.isDragging && !a) {
                            var n = t.target || e.parentNode,
                                r = n.scrollLeft - n._gsScrollX,
                                i = n.scrollTop - n._gsScrollY;
                            (r || i) && (E ? (s -= r * E.a + i * E.c, l -= i * E.d + r * E.b) : (s -= r, l -= i), n._gsScrollX += r, n._gsScrollY += i, yt(W.pointerX, W.pointerY))
                        }
                    },
                    wt = function (t) {
                        var e = pi(),
                            n = e - tt < 40,
                            r = e - j < 40,
                            i = n && P === tt,
                            o = W.pointerEvent && W.pointerEvent.defaultPrevented,
                            a = n && R === tt,
                            s = t.isTrusted || null == t.isTrusted && n && i;
                        if ((i || r && !1 !== W.vars.suppressClickOnDrag) && t.stopImmediatePropagation && t.stopImmediatePropagation(), n && (!W.pointerEvent || !W.pointerEvent.defaultPrevented) && (!i || s && !a)) return s && i && (R = tt), void(P = tt);
                        (W.isPressed || r || n) && (s && t.detail && n && !o || Ei(t)), n || r || (t && t.target && (W.pointerEvent = t), Ii(W, "click", "onClick"))
                    },
                    Tt = function (t) {
                        return E ? {
                            x: t.x * E.a + t.y * E.c + E.e,
                            y: t.x * E.b + t.y * E.d + E.f
                        } : {
                            x: t.x,
                            y: t.y
                        }
                    };
                return (w = r.get(e)) && w.kill(), i.startDrag = function (t, n) {
                    var r, i, o, a;
                    mt(t || W.pointerEvent, !0), n && !W.hitTest(t || W.pointerEvent) && (r = qi(t || W.pointerEvent), i = qi(e), o = Tt({
                        x: r.left + r.width / 2,
                        y: r.top + r.height / 2
                    }), a = Tt({
                        x: i.left + i.width / 2,
                        y: i.top + i.height / 2
                    }), s -= o.x - a.x, l -= o.y - a.y), W.isDragging || (W.isDragging = !0, Ii(W, "dragstart", "onDragStart"))
                }, i.drag = vt, i.endDrag = function (t) {
                    return xt(t || W.pointerEvent, !0)
                }, i.timeSinceDrag = function () {
                    return W.isDragging ? 0 : (pi() - j) / 1e3
                }, i.timeSinceClick = function () {
                    return (pi() - tt) / 1e3
                }, i.hitTest = function (t, e) {
                    return r.hitTest(W.target, t, e)
                }, i.getDirection = function (t, n) {
                    var r, i, o, a, s, l, h = "velocity" === t && Qr ? t : ri(t) && !F ? "element" : "start";
                    return "element" === h && (s = qi(W.target), l = qi(t)), r = "start" === h ? W.x - u : "velocity" === h ? Qr.getVelocity(e, B) : s.left + s.width / 2 - (l.left + l.width / 2), F ? r < 0 ? "counter-clockwise" : "clockwise" : (n = n || 2, i = "start" === h ? W.y - c : "velocity" === h ? Qr.getVelocity(e, z) : s.top + s.height / 2 - (l.top + l.height / 2), a = (o = Math.abs(r / i)) < 1 / n ? "" : r < 0 ? "left" : "right", o < n && ("" !== a && (a += "-"), a += i < 0 ? "up" : "down"), a)
                }, i.applyBounds = function (t, r) {
                    var i, o, a, s, l, u;
                    if (t && n.bounds !== t) return n.bounds = t, W.update(!0, r);
                    if (st(!0), ut(), h && !gt()) {
                        if (i = W.x, o = W.y, i > d ? i = d : i < g && (i = g), o > _ ? o = _ : o < m && (o = m), (W.x !== i || W.y !== o) && (a = !0, W.x = W.endX = i, F ? W.endRotation = i : W.y = W.endY = o, b = !0, at(!0), W.autoScroll && !W.isDragging))
                            for (Ni(e.parentNode), s = e, xi.scrollTop = null != Rr.pageYOffset ? Rr.pageYOffset : null != it.documentElement.scrollTop ? it.documentElement.scrollTop : it.body.scrollTop, xi.scrollLeft = null != Rr.pageXOffset ? Rr.pageXOffset : null != it.documentElement.scrollLeft ? it.documentElement.scrollLeft : it.body.scrollLeft; s && !u;) l = (u = Xi(s.parentNode)) ? xi : s.parentNode, I && l.scrollTop > l._gsMaxScrollY && (l.scrollTop = l._gsMaxScrollY), q && l.scrollLeft > l._gsMaxScrollX && (l.scrollLeft = l._gsMaxScrollX), s = l;
                        W.isThrowing && (a || W.endX > d || W.endX < g || W.endY > _ || W.endY < m) && ft(n.inertia || n.throwProps, a)
                    }
                    return W
                }, i.update = function (t, n, r) {
                    var i = W.x,
                        o = W.y;
                    return pt(!n), t ? W.applyBounds() : (b && r && at(!0), st(!0)), n && (yt(W.pointerX, W.pointerY), b && at(!0)), W.isPressed && !n && (q && Math.abs(i - W.x) > .01 || I && Math.abs(o - W.y) > .01 && !F) && dt(), W.autoScroll && (Ni(e.parentNode, W.isDragging), G = W.isDragging, at(!0), Ri(e, bt), Pi(e, bt)), W
                }, i.enable = function (t) {
                    var r, i, s, l = {
                        lazy: !0
                    };
                    if (F || !1 === n.cursor || (l.cursor = n.cursor || Kr), Pr.utils.checkPrefix("touchCallout") && (l.touchCallout = "none"), "soft" !== t) {
                        for (wi(U, q === I ? "none" : n.allowNativeTouchScrolling && e.scrollHeight === e.clientHeight == (e.scrollWidth === e.clientHeight) || n.allowEventDefault ? "manipulation" : q ? "pan-y" : "pan-x"), i = U.length; --i > -1;) s = U[i], Zr || Si(s, "mousedown", mt), Si(s, "touchstart", mt), Si(s, "click", wt, !0), Pr.set(s, l), s.getBBox && s.ownerSVGElement && Pr.set(s.ownerSVGElement, {
                            touchAction: q === I ? "none" : n.allowNativeTouchScrolling || n.allowEventDefault ? "manipulation" : q ? "pan-y" : "pan-x"
                        }), n.allowContextMenu || Si(s, "contextmenu", ot);
                        Gi(U, !1)
                    }
                    return Pi(e, bt), o = !0, Qr && "soft" !== t && Qr.track(a || e, N ? "x,y" : F ? "rotation" : "top,left"), e._gsDragID = r = "d" + _i++, gi[r] = W, a && (a.enable(), a.element._gsDragID = r), (n.bounds || F) && dt(), n.bounds && W.applyBounds(), W
                }, i.disable = function (t) {
                    var n, r, i = W.isDragging;
                    if (!F)
                        for (n = U.length; --n > -1;) Fi(U[n], "cursor", null);
                    if ("soft" !== t) {
                        for (wi(U, null), n = U.length; --n > -1;) r = U[n], Fi(r, "touchCallout", null), Oi(r, "mousedown", mt), Oi(r, "touchstart", mt), Oi(r, "click", wt), Oi(r, "contextmenu", ot);
                        Gi(U, !0), O && (Oi(O, "touchcancel", xt), Oi(O, "touchend", xt), Oi(O, "touchmove", vt)), Oi(it, "mouseup", xt), Oi(it, "mousemove", vt)
                    }
                    return Ri(e, bt), o = !1, Qr && "soft" !== t && Qr.untrack(a || e, N ? "x,y" : F ? "rotation" : "top,left"), a && a.disable(), ki(at), W.isDragging = W.isPressed = S = !1, i && Ii(W, "dragend", "onDragEnd"), W
                }, i.enabled = function (t, e) {
                    return arguments.length ? t ? W.enable(e) : W.disable(e) : o
                }, i.kill = function () {
                    return W.isThrowing = !1, W.tween && W.tween.kill(), W.disable(), Pr.set(U, {
                        clearProps: "userSelect"
                    }), delete gi[e._gsDragID], W
                }, ~Y.indexOf("scroll") && (a = i.scrollProxy = new Qi(e, function (t, e) {
                    for (var n in e) n in t || (t[n] = e[n]);
                    return t
                }({
                    onKill: function () {
                        W.isPressed && xt(null)
                    }
                }, n)), e.style.overflowY = I && !Wr ? "auto" : "hidden", e.style.overflowX = q && !Wr ? "auto" : "hidden", e = a.content), F ? V.rotation = 1 : (q && (V[B] = 1), I && (V[z] = 1)), et.force3D = !("force3D" in n) || n.force3D, i.enable(), i
            }
            return n = t, (e = r).prototype = Object.create(n.prototype), e.prototype.constructor = e, e.__proto__ = n, r.register = function (t) {
                Pr = t, Ki()
            }, r.create = function (t, e) {
                return zr || Ki(!0), Ir(t).map((function (t) {
                    return new r(t, e)
                }))
            }, r.get = function (t) {
                return gi[(Ir(t)[0] || {})._gsDragID]
            }, r.timeSinceDrag = function () {
                return (pi() - vi) / 1e3
            }, r.hitTest = function (t, e, n) {
                if (t === e) return !1;
                var r, i, o, a = qi(t),
                    s = qi(e),
                    l = a.top,
                    u = a.left,
                    c = a.right,
                    h = a.bottom,
                    f = a.width,
                    p = a.height,
                    d = s.left > c || s.right < u || s.top > h || s.bottom < l;
                return d || !n ? !d : (o = -1 !== (n + "").indexOf("%"), n = parseFloat(n) || 0, (r = {
                    left: Math.max(u, s.left),
                    top: Math.max(l, s.top)
                }).width = Math.min(c, s.right) - r.left, r.height = Math.min(h, s.bottom) - r.top, !(r.width < 0 || r.height < 0) && (o ? (n *= .01, (i = r.width * r.height) >= f * p * n || i >= s.width * s.height * n) : r.width > n && r.height > n))
            }, r
        }(function () {
            function t(t) {
                this._listeners = {}, this.target = t || this
            }
            var e = t.prototype;
            return e.addEventListener = function (t, e) {
                var n = this._listeners[t] || (this._listeners[t] = []);
                ~n.indexOf(e) || n.push(e)
            }, e.removeEventListener = function (t, e) {
                var n = this._listeners[t],
                    r = n && n.indexOf(e) || -1;
                r > -1 && n.splice(r, 1)
            }, e.dispatchEvent = function (t) {
                var e, n = this;
                return (this._listeners[t] || []).forEach((function (r) {
                    return !1 === r.call(n, {
                        type: t,
                        target: n.target
                    }) && (e = !1)
                })), e
            }, t
        }());
    ! function (t, e) {
        for (var n in e) n in t || (t[n] = e[n])
    }(Zi.prototype, {
        pointerX: 0,
        pointerY: 0,
        startX: 0,
        startY: 0,
        deltaX: 0,
        deltaY: 0,
        isDragging: !1,
        isPressed: !1
    }), Zi.zIndex = 1e3, Zi.version = "3.6.1", ei() && Pr.registerPlugin(Zi), br.registerPlugin(Zi), window.addEventListener("DOMContentLoaded", () => {
        console.log("init javascript");
        const t = new Audio("https://myradio24.org/vinila"),
            e = document.querySelector(".player"),
            n = e.querySelector(".player__live"),
            r = e.querySelector(".player__nav-play"),
            i = e.querySelector(".player__nav-vol-progress"),
            o = e.querySelector(".player__nav-volbar-img"),
            a = e.querySelector(".player__quality-btn"),
            s = e.querySelector(".player__nav-eq"),
            l = e.querySelector("#player__eq"),
            u = e.querySelector("#player__wrap"),
            c = e.querySelector(".player__eq-icon"),
            h = document.querySelectorAll(".player__eq-input"),
            f = e.querySelector(".player__eq-select-btn"),
            p = e.querySelector(".player__eq-select-wrap"),
            d = e.querySelector(".player__eq-controls-checkbox"),
            g = e.querySelectorAll(".player__eq-select-item"),
            _ = e.querySelector(".player__cover"),
            m = e.querySelector(".player__live-duration"),
            v = m.querySelector("#hours"),
            y = m.querySelector("#minutes"),
            x = m.querySelector("#seconds"),
            b = e.querySelector(".player__eq-balance-range"),
            w = e.querySelector(".player__eq-controls-switch span"),
            T = e.querySelector(".player__next-song span"),
            M = e.querySelector(".player__quality"),
            k = document.querySelector("#radio-play-btn");
        let S, O = 0,
            E = 0,
            A = 0,
            C = 50;

        function L() {
            t.paused ? (r.classList.remove("lightPlayOn"), r.classList.add("lightPlayOff")) : (r.classList.remove("lightPlayOff"), r.classList.add("lightPlayOn"))
        }

        function D(t) {
            return t <= 9 ? "0" + t : t
        }

        function P() {
            O++, 59 == O && (E++, O = 0), 59 == E && (A++, E = 0), x.innerHTML = D(O), y.innerHTML = D(E), v.innerHTML = D(A)
        }

        function R(t = !0) {
            t ? (M.classList.remove("lightLampOff"), n.classList.remove("lightScreenOff"), u.style.display = "flex", l.style.display = "none", p.style.display = "none", f.setAttribute("data-open", 0), s.setAttribute("data-active", 0)) : (u.style.display = "none", l.style.display = "flex")
        }

        function X() {
            S = setInterval(P, 1e3), n.style.opacity = "1", n.classList.remove("lightScreenOff"), n.classList.add("lightScreenOn"), M.classList.remove("lightLampOff"), M.classList.add("lightLampOn"), r.setAttribute("data-play", 1), t.play(), L()
        }

        function Y() {
            r.setAttribute("data-play", 0), console.log(n.childNodes), n.style.opacity = "0.7", n.classList.remove("lightScreenOn"), n.classList.add("lightScreenOff"), M.classList.remove("lightLampOn"), M.classList.add("lightLampOff"), t.pause(), clearInterval(S), L()
        }
        setInterval((function () {
            'background-image: url("//myradio24.com/img/nocover.jpg");' == _.getAttribute("style") && _.setAttribute("style", "background-image: url(https://vinilavanila.online/wp-content/uploads/2021/05/logo_cover_300.png);")
        }), 1), t.volume = .5, t.setAttribute("crossorigin", "anonymous");
        const N = /@/i;
        setInterval((function () {
            N.test(T) && (T.innerHTML = "")
        }), 1e3), r.addEventListener("click", () => {
            0 == r.getAttribute("data-play") ? X() : Y()
        }), k.addEventListener("click", () => {
            0 == r.getAttribute("data-play") ? X() : Y()
        }), i.addEventListener("input", () => {
            const e = i.value;
            t.volume = e / 100,
                function (t, e) {
                    0 == t && e.setAttribute("src", "https://vinilavanila.online/wp-content/uploads/2021/05/volume_icon_off.png"), t > 1 && t < 80 && e.setAttribute("src", "https://vinilavanila.online/wp-content/uploads/2021/05/volume_icon_half.png"), t > 80 && e.setAttribute("src", "https://vinilavanila.online/wp-content/uploads/2021/05/volume_icon_full.png")
                }(e, o)
        }), o.addEventListener("click", () => {
            0 == t.volume ? (i.value = C, t.volume = C / 100, o.setAttribute("src", "https://vinilavanila.online/wp-content/uploads/2021/05/volume_icon_half.png")) : (C = i.value, i.value = 0, t.volume = 0, o.setAttribute("src", "https://vinilavanila.online/wp-content/uploads/2021/05/volume_icon_off.png"))
        }), c.addEventListener("click", () => {
            R()
        }), a.addEventListener("click", () => {
            320 == a.getAttribute("data-quality") ? (a.setAttribute("src", "https://vinilavanila.online/wp-content/uploads/2021/05/bitrate_left.png"), t.setAttribute("src", "https://myradio24.org/vinila_128"), 1 == r.getAttribute("data-play") && t.play(), a.setAttribute("data-quality", 128)) : (a.setAttribute("src", "https://vinilavanila.online/wp-content/uploads/2021/05/bitrate_right.png"), t.setAttribute("src", "https://myradio24.org/vinila"), 1 == r.getAttribute("data-play") && t.play(), a.setAttribute("data-quality", 320))
        }), f.addEventListener("click", () => {
            0 == f.getAttribute("data-open") ? (f.setAttribute("data-open", 1), p.style.display = "flex") : (f.setAttribute("data-open", 0), p.style.display = "none")
        }), document.addEventListener("click", t => {
            const e = t.target;
            e != p && e != p.childNodes && e != f && (p.style.display = "none", f.setAttribute("data-open", 0))
        }), s.addEventListener("click", () => {
            0 == s.getAttribute("data-active") ? (d.checked || d.click(), s.setAttribute("data-active", 1), R(!1)) : (R(), s.setAttribute("data-active", 0))
        }), d.addEventListener("change", () => {
            d.checked ? (w.innerHTML = "EQ enable", s.classList.remove("lightEqOff"), s.classList.add("lightEqOn")) : (w.innerHTML = "EQ disable", s.classList.remove("lightEqOn"), s.classList.add("lightEqOff"))
        });
        const F = new(window.AudioContext || window.webkitAudioContext),
            B = F.createMediaElementSource(t),
            z = function () {
                let t;
                return t = [32, 64, 125, 250, 500, 1e3, 2e3, 4e3, 8e3, 14e3].map(I), t.reduce((function (t, e) {
                    return t.connect(e), e
                })), t
            }();
        let q = {
            filters: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            balanceTransform: "transfom: rotate(0deg)",
            balanceValue: 0,
            namePattern: "Zero"
        };

        function I(t) {
            const e = F.createBiquadFilter();
            return e.type = "peaking", e.frequency.value = t, e.Q.value = 1, e.gain.value = 0, e
        }! function (t) {
            t.onplay = t => {
                F.resume()
            }, t.addEventListener("play", () => F.resume()), B.connect(z[0]), z[z.length - 1].connect(F.destination), h.forEach((t, e) => {
                t.addEventListener("change", t => {
                    z[e].gain.value = t.target.value, f.innerHTML = "Custom Preset", 0 == d.checked && d.click()
                })
            })
        }(t);
        const H = {
            rock: [5.4, 4.5, -3.6, -6.6, -2.7, 2.1, 6, 7.5, 7.8, 8.1],
            jazz: [3, 6.3, 3.6, -3.9, -5.1, 1.2, 9, 1.4, 2, 2.5],
            dub: [5.1, 4.8, 4.1, 1.5, -2.4, -3.2, -1.6, 1.6, 5.2, 5.5],
            trance: [7.4, 6.6, 4.2, 2.1, 0, -2.1, 0, 2.1, 4.2, 6.6],
            classic: [1.8, 2.1, 2.1, -.3, -2.7, -3.9, -3.9, 1, 2.4, 8.1]
        };

        function W() {
            z.forEach(t => {
                t.gain.value = 0
            }), h.forEach(t => {
                t.value = 0
            })
        }
        g.forEach(t => {
            t.addEventListener("click", t => {
                const e = t.target.getAttribute("data-pattern");
                f.innerHTML = t.target.textContent, "flat" == e ? W() : "custom" != e && (d.checked || (d.click(), f.innerHTML = t.target.textContent), H[e].forEach((t, e) => {
                    z[e].gain.value = t, h[e].value = t
                }))
            })
        }), d.addEventListener("change", () => {
            0 == d.checked ? (z.forEach((t, e) => {
                q.filters[e] = t.gain.value
            }), q.balanceTransform = b.getAttribute("style"), q.balanceValue = U.pan.value, q.namePattern = f.textContent, W(), V(), f.innerHTML = "Zero") : (z.forEach((t, e) => {
                t.gain.value = q.filters[e]
            }), h.forEach((t, e) => {
                t.value = q.filters[e]
            }), b.setAttribute("style", q.balanceTransform), U.pan.value = q.balanceValue, f.textContent = q.namePattern)
        }), g.forEach(t => {
            t.addEventListener("mouseover", () => {
                t.classList.add("player__eq-select-item_before")
            }), t.addEventListener("mouseout", () => {
                t.classList.remove("player__eq-select-item_before")
            })
        }), document.querySelector("button").addEventListener("click", (function () {
            F.resume().then(() => {
                console.log("Playback resumed successfully")
            })
        }));
        const U = new StereoPannerNode(F);

        function V() {
            U.pan.value = 0, b.setAttribute("style", "transform: rotate(0deg)")
        }
        Zi.create(b, {
            type: "rotation",
            force3D: !1,
            bounds: {
                maxRotation: 150,
                minRotation: -150
            },
            onDrag: function () {
                const t = parseInt(this.rotation % 360, 10);
                U.pan.value = t / 15 / 10
            }
        }), b.addEventListener("dblclick", () => {
            V()
        }), B.connect(U).connect(F.destination);
        setInterval(() => {
            let t = new Date,
                e = t.getUTCHours() + 3;
            document.querySelector(".player__live-time").innerHTML = (e > 24 ? "0" : "") + (e > 24 ? e - 24 : e) + ":" + (t.getMinutes() < 10 ? "0" : "") + t.getMinutes()
        }, 1e3)
    })
}]);