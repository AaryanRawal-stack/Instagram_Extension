var Rl = (t, e) => () => (e || t((e = {
    exports: {}
}).exports, e), e.exports);
import {
    i as Ml,
    d as Ll,
    b as Ce,
    k as Nl,
    T as Pi,
    a as q,
    u as Kr,
    c as $e,
    r as L,
    e as U,
    o as y,
    f as N,
    w as S,
    g as De,
    h as I,
    n as z,
    j as l,
    E as Pe,
    l as ut,
    m as Y,
    p as O,
    q as oe,
    s as B,
    t as j,
    F as ye,
    v as w,
    x as zt,
    y as ws,
    _ as Ee,
    z as Fl,
    A as Ye,
    B as Qr,
    C as pe,
    D as An,
    G as We,
    H as Je,
    I as Zr,
    J as et,
    K as Oe,
    L as Er,
    M as jl,
    N as Ul,
    O as Ne,
    P as Yl,
    Q as Bl,
    R as jn,
    S as Xr,
    U as tt,
    V as Vl,
    W as Wl,
    X as Ot,
    Y as Js,
    Z as ss,
    $ as zl,
    a0 as Ms,
    a1 as eo,
    a2 as to,
    a3 as at,
    a4 as Xt,
    a5 as ks,
    a6 as Un,
    a7 as so,
    a8 as Di,
    a9 as Ke,
    aa as tn,
    ab as Hl,
    ac as no,
    ad as Ri,
    ae as Mi,
    af as Cn,
    ag as Es,
    ah as ro,
    ai as Gl,
    aj as ql,
    ak as oo,
    al as Jl,
    am as Kl,
    an as Ql,
    ao as Zl,
    ap as Xl,
    aq as eu,
    ar as Ir,
    as as tu,
    at as su,
    au as nu,
    av as ru,
    aw as Li,
    ax as ou,
    ay as iu,
    az as es,
    aA as js,
    aB as au,
    aC as Ls,
    aD as lu,
    aE as uu,
    aF as cu,
    aG as du,
    aH as io,
    aI as fu,
    aJ as Ss,
    aK as qo,
    aL as fr,
    aM as Rt,
    aN as ns,
    aO as hu,
    aP as mu,
    aQ as pu,
    aR as _u,
    aS as gu,
    aT as vu,
    aU as us,
    aV as yu,
    aW as Us,
    aX as Ni,
    aY as Mt,
    aZ as Jo,
    a_ as bu,
    a$ as wu,
    b0 as ku,
    b1 as Ko,
    b2 as Su,
    b3 as Tu,
    b4 as Fi,
    b5 as $n,
    b6 as xu,
    b7 as Is,
    b8 as Qo,
    b9 as Au,
    ba as Cu,
    bb as ms,
    bc as ps,
    bd as Ts,
    be as ji,
    bf as $u,
    bg as Eu,
    bh as se,
    bi as fe,
    bj as ie,
    bk as Yn,
    bl as Bn,
    bm as Vn,
    bn as Ui,
    bo as hr,
    bp as Fe,
    bq as Yi,
    br as ct,
    bs as Et,
    bt as gs,
    bu as Bi,
    bv as Wn,
    bw as zn,
    bx as st,
    by as rs,
    bz as Iu,
    bA as Ou,
    bB as Hn,
    bC as Gn,
    bD as qn,
    bE as En,
    bF as Pu,
    bG as Du,
    bH as Ru,
    bI as Mu,
    bJ as Me,
    bK as Vi,
    bL as Lu,
    bM as Nu,
    bN as Fu,
    bO as ju,
    bP as Uu,
    bQ as Yu,
    bR as Bu,
    bS as Vu,
    bT as Wu,
    bU as zu
} from "../4.7.4_0/dist/assets/__uno.bbc33e34.js";
var Z0 = Rl((tb, xn) => {
    function Hu(t, e) {
        for (var s = 0; s < e.length; s++) {
            const n = e[s];
            if (typeof n != "string" && !Array.isArray(n)) {
                for (const r in n)
                    if (r !== "default" && !(r in t)) {
                        const o = Object.getOwnPropertyDescriptor(n, r);
                        o && Object.defineProperty(t, r, o.get ? o : {
                            enumerable: !0,
                            get: () => n[r]
                        })
                    }
            }
        }
        return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }))
    }
    var Gu = "Expected a function";

    function Zo(t, e, s) {
        var n = !0,
            r = !0;
        if (typeof t != "function") throw new TypeError(Gu);
        return Ml(s) && (n = "leading" in s ? !!s.leading : n, r = "trailing" in s ? !!s.trailing : r), Ll(t, e, {
            leading: n,
            maxWait: e,
            trailing: r
        })
    }
    const qu = ["light", "dark"],
        Ju = Ce({
            title: {
                type: String,
                default: ""
            },
            description: {
                type: String,
                default: ""
            },
            type: {
                type: String,
                values: Nl(Pi),
                default: "info"
            },
            closable: {
                type: Boolean,
                default: !0
            },
            closeText: {
                type: String,
                default: ""
            },
            showIcon: Boolean,
            center: Boolean,
            effect: {
                type: String,
                values: qu,
                default: "light"
            }
        }),
        Ku = {
            close: t => t instanceof MouseEvent
        },
        Qu = q({
            name: "ElAlert"
        }),
        Zu = q({
            ...Qu,
            props: Ju,
            emits: Ku,
            setup(t, {
                emit: e
            }) {
                const s = t,
                    {
                        Close: n
                    } = Fl,
                    r = Kr(),
                    o = $e("alert"),
                    i = L(!0),
                    a = U(() => Pi[s.type]),
                    u = U(() => [o.e("icon"), {
                        [o.is("big")]: !!s.description || !!r.default
                    }]),
                    c = U(() => ({
                        [o.is("bold")]: s.description || r.default
                    })),
                    d = f => {
                        i.value = !1, e("close", f)
                    };
                return (f, h) => (y(), N(ws, {
                    name: l(o).b("fade"),
                    persisted: ""
                }, {
                    default: S(() => [De(I("div", {
                        class: z([l(o).b(), l(o).m(f.type), l(o).is("center", f.center), l(o).is(f.effect)]),
                        role: "alert"
                    }, [f.showIcon && l(a) ? (y(), N(l(Pe), {
                        key: 0,
                        class: z(l(u))
                    }, {
                        default: S(() => [(y(), N(ut(l(a))))]),
                        _: 1
                    }, 8, ["class"])) : Y("v-if", !0), I("div", {
                        class: z(l(o).e("content"))
                    }, [f.title || f.$slots.title ? (y(), O("span", {
                        key: 0,
                        class: z([l(o).e("title"), l(c)])
                    }, [oe(f.$slots, "title", {}, () => [B(j(f.title), 1)])], 2)) : Y("v-if", !0), f.$slots.default || f.description ? (y(), O("p", {
                        key: 1,
                        class: z(l(o).e("description"))
                    }, [oe(f.$slots, "default", {}, () => [B(j(f.description), 1)])], 2)) : Y("v-if", !0), f.closable ? (y(), O(ye, {
                        key: 2
                    }, [f.closeText ? (y(), O("div", {
                        key: 0,
                        class: z([l(o).e("close-btn"), l(o).is("customed")]),
                        onClick: d
                    }, j(f.closeText), 3)) : (y(), N(l(Pe), {
                        key: 1,
                        class: z(l(o).e("close-btn")),
                        onClick: d
                    }, {
                        default: S(() => [w(l(n))]),
                        _: 1
                    }, 8, ["class"]))], 64)) : Y("v-if", !0)], 2)], 2), [
                        [zt, i.value]
                    ])]),
                    _: 3
                }, 8, ["name"]))
            }
        });
    var Xu = Ee(Zu, [
        ["__file", "/home/runner/work/element-plus/element-plus/packages/components/alert/src/alert.vue"]
    ]);
    const ao = Ye(Xu),
        ec = Ce({
            size: {
                type: [Number, String],
                values: Qr,
                default: "",
                validator: t => pe(t)
            },
            shape: {
                type: String,
                values: ["circle", "square"],
                default: "circle"
            },
            icon: {
                type: An
            },
            src: {
                type: String,
                default: ""
            },
            alt: String,
            srcSet: String,
            fit: {
                type: We(String),
                default: "cover"
            }
        }),
        tc = {
            error: t => t instanceof Event
        },
        sc = ["src", "alt", "srcset"],
        nc = q({
            name: "ElAvatar"
        }),
        rc = q({
            ...nc,
            props: ec,
            emits: tc,
            setup(t, {
                emit: e
            }) {
                const s = t,
                    n = $e("avatar"),
                    r = L(!1),
                    o = U(() => {
                        const {
                            size: c,
                            icon: d,
                            shape: f
                        } = s, h = [n.b()];
                        return Je(c) && h.push(n.m(c)), d && h.push(n.m("icon")), f && h.push(n.m(f)), h
                    }),
                    i = U(() => {
                        const {
                            size: c
                        } = s;
                        return pe(c) ? n.cssVarBlock({
                            size: Zr(c) || ""
                        }) : void 0
                    }),
                    a = U(() => ({
                        objectFit: s.fit
                    }));
                et(() => s.src, () => r.value = !1);

                function u(c) {
                    r.value = !0, e("error", c)
                }
                return (c, d) => (y(), O("span", {
                    class: z(l(o)),
                    style: Oe(l(i))
                }, [(c.src || c.srcSet) && !r.value ? (y(), O("img", {
                    key: 0,
                    src: c.src,
                    alt: c.alt,
                    srcset: c.srcSet,
                    style: Oe(l(a)),
                    onError: u
                }, null, 44, sc)) : c.icon ? (y(), N(l(Pe), {
                    key: 1
                }, {
                    default: S(() => [(y(), N(ut(c.icon)))]),
                    _: 1
                })) : oe(c.$slots, "default", {
                    key: 2
                })], 6))
            }
        });
    var oc = Ee(rc, [
        ["__file", "/home/runner/work/element-plus/element-plus/packages/components/avatar/src/avatar.vue"]
    ]);
    const Wi = Ye(oc),
        ic = Ce({
            value: {
                type: [String, Number],
                default: ""
            },
            max: {
                type: Number,
                default: 99
            },
            isDot: Boolean,
            hidden: Boolean,
            type: {
                type: String,
                values: ["primary", "success", "warning", "info", "danger"],
                default: "danger"
            }
        }),
        ac = ["textContent"],
        lc = q({
            name: "ElBadge"
        }),
        uc = q({
            ...lc,
            props: ic,
            setup(t, {
                expose: e
            }) {
                const s = t,
                    n = $e("badge"),
                    r = U(() => s.isDot ? "" : pe(s.value) && pe(s.max) ? s.max < s.value ? `${s.max}+` : `${s.value}` : `${s.value}`);
                return e({
                    content: r
                }), (o, i) => (y(), O("div", {
                    class: z(l(n).b())
                }, [oe(o.$slots, "default"), w(ws, {
                    name: `${l(n).namespace.value}-zoom-in-center`,
                    persisted: ""
                }, {
                    default: S(() => [De(I("sup", {
                        class: z([l(n).e("content"), l(n).em("content", o.type), l(n).is("fixed", !!o.$slots.default), l(n).is("dot", o.isDot)]),
                        textContent: j(l(r))
                    }, null, 10, ac), [
                        [zt, !o.hidden && (l(r) || o.isDot)]
                    ])]),
                    _: 1
                }, 8, ["name"])], 2))
            }
        });
    var cc = Ee(uc, [
        ["__file", "/home/runner/work/element-plus/element-plus/packages/components/badge/src/badge.vue"]
    ]);
    const dc = Ye(cc),
        fc = 100,
        hc = 600,
        Xo = {
            beforeMount(t, e) {
                const s = e.value,
                    {
                        interval: n = fc,
                        delay: r = hc
                    } = Er(s) ? {} : s;
                let o, i;
                const a = () => Er(s) ? s() : s.handler(),
                    u = () => {
                        i && (clearTimeout(i), i = void 0), o && (clearInterval(o), o = void 0)
                    };
                t.addEventListener("mousedown", c => {
                    c.button === 0 && (u(), a(), document.addEventListener("mouseup", () => u(), {
                        once: !0
                    }), i = setTimeout(() => {
                        o = setInterval(() => {
                            a()
                        }, n)
                    }, r))
                })
            }
        },
        mc = Ce({
            initialIndex: {
                type: Number,
                default: 0
            },
            height: {
                type: String,
                default: ""
            },
            trigger: {
                type: String,
                values: ["hover", "click"],
                default: "hover"
            },
            autoplay: {
                type: Boolean,
                default: !0
            },
            interval: {
                type: Number,
                default: 3e3
            },
            indicatorPosition: {
                type: String,
                values: ["", "none", "outside"],
                default: ""
            },
            arrow: {
                type: String,
                values: ["always", "hover", "never"],
                default: "hover"
            },
            type: {
                type: String,
                values: ["", "card"],
                default: ""
            },
            loop: {
                type: Boolean,
                default: !0
            },
            direction: {
                type: String,
                values: ["horizontal", "vertical"],
                default: "horizontal"
            },
            pauseOnHover: {
                type: Boolean,
                default: !0
            }
        }),
        pc = {
            change: (t, e) => [t, e].every(pe)
        },
        zi = Symbol("carouselContextKey"),
        ei = 300,
        _c = (t, e, s) => {
            const {
                children: n,
                addChild: r,
                removeChild: o
            } = jl(Xr(), "ElCarouselItem"), i = L(-1), a = L(null), u = L(!1), c = L(), d = U(() => t.arrow !== "never" && !l(p)), f = U(() => n.value.some(D => D.props.label.toString().length > 0)), h = U(() => t.type === "card"), p = U(() => t.direction === "vertical"), _ = Zo(D => {
                g(D)
            }, ei, {
                trailing: !0
            }), v = Zo(D => {
                G(D)
            }, ei);

            function m() {
                a.value && (clearInterval(a.value), a.value = null)
            }

            function T() {
                t.interval <= 0 || !t.autoplay || a.value || (a.value = setInterval(() => k(), t.interval))
            }
            const k = () => {
                i.value < n.value.length - 1 ? i.value = i.value + 1 : t.loop && (i.value = 0)
            };

            function g(D) {
                if (Je(D)) {
                    const X = n.value.filter(_e => _e.props.name === D);
                    X.length > 0 && (D = n.value.indexOf(X[0]))
                }
                if (D = Number(D), Number.isNaN(D) || D !== Math.floor(D)) return;
                const H = n.value.length,
                    Z = i.value;
                D < 0 ? i.value = t.loop ? H - 1 : 0 : D >= H ? i.value = t.loop ? 0 : H - 1 : i.value = D, Z === i.value && C(Z), b()
            }

            function C(D) {
                n.value.forEach((H, Z) => {
                    H.translateItem(Z, i.value, D)
                })
            }

            function x(D, H) {
                var Z, X, _e, ge;
                const wt = l(n),
                    Ho = wt.length;
                if (Ho === 0 || !D.states.inStage) return !1;
                const $l = H + 1,
                    El = H - 1,
                    Go = Ho - 1,
                    Il = wt[Go].states.active,
                    Ol = wt[0].states.active,
                    Pl = (X = (Z = wt[$l]) == null ? void 0 : Z.states) == null ? void 0 : X.active,
                    Dl = (ge = (_e = wt[El]) == null ? void 0 : _e.states) == null ? void 0 : ge.active;
                return H === Go && Ol || Pl ? "left" : H === 0 && Il || Dl ? "right" : !1
            }

            function $() {
                u.value = !0, t.pauseOnHover && m()
            }

            function W() {
                u.value = !1, T()
            }

            function E(D) {
                l(p) || n.value.forEach((H, Z) => {
                    D === x(H, Z) && (H.states.hover = !0)
                })
            }

            function P() {
                l(p) || n.value.forEach(D => {
                    D.states.hover = !1
                })
            }

            function M(D) {
                i.value = D
            }

            function G(D) {
                t.trigger === "hover" && D !== i.value && (i.value = D)
            }

            function re() {
                g(i.value - 1)
            }

            function R() {
                g(i.value + 1)
            }

            function b() {
                m(), T()
            }
            et(() => i.value, (D, H) => {
                C(H), H > -1 && e("change", D, H)
            }), et(() => t.autoplay, D => {
                D ? T() : m()
            }), et(() => t.loop, () => {
                g(i.value)
            }), et(() => t.interval, () => {
                b()
            }), et(() => n.value, () => {
                n.value.length > 0 && g(t.initialIndex)
            });
            const A = Ul();
            return Ne(() => {
                A.value = Yl(c.value, () => {
                    C()
                }), T()
            }), Bl(() => {
                m(), c.value && A.value && A.value.stop()
            }), jn(zi, {
                root: c,
                isCardType: h,
                isVertical: p,
                items: n,
                loop: t.loop,
                addItem: r,
                removeItem: o,
                setActiveItem: g
            }), {
                root: c,
                activeIndex: i,
                arrowDisplay: d,
                hasLabel: f,
                hover: u,
                isCardType: h,
                items: n,
                handleButtonEnter: E,
                handleButtonLeave: P,
                handleIndicatorClick: M,
                handleMouseEnter: $,
                handleMouseLeave: W,
                setActiveItem: g,
                prev: re,
                next: R,
                throttledArrowClick: _,
                throttledIndicatorHover: v
            }
        },
        gc = ["onMouseenter", "onClick"],
        vc = {
            key: 0
        },
        yc = "ElCarousel",
        bc = q({
            name: yc
        }),
        wc = q({
            ...bc,
            props: mc,
            emits: pc,
            setup(t, {
                expose: e,
                emit: s
            }) {
                const n = t,
                    {
                        root: r,
                        activeIndex: o,
                        arrowDisplay: i,
                        hasLabel: a,
                        hover: u,
                        isCardType: c,
                        items: d,
                        handleButtonEnter: f,
                        handleButtonLeave: h,
                        handleIndicatorClick: p,
                        handleMouseEnter: _,
                        handleMouseLeave: v,
                        setActiveItem: m,
                        prev: T,
                        next: k,
                        throttledArrowClick: g,
                        throttledIndicatorHover: C
                    } = _c(n, s),
                    x = $e("carousel"),
                    $ = U(() => {
                        const E = [x.b(), x.m(n.direction)];
                        return l(c) && E.push(x.m("card")), E
                    }),
                    W = U(() => {
                        const E = [x.e("indicators"), x.em("indicators", n.direction)];
                        return l(a) && E.push(x.em("indicators", "labels")), (n.indicatorPosition === "outside" || l(c)) && E.push(x.em("indicators", "outside")), E
                    });
                return e({
                    setActiveItem: m,
                    prev: T,
                    next: k
                }), (E, P) => (y(), O("div", {
                    ref_key: "root",
                    ref: r,
                    class: z(l($)),
                    onMouseenter: P[6] || (P[6] = tt((...M) => l(_) && l(_)(...M), ["stop"])),
                    onMouseleave: P[7] || (P[7] = tt((...M) => l(v) && l(v)(...M), ["stop"]))
                }, [I("div", {
                    class: z(l(x).e("container")),
                    style: Oe({
                        height: E.height
                    })
                }, [l(i) ? (y(), N(ws, {
                    key: 0,
                    name: "carousel-arrow-left",
                    persisted: ""
                }, {
                    default: S(() => [De(I("button", {
                        type: "button",
                        class: z([l(x).e("arrow"), l(x).em("arrow", "left")]),
                        onMouseenter: P[0] || (P[0] = M => l(f)("left")),
                        onMouseleave: P[1] || (P[1] = (...M) => l(h) && l(h)(...M)),
                        onClick: P[2] || (P[2] = tt(M => l(g)(l(o) - 1), ["stop"]))
                    }, [w(l(Pe), null, {
                        default: S(() => [w(l(Vl))]),
                        _: 1
                    })], 34), [
                        [zt, (E.arrow === "always" || l(u)) && (n.loop || l(o) > 0)]
                    ])]),
                    _: 1
                })) : Y("v-if", !0), l(i) ? (y(), N(ws, {
                    key: 1,
                    name: "carousel-arrow-right",
                    persisted: ""
                }, {
                    default: S(() => [De(I("button", {
                        type: "button",
                        class: z([l(x).e("arrow"), l(x).em("arrow", "right")]),
                        onMouseenter: P[3] || (P[3] = M => l(f)("right")),
                        onMouseleave: P[4] || (P[4] = (...M) => l(h) && l(h)(...M)),
                        onClick: P[5] || (P[5] = tt(M => l(g)(l(o) + 1), ["stop"]))
                    }, [w(l(Pe), null, {
                        default: S(() => [w(l(Wl))]),
                        _: 1
                    })], 34), [
                        [zt, (E.arrow === "always" || l(u)) && (n.loop || l(o) < l(d).length - 1)]
                    ])]),
                    _: 1
                })) : Y("v-if", !0), oe(E.$slots, "default")], 6), E.indicatorPosition !== "none" ? (y(), O("ul", {
                    key: 0,
                    class: z(l(W))
                }, [(y(!0), O(ye, null, Ot(l(d), (M, G) => (y(), O("li", {
                    key: G,
                    class: z([l(x).e("indicator"), l(x).em("indicator", E.direction), l(x).is("active", G === l(o))]),
                    onMouseenter: re => l(C)(G),
                    onClick: tt(re => l(p)(G), ["stop"])
                }, [I("button", {
                    class: z(l(x).e("button"))
                }, [l(a) ? (y(), O("span", vc, j(M.props.label), 1)) : Y("v-if", !0)], 2)], 42, gc))), 128))], 2)) : Y("v-if", !0)], 34))
            }
        });
    var kc = Ee(wc, [
        ["__file", "/home/runner/work/element-plus/element-plus/packages/components/carousel/src/carousel.vue"]
    ]);
    const Sc = Ce({
            name: {
                type: String,
                default: ""
            },
            label: {
                type: [String, Number],
                default: ""
            }
        }),
        Tc = (t, e) => {
            const s = Js(zi),
                n = Xr(),
                r = .83,
                o = L(!1),
                i = L(0),
                a = L(1),
                u = L(!1),
                c = L(!1),
                d = L(!1),
                f = L(!1),
                {
                    isCardType: h,
                    isVertical: p
                } = s;

            function _(g, C, x) {
                const $ = x - 1,
                    W = C - 1,
                    E = C + 1,
                    P = x / 2;
                return C === 0 && g === $ ? -1 : C === $ && g === 0 ? x : g < W && C - g >= P ? x + 1 : g > E && g - C >= P ? -2 : g
            }

            function v(g, C) {
                var x;
                const $ = ((x = s.root.value) == null ? void 0 : x.offsetWidth) || 0;
                return d.value ? $ * ((2 - r) * (g - C) + 1) / 4 : g < C ? -(1 + r) * $ / 4 : (3 + r) * $ / 4
            }

            function m(g, C, x) {
                const $ = s.root.value;
                return $ ? ((x ? $.offsetHeight : $.offsetWidth) || 0) * (g - C) : 0
            }
            const T = (g, C, x) => {
                var $;
                const W = l(h),
                    E = ($ = s.items.value.length) != null ? $ : Number.NaN,
                    P = g === C;
                !W && !Ms(x) && (f.value = P || g === x), !P && E > 2 && s.loop && (g = _(g, C, E));
                const M = l(p);
                u.value = P, W ? (d.value = Math.round(Math.abs(g - C)) <= 1, i.value = v(g, C), a.value = l(u) ? 1 : r) : i.value = m(g, C, M), c.value = !0
            };

            function k() {
                if (s && l(h)) {
                    const g = s.items.value.findIndex(({
                        uid: C
                    }) => C === n.uid);
                    s.setActiveItem(g)
                }
            }
            return Ne(() => {
                s.addItem({
                    props: t,
                    states: ss({
                        hover: o,
                        translate: i,
                        scale: a,
                        active: u,
                        ready: c,
                        inStage: d,
                        animating: f
                    }),
                    uid: n.uid,
                    translateItem: T
                })
            }), zl(() => {
                s.removeItem(n.uid)
            }), {
                active: u,
                animating: f,
                hover: o,
                inStage: d,
                isVertical: p,
                translate: i,
                isCardType: h,
                scale: a,
                ready: c,
                handleItemClick: k
            }
        },
        xc = q({
            name: "ElCarouselItem"
        }),
        Ac = q({
            ...xc,
            props: Sc,
            setup(t) {
                const e = t,
                    s = $e("carousel"),
                    {
                        active: n,
                        animating: r,
                        hover: o,
                        inStage: i,
                        isVertical: a,
                        translate: u,
                        isCardType: c,
                        scale: d,
                        ready: f,
                        handleItemClick: h
                    } = Tc(e),
                    p = U(() => {
                        const v = `${`translate${l(a)?"Y":"X"}`}(${l(u)}px)`,
                            m = `scale(${l(d)})`;
                        return {
                            transform: [v, m].join(" ")
                        }
                    });
                return (_, v) => De((y(), O("div", {
                    class: z([l(s).e("item"), l(s).is("active", l(n)), l(s).is("in-stage", l(i)), l(s).is("hover", l(o)), l(s).is("animating", l(r)), {
                        [l(s).em("item", "card")]: l(c)
                    }]),
                    style: Oe(l(p)),
                    onClick: v[0] || (v[0] = (...m) => l(h) && l(h)(...m))
                }, [l(c) ? De((y(), O("div", {
                    key: 0,
                    class: z(l(s).e("mask"))
                }, null, 2)), [
                    [zt, !l(n)]
                ]) : Y("v-if", !0), oe(_.$slots, "default")], 6)), [
                    [zt, l(f)]
                ])
            }
        });
    var Hi = Ee(Ac, [
        ["__file", "/home/runner/work/element-plus/element-plus/packages/components/carousel/src/carousel-item.vue"]
    ]);
    const Cc = Ye(kc, {
            CarouselItem: Hi
        }),
        $c = eo(Hi),
        Gi = Ce({
            size: to,
            disabled: Boolean,
            label: {
                type: [String, Number, Boolean],
                default: ""
            }
        }),
        Ec = Ce({
            ...Gi,
            modelValue: {
                type: [String, Number, Boolean],
                default: ""
            },
            name: {
                type: String,
                default: ""
            },
            border: Boolean
        }),
        qi = {
            [at]: t => Je(t) || pe(t) || Xt(t),
            [ks]: t => Je(t) || pe(t) || Xt(t)
        },
        Ji = Symbol("radioGroupKey"),
        Ki = (t, e) => {
            const s = L(),
                n = Js(Ji, void 0),
                r = U(() => !!n),
                o = U({
                    get() {
                        return r.value ? n.modelValue : t.modelValue
                    },
                    set(d) {
                        r.value ? n.changeEvent(d) : e && e(at, d), s.value.checked = t.modelValue === t.label
                    }
                }),
                i = Un(U(() => n == null ? void 0 : n.size)),
                a = so(U(() => n == null ? void 0 : n.disabled)),
                u = L(!1),
                c = U(() => a.value || r.value && o.value !== t.label ? -1 : 0);
            return {
                radioRef: s,
                isGroup: r,
                radioGroup: n,
                focus: u,
                size: i,
                disabled: a,
                tabIndex: c,
                modelValue: o
            }
        },
        Ic = ["value", "name", "disabled"],
        Oc = q({
            name: "ElRadio"
        }),
        Pc = q({
            ...Oc,
            props: Ec,
            emits: qi,
            setup(t, {
                emit: e
            }) {
                const s = t,
                    n = $e("radio"),
                    {
                        radioRef: r,
                        radioGroup: o,
                        focus: i,
                        size: a,
                        disabled: u,
                        modelValue: c
                    } = Ki(s, e);

                function d() {
                    tn(() => e("change", c.value))
                }
                return (f, h) => {
                    var p;
                    return y(), O("label", {
                        class: z([l(n).b(), l(n).is("disabled", l(u)), l(n).is("focus", l(i)), l(n).is("bordered", f.border), l(n).is("checked", l(c) === f.label), l(n).m(l(a))])
                    }, [I("span", {
                        class: z([l(n).e("input"), l(n).is("disabled", l(u)), l(n).is("checked", l(c) === f.label)])
                    }, [De(I("input", {
                        ref_key: "radioRef",
                        ref: r,
                        "onUpdate:modelValue": h[0] || (h[0] = _ => Ke(c) ? c.value = _ : null),
                        class: z(l(n).e("original")),
                        value: f.label,
                        name: f.name || ((p = l(o)) == null ? void 0 : p.name),
                        disabled: l(u),
                        type: "radio",
                        onFocus: h[1] || (h[1] = _ => i.value = !0),
                        onBlur: h[2] || (h[2] = _ => i.value = !1),
                        onChange: d
                    }, null, 42, Ic), [
                        [Di, l(c)]
                    ]), I("span", {
                        class: z(l(n).e("inner"))
                    }, null, 2)], 2), I("span", {
                        class: z(l(n).e("label")),
                        onKeydown: h[3] || (h[3] = tt(() => {}, ["stop"]))
                    }, [oe(f.$slots, "default", {}, () => [B(j(f.label), 1)])], 34)], 2)
                }
            }
        });
    var Dc = Ee(Pc, [
        ["__file", "/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio.vue"]
    ]);
    const Rc = Ce({
            ...Gi,
            name: {
                type: String,
                default: ""
            }
        }),
        Mc = ["value", "name", "disabled"],
        Lc = q({
            name: "ElRadioButton"
        }),
        Nc = q({
            ...Lc,
            props: Rc,
            setup(t) {
                const e = t,
                    s = $e("radio"),
                    {
                        radioRef: n,
                        focus: r,
                        size: o,
                        disabled: i,
                        modelValue: a,
                        radioGroup: u
                    } = Ki(e),
                    c = U(() => ({
                        backgroundColor: (u == null ? void 0 : u.fill) || "",
                        borderColor: (u == null ? void 0 : u.fill) || "",
                        boxShadow: u != null && u.fill ? `-1px 0 0 0 ${u.fill}` : "",
                        color: (u == null ? void 0 : u.textColor) || ""
                    }));
                return (d, f) => {
                    var h;
                    return y(), O("label", {
                        class: z([l(s).b("button"), l(s).is("active", l(a) === d.label), l(s).is("disabled", l(i)), l(s).is("focus", l(r)), l(s).bm("button", l(o))])
                    }, [De(I("input", {
                        ref_key: "radioRef",
                        ref: n,
                        "onUpdate:modelValue": f[0] || (f[0] = p => Ke(a) ? a.value = p : null),
                        class: z(l(s).be("button", "original-radio")),
                        value: d.label,
                        type: "radio",
                        name: d.name || ((h = l(u)) == null ? void 0 : h.name),
                        disabled: l(i),
                        onFocus: f[1] || (f[1] = p => r.value = !0),
                        onBlur: f[2] || (f[2] = p => r.value = !1)
                    }, null, 42, Mc), [
                        [Di, l(a)]
                    ]), I("span", {
                        class: z(l(s).be("button", "inner")),
                        style: Oe(l(a) === d.label ? l(c) : {}),
                        onKeydown: f[3] || (f[3] = tt(() => {}, ["stop"]))
                    }, [oe(d.$slots, "default", {}, () => [B(j(d.label), 1)])], 38)], 2)
                }
            }
        });
    var Qi = Ee(Nc, [
        ["__file", "/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-button.vue"]
    ]);
    const Fc = Ce({
            id: {
                type: String,
                default: void 0
            },
            size: to,
            disabled: Boolean,
            modelValue: {
                type: [String, Number, Boolean],
                default: ""
            },
            fill: {
                type: String,
                default: ""
            },
            label: {
                type: String,
                default: void 0
            },
            textColor: {
                type: String,
                default: ""
            },
            name: {
                type: String,
                default: void 0
            },
            validateEvent: {
                type: Boolean,
                default: !0
            }
        }),
        jc = qi,
        Uc = ["id", "aria-label", "aria-labelledby"],
        Yc = q({
            name: "ElRadioGroup"
        }),
        Bc = q({
            ...Yc,
            props: Fc,
            emits: jc,
            setup(t, {
                emit: e
            }) {
                const s = t,
                    n = $e("radio"),
                    r = Hl(),
                    o = L(),
                    {
                        formItem: i
                    } = no(),
                    {
                        inputId: a,
                        isLabeledByFormItem: u
                    } = Ri(s, {
                        formItemContext: i
                    }),
                    c = f => {
                        e(at, f), tn(() => e("change", f))
                    };
                Ne(() => {
                    const f = o.value.querySelectorAll("[type=radio]"),
                        h = f[0];
                    !Array.from(f).some(p => p.checked) && h && (h.tabIndex = 0)
                });
                const d = U(() => s.name || r.value);
                return jn(Ji, ss({
                    ...Mi(s),
                    changeEvent: c,
                    name: d
                })), et(() => s.modelValue, () => {
                    s.validateEvent && (i == null || i.validate("change").catch(f => Cn()))
                }), (f, h) => (y(), O("div", {
                    id: l(a),
                    ref_key: "radioGroupRef",
                    ref: o,
                    class: z(l(n).b("group")),
                    role: "radiogroup",
                    "aria-label": l(u) ? void 0 : f.label || "radio-group",
                    "aria-labelledby": l(u) ? l(i).labelId : void 0
                }, [oe(f.$slots, "default")], 10, Uc))
            }
        });
    var Zi = Ee(Bc, [
        ["__file", "/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-group.vue"]
    ]);
    Ye(Dc, {
        RadioButton: Qi,
        RadioGroup: Zi
    });
    const Xi = eo(Zi),
        ea = eo(Qi),
        ta = Symbol("rowContextKey"),
        Vc = ["start", "center", "end", "space-around", "space-between", "space-evenly"],
        Wc = ["top", "middle", "bottom"],
        zc = Ce({
            tag: {
                type: String,
                default: "div"
            },
            gutter: {
                type: Number,
                default: 0
            },
            justify: {
                type: String,
                values: Vc,
                default: "start"
            },
            align: {
                type: String,
                values: Wc,
                default: "top"
            }
        }),
        Hc = q({
            name: "ElRow"
        }),
        Gc = q({
            ...Hc,
            props: zc,
            setup(t) {
                const e = t,
                    s = $e("row"),
                    n = U(() => e.gutter);
                jn(ta, {
                    gutter: n
                });
                const r = U(() => {
                        const i = {};
                        return e.gutter && (i.marginRight = i.marginLeft = `-${e.gutter/2}px`), i
                    }),
                    o = U(() => [s.b(), s.is(`justify-${e.justify}`, e.justify !== "start"), s.is(`align-${e.align}`, e.align !== "top")]);
                return (i, a) => (y(), N(ut(i.tag), {
                    class: z(l(o)),
                    style: Oe(l(r))
                }, {
                    default: S(() => [oe(i.$slots, "default")]),
                    _: 3
                }, 8, ["class", "style"]))
            }
        });
    var qc = Ee(Gc, [
        ["__file", "/home/runner/work/element-plus/element-plus/packages/components/row/src/row.vue"]
    ]);
    const lo = Ye(qc),
        Jc = Ce({
            tag: {
                type: String,
                default: "div"
            },
            span: {
                type: Number,
                default: 24
            },
            offset: {
                type: Number,
                default: 0
            },
            pull: {
                type: Number,
                default: 0
            },
            push: {
                type: Number,
                default: 0
            },
            xs: {
                type: We([Number, Object]),
                default: () => Es({})
            },
            sm: {
                type: We([Number, Object]),
                default: () => Es({})
            },
            md: {
                type: We([Number, Object]),
                default: () => Es({})
            },
            lg: {
                type: We([Number, Object]),
                default: () => Es({})
            },
            xl: {
                type: We([Number, Object]),
                default: () => Es({})
            }
        }),
        Kc = q({
            name: "ElCol"
        }),
        Qc = q({
            ...Kc,
            props: Jc,
            setup(t) {
                const e = t,
                    {
                        gutter: s
                    } = Js(ta, {
                        gutter: U(() => 0)
                    }),
                    n = $e("col"),
                    r = U(() => {
                        const i = {};
                        return s.value && (i.paddingLeft = i.paddingRight = `${s.value/2}px`), i
                    }),
                    o = U(() => {
                        const i = [];
                        return ["span", "offset", "pull", "push"].forEach(c => {
                            const d = e[c];
                            pe(d) && (c === "span" ? i.push(n.b(`${e[c]}`)) : d > 0 && i.push(n.b(`${c}-${e[c]}`)))
                        }), ["xs", "sm", "md", "lg", "xl"].forEach(c => {
                            pe(e[c]) ? i.push(n.b(`${c}-${e[c]}`)) : ro(e[c]) && Object.entries(e[c]).forEach(([d, f]) => {
                                i.push(d !== "span" ? n.b(`${c}-${d}-${f}`) : n.b(`${c}-${f}`))
                            })
                        }), s.value && i.push(n.is("guttered")), [n.b(), i]
                    });
                return (i, a) => (y(), N(ut(i.tag), {
                    class: z(l(o)),
                    style: Oe(l(r))
                }, {
                    default: S(() => [oe(i.$slots, "default")]),
                    _: 3
                }, 8, ["class", "style"]))
            }
        });
    var Zc = Ee(Qc, [
        ["__file", "/home/runner/work/element-plus/element-plus/packages/components/col/src/col.vue"]
    ]);
    const uo = Ye(Zc),
        sa = Symbol("dialogInjectionKey"),
        Xc = ["aria-label"],
        ed = ["id"],
        td = q({
            name: "ElDialogContent"
        }),
        sd = q({
            ...td,
            props: Gl,
            emits: ql,
            setup(t) {
                const e = t,
                    {
                        t: s
                    } = oo(),
                    {
                        Close: n
                    } = Ql,
                    {
                        dialogRef: r,
                        headerRef: o,
                        bodyId: i,
                        ns: a,
                        style: u
                    } = Js(sa),
                    {
                        focusTrapRef: c
                    } = Js(Jl),
                    d = Zl(c, r),
                    f = U(() => e.draggable);
                return Kl(r, o, f), (h, p) => (y(), O("div", {
                    ref: l(d),
                    class: z([l(a).b(), l(a).is("fullscreen", h.fullscreen), l(a).is("draggable", l(f)), l(a).is("align-center", h.alignCenter), {
                        [l(a).m("center")]: h.center
                    }, h.customClass]),
                    style: Oe(l(u)),
                    tabindex: "-1"
                }, [I("header", {
                    ref_key: "headerRef",
                    ref: o,
                    class: z(l(a).e("header"))
                }, [oe(h.$slots, "header", {}, () => [I("span", {
                    role: "heading",
                    class: z(l(a).e("title"))
                }, j(h.title), 3)]), h.showClose ? (y(), O("button", {
                    key: 0,
                    "aria-label": l(s)("el.dialog.close"),
                    class: z(l(a).e("headerbtn")),
                    type: "button",
                    onClick: p[0] || (p[0] = _ => h.$emit("close"))
                }, [w(l(Pe), {
                    class: z(l(a).e("close"))
                }, {
                    default: S(() => [(y(), N(ut(h.closeIcon || l(n))))]),
                    _: 1
                }, 8, ["class"])], 10, Xc)) : Y("v-if", !0)], 2), I("div", {
                    id: l(i),
                    class: z(l(a).e("body"))
                }, [oe(h.$slots, "default")], 10, ed), h.$slots.footer ? (y(), O("footer", {
                    key: 0,
                    class: z(l(a).e("footer"))
                }, [oe(h.$slots, "footer")], 2)) : Y("v-if", !0)], 6))
            }
        });
    var nd = Ee(sd, [
        ["__file", "/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog-content.vue"]
    ]);
    const rd = ["aria-label", "aria-labelledby", "aria-describedby"],
        od = q({
            name: "ElDialog",
            inheritAttrs: !1
        }),
        id = q({
            ...od,
            props: Xl,
            emits: eu,
            setup(t, {
                expose: e
            }) {
                const s = t,
                    n = Kr();
                Ir({
                    scope: "el-dialog",
                    from: "the title slot",
                    replacement: "the header slot",
                    version: "3.0.0",
                    ref: "https://element-plus.org/en-US/component/dialog.html#slots"
                }, U(() => !!n.title)), Ir({
                    scope: "el-dialog",
                    from: "custom-class",
                    replacement: "class",
                    version: "2.3.0",
                    ref: "https://element-plus.org/en-US/component/dialog.html#attributes",
                    type: "Attribute"
                }, U(() => !!s.customClass));
                const r = $e("dialog"),
                    o = L(),
                    i = L(),
                    a = L(),
                    {
                        visible: u,
                        titleId: c,
                        bodyId: d,
                        style: f,
                        overlayDialogStyle: h,
                        rendered: p,
                        zIndex: _,
                        afterEnter: v,
                        afterLeave: m,
                        beforeLeave: T,
                        handleClose: k,
                        onModalClick: g,
                        onOpenAutoFocus: C,
                        onCloseAutoFocus: x,
                        onCloseRequested: $,
                        onFocusoutPrevented: W
                    } = tu(s, o);
                jn(sa, {
                    dialogRef: o,
                    headerRef: i,
                    bodyId: d,
                    ns: r,
                    rendered: p,
                    style: f
                });
                const E = su(g),
                    P = U(() => s.draggable && !s.fullscreen);
                return e({
                    visible: u,
                    dialogContentRef: a
                }), (M, G) => (y(), N(iu, {
                    to: "body",
                    disabled: !M.appendToBody
                }, [w(ws, {
                    name: "dialog-fade",
                    onAfterEnter: l(v),
                    onAfterLeave: l(m),
                    onBeforeLeave: l(T),
                    persisted: ""
                }, {
                    default: S(() => [De(w(l(nu), {
                        "custom-mask-event": "",
                        mask: M.modal,
                        "overlay-class": M.modalClass,
                        "z-index": l(_)
                    }, {
                        default: S(() => [I("div", {
                            role: "dialog",
                            "aria-modal": "true",
                            "aria-label": M.title || void 0,
                            "aria-labelledby": M.title ? void 0 : l(c),
                            "aria-describedby": l(d),
                            class: z(`${l(r).namespace.value}-overlay-dialog`),
                            style: Oe(l(h)),
                            onClick: G[0] || (G[0] = (...re) => l(E).onClick && l(E).onClick(...re)),
                            onMousedown: G[1] || (G[1] = (...re) => l(E).onMousedown && l(E).onMousedown(...re)),
                            onMouseup: G[2] || (G[2] = (...re) => l(E).onMouseup && l(E).onMouseup(...re))
                        }, [w(l(ru), {
                            loop: "",
                            trapped: l(u),
                            "focus-start-el": "container",
                            onFocusAfterTrapped: l(C),
                            onFocusAfterReleased: l(x),
                            onFocusoutPrevented: l(W),
                            onReleaseRequested: l($)
                        }, {
                            default: S(() => [l(p) ? (y(), N(nd, Li({
                                key: 0,
                                ref_key: "dialogContentRef",
                                ref: a
                            }, M.$attrs, {
                                "custom-class": M.customClass,
                                center: M.center,
                                "align-center": M.alignCenter,
                                "close-icon": M.closeIcon,
                                draggable: l(P),
                                fullscreen: M.fullscreen,
                                "show-close": M.showClose,
                                title: M.title,
                                onClose: l(k)
                            }), ou({
                                header: S(() => [M.$slots.title ? oe(M.$slots, "title", {
                                    key: 1
                                }) : oe(M.$slots, "header", {
                                    key: 0,
                                    close: l(k),
                                    titleId: l(c),
                                    titleClass: l(r).e("title")
                                })]),
                                default: S(() => [oe(M.$slots, "default")]),
                                _: 2
                            }, [M.$slots.footer ? {
                                name: "footer",
                                fn: S(() => [oe(M.$slots, "footer")])
                            } : void 0]), 1040, ["custom-class", "center", "align-center", "close-icon", "draggable", "fullscreen", "show-close", "title", "onClose"])) : Y("v-if", !0)]),
                            _: 3
                        }, 8, ["trapped", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusoutPrevented", "onReleaseRequested"])], 46, rd)]),
                        _: 3
                    }, 8, ["mask", "overlay-class", "z-index"]), [
                        [zt, l(u)]
                    ])]),
                    _: 3
                }, 8, ["onAfterEnter", "onAfterLeave", "onBeforeLeave"])], 8, ["disabled"]))
            }
        });
    var ad = Ee(id, [
        ["__file", "/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog.vue"]
    ]);
    const xs = Ye(ad),
        ld = Ce({
            id: {
                type: String,
                default: void 0
            },
            step: {
                type: Number,
                default: 1
            },
            stepStrictly: Boolean,
            max: {
                type: Number,
                default: Number.POSITIVE_INFINITY
            },
            min: {
                type: Number,
                default: Number.NEGATIVE_INFINITY
            },
            modelValue: Number,
            readonly: Boolean,
            disabled: Boolean,
            size: to,
            controls: {
                type: Boolean,
                default: !0
            },
            controlsPosition: {
                type: String,
                default: "",
                values: ["", "right"]
            },
            valueOnClear: {
                type: [String, Number, null],
                validator: t => t === null || pe(t) || ["min", "max"].includes(t),
                default: null
            },
            name: String,
            label: String,
            placeholder: String,
            precision: {
                type: Number,
                validator: t => t >= 0 && t === Number.parseInt(`${t}`, 10)
            },
            validateEvent: {
                type: Boolean,
                default: !0
            }
        }),
        ud = {
            [ks]: (t, e) => e !== t,
            blur: t => t instanceof FocusEvent,
            focus: t => t instanceof FocusEvent,
            [es]: t => pe(t) || js(t),
            [at]: t => pe(t) || js(t)
        },
        cd = ["aria-label", "onKeydown"],
        dd = ["aria-label", "onKeydown"],
        fd = q({
            name: "ElInputNumber"
        }),
        hd = q({
            ...fd,
            props: ld,
            emits: ud,
            setup(t, {
                expose: e,
                emit: s
            }) {
                const n = t,
                    {
                        t: r
                    } = oo(),
                    o = $e("input-number"),
                    i = L(),
                    a = ss({
                        currentValue: n.modelValue,
                        userInput: null
                    }),
                    {
                        formItem: u
                    } = no(),
                    c = U(() => pe(n.modelValue) && n.modelValue <= n.min),
                    d = U(() => pe(n.modelValue) && n.modelValue >= n.max),
                    f = U(() => {
                        const R = T(n.step);
                        return Ms(n.precision) ? Math.max(T(n.modelValue), R) : (R > n.precision, n.precision)
                    }),
                    h = U(() => n.controls && n.controlsPosition === "right"),
                    p = Un(),
                    _ = so(),
                    v = U(() => {
                        if (a.userInput !== null) return a.userInput;
                        let R = a.currentValue;
                        if (js(R)) return "";
                        if (pe(R)) {
                            if (Number.isNaN(R)) return "";
                            Ms(n.precision) || (R = R.toFixed(n.precision))
                        }
                        return R
                    }),
                    m = (R, b) => {
                        if (Ms(b) && (b = f.value), b === 0) return Math.round(R);
                        let A = String(R);
                        const D = A.indexOf(".");
                        if (D === -1 || !A.replace(".", "").split("")[D + b]) return R;
                        const X = A.length;
                        return A.charAt(X - 1) === "5" && (A = `${A.slice(0,Math.max(0,X-1))}6`), Number.parseFloat(Number(A).toFixed(b))
                    },
                    T = R => {
                        if (js(R)) return 0;
                        const b = R.toString(),
                            A = b.indexOf(".");
                        let D = 0;
                        return A !== -1 && (D = b.length - A - 1), D
                    },
                    k = (R, b = 1) => pe(R) ? m(R + n.step * b) : a.currentValue,
                    g = () => {
                        if (n.readonly || _.value || d.value) return;
                        const R = Number(v.value) || 0,
                            b = k(R);
                        $(b), s(es, a.currentValue)
                    },
                    C = () => {
                        if (n.readonly || _.value || c.value) return;
                        const R = Number(v.value) || 0,
                            b = k(R, -1);
                        $(b), s(es, a.currentValue)
                    },
                    x = (R, b) => {
                        const {
                            max: A,
                            min: D,
                            step: H,
                            precision: Z,
                            stepStrictly: X,
                            valueOnClear: _e
                        } = n;
                        let ge = Number(R);
                        if (js(R) || Number.isNaN(ge)) return null;
                        if (R === "") {
                            if (_e === null) return null;
                            ge = Je(_e) ? {
                                min: D,
                                max: A
                            } [_e] : _e
                        }
                        return X && (ge = m(Math.round(ge / H) * H, Z)), Ms(Z) || (ge = m(ge, Z)), (ge > A || ge < D) && (ge = ge > A ? A : D, b && s(at, ge)), ge
                    },
                    $ = (R, b = !0) => {
                        var A;
                        const D = a.currentValue,
                            H = x(R);
                        if (!b) {
                            s(at, H);
                            return
                        }
                        D !== H && (a.userInput = null, s(at, H), s(ks, H, D), n.validateEvent && ((A = u == null ? void 0 : u.validate) == null || A.call(u, "change").catch(Z => Cn())), a.currentValue = H)
                    },
                    W = R => {
                        a.userInput = R;
                        const b = R === "" ? null : Number(R);
                        s(es, b), $(b, !1)
                    },
                    E = R => {
                        const b = R !== "" ? Number(R) : "";
                        (pe(b) && !Number.isNaN(b) || R === "") && $(b), a.userInput = null
                    },
                    P = () => {
                        var R, b;
                        (b = (R = i.value) == null ? void 0 : R.focus) == null || b.call(R)
                    },
                    M = () => {
                        var R, b;
                        (b = (R = i.value) == null ? void 0 : R.blur) == null || b.call(R)
                    },
                    G = R => {
                        s("focus", R)
                    },
                    re = R => {
                        var b;
                        s("blur", R), n.validateEvent && ((b = u == null ? void 0 : u.validate) == null || b.call(u, "blur").catch(A => Cn()))
                    };
                return et(() => n.modelValue, R => {
                    const b = x(a.userInput),
                        A = x(R, !0);
                    !pe(b) && (!b || b !== A) && (a.currentValue = A, a.userInput = null)
                }, {
                    immediate: !0
                }), Ne(() => {
                    var R;
                    const {
                        min: b,
                        max: A,
                        modelValue: D
                    } = n, H = (R = i.value) == null ? void 0 : R.input;
                    if (H.setAttribute("role", "spinbutton"), Number.isFinite(A) ? H.setAttribute("aria-valuemax", String(A)) : H.removeAttribute("aria-valuemax"), Number.isFinite(b) ? H.setAttribute("aria-valuemin", String(b)) : H.removeAttribute("aria-valuemin"), H.setAttribute("aria-valuenow", String(a.currentValue)), H.setAttribute("aria-disabled", String(_.value)), !pe(D) && D != null) {
                        let Z = Number(D);
                        Number.isNaN(Z) && (Z = null), s(at, Z)
                    }
                }), au(() => {
                    var R;
                    const b = (R = i.value) == null ? void 0 : R.input;
                    b == null || b.setAttribute("aria-valuenow", `${a.currentValue}`)
                }), e({
                    focus: P,
                    blur: M
                }), (R, b) => (y(), O("div", {
                    class: z([l(o).b(), l(o).m(l(p)), l(o).is("disabled", l(_)), l(o).is("without-controls", !R.controls), l(o).is("controls-right", l(h))]),
                    onDragstart: b[1] || (b[1] = tt(() => {}, ["prevent"]))
                }, [R.controls ? De((y(), O("span", {
                    key: 0,
                    role: "button",
                    "aria-label": l(r)("el.inputNumber.decrease"),
                    class: z([l(o).e("decrease"), l(o).is("disabled", l(c))]),
                    onKeydown: Ls(C, ["enter"])
                }, [w(l(Pe), null, {
                    default: S(() => [l(h) ? (y(), N(l(lu), {
                        key: 0
                    })) : (y(), N(l(uu), {
                        key: 1
                    }))]),
                    _: 1
                })], 42, cd)), [
                    [l(Xo), C]
                ]) : Y("v-if", !0), R.controls ? De((y(), O("span", {
                    key: 1,
                    role: "button",
                    "aria-label": l(r)("el.inputNumber.increase"),
                    class: z([l(o).e("increase"), l(o).is("disabled", l(d))]),
                    onKeydown: Ls(g, ["enter"])
                }, [w(l(Pe), null, {
                    default: S(() => [l(h) ? (y(), N(l(cu), {
                        key: 0
                    })) : (y(), N(l(du), {
                        key: 1
                    }))]),
                    _: 1
                })], 42, dd)), [
                    [l(Xo), g]
                ]) : Y("v-if", !0), w(l(io), {
                    id: R.id,
                    ref_key: "input",
                    ref: i,
                    type: "number",
                    step: R.step,
                    "model-value": l(v),
                    placeholder: R.placeholder,
                    readonly: R.readonly,
                    disabled: l(_),
                    size: l(p),
                    max: R.max,
                    min: R.min,
                    name: R.name,
                    label: R.label,
                    "validate-event": !1,
                    onWheel: b[0] || (b[0] = tt(() => {}, ["prevent"])),
                    onKeydown: [Ls(tt(g, ["prevent"]), ["up"]), Ls(tt(C, ["prevent"]), ["down"])],
                    onBlur: re,
                    onFocus: G,
                    onInput: W,
                    onChange: E
                }, null, 8, ["id", "step", "model-value", "placeholder", "readonly", "disabled", "size", "max", "min", "name", "label", "onKeydown"])], 34))
            }
        });
    var md = Ee(hd, [
        ["__file", "/home/runner/work/element-plus/element-plus/packages/components/input-number/src/input-number.vue"]
    ]);
    const na = Ye(md),
        pd = Ce({
            icon: {
                type: An,
                default: () => fu
            },
            title: String,
            content: {
                type: String,
                default: ""
            }
        }),
        _d = {
            back: () => !0
        },
        gd = ["aria-label"],
        vd = q({
            name: "ElPageHeader"
        }),
        yd = q({
            ...vd,
            props: pd,
            emits: _d,
            setup(t, {
                emit: e
            }) {
                const s = Kr(),
                    {
                        t: n
                    } = oo(),
                    r = $e("page-header"),
                    o = U(() => [r.b(), {
                        [r.m("has-breadcrumb")]: !!s.breadcrumb,
                        [r.m("has-extra")]: !!s.extra,
                        [r.is("contentful")]: !!s.default
                    }]);

                function i() {
                    e("back")
                }
                return (a, u) => (y(), O("div", {
                    class: z(l(o))
                }, [a.$slots.breadcrumb ? (y(), O("div", {
                    key: 0,
                    class: z(l(r).e("breadcrumb"))
                }, [oe(a.$slots, "breadcrumb")], 2)) : Y("v-if", !0), I("div", {
                    class: z(l(r).e("header"))
                }, [I("div", {
                    class: z(l(r).e("left"))
                }, [I("div", {
                    class: z(l(r).e("back")),
                    role: "button",
                    tabindex: "0",
                    onClick: i
                }, [a.icon || a.$slots.icon ? (y(), O("div", {
                    key: 0,
                    "aria-label": a.title || l(n)("el.pageHeader.title"),
                    class: z(l(r).e("icon"))
                }, [oe(a.$slots, "icon", {}, () => [a.icon ? (y(), N(l(Pe), {
                    key: 0
                }, {
                    default: S(() => [(y(), N(ut(a.icon)))]),
                    _: 1
                })) : Y("v-if", !0)])], 10, gd)) : Y("v-if", !0), I("div", {
                    class: z(l(r).e("title"))
                }, [oe(a.$slots, "title", {}, () => [B(j(a.title || l(n)("el.pageHeader.title")), 1)])], 2)], 2), w(l(Ss), {
                    direction: "vertical"
                }), I("div", {
                    class: z(l(r).e("content"))
                }, [oe(a.$slots, "content", {}, () => [B(j(a.content), 1)])], 2)], 2), a.$slots.extra ? (y(), O("div", {
                    key: 0,
                    class: z(l(r).e("extra"))
                }, [oe(a.$slots, "extra")], 2)) : Y("v-if", !0)], 2), a.$slots.default ? (y(), O("div", {
                    key: 1,
                    class: z(l(r).e("main"))
                }, [oe(a.$slots, "default")], 2)) : Y("v-if", !0)], 2))
            }
        });
    var bd = Ee(yd, [
        ["__file", "/home/runner/work/element-plus/element-plus/packages/components/page-header/src/page-header.vue"]
    ]);
    const wd = Ye(bd),
        kd = Ce({
            trigger: qo.trigger,
            placement: fr.placement,
            disabled: qo.disabled,
            visible: Rt.visible,
            transition: Rt.transition,
            popperOptions: fr.popperOptions,
            tabindex: fr.tabindex,
            content: Rt.content,
            popperStyle: Rt.popperStyle,
            popperClass: Rt.popperClass,
            enterable: {
                ...Rt.enterable,
                default: !0
            },
            effect: {
                ...Rt.effect,
                default: "light"
            },
            teleported: Rt.teleported,
            title: String,
            width: {
                type: [String, Number],
                default: 150
            },
            offset: {
                type: Number,
                default: void 0
            },
            showAfter: {
                type: Number,
                default: 0
            },
            hideAfter: {
                type: Number,
                default: 200
            },
            autoClose: {
                type: Number,
                default: 0
            },
            showArrow: {
                type: Boolean,
                default: !0
            },
            persistent: {
                type: Boolean,
                default: !0
            },
            "onUpdate:visible": {
                type: Function
            }
        }),
        Sd = {
            "update:visible": t => Xt(t),
            "before-enter": () => !0,
            "before-leave": () => !0,
            "after-enter": () => !0,
            "after-leave": () => !0
        },
        Td = "onUpdate:visible",
        xd = q({
            name: "ElPopover"
        }),
        Ad = q({
            ...xd,
            props: kd,
            emits: Sd,
            setup(t, {
                expose: e,
                emit: s
            }) {
                const n = t,
                    r = U(() => n[Td]),
                    o = $e("popover"),
                    i = L(),
                    a = U(() => {
                        var m;
                        return (m = l(i)) == null ? void 0 : m.popperRef
                    }),
                    u = U(() => [{
                        width: Zr(n.width)
                    }, n.popperStyle]),
                    c = U(() => [o.b(), n.popperClass, {
                        [o.m("plain")]: !!n.content
                    }]),
                    d = U(() => n.transition === `${o.namespace.value}-fade-in-linear`),
                    f = () => {
                        var m;
                        (m = i.value) == null || m.hide()
                    },
                    h = () => {
                        s("before-enter")
                    },
                    p = () => {
                        s("before-leave")
                    },
                    _ = () => {
                        s("after-enter")
                    },
                    v = () => {
                        s("update:visible", !1), s("after-leave")
                    };
                return e({
                    popperRef: a,
                    hide: f
                }), (m, T) => (y(), N(l(ns), Li({
                    ref_key: "tooltipRef",
                    ref: i
                }, m.$attrs, {
                    trigger: m.trigger,
                    placement: m.placement,
                    disabled: m.disabled,
                    visible: m.visible,
                    transition: m.transition,
                    "popper-options": m.popperOptions,
                    tabindex: m.tabindex,
                    content: m.content,
                    offset: m.offset,
                    "show-after": m.showAfter,
                    "hide-after": m.hideAfter,
                    "auto-close": m.autoClose,
                    "show-arrow": m.showArrow,
                    "aria-label": m.title,
                    effect: m.effect,
                    enterable: m.enterable,
                    "popper-class": l(c),
                    "popper-style": l(u),
                    teleported: m.teleported,
                    persistent: m.persistent,
                    "gpu-acceleration": l(d),
                    "onUpdate:visible": l(r),
                    onBeforeShow: h,
                    onBeforeHide: p,
                    onShow: _,
                    onHide: v
                }), {
                    content: S(() => [m.title ? (y(), O("div", {
                        key: 0,
                        class: z(l(o).e("title")),
                        role: "title"
                    }, j(m.title), 3)) : Y("v-if", !0), oe(m.$slots, "default", {}, () => [B(j(m.content), 1)])]),
                    default: S(() => [m.$slots.reference ? oe(m.$slots, "reference", {
                        key: 0
                    }) : Y("v-if", !0)]),
                    _: 3
                }, 16, ["trigger", "placement", "disabled", "visible", "transition", "popper-options", "tabindex", "content", "offset", "show-after", "hide-after", "auto-close", "show-arrow", "aria-label", "effect", "enterable", "popper-class", "popper-style", "teleported", "persistent", "gpu-acceleration", "onUpdate:visible"]))
            }
        });
    var Cd = Ee(Ad, [
        ["__file", "/home/runner/work/element-plus/element-plus/packages/components/popover/src/popover.vue"]
    ]);
    const ti = (t, e) => {
        const s = e.arg || e.value,
            n = s == null ? void 0 : s.popperRef;
        n && (n.triggerRef = t)
    };
    var $d = {
        mounted(t, e) {
            ti(t, e)
        },
        updated(t, e) {
            ti(t, e)
        }
    };
    const Ed = "popover",
        Id = hu($d, Ed),
        ra = Ye(Cd, {
            directive: Id
        }),
        Od = Ce({
            type: {
                type: String,
                default: "line",
                values: ["line", "circle", "dashboard"]
            },
            percentage: {
                type: Number,
                default: 0,
                validator: t => t >= 0 && t <= 100
            },
            status: {
                type: String,
                default: "",
                values: ["", "success", "exception", "warning"]
            },
            indeterminate: {
                type: Boolean,
                default: !1
            },
            duration: {
                type: Number,
                default: 3
            },
            strokeWidth: {
                type: Number,
                default: 6
            },
            strokeLinecap: {
                type: We(String),
                default: "round"
            },
            textInside: {
                type: Boolean,
                default: !1
            },
            width: {
                type: Number,
                default: 126
            },
            showText: {
                type: Boolean,
                default: !0
            },
            color: {
                type: We([String, Array, Function]),
                default: ""
            },
            striped: Boolean,
            stripedFlow: Boolean,
            format: {
                type: We(Function),
                default: t => `${t}%`
            }
        }),
        Pd = ["aria-valuenow"],
        Dd = {
            viewBox: "0 0 100 100"
        },
        Rd = ["d", "stroke", "stroke-width"],
        Md = ["d", "stroke", "opacity", "stroke-linecap", "stroke-width"],
        Ld = {
            key: 0
        },
        Nd = q({
            name: "ElProgress"
        }),
        Fd = q({
            ...Nd,
            props: Od,
            setup(t) {
                const e = t,
                    s = {
                        success: "#13ce66",
                        exception: "#ff4949",
                        warning: "#e6a23c",
                        default: "#20a0ff"
                    },
                    n = $e("progress"),
                    r = U(() => ({
                        width: `${e.percentage}%`,
                        animationDuration: `${e.duration}s`,
                        backgroundColor: k(e.percentage)
                    })),
                    o = U(() => (e.strokeWidth / e.width * 100).toFixed(1)),
                    i = U(() => ["circle", "dashboard"].includes(e.type) ? Number.parseInt(`${50-Number.parseFloat(o.value)/2}`, 10) : 0),
                    a = U(() => {
                        const g = i.value,
                            C = e.type === "dashboard";
                        return `
          M 50 50
          m 0 ${C?"":"-"}${g}
          a ${g} ${g} 0 1 1 0 ${C?"-":""}${g*2}
          a ${g} ${g} 0 1 1 0 ${C?"":"-"}${g*2}
          `
                    }),
                    u = U(() => 2 * Math.PI * i.value),
                    c = U(() => e.type === "dashboard" ? .75 : 1),
                    d = U(() => `${-1*u.value*(1-c.value)/2}px`),
                    f = U(() => ({
                        strokeDasharray: `${u.value*c.value}px, ${u.value}px`,
                        strokeDashoffset: d.value
                    })),
                    h = U(() => ({
                        strokeDasharray: `${u.value*c.value*(e.percentage/100)}px, ${u.value}px`,
                        strokeDashoffset: d.value,
                        transition: "stroke-dasharray 0.6s ease 0s, stroke 0.6s ease, opacity ease 0.6s"
                    })),
                    p = U(() => {
                        let g;
                        return e.color ? g = k(e.percentage) : g = s[e.status] || s.default, g
                    }),
                    _ = U(() => e.status === "warning" ? mu : e.type === "line" ? e.status === "success" ? pu : _u : e.status === "success" ? gu : vu),
                    v = U(() => e.type === "line" ? 12 + e.strokeWidth * .4 : e.width * .111111 + 2),
                    m = U(() => e.format(e.percentage));

                function T(g) {
                    const C = 100 / g.length;
                    return g.map(($, W) => Je($) ? {
                        color: $,
                        percentage: (W + 1) * C
                    } : $).sort(($, W) => $.percentage - W.percentage)
                }
                const k = g => {
                    var C;
                    const {
                        color: x
                    } = e;
                    if (Er(x)) return x(g);
                    if (Je(x)) return x;
                    {
                        const $ = T(x);
                        for (const W of $)
                            if (W.percentage > g) return W.color;
                        return (C = $[$.length - 1]) == null ? void 0 : C.color
                    }
                };
                return (g, C) => (y(), O("div", {
                    class: z([l(n).b(), l(n).m(g.type), l(n).is(g.status), {
                        [l(n).m("without-text")]: !g.showText,
                        [l(n).m("text-inside")]: g.textInside
                    }]),
                    role: "progressbar",
                    "aria-valuenow": g.percentage,
                    "aria-valuemin": "0",
                    "aria-valuemax": "100"
                }, [g.type === "line" ? (y(), O("div", {
                    key: 0,
                    class: z(l(n).b("bar"))
                }, [I("div", {
                    class: z(l(n).be("bar", "outer")),
                    style: Oe({
                        height: `${g.strokeWidth}px`
                    })
                }, [I("div", {
                    class: z([l(n).be("bar", "inner"), {
                        [l(n).bem("bar", "inner", "indeterminate")]: g.indeterminate
                    }, {
                        [l(n).bem("bar", "inner", "striped")]: g.striped
                    }, {
                        [l(n).bem("bar", "inner", "striped-flow")]: g.stripedFlow
                    }]),
                    style: Oe(l(r))
                }, [(g.showText || g.$slots.default) && g.textInside ? (y(), O("div", {
                    key: 0,
                    class: z(l(n).be("bar", "innerText"))
                }, [oe(g.$slots, "default", {
                    percentage: g.percentage
                }, () => [I("span", null, j(l(m)), 1)])], 2)) : Y("v-if", !0)], 6)], 6)], 2)) : (y(), O("div", {
                    key: 1,
                    class: z(l(n).b("circle")),
                    style: Oe({
                        height: `${g.width}px`,
                        width: `${g.width}px`
                    })
                }, [(y(), O("svg", Dd, [I("path", {
                    class: z(l(n).be("circle", "track")),
                    d: l(a),
                    stroke: `var(${l(n).cssVarName("fill-color-light")}, #e5e9f2)`,
                    "stroke-width": l(o),
                    fill: "none",
                    style: Oe(l(f))
                }, null, 14, Rd), I("path", {
                    class: z(l(n).be("circle", "path")),
                    d: l(a),
                    stroke: l(p),
                    fill: "none",
                    opacity: g.percentage ? 1 : 0,
                    "stroke-linecap": g.strokeLinecap,
                    "stroke-width": l(o),
                    style: Oe(l(h))
                }, null, 14, Md)]))], 6)), (g.showText || g.$slots.default) && !g.textInside ? (y(), O("div", {
                    key: 2,
                    class: z(l(n).e("text")),
                    style: Oe({
                        fontSize: `${l(v)}px`
                    })
                }, [oe(g.$slots, "default", {
                    percentage: g.percentage
                }, () => [g.status ? (y(), N(l(Pe), {
                    key: 1
                }, {
                    default: S(() => [(y(), N(ut(l(_))))]),
                    _: 1
                })) : (y(), O("span", Ld, j(l(m)), 1))])], 6)) : Y("v-if", !0)], 10, Pd))
            }
        });
    var jd = Ee(Fd, [
        ["__file", "/home/runner/work/element-plus/element-plus/packages/components/progress/src/progress.vue"]
    ]);
    const Ud = Ye(jd),
        Yd = Ce({
            prefixCls: {
                type: String
            }
        }),
        si = q({
            name: "ElSpaceItem",
            props: Yd,
            setup(t, {
                slots: e
            }) {
                const s = $e("space"),
                    n = U(() => `${t.prefixCls||s.b()}__item`);
                return () => us("div", {
                    class: n.value
                }, oe(e, "default"))
            }
        }),
        ni = {
            small: 8,
            default: 12,
            large: 16
        };

    function Bd(t) {
        const e = $e("space"),
            s = U(() => [e.b(), e.m(t.direction), t.class]),
            n = L(0),
            r = L(0),
            o = U(() => {
                const a = t.wrap || t.fill ? {
                        flexWrap: "wrap",
                        marginBottom: `-${r.value}px`
                    } : {},
                    u = {
                        alignItems: t.alignment
                    };
                return [a, u, t.style]
            }),
            i = U(() => {
                const a = {
                        paddingBottom: `${r.value}px`,
                        marginRight: `${n.value}px`
                    },
                    u = t.fill ? {
                        flexGrow: 1,
                        minWidth: `${t.fillRatio}%`
                    } : {};
                return [a, u]
            });
        return yu(() => {
            const {
                size: a = "small",
                wrap: u,
                direction: c,
                fill: d
            } = t;
            if (Us(a)) {
                const [f = 0, h = 0] = a;
                n.value = f, r.value = h
            } else {
                let f;
                pe(a) ? f = a : f = ni[a || "small"] || ni.small, (u || d) && c === "horizontal" ? n.value = r.value = f : c === "horizontal" ? (n.value = f, r.value = 0) : (r.value = f, n.value = 0)
            }
        }), {
            classes: s,
            containerStyle: o,
            itemStyle: i
        }
    }
    const Vd = Ce({
            direction: {
                type: String,
                values: ["horizontal", "vertical"],
                default: "horizontal"
            },
            class: {
                type: We([String, Object, Array]),
                default: ""
            },
            style: {
                type: We([String, Array, Object]),
                default: ""
            },
            alignment: {
                type: We(String),
                default: "center"
            },
            prefixCls: {
                type: String
            },
            spacer: {
                type: We([Object, String, Number, Array]),
                default: null,
                validator: t => Ni(t) || pe(t) || Je(t)
            },
            wrap: Boolean,
            fill: Boolean,
            fillRatio: {
                type: Number,
                default: 100
            },
            size: {
                type: [String, Array, Number],
                values: Qr,
                validator: t => pe(t) || Us(t) && t.length === 2 && t.every(pe)
            }
        }),
        Wd = q({
            name: "ElSpace",
            props: Vd,
            setup(t, {
                slots: e
            }) {
                const {
                    classes: s,
                    containerStyle: n,
                    itemStyle: r
                } = Bd(t);

                function o(i, a = "", u = []) {
                    const {
                        prefixCls: c
                    } = t;
                    return i.forEach((d, f) => {
                        Jo(d) ? Us(d.children) && d.children.forEach((h, p) => {
                            Jo(h) && Us(h.children) ? o(h.children, `${a+p}-`, u) : u.push(w(si, {
                                style: r.value,
                                prefixCls: c,
                                key: `nested-${a+p}`
                            }, {
                                default: () => [h]
                            }, Mt.PROPS | Mt.STYLE, ["style", "prefixCls"]))
                        }) : bu(d) && u.push(w(si, {
                            style: r.value,
                            prefixCls: c,
                            key: `LoopKey${a+f}`
                        }, {
                            default: () => [d]
                        }, Mt.PROPS | Mt.STYLE, ["style", "prefixCls"]))
                    }), u
                }
                return () => {
                    var i;
                    const {
                        spacer: a,
                        direction: u
                    } = t, c = oe(e, "default", {
                        key: 0
                    }, () => []);
                    if (((i = c.children) != null ? i : []).length === 0) return null;
                    if (Us(c.children)) {
                        let d = o(c.children);
                        if (a) {
                            const f = d.length - 1;
                            d = d.reduce((h, p, _) => {
                                const v = [...h, p];
                                return _ !== f && v.push(w("span", {
                                    style: [r.value, u === "vertical" ? "width: 100%" : null],
                                    key: _
                                }, [Ni(a) ? a : B(a, Mt.TEXT)], Mt.STYLE)), v
                            }, [])
                        }
                        return w("div", {
                            class: s.value,
                            style: n.value
                        }, d, Mt.STYLE | Mt.CLASS)
                    }
                    return c.children
                }
            }
        }),
        co = Ye(Wd),
        zd = Ce({
            modelValue: {
                type: [Boolean, String, Number],
                default: !1
            },
            value: {
                type: [Boolean, String, Number],
                default: !1
            },
            disabled: {
                type: Boolean,
                default: !1
            },
            width: {
                type: [String, Number],
                default: ""
            },
            inlinePrompt: {
                type: Boolean,
                default: !1
            },
            activeIcon: {
                type: An
            },
            inactiveIcon: {
                type: An
            },
            activeText: {
                type: String,
                default: ""
            },
            inactiveText: {
                type: String,
                default: ""
            },
            activeColor: {
                type: String,
                default: ""
            },
            inactiveColor: {
                type: String,
                default: ""
            },
            borderColor: {
                type: String,
                default: ""
            },
            activeValue: {
                type: [Boolean, String, Number],
                default: !0
            },
            inactiveValue: {
                type: [Boolean, String, Number],
                default: !1
            },
            name: {
                type: String,
                default: ""
            },
            validateEvent: {
                type: Boolean,
                default: !0
            },
            id: String,
            loading: {
                type: Boolean,
                default: !1
            },
            beforeChange: {
                type: We(Function)
            },
            size: {
                type: String,
                validator: wu
            },
            tabindex: {
                type: [String, Number]
            }
        }),
        Hd = {
            [at]: t => Xt(t) || Je(t) || pe(t),
            [ks]: t => Xt(t) || Je(t) || pe(t),
            [es]: t => Xt(t) || Je(t) || pe(t)
        },
        Gd = ["onClick"],
        qd = ["id", "aria-checked", "aria-disabled", "name", "true-value", "false-value", "disabled", "tabindex", "onKeydown"],
        Jd = ["aria-hidden"],
        Kd = ["aria-hidden"],
        Qd = ["aria-hidden"],
        Or = "ElSwitch",
        Zd = q({
            name: Or
        }),
        Xd = q({
            ...Zd,
            props: zd,
            emits: Hd,
            setup(t, {
                expose: e,
                emit: s
            }) {
                const n = t,
                    r = Xr(),
                    {
                        formItem: o
                    } = no(),
                    i = Un(),
                    a = $e("switch");
                Ir({
                    from: '"value"',
                    replacement: '"model-value" or "v-model"',
                    scope: Or,
                    version: "2.3.0",
                    ref: "https://element-plus.org/en-US/component/switch.html#attributes",
                    type: "Attribute"
                }, U(() => {
                    var x;
                    return !!((x = r.vnode.props) != null && x.value)
                }));
                const {
                    inputId: u
                } = Ri(n, {
                    formItemContext: o
                }), c = so(U(() => n.loading)), d = L(n.modelValue !== !1), f = L(), h = L(), p = U(() => [a.b(), a.m(i.value), a.is("disabled", c.value), a.is("checked", m.value)]), _ = U(() => ({
                    width: Zr(n.width)
                }));
                et(() => n.modelValue, () => {
                    d.value = !0
                }), et(() => n.value, () => {
                    d.value = !1
                });
                const v = U(() => d.value ? n.modelValue : n.value),
                    m = U(() => v.value === n.activeValue);
                [n.activeValue, n.inactiveValue].includes(v.value) || (s(at, n.inactiveValue), s(ks, n.inactiveValue), s(es, n.inactiveValue)), et(m, x => {
                    var $;
                    f.value.checked = x, n.validateEvent && (($ = o == null ? void 0 : o.validate) == null || $.call(o, "change").catch(W => Cn()))
                });
                const T = () => {
                        const x = m.value ? n.inactiveValue : n.activeValue;
                        s(at, x), s(ks, x), s(es, x), tn(() => {
                            f.value.checked = m.value
                        })
                    },
                    k = () => {
                        if (c.value) return;
                        const {
                            beforeChange: x
                        } = n;
                        if (!x) {
                            T();
                            return
                        }
                        const $ = x();
                        [Ko($), Xt($)].includes(!0) || Su(Or, "beforeChange must return type `Promise<boolean>` or `boolean`"), Ko($) ? $.then(E => {
                            E && T()
                        }).catch(E => {}) : $ && T()
                    },
                    g = U(() => a.cssVarBlock({
                        ...n.activeColor ? {
                            "on-color": n.activeColor
                        } : null,
                        ...n.inactiveColor ? {
                            "off-color": n.inactiveColor
                        } : null,
                        ...n.borderColor ? {
                            "border-color": n.borderColor
                        } : null
                    })),
                    C = () => {
                        var x, $;
                        ($ = (x = f.value) == null ? void 0 : x.focus) == null || $.call(x)
                    };
                return Ne(() => {
                    f.value.checked = m.value
                }), e({
                    focus: C,
                    checked: m
                }), (x, $) => (y(), O("div", {
                    class: z(l(p)),
                    style: Oe(l(g)),
                    onClick: tt(k, ["prevent"])
                }, [I("input", {
                    id: l(u),
                    ref_key: "input",
                    ref: f,
                    class: z(l(a).e("input")),
                    type: "checkbox",
                    role: "switch",
                    "aria-checked": l(m),
                    "aria-disabled": l(c),
                    name: x.name,
                    "true-value": x.activeValue,
                    "false-value": x.inactiveValue,
                    disabled: l(c),
                    tabindex: x.tabindex,
                    onChange: T,
                    onKeydown: Ls(k, ["enter"])
                }, null, 42, qd), !x.inlinePrompt && (x.inactiveIcon || x.inactiveText) ? (y(), O("span", {
                    key: 0,
                    class: z([l(a).e("label"), l(a).em("label", "left"), l(a).is("active", !l(m))])
                }, [x.inactiveIcon ? (y(), N(l(Pe), {
                    key: 0
                }, {
                    default: S(() => [(y(), N(ut(x.inactiveIcon)))]),
                    _: 1
                })) : Y("v-if", !0), !x.inactiveIcon && x.inactiveText ? (y(), O("span", {
                    key: 1,
                    "aria-hidden": l(m)
                }, j(x.inactiveText), 9, Jd)) : Y("v-if", !0)], 2)) : Y("v-if", !0), I("span", {
                    ref_key: "core",
                    ref: h,
                    class: z(l(a).e("core")),
                    style: Oe(l(_))
                }, [x.inlinePrompt ? (y(), O("div", {
                    key: 0,
                    class: z(l(a).e("inner"))
                }, [x.activeIcon || x.inactiveIcon ? (y(), N(l(Pe), {
                    key: 0,
                    class: z(l(a).is("icon"))
                }, {
                    default: S(() => [(y(), N(ut(l(m) ? x.activeIcon : x.inactiveIcon)))]),
                    _: 1
                }, 8, ["class"])) : x.activeText || x.inactiveText ? (y(), O("span", {
                    key: 1,
                    class: z(l(a).is("text")),
                    "aria-hidden": !l(m)
                }, j(l(m) ? x.activeText : x.inactiveText), 11, Kd)) : Y("v-if", !0)], 2)) : Y("v-if", !0), I("div", {
                    class: z(l(a).e("action"))
                }, [x.loading ? (y(), N(l(Pe), {
                    key: 0,
                    class: z(l(a).is("loading"))
                }, {
                    default: S(() => [w(l(ku))]),
                    _: 1
                }, 8, ["class"])) : Y("v-if", !0)], 2)], 6), !x.inlinePrompt && (x.activeIcon || x.activeText) ? (y(), O("span", {
                    key: 1,
                    class: z([l(a).e("label"), l(a).em("label", "right"), l(a).is("active", l(m))])
                }, [x.activeIcon ? (y(), N(l(Pe), {
                    key: 0
                }, {
                    default: S(() => [(y(), N(ut(x.activeIcon)))]),
                    _: 1
                })) : Y("v-if", !0), !x.activeIcon && x.activeText ? (y(), O("span", {
                    key: 1,
                    "aria-hidden": !l(m)
                }, j(x.activeText), 9, Qd)) : Y("v-if", !0)], 2)) : Y("v-if", !0)], 14, Gd))
            }
        });
    var ef = Ee(Xd, [
        ["__file", "/home/runner/work/element-plus/element-plus/packages/components/switch/src/switch.vue"]
    ]);
    const oa = Ye(ef),
        tf = Ce({
            type: {
                type: String,
                values: ["primary", "success", "info", "warning", "danger", ""],
                default: ""
            },
            size: {
                type: String,
                values: Qr,
                default: ""
            },
            truncated: {
                type: Boolean
            },
            tag: {
                type: String,
                default: "span"
            }
        }),
        sf = q({
            name: "ElText"
        }),
        nf = q({
            ...sf,
            props: tf,
            setup(t) {
                const e = t,
                    s = Un(),
                    n = $e("text"),
                    r = U(() => [n.b(), n.m(e.type), n.m(s.value), n.is("truncated", e.truncated)]);
                return (o, i) => (y(), N(ut(o.tag), {
                    class: z(l(r))
                }, {
                    default: S(() => [oe(o.$slots, "default")]),
                    _: 3
                }, 8, ["class"]))
            }
        });
    var rf = Ee(nf, [
        ["__file", "/home/runner/work/element-plus/element-plus/packages/components/text/src/text.vue"]
    ]);
    const fo = Ye(rf);

    function of(t) {
        let e;
        const s = L(!1),
            n = ss({
                ...t,
                originalPosition: "",
                originalOverflow: "",
                visible: !1
            });

        function r(h) {
            n.text = h
        }

        function o() {
            const h = n.parent,
                p = f.ns;
            if (!h.vLoadingAddClassList) {
                let _ = h.getAttribute("loading-number");
                _ = Number.parseInt(_) - 1, _ ? h.setAttribute("loading-number", _.toString()) : ($n(h, p.bm("parent", "relative")), h.removeAttribute("loading-number")), $n(h, p.bm("parent", "hidden"))
            }
            i(), d.unmount()
        }

        function i() {
            var h, p;
            (p = (h = f.$el) == null ? void 0 : h.parentNode) == null || p.removeChild(f.$el)
        }

        function a() {
            var h;
            t.beforeClose && !t.beforeClose() || (s.value = !0, clearTimeout(e), e = window.setTimeout(u, 400), n.visible = !1, (h = t.closed) == null || h.call(t))
        }

        function u() {
            if (!s.value) return;
            const h = n.parent;
            s.value = !1, h.vLoadingAddClassList = void 0, o()
        }
        const c = q({
                name: "ElLoading",
                setup(h, {
                    expose: p
                }) {
                    const {
                        ns: _,
                        zIndex: v
                    } = Tu("loading");
                    return p({
                        ns: _,
                        zIndex: v
                    }), () => {
                        const m = n.spinner || n.svg,
                            T = us("svg", {
                                class: "circular",
                                viewBox: n.svgViewBox ? n.svgViewBox : "0 0 50 50",
                                ...m ? {
                                    innerHTML: m
                                } : {}
                            }, [us("circle", {
                                class: "path",
                                cx: "25",
                                cy: "25",
                                r: "20",
                                fill: "none"
                            })]),
                            k = n.text ? us("p", {
                                class: _.b("text")
                            }, [n.text]) : void 0;
                        return us(ws, {
                            name: _.b("fade"),
                            onAfterLeave: u
                        }, {
                            default: S(() => [De(w("div", {
                                style: {
                                    backgroundColor: n.background || ""
                                },
                                class: [_.b("mask"), n.customClass, n.fullscreen ? "is-fullscreen" : ""]
                            }, [us("div", {
                                class: _.b("spinner")
                            }, [T, k])]), [
                                [zt, n.visible]
                            ])])
                        })
                    }
                }
            }),
            d = Fi(c),
            f = d.mount(document.createElement("div"));
        return {
            ...Mi(n),
            setText: r,
            removeElLoadingChild: i,
            close: a,
            handleAfterLeave: u,
            vm: f,
            get $el() {
                return f.$el
            }
        }
    }
    let un;
    const af = function(t = {}) {
            if (!xu) return;
            const e = lf(t);
            if (e.fullscreen && un) return un;
            const s = of({
                ...e,
                closed: () => {
                    var r;
                    (r = e.closed) == null || r.call(e), e.fullscreen && (un = void 0)
                }
            });
            uf(e, e.parent, s), ri(e, e.parent, s), e.parent.vLoadingAddClassList = () => ri(e, e.parent, s);
            let n = e.parent.getAttribute("loading-number");
            return n ? n = `${Number.parseInt(n)+1}` : n = "1", e.parent.setAttribute("loading-number", n), e.parent.appendChild(s.$el), tn(() => s.visible.value = e.visible), e.fullscreen && (un = s), s
        },
        lf = t => {
            var e, s, n, r;
            let o;
            return Je(t.target) ? o = (e = document.querySelector(t.target)) != null ? e : document.body : o = t.target || document.body, {
                parent: o === document.body || t.body ? document.body : o,
                background: t.background || "",
                svg: t.svg || "",
                svgViewBox: t.svgViewBox || "",
                spinner: t.spinner || !1,
                text: t.text || "",
                fullscreen: o === document.body && ((s = t.fullscreen) != null ? s : !0),
                lock: (n = t.lock) != null ? n : !1,
                customClass: t.customClass || "",
                visible: (r = t.visible) != null ? r : !0,
                target: o
            }
        },
        uf = async (t, e, s) => {
            const {
                nextZIndex: n
            } = s.vm.zIndex, r = {};
            if (t.fullscreen) s.originalPosition.value = Is(document.body, "position"), s.originalOverflow.value = Is(document.body, "overflow"), r.zIndex = n();
            else if (t.parent === document.body) {
                s.originalPosition.value = Is(document.body, "position"), await tn();
                for (const o of ["top", "left"]) {
                    const i = o === "top" ? "scrollTop" : "scrollLeft";
                    r[o] = `${t.target.getBoundingClientRect()[o]+document.body[i]+document.documentElement[i]-Number.parseInt(Is(document.body,`margin-${o}`),10)}px`
                }
                for (const o of ["height", "width"]) r[o] = `${t.target.getBoundingClientRect()[o]}px`
            } else s.originalPosition.value = Is(e, "position");
            for (const [o, i] of Object.entries(r)) s.$el.style[o] = i
        }, ri = (t, e, s) => {
            const n = s.vm.ns;
            ["absolute", "fixed", "sticky"].includes(s.originalPosition.value) ? $n(e, n.bm("parent", "relative")) : Qo(e, n.bm("parent", "relative")), t.fullscreen && t.lock ? Qo(e, n.bm("parent", "hidden")) : $n(e, n.bm("parent", "hidden"))
        }, Pr = Symbol("ElLoading"), oi = (t, e) => {
            var s, n, r, o;
            const i = e.instance,
                a = h => ro(e.value) ? e.value[h] : void 0,
                u = h => {
                    const p = Je(h) && (i == null ? void 0 : i[h]) || h;
                    return p && L(p)
                },
                c = h => u(a(h) || t.getAttribute(`element-loading-${Au(h)}`)),
                d = (s = a("fullscreen")) != null ? s : e.modifiers.fullscreen,
                f = {
                    text: c("text"),
                    svg: c("svg"),
                    svgViewBox: c("svgViewBox"),
                    spinner: c("spinner"),
                    background: c("background"),
                    customClass: c("customClass"),
                    fullscreen: d,
                    target: (n = a("target")) != null ? n : d ? void 0 : t,
                    body: (r = a("body")) != null ? r : e.modifiers.body,
                    lock: (o = a("lock")) != null ? o : e.modifiers.lock
                };
            t[Pr] = {
                options: f,
                instance: af(f)
            }
        }, cf = (t, e) => {
            for (const s of Object.keys(e)) Ke(e[s]) && (e[s].value = t[s])
        }, sn = {
            mounted(t, e) {
                e.value && oi(t, e)
            },
            updated(t, e) {
                const s = t[Pr];
                e.oldValue !== e.value && (e.value && !e.oldValue ? oi(t, e) : e.value && e.oldValue ? ro(e.value) && cf(e.value, s.options) : s == null || s.instance.close())
            },
            unmounted(t) {
                var e;
                (e = t[Pr]) == null || e.instance.close()
            }
        }, df = {
            name: "crisp",
            props: ["task_id"],
            data() {
                return {
                    chat_icon_url: Cu.runtime.getURL("/assets/crisp.png")
                }
            },
            mounted() {},
            methods: {
                async open_chat() {
                    window.open(`${ms}/contact-us?${ps}`)
                }
            }
        }, ff = ["src"];

    function hf(t, e, s, n, r, o) {
        return y(), O("img", {
            src: r.chat_icon_url,
            class: "chat",
            onClick: e[0] || (e[0] = (...i) => o.open_chat && o.open_chat(...i))
        }, null, 8, ff)
    }
    const mf = Ts(df, [
        ["render", hf],
        ["__scopeId", "data-v-b0713d46"]
    ]); //! moment.js
    //! version : 2.29.4
    //! authors : Tim Wood, Iskren Chernev, Moment.js contributors
    //! license : MIT
    //! momentjs.com
    var ia;

    function V() {
        return ia.apply(null, arguments)
    }

    function pf(t) {
        ia = t
    }

    function dt(t) {
        return t instanceof Array || Object.prototype.toString.call(t) === "[object Array]"
    }

    function ts(t) {
        return t != null && Object.prototype.toString.call(t) === "[object Object]"
    }

    function le(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }

    function ho(t) {
        if (Object.getOwnPropertyNames) return Object.getOwnPropertyNames(t).length === 0;
        var e;
        for (e in t)
            if (le(t, e)) return !1;
        return !0
    }

    function Ve(t) {
        return t === void 0
    }

    function It(t) {
        return typeof t == "number" || Object.prototype.toString.call(t) === "[object Number]"
    }

    function nn(t) {
        return t instanceof Date || Object.prototype.toString.call(t) === "[object Date]"
    }

    function aa(t, e) {
        var s = [],
            n, r = t.length;
        for (n = 0; n < r; ++n) s.push(e(t[n], n));
        return s
    }

    function Bt(t, e) {
        for (var s in e) le(e, s) && (t[s] = e[s]);
        return le(e, "toString") && (t.toString = e.toString), le(e, "valueOf") && (t.valueOf = e.valueOf), t
    }

    function yt(t, e, s, n) {
        return Oa(t, e, s, n, !0).utc()
    }

    function _f() {
        return {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidEra: null,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1,
            parsedDateParts: [],
            era: null,
            meridiem: null,
            rfc2822: !1,
            weekdayMismatch: !1
        }
    }

    function te(t) {
        return t._pf == null && (t._pf = _f()), t._pf
    }
    var Dr;
    Array.prototype.some ? Dr = Array.prototype.some : Dr = function(t) {
        var e = Object(this),
            s = e.length >>> 0,
            n;
        for (n = 0; n < s; n++)
            if (n in e && t.call(this, e[n], n, e)) return !0;
        return !1
    };

    function mo(t) {
        if (t._isValid == null) {
            var e = te(t),
                s = Dr.call(e.parsedDateParts, function(r) {
                    return r != null
                }),
                n = !isNaN(t._d.getTime()) && e.overflow < 0 && !e.empty && !e.invalidEra && !e.invalidMonth && !e.invalidWeekday && !e.weekdayMismatch && !e.nullInput && !e.invalidFormat && !e.userInvalidated && (!e.meridiem || e.meridiem && s);
            if (t._strict && (n = n && e.charsLeftOver === 0 && e.unusedTokens.length === 0 && e.bigHour === void 0), Object.isFrozen == null || !Object.isFrozen(t)) t._isValid = n;
            else return n
        }
        return t._isValid
    }

    function Jn(t) {
        var e = yt(NaN);
        return t != null ? Bt(te(e), t) : te(e).userInvalidated = !0, e
    }
    var ii = V.momentProperties = [],
        mr = !1;

    function po(t, e) {
        var s, n, r, o = ii.length;
        if (Ve(e._isAMomentObject) || (t._isAMomentObject = e._isAMomentObject), Ve(e._i) || (t._i = e._i), Ve(e._f) || (t._f = e._f), Ve(e._l) || (t._l = e._l), Ve(e._strict) || (t._strict = e._strict), Ve(e._tzm) || (t._tzm = e._tzm), Ve(e._isUTC) || (t._isUTC = e._isUTC), Ve(e._offset) || (t._offset = e._offset), Ve(e._pf) || (t._pf = te(e)), Ve(e._locale) || (t._locale = e._locale), o > 0)
            for (s = 0; s < o; s++) n = ii[s], r = e[n], Ve(r) || (t[n] = r);
        return t
    }

    function rn(t) {
        po(this, t), this._d = new Date(t._d != null ? t._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), mr === !1 && (mr = !0, V.updateOffset(this), mr = !1)
    }

    function ft(t) {
        return t instanceof rn || t != null && t._isAMomentObject != null
    }

    function la(t) {
        V.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + t)
    }

    function nt(t, e) {
        var s = !0;
        return Bt(function() {
            if (V.deprecationHandler != null && V.deprecationHandler(null, t), s) {
                var n = [],
                    r, o, i, a = arguments.length;
                for (o = 0; o < a; o++) {
                    if (r = "", typeof arguments[o] == "object") {
                        r += `
[` + o + "] ";
                        for (i in arguments[0]) le(arguments[0], i) && (r += i + ": " + arguments[0][i] + ", ");
                        r = r.slice(0, -2)
                    } else r = arguments[o];
                    n.push(r)
                }
                la(t + `
Arguments: ` + Array.prototype.slice.call(n).join("") + `
` + new Error().stack), s = !1
            }
            return e.apply(this, arguments)
        }, e)
    }
    var ai = {};

    function ua(t, e) {
        V.deprecationHandler != null && V.deprecationHandler(t, e), ai[t] || (la(e), ai[t] = !0)
    }
    V.suppressDeprecationWarnings = !1;
    V.deprecationHandler = null;

    function bt(t) {
        return typeof Function < "u" && t instanceof Function || Object.prototype.toString.call(t) === "[object Function]"
    }

    function gf(t) {
        var e, s;
        for (s in t) le(t, s) && (e = t[s], bt(e) ? this[s] = e : this["_" + s] = e);
        this._config = t, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
    }

    function Rr(t, e) {
        var s = Bt({}, t),
            n;
        for (n in e) le(e, n) && (ts(t[n]) && ts(e[n]) ? (s[n] = {}, Bt(s[n], t[n]), Bt(s[n], e[n])) : e[n] != null ? s[n] = e[n] : delete s[n]);
        for (n in t) le(t, n) && !le(e, n) && ts(t[n]) && (s[n] = Bt({}, s[n]));
        return s
    }

    function _o(t) {
        t != null && this.set(t)
    }
    var Mr;
    Object.keys ? Mr = Object.keys : Mr = function(t) {
        var e, s = [];
        for (e in t) le(t, e) && s.push(e);
        return s
    };
    var vf = {
        sameDay: "[Today at] LT",
        nextDay: "[Tomorrow at] LT",
        nextWeek: "dddd [at] LT",
        lastDay: "[Yesterday at] LT",
        lastWeek: "[Last] dddd [at] LT",
        sameElse: "L"
    };

    function yf(t, e, s) {
        var n = this._calendar[t] || this._calendar.sameElse;
        return bt(n) ? n.call(e, s) : n
    }

    function vt(t, e, s) {
        var n = "" + Math.abs(t),
            r = e - n.length,
            o = t >= 0;
        return (o ? s ? "+" : "" : "-") + Math.pow(10, Math.max(0, r)).toString().substr(1) + n
    }
    var go = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
        cn = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
        pr = {},
        vs = {};

    function Q(t, e, s, n) {
        var r = n;
        typeof n == "string" && (r = function() {
            return this[n]()
        }), t && (vs[t] = r), e && (vs[e[0]] = function() {
            return vt(r.apply(this, arguments), e[1], e[2])
        }), s && (vs[s] = function() {
            return this.localeData().ordinal(r.apply(this, arguments), t)
        })
    }

    function bf(t) {
        return t.match(/\[[\s\S]/) ? t.replace(/^\[|\]$/g, "") : t.replace(/\\/g, "")
    }

    function wf(t) {
        var e = t.match(go),
            s, n;
        for (s = 0, n = e.length; s < n; s++) vs[e[s]] ? e[s] = vs[e[s]] : e[s] = bf(e[s]);
        return function(r) {
            var o = "",
                i;
            for (i = 0; i < n; i++) o += bt(e[i]) ? e[i].call(r, t) : e[i];
            return o
        }
    }

    function gn(t, e) {
        return t.isValid() ? (e = ca(e, t.localeData()), pr[e] = pr[e] || wf(e), pr[e](t)) : t.localeData().invalidDate()
    }

    function ca(t, e) {
        var s = 5;

        function n(r) {
            return e.longDateFormat(r) || r
        }
        for (cn.lastIndex = 0; s >= 0 && cn.test(t);) t = t.replace(cn, n), cn.lastIndex = 0, s -= 1;
        return t
    }
    var kf = {
        LTS: "h:mm:ss A",
        LT: "h:mm A",
        L: "MM/DD/YYYY",
        LL: "MMMM D, YYYY",
        LLL: "MMMM D, YYYY h:mm A",
        LLLL: "dddd, MMMM D, YYYY h:mm A"
    };

    function Sf(t) {
        var e = this._longDateFormat[t],
            s = this._longDateFormat[t.toUpperCase()];
        return e || !s ? e : (this._longDateFormat[t] = s.match(go).map(function(n) {
            return n === "MMMM" || n === "MM" || n === "DD" || n === "dddd" ? n.slice(1) : n
        }).join(""), this._longDateFormat[t])
    }
    var Tf = "Invalid date";

    function xf() {
        return this._invalidDate
    }
    var Af = "%d",
        Cf = /\d{1,2}/;

    function $f(t) {
        return this._ordinal.replace("%d", t)
    }
    var Ef = {
        future: "in %s",
        past: "%s ago",
        s: "a few seconds",
        ss: "%d seconds",
        m: "a minute",
        mm: "%d minutes",
        h: "an hour",
        hh: "%d hours",
        d: "a day",
        dd: "%d days",
        w: "a week",
        ww: "%d weeks",
        M: "a month",
        MM: "%d months",
        y: "a year",
        yy: "%d years"
    };

    function If(t, e, s, n) {
        var r = this._relativeTime[s];
        return bt(r) ? r(t, e, s, n) : r.replace(/%d/i, t)
    }

    function Of(t, e) {
        var s = this._relativeTime[t > 0 ? "future" : "past"];
        return bt(s) ? s(e) : s.replace(/%s/i, e)
    }
    var Ys = {};

    function je(t, e) {
        var s = t.toLowerCase();
        Ys[s] = Ys[s + "s"] = Ys[e] = t
    }

    function rt(t) {
        return typeof t == "string" ? Ys[t] || Ys[t.toLowerCase()] : void 0
    }

    function vo(t) {
        var e = {},
            s, n;
        for (n in t) le(t, n) && (s = rt(n), s && (e[s] = t[n]));
        return e
    }
    var da = {};

    function Ue(t, e) {
        da[t] = e
    }

    function Pf(t) {
        var e = [],
            s;
        for (s in t) le(t, s) && e.push({
            unit: s,
            priority: da[s]
        });
        return e.sort(function(n, r) {
            return n.priority - r.priority
        }), e
    }

    function Kn(t) {
        return t % 4 === 0 && t % 100 !== 0 || t % 400 === 0
    }

    function Xe(t) {
        return t < 0 ? Math.ceil(t) || 0 : Math.floor(t)
    }

    function ne(t) {
        var e = +t,
            s = 0;
        return e !== 0 && isFinite(e) && (s = Xe(e)), s
    }

    function As(t, e) {
        return function(s) {
            return s != null ? (fa(this, t, s), V.updateOffset(this, e), this) : In(this, t)
        }
    }

    function In(t, e) {
        return t.isValid() ? t._d["get" + (t._isUTC ? "UTC" : "") + e]() : NaN
    }

    function fa(t, e, s) {
        t.isValid() && !isNaN(s) && (e === "FullYear" && Kn(t.year()) && t.month() === 1 && t.date() === 29 ? (s = ne(s), t._d["set" + (t._isUTC ? "UTC" : "") + e](s, t.month(), sr(s, t.month()))) : t._d["set" + (t._isUTC ? "UTC" : "") + e](s))
    }

    function Df(t) {
        return t = rt(t), bt(this[t]) ? this[t]() : this
    }

    function Rf(t, e) {
        if (typeof t == "object") {
            t = vo(t);
            var s = Pf(t),
                n, r = s.length;
            for (n = 0; n < r; n++) this[s[n].unit](t[s[n].unit])
        } else if (t = rt(t), bt(this[t])) return this[t](e);
        return this
    }
    var ha = /\d/,
        Qe = /\d\d/,
        ma = /\d{3}/,
        yo = /\d{4}/,
        Qn = /[+-]?\d{6}/,
        we = /\d\d?/,
        pa = /\d\d\d\d?/,
        _a = /\d\d\d\d\d\d?/,
        Zn = /\d{1,3}/,
        bo = /\d{1,4}/,
        Xn = /[+-]?\d{1,6}/,
        Cs = /\d+/,
        er = /[+-]?\d+/,
        Mf = /Z|[+-]\d\d:?\d\d/gi,
        tr = /Z|[+-]\d\d(?::?\d\d)?/gi,
        Lf = /[+-]?\d+(\.\d{1,3})?/,
        on = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
        On;
    On = {};

    function J(t, e, s) {
        On[t] = bt(e) ? e : function(n, r) {
            return n && s ? s : e
        }
    }

    function Nf(t, e) {
        return le(On, t) ? On[t](e._strict, e._locale) : new RegExp(Ff(t))
    }

    function Ff(t) {
        return qe(t.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, s, n, r, o) {
            return s || n || r || o
        }))
    }

    function qe(t) {
        return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }
    var Lr = {};

    function he(t, e) {
        var s, n = e,
            r;
        for (typeof t == "string" && (t = [t]), It(e) && (n = function(o, i) {
                i[e] = ne(o)
            }), r = t.length, s = 0; s < r; s++) Lr[t[s]] = n
    }

    function an(t, e) {
        he(t, function(s, n, r, o) {
            r._w = r._w || {}, e(s, r._w, r, o)
        })
    }

    function jf(t, e, s) {
        e != null && le(Lr, t) && Lr[t](e, s._a, s, t)
    }
    var Le = 0,
        At = 1,
        gt = 2,
        Ae = 3,
        lt = 4,
        Ct = 5,
        Zt = 6,
        Uf = 7,
        Yf = 8;

    function Bf(t, e) {
        return (t % e + e) % e
    }
    var xe;
    Array.prototype.indexOf ? xe = Array.prototype.indexOf : xe = function(t) {
        var e;
        for (e = 0; e < this.length; ++e)
            if (this[e] === t) return e;
        return -1
    };

    function sr(t, e) {
        if (isNaN(t) || isNaN(e)) return NaN;
        var s = Bf(e, 12);
        return t += (e - s) / 12, s === 1 ? Kn(t) ? 29 : 28 : 31 - s % 7 % 2
    }
    Q("M", ["MM", 2], "Mo", function() {
        return this.month() + 1
    });
    Q("MMM", 0, 0, function(t) {
        return this.localeData().monthsShort(this, t)
    });
    Q("MMMM", 0, 0, function(t) {
        return this.localeData().months(this, t)
    });
    je("month", "M");
    Ue("month", 8);
    J("M", we);
    J("MM", we, Qe);
    J("MMM", function(t, e) {
        return e.monthsShortRegex(t)
    });
    J("MMMM", function(t, e) {
        return e.monthsRegex(t)
    });
    he(["M", "MM"], function(t, e) {
        e[At] = ne(t) - 1
    });
    he(["MMM", "MMMM"], function(t, e, s, n) {
        var r = s._locale.monthsParse(t, n, s._strict);
        r != null ? e[At] = r : te(s).invalidMonth = t
    });
    var Vf = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        ga = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        va = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
        Wf = on,
        zf = on;

    function Hf(t, e) {
        return t ? dt(this._months) ? this._months[t.month()] : this._months[(this._months.isFormat || va).test(e) ? "format" : "standalone"][t.month()] : dt(this._months) ? this._months : this._months.standalone
    }

    function Gf(t, e) {
        return t ? dt(this._monthsShort) ? this._monthsShort[t.month()] : this._monthsShort[va.test(e) ? "format" : "standalone"][t.month()] : dt(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
    }

    function qf(t, e, s) {
        var n, r, o, i = t.toLocaleLowerCase();
        if (!this._monthsParse)
            for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], n = 0; n < 12; ++n) o = yt([2e3, n]), this._shortMonthsParse[n] = this.monthsShort(o, "").toLocaleLowerCase(), this._longMonthsParse[n] = this.months(o, "").toLocaleLowerCase();
        return s ? e === "MMM" ? (r = xe.call(this._shortMonthsParse, i), r !== -1 ? r : null) : (r = xe.call(this._longMonthsParse, i), r !== -1 ? r : null) : e === "MMM" ? (r = xe.call(this._shortMonthsParse, i), r !== -1 ? r : (r = xe.call(this._longMonthsParse, i), r !== -1 ? r : null)) : (r = xe.call(this._longMonthsParse, i), r !== -1 ? r : (r = xe.call(this._shortMonthsParse, i), r !== -1 ? r : null))
    }

    function Jf(t, e, s) {
        var n, r, o;
        if (this._monthsParseExact) return qf.call(this, t, e, s);
        for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), n = 0; n < 12; n++) {
            if (r = yt([2e3, n]), s && !this._longMonthsParse[n] && (this._longMonthsParse[n] = new RegExp("^" + this.months(r, "").replace(".", "") + "$", "i"), this._shortMonthsParse[n] = new RegExp("^" + this.monthsShort(r, "").replace(".", "") + "$", "i")), !s && !this._monthsParse[n] && (o = "^" + this.months(r, "") + "|^" + this.monthsShort(r, ""), this._monthsParse[n] = new RegExp(o.replace(".", ""), "i")), s && e === "MMMM" && this._longMonthsParse[n].test(t)) return n;
            if (s && e === "MMM" && this._shortMonthsParse[n].test(t)) return n;
            if (!s && this._monthsParse[n].test(t)) return n
        }
    }

    function ya(t, e) {
        var s;
        if (!t.isValid()) return t;
        if (typeof e == "string") {
            if (/^\d+$/.test(e)) e = ne(e);
            else if (e = t.localeData().monthsParse(e), !It(e)) return t
        }
        return s = Math.min(t.date(), sr(t.year(), e)), t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](e, s), t
    }

    function ba(t) {
        return t != null ? (ya(this, t), V.updateOffset(this, !0), this) : In(this, "Month")
    }

    function Kf() {
        return sr(this.year(), this.month())
    }

    function Qf(t) {
        return this._monthsParseExact ? (le(this, "_monthsRegex") || wa.call(this), t ? this._monthsShortStrictRegex : this._monthsShortRegex) : (le(this, "_monthsShortRegex") || (this._monthsShortRegex = Wf), this._monthsShortStrictRegex && t ? this._monthsShortStrictRegex : this._monthsShortRegex)
    }

    function Zf(t) {
        return this._monthsParseExact ? (le(this, "_monthsRegex") || wa.call(this), t ? this._monthsStrictRegex : this._monthsRegex) : (le(this, "_monthsRegex") || (this._monthsRegex = zf), this._monthsStrictRegex && t ? this._monthsStrictRegex : this._monthsRegex)
    }

    function wa() {
        function t(i, a) {
            return a.length - i.length
        }
        var e = [],
            s = [],
            n = [],
            r, o;
        for (r = 0; r < 12; r++) o = yt([2e3, r]), e.push(this.monthsShort(o, "")), s.push(this.months(o, "")), n.push(this.months(o, "")), n.push(this.monthsShort(o, ""));
        for (e.sort(t), s.sort(t), n.sort(t), r = 0; r < 12; r++) e[r] = qe(e[r]), s[r] = qe(s[r]);
        for (r = 0; r < 24; r++) n[r] = qe(n[r]);
        this._monthsRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + e.join("|") + ")", "i")
    }
    Q("Y", 0, 0, function() {
        var t = this.year();
        return t <= 9999 ? vt(t, 4) : "+" + t
    });
    Q(0, ["YY", 2], 0, function() {
        return this.year() % 100
    });
    Q(0, ["YYYY", 4], 0, "year");
    Q(0, ["YYYYY", 5], 0, "year");
    Q(0, ["YYYYYY", 6, !0], 0, "year");
    je("year", "y");
    Ue("year", 1);
    J("Y", er);
    J("YY", we, Qe);
    J("YYYY", bo, yo);
    J("YYYYY", Xn, Qn);
    J("YYYYYY", Xn, Qn);
    he(["YYYYY", "YYYYYY"], Le);
    he("YYYY", function(t, e) {
        e[Le] = t.length === 2 ? V.parseTwoDigitYear(t) : ne(t)
    });
    he("YY", function(t, e) {
        e[Le] = V.parseTwoDigitYear(t)
    });
    he("Y", function(t, e) {
        e[Le] = parseInt(t, 10)
    });

    function Bs(t) {
        return Kn(t) ? 366 : 365
    }
    V.parseTwoDigitYear = function(t) {
        return ne(t) + (ne(t) > 68 ? 1900 : 2e3)
    };
    var ka = As("FullYear", !0);

    function Xf() {
        return Kn(this.year())
    }

    function eh(t, e, s, n, r, o, i) {
        var a;
        return t < 100 && t >= 0 ? (a = new Date(t + 400, e, s, n, r, o, i), isFinite(a.getFullYear()) && a.setFullYear(t)) : a = new Date(t, e, s, n, r, o, i), a
    }

    function Ks(t) {
        var e, s;
        return t < 100 && t >= 0 ? (s = Array.prototype.slice.call(arguments), s[0] = t + 400, e = new Date(Date.UTC.apply(null, s)), isFinite(e.getUTCFullYear()) && e.setUTCFullYear(t)) : e = new Date(Date.UTC.apply(null, arguments)), e
    }

    function Pn(t, e, s) {
        var n = 7 + e - s,
            r = (7 + Ks(t, 0, n).getUTCDay() - e) % 7;
        return -r + n - 1
    }

    function Sa(t, e, s, n, r) {
        var o = (7 + s - n) % 7,
            i = Pn(t, n, r),
            a = 1 + 7 * (e - 1) + o + i,
            u, c;
        return a <= 0 ? (u = t - 1, c = Bs(u) + a) : a > Bs(t) ? (u = t + 1, c = a - Bs(t)) : (u = t, c = a), {
            year: u,
            dayOfYear: c
        }
    }

    function Qs(t, e, s) {
        var n = Pn(t.year(), e, s),
            r = Math.floor((t.dayOfYear() - n - 1) / 7) + 1,
            o, i;
        return r < 1 ? (i = t.year() - 1, o = r + $t(i, e, s)) : r > $t(t.year(), e, s) ? (o = r - $t(t.year(), e, s), i = t.year() + 1) : (i = t.year(), o = r), {
            week: o,
            year: i
        }
    }

    function $t(t, e, s) {
        var n = Pn(t, e, s),
            r = Pn(t + 1, e, s);
        return (Bs(t) - n + r) / 7
    }
    Q("w", ["ww", 2], "wo", "week");
    Q("W", ["WW", 2], "Wo", "isoWeek");
    je("week", "w");
    je("isoWeek", "W");
    Ue("week", 5);
    Ue("isoWeek", 5);
    J("w", we);
    J("ww", we, Qe);
    J("W", we);
    J("WW", we, Qe);
    an(["w", "ww", "W", "WW"], function(t, e, s, n) {
        e[n.substr(0, 1)] = ne(t)
    });

    function th(t) {
        return Qs(t, this._week.dow, this._week.doy).week
    }
    var sh = {
        dow: 0,
        doy: 6
    };

    function nh() {
        return this._week.dow
    }

    function rh() {
        return this._week.doy
    }

    function oh(t) {
        var e = this.localeData().week(this);
        return t == null ? e : this.add((t - e) * 7, "d")
    }

    function ih(t) {
        var e = Qs(this, 1, 4).week;
        return t == null ? e : this.add((t - e) * 7, "d")
    }
    Q("d", 0, "do", "day");
    Q("dd", 0, 0, function(t) {
        return this.localeData().weekdaysMin(this, t)
    });
    Q("ddd", 0, 0, function(t) {
        return this.localeData().weekdaysShort(this, t)
    });
    Q("dddd", 0, 0, function(t) {
        return this.localeData().weekdays(this, t)
    });
    Q("e", 0, 0, "weekday");
    Q("E", 0, 0, "isoWeekday");
    je("day", "d");
    je("weekday", "e");
    je("isoWeekday", "E");
    Ue("day", 11);
    Ue("weekday", 11);
    Ue("isoWeekday", 11);
    J("d", we);
    J("e", we);
    J("E", we);
    J("dd", function(t, e) {
        return e.weekdaysMinRegex(t)
    });
    J("ddd", function(t, e) {
        return e.weekdaysShortRegex(t)
    });
    J("dddd", function(t, e) {
        return e.weekdaysRegex(t)
    });
    an(["dd", "ddd", "dddd"], function(t, e, s, n) {
        var r = s._locale.weekdaysParse(t, n, s._strict);
        r != null ? e.d = r : te(s).invalidWeekday = t
    });
    an(["d", "e", "E"], function(t, e, s, n) {
        e[n] = ne(t)
    });

    function ah(t, e) {
        return typeof t != "string" ? t : isNaN(t) ? (t = e.weekdaysParse(t), typeof t == "number" ? t : null) : parseInt(t, 10)
    }

    function lh(t, e) {
        return typeof t == "string" ? e.weekdaysParse(t) % 7 || 7 : isNaN(t) ? null : t
    }

    function wo(t, e) {
        return t.slice(e, 7).concat(t.slice(0, e))
    }
    var uh = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        Ta = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        ch = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        dh = on,
        fh = on,
        hh = on;

    function mh(t, e) {
        var s = dt(this._weekdays) ? this._weekdays : this._weekdays[t && t !== !0 && this._weekdays.isFormat.test(e) ? "format" : "standalone"];
        return t === !0 ? wo(s, this._week.dow) : t ? s[t.day()] : s
    }

    function ph(t) {
        return t === !0 ? wo(this._weekdaysShort, this._week.dow) : t ? this._weekdaysShort[t.day()] : this._weekdaysShort
    }

    function _h(t) {
        return t === !0 ? wo(this._weekdaysMin, this._week.dow) : t ? this._weekdaysMin[t.day()] : this._weekdaysMin
    }

    function gh(t, e, s) {
        var n, r, o, i = t.toLocaleLowerCase();
        if (!this._weekdaysParse)
            for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], n = 0; n < 7; ++n) o = yt([2e3, 1]).day(n), this._minWeekdaysParse[n] = this.weekdaysMin(o, "").toLocaleLowerCase(), this._shortWeekdaysParse[n] = this.weekdaysShort(o, "").toLocaleLowerCase(), this._weekdaysParse[n] = this.weekdays(o, "").toLocaleLowerCase();
        return s ? e === "dddd" ? (r = xe.call(this._weekdaysParse, i), r !== -1 ? r : null) : e === "ddd" ? (r = xe.call(this._shortWeekdaysParse, i), r !== -1 ? r : null) : (r = xe.call(this._minWeekdaysParse, i), r !== -1 ? r : null) : e === "dddd" ? (r = xe.call(this._weekdaysParse, i), r !== -1 || (r = xe.call(this._shortWeekdaysParse, i), r !== -1) ? r : (r = xe.call(this._minWeekdaysParse, i), r !== -1 ? r : null)) : e === "ddd" ? (r = xe.call(this._shortWeekdaysParse, i), r !== -1 || (r = xe.call(this._weekdaysParse, i), r !== -1) ? r : (r = xe.call(this._minWeekdaysParse, i), r !== -1 ? r : null)) : (r = xe.call(this._minWeekdaysParse, i), r !== -1 || (r = xe.call(this._weekdaysParse, i), r !== -1) ? r : (r = xe.call(this._shortWeekdaysParse, i), r !== -1 ? r : null))
    }

    function vh(t, e, s) {
        var n, r, o;
        if (this._weekdaysParseExact) return gh.call(this, t, e, s);
        for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), n = 0; n < 7; n++) {
            if (r = yt([2e3, 1]).day(n), s && !this._fullWeekdaysParse[n] && (this._fullWeekdaysParse[n] = new RegExp("^" + this.weekdays(r, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[n] = new RegExp("^" + this.weekdaysShort(r, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[n] = new RegExp("^" + this.weekdaysMin(r, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[n] || (o = "^" + this.weekdays(r, "") + "|^" + this.weekdaysShort(r, "") + "|^" + this.weekdaysMin(r, ""), this._weekdaysParse[n] = new RegExp(o.replace(".", ""), "i")), s && e === "dddd" && this._fullWeekdaysParse[n].test(t)) return n;
            if (s && e === "ddd" && this._shortWeekdaysParse[n].test(t)) return n;
            if (s && e === "dd" && this._minWeekdaysParse[n].test(t)) return n;
            if (!s && this._weekdaysParse[n].test(t)) return n
        }
    }

    function yh(t) {
        if (!this.isValid()) return t != null ? this : NaN;
        var e = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        return t != null ? (t = ah(t, this.localeData()), this.add(t - e, "d")) : e
    }

    function bh(t) {
        if (!this.isValid()) return t != null ? this : NaN;
        var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return t == null ? e : this.add(t - e, "d")
    }

    function wh(t) {
        if (!this.isValid()) return t != null ? this : NaN;
        if (t != null) {
            var e = lh(t, this.localeData());
            return this.day(this.day() % 7 ? e : e - 7)
        } else return this.day() || 7
    }

    function kh(t) {
        return this._weekdaysParseExact ? (le(this, "_weekdaysRegex") || ko.call(this), t ? this._weekdaysStrictRegex : this._weekdaysRegex) : (le(this, "_weekdaysRegex") || (this._weekdaysRegex = dh), this._weekdaysStrictRegex && t ? this._weekdaysStrictRegex : this._weekdaysRegex)
    }

    function Sh(t) {
        return this._weekdaysParseExact ? (le(this, "_weekdaysRegex") || ko.call(this), t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (le(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = fh), this._weekdaysShortStrictRegex && t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
    }

    function Th(t) {
        return this._weekdaysParseExact ? (le(this, "_weekdaysRegex") || ko.call(this), t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (le(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = hh), this._weekdaysMinStrictRegex && t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
    }

    function ko() {
        function t(d, f) {
            return f.length - d.length
        }
        var e = [],
            s = [],
            n = [],
            r = [],
            o, i, a, u, c;
        for (o = 0; o < 7; o++) i = yt([2e3, 1]).day(o), a = qe(this.weekdaysMin(i, "")), u = qe(this.weekdaysShort(i, "")), c = qe(this.weekdays(i, "")), e.push(a), s.push(u), n.push(c), r.push(a), r.push(u), r.push(c);
        e.sort(t), s.sort(t), n.sort(t), r.sort(t), this._weekdaysRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + e.join("|") + ")", "i")
    }

    function So() {
        return this.hours() % 12 || 12
    }

    function xh() {
        return this.hours() || 24
    }
    Q("H", ["HH", 2], 0, "hour");
    Q("h", ["hh", 2], 0, So);
    Q("k", ["kk", 2], 0, xh);
    Q("hmm", 0, 0, function() {
        return "" + So.apply(this) + vt(this.minutes(), 2)
    });
    Q("hmmss", 0, 0, function() {
        return "" + So.apply(this) + vt(this.minutes(), 2) + vt(this.seconds(), 2)
    });
    Q("Hmm", 0, 0, function() {
        return "" + this.hours() + vt(this.minutes(), 2)
    });
    Q("Hmmss", 0, 0, function() {
        return "" + this.hours() + vt(this.minutes(), 2) + vt(this.seconds(), 2)
    });

    function xa(t, e) {
        Q(t, 0, 0, function() {
            return this.localeData().meridiem(this.hours(), this.minutes(), e)
        })
    }
    xa("a", !0);
    xa("A", !1);
    je("hour", "h");
    Ue("hour", 13);

    function Aa(t, e) {
        return e._meridiemParse
    }
    J("a", Aa);
    J("A", Aa);
    J("H", we);
    J("h", we);
    J("k", we);
    J("HH", we, Qe);
    J("hh", we, Qe);
    J("kk", we, Qe);
    J("hmm", pa);
    J("hmmss", _a);
    J("Hmm", pa);
    J("Hmmss", _a);
    he(["H", "HH"], Ae);
    he(["k", "kk"], function(t, e, s) {
        var n = ne(t);
        e[Ae] = n === 24 ? 0 : n
    });
    he(["a", "A"], function(t, e, s) {
        s._isPm = s._locale.isPM(t), s._meridiem = t
    });
    he(["h", "hh"], function(t, e, s) {
        e[Ae] = ne(t), te(s).bigHour = !0
    });
    he("hmm", function(t, e, s) {
        var n = t.length - 2;
        e[Ae] = ne(t.substr(0, n)), e[lt] = ne(t.substr(n)), te(s).bigHour = !0
    });
    he("hmmss", function(t, e, s) {
        var n = t.length - 4,
            r = t.length - 2;
        e[Ae] = ne(t.substr(0, n)), e[lt] = ne(t.substr(n, 2)), e[Ct] = ne(t.substr(r)), te(s).bigHour = !0
    });
    he("Hmm", function(t, e, s) {
        var n = t.length - 2;
        e[Ae] = ne(t.substr(0, n)), e[lt] = ne(t.substr(n))
    });
    he("Hmmss", function(t, e, s) {
        var n = t.length - 4,
            r = t.length - 2;
        e[Ae] = ne(t.substr(0, n)), e[lt] = ne(t.substr(n, 2)), e[Ct] = ne(t.substr(r))
    });

    function Ah(t) {
        return (t + "").toLowerCase().charAt(0) === "p"
    }
    var Ch = /[ap]\.?m?\.?/i,
        $h = As("Hours", !0);

    function Eh(t, e, s) {
        return t > 11 ? s ? "pm" : "PM" : s ? "am" : "AM"
    }
    var Ca = {
            calendar: vf,
            longDateFormat: kf,
            invalidDate: Tf,
            ordinal: Af,
            dayOfMonthOrdinalParse: Cf,
            relativeTime: Ef,
            months: Vf,
            monthsShort: ga,
            week: sh,
            weekdays: uh,
            weekdaysMin: ch,
            weekdaysShort: Ta,
            meridiemParse: Ch
        },
        ke = {},
        Os = {},
        Zs;

    function Ih(t, e) {
        var s, n = Math.min(t.length, e.length);
        for (s = 0; s < n; s += 1)
            if (t[s] !== e[s]) return s;
        return n
    }

    function li(t) {
        return t && t.toLowerCase().replace("_", "-")
    }

    function Oh(t) {
        for (var e = 0, s, n, r, o; e < t.length;) {
            for (o = li(t[e]).split("-"), s = o.length, n = li(t[e + 1]), n = n ? n.split("-") : null; s > 0;) {
                if (r = nr(o.slice(0, s).join("-")), r) return r;
                if (n && n.length >= s && Ih(o, n) >= s - 1) break;
                s--
            }
            e++
        }
        return Zs
    }

    function Ph(t) {
        return t.match("^[^/\\\\]*$") != null
    }

    function nr(t) {
        var e = null,
            s;
        if (ke[t] === void 0 && typeof xn < "u" && xn && xn.exports && Ph(t)) try {
            e = Zs._abbr, s = require, s("./locale/" + t), Wt(e)
        } catch {
            ke[t] = null
        }
        return ke[t]
    }

    function Wt(t, e) {
        var s;
        return t && (Ve(e) ? s = Pt(t) : s = To(t, e), s ? Zs = s : typeof console < "u" && console.warn && console.warn("Locale " + t + " not found. Did you forget to load it?")), Zs._abbr
    }

    function To(t, e) {
        if (e !== null) {
            var s, n = Ca;
            if (e.abbr = t, ke[t] != null) ua("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), n = ke[t]._config;
            else if (e.parentLocale != null)
                if (ke[e.parentLocale] != null) n = ke[e.parentLocale]._config;
                else if (s = nr(e.parentLocale), s != null) n = s._config;
            else return Os[e.parentLocale] || (Os[e.parentLocale] = []), Os[e.parentLocale].push({
                name: t,
                config: e
            }), null;
            return ke[t] = new _o(Rr(n, e)), Os[t] && Os[t].forEach(function(r) {
                To(r.name, r.config)
            }), Wt(t), ke[t]
        } else return delete ke[t], null
    }

    function Dh(t, e) {
        if (e != null) {
            var s, n, r = Ca;
            ke[t] != null && ke[t].parentLocale != null ? ke[t].set(Rr(ke[t]._config, e)) : (n = nr(t), n != null && (r = n._config), e = Rr(r, e), n == null && (e.abbr = t), s = new _o(e), s.parentLocale = ke[t], ke[t] = s), Wt(t)
        } else ke[t] != null && (ke[t].parentLocale != null ? (ke[t] = ke[t].parentLocale, t === Wt() && Wt(t)) : ke[t] != null && delete ke[t]);
        return ke[t]
    }

    function Pt(t) {
        var e;
        if (t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t) return Zs;
        if (!dt(t)) {
            if (e = nr(t), e) return e;
            t = [t]
        }
        return Oh(t)
    }

    function Rh() {
        return Mr(ke)
    }

    function xo(t) {
        var e, s = t._a;
        return s && te(t).overflow === -2 && (e = s[At] < 0 || s[At] > 11 ? At : s[gt] < 1 || s[gt] > sr(s[Le], s[At]) ? gt : s[Ae] < 0 || s[Ae] > 24 || s[Ae] === 24 && (s[lt] !== 0 || s[Ct] !== 0 || s[Zt] !== 0) ? Ae : s[lt] < 0 || s[lt] > 59 ? lt : s[Ct] < 0 || s[Ct] > 59 ? Ct : s[Zt] < 0 || s[Zt] > 999 ? Zt : -1, te(t)._overflowDayOfYear && (e < Le || e > gt) && (e = gt), te(t)._overflowWeeks && e === -1 && (e = Uf), te(t)._overflowWeekday && e === -1 && (e = Yf), te(t).overflow = e), t
    }
    var Mh = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        Lh = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        Nh = /Z|[+-]\d\d(?::?\d\d)?/,
        dn = [
            ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
            ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
            ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
            ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
            ["YYYY-DDD", /\d{4}-\d{3}/],
            ["YYYY-MM", /\d{4}-\d\d/, !1],
            ["YYYYYYMMDD", /[+-]\d{10}/],
            ["YYYYMMDD", /\d{8}/],
            ["GGGG[W]WWE", /\d{4}W\d{3}/],
            ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
            ["YYYYDDD", /\d{7}/],
            ["YYYYMM", /\d{6}/, !1],
            ["YYYY", /\d{4}/, !1]
        ],
        _r = [
            ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
            ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
            ["HH:mm:ss", /\d\d:\d\d:\d\d/],
            ["HH:mm", /\d\d:\d\d/],
            ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
            ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
            ["HHmmss", /\d\d\d\d\d\d/],
            ["HHmm", /\d\d\d\d/],
            ["HH", /\d\d/]
        ],
        Fh = /^\/?Date\((-?\d+)/i,
        jh = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
        Uh = {
            UT: 0,
            GMT: 0,
            EDT: -4 * 60,
            EST: -5 * 60,
            CDT: -5 * 60,
            CST: -6 * 60,
            MDT: -6 * 60,
            MST: -7 * 60,
            PDT: -7 * 60,
            PST: -8 * 60
        };

    function $a(t) {
        var e, s, n = t._i,
            r = Mh.exec(n) || Lh.exec(n),
            o, i, a, u, c = dn.length,
            d = _r.length;
        if (r) {
            for (te(t).iso = !0, e = 0, s = c; e < s; e++)
                if (dn[e][1].exec(r[1])) {
                    i = dn[e][0], o = dn[e][2] !== !1;
                    break
                } if (i == null) {
                t._isValid = !1;
                return
            }
            if (r[3]) {
                for (e = 0, s = d; e < s; e++)
                    if (_r[e][1].exec(r[3])) {
                        a = (r[2] || " ") + _r[e][0];
                        break
                    } if (a == null) {
                    t._isValid = !1;
                    return
                }
            }
            if (!o && a != null) {
                t._isValid = !1;
                return
            }
            if (r[4])
                if (Nh.exec(r[4])) u = "Z";
                else {
                    t._isValid = !1;
                    return
                } t._f = i + (a || "") + (u || ""), Co(t)
        } else t._isValid = !1
    }

    function Yh(t, e, s, n, r, o) {
        var i = [Bh(t), ga.indexOf(e), parseInt(s, 10), parseInt(n, 10), parseInt(r, 10)];
        return o && i.push(parseInt(o, 10)), i
    }

    function Bh(t) {
        var e = parseInt(t, 10);
        return e <= 49 ? 2e3 + e : e <= 999 ? 1900 + e : e
    }

    function Vh(t) {
        return t.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
    }

    function Wh(t, e, s) {
        if (t) {
            var n = Ta.indexOf(t),
                r = new Date(e[0], e[1], e[2]).getDay();
            if (n !== r) return te(s).weekdayMismatch = !0, s._isValid = !1, !1
        }
        return !0
    }

    function zh(t, e, s) {
        if (t) return Uh[t];
        if (e) return 0;
        var n = parseInt(s, 10),
            r = n % 100,
            o = (n - r) / 100;
        return o * 60 + r
    }

    function Ea(t) {
        var e = jh.exec(Vh(t._i)),
            s;
        if (e) {
            if (s = Yh(e[4], e[3], e[2], e[5], e[6], e[7]), !Wh(e[1], s, t)) return;
            t._a = s, t._tzm = zh(e[8], e[9], e[10]), t._d = Ks.apply(null, t._a), t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), te(t).rfc2822 = !0
        } else t._isValid = !1
    }

    function Hh(t) {
        var e = Fh.exec(t._i);
        if (e !== null) {
            t._d = new Date(+e[1]);
            return
        }
        if ($a(t), t._isValid === !1) delete t._isValid;
        else return;
        if (Ea(t), t._isValid === !1) delete t._isValid;
        else return;
        t._strict ? t._isValid = !1 : V.createFromInputFallback(t)
    }
    V.createFromInputFallback = nt("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(t) {
        t._d = new Date(t._i + (t._useUTC ? " UTC" : ""))
    });

    function cs(t, e, s) {
        return t != null ? t : e != null ? e : s
    }

    function Gh(t) {
        var e = new Date(V.now());
        return t._useUTC ? [e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()] : [e.getFullYear(), e.getMonth(), e.getDate()]
    }

    function Ao(t) {
        var e, s, n = [],
            r, o, i;
        if (!t._d) {
            for (r = Gh(t), t._w && t._a[gt] == null && t._a[At] == null && qh(t), t._dayOfYear != null && (i = cs(t._a[Le], r[Le]), (t._dayOfYear > Bs(i) || t._dayOfYear === 0) && (te(t)._overflowDayOfYear = !0), s = Ks(i, 0, t._dayOfYear), t._a[At] = s.getUTCMonth(), t._a[gt] = s.getUTCDate()), e = 0; e < 3 && t._a[e] == null; ++e) t._a[e] = n[e] = r[e];
            for (; e < 7; e++) t._a[e] = n[e] = t._a[e] == null ? e === 2 ? 1 : 0 : t._a[e];
            t._a[Ae] === 24 && t._a[lt] === 0 && t._a[Ct] === 0 && t._a[Zt] === 0 && (t._nextDay = !0, t._a[Ae] = 0), t._d = (t._useUTC ? Ks : eh).apply(null, n), o = t._useUTC ? t._d.getUTCDay() : t._d.getDay(), t._tzm != null && t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), t._nextDay && (t._a[Ae] = 24), t._w && typeof t._w.d < "u" && t._w.d !== o && (te(t).weekdayMismatch = !0)
        }
    }

    function qh(t) {
        var e, s, n, r, o, i, a, u, c;
        e = t._w, e.GG != null || e.W != null || e.E != null ? (o = 1, i = 4, s = cs(e.GG, t._a[Le], Qs(be(), 1, 4).year), n = cs(e.W, 1), r = cs(e.E, 1), (r < 1 || r > 7) && (u = !0)) : (o = t._locale._week.dow, i = t._locale._week.doy, c = Qs(be(), o, i), s = cs(e.gg, t._a[Le], c.year), n = cs(e.w, c.week), e.d != null ? (r = e.d, (r < 0 || r > 6) && (u = !0)) : e.e != null ? (r = e.e + o, (e.e < 0 || e.e > 6) && (u = !0)) : r = o), n < 1 || n > $t(s, o, i) ? te(t)._overflowWeeks = !0 : u != null ? te(t)._overflowWeekday = !0 : (a = Sa(s, n, r, o, i), t._a[Le] = a.year, t._dayOfYear = a.dayOfYear)
    }
    V.ISO_8601 = function() {};
    V.RFC_2822 = function() {};

    function Co(t) {
        if (t._f === V.ISO_8601) {
            $a(t);
            return
        }
        if (t._f === V.RFC_2822) {
            Ea(t);
            return
        }
        t._a = [], te(t).empty = !0;
        var e = "" + t._i,
            s, n, r, o, i, a = e.length,
            u = 0,
            c, d;
        for (r = ca(t._f, t._locale).match(go) || [], d = r.length, s = 0; s < d; s++) o = r[s], n = (e.match(Nf(o, t)) || [])[0], n && (i = e.substr(0, e.indexOf(n)), i.length > 0 && te(t).unusedInput.push(i), e = e.slice(e.indexOf(n) + n.length), u += n.length), vs[o] ? (n ? te(t).empty = !1 : te(t).unusedTokens.push(o), jf(o, n, t)) : t._strict && !n && te(t).unusedTokens.push(o);
        te(t).charsLeftOver = a - u, e.length > 0 && te(t).unusedInput.push(e), t._a[Ae] <= 12 && te(t).bigHour === !0 && t._a[Ae] > 0 && (te(t).bigHour = void 0), te(t).parsedDateParts = t._a.slice(0), te(t).meridiem = t._meridiem, t._a[Ae] = Jh(t._locale, t._a[Ae], t._meridiem), c = te(t).era, c !== null && (t._a[Le] = t._locale.erasConvertYear(c, t._a[Le])), Ao(t), xo(t)
    }

    function Jh(t, e, s) {
        var n;
        return s == null ? e : t.meridiemHour != null ? t.meridiemHour(e, s) : (t.isPM != null && (n = t.isPM(s), n && e < 12 && (e += 12), !n && e === 12 && (e = 0)), e)
    }

    function Kh(t) {
        var e, s, n, r, o, i, a = !1,
            u = t._f.length;
        if (u === 0) {
            te(t).invalidFormat = !0, t._d = new Date(NaN);
            return
        }
        for (r = 0; r < u; r++) o = 0, i = !1, e = po({}, t), t._useUTC != null && (e._useUTC = t._useUTC), e._f = t._f[r], Co(e), mo(e) && (i = !0), o += te(e).charsLeftOver, o += te(e).unusedTokens.length * 10, te(e).score = o, a ? o < n && (n = o, s = e) : (n == null || o < n || i) && (n = o, s = e, i && (a = !0));
        Bt(t, s || e)
    }

    function Qh(t) {
        if (!t._d) {
            var e = vo(t._i),
                s = e.day === void 0 ? e.date : e.day;
            t._a = aa([e.year, e.month, s, e.hour, e.minute, e.second, e.millisecond], function(n) {
                return n && parseInt(n, 10)
            }), Ao(t)
        }
    }

    function Zh(t) {
        var e = new rn(xo(Ia(t)));
        return e._nextDay && (e.add(1, "d"), e._nextDay = void 0), e
    }

    function Ia(t) {
        var e = t._i,
            s = t._f;
        return t._locale = t._locale || Pt(t._l), e === null || s === void 0 && e === "" ? Jn({
            nullInput: !0
        }) : (typeof e == "string" && (t._i = e = t._locale.preparse(e)), ft(e) ? new rn(xo(e)) : (nn(e) ? t._d = e : dt(s) ? Kh(t) : s ? Co(t) : Xh(t), mo(t) || (t._d = null), t))
    }

    function Xh(t) {
        var e = t._i;
        Ve(e) ? t._d = new Date(V.now()) : nn(e) ? t._d = new Date(e.valueOf()) : typeof e == "string" ? Hh(t) : dt(e) ? (t._a = aa(e.slice(0), function(s) {
            return parseInt(s, 10)
        }), Ao(t)) : ts(e) ? Qh(t) : It(e) ? t._d = new Date(e) : V.createFromInputFallback(t)
    }

    function Oa(t, e, s, n, r) {
        var o = {};
        return (e === !0 || e === !1) && (n = e, e = void 0), (s === !0 || s === !1) && (n = s, s = void 0), (ts(t) && ho(t) || dt(t) && t.length === 0) && (t = void 0), o._isAMomentObject = !0, o._useUTC = o._isUTC = r, o._l = s, o._i = t, o._f = e, o._strict = n, Zh(o)
    }

    function be(t, e, s, n) {
        return Oa(t, e, s, n, !1)
    }
    var em = nt("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
            var t = be.apply(null, arguments);
            return this.isValid() && t.isValid() ? t < this ? this : t : Jn()
        }),
        tm = nt("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
            var t = be.apply(null, arguments);
            return this.isValid() && t.isValid() ? t > this ? this : t : Jn()
        });

    function Pa(t, e) {
        var s, n;
        if (e.length === 1 && dt(e[0]) && (e = e[0]), !e.length) return be();
        for (s = e[0], n = 1; n < e.length; ++n)(!e[n].isValid() || e[n][t](s)) && (s = e[n]);
        return s
    }

    function sm() {
        var t = [].slice.call(arguments, 0);
        return Pa("isBefore", t)
    }

    function nm() {
        var t = [].slice.call(arguments, 0);
        return Pa("isAfter", t)
    }
    var rm = function() {
            return Date.now ? Date.now() : +new Date
        },
        Ps = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

    function om(t) {
        var e, s = !1,
            n, r = Ps.length;
        for (e in t)
            if (le(t, e) && !(xe.call(Ps, e) !== -1 && (t[e] == null || !isNaN(t[e])))) return !1;
        for (n = 0; n < r; ++n)
            if (t[Ps[n]]) {
                if (s) return !1;
                parseFloat(t[Ps[n]]) !== ne(t[Ps[n]]) && (s = !0)
            } return !0
    }

    function im() {
        return this._isValid
    }

    function am() {
        return mt(NaN)
    }

    function rr(t) {
        var e = vo(t),
            s = e.year || 0,
            n = e.quarter || 0,
            r = e.month || 0,
            o = e.week || e.isoWeek || 0,
            i = e.day || 0,
            a = e.hour || 0,
            u = e.minute || 0,
            c = e.second || 0,
            d = e.millisecond || 0;
        this._isValid = om(e), this._milliseconds = +d + c * 1e3 + u * 6e4 + a * 1e3 * 60 * 60, this._days = +i + o * 7, this._months = +r + n * 3 + s * 12, this._data = {}, this._locale = Pt(), this._bubble()
    }

    function vn(t) {
        return t instanceof rr
    }

    function Nr(t) {
        return t < 0 ? Math.round(-1 * t) * -1 : Math.round(t)
    }

    function lm(t, e, s) {
        var n = Math.min(t.length, e.length),
            r = Math.abs(t.length - e.length),
            o = 0,
            i;
        for (i = 0; i < n; i++)(s && t[i] !== e[i] || !s && ne(t[i]) !== ne(e[i])) && o++;
        return o + r
    }

    function Da(t, e) {
        Q(t, 0, 0, function() {
            var s = this.utcOffset(),
                n = "+";
            return s < 0 && (s = -s, n = "-"), n + vt(~~(s / 60), 2) + e + vt(~~s % 60, 2)
        })
    }
    Da("Z", ":");
    Da("ZZ", "");
    J("Z", tr);
    J("ZZ", tr);
    he(["Z", "ZZ"], function(t, e, s) {
        s._useUTC = !0, s._tzm = $o(tr, t)
    });
    var um = /([\+\-]|\d\d)/gi;

    function $o(t, e) {
        var s = (e || "").match(t),
            n, r, o;
        return s === null ? null : (n = s[s.length - 1] || [], r = (n + "").match(um) || ["-", 0, 0], o = +(r[1] * 60) + ne(r[2]), o === 0 ? 0 : r[0] === "+" ? o : -o)
    }

    function Eo(t, e) {
        var s, n;
        return e._isUTC ? (s = e.clone(), n = (ft(t) || nn(t) ? t.valueOf() : be(t).valueOf()) - s.valueOf(), s._d.setTime(s._d.valueOf() + n), V.updateOffset(s, !1), s) : be(t).local()
    }

    function Fr(t) {
        return -Math.round(t._d.getTimezoneOffset())
    }
    V.updateOffset = function() {};

    function cm(t, e, s) {
        var n = this._offset || 0,
            r;
        if (!this.isValid()) return t != null ? this : NaN;
        if (t != null) {
            if (typeof t == "string") {
                if (t = $o(tr, t), t === null) return this
            } else Math.abs(t) < 16 && !s && (t = t * 60);
            return !this._isUTC && e && (r = Fr(this)), this._offset = t, this._isUTC = !0, r != null && this.add(r, "m"), n !== t && (!e || this._changeInProgress ? La(this, mt(t - n, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, V.updateOffset(this, !0), this._changeInProgress = null)), this
        } else return this._isUTC ? n : Fr(this)
    }

    function dm(t, e) {
        return t != null ? (typeof t != "string" && (t = -t), this.utcOffset(t, e), this) : -this.utcOffset()
    }

    function fm(t) {
        return this.utcOffset(0, t)
    }

    function hm(t) {
        return this._isUTC && (this.utcOffset(0, t), this._isUTC = !1, t && this.subtract(Fr(this), "m")), this
    }

    function mm() {
        if (this._tzm != null) this.utcOffset(this._tzm, !1, !0);
        else if (typeof this._i == "string") {
            var t = $o(Mf, this._i);
            t != null ? this.utcOffset(t) : this.utcOffset(0, !0)
        }
        return this
    }

    function pm(t) {
        return this.isValid() ? (t = t ? be(t).utcOffset() : 0, (this.utcOffset() - t) % 60 === 0) : !1
    }

    function _m() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
    }

    function gm() {
        if (!Ve(this._isDSTShifted)) return this._isDSTShifted;
        var t = {},
            e;
        return po(t, this), t = Ia(t), t._a ? (e = t._isUTC ? yt(t._a) : be(t._a), this._isDSTShifted = this.isValid() && lm(t._a, e.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted
    }

    function vm() {
        return this.isValid() ? !this._isUTC : !1
    }

    function ym() {
        return this.isValid() ? this._isUTC : !1
    }

    function Ra() {
        return this.isValid() ? this._isUTC && this._offset === 0 : !1
    }
    var bm = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
        wm = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

    function mt(t, e) {
        var s = t,
            n = null,
            r, o, i;
        return vn(t) ? s = {
            ms: t._milliseconds,
            d: t._days,
            M: t._months
        } : It(t) || !isNaN(+t) ? (s = {}, e ? s[e] = +t : s.milliseconds = +t) : (n = bm.exec(t)) ? (r = n[1] === "-" ? -1 : 1, s = {
            y: 0,
            d: ne(n[gt]) * r,
            h: ne(n[Ae]) * r,
            m: ne(n[lt]) * r,
            s: ne(n[Ct]) * r,
            ms: ne(Nr(n[Zt] * 1e3)) * r
        }) : (n = wm.exec(t)) ? (r = n[1] === "-" ? -1 : 1, s = {
            y: Ht(n[2], r),
            M: Ht(n[3], r),
            w: Ht(n[4], r),
            d: Ht(n[5], r),
            h: Ht(n[6], r),
            m: Ht(n[7], r),
            s: Ht(n[8], r)
        }) : s == null ? s = {} : typeof s == "object" && ("from" in s || "to" in s) && (i = km(be(s.from), be(s.to)), s = {}, s.ms = i.milliseconds, s.M = i.months), o = new rr(s), vn(t) && le(t, "_locale") && (o._locale = t._locale), vn(t) && le(t, "_isValid") && (o._isValid = t._isValid), o
    }
    mt.fn = rr.prototype;
    mt.invalid = am;

    function Ht(t, e) {
        var s = t && parseFloat(t.replace(",", "."));
        return (isNaN(s) ? 0 : s) * e
    }

    function ui(t, e) {
        var s = {};
        return s.months = e.month() - t.month() + (e.year() - t.year()) * 12, t.clone().add(s.months, "M").isAfter(e) && --s.months, s.milliseconds = +e - +t.clone().add(s.months, "M"), s
    }

    function km(t, e) {
        var s;
        return t.isValid() && e.isValid() ? (e = Eo(e, t), t.isBefore(e) ? s = ui(t, e) : (s = ui(e, t), s.milliseconds = -s.milliseconds, s.months = -s.months), s) : {
            milliseconds: 0,
            months: 0
        }
    }

    function Ma(t, e) {
        return function(s, n) {
            var r, o;
            return n !== null && !isNaN(+n) && (ua(e, "moment()." + e + "(period, number) is deprecated. Please use moment()." + e + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), o = s, s = n, n = o), r = mt(s, n), La(this, r, t), this
        }
    }

    function La(t, e, s, n) {
        var r = e._milliseconds,
            o = Nr(e._days),
            i = Nr(e._months);
        !t.isValid() || (n = n == null ? !0 : n, i && ya(t, In(t, "Month") + i * s), o && fa(t, "Date", In(t, "Date") + o * s), r && t._d.setTime(t._d.valueOf() + r * s), n && V.updateOffset(t, o || i))
    }
    var Sm = Ma(1, "add"),
        Tm = Ma(-1, "subtract");

    function Na(t) {
        return typeof t == "string" || t instanceof String
    }

    function xm(t) {
        return ft(t) || nn(t) || Na(t) || It(t) || Cm(t) || Am(t) || t === null || t === void 0
    }

    function Am(t) {
        var e = ts(t) && !ho(t),
            s = !1,
            n = ["years", "year", "y", "months", "month", "M", "days", "day", "d", "dates", "date", "D", "hours", "hour", "h", "minutes", "minute", "m", "seconds", "second", "s", "milliseconds", "millisecond", "ms"],
            r, o, i = n.length;
        for (r = 0; r < i; r += 1) o = n[r], s = s || le(t, o);
        return e && s
    }

    function Cm(t) {
        var e = dt(t),
            s = !1;
        return e && (s = t.filter(function(n) {
            return !It(n) && Na(t)
        }).length === 0), e && s
    }

    function $m(t) {
        var e = ts(t) && !ho(t),
            s = !1,
            n = ["sameDay", "nextDay", "lastDay", "nextWeek", "lastWeek", "sameElse"],
            r, o;
        for (r = 0; r < n.length; r += 1) o = n[r], s = s || le(t, o);
        return e && s
    }

    function Em(t, e) {
        var s = t.diff(e, "days", !0);
        return s < -6 ? "sameElse" : s < -1 ? "lastWeek" : s < 0 ? "lastDay" : s < 1 ? "sameDay" : s < 2 ? "nextDay" : s < 7 ? "nextWeek" : "sameElse"
    }

    function Im(t, e) {
        arguments.length === 1 && (arguments[0] ? xm(arguments[0]) ? (t = arguments[0], e = void 0) : $m(arguments[0]) && (e = arguments[0], t = void 0) : (t = void 0, e = void 0));
        var s = t || be(),
            n = Eo(s, this).startOf("day"),
            r = V.calendarFormat(this, n) || "sameElse",
            o = e && (bt(e[r]) ? e[r].call(this, s) : e[r]);
        return this.format(o || this.localeData().calendar(r, this, be(s)))
    }

    function Om() {
        return new rn(this)
    }

    function Pm(t, e) {
        var s = ft(t) ? t : be(t);
        return this.isValid() && s.isValid() ? (e = rt(e) || "millisecond", e === "millisecond" ? this.valueOf() > s.valueOf() : s.valueOf() < this.clone().startOf(e).valueOf()) : !1
    }

    function Dm(t, e) {
        var s = ft(t) ? t : be(t);
        return this.isValid() && s.isValid() ? (e = rt(e) || "millisecond", e === "millisecond" ? this.valueOf() < s.valueOf() : this.clone().endOf(e).valueOf() < s.valueOf()) : !1
    }

    function Rm(t, e, s, n) {
        var r = ft(t) ? t : be(t),
            o = ft(e) ? e : be(e);
        return this.isValid() && r.isValid() && o.isValid() ? (n = n || "()", (n[0] === "(" ? this.isAfter(r, s) : !this.isBefore(r, s)) && (n[1] === ")" ? this.isBefore(o, s) : !this.isAfter(o, s))) : !1
    }

    function Mm(t, e) {
        var s = ft(t) ? t : be(t),
            n;
        return this.isValid() && s.isValid() ? (e = rt(e) || "millisecond", e === "millisecond" ? this.valueOf() === s.valueOf() : (n = s.valueOf(), this.clone().startOf(e).valueOf() <= n && n <= this.clone().endOf(e).valueOf())) : !1
    }

    function Lm(t, e) {
        return this.isSame(t, e) || this.isAfter(t, e)
    }

    function Nm(t, e) {
        return this.isSame(t, e) || this.isBefore(t, e)
    }

    function Fm(t, e, s) {
        var n, r, o;
        if (!this.isValid()) return NaN;
        if (n = Eo(t, this), !n.isValid()) return NaN;
        switch (r = (n.utcOffset() - this.utcOffset()) * 6e4, e = rt(e), e) {
            case "year":
                o = yn(this, n) / 12;
                break;
            case "month":
                o = yn(this, n);
                break;
            case "quarter":
                o = yn(this, n) / 3;
                break;
            case "second":
                o = (this - n) / 1e3;
                break;
            case "minute":
                o = (this - n) / 6e4;
                break;
            case "hour":
                o = (this - n) / 36e5;
                break;
            case "day":
                o = (this - n - r) / 864e5;
                break;
            case "week":
                o = (this - n - r) / 6048e5;
                break;
            default:
                o = this - n
        }
        return s ? o : Xe(o)
    }

    function yn(t, e) {
        if (t.date() < e.date()) return -yn(e, t);
        var s = (e.year() - t.year()) * 12 + (e.month() - t.month()),
            n = t.clone().add(s, "months"),
            r, o;
        return e - n < 0 ? (r = t.clone().add(s - 1, "months"), o = (e - n) / (n - r)) : (r = t.clone().add(s + 1, "months"), o = (e - n) / (r - n)), -(s + o) || 0
    }
    V.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
    V.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";

    function jm() {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
    }

    function Um(t) {
        if (!this.isValid()) return null;
        var e = t !== !0,
            s = e ? this.clone().utc() : this;
        return s.year() < 0 || s.year() > 9999 ? gn(s, e ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : bt(Date.prototype.toISOString) ? e ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", gn(s, "Z")) : gn(s, e ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
    }

    function Ym() {
        if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
        var t = "moment",
            e = "",
            s, n, r, o;
        return this.isLocal() || (t = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", e = "Z"), s = "[" + t + '("]', n = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", r = "-MM-DD[T]HH:mm:ss.SSS", o = e + '[")]', this.format(s + n + r + o)
    }

    function Bm(t) {
        t || (t = this.isUtc() ? V.defaultFormatUtc : V.defaultFormat);
        var e = gn(this, t);
        return this.localeData().postformat(e)
    }

    function Vm(t, e) {
        return this.isValid() && (ft(t) && t.isValid() || be(t).isValid()) ? mt({
            to: this,
            from: t
        }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
    }

    function Wm(t) {
        return this.from(be(), t)
    }

    function zm(t, e) {
        return this.isValid() && (ft(t) && t.isValid() || be(t).isValid()) ? mt({
            from: this,
            to: t
        }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
    }

    function Hm(t) {
        return this.to(be(), t)
    }

    function Fa(t) {
        var e;
        return t === void 0 ? this._locale._abbr : (e = Pt(t), e != null && (this._locale = e), this)
    }
    var ja = nt("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(t) {
        return t === void 0 ? this.localeData() : this.locale(t)
    });

    function Ua() {
        return this._locale
    }
    var Dn = 1e3,
        ys = 60 * Dn,
        Rn = 60 * ys,
        Ya = (365 * 400 + 97) * 24 * Rn;

    function bs(t, e) {
        return (t % e + e) % e
    }

    function Ba(t, e, s) {
        return t < 100 && t >= 0 ? new Date(t + 400, e, s) - Ya : new Date(t, e, s).valueOf()
    }

    function Va(t, e, s) {
        return t < 100 && t >= 0 ? Date.UTC(t + 400, e, s) - Ya : Date.UTC(t, e, s)
    }

    function Gm(t) {
        var e, s;
        if (t = rt(t), t === void 0 || t === "millisecond" || !this.isValid()) return this;
        switch (s = this._isUTC ? Va : Ba, t) {
            case "year":
                e = s(this.year(), 0, 1);
                break;
            case "quarter":
                e = s(this.year(), this.month() - this.month() % 3, 1);
                break;
            case "month":
                e = s(this.year(), this.month(), 1);
                break;
            case "week":
                e = s(this.year(), this.month(), this.date() - this.weekday());
                break;
            case "isoWeek":
                e = s(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
                break;
            case "day":
            case "date":
                e = s(this.year(), this.month(), this.date());
                break;
            case "hour":
                e = this._d.valueOf(), e -= bs(e + (this._isUTC ? 0 : this.utcOffset() * ys), Rn);
                break;
            case "minute":
                e = this._d.valueOf(), e -= bs(e, ys);
                break;
            case "second":
                e = this._d.valueOf(), e -= bs(e, Dn);
                break
        }
        return this._d.setTime(e), V.updateOffset(this, !0), this
    }

    function qm(t) {
        var e, s;
        if (t = rt(t), t === void 0 || t === "millisecond" || !this.isValid()) return this;
        switch (s = this._isUTC ? Va : Ba, t) {
            case "year":
                e = s(this.year() + 1, 0, 1) - 1;
                break;
            case "quarter":
                e = s(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
                break;
            case "month":
                e = s(this.year(), this.month() + 1, 1) - 1;
                break;
            case "week":
                e = s(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
                break;
            case "isoWeek":
                e = s(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
                break;
            case "day":
            case "date":
                e = s(this.year(), this.month(), this.date() + 1) - 1;
                break;
            case "hour":
                e = this._d.valueOf(), e += Rn - bs(e + (this._isUTC ? 0 : this.utcOffset() * ys), Rn) - 1;
                break;
            case "minute":
                e = this._d.valueOf(), e += ys - bs(e, ys) - 1;
                break;
            case "second":
                e = this._d.valueOf(), e += Dn - bs(e, Dn) - 1;
                break
        }
        return this._d.setTime(e), V.updateOffset(this, !0), this
    }

    function Jm() {
        return this._d.valueOf() - (this._offset || 0) * 6e4
    }

    function Km() {
        return Math.floor(this.valueOf() / 1e3)
    }

    function Qm() {
        return new Date(this.valueOf())
    }

    function Zm() {
        var t = this;
        return [t.year(), t.month(), t.date(), t.hour(), t.minute(), t.second(), t.millisecond()]
    }

    function Xm() {
        var t = this;
        return {
            years: t.year(),
            months: t.month(),
            date: t.date(),
            hours: t.hours(),
            minutes: t.minutes(),
            seconds: t.seconds(),
            milliseconds: t.milliseconds()
        }
    }

    function ep() {
        return this.isValid() ? this.toISOString() : null
    }

    function tp() {
        return mo(this)
    }

    function sp() {
        return Bt({}, te(this))
    }

    function np() {
        return te(this).overflow
    }

    function rp() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
        }
    }
    Q("N", 0, 0, "eraAbbr");
    Q("NN", 0, 0, "eraAbbr");
    Q("NNN", 0, 0, "eraAbbr");
    Q("NNNN", 0, 0, "eraName");
    Q("NNNNN", 0, 0, "eraNarrow");
    Q("y", ["y", 1], "yo", "eraYear");
    Q("y", ["yy", 2], 0, "eraYear");
    Q("y", ["yyy", 3], 0, "eraYear");
    Q("y", ["yyyy", 4], 0, "eraYear");
    J("N", Io);
    J("NN", Io);
    J("NNN", Io);
    J("NNNN", pp);
    J("NNNNN", _p);
    he(["N", "NN", "NNN", "NNNN", "NNNNN"], function(t, e, s, n) {
        var r = s._locale.erasParse(t, n, s._strict);
        r ? te(s).era = r : te(s).invalidEra = t
    });
    J("y", Cs);
    J("yy", Cs);
    J("yyy", Cs);
    J("yyyy", Cs);
    J("yo", gp);
    he(["y", "yy", "yyy", "yyyy"], Le);
    he(["yo"], function(t, e, s, n) {
        var r;
        s._locale._eraYearOrdinalRegex && (r = t.match(s._locale._eraYearOrdinalRegex)), s._locale.eraYearOrdinalParse ? e[Le] = s._locale.eraYearOrdinalParse(t, r) : e[Le] = parseInt(t, 10)
    });

    function op(t, e) {
        var s, n, r, o = this._eras || Pt("en")._eras;
        for (s = 0, n = o.length; s < n; ++s) {
            switch (typeof o[s].since) {
                case "string":
                    r = V(o[s].since).startOf("day"), o[s].since = r.valueOf();
                    break
            }
            switch (typeof o[s].until) {
                case "undefined":
                    o[s].until = 1 / 0;
                    break;
                case "string":
                    r = V(o[s].until).startOf("day").valueOf(), o[s].until = r.valueOf();
                    break
            }
        }
        return o
    }

    function ip(t, e, s) {
        var n, r, o = this.eras(),
            i, a, u;
        for (t = t.toUpperCase(), n = 0, r = o.length; n < r; ++n)
            if (i = o[n].name.toUpperCase(), a = o[n].abbr.toUpperCase(), u = o[n].narrow.toUpperCase(), s) switch (e) {
                case "N":
                case "NN":
                case "NNN":
                    if (a === t) return o[n];
                    break;
                case "NNNN":
                    if (i === t) return o[n];
                    break;
                case "NNNNN":
                    if (u === t) return o[n];
                    break
            } else if ([i, a, u].indexOf(t) >= 0) return o[n]
    }

    function ap(t, e) {
        var s = t.since <= t.until ? 1 : -1;
        return e === void 0 ? V(t.since).year() : V(t.since).year() + (e - t.offset) * s
    }

    function lp() {
        var t, e, s, n = this.localeData().eras();
        for (t = 0, e = n.length; t < e; ++t)
            if (s = this.clone().startOf("day").valueOf(), n[t].since <= s && s <= n[t].until || n[t].until <= s && s <= n[t].since) return n[t].name;
        return ""
    }

    function up() {
        var t, e, s, n = this.localeData().eras();
        for (t = 0, e = n.length; t < e; ++t)
            if (s = this.clone().startOf("day").valueOf(), n[t].since <= s && s <= n[t].until || n[t].until <= s && s <= n[t].since) return n[t].narrow;
        return ""
    }

    function cp() {
        var t, e, s, n = this.localeData().eras();
        for (t = 0, e = n.length; t < e; ++t)
            if (s = this.clone().startOf("day").valueOf(), n[t].since <= s && s <= n[t].until || n[t].until <= s && s <= n[t].since) return n[t].abbr;
        return ""
    }

    function dp() {
        var t, e, s, n, r = this.localeData().eras();
        for (t = 0, e = r.length; t < e; ++t)
            if (s = r[t].since <= r[t].until ? 1 : -1, n = this.clone().startOf("day").valueOf(), r[t].since <= n && n <= r[t].until || r[t].until <= n && n <= r[t].since) return (this.year() - V(r[t].since).year()) * s + r[t].offset;
        return this.year()
    }

    function fp(t) {
        return le(this, "_erasNameRegex") || Oo.call(this), t ? this._erasNameRegex : this._erasRegex
    }

    function hp(t) {
        return le(this, "_erasAbbrRegex") || Oo.call(this), t ? this._erasAbbrRegex : this._erasRegex
    }

    function mp(t) {
        return le(this, "_erasNarrowRegex") || Oo.call(this), t ? this._erasNarrowRegex : this._erasRegex
    }

    function Io(t, e) {
        return e.erasAbbrRegex(t)
    }

    function pp(t, e) {
        return e.erasNameRegex(t)
    }

    function _p(t, e) {
        return e.erasNarrowRegex(t)
    }

    function gp(t, e) {
        return e._eraYearOrdinalRegex || Cs
    }

    function Oo() {
        var t = [],
            e = [],
            s = [],
            n = [],
            r, o, i = this.eras();
        for (r = 0, o = i.length; r < o; ++r) e.push(qe(i[r].name)), t.push(qe(i[r].abbr)), s.push(qe(i[r].narrow)), n.push(qe(i[r].name)), n.push(qe(i[r].abbr)), n.push(qe(i[r].narrow));
        this._erasRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp("^(" + s.join("|") + ")", "i")
    }
    Q(0, ["gg", 2], 0, function() {
        return this.weekYear() % 100
    });
    Q(0, ["GG", 2], 0, function() {
        return this.isoWeekYear() % 100
    });

    function or(t, e) {
        Q(0, [t, t.length], 0, e)
    }
    or("gggg", "weekYear");
    or("ggggg", "weekYear");
    or("GGGG", "isoWeekYear");
    or("GGGGG", "isoWeekYear");
    je("weekYear", "gg");
    je("isoWeekYear", "GG");
    Ue("weekYear", 1);
    Ue("isoWeekYear", 1);
    J("G", er);
    J("g", er);
    J("GG", we, Qe);
    J("gg", we, Qe);
    J("GGGG", bo, yo);
    J("gggg", bo, yo);
    J("GGGGG", Xn, Qn);
    J("ggggg", Xn, Qn);
    an(["gggg", "ggggg", "GGGG", "GGGGG"], function(t, e, s, n) {
        e[n.substr(0, 2)] = ne(t)
    });
    an(["gg", "GG"], function(t, e, s, n) {
        e[n] = V.parseTwoDigitYear(t)
    });

    function vp(t) {
        return Wa.call(this, t, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
    }

    function yp(t) {
        return Wa.call(this, t, this.isoWeek(), this.isoWeekday(), 1, 4)
    }

    function bp() {
        return $t(this.year(), 1, 4)
    }

    function wp() {
        return $t(this.isoWeekYear(), 1, 4)
    }

    function kp() {
        var t = this.localeData()._week;
        return $t(this.year(), t.dow, t.doy)
    }

    function Sp() {
        var t = this.localeData()._week;
        return $t(this.weekYear(), t.dow, t.doy)
    }

    function Wa(t, e, s, n, r) {
        var o;
        return t == null ? Qs(this, n, r).year : (o = $t(t, n, r), e > o && (e = o), Tp.call(this, t, e, s, n, r))
    }

    function Tp(t, e, s, n, r) {
        var o = Sa(t, e, s, n, r),
            i = Ks(o.year, 0, o.dayOfYear);
        return this.year(i.getUTCFullYear()), this.month(i.getUTCMonth()), this.date(i.getUTCDate()), this
    }
    Q("Q", 0, "Qo", "quarter");
    je("quarter", "Q");
    Ue("quarter", 7);
    J("Q", ha);
    he("Q", function(t, e) {
        e[At] = (ne(t) - 1) * 3
    });

    function xp(t) {
        return t == null ? Math.ceil((this.month() + 1) / 3) : this.month((t - 1) * 3 + this.month() % 3)
    }
    Q("D", ["DD", 2], "Do", "date");
    je("date", "D");
    Ue("date", 9);
    J("D", we);
    J("DD", we, Qe);
    J("Do", function(t, e) {
        return t ? e._dayOfMonthOrdinalParse || e._ordinalParse : e._dayOfMonthOrdinalParseLenient
    });
    he(["D", "DD"], gt);
    he("Do", function(t, e) {
        e[gt] = ne(t.match(we)[0])
    });
    var za = As("Date", !0);
    Q("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
    je("dayOfYear", "DDD");
    Ue("dayOfYear", 4);
    J("DDD", Zn);
    J("DDDD", ma);
    he(["DDD", "DDDD"], function(t, e, s) {
        s._dayOfYear = ne(t)
    });

    function Ap(t) {
        var e = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
        return t == null ? e : this.add(t - e, "d")
    }
    Q("m", ["mm", 2], 0, "minute");
    je("minute", "m");
    Ue("minute", 14);
    J("m", we);
    J("mm", we, Qe);
    he(["m", "mm"], lt);
    var Cp = As("Minutes", !1);
    Q("s", ["ss", 2], 0, "second");
    je("second", "s");
    Ue("second", 15);
    J("s", we);
    J("ss", we, Qe);
    he(["s", "ss"], Ct);
    var $p = As("Seconds", !1);
    Q("S", 0, 0, function() {
        return ~~(this.millisecond() / 100)
    });
    Q(0, ["SS", 2], 0, function() {
        return ~~(this.millisecond() / 10)
    });
    Q(0, ["SSS", 3], 0, "millisecond");
    Q(0, ["SSSS", 4], 0, function() {
        return this.millisecond() * 10
    });
    Q(0, ["SSSSS", 5], 0, function() {
        return this.millisecond() * 100
    });
    Q(0, ["SSSSSS", 6], 0, function() {
        return this.millisecond() * 1e3
    });
    Q(0, ["SSSSSSS", 7], 0, function() {
        return this.millisecond() * 1e4
    });
    Q(0, ["SSSSSSSS", 8], 0, function() {
        return this.millisecond() * 1e5
    });
    Q(0, ["SSSSSSSSS", 9], 0, function() {
        return this.millisecond() * 1e6
    });
    je("millisecond", "ms");
    Ue("millisecond", 16);
    J("S", Zn, ha);
    J("SS", Zn, Qe);
    J("SSS", Zn, ma);
    var Vt, Ha;
    for (Vt = "SSSS"; Vt.length <= 9; Vt += "S") J(Vt, Cs);

    function Ep(t, e) {
        e[Zt] = ne(("0." + t) * 1e3)
    }
    for (Vt = "S"; Vt.length <= 9; Vt += "S") he(Vt, Ep);
    Ha = As("Milliseconds", !1);
    Q("z", 0, 0, "zoneAbbr");
    Q("zz", 0, 0, "zoneName");

    function Ip() {
        return this._isUTC ? "UTC" : ""
    }

    function Op() {
        return this._isUTC ? "Coordinated Universal Time" : ""
    }
    var F = rn.prototype;
    F.add = Sm;
    F.calendar = Im;
    F.clone = Om;
    F.diff = Fm;
    F.endOf = qm;
    F.format = Bm;
    F.from = Vm;
    F.fromNow = Wm;
    F.to = zm;
    F.toNow = Hm;
    F.get = Df;
    F.invalidAt = np;
    F.isAfter = Pm;
    F.isBefore = Dm;
    F.isBetween = Rm;
    F.isSame = Mm;
    F.isSameOrAfter = Lm;
    F.isSameOrBefore = Nm;
    F.isValid = tp;
    F.lang = ja;
    F.locale = Fa;
    F.localeData = Ua;
    F.max = tm;
    F.min = em;
    F.parsingFlags = sp;
    F.set = Rf;
    F.startOf = Gm;
    F.subtract = Tm;
    F.toArray = Zm;
    F.toObject = Xm;
    F.toDate = Qm;
    F.toISOString = Um;
    F.inspect = Ym;
    typeof Symbol < "u" && Symbol.for != null && (F[Symbol.for("nodejs.util.inspect.custom")] = function() {
        return "Moment<" + this.format() + ">"
    });
    F.toJSON = ep;
    F.toString = jm;
    F.unix = Km;
    F.valueOf = Jm;
    F.creationData = rp;
    F.eraName = lp;
    F.eraNarrow = up;
    F.eraAbbr = cp;
    F.eraYear = dp;
    F.year = ka;
    F.isLeapYear = Xf;
    F.weekYear = vp;
    F.isoWeekYear = yp;
    F.quarter = F.quarters = xp;
    F.month = ba;
    F.daysInMonth = Kf;
    F.week = F.weeks = oh;
    F.isoWeek = F.isoWeeks = ih;
    F.weeksInYear = kp;
    F.weeksInWeekYear = Sp;
    F.isoWeeksInYear = bp;
    F.isoWeeksInISOWeekYear = wp;
    F.date = za;
    F.day = F.days = yh;
    F.weekday = bh;
    F.isoWeekday = wh;
    F.dayOfYear = Ap;
    F.hour = F.hours = $h;
    F.minute = F.minutes = Cp;
    F.second = F.seconds = $p;
    F.millisecond = F.milliseconds = Ha;
    F.utcOffset = cm;
    F.utc = fm;
    F.local = hm;
    F.parseZone = mm;
    F.hasAlignedHourOffset = pm;
    F.isDST = _m;
    F.isLocal = vm;
    F.isUtcOffset = ym;
    F.isUtc = Ra;
    F.isUTC = Ra;
    F.zoneAbbr = Ip;
    F.zoneName = Op;
    F.dates = nt("dates accessor is deprecated. Use date instead.", za);
    F.months = nt("months accessor is deprecated. Use month instead", ba);
    F.years = nt("years accessor is deprecated. Use year instead", ka);
    F.zone = nt("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", dm);
    F.isDSTShifted = nt("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", gm);

    function Pp(t) {
        return be(t * 1e3)
    }

    function Dp() {
        return be.apply(null, arguments).parseZone()
    }

    function Ga(t) {
        return t
    }
    var ue = _o.prototype;
    ue.calendar = yf;
    ue.longDateFormat = Sf;
    ue.invalidDate = xf;
    ue.ordinal = $f;
    ue.preparse = Ga;
    ue.postformat = Ga;
    ue.relativeTime = If;
    ue.pastFuture = Of;
    ue.set = gf;
    ue.eras = op;
    ue.erasParse = ip;
    ue.erasConvertYear = ap;
    ue.erasAbbrRegex = hp;
    ue.erasNameRegex = fp;
    ue.erasNarrowRegex = mp;
    ue.months = Hf;
    ue.monthsShort = Gf;
    ue.monthsParse = Jf;
    ue.monthsRegex = Zf;
    ue.monthsShortRegex = Qf;
    ue.week = th;
    ue.firstDayOfYear = rh;
    ue.firstDayOfWeek = nh;
    ue.weekdays = mh;
    ue.weekdaysMin = _h;
    ue.weekdaysShort = ph;
    ue.weekdaysParse = vh;
    ue.weekdaysRegex = kh;
    ue.weekdaysShortRegex = Sh;
    ue.weekdaysMinRegex = Th;
    ue.isPM = Ah;
    ue.meridiem = Eh;

    function Mn(t, e, s, n) {
        var r = Pt(),
            o = yt().set(n, e);
        return r[s](o, t)
    }

    function qa(t, e, s) {
        if (It(t) && (e = t, t = void 0), t = t || "", e != null) return Mn(t, e, s, "month");
        var n, r = [];
        for (n = 0; n < 12; n++) r[n] = Mn(t, n, s, "month");
        return r
    }

    function Po(t, e, s, n) {
        typeof t == "boolean" ? (It(e) && (s = e, e = void 0), e = e || "") : (e = t, s = e, t = !1, It(e) && (s = e, e = void 0), e = e || "");
        var r = Pt(),
            o = t ? r._week.dow : 0,
            i, a = [];
        if (s != null) return Mn(e, (s + o) % 7, n, "day");
        for (i = 0; i < 7; i++) a[i] = Mn(e, (i + o) % 7, n, "day");
        return a
    }

    function Rp(t, e) {
        return qa(t, e, "months")
    }

    function Mp(t, e) {
        return qa(t, e, "monthsShort")
    }

    function Lp(t, e, s) {
        return Po(t, e, s, "weekdays")
    }

    function Np(t, e, s) {
        return Po(t, e, s, "weekdaysShort")
    }

    function Fp(t, e, s) {
        return Po(t, e, s, "weekdaysMin")
    }
    Wt("en", {
        eras: [{
            since: "0001-01-01",
            until: 1 / 0,
            offset: 1,
            name: "Anno Domini",
            narrow: "AD",
            abbr: "AD"
        }, {
            since: "0000-12-31",
            until: -1 / 0,
            offset: 1,
            name: "Before Christ",
            narrow: "BC",
            abbr: "BC"
        }],
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function(t) {
            var e = t % 10,
                s = ne(t % 100 / 10) === 1 ? "th" : e === 1 ? "st" : e === 2 ? "nd" : e === 3 ? "rd" : "th";
            return t + s
        }
    });
    V.lang = nt("moment.lang is deprecated. Use moment.locale instead.", Wt);
    V.langData = nt("moment.langData is deprecated. Use moment.localeData instead.", Pt);
    var kt = Math.abs;

    function jp() {
        var t = this._data;
        return this._milliseconds = kt(this._milliseconds), this._days = kt(this._days), this._months = kt(this._months), t.milliseconds = kt(t.milliseconds), t.seconds = kt(t.seconds), t.minutes = kt(t.minutes), t.hours = kt(t.hours), t.months = kt(t.months), t.years = kt(t.years), this
    }

    function Ja(t, e, s, n) {
        var r = mt(e, s);
        return t._milliseconds += n * r._milliseconds, t._days += n * r._days, t._months += n * r._months, t._bubble()
    }

    function Up(t, e) {
        return Ja(this, t, e, 1)
    }

    function Yp(t, e) {
        return Ja(this, t, e, -1)
    }

    function ci(t) {
        return t < 0 ? Math.floor(t) : Math.ceil(t)
    }

    function Bp() {
        var t = this._milliseconds,
            e = this._days,
            s = this._months,
            n = this._data,
            r, o, i, a, u;
        return t >= 0 && e >= 0 && s >= 0 || t <= 0 && e <= 0 && s <= 0 || (t += ci(jr(s) + e) * 864e5, e = 0, s = 0), n.milliseconds = t % 1e3, r = Xe(t / 1e3), n.seconds = r % 60, o = Xe(r / 60), n.minutes = o % 60, i = Xe(o / 60), n.hours = i % 24, e += Xe(i / 24), u = Xe(Ka(e)), s += u, e -= ci(jr(u)), a = Xe(s / 12), s %= 12, n.days = e, n.months = s, n.years = a, this
    }

    function Ka(t) {
        return t * 4800 / 146097
    }

    function jr(t) {
        return t * 146097 / 4800
    }

    function Vp(t) {
        if (!this.isValid()) return NaN;
        var e, s, n = this._milliseconds;
        if (t = rt(t), t === "month" || t === "quarter" || t === "year") switch (e = this._days + n / 864e5, s = this._months + Ka(e), t) {
            case "month":
                return s;
            case "quarter":
                return s / 3;
            case "year":
                return s / 12
        } else switch (e = this._days + Math.round(jr(this._months)), t) {
            case "week":
                return e / 7 + n / 6048e5;
            case "day":
                return e + n / 864e5;
            case "hour":
                return e * 24 + n / 36e5;
            case "minute":
                return e * 1440 + n / 6e4;
            case "second":
                return e * 86400 + n / 1e3;
            case "millisecond":
                return Math.floor(e * 864e5) + n;
            default:
                throw new Error("Unknown unit " + t)
        }
    }

    function Wp() {
        return this.isValid() ? this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + ne(this._months / 12) * 31536e6 : NaN
    }

    function Dt(t) {
        return function() {
            return this.as(t)
        }
    }
    var zp = Dt("ms"),
        Hp = Dt("s"),
        Gp = Dt("m"),
        qp = Dt("h"),
        Jp = Dt("d"),
        Kp = Dt("w"),
        Qp = Dt("M"),
        Zp = Dt("Q"),
        Xp = Dt("y");

    function e_() {
        return mt(this)
    }

    function t_(t) {
        return t = rt(t), this.isValid() ? this[t + "s"]() : NaN
    }

    function os(t) {
        return function() {
            return this.isValid() ? this._data[t] : NaN
        }
    }
    var s_ = os("milliseconds"),
        n_ = os("seconds"),
        r_ = os("minutes"),
        o_ = os("hours"),
        i_ = os("days"),
        a_ = os("months"),
        l_ = os("years");

    function u_() {
        return Xe(this.days() / 7)
    }
    var xt = Math.round,
        _s = {
            ss: 44,
            s: 45,
            m: 45,
            h: 22,
            d: 26,
            w: null,
            M: 11
        };

    function c_(t, e, s, n, r) {
        return r.relativeTime(e || 1, !!s, t, n)
    }

    function d_(t, e, s, n) {
        var r = mt(t).abs(),
            o = xt(r.as("s")),
            i = xt(r.as("m")),
            a = xt(r.as("h")),
            u = xt(r.as("d")),
            c = xt(r.as("M")),
            d = xt(r.as("w")),
            f = xt(r.as("y")),
            h = o <= s.ss && ["s", o] || o < s.s && ["ss", o] || i <= 1 && ["m"] || i < s.m && ["mm", i] || a <= 1 && ["h"] || a < s.h && ["hh", a] || u <= 1 && ["d"] || u < s.d && ["dd", u];
        return s.w != null && (h = h || d <= 1 && ["w"] || d < s.w && ["ww", d]), h = h || c <= 1 && ["M"] || c < s.M && ["MM", c] || f <= 1 && ["y"] || ["yy", f], h[2] = e, h[3] = +t > 0, h[4] = n, c_.apply(null, h)
    }

    function f_(t) {
        return t === void 0 ? xt : typeof t == "function" ? (xt = t, !0) : !1
    }

    function h_(t, e) {
        return _s[t] === void 0 ? !1 : e === void 0 ? _s[t] : (_s[t] = e, t === "s" && (_s.ss = e - 1), !0)
    }

    function m_(t, e) {
        if (!this.isValid()) return this.localeData().invalidDate();
        var s = !1,
            n = _s,
            r, o;
        return typeof t == "object" && (e = t, t = !1), typeof t == "boolean" && (s = t), typeof e == "object" && (n = Object.assign({}, _s, e), e.s != null && e.ss == null && (n.ss = e.s - 1)), r = this.localeData(), o = d_(this, !s, n, r), s && (o = r.pastFuture(+this, o)), r.postformat(o)
    }
    var gr = Math.abs;

    function as(t) {
        return (t > 0) - (t < 0) || +t
    }

    function ir() {
        if (!this.isValid()) return this.localeData().invalidDate();
        var t = gr(this._milliseconds) / 1e3,
            e = gr(this._days),
            s = gr(this._months),
            n, r, o, i, a = this.asSeconds(),
            u, c, d, f;
        return a ? (n = Xe(t / 60), r = Xe(n / 60), t %= 60, n %= 60, o = Xe(s / 12), s %= 12, i = t ? t.toFixed(3).replace(/\.?0+$/, "") : "", u = a < 0 ? "-" : "", c = as(this._months) !== as(a) ? "-" : "", d = as(this._days) !== as(a) ? "-" : "", f = as(this._milliseconds) !== as(a) ? "-" : "", u + "P" + (o ? c + o + "Y" : "") + (s ? c + s + "M" : "") + (e ? d + e + "D" : "") + (r || n || t ? "T" : "") + (r ? f + r + "H" : "") + (n ? f + n + "M" : "") + (t ? f + i + "S" : "")) : "P0D"
    }
    var ae = rr.prototype;
    ae.isValid = im;
    ae.abs = jp;
    ae.add = Up;
    ae.subtract = Yp;
    ae.as = Vp;
    ae.asMilliseconds = zp;
    ae.asSeconds = Hp;
    ae.asMinutes = Gp;
    ae.asHours = qp;
    ae.asDays = Jp;
    ae.asWeeks = Kp;
    ae.asMonths = Qp;
    ae.asQuarters = Zp;
    ae.asYears = Xp;
    ae.valueOf = Wp;
    ae._bubble = Bp;
    ae.clone = e_;
    ae.get = t_;
    ae.milliseconds = s_;
    ae.seconds = n_;
    ae.minutes = r_;
    ae.hours = o_;
    ae.days = i_;
    ae.weeks = u_;
    ae.months = a_;
    ae.years = l_;
    ae.humanize = m_;
    ae.toISOString = ir;
    ae.toString = ir;
    ae.toJSON = ir;
    ae.locale = Fa;
    ae.localeData = Ua;
    ae.toIsoString = nt("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", ir);
    ae.lang = ja;
    Q("X", 0, 0, "unix");
    Q("x", 0, 0, "valueOf");
    J("x", er);
    J("X", Lf);
    he("X", function(t, e, s) {
        s._d = new Date(parseFloat(t) * 1e3)
    });
    he("x", function(t, e, s) {
        s._d = new Date(ne(t))
    }); //! moment.js
    V.version = "2.29.4";
    pf(be);
    V.fn = F;
    V.min = sm;
    V.max = nm;
    V.now = rm;
    V.utc = yt;
    V.unix = Pp;
    V.months = Rp;
    V.isDate = nn;
    V.locale = Wt;
    V.invalid = Jn;
    V.duration = mt;
    V.isMoment = ft;
    V.weekdays = Lp;
    V.parseZone = Dp;
    V.localeData = Pt;
    V.isDuration = vn;
    V.monthsShort = Mp;
    V.weekdaysMin = Fp;
    V.defineLocale = To;
    V.updateLocale = Dh;
    V.locales = Rh;
    V.weekdaysShort = Np;
    V.normalizeUnits = rt;
    V.relativeTimeRounding = f_;
    V.relativeTimeThreshold = h_;
    V.calendarFormat = Em;
    V.prototype = F;
    V.HTML5_FMT = {
        DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
        DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
        DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
        DATE: "YYYY-MM-DD",
        TIME: "HH:mm",
        TIME_SECONDS: "HH:mm:ss",
        TIME_MS: "HH:mm:ss.SSS",
        WEEK: "GGGG-[W]WW",
        MONTH: "YYYY-MM"
    };
    let Qa = () => ({
        events: {},
        emit(t, ...e) {
            (this.events[t] || []).forEach(s => s(...e))
        },
        on(t, e) {
            return (this.events[t] = this.events[t] || []).push(e), () => this.events[t] = (this.events[t] || []).filter(s => s !== e)
        }
    });
    var Za = {
        exports: {}
    };
    (function(t, e) {
        (function(s, n) {
            n(t)
        })(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : ji, function(s) {
            if (typeof globalThis != "object" || typeof chrome != "object" || !chrome || !chrome.runtime || !chrome.runtime.id) throw new Error("This script should only be loaded in a browser extension.");
            if (typeof globalThis.browser > "u" || Object.getPrototypeOf(globalThis.browser) !== Object.prototype) {
                const n = "The message port closed before a response was received.",
                    r = "Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)",
                    o = i => {
                        const a = {
                            alarms: {
                                clear: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                clearAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                get: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                getAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                }
                            },
                            bookmarks: {
                                create: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                get: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getChildren: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getRecent: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getSubTree: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getTree: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                move: {
                                    minArgs: 2,
                                    maxArgs: 2
                                },
                                remove: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeTree: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                search: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                update: {
                                    minArgs: 2,
                                    maxArgs: 2
                                }
                            },
                            browserAction: {
                                disable: {
                                    minArgs: 0,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                enable: {
                                    minArgs: 0,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                getBadgeBackgroundColor: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getBadgeText: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getPopup: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getTitle: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                openPopup: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                setBadgeBackgroundColor: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                setBadgeText: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                setIcon: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                setPopup: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                setTitle: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                }
                            },
                            browsingData: {
                                remove: {
                                    minArgs: 2,
                                    maxArgs: 2
                                },
                                removeCache: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeCookies: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeDownloads: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeFormData: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeHistory: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeLocalStorage: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removePasswords: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removePluginData: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                settings: {
                                    minArgs: 0,
                                    maxArgs: 0
                                }
                            },
                            commands: {
                                getAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                }
                            },
                            contextMenus: {
                                remove: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                update: {
                                    minArgs: 2,
                                    maxArgs: 2
                                }
                            },
                            cookies: {
                                get: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getAll: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getAllCookieStores: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                remove: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                set: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            devtools: {
                                inspectedWindow: {
                                    eval: {
                                        minArgs: 1,
                                        maxArgs: 2,
                                        singleCallbackArg: !1
                                    }
                                },
                                panels: {
                                    create: {
                                        minArgs: 3,
                                        maxArgs: 3,
                                        singleCallbackArg: !0
                                    },
                                    elements: {
                                        createSidebarPane: {
                                            minArgs: 1,
                                            maxArgs: 1
                                        }
                                    }
                                }
                            },
                            downloads: {
                                cancel: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                download: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                erase: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getFileIcon: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                open: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                pause: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeFile: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                resume: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                search: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                show: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                }
                            },
                            extension: {
                                isAllowedFileSchemeAccess: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                isAllowedIncognitoAccess: {
                                    minArgs: 0,
                                    maxArgs: 0
                                }
                            },
                            history: {
                                addUrl: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                deleteAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                deleteRange: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                deleteUrl: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getVisits: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                search: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            i18n: {
                                detectLanguage: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getAcceptLanguages: {
                                    minArgs: 0,
                                    maxArgs: 0
                                }
                            },
                            identity: {
                                launchWebAuthFlow: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            idle: {
                                queryState: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            management: {
                                get: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                getSelf: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                setEnabled: {
                                    minArgs: 2,
                                    maxArgs: 2
                                },
                                uninstallSelf: {
                                    minArgs: 0,
                                    maxArgs: 1
                                }
                            },
                            notifications: {
                                clear: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                create: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                getAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                getPermissionLevel: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                update: {
                                    minArgs: 2,
                                    maxArgs: 2
                                }
                            },
                            pageAction: {
                                getPopup: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getTitle: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                hide: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                setIcon: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                setPopup: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                setTitle: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                },
                                show: {
                                    minArgs: 1,
                                    maxArgs: 1,
                                    fallbackToNoCallback: !0
                                }
                            },
                            permissions: {
                                contains: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getAll: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                remove: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                request: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            runtime: {
                                getBackgroundPage: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                getPlatformInfo: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                openOptionsPage: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                requestUpdateCheck: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                sendMessage: {
                                    minArgs: 1,
                                    maxArgs: 3
                                },
                                sendNativeMessage: {
                                    minArgs: 2,
                                    maxArgs: 2
                                },
                                setUninstallURL: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            sessions: {
                                getDevices: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                getRecentlyClosed: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                restore: {
                                    minArgs: 0,
                                    maxArgs: 1
                                }
                            },
                            storage: {
                                local: {
                                    clear: {
                                        minArgs: 0,
                                        maxArgs: 0
                                    },
                                    get: {
                                        minArgs: 0,
                                        maxArgs: 1
                                    },
                                    getBytesInUse: {
                                        minArgs: 0,
                                        maxArgs: 1
                                    },
                                    remove: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    },
                                    set: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    }
                                },
                                managed: {
                                    get: {
                                        minArgs: 0,
                                        maxArgs: 1
                                    },
                                    getBytesInUse: {
                                        minArgs: 0,
                                        maxArgs: 1
                                    }
                                },
                                sync: {
                                    clear: {
                                        minArgs: 0,
                                        maxArgs: 0
                                    },
                                    get: {
                                        minArgs: 0,
                                        maxArgs: 1
                                    },
                                    getBytesInUse: {
                                        minArgs: 0,
                                        maxArgs: 1
                                    },
                                    remove: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    },
                                    set: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    }
                                }
                            },
                            tabs: {
                                captureVisibleTab: {
                                    minArgs: 0,
                                    maxArgs: 2
                                },
                                create: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                detectLanguage: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                discard: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                duplicate: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                executeScript: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                get: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getCurrent: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                getZoom: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                getZoomSettings: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                goBack: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                goForward: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                highlight: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                insertCSS: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                move: {
                                    minArgs: 2,
                                    maxArgs: 2
                                },
                                query: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                reload: {
                                    minArgs: 0,
                                    maxArgs: 2
                                },
                                remove: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                removeCSS: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                sendMessage: {
                                    minArgs: 2,
                                    maxArgs: 3
                                },
                                setZoom: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                setZoomSettings: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                update: {
                                    minArgs: 1,
                                    maxArgs: 2
                                }
                            },
                            topSites: {
                                get: {
                                    minArgs: 0,
                                    maxArgs: 0
                                }
                            },
                            webNavigation: {
                                getAllFrames: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                getFrame: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            webRequest: {
                                handlerBehaviorChanged: {
                                    minArgs: 0,
                                    maxArgs: 0
                                }
                            },
                            windows: {
                                create: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                get: {
                                    minArgs: 1,
                                    maxArgs: 2
                                },
                                getAll: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                getCurrent: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                getLastFocused: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                remove: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                update: {
                                    minArgs: 2,
                                    maxArgs: 2
                                }
                            }
                        };
                        if (Object.keys(a).length === 0) throw new Error("api-metadata.json has not been included in browser-polyfill");
                        class u extends WeakMap {
                            constructor(P, M = void 0) {
                                super(M), this.createItem = P
                            }
                            get(P) {
                                return this.has(P) || this.set(P, this.createItem(P)), super.get(P)
                            }
                        }
                        const c = E => E && typeof E == "object" && typeof E.then == "function",
                            d = (E, P) => (...M) => {
                                i.runtime.lastError ? E.reject(new Error(i.runtime.lastError.message)) : P.singleCallbackArg || M.length <= 1 && P.singleCallbackArg !== !1 ? E.resolve(M[0]) : E.resolve(M)
                            },
                            f = E => E == 1 ? "argument" : "arguments",
                            h = (E, P) => function(G, ...re) {
                                if (re.length < P.minArgs) throw new Error(`Expected at least ${P.minArgs} ${f(P.minArgs)} for ${E}(), got ${re.length}`);
                                if (re.length > P.maxArgs) throw new Error(`Expected at most ${P.maxArgs} ${f(P.maxArgs)} for ${E}(), got ${re.length}`);
                                return new Promise((R, b) => {
                                    if (P.fallbackToNoCallback) try {
                                        G[E](...re, d({
                                            resolve: R,
                                            reject: b
                                        }, P))
                                    } catch (A) {
                                        console.warn(`${E} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `, A), G[E](...re), P.fallbackToNoCallback = !1, P.noCallback = !0, R()
                                    } else P.noCallback ? (G[E](...re), R()) : G[E](...re, d({
                                        resolve: R,
                                        reject: b
                                    }, P))
                                })
                            },
                            p = (E, P, M) => new Proxy(P, {
                                apply(G, re, R) {
                                    return M.call(re, E, ...R)
                                }
                            });
                        let _ = Function.call.bind(Object.prototype.hasOwnProperty);
                        const v = (E, P = {}, M = {}) => {
                                let G = Object.create(null),
                                    re = {
                                        has(b, A) {
                                            return A in E || A in G
                                        },
                                        get(b, A, D) {
                                            if (A in G) return G[A];
                                            if (!(A in E)) return;
                                            let H = E[A];
                                            if (typeof H == "function")
                                                if (typeof P[A] == "function") H = p(E, E[A], P[A]);
                                                else if (_(M, A)) {
                                                let Z = h(A, M[A]);
                                                H = p(E, E[A], Z)
                                            } else H = H.bind(E);
                                            else if (typeof H == "object" && H !== null && (_(P, A) || _(M, A))) H = v(H, P[A], M[A]);
                                            else if (_(M, "*")) H = v(H, P[A], M["*"]);
                                            else return Object.defineProperty(G, A, {
                                                configurable: !0,
                                                enumerable: !0,
                                                get() {
                                                    return E[A]
                                                },
                                                set(Z) {
                                                    E[A] = Z
                                                }
                                            }), H;
                                            return G[A] = H, H
                                        },
                                        set(b, A, D, H) {
                                            return A in G ? G[A] = D : E[A] = D, !0
                                        },
                                        defineProperty(b, A, D) {
                                            return Reflect.defineProperty(G, A, D)
                                        },
                                        deleteProperty(b, A) {
                                            return Reflect.deleteProperty(G, A)
                                        }
                                    },
                                    R = Object.create(E);
                                return new Proxy(R, re)
                            },
                            m = E => ({
                                addListener(P, M, ...G) {
                                    P.addListener(E.get(M), ...G)
                                },
                                hasListener(P, M) {
                                    return P.hasListener(E.get(M))
                                },
                                removeListener(P, M) {
                                    P.removeListener(E.get(M))
                                }
                            }),
                            T = new u(E => typeof E != "function" ? E : function(M) {
                                const G = v(M, {}, {
                                    getContent: {
                                        minArgs: 0,
                                        maxArgs: 0
                                    }
                                });
                                E(G)
                            });
                        let k = !1;
                        const g = new u(E => typeof E != "function" ? E : function(M, G, re) {
                                let R = !1,
                                    b, A = new Promise(X => {
                                        b = function(_e) {
                                            k || (console.warn(r, new Error().stack), k = !0), R = !0, X(_e)
                                        }
                                    }),
                                    D;
                                try {
                                    D = E(M, G, b)
                                } catch (X) {
                                    D = Promise.reject(X)
                                }
                                const H = D !== !0 && c(D);
                                if (D !== !0 && !H && !R) return !1;
                                const Z = X => {
                                    X.then(_e => {
                                        re(_e)
                                    }, _e => {
                                        let ge;
                                        _e && (_e instanceof Error || typeof _e.message == "string") ? ge = _e.message : ge = "An unexpected error occurred", re({
                                            __mozWebExtensionPolyfillReject__: !0,
                                            message: ge
                                        })
                                    }).catch(_e => {
                                        console.error("Failed to send onMessage rejected reply", _e)
                                    })
                                };
                                return Z(H ? D : A), !0
                            }),
                            C = ({
                                reject: E,
                                resolve: P
                            }, M) => {
                                i.runtime.lastError ? i.runtime.lastError.message === n ? P() : E(new Error(i.runtime.lastError.message)) : M && M.__mozWebExtensionPolyfillReject__ ? E(new Error(M.message)) : P(M)
                            },
                            x = (E, P, M, ...G) => {
                                if (G.length < P.minArgs) throw new Error(`Expected at least ${P.minArgs} ${f(P.minArgs)} for ${E}(), got ${G.length}`);
                                if (G.length > P.maxArgs) throw new Error(`Expected at most ${P.maxArgs} ${f(P.maxArgs)} for ${E}(), got ${G.length}`);
                                return new Promise((re, R) => {
                                    const b = C.bind(null, {
                                        resolve: re,
                                        reject: R
                                    });
                                    G.push(b), M.sendMessage(...G)
                                })
                            },
                            $ = {
                                devtools: {
                                    network: {
                                        onRequestFinished: m(T)
                                    }
                                },
                                runtime: {
                                    onMessage: m(g),
                                    onMessageExternal: m(g),
                                    sendMessage: x.bind(null, "sendMessage", {
                                        minArgs: 1,
                                        maxArgs: 3
                                    })
                                },
                                tabs: {
                                    sendMessage: x.bind(null, "sendMessage", {
                                        minArgs: 2,
                                        maxArgs: 3
                                    })
                                }
                            },
                            W = {
                                clear: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                get: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                set: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            };
                        return a.privacy = {
                            network: {
                                "*": W
                            },
                            services: {
                                "*": W
                            },
                            websites: {
                                "*": W
                            }
                        }, v(i, $, a)
                    };
                s.exports = o(chrome)
            } else s.exports = globalThis.browser
        })
    })(Za);
    const _t = Za.exports,
        p_ = [{
            property: "name",
            enumerable: !1
        }, {
            property: "message",
            enumerable: !1
        }, {
            property: "stack",
            enumerable: !1
        }, {
            property: "code",
            enumerable: !0
        }],
        Ur = Symbol(".toJSON was called"),
        __ = t => {
            t[Ur] = !0;
            const e = t.toJSON();
            return delete t[Ur], e
        },
        Xa = ({
            from: t,
            seen: e,
            to_: s,
            forceEnumerable: n,
            maxDepth: r,
            depth: o
        }) => {
            const i = s || (Array.isArray(t) ? [] : {});
            if (e.push(t), o >= r) return i;
            if (typeof t.toJSON == "function" && t[Ur] !== !0) return __(t);
            for (const [a, u] of Object.entries(t)) {
                if (typeof Buffer == "function" && Buffer.isBuffer(u)) {
                    i[a] = "[object Buffer]";
                    continue
                }
                if (u !== null && typeof u == "object" && typeof u.pipe == "function") {
                    i[a] = "[object Stream]";
                    continue
                }
                if (typeof u != "function") {
                    if (!u || typeof u != "object") {
                        i[a] = u;
                        continue
                    }
                    if (!e.includes(t[a])) {
                        o++, i[a] = Xa({
                            from: t[a],
                            seen: [...e],
                            forceEnumerable: n,
                            maxDepth: r,
                            depth: o
                        });
                        continue
                    }
                    i[a] = "[Circular]"
                }
            }
            for (const {
                    property: a,
                    enumerable: u
                }
                of p_) typeof t[a] == "string" && Object.defineProperty(i, a, {
                value: t[a],
                enumerable: n ? !0 : u,
                configurable: !0,
                writable: !0
            });
            return i
        };

    function g_(t, e = {}) {
        const {
            maxDepth: s = Number.POSITIVE_INFINITY
        } = e;
        return typeof t == "object" && t !== null ? Xa({
            from: t,
            seen: [],
            forceEnumerable: !0,
            maxDepth: s,
            depth: 0
        }) : typeof t == "function" ? `[Function: ${t.name||"anonymous"}]` : t
    }
    var ar = {
        exports: {}
    };
    const v_ = t => typeof crypto < "u" && typeof crypto.getRandomValues == "function" ? () => {
            const e = crypto.getRandomValues(new Uint8Array(1))[0];
            return (e >= t ? e % t : e).toString(t)
        } : () => Math.floor(Math.random() * t).toString(t),
        el = (t = 7, e = !1) => Array.from({
            length: t
        }, v_(e ? 16 : 36)).join("");
    ar.exports = el;
    ar.exports.default = el;
    var y_ = /^((?:background$)|devtools|popup|options|content-script|window)(?:@(\d+)(?:\.(\d+))?)?$/,
        tl = t => {
            const [, e, s, n] = t.match(y_) || [];
            return {
                context: e,
                tabId: +s,
                frameId: n ? +n : void 0
            }
        },
        vr = t => _t[t],
        b_ = () => {
            var t, e, s;
            const n = _t.runtime.getManifest();
            if (typeof window > "u") return "background";
            const r = ((t = n.browser_action) == null ? void 0 : t.default_popup) || ((e = n.action) == null ? void 0 : e.default_popup);
            return r && new URL(_t.runtime.getURL(r)).pathname === window.location.pathname ? "popup" : (s = n.options_ui) != null && s.page && new URL(_t.runtime.getURL(n.options_ui.page)).pathname === window.location.pathname ? "options" : "background"
        },
        ve = vr("devtools") ? "devtools" : vr("tabs") ? b_() : vr("extension") ? "content-script" : typeof document < "u" ? "window" : null,
        di = ar.exports(),
        Yr = new Map,
        sl = new Map,
        Br = new Set,
        Vr = new Map,
        Ie = null,
        Ln, nl;
    Ns();

    function Ns() {
        if (ve === null) throw new Error("Unable to detect runtime context i.e webext-bridge can't figure out what to do");
        if ((ve === "window" || ve === "content-script") && window.addEventListener("message", k_), ve === "content-script" && top === window && (Ie = _t.runtime.connect(), Ie.onMessage.addListener(t => {
                Ut(t)
            }), Ie.onDisconnect.addListener(() => {
                Ie = null, Ns()
            })), ve === "content-script" && top !== window && (Ie = _t.runtime.connect(), Ie.onMessage.addListener(t => {
                Ut(t)
            }), Ie.onDisconnect.addListener(() => {
                Ie = null, Ns()
            })), ve === "devtools") {
            const {
                tabId: t
            } = _t.devtools.inspectedWindow, e = `devtools@${t}`;
            Ie = _t.runtime.connect(void 0, {
                name: e
            }), Ie.onMessage.addListener(s => {
                Ut(s)
            }), Ie.onDisconnect.addListener(() => {
                Ie = null, Ns()
            })
        }
        if (ve === "popup" || ve === "options") {
            const t = `${ve}`;
            Ie = _t.runtime.connect(void 0, {
                name: t
            }), Ie.onMessage.addListener(e => {
                Ut(e)
            }), Ie.onDisconnect.addListener(() => {
                Ie = null, Ns()
            })
        }
        ve === "background" && _t.runtime.onConnect.addListener(t => {
            let e = t.name || `content-script@${t.sender.tab.id}`;
            const s = t.sender.frameId;
            s && (e = `${e}.${s}`);
            const {
                context: n,
                tabId: r,
                frameId: o
            } = tl(e);
            !r && n !== "popup" && n !== "options" || (Vr.set(e, t), Br.forEach(i => {
                i.resolvedDestination === e && (t.postMessage(i.message), Br.delete(i))
            }), t.onDisconnect.addListener(() => {
                Vr.delete(e)
            }), t.onMessage.addListener(i => {
                var a;
                (a = i == null ? void 0 : i.origin) != null && a.context && (i.origin.tabId = r, i.origin.frameId = o, Ut(i))
            }))
        })
    }

    function Ut(t) {
        const {
            origin: e,
            destination: s
        } = t;
        if (!t.hops.includes(di) && (t.hops.push(di), !(ve === "content-script" && [s, e].some(n => (n == null ? void 0 : n.context) === "window") && !nl))) {
            if (!s) return w_(t);
            if (s.context) {
                if (ve === "window") return Wr(window, t);
                if (ve === "content-script" && s.context === "window") return t.destination = null, Wr(window, t);
                if (["devtools", "content-script", "popup", "options"].includes(ve)) return s.context === "background" && (t.destination = null), Ie.postMessage(t);
                if (ve === "background") {
                    const {
                        context: n,
                        tabId: r,
                        frameId: o
                    } = s, {
                        tabId: i
                    } = e;
                    n !== "window" ? t.destination = null : t.destination.tabId = null;
                    let a = ["popup", "options"].includes(n) ? n : `${n==="window"?"content-script":n}@${r||i}`;
                    o && (a = `${a}.${o}`);
                    const u = Vr.get(a);
                    u ? u.postMessage(t) : Br.add({
                        resolvedDestination: a,
                        message: t
                    })
                }
            }
        }
    }
    async function w_(t) {
        const {
            transactionId: e,
            messageID: s,
            messageType: n
        } = t, r = () => {
            const i = Yr.get(e);
            if (i) {
                const {
                    err: a,
                    data: u
                } = t;
                if (a) {
                    const c = a,
                        d = self[c.name],
                        f = new(typeof d == "function" ? d : Error)(c.message);
                    for (const h in c) f[h] = c[h];
                    i.reject(f)
                } else i.resolve(u);
                Yr.delete(e)
            }
        }, o = async () => {
            let i, a, u = !1;
            try {
                const c = sl.get(s);
                if (typeof c == "function") i = await c({
                    sender: t.origin,
                    id: s,
                    data: t.data,
                    timestamp: t.timestamp
                });
                else throw u = !0, new Error(`[webext-bridge] No handler registered in '${ve}' to accept messages with id '${s}'`)
            } catch (c) {
                a = c
            } finally {
                if (a && (t.err = g_(a)), Ut({
                        ...t,
                        messageType: "reply",
                        data: i,
                        origin: {
                            context: ve,
                            tabId: null
                        },
                        destination: t.origin,
                        hops: []
                    }), a && !u) throw i
            }
        };
        switch (n) {
            case "reply":
                return r();
            case "message":
                return o()
        }
    }
    async function k_({
        data: t,
        ports: e
    }) {
        if (!(ve === "content-script" && !nl)) {
            if (t.cmd === "__crx_bridge_verify_listening" && t.scope === Ln && t.context !== ve) e[0].postMessage(!0);
            else if (t.cmd === "__crx_bridge_route_message" && t.scope === Ln && t.context !== ve) {
                const {
                    payload: s
                } = t;
                ve === "content-script" && (s.origin = {
                    context: "window",
                    tabId: null
                }), Ut(s)
            }
        }
    }

    function Wr(t, e) {
        S_();
        const s = new MessageChannel,
            n = setTimeout(() => {
                s.port1.onmessage = null, Wr(t, e)
            }, 300);
        s.port1.onmessage = () => {
            clearTimeout(n), t.postMessage({
                cmd: "__crx_bridge_route_message",
                scope: Ln,
                context: ve,
                payload: e
            }, "*")
        }, t.postMessage({
            cmd: "__crx_bridge_verify_listening",
            scope: Ln,
            context: ve
        }, "*", [s.port2])
    }

    function S_() {
        throw new Error(`webext-bridge uses window.postMessage to talk with other "window"(s), for message routing and stuff,which is global/conflicting operation in case there are other scripts using webext-bridge. Call Bridge#setNamespace(nsps) to isolate your app. Example: setNamespace('com.facebook.react-devtools'). Make sure to use same namespace across all your scripts whereever window.postMessage is likely to be used\``)
    }

    function rl(t, e) {
        sl.set(t, e)
    }
    async function zr(t, e, s = "background") {
        const n = typeof s == "string" ? tl(s) : s,
            r = "Bridge#sendMessage ->";
        if (!n.context) throw new TypeError(`${r} Destination must be any one of known destinations`);
        if (ve === "background") {
            const {
                context: o,
                tabId: i
            } = n;
            if (o !== "background" && !i) throw new TypeError(`${r} When sending messages from background page, use @tabId syntax to target specific tab`)
        }
        return new Promise((o, i) => {
            const a = {
                messageID: t,
                data: e,
                destination: n,
                messageType: "message",
                transactionId: ar.exports(),
                origin: {
                    context: ve,
                    tabId: null
                },
                hops: [],
                timestamp: Date.now()
            };
            Yr.set(a.transactionId, {
                resolve: o,
                reject: i
            }), Ut(a)
        })
    }
    var ds = class {
            constructor(t) {
                this.handleStreamClose = () => {
                    this.isClosed || (this.isClosed = !0, this.emitter.emit("closed", !0), this.emitter.events = {})
                }, this.internalInfo = t, this.emitter = Qa(), this.isClosed = !1, ds.initDone || (rl("__crx_bridge_stream_transfer__", e => {
                    const {
                        streamId: s,
                        streamTransfer: n,
                        action: r
                    } = e.data, o = ds.openStreams.get(s);
                    o && !o.isClosed && (r === "transfer" && o.emitter.emit("message", n), r === "close" && (ds.openStreams.delete(s), o.handleStreamClose()))
                }), ds.initDone = !0), ds.openStreams.set(t.streamId, this)
            }
            get info() {
                return this.internalInfo
            }
            send(t) {
                if (this.isClosed) throw new Error("Attempting to send a message over closed stream. Use stream.onClose(<callback>) to keep an eye on stream status");
                zr("__crx_bridge_stream_transfer__", {
                    streamId: this.internalInfo.streamId,
                    streamTransfer: t,
                    action: "transfer"
                }, this.internalInfo.endpoint)
            }
            close(t) {
                t && this.send(t), this.handleStreamClose(), zr("__crx_bridge_stream_transfer__", {
                    streamId: this.internalInfo.streamId,
                    streamTransfer: null,
                    action: "close"
                }, this.internalInfo.endpoint)
            }
            onMessage(t) {
                return this.getDisposable("message", t)
            }
            onClose(t) {
                return this.getDisposable("closed", t)
            }
            getDisposable(t, e) {
                const s = this.emitter.on(t, e);
                return Object.assign(s, {
                    dispose: s,
                    close: s
                })
            }
        },
        Do = ds;
    Do.initDone = !1;
    Do.openStreams = new Map;
    var T_ = new Map,
        x_ = Qa();
    rl("__crx_bridge_stream_open__", t => new Promise(e => {
        const {
            sender: s,
            data: n
        } = t, {
            channel: r
        } = n;
        let o = !1,
            i = () => {};
        const a = () => {
            const u = T_.get(r);
            typeof u == "function" ? (u(new Do({
                ...n,
                endpoint: s
            })), o && i(), e(!0)) : o || (o = !0, i = x_.on("did-change-stream-callbacks", a))
        };
        a()
    }));
    const A_ = "modulepreload",
        C_ = function(t) {
            return "/dist/" + t
        },
        fi = {},
        lr = function(e, s, n) {
            if (!s || s.length === 0) return e();
            const r = document.getElementsByTagName("link");
            return Promise.all(s.map(o => {
                if (o = C_(o), o in fi) return;
                fi[o] = !0;
                const i = o.endsWith(".css"),
                    a = i ? '[rel="stylesheet"]' : "";
                if (!!n)
                    for (let d = r.length - 1; d >= 0; d--) {
                        const f = r[d];
                        if (f.href === o && (!i || f.rel === "stylesheet")) return
                    } else if (document.querySelector(`link[href="${o}"]${a}`)) return;
                const c = document.createElement("link");
                if (c.rel = i ? "stylesheet" : A_, i || (c.as = "script", c.crossOrigin = ""), c.href = o, document.head.appendChild(c), i) return new Promise((d, f) => {
                    c.addEventListener("load", d), c.addEventListener("error", () => f(new Error(`Unable to preload CSS for ${o}`)))
                })
            })).then(() => e())
        };
    var $_ = globalThis && globalThis.__awaiter || function(t, e, s, n) {
        function r(o) {
            return o instanceof s ? o : new s(function(i) {
                i(o)
            })
        }
        return new(s || (s = Promise))(function(o, i) {
            function a(d) {
                try {
                    c(n.next(d))
                } catch (f) {
                    i(f)
                }
            }

            function u(d) {
                try {
                    c(n.throw(d))
                } catch (f) {
                    i(f)
                }
            }

            function c(d) {
                d.done ? o(d.value) : r(d.value).then(a, u)
            }
            c((n = n.apply(t, e || [])).next())
        })
    };
    const E_ = t => {
        let e;
        return t ? e = t : typeof fetch > "u" ? e = (...s) => $_(void 0, void 0, void 0, function*() {
            return yield(yield lr(() => Promise.resolve().then(() => ur), void 0)).fetch(...s)
        }) : e = fetch, (...s) => e(...s)
    };
    class Ro extends Error {
        constructor(e, s = "FunctionsError", n) {
            super(e), super.name = s, this.context = n
        }
    }
    class I_ extends Ro {
        constructor(e) {
            super("Failed to send a request to the Edge Function", "FunctionsFetchError", e)
        }
    }
    class O_ extends Ro {
        constructor(e) {
            super("Relay Error invoking the Edge Function", "FunctionsRelayError", e)
        }
    }
    class P_ extends Ro {
        constructor(e) {
            super("Edge Function returned a non-2xx status code", "FunctionsHttpError", e)
        }
    }
    var D_ = globalThis && globalThis.__awaiter || function(t, e, s, n) {
        function r(o) {
            return o instanceof s ? o : new s(function(i) {
                i(o)
            })
        }
        return new(s || (s = Promise))(function(o, i) {
            function a(d) {
                try {
                    c(n.next(d))
                } catch (f) {
                    i(f)
                }
            }

            function u(d) {
                try {
                    c(n.throw(d))
                } catch (f) {
                    i(f)
                }
            }

            function c(d) {
                d.done ? o(d.value) : r(d.value).then(a, u)
            }
            c((n = n.apply(t, e || [])).next())
        })
    };
    class R_ {
        constructor(e, {
            headers: s = {},
            customFetch: n
        } = {}) {
            this.url = e, this.headers = s, this.fetch = E_(n)
        }
        setAuth(e) {
            this.headers.Authorization = `Bearer ${e}`
        }
        invoke(e, s = {}) {
            var n;
            return D_(this, void 0, void 0, function*() {
                try {
                    const {
                        headers: r,
                        method: o,
                        body: i
                    } = s;
                    let a = {},
                        u;
                    i && (r && !Object.prototype.hasOwnProperty.call(r, "Content-Type") || !r) && (typeof Blob < "u" && i instanceof Blob || i instanceof ArrayBuffer ? (a["Content-Type"] = "application/octet-stream", u = i) : typeof i == "string" ? (a["Content-Type"] = "text/plain", u = i) : typeof FormData < "u" && i instanceof FormData ? u = i : (a["Content-Type"] = "application/json", u = JSON.stringify(i)));
                    const c = yield this.fetch(`${this.url}/${e}`, {
                        method: o || "POST",
                        headers: Object.assign(Object.assign(Object.assign({}, a), this.headers), r),
                        body: u
                    }).catch(p => {
                        throw new I_(p)
                    }), d = c.headers.get("x-relay-error");
                    if (d && d === "true") throw new O_(c);
                    if (!c.ok) throw new P_(c);
                    let f = ((n = c.headers.get("Content-Type")) !== null && n !== void 0 ? n : "text/plain").split(";")[0].trim(),
                        h;
                    return f === "application/json" ? h = yield c.json(): f === "application/octet-stream" ? h = yield c.blob(): f === "multipart/form-data" ? h = yield c.formData(): h = yield c.text(), {
                        data: h,
                        error: null
                    }
                } catch (r) {
                    return {
                        data: null,
                        error: r
                    }
                }
            })
        }
    }
    var Xs = {
        exports: {}
    };
    (function(t, e) {
        var s = typeof self < "u" ? self : ji,
            n = function() {
                function o() {
                    this.fetch = !1, this.DOMException = s.DOMException
                }
                return o.prototype = s, new o
            }();
        (function(o) {
            (function(i) {
                var a = {
                    searchParams: "URLSearchParams" in o,
                    iterable: "Symbol" in o && "iterator" in Symbol,
                    blob: "FileReader" in o && "Blob" in o && function() {
                        try {
                            return new Blob, !0
                        } catch {
                            return !1
                        }
                    }(),
                    formData: "FormData" in o,
                    arrayBuffer: "ArrayBuffer" in o
                };

                function u(b) {
                    return b && DataView.prototype.isPrototypeOf(b)
                }
                if (a.arrayBuffer) var c = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                    d = ArrayBuffer.isView || function(b) {
                        return b && c.indexOf(Object.prototype.toString.call(b)) > -1
                    };

                function f(b) {
                    if (typeof b != "string" && (b = String(b)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(b)) throw new TypeError("Invalid character in header field name");
                    return b.toLowerCase()
                }

                function h(b) {
                    return typeof b != "string" && (b = String(b)), b
                }

                function p(b) {
                    var A = {
                        next: function() {
                            var D = b.shift();
                            return {
                                done: D === void 0,
                                value: D
                            }
                        }
                    };
                    return a.iterable && (A[Symbol.iterator] = function() {
                        return A
                    }), A
                }

                function _(b) {
                    this.map = {}, b instanceof _ ? b.forEach(function(A, D) {
                        this.append(D, A)
                    }, this) : Array.isArray(b) ? b.forEach(function(A) {
                        this.append(A[0], A[1])
                    }, this) : b && Object.getOwnPropertyNames(b).forEach(function(A) {
                        this.append(A, b[A])
                    }, this)
                }
                _.prototype.append = function(b, A) {
                    b = f(b), A = h(A);
                    var D = this.map[b];
                    this.map[b] = D ? D + ", " + A : A
                }, _.prototype.delete = function(b) {
                    delete this.map[f(b)]
                }, _.prototype.get = function(b) {
                    return b = f(b), this.has(b) ? this.map[b] : null
                }, _.prototype.has = function(b) {
                    return this.map.hasOwnProperty(f(b))
                }, _.prototype.set = function(b, A) {
                    this.map[f(b)] = h(A)
                }, _.prototype.forEach = function(b, A) {
                    for (var D in this.map) this.map.hasOwnProperty(D) && b.call(A, this.map[D], D, this)
                }, _.prototype.keys = function() {
                    var b = [];
                    return this.forEach(function(A, D) {
                        b.push(D)
                    }), p(b)
                }, _.prototype.values = function() {
                    var b = [];
                    return this.forEach(function(A) {
                        b.push(A)
                    }), p(b)
                }, _.prototype.entries = function() {
                    var b = [];
                    return this.forEach(function(A, D) {
                        b.push([D, A])
                    }), p(b)
                }, a.iterable && (_.prototype[Symbol.iterator] = _.prototype.entries);

                function v(b) {
                    if (b.bodyUsed) return Promise.reject(new TypeError("Already read"));
                    b.bodyUsed = !0
                }

                function m(b) {
                    return new Promise(function(A, D) {
                        b.onload = function() {
                            A(b.result)
                        }, b.onerror = function() {
                            D(b.error)
                        }
                    })
                }

                function T(b) {
                    var A = new FileReader,
                        D = m(A);
                    return A.readAsArrayBuffer(b), D
                }

                function k(b) {
                    var A = new FileReader,
                        D = m(A);
                    return A.readAsText(b), D
                }

                function g(b) {
                    for (var A = new Uint8Array(b), D = new Array(A.length), H = 0; H < A.length; H++) D[H] = String.fromCharCode(A[H]);
                    return D.join("")
                }

                function C(b) {
                    if (b.slice) return b.slice(0);
                    var A = new Uint8Array(b.byteLength);
                    return A.set(new Uint8Array(b)), A.buffer
                }

                function x() {
                    return this.bodyUsed = !1, this._initBody = function(b) {
                        this._bodyInit = b, b ? typeof b == "string" ? this._bodyText = b : a.blob && Blob.prototype.isPrototypeOf(b) ? this._bodyBlob = b : a.formData && FormData.prototype.isPrototypeOf(b) ? this._bodyFormData = b : a.searchParams && URLSearchParams.prototype.isPrototypeOf(b) ? this._bodyText = b.toString() : a.arrayBuffer && a.blob && u(b) ? (this._bodyArrayBuffer = C(b.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : a.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(b) || d(b)) ? this._bodyArrayBuffer = C(b) : this._bodyText = b = Object.prototype.toString.call(b) : this._bodyText = "", this.headers.get("content-type") || (typeof b == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : a.searchParams && URLSearchParams.prototype.isPrototypeOf(b) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                    }, a.blob && (this.blob = function() {
                        var b = v(this);
                        if (b) return b;
                        if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                        if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                        if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                        return Promise.resolve(new Blob([this._bodyText]))
                    }, this.arrayBuffer = function() {
                        return this._bodyArrayBuffer ? v(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(T)
                    }), this.text = function() {
                        var b = v(this);
                        if (b) return b;
                        if (this._bodyBlob) return k(this._bodyBlob);
                        if (this._bodyArrayBuffer) return Promise.resolve(g(this._bodyArrayBuffer));
                        if (this._bodyFormData) throw new Error("could not read FormData body as text");
                        return Promise.resolve(this._bodyText)
                    }, a.formData && (this.formData = function() {
                        return this.text().then(P)
                    }), this.json = function() {
                        return this.text().then(JSON.parse)
                    }, this
                }
                var $ = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

                function W(b) {
                    var A = b.toUpperCase();
                    return $.indexOf(A) > -1 ? A : b
                }

                function E(b, A) {
                    A = A || {};
                    var D = A.body;
                    if (b instanceof E) {
                        if (b.bodyUsed) throw new TypeError("Already read");
                        this.url = b.url, this.credentials = b.credentials, A.headers || (this.headers = new _(b.headers)), this.method = b.method, this.mode = b.mode, this.signal = b.signal, !D && b._bodyInit != null && (D = b._bodyInit, b.bodyUsed = !0)
                    } else this.url = String(b);
                    if (this.credentials = A.credentials || this.credentials || "same-origin", (A.headers || !this.headers) && (this.headers = new _(A.headers)), this.method = W(A.method || this.method || "GET"), this.mode = A.mode || this.mode || null, this.signal = A.signal || this.signal, this.referrer = null, (this.method === "GET" || this.method === "HEAD") && D) throw new TypeError("Body not allowed for GET or HEAD requests");
                    this._initBody(D)
                }
                E.prototype.clone = function() {
                    return new E(this, {
                        body: this._bodyInit
                    })
                };

                function P(b) {
                    var A = new FormData;
                    return b.trim().split("&").forEach(function(D) {
                        if (D) {
                            var H = D.split("="),
                                Z = H.shift().replace(/\+/g, " "),
                                X = H.join("=").replace(/\+/g, " ");
                            A.append(decodeURIComponent(Z), decodeURIComponent(X))
                        }
                    }), A
                }

                function M(b) {
                    var A = new _,
                        D = b.replace(/\r?\n[\t ]+/g, " ");
                    return D.split(/\r?\n/).forEach(function(H) {
                        var Z = H.split(":"),
                            X = Z.shift().trim();
                        if (X) {
                            var _e = Z.join(":").trim();
                            A.append(X, _e)
                        }
                    }), A
                }
                x.call(E.prototype);

                function G(b, A) {
                    A || (A = {}), this.type = "default", this.status = A.status === void 0 ? 200 : A.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in A ? A.statusText : "OK", this.headers = new _(A.headers), this.url = A.url || "", this._initBody(b)
                }
                x.call(G.prototype), G.prototype.clone = function() {
                    return new G(this._bodyInit, {
                        status: this.status,
                        statusText: this.statusText,
                        headers: new _(this.headers),
                        url: this.url
                    })
                }, G.error = function() {
                    var b = new G(null, {
                        status: 0,
                        statusText: ""
                    });
                    return b.type = "error", b
                };
                var re = [301, 302, 303, 307, 308];
                G.redirect = function(b, A) {
                    if (re.indexOf(A) === -1) throw new RangeError("Invalid status code");
                    return new G(null, {
                        status: A,
                        headers: {
                            location: b
                        }
                    })
                }, i.DOMException = o.DOMException;
                try {
                    new i.DOMException
                } catch {
                    i.DOMException = function(A, D) {
                        this.message = A, this.name = D;
                        var H = Error(A);
                        this.stack = H.stack
                    }, i.DOMException.prototype = Object.create(Error.prototype), i.DOMException.prototype.constructor = i.DOMException
                }

                function R(b, A) {
                    return new Promise(function(D, H) {
                        var Z = new E(b, A);
                        if (Z.signal && Z.signal.aborted) return H(new i.DOMException("Aborted", "AbortError"));
                        var X = new XMLHttpRequest;

                        function _e() {
                            X.abort()
                        }
                        X.onload = function() {
                            var ge = {
                                status: X.status,
                                statusText: X.statusText,
                                headers: M(X.getAllResponseHeaders() || "")
                            };
                            ge.url = "responseURL" in X ? X.responseURL : ge.headers.get("X-Request-URL");
                            var wt = "response" in X ? X.response : X.responseText;
                            D(new G(wt, ge))
                        }, X.onerror = function() {
                            H(new TypeError("Network request failed"))
                        }, X.ontimeout = function() {
                            H(new TypeError("Network request failed"))
                        }, X.onabort = function() {
                            H(new i.DOMException("Aborted", "AbortError"))
                        }, X.open(Z.method, Z.url, !0), Z.credentials === "include" ? X.withCredentials = !0 : Z.credentials === "omit" && (X.withCredentials = !1), "responseType" in X && a.blob && (X.responseType = "blob"), Z.headers.forEach(function(ge, wt) {
                            X.setRequestHeader(wt, ge)
                        }), Z.signal && (Z.signal.addEventListener("abort", _e), X.onreadystatechange = function() {
                            X.readyState === 4 && Z.signal.removeEventListener("abort", _e)
                        }), X.send(typeof Z._bodyInit > "u" ? null : Z._bodyInit)
                    })
                }
                return R.polyfill = !0, o.fetch || (o.fetch = R, o.Headers = _, o.Request = E, o.Response = G), i.Headers = _, i.Request = E, i.Response = G, i.fetch = R, Object.defineProperty(i, "__esModule", {
                    value: !0
                }), i
            })({})
        })(n), n.fetch.ponyfill = !0, delete n.fetch.polyfill;
        var r = n;
        e = r.fetch, e.default = r.fetch, e.fetch = r.fetch, e.Headers = r.Headers, e.Request = r.Request, e.Response = r.Response, t.exports = e
    })(Xs, Xs.exports);
    const Mo = $u(Xs.exports),
        ur = Hu({
            __proto__: null,
            default: Mo
        }, [Xs.exports]);
    class M_ {
        constructor(e) {
            this.shouldThrowOnError = !1, this.method = e.method, this.url = e.url, this.headers = e.headers, this.schema = e.schema, this.body = e.body, this.shouldThrowOnError = e.shouldThrowOnError, this.signal = e.signal, this.isMaybeSingle = e.isMaybeSingle, e.fetch ? this.fetch = e.fetch : typeof fetch > "u" ? this.fetch = Mo : this.fetch = fetch
        }
        throwOnError() {
            return this.shouldThrowOnError = !0, this
        }
        then(e, s) {
            this.schema === void 0 || (["GET", "HEAD"].includes(this.method) ? this.headers["Accept-Profile"] = this.schema : this.headers["Content-Profile"] = this.schema), this.method !== "GET" && this.method !== "HEAD" && (this.headers["Content-Type"] = "application/json");
            const n = this.fetch;
            let r = n(this.url.toString(), {
                method: this.method,
                headers: this.headers,
                body: JSON.stringify(this.body),
                signal: this.signal
            }).then(async o => {
                var i, a, u;
                let c = null,
                    d = null,
                    f = null,
                    h = o.status,
                    p = o.statusText;
                if (o.ok) {
                    if (this.method !== "HEAD") {
                        const T = await o.text();
                        T === "" || (this.headers.Accept === "text/csv" || this.headers.Accept && this.headers.Accept.includes("application/vnd.pgrst.plan+text") ? d = T : d = JSON.parse(T))
                    }
                    const v = (i = this.headers.Prefer) === null || i === void 0 ? void 0 : i.match(/count=(exact|planned|estimated)/),
                        m = (a = o.headers.get("content-range")) === null || a === void 0 ? void 0 : a.split("/");
                    v && m && m.length > 1 && (f = parseInt(m[1])), this.isMaybeSingle && this.method === "GET" && Array.isArray(d) && (d.length > 1 ? (c = {
                        code: "PGRST116",
                        details: `Results contain ${d.length} rows, application/vnd.pgrst.object+json requires 1 row`,
                        hint: null,
                        message: "JSON object requested, multiple (or no) rows returned"
                    }, d = null, f = null, h = 406, p = "Not Acceptable") : d.length === 1 ? d = d[0] : d = null)
                } else {
                    const v = await o.text();
                    try {
                        c = JSON.parse(v), Array.isArray(c) && o.status === 404 && (d = [], c = null, h = 200, p = "OK")
                    } catch {
                        o.status === 404 && v === "" ? (h = 204, p = "No Content") : c = {
                            message: v
                        }
                    }
                    if (c && this.isMaybeSingle && ((u = c == null ? void 0 : c.details) === null || u === void 0 ? void 0 : u.includes("Results contain 0 rows")) && (c = null, h = 200, p = "OK"), c && this.shouldThrowOnError) throw c
                }
                return {
                    error: c,
                    data: d,
                    count: f,
                    status: h,
                    statusText: p
                }
            });
            return this.shouldThrowOnError || (r = r.catch(o => {
                var i, a, u;
                return {
                    error: {
                        message: `${(i=o==null?void 0:o.name)!==null&&i!==void 0?i:"FetchError"}: ${o==null?void 0:o.message}`,
                        details: `${(a=o==null?void 0:o.stack)!==null&&a!==void 0?a:""}`,
                        hint: "",
                        code: `${(u=o==null?void 0:o.code)!==null&&u!==void 0?u:""}`
                    },
                    data: null,
                    count: null,
                    status: 0,
                    statusText: ""
                }
            })), r.then(e, s)
        }
    }
    class L_ extends M_ {
        select(e) {
            let s = !1;
            const n = (e != null ? e : "*").split("").map(r => /\s/.test(r) && !s ? "" : (r === '"' && (s = !s), r)).join("");
            return this.url.searchParams.set("select", n), this.headers.Prefer && (this.headers.Prefer += ","), this.headers.Prefer += "return=representation", this
        }
        order(e, {
            ascending: s = !0,
            nullsFirst: n,
            foreignTable: r
        } = {}) {
            const o = r ? `${r}.order` : "order",
                i = this.url.searchParams.get(o);
            return this.url.searchParams.set(o, `${i?`${i},`:""}${e}.${s?"asc":"desc"}${n===void 0?"":n?".nullsfirst":".nullslast"}`), this
        }
        limit(e, {
            foreignTable: s
        } = {}) {
            const n = typeof s > "u" ? "limit" : `${s}.limit`;
            return this.url.searchParams.set(n, `${e}`), this
        }
        range(e, s, {
            foreignTable: n
        } = {}) {
            const r = typeof n > "u" ? "offset" : `${n}.offset`,
                o = typeof n > "u" ? "limit" : `${n}.limit`;
            return this.url.searchParams.set(r, `${e}`), this.url.searchParams.set(o, `${s-e+1}`), this
        }
        abortSignal(e) {
            return this.signal = e, this
        }
        single() {
            return this.headers.Accept = "application/vnd.pgrst.object+json", this
        }
        maybeSingle() {
            return this.method === "GET" ? this.headers.Accept = "application/json" : this.headers.Accept = "application/vnd.pgrst.object+json", this.isMaybeSingle = !0, this
        }
        csv() {
            return this.headers.Accept = "text/csv", this
        }
        geojson() {
            return this.headers.Accept = "application/geo+json", this
        }
        explain({
            analyze: e = !1,
            verbose: s = !1,
            settings: n = !1,
            buffers: r = !1,
            wal: o = !1,
            format: i = "text"
        } = {}) {
            const a = [e ? "analyze" : null, s ? "verbose" : null, n ? "settings" : null, r ? "buffers" : null, o ? "wal" : null].filter(Boolean).join("|"),
                u = this.headers.Accept;
            return this.headers.Accept = `application/vnd.pgrst.plan+${i}; for="${u}"; options=${a};`, i === "json" ? this : this
        }
        rollback() {
            var e;
            return ((e = this.headers.Prefer) !== null && e !== void 0 ? e : "").trim().length > 0 ? this.headers.Prefer += ",tx=rollback" : this.headers.Prefer = "tx=rollback", this
        }
        returns() {
            return this
        }
    }
    class fs extends L_ {
        eq(e, s) {
            return this.url.searchParams.append(e, `eq.${s}`), this
        }
        neq(e, s) {
            return this.url.searchParams.append(e, `neq.${s}`), this
        }
        gt(e, s) {
            return this.url.searchParams.append(e, `gt.${s}`), this
        }
        gte(e, s) {
            return this.url.searchParams.append(e, `gte.${s}`), this
        }
        lt(e, s) {
            return this.url.searchParams.append(e, `lt.${s}`), this
        }
        lte(e, s) {
            return this.url.searchParams.append(e, `lte.${s}`), this
        }
        like(e, s) {
            return this.url.searchParams.append(e, `like.${s}`), this
        }
        likeAllOf(e, s) {
            return this.url.searchParams.append(e, `like(all).{${s.join(",")}}`), this
        }
        likeAnyOf(e, s) {
            return this.url.searchParams.append(e, `like(any).{${s.join(",")}}`), this
        }
        ilike(e, s) {
            return this.url.searchParams.append(e, `ilike.${s}`), this
        }
        ilikeAllOf(e, s) {
            return this.url.searchParams.append(e, `ilike(all).{${s.join(",")}}`), this
        }
        ilikeAnyOf(e, s) {
            return this.url.searchParams.append(e, `ilike(any).{${s.join(",")}}`), this
        }
        is(e, s) {
            return this.url.searchParams.append(e, `is.${s}`), this
        }
        in(e, s) {
            const n = s.map(r => typeof r == "string" && new RegExp("[,()]").test(r) ? `"${r}"` : `${r}`).join(",");
            return this.url.searchParams.append(e, `in.(${n})`), this
        }
        contains(e, s) {
            return typeof s == "string" ? this.url.searchParams.append(e, `cs.${s}`) : Array.isArray(s) ? this.url.searchParams.append(e, `cs.{${s.join(",")}}`) : this.url.searchParams.append(e, `cs.${JSON.stringify(s)}`), this
        }
        containedBy(e, s) {
            return typeof s == "string" ? this.url.searchParams.append(e, `cd.${s}`) : Array.isArray(s) ? this.url.searchParams.append(e, `cd.{${s.join(",")}}`) : this.url.searchParams.append(e, `cd.${JSON.stringify(s)}`), this
        }
        rangeGt(e, s) {
            return this.url.searchParams.append(e, `sr.${s}`), this
        }
        rangeGte(e, s) {
            return this.url.searchParams.append(e, `nxl.${s}`), this
        }
        rangeLt(e, s) {
            return this.url.searchParams.append(e, `sl.${s}`), this
        }
        rangeLte(e, s) {
            return this.url.searchParams.append(e, `nxr.${s}`), this
        }
        rangeAdjacent(e, s) {
            return this.url.searchParams.append(e, `adj.${s}`), this
        }
        overlaps(e, s) {
            return typeof s == "string" ? this.url.searchParams.append(e, `ov.${s}`) : this.url.searchParams.append(e, `ov.{${s.join(",")}}`), this
        }
        textSearch(e, s, {
            config: n,
            type: r
        } = {}) {
            let o = "";
            r === "plain" ? o = "pl" : r === "phrase" ? o = "ph" : r === "websearch" && (o = "w");
            const i = n === void 0 ? "" : `(${n})`;
            return this.url.searchParams.append(e, `${o}fts${i}.${s}`), this
        }
        match(e) {
            return Object.entries(e).forEach(([s, n]) => {
                this.url.searchParams.append(s, `eq.${n}`)
            }), this
        }
        not(e, s, n) {
            return this.url.searchParams.append(e, `not.${s}.${n}`), this
        }
        or(e, {
            foreignTable: s
        } = {}) {
            const n = s ? `${s}.or` : "or";
            return this.url.searchParams.append(n, `(${e})`), this
        }
        filter(e, s, n) {
            return this.url.searchParams.append(e, `${s}.${n}`), this
        }
    }
    class N_ {
        constructor(e, {
            headers: s = {},
            schema: n,
            fetch: r
        }) {
            this.url = e, this.headers = s, this.schema = n, this.fetch = r
        }
        select(e, {
            head: s = !1,
            count: n
        } = {}) {
            const r = s ? "HEAD" : "GET";
            let o = !1;
            const i = (e != null ? e : "*").split("").map(a => /\s/.test(a) && !o ? "" : (a === '"' && (o = !o), a)).join("");
            return this.url.searchParams.set("select", i), n && (this.headers.Prefer = `count=${n}`), new fs({
                method: r,
                url: this.url,
                headers: this.headers,
                schema: this.schema,
                fetch: this.fetch,
                allowEmpty: !1
            })
        }
        insert(e, {
            count: s,
            defaultToNull: n = !0
        } = {}) {
            const r = "POST",
                o = [];
            if (this.headers.Prefer && o.push(this.headers.Prefer), s && o.push(`count=${s}`), n || o.push("missing=default"), this.headers.Prefer = o.join(","), Array.isArray(e)) {
                const i = e.reduce((a, u) => a.concat(Object.keys(u)), []);
                if (i.length > 0) {
                    const a = [...new Set(i)].map(u => `"${u}"`);
                    this.url.searchParams.set("columns", a.join(","))
                }
            }
            return new fs({
                method: r,
                url: this.url,
                headers: this.headers,
                schema: this.schema,
                body: e,
                fetch: this.fetch,
                allowEmpty: !1
            })
        }
        upsert(e, {
            onConflict: s,
            ignoreDuplicates: n = !1,
            count: r,
            defaultToNull: o = !0
        } = {}) {
            const i = "POST",
                a = [`resolution=${n?"ignore":"merge"}-duplicates`];
            if (s !== void 0 && this.url.searchParams.set("on_conflict", s), this.headers.Prefer && a.push(this.headers.Prefer), r && a.push(`count=${r}`), o || a.push("missing=default"), this.headers.Prefer = a.join(","), Array.isArray(e)) {
                const u = e.reduce((c, d) => c.concat(Object.keys(d)), []);
                if (u.length > 0) {
                    const c = [...new Set(u)].map(d => `"${d}"`);
                    this.url.searchParams.set("columns", c.join(","))
                }
            }
            return new fs({
                method: i,
                url: this.url,
                headers: this.headers,
                schema: this.schema,
                body: e,
                fetch: this.fetch,
                allowEmpty: !1
            })
        }
        update(e, {
            count: s
        } = {}) {
            const n = "PATCH",
                r = [];
            return this.headers.Prefer && r.push(this.headers.Prefer), s && r.push(`count=${s}`), this.headers.Prefer = r.join(","), new fs({
                method: n,
                url: this.url,
                headers: this.headers,
                schema: this.schema,
                body: e,
                fetch: this.fetch,
                allowEmpty: !1
            })
        }
        delete({
            count: e
        } = {}) {
            const s = "DELETE",
                n = [];
            return e && n.push(`count=${e}`), this.headers.Prefer && n.unshift(this.headers.Prefer), this.headers.Prefer = n.join(","), new fs({
                method: s,
                url: this.url,
                headers: this.headers,
                schema: this.schema,
                fetch: this.fetch,
                allowEmpty: !1
            })
        }
    }
    const F_ = "1.6.1",
        j_ = {
            "X-Client-Info": `postgrest-js/${F_}`
        };
    class U_ {
        constructor(e, {
            headers: s = {},
            schema: n,
            fetch: r
        } = {}) {
            this.url = e, this.headers = Object.assign(Object.assign({}, j_), s), this.schema = n, this.fetch = r
        }
        from(e) {
            const s = new URL(`${this.url}/${e}`);
            return new N_(s, {
                headers: Object.assign({}, this.headers),
                schema: this.schema,
                fetch: this.fetch
            })
        }
        rpc(e, s = {}, {
            head: n = !1,
            count: r
        } = {}) {
            let o;
            const i = new URL(`${this.url}/rpc/${e}`);
            let a;
            n ? (o = "HEAD", Object.entries(s).forEach(([c, d]) => {
                i.searchParams.append(c, `${d}`)
            })) : (o = "POST", a = s);
            const u = Object.assign({}, this.headers);
            return r && (u.Prefer = `count=${r}`), new fs({
                method: o,
                url: i,
                headers: u,
                schema: this.schema,
                body: a,
                fetch: this.fetch,
                allowEmpty: !1
            })
        }
    }
    var yr, hi;

    function Y_() {
        if (hi) return yr;
        hi = 1;
        var t = function() {
            if (typeof self == "object" && self) return self;
            if (typeof window == "object" && window) return window;
            throw new Error("Unable to resolve global `this`")
        };
        return yr = function() {
            if (this) return this;
            if (typeof globalThis == "object" && globalThis) return globalThis;
            try {
                Object.defineProperty(Object.prototype, "__global__", {
                    get: function() {
                        return this
                    },
                    configurable: !0
                })
            } catch {
                return t()
            }
            try {
                return __global__ || t()
            } finally {
                delete Object.prototype.__global__
            }
        }(), yr
    }
    const B_ = "websocket",
        V_ = "Websocket Client & Server Library implementing the WebSocket protocol as specified in RFC 6455.",
        W_ = ["websocket", "websockets", "socket", "networking", "comet", "push", "RFC-6455", "realtime", "server", "client"],
        z_ = "Brian McKelvey <theturtle32@gmail.com> (https://github.com/theturtle32)",
        H_ = ["I\xF1aki Baz Castillo <ibc@aliax.net> (http://dev.sipdoc.net)"],
        G_ = "1.0.34",
        q_ = {
            type: "git",
            url: "https://github.com/theturtle32/WebSocket-Node.git"
        },
        J_ = "https://github.com/theturtle32/WebSocket-Node",
        K_ = {
            node: ">=4.0.0"
        },
        Q_ = {
            bufferutil: "^4.0.1",
            debug: "^2.2.0",
            "es5-ext": "^0.10.50",
            "typedarray-to-buffer": "^3.1.5",
            "utf-8-validate": "^5.0.2",
            yaeti: "^0.0.6"
        },
        Z_ = {
            "buffer-equal": "^1.0.0",
            gulp: "^4.0.2",
            "gulp-jshint": "^2.0.4",
            "jshint-stylish": "^2.2.1",
            jshint: "^2.0.0",
            tape: "^4.9.1"
        },
        X_ = {
            verbose: !1
        },
        eg = {
            test: "tape test/unit/*.js",
            gulp: "gulp"
        },
        tg = "index",
        sg = {
            lib: "./lib"
        },
        ng = "lib/browser.js",
        rg = "Apache-2.0",
        og = {
            name: B_,
            description: V_,
            keywords: W_,
            author: z_,
            contributors: H_,
            version: G_,
            repository: q_,
            homepage: J_,
            engines: K_,
            dependencies: Q_,
            devDependencies: Z_,
            config: X_,
            scripts: eg,
            main: tg,
            directories: sg,
            browser: ng,
            license: rg
        };
    var ig = og.version,
        Jt;
    if (typeof globalThis == "object") Jt = globalThis;
    else try {
        Jt = Y_()
    } catch {} finally {
        if (!Jt && typeof window < "u" && (Jt = window), !Jt) throw new Error("Could not determine global this")
    }
    var en = Jt.WebSocket || Jt.MozWebSocket,
        ag = ig;

    function ol(t, e) {
        var s;
        return e ? s = new en(t, e) : s = new en(t), s
    }
    en && ["CONNECTING", "OPEN", "CLOSING", "CLOSED"].forEach(function(t) {
        Object.defineProperty(ol, t, {
            get: function() {
                return en[t]
            }
        })
    });
    var lg = {
        w3cwebsocket: en ? ol : null,
        version: ag
    };
    const ug = "2.7.2",
        cg = {
            "X-Client-Info": `realtime-js/${ug}`
        },
        dg = "1.0.0",
        il = 1e4,
        fg = 1e3;
    var Vs;
    (function(t) {
        t[t.connecting = 0] = "connecting", t[t.open = 1] = "open", t[t.closing = 2] = "closing", t[t.closed = 3] = "closed"
    })(Vs || (Vs = {}));
    var ze;
    (function(t) {
        t.closed = "closed", t.errored = "errored", t.joined = "joined", t.joining = "joining", t.leaving = "leaving"
    })(ze || (ze = {}));
    var it;
    (function(t) {
        t.close = "phx_close", t.error = "phx_error", t.join = "phx_join", t.reply = "phx_reply", t.leave = "phx_leave", t.access_token = "access_token"
    })(it || (it = {}));
    var Hr;
    (function(t) {
        t.websocket = "websocket"
    })(Hr || (Hr = {}));
    var Kt;
    (function(t) {
        t.Connecting = "connecting", t.Open = "open", t.Closing = "closing", t.Closed = "closed"
    })(Kt || (Kt = {}));
    class al {
        constructor(e, s) {
            this.callback = e, this.timerCalc = s, this.timer = void 0, this.tries = 0, this.callback = e, this.timerCalc = s
        }
        reset() {
            this.tries = 0, clearTimeout(this.timer)
        }
        scheduleTimeout() {
            clearTimeout(this.timer), this.timer = setTimeout(() => {
                this.tries = this.tries + 1, this.callback()
            }, this.timerCalc(this.tries + 1))
        }
    }
    class hg {
        constructor() {
            this.HEADER_LENGTH = 1
        }
        decode(e, s) {
            return e.constructor === ArrayBuffer ? s(this._binaryDecode(e)) : s(typeof e == "string" ? JSON.parse(e) : {})
        }
        _binaryDecode(e) {
            const s = new DataView(e),
                n = new TextDecoder;
            return this._decodeBroadcast(e, s, n)
        }
        _decodeBroadcast(e, s, n) {
            const r = s.getUint8(1),
                o = s.getUint8(2);
            let i = this.HEADER_LENGTH + 2;
            const a = n.decode(e.slice(i, i + r));
            i = i + r;
            const u = n.decode(e.slice(i, i + o));
            i = i + o;
            const c = JSON.parse(n.decode(e.slice(i, e.byteLength)));
            return {
                ref: null,
                topic: a,
                event: u,
                payload: c
            }
        }
    }
    class br {
        constructor(e, s, n = {}, r = il) {
            this.channel = e, this.event = s, this.payload = n, this.timeout = r, this.sent = !1, this.timeoutTimer = void 0, this.ref = "", this.receivedResp = null, this.recHooks = [], this.refEvent = null, this.rateLimited = !1
        }
        resend(e) {
            this.timeout = e, this._cancelRefEvent(), this.ref = "", this.refEvent = null, this.receivedResp = null, this.sent = !1, this.send()
        }
        send() {
            if (this._hasReceived("timeout")) return;
            this.startTimeout(), this.sent = !0, this.channel.socket.push({
                topic: this.channel.topic,
                event: this.event,
                payload: this.payload,
                ref: this.ref,
                join_ref: this.channel._joinRef()
            }) === "rate limited" && (this.rateLimited = !0)
        }
        updatePayload(e) {
            this.payload = Object.assign(Object.assign({}, this.payload), e)
        }
        receive(e, s) {
            var n;
            return this._hasReceived(e) && s((n = this.receivedResp) === null || n === void 0 ? void 0 : n.response), this.recHooks.push({
                status: e,
                callback: s
            }), this
        }
        startTimeout() {
            if (this.timeoutTimer) return;
            this.ref = this.channel.socket._makeRef(), this.refEvent = this.channel._replyEventName(this.ref);
            const e = s => {
                this._cancelRefEvent(), this._cancelTimeout(), this.receivedResp = s, this._matchReceive(s)
            };
            this.channel._on(this.refEvent, {}, e), this.timeoutTimer = setTimeout(() => {
                this.trigger("timeout", {})
            }, this.timeout)
        }
        trigger(e, s) {
            this.refEvent && this.channel._trigger(this.refEvent, {
                status: e,
                response: s
            })
        }
        destroy() {
            this._cancelRefEvent(), this._cancelTimeout()
        }
        _cancelRefEvent() {
            !this.refEvent || this.channel._off(this.refEvent, {})
        }
        _cancelTimeout() {
            clearTimeout(this.timeoutTimer), this.timeoutTimer = void 0
        }
        _matchReceive({
            status: e,
            response: s
        }) {
            this.recHooks.filter(n => n.status === e).forEach(n => n.callback(s))
        }
        _hasReceived(e) {
            return this.receivedResp && this.receivedResp.status === e
        }
    }
    var mi;
    (function(t) {
        t.SYNC = "sync", t.JOIN = "join", t.LEAVE = "leave"
    })(mi || (mi = {}));
    class Ws {
        constructor(e, s) {
            this.channel = e, this.state = {}, this.pendingDiffs = [], this.joinRef = null, this.caller = {
                onJoin: () => {},
                onLeave: () => {},
                onSync: () => {}
            };
            const n = (s == null ? void 0 : s.events) || {
                state: "presence_state",
                diff: "presence_diff"
            };
            this.channel._on(n.state, {}, r => {
                const {
                    onJoin: o,
                    onLeave: i,
                    onSync: a
                } = this.caller;
                this.joinRef = this.channel._joinRef(), this.state = Ws.syncState(this.state, r, o, i), this.pendingDiffs.forEach(u => {
                    this.state = Ws.syncDiff(this.state, u, o, i)
                }), this.pendingDiffs = [], a()
            }), this.channel._on(n.diff, {}, r => {
                const {
                    onJoin: o,
                    onLeave: i,
                    onSync: a
                } = this.caller;
                this.inPendingSyncState() ? this.pendingDiffs.push(r) : (this.state = Ws.syncDiff(this.state, r, o, i), a())
            }), this.onJoin((r, o, i) => {
                this.channel._trigger("presence", {
                    event: "join",
                    key: r,
                    currentPresences: o,
                    newPresences: i
                })
            }), this.onLeave((r, o, i) => {
                this.channel._trigger("presence", {
                    event: "leave",
                    key: r,
                    currentPresences: o,
                    leftPresences: i
                })
            }), this.onSync(() => {
                this.channel._trigger("presence", {
                    event: "sync"
                })
            })
        }
        static syncState(e, s, n, r) {
            const o = this.cloneDeep(e),
                i = this.transformState(s),
                a = {},
                u = {};
            return this.map(o, (c, d) => {
                i[c] || (u[c] = d)
            }), this.map(i, (c, d) => {
                const f = o[c];
                if (f) {
                    const h = d.map(m => m.presence_ref),
                        p = f.map(m => m.presence_ref),
                        _ = d.filter(m => p.indexOf(m.presence_ref) < 0),
                        v = f.filter(m => h.indexOf(m.presence_ref) < 0);
                    _.length > 0 && (a[c] = _), v.length > 0 && (u[c] = v)
                } else a[c] = d
            }), this.syncDiff(o, {
                joins: a,
                leaves: u
            }, n, r)
        }
        static syncDiff(e, s, n, r) {
            const {
                joins: o,
                leaves: i
            } = {
                joins: this.transformState(s.joins),
                leaves: this.transformState(s.leaves)
            };
            return n || (n = () => {}), r || (r = () => {}), this.map(o, (a, u) => {
                var c;
                const d = (c = e[a]) !== null && c !== void 0 ? c : [];
                if (e[a] = this.cloneDeep(u), d.length > 0) {
                    const f = e[a].map(p => p.presence_ref),
                        h = d.filter(p => f.indexOf(p.presence_ref) < 0);
                    e[a].unshift(...h)
                }
                n(a, d, u)
            }), this.map(i, (a, u) => {
                let c = e[a];
                if (!c) return;
                const d = u.map(f => f.presence_ref);
                c = c.filter(f => d.indexOf(f.presence_ref) < 0), e[a] = c, r(a, c, u), c.length === 0 && delete e[a]
            }), e
        }
        static map(e, s) {
            return Object.getOwnPropertyNames(e).map(n => s(n, e[n]))
        }
        static transformState(e) {
            return e = this.cloneDeep(e), Object.getOwnPropertyNames(e).reduce((s, n) => {
                const r = e[n];
                return "metas" in r ? s[n] = r.metas.map(o => (o.presence_ref = o.phx_ref, delete o.phx_ref, delete o.phx_ref_prev, o)) : s[n] = r, s
            }, {})
        }
        static cloneDeep(e) {
            return JSON.parse(JSON.stringify(e))
        }
        onJoin(e) {
            this.caller.onJoin = e
        }
        onLeave(e) {
            this.caller.onLeave = e
        }
        onSync(e) {
            this.caller.onSync = e
        }
        inPendingSyncState() {
            return !this.joinRef || this.joinRef !== this.channel._joinRef()
        }
    }
    var me;
    (function(t) {
        t.abstime = "abstime", t.bool = "bool", t.date = "date", t.daterange = "daterange", t.float4 = "float4", t.float8 = "float8", t.int2 = "int2", t.int4 = "int4", t.int4range = "int4range", t.int8 = "int8", t.int8range = "int8range", t.json = "json", t.jsonb = "jsonb", t.money = "money", t.numeric = "numeric", t.oid = "oid", t.reltime = "reltime", t.text = "text", t.time = "time", t.timestamp = "timestamp", t.timestamptz = "timestamptz", t.timetz = "timetz", t.tsrange = "tsrange", t.tstzrange = "tstzrange"
    })(me || (me = {}));
    const pi = (t, e, s = {}) => {
            var n;
            const r = (n = s.skipTypes) !== null && n !== void 0 ? n : [];
            return Object.keys(e).reduce((o, i) => (o[i] = mg(i, t, e, r), o), {})
        },
        mg = (t, e, s, n) => {
            const r = e.find(a => a.name === t),
                o = r == null ? void 0 : r.type,
                i = s[t];
            return o && !n.includes(o) ? ll(o, i) : Gr(i)
        },
        ll = (t, e) => {
            if (t.charAt(0) === "_") {
                const s = t.slice(1, t.length);
                return vg(e, s)
            }
            switch (t) {
                case me.bool:
                    return pg(e);
                case me.float4:
                case me.float8:
                case me.int2:
                case me.int4:
                case me.int8:
                case me.numeric:
                case me.oid:
                    return _g(e);
                case me.json:
                case me.jsonb:
                    return gg(e);
                case me.timestamp:
                    return yg(e);
                case me.abstime:
                case me.date:
                case me.daterange:
                case me.int4range:
                case me.int8range:
                case me.money:
                case me.reltime:
                case me.text:
                case me.time:
                case me.timestamptz:
                case me.timetz:
                case me.tsrange:
                case me.tstzrange:
                    return Gr(e);
                default:
                    return Gr(e)
            }
        },
        Gr = t => t,
        pg = t => {
            switch (t) {
                case "t":
                    return !0;
                case "f":
                    return !1;
                default:
                    return t
            }
        },
        _g = t => {
            if (typeof t == "string") {
                const e = parseFloat(t);
                if (!Number.isNaN(e)) return e
            }
            return t
        },
        gg = t => {
            if (typeof t == "string") try {
                return JSON.parse(t)
            } catch (e) {
                return console.log(`JSON parse error: ${e}`), t
            }
            return t
        },
        vg = (t, e) => {
            if (typeof t != "string") return t;
            const s = t.length - 1,
                n = t[s];
            if (t[0] === "{" && n === "}") {
                let o;
                const i = t.slice(1, s);
                try {
                    o = JSON.parse("[" + i + "]")
                } catch {
                    o = i ? i.split(",") : []
                }
                return o.map(a => ll(e, a))
            }
            return t
        },
        yg = t => typeof t == "string" ? t.replace(" ", "T") : t;
    var _i = globalThis && globalThis.__awaiter || function(t, e, s, n) {
            function r(o) {
                return o instanceof s ? o : new s(function(i) {
                    i(o)
                })
            }
            return new(s || (s = Promise))(function(o, i) {
                function a(d) {
                    try {
                        c(n.next(d))
                    } catch (f) {
                        i(f)
                    }
                }

                function u(d) {
                    try {
                        c(n.throw(d))
                    } catch (f) {
                        i(f)
                    }
                }

                function c(d) {
                    d.done ? o(d.value) : r(d.value).then(a, u)
                }
                c((n = n.apply(t, e || [])).next())
            })
        },
        gi;
    (function(t) {
        t.ALL = "*", t.INSERT = "INSERT", t.UPDATE = "UPDATE", t.DELETE = "DELETE"
    })(gi || (gi = {}));
    var vi;
    (function(t) {
        t.BROADCAST = "broadcast", t.PRESENCE = "presence", t.POSTGRES_CHANGES = "postgres_changes"
    })(vi || (vi = {}));
    var yi;
    (function(t) {
        t.SUBSCRIBED = "SUBSCRIBED", t.TIMED_OUT = "TIMED_OUT", t.CLOSED = "CLOSED", t.CHANNEL_ERROR = "CHANNEL_ERROR"
    })(yi || (yi = {}));
    class Lo {
        constructor(e, s = {
            config: {}
        }, n) {
            this.topic = e, this.params = s, this.socket = n, this.bindings = {}, this.state = ze.closed, this.joinedOnce = !1, this.pushBuffer = [], this.params.config = Object.assign({
                broadcast: {
                    ack: !1,
                    self: !1
                },
                presence: {
                    key: ""
                }
            }, s.config), this.timeout = this.socket.timeout, this.joinPush = new br(this, it.join, this.params, this.timeout), this.rejoinTimer = new al(() => this._rejoinUntilConnected(), this.socket.reconnectAfterMs), this.joinPush.receive("ok", () => {
                this.state = ze.joined, this.rejoinTimer.reset(), this.pushBuffer.forEach(r => r.send()), this.pushBuffer = []
            }), this._onClose(() => {
                this.rejoinTimer.reset(), this.socket.log("channel", `close ${this.topic} ${this._joinRef()}`), this.state = ze.closed, this.socket._remove(this)
            }), this._onError(r => {
                this._isLeaving() || this._isClosed() || (this.socket.log("channel", `error ${this.topic}`, r), this.state = ze.errored, this.rejoinTimer.scheduleTimeout())
            }), this.joinPush.receive("timeout", () => {
                !this._isJoining() || (this.socket.log("channel", `timeout ${this.topic}`, this.joinPush.timeout), this.state = ze.errored, this.rejoinTimer.scheduleTimeout())
            }), this._on(it.reply, {}, (r, o) => {
                this._trigger(this._replyEventName(o), r)
            }), this.presence = new Ws(this)
        }
        subscribe(e, s = this.timeout) {
            var n, r;
            if (this.joinedOnce) throw "tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance";
            {
                const {
                    config: {
                        broadcast: o,
                        presence: i
                    }
                } = this.params;
                this._onError(c => e && e("CHANNEL_ERROR", c)), this._onClose(() => e && e("CLOSED"));
                const a = {},
                    u = {
                        broadcast: o,
                        presence: i,
                        postgres_changes: (r = (n = this.bindings.postgres_changes) === null || n === void 0 ? void 0 : n.map(c => c.filter)) !== null && r !== void 0 ? r : []
                    };
                this.socket.accessToken && (a.access_token = this.socket.accessToken), this.updateJoinPayload(Object.assign({
                    config: u
                }, a)), this.joinedOnce = !0, this._rejoin(s), this.joinPush.receive("ok", ({
                    postgres_changes: c
                }) => {
                    var d;
                    if (this.socket.accessToken && this.socket.setAuth(this.socket.accessToken), c === void 0) {
                        e && e("SUBSCRIBED");
                        return
                    } else {
                        const f = this.bindings.postgres_changes,
                            h = (d = f == null ? void 0 : f.length) !== null && d !== void 0 ? d : 0,
                            p = [];
                        for (let _ = 0; _ < h; _++) {
                            const v = f[_],
                                {
                                    filter: {
                                        event: m,
                                        schema: T,
                                        table: k,
                                        filter: g
                                    }
                                } = v,
                                C = c && c[_];
                            if (C && C.event === m && C.schema === T && C.table === k && C.filter === g) p.push(Object.assign(Object.assign({}, v), {
                                id: C.id
                            }));
                            else {
                                this.unsubscribe(), e && e("CHANNEL_ERROR", new Error("mismatch between server and client bindings for postgres changes"));
                                return
                            }
                        }
                        this.bindings.postgres_changes = p, e && e("SUBSCRIBED");
                        return
                    }
                }).receive("error", c => {
                    e && e("CHANNEL_ERROR", new Error(JSON.stringify(Object.values(c).join(", ") || "error")))
                }).receive("timeout", () => {
                    e && e("TIMED_OUT")
                })
            }
            return this
        }
        presenceState() {
            return this.presence.state
        }
        track(e, s = {}) {
            return _i(this, void 0, void 0, function*() {
                return yield this.send({
                    type: "presence",
                    event: "track",
                    payload: e
                }, s.timeout || this.timeout)
            })
        }
        untrack(e = {}) {
            return _i(this, void 0, void 0, function*() {
                return yield this.send({
                    type: "presence",
                    event: "untrack"
                }, e)
            })
        }
        on(e, s, n) {
            return this._on(e, s, n)
        }
        send(e, s = {}) {
            return new Promise(n => {
                var r, o, i;
                const a = this._push(e.type, e, s.timeout || this.timeout);
                a.rateLimited && n("rate limited"), e.type === "broadcast" && !(!((i = (o = (r = this.params) === null || r === void 0 ? void 0 : r.config) === null || o === void 0 ? void 0 : o.broadcast) === null || i === void 0) && i.ack) && n("ok"), a.receive("ok", () => n("ok")), a.receive("timeout", () => n("timed out"))
            })
        }
        updateJoinPayload(e) {
            this.joinPush.updatePayload(e)
        }
        unsubscribe(e = this.timeout) {
            this.state = ze.leaving;
            const s = () => {
                this.socket.log("channel", `leave ${this.topic}`), this._trigger(it.close, "leave", this._joinRef())
            };
            return this.rejoinTimer.reset(), this.joinPush.destroy(), new Promise(n => {
                const r = new br(this, it.leave, {}, e);
                r.receive("ok", () => {
                    s(), n("ok")
                }).receive("timeout", () => {
                    s(), n("timed out")
                }).receive("error", () => {
                    n("error")
                }), r.send(), this._canPush() || r.trigger("ok", {})
            })
        }
        _push(e, s, n = this.timeout) {
            if (!this.joinedOnce) throw `tried to push '${e}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
            let r = new br(this, e, s, n);
            return this._canPush() ? r.send() : (r.startTimeout(), this.pushBuffer.push(r)), r
        }
        _onMessage(e, s, n) {
            return s
        }
        _isMember(e) {
            return this.topic === e
        }
        _joinRef() {
            return this.joinPush.ref
        }
        _trigger(e, s, n) {
            var r, o;
            const i = e.toLocaleLowerCase(),
                {
                    close: a,
                    error: u,
                    leave: c,
                    join: d
                } = it;
            if (n && [a, u, c, d].indexOf(i) >= 0 && n !== this._joinRef()) return;
            let h = this._onMessage(i, s, n);
            if (s && !h) throw "channel onMessage callbacks must return the payload, modified or unmodified";
            ["insert", "update", "delete"].includes(i) ? (r = this.bindings.postgres_changes) === null || r === void 0 || r.filter(p => {
                var _, v, m;
                return ((_ = p.filter) === null || _ === void 0 ? void 0 : _.event) === "*" || ((m = (v = p.filter) === null || v === void 0 ? void 0 : v.event) === null || m === void 0 ? void 0 : m.toLocaleLowerCase()) === i
            }).map(p => p.callback(h, n)) : (o = this.bindings[i]) === null || o === void 0 || o.filter(p => {
                var _, v, m, T, k, g;
                if (["broadcast", "presence", "postgres_changes"].includes(i))
                    if ("id" in p) {
                        const C = p.id,
                            x = (_ = p.filter) === null || _ === void 0 ? void 0 : _.event;
                        return C && ((v = s.ids) === null || v === void 0 ? void 0 : v.includes(C)) && (x === "*" || (x == null ? void 0 : x.toLocaleLowerCase()) === ((m = s.data) === null || m === void 0 ? void 0 : m.type.toLocaleLowerCase()))
                    } else {
                        const C = (k = (T = p == null ? void 0 : p.filter) === null || T === void 0 ? void 0 : T.event) === null || k === void 0 ? void 0 : k.toLocaleLowerCase();
                        return C === "*" || C === ((g = s == null ? void 0 : s.event) === null || g === void 0 ? void 0 : g.toLocaleLowerCase())
                    }
                else return p.type.toLocaleLowerCase() === i
            }).map(p => {
                if (typeof h == "object" && "ids" in h) {
                    const _ = h.data,
                        {
                            schema: v,
                            table: m,
                            commit_timestamp: T,
                            type: k,
                            errors: g
                        } = _;
                    h = Object.assign(Object.assign({}, {
                        schema: v,
                        table: m,
                        commit_timestamp: T,
                        eventType: k,
                        new: {},
                        old: {},
                        errors: g
                    }), this._getPayloadRecords(_))
                }
                p.callback(h, n)
            })
        }
        _isClosed() {
            return this.state === ze.closed
        }
        _isJoined() {
            return this.state === ze.joined
        }
        _isJoining() {
            return this.state === ze.joining
        }
        _isLeaving() {
            return this.state === ze.leaving
        }
        _replyEventName(e) {
            return `chan_reply_${e}`
        }
        _on(e, s, n) {
            const r = e.toLocaleLowerCase(),
                o = {
                    type: r,
                    filter: s,
                    callback: n
                };
            return this.bindings[r] ? this.bindings[r].push(o) : this.bindings[r] = [o], this
        }
        _off(e, s) {
            const n = e.toLocaleLowerCase();
            return this.bindings[n] = this.bindings[n].filter(r => {
                var o;
                return !(((o = r.type) === null || o === void 0 ? void 0 : o.toLocaleLowerCase()) === n && Lo.isEqual(r.filter, s))
            }), this
        }
        static isEqual(e, s) {
            if (Object.keys(e).length !== Object.keys(s).length) return !1;
            for (const n in e)
                if (e[n] !== s[n]) return !1;
            return !0
        }
        _rejoinUntilConnected() {
            this.rejoinTimer.scheduleTimeout(), this.socket.isConnected() && this._rejoin()
        }
        _onClose(e) {
            this._on(it.close, {}, e)
        }
        _onError(e) {
            this._on(it.error, {}, s => e(s))
        }
        _canPush() {
            return this.socket.isConnected() && this._isJoined()
        }
        _rejoin(e = this.timeout) {
            this._isLeaving() || (this.socket._leaveOpenTopic(this.topic), this.state = ze.joining, this.joinPush.resend(e))
        }
        _getPayloadRecords(e) {
            const s = {
                new: {},
                old: {}
            };
            return (e.type === "INSERT" || e.type === "UPDATE") && (s.new = pi(e.columns, e.record)), (e.type === "UPDATE" || e.type === "DELETE") && (s.old = pi(e.columns, e.old_record)), s
        }
    }
    var wr = globalThis && globalThis.__awaiter || function(t, e, s, n) {
        function r(o) {
            return o instanceof s ? o : new s(function(i) {
                i(o)
            })
        }
        return new(s || (s = Promise))(function(o, i) {
            function a(d) {
                try {
                    c(n.next(d))
                } catch (f) {
                    i(f)
                }
            }

            function u(d) {
                try {
                    c(n.throw(d))
                } catch (f) {
                    i(f)
                }
            }

            function c(d) {
                d.done ? o(d.value) : r(d.value).then(a, u)
            }
            c((n = n.apply(t, e || [])).next())
        })
    };
    const bg = () => {};
    class wg {
        constructor(e, s) {
            var n;
            this.accessToken = null, this.channels = [], this.endPoint = "", this.headers = cg, this.params = {}, this.timeout = il, this.transport = lg.w3cwebsocket, this.heartbeatIntervalMs = 3e4, this.heartbeatTimer = void 0, this.pendingHeartbeatRef = null, this.ref = 0, this.logger = bg, this.conn = null, this.sendBuffer = [], this.serializer = new hg, this.stateChangeCallbacks = {
                open: [],
                close: [],
                error: [],
                message: []
            }, this.eventsPerSecondLimitMs = 100, this.inThrottle = !1, this.endPoint = `${e}/${Hr.websocket}`, s != null && s.params && (this.params = s.params), s != null && s.headers && (this.headers = Object.assign(Object.assign({}, this.headers), s.headers)), s != null && s.timeout && (this.timeout = s.timeout), s != null && s.logger && (this.logger = s.logger), s != null && s.transport && (this.transport = s.transport), s != null && s.heartbeatIntervalMs && (this.heartbeatIntervalMs = s.heartbeatIntervalMs);
            const r = (n = s == null ? void 0 : s.params) === null || n === void 0 ? void 0 : n.eventsPerSecond;
            r && (this.eventsPerSecondLimitMs = Math.floor(1e3 / r)), this.reconnectAfterMs = s != null && s.reconnectAfterMs ? s.reconnectAfterMs : o => [1e3, 2e3, 5e3, 1e4][o - 1] || 1e4, this.encode = s != null && s.encode ? s.encode : (o, i) => i(JSON.stringify(o)), this.decode = s != null && s.decode ? s.decode : this.serializer.decode.bind(this.serializer), this.reconnectTimer = new al(() => wr(this, void 0, void 0, function*() {
                this.disconnect(), this.connect()
            }), this.reconnectAfterMs)
        }
        connect() {
            this.conn || (this.conn = new this.transport(this._endPointURL(), [], null, this.headers), this.conn && (this.conn.binaryType = "arraybuffer", this.conn.onopen = () => this._onConnOpen(), this.conn.onerror = e => this._onConnError(e), this.conn.onmessage = e => this._onConnMessage(e), this.conn.onclose = e => this._onConnClose(e)))
        }
        disconnect(e, s) {
            this.conn && (this.conn.onclose = function() {}, e ? this.conn.close(e, s != null ? s : "") : this.conn.close(), this.conn = null, this.heartbeatTimer && clearInterval(this.heartbeatTimer), this.reconnectTimer.reset())
        }
        getChannels() {
            return this.channels
        }
        removeChannel(e) {
            return wr(this, void 0, void 0, function*() {
                const s = yield e.unsubscribe();
                return this.channels.length === 0 && this.disconnect(), s
            })
        }
        removeAllChannels() {
            return wr(this, void 0, void 0, function*() {
                const e = yield Promise.all(this.channels.map(s => s.unsubscribe()));
                return this.disconnect(), e
            })
        }
        log(e, s, n) {
            this.logger(e, s, n)
        }
        connectionState() {
            switch (this.conn && this.conn.readyState) {
                case Vs.connecting:
                    return Kt.Connecting;
                case Vs.open:
                    return Kt.Open;
                case Vs.closing:
                    return Kt.Closing;
                default:
                    return Kt.Closed
            }
        }
        isConnected() {
            return this.connectionState() === Kt.Open
        }
        channel(e, s = {
            config: {}
        }) {
            this.isConnected() || this.connect();
            const n = new Lo(`realtime:${e}`, s, this);
            return this.channels.push(n), n
        }
        push(e) {
            const {
                topic: s,
                event: n,
                payload: r,
                ref: o
            } = e;
            let i = () => {
                this.encode(e, a => {
                    var u;
                    (u = this.conn) === null || u === void 0 || u.send(a)
                })
            };
            if (this.log("push", `${s} ${n} (${o})`, r), this.isConnected())
                if (["broadcast", "presence", "postgres_changes"].includes(n)) {
                    if (this._throttle(i)()) return "rate limited"
                } else i();
            else this.sendBuffer.push(i)
        }
        setAuth(e) {
            this.accessToken = e, this.channels.forEach(s => {
                e && s.updateJoinPayload({
                    access_token: e
                }), s.joinedOnce && s._isJoined() && s._push(it.access_token, {
                    access_token: e
                })
            })
        }
        _makeRef() {
            let e = this.ref + 1;
            return e === this.ref ? this.ref = 0 : this.ref = e, this.ref.toString()
        }
        _leaveOpenTopic(e) {
            let s = this.channels.find(n => n.topic === e && (n._isJoined() || n._isJoining()));
            s && (this.log("transport", `leaving duplicate topic "${e}"`), s.unsubscribe())
        }
        _remove(e) {
            this.channels = this.channels.filter(s => s._joinRef() !== e._joinRef())
        }
        _endPointURL() {
            return this._appendParams(this.endPoint, Object.assign({}, this.params, {
                vsn: dg
            }))
        }
        _onConnMessage(e) {
            this.decode(e.data, s => {
                let {
                    topic: n,
                    event: r,
                    payload: o,
                    ref: i
                } = s;
                (i && i === this.pendingHeartbeatRef || r === (o == null ? void 0 : o.type)) && (this.pendingHeartbeatRef = null), this.log("receive", `${o.status||""} ${n} ${r} ${i&&"("+i+")"||""}`, o), this.channels.filter(a => a._isMember(n)).forEach(a => a._trigger(r, o, i)), this.stateChangeCallbacks.message.forEach(a => a(s))
            })
        }
        _onConnOpen() {
            this.log("transport", `connected to ${this._endPointURL()}`), this._flushSendBuffer(), this.reconnectTimer.reset(), this.heartbeatTimer && clearInterval(this.heartbeatTimer), this.heartbeatTimer = setInterval(() => this._sendHeartbeat(), this.heartbeatIntervalMs), this.stateChangeCallbacks.open.forEach(e => e())
        }
        _onConnClose(e) {
            this.log("transport", "close", e), this._triggerChanError(), this.heartbeatTimer && clearInterval(this.heartbeatTimer), this.reconnectTimer.scheduleTimeout(), this.stateChangeCallbacks.close.forEach(s => s(e))
        }
        _onConnError(e) {
            this.log("transport", e.message), this._triggerChanError(), this.stateChangeCallbacks.error.forEach(s => s(e))
        }
        _triggerChanError() {
            this.channels.forEach(e => e._trigger(it.error))
        }
        _appendParams(e, s) {
            if (Object.keys(s).length === 0) return e;
            const n = e.match(/\?/) ? "&" : "?",
                r = new URLSearchParams(s);
            return `${e}${n}${r}`
        }
        _flushSendBuffer() {
            this.isConnected() && this.sendBuffer.length > 0 && (this.sendBuffer.forEach(e => e()), this.sendBuffer = [])
        }
        _sendHeartbeat() {
            var e;
            if (!!this.isConnected()) {
                if (this.pendingHeartbeatRef) {
                    this.pendingHeartbeatRef = null, this.log("transport", "heartbeat timeout. Attempting to re-establish connection"), (e = this.conn) === null || e === void 0 || e.close(fg, "hearbeat timeout");
                    return
                }
                this.pendingHeartbeatRef = this._makeRef(), this.push({
                    topic: "phoenix",
                    event: "heartbeat",
                    payload: {},
                    ref: this.pendingHeartbeatRef
                }), this.setAuth(this.accessToken)
            }
        }
        _throttle(e, s = this.eventsPerSecondLimitMs) {
            return () => this.inThrottle ? !0 : (e(), s > 0 && (this.inThrottle = !0, setTimeout(() => {
                this.inThrottle = !1
            }, s)), !1)
        }
    }
    class No extends Error {
        constructor(e) {
            super(e), this.__isStorageError = !0, this.name = "StorageError"
        }
    }

    function Re(t) {
        return typeof t == "object" && t !== null && "__isStorageError" in t
    }
    class kg extends No {
        constructor(e, s) {
            super(e), this.name = "StorageApiError", this.status = s
        }
        toJSON() {
            return {
                name: this.name,
                message: this.message,
                status: this.status
            }
        }
    }
    class bi extends No {
        constructor(e, s) {
            super(e), this.name = "StorageUnknownError", this.originalError = s
        }
    }
    var ul = globalThis && globalThis.__awaiter || function(t, e, s, n) {
        function r(o) {
            return o instanceof s ? o : new s(function(i) {
                i(o)
            })
        }
        return new(s || (s = Promise))(function(o, i) {
            function a(d) {
                try {
                    c(n.next(d))
                } catch (f) {
                    i(f)
                }
            }

            function u(d) {
                try {
                    c(n.throw(d))
                } catch (f) {
                    i(f)
                }
            }

            function c(d) {
                d.done ? o(d.value) : r(d.value).then(a, u)
            }
            c((n = n.apply(t, e || [])).next())
        })
    };
    const cl = t => {
            let e;
            return t ? e = t : typeof fetch > "u" ? e = (...s) => ul(void 0, void 0, void 0, function*() {
                return yield(yield lr(() => Promise.resolve().then(() => ur), void 0)).fetch(...s)
            }) : e = fetch, (...s) => e(...s)
        },
        Sg = () => ul(void 0, void 0, void 0, function*() {
            return typeof Response > "u" ? (yield lr(() => Promise.resolve().then(() => ur), void 0)).Response : Response
        });
    var $s = globalThis && globalThis.__awaiter || function(t, e, s, n) {
        function r(o) {
            return o instanceof s ? o : new s(function(i) {
                i(o)
            })
        }
        return new(s || (s = Promise))(function(o, i) {
            function a(d) {
                try {
                    c(n.next(d))
                } catch (f) {
                    i(f)
                }
            }

            function u(d) {
                try {
                    c(n.throw(d))
                } catch (f) {
                    i(f)
                }
            }

            function c(d) {
                d.done ? o(d.value) : r(d.value).then(a, u)
            }
            c((n = n.apply(t, e || [])).next())
        })
    };
    const kr = t => t.msg || t.message || t.error_description || t.error || JSON.stringify(t),
        Tg = (t, e) => $s(void 0, void 0, void 0, function*() {
            const s = yield Sg();
            t instanceof s ? t.json().then(n => {
                e(new kg(kr(n), t.status || 500))
            }).catch(n => {
                e(new bi(kr(n), n))
            }) : e(new bi(kr(t), t))
        }),
        xg = (t, e, s, n) => {
            const r = {
                method: t,
                headers: (e == null ? void 0 : e.headers) || {}
            };
            return t === "GET" ? r : (r.headers = Object.assign({
                "Content-Type": "application/json"
            }, e == null ? void 0 : e.headers), r.body = JSON.stringify(n), Object.assign(Object.assign({}, r), s))
        };

    function cr(t, e, s, n, r, o) {
        return $s(this, void 0, void 0, function*() {
            return new Promise((i, a) => {
                t(s, xg(e, n, r, o)).then(u => {
                    if (!u.ok) throw u;
                    return n != null && n.noResolveJson ? u : u.json()
                }).then(u => i(u)).catch(u => Tg(u, a))
            })
        })
    }

    function qr(t, e, s, n) {
        return $s(this, void 0, void 0, function*() {
            return cr(t, "GET", e, s, n)
        })
    }

    function Ft(t, e, s, n, r) {
        return $s(this, void 0, void 0, function*() {
            return cr(t, "POST", e, n, r, s)
        })
    }

    function Ag(t, e, s, n, r) {
        return $s(this, void 0, void 0, function*() {
            return cr(t, "PUT", e, n, r, s)
        })
    }

    function dl(t, e, s, n, r) {
        return $s(this, void 0, void 0, function*() {
            return cr(t, "DELETE", e, n, r, s)
        })
    }
    var Ze = globalThis && globalThis.__awaiter || function(t, e, s, n) {
        function r(o) {
            return o instanceof s ? o : new s(function(i) {
                i(o)
            })
        }
        return new(s || (s = Promise))(function(o, i) {
            function a(d) {
                try {
                    c(n.next(d))
                } catch (f) {
                    i(f)
                }
            }

            function u(d) {
                try {
                    c(n.throw(d))
                } catch (f) {
                    i(f)
                }
            }

            function c(d) {
                d.done ? o(d.value) : r(d.value).then(a, u)
            }
            c((n = n.apply(t, e || [])).next())
        })
    };
    const Cg = {
            limit: 100,
            offset: 0,
            sortBy: {
                column: "name",
                order: "asc"
            }
        },
        wi = {
            cacheControl: "3600",
            contentType: "text/plain;charset=UTF-8",
            upsert: !1
        };
    class $g {
        constructor(e, s = {}, n, r) {
            this.url = e, this.headers = s, this.bucketId = n, this.fetch = cl(r)
        }
        uploadOrUpdate(e, s, n, r) {
            return Ze(this, void 0, void 0, function*() {
                try {
                    let o;
                    const i = Object.assign(Object.assign({}, wi), r),
                        a = Object.assign(Object.assign({}, this.headers), e === "POST" && {
                            "x-upsert": String(i.upsert)
                        });
                    typeof Blob < "u" && n instanceof Blob ? (o = new FormData, o.append("cacheControl", i.cacheControl), o.append("", n)) : typeof FormData < "u" && n instanceof FormData ? (o = n, o.append("cacheControl", i.cacheControl)) : (o = n, a["cache-control"] = `max-age=${i.cacheControl}`, a["content-type"] = i.contentType);
                    const u = this._removeEmptyFolders(s),
                        c = this._getFinalPath(u),
                        d = yield this.fetch(`${this.url}/object/${c}`, Object.assign({
                            method: e,
                            body: o,
                            headers: a
                        }, i != null && i.duplex ? {
                            duplex: i.duplex
                        } : {}));
                    return d.ok ? {
                        data: {
                            path: u
                        },
                        error: null
                    } : {
                        data: null,
                        error: yield d.json()
                    }
                } catch (o) {
                    if (Re(o)) return {
                        data: null,
                        error: o
                    };
                    throw o
                }
            })
        }
        upload(e, s, n) {
            return Ze(this, void 0, void 0, function*() {
                return this.uploadOrUpdate("POST", e, s, n)
            })
        }
        uploadToSignedUrl(e, s, n, r) {
            return Ze(this, void 0, void 0, function*() {
                const o = this._removeEmptyFolders(e),
                    i = this._getFinalPath(o),
                    a = new URL(this.url + `/object/upload/sign/${i}`);
                a.searchParams.set("token", s);
                try {
                    let u;
                    const c = Object.assign({
                            upsert: wi.upsert
                        }, r),
                        d = Object.assign(Object.assign({}, this.headers), {
                            "x-upsert": String(c.upsert)
                        });
                    typeof Blob < "u" && n instanceof Blob ? (u = new FormData, u.append("cacheControl", c.cacheControl), u.append("", n)) : typeof FormData < "u" && n instanceof FormData ? (u = n, u.append("cacheControl", c.cacheControl)) : (u = n, d["cache-control"] = `max-age=${c.cacheControl}`, d["content-type"] = c.contentType);
                    const f = yield this.fetch(a.toString(), {
                        method: "PUT",
                        body: u,
                        headers: d
                    });
                    return f.ok ? {
                        data: {
                            path: o
                        },
                        error: null
                    } : {
                        data: null,
                        error: yield f.json()
                    }
                } catch (u) {
                    if (Re(u)) return {
                        data: null,
                        error: u
                    };
                    throw u
                }
            })
        }
        createSignedUploadUrl(e) {
            return Ze(this, void 0, void 0, function*() {
                try {
                    let s = this._getFinalPath(e);
                    const n = yield Ft(this.fetch, `${this.url}/object/upload/sign/${s}`, {}, {
                        headers: this.headers
                    }), r = new URL(this.url + n.url), o = r.searchParams.get("token");
                    if (!o) throw new No("No token returned by API");
                    return {
                        data: {
                            signedUrl: r.toString(),
                            path: e,
                            token: o
                        },
                        error: null
                    }
                } catch (s) {
                    if (Re(s)) return {
                        data: null,
                        error: s
                    };
                    throw s
                }
            })
        }
        update(e, s, n) {
            return Ze(this, void 0, void 0, function*() {
                return this.uploadOrUpdate("PUT", e, s, n)
            })
        }
        move(e, s) {
            return Ze(this, void 0, void 0, function*() {
                try {
                    return {
                        data: yield Ft(this.fetch, `${this.url}/object/move`, {
                            bucketId: this.bucketId,
                            sourceKey: e,
                            destinationKey: s
                        }, {
                            headers: this.headers
                        }),
                        error: null
                    }
                } catch (n) {
                    if (Re(n)) return {
                        data: null,
                        error: n
                    };
                    throw n
                }
            })
        }
        copy(e, s) {
            return Ze(this, void 0, void 0, function*() {
                try {
                    return {
                        data: {
                            path: (yield Ft(this.fetch, `${this.url}/object/copy`, {
                                bucketId: this.bucketId,
                                sourceKey: e,
                                destinationKey: s
                            }, {
                                headers: this.headers
                            })).Key
                        },
                        error: null
                    }
                } catch (n) {
                    if (Re(n)) return {
                        data: null,
                        error: n
                    };
                    throw n
                }
            })
        }
        createSignedUrl(e, s, n) {
            return Ze(this, void 0, void 0, function*() {
                try {
                    let r = this._getFinalPath(e),
                        o = yield Ft(this.fetch, `${this.url}/object/sign/${r}`, Object.assign({
                            expiresIn: s
                        }, n != null && n.transform ? {
                            transform: n.transform
                        } : {}), {
                            headers: this.headers
                        });
                    const i = n != null && n.download ? `&download=${n.download===!0?"":n.download}` : "";
                    return o = {
                        signedUrl: encodeURI(`${this.url}${o.signedURL}${i}`)
                    }, {
                        data: o,
                        error: null
                    }
                } catch (r) {
                    if (Re(r)) return {
                        data: null,
                        error: r
                    };
                    throw r
                }
            })
        }
        createSignedUrls(e, s, n) {
            return Ze(this, void 0, void 0, function*() {
                try {
                    const r = yield Ft(this.fetch, `${this.url}/object/sign/${this.bucketId}`, {
                        expiresIn: s,
                        paths: e
                    }, {
                        headers: this.headers
                    }), o = n != null && n.download ? `&download=${n.download===!0?"":n.download}` : "";
                    return {
                        data: r.map(i => Object.assign(Object.assign({}, i), {
                            signedUrl: i.signedURL ? encodeURI(`${this.url}${i.signedURL}${o}`) : null
                        })),
                        error: null
                    }
                } catch (r) {
                    if (Re(r)) return {
                        data: null,
                        error: r
                    };
                    throw r
                }
            })
        }
        download(e, s) {
            return Ze(this, void 0, void 0, function*() {
                const r = typeof(s == null ? void 0 : s.transform) < "u" ? "render/image/authenticated" : "object",
                    o = this.transformOptsToQueryString((s == null ? void 0 : s.transform) || {}),
                    i = o ? `?${o}` : "";
                try {
                    const a = this._getFinalPath(e);
                    return {
                        data: yield(yield qr(this.fetch, `${this.url}/${r}/${a}${i}`, {
                            headers: this.headers,
                            noResolveJson: !0
                        })).blob(),
                        error: null
                    }
                } catch (a) {
                    if (Re(a)) return {
                        data: null,
                        error: a
                    };
                    throw a
                }
            })
        }
        getPublicUrl(e, s) {
            const n = this._getFinalPath(e),
                r = [],
                o = s != null && s.download ? `download=${s.download===!0?"":s.download}` : "";
            o !== "" && r.push(o);
            const a = typeof(s == null ? void 0 : s.transform) < "u" ? "render/image" : "object",
                u = this.transformOptsToQueryString((s == null ? void 0 : s.transform) || {});
            u !== "" && r.push(u);
            let c = r.join("&");
            return c !== "" && (c = `?${c}`), {
                data: {
                    publicUrl: encodeURI(`${this.url}/${a}/public/${n}${c}`)
                }
            }
        }
        remove(e) {
            return Ze(this, void 0, void 0, function*() {
                try {
                    return {
                        data: yield dl(this.fetch, `${this.url}/object/${this.bucketId}`, {
                            prefixes: e
                        }, {
                            headers: this.headers
                        }),
                        error: null
                    }
                } catch (s) {
                    if (Re(s)) return {
                        data: null,
                        error: s
                    };
                    throw s
                }
            })
        }
        list(e, s, n) {
            return Ze(this, void 0, void 0, function*() {
                try {
                    const r = Object.assign(Object.assign(Object.assign({}, Cg), s), {
                        prefix: e || ""
                    });
                    return {
                        data: yield Ft(this.fetch, `${this.url}/object/list/${this.bucketId}`, r, {
                            headers: this.headers
                        }, n),
                        error: null
                    }
                } catch (r) {
                    if (Re(r)) return {
                        data: null,
                        error: r
                    };
                    throw r
                }
            })
        }
        _getFinalPath(e) {
            return `${this.bucketId}/${e}`
        }
        _removeEmptyFolders(e) {
            return e.replace(/^\/|\/$/g, "").replace(/\/+/g, "/")
        }
        transformOptsToQueryString(e) {
            const s = [];
            return e.width && s.push(`width=${e.width}`), e.height && s.push(`height=${e.height}`), e.resize && s.push(`resize=${e.resize}`), e.format && s.push(`format=${e.format}`), e.quality && s.push(`quality=${e.quality}`), s.join("&")
        }
    }
    const Eg = "2.5.1",
        Ig = {
            "X-Client-Info": `storage-js/${Eg}`
        };
    var ls = globalThis && globalThis.__awaiter || function(t, e, s, n) {
        function r(o) {
            return o instanceof s ? o : new s(function(i) {
                i(o)
            })
        }
        return new(s || (s = Promise))(function(o, i) {
            function a(d) {
                try {
                    c(n.next(d))
                } catch (f) {
                    i(f)
                }
            }

            function u(d) {
                try {
                    c(n.throw(d))
                } catch (f) {
                    i(f)
                }
            }

            function c(d) {
                d.done ? o(d.value) : r(d.value).then(a, u)
            }
            c((n = n.apply(t, e || [])).next())
        })
    };
    class Og {
        constructor(e, s = {}, n) {
            this.url = e, this.headers = Object.assign(Object.assign({}, Ig), s), this.fetch = cl(n)
        }
        listBuckets() {
            return ls(this, void 0, void 0, function*() {
                try {
                    return {
                        data: yield qr(this.fetch, `${this.url}/bucket`, {
                            headers: this.headers
                        }),
                        error: null
                    }
                } catch (e) {
                    if (Re(e)) return {
                        data: null,
                        error: e
                    };
                    throw e
                }
            })
        }
        getBucket(e) {
            return ls(this, void 0, void 0, function*() {
                try {
                    return {
                        data: yield qr(this.fetch, `${this.url}/bucket/${e}`, {
                            headers: this.headers
                        }),
                        error: null
                    }
                } catch (s) {
                    if (Re(s)) return {
                        data: null,
                        error: s
                    };
                    throw s
                }
            })
        }
        createBucket(e, s = {
            public: !1
        }) {
            return ls(this, void 0, void 0, function*() {
                try {
                    return {
                        data: yield Ft(this.fetch, `${this.url}/bucket`, {
                            id: e,
                            name: e,
                            public: s.public,
                            file_size_limit: s.fileSizeLimit,
                            allowed_mime_types: s.allowedMimeTypes
                        }, {
                            headers: this.headers
                        }),
                        error: null
                    }
                } catch (n) {
                    if (Re(n)) return {
                        data: null,
                        error: n
                    };
                    throw n
                }
            })
        }
        updateBucket(e, s) {
            return ls(this, void 0, void 0, function*() {
                try {
                    return {
                        data: yield Ag(this.fetch, `${this.url}/bucket/${e}`, {
                            id: e,
                            name: e,
                            public: s.public,
                            file_size_limit: s.fileSizeLimit,
                            allowed_mime_types: s.allowedMimeTypes
                        }, {
                            headers: this.headers
                        }),
                        error: null
                    }
                } catch (n) {
                    if (Re(n)) return {
                        data: null,
                        error: n
                    };
                    throw n
                }
            })
        }
        emptyBucket(e) {
            return ls(this, void 0, void 0, function*() {
                try {
                    return {
                        data: yield Ft(this.fetch, `${this.url}/bucket/${e}/empty`, {}, {
                            headers: this.headers
                        }),
                        error: null
                    }
                } catch (s) {
                    if (Re(s)) return {
                        data: null,
                        error: s
                    };
                    throw s
                }
            })
        }
        deleteBucket(e) {
            return ls(this, void 0, void 0, function*() {
                try {
                    return {
                        data: yield dl(this.fetch, `${this.url}/bucket/${e}`, {}, {
                            headers: this.headers
                        }),
                        error: null
                    }
                } catch (s) {
                    if (Re(s)) return {
                        data: null,
                        error: s
                    };
                    throw s
                }
            })
        }
    }
    class Pg extends Og {
        constructor(e, s = {}, n) {
            super(e, s, n)
        }
        from(e) {
            return new $g(this.url, this.headers, e, this.fetch)
        }
    }
    const Dg = "2.21.0",
        Rg = {
            "X-Client-Info": `supabase-js/${Dg}`
        };
    var Mg = globalThis && globalThis.__awaiter || function(t, e, s, n) {
        function r(o) {
            return o instanceof s ? o : new s(function(i) {
                i(o)
            })
        }
        return new(s || (s = Promise))(function(o, i) {
            function a(d) {
                try {
                    c(n.next(d))
                } catch (f) {
                    i(f)
                }
            }

            function u(d) {
                try {
                    c(n.throw(d))
                } catch (f) {
                    i(f)
                }
            }

            function c(d) {
                d.done ? o(d.value) : r(d.value).then(a, u)
            }
            c((n = n.apply(t, e || [])).next())
        })
    };
    const Lg = t => {
            let e;
            return t ? e = t : typeof fetch > "u" ? e = Mo : e = fetch, (...s) => e(...s)
        },
        Ng = () => typeof Headers > "u" ? Xs.exports.Headers : Headers,
        Fg = (t, e, s) => {
            const n = Lg(s),
                r = Ng();
            return (o, i) => Mg(void 0, void 0, void 0, function*() {
                var a;
                const u = (a = yield e()) !== null && a !== void 0 ? a : t;
                let c = new r(i == null ? void 0 : i.headers);
                return c.has("apikey") || c.set("apikey", t), c.has("Authorization") || c.set("Authorization", `Bearer ${u}`), n(o, Object.assign(Object.assign({}, i), {
                    headers: c
                }))
            })
        };

    function jg(t) {
        return t.replace(/\/$/, "")
    }

    function Ug(t, e) {
        const {
            db: s,
            auth: n,
            realtime: r,
            global: o
        } = t, {
            db: i,
            auth: a,
            realtime: u,
            global: c
        } = e;
        return {
            db: Object.assign(Object.assign({}, i), s),
            auth: Object.assign(Object.assign({}, a), n),
            realtime: Object.assign(Object.assign({}, u), r),
            global: Object.assign(Object.assign({}, c), o)
        }
    }
    var is = globalThis && globalThis.__awaiter || function(t, e, s, n) {
        function r(o) {
            return o instanceof s ? o : new s(function(i) {
                i(o)
            })
        }
        return new(s || (s = Promise))(function(o, i) {
            function a(d) {
                try {
                    c(n.next(d))
                } catch (f) {
                    i(f)
                }
            }

            function u(d) {
                try {
                    c(n.throw(d))
                } catch (f) {
                    i(f)
                }
            }

            function c(d) {
                d.done ? o(d.value) : r(d.value).then(a, u)
            }
            c((n = n.apply(t, e || [])).next())
        })
    };

    function Yg(t) {
        return Math.round(Date.now() / 1e3) + t
    }

    function Bg() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
            const e = Math.random() * 16 | 0;
            return (t == "x" ? e : e & 3 | 8).toString(16)
        })
    }
    const Nt = () => typeof document < "u",
        Gt = {
            tested: !1,
            writable: !1
        },
        Sr = () => {
            if (!Nt()) return !1;
            try {
                if (typeof globalThis.localStorage != "object") return !1
            } catch {
                return !1
            }
            if (Gt.tested) return Gt.writable;
            const t = `lswt-${Math.random()}${Math.random()}`;
            try {
                globalThis.localStorage.setItem(t, t), globalThis.localStorage.removeItem(t), Gt.tested = !0, Gt.writable = !0
            } catch {
                Gt.tested = !0, Gt.writable = !1
            }
            return Gt.writable
        };

    function Be(t, e) {
        var s;
        e || (e = ((s = window == null ? void 0 : window.location) === null || s === void 0 ? void 0 : s.href) || ""), t = t.replace(/[\[\]]/g, "\\$&");
        const n = new RegExp("[?&#]" + t + "(=([^&#]*)|&|#|$)"),
            r = n.exec(e);
        return r ? r[2] ? decodeURIComponent(r[2].replace(/\+/g, " ")) : "" : null
    }
    const fl = t => {
            let e;
            return t ? e = t : typeof fetch > "u" ? e = (...s) => is(void 0, void 0, void 0, function*() {
                return yield(yield lr(() => Promise.resolve().then(() => ur), void 0)).fetch(...s)
            }) : e = fetch, (...s) => e(...s)
        },
        Vg = t => typeof t == "object" && t !== null && "status" in t && "ok" in t && "json" in t && typeof t.json == "function",
        Ds = (t, e, s) => is(void 0, void 0, void 0, function*() {
            yield t.setItem(e, JSON.stringify(s))
        }),
        fn = (t, e) => is(void 0, void 0, void 0, function*() {
            const s = yield t.getItem(e);
            if (!s) return null;
            try {
                return JSON.parse(s)
            } catch {
                return s
            }
        }),
        Tr = (t, e) => is(void 0, void 0, void 0, function*() {
            yield t.removeItem(e)
        });

    function Wg(t) {
        const e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        let s = "",
            n, r, o, i, a, u, c, d = 0;
        for (t = t.replace("-", "+").replace("_", "/"); d < t.length;) i = e.indexOf(t.charAt(d++)), a = e.indexOf(t.charAt(d++)), u = e.indexOf(t.charAt(d++)), c = e.indexOf(t.charAt(d++)), n = i << 2 | a >> 4, r = (a & 15) << 4 | u >> 2, o = (u & 3) << 6 | c, s = s + String.fromCharCode(n), u != 64 && r != 0 && (s = s + String.fromCharCode(r)), c != 64 && o != 0 && (s = s + String.fromCharCode(o));
        return s
    }
    class dr {
        constructor() {
            this.promise = new dr.promiseConstructor((e, s) => {
                this.resolve = e, this.reject = s
            })
        }
    }
    dr.promiseConstructor = Promise;

    function ki(t) {
        const e = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}=?$|[a-z0-9_-]{2}(==)?$)$/i,
            s = t.split(".");
        if (s.length !== 3) throw new Error("JWT is not valid: not a JWT structure");
        if (!e.test(s[1])) throw new Error("JWT is not valid: payload is not in base64url format");
        const n = s[1];
        return JSON.parse(Wg(n))
    }

    function zg(t) {
        return new Promise(e => {
            setTimeout(() => e(null), t)
        })
    }

    function Hg(t, e) {
        return new Promise((n, r) => {
            is(this, void 0, void 0, function*() {
                for (let o = 0; o < 1 / 0; o++) try {
                    const i = yield t(o);
                    if (!e(o, null, i)) {
                        n(i);
                        return
                    }
                } catch (i) {
                    if (!e(o, i)) {
                        r(i);
                        return
                    }
                }
            })
        })
    }

    function Gg(t) {
        return ("0" + t.toString(16)).substr(-2)
    }

    function hn() {
        const e = new Uint32Array(56);
        if (typeof crypto > "u") {
            const s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",
                n = s.length;
            let r = "";
            for (let o = 0; o < 56; o++) r += s.charAt(Math.floor(Math.random() * n));
            return r
        }
        return crypto.getRandomValues(e), Array.from(e, Gg).join("")
    }

    function qg(t) {
        return is(this, void 0, void 0, function*() {
            const s = new TextEncoder().encode(t),
                n = yield crypto.subtle.digest("SHA-256", s), r = new Uint8Array(n);
            return Array.from(r).map(o => String.fromCharCode(o)).join("")
        })
    }

    function Jg(t) {
        return btoa(t).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
    }

    function mn(t) {
        return is(this, void 0, void 0, function*() {
            if (typeof crypto > "u") return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."), t;
            const e = yield qg(t);
            return Jg(e)
        })
    }
    class Fo extends Error {
        constructor(e, s) {
            super(e), this.__isAuthError = !0, this.name = "AuthError", this.status = s
        }
    }

    function ce(t) {
        return typeof t == "object" && t !== null && "__isAuthError" in t
    }
    class Kg extends Fo {
        constructor(e, s) {
            super(e, s), this.name = "AuthApiError", this.status = s
        }
        toJSON() {
            return {
                name: this.name,
                message: this.message,
                status: this.status
            }
        }
    }

    function Qg(t) {
        return ce(t) && t.name === "AuthApiError"
    }
    class hl extends Fo {
        constructor(e, s) {
            super(e), this.name = "AuthUnknownError", this.originalError = s
        }
    }
    class ln extends Fo {
        constructor(e, s, n) {
            super(e), this.name = s, this.status = n
        }
        toJSON() {
            return {
                name: this.name,
                message: this.message,
                status: this.status
            }
        }
    }
    class Rs extends ln {
        constructor() {
            super("Auth session missing!", "AuthSessionMissingError", 400)
        }
    }
    class pn extends ln {
        constructor(e) {
            super(e, "AuthInvalidCredentialsError", 400)
        }
    }
    class St extends ln {
        constructor(e, s = null) {
            super(e, "AuthImplicitGrantRedirectError", 500), this.details = null, this.details = s
        }
        toJSON() {
            return {
                name: this.name,
                message: this.message,
                status: this.status,
                details: this.details
            }
        }
    }
    class xr extends ln {
        constructor(e, s = null) {
            super(e, "AuthPKCEGrantCodeExchangeError", 500), this.details = null, this.details = s
        }
        toJSON() {
            return {
                name: this.name,
                message: this.message,
                status: this.status,
                details: this.details
            }
        }
    }
    class Jr extends ln {
        constructor(e, s) {
            super(e, "AuthRetryableFetchError", s)
        }
    }
    var jo = globalThis && globalThis.__awaiter || function(t, e, s, n) {
            function r(o) {
                return o instanceof s ? o : new s(function(i) {
                    i(o)
                })
            }
            return new(s || (s = Promise))(function(o, i) {
                function a(d) {
                    try {
                        c(n.next(d))
                    } catch (f) {
                        i(f)
                    }
                }

                function u(d) {
                    try {
                        c(n.throw(d))
                    } catch (f) {
                        i(f)
                    }
                }

                function c(d) {
                    d.done ? o(d.value) : r(d.value).then(a, u)
                }
                c((n = n.apply(t, e || [])).next())
            })
        },
        Zg = globalThis && globalThis.__rest || function(t, e) {
            var s = {};
            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (s[n] = t[n]);
            if (t != null && typeof Object.getOwnPropertySymbols == "function")
                for (var r = 0, n = Object.getOwnPropertySymbols(t); r < n.length; r++) e.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[r]) && (s[n[r]] = t[n[r]]);
            return s
        };
    const _n = t => t.msg || t.message || t.error_description || t.error || JSON.stringify(t),
        Xg = (t, e) => jo(void 0, void 0, void 0, function*() {
            const s = [502, 503, 504];
            Vg(t) ? s.includes(t.status) ? e(new Jr(_n(t), t.status)) : t.json().then(n => {
                e(new Kg(_n(n), t.status || 500))
            }).catch(n => {
                e(new hl(_n(n), n))
            }) : e(new Jr(_n(t), 0))
        }),
        ev = (t, e, s, n) => {
            const r = {
                method: t,
                headers: (e == null ? void 0 : e.headers) || {}
            };
            return t === "GET" ? r : (r.headers = Object.assign({
                "Content-Type": "application/json;charset=UTF-8"
            }, e == null ? void 0 : e.headers), r.body = JSON.stringify(n), Object.assign(Object.assign({}, r), s))
        };

    function de(t, e, s, n) {
        var r;
        return jo(this, void 0, void 0, function*() {
            const o = Object.assign({}, n == null ? void 0 : n.headers);
            n != null && n.jwt && (o.Authorization = `Bearer ${n.jwt}`);
            const i = (r = n == null ? void 0 : n.query) !== null && r !== void 0 ? r : {};
            n != null && n.redirectTo && (i.redirect_to = n.redirectTo);
            const a = Object.keys(i).length ? "?" + new URLSearchParams(i).toString() : "",
                u = yield tv(t, e, s + a, {
                    headers: o,
                    noResolveJson: n == null ? void 0 : n.noResolveJson
                }, {}, n == null ? void 0 : n.body);
            return n != null && n.xform ? n == null ? void 0 : n.xform(u) : {
                data: Object.assign({}, u),
                error: null
            }
        })
    }

    function tv(t, e, s, n, r, o) {
        return jo(this, void 0, void 0, function*() {
            return new Promise((i, a) => {
                t(s, ev(e, n, r, o)).then(u => {
                    if (!u.ok) throw u;
                    return n != null && n.noResolveJson ? u : u.json()
                }).then(u => i(u)).catch(u => Xg(u, a))
            })
        })
    }

    function Lt(t) {
        var e;
        let s = null;
        ov(t) && (s = Object.assign({}, t), s.expires_at = Yg(t.expires_in));
        const n = (e = t.user) !== null && e !== void 0 ? e : t;
        return {
            data: {
                session: s,
                user: n
            },
            error: null
        }
    }

    function Qt(t) {
        var e;
        return {
            data: {
                user: (e = t.user) !== null && e !== void 0 ? e : t
            },
            error: null
        }
    }

    function sv(t) {
        return {
            data: t,
            error: null
        }
    }

    function nv(t) {
        const {
            action_link: e,
            email_otp: s,
            hashed_token: n,
            redirect_to: r,
            verification_type: o
        } = t, i = Zg(t, ["action_link", "email_otp", "hashed_token", "redirect_to", "verification_type"]), a = {
            action_link: e,
            email_otp: s,
            hashed_token: n,
            redirect_to: r,
            verification_type: o
        }, u = Object.assign({}, i);
        return {
            data: {
                properties: a,
                user: u
            },
            error: null
        }
    }

    function rv(t) {
        return t
    }

    function ov(t) {
        return t.access_token && t.refresh_token && t.expires_in
    }
    var pt = globalThis && globalThis.__awaiter || function(t, e, s, n) {
            function r(o) {
                return o instanceof s ? o : new s(function(i) {
                    i(o)
                })
            }
            return new(s || (s = Promise))(function(o, i) {
                function a(d) {
                    try {
                        c(n.next(d))
                    } catch (f) {
                        i(f)
                    }
                }

                function u(d) {
                    try {
                        c(n.throw(d))
                    } catch (f) {
                        i(f)
                    }
                }

                function c(d) {
                    d.done ? o(d.value) : r(d.value).then(a, u)
                }
                c((n = n.apply(t, e || [])).next())
            })
        },
        iv = globalThis && globalThis.__rest || function(t, e) {
            var s = {};
            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (s[n] = t[n]);
            if (t != null && typeof Object.getOwnPropertySymbols == "function")
                for (var r = 0, n = Object.getOwnPropertySymbols(t); r < n.length; r++) e.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[r]) && (s[n[r]] = t[n[r]]);
            return s
        };
    class av {
        constructor({
            url: e = "",
            headers: s = {},
            fetch: n
        }) {
            this.url = e, this.headers = s, this.fetch = fl(n), this.mfa = {
                listFactors: this._listFactors.bind(this),
                deleteFactor: this._deleteFactor.bind(this)
            }
        }
        signOut(e) {
            return pt(this, void 0, void 0, function*() {
                try {
                    return yield de(this.fetch, "POST", `${this.url}/logout`, {
                        headers: this.headers,
                        jwt: e,
                        noResolveJson: !0
                    }), {
                        data: null,
                        error: null
                    }
                } catch (s) {
                    if (ce(s)) return {
                        data: null,
                        error: s
                    };
                    throw s
                }
            })
        }
        inviteUserByEmail(e, s = {}) {
            return pt(this, void 0, void 0, function*() {
                try {
                    return yield de(this.fetch, "POST", `${this.url}/invite`, {
                        body: {
                            email: e,
                            data: s.data
                        },
                        headers: this.headers,
                        redirectTo: s.redirectTo,
                        xform: Qt
                    })
                } catch (n) {
                    if (ce(n)) return {
                        data: {
                            user: null
                        },
                        error: n
                    };
                    throw n
                }
            })
        }
        generateLink(e) {
            return pt(this, void 0, void 0, function*() {
                try {
                    const {
                        options: s
                    } = e, n = iv(e, ["options"]), r = Object.assign(Object.assign({}, n), s);
                    return "newEmail" in n && (r.new_email = n == null ? void 0 : n.newEmail, delete r.newEmail), yield de(this.fetch, "POST", `${this.url}/admin/generate_link`, {
                        body: r,
                        headers: this.headers,
                        xform: nv,
                        redirectTo: s == null ? void 0 : s.redirectTo
                    })
                } catch (s) {
                    if (ce(s)) return {
                        data: {
                            properties: null,
                            user: null
                        },
                        error: s
                    };
                    throw s
                }
            })
        }
        createUser(e) {
            return pt(this, void 0, void 0, function*() {
                try {
                    return yield de(this.fetch, "POST", `${this.url}/admin/users`, {
                        body: e,
                        headers: this.headers,
                        xform: Qt
                    })
                } catch (s) {
                    if (ce(s)) return {
                        data: {
                            user: null
                        },
                        error: s
                    };
                    throw s
                }
            })
        }
        listUsers(e) {
            var s, n, r, o, i, a, u;
            return pt(this, void 0, void 0, function*() {
                try {
                    const c = {
                            nextPage: null,
                            lastPage: 0,
                            total: 0
                        },
                        d = yield de(this.fetch, "GET", `${this.url}/admin/users`, {
                            headers: this.headers,
                            noResolveJson: !0,
                            query: {
                                page: (n = (s = e == null ? void 0 : e.page) === null || s === void 0 ? void 0 : s.toString()) !== null && n !== void 0 ? n : "",
                                per_page: (o = (r = e == null ? void 0 : e.perPage) === null || r === void 0 ? void 0 : r.toString()) !== null && o !== void 0 ? o : ""
                            },
                            xform: rv
                        });
                    if (d.error) throw d.error;
                    const f = yield d.json(), h = (i = d.headers.get("x-total-count")) !== null && i !== void 0 ? i : 0, p = (u = (a = d.headers.get("link")) === null || a === void 0 ? void 0 : a.split(",")) !== null && u !== void 0 ? u : [];
                    return p.length > 0 && (p.forEach(_ => {
                        const v = parseInt(_.split(";")[0].split("=")[1].substring(0, 1)),
                            m = JSON.parse(_.split(";")[1].split("=")[1]);
                        c[`${m}Page`] = v
                    }), c.total = parseInt(h)), {
                        data: Object.assign(Object.assign({}, f), c),
                        error: null
                    }
                } catch (c) {
                    if (ce(c)) return {
                        data: {
                            users: []
                        },
                        error: c
                    };
                    throw c
                }
            })
        }
        getUserById(e) {
            return pt(this, void 0, void 0, function*() {
                try {
                    return yield de(this.fetch, "GET", `${this.url}/admin/users/${e}`, {
                        headers: this.headers,
                        xform: Qt
                    })
                } catch (s) {
                    if (ce(s)) return {
                        data: {
                            user: null
                        },
                        error: s
                    };
                    throw s
                }
            })
        }
        updateUserById(e, s) {
            return pt(this, void 0, void 0, function*() {
                try {
                    return yield de(this.fetch, "PUT", `${this.url}/admin/users/${e}`, {
                        body: s,
                        headers: this.headers,
                        xform: Qt
                    })
                } catch (n) {
                    if (ce(n)) return {
                        data: {
                            user: null
                        },
                        error: n
                    };
                    throw n
                }
            })
        }
        deleteUser(e, s = !1) {
            return pt(this, void 0, void 0, function*() {
                try {
                    return yield de(this.fetch, "DELETE", `${this.url}/admin/users/${e}`, {
                        headers: this.headers,
                        body: {
                            should_soft_delete: s
                        },
                        xform: Qt
                    })
                } catch (n) {
                    if (ce(n)) return {
                        data: {
                            user: null
                        },
                        error: n
                    };
                    throw n
                }
            })
        }
        _listFactors(e) {
            return pt(this, void 0, void 0, function*() {
                try {
                    const {
                        data: s,
                        error: n
                    } = yield de(this.fetch, "GET", `${this.url}/admin/users/${e.userId}/factors`, {
                        headers: this.headers,
                        xform: r => ({
                            data: {
                                factors: r
                            },
                            error: null
                        })
                    });
                    return {
                        data: s,
                        error: n
                    }
                } catch (s) {
                    if (ce(s)) return {
                        data: null,
                        error: s
                    };
                    throw s
                }
            })
        }
        _deleteFactor(e) {
            return pt(this, void 0, void 0, function*() {
                try {
                    return {
                        data: yield de(this.fetch, "DELETE", `${this.url}/admin/users/${e.userId}/factors/${e.id}`, {
                            headers: this.headers
                        }),
                        error: null
                    }
                } catch (s) {
                    if (ce(s)) return {
                        data: null,
                        error: s
                    };
                    throw s
                }
            })
        }
    }
    const lv = "2.25.0",
        uv = "http://localhost:9999",
        cv = "supabase.auth.token",
        dv = {
            "X-Client-Info": `gotrue-js/${lv}`
        },
        fv = 10,
        hv = {
            getItem: t => Sr() ? globalThis.localStorage.getItem(t) : null,
            setItem: (t, e) => {
                !Sr() || globalThis.localStorage.setItem(t, e)
            },
            removeItem: t => {
                !Sr() || globalThis.localStorage.removeItem(t)
            }
        };

    function mv() {
        if (typeof globalThis != "object") try {
            Object.defineProperty(Object.prototype, "__magic__", {
                get: function() {
                    return this
                },
                configurable: !0
            }), __magic__.globalThis = __magic__, delete Object.prototype.__magic__
        } catch {
            typeof self < "u" && (self.globalThis = self)
        }
    }
    var ee = globalThis && globalThis.__awaiter || function(t, e, s, n) {
        function r(o) {
            return o instanceof s ? o : new s(function(i) {
                i(o)
            })
        }
        return new(s || (s = Promise))(function(o, i) {
            function a(d) {
                try {
                    c(n.next(d))
                } catch (f) {
                    i(f)
                }
            }

            function u(d) {
                try {
                    c(n.throw(d))
                } catch (f) {
                    i(f)
                }
            }

            function c(d) {
                d.done ? o(d.value) : r(d.value).then(a, u)
            }
            c((n = n.apply(t, e || [])).next())
        })
    };
    mv();
    const pv = {
            url: uv,
            storageKey: cv,
            autoRefreshToken: !0,
            persistSession: !0,
            detectSessionInUrl: !0,
            headers: dv,
            flowType: "implicit"
        },
        Ar = 30 * 1e3,
        _v = 3;
    class gv {
        constructor(e) {
            var s;
            this.stateChangeEmitters = new Map, this.autoRefreshTicker = null, this.visibilityChangedCallback = null, this.refreshingDeferred = null, this.initializePromise = null, this.detectSessionInUrl = !0, this.broadcastChannel = null;
            const n = Object.assign(Object.assign({}, pv), e);
            if (this.inMemorySession = null, this.storageKey = n.storageKey, this.autoRefreshToken = n.autoRefreshToken, this.persistSession = n.persistSession, this.storage = n.storage || hv, this.admin = new av({
                    url: n.url,
                    headers: n.headers,
                    fetch: n.fetch
                }), this.url = n.url, this.headers = n.headers, this.fetch = fl(n.fetch), this.detectSessionInUrl = n.detectSessionInUrl, this.flowType = n.flowType, this.mfa = {
                    verify: this._verify.bind(this),
                    enroll: this._enroll.bind(this),
                    unenroll: this._unenroll.bind(this),
                    challenge: this._challenge.bind(this),
                    listFactors: this._listFactors.bind(this),
                    challengeAndVerify: this._challengeAndVerify.bind(this),
                    getAuthenticatorAssuranceLevel: this._getAuthenticatorAssuranceLevel.bind(this)
                }, Nt() && globalThis.BroadcastChannel && this.persistSession && this.storageKey) {
                try {
                    this.broadcastChannel = new globalThis.BroadcastChannel(this.storageKey)
                } catch (r) {
                    console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available", r)
                }(s = this.broadcastChannel) === null || s === void 0 || s.addEventListener("message", r => {
                    this._notifyAllSubscribers(r.data.event, r.data.session, !1)
                })
            }
            this.initialize()
        }
        initialize() {
            return this.initializePromise || (this.initializePromise = this._initialize()), this.initializePromise
        }
        _initialize() {
            return ee(this, void 0, void 0, function*() {
                if (this.initializePromise) return this.initializePromise;
                try {
                    const e = yield this._isPKCEFlow();
                    if (this.detectSessionInUrl && this._isImplicitGrantFlow() || e) {
                        const {
                            data: s,
                            error: n
                        } = yield this._getSessionFromUrl(e);
                        if (n) return yield this._removeSession(), {
                            error: n
                        };
                        const {
                            session: r,
                            redirectType: o
                        } = s;
                        return yield this._saveSession(r), setTimeout(() => {
                            o === "recovery" ? this._notifyAllSubscribers("PASSWORD_RECOVERY", r) : this._notifyAllSubscribers("SIGNED_IN", r)
                        }, 0), {
                            error: null
                        }
                    }
                    return yield this._recoverAndRefresh(), {
                        error: null
                    }
                } catch (e) {
                    return ce(e) ? {
                        error: e
                    } : {
                        error: new hl("Unexpected error during initialization", e)
                    }
                } finally {
                    yield this._handleVisibilityChange()
                }
            })
        }
        signUp(e) {
            var s, n, r;
            return ee(this, void 0, void 0, function*() {
                try {
                    yield this._removeSession();
                    let o;
                    if ("email" in e) {
                        const {
                            email: d,
                            password: f,
                            options: h
                        } = e;
                        let p = null,
                            _ = null;
                        if (this.flowType === "pkce") {
                            const v = hn();
                            yield Ds(this.storage, `${this.storageKey}-code-verifier`, v), p = yield mn(v), _ = v === p ? "plain" : "s256"
                        }
                        o = yield de(this.fetch, "POST", `${this.url}/signup`, {
                            headers: this.headers,
                            redirectTo: h == null ? void 0 : h.emailRedirectTo,
                            body: {
                                email: d,
                                password: f,
                                data: (s = h == null ? void 0 : h.data) !== null && s !== void 0 ? s : {},
                                gotrue_meta_security: {
                                    captcha_token: h == null ? void 0 : h.captchaToken
                                },
                                code_challenge: p,
                                code_challenge_method: _
                            },
                            xform: Lt
                        })
                    } else if ("phone" in e) {
                        const {
                            phone: d,
                            password: f,
                            options: h
                        } = e;
                        o = yield de(this.fetch, "POST", `${this.url}/signup`, {
                            headers: this.headers,
                            body: {
                                phone: d,
                                password: f,
                                data: (n = h == null ? void 0 : h.data) !== null && n !== void 0 ? n : {},
                                channel: (r = h == null ? void 0 : h.channel) !== null && r !== void 0 ? r : "sms",
                                gotrue_meta_security: {
                                    captcha_token: h == null ? void 0 : h.captchaToken
                                }
                            },
                            xform: Lt
                        })
                    } else throw new pn("You must provide either an email or phone number and a password");
                    const {
                        data: i,
                        error: a
                    } = o;
                    if (a || !i) return {
                        data: {
                            user: null,
                            session: null
                        },
                        error: a
                    };
                    const u = i.session,
                        c = i.user;
                    return i.session && (yield this._saveSession(i.session), this._notifyAllSubscribers("SIGNED_IN", u)), {
                        data: {
                            user: c,
                            session: u
                        },
                        error: null
                    }
                } catch (o) {
                    if (ce(o)) return {
                        data: {
                            user: null,
                            session: null
                        },
                        error: o
                    };
                    throw o
                }
            })
        }
        signInWithPassword(e) {
            return ee(this, void 0, void 0, function*() {
                try {
                    yield this._removeSession();
                    let s;
                    if ("email" in e) {
                        const {
                            email: o,
                            password: i,
                            options: a
                        } = e;
                        s = yield de(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
                            headers: this.headers,
                            body: {
                                email: o,
                                password: i,
                                gotrue_meta_security: {
                                    captcha_token: a == null ? void 0 : a.captchaToken
                                }
                            },
                            xform: Lt
                        })
                    } else if ("phone" in e) {
                        const {
                            phone: o,
                            password: i,
                            options: a
                        } = e;
                        s = yield de(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
                            headers: this.headers,
                            body: {
                                phone: o,
                                password: i,
                                gotrue_meta_security: {
                                    captcha_token: a == null ? void 0 : a.captchaToken
                                }
                            },
                            xform: Lt
                        })
                    } else throw new pn("You must provide either an email or phone number and a password");
                    const {
                        data: n,
                        error: r
                    } = s;
                    return r || !n ? {
                        data: {
                            user: null,
                            session: null
                        },
                        error: r
                    } : (n.session && (yield this._saveSession(n.session), this._notifyAllSubscribers("SIGNED_IN", n.session)), {
                        data: n,
                        error: r
                    })
                } catch (s) {
                    if (ce(s)) return {
                        data: {
                            user: null,
                            session: null
                        },
                        error: s
                    };
                    throw s
                }
            })
        }
        signInWithOAuth(e) {
            var s, n, r, o;
            return ee(this, void 0, void 0, function*() {
                return yield this._removeSession(), yield this._handleProviderSignIn(e.provider, {
                    redirectTo: (s = e.options) === null || s === void 0 ? void 0 : s.redirectTo,
                    scopes: (n = e.options) === null || n === void 0 ? void 0 : n.scopes,
                    queryParams: (r = e.options) === null || r === void 0 ? void 0 : r.queryParams,
                    skipBrowserRedirect: (o = e.options) === null || o === void 0 ? void 0 : o.skipBrowserRedirect
                })
            })
        }
        exchangeCodeForSession(e) {
            return ee(this, void 0, void 0, function*() {
                const s = yield fn(this.storage, `${this.storageKey}-code-verifier`), {
                    data: n,
                    error: r
                } = yield de(this.fetch, "POST", `${this.url}/token?grant_type=pkce`, {
                    headers: this.headers,
                    body: {
                        auth_code: e,
                        code_verifier: s
                    },
                    xform: Lt
                });
                return yield Tr(this.storage, `${this.storageKey}-code-verifier`), r || !n ? {
                    data: {
                        user: null,
                        session: null
                    },
                    error: r
                } : (n.session && (yield this._saveSession(n.session), this._notifyAllSubscribers("SIGNED_IN", n.session)), {
                    data: n,
                    error: r
                })
            })
        }
        signInWithIdToken(e) {
            return ee(this, void 0, void 0, function*() {
                yield this._removeSession();
                try {
                    const {
                        options: s,
                        provider: n,
                        token: r,
                        nonce: o
                    } = e, i = yield de(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
                        headers: this.headers,
                        body: {
                            provider: n,
                            id_token: r,
                            nonce: o,
                            gotrue_meta_security: {
                                captcha_token: s == null ? void 0 : s.captchaToken
                            }
                        },
                        xform: Lt
                    }), {
                        data: a,
                        error: u
                    } = i;
                    return u || !a ? {
                        data: {
                            user: null,
                            session: null
                        },
                        error: u
                    } : (a.session && (yield this._saveSession(a.session), this._notifyAllSubscribers("SIGNED_IN", a.session)), {
                        data: a,
                        error: u
                    })
                } catch (s) {
                    if (ce(s)) return {
                        data: {
                            user: null,
                            session: null
                        },
                        error: s
                    };
                    throw s
                }
            })
        }
        signInWithOtp(e) {
            var s, n, r, o, i;
            return ee(this, void 0, void 0, function*() {
                try {
                    if (yield this._removeSession(), "email" in e) {
                        const {
                            email: a,
                            options: u
                        } = e;
                        let c = null,
                            d = null;
                        if (this.flowType === "pkce") {
                            const h = hn();
                            yield Ds(this.storage, `${this.storageKey}-code-verifier`, h), c = yield mn(h), d = h === c ? "plain" : "s256"
                        }
                        const {
                            error: f
                        } = yield de(this.fetch, "POST", `${this.url}/otp`, {
                            headers: this.headers,
                            body: {
                                email: a,
                                data: (s = u == null ? void 0 : u.data) !== null && s !== void 0 ? s : {},
                                create_user: (n = u == null ? void 0 : u.shouldCreateUser) !== null && n !== void 0 ? n : !0,
                                gotrue_meta_security: {
                                    captcha_token: u == null ? void 0 : u.captchaToken
                                },
                                code_challenge: c,
                                code_challenge_method: d
                            },
                            redirectTo: u == null ? void 0 : u.emailRedirectTo
                        });
                        return {
                            data: {
                                user: null,
                                session: null
                            },
                            error: f
                        }
                    }
                    if ("phone" in e) {
                        const {
                            phone: a,
                            options: u
                        } = e, {
                            error: c
                        } = yield de(this.fetch, "POST", `${this.url}/otp`, {
                            headers: this.headers,
                            body: {
                                phone: a,
                                data: (r = u == null ? void 0 : u.data) !== null && r !== void 0 ? r : {},
                                create_user: (o = u == null ? void 0 : u.shouldCreateUser) !== null && o !== void 0 ? o : !0,
                                gotrue_meta_security: {
                                    captcha_token: u == null ? void 0 : u.captchaToken
                                },
                                channel: (i = u == null ? void 0 : u.channel) !== null && i !== void 0 ? i : "sms"
                            }
                        });
                        return {
                            data: {
                                user: null,
                                session: null
                            },
                            error: c
                        }
                    }
                    throw new pn("You must provide either an email or phone number.")
                } catch (a) {
                    if (ce(a)) return {
                        data: {
                            user: null,
                            session: null
                        },
                        error: a
                    };
                    throw a
                }
            })
        }
        verifyOtp(e) {
            var s, n;
            return ee(this, void 0, void 0, function*() {
                try {
                    yield this._removeSession();
                    const {
                        data: r,
                        error: o
                    } = yield de(this.fetch, "POST", `${this.url}/verify`, {
                        headers: this.headers,
                        body: Object.assign(Object.assign({}, e), {
                            gotrue_meta_security: {
                                captcha_token: (s = e.options) === null || s === void 0 ? void 0 : s.captchaToken
                            }
                        }),
                        redirectTo: (n = e.options) === null || n === void 0 ? void 0 : n.redirectTo,
                        xform: Lt
                    });
                    if (o) throw o;
                    if (!r) throw new Error("An error occurred on token verification.");
                    const i = r.session,
                        a = r.user;
                    return i != null && i.access_token && (yield this._saveSession(i), this._notifyAllSubscribers("SIGNED_IN", i)), {
                        data: {
                            user: a,
                            session: i
                        },
                        error: null
                    }
                } catch (r) {
                    if (ce(r)) return {
                        data: {
                            user: null,
                            session: null
                        },
                        error: r
                    };
                    throw r
                }
            })
        }
        signInWithSSO(e) {
            var s, n, r;
            return ee(this, void 0, void 0, function*() {
                try {
                    return yield this._removeSession(), yield de(this.fetch, "POST", `${this.url}/sso`, {
                        body: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, "providerId" in e ? {
                            provider_id: e.providerId
                        } : null), "domain" in e ? {
                            domain: e.domain
                        } : null), {
                            redirect_to: (n = (s = e.options) === null || s === void 0 ? void 0 : s.redirectTo) !== null && n !== void 0 ? n : void 0
                        }), !((r = e == null ? void 0 : e.options) === null || r === void 0) && r.captchaToken ? {
                            gotrue_meta_security: {
                                captcha_token: e.options.captchaToken
                            }
                        } : null), {
                            skip_http_redirect: !0
                        }),
                        headers: this.headers,
                        xform: sv
                    })
                } catch (o) {
                    if (ce(o)) return {
                        data: null,
                        error: o
                    };
                    throw o
                }
            })
        }
        resend(e) {
            return ee(this, void 0, void 0, function*() {
                try {
                    yield this._removeSession();
                    const s = `${this.url}/resend`;
                    if ("email" in e) {
                        const {
                            email: n,
                            type: r,
                            options: o
                        } = e, {
                            error: i
                        } = yield de(this.fetch, "POST", s, {
                            headers: this.headers,
                            body: {
                                email: n,
                                type: r,
                                gotrue_meta_security: {
                                    captcha_token: o == null ? void 0 : o.captchaToken
                                }
                            }
                        });
                        return {
                            data: {
                                user: null,
                                session: null
                            },
                            error: i
                        }
                    } else if ("phone" in e) {
                        const {
                            phone: n,
                            type: r,
                            options: o
                        } = e, {
                            error: i
                        } = yield de(this.fetch, "POST", s, {
                            headers: this.headers,
                            body: {
                                phone: n,
                                type: r,
                                gotrue_meta_security: {
                                    captcha_token: o == null ? void 0 : o.captchaToken
                                }
                            }
                        });
                        return {
                            data: {
                                user: null,
                                session: null
                            },
                            error: i
                        }
                    }
                    throw new pn("You must provide either an email or phone number and a type")
                } catch (s) {
                    if (ce(s)) return {
                        data: {
                            user: null,
                            session: null
                        },
                        error: s
                    };
                    throw s
                }
            })
        }
        getSession() {
            return ee(this, void 0, void 0, function*() {
                yield this.initializePromise;
                let e = null;
                if (this.persistSession) {
                    const o = yield fn(this.storage, this.storageKey);
                    o !== null && (this._isValidSession(o) ? e = o : yield this._removeSession())
                } else e = this.inMemorySession;
                if (!e) return {
                    data: {
                        session: null
                    },
                    error: null
                };
                if (!(e.expires_at ? e.expires_at <= Date.now() / 1e3 : !1)) return {
                    data: {
                        session: e
                    },
                    error: null
                };
                const {
                    session: n,
                    error: r
                } = yield this._callRefreshToken(e.refresh_token);
                return r ? {
                    data: {
                        session: null
                    },
                    error: r
                } : {
                    data: {
                        session: n
                    },
                    error: null
                }
            })
        }
        getUser(e) {
            var s, n;
            return ee(this, void 0, void 0, function*() {
                try {
                    if (!e) {
                        const {
                            data: r,
                            error: o
                        } = yield this.getSession();
                        if (o) throw o;
                        e = (n = (s = r.session) === null || s === void 0 ? void 0 : s.access_token) !== null && n !== void 0 ? n : void 0
                    }
                    return yield de(this.fetch, "GET", `${this.url}/user`, {
                        headers: this.headers,
                        jwt: e,
                        xform: Qt
                    })
                } catch (r) {
                    if (ce(r)) return {
                        data: {
                            user: null
                        },
                        error: r
                    };
                    throw r
                }
            })
        }
        updateUser(e, s = {}) {
            return ee(this, void 0, void 0, function*() {
                try {
                    const {
                        data: n,
                        error: r
                    } = yield this.getSession();
                    if (r) throw r;
                    if (!n.session) throw new Rs;
                    const o = n.session,
                        {
                            data: i,
                            error: a
                        } = yield de(this.fetch, "PUT", `${this.url}/user`, {
                            headers: this.headers,
                            redirectTo: s == null ? void 0 : s.emailRedirectTo,
                            body: e,
                            jwt: o.access_token,
                            xform: Qt
                        });
                    if (a) throw a;
                    return o.user = i.user, yield this._saveSession(o), this._notifyAllSubscribers("USER_UPDATED", o), {
                        data: {
                            user: o.user
                        },
                        error: null
                    }
                } catch (n) {
                    if (ce(n)) return {
                        data: {
                            user: null
                        },
                        error: n
                    };
                    throw n
                }
            })
        }
        _decodeJWT(e) {
            return ki(e)
        }
        setSession(e) {
            return ee(this, void 0, void 0, function*() {
                try {
                    if (!e.access_token || !e.refresh_token) throw new Rs;
                    const s = Date.now() / 1e3;
                    let n = s,
                        r = !0,
                        o = null;
                    const i = ki(e.access_token);
                    if (i.exp && (n = i.exp, r = n <= s), r) {
                        const {
                            session: a,
                            error: u
                        } = yield this._callRefreshToken(e.refresh_token);
                        if (u) return {
                            data: {
                                user: null,
                                session: null
                            },
                            error: u
                        };
                        if (!a) return {
                            data: {
                                user: null,
                                session: null
                            },
                            error: null
                        };
                        o = a
                    } else {
                        const {
                            data: a,
                            error: u
                        } = yield this.getUser(e.access_token);
                        if (u) throw u;
                        o = {
                            access_token: e.access_token,
                            refresh_token: e.refresh_token,
                            user: a.user,
                            token_type: "bearer",
                            expires_in: n - s,
                            expires_at: n
                        }, yield this._saveSession(o), this._notifyAllSubscribers("SIGNED_IN", o)
                    }
                    return {
                        data: {
                            user: o.user,
                            session: o
                        },
                        error: null
                    }
                } catch (s) {
                    if (ce(s)) return {
                        data: {
                            session: null,
                            user: null
                        },
                        error: s
                    };
                    throw s
                }
            })
        }
        refreshSession(e) {
            var s;
            return ee(this, void 0, void 0, function*() {
                try {
                    if (!e) {
                        const {
                            data: o,
                            error: i
                        } = yield this.getSession();
                        if (i) throw i;
                        e = (s = o.session) !== null && s !== void 0 ? s : void 0
                    }
                    if (!(e != null && e.refresh_token)) throw new Rs;
                    const {
                        session: n,
                        error: r
                    } = yield this._callRefreshToken(e.refresh_token);
                    return r ? {
                        data: {
                            user: null,
                            session: null
                        },
                        error: r
                    } : n ? {
                        data: {
                            user: n.user,
                            session: n
                        },
                        error: null
                    } : {
                        data: {
                            user: null,
                            session: null
                        },
                        error: null
                    }
                } catch (n) {
                    if (ce(n)) return {
                        data: {
                            user: null,
                            session: null
                        },
                        error: n
                    };
                    throw n
                }
            })
        }
        _getSessionFromUrl(e) {
            return ee(this, void 0, void 0, function*() {
                try {
                    if (!Nt()) throw new St("No browser detected.");
                    if (this.flowType === "implicit" && !this._isImplicitGrantFlow()) throw new St("Not a valid implicit grant flow url.");
                    if (this.flowType == "pkce" && !e) throw new xr("Not a valid PKCE flow url.");
                    if (e) {
                        const m = Be("code");
                        if (!m) throw new xr("No code detected.");
                        const {
                            data: T,
                            error: k
                        } = yield this.exchangeCodeForSession(m);
                        if (k) throw k;
                        if (!T.session) throw new xr("No session detected.");
                        return {
                            data: {
                                session: T.session,
                                redirectType: null
                            },
                            error: null
                        }
                    }
                    const s = Be("error_description");
                    if (s) {
                        const m = Be("error_code");
                        if (!m) throw new St("No error_code detected.");
                        const T = Be("error");
                        throw T ? new St(s, {
                            error: T,
                            code: m
                        }) : new St("No error detected.")
                    }
                    const n = Be("provider_token"),
                        r = Be("provider_refresh_token"),
                        o = Be("access_token");
                    if (!o) throw new St("No access_token detected.");
                    const i = Be("expires_in");
                    if (!i) throw new St("No expires_in detected.");
                    const a = Be("refresh_token");
                    if (!a) throw new St("No refresh_token detected.");
                    const u = Be("token_type");
                    if (!u) throw new St("No token_type detected.");
                    const d = Math.round(Date.now() / 1e3) + parseInt(i),
                        {
                            data: f,
                            error: h
                        } = yield this.getUser(o);
                    if (h) throw h;
                    const p = f.user,
                        _ = {
                            provider_token: n,
                            provider_refresh_token: r,
                            access_token: o,
                            expires_in: parseInt(i),
                            expires_at: d,
                            refresh_token: a,
                            token_type: u,
                            user: p
                        },
                        v = Be("type");
                    return window.location.hash = "", {
                        data: {
                            session: _,
                            redirectType: v
                        },
                        error: null
                    }
                } catch (s) {
                    if (ce(s)) return {
                        data: {
                            session: null,
                            redirectType: null
                        },
                        error: s
                    };
                    throw s
                }
            })
        }
        _isImplicitGrantFlow() {
            return Nt() && (Boolean(Be("access_token")) || Boolean(Be("error_description")))
        }
        _isPKCEFlow() {
            return ee(this, void 0, void 0, function*() {
                const e = yield fn(this.storage, `${this.storageKey}-code-verifier`);
                return Nt() && Boolean(Be("code")) && Boolean(e)
            })
        }
        signOut() {
            var e;
            return ee(this, void 0, void 0, function*() {
                const {
                    data: s,
                    error: n
                } = yield this.getSession();
                if (n) return {
                    error: n
                };
                const r = (e = s.session) === null || e === void 0 ? void 0 : e.access_token;
                if (r) {
                    const {
                        error: o
                    } = yield this.admin.signOut(r);
                    if (o && !(Qg(o) && (o.status === 404 || o.status === 401))) return {
                        error: o
                    }
                }
                return yield this._removeSession(), yield Tr(this.storage, `${this.storageKey}-code-verifier`), this._notifyAllSubscribers("SIGNED_OUT", null), {
                    error: null
                }
            })
        }
        onAuthStateChange(e) {
            const s = Bg(),
                n = {
                    id: s,
                    callback: e,
                    unsubscribe: () => {
                        this.stateChangeEmitters.delete(s)
                    }
                };
            return this.stateChangeEmitters.set(s, n), this.emitInitialSession(s), {
                data: {
                    subscription: n
                }
            }
        }
        emitInitialSession(e) {
            var s, n;
            return ee(this, void 0, void 0, function*() {
                try {
                    const {
                        data: {
                            session: r
                        },
                        error: o
                    } = yield this.getSession();
                    if (o) throw o;
                    (s = this.stateChangeEmitters.get(e)) === null || s === void 0 || s.callback("INITIAL_SESSION", r)
                } catch (r) {
                    (n = this.stateChangeEmitters.get(e)) === null || n === void 0 || n.callback("INITIAL_SESSION", null), console.error(r)
                }
            })
        }
        resetPasswordForEmail(e, s = {}) {
            return ee(this, void 0, void 0, function*() {
                let n = null,
                    r = null;
                if (this.flowType === "pkce") {
                    const o = hn();
                    yield Ds(this.storage, `${this.storageKey}-code-verifier`, o), n = yield mn(o), r = o === n ? "plain" : "s256"
                }
                try {
                    return yield de(this.fetch, "POST", `${this.url}/recover`, {
                        body: {
                            email: e,
                            code_challenge: n,
                            code_challenge_method: r,
                            gotrue_meta_security: {
                                captcha_token: s.captchaToken
                            }
                        },
                        headers: this.headers,
                        redirectTo: s.redirectTo
                    })
                } catch (o) {
                    if (ce(o)) return {
                        data: null,
                        error: o
                    };
                    throw o
                }
            })
        }
        _refreshAccessToken(e) {
            return ee(this, void 0, void 0, function*() {
                try {
                    const s = Date.now();
                    return yield Hg(n => ee(this, void 0, void 0, function*() {
                        return yield zg(n * 200), yield de(this.fetch, "POST", `${this.url}/token?grant_type=refresh_token`, {
                            body: {
                                refresh_token: e
                            },
                            headers: this.headers,
                            xform: Lt
                        })
                    }), (n, r, o) => o && o.error && o.error instanceof Jr && Date.now() + (n + 1) * 200 - s < Ar)
                } catch (s) {
                    if (ce(s)) return {
                        data: {
                            session: null,
                            user: null
                        },
                        error: s
                    };
                    throw s
                }
            })
        }
        _isValidSession(e) {
            return typeof e == "object" && e !== null && "access_token" in e && "refresh_token" in e && "expires_at" in e
        }
        _handleProviderSignIn(e, s) {
            return ee(this, void 0, void 0, function*() {
                const n = yield this._getUrlForProvider(e, {
                    redirectTo: s.redirectTo,
                    scopes: s.scopes,
                    queryParams: s.queryParams
                });
                return Nt() && !s.skipBrowserRedirect && window.location.assign(n), {
                    data: {
                        provider: e,
                        url: n
                    },
                    error: null
                }
            })
        }
        _recoverAndRefresh() {
            var e;
            return ee(this, void 0, void 0, function*() {
                try {
                    const s = yield fn(this.storage, this.storageKey);
                    if (!this._isValidSession(s)) {
                        s !== null && (yield this._removeSession());
                        return
                    }
                    const n = Math.round(Date.now() / 1e3);
                    if (((e = s.expires_at) !== null && e !== void 0 ? e : 1 / 0) < n + fv)
                        if (this.autoRefreshToken && s.refresh_token) {
                            const {
                                error: r
                            } = yield this._callRefreshToken(s.refresh_token);
                            r && (console.log(r.message), yield this._removeSession())
                        } else yield this._removeSession();
                    else this.persistSession && (yield this._saveSession(s)), this._notifyAllSubscribers("SIGNED_IN", s)
                } catch (s) {
                    console.error(s);
                    return
                }
            })
        }
        _callRefreshToken(e) {
            var s, n;
            return ee(this, void 0, void 0, function*() {
                if (this.refreshingDeferred) return this.refreshingDeferred.promise;
                try {
                    if (this.refreshingDeferred = new dr, !e) throw new Rs;
                    const {
                        data: r,
                        error: o
                    } = yield this._refreshAccessToken(e);
                    if (o) throw o;
                    if (!r.session) throw new Rs;
                    yield this._saveSession(r.session), this._notifyAllSubscribers("TOKEN_REFRESHED", r.session);
                    const i = {
                        session: r.session,
                        error: null
                    };
                    return this.refreshingDeferred.resolve(i), i
                } catch (r) {
                    if (ce(r)) {
                        const o = {
                            session: null,
                            error: r
                        };
                        return (s = this.refreshingDeferred) === null || s === void 0 || s.resolve(o), o
                    }
                    throw (n = this.refreshingDeferred) === null || n === void 0 || n.reject(r), r
                } finally {
                    this.refreshingDeferred = null
                }
            })
        }
        _notifyAllSubscribers(e, s, n = !0) {
            this.broadcastChannel && n && this.broadcastChannel.postMessage({
                event: e,
                session: s
            }), this.stateChangeEmitters.forEach(r => r.callback(e, s))
        }
        _saveSession(e) {
            return ee(this, void 0, void 0, function*() {
                this.persistSession || (this.inMemorySession = e), this.persistSession && e.expires_at && (yield this._persistSession(e))
            })
        }
        _persistSession(e) {
            return Ds(this.storage, this.storageKey, e)
        }
        _removeSession() {
            return ee(this, void 0, void 0, function*() {
                this.persistSession ? yield Tr(this.storage, this.storageKey): this.inMemorySession = null
            })
        }
        _removeVisibilityChangedCallback() {
            const e = this.visibilityChangedCallback;
            this.visibilityChangedCallback = null;
            try {
                e && Nt() && (window == null ? void 0 : window.removeEventListener) && window.removeEventListener("visibilitychange", e)
            } catch (s) {
                console.error("removing visibilitychange callback failed", s)
            }
        }
        _startAutoRefresh() {
            return ee(this, void 0, void 0, function*() {
                yield this._stopAutoRefresh();
                const e = setInterval(() => this._autoRefreshTokenTick(), Ar);
                this.autoRefreshTicker = e, e && typeof e == "object" && typeof e.unref == "function" ? e.unref() : typeof Deno < "u" && typeof Deno.unrefTimer == "function" && Deno.unrefTimer(e), yield this._autoRefreshTokenTick()
            })
        }
        _stopAutoRefresh() {
            return ee(this, void 0, void 0, function*() {
                const e = this.autoRefreshTicker;
                this.autoRefreshTicker = null, e && clearInterval(e)
            })
        }
        startAutoRefresh() {
            return ee(this, void 0, void 0, function*() {
                this._removeVisibilityChangedCallback(), yield this._startAutoRefresh()
            })
        }
        stopAutoRefresh() {
            return ee(this, void 0, void 0, function*() {
                this._removeVisibilityChangedCallback(), yield this._stopAutoRefresh()
            })
        }
        _autoRefreshTokenTick() {
            return ee(this, void 0, void 0, function*() {
                const e = Date.now();
                try {
                    const {
                        data: {
                            session: s
                        }
                    } = yield this.getSession();
                    if (!s || !s.refresh_token || !s.expires_at) return;
                    Math.floor((s.expires_at * 1e3 - e) / Ar) < _v && (yield this._callRefreshToken(s.refresh_token))
                } catch (s) {
                    console.error("Auto refresh tick failed with error. This is likely a transient error.", s)
                }
            })
        }
        _handleVisibilityChange() {
            return ee(this, void 0, void 0, function*() {
                if (!Nt() || !(window != null && window.addEventListener)) return this.autoRefreshToken && this.startAutoRefresh(), !1;
                try {
                    this.visibilityChangedCallback = () => ee(this, void 0, void 0, function*() {
                        return yield this._onVisibilityChanged(!1)
                    }), window == null || window.addEventListener("visibilitychange", this.visibilityChangedCallback), yield this._onVisibilityChanged(!0)
                } catch (e) {
                    console.error("_handleVisibilityChange", e)
                }
            })
        }
        _onVisibilityChanged(e) {
            return ee(this, void 0, void 0, function*() {
                document.visibilityState === "visible" ? (e || (yield this.initializePromise, yield this._recoverAndRefresh()), this.autoRefreshToken && this._startAutoRefresh()) : document.visibilityState === "hidden" && this.autoRefreshToken && this._stopAutoRefresh()
            })
        }
        _getUrlForProvider(e, s) {
            return ee(this, void 0, void 0, function*() {
                const n = [`provider=${encodeURIComponent(e)}`];
                if (s != null && s.redirectTo && n.push(`redirect_to=${encodeURIComponent(s.redirectTo)}`), s != null && s.scopes && n.push(`scopes=${encodeURIComponent(s.scopes)}`), this.flowType === "pkce") {
                    const r = hn();
                    yield Ds(this.storage, `${this.storageKey}-code-verifier`, r);
                    const o = yield mn(r), i = r === o ? "plain" : "s256", a = new URLSearchParams({
                        code_challenge: `${encodeURIComponent(o)}`,
                        code_challenge_method: `${encodeURIComponent(i)}`
                    });
                    n.push(a.toString())
                }
                if (s != null && s.queryParams) {
                    const r = new URLSearchParams(s.queryParams);
                    n.push(r.toString())
                }
                return `${this.url}/authorize?${n.join("&")}`
            })
        }
        _unenroll(e) {
            var s;
            return ee(this, void 0, void 0, function*() {
                try {
                    const {
                        data: n,
                        error: r
                    } = yield this.getSession();
                    return r ? {
                        data: null,
                        error: r
                    } : yield de(this.fetch, "DELETE", `${this.url}/factors/${e.factorId}`, {
                        headers: this.headers,
                        jwt: (s = n == null ? void 0 : n.session) === null || s === void 0 ? void 0 : s.access_token
                    })
                } catch (n) {
                    if (ce(n)) return {
                        data: null,
                        error: n
                    };
                    throw n
                }
            })
        }
        _enroll(e) {
            var s, n;
            return ee(this, void 0, void 0, function*() {
                try {
                    const {
                        data: r,
                        error: o
                    } = yield this.getSession();
                    if (o) return {
                        data: null,
                        error: o
                    };
                    const {
                        data: i,
                        error: a
                    } = yield de(this.fetch, "POST", `${this.url}/factors`, {
                        body: {
                            friendly_name: e.friendlyName,
                            factor_type: e.factorType,
                            issuer: e.issuer
                        },
                        headers: this.headers,
                        jwt: (s = r == null ? void 0 : r.session) === null || s === void 0 ? void 0 : s.access_token
                    });
                    return a ? {
                        data: null,
                        error: a
                    } : (!((n = i == null ? void 0 : i.totp) === null || n === void 0) && n.qr_code && (i.totp.qr_code = `data:image/svg+xml;utf-8,${i.totp.qr_code}`), {
                        data: i,
                        error: null
                    })
                } catch (r) {
                    if (ce(r)) return {
                        data: null,
                        error: r
                    };
                    throw r
                }
            })
        }
        _verify(e) {
            var s;
            return ee(this, void 0, void 0, function*() {
                try {
                    const {
                        data: n,
                        error: r
                    } = yield this.getSession();
                    if (r) return {
                        data: null,
                        error: r
                    };
                    const {
                        data: o,
                        error: i
                    } = yield de(this.fetch, "POST", `${this.url}/factors/${e.factorId}/verify`, {
                        body: {
                            code: e.code,
                            challenge_id: e.challengeId
                        },
                        headers: this.headers,
                        jwt: (s = n == null ? void 0 : n.session) === null || s === void 0 ? void 0 : s.access_token
                    });
                    return i ? {
                        data: null,
                        error: i
                    } : (yield this._saveSession(Object.assign({
                        expires_at: Math.round(Date.now() / 1e3) + o.expires_in
                    }, o)), this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", o), {
                        data: o,
                        error: i
                    })
                } catch (n) {
                    if (ce(n)) return {
                        data: null,
                        error: n
                    };
                    throw n
                }
            })
        }
        _challenge(e) {
            var s;
            return ee(this, void 0, void 0, function*() {
                try {
                    const {
                        data: n,
                        error: r
                    } = yield this.getSession();
                    return r ? {
                        data: null,
                        error: r
                    } : yield de(this.fetch, "POST", `${this.url}/factors/${e.factorId}/challenge`, {
                        headers: this.headers,
                        jwt: (s = n == null ? void 0 : n.session) === null || s === void 0 ? void 0 : s.access_token
                    })
                } catch (n) {
                    if (ce(n)) return {
                        data: null,
                        error: n
                    };
                    throw n
                }
            })
        }
        _challengeAndVerify(e) {
            return ee(this, void 0, void 0, function*() {
                const {
                    data: s,
                    error: n
                } = yield this._challenge({
                    factorId: e.factorId
                });
                return n ? {
                    data: null,
                    error: n
                } : yield this._verify({
                    factorId: e.factorId,
                    challengeId: s.id,
                    code: e.code
                })
            })
        }
        _listFactors() {
            return ee(this, void 0, void 0, function*() {
                const {
                    data: {
                        user: e
                    },
                    error: s
                } = yield this.getUser();
                if (s) return {
                    data: null,
                    error: s
                };
                const n = (e == null ? void 0 : e.factors) || [],
                    r = n.filter(o => o.factor_type === "totp" && o.status === "verified");
                return {
                    data: {
                        all: n,
                        totp: r
                    },
                    error: null
                }
            })
        }
        _getAuthenticatorAssuranceLevel() {
            var e, s;
            return ee(this, void 0, void 0, function*() {
                const {
                    data: {
                        session: n
                    },
                    error: r
                } = yield this.getSession();
                if (r) return {
                    data: null,
                    error: r
                };
                if (!n) return {
                    data: {
                        currentLevel: null,
                        nextLevel: null,
                        currentAuthenticationMethods: []
                    },
                    error: null
                };
                const o = this._decodeJWT(n.access_token);
                let i = null;
                o.aal && (i = o.aal);
                let a = i;
                ((s = (e = n.user.factors) === null || e === void 0 ? void 0 : e.filter(d => d.status === "verified")) !== null && s !== void 0 ? s : []).length > 0 && (a = "aal2");
                const c = o.amr || [];
                return {
                    data: {
                        currentLevel: i,
                        nextLevel: a,
                        currentAuthenticationMethods: c
                    },
                    error: null
                }
            })
        }
    }
    class vv extends gv {
        constructor(e) {
            super(e)
        }
    }
    var yv = globalThis && globalThis.__awaiter || function(t, e, s, n) {
        function r(o) {
            return o instanceof s ? o : new s(function(i) {
                i(o)
            })
        }
        return new(s || (s = Promise))(function(o, i) {
            function a(d) {
                try {
                    c(n.next(d))
                } catch (f) {
                    i(f)
                }
            }

            function u(d) {
                try {
                    c(n.throw(d))
                } catch (f) {
                    i(f)
                }
            }

            function c(d) {
                d.done ? o(d.value) : r(d.value).then(a, u)
            }
            c((n = n.apply(t, e || [])).next())
        })
    };
    const bv = {
            headers: Rg
        },
        wv = {
            schema: "public"
        },
        kv = {
            autoRefreshToken: !0,
            persistSession: !0,
            detectSessionInUrl: !0,
            flowType: "implicit"
        },
        Sv = {};
    class Tv {
        constructor(e, s, n) {
            var r, o, i, a, u, c, d, f;
            if (this.supabaseUrl = e, this.supabaseKey = s, !e) throw new Error("supabaseUrl is required.");
            if (!s) throw new Error("supabaseKey is required.");
            const h = jg(e);
            if (this.realtimeUrl = `${h}/realtime/v1`.replace(/^http/i, "ws"), this.authUrl = `${h}/auth/v1`, this.storageUrl = `${h}/storage/v1`, h.match(/(supabase\.co)|(supabase\.in)/)) {
                const T = h.split(".");
                this.functionsUrl = `${T[0]}.functions.${T[1]}.${T[2]}`
            } else this.functionsUrl = `${h}/functions/v1`;
            const _ = `sb-${new URL(this.authUrl).hostname.split(".")[0]}-auth-token`,
                v = {
                    db: wv,
                    realtime: Sv,
                    auth: Object.assign(Object.assign({}, kv), {
                        storageKey: _
                    }),
                    global: bv
                },
                m = Ug(n != null ? n : {}, v);
            this.storageKey = (o = (r = m.auth) === null || r === void 0 ? void 0 : r.storageKey) !== null && o !== void 0 ? o : "", this.headers = (a = (i = m.global) === null || i === void 0 ? void 0 : i.headers) !== null && a !== void 0 ? a : {}, this.auth = this._initSupabaseAuthClient((u = m.auth) !== null && u !== void 0 ? u : {}, this.headers, (c = m.global) === null || c === void 0 ? void 0 : c.fetch), this.fetch = Fg(s, this._getAccessToken.bind(this), (d = m.global) === null || d === void 0 ? void 0 : d.fetch), this.realtime = this._initRealtimeClient(Object.assign({
                headers: this.headers
            }, m.realtime)), this.rest = new U_(`${h}/rest/v1`, {
                headers: this.headers,
                schema: (f = m.db) === null || f === void 0 ? void 0 : f.schema,
                fetch: this.fetch
            }), this._listenForAuthEvents()
        }
        get functions() {
            return new R_(this.functionsUrl, {
                headers: this.headers,
                customFetch: this.fetch
            })
        }
        get storage() {
            return new Pg(this.storageUrl, this.headers, this.fetch)
        }
        from(e) {
            return this.rest.from(e)
        }
        rpc(e, s = {}, n) {
            return this.rest.rpc(e, s, n)
        }
        channel(e, s = {
            config: {}
        }) {
            return this.realtime.channel(e, s)
        }
        getChannels() {
            return this.realtime.getChannels()
        }
        removeChannel(e) {
            return this.realtime.removeChannel(e)
        }
        removeAllChannels() {
            return this.realtime.removeAllChannels()
        }
        _getAccessToken() {
            var e, s;
            return yv(this, void 0, void 0, function*() {
                const {
                    data: n
                } = yield this.auth.getSession();
                return (s = (e = n.session) === null || e === void 0 ? void 0 : e.access_token) !== null && s !== void 0 ? s : null
            })
        }
        _initSupabaseAuthClient({
            autoRefreshToken: e,
            persistSession: s,
            detectSessionInUrl: n,
            storage: r,
            storageKey: o,
            flowType: i
        }, a, u) {
            const c = {
                Authorization: `Bearer ${this.supabaseKey}`,
                apikey: `${this.supabaseKey}`
            };
            return new vv({
                url: this.authUrl,
                headers: Object.assign(Object.assign({}, c), a),
                storageKey: o,
                autoRefreshToken: e,
                persistSession: s,
                detectSessionInUrl: n,
                storage: r,
                flowType: i,
                fetch: u
            })
        }
        _initRealtimeClient(e) {
            return new wg(this.realtimeUrl, Object.assign(Object.assign({}, e), {
                params: Object.assign({
                    apikey: this.supabaseKey
                }, e == null ? void 0 : e.params)
            }))
        }
        _listenForAuthEvents() {
            return this.auth.onAuthStateChange((s, n) => {
                this._handleTokenChanged(s, n == null ? void 0 : n.access_token, "CLIENT")
            })
        }
        _handleTokenChanged(e, s, n) {
            (e === "TOKEN_REFRESHED" || e === "SIGNED_IN") && this.changedAccessToken !== s ? (this.realtime.setAuth(s != null ? s : null), this.changedAccessToken = s) : e === "SIGNED_OUT" && (this.realtime.setAuth(this.supabaseKey), n == "STORAGE" && this.auth.signOut(), this.changedAccessToken = void 0)
        }
    }
    const xv = (t, e, s) => new Tv(t, e, s),
        Av = {
            key: 0
        },
        Cv = I("div", {
            class: "inline-flex items-center"
        }, [I("svg", {
            width: "25",
            height: "25",
            class: "mr-1"
        }, [I("g", {
            fill: "none",
            "fill-rule": "evenodd"
        }, [I("path", {
            d: "M20.66 12.7c0-.61-.05-1.19-.15-1.74H12.5v3.28h4.58a3.91 3.91 0 0 1-1.7 2.57v2.13h2.74a8.27 8.27 0 0 0 2.54-6.24z",
            fill: "#4285F4"
        }), I("path", {
            d: "M12.5 21a8.1 8.1 0 0 0 5.63-2.06l-2.75-2.13a5.1 5.1 0 0 1-2.88.8 5.06 5.06 0 0 1-4.76-3.5H4.9v2.2A8.5 8.5 0 0 0 12.5 21z",
            fill: "#34A853"
        }), I("path", {
            d: "M7.74 14.12a5.11 5.11 0 0 1 0-3.23v-2.2H4.9A8.49 8.49 0 0 0 4 12.5c0 1.37.33 2.67.9 3.82l2.84-2.2z",
            fill: "#FBBC05"
        }), I("path", {
            d: "M12.5 7.38a4.6 4.6 0 0 1 3.25 1.27l2.44-2.44A8.17 8.17 0 0 0 12.5 4a8.5 8.5 0 0 0-7.6 4.68l2.84 2.2a5.06 5.06 0 0 1 4.76-3.5z",
            fill: "#EA4335"
        })])]), I("span", {
            class: "text-base"
        }, "Sign in with Google")], -1),
        $v = {
            key: 1
        },
        Ev = {
            class: "text-sm font-300 flex items-center"
        },
        ml = q({
            __name: "ExtUser",
            setup(t, {
                expose: e
            }) {
                const s = xv("https://ryypvipeinhnhonjftdv.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ5eXB2aXBlaW5obmhvbmpmdGR2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg2NzA3NTksImV4cCI6MTk4NDI0Njc1OX0.c9YdJD870cTahJejvE6iiTtyhh6o31zSTFfdJ92H098"),
                    n = {
                        Free: 1e3,
                        Starter: 5 * 1e3,
                        Pro: 50 * 1e3,
                        Elite: 500 * 1e3,
                        Unlimited: 1 / 0
                    };
                var r = {
                    email: "",
                    membership: "Free",
                    is_yearly: !1,
                    paid_at: "",
                    created_at: "",
                    next_bill_date: "",
                    limit: n.Free / 2,
                    refresh_at: new Date().getTime()
                };
                const o = L(r);
                e({
                    memberInfo: o,
                    checkLimit: _
                });
                const i = L(!1),
                    a = U(() => {
                        let v = o.value.email;
                        return Boolean(v)
                    });
                Eu(async () => {
                    o.value = (await se.exports.storage.local.get("memberInfo")).memberInfo || r, u() && c()
                });

                function u() {
                    const m = new Date().getTime(),
                        T = (o.value.refresh_at || 0) + 36e5;
                    return m > T
                }
                async function c() {
                    i.value = !0;
                    const {
                        data: v,
                        error: m
                    } = await s.from("members").select();
                    if (!m && v.length) {
                        let T = v[0];
                        return d(T) && (fe.track("Membership Expired", T), T.membership = "Free"), o.value = Object.assign(o.value, T, {
                            limit: n[T.membership],
                            refresh_at: new Date().getTime()
                        }), se.exports.storage.local.set({
                            memberInfo: o.value
                        }), fe.people.set({
                            memberInfo: o.value
                        }), i.value = !1, o.value
                    } else return o.value.refresh_at = new Date().getTime(), se.exports.storage.local.set({
                        memberInfo: o.value
                    }), fe.track("Update Member Info Error", {
                        error: m,
                        dataCount: (v == null ? void 0 : v.length) || 0
                    }), i.value = !1, !1
                }

                function d(v) {
                    if (["Starter", "Pro", "Elite", "Unlimited"].includes(v.membership)) {
                        if (v.is_yearly) {
                            if (V(v.paid_at).add(1, "year") < V()) return !0
                        } else if (V(v.paid_at).add(1, "month") < V()) return !0
                    }
                    return !1
                }
                async function f() {
                    const {
                        access_token: v,
                        refresh_token: m
                    } = await zr("get-supabase-token", {}, "background");
                    if (v && m) {
                        let {
                            error: T
                        } = await s.auth.setSession({
                            access_token: v,
                            refresh_token: m
                        });
                        T ? (ie.alert("Login failed: Token not right!", "Tips", {
                            showClose: !1
                        }), fe.track("Sign In Error", T)) : (await c(), fe.alias(o.value.email), fe.track("Signed In"))
                    } else ie.alert("Login failed: Can not find token!", "Tips", {
                        showClose: !1
                    }), fe.track("Sign In Error", {
                        error: "no token"
                    })
                }
                async function h() {
                    fe.track("Sign In Extension"), window.open(`${ms}/signin?${ps}&from=extension`), ie.confirm("Successfully signin?", "Tips", {
                        confirmButtonText: "Yes",
                        cancelButtonText: "No",
                        type: "warning"
                    }).then(() => {
                        f()
                    }).catch(() => {})
                }
                async function p(v) {
                    if (v == "logout") {
                        se.exports.storage.local.remove("syncWebSession");
                        const {
                            error: m
                        } = await s.auth.signOut();
                        o.value = r, m ? fe.track("Sign Out Error", m) : fe.track("Signed Out"), se.exports.storage.local.set({
                            memberInfo: r
                        })
                    }
                    v == "plans" && window.open(`${ms}/pricing?${ps}`), v == "manage" && window.open(`${ms}/account?${ps}`), v == "refresh" && (await c() || ie.alert("Something wrong, you can re-login to fix it.", "Error", {
                        showClose: !1
                    }))
                }

                function _(v, m = "Follower", T = !0) {
                    let k = o.value.limit;
                    ["Comment", "Like"].includes(m) && (k = o.value.limit / 5), ["filter", "getProfile", "likeRecentPost", "follow", "unfollow", "removeFollower"].includes(m) && (k = ["Pro", "Elite", "Unlimited"].includes(o.value.membership) ? 1 / 0 : 5), m.includes("M-") && (k = ["Elite", "Unlimited"].includes(o.value.membership) ? 1 / 0 : 5);
                    const g = v > k;
                    return g && T && (a.value ? ie.confirm(`${o.value.membership} member can only export first ${k} records, upgrade the membership to export more.`, "Warning", {
                        confirmButtonText: "Upgrade",
                        cancelButtonText: "Refresh Membership",
                        type: "warning"
                    }).then(async () => {
                        window.open(`${ms}/pricing?${ps}`)
                    }).catch(async () => {
                        await c() || ie.alert("Something wrong, you can re-login to fix it.", "Error", {
                            showClose: !1
                        })
                    }) : ie.confirm(`Guest member can only export first ${k} records, sign in to export more.`, "Warning", {
                        confirmButtonText: "Sign In",
                        cancelButtonText: "Cancel",
                        type: "warning"
                    }).then(async () => {
                        h()
                    }).catch(() => {})), {
                        limitNum: k,
                        reachLimit: g
                    }
                }
                return (v, m) => {
                    const T = Fe,
                        k = Yn,
                        g = Bn,
                        C = Vn,
                        x = Ui,
                        $ = uo,
                        W = lo,
                        E = ra,
                        P = sn;
                    return l(a) ? (y(), O("div", $v, [w(C, {
                        onCommand: p
                    }, {
                        dropdown: S(() => [w(g, null, {
                            default: S(() => [w(k, {
                                command: "manage"
                            }, {
                                default: S(() => [B("Manage")]),
                                _: 1
                            }), w(k, {
                                command: "plans"
                            }, {
                                default: S(() => [B("Upgrade Plan")]),
                                _: 1
                            }), w(k, {
                                command: "refresh"
                            }, {
                                default: S(() => [B("Refresh Status")]),
                                _: 1
                            }), w(k, {
                                command: "logout"
                            }, {
                                default: S(() => [B("Logout")]),
                                _: 1
                            })]),
                            _: 1
                        })]),
                        default: S(() => [I("span", Ev, j(l(o).email) + " ", 1)]),
                        _: 1
                    }), w(E, {
                        placement: "top-end",
                        title: "Plan Info",
                        width: 200,
                        trigger: "hover"
                    }, {
                        reference: S(() => [w(x, {
                            size: "small",
                            class: "ml-2"
                        }, {
                            default: S(() => [B(j(l(o).membership), 1)]),
                            _: 1
                        })]),
                        default: S(() => [w(W, null, {
                            default: S(() => [w($, {
                                span: 8
                            }, {
                                default: S(() => [B("Start: ")]),
                                _: 1
                            }), l(o).membership === "Free" ? (y(), N($, {
                                key: 0,
                                span: 16
                            }, {
                                default: S(() => [B(j(l(hr)(l(o).created_at, "YYYY-MM-DD")), 1)]),
                                _: 1
                            })) : (y(), N($, {
                                key: 1,
                                span: 16
                            }, {
                                default: S(() => [B(j(l(hr)(l(o).paid_at, "YYYY-MM-DD")), 1)]),
                                _: 1
                            }))]),
                            _: 1
                        }), w(W, null, {
                            default: S(() => [w($, {
                                span: 8
                            }, {
                                default: S(() => [B("End: ")]),
                                _: 1
                            }), l(o).membership === "Free" ? (y(), N($, {
                                key: 0,
                                span: 16
                            }, {
                                default: S(() => [B("Never")]),
                                _: 1
                            })) : (y(), N($, {
                                key: 1,
                                span: 16
                            }, {
                                default: S(() => [B(j(l(hr)(l(o).next_bill_date, "YYYY-MM-DD")), 1)]),
                                _: 1
                            }))]),
                            _: 1
                        })]),
                        _: 1
                    })])) : (y(), O("div", Av, [De((y(), N(T, {
                        text: "",
                        onClick: h
                    }, {
                        default: S(() => [Cv]),
                        _: 1
                    })), [
                        [P, l(i)]
                    ])]))
                }
            }
        }),
        hs = L(!1),
        Iv = {
            class: "text-xs"
        },
        Ov = {
            class: "text-xs"
        },
        Pv = {
            class: "text-center my-8"
        },
        Dv = {
            key: 1
        },
        Rv = q({
            __name: "ShowAllLogsButton",
            props: {
                taskIds: {}
            },
            setup(t) {
                const e = t,
                    s = L(!1),
                    n = L([]),
                    r = L(0);
                async function o() {
                    const a = e.taskIds[r.value],
                        u = (await se.exports.storage.local.get(a))[a];
                    if (u) {
                        const c = JSON.parse(u);
                        n.value = n.value.concat(c.requestLogs.map(d => ({
                            ...d,
                            target: c.target,
                            type: c.type
                        })))
                    }
                    r.value -= 1
                }

                function i() {
                    s.value = !0, r.value = e.taskIds.length - 1, n.value = [], o()
                }
                return (a, u) => {
                    const c = Fe,
                        d = Ss,
                        f = Yi,
                        h = xs;
                    return y(), O(ye, null, [w(c, {
                        onClick: i
                    }, {
                        default: S(() => [B("Show all Logs")]),
                        _: 1
                    }), w(h, {
                        class: "text-left",
                        modelValue: l(s),
                        "onUpdate:modelValue": u[0] || (u[0] = p => Ke(s) ? s.value = p : null),
                        title: "Logs",
                        width: "60%"
                    }, {
                        default: S(() => [w(f, {
                            height: "400px"
                        }, {
                            default: S(() => [(y(!0), O(ye, null, Ot(l(n), p => (y(), O("div", null, [I("div", Iv, j(p.createdAt) + " | " + j(p.type) + " | " + j(p.target), 1), I("div", null, "[" + j(p.statusCode) + "] count: " + j(p.dataCount), 1), I("div", Ov, "startFrom: " + j(p.startFrom), 1), w(d, {
                                class: "my-2"
                            })]))), 256)), I("div", Pv, [l(r) >= 0 ? (y(), N(c, {
                                key: 0,
                                onClick: o
                            }, {
                                default: S(() => [B("Load more")]),
                                _: 1
                            })) : (y(), O("div", Dv, "End"))])]),
                            _: 1
                        })]),
                        _: 1
                    }, 8, ["modelValue"])], 64)
                }
            }
        }),
        Mv = {
            class: "flex justify-end mt-12"
        },
        Lv = q({
            __name: "MultiDownloadPanel",
            props: {
                task: {},
                type: {},
                desc: {}
            },
            setup(t) {
                const e = t,
                    s = L(!1),
                    n = {
                        user: ["id", "username", "full_name", "profile_pic_url", "is_verified"],
                        comment: ["id", "username", "owner_id", "profile_pic_url", "text", "created_at"],
                        post: ["id", "shortcode", "owner_id", "text", "comment_count", "like_count", "created_at"]
                    },
                    r = ct("downloadConfig", {
                        format: "CSV",
                        addProfileUrl: !1,
                        isDistinctMode: !1,
                        formatDate: !1
                    }),
                    o = U(() => ["Follower", "Following", "Like", "Customized"].includes(e.type) ? "user" : ["Comment"].includes(e.type) ? "comment" : ["Hashtag", "Location"].includes(e.type) ? "post" : "user"),
                    i = L(!1);
                async function a() {
                    i.value = !0, c(), i.value = !1
                }
                async function u() {
                    const f = await se.exports.storage.local.get(st(e.task.subTaskIds));
                    let h = [];
                    for (const p of Object.keys(f)) {
                        const _ = JSON.parse(f[p]),
                            v = _.logs.reduce((T, k) => T.concat(k.itemIds), []),
                            m = await se.exports.storage.local.get(v);
                        h = h.concat(Object.values(m).map(T => Object.assign(T, {
                            target: _.username || _.target
                        })))
                    }
                    return h
                }
                async function c() {
                    let f = await u();
                    const h = r.value.format,
                        p = ["target"].concat(n[o.value]);
                    p.includes("username") && r.value.isDistinctMode ? f = Object.values(f.reduce((T, k) => (T[k.id] = k, T), {})) : p.includes("owner_id") && r.value.isDistinctMode && (f = Object.values(f.reduce((T, k) => (T[k.owner_id] = k, T), {}))), p.includes("created_at") && r.value.formatDate && (f = f.map(T => (T.created_at_formated = new Date(T.created_at * 1e3).toLocaleString(), T))), p.includes("username") && r.value.addProfileUrl && (f = f.map(T => (T.profile_url = "https://www.instagram.com/" + T.username, T)));
                    let _ = new Date().toLocaleDateString("en-CA").replaceAll("-", "");
                    const v = r.value.isDistinctMode ? `_${f.length}` : "",
                        m = `${e.desc}${v}_${_}_by_${Et.name}.${h.toLowerCase()}`;
                    if (h == "JSON") d(JSON.stringify(f), m);
                    else {
                        const T = gs.json_to_sheet(f, {
                                header: p
                            }),
                            k = gs.book_new();
                        gs.book_append_sheet(k, T, "Data"), Bi(k, m)
                    }
                    fe.track("Downloaded", {
                        total: f.length,
                        format: h,
                        desc: e.desc
                    })
                }

                function d(f, h = "download", p = !0) {
                    const _ = "data:text/json;charset=utf-8," + encodeURIComponent(f),
                        v = document.createElement("a");
                    v.href = _, v.download = h, v.setAttribute("style", "visibility:hidden"), document.body.appendChild(v), v.dispatchEvent(new MouseEvent("click", {
                        bubbles: !1,
                        cancelable: !1,
                        view: window
                    })), document.body.removeChild(v)
                }
                return (f, h) => {
                    const p = Fe,
                        _ = ea,
                        v = Xi,
                        m = Wn,
                        T = oa,
                        k = zn,
                        g = xs,
                        C = sn;
                    return y(), O(ye, null, [w(p, {
                        onClick: h[0] || (h[0] = x => s.value = !0)
                    }, {
                        default: S(() => [B(" Download ")]),
                        _: 1
                    }), w(g, {
                        modelValue: l(s),
                        "onUpdate:modelValue": h[6] || (h[6] = x => Ke(s) ? s.value = x : null),
                        title: "Download Configuration",
                        width: "40%"
                    }, {
                        default: S(() => [De((y(), O("div", null, [w(k, {
                            model: l(r),
                            "label-position": "top"
                        }, {
                            default: S(() => [w(m, {
                                label: "Format"
                            }, {
                                default: S(() => [w(v, {
                                    modelValue: l(r).format,
                                    "onUpdate:modelValue": h[1] || (h[1] = x => l(r).format = x)
                                }, {
                                    default: S(() => [w(_, {
                                        label: "CSV"
                                    }), w(_, {
                                        label: "XLSX"
                                    }), w(_, {
                                        label: "JSON"
                                    })]),
                                    _: 1
                                }, 8, ["modelValue"])]),
                                _: 1
                            }), l(o) != "post" ? (y(), N(m, {
                                key: 0,
                                label: "Add Profile Url"
                            }, {
                                default: S(() => [w(T, {
                                    modelValue: l(r).addProfileUrl,
                                    "onUpdate:modelValue": h[2] || (h[2] = x => l(r).addProfileUrl = x)
                                }, null, 8, ["modelValue"])]),
                                _: 1
                            })) : Y("", !0), w(m, {
                                label: "Distinct User Mode"
                            }, {
                                default: S(() => [w(T, {
                                    modelValue: l(r).isDistinctMode,
                                    "onUpdate:modelValue": h[3] || (h[3] = x => l(r).isDistinctMode = x)
                                }, null, 8, ["modelValue"])]),
                                _: 1
                            }), l(o) != "user" ? (y(), N(m, {
                                key: 1,
                                label: "Format Date"
                            }, {
                                default: S(() => [w(T, {
                                    modelValue: l(r).formatDate,
                                    "onUpdate:modelValue": h[4] || (h[4] = x => l(r).formatDate = x)
                                }, null, 8, ["modelValue"])]),
                                _: 1
                            })) : Y("", !0)]),
                            _: 1
                        }, 8, ["model"]), I("div", Mv, [w(p, {
                            onClick: h[5] || (h[5] = x => s.value = !1)
                        }, {
                            default: S(() => [B("Cancel")]),
                            _: 1
                        }), w(p, {
                            type: "primary",
                            onClick: a
                        }, {
                            default: S(() => [B(" Confirm ")]),
                            _: 1
                        })])])), [
                            [C, l(i)]
                        ])]),
                        _: 1
                    }, 8, ["modelValue"])], 64)
                }
            }
        }),
        Nv = {
            key: 0,
            class: "m-4"
        },
        Uo = q({
            __name: "SuperTable",
            props: {
                items: {},
                checkLimit: {
                    type: Function
                }
            },
            setup(t, {
                expose: e
            }) {
                const s = t,
                    n = L(null),
                    r = L(1),
                    o = U(() => hs.value ? 10 : 3),
                    i = U(() => p.value.slice(o.value * r.value - o.value, o.value * r.value));

                function a(k) {
                    r.value = k
                }

                function u(k) {
                    return o.value * (r.value - 1) + k + 1
                }
                const c = L(!1),
                    d = L({}),
                    f = L({}),
                    h = L({}),
                    p = U(() => {
                        let k = s.items;
                        Object.keys(f.value) && (k = k.filter(x => Object.keys(f.value).every($ => {
                            var E;
                            const W = f.value[$];
                            if (W.length === 0) return !0;
                            if (["is_verified", "is_private", "followed_by_viewer"].includes($)) return W.includes((E = x[$]) == null ? void 0 : E.toString());
                            if ($ === "biography") {
                                const P = x[$] ? "true" : x[$] === "" ? "false" : "";
                                return W.includes(P)
                            } else if ($ === "contact") {
                                const P = x.public_email ? "hasEmail" : "",
                                    M = x.contact_phone_number ? "hasPhone" : "";
                                return W.includes(P) || W.includes(M)
                            }
                        }))), Object.keys(d.value) && (k = k.filter(x => Object.keys(d.value).every($ => {
                            const W = d.value[$];
                            if (W.length === 0) return !0;
                            if (["follower_count", "following_count", "media_count"].includes($)) {
                                if (!x[$]) return !1;
                                const E = W[0] || 0,
                                    P = W[1] || 1 / 0;
                                return x[$] >= E && x[$] <= P
                            } else if ($ === "follow_rate") {
                                const E = W[0] || 0,
                                    P = W[1] || 1 / 0,
                                    M = x.following_count / x.follower_count;
                                return M >= E && M <= P
                            }
                        })));
                        const {
                            prop: g,
                            order: C
                        } = h.value;
                        if (g && C && (console.log(g, C), k.sort((x, $) => C === "ascending" ? _(x[g], $[g]) : _($[g], x[g]))), T.value && s.checkLimit) {
                            const x = s.checkLimit(k.length, "getProfile", !1);
                            return c.value = x.reachLimit, k.slice(0, x.limitNum)
                        }
                        return k
                    });

                function _(k, g) {
                    return k = k || "", g = g || "", typeof k == "number" || typeof g == "number" ? k - g : k.localeCompare(g)
                }
                const v = () => {
                        n.value.clearFilter(), n.value.clearSort(), f.value = {}, h.value = {}, d.value = {}, c.value = !1
                    },
                    m = U(() => h.value.prop || h.value.order ? !0 : T.value),
                    T = U(() => {
                        for (let k in f.value)
                            if (f.value[k].length) return !0;
                        for (let k in d.value)
                            if (d.value[k][0] || d.value[k][1]) return !0;
                        return !1
                    });
                return e({
                    reset: v,
                    hasSortAndFilter: m,
                    pageSize: o,
                    scaleRule: d,
                    filteredItems: p
                }), (k, g) => {
                    const C = ao,
                        x = rs,
                        $ = Iu,
                        W = Ou;
                    return y(), O(ye, null, [l(c) ? (y(), O("div", Nv, [w(C, {
                        title: "Members below Pro can filter only first 5 records, upgrade the membership to filter more.",
                        type: "error"
                    })])) : Y("", !0), w($, {
                        ref_key: "tableRef",
                        ref: n,
                        class: "mt-5 w-100%",
                        data: l(i),
                        stripe: !0,
                        border: !0,
                        onSortChange: g[0] || (g[0] = E => h.value = E),
                        onFilterChange: g[1] || (g[1] = E => f.value = E)
                    }, {
                        default: S(() => [w(x, {
                            type: "index",
                            index: u,
                            fixed: ""
                        }), oe(k.$slots, "default")]),
                        _: 3
                    }, 8, ["data"]), w(W, {
                        class: "m-2",
                        layout: "total, prev, pager, next",
                        "page-size": l(o),
                        total: l(p).length,
                        onCurrentChange: a
                    }, null, 8, ["page-size", "total"])], 64)
                }
            }
        }),
        Fv = {};

    function jv(t, e) {
        const s = Ui,
            n = rs;
        return y(), N(n, {
            "column-key": "actionTag",
            label: "Action Tags",
            fixed: "right",
            "min-width": "120"
        }, {
            default: S(r => [(y(!0), O(ye, null, Ot([...new Set(r.row.actionTag)], o => (y(), N(s, {
                class: "mr-2 capitalize",
                size: "small",
                effect: "plain"
            }, {
                default: S(() => [B(j(o), 1)]),
                _: 2
            }, 1024))), 256))]),
            _: 1
        })
    }
    const Yo = Ts(Fv, [
            ["render", jv]
        ]),
        Uv = {};

    function Yv(t, e) {
        const s = rs;
        return y(), N(s, {
            label: "Created At",
            prop: "created_at",
            "column-key": "created_at",
            width: "160",
            sortable: ""
        }, {
            default: S(n => [B(j(new Date(n.row.created_at * 1e3).toLocaleString()), 1)]),
            _: 1
        })
    }
    const pl = Ts(Uv, [
            ["render", Yv]
        ]),
        Bv = {};

    function Vv(t, e) {
        const s = rs,
            n = fo,
            r = ns,
            o = pl,
            i = Yo;
        return y(), O(ye, null, [w(s, {
            "column-key": "id",
            sortable: "",
            prop: "id",
            label: "Post ID",
            fixed: "",
            width: "200"
        }), w(s, {
            "column-key": "shortcode",
            sortable: "",
            prop: "shortcode",
            label: "Shortcode",
            fixed: "",
            width: "130"
        }), w(s, {
            "column-key": "owner_id",
            sortable: "",
            prop: "owner_id",
            label: "User ID",
            fixed: "",
            width: "130"
        }), w(s, {
            label: "Text",
            prop: "text",
            "column-key": "text",
            width: "300",
            sortable: ""
        }, {
            default: S(a => [w(r, {
                content: a.row.text
            }, {
                default: S(() => [w(n, {
                    class: "w-300px",
                    truncated: ""
                }, {
                    default: S(() => [B(j(a.row.text), 1)]),
                    _: 2
                }, 1024)]),
                _: 2
            }, 1032, ["content"])]),
            _: 1
        }), w(s, {
            "column-key": "comment_count",
            sortable: "",
            prop: "comment_count",
            label: "Comments",
            width: "130"
        }), w(s, {
            "column-key": "like_count",
            sortable: "",
            prop: "like_count",
            label: "Likes",
            width: "100"
        }), w(o), oe(t.$slots, "default"), w(i)], 64)
    }
    const Wv = Ts(Bv, [
            ["render", Vv]
        ]),
        zv = {
            class: "ml-1"
        },
        Hv = {
            class: "text-gray-400 text-xs"
        },
        _l = q({
            __name: "CommentColumns",
            setup(t) {
                const e = location.pathname === "/dist/options/index.html" ? se.exports.runtime.getURL("assets/InsFo.svg") : "";
                return (s, n) => {
                    const r = rs,
                        o = Wi,
                        i = Hn,
                        a = co,
                        u = fo,
                        c = ns,
                        d = pl,
                        f = Yo;
                    return y(), O(ye, null, [w(r, {
                        "column-key": "id",
                        sortable: "",
                        prop: "id",
                        label: "Comment ID",
                        fixed: "",
                        width: "200"
                    }), w(r, {
                        "column-key": "owner_id",
                        sortable: "",
                        prop: "owner_id",
                        label: "User ID",
                        fixed: "",
                        width: "120"
                    }), w(r, {
                        sortable: "",
                        prop: "username",
                        label: "Name",
                        fixed: "",
                        width: "220"
                    }, {
                        default: S(h => [w(a, {
                            warpx: ""
                        }, {
                            default: S(() => [w(o, {
                                size: 36,
                                src: l(e) || h.row.profile_pic_url
                            }, null, 8, ["src"]), I("div", zv, [w(i, {
                                underline: !1,
                                href: `https://www.instagram.com/${h.row.username}`,
                                target: "_blank"
                            }, {
                                default: S(() => [I("div", null, "@" + j(h.row.username), 1)]),
                                _: 2
                            }, 1032, ["href"]), I("div", Hv, j(h.row.full_name), 1)])]),
                            _: 2
                        }, 1024)]),
                        _: 1
                    }), w(r, {
                        label: "Text",
                        prop: "text",
                        "column-key": "text",
                        width: "300",
                        sortable: ""
                    }, {
                        default: S(h => [w(c, {
                            content: h.row.text
                        }, {
                            default: S(() => [w(u, {
                                class: "w-300px",
                                truncated: ""
                            }, {
                                default: S(() => [B(j(h.row.text), 1)]),
                                _: 2
                            }, 1024)]),
                            _: 2
                        }, 1032, ["content"])]),
                        _: 1
                    }), w(d), oe(s.$slots, "default"), w(f)], 64)
                }
            }
        }),
        Gv = {
            class: "ml-1"
        },
        qv = {
            class: "text-gray-400 text-xs"
        },
        Bo = q({
            __name: "UserColumns",
            setup(t) {
                const e = location.pathname === "/dist/options/index.html" ? se.exports.runtime.getURL("assets/InsFo.svg") : "";
                return (s, n) => {
                    const r = rs,
                        o = Wi,
                        i = Hn,
                        a = co,
                        u = ns,
                        c = Yo;
                    return y(), O(ye, null, [w(r, {
                        "column-key": "id",
                        sortable: "",
                        prop: "id",
                        label: "ID",
                        fixed: "",
                        width: "120"
                    }), w(r, {
                        sortable: "",
                        prop: "username",
                        label: "Name",
                        fixed: "",
                        width: "220"
                    }, {
                        default: S(d => [w(a, {
                            warpx: ""
                        }, {
                            default: S(() => [w(o, {
                                size: 36,
                                src: l(e) || d.row.profile_pic_url
                            }, null, 8, ["src"]), I("div", Gv, [w(i, {
                                underline: !1,
                                href: `https://www.instagram.com/${d.row.username}`,
                                target: "_blank"
                            }, {
                                default: S(() => [I("div", null, "@" + j(d.row.username), 1)]),
                                _: 2
                            }, 1032, ["href"]), I("div", qv, j(d.row.full_name), 1)])]),
                            _: 2
                        }, 1024)]),
                        _: 1
                    }), w(r, {
                        label: "Verified",
                        prop: "is_verified",
                        "column-key": "is_verified",
                        filters: [{
                            text: "True",
                            value: "true"
                        }, {
                            text: "False",
                            value: "false"
                        }],
                        width: "100"
                    }), w(r, {
                        label: "Private",
                        prop: "is_private",
                        "column-key": "is_private",
                        filters: [{
                            text: "True",
                            value: "true"
                        }, {
                            text: "False",
                            value: "false"
                        }],
                        width: "100"
                    }), w(r, {
                        prop: "followed_by_viewer",
                        "column-key": "followed_by_viewer",
                        filters: [{
                            text: "True",
                            value: "true"
                        }, {
                            text: "False",
                            value: "false"
                        }],
                        width: "120"
                    }, {
                        header: S(() => [w(u, {
                            effect: "dark",
                            content: "Followed by viewer",
                            placement: "top"
                        }, {
                            default: S(() => [B(" Followed ")]),
                            _: 1
                        })]),
                        _: 1
                    }), oe(s.$slots, "default"), w(c)], 64)
                }
            }
        }),
        Jv = I("br", null, null, -1),
        gl = q({
            __name: "ProfileColumns",
            setup(t) {
                return (e, s) => {
                    const n = rs,
                        r = fo,
                        o = ns;
                    return y(), O(ye, null, [w(n, {
                        sortable: "",
                        "column-key": "media_count",
                        prop: "media_count",
                        label: "Post",
                        width: "100"
                    }, {
                        default: S(i => {
                            var a;
                            return [B(j((a = i.row.media_count) == null ? void 0 : a.toLocaleString()), 1)]
                        }),
                        _: 1
                    }), w(n, {
                        sortable: "",
                        "column-key": "follower_count",
                        prop: "follower_count",
                        label: "Follower",
                        width: "120"
                    }, {
                        default: S(i => {
                            var a;
                            return [B(j((a = i.row.follower_count) == null ? void 0 : a.toLocaleString()), 1)]
                        }),
                        _: 1
                    }), w(n, {
                        sortable: "",
                        "column-key": "following_count",
                        prop: "following_count",
                        label: "Following",
                        width: "120"
                    }, {
                        default: S(i => {
                            var a;
                            return [B(j((a = i.row.following_count) == null ? void 0 : a.toLocaleString()), 1)]
                        }),
                        _: 1
                    }), w(n, {
                        "column-key": "biography",
                        label: "Biography",
                        filters: [{
                            text: "Has Biography",
                            value: "true"
                        }, {
                            text: "No Biography",
                            value: "false"
                        }],
                        width: "200"
                    }, {
                        default: S(i => [w(o, {
                            content: i.row.biography
                        }, {
                            default: S(() => [w(r, {
                                class: "w-200px",
                                truncated: ""
                            }, {
                                default: S(() => [B(j(i.row.biography), 1)]),
                                _: 2
                            }, 1024)]),
                            _: 2
                        }, 1032, ["content"])]),
                        _: 1
                    }), w(n, {
                        "column-key": "contact",
                        label: "Contact",
                        filters: [{
                            text: "hasEmail",
                            value: "hasEmail"
                        }, {
                            text: "hasPhone",
                            value: "hasPhone"
                        }],
                        width: "240",
                        fixed: l(Et).name === "InsE"
                    }, {
                        default: S(i => [B(j(i.row.public_email) + " ", 1), Jv, B(" " + j(i.row.contact_phone_number), 1)]),
                        _: 1
                    }, 8, ["fixed"])], 64)
                }
            }
        }),
        Kv = {
            class: "w-100% px-10 py-2"
        },
        vl = q({
            __name: "SacleFilter",
            props: {
                scaleRule: {}
            },
            setup(t) {
                const e = t,
                    s = U(() => Object.values(e.scaleRule).filter(a => a[0] || a[1]).length),
                    n = L(!1),
                    r = ss([{
                        label: "Post Count",
                        field: "media_count",
                        value: [null, null]
                    }, {
                        label: "Follower Count",
                        field: "follower_count",
                        value: [null, null]
                    }, {
                        label: "Following Count",
                        field: "following_count",
                        value: [null, null]
                    }, {
                        label: "Follow Rate",
                        field: "follow_rate",
                        value: [null, null]
                    }]);

                function o() {
                    r.forEach(a => {
                        (a.value[0] || a.value[1]) && (e.scaleRule[a.field] = [...a.value])
                    }), n.value = !1
                }

                function i() {
                    r.forEach(a => {
                        const u = e.scaleRule[a.field];
                        a.value = u ? [...u] : [null, null]
                    }), n.value = !0
                }
                return (a, u) => {
                    const c = Fe,
                        d = dc,
                        f = io,
                        h = uo,
                        p = lo,
                        _ = Wn,
                        v = zn,
                        m = ao,
                        T = Gn;
                    return y(), O(ye, null, [w(d, {
                        value: l(s),
                        hidden: !l(s)
                    }, {
                        default: S(() => [w(c, {
                            onClick: i
                        }, {
                            default: S(() => [B("Scale Filter")]),
                            _: 1
                        })]),
                        _: 1
                    }, 8, ["value", "hidden"]), w(T, {
                        modelValue: l(n),
                        "onUpdate:modelValue": u[0] || (u[0] = k => Ke(n) ? n.value = k : null),
                        title: "Scale Filter",
                        direction: "rtl",
                        size: "30%",
                        "append-to-body": !0
                    }, {
                        default: S(() => [w(v, {
                            model: l(r),
                            "label-width": "150px"
                        }, {
                            default: S(() => [(y(!0), O(ye, null, Ot(l(r), k => (y(), N(_, {
                                label: k.label
                            }, {
                                default: S(() => [w(p, {
                                    align: "middle"
                                }, {
                                    default: S(() => [w(h, {
                                        span: 8
                                    }, {
                                        default: S(() => [w(f, {
                                            modelValue: k.value[0],
                                            "onUpdate:modelValue": g => k.value[0] = g
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])]),
                                        _: 2
                                    }, 1024), w(h, {
                                        span: 2,
                                        class: "text-center"
                                    }, {
                                        default: S(() => [B("-")]),
                                        _: 1
                                    }), w(h, {
                                        span: 8
                                    }, {
                                        default: S(() => [w(f, {
                                            modelValue: k.value[1],
                                            "onUpdate:modelValue": g => k.value[1] = g
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])]),
                                        _: 2
                                    }, 1024)]),
                                    _: 2
                                }, 1024)]),
                                _: 2
                            }, 1032, ["label"]))), 256))]),
                            _: 1
                        }, 8, ["model"]), I("div", Kv, [w(c, {
                            class: "w-100%",
                            type: "primary",
                            onClick: o
                        }, {
                            default: S(() => [B("Filter")]),
                            _: 1
                        }), w(m, {
                            class: "mt-10",
                            closable: !1,
                            title: "Tips",
                            type: "success",
                            description: "Follow Rate = Following / Followers"
                        })])]),
                        _: 1
                    }, 8, ["modelValue"])], 64)
                }
            }
        }),
        Qv = {
            key: 0
        },
        Zv = {
            key: 1
        },
        Xv = q({
            __name: "GiveawayButton",
            props: {
                items: {
                    type: Array,
                    default: []
                },
                dataType: {
                    type: String,
                    default: "Comment"
                }
            },
            setup(t) {
                const e = t;

                function s(a) {
                    return a[Math.floor(Math.random() * a.length)]
                }
                const n = L(!1),
                    r = L({}),
                    o = L(0);

                function i(a) {
                    if (a === "fromUsers") {
                        let u = {};
                        e.items.forEach(d => {
                            u[d.owner_id] = d
                        });
                        const c = Object.values(u);
                        r.value = s(c), n.value = !0, o.value = c.length
                    } else r.value = s(e.items), n.value = !0, o.value = 0;
                    fe.track("Random Pick", {
                        cmd: a,
                        total: e.items.length
                    })
                }
                return (a, u) => {
                    const c = Pe,
                        d = Fe,
                        f = Yn,
                        h = Bn,
                        p = Vn,
                        _ = _l,
                        v = Bo,
                        m = Uo,
                        T = xs;
                    return y(), O(ye, null, [l(Et).name == "InsC" ? (y(), N(p, {
                        key: 0,
                        onCommand: i
                    }, {
                        dropdown: S(() => [w(h, null, {
                            default: S(() => [w(f, {
                                command: "fromComments"
                            }, {
                                default: S(() => [B("From Comments")]),
                                _: 1
                            }), w(f, {
                                command: "fromUsers"
                            }, {
                                default: S(() => [B("From Distinct Users")]),
                                _: 1
                            })]),
                            _: 1
                        })]),
                        default: S(() => [w(d, null, {
                            default: S(() => [B(" Random Pick"), w(c, {
                                class: "el-icon--right"
                            }, {
                                default: S(() => [w(l(qn))]),
                                _: 1
                            })]),
                            _: 1
                        })]),
                        _: 1
                    })) : Y("", !0), l(Et).name == "InsL" ? (y(), N(d, {
                        key: 1,
                        onClick: u[0] || (u[0] = k => i("fromLikes"))
                    }, {
                        default: S(() => [B("Random Pick")]),
                        _: 1
                    })) : Y("", !0), w(T, {
                        modelValue: l(n),
                        "onUpdate:modelValue": u[1] || (u[1] = k => Ke(n) ? n.value = k : null),
                        title: "Random Pick",
                        width: "90%",
                        "append-to-body": ""
                    }, {
                        default: S(() => [l(o) ? (y(), O("div", Qv, "Pick from " + j(l(o)) + " distinct users", 1)) : (y(), O("div", Zv, "Pick from " + j(e.items.length) + " " + j(e.dataType.toLowerCase()) + "s", 1)), w(m, {
                            items: [l(r)]
                        }, {
                            default: S(() => [e.dataType === "Comment" ? (y(), N(_, {
                                key: 0
                            })) : Y("", !0), e.dataType === "Like" ? (y(), N(v, {
                                key: 1
                            })) : Y("", !0)]),
                            _: 1
                        }, 8, ["items"])]),
                        _: 1
                    }, 8, ["modelValue"])], 64)
                }
            }
        }),
        ey = {
            class: "flex justify-end mt-12"
        },
        yl = q({
            __name: "DownloadPanel",
            props: {
                items: {},
                type: {},
                desc: {}
            },
            setup(t) {
                const e = t,
                    s = L(!1),
                    n = {
                        user: ["id", "username", "full_name", "profile_pic_url", "is_verified"],
                        comment: ["id", "username", "owner_id", "profile_pic_url", "text", "created_at"],
                        post: ["id", "shortcode", "owner_id", "text", "comment_count", "like_count", "created_at"]
                    },
                    r = ct("downloadConfig", {
                        format: "CSV",
                        addProfileUrl: !1,
                        isDistinctMode: !1,
                        formatDate: !1,
                        batchSize: 5e4
                    }),
                    o = U(() => ["Follower", "Following", "Like", "Customized"].includes(e.type) ? "user" : ["Comment"].includes(e.type) ? "comment" : ["Hashtag", "Location"].includes(e.type) ? "post" : "user"),
                    i = L(!1);
                async function a() {
                    i.value = !0, e.items.length <= 5e4 && (r.value.batchSize = 5e4), u(e.items), i.value = !1
                }

                function u(f) {
                    const h = r.value.batchSize;
                    f.length <= h ? c(f) : (c(f.slice(0, h)), u(f.slice(h)))
                }

                function c(f) {
                    const h = r.value.format,
                        p = n[o.value];
                    p.includes("owner_id") && r.value.isDistinctMode && (f = Object.values(f.reduce((T, k) => (T[k.owner_id] = k, T), {}))), p.includes("created_at") && r.value.formatDate && (f = f.map(T => (T.created_at_formated = new Date(T.created_at * 1e3).toLocaleString(), T))), p.includes("username") && r.value.addProfileUrl && (f = f.map(T => (T.profile_url = "https://www.instagram.com/" + T.username, T)));
                    let _ = new Date().toLocaleDateString("en-CA").replaceAll("-", "");
                    const v = r.value.isDistinctMode ? `_${f.length}` : "",
                        m = `${e.desc}${v}_${_}_by_${Et.name}.${h.toLowerCase()}`;
                    if (h == "JSON") d(JSON.stringify(f), m);
                    else {
                        const T = gs.json_to_sheet(f, {
                                header: n[o.value]
                            }),
                            k = gs.book_new();
                        gs.book_append_sheet(k, T, "Data"), Bi(k, m)
                    }
                    fe.track("Downloaded", {
                        total: f.length,
                        format: h,
                        desc: e.desc
                    })
                }

                function d(f, h = "download", p = !0) {
                    const _ = "data:text/json;charset=utf-8," + encodeURIComponent(f),
                        v = document.createElement("a");
                    v.href = _, v.download = h, v.setAttribute("style", "visibility:hidden"), document.body.appendChild(v), v.dispatchEvent(new MouseEvent("click", {
                        bubbles: !1,
                        cancelable: !1,
                        view: window
                    })), document.body.removeChild(v)
                }
                return (f, h) => {
                    const p = Fe,
                        _ = ea,
                        v = Xi,
                        m = Wn,
                        T = oa,
                        k = io,
                        g = zn,
                        C = xs,
                        x = sn;
                    return y(), O(ye, null, [w(p, {
                        onClick: h[0] || (h[0] = $ => s.value = !0)
                    }, {
                        default: S(() => [B(" Download ")]),
                        _: 1
                    }), w(C, {
                        modelValue: l(s),
                        "onUpdate:modelValue": h[7] || (h[7] = $ => Ke(s) ? s.value = $ : null),
                        title: "Download Configuration",
                        width: "40%"
                    }, {
                        default: S(() => [De((y(), O("div", null, [w(g, {
                            model: l(r),
                            "label-position": "top"
                        }, {
                            default: S(() => [w(m, {
                                label: "Format"
                            }, {
                                default: S(() => [w(v, {
                                    modelValue: l(r).format,
                                    "onUpdate:modelValue": h[1] || (h[1] = $ => l(r).format = $)
                                }, {
                                    default: S(() => [w(_, {
                                        label: "CSV"
                                    }), w(_, {
                                        label: "XLSX"
                                    }), w(_, {
                                        label: "JSON"
                                    })]),
                                    _: 1
                                }, 8, ["modelValue"])]),
                                _: 1
                            }), l(o) != "post" ? (y(), N(m, {
                                key: 0,
                                label: "Add Profile Url"
                            }, {
                                default: S(() => [w(T, {
                                    modelValue: l(r).addProfileUrl,
                                    "onUpdate:modelValue": h[2] || (h[2] = $ => l(r).addProfileUrl = $)
                                }, null, 8, ["modelValue"])]),
                                _: 1
                            })) : Y("", !0), l(o) != "user" ? (y(), N(m, {
                                key: 1,
                                label: "Distinct User Mode"
                            }, {
                                default: S(() => [w(T, {
                                    modelValue: l(r).isDistinctMode,
                                    "onUpdate:modelValue": h[3] || (h[3] = $ => l(r).isDistinctMode = $)
                                }, null, 8, ["modelValue"])]),
                                _: 1
                            })) : Y("", !0), l(o) != "user" ? (y(), N(m, {
                                key: 2,
                                label: "Format Date"
                            }, {
                                default: S(() => [w(T, {
                                    modelValue: l(r).formatDate,
                                    "onUpdate:modelValue": h[4] || (h[4] = $ => l(r).formatDate = $)
                                }, null, 8, ["modelValue"])]),
                                _: 1
                            })) : Y("", !0), e.items.length > 5e4 ? (y(), N(m, {
                                key: 3,
                                label: "Batch Download"
                            }, {
                                default: S(() => [w(k, {
                                    modelValue: l(r).batchSize,
                                    "onUpdate:modelValue": h[5] || (h[5] = $ => l(r).batchSize = $),
                                    placeholder: "Batch size"
                                }, null, 8, ["modelValue"])]),
                                _: 1
                            })) : Y("", !0)]),
                            _: 1
                        }, 8, ["model"]), I("div", ey, [w(p, {
                            onClick: h[6] || (h[6] = $ => s.value = !1)
                        }, {
                            default: S(() => [B("Cancel")]),
                            _: 1
                        }), w(p, {
                            type: "primary",
                            onClick: a
                        }, {
                            default: S(() => [B(" Confirm ")]),
                            _: 1
                        })])])), [
                            [x, l(i)]
                        ])]),
                        _: 1
                    }, 8, ["modelValue"])], 64)
                }
            }
        }),
        bl = q({
            __name: "ActionButtons",
            props: {
                items: {}
            },
            emits: ["pauseCurrentTasks"],
            setup(t, {
                emit: e
            }) {
                const s = t;
                async function n(r) {
                    e("pauseCurrentTasks"), ie.alert("Current task is paused to avoid requesting frequently.", "Warning", {
                        showClose: !1
                    });
                    const o = Array.from(new Set(s.items.map(u => u.owner_id || u.id))),
                        a = {
                            uuid: En(),
                            cmd: r,
                            targets: o,
                            current: 0,
                            total: o.length,
                            isCompleted: !1,
                            requestLogs: []
                        };
                    Pu(a)
                }
                return (r, o) => {
                    const i = Pe,
                        a = Fe,
                        u = Yn,
                        c = Bn,
                        d = Vn;
                    return y(), N(d, {
                        onCommand: n
                    }, {
                        dropdown: S(() => [w(c, null, {
                            default: S(() => [w(u, {
                                command: "getProfile"
                            }, {
                                default: S(() => [B("Get Profile")]),
                                _: 1
                            }), w(u, {
                                command: "likeRecentPost"
                            }, {
                                default: S(() => [B("Like user's Recent Post")]),
                                _: 1
                            }), w(u, {
                                command: "follow"
                            }, {
                                default: S(() => [B("Follow")]),
                                _: 1
                            }), w(u, {
                                command: "unfollow"
                            }, {
                                default: S(() => [B("Unfollow")]),
                                _: 1
                            }), w(u, {
                                command: "removeFollower"
                            }, {
                                default: S(() => [B("Remove Follower")]),
                                _: 1
                            })]),
                            _: 1
                        })]),
                        default: S(() => [w(a, null, {
                            default: S(() => [B(" Actions"), w(i, {
                                class: "el-icon--right"
                            }, {
                                default: S(() => [w(l(qn))]),
                                _: 1
                            })]),
                            _: 1
                        })]),
                        _: 1
                    })
                }
            }
        }),
        ty = {
            key: 0
        },
        sy = {
            class: "text-xs"
        },
        ny = {
            class: "text-xs"
        },
        ry = {
            class: "text-xs"
        },
        oy = {
            key: 1
        },
        iy = {
            class: "text-xs"
        },
        ay = {
            class: "text-xs"
        },
        ly = q({
            __name: "ShowLogsButton",
            props: {
                task: {}
            },
            setup(t) {
                const e = t,
                    s = L(!1);
                return (n, r) => {
                    const o = Fe,
                        i = Ss,
                        a = Yi,
                        u = xs;
                    return y(), O(ye, null, [w(o, {
                        onClick: r[0] || (r[0] = c => s.value = !0)
                    }, {
                        default: S(() => [B("Show Logs")]),
                        _: 1
                    }), w(u, {
                        class: "text-left",
                        modelValue: l(s),
                        "onUpdate:modelValue": r[1] || (r[1] = c => Ke(s) ? s.value = c : null),
                        title: "Logs",
                        width: "50%",
                        "append-to-body": !0
                    }, {
                        default: S(() => [w(a, {
                            height: "400px"
                        }, {
                            default: S(() => [(y(!0), O(ye, null, Ot(e.task.requestLogs, c => (y(), O("div", null, [c.hasOwnProperty("startFrom") ? (y(), O("div", ty, [I("div", sy, "[" + j(c.statusCode) + "] count: " + j(c.dataCount), 1), I("div", ny, j(n.task.type) + " | " + j(n.task.target) + " | " + j(c.createdAt), 1), I("div", ry, "startFrom: " + j(c.startFrom), 1)])) : (y(), O("div", oy, [I("div", iy, "[" + j(c.statusCode) + "]", 1), I("div", ay, j(n.task.subTask || n.task.cmd) + " | " + j(c.target) + " | " + j(c.createdAt), 1)])), w(i, {
                                class: "my-2"
                            })]))), 256))]),
                            _: 1
                        })]),
                        _: 1
                    }, 8, ["modelValue"])], 64)
                }
            }
        });
    var ht = {
        exports: {}
    };
    const uy = (t, e) => Math.floor(Math.random() * (e - t + 1) + t),
        Si = () => {
            const t = new Error("Delay aborted");
            return t.name = "AbortError", t
        },
        Ti = ({
            clearTimeout: t,
            setTimeout: e,
            willResolve: s
        }) => (n, {
            value: r,
            signal: o
        } = {}) => {
            if (o && o.aborted) return Promise.reject(Si());
            let i, a, u;
            const c = t || clearTimeout,
                d = () => {
                    c(i), u(Si())
                },
                f = () => {
                    o && o.removeEventListener("abort", d)
                },
                h = new Promise((p, _) => {
                    a = () => {
                        f(), s ? p(r) : _(r)
                    }, u = _, i = (e || setTimeout)(a, n)
                });
            return o && o.addEventListener("abort", d, {
                once: !0
            }), h.clear = () => {
                c(i), i = null, a()
            }, h
        },
        wl = t => {
            const e = Ti({
                ...t,
                willResolve: !0
            });
            return e.reject = Ti({
                ...t,
                willResolve: !1
            }), e.range = (s, n, r) => e(uy(s, n), r), e
        },
        Vo = wl();
    Vo.createWithTimers = wl;
    ht.exports = Vo;
    ht.exports.default = Vo;
    const cy = {
            key: 0,
            class: "text-xs"
        },
        dy = {
            key: 1,
            class: "text-xs"
        },
        fy = I("div", {
            class: "ml-2"
        }, "Steps", -1),
        hy = I("div", {
            class: "ml-2 c-gray"
        }, "( One data request means one step. )", -1),
        my = I("div", {
            class: "ml-2"
        }, "Hours", -1),
        py = I("div", {
            class: "ml-2 c-gray"
        }, "( When an error pause the task. )", -1),
        _y = q({
            __name: "ToggleStartButton",
            props: {
                isPaused: {
                    type: Boolean
                }
            },
            emits: ["pauseTask", "resumeTask"],
            setup(t, {
                expose: e,
                emit: s
            }) {
                const n = t,
                    r = ct("ToggleStartConfig", {
                        pauseAfterXSteps: 0,
                        resumeAfterXHours: 0
                    });
                e({
                    onRequested: u,
                    onRequestedError: d,
                    toggleStartConfig: r
                });
                const o = L(!1);

                function i() {
                    n.isPaused ? s("resumeTask") : s("pauseTask"), a.value = 0, f()
                }
                const a = L(0);

                function u() {
                    r.value.pauseAfterXSteps && (a.value || (a.value = r.value.pauseAfterXSteps), a.value -= 1, a.value == 0 && s("pauseTask"))
                }
                const c = L(0);
                async function d() {
                    const h = r.value.resumeAfterXHours;
                    if (h) {
                        const p = new Date().getTime(),
                            _ = h * 3600 * 1e3;
                        c.value = p + _, await ht.exports(_), c && s("resumeTask"), f()
                    }
                }

                function f() {
                    c.value = 0
                }
                return (h, p) => {
                    const _ = Fe,
                        v = Mu,
                        m = na,
                        T = Wn,
                        k = zn,
                        g = xs;
                    return y(), O(ye, null, [l(Et).name == "InsTF" ? (y(), N(_, {
                        key: 0,
                        type: "primary",
                        onClick: i
                    }, {
                        default: S(() => [B(j(n.isPaused ? "Resume" : "Pause"), 1)]),
                        _: 1
                    })) : (y(), N(v, {
                        key: 1
                    }, {
                        default: S(() => [w(_, {
                            type: "primary",
                            onClick: i
                        }, {
                            default: S(() => [B(j(n.isPaused ? "Resume" : "Pause") + " ", 1)]),
                            _: 1
                        }), w(_, {
                            type: "primary",
                            icon: l(Du),
                            onClick: p[0] || (p[0] = C => o.value = !0)
                        }, {
                            default: S(() => [!n.isPaused && l(r).pauseAfterXSteps && l(a) ? (y(), O("span", cy, "Will pause after " + j(l(a)) + " steps", 1)) : Y("", !0), n.isPaused && l(r).resumeAfterXHours && l(c) ? (y(), O("span", dy, "Will resume " + j(l(Ru)(l(c)).value), 1)) : Y("", !0)]),
                            _: 1
                        }, 8, ["icon"])]),
                        _: 1
                    })), w(g, {
                        class: "text-left",
                        modelValue: l(o),
                        "onUpdate:modelValue": p[4] || (p[4] = C => Ke(o) ? o.value = C : null),
                        title: "Config",
                        width: "50%",
                        "append-to-body": !0
                    }, {
                        default: S(() => [w(k, {
                            size: "small",
                            "label-position": "left",
                            "label-width": "100px"
                        }, {
                            default: S(() => [w(T, {
                                label: "Pause After"
                            }, {
                                default: S(() => [w(m, {
                                    modelValue: l(r).pauseAfterXSteps,
                                    "onUpdate:modelValue": p[1] || (p[1] = C => l(r).pauseAfterXSteps = C),
                                    min: 0,
                                    onChange: p[2] || (p[2] = C => a.value = 0)
                                }, null, 8, ["modelValue"]), fy, hy]),
                                _: 1
                            }), w(T, {
                                label: "Resume After"
                            }, {
                                default: S(() => [w(m, {
                                    modelValue: l(r).resumeAfterXHours,
                                    "onUpdate:modelValue": p[3] || (p[3] = C => l(r).resumeAfterXHours = C),
                                    min: 0,
                                    onChange: f
                                }, null, 8, ["modelValue"]), my, py]),
                                _: 1
                            })]),
                            _: 1
                        })]),
                        _: 1
                    }, 8, ["modelValue"])], 64)
                }
            }
        }),
        gy = {
            class: "text-center"
        },
        vy = {
            key: 0,
            class: "m-2 c-gray"
        },
        yy = {
            key: 0
        },
        by = {
            class: "flex items-center justify-center m-2"
        },
        wy = ["src"],
        ky = {
            class: "text-base"
        },
        Sy = {
            key: 1
        },
        Ty = {
            class: "flex items-center"
        },
        xy = I("span", {
            class: "text-base mr-2"
        }, "Speed: ", -1),
        Ay = I("span", {
            class: "text-base ml-2"
        }, "seconds / request", -1),
        Cy = I("div", {
            class: "mt-4"
        }, "Too fast will get 429/400 limit of Instagram. ", -1),
        $y = I("a", {
            class: "c-gray",
            size: "small",
            href: "https://listmore.notion.site/622eeac8bfe44a14aefaba5a41797dbc",
            target: "_blank",
            underline: !1
        }, "More details", -1),
        Ey = {
            key: 2
        },
        Wo = q({
            __name: "TaskProgress",
            props: {
                task: {},
                queue: {}
            },
            setup(t, {
                expose: e
            }) {
                const s = t,
                    n = ct("intervalSecond", 1),
                    r = U(() => s.task.total == 0 ? 0 : s.task.current > s.task.total ? 100 : Math.round(s.task.current / s.task.total * 100)),
                    o = L(!1),
                    i = se.exports.runtime.getURL("assets/dots-loading.gif"),
                    a = L({});
                return e({
                    isPaused: o,
                    ToggleStartButtonRef: a,
                    intervalSecond: n
                }), (u, c) => {
                    const d = Ud,
                        f = _y,
                        h = Fe,
                        p = na,
                        _ = ra,
                        v = ly,
                        m = co;
                    return y(), O("div", gy, [s.task.type ? (y(), O("div", vy, [B(" Fetching " + j(s.task.type), 1), s.task.target ? (y(), O("span", yy, ": " + j(s.task.username || s.task.target), 1)) : Y("", !0)])) : Y("", !0), I("div", by, [l(o) || s.task.isCompleted ? Y("", !0) : (y(), O("img", {
                        key: 0,
                        src: l(i),
                        width: "25",
                        class: "mr-2"
                    }, null, 8, wy)), I("div", ky, j(s.task.current.toLocaleString()) + " / " + j(s.task.total.toLocaleString()), 1)]), s.task.isCompleted ? (y(), O("div", Ey, [w(m, {
                        warp: "",
                        class: "m-4"
                    }, {
                        default: S(() => [w(h, {
                            type: "primary",
                            disabled: ""
                        }, {
                            default: S(() => [B("Completed")]),
                            _: 1
                        }), l(Et).name != "InsTF" ? (y(), N(v, {
                            key: 0,
                            task: s.task
                        }, null, 8, ["task"])) : Y("", !0)]),
                        _: 1
                    })])) : (y(), O("div", Sy, [w(d, {
                        "text-inside": !0,
                        "stroke-width": 24,
                        percentage: l(r)
                    }, null, 8, ["percentage"]), w(m, {
                        warp: "",
                        class: "m-4"
                    }, {
                        default: S(() => [w(f, {
                            ref_key: "ToggleStartButtonRef",
                            ref: a,
                            "is-paused": l(o),
                            onPauseTask: c[0] || (c[0] = T => {
                                o.value = !0, s.queue.pause()
                            }),
                            onResumeTask: c[1] || (c[1] = T => {
                                o.value = !1, s.queue.start()
                            })
                        }, null, 8, ["is-paused"]), w(_, {
                            placement: "bottom",
                            width: 400,
                            trigger: "hover"
                        }, {
                            reference: S(() => [w(h, {
                                plain: ""
                            }, {
                                default: S(() => [B("Speed: " + j(l(n)) + "s / req", 1)]),
                                _: 1
                            })]),
                            default: S(() => [I("div", Ty, [xy, w(p, {
                                size: "small",
                                "model-value": l(n),
                                min: 0,
                                onChange: c[2] || (c[2] = T => {
                                    n.value = T || 0
                                })
                            }, null, 8, ["model-value"]), Ay]), Cy, $y]),
                            _: 1
                        }), l(Et).name != "InsTF" ? (y(), N(v, {
                            key: 0,
                            task: s.task
                        }, null, 8, ["task"])) : Y("", !0)]),
                        _: 1
                    })]))])
                }
            }
        });
    var kl = {
        exports: {}
    };
    (function(t) {
        var e = Object.prototype.hasOwnProperty,
            s = "~";

        function n() {}
        Object.create && (n.prototype = Object.create(null), new n().__proto__ || (s = !1));

        function r(u, c, d) {
            this.fn = u, this.context = c, this.once = d || !1
        }

        function o(u, c, d, f, h) {
            if (typeof d != "function") throw new TypeError("The listener must be a function");
            var p = new r(d, f || u, h),
                _ = s ? s + c : c;
            return u._events[_] ? u._events[_].fn ? u._events[_] = [u._events[_], p] : u._events[_].push(p) : (u._events[_] = p, u._eventsCount++), u
        }

        function i(u, c) {
            --u._eventsCount === 0 ? u._events = new n : delete u._events[c]
        }

        function a() {
            this._events = new n, this._eventsCount = 0
        }
        a.prototype.eventNames = function() {
            var c = [],
                d, f;
            if (this._eventsCount === 0) return c;
            for (f in d = this._events) e.call(d, f) && c.push(s ? f.slice(1) : f);
            return Object.getOwnPropertySymbols ? c.concat(Object.getOwnPropertySymbols(d)) : c
        }, a.prototype.listeners = function(c) {
            var d = s ? s + c : c,
                f = this._events[d];
            if (!f) return [];
            if (f.fn) return [f.fn];
            for (var h = 0, p = f.length, _ = new Array(p); h < p; h++) _[h] = f[h].fn;
            return _
        }, a.prototype.listenerCount = function(c) {
            var d = s ? s + c : c,
                f = this._events[d];
            return f ? f.fn ? 1 : f.length : 0
        }, a.prototype.emit = function(c, d, f, h, p, _) {
            var v = s ? s + c : c;
            if (!this._events[v]) return !1;
            var m = this._events[v],
                T = arguments.length,
                k, g;
            if (m.fn) {
                switch (m.once && this.removeListener(c, m.fn, void 0, !0), T) {
                    case 1:
                        return m.fn.call(m.context), !0;
                    case 2:
                        return m.fn.call(m.context, d), !0;
                    case 3:
                        return m.fn.call(m.context, d, f), !0;
                    case 4:
                        return m.fn.call(m.context, d, f, h), !0;
                    case 5:
                        return m.fn.call(m.context, d, f, h, p), !0;
                    case 6:
                        return m.fn.call(m.context, d, f, h, p, _), !0
                }
                for (g = 1, k = new Array(T - 1); g < T; g++) k[g - 1] = arguments[g];
                m.fn.apply(m.context, k)
            } else {
                var C = m.length,
                    x;
                for (g = 0; g < C; g++) switch (m[g].once && this.removeListener(c, m[g].fn, void 0, !0), T) {
                    case 1:
                        m[g].fn.call(m[g].context);
                        break;
                    case 2:
                        m[g].fn.call(m[g].context, d);
                        break;
                    case 3:
                        m[g].fn.call(m[g].context, d, f);
                        break;
                    case 4:
                        m[g].fn.call(m[g].context, d, f, h);
                        break;
                    default:
                        if (!k)
                            for (x = 1, k = new Array(T - 1); x < T; x++) k[x - 1] = arguments[x];
                        m[g].fn.apply(m[g].context, k)
                }
            }
            return !0
        }, a.prototype.on = function(c, d, f) {
            return o(this, c, d, f, !1)
        }, a.prototype.once = function(c, d, f) {
            return o(this, c, d, f, !0)
        }, a.prototype.removeListener = function(c, d, f, h) {
            var p = s ? s + c : c;
            if (!this._events[p]) return this;
            if (!d) return i(this, p), this;
            var _ = this._events[p];
            if (_.fn) _.fn === d && (!h || _.once) && (!f || _.context === f) && i(this, p);
            else {
                for (var v = 0, m = [], T = _.length; v < T; v++)(_[v].fn !== d || h && !_[v].once || f && _[v].context !== f) && m.push(_[v]);
                m.length ? this._events[p] = m.length === 1 ? m[0] : m : i(this, p)
            }
            return this
        }, a.prototype.removeAllListeners = function(c) {
            var d;
            return c ? (d = s ? s + c : c, this._events[d] && i(this, d)) : (this._events = new n, this._eventsCount = 0), this
        }, a.prototype.off = a.prototype.removeListener, a.prototype.addListener = a.prototype.on, a.prefixed = s, a.EventEmitter = a, t.exports = a
    })(kl);
    const Iy = kl.exports;
    class Sl extends Error {
        constructor(e) {
            super(e), this.name = "TimeoutError"
        }
    }
    class Oy extends Error {
        constructor(e) {
            super(), this.name = "AbortError", this.message = e
        }
    }
    const xi = t => globalThis.DOMException === void 0 ? new Oy(t) : new DOMException(t),
        Ai = t => {
            const e = t.reason === void 0 ? xi("This operation was aborted.") : t.reason;
            return e instanceof Error ? e : xi(e)
        };

    function Py(t, e, s, n) {
        let r;
        const o = new Promise((i, a) => {
            if (typeof e != "number" || Math.sign(e) !== 1) throw new TypeError(`Expected \`milliseconds\` to be a positive number, got \`${e}\``);
            if (e === Number.POSITIVE_INFINITY) {
                i(t);
                return
            }
            if (n = {
                    customTimers: {
                        setTimeout,
                        clearTimeout
                    },
                    ...n
                }, n.signal) {
                const {
                    signal: u
                } = n;
                u.aborted && a(Ai(u)), u.addEventListener("abort", () => {
                    a(Ai(u))
                })
            }
            r = n.customTimers.setTimeout.call(void 0, () => {
                if (typeof s == "function") {
                    try {
                        i(s())
                    } catch (d) {
                        a(d)
                    }
                    return
                }
                const u = typeof s == "string" ? s : `Promise timed out after ${e} milliseconds`,
                    c = s instanceof Error ? s : new Sl(u);
                typeof t.cancel == "function" && t.cancel(), a(c)
            }, e), (async () => {
                try {
                    i(await t)
                } catch (u) {
                    a(u)
                } finally {
                    n.customTimers.clearTimeout.call(void 0, r)
                }
            })()
        });
        return o.clear = () => {
            clearTimeout(r), r = void 0
        }, o
    }

    function Dy(t, e, s) {
        let n = 0,
            r = t.length;
        for (; r > 0;) {
            const o = Math.trunc(r / 2);
            let i = n + o;
            s(t[i], e) <= 0 ? (n = ++i, r -= o + 1) : r = o
        }
        return n
    }
    var qt = globalThis && globalThis.__classPrivateFieldGet || function(t, e, s, n) {
            if (s === "a" && !n) throw new TypeError("Private accessor was defined without a getter");
            if (typeof e == "function" ? t !== e || !n : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return s === "m" ? n : s === "a" ? n.call(t) : n ? n.value : e.get(t)
        },
        Tt;
    class Ry {
        constructor() {
            Tt.set(this, [])
        }
        enqueue(e, s) {
            s = {
                priority: 0,
                ...s
            };
            const n = {
                priority: s.priority,
                run: e
            };
            if (this.size && qt(this, Tt, "f")[this.size - 1].priority >= s.priority) {
                qt(this, Tt, "f").push(n);
                return
            }
            const r = Dy(qt(this, Tt, "f"), n, (o, i) => i.priority - o.priority);
            qt(this, Tt, "f").splice(r, 0, n)
        }
        dequeue() {
            const e = qt(this, Tt, "f").shift();
            return e == null ? void 0 : e.run
        }
        filter(e) {
            return qt(this, Tt, "f").filter(s => s.priority === e.priority).map(s => s.run)
        }
        get size() {
            return qt(this, Tt, "f").length
        }
    }
    Tt = new WeakMap;
    var Se = globalThis && globalThis.__classPrivateFieldSet || function(t, e, s, n, r) {
            if (n === "m") throw new TypeError("Private method is not writable");
            if (n === "a" && !r) throw new TypeError("Private accessor was defined without a setter");
            if (typeof e == "function" ? t !== e || !r : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
            return n === "a" ? r.call(t, s) : r ? r.value = s : e.set(t, s), s
        },
        K = globalThis && globalThis.__classPrivateFieldGet || function(t, e, s, n) {
            if (s === "a" && !n) throw new TypeError("Private accessor was defined without a getter");
            if (typeof e == "function" ? t !== e || !n : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return s === "m" ? n : s === "a" ? n.call(t) : n ? n.value : e.get(t)
        },
        Te, zs, Hs, Yt, Nn, Gs, bn, ot, Fs, He, wn, Ge, qs, jt, kn, Ci, $i, Tl, Ei, Ii, Oi, Sn, Cr, $r, Fn, Tn;
    const My = new Sl;
    class Ly extends Error {}
    class zo extends Iy {
        constructor(e) {
            var s, n, r, o;
            if (super(), Te.add(this), zs.set(this, void 0), Hs.set(this, void 0), Yt.set(this, 0), Nn.set(this, void 0), Gs.set(this, void 0), bn.set(this, 0), ot.set(this, void 0), Fs.set(this, void 0), He.set(this, void 0), wn.set(this, void 0), Ge.set(this, 0), qs.set(this, void 0), jt.set(this, void 0), kn.set(this, void 0), Object.defineProperty(this, "timeout", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }), e = {
                    carryoverConcurrencyCount: !1,
                    intervalCap: Number.POSITIVE_INFINITY,
                    interval: 0,
                    concurrency: Number.POSITIVE_INFINITY,
                    autoStart: !0,
                    queueClass: Ry,
                    ...e
                }, !(typeof e.intervalCap == "number" && e.intervalCap >= 1)) throw new TypeError(`Expected \`intervalCap\` to be a number from 1 and up, got \`${(n=(s=e.intervalCap)===null||s===void 0?void 0:s.toString())!==null&&n!==void 0?n:""}\` (${typeof e.intervalCap})`);
            if (e.interval === void 0 || !(Number.isFinite(e.interval) && e.interval >= 0)) throw new TypeError(`Expected \`interval\` to be a finite number >= 0, got \`${(o=(r=e.interval)===null||r===void 0?void 0:r.toString())!==null&&o!==void 0?o:""}\` (${typeof e.interval})`);
            Se(this, zs, e.carryoverConcurrencyCount, "f"), Se(this, Hs, e.intervalCap === Number.POSITIVE_INFINITY || e.interval === 0, "f"), Se(this, Nn, e.intervalCap, "f"), Se(this, Gs, e.interval, "f"), Se(this, He, new e.queueClass, "f"), Se(this, wn, e.queueClass, "f"), this.concurrency = e.concurrency, this.timeout = e.timeout, Se(this, kn, e.throwOnTimeout === !0, "f"), Se(this, jt, e.autoStart === !1, "f")
        }
        get concurrency() {
            return K(this, qs, "f")
        }
        set concurrency(e) {
            if (!(typeof e == "number" && e >= 1)) throw new TypeError(`Expected \`concurrency\` to be a number from 1 and up, got \`${e}\` (${typeof e})`);
            Se(this, qs, e, "f"), K(this, Te, "m", Fn).call(this)
        }
        async add(e, s = {}) {
            return new Promise((n, r) => {
                const o = async () => {
                    var i, a, u;
                    Se(this, Ge, (a = K(this, Ge, "f"), a++, a), "f"), Se(this, Yt, (u = K(this, Yt, "f"), u++, u), "f");
                    try {
                        if (!((i = s.signal) === null || i === void 0) && i.aborted) {
                            r(new Ly("The task was aborted."));
                            return
                        }
                        const d = await (this.timeout === void 0 && s.timeout === void 0 ? e({
                            signal: s.signal
                        }) : Py(Promise.resolve(e({
                            signal: s.signal
                        })), s.timeout === void 0 ? this.timeout : s.timeout, () => {
                            (s.throwOnTimeout === void 0 ? K(this, kn, "f") : s.throwOnTimeout) && r(My)
                        }));
                        n(d), this.emit("completed", d)
                    } catch (c) {
                        r(c), this.emit("error", c)
                    }
                    K(this, Te, "m", Tl).call(this)
                };
                K(this, He, "f").enqueue(o, s), K(this, Te, "m", Sn).call(this), this.emit("add")
            })
        }
        async addAll(e, s) {
            return Promise.all(e.map(async n => this.add(n, s)))
        }
        start() {
            return K(this, jt, "f") ? (Se(this, jt, !1, "f"), K(this, Te, "m", Fn).call(this), this) : this
        }
        pause() {
            Se(this, jt, !0, "f")
        }
        clear() {
            Se(this, He, new(K(this, wn, "f")), "f")
        }
        async onEmpty() {
            K(this, He, "f").size !== 0 && await K(this, Te, "m", Tn).call(this, "empty")
        }
        async onSizeLessThan(e) {
            K(this, He, "f").size < e || await K(this, Te, "m", Tn).call(this, "next", () => K(this, He, "f").size < e)
        }
        async onIdle() {
            K(this, Ge, "f") === 0 && K(this, He, "f").size === 0 || await K(this, Te, "m", Tn).call(this, "idle")
        }
        get size() {
            return K(this, He, "f").size
        }
        sizeBy(e) {
            return K(this, He, "f").filter(e).length
        }
        get pending() {
            return K(this, Ge, "f")
        }
        get isPaused() {
            return K(this, jt, "f")
        }
    }
    zs = new WeakMap, Hs = new WeakMap, Yt = new WeakMap, Nn = new WeakMap, Gs = new WeakMap, bn = new WeakMap, ot = new WeakMap, Fs = new WeakMap, He = new WeakMap, wn = new WeakMap, Ge = new WeakMap, qs = new WeakMap, jt = new WeakMap, kn = new WeakMap, Te = new WeakSet, Ci = function() {
        return K(this, Hs, "f") || K(this, Yt, "f") < K(this, Nn, "f")
    }, $i = function() {
        return K(this, Ge, "f") < K(this, qs, "f")
    }, Tl = function() {
        var e;
        Se(this, Ge, (e = K(this, Ge, "f"), e--, e), "f"), K(this, Te, "m", Sn).call(this), this.emit("next")
    }, Ei = function() {
        this.emit("empty"), K(this, Ge, "f") === 0 && this.emit("idle")
    }, Ii = function() {
        K(this, Te, "m", $r).call(this), K(this, Te, "m", Cr).call(this), Se(this, Fs, void 0, "f")
    }, Oi = function() {
        const e = Date.now();
        if (K(this, ot, "f") === void 0) {
            const s = K(this, bn, "f") - e;
            if (s < 0) Se(this, Yt, K(this, zs, "f") ? K(this, Ge, "f") : 0, "f");
            else return K(this, Fs, "f") === void 0 && Se(this, Fs, setTimeout(() => {
                K(this, Te, "m", Ii).call(this)
            }, s), "f"), !0
        }
        return !1
    }, Sn = function() {
        if (K(this, He, "f").size === 0) return K(this, ot, "f") && clearInterval(K(this, ot, "f")), Se(this, ot, void 0, "f"), K(this, Te, "m", Ei).call(this), !1;
        if (!K(this, jt, "f")) {
            const e = !K(this, Te, "a", Oi);
            if (K(this, Te, "a", Ci) && K(this, Te, "a", $i)) {
                const s = K(this, He, "f").dequeue();
                return s ? (this.emit("active"), s(), e && K(this, Te, "m", Cr).call(this), !0) : !1
            }
        }
        return !1
    }, Cr = function() {
        K(this, Hs, "f") || K(this, ot, "f") !== void 0 || (Se(this, ot, setInterval(() => {
            K(this, Te, "m", $r).call(this)
        }, K(this, Gs, "f")), "f"), Se(this, bn, Date.now() + K(this, Gs, "f"), "f"))
    }, $r = function() {
        K(this, Yt, "f") === 0 && K(this, Ge, "f") === 0 && K(this, ot, "f") && (clearInterval(K(this, ot, "f")), Se(this, ot, void 0, "f")), Se(this, Yt, K(this, zs, "f") ? K(this, Ge, "f") : 0, "f"), K(this, Te, "m", Fn).call(this)
    }, Fn = function() {
        for (; K(this, Te, "m", Sn).call(this););
    }, Tn = async function(e, s) {
        return new Promise(n => {
            const r = () => {
                s && !s() || (this.off(e, r), n())
            };
            this.on(e, r)
        })
    };
    const xl = q({
            __name: "LoopTaskCore",
            props: {
                task: {},
                checkLimit: {
                    type: Function
                },
                formatItem: {
                    type: Function
                }
            },
            emits: ["updateItems", "completed"],
            setup(t, {
                expose: e,
                emit: s
            }) {
                const n = t,
                    r = new zo({
                        concurrency: 1
                    });
                Ne(async () => {
                    if (!n.task.isCompleted)
                        if (n.task.logs.length) {
                            const p = n.task.logs[n.task.logs.length - 1];
                            p.endCursor ? o(n.task.target, p.endCursor, n.task.type) : (n.task.isCompleted = !0, s("completed"))
                        } else o(n.task.target, "", n.task.type);
                    n.task.requestLogs.length || fe.track("Created Task", st(n.task))
                });

                function o(p, _ = "", v = "Follower", m = 0) {
                    r.add(async () => {
                        const {
                            reachLimit: T
                        } = n.checkLimit(n.task.current, v);
                        if (T) {
                            i(p, _, v);
                            return
                        }
                        let k = 48,
                            g = await Me[`get${v}List`](p, k, _);
                        if (g.statusCode.value === 200 && !g.error.value) {
                            let {
                                edges: C,
                                page_info: x,
                                count: $
                            } = g.data.value, {
                                has_next_page: W,
                                end_cursor: E
                            } = x;
                            if (!n.task.total && $ && (n.task.total = $), C.length) {
                                n.task.current = n.task.current + C.length, s("updateItems", C);
                                const P = await se.exports.storage.local.get(C.map(M => M.id));
                                se.exports.storage.local.set(C.reduce((M, G) => {
                                    const re = n.formatItem ? n.formatItem(G) : G;
                                    return M[G.id] = Object.assign(P[G.id] || {}, re), M
                                }, {})), n.task.updatedAt = new Date().toLocaleString(), n.task.logs.push({
                                    current: n.task.current,
                                    endCursor: E,
                                    itemIds: C.map(M => M.id)
                                })
                            }
                            W ? o(p, E, v) : (n.task.isCompleted = !0, await ht.exports(500), s("completed"))
                        } else g.statusCode.value === 404 ? (n.task.isCompleted = !0, s("completed")) : (i(p, _, v), a(g.statusCode.value, g.data.value), fe.track("InsAPI Error", {
                            targetId: p,
                            type: v,
                            current: n.task.current,
                            total: n.task.total,
                            statusCode: g.statusCode.value,
                            isLogin: !!Me.checkLogin(),
                            intervalSeconds: f.value.intervalSecond,
                            data: st(g.data.value)
                        }));
                        d(), n.task.isCompleted || f.value.ToggleStartButtonRef.onRequested(), n.task.requestLogs.push({
                            statusCode: g.statusCode.value,
                            dataCount: g.data.value && g.data.value.edges ? g.data.value.edges.length : 0,
                            startFrom: _,
                            createdAt: new Date
                        }), await ht.exports(f.value.intervalSecond * 1e3)
                    }, {
                        priority: m
                    })
                }

                function i(p, _, v) {
                    r.pause(), f.value.isPaused = !0, o(p, _, v, 1)
                }

                function a(p, _) {
                    const v = _ ? _.feedback_message || _.message : "maybe caused by too fast requests";
                    Me.checkLogin() ? (ie.alert(`Instagram API error: ${p}, ${v}.`, "Network Error", {
                        showClose: !1
                    }), f.value.ToggleStartButtonRef.onRequestedError()) : ie.confirm("The task can not resume without Instagram login.", "Error", {
                        confirmButtonText: "Login",
                        cancelButtonText: "Cancel",
                        type: "warning"
                    }).then(async () => {
                        window.open("https://www.instagram.com/accounts/login/")
                    }).catch(() => {})
                }
                let u = 0;
                const c = new Date;

                function d() {
                    u = u + 1;
                    let p = (new Date().getTime() - c.getTime()) / 1e3;
                    u === 40 && p < 100 && (f.value.intervalSecond = 36, ie.confirm("To avoid hitting Instagram's API limit, we've set requests to every 36 seconds. ", "Tips", {
                        confirmButtonText: "Check More Details",
                        cancelButtonText: "Cancel"
                    }).then(async () => {
                        window.open("https://faint-plantain-4b6.notion.site/How-to-Export-Large-Amounts-of-Data-a9e2fc300d7341029efe170e7514048c"), fe.track("Check large export guide", {
                            total: n.task.total,
                            type: n.task.type,
                            current: n.task.current
                        })
                    }).catch(() => {}))
                }
                const f = L(null);

                function h() {
                    r.pause(), f.value.isPaused = !0
                }
                return e({
                    queue: r,
                    pauseTask: h
                }), (p, _) => {
                    const v = Wo;
                    return y(), N(v, {
                        ref_key: "TaskProgressRef",
                        ref: f,
                        task: p.task,
                        queue: l(r)
                    }, null, 8, ["task", "queue"])
                }
            }
        }),
        Ny = q({
            __name: "LoopWithSubTaskCore",
            props: {
                task: {},
                checkLimit: {
                    type: Function
                },
                formatItem: {
                    type: Function
                }
            },
            emits: ["updateItem", "completed"],
            setup(t, {
                expose: e,
                emit: s
            }) {
                const n = t,
                    r = new zo({
                        concurrency: 1
                    }),
                    o = L(null),
                    i = U(() => n.task.logs.length ? n.task.logs[n.task.logs.length - 1].endCursor : "");
                Ne(async () => {
                    console.log("loop with subtask core mounted", st(n.task)), n.task.isCompleted ? s("completed") : c(n.task.subTask), n.task.requestLogs.length || fe.track("Created Task", st(n.task))
                });

                function a(k, g = "", C = "Follower", x = 0) {
                    if (!g && n.task.logs.length) {
                        n.task.isCompleted = !0, s("completed");
                        return
                    }
                    r.add(async () => {
                        let $ = 48,
                            W = await Me[`get${C}List`](k, $, g);
                        if (W.statusCode.value === 200 && !W.error.value) {
                            let {
                                edges: E,
                                page_info: P,
                                count: M
                            } = W.data.value, {
                                end_cursor: G
                            } = P;
                            if (!n.task.total && M && (n.task.total = M), E.length) {
                                const re = await se.exports.storage.local.get(E.map(R => R.id));
                                se.exports.storage.local.set(E.reduce((R, b) => {
                                    const A = n.formatItem ? n.formatItem(b) : b;
                                    return R[b.id] = Object.assign(re[b.id] || {}, A), R
                                }, {})), n.task.updatedAt = new Date().toLocaleString(), n.task.logs.push({
                                    current: n.task.current + +E.length,
                                    endCursor: G,
                                    itemIds: E.map(R => R.id)
                                }), n.task.unFinishedIds = E.map(R => R.owner_id || R.id), n.task.unFinishedItems = E, u(n.task.subTask, n.task.unFinishedIds[0], n.task.unFinishedItems[0])
                            }
                        } else W.statusCode.value === 404 ? (n.task.isCompleted = !0, s("completed")) : (h(), a(k, g, C, 1), p(W.statusCode.value, W.data.value), fe.track("InsAPI Error", {
                            targetId: k,
                            type: C,
                            current: n.task.current,
                            total: n.task.total,
                            statusCode: W.statusCode.value,
                            isLogin: !!Me.checkLogin(),
                            intervalSeconds: o.value.intervalSecond,
                            data: st(W.data.value)
                        }));
                        n.task.requestLogs.push({
                            statusCode: W.statusCode.value,
                            dataCount: W.data.value && W.data.value.edges ? W.data.value.edges.length : 0,
                            startFrom: g,
                            createdAt: new Date
                        }), await ht.exports(o.value.intervalSecond * 1e3)
                    }, {
                        priority: x
                    })
                }

                function u(k, g, C, x = 0) {
                    if (!g) return a(n.task.target, i.value, n.task.type, 0);
                    r.add(async () => {
                        const {
                            reachLimit: $
                        } = n.checkLimit(n.task.current, k);
                        if ($) {
                            h(), u(k, g, C, 1);
                            return
                        }
                        let {
                            data: W,
                            error: E,
                            statusCode: P
                        } = await Me[k](g);
                        if (P.value === 200 && !E.value) {
                            if (k === "getProfile") {
                                const M = await d(g, W.value);
                                s("updateItem", Object.assign(M, C))
                            } else {
                                const M = await f(k, g);
                                s("updateItem", Object.assign(M, C))
                            }
                            n.task.current += 1, n.task.updatedAt = new Date().toLocaleString(), n.task.unFinishedIds.shift(), n.task.unFinishedItems.shift(), c(k)
                        } else P.value === 404 ? (p(P.value, W.value), n.task.current += 1, n.task.unFinishedIds.shift(), n.task.unFinishedItems.shift(), c(k)) : (h(), u(k, g, C, 1), p(P.value, W.value), fe.track("InsAPI Error", {
                            targetId: g,
                            cmd: k,
                            current: n.task.current,
                            total: n.task.total,
                            statusCode: P.value,
                            isLogin: !!Me.checkLogin(),
                            intervalSeconds: o.value.intervalSecond,
                            data: st(W.value)
                        }));
                        m(), n.task.isCompleted || o.value.ToggleStartButtonRef.onRequested(), n.task.requestLogs.push({
                            statusCode: P.value,
                            target: g,
                            createdAt: new Date
                        }), await ht.exports(o.value.intervalSecond * 1e3)
                    }, {
                        priority: x
                    })
                }
                async function c(k) {
                    u(k, n.task.unFinishedIds[0], n.task.unFinishedItems[0])
                }
                async function d(k, g) {
                    const C = (await se.exports.storage.local.get(k))[k] || {
                        id: k
                    };
                    return C.actionTag = (C.actionTag || []).concat(["getProfile"]), await se.exports.storage.local.set({
                        [k]: Object.assign(C, g)
                    }), C
                }
                async function f(k, g) {
                    const C = (await se.exports.storage.local.get(g))[g] || {
                        id: g
                    };
                    return C.actionTag = (C.actionTag || []).concat([k]), await se.exports.storage.local.set({
                        [g]: C
                    }), C
                }

                function h() {
                    r.pause(), o.value.isPaused = !0
                }

                function p(k, g) {
                    const C = g ? g.feedback_message || g.message : "maybe caused by too fast requests";
                    Me.checkLogin() ? (ie.alert(`Instagram API error: ${k}, ${C}.`, "Network Error", {
                        showClose: !1
                    }), o.value.ToggleStartButtonRef.onRequestedError()) : ie.confirm("The task can not resume without Instagram login.", "Error", {
                        confirmButtonText: "Login",
                        cancelButtonText: "Cancel",
                        type: "warning"
                    }).then(async () => {
                        window.open("https://www.instagram.com/accounts/login/")
                    }).catch(() => {})
                }
                let _ = 0;
                const v = new Date;

                function m() {
                    _ = _ + 1;
                    let k = (new Date().getTime() - v.getTime()) / 1e3;
                    _ === 40 && k < 100 && (o.value.intervalSecond = 20, ie.alert("Request too fast may cause api temporarily unavailable, so the speed is set to 20s/req, you can change it on your demand.", "Warning", {
                        showClose: !1
                    }))
                }

                function T() {
                    r.pause(), o.value.isPaused = !0
                }
                return e({
                    queue: r,
                    pauseTask: T,
                    addNextTask: c
                }), (k, g) => {
                    const C = Wo;
                    return y(), N(C, {
                        ref_key: "TaskProgressRef",
                        ref: o,
                        task: k.task,
                        queue: l(r)
                    }, null, 8, ["task", "queue"])
                }
            }
        }),
        Fy = {
            key: 0
        },
        jy = {
            key: 1,
            "element-loading-text": "Loading User Profile...",
            class: "h-50"
        },
        Uy = {
            key: 2
        },
        Yy = {
            key: 0
        },
        By = {
            class: "ml-2"
        },
        Vy = {
            key: 0,
            class: "ml-2"
        },
        Wy = {
            key: 1,
            class: "ml-2"
        },
        zy = {
            class: "ml-2"
        },
        Al = q({
            __name: "LoopTask",
            props: {
                task: {},
                checkLimit: {
                    type: Function
                },
                simpleMode: {
                    type: Boolean
                }
            },
            emits: ["completed"],
            setup(t, {
                expose: e,
                emit: s
            }) {
                const n = t,
                    r = L(!1),
                    o = L({}),
                    i = L({}),
                    a = L([]);
                Ne(async () => {
                    if (console.log("loop task mounted:", st(n.task)), n.task.type === "Like" && ie.alert("Following a recent Instagram API update, it is now impossible for anyone to export the full list of likes, with visibility restricted to only the latest 100 likes on others' photos and 1,000 on your own.", "API Update: January 24, 2024", {
                            showClose: !1
                        }), n.task.logs || (n.task.logs = []), n.task.requestLogs || (n.task.requestLogs = []), u(), ["Follower", "Following"].includes(n.task.type) && !n.task.username) {
                        n.task.username = n.task.target;
                        let {
                            data: h,
                            error: p
                        } = await Me.getProfile(n.task.username, "username");
                        if (p.value) {
                            ie.alert(`Username doesn't exist. Error message: ${p.value}`, "Error", {
                                showClose: !1
                            }), n.task.isCompleted = !0;
                            return
                        }
                        n.task.target = h.value.id
                    }
                    if (r.value = !0, !n.task.createdAt) {
                        n.task.createdAt = new Date().toLocaleString();
                        let h = (await se.exports.storage.local.get("historyIds")).historyIds || [];
                        h.push(n.task.uuid), await se.exports.storage.local.set({
                            historyIds: h
                        })
                    }
                    n.task.updatedAt = new Date().toLocaleString()
                });
                async function u() {
                    if (n.task.logs.length) {
                        let h = [];
                        n.task.logs.forEach(_ => {
                            h = h.concat(_.itemIds)
                        }), h = h.splice(0, n.task.current);
                        let p = Object.values(await se.exports.storage.local.get(h));
                        a.value = a.value.concat(await c(p))
                    }
                }
                async function c(h) {
                    const p = h.map(m => m.owner_id || m.id),
                        _ = await se.exports.storage.local.get(p);
                    return h.map(m => Object.assign(_[m.owner_id || m.id], m))
                }

                function d() {
                    o.value.pauseTask && o.value.pauseTask()
                }
                e({
                    pauseAll: d
                });

                function f(h) {
                    return h.subTask !== void 0
                }
                return (h, p) => {
                    const _ = Ny,
                        v = xl,
                        m = bl,
                        T = yl,
                        k = Xv,
                        g = vl,
                        C = Fe,
                        x = gl,
                        $ = Bo,
                        W = _l,
                        E = Wv,
                        P = Uo,
                        M = sn;
                    return y(), O(ye, null, [l(r) ? (y(), O("div", Fy, [f(n.task) ? (y(), N(_, {
                        key: 0,
                        ref_key: "CurrentTaskRef",
                        ref: o,
                        class: "p-4",
                        task: n.task,
                        checkLimit: n.checkLimit,
                        onUpdateItem: p[0] || (p[0] = G => {
                            l(a).push(G)
                        })
                    }, null, 8, ["task", "checkLimit"])) : (y(), N(v, {
                        key: 1,
                        ref_key: "CurrentTaskRef",
                        ref: o,
                        class: "p-4",
                        task: n.task,
                        checkLimit: n.checkLimit,
                        onUpdateItems: p[1] || (p[1] = G => {
                            a.value = l(a).concat(G)
                        }),
                        onCompleted: p[2] || (p[2] = G => s("completed"))
                    }, null, 8, ["task", "checkLimit"]))])) : De((y(), O("div", jy, null, 512)), [
                        [M, !0]
                    ]), h.simpleMode ? Y("", !0) : (y(), O("div", Uy, [l(r) ? (y(), O("div", Yy, [w(m, {
                        class: "ml-4",
                        items: l(a),
                        onPauseCurrentTasks: p[3] || (p[3] = G => l(o).pauseTask())
                    }, null, 8, ["items"]), I("span", By, [w(T, {
                        items: l(i).filteredItems,
                        type: n.task.type,
                        desc: `${n.task.username||n.task.target}_${n.task.type}_${l(i).filteredItems.length}`
                    }, null, 8, ["items", "type", "desc"])]), ["Comment", "Like"].includes(n.task.type) ? (y(), O("span", Vy, [w(k, {
                        items: l(a),
                        "data-type": n.task.type
                    }, null, 8, ["items", "data-type"])])) : Y("", !0), f(n.task) ? (y(), O("span", Wy, [l(i).scaleRule ? (y(), N(g, {
                        key: 0,
                        scaleRule: l(i).scaleRule
                    }, null, 8, ["scaleRule"])) : Y("", !0)])) : Y("", !0), I("span", zy, [l(i).hasSortAndFilter ? (y(), N(C, {
                        key: 0,
                        type: "danger",
                        onClick: p[4] || (p[4] = G => l(i).reset())
                    }, {
                        default: S(() => [B(" Reset sort & filter ")]),
                        _: 1
                    })) : Y("", !0)])])) : Y("", !0), w(P, {
                        ref_key: "SuperTableRef",
                        ref: i,
                        items: l(a),
                        checkLimit: n.checkLimit
                    }, {
                        default: S(() => [
                            ["Follower", "Following", "Like"].includes(n.task.type) ? (y(), N($, {
                                key: 0
                            }, {
                                default: S(() => [f(n.task) ? (y(), N(x, {
                                    key: 0
                                })) : Y("", !0)]),
                                _: 1
                            })) : ["Comment"].includes(n.task.type) ? (y(), N(W, {
                                key: 1
                            }, {
                                default: S(() => [f(n.task) ? (y(), N(x, {
                                    key: 0
                                })) : Y("", !0)]),
                                _: 1
                            })) : ["Location", "Hashtag"].includes(n.task.type) ? (y(), N(E, {
                                key: 2
                            }, {
                                default: S(() => [f(n.task) ? (y(), N(x, {
                                    key: 0
                                })) : Y("", !0)]),
                                _: 1
                            })) : Y("", !0)
                        ]),
                        _: 1
                    }, 8, ["items", "checkLimit"])]))], 64)
                }
            }
        }),
        Hy = {
            class: "text-center m-4"
        },
        Gy = {
            class: "text-lg m-2"
        },
        qy = I("span", {
            class: "ml-2"
        }, null, -1),
        Jy = {
            class: "mx-12 bg-white"
        },
        Ky = q({
            __name: "MultiTargetsTask",
            props: {
                task: {},
                checkLimit: {
                    type: Function
                }
            },
            setup(t, {
                expose: e
            }) {
                const s = t;
                Ne(async () => {
                    s.task.subTaskIds.length === 0 ? u(0) : s.task.subTaskIds.forEach(h => {
                        a(h)
                    })
                });
                const n = L([]),
                    r = L(null),
                    o = L(null),
                    i = U(() => s.task.subTaskIds.length - 1);
                et(i, h => {
                    o && o.value && o.value.setActiveItem(h)
                });

                function a(h) {
                    const p = ct(h, {});
                    n.value.push(p)
                }

                function u(h) {
                    const p = En();
                    s.task.subTaskIds.push(p);
                    const _ = ct(p, {
                        uuid: p,
                        isCompleted: !1,
                        requestLogs: [],
                        createdAt: new Date().toLocaleString(),
                        updatedAt: new Date().toLocaleString(),
                        target: s.task.targets[h],
                        type: s.task.type.replace("M-", ""),
                        current: 0,
                        total: 0,
                        logs: []
                    });
                    n.value.push(_)
                }

                function c() {
                    r.value[i.value].queue.pause()
                }
                e({
                    pauseAll: c
                });
                const d = L(!1);

                function f() {
                    if (d.value) return;
                    const {
                        reachLimit: h
                    } = s.checkLimit(s.task.subTaskIds.length + 1, s.task.type);
                    d.value = h, s.task.subTaskIds.length != s.task.targets.length && !h && u(s.task.subTaskIds.length)
                }
                return (h, p) => {
                    const _ = Fe,
                        v = Lv,
                        m = Rv,
                        T = $c,
                        k = Cc;
                    return y(), O("div", null, [I("div", Hy, [I("div", Gy, j(s.task.type) + ": " + j(l(i) + 1) + "/" + j(s.task.targets.length), 1), l(d) ? (y(), N(_, {
                        key: 0,
                        onClick: p[0] || (p[0] = g => {
                            d.value = !1, f()
                        })
                    }, {
                        default: S(() => [B("Continue")]),
                        _: 1
                    })) : Y("", !0), w(v, {
                        task: s.task,
                        type: s.task.type.replace("M-", ""),
                        desc: `${s.task.type}_${s.task.subTaskIds.length}`
                    }, null, 8, ["task", "type", "desc"]), qy, s.task.subTaskIds.length ? (y(), N(m, {
                        key: 1,
                        "task-ids": s.task.subTaskIds
                    }, null, 8, ["task-ids"])) : Y("", !0)]), w(k, {
                        ref_key: "CarouselRef",
                        ref: o,
                        class: "m-12",
                        autoplay: !1,
                        loop: !1,
                        trigger: "click",
                        height: "200px",
                        type: "card",
                        "indicator-position": "outside",
                        "initial-index": l(i)
                    }, {
                        default: S(() => [(y(!0), O(ye, null, Ot(l(n), (g, C) => (y(), N(T, {
                            key: C
                        }, {
                            default: S(() => [I("div", Jy, [g.value.target ? (y(), N(Al, {
                                key: 0,
                                ref_for: !0,
                                ref_key: "TasksRef",
                                ref: r,
                                simpleMode: !0,
                                checkLimit: s.checkLimit,
                                task: g.value,
                                onCompleted: f
                            }, null, 8, ["checkLimit", "task"])) : Y("", !0)])]),
                            _: 2
                        }, 1024))), 128))]),
                        _: 1
                    }, 8, ["initial-index"])])
                }
            }
        }),
        Qy = q({
            __name: "ActionTaskCore",
            props: {
                task: {},
                checkLimit: {
                    type: Function
                }
            },
            emits: ["addTag", "addProfile", "updateItem", "completed"],
            setup(t, {
                expose: e,
                emit: s
            }) {
                const n = t,
                    r = new zo({
                        concurrency: 1
                    }),
                    o = L(null);
                Ne(async () => {
                    console.log("action task core mounted", st(n.task)), !n.task.targets.length || n.task.isCompleted ? s("completed") : i(n.task.cmd, n.task.targets[n.task.current]), n.task.requestLogs.length || fe.track("Created Task", st(n.task))
                });

                function i(m, T, k = 0) {
                    r.add(async () => {
                        const {
                            reachLimit: g
                        } = n.checkLimit(n.task.current, m);
                        if (g) {
                            d(m, T);
                            return
                        }
                        let {
                            data: C,
                            error: x,
                            statusCode: $
                        } = await Me[m](T);
                        if ($.value === 200 && !x.value) {
                            if (m === "getProfile") {
                                s("addProfile", C.value);
                                const W = await u(T, C.value);
                                s("updateItem", W)
                            } else {
                                const W = await c(m, T);
                                s("updateItem", W)
                            }
                            s("addTag", m, T), n.task.current += 1, n.task.updatedAt = new Date().toLocaleString(), a(m)
                        } else $.value === 404 ? (f($.value, C.value), n.task.current += 1, a(m)) : (d(m, T), f($.value, C.value), fe.track("InsAPI Error", {
                            targetId: T,
                            cmd: m,
                            current: n.task.current,
                            total: n.task.total,
                            statusCode: $.value,
                            isLogin: !!Me.checkLogin(),
                            intervalSeconds: o.value.intervalSecond,
                            data: st(C.value)
                        }));
                        _(), n.task.isCompleted || o.value.ToggleStartButtonRef.onRequested(), n.task.requestLogs.push({
                            statusCode: $.value,
                            target: T,
                            createdAt: new Date
                        }), await ht.exports(o.value.intervalSecond * 1e3)
                    }, {
                        priority: k
                    })
                }
                async function a(m) {
                    n.task.current === n.task.targets.length ? (n.task.isCompleted = !0, s("completed")) : i(m, n.task.targets[n.task.current])
                }
                async function u(m, T) {
                    const k = (await se.exports.storage.local.get(m))[m] || {
                        id: m
                    };
                    return k.actionTag = (k.actionTag || []).concat(["getProfile"]), await se.exports.storage.local.set({
                        [m]: Object.assign(k, T)
                    }), k
                }
                async function c(m, T) {
                    const k = (await se.exports.storage.local.get(T))[T] || {
                        id: T
                    };
                    return k.actionTag = (k.actionTag || []).concat([m]), await se.exports.storage.local.set({
                        [T]: k
                    }), k
                }

                function d(m, T) {
                    r.pause(), o.value.isPaused = !0, i(m, T, 1)
                }

                function f(m, T) {
                    const k = T ? T.feedback_message || T.message : "maybe caused by too fast requests";
                    Me.checkLogin() ? (ie.alert(`Instagram API error: ${m}, ${k}.`, "Network Error", {
                        showClose: !1
                    }), o.value.ToggleStartButtonRef.onRequestedError()) : ie.confirm("The task can not resume without Instagram login.", "Error", {
                        confirmButtonText: "Login",
                        cancelButtonText: "Cancel",
                        type: "warning"
                    }).then(async () => {
                        window.open("https://www.instagram.com/accounts/login/")
                    }).catch(() => {})
                }
                let h = 0;
                const p = new Date;

                function _() {
                    h = h + 1;
                    let m = (new Date().getTime() - p.getTime()) / 1e3;
                    h === 40 && m < 100 && (o.value.intervalSecond = 20, ie.alert("Request too fast may cause api temporarily unavailable, so the speed is set to 20s/req, you can change it on your demand.", "Warning", {
                        showClose: !1
                    }))
                }

                function v() {
                    r.pause(), o.value.isPaused = !0
                }
                return e({
                    queue: r,
                    pauseTask: v,
                    addNextTask: a
                }), (m, T) => {
                    const k = Wo;
                    return y(), N(k, {
                        ref_key: "TaskProgressRef",
                        ref: o,
                        task: m.task,
                        queue: l(r)
                    }, null, 8, ["task", "queue"])
                }
            }
        }),
        Zy = {
            key: 0
        },
        Xy = I("span", {
            class: "ml-2"
        }, null, -1),
        e0 = I("span", {
            class: "ml-2"
        }, null, -1),
        t0 = I("span", {
            class: "ml-2"
        }, null, -1),
        s0 = q({
            __name: "ActionTask",
            props: {
                task: {},
                checkLimit: {
                    type: Function
                }
            },
            setup(t, {
                expose: e
            }) {
                const s = t,
                    n = L([]);
                Ne(async () => {
                    const c = await se.exports.storage.local.get(st(s.task.targets));
                    n.value = s.task.targets.map(d => Object.assign({
                        id: d
                    }, c[d]))
                });

                function r(c, d) {
                    let f = n.value.filter(h => h.id === d)[0];
                    f.actionTag = (f.actionTag || []).concat([c])
                }

                function o(c) {
                    let d = n.value.filter(f => f.id === c.id)[0];
                    d = Object.assign(d, c)
                }
                const i = L({}),
                    a = L({});

                function u() {
                    i.value.pauseTask && i.value.pauseTask()
                }
                return e({
                    pauseAll: u,
                    SuperTableRef: a
                }), (c, d) => {
                    const f = Qy,
                        h = bl,
                        p = yl,
                        _ = vl,
                        v = Fe,
                        m = gl,
                        T = Bo,
                        k = Uo;
                    return y(), O("div", null, [w(f, {
                        ref_key: "CurrentTaskRef",
                        ref: i,
                        class: "m-4",
                        task: s.task,
                        checkLimit: s.checkLimit,
                        onAddProfile: o,
                        onAddTag: r
                    }, null, 8, ["task", "checkLimit"]), l(i).queue ? (y(), O("div", Zy, [w(h, {
                        class: "ml-4",
                        items: l(n),
                        onPauseCurrentTasks: d[0] || (d[0] = g => l(i).pauseTask())
                    }, null, 8, ["items"]), Xy, w(p, {
                        items: l(a).filteredItems,
                        type: s.task.cmd,
                        desc: `${s.task.targets[0]}_${s.task.cmd}_${l(a).filteredItems.length}`
                    }, null, 8, ["items", "type", "desc"]), e0, l(a).scaleRule ? (y(), N(_, {
                        key: 0,
                        scaleRule: l(a).scaleRule
                    }, null, 8, ["scaleRule"])) : Y("", !0), t0, l(a).hasSortAndFilter ? (y(), N(v, {
                        key: 1,
                        type: "danger",
                        onClick: d[1] || (d[1] = g => l(a).reset())
                    }, {
                        default: S(() => [B(" Reset sort & filter ")]),
                        _: 1
                    })) : Y("", !0)])) : Y("", !0), w(k, {
                        ref_key: "SuperTableRef",
                        ref: a,
                        items: l(n),
                        checkLimit: s.checkLimit
                    }, {
                        default: S(() => [w(T, null, {
                            default: S(() => [w(m)]),
                            _: 1
                        })]),
                        _: 1
                    }, 8, ["items", "checkLimit"])])
                }
            }
        }),
        n0 = {
            key: 0
        },
        r0 = {
            key: 0
        },
        o0 = q({
            __name: "ExportPanel",
            setup(t) {
                const s = Vi().uuid,
                    n = ct(s, {}),
                    r = L(!0),
                    o = L({}),
                    i = L({}),
                    a = L("70%");

                function u() {
                    console.log("isDrawerExpand", hs.value), hs.value = !hs.value, a.value = hs.value ? "95%" : "70%"
                }
                const c = L(!1),
                    d = L(!1),
                    f = L(!1);
                Ne(async () => {
                    if (d.value = Me.checkLogin(), !d.value) {
                        ie.alert("Extension runs locally to ensure security, so you need to login Instagram account first.", "Warning", {
                            showClose: !1
                        });
                        return
                    }
                    await ht.exports(200), f.value = !0
                });

                function h() {
                    i.value.pauseAll && i.value.pauseAll()
                }
                return (p, _) => {
                    const v = Nu,
                        m = Fe,
                        T = ml,
                        k = Ss,
                        g = mf,
                        C = Gn;
                    return y(), N(C, {
                        class: "c-#1c1e21",
                        modelValue: l(r),
                        "onUpdate:modelValue": _[2] || (_[2] = x => Ke(r) ? r.value = x : null),
                        title: "Dashboard",
                        "with-header": !1,
                        direction: "btt",
                        size: l(a),
                        onClose: h
                    }, {
                        default: S(() => [I("header", {
                            class: "m-2 flex justify-between items-center",
                            onMouseover: _[0] || (_[0] = x => c.value = !0),
                            onMouseleave: _[1] || (_[1] = x => c.value = !1)
                        }, [w(v, {
                            showOtherTools: !0
                        }), I("div", {
                            onClick: u
                        }, [l(hs) ? (y(), N(m, {
                            key: 0,
                            type: "info",
                            link: "",
                            icon: l(qn)
                        }, {
                            default: S(() => [B("Collapse")]),
                            _: 1
                        }, 8, ["icon"])) : (y(), N(m, {
                            key: 1,
                            type: "info",
                            link: "",
                            icon: l(Lu)
                        }, {
                            default: S(() => [B("Expand")]),
                            _: 1
                        }, 8, ["icon"]))]), w(T, {
                            ref_key: "ExtUserRef",
                            ref: o
                        }, null, 512)], 32), w(k, {
                            class: "m-0"
                        }), l(n).uuid && l(d) && l(f) ? (y(), O("div", n0, [l(n).type ? (y(), O("div", r0, [l(n).type.includes("M-") ? (y(), N(Ky, {
                            key: 0,
                            ref_key: "CurrentTaskRef",
                            ref: i,
                            checkLimit: l(o).checkLimit,
                            task: l(n)
                        }, null, 8, ["checkLimit", "task"])) : (y(), N(Al, {
                            key: 1,
                            ref_key: "CurrentTaskRef",
                            ref: i,
                            checkLimit: l(o).checkLimit,
                            task: l(n)
                        }, null, 8, ["checkLimit", "task"]))])) : Y("", !0), l(n).cmd ? (y(), N(s0, {
                            key: 1,
                            ref_key: "CurrentTaskRef",
                            ref: i,
                            checkLimit: l(o).checkLimit,
                            task: l(n)
                        }, null, 8, ["checkLimit", "task"])) : Y("", !0)])) : Y("", !0), w(g, {
                            class: "important-z-999"
                        })]),
                        _: 1
                    }, 8, ["modelValue", "size"])
                }
            }
        }),
        i0 = {
            class: "p-2 px-4"
        },
        a0 = {
            class: "p-2"
        },
        l0 = ["src"],
        u0 = {
            class: "flex-1"
        },
        c0 = {
            class: "c-gray mt-1"
        },
        d0 = {
            class: "text-center m-4"
        },
        f0 = q({
            __name: "MetricDetail",
            props: {
                metricName: {},
                itemIds: {},
                username: {},
                checkLimit: {
                    type: Function
                }
            },
            emits: ["close"],
            setup(t, {
                emit: e
            }) {
                const s = t,
                    n = location.pathname === "/dist/options/index.html",
                    r = se.exports.runtime.getURL("assets/icon-128.png"),
                    o = L([]);
                Ne(async () => {
                    fe.track("Check Metric", {
                        name: s.metricName,
                        total: s.itemIds.length
                    }), o.value = Object.values(await se.exports.storage.local.get([...s.itemIds]))
                });
                const i = L(!1);
                async function a(p) {
                    i.value = !0;
                    const _ = p.followed_by_viewer ? "unfollow" : "follow",
                        {
                            error: v,
                            data: m,
                            response: T
                        } = await Me[_](p.id);
                    if (v.value) {
                        const k = T.value.status === 404 ? "Target user is not existed." : `${v.value}: ${m.value?Object.values(m.value):""}`;
                        ie.alert(k, "Error", {
                            showClose: !1
                        }), fe.track("InsAPI Error", {
                            msg: k,
                            cmd: _,
                            status: T.value.status,
                            apiUrl: T.value.url
                        });
                        return
                    }
                    p.followed_by_viewer = !p.followed_by_viewer, se.exports.storage.local.set({
                        [p.id]: p
                    }), i.value = !1, fe.track("Click Action", {
                        cmd: _
                    })
                }
                async function u(p) {
                    i.value = !0;
                    const {
                        error: _,
                        data: v,
                        response: m
                    } = await Me.removeFollower(p.id);
                    if (_.value) {
                        const T = m.value.status === 404 ? "Target user is not existed." : `${_.value}: ${v.value?Object.values(v.value):""}`;
                        ie.alert(T, "Error", {
                            showClose: !1
                        }), fe.track("InsAPI Error", {
                            msg: T,
                            cmd: "removeFollower",
                            status: m.value.status,
                            apiUrl: m.value.url
                        });
                        return
                    }
                    p.follower_of_viewer = !1, se.exports.storage.local.set({
                        [p.id]: p
                    }), i.value = !1, fe.track("Click Action", {
                        cmd: "removefollower"
                    })
                }

                function c() {
                    const {
                        limitNum: p
                    } = s.checkLimit(o.value.length), _ = o.value.slice(0, p);
                    fe.track("Download", {
                        from: s.metricName,
                        total: _.length
                    }), Fu(_, s.username, s.metricName, "csv")
                }
                const d = L(12),
                    f = () => {
                        const {
                            reachLimit: p
                        } = s.checkLimit(d.value);
                        if (p) return;
                        const _ = d.value + 12;
                        d.value = _ > o.value.length ? o.value.length : _
                    },
                    h = p => {
                        fe.track("Batch Action", {
                            cmd: p,
                            count: s.itemIds.length
                        });
                        const _ = s.itemIds,
                            v = "ahjhgioopgfojempocencebppgiomipb";
                        se.exports.runtime.sendMessage(v, {
                            taskList: _.map(m => ({
                                args: {
                                    id: m
                                },
                                cmd: p
                            }))
                        }).then(m => {
                            console.log("InsBot response:", m)
                        }).catch(() => {
                            ie.confirm("Batch actions require the installation of InsBot to be implemented.", "Tips", {
                                confirmButtonText: "Install",
                                cancelButtonText: "Cancel",
                                type: "warning"
                            }).then(() => {
                                window.open(`https://chrome.google.com/webstore/detail/${v}?utm_source=InsTF&utm_medium=cpc&utm_campaign=batch-actions`), ie.alert("After installing InsBot, you can click the batch actions button again to try.", "Tips", {
                                    showClose: !1
                                })
                            }).catch(() => {})
                        })
                    };
                return (p, _) => {
                    const v = wd,
                        m = Fe,
                        T = Pe,
                        k = Yn,
                        g = Bn,
                        C = Vn,
                        x = Hn;
                    return y(), O(ye, null, [w(v, {
                        onBack: _[0] || (_[0] = $ => e("close")),
                        class: "m-2"
                    }, {
                        content: S(() => [I("span", null, j(s.metricName) + "(" + j(s.itemIds.length) + ") ", 1)]),
                        _: 1
                    }), I("div", i0, [w(m, {
                        onClick: c,
                        class: "mr-2"
                    }, {
                        default: S(() => [B("Download All")]),
                        _: 1
                    }), w(C, {
                        onCommand: h
                    }, {
                        dropdown: S(() => [w(g, null, {
                            default: S(() => [w(k, {
                                command: "follow"
                            }, {
                                default: S(() => [B("Follow")]),
                                _: 1
                            }), w(k, {
                                command: "unfollow"
                            }, {
                                default: S(() => [B("Unfollow")]),
                                _: 1
                            }), w(k, {
                                command: "removeFollower"
                            }, {
                                default: S(() => [B("Remove follower")]),
                                _: 1
                            })]),
                            _: 1
                        })]),
                        default: S(() => [w(m, {
                            type: "primary"
                        }, {
                            default: S(() => [B(" Batch Actions"), w(T, {
                                class: "el-icon--right"
                            }, {
                                default: S(() => [w(l(qn))]),
                                _: 1
                            })]),
                            _: 1
                        })]),
                        _: 1
                    })]), I("div", a0, [(y(!0), O(ye, null, Ot(l(o).slice(0, l(d)), $ => (y(), O("div", {
                        key: $.id,
                        class: "flex items-center"
                    }, [I("img", {
                        class: "w-10 h-10 b-rd-50 m-2",
                        src: n ? l(r) : $.profile_pic_url
                    }, null, 8, l0), I("div", u0, [w(x, {
                        href: "https://www.instagram.com/" + $.username,
                        target: "_blank",
                        underline: !1
                    }, {
                        default: S(() => [B("@" + j($.username), 1)]),
                        _: 2
                    }, 1032, ["href"]), I("div", c0, j($.full_name), 1)]), $.follower_of_viewer ? (y(), N(m, {
                        key: 0,
                        size: "small",
                        onClick: W => u($)
                    }, {
                        default: S(() => [B(" remove ")]),
                        _: 2
                    }, 1032, ["onClick"])) : Y("", !0), w(m, {
                        size: "small",
                        class: "mr-2",
                        type: $.followed_by_viewer ? "danger" : "primary",
                        onClick: W => a($)
                    }, {
                        default: S(() => [B(j($.followed_by_viewer ? "unfollow" : "follow"), 1)]),
                        _: 2
                    }, 1032, ["type", "onClick"])]))), 128))]), I("div", d0, [l(d) < l(o).length ? (y(), N(m, {
                        key: 0,
                        onClick: f,
                        plain: ""
                    }, {
                        default: S(() => [B("Load more " + j(l(d)) + " / " + j(l(o).length), 1)]),
                        _: 1
                    })) : Y("", !0)])], 64)
                }
            }
        }),
        h0 = ["onClick"],
        m0 = {
            class: "text-2xl mb-2"
        },
        p0 = {
            key: 0
        },
        _0 = q({
            __name: "Metrics",
            props: {
                task: {},
                profile: {},
                checkLimit: {
                    type: Function
                }
            },
            setup(t, {
                expose: e
            }) {
                const s = t;
                Ne(async () => {
                    if (!s.task.subTaskIds) {
                        let f = (await a()).filter(h => h.target === s.task.target && h.isCompleted)[0];
                        f && (s.task.compareUUID = f.uuid)
                    }
                    if (s.task.isCompleted) i(s.task);
                    else {
                        const f = s.task.compareUUID;
                        if (f) {
                            const h = JSON.parse((await se.exports.storage.local.get(f))[f]);
                            i(h)
                        }
                    }
                });
                const n = L(""),
                    r = L(""),
                    o = ss({
                        "New followers": [],
                        "Lost followers": [],
                        "New followings": [],
                        "Mutual friends": [],
                        "I don't follow back": [],
                        "Don't follow me Back": []
                    });
                async function i(f) {
                    let h = await u(f.subTaskIds[0]),
                        p = await u(f.subTaskIds[1]),
                        _ = [],
                        v = [];
                    if (r.value = f.createdAt, f.compareUUID) {
                        let m = (await se.exports.storage.local.get(f.compareUUID))[f.compareUUID];
                        m && (m = JSON.parse(m), n.value = m.createdAt, m.isCompleted && (_ = await u(m.subTaskIds[0]), v = await u(m.subTaskIds[1])))
                    }
                    _.length === 0 && v.length === 0 ? (o["New followers"] = [], o["Lost followers"] = [], o["New followings"] = []) : (o["New followers"] = h.filter(m => !_.includes(m)), o["Lost followers"] = _.filter(m => !h.includes(m)), o["New followings"] = p.filter(m => !v.includes(m))), o["Mutual friends"] = p.filter(m => h.includes(m)), o["I don't follow back"] = h.filter(m => !o["Mutual friends"].includes(m)), o["Don't follow me Back"] = p.filter(m => !o["Mutual friends"].includes(m))
                }
                async function a() {
                    let f = (await se.exports.storage.local.get("historyIds")).historyIds || [];
                    return Object.values(await se.exports.storage.local.get(f)).map(h => JSON.parse(h)).sort((h, p) => new Date(p.updatedAt).getTime() - new Date(h.updatedAt).getTime())
                }
                async function u(f) {
                    return JSON.parse((await se.exports.storage.local.get(f))[f]).logs.reduce((p, _) => p.concat(_.itemIds), [])
                }
                const c = L(!1),
                    d = L("");
                return e({
                    analyzeMetrics: i,
                    compareDate: n,
                    compareDateTo: r
                }), (f, h) => {
                    const p = ns,
                        _ = uo,
                        v = lo,
                        m = f0,
                        T = Gn;
                    return y(), O(ye, null, [w(v, {
                        "text-center": "",
                        class: "p-6"
                    }, {
                        default: S(() => [(y(!0), O(ye, null, Ot(l(o), (k, g) => (y(), N(_, {
                            span: 12,
                            key: g
                        }, {
                            default: S(() => [I("div", {
                                class: "border py-6 m-3 b-rd c-#f56c6c cursor-pointer",
                                onClick: C => {
                                    d.value = g.toString(), c.value = !0
                                }
                            }, [I("div", m0, j(k.length), 1), g != "Lost followers" ? (y(), O("div", p0, j(s.profile.isSelf && f.profile.username ? g : g.toString().replace("I don't follow back", `@${f.profile.username} don't follow back`).replace("Don't follow me Back", `Don't follow @${f.profile.username} Back`)), 1)) : (y(), N(p, {
                                key: 1,
                                class: "box-item",
                                effect: "dark",
                                content: "Sync again the next day, if someone unfollowed during this period, it will be shown here.",
                                placement: "bottom"
                            }, {
                                default: S(() => [I("span", null, j(g), 1)]),
                                _: 2
                            }, 1024))], 8, h0)]),
                            _: 2
                        }, 1024))), 128))]),
                        _: 1
                    }), w(T, {
                        modelValue: l(c),
                        "onUpdate:modelValue": h[1] || (h[1] = k => Ke(c) ? c.value = k : null),
                        "with-header": !1,
                        direction: "rtl",
                        size: "28%",
                        "append-to-body": !0,
                        onClose: h[2] || (h[2] = k => d.value = "")
                    }, {
                        default: S(() => [l(d) ? (y(), N(m, {
                            key: 0,
                            checkLimit: s.checkLimit,
                            metricName: l(d),
                            itemIds: l(o)[l(d)],
                            username: s.profile.username,
                            onClose: h[0] || (h[0] = k => {
                                d.value = "", c.value = !1
                            })
                        }, null, 8, ["checkLimit", "metricName", "itemIds", "username"])) : Y("", !0)]),
                        _: 1
                    }, 8, ["modelValue"])], 64)
                }
            }
        }),
        g0 = {
            key: 0
        },
        v0 = {
            key: 1
        },
        y0 = q({
            __name: "DateRange",
            props: {
                compareDate: {},
                compareDateTo: {}
            },
            setup(t) {
                const e = t;
                return (s, n) => {
                    const r = ao;
                    return e.compareDate ? (y(), O("div", v0, [w(r, {
                        title: `From ${e.compareDate} to ${e.compareDateTo}`,
                        type: "warning",
                        closable: !1,
                        center: ""
                    }, null, 8, ["title"])])) : (y(), O("div", g0, [w(r, {
                        title: "Congratulations on successfully initializing the data. Come back tomorrow to synchronize again, and you will be able to see the changes in follower data for the day.",
                        type: "warning",
                        center: ""
                    })]))
                }
            }
        }),
        b0 = {
            key: 0
        },
        w0 = q({
            __name: "TrackTask",
            props: {
                task: {},
                profile: {}
            },
            emits: ["completed"],
            setup(t, {
                expose: e,
                emit: s
            }) {
                const n = t,
                    r = ct("intervalSecond", 1);

                function o(v) {
                    n.task.updatedAt = new Date().toLocaleString(), n.task.current += v.length
                }

                function i(v) {
                    return n.profile.isSelf ? Object.assign(v, {
                        follower_of_viewer: !0
                    }) : v
                }
                const a = L(!0);
                Ne(() => {
                    n.task.isCompleted ? a.value = !1 : n.task.subTaskIds ? (d(), ie.confirm("Resume after a long pause may result in inaccurate final data.", "Tips", {
                        confirmButtonText: "Restart",
                        cancelButtonText: "Still Resume",
                        type: "warning"
                    }).then(() => {
                        h(), f()
                    }).catch(() => {})) : (n.task.subTaskIds = [], c("Follower"))
                });
                const u = L([]);

                function c(v) {
                    const m = En(),
                        T = ct(m, {
                            uuid: m,
                            username: n.profile.username,
                            target: n.profile.id,
                            type: v,
                            current: 0,
                            total: n.profile[v === "Follower" ? "followerCount" : "followingCount"] || 0,
                            createdAt: new Date().toLocaleString(),
                            isCompleted: !1,
                            updatedAt: new Date().toLocaleString(),
                            logs: [],
                            requestLogs: []
                        });
                    n.task.subTaskIds.push(m), u.value.push(T)
                }

                function d() {
                    n.task.subTaskIds.forEach(v => {
                        const m = ct(v, {});
                        u.value.push(m)
                    })
                }
                async function f() {
                    const v = En();
                    await ju(v), Uu({
                        uuid: v,
                        target: n.task.target,
                        type: n.task.type
                    })
                }

                function h() {
                    p.value.forEach(v => {
                        v.queue && v.pauseTask()
                    })
                }
                e({
                    pauseAll: h
                });
                const p = L([]);

                function _() {
                    u.value.length === 1 ? c("Following") : u.value.length === 2 && (s("completed"), n.task.isCompleted = !0, ie.alert("Sync completed.", "Tips", {
                        showClose: !1,
                        confirmButtonText: "OK",
                        callback: () => {
                            a.value = !1
                        }
                    }), fe.track("Complete Track Task", {
                        intervalSecond: r,
                        followerCount: u.value.map(v => v.value.current)[0],
                        followingCount: u.value.map(v => v.value.current)[1]
                    }))
                }
                return (v, m) => {
                    const T = xl;
                    return n.task.subTaskIds && l(a) ? (y(), O("div", b0, [(y(!0), O(ye, null, Ot(l(u), k => (y(), O("div", null, [k.value.target ? (y(), N(T, {
                        key: 0,
                        ref_for: !0,
                        ref_key: "CurrentTaskRef",
                        ref: p,
                        class: "mt-8 mx-9",
                        task: k.value,
                        formatItem: g => k.value.type == "Follower" ? i(g) : g,
                        checkLimit: () => !0,
                        onUpdateItems: o,
                        onCompleted: _
                    }, null, 8, ["task", "formatItem", "checkLimit"])) : Y("", !0)]))), 256))])) : Y("", !0)
                }
            }
        }),
        k0 = Ts(w0, [
            ["__scopeId", "data-v-df9de529"]
        ]),
        Cl = t => (Vu("data-v-8f67cfd3"), t = t(), Wu(), t),
        S0 = {
            class: "header text-center p-4"
        },
        T0 = {
            class: "flex justify-center items-center"
        },
        x0 = {
            class: "text-xs text-white text-op-70"
        },
        A0 = {
            class: "profile flex justify-evenly items-center mb-4 mt-8"
        },
        C0 = {
            class: "w-30%"
        },
        $0 = {
            class: "text-lg"
        },
        E0 = Cl(() => I("br", null, null, -1)),
        I0 = ["src"],
        O0 = {
            class: "w-30%"
        },
        P0 = {
            class: "text-lg"
        },
        D0 = Cl(() => I("br", null, null, -1)),
        R0 = q({
            __name: "ProfileHeader",
            props: {
                task: {},
                compareDate: {},
                compareDateTo: {}
            },
            setup(t, {
                expose: e
            }) {
                const s = t,
                    r = new Yu().get("ds_user_id"),
                    o = ss({
                        id: "",
                        username: "",
                        profilePicUrl: "",
                        followerCount: 0,
                        followingCount: 0,
                        isSelf: !1
                    });
                e({
                    profile: o
                });
                const i = L(!0);
                async function a(d) {
                    o.id = d.id || d.pk, o.username = d.username, o.profilePicUrl = d.profile_pic_url, o.followerCount = d.follower_count, o.followingCount = d.following_count, o.isSelf = r === o.id, s.task.total = d.follower_count + d.following_count, s.task.cachedProfile = o
                }

                function u() {
                    !s.task.cachedProfile || (Object.keys(o).forEach(d => {
                        o[d] = s.task.cachedProfile[d]
                    }), i.value = !1)
                }
                Ne(async () => {
                    if (s.task.isCompleted) ie.alert("This task is completed, you can click the popup icon to start an new one.", "Tips", {
                        showClose: !1
                    });
                    else if (!r) {
                        ie.alert("InsTF runs locally and requires Instagram account logged in to fetch data.", "Error", {
                            showClose: !1,
                            confirmButtonText: "Login Instagram",
                            callback: () => {
                                window.open("https://www.instagram.com/accounts/login/", "_blank")
                            }
                        });
                        return
                    }
                    if (s.task.cachedProfile && s.task.cachedProfile.id) u();
                    else {
                        const {
                            data: d,
                            error: f,
                            statusCode: h
                        } = await Me.getProfile(s.task.target, "username");
                        if (f.value || h.value !== 200) {
                            const p = h.value === 404 ? `Username "${s.task.target}" is not exist. You can open a valid Instargam Profile Page, then click the InsTF icon, the username will auto fill in.` : `Get profile error: ${h.value} (${f.value})`;
                            ie.alert(p, "Error", {
                                showClose: !1
                            });
                            return
                        }
                        a(d.value), i.value = !1
                    }
                });

                function c() {
                    window.open(`https://www.instagram.com/${o.username}`)
                }
                return (d, f) => {
                    const h = ns,
                        p = sn;
                    return De((y(), O("div", S0, [I("div", T0, [I("div", null, [I("div", {
                        class: "text-base cursor-pointer",
                        onClick: c
                    }, "@" + j(l(o).username), 1), w(h, {
                        class: "box-item",
                        effect: "dark",
                        content: `Compare From ${s.compareDate} to ${s.compareDateTo}`,
                        placement: "bottom"
                    }, {
                        default: S(() => [I("div", x0, "update " + j(l(Bu)(new Date(s.compareDateTo))), 1)]),
                        _: 1
                    }, 8, ["content"])])]), I("div", A0, [I("div", C0, [I("span", $0, j(l(o).followerCount.toLocaleString()), 1), E0, B("followers")]), I("img", {
                        src: l(o).profilePicUrl,
                        class: "w-14 h-14 b-rd-50 b-white b-3 b-op-70"
                    }, null, 8, I0), I("div", O0, [I("span", P0, j(l(o).followingCount.toLocaleString()), 1), D0, B("following")])])])), [
                        [p, l(i)]
                    ])
                }
            }
        }),
        M0 = Ts(R0, [
            ["__scopeId", "data-v-8f67cfd3"]
        ]),
        L0 = {
            class: "flex justify-center mb-25"
        },
        N0 = I("span", {
            class: "ml-1"
        }, "Chat with us", -1),
        F0 = {
            class: "position-fixed bottom-0 w-100% bg-white"
        },
        j0 = {
            class: "m-4"
        },
        U0 = q({
            __name: "TrackPanel",
            setup(t) {
                const s = Vi().uuid,
                    n = ct(s, {}),
                    r = L(!0),
                    o = L("30%"),
                    i = L({
                        pauseAll: () => {}
                    }),
                    a = L({}),
                    u = L({}),
                    c = L({});
                return (d, f) => {
                    const h = M0,
                        p = k0,
                        _ = y0,
                        v = _0,
                        m = Hn,
                        T = Ss,
                        k = ml,
                        g = Gn;
                    return y(), N(g, {
                        class: "c-#1c1e21",
                        modelValue: l(r),
                        "onUpdate:modelValue": f[1] || (f[1] = C => Ke(r) ? r.value = C : null),
                        title: "Dashboard",
                        "with-header": !1,
                        direction: "rtl",
                        size: l(o),
                        onClose: f[2] || (f[2] = C => l(i).pauseAll())
                    }, {
                        default: S(() => {
                            var C;
                            return [l(n).target ? (y(), N(h, {
                                key: 0,
                                ref_key: "ProfileRef",
                                ref: a,
                                task: l(n),
                                compareDate: l(u).compareDate,
                                compareDateTo: l(u).compareDateTo
                            }, null, 8, ["task", "compareDate", "compareDateTo"])) : Y("", !0), (C = l(a).profile) != null && C.id ? (y(), N(p, {
                                key: 1,
                                ref_key: "TrackTaskRef",
                                ref: i,
                                task: l(n),
                                profile: l(a).profile,
                                onCompleted: f[0] || (f[0] = x => l(u).analyzeMetrics(l(n)))
                            }, null, 8, ["task", "profile"])) : Y("", !0), l(n).isCompleted ? (y(), N(_, {
                                key: 2,
                                compareDate: l(u).compareDate,
                                compareDateTo: l(u).compareDateTo
                            }, null, 8, ["compareDate", "compareDateTo"])) : Y("", !0), l(n).target ? (y(), N(v, {
                                key: 3,
                                ref_key: "MetricsRef",
                                ref: u,
                                task: l(n),
                                profile: l(a).profile || {},
                                "check-limit": l(c).checkLimit
                            }, null, 8, ["task", "profile", "check-limit"])) : Y("", !0), I("div", L0, [w(m, {
                                underline: !1,
                                icon: l(zu),
                                href: `${l(ms)}/contact-us?${l(ps)}`,
                                target: "_blank"
                            }, {
                                default: S(() => [N0]),
                                _: 1
                            }, 8, ["icon", "href"])]), I("div", F0, [w(T, {
                                class: "m-0"
                            }), I("div", j0, [w(k, {
                                ref_key: "ExtUserRef",
                                ref: c
                            }, null, 512)])])]
                        }),
                        _: 1
                    }, 8, ["modelValue", "size"])
                }
            }
        }),
        Y0 = {
            class: "m-4"
        },
        B0 = I("h1", null, "Develpoment Tools", -1),
        V0 = {
            key: 0,
            class: "my-8"
        },
        W0 = I("span", null, "If not downloaded, please click the test button.", -1),
        z0 = I("div", {
            class: "my-2"
        }, null, -1),
        H0 = I("span", null, "If test button not work, copy the full text to a file.", -1),
        G0 = q({
            __name: "DevTool",
            setup(t) {
                const e = L({}),
                    s = (u, c) => {
                        const d = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(u)),
                            f = document.createElement("a");
                        f.setAttribute("href", d), f.setAttribute("download", c + ".json"), document.body.appendChild(f), f.click(), f.remove()
                    },
                    n = () => {
                        console.log("download"), s([{
                            name: "test"
                        }], "test_backup")
                    },
                    r = L(!1),
                    o = async () => {
                        r.value = !0, await ht.exports(500);
                        try {
                            e.value = await se.exports.storage.local.get();
                            const u = e.value,
                                c = 5e4;
                            let d = 0;
                            const f = Math.ceil(Object.keys(u).length / c);
                            for (; d < f;) {
                                const h = d * c,
                                    p = Math.min(h + c, Object.keys(u).length),
                                    _ = Object.keys(u).slice(h, p),
                                    v = {};
                                for (const m of _) v[m] = u[m];
                                s(v, `storage_backup_${d+1}_${f}`), d++, await ht.exports(1e3)
                            }
                        } catch (u) {
                            ie.alert(`${u}`, "Error", {
                                showClose: !1
                            })
                        }
                        r.value = !1, ie.alert("Download completed.", "Complete", {
                            showClose: !1
                        })
                    }, i = u => {
                        let c = JSON.stringify(u).length;
                        const d = ["bytes", "KB", "MB", "GB", "TB"];
                        let f = 0;
                        for (; c > 1024;) c /= 1024, ++f;
                        return `${c.toFixed(2)} ${d[f]}`
                    }, a = () => {
                        const u = window.open();
                        u ? (u.document.write(`<pre>${JSON.stringify(e.value,null,2)}</pre>`), u.document.title = "All local data") : ie.alert("Failed to open new window", "Error", {
                            showClose: !1
                        })
                    };
                return (u, c) => {
                    const d = Fe,
                        f = Ss;
                    return y(), O("div", Y0, [B0, w(d, {
                        type: "primary",
                        onClick: o,
                        loading: l(r)
                    }, {
                        default: S(() => [B("Download all local data")]),
                        _: 1
                    }, 8, ["loading"]), Object.keys(l(e)).length ? (y(), O("div", V0, [I("div", null, "Data size: " + j(i(l(e))), 1), I("div", null, "Data length: " + j(Object.keys(l(e)).length) + " records", 1), w(f), I("div", null, [W0, w(d, {
                        onClick: n,
                        size: "small",
                        class: "ml-2"
                    }, {
                        default: S(() => [B("Test download")]),
                        _: 1
                    }), z0, H0, w(d, {
                        onClick: a,
                        size: "small",
                        class: "ml-2"
                    }, {
                        default: S(() => [B("Show all data")]),
                        _: 1
                    })])])) : Y("", !0)])
                }
            }
        }),
        q0 = {
            key: 0
        },
        J0 = {
            key: 1
        },
        K0 = q({
            __name: "Options",
            setup(t) {
                if (location.search.includes("syncWebSession")) try {
                    const s = JSON.parse(decodeURIComponent(location.search.substring(1)));
                    console.log(s), s.syncWebSession && (se.exports.storage.local.set(s), ie.alert("Import Web Session Success!", "Success", {
                        showClose: !1
                    }))
                } catch (s) {
                    ie.alert(`Import Web Session Failed! ${s}`, "Failed", {
                        showClose: !1
                    })
                }
                const e = !1;
                return (s, n) => e ? (y(), O("div", J0, [l(Et).name == "InsTF" ? (y(), N(U0, {
                    key: 0
                })) : (y(), N(o0, {
                    key: 1
                }))])) : (y(), O("div", q0, [w(G0)]))
            }
        }),
        Q0 = Fi(K0);
    Q0.mount("#app")
});
export default Z0();