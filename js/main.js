! function(t) {
    var e = {};

    function n(o) {
        if (e[o]) return e[o].exports;
        var i = e[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return t[o].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }
    n.m = t, n.c = e, n.d = function(t, e, o) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: o
        })
    }, n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, n.t = function(t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var o = Object.create(null);
        if (n.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var i in t) n.d(o, i, function(e) {
                return t[e]
            }.bind(null, i));
        return o
    }, n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 3)
}([function(t, e, n) {
        "use strict";
        /*! npm.im/object-fit-images 3.2.4 */
        var o = "bfred-it:object-fit-images",
            i = /(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,
            r = "undefined" == typeof Image ? {
                style: {
                    "object-position": 1
                }
            } : new Image,
            s = "object-fit" in r.style,
            c = "object-position" in r.style,
            l = "background-size" in r.style,
            u = "string" == typeof r.currentSrc,
            a = r.getAttribute,
            f = r.setAttribute,
            d = !1;

        function p(t, e, n) {
            var o = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" + (e || 1) + "' height='" + (n || 0) + "'%3E%3C/svg%3E";
            a.call(t, "src") !== o && f.call(t, "src", o)
        }

        function g(t, e) {
            t.naturalWidth ? e(t) : setTimeout(g, 100, t, e)
        }

        function h(t) {
            var e = function(t) {
                    for (var e, n = getComputedStyle(t).fontFamily, o = {}; null !== (e = i.exec(n));) o[e[1]] = e[2];
                    return o
                }(t),
                n = t[o];
            if (e["object-fit"] = e["object-fit"] || "fill", !n.img) {
                if ("fill" === e["object-fit"]) return;
                if (!n.skipTest && s && !e["object-position"]) return
            }
            if (!n.img) {
                n.img = new Image(t.width, t.height), n.img.srcset = a.call(t, "data-ofi-srcset") || t.srcset, n.img.src = a.call(t, "data-ofi-src") || t.src, f.call(t, "data-ofi-src", t.src), t.srcset && f.call(t, "data-ofi-srcset", t.srcset), p(t, t.naturalWidth || t.width, t.naturalHeight || t.height), t.srcset && (t.srcset = "");
                try {
                    ! function(t) {
                        var e = {
                            get: function(e) {
                                return t[o].img[e || "src"]
                            },
                            set: function(e, n) {
                                return t[o].img[n || "src"] = e, f.call(t, "data-ofi-" + n, e), h(t), e
                            }
                        };
                        Object.defineProperty(t, "src", e), Object.defineProperty(t, "currentSrc", {
                            get: function() {
                                return e.get("currentSrc")
                            }
                        }), Object.defineProperty(t, "srcset", {
                            get: function() {
                                return e.get("srcset")
                            },
                            set: function(t) {
                                return e.set(t, "srcset")
                            }
                        })
                    }(t)
                } catch (t) {
                    window.console && console.warn("https://bit.ly/ofi-old-browser")
                }
            }! function(t) {
                if (t.srcset && !u && window.picturefill) {
                    var e = window.picturefill._;
                    t[e.ns] && t[e.ns].evaled || e.fillImg(t, {
                        reselect: !0
                    }), t[e.ns].curSrc || (t[e.ns].supported = !1, e.fillImg(t, {
                        reselect: !0
                    })), t.currentSrc = t[e.ns].curSrc || t.src
                }
            }(n.img), t.style.backgroundImage = 'url("' + (n.img.currentSrc || n.img.src).replace(/"/g, '\\"') + '")', t.style.backgroundPosition = e["object-position"] || "center", t.style.backgroundRepeat = "no-repeat", t.style.backgroundOrigin = "content-box", /scale-down/.test(e["object-fit"]) ? g(n.img, (function() {
                n.img.naturalWidth > t.width || n.img.naturalHeight > t.height ? t.style.backgroundSize = "contain" : t.style.backgroundSize = "auto"
            })) : t.style.backgroundSize = e["object-fit"].replace("none", "auto").replace("fill", "100% 100%"), g(n.img, (function(e) {
                p(t, e.naturalWidth, e.naturalHeight)
            }))
        }

        function m(t, e) {
            var n = !d && !t;
            if (e = e || {}, t = t || "img", c && !e.skipTest || !l) return !1;
            "img" === t ? t = document.getElementsByTagName("img") : "string" == typeof t ? t = document.querySelectorAll(t) : "length" in t || (t = [t]);
            for (var i = 0; i < t.length; i++) t[i][o] = t[i][o] || {
                skipTest: e.skipTest
            }, h(t[i]);
            n && (document.body.addEventListener("load", (function(t) {
                "IMG" === t.target.tagName && m(t.target, {
                    skipTest: e.skipTest
                })
            }), !0), d = !0, t = "img"), e.watchMQ && window.addEventListener("resize", m.bind(null, t, {
                skipTest: e.skipTest
            }))
        }
        m.supportsObjectFit = s, m.supportsObjectPosition = c,
            function() {
                function t(t, e) {
                    return t[o] && t[o].img && ("src" === e || "srcset" === e) ? t[o].img : t
                }
                c || (HTMLImageElement.prototype.getAttribute = function(e) {
                    return a.call(t(this, e), e)
                }, HTMLImageElement.prototype.setAttribute = function(e, n) {
                    return f.call(t(this, e), e, String(n))
                })
            }(), t.exports = m
    }, , , function(t, e, n) {
        t.exports = n(4)
    }, function(t, e, n) {
        "use strict";
        n.r(e);
        n(5), n(6), n(7), n(8);
        var o = n(0),
            i = n.n(o);
        $(document).ready((function() {
            $((function() {
                i()()
            }));
            var t = !1,
                e = $(".header");

            function n() {
                $(window).scrollTop() > 10 && 0 == t ? (e.addClass("active"), t = !0) : 0 == $(window).scrollTop() && (e.removeClass("active"), t = !1)
            }
            n(), $(window).scroll(n),
                function(t, e, n) {
                    n = n || window;
                    var o = !1;
                    n.addEventListener(t, (function() {
                        o || (o = !0, requestAnimationFrame((function() {
                            n.dispatchEvent(new CustomEvent(e)), o = !1
                        })))
                    }))
                }("resize", "optimizedResize");
            var o = setInterval((function() {
                var t = $(".blockRedLine3103");

                function n() {
                    var n = t.innerHeight();

                }
                n(), window.addEventListener("optimizedResize", n), $(window).scroll(n);
                var i = document.querySelector(".blockRedLine3103");
                null != i && null != i && clearInterval(o)
            }), 300)
        }))
    }, function(t, e) {
        var n = document.querySelector(".header__burger"),
            o = document.querySelector(".header__menu"),
            i = document.querySelectorAll(".header__nav-item"),
            r = document.querySelector(".header__menu-logo-content"),
            s = document.querySelector(".header__btn"),
            c = [n, o, document.querySelector("body")],
            l = [r, s];
        n.addEventListener("", (function() {
            c.forEach((function(t) {
                t.classList.toggle("active")
            }))
        })), i.forEach((function(t) {
            t.addEventListener("", (function() {
                c.forEach((function(t) {
                    t.classList.remove("active")
                }))
            }))
        })), l.forEach((function(t) {
            //t.addEventListener("click", (function () {
            //    c.forEach((function (t) {
            //        t.classList.remove("active")
            //    }))
            //}))
        }))
    },
    function(t, e) {
        var n;

        function o(t, e) {
            if (!n) return !1;
            var o, i, r = window.pageYOffset,
                s = (o = t, window.pageYOffset + document.querySelector(o).getBoundingClientRect().top),
                c = (document.body.scrollHeight - s < window.innerHeight ? document.body.scrollHeight - window.innerHeight : s) - r;
            c && window.requestAnimationFrame((function t(n) {
                i || (i = n);
                var o, s = n - i,
                    l = Math.min(s / e, 1);
                l = (o = l) < .5 ? 4 * o * o * o : (o - 1) * (2 * o - 2) * (2 * o - 2) + 1, window.scrollTo(0, r + c * l), s < e && window.requestAnimationFrame(t)
            }))
        }


    },
    function(t, e) {
        var n = new function(t) {
            this.scrollTop = $(window).scrollTop(), this.windowHeight = $(window).height(), this.result = [], this.currentElements = t, this.offset = 0, this.height = 0, this.center = 0;
            var e = this;
            this.updatePar = function() {
                e.result = [], e.scrollTop = $(window).scrollTop(), e.windowHeight = $(window).height()
            }, this.elInWindowAll = function() {
                return e.updatePar(), e.currentElements.each((function(t, n) {
                    e.offset = $(n).offset().top, e.height = $(n).outerHeight(), e.scrollTop <= e.offset && e.height + e.offset < e.scrollTop + e.windowHeight && e.result.push(n)
                })), e.result
            }, this.elInWindowCenter = function() {
                return e.updatePar(), e.currentElements.each((function(t, n) {
                    e.offset = $(n).offset().top, e.center = $(n).outerHeight() / 2, e.scrollTop <= e.offset && e.center + e.offset < e.scrollTop + e.windowHeight && result.push(e.element)
                })), e.result
            }, this.elInWindowTopBottom = function() {
                return e.updatePar(), e.currentElements.each((function(t, n) {
                    e.offset = $(n).offset().top, e.height = $(n).outerHeight(), e.scrollTop <= e.height + e.offset && e.offset < e.scrollTop + e.windowHeight && e.result.push(n)
                })), e.result
            }, this.elInWindowTop = function() {
                return e.updatePar(), e.currentElements.each((function(t, n) {
                    e.offset = $(n).offset().top, e.scrollTop <= e.offset && e.offset < e.scrollTop + e.windowHeight && e.result.push(n)
                })), e.result
            }
        }($(".visible_button_js"));

        function o(t) {
            0 == n.elInWindowTopBottom().length ? t.addClass("active") : t.removeClass("active")
        }
        $("#floating_button_js");
        var i = $(".floating__block");
        o(i), $(window).on("scroll", (function() {
            o(i)
        })), o(i)
    },
    function(t, e) {
        $('a[href*="#"]').click((function(t) {
            if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
                var e = $(this.hash);
                (e = e.length ? e : $("[name=" + this.hash.slice(1) + "]")).length && (t.preventDefault(), $("html, body").animate({
                    scrollTop: e.offset().top
                }, 2000, (function() {
                    var t = $(e);
                    if (t.focus(), t.is(":focus")) return !1;
                    t.attr("tabindex", "-1"), t.focus()
                })))
            }
        }))
    }
]);


/*MY JS*/

