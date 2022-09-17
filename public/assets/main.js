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

// views/pages/HomePage.jsx
var HomePage = () => {
  return /* @__PURE__ */ _n.createElement("div", null, /* @__PURE__ */ _n.createElement("h1", null, "Home page  -"));
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

// views/app.jsx
function App() {
  const [count, setCount] = y2(0);
  return /* @__PURE__ */ _n.createElement("div", null, /* @__PURE__ */ _n.createElement(c4, {
    href: "/"
  }, "Home"), /* @__PURE__ */ _n.createElement(c4, {
    href: "/about"
  }, "About"), /* @__PURE__ */ _n.createElement(D, null, /* @__PURE__ */ _n.createElement(HomePage_default, {
    path: "/"
  }), /* @__PURE__ */ _n.createElement(AboutPage_default, {
    path: "/about"
  })));
}

// views/main.jsx
P(/* @__PURE__ */ _n.createElement(App, null), document.getElementById("app"));
//# sourceMappingURL=main.js.map
