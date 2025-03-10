/*! For license information please see main.b697c3cb753b872d9604.js.LICENSE.txt */
(() => {
    var t = {
            353: function (t) {
                t.exports = (function () {
                    "use strict";
                    var t = 6e4,
                        e = 36e5,
                        i = "millisecond",
                        s = "second",
                        n = "minute",
                        o = "hour",
                        r = "day",
                        a = "week",
                        h = "month",
                        l = "quarter",
                        c = "year",
                        d = "date",
                        u = "Invalid Date",
                        f = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
                        g = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
                        p = {
                            name: "en",
                            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                            ordinal: function (t) {
                                var e = ["th", "st", "nd", "rd"],
                                    i = t % 100;
                                return "[" + t + (e[(i - 20) % 10] || e[i] || e[0]) + "]";
                            },
                        },
                        m = function (t, e, i) {
                            var s = String(t);
                            return !s || s.length >= e ? t : "" + Array(e + 1 - s.length).join(i) + t;
                        },
                        x = {
                            s: m,
                            z: function (t) {
                                var e = -t.utcOffset(),
                                    i = Math.abs(e),
                                    s = Math.floor(i / 60),
                                    n = i % 60;
                                return (e <= 0 ? "+" : "-") + m(s, 2, "0") + ":" + m(n, 2, "0");
                            },
                            m: function t(e, i) {
                                if (e.date() < i.date()) return -t(i, e);
                                var s = 12 * (i.year() - e.year()) + (i.month() - e.month()),
                                    n = e.clone().add(s, h),
                                    o = i - n < 0,
                                    r = e.clone().add(s + (o ? -1 : 1), h);
                                return +(-(s + (i - n) / (o ? n - r : r - n)) || 0);
                            },
                            a: function (t) {
                                return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
                            },
                            p: function (t) {
                                return (
                                    { M: h, y: c, w: a, d: r, D: d, h: o, m: n, s, ms: i, Q: l }[t] ||
                                    String(t || "")
                                        .toLowerCase()
                                        .replace(/s$/, "")
                                );
                            },
                            u: function (t) {
                                return void 0 === t;
                            },
                        },
                        b = "en",
                        y = {};
                    y[b] = p;
                    var _ = "$isDayjsObject",
                        v = function (t) {
                            return t instanceof S || !(!t || !t[_]);
                        },
                        w = function t(e, i, s) {
                            var n;
                            if (!e) return b;
                            if ("string" == typeof e) {
                                var o = e.toLowerCase();
                                y[o] && (n = o), i && ((y[o] = i), (n = o));
                                var r = e.split("-");
                                if (!n && r.length > 1) return t(r[0]);
                            } else {
                                var a = e.name;
                                (y[a] = e), (n = a);
                            }
                            return !s && n && (b = n), n || (!s && b);
                        },
                        M = function (t, e) {
                            if (v(t)) return t.clone();
                            var i = "object" == typeof e ? e : {};
                            return (i.date = t), (i.args = arguments), new S(i);
                        },
                        k = x;
                    (k.l = w),
                        (k.i = v),
                        (k.w = function (t, e) {
                            return M(t, { locale: e.$L, utc: e.$u, x: e.$x, $offset: e.$offset });
                        });
                    var S = (function () {
                            function p(t) {
                                (this.$L = w(t.locale, null, !0)), this.parse(t), (this.$x = this.$x || t.x || {}), (this[_] = !0);
                            }
                            var m = p.prototype;
                            return (
                                (m.parse = function (t) {
                                    (this.$d = (function (t) {
                                        var e = t.date,
                                            i = t.utc;
                                        if (null === e) return new Date(NaN);
                                        if (k.u(e)) return new Date();
                                        if (e instanceof Date) return new Date(e);
                                        if ("string" == typeof e && !/Z$/i.test(e)) {
                                            var s = e.match(f);
                                            if (s) {
                                                var n = s[2] - 1 || 0,
                                                    o = (s[7] || "0").substring(0, 3);
                                                return i ? new Date(Date.UTC(s[1], n, s[3] || 1, s[4] || 0, s[5] || 0, s[6] || 0, o)) : new Date(s[1], n, s[3] || 1, s[4] || 0, s[5] || 0, s[6] || 0, o);
                                            }
                                        }
                                        return new Date(e);
                                    })(t)),
                                        this.init();
                                }),
                                (m.init = function () {
                                    var t = this.$d;
                                    (this.$y = t.getFullYear()),
                                        (this.$M = t.getMonth()),
                                        (this.$D = t.getDate()),
                                        (this.$W = t.getDay()),
                                        (this.$H = t.getHours()),
                                        (this.$m = t.getMinutes()),
                                        (this.$s = t.getSeconds()),
                                        (this.$ms = t.getMilliseconds());
                                }),
                                (m.$utils = function () {
                                    return k;
                                }),
                                (m.isValid = function () {
                                    return !(this.$d.toString() === u);
                                }),
                                (m.isSame = function (t, e) {
                                    var i = M(t);
                                    return this.startOf(e) <= i && i <= this.endOf(e);
                                }),
                                (m.isAfter = function (t, e) {
                                    return M(t) < this.startOf(e);
                                }),
                                (m.isBefore = function (t, e) {
                                    return this.endOf(e) < M(t);
                                }),
                                (m.$g = function (t, e, i) {
                                    return k.u(t) ? this[e] : this.set(i, t);
                                }),
                                (m.unix = function () {
                                    return Math.floor(this.valueOf() / 1e3);
                                }),
                                (m.valueOf = function () {
                                    return this.$d.getTime();
                                }),
                                (m.startOf = function (t, e) {
                                    var i = this,
                                        l = !!k.u(e) || e,
                                        u = k.p(t),
                                        f = function (t, e) {
                                            var s = k.w(i.$u ? Date.UTC(i.$y, e, t) : new Date(i.$y, e, t), i);
                                            return l ? s : s.endOf(r);
                                        },
                                        g = function (t, e) {
                                            return k.w(i.toDate()[t].apply(i.toDate("s"), (l ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e)), i);
                                        },
                                        p = this.$W,
                                        m = this.$M,
                                        x = this.$D,
                                        b = "set" + (this.$u ? "UTC" : "");
                                    switch (u) {
                                        case c:
                                            return l ? f(1, 0) : f(31, 11);
                                        case h:
                                            return l ? f(1, m) : f(0, m + 1);
                                        case a:
                                            var y = this.$locale().weekStart || 0,
                                                _ = (p < y ? p + 7 : p) - y;
                                            return f(l ? x - _ : x + (6 - _), m);
                                        case r:
                                        case d:
                                            return g(b + "Hours", 0);
                                        case o:
                                            return g(b + "Minutes", 1);
                                        case n:
                                            return g(b + "Seconds", 2);
                                        case s:
                                            return g(b + "Milliseconds", 3);
                                        default:
                                            return this.clone();
                                    }
                                }),
                                (m.endOf = function (t) {
                                    return this.startOf(t, !1);
                                }),
                                (m.$set = function (t, e) {
                                    var a,
                                        l = k.p(t),
                                        u = "set" + (this.$u ? "UTC" : ""),
                                        f = ((a = {}),
                                        (a[r] = u + "Date"),
                                        (a[d] = u + "Date"),
                                        (a[h] = u + "Month"),
                                        (a[c] = u + "FullYear"),
                                        (a[o] = u + "Hours"),
                                        (a[n] = u + "Minutes"),
                                        (a[s] = u + "Seconds"),
                                        (a[i] = u + "Milliseconds"),
                                        a)[l],
                                        g = l === r ? this.$D + (e - this.$W) : e;
                                    if (l === h || l === c) {
                                        var p = this.clone().set(d, 1);
                                        p.$d[f](g), p.init(), (this.$d = p.set(d, Math.min(this.$D, p.daysInMonth())).$d);
                                    } else f && this.$d[f](g);
                                    return this.init(), this;
                                }),
                                (m.set = function (t, e) {
                                    return this.clone().$set(t, e);
                                }),
                                (m.get = function (t) {
                                    return this[k.p(t)]();
                                }),
                                (m.add = function (i, l) {
                                    var d,
                                        u = this;
                                    i = Number(i);
                                    var f = k.p(l),
                                        g = function (t) {
                                            var e = M(u);
                                            return k.w(e.date(e.date() + Math.round(t * i)), u);
                                        };
                                    if (f === h) return this.set(h, this.$M + i);
                                    if (f === c) return this.set(c, this.$y + i);
                                    if (f === r) return g(1);
                                    if (f === a) return g(7);
                                    var p = ((d = {}), (d[n] = t), (d[o] = e), (d[s] = 1e3), d)[f] || 1,
                                        m = this.$d.getTime() + i * p;
                                    return k.w(m, this);
                                }),
                                (m.subtract = function (t, e) {
                                    return this.add(-1 * t, e);
                                }),
                                (m.format = function (t) {
                                    var e = this,
                                        i = this.$locale();
                                    if (!this.isValid()) return i.invalidDate || u;
                                    var s = t || "YYYY-MM-DDTHH:mm:ssZ",
                                        n = k.z(this),
                                        o = this.$H,
                                        r = this.$m,
                                        a = this.$M,
                                        h = i.weekdays,
                                        l = i.months,
                                        c = i.meridiem,
                                        d = function (t, i, n, o) {
                                            return (t && (t[i] || t(e, s))) || n[i].slice(0, o);
                                        },
                                        f = function (t) {
                                            return k.s(o % 12 || 12, t, "0");
                                        },
                                        p =
                                            c ||
                                            function (t, e, i) {
                                                var s = t < 12 ? "AM" : "PM";
                                                return i ? s.toLowerCase() : s;
                                            };
                                    return s.replace(g, function (t, s) {
                                        return (
                                            s ||
                                            (function (t) {
                                                switch (t) {
                                                    case "YY":
                                                        return String(e.$y).slice(-2);
                                                    case "YYYY":
                                                        return k.s(e.$y, 4, "0");
                                                    case "M":
                                                        return a + 1;
                                                    case "MM":
                                                        return k.s(a + 1, 2, "0");
                                                    case "MMM":
                                                        return d(i.monthsShort, a, l, 3);
                                                    case "MMMM":
                                                        return d(l, a);
                                                    case "D":
                                                        return e.$D;
                                                    case "DD":
                                                        return k.s(e.$D, 2, "0");
                                                    case "d":
                                                        return String(e.$W);
                                                    case "dd":
                                                        return d(i.weekdaysMin, e.$W, h, 2);
                                                    case "ddd":
                                                        return d(i.weekdaysShort, e.$W, h, 3);
                                                    case "dddd":
                                                        return h[e.$W];
                                                    case "H":
                                                        return String(o);
                                                    case "HH":
                                                        return k.s(o, 2, "0");
                                                    case "h":
                                                        return f(1);
                                                    case "hh":
                                                        return f(2);
                                                    case "a":
                                                        return p(o, r, !0);
                                                    case "A":
                                                        return p(o, r, !1);
                                                    case "m":
                                                        return String(r);
                                                    case "mm":
                                                        return k.s(r, 2, "0");
                                                    case "s":
                                                        return String(e.$s);
                                                    case "ss":
                                                        return k.s(e.$s, 2, "0");
                                                    case "SSS":
                                                        return k.s(e.$ms, 3, "0");
                                                    case "Z":
                                                        return n;
                                                }
                                                return null;
                                            })(t) ||
                                            n.replace(":", "")
                                        );
                                    });
                                }),
                                (m.utcOffset = function () {
                                    return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
                                }),
                                (m.diff = function (i, d, u) {
                                    var f,
                                        g = this,
                                        p = k.p(d),
                                        m = M(i),
                                        x = (m.utcOffset() - this.utcOffset()) * t,
                                        b = this - m,
                                        y = function () {
                                            return k.m(g, m);
                                        };
                                    switch (p) {
                                        case c:
                                            f = y() / 12;
                                            break;
                                        case h:
                                            f = y();
                                            break;
                                        case l:
                                            f = y() / 3;
                                            break;
                                        case a:
                                            f = (b - x) / 6048e5;
                                            break;
                                        case r:
                                            f = (b - x) / 864e5;
                                            break;
                                        case o:
                                            f = b / e;
                                            break;
                                        case n:
                                            f = b / t;
                                            break;
                                        case s:
                                            f = b / 1e3;
                                            break;
                                        default:
                                            f = b;
                                    }
                                    return u ? f : k.a(f);
                                }),
                                (m.daysInMonth = function () {
                                    return this.endOf(h).$D;
                                }),
                                (m.$locale = function () {
                                    return y[this.$L];
                                }),
                                (m.locale = function (t, e) {
                                    if (!t) return this.$L;
                                    var i = this.clone(),
                                        s = w(t, e, !0);
                                    return s && (i.$L = s), i;
                                }),
                                (m.clone = function () {
                                    return k.w(this.$d, this);
                                }),
                                (m.toDate = function () {
                                    return new Date(this.valueOf());
                                }),
                                (m.toJSON = function () {
                                    return this.isValid() ? this.toISOString() : null;
                                }),
                                (m.toISOString = function () {
                                    return this.$d.toISOString();
                                }),
                                (m.toString = function () {
                                    return this.$d.toUTCString();
                                }),
                                p
                            );
                        })(),
                        D = S.prototype;
                    return (
                        (M.prototype = D),
                        [
                            ["$ms", i],
                            ["$s", s],
                            ["$m", n],
                            ["$H", o],
                            ["$W", r],
                            ["$M", h],
                            ["$y", c],
                            ["$D", d],
                        ].forEach(function (t) {
                            D[t[1]] = function (e) {
                                return this.$g(e, t[0], t[1]);
                            };
                        }),
                        (M.extend = function (t, e) {
                            return t.$i || (t(e, S, M), (t.$i = !0)), M;
                        }),
                        (M.locale = w),
                        (M.isDayjs = v),
                        (M.unix = function (t) {
                            return M(1e3 * t);
                        }),
                        (M.en = y[b]),
                        (M.Ls = y),
                        (M.p = {}),
                        M
                    );
                })();
            },
            375: function (t) {
                t.exports = (function () {
                    "use strict";
                    return function (t, e) {
                        var i = e.prototype,
                            s = i.format;
                        i.format = function (t) {
                            var e = this,
                                i = this.$locale();
                            if (!this.isValid()) return s.bind(this)(t);
                            var n = this.$utils(),
                                o = (t || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, function (t) {
                                    switch (t) {
                                        case "Q":
                                            return Math.ceil((e.$M + 1) / 3);
                                        case "Do":
                                            return i.ordinal(e.$D);
                                        case "gggg":
                                            return e.weekYear();
                                        case "GGGG":
                                            return e.isoWeekYear();
                                        case "wo":
                                            return i.ordinal(e.week(), "W");
                                        case "w":
                                        case "ww":
                                            return n.s(e.week(), "w" === t ? 1 : 2, "0");
                                        case "W":
                                        case "WW":
                                            return n.s(e.isoWeek(), "W" === t ? 1 : 2, "0");
                                        case "k":
                                        case "kk":
                                            return n.s(String(0 === e.$H ? 24 : e.$H), "k" === t ? 1 : 2, "0");
                                        case "X":
                                            return Math.floor(e.$d.getTime() / 1e3);
                                        case "x":
                                            return e.$d.getTime();
                                        case "z":
                                            return "[" + e.offsetName() + "]";
                                        case "zzz":
                                            return "[" + e.offsetName("long") + "]";
                                        default:
                                            return t;
                                    }
                                });
                            return s.bind(this)(o);
                        };
                    };
                })();
            },
            445: function (t) {
                t.exports = (function () {
                    "use strict";
                    var t = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" },
                        e = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,
                        i = /\d/,
                        s = /\d\d/,
                        n = /\d\d?/,
                        o = /\d*[^-_:/,()\s\d]+/,
                        r = {},
                        a = function (t) {
                            return (t = +t) + (t > 68 ? 1900 : 2e3);
                        },
                        h = function (t) {
                            return function (e) {
                                this[t] = +e;
                            };
                        },
                        l = [
                            /[+-]\d\d:?(\d\d)?|Z/,
                            function (t) {
                                (this.zone || (this.zone = {})).offset = (function (t) {
                                    if (!t) return 0;
                                    if ("Z" === t) return 0;
                                    var e = t.match(/([+-]|\d\d)/g),
                                        i = 60 * e[1] + (+e[2] || 0);
                                    return 0 === i ? 0 : "+" === e[0] ? -i : i;
                                })(t);
                            },
                        ],
                        c = function (t) {
                            var e = r[t];
                            return e && (e.indexOf ? e : e.s.concat(e.f));
                        },
                        d = function (t, e) {
                            var i,
                                s = r.meridiem;
                            if (s) {
                                for (var n = 1; n <= 24; n += 1)
                                    if (t.indexOf(s(n, 0, e)) > -1) {
                                        i = n > 12;
                                        break;
                                    }
                            } else i = t === (e ? "pm" : "PM");
                            return i;
                        },
                        u = {
                            A: [
                                o,
                                function (t) {
                                    this.afternoon = d(t, !1);
                                },
                            ],
                            a: [
                                o,
                                function (t) {
                                    this.afternoon = d(t, !0);
                                },
                            ],
                            Q: [
                                i,
                                function (t) {
                                    this.month = 3 * (t - 1) + 1;
                                },
                            ],
                            S: [
                                i,
                                function (t) {
                                    this.milliseconds = 100 * +t;
                                },
                            ],
                            SS: [
                                s,
                                function (t) {
                                    this.milliseconds = 10 * +t;
                                },
                            ],
                            SSS: [
                                /\d{3}/,
                                function (t) {
                                    this.milliseconds = +t;
                                },
                            ],
                            s: [n, h("seconds")],
                            ss: [n, h("seconds")],
                            m: [n, h("minutes")],
                            mm: [n, h("minutes")],
                            H: [n, h("hours")],
                            h: [n, h("hours")],
                            HH: [n, h("hours")],
                            hh: [n, h("hours")],
                            D: [n, h("day")],
                            DD: [s, h("day")],
                            Do: [
                                o,
                                function (t) {
                                    var e = r.ordinal,
                                        i = t.match(/\d+/);
                                    if (((this.day = i[0]), e)) for (var s = 1; s <= 31; s += 1) e(s).replace(/\[|\]/g, "") === t && (this.day = s);
                                },
                            ],
                            w: [n, h("week")],
                            ww: [s, h("week")],
                            M: [n, h("month")],
                            MM: [s, h("month")],
                            MMM: [
                                o,
                                function (t) {
                                    var e = c("months"),
                                        i =
                                            (
                                                c("monthsShort") ||
                                                e.map(function (t) {
                                                    return t.slice(0, 3);
                                                })
                                            ).indexOf(t) + 1;
                                    if (i < 1) throw new Error();
                                    this.month = i % 12 || i;
                                },
                            ],
                            MMMM: [
                                o,
                                function (t) {
                                    var e = c("months").indexOf(t) + 1;
                                    if (e < 1) throw new Error();
                                    this.month = e % 12 || e;
                                },
                            ],
                            Y: [/[+-]?\d+/, h("year")],
                            YY: [
                                s,
                                function (t) {
                                    this.year = a(t);
                                },
                            ],
                            YYYY: [/\d{4}/, h("year")],
                            Z: l,
                            ZZ: l,
                        };
                    function f(i) {
                        var s, n;
                        (s = i), (n = r && r.formats);
                        for (
                            var o = (i = s.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function (e, i, s) {
                                    var o = s && s.toUpperCase();
                                    return (
                                        i ||
                                        n[s] ||
                                        t[s] ||
                                        n[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function (t, e, i) {
                                            return e || i.slice(1);
                                        })
                                    );
                                })).match(e),
                                a = o.length,
                                h = 0;
                            h < a;
                            h += 1
                        ) {
                            var l = o[h],
                                c = u[l],
                                d = c && c[0],
                                f = c && c[1];
                            o[h] = f ? { regex: d, parser: f } : l.replace(/^\[|\]$/g, "");
                        }
                        return function (t) {
                            for (var e = {}, i = 0, s = 0; i < a; i += 1) {
                                var n = o[i];
                                if ("string" == typeof n) s += n.length;
                                else {
                                    var r = n.regex,
                                        h = n.parser,
                                        l = t.slice(s),
                                        c = r.exec(l)[0];
                                    h.call(e, c), (t = t.replace(c, ""));
                                }
                            }
                            return (
                                (function (t) {
                                    var e = t.afternoon;
                                    if (void 0 !== e) {
                                        var i = t.hours;
                                        e ? i < 12 && (t.hours += 12) : 12 === i && (t.hours = 0), delete t.afternoon;
                                    }
                                })(e),
                                e
                            );
                        };
                    }
                    return function (t, e, i) {
                        (i.p.customParseFormat = !0), t && t.parseTwoDigitYear && (a = t.parseTwoDigitYear);
                        var s = e.prototype,
                            n = s.parse;
                        s.parse = function (t) {
                            var e = t.date,
                                s = t.utc,
                                o = t.args;
                            this.$u = s;
                            var a = o[1];
                            if ("string" == typeof a) {
                                var h = !0 === o[2],
                                    l = !0 === o[3],
                                    c = h || l,
                                    d = o[2];
                                l && (d = o[2]),
                                    (r = this.$locale()),
                                    !h && d && (r = i.Ls[d]),
                                    (this.$d = (function (t, e, i, s) {
                                        try {
                                            if (["x", "X"].indexOf(e) > -1) return new Date(("X" === e ? 1e3 : 1) * t);
                                            var n = f(e)(t),
                                                o = n.year,
                                                r = n.month,
                                                a = n.day,
                                                h = n.hours,
                                                l = n.minutes,
                                                c = n.seconds,
                                                d = n.milliseconds,
                                                u = n.zone,
                                                g = n.week,
                                                p = new Date(),
                                                m = a || (o || r ? 1 : p.getDate()),
                                                x = o || p.getFullYear(),
                                                b = 0;
                                            (o && !r) || (b = r > 0 ? r - 1 : p.getMonth());
                                            var y,
                                                _ = h || 0,
                                                v = l || 0,
                                                w = c || 0,
                                                M = d || 0;
                                            return u ? new Date(Date.UTC(x, b, m, _, v, w, M + 60 * u.offset * 1e3)) : i ? new Date(Date.UTC(x, b, m, _, v, w, M)) : ((y = new Date(x, b, m, _, v, w, M)), g && (y = s(y).week(g).toDate()), y);
                                        } catch (t) {
                                            return new Date("");
                                        }
                                    })(e, a, s, i)),
                                    this.init(),
                                    d && !0 !== d && (this.$L = this.locale(d).$L),
                                    c && e != this.format(a) && (this.$d = new Date("")),
                                    (r = {});
                            } else if (a instanceof Array)
                                for (var u = a.length, g = 1; g <= u; g += 1) {
                                    o[1] = a[g - 1];
                                    var p = i.apply(this, o);
                                    if (p.isValid()) {
                                        (this.$d = p.$d), (this.$L = p.$L), this.init();
                                        break;
                                    }
                                    g === u && (this.$d = new Date(""));
                                }
                            else n.call(this, t);
                        };
                    };
                })();
            },
            313: function (t) {
                t.exports = (function () {
                    "use strict";
                    var t = "day";
                    return function (e, i, s) {
                        var n = function (e) {
                                return e.add(4 - e.isoWeekday(), t);
                            },
                            o = i.prototype;
                        (o.isoWeekYear = function () {
                            return n(this).year();
                        }),
                            (o.isoWeek = function (e) {
                                if (!this.$utils().u(e)) return this.add(7 * (e - this.isoWeek()), t);
                                var i,
                                    o,
                                    r,
                                    a = n(this),
                                    h = ((i = this.isoWeekYear()), (r = 4 - (o = (this.$u ? s.utc : s)().year(i).startOf("year")).isoWeekday()), o.isoWeekday() > 4 && (r += 7), o.add(r, t));
                                return a.diff(h, "week") + 1;
                            }),
                            (o.isoWeekday = function (t) {
                                return this.$utils().u(t) ? this.day() || 7 : this.day(this.day() % 7 ? t : t - 7);
                            });
                        var r = o.startOf;
                        o.startOf = function (t, e) {
                            var i = this.$utils(),
                                s = !!i.u(e) || e;
                            return "isoweek" === i.p(t) ? (s ? this.date(this.date() - (this.isoWeekday() - 1)).startOf("day") : this.date(this.date() - 1 - (this.isoWeekday() - 1) + 7).endOf("day")) : r.bind(this)(t, e);
                        };
                    };
                })();
            },
            750: function (t) {
                t.exports = (function () {
                    "use strict";
                    var t = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" };
                    return function (e, i, s) {
                        var n = i.prototype,
                            o = n.format;
                        (s.en.formats = t),
                            (n.format = function (e) {
                                void 0 === e && (e = "YYYY-MM-DDTHH:mm:ssZ");
                                var i = this.$locale().formats,
                                    s = (function (e, i) {
                                        return e.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function (e, s, n) {
                                            var o = n && n.toUpperCase();
                                            return (
                                                s ||
                                                i[n] ||
                                                t[n] ||
                                                i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function (t, e, i) {
                                                    return e || i.slice(1);
                                                })
                                            );
                                        });
                                    })(e, void 0 === i ? {} : i);
                                return o.call(this, s);
                            });
                    };
                })();
            },
            816: function (t) {
                t.exports = (function () {
                    "use strict";
                    var t = "month",
                        e = "quarter";
                    return function (i, s) {
                        var n = s.prototype;
                        n.quarter = function (t) {
                            return this.$utils().u(t) ? Math.ceil((this.month() + 1) / 3) : this.month((this.month() % 3) + 3 * (t - 1));
                        };
                        var o = n.add;
                        n.add = function (i, s) {
                            return (i = Number(i)), this.$utils().p(s) === e ? this.add(3 * i, t) : o.bind(this)(i, s);
                        };
                        var r = n.startOf;
                        n.startOf = function (i, s) {
                            var n = this.$utils(),
                                o = !!n.u(s) || s;
                            if (n.p(i) === e) {
                                var a = this.quarter() - 1;
                                return o
                                    ? this.month(3 * a)
                                          .startOf(t)
                                          .startOf("day")
                                    : this.month(3 * a + 2)
                                          .endOf(t)
                                          .endOf("day");
                            }
                            return r.bind(this)(i, s);
                        };
                    };
                })();
            },
        },
        e = {};
    function i(s) {
        var n = e[s];
        if (void 0 !== n) return n.exports;
        var o = (e[s] = { exports: {} });
        return t[s].call(o.exports, o, o.exports, i), o.exports;
    }
    var s = {};
    (() => {
        "use strict";
        function t(t) {
            return (t + 0.5) | 0;
        }
        const e = (t, e, i) => Math.max(Math.min(t, i), e);
        function s(i) {
            return e(t(2.55 * i), 0, 255);
        }
        function n(i) {
            return e(t(255 * i), 0, 255);
        }
        function o(i) {
            return e(t(i / 2.55) / 100, 0, 1);
        }
        function r(i) {
            return e(t(100 * i), 0, 100);
        }
        const a = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, A: 10, B: 11, C: 12, D: 13, E: 14, F: 15, a: 10, b: 11, c: 12, d: 13, e: 14, f: 15 },
            h = [..."0123456789ABCDEF"],
            l = (t) => h[15 & t],
            c = (t) => h[(240 & t) >> 4] + h[15 & t],
            d = (t) => (240 & t) >> 4 == (15 & t);
        const u = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
        function f(t, e, i) {
            const s = e * Math.min(i, 1 - i),
                n = (e, n = (e + t / 30) % 12) => i - s * Math.max(Math.min(n - 3, 9 - n, 1), -1);
            return [n(0), n(8), n(4)];
        }
        function g(t, e, i) {
            const s = (s, n = (s + t / 60) % 6) => i - i * e * Math.max(Math.min(n, 4 - n, 1), 0);
            return [s(5), s(3), s(1)];
        }
        function p(t, e, i) {
            const s = f(t, 1, 0.5);
            let n;
            for (e + i > 1 && ((n = 1 / (e + i)), (e *= n), (i *= n)), n = 0; n < 3; n++) (s[n] *= 1 - e - i), (s[n] += e);
            return s;
        }
        function m(t) {
            const e = t.r / 255,
                i = t.g / 255,
                s = t.b / 255,
                n = Math.max(e, i, s),
                o = Math.min(e, i, s),
                r = (n + o) / 2;
            let a, h, l;
            return (
                n !== o &&
                    ((l = n - o),
                    (h = r > 0.5 ? l / (2 - n - o) : l / (n + o)),
                    (a = (function (t, e, i, s, n) {
                        return t === n ? (e - i) / s + (e < i ? 6 : 0) : e === n ? (i - t) / s + 2 : (t - e) / s + 4;
                    })(e, i, s, l, n)),
                    (a = 60 * a + 0.5)),
                [0 | a, h || 0, r]
            );
        }
        function x(t, e, i, s) {
            return (Array.isArray(e) ? t(e[0], e[1], e[2]) : t(e, i, s)).map(n);
        }
        function b(t, e, i) {
            return x(f, t, e, i);
        }
        function y(t) {
            return ((t % 360) + 360) % 360;
        }
        const _ = {
                x: "dark",
                Z: "light",
                Y: "re",
                X: "blu",
                W: "gr",
                V: "medium",
                U: "slate",
                A: "ee",
                T: "ol",
                S: "or",
                B: "ra",
                C: "lateg",
                D: "ights",
                R: "in",
                Q: "turquois",
                E: "hi",
                P: "ro",
                O: "al",
                N: "le",
                M: "de",
                L: "yello",
                F: "en",
                K: "ch",
                G: "arks",
                H: "ea",
                I: "ightg",
                J: "wh",
            },
            v = {
                OiceXe: "f0f8ff",
                antiquewEte: "faebd7",
                aqua: "ffff",
                aquamarRe: "7fffd4",
                azuY: "f0ffff",
                beige: "f5f5dc",
                bisque: "ffe4c4",
                black: "0",
                blanKedOmond: "ffebcd",
                Xe: "ff",
                XeviTet: "8a2be2",
                bPwn: "a52a2a",
                burlywood: "deb887",
                caMtXe: "5f9ea0",
                KartYuse: "7fff00",
                KocTate: "d2691e",
                cSO: "ff7f50",
                cSnflowerXe: "6495ed",
                cSnsilk: "fff8dc",
                crimson: "dc143c",
                cyan: "ffff",
                xXe: "8b",
                xcyan: "8b8b",
                xgTMnPd: "b8860b",
                xWay: "a9a9a9",
                xgYF: "6400",
                xgYy: "a9a9a9",
                xkhaki: "bdb76b",
                xmagFta: "8b008b",
                xTivegYF: "556b2f",
                xSange: "ff8c00",
                xScEd: "9932cc",
                xYd: "8b0000",
                xsOmon: "e9967a",
                xsHgYF: "8fbc8f",
                xUXe: "483d8b",
                xUWay: "2f4f4f",
                xUgYy: "2f4f4f",
                xQe: "ced1",
                xviTet: "9400d3",
                dAppRk: "ff1493",
                dApskyXe: "bfff",
                dimWay: "696969",
                dimgYy: "696969",
                dodgerXe: "1e90ff",
                fiYbrick: "b22222",
                flSOwEte: "fffaf0",
                foYstWAn: "228b22",
                fuKsia: "ff00ff",
                gaRsbSo: "dcdcdc",
                ghostwEte: "f8f8ff",
                gTd: "ffd700",
                gTMnPd: "daa520",
                Way: "808080",
                gYF: "8000",
                gYFLw: "adff2f",
                gYy: "808080",
                honeyMw: "f0fff0",
                hotpRk: "ff69b4",
                RdianYd: "cd5c5c",
                Rdigo: "4b0082",
                ivSy: "fffff0",
                khaki: "f0e68c",
                lavFMr: "e6e6fa",
                lavFMrXsh: "fff0f5",
                lawngYF: "7cfc00",
                NmoncEffon: "fffacd",
                ZXe: "add8e6",
                ZcSO: "f08080",
                Zcyan: "e0ffff",
                ZgTMnPdLw: "fafad2",
                ZWay: "d3d3d3",
                ZgYF: "90ee90",
                ZgYy: "d3d3d3",
                ZpRk: "ffb6c1",
                ZsOmon: "ffa07a",
                ZsHgYF: "20b2aa",
                ZskyXe: "87cefa",
                ZUWay: "778899",
                ZUgYy: "778899",
                ZstAlXe: "b0c4de",
                ZLw: "ffffe0",
                lime: "ff00",
                limegYF: "32cd32",
                lRF: "faf0e6",
                magFta: "ff00ff",
                maPon: "800000",
                VaquamarRe: "66cdaa",
                VXe: "cd",
                VScEd: "ba55d3",
                VpurpN: "9370db",
                VsHgYF: "3cb371",
                VUXe: "7b68ee",
                VsprRggYF: "fa9a",
                VQe: "48d1cc",
                VviTetYd: "c71585",
                midnightXe: "191970",
                mRtcYam: "f5fffa",
                mistyPse: "ffe4e1",
                moccasR: "ffe4b5",
                navajowEte: "ffdead",
                navy: "80",
                Tdlace: "fdf5e6",
                Tive: "808000",
                TivedBb: "6b8e23",
                Sange: "ffa500",
                SangeYd: "ff4500",
                ScEd: "da70d6",
                pOegTMnPd: "eee8aa",
                pOegYF: "98fb98",
                pOeQe: "afeeee",
                pOeviTetYd: "db7093",
                papayawEp: "ffefd5",
                pHKpuff: "ffdab9",
                peru: "cd853f",
                pRk: "ffc0cb",
                plum: "dda0dd",
                powMrXe: "b0e0e6",
                purpN: "800080",
                YbeccapurpN: "663399",
                Yd: "ff0000",
                Psybrown: "bc8f8f",
                PyOXe: "4169e1",
                saddNbPwn: "8b4513",
                sOmon: "fa8072",
                sandybPwn: "f4a460",
                sHgYF: "2e8b57",
                sHshell: "fff5ee",
                siFna: "a0522d",
                silver: "c0c0c0",
                skyXe: "87ceeb",
                UXe: "6a5acd",
                UWay: "708090",
                UgYy: "708090",
                snow: "fffafa",
                sprRggYF: "ff7f",
                stAlXe: "4682b4",
                tan: "d2b48c",
                teO: "8080",
                tEstN: "d8bfd8",
                tomato: "ff6347",
                Qe: "40e0d0",
                viTet: "ee82ee",
                JHt: "f5deb3",
                wEte: "ffffff",
                wEtesmoke: "f5f5f5",
                Lw: "ffff00",
                LwgYF: "9acd32",
            };
        let w;
        const M = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/,
            k = (t) => (t <= 0.0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - 0.055),
            S = (t) => (t <= 0.04045 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4));
        function D(t, e, i) {
            if (t) {
                let s = m(t);
                (s[e] = Math.max(0, Math.min(s[e] + s[e] * i, 0 === e ? 360 : 1))), (s = b(s)), (t.r = s[0]), (t.g = s[1]), (t.b = s[2]);
            }
        }
        function O(t, e) {
            return t ? Object.assign(e || {}, t) : t;
        }
        function T(t) {
            var e = { r: 0, g: 0, b: 0, a: 255 };
            return Array.isArray(t) ? t.length >= 3 && ((e = { r: t[0], g: t[1], b: t[2], a: 255 }), t.length > 3 && (e.a = n(t[3]))) : ((e = O(t, { r: 0, g: 0, b: 0, a: 1 })).a = n(e.a)), e;
        }
        function C(t) {
            return "r" === t.charAt(0)
                ? (function (t) {
                      const i = M.exec(t);
                      let n,
                          o,
                          r,
                          a = 255;
                      if (i) {
                          if (i[7] !== n) {
                              const t = +i[7];
                              a = i[8] ? s(t) : e(255 * t, 0, 255);
                          }
                          return (n = +i[1]), (o = +i[3]), (r = +i[5]), (n = 255 & (i[2] ? s(n) : e(n, 0, 255))), (o = 255 & (i[4] ? s(o) : e(o, 0, 255))), (r = 255 & (i[6] ? s(r) : e(r, 0, 255))), { r: n, g: o, b: r, a };
                      }
                  })(t)
                : (function (t) {
                      const e = u.exec(t);
                      let i,
                          o = 255;
                      if (!e) return;
                      e[5] !== i && (o = e[6] ? s(+e[5]) : n(+e[5]));
                      const r = y(+e[2]),
                          a = +e[3] / 100,
                          h = +e[4] / 100;
                      return (
                          (i =
                              "hwb" === e[1]
                                  ? (function (t, e, i) {
                                        return x(p, t, e, i);
                                    })(r, a, h)
                                  : "hsv" === e[1]
                                  ? (function (t, e, i) {
                                        return x(g, t, e, i);
                                    })(r, a, h)
                                  : b(r, a, h)),
                          { r: i[0], g: i[1], b: i[2], a: o }
                      );
                  })(t);
        }
        class P {
            constructor(t) {
                if (t instanceof P) return t;
                const e = typeof t;
                let i;
                var s, n, o;
                "object" === e
                    ? (i = T(t))
                    : "string" === e &&
                      ((o = (s = t).length),
                      "#" === s[0] &&
                          (4 === o || 5 === o
                              ? (n = { r: 255 & (17 * a[s[1]]), g: 255 & (17 * a[s[2]]), b: 255 & (17 * a[s[3]]), a: 5 === o ? 17 * a[s[4]] : 255 })
                              : (7 !== o && 9 !== o) || (n = { r: (a[s[1]] << 4) | a[s[2]], g: (a[s[3]] << 4) | a[s[4]], b: (a[s[5]] << 4) | a[s[6]], a: 9 === o ? (a[s[7]] << 4) | a[s[8]] : 255 })),
                      (i =
                          n ||
                          (function (t) {
                              w ||
                                  ((w = (function () {
                                      const t = {},
                                          e = Object.keys(v),
                                          i = Object.keys(_);
                                      let s, n, o, r, a;
                                      for (s = 0; s < e.length; s++) {
                                          for (r = a = e[s], n = 0; n < i.length; n++) (o = i[n]), (a = a.replace(o, _[o]));
                                          (o = parseInt(v[r], 16)), (t[a] = [(o >> 16) & 255, (o >> 8) & 255, 255 & o]);
                                      }
                                      return t;
                                  })()),
                                  (w.transparent = [0, 0, 0, 0]));
                              const e = w[t.toLowerCase()];
                              return e && { r: e[0], g: e[1], b: e[2], a: 4 === e.length ? e[3] : 255 };
                          })(t) ||
                          C(t))),
                    (this._rgb = i),
                    (this._valid = !!i);
            }
            get valid() {
                return this._valid;
            }
            get rgb() {
                var t = O(this._rgb);
                return t && (t.a = o(t.a)), t;
            }
            set rgb(t) {
                this._rgb = T(t);
            }
            rgbString() {
                return this._valid ? (t = this._rgb) && (t.a < 255 ? `rgba(${t.r}, ${t.g}, ${t.b}, ${o(t.a)})` : `rgb(${t.r}, ${t.g}, ${t.b})`) : void 0;
                var t;
            }
            hexString() {
                return this._valid ? ((t = this._rgb), (e = ((t) => d(t.r) && d(t.g) && d(t.b) && d(t.a))(t) ? l : c), t ? "#" + e(t.r) + e(t.g) + e(t.b) + ((t, e) => (t < 255 ? e(t) : ""))(t.a, e) : void 0) : void 0;
                var t, e;
            }
            hslString() {
                return this._valid
                    ? (function (t) {
                          if (!t) return;
                          const e = m(t),
                              i = e[0],
                              s = r(e[1]),
                              n = r(e[2]);
                          return t.a < 255 ? `hsla(${i}, ${s}%, ${n}%, ${o(t.a)})` : `hsl(${i}, ${s}%, ${n}%)`;
                      })(this._rgb)
                    : void 0;
            }
            mix(t, e) {
                if (t) {
                    const i = this.rgb,
                        s = t.rgb;
                    let n;
                    const o = e === n ? 0.5 : e,
                        r = 2 * o - 1,
                        a = i.a - s.a,
                        h = ((r * a == -1 ? r : (r + a) / (1 + r * a)) + 1) / 2;
                    (n = 1 - h), (i.r = 255 & (h * i.r + n * s.r + 0.5)), (i.g = 255 & (h * i.g + n * s.g + 0.5)), (i.b = 255 & (h * i.b + n * s.b + 0.5)), (i.a = o * i.a + (1 - o) * s.a), (this.rgb = i);
                }
                return this;
            }
            interpolate(t, e) {
                return (
                    t &&
                        (this._rgb = (function (t, e, i) {
                            const s = S(o(t.r)),
                                r = S(o(t.g)),
                                a = S(o(t.b));
                            return { r: n(k(s + i * (S(o(e.r)) - s))), g: n(k(r + i * (S(o(e.g)) - r))), b: n(k(a + i * (S(o(e.b)) - a))), a: t.a + i * (e.a - t.a) };
                        })(this._rgb, t._rgb, e)),
                    this
                );
            }
            clone() {
                return new P(this.rgb);
            }
            alpha(t) {
                return (this._rgb.a = n(t)), this;
            }
            clearer(t) {
                return (this._rgb.a *= 1 - t), this;
            }
            greyscale() {
                const e = this._rgb,
                    i = t(0.3 * e.r + 0.59 * e.g + 0.11 * e.b);
                return (e.r = e.g = e.b = i), this;
            }
            opaquer(t) {
                return (this._rgb.a *= 1 + t), this;
            }
            negate() {
                const t = this._rgb;
                return (t.r = 255 - t.r), (t.g = 255 - t.g), (t.b = 255 - t.b), this;
            }
            lighten(t) {
                return D(this._rgb, 2, t), this;
            }
            darken(t) {
                return D(this._rgb, 2, -t), this;
            }
            saturate(t) {
                return D(this._rgb, 1, t), this;
            }
            desaturate(t) {
                return D(this._rgb, 1, -t), this;
            }
            rotate(t) {
                return (
                    (function (t, e) {
                        var i = m(t);
                        (i[0] = y(i[0] + e)), (i = b(i)), (t.r = i[0]), (t.g = i[1]), (t.b = i[2]);
                    })(this._rgb, t),
                    this
                );
            }
        }
        function I() {}
        const L = (() => {
            let t = 0;
            return () => t++;
        })();
        function A(t) {
            return null == t;
        }
        function E(t) {
            if (Array.isArray && Array.isArray(t)) return !0;
            const e = Object.prototype.toString.call(t);
            return "[object" === e.slice(0, 7) && "Array]" === e.slice(-6);
        }
        function z(t) {
            return null !== t && "[object Object]" === Object.prototype.toString.call(t);
        }
        function $(t) {
            return ("number" == typeof t || t instanceof Number) && isFinite(+t);
        }
        function R(t, e) {
            return $(t) ? t : e;
        }
        function B(t, e) {
            return void 0 === t ? e : t;
        }
        function F(t, e, i) {
            if (t && "function" == typeof t.call) return t.apply(i, e);
        }
        function H(t, e, i, s) {
            let n, o, r;
            if (E(t))
                if (((o = t.length), s)) for (n = o - 1; n >= 0; n--) e.call(i, t[n], n);
                else for (n = 0; n < o; n++) e.call(i, t[n], n);
            else if (z(t)) for (r = Object.keys(t), o = r.length, n = 0; n < o; n++) e.call(i, t[r[n]], r[n]);
        }
        function W(t, e) {
            let i, s, n, o;
            if (!t || !e || t.length !== e.length) return !1;
            for (i = 0, s = t.length; i < s; ++i) if (((n = t[i]), (o = e[i]), n.datasetIndex !== o.datasetIndex || n.index !== o.index)) return !1;
            return !0;
        }
        function Y(t) {
            if (E(t)) return t.map(Y);
            if (z(t)) {
                const e = Object.create(null),
                    i = Object.keys(t),
                    s = i.length;
                let n = 0;
                for (; n < s; ++n) e[i[n]] = Y(t[i[n]]);
                return e;
            }
            return t;
        }
        function j(t) {
            return -1 === ["__proto__", "prototype", "constructor"].indexOf(t);
        }
        function N(t, e, i, s) {
            if (!j(t)) return;
            const n = e[t],
                o = i[t];
            z(n) && z(o) ? V(n, o, s) : (e[t] = Y(o));
        }
        function V(t, e, i) {
            const s = E(e) ? e : [e],
                n = s.length;
            if (!z(t)) return t;
            const o = (i = i || {}).merger || N;
            let r;
            for (let e = 0; e < n; ++e) {
                if (((r = s[e]), !z(r))) continue;
                const n = Object.keys(r);
                for (let e = 0, s = n.length; e < s; ++e) o(n[e], t, r, i);
            }
            return t;
        }
        function U(t, e) {
            return V(t, e, { merger: X });
        }
        function X(t, e, i) {
            if (!j(t)) return;
            const s = e[t],
                n = i[t];
            z(s) && z(n) ? U(s, n) : Object.prototype.hasOwnProperty.call(e, t) || (e[t] = Y(n));
        }
        const q = { "": (t) => t, x: (t) => t.x, y: (t) => t.y };
        function Z(t, e) {
            const i =
                q[e] ||
                (q[e] = (function (t) {
                    const e = (function (t) {
                        const e = t.split("."),
                            i = [];
                        let s = "";
                        for (const t of e) (s += t), s.endsWith("\\") ? (s = s.slice(0, -1) + ".") : (i.push(s), (s = ""));
                        return i;
                    })(t);
                    return (t) => {
                        for (const i of e) {
                            if ("" === i) break;
                            t = t && t[i];
                        }
                        return t;
                    };
                })(e));
            return i(t);
        }
        function K(t) {
            return t.charAt(0).toUpperCase() + t.slice(1);
        }
        const G = (t) => void 0 !== t,
            Q = (t) => "function" == typeof t,
            J = (t, e) => {
                if (t.size !== e.size) return !1;
                for (const i of t) if (!e.has(i)) return !1;
                return !0;
            },
            tt = Math.PI,
            et = 2 * tt,
            it = et + tt,
            st = Number.POSITIVE_INFINITY,
            nt = tt / 180,
            ot = tt / 2,
            rt = tt / 4,
            at = (2 * tt) / 3,
            ht = Math.log10,
            lt = Math.sign;
        function ct(t, e, i) {
            return Math.abs(t - e) < i;
        }
        function dt(t) {
            const e = Math.round(t);
            t = ct(t, e, t / 1e3) ? e : t;
            const i = Math.pow(10, Math.floor(ht(t))),
                s = t / i;
            return (s <= 1 ? 1 : s <= 2 ? 2 : s <= 5 ? 5 : 10) * i;
        }
        function ut(t) {
            return !isNaN(parseFloat(t)) && isFinite(t);
        }
        function ft(t) {
            return t * (tt / 180);
        }
        function gt(t) {
            if (!$(t)) return;
            let e = 1,
                i = 0;
            for (; Math.round(t * e) / e !== t; ) (e *= 10), i++;
            return i;
        }
        function pt(t, e) {
            return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
        }
        function mt(t, e) {
            return ((t - e + it) % et) - tt;
        }
        function xt(t) {
            return ((t % et) + et) % et;
        }
        function bt(t, e, i, s) {
            const n = xt(t),
                o = xt(e),
                r = xt(i),
                a = xt(o - n),
                h = xt(r - n),
                l = xt(n - o),
                c = xt(n - r);
            return n === o || n === r || (s && o === r) || (a > h && l < c);
        }
        function yt(t, e, i) {
            return Math.max(e, Math.min(i, t));
        }
        function _t(t, e, i, s = 1e-6) {
            return t >= Math.min(e, i) - s && t <= Math.max(e, i) + s;
        }
        function vt(t, e, i) {
            i = i || ((i) => t[i] < e);
            let s,
                n = t.length - 1,
                o = 0;
            for (; n - o > 1; ) (s = (o + n) >> 1), i(s) ? (o = s) : (n = s);
            return { lo: o, hi: n };
        }
        const wt = (t, e, i, s) =>
                vt(
                    t,
                    i,
                    s
                        ? (s) => {
                              const n = t[s][e];
                              return n < i || (n === i && t[s + 1][e] === i);
                          }
                        : (s) => t[s][e] < i
                ),
            Mt = (t, e, i) => vt(t, i, (s) => t[s][e] >= i),
            kt = ["push", "pop", "shift", "splice", "unshift"];
        function St(t, e) {
            const i = t._chartjs;
            if (!i) return;
            const s = i.listeners,
                n = s.indexOf(e);
            -1 !== n && s.splice(n, 1),
                s.length > 0 ||
                    (kt.forEach((e) => {
                        delete t[e];
                    }),
                    delete t._chartjs);
        }
        const Dt =
            "undefined" == typeof window
                ? function (t) {
                      return t();
                  }
                : window.requestAnimationFrame;
        function Ot(t, e) {
            let i = [],
                s = !1;
            return function (...n) {
                (i = n),
                    s ||
                        ((s = !0),
                        Dt.call(window, () => {
                            (s = !1), t.apply(e, i);
                        }));
            };
        }
        const Tt = (t) => ("start" === t ? "left" : "end" === t ? "right" : "center"),
            Ct = (t, e, i) => ("start" === t ? e : "end" === t ? i : (e + i) / 2);
        const Pt = (t) => 0 === t || 1 === t,
            It = (t, e, i) => -Math.pow(2, 10 * (t -= 1)) * Math.sin(((t - e) * et) / i),
            Lt = (t, e, i) => Math.pow(2, -10 * t) * Math.sin(((t - e) * et) / i) + 1,
            At = {
                linear: (t) => t,
                easeInQuad: (t) => t * t,
                easeOutQuad: (t) => -t * (t - 2),
                easeInOutQuad: (t) => ((t /= 0.5) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1)),
                easeInCubic: (t) => t * t * t,
                easeOutCubic: (t) => (t -= 1) * t * t + 1,
                easeInOutCubic: (t) => ((t /= 0.5) < 1 ? 0.5 * t * t * t : 0.5 * ((t -= 2) * t * t + 2)),
                easeInQuart: (t) => t * t * t * t,
                easeOutQuart: (t) => -((t -= 1) * t * t * t - 1),
                easeInOutQuart: (t) => ((t /= 0.5) < 1 ? 0.5 * t * t * t * t : -0.5 * ((t -= 2) * t * t * t - 2)),
                easeInQuint: (t) => t * t * t * t * t,
                easeOutQuint: (t) => (t -= 1) * t * t * t * t + 1,
                easeInOutQuint: (t) => ((t /= 0.5) < 1 ? 0.5 * t * t * t * t * t : 0.5 * ((t -= 2) * t * t * t * t + 2)),
                easeInSine: (t) => 1 - Math.cos(t * ot),
                easeOutSine: (t) => Math.sin(t * ot),
                easeInOutSine: (t) => -0.5 * (Math.cos(tt * t) - 1),
                easeInExpo: (t) => (0 === t ? 0 : Math.pow(2, 10 * (t - 1))),
                easeOutExpo: (t) => (1 === t ? 1 : 1 - Math.pow(2, -10 * t)),
                easeInOutExpo: (t) => (Pt(t) ? t : t < 0.5 ? 0.5 * Math.pow(2, 10 * (2 * t - 1)) : 0.5 * (2 - Math.pow(2, -10 * (2 * t - 1)))),
                easeInCirc: (t) => (t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1)),
                easeOutCirc: (t) => Math.sqrt(1 - (t -= 1) * t),
                easeInOutCirc: (t) => ((t /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - t * t) - 1) : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1)),
                easeInElastic: (t) => (Pt(t) ? t : It(t, 0.075, 0.3)),
                easeOutElastic: (t) => (Pt(t) ? t : Lt(t, 0.075, 0.3)),
                easeInOutElastic(t) {
                    const e = 0.1125;
                    return Pt(t) ? t : t < 0.5 ? 0.5 * It(2 * t, e, 0.45) : 0.5 + 0.5 * Lt(2 * t - 1, e, 0.45);
                },
                easeInBack(t) {
                    const e = 1.70158;
                    return t * t * ((e + 1) * t - e);
                },
                easeOutBack(t) {
                    const e = 1.70158;
                    return (t -= 1) * t * ((e + 1) * t + e) + 1;
                },
                easeInOutBack(t) {
                    let e = 1.70158;
                    return (t /= 0.5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * 0.5 : 0.5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2);
                },
                easeInBounce: (t) => 1 - At.easeOutBounce(1 - t),
                easeOutBounce(t) {
                    const e = 7.5625,
                        i = 2.75;
                    return t < 1 / i ? e * t * t : t < 2 / i ? e * (t -= 1.5 / i) * t + 0.75 : t < 2.5 / i ? e * (t -= 2.25 / i) * t + 0.9375 : e * (t -= 2.625 / i) * t + 0.984375;
                },
                easeInOutBounce: (t) => (t < 0.5 ? 0.5 * At.easeInBounce(2 * t) : 0.5 * At.easeOutBounce(2 * t - 1) + 0.5),
            };
        function Et(t) {
            if (t && "object" == typeof t) {
                const e = t.toString();
                return "[object CanvasPattern]" === e || "[object CanvasGradient]" === e;
            }
            return !1;
        }
        function zt(t) {
            return Et(t) ? t : new P(t);
        }
        function $t(t) {
            return Et(t) ? t : new P(t).saturate(0.5).darken(0.1).hexString();
        }
        const Rt = ["x", "y", "borderWidth", "radius", "tension"],
            Bt = ["color", "borderColor", "backgroundColor"],
            Ft = new Map();
        function Ht(t, e, i) {
            return (function (t, e) {
                e = e || {};
                const i = t + JSON.stringify(e);
                let s = Ft.get(i);
                return s || ((s = new Intl.NumberFormat(t, e)), Ft.set(i, s)), s;
            })(e, i).format(t);
        }
        const Wt = {
            values: (t) => (E(t) ? t : "" + t),
            numeric(t, e, i) {
                if (0 === t) return "0";
                const s = this.chart.options.locale;
                let n,
                    o = t;
                if (i.length > 1) {
                    const e = Math.max(Math.abs(i[0].value), Math.abs(i[i.length - 1].value));
                    (e < 1e-4 || e > 1e15) && (n = "scientific"),
                        (o = (function (t, e) {
                            let i = e.length > 3 ? e[2].value - e[1].value : e[1].value - e[0].value;
                            return Math.abs(i) >= 1 && t !== Math.floor(t) && (i = t - Math.floor(t)), i;
                        })(t, i));
                }
                const r = ht(Math.abs(o)),
                    a = isNaN(r) ? 1 : Math.max(Math.min(-1 * Math.floor(r), 20), 0),
                    h = { notation: n, minimumFractionDigits: a, maximumFractionDigits: a };
                return Object.assign(h, this.options.ticks.format), Ht(t, s, h);
            },
            logarithmic(t, e, i) {
                if (0 === t) return "0";
                const s = i[e].significand || t / Math.pow(10, Math.floor(ht(t)));
                return [1, 2, 3, 5, 10, 15].includes(s) || e > 0.8 * i.length ? Wt.numeric.call(this, t, e, i) : "";
            },
        };
        var Yt = { formatters: Wt };
        const jt = Object.create(null),
            Nt = Object.create(null);
        function Vt(t, e) {
            if (!e) return t;
            const i = e.split(".");
            for (let e = 0, s = i.length; e < s; ++e) {
                const s = i[e];
                t = t[s] || (t[s] = Object.create(null));
            }
            return t;
        }
        function Ut(t, e, i) {
            return "string" == typeof e ? V(Vt(t, e), i) : V(Vt(t, ""), e);
        }
        class Xt {
            constructor(t, e) {
                (this.animation = void 0),
                    (this.backgroundColor = "rgba(0,0,0,0.1)"),
                    (this.borderColor = "rgba(0,0,0,0.1)"),
                    (this.color = "#666"),
                    (this.datasets = {}),
                    (this.devicePixelRatio = (t) => t.chart.platform.getDevicePixelRatio()),
                    (this.elements = {}),
                    (this.events = ["mousemove", "mouseout", "click", "touchstart", "touchmove"]),
                    (this.font = { family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif", size: 12, style: "normal", lineHeight: 1.2, weight: null }),
                    (this.hover = {}),
                    (this.hoverBackgroundColor = (t, e) => $t(e.backgroundColor)),
                    (this.hoverBorderColor = (t, e) => $t(e.borderColor)),
                    (this.hoverColor = (t, e) => $t(e.color)),
                    (this.indexAxis = "x"),
                    (this.interaction = { mode: "nearest", intersect: !0, includeInvisible: !1 }),
                    (this.maintainAspectRatio = !0),
                    (this.onHover = null),
                    (this.onClick = null),
                    (this.parsing = !0),
                    (this.plugins = {}),
                    (this.responsive = !0),
                    (this.scale = void 0),
                    (this.scales = {}),
                    (this.showLine = !0),
                    (this.drawActiveElementsOnTop = !0),
                    this.describe(t),
                    this.apply(e);
            }
            set(t, e) {
                return Ut(this, t, e);
            }
            get(t) {
                return Vt(this, t);
            }
            describe(t, e) {
                return Ut(Nt, t, e);
            }
            override(t, e) {
                return Ut(jt, t, e);
            }
            route(t, e, i, s) {
                const n = Vt(this, t),
                    o = Vt(this, i),
                    r = "_" + e;
                Object.defineProperties(n, {
                    [r]: { value: n[e], writable: !0 },
                    [e]: {
                        enumerable: !0,
                        get() {
                            const t = this[r],
                                e = o[s];
                            return z(t) ? Object.assign({}, e, t) : B(t, e);
                        },
                        set(t) {
                            this[r] = t;
                        },
                    },
                });
            }
            apply(t) {
                t.forEach((t) => t(this));
            }
        }
        var qt = new Xt({ _scriptable: (t) => !t.startsWith("on"), _indexable: (t) => "events" !== t, hover: { _fallback: "interaction" }, interaction: { _scriptable: !1, _indexable: !1 } }, [
            function (t) {
                t.set("animation", { delay: void 0, duration: 1e3, easing: "easeOutQuart", fn: void 0, from: void 0, loop: void 0, to: void 0, type: void 0 }),
                    t.describe("animation", { _fallback: !1, _indexable: !1, _scriptable: (t) => "onProgress" !== t && "onComplete" !== t && "fn" !== t }),
                    t.set("animations", { colors: { type: "color", properties: Bt }, numbers: { type: "number", properties: Rt } }),
                    t.describe("animations", { _fallback: "animation" }),
                    t.set("transitions", {
                        active: { animation: { duration: 400 } },
                        resize: { animation: { duration: 0 } },
                        show: { animations: { colors: { from: "transparent" }, visible: { type: "boolean", duration: 0 } } },
                        hide: { animations: { colors: { to: "transparent" }, visible: { type: "boolean", easing: "linear", fn: (t) => 0 | t } } },
                    });
            },
            function (t) {
                t.set("layout", { autoPadding: !0, padding: { top: 0, right: 0, bottom: 0, left: 0 } });
            },
            function (t) {
                t.set("scale", {
                    display: !0,
                    offset: !1,
                    reverse: !1,
                    beginAtZero: !1,
                    bounds: "ticks",
                    clip: !0,
                    grace: 0,
                    grid: { display: !0, lineWidth: 1, drawOnChartArea: !0, drawTicks: !0, tickLength: 8, tickWidth: (t, e) => e.lineWidth, tickColor: (t, e) => e.color, offset: !1 },
                    border: { display: !0, dash: [], dashOffset: 0, width: 1 },
                    title: { display: !1, text: "", padding: { top: 4, bottom: 4 } },
                    ticks: {
                        minRotation: 0,
                        maxRotation: 50,
                        mirror: !1,
                        textStrokeWidth: 0,
                        textStrokeColor: "",
                        padding: 3,
                        display: !0,
                        autoSkip: !0,
                        autoSkipPadding: 3,
                        labelOffset: 0,
                        callback: Yt.formatters.values,
                        minor: {},
                        major: {},
                        align: "center",
                        crossAlign: "near",
                        showLabelBackdrop: !1,
                        backdropColor: "rgba(255, 255, 255, 1)",
                        backdropPadding: 2,
                    },
                }),
                    t.route("scale.ticks", "color", "", "color"),
                    t.route("scale.grid", "color", "", "borderColor"),
                    t.route("scale.border", "color", "", "borderColor"),
                    t.route("scale.title", "color", "", "color"),
                    t.describe("scale", {
                        _fallback: !1,
                        _scriptable: (t) => !t.startsWith("before") && !t.startsWith("after") && "callback" !== t && "parser" !== t,
                        _indexable: (t) => "borderDash" !== t && "tickBorderDash" !== t && "dash" !== t,
                    }),
                    t.describe("scales", { _fallback: "scale" }),
                    t.describe("scale.ticks", { _scriptable: (t) => "backdropPadding" !== t && "callback" !== t, _indexable: (t) => "backdropPadding" !== t });
            },
        ]);
        function Zt(t, e, i, s, n) {
            let o = e[n];
            return o || ((o = e[n] = t.measureText(n).width), i.push(n)), o > s && (s = o), s;
        }
        function Kt(t, e, i) {
            const s = t.currentDevicePixelRatio,
                n = 0 !== i ? Math.max(i / 2, 0.5) : 0;
            return Math.round((e - n) * s) / s + n;
        }
        function Gt(t, e) {
            (e || t) && ((e = e || t.getContext("2d")).save(), e.resetTransform(), e.clearRect(0, 0, t.width, t.height), e.restore());
        }
        function Qt(t, e, i, s) {
            Jt(t, e, i, s, null);
        }
        function Jt(t, e, i, s, n) {
            let o, r, a, h, l, c, d, u;
            const f = e.pointStyle,
                g = e.rotation,
                p = e.radius;
            let m = (g || 0) * nt;
            if (f && "object" == typeof f && ((o = f.toString()), "[object HTMLImageElement]" === o || "[object HTMLCanvasElement]" === o))
                return t.save(), t.translate(i, s), t.rotate(m), t.drawImage(f, -f.width / 2, -f.height / 2, f.width, f.height), void t.restore();
            if (!(isNaN(p) || p <= 0)) {
                switch ((t.beginPath(), f)) {
                    default:
                        n ? t.ellipse(i, s, n / 2, p, 0, 0, et) : t.arc(i, s, p, 0, et), t.closePath();
                        break;
                    case "triangle":
                        (c = n ? n / 2 : p), t.moveTo(i + Math.sin(m) * c, s - Math.cos(m) * p), (m += at), t.lineTo(i + Math.sin(m) * c, s - Math.cos(m) * p), (m += at), t.lineTo(i + Math.sin(m) * c, s - Math.cos(m) * p), t.closePath();
                        break;
                    case "rectRounded":
                        (l = 0.516 * p),
                            (h = p - l),
                            (r = Math.cos(m + rt) * h),
                            (d = Math.cos(m + rt) * (n ? n / 2 - l : h)),
                            (a = Math.sin(m + rt) * h),
                            (u = Math.sin(m + rt) * (n ? n / 2 - l : h)),
                            t.arc(i - d, s - a, l, m - tt, m - ot),
                            t.arc(i + u, s - r, l, m - ot, m),
                            t.arc(i + d, s + a, l, m, m + ot),
                            t.arc(i - u, s + r, l, m + ot, m + tt),
                            t.closePath();
                        break;
                    case "rect":
                        if (!g) {
                            (h = Math.SQRT1_2 * p), (c = n ? n / 2 : h), t.rect(i - c, s - h, 2 * c, 2 * h);
                            break;
                        }
                        m += rt;
                    case "rectRot":
                        (d = Math.cos(m) * (n ? n / 2 : p)),
                            (r = Math.cos(m) * p),
                            (a = Math.sin(m) * p),
                            (u = Math.sin(m) * (n ? n / 2 : p)),
                            t.moveTo(i - d, s - a),
                            t.lineTo(i + u, s - r),
                            t.lineTo(i + d, s + a),
                            t.lineTo(i - u, s + r),
                            t.closePath();
                        break;
                    case "crossRot":
                        m += rt;
                    case "cross":
                        (d = Math.cos(m) * (n ? n / 2 : p)), (r = Math.cos(m) * p), (a = Math.sin(m) * p), (u = Math.sin(m) * (n ? n / 2 : p)), t.moveTo(i - d, s - a), t.lineTo(i + d, s + a), t.moveTo(i + u, s - r), t.lineTo(i - u, s + r);
                        break;
                    case "star":
                        (d = Math.cos(m) * (n ? n / 2 : p)),
                            (r = Math.cos(m) * p),
                            (a = Math.sin(m) * p),
                            (u = Math.sin(m) * (n ? n / 2 : p)),
                            t.moveTo(i - d, s - a),
                            t.lineTo(i + d, s + a),
                            t.moveTo(i + u, s - r),
                            t.lineTo(i - u, s + r),
                            (m += rt),
                            (d = Math.cos(m) * (n ? n / 2 : p)),
                            (r = Math.cos(m) * p),
                            (a = Math.sin(m) * p),
                            (u = Math.sin(m) * (n ? n / 2 : p)),
                            t.moveTo(i - d, s - a),
                            t.lineTo(i + d, s + a),
                            t.moveTo(i + u, s - r),
                            t.lineTo(i - u, s + r);
                        break;
                    case "line":
                        (r = n ? n / 2 : Math.cos(m) * p), (a = Math.sin(m) * p), t.moveTo(i - r, s - a), t.lineTo(i + r, s + a);
                        break;
                    case "dash":
                        t.moveTo(i, s), t.lineTo(i + Math.cos(m) * (n ? n / 2 : p), s + Math.sin(m) * p);
                        break;
                    case !1:
                        t.closePath();
                }
                t.fill(), e.borderWidth > 0 && t.stroke();
            }
        }
        function te(t, e, i) {
            return (i = i || 0.5), !e || (t && t.x > e.left - i && t.x < e.right + i && t.y > e.top - i && t.y < e.bottom + i);
        }
        function ee(t, e) {
            t.save(), t.beginPath(), t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), t.clip();
        }
        function ie(t) {
            t.restore();
        }
        function se(t, e, i, s, n) {
            if (!e) return t.lineTo(i.x, i.y);
            if ("middle" === n) {
                const s = (e.x + i.x) / 2;
                t.lineTo(s, e.y), t.lineTo(s, i.y);
            } else ("after" === n) != !!s ? t.lineTo(e.x, i.y) : t.lineTo(i.x, e.y);
            t.lineTo(i.x, i.y);
        }
        function ne(t, e, i, s) {
            if (!e) return t.lineTo(i.x, i.y);
            t.bezierCurveTo(s ? e.cp1x : e.cp2x, s ? e.cp1y : e.cp2y, s ? i.cp2x : i.cp1x, s ? i.cp2y : i.cp1y, i.x, i.y);
        }
        function oe(t, e, i, s, n) {
            if (n.strikethrough || n.underline) {
                const o = t.measureText(s),
                    r = e - o.actualBoundingBoxLeft,
                    a = e + o.actualBoundingBoxRight,
                    h = i - o.actualBoundingBoxAscent,
                    l = i + o.actualBoundingBoxDescent,
                    c = n.strikethrough ? (h + l) / 2 : l;
                (t.strokeStyle = t.fillStyle), t.beginPath(), (t.lineWidth = n.decorationWidth || 2), t.moveTo(r, c), t.lineTo(a, c), t.stroke();
            }
        }
        function re(t, e) {
            const i = t.fillStyle;
            (t.fillStyle = e.color), t.fillRect(e.left, e.top, e.width, e.height), (t.fillStyle = i);
        }
        function ae(t, e, i, s, n, o = {}) {
            const r = E(e) ? e : [e],
                a = o.strokeWidth > 0 && "" !== o.strokeColor;
            let h, l;
            for (
                t.save(),
                    t.font = n.string,
                    (function (t, e) {
                        e.translation && t.translate(e.translation[0], e.translation[1]),
                            A(e.rotation) || t.rotate(e.rotation),
                            e.color && (t.fillStyle = e.color),
                            e.textAlign && (t.textAlign = e.textAlign),
                            e.textBaseline && (t.textBaseline = e.textBaseline);
                    })(t, o),
                    h = 0;
                h < r.length;
                ++h
            )
                (l = r[h]),
                    o.backdrop && re(t, o.backdrop),
                    a && (o.strokeColor && (t.strokeStyle = o.strokeColor), A(o.strokeWidth) || (t.lineWidth = o.strokeWidth), t.strokeText(l, i, s, o.maxWidth)),
                    t.fillText(l, i, s, o.maxWidth),
                    oe(t, i, s, l, o),
                    (s += Number(n.lineHeight));
            t.restore();
        }
        function he(t, e) {
            const { x: i, y: s, w: n, h: o, radius: r } = e;
            t.arc(i + r.topLeft, s + r.topLeft, r.topLeft, 1.5 * tt, tt, !0),
                t.lineTo(i, s + o - r.bottomLeft),
                t.arc(i + r.bottomLeft, s + o - r.bottomLeft, r.bottomLeft, tt, ot, !0),
                t.lineTo(i + n - r.bottomRight, s + o),
                t.arc(i + n - r.bottomRight, s + o - r.bottomRight, r.bottomRight, ot, 0, !0),
                t.lineTo(i + n, s + r.topRight),
                t.arc(i + n - r.topRight, s + r.topRight, r.topRight, 0, -ot, !0),
                t.lineTo(i + r.topLeft, s);
        }
        const le = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,
            ce = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
        function de(t, e) {
            const i = ("" + t).match(le);
            if (!i || "normal" === i[1]) return 1.2 * e;
            switch (((t = +i[2]), i[3])) {
                case "px":
                    return t;
                case "%":
                    t /= 100;
            }
            return e * t;
        }
        function ue(t, e) {
            const i = {},
                s = z(e),
                n = s ? Object.keys(e) : e,
                o = z(t) ? (s ? (i) => B(t[i], t[e[i]]) : (e) => t[e]) : () => t;
            for (const t of n) i[t] = +o(t) || 0;
            return i;
        }
        function fe(t) {
            return ue(t, ["topLeft", "topRight", "bottomLeft", "bottomRight"]);
        }
        function ge(t) {
            const e = (function (t) {
                return ue(t, { top: "y", right: "x", bottom: "y", left: "x" });
            })(t);
            return (e.width = e.left + e.right), (e.height = e.top + e.bottom), e;
        }
        function pe(t, e) {
            (t = t || {}), (e = e || qt.font);
            let i = B(t.size, e.size);
            "string" == typeof i && (i = parseInt(i, 10));
            let s = B(t.style, e.style);
            s && !("" + s).match(ce) && (console.warn('Invalid font style specified: "' + s + '"'), (s = void 0));
            const n = { family: B(t.family, e.family), lineHeight: de(B(t.lineHeight, e.lineHeight), i), size: i, style: s, weight: B(t.weight, e.weight), string: "" };
            return (
                (n.string = (function (t) {
                    return !t || A(t.size) || A(t.family) ? null : (t.style ? t.style + " " : "") + (t.weight ? t.weight + " " : "") + t.size + "px " + t.family;
                })(n)),
                n
            );
        }
        function me(t, e, i, s) {
            let n,
                o,
                r,
                a = !0;
            for (n = 0, o = t.length; n < o; ++n)
                if (((r = t[n]), void 0 !== r && (void 0 !== e && "function" == typeof r && ((r = r(e)), (a = !1)), void 0 !== i && E(r) && ((r = r[i % r.length]), (a = !1)), void 0 !== r))) return s && !a && (s.cacheable = !1), r;
        }
        function xe(t, e) {
            return Object.assign(Object.create(t), e);
        }
        function be(t, e = [""], i, s, n = () => t[0]) {
            const o = i || t;
            void 0 === s && (s = Ce("_fallback", t));
            const r = { [Symbol.toStringTag]: "Object", _cacheable: !0, _scopes: t, _rootScopes: o, _fallback: s, _getTarget: n, override: (i) => be([i, ...t], e, o, s) };
            return new Proxy(r, {
                deleteProperty: (e, i) => (delete e[i], delete e._keys, delete t[0][i], !0),
                get: (i, s) =>
                    Me(i, s, () =>
                        (function (t, e, i, s) {
                            let n;
                            for (const o of e) if (((n = Ce(ve(o, t), i)), void 0 !== n)) return we(t, n) ? Oe(i, s, t, n) : n;
                        })(s, e, t, i)
                    ),
                getOwnPropertyDescriptor: (t, e) => Reflect.getOwnPropertyDescriptor(t._scopes[0], e),
                getPrototypeOf: () => Reflect.getPrototypeOf(t[0]),
                has: (t, e) => Pe(t).includes(e),
                ownKeys: (t) => Pe(t),
                set(t, e, i) {
                    const s = t._storage || (t._storage = n());
                    return (t[e] = s[e] = i), delete t._keys, !0;
                },
            });
        }
        function ye(t, e, i, s) {
            const n = { _cacheable: !1, _proxy: t, _context: e, _subProxy: i, _stack: new Set(), _descriptors: _e(t, s), setContext: (e) => ye(t, e, i, s), override: (n) => ye(t.override(n), e, i, s) };
            return new Proxy(n, {
                deleteProperty: (e, i) => (delete e[i], delete t[i], !0),
                get: (t, e, i) =>
                    Me(t, e, () =>
                        (function (t, e, i) {
                            const { _proxy: s, _context: n, _subProxy: o, _descriptors: r } = t;
                            let a = s[e];
                            return (
                                Q(a) &&
                                    r.isScriptable(e) &&
                                    (a = (function (t, e, i, s) {
                                        const { _proxy: n, _context: o, _subProxy: r, _stack: a } = i;
                                        if (a.has(t)) throw new Error("Recursion detected: " + Array.from(a).join("->") + "->" + t);
                                        a.add(t);
                                        let h = e(o, r || s);
                                        return a.delete(t), we(t, h) && (h = Oe(n._scopes, n, t, h)), h;
                                    })(e, a, t, i)),
                                E(a) &&
                                    a.length &&
                                    (a = (function (t, e, i, s) {
                                        const { _proxy: n, _context: o, _subProxy: r, _descriptors: a } = i;
                                        if (void 0 !== o.index && s(t)) return e[o.index % e.length];
                                        if (z(e[0])) {
                                            const i = e,
                                                s = n._scopes.filter((t) => t !== i);
                                            e = [];
                                            for (const h of i) {
                                                const i = Oe(s, n, t, h);
                                                e.push(ye(i, o, r && r[t], a));
                                            }
                                        }
                                        return e;
                                    })(e, a, t, r.isIndexable)),
                                we(e, a) && (a = ye(a, n, o && o[e], r)),
                                a
                            );
                        })(t, e, i)
                    ),
                getOwnPropertyDescriptor: (e, i) => (e._descriptors.allKeys ? (Reflect.has(t, i) ? { enumerable: !0, configurable: !0 } : void 0) : Reflect.getOwnPropertyDescriptor(t, i)),
                getPrototypeOf: () => Reflect.getPrototypeOf(t),
                has: (e, i) => Reflect.has(t, i),
                ownKeys: () => Reflect.ownKeys(t),
                set: (e, i, s) => ((t[i] = s), delete e[i], !0),
            });
        }
        function _e(t, e = { scriptable: !0, indexable: !0 }) {
            const { _scriptable: i = e.scriptable, _indexable: s = e.indexable, _allKeys: n = e.allKeys } = t;
            return { allKeys: n, scriptable: i, indexable: s, isScriptable: Q(i) ? i : () => i, isIndexable: Q(s) ? s : () => s };
        }
        const ve = (t, e) => (t ? t + K(e) : e),
            we = (t, e) => z(e) && "adapters" !== t && (null === Object.getPrototypeOf(e) || e.constructor === Object);
        function Me(t, e, i) {
            if (Object.prototype.hasOwnProperty.call(t, e) || "constructor" === e) return t[e];
            const s = i();
            return (t[e] = s), s;
        }
        function ke(t, e, i) {
            return Q(t) ? t(e, i) : t;
        }
        const Se = (t, e) => (!0 === t ? e : "string" == typeof t ? Z(e, t) : void 0);
        function De(t, e, i, s, n) {
            for (const o of e) {
                const e = Se(i, o);
                if (e) {
                    t.add(e);
                    const o = ke(e._fallback, i, n);
                    if (void 0 !== o && o !== i && o !== s) return o;
                } else if (!1 === e && void 0 !== s && i !== s) return null;
            }
            return !1;
        }
        function Oe(t, e, i, s) {
            const n = e._rootScopes,
                o = ke(e._fallback, i, s),
                r = [...t, ...n],
                a = new Set();
            a.add(s);
            let h = Te(a, r, i, o || i, s);
            return (
                null !== h &&
                (void 0 === o || o === i || ((h = Te(a, r, o, h, s)), null !== h)) &&
                be(Array.from(a), [""], n, o, () =>
                    (function (t, e, i) {
                        const s = t._getTarget();
                        e in s || (s[e] = {});
                        const n = s[e];
                        return E(n) && z(i) ? i : n || {};
                    })(e, i, s)
                )
            );
        }
        function Te(t, e, i, s, n) {
            for (; i; ) i = De(t, e, i, s, n);
            return i;
        }
        function Ce(t, e) {
            for (const i of e) {
                if (!i) continue;
                const e = i[t];
                if (void 0 !== e) return e;
            }
        }
        function Pe(t) {
            let e = t._keys;
            return (
                e ||
                    (e = t._keys = (function (t) {
                        const e = new Set();
                        for (const i of t) for (const t of Object.keys(i).filter((t) => !t.startsWith("_"))) e.add(t);
                        return Array.from(e);
                    })(t._scopes)),
                e
            );
        }
        const Ie = Number.EPSILON || 1e-14,
            Le = (t, e) => e < t.length && !t[e].skip && t[e],
            Ae = (t) => ("x" === t ? "y" : "x");
        function Ee(t, e, i, s) {
            const n = t.skip ? e : t,
                o = e,
                r = i.skip ? e : i,
                a = pt(o, n),
                h = pt(r, o);
            let l = a / (a + h),
                c = h / (a + h);
            (l = isNaN(l) ? 0 : l), (c = isNaN(c) ? 0 : c);
            const d = s * l,
                u = s * c;
            return { previous: { x: o.x - d * (r.x - n.x), y: o.y - d * (r.y - n.y) }, next: { x: o.x + u * (r.x - n.x), y: o.y + u * (r.y - n.y) } };
        }
        function ze(t, e, i) {
            return Math.max(Math.min(t, i), e);
        }
        function $e(t, e, i, s, n) {
            let o, r, a, h;
            if ((e.spanGaps && (t = t.filter((t) => !t.skip)), "monotone" === e.cubicInterpolationMode))
                !(function (t, e = "x") {
                    const i = Ae(e),
                        s = t.length,
                        n = Array(s).fill(0),
                        o = Array(s);
                    let r,
                        a,
                        h,
                        l = Le(t, 0);
                    for (r = 0; r < s; ++r)
                        if (((a = h), (h = l), (l = Le(t, r + 1)), h)) {
                            if (l) {
                                const t = l[e] - h[e];
                                n[r] = 0 !== t ? (l[i] - h[i]) / t : 0;
                            }
                            o[r] = a ? (l ? (lt(n[r - 1]) !== lt(n[r]) ? 0 : (n[r - 1] + n[r]) / 2) : n[r - 1]) : n[r];
                        }
                    !(function (t, e, i) {
                        const s = t.length;
                        let n,
                            o,
                            r,
                            a,
                            h,
                            l = Le(t, 0);
                        for (let c = 0; c < s - 1; ++c)
                            (h = l),
                                (l = Le(t, c + 1)),
                                h &&
                                    l &&
                                    (ct(e[c], 0, Ie)
                                        ? (i[c] = i[c + 1] = 0)
                                        : ((n = i[c] / e[c]), (o = i[c + 1] / e[c]), (a = Math.pow(n, 2) + Math.pow(o, 2)), a <= 9 || ((r = 3 / Math.sqrt(a)), (i[c] = n * r * e[c]), (i[c + 1] = o * r * e[c]))));
                    })(t, n, o),
                        (function (t, e, i = "x") {
                            const s = Ae(i),
                                n = t.length;
                            let o,
                                r,
                                a,
                                h = Le(t, 0);
                            for (let l = 0; l < n; ++l) {
                                if (((r = a), (a = h), (h = Le(t, l + 1)), !a)) continue;
                                const n = a[i],
                                    c = a[s];
                                r && ((o = (n - r[i]) / 3), (a[`cp1${i}`] = n - o), (a[`cp1${s}`] = c - o * e[l])), h && ((o = (h[i] - n) / 3), (a[`cp2${i}`] = n + o), (a[`cp2${s}`] = c + o * e[l]));
                            }
                        })(t, o, e);
                })(t, n);
            else {
                let i = s ? t[t.length - 1] : t[0];
                for (o = 0, r = t.length; o < r; ++o) (a = t[o]), (h = Ee(i, a, t[Math.min(o + 1, r - (s ? 0 : 1)) % r], e.tension)), (a.cp1x = h.previous.x), (a.cp1y = h.previous.y), (a.cp2x = h.next.x), (a.cp2y = h.next.y), (i = a);
            }
            e.capBezierPoints &&
                (function (t, e) {
                    let i,
                        s,
                        n,
                        o,
                        r,
                        a = te(t[0], e);
                    for (i = 0, s = t.length; i < s; ++i)
                        (r = o),
                            (o = a),
                            (a = i < s - 1 && te(t[i + 1], e)),
                            o && ((n = t[i]), r && ((n.cp1x = ze(n.cp1x, e.left, e.right)), (n.cp1y = ze(n.cp1y, e.top, e.bottom))), a && ((n.cp2x = ze(n.cp2x, e.left, e.right)), (n.cp2y = ze(n.cp2y, e.top, e.bottom))));
                })(t, i);
        }
        function Re() {
            return "undefined" != typeof window && "undefined" != typeof document;
        }
        function Be(t) {
            let e = t.parentNode;
            return e && "[object ShadowRoot]" === e.toString() && (e = e.host), e;
        }
        function Fe(t, e, i) {
            let s;
            return "string" == typeof t ? ((s = parseInt(t, 10)), -1 !== t.indexOf("%") && (s = (s / 100) * e.parentNode[i])) : (s = t), s;
        }
        const He = (t) => t.ownerDocument.defaultView.getComputedStyle(t, null),
            We = ["top", "right", "bottom", "left"];
        function Ye(t, e, i) {
            const s = {};
            i = i ? "-" + i : "";
            for (let n = 0; n < 4; n++) {
                const o = We[n];
                s[o] = parseFloat(t[e + "-" + o + i]) || 0;
            }
            return (s.width = s.left + s.right), (s.height = s.top + s.bottom), s;
        }
        function je(t, e) {
            if ("native" in t) return t;
            const { canvas: i, currentDevicePixelRatio: s } = e,
                n = He(i),
                o = "border-box" === n.boxSizing,
                r = Ye(n, "padding"),
                a = Ye(n, "border", "width"),
                { x: h, y: l, box: c } = (function (t, e) {
                    const i = t.touches,
                        s = i && i.length ? i[0] : t,
                        { offsetX: n, offsetY: o } = s;
                    let r,
                        a,
                        h = !1;
                    if (((t, e, i) => (t > 0 || e > 0) && (!i || !i.shadowRoot))(n, o, t.target)) (r = n), (a = o);
                    else {
                        const t = e.getBoundingClientRect();
                        (r = s.clientX - t.left), (a = s.clientY - t.top), (h = !0);
                    }
                    return { x: r, y: a, box: h };
                })(t, i),
                d = r.left + (c && a.left),
                u = r.top + (c && a.top);
            let { width: f, height: g } = e;
            return o && ((f -= r.width + a.width), (g -= r.height + a.height)), { x: Math.round((((h - d) / f) * i.width) / s), y: Math.round((((l - u) / g) * i.height) / s) };
        }
        const Ne = (t) => Math.round(10 * t) / 10;
        function Ve(t, e, i) {
            const s = e || 1,
                n = Math.floor(t.height * s),
                o = Math.floor(t.width * s);
            (t.height = Math.floor(t.height)), (t.width = Math.floor(t.width));
            const r = t.canvas;
            return (
                r.style && (i || (!r.style.height && !r.style.width)) && ((r.style.height = `${t.height}px`), (r.style.width = `${t.width}px`)),
                (t.currentDevicePixelRatio !== s || r.height !== n || r.width !== o) && ((t.currentDevicePixelRatio = s), (r.height = n), (r.width = o), t.ctx.setTransform(s, 0, 0, s, 0, 0), !0)
            );
        }
        const Ue = (function () {
            let t = !1;
            try {
                const e = {
                    get passive() {
                        return (t = !0), !1;
                    },
                };
                Re() && (window.addEventListener("test", null, e), window.removeEventListener("test", null, e));
            } catch (t) {}
            return t;
        })();
        function Xe(t, e) {
            const i = (function (t, e) {
                    return He(t).getPropertyValue(e);
                })(t, e),
                s = i && i.match(/^(\d+)(\.\d+)?px$/);
            return s ? +s[1] : void 0;
        }
        function qe(t, e, i, s) {
            return { x: t.x + i * (e.x - t.x), y: t.y + i * (e.y - t.y) };
        }
        function Ze(t, e, i, s) {
            return { x: t.x + i * (e.x - t.x), y: "middle" === s ? (i < 0.5 ? t.y : e.y) : "after" === s ? (i < 1 ? t.y : e.y) : i > 0 ? e.y : t.y };
        }
        function Ke(t, e, i, s) {
            const n = { x: t.cp2x, y: t.cp2y },
                o = { x: e.cp1x, y: e.cp1y },
                r = qe(t, n, i),
                a = qe(n, o, i),
                h = qe(o, e, i),
                l = qe(r, a, i),
                c = qe(a, h, i);
            return qe(l, c, i);
        }
        function Ge(t, e, i) {
            return t
                ? (function (t, e) {
                      return {
                          x: (i) => t + t + e - i,
                          setWidth(t) {
                              e = t;
                          },
                          textAlign: (t) => ("center" === t ? t : "right" === t ? "left" : "right"),
                          xPlus: (t, e) => t - e,
                          leftForLtr: (t, e) => t - e,
                      };
                  })(e, i)
                : { x: (t) => t, setWidth(t) {}, textAlign: (t) => t, xPlus: (t, e) => t + e, leftForLtr: (t, e) => t };
        }
        function Qe(t, e) {
            let i, s;
            ("ltr" !== e && "rtl" !== e) || ((i = t.canvas.style), (s = [i.getPropertyValue("direction"), i.getPropertyPriority("direction")]), i.setProperty("direction", e, "important"), (t.prevTextDirection = s));
        }
        function Je(t, e) {
            void 0 !== e && (delete t.prevTextDirection, t.canvas.style.setProperty("direction", e[0], e[1]));
        }
        function ti(t) {
            return "angle" === t ? { between: bt, compare: mt, normalize: xt } : { between: _t, compare: (t, e) => t - e, normalize: (t) => t };
        }
        function ei({ start: t, end: e, count: i, loop: s, style: n }) {
            return { start: t % i, end: e % i, loop: s && (e - t + 1) % i == 0, style: n };
        }
        function ii(t, e, i) {
            if (!i) return [t];
            const { property: s, start: n, end: o } = i,
                r = e.length,
                { compare: a, between: h, normalize: l } = ti(s),
                { start: c, end: d, loop: u, style: f } = (function (t, e, i) {
                    const { property: s, start: n, end: o } = i,
                        { between: r, normalize: a } = ti(s),
                        h = e.length;
                    let l,
                        c,
                        { start: d, end: u, loop: f } = t;
                    if (f) {
                        for (d += h, u += h, l = 0, c = h; l < c && r(a(e[d % h][s]), n, o); ++l) d--, u--;
                        (d %= h), (u %= h);
                    }
                    return u < d && (u += h), { start: d, end: u, loop: f, style: t.style };
                })(t, e, i),
                g = [];
            let p,
                m,
                x,
                b = !1,
                y = null;
            for (let t = c, i = c; t <= d; ++t)
                (m = e[t % r]),
                    m.skip ||
                        ((p = l(m[s])),
                        p !== x &&
                            ((b = h(p, n, o)),
                            null === y && (b || (h(n, x, p) && 0 !== a(n, x))) && (y = 0 === a(p, n) ? t : i),
                            null !== y && (!b || 0 === a(o, p) || h(o, x, p)) && (g.push(ei({ start: y, end: t, loop: u, count: r, style: f })), (y = null)),
                            (i = t),
                            (x = p)));
            return null !== y && g.push(ei({ start: y, end: d, loop: u, count: r, style: f })), g;
        }
        function si(t) {
            return {
                backgroundColor: t.backgroundColor,
                borderCapStyle: t.borderCapStyle,
                borderDash: t.borderDash,
                borderDashOffset: t.borderDashOffset,
                borderJoinStyle: t.borderJoinStyle,
                borderWidth: t.borderWidth,
                borderColor: t.borderColor,
            };
        }
        function ni(t, e) {
            if (!e) return !1;
            const i = [],
                s = function (t, e) {
                    return Et(e) ? (i.includes(e) || i.push(e), i.indexOf(e)) : e;
                };
            return JSON.stringify(t, s) !== JSON.stringify(e, s);
        }
        class oi {
            constructor() {
                (this._request = null), (this._charts = new Map()), (this._running = !1), (this._lastDate = void 0);
            }
            _notify(t, e, i, s) {
                const n = e.listeners[s],
                    o = e.duration;
                n.forEach((s) => s({ chart: t, initial: e.initial, numSteps: o, currentStep: Math.min(i - e.start, o) }));
            }
            _refresh() {
                this._request ||
                    ((this._running = !0),
                    (this._request = Dt.call(window, () => {
                        this._update(), (this._request = null), this._running && this._refresh();
                    })));
            }
            _update(t = Date.now()) {
                let e = 0;
                this._charts.forEach((i, s) => {
                    if (!i.running || !i.items.length) return;
                    const n = i.items;
                    let o,
                        r = n.length - 1,
                        a = !1;
                    for (; r >= 0; --r) (o = n[r]), o._active ? (o._total > i.duration && (i.duration = o._total), o.tick(t), (a = !0)) : ((n[r] = n[n.length - 1]), n.pop());
                    a && (s.draw(), this._notify(s, i, t, "progress")), n.length || ((i.running = !1), this._notify(s, i, t, "complete"), (i.initial = !1)), (e += n.length);
                }),
                    (this._lastDate = t),
                    0 === e && (this._running = !1);
            }
            _getAnims(t) {
                const e = this._charts;
                let i = e.get(t);
                return i || ((i = { running: !1, initial: !0, items: [], listeners: { complete: [], progress: [] } }), e.set(t, i)), i;
            }
            listen(t, e, i) {
                this._getAnims(t).listeners[e].push(i);
            }
            add(t, e) {
                e && e.length && this._getAnims(t).items.push(...e);
            }
            has(t) {
                return this._getAnims(t).items.length > 0;
            }
            start(t) {
                const e = this._charts.get(t);
                e && ((e.running = !0), (e.start = Date.now()), (e.duration = e.items.reduce((t, e) => Math.max(t, e._duration), 0)), this._refresh());
            }
            running(t) {
                if (!this._running) return !1;
                const e = this._charts.get(t);
                return !!(e && e.running && e.items.length);
            }
            stop(t) {
                const e = this._charts.get(t);
                if (!e || !e.items.length) return;
                const i = e.items;
                let s = i.length - 1;
                for (; s >= 0; --s) i[s].cancel();
                (e.items = []), this._notify(t, e, Date.now(), "complete");
            }
            remove(t) {
                return this._charts.delete(t);
            }
        }
        var ri = new oi();
        const ai = "transparent",
            hi = {
                boolean: (t, e, i) => (i > 0.5 ? e : t),
                color(t, e, i) {
                    const s = zt(t || ai),
                        n = s.valid && zt(e || ai);
                    return n && n.valid ? n.mix(s, i).hexString() : e;
                },
                number: (t, e, i) => t + (e - t) * i,
            };
        class li {
            constructor(t, e, i, s) {
                const n = e[i];
                s = me([t.to, s, n, t.from]);
                const o = me([t.from, n, s]);
                (this._active = !0),
                    (this._fn = t.fn || hi[t.type || typeof o]),
                    (this._easing = At[t.easing] || At.linear),
                    (this._start = Math.floor(Date.now() + (t.delay || 0))),
                    (this._duration = this._total = Math.floor(t.duration)),
                    (this._loop = !!t.loop),
                    (this._target = e),
                    (this._prop = i),
                    (this._from = o),
                    (this._to = s),
                    (this._promises = void 0);
            }
            active() {
                return this._active;
            }
            update(t, e, i) {
                if (this._active) {
                    this._notify(!1);
                    const s = this._target[this._prop],
                        n = i - this._start,
                        o = this._duration - n;
                    (this._start = i), (this._duration = Math.floor(Math.max(o, t.duration))), (this._total += n), (this._loop = !!t.loop), (this._to = me([t.to, e, s, t.from])), (this._from = me([t.from, s, e]));
                }
            }
            cancel() {
                this._active && (this.tick(Date.now()), (this._active = !1), this._notify(!1));
            }
            tick(t) {
                const e = t - this._start,
                    i = this._duration,
                    s = this._prop,
                    n = this._from,
                    o = this._loop,
                    r = this._to;
                let a;
                if (((this._active = n !== r && (o || e < i)), !this._active)) return (this._target[s] = r), void this._notify(!0);
                e < 0 ? (this._target[s] = n) : ((a = (e / i) % 2), (a = o && a > 1 ? 2 - a : a), (a = this._easing(Math.min(1, Math.max(0, a)))), (this._target[s] = this._fn(n, r, a)));
            }
            wait() {
                const t = this._promises || (this._promises = []);
                return new Promise((e, i) => {
                    t.push({ res: e, rej: i });
                });
            }
            _notify(t) {
                const e = t ? "res" : "rej",
                    i = this._promises || [];
                for (let t = 0; t < i.length; t++) i[t][e]();
            }
        }
        class ci {
            constructor(t, e) {
                (this._chart = t), (this._properties = new Map()), this.configure(e);
            }
            configure(t) {
                if (!z(t)) return;
                const e = Object.keys(qt.animation),
                    i = this._properties;
                Object.getOwnPropertyNames(t).forEach((s) => {
                    const n = t[s];
                    if (!z(n)) return;
                    const o = {};
                    for (const t of e) o[t] = n[t];
                    ((E(n.properties) && n.properties) || [s]).forEach((t) => {
                        (t !== s && i.has(t)) || i.set(t, o);
                    });
                });
            }
            _animateOptions(t, e) {
                const i = e.options,
                    s = (function (t, e) {
                        if (!e) return;
                        let i = t.options;
                        if (i) return i.$shared && (t.options = i = Object.assign({}, i, { $shared: !1, $animations: {} })), i;
                        t.options = e;
                    })(t, i);
                if (!s) return [];
                const n = this._createAnimations(s, i);
                return (
                    i.$shared &&
                        (function (t, e) {
                            const i = [],
                                s = Object.keys(e);
                            for (let e = 0; e < s.length; e++) {
                                const n = t[s[e]];
                                n && n.active() && i.push(n.wait());
                            }
                            return Promise.all(i);
                        })(t.options.$animations, i).then(
                            () => {
                                t.options = i;
                            },
                            () => {}
                        ),
                    n
                );
            }
            _createAnimations(t, e) {
                const i = this._properties,
                    s = [],
                    n = t.$animations || (t.$animations = {}),
                    o = Object.keys(e),
                    r = Date.now();
                let a;
                for (a = o.length - 1; a >= 0; --a) {
                    const h = o[a];
                    if ("$" === h.charAt(0)) continue;
                    if ("options" === h) {
                        s.push(...this._animateOptions(t, e));
                        continue;
                    }
                    const l = e[h];
                    let c = n[h];
                    const d = i.get(h);
                    if (c) {
                        if (d && c.active()) {
                            c.update(d, l, r);
                            continue;
                        }
                        c.cancel();
                    }
                    d && d.duration ? ((n[h] = c = new li(d, t, h, l)), s.push(c)) : (t[h] = l);
                }
                return s;
            }
            update(t, e) {
                if (0 === this._properties.size) return void Object.assign(t, e);
                const i = this._createAnimations(t, e);
                return i.length ? (ri.add(this._chart, i), !0) : void 0;
            }
        }
        function di(t, e) {
            const i = (t && t.options) || {},
                s = i.reverse,
                n = void 0 === i.min ? e : 0,
                o = void 0 === i.max ? e : 0;
            return { start: s ? o : n, end: s ? n : o };
        }
        function ui(t, e) {
            const i = [],
                s = t._getSortedDatasetMetas(e);
            let n, o;
            for (n = 0, o = s.length; n < o; ++n) i.push(s[n].index);
            return i;
        }
        function fi(t, e, i, s = {}) {
            const n = t.keys,
                o = "single" === s.mode;
            let r, a, h, l;
            if (null !== e) {
                for (r = 0, a = n.length; r < a; ++r) {
                    if (((h = +n[r]), h === i)) {
                        if (s.all) continue;
                        break;
                    }
                    (l = t.values[h]), $(l) && (o || 0 === e || lt(e) === lt(l)) && (e += l);
                }
                return e;
            }
        }
        function gi(t, e) {
            const i = t && t.options.stacked;
            return i || (void 0 === i && void 0 !== e.stack);
        }
        function pi(t, e, i) {
            const s = t[e] || (t[e] = {});
            return s[i] || (s[i] = {});
        }
        function mi(t, e, i, s) {
            for (const n of e.getMatchingVisibleMetas(s).reverse()) {
                const e = t[n.index];
                if ((i && e > 0) || (!i && e < 0)) return n.index;
            }
            return null;
        }
        function xi(t, e) {
            const { chart: i, _cachedMeta: s } = t,
                n = i._stacks || (i._stacks = {}),
                { iScale: o, vScale: r, index: a } = s,
                h = o.axis,
                l = r.axis,
                c = (function (t, e, i) {
                    return `${t.id}.${e.id}.${i.stack || i.type}`;
                })(o, r, s),
                d = e.length;
            let u;
            for (let t = 0; t < d; ++t) {
                const i = e[t],
                    { [h]: o, [l]: d } = i;
                (u = (i._stacks || (i._stacks = {}))[l] = pi(n, c, o)), (u[a] = d), (u._top = mi(u, r, !0, s.type)), (u._bottom = mi(u, r, !1, s.type)), ((u._visualValues || (u._visualValues = {}))[a] = d);
            }
        }
        function bi(t, e) {
            const i = t.scales;
            return Object.keys(i)
                .filter((t) => i[t].axis === e)
                .shift();
        }
        function yi(t, e) {
            const i = t.controller.index,
                s = t.vScale && t.vScale.axis;
            if (s) {
                e = e || t._parsed;
                for (const t of e) {
                    const e = t._stacks;
                    if (!e || void 0 === e[s] || void 0 === e[s][i]) return;
                    delete e[s][i], void 0 !== e[s]._visualValues && void 0 !== e[s]._visualValues[i] && delete e[s]._visualValues[i];
                }
            }
        }
        const _i = (t) => "reset" === t || "none" === t,
            vi = (t, e) => (e ? t : Object.assign({}, t));
        class wi {
            static defaults = {};
            static datasetElementType = null;
            static dataElementType = null;
            constructor(t, e) {
                (this.chart = t),
                    (this._ctx = t.ctx),
                    (this.index = e),
                    (this._cachedDataOpts = {}),
                    (this._cachedMeta = this.getMeta()),
                    (this._type = this._cachedMeta.type),
                    (this.options = void 0),
                    (this._parsing = !1),
                    (this._data = void 0),
                    (this._objectData = void 0),
                    (this._sharedOptions = void 0),
                    (this._drawStart = void 0),
                    (this._drawCount = void 0),
                    (this.enableOptionSharing = !1),
                    (this.supportsDecimation = !1),
                    (this.$context = void 0),
                    (this._syncList = []),
                    (this.datasetElementType = new.target.datasetElementType),
                    (this.dataElementType = new.target.dataElementType),
                    this.initialize();
            }
            initialize() {
                const t = this._cachedMeta;
                this.configure(),
                    this.linkScales(),
                    (t._stacked = gi(t.vScale, t)),
                    this.addElements(),
                    this.options.fill &&
                        !this.chart.isPluginEnabled("filler") &&
                        console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options");
            }
            updateIndex(t) {
                this.index !== t && yi(this._cachedMeta), (this.index = t);
            }
            linkScales() {
                const t = this.chart,
                    e = this._cachedMeta,
                    i = this.getDataset(),
                    s = (t, e, i, s) => ("x" === t ? e : "r" === t ? s : i),
                    n = (e.xAxisID = B(i.xAxisID, bi(t, "x"))),
                    o = (e.yAxisID = B(i.yAxisID, bi(t, "y"))),
                    r = (e.rAxisID = B(i.rAxisID, bi(t, "r"))),
                    a = e.indexAxis,
                    h = (e.iAxisID = s(a, n, o, r)),
                    l = (e.vAxisID = s(a, o, n, r));
                (e.xScale = this.getScaleForId(n)), (e.yScale = this.getScaleForId(o)), (e.rScale = this.getScaleForId(r)), (e.iScale = this.getScaleForId(h)), (e.vScale = this.getScaleForId(l));
            }
            getDataset() {
                return this.chart.data.datasets[this.index];
            }
            getMeta() {
                return this.chart.getDatasetMeta(this.index);
            }
            getScaleForId(t) {
                return this.chart.scales[t];
            }
            _getOtherScale(t) {
                const e = this._cachedMeta;
                return t === e.iScale ? e.vScale : e.iScale;
            }
            reset() {
                this._update("reset");
            }
            _destroy() {
                const t = this._cachedMeta;
                this._data && St(this._data, this), t._stacked && yi(t);
            }
            _dataCheck() {
                const t = this.getDataset(),
                    e = t.data || (t.data = []),
                    i = this._data;
                if (z(e)) {
                    const t = this._cachedMeta;
                    this._data = (function (t, e) {
                        const { iScale: i, vScale: s } = e,
                            n = "x" === i.axis ? "x" : "y",
                            o = "x" === s.axis ? "x" : "y",
                            r = Object.keys(t),
                            a = new Array(r.length);
                        let h, l, c;
                        for (h = 0, l = r.length; h < l; ++h) (c = r[h]), (a[h] = { [n]: c, [o]: t[c] });
                        return a;
                    })(e, t);
                } else if (i !== e) {
                    if (i) {
                        St(i, this);
                        const t = this._cachedMeta;
                        yi(t), (t._parsed = []);
                    }
                    e &&
                        Object.isExtensible(e) &&
                        ((s = e)._chartjs
                            ? s._chartjs.listeners.push(this)
                            : (Object.defineProperty(s, "_chartjs", { configurable: !0, enumerable: !1, value: { listeners: [this] } }),
                              kt.forEach((t) => {
                                  const e = "_onData" + K(t),
                                      i = s[t];
                                  Object.defineProperty(s, t, {
                                      configurable: !0,
                                      enumerable: !1,
                                      value(...t) {
                                          const n = i.apply(this, t);
                                          return (
                                              s._chartjs.listeners.forEach((i) => {
                                                  "function" == typeof i[e] && i[e](...t);
                                              }),
                                              n
                                          );
                                      },
                                  });
                              }))),
                        (this._syncList = []),
                        (this._data = e);
                }
                var s;
            }
            addElements() {
                const t = this._cachedMeta;
                this._dataCheck(), this.datasetElementType && (t.dataset = new this.datasetElementType());
            }
            buildOrUpdateElements(t) {
                const e = this._cachedMeta,
                    i = this.getDataset();
                let s = !1;
                this._dataCheck();
                const n = e._stacked;
                (e._stacked = gi(e.vScale, e)), e.stack !== i.stack && ((s = !0), yi(e), (e.stack = i.stack)), this._resyncElements(t), (s || n !== e._stacked) && (xi(this, e._parsed), (e._stacked = gi(e.vScale, e)));
            }
            configure() {
                const t = this.chart.config,
                    e = t.datasetScopeKeys(this._type),
                    i = t.getOptionScopes(this.getDataset(), e, !0);
                (this.options = t.createResolver(i, this.getContext())), (this._parsing = this.options.parsing), (this._cachedDataOpts = {});
            }
            parse(t, e) {
                const { _cachedMeta: i, _data: s } = this,
                    { iScale: n, _stacked: o } = i,
                    r = n.axis;
                let a,
                    h,
                    l,
                    c = (0 === t && e === s.length) || i._sorted,
                    d = t > 0 && i._parsed[t - 1];
                if (!1 === this._parsing) (i._parsed = s), (i._sorted = !0), (l = s);
                else {
                    l = E(s[t]) ? this.parseArrayData(i, s, t, e) : z(s[t]) ? this.parseObjectData(i, s, t, e) : this.parsePrimitiveData(i, s, t, e);
                    const n = () => null === h[r] || (d && h[r] < d[r]);
                    for (a = 0; a < e; ++a) (i._parsed[a + t] = h = l[a]), c && (n() && (c = !1), (d = h));
                    i._sorted = c;
                }
                o && xi(this, l);
            }
            parsePrimitiveData(t, e, i, s) {
                const { iScale: n, vScale: o } = t,
                    r = n.axis,
                    a = o.axis,
                    h = n.getLabels(),
                    l = n === o,
                    c = new Array(s);
                let d, u, f;
                for (d = 0, u = s; d < u; ++d) (f = d + i), (c[d] = { [r]: l || n.parse(h[f], f), [a]: o.parse(e[f], f) });
                return c;
            }
            parseArrayData(t, e, i, s) {
                const { xScale: n, yScale: o } = t,
                    r = new Array(s);
                let a, h, l, c;
                for (a = 0, h = s; a < h; ++a) (l = a + i), (c = e[l]), (r[a] = { x: n.parse(c[0], l), y: o.parse(c[1], l) });
                return r;
            }
            parseObjectData(t, e, i, s) {
                const { xScale: n, yScale: o } = t,
                    { xAxisKey: r = "x", yAxisKey: a = "y" } = this._parsing,
                    h = new Array(s);
                let l, c, d, u;
                for (l = 0, c = s; l < c; ++l) (d = l + i), (u = e[d]), (h[l] = { x: n.parse(Z(u, r), d), y: o.parse(Z(u, a), d) });
                return h;
            }
            getParsed(t) {
                return this._cachedMeta._parsed[t];
            }
            getDataElement(t) {
                return this._cachedMeta.data[t];
            }
            applyStack(t, e, i) {
                const s = this.chart,
                    n = this._cachedMeta,
                    o = e[t.axis];
                return fi({ keys: ui(s, !0), values: e._stacks[t.axis]._visualValues }, o, n.index, { mode: i });
            }
            updateRangeFromParsed(t, e, i, s) {
                const n = i[e.axis];
                let o = null === n ? NaN : n;
                const r = s && i._stacks[e.axis];
                s && r && ((s.values = r), (o = fi(s, n, this._cachedMeta.index))), (t.min = Math.min(t.min, o)), (t.max = Math.max(t.max, o));
            }
            getMinMax(t, e) {
                const i = this._cachedMeta,
                    s = i._parsed,
                    n = i._sorted && t === i.iScale,
                    o = s.length,
                    r = this._getOtherScale(t),
                    a = ((t, e, i) => t && !e.hidden && e._stacked && { keys: ui(i, !0), values: null })(e, i, this.chart),
                    h = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY },
                    { min: l, max: c } = (function (t) {
                        const { min: e, max: i, minDefined: s, maxDefined: n } = t.getUserBounds();
                        return { min: s ? e : Number.NEGATIVE_INFINITY, max: n ? i : Number.POSITIVE_INFINITY };
                    })(r);
                let d, u;
                function f() {
                    u = s[d];
                    const e = u[r.axis];
                    return !$(u[t.axis]) || l > e || c < e;
                }
                for (d = 0; d < o && (f() || (this.updateRangeFromParsed(h, t, u, a), !n)); ++d);
                if (n)
                    for (d = o - 1; d >= 0; --d)
                        if (!f()) {
                            this.updateRangeFromParsed(h, t, u, a);
                            break;
                        }
                return h;
            }
            getAllParsedValues(t) {
                const e = this._cachedMeta._parsed,
                    i = [];
                let s, n, o;
                for (s = 0, n = e.length; s < n; ++s) (o = e[s][t.axis]), $(o) && i.push(o);
                return i;
            }
            getMaxOverflow() {
                return !1;
            }
            getLabelAndValue(t) {
                const e = this._cachedMeta,
                    i = e.iScale,
                    s = e.vScale,
                    n = this.getParsed(t);
                return { label: i ? "" + i.getLabelForValue(n[i.axis]) : "", value: s ? "" + s.getLabelForValue(n[s.axis]) : "" };
            }
            _update(t) {
                const e = this._cachedMeta;
                this.update(t || "default"),
                    (e._clip = (function (t) {
                        let e, i, s, n;
                        return z(t) ? ((e = t.top), (i = t.right), (s = t.bottom), (n = t.left)) : (e = i = s = n = t), { top: e, right: i, bottom: s, left: n, disabled: !1 === t };
                    })(
                        B(
                            this.options.clip,
                            (function (t, e, i) {
                                if (!1 === i) return !1;
                                const s = di(t, i),
                                    n = di(e, i);
                                return { top: n.end, right: s.end, bottom: n.start, left: s.start };
                            })(e.xScale, e.yScale, this.getMaxOverflow())
                        )
                    ));
            }
            update(t) {}
            draw() {
                const t = this._ctx,
                    e = this.chart,
                    i = this._cachedMeta,
                    s = i.data || [],
                    n = e.chartArea,
                    o = [],
                    r = this._drawStart || 0,
                    a = this._drawCount || s.length - r,
                    h = this.options.drawActiveElementsOnTop;
                let l;
                for (i.dataset && i.dataset.draw(t, n, r, a), l = r; l < r + a; ++l) {
                    const e = s[l];
                    e.hidden || (e.active && h ? o.push(e) : e.draw(t, n));
                }
                for (l = 0; l < o.length; ++l) o[l].draw(t, n);
            }
            getStyle(t, e) {
                const i = e ? "active" : "default";
                return void 0 === t && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(i) : this.resolveDataElementOptions(t || 0, i);
            }
            getContext(t, e, i) {
                const s = this.getDataset();
                let n;
                if (t >= 0 && t < this._cachedMeta.data.length) {
                    const e = this._cachedMeta.data[t];
                    (n =
                        e.$context ||
                        (e.$context = (function (t, e, i) {
                            return xe(t, { active: !1, dataIndex: e, parsed: void 0, raw: void 0, element: i, index: e, mode: "default", type: "data" });
                        })(this.getContext(), t, e))),
                        (n.parsed = this.getParsed(t)),
                        (n.raw = s.data[t]),
                        (n.index = n.dataIndex = t);
                } else
                    (n =
                        this.$context ||
                        (this.$context = (function (t, e) {
                            return xe(t, { active: !1, dataset: void 0, datasetIndex: e, index: e, mode: "default", type: "dataset" });
                        })(this.chart.getContext(), this.index))),
                        (n.dataset = s),
                        (n.index = n.datasetIndex = this.index);
                return (n.active = !!e), (n.mode = i), n;
            }
            resolveDatasetElementOptions(t) {
                return this._resolveElementOptions(this.datasetElementType.id, t);
            }
            resolveDataElementOptions(t, e) {
                return this._resolveElementOptions(this.dataElementType.id, e, t);
            }
            _resolveElementOptions(t, e = "default", i) {
                const s = "active" === e,
                    n = this._cachedDataOpts,
                    o = t + "-" + e,
                    r = n[o],
                    a = this.enableOptionSharing && G(i);
                if (r) return vi(r, a);
                const h = this.chart.config,
                    l = h.datasetElementScopeKeys(this._type, t),
                    c = s ? [`${t}Hover`, "hover", t, ""] : [t, ""],
                    d = h.getOptionScopes(this.getDataset(), l),
                    u = Object.keys(qt.elements[t]),
                    f = h.resolveNamedOptions(d, u, () => this.getContext(i, s, e), c);
                return f.$shared && ((f.$shared = a), (n[o] = Object.freeze(vi(f, a)))), f;
            }
            _resolveAnimations(t, e, i) {
                const s = this.chart,
                    n = this._cachedDataOpts,
                    o = `animation-${e}`,
                    r = n[o];
                if (r) return r;
                let a;
                if (!1 !== s.options.animation) {
                    const s = this.chart.config,
                        n = s.datasetAnimationScopeKeys(this._type, e),
                        o = s.getOptionScopes(this.getDataset(), n);
                    a = s.createResolver(o, this.getContext(t, i, e));
                }
                const h = new ci(s, a && a.animations);
                return a && a._cacheable && (n[o] = Object.freeze(h)), h;
            }
            getSharedOptions(t) {
                if (t.$shared) return this._sharedOptions || (this._sharedOptions = Object.assign({}, t));
            }
            includeOptions(t, e) {
                return !e || _i(t) || this.chart._animationsDisabled;
            }
            _getSharedOptions(t, e) {
                const i = this.resolveDataElementOptions(t, e),
                    s = this._sharedOptions,
                    n = this.getSharedOptions(i),
                    o = this.includeOptions(e, n) || n !== s;
                return this.updateSharedOptions(n, e, i), { sharedOptions: n, includeOptions: o };
            }
            updateElement(t, e, i, s) {
                _i(s) ? Object.assign(t, i) : this._resolveAnimations(e, s).update(t, i);
            }
            updateSharedOptions(t, e, i) {
                t && !_i(e) && this._resolveAnimations(void 0, e).update(t, i);
            }
            _setStyle(t, e, i, s) {
                t.active = s;
                const n = this.getStyle(e, s);
                this._resolveAnimations(e, i, s).update(t, { options: (!s && this.getSharedOptions(n)) || n });
            }
            removeHoverStyle(t, e, i) {
                this._setStyle(t, i, "active", !1);
            }
            setHoverStyle(t, e, i) {
                this._setStyle(t, i, "active", !0);
            }
            _removeDatasetHoverStyle() {
                const t = this._cachedMeta.dataset;
                t && this._setStyle(t, void 0, "active", !1);
            }
            _setDatasetHoverStyle() {
                const t = this._cachedMeta.dataset;
                t && this._setStyle(t, void 0, "active", !0);
            }
            _resyncElements(t) {
                const e = this._data,
                    i = this._cachedMeta.data;
                for (const [t, e, i] of this._syncList) this[t](e, i);
                this._syncList = [];
                const s = i.length,
                    n = e.length,
                    o = Math.min(n, s);
                o && this.parse(0, o), n > s ? this._insertElements(s, n - s, t) : n < s && this._removeElements(n, s - n);
            }
            _insertElements(t, e, i = !0) {
                const s = this._cachedMeta,
                    n = s.data,
                    o = t + e;
                let r;
                const a = (t) => {
                    for (t.length += e, r = t.length - 1; r >= o; r--) t[r] = t[r - e];
                };
                for (a(n), r = t; r < o; ++r) n[r] = new this.dataElementType();
                this._parsing && a(s._parsed), this.parse(t, e), i && this.updateElements(n, t, e, "reset");
            }
            updateElements(t, e, i, s) {}
            _removeElements(t, e) {
                const i = this._cachedMeta;
                if (this._parsing) {
                    const s = i._parsed.splice(t, e);
                    i._stacked && yi(i, s);
                }
                i.data.splice(t, e);
            }
            _sync(t) {
                if (this._parsing) this._syncList.push(t);
                else {
                    const [e, i, s] = t;
                    this[e](i, s);
                }
                this.chart._dataChanges.push([this.index, ...t]);
            }
            _onDataPush() {
                const t = arguments.length;
                this._sync(["_insertElements", this.getDataset().data.length - t, t]);
            }
            _onDataPop() {
                this._sync(["_removeElements", this._cachedMeta.data.length - 1, 1]);
            }
            _onDataShift() {
                this._sync(["_removeElements", 0, 1]);
            }
            _onDataSplice(t, e) {
                e && this._sync(["_removeElements", t, e]);
                const i = arguments.length - 2;
                i && this._sync(["_insertElements", t, i]);
            }
            _onDataUnshift() {
                this._sync(["_insertElements", 0, arguments.length]);
            }
        }
        function Mi() {
            throw new Error("This method is not implemented: Check that a complete date adapter is provided.");
        }
        class ki {
            static override(t) {
                Object.assign(ki.prototype, t);
            }
            options;
            constructor(t) {
                this.options = t || {};
            }
            init() {}
            formats() {
                return Mi();
            }
            parse() {
                return Mi();
            }
            format() {
                return Mi();
            }
            add() {
                return Mi();
            }
            diff() {
                return Mi();
            }
            startOf() {
                return Mi();
            }
            endOf() {
                return Mi();
            }
        }
        var Si = { _date: ki };
        function Di(t, e, i, s) {
            const { controller: n, data: o, _sorted: r } = t,
                a = n._cachedMeta.iScale;
            if (a && e === a.axis && "r" !== e && r && o.length) {
                const t = a._reversePixels ? Mt : wt;
                if (!s) return t(o, e, i);
                if (n._sharedOptions) {
                    const s = o[0],
                        n = "function" == typeof s.getRange && s.getRange(e);
                    if (n) {
                        const s = t(o, e, i - n),
                            r = t(o, e, i + n);
                        return { lo: s.lo, hi: r.hi };
                    }
                }
            }
            return { lo: 0, hi: o.length - 1 };
        }
        function Oi(t, e, i, s, n) {
            const o = t.getSortedVisibleDatasetMetas(),
                r = i[e];
            for (let t = 0, i = o.length; t < i; ++t) {
                const { index: i, data: a } = o[t],
                    { lo: h, hi: l } = Di(o[t], e, r, n);
                for (let t = h; t <= l; ++t) {
                    const e = a[t];
                    e.skip || s(e, i, t);
                }
            }
        }
        function Ti(t, e, i, s, n) {
            const o = [];
            return n || t.isPointInArea(e)
                ? (Oi(
                      t,
                      i,
                      e,
                      function (i, r, a) {
                          (n || te(i, t.chartArea, 0)) && i.inRange(e.x, e.y, s) && o.push({ element: i, datasetIndex: r, index: a });
                      },
                      !0
                  ),
                  o)
                : o;
        }
        function Ci(t, e, i, s, n, o) {
            return o || t.isPointInArea(e)
                ? "r" !== i || s
                    ? (function (t, e, i, s, n, o) {
                          let r = [];
                          const a = (function (t) {
                              const e = -1 !== t.indexOf("x"),
                                  i = -1 !== t.indexOf("y");
                              return function (t, s) {
                                  const n = e ? Math.abs(t.x - s.x) : 0,
                                      o = i ? Math.abs(t.y - s.y) : 0;
                                  return Math.sqrt(Math.pow(n, 2) + Math.pow(o, 2));
                              };
                          })(i);
                          let h = Number.POSITIVE_INFINITY;
                          return (
                              Oi(t, i, e, function (i, l, c) {
                                  const d = i.inRange(e.x, e.y, n);
                                  if (s && !d) return;
                                  const u = i.getCenterPoint(n);
                                  if (!o && !t.isPointInArea(u) && !d) return;
                                  const f = a(e, u);
                                  f < h ? ((r = [{ element: i, datasetIndex: l, index: c }]), (h = f)) : f === h && r.push({ element: i, datasetIndex: l, index: c });
                              }),
                              r
                          );
                      })(t, e, i, s, n, o)
                    : (function (t, e, i, s) {
                          let n = [];
                          return (
                              Oi(t, i, e, function (t, i, o) {
                                  const { startAngle: r, endAngle: a } = t.getProps(["startAngle", "endAngle"], s),
                                      { angle: h } = (function (t, e) {
                                          const i = e.x - t.x,
                                              s = e.y - t.y,
                                              n = Math.sqrt(i * i + s * s);
                                          let o = Math.atan2(s, i);
                                          return o < -0.5 * tt && (o += et), { angle: o, distance: n };
                                      })(t, { x: e.x, y: e.y });
                                  bt(h, r, a) && n.push({ element: t, datasetIndex: i, index: o });
                              }),
                              n
                          );
                      })(t, e, i, n)
                : [];
        }
        function Pi(t, e, i, s, n) {
            const o = [],
                r = "x" === i ? "inXRange" : "inYRange";
            let a = !1;
            return (
                Oi(t, i, e, (t, s, h) => {
                    t[r] && t[r](e[i], n) && (o.push({ element: t, datasetIndex: s, index: h }), (a = a || t.inRange(e.x, e.y, n)));
                }),
                s && !a ? [] : o
            );
        }
        var Ii = {
            evaluateInteractionItems: Oi,
            modes: {
                index(t, e, i, s) {
                    const n = je(e, t),
                        o = i.axis || "x",
                        r = i.includeInvisible || !1,
                        a = i.intersect ? Ti(t, n, o, s, r) : Ci(t, n, o, !1, s, r),
                        h = [];
                    return a.length
                        ? (t.getSortedVisibleDatasetMetas().forEach((t) => {
                              const e = a[0].index,
                                  i = t.data[e];
                              i && !i.skip && h.push({ element: i, datasetIndex: t.index, index: e });
                          }),
                          h)
                        : [];
                },
                dataset(t, e, i, s) {
                    const n = je(e, t),
                        o = i.axis || "xy",
                        r = i.includeInvisible || !1;
                    let a = i.intersect ? Ti(t, n, o, s, r) : Ci(t, n, o, !1, s, r);
                    if (a.length > 0) {
                        const e = a[0].datasetIndex,
                            i = t.getDatasetMeta(e).data;
                        a = [];
                        for (let t = 0; t < i.length; ++t) a.push({ element: i[t], datasetIndex: e, index: t });
                    }
                    return a;
                },
                point: (t, e, i, s) => Ti(t, je(e, t), i.axis || "xy", s, i.includeInvisible || !1),
                nearest(t, e, i, s) {
                    const n = je(e, t),
                        o = i.axis || "xy",
                        r = i.includeInvisible || !1;
                    return Ci(t, n, o, i.intersect, s, r);
                },
                x: (t, e, i, s) => Pi(t, je(e, t), "x", i.intersect, s),
                y: (t, e, i, s) => Pi(t, je(e, t), "y", i.intersect, s),
            },
        };
        const Li = ["left", "top", "right", "bottom"];
        function Ai(t, e) {
            return t.filter((t) => t.pos === e);
        }
        function Ei(t, e) {
            return t.filter((t) => -1 === Li.indexOf(t.pos) && t.box.axis === e);
        }
        function zi(t, e) {
            return t.sort((t, i) => {
                const s = e ? i : t,
                    n = e ? t : i;
                return s.weight === n.weight ? s.index - n.index : s.weight - n.weight;
            });
        }
        function $i(t, e, i, s) {
            return Math.max(t[i], e[i]) + Math.max(t[s], e[s]);
        }
        function Ri(t, e) {
            (t.top = Math.max(t.top, e.top)), (t.left = Math.max(t.left, e.left)), (t.bottom = Math.max(t.bottom, e.bottom)), (t.right = Math.max(t.right, e.right));
        }
        function Bi(t, e, i, s) {
            const { pos: n, box: o } = i,
                r = t.maxPadding;
            if (!z(n)) {
                i.size && (t[n] -= i.size);
                const e = s[i.stack] || { size: 0, count: 1 };
                (e.size = Math.max(e.size, i.horizontal ? o.height : o.width)), (i.size = e.size / e.count), (t[n] += i.size);
            }
            o.getPadding && Ri(r, o.getPadding());
            const a = Math.max(0, e.outerWidth - $i(r, t, "left", "right")),
                h = Math.max(0, e.outerHeight - $i(r, t, "top", "bottom")),
                l = a !== t.w,
                c = h !== t.h;
            return (t.w = a), (t.h = h), i.horizontal ? { same: l, other: c } : { same: c, other: l };
        }
        function Fi(t, e) {
            const i = e.maxPadding;
            return (function (t) {
                const s = { left: 0, top: 0, right: 0, bottom: 0 };
                return (
                    t.forEach((t) => {
                        s[t] = Math.max(e[t], i[t]);
                    }),
                    s
                );
            })(t ? ["left", "right"] : ["top", "bottom"]);
        }
        function Hi(t, e, i, s) {
            const n = [];
            let o, r, a, h, l, c;
            for (o = 0, r = t.length, l = 0; o < r; ++o) {
                (a = t[o]), (h = a.box), h.update(a.width || e.w, a.height || e.h, Fi(a.horizontal, e));
                const { same: r, other: d } = Bi(e, i, a, s);
                (l |= r && n.length), (c = c || d), h.fullSize || n.push(a);
            }
            return (l && Hi(n, e, i, s)) || c;
        }
        function Wi(t, e, i, s, n) {
            (t.top = i), (t.left = e), (t.right = e + s), (t.bottom = i + n), (t.width = s), (t.height = n);
        }
        function Yi(t, e, i, s) {
            const n = i.padding;
            let { x: o, y: r } = e;
            for (const a of t) {
                const t = a.box,
                    h = s[a.stack] || { count: 1, placed: 0, weight: 1 },
                    l = a.stackWeight / h.weight || 1;
                if (a.horizontal) {
                    const s = e.w * l,
                        o = h.size || t.height;
                    G(h.start) && (r = h.start), t.fullSize ? Wi(t, n.left, r, i.outerWidth - n.right - n.left, o) : Wi(t, e.left + h.placed, r, s, o), (h.start = r), (h.placed += s), (r = t.bottom);
                } else {
                    const s = e.h * l,
                        r = h.size || t.width;
                    G(h.start) && (o = h.start), t.fullSize ? Wi(t, o, n.top, r, i.outerHeight - n.bottom - n.top) : Wi(t, o, e.top + h.placed, r, s), (h.start = o), (h.placed += s), (o = t.right);
                }
            }
            (e.x = o), (e.y = r);
        }
        var ji = {
            addBox(t, e) {
                t.boxes || (t.boxes = []),
                    (e.fullSize = e.fullSize || !1),
                    (e.position = e.position || "top"),
                    (e.weight = e.weight || 0),
                    (e._layers =
                        e._layers ||
                        function () {
                            return [
                                {
                                    z: 0,
                                    draw(t) {
                                        e.draw(t);
                                    },
                                },
                            ];
                        }),
                    t.boxes.push(e);
            },
            removeBox(t, e) {
                const i = t.boxes ? t.boxes.indexOf(e) : -1;
                -1 !== i && t.boxes.splice(i, 1);
            },
            configure(t, e, i) {
                (e.fullSize = i.fullSize), (e.position = i.position), (e.weight = i.weight);
            },
            update(t, e, i, s) {
                if (!t) return;
                const n = ge(t.options.layout.padding),
                    o = Math.max(e - n.width, 0),
                    r = Math.max(i - n.height, 0),
                    a = (function (t) {
                        const e = (function (t) {
                                const e = [];
                                let i, s, n, o, r, a;
                                for (i = 0, s = (t || []).length; i < s; ++i)
                                    (n = t[i]),
                                        ({
                                            position: o,
                                            options: { stack: r, stackWeight: a = 1 },
                                        } = n),
                                        e.push({ index: i, box: n, pos: o, horizontal: n.isHorizontal(), weight: n.weight, stack: r && o + r, stackWeight: a });
                                return e;
                            })(t),
                            i = zi(
                                e.filter((t) => t.box.fullSize),
                                !0
                            ),
                            s = zi(Ai(e, "left"), !0),
                            n = zi(Ai(e, "right")),
                            o = zi(Ai(e, "top"), !0),
                            r = zi(Ai(e, "bottom")),
                            a = Ei(e, "x"),
                            h = Ei(e, "y");
                        return { fullSize: i, leftAndTop: s.concat(o), rightAndBottom: n.concat(h).concat(r).concat(a), chartArea: Ai(e, "chartArea"), vertical: s.concat(n).concat(h), horizontal: o.concat(r).concat(a) };
                    })(t.boxes),
                    h = a.vertical,
                    l = a.horizontal;
                H(t.boxes, (t) => {
                    "function" == typeof t.beforeLayout && t.beforeLayout();
                });
                const c = h.reduce((t, e) => (e.box.options && !1 === e.box.options.display ? t : t + 1), 0) || 1,
                    d = Object.freeze({ outerWidth: e, outerHeight: i, padding: n, availableWidth: o, availableHeight: r, vBoxMaxWidth: o / 2 / c, hBoxMaxHeight: r / 2 }),
                    u = Object.assign({}, n);
                Ri(u, ge(s));
                const f = Object.assign({ maxPadding: u, w: o, h: r, x: n.left, y: n.top }, n),
                    g = (function (t, e) {
                        const i = (function (t) {
                                const e = {};
                                for (const i of t) {
                                    const { stack: t, pos: s, stackWeight: n } = i;
                                    if (!t || !Li.includes(s)) continue;
                                    const o = e[t] || (e[t] = { count: 0, placed: 0, weight: 0, size: 0 });
                                    o.count++, (o.weight += n);
                                }
                                return e;
                            })(t),
                            { vBoxMaxWidth: s, hBoxMaxHeight: n } = e;
                        let o, r, a;
                        for (o = 0, r = t.length; o < r; ++o) {
                            a = t[o];
                            const { fullSize: r } = a.box,
                                h = i[a.stack],
                                l = h && a.stackWeight / h.weight;
                            a.horizontal ? ((a.width = l ? l * s : r && e.availableWidth), (a.height = n)) : ((a.width = s), (a.height = l ? l * n : r && e.availableHeight));
                        }
                        return i;
                    })(h.concat(l), d);
                Hi(a.fullSize, f, d, g),
                    Hi(h, f, d, g),
                    Hi(l, f, d, g) && Hi(h, f, d, g),
                    (function (t) {
                        const e = t.maxPadding;
                        function i(i) {
                            const s = Math.max(e[i] - t[i], 0);
                            return (t[i] += s), s;
                        }
                        (t.y += i("top")), (t.x += i("left")), i("right"), i("bottom");
                    })(f),
                    Yi(a.leftAndTop, f, d, g),
                    (f.x += f.w),
                    (f.y += f.h),
                    Yi(a.rightAndBottom, f, d, g),
                    (t.chartArea = { left: f.left, top: f.top, right: f.left + f.w, bottom: f.top + f.h, height: f.h, width: f.w }),
                    H(a.chartArea, (e) => {
                        const i = e.box;
                        Object.assign(i, t.chartArea), i.update(f.w, f.h, { left: 0, top: 0, right: 0, bottom: 0 });
                    });
            },
        };
        class Ni {
            acquireContext(t, e) {}
            releaseContext(t) {
                return !1;
            }
            addEventListener(t, e, i) {}
            removeEventListener(t, e, i) {}
            getDevicePixelRatio() {
                return 1;
            }
            getMaximumSize(t, e, i, s) {
                return (e = Math.max(0, e || t.width)), (i = i || t.height), { width: e, height: Math.max(0, s ? Math.floor(e / s) : i) };
            }
            isAttached(t) {
                return !0;
            }
            updateConfig(t) {}
        }
        class Vi extends Ni {
            acquireContext(t) {
                return (t && t.getContext && t.getContext("2d")) || null;
            }
            updateConfig(t) {
                t.options.animation = !1;
            }
        }
        const Ui = "$chartjs",
            Xi = {
                touchstart: "mousedown",
                touchmove: "mousemove",
                touchend: "mouseup",
                pointerenter: "mouseenter",
                pointerdown: "mousedown",
                pointermove: "mousemove",
                pointerup: "mouseup",
                pointerleave: "mouseout",
                pointerout: "mouseout",
            },
            qi = (t) => null === t || "" === t,
            Zi = !!Ue && { passive: !0 };
        function Ki(t, e, i) {
            t && t.canvas && t.canvas.removeEventListener(e, i, Zi);
        }
        function Gi(t, e) {
            for (const i of t) if (i === e || i.contains(e)) return !0;
        }
        function Qi(t, e, i) {
            const s = t.canvas,
                n = new MutationObserver((t) => {
                    let e = !1;
                    for (const i of t) (e = e || Gi(i.addedNodes, s)), (e = e && !Gi(i.removedNodes, s));
                    e && i();
                });
            return n.observe(document, { childList: !0, subtree: !0 }), n;
        }
        function Ji(t, e, i) {
            const s = t.canvas,
                n = new MutationObserver((t) => {
                    let e = !1;
                    for (const i of t) (e = e || Gi(i.removedNodes, s)), (e = e && !Gi(i.addedNodes, s));
                    e && i();
                });
            return n.observe(document, { childList: !0, subtree: !0 }), n;
        }
        const ts = new Map();
        let es = 0;
        function is() {
            const t = window.devicePixelRatio;
            t !== es &&
                ((es = t),
                ts.forEach((e, i) => {
                    i.currentDevicePixelRatio !== t && e();
                }));
        }
        function ss(t, e, i) {
            const s = t.canvas,
                n = s && Be(s);
            if (!n) return;
            const o = Ot((t, e) => {
                    const s = n.clientWidth;
                    i(t, e), s < n.clientWidth && i();
                }, window),
                r = new ResizeObserver((t) => {
                    const e = t[0],
                        i = e.contentRect.width,
                        s = e.contentRect.height;
                    (0 === i && 0 === s) || o(i, s);
                });
            return (
                r.observe(n),
                (function (t, e) {
                    ts.size || window.addEventListener("resize", is), ts.set(t, e);
                })(t, o),
                r
            );
        }
        function ns(t, e, i) {
            i && i.disconnect(),
                "resize" === e &&
                    (function (t) {
                        ts.delete(t), ts.size || window.removeEventListener("resize", is);
                    })(t);
        }
        function os(t, e, i) {
            const s = t.canvas,
                n = Ot((e) => {
                    null !== t.ctx &&
                        i(
                            (function (t, e) {
                                const i = Xi[t.type] || t.type,
                                    { x: s, y: n } = je(t, e);
                                return { type: i, chart: e, native: t, x: void 0 !== s ? s : null, y: void 0 !== n ? n : null };
                            })(e, t)
                        );
                }, t);
            return (
                (function (t, e, i) {
                    t && t.addEventListener(e, i, Zi);
                })(s, e, n),
                n
            );
        }
        class rs extends Ni {
            acquireContext(t, e) {
                const i = t && t.getContext && t.getContext("2d");
                return i && i.canvas === t
                    ? ((function (t, e) {
                          const i = t.style,
                              s = t.getAttribute("height"),
                              n = t.getAttribute("width");
                          if (((t[Ui] = { initial: { height: s, width: n, style: { display: i.display, height: i.height, width: i.width } } }), (i.display = i.display || "block"), (i.boxSizing = i.boxSizing || "border-box"), qi(n))) {
                              const e = Xe(t, "width");
                              void 0 !== e && (t.width = e);
                          }
                          if (qi(s))
                              if ("" === t.style.height) t.height = t.width / (e || 2);
                              else {
                                  const e = Xe(t, "height");
                                  void 0 !== e && (t.height = e);
                              }
                      })(t, e),
                      i)
                    : null;
            }
            releaseContext(t) {
                const e = t.canvas;
                if (!e[Ui]) return !1;
                const i = e[Ui].initial;
                ["height", "width"].forEach((t) => {
                    const s = i[t];
                    A(s) ? e.removeAttribute(t) : e.setAttribute(t, s);
                });
                const s = i.style || {};
                return (
                    Object.keys(s).forEach((t) => {
                        e.style[t] = s[t];
                    }),
                    (e.width = e.width),
                    delete e[Ui],
                    !0
                );
            }
            addEventListener(t, e, i) {
                this.removeEventListener(t, e);
                const s = t.$proxies || (t.$proxies = {}),
                    n = { attach: Qi, detach: Ji, resize: ss }[e] || os;
                s[e] = n(t, e, i);
            }
            removeEventListener(t, e) {
                const i = t.$proxies || (t.$proxies = {}),
                    s = i[e];
                s && (({ attach: ns, detach: ns, resize: ns }[e] || Ki)(t, e, s), (i[e] = void 0));
            }
            getDevicePixelRatio() {
                return window.devicePixelRatio;
            }
            getMaximumSize(t, e, i, s) {
                return (function (t, e, i, s) {
                    const n = He(t),
                        o = Ye(n, "margin"),
                        r = Fe(n.maxWidth, t, "clientWidth") || st,
                        a = Fe(n.maxHeight, t, "clientHeight") || st,
                        h = (function (t, e, i) {
                            let s, n;
                            if (void 0 === e || void 0 === i) {
                                const o = t && Be(t);
                                if (o) {
                                    const t = o.getBoundingClientRect(),
                                        r = He(o),
                                        a = Ye(r, "border", "width"),
                                        h = Ye(r, "padding");
                                    (e = t.width - h.width - a.width), (i = t.height - h.height - a.height), (s = Fe(r.maxWidth, o, "clientWidth")), (n = Fe(r.maxHeight, o, "clientHeight"));
                                } else (e = t.clientWidth), (i = t.clientHeight);
                            }
                            return { width: e, height: i, maxWidth: s || st, maxHeight: n || st };
                        })(t, e, i);
                    let { width: l, height: c } = h;
                    if ("content-box" === n.boxSizing) {
                        const t = Ye(n, "border", "width"),
                            e = Ye(n, "padding");
                        (l -= e.width + t.width), (c -= e.height + t.height);
                    }
                    return (
                        (l = Math.max(0, l - o.width)),
                        (c = Math.max(0, s ? l / s : c - o.height)),
                        (l = Ne(Math.min(l, r, h.maxWidth))),
                        (c = Ne(Math.min(c, a, h.maxHeight))),
                        l && !c && (c = Ne(l / 2)),
                        (void 0 !== e || void 0 !== i) && s && h.height && c > h.height && ((c = h.height), (l = Ne(Math.floor(c * s)))),
                        { width: l, height: c }
                    );
                })(t, e, i, s);
            }
            isAttached(t) {
                const e = t && Be(t);
                return !(!e || !e.isConnected);
            }
        }
        class as {
            static defaults = {};
            static defaultRoutes = void 0;
            x;
            y;
            active = !1;
            options;
            $animations;
            tooltipPosition(t) {
                const { x: e, y: i } = this.getProps(["x", "y"], t);
                return { x: e, y: i };
            }
            hasValue() {
                return ut(this.x) && ut(this.y);
            }
            getProps(t, e) {
                const i = this.$animations;
                if (!e || !i) return this;
                const s = {};
                return (
                    t.forEach((t) => {
                        s[t] = i[t] && i[t].active() ? i[t]._to : this[t];
                    }),
                    s
                );
            }
        }
        function hs(t, e, i, s, n) {
            const o = B(s, 0),
                r = Math.min(B(n, t.length), t.length);
            let a,
                h,
                l,
                c = 0;
            for (i = Math.ceil(i), n && ((a = n - s), (i = a / Math.floor(a / i))), l = o; l < 0; ) c++, (l = Math.round(o + c * i));
            for (h = Math.max(o, 0); h < r; h++) h === l && (e.push(t[h]), c++, (l = Math.round(o + c * i)));
        }
        const ls = (t, e, i) => ("top" === e || "left" === e ? t[e] + i : t[e] - i),
            cs = (t, e) => Math.min(e || t, t);
        function ds(t, e) {
            const i = [],
                s = t.length / e,
                n = t.length;
            let o = 0;
            for (; o < n; o += s) i.push(t[Math.floor(o)]);
            return i;
        }
        function us(t, e, i) {
            const s = t.ticks.length,
                n = Math.min(e, s - 1),
                o = t._startPixel,
                r = t._endPixel,
                a = 1e-6;
            let h,
                l = t.getPixelForTick(n);
            if (!(i && ((h = 1 === s ? Math.max(l - o, r - l) : 0 === e ? (t.getPixelForTick(1) - l) / 2 : (l - t.getPixelForTick(n - 1)) / 2), (l += n < e ? h : -h), l < o - a || l > r + a))) return l;
        }
        function fs(t) {
            return t.drawTicks ? t.tickLength : 0;
        }
        function gs(t, e) {
            if (!t.display) return 0;
            const i = pe(t.font, e),
                s = ge(t.padding);
            return (E(t.text) ? t.text.length : 1) * i.lineHeight + s.height;
        }
        function ps(t, e, i) {
            let s = Tt(t);
            return ((i && "right" !== e) || (!i && "right" === e)) && (s = ((t) => ("left" === t ? "right" : "right" === t ? "left" : t))(s)), s;
        }
        class ms extends as {
            constructor(t) {
                super(),
                    (this.id = t.id),
                    (this.type = t.type),
                    (this.options = void 0),
                    (this.ctx = t.ctx),
                    (this.chart = t.chart),
                    (this.top = void 0),
                    (this.bottom = void 0),
                    (this.left = void 0),
                    (this.right = void 0),
                    (this.width = void 0),
                    (this.height = void 0),
                    (this._margins = { left: 0, right: 0, top: 0, bottom: 0 }),
                    (this.maxWidth = void 0),
                    (this.maxHeight = void 0),
                    (this.paddingTop = void 0),
                    (this.paddingBottom = void 0),
                    (this.paddingLeft = void 0),
                    (this.paddingRight = void 0),
                    (this.axis = void 0),
                    (this.labelRotation = void 0),
                    (this.min = void 0),
                    (this.max = void 0),
                    (this._range = void 0),
                    (this.ticks = []),
                    (this._gridLineItems = null),
                    (this._labelItems = null),
                    (this._labelSizes = null),
                    (this._length = 0),
                    (this._maxLength = 0),
                    (this._longestTextCache = {}),
                    (this._startPixel = void 0),
                    (this._endPixel = void 0),
                    (this._reversePixels = !1),
                    (this._userMax = void 0),
                    (this._userMin = void 0),
                    (this._suggestedMax = void 0),
                    (this._suggestedMin = void 0),
                    (this._ticksLength = 0),
                    (this._borderValue = 0),
                    (this._cache = {}),
                    (this._dataLimitsCached = !1),
                    (this.$context = void 0);
            }
            init(t) {
                (this.options = t.setContext(this.getContext())),
                    (this.axis = t.axis),
                    (this._userMin = this.parse(t.min)),
                    (this._userMax = this.parse(t.max)),
                    (this._suggestedMin = this.parse(t.suggestedMin)),
                    (this._suggestedMax = this.parse(t.suggestedMax));
            }
            parse(t, e) {
                return t;
            }
            getUserBounds() {
                let { _userMin: t, _userMax: e, _suggestedMin: i, _suggestedMax: s } = this;
                return (
                    (t = R(t, Number.POSITIVE_INFINITY)), (e = R(e, Number.NEGATIVE_INFINITY)), (i = R(i, Number.POSITIVE_INFINITY)), (s = R(s, Number.NEGATIVE_INFINITY)), { min: R(t, i), max: R(e, s), minDefined: $(t), maxDefined: $(e) }
                );
            }
            getMinMax(t) {
                let e,
                    { min: i, max: s, minDefined: n, maxDefined: o } = this.getUserBounds();
                if (n && o) return { min: i, max: s };
                const r = this.getMatchingVisibleMetas();
                for (let a = 0, h = r.length; a < h; ++a) (e = r[a].controller.getMinMax(this, t)), n || (i = Math.min(i, e.min)), o || (s = Math.max(s, e.max));
                return (i = o && i > s ? s : i), (s = n && i > s ? i : s), { min: R(i, R(s, i)), max: R(s, R(i, s)) };
            }
            getPadding() {
                return { left: this.paddingLeft || 0, top: this.paddingTop || 0, right: this.paddingRight || 0, bottom: this.paddingBottom || 0 };
            }
            getTicks() {
                return this.ticks;
            }
            getLabels() {
                const t = this.chart.data;
                return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels || [];
            }
            getLabelItems(t = this.chart.chartArea) {
                return this._labelItems || (this._labelItems = this._computeLabelItems(t));
            }
            beforeLayout() {
                (this._cache = {}), (this._dataLimitsCached = !1);
            }
            beforeUpdate() {
                F(this.options.beforeUpdate, [this]);
            }
            update(t, e, i) {
                const { beginAtZero: s, grace: n, ticks: o } = this.options,
                    r = o.sampleSize;
                this.beforeUpdate(),
                    (this.maxWidth = t),
                    (this.maxHeight = e),
                    (this._margins = i = Object.assign({ left: 0, right: 0, top: 0, bottom: 0 }, i)),
                    (this.ticks = null),
                    (this._labelSizes = null),
                    (this._gridLineItems = null),
                    (this._labelItems = null),
                    this.beforeSetDimensions(),
                    this.setDimensions(),
                    this.afterSetDimensions(),
                    (this._maxLength = this.isHorizontal() ? this.width + i.left + i.right : this.height + i.top + i.bottom),
                    this._dataLimitsCached ||
                        (this.beforeDataLimits(),
                        this.determineDataLimits(),
                        this.afterDataLimits(),
                        (this._range = (function (t, e, i) {
                            const { min: s, max: n } = t,
                                o = ((h = (n - s) / 2), "string" == typeof (a = e) && a.endsWith("%") ? (parseFloat(a) / 100) * h : +a),
                                r = (t, e) => (i && 0 === t ? 0 : t + e);
                            var a, h;
                            return { min: r(s, -Math.abs(o)), max: r(n, o) };
                        })(this, n, s)),
                        (this._dataLimitsCached = !0)),
                    this.beforeBuildTicks(),
                    (this.ticks = this.buildTicks() || []),
                    this.afterBuildTicks();
                const a = r < this.ticks.length;
                this._convertTicksToLabels(a ? ds(this.ticks, r) : this.ticks),
                    this.configure(),
                    this.beforeCalculateLabelRotation(),
                    this.calculateLabelRotation(),
                    this.afterCalculateLabelRotation(),
                    o.display &&
                        (o.autoSkip || "auto" === o.source) &&
                        ((this.ticks = (function (t, e) {
                            const i = t.options.ticks,
                                s = (function (t) {
                                    const e = t.options.offset,
                                        i = t._tickSize(),
                                        s = t._length / i + (e ? 0 : 1),
                                        n = t._maxLength / i;
                                    return Math.floor(Math.min(s, n));
                                })(t),
                                n = Math.min(i.maxTicksLimit || s, s),
                                o = i.major.enabled
                                    ? (function (t) {
                                          const e = [];
                                          let i, s;
                                          for (i = 0, s = t.length; i < s; i++) t[i].major && e.push(i);
                                          return e;
                                      })(e)
                                    : [],
                                r = o.length,
                                a = o[0],
                                h = o[r - 1],
                                l = [];
                            if (r > n)
                                return (
                                    (function (t, e, i, s) {
                                        let n,
                                            o = 0,
                                            r = i[0];
                                        for (s = Math.ceil(s), n = 0; n < t.length; n++) n === r && (e.push(t[n]), o++, (r = i[o * s]));
                                    })(e, l, o, r / n),
                                    l
                                );
                            const c = (function (t, e, i) {
                                const s = (function (t) {
                                        const e = t.length;
                                        let i, s;
                                        if (e < 2) return !1;
                                        for (s = t[0], i = 1; i < e; ++i) if (t[i] - t[i - 1] !== s) return !1;
                                        return s;
                                    })(t),
                                    n = e.length / i;
                                if (!s) return Math.max(n, 1);
                                const o = (function (t) {
                                    const e = [],
                                        i = Math.sqrt(t);
                                    let s;
                                    for (s = 1; s < i; s++) t % s == 0 && (e.push(s), e.push(t / s));
                                    return i === (0 | i) && e.push(i), e.sort((t, e) => t - e).pop(), e;
                                })(s);
                                for (let t = 0, e = o.length - 1; t < e; t++) {
                                    const e = o[t];
                                    if (e > n) return e;
                                }
                                return Math.max(n, 1);
                            })(o, e, n);
                            if (r > 0) {
                                let t, i;
                                const s = r > 1 ? Math.round((h - a) / (r - 1)) : null;
                                for (hs(e, l, c, A(s) ? 0 : a - s, a), t = 0, i = r - 1; t < i; t++) hs(e, l, c, o[t], o[t + 1]);
                                return hs(e, l, c, h, A(s) ? e.length : h + s), l;
                            }
                            return hs(e, l, c), l;
                        })(this, this.ticks)),
                        (this._labelSizes = null),
                        this.afterAutoSkip()),
                    a && this._convertTicksToLabels(this.ticks),
                    this.beforeFit(),
                    this.fit(),
                    this.afterFit(),
                    this.afterUpdate();
            }
            configure() {
                let t,
                    e,
                    i = this.options.reverse;
                this.isHorizontal() ? ((t = this.left), (e = this.right)) : ((t = this.top), (e = this.bottom), (i = !i)),
                    (this._startPixel = t),
                    (this._endPixel = e),
                    (this._reversePixels = i),
                    (this._length = e - t),
                    (this._alignToPixels = this.options.alignToPixels);
            }
            afterUpdate() {
                F(this.options.afterUpdate, [this]);
            }
            beforeSetDimensions() {
                F(this.options.beforeSetDimensions, [this]);
            }
            setDimensions() {
                this.isHorizontal() ? ((this.width = this.maxWidth), (this.left = 0), (this.right = this.width)) : ((this.height = this.maxHeight), (this.top = 0), (this.bottom = this.height)),
                    (this.paddingLeft = 0),
                    (this.paddingTop = 0),
                    (this.paddingRight = 0),
                    (this.paddingBottom = 0);
            }
            afterSetDimensions() {
                F(this.options.afterSetDimensions, [this]);
            }
            _callHooks(t) {
                this.chart.notifyPlugins(t, this.getContext()), F(this.options[t], [this]);
            }
            beforeDataLimits() {
                this._callHooks("beforeDataLimits");
            }
            determineDataLimits() {}
            afterDataLimits() {
                this._callHooks("afterDataLimits");
            }
            beforeBuildTicks() {
                this._callHooks("beforeBuildTicks");
            }
            buildTicks() {
                return [];
            }
            afterBuildTicks() {
                this._callHooks("afterBuildTicks");
            }
            beforeTickToLabelConversion() {
                F(this.options.beforeTickToLabelConversion, [this]);
            }
            generateTickLabels(t) {
                const e = this.options.ticks;
                let i, s, n;
                for (i = 0, s = t.length; i < s; i++) (n = t[i]), (n.label = F(e.callback, [n.value, i, t], this));
            }
            afterTickToLabelConversion() {
                F(this.options.afterTickToLabelConversion, [this]);
            }
            beforeCalculateLabelRotation() {
                F(this.options.beforeCalculateLabelRotation, [this]);
            }
            calculateLabelRotation() {
                const t = this.options,
                    e = t.ticks,
                    i = cs(this.ticks.length, t.ticks.maxTicksLimit),
                    s = e.minRotation || 0,
                    n = e.maxRotation;
                let o,
                    r,
                    a,
                    h = s;
                if (!this._isVisible() || !e.display || s >= n || i <= 1 || !this.isHorizontal()) return void (this.labelRotation = s);
                const l = this._getLabelSizes(),
                    c = l.widest.width,
                    d = l.highest.height,
                    u = yt(this.chart.width - c, 0, this.maxWidth);
                (o = t.offset ? this.maxWidth / i : u / (i - 1)),
                    c + 6 > o &&
                        ((o = u / (i - (t.offset ? 0.5 : 1))),
                        (r = this.maxHeight - fs(t.grid) - e.padding - gs(t.title, this.chart.options.font)),
                        (a = Math.sqrt(c * c + d * d)),
                        (h = Math.min(Math.asin(yt((l.highest.height + 6) / o, -1, 1)), Math.asin(yt(r / a, -1, 1)) - Math.asin(yt(d / a, -1, 1))) * (180 / tt)),
                        (h = Math.max(s, Math.min(n, h)))),
                    (this.labelRotation = h);
            }
            afterCalculateLabelRotation() {
                F(this.options.afterCalculateLabelRotation, [this]);
            }
            afterAutoSkip() {}
            beforeFit() {
                F(this.options.beforeFit, [this]);
            }
            fit() {
                const t = { width: 0, height: 0 },
                    {
                        chart: e,
                        options: { ticks: i, title: s, grid: n },
                    } = this,
                    o = this._isVisible(),
                    r = this.isHorizontal();
                if (o) {
                    const o = gs(s, e.options.font);
                    if ((r ? ((t.width = this.maxWidth), (t.height = fs(n) + o)) : ((t.height = this.maxHeight), (t.width = fs(n) + o)), i.display && this.ticks.length)) {
                        const { first: e, last: s, widest: n, highest: o } = this._getLabelSizes(),
                            a = 2 * i.padding,
                            h = ft(this.labelRotation),
                            l = Math.cos(h),
                            c = Math.sin(h);
                        if (r) {
                            const e = i.mirror ? 0 : c * n.width + l * o.height;
                            t.height = Math.min(this.maxHeight, t.height + e + a);
                        } else {
                            const e = i.mirror ? 0 : l * n.width + c * o.height;
                            t.width = Math.min(this.maxWidth, t.width + e + a);
                        }
                        this._calculatePadding(e, s, c, l);
                    }
                }
                this._handleMargins(),
                    r
                        ? ((this.width = this._length = e.width - this._margins.left - this._margins.right), (this.height = t.height))
                        : ((this.width = t.width), (this.height = this._length = e.height - this._margins.top - this._margins.bottom));
            }
            _calculatePadding(t, e, i, s) {
                const {
                        ticks: { align: n, padding: o },
                        position: r,
                    } = this.options,
                    a = 0 !== this.labelRotation,
                    h = "top" !== r && "x" === this.axis;
                if (this.isHorizontal()) {
                    const r = this.getPixelForTick(0) - this.left,
                        l = this.right - this.getPixelForTick(this.ticks.length - 1);
                    let c = 0,
                        d = 0;
                    a ? (h ? ((c = s * t.width), (d = i * e.height)) : ((c = i * t.height), (d = s * e.width))) : "start" === n ? (d = e.width) : "end" === n ? (c = t.width) : "inner" !== n && ((c = t.width / 2), (d = e.width / 2)),
                        (this.paddingLeft = Math.max(((c - r + o) * this.width) / (this.width - r), 0)),
                        (this.paddingRight = Math.max(((d - l + o) * this.width) / (this.width - l), 0));
                } else {
                    let i = e.height / 2,
                        s = t.height / 2;
                    "start" === n ? ((i = 0), (s = t.height)) : "end" === n && ((i = e.height), (s = 0)), (this.paddingTop = i + o), (this.paddingBottom = s + o);
                }
            }
            _handleMargins() {
                this._margins &&
                    ((this._margins.left = Math.max(this.paddingLeft, this._margins.left)),
                    (this._margins.top = Math.max(this.paddingTop, this._margins.top)),
                    (this._margins.right = Math.max(this.paddingRight, this._margins.right)),
                    (this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom)));
            }
            afterFit() {
                F(this.options.afterFit, [this]);
            }
            isHorizontal() {
                const { axis: t, position: e } = this.options;
                return "top" === e || "bottom" === e || "x" === t;
            }
            isFullSize() {
                return this.options.fullSize;
            }
            _convertTicksToLabels(t) {
                let e, i;
                for (this.beforeTickToLabelConversion(), this.generateTickLabels(t), e = 0, i = t.length; e < i; e++) A(t[e].label) && (t.splice(e, 1), i--, e--);
                this.afterTickToLabelConversion();
            }
            _getLabelSizes() {
                let t = this._labelSizes;
                if (!t) {
                    const e = this.options.ticks.sampleSize;
                    let i = this.ticks;
                    e < i.length && (i = ds(i, e)), (this._labelSizes = t = this._computeLabelSizes(i, i.length, this.options.ticks.maxTicksLimit));
                }
                return t;
            }
            _computeLabelSizes(t, e, i) {
                const { ctx: s, _longestTextCache: n } = this,
                    o = [],
                    r = [],
                    a = Math.floor(e / cs(e, i));
                let h,
                    l,
                    c,
                    d,
                    u,
                    f,
                    g,
                    p,
                    m,
                    x,
                    b,
                    y = 0,
                    _ = 0;
                for (h = 0; h < e; h += a) {
                    if (((d = t[h].label), (u = this._resolveTickFontOptions(h)), (s.font = f = u.string), (g = n[f] = n[f] || { data: {}, gc: [] }), (p = u.lineHeight), (m = x = 0), A(d) || E(d))) {
                        if (E(d)) for (l = 0, c = d.length; l < c; ++l) (b = d[l]), A(b) || E(b) || ((m = Zt(s, g.data, g.gc, m, b)), (x += p));
                    } else (m = Zt(s, g.data, g.gc, m, d)), (x = p);
                    o.push(m), r.push(x), (y = Math.max(m, y)), (_ = Math.max(x, _));
                }
                !(function (t, e) {
                    H(t, (t) => {
                        const i = t.gc,
                            s = i.length / 2;
                        let n;
                        if (s > e) {
                            for (n = 0; n < s; ++n) delete t.data[i[n]];
                            i.splice(0, s);
                        }
                    });
                })(n, e);
                const v = o.indexOf(y),
                    w = r.indexOf(_),
                    M = (t) => ({ width: o[t] || 0, height: r[t] || 0 });
                return { first: M(0), last: M(e - 1), widest: M(v), highest: M(w), widths: o, heights: r };
            }
            getLabelForValue(t) {
                return t;
            }
            getPixelForValue(t, e) {
                return NaN;
            }
            getValueForPixel(t) {}
            getPixelForTick(t) {
                const e = this.ticks;
                return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value);
            }
            getPixelForDecimal(t) {
                this._reversePixels && (t = 1 - t);
                const e = this._startPixel + t * this._length;
                return yt(this._alignToPixels ? Kt(this.chart, e, 0) : e, -32768, 32767);
            }
            getDecimalForPixel(t) {
                const e = (t - this._startPixel) / this._length;
                return this._reversePixels ? 1 - e : e;
            }
            getBasePixel() {
                return this.getPixelForValue(this.getBaseValue());
            }
            getBaseValue() {
                const { min: t, max: e } = this;
                return t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0;
            }
            getContext(t) {
                const e = this.ticks || [];
                if (t >= 0 && t < e.length) {
                    const i = e[t];
                    return (
                        i.$context ||
                        (i.$context = (function (t, e, i) {
                            return xe(t, { tick: i, index: e, type: "tick" });
                        })(this.getContext(), t, i))
                    );
                }
                return this.$context || (this.$context = xe(this.chart.getContext(), { scale: this, type: "scale" }));
            }
            _tickSize() {
                const t = this.options.ticks,
                    e = ft(this.labelRotation),
                    i = Math.abs(Math.cos(e)),
                    s = Math.abs(Math.sin(e)),
                    n = this._getLabelSizes(),
                    o = t.autoSkipPadding || 0,
                    r = n ? n.widest.width + o : 0,
                    a = n ? n.highest.height + o : 0;
                return this.isHorizontal() ? (a * i > r * s ? r / i : a / s) : a * s < r * i ? a / i : r / s;
            }
            _isVisible() {
                const t = this.options.display;
                return "auto" !== t ? !!t : this.getMatchingVisibleMetas().length > 0;
            }
            _computeGridLineItems(t) {
                const e = this.axis,
                    i = this.chart,
                    s = this.options,
                    { grid: n, position: o, border: r } = s,
                    a = n.offset,
                    h = this.isHorizontal(),
                    l = this.ticks.length + (a ? 1 : 0),
                    c = fs(n),
                    d = [],
                    u = r.setContext(this.getContext()),
                    f = u.display ? u.width : 0,
                    g = f / 2,
                    p = function (t) {
                        return Kt(i, t, f);
                    };
                let m, x, b, y, _, v, w, M, k, S, D, O;
                if ("top" === o) (m = p(this.bottom)), (v = this.bottom - c), (M = m - g), (S = p(t.top) + g), (O = t.bottom);
                else if ("bottom" === o) (m = p(this.top)), (S = t.top), (O = p(t.bottom) - g), (v = m + g), (M = this.top + c);
                else if ("left" === o) (m = p(this.right)), (_ = this.right - c), (w = m - g), (k = p(t.left) + g), (D = t.right);
                else if ("right" === o) (m = p(this.left)), (k = t.left), (D = p(t.right) - g), (_ = m + g), (w = this.left + c);
                else if ("x" === e) {
                    if ("center" === o) m = p((t.top + t.bottom) / 2 + 0.5);
                    else if (z(o)) {
                        const t = Object.keys(o)[0],
                            e = o[t];
                        m = p(this.chart.scales[t].getPixelForValue(e));
                    }
                    (S = t.top), (O = t.bottom), (v = m + g), (M = v + c);
                } else if ("y" === e) {
                    if ("center" === o) m = p((t.left + t.right) / 2);
                    else if (z(o)) {
                        const t = Object.keys(o)[0],
                            e = o[t];
                        m = p(this.chart.scales[t].getPixelForValue(e));
                    }
                    (_ = m - g), (w = _ - c), (k = t.left), (D = t.right);
                }
                const T = B(s.ticks.maxTicksLimit, l),
                    C = Math.max(1, Math.ceil(l / T));
                for (x = 0; x < l; x += C) {
                    const t = this.getContext(x),
                        e = n.setContext(t),
                        s = r.setContext(t),
                        o = e.lineWidth,
                        l = e.color,
                        c = s.dash || [],
                        u = s.dashOffset,
                        f = e.tickWidth,
                        g = e.tickColor,
                        p = e.tickBorderDash || [],
                        m = e.tickBorderDashOffset;
                    (b = us(this, x, a)),
                        void 0 !== b &&
                            ((y = Kt(i, b, o)),
                            h ? (_ = w = k = D = y) : (v = M = S = O = y),
                            d.push({ tx1: _, ty1: v, tx2: w, ty2: M, x1: k, y1: S, x2: D, y2: O, width: o, color: l, borderDash: c, borderDashOffset: u, tickWidth: f, tickColor: g, tickBorderDash: p, tickBorderDashOffset: m }));
                }
                return (this._ticksLength = l), (this._borderValue = m), d;
            }
            _computeLabelItems(t) {
                const e = this.axis,
                    i = this.options,
                    { position: s, ticks: n } = i,
                    o = this.isHorizontal(),
                    r = this.ticks,
                    { align: a, crossAlign: h, padding: l, mirror: c } = n,
                    d = fs(i.grid),
                    u = d + l,
                    f = c ? -l : u,
                    g = -ft(this.labelRotation),
                    p = [];
                let m,
                    x,
                    b,
                    y,
                    _,
                    v,
                    w,
                    M,
                    k,
                    S,
                    D,
                    O,
                    T = "middle";
                if ("top" === s) (v = this.bottom - f), (w = this._getXAxisLabelAlignment());
                else if ("bottom" === s) (v = this.top + f), (w = this._getXAxisLabelAlignment());
                else if ("left" === s) {
                    const t = this._getYAxisLabelAlignment(d);
                    (w = t.textAlign), (_ = t.x);
                } else if ("right" === s) {
                    const t = this._getYAxisLabelAlignment(d);
                    (w = t.textAlign), (_ = t.x);
                } else if ("x" === e) {
                    if ("center" === s) v = (t.top + t.bottom) / 2 + u;
                    else if (z(s)) {
                        const t = Object.keys(s)[0],
                            e = s[t];
                        v = this.chart.scales[t].getPixelForValue(e) + u;
                    }
                    w = this._getXAxisLabelAlignment();
                } else if ("y" === e) {
                    if ("center" === s) _ = (t.left + t.right) / 2 - u;
                    else if (z(s)) {
                        const t = Object.keys(s)[0],
                            e = s[t];
                        _ = this.chart.scales[t].getPixelForValue(e);
                    }
                    w = this._getYAxisLabelAlignment(d).textAlign;
                }
                "y" === e && ("start" === a ? (T = "top") : "end" === a && (T = "bottom"));
                const C = this._getLabelSizes();
                for (m = 0, x = r.length; m < x; ++m) {
                    (b = r[m]), (y = b.label);
                    const t = n.setContext(this.getContext(m));
                    (M = this.getPixelForTick(m) + n.labelOffset), (k = this._resolveTickFontOptions(m)), (S = k.lineHeight), (D = E(y) ? y.length : 1);
                    const e = D / 2,
                        i = t.color,
                        a = t.textStrokeColor,
                        l = t.textStrokeWidth;
                    let d,
                        u = w;
                    if (
                        (o
                            ? ((_ = M),
                              "inner" === w && (u = m === x - 1 ? (this.options.reverse ? "left" : "right") : 0 === m ? (this.options.reverse ? "right" : "left") : "center"),
                              (O =
                                  "top" === s
                                      ? "near" === h || 0 !== g
                                          ? -D * S + S / 2
                                          : "center" === h
                                          ? -C.highest.height / 2 - e * S + S
                                          : -C.highest.height + S / 2
                                      : "near" === h || 0 !== g
                                      ? S / 2
                                      : "center" === h
                                      ? C.highest.height / 2 - e * S
                                      : C.highest.height - D * S),
                              c && (O *= -1),
                              0 === g || t.showLabelBackdrop || (_ += (S / 2) * Math.sin(g)))
                            : ((v = M), (O = ((1 - D) * S) / 2)),
                        t.showLabelBackdrop)
                    ) {
                        const e = ge(t.backdropPadding),
                            i = C.heights[m],
                            s = C.widths[m];
                        let n = O - e.top,
                            o = 0 - e.left;
                        switch (T) {
                            case "middle":
                                n -= i / 2;
                                break;
                            case "bottom":
                                n -= i;
                        }
                        switch (w) {
                            case "center":
                                o -= s / 2;
                                break;
                            case "right":
                                o -= s;
                                break;
                            case "inner":
                                m === x - 1 ? (o -= s) : m > 0 && (o -= s / 2);
                        }
                        d = { left: o, top: n, width: s + e.width, height: i + e.height, color: t.backdropColor };
                    }
                    p.push({ label: y, font: k, textOffset: O, options: { rotation: g, color: i, strokeColor: a, strokeWidth: l, textAlign: u, textBaseline: T, translation: [_, v], backdrop: d } });
                }
                return p;
            }
            _getXAxisLabelAlignment() {
                const { position: t, ticks: e } = this.options;
                if (-ft(this.labelRotation)) return "top" === t ? "left" : "right";
                let i = "center";
                return "start" === e.align ? (i = "left") : "end" === e.align ? (i = "right") : "inner" === e.align && (i = "inner"), i;
            }
            _getYAxisLabelAlignment(t) {
                const {
                        position: e,
                        ticks: { crossAlign: i, mirror: s, padding: n },
                    } = this.options,
                    o = t + n,
                    r = this._getLabelSizes().widest.width;
                let a, h;
                return (
                    "left" === e
                        ? s
                            ? ((h = this.right + n), "near" === i ? (a = "left") : "center" === i ? ((a = "center"), (h += r / 2)) : ((a = "right"), (h += r)))
                            : ((h = this.right - o), "near" === i ? (a = "right") : "center" === i ? ((a = "center"), (h -= r / 2)) : ((a = "left"), (h = this.left)))
                        : "right" === e
                        ? s
                            ? ((h = this.left + n), "near" === i ? (a = "right") : "center" === i ? ((a = "center"), (h -= r / 2)) : ((a = "left"), (h -= r)))
                            : ((h = this.left + o), "near" === i ? (a = "left") : "center" === i ? ((a = "center"), (h += r / 2)) : ((a = "right"), (h = this.right)))
                        : (a = "right"),
                    { textAlign: a, x: h }
                );
            }
            _computeLabelArea() {
                if (this.options.ticks.mirror) return;
                const t = this.chart,
                    e = this.options.position;
                return "left" === e || "right" === e ? { top: 0, left: this.left, bottom: t.height, right: this.right } : "top" === e || "bottom" === e ? { top: this.top, left: 0, bottom: this.bottom, right: t.width } : void 0;
            }
            drawBackground() {
                const {
                    ctx: t,
                    options: { backgroundColor: e },
                    left: i,
                    top: s,
                    width: n,
                    height: o,
                } = this;
                e && (t.save(), (t.fillStyle = e), t.fillRect(i, s, n, o), t.restore());
            }
            getLineWidthForValue(t) {
                const e = this.options.grid;
                if (!this._isVisible() || !e.display) return 0;
                const i = this.ticks.findIndex((e) => e.value === t);
                return i >= 0 ? e.setContext(this.getContext(i)).lineWidth : 0;
            }
            drawGrid(t) {
                const e = this.options.grid,
                    i = this.ctx,
                    s = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(t));
                let n, o;
                const r = (t, e, s) => {
                    s.width &&
                        s.color &&
                        (i.save(),
                        (i.lineWidth = s.width),
                        (i.strokeStyle = s.color),
                        i.setLineDash(s.borderDash || []),
                        (i.lineDashOffset = s.borderDashOffset),
                        i.beginPath(),
                        i.moveTo(t.x, t.y),
                        i.lineTo(e.x, e.y),
                        i.stroke(),
                        i.restore());
                };
                if (e.display)
                    for (n = 0, o = s.length; n < o; ++n) {
                        const t = s[n];
                        e.drawOnChartArea && r({ x: t.x1, y: t.y1 }, { x: t.x2, y: t.y2 }, t),
                            e.drawTicks && r({ x: t.tx1, y: t.ty1 }, { x: t.tx2, y: t.ty2 }, { color: t.tickColor, width: t.tickWidth, borderDash: t.tickBorderDash, borderDashOffset: t.tickBorderDashOffset });
                    }
            }
            drawBorder() {
                const {
                        chart: t,
                        ctx: e,
                        options: { border: i, grid: s },
                    } = this,
                    n = i.setContext(this.getContext()),
                    o = i.display ? n.width : 0;
                if (!o) return;
                const r = s.setContext(this.getContext(0)).lineWidth,
                    a = this._borderValue;
                let h, l, c, d;
                this.isHorizontal() ? ((h = Kt(t, this.left, o) - o / 2), (l = Kt(t, this.right, r) + r / 2), (c = d = a)) : ((c = Kt(t, this.top, o) - o / 2), (d = Kt(t, this.bottom, r) + r / 2), (h = l = a)),
                    e.save(),
                    (e.lineWidth = n.width),
                    (e.strokeStyle = n.color),
                    e.beginPath(),
                    e.moveTo(h, c),
                    e.lineTo(l, d),
                    e.stroke(),
                    e.restore();
            }
            drawLabels(t) {
                if (!this.options.ticks.display) return;
                const e = this.ctx,
                    i = this._computeLabelArea();
                i && ee(e, i);
                const s = this.getLabelItems(t);
                for (const t of s) {
                    const i = t.options,
                        s = t.font;
                    ae(e, t.label, 0, t.textOffset, s, i);
                }
                i && ie(e);
            }
            drawTitle() {
                const {
                    ctx: t,
                    options: { position: e, title: i, reverse: s },
                } = this;
                if (!i.display) return;
                const n = pe(i.font),
                    o = ge(i.padding),
                    r = i.align;
                let a = n.lineHeight / 2;
                "bottom" === e || "center" === e || z(e) ? ((a += o.bottom), E(i.text) && (a += n.lineHeight * (i.text.length - 1))) : (a += o.top);
                const { titleX: h, titleY: l, maxWidth: c, rotation: d } = (function (t, e, i, s) {
                    const { top: n, left: o, bottom: r, right: a, chart: h } = t,
                        { chartArea: l, scales: c } = h;
                    let d,
                        u,
                        f,
                        g = 0;
                    const p = r - n,
                        m = a - o;
                    if (t.isHorizontal()) {
                        if (((u = Ct(s, o, a)), z(i))) {
                            const t = Object.keys(i)[0],
                                s = i[t];
                            f = c[t].getPixelForValue(s) + p - e;
                        } else f = "center" === i ? (l.bottom + l.top) / 2 + p - e : ls(t, i, e);
                        d = a - o;
                    } else {
                        if (z(i)) {
                            const t = Object.keys(i)[0],
                                s = i[t];
                            u = c[t].getPixelForValue(s) - m + e;
                        } else u = "center" === i ? (l.left + l.right) / 2 - m + e : ls(t, i, e);
                        (f = Ct(s, r, n)), (g = "left" === i ? -ot : ot);
                    }
                    return { titleX: u, titleY: f, maxWidth: d, rotation: g };
                })(this, a, e, r);
                ae(t, i.text, 0, 0, n, { color: i.color, maxWidth: c, rotation: d, textAlign: ps(r, e, s), textBaseline: "middle", translation: [h, l] });
            }
            draw(t) {
                this._isVisible() && (this.drawBackground(), this.drawGrid(t), this.drawBorder(), this.drawTitle(), this.drawLabels(t));
            }
            _layers() {
                const t = this.options,
                    e = (t.ticks && t.ticks.z) || 0,
                    i = B(t.grid && t.grid.z, -1),
                    s = B(t.border && t.border.z, 0);
                return this._isVisible() && this.draw === ms.prototype.draw
                    ? [
                          {
                              z: i,
                              draw: (t) => {
                                  this.drawBackground(), this.drawGrid(t), this.drawTitle();
                              },
                          },
                          {
                              z: s,
                              draw: () => {
                                  this.drawBorder();
                              },
                          },
                          {
                              z: e,
                              draw: (t) => {
                                  this.drawLabels(t);
                              },
                          },
                      ]
                    : [
                          {
                              z: e,
                              draw: (t) => {
                                  this.draw(t);
                              },
                          },
                      ];
            }
            getMatchingVisibleMetas(t) {
                const e = this.chart.getSortedVisibleDatasetMetas(),
                    i = this.axis + "AxisID",
                    s = [];
                let n, o;
                for (n = 0, o = e.length; n < o; ++n) {
                    const o = e[n];
                    o[i] !== this.id || (t && o.type !== t) || s.push(o);
                }
                return s;
            }
            _resolveTickFontOptions(t) {
                return pe(this.options.ticks.setContext(this.getContext(t)).font);
            }
            _maxDigits() {
                const t = this._resolveTickFontOptions(0).lineHeight;
                return (this.isHorizontal() ? this.width : this.height) / t;
            }
        }
        class xs {
            constructor(t, e, i) {
                (this.type = t), (this.scope = e), (this.override = i), (this.items = Object.create(null));
            }
            isForType(t) {
                return Object.prototype.isPrototypeOf.call(this.type.prototype, t.prototype);
            }
            register(t) {
                const e = Object.getPrototypeOf(t);
                let i;
                (function (t) {
                    return "id" in t && "defaults" in t;
                })(e) && (i = this.register(e));
                const s = this.items,
                    n = t.id,
                    o = this.scope + "." + n;
                if (!n) throw new Error("class does not have id: " + t);
                return (
                    n in s ||
                        ((s[n] = t),
                        (function (t, e, i) {
                            const s = V(Object.create(null), [i ? qt.get(i) : {}, qt.get(e), t.defaults]);
                            qt.set(e, s),
                                t.defaultRoutes &&
                                    (function (t, e) {
                                        Object.keys(e).forEach((i) => {
                                            const s = i.split("."),
                                                n = s.pop(),
                                                o = [t].concat(s).join("."),
                                                r = e[i].split("."),
                                                a = r.pop(),
                                                h = r.join(".");
                                            qt.route(o, n, h, a);
                                        });
                                    })(e, t.defaultRoutes),
                                t.descriptors && qt.describe(e, t.descriptors);
                        })(t, o, i),
                        this.override && qt.override(t.id, t.overrides)),
                    o
                );
            }
            get(t) {
                return this.items[t];
            }
            unregister(t) {
                const e = this.items,
                    i = t.id,
                    s = this.scope;
                i in e && delete e[i], s && i in qt[s] && (delete qt[s][i], this.override && delete jt[i]);
            }
        }
        class bs {
            constructor() {
                (this.controllers = new xs(wi, "datasets", !0)),
                    (this.elements = new xs(as, "elements")),
                    (this.plugins = new xs(Object, "plugins")),
                    (this.scales = new xs(ms, "scales")),
                    (this._typedRegistries = [this.controllers, this.scales, this.elements]);
            }
            add(...t) {
                this._each("register", t);
            }
            remove(...t) {
                this._each("unregister", t);
            }
            addControllers(...t) {
                this._each("register", t, this.controllers);
            }
            addElements(...t) {
                this._each("register", t, this.elements);
            }
            addPlugins(...t) {
                this._each("register", t, this.plugins);
            }
            addScales(...t) {
                this._each("register", t, this.scales);
            }
            getController(t) {
                return this._get(t, this.controllers, "controller");
            }
            getElement(t) {
                return this._get(t, this.elements, "element");
            }
            getPlugin(t) {
                return this._get(t, this.plugins, "plugin");
            }
            getScale(t) {
                return this._get(t, this.scales, "scale");
            }
            removeControllers(...t) {
                this._each("unregister", t, this.controllers);
            }
            removeElements(...t) {
                this._each("unregister", t, this.elements);
            }
            removePlugins(...t) {
                this._each("unregister", t, this.plugins);
            }
            removeScales(...t) {
                this._each("unregister", t, this.scales);
            }
            _each(t, e, i) {
                [...e].forEach((e) => {
                    const s = i || this._getRegistryForType(e);
                    i || s.isForType(e) || (s === this.plugins && e.id)
                        ? this._exec(t, s, e)
                        : H(e, (e) => {
                              const s = i || this._getRegistryForType(e);
                              this._exec(t, s, e);
                          });
                });
            }
            _exec(t, e, i) {
                const s = K(t);
                F(i["before" + s], [], i), e[t](i), F(i["after" + s], [], i);
            }
            _getRegistryForType(t) {
                for (let e = 0; e < this._typedRegistries.length; e++) {
                    const i = this._typedRegistries[e];
                    if (i.isForType(t)) return i;
                }
                return this.plugins;
            }
            _get(t, e, i) {
                const s = e.get(t);
                if (void 0 === s) throw new Error('"' + t + '" is not a registered ' + i + ".");
                return s;
            }
        }
        var ys = new bs();
        class _s {
            constructor() {
                this._init = [];
            }
            notify(t, e, i, s) {
                "beforeInit" === e && ((this._init = this._createDescriptors(t, !0)), this._notify(this._init, t, "install"));
                const n = s ? this._descriptors(t).filter(s) : this._descriptors(t),
                    o = this._notify(n, t, e, i);
                return "afterDestroy" === e && (this._notify(n, t, "stop"), this._notify(this._init, t, "uninstall")), o;
            }
            _notify(t, e, i, s) {
                s = s || {};
                for (const n of t) {
                    const t = n.plugin;
                    if (!1 === F(t[i], [e, s, n.options], t) && s.cancelable) return !1;
                }
                return !0;
            }
            invalidate() {
                A(this._cache) || ((this._oldCache = this._cache), (this._cache = void 0));
            }
            _descriptors(t) {
                if (this._cache) return this._cache;
                const e = (this._cache = this._createDescriptors(t));
                return this._notifyStateChanges(t), e;
            }
            _createDescriptors(t, e) {
                const i = t && t.config,
                    s = B(i.options && i.options.plugins, {}),
                    n = (function (t) {
                        const e = {},
                            i = [],
                            s = Object.keys(ys.plugins.items);
                        for (let t = 0; t < s.length; t++) i.push(ys.getPlugin(s[t]));
                        const n = t.plugins || [];
                        for (let t = 0; t < n.length; t++) {
                            const s = n[t];
                            -1 === i.indexOf(s) && (i.push(s), (e[s.id] = !0));
                        }
                        return { plugins: i, localIds: e };
                    })(i);
                return !1 !== s || e
                    ? (function (t, { plugins: e, localIds: i }, s, n) {
                          const o = [],
                              r = t.getContext();
                          for (const a of e) {
                              const e = a.id,
                                  h = vs(s[e], n);
                              null !== h && o.push({ plugin: a, options: ws(t.config, { plugin: a, local: i[e] }, h, r) });
                          }
                          return o;
                      })(t, n, s, e)
                    : [];
            }
            _notifyStateChanges(t) {
                const e = this._oldCache || [],
                    i = this._cache,
                    s = (t, e) => t.filter((t) => !e.some((e) => t.plugin.id === e.plugin.id));
                this._notify(s(e, i), t, "stop"), this._notify(s(i, e), t, "start");
            }
        }
        function vs(t, e) {
            return e || !1 !== t ? (!0 === t ? {} : t) : null;
        }
        function ws(t, { plugin: e, local: i }, s, n) {
            const o = t.pluginScopeKeys(e),
                r = t.getOptionScopes(s, o);
            return i && e.defaults && r.push(e.defaults), t.createResolver(r, n, [""], { scriptable: !1, indexable: !1, allKeys: !0 });
        }
        function Ms(t, e) {
            const i = qt.datasets[t] || {};
            return ((e.datasets || {})[t] || {}).indexAxis || e.indexAxis || i.indexAxis || "x";
        }
        function ks(t) {
            if ("x" === t || "y" === t || "r" === t) return t;
        }
        function Ss(t, ...e) {
            if (ks(t)) return t;
            for (const s of e) {
                const e = s.axis || ("top" === (i = s.position) || "bottom" === i ? "x" : "left" === i || "right" === i ? "y" : void 0) || (t.length > 1 && ks(t[0].toLowerCase()));
                if (e) return e;
            }
            var i;
            throw new Error(`Cannot determine type of '${t}' axis. Please provide 'axis' or 'position' option.`);
        }
        function Ds(t, e, i) {
            if (i[e + "AxisID"] === t) return { axis: e };
        }
        function Os(t) {
            const e = t.options || (t.options = {});
            (e.plugins = B(e.plugins, {})),
                (e.scales = (function (t, e) {
                    const i = jt[t.type] || { scales: {} },
                        s = e.scales || {},
                        n = Ms(t.type, e),
                        o = Object.create(null);
                    return (
                        Object.keys(s).forEach((e) => {
                            const r = s[e];
                            if (!z(r)) return console.error(`Invalid scale configuration for scale: ${e}`);
                            if (r._proxy) return console.warn(`Ignoring resolver passed as options for scale: ${e}`);
                            const a = Ss(
                                    e,
                                    r,
                                    (function (t, e) {
                                        if (e.data && e.data.datasets) {
                                            const i = e.data.datasets.filter((e) => e.xAxisID === t || e.yAxisID === t);
                                            if (i.length) return Ds(t, "x", i[0]) || Ds(t, "y", i[0]);
                                        }
                                        return {};
                                    })(e, t),
                                    qt.scales[r.type]
                                ),
                                h = (function (t, e) {
                                    return t === e ? "_index_" : "_value_";
                                })(a, n),
                                l = i.scales || {};
                            o[e] = U(Object.create(null), [{ axis: a }, r, l[a], l[h]]);
                        }),
                        t.data.datasets.forEach((i) => {
                            const n = i.type || t.type,
                                r = i.indexAxis || Ms(n, e),
                                a = (jt[n] || {}).scales || {};
                            Object.keys(a).forEach((t) => {
                                const e = (function (t, e) {
                                        let i = t;
                                        return "_index_" === t ? (i = e) : "_value_" === t && (i = "x" === e ? "y" : "x"), i;
                                    })(t, r),
                                    n = i[e + "AxisID"] || e;
                                (o[n] = o[n] || Object.create(null)), U(o[n], [{ axis: e }, s[n], a[t]]);
                            });
                        }),
                        Object.keys(o).forEach((t) => {
                            const e = o[t];
                            U(e, [qt.scales[e.type], qt.scale]);
                        }),
                        o
                    );
                })(t, e));
        }
        function Ts(t) {
            return ((t = t || {}).datasets = t.datasets || []), (t.labels = t.labels || []), t;
        }
        const Cs = new Map(),
            Ps = new Set();
        function Is(t, e) {
            let i = Cs.get(t);
            return i || ((i = e()), Cs.set(t, i), Ps.add(i)), i;
        }
        const Ls = (t, e, i) => {
            const s = Z(e, i);
            void 0 !== s && t.add(s);
        };
        class As {
            constructor(t) {
                (this._config = (function (t) {
                    return ((t = t || {}).data = Ts(t.data)), Os(t), t;
                })(t)),
                    (this._scopeCache = new Map()),
                    (this._resolverCache = new Map());
            }
            get platform() {
                return this._config.platform;
            }
            get type() {
                return this._config.type;
            }
            set type(t) {
                this._config.type = t;
            }
            get data() {
                return this._config.data;
            }
            set data(t) {
                this._config.data = Ts(t);
            }
            get options() {
                return this._config.options;
            }
            set options(t) {
                this._config.options = t;
            }
            get plugins() {
                return this._config.plugins;
            }
            update() {
                const t = this._config;
                this.clearCache(), Os(t);
            }
            clearCache() {
                this._scopeCache.clear(), this._resolverCache.clear();
            }
            datasetScopeKeys(t) {
                return Is(t, () => [[`datasets.${t}`, ""]]);
            }
            datasetAnimationScopeKeys(t, e) {
                return Is(`${t}.transition.${e}`, () => [
                    [`datasets.${t}.transitions.${e}`, `transitions.${e}`],
                    [`datasets.${t}`, ""],
                ]);
            }
            datasetElementScopeKeys(t, e) {
                return Is(`${t}-${e}`, () => [[`datasets.${t}.elements.${e}`, `datasets.${t}`, `elements.${e}`, ""]]);
            }
            pluginScopeKeys(t) {
                const e = t.id;
                return Is(`${this.type}-plugin-${e}`, () => [[`plugins.${e}`, ...(t.additionalOptionScopes || [])]]);
            }
            _cachedScopes(t, e) {
                const i = this._scopeCache;
                let s = i.get(t);
                return (s && !e) || ((s = new Map()), i.set(t, s)), s;
            }
            getOptionScopes(t, e, i) {
                const { options: s, type: n } = this,
                    o = this._cachedScopes(t, i),
                    r = o.get(e);
                if (r) return r;
                const a = new Set();
                e.forEach((e) => {
                    t && (a.add(t), e.forEach((e) => Ls(a, t, e))), e.forEach((t) => Ls(a, s, t)), e.forEach((t) => Ls(a, jt[n] || {}, t)), e.forEach((t) => Ls(a, qt, t)), e.forEach((t) => Ls(a, Nt, t));
                });
                const h = Array.from(a);
                return 0 === h.length && h.push(Object.create(null)), Ps.has(e) && o.set(e, h), h;
            }
            chartOptionScopes() {
                const { options: t, type: e } = this;
                return [t, jt[e] || {}, qt.datasets[e] || {}, { type: e }, qt, Nt];
            }
            resolveNamedOptions(t, e, i, s = [""]) {
                const n = { $shared: !0 },
                    { resolver: o, subPrefixes: r } = Es(this._resolverCache, t, s);
                let a = o;
                (function (t, e) {
                    const { isScriptable: i, isIndexable: s } = _e(t);
                    for (const n of e) {
                        const e = i(n),
                            o = s(n),
                            r = (o || e) && t[n];
                        if ((e && (Q(r) || zs(r))) || (o && E(r))) return !0;
                    }
                    return !1;
                })(o, e) && ((n.$shared = !1), (a = ye(o, (i = Q(i) ? i() : i), this.createResolver(t, i, r))));
                for (const t of e) n[t] = a[t];
                return n;
            }
            createResolver(t, e, i = [""], s) {
                const { resolver: n } = Es(this._resolverCache, t, i);
                return z(e) ? ye(n, e, void 0, s) : n;
            }
        }
        function Es(t, e, i) {
            let s = t.get(e);
            s || ((s = new Map()), t.set(e, s));
            const n = i.join();
            let o = s.get(n);
            return o || ((o = { resolver: be(e, i), subPrefixes: i.filter((t) => !t.toLowerCase().includes("hover")) }), s.set(n, o)), o;
        }
        const zs = (t) => z(t) && Object.getOwnPropertyNames(t).some((e) => Q(t[e])),
            $s = ["top", "bottom", "left", "right", "chartArea"];
        function Rs(t, e) {
            return "top" === t || "bottom" === t || (-1 === $s.indexOf(t) && "x" === e);
        }
        function Bs(t, e) {
            return function (i, s) {
                return i[t] === s[t] ? i[e] - s[e] : i[t] - s[t];
            };
        }
        function Fs(t) {
            const e = t.chart,
                i = e.options.animation;
            e.notifyPlugins("afterRender"), F(i && i.onComplete, [t], e);
        }
        function Hs(t) {
            const e = t.chart,
                i = e.options.animation;
            F(i && i.onProgress, [t], e);
        }
        function Ws(t) {
            return Re() && "string" == typeof t ? (t = document.getElementById(t)) : t && t.length && (t = t[0]), t && t.canvas && (t = t.canvas), t;
        }
        const Ys = {},
            js = (t) => {
                const e = Ws(t);
                return Object.values(Ys)
                    .filter((t) => t.canvas === e)
                    .pop();
            };
        function Ns(t, e, i) {
            const s = Object.keys(t);
            for (const n of s) {
                const s = +n;
                if (s >= e) {
                    const o = t[n];
                    delete t[n], (i > 0 || s > e) && (t[s + i] = o);
                }
            }
        }
        function Vs(t, e, i) {
            return t.options.clip ? t[i] : e[i];
        }
        class Us {
            static defaults = qt;
            static instances = Ys;
            static overrides = jt;
            static registry = ys;
            static version = "4.4.5";
            static getChart = js;
            static register(...t) {
                ys.add(...t), Xs();
            }
            static unregister(...t) {
                ys.remove(...t), Xs();
            }
            constructor(t, e) {
                const i = (this.config = new As(e)),
                    s = Ws(t),
                    n = js(s);
                if (n) throw new Error("Canvas is already in use. Chart with ID '" + n.id + "' must be destroyed before the canvas with ID '" + n.canvas.id + "' can be reused.");
                const o = i.createResolver(i.chartOptionScopes(), this.getContext());
                (this.platform = new (i.platform ||
                    (function (t) {
                        return !Re() || ("undefined" != typeof OffscreenCanvas && t instanceof OffscreenCanvas) ? Vi : rs;
                    })(s))()),
                    this.platform.updateConfig(i);
                const r = this.platform.acquireContext(s, o.aspectRatio),
                    a = r && r.canvas,
                    h = a && a.height,
                    l = a && a.width;
                (this.id = L()),
                    (this.ctx = r),
                    (this.canvas = a),
                    (this.width = l),
                    (this.height = h),
                    (this._options = o),
                    (this._aspectRatio = this.aspectRatio),
                    (this._layers = []),
                    (this._metasets = []),
                    (this._stacks = void 0),
                    (this.boxes = []),
                    (this.currentDevicePixelRatio = void 0),
                    (this.chartArea = void 0),
                    (this._active = []),
                    (this._lastEvent = void 0),
                    (this._listeners = {}),
                    (this._responsiveListeners = void 0),
                    (this._sortedMetasets = []),
                    (this.scales = {}),
                    (this._plugins = new _s()),
                    (this.$proxies = {}),
                    (this._hiddenIndices = {}),
                    (this.attached = !1),
                    (this._animationsDisabled = void 0),
                    (this.$context = void 0),
                    (this._doResize = (function (t, e) {
                        let i;
                        return function (...s) {
                            return e ? (clearTimeout(i), (i = setTimeout(t, e, s))) : t.apply(this, s), e;
                        };
                    })((t) => this.update(t), o.resizeDelay || 0)),
                    (this._dataChanges = []),
                    (Ys[this.id] = this),
                    r && a ? (ri.listen(this, "complete", Fs), ri.listen(this, "progress", Hs), this._initialize(), this.attached && this.update()) : console.error("Failed to create chart: can't acquire context from the given item");
            }
            get aspectRatio() {
                const {
                    options: { aspectRatio: t, maintainAspectRatio: e },
                    width: i,
                    height: s,
                    _aspectRatio: n,
                } = this;
                return A(t) ? (e && n ? n : s ? i / s : null) : t;
            }
            get data() {
                return this.config.data;
            }
            set data(t) {
                this.config.data = t;
            }
            get options() {
                return this._options;
            }
            set options(t) {
                this.config.options = t;
            }
            get registry() {
                return ys;
            }
            _initialize() {
                return this.notifyPlugins("beforeInit"), this.options.responsive ? this.resize() : Ve(this, this.options.devicePixelRatio), this.bindEvents(), this.notifyPlugins("afterInit"), this;
            }
            clear() {
                return Gt(this.canvas, this.ctx), this;
            }
            stop() {
                return ri.stop(this), this;
            }
            resize(t, e) {
                ri.running(this) ? (this._resizeBeforeDraw = { width: t, height: e }) : this._resize(t, e);
            }
            _resize(t, e) {
                const i = this.options,
                    s = this.canvas,
                    n = i.maintainAspectRatio && this.aspectRatio,
                    o = this.platform.getMaximumSize(s, t, e, n),
                    r = i.devicePixelRatio || this.platform.getDevicePixelRatio(),
                    a = this.width ? "resize" : "attach";
                (this.width = o.width),
                    (this.height = o.height),
                    (this._aspectRatio = this.aspectRatio),
                    Ve(this, r, !0) && (this.notifyPlugins("resize", { size: o }), F(i.onResize, [this, o], this), this.attached && this._doResize(a) && this.render());
            }
            ensureScalesHaveIDs() {
                H(this.options.scales || {}, (t, e) => {
                    t.id = e;
                });
            }
            buildOrUpdateScales() {
                const t = this.options,
                    e = t.scales,
                    i = this.scales,
                    s = Object.keys(i).reduce((t, e) => ((t[e] = !1), t), {});
                let n = [];
                e &&
                    (n = n.concat(
                        Object.keys(e).map((t) => {
                            const i = e[t],
                                s = Ss(t, i),
                                n = "r" === s,
                                o = "x" === s;
                            return { options: i, dposition: n ? "chartArea" : o ? "bottom" : "left", dtype: n ? "radialLinear" : o ? "category" : "linear" };
                        })
                    )),
                    H(n, (e) => {
                        const n = e.options,
                            o = n.id,
                            r = Ss(o, n),
                            a = B(n.type, e.dtype);
                        (void 0 !== n.position && Rs(n.position, r) === Rs(e.dposition)) || (n.position = e.dposition), (s[o] = !0);
                        let h = null;
                        o in i && i[o].type === a ? (h = i[o]) : ((h = new (ys.getScale(a))({ id: o, type: a, ctx: this.ctx, chart: this })), (i[h.id] = h)), h.init(n, t);
                    }),
                    H(s, (t, e) => {
                        t || delete i[e];
                    }),
                    H(i, (t) => {
                        ji.configure(this, t, t.options), ji.addBox(this, t);
                    });
            }
            _updateMetasets() {
                const t = this._metasets,
                    e = this.data.datasets.length,
                    i = t.length;
                if ((t.sort((t, e) => t.index - e.index), i > e)) {
                    for (let t = e; t < i; ++t) this._destroyDatasetMeta(t);
                    t.splice(e, i - e);
                }
                this._sortedMetasets = t.slice(0).sort(Bs("order", "index"));
            }
            _removeUnreferencedMetasets() {
                const {
                    _metasets: t,
                    data: { datasets: e },
                } = this;
                t.length > e.length && delete this._stacks,
                    t.forEach((t, i) => {
                        0 === e.filter((e) => e === t._dataset).length && this._destroyDatasetMeta(i);
                    });
            }
            buildOrUpdateControllers() {
                const t = [],
                    e = this.data.datasets;
                let i, s;
                for (this._removeUnreferencedMetasets(), i = 0, s = e.length; i < s; i++) {
                    const s = e[i];
                    let n = this.getDatasetMeta(i);
                    const o = s.type || this.config.type;
                    if (
                        (n.type && n.type !== o && (this._destroyDatasetMeta(i), (n = this.getDatasetMeta(i))),
                        (n.type = o),
                        (n.indexAxis = s.indexAxis || Ms(o, this.options)),
                        (n.order = s.order || 0),
                        (n.index = i),
                        (n.label = "" + s.label),
                        (n.visible = this.isDatasetVisible(i)),
                        n.controller)
                    )
                        n.controller.updateIndex(i), n.controller.linkScales();
                    else {
                        const e = ys.getController(o),
                            { datasetElementType: s, dataElementType: r } = qt.datasets[o];
                        Object.assign(e, { dataElementType: ys.getElement(r), datasetElementType: s && ys.getElement(s) }), (n.controller = new e(this, i)), t.push(n.controller);
                    }
                }
                return this._updateMetasets(), t;
            }
            _resetElements() {
                H(
                    this.data.datasets,
                    (t, e) => {
                        this.getDatasetMeta(e).controller.reset();
                    },
                    this
                );
            }
            reset() {
                this._resetElements(), this.notifyPlugins("reset");
            }
            update(t) {
                const e = this.config;
                e.update();
                const i = (this._options = e.createResolver(e.chartOptionScopes(), this.getContext())),
                    s = (this._animationsDisabled = !i.animation);
                if ((this._updateScales(), this._checkEventBindings(), this._updateHiddenIndices(), this._plugins.invalidate(), !1 === this.notifyPlugins("beforeUpdate", { mode: t, cancelable: !0 }))) return;
                const n = this.buildOrUpdateControllers();
                this.notifyPlugins("beforeElementsUpdate");
                let o = 0;
                for (let t = 0, e = this.data.datasets.length; t < e; t++) {
                    const { controller: e } = this.getDatasetMeta(t),
                        i = !s && -1 === n.indexOf(e);
                    e.buildOrUpdateElements(i), (o = Math.max(+e.getMaxOverflow(), o));
                }
                (o = this._minPadding = i.layout.autoPadding ? o : 0),
                    this._updateLayout(o),
                    s ||
                        H(n, (t) => {
                            t.reset();
                        }),
                    this._updateDatasets(t),
                    this.notifyPlugins("afterUpdate", { mode: t }),
                    this._layers.sort(Bs("z", "_idx"));
                const { _active: r, _lastEvent: a } = this;
                a ? this._eventHandler(a, !0) : r.length && this._updateHoverStyles(r, r, !0), this.render();
            }
            _updateScales() {
                H(this.scales, (t) => {
                    ji.removeBox(this, t);
                }),
                    this.ensureScalesHaveIDs(),
                    this.buildOrUpdateScales();
            }
            _checkEventBindings() {
                const t = this.options,
                    e = new Set(Object.keys(this._listeners)),
                    i = new Set(t.events);
                (J(e, i) && !!this._responsiveListeners === t.responsive) || (this.unbindEvents(), this.bindEvents());
            }
            _updateHiddenIndices() {
                const { _hiddenIndices: t } = this,
                    e = this._getUniformDataChanges() || [];
                for (const { method: i, start: s, count: n } of e) Ns(t, s, "_removeElements" === i ? -n : n);
            }
            _getUniformDataChanges() {
                const t = this._dataChanges;
                if (!t || !t.length) return;
                this._dataChanges = [];
                const e = this.data.datasets.length,
                    i = (e) => new Set(t.filter((t) => t[0] === e).map((t, e) => e + "," + t.splice(1).join(","))),
                    s = i(0);
                for (let t = 1; t < e; t++) if (!J(s, i(t))) return;
                return Array.from(s)
                    .map((t) => t.split(","))
                    .map((t) => ({ method: t[1], start: +t[2], count: +t[3] }));
            }
            _updateLayout(t) {
                if (!1 === this.notifyPlugins("beforeLayout", { cancelable: !0 })) return;
                ji.update(this, this.width, this.height, t);
                const e = this.chartArea,
                    i = e.width <= 0 || e.height <= 0;
                (this._layers = []),
                    H(
                        this.boxes,
                        (t) => {
                            (i && "chartArea" === t.position) || (t.configure && t.configure(), this._layers.push(...t._layers()));
                        },
                        this
                    ),
                    this._layers.forEach((t, e) => {
                        t._idx = e;
                    }),
                    this.notifyPlugins("afterLayout");
            }
            _updateDatasets(t) {
                if (!1 !== this.notifyPlugins("beforeDatasetsUpdate", { mode: t, cancelable: !0 })) {
                    for (let t = 0, e = this.data.datasets.length; t < e; ++t) this.getDatasetMeta(t).controller.configure();
                    for (let e = 0, i = this.data.datasets.length; e < i; ++e) this._updateDataset(e, Q(t) ? t({ datasetIndex: e }) : t);
                    this.notifyPlugins("afterDatasetsUpdate", { mode: t });
                }
            }
            _updateDataset(t, e) {
                const i = this.getDatasetMeta(t),
                    s = { meta: i, index: t, mode: e, cancelable: !0 };
                !1 !== this.notifyPlugins("beforeDatasetUpdate", s) && (i.controller._update(e), (s.cancelable = !1), this.notifyPlugins("afterDatasetUpdate", s));
            }
            render() {
                !1 !== this.notifyPlugins("beforeRender", { cancelable: !0 }) && (ri.has(this) ? this.attached && !ri.running(this) && ri.start(this) : (this.draw(), Fs({ chart: this })));
            }
            draw() {
                let t;
                if (this._resizeBeforeDraw) {
                    const { width: t, height: e } = this._resizeBeforeDraw;
                    (this._resizeBeforeDraw = null), this._resize(t, e);
                }
                if ((this.clear(), this.width <= 0 || this.height <= 0)) return;
                if (!1 === this.notifyPlugins("beforeDraw", { cancelable: !0 })) return;
                const e = this._layers;
                for (t = 0; t < e.length && e[t].z <= 0; ++t) e[t].draw(this.chartArea);
                for (this._drawDatasets(); t < e.length; ++t) e[t].draw(this.chartArea);
                this.notifyPlugins("afterDraw");
            }
            _getSortedDatasetMetas(t) {
                const e = this._sortedMetasets,
                    i = [];
                let s, n;
                for (s = 0, n = e.length; s < n; ++s) {
                    const n = e[s];
                    (t && !n.visible) || i.push(n);
                }
                return i;
            }
            getSortedVisibleDatasetMetas() {
                return this._getSortedDatasetMetas(!0);
            }
            _drawDatasets() {
                if (!1 === this.notifyPlugins("beforeDatasetsDraw", { cancelable: !0 })) return;
                const t = this.getSortedVisibleDatasetMetas();
                for (let e = t.length - 1; e >= 0; --e) this._drawDataset(t[e]);
                this.notifyPlugins("afterDatasetsDraw");
            }
            _drawDataset(t) {
                const e = this.ctx,
                    i = t._clip,
                    s = !i.disabled,
                    n = (function (t, e) {
                        const { xScale: i, yScale: s } = t;
                        return i && s ? { left: Vs(i, e, "left"), right: Vs(i, e, "right"), top: Vs(s, e, "top"), bottom: Vs(s, e, "bottom") } : e;
                    })(t, this.chartArea),
                    o = { meta: t, index: t.index, cancelable: !0 };
                !1 !== this.notifyPlugins("beforeDatasetDraw", o) &&
                    (s && ee(e, { left: !1 === i.left ? 0 : n.left - i.left, right: !1 === i.right ? this.width : n.right + i.right, top: !1 === i.top ? 0 : n.top - i.top, bottom: !1 === i.bottom ? this.height : n.bottom + i.bottom }),
                    t.controller.draw(),
                    s && ie(e),
                    (o.cancelable = !1),
                    this.notifyPlugins("afterDatasetDraw", o));
            }
            isPointInArea(t) {
                return te(t, this.chartArea, this._minPadding);
            }
            getElementsAtEventForMode(t, e, i, s) {
                const n = Ii.modes[e];
                return "function" == typeof n ? n(this, t, i, s) : [];
            }
            getDatasetMeta(t) {
                const e = this.data.datasets[t],
                    i = this._metasets;
                let s = i.filter((t) => t && t._dataset === e).pop();
                return s || ((s = { type: null, data: [], dataset: null, controller: null, hidden: null, xAxisID: null, yAxisID: null, order: (e && e.order) || 0, index: t, _dataset: e, _parsed: [], _sorted: !1 }), i.push(s)), s;
            }
            getContext() {
                return this.$context || (this.$context = xe(null, { chart: this, type: "chart" }));
            }
            getVisibleDatasetCount() {
                return this.getSortedVisibleDatasetMetas().length;
            }
            isDatasetVisible(t) {
                const e = this.data.datasets[t];
                if (!e) return !1;
                const i = this.getDatasetMeta(t);
                return "boolean" == typeof i.hidden ? !i.hidden : !e.hidden;
            }
            setDatasetVisibility(t, e) {
                this.getDatasetMeta(t).hidden = !e;
            }
            toggleDataVisibility(t) {
                this._hiddenIndices[t] = !this._hiddenIndices[t];
            }
            getDataVisibility(t) {
                return !this._hiddenIndices[t];
            }
            _updateVisibility(t, e, i) {
                const s = i ? "show" : "hide",
                    n = this.getDatasetMeta(t),
                    o = n.controller._resolveAnimations(void 0, s);
                G(e) ? ((n.data[e].hidden = !i), this.update()) : (this.setDatasetVisibility(t, i), o.update(n, { visible: i }), this.update((e) => (e.datasetIndex === t ? s : void 0)));
            }
            hide(t, e) {
                this._updateVisibility(t, e, !1);
            }
            show(t, e) {
                this._updateVisibility(t, e, !0);
            }
            _destroyDatasetMeta(t) {
                const e = this._metasets[t];
                e && e.controller && e.controller._destroy(), delete this._metasets[t];
            }
            _stop() {
                let t, e;
                for (this.stop(), ri.remove(this), t = 0, e = this.data.datasets.length; t < e; ++t) this._destroyDatasetMeta(t);
            }
            destroy() {
                this.notifyPlugins("beforeDestroy");
                const { canvas: t, ctx: e } = this;
                this._stop(), this.config.clearCache(), t && (this.unbindEvents(), Gt(t, e), this.platform.releaseContext(e), (this.canvas = null), (this.ctx = null)), delete Ys[this.id], this.notifyPlugins("afterDestroy");
            }
            toBase64Image(...t) {
                return this.canvas.toDataURL(...t);
            }
            bindEvents() {
                this.bindUserEvents(), this.options.responsive ? this.bindResponsiveEvents() : (this.attached = !0);
            }
            bindUserEvents() {
                const t = this._listeners,
                    e = this.platform,
                    i = (i, s) => {
                        e.addEventListener(this, i, s), (t[i] = s);
                    },
                    s = (t, e, i) => {
                        (t.offsetX = e), (t.offsetY = i), this._eventHandler(t);
                    };
                H(this.options.events, (t) => i(t, s));
            }
            bindResponsiveEvents() {
                this._responsiveListeners || (this._responsiveListeners = {});
                const t = this._responsiveListeners,
                    e = this.platform,
                    i = (i, s) => {
                        e.addEventListener(this, i, s), (t[i] = s);
                    },
                    s = (i, s) => {
                        t[i] && (e.removeEventListener(this, i, s), delete t[i]);
                    },
                    n = (t, e) => {
                        this.canvas && this.resize(t, e);
                    };
                let o;
                const r = () => {
                    s("attach", r), (this.attached = !0), this.resize(), i("resize", n), i("detach", o);
                };
                (o = () => {
                    (this.attached = !1), s("resize", n), this._stop(), this._resize(0, 0), i("attach", r);
                }),
                    e.isAttached(this.canvas) ? r() : o();
            }
            unbindEvents() {
                H(this._listeners, (t, e) => {
                    this.platform.removeEventListener(this, e, t);
                }),
                    (this._listeners = {}),
                    H(this._responsiveListeners, (t, e) => {
                        this.platform.removeEventListener(this, e, t);
                    }),
                    (this._responsiveListeners = void 0);
            }
            updateHoverStyle(t, e, i) {
                const s = i ? "set" : "remove";
                let n, o, r, a;
                for ("dataset" === e && ((n = this.getDatasetMeta(t[0].datasetIndex)), n.controller["_" + s + "DatasetHoverStyle"]()), r = 0, a = t.length; r < a; ++r) {
                    o = t[r];
                    const e = o && this.getDatasetMeta(o.datasetIndex).controller;
                    e && e[s + "HoverStyle"](o.element, o.datasetIndex, o.index);
                }
            }
            getActiveElements() {
                return this._active || [];
            }
            setActiveElements(t) {
                const e = this._active || [],
                    i = t.map(({ datasetIndex: t, index: e }) => {
                        const i = this.getDatasetMeta(t);
                        if (!i) throw new Error("No dataset found at index " + t);
                        return { datasetIndex: t, element: i.data[e], index: e };
                    });
                !W(i, e) && ((this._active = i), (this._lastEvent = null), this._updateHoverStyles(i, e));
            }
            notifyPlugins(t, e, i) {
                return this._plugins.notify(this, t, e, i);
            }
            isPluginEnabled(t) {
                return 1 === this._plugins._cache.filter((e) => e.plugin.id === t).length;
            }
            _updateHoverStyles(t, e, i) {
                const s = this.options.hover,
                    n = (t, e) => t.filter((t) => !e.some((e) => t.datasetIndex === e.datasetIndex && t.index === e.index)),
                    o = n(e, t),
                    r = i ? t : n(t, e);
                o.length && this.updateHoverStyle(o, s.mode, !1), r.length && s.mode && this.updateHoverStyle(r, s.mode, !0);
            }
            _eventHandler(t, e) {
                const i = { event: t, replay: e, cancelable: !0, inChartArea: this.isPointInArea(t) },
                    s = (e) => (e.options.events || this.options.events).includes(t.native.type);
                if (!1 === this.notifyPlugins("beforeEvent", i, s)) return;
                const n = this._handleEvent(t, e, i.inChartArea);
                return (i.cancelable = !1), this.notifyPlugins("afterEvent", i, s), (n || i.changed) && this.render(), this;
            }
            _handleEvent(t, e, i) {
                const { _active: s = [], options: n } = this,
                    o = e,
                    r = this._getActiveElements(t, s, i, o),
                    a = (function (t) {
                        return "mouseup" === t.type || "click" === t.type || "contextmenu" === t.type;
                    })(t),
                    h = (function (t, e, i, s) {
                        return i && "mouseout" !== t.type ? (s ? e : t) : null;
                    })(t, this._lastEvent, i, a);
                i && ((this._lastEvent = null), F(n.onHover, [t, r, this], this), a && F(n.onClick, [t, r, this], this));
                const l = !W(r, s);
                return (l || e) && ((this._active = r), this._updateHoverStyles(r, s, e)), (this._lastEvent = h), l;
            }
            _getActiveElements(t, e, i, s) {
                if ("mouseout" === t.type) return [];
                if (!i) return e;
                const n = this.options.hover;
                return this.getElementsAtEventForMode(t, n.mode, n, s);
            }
        }
        function Xs() {
            return H(Us.instances, (t) => t._plugins.invalidate());
        }
        function qs(t, e, i = e) {
            (t.lineCap = B(i.borderCapStyle, e.borderCapStyle)),
                t.setLineDash(B(i.borderDash, e.borderDash)),
                (t.lineDashOffset = B(i.borderDashOffset, e.borderDashOffset)),
                (t.lineJoin = B(i.borderJoinStyle, e.borderJoinStyle)),
                (t.lineWidth = B(i.borderWidth, e.borderWidth)),
                (t.strokeStyle = B(i.borderColor, e.borderColor));
        }
        function Zs(t, e, i) {
            t.lineTo(i.x, i.y);
        }
        function Ks(t, e, i = {}) {
            const s = t.length,
                { start: n = 0, end: o = s - 1 } = i,
                { start: r, end: a } = e,
                h = Math.max(n, r),
                l = Math.min(o, a),
                c = (n < r && o < r) || (n > a && o > a);
            return { count: s, start: h, loop: e.loop, ilen: l < h && !c ? s + l - h : l - h };
        }
        function Gs(t, e, i, s) {
            const { points: n, options: o } = e,
                { count: r, start: a, loop: h, ilen: l } = Ks(n, i, s),
                c = (function (t) {
                    return t.stepped ? se : t.tension || "monotone" === t.cubicInterpolationMode ? ne : Zs;
                })(o);
            let d,
                u,
                f,
                { move: g = !0, reverse: p } = s || {};
            for (d = 0; d <= l; ++d) (u = n[(a + (p ? l - d : d)) % r]), u.skip || (g ? (t.moveTo(u.x, u.y), (g = !1)) : c(t, f, u, p, o.stepped), (f = u));
            return h && ((u = n[(a + (p ? l : 0)) % r]), c(t, f, u, p, o.stepped)), !!h;
        }
        function Qs(t, e, i, s) {
            const n = e.points,
                { count: o, start: r, ilen: a } = Ks(n, i, s),
                { move: h = !0, reverse: l } = s || {};
            let c,
                d,
                u,
                f,
                g,
                p,
                m = 0,
                x = 0;
            const b = (t) => (r + (l ? a - t : t)) % o,
                y = () => {
                    f !== g && (t.lineTo(m, g), t.lineTo(m, f), t.lineTo(m, p));
                };
            for (h && ((d = n[b(0)]), t.moveTo(d.x, d.y)), c = 0; c <= a; ++c) {
                if (((d = n[b(c)]), d.skip)) continue;
                const e = d.x,
                    i = d.y,
                    s = 0 | e;
                s === u ? (i < f ? (f = i) : i > g && (g = i), (m = (x * m + e) / ++x)) : (y(), t.lineTo(e, i), (u = s), (x = 0), (f = g = i)), (p = i);
            }
            y();
        }
        function Js(t) {
            const e = t.options,
                i = e.borderDash && e.borderDash.length;
            return t._decimated || t._loop || e.tension || "monotone" === e.cubicInterpolationMode || e.stepped || i ? Gs : Qs;
        }
        const tn = "function" == typeof Path2D;
        function en(t, e, i, s) {
            const n = t.options,
                { [i]: o } = t.getProps([i], s);
            return Math.abs(e - o) < n.radius + n.hitRadius;
        }
        const sn = (t, e) => {
            let { boxHeight: i = e, boxWidth: s = e } = t;
            return t.usePointStyle && ((i = Math.min(i, e)), (s = t.pointStyleWidth || Math.min(s, e))), { boxWidth: s, boxHeight: i, itemHeight: Math.max(e, i) };
        };
        class nn extends as {
            constructor(t) {
                super(),
                    (this._added = !1),
                    (this.legendHitBoxes = []),
                    (this._hoveredItem = null),
                    (this.doughnutMode = !1),
                    (this.chart = t.chart),
                    (this.options = t.options),
                    (this.ctx = t.ctx),
                    (this.legendItems = void 0),
                    (this.columnSizes = void 0),
                    (this.lineWidths = void 0),
                    (this.maxHeight = void 0),
                    (this.maxWidth = void 0),
                    (this.top = void 0),
                    (this.bottom = void 0),
                    (this.left = void 0),
                    (this.right = void 0),
                    (this.height = void 0),
                    (this.width = void 0),
                    (this._margins = void 0),
                    (this.position = void 0),
                    (this.weight = void 0),
                    (this.fullSize = void 0);
            }
            update(t, e, i) {
                (this.maxWidth = t), (this.maxHeight = e), (this._margins = i), this.setDimensions(), this.buildLabels(), this.fit();
            }
            setDimensions() {
                this.isHorizontal() ? ((this.width = this.maxWidth), (this.left = this._margins.left), (this.right = this.width)) : ((this.height = this.maxHeight), (this.top = this._margins.top), (this.bottom = this.height));
            }
            buildLabels() {
                const t = this.options.labels || {};
                let e = F(t.generateLabels, [this.chart], this) || [];
                t.filter && (e = e.filter((e) => t.filter(e, this.chart.data))), t.sort && (e = e.sort((e, i) => t.sort(e, i, this.chart.data))), this.options.reverse && e.reverse(), (this.legendItems = e);
            }
            fit() {
                const { options: t, ctx: e } = this;
                if (!t.display) return void (this.width = this.height = 0);
                const i = t.labels,
                    s = pe(i.font),
                    n = s.size,
                    o = this._computeTitleHeight(),
                    { boxWidth: r, itemHeight: a } = sn(i, n);
                let h, l;
                (e.font = s.string),
                    this.isHorizontal() ? ((h = this.maxWidth), (l = this._fitRows(o, n, r, a) + 10)) : ((l = this.maxHeight), (h = this._fitCols(o, s, r, a) + 10)),
                    (this.width = Math.min(h, t.maxWidth || this.maxWidth)),
                    (this.height = Math.min(l, t.maxHeight || this.maxHeight));
            }
            _fitRows(t, e, i, s) {
                const {
                        ctx: n,
                        maxWidth: o,
                        options: {
                            labels: { padding: r },
                        },
                    } = this,
                    a = (this.legendHitBoxes = []),
                    h = (this.lineWidths = [0]),
                    l = s + r;
                let c = t;
                (n.textAlign = "left"), (n.textBaseline = "middle");
                let d = -1,
                    u = -l;
                return (
                    this.legendItems.forEach((t, f) => {
                        const g = i + e / 2 + n.measureText(t.text).width;
                        (0 === f || h[h.length - 1] + g + 2 * r > o) && ((c += l), (h[h.length - (f > 0 ? 0 : 1)] = 0), (u += l), d++), (a[f] = { left: 0, top: u, row: d, width: g, height: s }), (h[h.length - 1] += g + r);
                    }),
                    c
                );
            }
            _fitCols(t, e, i, s) {
                const {
                        ctx: n,
                        maxHeight: o,
                        options: {
                            labels: { padding: r },
                        },
                    } = this,
                    a = (this.legendHitBoxes = []),
                    h = (this.columnSizes = []),
                    l = o - t;
                let c = r,
                    d = 0,
                    u = 0,
                    f = 0,
                    g = 0;
                return (
                    this.legendItems.forEach((t, o) => {
                        const { itemWidth: p, itemHeight: m } = (function (t, e, i, s, n) {
                            const o = (function (t, e, i, s) {
                                    let n = t.text;
                                    return n && "string" != typeof n && (n = n.reduce((t, e) => (t.length > e.length ? t : e))), e + i.size / 2 + s.measureText(n).width;
                                })(s, t, e, i),
                                r = (function (t, e, i) {
                                    let s = t;
                                    return "string" != typeof e.text && (s = on(e, i)), s;
                                })(n, s, e.lineHeight);
                            return { itemWidth: o, itemHeight: r };
                        })(i, e, n, t, s);
                        o > 0 && u + m + 2 * r > l && ((c += d + r), h.push({ width: d, height: u }), (f += d + r), g++, (d = u = 0)), (a[o] = { left: f, top: u, col: g, width: p, height: m }), (d = Math.max(d, p)), (u += m + r);
                    }),
                    (c += d),
                    h.push({ width: d, height: u }),
                    c
                );
            }
            adjustHitBoxes() {
                if (!this.options.display) return;
                const t = this._computeTitleHeight(),
                    {
                        legendHitBoxes: e,
                        options: {
                            align: i,
                            labels: { padding: s },
                            rtl: n,
                        },
                    } = this,
                    o = Ge(n, this.left, this.width);
                if (this.isHorizontal()) {
                    let n = 0,
                        r = Ct(i, this.left + s, this.right - this.lineWidths[n]);
                    for (const a of e) n !== a.row && ((n = a.row), (r = Ct(i, this.left + s, this.right - this.lineWidths[n]))), (a.top += this.top + t + s), (a.left = o.leftForLtr(o.x(r), a.width)), (r += a.width + s);
                } else {
                    let n = 0,
                        r = Ct(i, this.top + t + s, this.bottom - this.columnSizes[n].height);
                    for (const a of e)
                        a.col !== n && ((n = a.col), (r = Ct(i, this.top + t + s, this.bottom - this.columnSizes[n].height))), (a.top = r), (a.left += this.left + s), (a.left = o.leftForLtr(o.x(a.left), a.width)), (r += a.height + s);
                }
            }
            isHorizontal() {
                return "top" === this.options.position || "bottom" === this.options.position;
            }
            draw() {
                if (this.options.display) {
                    const t = this.ctx;
                    ee(t, this), this._draw(), ie(t);
                }
            }
            _draw() {
                const { options: t, columnSizes: e, lineWidths: i, ctx: s } = this,
                    { align: n, labels: o } = t,
                    r = qt.color,
                    a = Ge(t.rtl, this.left, this.width),
                    h = pe(o.font),
                    { padding: l } = o,
                    c = h.size,
                    d = c / 2;
                let u;
                this.drawTitle(), (s.textAlign = a.textAlign("left")), (s.textBaseline = "middle"), (s.lineWidth = 0.5), (s.font = h.string);
                const { boxWidth: f, boxHeight: g, itemHeight: p } = sn(o, c),
                    m = this.isHorizontal(),
                    x = this._computeTitleHeight();
                (u = m ? { x: Ct(n, this.left + l, this.right - i[0]), y: this.top + l + x, line: 0 } : { x: this.left + l, y: Ct(n, this.top + x + l, this.bottom - e[0].height), line: 0 }), Qe(this.ctx, t.textDirection);
                const b = p + l;
                this.legendItems.forEach((y, _) => {
                    (s.strokeStyle = y.fontColor), (s.fillStyle = y.fontColor);
                    const v = s.measureText(y.text).width,
                        w = a.textAlign(y.textAlign || (y.textAlign = o.textAlign)),
                        M = f + d + v;
                    let k = u.x,
                        S = u.y;
                    if (
                        (a.setWidth(this.width),
                        m
                            ? _ > 0 && k + M + l > this.right && ((S = u.y += b), u.line++, (k = u.x = Ct(n, this.left + l, this.right - i[u.line])))
                            : _ > 0 && S + b > this.bottom && ((k = u.x = k + e[u.line].width + l), u.line++, (S = u.y = Ct(n, this.top + x + l, this.bottom - e[u.line].height))),
                        (function (t, e, i) {
                            if (isNaN(f) || f <= 0 || isNaN(g) || g < 0) return;
                            s.save();
                            const n = B(i.lineWidth, 1);
                            if (
                                ((s.fillStyle = B(i.fillStyle, r)),
                                (s.lineCap = B(i.lineCap, "butt")),
                                (s.lineDashOffset = B(i.lineDashOffset, 0)),
                                (s.lineJoin = B(i.lineJoin, "miter")),
                                (s.lineWidth = n),
                                (s.strokeStyle = B(i.strokeStyle, r)),
                                s.setLineDash(B(i.lineDash, [])),
                                o.usePointStyle)
                            ) {
                                const r = { radius: (g * Math.SQRT2) / 2, pointStyle: i.pointStyle, rotation: i.rotation, borderWidth: n },
                                    h = a.xPlus(t, f / 2);
                                Jt(s, r, h, e + d, o.pointStyleWidth && f);
                            } else {
                                const o = e + Math.max((c - g) / 2, 0),
                                    r = a.leftForLtr(t, f),
                                    h = fe(i.borderRadius);
                                s.beginPath(), Object.values(h).some((t) => 0 !== t) ? he(s, { x: r, y: o, w: f, h: g, radius: h }) : s.rect(r, o, f, g), s.fill(), 0 !== n && s.stroke();
                            }
                            s.restore();
                        })(a.x(k), S, y),
                        (k = ((t, e, i, s) => (t === (s ? "left" : "right") ? i : "center" === t ? (e + i) / 2 : e))(w, k + f + d, m ? k + M : this.right, t.rtl)),
                        (function (t, e, i) {
                            ae(s, i.text, t, e + p / 2, h, { strikethrough: i.hidden, textAlign: a.textAlign(i.textAlign) });
                        })(a.x(k), S, y),
                        m)
                    )
                        u.x += M + l;
                    else if ("string" != typeof y.text) {
                        const t = h.lineHeight;
                        u.y += on(y, t) + l;
                    } else u.y += b;
                }),
                    Je(this.ctx, t.textDirection);
            }
            drawTitle() {
                const t = this.options,
                    e = t.title,
                    i = pe(e.font),
                    s = ge(e.padding);
                if (!e.display) return;
                const n = Ge(t.rtl, this.left, this.width),
                    o = this.ctx,
                    r = e.position,
                    a = i.size / 2,
                    h = s.top + a;
                let l,
                    c = this.left,
                    d = this.width;
                if (this.isHorizontal()) (d = Math.max(...this.lineWidths)), (l = this.top + h), (c = Ct(t.align, c, this.right - d));
                else {
                    const e = this.columnSizes.reduce((t, e) => Math.max(t, e.height), 0);
                    l = h + Ct(t.align, this.top, this.bottom - e - t.labels.padding - this._computeTitleHeight());
                }
                const u = Ct(r, c, c + d);
                (o.textAlign = n.textAlign(Tt(r))), (o.textBaseline = "middle"), (o.strokeStyle = e.color), (o.fillStyle = e.color), (o.font = i.string), ae(o, e.text, u, l, i);
            }
            _computeTitleHeight() {
                const t = this.options.title,
                    e = pe(t.font),
                    i = ge(t.padding);
                return t.display ? e.lineHeight + i.height : 0;
            }
            _getLegendItemAt(t, e) {
                let i, s, n;
                if (_t(t, this.left, this.right) && _t(e, this.top, this.bottom))
                    for (n = this.legendHitBoxes, i = 0; i < n.length; ++i) if (((s = n[i]), _t(t, s.left, s.left + s.width) && _t(e, s.top, s.top + s.height))) return this.legendItems[i];
                return null;
            }
            handleEvent(t) {
                const e = this.options;
                if (
                    !(function (t, e) {
                        return !(("mousemove" !== t && "mouseout" !== t) || (!e.onHover && !e.onLeave)) || !(!e.onClick || ("click" !== t && "mouseup" !== t));
                    })(t.type, e)
                )
                    return;
                const i = this._getLegendItemAt(t.x, t.y);
                if ("mousemove" === t.type || "mouseout" === t.type) {
                    const o = this._hoveredItem,
                        r = ((n = i), null !== (s = o) && null !== n && s.datasetIndex === n.datasetIndex && s.index === n.index);
                    o && !r && F(e.onLeave, [t, o, this], this), (this._hoveredItem = i), i && !r && F(e.onHover, [t, i, this], this);
                } else i && F(e.onClick, [t, i, this], this);
                var s, n;
            }
        }
        function on(t, e) {
            return e * (t.text ? t.text.length : 0);
        }
        var rn = {
            id: "legend",
            _element: nn,
            start(t, e, i) {
                const s = (t.legend = new nn({ ctx: t.ctx, options: i, chart: t }));
                ji.configure(t, s, i), ji.addBox(t, s);
            },
            stop(t) {
                ji.removeBox(t, t.legend), delete t.legend;
            },
            beforeUpdate(t, e, i) {
                const s = t.legend;
                ji.configure(t, s, i), (s.options = i);
            },
            afterUpdate(t) {
                const e = t.legend;
                e.buildLabels(), e.adjustHitBoxes();
            },
            afterEvent(t, e) {
                e.replay || t.legend.handleEvent(e.event);
            },
            defaults: {
                display: !0,
                position: "top",
                align: "center",
                fullSize: !0,
                reverse: !1,
                weight: 1e3,
                onClick(t, e, i) {
                    const s = e.datasetIndex,
                        n = i.chart;
                    n.isDatasetVisible(s) ? (n.hide(s), (e.hidden = !0)) : (n.show(s), (e.hidden = !1));
                },
                onHover: null,
                onLeave: null,
                labels: {
                    color: (t) => t.chart.options.color,
                    boxWidth: 40,
                    padding: 10,
                    generateLabels(t) {
                        const e = t.data.datasets,
                            {
                                labels: { usePointStyle: i, pointStyle: s, textAlign: n, color: o, useBorderRadius: r, borderRadius: a },
                            } = t.legend.options;
                        return t._getSortedDatasetMetas().map((t) => {
                            const h = t.controller.getStyle(i ? 0 : void 0),
                                l = ge(h.borderWidth);
                            return {
                                text: e[t.index].label,
                                fillStyle: h.backgroundColor,
                                fontColor: o,
                                hidden: !t.visible,
                                lineCap: h.borderCapStyle,
                                lineDash: h.borderDash,
                                lineDashOffset: h.borderDashOffset,
                                lineJoin: h.borderJoinStyle,
                                lineWidth: (l.width + l.height) / 4,
                                strokeStyle: h.borderColor,
                                pointStyle: s || h.pointStyle,
                                rotation: h.rotation,
                                textAlign: n || h.textAlign,
                                borderRadius: r && (a || h.borderRadius),
                                datasetIndex: t.index,
                            };
                        }, this);
                    },
                },
                title: { color: (t) => t.chart.options.color, display: !1, position: "center", text: "" },
            },
            descriptors: { _scriptable: (t) => !t.startsWith("on"), labels: { _scriptable: (t) => !["generateLabels", "filter", "sort"].includes(t) } },
        };
        class an extends as {
            constructor(t) {
                super(),
                    (this.chart = t.chart),
                    (this.options = t.options),
                    (this.ctx = t.ctx),
                    (this._padding = void 0),
                    (this.top = void 0),
                    (this.bottom = void 0),
                    (this.left = void 0),
                    (this.right = void 0),
                    (this.width = void 0),
                    (this.height = void 0),
                    (this.position = void 0),
                    (this.weight = void 0),
                    (this.fullSize = void 0);
            }
            update(t, e) {
                const i = this.options;
                if (((this.left = 0), (this.top = 0), !i.display)) return void (this.width = this.height = this.right = this.bottom = 0);
                (this.width = this.right = t), (this.height = this.bottom = e);
                const s = E(i.text) ? i.text.length : 1;
                this._padding = ge(i.padding);
                const n = s * pe(i.font).lineHeight + this._padding.height;
                this.isHorizontal() ? (this.height = n) : (this.width = n);
            }
            isHorizontal() {
                const t = this.options.position;
                return "top" === t || "bottom" === t;
            }
            _drawArgs(t) {
                const { top: e, left: i, bottom: s, right: n, options: o } = this,
                    r = o.align;
                let a,
                    h,
                    l,
                    c = 0;
                return (
                    this.isHorizontal() ? ((h = Ct(r, i, n)), (l = e + t), (a = n - i)) : ("left" === o.position ? ((h = i + t), (l = Ct(r, s, e)), (c = -0.5 * tt)) : ((h = n - t), (l = Ct(r, e, s)), (c = 0.5 * tt)), (a = s - e)),
                    { titleX: h, titleY: l, maxWidth: a, rotation: c }
                );
            }
            draw() {
                const t = this.ctx,
                    e = this.options;
                if (!e.display) return;
                const i = pe(e.font),
                    s = i.lineHeight / 2 + this._padding.top,
                    { titleX: n, titleY: o, maxWidth: r, rotation: a } = this._drawArgs(s);
                ae(t, e.text, 0, 0, i, { color: e.color, maxWidth: r, rotation: a, textAlign: Tt(e.align), textBaseline: "middle", translation: [n, o] });
            }
        }
        var hn = {
            id: "title",
            _element: an,
            start(t, e, i) {
                !(function (t, e) {
                    const i = new an({ ctx: t.ctx, options: e, chart: t });
                    ji.configure(t, i, e), ji.addBox(t, i), (t.titleBlock = i);
                })(t, i);
            },
            stop(t) {
                const e = t.titleBlock;
                ji.removeBox(t, e), delete t.titleBlock;
            },
            beforeUpdate(t, e, i) {
                const s = t.titleBlock;
                ji.configure(t, s, i), (s.options = i);
            },
            defaults: { align: "center", display: !1, font: { weight: "bold" }, fullSize: !0, padding: 10, position: "top", text: "", weight: 2e3 },
            defaultRoutes: { color: "color" },
            descriptors: { _scriptable: !0, _indexable: !1 },
        };
        new WeakMap();
        const ln = {
            average(t) {
                if (!t.length) return !1;
                let e,
                    i,
                    s = new Set(),
                    n = 0,
                    o = 0;
                for (e = 0, i = t.length; e < i; ++e) {
                    const i = t[e].element;
                    if (i && i.hasValue()) {
                        const t = i.tooltipPosition();
                        s.add(t.x), (n += t.y), ++o;
                    }
                }
                return 0 !== o && 0 !== s.size && { x: [...s].reduce((t, e) => t + e) / s.size, y: n / o };
            },
            nearest(t, e) {
                if (!t.length) return !1;
                let i,
                    s,
                    n,
                    o = e.x,
                    r = e.y,
                    a = Number.POSITIVE_INFINITY;
                for (i = 0, s = t.length; i < s; ++i) {
                    const s = t[i].element;
                    if (s && s.hasValue()) {
                        const t = pt(e, s.getCenterPoint());
                        t < a && ((a = t), (n = s));
                    }
                }
                if (n) {
                    const t = n.tooltipPosition();
                    (o = t.x), (r = t.y);
                }
                return { x: o, y: r };
            },
        };
        function cn(t, e) {
            return e && (E(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t;
        }
        function dn(t) {
            return ("string" == typeof t || t instanceof String) && t.indexOf("\n") > -1 ? t.split("\n") : t;
        }
        function un(t, e) {
            const { element: i, datasetIndex: s, index: n } = e,
                o = t.getDatasetMeta(s).controller,
                { label: r, value: a } = o.getLabelAndValue(n);
            return { chart: t, label: r, parsed: o.getParsed(n), raw: t.data.datasets[s].data[n], formattedValue: a, dataset: o.getDataset(), dataIndex: n, datasetIndex: s, element: i };
        }
        function fn(t, e) {
            const i = t.chart.ctx,
                { body: s, footer: n, title: o } = t,
                { boxWidth: r, boxHeight: a } = e,
                h = pe(e.bodyFont),
                l = pe(e.titleFont),
                c = pe(e.footerFont),
                d = o.length,
                u = n.length,
                f = s.length,
                g = ge(e.padding);
            let p = g.height,
                m = 0,
                x = s.reduce((t, e) => t + e.before.length + e.lines.length + e.after.length, 0);
            (x += t.beforeBody.length + t.afterBody.length),
                d && (p += d * l.lineHeight + (d - 1) * e.titleSpacing + e.titleMarginBottom),
                x && (p += f * (e.displayColors ? Math.max(a, h.lineHeight) : h.lineHeight) + (x - f) * h.lineHeight + (x - 1) * e.bodySpacing),
                u && (p += e.footerMarginTop + u * c.lineHeight + (u - 1) * e.footerSpacing);
            let b = 0;
            const y = function (t) {
                m = Math.max(m, i.measureText(t).width + b);
            };
            return (
                i.save(),
                (i.font = l.string),
                H(t.title, y),
                (i.font = h.string),
                H(t.beforeBody.concat(t.afterBody), y),
                (b = e.displayColors ? r + 2 + e.boxPadding : 0),
                H(s, (t) => {
                    H(t.before, y), H(t.lines, y), H(t.after, y);
                }),
                (b = 0),
                (i.font = c.string),
                H(t.footer, y),
                i.restore(),
                (m += g.width),
                { width: m, height: p }
            );
        }
        function gn(t, e, i, s) {
            const { x: n, width: o } = i,
                {
                    width: r,
                    chartArea: { left: a, right: h },
                } = t;
            let l = "center";
            return (
                "center" === s ? (l = n <= (a + h) / 2 ? "left" : "right") : n <= o / 2 ? (l = "left") : n >= r - o / 2 && (l = "right"),
                (function (t, e, i, s) {
                    const { x: n, width: o } = s,
                        r = i.caretSize + i.caretPadding;
                    return ("left" === t && n + o + r > e.width) || ("right" === t && n - o - r < 0) || void 0;
                })(l, t, e, i) && (l = "center"),
                l
            );
        }
        function pn(t, e, i) {
            const s =
                i.yAlign ||
                e.yAlign ||
                (function (t, e) {
                    const { y: i, height: s } = e;
                    return i < s / 2 ? "top" : i > t.height - s / 2 ? "bottom" : "center";
                })(t, i);
            return { xAlign: i.xAlign || e.xAlign || gn(t, e, i, s), yAlign: s };
        }
        function mn(t, e, i, s) {
            const { caretSize: n, caretPadding: o, cornerRadius: r } = t,
                { xAlign: a, yAlign: h } = i,
                l = n + o,
                { topLeft: c, topRight: d, bottomLeft: u, bottomRight: f } = fe(r);
            let g = (function (t, e) {
                let { x: i, width: s } = t;
                return "right" === e ? (i -= s) : "center" === e && (i -= s / 2), i;
            })(e, a);
            const p = (function (t, e, i) {
                let { y: s, height: n } = t;
                return "top" === e ? (s += i) : (s -= "bottom" === e ? n + i : n / 2), s;
            })(e, h, l);
            return (
                "center" === h ? ("left" === a ? (g += l) : "right" === a && (g -= l)) : "left" === a ? (g -= Math.max(c, u) + n) : "right" === a && (g += Math.max(d, f) + n),
                { x: yt(g, 0, s.width - e.width), y: yt(p, 0, s.height - e.height) }
            );
        }
        function xn(t, e, i) {
            const s = ge(i.padding);
            return "center" === e ? t.x + t.width / 2 : "right" === e ? t.x + t.width - s.right : t.x + s.left;
        }
        function bn(t) {
            return cn([], dn(t));
        }
        function yn(t, e) {
            const i = e && e.dataset && e.dataset.tooltip && e.dataset.tooltip.callbacks;
            return i ? t.override(i) : t;
        }
        const _n = {
            beforeTitle: I,
            title(t) {
                if (t.length > 0) {
                    const e = t[0],
                        i = e.chart.data.labels,
                        s = i ? i.length : 0;
                    if (this && this.options && "dataset" === this.options.mode) return e.dataset.label || "";
                    if (e.label) return e.label;
                    if (s > 0 && e.dataIndex < s) return i[e.dataIndex];
                }
                return "";
            },
            afterTitle: I,
            beforeBody: I,
            beforeLabel: I,
            label(t) {
                if (this && this.options && "dataset" === this.options.mode) return t.label + ": " + t.formattedValue || t.formattedValue;
                let e = t.dataset.label || "";
                e && (e += ": ");
                const i = t.formattedValue;
                return A(i) || (e += i), e;
            },
            labelColor(t) {
                const e = t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);
                return { borderColor: e.borderColor, backgroundColor: e.backgroundColor, borderWidth: e.borderWidth, borderDash: e.borderDash, borderDashOffset: e.borderDashOffset, borderRadius: 0 };
            },
            labelTextColor() {
                return this.options.bodyColor;
            },
            labelPointStyle(t) {
                const e = t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);
                return { pointStyle: e.pointStyle, rotation: e.rotation };
            },
            afterLabel: I,
            afterBody: I,
            beforeFooter: I,
            footer: I,
            afterFooter: I,
        };
        function vn(t, e, i, s) {
            const n = t[e].call(i, s);
            return void 0 === n ? _n[e].call(i, s) : n;
        }
        class wn extends as {
            static positioners = ln;
            constructor(t) {
                super(),
                    (this.opacity = 0),
                    (this._active = []),
                    (this._eventPosition = void 0),
                    (this._size = void 0),
                    (this._cachedAnimations = void 0),
                    (this._tooltipItems = []),
                    (this.$animations = void 0),
                    (this.$context = void 0),
                    (this.chart = t.chart),
                    (this.options = t.options),
                    (this.dataPoints = void 0),
                    (this.title = void 0),
                    (this.beforeBody = void 0),
                    (this.body = void 0),
                    (this.afterBody = void 0),
                    (this.footer = void 0),
                    (this.xAlign = void 0),
                    (this.yAlign = void 0),
                    (this.x = void 0),
                    (this.y = void 0),
                    (this.height = void 0),
                    (this.width = void 0),
                    (this.caretX = void 0),
                    (this.caretY = void 0),
                    (this.labelColors = void 0),
                    (this.labelPointStyles = void 0),
                    (this.labelTextColors = void 0);
            }
            initialize(t) {
                (this.options = t), (this._cachedAnimations = void 0), (this.$context = void 0);
            }
            _resolveAnimations() {
                const t = this._cachedAnimations;
                if (t) return t;
                const e = this.chart,
                    i = this.options.setContext(this.getContext()),
                    s = i.enabled && e.options.animation && i.animations,
                    n = new ci(this.chart, s);
                return s._cacheable && (this._cachedAnimations = Object.freeze(n)), n;
            }
            getContext() {
                return this.$context || (this.$context = xe(this.chart.getContext(), { tooltip: this, tooltipItems: this._tooltipItems, type: "tooltip" }));
            }
            getTitle(t, e) {
                const { callbacks: i } = e,
                    s = vn(i, "beforeTitle", this, t),
                    n = vn(i, "title", this, t),
                    o = vn(i, "afterTitle", this, t);
                let r = [];
                return (r = cn(r, dn(s))), (r = cn(r, dn(n))), (r = cn(r, dn(o))), r;
            }
            getBeforeBody(t, e) {
                return bn(vn(e.callbacks, "beforeBody", this, t));
            }
            getBody(t, e) {
                const { callbacks: i } = e,
                    s = [];
                return (
                    H(t, (t) => {
                        const e = { before: [], lines: [], after: [] },
                            n = yn(i, t);
                        cn(e.before, dn(vn(n, "beforeLabel", this, t))), cn(e.lines, vn(n, "label", this, t)), cn(e.after, dn(vn(n, "afterLabel", this, t))), s.push(e);
                    }),
                    s
                );
            }
            getAfterBody(t, e) {
                return bn(vn(e.callbacks, "afterBody", this, t));
            }
            getFooter(t, e) {
                const { callbacks: i } = e,
                    s = vn(i, "beforeFooter", this, t),
                    n = vn(i, "footer", this, t),
                    o = vn(i, "afterFooter", this, t);
                let r = [];
                return (r = cn(r, dn(s))), (r = cn(r, dn(n))), (r = cn(r, dn(o))), r;
            }
            _createItems(t) {
                const e = this._active,
                    i = this.chart.data,
                    s = [],
                    n = [],
                    o = [];
                let r,
                    a,
                    h = [];
                for (r = 0, a = e.length; r < a; ++r) h.push(un(this.chart, e[r]));
                return (
                    t.filter && (h = h.filter((e, s, n) => t.filter(e, s, n, i))),
                    t.itemSort && (h = h.sort((e, s) => t.itemSort(e, s, i))),
                    H(h, (e) => {
                        const i = yn(t.callbacks, e);
                        s.push(vn(i, "labelColor", this, e)), n.push(vn(i, "labelPointStyle", this, e)), o.push(vn(i, "labelTextColor", this, e));
                    }),
                    (this.labelColors = s),
                    (this.labelPointStyles = n),
                    (this.labelTextColors = o),
                    (this.dataPoints = h),
                    h
                );
            }
            update(t, e) {
                const i = this.options.setContext(this.getContext()),
                    s = this._active;
                let n,
                    o = [];
                if (s.length) {
                    const t = ln[i.position].call(this, s, this._eventPosition);
                    (o = this._createItems(i)),
                        (this.title = this.getTitle(o, i)),
                        (this.beforeBody = this.getBeforeBody(o, i)),
                        (this.body = this.getBody(o, i)),
                        (this.afterBody = this.getAfterBody(o, i)),
                        (this.footer = this.getFooter(o, i));
                    const e = (this._size = fn(this, i)),
                        r = Object.assign({}, t, e),
                        a = pn(this.chart, i, r),
                        h = mn(i, r, a, this.chart);
                    (this.xAlign = a.xAlign), (this.yAlign = a.yAlign), (n = { opacity: 1, x: h.x, y: h.y, width: e.width, height: e.height, caretX: t.x, caretY: t.y });
                } else 0 !== this.opacity && (n = { opacity: 0 });
                (this._tooltipItems = o), (this.$context = void 0), n && this._resolveAnimations().update(this, n), t && i.external && i.external.call(this, { chart: this.chart, tooltip: this, replay: e });
            }
            drawCaret(t, e, i, s) {
                const n = this.getCaretPosition(t, i, s);
                e.lineTo(n.x1, n.y1), e.lineTo(n.x2, n.y2), e.lineTo(n.x3, n.y3);
            }
            getCaretPosition(t, e, i) {
                const { xAlign: s, yAlign: n } = this,
                    { caretSize: o, cornerRadius: r } = i,
                    { topLeft: a, topRight: h, bottomLeft: l, bottomRight: c } = fe(r),
                    { x: d, y: u } = t,
                    { width: f, height: g } = e;
                let p, m, x, b, y, _;
                return (
                    "center" === n
                        ? ((y = u + g / 2), "left" === s ? ((p = d), (m = p - o), (b = y + o), (_ = y - o)) : ((p = d + f), (m = p + o), (b = y - o), (_ = y + o)), (x = p))
                        : ((m = "left" === s ? d + Math.max(a, l) + o : "right" === s ? d + f - Math.max(h, c) - o : this.caretX),
                          "top" === n ? ((b = u), (y = b - o), (p = m - o), (x = m + o)) : ((b = u + g), (y = b + o), (p = m + o), (x = m - o)),
                          (_ = b)),
                    { x1: p, x2: m, x3: x, y1: b, y2: y, y3: _ }
                );
            }
            drawTitle(t, e, i) {
                const s = this.title,
                    n = s.length;
                let o, r, a;
                if (n) {
                    const h = Ge(i.rtl, this.x, this.width);
                    for (t.x = xn(this, i.titleAlign, i), e.textAlign = h.textAlign(i.titleAlign), e.textBaseline = "middle", o = pe(i.titleFont), r = i.titleSpacing, e.fillStyle = i.titleColor, e.font = o.string, a = 0; a < n; ++a)
                        e.fillText(s[a], h.x(t.x), t.y + o.lineHeight / 2), (t.y += o.lineHeight + r), a + 1 === n && (t.y += i.titleMarginBottom - r);
                }
            }
            _drawColorBox(t, e, i, s, n) {
                const o = this.labelColors[i],
                    r = this.labelPointStyles[i],
                    { boxHeight: a, boxWidth: h } = n,
                    l = pe(n.bodyFont),
                    c = xn(this, "left", n),
                    d = s.x(c),
                    u = a < l.lineHeight ? (l.lineHeight - a) / 2 : 0,
                    f = e.y + u;
                if (n.usePointStyle) {
                    const e = { radius: Math.min(h, a) / 2, pointStyle: r.pointStyle, rotation: r.rotation, borderWidth: 1 },
                        i = s.leftForLtr(d, h) + h / 2,
                        l = f + a / 2;
                    (t.strokeStyle = n.multiKeyBackground), (t.fillStyle = n.multiKeyBackground), Qt(t, e, i, l), (t.strokeStyle = o.borderColor), (t.fillStyle = o.backgroundColor), Qt(t, e, i, l);
                } else {
                    (t.lineWidth = z(o.borderWidth) ? Math.max(...Object.values(o.borderWidth)) : o.borderWidth || 1), (t.strokeStyle = o.borderColor), t.setLineDash(o.borderDash || []), (t.lineDashOffset = o.borderDashOffset || 0);
                    const e = s.leftForLtr(d, h),
                        i = s.leftForLtr(s.xPlus(d, 1), h - 2),
                        r = fe(o.borderRadius);
                    Object.values(r).some((t) => 0 !== t)
                        ? (t.beginPath(),
                          (t.fillStyle = n.multiKeyBackground),
                          he(t, { x: e, y: f, w: h, h: a, radius: r }),
                          t.fill(),
                          t.stroke(),
                          (t.fillStyle = o.backgroundColor),
                          t.beginPath(),
                          he(t, { x: i, y: f + 1, w: h - 2, h: a - 2, radius: r }),
                          t.fill())
                        : ((t.fillStyle = n.multiKeyBackground), t.fillRect(e, f, h, a), t.strokeRect(e, f, h, a), (t.fillStyle = o.backgroundColor), t.fillRect(i, f + 1, h - 2, a - 2));
                }
                t.fillStyle = this.labelTextColors[i];
            }
            drawBody(t, e, i) {
                const { body: s } = this,
                    { bodySpacing: n, bodyAlign: o, displayColors: r, boxHeight: a, boxWidth: h, boxPadding: l } = i,
                    c = pe(i.bodyFont);
                let d = c.lineHeight,
                    u = 0;
                const f = Ge(i.rtl, this.x, this.width),
                    g = function (i) {
                        e.fillText(i, f.x(t.x + u), t.y + d / 2), (t.y += d + n);
                    },
                    p = f.textAlign(o);
                let m, x, b, y, _, v, w;
                for (
                    e.textAlign = o,
                        e.textBaseline = "middle",
                        e.font = c.string,
                        t.x = xn(this, p, i),
                        e.fillStyle = i.bodyColor,
                        H(this.beforeBody, g),
                        u = r && "right" !== p ? ("center" === o ? h / 2 + l : h + 2 + l) : 0,
                        y = 0,
                        v = s.length;
                    y < v;
                    ++y
                ) {
                    for (m = s[y], x = this.labelTextColors[y], e.fillStyle = x, H(m.before, g), b = m.lines, r && b.length && (this._drawColorBox(e, t, y, f, i), (d = Math.max(c.lineHeight, a))), _ = 0, w = b.length; _ < w; ++_)
                        g(b[_]), (d = c.lineHeight);
                    H(m.after, g);
                }
                (u = 0), (d = c.lineHeight), H(this.afterBody, g), (t.y -= n);
            }
            drawFooter(t, e, i) {
                const s = this.footer,
                    n = s.length;
                let o, r;
                if (n) {
                    const a = Ge(i.rtl, this.x, this.width);
                    for (
                        t.x = xn(this, i.footerAlign, i), t.y += i.footerMarginTop, e.textAlign = a.textAlign(i.footerAlign), e.textBaseline = "middle", o = pe(i.footerFont), e.fillStyle = i.footerColor, e.font = o.string, r = 0;
                        r < n;
                        ++r
                    )
                        e.fillText(s[r], a.x(t.x), t.y + o.lineHeight / 2), (t.y += o.lineHeight + i.footerSpacing);
                }
            }
            drawBackground(t, e, i, s) {
                const { xAlign: n, yAlign: o } = this,
                    { x: r, y: a } = t,
                    { width: h, height: l } = i,
                    { topLeft: c, topRight: d, bottomLeft: u, bottomRight: f } = fe(s.cornerRadius);
                (e.fillStyle = s.backgroundColor),
                    (e.strokeStyle = s.borderColor),
                    (e.lineWidth = s.borderWidth),
                    e.beginPath(),
                    e.moveTo(r + c, a),
                    "top" === o && this.drawCaret(t, e, i, s),
                    e.lineTo(r + h - d, a),
                    e.quadraticCurveTo(r + h, a, r + h, a + d),
                    "center" === o && "right" === n && this.drawCaret(t, e, i, s),
                    e.lineTo(r + h, a + l - f),
                    e.quadraticCurveTo(r + h, a + l, r + h - f, a + l),
                    "bottom" === o && this.drawCaret(t, e, i, s),
                    e.lineTo(r + u, a + l),
                    e.quadraticCurveTo(r, a + l, r, a + l - u),
                    "center" === o && "left" === n && this.drawCaret(t, e, i, s),
                    e.lineTo(r, a + c),
                    e.quadraticCurveTo(r, a, r + c, a),
                    e.closePath(),
                    e.fill(),
                    s.borderWidth > 0 && e.stroke();
            }
            _updateAnimationTarget(t) {
                const e = this.chart,
                    i = this.$animations,
                    s = i && i.x,
                    n = i && i.y;
                if (s || n) {
                    const i = ln[t.position].call(this, this._active, this._eventPosition);
                    if (!i) return;
                    const o = (this._size = fn(this, t)),
                        r = Object.assign({}, i, this._size),
                        a = pn(e, t, r),
                        h = mn(t, r, a, e);
                    (s._to === h.x && n._to === h.y) ||
                        ((this.xAlign = a.xAlign), (this.yAlign = a.yAlign), (this.width = o.width), (this.height = o.height), (this.caretX = i.x), (this.caretY = i.y), this._resolveAnimations().update(this, h));
                }
            }
            _willRender() {
                return !!this.opacity;
            }
            draw(t) {
                const e = this.options.setContext(this.getContext());
                let i = this.opacity;
                if (!i) return;
                this._updateAnimationTarget(e);
                const s = { width: this.width, height: this.height },
                    n = { x: this.x, y: this.y };
                i = Math.abs(i) < 0.001 ? 0 : i;
                const o = ge(e.padding),
                    r = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
                e.enabled &&
                    r &&
                    (t.save(), (t.globalAlpha = i), this.drawBackground(n, t, s, e), Qe(t, e.textDirection), (n.y += o.top), this.drawTitle(n, t, e), this.drawBody(n, t, e), this.drawFooter(n, t, e), Je(t, e.textDirection), t.restore());
            }
            getActiveElements() {
                return this._active || [];
            }
            setActiveElements(t, e) {
                const i = this._active,
                    s = t.map(({ datasetIndex: t, index: e }) => {
                        const i = this.chart.getDatasetMeta(t);
                        if (!i) throw new Error("Cannot find a dataset at index " + t);
                        return { datasetIndex: t, element: i.data[e], index: e };
                    }),
                    n = !W(i, s),
                    o = this._positionChanged(s, e);
                (n || o) && ((this._active = s), (this._eventPosition = e), (this._ignoreReplayEvents = !0), this.update(!0));
            }
            handleEvent(t, e, i = !0) {
                if (e && this._ignoreReplayEvents) return !1;
                this._ignoreReplayEvents = !1;
                const s = this.options,
                    n = this._active || [],
                    o = this._getActiveElements(t, n, e, i),
                    r = this._positionChanged(o, t),
                    a = e || !W(o, n) || r;
                return a && ((this._active = o), (s.enabled || s.external) && ((this._eventPosition = { x: t.x, y: t.y }), this.update(!0, e))), a;
            }
            _getActiveElements(t, e, i, s) {
                const n = this.options;
                if ("mouseout" === t.type) return [];
                if (!s) return e.filter((t) => this.chart.data.datasets[t.datasetIndex] && void 0 !== this.chart.getDatasetMeta(t.datasetIndex).controller.getParsed(t.index));
                const o = this.chart.getElementsAtEventForMode(t, n.mode, n, i);
                return n.reverse && o.reverse(), o;
            }
            _positionChanged(t, e) {
                const { caretX: i, caretY: s, options: n } = this,
                    o = ln[n.position].call(this, t, e);
                return !1 !== o && (i !== o.x || s !== o.y);
            }
        }
        var Mn = {
            id: "tooltip",
            _element: wn,
            positioners: ln,
            afterInit(t, e, i) {
                i && (t.tooltip = new wn({ chart: t, options: i }));
            },
            beforeUpdate(t, e, i) {
                t.tooltip && t.tooltip.initialize(i);
            },
            reset(t, e, i) {
                t.tooltip && t.tooltip.initialize(i);
            },
            afterDraw(t) {
                const e = t.tooltip;
                if (e && e._willRender()) {
                    const i = { tooltip: e };
                    if (!1 === t.notifyPlugins("beforeTooltipDraw", { ...i, cancelable: !0 })) return;
                    e.draw(t.ctx), t.notifyPlugins("afterTooltipDraw", i);
                }
            },
            afterEvent(t, e) {
                if (t.tooltip) {
                    const i = e.replay;
                    t.tooltip.handleEvent(e.event, i, e.inChartArea) && (e.changed = !0);
                }
            },
            defaults: {
                enabled: !0,
                external: null,
                position: "average",
                backgroundColor: "rgba(0,0,0,0.8)",
                titleColor: "#fff",
                titleFont: { weight: "bold" },
                titleSpacing: 2,
                titleMarginBottom: 6,
                titleAlign: "left",
                bodyColor: "#fff",
                bodySpacing: 2,
                bodyFont: {},
                bodyAlign: "left",
                footerColor: "#fff",
                footerSpacing: 2,
                footerMarginTop: 6,
                footerFont: { weight: "bold" },
                footerAlign: "left",
                padding: 6,
                caretPadding: 2,
                caretSize: 5,
                cornerRadius: 6,
                boxHeight: (t, e) => e.bodyFont.size,
                boxWidth: (t, e) => e.bodyFont.size,
                multiKeyBackground: "#fff",
                displayColors: !0,
                boxPadding: 0,
                borderColor: "rgba(0,0,0,0)",
                borderWidth: 0,
                animation: { duration: 400, easing: "easeOutQuart" },
                animations: { numbers: { type: "number", properties: ["x", "y", "width", "height", "caretX", "caretY"] }, opacity: { easing: "linear", duration: 200 } },
                callbacks: _n,
            },
            defaultRoutes: { bodyFont: "font", footerFont: "font", titleFont: "font" },
            descriptors: { _scriptable: (t) => "filter" !== t && "itemSort" !== t && "external" !== t, _indexable: !1, callbacks: { _scriptable: !1, _indexable: !1 }, animation: { _fallback: !1 }, animations: { _fallback: "animation" } },
            additionalOptionScopes: ["interaction"],
        };
        function kn(t, e, { horizontal: i, minRotation: s }) {
            const n = ft(s),
                o = (i ? Math.sin(n) : Math.cos(n)) || 0.001,
                r = 0.75 * e * ("" + t).length;
            return Math.min(e / o, r);
        }
        class Sn extends ms {
            constructor(t) {
                super(t), (this.start = void 0), (this.end = void 0), (this._startValue = void 0), (this._endValue = void 0), (this._valueRange = 0);
            }
            parse(t, e) {
                return A(t) || (("number" == typeof t || t instanceof Number) && !isFinite(+t)) ? null : +t;
            }
            handleTickRangeOptions() {
                const { beginAtZero: t } = this.options,
                    { minDefined: e, maxDefined: i } = this.getUserBounds();
                let { min: s, max: n } = this;
                const o = (t) => (s = e ? s : t),
                    r = (t) => (n = i ? n : t);
                if (t) {
                    const t = lt(s),
                        e = lt(n);
                    t < 0 && e < 0 ? r(0) : t > 0 && e > 0 && o(0);
                }
                if (s === n) {
                    let e = 0 === n ? 1 : Math.abs(0.05 * n);
                    r(n + e), t || o(s - e);
                }
                (this.min = s), (this.max = n);
            }
            getTickLimit() {
                const t = this.options.ticks;
                let e,
                    { maxTicksLimit: i, stepSize: s } = t;
                return (
                    s
                        ? ((e = Math.ceil(this.max / s) - Math.floor(this.min / s) + 1), e > 1e3 && (console.warn(`scales.${this.id}.ticks.stepSize: ${s} would result generating up to ${e} ticks. Limiting to 1000.`), (e = 1e3)))
                        : ((e = this.computeTickLimit()), (i = i || 11)),
                    i && (e = Math.min(i, e)),
                    e
                );
            }
            computeTickLimit() {
                return Number.POSITIVE_INFINITY;
            }
            buildTicks() {
                const t = this.options,
                    e = t.ticks;
                let i = this.getTickLimit();
                i = Math.max(2, i);
                const s = (function (t, e) {
                    const i = [],
                        { bounds: s, step: n, min: o, max: r, precision: a, count: h, maxTicks: l, maxDigits: c, includeBounds: d } = t,
                        u = n || 1,
                        f = l - 1,
                        { min: g, max: p } = e,
                        m = !A(o),
                        x = !A(r),
                        b = !A(h),
                        y = (p - g) / (c + 1);
                    let _,
                        v,
                        w,
                        M,
                        k = dt((p - g) / f / u) * u;
                    if (k < 1e-14 && !m && !x) return [{ value: g }, { value: p }];
                    (M = Math.ceil(p / k) - Math.floor(g / k)),
                        M > f && (k = dt((M * k) / f / u) * u),
                        A(a) || ((_ = Math.pow(10, a)), (k = Math.ceil(k * _) / _)),
                        "ticks" === s ? ((v = Math.floor(g / k) * k), (w = Math.ceil(p / k) * k)) : ((v = g), (w = p)),
                        m &&
                        x &&
                        n &&
                        (function (t, e) {
                            const i = Math.round(t);
                            return i - e <= t && i + e >= t;
                        })((r - o) / n, k / 1e3)
                            ? ((M = Math.round(Math.min((r - o) / k, l))), (k = (r - o) / M), (v = o), (w = r))
                            : b
                            ? ((v = m ? o : v), (w = x ? r : w), (M = h - 1), (k = (w - v) / M))
                            : ((M = (w - v) / k), (M = ct(M, Math.round(M), k / 1e3) ? Math.round(M) : Math.ceil(M)));
                    const S = Math.max(gt(k), gt(v));
                    (_ = Math.pow(10, A(a) ? S : a)), (v = Math.round(v * _) / _), (w = Math.round(w * _) / _);
                    let D = 0;
                    for (m && (d && v !== o ? (i.push({ value: o }), v < o && D++, ct(Math.round((v + D * k) * _) / _, o, kn(o, y, t)) && D++) : v < o && D++); D < M; ++D) {
                        const t = Math.round((v + D * k) * _) / _;
                        if (x && t > r) break;
                        i.push({ value: t });
                    }
                    return x && d && w !== r ? (i.length && ct(i[i.length - 1].value, r, kn(r, y, t)) ? (i[i.length - 1].value = r) : i.push({ value: r })) : (x && w !== r) || i.push({ value: w }), i;
                })(
                    {
                        maxTicks: i,
                        bounds: t.bounds,
                        min: t.min,
                        max: t.max,
                        precision: e.precision,
                        step: e.stepSize,
                        count: e.count,
                        maxDigits: this._maxDigits(),
                        horizontal: this.isHorizontal(),
                        minRotation: e.minRotation || 0,
                        includeBounds: !1 !== e.includeBounds,
                    },
                    this._range || this
                );
                return (
                    "ticks" === t.bounds &&
                        (function (t, e, i) {
                            let s, n, o;
                            for (s = 0, n = t.length; s < n; s++) (o = t[s][i]), isNaN(o) || ((e.min = Math.min(e.min, o)), (e.max = Math.max(e.max, o)));
                        })(s, this, "value"),
                    t.reverse ? (s.reverse(), (this.start = this.max), (this.end = this.min)) : ((this.start = this.min), (this.end = this.max)),
                    s
                );
            }
            configure() {
                const t = this.ticks;
                let e = this.min,
                    i = this.max;
                if ((super.configure(), this.options.offset && t.length)) {
                    const s = (i - e) / Math.max(t.length - 1, 1) / 2;
                    (e -= s), (i += s);
                }
                (this._startValue = e), (this._endValue = i), (this._valueRange = i - e);
            }
            getLabelForValue(t) {
                return Ht(t, this.chart.options.locale, this.options.ticks.format);
            }
        }
        class Dn extends Sn {
            static id = "linear";
            static defaults = { ticks: { callback: Yt.formatters.numeric } };
            determineDataLimits() {
                const { min: t, max: e } = this.getMinMax(!0);
                (this.min = $(t) ? t : 0), (this.max = $(e) ? e : 1), this.handleTickRangeOptions();
            }
            computeTickLimit() {
                const t = this.isHorizontal(),
                    e = t ? this.width : this.height,
                    i = ft(this.options.ticks.minRotation),
                    s = (t ? Math.sin(i) : Math.cos(i)) || 0.001,
                    n = this._resolveTickFontOptions(0);
                return Math.ceil(e / Math.min(40, n.lineHeight / s));
            }
            getPixelForValue(t) {
                return null === t ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
            }
            getValueForPixel(t) {
                return this._startValue + this.getDecimalForPixel(t) * this._valueRange;
            }
        }
        Yt.formatters.logarithmic, Yt.formatters.numeric;
        const On = {
                millisecond: { common: !0, size: 1, steps: 1e3 },
                second: { common: !0, size: 1e3, steps: 60 },
                minute: { common: !0, size: 6e4, steps: 60 },
                hour: { common: !0, size: 36e5, steps: 24 },
                day: { common: !0, size: 864e5, steps: 30 },
                week: { common: !1, size: 6048e5, steps: 4 },
                month: { common: !0, size: 2628e6, steps: 12 },
                quarter: { common: !1, size: 7884e6, steps: 4 },
                year: { common: !0, size: 3154e7 },
            },
            Tn = Object.keys(On);
        function Cn(t, e) {
            return t - e;
        }
        function Pn(t, e) {
            if (A(e)) return null;
            const i = t._adapter,
                { parser: s, round: n, isoWeekday: o } = t._parseOpts;
            let r = e;
            return (
                "function" == typeof s && (r = s(r)), $(r) || (r = "string" == typeof s ? i.parse(r, s) : i.parse(r)), null === r ? null : (n && (r = "week" !== n || (!ut(o) && !0 !== o) ? i.startOf(r, n) : i.startOf(r, "isoWeek", o)), +r)
            );
        }
        function In(t, e, i, s) {
            const n = Tn.length;
            for (let o = Tn.indexOf(t); o < n - 1; ++o) {
                const t = On[Tn[o]],
                    n = t.steps ? t.steps : Number.MAX_SAFE_INTEGER;
                if (t.common && Math.ceil((i - e) / (n * t.size)) <= s) return Tn[o];
            }
            return Tn[n - 1];
        }
        function Ln(t, e, i) {
            if (i) {
                if (i.length) {
                    const { lo: s, hi: n } = vt(i, e);
                    t[i[s] >= e ? i[s] : i[n]] = !0;
                }
            } else t[e] = !0;
        }
        function An(t, e, i) {
            const s = [],
                n = {},
                o = e.length;
            let r, a;
            for (r = 0; r < o; ++r) (a = e[r]), (n[a] = r), s.push({ value: a, major: !1 });
            return 0 !== o && i
                ? (function (t, e, i, s) {
                      const n = t._adapter,
                          o = +n.startOf(e[0].value, s),
                          r = e[e.length - 1].value;
                      let a, h;
                      for (a = o; a <= r; a = +n.add(a, 1, s)) (h = i[a]), h >= 0 && (e[h].major = !0);
                      return e;
                  })(t, s, n, i)
                : s;
        }
        class En extends ms {
            static id = "time";
            static defaults = { bounds: "data", adapters: {}, time: { parser: !1, unit: !1, round: !1, isoWeekday: !1, minUnit: "millisecond", displayFormats: {} }, ticks: { source: "auto", callback: !1, major: { enabled: !1 } } };
            constructor(t) {
                super(t), (this._cache = { data: [], labels: [], all: [] }), (this._unit = "day"), (this._majorUnit = void 0), (this._offsets = {}), (this._normalized = !1), (this._parseOpts = void 0);
            }
            init(t, e = {}) {
                const i = t.time || (t.time = {}),
                    s = (this._adapter = new Si._date(t.adapters.date));
                s.init(e), U(i.displayFormats, s.formats()), (this._parseOpts = { parser: i.parser, round: i.round, isoWeekday: i.isoWeekday }), super.init(t), (this._normalized = e.normalized);
            }
            parse(t, e) {
                return void 0 === t ? null : Pn(this, t);
            }
            beforeLayout() {
                super.beforeLayout(), (this._cache = { data: [], labels: [], all: [] });
            }
            determineDataLimits() {
                const t = this.options,
                    e = this._adapter,
                    i = t.time.unit || "day";
                let { min: s, max: n, minDefined: o, maxDefined: r } = this.getUserBounds();
                function a(t) {
                    o || isNaN(t.min) || (s = Math.min(s, t.min)), r || isNaN(t.max) || (n = Math.max(n, t.max));
                }
                (o && r) || (a(this._getLabelBounds()), ("ticks" === t.bounds && "labels" === t.ticks.source) || a(this.getMinMax(!1))),
                    (s = $(s) && !isNaN(s) ? s : +e.startOf(Date.now(), i)),
                    (n = $(n) && !isNaN(n) ? n : +e.endOf(Date.now(), i) + 1),
                    (this.min = Math.min(s, n - 1)),
                    (this.max = Math.max(s + 1, n));
            }
            _getLabelBounds() {
                const t = this.getLabelTimestamps();
                let e = Number.POSITIVE_INFINITY,
                    i = Number.NEGATIVE_INFINITY;
                return t.length && ((e = t[0]), (i = t[t.length - 1])), { min: e, max: i };
            }
            buildTicks() {
                const t = this.options,
                    e = t.time,
                    i = t.ticks,
                    s = "labels" === i.source ? this.getLabelTimestamps() : this._generate();
                "ticks" === t.bounds && s.length && ((this.min = this._userMin || s[0]), (this.max = this._userMax || s[s.length - 1]));
                const n = this.min,
                    o = (function (t, e, i) {
                        let s = 0,
                            n = t.length;
                        for (; s < n && t[s] < e; ) s++;
                        for (; n > s && t[n - 1] > i; ) n--;
                        return s > 0 || n < t.length ? t.slice(s, n) : t;
                    })(s, n, this.max);
                return (
                    (this._unit =
                        e.unit ||
                        (i.autoSkip
                            ? In(e.minUnit, this.min, this.max, this._getLabelCapacity(n))
                            : (function (t, e, i, s, n) {
                                  for (let o = Tn.length - 1; o >= Tn.indexOf(i); o--) {
                                      const i = Tn[o];
                                      if (On[i].common && t._adapter.diff(n, s, i) >= e - 1) return i;
                                  }
                                  return Tn[i ? Tn.indexOf(i) : 0];
                              })(this, o.length, e.minUnit, this.min, this.max))),
                    (this._majorUnit =
                        i.major.enabled && "year" !== this._unit
                            ? (function (t) {
                                  for (let e = Tn.indexOf(t) + 1, i = Tn.length; e < i; ++e) if (On[Tn[e]].common) return Tn[e];
                              })(this._unit)
                            : void 0),
                    this.initOffsets(s),
                    t.reverse && o.reverse(),
                    An(this, o, this._majorUnit)
                );
            }
            afterAutoSkip() {
                this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map((t) => +t.value));
            }
            initOffsets(t = []) {
                let e,
                    i,
                    s = 0,
                    n = 0;
                this.options.offset &&
                    t.length &&
                    ((e = this.getDecimalForValue(t[0])),
                    (s = 1 === t.length ? 1 - e : (this.getDecimalForValue(t[1]) - e) / 2),
                    (i = this.getDecimalForValue(t[t.length - 1])),
                    (n = 1 === t.length ? i : (i - this.getDecimalForValue(t[t.length - 2])) / 2));
                const o = t.length < 3 ? 0.5 : 0.25;
                (s = yt(s, 0, o)), (n = yt(n, 0, o)), (this._offsets = { start: s, end: n, factor: 1 / (s + 1 + n) });
            }
            _generate() {
                const t = this._adapter,
                    e = this.min,
                    i = this.max,
                    s = this.options,
                    n = s.time,
                    o = n.unit || In(n.minUnit, e, i, this._getLabelCapacity(e)),
                    r = B(s.ticks.stepSize, 1),
                    a = "week" === o && n.isoWeekday,
                    h = ut(a) || !0 === a,
                    l = {};
                let c,
                    d,
                    u = e;
                if ((h && (u = +t.startOf(u, "isoWeek", a)), (u = +t.startOf(u, h ? "day" : o)), t.diff(i, e, o) > 1e5 * r)) throw new Error(e + " and " + i + " are too far apart with stepSize of " + r + " " + o);
                const f = "data" === s.ticks.source && this.getDataTimestamps();
                for (c = u, d = 0; c < i; c = +t.add(c, r, o), d++) Ln(l, c, f);
                return (
                    (c !== i && "ticks" !== s.bounds && 1 !== d) || Ln(l, c, f),
                    Object.keys(l)
                        .sort(Cn)
                        .map((t) => +t)
                );
            }
            getLabelForValue(t) {
                const e = this._adapter,
                    i = this.options.time;
                return i.tooltipFormat ? e.format(t, i.tooltipFormat) : e.format(t, i.displayFormats.datetime);
            }
            format(t, e) {
                const i = this.options.time.displayFormats,
                    s = this._unit,
                    n = e || i[s];
                return this._adapter.format(t, n);
            }
            _tickFormatFunction(t, e, i, s) {
                const n = this.options,
                    o = n.ticks.callback;
                if (o) return F(o, [t, e, i], this);
                const r = n.time.displayFormats,
                    a = this._unit,
                    h = this._majorUnit,
                    l = a && r[a],
                    c = h && r[h],
                    d = i[e],
                    u = h && c && d && d.major;
                return this._adapter.format(t, s || (u ? c : l));
            }
            generateTickLabels(t) {
                let e, i, s;
                for (e = 0, i = t.length; e < i; ++e) (s = t[e]), (s.label = this._tickFormatFunction(s.value, e, t));
            }
            getDecimalForValue(t) {
                return null === t ? NaN : (t - this.min) / (this.max - this.min);
            }
            getPixelForValue(t) {
                const e = this._offsets,
                    i = this.getDecimalForValue(t);
                return this.getPixelForDecimal((e.start + i) * e.factor);
            }
            getValueForPixel(t) {
                const e = this._offsets,
                    i = this.getDecimalForPixel(t) / e.factor - e.end;
                return this.min + i * (this.max - this.min);
            }
            _getLabelSize(t) {
                const e = this.options.ticks,
                    i = this.ctx.measureText(t).width,
                    s = ft(this.isHorizontal() ? e.maxRotation : e.minRotation),
                    n = Math.cos(s),
                    o = Math.sin(s),
                    r = this._resolveTickFontOptions(0).size;
                return { w: i * n + r * o, h: i * o + r * n };
            }
            _getLabelCapacity(t) {
                const e = this.options.time,
                    i = e.displayFormats,
                    s = i[e.unit] || i.millisecond,
                    n = this._tickFormatFunction(t, 0, An(this, [t], this._majorUnit), s),
                    o = this._getLabelSize(n),
                    r = Math.floor(this.isHorizontal() ? this.width / o.w : this.height / o.h) - 1;
                return r > 0 ? r : 1;
            }
            getDataTimestamps() {
                let t,
                    e,
                    i = this._cache.data || [];
                if (i.length) return i;
                const s = this.getMatchingVisibleMetas();
                if (this._normalized && s.length) return (this._cache.data = s[0].controller.getAllParsedValues(this));
                for (t = 0, e = s.length; t < e; ++t) i = i.concat(s[t].controller.getAllParsedValues(this));
                return (this._cache.data = this.normalize(i));
            }
            getLabelTimestamps() {
                const t = this._cache.labels || [];
                let e, i;
                if (t.length) return t;
                const s = this.getLabels();
                for (e = 0, i = s.length; e < i; ++e) t.push(Pn(this, s[e]));
                return (this._cache.labels = this._normalized ? t : this.normalize(t));
            }
            normalize(t) {
                return (function (t) {
                    const e = new Set(t);
                    return e.size === t.length ? t : Array.from(e);
                })(t.sort(Cn));
            }
        }
        function zn(t, e, i) {
            let s,
                n,
                o,
                r,
                a = 0,
                h = t.length - 1;
            i
                ? (e >= t[a].pos && e <= t[h].pos && ({ lo: a, hi: h } = wt(t, "pos", e)), ({ pos: s, time: o } = t[a]), ({ pos: n, time: r } = t[h]))
                : (e >= t[a].time && e <= t[h].time && ({ lo: a, hi: h } = wt(t, "time", e)), ({ time: s, pos: o } = t[a]), ({ time: n, pos: r } = t[h]));
            const l = n - s;
            return l ? o + ((r - o) * (e - s)) / l : o;
        }
        var $n = i(353),
            Rn = i(445),
            Bn = i(375),
            Fn = i(816),
            Hn = i(750),
            Wn = i(313);
        $n.extend(Bn), $n.extend(Fn), $n.extend(Hn), $n.extend(Rn), $n.extend(Wn);
        var Yn = { datetime: "MMM D, YYYY, h:mm:ss a", millisecond: "h:mm:ss.SSS a", second: "h:mm:ss a", minute: "h:mm a", hour: "hA", day: "MMM D", week: "ll", month: "MMM YYYY", quarter: "[Q]Q - YYYY", year: "YYYY" };
        Si._date.override({
            formats: function () {
                return Yn;
            },
            parse: function (t, e) {
                var i = typeof t;
                return null === t || "undefined" === i ? null : "string" === i && "string" == typeof e ? ($n(t, e).isValid() ? $n(t, e).valueOf() : null) : t instanceof $n ? null : $n(t).isValid() ? $n(t).valueOf() : null;
            },
            format: function (t, e) {
                return $n(t).format(e);
            },
            add: function (t, e, i) {
                return $n(t).add(e, i).valueOf();
            },
            diff: function (t, e, i) {
                return $n(t).diff($n(e), i);
            },
            startOf: function (t, e, i) {
                if ("isoWeek" === e) {
                    var s = "number" == typeof i && i > 0 && i < 7 ? i : 1;
                    return $n(t).isoWeekday(s).startOf("day").valueOf();
                }
                return $n(t).startOf(e).valueOf();
            },
            endOf: function (t, e) {
                return $n(t).endOf(e).valueOf();
            },
        });
        class jn {
            constructor(t, e) {
                (this._time = t), (this._price = e);
            }
            getTime() {
                return this._time;
            }
            getPrice() {
                return this._price;
            }
            getX() {
                return this.getTime();
            }
            getY() {
                return this.getPrice();
            }
        }
        function Nn() {
            const t = document.getElementById("high-time"),
                e = document.getElementById("time").selectedOptions[0].innerText;
            e.toLowerCase() !== t.innerText && (t.innerText = e.toLowerCase());
        }
        function Vn(t) {
            document.getElementById("high-val").innerHTML = t.getPrice().toLocaleString();
        }
        function Un() {
            const t = document.getElementById("low-time"),
                e = document.getElementById("time").selectedOptions[0].innerText;
            e.toLowerCase() !== t.innerText && (t.innerText = e.toLowerCase());
        }
        function Xn(t) {
            document.getElementById("low-val").innerHTML = t.getPrice().toLocaleString();
        }
        function qn() {
            if (!document.getElementById("loader")) {
                const t = document.createElement("div");
                let e = t.cloneNode();
                (e.id = "loader"), (e.className = "lds-ripple"), e.appendChild(t.cloneNode()), e.appendChild(t.cloneNode()), document.getElementById("token-chart").before(e);
            }
        }
        function Zn() {
            return document.getElementById("period-overlay").checked;
        }
        function Kn() {
            const t = document.getElementById("period-overlay"),
                e = document.getElementById("period-overlay-options");
            (t.checked = !1), (e.style.display = "none");
        }
        function Gn(t) {
            return { h: "day", d: "week", m: "month", y: "month", l: "year" }[t.charAt(t.length - 1)];
        }
        Us.register(
            class extends as {
                static id = "line";
                static defaults = {
                    borderCapStyle: "butt",
                    borderDash: [],
                    borderDashOffset: 0,
                    borderJoinStyle: "miter",
                    borderWidth: 3,
                    capBezierPoints: !0,
                    cubicInterpolationMode: "default",
                    fill: !1,
                    spanGaps: !1,
                    stepped: !1,
                    tension: 0,
                };
                static defaultRoutes = { backgroundColor: "backgroundColor", borderColor: "borderColor" };
                static descriptors = { _scriptable: !0, _indexable: (t) => "borderDash" !== t && "fill" !== t };
                constructor(t) {
                    super(),
                        (this.animated = !0),
                        (this.options = void 0),
                        (this._chart = void 0),
                        (this._loop = void 0),
                        (this._fullLoop = void 0),
                        (this._path = void 0),
                        (this._points = void 0),
                        (this._segments = void 0),
                        (this._decimated = !1),
                        (this._pointsUpdated = !1),
                        (this._datasetIndex = void 0),
                        t && Object.assign(this, t);
                }
                updateControlPoints(t, e) {
                    const i = this.options;
                    if ((i.tension || "monotone" === i.cubicInterpolationMode) && !i.stepped && !this._pointsUpdated) {
                        const s = i.spanGaps ? this._loop : this._fullLoop;
                        $e(this._points, i, t, s, e), (this._pointsUpdated = !0);
                    }
                }
                set points(t) {
                    (this._points = t), delete this._segments, delete this._path, (this._pointsUpdated = !1);
                }
                get points() {
                    return this._points;
                }
                get segments() {
                    return (
                        this._segments ||
                        (this._segments = (function (t, e) {
                            const i = t.points,
                                s = t.options.spanGaps,
                                n = i.length;
                            if (!n) return [];
                            const o = !!t._loop,
                                { start: r, end: a } = (function (t, e, i, s) {
                                    let n = 0,
                                        o = e - 1;
                                    if (i && !s) for (; n < e && !t[n].skip; ) n++;
                                    for (; n < e && t[n].skip; ) n++;
                                    for (n %= e, i && (o += n); o > n && t[o % e].skip; ) o--;
                                    return (o %= e), { start: n, end: o };
                                })(i, n, o, s);
                            return (function (t, e, i, s) {
                                return s && s.setContext && i
                                    ? (function (t, e, i, s) {
                                          const n = t._chart.getContext(),
                                              o = si(t.options),
                                              {
                                                  _datasetIndex: r,
                                                  options: { spanGaps: a },
                                              } = t,
                                              h = i.length,
                                              l = [];
                                          let c = o,
                                              d = e[0].start,
                                              u = d;
                                          function f(t, e, s, n) {
                                              const o = a ? -1 : 1;
                                              if (t !== e) {
                                                  for (t += h; i[t % h].skip; ) t -= o;
                                                  for (; i[e % h].skip; ) e += o;
                                                  t % h != e % h && (l.push({ start: t % h, end: e % h, loop: s, style: n }), (c = n), (d = e % h));
                                              }
                                          }
                                          for (const t of e) {
                                              d = a ? d : t.start;
                                              let e,
                                                  o = i[d % h];
                                              for (u = d + 1; u <= t.end; u++) {
                                                  const a = i[u % h];
                                                  (e = si(s.setContext(xe(n, { type: "segment", p0: o, p1: a, p0DataIndex: (u - 1) % h, p1DataIndex: u % h, datasetIndex: r })))), ni(e, c) && f(d, u - 1, t.loop, c), (o = a), (c = e);
                                              }
                                              d < u - 1 && f(d, u - 1, t.loop, c);
                                          }
                                          return l;
                                      })(t, e, i, s)
                                    : e;
                            })(
                                t,
                                !0 === s
                                    ? [{ start: r, end: a, loop: o }]
                                    : (function (t, e, i, s) {
                                          const n = t.length,
                                              o = [];
                                          let r,
                                              a = e,
                                              h = t[e];
                                          for (r = e + 1; r <= i; ++r) {
                                              const i = t[r % n];
                                              i.skip || i.stop ? h.skip || ((s = !1), o.push({ start: e % n, end: (r - 1) % n, loop: s }), (e = a = i.stop ? r : null)) : ((a = r), h.skip && (e = r)), (h = i);
                                          }
                                          return null !== a && o.push({ start: e % n, end: a % n, loop: s }), o;
                                      })(i, r, a < r ? a + n : a, !!t._fullLoop && 0 === r && a === n - 1),
                                i,
                                e
                            );
                        })(this, this.options.segment))
                    );
                }
                first() {
                    const t = this.segments,
                        e = this.points;
                    return t.length && e[t[0].start];
                }
                last() {
                    const t = this.segments,
                        e = this.points,
                        i = t.length;
                    return i && e[t[i - 1].end];
                }
                interpolate(t, e) {
                    const i = this.options,
                        s = t[e],
                        n = this.points,
                        o = (function (t, e) {
                            const i = [],
                                s = t.segments;
                            for (let n = 0; n < s.length; n++) {
                                const o = ii(s[n], t.points, e);
                                o.length && i.push(...o);
                            }
                            return i;
                        })(this, { property: e, start: s, end: s });
                    if (!o.length) return;
                    const r = [],
                        a = (function (t) {
                            return t.stepped ? Ze : t.tension || "monotone" === t.cubicInterpolationMode ? Ke : qe;
                        })(i);
                    let h, l;
                    for (h = 0, l = o.length; h < l; ++h) {
                        const { start: l, end: c } = o[h],
                            d = n[l],
                            u = n[c];
                        if (d === u) {
                            r.push(d);
                            continue;
                        }
                        const f = a(d, u, Math.abs((s - d[e]) / (u[e] - d[e])), i.stepped);
                        (f[e] = t[e]), r.push(f);
                    }
                    return 1 === r.length ? r[0] : r;
                }
                pathSegment(t, e, i) {
                    return Js(this)(t, this, e, i);
                }
                path(t, e, i) {
                    const s = this.segments,
                        n = Js(this);
                    let o = this._loop;
                    (e = e || 0), (i = i || this.points.length - e);
                    for (const r of s) o &= n(t, this, r, { start: e, end: e + i - 1 });
                    return !!o;
                }
                draw(t, e, i, s) {
                    const n = this.options || {};
                    (this.points || []).length &&
                        n.borderWidth &&
                        (t.save(),
                        (function (t, e, i, s) {
                            tn && !e.options.segment
                                ? (function (t, e, i, s) {
                                      let n = e._path;
                                      n || ((n = e._path = new Path2D()), e.path(n, i, s) && n.closePath()), qs(t, e.options), t.stroke(n);
                                  })(t, e, i, s)
                                : (function (t, e, i, s) {
                                      const { segments: n, options: o } = e,
                                          r = Js(e);
                                      for (const a of n) qs(t, o, a.style), t.beginPath(), r(t, e, a, { start: i, end: i + s - 1 }) && t.closePath(), t.stroke();
                                  })(t, e, i, s);
                        })(t, this, i, s),
                        t.restore()),
                        this.animated && ((this._pointsUpdated = !1), (this._path = void 0));
                }
            },
            class extends as {
                static id = "point";
                parsed;
                skip;
                stop;
                static defaults = { borderWidth: 1, hitRadius: 1, hoverBorderWidth: 1, hoverRadius: 4, pointStyle: "circle", radius: 3, rotation: 0 };
                static defaultRoutes = { backgroundColor: "backgroundColor", borderColor: "borderColor" };
                constructor(t) {
                    super(), (this.options = void 0), (this.parsed = void 0), (this.skip = void 0), (this.stop = void 0), t && Object.assign(this, t);
                }
                inRange(t, e, i) {
                    const s = this.options,
                        { x: n, y: o } = this.getProps(["x", "y"], i);
                    return Math.pow(t - n, 2) + Math.pow(e - o, 2) < Math.pow(s.hitRadius + s.radius, 2);
                }
                inXRange(t, e) {
                    return en(this, t, "x", e);
                }
                inYRange(t, e) {
                    return en(this, t, "y", e);
                }
                getCenterPoint(t) {
                    const { x: e, y: i } = this.getProps(["x", "y"], t);
                    return { x: e, y: i };
                }
                size(t) {
                    let e = (t = t || this.options || {}).radius || 0;
                    return (e = Math.max(e, (e && t.hoverRadius) || 0)), 2 * (e + ((e && t.borderWidth) || 0));
                }
                draw(t, e) {
                    const i = this.options;
                    this.skip || i.radius < 0.1 || !te(this, e, this.size(i) / 2) || ((t.strokeStyle = i.borderColor), (t.lineWidth = i.borderWidth), (t.fillStyle = i.backgroundColor), Qt(t, i, this.x, this.y));
                }
                getRange() {
                    const t = this.options || {};
                    return t.radius + t.hitRadius;
                }
            },
            class extends wi {
                static id = "line";
                static defaults = { datasetElementType: "line", dataElementType: "point", showLine: !0, spanGaps: !1 };
                static overrides = { scales: { _index_: { type: "category" }, _value_: { type: "linear" } } };
                initialize() {
                    (this.enableOptionSharing = !0), (this.supportsDecimation = !0), super.initialize();
                }
                update(t) {
                    const e = this._cachedMeta,
                        { dataset: i, data: s = [], _dataset: n } = e,
                        o = this.chart._animationsDisabled;
                    let { start: r, count: a } = (function (t, e, i) {
                        const s = e.length;
                        let n = 0,
                            o = s;
                        if (t._sorted) {
                            const { iScale: r, _parsed: a } = t,
                                h = r.axis,
                                { min: l, max: c, minDefined: d, maxDefined: u } = r.getUserBounds();
                            d && (n = yt(Math.min(wt(a, h, l).lo, i ? s : wt(e, h, r.getPixelForValue(l)).lo), 0, s - 1)),
                                (o = u ? yt(Math.max(wt(a, r.axis, c, !0).hi + 1, i ? 0 : wt(e, h, r.getPixelForValue(c), !0).hi + 1), n, s) - n : s - n);
                        }
                        return { start: n, count: o };
                    })(e, s, o);
                    (this._drawStart = r),
                        (this._drawCount = a),
                        (function (t) {
                            const { xScale: e, yScale: i, _scaleRanges: s } = t,
                                n = { xmin: e.min, xmax: e.max, ymin: i.min, ymax: i.max };
                            if (!s) return (t._scaleRanges = n), !0;
                            const o = s.xmin !== e.min || s.xmax !== e.max || s.ymin !== i.min || s.ymax !== i.max;
                            return Object.assign(s, n), o;
                        })(e) && ((r = 0), (a = s.length)),
                        (i._chart = this.chart),
                        (i._datasetIndex = this.index),
                        (i._decimated = !!n._decimated),
                        (i.points = s);
                    const h = this.resolveDatasetElementOptions(t);
                    this.options.showLine || (h.borderWidth = 0), (h.segment = this.options.segment), this.updateElement(i, void 0, { animated: !o, options: h }, t), this.updateElements(s, r, a, t);
                }
                updateElements(t, e, i, s) {
                    const n = "reset" === s,
                        { iScale: o, vScale: r, _stacked: a, _dataset: h } = this._cachedMeta,
                        { sharedOptions: l, includeOptions: c } = this._getSharedOptions(e, s),
                        d = o.axis,
                        u = r.axis,
                        { spanGaps: f, segment: g } = this.options,
                        p = ut(f) ? f : Number.POSITIVE_INFINITY,
                        m = this.chart._animationsDisabled || n || "none" === s,
                        x = e + i,
                        b = t.length;
                    let y = e > 0 && this.getParsed(e - 1);
                    for (let i = 0; i < b; ++i) {
                        const f = t[i],
                            b = m ? f : {};
                        if (i < e || i >= x) {
                            b.skip = !0;
                            continue;
                        }
                        const _ = this.getParsed(i),
                            v = A(_[u]),
                            w = (b[d] = o.getPixelForValue(_[d], i)),
                            M = (b[u] = n || v ? r.getBasePixel() : r.getPixelForValue(a ? this.applyStack(r, _, a) : _[u], i));
                        (b.skip = isNaN(w) || isNaN(M) || v),
                            (b.stop = i > 0 && Math.abs(_[d] - y[d]) > p),
                            g && ((b.parsed = _), (b.raw = h.data[i])),
                            c && (b.options = l || this.resolveDataElementOptions(i, f.active ? "active" : s)),
                            m || this.updateElement(f, i, b, s),
                            (y = _);
                    }
                }
                getMaxOverflow() {
                    const t = this._cachedMeta,
                        e = t.dataset,
                        i = (e.options && e.options.borderWidth) || 0,
                        s = t.data || [];
                    if (!s.length) return i;
                    const n = s[0].size(this.resolveDataElementOptions(0)),
                        o = s[s.length - 1].size(this.resolveDataElementOptions(s.length - 1));
                    return Math.max(i, n, o) / 2;
                }
                draw() {
                    const t = this._cachedMeta;
                    t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis), super.draw();
                }
            },
            Dn,
            class extends En {
                static id = "timeseries";
                static defaults = En.defaults;
                constructor(t) {
                    super(t), (this._table = []), (this._minPos = void 0), (this._tableRange = void 0);
                }
                initOffsets() {
                    const t = this._getTimestampsForTable(),
                        e = (this._table = this.buildLookupTable(t));
                    (this._minPos = zn(e, this.min)), (this._tableRange = zn(e, this.max) - this._minPos), super.initOffsets(t);
                }
                buildLookupTable(t) {
                    const { min: e, max: i } = this,
                        s = [],
                        n = [];
                    let o, r, a, h, l;
                    for (o = 0, r = t.length; o < r; ++o) (h = t[o]), h >= e && h <= i && s.push(h);
                    if (s.length < 2)
                        return [
                            { time: e, pos: 0 },
                            { time: i, pos: 1 },
                        ];
                    for (o = 0, r = s.length; o < r; ++o) (l = s[o + 1]), (a = s[o - 1]), (h = s[o]), Math.round((l + a) / 2) !== h && n.push({ time: h, pos: o / (r - 1) });
                    return n;
                }
                _generate() {
                    const t = this.min,
                        e = this.max;
                    let i = super.getDataTimestamps();
                    return (i.includes(t) && i.length) || i.splice(0, 0, t), (i.includes(e) && 1 !== i.length) || i.push(e), i.sort((t, e) => t - e);
                }
                _getTimestampsForTable() {
                    let t = this._cache.all || [];
                    if (t.length) return t;
                    const e = this.getDataTimestamps(),
                        i = this.getLabelTimestamps();
                    return (t = e.length && i.length ? this.normalize(e.concat(i)) : e.length ? e : i), (t = this._cache.all = t), t;
                }
                getDecimalForValue(t) {
                    return (zn(this._table, t) - this._minPos) / this._tableRange;
                }
                getValueForPixel(t) {
                    const e = this._offsets,
                        i = this.getDecimalForPixel(t) / e.factor - e.end;
                    return zn(this._table, i * this._tableRange + this._minPos, !0);
                }
            },
            rn,
            hn,
            Mn
        );
        class Qn {
            constructor() {
                (this._context = document.getElementById("token-chart").getContext("2d")), (this._chartActive = !1), (this._lastDatum = null), (this._highDatum = null), (this._lowDatum = null), (this._lateUpdate = !1);
            }
            get highDatum() {
                return this._highDatum;
            }
            get lowDatum() {
                return this._lowDatum;
            }
            async #t(t) {
                this._chart = new Us(this._context, t);
            }
            async #e(t) {
                if (null === this._highDatum) return (this._highDatum = new jn(t.getTime(), 0)), void (this._lowDatum = t);
                t.getPrice() > this._highDatum.getPrice() ? ((this._highDatum = t), Vn(this.highDatum)) : t.getPrice() < this._lowDatum.getPrice() && ((this._lowDatum = t), Xn(this.lowDatum));
            }
            async #i(t, e, i, s) {
                const n = [],
                    o = [],
                    r = (function (t) {
                        let e = parseInt(t.slice(0, t.length - 1)).toFixed(0);
                        switch (t.slice(t.length - 1)) {
                            case "h":
                                return 3600 * e * 1e3;
                            case "d":
                                return 86400 * e * 1e3;
                            case "m":
                                return 1e3 * (e * (730.488 * 60 * 60)).toFixed(0);
                            case "y":
                                return 1e3 * (31557600 * e).toFixed(0);
                            case "l":
                                console.warn("This path should not happen, this warning is an error in logic");
                        }
                    })(e);
                for (let t = 0; t < s.length; t++) {
                    const e = s[t].getX();
                    t < s.length / 2 ? o.push({ x: new Date(e.getTime() + r), y: s[t].getY() }) : (await this.#e(s[t]), n.push({ x: s[t].getX(), y: s[t].getY() }));
                }
                const a = {
                    type: "line",
                    data: {
                        datasets: [
                            { borderColor: "gold", label: t.toUpperCase() + " WoW Token Price", data: n, cubicInterpolationMode: "monotone", pointRadius: 0 },
                            { borderColor: "red", label: `Previous ${document.getElementById("time").selectedOptions[0].innerText} ${t.toUpperCase()} WoW Token Price`, data: o, cubicInterpolationMode: "monotone", pointRadius: 0 },
                        ],
                    },
                    options: {
                        interaction: { intersect: !1, mode: "index" },
                        scales: {
                            x: { type: "time", grid: { color: "#625f62" }, ticks: { color: "#a7a4ab", font: { size: 18 } }, time: { unit: Gn(e) } },
                            y: { beginAtZero: i, grid: { color: "#2f2c2f" }, ticks: { color: "#a7a4ab", font: { size: 18 } } },
                        },
                    },
                };
                await this.#t(a);
            }
            async #s(t, e, i, s) {
                const n = [];
                for (let t = 0; t < s.length; t++) (this._lastDatum = s[t]), await this.#e(s[t]), n.push({ x: s[t].getX(), y: s[t].getY() });
                const o = {
                    type: "line",
                    data: { 
                        datasets: [
                            { 
                                borderColor: "gold",  
                                label: "Preço da Ficha de WoW", 
                                data: n, 
                                cubicInterpolationMode: "monotone", 
                                pointRadius: 0 
                            }
                        ] 
                    },
                    options: {
                        interaction: { intersect: !1, mode: "index" },
                        plugins: {
                            legend: {
                                labels: {
                                    color: "white", // Define a cor do texto da legenda
                                },
                            },
                        },
                        scales: {
                            x: { 
                                type: "time", 
                                grid: { color: "#625f62" }, 
                                ticks: { 
                                    color: "#a7a4ab", 
                                    font: { size: 18 } 
                                }, 
                                time: { unit: Gn(e) } 
                            },
                            y: { 
                                beginAtZero: i, 
                                grid: { color: "#ffffff" }, 
                                ticks: { 
                                    color: "#ffffff", 
                                    font: { size: 18 } 
                                },
                            },
                        },
                    },
                };
                await this.#t(o);
            }
            async createChart(t, e, i, s) {
                let n = this._lastDatum;
                Zn() ? await this.#i(t, e, i, s) : await this.#s(t, e, i, s),
                    (function () {
                        const t = document.getElementById("time").selectedOptions[0].innerText;
                        document.getElementById("period-time").innerText = t.toLocaleString();
                    })(),
                    Vn(this.highDatum),
                    Xn(this.lowDatum),
                    this._lateUpdate && (this._lastDatum.getPrice() !== n.getPrice() && this._lastDatum.getTime() < n.getTime() && (await this.addDataToChart(n)), (this._lateUpdate = !1)),
                    (this._chartActive = !0);
            }
            async destroyChart() {
                await this._chart.destroy(), (this._chartActive = !1), (this._lastDatum = null), (this._highDatum = null), (this._lowDatum = null), (this._lateUpdate = !1);
            }
            async lateUpdate(t) {
                (this._lastDatum = t), (this._lateUpdate = !0);
            }
            async addDataToChart(t) {
                (this._lastDatum = t),
                    t.getPrice() > this._highDatum.getPrice() ? ((this._highDatum = t), Vn(this.highDatum)) : t.getPrice() < this._lowDatum.getPrice() && ((this._lowDatum = t), Xn(this.lowDatum)),
                    this._chart.data.datasets[0].data.push({ x: t.getX(), y: t.getY() }),
                    this._chart.update();
            }
            active() {
                return this._chartActive;
            }
            toggleYStart(t) {
                (this._chart.options.scales.y.beginAtZero = t), this._chart.update();
            }
        }
        let Jn,
            to,
            eo = "",
            io = "",
            so = "",
            no = !1;
        const oo = { us: 0, eu: 0, kr: 0, tw: 0 },
            ro = { us: [], eu: [], kr: [], tw: [] };
        async function ao() {
            await (async function (t) {
                await Promise.all([ho("us", t), ho("eu", t), ho("kr", t), ho("tw", t)]);
            })(
                await (async function () {
                    const t = await fetch("https://data.wowtoken.app/v2/current/retail.json");
                    return await t.json();
                })()
            );
        }
        async function ho(t, e) {
            oo[t] !== e[t][1] && ((oo[t] = e[t][1]), t === eo && (fo(), (Jn = new jn(Date.parse(e[t][0]), e[t][1])), "none" === so && to.active() ? await to.addDataToChart(Jn) : "none" !== so || to.active() || (await to.lateUpdate(Jn))));
        }
        function lo() {
            let t = document.getElementById("advanced-options");
            document.getElementById("enable-advanced").checked ? (t.style.display = "flex") : (t.style.display = "none");
        }
        function co() {
            (no = document.getElementById("y-start").checked), to.toggleYStart(no);
        }
        async function uo() {
            let t = io;
            if (Zn()) {
                let e = 2 * parseInt(t.slice(0, t.length - 1)),
                    i = t.slice(t.length - 1);
                t = `${e}${i}`;
            }
            if (
                ((ro[eo] = await (async function (t, e, i) {
                    const s = [],
                        n = await fetch(
                            (function (t, e, i) {
                                let s = "https://data.wowtoken.app/v2/";
                                return (s += "" !== i && "none" !== i ? `math/${i}/retail/` : "relative/retail/"), (s += `${t}/${e}.json`), s;
                            })(t, e, i)
                        ),
                        o = await n.json();
                    for (let t = 0, e = o.length; t < e; t++) {
                        const e = new jn(new Date(o[t][0]), o[t][1]);
                        s.push(e);
                    }
                    return s;
                })(eo, t, so)),
                to.active())
            ) {
                for (let t = 0; t < ro[eo].length; t++) await to.addDataToChart(ro[eo][t]);
                console.warn("This should never hit, and should be okay to remove");
            } else await to.createChart(eo, io, no, ro[eo]);
            !(function () {
                let t = document.getElementById("loader");
                t && t.remove();
            })();
        }
        function fo() {
            document.getElementById("token").innerText = oo[eo].toLocaleString();
        }
        function go() {
            const t = new URLSearchParams(window.location.search);
            t.has("region") &&
                (function (t) {
                    if (["us", "eu", "tw", "kr"].includes(t.get("region").toLowerCase())) {
                        eo = t.get("region").toLowerCase();
                        let e = document.getElementById("region");
                        for (let t = 0; t < e.options.length; t++) e.options[t].value === eo && (e.options[t].selected = !0);
                    } else console.warn("An incorrect or malformed region selection was made in the query string");
                })(t),
                t.has("time") &&
                    (function (t) {
                        if (["72h", "168h", "336h", "720h", "30d", "2190h", "90d", "1y", "2y", "6m", "all"].includes(t.get("time").toLowerCase())) {
                            (io = t.get("time").toLowerCase()), "all" === io && Kn();
                            let e = document.getElementById("time");
                            for (let t = 0; t < e.options.length; t++) e.options[t].value === io && (e.options[t].selected = !0);
                            Nn(), Un();
                        } else console.warn("An incorrect or malformed time selection was made in the query string");
                    })(t),

                t.has("startAtZero") &&
                    (function (t) {
                        no = "true" === t.get("startAtZero");
                        let e = document.getElementById("enable-advanced"),
                            i = document.getElementById("y-start");
                        (e.checked = no), (i.checked = no), lo(), co();
                    })(t),
                t.has("overlay") &&
                    (function (t) {
                        "previous_time" === t.get("overlay")
                            ? (function () {
                                  const t = document.getElementById("period-overlay"),
                                      e = document.getElementById("period-overlay-options"),
                                      i = document.getElementById("advanced-options");
                                  (t.checked = !0), (i.style.display = "flex"), (e.style.display = "flex");
                              })()
                            : Kn();
                    })(t);
        }
        function po() {

                document.getElementById("region").addEventListener("change", function () {
                    !(async function (t) {
                        t !== eo && (await to.destroyChart(), qn(), (eo = t)), fo(), await uo();
                    })(this.value);
                }),
                (eo = document.getElementById("region").value),
                document.getElementById("time").addEventListener("change", function () {
                    !(async function (t) {
                        t !== io && (await to.destroyChart(), qn(), (io = t)), "all" === t ? Kn() : (document.getElementById("period-overlay-options").style.display = "flex"), await uo(), Nn(), Un();
                    })(this.value);
                }),
                (io = document.getElementById("time").value),


                document.getElementById("y-start").addEventListener("change", () => {
                    co();
                }),
                document.getElementById("period-overlay").addEventListener("change", () => {
                    !(async function () {
                        await to.destroyChart(), qn(), await uo();
                    })();
                });
        }
        document.addEventListener(
            "DOMContentLoaded",
            function () {
                po(), go(), (to = new Qn()), Promise.all([ao()]).then(uo), setInterval(ao, 6e4);
            },
            !1
        );
    })();
    var n = window;
    for (var o in s) n[o] = s[o];
    s.__esModule && Object.defineProperty(n, "__esModule", { value: !0 });
})();