!(function (t) {
    var e = {};
    function i(n) {
        if (e[n]) return e[n].exports;
        var r = (e[n] = { i: n, l: !1, exports: {} });
        return t[n].call(r.exports, r, r.exports, i), (r.l = !0), r.exports;
    }
    (i.m = t),
        (i.c = e),
        (i.d = function (t, e, n) {
            i.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
        }),
        (i.r = function (t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
        }),
        (i.t = function (t, e) {
            if ((1 & e && (t = i(t)), 8 & e)) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var n = Object.create(null);
            if ((i.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t))
                for (var r in t)
                    i.d(
                        n,
                        r,
                        function (e) {
                            return t[e];
                        }.bind(null, r)
                    );
            return n;
        }),
        (i.n = function (t) {
            var e =
                t && t.__esModule
                    ? function () {
                          return t.default;
                      }
                    : function () {
                          return t;
                      };
            return i.d(e, "a", e), e;
        }),
        (i.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
        }),
        (i.p = ""),
        i((i.s = 0));
})([
    function (t, e, i) {
        function h(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t;
        }
        function f(t, e) {
            (t.prototype = Object.create(e.prototype)), (t.prototype.constructor = t), (t.__proto__ = e);
        }
        /*!
         * GSAP 3.12.2
         * https://greensock.com
         *
         * @license Copyright 2008-2023, GreenSock. All rights reserved.
         * Subject to the terms at https://greensock.com/standard-license or for
         * Club GreenSock members, the agreement issued with that membership.
         * @author: Jack Doyle, jack@greensock.com
         */ var g,
            v,
            m,
            _,
            y,
            w,
            T,
            b,
            k,
            x,
            S,
            C,
            O,
            M,
            A,
            P = { autoSleep: 120, force3D: "auto", nullTargetWarn: 1, units: { lineHeight: "" } },
            E = { duration: 0.5, overwrite: !1, delay: 0 },
            D = 1e8,
            z = 2 * Math.PI,
            R = z / 4,
            I = 0,
            L = Math.sqrt,
            H = Math.cos,
            F = Math.sin,
            B = function (t) {
                return "string" == typeof t;
            },
            j = function (t) {
                return "function" == typeof t;
            },
            Y = function (t) {
                return "number" == typeof t;
            },
            N = function (t) {
                return void 0 === t;
            },
            W = function (t) {
                return "object" == typeof t;
            },
            X = function (t) {
                return !1 !== t;
            },
            q = function () {
                return "undefined" != typeof window;
            },
            U = function (t) {
                return j(t) || B(t);
            },
            V = ("function" == typeof ArrayBuffer && ArrayBuffer.isView) || function () {},
            G = Array.isArray,
            Q = /(?:-?\.?\d|\.)+/gi,
            Z = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
            K = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
            J = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
            tt = /[+-]=-?[.\d]+/,
            et = /[^,'"\[\]\s]+/gi,
            it = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
            nt = {},
            rt = {},
            st = function (t) {
                return (rt = zt(t, nt)) && Di;
            },
            ot = function (t, e) {
                return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()");
            },
            at = function (t, e) {
                return !e && console.warn(t);
            },
            lt = function (t, e) {
                return (t && (nt[t] = e) && rt && (rt[t] = e)) || nt;
            },
            ct = function () {
                return 0;
            },
            ut = { suppressEvents: !0, isStart: !0, kill: !1 },
            dt = { suppressEvents: !0, kill: !1 },
            pt = { suppressEvents: !0 },
            ht = {},
            ft = [],
            gt = {},
            vt = {},
            mt = {},
            _t = 30,
            yt = [],
            wt = "",
            Tt = function (t) {
                var e,
                    i,
                    n = t[0];
                if ((W(n) || j(n) || (t = [t]), !(e = (n._gsap || {}).harness))) {
                    for (i = yt.length; i-- && !yt[i].targetTest(n); );
                    e = yt[i];
                }
                for (i = t.length; i--; ) (t[i] && (t[i]._gsap || (t[i]._gsap = new Ue(t[i], e)))) || t.splice(i, 1);
                return t;
            },
            bt = function (t) {
                return t._gsap || Tt(de(t))[0]._gsap;
            },
            kt = function (t, e, i) {
                return (i = t[e]) && j(i) ? t[e]() : (N(i) && t.getAttribute && t.getAttribute(e)) || i;
            },
            xt = function (t, e) {
                return (t = t.split(",")).forEach(e) || t;
            },
            St = function (t) {
                return Math.round(1e5 * t) / 1e5 || 0;
            },
            Ct = function (t) {
                return Math.round(1e7 * t) / 1e7 || 0;
            },
            $t = function (t, e) {
                var i = e.charAt(0),
                    n = parseFloat(e.substr(2));
                return (t = parseFloat(t)), "+" === i ? t + n : "-" === i ? t - n : "*" === i ? t * n : t / n;
            },
            Ot = function (t, e) {
                for (var i = e.length, n = 0; t.indexOf(e[n]) < 0 && ++n < i; );
                return n < i;
            },
            Mt = function () {
                var t,
                    e,
                    i = ft.length,
                    n = ft.slice(0);
                for (gt = {}, ft.length = 0, t = 0; t < i; t++) (e = n[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
            },
            At = function (t, e, i, n) {
                ft.length && !v && Mt(), t.render(e, i, n || (v && e < 0 && (t._initted || t._startAt))), ft.length && !v && Mt();
            },
            Pt = function (t) {
                var e = parseFloat(t);
                return (e || 0 === e) && (t + "").match(et).length < 2 ? e : B(t) ? t.trim() : t;
            },
            Et = function (t) {
                return t;
            },
            Dt = function (t, e) {
                for (var i in e) i in t || (t[i] = e[i]);
                return t;
            },
            zt = function (t, e) {
                for (var i in e) t[i] = e[i];
                return t;
            },
            Rt = function t(e, i) {
                for (var n in i) "__proto__" !== n && "constructor" !== n && "prototype" !== n && (e[n] = W(i[n]) ? t(e[n] || (e[n] = {}), i[n]) : i[n]);
                return e;
            },
            It = function (t, e) {
                var i,
                    n = {};
                for (i in t) i in e || (n[i] = t[i]);
                return n;
            },
            Lt = function (t) {
                var e,
                    i = t.parent || _,
                    n = t.keyframes
                        ? ((e = G(t.keyframes)),
                          function (t, i) {
                              for (var n in i) n in t || ("duration" === n && e) || "ease" === n || (t[n] = i[n]);
                          })
                        : Dt;
                if (X(t.inherit)) for (; i; ) n(t, i.vars.defaults), (i = i.parent || i._dp);
                return t;
            },
            Ht = function (t, e, i, n, r) {
                void 0 === i && (i = "_first"), void 0 === n && (n = "_last");
                var s,
                    o = t[n];
                if (r) for (s = e[r]; o && o[r] > s; ) o = o._prev;
                return o ? ((e._next = o._next), (o._next = e)) : ((e._next = t[i]), (t[i] = e)), e._next ? (e._next._prev = e) : (t[n] = e), (e._prev = o), (e.parent = e._dp = t), e;
            },
            Ft = function (t, e, i, n) {
                void 0 === i && (i = "_first"), void 0 === n && (n = "_last");
                var r = e._prev,
                    s = e._next;
                r ? (r._next = s) : t[i] === e && (t[i] = s), s ? (s._prev = r) : t[n] === e && (t[n] = r), (e._next = e._prev = e.parent = null);
            },
            Bt = function (t, e) {
                t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t), (t._act = 0);
            },
            jt = function (t, e) {
                if (t && (!e || e._end > t._dur || e._start < 0)) for (var i = t; i; ) (i._dirty = 1), (i = i.parent);
                return t;
            },
            Yt = function (t) {
                for (var e = t.parent; e && e.parent; ) (e._dirty = 1), e.totalDuration(), (e = e.parent);
                return t;
            },
            Nt = function (t, e, i, n) {
                return t._startAt && (v ? t._startAt.revert(dt) : (t.vars.immediateRender && !t.vars.autoRevert) || t._startAt.render(e, !0, n));
            },
            Wt = function (t) {
                return t._repeat ? Xt(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
            },
            Xt = function (t, e) {
                var i = Math.floor((t /= e));
                return t && i === t ? i - 1 : i;
            },
            qt = function (t, e) {
                return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur);
            },
            Ut = function (t) {
                return (t._end = Ct(t._start + (t._tDur / Math.abs(t._ts || t._rts || 1e-8) || 0)));
            },
            Vt = function (t, e) {
                var i = t._dp;
                return i && i.smoothChildTiming && t._ts && ((t._start = Ct(i._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts))), Ut(t), i._dirty || jt(i, t)), t;
            },
            Gt = function (t, e) {
                var i;
                if (
                    ((e._time || (!e._dur && e._initted) || (e._start < t._time && (e._dur || !e.add))) && ((i = qt(t.rawTime(), e)), (!e._dur || oe(0, e.totalDuration(), i) - e._tTime > 1e-8) && e.render(i, !0)),
                    jt(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
                ) {
                    if (t._dur < t.duration()) for (i = t; i._dp; ) i.rawTime() >= 0 && i.totalTime(i._tTime), (i = i._dp);
                    t._zTime = -1e-8;
                }
            },
            Qt = function (t, e, i, n) {
                return (
                    e.parent && Bt(e),
                    (e._start = Ct((Y(i) ? i : i || t !== _ ? ne(t, i, e) : t._time) + e._delay)),
                    (e._end = Ct(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0))),
                    Ht(t, e, "_first", "_last", t._sort ? "_start" : 0),
                    Jt(e) || (t._recent = e),
                    n || Gt(t, e),
                    t._ts < 0 && Vt(t, t._tTime),
                    t
                );
            },
            Zt = function (t, e) {
                return (nt.ScrollTrigger || ot("scrollTrigger", e)) && nt.ScrollTrigger.create(e, t);
            },
            Kt = function (t, e, i, n, r) {
                return ei(t, e, r), t._initted ? (!i && t._pt && !v && ((t._dur && !1 !== t.vars.lazy) || (!t._dur && t.vars.lazy)) && k !== ze.frame ? (ft.push(t), (t._lazy = [r, n]), 1) : void 0) : 1;
            },
            Jt = function (t) {
                var e = t.data;
                return "isFromStart" === e || "isStart" === e;
            },
            te = function (t, e, i, n) {
                var r = t._repeat,
                    s = Ct(e) || 0,
                    o = t._tTime / t._tDur;
                return o && !n && (t._time *= s / t._dur), (t._dur = s), (t._tDur = r ? (r < 0 ? 1e10 : Ct(s * (r + 1) + t._rDelay * r)) : s), o > 0 && !n && Vt(t, (t._tTime = t._tDur * o)), t.parent && Ut(t), i || jt(t.parent, t), t;
            },
            ee = function (t) {
                return t instanceof Ge ? jt(t) : te(t, t._dur);
            },
            ie = { _start: 0, endTime: ct, totalDuration: ct },
            ne = function t(e, i, n) {
                var r,
                    s,
                    o,
                    a = e.labels,
                    l = e._recent || ie,
                    c = e.duration() >= D ? l.endTime(!1) : e._dur;
                return B(i) && (isNaN(i) || i in a)
                    ? ((s = i.charAt(0)),
                      (o = "%" === i.substr(-1)),
                      (r = i.indexOf("=")),
                      "<" === s || ">" === s
                          ? (r >= 0 && (i = i.replace(/=/, "")), ("<" === s ? l._start : l.endTime(l._repeat >= 0)) + (parseFloat(i.substr(1)) || 0) * (o ? (r < 0 ? l : n).totalDuration() / 100 : 1))
                          : r < 0
                          ? (i in a || (a[i] = c), a[i])
                          : ((s = parseFloat(i.charAt(r - 1) + i.substr(r + 1))), o && n && (s = (s / 100) * (G(n) ? n[0] : n).totalDuration()), r > 1 ? t(e, i.substr(0, r - 1), n) + s : c + s))
                    : null == i
                    ? c
                    : +i;
            },
            re = function (t, e, i) {
                var n,
                    r,
                    s = Y(e[1]),
                    o = (s ? 2 : 1) + (t < 2 ? 0 : 1),
                    a = e[o];
                if ((s && (a.duration = e[1]), (a.parent = i), t)) {
                    for (n = a, r = i; r && !("immediateRender" in n); ) (n = r.vars.defaults || {}), (r = X(r.vars.inherit) && r.parent);
                    (a.immediateRender = X(n.immediateRender)), t < 2 ? (a.runBackwards = 1) : (a.startAt = e[o - 1]);
                }
                return new oi(e[0], a, e[o + 1]);
            },
            se = function (t, e) {
                return t || 0 === t ? e(t) : e;
            },
            oe = function (t, e, i) {
                return i < t ? t : i > e ? e : i;
            },
            ae = function (t, e) {
                return B(t) && (e = it.exec(t)) ? e[1] : "";
            },
            le = [].slice,
            ce = function (t, e) {
                return t && W(t) && "length" in t && ((!e && !t.length) || (t.length - 1 in t && W(t[0]))) && !t.nodeType && t !== y;
            },
            ue = function (t, e, i) {
                return (
                    void 0 === i && (i = []),
                    t.forEach(function (t) {
                        var n;
                        return (B(t) && !e) || ce(t, 1) ? (n = i).push.apply(n, de(t)) : i.push(t);
                    }) || i
                );
            },
            de = function (t, e, i) {
                return m && !e && m.selector ? m.selector(t) : !B(t) || i || (!w && Re()) ? (G(t) ? ue(t, i) : ce(t) ? le.call(t, 0) : t ? [t] : []) : le.call((e || T).querySelectorAll(t), 0);
            },
            pe = function (t) {
                return (
                    (t = de(t)[0] || at("Invalid scope") || {}),
                    function (e) {
                        var i = t.current || t.nativeElement || t;
                        return de(e, i.querySelectorAll ? i : i === t ? at("Invalid scope") || T.createElement("div") : t);
                    }
                );
            },
            he = function (t) {
                return t.sort(function () {
                    return 0.5 - Math.random();
                });
            },
            fe = function (t) {
                if (j(t)) return t;
                var e = W(t) ? t : { each: t },
                    i = Ye(e.ease),
                    n = e.from || 0,
                    r = parseFloat(e.base) || 0,
                    s = {},
                    o = n > 0 && n < 1,
                    a = isNaN(n) || o,
                    l = e.axis,
                    c = n,
                    u = n;
                return (
                    B(n) ? (c = u = { center: 0.5, edges: 0.5, end: 1 }[n] || 0) : !o && a && ((c = n[0]), (u = n[1])),
                    function (t, o, d) {
                        var p,
                            h,
                            f,
                            g,
                            v,
                            m,
                            _,
                            y,
                            w,
                            T = (d || e).length,
                            b = s[T];
                        if (!b) {
                            if (!(w = "auto" === e.grid ? 0 : (e.grid || [1, D])[1])) {
                                for (_ = -D; _ < (_ = d[w++].getBoundingClientRect().left) && w < T; );
                                w--;
                            }
                            for (b = s[T] = [], p = a ? Math.min(w, T) * c - 0.5 : n % w, h = w === D ? 0 : a ? (T * u) / w - 0.5 : (n / w) | 0, _ = 0, y = D, m = 0; m < T; m++)
                                (f = (m % w) - p), (g = h - ((m / w) | 0)), (b[m] = v = l ? Math.abs("y" === l ? g : f) : L(f * f + g * g)), v > _ && (_ = v), v < y && (y = v);
                            "random" === n && he(b),
                                (b.max = _ - y),
                                (b.min = y),
                                (b.v = T = (parseFloat(e.amount) || parseFloat(e.each) * (w > T ? T - 1 : l ? ("y" === l ? T / w : w) : Math.max(w, T / w)) || 0) * ("edges" === n ? -1 : 1)),
                                (b.b = T < 0 ? r - T : r),
                                (b.u = ae(e.amount || e.each) || 0),
                                (i = i && T < 0 ? Be(i) : i);
                        }
                        return (T = (b[t] - b.min) / b.max || 0), Ct(b.b + (i ? i(T) : T) * b.v) + b.u;
                    }
                );
            },
            ge = function (t) {
                var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
                return function (i) {
                    var n = Ct(Math.round(parseFloat(i) / t) * t * e);
                    return (n - (n % 1)) / e + (Y(i) ? 0 : ae(i));
                };
            },
            ve = function (t, e) {
                var i,
                    n,
                    r = G(t);
                return (
                    !r && W(t) && ((i = r = t.radius || D), t.values ? ((t = de(t.values)), (n = !Y(t[0])) && (i *= i)) : (t = ge(t.increment))),
                    se(
                        e,
                        r
                            ? j(t)
                                ? function (e) {
                                      return (n = t(e)), Math.abs(n - e) <= i ? n : e;
                                  }
                                : function (e) {
                                      for (var r, s, o = parseFloat(n ? e.x : e), a = parseFloat(n ? e.y : 0), l = D, c = 0, u = t.length; u--; )
                                          (r = n ? (r = t[u].x - o) * r + (s = t[u].y - a) * s : Math.abs(t[u] - o)) < l && ((l = r), (c = u));
                                      return (c = !i || l <= i ? t[c] : e), n || c === e || Y(e) ? c : c + ae(e);
                                  }
                            : ge(t)
                    )
                );
            },
            me = function (t, e, i, n) {
                return se(G(t) ? !e : !0 === i ? !!(i = 0) : !n, function () {
                    return G(t) ? t[~~(Math.random() * t.length)] : (i = i || 1e-5) && (n = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) && Math.floor(Math.round((t - i / 2 + Math.random() * (e - t + 0.99 * i)) / i) * i * n) / n;
                });
            },
            _e = function (t, e, i) {
                return se(i, function (i) {
                    return t[~~e(i)];
                });
            },
            ye = function (t) {
                for (var e, i, n, r, s = 0, o = ""; ~(e = t.indexOf("random(", s)); )
                    (n = t.indexOf(")", e)), (r = "[" === t.charAt(e + 7)), (i = t.substr(e + 7, n - e - 7).match(r ? et : Q)), (o += t.substr(s, e - s) + me(r ? i : +i[0], r ? 0 : +i[1], +i[2] || 1e-5)), (s = n + 1);
                return o + t.substr(s, t.length - s);
            },
            we = function (t, e, i, n, r) {
                var s = e - t,
                    o = n - i;
                return se(r, function (e) {
                    return i + (((e - t) / s) * o || 0);
                });
            },
            Te = function (t, e, i) {
                var n,
                    r,
                    s,
                    o = t.labels,
                    a = D;
                for (n in o) (r = o[n] - e) < 0 == !!i && r && a > (r = Math.abs(r)) && ((s = n), (a = r));
                return s;
            },
            be = function (t, e, i) {
                var n,
                    r,
                    s,
                    o = t.vars,
                    a = o[e],
                    l = m,
                    c = t._ctx;
                if (a) return (n = o[e + "Params"]), (r = o.callbackScope || t), i && ft.length && Mt(), c && (m = c), (s = n ? a.apply(r, n) : a.call(r)), (m = l), s;
            },
            ke = function (t) {
                return Bt(t), t.scrollTrigger && t.scrollTrigger.kill(!!v), t.progress() < 1 && be(t, "onInterrupt"), t;
            },
            xe = [],
            Se = function (t) {
                if (q() && t) {
                    var e = (t = (!t.name && t.default) || t).name,
                        i = j(t),
                        n =
                            e && !i && t.init
                                ? function () {
                                      this._props = [];
                                  }
                                : t,
                        r = { init: ct, render: gi, add: Je, kill: mi, modifier: vi, rawVars: 0 },
                        s = { targetTest: 0, get: 0, getSetter: di, aliases: {}, register: 0 };
                    if ((Re(), t !== n)) {
                        if (vt[e]) return;
                        Dt(n, Dt(It(t, r), s)), zt(n.prototype, zt(r, It(t, s))), (vt[(n.prop = e)] = n), t.targetTest && (yt.push(n), (ht[e] = 1)), (e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin");
                    }
                    lt(e, n), t.register && t.register(Di, n, wi);
                } else t && xe.push(t);
            },
            Ce = {
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
                transparent: [255, 255, 255, 0],
            },
            $e = function (t, e, i) {
                return (255 * (6 * (t += t < 0 ? 1 : t > 1 ? -1 : 0) < 1 ? e + (i - e) * t * 6 : t < 0.5 ? i : 3 * t < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) + 0.5) | 0;
            },
            Oe = function (t, e, i) {
                var n,
                    r,
                    s,
                    o,
                    a,
                    l,
                    c,
                    u,
                    d,
                    p,
                    h = t ? (Y(t) ? [t >> 16, (t >> 8) & 255, 255 & t] : 0) : Ce.black;
                if (!h) {
                    if (("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), Ce[t])) h = Ce[t];
                    else if ("#" === t.charAt(0)) {
                        if ((t.length < 6 && ((n = t.charAt(1)), (r = t.charAt(2)), (s = t.charAt(3)), (t = "#" + n + n + r + r + s + s + (5 === t.length ? t.charAt(4) + t.charAt(4) : ""))), 9 === t.length))
                            return [(h = parseInt(t.substr(1, 6), 16)) >> 16, (h >> 8) & 255, 255 & h, parseInt(t.substr(7), 16) / 255];
                        h = [(t = parseInt(t.substr(1), 16)) >> 16, (t >> 8) & 255, 255 & t];
                    } else if ("hsl" === t.substr(0, 3))
                        if (((h = p = t.match(Q)), e)) {
                            if (~t.indexOf("=")) return (h = t.match(Z)), i && h.length < 4 && (h[3] = 1), h;
                        } else
                            (o = (+h[0] % 360) / 360),
                                (a = +h[1] / 100),
                                (n = 2 * (l = +h[2] / 100) - (r = l <= 0.5 ? l * (a + 1) : l + a - l * a)),
                                h.length > 3 && (h[3] *= 1),
                                (h[0] = $e(o + 1 / 3, n, r)),
                                (h[1] = $e(o, n, r)),
                                (h[2] = $e(o - 1 / 3, n, r));
                    else h = t.match(Q) || Ce.transparent;
                    h = h.map(Number);
                }
                return (
                    e &&
                        !p &&
                        ((n = h[0] / 255),
                        (r = h[1] / 255),
                        (s = h[2] / 255),
                        (l = ((c = Math.max(n, r, s)) + (u = Math.min(n, r, s))) / 2),
                        c === u ? (o = a = 0) : ((d = c - u), (a = l > 0.5 ? d / (2 - c - u) : d / (c + u)), (o = c === n ? (r - s) / d + (r < s ? 6 : 0) : c === r ? (s - n) / d + 2 : (n - r) / d + 4), (o *= 60)),
                        (h[0] = ~~(o + 0.5)),
                        (h[1] = ~~(100 * a + 0.5)),
                        (h[2] = ~~(100 * l + 0.5))),
                    i && h.length < 4 && (h[3] = 1),
                    h
                );
            },
            Me = function (t) {
                var e = [],
                    i = [],
                    n = -1;
                return (
                    t.split(Pe).forEach(function (t) {
                        var r = t.match(K) || [];
                        e.push.apply(e, r), i.push((n += r.length + 1));
                    }),
                    (e.c = i),
                    e
                );
            },
            Ae = function (t, e, i) {
                var n,
                    r,
                    s,
                    o,
                    a = "",
                    l = (t + a).match(Pe),
                    c = e ? "hsla(" : "rgba(",
                    u = 0;
                if (!l) return t;
                if (
                    ((l = l.map(function (t) {
                        return (t = Oe(t, e, 1)) && c + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")";
                    })),
                    i && ((s = Me(t)), (n = i.c).join(a) !== s.c.join(a)))
                )
                    for (o = (r = t.replace(Pe, "1").split(K)).length - 1; u < o; u++) a += r[u] + (~n.indexOf(u) ? l.shift() || c + "0,0,0,0)" : (s.length ? s : l.length ? l : i).shift());
                if (!r) for (o = (r = t.split(Pe)).length - 1; u < o; u++) a += r[u] + l[u];
                return a + r[o];
            },
            Pe = (function () {
                var t,
                    e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
                for (t in Ce) e += "|" + t + "\\b";
                return new RegExp(e + ")", "gi");
            })(),
            Ee = /hsl[a]?\(/,
            De = function (t) {
                var e,
                    i = t.join(" ");
                if (((Pe.lastIndex = 0), Pe.test(i))) return (e = Ee.test(i)), (t[1] = Ae(t[1], e)), (t[0] = Ae(t[0], e, Me(t[1]))), !0;
            },
            ze = (function () {
                var t,
                    e,
                    i,
                    n,
                    r,
                    s,
                    o = Date.now,
                    a = 500,
                    l = 33,
                    c = o(),
                    u = c,
                    d = 1e3 / 240,
                    p = d,
                    h = [],
                    f = function i(f) {
                        var g,
                            v,
                            m,
                            _,
                            y = o() - u,
                            w = !0 === f;
                        if ((y > a && (c += y - l), ((g = (m = (u += y) - c) - p) > 0 || w) && ((_ = ++n.frame), (r = m - 1e3 * n.time), (n.time = m /= 1e3), (p += g + (g >= d ? 4 : d - g)), (v = 1)), w || (t = e(i)), v))
                            for (s = 0; s < h.length; s++) h[s](m, r, _, f);
                    };
                return (n = {
                    time: 0,
                    frame: 0,
                    tick: function () {
                        f(!0);
                    },
                    deltaRatio: function (t) {
                        return r / (1e3 / (t || 60));
                    },
                    wake: function () {
                        b &&
                            (!w &&
                                q() &&
                                ((y = w = window),
                                (T = y.document || {}),
                                (nt.gsap = Di),
                                (y.gsapVersions || (y.gsapVersions = [])).push(Di.version),
                                st(rt || y.GreenSockGlobals || (!y.gsap && y) || {}),
                                (i = y.requestAnimationFrame),
                                xe.forEach(Se)),
                            t && n.sleep(),
                            (e =
                                i ||
                                function (t) {
                                    return setTimeout(t, (p - 1e3 * n.time + 1) | 0);
                                }),
                            (S = 1),
                            f(2));
                    },
                    sleep: function () {
                        (i ? y.cancelAnimationFrame : clearTimeout)(t), (S = 0), (e = ct);
                    },
                    lagSmoothing: function (t, e) {
                        (a = t || 1 / 0), (l = Math.min(e || 33, a));
                    },
                    fps: function (t) {
                        (d = 1e3 / (t || 240)), (p = 1e3 * n.time + d);
                    },
                    add: function (t, e, i) {
                        var r = e
                            ? function (e, i, s, o) {
                                  t(e, i, s, o), n.remove(r);
                              }
                            : t;
                        return n.remove(t), h[i ? "unshift" : "push"](r), Re(), r;
                    },
                    remove: function (t, e) {
                        ~(e = h.indexOf(t)) && h.splice(e, 1) && s >= e && s--;
                    },
                    _listeners: h,
                });
            })(),
            Re = function () {
                return !S && ze.wake();
            },
            Ie = {},
            Le = /^[\d.\-M][\d.\-,\s]/,
            He = /["']/g,
            Fe = function (t) {
                for (var e, i, n, r = {}, s = t.substr(1, t.length - 3).split(":"), o = s[0], a = 1, l = s.length; a < l; a++)
                    (i = s[a]), (e = a !== l - 1 ? i.lastIndexOf(",") : i.length), (n = i.substr(0, e)), (r[o] = isNaN(n) ? n.replace(He, "").trim() : +n), (o = i.substr(e + 1).trim());
                return r;
            },
            Be = function (t) {
                return function (e) {
                    return 1 - t(1 - e);
                };
            },
            je = function t(e, i) {
                for (var n, r = e._first; r; )
                    r instanceof Ge ? t(r, i) : !r.vars.yoyoEase || (r._yoyo && r._repeat) || r._yoyo === i || (r.timeline ? t(r.timeline, i) : ((n = r._ease), (r._ease = r._yEase), (r._yEase = n), (r._yoyo = i))), (r = r._next);
            },
            Ye = function (t, e) {
                return (
                    (t &&
                        (j(t)
                            ? t
                            : Ie[t] ||
                              (function (t) {
                                  var e,
                                      i,
                                      n,
                                      r,
                                      s = (t + "").split("("),
                                      o = Ie[s[0]];
                                  return o && s.length > 1 && o.config
                                      ? o.config.apply(
                                            null,
                                            ~t.indexOf("{") ? [Fe(s[1])] : ((e = t), (i = e.indexOf("(") + 1), (n = e.indexOf(")")), (r = e.indexOf("(", i)), e.substring(i, ~r && r < n ? e.indexOf(")", n + 1) : n)).split(",").map(Pt)
                                        )
                                      : Ie._CE && Le.test(t)
                                      ? Ie._CE("", t)
                                      : o;
                              })(t))) ||
                    e
                );
            },
            Ne = function (t, e, i, n) {
                void 0 === i &&
                    (i = function (t) {
                        return 1 - e(1 - t);
                    }),
                    void 0 === n &&
                        (n = function (t) {
                            return t < 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
                        });
                var r,
                    s = { easeIn: e, easeOut: i, easeInOut: n };
                return (
                    xt(t, function (t) {
                        for (var e in ((Ie[t] = nt[t] = s), (Ie[(r = t.toLowerCase())] = i), s)) Ie[r + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = Ie[t + "." + e] = s[e];
                    }),
                    s
                );
            },
            We = function (t) {
                return function (e) {
                    return e < 0.5 ? (1 - t(1 - 2 * e)) / 2 : 0.5 + t(2 * (e - 0.5)) / 2;
                };
            },
            Xe = function t(e, i, n) {
                var r = i >= 1 ? i : 1,
                    s = (n || (e ? 0.3 : 0.45)) / (i < 1 ? i : 1),
                    o = (s / z) * (Math.asin(1 / r) || 0),
                    a = function (t) {
                        return 1 === t ? 1 : r * Math.pow(2, -10 * t) * F((t - o) * s) + 1;
                    },
                    l =
                        "out" === e
                            ? a
                            : "in" === e
                            ? function (t) {
                                  return 1 - a(1 - t);
                              }
                            : We(a);
                return (
                    (s = z / s),
                    (l.config = function (i, n) {
                        return t(e, i, n);
                    }),
                    l
                );
            },
            qe = function t(e, i) {
                void 0 === i && (i = 1.70158);
                var n = function (t) {
                        return t ? --t * t * ((i + 1) * t + i) + 1 : 0;
                    },
                    r =
                        "out" === e
                            ? n
                            : "in" === e
                            ? function (t) {
                                  return 1 - n(1 - t);
                              }
                            : We(n);
                return (
                    (r.config = function (i) {
                        return t(e, i);
                    }),
                    r
                );
            };
        xt("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
            var i = e < 5 ? e + 1 : e;
            Ne(
                t + ",Power" + (i - 1),
                e
                    ? function (t) {
                          return Math.pow(t, i);
                      }
                    : function (t) {
                          return t;
                      },
                function (t) {
                    return 1 - Math.pow(1 - t, i);
                },
                function (t) {
                    return t < 0.5 ? Math.pow(2 * t, i) / 2 : 1 - Math.pow(2 * (1 - t), i) / 2;
                }
            );
        }),
            (Ie.Linear.easeNone = Ie.none = Ie.Linear.easeIn),
            Ne("Elastic", Xe("in"), Xe("out"), Xe()),
            (C = 7.5625),
            (M = 1 / (O = 2.75)),
            Ne(
                "Bounce",
                function (t) {
                    return 1 - A(1 - t);
                },
                (A = function (t) {
                    return t < M ? C * t * t : t < 0.7272727272727273 ? C * Math.pow(t - 1.5 / O, 2) + 0.75 : t < 0.9090909090909092 ? C * (t -= 2.25 / O) * t + 0.9375 : C * Math.pow(t - 2.625 / O, 2) + 0.984375;
                })
            ),
            Ne("Expo", function (t) {
                return t ? Math.pow(2, 10 * (t - 1)) : 0;
            }),
            Ne("Circ", function (t) {
                return -(L(1 - t * t) - 1);
            }),
            Ne("Sine", function (t) {
                return 1 === t ? 1 : 1 - H(t * R);
            }),
            Ne("Back", qe("in"), qe("out"), qe()),
            (Ie.SteppedEase = Ie.steps = nt.SteppedEase = {
                config: function (t, e) {
                    void 0 === t && (t = 1);
                    var i = 1 / t,
                        n = t + (e ? 0 : 1),
                        r = e ? 1 : 0;
                    return function (t) {
                        return (((n * oe(0, 1 - 1e-8, t)) | 0) + r) * i;
                    };
                },
            }),
            (E.ease = Ie["quad.out"]),
            xt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (t) {
                return (wt += t + "," + t + "Params,");
            });
        var Ue = function (t, e) {
                (this.id = I++), (t._gsap = this), (this.target = t), (this.harness = e), (this.get = e ? e.get : kt), (this.set = e ? e.getSetter : di);
            },
            Ve = (function () {
                function t(t) {
                    (this.vars = t),
                        (this._delay = +t.delay || 0),
                        (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && ((this._rDelay = t.repeatDelay || 0), (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
                        (this._ts = 1),
                        te(this, +t.duration, 1, 1),
                        (this.data = t.data),
                        m && ((this._ctx = m), m.data.push(this)),
                        S || ze.wake();
                }
                var e = t.prototype;
                return (
                    (e.delay = function (t) {
                        return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), (this._delay = t), this) : this._delay;
                    }),
                    (e.duration = function (t) {
                        return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur;
                    }),
                    (e.totalDuration = function (t) {
                        return arguments.length ? ((this._dirty = 0), te(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
                    }),
                    (e.totalTime = function (t, e) {
                        if ((Re(), !arguments.length)) return this._tTime;
                        var i = this._dp;
                        if (i && i.smoothChildTiming && this._ts) {
                            for (Vt(this, t), !i._dp || i.parent || Gt(i, this); i && i.parent; )
                                i.parent._time !== i._start + (i._ts >= 0 ? i._tTime / i._ts : (i.totalDuration() - i._tTime) / -i._ts) && i.totalTime(i._tTime, !0), (i = i.parent);
                            !this.parent && this._dp.autoRemoveChildren && ((this._ts > 0 && t < this._tDur) || (this._ts < 0 && t > 0) || (!this._tDur && !t)) && Qt(this._dp, this, this._start - this._delay);
                        }
                        return (
                            (this._tTime !== t || (!this._dur && !e) || (this._initted && 1e-8 === Math.abs(this._zTime)) || (!t && !this._initted && (this.add || this._ptLookup))) && (this._ts || (this._pTime = t), At(this, t, e)), this
                        );
                    }),
                    (e.time = function (t, e) {
                        return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + Wt(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time;
                    }),
                    (e.totalProgress = function (t, e) {
                        return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
                    }),
                    (e.progress = function (t, e) {
                        return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + Wt(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
                    }),
                    (e.iteration = function (t, e) {
                        var i = this.duration() + this._rDelay;
                        return arguments.length ? this.totalTime(this._time + (t - 1) * i, e) : this._repeat ? Xt(this._tTime, i) + 1 : 1;
                    }),
                    (e.timeScale = function (t) {
                        if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
                        if (this._rts === t) return this;
                        var e = this.parent && this._ts ? qt(this.parent._time, this) : this._tTime;
                        return (this._rts = +t || 0), (this._ts = this._ps || -1e-8 === t ? 0 : this._rts), this.totalTime(oe(-Math.abs(this._delay), this._tDur, e), !0), Ut(this), Yt(this);
                    }),
                    (e.paused = function (t) {
                        return arguments.length
                            ? (this._ps !== t &&
                                  ((this._ps = t),
                                  t
                                      ? ((this._pTime = this._tTime || Math.max(-this._delay, this.rawTime())), (this._ts = this._act = 0))
                                      : (Re(),
                                        (this._ts = this._rts),
                                        this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && 1e-8 !== Math.abs(this._zTime) && (this._tTime -= 1e-8)))),
                              this)
                            : this._ps;
                    }),
                    (e.startTime = function (t) {
                        if (arguments.length) {
                            this._start = t;
                            var e = this.parent || this._dp;
                            return e && (e._sort || !this.parent) && Qt(e, this, t - this._delay), this;
                        }
                        return this._start;
                    }),
                    (e.endTime = function (t) {
                        return this._start + (X(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
                    }),
                    (e.rawTime = function (t) {
                        var e = this.parent || this._dp;
                        return e ? (t && (!this._ts || (this._repeat && this._time && this.totalProgress() < 1)) ? this._tTime % (this._dur + this._rDelay) : this._ts ? qt(e.rawTime(t), this) : this._tTime) : this._tTime;
                    }),
                    (e.revert = function (t) {
                        void 0 === t && (t = pt);
                        var e = v;
                        return (v = t), (this._initted || this._startAt) && (this.timeline && this.timeline.revert(t), this.totalTime(-0.01, t.suppressEvents)), "nested" !== this.data && !1 !== t.kill && this.kill(), (v = e), this;
                    }),
                    (e.globalTime = function (t) {
                        for (var e = this, i = arguments.length ? t : e.rawTime(); e; ) (i = e._start + i / (e._ts || 1)), (e = e._dp);
                        return !this.parent && this._sat ? (this._sat.vars.immediateRender ? -1 / 0 : this._sat.globalTime(t)) : i;
                    }),
                    (e.repeat = function (t) {
                        return arguments.length ? ((this._repeat = t === 1 / 0 ? -2 : t), ee(this)) : -2 === this._repeat ? 1 / 0 : this._repeat;
                    }),
                    (e.repeatDelay = function (t) {
                        if (arguments.length) {
                            var e = this._time;
                            return (this._rDelay = t), ee(this), e ? this.time(e) : this;
                        }
                        return this._rDelay;
                    }),
                    (e.yoyo = function (t) {
                        return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
                    }),
                    (e.seek = function (t, e) {
                        return this.totalTime(ne(this, t), X(e));
                    }),
                    (e.restart = function (t, e) {
                        return this.play().totalTime(t ? -this._delay : 0, X(e));
                    }),
                    (e.play = function (t, e) {
                        return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
                    }),
                    (e.reverse = function (t, e) {
                        return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1);
                    }),
                    (e.pause = function (t, e) {
                        return null != t && this.seek(t, e), this.paused(!0);
                    }),
                    (e.resume = function () {
                        return this.paused(!1);
                    }),
                    (e.reversed = function (t) {
                        return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -1e-8 : 0)), this) : this._rts < 0;
                    }),
                    (e.invalidate = function () {
                        return (this._initted = this._act = 0), (this._zTime = -1e-8), this;
                    }),
                    (e.isActive = function () {
                        var t,
                            e = this.parent || this._dp,
                            i = this._start;
                        return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= i && t < this.endTime(!0) - 1e-8));
                    }),
                    (e.eventCallback = function (t, e, i) {
                        var n = this.vars;
                        return arguments.length > 1 ? (e ? ((n[t] = e), i && (n[t + "Params"] = i), "onUpdate" === t && (this._onUpdate = e)) : delete n[t], this) : n[t];
                    }),
                    (e.then = function (t) {
                        var e = this;
                        return new Promise(function (i) {
                            var n = j(t) ? t : Et,
                                r = function () {
                                    var t = e.then;
                                    (e.then = null), j(n) && (n = n(e)) && (n.then || n === e) && (e.then = t), i(n), (e.then = t);
                                };
                            (e._initted && 1 === e.totalProgress() && e._ts >= 0) || (!e._tTime && e._ts < 0) ? r() : (e._prom = r);
                        });
                    }),
                    (e.kill = function () {
                        ke(this);
                    }),
                    t
                );
            })();
        Dt(Ve.prototype, { _time: 0, _start: 0, _end: 0, _tTime: 0, _tDur: 0, _dirty: 0, _repeat: 0, _yoyo: !1, parent: null, _initted: !1, _rDelay: 0, _ts: 1, _dp: 0, ratio: 0, _zTime: -1e-8, _prom: 0, _ps: !1, _rts: 1 });
        var Ge = (function (t) {
            function e(e, i) {
                var n;
                return (
                    void 0 === e && (e = {}),
                    ((n = t.call(this, e) || this).labels = {}),
                    (n.smoothChildTiming = !!e.smoothChildTiming),
                    (n.autoRemoveChildren = !!e.autoRemoveChildren),
                    (n._sort = X(e.sortChildren)),
                    _ && Qt(e.parent || _, h(n), i),
                    e.reversed && n.reverse(),
                    e.paused && n.paused(!0),
                    e.scrollTrigger && Zt(h(n), e.scrollTrigger),
                    n
                );
            }
            f(e, t);
            var i = e.prototype;
            return (
                (i.to = function (t, e, i) {
                    return re(0, arguments, this), this;
                }),
                (i.from = function (t, e, i) {
                    return re(1, arguments, this), this;
                }),
                (i.fromTo = function (t, e, i, n) {
                    return re(2, arguments, this), this;
                }),
                (i.set = function (t, e, i) {
                    return (e.duration = 0), (e.parent = this), Lt(e).repeatDelay || (e.repeat = 0), (e.immediateRender = !!e.immediateRender), new oi(t, e, ne(this, i), 1), this;
                }),
                (i.call = function (t, e, i) {
                    return Qt(this, oi.delayedCall(0, t, e), i);
                }),
                (i.staggerTo = function (t, e, i, n, r, s, o) {
                    return (i.duration = e), (i.stagger = i.stagger || n), (i.onComplete = s), (i.onCompleteParams = o), (i.parent = this), new oi(t, i, ne(this, r)), this;
                }),
                (i.staggerFrom = function (t, e, i, n, r, s, o) {
                    return (i.runBackwards = 1), (Lt(i).immediateRender = X(i.immediateRender)), this.staggerTo(t, e, i, n, r, s, o);
                }),
                (i.staggerFromTo = function (t, e, i, n, r, s, o, a) {
                    return (n.startAt = i), (Lt(n).immediateRender = X(n.immediateRender)), this.staggerTo(t, e, n, r, s, o, a);
                }),
                (i.render = function (t, e, i) {
                    var n,
                        r,
                        s,
                        o,
                        a,
                        l,
                        c,
                        u,
                        d,
                        p,
                        h,
                        f,
                        g = this._time,
                        m = this._dirty ? this.totalDuration() : this._tDur,
                        y = this._dur,
                        w = t <= 0 ? 0 : Ct(t),
                        T = this._zTime < 0 != t < 0 && (this._initted || !y);
                    if ((this !== _ && w > m && t >= 0 && (w = m), w !== this._tTime || i || T)) {
                        if ((g !== this._time && y && ((w += this._time - g), (t += this._time - g)), (n = w), (d = this._start), (l = !(u = this._ts)), T && (y || (g = this._zTime), (t || !e) && (this._zTime = t)), this._repeat)) {
                            if (((h = this._yoyo), (a = y + this._rDelay), this._repeat < -1 && t < 0)) return this.totalTime(100 * a + t, e, i);
                            if (
                                ((n = Ct(w % a)),
                                w === m ? ((o = this._repeat), (n = y)) : ((o = ~~(w / a)) && o === w / a && ((n = y), o--), n > y && (n = y)),
                                (p = Xt(this._tTime, a)),
                                !g && this._tTime && p !== o && this._tTime - p * a - this._dur <= 0 && (p = o),
                                h && 1 & o && ((n = y - n), (f = 1)),
                                o !== p && !this._lock)
                            ) {
                                var b = h && 1 & p,
                                    k = b === (h && 1 & o);
                                if (
                                    (o < p && (b = !b),
                                    (g = b ? 0 : w % y ? y : w),
                                    (this._lock = 1),
                                    (this.render(g || (f ? 0 : Ct(o * a)), e, !y)._lock = 0),
                                    (this._tTime = w),
                                    !e && this.parent && be(this, "onRepeat"),
                                    this.vars.repeatRefresh && !f && (this.invalidate()._lock = 1),
                                    (g && g !== this._time) || l !== !this._ts || (this.vars.onRepeat && !this.parent && !this._act))
                                )
                                    return this;
                                if (((y = this._dur), (m = this._tDur), k && ((this._lock = 2), (g = b ? y : -1e-4), this.render(g, !0), this.vars.repeatRefresh && !f && this.invalidate()), (this._lock = 0), !this._ts && !l)) return this;
                                je(this, f);
                            }
                        }
                        if (
                            (this._hasPause &&
                                !this._forcing &&
                                this._lock < 2 &&
                                (c = (function (t, e, i) {
                                    var n;
                                    if (i > e)
                                        for (n = t._first; n && n._start <= i; ) {
                                            if ("isPause" === n.data && n._start > e) return n;
                                            n = n._next;
                                        }
                                    else
                                        for (n = t._last; n && n._start >= i; ) {
                                            if ("isPause" === n.data && n._start < e) return n;
                                            n = n._prev;
                                        }
                                })(this, Ct(g), Ct(n))) &&
                                (w -= n - (n = c._start)),
                            (this._tTime = w),
                            (this._time = n),
                            (this._act = !u),
                            this._initted || ((this._onUpdate = this.vars.onUpdate), (this._initted = 1), (this._zTime = t), (g = 0)),
                            !g && n && !e && !o && (be(this, "onStart"), this._tTime !== w))
                        )
                            return this;
                        if (n >= g && t >= 0)
                            for (r = this._first; r; ) {
                                if (((s = r._next), (r._act || n >= r._start) && r._ts && c !== r)) {
                                    if (r.parent !== this) return this.render(t, e, i);
                                    if ((r.render(r._ts > 0 ? (n - r._start) * r._ts : (r._dirty ? r.totalDuration() : r._tDur) + (n - r._start) * r._ts, e, i), n !== this._time || (!this._ts && !l))) {
                                        (c = 0), s && (w += this._zTime = -1e-8);
                                        break;
                                    }
                                }
                                r = s;
                            }
                        else {
                            r = this._last;
                            for (var x = t < 0 ? t : n; r; ) {
                                if (((s = r._prev), (r._act || x <= r._end) && r._ts && c !== r)) {
                                    if (r.parent !== this) return this.render(t, e, i);
                                    if ((r.render(r._ts > 0 ? (x - r._start) * r._ts : (r._dirty ? r.totalDuration() : r._tDur) + (x - r._start) * r._ts, e, i || (v && (r._initted || r._startAt))), n !== this._time || (!this._ts && !l))) {
                                        (c = 0), s && (w += this._zTime = x ? -1e-8 : 1e-8);
                                        break;
                                    }
                                }
                                r = s;
                            }
                        }
                        if (c && !e && (this.pause(), (c.render(n >= g ? 0 : -1e-8)._zTime = n >= g ? 1 : -1), this._ts)) return (this._start = d), Ut(this), this.render(t, e, i);
                        this._onUpdate && !e && be(this, "onUpdate", !0),
                            ((w === m && this._tTime >= this.totalDuration()) || (!w && g)) &&
                                ((d !== this._start && Math.abs(u) === Math.abs(this._ts)) ||
                                    this._lock ||
                                    ((t || !y) && ((w === m && this._ts > 0) || (!w && this._ts < 0)) && Bt(this, 1),
                                    e || (t < 0 && !g) || (!w && !g && m) || (be(this, w === m && t >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(w < m && this.timeScale() > 0) && this._prom())));
                    }
                    return this;
                }),
                (i.add = function (t, e) {
                    var i = this;
                    if ((Y(e) || (e = ne(this, e, t)), !(t instanceof Ve))) {
                        if (G(t))
                            return (
                                t.forEach(function (t) {
                                    return i.add(t, e);
                                }),
                                this
                            );
                        if (B(t)) return this.addLabel(t, e);
                        if (!j(t)) return this;
                        t = oi.delayedCall(0, t);
                    }
                    return this !== t ? Qt(this, t, e) : this;
                }),
                (i.getChildren = function (t, e, i, n) {
                    void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === i && (i = !0), void 0 === n && (n = -D);
                    for (var r = [], s = this._first; s; ) s._start >= n && (s instanceof oi ? e && r.push(s) : (i && r.push(s), t && r.push.apply(r, s.getChildren(!0, e, i)))), (s = s._next);
                    return r;
                }),
                (i.getById = function (t) {
                    for (var e = this.getChildren(1, 1, 1), i = e.length; i--; ) if (e[i].vars.id === t) return e[i];
                }),
                (i.remove = function (t) {
                    return B(t) ? this.removeLabel(t) : j(t) ? this.killTweensOf(t) : (Ft(this, t), t === this._recent && (this._recent = this._last), jt(this));
                }),
                (i.totalTime = function (e, i) {
                    return arguments.length
                        ? ((this._forcing = 1),
                          !this._dp && this._ts && (this._start = Ct(ze.time - (this._ts > 0 ? e / this._ts : (this.totalDuration() - e) / -this._ts))),
                          t.prototype.totalTime.call(this, e, i),
                          (this._forcing = 0),
                          this)
                        : this._tTime;
                }),
                (i.addLabel = function (t, e) {
                    return (this.labels[t] = ne(this, e)), this;
                }),
                (i.removeLabel = function (t) {
                    return delete this.labels[t], this;
                }),
                (i.addPause = function (t, e, i) {
                    var n = oi.delayedCall(0, e || ct, i);
                    return (n.data = "isPause"), (this._hasPause = 1), Qt(this, n, ne(this, t));
                }),
                (i.removePause = function (t) {
                    var e = this._first;
                    for (t = ne(this, t); e; ) e._start === t && "isPause" === e.data && Bt(e), (e = e._next);
                }),
                (i.killTweensOf = function (t, e, i) {
                    for (var n = this.getTweensOf(t, i), r = n.length; r--; ) Qe !== n[r] && n[r].kill(t, e);
                    return this;
                }),
                (i.getTweensOf = function (t, e) {
                    for (var i, n = [], r = de(t), s = this._first, o = Y(e); s; )
                        s instanceof oi
                            ? Ot(s._targets, r) && (o ? (!Qe || (s._initted && s._ts)) && s.globalTime(0) <= e && s.globalTime(s.totalDuration()) > e : !e || s.isActive()) && n.push(s)
                            : (i = s.getTweensOf(r, e)).length && n.push.apply(n, i),
                            (s = s._next);
                    return n;
                }),
                (i.tweenTo = function (t, e) {
                    e = e || {};
                    var i,
                        n = this,
                        r = ne(n, t),
                        s = e,
                        o = s.startAt,
                        a = s.onStart,
                        l = s.onStartParams,
                        c = s.immediateRender,
                        u = oi.to(
                            n,
                            Dt(
                                {
                                    ease: e.ease || "none",
                                    lazy: !1,
                                    immediateRender: !1,
                                    time: r,
                                    overwrite: "auto",
                                    duration: e.duration || Math.abs((r - (o && "time" in o ? o.time : n._time)) / n.timeScale()) || 1e-8,
                                    onStart: function () {
                                        if ((n.pause(), !i)) {
                                            var t = e.duration || Math.abs((r - (o && "time" in o ? o.time : n._time)) / n.timeScale());
                                            u._dur !== t && te(u, t, 0, 1).render(u._time, !0, !0), (i = 1);
                                        }
                                        a && a.apply(u, l || []);
                                    },
                                },
                                e
                            )
                        );
                    return c ? u.render(0) : u;
                }),
                (i.tweenFromTo = function (t, e, i) {
                    return this.tweenTo(e, Dt({ startAt: { time: ne(this, t) } }, i));
                }),
                (i.recent = function () {
                    return this._recent;
                }),
                (i.nextLabel = function (t) {
                    return void 0 === t && (t = this._time), Te(this, ne(this, t));
                }),
                (i.previousLabel = function (t) {
                    return void 0 === t && (t = this._time), Te(this, ne(this, t), 1);
                }),
                (i.currentLabel = function (t) {
                    return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + 1e-8);
                }),
                (i.shiftChildren = function (t, e, i) {
                    void 0 === i && (i = 0);
                    for (var n, r = this._first, s = this.labels; r; ) r._start >= i && ((r._start += t), (r._end += t)), (r = r._next);
                    if (e) for (n in s) s[n] >= i && (s[n] += t);
                    return jt(this);
                }),
                (i.invalidate = function (e) {
                    var i = this._first;
                    for (this._lock = 0; i; ) i.invalidate(e), (i = i._next);
                    return t.prototype.invalidate.call(this, e);
                }),
                (i.clear = function (t) {
                    void 0 === t && (t = !0);
                    for (var e, i = this._first; i; ) (e = i._next), this.remove(i), (i = e);
                    return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), jt(this);
                }),
                (i.totalDuration = function (t) {
                    var e,
                        i,
                        n,
                        r = 0,
                        s = this,
                        o = s._last,
                        a = D;
                    if (arguments.length) return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -t : t));
                    if (s._dirty) {
                        for (n = s.parent; o; )
                            (e = o._prev),
                                o._dirty && o.totalDuration(),
                                (i = o._start) > a && s._sort && o._ts && !s._lock ? ((s._lock = 1), (Qt(s, o, i - o._delay, 1)._lock = 0)) : (a = i),
                                i < 0 && o._ts && ((r -= i), ((!n && !s._dp) || (n && n.smoothChildTiming)) && ((s._start += i / s._ts), (s._time -= i), (s._tTime -= i)), s.shiftChildren(-i, !1, -Infinity), (a = 0)),
                                o._end > r && o._ts && (r = o._end),
                                (o = e);
                        te(s, s === _ && s._time > r ? s._time : r, 1, 1), (s._dirty = 0);
                    }
                    return s._tDur;
                }),
                (e.updateRoot = function (t) {
                    if ((_._ts && (At(_, qt(t, _)), (k = ze.frame)), ze.frame >= _t)) {
                        _t += P.autoSleep || 120;
                        var e = _._first;
                        if ((!e || !e._ts) && P.autoSleep && ze._listeners.length < 2) {
                            for (; e && !e._ts; ) e = e._next;
                            e || ze.sleep();
                        }
                    }
                }),
                e
            );
        })(Ve);
        Dt(Ge.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
        var Qe,
            Ze,
            Ke = function (t, e, i, n, r, s, o) {
                var a,
                    l,
                    c,
                    u,
                    d,
                    p,
                    h,
                    f,
                    g = new wi(this._pt, t, e, 0, 1, fi, null, r),
                    v = 0,
                    m = 0;
                for (g.b = i, g.e = n, i += "", (h = ~(n += "").indexOf("random(")) && (n = ye(n)), s && (s((f = [i, n]), t, e), (i = f[0]), (n = f[1])), l = i.match(J) || []; (a = J.exec(n)); )
                    (u = a[0]),
                        (d = n.substring(v, a.index)),
                        c ? (c = (c + 1) % 5) : "rgba(" === d.substr(-5) && (c = 1),
                        u !== l[m++] &&
                            ((p = parseFloat(l[m - 1]) || 0), (g._pt = { _next: g._pt, p: d || 1 === m ? d : ",", s: p, c: "=" === u.charAt(1) ? $t(p, u) - p : parseFloat(u) - p, m: c && c < 4 ? Math.round : 0 }), (v = J.lastIndex));
                return (g.c = v < n.length ? n.substring(v, n.length) : ""), (g.fp = o), (tt.test(n) || h) && (g.e = 0), (this._pt = g), g;
            },
            Je = function (t, e, i, n, r, s, o, a, l, c) {
                j(n) && (n = n(r || 0, t, s));
                var u,
                    d = t[e],
                    p = "get" !== i ? i : j(d) ? (l ? t[e.indexOf("set") || !j(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](l) : t[e]()) : d,
                    h = j(d) ? (l ? ci : li) : ai;
                if ((B(n) && (~n.indexOf("random(") && (n = ye(n)), "=" === n.charAt(1) && ((u = $t(p, n) + (ae(p) || 0)) || 0 === u) && (n = u)), !c || p !== n || Ze))
                    return isNaN(p * n) || "" === n
                        ? (!d && !(e in t) && ot(e, n), Ke.call(this, t, e, p, n, h, a || P.stringFilter, l))
                        : ((u = new wi(this._pt, t, e, +p || 0, n - (p || 0), "boolean" == typeof d ? hi : pi, 0, h)), l && (u.fp = l), o && u.modifier(o, this, t), (this._pt = u));
            },
            ti = function (t, e, i, n, r, s) {
                var o, a, l, c;
                if (
                    vt[t] &&
                    !1 !==
                        (o = new vt[t]()).init(
                            r,
                            o.rawVars
                                ? e[t]
                                : (function (t, e, i, n, r) {
                                      if ((j(t) && (t = ni(t, r, e, i, n)), !W(t) || (t.style && t.nodeType) || G(t) || V(t))) return B(t) ? ni(t, r, e, i, n) : t;
                                      var s,
                                          o = {};
                                      for (s in t) o[s] = ni(t[s], r, e, i, n);
                                      return o;
                                  })(e[t], n, r, s, i),
                            i,
                            n,
                            s
                        ) &&
                    ((i._pt = a = new wi(i._pt, r, t, 0, 1, o.render, o, 0, o.priority)), i !== x)
                )
                    for (l = i._ptLookup[i._targets.indexOf(r)], c = o._props.length; c--; ) l[o._props[c]] = a;
                return o;
            },
            ei = function t(e, i, n) {
                var r,
                    s,
                    o,
                    a,
                    l,
                    c,
                    u,
                    d,
                    p,
                    h,
                    f,
                    m,
                    y,
                    w = e.vars,
                    T = w.ease,
                    b = w.startAt,
                    k = w.immediateRender,
                    x = w.lazy,
                    S = w.onUpdate,
                    C = w.onUpdateParams,
                    $ = w.callbackScope,
                    O = w.runBackwards,
                    M = w.yoyoEase,
                    A = w.keyframes,
                    P = w.autoRevert,
                    z = e._dur,
                    R = e._startAt,
                    I = e._targets,
                    L = e.parent,
                    H = L && "nested" === L.data ? L.vars.targets : I,
                    F = "auto" === e._overwrite && !g,
                    B = e.timeline;
                if (
                    (B && (!A || !T) && (T = "none"),
                    (e._ease = Ye(T, E.ease)),
                    (e._yEase = M ? Be(Ye(!0 === M ? T : M, E.ease)) : 0),
                    M && e._yoyo && !e._repeat && ((M = e._yEase), (e._yEase = e._ease), (e._ease = M)),
                    (e._from = !B && !!w.runBackwards),
                    !B || (A && !w.stagger))
                ) {
                    if (((m = (d = I[0] ? bt(I[0]).harness : 0) && w[d.prop]), (r = It(w, ht)), R && (R._zTime < 0 && R.progress(1), i < 0 && O && k && !P ? R.render(-1, !0) : R.revert(O && z ? dt : ut), (R._lazy = 0)), b)) {
                        if (
                            (Bt((e._startAt = oi.set(I, Dt({ data: "isStart", overwrite: !1, parent: L, immediateRender: !0, lazy: !R && X(x), startAt: null, delay: 0, onUpdate: S, onUpdateParams: C, callbackScope: $, stagger: 0 }, b)))),
                            (e._startAt._dp = 0),
                            (e._startAt._sat = e),
                            i < 0 && (v || (!k && !P)) && e._startAt.revert(dt),
                            k && z && i <= 0 && n <= 0)
                        )
                            return void (i && (e._zTime = i));
                    } else if (O && z && !R)
                        if (
                            (i && (k = !1),
                            (o = Dt({ overwrite: !1, data: "isFromStart", lazy: k && !R && X(x), immediateRender: k, stagger: 0, parent: L }, r)),
                            m && (o[d.prop] = m),
                            Bt((e._startAt = oi.set(I, o))),
                            (e._startAt._dp = 0),
                            (e._startAt._sat = e),
                            i < 0 && (v ? e._startAt.revert(dt) : e._startAt.render(-1, !0)),
                            (e._zTime = i),
                            k)
                        ) {
                            if (!i) return;
                        } else t(e._startAt, 1e-8, 1e-8);
                    for (e._pt = e._ptCache = 0, x = (z && X(x)) || (x && !z), s = 0; s < I.length; s++) {
                        if (
                            ((u = (l = I[s])._gsap || Tt(I)[s]._gsap),
                            (e._ptLookup[s] = h = {}),
                            gt[u.id] && ft.length && Mt(),
                            (f = H === I ? s : H.indexOf(l)),
                            d &&
                                !1 !== (p = new d()).init(l, m || r, e, f, H) &&
                                ((e._pt = a = new wi(e._pt, l, p.name, 0, 1, p.render, p, 0, p.priority)),
                                p._props.forEach(function (t) {
                                    h[t] = a;
                                }),
                                p.priority && (c = 1)),
                            !d || m)
                        )
                            for (o in r) vt[o] && (p = ti(o, r, e, f, l, H)) ? p.priority && (c = 1) : (h[o] = a = Je.call(e, l, o, "get", r[o], f, H, 0, w.stringFilter));
                        e._op && e._op[s] && e.kill(l, e._op[s]), F && e._pt && ((Qe = e), _.killTweensOf(l, h, e.globalTime(i)), (y = !e.parent), (Qe = 0)), e._pt && x && (gt[u.id] = 1);
                    }
                    c && yi(e), e._onInit && e._onInit(e);
                }
                (e._onUpdate = S), (e._initted = (!e._op || e._pt) && !y), A && i <= 0 && B.render(D, !0, !0);
            },
            ii = function (t, e, i, n) {
                var r,
                    s,
                    o = e.ease || n || "power1.inOut";
                if (G(e))
                    (s = i[t] || (i[t] = [])),
                        e.forEach(function (t, i) {
                            return s.push({ t: (i / (e.length - 1)) * 100, v: t, e: o });
                        });
                else for (r in e) (s = i[r] || (i[r] = [])), "ease" === r || s.push({ t: parseFloat(t), v: e[r], e: o });
            },
            ni = function (t, e, i, n, r) {
                return j(t) ? t.call(e, i, n, r) : B(t) && ~t.indexOf("random(") ? ye(t) : t;
            },
            ri = wt + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
            si = {};
        xt(ri + ",id,stagger,delay,duration,paused,scrollTrigger", function (t) {
            return (si[t] = 1);
        });
        var oi = (function (t) {
            function e(e, i, n, r) {
                var s;
                "number" == typeof i && ((n.duration = i), (i = n), (n = null));
                var o,
                    a,
                    l,
                    c,
                    u,
                    d,
                    p,
                    f,
                    v = (s = t.call(this, r ? i : Lt(i)) || this).vars,
                    m = v.duration,
                    y = v.delay,
                    w = v.immediateRender,
                    T = v.stagger,
                    b = v.overwrite,
                    k = v.keyframes,
                    x = v.defaults,
                    S = v.scrollTrigger,
                    C = v.yoyoEase,
                    $ = i.parent || _,
                    O = (G(e) || V(e) ? Y(e[0]) : "length" in i) ? [e] : de(e);
                if (((s._targets = O.length ? Tt(O) : at("GSAP target " + e + " not found. https://greensock.com", !P.nullTargetWarn) || []), (s._ptLookup = []), (s._overwrite = b), k || T || U(m) || U(y))) {
                    if (((i = s.vars), (o = s.timeline = new Ge({ data: "nested", defaults: x || {}, targets: $ && "nested" === $.data ? $.vars.targets : O })).kill(), (o.parent = o._dp = h(s)), (o._start = 0), T || U(m) || U(y))) {
                        if (((c = O.length), (p = T && fe(T)), W(T))) for (u in T) ~ri.indexOf(u) && (f || (f = {}), (f[u] = T[u]));
                        for (a = 0; a < c; a++)
                            ((l = It(i, si)).stagger = 0),
                                C && (l.yoyoEase = C),
                                f && zt(l, f),
                                (d = O[a]),
                                (l.duration = +ni(m, h(s), a, d, O)),
                                (l.delay = (+ni(y, h(s), a, d, O) || 0) - s._delay),
                                !T && 1 === c && l.delay && ((s._delay = y = l.delay), (s._start += y), (l.delay = 0)),
                                o.to(d, l, p ? p(a, d, O) : 0),
                                (o._ease = Ie.none);
                        o.duration() ? (m = y = 0) : (s.timeline = 0);
                    } else if (k) {
                        Lt(Dt(o.vars.defaults, { ease: "none" })), (o._ease = Ye(k.ease || i.ease || "none"));
                        var M,
                            A,
                            E,
                            D = 0;
                        if (G(k))
                            k.forEach(function (t) {
                                return o.to(O, t, ">");
                            }),
                                o.duration();
                        else {
                            for (u in ((l = {}), k)) "ease" === u || "easeEach" === u || ii(u, k[u], l, k.easeEach);
                            for (u in l)
                                for (
                                    M = l[u].sort(function (t, e) {
                                        return t.t - e.t;
                                    }),
                                        D = 0,
                                        a = 0;
                                    a < M.length;
                                    a++
                                )
                                    ((E = { ease: (A = M[a]).e, duration: ((A.t - (a ? M[a - 1].t : 0)) / 100) * m })[u] = A.v), o.to(O, E, D), (D += E.duration);
                            o.duration() < m && o.to({}, { duration: m - o.duration() });
                        }
                    }
                    m || s.duration((m = o.duration()));
                } else s.timeline = 0;
                return (
                    !0 !== b || g || ((Qe = h(s)), _.killTweensOf(O), (Qe = 0)),
                    Qt($, h(s), n),
                    i.reversed && s.reverse(),
                    i.paused && s.paused(!0),
                    (w ||
                        (!m &&
                            !k &&
                            s._start === Ct($._time) &&
                            X(w) &&
                            (function t(e) {
                                return !e || (e._ts && t(e.parent));
                            })(h(s)) &&
                            "nested" !== $.data)) &&
                        ((s._tTime = -1e-8), s.render(Math.max(0, -y) || 0)),
                    S && Zt(h(s), S),
                    s
                );
            }
            f(e, t);
            var i = e.prototype;
            return (
                (i.render = function (t, e, i) {
                    var n,
                        r,
                        s,
                        o,
                        a,
                        l,
                        c,
                        u,
                        d,
                        p = this._time,
                        h = this._tDur,
                        f = this._dur,
                        g = t < 0,
                        m = t > h - 1e-8 && !g ? h : t < 1e-8 ? 0 : t;
                    if (f) {
                        if (m !== this._tTime || !t || i || (!this._initted && this._tTime) || (this._startAt && this._zTime < 0 !== g)) {
                            if (((n = m), (u = this.timeline), this._repeat)) {
                                if (((o = f + this._rDelay), this._repeat < -1 && g)) return this.totalTime(100 * o + t, e, i);
                                if (
                                    ((n = Ct(m % o)),
                                    m === h ? ((s = this._repeat), (n = f)) : ((s = ~~(m / o)) && s === m / o && ((n = f), s--), n > f && (n = f)),
                                    (l = this._yoyo && 1 & s) && ((d = this._yEase), (n = f - n)),
                                    (a = Xt(this._tTime, o)),
                                    n === p && !i && this._initted)
                                )
                                    return (this._tTime = m), this;
                                s !== a && (u && this._yEase && je(u, l), !this.vars.repeatRefresh || l || this._lock || ((this._lock = i = 1), (this.render(Ct(o * s), !0).invalidate()._lock = 0)));
                            }
                            if (!this._initted) {
                                if (Kt(this, g ? t : n, i, e, m)) return (this._tTime = 0), this;
                                if (p !== this._time) return this;
                                if (f !== this._dur) return this.render(t, e, i);
                            }
                            if (
                                ((this._tTime = m),
                                (this._time = n),
                                !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
                                (this.ratio = c = (d || this._ease)(n / f)),
                                this._from && (this.ratio = c = 1 - c),
                                n && !p && !e && !s && (be(this, "onStart"), this._tTime !== m))
                            )
                                return this;
                            for (r = this._pt; r; ) r.r(c, r.d), (r = r._next);
                            (u && u.render(t < 0 ? t : !n && l ? -1e-8 : u._dur * u._ease(n / this._dur), e, i)) || (this._startAt && (this._zTime = t)),
                                this._onUpdate && !e && (g && Nt(this, t, 0, i), be(this, "onUpdate")),
                                this._repeat && s !== a && this.vars.onRepeat && !e && this.parent && be(this, "onRepeat"),
                                (m !== this._tDur && m) ||
                                    this._tTime !== m ||
                                    (g && !this._onUpdate && Nt(this, t, 0, !0),
                                    (t || !f) && ((m === this._tDur && this._ts > 0) || (!m && this._ts < 0)) && Bt(this, 1),
                                    e || (g && !p) || !(m || p || l) || (be(this, m === h ? "onComplete" : "onReverseComplete", !0), this._prom && !(m < h && this.timeScale() > 0) && this._prom()));
                        }
                    } else
                        !(function (t, e, i, n) {
                            var r,
                                s,
                                o,
                                a = t.ratio,
                                l =
                                    e < 0 ||
                                    (!e &&
                                        ((!t._start &&
                                            (function t(e) {
                                                var i = e.parent;
                                                return i && i._ts && i._initted && !i._lock && (i.rawTime() < 0 || t(i));
                                            })(t) &&
                                            (t._initted || !Jt(t))) ||
                                            ((t._ts < 0 || t._dp._ts < 0) && !Jt(t))))
                                        ? 0
                                        : 1,
                                c = t._rDelay,
                                u = 0;
                            if (
                                (c && t._repeat && ((u = oe(0, t._tDur, e)), (s = Xt(u, c)), t._yoyo && 1 & s && (l = 1 - l), s !== Xt(t._tTime, c) && ((a = 1 - l), t.vars.repeatRefresh && t._initted && t.invalidate())),
                                l !== a || v || n || 1e-8 === t._zTime || (!e && t._zTime))
                            ) {
                                if (!t._initted && Kt(t, e, n, i, u)) return;
                                for (o = t._zTime, t._zTime = e || (i ? 1e-8 : 0), i || (i = e && !o), t.ratio = l, t._from && (l = 1 - l), t._time = 0, t._tTime = u, r = t._pt; r; ) r.r(l, r.d), (r = r._next);
                                e < 0 && Nt(t, e, 0, !0),
                                    t._onUpdate && !i && be(t, "onUpdate"),
                                    u && t._repeat && !i && t.parent && be(t, "onRepeat"),
                                    (e >= t._tDur || e < 0) && t.ratio === l && (l && Bt(t, 1), i || v || (be(t, l ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()));
                            } else t._zTime || (t._zTime = e);
                        })(this, t, e, i);
                    return this;
                }),
                (i.targets = function () {
                    return this._targets;
                }),
                (i.invalidate = function (e) {
                    return (
                        (!e || !this.vars.runBackwards) && (this._startAt = 0),
                        (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
                        (this._ptLookup = []),
                        this.timeline && this.timeline.invalidate(e),
                        t.prototype.invalidate.call(this, e)
                    );
                }),
                (i.resetTo = function (t, e, i, n) {
                    S || ze.wake(), this._ts || this.play();
                    var r = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
                    return (
                        this._initted || ei(this, r),
                        (function (t, e, i, n, r, s, o) {
                            var a,
                                l,
                                c,
                                u,
                                d = ((t._pt && t._ptCache) || (t._ptCache = {}))[e];
                            if (!d)
                                for (d = t._ptCache[e] = [], c = t._ptLookup, u = t._targets.length; u--; ) {
                                    if ((a = c[u][e]) && a.d && a.d._pt) for (a = a.d._pt; a && a.p !== e && a.fp !== e; ) a = a._next;
                                    if (!a) return (Ze = 1), (t.vars[e] = "+=0"), ei(t, o), (Ze = 0), 1;
                                    d.push(a);
                                }
                            for (u = d.length; u--; ) ((a = (l = d[u])._pt || l).s = (!n && 0 !== n) || r ? a.s + (n || 0) + s * a.c : n), (a.c = i - a.s), l.e && (l.e = St(i) + ae(l.e)), l.b && (l.b = a.s + ae(l.b));
                        })(this, t, e, i, n, this._ease(r / this._dur), r)
                            ? this.resetTo(t, e, i, n)
                            : (Vt(this, 0), this.parent || Ht(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
                    );
                }),
                (i.kill = function (t, e) {
                    if ((void 0 === e && (e = "all"), !(t || (e && "all" !== e)))) return (this._lazy = this._pt = 0), this.parent ? ke(this) : this;
                    if (this.timeline) {
                        var i = this.timeline.totalDuration();
                        return this.timeline.killTweensOf(t, e, Qe && !0 !== Qe.vars.overwrite)._first || ke(this), this.parent && i !== this.timeline.totalDuration() && te(this, (this._dur * this.timeline._tDur) / i, 0, 1), this;
                    }
                    var n,
                        r,
                        s,
                        o,
                        a,
                        l,
                        c,
                        u = this._targets,
                        d = t ? de(t) : u,
                        p = this._ptLookup,
                        h = this._pt;
                    if (
                        (!e || "all" === e) &&
                        (function (t, e) {
                            for (var i = t.length, n = i === e.length; n && i-- && t[i] === e[i]; );
                            return i < 0;
                        })(u, d)
                    )
                        return "all" === e && (this._pt = 0), ke(this);
                    for (
                        n = this._op = this._op || [],
                            "all" !== e &&
                                (B(e) &&
                                    ((a = {}),
                                    xt(e, function (t) {
                                        return (a[t] = 1);
                                    }),
                                    (e = a)),
                                (e = (function (t, e) {
                                    var i,
                                        n,
                                        r,
                                        s,
                                        o = t[0] ? bt(t[0]).harness : 0,
                                        a = o && o.aliases;
                                    if (!a) return e;
                                    for (n in ((i = zt({}, e)), a)) if ((n in i)) for (r = (s = a[n].split(",")).length; r--; ) i[s[r]] = i[n];
                                    return i;
                                })(u, e))),
                            c = u.length;
                        c--;

                    )
                        if (~d.indexOf(u[c]))
                            for (a in ((r = p[c]), "all" === e ? ((n[c] = e), (o = r), (s = {})) : ((s = n[c] = n[c] || {}), (o = e)), o))
                                (l = r && r[a]) && (("kill" in l.d && !0 !== l.d.kill(a)) || Ft(this, l, "_pt"), delete r[a]), "all" !== s && (s[a] = 1);
                    return this._initted && !this._pt && h && ke(this), this;
                }),
                (e.to = function (t, i) {
                    return new e(t, i, arguments[2]);
                }),
                (e.from = function (t, e) {
                    return re(1, arguments);
                }),
                (e.delayedCall = function (t, i, n, r) {
                    return new e(i, 0, { immediateRender: !1, lazy: !1, overwrite: !1, delay: t, onComplete: i, onReverseComplete: i, onCompleteParams: n, onReverseCompleteParams: n, callbackScope: r });
                }),
                (e.fromTo = function (t, e, i) {
                    return re(2, arguments);
                }),
                (e.set = function (t, i) {
                    return (i.duration = 0), i.repeatDelay || (i.repeat = 0), new e(t, i);
                }),
                (e.killTweensOf = function (t, e, i) {
                    return _.killTweensOf(t, e, i);
                }),
                e
            );
        })(Ve);
        Dt(oi.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
            xt("staggerTo,staggerFrom,staggerFromTo", function (t) {
                oi[t] = function () {
                    var e = new Ge(),
                        i = le.call(arguments, 0);
                    return i.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, i);
                };
            });
        var ai = function (t, e, i) {
                return (t[e] = i);
            },
            li = function (t, e, i) {
                return t[e](i);
            },
            ci = function (t, e, i, n) {
                return t[e](n.fp, i);
            },
            ui = function (t, e, i) {
                return t.setAttribute(e, i);
            },
            di = function (t, e) {
                return j(t[e]) ? li : N(t[e]) && t.setAttribute ? ui : ai;
            },
            pi = function (t, e) {
                return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e);
            },
            hi = function (t, e) {
                return e.set(e.t, e.p, !!(e.s + e.c * t), e);
            },
            fi = function (t, e) {
                var i = e._pt,
                    n = "";
                if (!t && e.b) n = e.b;
                else if (1 === t && e.e) n = e.e;
                else {
                    for (; i; ) (n = i.p + (i.m ? i.m(i.s + i.c * t) : Math.round(1e4 * (i.s + i.c * t)) / 1e4) + n), (i = i._next);
                    n += e.c;
                }
                e.set(e.t, e.p, n, e);
            },
            gi = function (t, e) {
                for (var i = e._pt; i; ) i.r(t, i.d), (i = i._next);
            },
            vi = function (t, e, i, n) {
                for (var r, s = this._pt; s; ) (r = s._next), s.p === n && s.modifier(t, e, i), (s = r);
            },
            mi = function (t) {
                for (var e, i, n = this._pt; n; ) (i = n._next), (n.p === t && !n.op) || n.op === t ? Ft(this, n, "_pt") : n.dep || (e = 1), (n = i);
                return !e;
            },
            _i = function (t, e, i, n) {
                n.mSet(t, e, n.m.call(n.tween, i, n.mt), n);
            },
            yi = function (t) {
                for (var e, i, n, r, s = t._pt; s; ) {
                    for (e = s._next, i = n; i && i.pr > s.pr; ) i = i._next;
                    (s._prev = i ? i._prev : r) ? (s._prev._next = s) : (n = s), (s._next = i) ? (i._prev = s) : (r = s), (s = e);
                }
                t._pt = n;
            },
            wi = (function () {
                function t(t, e, i, n, r, s, o, a, l) {
                    (this.t = e), (this.s = n), (this.c = r), (this.p = i), (this.r = s || pi), (this.d = o || this), (this.set = a || ai), (this.pr = l || 0), (this._next = t), t && (t._prev = this);
                }
                return (
                    (t.prototype.modifier = function (t, e, i) {
                        (this.mSet = this.mSet || this.set), (this.set = _i), (this.m = t), (this.mt = i), (this.tween = e);
                    }),
                    t
                );
            })();
        xt(
            wt +
                "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
            function (t) {
                return (ht[t] = 1);
            }
        ),
            (nt.TweenMax = nt.TweenLite = oi),
            (nt.TimelineLite = nt.TimelineMax = Ge),
            (_ = new Ge({ sortChildren: !1, defaults: E, autoRemoveChildren: !0, id: "root", smoothChildTiming: !0 })),
            (P.stringFilter = De);
        var Ti = [],
            bi = {},
            ki = [],
            xi = 0,
            Si = 0,
            Ci = function (t) {
                return (bi[t] || ki).map(function (t) {
                    return t();
                });
            },
            $i = function () {
                var t = Date.now(),
                    e = [];
                t - xi > 2 &&
                    (Ci("matchMediaInit"),
                    Ti.forEach(function (t) {
                        var i,
                            n,
                            r,
                            s,
                            o = t.queries,
                            a = t.conditions;
                        for (n in o) (i = y.matchMedia(o[n]).matches) && (r = 1), i !== a[n] && ((a[n] = i), (s = 1));
                        s && (t.revert(), r && e.push(t));
                    }),
                    Ci("matchMediaRevert"),
                    e.forEach(function (t) {
                        return t.onMatch(t);
                    }),
                    (xi = t),
                    Ci("matchMedia"));
            },
            Oi = (function () {
                function t(t, e) {
                    (this.selector = e && pe(e)), (this.data = []), (this._r = []), (this.isReverted = !1), (this.id = Si++), t && this.add(t);
                }
                var e = t.prototype;
                return (
                    (e.add = function (t, e, i) {
                        j(t) && ((i = e), (e = t), (t = j));
                        var n = this,
                            r = function () {
                                var t,
                                    r = m,
                                    s = n.selector;
                                return r && r !== n && r.data.push(n), i && (n.selector = pe(i)), (m = n), (t = e.apply(n, arguments)), j(t) && n._r.push(t), (m = r), (n.selector = s), (n.isReverted = !1), t;
                            };
                        return (n.last = r), t === j ? r(n) : t ? (n[t] = r) : r;
                    }),
                    (e.ignore = function (t) {
                        var e = m;
                        (m = null), t(this), (m = e);
                    }),
                    (e.getTweens = function () {
                        var e = [];
                        return (
                            this.data.forEach(function (i) {
                                return i instanceof t ? e.push.apply(e, i.getTweens()) : i instanceof oi && !(i.parent && "nested" === i.parent.data) && e.push(i);
                            }),
                            e
                        );
                    }),
                    (e.clear = function () {
                        this._r.length = this.data.length = 0;
                    }),
                    (e.kill = function (t, e) {
                        var i = this;
                        if (t) {
                            var n = this.getTweens();
                            this.data.forEach(function (t) {
                                "isFlip" === t.data &&
                                    (t.revert(),
                                    t.getChildren(!0, !0, !1).forEach(function (t) {
                                        return n.splice(n.indexOf(t), 1);
                                    }));
                            }),
                                n
                                    .map(function (t) {
                                        return { g: t.globalTime(0), t: t };
                                    })
                                    .sort(function (t, e) {
                                        return e.g - t.g || -1 / 0;
                                    })
                                    .forEach(function (e) {
                                        return e.t.revert(t);
                                    }),
                                this.data.forEach(function (e) {
                                    return !(e instanceof oi) && e.revert && e.revert(t);
                                }),
                                this._r.forEach(function (e) {
                                    return e(t, i);
                                }),
                                (this.isReverted = !0);
                        } else
                            this.data.forEach(function (t) {
                                return t.kill && t.kill();
                            });
                        if ((this.clear(), e)) for (var r = Ti.length; r--; ) Ti[r].id === this.id && Ti.splice(r, 1);
                    }),
                    (e.revert = function (t) {
                        this.kill(t || {});
                    }),
                    t
                );
            })(),
            Mi = (function () {
                function t(t) {
                    (this.contexts = []), (this.scope = t);
                }
                var e = t.prototype;
                return (
                    (e.add = function (t, e, i) {
                        W(t) || (t = { matches: t });
                        var n,
                            r,
                            s,
                            o = new Oi(0, i || this.scope),
                            a = (o.conditions = {});
                        for (r in (m && !o.selector && (o.selector = m.selector), this.contexts.push(o), (e = o.add("onMatch", e)), (o.queries = t), t))
                            "all" === r ? (s = 1) : (n = y.matchMedia(t[r])) && (Ti.indexOf(o) < 0 && Ti.push(o), (a[r] = n.matches) && (s = 1), n.addListener ? n.addListener($i) : n.addEventListener("change", $i));
                        return s && e(o), this;
                    }),
                    (e.revert = function (t) {
                        this.kill(t || {});
                    }),
                    (e.kill = function (t) {
                        this.contexts.forEach(function (e) {
                            return e.kill(t, !0);
                        });
                    }),
                    t
                );
            })(),
            Ai = {
                registerPlugin: function () {
                    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                    e.forEach(function (t) {
                        return Se(t);
                    });
                },
                timeline: function (t) {
                    return new Ge(t);
                },
                getTweensOf: function (t, e) {
                    return _.getTweensOf(t, e);
                },
                getProperty: function (t, e, i, n) {
                    B(t) && (t = de(t)[0]);
                    var r = bt(t || {}).get,
                        s = i ? Et : Pt;
                    return (
                        "native" === i && (i = ""),
                        t
                            ? e
                                ? s(((vt[e] && vt[e].get) || r)(t, e, i, n))
                                : function (e, i, n) {
                                      return s(((vt[e] && vt[e].get) || r)(t, e, i, n));
                                  }
                            : t
                    );
                },
                quickSetter: function (t, e, i) {
                    if ((t = de(t)).length > 1) {
                        var n = t.map(function (t) {
                                return Di.quickSetter(t, e, i);
                            }),
                            r = n.length;
                        return function (t) {
                            for (var e = r; e--; ) n[e](t);
                        };
                    }
                    t = t[0] || {};
                    var s = vt[e],
                        o = bt(t),
                        a = (o.harness && (o.harness.aliases || {})[e]) || e,
                        l = s
                            ? function (e) {
                                  var n = new s();
                                  (x._pt = 0), n.init(t, i ? e + i : e, x, 0, [t]), n.render(1, n), x._pt && gi(1, x);
                              }
                            : o.set(t, a);
                    return s
                        ? l
                        : function (e) {
                              return l(t, a, i ? e + i : e, o, 1);
                          };
                },
                quickTo: function (t, e, i) {
                    var n,
                        r = Di.to(t, zt((((n = {})[e] = "+=0.1"), (n.paused = !0), n), i || {})),
                        s = function (t, i, n) {
                            return r.resetTo(e, t, i, n);
                        };
                    return (s.tween = r), s;
                },
                isTweening: function (t) {
                    return _.getTweensOf(t, !0).length > 0;
                },
                defaults: function (t) {
                    return t && t.ease && (t.ease = Ye(t.ease, E.ease)), Rt(E, t || {});
                },
                config: function (t) {
                    return Rt(P, t || {});
                },
                registerEffect: function (t) {
                    var e = t.name,
                        i = t.effect,
                        n = t.plugins,
                        r = t.defaults,
                        s = t.extendTimeline;
                    (n || "").split(",").forEach(function (t) {
                        return t && !vt[t] && !nt[t] && at(e + " effect requires " + t + " plugin.");
                    }),
                        (mt[e] = function (t, e, n) {
                            return i(de(t), Dt(e || {}, r), n);
                        }),
                        s &&
                            (Ge.prototype[e] = function (t, i, n) {
                                return this.add(mt[e](t, W(i) ? i : (n = i) && {}, this), n);
                            });
                },
                registerEase: function (t, e) {
                    Ie[t] = Ye(e);
                },
                parseEase: function (t, e) {
                    return arguments.length ? Ye(t, e) : Ie;
                },
                getById: function (t) {
                    return _.getById(t);
                },
                exportRoot: function (t, e) {
                    void 0 === t && (t = {});
                    var i,
                        n,
                        r = new Ge(t);
                    for (r.smoothChildTiming = X(t.smoothChildTiming), _.remove(r), r._dp = 0, r._time = r._tTime = _._time, i = _._first; i; )
                        (n = i._next), (!e && !i._dur && i instanceof oi && i.vars.onComplete === i._targets[0]) || Qt(r, i, i._start - i._delay), (i = n);
                    return Qt(_, r, 0), r;
                },
                context: function (t, e) {
                    return t ? new Oi(t, e) : m;
                },
                matchMedia: function (t) {
                    return new Mi(t);
                },
                matchMediaRefresh: function () {
                    return (
                        Ti.forEach(function (t) {
                            var e,
                                i,
                                n = t.conditions;
                            for (i in n) n[i] && ((n[i] = !1), (e = 1));
                            e && t.revert();
                        }) || $i()
                    );
                },
                addEventListener: function (t, e) {
                    var i = bi[t] || (bi[t] = []);
                    ~i.indexOf(e) || i.push(e);
                },
                removeEventListener: function (t, e) {
                    var i = bi[t],
                        n = i && i.indexOf(e);
                    n >= 0 && i.splice(n, 1);
                },
                utils: {
                    wrap: function t(e, i, n) {
                        var r = i - e;
                        return G(e)
                            ? _e(e, t(0, e.length), i)
                            : se(n, function (t) {
                                  return ((r + ((t - e) % r)) % r) + e;
                              });
                    },
                    wrapYoyo: function t(e, i, n) {
                        var r = i - e,
                            s = 2 * r;
                        return G(e)
                            ? _e(e, t(0, e.length - 1), i)
                            : se(n, function (t) {
                                  return e + ((t = (s + ((t - e) % s)) % s || 0) > r ? s - t : t);
                              });
                    },
                    distribute: fe,
                    random: me,
                    snap: ve,
                    normalize: function (t, e, i) {
                        return we(t, e, 0, 1, i);
                    },
                    getUnit: ae,
                    clamp: function (t, e, i) {
                        return se(i, function (i) {
                            return oe(t, e, i);
                        });
                    },
                    splitColor: Oe,
                    toArray: de,
                    selector: pe,
                    mapRange: we,
                    pipe: function () {
                        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                        return function (t) {
                            return e.reduce(function (t, e) {
                                return e(t);
                            }, t);
                        };
                    },
                    unitize: function (t, e) {
                        return function (i) {
                            return t(parseFloat(i)) + (e || ae(i));
                        };
                    },
                    interpolate: function t(e, i, n, r) {
                        var s = isNaN(e + i)
                            ? 0
                            : function (t) {
                                  return (1 - t) * e + t * i;
                              };
                        if (!s) {
                            var o,
                                a,
                                l,
                                c,
                                u,
                                d = B(e),
                                p = {};
                            if ((!0 === n && (r = 1) && (n = null), d)) (e = { p: e }), (i = { p: i });
                            else if (G(e) && !G(i)) {
                                for (l = [], c = e.length, u = c - 2, a = 1; a < c; a++) l.push(t(e[a - 1], e[a]));
                                c--,
                                    (s = function (t) {
                                        t *= c;
                                        var e = Math.min(u, ~~t);
                                        return l[e](t - e);
                                    }),
                                    (n = i);
                            } else r || (e = zt(G(e) ? [] : {}, e));
                            if (!l) {
                                for (o in i) Je.call(p, e, o, "get", i[o]);
                                s = function (t) {
                                    return gi(t, p) || (d ? e.p : e);
                                };
                            }
                        }
                        return se(n, s);
                    },
                    shuffle: he,
                },
                install: st,
                effects: mt,
                ticker: ze,
                updateRoot: Ge.updateRoot,
                plugins: vt,
                globalTimeline: _,
                core: {
                    PropTween: wi,
                    globals: lt,
                    Tween: oi,
                    Timeline: Ge,
                    Animation: Ve,
                    getCache: bt,
                    _removeLinkedListItem: Ft,
                    reverting: function () {
                        return v;
                    },
                    context: function (t) {
                        return t && m && (m.data.push(t), (t._ctx = m)), m;
                    },
                    suppressOverwrites: function (t) {
                        return (g = t);
                    },
                },
            };
        xt("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
            return (Ai[t] = oi[t]);
        }),
            ze.add(Ge.updateRoot),
            (x = Ai.to({}, { duration: 0 }));
        var Pi = function (t, e) {
                for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e; ) i = i._next;
                return i;
            },
            Ei = function (t, e) {
                return {
                    name: t,
                    rawVars: 1,
                    init: function (t, i, n) {
                        n._onInit = function (t) {
                            var n, r;
                            if (
                                (B(i) &&
                                    ((n = {}),
                                    xt(i, function (t) {
                                        return (n[t] = 1);
                                    }),
                                    (i = n)),
                                e)
                            ) {
                                for (r in ((n = {}), i)) n[r] = e(i[r]);
                                i = n;
                            }
                            !(function (t, e) {
                                var i,
                                    n,
                                    r,
                                    s = t._targets;
                                for (i in e) for (n = s.length; n--; ) (r = t._ptLookup[n][i]) && (r = r.d) && (r._pt && (r = Pi(r, i)), r && r.modifier && r.modifier(e[i], t, s[n], i));
                            })(t, i);
                        };
                    },
                };
            },
            Di =
                Ai.registerPlugin(
                    {
                        name: "attr",
                        init: function (t, e, i, n, r) {
                            var s, o, a;
                            for (s in ((this.tween = i), e)) (a = t.getAttribute(s) || ""), ((o = this.add(t, "setAttribute", (a || 0) + "", e[s], n, r, 0, 0, s)).op = s), (o.b = a), this._props.push(s);
                        },
                        render: function (t, e) {
                            for (var i = e._pt; i; ) v ? i.set(i.t, i.p, i.b, i) : i.r(t, i.d), (i = i._next);
                        },
                    },
                    {
                        name: "endArray",
                        init: function (t, e) {
                            for (var i = e.length; i--; ) this.add(t, i, t[i] || 0, e[i], 0, 0, 0, 0, 0, 1);
                        },
                    },
                    Ei("roundProps", ge),
                    Ei("modifiers"),
                    Ei("snap", ve)
                ) || Ai;
        (oi.version = Ge.version = Di.version = "3.12.2"), (b = 1), q() && Re();
        Ie.Power0, Ie.Power1, Ie.Power2, Ie.Power3, Ie.Power4, Ie.Linear, Ie.Quad, Ie.Cubic, Ie.Quart, Ie.Quint, Ie.Strong, Ie.Elastic, Ie.Back, Ie.SteppedEase, Ie.Bounce;
        /*!
         * CSSPlugin 3.12.2
         * https://greensock.com
         *
         * Copyright 2008-2023, GreenSock. All rights reserved.
         * Subject to the terms at https://greensock.com/standard-license or for
         * Club GreenSock members, the agreement issued with that membership.
         * @author: Jack Doyle, jack@greensock.com
         */ var zi,
            Ri,
            Ii,
            Li,
            Hi,
            Fi,
            Bi,
            ji,
            Yi = Ie.Sine,
            Ni = (Ie.Expo, Ie.Circ, {}),
            Wi = 180 / Math.PI,
            Xi = Math.PI / 180,
            qi = Math.atan2,
            Ui = /([A-Z])/g,
            Vi = /(left|right|width|margin|padding|x)/i,
            Gi = /[\s,\(]\S/,
            Qi = { autoAlpha: "opacity,visibility", scale: "scaleX,scaleY", alpha: "opacity" },
            Zi = function (t, e) {
                return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
            },
            Ki = function (t, e) {
                return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
            },
            Ji = function (t, e) {
                return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e);
            },
            tn = function (t, e) {
                var i = e.s + e.c * t;
                e.set(e.t, e.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + e.u, e);
            },
            en = function (t, e) {
                return e.set(e.t, e.p, t ? e.e : e.b, e);
            },
            nn = function (t, e) {
                return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
            },
            rn = function (t, e, i) {
                return (t.style[e] = i);
            },
            sn = function (t, e, i) {
                return t.style.setProperty(e, i);
            },
            on = function (t, e, i) {
                return (t._gsap[e] = i);
            },
            an = function (t, e, i) {
                return (t._gsap.scaleX = t._gsap.scaleY = i);
            },
            ln = function (t, e, i, n, r) {
                var s = t._gsap;
                (s.scaleX = s.scaleY = i), s.renderTransform(r, s);
            },
            cn = function (t, e, i, n, r) {
                var s = t._gsap;
                (s[e] = i), s.renderTransform(r, s);
            },
            un = "transform",
            dn = un + "Origin",
            pn = function t(e, i) {
                var n = this,
                    r = this.target,
                    s = r.style;
                if (e in Ni && s) {
                    if (((this.tfm = this.tfm || {}), "transform" === e))
                        return Qi.transform.split(",").forEach(function (e) {
                            return t.call(n, e, i);
                        });
                    if (
                        (~(e = Qi[e] || e).indexOf(",")
                            ? e.split(",").forEach(function (t) {
                                  return (n.tfm[t] = An(r, t));
                              })
                            : (this.tfm[e] = r._gsap.x ? r._gsap[e] : An(r, e)),
                        this.props.indexOf(un) >= 0)
                    )
                        return;
                    r._gsap.svg && ((this.svgo = r.getAttribute("data-svg-origin")), this.props.push(dn, i, "")), (e = un);
                }
                (s || i) && this.props.push(e, i, s[e]);
            },
            hn = function (t) {
                t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"));
            },
            fn = function () {
                var t,
                    e,
                    i = this.props,
                    n = this.target,
                    r = n.style,
                    s = n._gsap;
                for (t = 0; t < i.length; t += 3) i[t + 1] ? (n[i[t]] = i[t + 2]) : i[t + 2] ? (r[i[t]] = i[t + 2]) : r.removeProperty("--" === i[t].substr(0, 2) ? i[t] : i[t].replace(Ui, "-$1").toLowerCase());
                if (this.tfm) {
                    for (e in this.tfm) s[e] = this.tfm[e];
                    s.svg && (s.renderTransform(), n.setAttribute("data-svg-origin", this.svgo || "")), ((t = Bi()) && t.isStart) || r[un] || (hn(r), (s.uncache = 1));
                }
            },
            gn = function (t, e) {
                var i = { target: t, props: [], revert: fn, save: pn };
                return (
                    t._gsap || Di.core.getCache(t),
                    e &&
                        e.split(",").forEach(function (t) {
                            return i.save(t);
                        }),
                    i
                );
            },
            vn = function (t, e) {
                var i = Ri.createElementNS ? Ri.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : Ri.createElement(t);
                return i.style ? i : Ri.createElement(t);
            },
            mn = function t(e, i, n) {
                var r = getComputedStyle(e);
                return r[i] || r.getPropertyValue(i.replace(Ui, "-$1").toLowerCase()) || r.getPropertyValue(i) || (!n && t(e, yn(i) || i, 1)) || "";
            },
            _n = "O,Moz,ms,Ms,Webkit".split(","),
            yn = function (t, e, i) {
                var n = (e || Hi).style,
                    r = 5;
                if (t in n && !i) return t;
                for (t = t.charAt(0).toUpperCase() + t.substr(1); r-- && !(_n[r] + t in n); );
                return r < 0 ? null : (3 === r ? "ms" : r >= 0 ? _n[r] : "") + t;
            },
            wn = function () {
                "undefined" != typeof window &&
                    window.document &&
                    ((zi = window),
                    (Ri = zi.document),
                    (Ii = Ri.documentElement),
                    (Hi = vn("div") || { style: {} }),
                    vn("div"),
                    (un = yn(un)),
                    (dn = un + "Origin"),
                    (Hi.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0"),
                    (ji = !!yn("perspective")),
                    (Bi = Di.core.reverting),
                    (Li = 1));
            },
            Tn = function t(e) {
                var i,
                    n = vn("svg", (this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"),
                    r = this.parentNode,
                    s = this.nextSibling,
                    o = this.style.cssText;
                if ((Ii.appendChild(n), n.appendChild(this), (this.style.display = "block"), e))
                    try {
                        (i = this.getBBox()), (this._gsapBBox = this.getBBox), (this.getBBox = t);
                    } catch (t) {}
                else this._gsapBBox && (i = this._gsapBBox());
                return r && (s ? r.insertBefore(this, s) : r.appendChild(this)), Ii.removeChild(n), (this.style.cssText = o), i;
            },
            bn = function (t, e) {
                for (var i = e.length; i--; ) if (t.hasAttribute(e[i])) return t.getAttribute(e[i]);
            },
            kn = function (t) {
                var e;
                try {
                    e = t.getBBox();
                } catch (i) {
                    e = Tn.call(t, !0);
                }
                return (e && (e.width || e.height)) || t.getBBox === Tn || (e = Tn.call(t, !0)), !e || e.width || e.x || e.y ? e : { x: +bn(t, ["x", "cx", "x1"]) || 0, y: +bn(t, ["y", "cy", "y1"]) || 0, width: 0, height: 0 };
            },
            xn = function (t) {
                return !(!t.getCTM || (t.parentNode && !t.ownerSVGElement) || !kn(t));
            },
            Sn = function (t, e) {
                if (e) {
                    var i = t.style;
                    e in Ni && e !== dn && (e = un), i.removeProperty ? (("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6)) || (e = "-" + e), i.removeProperty(e.replace(Ui, "-$1").toLowerCase())) : i.removeAttribute(e);
                }
            },
            Cn = function (t, e, i, n, r, s) {
                var o = new wi(t._pt, e, i, 0, 1, s ? nn : en);
                return (t._pt = o), (o.b = n), (o.e = r), t._props.push(i), o;
            },
            $n = { deg: 1, rad: 1, turn: 1 },
            On = { grid: 1, flex: 1 },
            Mn = function t(e, i, n, r) {
                var s,
                    o,
                    a,
                    l,
                    c = parseFloat(n) || 0,
                    u = (n + "").trim().substr((c + "").length) || "px",
                    d = Hi.style,
                    p = Vi.test(i),
                    h = "svg" === e.tagName.toLowerCase(),
                    f = (h ? "client" : "offset") + (p ? "Width" : "Height"),
                    g = "px" === r,
                    v = "%" === r;
                return r === u || !c || $n[r] || $n[u]
                    ? c
                    : ("px" !== u && !g && (c = t(e, i, n, "px")),
                      (l = e.getCTM && xn(e)),
                      (!v && "%" !== u) || (!Ni[i] && !~i.indexOf("adius"))
                          ? ((d[p ? "width" : "height"] = 100 + (g ? u : r)),
                            (o = ~i.indexOf("adius") || ("em" === r && e.appendChild && !h) ? e : e.parentNode),
                            l && (o = (e.ownerSVGElement || {}).parentNode),
                            (o && o !== Ri && o.appendChild) || (o = Ri.body),
                            (a = o._gsap) && v && a.width && p && a.time === ze.time && !a.uncache
                                ? St((c / a.width) * 100)
                                : ((v || "%" === u) && !On[mn(o, "display")] && (d.position = mn(e, "position")),
                                  o === e && (d.position = "static"),
                                  o.appendChild(Hi),
                                  (s = Hi[f]),
                                  o.removeChild(Hi),
                                  (d.position = "absolute"),
                                  p && v && (((a = bt(o)).time = ze.time), (a.width = o[f])),
                                  St(g ? (s * c) / 100 : s && c ? (100 / s) * c : 0)))
                          : ((s = l ? e.getBBox()[p ? "width" : "height"] : e[f]), St(v ? (c / s) * 100 : (c / 100) * s)));
            },
            An = function (t, e, i, n) {
                var r;
                return (
                    Li || wn(),
                    e in Qi && "transform" !== e && ~(e = Qi[e]).indexOf(",") && (e = e.split(",")[0]),
                    Ni[e] && "transform" !== e
                        ? ((r = jn(t, n)), (r = "transformOrigin" !== e ? r[e] : r.svg ? r.origin : Yn(mn(t, dn)) + " " + r.zOrigin + "px"))
                        : (!(r = t.style[e]) || "auto" === r || n || ~(r + "").indexOf("calc(")) && (r = (zn[e] && zn[e](t, e, i)) || mn(t, e) || kt(t, e) || ("opacity" === e ? 1 : 0)),
                    i && !~(r + "").trim().indexOf(" ") ? Mn(t, e, r, i) + i : r
                );
            },
            Pn = function (t, e, i, n) {
                if (!i || "none" === i) {
                    var r = yn(e, t, 1),
                        s = r && mn(t, r, 1);
                    s && s !== i ? ((e = r), (i = s)) : "borderColor" === e && (i = mn(t, "borderTopColor"));
                }
                var o,
                    a,
                    l,
                    c,
                    u,
                    d,
                    p,
                    h,
                    f,
                    g,
                    v,
                    m = new wi(this._pt, t.style, e, 0, 1, fi),
                    _ = 0,
                    y = 0;
                if (((m.b = i), (m.e = n), (i += ""), "auto" === (n += "") && ((t.style[e] = n), (n = mn(t, e) || n), (t.style[e] = i)), De((o = [i, n])), (n = o[1]), (l = (i = o[0]).match(K) || []), (n.match(K) || []).length)) {
                    for (; (a = K.exec(n)); )
                        (p = a[0]),
                            (f = n.substring(_, a.index)),
                            u ? (u = (u + 1) % 5) : ("rgba(" !== f.substr(-5) && "hsla(" !== f.substr(-5)) || (u = 1),
                            p !== (d = l[y++] || "") &&
                                ((c = parseFloat(d) || 0),
                                (v = d.substr((c + "").length)),
                                "=" === p.charAt(1) && (p = $t(c, p) + v),
                                (h = parseFloat(p)),
                                (g = p.substr((h + "").length)),
                                (_ = K.lastIndex - g.length),
                                g || ((g = g || P.units[e] || v), _ === n.length && ((n += g), (m.e += g))),
                                v !== g && (c = Mn(t, e, d, g) || 0),
                                (m._pt = { _next: m._pt, p: f || 1 === y ? f : ",", s: c, c: h - c, m: (u && u < 4) || "zIndex" === e ? Math.round : 0 }));
                    m.c = _ < n.length ? n.substring(_, n.length) : "";
                } else m.r = "display" === e && "none" === n ? nn : en;
                return tt.test(n) && (m.e = 0), (this._pt = m), m;
            },
            En = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
            Dn = function (t, e) {
                if (e.tween && e.tween._time === e.tween._dur) {
                    var i,
                        n,
                        r,
                        s = e.t,
                        o = s.style,
                        a = e.u,
                        l = s._gsap;
                    if ("all" === a || !0 === a) (o.cssText = ""), (n = 1);
                    else for (r = (a = a.split(",")).length; --r > -1; ) (i = a[r]), Ni[i] && ((n = 1), (i = "transformOrigin" === i ? dn : un)), Sn(s, i);
                    n && (Sn(s, un), l && (l.svg && s.removeAttribute("transform"), jn(s, 1), (l.uncache = 1), hn(o)));
                }
            },
            zn = {
                clearProps: function (t, e, i, n, r) {
                    if ("isFromStart" !== r.data) {
                        var s = (t._pt = new wi(t._pt, e, i, 0, 0, Dn));
                        return (s.u = n), (s.pr = -10), (s.tween = r), t._props.push(i), 1;
                    }
                },
            },
            Rn = [1, 0, 0, 1, 0, 0],
            In = {},
            Ln = function (t) {
                return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
            },
            Hn = function (t) {
                var e = mn(t, un);
                return Ln(e) ? Rn : e.substr(7).match(Z).map(St);
            },
            Fn = function (t, e) {
                var i,
                    n,
                    r,
                    s,
                    o = t._gsap || bt(t),
                    a = t.style,
                    l = Hn(t);
                return o.svg && t.getAttribute("transform")
                    ? "1,0,0,1,0,0" === (l = [(r = t.transform.baseVal.consolidate().matrix).a, r.b, r.c, r.d, r.e, r.f]).join(",")
                        ? Rn
                        : l
                    : (l !== Rn ||
                          t.offsetParent ||
                          t === Ii ||
                          o.svg ||
                          ((r = a.display),
                          (a.display = "block"),
                          ((i = t.parentNode) && t.offsetParent) || ((s = 1), (n = t.nextElementSibling), Ii.appendChild(t)),
                          (l = Hn(t)),
                          r ? (a.display = r) : Sn(t, "display"),
                          s && (n ? i.insertBefore(t, n) : i ? i.appendChild(t) : Ii.removeChild(t))),
                      e && l.length > 6 ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l);
            },
            Bn = function (t, e, i, n, r, s) {
                var o,
                    a,
                    l,
                    c = t._gsap,
                    u = r || Fn(t, !0),
                    d = c.xOrigin || 0,
                    p = c.yOrigin || 0,
                    h = c.xOffset || 0,
                    f = c.yOffset || 0,
                    g = u[0],
                    v = u[1],
                    m = u[2],
                    _ = u[3],
                    y = u[4],
                    w = u[5],
                    T = e.split(" "),
                    b = parseFloat(T[0]) || 0,
                    k = parseFloat(T[1]) || 0;
                i
                    ? u !== Rn && (a = g * _ - v * m) && ((l = b * (-v / a) + k * (g / a) - (g * w - v * y) / a), (b = b * (_ / a) + k * (-m / a) + (m * w - _ * y) / a), (k = l))
                    : ((b = (o = kn(t)).x + (~T[0].indexOf("%") ? (b / 100) * o.width : b)), (k = o.y + (~(T[1] || T[0]).indexOf("%") ? (k / 100) * o.height : k))),
                    n || (!1 !== n && c.smooth) ? ((y = b - d), (w = k - p), (c.xOffset = h + (y * g + w * m) - y), (c.yOffset = f + (y * v + w * _) - w)) : (c.xOffset = c.yOffset = 0),
                    (c.xOrigin = b),
                    (c.yOrigin = k),
                    (c.smooth = !!n),
                    (c.origin = e),
                    (c.originIsAbsolute = !!i),
                    (t.style[dn] = "0px 0px"),
                    s && (Cn(s, c, "xOrigin", d, b), Cn(s, c, "yOrigin", p, k), Cn(s, c, "xOffset", h, c.xOffset), Cn(s, c, "yOffset", f, c.yOffset)),
                    t.setAttribute("data-svg-origin", b + " " + k);
            },
            jn = function (t, e) {
                var i = t._gsap || new Ue(t);
                if ("x" in i && !e && !i.uncache) return i;
                var n,
                    r,
                    s,
                    o,
                    a,
                    l,
                    c,
                    u,
                    d,
                    p,
                    h,
                    f,
                    g,
                    v,
                    m,
                    _,
                    y,
                    w,
                    T,
                    b,
                    k,
                    x,
                    S,
                    C,
                    $,
                    O,
                    M,
                    A,
                    E,
                    D,
                    z,
                    R,
                    I = t.style,
                    L = i.scaleX < 0,
                    H = getComputedStyle(t),
                    F = mn(t, dn) || "0";
                return (
                    (n = r = s = l = c = u = d = p = h = 0),
                    (o = a = 1),
                    (i.svg = !(!t.getCTM || !xn(t))),
                    H.translate &&
                        (("none" === H.translate && "none" === H.scale && "none" === H.rotate) ||
                            (I[un] =
                                ("none" !== H.translate ? "translate3d(" + (H.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") +
                                ("none" !== H.rotate ? "rotate(" + H.rotate + ") " : "") +
                                ("none" !== H.scale ? "scale(" + H.scale.split(" ").join(",") + ") " : "") +
                                ("none" !== H[un] ? H[un] : "")),
                        (I.scale = I.rotate = I.translate = "none")),
                    (v = Fn(t, i.svg)),
                    i.svg &&
                        (i.uncache ? (($ = t.getBBox()), (F = i.xOrigin - $.x + "px " + (i.yOrigin - $.y) + "px"), (C = "")) : (C = !e && t.getAttribute("data-svg-origin")), Bn(t, C || F, !!C || i.originIsAbsolute, !1 !== i.smooth, v)),
                    (f = i.xOrigin || 0),
                    (g = i.yOrigin || 0),
                    v !== Rn &&
                        ((w = v[0]),
                        (T = v[1]),
                        (b = v[2]),
                        (k = v[3]),
                        (n = x = v[4]),
                        (r = S = v[5]),
                        6 === v.length
                            ? ((o = Math.sqrt(w * w + T * T)),
                              (a = Math.sqrt(k * k + b * b)),
                              (l = w || T ? qi(T, w) * Wi : 0),
                              (d = b || k ? qi(b, k) * Wi + l : 0) && (a *= Math.abs(Math.cos(d * Xi))),
                              i.svg && ((n -= f - (f * w + g * b)), (r -= g - (f * T + g * k))))
                            : ((R = v[6]),
                              (D = v[7]),
                              (M = v[8]),
                              (A = v[9]),
                              (E = v[10]),
                              (z = v[11]),
                              (n = v[12]),
                              (r = v[13]),
                              (s = v[14]),
                              (c = (m = qi(R, E)) * Wi),
                              m &&
                                  ((C = x * (_ = Math.cos(-m)) + M * (y = Math.sin(-m))),
                                  ($ = S * _ + A * y),
                                  (O = R * _ + E * y),
                                  (M = x * -y + M * _),
                                  (A = S * -y + A * _),
                                  (E = R * -y + E * _),
                                  (z = D * -y + z * _),
                                  (x = C),
                                  (S = $),
                                  (R = O)),
                              (u = (m = qi(-b, E)) * Wi),
                              m && ((_ = Math.cos(-m)), (z = k * (y = Math.sin(-m)) + z * _), (w = C = w * _ - M * y), (T = $ = T * _ - A * y), (b = O = b * _ - E * y)),
                              (l = (m = qi(T, w)) * Wi),
                              m && ((C = w * (_ = Math.cos(m)) + T * (y = Math.sin(m))), ($ = x * _ + S * y), (T = T * _ - w * y), (S = S * _ - x * y), (w = C), (x = $)),
                              c && Math.abs(c) + Math.abs(l) > 359.9 && ((c = l = 0), (u = 180 - u)),
                              (o = St(Math.sqrt(w * w + T * T + b * b))),
                              (a = St(Math.sqrt(S * S + R * R))),
                              (m = qi(x, S)),
                              (d = Math.abs(m) > 2e-4 ? m * Wi : 0),
                              (h = z ? 1 / (z < 0 ? -z : z) : 0)),
                        i.svg && ((C = t.getAttribute("transform")), (i.forceCSS = t.setAttribute("transform", "") || !Ln(mn(t, un))), C && t.setAttribute("transform", C))),
                    Math.abs(d) > 90 && Math.abs(d) < 270 && (L ? ((o *= -1), (d += l <= 0 ? 180 : -180), (l += l <= 0 ? 180 : -180)) : ((a *= -1), (d += d <= 0 ? 180 : -180))),
                    (e = e || i.uncache),
                    (i.x = n - ((i.xPercent = n && ((!e && i.xPercent) || (Math.round(t.offsetWidth / 2) === Math.round(-n) ? -50 : 0))) ? (t.offsetWidth * i.xPercent) / 100 : 0) + "px"),
                    (i.y = r - ((i.yPercent = r && ((!e && i.yPercent) || (Math.round(t.offsetHeight / 2) === Math.round(-r) ? -50 : 0))) ? (t.offsetHeight * i.yPercent) / 100 : 0) + "px"),
                    (i.z = s + "px"),
                    (i.scaleX = St(o)),
                    (i.scaleY = St(a)),
                    (i.rotation = St(l) + "deg"),
                    (i.rotationX = St(c) + "deg"),
                    (i.rotationY = St(u) + "deg"),
                    (i.skewX = d + "deg"),
                    (i.skewY = p + "deg"),
                    (i.transformPerspective = h + "px"),
                    (i.zOrigin = parseFloat(F.split(" ")[2]) || 0) && (I[dn] = Yn(F)),
                    (i.xOffset = i.yOffset = 0),
                    (i.force3D = P.force3D),
                    (i.renderTransform = i.svg ? qn : ji ? Xn : Wn),
                    (i.uncache = 0),
                    i
                );
            },
            Yn = function (t) {
                return (t = t.split(" "))[0] + " " + t[1];
            },
            Nn = function (t, e, i) {
                var n = ae(e);
                return St(parseFloat(e) + parseFloat(Mn(t, "x", i + "px", n))) + n;
            },
            Wn = function (t, e) {
                (e.z = "0px"), (e.rotationY = e.rotationX = "0deg"), (e.force3D = 0), Xn(t, e);
            },
            Xn = function (t, e) {
                var i = e || this,
                    n = i.xPercent,
                    r = i.yPercent,
                    s = i.x,
                    o = i.y,
                    a = i.z,
                    l = i.rotation,
                    c = i.rotationY,
                    u = i.rotationX,
                    d = i.skewX,
                    p = i.skewY,
                    h = i.scaleX,
                    f = i.scaleY,
                    g = i.transformPerspective,
                    v = i.force3D,
                    m = i.target,
                    _ = i.zOrigin,
                    y = "",
                    w = ("auto" === v && t && 1 !== t) || !0 === v;
                if (_ && ("0deg" !== u || "0deg" !== c)) {
                    var T,
                        b = parseFloat(c) * Xi,
                        k = Math.sin(b),
                        x = Math.cos(b);
                    (b = parseFloat(u) * Xi), (T = Math.cos(b)), (s = Nn(m, s, k * T * -_)), (o = Nn(m, o, -Math.sin(b) * -_)), (a = Nn(m, a, x * T * -_ + _));
                }
                "0px" !== g && (y += "perspective(" + g + ") "),
                    (n || r) && (y += "translate(" + n + "%, " + r + "%) "),
                    (w || "0px" !== s || "0px" !== o || "0px" !== a) && (y += "0px" !== a || w ? "translate3d(" + s + ", " + o + ", " + a + ") " : "translate(" + s + ", " + o + ") "),
                    "0deg" !== l && (y += "rotate(" + l + ") "),
                    "0deg" !== c && (y += "rotateY(" + c + ") "),
                    "0deg" !== u && (y += "rotateX(" + u + ") "),
                    ("0deg" === d && "0deg" === p) || (y += "skew(" + d + ", " + p + ") "),
                    (1 === h && 1 === f) || (y += "scale(" + h + ", " + f + ") "),
                    (m.style[un] = y || "translate(0, 0)");
            },
            qn = function (t, e) {
                var i,
                    n,
                    r,
                    s,
                    o,
                    a = e || this,
                    l = a.xPercent,
                    c = a.yPercent,
                    u = a.x,
                    d = a.y,
                    p = a.rotation,
                    h = a.skewX,
                    f = a.skewY,
                    g = a.scaleX,
                    v = a.scaleY,
                    m = a.target,
                    _ = a.xOrigin,
                    y = a.yOrigin,
                    w = a.xOffset,
                    T = a.yOffset,
                    b = a.forceCSS,
                    k = parseFloat(u),
                    x = parseFloat(d);
                (p = parseFloat(p)),
                    (h = parseFloat(h)),
                    (f = parseFloat(f)) && ((h += f = parseFloat(f)), (p += f)),
                    p || h
                        ? ((p *= Xi),
                          (h *= Xi),
                          (i = Math.cos(p) * g),
                          (n = Math.sin(p) * g),
                          (r = Math.sin(p - h) * -v),
                          (s = Math.cos(p - h) * v),
                          h && ((f *= Xi), (o = Math.tan(h - f)), (r *= o = Math.sqrt(1 + o * o)), (s *= o), f && ((o = Math.tan(f)), (i *= o = Math.sqrt(1 + o * o)), (n *= o))),
                          (i = St(i)),
                          (n = St(n)),
                          (r = St(r)),
                          (s = St(s)))
                        : ((i = g), (s = v), (n = r = 0)),
                    ((k && !~(u + "").indexOf("px")) || (x && !~(d + "").indexOf("px"))) && ((k = Mn(m, "x", u, "px")), (x = Mn(m, "y", d, "px"))),
                    (_ || y || w || T) && ((k = St(k + _ - (_ * i + y * r) + w)), (x = St(x + y - (_ * n + y * s) + T))),
                    (l || c) && ((o = m.getBBox()), (k = St(k + (l / 100) * o.width)), (x = St(x + (c / 100) * o.height))),
                    (o = "matrix(" + i + "," + n + "," + r + "," + s + "," + k + "," + x + ")"),
                    m.setAttribute("transform", o),
                    b && (m.style[un] = o);
            },
            Un = function (t, e, i, n, r) {
                var s,
                    o,
                    a = B(r),
                    l = parseFloat(r) * (a && ~r.indexOf("rad") ? Wi : 1) - n,
                    c = n + l + "deg";
                return (
                    a &&
                        ("short" === (s = r.split("_")[1]) && (l %= 360) !== l % 180 && (l += l < 0 ? 360 : -360),
                        "cw" === s && l < 0 ? (l = ((l + 36e9) % 360) - 360 * ~~(l / 360)) : "ccw" === s && l > 0 && (l = ((l - 36e9) % 360) - 360 * ~~(l / 360))),
                    (t._pt = o = new wi(t._pt, e, i, n, l, Ki)),
                    (o.e = c),
                    (o.u = "deg"),
                    t._props.push(i),
                    o
                );
            },
            Vn = function (t, e) {
                for (var i in e) t[i] = e[i];
                return t;
            },
            Gn = function (t, e, i) {
                var n,
                    r,
                    s,
                    o,
                    a,
                    l,
                    c,
                    u = Vn({}, i._gsap),
                    d = i.style;
                for (r in (u.svg
                    ? ((s = i.getAttribute("transform")), i.setAttribute("transform", ""), (d[un] = e), (n = jn(i, 1)), Sn(i, un), i.setAttribute("transform", s))
                    : ((s = getComputedStyle(i)[un]), (d[un] = e), (n = jn(i, 1)), (d[un] = s)),
                Ni))
                    (s = u[r]) !== (o = n[r]) &&
                        "perspective,force3D,transformOrigin,svgOrigin".indexOf(r) < 0 &&
                        ((a = ae(s) !== (c = ae(o)) ? Mn(i, r, s, c) : parseFloat(s)), (l = parseFloat(o)), (t._pt = new wi(t._pt, n, r, a, l - a, Zi)), (t._pt.u = c || 0), t._props.push(r));
                Vn(n, u);
            };
        xt("padding,margin,Width,Radius", function (t, e) {
            var i = "Top",
                n = "Right",
                r = "Bottom",
                s = "Left",
                o = (e < 3 ? [i, n, r, s] : [i + s, i + n, r + n, r + s]).map(function (i) {
                    return e < 2 ? t + i : "border" + i + t;
                });
            zn[e > 1 ? "border" + t : t] = function (t, e, i, n, r) {
                var s, a;
                if (arguments.length < 4)
                    return (
                        (s = o.map(function (e) {
                            return An(t, e, i);
                        })),
                        5 === (a = s.join(" ")).split(s[0]).length ? s[0] : a
                    );
                (s = (n + "").split(" ")),
                    (a = {}),
                    o.forEach(function (t, e) {
                        return (a[t] = s[e] = s[e] || s[((e - 1) / 2) | 0]);
                    }),
                    t.init(e, a, r);
            };
        });
        var Qn,
            Zn,
            Kn = {
                name: "css",
                register: wn,
                targetTest: function (t) {
                    return t.style && t.nodeType;
                },
                init: function (t, e, i, n, r) {
                    var s,
                        o,
                        a,
                        l,
                        c,
                        u,
                        d,
                        p,
                        h,
                        f,
                        g,
                        v,
                        m,
                        _,
                        y,
                        w,
                        T,
                        b,
                        k,
                        x,
                        S = this._props,
                        C = t.style,
                        $ = i.vars.startAt;
                    for (d in (Li || wn(), (this.styles = this.styles || gn(t)), (w = this.styles.props), (this.tween = i), e))
                        if ("autoRound" !== d && ((o = e[d]), !vt[d] || !ti(d, e, i, n, t, r)))
                            if (((c = typeof o), (u = zn[d]), "function" === c && (c = typeof (o = o.call(i, n, t, r))), "string" === c && ~o.indexOf("random(") && (o = ye(o)), u)) u(this, t, d, o, i) && (y = 1);
                            else if ("--" === d.substr(0, 2))
                                (s = (getComputedStyle(t).getPropertyValue(d) + "").trim()),
                                    (o += ""),
                                    (Pe.lastIndex = 0),
                                    Pe.test(s) || ((p = ae(s)), (h = ae(o))),
                                    h ? p !== h && (s = Mn(t, d, s, h) + h) : p && (o += p),
                                    this.add(C, "setProperty", s, o, n, r, 0, 0, d),
                                    S.push(d),
                                    w.push(d, 0, C[d]);
                            else if ("undefined" !== c) {
                                if (
                                    ($ && d in $
                                        ? ((s = "function" == typeof $[d] ? $[d].call(i, n, t, r) : $[d]),
                                          B(s) && ~s.indexOf("random(") && (s = ye(s)),
                                          ae(s + "") || (s += P.units[d] || ae(An(t, d)) || ""),
                                          "=" === (s + "").charAt(1) && (s = An(t, d)))
                                        : (s = An(t, d)),
                                    (l = parseFloat(s)),
                                    (f = "string" === c && "=" === o.charAt(1) && o.substr(0, 2)) && (o = o.substr(2)),
                                    (a = parseFloat(o)),
                                    d in Qi &&
                                        ("autoAlpha" === d &&
                                            (1 === l && "hidden" === An(t, "visibility") && a && (l = 0), w.push("visibility", 0, C.visibility), Cn(this, C, "visibility", l ? "inherit" : "hidden", a ? "inherit" : "hidden", !a)),
                                        "scale" !== d && "transform" !== d && ~(d = Qi[d]).indexOf(",") && (d = d.split(",")[0])),
                                    (g = d in Ni))
                                )
                                    if (
                                        (this.styles.save(d),
                                        v ||
                                            (((m = t._gsap).renderTransform && !e.parseTransform) || jn(t, e.parseTransform),
                                            (_ = !1 !== e.smoothOrigin && m.smooth),
                                            ((v = this._pt = new wi(this._pt, C, un, 0, 1, m.renderTransform, m, 0, -1)).dep = 1)),
                                        "scale" === d)
                                    )
                                        (this._pt = new wi(this._pt, m, "scaleY", m.scaleY, (f ? $t(m.scaleY, f + a) : a) - m.scaleY || 0, Zi)), (this._pt.u = 0), S.push("scaleY", d), (d += "X");
                                    else {
                                        if ("transformOrigin" === d) {
                                            w.push(dn, 0, C[dn]),
                                                (b = void 0),
                                                (k = void 0),
                                                (x = void 0),
                                                (b = (T = o).split(" ")),
                                                (k = b[0]),
                                                (x = b[1] || "50%"),
                                                ("top" !== k && "bottom" !== k && "left" !== x && "right" !== x) || ((T = k), (k = x), (x = T)),
                                                (b[0] = En[k] || k),
                                                (b[1] = En[x] || x),
                                                (o = b.join(" ")),
                                                m.svg ? Bn(t, o, 0, _, 0, this) : ((h = parseFloat(o.split(" ")[2]) || 0) !== m.zOrigin && Cn(this, m, "zOrigin", m.zOrigin, h), Cn(this, C, d, Yn(s), Yn(o)));
                                            continue;
                                        }
                                        if ("svgOrigin" === d) {
                                            Bn(t, o, 1, _, 0, this);
                                            continue;
                                        }
                                        if (d in In) {
                                            Un(this, m, d, l, f ? $t(l, f + o) : o);
                                            continue;
                                        }
                                        if ("smoothOrigin" === d) {
                                            Cn(this, m, "smooth", m.smooth, o);
                                            continue;
                                        }
                                        if ("force3D" === d) {
                                            m[d] = o;
                                            continue;
                                        }
                                        if ("transform" === d) {
                                            Gn(this, o, t);
                                            continue;
                                        }
                                    }
                                else d in C || (d = yn(d) || d);
                                if (g || ((a || 0 === a) && (l || 0 === l) && !Gi.test(o) && d in C))
                                    a || (a = 0),
                                        (p = (s + "").substr((l + "").length)) !== (h = ae(o) || (d in P.units ? P.units[d] : p)) && (l = Mn(t, d, s, h)),
                                        (this._pt = new wi(this._pt, g ? m : C, d, l, (f ? $t(l, f + a) : a) - l, g || ("px" !== h && "zIndex" !== d) || !1 === e.autoRound ? Zi : tn)),
                                        (this._pt.u = h || 0),
                                        p !== h && "%" !== h && ((this._pt.b = s), (this._pt.r = Ji));
                                else if (d in C) Pn.call(this, t, d, s, f ? f + o : o);
                                else if (d in t) this.add(t, d, s || t[d], f ? f + o : o, n, r);
                                else if ("parseTransform" !== d) {
                                    ot(d, o);
                                    continue;
                                }
                                g || (d in C ? w.push(d, 0, C[d]) : w.push(d, 1, s || t[d])), S.push(d);
                            }
                    y && yi(this);
                },
                render: function (t, e) {
                    if (e.tween._time || !Bi()) for (var i = e._pt; i; ) i.r(t, i.d), (i = i._next);
                    else e.styles.revert();
                },
                get: An,
                aliases: Qi,
                getSetter: function (t, e, i) {
                    var n = Qi[e];
                    return (
                        n && n.indexOf(",") < 0 && (e = n),
                        e in Ni && e !== dn && (t._gsap.x || An(t, "x")) ? (i && Fi === i ? ("scale" === e ? an : on) : (Fi = i || {}) && ("scale" === e ? ln : cn)) : t.style && !N(t.style[e]) ? rn : ~e.indexOf("-") ? sn : di(t, e)
                    );
                },
                core: { _removeProperty: Sn, _getMatrix: Fn },
            };
        (Di.utils.checkPrefix = yn),
            (Di.core.getStyleSaver = gn),
            (Zn = xt("x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + (Qn = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function (t) {
                Ni[t] = 1;
            })),
            xt(Qn, function (t) {
                (P.units[t] = "deg"), (In[t] = 1);
            }),
            (Qi[Zn[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + Qn),
            xt("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function (t) {
                var e = t.split(":");
                Qi[e[1]] = Zn[e[0]];
            }),
            xt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (t) {
                P.units[t] = "px";
            }),
            Di.registerPlugin(Kn);
        var Jn = Di.registerPlugin(Kn) || Di;
        Jn.core.Tween;
        function tr(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
            }
        }
        /*!
         * Observer 3.12.2
         * https://greensock.com
         *
         * @license Copyright 2008-2023, GreenSock. All rights reserved.
         * Subject to the terms at https://greensock.com/standard-license or for
         * Club GreenSock members, the agreement issued with that membership.
         * @author: Jack Doyle, jack@greensock.com
         */
        var er,
            ir,
            nr,
            rr,
            sr,
            or,
            ar,
            lr,
            cr,
            ur,
            dr,
            pr,
            hr,
            fr = function () {
                return er || ("undefined" != typeof window && (er = window.gsap) && er.registerPlugin && er);
            },
            gr = 1,
            vr = [],
            mr = [],
            _r = [],
            yr = Date.now,
            wr = function (t, e) {
                return e;
            },
            Tr = function (t, e) {
                return ~_r.indexOf(t) && _r[_r.indexOf(t) + 1][e];
            },
            br = function (t) {
                return !!~ur.indexOf(t);
            },
            kr = function (t, e, i, n, r) {
                return t.addEventListener(e, i, { passive: !n, capture: !!r });
            },
            xr = function (t, e, i, n) {
                return t.removeEventListener(e, i, !!n);
            },
            Sr = function () {
                return (dr && dr.isPressed) || mr.cache++;
            },
            Cr = function (t, e) {
                var i = function i(n) {
                    if (n || 0 === n) {
                        gr && (nr.history.scrollRestoration = "manual");
                        var r = dr && dr.isPressed;
                        (n = i.v = Math.round(n) || (dr && dr.iOS ? 1 : 0)), t(n), (i.cacheID = mr.cache), r && wr("ss", n);
                    } else (e || mr.cache !== i.cacheID || wr("ref")) && ((i.cacheID = mr.cache), (i.v = t()));
                    return i.v + i.offset;
                };
                return (i.offset = 0), t && i;
            },
            $r = {
                s: "scrollLeft",
                p: "left",
                p2: "Left",
                os: "right",
                os2: "Right",
                d: "width",
                d2: "Width",
                a: "x",
                sc: Cr(function (t) {
                    return arguments.length ? nr.scrollTo(t, Or.sc()) : nr.pageXOffset || rr.scrollLeft || sr.scrollLeft || or.scrollLeft || 0;
                }),
            },
            Or = {
                s: "scrollTop",
                p: "top",
                p2: "Top",
                os: "bottom",
                os2: "Bottom",
                d: "height",
                d2: "Height",
                a: "y",
                op: $r,
                sc: Cr(function (t) {
                    return arguments.length ? nr.scrollTo($r.sc(), t) : nr.pageYOffset || rr.scrollTop || sr.scrollTop || or.scrollTop || 0;
                }),
            },
            Mr = function (t, e) {
                return ((e && e._ctx && e._ctx.selector) || er.utils.toArray)(t)[0] || ("string" == typeof t && !1 !== er.config().nullTargetWarn ? console.warn("Element not found:", t) : null);
            },
            Ar = function (t, e) {
                var i = e.s,
                    n = e.sc;
                br(t) && (t = rr.scrollingElement || sr);
                var r = mr.indexOf(t),
                    s = n === Or.sc ? 1 : 2;
                !~r && (r = mr.push(t) - 1), mr[r + s] || kr(t, "scroll", Sr);
                var o = mr[r + s],
                    a =
                        o ||
                        (mr[r + s] =
                            Cr(Tr(t, i), !0) ||
                            (br(t)
                                ? n
                                : Cr(function (e) {
                                      return arguments.length ? (t[i] = e) : t[i];
                                  })));
                return (a.target = t), o || (a.smooth = "smooth" === er.getProperty(t, "scrollBehavior")), a;
            },
            Pr = function (t, e, i) {
                var n = t,
                    r = t,
                    s = yr(),
                    o = s,
                    a = e || 50,
                    l = Math.max(500, 3 * a),
                    c = function (t, e) {
                        var l = yr();
                        e || l - s > a ? ((r = n), (n = t), (o = s), (s = l)) : i ? (n += t) : (n = r + ((t - r) / (l - o)) * (s - o));
                    };
                return {
                    update: c,
                    reset: function () {
                        (r = n = i ? 0 : n), (o = s = 0);
                    },
                    getVelocity: function (t) {
                        var e = o,
                            a = r,
                            u = yr();
                        return (t || 0 === t) && t !== n && c(t), s === o || u - o > l ? 0 : ((n + (i ? a : -a)) / ((i ? u : s) - e)) * 1e3;
                    },
                };
            },
            Er = function (t, e) {
                return e && !t._gsapAllow && t.preventDefault(), t.changedTouches ? t.changedTouches[0] : t;
            },
            Dr = function (t) {
                var e = Math.max.apply(Math, t),
                    i = Math.min.apply(Math, t);
                return Math.abs(e) >= Math.abs(i) ? e : i;
            },
            zr = function () {
                var t, e, i, n;
                (cr = er.core.globals().ScrollTrigger) &&
                    cr.core &&
                    ((t = cr.core),
                    (e = t.bridge || {}),
                    (i = t._scrollers),
                    (n = t._proxies),
                    i.push.apply(i, mr),
                    n.push.apply(n, _r),
                    (mr = i),
                    (_r = n),
                    (wr = function (t, i) {
                        return e[t](i);
                    }));
            },
            Rr = function (t) {
                return (
                    (er = t || fr()) &&
                        "undefined" != typeof document &&
                        document.body &&
                        ((nr = window),
                        (rr = document),
                        (sr = rr.documentElement),
                        (or = rr.body),
                        (ur = [nr, rr, sr, or]),
                        er.utils.clamp,
                        (hr = er.core.context || function () {}),
                        (lr = "onpointerenter" in or ? "pointer" : "mouse"),
                        (ar = Ir.isTouch = nr.matchMedia && nr.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in nr || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0),
                        (pr = Ir.eventTypes = ("ontouchstart" in sr ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in sr ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(
                            ","
                        )),
                        setTimeout(function () {
                            return (gr = 0);
                        }, 500),
                        zr(),
                        (ir = 1)),
                    ir
                );
            };
        ($r.op = Or), (mr.cache = 0);
        var Ir = (function () {
            function t(t) {
                this.init(t);
            }
            var e, i, n;
            return (
                (t.prototype.init = function (t) {
                    ir || Rr(er) || console.warn("Please gsap.registerPlugin(Observer)"), cr || zr();
                    var e = t.tolerance,
                        i = t.dragMinimum,
                        n = t.type,
                        r = t.target,
                        s = t.lineHeight,
                        o = t.debounce,
                        a = t.preventDefault,
                        l = t.onStop,
                        c = t.onStopDelay,
                        u = t.ignore,
                        d = t.wheelSpeed,
                        p = t.event,
                        h = t.onDragStart,
                        f = t.onDragEnd,
                        g = t.onDrag,
                        v = t.onPress,
                        m = t.onRelease,
                        _ = t.onRight,
                        y = t.onLeft,
                        w = t.onUp,
                        T = t.onDown,
                        b = t.onChangeX,
                        k = t.onChangeY,
                        x = t.onChange,
                        S = t.onToggleX,
                        C = t.onToggleY,
                        $ = t.onHover,
                        O = t.onHoverEnd,
                        M = t.onMove,
                        A = t.ignoreCheck,
                        P = t.isNormalizer,
                        E = t.onGestureStart,
                        D = t.onGestureEnd,
                        z = t.onWheel,
                        R = t.onEnable,
                        I = t.onDisable,
                        L = t.onClick,
                        H = t.scrollSpeed,
                        F = t.capture,
                        B = t.allowClicks,
                        j = t.lockAxis,
                        Y = t.onLockAxis;
                    (this.target = r = Mr(r) || sr),
                        (this.vars = t),
                        u && (u = er.utils.toArray(u)),
                        (e = e || 1e-9),
                        (i = i || 0),
                        (d = d || 1),
                        (H = H || 1),
                        (n = n || "wheel,touch,pointer"),
                        (o = !1 !== o),
                        s || (s = parseFloat(nr.getComputedStyle(or).lineHeight) || 22);
                    var N,
                        W,
                        X,
                        q,
                        U,
                        V,
                        G,
                        Q = this,
                        Z = 0,
                        K = 0,
                        J = Ar(r, $r),
                        tt = Ar(r, Or),
                        et = J(),
                        it = tt(),
                        nt = ~n.indexOf("touch") && !~n.indexOf("pointer") && "pointerdown" === pr[0],
                        rt = br(r),
                        st = r.ownerDocument || rr,
                        ot = [0, 0, 0],
                        at = [0, 0, 0],
                        lt = 0,
                        ct = function () {
                            return (lt = yr());
                        },
                        ut = function (t, e) {
                            return ((Q.event = t) && u && ~u.indexOf(t.target)) || (e && nt && "touch" !== t.pointerType) || (A && A(t, e));
                        },
                        dt = function () {
                            var t = (Q.deltaX = Dr(ot)),
                                i = (Q.deltaY = Dr(at)),
                                n = Math.abs(t) >= e,
                                r = Math.abs(i) >= e;
                            x && (n || r) && x(Q, t, i, ot, at),
                                n && (_ && Q.deltaX > 0 && _(Q), y && Q.deltaX < 0 && y(Q), b && b(Q), S && Q.deltaX < 0 != Z < 0 && S(Q), (Z = Q.deltaX), (ot[0] = ot[1] = ot[2] = 0)),
                                r && (T && Q.deltaY > 0 && T(Q), w && Q.deltaY < 0 && w(Q), k && k(Q), C && Q.deltaY < 0 != K < 0 && C(Q), (K = Q.deltaY), (at[0] = at[1] = at[2] = 0)),
                                (q || X) && (M && M(Q), X && (g(Q), (X = !1)), (q = !1)),
                                V && !(V = !1) && Y && Y(Q),
                                U && (z(Q), (U = !1)),
                                (N = 0);
                        },
                        pt = function (t, e, i) {
                            (ot[i] += t), (at[i] += e), Q._vx.update(t), Q._vy.update(e), o ? N || (N = requestAnimationFrame(dt)) : dt();
                        },
                        ht = function (t, e) {
                            j && !G && ((Q.axis = G = Math.abs(t) > Math.abs(e) ? "x" : "y"), (V = !0)),
                                "y" !== G && ((ot[2] += t), Q._vx.update(t, !0)),
                                "x" !== G && ((at[2] += e), Q._vy.update(e, !0)),
                                o ? N || (N = requestAnimationFrame(dt)) : dt();
                        },
                        ft = function (t) {
                            if (!ut(t, 1)) {
                                var e = (t = Er(t, a)).clientX,
                                    n = t.clientY,
                                    r = e - Q.x,
                                    s = n - Q.y,
                                    o = Q.isDragging;
                                (Q.x = e), (Q.y = n), (o || Math.abs(Q.startX - e) >= i || Math.abs(Q.startY - n) >= i) && (g && (X = !0), o || (Q.isDragging = !0), ht(r, s), o || (h && h(Q)));
                            }
                        },
                        gt = (Q.onPress = function (t) {
                            ut(t, 1) ||
                                (t && t.button) ||
                                ((Q.axis = G = null),
                                W.pause(),
                                (Q.isPressed = !0),
                                (t = Er(t)),
                                (Z = K = 0),
                                (Q.startX = Q.x = t.clientX),
                                (Q.startY = Q.y = t.clientY),
                                Q._vx.reset(),
                                Q._vy.reset(),
                                kr(P ? r : st, pr[1], ft, a, !0),
                                (Q.deltaX = Q.deltaY = 0),
                                v && v(Q));
                        }),
                        vt = (Q.onRelease = function (t) {
                            if (!ut(t, 1)) {
                                xr(P ? r : st, pr[1], ft, !0);
                                var e = !isNaN(Q.y - Q.startY),
                                    i = Q.isDragging && (Math.abs(Q.x - Q.startX) > 3 || Math.abs(Q.y - Q.startY) > 3),
                                    n = Er(t);
                                !i &&
                                    e &&
                                    (Q._vx.reset(),
                                    Q._vy.reset(),
                                    a &&
                                        B &&
                                        er.delayedCall(0.08, function () {
                                            if (yr() - lt > 300 && !t.defaultPrevented)
                                                if (t.target.click) t.target.click();
                                                else if (st.createEvent) {
                                                    var e = st.createEvent("MouseEvents");
                                                    e.initMouseEvent("click", !0, !0, nr, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null), t.target.dispatchEvent(e);
                                                }
                                        })),
                                    (Q.isDragging = Q.isGesturing = Q.isPressed = !1),
                                    l && !P && W.restart(!0),
                                    f && i && f(Q),
                                    m && m(Q, i);
                            }
                        }),
                        mt = function (t) {
                            return t.touches && t.touches.length > 1 && (Q.isGesturing = !0) && E(t, Q.isDragging);
                        },
                        _t = function () {
                            return (Q.isGesturing = !1) || D(Q);
                        },
                        yt = function (t) {
                            if (!ut(t)) {
                                var e = J(),
                                    i = tt();
                                pt((e - et) * H, (i - it) * H, 1), (et = e), (it = i), l && W.restart(!0);
                            }
                        },
                        wt = function (t) {
                            if (!ut(t)) {
                                (t = Er(t, a)), z && (U = !0);
                                var e = (1 === t.deltaMode ? s : 2 === t.deltaMode ? nr.innerHeight : 1) * d;
                                pt(t.deltaX * e, t.deltaY * e, 0), l && !P && W.restart(!0);
                            }
                        },
                        Tt = function (t) {
                            if (!ut(t)) {
                                var e = t.clientX,
                                    i = t.clientY,
                                    n = e - Q.x,
                                    r = i - Q.y;
                                (Q.x = e), (Q.y = i), (q = !0), (n || r) && ht(n, r);
                            }
                        },
                        bt = function (t) {
                            (Q.event = t), $(Q);
                        },
                        kt = function (t) {
                            (Q.event = t), O(Q);
                        },
                        xt = function (t) {
                            return ut(t) || (Er(t, a) && L(Q));
                        };
                    (W = Q._dc = er
                        .delayedCall(c || 0.25, function () {
                            Q._vx.reset(), Q._vy.reset(), W.pause(), l && l(Q);
                        })
                        .pause()),
                        (Q.deltaX = Q.deltaY = 0),
                        (Q._vx = Pr(0, 50, !0)),
                        (Q._vy = Pr(0, 50, !0)),
                        (Q.scrollX = J),
                        (Q.scrollY = tt),
                        (Q.isDragging = Q.isGesturing = Q.isPressed = !1),
                        hr(this),
                        (Q.enable = function (t) {
                            return (
                                Q.isEnabled ||
                                    (kr(rt ? st : r, "scroll", Sr),
                                    n.indexOf("scroll") >= 0 && kr(rt ? st : r, "scroll", yt, a, F),
                                    n.indexOf("wheel") >= 0 && kr(r, "wheel", wt, a, F),
                                    ((n.indexOf("touch") >= 0 && ar) || n.indexOf("pointer") >= 0) &&
                                        (kr(r, pr[0], gt, a, F),
                                        kr(st, pr[2], vt),
                                        kr(st, pr[3], vt),
                                        B && kr(r, "click", ct, !1, !0),
                                        L && kr(r, "click", xt),
                                        E && kr(st, "gesturestart", mt),
                                        D && kr(st, "gestureend", _t),
                                        $ && kr(r, lr + "enter", bt),
                                        O && kr(r, lr + "leave", kt),
                                        M && kr(r, lr + "move", Tt)),
                                    (Q.isEnabled = !0),
                                    t && t.type && gt(t),
                                    R && R(Q)),
                                Q
                            );
                        }),
                        (Q.disable = function () {
                            Q.isEnabled &&
                                (vr.filter(function (t) {
                                    return t !== Q && br(t.target);
                                }).length || xr(rt ? st : r, "scroll", Sr),
                                Q.isPressed && (Q._vx.reset(), Q._vy.reset(), xr(P ? r : st, pr[1], ft, !0)),
                                xr(rt ? st : r, "scroll", yt, F),
                                xr(r, "wheel", wt, F),
                                xr(r, pr[0], gt, F),
                                xr(st, pr[2], vt),
                                xr(st, pr[3], vt),
                                xr(r, "click", ct, !0),
                                xr(r, "click", xt),
                                xr(st, "gesturestart", mt),
                                xr(st, "gestureend", _t),
                                xr(r, lr + "enter", bt),
                                xr(r, lr + "leave", kt),
                                xr(r, lr + "move", Tt),
                                (Q.isEnabled = Q.isPressed = Q.isDragging = !1),
                                I && I(Q));
                        }),
                        (Q.kill = Q.revert = function () {
                            Q.disable();
                            var t = vr.indexOf(Q);
                            t >= 0 && vr.splice(t, 1), dr === Q && (dr = 0);
                        }),
                        vr.push(Q),
                        P && br(r) && (dr = Q),
                        Q.enable(p);
                }),
                (e = t),
                (i = [
                    {
                        key: "velocityX",
                        get: function () {
                            return this._vx.getVelocity();
                        },
                    },
                    {
                        key: "velocityY",
                        get: function () {
                            return this._vy.getVelocity();
                        },
                    },
                ]) && tr(e.prototype, i),
                n && tr(e, n),
                t
            );
        })();
        (Ir.version = "3.12.2"),
            (Ir.create = function (t) {
                return new Ir(t);
            }),
            (Ir.register = Rr),
            (Ir.getAll = function () {
                return vr.slice();
            }),
            (Ir.getById = function (t) {
                return vr.filter(function (e) {
                    return e.vars.id === t;
                })[0];
            }),
            fr() && er.registerPlugin(Ir);
        /*!
         * ScrollTrigger 3.12.2
         * https://greensock.com
         *
         * @license Copyright 2008-2023, GreenSock. All rights reserved.
         * Subject to the terms at https://greensock.com/standard-license or for
         * Club GreenSock members, the agreement issued with that membership.
         * @author: Jack Doyle, jack@greensock.com
         */
        var Lr,
            Hr,
            Fr,
            Br,
            jr,
            Yr,
            Nr,
            Wr,
            Xr,
            qr,
            Ur,
            Vr,
            Gr,
            Qr,
            Zr,
            Kr,
            Jr,
            ts,
            es,
            is,
            ns,
            rs,
            ss,
            os,
            as,
            ls,
            cs,
            us,
            ds,
            ps,
            hs,
            fs,
            gs,
            vs,
            ms,
            _s,
            ys = 1,
            ws = Date.now,
            Ts = ws(),
            bs = 0,
            ks = 0,
            xs = function (t, e, i) {
                var n = Ls(t) && ("clamp(" === t.substr(0, 6) || t.indexOf("max") > -1);
                return (i["_" + e + "Clamp"] = n), n ? t.substr(6, t.length - 7) : t;
            },
            Ss = function (t, e) {
                return !e || (Ls(t) && "clamp(" === t.substr(0, 6)) ? t : "clamp(" + t + ")";
            },
            Cs = function () {
                return (Qr = 1);
            },
            $s = function () {
                return (Qr = 0);
            },
            Os = function (t) {
                return t;
            },
            Ms = function (t) {
                return Math.round(1e5 * t) / 1e5 || 0;
            },
            As = function () {
                return "undefined" != typeof window;
            },
            Ps = function () {
                return Lr || (As() && (Lr = window.gsap) && Lr.registerPlugin && Lr);
            },
            Es = function (t) {
                return !!~Nr.indexOf(t);
            },
            Ds = function (t) {
                return ("Height" === t ? hs : Fr["inner" + t]) || jr["client" + t] || Yr["client" + t];
            },
            zs = function (t) {
                return (
                    Tr(t, "getBoundingClientRect") ||
                    (Es(t)
                        ? function () {
                              return (Ro.width = Fr.innerWidth), (Ro.height = hs), Ro;
                          }
                        : function () {
                              return Vs(t);
                          })
                );
            },
            Rs = function (t, e) {
                var i = e.s,
                    n = e.d2,
                    r = e.d,
                    s = e.a;
                return Math.max(0, (i = "scroll" + n) && (s = Tr(t, i)) ? s() - zs(t)()[r] : Es(t) ? (jr[i] || Yr[i]) - Ds(n) : t[i] - t["offset" + n]);
            },
            Is = function (t, e) {
                for (var i = 0; i < es.length; i += 3) (!e || ~e.indexOf(es[i + 1])) && t(es[i], es[i + 1], es[i + 2]);
            },
            Ls = function (t) {
                return "string" == typeof t;
            },
            Hs = function (t) {
                return "function" == typeof t;
            },
            Fs = function (t) {
                return "number" == typeof t;
            },
            Bs = function (t) {
                return "object" == typeof t;
            },
            js = function (t, e, i) {
                return t && t.progress(e ? 0 : 1) && i && t.pause();
            },
            Ys = function (t, e) {
                if (t.enabled) {
                    var i = e(t);
                    i && i.totalTime && (t.callbackAnimation = i);
                }
            },
            Ns = Math.abs,
            Ws = "padding",
            Xs = "px",
            qs = function (t) {
                return Fr.getComputedStyle(t);
            },
            Us = function (t, e) {
                for (var i in e) i in t || (t[i] = e[i]);
                return t;
            },
            Vs = function (t, e) {
                var i = e && "matrix(1, 0, 0, 1, 0, 0)" !== qs(t)[Zr] && Lr.to(t, { x: 0, y: 0, xPercent: 0, yPercent: 0, rotation: 0, rotationX: 0, rotationY: 0, scale: 1, skewX: 0, skewY: 0 }).progress(1),
                    n = t.getBoundingClientRect();
                return i && i.progress(0).kill(), n;
            },
            Gs = function (t, e) {
                var i = e.d2;
                return t["offset" + i] || t["client" + i] || 0;
            },
            Qs = function (t) {
                var e,
                    i = [],
                    n = t.labels,
                    r = t.duration();
                for (e in n) i.push(n[e] / r);
                return i;
            },
            Zs = function (t) {
                var e = Lr.utils.snap(t),
                    i =
                        Array.isArray(t) &&
                        t.slice(0).sort(function (t, e) {
                            return t - e;
                        });
                return i
                    ? function (t, n, r) {
                          var s;
                          if ((void 0 === r && (r = 0.001), !n)) return e(t);
                          if (n > 0) {
                              for (t -= r, s = 0; s < i.length; s++) if (i[s] >= t) return i[s];
                              return i[s - 1];
                          }
                          for (s = i.length, t += r; s--; ) if (i[s] <= t) return i[s];
                          return i[0];
                      }
                    : function (i, n, r) {
                          void 0 === r && (r = 0.001);
                          var s = e(i);
                          return !n || Math.abs(s - i) < r || s - i < 0 == n < 0 ? s : e(n < 0 ? i - t : i + t);
                      };
            },
            Ks = function (t, e, i, n) {
                return i.split(",").forEach(function (i) {
                    return t(e, i, n);
                });
            },
            Js = function (t, e, i, n, r) {
                return t.addEventListener(e, i, { passive: !n, capture: !!r });
            },
            to = function (t, e, i, n) {
                return t.removeEventListener(e, i, !!n);
            },
            eo = function (t, e, i) {
                (i = i && i.wheelHandler) && (t(e, "wheel", i), t(e, "touchmove", i));
            },
            io = { startColor: "green", endColor: "red", indent: 0, fontSize: "16px", fontWeight: "normal" },
            no = { toggleActions: "play", anticipatePin: 0 },
            ro = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
            so = function (t, e) {
                if (Ls(t)) {
                    var i = t.indexOf("="),
                        n = ~i ? +(t.charAt(i - 1) + 1) * parseFloat(t.substr(i + 1)) : 0;
                    ~i && (t.indexOf("%") > i && (n *= e / 100), (t = t.substr(0, i - 1))), (t = n + (t in ro ? ro[t] * e : ~t.indexOf("%") ? (parseFloat(t) * e) / 100 : parseFloat(t) || 0));
                }
                return t;
            },
            oo = function (t, e, i, n, r, s, o, a) {
                var l = r.startColor,
                    c = r.endColor,
                    u = r.fontSize,
                    d = r.indent,
                    p = r.fontWeight,
                    h = Br.createElement("div"),
                    f = Es(i) || "fixed" === Tr(i, "pinType"),
                    g = -1 !== t.indexOf("scroller"),
                    v = f ? Yr : i,
                    m = -1 !== t.indexOf("start"),
                    _ = m ? l : c,
                    y = "border-color:" + _ + ";font-size:" + u + ";color:" + _ + ";font-weight:" + p + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
                return (
                    (y += "position:" + ((g || a) && f ? "fixed;" : "absolute;")),
                    (g || a || !f) && (y += (n === Or ? "right" : "bottom") + ":" + (s + parseFloat(d)) + "px;"),
                    o && (y += "box-sizing:border-box;text-align:left;width:" + o.offsetWidth + "px;"),
                    (h._isStart = m),
                    h.setAttribute("class", "gsap-marker-" + t + (e ? " marker-" + e : "")),
                    (h.style.cssText = y),
                    (h.innerText = e || 0 === e ? t + "-" + e : t),
                    v.children[0] ? v.insertBefore(h, v.children[0]) : v.appendChild(h),
                    (h._offset = h["offset" + n.op.d2]),
                    ao(h, 0, n, m),
                    h
                );
            },
            ao = function (t, e, i, n) {
                var r = { display: "block" },
                    s = i[n ? "os2" : "p2"],
                    o = i[n ? "p2" : "os2"];
                (t._isFlipped = n), (r[i.a + "Percent"] = n ? -100 : 0), (r[i.a] = n ? "1px" : 0), (r["border" + s + "Width"] = 1), (r["border" + o + "Width"] = 0), (r[i.p] = e + "px"), Lr.set(t, r);
            },
            lo = [],
            co = {},
            uo = function () {
                return ws() - bs > 34 && (gs || (gs = requestAnimationFrame(Oo)));
            },
            po = function () {
                (!ss || !ss.isPressed || ss.startX > Yr.clientWidth) && (mr.cache++, ss ? gs || (gs = requestAnimationFrame(Oo)) : Oo(), bs || _o("scrollStart"), (bs = ws()));
            },
            ho = function () {
                (ls = Fr.innerWidth), (as = Fr.innerHeight);
            },
            fo = function () {
                mr.cache++, !Gr && !rs && !Br.fullscreenElement && !Br.webkitFullscreenElement && (!os || ls !== Fr.innerWidth || Math.abs(Fr.innerHeight - as) > 0.25 * Fr.innerHeight) && Wr.restart(!0);
            },
            go = {},
            vo = [],
            mo = function t() {
                return to(Yo, "scrollEnd", t) || So(!0);
            },
            _o = function (t) {
                return (
                    (go[t] &&
                        go[t].map(function (t) {
                            return t();
                        })) ||
                    vo
                );
            },
            yo = [],
            wo = function (t) {
                for (var e = 0; e < yo.length; e += 5) (!t || (yo[e + 4] && yo[e + 4].query === t)) && ((yo[e].style.cssText = yo[e + 1]), yo[e].getBBox && yo[e].setAttribute("transform", yo[e + 2] || ""), (yo[e + 3].uncache = 1));
            },
            To = function (t, e) {
                var i;
                for (Kr = 0; Kr < lo.length; Kr++) !(i = lo[Kr]) || (e && i._ctx !== e) || (t ? i.kill(1) : i.revert(!0, !0));
                e && wo(e), e || _o("revert");
            },
            bo = function (t, e) {
                mr.cache++,
                    (e || !vs) &&
                        mr.forEach(function (t) {
                            return Hs(t) && t.cacheID++ && (t.rec = 0);
                        }),
                    Ls(t) && (Fr.history.scrollRestoration = ds = t);
            },
            ko = 0,
            xo = function () {
                Yr.appendChild(ps), (hs = ps.offsetHeight || Fr.innerHeight), Yr.removeChild(ps);
            },
            So = function (t, e) {
                if (!bs || t) {
                    xo(),
                        (vs = Yo.isRefreshing = !0),
                        mr.forEach(function (t) {
                            return Hs(t) && ++t.cacheID && (t.rec = t());
                        });
                    var i = _o("refreshInit");
                    is && Yo.sort(),
                        e || To(),
                        mr.forEach(function (t) {
                            Hs(t) && (t.smooth && (t.target.style.scrollBehavior = "auto"), t(0));
                        }),
                        lo.slice(0).forEach(function (t) {
                            return t.refresh();
                        }),
                        lo.forEach(function (t, e) {
                            if (t._subPinOffset && t.pin) {
                                var i = t.vars.horizontal ? "offsetWidth" : "offsetHeight",
                                    n = t.pin[i];
                                t.revert(!0, 1), t.adjustPinSpacing(t.pin[i] - n), t.refresh();
                            }
                        }),
                        lo.forEach(function (t) {
                            var e = Rs(t.scroller, t._dir);
                            ("max" === t.vars.end || (t._endClamp && t.end > e)) && t.setPositions(t.start, Math.max(t.start + 1, e), !0);
                        }),
                        i.forEach(function (t) {
                            return t && t.render && t.render(-1);
                        }),
                        mr.forEach(function (t) {
                            Hs(t) &&
                                (t.smooth &&
                                    requestAnimationFrame(function () {
                                        return (t.target.style.scrollBehavior = "smooth");
                                    }),
                                t.rec && t(t.rec));
                        }),
                        bo(ds, 1),
                        Wr.pause(),
                        ko++,
                        (vs = 2),
                        Oo(2),
                        lo.forEach(function (t) {
                            return Hs(t.vars.onRefresh) && t.vars.onRefresh(t);
                        }),
                        (vs = Yo.isRefreshing = !1),
                        _o("refresh");
                } else Js(Yo, "scrollEnd", mo);
            },
            Co = 0,
            $o = 1,
            Oo = function (t) {
                if (!vs || 2 === t) {
                    (Yo.isUpdating = !0), _s && _s.update(0);
                    var e = lo.length,
                        i = ws(),
                        n = i - Ts >= 50,
                        r = e && lo[0].scroll();
                    if ((($o = Co > r ? -1 : 1), vs || (Co = r), n && (bs && !Qr && i - bs > 200 && ((bs = 0), _o("scrollEnd")), (Ur = Ts), (Ts = i)), $o < 0)) {
                        for (Kr = e; Kr-- > 0; ) lo[Kr] && lo[Kr].update(0, n);
                        $o = 1;
                    } else for (Kr = 0; Kr < e; Kr++) lo[Kr] && lo[Kr].update(0, n);
                    Yo.isUpdating = !1;
                }
                gs = 0;
            },
            Mo = [
                "left",
                "top",
                "bottom",
                "right",
                "marginBottom",
                "marginRight",
                "marginTop",
                "marginLeft",
                "display",
                "flexShrink",
                "float",
                "zIndex",
                "gridColumnStart",
                "gridColumnEnd",
                "gridRowStart",
                "gridRowEnd",
                "gridArea",
                "justifySelf",
                "alignSelf",
                "placeSelf",
                "order",
            ],
            Ao = Mo.concat(["width", "height", "boxSizing", "maxWidth", "maxHeight", "position", "margin", Ws, Ws + "Top", Ws + "Right", Ws + "Bottom", Ws + "Left"]),
            Po = function (t, e, i, n) {
                if (!t._gsap.swappedIn) {
                    for (var r, s = Mo.length, o = e.style, a = t.style; s--; ) o[(r = Mo[s])] = i[r];
                    (o.position = "absolute" === i.position ? "absolute" : "relative"),
                        "inline" === i.display && (o.display = "inline-block"),
                        (a.bottom = a.right = "auto"),
                        (o.flexBasis = i.flexBasis || "auto"),
                        (o.overflow = "visible"),
                        (o.boxSizing = "border-box"),
                        (o.width = Gs(t, $r) + Xs),
                        (o.height = Gs(t, Or) + Xs),
                        (o[Ws] = a.margin = a.top = a.left = "0"),
                        Do(n),
                        (a.width = a.maxWidth = i.width),
                        (a.height = a.maxHeight = i.height),
                        (a[Ws] = i[Ws]),
                        t.parentNode !== e && (t.parentNode.insertBefore(e, t), e.appendChild(t)),
                        (t._gsap.swappedIn = !0);
                }
            },
            Eo = /([A-Z])/g,
            Do = function (t) {
                if (t) {
                    var e,
                        i,
                        n = t.t.style,
                        r = t.length,
                        s = 0;
                    for ((t.t._gsap || Lr.core.getCache(t.t)).uncache = 1; s < r; s += 2) (i = t[s + 1]), (e = t[s]), i ? (n[e] = i) : n[e] && n.removeProperty(e.replace(Eo, "-$1").toLowerCase());
                }
            },
            zo = function (t) {
                for (var e = Ao.length, i = t.style, n = [], r = 0; r < e; r++) n.push(Ao[r], i[Ao[r]]);
                return (n.t = t), n;
            },
            Ro = { left: 0, top: 0 },
            Io = function (t, e, i, n, r, s, o, a, l, c, u, d, p, h) {
                Hs(t) && (t = t(a)), Ls(t) && "max" === t.substr(0, 3) && (t = d + ("=" === t.charAt(4) ? so("0" + t.substr(3), i) : 0));
                var f,
                    g,
                    v,
                    m = p ? p.time() : 0;
                if ((p && p.seek(0), isNaN(t) || (t = +t), Fs(t))) p && (t = Lr.utils.mapRange(p.scrollTrigger.start, p.scrollTrigger.end, 0, d, t)), o && ao(o, i, n, !0);
                else {
                    Hs(e) && (e = e(a));
                    var _,
                        y,
                        w,
                        T,
                        b = (t || "0").split(" ");
                    (v = Mr(e, a) || Yr),
                        ((_ = Vs(v) || {}) && (_.left || _.top)) || "none" !== qs(v).display || ((T = v.style.display), (v.style.display = "block"), (_ = Vs(v)), T ? (v.style.display = T) : v.style.removeProperty("display")),
                        (y = so(b[0], _[n.d])),
                        (w = so(b[1] || "0", i)),
                        (t = _[n.p] - l[n.p] - c + y + r - w),
                        o && ao(o, w, n, i - w < 20 || (o._isStart && w > 20)),
                        (i -= i - w);
                }
                if ((h && ((a[h] = t || -0.001), t < 0 && (t = 0)), s)) {
                    var k = t + i,
                        x = s._isStart;
                    (f = "scroll" + n.d2), ao(s, k, n, (x && k > 20) || (!x && (u ? Math.max(Yr[f], jr[f]) : s.parentNode[f]) <= k + 1)), u && ((l = Vs(o)), u && (s.style[n.op.p] = l[n.op.p] - n.op.m - s._offset + Xs));
                }
                return p && v && ((f = Vs(v)), p.seek(d), (g = Vs(v)), (p._caScrollDist = f[n.p] - g[n.p]), (t = (t / p._caScrollDist) * d)), p && p.seek(m), p ? t : Math.round(t);
            },
            Lo = /(webkit|moz|length|cssText|inset)/i,
            Ho = function (t, e, i, n) {
                if (t.parentNode !== e) {
                    var r,
                        s,
                        o = t.style;
                    if (e === Yr) {
                        for (r in ((t._stOrig = o.cssText), (s = qs(t)))) +r || Lo.test(r) || !s[r] || "string" != typeof o[r] || "0" === r || (o[r] = s[r]);
                        (o.top = i), (o.left = n);
                    } else o.cssText = t._stOrig;
                    (Lr.core.getCache(t).uncache = 1), e.appendChild(t);
                }
            },
            Fo = function (t, e, i) {
                var n = e,
                    r = n;
                return function (e) {
                    var s = Math.round(t());
                    return s !== n && s !== r && Math.abs(s - n) > 3 && Math.abs(s - r) > 3 && ((e = s), i && i()), (r = n), (n = e), e;
                };
            },
            Bo = function (t, e, i) {
                var n = {};
                (n[e.p] = "+=" + i), Lr.set(t, n);
            },
            jo = function (t, e) {
                var i = Ar(t, e),
                    n = "_scroll" + e.p2,
                    r = function e(r, s, o, a, l) {
                        var c = e.tween,
                            u = s.onComplete,
                            d = {};
                        o = o || i();
                        var p = Fo(i, o, function () {
                            c.kill(), (e.tween = 0);
                        });
                        return (
                            (l = (a && l) || 0),
                            (a = a || r - o),
                            c && c.kill(),
                            (s[n] = r),
                            (s.modifiers = d),
                            (d[n] = function () {
                                return p(o + a * c.ratio + l * c.ratio * c.ratio);
                            }),
                            (s.onUpdate = function () {
                                mr.cache++, Oo();
                            }),
                            (s.onComplete = function () {
                                (e.tween = 0), u && u.call(c);
                            }),
                            (c = e.tween = Lr.to(t, s))
                        );
                    };
                return (
                    (t[n] = i),
                    (i.wheelHandler = function () {
                        return r.tween && r.tween.kill() && (r.tween = 0);
                    }),
                    Js(t, "wheel", i.wheelHandler),
                    Yo.isTouch && Js(t, "touchmove", i.wheelHandler),
                    r
                );
            },
            Yo = (function () {
                function t(e, i) {
                    Hr || t.register(Lr) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), us(this), this.init(e, i);
                }
                return (
                    (t.prototype.init = function (e, i) {
                        if (((this.progress = this.start = 0), this.vars && this.kill(!0, !0), ks)) {
                            var n,
                                r,
                                s,
                                o,
                                a,
                                l,
                                c,
                                u,
                                d,
                                p,
                                h,
                                f,
                                g,
                                v,
                                m,
                                _,
                                y,
                                w,
                                T,
                                b,
                                k,
                                x,
                                S,
                                C,
                                $,
                                O,
                                M,
                                A,
                                P,
                                E,
                                D,
                                z,
                                R,
                                I,
                                L,
                                H,
                                F,
                                B,
                                j,
                                Y,
                                N,
                                W,
                                X = (e = Us(Ls(e) || Fs(e) || e.nodeType ? { trigger: e } : e, no)),
                                q = X.onUpdate,
                                U = X.toggleClass,
                                V = X.id,
                                G = X.onToggle,
                                Q = X.onRefresh,
                                Z = X.scrub,
                                K = X.trigger,
                                J = X.pin,
                                tt = X.pinSpacing,
                                et = X.invalidateOnRefresh,
                                it = X.anticipatePin,
                                nt = X.onScrubComplete,
                                rt = X.onSnapComplete,
                                st = X.once,
                                ot = X.snap,
                                at = X.pinReparent,
                                lt = X.pinSpacer,
                                ct = X.containerAnimation,
                                ut = X.fastScrollEnd,
                                dt = X.preventOverlaps,
                                pt = e.horizontal || (e.containerAnimation && !1 !== e.horizontal) ? $r : Or,
                                ht = !Z && 0 !== Z,
                                ft = Mr(e.scroller || Fr),
                                gt = Lr.core.getCache(ft),
                                vt = Es(ft),
                                mt = "fixed" === ("pinType" in e ? e.pinType : Tr(ft, "pinType") || (vt && "fixed")),
                                _t = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack],
                                yt = ht && e.toggleActions.split(" "),
                                wt = "markers" in e ? e.markers : no.markers,
                                Tt = vt ? 0 : parseFloat(qs(ft)["border" + pt.p2 + "Width"]) || 0,
                                bt = this,
                                kt =
                                    e.onRefreshInit &&
                                    function () {
                                        return e.onRefreshInit(bt);
                                    },
                                xt = (function (t, e, i) {
                                    var n = i.d,
                                        r = i.d2,
                                        s = i.a;
                                    return (s = Tr(t, "getBoundingClientRect"))
                                        ? function () {
                                              return s()[n];
                                          }
                                        : function () {
                                              return (e ? Ds(r) : t["client" + r]) || 0;
                                          };
                                })(ft, vt, pt),
                                St = (function (t, e) {
                                    return !e || ~_r.indexOf(t)
                                        ? zs(t)
                                        : function () {
                                              return Ro;
                                          };
                                })(ft, vt),
                                Ct = 0,
                                $t = 0,
                                Ot = 0,
                                Mt = Ar(ft, pt);
                            if (
                                ((bt._startClamp = bt._endClamp = !1),
                                (bt._dir = pt),
                                (it *= 45),
                                (bt.scroller = ft),
                                (bt.scroll = ct ? ct.time.bind(ct) : Mt),
                                (o = Mt()),
                                (bt.vars = e),
                                (i = i || e.animation),
                                "refreshPriority" in e && ((is = 1), -9999 === e.refreshPriority && (_s = bt)),
                                (gt.tweenScroll = gt.tweenScroll || { top: jo(ft, Or), left: jo(ft, $r) }),
                                (bt.tweenTo = n = gt.tweenScroll[pt.p]),
                                (bt.scrubDuration = function (t) {
                                    (R = Fs(t) && t)
                                        ? z
                                            ? z.duration(t)
                                            : (z = Lr.to(i, {
                                                  ease: "expo",
                                                  totalProgress: "+=0",
                                                  duration: R,
                                                  paused: !0,
                                                  onComplete: function () {
                                                      return nt && nt(bt);
                                                  },
                                              }))
                                        : (z && z.progress(1).kill(), (z = 0));
                                }),
                                i &&
                                    ((i.vars.lazy = !1),
                                    (i._initted && !bt.isReverted) || (!1 !== i.vars.immediateRender && !1 !== e.immediateRender && i.duration() && i.render(0, !0, !0)),
                                    (bt.animation = i.pause()),
                                    (i.scrollTrigger = bt),
                                    bt.scrubDuration(Z),
                                    (E = 0),
                                    V || (V = i.vars.id)),
                                ot &&
                                    ((Bs(ot) && !ot.push) || (ot = { snapTo: ot }),
                                    "scrollBehavior" in Yr.style && Lr.set(vt ? [Yr, jr] : ft, { scrollBehavior: "auto" }),
                                    mr.forEach(function (t) {
                                        return Hs(t) && t.target === (vt ? Br.scrollingElement || jr : ft) && (t.smooth = !1);
                                    }),
                                    (s = Hs(ot.snapTo)
                                        ? ot.snapTo
                                        : "labels" === ot.snapTo
                                        ? (function (t) {
                                              return function (e) {
                                                  return Lr.utils.snap(Qs(t), e);
                                              };
                                          })(i)
                                        : "labelsDirectional" === ot.snapTo
                                        ? ((Y = i),
                                          function (t, e) {
                                              return Zs(Qs(Y))(t, e.direction);
                                          })
                                        : !1 !== ot.directional
                                        ? function (t, e) {
                                              return Zs(ot.snapTo)(t, ws() - $t < 500 ? 0 : e.direction);
                                          }
                                        : Lr.utils.snap(ot.snapTo)),
                                    (I = ot.duration || { min: 0.1, max: 2 }),
                                    (I = Bs(I) ? qr(I.min, I.max) : qr(I, I)),
                                    (L = Lr.delayedCall(ot.delay || R / 2 || 0.1, function () {
                                        var t = Mt(),
                                            e = ws() - $t < 500,
                                            r = n.tween;
                                        if (!(e || Math.abs(bt.getVelocity()) < 10) || r || Qr || Ct === t) bt.isActive && Ct !== t && L.restart(!0);
                                        else {
                                            var o = (t - l) / v,
                                                a = i && !ht ? i.totalProgress() : o,
                                                u = e ? 0 : ((a - D) / (ws() - Ur)) * 1e3 || 0,
                                                d = Lr.utils.clamp(-o, 1 - o, (Ns(u / 2) * u) / 0.185),
                                                p = o + (!1 === ot.inertia ? 0 : d),
                                                h = qr(0, 1, s(p, bt)),
                                                f = Math.round(l + h * v),
                                                g = ot,
                                                m = g.onStart,
                                                _ = g.onInterrupt,
                                                y = g.onComplete;
                                            if (t <= c && t >= l && f !== t) {
                                                if (r && !r._initted && r.data <= Ns(f - t)) return;
                                                !1 === ot.inertia && (d = h - o),
                                                    n(
                                                        f,
                                                        {
                                                            duration: I(Ns((0.185 * Math.max(Ns(p - a), Ns(h - a))) / u / 0.05 || 0)),
                                                            ease: ot.ease || "power3",
                                                            data: Ns(f - t),
                                                            onInterrupt: function () {
                                                                return L.restart(!0) && _ && _(bt);
                                                            },
                                                            onComplete: function () {
                                                                bt.update(), (Ct = Mt()), (E = D = i && !ht ? i.totalProgress() : bt.progress), rt && rt(bt), y && y(bt);
                                                            },
                                                        },
                                                        t,
                                                        d * v,
                                                        f - t - d * v
                                                    ),
                                                    m && m(bt, n.tween);
                                            }
                                        }
                                    }).pause())),
                                V && (co[V] = bt),
                                (j = (K = bt.trigger = Mr(K || (!0 !== J && J))) && K._gsap && K._gsap.stRevert) && (j = j(bt)),
                                (J = !0 === J ? K : Mr(J)),
                                Ls(U) && (U = { targets: K, className: U }),
                                J &&
                                    (!1 === tt || "margin" === tt || (tt = !(!tt && J.parentNode && J.parentNode.style && "flex" === qs(J.parentNode).display) && Ws),
                                    (bt.pin = J),
                                    (r = Lr.core.getCache(J)).spacer
                                        ? (m = r.pinState)
                                        : (lt && ((lt = Mr(lt)) && !lt.nodeType && (lt = lt.current || lt.nativeElement), (r.spacerIsNative = !!lt), lt && (r.spacerState = zo(lt))),
                                          (r.spacer = w = lt || Br.createElement("div")),
                                          w.classList.add("pin-spacer"),
                                          V && w.classList.add("pin-spacer-" + V),
                                          (r.pinState = m = zo(J))),
                                    !1 !== e.force3D && Lr.set(J, { force3D: !0 }),
                                    (bt.spacer = w = r.spacer),
                                    (P = qs(J)),
                                    (C = P[tt + pt.os2]),
                                    (b = Lr.getProperty(J)),
                                    (k = Lr.quickSetter(J, pt.a, Xs)),
                                    Po(J, w, P),
                                    (y = zo(J))),
                                wt)
                            ) {
                                (f = Bs(wt) ? Us(wt, io) : io), (p = oo("scroller-start", V, ft, pt, f, 0)), (h = oo("scroller-end", V, ft, pt, f, 0, p)), (T = p["offset" + pt.op.d2]);
                                var At = Mr(Tr(ft, "content") || ft);
                                (u = this.markerStart = oo("start", V, At, pt, f, T, 0, ct)),
                                    (d = this.markerEnd = oo("end", V, At, pt, f, T, 0, ct)),
                                    ct && (B = Lr.quickSetter([u, d], pt.a, Xs)),
                                    mt ||
                                        (_r.length && !0 === Tr(ft, "fixedMarkers")) ||
                                        ((W = qs((N = vt ? Yr : ft)).position),
                                        (N.style.position = "absolute" === W || "fixed" === W ? W : "relative"),
                                        Lr.set([p, h], { force3D: !0 }),
                                        (O = Lr.quickSetter(p, pt.a, Xs)),
                                        (A = Lr.quickSetter(h, pt.a, Xs)));
                            }
                            if (ct) {
                                var Pt = ct.vars.onUpdate,
                                    Et = ct.vars.onUpdateParams;
                                ct.eventCallback("onUpdate", function () {
                                    bt.update(0, 0, 1), Pt && Pt.apply(ct, Et || []);
                                });
                            }
                            if (
                                ((bt.previous = function () {
                                    return lo[lo.indexOf(bt) - 1];
                                }),
                                (bt.next = function () {
                                    return lo[lo.indexOf(bt) + 1];
                                }),
                                (bt.revert = function (t, e) {
                                    if (!e) return bt.kill(!0);
                                    var n = !1 !== t || !bt.enabled,
                                        r = Gr;
                                    n !== bt.isReverted &&
                                        (n && ((H = Math.max(Mt(), bt.scroll.rec || 0)), (Ot = bt.progress), (F = i && i.progress())),
                                        u &&
                                            [u, d, p, h].forEach(function (t) {
                                                return (t.style.display = n ? "none" : "block");
                                            }),
                                        n && ((Gr = bt), bt.update(n)),
                                        !J ||
                                            (at && bt.isActive) ||
                                            (n
                                                ? (function (t, e, i) {
                                                      Do(i);
                                                      var n = t._gsap;
                                                      if (n.spacerIsNative) Do(n.spacerState);
                                                      else if (t._gsap.swappedIn) {
                                                          var r = e.parentNode;
                                                          r && (r.insertBefore(t, e), r.removeChild(e));
                                                      }
                                                      t._gsap.swappedIn = !1;
                                                  })(J, w, m)
                                                : Po(J, w, qs(J), $)),
                                        n || bt.update(n),
                                        (Gr = r),
                                        (bt.isReverted = n));
                                }),
                                (bt.refresh = function (r, s, f, T) {
                                    if ((!Gr && bt.enabled) || s)
                                        if (J && r && bs) Js(t, "scrollEnd", mo);
                                        else {
                                            !vs && kt && kt(bt),
                                                (Gr = bt),
                                                n.tween && !f && (n.tween.kill(), (n.tween = 0)),
                                                z && z.pause(),
                                                et && i && i.revert({ kill: !1 }).invalidate(),
                                                bt.isReverted || bt.revert(!0, !0),
                                                (bt._subPinOffset = !1);
                                            var k,
                                                C,
                                                O,
                                                A,
                                                P,
                                                E,
                                                D,
                                                R,
                                                I,
                                                B,
                                                j,
                                                Y,
                                                N,
                                                W = xt(),
                                                X = St(),
                                                q = ct ? ct.duration() : Rs(ft, pt),
                                                U = v <= 0.01,
                                                V = 0,
                                                G = T || 0,
                                                Z = Bs(f) ? f.end : e.end,
                                                it = e.endTrigger || K,
                                                nt = Bs(f) ? f.start : e.start || (0 !== e.start && K ? (J ? "0 0" : "0 100%") : 0),
                                                rt = (bt.pinnedContainer = e.pinnedContainer && Mr(e.pinnedContainer, bt)),
                                                st = (K && Math.max(0, lo.indexOf(bt))) || 0,
                                                ot = st;
                                            for (wt && Bs(f) && ((Y = Lr.getProperty(p, pt.p)), (N = Lr.getProperty(h, pt.p))); ot--; )
                                                (E = lo[ot]).end || E.refresh(0, 1) || (Gr = bt),
                                                    !(D = E.pin) || (D !== K && D !== J && D !== rt) || E.isReverted || (B || (B = []), B.unshift(E), E.revert(!0, !0)),
                                                    E !== lo[ot] && (st--, ot--);
                                            for (
                                                Hs(nt) && (nt = nt(bt)),
                                                    nt = xs(nt, "start", bt),
                                                    l = Io(nt, K, W, pt, Mt(), u, p, bt, X, Tt, mt, q, ct, bt._startClamp && "_startClamp") || (J ? -0.001 : 0),
                                                    Hs(Z) && (Z = Z(bt)),
                                                    Ls(Z) &&
                                                        !Z.indexOf("+=") &&
                                                        (~Z.indexOf(" ")
                                                            ? (Z = (Ls(nt) ? nt.split(" ")[0] : "") + Z)
                                                            : ((V = so(Z.substr(2), W)), (Z = Ls(nt) ? nt : (ct ? Lr.utils.mapRange(0, ct.duration(), ct.scrollTrigger.start, ct.scrollTrigger.end, l) : l) + V), (it = K))),
                                                    Z = xs(Z, "end", bt),
                                                    c = Math.max(l, Io(Z || (it ? "100% 0" : q), it, W, pt, Mt() + V, d, h, bt, X, Tt, mt, q, ct, bt._endClamp && "_endClamp")) || -0.001,
                                                    V = 0,
                                                    ot = st;
                                                ot--;

                                            )
                                                (D = (E = lo[ot]).pin) &&
                                                    E.start - E._pinPush <= l &&
                                                    !ct &&
                                                    E.end > 0 &&
                                                    ((k = E.end - (bt._startClamp ? Math.max(0, E.start) : E.start)), ((D === K && E.start - E._pinPush < l) || D === rt) && isNaN(nt) && (V += k * (1 - E.progress)), D === J && (G += k));
                                            if (
                                                ((l += V),
                                                (c += V),
                                                bt._startClamp && (bt._startClamp += V),
                                                bt._endClamp && !vs && ((bt._endClamp = c || -0.001), (c = Math.min(c, Rs(ft, pt)))),
                                                (v = c - l || ((l -= 0.01) && 0.001)),
                                                U && (Ot = Lr.utils.clamp(0, 1, Lr.utils.normalize(l, c, H))),
                                                (bt._pinPush = G),
                                                u && V && (((k = {})[pt.a] = "+=" + V), rt && (k[pt.p] = "-=" + Mt()), Lr.set([u, d], k)),
                                                J)
                                            )
                                                (k = qs(J)),
                                                    (A = pt === Or),
                                                    (O = Mt()),
                                                    (x = parseFloat(b(pt.a)) + G),
                                                    !q &&
                                                        c > 1 &&
                                                        ((j = { style: (j = (vt ? Br.scrollingElement || jr : ft).style), value: j["overflow" + pt.a.toUpperCase()] }),
                                                        vt && "scroll" !== qs(Yr)["overflow" + pt.a.toUpperCase()] && (j.style["overflow" + pt.a.toUpperCase()] = "scroll")),
                                                    Po(J, w, k),
                                                    (y = zo(J)),
                                                    (C = Vs(J, !0)),
                                                    (R = mt && Ar(ft, A ? $r : Or)()),
                                                    tt &&
                                                        ((($ = [tt + pt.os2, v + G + Xs]).t = w),
                                                        (ot = tt === Ws ? Gs(J, pt) + v + G : 0) && $.push(pt.d, ot + Xs),
                                                        Do($),
                                                        rt &&
                                                            lo.forEach(function (t) {
                                                                t.pin === rt && !1 !== t.vars.pinSpacing && (t._subPinOffset = !0);
                                                            }),
                                                        mt && Mt(H)),
                                                    mt &&
                                                        (((P = { top: C.top + (A ? O - l : R) + Xs, left: C.left + (A ? R : O - l) + Xs, boxSizing: "border-box", position: "fixed" }).width = P.maxWidth = Math.ceil(C.width) + Xs),
                                                        (P.height = P.maxHeight = Math.ceil(C.height) + Xs),
                                                        (P.margin = P.marginTop = P.marginRight = P.marginBottom = P.marginLeft = "0"),
                                                        (P[Ws] = k[Ws]),
                                                        (P[Ws + "Top"] = k[Ws + "Top"]),
                                                        (P[Ws + "Right"] = k[Ws + "Right"]),
                                                        (P[Ws + "Bottom"] = k[Ws + "Bottom"]),
                                                        (P[Ws + "Left"] = k[Ws + "Left"]),
                                                        (_ = (function (t, e, i) {
                                                            for (var n, r = [], s = t.length, o = i ? 8 : 0; o < s; o += 2) (n = t[o]), r.push(n, n in e ? e[n] : t[o + 1]);
                                                            return (r.t = t.t), r;
                                                        })(m, P, at)),
                                                        vs && Mt(0)),
                                                    i
                                                        ? ((I = i._initted),
                                                          ns(1),
                                                          i.render(i.duration(), !0, !0),
                                                          (S = b(pt.a) - x + v + G),
                                                          (M = Math.abs(v - S) > 1),
                                                          mt && M && _.splice(_.length - 2, 2),
                                                          i.render(0, !0, !0),
                                                          I || i.invalidate(!0),
                                                          i.parent || i.totalTime(i.totalTime()),
                                                          ns(0))
                                                        : (S = v),
                                                    j && (j.value ? (j.style["overflow" + pt.a.toUpperCase()] = j.value) : j.style.removeProperty("overflow-" + pt.a));
                                            else if (K && Mt() && !ct) for (C = K.parentNode; C && C !== Yr; ) C._pinOffset && ((l -= C._pinOffset), (c -= C._pinOffset)), (C = C.parentNode);
                                            B &&
                                                B.forEach(function (t) {
                                                    return t.revert(!1, !0);
                                                }),
                                                (bt.start = l),
                                                (bt.end = c),
                                                (o = a = vs ? H : Mt()),
                                                ct || vs || (o < H && Mt(H), (bt.scroll.rec = 0)),
                                                bt.revert(!1, !0),
                                                ($t = ws()),
                                                L && ((Ct = -1), L.restart(!0)),
                                                (Gr = 0),
                                                i && ht && (i._initted || F) && i.progress() !== F && i.progress(F || 0, !0).render(i.time(), !0, !0),
                                                (U || Ot !== bt.progress || ct) && (i && !ht && i.totalProgress(ct && l < -0.001 && !Ot ? Lr.utils.normalize(l, c, 0) : Ot, !0), (bt.progress = U || (o - l) / v === Ot ? 0 : Ot)),
                                                J && tt && (w._pinOffset = Math.round(bt.progress * S)),
                                                z && z.invalidate(),
                                                isNaN(Y) || ((Y -= Lr.getProperty(p, pt.p)), (N -= Lr.getProperty(h, pt.p)), Bo(p, pt, Y), Bo(u, pt, Y - (T || 0)), Bo(h, pt, N), Bo(d, pt, N - (T || 0))),
                                                U && !vs && bt.update(),
                                                !Q || vs || g || ((g = !0), Q(bt), (g = !1));
                                        }
                                }),
                                (bt.getVelocity = function () {
                                    return ((Mt() - a) / (ws() - Ur)) * 1e3 || 0;
                                }),
                                (bt.endAnimation = function () {
                                    js(bt.callbackAnimation), i && (z ? z.progress(1) : i.paused() ? ht || js(i, bt.direction < 0, 1) : js(i, i.reversed()));
                                }),
                                (bt.labelToScroll = function (t) {
                                    return (i && i.labels && (l || bt.refresh() || l) + (i.labels[t] / i.duration()) * v) || 0;
                                }),
                                (bt.getTrailing = function (t) {
                                    var e = lo.indexOf(bt),
                                        i = bt.direction > 0 ? lo.slice(0, e).reverse() : lo.slice(e + 1);
                                    return (Ls(t)
                                        ? i.filter(function (e) {
                                              return e.vars.preventOverlaps === t;
                                          })
                                        : i
                                    ).filter(function (t) {
                                        return bt.direction > 0 ? t.end <= l : t.start >= c;
                                    });
                                }),
                                (bt.update = function (t, e, r) {
                                    if (!ct || r || t) {
                                        var s,
                                            u,
                                            d,
                                            h,
                                            f,
                                            g,
                                            m,
                                            T = !0 === vs ? H : bt.scroll(),
                                            b = t ? 0 : (T - l) / v,
                                            $ = b < 0 ? 0 : b > 1 ? 1 : b || 0,
                                            P = bt.progress;
                                        if (
                                            (e && ((a = o), (o = ct ? Mt() : T), ot && ((D = E), (E = i && !ht ? i.totalProgress() : $))),
                                            it && !$ && J && !Gr && !ys && bs && l < T + ((T - a) / (ws() - Ur)) * it && ($ = 1e-4),
                                            $ !== P && bt.enabled)
                                        ) {
                                            if (
                                                ((h = (f = (s = bt.isActive = !!$ && $ < 1) !== (!!P && P < 1)) || !!$ != !!P),
                                                (bt.direction = $ > P ? 1 : -1),
                                                (bt.progress = $),
                                                h && !Gr && ((u = $ && !P ? 0 : 1 === $ ? 1 : 1 === P ? 2 : 3), ht && ((d = (!f && "none" !== yt[u + 1] && yt[u + 1]) || yt[u]), (m = i && ("complete" === d || "reset" === d || d in i)))),
                                                dt &&
                                                    (f || m) &&
                                                    (m || Z || !i) &&
                                                    (Hs(dt)
                                                        ? dt(bt)
                                                        : bt.getTrailing(dt).forEach(function (t) {
                                                              return t.endAnimation();
                                                          })),
                                                ht ||
                                                    (!z || Gr || ys
                                                        ? i && i.totalProgress($, !(!Gr || (!$t && !t)))
                                                        : (z._dp._time - z._start !== z._time && z.render(z._dp._time - z._start),
                                                          z.resetTo ? z.resetTo("totalProgress", $, i._tTime / i._tDur) : ((z.vars.totalProgress = $), z.invalidate().restart()))),
                                                J)
                                            )
                                                if ((t && tt && (w.style[tt + pt.os2] = C), mt)) {
                                                    if (h) {
                                                        if (((g = !t && $ > P && c + 1 > T && T + 1 >= Rs(ft, pt)), at))
                                                            if (t || (!s && !g)) Ho(J, w);
                                                            else {
                                                                var R = Vs(J, !0),
                                                                    I = T - l;
                                                                Ho(J, Yr, R.top + (pt === Or ? I : 0) + Xs, R.left + (pt === Or ? 0 : I) + Xs);
                                                            }
                                                        Do(s || g ? _ : y), (M && $ < 1 && s) || k(x + (1 !== $ || g ? 0 : S));
                                                    }
                                                } else k(Ms(x + S * $));
                                            ot && !n.tween && !Gr && !ys && L.restart(!0),
                                                U &&
                                                    (f || (st && $ && ($ < 1 || !fs))) &&
                                                    Xr(U.targets).forEach(function (t) {
                                                        return t.classList[s || st ? "add" : "remove"](U.className);
                                                    }),
                                                q && !ht && !t && q(bt),
                                                h && !Gr
                                                    ? (ht && (m && ("complete" === d ? i.pause().totalProgress(1) : "reset" === d ? i.restart(!0).pause() : "restart" === d ? i.restart(!0) : i[d]()), q && q(bt)),
                                                      (!f && fs) || (G && f && Ys(bt, G), _t[u] && Ys(bt, _t[u]), st && (1 === $ ? bt.kill(!1, 1) : (_t[u] = 0)), f || (_t[(u = 1 === $ ? 1 : 3)] && Ys(bt, _t[u]))),
                                                      ut && !s && Math.abs(bt.getVelocity()) > (Fs(ut) ? ut : 2500) && (js(bt.callbackAnimation), z ? z.progress(1) : js(i, "reverse" === d ? 1 : !$, 1)))
                                                    : ht && q && !Gr && q(bt);
                                        }
                                        if (A) {
                                            var F = ct ? (T / ct.duration()) * (ct._caScrollDist || 0) : T;
                                            O(F + (p._isFlipped ? 1 : 0)), A(F);
                                        }
                                        B && B((-T / ct.duration()) * (ct._caScrollDist || 0));
                                    }
                                }),
                                (bt.enable = function (e, i) {
                                    bt.enabled || ((bt.enabled = !0), Js(ft, "resize", fo), vt || Js(ft, "scroll", po), kt && Js(t, "refreshInit", kt), !1 !== e && ((bt.progress = Ot = 0), (o = a = Ct = Mt())), !1 !== i && bt.refresh());
                                }),
                                (bt.getTween = function (t) {
                                    return t && n ? n.tween : z;
                                }),
                                (bt.setPositions = function (t, e, i, n) {
                                    if (ct) {
                                        var r = ct.scrollTrigger,
                                            s = ct.duration(),
                                            o = r.end - r.start;
                                        (t = r.start + (o * t) / s), (e = r.start + (o * e) / s);
                                    }
                                    bt.refresh(!1, !1, { start: Ss(t, i && !!bt._startClamp), end: Ss(e, i && !!bt._endClamp) }, n), bt.update();
                                }),
                                (bt.adjustPinSpacing = function (t) {
                                    if ($ && t) {
                                        var e = $.indexOf(pt.d) + 1;
                                        ($[e] = parseFloat($[e]) + t + Xs), ($[1] = parseFloat($[1]) + t + Xs), Do($);
                                    }
                                }),
                                (bt.disable = function (e, i) {
                                    if (
                                        bt.enabled &&
                                        (!1 !== e && bt.revert(!0, !0),
                                        (bt.enabled = bt.isActive = !1),
                                        i || (z && z.pause()),
                                        (H = 0),
                                        r && (r.uncache = 1),
                                        kt && to(t, "refreshInit", kt),
                                        L && (L.pause(), n.tween && n.tween.kill() && (n.tween = 0)),
                                        !vt)
                                    ) {
                                        for (var s = lo.length; s--; ) if (lo[s].scroller === ft && lo[s] !== bt) return;
                                        to(ft, "resize", fo), vt || to(ft, "scroll", po);
                                    }
                                }),
                                (bt.kill = function (t, n) {
                                    bt.disable(t, n), z && !n && z.kill(), V && delete co[V];
                                    var s = lo.indexOf(bt);
                                    s >= 0 && lo.splice(s, 1),
                                        s === Kr && $o > 0 && Kr--,
                                        (s = 0),
                                        lo.forEach(function (t) {
                                            return t.scroller === bt.scroller && (s = 1);
                                        }),
                                        s || vs || (bt.scroll.rec = 0),
                                        i && ((i.scrollTrigger = null), t && i.revert({ kill: !1 }), n || i.kill()),
                                        u &&
                                            [u, d, p, h].forEach(function (t) {
                                                return t.parentNode && t.parentNode.removeChild(t);
                                            }),
                                        _s === bt && (_s = 0),
                                        J &&
                                            (r && (r.uncache = 1),
                                            (s = 0),
                                            lo.forEach(function (t) {
                                                return t.pin === J && s++;
                                            }),
                                            s || (r.spacer = 0)),
                                        e.onKill && e.onKill(bt);
                                }),
                                lo.push(bt),
                                bt.enable(!1, !1),
                                j && j(bt),
                                i && i.add && !v)
                            ) {
                                var Dt = bt.update;
                                (bt.update = function () {
                                    (bt.update = Dt), l || c || bt.refresh();
                                }),
                                    Lr.delayedCall(0.01, bt.update),
                                    (v = 0.01),
                                    (l = c = 0);
                            } else bt.refresh();
                            J &&
                                (function () {
                                    if (ms !== ko) {
                                        var t = (ms = ko);
                                        requestAnimationFrame(function () {
                                            return t === ko && So(!0);
                                        });
                                    }
                                })();
                        } else this.update = this.refresh = this.kill = Os;
                    }),
                    (t.register = function (e) {
                        return Hr || ((Lr = e || Ps()), As() && window.document && t.enable(), (Hr = ks)), Hr;
                    }),
                    (t.defaults = function (t) {
                        if (t) for (var e in t) no[e] = t[e];
                        return no;
                    }),
                    (t.disable = function (t, e) {
                        (ks = 0),
                            lo.forEach(function (i) {
                                return i[e ? "kill" : "disable"](t);
                            }),
                            to(Fr, "wheel", po),
                            to(Br, "scroll", po),
                            clearInterval(Vr),
                            to(Br, "touchcancel", Os),
                            to(Yr, "touchstart", Os),
                            Ks(to, Br, "pointerdown,touchstart,mousedown", Cs),
                            Ks(to, Br, "pointerup,touchend,mouseup", $s),
                            Wr.kill(),
                            Is(to);
                        for (var i = 0; i < mr.length; i += 3) eo(to, mr[i], mr[i + 1]), eo(to, mr[i], mr[i + 2]);
                    }),
                    (t.enable = function () {
                        if (
                            ((Fr = window),
                            (Br = document),
                            (jr = Br.documentElement),
                            (Yr = Br.body),
                            Lr &&
                                ((Xr = Lr.utils.toArray),
                                (qr = Lr.utils.clamp),
                                (us = Lr.core.context || Os),
                                (ns = Lr.core.suppressOverwrites || Os),
                                (ds = Fr.history.scrollRestoration || "auto"),
                                (Co = Fr.pageYOffset),
                                Lr.core.globals("ScrollTrigger", t),
                                Yr))
                        ) {
                            (ks = 1),
                                ((ps = document.createElement("div")).style.height = "100vh"),
                                (ps.style.position = "absolute"),
                                xo(),
                                (function t() {
                                    return ks && requestAnimationFrame(t);
                                })(),
                                Ir.register(Lr),
                                (t.isTouch = Ir.isTouch),
                                (cs = Ir.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
                                Js(Fr, "wheel", po),
                                (Nr = [Fr, Br, jr, Yr]),
                                Lr.matchMedia
                                    ? ((t.matchMedia = function (t) {
                                          var e,
                                              i = Lr.matchMedia();
                                          for (e in t) i.add(e, t[e]);
                                          return i;
                                      }),
                                      Lr.addEventListener("matchMediaInit", function () {
                                          return To();
                                      }),
                                      Lr.addEventListener("matchMediaRevert", function () {
                                          return wo();
                                      }),
                                      Lr.addEventListener("matchMedia", function () {
                                          So(0, 1), _o("matchMedia");
                                      }),
                                      Lr.matchMedia("(orientation: portrait)", function () {
                                          return ho(), ho;
                                      }))
                                    : console.warn("Requires GSAP 3.11.0 or later"),
                                ho(),
                                Js(Br, "scroll", po);
                            var e,
                                i,
                                n = Yr.style,
                                r = n.borderTopStyle,
                                s = Lr.core.Animation.prototype;
                            for (
                                s.revert ||
                                    Object.defineProperty(s, "revert", {
                                        value: function () {
                                            return this.time(-0.01, !0);
                                        },
                                    }),
                                    n.borderTopStyle = "solid",
                                    e = Vs(Yr),
                                    Or.m = Math.round(e.top + Or.sc()) || 0,
                                    $r.m = Math.round(e.left + $r.sc()) || 0,
                                    r ? (n.borderTopStyle = r) : n.removeProperty("border-top-style"),
                                    Vr = setInterval(uo, 250),
                                    Lr.delayedCall(0.5, function () {
                                        return (ys = 0);
                                    }),
                                    Js(Br, "touchcancel", Os),
                                    Js(Yr, "touchstart", Os),
                                    Ks(Js, Br, "pointerdown,touchstart,mousedown", Cs),
                                    Ks(Js, Br, "pointerup,touchend,mouseup", $s),
                                    Zr = Lr.utils.checkPrefix("transform"),
                                    Ao.push(Zr),
                                    Hr = ws(),
                                    Wr = Lr.delayedCall(0.2, So).pause(),
                                    es = [
                                        Br,
                                        "visibilitychange",
                                        function () {
                                            var t = Fr.innerWidth,
                                                e = Fr.innerHeight;
                                            Br.hidden ? ((Jr = t), (ts = e)) : (Jr === t && ts === e) || fo();
                                        },
                                        Br,
                                        "DOMContentLoaded",
                                        So,
                                        Fr,
                                        "load",
                                        So,
                                        Fr,
                                        "resize",
                                        fo,
                                    ],
                                    Is(Js),
                                    lo.forEach(function (t) {
                                        return t.enable(0, 1);
                                    }),
                                    i = 0;
                                i < mr.length;
                                i += 3
                            )
                                eo(to, mr[i], mr[i + 1]), eo(to, mr[i], mr[i + 2]);
                        }
                    }),
                    (t.config = function (e) {
                        "limitCallbacks" in e && (fs = !!e.limitCallbacks);
                        var i = e.syncInterval;
                        (i && clearInterval(Vr)) || ((Vr = i) && setInterval(uo, i)),
                            "ignoreMobileResize" in e && (os = 1 === t.isTouch && e.ignoreMobileResize),
                            "autoRefreshEvents" in e && (Is(to) || Is(Js, e.autoRefreshEvents || "none"), (rs = -1 === (e.autoRefreshEvents + "").indexOf("resize")));
                    }),
                    (t.scrollerProxy = function (t, e) {
                        var i = Mr(t),
                            n = mr.indexOf(i),
                            r = Es(i);
                        ~n && mr.splice(n, r ? 6 : 2), e && (r ? _r.unshift(Fr, e, Yr, e, jr, e) : _r.unshift(i, e));
                    }),
                    (t.clearMatchMedia = function (t) {
                        lo.forEach(function (e) {
                            return e._ctx && e._ctx.query === t && e._ctx.kill(!0, !0);
                        });
                    }),
                    (t.isInViewport = function (t, e, i) {
                        var n = (Ls(t) ? Mr(t) : t).getBoundingClientRect(),
                            r = n[i ? "width" : "height"] * e || 0;
                        return i ? n.right - r > 0 && n.left + r < Fr.innerWidth : n.bottom - r > 0 && n.top + r < Fr.innerHeight;
                    }),
                    (t.positionInViewport = function (t, e, i) {
                        Ls(t) && (t = Mr(t));
                        var n = t.getBoundingClientRect(),
                            r = n[i ? "width" : "height"],
                            s = null == e ? r / 2 : e in ro ? ro[e] * r : ~e.indexOf("%") ? (parseFloat(e) * r) / 100 : parseFloat(e) || 0;
                        return i ? (n.left + s) / Fr.innerWidth : (n.top + s) / Fr.innerHeight;
                    }),
                    (t.killAll = function (t) {
                        if (
                            (lo.slice(0).forEach(function (t) {
                                return "ScrollSmoother" !== t.vars.id && t.kill();
                            }),
                            !0 !== t)
                        ) {
                            var e = go.killAll || [];
                            (go = {}),
                                e.forEach(function (t) {
                                    return t();
                                });
                        }
                    }),
                    t
                );
            })();
        (Yo.version = "3.12.2"),
            (Yo.saveStyles = function (t) {
                return t
                    ? Xr(t).forEach(function (t) {
                          if (t && t.style) {
                              var e = yo.indexOf(t);
                              e >= 0 && yo.splice(e, 5), yo.push(t, t.style.cssText, t.getBBox && t.getAttribute("transform"), Lr.core.getCache(t), us());
                          }
                      })
                    : yo;
            }),
            (Yo.revert = function (t, e) {
                return To(!t, e);
            }),
            (Yo.create = function (t, e) {
                return new Yo(t, e);
            }),
            (Yo.refresh = function (t) {
                return t ? fo() : (Hr || Yo.register()) && So(!0);
            }),
            (Yo.update = function (t) {
                return ++mr.cache && Oo(!0 === t ? 2 : 0);
            }),
            (Yo.clearScrollMemory = bo),
            (Yo.maxScroll = function (t, e) {
                return Rs(t, e ? $r : Or);
            }),
            (Yo.getScrollFunc = function (t, e) {
                return Ar(Mr(t), e ? $r : Or);
            }),
            (Yo.getById = function (t) {
                return co[t];
            }),
            (Yo.getAll = function () {
                return lo.filter(function (t) {
                    return "ScrollSmoother" !== t.vars.id;
                });
            }),
            (Yo.isScrolling = function () {
                return !!bs;
            }),
            (Yo.snapDirectional = Zs),
            (Yo.addEventListener = function (t, e) {
                var i = go[t] || (go[t] = []);
                ~i.indexOf(e) || i.push(e);
            }),
            (Yo.removeEventListener = function (t, e) {
                var i = go[t],
                    n = i && i.indexOf(e);
                n >= 0 && i.splice(n, 1);
            }),
            (Yo.batch = function (t, e) {
                var i,
                    n = [],
                    r = {},
                    s = e.interval || 0.016,
                    o = e.batchMax || 1e9,
                    a = function (t, e) {
                        var i = [],
                            n = [],
                            r = Lr.delayedCall(s, function () {
                                e(i, n), (i = []), (n = []);
                            }).pause();
                        return function (t) {
                            i.length || r.restart(!0), i.push(t.trigger), n.push(t), o <= i.length && r.progress(1);
                        };
                    };
                for (i in e) r[i] = "on" === i.substr(0, 2) && Hs(e[i]) && "onRefreshInit" !== i ? a(0, e[i]) : e[i];
                return (
                    Hs(o) &&
                        ((o = o()),
                        Js(Yo, "refresh", function () {
                            return (o = e.batchMax());
                        })),
                    Xr(t).forEach(function (t) {
                        var e = {};
                        for (i in r) e[i] = r[i];
                        (e.trigger = t), n.push(Yo.create(e));
                    }),
                    n
                );
            });
        var No,
            Wo = function (t, e, i, n) {
                return e > n ? t(n) : e < 0 && t(0), i > n ? (n - e) / (i - e) : i < 0 ? e / (e - i) : 1;
            },
            Xo = function t(e, i) {
                !0 === i ? e.style.removeProperty("touch-action") : (e.style.touchAction = !0 === i ? "auto" : i ? "pan-" + i + (Ir.isTouch ? " pinch-zoom" : "") : "none"), e === jr && t(Yr, i);
            },
            qo = { auto: 1, scroll: 1 },
            Uo = function (t) {
                var e,
                    i = t.event,
                    n = t.target,
                    r = t.axis,
                    s = (i.changedTouches ? i.changedTouches[0] : i).target,
                    o = s._gsap || Lr.core.getCache(s),
                    a = ws();
                if (!o._isScrollT || a - o._isScrollT > 2e3) {
                    for (; s && s !== Yr && ((s.scrollHeight <= s.clientHeight && s.scrollWidth <= s.clientWidth) || (!qo[(e = qs(s)).overflowY] && !qo[e.overflowX])); ) s = s.parentNode;
                    (o._isScroll = s && s !== n && !Es(s) && (qo[(e = qs(s)).overflowY] || qo[e.overflowX])), (o._isScrollT = a);
                }
                (o._isScroll || "x" === r) && (i.stopPropagation(), (i._gsapAllow = !0));
            },
            Vo = function (t, e, i, n) {
                return Ir.create({
                    target: t,
                    capture: !0,
                    debounce: !1,
                    lockAxis: !0,
                    type: e,
                    onWheel: (n = n && Uo),
                    onPress: n,
                    onDrag: n,
                    onScroll: n,
                    onEnable: function () {
                        return i && Js(Br, Ir.eventTypes[0], Qo, !1, !0);
                    },
                    onDisable: function () {
                        return to(Br, Ir.eventTypes[0], Qo, !0);
                    },
                });
            },
            Go = /(input|label|select|textarea)/i,
            Qo = function (t) {
                var e = Go.test(t.target.tagName);
                (e || No) && ((t._gsapAllow = !0), (No = e));
            },
            Zo = function (t) {
                Bs(t) || (t = {}), (t.preventDefault = t.isNormalizer = t.allowClicks = !0), t.type || (t.type = "wheel,touch"), (t.debounce = !!t.debounce), (t.id = t.id || "normalizer");
                var e,
                    i,
                    n,
                    r,
                    s,
                    o,
                    a,
                    l,
                    c = t,
                    u = c.normalizeScrollX,
                    d = c.momentum,
                    p = c.allowNestedScroll,
                    h = c.onRelease,
                    f = Mr(t.target) || jr,
                    g = Lr.core.globals().ScrollSmoother,
                    v = g && g.get(),
                    m = cs && ((t.content && Mr(t.content)) || (v && !1 !== t.content && !v.smooth() && v.content())),
                    _ = Ar(f, Or),
                    y = Ar(f, $r),
                    w = 1,
                    T = (Ir.isTouch && Fr.visualViewport ? Fr.visualViewport.scale * Fr.visualViewport.width : Fr.outerWidth) / Fr.innerWidth,
                    b = 0,
                    k = Hs(d)
                        ? function () {
                              return d(e);
                          }
                        : function () {
                              return d || 2.8;
                          },
                    x = Vo(f, t.type, !0, p),
                    S = function () {
                        return (r = !1);
                    },
                    C = Os,
                    $ = Os,
                    O = function () {
                        (i = Rs(f, Or)), ($ = qr(cs ? 1 : 0, i)), u && (C = qr(0, Rs(f, $r))), (n = ko);
                    },
                    M = function () {
                        (m._gsap.y = Ms(parseFloat(m._gsap.y) + _.offset) + "px"), (m.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(m._gsap.y) + ", 0, 1)"), (_.offset = _.cacheID = 0);
                    },
                    A = function () {
                        O(), s.isActive() && s.vars.scrollY > i && (_() > i ? s.progress(1) && _(i) : s.resetTo("scrollY", i));
                    };
                return (
                    m && Lr.set(m, { y: "+=0" }),
                    (t.ignoreCheck = function (t) {
                        return (
                            (cs &&
                                "touchmove" === t.type &&
                                (function () {
                                    if (r) {
                                        requestAnimationFrame(S);
                                        var t = Ms(e.deltaY / 2),
                                            i = $(_.v - t);
                                        if (m && i !== _.v + _.offset) {
                                            _.offset = i - _.v;
                                            var n = Ms((parseFloat(m && m._gsap.y) || 0) - _.offset);
                                            (m.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + n + ", 0, 1)"), (m._gsap.y = n + "px"), (_.cacheID = mr.cache), Oo();
                                        }
                                        return !0;
                                    }
                                    _.offset && M(), (r = !0);
                                })()) ||
                            (w > 1.05 && "touchstart" !== t.type) ||
                            e.isGesturing ||
                            (t.touches && t.touches.length > 1)
                        );
                    }),
                    (t.onPress = function () {
                        r = !1;
                        var t = w;
                        (w = Ms(((Fr.visualViewport && Fr.visualViewport.scale) || 1) / T)), s.pause(), t !== w && Xo(f, w > 1.01 || (!u && "x")), (o = y()), (a = _()), O(), (n = ko);
                    }),
                    (t.onRelease = t.onGestureStart = function (t, e) {
                        if ((_.offset && M(), e)) {
                            mr.cache++;
                            var n,
                                r,
                                o = k();
                            u && ((r = (n = y()) + (0.05 * o * -t.velocityX) / 0.227), (o *= Wo(y, n, r, Rs(f, $r))), (s.vars.scrollX = C(r))),
                                (r = (n = _()) + (0.05 * o * -t.velocityY) / 0.227),
                                (o *= Wo(_, n, r, Rs(f, Or))),
                                (s.vars.scrollY = $(r)),
                                s.invalidate().duration(o).play(0.01),
                                ((cs && s.vars.scrollY >= i) || n >= i - 1) && Lr.to({}, { onUpdate: A, duration: o });
                        } else l.restart(!0);
                        h && h(t);
                    }),
                    (t.onWheel = function () {
                        s._ts && s.pause(), ws() - b > 1e3 && ((n = 0), (b = ws()));
                    }),
                    (t.onChange = function (t, e, i, r, s) {
                        if ((ko !== n && O(), e && u && y(C(r[2] === e ? o + (t.startX - t.x) : y() + e - r[1])), i)) {
                            _.offset && M();
                            var l = s[2] === i,
                                c = l ? a + t.startY - t.y : _() + i - s[1],
                                d = $(c);
                            l && c !== d && (a += d - c), _(d);
                        }
                        (i || e) && Oo();
                    }),
                    (t.onEnable = function () {
                        Xo(f, !u && "x"), Yo.addEventListener("refresh", A), Js(Fr, "resize", A), _.smooth && ((_.target.style.scrollBehavior = "auto"), (_.smooth = y.smooth = !1)), x.enable();
                    }),
                    (t.onDisable = function () {
                        Xo(f, !0), to(Fr, "resize", A), Yo.removeEventListener("refresh", A), x.kill();
                    }),
                    (t.lockAxis = !1 !== t.lockAxis),
                    ((e = new Ir(t)).iOS = cs),
                    cs && !_() && _(1),
                    cs && Lr.ticker.add(Os),
                    (l = e._dc),
                    (s = Lr.to(e, {
                        ease: "power4",
                        paused: !0,
                        scrollX: u ? "+=0.1" : "+=0",
                        scrollY: "+=0.1",
                        modifiers: {
                            scrollY: Fo(_, _(), function () {
                                return s.pause();
                            }),
                        },
                        onUpdate: Oo,
                        onComplete: l.vars.onComplete,
                    })),
                    e
                );
            };
        function Ko(t, e) {
            var i = e - t;
            return function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                return (t + i * Math.random()) * e;
            };
        }
        (Yo.sort = function (t) {
            return lo.sort(
                t ||
                    function (t, e) {
                        return -1e6 * (t.vars.refreshPriority || 0) + t.start - (e.start + -1e6 * (e.vars.refreshPriority || 0));
                    }
            );
        }),
            (Yo.observe = function (t) {
                return new Ir(t);
            }),
            (Yo.normalizeScroll = function (t) {
                if (void 0 === t) return ss;
                if (!0 === t && ss) return ss.enable();
                if (!1 === t) return ss && ss.kill();
                var e = t instanceof Ir ? t : Zo(t);
                return ss && ss.target === e.target && ss.kill(), Es(e.target) && (ss = e), e;
            }),
            (Yo.core = {
                _getVelocityProp: Pr,
                _inputObserver: Vo,
                _scrollers: mr,
                _proxies: _r,
                bridge: {
                    ss: function () {
                        bs || _o("scrollStart"), (bs = ws());
                    },
                    ref: function () {
                        return Gr;
                    },
                },
            }),
            Ps() && Lr.registerPlugin(Yo);
        var Jo = (function () {
            function t(t) {
                var e = t * (($(window).width() || 0) / 1920);
                return Math.max(Math.floor(e), 0);
            }
            return {
                floatingImage: function (e) {
                    var i = Ko(t(10), t(20)),
                        n = Ko(t(10), t(20)),
                        r = Ko(3, 5),
                        s = Ko(5, 10),
                        o = Ko(-3, 3);
                    function a(t, e) {
                        Jn.to(t, { rotation: o(e), duration: s(), ease: Yi.easeInOut, onComplete: a, onCompleteParams: [t, -1 * e] });
                    }
                    function l(t, e) {
                        Jn.to(t, { x: i(e), duration: r(), ease: Yi.easeInOut, onComplete: l, onCompleteParams: [t, -1 * e] });
                    }
                    function c(t, e) {
                        Jn.to(t, { y: n(e), duration: r(), ease: Yi.easeInOut, onComplete: c, onCompleteParams: [t, -1 * e] });
                    }
                    Jn.utils.toArray(e).forEach(function (t) {
                        l(t, 1), c(t, -1), a(t, 1);
                    });
                },
                init: function () {
                    this.floatingImage(".floating-image");
                },
            };
        })();
        $(function () {
            Jo.init();
        })
    },
]);
