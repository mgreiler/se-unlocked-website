/**handles:underscore**/
(function () {
  function a(a) {
    function b(b, c, d, e, f, g) {
      for (; f >= 0 && f < g; f += a) {
        var h = e ? e[f] : f;
        d = c(d, b[h], h, b);
      }
      return d;
    }
    return function (c, d, e, f) {
      d = t(d, f, 4);
      var g = !A(c) && s.keys(c),
        h = (g || c).length,
        i = a > 0 ? 0 : h - 1;
      return (
        arguments.length < 3 && ((e = c[g ? g[i] : i]), (i += a)),
        b(c, d, e, g, i, h)
      );
    };
  }
  function b(a) {
    return function (b, c, d) {
      c = u(c, d);
      for (var e = z(b), f = a > 0 ? 0 : e - 1; f >= 0 && f < e; f += a)
        if (c(b[f], f, b)) return f;
      return -1;
    };
  }
  function c(a, b, c) {
    return function (d, e, f) {
      var g = 0,
        h = z(d);
      if ("number" == typeof f)
        a > 0
          ? (g = f >= 0 ? f : Math.max(f + h, g))
          : (h = f >= 0 ? Math.min(f + 1, h) : f + h + 1);
      else if (c && f && h) return (f = c(d, e)), d[f] === e ? f : -1;
      if (e !== e)
        return (f = b(k.call(d, g, h), s.isNaN)), f >= 0 ? f + g : -1;
      for (f = a > 0 ? g : h - 1; f >= 0 && f < h; f += a)
        if (d[f] === e) return f;
      return -1;
    };
  }
  function d(a, b) {
    var c = F.length,
      d = a.constructor,
      e = (s.isFunction(d) && d.prototype) || h,
      f = "constructor";
    for (s.has(a, f) && !s.contains(b, f) && b.push(f); c--; )
      (f = F[c]), f in a && a[f] !== e[f] && !s.contains(b, f) && b.push(f);
  }
  var e = this,
    f = e._,
    g = Array.prototype,
    h = Object.prototype,
    i = Function.prototype,
    j = g.push,
    k = g.slice,
    l = h.toString,
    m = h.hasOwnProperty,
    n = Array.isArray,
    o = Object.keys,
    p = i.bind,
    q = Object.create,
    r = function () {},
    s = function (a) {
      return a instanceof s
        ? a
        : this instanceof s
          ? void (this._wrapped = a)
          : new s(a);
    };
  "undefined" != typeof exports
    ? ("undefined" != typeof module &&
        module.exports &&
        (exports = module.exports = s),
      (exports._ = s))
    : (e._ = s),
    (s.VERSION = "1.8.3");
  var t = function (a, b, c) {
      if (void 0 === b) return a;
      switch (null == c ? 3 : c) {
        case 1:
          return function (c) {
            return a.call(b, c);
          };
        case 2:
          return function (c, d) {
            return a.call(b, c, d);
          };
        case 3:
          return function (c, d, e) {
            return a.call(b, c, d, e);
          };
        case 4:
          return function (c, d, e, f) {
            return a.call(b, c, d, e, f);
          };
      }
      return function () {
        return a.apply(b, arguments);
      };
    },
    u = function (a, b, c) {
      return null == a
        ? s.identity
        : s.isFunction(a)
          ? t(a, b, c)
          : s.isObject(a)
            ? s.matcher(a)
            : s.property(a);
    };
  s.iteratee = function (a, b) {
    return u(a, b, 1 / 0);
  };
  var v = function (a, b) {
      return function (c) {
        var d = arguments.length;
        if (d < 2 || null == c) return c;
        for (var e = 1; e < d; e++)
          for (
            var f = arguments[e], g = a(f), h = g.length, i = 0;
            i < h;
            i++
          ) {
            var j = g[i];
            (b && void 0 !== c[j]) || (c[j] = f[j]);
          }
        return c;
      };
    },
    w = function (a) {
      if (!s.isObject(a)) return {};
      if (q) return q(a);
      r.prototype = a;
      var b = new r();
      return (r.prototype = null), b;
    },
    x = function (a) {
      return function (b) {
        return null == b ? void 0 : b[a];
      };
    },
    y = Math.pow(2, 53) - 1,
    z = x("length"),
    A = function (a) {
      var b = z(a);
      return "number" == typeof b && b >= 0 && b <= y;
    };
  (s.each = s.forEach =
    function (a, b, c) {
      b = t(b, c);
      var d, e;
      if (A(a)) for (d = 0, e = a.length; d < e; d++) b(a[d], d, a);
      else {
        var f = s.keys(a);
        for (d = 0, e = f.length; d < e; d++) b(a[f[d]], f[d], a);
      }
      return a;
    }),
    (s.map = s.collect =
      function (a, b, c) {
        b = u(b, c);
        for (
          var d = !A(a) && s.keys(a), e = (d || a).length, f = Array(e), g = 0;
          g < e;
          g++
        ) {
          var h = d ? d[g] : g;
          f[g] = b(a[h], h, a);
        }
        return f;
      }),
    (s.reduce = s.foldl = s.inject = a(1)),
    (s.reduceRight = s.foldr = a(-1)),
    (s.find = s.detect =
      function (a, b, c) {
        var d;
        if (
          ((d = A(a) ? s.findIndex(a, b, c) : s.findKey(a, b, c)),
          void 0 !== d && d !== -1)
        )
          return a[d];
      }),
    (s.filter = s.select =
      function (a, b, c) {
        var d = [];
        return (
          (b = u(b, c)),
          s.each(a, function (a, c, e) {
            b(a, c, e) && d.push(a);
          }),
          d
        );
      }),
    (s.reject = function (a, b, c) {
      return s.filter(a, s.negate(u(b)), c);
    }),
    (s.every = s.all =
      function (a, b, c) {
        b = u(b, c);
        for (
          var d = !A(a) && s.keys(a), e = (d || a).length, f = 0;
          f < e;
          f++
        ) {
          var g = d ? d[f] : f;
          if (!b(a[g], g, a)) return !1;
        }
        return !0;
      }),
    (s.some = s.any =
      function (a, b, c) {
        b = u(b, c);
        for (
          var d = !A(a) && s.keys(a), e = (d || a).length, f = 0;
          f < e;
          f++
        ) {
          var g = d ? d[f] : f;
          if (b(a[g], g, a)) return !0;
        }
        return !1;
      }),
    (s.contains =
      s.includes =
      s.include =
        function (a, b, c, d) {
          return (
            A(a) || (a = s.values(a)),
            ("number" != typeof c || d) && (c = 0),
            s.indexOf(a, b, c) >= 0
          );
        }),
    (s.invoke = function (a, b) {
      var c = k.call(arguments, 2),
        d = s.isFunction(b);
      return s.map(a, function (a) {
        var e = d ? b : a[b];
        return null == e ? e : e.apply(a, c);
      });
    }),
    (s.pluck = function (a, b) {
      return s.map(a, s.property(b));
    }),
    (s.where = function (a, b) {
      return s.filter(a, s.matcher(b));
    }),
    (s.findWhere = function (a, b) {
      return s.find(a, s.matcher(b));
    }),
    (s.max = function (a, b, c) {
      var d,
        e,
        f = -(1 / 0),
        g = -(1 / 0);
      if (null == b && null != a) {
        a = A(a) ? a : s.values(a);
        for (var h = 0, i = a.length; h < i; h++) (d = a[h]), d > f && (f = d);
      } else
        (b = u(b, c)),
          s.each(a, function (a, c, d) {
            (e = b(a, c, d)),
              (e > g || (e === -(1 / 0) && f === -(1 / 0))) &&
                ((f = a), (g = e));
          });
      return f;
    }),
    (s.min = function (a, b, c) {
      var d,
        e,
        f = 1 / 0,
        g = 1 / 0;
      if (null == b && null != a) {
        a = A(a) ? a : s.values(a);
        for (var h = 0, i = a.length; h < i; h++) (d = a[h]), d < f && (f = d);
      } else
        (b = u(b, c)),
          s.each(a, function (a, c, d) {
            (e = b(a, c, d)),
              (e < g || (e === 1 / 0 && f === 1 / 0)) && ((f = a), (g = e));
          });
      return f;
    }),
    (s.shuffle = function (a) {
      for (
        var b, c = A(a) ? a : s.values(a), d = c.length, e = Array(d), f = 0;
        f < d;
        f++
      )
        (b = s.random(0, f)), b !== f && (e[f] = e[b]), (e[b] = c[f]);
      return e;
    }),
    (s.sample = function (a, b, c) {
      return null == b || c
        ? (A(a) || (a = s.values(a)), a[s.random(a.length - 1)])
        : s.shuffle(a).slice(0, Math.max(0, b));
    }),
    (s.sortBy = function (a, b, c) {
      return (
        (b = u(b, c)),
        s.pluck(
          s
            .map(a, function (a, c, d) {
              return { value: a, index: c, criteria: b(a, c, d) };
            })
            .sort(function (a, b) {
              var c = a.criteria,
                d = b.criteria;
              if (c !== d) {
                if (c > d || void 0 === c) return 1;
                if (c < d || void 0 === d) return -1;
              }
              return a.index - b.index;
            }),
          "value",
        )
      );
    });
  var B = function (a) {
    return function (b, c, d) {
      var e = {};
      return (
        (c = u(c, d)),
        s.each(b, function (d, f) {
          var g = c(d, f, b);
          a(e, d, g);
        }),
        e
      );
    };
  };
  (s.groupBy = B(function (a, b, c) {
    s.has(a, c) ? a[c].push(b) : (a[c] = [b]);
  })),
    (s.indexBy = B(function (a, b, c) {
      a[c] = b;
    })),
    (s.countBy = B(function (a, b, c) {
      s.has(a, c) ? a[c]++ : (a[c] = 1);
    })),
    (s.toArray = function (a) {
      return a
        ? s.isArray(a)
          ? k.call(a)
          : A(a)
            ? s.map(a, s.identity)
            : s.values(a)
        : [];
    }),
    (s.size = function (a) {
      return null == a ? 0 : A(a) ? a.length : s.keys(a).length;
    }),
    (s.partition = function (a, b, c) {
      b = u(b, c);
      var d = [],
        e = [];
      return (
        s.each(a, function (a, c, f) {
          (b(a, c, f) ? d : e).push(a);
        }),
        [d, e]
      );
    }),
    (s.first =
      s.head =
      s.take =
        function (a, b, c) {
          if (null != a)
            return null == b || c ? a[0] : s.initial(a, a.length - b);
        }),
    (s.initial = function (a, b, c) {
      return k.call(a, 0, Math.max(0, a.length - (null == b || c ? 1 : b)));
    }),
    (s.last = function (a, b, c) {
      if (null != a)
        return null == b || c
          ? a[a.length - 1]
          : s.rest(a, Math.max(0, a.length - b));
    }),
    (s.rest =
      s.tail =
      s.drop =
        function (a, b, c) {
          return k.call(a, null == b || c ? 1 : b);
        }),
    (s.compact = function (a) {
      return s.filter(a, s.identity);
    });
  var C = function (a, b, c, d) {
    for (var e = [], f = 0, g = d || 0, h = z(a); g < h; g++) {
      var i = a[g];
      if (A(i) && (s.isArray(i) || s.isArguments(i))) {
        b || (i = C(i, b, c));
        var j = 0,
          k = i.length;
        for (e.length += k; j < k; ) e[f++] = i[j++];
      } else c || (e[f++] = i);
    }
    return e;
  };
  (s.flatten = function (a, b) {
    return C(a, b, !1);
  }),
    (s.without = function (a) {
      return s.difference(a, k.call(arguments, 1));
    }),
    (s.uniq = s.unique =
      function (a, b, c, d) {
        s.isBoolean(b) || ((d = c), (c = b), (b = !1)),
          null != c && (c = u(c, d));
        for (var e = [], f = [], g = 0, h = z(a); g < h; g++) {
          var i = a[g],
            j = c ? c(i, g, a) : i;
          b
            ? ((g && f === j) || e.push(i), (f = j))
            : c
              ? s.contains(f, j) || (f.push(j), e.push(i))
              : s.contains(e, i) || e.push(i);
        }
        return e;
      }),
    (s.union = function () {
      return s.uniq(C(arguments, !0, !0));
    }),
    (s.intersection = function (a) {
      for (var b = [], c = arguments.length, d = 0, e = z(a); d < e; d++) {
        var f = a[d];
        if (!s.contains(b, f)) {
          for (var g = 1; g < c && s.contains(arguments[g], f); g++);
          g === c && b.push(f);
        }
      }
      return b;
    }),
    (s.difference = function (a) {
      var b = C(arguments, !0, !0, 1);
      return s.filter(a, function (a) {
        return !s.contains(b, a);
      });
    }),
    (s.zip = function () {
      return s.unzip(arguments);
    }),
    (s.unzip = function (a) {
      for (
        var b = (a && s.max(a, z).length) || 0, c = Array(b), d = 0;
        d < b;
        d++
      )
        c[d] = s.pluck(a, d);
      return c;
    }),
    (s.object = function (a, b) {
      for (var c = {}, d = 0, e = z(a); d < e; d++)
        b ? (c[a[d]] = b[d]) : (c[a[d][0]] = a[d][1]);
      return c;
    }),
    (s.findIndex = b(1)),
    (s.findLastIndex = b(-1)),
    (s.sortedIndex = function (a, b, c, d) {
      c = u(c, d, 1);
      for (var e = c(b), f = 0, g = z(a); f < g; ) {
        var h = Math.floor((f + g) / 2);
        c(a[h]) < e ? (f = h + 1) : (g = h);
      }
      return f;
    }),
    (s.indexOf = c(1, s.findIndex, s.sortedIndex)),
    (s.lastIndexOf = c(-1, s.findLastIndex)),
    (s.range = function (a, b, c) {
      null == b && ((b = a || 0), (a = 0)), (c = c || 1);
      for (
        var d = Math.max(Math.ceil((b - a) / c), 0), e = Array(d), f = 0;
        f < d;
        f++, a += c
      )
        e[f] = a;
      return e;
    });
  var D = function (a, b, c, d, e) {
    if (!(d instanceof b)) return a.apply(c, e);
    var f = w(a.prototype),
      g = a.apply(f, e);
    return s.isObject(g) ? g : f;
  };
  (s.bind = function (a, b) {
    if (p && a.bind === p) return p.apply(a, k.call(arguments, 1));
    if (!s.isFunction(a))
      throw new TypeError("Bind must be called on a function");
    var c = k.call(arguments, 2),
      d = function () {
        return D(a, d, b, this, c.concat(k.call(arguments)));
      };
    return d;
  }),
    (s.partial = function (a) {
      var b = k.call(arguments, 1),
        c = function () {
          for (var d = 0, e = b.length, f = Array(e), g = 0; g < e; g++)
            f[g] = b[g] === s ? arguments[d++] : b[g];
          for (; d < arguments.length; ) f.push(arguments[d++]);
          return D(a, c, this, this, f);
        };
      return c;
    }),
    (s.bindAll = function (a) {
      var b,
        c,
        d = arguments.length;
      if (d <= 1) throw new Error("bindAll must be passed function names");
      for (b = 1; b < d; b++) (c = arguments[b]), (a[c] = s.bind(a[c], a));
      return a;
    }),
    (s.memoize = function (a, b) {
      var c = function (d) {
        var e = c.cache,
          f = "" + (b ? b.apply(this, arguments) : d);
        return s.has(e, f) || (e[f] = a.apply(this, arguments)), e[f];
      };
      return (c.cache = {}), c;
    }),
    (s.delay = function (a, b) {
      var c = k.call(arguments, 2);
      return setTimeout(function () {
        return a.apply(null, c);
      }, b);
    }),
    (s.defer = s.partial(s.delay, s, 1)),
    (s.throttle = function (a, b, c) {
      var d,
        e,
        f,
        g = null,
        h = 0;
      c || (c = {});
      var i = function () {
        (h = c.leading === !1 ? 0 : s.now()),
          (g = null),
          (f = a.apply(d, e)),
          g || (d = e = null);
      };
      return function () {
        var j = s.now();
        h || c.leading !== !1 || (h = j);
        var k = b - (j - h);
        return (
          (d = this),
          (e = arguments),
          k <= 0 || k > b
            ? (g && (clearTimeout(g), (g = null)),
              (h = j),
              (f = a.apply(d, e)),
              g || (d = e = null))
            : g || c.trailing === !1 || (g = setTimeout(i, k)),
          f
        );
      };
    }),
    (s.debounce = function (a, b, c) {
      var d,
        e,
        f,
        g,
        h,
        i = function () {
          var j = s.now() - g;
          j < b && j >= 0
            ? (d = setTimeout(i, b - j))
            : ((d = null), c || ((h = a.apply(f, e)), d || (f = e = null)));
        };
      return function () {
        (f = this), (e = arguments), (g = s.now());
        var j = c && !d;
        return (
          d || (d = setTimeout(i, b)),
          j && ((h = a.apply(f, e)), (f = e = null)),
          h
        );
      };
    }),
    (s.wrap = function (a, b) {
      return s.partial(b, a);
    }),
    (s.negate = function (a) {
      return function () {
        return !a.apply(this, arguments);
      };
    }),
    (s.compose = function () {
      var a = arguments,
        b = a.length - 1;
      return function () {
        for (var c = b, d = a[b].apply(this, arguments); c--; )
          d = a[c].call(this, d);
        return d;
      };
    }),
    (s.after = function (a, b) {
      return function () {
        if (--a < 1) return b.apply(this, arguments);
      };
    }),
    (s.before = function (a, b) {
      var c;
      return function () {
        return (
          --a > 0 && (c = b.apply(this, arguments)), a <= 1 && (b = null), c
        );
      };
    }),
    (s.once = s.partial(s.before, 2));
  var E = !{ toString: null }.propertyIsEnumerable("toString"),
    F = [
      "valueOf",
      "isPrototypeOf",
      "toString",
      "propertyIsEnumerable",
      "hasOwnProperty",
      "toLocaleString",
    ];
  (s.keys = function (a) {
    if (!s.isObject(a)) return [];
    if (o) return o(a);
    var b = [];
    for (var c in a) s.has(a, c) && b.push(c);
    return E && d(a, b), b;
  }),
    (s.allKeys = function (a) {
      if (!s.isObject(a)) return [];
      var b = [];
      for (var c in a) b.push(c);
      return E && d(a, b), b;
    }),
    (s.values = function (a) {
      for (var b = s.keys(a), c = b.length, d = Array(c), e = 0; e < c; e++)
        d[e] = a[b[e]];
      return d;
    }),
    (s.mapObject = function (a, b, c) {
      b = u(b, c);
      for (var d, e = s.keys(a), f = e.length, g = {}, h = 0; h < f; h++)
        (d = e[h]), (g[d] = b(a[d], d, a));
      return g;
    }),
    (s.pairs = function (a) {
      for (var b = s.keys(a), c = b.length, d = Array(c), e = 0; e < c; e++)
        d[e] = [b[e], a[b[e]]];
      return d;
    }),
    (s.invert = function (a) {
      for (var b = {}, c = s.keys(a), d = 0, e = c.length; d < e; d++)
        b[a[c[d]]] = c[d];
      return b;
    }),
    (s.functions = s.methods =
      function (a) {
        var b = [];
        for (var c in a) s.isFunction(a[c]) && b.push(c);
        return b.sort();
      }),
    (s.extend = v(s.allKeys)),
    (s.extendOwn = s.assign = v(s.keys)),
    (s.findKey = function (a, b, c) {
      b = u(b, c);
      for (var d, e = s.keys(a), f = 0, g = e.length; f < g; f++)
        if (((d = e[f]), b(a[d], d, a))) return d;
    }),
    (s.pick = function (a, b, c) {
      var d,
        e,
        f = {},
        g = a;
      if (null == g) return f;
      s.isFunction(b)
        ? ((e = s.allKeys(g)), (d = t(b, c)))
        : ((e = C(arguments, !1, !1, 1)),
          (d = function (a, b, c) {
            return b in c;
          }),
          (g = Object(g)));
      for (var h = 0, i = e.length; h < i; h++) {
        var j = e[h],
          k = g[j];
        d(k, j, g) && (f[j] = k);
      }
      return f;
    }),
    (s.omit = function (a, b, c) {
      if (s.isFunction(b)) b = s.negate(b);
      else {
        var d = s.map(C(arguments, !1, !1, 1), String);
        b = function (a, b) {
          return !s.contains(d, b);
        };
      }
      return s.pick(a, b, c);
    }),
    (s.defaults = v(s.allKeys, !0)),
    (s.create = function (a, b) {
      var c = w(a);
      return b && s.extendOwn(c, b), c;
    }),
    (s.clone = function (a) {
      return s.isObject(a) ? (s.isArray(a) ? a.slice() : s.extend({}, a)) : a;
    }),
    (s.tap = function (a, b) {
      return b(a), a;
    }),
    (s.isMatch = function (a, b) {
      var c = s.keys(b),
        d = c.length;
      if (null == a) return !d;
      for (var e = Object(a), f = 0; f < d; f++) {
        var g = c[f];
        if (b[g] !== e[g] || !(g in e)) return !1;
      }
      return !0;
    });
  var G = function (a, b, c, d) {
    if (a === b) return 0 !== a || 1 / a === 1 / b;
    if (null == a || null == b) return a === b;
    a instanceof s && (a = a._wrapped), b instanceof s && (b = b._wrapped);
    var e = l.call(a);
    if (e !== l.call(b)) return !1;
    switch (e) {
      case "[object RegExp]":
      case "[object String]":
        return "" + a == "" + b;
      case "[object Number]":
        return +a !== +a ? +b !== +b : 0 === +a ? 1 / +a === 1 / b : +a === +b;
      case "[object Date]":
      case "[object Boolean]":
        return +a === +b;
    }
    var f = "[object Array]" === e;
    if (!f) {
      if ("object" != typeof a || "object" != typeof b) return !1;
      var g = a.constructor,
        h = b.constructor;
      if (
        g !== h &&
        !(
          s.isFunction(g) &&
          g instanceof g &&
          s.isFunction(h) &&
          h instanceof h
        ) &&
        "constructor" in a &&
        "constructor" in b
      )
        return !1;
    }
    (c = c || []), (d = d || []);
    for (var i = c.length; i--; ) if (c[i] === a) return d[i] === b;
    if ((c.push(a), d.push(b), f)) {
      if (((i = a.length), i !== b.length)) return !1;
      for (; i--; ) if (!G(a[i], b[i], c, d)) return !1;
    } else {
      var j,
        k = s.keys(a);
      if (((i = k.length), s.keys(b).length !== i)) return !1;
      for (; i--; )
        if (((j = k[i]), !s.has(b, j) || !G(a[j], b[j], c, d))) return !1;
    }
    return c.pop(), d.pop(), !0;
  };
  (s.isEqual = function (a, b) {
    return G(a, b);
  }),
    (s.isEmpty = function (a) {
      return (
        null == a ||
        (A(a) && (s.isArray(a) || s.isString(a) || s.isArguments(a))
          ? 0 === a.length
          : 0 === s.keys(a).length)
      );
    }),
    (s.isElement = function (a) {
      return !(!a || 1 !== a.nodeType);
    }),
    (s.isArray =
      n ||
      function (a) {
        return "[object Array]" === l.call(a);
      }),
    (s.isObject = function (a) {
      var b = typeof a;
      return "function" === b || ("object" === b && !!a);
    }),
    s.each(
      ["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"],
      function (a) {
        s["is" + a] = function (b) {
          return l.call(b) === "[object " + a + "]";
        };
      },
    ),
    s.isArguments(arguments) ||
      (s.isArguments = function (a) {
        return s.has(a, "callee");
      }),
    "function" != typeof /./ &&
      "object" != typeof Int8Array &&
      (s.isFunction = function (a) {
        return "function" == typeof a || !1;
      }),
    (s.isFinite = function (a) {
      return isFinite(a) && !isNaN(parseFloat(a));
    }),
    (s.isNaN = function (a) {
      return s.isNumber(a) && a !== +a;
    }),
    (s.isBoolean = function (a) {
      return a === !0 || a === !1 || "[object Boolean]" === l.call(a);
    }),
    (s.isNull = function (a) {
      return null === a;
    }),
    (s.isUndefined = function (a) {
      return void 0 === a;
    }),
    (s.has = function (a, b) {
      return null != a && m.call(a, b);
    }),
    (s.noConflict = function () {
      return (e._ = f), this;
    }),
    (s.identity = function (a) {
      return a;
    }),
    (s.constant = function (a) {
      return function () {
        return a;
      };
    }),
    (s.noop = function () {}),
    (s.property = x),
    (s.propertyOf = function (a) {
      return null == a
        ? function () {}
        : function (b) {
            return a[b];
          };
    }),
    (s.matcher = s.matches =
      function (a) {
        return (
          (a = s.extendOwn({}, a)),
          function (b) {
            return s.isMatch(b, a);
          }
        );
      }),
    (s.times = function (a, b, c) {
      var d = Array(Math.max(0, a));
      b = t(b, c, 1);
      for (var e = 0; e < a; e++) d[e] = b(e);
      return d;
    }),
    (s.random = function (a, b) {
      return (
        null == b && ((b = a), (a = 0)),
        a + Math.floor(Math.random() * (b - a + 1))
      );
    }),
    (s.now =
      Date.now ||
      function () {
        return new Date().getTime();
      });
  var H = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#x27;",
      "`": "&#x60;",
    },
    I = s.invert(H),
    J = function (a) {
      var b = function (b) {
          return a[b];
        },
        c = "(?:" + s.keys(a).join("|") + ")",
        d = RegExp(c),
        e = RegExp(c, "g");
      return function (a) {
        return (a = null == a ? "" : "" + a), d.test(a) ? a.replace(e, b) : a;
      };
    };
  (s.escape = J(H)),
    (s.unescape = J(I)),
    (s.result = function (a, b, c) {
      var d = null == a ? void 0 : a[b];
      return void 0 === d && (d = c), s.isFunction(d) ? d.call(a) : d;
    });
  var K = 0;
  (s.uniqueId = function (a) {
    var b = ++K + "";
    return a ? a + b : b;
  }),
    (s.templateSettings = {
      evaluate: /<%([\s\S]+?)%>/g,
      interpolate: /<%=([\s\S]+?)%>/g,
      escape: /<%-([\s\S]+?)%>/g,
    });
  var L = /(.)^/,
    M = {
      "'": "'",
      "\\": "\\",
      "\r": "r",
      "\n": "n",
      "\u2028": "u2028",
      "\u2029": "u2029",
    },
    N = /\\|'|\r|\n|\u2028|\u2029/g,
    O = function (a) {
      return "\\" + M[a];
    };
  (s.template = function (a, b, c) {
    !b && c && (b = c), (b = s.defaults({}, b, s.templateSettings));
    var d = RegExp(
        [
          (b.escape || L).source,
          (b.interpolate || L).source,
          (b.evaluate || L).source,
        ].join("|") + "|$",
        "g",
      ),
      e = 0,
      f = "__p+='";
    a.replace(d, function (b, c, d, g, h) {
      return (
        (f += a.slice(e, h).replace(N, O)),
        (e = h + b.length),
        c
          ? (f += "'+\n((__t=(" + c + "))==null?'':_.escape(__t))+\n'")
          : d
            ? (f += "'+\n((__t=(" + d + "))==null?'':__t)+\n'")
            : g && (f += "';\n" + g + "\n__p+='"),
        b
      );
    }),
      (f += "';\n"),
      b.variable || (f = "with(obj||{}){\n" + f + "}\n"),
      (f =
        "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" +
        f +
        "return __p;\n");
    try {
      var g = new Function(b.variable || "obj", "_", f);
    } catch (h) {
      throw ((h.source = f), h);
    }
    var i = function (a) {
        return g.call(this, a, s);
      },
      j = b.variable || "obj";
    return (i.source = "function(" + j + "){\n" + f + "}"), i;
  }),
    (s.chain = function (a) {
      var b = s(a);
      return (b._chain = !0), b;
    });
  var P = function (a, b) {
    return a._chain ? s(b).chain() : b;
  };
  (s.mixin = function (a) {
    s.each(s.functions(a), function (b) {
      var c = (s[b] = a[b]);
      s.prototype[b] = function () {
        var a = [this._wrapped];
        return j.apply(a, arguments), P(this, c.apply(s, a));
      };
    });
  }),
    s.mixin(s),
    s.each(
      ["pop", "push", "reverse", "shift", "sort", "splice", "unshift"],
      function (a) {
        var b = g[a];
        s.prototype[a] = function () {
          var c = this._wrapped;
          return (
            b.apply(c, arguments),
            ("shift" !== a && "splice" !== a) || 0 !== c.length || delete c[0],
            P(this, c)
          );
        };
      },
    ),
    s.each(["concat", "join", "slice"], function (a) {
      var b = g[a];
      s.prototype[a] = function () {
        return P(this, b.apply(this._wrapped, arguments));
      };
    }),
    (s.prototype.value = function () {
      return this._wrapped;
    }),
    (s.prototype.valueOf = s.prototype.toJSON = s.prototype.value),
    (s.prototype.toString = function () {
      return "" + this._wrapped;
    }),
    "function" == typeof define &&
      define.amd &&
      define("underscore", [], function () {
        return s;
      });
}).call(this);
