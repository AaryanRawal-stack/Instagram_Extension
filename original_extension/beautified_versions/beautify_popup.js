var Pr = (t, e) => () => (e || t((e = {
    exports: {}
}).exports, e), e.exports);
import {
    b as St,
    G as hn,
    ag as ws,
    a as re,
    Y as mn,
    b2 as gn,
    c as vt,
    r as G,
    J as pe,
    aa as yn,
    P as ks,
    o as E,
    p as R,
    n as Rs,
    j as T,
    K as Gr,
    _ as Ns,
    bV as _e,
    S as wt,
    bW as Mr,
    bX as Yr,
    e as ke,
    O as je,
    aB as Lr,
    v as _,
    E as lt,
    V as Fr,
    W as Hr,
    aT as jr,
    bY as dt,
    a3 as Ds,
    M as qr,
    ar as Vr,
    R as zr,
    aG as Wr,
    q as xs,
    H as Xr,
    C as Jr,
    a0 as Un,
    u as Kr,
    bZ as An,
    Z as _t,
    $ as Zr,
    g as Qr,
    x as ei,
    m as O,
    A as ti,
    a1 as ni,
    h as y,
    bs as M,
    bE as kt,
    b_ as si,
    br as ri,
    aH as En,
    bp as qe,
    bB as ii,
    b$ as oi,
    aN as bn,
    w as S,
    F as Ae,
    X as Pn,
    f as H,
    t as P,
    bh as X,
    bj as K,
    bP as Gn,
    c0 as gt,
    bi as Ye,
    bO as ai,
    bJ as ci,
    aJ as Is,
    s as L,
    ax as ui,
    c1 as $s,
    c2 as Cs,
    bv as Bs,
    bw as Os,
    bF as Us,
    by as As,
    bz as Ps,
    bA as Gs,
    bx as ft,
    bN as Xt,
    bI as Ms,
    bH as li,
    c3 as di,
    c4 as _i,
    c5 as fi,
    c6 as Mn,
    c7 as pi,
    bd as hi,
    c8 as mi,
    bC as gi,
    bb as yi,
    bc as Ei,
    bM as bi,
    b4 as Ti
} from "../dist/assets/__uno.bbc33e34.js";
var S_ = Pr((k_, Br) => {
    const Rt = Symbol("tabsRootContextKey"),
        Si = St({
            tabs: {
                type: hn(Array),
                default: () => ws([])
            }
        }),
        Ys = "ElTabBar",
        vi = re({
            name: Ys
        }),
        wi = re({
            ...vi,
            props: Si,
            setup(t, {
                expose: e
            }) {
                const n = t,
                    s = wt(),
                    r = mn(Rt);
                r || gn(Ys, "<el-tabs><el-tab-bar /></el-tabs>");
                const i = vt("tabs"),
                    o = G(),
                    a = G(),
                    c = () => {
                        let l = 0,
                            d = 0;
                        const f = ["top", "bottom"].includes(r.props.tabPosition) ? "width" : "height",
                            p = f === "width" ? "x" : "y",
                            k = p === "x" ? "left" : "top";
                        return n.tabs.every(m => {
                            var b, v;
                            const g = (v = (b = s.parent) == null ? void 0 : b.refs) == null ? void 0 : v[`tab-${m.uid}`];
                            if (!g) return !1;
                            if (!m.active) return !0;
                            l = g[`offset${_e(k)}`], d = g[`client${_e(f)}`];
                            const N = window.getComputedStyle(g);
                            return f === "width" && (n.tabs.length > 1 && (d -= Number.parseFloat(N.paddingLeft) + Number.parseFloat(N.paddingRight)), l += Number.parseFloat(N.paddingLeft)), !1
                        }), {
                            [f]: `${d}px`,
                            transform: `translate${_e(p)}(${l}px)`
                        }
                    },
                    u = () => a.value = c();
                return pe(() => n.tabs, async () => {
                    await yn(), u()
                }, {
                    immediate: !0
                }), ks(o, () => u()), e({
                    ref: o,
                    update: u
                }), (l, d) => (E(), R("div", {
                    ref_key: "barRef",
                    ref: o,
                    class: Rs([T(i).e("active-bar"), T(i).is(T(r).props.tabPosition)]),
                    style: Gr(a.value)
                }, null, 6))
            }
        });
    var ki = Ns(wi, [
        ["__file", "/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-bar.vue"]
    ]);
    const Ri = St({
            panes: {
                type: hn(Array),
                default: () => ws([])
            },
            currentName: {
                type: [String, Number],
                default: ""
            },
            editable: Boolean,
            type: {
                type: String,
                values: ["card", "border-card", ""],
                default: ""
            },
            stretch: Boolean
        }),
        Ni = {
            tabClick: (t, e, n) => n instanceof Event,
            tabRemove: (t, e) => e instanceof Event
        },
        Yn = "ElTabNav",
        Di = re({
            name: Yn,
            props: Ri,
            emits: Ni,
            setup(t, {
                expose: e,
                emit: n
            }) {
                const s = wt(),
                    r = mn(Rt);
                r || gn(Yn, "<el-tabs><tab-nav /></el-tabs>");
                const i = vt("tabs"),
                    o = Mr(),
                    a = Yr(),
                    c = G(),
                    u = G(),
                    l = G(),
                    d = G(),
                    f = G(!1),
                    p = G(0),
                    k = G(!1),
                    m = G(!0),
                    b = ke(() => ["top", "bottom"].includes(r.props.tabPosition) ? "width" : "height"),
                    v = ke(() => ({
                        transform: `translate${b.value==="width"?"X":"Y"}(-${p.value}px)`
                    })),
                    g = () => {
                        if (!c.value) return;
                        const x = c.value[`offset${_e(b.value)}`],
                            U = p.value;
                        if (!U) return;
                        const D = U > x ? U - x : 0;
                        p.value = D
                    },
                    N = () => {
                        if (!c.value || !u.value) return;
                        const x = u.value[`offset${_e(b.value)}`],
                            U = c.value[`offset${_e(b.value)}`],
                            D = p.value;
                        if (x - D <= U) return;
                        const z = x - D > U * 2 ? D + U : x - U;
                        p.value = z
                    },
                    te = async () => {
                        const x = u.value;
                        if (!f.value || !l.value || !c.value || !x) return;
                        await yn();
                        const U = l.value.querySelector(".is-active");
                        if (!U) return;
                        const D = c.value,
                            z = ["top", "bottom"].includes(r.props.tabPosition),
                            W = U.getBoundingClientRect(),
                            q = D.getBoundingClientRect(),
                            ee = z ? x.offsetWidth - q.width : x.offsetHeight - q.height,
                            w = p.value;
                        let B = w;
                        z ? (W.left < q.left && (B = w - (q.left - W.left)), W.right > q.right && (B = w + W.right - q.right)) : (W.top < q.top && (B = w - (q.top - W.top)), W.bottom > q.bottom && (B = w + (W.bottom - q.bottom))), B = Math.max(B, 0), p.value = Math.min(B, ee)
                    }, le = () => {
                        var x;
                        if (!u.value || !c.value) return;
                        t.stretch && ((x = d.value) == null || x.update());
                        const U = u.value[`offset${_e(b.value)}`],
                            D = c.value[`offset${_e(b.value)}`],
                            z = p.value;
                        D < U ? (f.value = f.value || {}, f.value.prev = z, f.value.next = z + D < U, U - z < D && (p.value = U - D)) : (f.value = !1, z > 0 && (p.value = 0))
                    }, Gt = x => {
                        const U = x.code,
                            {
                                up: D,
                                down: z,
                                left: W,
                                right: q
                            } = dt;
                        if (![D, z, W, q].includes(U)) return;
                        const ee = Array.from(x.currentTarget.querySelectorAll("[role=tab]:not(.is-disabled)")),
                            w = ee.indexOf(x.target);
                        let B;
                        U === W || U === D ? w === 0 ? B = ee.length - 1 : B = w - 1 : w < ee.length - 1 ? B = w + 1 : B = 0, ee[B].focus({
                            preventScroll: !0
                        }), ee[B].click(), Ze()
                    }, Ze = () => {
                        m.value && (k.value = !0)
                    }, Oe = () => k.value = !1;
                return pe(o, x => {
                    x === "hidden" ? m.value = !1 : x === "visible" && setTimeout(() => m.value = !0, 50)
                }), pe(a, x => {
                    x ? setTimeout(() => m.value = !0, 50) : m.value = !1
                }), ks(l, le), je(() => setTimeout(() => te(), 0)), Lr(() => le()), e({
                    scrollToActiveTab: te,
                    removeFocus: Oe
                }), pe(() => t.panes, () => s.update(), {
                    flush: "post",
                    deep: !0
                }), () => {
                    const x = f.value ? [_("span", {
                            class: [i.e("nav-prev"), i.is("disabled", !f.value.prev)],
                            onClick: g
                        }, [_(lt, null, {
                            default: () => [_(Fr, null, null)]
                        })]), _("span", {
                            class: [i.e("nav-next"), i.is("disabled", !f.value.next)],
                            onClick: N
                        }, [_(lt, null, {
                            default: () => [_(Hr, null, null)]
                        })])] : null,
                        U = t.panes.map((D, z) => {
                            var W, q, ee, w;
                            const B = D.uid,
                                Mt = D.props.disabled,
                                Yt = (q = (W = D.props.name) != null ? W : D.index) != null ? q : `${z}`,
                                Lt = !Mt && (D.isClosable || t.editable);
                            D.index = `${z}`;
                            const Or = Lt ? _(lt, {
                                    class: "is-icon-close",
                                    onClick: Ee => n("tabRemove", D, Ee)
                                }, {
                                    default: () => [_(jr, null, null)]
                                }) : null,
                                Ur = ((w = (ee = D.slots).label) == null ? void 0 : w.call(ee)) || D.props.label,
                                Ar = !Mt && D.active ? 0 : -1;
                            return _("div", {
                                ref: `tab-${B}`,
                                class: [i.e("item"), i.is(r.props.tabPosition), i.is("active", D.active), i.is("disabled", Mt), i.is("closable", Lt), i.is("focus", k.value)],
                                id: `tab-${Yt}`,
                                key: `tab-${B}`,
                                "aria-controls": `pane-${Yt}`,
                                role: "tab",
                                "aria-selected": D.active,
                                tabindex: Ar,
                                onFocus: () => Ze(),
                                onBlur: () => Oe(),
                                onClick: Ee => {
                                    Oe(), n("tabClick", D, Yt, Ee)
                                },
                                onKeydown: Ee => {
                                    Lt && (Ee.code === dt.delete || Ee.code === dt.backspace) && n("tabRemove", D, Ee)
                                }
                            }, [Ur, Or])
                        });
                    return _("div", {
                        ref: l,
                        class: [i.e("nav-wrap"), i.is("scrollable", !!f.value), i.is(r.props.tabPosition)]
                    }, [x, _("div", {
                        class: i.e("nav-scroll"),
                        ref: c
                    }, [_("div", {
                        class: [i.e("nav"), i.is(r.props.tabPosition), i.is("stretch", t.stretch && ["top", "bottom"].includes(r.props.tabPosition))],
                        ref: u,
                        style: v.value,
                        role: "tablist",
                        onKeydown: Gt
                    }, [t.type ? null : _(ki, {
                        ref: d,
                        tabs: [...t.panes]
                    }, null), U])])])
                }
            }
        }),
        xi = St({
            type: {
                type: String,
                values: ["card", "border-card", ""],
                default: ""
            },
            activeName: {
                type: [String, Number]
            },
            closable: Boolean,
            addable: Boolean,
            modelValue: {
                type: [String, Number]
            },
            editable: Boolean,
            tabPosition: {
                type: String,
                values: ["top", "right", "bottom", "left"],
                default: "top"
            },
            beforeLeave: {
                type: hn(Function),
                default: () => !0
            },
            stretch: Boolean
        }),
        Ft = t => Xr(t) || Jr(t),
        Ii = {
            [Ds]: t => Ft(t),
            tabClick: (t, e) => e instanceof Event,
            tabChange: t => Ft(t),
            edit: (t, e) => ["remove", "add"].includes(e),
            tabRemove: t => Ft(t),
            tabAdd: () => !0
        };
    var $i = re({
        name: "ElTabs",
        props: xi,
        emits: Ii,
        setup(t, {
            emit: e,
            slots: n,
            expose: s
        }) {
            var r, i;
            const o = vt("tabs"),
                {
                    children: a,
                    addChild: c,
                    removeChild: u
                } = qr(wt(), "ElTabPane"),
                l = G(),
                d = G((i = (r = t.modelValue) != null ? r : t.activeName) != null ? i : "0"),
                f = v => {
                    d.value = v, e(Ds, v), e("tabChange", v)
                },
                p = async v => {
                    var g, N, te;
                    if (!(d.value === v || Un(v))) try {
                        await ((g = t.beforeLeave) == null ? void 0 : g.call(t, v, d.value)) !== !1 && (f(v), (te = (N = l.value) == null ? void 0 : N.removeFocus) == null || te.call(N))
                    } catch {}
                }, k = (v, g, N) => {
                    v.props.disabled || (p(g), e("tabClick", v, N))
                }, m = (v, g) => {
                    v.props.disabled || Un(v.props.name) || (g.stopPropagation(), e("edit", v.props.name, "remove"), e("tabRemove", v.props.name))
                }, b = () => {
                    e("edit", void 0, "add"), e("tabAdd")
                };
            return Vr({
                from: '"activeName"',
                replacement: '"model-value" or "v-model"',
                scope: "ElTabs",
                version: "2.3.0",
                ref: "https://element-plus.org/en-US/component/tabs.html#attributes",
                type: "Attribute"
            }, ke(() => !!t.activeName)), pe(() => t.activeName, v => p(v)), pe(() => t.modelValue, v => p(v)), pe(d, async () => {
                var v;
                await yn(), (v = l.value) == null || v.scrollToActiveTab()
            }), zr(Rt, {
                props: t,
                currentName: d,
                registerPane: c,
                unregisterPane: u
            }), s({
                currentName: d
            }), () => {
                const v = t.editable || t.addable ? _("span", {
                        class: o.e("new-tab"),
                        tabindex: "0",
                        onClick: b,
                        onKeydown: te => {
                            te.code === dt.enter && b()
                        }
                    }, [_(lt, {
                        class: o.is("icon-plus")
                    }, {
                        default: () => [_(Wr, null, null)]
                    })]) : null,
                    g = _("div", {
                        class: [o.e("header"), o.is(t.tabPosition)]
                    }, [v, _(Di, {
                        ref: l,
                        currentName: d.value,
                        editable: t.editable,
                        type: t.type,
                        panes: a.value,
                        stretch: t.stretch,
                        onTabClick: k,
                        onTabRemove: m
                    }, null)]),
                    N = _("div", {
                        class: o.e("content")
                    }, [xs(n, "default")]);
                return _("div", {
                    class: [o.b(), o.m(t.tabPosition), {
                        [o.m("card")]: t.type === "card",
                        [o.m("border-card")]: t.type === "border-card"
                    }]
                }, [...t.tabPosition !== "bottom" ? [g, N] : [N, g]])
            }
        }
    });
    const Ci = St({
            label: {
                type: String,
                default: ""
            },
            name: {
                type: [String, Number]
            },
            closable: Boolean,
            disabled: Boolean,
            lazy: Boolean
        }),
        Bi = ["id", "aria-hidden", "aria-labelledby"],
        Ls = "ElTabPane",
        Oi = re({
            name: Ls
        }),
        Ui = re({
            ...Oi,
            props: Ci,
            setup(t) {
                const e = t,
                    n = wt(),
                    s = Kr(),
                    r = mn(Rt);
                r || gn(Ls, "usage: <el-tabs><el-tab-pane /></el-tabs/>");
                const i = vt("tab-pane"),
                    o = G(),
                    a = ke(() => e.closable || r.props.closable),
                    c = An(() => {
                        var p;
                        return r.currentName.value === ((p = e.name) != null ? p : o.value)
                    }),
                    u = G(c.value),
                    l = ke(() => {
                        var p;
                        return (p = e.name) != null ? p : o.value
                    }),
                    d = An(() => !e.lazy || u.value || c.value);
                pe(c, p => {
                    p && (u.value = !0)
                });
                const f = _t({
                    uid: n.uid,
                    slots: s,
                    props: e,
                    paneName: l,
                    active: c,
                    index: o,
                    isClosable: a
                });
                return je(() => {
                    r.registerPane(f)
                }), Zr(() => {
                    r.unregisterPane(f.uid)
                }), (p, k) => T(d) ? Qr((E(), R("div", {
                    key: 0,
                    id: `pane-${T(l)}`,
                    class: Rs(T(i).b()),
                    role: "tabpanel",
                    "aria-hidden": !T(c),
                    "aria-labelledby": `tab-${T(l)}`
                }, [xs(p.$slots, "default")], 10, Bi)), [
                    [ei, T(c)]
                ]) : O("v-if", !0)
            }
        });
    var Fs = Ns(Ui, [
        ["__file", "/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-pane.vue"]
    ]);
    const Ai = ti($i, {
            TabPane: Fs
        }),
        Pi = ni(Fs),
        Gi = {
            viewBox: "0 0 24 24",
            width: "1.2em",
            height: "1.2em"
        },
        Mi = y("path", {
            fill: "currentColor",
            d: "M18 4.48a8.45 8.45 0 0 0-12 12l5.27 5.28a1 1 0 0 0 1.42 0L18 16.43a8.45 8.45 0 0 0 0-11.95ZM16.57 15L12 19.59L7.43 15a6.46 6.46 0 1 1 9.14 0ZM9 7.41a4.32 4.32 0 0 0 0 6.1a4.31 4.31 0 0 0 7.36-3a4.24 4.24 0 0 0-1.26-3.05A4.3 4.3 0 0 0 9 7.41Zm4.69 4.68a2.33 2.33 0 1 1 .67-1.63a2.33 2.33 0 0 1-.72 1.63Z"
        }, null, -1),
        Yi = [Mi];

    function Li(t, e) {
        return E(), R("svg", Gi, Yi)
    }
    const Fi = {
            name: "uil-location-point",
            render: Li
        },
        Hi = {
            viewBox: "0 0 24 24",
            width: "1.2em",
            height: "1.2em"
        },
        ji = y("path", {
            fill: "currentColor",
            d: "M7.25 20q-.475 0-.775-.375T6.3 18.8L7 16H4.775q-.5 0-.8-.388T3.8 14.75q.075-.35.35-.55t.625-.2H7.5l1-4H5.775q-.5 0-.8-.388T4.8 8.75q.075-.35.35-.55t.625-.2H9l.825-3.275Q9.9 4.4 10.15 4.2t.6-.2q.475 0 .775.375t.175.825L11 8h4l.825-3.275q.075-.325.325-.525t.6-.2q.475 0 .775.375t.175.825L17 8h2.225q.5 0 .8.387t.175.863q-.075.35-.35.55t-.625.2H16.5l-1 4h2.725q.5 0 .8.388t.175.862q-.075.35-.35.55t-.625.2H15l-.825 3.275q-.075.325-.325.525t-.6.2q-.475 0-.775-.375T12.3 18.8L13 16H9l-.825 3.275q-.075.325-.325.525t-.6.2Zm2.25-6h4l1-4h-4l-1 4Z"
        }, null, -1),
        qi = [ji];

    function Vi(t, e) {
        return E(), R("svg", Hi, qi)
    }
    const zi = {
            name: "material-symbols-tag-rounded",
            render: Vi
        },
        Wi = {
            viewBox: "0 0 24 24",
            width: "1.2em",
            height: "1.2em"
        },
        Xi = y("path", {
            fill: "currentColor",
            d: "M20.16 4.61A6.27 6.27 0 0 0 12 4a6.27 6.27 0 0 0-8.16 9.48l7.45 7.45a1 1 0 0 0 1.42 0l7.45-7.45a6.27 6.27 0 0 0 0-8.87Zm-1.41 7.46L12 18.81l-6.75-6.74a4.28 4.28 0 0 1 3-7.3a4.25 4.25 0 0 1 3 1.25a1 1 0 0 0 1.42 0a4.27 4.27 0 0 1 6 6.05Z"
        }, null, -1),
        Ji = [Xi];

    function Ki(t, e) {
        return E(), R("svg", Wi, Ji)
    }
    const Zi = {
            name: "uil-heart-alt",
            render: Ki
        },
        Qi = {
            viewBox: "0 0 24 24",
            width: "1.2em",
            height: "1.2em"
        },
        eo = y("path", {
            fill: "currentColor",
            d: "M12 9a1 1 0 1 0 1 1a1 1 0 0 0-1-1Zm7-7H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h11.59l3.7 3.71A1 1 0 0 0 21 22a.84.84 0 0 0 .38-.08A1 1 0 0 0 22 21V5a3 3 0 0 0-3-3Zm1 16.59l-2.29-2.3A1 1 0 0 0 17 16H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1ZM8 9a1 1 0 1 0 1 1a1 1 0 0 0-1-1Zm8 0a1 1 0 1 0 1 1a1 1 0 0 0-1-1Z"
        }, null, -1),
        to = [eo];

    function no(t, e) {
        return E(), R("svg", Qi, to)
    }
    const so = {
            name: "uil-comment-alt-dots",
            render: no
        },
        ro = {
            viewBox: "0 0 24 24",
            width: "1.2em",
            height: "1.2em"
        },
        io = y("path", {
            fill: "currentColor",
            d: "M21 10.5h-1v-1a1 1 0 0 0-2 0v1h-1a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0v-1h1a1 1 0 0 0 0-2Zm-7.7 1.72A4.92 4.92 0 0 0 15 8.5a5 5 0 0 0-10 0a4.92 4.92 0 0 0 1.7 3.72A8 8 0 0 0 2 19.5a1 1 0 0 0 2 0a6 6 0 0 1 12 0a1 1 0 0 0 2 0a8 8 0 0 0-4.7-7.28ZM10 11.5a3 3 0 1 1 3-3a3 3 0 0 1-3 3Z"
        }, null, -1),
        oo = [io];

    function ao(t, e) {
        return E(), R("svg", ro, oo)
    }
    const co = {
            name: "uil-user-plus",
            render: ao
        },
        uo = {
            viewBox: "0 0 24 24",
            width: "1.2em",
            height: "1.2em"
        },
        lo = y("path", {
            fill: "currentColor",
            d: "M13.3 12.22A4.92 4.92 0 0 0 15 8.5a5 5 0 0 0-10 0a4.92 4.92 0 0 0 1.7 3.72A8 8 0 0 0 2 19.5a1 1 0 0 0 2 0a6 6 0 0 1 12 0a1 1 0 0 0 2 0a8 8 0 0 0-4.7-7.28ZM10 11.5a3 3 0 1 1 3-3a3 3 0 0 1-3 3Zm11.71-2.37a1 1 0 0 0-1.42 0l-2 2l-.62-.63a1 1 0 0 0-1.42 0a1 1 0 0 0 0 1.41l1.34 1.34a1 1 0 0 0 1.41 0l2.67-2.67a1 1 0 0 0 .04-1.45Z"
        }, null, -1),
        _o = [lo];

    function fo(t, e) {
        return E(), R("svg", uo, _o)
    }
    const po = {
            name: "uil-user-check",
            render: fo
        },
        ho = {
            viewBox: "0 0 48 48",
            width: "1.2em",
            height: "1.2em"
        },
        mo = y("path", {
            fill: "none",
            stroke: "currentColor",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "4",
            d: "m8 8l32 32M8 40L40 8"
        }, null, -1),
        go = [mo];

    function yo(t, e) {
        return E(), R("svg", ho, go)
    }
    const Eo = {
            name: "icon-park-outline-close",
            render: yo
        },
        bo = {
            key: 0,
            class: "w-[300px]"
        },
        To = {
            class: "p-5 text-left"
        },
        So = {
            class: "mt-4"
        },
        vo = {
            class: "mt-4"
        },
        wo = {
            key: 0
        },
        ko = ["onClick"],
        Ro = {
            key: 1,
            class: "w-[400px]"
        },
        No = {
            class: "p-5 text-left"
        },
        Do = {
            class: "flex items-center justify-between"
        },
        xo = {
            class: "font-bold text-lg my-2"
        },
        Io = {
            class: "mt-8 text-left flex items-end"
        },
        $o = {
            key: 2,
            class: "w-[500px]"
        },
        Co = {
            class: "custom-tabs-label flex items-center"
        },
        Bo = {
            class: "ml-2"
        },
        Oo = {
            class: "p-5 text-left"
        },
        Uo = {
            class: "flex items-center justify-between"
        },
        Ao = {
            class: "font-bold text-lg my-2"
        },
        Po = {
            key: 0,
            class: "mt-2"
        },
        Go = {
            class: "mt-8 text-left flex items-end"
        },
        Mo = re({
            __name: "CreateTask",
            setup(t) {
                const n = M.name == "InsTF",
                    s = _t({
                        uuid: kt(),
                        target: "",
                        type: "Follower",
                        current: 0,
                        total: 0,
                        createdAt: "",
                        updatedAt: "",
                        isCompleted: !1,
                        logs: []
                    }),
                    r = [{
                        type: "Follower",
                        title: "Username",
                        target: "",
                        withDetail: !1,
                        placeholder: "E.g., spacex",
                        icon: "i-uil-user-check",
                        prefix: "https://www.instagram.com/",
                        prepend: "@"
                    }, {
                        type: "Following",
                        title: "Username",
                        target: "",
                        withDetail: !1,
                        placeholder: "E.g., nasa",
                        icon: "i-uil-user-plus",
                        prefix: "https://www.instagram.com/",
                        prepend: "@"
                    }, {
                        type: "Comment",
                        title: "Post Id",
                        target: "",
                        withDetail: !1,
                        placeholder: "E.g., CkMtsfuLLZz",
                        icon: "i-uil-comment-alt-dots",
                        prefix: "https://www.instagram.com/p/",
                        prepend: "/ p /"
                    }, {
                        type: "Like",
                        title: "Post Id",
                        target: "",
                        withDetail: !1,
                        placeholder: "E.g., CsKMjFZP__h",
                        icon: "i-uil-heart-alt",
                        prefix: "https://www.instagram.com/p/",
                        prepend: "/ p /"
                    }, {
                        type: "Hashtag",
                        title: "Tag Name",
                        target: "",
                        withDetail: !1,
                        placeholder: "E.g., marketing",
                        icon: "i-material-symbols-tag-rounded",
                        prefix: "https://www.instagram.com/explore/tags/",
                        prepend: "#"
                    }, {
                        type: "Location",
                        title: "Location Id",
                        target: "",
                        withDetail: !1,
                        placeholder: "E.g., 659951144",
                        icon: "i-uil-location-point",
                        prefix: "https://www.instagram.com/explore/locations/",
                        prepend: "\u{1F4CD}"
                    }];

                function i() {
                    return M.name == "InsC" ? r[2] : M.name == "InsL" ? r[3] : n ? Object.assign(r[0], {
                        type: "Track"
                    }) : r[0]
                }
                const o = _t(M.name == "InsGrow" ? [Object.assign(r[0], {
                        withDetail: !0
                    }), Object.assign(r[1], {
                        withDetail: !0
                    }), Object.assign(r[2], {
                        withDetail: !0
                    }), Object.assign(r[3], {
                        withDetail: !0
                    }), Object.assign(r[4], {
                        withDetail: !0
                    }), Object.assign(r[5], {
                        withDetail: !0
                    })] : r),
                    a = _t(i());
                async function c() {
                    let [m] = await X.exports.tabs.query({
                        active: !0,
                        lastFocusedWindow: !0
                    });
                    return (m == null ? void 0 : m.url) || ""
                }
                async function u(m) {
                    if (!m.target) {
                        K.alert("Please fill in the blanks.", "Tips", {
                            showClose: !1
                        });
                        return
                    }
                    s.target = m.target, s.type = m.type, (m.withDetail || M.name == "InsE") && (s.subTask = "getProfile", s.unFinishedIds = [], s.unFinishedItems = []), n ? Gn(s) : gt(s), Ye.track("Create Task", s)
                }
                async function l(m) {
                    if (!m.target) {
                        K.alert("Please fill in the blanks.", "Tips", {
                            showClose: !1
                        });
                        return
                    }
                    p(m.target), s.target = m.target, s.type = m.type, await ai(s.uuid), Gn(s), Ye.track("Create Task", s)
                }
                async function d(m = "Following", b = !0, v = !1) {
                    if (m == "Following" && (s.target = "spacex", s.type = m), m == "Comment" && (s.target = "CpTDbwUujno", s.type = "Comment"), m == "Track" && (s.target = "myself", s.type = "Track"), b) {
                        let g = s;
                        await X.exports.storage.local.set({
                            [g.uuid]: JSON.stringify(g)
                        });
                        const N = `chrome-extension://${X.exports.runtime.id}/dist/options/index.html?ext=${M.name[3]}&cmd=export&uuid=${g.uuid}`;
                        X.exports.tabs.create({
                            url: N
                        })
                    } else gt(s)
                }
                je(async () => {
                    const m = await c(),
                        b = si(m);
                    n && b.User ? a.target = b.User : ["InsC", "InsL"].includes(M.name) && b.Post ? a.target = b.Post : ["InsGrow", "InsFo", "InsE"].includes(M.name) && (b.Location ? (o[5].target = b.Location, s.type = "Location") : b.Hashtag ? (o[4].target = b.Hashtag, s.type = "Hashtag") : b.Post ? (o[2].target = b.Post, o[3].target = b.Post, s.type = "Comment") : b.User && (o[0].target = b.User, o[1].target = b.User, s.type = "Follower"))
                });
                const f = ri("recentTracks", []);

                function p(m) {
                    f.value.includes(m) && f.value.splice(f.value.indexOf(m), 1), f.value.splice(2, 1), f.value.unshift(m)
                }
                async function k() {
                    let m = await X.exports.cookies.get({
                        url: "https://www.instagram.com",
                        name: "ds_user_id"
                    });
                    if (m && m.value) {
                        let {
                            data: b
                        } = await ci.getProfile(m.value);
                        b.value && b.value.username ? l({
                            type: "Track",
                            target: b.value.username
                        }) : K.alert("Can not find username.", "Tips", {
                            showClose: !1
                        })
                    } else K.alert("Please login to your Instagram account.", "Tips", {
                        showClose: !1
                    })
                }
                return (m, b) => {
                    const v = En,
                        g = qe,
                        N = Is,
                        te = Eo,
                        le = ii,
                        Gt = po,
                        Ze = co,
                        Oe = so,
                        x = Zi,
                        U = zi,
                        D = Fi,
                        z = oi,
                        W = bn,
                        q = Pi,
                        ee = Ai;
                    return E(), R(Ae, null, [n ? (E(), R("div", bo, [y("div", To, [_(v, {
                        modelValue: T(a).target,
                        "onUpdate:modelValue": b[0] || (b[0] = w => T(a).target = w),
                        placeholder: T(a).placeholder
                    }, {
                        prepend: S(() => [L(P(T(a).prepend), 1)]),
                        _: 1
                    }, 8, ["modelValue", "placeholder"]), y("div", So, [_(g, {
                        class: "w-100%",
                        type: "primary",
                        onClick: b[1] || (b[1] = w => l(T(a)))
                    }, {
                        default: S(() => [L("Track " + P(T(a).target ? `@${T(a).target}` : "Others"), 1)]),
                        _: 1
                    })]), y("div", vo, [_(g, {
                        class: "w-100%",
                        type: "primary",
                        plain: "",
                        onClick: k
                    }, {
                        default: S(() => [L("Track Myself")]),
                        _: 1
                    })]), T(f).length ? (E(), R("div", wo, [_(N, {
                        class: "mt-8"
                    }, {
                        default: S(() => [L("Recent Track")]),
                        _: 1
                    }), (E(!0), R(Ae, null, Pn(T(f), w => (E(), R("div", {
                        class: "flex justify-between px-1 m-1",
                        key: w
                    }, [y("span", {
                        class: "text-sm cursor-pointer",
                        onClick: B => l(Object.assign({}, T(a), {
                            target: w
                        }))
                    }, P(w), 9, ko), _(te, {
                        class: "cursor-pointer",
                        onClick: B => T(f).splice(T(f).indexOf(w), 1)
                    }, null, 8, ["onClick"])]))), 128))])) : O("", !0), T(!1) ? (E(), H(le, {
                        key: 1,
                        href: `https://www.instagram.com/${T(a).target}/?ext=${T(M).name[3]}&cmd=export&uuid=${T(s).uuid}`
                    }, {
                        default: S(() => [L("Track in InsPage")]),
                        _: 1
                    }, 8, ["href"])) : O("", !0)])])) : O("", !0), ["InsC", "InsL"].includes(T(M).name) ? (E(), R("div", Ro, [y("div", No, [y("div", Do, [y("p", xo, P(T(a).title), 1), _(le, {
                        underline: !1,
                        href: "https://listmore.notion.site/New-InsFo-FAQ-622eeac8bfe44a14aefaba5a41797dbc"
                    }, {
                        default: S(() => [L("How to find " + P(T(a).title) + "?", 1)]),
                        _: 1
                    })]), _(v, {
                        modelValue: T(a).target,
                        "onUpdate:modelValue": b[2] || (b[2] = w => T(a).target = w),
                        placeholder: T(a).placeholder
                    }, {
                        prepend: S(() => [L(P(T(a).prepend), 1)]),
                        _: 1
                    }, 8, ["modelValue", "placeholder"]), y("div", Io, [_(g, {
                        type: "primary",
                        onClick: b[3] || (b[3] = w => u(T(a)))
                    }, {
                        default: S(() => [L("Start")]),
                        _: 1
                    }), T(!1) ? (E(), H(g, {
                        key: 0,
                        onClick: b[4] || (b[4] = w => d())
                    }, {
                        default: S(() => [L("Test")]),
                        _: 1
                    })) : O("", !0)])])])) : O("", !0), ["InsGrow", "InsFo", "InsE"].includes(T(M).name) ? (E(), R("div", $o, [_(ee, {
                        modelValue: T(s).type,
                        "onUpdate:modelValue": b[6] || (b[6] = w => T(s).type = w),
                        "tab-position": "left"
                    }, {
                        default: S(() => [(E(!0), R(Ae, null, Pn(T(o), w => (E(), H(q, {
                            key: w.type,
                            name: w.type,
                            class: "p-2"
                        }, ui({
                            default: S(() => [y("div", Oo, [y("div", Uo, [y("p", Ao, P(w.title), 1), _(le, {
                                underline: !1,
                                href: "https://listmore.notion.site/New-InsFo-FAQ-622eeac8bfe44a14aefaba5a41797dbc"
                            }, {
                                default: S(() => [L("How to find " + P(w.title) + "?", 1)]),
                                _: 2
                            }, 1024)]), _(v, {
                                modelValue: w.target,
                                "onUpdate:modelValue": B => w.target = B,
                                placeholder: w.placeholder
                            }, {
                                prepend: S(() => [L(P(w.prepend), 1)]),
                                _: 2
                            }, 1032, ["modelValue", "onUpdate:modelValue", "placeholder"]), w.withDetail != null && T(M).name != "InsE" ? (E(), R("div", Po, [_(W, {
                                content: "Include follower / following / post count, bio and more. But cost more time."
                            }, {
                                default: S(() => [_(z, {
                                    modelValue: w.withDetail,
                                    "onUpdate:modelValue": B => w.withDetail = B,
                                    label: "With full profile"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])]),
                                _: 2
                            }, 1024)])) : O("", !0), y("div", Go, [_(g, {
                                type: "primary",
                                onClick: B => u(w)
                            }, {
                                default: S(() => [L("Start")]),
                                _: 2
                            }, 1032, ["onClick"]), T(!1) ? (E(), H(g, {
                                key: 0,
                                onClick: b[5] || (b[5] = B => d())
                            }, {
                                default: S(() => [L("Test")]),
                                _: 1
                            })) : O("", !0)])])]),
                            _: 2
                        }, [T(o).length > 1 ? {
                            name: "label",
                            fn: S(() => [y("span", Co, [w.type == "Follower" ? (E(), H(Gt, {
                                key: 0
                            })) : O("", !0), w.type == "Following" ? (E(), H(Ze, {
                                key: 1
                            })) : O("", !0), w.type == "Comment" ? (E(), H(Oe, {
                                key: 2
                            })) : O("", !0), w.type == "Like" ? (E(), H(x, {
                                key: 3
                            })) : O("", !0), w.type == "Hashtag" ? (E(), H(U, {
                                key: 4
                            })) : O("", !0), w.type == "Location" ? (E(), H(D, {
                                key: 5
                            })) : O("", !0), y("span", Bo, P(w.type), 1)])]),
                            key: "0"
                        } : void 0]), 1032, ["name"]))), 128))]),
                        _: 1
                    }, 8, ["modelValue"])])) : O("", !0)], 64)
                }
            }
        }),
        Yo = {
            viewBox: "0 0 48 48",
            width: "1.2em",
            height: "1.2em"
        },
        Lo = y("g", {
            fill: "none",
            stroke: "currentColor",
            "stroke-linejoin": "round",
            "stroke-width": "4"
        }, [y("path", {
            d: "M12 39h32V7H12v8"
        }), y("path", {
            d: "M8 39h24V15H8v8"
        }), y("path", {
            d: "M20 23H4v16h16V23Z"
        })], -1),
        Fo = [Lo];

    function Ho(t, e) {
        return E(), R("svg", Yo, Fo)
    }
    const jo = {
            name: "icon-park-outline-multi-rectangle",
            render: Ho
        },
        qo = {
            viewBox: "0 0 48 48",
            width: "1.2em",
            height: "1.2em"
        },
        Vo = y("g", {
            fill: "none",
            stroke: "currentColor",
            "stroke-linecap": "round",
            "stroke-width": "4"
        }, [y("path", {
            "stroke-linejoin": "round",
            d: "M24 44H10a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h28a2 2 0 0 1 2 2v18m-4.5 20V31"
        }), y("path", {
            "stroke-linejoin": "round",
            d: "m31 34.5l1.5-1.5l3-3l3 3l1.5 1.5"
        }), y("path", {
            d: "M16 16h16m-16 8h8"
        })], -1),
        zo = [Vo];

    function Wo(t, e) {
        return E(), R("svg", qo, zo)
    }
    const Xo = {
            name: "icon-park-outline-upload-logs",
            render: Wo
        },
        Jo = {
            viewBox: "0 0 48 48",
            width: "1.2em",
            height: "1.2em"
        },
        Ko = y("g", {
            fill: "none",
            stroke: "currentColor",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "4"
        }, [y("path", {
            d: "M5.818 6.727V14h7.273"
        }), y("path", {
            d: "M4 24c0 11.046 8.954 20 20 20v0c11.046 0 20-8.954 20-20S35.046 4 24 4c-7.402 0-13.865 4.021-17.323 9.998"
        }), y("path", {
            d: "m24.005 12l-.001 12.009l8.48 8.48"
        })], -1),
        Zo = [Ko];

    function Qo(t, e) {
        return E(), R("svg", Jo, Zo)
    }
    const ea = {
            name: "icon-park-outline-history",
            render: Qo
        },
        ta = {
            viewBox: "0 0 48 48",
            width: "1.2em",
            height: "1.2em"
        },
        na = y("g", {
            fill: "none",
            stroke: "currentColor",
            "stroke-linejoin": "round",
            "stroke-width": "4"
        }, [y("path", {
            d: "M9 40L4 17l10 5L24 8l10 14l10-5l-5 23H9Z"
        }), y("path", {
            d: "M24 33a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z"
        })], -1),
        sa = [na];

    function ra(t, e) {
        return E(), R("svg", ta, sa)
    }
    const ia = {
            name: "icon-park-outline-crown",
            render: ra
        },
        oa = {
            viewBox: "0 0 48 48",
            width: "1.2em",
            height: "1.2em"
        },
        aa = y("path", {
            fill: "none",
            stroke: "currentColor",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "4",
            d: "M12 23.992h24M24 36L12 24l12-12"
        }, null, -1),
        ca = [aa];

    function ua(t, e) {
        return E(), R("svg", oa, ca)
    }
    const la = {
            name: "icon-park-outline-left-small",
            render: ua
        },
        da = {
            class: "p-4 min-w-400px"
        },
        _a = re({
            __name: "Upload",
            setup(t) {
                const e = G({
                    targetsTXT: "",
                    cmd: "getProfile"
                });
                async function n() {
                    const s = e.value.targetsTXT.split(`
`).map(a => a.trim()).filter(a => a),
                        r = e.value.cmd,
                        o = {
                            uuid: kt(),
                            cmd: r,
                            targets: s,
                            current: 0,
                            total: s.length,
                            isCompleted: !1,
                            requestLogs: []
                        };
                    Us(o)
                }
                return (s, r) => {
                    const i = $s,
                        o = Cs,
                        a = Bs,
                        c = En,
                        u = qe,
                        l = Os;
                    return E(), R("div", da, [_(l, {
                        model: T(e),
                        "label-position": "top"
                    }, {
                        default: S(() => [_(a, {
                            label: "Aciton"
                        }, {
                            default: S(() => [_(o, {
                                modelValue: T(e).cmd,
                                "onUpdate:modelValue": r[0] || (r[0] = d => T(e).cmd = d),
                                placeholder: ""
                            }, {
                                default: S(() => [_(i, {
                                    label: "Get Profile",
                                    value: "getProfile"
                                }), _(i, {
                                    label: "Like user's Recent Post",
                                    value: "likeRecentPost"
                                }), _(i, {
                                    label: "Follow",
                                    value: "follow"
                                }), _(i, {
                                    label: "Unfollow",
                                    value: "unfollow"
                                }), _(i, {
                                    label: "Remove Follower",
                                    value: "removeFollower"
                                })]),
                                _: 1
                            }, 8, ["modelValue"])]),
                            _: 1
                        }), _(a, {
                            label: "User Ids"
                        }, {
                            default: S(() => [_(c, {
                                class: "my-4",
                                modelValue: T(e).targetsTXT,
                                "onUpdate:modelValue": r[1] || (r[1] = d => T(e).targetsTXT = d),
                                type: "textarea",
                                autosize: {
                                    minRows: 10
                                },
                                placeholder: "Just paste the user ids (not username) here, one per line. "
                            }, null, 8, ["modelValue"])]),
                            _: 1
                        }), _(a, null, {
                            default: S(() => [_(u, {
                                type: "primary",
                                onClick: n
                            }, {
                                default: S(() => [L("Create Task")]),
                                _: 1
                            })]),
                            _: 1
                        })]),
                        _: 1
                    }, 8, ["model"])])
                }
            }
        }),
        fa = {
            viewBox: "0 0 48 48",
            width: "1.2em",
            height: "1.2em"
        },
        pa = y("path", {
            fill: "none",
            stroke: "currentColor",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "4",
            d: "M28 6h14v14m0 9.474V39a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h9m7.8 16.2L41.1 6.9"
        }, null, -1),
        ha = [pa];

    function ma(t, e) {
        return E(), R("svg", fa, ha)
    }
    const ga = {
            name: "icon-park-outline-share",
            render: ma
        },
        ya = {
            viewBox: "0 0 48 48",
            width: "1.2em",
            height: "1.2em"
        },
        Ea = y("circle", {
            cx: "12",
            cy: "24",
            r: "3",
            fill: "currentColor"
        }, null, -1),
        ba = y("circle", {
            cx: "24",
            cy: "24",
            r: "3",
            fill: "currentColor"
        }, null, -1),
        Ta = y("circle", {
            cx: "36",
            cy: "24",
            r: "3",
            fill: "currentColor"
        }, null, -1),
        Sa = [Ea, ba, Ta];

    function va(t, e) {
        return E(), R("svg", ya, Sa)
    }
    const wa = {
            name: "icon-park-outline-more",
            render: va
        },
        ka = {
            viewBox: "0 0 48 48",
            width: "1.2em",
            height: "1.2em"
        },
        Ra = y("g", {
            fill: "none",
            stroke: "currentColor",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "4"
        }, [y("path", {
            d: "M6 24.008V42h36V24"
        }), y("path", {
            d: "m33 23l-9 9l-9-9m8.992-17v26"
        })], -1),
        Na = [Ra];

    function Da(t, e) {
        return E(), R("svg", ka, Na)
    }
    const Hs = {
            name: "icon-park-outline-download",
            render: Da
        },
        xa = {
            viewBox: "0 0 48 48",
            width: "1.2em",
            height: "1.2em"
        },
        Ia = y("path", {
            fill: "none",
            stroke: "currentColor",
            "stroke-linejoin": "round",
            "stroke-width": "4",
            d: "M15 24V11.876l10.5 6.062L36 24l-10.5 6.062L15 36.124V24Z"
        }, null, -1),
        $a = [Ia];

    function Ca(t, e) {
        return E(), R("svg", xa, $a)
    }
    const Ba = {
            name: "icon-park-outline-play-one",
            render: Ca
        },
        Oa = {
            viewBox: "0 0 48 48",
            width: "1.2em",
            height: "1.2em"
        },
        Ua = y("g", {
            fill: "none",
            stroke: "currentColor",
            "stroke-linejoin": "round",
            "stroke-width": "4"
        }, [y("path", {
            d: "M21 24v-6l5 3l5 3l-5 3l-5 3v-6Z"
        }), y("path", {
            "stroke-linecap": "round",
            d: "M11.272 36.728A17.943 17.943 0 0 0 24 42c9.941 0 18-8.059 18-18S33.941 6 24 6c-4.97 0-9.47 2.015-12.728 5.272C9.614 12.93 6 17 6 17"
        }), y("path", {
            "stroke-linecap": "round",
            d: "M6 9v8h8"
        })], -1),
        Aa = [Ua];

    function Pa(t, e) {
        return E(), R("svg", Oa, Aa)
    }
    const Ga = {
            name: "icon-park-outline-replay-music",
            render: Pa
        },
        Ma = {
            style: {
                display: "flex",
                "align-items": "center"
            }
        },
        Ya = re({
            __name: "HistoryDetail",
            props: {
                history: {}
            },
            setup(t) {
                const e = t,
                    n = G([]),
                    s = G(1),
                    r = G(5),
                    i = ke(() => n.value.slice(r.value * s.value - r.value, r.value * s.value));

                function o(u) {
                    return r.value * (s.value - 1) + u + 1
                }
                je(async () => {
                    n.value = e.history.logs.sort((u, l) => u.current - l.current)
                });
                async function a(u) {
                    Ye.track("Download", Object.assign(u, {
                        from: "history detail"
                    }));
                    let l = Object.values(await X.exports.storage.local.get(ft(u.itemIds)));
                    Xt(l, e.history.target, e.history.type, "csv", u.current - u.itemIds.length)
                }
                async function c(u) {
                    const l = o(u) - 1,
                        d = n.value.slice(0, l + 1),
                        f = Object.assign(e.history, {
                            uuid: kt(),
                            current: n.value[l].current,
                            createdAt: "",
                            updatedAt: "",
                            isCompleted: !1,
                            logs: d
                        });
                    gt(f)
                }
                return (u, l) => {
                    const d = As,
                        f = Ga,
                        p = qe,
                        k = bn,
                        m = Hs,
                        b = Ms,
                        v = Ps,
                        g = Gs;
                    return E(), R(Ae, null, [y("div", null, [_(v, {
                        data: i.value,
                        fit: "",
                        "table-layout": "auto"
                    }, {
                        default: S(() => [_(d, {
                            type: "index",
                            index: o
                        }), _(d, {
                            label: "Progress"
                        }, {
                            default: S(N => [L(P(N.row.current - N.row.itemIds.length) + " - " + P(N.row.current), 1)]),
                            _: 1
                        }), _(d, null, {
                            default: S(N => [y("div", Ma, [_(b, null, {
                                default: S(() => [_(k, {
                                    content: "Start From Here"
                                }, {
                                    default: S(() => [_(p, {
                                        size: "small",
                                        onClick: te => c(N.$index),
                                        disabled: !N.row.endCursor
                                    }, {
                                        default: S(() => [_(f)]),
                                        _: 2
                                    }, 1032, ["onClick", "disabled"])]),
                                    _: 2
                                }, 1024), _(k, {
                                    content: "Download"
                                }, {
                                    default: S(() => [_(p, {
                                        size: "small",
                                        onClick: te => a(N.row)
                                    }, {
                                        default: S(() => [_(m)]),
                                        _: 2
                                    }, 1032, ["onClick"])]),
                                    _: 2
                                }, 1024)]),
                                _: 2
                            }, 1024)])]),
                            _: 1
                        })]),
                        _: 1
                    }, 8, ["data"])]), _(g, {
                        class: "m-2",
                        layout: "total, prev, pager, next",
                        "page-size": r.value,
                        total: n.value.length,
                        onCurrentChange: l[0] || (l[0] = N => {
                            s.value = N
                        })
                    }, null, 8, ["page-size", "total"])], 64)
                }
            }
        }),
        La = {
            data() {
                return {
                    items: [],
                    current_page: 1,
                    page_size: 5,
                    drawer: !1,
                    drawerTitle: "",
                    selectHistory: {}
                }
            },
            components: {
                HistoryDetail: Ya
            },
            computed: {
                paged_items() {
                    return this.items.slice(this.page_size * this.current_page - this.page_size, this.page_size * this.current_page)
                }
            },
            async mounted() {
                let t = (await X.exports.storage.local.get("historyIds")).historyIds || [];
                this.items = Object.values(await X.exports.storage.local.get(t)).map(e => JSON.parse(e)).sort((e, n) => new Date(n.updatedAt).getTime() - new Date(e.updatedAt).getTime()), console.log("got history items:", this.items, t)
            },
            methods: {
                timeAgo(t) {
                    return li(new Date(t)).value
                },
                set_page(t) {
                    this.current_page = t
                },
                paged_index(t) {
                    return this.page_size * (this.current_page - 1) + t + 1
                },
                async resume(t) {
                    t.targets ? di(t) : gt(t)
                },
                async download(t) {
                    if (Ye.track("Download", Object.assign(t, {
                            from: "history"
                        })), t.cmd) {
                        let e = Object.values(await X.exports.storage.local.get(ft(t.targets)));
                        Xt(e, t.targets[0], t.cmd)
                    } else if (t.type.includes("M-")) _i(t);
                    else {
                        let e = await fi(t);
                        Xt(e.splice(0, t.current), t.target, t.type)
                    }
                },
                openDrawer(t) {
                    this.drawerTitle = `${t.target} / ${t.type.toLowerCase()}`, this.selectHistory = t, this.drawer = !0
                },
                async clearHistory() {
                    K.confirm("Are you sure to delete all the histories? This action can not be undone.", "Warning", {
                        confirmButtonText: "Confirm",
                        cancelButtonText: "Cancel",
                        type: "warning"
                    }).then(async () => {
                        this.items = [];
                        const t = await X.exports.storage.local.get(["memberInfo", "downloadConfig", "anonymousId", "ToggleStartConfig"]);
                        await X.exports.storage.local.clear(), await X.exports.storage.local.set(t)
                    }).catch(() => {})
                },
                importHistory() {
                    K.prompt("Paste the history data here.", "Tip", {
                        confirmButtonText: "OK",
                        cancelButtonText: "Cancel"
                    }).then(async ({
                        value: t
                    }) => {
                        let e;
                        try {
                            e = JSON.parse(t)
                        } catch (n) {
                            K.alert(n, "Error", {
                                showClose: !1
                            });
                            return
                        }
                        if (console.log("import task ids:", e.historyIds), e.historyIds && e.historyIds.length) {
                            let n = 0,
                                s = (await X.exports.storage.local.get("historyIds")).historyIds || [];
                            e.historyIds.every(r => {
                                if (s.includes(r)) K.alert(`History ${r} already exists.`, "Error", {
                                    showClose: !1
                                });
                                else {
                                    s.push(r);
                                    let i = JSON.parse(e[r]);
                                    i.updatedAt = new Date().toLocaleString(), this.items.unshift(i), n++, e[r] = JSON.stringify(i)
                                }
                            }), n && (await X.exports.storage.local.set(Object.assign(e, {
                                historyIds: s
                            })), K.alert(`Import ${n} history successfully`, "Success", {
                                showClose: !1
                            }))
                        } else K.alert("No history data, please contact the developer.", "Error", {
                            showClose: !1
                        })
                    }).catch(() => {})
                },
                async exportHistory(t) {
                    let e;
                    if (t.cmd) e = await X.exports.storage.local.get(ft(t.targets));
                    else if (t.type.includes("M-")) {
                        const o = await X.exports.storage.local.get(ft(t.subTaskIds));
                        e = Object.values(o).reduce(async (a, c) => Object.assign(a, await Mn(c)), o)
                    } else e = Object.assign({
                        importedTask: t
                    }, await Mn(t));
                    const n = JSON.stringify(Object.assign(e, {
                            historyIds: [t.uuid],
                            [t.uuid]: JSON.stringify(t)
                        })),
                        {
                            text: s,
                            isSupported: r,
                            copy: i
                        } = pi();
                    r ? (i(n), console.log("copied text:", s), K.alert("You can paste the data directly when import history.", "Copied!", {
                        showClose: !1
                    })) : K.alert("Browser does not support.", "Error", {
                        showClose: !1
                    })
                }
            }
        },
        Fa = {
            class: "w-[800px] min-h-[300px]"
        },
        Ha = {
            class: "m-2"
        },
        ja = {
            key: 0
        },
        qa = {
            key: 1
        },
        Va = {
            key: 0,
            class: "capitalize"
        },
        za = {
            key: 1,
            class: "capitalize"
        },
        Wa = {
            style: {
                display: "flex",
                "align-items": "center"
            }
        },
        Xa = {
            key: 0
        },
        Ja = {
            key: 1
        },
        Ka = {
            style: {
                display: "flex",
                "align-items": "center"
            }
        };

    function Za(t, e, n, s, r, i) {
        const o = qe,
            a = As,
            c = bn,
            u = Ba,
            l = Hs,
            d = wa,
            f = ga,
            p = Ms,
            k = Ps,
            m = Gs,
            b = mi("HistoryDetail"),
            v = gi;
        return E(), R(Ae, null, [y("div", Fa, [y("div", Ha, [_(o, {
            size: "small",
            onClick: i.importHistory
        }, {
            default: S(() => [L("import history")]),
            _: 1
        }, 8, ["onClick"]), _(o, {
            size: "small",
            onClick: i.clearHistory
        }, {
            default: S(() => [L("clear history")]),
            _: 1
        }, 8, ["onClick"])]), _(k, {
            data: i.paged_items,
            fit: "",
            "table-layout": "auto"
        }, {
            default: S(() => [_(a, {
                type: "index",
                index: i.paged_index
            }, null, 8, ["index"]), _(a, {
                label: "Target"
            }, {
                default: S(g => [g.row.targets ? (E(), R("span", ja, P(g.row.targets[0]) + " ...", 1)) : (E(), R("span", qa, P(g.row.username || g.row.target), 1))]),
                _: 1
            }), _(a, {
                label: "Type"
            }, {
                default: S(g => [g.row.cmd ? (E(), R("span", Va, P(g.row.cmd), 1)) : (E(), R("span", za, P(g.row.type) + P(g.row.subTask ? `+${g.row.subTask}` : ""), 1))]),
                _: 1
            }), _(a, {
                label: "Progress"
            }, {
                default: S(g => [y("div", Wa, [g.row.targets ? (E(), R("span", Xa, P(g.row.subTaskIds ? g.row.subTaskIds.length : (g.row.current || 0).toLocaleString()) + " / " + P(g.row.targets.length), 1)) : (E(), R("span", Ja, P((g.row.current || 0).toLocaleString()) + " / " + P((g.row.total || 0).toLocaleString()), 1))])]),
                _: 1
            }), _(a, {
                label: "Updated Time"
            }, {
                default: S(g => [_(c, {
                    content: g.row.updatedAt
                }, {
                    default: S(() => [L(P(i.timeAgo(g.row.updatedAt)), 1)]),
                    _: 2
                }, 1032, ["content"])]),
                _: 1
            }), _(a, null, {
                default: S(g => [y("div", Ka, [_(p, null, {
                    default: S(() => [_(c, {
                        content: "Resume"
                    }, {
                        default: S(() => [_(o, {
                            size: "small",
                            onClick: N => i.resume(g.row)
                        }, {
                            default: S(() => [_(u)]),
                            _: 2
                        }, 1032, ["onClick"])]),
                        _: 2
                    }, 1024), _(c, {
                        content: "Download"
                    }, {
                        default: S(() => [_(o, {
                            size: "small",
                            onClick: N => i.download(g.row)
                        }, {
                            default: S(() => [_(l)]),
                            _: 2
                        }, 1032, ["onClick"])]),
                        _: 2
                    }, 1024), g.row.targets ? O("", !0) : (E(), H(c, {
                        key: 0,
                        content: "Check logs"
                    }, {
                        default: S(() => [_(o, {
                            size: "small",
                            onClick: N => i.openDrawer(g.row)
                        }, {
                            default: S(() => [_(d)]),
                            _: 2
                        }, 1032, ["onClick"])]),
                        _: 2
                    }, 1024)), g.row.subTaskIds ? O("", !0) : (E(), H(c, {
                        key: 1,
                        content: "Export"
                    }, {
                        default: S(() => [_(o, {
                            size: "small",
                            onClick: N => i.exportHistory(g.row),
                            class: "copy"
                        }, {
                            default: S(() => [_(f)]),
                            _: 2
                        }, 1032, ["onClick"])]),
                        _: 2
                    }, 1024))]),
                    _: 2
                }, 1024)])]),
                _: 1
            })]),
            _: 1
        }, 8, ["data"]), _(m, {
            class: "m-2",
            layout: "total, prev, pager, next",
            "page-size": r.page_size,
            total: r.items.length,
            onCurrentChange: i.set_page
        }, null, 8, ["page-size", "total", "onCurrentChange"])]), _(v, {
            modelValue: r.drawer,
            "onUpdate:modelValue": e[0] || (e[0] = g => r.drawer = g),
            title: r.drawerTitle,
            direction: "rtl",
            "destroy-on-close": "",
            size: "50%"
        }, {
            default: S(() => [_(b, {
                history: r.selectHistory
            }, null, 8, ["history"])]),
            _: 1
        }, 8, ["modelValue", "title"])], 64)
    }
    const Qa = hi(La, [
            ["render", Za]
        ]),
        ec = {
            class: "p-4 min-w-400px"
        },
        Qe = 1e3,
        tc = re({
            __name: "BulkExport",
            setup(t) {
                const e = G({
                    targetsTXT: "",
                    type: "M-Follower"
                });
                M.name == "InsC" && (e.value.type = "M-Comment"), M.name == "InsL" && (e.value.type = "M-Like");
                const n = {
                    "M-Follower": "Just paste the username here, one per line.",
                    "M-Following": "Just paste the username here, one per line.",
                    "M-Comment": "Just paste the post ids here, one per line.",
                    "M-Like": "Just paste the post ids here, one per line.",
                    "M-Hashtag": "Just paste the tag names here, one per line.",
                    "M-Location": "Just paste the location ids here, one per line."
                };
                async function s() {
                    const i = e.value.targetsTXT.split(`
`).map(c => c.trim()).filter(c => c);
                    let a = {
                        uuid: kt(),
                        type: e.value.type,
                        targets: i,
                        subTaskIds: [],
                        createdAt: new Date().toLocaleString(),
                        updatedAt: new Date().toLocaleString(),
                        isCompleted: !1
                    };
                    if (i.length > Qe) {
                        K.confirm(`More then ${Qe} bulk tasks may not be stable.`, "Warning", {
                            confirmButtonText: `Export first ${Qe}`,
                            cancelButtonText: "Export all",
                            type: "warning",
                            showClose: !1
                        }).then(async () => {
                            a.targets = i.slice(0, Qe), r(a)
                        }).catch(() => {
                            r(a)
                        });
                        return
                    }
                    r(a)
                }
                async function r(i) {
                    Us(i)
                }
                return (i, o) => {
                    const a = $s,
                        c = Cs,
                        u = Bs,
                        l = En,
                        d = qe,
                        f = Os;
                    return E(), R("div", ec, [_(f, {
                        model: T(e),
                        "label-position": "top"
                    }, {
                        default: S(() => [
                            ["InsC", "InsL"].includes(T(M).name) ? O("", !0) : (E(), H(u, {
                                key: 0,
                                label: "Type"
                            }, {
                                default: S(() => [_(c, {
                                    modelValue: T(e).type,
                                    "onUpdate:modelValue": o[0] || (o[0] = p => T(e).type = p),
                                    placeholder: ""
                                }, {
                                    default: S(() => [_(a, {
                                        label: "Multi-user followers",
                                        value: "M-Follower"
                                    }), _(a, {
                                        label: "Multi-user followings",
                                        value: "M-Following"
                                    }), _(a, {
                                        label: "Multi-post comments",
                                        value: "M-Comment"
                                    }), _(a, {
                                        label: "Multi-post likes",
                                        value: "M-Like"
                                    }), _(a, {
                                        label: "Multi-hashtag posts",
                                        value: "M-Hashtag"
                                    }), _(a, {
                                        label: "Multi-location posts",
                                        value: "M-Location"
                                    })]),
                                    _: 1
                                }, 8, ["modelValue"])]),
                                _: 1
                            })), _(u, {
                                label: "Targets"
                            }, {
                                default: S(() => [_(l, {
                                    class: "my-4",
                                    modelValue: T(e).targetsTXT,
                                    "onUpdate:modelValue": o[1] || (o[1] = p => T(e).targetsTXT = p),
                                    type: "textarea",
                                    autosize: {
                                        minRows: 10
                                    },
                                    placeholder: n[T(e).type]
                                }, null, 8, ["modelValue", "placeholder"])]),
                                _: 1
                            }), _(u, null, {
                                default: S(() => [_(d, {
                                    type: "primary",
                                    onClick: s
                                }, {
                                    default: S(() => [L("Create Task")]),
                                    _: 1
                                })]),
                                _: 1
                            })
                        ]),
                        _: 1
                    }, 8, ["model"])])
                }
            }
        }),
        nc = {
            class: "px-3 py-2 flex justify-between"
        },
        sc = y("span", {
            class: "ml-1"
        }, "Back", -1),
        rc = {
            key: 2,
            class: "flex items-center"
        },
        ic = ["href"],
        oc = y("span", {
            class: "ml-1"
        }, "Pricing", -1),
        ac = y("span", {
            class: "ml-1"
        }, "History", -1),
        cc = y("span", {
            class: "ml-1"
        }, "Upload", -1),
        uc = y("span", {
            class: "ml-1"
        }, "Bulk Export", -1),
        lc = {
            key: 3,
            class: "text-center text-gray-700"
        },
        dc = re({
            __name: "Popup",
            setup(t) {
                Ye.track("Open Popup");
                const e = G(!1),
                    n = G("main");
                return je(() => {}), (s, r) => {
                    const i = bi,
                        o = la,
                        a = ia,
                        c = ea,
                        u = Xo,
                        l = jo,
                        d = Is,
                        f = Mo;
                    return E(), R("div", null, [y("header", nc, [n.value == "main" ? (E(), H(i, {
                        key: 0
                    })) : (E(), R("div", {
                        key: 1,
                        onClick: r[0] || (r[0] = p => n.value = "main"),
                        class: "text-base flex items-center cursor-pointer"
                    }, [_(o), sc])), T(M).name != "InsTF" ? (E(), R("div", rc, [y("a", {
                        href: T(yi) + "/pricing?" + T(Ei),
                        class: "ml-3 cursor-pointer flex items-center decoration-none c-black"
                    }, [_(a, {
                        class: "text-base"
                    }), oc], 8, ic), y("div", {
                        class: "ml-3 cursor-pointer flex items-center",
                        onClick: r[1] || (r[1] = p => n.value = "history")
                    }, [_(c, {
                        class: "text-base"
                    }), ac]), ["InsFo", "InsGrow"].includes(T(M).name) ? (E(), R("div", {
                        key: 0,
                        class: "ml-3 cursor-pointer flex items-center",
                        onClick: r[2] || (r[2] = p => n.value = "upload")
                    }, [_(u, {
                        class: "text-base"
                    }), cc])) : O("", !0), y("div", {
                        class: "ml-3 cursor-pointer flex items-center",
                        onClick: r[3] || (r[3] = p => n.value = "bulk-export")
                    }, [_(l, {
                        class: "text-base"
                    }), uc])])) : O("", !0)]), _(d, {
                        class: "m-0"
                    }), n.value == "history" ? (E(), H(Qa, {
                        key: 0
                    })) : O("", !0), n.value == "upload" ? (E(), H(_a, {
                        key: 1
                    })) : O("", !0), n.value == "bulk-export" ? (E(), H(tc, {
                        key: 2
                    })) : O("", !0), n.value == "main" ? (E(), R("main", lc, [e.value ? O("", !0) : (E(), H(f, {
                        key: 0,
                        onStartTask: r[4] || (r[4] = p => e.value = !0)
                    }))])) : O("", !0)])
                }
            }
        }),
        js = Object.prototype.toString;

    function qs(t) {
        switch (js.call(t)) {
            case "[object Error]":
            case "[object Exception]":
            case "[object DOMException]":
                return !0;
            default:
                return ue(t, Error)
        }
    }

    function Ce(t, e) {
        return js.call(t) === `[object ${e}]`
    }

    function Tn(t) {
        return Ce(t, "ErrorEvent")
    }

    function Ln(t) {
        return Ce(t, "DOMError")
    }

    function _c(t) {
        return Ce(t, "DOMException")
    }

    function me(t) {
        return Ce(t, "String")
    }

    function Vs(t) {
        return t === null || typeof t != "object" && typeof t != "function"
    }

    function Re(t) {
        return Ce(t, "Object")
    }

    function Nt(t) {
        return typeof Event < "u" && ue(t, Event)
    }

    function fc(t) {
        return typeof Element < "u" && ue(t, Element)
    }

    function pc(t) {
        return Ce(t, "RegExp")
    }

    function Sn(t) {
        return Boolean(t && t.then && typeof t.then == "function")
    }

    function hc(t) {
        return Re(t) && "nativeEvent" in t && "preventDefault" in t && "stopPropagation" in t
    }

    function zs(t) {
        return typeof t == "number" && t !== t
    }

    function ue(t, e) {
        try {
            return t instanceof e
        } catch {
            return !1
        }
    }

    function Ws(t) {
        return !!(typeof t == "object" && t !== null && (t.__isVue || t._isVue))
    }

    function we(t, e = 0) {
        return typeof t != "string" || e === 0 || t.length <= e ? t : `${t.slice(0,e)}...`
    }

    function Fn(t, e) {
        if (!Array.isArray(t)) return "";
        const n = [];
        for (let s = 0; s < t.length; s++) {
            const r = t[s];
            try {
                Ws(r) ? n.push("[VueViewModel]") : n.push(String(r))
            } catch {
                n.push("[value cannot be serialized]")
            }
        }
        return n.join(e)
    }

    function mc(t, e, n = !1) {
        return me(t) ? pc(e) ? e.test(t) : me(e) ? n ? t === e : t.includes(e) : !1 : !1
    }

    function Ve(t, e = [], n = !1) {
        return e.some(s => mc(t, s, n))
    }

    function gc(t, e, n = 250, s, r, i, o) {
        if (!i.exception || !i.exception.values || !o || !ue(o.originalException, Error)) return;
        const a = i.exception.values.length > 0 ? i.exception.values[i.exception.values.length - 1] : void 0;
        a && (i.exception.values = yc(Jt(t, e, r, o.originalException, s, i.exception.values, a, 0), n))
    }

    function Jt(t, e, n, s, r, i, o, a) {
        if (i.length >= n + 1) return i;
        let c = [...i];
        if (ue(s[r], Error)) {
            Hn(o, a);
            const u = t(e, s[r]),
                l = c.length;
            jn(u, r, l, a), c = Jt(t, e, n, s[r], r, [u, ...c], u, l)
        }
        return Array.isArray(s.errors) && s.errors.forEach((u, l) => {
            if (ue(u, Error)) {
                Hn(o, a);
                const d = t(e, u),
                    f = c.length;
                jn(d, `errors[${l}]`, f, a), c = Jt(t, e, n, u, r, [d, ...c], d, f)
            }
        }), c
    }

    function Hn(t, e) {
        t.mechanism = t.mechanism || {
            type: "generic",
            handled: !0
        }, t.mechanism = {
            ...t.mechanism,
            is_exception_group: !0,
            exception_id: e
        }
    }

    function jn(t, e, n, s) {
        t.mechanism = t.mechanism || {
            type: "generic",
            handled: !0
        }, t.mechanism = {
            ...t.mechanism,
            type: "chained",
            source: e,
            exception_id: n,
            parent_id: s
        }
    }

    function yc(t, e) {
        return t.map(n => (n.value && (n.value = we(n.value, e)), n))
    }

    function et(t) {
        return t && t.Math == Math ? t : void 0
    }
    const Y = typeof globalThis == "object" && et(globalThis) || typeof window == "object" && et(window) || typeof self == "object" && et(self) || typeof global == "object" && et(global) || function() {
        return this
    }() || {};

    function ze() {
        return Y
    }

    function Xs(t, e, n) {
        const s = n || Y,
            r = s.__SENTRY__ = s.__SENTRY__ || {};
        return r[t] || (r[t] = e())
    }
    const pt = ze(),
        Ec = 80;

    function Ne(t, e = {}) {
        try {
            let n = t;
            const s = 5,
                r = [];
            let i = 0,
                o = 0;
            const a = " > ",
                c = a.length;
            let u;
            const l = Array.isArray(e) ? e : e.keyAttrs,
                d = !Array.isArray(e) && e.maxStringLength || Ec;
            for (; n && i++ < s && (u = bc(n, l), !(u === "html" || i > 1 && o + r.length * c + u.length >= d));) r.push(u), o += u.length, n = n.parentNode;
            return r.reverse().join(a)
        } catch {
            return "<unknown>"
        }
    }

    function bc(t, e) {
        const n = t,
            s = [];
        let r, i, o, a, c;
        if (!n || !n.tagName) return "";
        s.push(n.tagName.toLowerCase());
        const u = e && e.length ? e.filter(d => n.getAttribute(d)).map(d => [d, n.getAttribute(d)]) : null;
        if (u && u.length) u.forEach(d => {
            s.push(`[${d[0]}="${d[1]}"]`)
        });
        else if (n.id && s.push(`#${n.id}`), r = n.className, r && me(r))
            for (i = r.split(/\s+/), c = 0; c < i.length; c++) s.push(`.${i[c]}`);
        const l = ["aria-label", "type", "name", "title", "alt"];
        for (c = 0; c < l.length; c++) o = l[c], a = n.getAttribute(o), a && s.push(`[${o}="${a}"]`);
        return s.join("")
    }

    function Tc() {
        try {
            return pt.document.location.href
        } catch {
            return ""
        }
    }

    function Sc(t) {
        return pt.document && pt.document.querySelector ? pt.document.querySelector(t) : null
    }
    const vc = "Sentry Logger ",
        Kt = ["debug", "info", "warn", "error", "log", "assert", "trace"],
        yt = {};

    function Js(t) {
        if (!("console" in Y)) return t();
        const e = Y.console,
            n = {},
            s = Object.keys(yt);
        s.forEach(r => {
            const i = yt[r];
            n[r] = e[r], e[r] = i
        });
        try {
            return t()
        } finally {
            s.forEach(r => {
                e[r] = n[r]
            })
        }
    }

    function wc() {
        let t = !1;
        const e = {
            enable: () => {
                t = !0
            },
            disable: () => {
                t = !1
            }
        };
        return typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__ ? Kt.forEach(n => {
            e[n] = (...s) => {
                t && Js(() => {
                    Y.console[n](`${vc}[${n}]:`, ...s)
                })
            }
        }) : Kt.forEach(n => {
            e[n] = () => {}
        }), e
    }
    const h = wc(),
        kc = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;

    function Rc(t) {
        return t === "http" || t === "https"
    }

    function Dt(t, e = !1) {
        const {
            host: n,
            path: s,
            pass: r,
            port: i,
            projectId: o,
            protocol: a,
            publicKey: c
        } = t;
        return `${a}://${c}${e&&r?`:${r}`:""}@${n}${i?`:${i}`:""}/${s&&`${s}/`}${o}`
    }

    function Nc(t) {
        const e = kc.exec(t);
        if (!e) {
            console.error(`Invalid Sentry Dsn: ${t}`);
            return
        }
        const [n, s, r = "", i, o = "", a] = e.slice(1);
        let c = "",
            u = a;
        const l = u.split("/");
        if (l.length > 1 && (c = l.slice(0, -1).join("/"), u = l.pop()), u) {
            const d = u.match(/^\d+/);
            d && (u = d[0])
        }
        return Ks({
            host: i,
            pass: r,
            path: c,
            projectId: u,
            port: o,
            protocol: n,
            publicKey: s
        })
    }

    function Ks(t) {
        return {
            protocol: t.protocol,
            publicKey: t.publicKey || "",
            pass: t.pass || "",
            host: t.host,
            port: t.port || "",
            path: t.path || "",
            projectId: t.projectId
        }
    }

    function Dc(t) {
        if (!(typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__)) return !0;
        const {
            port: e,
            projectId: n,
            protocol: s
        } = t;
        return ["protocol", "publicKey", "host", "projectId"].find(o => t[o] ? !1 : (h.error(`Invalid Sentry Dsn: ${o} missing`), !0)) ? !1 : n.match(/^\d+$/) ? Rc(s) ? e && isNaN(parseInt(e, 10)) ? (h.error(`Invalid Sentry Dsn: Invalid port ${e}`), !1) : !0 : (h.error(`Invalid Sentry Dsn: Invalid protocol ${s}`), !1) : (h.error(`Invalid Sentry Dsn: Invalid projectId ${n}`), !1)
    }

    function xc(t) {
        const e = typeof t == "string" ? Nc(t) : Ks(t);
        if (!(!e || !Dc(e))) return e
    }
    class ne extends Error {
        constructor(e, n = "warn") {
            super(e), this.message = e, this.name = new.target.prototype.constructor.name, Object.setPrototypeOf(this, new.target.prototype), this.logLevel = n
        }
    }

    function V(t, e, n) {
        if (!(e in t)) return;
        const s = t[e],
            r = n(s);
        if (typeof r == "function") try {
            Zs(r, s)
        } catch {}
        t[e] = r
    }

    function vn(t, e, n) {
        Object.defineProperty(t, e, {
            value: n,
            writable: !0,
            configurable: !0
        })
    }

    function Zs(t, e) {
        const n = e.prototype || {};
        t.prototype = e.prototype = n, vn(t, "__sentry_original__", e)
    }

    function wn(t) {
        return t.__sentry_original__
    }

    function Ic(t) {
        return Object.keys(t).map(e => `${encodeURIComponent(e)}=${encodeURIComponent(t[e])}`).join("&")
    }

    function Qs(t) {
        if (qs(t)) return {
            message: t.message,
            name: t.name,
            stack: t.stack,
            ...Vn(t)
        };
        if (Nt(t)) {
            const e = {
                type: t.type,
                target: qn(t.target),
                currentTarget: qn(t.currentTarget),
                ...Vn(t)
            };
            return typeof CustomEvent < "u" && ue(t, CustomEvent) && (e.detail = t.detail), e
        } else return t
    }

    function qn(t) {
        try {
            return fc(t) ? Ne(t) : Object.prototype.toString.call(t)
        } catch {
            return "<unknown>"
        }
    }

    function Vn(t) {
        if (typeof t == "object" && t !== null) {
            const e = {};
            for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e
        } else return {}
    }

    function $c(t, e = 40) {
        const n = Object.keys(Qs(t));
        if (n.sort(), !n.length) return "[object has no keys]";
        if (n[0].length >= e) return we(n[0], e);
        for (let s = n.length; s > 0; s--) {
            const r = n.slice(0, s).join(", ");
            if (!(r.length > e)) return s === n.length ? r : we(r, e)
        }
        return ""
    }

    function he(t) {
        return Zt(t, new Map)
    }

    function Zt(t, e) {
        if (Re(t)) {
            const n = e.get(t);
            if (n !== void 0) return n;
            const s = {};
            e.set(t, s);
            for (const r of Object.keys(t)) typeof t[r] < "u" && (s[r] = Zt(t[r], e));
            return s
        }
        if (Array.isArray(t)) {
            const n = e.get(t);
            if (n !== void 0) return n;
            const s = [];
            return e.set(t, s), t.forEach(r => {
                s.push(Zt(r, e))
            }), s
        }
        return t
    }
    const er = 50,
        zn = /\(error: (.*)\)/,
        Wn = /captureMessage|captureException/;

    function tr(...t) {
        const e = t.sort((n, s) => n[0] - s[0]).map(n => n[1]);
        return (n, s = 0) => {
            const r = [],
                i = n.split(`
`);
            for (let o = s; o < i.length; o++) {
                const a = i[o];
                if (a.length > 1024) continue;
                const c = zn.test(a) ? a.replace(zn, "$1") : a;
                if (!c.match(/\S*Error: /)) {
                    for (const u of e) {
                        const l = u(c);
                        if (l) {
                            r.push(l);
                            break
                        }
                    }
                    if (r.length >= er) break
                }
            }
            return Bc(r)
        }
    }

    function Cc(t) {
        return Array.isArray(t) ? tr(...t) : t
    }

    function Bc(t) {
        if (!t.length) return [];
        const e = Array.from(t);
        return /sentryWrapped/.test(e[e.length - 1].function || "") && e.pop(), e.reverse(), Wn.test(e[e.length - 1].function || "") && (e.pop(), Wn.test(e[e.length - 1].function || "") && e.pop()), e.slice(0, er).map(n => ({
            ...n,
            filename: n.filename || e[e.length - 1].filename,
            function: n.function || "?"
        }))
    }
    const Ht = "<anonymous>";

    function ge(t) {
        try {
            return !t || typeof t != "function" ? Ht : t.name || Ht
        } catch {
            return Ht
        }
    }
    const Qt = ze();

    function nr() {
        if (!("fetch" in Qt)) return !1;
        try {
            return new Headers, new Request("http://www.example.com"), new Response, !0
        } catch {
            return !1
        }
    }

    function en(t) {
        return t && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString())
    }

    function Oc() {
        if (!nr()) return !1;
        if (en(Qt.fetch)) return !0;
        let t = !1;
        const e = Qt.document;
        if (e && typeof e.createElement == "function") try {
            const n = e.createElement("iframe");
            n.hidden = !0, e.head.appendChild(n), n.contentWindow && n.contentWindow.fetch && (t = en(n.contentWindow.fetch)), e.head.removeChild(n)
        } catch (n) {
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && h.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", n)
        }
        return t
    }
    const tt = ze();

    function Uc() {
        const t = tt.chrome,
            e = t && t.app && t.app.runtime,
            n = "history" in tt && !!tt.history.pushState && !!tt.history.replaceState;
        return !e && n
    }
    const j = ze(),
        ve = "__sentry_xhr_v2__",
        Pe = {},
        Xn = {};

    function Ac(t) {
        if (!Xn[t]) switch (Xn[t] = !0, t) {
            case "console":
                Pc();
                break;
            case "dom":
                qc();
                break;
            case "xhr":
                Yc();
                break;
            case "fetch":
                Gc();
                break;
            case "history":
                Lc();
                break;
            case "error":
                Vc();
                break;
            case "unhandledrejection":
                zc();
                break;
            default:
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && h.warn("unknown instrumentation type:", t);
                return
        }
    }

    function Q(t, e) {
        Pe[t] = Pe[t] || [], Pe[t].push(e), Ac(t)
    }

    function se(t, e) {
        if (!(!t || !Pe[t]))
            for (const n of Pe[t] || []) try {
                n(e)
            } catch (s) {
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && h.error(`Error while triggering instrumentation handler.
Type: ${t}
Name: ${ge(n)}
Error:`, s)
            }
    }

    function Pc() {
        "console" in Y && Kt.forEach(function(t) {
            t in Y.console && V(Y.console, t, function(e) {
                return yt[t] = e,
                    function(...n) {
                        se("console", {
                            args: n,
                            level: t
                        });
                        const s = yt[t];
                        s && s.apply(Y.console, n)
                    }
            })
        })
    }

    function Gc() {
        !Oc() || V(Y, "fetch", function(t) {
            return function(...e) {
                const {
                    method: n,
                    url: s
                } = Mc(e), r = {
                    args: e,
                    fetchData: {
                        method: n,
                        url: s
                    },
                    startTimestamp: Date.now()
                };
                return se("fetch", {
                    ...r
                }), t.apply(Y, e).then(i => (se("fetch", {
                    ...r,
                    endTimestamp: Date.now(),
                    response: i
                }), i), i => {
                    throw se("fetch", {
                        ...r,
                        endTimestamp: Date.now(),
                        error: i
                    }), i
                })
            }
        })
    }

    function tn(t, e) {
        return !!t && typeof t == "object" && !!t[e]
    }

    function Jn(t) {
        return typeof t == "string" ? t : t ? tn(t, "url") ? t.url : t.toString ? t.toString() : "" : ""
    }

    function Mc(t) {
        if (t.length === 0) return {
            method: "GET",
            url: ""
        };
        if (t.length === 2) {
            const [n, s] = t;
            return {
                url: Jn(n),
                method: tn(s, "method") ? String(s.method).toUpperCase() : "GET"
            }
        }
        const e = t[0];
        return {
            url: Jn(e),
            method: tn(e, "method") ? String(e.method).toUpperCase() : "GET"
        }
    }

    function Yc() {
        if (!j.XMLHttpRequest) return;
        const t = XMLHttpRequest.prototype;
        V(t, "open", function(e) {
            return function(...n) {
                const s = n[1],
                    r = this[ve] = {
                        method: me(n[0]) ? n[0].toUpperCase() : n[0],
                        url: n[1],
                        request_headers: {}
                    };
                me(s) && r.method === "POST" && s.match(/sentry_key/) && (this.__sentry_own_request__ = !0);
                const i = () => {
                    const o = this[ve];
                    if (!!o && this.readyState === 4) {
                        try {
                            o.status_code = this.status
                        } catch {}
                        se("xhr", {
                            args: n,
                            endTimestamp: Date.now(),
                            startTimestamp: Date.now(),
                            xhr: this
                        })
                    }
                };
                return "onreadystatechange" in this && typeof this.onreadystatechange == "function" ? V(this, "onreadystatechange", function(o) {
                    return function(...a) {
                        return i(), o.apply(this, a)
                    }
                }) : this.addEventListener("readystatechange", i), V(this, "setRequestHeader", function(o) {
                    return function(...a) {
                        const [c, u] = a, l = this[ve];
                        return l && (l.request_headers[c.toLowerCase()] = u), o.apply(this, a)
                    }
                }), e.apply(this, n)
            }
        }), V(t, "send", function(e) {
            return function(...n) {
                const s = this[ve];
                return s && n[0] !== void 0 && (s.body = n[0]), se("xhr", {
                    args: n,
                    startTimestamp: Date.now(),
                    xhr: this
                }), e.apply(this, n)
            }
        })
    }
    let nt;

    function Lc() {
        if (!Uc()) return;
        const t = j.onpopstate;
        j.onpopstate = function(...n) {
            const s = j.location.href,
                r = nt;
            if (nt = s, se("history", {
                    from: r,
                    to: s
                }), t) try {
                return t.apply(this, n)
            } catch {}
        };

        function e(n) {
            return function(...s) {
                const r = s.length > 2 ? s[2] : void 0;
                if (r) {
                    const i = nt,
                        o = String(r);
                    nt = o, se("history", {
                        from: i,
                        to: o
                    })
                }
                return n.apply(this, s)
            }
        }
        V(j.history, "pushState", e), V(j.history, "replaceState", e)
    }
    const Fc = 1e3;
    let st, rt;

    function Hc(t, e) {
        if (!t || t.type !== e.type) return !0;
        try {
            if (t.target !== e.target) return !0
        } catch {}
        return !1
    }

    function jc(t) {
        if (t.type !== "keypress") return !1;
        try {
            const e = t.target;
            if (!e || !e.tagName) return !0;
            if (e.tagName === "INPUT" || e.tagName === "TEXTAREA" || e.isContentEditable) return !1
        } catch {}
        return !0
    }

    function Kn(t, e = !1) {
        return n => {
            if (!n || rt === n || jc(n)) return;
            const s = n.type === "keypress" ? "input" : n.type;
            st === void 0 ? (t({
                event: n,
                name: s,
                global: e
            }), rt = n) : Hc(rt, n) && (t({
                event: n,
                name: s,
                global: e
            }), rt = n), clearTimeout(st), st = j.setTimeout(() => {
                st = void 0
            }, Fc)
        }
    }

    function qc() {
        if (!j.document) return;
        const t = se.bind(null, "dom"),
            e = Kn(t, !0);
        j.document.addEventListener("click", e, !1), j.document.addEventListener("keypress", e, !1), ["EventTarget", "Node"].forEach(n => {
            const s = j[n] && j[n].prototype;
            !s || !s.hasOwnProperty || !s.hasOwnProperty("addEventListener") || (V(s, "addEventListener", function(r) {
                return function(i, o, a) {
                    if (i === "click" || i == "keypress") try {
                        const c = this,
                            u = c.__sentry_instrumentation_handlers__ = c.__sentry_instrumentation_handlers__ || {},
                            l = u[i] = u[i] || {
                                refCount: 0
                            };
                        if (!l.handler) {
                            const d = Kn(t);
                            l.handler = d, r.call(this, i, d, a)
                        }
                        l.refCount++
                    } catch {}
                    return r.call(this, i, o, a)
                }
            }), V(s, "removeEventListener", function(r) {
                return function(i, o, a) {
                    if (i === "click" || i == "keypress") try {
                        const c = this,
                            u = c.__sentry_instrumentation_handlers__ || {},
                            l = u[i];
                        l && (l.refCount--, l.refCount <= 0 && (r.call(this, i, l.handler, a), l.handler = void 0, delete u[i]), Object.keys(u).length === 0 && delete c.__sentry_instrumentation_handlers__)
                    } catch {}
                    return r.call(this, i, o, a)
                }
            }))
        })
    }
    let it = null;

    function Vc() {
        it = j.onerror, j.onerror = function(t, e, n, s, r) {
            return se("error", {
                column: s,
                error: r,
                line: n,
                msg: t,
                url: e
            }), it && !it.__SENTRY_LOADER__ ? it.apply(this, arguments) : !1
        }, j.onerror.__SENTRY_INSTRUMENTED__ = !0
    }
    let ot = null;

    function zc() {
        ot = j.onunhandledrejection, j.onunhandledrejection = function(t) {
            return se("unhandledrejection", t), ot && !ot.__SENTRY_LOADER__ ? ot.apply(this, arguments) : !0
        }, j.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0
    }

    function Wc() {
        const t = typeof WeakSet == "function",
            e = t ? new WeakSet : [];

        function n(r) {
            if (t) return e.has(r) ? !0 : (e.add(r), !1);
            for (let i = 0; i < e.length; i++)
                if (e[i] === r) return !0;
            return e.push(r), !1
        }

        function s(r) {
            if (t) e.delete(r);
            else
                for (let i = 0; i < e.length; i++)
                    if (e[i] === r) {
                        e.splice(i, 1);
                        break
                    }
        }
        return [n, s]
    }

    function J() {
        const t = Y,
            e = t.crypto || t.msCrypto;
        let n = () => Math.random() * 16;
        try {
            if (e && e.randomUUID) return e.randomUUID().replace(/-/g, "");
            e && e.getRandomValues && (n = () => e.getRandomValues(new Uint8Array(1))[0])
        } catch {}
        return ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, s => (s ^ (n() & 15) >> s / 4).toString(16))
    }

    function sr(t) {
        return t.exception && t.exception.values ? t.exception.values[0] : void 0
    }

    function fe(t) {
        const {
            message: e,
            event_id: n
        } = t;
        if (e) return e;
        const s = sr(t);
        return s ? s.type && s.value ? `${s.type}: ${s.value}` : s.type || s.value || n || "<unknown>" : n || "<unknown>"
    }

    function nn(t, e, n) {
        const s = t.exception = t.exception || {},
            r = s.values = s.values || [],
            i = r[0] = r[0] || {};
        i.value || (i.value = e || ""), i.type || (i.type = n || "Error")
    }

    function De(t, e) {
        const n = sr(t);
        if (!n) return;
        const s = {
                type: "generic",
                handled: !0
            },
            r = n.mechanism;
        if (n.mechanism = {
                ...s,
                ...r,
                ...e
            }, e && "data" in e) {
            const i = {
                ...r && r.data,
                ...e.data
            };
            n.mechanism.data = i
        }
    }

    function Zn(t) {
        if (t && t.__sentry_captured__) return !0;
        try {
            vn(t, "__sentry_captured__", !0)
        } catch {}
        return !1
    }

    function kn(t) {
        return Array.isArray(t) ? t : [t]
    }

    function Xc() {
        return typeof __SENTRY_BROWSER_BUNDLE__ < "u" && !!__SENTRY_BROWSER_BUNDLE__
    }

    function Jc() {
        return "npm"
    }

    function Kc() {
        return !Xc() && Object.prototype.toString.call(typeof process < "u" ? process : 0) === "[object process]"
    }

    function Zc(t, e) {
        return t.require(e)
    }

    function de(t, e = 100, n = 1 / 0) {
        try {
            return sn("", t, e, n)
        } catch (s) {
            return {
                ERROR: `**non-serializable** (${s})`
            }
        }
    }

    function rr(t, e = 3, n = 100 * 1024) {
        const s = de(t, e);
        return nu(s) > n ? rr(t, e - 1, n) : s
    }

    function sn(t, e, n = 1 / 0, s = 1 / 0, r = Wc()) {
        const [i, o] = r;
        if (e == null || ["number", "boolean", "string"].includes(typeof e) && !zs(e)) return e;
        const a = Qc(t, e);
        if (!a.startsWith("[object ")) return a;
        if (e.__sentry_skip_normalization__) return e;
        const c = typeof e.__sentry_override_normalization_depth__ == "number" ? e.__sentry_override_normalization_depth__ : n;
        if (c === 0) return a.replace("object ", "");
        if (i(e)) return "[Circular ~]";
        const u = e;
        if (u && typeof u.toJSON == "function") try {
            const p = u.toJSON();
            return sn("", p, c - 1, s, r)
        } catch {}
        const l = Array.isArray(e) ? [] : {};
        let d = 0;
        const f = Qs(e);
        for (const p in f) {
            if (!Object.prototype.hasOwnProperty.call(f, p)) continue;
            if (d >= s) {
                l[p] = "[MaxProperties ~]";
                break
            }
            const k = f[p];
            l[p] = sn(p, k, c - 1, s, r), d++
        }
        return o(e), l
    }

    function Qc(t, e) {
        try {
            if (t === "domain" && e && typeof e == "object" && e._events) return "[Domain]";
            if (t === "domainEmitter") return "[DomainEmitter]";
            if (typeof global < "u" && e === global) return "[Global]";
            if (typeof window < "u" && e === window) return "[Window]";
            if (typeof document < "u" && e === document) return "[Document]";
            if (Ws(e)) return "[VueViewModel]";
            if (hc(e)) return "[SyntheticEvent]";
            if (typeof e == "number" && e !== e) return "[NaN]";
            if (typeof e == "function") return `[Function: ${ge(e)}]`;
            if (typeof e == "symbol") return `[${String(e)}]`;
            if (typeof e == "bigint") return `[BigInt: ${String(e)}]`;
            const n = eu(e);
            return /^HTML(\w*)Element$/.test(n) ? `[HTMLElement: ${n}]` : `[object ${n}]`
        } catch (n) {
            return `**non-serializable** (${n})`
        }
    }

    function eu(t) {
        const e = Object.getPrototypeOf(t);
        return e ? e.constructor.name : "null prototype"
    }

    function tu(t) {
        return ~-encodeURI(t).split(/%..|./).length
    }

    function nu(t) {
        return tu(JSON.stringify(t))
    }
    var ce;
    (function(t) {
        t[t.PENDING = 0] = "PENDING";
        const n = 1;
        t[t.RESOLVED = n] = "RESOLVED";
        const s = 2;
        t[t.REJECTED = s] = "REJECTED"
    })(ce || (ce = {}));

    function Te(t) {
        return new Z(e => {
            e(t)
        })
    }

    function Et(t) {
        return new Z((e, n) => {
            n(t)
        })
    }
    class Z {
        constructor(e) {
            Z.prototype.__init.call(this), Z.prototype.__init2.call(this), Z.prototype.__init3.call(this), Z.prototype.__init4.call(this), this._state = ce.PENDING, this._handlers = [];
            try {
                e(this._resolve, this._reject)
            } catch (n) {
                this._reject(n)
            }
        }
        then(e, n) {
            return new Z((s, r) => {
                this._handlers.push([!1, i => {
                    if (!e) s(i);
                    else try {
                        s(e(i))
                    } catch (o) {
                        r(o)
                    }
                }, i => {
                    if (!n) r(i);
                    else try {
                        s(n(i))
                    } catch (o) {
                        r(o)
                    }
                }]), this._executeHandlers()
            })
        } catch (e) {
            return this.then(n => n, e)
        } finally(e) {
            return new Z((n, s) => {
                let r, i;
                return this.then(o => {
                    i = !1, r = o, e && e()
                }, o => {
                    i = !0, r = o, e && e()
                }).then(() => {
                    if (i) {
                        s(r);
                        return
                    }
                    n(r)
                })
            })
        }
        __init() {
            this._resolve = e => {
                this._setResult(ce.RESOLVED, e)
            }
        }
        __init2() {
            this._reject = e => {
                this._setResult(ce.REJECTED, e)
            }
        }
        __init3() {
            this._setResult = (e, n) => {
                if (this._state === ce.PENDING) {
                    if (Sn(n)) {
                        n.then(this._resolve, this._reject);
                        return
                    }
                    this._state = e, this._value = n, this._executeHandlers()
                }
            }
        }
        __init4() {
            this._executeHandlers = () => {
                if (this._state === ce.PENDING) return;
                const e = this._handlers.slice();
                this._handlers = [], e.forEach(n => {
                    n[0] || (this._state === ce.RESOLVED && n[1](this._value), this._state === ce.REJECTED && n[2](this._value), n[0] = !0)
                })
            }
        }
    }

    function su(t) {
        const e = [];

        function n() {
            return t === void 0 || e.length < t
        }

        function s(o) {
            return e.splice(e.indexOf(o), 1)[0]
        }

        function r(o) {
            if (!n()) return Et(new ne("Not adding Promise because buffer limit was reached."));
            const a = o();
            return e.indexOf(a) === -1 && e.push(a), a.then(() => s(a)).then(null, () => s(a).then(null, () => {})), a
        }

        function i(o) {
            return new Z((a, c) => {
                let u = e.length;
                if (!u) return a(!0);
                const l = setTimeout(() => {
                    o && o > 0 && a(!1)
                }, o);
                e.forEach(d => {
                    Te(d).then(() => {
                        --u || (clearTimeout(l), a(!0))
                    }, c)
                })
            })
        }
        return {
            $: e,
            add: r,
            drain: i
        }
    }

    function jt(t) {
        if (!t) return {};
        const e = t.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
        if (!e) return {};
        const n = e[6] || "",
            s = e[8] || "";
        return {
            host: e[4],
            path: e[5],
            protocol: e[2],
            search: n,
            hash: s,
            relative: e[5] + n + s
        }
    }
    const ru = ["fatal", "error", "warning", "log", "info", "debug"];

    function iu(t) {
        return t === "warn" ? "warning" : ru.includes(t) ? t : "log"
    }
    const ir = ze(),
        rn = {
            nowSeconds: () => Date.now() / 1e3
        };

    function ou() {
        const {
            performance: t
        } = ir;
        if (!t || !t.now) return;
        const e = Date.now() - t.now();
        return {
            now: () => t.now(),
            timeOrigin: e
        }
    }

    function au() {
        try {
            return Zc(Br, "perf_hooks").performance
        } catch {
            return
        }
    }
    const qt = Kc() ? au() : ou(),
        Qn = qt === void 0 ? rn : {
            nowSeconds: () => (qt.timeOrigin + qt.now()) / 1e3
        },
        xt = rn.nowSeconds.bind(rn),
        ye = Qn.nowSeconds.bind(Qn),
        ae = (() => {
            const {
                performance: t
            } = ir;
            if (!t || !t.now) return;
            const e = 3600 * 1e3,
                n = t.now(),
                s = Date.now(),
                r = t.timeOrigin ? Math.abs(t.timeOrigin + n - s) : e,
                i = r < e,
                o = t.timing && t.timing.navigationStart,
                c = typeof o == "number" ? Math.abs(o + n - s) : e,
                u = c < e;
            return i || u ? r <= c ? t.timeOrigin : o : s
        })(),
        on = "baggage",
        or = "sentry-",
        cu = /^sentry-/,
        uu = 8192;

    function lu(t) {
        if (!me(t) && !Array.isArray(t)) return;
        let e = {};
        if (Array.isArray(t)) e = t.reduce((s, r) => {
            const i = es(r);
            return {
                ...s,
                ...i
            }
        }, {});
        else {
            if (!t) return;
            e = es(t)
        }
        const n = Object.entries(e).reduce((s, [r, i]) => {
            if (r.match(cu)) {
                const o = r.slice(or.length);
                s[o] = i
            }
            return s
        }, {});
        if (Object.keys(n).length > 0) return n
    }

    function an(t) {
        if (!t) return;
        const e = Object.entries(t).reduce((n, [s, r]) => (r && (n[`${or}${s}`] = r), n), {});
        return du(e)
    }

    function es(t) {
        return t.split(",").map(e => e.split("=").map(n => decodeURIComponent(n.trim()))).reduce((e, [n, s]) => (e[n] = s, e), {})
    }

    function du(t) {
        if (Object.keys(t).length !== 0) return Object.entries(t).reduce((e, [n, s], r) => {
            const i = `${encodeURIComponent(n)}=${encodeURIComponent(s)}`,
                o = r === 0 ? i : `${e},${i}`;
            return o.length > uu ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && h.warn(`Not adding key: ${n} with val: ${s} to baggage header due to exceeding baggage size limits.`), e) : o
        }, "")
    }
    const _u = new RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");

    function fu(t) {
        if (!t) return;
        const e = t.match(_u);
        if (!e) return;
        let n;
        return e[3] === "1" ? n = !0 : e[3] === "0" && (n = !1), {
            traceId: e[1],
            parentSampled: n,
            parentSpanId: e[2]
        }
    }

    function pu(t, e) {
        const n = fu(t),
            s = lu(e),
            {
                traceId: r,
                parentSpanId: i,
                parentSampled: o
            } = n || {},
            a = {
                traceId: r || J(),
                spanId: J().substring(16),
                sampled: o
            };
        return i && (a.parentSpanId = i), s && (a.dsc = s), {
            traceparentData: n,
            dynamicSamplingContext: s,
            propagationContext: a
        }
    }

    function Rn(t = J(), e = J().substring(16), n) {
        let s = "";
        return n !== void 0 && (s = n ? "-1" : "-0"), `${t}-${e}${s}`
    }

    function We(t, e = []) {
        return [t, e]
    }

    function hu(t, e) {
        const [n, s] = t;
        return [n, [...s, e]]
    }

    function ts(t, e) {
        const n = t[1];
        for (const s of n) {
            const r = s[0].type;
            if (e(s, r)) return !0
        }
        return !1
    }

    function cn(t, e) {
        return (e || new TextEncoder).encode(t)
    }

    function mu(t, e) {
        const [n, s] = t;
        let r = JSON.stringify(n);

        function i(o) {
            typeof r == "string" ? r = typeof o == "string" ? r + o : [cn(r, e), o] : r.push(typeof o == "string" ? cn(o, e) : o)
        }
        for (const o of s) {
            const [a, c] = o;
            if (i(`
${JSON.stringify(a)}
`), typeof c == "string" || c instanceof Uint8Array) i(c);
            else {
                let u;
                try {
                    u = JSON.stringify(c)
                } catch {
                    u = JSON.stringify(de(c))
                }
                i(u)
            }
        }
        return typeof r == "string" ? r : gu(r)
    }

    function gu(t) {
        const e = t.reduce((r, i) => r + i.length, 0),
            n = new Uint8Array(e);
        let s = 0;
        for (const r of t) n.set(r, s), s += r.length;
        return n
    }

    function yu(t, e) {
        const n = typeof t.data == "string" ? cn(t.data, e) : t.data;
        return [he({
            type: "attachment",
            length: n.length,
            filename: t.filename,
            content_type: t.contentType,
            attachment_type: t.attachmentType
        }), n]
    }
    const Eu = {
        session: "session",
        sessions: "session",
        attachment: "attachment",
        transaction: "transaction",
        event: "error",
        client_report: "internal",
        user_report: "default",
        profile: "profile",
        replay_event: "replay",
        replay_recording: "replay",
        check_in: "monitor"
    };

    function ns(t) {
        return Eu[t]
    }

    function ar(t) {
        if (!t || !t.sdk) return;
        const {
            name: e,
            version: n
        } = t.sdk;
        return {
            name: e,
            version: n
        }
    }

    function bu(t, e, n, s) {
        const r = t.sdkProcessingMetadata && t.sdkProcessingMetadata.dynamicSamplingContext;
        return {
            event_id: t.event_id,
            sent_at: new Date().toISOString(),
            ...e && {
                sdk: e
            },
            ...!!n && {
                dsn: Dt(s)
            },
            ...r && {
                trace: he({
                    ...r
                })
            }
        }
    }

    function Tu(t, e, n) {
        const s = [{
            type: "client_report"
        }, {
            timestamp: n || xt(),
            discarded_events: t
        }];
        return We(e ? {
            dsn: e
        } : {}, [s])
    }
    const Su = 60 * 1e3;

    function vu(t, e = Date.now()) {
        const n = parseInt(`${t}`, 10);
        if (!isNaN(n)) return n * 1e3;
        const s = Date.parse(`${t}`);
        return isNaN(s) ? Su : s - e
    }

    function wu(t, e) {
        return t[e] || t.all || 0
    }

    function ku(t, e, n = Date.now()) {
        return wu(t, e) > n
    }

    function Ru(t, {
        statusCode: e,
        headers: n
    }, s = Date.now()) {
        const r = {
                ...t
            },
            i = n && n["x-sentry-rate-limits"],
            o = n && n["retry-after"];
        if (i)
            for (const a of i.trim().split(",")) {
                const [c, u] = a.split(":", 2), l = parseInt(c, 10), d = (isNaN(l) ? 60 : l) * 1e3;
                if (!u) r.all = s + d;
                else
                    for (const f of u.split(";")) r[f] = s + d
            } else o ? r.all = s + vu(o, s) : e === 429 && (r.all = s + 60 * 1e3);
        return r
    }
    const Nn = "production";

    function Nu(t) {
        const e = ye(),
            n = {
                sid: J(),
                init: !0,
                timestamp: e,
                started: e,
                duration: 0,
                status: "ok",
                errors: 0,
                ignoreDuration: !1,
                toJSON: () => xu(n)
            };
        return t && xe(n, t), n
    }

    function xe(t, e = {}) {
        if (e.user && (!t.ipAddress && e.user.ip_address && (t.ipAddress = e.user.ip_address), !t.did && !e.did && (t.did = e.user.id || e.user.email || e.user.username)), t.timestamp = e.timestamp || ye(), e.ignoreDuration && (t.ignoreDuration = e.ignoreDuration), e.sid && (t.sid = e.sid.length === 32 ? e.sid : J()), e.init !== void 0 && (t.init = e.init), !t.did && e.did && (t.did = `${e.did}`), typeof e.started == "number" && (t.started = e.started), t.ignoreDuration) t.duration = void 0;
        else if (typeof e.duration == "number") t.duration = e.duration;
        else {
            const n = t.timestamp - t.started;
            t.duration = n >= 0 ? n : 0
        }
        e.release && (t.release = e.release), e.environment && (t.environment = e.environment), !t.ipAddress && e.ipAddress && (t.ipAddress = e.ipAddress), !t.userAgent && e.userAgent && (t.userAgent = e.userAgent), typeof e.errors == "number" && (t.errors = e.errors), e.status && (t.status = e.status)
    }

    function Du(t, e) {
        let n = {};
        e ? n = {
            status: e
        } : t.status === "ok" && (n = {
            status: "exited"
        }), xe(t, n)
    }

    function xu(t) {
        return he({
            sid: `${t.sid}`,
            init: t.init,
            started: new Date(t.started * 1e3).toISOString(),
            timestamp: new Date(t.timestamp * 1e3).toISOString(),
            status: t.status,
            errors: t.errors,
            did: typeof t.did == "number" || typeof t.did == "string" ? `${t.did}` : void 0,
            duration: t.duration,
            attrs: {
                release: t.release,
                environment: t.environment,
                ip_address: t.ipAddress,
                user_agent: t.userAgent
            }
        })
    }
    const Iu = 100;
    class be {
        constructor() {
            this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}, this._propagationContext = ss()
        }
        static clone(e) {
            const n = new be;
            return e && (n._breadcrumbs = [...e._breadcrumbs], n._tags = {
                ...e._tags
            }, n._extra = {
                ...e._extra
            }, n._contexts = {
                ...e._contexts
            }, n._user = e._user, n._level = e._level, n._span = e._span, n._session = e._session, n._transactionName = e._transactionName, n._fingerprint = e._fingerprint, n._eventProcessors = [...e._eventProcessors], n._requestSession = e._requestSession, n._attachments = [...e._attachments], n._sdkProcessingMetadata = {
                ...e._sdkProcessingMetadata
            }, n._propagationContext = {
                ...e._propagationContext
            }), n
        }
        addScopeListener(e) {
            this._scopeListeners.push(e)
        }
        addEventProcessor(e) {
            return this._eventProcessors.push(e), this
        }
        setUser(e) {
            return this._user = e || {}, this._session && xe(this._session, {
                user: e
            }), this._notifyScopeListeners(), this
        }
        getUser() {
            return this._user
        }
        getRequestSession() {
            return this._requestSession
        }
        setRequestSession(e) {
            return this._requestSession = e, this
        }
        setTags(e) {
            return this._tags = {
                ...this._tags,
                ...e
            }, this._notifyScopeListeners(), this
        }
        setTag(e, n) {
            return this._tags = {
                ...this._tags,
                [e]: n
            }, this._notifyScopeListeners(), this
        }
        setExtras(e) {
            return this._extra = {
                ...this._extra,
                ...e
            }, this._notifyScopeListeners(), this
        }
        setExtra(e, n) {
            return this._extra = {
                ...this._extra,
                [e]: n
            }, this._notifyScopeListeners(), this
        }
        setFingerprint(e) {
            return this._fingerprint = e, this._notifyScopeListeners(), this
        }
        setLevel(e) {
            return this._level = e, this._notifyScopeListeners(), this
        }
        setTransactionName(e) {
            return this._transactionName = e, this._notifyScopeListeners(), this
        }
        setContext(e, n) {
            return n === null ? delete this._contexts[e] : this._contexts[e] = n, this._notifyScopeListeners(), this
        }
        setSpan(e) {
            return this._span = e, this._notifyScopeListeners(), this
        }
        getSpan() {
            return this._span
        }
        getTransaction() {
            const e = this.getSpan();
            return e && e.transaction
        }
        setSession(e) {
            return e ? this._session = e : delete this._session, this._notifyScopeListeners(), this
        }
        getSession() {
            return this._session
        }
        update(e) {
            if (!e) return this;
            if (typeof e == "function") {
                const n = e(this);
                return n instanceof be ? n : this
            }
            return e instanceof be ? (this._tags = {
                ...this._tags,
                ...e._tags
            }, this._extra = {
                ...this._extra,
                ...e._extra
            }, this._contexts = {
                ...this._contexts,
                ...e._contexts
            }, e._user && Object.keys(e._user).length && (this._user = e._user), e._level && (this._level = e._level), e._fingerprint && (this._fingerprint = e._fingerprint), e._requestSession && (this._requestSession = e._requestSession), e._propagationContext && (this._propagationContext = e._propagationContext)) : Re(e) && (e = e, this._tags = {
                ...this._tags,
                ...e.tags
            }, this._extra = {
                ...this._extra,
                ...e.extra
            }, this._contexts = {
                ...this._contexts,
                ...e.contexts
            }, e.user && (this._user = e.user), e.level && (this._level = e.level), e.fingerprint && (this._fingerprint = e.fingerprint), e.requestSession && (this._requestSession = e.requestSession), e.propagationContext && (this._propagationContext = e.propagationContext)), this
        }
        clear() {
            return this._breadcrumbs = [], this._tags = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._requestSession = void 0, this._span = void 0, this._session = void 0, this._notifyScopeListeners(), this._attachments = [], this._propagationContext = ss(), this
        }
        addBreadcrumb(e, n) {
            const s = typeof n == "number" ? n : Iu;
            if (s <= 0) return this;
            const r = {
                    timestamp: xt(),
                    ...e
                },
                i = this._breadcrumbs;
            return i.push(r), this._breadcrumbs = i.length > s ? i.slice(-s) : i, this._notifyScopeListeners(), this
        }
        getLastBreadcrumb() {
            return this._breadcrumbs[this._breadcrumbs.length - 1]
        }
        clearBreadcrumbs() {
            return this._breadcrumbs = [], this._notifyScopeListeners(), this
        }
        addAttachment(e) {
            return this._attachments.push(e), this
        }
        getAttachments() {
            return this._attachments
        }
        clearAttachments() {
            return this._attachments = [], this
        }
        applyToEvent(e, n = {}) {
            if (this._extra && Object.keys(this._extra).length && (e.extra = {
                    ...this._extra,
                    ...e.extra
                }), this._tags && Object.keys(this._tags).length && (e.tags = {
                    ...this._tags,
                    ...e.tags
                }), this._user && Object.keys(this._user).length && (e.user = {
                    ...this._user,
                    ...e.user
                }), this._contexts && Object.keys(this._contexts).length && (e.contexts = {
                    ...this._contexts,
                    ...e.contexts
                }), this._level && (e.level = this._level), this._transactionName && (e.transaction = this._transactionName), this._span) {
                e.contexts = {
                    trace: this._span.getTraceContext(),
                    ...e.contexts
                };
                const i = this._span.transaction;
                if (i) {
                    e.sdkProcessingMetadata = {
                        dynamicSamplingContext: i.getDynamicSamplingContext(),
                        ...e.sdkProcessingMetadata
                    };
                    const o = i.name;
                    o && (e.tags = {
                        transaction: o,
                        ...e.tags
                    })
                }
            }
            this._applyFingerprint(e);
            const s = this._getBreadcrumbs(),
                r = [...e.breadcrumbs || [], ...s];
            return e.breadcrumbs = r.length > 0 ? r : void 0, e.sdkProcessingMetadata = {
                ...e.sdkProcessingMetadata,
                ...this._sdkProcessingMetadata,
                propagationContext: this._propagationContext
            }, this._notifyEventProcessors([...cr(), ...this._eventProcessors], e, n)
        }
        setSDKProcessingMetadata(e) {
            return this._sdkProcessingMetadata = {
                ...this._sdkProcessingMetadata,
                ...e
            }, this
        }
        setPropagationContext(e) {
            return this._propagationContext = e, this
        }
        getPropagationContext() {
            return this._propagationContext
        }
        _getBreadcrumbs() {
            return this._breadcrumbs
        }
        _notifyEventProcessors(e, n, s, r = 0) {
            return new Z((i, o) => {
                const a = e[r];
                if (n === null || typeof a != "function") i(n);
                else {
                    const c = a({
                        ...n
                    }, s);
                    (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && a.id && c === null && h.log(`Event processor "${a.id}" dropped event`), Sn(c) ? c.then(u => this._notifyEventProcessors(e, u, s, r + 1).then(i)).then(null, o) : this._notifyEventProcessors(e, c, s, r + 1).then(i).then(null, o)
                }
            })
        }
        _notifyScopeListeners() {
            this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach(e => {
                e(this)
            }), this._notifyingListeners = !1)
        }
        _applyFingerprint(e) {
            e.fingerprint = e.fingerprint ? kn(e.fingerprint) : [], this._fingerprint && (e.fingerprint = e.fingerprint.concat(this._fingerprint)), e.fingerprint && !e.fingerprint.length && delete e.fingerprint
        }
    }

    function cr() {
        return Xs("globalEventProcessors", () => [])
    }

    function ur(t) {
        cr().push(t)
    }

    function ss() {
        return {
            traceId: J(),
            spanId: J().substring(16)
        }
    }
    const lr = 4,
        $u = 100;
    class dr {
        constructor(e, n = new be, s = lr) {
            this._version = s, this._stack = [{
                scope: n
            }], e && this.bindClient(e)
        }
        isOlderThan(e) {
            return this._version < e
        }
        bindClient(e) {
            const n = this.getStackTop();
            n.client = e, e && e.setupIntegrations && e.setupIntegrations()
        }
        pushScope() {
            const e = be.clone(this.getScope());
            return this.getStack().push({
                client: this.getClient(),
                scope: e
            }), e
        }
        popScope() {
            return this.getStack().length <= 1 ? !1 : !!this.getStack().pop()
        }
        withScope(e) {
            const n = this.pushScope();
            try {
                e(n)
            } finally {
                this.popScope()
            }
        }
        getClient() {
            return this.getStackTop().client
        }
        getScope() {
            return this.getStackTop().scope
        }
        getStack() {
            return this._stack
        }
        getStackTop() {
            return this._stack[this._stack.length - 1]
        }
        captureException(e, n) {
            const s = this._lastEventId = n && n.event_id ? n.event_id : J(),
                r = new Error("Sentry syntheticException");
            return this._withClient((i, o) => {
                i.captureException(e, {
                    originalException: e,
                    syntheticException: r,
                    ...n,
                    event_id: s
                }, o)
            }), s
        }
        captureMessage(e, n, s) {
            const r = this._lastEventId = s && s.event_id ? s.event_id : J(),
                i = new Error(e);
            return this._withClient((o, a) => {
                o.captureMessage(e, n, {
                    originalException: e,
                    syntheticException: i,
                    ...s,
                    event_id: r
                }, a)
            }), r
        }
        captureEvent(e, n) {
            const s = n && n.event_id ? n.event_id : J();
            return e.type || (this._lastEventId = s), this._withClient((r, i) => {
                r.captureEvent(e, {
                    ...n,
                    event_id: s
                }, i)
            }), s
        }
        lastEventId() {
            return this._lastEventId
        }
        addBreadcrumb(e, n) {
            const {
                scope: s,
                client: r
            } = this.getStackTop();
            if (!r) return;
            const {
                beforeBreadcrumb: i = null,
                maxBreadcrumbs: o = $u
            } = r.getOptions && r.getOptions() || {};
            if (o <= 0) return;
            const c = {
                    timestamp: xt(),
                    ...e
                },
                u = i ? Js(() => i(c, n)) : c;
            u !== null && (r.emit && r.emit("beforeAddBreadcrumb", u, n), s.addBreadcrumb(u, o))
        }
        setUser(e) {
            this.getScope().setUser(e)
        }
        setTags(e) {
            this.getScope().setTags(e)
        }
        setExtras(e) {
            this.getScope().setExtras(e)
        }
        setTag(e, n) {
            this.getScope().setTag(e, n)
        }
        setExtra(e, n) {
            this.getScope().setExtra(e, n)
        }
        setContext(e, n) {
            this.getScope().setContext(e, n)
        }
        configureScope(e) {
            const {
                scope: n,
                client: s
            } = this.getStackTop();
            s && e(n)
        }
        run(e) {
            const n = rs(this);
            try {
                e(this)
            } finally {
                rs(n)
            }
        }
        getIntegration(e) {
            const n = this.getClient();
            if (!n) return null;
            try {
                return n.getIntegration(e)
            } catch {
                return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && h.warn(`Cannot retrieve integration ${e.id} from the current Hub`), null
            }
        }
        startTransaction(e, n) {
            const s = this._callExtensionMethod("startTransaction", e, n);
            if ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && !s) {
                const r = this.getClient();
                console.warn(r ? `Tracing extension 'startTransaction' has not been added. Call 'addTracingExtensions' before calling 'init':
Sentry.addTracingExtensions();
Sentry.init({...});
` : "Tracing extension 'startTransaction' is missing. You should 'init' the SDK before calling 'startTransaction'")
            }
            return s
        }
        traceHeaders() {
            return this._callExtensionMethod("traceHeaders")
        }
        captureSession(e = !1) {
            if (e) return this.endSession();
            this._sendSessionUpdate()
        }
        endSession() {
            const n = this.getStackTop().scope,
                s = n.getSession();
            s && Du(s), this._sendSessionUpdate(), n.setSession()
        }
        startSession(e) {
            const {
                scope: n,
                client: s
            } = this.getStackTop(), {
                release: r,
                environment: i = Nn
            } = s && s.getOptions() || {}, {
                userAgent: o
            } = Y.navigator || {}, a = Nu({
                release: r,
                environment: i,
                user: n.getUser(),
                ...o && {
                    userAgent: o
                },
                ...e
            }), c = n.getSession && n.getSession();
            return c && c.status === "ok" && xe(c, {
                status: "exited"
            }), this.endSession(), n.setSession(a), a
        }
        shouldSendDefaultPii() {
            const e = this.getClient(),
                n = e && e.getOptions();
            return Boolean(n && n.sendDefaultPii)
        }
        _sendSessionUpdate() {
            const {
                scope: e,
                client: n
            } = this.getStackTop(), s = e.getSession();
            s && n && n.captureSession && n.captureSession(s)
        }
        _withClient(e) {
            const {
                scope: n,
                client: s
            } = this.getStackTop();
            s && e(s, n)
        }
        _callExtensionMethod(e, ...n) {
            const r = Xe().__SENTRY__;
            if (r && r.extensions && typeof r.extensions[e] == "function") return r.extensions[e].apply(this, n);
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && h.warn(`Extension method ${e} couldn't be found, doing nothing.`)
        }
    }

    function Xe() {
        return Y.__SENTRY__ = Y.__SENTRY__ || {
            extensions: {},
            hub: void 0
        }, Y
    }

    function rs(t) {
        const e = Xe(),
            n = un(e);
        return _r(e, t), n
    }

    function C() {
        const t = Xe();
        if (t.__SENTRY__ && t.__SENTRY__.acs) {
            const e = t.__SENTRY__.acs.getCurrentHub();
            if (e) return e
        }
        return Cu(t)
    }

    function Cu(t = Xe()) {
        return (!Bu(t) || un(t).isOlderThan(lr)) && _r(t, new dr), un(t)
    }

    function Bu(t) {
        return !!(t && t.__SENTRY__ && t.__SENTRY__.hub)
    }

    function un(t) {
        return Xs("hub", () => new dr, t)
    }

    function _r(t, e) {
        if (!t) return !1;
        const n = t.__SENTRY__ = t.__SENTRY__ || {};
        return n.hub = e, !0
    }

    function It(t) {
        if (typeof __SENTRY_TRACING__ == "boolean" && !__SENTRY_TRACING__) return !1;
        const e = C().getClient(),
            n = t || e && e.getOptions();
        return !!n && (n.enableTracing || "tracesSampleRate" in n || "tracesSampler" in n)
    }

    function Je(t) {
        return (t || C()).getScope().getTransaction()
    }
    let is = !1;

    function Ou() {
        is || (is = !0, Q("error", ln), Q("unhandledrejection", ln))
    }

    function ln() {
        const t = Je();
        if (t) {
            const e = "internal_error";
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && h.log(`[Tracing] Transaction: ${e} -> Global error occured`), t.setStatus(e)
        }
    }
    ln.tag = "sentry_tracingErrorCallback";
    class fr {
        constructor(e = 1e3) {
            this._maxlen = e, this.spans = []
        }
        add(e) {
            this.spans.length > this._maxlen ? e.spanRecorder = void 0 : this.spans.push(e)
        }
    }
    class Dn {
        constructor(e = {}) {
            this.traceId = e.traceId || J(), this.spanId = e.spanId || J().substring(16), this.startTimestamp = e.startTimestamp || ye(), this.tags = e.tags || {}, this.data = e.data || {}, this.instrumenter = e.instrumenter || "sentry", this.origin = e.origin || "manual", e.parentSpanId && (this.parentSpanId = e.parentSpanId), "sampled" in e && (this.sampled = e.sampled), e.op && (this.op = e.op), e.description && (this.description = e.description), e.name && (this.description = e.name), e.status && (this.status = e.status), e.endTimestamp && (this.endTimestamp = e.endTimestamp)
        }
        get name() {
            return this.description || ""
        }
        set name(e) {
            this.setName(e)
        }
        startChild(e) {
            const n = new Dn({
                ...e,
                parentSpanId: this.spanId,
                sampled: this.sampled,
                traceId: this.traceId
            });
            if (n.spanRecorder = this.spanRecorder, n.spanRecorder && n.spanRecorder.add(n), n.transaction = this.transaction, (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && n.transaction) {
                const s = e && e.op || "< unknown op >",
                    r = n.transaction.name || "< unknown name >",
                    i = n.transaction.spanId,
                    o = `[Tracing] Starting '${s}' span on transaction '${r}' (${i}).`;
                n.transaction.metadata.spanMetadata[n.spanId] = {
                    logMessage: o
                }, h.log(o)
            }
            return n
        }
        setTag(e, n) {
            return this.tags = {
                ...this.tags,
                [e]: n
            }, this
        }
        setData(e, n) {
            return this.data = {
                ...this.data,
                [e]: n
            }, this
        }
        setStatus(e) {
            return this.status = e, this
        }
        setHttpStatus(e) {
            this.setTag("http.status_code", String(e)), this.setData("http.response.status_code", e);
            const n = Uu(e);
            return n !== "unknown_error" && this.setStatus(n), this
        }
        setName(e) {
            this.description = e
        }
        isSuccess() {
            return this.status === "ok"
        }
        finish(e) {
            if ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && this.transaction && this.transaction.spanId !== this.spanId) {
                const {
                    logMessage: n
                } = this.transaction.metadata.spanMetadata[this.spanId];
                n && h.log(n.replace("Starting", "Finishing"))
            }
            this.endTimestamp = typeof e == "number" ? e : ye()
        }
        toTraceparent() {
            return Rn(this.traceId, this.spanId, this.sampled)
        }
        toContext() {
            return he({
                data: this.data,
                description: this.description,
                endTimestamp: this.endTimestamp,
                op: this.op,
                parentSpanId: this.parentSpanId,
                sampled: this.sampled,
                spanId: this.spanId,
                startTimestamp: this.startTimestamp,
                status: this.status,
                tags: this.tags,
                traceId: this.traceId
            })
        }
        updateWithContext(e) {
            return this.data = e.data || {}, this.description = e.description, this.endTimestamp = e.endTimestamp, this.op = e.op, this.parentSpanId = e.parentSpanId, this.sampled = e.sampled, this.spanId = e.spanId || this.spanId, this.startTimestamp = e.startTimestamp || this.startTimestamp, this.status = e.status, this.tags = e.tags || {}, this.traceId = e.traceId || this.traceId, this
        }
        getTraceContext() {
            return he({
                data: Object.keys(this.data).length > 0 ? this.data : void 0,
                description: this.description,
                op: this.op,
                parent_span_id: this.parentSpanId,
                span_id: this.spanId,
                status: this.status,
                tags: Object.keys(this.tags).length > 0 ? this.tags : void 0,
                trace_id: this.traceId
            })
        }
        toJSON() {
            return he({
                data: Object.keys(this.data).length > 0 ? this.data : void 0,
                description: this.description,
                op: this.op,
                parent_span_id: this.parentSpanId,
                span_id: this.spanId,
                start_timestamp: this.startTimestamp,
                status: this.status,
                tags: Object.keys(this.tags).length > 0 ? this.tags : void 0,
                timestamp: this.endTimestamp,
                trace_id: this.traceId,
                origin: this.origin
            })
        }
    }

    function Uu(t) {
        if (t < 400 && t >= 100) return "ok";
        if (t >= 400 && t < 500) switch (t) {
            case 401:
                return "unauthenticated";
            case 403:
                return "permission_denied";
            case 404:
                return "not_found";
            case 409:
                return "already_exists";
            case 413:
                return "failed_precondition";
            case 429:
                return "resource_exhausted";
            default:
                return "invalid_argument"
        }
        if (t >= 500 && t < 600) switch (t) {
            case 501:
                return "unimplemented";
            case 503:
                return "unavailable";
            case 504:
                return "deadline_exceeded";
            default:
                return "internal_error"
        }
        return "unknown_error"
    }

    function $t(t, e, n) {
        const s = e.getOptions(),
            {
                publicKey: r
            } = e.getDsn() || {},
            {
                segment: i
            } = n && n.getUser() || {},
            o = he({
                environment: s.environment || Nn,
                release: s.release,
                user_segment: i,
                public_key: r,
                trace_id: t
            });
        return e.emit && e.emit("createDsc", o), o
    }
    class pr extends Dn {
        constructor(e, n) {
            super(e), delete this.description, this._measurements = {}, this._contexts = {}, this._hub = n || C(), this._name = e.name || "", this.metadata = {
                source: "custom",
                ...e.metadata,
                spanMetadata: {}
            }, this._trimEnd = e.trimEnd, this.transaction = this;
            const s = this.metadata.dynamicSamplingContext;
            s && (this._frozenDynamicSamplingContext = {
                ...s
            })
        }
        get name() {
            return this._name
        }
        set name(e) {
            this.setName(e)
        }
        setName(e, n = "custom") {
            this._name = e, this.metadata.source = n
        }
        initSpanRecorder(e = 1e3) {
            this.spanRecorder || (this.spanRecorder = new fr(e)), this.spanRecorder.add(this)
        }
        setContext(e, n) {
            n === null ? delete this._contexts[e] : this._contexts[e] = n
        }
        setMeasurement(e, n, s = "") {
            this._measurements[e] = {
                value: n,
                unit: s
            }
        }
        setMetadata(e) {
            this.metadata = {
                ...this.metadata,
                ...e
            }
        }
        finish(e) {
            if (this.endTimestamp !== void 0) return;
            this.name || ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && h.warn("Transaction has no name, falling back to `<unlabeled transaction>`."), this.name = "<unlabeled transaction>"), super.finish(e);
            const n = this._hub.getClient();
            if (n && n.emit && n.emit("finishTransaction", this), this.sampled !== !0) {
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && h.log("[Tracing] Discarding transaction because its trace was not chosen to be sampled."), n && n.recordDroppedEvent("sample_rate", "transaction");
                return
            }
            const s = this.spanRecorder ? this.spanRecorder.spans.filter(a => a !== this && a.endTimestamp) : [];
            this._trimEnd && s.length > 0 && (this.endTimestamp = s.reduce((a, c) => a.endTimestamp && c.endTimestamp ? a.endTimestamp > c.endTimestamp ? a : c : a).endTimestamp);
            const r = this.metadata,
                i = {
                    contexts: {
                        ...this._contexts,
                        trace: this.getTraceContext()
                    },
                    spans: s,
                    start_timestamp: this.startTimestamp,
                    tags: this.tags,
                    timestamp: this.endTimestamp,
                    transaction: this.name,
                    type: "transaction",
                    sdkProcessingMetadata: {
                        ...r,
                        dynamicSamplingContext: this.getDynamicSamplingContext()
                    },
                    ...r.source && {
                        transaction_info: {
                            source: r.source
                        }
                    }
                };
            return Object.keys(this._measurements).length > 0 && ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && h.log("[Measurements] Adding measurements to transaction", JSON.stringify(this._measurements, void 0, 2)), i.measurements = this._measurements), (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && h.log(`[Tracing] Finishing ${this.op} transaction: ${this.name}.`), this._hub.captureEvent(i)
        }
        toContext() {
            const e = super.toContext();
            return he({
                ...e,
                name: this.name,
                trimEnd: this._trimEnd
            })
        }
        updateWithContext(e) {
            return super.updateWithContext(e), this.name = e.name || "", this._trimEnd = e.trimEnd, this
        }
        getDynamicSamplingContext() {
            if (this._frozenDynamicSamplingContext) return this._frozenDynamicSamplingContext;
            const e = this._hub || C(),
                n = e.getClient();
            if (!n) return {};
            const s = e.getScope(),
                r = $t(this.traceId, n, s),
                i = this.metadata.sampleRate;
            i !== void 0 && (r.sample_rate = `${i}`);
            const o = this.metadata.source;
            return o && o !== "url" && (r.transaction = this.name), this.sampled !== void 0 && (r.sampled = String(this.sampled)), r
        }
        setHub(e) {
            this._hub = e
        }
    }
    const ht = {
            idleTimeout: 1e3,
            finalTimeout: 3e4,
            heartbeatInterval: 5e3
        },
        Au = "finishReason",
        Se = ["heartbeatFailed", "idleTimeout", "documentHidden", "finalTimeout", "externalFinish", "cancelled"];
    class Pu extends fr {
        constructor(e, n, s, r) {
            super(r), this._pushActivity = e, this._popActivity = n, this.transactionSpanId = s
        }
        add(e) {
            e.spanId !== this.transactionSpanId && (e.finish = n => {
                e.endTimestamp = typeof n == "number" ? n : ye(), this._popActivity(e.spanId)
            }, e.endTimestamp === void 0 && this._pushActivity(e.spanId)), super.add(e)
        }
    }
    class Gu extends pr {
        constructor(e, n, s = ht.idleTimeout, r = ht.finalTimeout, i = ht.heartbeatInterval, o = !1) {
            super(e, n), this._idleHub = n, this._idleTimeout = s, this._finalTimeout = r, this._heartbeatInterval = i, this._onScope = o, this.activities = {}, this._heartbeatCounter = 0, this._finished = !1, this._idleTimeoutCanceledPermanently = !1, this._beforeFinishCallbacks = [], this._finishReason = Se[4], o && ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && h.log(`Setting idle transaction on scope. Span ID: ${this.spanId}`), n.configureScope(a => a.setSpan(this))), this._restartIdleTimeout(), setTimeout(() => {
                this._finished || (this.setStatus("deadline_exceeded"), this._finishReason = Se[3], this.finish())
            }, this._finalTimeout)
        }
        finish(e = ye()) {
            if (this._finished = !0, this.activities = {}, this.op === "ui.action.click" && this.setTag(Au, this._finishReason), this.spanRecorder) {
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && h.log("[Tracing] finishing IdleTransaction", new Date(e * 1e3).toISOString(), this.op);
                for (const n of this._beforeFinishCallbacks) n(this, e);
                this.spanRecorder.spans = this.spanRecorder.spans.filter(n => {
                    if (n.spanId === this.spanId) return !0;
                    n.endTimestamp || (n.endTimestamp = e, n.setStatus("cancelled"), (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && h.log("[Tracing] cancelling span since transaction ended early", JSON.stringify(n, void 0, 2)));
                    const s = n.startTimestamp < e,
                        r = (this._finalTimeout + this._idleTimeout) / 1e3,
                        i = n.endTimestamp - this.startTimestamp < r;
                    if (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) {
                        const o = JSON.stringify(n, void 0, 2);
                        s ? i || h.log("[Tracing] discarding Span since it finished after Transaction final timeout", o) : h.log("[Tracing] discarding Span since it happened after Transaction was finished", o)
                    }
                    return s && i
                }), (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && h.log("[Tracing] flushing IdleTransaction")
            } else(typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && h.log("[Tracing] No active IdleTransaction");
            if (this._onScope) {
                const n = this._idleHub.getScope();
                n.getTransaction() === this && n.setSpan(void 0)
            }
            return super.finish(e)
        }
        registerBeforeFinishCallback(e) {
            this._beforeFinishCallbacks.push(e)
        }
        initSpanRecorder(e) {
            if (!this.spanRecorder) {
                const n = r => {
                        this._finished || this._pushActivity(r)
                    },
                    s = r => {
                        this._finished || this._popActivity(r)
                    };
                this.spanRecorder = new Pu(n, s, this.spanId, e), (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && h.log("Starting heartbeat"), this._pingHeartbeat()
            }
            this.spanRecorder.add(this)
        }
        cancelIdleTimeout(e, {
            restartOnChildSpanChange: n
        } = {
            restartOnChildSpanChange: !0
        }) {
            this._idleTimeoutCanceledPermanently = n === !1, this._idleTimeoutID && (clearTimeout(this._idleTimeoutID), this._idleTimeoutID = void 0, Object.keys(this.activities).length === 0 && this._idleTimeoutCanceledPermanently && (this._finishReason = Se[5], this.finish(e)))
        }
        setFinishReason(e) {
            this._finishReason = e
        }
        _restartIdleTimeout(e) {
            this.cancelIdleTimeout(), this._idleTimeoutID = setTimeout(() => {
                !this._finished && Object.keys(this.activities).length === 0 && (this._finishReason = Se[1], this.finish(e))
            }, this._idleTimeout)
        }
        _pushActivity(e) {
            this.cancelIdleTimeout(void 0, {
                restartOnChildSpanChange: !this._idleTimeoutCanceledPermanently
            }), (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && h.log(`[Tracing] pushActivity: ${e}`), this.activities[e] = !0, (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && h.log("[Tracing] new activities count", Object.keys(this.activities).length)
        }
        _popActivity(e) {
            if (this.activities[e] && ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && h.log(`[Tracing] popActivity ${e}`), delete this.activities[e], (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && h.log("[Tracing] new activities count", Object.keys(this.activities).length)), Object.keys(this.activities).length === 0) {
                const n = ye();
                this._idleTimeoutCanceledPermanently ? (this._finishReason = Se[5], this.finish(n)) : this._restartIdleTimeout(n + this._idleTimeout / 1e3)
            }
        }
        _beat() {
            if (this._finished) return;
            const e = Object.keys(this.activities).join("");
            e === this._prevHeartbeatString ? this._heartbeatCounter++ : this._heartbeatCounter = 1, this._prevHeartbeatString = e, this._heartbeatCounter >= 3 ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && h.log("[Tracing] Transaction finished because of no change for 3 heart beats"), this.setStatus("deadline_exceeded"), this._finishReason = Se[0], this.finish()) : this._pingHeartbeat()
        }
        _pingHeartbeat() {
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && h.log(`pinging Heartbeat -> current counter: ${this._heartbeatCounter}`), setTimeout(() => {
                this._beat()
            }, this._heartbeatInterval)
        }
    }

    function Mu() {
        const e = this.getScope().getSpan();
        return e ? {
            "sentry-trace": e.toTraceparent()
        } : {}
    }

    function hr(t, e, n) {
        if (!It(e)) return t.sampled = !1, t;
        if (t.sampled !== void 0) return t.setMetadata({
            sampleRate: Number(t.sampled)
        }), t;
        let s;
        return typeof e.tracesSampler == "function" ? (s = e.tracesSampler(n), t.setMetadata({
            sampleRate: Number(s)
        })) : n.parentSampled !== void 0 ? s = n.parentSampled : typeof e.tracesSampleRate < "u" ? (s = e.tracesSampleRate, t.setMetadata({
            sampleRate: Number(s)
        })) : (s = 1, t.setMetadata({
            sampleRate: s
        })), Yu(s) ? s ? (t.sampled = Math.random() < s, t.sampled ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && h.log(`[Tracing] starting ${t.op} transaction - ${t.name}`), t) : ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && h.log(`[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(s)})`), t)) : ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && h.log(`[Tracing] Discarding transaction because ${typeof e.tracesSampler=="function"?"tracesSampler returned 0 or false":"a negative sampling decision was inherited or tracesSampleRate is set to 0"}`), t.sampled = !1, t) : ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && h.warn("[Tracing] Discarding transaction because of invalid sample rate."), t.sampled = !1, t)
    }

    function Yu(t) {
        return zs(t) || !(typeof t == "number" || typeof t == "boolean") ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && h.warn(`[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(t)} of type ${JSON.stringify(typeof t)}.`), !1) : t < 0 || t > 1 ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && h.warn(`[Tracing] Given sample rate is invalid. Sample rate must be between 0 and 1. Got ${t}.`), !1) : !0
    }

    function Lu(t, e) {
        const n = this.getClient(),
            s = n && n.getOptions() || {},
            r = s.instrumenter || "sentry",
            i = t.instrumenter || "sentry";
        r !== i && ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && h.error(`A transaction was started with instrumenter=\`${i}\`, but the SDK is configured with the \`${r}\` instrumenter.
The transaction will not be sampled. Please use the ${r} instrumentation to start transactions.`), t.sampled = !1);
        let o = new pr(t, this);
        return o = hr(o, s, {
            parentSampled: t.parentSampled,
            transactionContext: t,
            ...e
        }), o.sampled && o.initSpanRecorder(s._experiments && s._experiments.maxSpans), n && n.emit && n.emit("startTransaction", o), o
    }

    function os(t, e, n, s, r, i, o) {
        const a = t.getClient(),
            c = a && a.getOptions() || {};
        let u = new Gu(e, t, n, s, o, r);
        return u = hr(u, c, {
            parentSampled: e.parentSampled,
            transactionContext: e,
            ...i
        }), u.sampled && u.initSpanRecorder(c._experiments && c._experiments.maxSpans), a && a.emit && a.emit("startTransaction", u), u
    }

    function Fu() {
        const t = Xe();
        !t.__SENTRY__ || (t.__SENTRY__.extensions = t.__SENTRY__.extensions || {}, t.__SENTRY__.extensions.startTransaction || (t.__SENTRY__.extensions.startTransaction = Lu), t.__SENTRY__.extensions.traceHeaders || (t.__SENTRY__.extensions.traceHeaders = Mu), Ou())
    }

    function Hu(t, e) {
        return C().captureException(t, {
            captureContext: e
        })
    }

    function ju(t) {
        C().withScope(t)
    }
    const qu = "7";

    function Vu(t) {
        const e = t.protocol ? `${t.protocol}:` : "",
            n = t.port ? `:${t.port}` : "";
        return `${e}//${t.host}${n}${t.path?`/${t.path}`:""}/api/`
    }

    function zu(t) {
        return `${Vu(t)}${t.projectId}/envelope/`
    }

    function Wu(t, e) {
        return Ic({
            sentry_key: t.publicKey,
            sentry_version: qu,
            ...e && {
                sentry_client: `${e.name}/${e.version}`
            }
        })
    }

    function Xu(t, e = {}) {
        const n = typeof e == "string" ? e : e.tunnel,
            s = typeof e == "string" || !e._metadata ? void 0 : e._metadata.sdk;
        return n || `${zu(t)}?${Wu(t,s)}`
    }

    function Ju(t, e) {
        return e && (t.sdk = t.sdk || {}, t.sdk.name = t.sdk.name || e.name, t.sdk.version = t.sdk.version || e.version, t.sdk.integrations = [...t.sdk.integrations || [], ...e.integrations || []], t.sdk.packages = [...t.sdk.packages || [], ...e.packages || []]), t
    }

    function Ku(t, e, n, s) {
        const r = ar(n),
            i = {
                sent_at: new Date().toISOString(),
                ...r && {
                    sdk: r
                },
                ...!!s && {
                    dsn: Dt(e)
                }
            },
            o = "aggregates" in t ? [{
                type: "sessions"
            }, t] : [{
                type: "session"
            }, t.toJSON()];
        return We(i, [o])
    }

    function Zu(t, e, n, s) {
        const r = ar(n),
            i = t.type && t.type !== "replay_event" ? t.type : "event";
        Ju(t, n && n.sdk);
        const o = bu(t, r, s, e);
        return delete t.sdkProcessingMetadata, We(o, [
            [{
                type: i
            }, t]
        ])
    }
    const as = [];

    function Qu(t) {
        const e = {};
        return t.forEach(n => {
            const {
                name: s
            } = n, r = e[s];
            r && !r.isDefaultInstance && n.isDefaultInstance || (e[s] = n)
        }), Object.keys(e).map(n => e[n])
    }

    function el(t) {
        const e = t.defaultIntegrations || [],
            n = t.integrations;
        e.forEach(o => {
            o.isDefaultInstance = !0
        });
        let s;
        Array.isArray(n) ? s = [...e, ...n] : typeof n == "function" ? s = kn(n(e)) : s = e;
        const r = Qu(s),
            i = nl(r, o => o.name === "Debug");
        if (i !== -1) {
            const [o] = r.splice(i, 1);
            r.push(o)
        }
        return r
    }

    function tl(t, e) {
        const n = {};
        return e.forEach(s => {
            s && mr(t, s, n)
        }), n
    }

    function mr(t, e, n) {
        if (n[e.name] = e, as.indexOf(e.name) === -1 && (e.setupOnce(ur, C), as.push(e.name)), t.on && typeof e.preprocessEvent == "function") {
            const s = e.preprocessEvent.bind(e);
            t.on("preprocessEvent", (r, i) => s(r, i, t))
        }(typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && h.log(`Integration installed: ${e.name}`)
    }

    function nl(t, e) {
        for (let n = 0; n < t.length; n++)
            if (e(t[n]) === !0) return n;
        return -1
    }

    function sl(t, e, n, s) {
        const {
            normalizeDepth: r = 3,
            normalizeMaxBreadth: i = 1e3
        } = t, o = {
            ...e,
            event_id: e.event_id || n.event_id || J(),
            timestamp: e.timestamp || xt()
        }, a = n.integrations || t.integrations.map(l => l.name);
        rl(o, t), al(o, a), e.type === void 0 && il(o, t.stackParser);
        let c = s;
        n.captureContext && (c = be.clone(c).update(n.captureContext));
        let u = Te(o);
        if (c) {
            if (c.getAttachments) {
                const l = [...n.attachments || [], ...c.getAttachments()];
                l.length && (n.attachments = l)
            }
            u = c.applyToEvent(o, n)
        }
        return u.then(l => (l && ol(l), typeof r == "number" && r > 0 ? cl(l, r, i) : l))
    }

    function rl(t, e) {
        const {
            environment: n,
            release: s,
            dist: r,
            maxValueLength: i = 250
        } = e;
        "environment" in t || (t.environment = "environment" in e ? n : Nn), t.release === void 0 && s !== void 0 && (t.release = s), t.dist === void 0 && r !== void 0 && (t.dist = r), t.message && (t.message = we(t.message, i));
        const o = t.exception && t.exception.values && t.exception.values[0];
        o && o.value && (o.value = we(o.value, i));
        const a = t.request;
        a && a.url && (a.url = we(a.url, i))
    }
    const cs = new WeakMap;

    function il(t, e) {
        const n = Y._sentryDebugIds;
        if (!n) return;
        let s;
        const r = cs.get(e);
        r ? s = r : (s = new Map, cs.set(e, s));
        const i = Object.keys(n).reduce((o, a) => {
            let c;
            const u = s.get(a);
            u ? c = u : (c = e(a), s.set(a, c));
            for (let l = c.length - 1; l >= 0; l--) {
                const d = c[l];
                if (d.filename) {
                    o[d.filename] = n[a];
                    break
                }
            }
            return o
        }, {});
        try {
            t.exception.values.forEach(o => {
                o.stacktrace.frames.forEach(a => {
                    a.filename && (a.debug_id = i[a.filename])
                })
            })
        } catch {}
    }

    function ol(t) {
        const e = {};
        try {
            t.exception.values.forEach(s => {
                s.stacktrace.frames.forEach(r => {
                    r.debug_id && (r.abs_path ? e[r.abs_path] = r.debug_id : r.filename && (e[r.filename] = r.debug_id), delete r.debug_id)
                })
            })
        } catch {}
        if (Object.keys(e).length === 0) return;
        t.debug_meta = t.debug_meta || {}, t.debug_meta.images = t.debug_meta.images || [];
        const n = t.debug_meta.images;
        Object.keys(e).forEach(s => {
            n.push({
                type: "sourcemap",
                code_file: s,
                debug_id: e[s]
            })
        })
    }

    function al(t, e) {
        e.length > 0 && (t.sdk = t.sdk || {}, t.sdk.integrations = [...t.sdk.integrations || [], ...e])
    }

    function cl(t, e, n) {
        if (!t) return null;
        const s = {
            ...t,
            ...t.breadcrumbs && {
                breadcrumbs: t.breadcrumbs.map(r => ({
                    ...r,
                    ...r.data && {
                        data: de(r.data, e, n)
                    }
                }))
            },
            ...t.user && {
                user: de(t.user, e, n)
            },
            ...t.contexts && {
                contexts: de(t.contexts, e, n)
            },
            ...t.extra && {
                extra: de(t.extra, e, n)
            }
        };
        return t.contexts && t.contexts.trace && s.contexts && (s.contexts.trace = t.contexts.trace, t.contexts.trace.data && (s.contexts.trace.data = de(t.contexts.trace.data, e, n))), t.spans && (s.spans = t.spans.map(r => (r.data && (r.data = de(r.data, e, n)), r))), s
    }
    const us = "Not capturing exception because it's already been captured.";
    class ul {
        constructor(e) {
            if (this._options = e, this._integrations = {}, this._integrationsInitialized = !1, this._numProcessing = 0, this._outcomes = {}, this._hooks = {}, e.dsn ? this._dsn = xc(e.dsn) : (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && h.warn("No DSN provided, client will not do anything."), this._dsn) {
                const n = Xu(this._dsn, e);
                this._transport = e.transport({
                    recordDroppedEvent: this.recordDroppedEvent.bind(this),
                    ...e.transportOptions,
                    url: n
                })
            }
        }
        captureException(e, n, s) {
            if (Zn(e)) {
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && h.log(us);
                return
            }
            let r = n && n.event_id;
            return this._process(this.eventFromException(e, n).then(i => this._captureEvent(i, n, s)).then(i => {
                r = i
            })), r
        }
        captureMessage(e, n, s, r) {
            let i = s && s.event_id;
            const o = Vs(e) ? this.eventFromMessage(String(e), n, s) : this.eventFromException(e, s);
            return this._process(o.then(a => this._captureEvent(a, s, r)).then(a => {
                i = a
            })), i
        }
        captureEvent(e, n, s) {
            if (n && n.originalException && Zn(n.originalException)) {
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && h.log(us);
                return
            }
            let r = n && n.event_id;
            return this._process(this._captureEvent(e, n, s).then(i => {
                r = i
            })), r
        }
        captureSession(e) {
            if (!this._isEnabled()) {
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && h.warn("SDK not enabled, will not capture session.");
                return
            }
            typeof e.release != "string" ? (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && h.warn("Discarded session because of missing or non-string release") : (this.sendSession(e), xe(e, {
                init: !1
            }))
        }
        getDsn() {
            return this._dsn
        }
        getOptions() {
            return this._options
        }
        getSdkMetadata() {
            return this._options._metadata
        }
        getTransport() {
            return this._transport
        }
        flush(e) {
            const n = this._transport;
            return n ? this._isClientDoneProcessing(e).then(s => n.flush(e).then(r => s && r)) : Te(!0)
        }
        close(e) {
            return this.flush(e).then(n => (this.getOptions().enabled = !1, n))
        }
        setupIntegrations() {
            this._isEnabled() && !this._integrationsInitialized && (this._integrations = tl(this, this._options.integrations), this._integrationsInitialized = !0)
        }
        getIntegrationById(e) {
            return this._integrations[e]
        }
        getIntegration(e) {
            try {
                return this._integrations[e.id] || null
            } catch {
                return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && h.warn(`Cannot retrieve integration ${e.id} from the current Client`), null
            }
        }
        addIntegration(e) {
            mr(this, e, this._integrations)
        }
        sendEvent(e, n = {}) {
            if (this.emit("beforeSendEvent", e, n), this._dsn) {
                let s = Zu(e, this._dsn, this._options._metadata, this._options.tunnel);
                for (const i of n.attachments || []) s = hu(s, yu(i, this._options.transportOptions && this._options.transportOptions.textEncoder));
                const r = this._sendEnvelope(s);
                r && r.then(i => this.emit("afterSendEvent", e, i), null)
            }
        }
        sendSession(e) {
            if (this._dsn) {
                const n = Ku(e, this._dsn, this._options._metadata, this._options.tunnel);
                this._sendEnvelope(n)
            }
        }
        recordDroppedEvent(e, n, s) {
            if (this._options.sendClientReports) {
                const r = `${e}:${n}`;
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && h.log(`Adding outcome: "${r}"`), this._outcomes[r] = this._outcomes[r] + 1 || 1
            }
        }
        on(e, n) {
            this._hooks[e] || (this._hooks[e] = []), this._hooks[e].push(n)
        }
        emit(e, ...n) {
            this._hooks[e] && this._hooks[e].forEach(s => s(...n))
        }
        _updateSessionFromEvent(e, n) {
            let s = !1,
                r = !1;
            const i = n.exception && n.exception.values;
            if (i) {
                r = !0;
                for (const c of i) {
                    const u = c.mechanism;
                    if (u && u.handled === !1) {
                        s = !0;
                        break
                    }
                }
            }
            const o = e.status === "ok";
            (o && e.errors === 0 || o && s) && (xe(e, {
                ...s && {
                    status: "crashed"
                },
                errors: e.errors || Number(r || s)
            }), this.captureSession(e))
        }
        _isClientDoneProcessing(e) {
            return new Z(n => {
                let s = 0;
                const r = 1,
                    i = setInterval(() => {
                        this._numProcessing == 0 ? (clearInterval(i), n(!0)) : (s += r, e && s >= e && (clearInterval(i), n(!1)))
                    }, r)
            })
        }
        _isEnabled() {
            return this.getOptions().enabled !== !1 && this._dsn !== void 0
        }
        _prepareEvent(e, n, s) {
            const r = this.getOptions(),
                i = Object.keys(this._integrations);
            return !n.integrations && i.length > 0 && (n.integrations = i), this.emit("preprocessEvent", e, n), sl(r, e, n, s).then(o => {
                if (o === null) return o;
                const {
                    propagationContext: a
                } = o.sdkProcessingMetadata || {};
                if (!(o.contexts && o.contexts.trace) && a) {
                    const {
                        traceId: u,
                        spanId: l,
                        parentSpanId: d,
                        dsc: f
                    } = a;
                    o.contexts = {
                        trace: {
                            trace_id: u,
                            span_id: l,
                            parent_span_id: d
                        },
                        ...o.contexts
                    };
                    const p = f || $t(u, this, s);
                    o.sdkProcessingMetadata = {
                        dynamicSamplingContext: p,
                        ...o.sdkProcessingMetadata
                    }
                }
                return o
            })
        }
        _captureEvent(e, n = {}, s) {
            return this._processEvent(e, n, s).then(r => r.event_id, r => {
                if (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) {
                    const i = r;
                    i.logLevel === "log" ? h.log(i.message) : h.warn(i)
                }
            })
        }
        _processEvent(e, n, s) {
            const r = this.getOptions(),
                {
                    sampleRate: i
                } = r;
            if (!this._isEnabled()) return Et(new ne("SDK not enabled, will not capture event.", "log"));
            const o = yr(e),
                a = gr(e),
                c = e.type || "error",
                u = `before send for type \`${c}\``;
            if (a && typeof i == "number" && Math.random() > i) return this.recordDroppedEvent("sample_rate", "error", e), Et(new ne(`Discarding event because it's not included in the random sample (sampling rate = ${i})`, "log"));
            const l = c === "replay_event" ? "replay" : c;
            return this._prepareEvent(e, n, s).then(d => {
                if (d === null) throw this.recordDroppedEvent("event_processor", l, e), new ne("An event processor returned `null`, will not send event.", "log");
                if (n.data && n.data.__sentry__ === !0) return d;
                const p = dl(r, d, n);
                return ll(p, u)
            }).then(d => {
                if (d === null) throw this.recordDroppedEvent("before_send", l, e), new ne(`${u} returned \`null\`, will not send event.`, "log");
                const f = s && s.getSession();
                !o && f && this._updateSessionFromEvent(f, d);
                const p = d.transaction_info;
                if (o && p && d.transaction !== e.transaction) {
                    const k = "custom";
                    d.transaction_info = {
                        ...p,
                        source: k
                    }
                }
                return this.sendEvent(d, n), d
            }).then(null, d => {
                throw d instanceof ne ? d : (this.captureException(d, {
                    data: {
                        __sentry__: !0
                    },
                    originalException: d
                }), new ne(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${d}`))
            })
        }
        _process(e) {
            this._numProcessing++, e.then(n => (this._numProcessing--, n), n => (this._numProcessing--, n))
        }
        _sendEnvelope(e) {
            if (this._transport && this._dsn) return this.emit("beforeEnvelope", e), this._transport.send(e).then(null, n => {
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && h.error("Error while sending event:", n)
            });
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && h.error("Transport disabled")
        }
        _clearOutcomes() {
            const e = this._outcomes;
            return this._outcomes = {}, Object.keys(e).map(n => {
                const [s, r] = n.split(":");
                return {
                    reason: s,
                    category: r,
                    quantity: e[n]
                }
            })
        }
    }

    function ll(t, e) {
        const n = `${e} must return \`null\` or a valid event.`;
        if (Sn(t)) return t.then(s => {
            if (!Re(s) && s !== null) throw new ne(n);
            return s
        }, s => {
            throw new ne(`${e} rejected with ${s}`)
        });
        if (!Re(t) && t !== null) throw new ne(n);
        return t
    }

    function dl(t, e, n) {
        const {
            beforeSend: s,
            beforeSendTransaction: r
        } = t;
        return gr(e) && s ? s(e, n) : yr(e) && r ? r(e, n) : e
    }

    function gr(t) {
        return t.type === void 0
    }

    function yr(t) {
        return t.type === "transaction"
    }

    function _l(t, e) {
        e.debug === !0 && (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__ ? h.enable() : console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle."));
        const n = C();
        n.getScope().update(e.initialScope);
        const r = new t(e);
        n.bindClient(r)
    }
    const fl = 30;

    function Er(t, e, n = su(t.bufferSize || fl)) {
        let s = {};
        const r = o => n.drain(o);

        function i(o) {
            const a = [];
            if (ts(o, (d, f) => {
                    const p = ns(f);
                    if (ku(s, p)) {
                        const k = ls(d, f);
                        t.recordDroppedEvent("ratelimit_backoff", p, k)
                    } else a.push(d)
                }), a.length === 0) return Te();
            const c = We(o[0], a),
                u = d => {
                    ts(c, (f, p) => {
                        const k = ls(f, p);
                        t.recordDroppedEvent(d, ns(p), k)
                    })
                },
                l = () => e({
                    body: mu(c, t.textEncoder)
                }).then(d => (d.statusCode !== void 0 && (d.statusCode < 200 || d.statusCode >= 300) && (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && h.warn(`Sentry responded with status code ${d.statusCode} to sent event.`), s = Ru(s, d), d), d => {
                    throw u("network_error"), d
                });
            return n.add(l).then(d => d, d => {
                if (d instanceof ne) return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && h.error("Skipped sending event because buffer is full."), u("queue_overflow"), Te();
                throw d
            })
        }
        return i.__sentry__baseTransport__ = !0, {
            send: i,
            flush: r
        }
    }

    function ls(t, e) {
        if (!(e !== "event" && e !== "transaction")) return Array.isArray(t) ? t[1] : void 0
    }
    const bt = "7.69.0";
    let ds;
    class Ct {
        static __initStatic() {
            this.id = "FunctionToString"
        }
        constructor() {
            this.name = Ct.id
        }
        setupOnce() {
            ds = Function.prototype.toString;
            try {
                Function.prototype.toString = function(...e) {
                    const n = wn(this) || this;
                    return ds.apply(n, e)
                }
            } catch {}
        }
    }
    Ct.__initStatic();
    const pl = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/],
        hl = [/^.*healthcheck.*$/, /^.*healthy.*$/, /^.*live.*$/, /^.*ready.*$/, /^.*heartbeat.*$/, /^.*\/health$/, /^.*\/healthz$/];
    class Le {
        static __initStatic() {
            this.id = "InboundFilters"
        }
        constructor(e = {}) {
            this.name = Le.id, this._options = e
        }
        setupOnce(e, n) {
            const s = r => {
                const i = n();
                if (i) {
                    const o = i.getIntegration(Le);
                    if (o) {
                        const a = i.getClient(),
                            c = a ? a.getOptions() : {},
                            u = ml(o._options, c);
                        return gl(r, u) ? null : r
                    }
                }
                return r
            };
            s.id = this.name, e(s)
        }
    }
    Le.__initStatic();

    function ml(t = {}, e = {}) {
        return {
            allowUrls: [...t.allowUrls || [], ...e.allowUrls || []],
            denyUrls: [...t.denyUrls || [], ...e.denyUrls || []],
            ignoreErrors: [...t.ignoreErrors || [], ...e.ignoreErrors || [], ...t.disableErrorDefaults ? [] : pl],
            ignoreTransactions: [...t.ignoreTransactions || [], ...e.ignoreTransactions || [], ...t.disableTransactionDefaults ? [] : hl],
            ignoreInternal: t.ignoreInternal !== void 0 ? t.ignoreInternal : !0
        }
    }

    function gl(t, e) {
        return e.ignoreInternal && vl(t) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && h.warn(`Event dropped due to being internal Sentry Error.
Event: ${fe(t)}`), !0) : yl(t, e.ignoreErrors) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && h.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${fe(t)}`), !0) : El(t, e.ignoreTransactions) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && h.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${fe(t)}`), !0) : bl(t, e.denyUrls) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && h.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${fe(t)}.
Url: ${Tt(t)}`), !0) : Tl(t, e.allowUrls) ? !1 : ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && h.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${fe(t)}.
Url: ${Tt(t)}`), !0)
    }

    function yl(t, e) {
        return t.type || !e || !e.length ? !1 : Sl(t).some(n => Ve(n, e))
    }

    function El(t, e) {
        if (t.type !== "transaction" || !e || !e.length) return !1;
        const n = t.transaction;
        return n ? Ve(n, e) : !1
    }

    function bl(t, e) {
        if (!e || !e.length) return !1;
        const n = Tt(t);
        return n ? Ve(n, e) : !1
    }

    function Tl(t, e) {
        if (!e || !e.length) return !0;
        const n = Tt(t);
        return n ? Ve(n, e) : !0
    }

    function Sl(t) {
        const e = [];
        t.message && e.push(t.message);
        let n;
        try {
            n = t.exception.values[t.exception.values.length - 1]
        } catch {}
        return n && n.value && (e.push(n.value), n.type && e.push(`${n.type}: ${n.value}`)), (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && e.length === 0 && h.error(`Could not extract message for event ${fe(t)}`), e
    }

    function vl(t) {
        try {
            return t.exception.values[0].type === "SentryError"
        } catch {}
        return !1
    }

    function wl(t = []) {
        for (let e = t.length - 1; e >= 0; e--) {
            const n = t[e];
            if (n && n.filename !== "<anonymous>" && n.filename !== "[native code]") return n.filename || null
        }
        return null
    }

    function Tt(t) {
        try {
            let e;
            try {
                e = t.exception.values[0].stacktrace.frames
            } catch {}
            return e ? wl(e) : null
        } catch {
            return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && h.error(`Cannot extract url for event ${fe(t)}`), null
        }
    }
    const I = Y;
    let dn = 0;

    function br() {
        return dn > 0
    }

    function kl() {
        dn++, setTimeout(() => {
            dn--
        })
    }

    function Ie(t, e = {}, n) {
        if (typeof t != "function") return t;
        try {
            const r = t.__sentry_wrapped__;
            if (r) return r;
            if (wn(t)) return t
        } catch {
            return t
        }
        const s = function() {
            const r = Array.prototype.slice.call(arguments);
            try {
                n && typeof n == "function" && n.apply(this, arguments);
                const i = r.map(o => Ie(o, e));
                return t.apply(this, i)
            } catch (i) {
                throw kl(), ju(o => {
                    o.addEventProcessor(a => (e.mechanism && (nn(a, void 0, void 0), De(a, e.mechanism)), a.extra = {
                        ...a.extra,
                        arguments: r
                    }, a)), Hu(i)
                }), i
            }
        };
        try {
            for (const r in t) Object.prototype.hasOwnProperty.call(t, r) && (s[r] = t[r])
        } catch {}
        Zs(s, t), vn(t, "__sentry_wrapped__", s);
        try {
            Object.getOwnPropertyDescriptor(s, "name").configurable && Object.defineProperty(s, "name", {
                get() {
                    return t.name
                }
            })
        } catch {}
        return s
    }

    function Tr(t, e) {
        const n = xn(t, e),
            s = {
                type: e && e.name,
                value: xl(e)
            };
        return n.length && (s.stacktrace = {
            frames: n
        }), s.type === void 0 && s.value === "" && (s.value = "Unrecoverable error caught"), s
    }

    function Rl(t, e, n, s) {
        const i = C().getClient(),
            o = i && i.getOptions().normalizeDepth,
            a = {
                exception: {
                    values: [{
                        type: Nt(e) ? e.constructor.name : s ? "UnhandledRejection" : "Error",
                        value: Cl(e, {
                            isUnhandledRejection: s
                        })
                    }]
                },
                extra: {
                    __serialized__: rr(e, o)
                }
            };
        if (n) {
            const c = xn(t, n);
            c.length && (a.exception.values[0].stacktrace = {
                frames: c
            })
        }
        return a
    }

    function Vt(t, e) {
        return {
            exception: {
                values: [Tr(t, e)]
            }
        }
    }

    function xn(t, e) {
        const n = e.stacktrace || e.stack || "",
            s = Dl(e);
        try {
            return t(n, s)
        } catch {}
        return []
    }
    const Nl = /Minified React error #\d+;/i;

    function Dl(t) {
        if (t) {
            if (typeof t.framesToPop == "number") return t.framesToPop;
            if (Nl.test(t.message)) return 1
        }
        return 0
    }

    function xl(t) {
        const e = t && t.message;
        return e ? e.error && typeof e.error.message == "string" ? e.error.message : e : "No error message"
    }

    function Il(t, e, n, s) {
        const r = n && n.syntheticException || void 0,
            i = In(t, e, r, s);
        return De(i), i.level = "error", n && n.event_id && (i.event_id = n.event_id), Te(i)
    }

    function $l(t, e, n = "info", s, r) {
        const i = s && s.syntheticException || void 0,
            o = _n(t, e, i, r);
        return o.level = n, s && s.event_id && (o.event_id = s.event_id), Te(o)
    }

    function In(t, e, n, s, r) {
        let i;
        if (Tn(e) && e.error) return Vt(t, e.error);
        if (Ln(e) || _c(e)) {
            const o = e;
            if ("stack" in e) i = Vt(t, e);
            else {
                const a = o.name || (Ln(o) ? "DOMError" : "DOMException"),
                    c = o.message ? `${a}: ${o.message}` : a;
                i = _n(t, c, n, s), nn(i, c)
            }
            return "code" in o && (i.tags = {
                ...i.tags,
                "DOMException.code": `${o.code}`
            }), i
        }
        return qs(e) ? Vt(t, e) : Re(e) || Nt(e) ? (i = Rl(t, e, n, r), De(i, {
            synthetic: !0
        }), i) : (i = _n(t, e, n, s), nn(i, `${e}`, void 0), De(i, {
            synthetic: !0
        }), i)
    }

    function _n(t, e, n, s) {
        const r = {
            message: e
        };
        if (s && n) {
            const i = xn(t, n);
            i.length && (r.exception = {
                values: [{
                    value: e,
                    stacktrace: {
                        frames: i
                    }
                }]
            })
        }
        return r
    }

    function Cl(t, {
        isUnhandledRejection: e
    }) {
        const n = $c(t),
            s = e ? "promise rejection" : "exception";
        return Tn(t) ? `Event \`ErrorEvent\` captured as ${s} with message \`${t.message}\`` : Nt(t) ? `Event \`${Bl(t)}\` (type=${t.type}) captured as ${s}` : `Object captured as ${s} with keys: ${n}`
    }

    function Bl(t) {
        try {
            const e = Object.getPrototypeOf(t);
            return e ? e.constructor.name : void 0
        } catch {}
    }

    function Ol(t, {
        metadata: e,
        tunnel: n,
        dsn: s
    }) {
        const r = {
                event_id: t.event_id,
                sent_at: new Date().toISOString(),
                ...e && e.sdk && {
                    sdk: {
                        name: e.sdk.name,
                        version: e.sdk.version
                    }
                },
                ...!!n && !!s && {
                    dsn: Dt(s)
                }
            },
            i = Ul(t);
        return We(r, [i])
    }

    function Ul(t) {
        return [{
            type: "user_report"
        }, t]
    }
    class Al extends ul {
        constructor(e) {
            const n = I.SENTRY_SDK_SOURCE || Jc();
            e._metadata = e._metadata || {}, e._metadata.sdk = e._metadata.sdk || {
                name: "sentry.javascript.browser",
                packages: [{
                    name: `${n}:@sentry/browser`,
                    version: bt
                }],
                version: bt
            }, super(e), e.sendClientReports && I.document && I.document.addEventListener("visibilitychange", () => {
                I.document.visibilityState === "hidden" && this._flushOutcomes()
            })
        }
        eventFromException(e, n) {
            return Il(this._options.stackParser, e, n, this._options.attachStacktrace)
        }
        eventFromMessage(e, n = "info", s) {
            return $l(this._options.stackParser, e, n, s, this._options.attachStacktrace)
        }
        captureUserFeedback(e) {
            if (!this._isEnabled()) {
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && h.warn("SDK not enabled, will not capture user feedback.");
                return
            }
            const n = Ol(e, {
                metadata: this.getSdkMetadata(),
                dsn: this.getDsn(),
                tunnel: this.getOptions().tunnel
            });
            this._sendEnvelope(n)
        }
        _prepareEvent(e, n, s) {
            return e.platform = e.platform || "javascript", super._prepareEvent(e, n, s)
        }
        _flushOutcomes() {
            const e = this._clearOutcomes();
            if (e.length === 0) {
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && h.log("No outcomes to send");
                return
            }
            if (!this._dsn) {
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && h.log("No dsn provided, will not send outcomes");
                return
            }(typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && h.log("Sending outcomes:", e);
            const n = Tu(e, this._options.tunnel && Dt(this._dsn));
            this._sendEnvelope(n)
        }
    }
    let Ue;

    function Pl() {
        if (Ue) return Ue;
        if (en(I.fetch)) return Ue = I.fetch.bind(I);
        const t = I.document;
        let e = I.fetch;
        if (t && typeof t.createElement == "function") try {
            const n = t.createElement("iframe");
            n.hidden = !0, t.head.appendChild(n);
            const s = n.contentWindow;
            s && s.fetch && (e = s.fetch), t.head.removeChild(n)
        } catch (n) {
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && h.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", n)
        }
        return Ue = e.bind(I)
    }

    function Gl() {
        Ue = void 0
    }

    function Ml(t, e = Pl()) {
        let n = 0,
            s = 0;

        function r(i) {
            const o = i.body.length;
            n += o, s++;
            const a = {
                body: i.body,
                method: "POST",
                referrerPolicy: "origin",
                headers: t.headers,
                keepalive: n <= 6e4 && s < 15,
                ...t.fetchOptions
            };
            try {
                return e(t.url, a).then(c => (n -= o, s--, {
                    statusCode: c.status,
                    headers: {
                        "x-sentry-rate-limits": c.headers.get("X-Sentry-Rate-Limits"),
                        "retry-after": c.headers.get("Retry-After")
                    }
                }))
            } catch (c) {
                return Gl(), n -= o, s--, Et(c)
            }
        }
        return Er(t, r)
    }
    const Yl = 4;

    function Ll(t) {
        function e(n) {
            return new Z((s, r) => {
                const i = new XMLHttpRequest;
                i.onerror = r, i.onreadystatechange = () => {
                    i.readyState === Yl && s({
                        statusCode: i.status,
                        headers: {
                            "x-sentry-rate-limits": i.getResponseHeader("X-Sentry-Rate-Limits"),
                            "retry-after": i.getResponseHeader("Retry-After")
                        }
                    })
                }, i.open("POST", t.url);
                for (const o in t.headers) Object.prototype.hasOwnProperty.call(t.headers, o) && i.setRequestHeader(o, t.headers[o]);
                i.send(n.body)
            })
        }
        return Er(t, e)
    }
    const Bt = "?",
        Fl = 30,
        Hl = 40,
        jl = 50;

    function $n(t, e, n, s) {
        const r = {
            filename: t,
            function: e,
            in_app: !0
        };
        return n !== void 0 && (r.lineno = n), s !== void 0 && (r.colno = s), r
    }
    const ql = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
        Vl = /\((\S*)(?::(\d+))(?::(\d+))\)/,
        zl = t => {
            const e = ql.exec(t);
            if (e) {
                if (e[2] && e[2].indexOf("eval") === 0) {
                    const i = Vl.exec(e[2]);
                    i && (e[2] = i[1], e[3] = i[2], e[4] = i[3])
                }
                const [s, r] = Sr(e[1] || Bt, e[2]);
                return $n(r, s, e[3] ? +e[3] : void 0, e[4] ? +e[4] : void 0)
            }
        },
        Wl = [Fl, zl],
        Xl = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
        Jl = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
        Kl = t => {
            const e = Xl.exec(t);
            if (e) {
                if (e[3] && e[3].indexOf(" > eval") > -1) {
                    const i = Jl.exec(e[3]);
                    i && (e[1] = e[1] || "eval", e[3] = i[1], e[4] = i[2], e[5] = "")
                }
                let s = e[3],
                    r = e[1] || Bt;
                return [r, s] = Sr(r, s), $n(s, r, e[4] ? +e[4] : void 0, e[5] ? +e[5] : void 0)
            }
        },
        Zl = [jl, Kl],
        Ql = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:[-a-z]+):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
        ed = t => {
            const e = Ql.exec(t);
            return e ? $n(e[2], e[1] || Bt, +e[3], e[4] ? +e[4] : void 0) : void 0
        },
        td = [Hl, ed],
        nd = [Wl, Zl, td],
        sd = tr(...nd),
        Sr = (t, e) => {
            const n = t.indexOf("safari-extension") !== -1,
                s = t.indexOf("safari-web-extension") !== -1;
            return n || s ? [t.indexOf("@") !== -1 ? t.split("@")[0] : Bt, n ? `safari-extension:${e}` : `safari-web-extension:${e}`] : [t, e]
        };
    class Be {
        static __initStatic() {
            this.id = "GlobalHandlers"
        }
        constructor(e) {
            this.name = Be.id, this._options = {
                onerror: !0,
                onunhandledrejection: !0,
                ...e
            }, this._installFunc = {
                onerror: rd,
                onunhandledrejection: id
            }
        }
        setupOnce() {
            Error.stackTraceLimit = 50;
            const e = this._options;
            for (const n in e) {
                const s = this._installFunc[n];
                s && e[n] && (cd(n), s(), this._installFunc[n] = void 0)
            }
        }
    }
    Be.__initStatic();

    function rd() {
        Q("error", t => {
            const [e, n, s] = kr();
            if (!e.getIntegration(Be)) return;
            const {
                msg: r,
                url: i,
                line: o,
                column: a,
                error: c
            } = t;
            if (br() || c && c.__sentry_own_request__) return;
            const u = c === void 0 && me(r) ? ad(r, i, o, a) : vr(In(n, c || r, void 0, s, !1), i, o, a);
            u.level = "error", wr(e, c, u, "onerror")
        })
    }

    function id() {
        Q("unhandledrejection", t => {
            const [e, n, s] = kr();
            if (!e.getIntegration(Be)) return;
            let r = t;
            try {
                "reason" in t ? r = t.reason : "detail" in t && "reason" in t.detail && (r = t.detail.reason)
            } catch {}
            if (br() || r && r.__sentry_own_request__) return !0;
            const i = Vs(r) ? od(r) : In(n, r, void 0, s, !0);
            i.level = "error", wr(e, r, i, "onunhandledrejection")
        })
    }

    function od(t) {
        return {
            exception: {
                values: [{
                    type: "UnhandledRejection",
                    value: `Non-Error promise rejection captured with value: ${String(t)}`
                }]
            }
        }
    }

    function ad(t, e, n, s) {
        const r = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
        let i = Tn(t) ? t.message : t,
            o = "Error";
        const a = i.match(r);
        return a && (o = a[1], i = a[2]), vr({
            exception: {
                values: [{
                    type: o,
                    value: i
                }]
            }
        }, e, n, s)
    }

    function vr(t, e, n, s) {
        const r = t.exception = t.exception || {},
            i = r.values = r.values || [],
            o = i[0] = i[0] || {},
            a = o.stacktrace = o.stacktrace || {},
            c = a.frames = a.frames || [],
            u = isNaN(parseInt(s, 10)) ? void 0 : s,
            l = isNaN(parseInt(n, 10)) ? void 0 : n,
            d = me(e) && e.length > 0 ? e : Tc();
        return c.length === 0 && c.push({
            colno: u,
            filename: d,
            function: "?",
            in_app: !0,
            lineno: l
        }), t
    }

    function cd(t) {
        (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && h.log(`Global Handler attached: ${t}`)
    }

    function wr(t, e, n, s) {
        De(n, {
            handled: !1,
            type: s
        }), t.captureEvent(n, {
            originalException: e
        })
    }

    function kr() {
        const t = C(),
            e = t.getClient(),
            n = e && e.getOptions() || {
                stackParser: () => [],
                attachStacktrace: !1
            };
        return [t, n.stackParser, n.attachStacktrace]
    }
    const ud = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "BroadcastChannel", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "SharedWorker", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"];
    class Ot {
        static __initStatic() {
            this.id = "TryCatch"
        }
        constructor(e) {
            this.name = Ot.id, this._options = {
                XMLHttpRequest: !0,
                eventTarget: !0,
                requestAnimationFrame: !0,
                setInterval: !0,
                setTimeout: !0,
                ...e
            }
        }
        setupOnce() {
            this._options.setTimeout && V(I, "setTimeout", _s), this._options.setInterval && V(I, "setInterval", _s), this._options.requestAnimationFrame && V(I, "requestAnimationFrame", ld), this._options.XMLHttpRequest && "XMLHttpRequest" in I && V(XMLHttpRequest.prototype, "send", dd);
            const e = this._options.eventTarget;
            e && (Array.isArray(e) ? e : ud).forEach(_d)
        }
    }
    Ot.__initStatic();

    function _s(t) {
        return function(...e) {
            const n = e[0];
            return e[0] = Ie(n, {
                mechanism: {
                    data: {
                        function: ge(t)
                    },
                    handled: !1,
                    type: "instrument"
                }
            }), t.apply(this, e)
        }
    }

    function ld(t) {
        return function(e) {
            return t.apply(this, [Ie(e, {
                mechanism: {
                    data: {
                        function: "requestAnimationFrame",
                        handler: ge(t)
                    },
                    handled: !1,
                    type: "instrument"
                }
            })])
        }
    }

    function dd(t) {
        return function(...e) {
            const n = this;
            return ["onload", "onerror", "onprogress", "onreadystatechange"].forEach(r => {
                r in n && typeof n[r] == "function" && V(n, r, function(i) {
                    const o = {
                            mechanism: {
                                data: {
                                    function: r,
                                    handler: ge(i)
                                },
                                handled: !1,
                                type: "instrument"
                            }
                        },
                        a = wn(i);
                    return a && (o.mechanism.data.handler = ge(a)), Ie(i, o)
                })
            }), t.apply(this, e)
        }
    }

    function _d(t) {
        const e = I,
            n = e[t] && e[t].prototype;
        !n || !n.hasOwnProperty || !n.hasOwnProperty("addEventListener") || (V(n, "addEventListener", function(s) {
            return function(r, i, o) {
                try {
                    typeof i.handleEvent == "function" && (i.handleEvent = Ie(i.handleEvent, {
                        mechanism: {
                            data: {
                                function: "handleEvent",
                                handler: ge(i),
                                target: t
                            },
                            handled: !1,
                            type: "instrument"
                        }
                    }))
                } catch {}
                return s.apply(this, [r, Ie(i, {
                    mechanism: {
                        data: {
                            function: "addEventListener",
                            handler: ge(i),
                            target: t
                        },
                        handled: !1,
                        type: "instrument"
                    }
                }), o])
            }
        }), V(n, "removeEventListener", function(s) {
            return function(r, i, o) {
                const a = i;
                try {
                    const c = a && a.__sentry_wrapped__;
                    c && s.call(this, r, c, o)
                } catch {}
                return s.call(this, r, a, o)
            }
        }))
    }
    const at = 1024;
    class Ut {
        static __initStatic() {
            this.id = "Breadcrumbs"
        }
        constructor(e) {
            this.name = Ut.id, this.options = {
                console: !0,
                dom: !0,
                fetch: !0,
                history: !0,
                sentry: !0,
                xhr: !0,
                ...e
            }
        }
        setupOnce() {
            if (this.options.console && Q("console", hd), this.options.dom && Q("dom", pd(this.options.dom)), this.options.xhr && Q("xhr", md), this.options.fetch && Q("fetch", gd), this.options.history && Q("history", yd), this.options.sentry) {
                const e = C().getClient();
                e && e.on && e.on("beforeSendEvent", fd)
            }
        }
    }
    Ut.__initStatic();

    function fd(t) {
        C().addBreadcrumb({
            category: `sentry.${t.type==="transaction"?"transaction":"event"}`,
            event_id: t.event_id,
            level: t.level,
            message: fe(t)
        }, {
            event: t
        })
    }

    function pd(t) {
        function e(n) {
            let s, r = typeof t == "object" ? t.serializeAttribute : void 0,
                i = typeof t == "object" && typeof t.maxStringLength == "number" ? t.maxStringLength : void 0;
            i && i > at && ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && h.warn(`\`dom.maxStringLength\` cannot exceed ${at}, but a value of ${i} was configured. Sentry will use ${at} instead.`), i = at), typeof r == "string" && (r = [r]);
            try {
                const o = n.event;
                s = Ed(o) ? Ne(o.target, {
                    keyAttrs: r,
                    maxStringLength: i
                }) : Ne(o, {
                    keyAttrs: r,
                    maxStringLength: i
                })
            } catch {
                s = "<unknown>"
            }
            s.length !== 0 && C().addBreadcrumb({
                category: `ui.${n.name}`,
                message: s
            }, {
                event: n.event,
                name: n.name,
                global: n.global
            })
        }
        return e
    }

    function hd(t) {
        const e = {
            category: "console",
            data: {
                arguments: t.args,
                logger: "console"
            },
            level: iu(t.level),
            message: Fn(t.args, " ")
        };
        if (t.level === "assert")
            if (t.args[0] === !1) e.message = `Assertion failed: ${Fn(t.args.slice(1)," ")||"console.assert"}`, e.data.arguments = t.args.slice(1);
            else return;
        C().addBreadcrumb(e, {
            input: t.args,
            level: t.level
        })
    }

    function md(t) {
        const {
            startTimestamp: e,
            endTimestamp: n
        } = t, s = t.xhr[ve];
        if (!e || !n || !s) return;
        const {
            method: r,
            url: i,
            status_code: o,
            body: a
        } = s, c = {
            method: r,
            url: i,
            status_code: o
        }, u = {
            xhr: t.xhr,
            input: a,
            startTimestamp: e,
            endTimestamp: n
        };
        C().addBreadcrumb({
            category: "xhr",
            data: c,
            type: "http"
        }, u)
    }

    function gd(t) {
        const {
            startTimestamp: e,
            endTimestamp: n
        } = t;
        if (!!n && !(t.fetchData.url.match(/sentry_key/) && t.fetchData.method === "POST"))
            if (t.error) {
                const s = t.fetchData,
                    r = {
                        data: t.error,
                        input: t.args,
                        startTimestamp: e,
                        endTimestamp: n
                    };
                C().addBreadcrumb({
                    category: "fetch",
                    data: s,
                    level: "error",
                    type: "http"
                }, r)
            } else {
                const s = {
                        ...t.fetchData,
                        status_code: t.response && t.response.status
                    },
                    r = {
                        input: t.args,
                        response: t.response,
                        startTimestamp: e,
                        endTimestamp: n
                    };
                C().addBreadcrumb({
                    category: "fetch",
                    data: s,
                    type: "http"
                }, r)
            }
    }

    function yd(t) {
        let e = t.from,
            n = t.to;
        const s = jt(I.location.href);
        let r = jt(e);
        const i = jt(n);
        r.path || (r = s), s.protocol === i.protocol && s.host === i.host && (n = i.relative), s.protocol === r.protocol && s.host === r.host && (e = r.relative), C().addBreadcrumb({
            category: "navigation",
            data: {
                from: e,
                to: n
            }
        })
    }

    function Ed(t) {
        return !!t && !!t.target
    }
    const bd = "cause",
        Td = 5;
    class At {
        static __initStatic() {
            this.id = "LinkedErrors"
        }
        constructor(e = {}) {
            this.name = At.id, this._key = e.key || bd, this._limit = e.limit || Td
        }
        setupOnce() {}
        preprocessEvent(e, n, s) {
            const r = s.getOptions();
            gc(Tr, r.stackParser, r.maxValueLength, this._key, this._limit, e, n)
        }
    }
    At.__initStatic();
    class Fe {
        static __initStatic() {
            this.id = "HttpContext"
        }
        constructor() {
            this.name = Fe.id
        }
        setupOnce() {
            ur(e => {
                if (C().getIntegration(Fe)) {
                    if (!I.navigator && !I.location && !I.document) return e;
                    const n = e.request && e.request.url || I.location && I.location.href,
                        {
                            referrer: s
                        } = I.document || {},
                        {
                            userAgent: r
                        } = I.navigator || {},
                        i = {
                            ...e.request && e.request.headers,
                            ...s && {
                                Referer: s
                            },
                            ...r && {
                                "User-Agent": r
                            }
                        },
                        o = {
                            ...e.request,
                            ...n && {
                                url: n
                            },
                            headers: i
                        };
                    return {
                        ...e,
                        request: o
                    }
                }
                return e
            })
        }
    }
    Fe.__initStatic();
    class He {
        static __initStatic() {
            this.id = "Dedupe"
        }
        constructor() {
            this.name = He.id
        }
        setupOnce(e, n) {
            const s = r => {
                if (r.type) return r;
                const i = n().getIntegration(He);
                if (i) {
                    try {
                        if (Sd(r, i._previousEvent)) return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && h.warn("Event dropped due to being a duplicate of previously captured event."), null
                    } catch {
                        return i._previousEvent = r
                    }
                    return i._previousEvent = r
                }
                return r
            };
            s.id = this.name, e(s)
        }
    }
    He.__initStatic();

    function Sd(t, e) {
        return e ? !!(vd(t, e) || wd(t, e)) : !1
    }

    function vd(t, e) {
        const n = t.message,
            s = e.message;
        return !(!n && !s || n && !s || !n && s || n !== s || !Nr(t, e) || !Rr(t, e))
    }

    function wd(t, e) {
        const n = fs(e),
            s = fs(t);
        return !(!n || !s || n.type !== s.type || n.value !== s.value || !Nr(t, e) || !Rr(t, e))
    }

    function Rr(t, e) {
        let n = ps(t),
            s = ps(e);
        if (!n && !s) return !0;
        if (n && !s || !n && s || (n = n, s = s, s.length !== n.length)) return !1;
        for (let r = 0; r < s.length; r++) {
            const i = s[r],
                o = n[r];
            if (i.filename !== o.filename || i.lineno !== o.lineno || i.colno !== o.colno || i.function !== o.function) return !1
        }
        return !0
    }

    function Nr(t, e) {
        let n = t.fingerprint,
            s = e.fingerprint;
        if (!n && !s) return !0;
        if (n && !s || !n && s) return !1;
        n = n, s = s;
        try {
            return n.join("") === s.join("")
        } catch {
            return !1
        }
    }

    function fs(t) {
        return t.exception && t.exception.values && t.exception.values[0]
    }

    function ps(t) {
        const e = t.exception;
        if (e) try {
            return e.values[0].stacktrace.frames
        } catch {
            return
        }
    }
    const kd = [new Le, new Ct, new Ot, new Ut, new Be, new At, new He, new Fe];

    function Rd(t = {}) {
        t.defaultIntegrations === void 0 && (t.defaultIntegrations = kd), t.release === void 0 && (typeof __SENTRY_RELEASE__ == "string" && (t.release = __SENTRY_RELEASE__), I.SENTRY_RELEASE && I.SENTRY_RELEASE.id && (t.release = I.SENTRY_RELEASE.id)), t.autoSessionTracking === void 0 && (t.autoSessionTracking = !0), t.sendClientReports === void 0 && (t.sendClientReports = !0);
        const e = {
            ...t,
            stackParser: Cc(t.stackParser || sd),
            integrations: el(t),
            transport: t.transport || (nr() ? Ml : Ll)
        };
        _l(Al, e), t.autoSessionTracking && Nd()
    }

    function hs(t) {
        t.startSession({
            ignoreDuration: !0
        }), t.captureSession()
    }

    function Nd() {
        if (typeof I.document > "u") {
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && h.warn("Session tracking in non-browser environment with @sentry/browser is not supported.");
            return
        }
        const t = C();
        !t.captureSession || (hs(t), Q("history", ({
            from: e,
            to: n
        }) => {
            e === void 0 || e === n || hs(C())
        }))
    }
    const $ = Y;

    function Dd() {
        $ && $.document ? $.document.addEventListener("visibilitychange", () => {
            const t = Je();
            if ($.document.hidden && t) {
                const e = "cancelled";
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && h.log(`[Tracing] Transaction: ${e} -> since tab moved to the background, op: ${t.op}`), t.status || t.setStatus(e), t.setTag("visibilitychange", "document.hidden"), t.finish()
            }
        }) : (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && h.warn("[Tracing] Could not set up background tab detection due to lack of global document")
    }
    const Cn = (t, e, n) => {
            let s, r;
            return i => {
                e.value >= 0 && (i || n) && (r = e.value - (s || 0), (r || s === void 0) && (s = e.value, e.delta = r, t(e)))
            }
        },
        xd = () => `v3-${Date.now()}-${Math.floor(Math.random()*(9e12-1))+1e12}`,
        Id = () => {
            const t = $.performance.timing,
                e = $.performance.navigation.type,
                n = {
                    entryType: "navigation",
                    startTime: 0,
                    type: e == 2 ? "back_forward" : e === 1 ? "reload" : "navigate"
                };
            for (const s in t) s !== "navigationStart" && s !== "toJSON" && (n[s] = Math.max(t[s] - t.navigationStart, 0));
            return n
        },
        Dr = () => $.__WEB_VITALS_POLYFILL__ ? $.performance && (performance.getEntriesByType && performance.getEntriesByType("navigation")[0] || Id()) : $.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0],
        xr = () => {
            const t = Dr();
            return t && t.activationStart || 0
        },
        Bn = (t, e) => {
            const n = Dr();
            let s = "navigate";
            return n && ($.document.prerendering || xr() > 0 ? s = "prerender" : s = n.type.replace(/_/g, "-")), {
                name: t,
                value: typeof e > "u" ? -1 : e,
                rating: "good",
                delta: 0,
                entries: [],
                id: xd(),
                navigationType: s
            }
        },
        Ke = (t, e, n) => {
            try {
                if (PerformanceObserver.supportedEntryTypes.includes(t)) {
                    const s = new PerformanceObserver(r => {
                        e(r.getEntries())
                    });
                    return s.observe(Object.assign({
                        type: t,
                        buffered: !0
                    }, n || {})), s
                }
            } catch {}
        },
        Pt = (t, e) => {
            const n = s => {
                (s.type === "pagehide" || $.document.visibilityState === "hidden") && (t(s), e && (removeEventListener("visibilitychange", n, !0), removeEventListener("pagehide", n, !0)))
            };
            addEventListener("visibilitychange", n, !0), addEventListener("pagehide", n, !0)
        },
        $d = t => {
            const e = Bn("CLS", 0);
            let n, s = 0,
                r = [];
            const i = a => {
                    a.forEach(c => {
                        if (!c.hadRecentInput) {
                            const u = r[0],
                                l = r[r.length - 1];
                            s && r.length !== 0 && c.startTime - l.startTime < 1e3 && c.startTime - u.startTime < 5e3 ? (s += c.value, r.push(c)) : (s = c.value, r = [c]), s > e.value && (e.value = s, e.entries = r, n && n())
                        }
                    })
                },
                o = Ke("layout-shift", i);
            if (o) {
                n = Cn(t, e);
                const a = () => {
                    i(o.takeRecords()), n(!0)
                };
                return Pt(a), a
            }
        };
    let mt = -1;
    const Cd = () => $.document.visibilityState === "hidden" && !$.document.prerendering ? 0 : 1 / 0,
        Bd = () => {
            Pt(({
                timeStamp: t
            }) => {
                mt = t
            }, !0)
        },
        On = () => (mt < 0 && (mt = Cd(), Bd()), {
            get firstHiddenTime() {
                return mt
            }
        }),
        Od = t => {
            const e = On(),
                n = Bn("FID");
            let s;
            const r = a => {
                    a.startTime < e.firstHiddenTime && (n.value = a.processingStart - a.startTime, n.entries.push(a), s(!0))
                },
                i = a => {
                    a.forEach(r)
                },
                o = Ke("first-input", i);
            s = Cn(t, n), o && Pt(() => {
                i(o.takeRecords()), o.disconnect()
            }, !0)
        },
        ms = {},
        Ud = t => {
            const e = On(),
                n = Bn("LCP");
            let s;
            const r = o => {
                    const a = o[o.length - 1];
                    if (a) {
                        const c = Math.max(a.startTime - xr(), 0);
                        c < e.firstHiddenTime && (n.value = c, n.entries = [a], s())
                    }
                },
                i = Ke("largest-contentful-paint", r);
            if (i) {
                s = Cn(t, n);
                const o = () => {
                    ms[n.id] || (r(i.takeRecords()), i.disconnect(), ms[n.id] = !0, s(!0))
                };
                return ["keydown", "click"].forEach(a => {
                    addEventListener(a, o, {
                        once: !0,
                        capture: !0
                    })
                }), Pt(o, !0), o
            }
        };

    function zt(t) {
        return typeof t == "number" && isFinite(t)
    }

    function $e(t, {
        startTimestamp: e,
        ...n
    }) {
        return e && t.startTimestamp > e && (t.startTimestamp = e), t.startChild({
            startTimestamp: e,
            ...n
        })
    }

    function F(t) {
        return t / 1e3
    }

    function Ir() {
        return $ && $.addEventListener && $.performance
    }
    let gs = 0,
        A = {},
        oe, Ge;

    function Ad() {
        const t = Ir();
        if (t && ae) {
            t.mark && $.performance.mark("sentry-tracing-init"), Ld();
            const e = Md(),
                n = Yd();
            return () => {
                e && e(), n && n()
            }
        }
        return () => {}
    }

    function Pd() {
        Ke("longtask", e => {
            for (const n of e) {
                const s = Je();
                if (!s) return;
                const r = F(ae + n.startTime),
                    i = F(n.duration);
                s.startChild({
                    description: "Main UI thread blocked",
                    op: "ui.long-task",
                    origin: "auto.ui.browser.metrics",
                    startTimestamp: r,
                    endTimestamp: r + i
                })
            }
        })
    }

    function Gd() {
        Ke("event", e => {
            for (const n of e) {
                const s = Je();
                if (!s) return;
                if (n.name === "click") {
                    const r = F(ae + n.startTime),
                        i = F(n.duration);
                    s.startChild({
                        description: Ne(n.target),
                        op: `ui.interaction.${n.name}`,
                        origin: "auto.ui.browser.metrics",
                        startTimestamp: r,
                        endTimestamp: r + i
                    })
                }
            }
        }, {
            durationThreshold: 0
        })
    }

    function Md() {
        return $d(t => {
            const e = t.entries.pop();
            !e || ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && h.log("[Measurements] Adding CLS"), A.cls = {
                value: t.value,
                unit: ""
            }, Ge = e)
        })
    }

    function Yd() {
        return Ud(t => {
            const e = t.entries.pop();
            !e || ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && h.log("[Measurements] Adding LCP"), A.lcp = {
                value: t.value,
                unit: "millisecond"
            }, oe = e)
        })
    }

    function Ld() {
        Od(t => {
            const e = t.entries.pop();
            if (!e) return;
            const n = F(ae),
                s = F(e.startTime);
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && h.log("[Measurements] Adding FID"), A.fid = {
                value: t.value,
                unit: "millisecond"
            }, A["mark.fid"] = {
                value: n + s,
                unit: "second"
            }
        })
    }

    function Fd(t) {
        const e = Ir();
        if (!e || !$.performance.getEntries || !ae) return;
        (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && h.log("[Tracing] Adding & adjusting spans using Performance API");
        const n = F(ae),
            s = e.getEntries();
        let r, i;
        if (s.slice(gs).forEach(o => {
                const a = F(o.startTime),
                    c = F(o.duration);
                if (!(t.op === "navigation" && n + a < t.startTimestamp)) switch (o.entryType) {
                    case "navigation": {
                        jd(t, o, n), r = n + F(o.responseStart), i = n + F(o.requestStart);
                        break
                    }
                    case "mark":
                    case "paint":
                    case "measure": {
                        Hd(t, o, a, c, n);
                        const u = On(),
                            l = o.startTime < u.firstHiddenTime;
                        o.name === "first-paint" && l && ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && h.log("[Measurements] Adding FP"), A.fp = {
                            value: o.startTime,
                            unit: "millisecond"
                        }), o.name === "first-contentful-paint" && l && ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && h.log("[Measurements] Adding FCP"), A.fcp = {
                            value: o.startTime,
                            unit: "millisecond"
                        });
                        break
                    }
                    case "resource": {
                        const u = o.name.replace($.location.origin, "");
                        Vd(t, o, u, a, c, n);
                        break
                    }
                }
            }), gs = Math.max(s.length - 1, 0), zd(t), t.op === "pageload") {
            typeof r == "number" && ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && h.log("[Measurements] Adding TTFB"), A.ttfb = {
                value: (r - t.startTimestamp) * 1e3,
                unit: "millisecond"
            }, typeof i == "number" && i <= r && (A["ttfb.requestTime"] = {
                value: (r - i) * 1e3,
                unit: "millisecond"
            })), ["fcp", "fp", "lcp"].forEach(a => {
                if (!A[a] || n >= t.startTimestamp) return;
                const c = A[a].value,
                    u = n + F(c),
                    l = Math.abs((u - t.startTimestamp) * 1e3),
                    d = l - c;
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && h.log(`[Measurements] Normalized ${a} from ${c} to ${l} (${d})`), A[a].value = l
            });
            const o = A["mark.fid"];
            o && A.fid && ($e(t, {
                description: "first input delay",
                endTimestamp: o.value + F(A.fid.value),
                op: "ui.action",
                origin: "auto.ui.browser.metrics",
                startTimestamp: o.value
            }), delete A["mark.fid"]), "fcp" in A || delete A.cls, Object.keys(A).forEach(a => {
                t.setMeasurement(a, A[a].value, A[a].unit)
            }), Wd(t)
        }
        oe = void 0, Ge = void 0, A = {}
    }

    function Hd(t, e, n, s, r) {
        const i = r + n,
            o = i + s;
        return $e(t, {
            description: e.name,
            endTimestamp: o,
            op: e.entryType,
            origin: "auto.resource.browser.metrics",
            startTimestamp: i
        }), i
    }

    function jd(t, e, n) {
        ["unloadEvent", "redirect", "domContentLoadedEvent", "loadEvent", "connect"].forEach(s => {
            ct(t, e, s, n)
        }), ct(t, e, "secureConnection", n, "TLS/SSL", "connectEnd"), ct(t, e, "fetch", n, "cache", "domainLookupStart"), ct(t, e, "domainLookup", n, "DNS"), qd(t, e, n)
    }

    function ct(t, e, n, s, r, i) {
        const o = i ? e[i] : e[`${n}End`],
            a = e[`${n}Start`];
        !a || !o || $e(t, {
            op: "browser",
            origin: "auto.browser.browser.metrics",
            description: r || n,
            startTimestamp: s + F(a),
            endTimestamp: s + F(o)
        })
    }

    function qd(t, e, n) {
        $e(t, {
            op: "browser",
            origin: "auto.browser.browser.metrics",
            description: "request",
            startTimestamp: n + F(e.requestStart),
            endTimestamp: n + F(e.responseEnd)
        }), $e(t, {
            op: "browser",
            origin: "auto.browser.browser.metrics",
            description: "response",
            startTimestamp: n + F(e.responseStart),
            endTimestamp: n + F(e.responseEnd)
        })
    }

    function Vd(t, e, n, s, r, i) {
        if (e.initiatorType === "xmlhttprequest" || e.initiatorType === "fetch") return;
        const o = {};
        "transferSize" in e && (o["http.response_transfer_size"] = e.transferSize), "encodedBodySize" in e && (o["http.response_content_length"] = e.encodedBodySize), "decodedBodySize" in e && (o["http.decoded_response_content_length"] = e.decodedBodySize), "renderBlockingStatus" in e && (o["resource.render_blocking_status"] = e.renderBlockingStatus);
        const a = i + s,
            c = a + r;
        $e(t, {
            description: n,
            endTimestamp: c,
            op: e.initiatorType ? `resource.${e.initiatorType}` : "resource.other",
            origin: "auto.resource.browser.metrics",
            startTimestamp: a,
            data: o
        })
    }

    function zd(t) {
        const e = $.navigator;
        if (!e) return;
        const n = e.connection;
        n && (n.effectiveType && t.setTag("effectiveConnectionType", n.effectiveType), n.type && t.setTag("connectionType", n.type), zt(n.rtt) && (A["connection.rtt"] = {
            value: n.rtt,
            unit: "millisecond"
        })), zt(e.deviceMemory) && t.setTag("deviceMemory", `${e.deviceMemory} GB`), zt(e.hardwareConcurrency) && t.setTag("hardwareConcurrency", String(e.hardwareConcurrency))
    }

    function Wd(t) {
        oe && ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && h.log("[Measurements] Adding LCP Data"), oe.element && t.setTag("lcp.element", Ne(oe.element)), oe.id && t.setTag("lcp.id", oe.id), oe.url && t.setTag("lcp.url", oe.url.trim().slice(0, 200)), t.setTag("lcp.size", oe.size)), Ge && Ge.sources && ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && h.log("[Measurements] Adding CLS Data"), Ge.sources.forEach((e, n) => t.setTag(`cls.source.${n+1}`, Ne(e.node))))
    }
    const fn = ["localhost", /^\/(?!\/)/],
        pn = {
            traceFetch: !0,
            traceXHR: !0,
            enableHTTPTimings: !0,
            tracingOrigins: fn,
            tracePropagationTargets: fn
        };

    function Xd(t) {
        const {
            traceFetch: e,
            traceXHR: n,
            tracePropagationTargets: s,
            tracingOrigins: r,
            shouldCreateSpanForRequest: i,
            enableHTTPTimings: o
        } = {
            traceFetch: pn.traceFetch,
            traceXHR: pn.traceXHR,
            ...t
        }, a = typeof i == "function" ? i : l => !0, c = l => Qd(l, s || r), u = {};
        e && Q("fetch", l => {
            const d = e_(l, a, c, u);
            o && d && ys(d)
        }), n && Q("xhr", l => {
            const d = n_(l, a, c, u);
            o && d && ys(d)
        })
    }

    function Jd(t) {
        return t.entryType === "resource" && "initiatorType" in t && typeof t.nextHopProtocol == "string" && (t.initiatorType === "fetch" || t.initiatorType === "xmlhttprequest")
    }

    function ys(t) {
        const e = t.data.url,
            n = new PerformanceObserver(s => {
                s.getEntries().forEach(i => {
                    Jd(i) && i.name.endsWith(e) && (Zd(i).forEach(a => t.setData(...a)), n.disconnect())
                })
            });
        n.observe({
            entryTypes: ["resource"]
        })
    }

    function Kd(t) {
        let e = "unknown",
            n = "unknown",
            s = "";
        for (const r of t) {
            if (r === "/") {
                [e, n] = t.split("/");
                break
            }
            if (!isNaN(Number(r))) {
                e = s === "h" ? "http" : s, n = t.split(s)[1];
                break
            }
            s += r
        }
        return s === t && (e = s), {
            name: e,
            version: n
        }
    }

    function ie(t = 0) {
        return ((ae || performance.timeOrigin) + t) / 1e3
    }

    function Zd(t) {
        const {
            name: e,
            version: n
        } = Kd(t.nextHopProtocol), s = [];
        return s.push(["network.protocol.version", n], ["network.protocol.name", e]), ae ? [...s, ["http.request.redirect_start", ie(t.redirectStart)],
            ["http.request.fetch_start", ie(t.fetchStart)],
            ["http.request.domain_lookup_start", ie(t.domainLookupStart)],
            ["http.request.domain_lookup_end", ie(t.domainLookupEnd)],
            ["http.request.connect_start", ie(t.connectStart)],
            ["http.request.secure_connection_start", ie(t.secureConnectionStart)],
            ["http.request.connection_end", ie(t.connectEnd)],
            ["http.request.request_start", ie(t.requestStart)],
            ["http.request.response_start", ie(t.responseStart)],
            ["http.request.response_end", ie(t.responseEnd)]
        ] : s
    }

    function Qd(t, e) {
        return Ve(t, e || fn)
    }

    function e_(t, e, n, s) {
        if (!It() || !t.fetchData) return;
        const r = e(t.fetchData.url);
        if (t.endTimestamp && r) {
            const f = t.fetchData.__span;
            if (!f) return;
            const p = s[f];
            if (p) {
                if (t.response) {
                    p.setHttpStatus(t.response.status);
                    const k = t.response && t.response.headers && t.response.headers.get("content-length"),
                        m = parseInt(k);
                    m > 0 && p.setData("http.response_content_length", m)
                } else t.error && p.setStatus("internal_error");
                p.finish(), delete s[f]
            }
            return
        }
        const i = C(),
            o = i.getScope(),
            a = i.getClient(),
            c = o.getSpan(),
            {
                method: u,
                url: l
            } = t.fetchData,
            d = r && c ? c.startChild({
                data: {
                    url: l,
                    type: "fetch",
                    "http.method": u
                },
                description: `${u} ${l}`,
                op: "http.client",
                origin: "auto.http.browser"
            }) : void 0;
        if (d && (t.fetchData.__span = d.spanId, s[d.spanId] = d), n(t.fetchData.url) && a) {
            const f = t.args[0];
            t.args[1] = t.args[1] || {};
            const p = t.args[1];
            p.headers = t_(f, a, o, p, d)
        }
        return d
    }

    function t_(t, e, n, s, r) {
        const i = r || n.getSpan(),
            o = i && i.transaction,
            {
                traceId: a,
                sampled: c,
                dsc: u
            } = n.getPropagationContext(),
            l = i ? i.toTraceparent() : Rn(a, void 0, c),
            d = o ? o.getDynamicSamplingContext() : u || $t(a, e, n),
            f = an(d),
            p = typeof Request < "u" && ue(t, Request) ? t.headers : s.headers;
        if (p)
            if (typeof Headers < "u" && ue(p, Headers)) {
                const k = new Headers(p);
                return k.append("sentry-trace", l), f && k.append(on, f), k
            } else if (Array.isArray(p)) {
            const k = [...p, ["sentry-trace", l]];
            return f && k.push([on, f]), k
        } else {
            const k = "baggage" in p ? p.baggage : void 0,
                m = [];
            return Array.isArray(k) ? m.push(...k) : k && m.push(k), f && m.push(f), {
                ...p,
                "sentry-trace": l,
                baggage: m.length > 0 ? m.join(",") : void 0
            }
        } else return {
            "sentry-trace": l,
            baggage: f
        }
    }

    function n_(t, e, n, s) {
        const r = t.xhr,
            i = r && r[ve];
        if (!It() || r && r.__sentry_own_request__ || !r || !i) return;
        const o = e(i.url);
        if (t.endTimestamp && o) {
            const d = r.__sentry_xhr_span_id__;
            if (!d) return;
            const f = s[d];
            f && (f.setHttpStatus(i.status_code), f.finish(), delete s[d]);
            return
        }
        const a = C(),
            c = a.getScope(),
            u = c.getSpan(),
            l = o && u ? u.startChild({
                data: {
                    ...i.data,
                    type: "xhr",
                    "http.method": i.method,
                    url: i.url
                },
                description: `${i.method} ${i.url}`,
                op: "http.client",
                origin: "auto.http.browser"
            }) : void 0;
        if (l && (r.__sentry_xhr_span_id__ = l.spanId, s[r.__sentry_xhr_span_id__] = l), r.setRequestHeader && n(i.url))
            if (l) {
                const d = l && l.transaction,
                    f = d && d.getDynamicSamplingContext(),
                    p = an(f);
                Es(r, l.toTraceparent(), p)
            } else {
                const d = a.getClient(),
                    {
                        traceId: f,
                        sampled: p,
                        dsc: k
                    } = c.getPropagationContext(),
                    m = Rn(f, void 0, p),
                    b = k || (d ? $t(f, d, c) : void 0),
                    v = an(b);
                Es(r, m, v)
            } return l
    }

    function Es(t, e, n) {
        try {
            t.setRequestHeader("sentry-trace", e), n && t.setRequestHeader(on, n)
        } catch {}
    }

    function s_(t, e = !0, n = !0) {
        if (!$ || !$.location) {
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && h.warn("Could not initialize routing instrumentation due to invalid location");
            return
        }
        let s = $.location.href,
            r;
        e && (r = t({
            name: $.location.pathname,
            startTimestamp: ae ? ae / 1e3 : void 0,
            op: "pageload",
            origin: "auto.pageload.browser",
            metadata: {
                source: "url"
            }
        })), n && Q("history", ({
            to: i,
            from: o
        }) => {
            if (o === void 0 && s && s.indexOf(i) !== -1) {
                s = void 0;
                return
            }
            o !== i && (s = void 0, r && ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && h.log(`[Tracing] Finishing current transaction with op: ${r.op}`), r.finish()), r = t({
                name: $.location.pathname,
                op: "navigation",
                origin: "auto.navigation.browser",
                metadata: {
                    source: "url"
                }
            }))
        })
    }
    const r_ = "BrowserTracing",
        i_ = {
            ...ht,
            markBackgroundTransactions: !0,
            routingInstrumentation: s_,
            startTransactionOnLocationChange: !0,
            startTransactionOnPageLoad: !0,
            enableLongTask: !0,
            _experiments: {},
            ...pn
        };
    class o_ {
        constructor(e) {
            this.name = r_, this._hasSetTracePropagationTargets = !1, Fu(), (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && (this._hasSetTracePropagationTargets = !!(e && (e.tracePropagationTargets || e.tracingOrigins))), this.options = {
                ...i_,
                ...e
            }, this.options._experiments.enableLongTask !== void 0 && (this.options.enableLongTask = this.options._experiments.enableLongTask), e && !e.tracePropagationTargets && e.tracingOrigins && (this.options.tracePropagationTargets = e.tracingOrigins), this._collectWebVitals = Ad(), this.options.enableLongTask && Pd(), this.options._experiments.enableInteractions && Gd()
        }
        setupOnce(e, n) {
            this._getCurrentHub = n;
            const r = n().getClient(),
                i = r && r.getOptions(),
                {
                    routingInstrumentation: o,
                    startTransactionOnLocationChange: a,
                    startTransactionOnPageLoad: c,
                    markBackgroundTransactions: u,
                    traceFetch: l,
                    traceXHR: d,
                    shouldCreateSpanForRequest: f,
                    enableHTTPTimings: p,
                    _experiments: k
                } = this.options,
                m = i && i.tracePropagationTargets,
                b = m || this.options.tracePropagationTargets;
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && this._hasSetTracePropagationTargets && m && h.warn("[Tracing] The `tracePropagationTargets` option was set in the BrowserTracing integration and top level `Sentry.init`. The top level `Sentry.init` value is being used."), o(v => {
                const g = this._createRouteTransaction(v);
                return this.options._experiments.onStartRouteTransaction && this.options._experiments.onStartRouteTransaction(g, v, n), g
            }, c, a), u && Dd(), k.enableInteractions && this._registerInteractionListener(), Xd({
                traceFetch: l,
                traceXHR: d,
                tracePropagationTargets: b,
                shouldCreateSpanForRequest: f,
                enableHTTPTimings: p
            })
        }
        _createRouteTransaction(e) {
            if (!this._getCurrentHub) {
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && h.warn(`[Tracing] Did not create ${e.op} transaction because _getCurrentHub is invalid.`);
                return
            }
            const n = this._getCurrentHub(),
                {
                    beforeNavigate: s,
                    idleTimeout: r,
                    finalTimeout: i,
                    heartbeatInterval: o
                } = this.options,
                a = e.op === "pageload",
                c = a ? bs("sentry-trace") : "",
                u = a ? bs("baggage") : "",
                {
                    traceparentData: l,
                    dynamicSamplingContext: d,
                    propagationContext: f
                } = pu(c, u),
                p = {
                    ...e,
                    ...l,
                    metadata: {
                        ...e.metadata,
                        dynamicSamplingContext: l && !d ? {} : d
                    },
                    trimEnd: !0
                },
                k = typeof s == "function" ? s(p) : p,
                m = k === void 0 ? {
                    ...p,
                    sampled: !1
                } : k;
            m.metadata = m.name !== p.name ? {
                ...m.metadata,
                source: "custom"
            } : m.metadata, this._latestRouteName = m.name, this._latestRouteSource = m.metadata && m.metadata.source, m.sampled === !1 && (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && h.log(`[Tracing] Will not send ${m.op} transaction because of beforeNavigate.`), (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && h.log(`[Tracing] Starting ${m.op} transaction on scope`);
            const {
                location: b
            } = $, v = os(n, m, r, i, !0, {
                location: b
            }, o), g = n.getScope();
            return a && l ? g.setPropagationContext(f) : g.setPropagationContext({
                traceId: v.traceId,
                spanId: v.spanId,
                parentSpanId: v.parentSpanId,
                sampled: v.sampled
            }), v.registerBeforeFinishCallback(N => {
                this._collectWebVitals(), Fd(N)
            }), v
        }
        _registerInteractionListener() {
            let e;
            const n = () => {
                const {
                    idleTimeout: s,
                    finalTimeout: r,
                    heartbeatInterval: i
                } = this.options, o = "ui.action.click", a = Je();
                if (a && a.op && ["navigation", "pageload"].includes(a.op)) {
                    (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && h.warn(`[Tracing] Did not create ${o} transaction because a pageload or navigation transaction is in progress.`);
                    return
                }
                if (e && (e.setFinishReason("interactionInterrupted"), e.finish(), e = void 0), !this._getCurrentHub) {
                    (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && h.warn(`[Tracing] Did not create ${o} transaction because _getCurrentHub is invalid.`);
                    return
                }
                if (!this._latestRouteName) {
                    (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && h.warn(`[Tracing] Did not create ${o} transaction because _latestRouteName is missing.`);
                    return
                }
                const c = this._getCurrentHub(),
                    {
                        location: u
                    } = $,
                    l = {
                        name: this._latestRouteName,
                        op: o,
                        trimEnd: !0,
                        metadata: {
                            source: this._latestRouteSource || "url"
                        }
                    };
                e = os(c, l, s, r, !0, {
                    location: u
                }, i)
            };
            ["click"].forEach(s => {
                addEventListener(s, n, {
                    once: !1,
                    capture: !0
                })
            })
        }
    }

    function bs(t) {
        const e = Sc(`meta[name=${t}]`);
        return e ? e.getAttribute("content") : void 0
    }
    const $r = ["activate", "mount", "update"],
        a_ = /(?:^|[-_])(\w)/g,
        c_ = t => t.replace(a_, e => e.toUpperCase()).replace(/[-_]/g, ""),
        u_ = "<Root>",
        Wt = "<Anonymous>",
        l_ = (t, e) => t.repeat ? t.repeat(e) : t,
        Me = (t, e) => {
            if (!t) return Wt;
            if (t.$root === t) return u_;
            if (!t.$options) return Wt;
            const n = t.$options;
            let s = n.name || n._componentTag;
            const r = n.__file;
            if (!s && r) {
                const i = r.match(/([^/\\]+)\.vue$/);
                i && (s = i[1])
            }
            return (s ? `<${c_(s)}>` : Wt) + (r && e !== !1 ? ` at ${r}` : "")
        },
        d_ = t => {
            if (t && (t._isVue || t.__isVue) && t.$parent) {
                const e = [];
                let n = 0;
                for (; t;) {
                    if (e.length > 0) {
                        const r = e[e.length - 1];
                        if (r.constructor === t.constructor) {
                            n++, t = t.$parent;
                            continue
                        } else n > 0 && (e[e.length - 1] = [r, n], n = 0)
                    }
                    e.push(t), t = t.$parent
                }
                return `

found in

${e.map((r,i)=>`${(i===0?"---> ":l_(" ",5+i*2))+(Array.isArray(r)?`${Me(r[0])}... (${r[1]} recursive calls)`:Me(r))}`).join(`
`)}`
            }
            return `

(found in ${Me(t)})`
        },
        __ = (t, e) => {
            const {
                errorHandler: n,
                warnHandler: s,
                silent: r
            } = t.config;
            t.config.errorHandler = (i, o, a) => {
                const c = Me(o, !1),
                    u = o ? d_(o) : "",
                    l = {
                        componentName: c,
                        lifecycleHook: a,
                        trace: u
                    };
                if (e.attachProps && o && (o.$options && o.$options.propsData ? l.propsData = o.$options.propsData : o.$props && (l.propsData = o.$props)), setTimeout(() => {
                        C().withScope(d => {
                            d.setContext("vue", l), d.addEventProcessor(f => (De(f, {
                                handled: !1
                            }), f)), C().captureException(i)
                        })
                    }), typeof n == "function" && n.call(t, i, o, a), e.logErrors) {
                    const d = typeof console < "u",
                        f = `Error in ${a}: "${i&&i.toString()}"`;
                    s ? s.call(null, f, o, u) : d && !r && console.error(`[Vue warn]: ${f}${u}`)
                }
            }
        },
        Ts = "ui.vue",
        f_ = {
            activate: ["activated", "deactivated"],
            create: ["beforeCreate", "created"],
            destroy: ["beforeDestroy", "destroyed"],
            mount: ["beforeMount", "mounted"],
            update: ["beforeUpdate", "updated"]
        };

    function Ss() {
        return C().getScope().getTransaction()
    }

    function p_(t, e, n) {
        t.$_sentryRootSpanTimer && clearTimeout(t.$_sentryRootSpanTimer), t.$_sentryRootSpanTimer = setTimeout(() => {
            t.$root && t.$root.$_sentryRootSpan && (t.$root.$_sentryRootSpan.finish(e), t.$root.$_sentryRootSpan = void 0)
        }, n)
    }
    const h_ = t => {
            const e = (t.hooks || []).concat($r).filter((s, r, i) => i.indexOf(s) === r),
                n = {};
            for (const s of e) {
                const r = f_[s];
                if (!r) {
                    (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && h.warn(`Unknown hook: ${s}`);
                    continue
                }
                for (const i of r) n[i] = function() {
                    const o = this.$root === this;
                    if (o) {
                        const u = Ss();
                        u && (this.$_sentryRootSpan = this.$_sentryRootSpan || u.startChild({
                            description: "Application Render",
                            op: `${Ts}.render`,
                            origin: "auto.ui.vue"
                        }))
                    }
                    const a = Me(this, !1),
                        c = Array.isArray(t.trackComponents) ? t.trackComponents.indexOf(a) > -1 : t.trackComponents;
                    if (!(!o && !c))
                        if (this.$_sentrySpans = this.$_sentrySpans || {}, i == r[0]) {
                            const u = this.$root && this.$root.$_sentryRootSpan || Ss();
                            if (u) {
                                const l = this.$_sentrySpans[s];
                                l && !l.endTimestamp && l.finish(), this.$_sentrySpans[s] = u.startChild({
                                    description: `Vue <${a}>`,
                                    op: `${Ts}.${s}`,
                                    origin: "auto.ui.vue"
                                })
                            }
                        } else {
                            const u = this.$_sentrySpans[s];
                            if (!u) return;
                            u.finish(), p_(this, ye(), t.timeout)
                        }
                }
            }
            return n
        },
        m_ = Y,
        g_ = {
            Vue: m_.Vue,
            attachProps: !0,
            logErrors: !0,
            hooks: $r,
            timeout: 2e3,
            trackComponents: !1,
            _metadata: {
                sdk: {
                    name: "sentry.javascript.vue",
                    packages: [{
                        name: "npm:@sentry/vue",
                        version: bt
                    }],
                    version: bt
                }
            }
        };

    function y_(t = {}) {
        const e = {
            ...g_,
            ...t
        };
        if (Rd(e), !e.Vue && !e.app) {
            console.warn("[@sentry/vue]: Misconfigured SDK. Vue specific errors will not be captured.\nUpdate your `Sentry.init` call with an appropriate config option:\n`app` (Application Instance - Vue 3) or `Vue` (Vue Constructor - Vue 2).");
            return
        }
        e.app ? kn(e.app).forEach(s => vs(s, e)) : e.Vue && vs(e.Vue, e)
    }
    const vs = (t, e) => {
            const n = t;
            (n._instance && n._instance.isMounted) === !0 && console.warn("[@sentry/vue]: Misconfigured SDK. Vue app is already mounted. Make sure to call `app.mount()` after `Sentry.init()`."), __(t, e), It(e) && t.mixin(h_({
                ...e,
                ...e.tracingOptions
            }))
        },
        ut = "https://ebe2deabb9b89aba29e9bc546f389afb@o4505873592090624.ingest.sentry.io/4505873592942592",
        E_ = {
            InsFo: "https://d28b25bf2a8d827bcb9dc3d970849beb@o4505873509318656.ingest.sentry.io/4505873510170624",
            InsGrow: "https://3cabe6f1d421c71d3bfdea44bbe89ef5@o4505890297544704.ingest.sentry.io/4505890298396672",
            InsTF: "https://4a20285af6b74be7978aca3f017b541f@o4504671497682944.ingest.sentry.io/4504864781303808",
            InsC: ut,
            InsL: ut,
            InsE: ut,
            InsTest: ut
        },
        b_ = E_[M.name];

    function T_(t) {
        y_({
            release: `${M.name}@${M.version}`,
            app: t,
            dsn: b_,
            integrations: [new o_],
            trackComponents: !0,
            tracesSampleRate: 0
        })
    }
    const Cr = Ti(dc);
    T_(Cr);
    Cr.mount("#app")
});
export default S_();