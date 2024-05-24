import * as h from "react";
import ft, { forwardRef as If, useContext as fd, Children as Rf, isValidElement as Mn, cloneElement as An, useEffect as md, createElement as hd, useState as xa, createContext as Pf } from "react";
import * as gd from "react-dom";
import kn from "react-dom";
var nn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function an(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function go(e) {
  if (e.__esModule)
    return e;
  var t = e.default;
  if (typeof t == "function") {
    var o = function r() {
      return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    o.prototype = t.prototype;
  } else
    o = {};
  return Object.defineProperty(o, "__esModule", { value: !0 }), Object.keys(e).forEach(function(r) {
    var n = Object.getOwnPropertyDescriptor(e, r);
    Object.defineProperty(o, r, n.get ? n : {
      enumerable: !0,
      get: function() {
        return e[r];
      }
    });
  }), o;
}
var vd = { exports: {} }, pi = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wf = ft, Tf = Symbol.for("react.element"), Df = Symbol.for("react.fragment"), Ef = Object.prototype.hasOwnProperty, zf = wf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Of = { key: !0, ref: !0, __self: !0, __source: !0 };
function bd(e, t, o) {
  var r, n = {}, i = null, a = null;
  o !== void 0 && (i = "" + o), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (a = t.ref);
  for (r in t)
    Ef.call(t, r) && !Of.hasOwnProperty(r) && (n[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
      n[r] === void 0 && (n[r] = t[r]);
  return { $$typeof: Tf, type: e, key: i, ref: a, props: n, _owner: zf.current };
}
pi.Fragment = Df;
pi.jsx = bd;
pi.jsxs = bd;
vd.exports = pi;
var m = vd.exports;
function pr(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let o = 1; o < arguments.length; o += 1)
    t += "&args[]=" + encodeURIComponent(arguments[o]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const Mf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: pr
}, Symbol.toStringTag, { value: "Module" }));
function u() {
  return u = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var o = arguments[t];
      for (var r in o)
        Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r]);
    }
    return e;
  }, u.apply(this, arguments);
}
function yd(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(o) {
    return t[o] === void 0 && (t[o] = e(o)), t[o];
  };
}
var Af = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, jf = /* @__PURE__ */ yd(
  function(e) {
    return Af.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
);
function Bf(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function _f(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var Lf = /* @__PURE__ */ function() {
  function e(o) {
    var r = this;
    this._insertTag = function(n) {
      var i;
      r.tags.length === 0 ? r.insertionPoint ? i = r.insertionPoint.nextSibling : r.prepend ? i = r.container.firstChild : i = r.before : i = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(n, i), r.tags.push(n);
    }, this.isSpeedy = o.speedy === void 0 ? !0 : o.speedy, this.tags = [], this.ctr = 0, this.nonce = o.nonce, this.key = o.key, this.container = o.container, this.prepend = o.prepend, this.insertionPoint = o.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(r) {
    r.forEach(this._insertTag);
  }, t.insert = function(r) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(_f(this));
    var n = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = Bf(n);
      try {
        i.insertRule(r, i.cssRules.length);
      } catch {
      }
    } else
      n.appendChild(document.createTextNode(r));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(r) {
      return r.parentNode && r.parentNode.removeChild(r);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), bt = "-ms-", Gn = "-moz-", Ae = "-webkit-", xd = "comm", ds = "rule", us = "decl", Ff = "@import", Cd = "@keyframes", Nf = "@layer", Hf = Math.abs, fi = String.fromCharCode, Vf = Object.assign;
function Wf(e, t) {
  return pt(e, 0) ^ 45 ? (((t << 2 ^ pt(e, 0)) << 2 ^ pt(e, 1)) << 2 ^ pt(e, 2)) << 2 ^ pt(e, 3) : 0;
}
function Sd(e) {
  return e.trim();
}
function Uf(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function je(e, t, o) {
  return e.replace(t, o);
}
function Va(e, t) {
  return e.indexOf(t);
}
function pt(e, t) {
  return e.charCodeAt(t) | 0;
}
function Kr(e, t, o) {
  return e.slice(t, o);
}
function to(e) {
  return e.length;
}
function ps(e) {
  return e.length;
}
function In(e, t) {
  return t.push(e), e;
}
function Gf(e, t) {
  return e.map(t).join("");
}
var mi = 1, fr = 1, $d = 0, St = 0, it = 0, Sr = "";
function hi(e, t, o, r, n, i, a) {
  return { value: e, root: t, parent: o, type: r, props: n, children: i, line: mi, column: fr, length: a, return: "" };
}
function Dr(e, t) {
  return Vf(hi("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Kf() {
  return it;
}
function Jf() {
  return it = St > 0 ? pt(Sr, --St) : 0, fr--, it === 10 && (fr = 1, mi--), it;
}
function Tt() {
  return it = St < $d ? pt(Sr, St++) : 0, fr++, it === 10 && (fr = 1, mi++), it;
}
function no() {
  return pt(Sr, St);
}
function jn() {
  return St;
}
function sn(e, t) {
  return Kr(Sr, e, t);
}
function Jr(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function kd(e) {
  return mi = fr = 1, $d = to(Sr = e), St = 0, [];
}
function Id(e) {
  return Sr = "", e;
}
function Bn(e) {
  return Sd(sn(St - 1, Wa(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function qf(e) {
  for (; (it = no()) && it < 33; )
    Tt();
  return Jr(e) > 2 || Jr(it) > 3 ? "" : " ";
}
function Yf(e, t) {
  for (; --t && Tt() && !(it < 48 || it > 102 || it > 57 && it < 65 || it > 70 && it < 97); )
    ;
  return sn(e, jn() + (t < 6 && no() == 32 && Tt() == 32));
}
function Wa(e) {
  for (; Tt(); )
    switch (it) {
      case e:
        return St;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Wa(it);
        break;
      case 40:
        e === 41 && Wa(e);
        break;
      case 92:
        Tt();
        break;
    }
  return St;
}
function Xf(e, t) {
  for (; Tt() && e + it !== 57; )
    if (e + it === 84 && no() === 47)
      break;
  return "/*" + sn(t, St - 1) + "*" + fi(e === 47 ? e : Tt());
}
function Zf(e) {
  for (; !Jr(no()); )
    Tt();
  return sn(e, St);
}
function Qf(e) {
  return Id(_n("", null, null, null, [""], e = kd(e), 0, [0], e));
}
function _n(e, t, o, r, n, i, a, s, l) {
  for (var d = 0, c = 0, f = a, p = 0, v = 0, b = 0, y = 1, x = 1, C = 1, S = 0, $ = "", R = n, P = i, g = r, k = $; x; )
    switch (b = S, S = Tt()) {
      case 40:
        if (b != 108 && pt(k, f - 1) == 58) {
          Va(k += je(Bn(S), "&", "&\f"), "&\f") != -1 && (C = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        k += Bn(S);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        k += qf(b);
        break;
      case 92:
        k += Yf(jn() - 1, 7);
        continue;
      case 47:
        switch (no()) {
          case 42:
          case 47:
            In(em(Xf(Tt(), jn()), t, o), l);
            break;
          default:
            k += "/";
        }
        break;
      case 123 * y:
        s[d++] = to(k) * C;
      case 125 * y:
      case 59:
      case 0:
        switch (S) {
          case 0:
          case 125:
            x = 0;
          case 59 + c:
            C == -1 && (k = je(k, /\f/g, "")), v > 0 && to(k) - f && In(v > 32 ? zl(k + ";", r, o, f - 1) : zl(je(k, " ", "") + ";", r, o, f - 2), l);
            break;
          case 59:
            k += ";";
          default:
            if (In(g = El(k, t, o, d, c, n, s, $, R = [], P = [], f), i), S === 123)
              if (c === 0)
                _n(k, t, g, g, R, i, f, s, P);
              else
                switch (p === 99 && pt(k, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    _n(e, g, g, r && In(El(e, g, g, 0, 0, n, s, $, n, R = [], f), P), n, P, f, s, r ? R : P);
                    break;
                  default:
                    _n(k, g, g, g, [""], P, 0, s, P);
                }
        }
        d = c = v = 0, y = C = 1, $ = k = "", f = a;
        break;
      case 58:
        f = 1 + to(k), v = b;
      default:
        if (y < 1) {
          if (S == 123)
            --y;
          else if (S == 125 && y++ == 0 && Jf() == 125)
            continue;
        }
        switch (k += fi(S), S * y) {
          case 38:
            C = c > 0 ? 1 : (k += "\f", -1);
            break;
          case 44:
            s[d++] = (to(k) - 1) * C, C = 1;
            break;
          case 64:
            no() === 45 && (k += Bn(Tt())), p = no(), c = f = to($ = k += Zf(jn())), S++;
            break;
          case 45:
            b === 45 && to(k) == 2 && (y = 0);
        }
    }
  return i;
}
function El(e, t, o, r, n, i, a, s, l, d, c) {
  for (var f = n - 1, p = n === 0 ? i : [""], v = ps(p), b = 0, y = 0, x = 0; b < r; ++b)
    for (var C = 0, S = Kr(e, f + 1, f = Hf(y = a[b])), $ = e; C < v; ++C)
      ($ = Sd(y > 0 ? p[C] + " " + S : je(S, /&\f/g, p[C]))) && (l[x++] = $);
  return hi(e, t, o, n === 0 ? ds : s, l, d, c);
}
function em(e, t, o) {
  return hi(e, t, o, xd, fi(Kf()), Kr(e, 2, -2), 0);
}
function zl(e, t, o, r) {
  return hi(e, t, o, us, Kr(e, 0, r), Kr(e, r + 1, -1), r);
}
function nr(e, t) {
  for (var o = "", r = ps(e), n = 0; n < r; n++)
    o += t(e[n], n, e, t) || "";
  return o;
}
function tm(e, t, o, r) {
  switch (e.type) {
    case Nf:
      if (e.children.length)
        break;
    case Ff:
    case us:
      return e.return = e.return || e.value;
    case xd:
      return "";
    case Cd:
      return e.return = e.value + "{" + nr(e.children, r) + "}";
    case ds:
      e.value = e.props.join(",");
  }
  return to(o = nr(e.children, r)) ? e.return = e.value + "{" + o + "}" : "";
}
function om(e) {
  var t = ps(e);
  return function(o, r, n, i) {
    for (var a = "", s = 0; s < t; s++)
      a += e[s](o, r, n, i) || "";
    return a;
  };
}
function rm(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var nm = function(t, o, r) {
  for (var n = 0, i = 0; n = i, i = no(), n === 38 && i === 12 && (o[r] = 1), !Jr(i); )
    Tt();
  return sn(t, St);
}, im = function(t, o) {
  var r = -1, n = 44;
  do
    switch (Jr(n)) {
      case 0:
        n === 38 && no() === 12 && (o[r] = 1), t[r] += nm(St - 1, o, r);
        break;
      case 2:
        t[r] += Bn(n);
        break;
      case 4:
        if (n === 44) {
          t[++r] = no() === 58 ? "&\f" : "", o[r] = t[r].length;
          break;
        }
      default:
        t[r] += fi(n);
    }
  while (n = Tt());
  return t;
}, am = function(t, o) {
  return Id(im(kd(t), o));
}, Ol = /* @__PURE__ */ new WeakMap(), sm = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var o = t.value, r = t.parent, n = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r)
        return;
    if (!(t.props.length === 1 && o.charCodeAt(0) !== 58 && !Ol.get(r)) && !n) {
      Ol.set(t, !0);
      for (var i = [], a = am(o, i), s = r.props, l = 0, d = 0; l < a.length; l++)
        for (var c = 0; c < s.length; c++, d++)
          t.props[d] = i[l] ? a[l].replace(/&\f/g, s[c]) : s[c] + " " + a[l];
    }
  }
}, lm = function(t) {
  if (t.type === "decl") {
    var o = t.value;
    // charcode for l
    o.charCodeAt(0) === 108 && // charcode for b
    o.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function Rd(e, t) {
  switch (Wf(e, t)) {
    case 5103:
      return Ae + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return Ae + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Ae + e + Gn + e + bt + e + e;
    case 6828:
    case 4268:
      return Ae + e + bt + e + e;
    case 6165:
      return Ae + e + bt + "flex-" + e + e;
    case 5187:
      return Ae + e + je(e, /(\w+).+(:[^]+)/, Ae + "box-$1$2" + bt + "flex-$1$2") + e;
    case 5443:
      return Ae + e + bt + "flex-item-" + je(e, /flex-|-self/, "") + e;
    case 4675:
      return Ae + e + bt + "flex-line-pack" + je(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return Ae + e + bt + je(e, "shrink", "negative") + e;
    case 5292:
      return Ae + e + bt + je(e, "basis", "preferred-size") + e;
    case 6060:
      return Ae + "box-" + je(e, "-grow", "") + Ae + e + bt + je(e, "grow", "positive") + e;
    case 4554:
      return Ae + je(e, /([^-])(transform)/g, "$1" + Ae + "$2") + e;
    case 6187:
      return je(je(je(e, /(zoom-|grab)/, Ae + "$1"), /(image-set)/, Ae + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return je(e, /(image-set\([^]*)/, Ae + "$1$`$1");
    case 4968:
      return je(je(e, /(.+:)(flex-)?(.*)/, Ae + "box-pack:$3" + bt + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Ae + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return je(e, /(.+)-inline(.+)/, Ae + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (to(e) - 1 - t > 6)
        switch (pt(e, t + 1)) {
          case 109:
            if (pt(e, t + 4) !== 45)
              break;
          case 102:
            return je(e, /(.+:)(.+)-([^]+)/, "$1" + Ae + "$2-$3$1" + Gn + (pt(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Va(e, "stretch") ? Rd(je(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (pt(e, t + 1) !== 115)
        break;
    case 6444:
      switch (pt(e, to(e) - 3 - (~Va(e, "!important") && 10))) {
        case 107:
          return je(e, ":", ":" + Ae) + e;
        case 101:
          return je(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Ae + (pt(e, 14) === 45 ? "inline-" : "") + "box$3$1" + Ae + "$2$3$1" + bt + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (pt(e, t + 11)) {
        case 114:
          return Ae + e + bt + je(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return Ae + e + bt + je(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return Ae + e + bt + je(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Ae + e + bt + e + e;
  }
  return e;
}
var cm = function(t, o, r, n) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case us:
        t.return = Rd(t.value, t.length);
        break;
      case Cd:
        return nr([Dr(t, {
          value: je(t.value, "@", "@" + Ae)
        })], n);
      case ds:
        if (t.length)
          return Gf(t.props, function(i) {
            switch (Uf(i, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return nr([Dr(t, {
                  props: [je(i, /:(read-\w+)/, ":" + Gn + "$1")]
                })], n);
              case "::placeholder":
                return nr([Dr(t, {
                  props: [je(i, /:(plac\w+)/, ":" + Ae + "input-$1")]
                }), Dr(t, {
                  props: [je(i, /:(plac\w+)/, ":" + Gn + "$1")]
                }), Dr(t, {
                  props: [je(i, /:(plac\w+)/, bt + "input-$1")]
                })], n);
            }
            return "";
          });
    }
}, dm = [cm], Pd = function(t) {
  var o = t.key;
  if (o === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(y) {
      var x = y.getAttribute("data-emotion");
      x.indexOf(" ") !== -1 && (document.head.appendChild(y), y.setAttribute("data-s", ""));
    });
  }
  var n = t.stylisPlugins || dm, i = {}, a, s = [];
  a = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + o + ' "]'),
    function(y) {
      for (var x = y.getAttribute("data-emotion").split(" "), C = 1; C < x.length; C++)
        i[x[C]] = !0;
      s.push(y);
    }
  );
  var l, d = [sm, lm];
  {
    var c, f = [tm, rm(function(y) {
      c.insert(y);
    })], p = om(d.concat(n, f)), v = function(x) {
      return nr(Qf(x), p);
    };
    l = function(x, C, S, $) {
      c = S, v(x ? x + "{" + C.styles + "}" : C.styles), $ && (b.inserted[C.name] = !0);
    };
  }
  var b = {
    key: o,
    sheet: new Lf({
      key: o,
      container: a,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: i,
    registered: {},
    insert: l
  };
  return b.sheet.hydrate(s), b;
}, wd = { exports: {} }, Be = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lt = typeof Symbol == "function" && Symbol.for, fs = lt ? Symbol.for("react.element") : 60103, ms = lt ? Symbol.for("react.portal") : 60106, gi = lt ? Symbol.for("react.fragment") : 60107, vi = lt ? Symbol.for("react.strict_mode") : 60108, bi = lt ? Symbol.for("react.profiler") : 60114, yi = lt ? Symbol.for("react.provider") : 60109, xi = lt ? Symbol.for("react.context") : 60110, hs = lt ? Symbol.for("react.async_mode") : 60111, Ci = lt ? Symbol.for("react.concurrent_mode") : 60111, Si = lt ? Symbol.for("react.forward_ref") : 60112, $i = lt ? Symbol.for("react.suspense") : 60113, um = lt ? Symbol.for("react.suspense_list") : 60120, ki = lt ? Symbol.for("react.memo") : 60115, Ii = lt ? Symbol.for("react.lazy") : 60116, pm = lt ? Symbol.for("react.block") : 60121, fm = lt ? Symbol.for("react.fundamental") : 60117, mm = lt ? Symbol.for("react.responder") : 60118, hm = lt ? Symbol.for("react.scope") : 60119;
function zt(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case fs:
        switch (e = e.type, e) {
          case hs:
          case Ci:
          case gi:
          case bi:
          case vi:
          case $i:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case xi:
              case Si:
              case Ii:
              case ki:
              case yi:
                return e;
              default:
                return t;
            }
        }
      case ms:
        return t;
    }
  }
}
function Td(e) {
  return zt(e) === Ci;
}
Be.AsyncMode = hs;
Be.ConcurrentMode = Ci;
Be.ContextConsumer = xi;
Be.ContextProvider = yi;
Be.Element = fs;
Be.ForwardRef = Si;
Be.Fragment = gi;
Be.Lazy = Ii;
Be.Memo = ki;
Be.Portal = ms;
Be.Profiler = bi;
Be.StrictMode = vi;
Be.Suspense = $i;
Be.isAsyncMode = function(e) {
  return Td(e) || zt(e) === hs;
};
Be.isConcurrentMode = Td;
Be.isContextConsumer = function(e) {
  return zt(e) === xi;
};
Be.isContextProvider = function(e) {
  return zt(e) === yi;
};
Be.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === fs;
};
Be.isForwardRef = function(e) {
  return zt(e) === Si;
};
Be.isFragment = function(e) {
  return zt(e) === gi;
};
Be.isLazy = function(e) {
  return zt(e) === Ii;
};
Be.isMemo = function(e) {
  return zt(e) === ki;
};
Be.isPortal = function(e) {
  return zt(e) === ms;
};
Be.isProfiler = function(e) {
  return zt(e) === bi;
};
Be.isStrictMode = function(e) {
  return zt(e) === vi;
};
Be.isSuspense = function(e) {
  return zt(e) === $i;
};
Be.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === gi || e === Ci || e === bi || e === vi || e === $i || e === um || typeof e == "object" && e !== null && (e.$$typeof === Ii || e.$$typeof === ki || e.$$typeof === yi || e.$$typeof === xi || e.$$typeof === Si || e.$$typeof === fm || e.$$typeof === mm || e.$$typeof === hm || e.$$typeof === pm);
};
Be.typeOf = zt;
wd.exports = Be;
var gm = wd.exports, Dd = gm, vm = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, bm = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Ed = {};
Ed[Dd.ForwardRef] = vm;
Ed[Dd.Memo] = bm;
var ym = !0;
function xm(e, t, o) {
  var r = "";
  return o.split(" ").forEach(function(n) {
    e[n] !== void 0 ? t.push(e[n] + ";") : r += n + " ";
  }), r;
}
var zd = function(t, o, r) {
  var n = t.key + "-" + o.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (r === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  ym === !1) && t.registered[n] === void 0 && (t.registered[n] = o.styles);
}, Od = function(t, o, r) {
  zd(t, o, r);
  var n = t.key + "-" + o.name;
  if (t.inserted[o.name] === void 0) {
    var i = o;
    do
      t.insert(o === i ? "." + n : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function Cm(e) {
  for (var t = 0, o, r = 0, n = e.length; n >= 4; ++r, n -= 4)
    o = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24, o = /* Math.imul(k, m): */
    (o & 65535) * 1540483477 + ((o >>> 16) * 59797 << 16), o ^= /* k >>> r: */
    o >>> 24, t = /* Math.imul(k, m): */
    (o & 65535) * 1540483477 + ((o >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (n) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(r) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var Sm = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, $m = /[A-Z]|^ms/g, km = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Md = function(t) {
  return t.charCodeAt(1) === 45;
}, Ml = function(t) {
  return t != null && typeof t != "boolean";
}, Ca = /* @__PURE__ */ yd(function(e) {
  return Md(e) ? e : e.replace($m, "-$&").toLowerCase();
}), Al = function(t, o) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof o == "string")
        return o.replace(km, function(r, n, i) {
          return oo = {
            name: n,
            styles: i,
            next: oo
          }, n;
        });
  }
  return Sm[t] !== 1 && !Md(t) && typeof o == "number" && o !== 0 ? o + "px" : o;
};
function qr(e, t, o) {
  if (o == null)
    return "";
  if (o.__emotion_styles !== void 0)
    return o;
  switch (typeof o) {
    case "boolean":
      return "";
    case "object": {
      if (o.anim === 1)
        return oo = {
          name: o.name,
          styles: o.styles,
          next: oo
        }, o.name;
      if (o.styles !== void 0) {
        var r = o.next;
        if (r !== void 0)
          for (; r !== void 0; )
            oo = {
              name: r.name,
              styles: r.styles,
              next: oo
            }, r = r.next;
        var n = o.styles + ";";
        return n;
      }
      return Im(e, t, o);
    }
    case "function": {
      if (e !== void 0) {
        var i = oo, a = o(e);
        return oo = i, qr(e, t, a);
      }
      break;
    }
  }
  if (t == null)
    return o;
  var s = t[o];
  return s !== void 0 ? s : o;
}
function Im(e, t, o) {
  var r = "";
  if (Array.isArray(o))
    for (var n = 0; n < o.length; n++)
      r += qr(e, t, o[n]) + ";";
  else
    for (var i in o) {
      var a = o[i];
      if (typeof a != "object")
        t != null && t[a] !== void 0 ? r += i + "{" + t[a] + "}" : Ml(a) && (r += Ca(i) + ":" + Al(i, a) + ";");
      else if (Array.isArray(a) && typeof a[0] == "string" && (t == null || t[a[0]] === void 0))
        for (var s = 0; s < a.length; s++)
          Ml(a[s]) && (r += Ca(i) + ":" + Al(i, a[s]) + ";");
      else {
        var l = qr(e, t, a);
        switch (i) {
          case "animation":
          case "animationName": {
            r += Ca(i) + ":" + l + ";";
            break;
          }
          default:
            r += i + "{" + l + "}";
        }
      }
    }
  return r;
}
var jl = /label:\s*([^\s;\n{]+)\s*(;|$)/g, oo, gs = function(t, o, r) {
  if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0)
    return t[0];
  var n = !0, i = "";
  oo = void 0;
  var a = t[0];
  a == null || a.raw === void 0 ? (n = !1, i += qr(r, o, a)) : i += a[0];
  for (var s = 1; s < t.length; s++)
    i += qr(r, o, t[s]), n && (i += a[s]);
  jl.lastIndex = 0;
  for (var l = "", d; (d = jl.exec(i)) !== null; )
    l += "-" + // $FlowFixMe we know it's not null
    d[1];
  var c = Cm(i) + l;
  return {
    name: c,
    styles: i,
    next: oo
  };
}, Rm = function(t) {
  return t();
}, Ad = h.useInsertionEffect ? h.useInsertionEffect : !1, Pm = Ad || Rm, Bl = Ad || h.useLayoutEffect, jd = /* @__PURE__ */ h.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Pd({
    key: "css"
  }) : null
), wm = jd.Provider, Bd = function(t) {
  return /* @__PURE__ */ If(function(o, r) {
    var n = fd(jd);
    return t(o, n, r);
  });
}, Vo = /* @__PURE__ */ h.createContext({}), Sa = { exports: {} }, _l;
function _d() {
  return _l || (_l = 1, function(e) {
    function t() {
      return e.exports = t = Object.assign ? Object.assign.bind() : function(o) {
        for (var r = 1; r < arguments.length; r++) {
          var n = arguments[r];
          for (var i in n)
            Object.prototype.hasOwnProperty.call(n, i) && (o[i] = n[i]);
        }
        return o;
      }, e.exports.__esModule = !0, e.exports.default = e.exports, t.apply(this, arguments);
    }
    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(Sa)), Sa.exports;
}
_d();
var Ld = /* @__PURE__ */ Bd(function(e, t) {
  var o = e.styles, r = gs([o], void 0, h.useContext(Vo)), n = h.useRef();
  return Bl(function() {
    var i = t.key + "-global", a = new t.sheet.constructor({
      key: i,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), s = !1, l = document.querySelector('style[data-emotion="' + i + " " + r.name + '"]');
    return t.sheet.tags.length && (a.before = t.sheet.tags[0]), l !== null && (s = !0, l.setAttribute("data-emotion", i), a.hydrate([l])), n.current = [a, s], function() {
      a.flush();
    };
  }, [t]), Bl(function() {
    var i = n.current, a = i[0], s = i[1];
    if (s) {
      i[1] = !1;
      return;
    }
    if (r.next !== void 0 && Od(t, r.next, !0), a.tags.length) {
      var l = a.tags[a.tags.length - 1].nextElementSibling;
      a.before = l, a.flush();
    }
    t.insert("", r, a, !1);
  }, [t, r.name]), null;
});
function vs() {
  for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++)
    t[o] = arguments[o];
  return gs(t);
}
var ln = function() {
  var t = vs.apply(void 0, arguments), o = "animation-" + t.name;
  return {
    name: o,
    styles: "@keyframes " + o + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, Tm = jf, Dm = function(t) {
  return t !== "theme";
}, Ll = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? Tm : Dm;
}, Fl = function(t, o, r) {
  var n;
  if (o) {
    var i = o.shouldForwardProp;
    n = t.__emotion_forwardProp && i ? function(a) {
      return t.__emotion_forwardProp(a) && i(a);
    } : i;
  }
  return typeof n != "function" && r && (n = t.__emotion_forwardProp), n;
}, Em = function(t) {
  var o = t.cache, r = t.serialized, n = t.isStringTag;
  return zd(o, r, n), Pm(function() {
    return Od(o, r, n);
  }), null;
}, zm = function e(t, o) {
  var r = t.__emotion_real === t, n = r && t.__emotion_base || t, i, a;
  o !== void 0 && (i = o.label, a = o.target);
  var s = Fl(t, o, r), l = s || Ll(n), d = !l("as");
  return function() {
    var c = arguments, f = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && f.push("label:" + i + ";"), c[0] == null || c[0].raw === void 0)
      f.push.apply(f, c);
    else {
      f.push(c[0][0]);
      for (var p = c.length, v = 1; v < p; v++)
        f.push(c[v], c[0][v]);
    }
    var b = Bd(function(y, x, C) {
      var S = d && y.as || n, $ = "", R = [], P = y;
      if (y.theme == null) {
        P = {};
        for (var g in y)
          P[g] = y[g];
        P.theme = h.useContext(Vo);
      }
      typeof y.className == "string" ? $ = xm(x.registered, R, y.className) : y.className != null && ($ = y.className + " ");
      var k = gs(f.concat(R), x.registered, P);
      $ += x.key + "-" + k.name, a !== void 0 && ($ += " " + a);
      var T = d && s === void 0 ? Ll(S) : l, j = {};
      for (var O in y)
        d && O === "as" || // $FlowFixMe
        T(O) && (j[O] = y[O]);
      return j.className = $, j.ref = C, /* @__PURE__ */ h.createElement(h.Fragment, null, /* @__PURE__ */ h.createElement(Em, {
        cache: x,
        serialized: k,
        isStringTag: typeof S == "string"
      }), /* @__PURE__ */ h.createElement(S, j));
    });
    return b.displayName = i !== void 0 ? i : "Styled(" + (typeof n == "string" ? n : n.displayName || n.name || "Component") + ")", b.defaultProps = t.defaultProps, b.__emotion_real = b, b.__emotion_base = n, b.__emotion_styles = f, b.__emotion_forwardProp = s, Object.defineProperty(b, "toString", {
      value: function() {
        return "." + a;
      }
    }), b.withComponent = function(y, x) {
      return e(y, u({}, o, x, {
        shouldForwardProp: Fl(b, x, !0)
      })).apply(void 0, f);
    }, b;
  };
}, Om = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], Kn = zm.bind();
Om.forEach(function(e) {
  Kn[e] = Kn(e);
});
let Ua;
typeof document == "object" && (Ua = Pd({
  key: "css",
  prepend: !0
}));
function Mm(e) {
  const {
    injectFirst: t,
    children: o
  } = e;
  return t && Ua ? /* @__PURE__ */ m.jsx(wm, {
    value: Ua,
    children: o
  }) : o;
}
function Am(e) {
  return e == null || Object.keys(e).length === 0;
}
function Lr(e) {
  const {
    styles: t,
    defaultTheme: o = {}
  } = e, r = typeof t == "function" ? (n) => t(Am(n) ? o : n) : t;
  return /* @__PURE__ */ m.jsx(Ld, {
    styles: r
  });
}
function bs(e, t) {
  return Kn(e, t);
}
const Fd = (e, t) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}, jm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GlobalStyles: Lr,
  StyledEngineProvider: Mm,
  ThemeContext: Vo,
  css: vs,
  default: bs,
  internal_processStyles: Fd,
  keyframes: ln
}, Symbol.toStringTag, { value: "Module" }));
function U(e, t) {
  if (e == null)
    return {};
  var o = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0)
        continue;
      o[r] = e[r];
    }
  return o;
}
function fo(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Nd(e) {
  if (!fo(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((o) => {
    t[o] = Nd(e[o]);
  }), t;
}
function mt(e, t, o = {
  clone: !0
}) {
  const r = o.clone ? u({}, e) : e;
  return fo(e) && fo(t) && Object.keys(t).forEach((n) => {
    n !== "__proto__" && (fo(t[n]) && n in e && fo(e[n]) ? r[n] = mt(e[n], t[n], o) : o.clone ? r[n] = fo(t[n]) ? Nd(t[n]) : t[n] : r[n] = t[n]);
  }), r;
}
const Bm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mt,
  isPlainObject: fo
}, Symbol.toStringTag, { value: "Module" })), _m = ["values", "unit", "step"], Lm = (e) => {
  const t = Object.keys(e).map((o) => ({
    key: o,
    val: e[o]
  })) || [];
  return t.sort((o, r) => o.val - r.val), t.reduce((o, r) => u({}, o, {
    [r.key]: r.val
  }), {});
};
function Hd(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: t = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: o = "px",
    step: r = 5
  } = e, n = U(e, _m), i = Lm(t), a = Object.keys(i);
  function s(p) {
    return `@media (min-width:${typeof t[p] == "number" ? t[p] : p}${o})`;
  }
  function l(p) {
    return `@media (max-width:${(typeof t[p] == "number" ? t[p] : p) - r / 100}${o})`;
  }
  function d(p, v) {
    const b = a.indexOf(v);
    return `@media (min-width:${typeof t[p] == "number" ? t[p] : p}${o}) and (max-width:${(b !== -1 && typeof t[a[b]] == "number" ? t[a[b]] : v) - r / 100}${o})`;
  }
  function c(p) {
    return a.indexOf(p) + 1 < a.length ? d(p, a[a.indexOf(p) + 1]) : s(p);
  }
  function f(p) {
    const v = a.indexOf(p);
    return v === 0 ? s(a[1]) : v === a.length - 1 ? l(a[v]) : d(p, a[a.indexOf(p) + 1]).replace("@media", "@media not all and");
  }
  return u({
    keys: a,
    values: i,
    up: s,
    down: l,
    between: d,
    only: c,
    not: f,
    unit: o
  }, n);
}
const Fm = {
  borderRadius: 4
};
function Fr(e, t) {
  return t ? mt(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const ys = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, Nl = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${ys[e]}px)`
};
function $t(e, t, o) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const i = r.breakpoints || Nl;
    return t.reduce((a, s, l) => (a[i.up(i.keys[l])] = o(t[l]), a), {});
  }
  if (typeof t == "object") {
    const i = r.breakpoints || Nl;
    return Object.keys(t).reduce((a, s) => {
      if (Object.keys(i.values || ys).indexOf(s) !== -1) {
        const l = i.up(s);
        a[l] = o(t[s], s);
      } else {
        const l = s;
        a[l] = t[l];
      }
      return a;
    }, {});
  }
  return o(t);
}
function Vd(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((r, n) => {
    const i = e.up(n);
    return r[i] = {}, r;
  }, {})) || {};
}
function Wd(e, t) {
  return e.reduce((o, r) => {
    const n = o[r];
    return (!n || Object.keys(n).length === 0) && delete o[r], o;
  }, t);
}
function Nm(e, ...t) {
  const o = Vd(e), r = [o, ...t].reduce((n, i) => mt(n, i), {});
  return Wd(Object.keys(o), r);
}
function Hm(e, t) {
  if (typeof e != "object")
    return {};
  const o = {}, r = Object.keys(t);
  return Array.isArray(e) ? r.forEach((n, i) => {
    i < e.length && (o[n] = !0);
  }) : r.forEach((n) => {
    e[n] != null && (o[n] = !0);
  }), o;
}
function jo({
  values: e,
  breakpoints: t,
  base: o
}) {
  const r = o || Hm(e, t), n = Object.keys(r);
  if (n.length === 0)
    return e;
  let i;
  return n.reduce((a, s, l) => (Array.isArray(e) ? (a[s] = e[l] != null ? e[l] : e[i], i = l) : typeof e == "object" ? (a[s] = e[s] != null ? e[s] : e[i], i = s) : a[s] = e, a), {});
}
function Oe(e) {
  if (typeof e != "string")
    throw new Error(pr(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
const Vm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Oe
}, Symbol.toStringTag, { value: "Module" }));
function Ri(e, t, o = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && o) {
    const r = `vars.${t}`.split(".").reduce((n, i) => n && n[i] ? n[i] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, n) => r && r[n] != null ? r[n] : null, e);
}
function Jn(e, t, o, r = o) {
  let n;
  return typeof e == "function" ? n = e(o) : Array.isArray(e) ? n = e[o] || r : n = Ri(e, o) || r, t && (n = t(n, r, e)), n;
}
function tt(e) {
  const {
    prop: t,
    cssProperty: o = e.prop,
    themeKey: r,
    transform: n
  } = e, i = (a) => {
    if (a[t] == null)
      return null;
    const s = a[t], l = a.theme, d = Ri(l, r) || {};
    return $t(a, s, (f) => {
      let p = Jn(d, n, f);
      return f === p && typeof f == "string" && (p = Jn(d, n, `${t}${f === "default" ? "" : Oe(f)}`, f)), o === !1 ? p : {
        [o]: p
      };
    });
  };
  return i.propTypes = {}, i.filterProps = [t], i;
}
function Wm(e) {
  const t = {};
  return (o) => (t[o] === void 0 && (t[o] = e(o)), t[o]);
}
const Um = {
  m: "margin",
  p: "padding"
}, Gm = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Hl = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Km = Wm((e) => {
  if (e.length > 2)
    if (Hl[e])
      e = Hl[e];
    else
      return [e];
  const [t, o] = e.split(""), r = Um[t], n = Gm[o] || "";
  return Array.isArray(n) ? n.map((i) => r + i) : [r + n];
}), xs = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Cs = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...xs, ...Cs];
function cn(e, t, o, r) {
  var n;
  const i = (n = Ri(e, t, !1)) != null ? n : o;
  return typeof i == "number" ? (a) => typeof a == "string" ? a : i * a : Array.isArray(i) ? (a) => typeof a == "string" ? a : i[a] : typeof i == "function" ? i : () => {
  };
}
function Ss(e) {
  return cn(e, "spacing", 8);
}
function Lo(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const o = Math.abs(t), r = e(o);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function Jm(e, t) {
  return (o) => e.reduce((r, n) => (r[n] = Lo(t, o), r), {});
}
function qm(e, t, o, r) {
  if (t.indexOf(o) === -1)
    return null;
  const n = Km(o), i = Jm(n, r), a = e[o];
  return $t(e, a, i);
}
function Ud(e, t) {
  const o = Ss(e.theme);
  return Object.keys(e).map((r) => qm(e, t, r, o)).reduce(Fr, {});
}
function Ke(e) {
  return Ud(e, xs);
}
Ke.propTypes = {};
Ke.filterProps = xs;
function Je(e) {
  return Ud(e, Cs);
}
Je.propTypes = {};
Je.filterProps = Cs;
function Ym(e = 8) {
  if (e.mui)
    return e;
  const t = Ss({
    spacing: e
  }), o = (...r) => (r.length === 0 ? [1] : r).map((i) => {
    const a = t(i);
    return typeof a == "number" ? `${a}px` : a;
  }).join(" ");
  return o.mui = !0, o;
}
function Pi(...e) {
  const t = e.reduce((r, n) => (n.filterProps.forEach((i) => {
    r[i] = n;
  }), r), {}), o = (r) => Object.keys(r).reduce((n, i) => t[i] ? Fr(n, t[i](r)) : n, {});
  return o.propTypes = {}, o.filterProps = e.reduce((r, n) => r.concat(n.filterProps), []), o;
}
function Lt(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Gt(e, t) {
  return tt({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const Xm = Gt("border", Lt), Zm = Gt("borderTop", Lt), Qm = Gt("borderRight", Lt), eh = Gt("borderBottom", Lt), th = Gt("borderLeft", Lt), oh = Gt("borderColor"), rh = Gt("borderTopColor"), nh = Gt("borderRightColor"), ih = Gt("borderBottomColor"), ah = Gt("borderLeftColor"), sh = Gt("outline", Lt), lh = Gt("outlineColor"), wi = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = cn(e.theme, "shape.borderRadius", 4), o = (r) => ({
      borderRadius: Lo(t, r)
    });
    return $t(e, e.borderRadius, o);
  }
  return null;
};
wi.propTypes = {};
wi.filterProps = ["borderRadius"];
Pi(Xm, Zm, Qm, eh, th, oh, rh, nh, ih, ah, wi, sh, lh);
const Ti = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = cn(e.theme, "spacing", 8), o = (r) => ({
      gap: Lo(t, r)
    });
    return $t(e, e.gap, o);
  }
  return null;
};
Ti.propTypes = {};
Ti.filterProps = ["gap"];
const Di = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = cn(e.theme, "spacing", 8), o = (r) => ({
      columnGap: Lo(t, r)
    });
    return $t(e, e.columnGap, o);
  }
  return null;
};
Di.propTypes = {};
Di.filterProps = ["columnGap"];
const Ei = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = cn(e.theme, "spacing", 8), o = (r) => ({
      rowGap: Lo(t, r)
    });
    return $t(e, e.rowGap, o);
  }
  return null;
};
Ei.propTypes = {};
Ei.filterProps = ["rowGap"];
const ch = tt({
  prop: "gridColumn"
}), dh = tt({
  prop: "gridRow"
}), uh = tt({
  prop: "gridAutoFlow"
}), ph = tt({
  prop: "gridAutoColumns"
}), fh = tt({
  prop: "gridAutoRows"
}), mh = tt({
  prop: "gridTemplateColumns"
}), hh = tt({
  prop: "gridTemplateRows"
}), gh = tt({
  prop: "gridTemplateAreas"
}), vh = tt({
  prop: "gridArea"
});
Pi(Ti, Di, Ei, ch, dh, uh, ph, fh, mh, hh, gh, vh);
function ir(e, t) {
  return t === "grey" ? t : e;
}
const bh = tt({
  prop: "color",
  themeKey: "palette",
  transform: ir
}), yh = tt({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: ir
}), xh = tt({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: ir
});
Pi(bh, yh, xh);
function Rt(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Ch = tt({
  prop: "width",
  transform: Rt
}), $s = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (o) => {
      var r, n;
      const i = ((r = e.theme) == null || (r = r.breakpoints) == null || (r = r.values) == null ? void 0 : r[o]) || ys[o];
      return i ? ((n = e.theme) == null || (n = n.breakpoints) == null ? void 0 : n.unit) !== "px" ? {
        maxWidth: `${i}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: i
      } : {
        maxWidth: Rt(o)
      };
    };
    return $t(e, e.maxWidth, t);
  }
  return null;
};
$s.filterProps = ["maxWidth"];
const Sh = tt({
  prop: "minWidth",
  transform: Rt
}), $h = tt({
  prop: "height",
  transform: Rt
}), kh = tt({
  prop: "maxHeight",
  transform: Rt
}), Ih = tt({
  prop: "minHeight",
  transform: Rt
});
tt({
  prop: "size",
  cssProperty: "width",
  transform: Rt
});
tt({
  prop: "size",
  cssProperty: "height",
  transform: Rt
});
const Rh = tt({
  prop: "boxSizing"
});
Pi(Ch, $s, Sh, $h, kh, Ih, Rh);
const $r = {
  // borders
  border: {
    themeKey: "borders",
    transform: Lt
  },
  borderTop: {
    themeKey: "borders",
    transform: Lt
  },
  borderRight: {
    themeKey: "borders",
    transform: Lt
  },
  borderBottom: {
    themeKey: "borders",
    transform: Lt
  },
  borderLeft: {
    themeKey: "borders",
    transform: Lt
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: Lt
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: wi
  },
  // palette
  color: {
    themeKey: "palette",
    transform: ir
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: ir
  },
  backgroundColor: {
    themeKey: "palette",
    transform: ir
  },
  // spacing
  p: {
    style: Je
  },
  pt: {
    style: Je
  },
  pr: {
    style: Je
  },
  pb: {
    style: Je
  },
  pl: {
    style: Je
  },
  px: {
    style: Je
  },
  py: {
    style: Je
  },
  padding: {
    style: Je
  },
  paddingTop: {
    style: Je
  },
  paddingRight: {
    style: Je
  },
  paddingBottom: {
    style: Je
  },
  paddingLeft: {
    style: Je
  },
  paddingX: {
    style: Je
  },
  paddingY: {
    style: Je
  },
  paddingInline: {
    style: Je
  },
  paddingInlineStart: {
    style: Je
  },
  paddingInlineEnd: {
    style: Je
  },
  paddingBlock: {
    style: Je
  },
  paddingBlockStart: {
    style: Je
  },
  paddingBlockEnd: {
    style: Je
  },
  m: {
    style: Ke
  },
  mt: {
    style: Ke
  },
  mr: {
    style: Ke
  },
  mb: {
    style: Ke
  },
  ml: {
    style: Ke
  },
  mx: {
    style: Ke
  },
  my: {
    style: Ke
  },
  margin: {
    style: Ke
  },
  marginTop: {
    style: Ke
  },
  marginRight: {
    style: Ke
  },
  marginBottom: {
    style: Ke
  },
  marginLeft: {
    style: Ke
  },
  marginX: {
    style: Ke
  },
  marginY: {
    style: Ke
  },
  marginInline: {
    style: Ke
  },
  marginInlineStart: {
    style: Ke
  },
  marginInlineEnd: {
    style: Ke
  },
  marginBlock: {
    style: Ke
  },
  marginBlockStart: {
    style: Ke
  },
  marginBlockEnd: {
    style: Ke
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: Ti
  },
  rowGap: {
    style: Ei
  },
  columnGap: {
    style: Di
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: Rt
  },
  maxWidth: {
    style: $s
  },
  minWidth: {
    transform: Rt
  },
  height: {
    transform: Rt
  },
  maxHeight: {
    transform: Rt
  },
  minHeight: {
    transform: Rt
  },
  boxSizing: {},
  // typography
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
};
function Ph(...e) {
  const t = e.reduce((r, n) => r.concat(Object.keys(n)), []), o = new Set(t);
  return e.every((r) => o.size === Object.keys(r).length);
}
function wh(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Gd() {
  function e(o, r, n, i) {
    const a = {
      [o]: r,
      theme: n
    }, s = i[o];
    if (!s)
      return {
        [o]: r
      };
    const {
      cssProperty: l = o,
      themeKey: d,
      transform: c,
      style: f
    } = s;
    if (r == null)
      return null;
    if (d === "typography" && r === "inherit")
      return {
        [o]: r
      };
    const p = Ri(n, d) || {};
    return f ? f(a) : $t(a, r, (b) => {
      let y = Jn(p, c, b);
      return b === y && typeof b == "string" && (y = Jn(p, c, `${o}${b === "default" ? "" : Oe(b)}`, b)), l === !1 ? y : {
        [l]: y
      };
    });
  }
  function t(o) {
    var r;
    const {
      sx: n,
      theme: i = {}
    } = o || {};
    if (!n)
      return null;
    const a = (r = i.unstable_sxConfig) != null ? r : $r;
    function s(l) {
      let d = l;
      if (typeof l == "function")
        d = l(i);
      else if (typeof l != "object")
        return l;
      if (!d)
        return null;
      const c = Vd(i.breakpoints), f = Object.keys(c);
      let p = c;
      return Object.keys(d).forEach((v) => {
        const b = wh(d[v], i);
        if (b != null)
          if (typeof b == "object")
            if (a[v])
              p = Fr(p, e(v, b, i, a));
            else {
              const y = $t({
                theme: i
              }, b, (x) => ({
                [v]: x
              }));
              Ph(y, b) ? p[v] = t({
                sx: b,
                theme: i
              }) : p = Fr(p, y);
            }
          else
            p = Fr(p, e(v, b, i, a));
      }), Wd(f, p);
    }
    return Array.isArray(n) ? n.map(s) : s(n);
  }
  return t;
}
const So = Gd();
So.filterProps = ["sx"];
function Kd(e, t) {
  const o = this;
  return o.vars && typeof o.getColorSchemeSelector == "function" ? {
    [o.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t
  } : o.palette.mode === e ? t : {};
}
const Th = ["breakpoints", "palette", "spacing", "shape"];
function kr(e = {}, ...t) {
  const {
    breakpoints: o = {},
    palette: r = {},
    spacing: n,
    shape: i = {}
  } = e, a = U(e, Th), s = Hd(o), l = Ym(n);
  let d = mt({
    breakpoints: s,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: u({
      mode: "light"
    }, r),
    spacing: l,
    shape: u({}, Fm, i)
  }, a);
  return d.applyStyles = Kd, d = t.reduce((c, f) => mt(c, f), d), d.unstable_sxConfig = u({}, $r, a == null ? void 0 : a.unstable_sxConfig), d.unstable_sx = function(f) {
    return So({
      sx: f,
      theme: this
    });
  }, d;
}
const Dh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: kr,
  private_createBreakpoints: Hd,
  unstable_applyStyles: Kd
}, Symbol.toStringTag, { value: "Module" }));
function Eh(e) {
  return Object.keys(e).length === 0;
}
function Jd(e = null) {
  const t = h.useContext(Vo);
  return !t || Eh(t) ? e : t;
}
const zh = kr();
function zi(e = zh) {
  return Jd(e);
}
function Oh({
  styles: e,
  themeId: t,
  defaultTheme: o = {}
}) {
  const r = zi(o), n = typeof e == "function" ? e(t && r[t] || r) : e;
  return /* @__PURE__ */ m.jsx(Lr, {
    styles: n
  });
}
const Mh = ["sx"], Ah = (e) => {
  var t, o;
  const r = {
    systemProps: {},
    otherProps: {}
  }, n = (t = e == null || (o = e.theme) == null ? void 0 : o.unstable_sxConfig) != null ? t : $r;
  return Object.keys(e).forEach((i) => {
    n[i] ? r.systemProps[i] = e[i] : r.otherProps[i] = e[i];
  }), r;
};
function dn(e) {
  const {
    sx: t
  } = e, o = U(e, Mh), {
    systemProps: r,
    otherProps: n
  } = Ah(o);
  let i;
  return Array.isArray(t) ? i = [r, ...t] : typeof t == "function" ? i = (...a) => {
    const s = t(...a);
    return fo(s) ? u({}, r, s) : r;
  } : i = u({}, r, t), u({}, n, {
    sx: i
  });
}
const jh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: So,
  extendSxProp: dn,
  unstable_createStyleFunctionSx: Gd,
  unstable_defaultSxConfig: $r
}, Symbol.toStringTag, { value: "Module" })), Vl = (e) => e, Bh = () => {
  let e = Vl;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Vl;
    }
  };
}, ks = Bh();
function qd(e) {
  var t, o, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var n = e.length;
      for (t = 0; t < n; t++)
        e[t] && (o = qd(e[t])) && (r && (r += " "), r += o);
    } else
      for (o in e)
        e[o] && (r && (r += " "), r += o);
  return r;
}
function fe() {
  for (var e, t, o = 0, r = "", n = arguments.length; o < n; o++)
    (e = arguments[o]) && (t = qd(e)) && (r && (r += " "), r += t);
  return r;
}
const _h = ["className", "component"];
function Lh(e = {}) {
  const {
    themeId: t,
    defaultTheme: o,
    defaultClassName: r = "MuiBox-root",
    generateClassName: n
  } = e, i = bs("div", {
    shouldForwardProp: (s) => s !== "theme" && s !== "sx" && s !== "as"
  })(So);
  return /* @__PURE__ */ h.forwardRef(function(l, d) {
    const c = zi(o), f = dn(l), {
      className: p,
      component: v = "div"
    } = f, b = U(f, _h);
    return /* @__PURE__ */ m.jsx(i, u({
      as: v,
      ref: d,
      className: fe(p, n ? n(r) : r),
      theme: t && c[t] || c
    }, b));
  });
}
const Fh = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function ct(e, t, o = "Mui") {
  const r = Fh[t];
  return r ? `${o}-${r}` : `${ks.generate(e)}-${t}`;
}
function ht(e, t, o = "Mui") {
  const r = {};
  return t.forEach((n) => {
    r[n] = ct(e, n, o);
  }), r;
}
var Yd = { exports: {} }, _e = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Is = Symbol.for("react.element"), Rs = Symbol.for("react.portal"), Oi = Symbol.for("react.fragment"), Mi = Symbol.for("react.strict_mode"), Ai = Symbol.for("react.profiler"), ji = Symbol.for("react.provider"), Bi = Symbol.for("react.context"), Nh = Symbol.for("react.server_context"), _i = Symbol.for("react.forward_ref"), Li = Symbol.for("react.suspense"), Fi = Symbol.for("react.suspense_list"), Ni = Symbol.for("react.memo"), Hi = Symbol.for("react.lazy"), Hh = Symbol.for("react.offscreen"), Xd;
Xd = Symbol.for("react.module.reference");
function Kt(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Is:
        switch (e = e.type, e) {
          case Oi:
          case Ai:
          case Mi:
          case Li:
          case Fi:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case Nh:
              case Bi:
              case _i:
              case Hi:
              case Ni:
              case ji:
                return e;
              default:
                return t;
            }
        }
      case Rs:
        return t;
    }
  }
}
_e.ContextConsumer = Bi;
_e.ContextProvider = ji;
_e.Element = Is;
_e.ForwardRef = _i;
_e.Fragment = Oi;
_e.Lazy = Hi;
_e.Memo = Ni;
_e.Portal = Rs;
_e.Profiler = Ai;
_e.StrictMode = Mi;
_e.Suspense = Li;
_e.SuspenseList = Fi;
_e.isAsyncMode = function() {
  return !1;
};
_e.isConcurrentMode = function() {
  return !1;
};
_e.isContextConsumer = function(e) {
  return Kt(e) === Bi;
};
_e.isContextProvider = function(e) {
  return Kt(e) === ji;
};
_e.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Is;
};
_e.isForwardRef = function(e) {
  return Kt(e) === _i;
};
_e.isFragment = function(e) {
  return Kt(e) === Oi;
};
_e.isLazy = function(e) {
  return Kt(e) === Hi;
};
_e.isMemo = function(e) {
  return Kt(e) === Ni;
};
_e.isPortal = function(e) {
  return Kt(e) === Rs;
};
_e.isProfiler = function(e) {
  return Kt(e) === Ai;
};
_e.isStrictMode = function(e) {
  return Kt(e) === Mi;
};
_e.isSuspense = function(e) {
  return Kt(e) === Li;
};
_e.isSuspenseList = function(e) {
  return Kt(e) === Fi;
};
_e.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Oi || e === Ai || e === Mi || e === Li || e === Fi || e === Hh || typeof e == "object" && e !== null && (e.$$typeof === Hi || e.$$typeof === Ni || e.$$typeof === ji || e.$$typeof === Bi || e.$$typeof === _i || e.$$typeof === Xd || e.getModuleId !== void 0);
};
_e.typeOf = Kt;
Yd.exports = _e;
var Wl = Yd.exports;
const Vh = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function Zd(e) {
  const t = `${e}`.match(Vh);
  return t && t[1] || "";
}
function Qd(e, t = "") {
  return e.displayName || e.name || Zd(e) || t;
}
function Ul(e, t, o) {
  const r = Qd(t);
  return e.displayName || (r !== "" ? `${o}(${r})` : o);
}
function Wh(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return Qd(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Wl.ForwardRef:
          return Ul(e, e.render, "ForwardRef");
        case Wl.Memo:
          return Ul(e, e.type, "memo");
        default:
          return;
      }
  }
}
const Uh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Wh,
  getFunctionName: Zd
}, Symbol.toStringTag, { value: "Module" })), Gh = ["ownerState"], Kh = ["variants"], Jh = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function qh(e) {
  return Object.keys(e).length === 0;
}
function Yh(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function $a(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Xh = kr(), Zh = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function Rn({
  defaultTheme: e,
  theme: t,
  themeId: o
}) {
  return qh(t) ? e : t[o] || t;
}
function Qh(e) {
  return e ? (t, o) => o[e] : null;
}
function Ln(e, t) {
  let {
    ownerState: o
  } = t, r = U(t, Gh);
  const n = typeof e == "function" ? e(u({
    ownerState: o
  }, r)) : e;
  if (Array.isArray(n))
    return n.flatMap((i) => Ln(i, u({
      ownerState: o
    }, r)));
  if (n && typeof n == "object" && Array.isArray(n.variants)) {
    const {
      variants: i = []
    } = n;
    let s = U(n, Kh);
    return i.forEach((l) => {
      let d = !0;
      typeof l.props == "function" ? d = l.props(u({
        ownerState: o
      }, r, o)) : Object.keys(l.props).forEach((c) => {
        (o == null ? void 0 : o[c]) !== l.props[c] && r[c] !== l.props[c] && (d = !1);
      }), d && (Array.isArray(s) || (s = [s]), s.push(typeof l.style == "function" ? l.style(u({
        ownerState: o
      }, r, o)) : l.style));
    }), s;
  }
  return n;
}
function eg(e = {}) {
  const {
    themeId: t,
    defaultTheme: o = Xh,
    rootShouldForwardProp: r = $a,
    slotShouldForwardProp: n = $a
  } = e, i = (a) => So(u({}, a, {
    theme: Rn(u({}, a, {
      defaultTheme: o,
      themeId: t
    }))
  }));
  return i.__mui_systemSx = !0, (a, s = {}) => {
    Fd(a, (P) => P.filter((g) => !(g != null && g.__mui_systemSx)));
    const {
      name: l,
      slot: d,
      skipVariantsResolver: c,
      skipSx: f,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: p = Qh(Zh(d))
    } = s, v = U(s, Jh), b = c !== void 0 ? c : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      d && d !== "Root" && d !== "root" || !1
    ), y = f || !1;
    let x, C = $a;
    d === "Root" || d === "root" ? C = r : d ? C = n : Yh(a) && (C = void 0);
    const S = bs(a, u({
      shouldForwardProp: C,
      label: x
    }, v)), $ = (P) => typeof P == "function" && P.__emotion_real !== P || fo(P) ? (g) => Ln(P, u({}, g, {
      theme: Rn({
        theme: g.theme,
        defaultTheme: o,
        themeId: t
      })
    })) : P, R = (P, ...g) => {
      let k = $(P);
      const T = g ? g.map($) : [];
      l && p && T.push((A) => {
        const D = Rn(u({}, A, {
          defaultTheme: o,
          themeId: t
        }));
        if (!D.components || !D.components[l] || !D.components[l].styleOverrides)
          return null;
        const M = D.components[l].styleOverrides, E = {};
        return Object.entries(M).forEach(([w, I]) => {
          E[w] = Ln(I, u({}, A, {
            theme: D
          }));
        }), p(A, E);
      }), l && !b && T.push((A) => {
        var D;
        const M = Rn(u({}, A, {
          defaultTheme: o,
          themeId: t
        })), E = M == null || (D = M.components) == null || (D = D[l]) == null ? void 0 : D.variants;
        return Ln({
          variants: E
        }, u({}, A, {
          theme: M
        }));
      }), y || T.push(i);
      const j = T.length - g.length;
      if (Array.isArray(P) && j > 0) {
        const A = new Array(j).fill("");
        k = [...P, ...A], k.raw = [...P.raw, ...A];
      }
      const O = S(k, ...T);
      return a.muiName && (O.muiName = a.muiName), O;
    };
    return S.withConfig && (R.withConfig = S.withConfig), R;
  };
}
const eu = eg();
function Ps(e, t) {
  const o = u({}, t);
  return Object.keys(e).forEach((r) => {
    if (r.toString().match(/^(components|slots)$/))
      o[r] = u({}, e[r], o[r]);
    else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
      const n = e[r] || {}, i = t[r];
      o[r] = {}, !i || !Object.keys(i) ? o[r] = n : !n || !Object.keys(n) ? o[r] = i : (o[r] = u({}, i), Object.keys(n).forEach((a) => {
        o[r][a] = Ps(n[a], i[a]);
      }));
    } else
      o[r] === void 0 && (o[r] = e[r]);
  }), o;
}
function tg(e) {
  const {
    theme: t,
    name: o,
    props: r
  } = e;
  return !t || !t.components || !t.components[o] || !t.components[o].defaultProps ? r : Ps(t.components[o].defaultProps, r);
}
function ws({
  props: e,
  name: t,
  defaultTheme: o,
  themeId: r
}) {
  let n = zi(o);
  return r && (n = n[r] || n), tg({
    theme: n,
    name: t,
    props: e
  });
}
const qn = typeof window < "u" ? h.useLayoutEffect : h.useEffect;
function tu(e, t = Number.MIN_SAFE_INTEGER, o = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, o));
}
const og = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: tu
}, Symbol.toStringTag, { value: "Module" }));
function Ga(...e) {
  return e.reduce((t, o) => o == null ? t : function(...n) {
    t.apply(this, n), o.apply(this, n);
  }, () => {
  });
}
function ou(e, t = 166) {
  let o;
  function r(...n) {
    const i = () => {
      e.apply(this, n);
    };
    clearTimeout(o), o = setTimeout(i, t);
  }
  return r.clear = () => {
    clearTimeout(o);
  }, r;
}
function rg(e, t) {
  return () => null;
}
function ng(e, t) {
  var o, r;
  return /* @__PURE__ */ h.isValidElement(e) && t.indexOf(
    // For server components `muiName` is avaialble in element.type._payload.value.muiName
    // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    (o = e.type.muiName) != null ? o : (r = e.type) == null || (r = r._payload) == null || (r = r.value) == null ? void 0 : r.muiName
  ) !== -1;
}
function qt(e) {
  return e && e.ownerDocument || document;
}
function mr(e) {
  return qt(e).defaultView || window;
}
function ig(e, t) {
  return () => null;
}
function Yn(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
let Gl = 0;
function ag(e) {
  const [t, o] = h.useState(e), r = e || t;
  return h.useEffect(() => {
    t == null && (Gl += 1, o(`mui-${Gl}`));
  }, [t]), r;
}
const Kl = h.useId;
function Ts(e) {
  if (Kl !== void 0) {
    const t = Kl();
    return e ?? t;
  }
  return ag(e);
}
function sg(e, t, o, r, n) {
  return null;
}
function ru({
  controlled: e,
  default: t,
  name: o,
  state: r = "value"
}) {
  const {
    current: n
  } = h.useRef(e !== void 0), [i, a] = h.useState(t), s = n ? e : i, l = h.useCallback((d) => {
    n || a(d);
  }, []);
  return [s, l];
}
function Mo(e) {
  const t = h.useRef(e);
  return qn(() => {
    t.current = e;
  }), h.useRef((...o) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...o)
  )).current;
}
function Yt(...e) {
  return h.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((o) => {
      Yn(o, t);
    });
  }, e);
}
const Jl = {};
function lg(e, t) {
  const o = h.useRef(Jl);
  return o.current === Jl && (o.current = e(t)), o;
}
const cg = [];
function dg(e) {
  h.useEffect(e, cg);
}
let nu = class iu {
  constructor() {
    this.currentId = null, this.clear = () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    }, this.disposeEffect = () => this.clear;
  }
  static create() {
    return new iu();
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(t, o) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, o();
    }, t);
  }
};
function au() {
  const e = lg(nu.create).current;
  return dg(e.disposeEffect), e;
}
let Vi = !0, Ka = !1;
const ug = new nu(), pg = {
  text: !0,
  search: !0,
  url: !0,
  tel: !0,
  email: !0,
  password: !0,
  number: !0,
  date: !0,
  month: !0,
  week: !0,
  time: !0,
  datetime: !0,
  "datetime-local": !0
};
function fg(e) {
  const {
    type: t,
    tagName: o
  } = e;
  return !!(o === "INPUT" && pg[t] && !e.readOnly || o === "TEXTAREA" && !e.readOnly || e.isContentEditable);
}
function mg(e) {
  e.metaKey || e.altKey || e.ctrlKey || (Vi = !0);
}
function ka() {
  Vi = !1;
}
function hg() {
  this.visibilityState === "hidden" && Ka && (Vi = !0);
}
function gg(e) {
  e.addEventListener("keydown", mg, !0), e.addEventListener("mousedown", ka, !0), e.addEventListener("pointerdown", ka, !0), e.addEventListener("touchstart", ka, !0), e.addEventListener("visibilitychange", hg, !0);
}
function vg(e) {
  const {
    target: t
  } = e;
  try {
    return t.matches(":focus-visible");
  } catch {
  }
  return Vi || fg(t);
}
function Ds() {
  const e = h.useCallback((n) => {
    n != null && gg(n.ownerDocument);
  }, []), t = h.useRef(!1);
  function o() {
    return t.current ? (Ka = !0, ug.start(100, () => {
      Ka = !1;
    }), t.current = !1, !0) : !1;
  }
  function r(n) {
    return vg(n) ? (t.current = !0, !0) : !1;
  }
  return {
    isFocusVisibleRef: t,
    onFocus: r,
    onBlur: o,
    ref: e
  };
}
function bg(e) {
  const t = e.documentElement.clientWidth;
  return Math.abs(window.innerWidth - t);
}
const yg = {
  border: 0,
  clip: "rect(0 0 0 0)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: 0,
  position: "absolute",
  whiteSpace: "nowrap",
  width: "1px"
};
function gt(e, t, o = void 0) {
  const r = {};
  return Object.keys(e).forEach(
    // `Object.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
    // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
    (n) => {
      r[n] = e[n].reduce((i, a) => {
        if (a) {
          const s = t(a);
          s !== "" && i.push(s), o && o[a] && i.push(o[a]);
        }
        return i;
      }, []).join(" ");
    }
  ), r;
}
const su = /* @__PURE__ */ h.createContext(null);
function Es() {
  return h.useContext(su);
}
const xg = typeof Symbol == "function" && Symbol.for, Cg = xg ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function Sg(e, t) {
  return typeof t == "function" ? t(e) : u({}, e, t);
}
function $g(e) {
  const {
    children: t,
    theme: o
  } = e, r = Es(), n = h.useMemo(() => {
    const i = r === null ? o : Sg(r, o);
    return i != null && (i[Cg] = r !== null), i;
  }, [o, r]);
  return /* @__PURE__ */ m.jsx(su.Provider, {
    value: n,
    children: t
  });
}
const kg = ["value"], lu = /* @__PURE__ */ h.createContext();
function Ig(e) {
  let {
    value: t
  } = e, o = U(e, kg);
  return /* @__PURE__ */ m.jsx(lu.Provider, u({
    value: t ?? !0
  }, o));
}
const Rg = () => {
  const e = h.useContext(lu);
  return e ?? !1;
}, ql = {};
function Yl(e, t, o, r = !1) {
  return h.useMemo(() => {
    const n = e && t[e] || t;
    if (typeof o == "function") {
      const i = o(n), a = e ? u({}, t, {
        [e]: i
      }) : i;
      return r ? () => a : a;
    }
    return e ? u({}, t, {
      [e]: o
    }) : u({}, t, o);
  }, [e, t, o, r]);
}
function Pg(e) {
  const {
    children: t,
    theme: o,
    themeId: r
  } = e, n = Jd(ql), i = Es() || ql, a = Yl(r, n, o), s = Yl(r, i, o, !0), l = a.direction === "rtl";
  return /* @__PURE__ */ m.jsx($g, {
    theme: s,
    children: /* @__PURE__ */ m.jsx(Vo.Provider, {
      value: a,
      children: /* @__PURE__ */ m.jsx(Ig, {
        value: l,
        children: t
      })
    })
  });
}
const zs = "mode", Os = "color-scheme", cu = "data-color-scheme";
function wg(e) {
  const {
    defaultMode: t = "light",
    defaultLightColorScheme: o = "light",
    defaultDarkColorScheme: r = "dark",
    modeStorageKey: n = zs,
    colorSchemeStorageKey: i = Os,
    attribute: a = cu,
    colorSchemeNode: s = "document.documentElement"
  } = e || {};
  return /* @__PURE__ */ m.jsx("script", {
    // eslint-disable-next-line react/no-danger
    dangerouslySetInnerHTML: {
      __html: `(function() {
try {
  var mode = localStorage.getItem('${n}') || '${t}';
  var colorScheme = '';
  if (mode === 'system') {
    // handle system mode
    var mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      colorScheme = localStorage.getItem('${i}-dark') || '${r}';
    } else {
      colorScheme = localStorage.getItem('${i}-light') || '${o}';
    }
  }
  if (mode === 'light') {
    colorScheme = localStorage.getItem('${i}-light') || '${o}';
  }
  if (mode === 'dark') {
    colorScheme = localStorage.getItem('${i}-dark') || '${r}';
  }
  if (colorScheme) {
    ${s}.setAttribute('${a}', colorScheme);
  }
} catch(e){}})();`
    }
  }, "mui-color-scheme-init");
}
function Xl(e) {
  if (typeof window < "u" && e === "system")
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function du(e, t) {
  if (e.mode === "light" || e.mode === "system" && e.systemMode === "light")
    return t("light");
  if (e.mode === "dark" || e.mode === "system" && e.systemMode === "dark")
    return t("dark");
}
function Tg(e) {
  return du(e, (t) => {
    if (t === "light")
      return e.lightColorScheme;
    if (t === "dark")
      return e.darkColorScheme;
  });
}
function Ia(e, t) {
  if (typeof window > "u")
    return;
  let o;
  try {
    o = localStorage.getItem(e) || void 0, o || localStorage.setItem(e, t);
  } catch {
  }
  return o || t;
}
function Dg(e) {
  const {
    defaultMode: t = "light",
    defaultLightColorScheme: o,
    defaultDarkColorScheme: r,
    supportedColorSchemes: n = [],
    modeStorageKey: i = zs,
    colorSchemeStorageKey: a = Os,
    storageWindow: s = typeof window > "u" ? void 0 : window
  } = e, l = n.join(","), [d, c] = h.useState(() => {
    const x = Ia(i, t), C = Ia(`${a}-light`, o), S = Ia(`${a}-dark`, r);
    return {
      mode: x,
      systemMode: Xl(x),
      lightColorScheme: C,
      darkColorScheme: S
    };
  }), f = Tg(d), p = h.useCallback((x) => {
    c((C) => {
      if (x === C.mode)
        return C;
      const S = x ?? t;
      try {
        localStorage.setItem(i, S);
      } catch {
      }
      return u({}, C, {
        mode: S,
        systemMode: Xl(S)
      });
    });
  }, [i, t]), v = h.useCallback((x) => {
    x ? typeof x == "string" ? x && !l.includes(x) ? console.error(`\`${x}\` does not exist in \`theme.colorSchemes\`.`) : c((C) => {
      const S = u({}, C);
      return du(C, ($) => {
        try {
          localStorage.setItem(`${a}-${$}`, x);
        } catch {
        }
        $ === "light" && (S.lightColorScheme = x), $ === "dark" && (S.darkColorScheme = x);
      }), S;
    }) : c((C) => {
      const S = u({}, C), $ = x.light === null ? o : x.light, R = x.dark === null ? r : x.dark;
      if ($)
        if (!l.includes($))
          console.error(`\`${$}\` does not exist in \`theme.colorSchemes\`.`);
        else {
          S.lightColorScheme = $;
          try {
            localStorage.setItem(`${a}-light`, $);
          } catch {
          }
        }
      if (R)
        if (!l.includes(R))
          console.error(`\`${R}\` does not exist in \`theme.colorSchemes\`.`);
        else {
          S.darkColorScheme = R;
          try {
            localStorage.setItem(`${a}-dark`, R);
          } catch {
          }
        }
      return S;
    }) : c((C) => {
      try {
        localStorage.setItem(`${a}-light`, o), localStorage.setItem(`${a}-dark`, r);
      } catch {
      }
      return u({}, C, {
        lightColorScheme: o,
        darkColorScheme: r
      });
    });
  }, [l, a, o, r]), b = h.useCallback((x) => {
    d.mode === "system" && c((C) => {
      const S = x != null && x.matches ? "dark" : "light";
      return C.systemMode === S ? C : u({}, C, {
        systemMode: S
      });
    });
  }, [d.mode]), y = h.useRef(b);
  return y.current = b, h.useEffect(() => {
    const x = (...S) => y.current(...S), C = window.matchMedia("(prefers-color-scheme: dark)");
    return C.addListener(x), x(C), () => {
      C.removeListener(x);
    };
  }, []), h.useEffect(() => {
    if (s) {
      const x = (C) => {
        const S = C.newValue;
        typeof C.key == "string" && C.key.startsWith(a) && (!S || l.match(S)) && (C.key.endsWith("light") && v({
          light: S
        }), C.key.endsWith("dark") && v({
          dark: S
        })), C.key === i && (!S || ["light", "dark", "system"].includes(S)) && p(S || t);
      };
      return s.addEventListener("storage", x), () => {
        s.removeEventListener("storage", x);
      };
    }
  }, [v, p, i, a, l, t, s]), u({}, d, {
    colorScheme: f,
    setMode: p,
    setColorScheme: v
  });
}
const Eg = ["colorSchemes", "components", "generateCssVars", "cssVarPrefix"], zg = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function Og(e) {
  const {
    themeId: t,
    /**
     * This `theme` object needs to follow a certain structure to
     * be used correctly by the finel `CssVarsProvider`. It should have a
     * `colorSchemes` key with the light and dark (and any other) palette.
     * It should also ideally have a vars object created using `prepareCssVars`.
     */
    theme: o = {},
    attribute: r = cu,
    modeStorageKey: n = zs,
    colorSchemeStorageKey: i = Os,
    defaultMode: a = "light",
    defaultColorScheme: s,
    disableTransitionOnChange: l = !1,
    resolveTheme: d,
    excludeVariablesFromRoot: c
  } = e;
  (!o.colorSchemes || typeof s == "string" && !o.colorSchemes[s] || typeof s == "object" && !o.colorSchemes[s == null ? void 0 : s.light] || typeof s == "object" && !o.colorSchemes[s == null ? void 0 : s.dark]) && console.error(`MUI: \`${s}\` does not exist in \`theme.colorSchemes\`.`);
  const f = /* @__PURE__ */ h.createContext(void 0), p = () => {
    const C = h.useContext(f);
    if (!C)
      throw new Error(pr(19));
    return C;
  };
  function v(C) {
    const {
      children: S,
      theme: $ = o,
      modeStorageKey: R = n,
      colorSchemeStorageKey: P = i,
      attribute: g = r,
      defaultMode: k = a,
      defaultColorScheme: T = s,
      disableTransitionOnChange: j = l,
      storageWindow: O = typeof window > "u" ? void 0 : window,
      documentNode: A = typeof document > "u" ? void 0 : document,
      colorSchemeNode: D = typeof document > "u" ? void 0 : document.documentElement,
      colorSchemeSelector: M = ":root",
      disableNestedContext: E = !1,
      disableStyleSheetGeneration: w = !1
    } = C, I = h.useRef(!1), z = Es(), _ = h.useContext(f), L = !!_ && !E, N = $[t], Y = N || $, {
      colorSchemes: ee = {},
      components: re = {},
      generateCssVars: Q = () => ({
        vars: {},
        css: {}
      }),
      cssVarPrefix: te
    } = Y, he = U(Y, Eg), oe = Object.keys(ee), B = typeof T == "string" ? T : T.light, V = typeof T == "string" ? T : T.dark, {
      mode: K,
      setMode: se,
      systemMode: ue,
      lightColorScheme: le,
      darkColorScheme: me,
      colorScheme: ie,
      setColorScheme: J
    } = Dg({
      supportedColorSchemes: oe,
      defaultLightColorScheme: B,
      defaultDarkColorScheme: V,
      modeStorageKey: R,
      colorSchemeStorageKey: P,
      defaultMode: k,
      storageWindow: O
    });
    let Ce = K, ce = ie;
    L && (Ce = _.mode, ce = _.colorScheme);
    const Ee = Ce || (k === "system" ? a : k), pe = ce || (Ee === "dark" ? V : B), {
      css: Se,
      vars: $e
    } = Q(), ge = u({}, he, {
      components: re,
      colorSchemes: ee,
      cssVarPrefix: te,
      vars: $e,
      getColorSchemeSelector: (q) => `[${g}="${q}"] &`
    }), Ie = {}, Ve = {};
    Object.entries(ee).forEach(([q, ze]) => {
      const {
        css: X,
        vars: ne
      } = Q(q);
      ge.vars = mt(ge.vars, ne), q === pe && (Object.keys(ze).forEach((ve) => {
        ze[ve] && typeof ze[ve] == "object" ? ge[ve] = u({}, ge[ve], ze[ve]) : ge[ve] = ze[ve];
      }), ge.palette && (ge.palette.colorScheme = q));
      const be = typeof T == "string" ? T : k === "dark" ? T.dark : T.light;
      if (q === be) {
        if (c) {
          const ve = {};
          c(te).forEach((Le) => {
            ve[Le] = X[Le], delete X[Le];
          }), Ie[`[${g}="${q}"]`] = ve;
        }
        Ie[`${M}, [${g}="${q}"]`] = X;
      } else
        Ve[`${M === ":root" ? "" : M}[${g}="${q}"]`] = X;
    }), ge.vars = mt(ge.vars, $e), h.useEffect(() => {
      ce && D && D.setAttribute(g, ce);
    }, [ce, g, D]), h.useEffect(() => {
      let q;
      if (j && I.current && A) {
        const ze = A.createElement("style");
        ze.appendChild(A.createTextNode(zg)), A.head.appendChild(ze), window.getComputedStyle(A.body), q = setTimeout(() => {
          A.head.removeChild(ze);
        }, 1);
      }
      return () => {
        clearTimeout(q);
      };
    }, [ce, j, A]), h.useEffect(() => (I.current = !0, () => {
      I.current = !1;
    }), []);
    const st = h.useMemo(() => ({
      allColorSchemes: oe,
      colorScheme: ce,
      darkColorScheme: me,
      lightColorScheme: le,
      mode: Ce,
      setColorScheme: J,
      setMode: se,
      systemMode: ue
    }), [oe, ce, me, le, Ce, J, se, ue]);
    let Me = !0;
    (w || L && (z == null ? void 0 : z.cssVarPrefix) === te) && (Me = !1);
    const ke = /* @__PURE__ */ m.jsxs(h.Fragment, {
      children: [Me && /* @__PURE__ */ m.jsxs(h.Fragment, {
        children: [/* @__PURE__ */ m.jsx(Lr, {
          styles: {
            [M]: Se
          }
        }), /* @__PURE__ */ m.jsx(Lr, {
          styles: Ie
        }), /* @__PURE__ */ m.jsx(Lr, {
          styles: Ve
        })]
      }), /* @__PURE__ */ m.jsx(Pg, {
        themeId: N ? t : void 0,
        theme: d ? d(ge) : ge,
        children: S
      })]
    });
    return L ? ke : /* @__PURE__ */ m.jsx(f.Provider, {
      value: st,
      children: ke
    });
  }
  const b = typeof s == "string" ? s : s.light, y = typeof s == "string" ? s : s.dark;
  return {
    CssVarsProvider: v,
    useColorScheme: p,
    getInitColorSchemeScript: (C) => wg(u({
      attribute: r,
      colorSchemeStorageKey: i,
      defaultMode: a,
      defaultLightColorScheme: b,
      defaultDarkColorScheme: y,
      modeStorageKey: n
    }, C))
  };
}
function Mg(e = "") {
  function t(...r) {
    if (!r.length)
      return "";
    const n = r[0];
    return typeof n == "string" && !n.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${n}${t(...r.slice(1))})` : `, ${n}`;
  }
  return (r, ...n) => `var(--${e ? `${e}-` : ""}${r}${t(...n)})`;
}
const Zl = (e, t, o, r = []) => {
  let n = e;
  t.forEach((i, a) => {
    a === t.length - 1 ? Array.isArray(n) ? n[Number(i)] = o : n && typeof n == "object" && (n[i] = o) : n && typeof n == "object" && (n[i] || (n[i] = r.includes(i) ? [] : {}), n = n[i]);
  });
}, Ag = (e, t, o) => {
  function r(n, i = [], a = []) {
    Object.entries(n).forEach(([s, l]) => {
      (!o || o && !o([...i, s])) && l != null && (typeof l == "object" && Object.keys(l).length > 0 ? r(l, [...i, s], Array.isArray(l) ? [...a, s] : a) : t([...i, s], l, a));
    });
  }
  r(e);
}, jg = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((r) => e.includes(r)) || e[e.length - 1].toLowerCase().indexOf("opacity") >= 0 ? t : `${t}px` : t;
function Ra(e, t) {
  const {
    prefix: o,
    shouldSkipGeneratingVar: r
  } = t || {}, n = {}, i = {}, a = {};
  return Ag(
    e,
    (s, l, d) => {
      if ((typeof l == "string" || typeof l == "number") && (!r || !r(s, l))) {
        const c = `--${o ? `${o}-` : ""}${s.join("-")}`;
        Object.assign(n, {
          [c]: jg(s, l)
        }), Zl(i, s, `var(${c})`, d), Zl(a, s, `var(${c}, ${l})`, d);
      }
    },
    (s) => s[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: n,
    vars: i,
    varsWithDefaults: a
  };
}
function Yr(e) {
  "@babel/helpers - typeof";
  return Yr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Yr(e);
}
function Bg(e, t) {
  if (Yr(e) != "object" || !e)
    return e;
  var o = e[Symbol.toPrimitive];
  if (o !== void 0) {
    var r = o.call(e, t);
    if (Yr(r) != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function Ja(e) {
  var t = Bg(e, "string");
  return Yr(t) == "symbol" ? t : t + "";
}
const _g = ["colorSchemes", "components", "defaultColorScheme"];
function Lg(e, t) {
  const {
    colorSchemes: o = {},
    defaultColorScheme: r = "light"
  } = e, n = U(e, _g), {
    vars: i,
    css: a,
    varsWithDefaults: s
  } = Ra(n, t);
  let l = s;
  const d = {}, {
    [r]: c
  } = o, f = U(o, [r].map(Ja));
  if (Object.entries(f || {}).forEach(([v, b]) => {
    const {
      vars: y,
      css: x,
      varsWithDefaults: C
    } = Ra(b, t);
    l = mt(l, C), d[v] = {
      css: x,
      vars: y
    };
  }), c) {
    const {
      css: v,
      vars: b,
      varsWithDefaults: y
    } = Ra(c, t);
    l = mt(l, y), d[r] = {
      css: v,
      vars: b
    };
  }
  return {
    vars: l,
    generateCssVars: (v) => {
      var b;
      if (!v) {
        var y;
        const C = u({}, a);
        return {
          css: C,
          vars: i,
          selector: (t == null || (y = t.getSelector) == null ? void 0 : y.call(t, v, C)) || ":root"
        };
      }
      const x = u({}, d[v].css);
      return {
        css: x,
        vars: d[v].vars,
        selector: (t == null || (b = t.getSelector) == null ? void 0 : b.call(t, v, x)) || ":root"
      };
    }
  };
}
const Fg = ["className", "component", "disableGutters", "fixed", "maxWidth", "classes"], Ng = kr(), Hg = eu("div", {
  name: "MuiContainer",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, t[`maxWidth${Oe(String(o.maxWidth))}`], o.fixed && t.fixed, o.disableGutters && t.disableGutters];
  }
}), Vg = (e) => ws({
  props: e,
  name: "MuiContainer",
  defaultTheme: Ng
}), Wg = (e, t) => {
  const o = (l) => ct(t, l), {
    classes: r,
    fixed: n,
    disableGutters: i,
    maxWidth: a
  } = e, s = {
    root: ["root", a && `maxWidth${Oe(String(a))}`, n && "fixed", i && "disableGutters"]
  };
  return gt(s, o, r);
};
function Ug(e = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent: t = Hg,
    useThemeProps: o = Vg,
    componentName: r = "MuiContainer"
  } = e, n = t(({
    theme: a,
    ownerState: s
  }) => u({
    width: "100%",
    marginLeft: "auto",
    boxSizing: "border-box",
    marginRight: "auto",
    display: "block"
  }, !s.disableGutters && {
    paddingLeft: a.spacing(2),
    paddingRight: a.spacing(2),
    // @ts-ignore module augmentation fails if custom breakpoints are used
    [a.breakpoints.up("sm")]: {
      paddingLeft: a.spacing(3),
      paddingRight: a.spacing(3)
    }
  }), ({
    theme: a,
    ownerState: s
  }) => s.fixed && Object.keys(a.breakpoints.values).reduce((l, d) => {
    const c = d, f = a.breakpoints.values[c];
    return f !== 0 && (l[a.breakpoints.up(c)] = {
      maxWidth: `${f}${a.breakpoints.unit}`
    }), l;
  }, {}), ({
    theme: a,
    ownerState: s
  }) => u({}, s.maxWidth === "xs" && {
    // @ts-ignore module augmentation fails if custom breakpoints are used
    [a.breakpoints.up("xs")]: {
      // @ts-ignore module augmentation fails if custom breakpoints are used
      maxWidth: Math.max(a.breakpoints.values.xs, 444)
    }
  }, s.maxWidth && // @ts-ignore module augmentation fails if custom breakpoints are used
  s.maxWidth !== "xs" && {
    // @ts-ignore module augmentation fails if custom breakpoints are used
    [a.breakpoints.up(s.maxWidth)]: {
      // @ts-ignore module augmentation fails if custom breakpoints are used
      maxWidth: `${a.breakpoints.values[s.maxWidth]}${a.breakpoints.unit}`
    }
  }));
  return /* @__PURE__ */ h.forwardRef(function(s, l) {
    const d = o(s), {
      className: c,
      component: f = "div",
      disableGutters: p = !1,
      fixed: v = !1,
      maxWidth: b = "lg"
    } = d, y = U(d, Fg), x = u({}, d, {
      component: f,
      disableGutters: p,
      fixed: v,
      maxWidth: b
    }), C = Wg(x, r);
    return (
      // @ts-ignore theme is injected by the styled util
      /* @__PURE__ */ m.jsx(n, u({
        as: f,
        ownerState: x,
        className: fe(C.root, c),
        ref: l
      }, y))
    );
  });
}
const Gg = ["component", "direction", "spacing", "divider", "children", "className", "useFlexGap"], Kg = kr(), Jg = eu("div", {
  name: "MuiStack",
  slot: "Root",
  overridesResolver: (e, t) => t.root
});
function qg(e) {
  return ws({
    props: e,
    name: "MuiStack",
    defaultTheme: Kg
  });
}
function Yg(e, t) {
  const o = h.Children.toArray(e).filter(Boolean);
  return o.reduce((r, n, i) => (r.push(n), i < o.length - 1 && r.push(/* @__PURE__ */ h.cloneElement(t, {
    key: `separator-${i}`
  })), r), []);
}
const Xg = (e) => ({
  row: "Left",
  "row-reverse": "Right",
  column: "Top",
  "column-reverse": "Bottom"
})[e], Zg = ({
  ownerState: e,
  theme: t
}) => {
  let o = u({
    display: "flex",
    flexDirection: "column"
  }, $t({
    theme: t
  }, jo({
    values: e.direction,
    breakpoints: t.breakpoints.values
  }), (r) => ({
    flexDirection: r
  })));
  if (e.spacing) {
    const r = Ss(t), n = Object.keys(t.breakpoints.values).reduce((l, d) => ((typeof e.spacing == "object" && e.spacing[d] != null || typeof e.direction == "object" && e.direction[d] != null) && (l[d] = !0), l), {}), i = jo({
      values: e.direction,
      base: n
    }), a = jo({
      values: e.spacing,
      base: n
    });
    typeof i == "object" && Object.keys(i).forEach((l, d, c) => {
      if (!i[l]) {
        const p = d > 0 ? i[c[d - 1]] : "column";
        i[l] = p;
      }
    }), o = mt(o, $t({
      theme: t
    }, a, (l, d) => e.useFlexGap ? {
      gap: Lo(r, l)
    } : {
      // The useFlexGap={false} implement relies on each child to give up control of the margin.
      // We need to reset the margin to avoid double spacing.
      "& > :not(style):not(style)": {
        margin: 0
      },
      "& > :not(style) ~ :not(style)": {
        [`margin${Xg(d ? i[d] : e.direction)}`]: Lo(r, l)
      }
    }));
  }
  return o = Nm(t.breakpoints, o), o;
};
function Qg(e = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent: t = Jg,
    useThemeProps: o = qg,
    componentName: r = "MuiStack"
  } = e, n = () => gt({
    root: ["root"]
  }, (l) => ct(r, l), {}), i = t(Zg);
  return /* @__PURE__ */ h.forwardRef(function(l, d) {
    const c = o(l), f = dn(c), {
      component: p = "div",
      direction: v = "column",
      spacing: b = 0,
      divider: y,
      children: x,
      className: C,
      useFlexGap: S = !1
    } = f, $ = U(f, Gg), R = {
      direction: v,
      spacing: b,
      useFlexGap: S
    }, P = n();
    return /* @__PURE__ */ m.jsx(i, u({
      as: p,
      ownerState: R,
      ref: d,
      className: fe(P.root, C)
    }, $, {
      children: y ? Yg(x, y) : x
    }));
  });
}
var un = {}, uu = { exports: {} };
(function(e) {
  function t(o) {
    return o && o.__esModule ? o : {
      default: o
    };
  }
  e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
})(uu);
var lo = uu.exports, Pa = { exports: {} }, Ql;
function ev() {
  return Ql || (Ql = 1, function(e) {
    function t(o, r) {
      if (o == null)
        return {};
      var n = {};
      for (var i in o)
        if (Object.prototype.hasOwnProperty.call(o, i)) {
          if (r.indexOf(i) >= 0)
            continue;
          n[i] = o[i];
        }
      return n;
    }
    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(Pa)), Pa.exports;
}
const tv = /* @__PURE__ */ go(jm), ov = /* @__PURE__ */ go(Bm), rv = /* @__PURE__ */ go(Vm), nv = /* @__PURE__ */ go(Uh), iv = /* @__PURE__ */ go(Dh), av = /* @__PURE__ */ go(jh);
var Ir = lo;
Object.defineProperty(un, "__esModule", {
  value: !0
});
var sv = un.default = xv;
un.shouldForwardProp = Fn;
un.systemDefaultTheme = void 0;
var jt = Ir(_d()), qa = Ir(ev()), ec = mv(tv), lv = ov;
Ir(rv);
Ir(nv);
var cv = Ir(iv), dv = Ir(av);
const uv = ["ownerState"], pv = ["variants"], fv = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function pu(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), o = /* @__PURE__ */ new WeakMap();
  return (pu = function(r) {
    return r ? o : t;
  })(e);
}
function mv(e, t) {
  if (e && e.__esModule)
    return e;
  if (e === null || typeof e != "object" && typeof e != "function")
    return { default: e };
  var o = pu(t);
  if (o && o.has(e))
    return o.get(e);
  var r = { __proto__: null }, n = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in e)
    if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
      var a = n ? Object.getOwnPropertyDescriptor(e, i) : null;
      a && (a.get || a.set) ? Object.defineProperty(r, i, a) : r[i] = e[i];
    }
  return r.default = e, o && o.set(e, r), r;
}
function hv(e) {
  return Object.keys(e).length === 0;
}
function gv(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function Fn(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const vv = un.systemDefaultTheme = (0, cv.default)(), bv = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function Pn({
  defaultTheme: e,
  theme: t,
  themeId: o
}) {
  return hv(t) ? e : t[o] || t;
}
function yv(e) {
  return e ? (t, o) => o[e] : null;
}
function Nn(e, t) {
  let {
    ownerState: o
  } = t, r = (0, qa.default)(t, uv);
  const n = typeof e == "function" ? e((0, jt.default)({
    ownerState: o
  }, r)) : e;
  if (Array.isArray(n))
    return n.flatMap((i) => Nn(i, (0, jt.default)({
      ownerState: o
    }, r)));
  if (n && typeof n == "object" && Array.isArray(n.variants)) {
    const {
      variants: i = []
    } = n;
    let s = (0, qa.default)(n, pv);
    return i.forEach((l) => {
      let d = !0;
      typeof l.props == "function" ? d = l.props((0, jt.default)({
        ownerState: o
      }, r, o)) : Object.keys(l.props).forEach((c) => {
        (o == null ? void 0 : o[c]) !== l.props[c] && r[c] !== l.props[c] && (d = !1);
      }), d && (Array.isArray(s) || (s = [s]), s.push(typeof l.style == "function" ? l.style((0, jt.default)({
        ownerState: o
      }, r, o)) : l.style));
    }), s;
  }
  return n;
}
function xv(e = {}) {
  const {
    themeId: t,
    defaultTheme: o = vv,
    rootShouldForwardProp: r = Fn,
    slotShouldForwardProp: n = Fn
  } = e, i = (a) => (0, dv.default)((0, jt.default)({}, a, {
    theme: Pn((0, jt.default)({}, a, {
      defaultTheme: o,
      themeId: t
    }))
  }));
  return i.__mui_systemSx = !0, (a, s = {}) => {
    (0, ec.internal_processStyles)(a, (P) => P.filter((g) => !(g != null && g.__mui_systemSx)));
    const {
      name: l,
      slot: d,
      skipVariantsResolver: c,
      skipSx: f,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: p = yv(bv(d))
    } = s, v = (0, qa.default)(s, fv), b = c !== void 0 ? c : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      d && d !== "Root" && d !== "root" || !1
    ), y = f || !1;
    let x, C = Fn;
    d === "Root" || d === "root" ? C = r : d ? C = n : gv(a) && (C = void 0);
    const S = (0, ec.default)(a, (0, jt.default)({
      shouldForwardProp: C,
      label: x
    }, v)), $ = (P) => typeof P == "function" && P.__emotion_real !== P || (0, lv.isPlainObject)(P) ? (g) => Nn(P, (0, jt.default)({}, g, {
      theme: Pn({
        theme: g.theme,
        defaultTheme: o,
        themeId: t
      })
    })) : P, R = (P, ...g) => {
      let k = $(P);
      const T = g ? g.map($) : [];
      l && p && T.push((A) => {
        const D = Pn((0, jt.default)({}, A, {
          defaultTheme: o,
          themeId: t
        }));
        if (!D.components || !D.components[l] || !D.components[l].styleOverrides)
          return null;
        const M = D.components[l].styleOverrides, E = {};
        return Object.entries(M).forEach(([w, I]) => {
          E[w] = Nn(I, (0, jt.default)({}, A, {
            theme: D
          }));
        }), p(A, E);
      }), l && !b && T.push((A) => {
        var D;
        const M = Pn((0, jt.default)({}, A, {
          defaultTheme: o,
          themeId: t
        })), E = M == null || (D = M.components) == null || (D = D[l]) == null ? void 0 : D.variants;
        return Nn({
          variants: E
        }, (0, jt.default)({}, A, {
          theme: M
        }));
      }), y || T.push(i);
      const j = T.length - g.length;
      if (Array.isArray(P) && j > 0) {
        const A = new Array(j).fill("");
        k = [...P, ...A], k.raw = [...P.raw, ...A];
      }
      const O = S(k, ...T);
      return a.muiName && (O.muiName = a.muiName), O;
    };
    return S.withConfig && (R.withConfig = S.withConfig), R;
  };
}
function Cv(e, t) {
  return u({
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    }
  }, t);
}
var ot = {};
const Sv = /* @__PURE__ */ go(Mf), $v = /* @__PURE__ */ go(og);
var fu = lo;
Object.defineProperty(ot, "__esModule", {
  value: !0
});
var mo = ot.alpha = vu;
ot.blend = Bv;
ot.colorChannel = void 0;
var kv = ot.darken = As;
ot.decomposeColor = Vt;
ot.emphasize = bu;
var Iv = ot.getContrastRatio = zv;
ot.getLuminance = Xn;
ot.hexToRgb = mu;
var Rv = ot.hslToRgb = gu, Pv = ot.lighten = js, wn = ot.private_safeAlpha = Ov, tr = ot.private_safeColorChannel = void 0, Fe = ot.private_safeDarken = Mv, Tn = ot.private_safeEmphasize = jv, Ne = ot.private_safeLighten = Av;
ot.recomposeColor = Rr;
ot.rgbToHex = Ev;
var tc = fu(Sv), wv = fu($v);
function Ms(e, t = 0, o = 1) {
  return (0, wv.default)(e, t, o);
}
function mu(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let o = e.match(t);
  return o && o[0].length === 1 && (o = o.map((r) => r + r)), o ? `rgb${o.length === 4 ? "a" : ""}(${o.map((r, n) => n < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Tv(e) {
  const t = e.toString(16);
  return t.length === 1 ? `0${t}` : t;
}
function Vt(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Vt(mu(e));
  const t = e.indexOf("("), o = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(o) === -1)
    throw new Error((0, tc.default)(9, e));
  let r = e.substring(t + 1, e.length - 1), n;
  if (o === "color") {
    if (r = r.split(" "), n = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(n) === -1)
      throw new Error((0, tc.default)(10, n));
  } else
    r = r.split(",");
  return r = r.map((i) => parseFloat(i)), {
    type: o,
    values: r,
    colorSpace: n
  };
}
const hu = (e) => {
  const t = Vt(e);
  return t.values.slice(0, 3).map((o, r) => t.type.indexOf("hsl") !== -1 && r !== 0 ? `${o}%` : o).join(" ");
};
ot.colorChannel = hu;
const Dv = (e, t) => {
  try {
    return hu(e);
  } catch {
    return e;
  }
};
tr = ot.private_safeColorChannel = Dv;
function Rr(e) {
  const {
    type: t,
    colorSpace: o
  } = e;
  let {
    values: r
  } = e;
  return t.indexOf("rgb") !== -1 ? r = r.map((n, i) => i < 3 ? parseInt(n, 10) : n) : t.indexOf("hsl") !== -1 && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.indexOf("color") !== -1 ? r = `${o} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`;
}
function Ev(e) {
  if (e.indexOf("#") === 0)
    return e;
  const {
    values: t
  } = Vt(e);
  return `#${t.map((o, r) => Tv(r === 3 ? Math.round(255 * o) : o)).join("")}`;
}
function gu(e) {
  e = Vt(e);
  const {
    values: t
  } = e, o = t[0], r = t[1] / 100, n = t[2] / 100, i = r * Math.min(n, 1 - n), a = (d, c = (d + o / 30) % 12) => n - i * Math.max(Math.min(c - 3, 9 - c, 1), -1);
  let s = "rgb";
  const l = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)];
  return e.type === "hsla" && (s += "a", l.push(t[3])), Rr({
    type: s,
    values: l
  });
}
function Xn(e) {
  e = Vt(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Vt(gu(e)).values : e.values;
  return t = t.map((o) => (e.type !== "color" && (o /= 255), o <= 0.03928 ? o / 12.92 : ((o + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function zv(e, t) {
  const o = Xn(e), r = Xn(t);
  return (Math.max(o, r) + 0.05) / (Math.min(o, r) + 0.05);
}
function vu(e, t) {
  return e = Vt(e), t = Ms(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Rr(e);
}
function Ov(e, t, o) {
  try {
    return vu(e, t);
  } catch {
    return e;
  }
}
function As(e, t) {
  if (e = Vt(e), t = Ms(t), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let o = 0; o < 3; o += 1)
      e.values[o] *= 1 - t;
  return Rr(e);
}
function Mv(e, t, o) {
  try {
    return As(e, t);
  } catch {
    return e;
  }
}
function js(e, t) {
  if (e = Vt(e), t = Ms(t), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let o = 0; o < 3; o += 1)
      e.values[o] += (255 - e.values[o]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let o = 0; o < 3; o += 1)
      e.values[o] += (1 - e.values[o]) * t;
  return Rr(e);
}
function Av(e, t, o) {
  try {
    return js(e, t);
  } catch {
    return e;
  }
}
function bu(e, t = 0.15) {
  return Xn(e) > 0.5 ? As(e, t) : js(e, t);
}
function jv(e, t, o) {
  try {
    return bu(e, t);
  } catch {
    return e;
  }
}
function Bv(e, t, o, r = 1) {
  const n = (l, d) => Math.round((l ** (1 / r) * (1 - o) + d ** (1 / r) * o) ** r), i = Vt(e), a = Vt(t), s = [n(i.values[0], a.values[0]), n(i.values[1], a.values[1]), n(i.values[2], a.values[2])];
  return Rr({
    type: "rgb",
    values: s
  });
}
const Xr = {
  black: "#000",
  white: "#fff"
}, _v = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, Ko = {
  50: "#f3e5f5",
  100: "#e1bee7",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  600: "#8e24aa",
  700: "#7b1fa2",
  800: "#6a1b9a",
  900: "#4a148c",
  A100: "#ea80fc",
  A200: "#e040fb",
  A400: "#d500f9",
  A700: "#aa00ff"
}, Jo = {
  50: "#ffebee",
  100: "#ffcdd2",
  200: "#ef9a9a",
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  600: "#e53935",
  700: "#d32f2f",
  800: "#c62828",
  900: "#b71c1c",
  A100: "#ff8a80",
  A200: "#ff5252",
  A400: "#ff1744",
  A700: "#d50000"
}, Er = {
  50: "#fff3e0",
  100: "#ffe0b2",
  200: "#ffcc80",
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  600: "#fb8c00",
  700: "#f57c00",
  800: "#ef6c00",
  900: "#e65100",
  A100: "#ffd180",
  A200: "#ffab40",
  A400: "#ff9100",
  A700: "#ff6d00"
}, qo = {
  50: "#e3f2fd",
  100: "#bbdefb",
  200: "#90caf9",
  300: "#64b5f6",
  400: "#42a5f5",
  500: "#2196f3",
  600: "#1e88e5",
  700: "#1976d2",
  800: "#1565c0",
  900: "#0d47a1",
  A100: "#82b1ff",
  A200: "#448aff",
  A400: "#2979ff",
  A700: "#2962ff"
}, Yo = {
  50: "#e1f5fe",
  100: "#b3e5fc",
  200: "#81d4fa",
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  600: "#039be5",
  700: "#0288d1",
  800: "#0277bd",
  900: "#01579b",
  A100: "#80d8ff",
  A200: "#40c4ff",
  A400: "#00b0ff",
  A700: "#0091ea"
}, Xo = {
  50: "#e8f5e9",
  100: "#c8e6c9",
  200: "#a5d6a7",
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  600: "#43a047",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20",
  A100: "#b9f6ca",
  A200: "#69f0ae",
  A400: "#00e676",
  A700: "#00c853"
}, Lv = ["mode", "contrastThreshold", "tonalOffset"], oc = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: "rgba(0, 0, 0, 0.87)",
    // Secondary text.
    secondary: "rgba(0, 0, 0, 0.6)",
    // Disabled text have even lower visual prominence.
    disabled: "rgba(0, 0, 0, 0.38)"
  },
  // The color used to divide different elements.
  divider: "rgba(0, 0, 0, 0.12)",
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: Xr.white,
    default: Xr.white
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: "rgba(0, 0, 0, 0.54)",
    // The color of an hovered action.
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: "rgba(0, 0, 0, 0.26)",
    // The background color of a disabled action.
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
}, wa = {
  text: {
    primary: Xr.white,
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)"
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: "#121212",
    default: "#121212"
  },
  action: {
    active: Xr.white,
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};
function rc(e, t, o, r) {
  const n = r.light || r, i = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(o) ? e[t] = e[o] : t === "light" ? e.light = Pv(e.main, n) : t === "dark" && (e.dark = kv(e.main, i)));
}
function Fv(e = "light") {
  return e === "dark" ? {
    main: qo[200],
    light: qo[50],
    dark: qo[400]
  } : {
    main: qo[700],
    light: qo[400],
    dark: qo[800]
  };
}
function Nv(e = "light") {
  return e === "dark" ? {
    main: Ko[200],
    light: Ko[50],
    dark: Ko[400]
  } : {
    main: Ko[500],
    light: Ko[300],
    dark: Ko[700]
  };
}
function Hv(e = "light") {
  return e === "dark" ? {
    main: Jo[500],
    light: Jo[300],
    dark: Jo[700]
  } : {
    main: Jo[700],
    light: Jo[400],
    dark: Jo[800]
  };
}
function Vv(e = "light") {
  return e === "dark" ? {
    main: Yo[400],
    light: Yo[300],
    dark: Yo[700]
  } : {
    main: Yo[700],
    light: Yo[500],
    dark: Yo[900]
  };
}
function Wv(e = "light") {
  return e === "dark" ? {
    main: Xo[400],
    light: Xo[300],
    dark: Xo[700]
  } : {
    main: Xo[800],
    light: Xo[500],
    dark: Xo[900]
  };
}
function Uv(e = "light") {
  return e === "dark" ? {
    main: Er[400],
    light: Er[300],
    dark: Er[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Er[500],
    dark: Er[900]
  };
}
function Gv(e) {
  const {
    mode: t = "light",
    contrastThreshold: o = 3,
    tonalOffset: r = 0.2
  } = e, n = U(e, Lv), i = e.primary || Fv(t), a = e.secondary || Nv(t), s = e.error || Hv(t), l = e.info || Vv(t), d = e.success || Wv(t), c = e.warning || Uv(t);
  function f(y) {
    return Iv(y, wa.text.primary) >= o ? wa.text.primary : oc.text.primary;
  }
  const p = ({
    color: y,
    name: x,
    mainShade: C = 500,
    lightShade: S = 300,
    darkShade: $ = 700
  }) => {
    if (y = u({}, y), !y.main && y[C] && (y.main = y[C]), !y.hasOwnProperty("main"))
      throw new Error(pr(11, x ? ` (${x})` : "", C));
    if (typeof y.main != "string")
      throw new Error(pr(12, x ? ` (${x})` : "", JSON.stringify(y.main)));
    return rc(y, "light", S, r), rc(y, "dark", $, r), y.contrastText || (y.contrastText = f(y.main)), y;
  }, v = {
    dark: wa,
    light: oc
  };
  return mt(u({
    // A collection of common colors.
    common: u({}, Xr),
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: p({
      color: i,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: p({
      color: a,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: p({
      color: s,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: p({
      color: c,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: p({
      color: l,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: p({
      color: d,
      name: "success"
    }),
    // The grey colors.
    grey: _v,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: o,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: f,
    // Generate a rich color object.
    augmentColor: p,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: r
  }, v[t]), n);
}
const Kv = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function Jv(e) {
  return Math.round(e * 1e5) / 1e5;
}
const nc = {
  textTransform: "uppercase"
}, ic = '"Roboto", "Helvetica", "Arial", sans-serif';
function yu(e, t) {
  const o = typeof t == "function" ? t(e) : t, {
    fontFamily: r = ic,
    // The default font size of the Material Specification.
    fontSize: n = 14,
    // px
    fontWeightLight: i = 300,
    fontWeightRegular: a = 400,
    fontWeightMedium: s = 500,
    fontWeightBold: l = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: d = 16,
    // Apply the CSS properties to all the variants.
    allVariants: c,
    pxToRem: f
  } = o, p = U(o, Kv), v = n / 14, b = f || ((C) => `${C / d * v}rem`), y = (C, S, $, R, P) => u({
    fontFamily: r,
    fontWeight: C,
    fontSize: b(S),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: $
  }, r === ic ? {
    letterSpacing: `${Jv(R / S)}em`
  } : {}, P, c), x = {
    h1: y(i, 96, 1.167, -1.5),
    h2: y(i, 60, 1.2, -0.5),
    h3: y(a, 48, 1.167, 0),
    h4: y(a, 34, 1.235, 0.25),
    h5: y(a, 24, 1.334, 0),
    h6: y(s, 20, 1.6, 0.15),
    subtitle1: y(a, 16, 1.75, 0.15),
    subtitle2: y(s, 14, 1.57, 0.1),
    body1: y(a, 16, 1.5, 0.15),
    body2: y(a, 14, 1.43, 0.15),
    button: y(s, 14, 1.75, 0.4, nc),
    caption: y(a, 12, 1.66, 0.4),
    overline: y(a, 12, 2.66, 1, nc),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return mt(u({
    htmlFontSize: d,
    pxToRem: b,
    fontFamily: r,
    fontSize: n,
    fontWeightLight: i,
    fontWeightRegular: a,
    fontWeightMedium: s,
    fontWeightBold: l
  }, x), p, {
    clone: !1
    // No need to clone deep
  });
}
const qv = 0.2, Yv = 0.14, Xv = 0.12;
function We(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${qv})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Yv})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Xv})`].join(",");
}
const Zv = ["none", We(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), We(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), We(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), We(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), We(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), We(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), We(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), We(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), We(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), We(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), We(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), We(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), We(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), We(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), We(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), We(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), We(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), We(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), We(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), We(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), We(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), We(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), We(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), We(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Qv = ["duration", "easing", "delay"], eb = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, tb = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function ac(e) {
  return `${Math.round(e)}ms`;
}
function ob(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function rb(e) {
  const t = u({}, eb, e.easing), o = u({}, tb, e.duration);
  return u({
    getAutoHeightDuration: ob,
    create: (n = ["all"], i = {}) => {
      const {
        duration: a = o.standard,
        easing: s = t.easeInOut,
        delay: l = 0
      } = i;
      return U(i, Qv), (Array.isArray(n) ? n : [n]).map((d) => `${d} ${typeof a == "string" ? a : ac(a)} ${s} ${typeof l == "string" ? l : ac(l)}`).join(",");
    }
  }, e, {
    easing: t,
    duration: o
  });
}
const nb = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, ib = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function Zn(e = {}, ...t) {
  const {
    mixins: o = {},
    palette: r = {},
    transitions: n = {},
    typography: i = {}
  } = e, a = U(e, ib);
  if (e.vars)
    throw new Error(pr(18));
  const s = Gv(r), l = kr(e);
  let d = mt(l, {
    mixins: Cv(l.breakpoints, o),
    palette: s,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Zv.slice(),
    typography: yu(s, i),
    transitions: rb(n),
    zIndex: u({}, nb)
  });
  return d = mt(d, a), d = t.reduce((c, f) => mt(c, f), d), d.unstable_sxConfig = u({}, $r, a == null ? void 0 : a.unstable_sxConfig), d.unstable_sx = function(f) {
    return So({
      sx: f,
      theme: this
    });
  }, d;
}
const Wi = Zn(), Wo = "$$material";
function xu(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Cu = (e) => xu(e) && e !== "classes", He = sv({
  themeId: Wo,
  defaultTheme: Wi,
  rootShouldForwardProp: Cu
});
function at({
  props: e,
  name: t
}) {
  return ws({
    props: e,
    name: t,
    defaultTheme: Wi,
    themeId: Wo
  });
}
const jr = Qg({
  createStyledComponent: He("div", {
    name: "MuiStack",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  }),
  useThemeProps: (e) => at({
    props: e,
    name: "MuiStack"
  })
});
function Bs() {
  const e = zi(Wi);
  return e[Wo] || e;
}
function ab(e) {
  var t;
  return !!e[0].match(/(cssVarPrefix|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const Ya = (e) => {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, (t / 100).toFixed(2);
}, sb = ["colorSchemes", "cssVarPrefix", "shouldSkipGeneratingVar"], lb = ["palette"], cb = [...Array(25)].map((e, t) => {
  if (t === 0)
    return;
  const o = Ya(t);
  return `linear-gradient(rgba(255 255 255 / ${o}), rgba(255 255 255 / ${o}))`;
});
function db(e, t) {
  t.forEach((o) => {
    e[o] || (e[o] = {});
  });
}
function F(e, t, o) {
  !e[t] && o && (e[t] = o);
}
function Br(e) {
  return !e || !e.startsWith("hsl") ? e : Rv(e);
}
function po(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = tr(Br(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
const eo = (e) => {
  try {
    return e();
  } catch {
  }
}, ub = (e = "mui") => Mg(e);
function Su(e = {}, ...t) {
  var o, r, n, i, a, s;
  const {
    colorSchemes: l = {},
    cssVarPrefix: d = "mui",
    shouldSkipGeneratingVar: c = ab
  } = e, f = U(e, sb), p = ub(d), v = Zn(u({}, f, l.light && {
    palette: (o = l.light) == null ? void 0 : o.palette
  })), {
    palette: b
  } = v, y = U(v, lb), {
    palette: x
  } = Zn({
    palette: u({
      mode: "dark"
    }, (r = l.dark) == null ? void 0 : r.palette)
  });
  let C = u({}, y, {
    cssVarPrefix: d,
    getCssVar: p,
    colorSchemes: u({}, l, {
      light: u({}, l.light, {
        palette: b,
        opacity: u({
          inputPlaceholder: 0.42,
          inputUnderline: 0.42,
          switchTrackDisabled: 0.12,
          switchTrack: 0.38
        }, (n = l.light) == null ? void 0 : n.opacity),
        overlays: ((i = l.light) == null ? void 0 : i.overlays) || []
      }),
      dark: u({}, l.dark, {
        palette: x,
        opacity: u({
          inputPlaceholder: 0.5,
          inputUnderline: 0.7,
          switchTrackDisabled: 0.2,
          switchTrack: 0.3
        }, (a = l.dark) == null ? void 0 : a.opacity),
        overlays: ((s = l.dark) == null ? void 0 : s.overlays) || cb
      })
    })
  });
  Object.keys(C.colorSchemes).forEach((P) => {
    const g = C.colorSchemes[P].palette, k = (T) => {
      const j = T.split("-"), O = j[1], A = j[2];
      return p(T, g[O][A]);
    };
    if (P === "light" ? (F(g.common, "background", "#fff"), F(g.common, "onBackground", "#000")) : (F(g.common, "background", "#000"), F(g.common, "onBackground", "#fff")), db(g, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), P === "light") {
      F(g.Alert, "errorColor", Fe(g.error.light, 0.6)), F(g.Alert, "infoColor", Fe(g.info.light, 0.6)), F(g.Alert, "successColor", Fe(g.success.light, 0.6)), F(g.Alert, "warningColor", Fe(g.warning.light, 0.6)), F(g.Alert, "errorFilledBg", k("palette-error-main")), F(g.Alert, "infoFilledBg", k("palette-info-main")), F(g.Alert, "successFilledBg", k("palette-success-main")), F(g.Alert, "warningFilledBg", k("palette-warning-main")), F(g.Alert, "errorFilledColor", eo(() => b.getContrastText(g.error.main))), F(g.Alert, "infoFilledColor", eo(() => b.getContrastText(g.info.main))), F(g.Alert, "successFilledColor", eo(() => b.getContrastText(g.success.main))), F(g.Alert, "warningFilledColor", eo(() => b.getContrastText(g.warning.main))), F(g.Alert, "errorStandardBg", Ne(g.error.light, 0.9)), F(g.Alert, "infoStandardBg", Ne(g.info.light, 0.9)), F(g.Alert, "successStandardBg", Ne(g.success.light, 0.9)), F(g.Alert, "warningStandardBg", Ne(g.warning.light, 0.9)), F(g.Alert, "errorIconColor", k("palette-error-main")), F(g.Alert, "infoIconColor", k("palette-info-main")), F(g.Alert, "successIconColor", k("palette-success-main")), F(g.Alert, "warningIconColor", k("palette-warning-main")), F(g.AppBar, "defaultBg", k("palette-grey-100")), F(g.Avatar, "defaultBg", k("palette-grey-400")), F(g.Button, "inheritContainedBg", k("palette-grey-300")), F(g.Button, "inheritContainedHoverBg", k("palette-grey-A100")), F(g.Chip, "defaultBorder", k("palette-grey-400")), F(g.Chip, "defaultAvatarColor", k("palette-grey-700")), F(g.Chip, "defaultIconColor", k("palette-grey-700")), F(g.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), F(g.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), F(g.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), F(g.LinearProgress, "primaryBg", Ne(g.primary.main, 0.62)), F(g.LinearProgress, "secondaryBg", Ne(g.secondary.main, 0.62)), F(g.LinearProgress, "errorBg", Ne(g.error.main, 0.62)), F(g.LinearProgress, "infoBg", Ne(g.info.main, 0.62)), F(g.LinearProgress, "successBg", Ne(g.success.main, 0.62)), F(g.LinearProgress, "warningBg", Ne(g.warning.main, 0.62)), F(g.Skeleton, "bg", `rgba(${k("palette-text-primaryChannel")} / 0.11)`), F(g.Slider, "primaryTrack", Ne(g.primary.main, 0.62)), F(g.Slider, "secondaryTrack", Ne(g.secondary.main, 0.62)), F(g.Slider, "errorTrack", Ne(g.error.main, 0.62)), F(g.Slider, "infoTrack", Ne(g.info.main, 0.62)), F(g.Slider, "successTrack", Ne(g.success.main, 0.62)), F(g.Slider, "warningTrack", Ne(g.warning.main, 0.62));
      const T = Tn(g.background.default, 0.8);
      F(g.SnackbarContent, "bg", T), F(g.SnackbarContent, "color", eo(() => b.getContrastText(T))), F(g.SpeedDialAction, "fabHoverBg", Tn(g.background.paper, 0.15)), F(g.StepConnector, "border", k("palette-grey-400")), F(g.StepContent, "border", k("palette-grey-400")), F(g.Switch, "defaultColor", k("palette-common-white")), F(g.Switch, "defaultDisabledColor", k("palette-grey-100")), F(g.Switch, "primaryDisabledColor", Ne(g.primary.main, 0.62)), F(g.Switch, "secondaryDisabledColor", Ne(g.secondary.main, 0.62)), F(g.Switch, "errorDisabledColor", Ne(g.error.main, 0.62)), F(g.Switch, "infoDisabledColor", Ne(g.info.main, 0.62)), F(g.Switch, "successDisabledColor", Ne(g.success.main, 0.62)), F(g.Switch, "warningDisabledColor", Ne(g.warning.main, 0.62)), F(g.TableCell, "border", Ne(wn(g.divider, 1), 0.88)), F(g.Tooltip, "bg", wn(g.grey[700], 0.92));
    } else {
      F(g.Alert, "errorColor", Ne(g.error.light, 0.6)), F(g.Alert, "infoColor", Ne(g.info.light, 0.6)), F(g.Alert, "successColor", Ne(g.success.light, 0.6)), F(g.Alert, "warningColor", Ne(g.warning.light, 0.6)), F(g.Alert, "errorFilledBg", k("palette-error-dark")), F(g.Alert, "infoFilledBg", k("palette-info-dark")), F(g.Alert, "successFilledBg", k("palette-success-dark")), F(g.Alert, "warningFilledBg", k("palette-warning-dark")), F(g.Alert, "errorFilledColor", eo(() => x.getContrastText(g.error.dark))), F(g.Alert, "infoFilledColor", eo(() => x.getContrastText(g.info.dark))), F(g.Alert, "successFilledColor", eo(() => x.getContrastText(g.success.dark))), F(g.Alert, "warningFilledColor", eo(() => x.getContrastText(g.warning.dark))), F(g.Alert, "errorStandardBg", Fe(g.error.light, 0.9)), F(g.Alert, "infoStandardBg", Fe(g.info.light, 0.9)), F(g.Alert, "successStandardBg", Fe(g.success.light, 0.9)), F(g.Alert, "warningStandardBg", Fe(g.warning.light, 0.9)), F(g.Alert, "errorIconColor", k("palette-error-main")), F(g.Alert, "infoIconColor", k("palette-info-main")), F(g.Alert, "successIconColor", k("palette-success-main")), F(g.Alert, "warningIconColor", k("palette-warning-main")), F(g.AppBar, "defaultBg", k("palette-grey-900")), F(g.AppBar, "darkBg", k("palette-background-paper")), F(g.AppBar, "darkColor", k("palette-text-primary")), F(g.Avatar, "defaultBg", k("palette-grey-600")), F(g.Button, "inheritContainedBg", k("palette-grey-800")), F(g.Button, "inheritContainedHoverBg", k("palette-grey-700")), F(g.Chip, "defaultBorder", k("palette-grey-700")), F(g.Chip, "defaultAvatarColor", k("palette-grey-300")), F(g.Chip, "defaultIconColor", k("palette-grey-300")), F(g.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), F(g.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), F(g.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), F(g.LinearProgress, "primaryBg", Fe(g.primary.main, 0.5)), F(g.LinearProgress, "secondaryBg", Fe(g.secondary.main, 0.5)), F(g.LinearProgress, "errorBg", Fe(g.error.main, 0.5)), F(g.LinearProgress, "infoBg", Fe(g.info.main, 0.5)), F(g.LinearProgress, "successBg", Fe(g.success.main, 0.5)), F(g.LinearProgress, "warningBg", Fe(g.warning.main, 0.5)), F(g.Skeleton, "bg", `rgba(${k("palette-text-primaryChannel")} / 0.13)`), F(g.Slider, "primaryTrack", Fe(g.primary.main, 0.5)), F(g.Slider, "secondaryTrack", Fe(g.secondary.main, 0.5)), F(g.Slider, "errorTrack", Fe(g.error.main, 0.5)), F(g.Slider, "infoTrack", Fe(g.info.main, 0.5)), F(g.Slider, "successTrack", Fe(g.success.main, 0.5)), F(g.Slider, "warningTrack", Fe(g.warning.main, 0.5));
      const T = Tn(g.background.default, 0.98);
      F(g.SnackbarContent, "bg", T), F(g.SnackbarContent, "color", eo(() => x.getContrastText(T))), F(g.SpeedDialAction, "fabHoverBg", Tn(g.background.paper, 0.15)), F(g.StepConnector, "border", k("palette-grey-600")), F(g.StepContent, "border", k("palette-grey-600")), F(g.Switch, "defaultColor", k("palette-grey-300")), F(g.Switch, "defaultDisabledColor", k("palette-grey-600")), F(g.Switch, "primaryDisabledColor", Fe(g.primary.main, 0.55)), F(g.Switch, "secondaryDisabledColor", Fe(g.secondary.main, 0.55)), F(g.Switch, "errorDisabledColor", Fe(g.error.main, 0.55)), F(g.Switch, "infoDisabledColor", Fe(g.info.main, 0.55)), F(g.Switch, "successDisabledColor", Fe(g.success.main, 0.55)), F(g.Switch, "warningDisabledColor", Fe(g.warning.main, 0.55)), F(g.TableCell, "border", Fe(wn(g.divider, 1), 0.68)), F(g.Tooltip, "bg", wn(g.grey[700], 0.92));
    }
    po(g.background, "default"), po(g.background, "paper"), po(g.common, "background"), po(g.common, "onBackground"), po(g, "divider"), Object.keys(g).forEach((T) => {
      const j = g[T];
      j && typeof j == "object" && (j.main && F(g[T], "mainChannel", tr(Br(j.main))), j.light && F(g[T], "lightChannel", tr(Br(j.light))), j.dark && F(g[T], "darkChannel", tr(Br(j.dark))), j.contrastText && F(g[T], "contrastTextChannel", tr(Br(j.contrastText))), T === "text" && (po(g[T], "primary"), po(g[T], "secondary")), T === "action" && (j.active && po(g[T], "active"), j.selected && po(g[T], "selected")));
    });
  }), C = t.reduce((P, g) => mt(P, g), C);
  const S = {
    prefix: d,
    shouldSkipGeneratingVar: c
  }, {
    vars: $,
    generateCssVars: R
  } = Lg(C, S);
  return C.vars = $, C.generateCssVars = R, C.shouldSkipGeneratingVar = c, C.unstable_sxConfig = u({}, $r, f == null ? void 0 : f.unstable_sxConfig), C.unstable_sx = function(g) {
    return So({
      sx: g,
      theme: this
    });
  }, C;
}
const pb = (e) => [...[...Array(24)].map((t, o) => `--${e ? `${e}-` : ""}overlays-${o + 1}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], fb = Su(), {
  CssVarsProvider: mb,
  useColorScheme: Qw,
  getInitColorSchemeScript: eT
} = Og({
  themeId: Wo,
  theme: fb,
  attribute: "data-mui-color-scheme",
  modeStorageKey: "mui-mode",
  colorSchemeStorageKey: "mui-color-scheme",
  defaultColorScheme: {
    light: "light",
    dark: "dark"
  },
  resolveTheme: (e) => {
    const t = u({}, e, {
      typography: yu(e.palette, e.typography)
    });
    return t.unstable_sx = function(r) {
      return So({
        sx: r,
        theme: this
      });
    }, t;
  },
  excludeVariablesFromRoot: pb
});
function hb(e) {
  return ct("MuiSvgIcon", e);
}
ht("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const gb = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"], vb = (e) => {
  const {
    color: t,
    fontSize: o,
    classes: r
  } = e, n = {
    root: ["root", t !== "inherit" && `color${Oe(t)}`, `fontSize${Oe(o)}`]
  };
  return gt(n, hb, r);
}, bb = He("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.color !== "inherit" && t[`color${Oe(o.color)}`], t[`fontSize${Oe(o.fontSize)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var o, r, n, i, a, s, l, d, c, f, p, v, b;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    // the <svg> will define the property that has `currentColor`
    // for example heroicons uses fill="none" and stroke="currentColor"
    fill: t.hasSvgAsChild ? void 0 : "currentColor",
    flexShrink: 0,
    transition: (o = e.transitions) == null || (r = o.create) == null ? void 0 : r.call(o, "fill", {
      duration: (n = e.transitions) == null || (n = n.duration) == null ? void 0 : n.shorter
    }),
    fontSize: {
      inherit: "inherit",
      small: ((i = e.typography) == null || (a = i.pxToRem) == null ? void 0 : a.call(i, 20)) || "1.25rem",
      medium: ((s = e.typography) == null || (l = s.pxToRem) == null ? void 0 : l.call(s, 24)) || "1.5rem",
      large: ((d = e.typography) == null || (c = d.pxToRem) == null ? void 0 : c.call(d, 35)) || "2.1875rem"
    }[t.fontSize],
    // TODO v5 deprecate, v6 remove for sx
    color: (f = (p = (e.vars || e).palette) == null || (p = p[t.color]) == null ? void 0 : p.main) != null ? f : {
      action: (v = (e.vars || e).palette) == null || (v = v.action) == null ? void 0 : v.active,
      disabled: (b = (e.vars || e).palette) == null || (b = b.action) == null ? void 0 : b.disabled,
      inherit: void 0
    }[t.color]
  };
}), Xa = /* @__PURE__ */ h.forwardRef(function(t, o) {
  const r = at({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: n,
    className: i,
    color: a = "inherit",
    component: s = "svg",
    fontSize: l = "medium",
    htmlColor: d,
    inheritViewBox: c = !1,
    titleAccess: f,
    viewBox: p = "0 0 24 24"
  } = r, v = U(r, gb), b = /* @__PURE__ */ h.isValidElement(n) && n.type === "svg", y = u({}, r, {
    color: a,
    component: s,
    fontSize: l,
    instanceFontSize: t.fontSize,
    inheritViewBox: c,
    viewBox: p,
    hasSvgAsChild: b
  }), x = {};
  c || (x.viewBox = p);
  const C = vb(y);
  return /* @__PURE__ */ m.jsxs(bb, u({
    as: s,
    className: fe(C.root, i),
    focusable: "false",
    color: d,
    "aria-hidden": f ? void 0 : !0,
    role: f ? "img" : void 0,
    ref: o
  }, x, v, b && n.props, {
    ownerState: y,
    children: [b ? n.props.children : n, f ? /* @__PURE__ */ m.jsx("title", {
      children: f
    }) : null]
  }));
});
Xa.muiName = "SvgIcon";
function pn(e, t) {
  function o(r, n) {
    return /* @__PURE__ */ m.jsx(Xa, u({
      "data-testid": `${t}Icon`,
      ref: n
    }, r, {
      children: e
    }));
  }
  return o.muiName = Xa.muiName, /* @__PURE__ */ h.memo(/* @__PURE__ */ h.forwardRef(o));
}
const yb = {
  configure: (e) => {
    ks.configure(e);
  }
}, xb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  capitalize: Oe,
  createChainedFunction: Ga,
  createSvgIcon: pn,
  debounce: ou,
  deprecatedPropType: rg,
  isMuiElement: ng,
  ownerDocument: qt,
  ownerWindow: mr,
  requirePropFactory: ig,
  setRef: Yn,
  unstable_ClassNameGenerator: yb,
  unstable_useEnhancedEffect: qn,
  unstable_useId: Ts,
  unsupportedProp: sg,
  useControlled: ru,
  useEventCallback: Mo,
  useForkRef: Yt,
  useIsFocusVisible: Ds
}, Symbol.toStringTag, { value: "Module" }));
function Za(e, t) {
  return Za = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, Za(e, t);
}
function $u(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Za(e, t);
}
const sc = {
  disabled: !1
}, Qn = ft.createContext(null);
var Cb = function(t) {
  return t.scrollTop;
}, _r = "unmounted", Eo = "exited", zo = "entering", er = "entered", Qa = "exiting", co = /* @__PURE__ */ function(e) {
  $u(t, e);
  function t(r, n) {
    var i;
    i = e.call(this, r, n) || this;
    var a = n, s = a && !a.isMounting ? r.enter : r.appear, l;
    return i.appearStatus = null, r.in ? s ? (l = Eo, i.appearStatus = zo) : l = er : r.unmountOnExit || r.mountOnEnter ? l = _r : l = Eo, i.state = {
      status: l
    }, i.nextCallback = null, i;
  }
  t.getDerivedStateFromProps = function(n, i) {
    var a = n.in;
    return a && i.status === _r ? {
      status: Eo
    } : null;
  };
  var o = t.prototype;
  return o.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, o.componentDidUpdate = function(n) {
    var i = null;
    if (n !== this.props) {
      var a = this.state.status;
      this.props.in ? a !== zo && a !== er && (i = zo) : (a === zo || a === er) && (i = Qa);
    }
    this.updateStatus(!1, i);
  }, o.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, o.getTimeouts = function() {
    var n = this.props.timeout, i, a, s;
    return i = a = s = n, n != null && typeof n != "number" && (i = n.exit, a = n.enter, s = n.appear !== void 0 ? n.appear : a), {
      exit: i,
      enter: a,
      appear: s
    };
  }, o.updateStatus = function(n, i) {
    if (n === void 0 && (n = !1), i !== null)
      if (this.cancelNextCallback(), i === zo) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var a = this.props.nodeRef ? this.props.nodeRef.current : kn.findDOMNode(this);
          a && Cb(a);
        }
        this.performEnter(n);
      } else
        this.performExit();
    else
      this.props.unmountOnExit && this.state.status === Eo && this.setState({
        status: _r
      });
  }, o.performEnter = function(n) {
    var i = this, a = this.props.enter, s = this.context ? this.context.isMounting : n, l = this.props.nodeRef ? [s] : [kn.findDOMNode(this), s], d = l[0], c = l[1], f = this.getTimeouts(), p = s ? f.appear : f.enter;
    if (!n && !a || sc.disabled) {
      this.safeSetState({
        status: er
      }, function() {
        i.props.onEntered(d);
      });
      return;
    }
    this.props.onEnter(d, c), this.safeSetState({
      status: zo
    }, function() {
      i.props.onEntering(d, c), i.onTransitionEnd(p, function() {
        i.safeSetState({
          status: er
        }, function() {
          i.props.onEntered(d, c);
        });
      });
    });
  }, o.performExit = function() {
    var n = this, i = this.props.exit, a = this.getTimeouts(), s = this.props.nodeRef ? void 0 : kn.findDOMNode(this);
    if (!i || sc.disabled) {
      this.safeSetState({
        status: Eo
      }, function() {
        n.props.onExited(s);
      });
      return;
    }
    this.props.onExit(s), this.safeSetState({
      status: Qa
    }, function() {
      n.props.onExiting(s), n.onTransitionEnd(a.exit, function() {
        n.safeSetState({
          status: Eo
        }, function() {
          n.props.onExited(s);
        });
      });
    });
  }, o.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, o.safeSetState = function(n, i) {
    i = this.setNextCallback(i), this.setState(n, i);
  }, o.setNextCallback = function(n) {
    var i = this, a = !0;
    return this.nextCallback = function(s) {
      a && (a = !1, i.nextCallback = null, n(s));
    }, this.nextCallback.cancel = function() {
      a = !1;
    }, this.nextCallback;
  }, o.onTransitionEnd = function(n, i) {
    this.setNextCallback(i);
    var a = this.props.nodeRef ? this.props.nodeRef.current : kn.findDOMNode(this), s = n == null && !this.props.addEndListener;
    if (!a || s) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var l = this.props.nodeRef ? [this.nextCallback] : [a, this.nextCallback], d = l[0], c = l[1];
      this.props.addEndListener(d, c);
    }
    n != null && setTimeout(this.nextCallback, n);
  }, o.render = function() {
    var n = this.state.status;
    if (n === _r)
      return null;
    var i = this.props, a = i.children;
    i.in, i.mountOnEnter, i.unmountOnExit, i.appear, i.enter, i.exit, i.timeout, i.addEndListener, i.onEnter, i.onEntering, i.onEntered, i.onExit, i.onExiting, i.onExited, i.nodeRef;
    var s = U(i, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ ft.createElement(Qn.Provider, {
        value: null
      }, typeof a == "function" ? a(n, s) : ft.cloneElement(ft.Children.only(a), s))
    );
  }, t;
}(ft.Component);
co.contextType = Qn;
co.propTypes = {};
function Zo() {
}
co.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Zo,
  onEntering: Zo,
  onEntered: Zo,
  onExit: Zo,
  onExiting: Zo,
  onExited: Zo
};
co.UNMOUNTED = _r;
co.EXITED = Eo;
co.ENTERING = zo;
co.ENTERED = er;
co.EXITING = Qa;
function Sb(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function _s(e, t) {
  var o = function(i) {
    return t && Mn(i) ? t(i) : i;
  }, r = /* @__PURE__ */ Object.create(null);
  return e && Rf.map(e, function(n) {
    return n;
  }).forEach(function(n) {
    r[n.key] = o(n);
  }), r;
}
function $b(e, t) {
  e = e || {}, t = t || {};
  function o(c) {
    return c in t ? t[c] : e[c];
  }
  var r = /* @__PURE__ */ Object.create(null), n = [];
  for (var i in e)
    i in t ? n.length && (r[i] = n, n = []) : n.push(i);
  var a, s = {};
  for (var l in t) {
    if (r[l])
      for (a = 0; a < r[l].length; a++) {
        var d = r[l][a];
        s[r[l][a]] = o(d);
      }
    s[l] = o(l);
  }
  for (a = 0; a < n.length; a++)
    s[n[a]] = o(n[a]);
  return s;
}
function Ao(e, t, o) {
  return o[t] != null ? o[t] : e.props[t];
}
function kb(e, t) {
  return _s(e.children, function(o) {
    return An(o, {
      onExited: t.bind(null, o),
      in: !0,
      appear: Ao(o, "appear", e),
      enter: Ao(o, "enter", e),
      exit: Ao(o, "exit", e)
    });
  });
}
function Ib(e, t, o) {
  var r = _s(e.children), n = $b(t, r);
  return Object.keys(n).forEach(function(i) {
    var a = n[i];
    if (Mn(a)) {
      var s = i in t, l = i in r, d = t[i], c = Mn(d) && !d.props.in;
      l && (!s || c) ? n[i] = An(a, {
        onExited: o.bind(null, a),
        in: !0,
        exit: Ao(a, "exit", e),
        enter: Ao(a, "enter", e)
      }) : !l && s && !c ? n[i] = An(a, {
        in: !1
      }) : l && s && Mn(d) && (n[i] = An(a, {
        onExited: o.bind(null, a),
        in: d.props.in,
        exit: Ao(a, "exit", e),
        enter: Ao(a, "enter", e)
      }));
    }
  }), n;
}
var Rb = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, Pb = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, Ls = /* @__PURE__ */ function(e) {
  $u(t, e);
  function t(r, n) {
    var i;
    i = e.call(this, r, n) || this;
    var a = i.handleExited.bind(Sb(i));
    return i.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: a,
      firstRender: !0
    }, i;
  }
  var o = t.prototype;
  return o.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, o.componentWillUnmount = function() {
    this.mounted = !1;
  }, t.getDerivedStateFromProps = function(n, i) {
    var a = i.children, s = i.handleExited, l = i.firstRender;
    return {
      children: l ? kb(n, s) : Ib(n, a, s),
      firstRender: !1
    };
  }, o.handleExited = function(n, i) {
    var a = _s(this.props.children);
    n.key in a || (n.props.onExited && n.props.onExited(i), this.mounted && this.setState(function(s) {
      var l = u({}, s.children);
      return delete l[n.key], {
        children: l
      };
    }));
  }, o.render = function() {
    var n = this.props, i = n.component, a = n.childFactory, s = U(n, ["component", "childFactory"]), l = this.state.contextValue, d = Rb(this.state.children).map(a);
    return delete s.appear, delete s.enter, delete s.exit, i === null ? /* @__PURE__ */ ft.createElement(Qn.Provider, {
      value: l
    }, d) : /* @__PURE__ */ ft.createElement(Qn.Provider, {
      value: l
    }, /* @__PURE__ */ ft.createElement(i, s, d));
  }, t;
}(ft.Component);
Ls.propTypes = {};
Ls.defaultProps = Pb;
const ku = (e) => e.scrollTop;
function ei(e, t) {
  var o, r;
  const {
    timeout: n,
    easing: i,
    style: a = {}
  } = e;
  return {
    duration: (o = a.transitionDuration) != null ? o : typeof n == "number" ? n : n[t.mode] || 0,
    easing: (r = a.transitionTimingFunction) != null ? r : typeof i == "object" ? i[t.mode] : i,
    delay: a.transitionDelay
  };
}
function wb(e) {
  return ct("MuiPaper", e);
}
ht("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const Tb = ["className", "component", "elevation", "square", "variant"], Db = (e) => {
  const {
    square: t,
    elevation: o,
    variant: r,
    classes: n
  } = e, i = {
    root: ["root", r, !t && "rounded", r === "elevation" && `elevation${o}`]
  };
  return gt(i, wb, n);
}, Eb = He("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, t[o.variant], !o.square && t.rounded, o.variant === "elevation" && t[`elevation${o.elevation}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var o;
  return u({
    backgroundColor: (e.vars || e).palette.background.paper,
    color: (e.vars || e).palette.text.primary,
    transition: e.transitions.create("box-shadow")
  }, !t.square && {
    borderRadius: e.shape.borderRadius
  }, t.variant === "outlined" && {
    border: `1px solid ${(e.vars || e).palette.divider}`
  }, t.variant === "elevation" && u({
    boxShadow: (e.vars || e).shadows[t.elevation]
  }, !e.vars && e.palette.mode === "dark" && {
    backgroundImage: `linear-gradient(${mo("#fff", Ya(t.elevation))}, ${mo("#fff", Ya(t.elevation))})`
  }, e.vars && {
    backgroundImage: (o = e.vars.overlays) == null ? void 0 : o[t.elevation]
  }));
}), Iu = /* @__PURE__ */ h.forwardRef(function(t, o) {
  const r = at({
    props: t,
    name: "MuiPaper"
  }), {
    className: n,
    component: i = "div",
    elevation: a = 1,
    square: s = !1,
    variant: l = "elevation"
  } = r, d = U(r, Tb), c = u({}, r, {
    component: i,
    elevation: a,
    square: s,
    variant: l
  }), f = Db(c);
  return /* @__PURE__ */ m.jsx(Eb, u({
    as: i,
    ownerState: c,
    className: fe(f.root, n),
    ref: o
  }, d));
});
function Ru(e) {
  return typeof e == "string";
}
function zb(e, t, o) {
  return e === void 0 || Ru(e) ? t : u({}, t, {
    ownerState: u({}, t.ownerState, o)
  });
}
function Pu(e, t = []) {
  if (e === void 0)
    return {};
  const o = {};
  return Object.keys(e).filter((r) => r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)).forEach((r) => {
    o[r] = e[r];
  }), o;
}
function Ob(e, t, o) {
  return typeof e == "function" ? e(t, o) : e;
}
function lc(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((o) => !(o.match(/^on[A-Z]/) && typeof e[o] == "function")).forEach((o) => {
    t[o] = e[o];
  }), t;
}
function Mb(e) {
  const {
    getSlotProps: t,
    additionalProps: o,
    externalSlotProps: r,
    externalForwardedProps: n,
    className: i
  } = e;
  if (!t) {
    const v = fe(o == null ? void 0 : o.className, i, n == null ? void 0 : n.className, r == null ? void 0 : r.className), b = u({}, o == null ? void 0 : o.style, n == null ? void 0 : n.style, r == null ? void 0 : r.style), y = u({}, o, n, r);
    return v.length > 0 && (y.className = v), Object.keys(b).length > 0 && (y.style = b), {
      props: y,
      internalRef: void 0
    };
  }
  const a = Pu(u({}, n, r)), s = lc(r), l = lc(n), d = t(a), c = fe(d == null ? void 0 : d.className, o == null ? void 0 : o.className, i, n == null ? void 0 : n.className, r == null ? void 0 : r.className), f = u({}, d == null ? void 0 : d.style, o == null ? void 0 : o.style, n == null ? void 0 : n.style, r == null ? void 0 : r.style), p = u({}, d, o, l, s);
  return c.length > 0 && (p.className = c), Object.keys(f).length > 0 && (p.style = f), {
    props: p,
    internalRef: d.ref
  };
}
const Ab = ["elementType", "externalSlotProps", "ownerState", "skipResolvingSlotProps"];
function ti(e) {
  var t;
  const {
    elementType: o,
    externalSlotProps: r,
    ownerState: n,
    skipResolvingSlotProps: i = !1
  } = e, a = U(e, Ab), s = i ? {} : Ob(r, n), {
    props: l,
    internalRef: d
  } = Mb(u({}, a, {
    externalSlotProps: s
  })), c = Yt(d, s == null ? void 0 : s.ref, (t = e.additionalProps) == null ? void 0 : t.ref);
  return zb(o, u({}, l, {
    ref: c
  }), n);
}
function jb(e) {
  const {
    className: t,
    classes: o,
    pulsate: r = !1,
    rippleX: n,
    rippleY: i,
    rippleSize: a,
    in: s,
    onExited: l,
    timeout: d
  } = e, [c, f] = h.useState(!1), p = fe(t, o.ripple, o.rippleVisible, r && o.ripplePulsate), v = {
    width: a,
    height: a,
    top: -(a / 2) + i,
    left: -(a / 2) + n
  }, b = fe(o.child, c && o.childLeaving, r && o.childPulsate);
  return !s && !c && f(!0), h.useEffect(() => {
    if (!s && l != null) {
      const y = setTimeout(l, d);
      return () => {
        clearTimeout(y);
      };
    }
  }, [l, s, d]), /* @__PURE__ */ m.jsx("span", {
    className: p,
    style: v,
    children: /* @__PURE__ */ m.jsx("span", {
      className: b
    })
  });
}
const _t = ht("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), Bb = ["center", "classes", "className"];
let Ui = (e) => e, cc, dc, uc, pc;
const es = 550, _b = 80, Lb = ln(cc || (cc = Ui`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)), Fb = ln(dc || (dc = Ui`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)), Nb = ln(uc || (uc = Ui`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)), Hb = He("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
}), Vb = He(jb, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})(pc || (pc = Ui`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`), _t.rippleVisible, Lb, es, ({
  theme: e
}) => e.transitions.easing.easeInOut, _t.ripplePulsate, ({
  theme: e
}) => e.transitions.duration.shorter, _t.child, _t.childLeaving, Fb, es, ({
  theme: e
}) => e.transitions.easing.easeInOut, _t.childPulsate, Nb, ({
  theme: e
}) => e.transitions.easing.easeInOut), Wb = /* @__PURE__ */ h.forwardRef(function(t, o) {
  const r = at({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: n = !1,
    classes: i = {},
    className: a
  } = r, s = U(r, Bb), [l, d] = h.useState([]), c = h.useRef(0), f = h.useRef(null);
  h.useEffect(() => {
    f.current && (f.current(), f.current = null);
  }, [l]);
  const p = h.useRef(!1), v = au(), b = h.useRef(null), y = h.useRef(null), x = h.useCallback((R) => {
    const {
      pulsate: P,
      rippleX: g,
      rippleY: k,
      rippleSize: T,
      cb: j
    } = R;
    d((O) => [...O, /* @__PURE__ */ m.jsx(Vb, {
      classes: {
        ripple: fe(i.ripple, _t.ripple),
        rippleVisible: fe(i.rippleVisible, _t.rippleVisible),
        ripplePulsate: fe(i.ripplePulsate, _t.ripplePulsate),
        child: fe(i.child, _t.child),
        childLeaving: fe(i.childLeaving, _t.childLeaving),
        childPulsate: fe(i.childPulsate, _t.childPulsate)
      },
      timeout: es,
      pulsate: P,
      rippleX: g,
      rippleY: k,
      rippleSize: T
    }, c.current)]), c.current += 1, f.current = j;
  }, [i]), C = h.useCallback((R = {}, P = {}, g = () => {
  }) => {
    const {
      pulsate: k = !1,
      center: T = n || P.pulsate,
      fakeElement: j = !1
      // For test purposes
    } = P;
    if ((R == null ? void 0 : R.type) === "mousedown" && p.current) {
      p.current = !1;
      return;
    }
    (R == null ? void 0 : R.type) === "touchstart" && (p.current = !0);
    const O = j ? null : y.current, A = O ? O.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let D, M, E;
    if (T || R === void 0 || R.clientX === 0 && R.clientY === 0 || !R.clientX && !R.touches)
      D = Math.round(A.width / 2), M = Math.round(A.height / 2);
    else {
      const {
        clientX: w,
        clientY: I
      } = R.touches && R.touches.length > 0 ? R.touches[0] : R;
      D = Math.round(w - A.left), M = Math.round(I - A.top);
    }
    if (T)
      E = Math.sqrt((2 * A.width ** 2 + A.height ** 2) / 3), E % 2 === 0 && (E += 1);
    else {
      const w = Math.max(Math.abs((O ? O.clientWidth : 0) - D), D) * 2 + 2, I = Math.max(Math.abs((O ? O.clientHeight : 0) - M), M) * 2 + 2;
      E = Math.sqrt(w ** 2 + I ** 2);
    }
    R != null && R.touches ? b.current === null && (b.current = () => {
      x({
        pulsate: k,
        rippleX: D,
        rippleY: M,
        rippleSize: E,
        cb: g
      });
    }, v.start(_b, () => {
      b.current && (b.current(), b.current = null);
    })) : x({
      pulsate: k,
      rippleX: D,
      rippleY: M,
      rippleSize: E,
      cb: g
    });
  }, [n, x, v]), S = h.useCallback(() => {
    C({}, {
      pulsate: !0
    });
  }, [C]), $ = h.useCallback((R, P) => {
    if (v.clear(), (R == null ? void 0 : R.type) === "touchend" && b.current) {
      b.current(), b.current = null, v.start(0, () => {
        $(R, P);
      });
      return;
    }
    b.current = null, d((g) => g.length > 0 ? g.slice(1) : g), f.current = P;
  }, [v]);
  return h.useImperativeHandle(o, () => ({
    pulsate: S,
    start: C,
    stop: $
  }), [S, C, $]), /* @__PURE__ */ m.jsx(Hb, u({
    className: fe(_t.root, i.root, a),
    ref: y
  }, s, {
    children: /* @__PURE__ */ m.jsx(Ls, {
      component: null,
      exit: !0,
      children: l
    })
  }));
});
function Ub(e) {
  return ct("MuiButtonBase", e);
}
const Gb = ht("MuiButtonBase", ["root", "disabled", "focusVisible"]), Kb = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"], Jb = (e) => {
  const {
    disabled: t,
    focusVisible: o,
    focusVisibleClassName: r,
    classes: n
  } = e, a = gt({
    root: ["root", t && "disabled", o && "focusVisible"]
  }, Ub, n);
  return o && r && (a.root += ` ${r}`), a;
}, qb = He("button", {
  name: "MuiButtonBase",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  textDecoration: "none",
  // So we take precedent over the style of a native <a /> element.
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${Gb.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), wu = /* @__PURE__ */ h.forwardRef(function(t, o) {
  const r = at({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: n,
    centerRipple: i = !1,
    children: a,
    className: s,
    component: l = "button",
    disabled: d = !1,
    disableRipple: c = !1,
    disableTouchRipple: f = !1,
    focusRipple: p = !1,
    LinkComponent: v = "a",
    onBlur: b,
    onClick: y,
    onContextMenu: x,
    onDragLeave: C,
    onFocus: S,
    onFocusVisible: $,
    onKeyDown: R,
    onKeyUp: P,
    onMouseDown: g,
    onMouseLeave: k,
    onMouseUp: T,
    onTouchEnd: j,
    onTouchMove: O,
    onTouchStart: A,
    tabIndex: D = 0,
    TouchRippleProps: M,
    touchRippleRef: E,
    type: w
  } = r, I = U(r, Kb), z = h.useRef(null), _ = h.useRef(null), L = Yt(_, E), {
    isFocusVisibleRef: N,
    onFocus: Y,
    onBlur: ee,
    ref: re
  } = Ds(), [Q, te] = h.useState(!1);
  d && Q && te(!1), h.useImperativeHandle(n, () => ({
    focusVisible: () => {
      te(!0), z.current.focus();
    }
  }), []);
  const [he, oe] = h.useState(!1);
  h.useEffect(() => {
    oe(!0);
  }, []);
  const B = he && !c && !d;
  h.useEffect(() => {
    Q && p && !c && he && _.current.pulsate();
  }, [c, p, Q, he]);
  function V(q, ze, X = f) {
    return Mo((ne) => (ze && ze(ne), !X && _.current && _.current[q](ne), !0));
  }
  const K = V("start", g), se = V("stop", x), ue = V("stop", C), le = V("stop", T), me = V("stop", (q) => {
    Q && q.preventDefault(), k && k(q);
  }), ie = V("start", A), J = V("stop", j), Ce = V("stop", O), ce = V("stop", (q) => {
    ee(q), N.current === !1 && te(!1), b && b(q);
  }, !1), Ee = Mo((q) => {
    z.current || (z.current = q.currentTarget), Y(q), N.current === !0 && (te(!0), $ && $(q)), S && S(q);
  }), pe = () => {
    const q = z.current;
    return l && l !== "button" && !(q.tagName === "A" && q.href);
  }, Se = h.useRef(!1), $e = Mo((q) => {
    p && !Se.current && Q && _.current && q.key === " " && (Se.current = !0, _.current.stop(q, () => {
      _.current.start(q);
    })), q.target === q.currentTarget && pe() && q.key === " " && q.preventDefault(), R && R(q), q.target === q.currentTarget && pe() && q.key === "Enter" && !d && (q.preventDefault(), y && y(q));
  }), ge = Mo((q) => {
    p && q.key === " " && _.current && Q && !q.defaultPrevented && (Se.current = !1, _.current.stop(q, () => {
      _.current.pulsate(q);
    })), P && P(q), y && q.target === q.currentTarget && pe() && q.key === " " && !q.defaultPrevented && y(q);
  });
  let Ie = l;
  Ie === "button" && (I.href || I.to) && (Ie = v);
  const Ve = {};
  Ie === "button" ? (Ve.type = w === void 0 ? "button" : w, Ve.disabled = d) : (!I.href && !I.to && (Ve.role = "button"), d && (Ve["aria-disabled"] = d));
  const st = Yt(o, re, z), Me = u({}, r, {
    centerRipple: i,
    component: l,
    disabled: d,
    disableRipple: c,
    disableTouchRipple: f,
    focusRipple: p,
    tabIndex: D,
    focusVisible: Q
  }), ke = Jb(Me);
  return /* @__PURE__ */ m.jsxs(qb, u({
    as: Ie,
    className: fe(ke.root, s),
    ownerState: Me,
    onBlur: ce,
    onClick: y,
    onContextMenu: se,
    onFocus: Ee,
    onKeyDown: $e,
    onKeyUp: ge,
    onMouseDown: K,
    onMouseLeave: me,
    onMouseUp: le,
    onDragLeave: ue,
    onTouchEnd: J,
    onTouchMove: Ce,
    onTouchStart: ie,
    ref: st,
    tabIndex: d ? -1 : D,
    type: w
  }, Ve, I, {
    children: [a, B ? (
      /* TouchRipple is only needed client-side, x2 boost on the server. */
      /* @__PURE__ */ m.jsx(Wb, u({
        ref: L,
        center: i
      }, M))
    ) : null]
  }));
});
function Yb(e) {
  return ct("MuiIconButton", e);
}
const Xb = ht("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge"]), Zb = ["edge", "children", "className", "color", "disabled", "disableFocusRipple", "size"], Qb = (e) => {
  const {
    classes: t,
    disabled: o,
    color: r,
    edge: n,
    size: i
  } = e, a = {
    root: ["root", o && "disabled", r !== "default" && `color${Oe(r)}`, n && `edge${Oe(n)}`, `size${Oe(i)}`]
  };
  return gt(a, Yb, t);
}, ey = He(wu, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.color !== "default" && t[`color${Oe(o.color)}`], o.edge && t[`edge${Oe(o.edge)}`], t[`size${Oe(o.size)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => u({
  textAlign: "center",
  flex: "0 0 auto",
  fontSize: e.typography.pxToRem(24),
  padding: 8,
  borderRadius: "50%",
  overflow: "visible",
  // Explicitly set the default value to solve a bug on IE11.
  color: (e.vars || e).palette.action.active,
  transition: e.transitions.create("background-color", {
    duration: e.transitions.duration.shortest
  })
}, !t.disableRipple && {
  "&:hover": {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : mo(e.palette.action.active, e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  }
}, t.edge === "start" && {
  marginLeft: t.size === "small" ? -3 : -12
}, t.edge === "end" && {
  marginRight: t.size === "small" ? -3 : -12
}), ({
  theme: e,
  ownerState: t
}) => {
  var o;
  const r = (o = (e.vars || e).palette) == null ? void 0 : o[t.color];
  return u({}, t.color === "inherit" && {
    color: "inherit"
  }, t.color !== "inherit" && t.color !== "default" && u({
    color: r == null ? void 0 : r.main
  }, !t.disableRipple && {
    "&:hover": u({}, r && {
      backgroundColor: e.vars ? `rgba(${r.mainChannel} / ${e.vars.palette.action.hoverOpacity})` : mo(r.main, e.palette.action.hoverOpacity)
    }, {
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    })
  }), t.size === "small" && {
    padding: 5,
    fontSize: e.typography.pxToRem(18)
  }, t.size === "large" && {
    padding: 12,
    fontSize: e.typography.pxToRem(28)
  }, {
    [`&.${Xb.disabled}`]: {
      backgroundColor: "transparent",
      color: (e.vars || e).palette.action.disabled
    }
  });
}), fc = /* @__PURE__ */ h.forwardRef(function(t, o) {
  const r = at({
    props: t,
    name: "MuiIconButton"
  }), {
    edge: n = !1,
    children: i,
    className: a,
    color: s = "default",
    disabled: l = !1,
    disableFocusRipple: d = !1,
    size: c = "medium"
  } = r, f = U(r, Zb), p = u({}, r, {
    edge: n,
    color: s,
    disabled: l,
    disableFocusRipple: d,
    size: c
  }), v = Qb(p);
  return /* @__PURE__ */ m.jsx(ey, u({
    className: fe(v.root, a),
    centerRipple: !0,
    focusRipple: !d,
    disabled: l,
    ref: o
  }, f, {
    ownerState: p,
    children: i
  }));
});
function ty(e) {
  return ct("MuiTypography", e);
}
ht("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const oy = ["align", "className", "component", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"], ry = (e) => {
  const {
    align: t,
    gutterBottom: o,
    noWrap: r,
    paragraph: n,
    variant: i,
    classes: a
  } = e, s = {
    root: ["root", i, e.align !== "inherit" && `align${Oe(t)}`, o && "gutterBottom", r && "noWrap", n && "paragraph"]
  };
  return gt(s, ty, a);
}, ny = He("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.variant && t[o.variant], o.align !== "inherit" && t[`align${Oe(o.align)}`], o.noWrap && t.noWrap, o.gutterBottom && t.gutterBottom, o.paragraph && t.paragraph];
  }
})(({
  theme: e,
  ownerState: t
}) => u({
  margin: 0
}, t.variant === "inherit" && {
  // Some elements, like <button> on Chrome have default font that doesn't inherit, reset this.
  font: "inherit"
}, t.variant !== "inherit" && e.typography[t.variant], t.align !== "inherit" && {
  textAlign: t.align
}, t.noWrap && {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap"
}, t.gutterBottom && {
  marginBottom: "0.35em"
}, t.paragraph && {
  marginBottom: 16
})), mc = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  inherit: "p"
}, iy = {
  primary: "primary.main",
  textPrimary: "text.primary",
  secondary: "secondary.main",
  textSecondary: "text.secondary",
  error: "error.main"
}, ay = (e) => iy[e] || e, Bt = /* @__PURE__ */ h.forwardRef(function(t, o) {
  const r = at({
    props: t,
    name: "MuiTypography"
  }), n = ay(r.color), i = dn(u({}, r, {
    color: n
  })), {
    align: a = "inherit",
    className: s,
    component: l,
    gutterBottom: d = !1,
    noWrap: c = !1,
    paragraph: f = !1,
    variant: p = "body1",
    variantMapping: v = mc
  } = i, b = U(i, oy), y = u({}, i, {
    align: a,
    color: n,
    className: s,
    component: l,
    gutterBottom: d,
    noWrap: c,
    paragraph: f,
    variant: p,
    variantMapping: v
  }), x = l || (f ? "p" : v[p] || mc[p]) || "span", C = ry(y);
  return /* @__PURE__ */ m.jsx(ny, u({
    as: x,
    ref: o,
    ownerState: y,
    className: fe(C.root, s)
  }, b));
}), sy = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function ly(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function cy(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let o = t(`[name="${e.name}"]:checked`);
  return o || (o = t(`[name="${e.name}"]`)), o !== e;
}
function dy(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || cy(e));
}
function uy(e) {
  const t = [], o = [];
  return Array.from(e.querySelectorAll(sy)).forEach((r, n) => {
    const i = ly(r);
    i === -1 || !dy(r) || (i === 0 ? t.push(r) : o.push({
      documentOrder: n,
      tabIndex: i,
      node: r
    }));
  }), o.sort((r, n) => r.tabIndex === n.tabIndex ? r.documentOrder - n.documentOrder : r.tabIndex - n.tabIndex).map((r) => r.node).concat(t);
}
function py() {
  return !0;
}
function fy(e) {
  const {
    children: t,
    disableAutoFocus: o = !1,
    disableEnforceFocus: r = !1,
    disableRestoreFocus: n = !1,
    getTabbable: i = uy,
    isEnabled: a = py,
    open: s
  } = e, l = h.useRef(!1), d = h.useRef(null), c = h.useRef(null), f = h.useRef(null), p = h.useRef(null), v = h.useRef(!1), b = h.useRef(null), y = Yt(t.ref, b), x = h.useRef(null);
  h.useEffect(() => {
    !s || !b.current || (v.current = !o);
  }, [o, s]), h.useEffect(() => {
    if (!s || !b.current)
      return;
    const $ = qt(b.current);
    return b.current.contains($.activeElement) || (b.current.hasAttribute("tabIndex") || b.current.setAttribute("tabIndex", "-1"), v.current && b.current.focus()), () => {
      n || (f.current && f.current.focus && (l.current = !0, f.current.focus()), f.current = null);
    };
  }, [s]), h.useEffect(() => {
    if (!s || !b.current)
      return;
    const $ = qt(b.current), R = (k) => {
      x.current = k, !(r || !a() || k.key !== "Tab") && $.activeElement === b.current && k.shiftKey && (l.current = !0, c.current && c.current.focus());
    }, P = () => {
      const k = b.current;
      if (k === null)
        return;
      if (!$.hasFocus() || !a() || l.current) {
        l.current = !1;
        return;
      }
      if (k.contains($.activeElement) || r && $.activeElement !== d.current && $.activeElement !== c.current)
        return;
      if ($.activeElement !== p.current)
        p.current = null;
      else if (p.current !== null)
        return;
      if (!v.current)
        return;
      let T = [];
      if (($.activeElement === d.current || $.activeElement === c.current) && (T = i(b.current)), T.length > 0) {
        var j, O;
        const A = !!((j = x.current) != null && j.shiftKey && ((O = x.current) == null ? void 0 : O.key) === "Tab"), D = T[0], M = T[T.length - 1];
        typeof D != "string" && typeof M != "string" && (A ? M.focus() : D.focus());
      } else
        k.focus();
    };
    $.addEventListener("focusin", P), $.addEventListener("keydown", R, !0);
    const g = setInterval(() => {
      $.activeElement && $.activeElement.tagName === "BODY" && P();
    }, 50);
    return () => {
      clearInterval(g), $.removeEventListener("focusin", P), $.removeEventListener("keydown", R, !0);
    };
  }, [o, r, n, a, s, i]);
  const C = ($) => {
    f.current === null && (f.current = $.relatedTarget), v.current = !0, p.current = $.target;
    const R = t.props.onFocus;
    R && R($);
  }, S = ($) => {
    f.current === null && (f.current = $.relatedTarget), v.current = !0;
  };
  return /* @__PURE__ */ m.jsxs(h.Fragment, {
    children: [/* @__PURE__ */ m.jsx("div", {
      tabIndex: s ? 0 : -1,
      onFocus: S,
      ref: d,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ h.cloneElement(t, {
      ref: y,
      onFocus: C
    }), /* @__PURE__ */ m.jsx("div", {
      tabIndex: s ? 0 : -1,
      onFocus: S,
      ref: c,
      "data-testid": "sentinelEnd"
    })]
  });
}
function my(e) {
  return typeof e == "function" ? e() : e;
}
const hy = /* @__PURE__ */ h.forwardRef(function(t, o) {
  const {
    children: r,
    container: n,
    disablePortal: i = !1
  } = t, [a, s] = h.useState(null), l = Yt(/* @__PURE__ */ h.isValidElement(r) ? r.ref : null, o);
  if (qn(() => {
    i || s(my(n) || document.body);
  }, [n, i]), qn(() => {
    if (a && !i)
      return Yn(o, a), () => {
        Yn(o, null);
      };
  }, [o, a, i]), i) {
    if (/* @__PURE__ */ h.isValidElement(r)) {
      const d = {
        ref: l
      };
      return /* @__PURE__ */ h.cloneElement(r, d);
    }
    return /* @__PURE__ */ m.jsx(h.Fragment, {
      children: r
    });
  }
  return /* @__PURE__ */ m.jsx(h.Fragment, {
    children: a && /* @__PURE__ */ gd.createPortal(r, a)
  });
});
function gy(e) {
  const t = qt(e);
  return t.body === e ? mr(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function Nr(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function hc(e) {
  return parseInt(mr(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function vy(e) {
  const o = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].indexOf(e.tagName) !== -1, r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return o || r;
}
function gc(e, t, o, r, n) {
  const i = [t, o, ...r];
  [].forEach.call(e.children, (a) => {
    const s = i.indexOf(a) === -1, l = !vy(a);
    s && l && Nr(a, n);
  });
}
function Ta(e, t) {
  let o = -1;
  return e.some((r, n) => t(r) ? (o = n, !0) : !1), o;
}
function by(e, t) {
  const o = [], r = e.container;
  if (!t.disableScrollLock) {
    if (gy(r)) {
      const a = bg(qt(r));
      o.push({
        value: r.style.paddingRight,
        property: "padding-right",
        el: r
      }), r.style.paddingRight = `${hc(r) + a}px`;
      const s = qt(r).querySelectorAll(".mui-fixed");
      [].forEach.call(s, (l) => {
        o.push({
          value: l.style.paddingRight,
          property: "padding-right",
          el: l
        }), l.style.paddingRight = `${hc(l) + a}px`;
      });
    }
    let i;
    if (r.parentNode instanceof DocumentFragment)
      i = qt(r).body;
    else {
      const a = r.parentElement, s = mr(r);
      i = (a == null ? void 0 : a.nodeName) === "HTML" && s.getComputedStyle(a).overflowY === "scroll" ? a : r;
    }
    o.push({
      value: i.style.overflow,
      property: "overflow",
      el: i
    }, {
      value: i.style.overflowX,
      property: "overflow-x",
      el: i
    }, {
      value: i.style.overflowY,
      property: "overflow-y",
      el: i
    }), i.style.overflow = "hidden";
  }
  return () => {
    o.forEach(({
      value: i,
      el: a,
      property: s
    }) => {
      i ? a.style.setProperty(s, i) : a.style.removeProperty(s);
    });
  };
}
function yy(e) {
  const t = [];
  return [].forEach.call(e.children, (o) => {
    o.getAttribute("aria-hidden") === "true" && t.push(o);
  }), t;
}
let xy = class {
  constructor() {
    this.containers = void 0, this.modals = void 0, this.modals = [], this.containers = [];
  }
  add(t, o) {
    let r = this.modals.indexOf(t);
    if (r !== -1)
      return r;
    r = this.modals.length, this.modals.push(t), t.modalRef && Nr(t.modalRef, !1);
    const n = yy(o);
    gc(o, t.mount, t.modalRef, n, !0);
    const i = Ta(this.containers, (a) => a.container === o);
    return i !== -1 ? (this.containers[i].modals.push(t), r) : (this.containers.push({
      modals: [t],
      container: o,
      restore: null,
      hiddenSiblings: n
    }), r);
  }
  mount(t, o) {
    const r = Ta(this.containers, (i) => i.modals.indexOf(t) !== -1), n = this.containers[r];
    n.restore || (n.restore = by(n, o));
  }
  remove(t, o = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1)
      return r;
    const n = Ta(this.containers, (a) => a.modals.indexOf(t) !== -1), i = this.containers[n];
    if (i.modals.splice(i.modals.indexOf(t), 1), this.modals.splice(r, 1), i.modals.length === 0)
      i.restore && i.restore(), t.modalRef && Nr(t.modalRef, o), gc(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1), this.containers.splice(n, 1);
    else {
      const a = i.modals[i.modals.length - 1];
      a.modalRef && Nr(a.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
};
function Cy(e) {
  return typeof e == "function" ? e() : e;
}
function Sy(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const $y = new xy();
function ky(e) {
  const {
    container: t,
    disableEscapeKeyDown: o = !1,
    disableScrollLock: r = !1,
    // @ts-ignore internal logic - Base UI supports the manager as a prop too
    manager: n = $y,
    closeAfterTransition: i = !1,
    onTransitionEnter: a,
    onTransitionExited: s,
    children: l,
    onClose: d,
    open: c,
    rootRef: f
  } = e, p = h.useRef({}), v = h.useRef(null), b = h.useRef(null), y = Yt(b, f), [x, C] = h.useState(!c), S = Sy(l);
  let $ = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && ($ = !1);
  const R = () => qt(v.current), P = () => (p.current.modalRef = b.current, p.current.mount = v.current, p.current), g = () => {
    n.mount(P(), {
      disableScrollLock: r
    }), b.current && (b.current.scrollTop = 0);
  }, k = Mo(() => {
    const I = Cy(t) || R().body;
    n.add(P(), I), b.current && g();
  }), T = h.useCallback(() => n.isTopModal(P()), [n]), j = Mo((I) => {
    v.current = I, I && (c && T() ? g() : b.current && Nr(b.current, $));
  }), O = h.useCallback(() => {
    n.remove(P(), $);
  }, [$, n]);
  h.useEffect(() => () => {
    O();
  }, [O]), h.useEffect(() => {
    c ? k() : (!S || !i) && O();
  }, [c, O, S, i, k]);
  const A = (I) => (z) => {
    var _;
    (_ = I.onKeyDown) == null || _.call(I, z), !(z.key !== "Escape" || z.which === 229 || // Wait until IME is settled.
    !T()) && (o || (z.stopPropagation(), d && d(z, "escapeKeyDown")));
  }, D = (I) => (z) => {
    var _;
    (_ = I.onClick) == null || _.call(I, z), z.target === z.currentTarget && d && d(z, "backdropClick");
  };
  return {
    getRootProps: (I = {}) => {
      const z = Pu(e);
      delete z.onTransitionEnter, delete z.onTransitionExited;
      const _ = u({}, z, I);
      return u({
        role: "presentation"
      }, _, {
        onKeyDown: A(_),
        ref: y
      });
    },
    getBackdropProps: (I = {}) => {
      const z = I;
      return u({
        "aria-hidden": !0
      }, z, {
        onClick: D(z),
        open: c
      });
    },
    getTransitionProps: () => {
      const I = () => {
        C(!1), a && a();
      }, z = () => {
        C(!0), s && s(), i && O();
      };
      return {
        onEnter: Ga(I, l == null ? void 0 : l.props.onEnter),
        onExited: Ga(z, l == null ? void 0 : l.props.onExited)
      };
    },
    rootRef: y,
    portalRef: j,
    isTopModal: T,
    exited: x,
    hasTransition: S
  };
}
var yt = "top", Wt = "bottom", Ut = "right", xt = "left", Fs = "auto", fn = [yt, Wt, Ut, xt], hr = "start", Zr = "end", Iy = "clippingParents", Tu = "viewport", zr = "popper", Ry = "reference", vc = /* @__PURE__ */ fn.reduce(function(e, t) {
  return e.concat([t + "-" + hr, t + "-" + Zr]);
}, []), Du = /* @__PURE__ */ [].concat(fn, [Fs]).reduce(function(e, t) {
  return e.concat([t, t + "-" + hr, t + "-" + Zr]);
}, []), Py = "beforeRead", wy = "read", Ty = "afterRead", Dy = "beforeMain", Ey = "main", zy = "afterMain", Oy = "beforeWrite", My = "write", Ay = "afterWrite", jy = [Py, wy, Ty, Dy, Ey, zy, Oy, My, Ay];
function so(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Et(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Fo(e) {
  var t = Et(e).Element;
  return e instanceof t || e instanceof Element;
}
function Nt(e) {
  var t = Et(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Ns(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Et(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function By(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(o) {
    var r = t.styles[o] || {}, n = t.attributes[o] || {}, i = t.elements[o];
    !Nt(i) || !so(i) || (Object.assign(i.style, r), Object.keys(n).forEach(function(a) {
      var s = n[a];
      s === !1 ? i.removeAttribute(a) : i.setAttribute(a, s === !0 ? "" : s);
    }));
  });
}
function _y(e) {
  var t = e.state, o = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, o.popper), t.styles = o, t.elements.arrow && Object.assign(t.elements.arrow.style, o.arrow), function() {
    Object.keys(t.elements).forEach(function(r) {
      var n = t.elements[r], i = t.attributes[r] || {}, a = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : o[r]), s = a.reduce(function(l, d) {
        return l[d] = "", l;
      }, {});
      !Nt(n) || !so(n) || (Object.assign(n.style, s), Object.keys(i).forEach(function(l) {
        n.removeAttribute(l);
      }));
    });
  };
}
const Ly = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: By,
  effect: _y,
  requires: ["computeStyles"]
};
function io(e) {
  return e.split("-")[0];
}
var Bo = Math.max, oi = Math.min, gr = Math.round;
function ts() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Eu() {
  return !/^((?!chrome|android).)*safari/i.test(ts());
}
function vr(e, t, o) {
  t === void 0 && (t = !1), o === void 0 && (o = !1);
  var r = e.getBoundingClientRect(), n = 1, i = 1;
  t && Nt(e) && (n = e.offsetWidth > 0 && gr(r.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && gr(r.height) / e.offsetHeight || 1);
  var a = Fo(e) ? Et(e) : window, s = a.visualViewport, l = !Eu() && o, d = (r.left + (l && s ? s.offsetLeft : 0)) / n, c = (r.top + (l && s ? s.offsetTop : 0)) / i, f = r.width / n, p = r.height / i;
  return {
    width: f,
    height: p,
    top: c,
    right: d + f,
    bottom: c + p,
    left: d,
    x: d,
    y: c
  };
}
function Hs(e) {
  var t = vr(e), o = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - o) <= 1 && (o = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: o,
    height: r
  };
}
function zu(e, t) {
  var o = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (o && Ns(o)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function ho(e) {
  return Et(e).getComputedStyle(e);
}
function Fy(e) {
  return ["table", "td", "th"].indexOf(so(e)) >= 0;
}
function $o(e) {
  return ((Fo(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function Gi(e) {
  return so(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Ns(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    $o(e)
  );
}
function bc(e) {
  return !Nt(e) || // https://github.com/popperjs/popper-core/issues/837
  ho(e).position === "fixed" ? null : e.offsetParent;
}
function Ny(e) {
  var t = /firefox/i.test(ts()), o = /Trident/i.test(ts());
  if (o && Nt(e)) {
    var r = ho(e);
    if (r.position === "fixed")
      return null;
  }
  var n = Gi(e);
  for (Ns(n) && (n = n.host); Nt(n) && ["html", "body"].indexOf(so(n)) < 0; ) {
    var i = ho(n);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return n;
    n = n.parentNode;
  }
  return null;
}
function mn(e) {
  for (var t = Et(e), o = bc(e); o && Fy(o) && ho(o).position === "static"; )
    o = bc(o);
  return o && (so(o) === "html" || so(o) === "body" && ho(o).position === "static") ? t : o || Ny(e) || t;
}
function Vs(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Hr(e, t, o) {
  return Bo(e, oi(t, o));
}
function Hy(e, t, o) {
  var r = Hr(e, t, o);
  return r > o ? o : r;
}
function Ou() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Mu(e) {
  return Object.assign({}, Ou(), e);
}
function Au(e, t) {
  return t.reduce(function(o, r) {
    return o[r] = e, o;
  }, {});
}
var Vy = function(t, o) {
  return t = typeof t == "function" ? t(Object.assign({}, o.rects, {
    placement: o.placement
  })) : t, Mu(typeof t != "number" ? t : Au(t, fn));
};
function Wy(e) {
  var t, o = e.state, r = e.name, n = e.options, i = o.elements.arrow, a = o.modifiersData.popperOffsets, s = io(o.placement), l = Vs(s), d = [xt, Ut].indexOf(s) >= 0, c = d ? "height" : "width";
  if (!(!i || !a)) {
    var f = Vy(n.padding, o), p = Hs(i), v = l === "y" ? yt : xt, b = l === "y" ? Wt : Ut, y = o.rects.reference[c] + o.rects.reference[l] - a[l] - o.rects.popper[c], x = a[l] - o.rects.reference[l], C = mn(i), S = C ? l === "y" ? C.clientHeight || 0 : C.clientWidth || 0 : 0, $ = y / 2 - x / 2, R = f[v], P = S - p[c] - f[b], g = S / 2 - p[c] / 2 + $, k = Hr(R, g, P), T = l;
    o.modifiersData[r] = (t = {}, t[T] = k, t.centerOffset = k - g, t);
  }
}
function Uy(e) {
  var t = e.state, o = e.options, r = o.element, n = r === void 0 ? "[data-popper-arrow]" : r;
  n != null && (typeof n == "string" && (n = t.elements.popper.querySelector(n), !n) || zu(t.elements.popper, n) && (t.elements.arrow = n));
}
const Gy = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Wy,
  effect: Uy,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function br(e) {
  return e.split("-")[1];
}
var Ky = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Jy(e, t) {
  var o = e.x, r = e.y, n = t.devicePixelRatio || 1;
  return {
    x: gr(o * n) / n || 0,
    y: gr(r * n) / n || 0
  };
}
function yc(e) {
  var t, o = e.popper, r = e.popperRect, n = e.placement, i = e.variation, a = e.offsets, s = e.position, l = e.gpuAcceleration, d = e.adaptive, c = e.roundOffsets, f = e.isFixed, p = a.x, v = p === void 0 ? 0 : p, b = a.y, y = b === void 0 ? 0 : b, x = typeof c == "function" ? c({
    x: v,
    y
  }) : {
    x: v,
    y
  };
  v = x.x, y = x.y;
  var C = a.hasOwnProperty("x"), S = a.hasOwnProperty("y"), $ = xt, R = yt, P = window;
  if (d) {
    var g = mn(o), k = "clientHeight", T = "clientWidth";
    if (g === Et(o) && (g = $o(o), ho(g).position !== "static" && s === "absolute" && (k = "scrollHeight", T = "scrollWidth")), g = g, n === yt || (n === xt || n === Ut) && i === Zr) {
      R = Wt;
      var j = f && g === P && P.visualViewport ? P.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        g[k]
      );
      y -= j - r.height, y *= l ? 1 : -1;
    }
    if (n === xt || (n === yt || n === Wt) && i === Zr) {
      $ = Ut;
      var O = f && g === P && P.visualViewport ? P.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        g[T]
      );
      v -= O - r.width, v *= l ? 1 : -1;
    }
  }
  var A = Object.assign({
    position: s
  }, d && Ky), D = c === !0 ? Jy({
    x: v,
    y
  }, Et(o)) : {
    x: v,
    y
  };
  if (v = D.x, y = D.y, l) {
    var M;
    return Object.assign({}, A, (M = {}, M[R] = S ? "0" : "", M[$] = C ? "0" : "", M.transform = (P.devicePixelRatio || 1) <= 1 ? "translate(" + v + "px, " + y + "px)" : "translate3d(" + v + "px, " + y + "px, 0)", M));
  }
  return Object.assign({}, A, (t = {}, t[R] = S ? y + "px" : "", t[$] = C ? v + "px" : "", t.transform = "", t));
}
function qy(e) {
  var t = e.state, o = e.options, r = o.gpuAcceleration, n = r === void 0 ? !0 : r, i = o.adaptive, a = i === void 0 ? !0 : i, s = o.roundOffsets, l = s === void 0 ? !0 : s, d = {
    placement: io(t.placement),
    variation: br(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: n,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, yc(Object.assign({}, d, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, yc(Object.assign({}, d, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const Yy = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: qy,
  data: {}
};
var Dn = {
  passive: !0
};
function Xy(e) {
  var t = e.state, o = e.instance, r = e.options, n = r.scroll, i = n === void 0 ? !0 : n, a = r.resize, s = a === void 0 ? !0 : a, l = Et(t.elements.popper), d = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && d.forEach(function(c) {
    c.addEventListener("scroll", o.update, Dn);
  }), s && l.addEventListener("resize", o.update, Dn), function() {
    i && d.forEach(function(c) {
      c.removeEventListener("scroll", o.update, Dn);
    }), s && l.removeEventListener("resize", o.update, Dn);
  };
}
const Zy = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Xy,
  data: {}
};
var Qy = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Hn(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Qy[t];
  });
}
var e0 = {
  start: "end",
  end: "start"
};
function xc(e) {
  return e.replace(/start|end/g, function(t) {
    return e0[t];
  });
}
function Ws(e) {
  var t = Et(e), o = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: o,
    scrollTop: r
  };
}
function Us(e) {
  return vr($o(e)).left + Ws(e).scrollLeft;
}
function t0(e, t) {
  var o = Et(e), r = $o(e), n = o.visualViewport, i = r.clientWidth, a = r.clientHeight, s = 0, l = 0;
  if (n) {
    i = n.width, a = n.height;
    var d = Eu();
    (d || !d && t === "fixed") && (s = n.offsetLeft, l = n.offsetTop);
  }
  return {
    width: i,
    height: a,
    x: s + Us(e),
    y: l
  };
}
function o0(e) {
  var t, o = $o(e), r = Ws(e), n = (t = e.ownerDocument) == null ? void 0 : t.body, i = Bo(o.scrollWidth, o.clientWidth, n ? n.scrollWidth : 0, n ? n.clientWidth : 0), a = Bo(o.scrollHeight, o.clientHeight, n ? n.scrollHeight : 0, n ? n.clientHeight : 0), s = -r.scrollLeft + Us(e), l = -r.scrollTop;
  return ho(n || o).direction === "rtl" && (s += Bo(o.clientWidth, n ? n.clientWidth : 0) - i), {
    width: i,
    height: a,
    x: s,
    y: l
  };
}
function Gs(e) {
  var t = ho(e), o = t.overflow, r = t.overflowX, n = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(o + n + r);
}
function ju(e) {
  return ["html", "body", "#document"].indexOf(so(e)) >= 0 ? e.ownerDocument.body : Nt(e) && Gs(e) ? e : ju(Gi(e));
}
function Vr(e, t) {
  var o;
  t === void 0 && (t = []);
  var r = ju(e), n = r === ((o = e.ownerDocument) == null ? void 0 : o.body), i = Et(r), a = n ? [i].concat(i.visualViewport || [], Gs(r) ? r : []) : r, s = t.concat(a);
  return n ? s : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    s.concat(Vr(Gi(a)))
  );
}
function os(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function r0(e, t) {
  var o = vr(e, !1, t === "fixed");
  return o.top = o.top + e.clientTop, o.left = o.left + e.clientLeft, o.bottom = o.top + e.clientHeight, o.right = o.left + e.clientWidth, o.width = e.clientWidth, o.height = e.clientHeight, o.x = o.left, o.y = o.top, o;
}
function Cc(e, t, o) {
  return t === Tu ? os(t0(e, o)) : Fo(t) ? r0(t, o) : os(o0($o(e)));
}
function n0(e) {
  var t = Vr(Gi(e)), o = ["absolute", "fixed"].indexOf(ho(e).position) >= 0, r = o && Nt(e) ? mn(e) : e;
  return Fo(r) ? t.filter(function(n) {
    return Fo(n) && zu(n, r) && so(n) !== "body";
  }) : [];
}
function i0(e, t, o, r) {
  var n = t === "clippingParents" ? n0(e) : [].concat(t), i = [].concat(n, [o]), a = i[0], s = i.reduce(function(l, d) {
    var c = Cc(e, d, r);
    return l.top = Bo(c.top, l.top), l.right = oi(c.right, l.right), l.bottom = oi(c.bottom, l.bottom), l.left = Bo(c.left, l.left), l;
  }, Cc(e, a, r));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function Bu(e) {
  var t = e.reference, o = e.element, r = e.placement, n = r ? io(r) : null, i = r ? br(r) : null, a = t.x + t.width / 2 - o.width / 2, s = t.y + t.height / 2 - o.height / 2, l;
  switch (n) {
    case yt:
      l = {
        x: a,
        y: t.y - o.height
      };
      break;
    case Wt:
      l = {
        x: a,
        y: t.y + t.height
      };
      break;
    case Ut:
      l = {
        x: t.x + t.width,
        y: s
      };
      break;
    case xt:
      l = {
        x: t.x - o.width,
        y: s
      };
      break;
    default:
      l = {
        x: t.x,
        y: t.y
      };
  }
  var d = n ? Vs(n) : null;
  if (d != null) {
    var c = d === "y" ? "height" : "width";
    switch (i) {
      case hr:
        l[d] = l[d] - (t[c] / 2 - o[c] / 2);
        break;
      case Zr:
        l[d] = l[d] + (t[c] / 2 - o[c] / 2);
        break;
    }
  }
  return l;
}
function Qr(e, t) {
  t === void 0 && (t = {});
  var o = t, r = o.placement, n = r === void 0 ? e.placement : r, i = o.strategy, a = i === void 0 ? e.strategy : i, s = o.boundary, l = s === void 0 ? Iy : s, d = o.rootBoundary, c = d === void 0 ? Tu : d, f = o.elementContext, p = f === void 0 ? zr : f, v = o.altBoundary, b = v === void 0 ? !1 : v, y = o.padding, x = y === void 0 ? 0 : y, C = Mu(typeof x != "number" ? x : Au(x, fn)), S = p === zr ? Ry : zr, $ = e.rects.popper, R = e.elements[b ? S : p], P = i0(Fo(R) ? R : R.contextElement || $o(e.elements.popper), l, c, a), g = vr(e.elements.reference), k = Bu({
    reference: g,
    element: $,
    strategy: "absolute",
    placement: n
  }), T = os(Object.assign({}, $, k)), j = p === zr ? T : g, O = {
    top: P.top - j.top + C.top,
    bottom: j.bottom - P.bottom + C.bottom,
    left: P.left - j.left + C.left,
    right: j.right - P.right + C.right
  }, A = e.modifiersData.offset;
  if (p === zr && A) {
    var D = A[n];
    Object.keys(O).forEach(function(M) {
      var E = [Ut, Wt].indexOf(M) >= 0 ? 1 : -1, w = [yt, Wt].indexOf(M) >= 0 ? "y" : "x";
      O[M] += D[w] * E;
    });
  }
  return O;
}
function a0(e, t) {
  t === void 0 && (t = {});
  var o = t, r = o.placement, n = o.boundary, i = o.rootBoundary, a = o.padding, s = o.flipVariations, l = o.allowedAutoPlacements, d = l === void 0 ? Du : l, c = br(r), f = c ? s ? vc : vc.filter(function(b) {
    return br(b) === c;
  }) : fn, p = f.filter(function(b) {
    return d.indexOf(b) >= 0;
  });
  p.length === 0 && (p = f);
  var v = p.reduce(function(b, y) {
    return b[y] = Qr(e, {
      placement: y,
      boundary: n,
      rootBoundary: i,
      padding: a
    })[io(y)], b;
  }, {});
  return Object.keys(v).sort(function(b, y) {
    return v[b] - v[y];
  });
}
function s0(e) {
  if (io(e) === Fs)
    return [];
  var t = Hn(e);
  return [xc(e), t, xc(t)];
}
function l0(e) {
  var t = e.state, o = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var n = o.mainAxis, i = n === void 0 ? !0 : n, a = o.altAxis, s = a === void 0 ? !0 : a, l = o.fallbackPlacements, d = o.padding, c = o.boundary, f = o.rootBoundary, p = o.altBoundary, v = o.flipVariations, b = v === void 0 ? !0 : v, y = o.allowedAutoPlacements, x = t.options.placement, C = io(x), S = C === x, $ = l || (S || !b ? [Hn(x)] : s0(x)), R = [x].concat($).reduce(function(Q, te) {
      return Q.concat(io(te) === Fs ? a0(t, {
        placement: te,
        boundary: c,
        rootBoundary: f,
        padding: d,
        flipVariations: b,
        allowedAutoPlacements: y
      }) : te);
    }, []), P = t.rects.reference, g = t.rects.popper, k = /* @__PURE__ */ new Map(), T = !0, j = R[0], O = 0; O < R.length; O++) {
      var A = R[O], D = io(A), M = br(A) === hr, E = [yt, Wt].indexOf(D) >= 0, w = E ? "width" : "height", I = Qr(t, {
        placement: A,
        boundary: c,
        rootBoundary: f,
        altBoundary: p,
        padding: d
      }), z = E ? M ? Ut : xt : M ? Wt : yt;
      P[w] > g[w] && (z = Hn(z));
      var _ = Hn(z), L = [];
      if (i && L.push(I[D] <= 0), s && L.push(I[z] <= 0, I[_] <= 0), L.every(function(Q) {
        return Q;
      })) {
        j = A, T = !1;
        break;
      }
      k.set(A, L);
    }
    if (T)
      for (var N = b ? 3 : 1, Y = function(te) {
        var he = R.find(function(oe) {
          var B = k.get(oe);
          if (B)
            return B.slice(0, te).every(function(V) {
              return V;
            });
        });
        if (he)
          return j = he, "break";
      }, ee = N; ee > 0; ee--) {
        var re = Y(ee);
        if (re === "break")
          break;
      }
    t.placement !== j && (t.modifiersData[r]._skip = !0, t.placement = j, t.reset = !0);
  }
}
const c0 = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: l0,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Sc(e, t, o) {
  return o === void 0 && (o = {
    x: 0,
    y: 0
  }), {
    top: e.top - t.height - o.y,
    right: e.right - t.width + o.x,
    bottom: e.bottom - t.height + o.y,
    left: e.left - t.width - o.x
  };
}
function $c(e) {
  return [yt, Ut, Wt, xt].some(function(t) {
    return e[t] >= 0;
  });
}
function d0(e) {
  var t = e.state, o = e.name, r = t.rects.reference, n = t.rects.popper, i = t.modifiersData.preventOverflow, a = Qr(t, {
    elementContext: "reference"
  }), s = Qr(t, {
    altBoundary: !0
  }), l = Sc(a, r), d = Sc(s, n, i), c = $c(l), f = $c(d);
  t.modifiersData[o] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: d,
    isReferenceHidden: c,
    hasPopperEscaped: f
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": c,
    "data-popper-escaped": f
  });
}
const u0 = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: d0
};
function p0(e, t, o) {
  var r = io(e), n = [xt, yt].indexOf(r) >= 0 ? -1 : 1, i = typeof o == "function" ? o(Object.assign({}, t, {
    placement: e
  })) : o, a = i[0], s = i[1];
  return a = a || 0, s = (s || 0) * n, [xt, Ut].indexOf(r) >= 0 ? {
    x: s,
    y: a
  } : {
    x: a,
    y: s
  };
}
function f0(e) {
  var t = e.state, o = e.options, r = e.name, n = o.offset, i = n === void 0 ? [0, 0] : n, a = Du.reduce(function(c, f) {
    return c[f] = p0(f, t.rects, i), c;
  }, {}), s = a[t.placement], l = s.x, d = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += d), t.modifiersData[r] = a;
}
const m0 = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: f0
};
function h0(e) {
  var t = e.state, o = e.name;
  t.modifiersData[o] = Bu({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const g0 = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: h0,
  data: {}
};
function v0(e) {
  return e === "x" ? "y" : "x";
}
function b0(e) {
  var t = e.state, o = e.options, r = e.name, n = o.mainAxis, i = n === void 0 ? !0 : n, a = o.altAxis, s = a === void 0 ? !1 : a, l = o.boundary, d = o.rootBoundary, c = o.altBoundary, f = o.padding, p = o.tether, v = p === void 0 ? !0 : p, b = o.tetherOffset, y = b === void 0 ? 0 : b, x = Qr(t, {
    boundary: l,
    rootBoundary: d,
    padding: f,
    altBoundary: c
  }), C = io(t.placement), S = br(t.placement), $ = !S, R = Vs(C), P = v0(R), g = t.modifiersData.popperOffsets, k = t.rects.reference, T = t.rects.popper, j = typeof y == "function" ? y(Object.assign({}, t.rects, {
    placement: t.placement
  })) : y, O = typeof j == "number" ? {
    mainAxis: j,
    altAxis: j
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, j), A = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, D = {
    x: 0,
    y: 0
  };
  if (g) {
    if (i) {
      var M, E = R === "y" ? yt : xt, w = R === "y" ? Wt : Ut, I = R === "y" ? "height" : "width", z = g[R], _ = z + x[E], L = z - x[w], N = v ? -T[I] / 2 : 0, Y = S === hr ? k[I] : T[I], ee = S === hr ? -T[I] : -k[I], re = t.elements.arrow, Q = v && re ? Hs(re) : {
        width: 0,
        height: 0
      }, te = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Ou(), he = te[E], oe = te[w], B = Hr(0, k[I], Q[I]), V = $ ? k[I] / 2 - N - B - he - O.mainAxis : Y - B - he - O.mainAxis, K = $ ? -k[I] / 2 + N + B + oe + O.mainAxis : ee + B + oe + O.mainAxis, se = t.elements.arrow && mn(t.elements.arrow), ue = se ? R === "y" ? se.clientTop || 0 : se.clientLeft || 0 : 0, le = (M = A == null ? void 0 : A[R]) != null ? M : 0, me = z + V - le - ue, ie = z + K - le, J = Hr(v ? oi(_, me) : _, z, v ? Bo(L, ie) : L);
      g[R] = J, D[R] = J - z;
    }
    if (s) {
      var Ce, ce = R === "x" ? yt : xt, Ee = R === "x" ? Wt : Ut, pe = g[P], Se = P === "y" ? "height" : "width", $e = pe + x[ce], ge = pe - x[Ee], Ie = [yt, xt].indexOf(C) !== -1, Ve = (Ce = A == null ? void 0 : A[P]) != null ? Ce : 0, st = Ie ? $e : pe - k[Se] - T[Se] - Ve + O.altAxis, Me = Ie ? pe + k[Se] + T[Se] - Ve - O.altAxis : ge, ke = v && Ie ? Hy(st, pe, Me) : Hr(v ? st : $e, pe, v ? Me : ge);
      g[P] = ke, D[P] = ke - pe;
    }
    t.modifiersData[r] = D;
  }
}
const y0 = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: b0,
  requiresIfExists: ["offset"]
};
function x0(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function C0(e) {
  return e === Et(e) || !Nt(e) ? Ws(e) : x0(e);
}
function S0(e) {
  var t = e.getBoundingClientRect(), o = gr(t.width) / e.offsetWidth || 1, r = gr(t.height) / e.offsetHeight || 1;
  return o !== 1 || r !== 1;
}
function $0(e, t, o) {
  o === void 0 && (o = !1);
  var r = Nt(t), n = Nt(t) && S0(t), i = $o(t), a = vr(e, n, o), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (r || !r && !o) && ((so(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Gs(i)) && (s = C0(t)), Nt(t) ? (l = vr(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : i && (l.x = Us(i))), {
    x: a.left + s.scrollLeft - l.x,
    y: a.top + s.scrollTop - l.y,
    width: a.width,
    height: a.height
  };
}
function k0(e) {
  var t = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(i) {
    t.set(i.name, i);
  });
  function n(i) {
    o.add(i.name);
    var a = [].concat(i.requires || [], i.requiresIfExists || []);
    a.forEach(function(s) {
      if (!o.has(s)) {
        var l = t.get(s);
        l && n(l);
      }
    }), r.push(i);
  }
  return e.forEach(function(i) {
    o.has(i.name) || n(i);
  }), r;
}
function I0(e) {
  var t = k0(e);
  return jy.reduce(function(o, r) {
    return o.concat(t.filter(function(n) {
      return n.phase === r;
    }));
  }, []);
}
function R0(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(o) {
      Promise.resolve().then(function() {
        t = void 0, o(e());
      });
    })), t;
  };
}
function P0(e) {
  var t = e.reduce(function(o, r) {
    var n = o[r.name];
    return o[r.name] = n ? Object.assign({}, n, r, {
      options: Object.assign({}, n.options, r.options),
      data: Object.assign({}, n.data, r.data)
    }) : r, o;
  }, {});
  return Object.keys(t).map(function(o) {
    return t[o];
  });
}
var kc = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Ic() {
  for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++)
    t[o] = arguments[o];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function w0(e) {
  e === void 0 && (e = {});
  var t = e, o = t.defaultModifiers, r = o === void 0 ? [] : o, n = t.defaultOptions, i = n === void 0 ? kc : n;
  return function(s, l, d) {
    d === void 0 && (d = i);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, kc, i),
      modifiersData: {},
      elements: {
        reference: s,
        popper: l
      },
      attributes: {},
      styles: {}
    }, f = [], p = !1, v = {
      state: c,
      setOptions: function(C) {
        var S = typeof C == "function" ? C(c.options) : C;
        y(), c.options = Object.assign({}, i, c.options, S), c.scrollParents = {
          reference: Fo(s) ? Vr(s) : s.contextElement ? Vr(s.contextElement) : [],
          popper: Vr(l)
        };
        var $ = I0(P0([].concat(r, c.options.modifiers)));
        return c.orderedModifiers = $.filter(function(R) {
          return R.enabled;
        }), b(), v.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!p) {
          var C = c.elements, S = C.reference, $ = C.popper;
          if (Ic(S, $)) {
            c.rects = {
              reference: $0(S, mn($), c.options.strategy === "fixed"),
              popper: Hs($)
            }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(O) {
              return c.modifiersData[O.name] = Object.assign({}, O.data);
            });
            for (var R = 0; R < c.orderedModifiers.length; R++) {
              if (c.reset === !0) {
                c.reset = !1, R = -1;
                continue;
              }
              var P = c.orderedModifiers[R], g = P.fn, k = P.options, T = k === void 0 ? {} : k, j = P.name;
              typeof g == "function" && (c = g({
                state: c,
                options: T,
                name: j,
                instance: v
              }) || c);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: R0(function() {
        return new Promise(function(x) {
          v.forceUpdate(), x(c);
        });
      }),
      destroy: function() {
        y(), p = !0;
      }
    };
    if (!Ic(s, l))
      return v;
    v.setOptions(d).then(function(x) {
      !p && d.onFirstUpdate && d.onFirstUpdate(x);
    });
    function b() {
      c.orderedModifiers.forEach(function(x) {
        var C = x.name, S = x.options, $ = S === void 0 ? {} : S, R = x.effect;
        if (typeof R == "function") {
          var P = R({
            state: c,
            name: C,
            instance: v,
            options: $
          }), g = function() {
          };
          f.push(P || g);
        }
      });
    }
    function y() {
      f.forEach(function(x) {
        return x();
      }), f = [];
    }
    return v;
  };
}
var T0 = [Zy, g0, Yy, Ly, m0, c0, y0, Gy, u0], D0 = /* @__PURE__ */ w0({
  defaultModifiers: T0
});
function E0(e) {
  return /* @__PURE__ */ m.jsx(Oh, u({}, e, {
    defaultTheme: Wi,
    themeId: Wo
  }));
}
const z0 = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"], O0 = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, M0 = /* @__PURE__ */ h.forwardRef(function(t, o) {
  const r = Bs(), n = {
    enter: r.transitions.duration.enteringScreen,
    exit: r.transitions.duration.leavingScreen
  }, {
    addEndListener: i,
    appear: a = !0,
    children: s,
    easing: l,
    in: d,
    onEnter: c,
    onEntered: f,
    onEntering: p,
    onExit: v,
    onExited: b,
    onExiting: y,
    style: x,
    timeout: C = n,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: S = co
  } = t, $ = U(t, z0), R = h.useRef(null), P = Yt(R, s.ref, o), g = (E) => (w) => {
    if (E) {
      const I = R.current;
      w === void 0 ? E(I) : E(I, w);
    }
  }, k = g(p), T = g((E, w) => {
    ku(E);
    const I = ei({
      style: x,
      timeout: C,
      easing: l
    }, {
      mode: "enter"
    });
    E.style.webkitTransition = r.transitions.create("opacity", I), E.style.transition = r.transitions.create("opacity", I), c && c(E, w);
  }), j = g(f), O = g(y), A = g((E) => {
    const w = ei({
      style: x,
      timeout: C,
      easing: l
    }, {
      mode: "exit"
    });
    E.style.webkitTransition = r.transitions.create("opacity", w), E.style.transition = r.transitions.create("opacity", w), v && v(E);
  }), D = g(b), M = (E) => {
    i && i(R.current, E);
  };
  return /* @__PURE__ */ m.jsx(S, u({
    appear: a,
    in: d,
    nodeRef: R,
    onEnter: T,
    onEntered: j,
    onEntering: k,
    onExit: A,
    onExited: D,
    onExiting: O,
    addEndListener: M,
    timeout: C
  }, $, {
    children: (E, w) => /* @__PURE__ */ h.cloneElement(s, u({
      style: u({
        opacity: 0,
        visibility: E === "exited" && !d ? "hidden" : void 0
      }, O0[E], x, s.props.style),
      ref: P
    }, w))
  }));
});
function A0(e) {
  return ct("MuiBackdrop", e);
}
ht("MuiBackdrop", ["root", "invisible"]);
const j0 = ["children", "className", "component", "components", "componentsProps", "invisible", "open", "slotProps", "slots", "TransitionComponent", "transitionDuration"], B0 = (e) => {
  const {
    classes: t,
    invisible: o
  } = e;
  return gt({
    root: ["root", o && "invisible"]
  }, A0, t);
}, _0 = He("div", {
  name: "MuiBackdrop",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.invisible && t.invisible];
  }
})(({
  ownerState: e
}) => u({
  position: "fixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  WebkitTapHighlightColor: "transparent"
}, e.invisible && {
  backgroundColor: "transparent"
})), L0 = /* @__PURE__ */ h.forwardRef(function(t, o) {
  var r, n, i;
  const a = at({
    props: t,
    name: "MuiBackdrop"
  }), {
    children: s,
    className: l,
    component: d = "div",
    components: c = {},
    componentsProps: f = {},
    invisible: p = !1,
    open: v,
    slotProps: b = {},
    slots: y = {},
    TransitionComponent: x = M0,
    transitionDuration: C
  } = a, S = U(a, j0), $ = u({}, a, {
    component: d,
    invisible: p
  }), R = B0($), P = (r = b.root) != null ? r : f.root;
  return /* @__PURE__ */ m.jsx(x, u({
    in: v,
    timeout: C
  }, S, {
    children: /* @__PURE__ */ m.jsx(_0, u({
      "aria-hidden": !0
    }, P, {
      as: (n = (i = y.root) != null ? i : c.Root) != null ? n : d,
      className: fe(R.root, l, P == null ? void 0 : P.className),
      ownerState: u({}, $, P == null ? void 0 : P.ownerState),
      classes: R,
      ref: o,
      children: s
    }))
  }));
}), F0 = ht("MuiBox", ["root"]), N0 = Zn(), en = Lh({
  themeId: Wo,
  defaultTheme: N0,
  defaultClassName: F0.root,
  generateClassName: ks.generate
});
function H0(e) {
  return ct("MuiButton", e);
}
const En = ht("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]), V0 = /* @__PURE__ */ h.createContext({}), W0 = /* @__PURE__ */ h.createContext(void 0), U0 = ["children", "color", "component", "className", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"], G0 = (e) => {
  const {
    color: t,
    disableElevation: o,
    fullWidth: r,
    size: n,
    variant: i,
    classes: a
  } = e, s = {
    root: ["root", i, `${i}${Oe(t)}`, `size${Oe(n)}`, `${i}Size${Oe(n)}`, `color${Oe(t)}`, o && "disableElevation", r && "fullWidth"],
    label: ["label"],
    startIcon: ["icon", "startIcon", `iconSize${Oe(n)}`],
    endIcon: ["icon", "endIcon", `iconSize${Oe(n)}`]
  }, l = gt(s, H0, a);
  return u({}, a, l);
}, _u = (e) => u({}, e.size === "small" && {
  "& > *:nth-of-type(1)": {
    fontSize: 18
  }
}, e.size === "medium" && {
  "& > *:nth-of-type(1)": {
    fontSize: 20
  }
}, e.size === "large" && {
  "& > *:nth-of-type(1)": {
    fontSize: 22
  }
}), K0 = He(wu, {
  shouldForwardProp: (e) => Cu(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, t[o.variant], t[`${o.variant}${Oe(o.color)}`], t[`size${Oe(o.size)}`], t[`${o.variant}Size${Oe(o.size)}`], o.color === "inherit" && t.colorInherit, o.disableElevation && t.disableElevation, o.fullWidth && t.fullWidth];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var o, r;
  const n = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800], i = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
  return u({}, e.typography.button, {
    minWidth: 64,
    padding: "6px 16px",
    borderRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: e.transitions.duration.short
    }),
    "&:hover": u({
      textDecoration: "none",
      backgroundColor: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : mo(e.palette.text.primary, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "text" && t.color !== "inherit" && {
      backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : mo(e.palette[t.color].main, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "outlined" && t.color !== "inherit" && {
      border: `1px solid ${(e.vars || e).palette[t.color].main}`,
      backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : mo(e.palette[t.color].main, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "contained" && {
      backgroundColor: e.vars ? e.vars.palette.Button.inheritContainedHoverBg : i,
      boxShadow: (e.vars || e).shadows[4],
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        boxShadow: (e.vars || e).shadows[2],
        backgroundColor: (e.vars || e).palette.grey[300]
      }
    }, t.variant === "contained" && t.color !== "inherit" && {
      backgroundColor: (e.vars || e).palette[t.color].dark,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: (e.vars || e).palette[t.color].main
      }
    }),
    "&:active": u({}, t.variant === "contained" && {
      boxShadow: (e.vars || e).shadows[8]
    }),
    [`&.${En.focusVisible}`]: u({}, t.variant === "contained" && {
      boxShadow: (e.vars || e).shadows[6]
    }),
    [`&.${En.disabled}`]: u({
      color: (e.vars || e).palette.action.disabled
    }, t.variant === "outlined" && {
      border: `1px solid ${(e.vars || e).palette.action.disabledBackground}`
    }, t.variant === "contained" && {
      color: (e.vars || e).palette.action.disabled,
      boxShadow: (e.vars || e).shadows[0],
      backgroundColor: (e.vars || e).palette.action.disabledBackground
    })
  }, t.variant === "text" && {
    padding: "6px 8px"
  }, t.variant === "text" && t.color !== "inherit" && {
    color: (e.vars || e).palette[t.color].main
  }, t.variant === "outlined" && {
    padding: "5px 15px",
    border: "1px solid currentColor"
  }, t.variant === "outlined" && t.color !== "inherit" && {
    color: (e.vars || e).palette[t.color].main,
    border: e.vars ? `1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)` : `1px solid ${mo(e.palette[t.color].main, 0.5)}`
  }, t.variant === "contained" && {
    color: e.vars ? (
      // this is safe because grey does not change between default light/dark mode
      e.vars.palette.text.primary
    ) : (o = (r = e.palette).getContrastText) == null ? void 0 : o.call(r, e.palette.grey[300]),
    backgroundColor: e.vars ? e.vars.palette.Button.inheritContainedBg : n,
    boxShadow: (e.vars || e).shadows[2]
  }, t.variant === "contained" && t.color !== "inherit" && {
    color: (e.vars || e).palette[t.color].contrastText,
    backgroundColor: (e.vars || e).palette[t.color].main
  }, t.color === "inherit" && {
    color: "inherit",
    borderColor: "currentColor"
  }, t.size === "small" && t.variant === "text" && {
    padding: "4px 5px",
    fontSize: e.typography.pxToRem(13)
  }, t.size === "large" && t.variant === "text" && {
    padding: "8px 11px",
    fontSize: e.typography.pxToRem(15)
  }, t.size === "small" && t.variant === "outlined" && {
    padding: "3px 9px",
    fontSize: e.typography.pxToRem(13)
  }, t.size === "large" && t.variant === "outlined" && {
    padding: "7px 21px",
    fontSize: e.typography.pxToRem(15)
  }, t.size === "small" && t.variant === "contained" && {
    padding: "4px 10px",
    fontSize: e.typography.pxToRem(13)
  }, t.size === "large" && t.variant === "contained" && {
    padding: "8px 22px",
    fontSize: e.typography.pxToRem(15)
  }, t.fullWidth && {
    width: "100%"
  });
}, ({
  ownerState: e
}) => e.disableElevation && {
  boxShadow: "none",
  "&:hover": {
    boxShadow: "none"
  },
  [`&.${En.focusVisible}`]: {
    boxShadow: "none"
  },
  "&:active": {
    boxShadow: "none"
  },
  [`&.${En.disabled}`]: {
    boxShadow: "none"
  }
}), J0 = He("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.startIcon, t[`iconSize${Oe(o.size)}`]];
  }
})(({
  ownerState: e
}) => u({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4
}, e.size === "small" && {
  marginLeft: -2
}, _u(e))), q0 = He("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.endIcon, t[`iconSize${Oe(o.size)}`]];
  }
})(({
  ownerState: e
}) => u({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8
}, e.size === "small" && {
  marginRight: -2
}, _u(e))), Y0 = /* @__PURE__ */ h.forwardRef(function(t, o) {
  const r = h.useContext(V0), n = h.useContext(W0), i = Ps(r, t), a = at({
    props: i,
    name: "MuiButton"
  }), {
    children: s,
    color: l = "primary",
    component: d = "button",
    className: c,
    disabled: f = !1,
    disableElevation: p = !1,
    disableFocusRipple: v = !1,
    endIcon: b,
    focusVisibleClassName: y,
    fullWidth: x = !1,
    size: C = "medium",
    startIcon: S,
    type: $,
    variant: R = "text"
  } = a, P = U(a, U0), g = u({}, a, {
    color: l,
    component: d,
    disabled: f,
    disableElevation: p,
    disableFocusRipple: v,
    fullWidth: x,
    size: C,
    type: $,
    variant: R
  }), k = G0(g), T = S && /* @__PURE__ */ m.jsx(J0, {
    className: k.startIcon,
    ownerState: g,
    children: S
  }), j = b && /* @__PURE__ */ m.jsx(q0, {
    className: k.endIcon,
    ownerState: g,
    children: b
  }), O = n || "";
  return /* @__PURE__ */ m.jsxs(K0, u({
    ownerState: g,
    className: fe(r.className, k.root, c, O),
    component: d,
    disabled: f,
    focusRipple: !v,
    focusVisibleClassName: fe(k.focusVisible, y),
    ref: o,
    type: $
  }, P, {
    classes: k,
    children: [T, s, j]
  }));
});
function X0(e) {
  return ct("MuiCard", e);
}
ht("MuiCard", ["root"]);
const Z0 = ["className", "raised"], Q0 = (e) => {
  const {
    classes: t
  } = e;
  return gt({
    root: ["root"]
  }, X0, t);
}, ex = He(Iu, {
  name: "MuiCard",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})(() => ({
  overflow: "hidden"
})), Lu = /* @__PURE__ */ h.forwardRef(function(t, o) {
  const r = at({
    props: t,
    name: "MuiCard"
  }), {
    className: n,
    raised: i = !1
  } = r, a = U(r, Z0), s = u({}, r, {
    raised: i
  }), l = Q0(s);
  return /* @__PURE__ */ m.jsx(ex, u({
    className: fe(l.root, n),
    elevation: i ? 8 : void 0,
    ref: o,
    ownerState: s
  }, a));
});
function tx(e) {
  return ct("MuiCardContent", e);
}
ht("MuiCardContent", ["root"]);
const ox = ["className", "component"], rx = (e) => {
  const {
    classes: t
  } = e;
  return gt({
    root: ["root"]
  }, tx, t);
}, nx = He("div", {
  name: "MuiCardContent",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})(() => ({
  padding: 16,
  "&:last-child": {
    paddingBottom: 24
  }
})), Fu = /* @__PURE__ */ h.forwardRef(function(t, o) {
  const r = at({
    props: t,
    name: "MuiCardContent"
  }), {
    className: n,
    component: i = "div"
  } = r, a = U(r, ox), s = u({}, r, {
    component: i
  }), l = rx(s);
  return /* @__PURE__ */ m.jsx(nx, u({
    as: i,
    className: fe(l.root, n),
    ownerState: s,
    ref: o
  }, a));
});
function ix(e) {
  return ct("MuiCardMedia", e);
}
ht("MuiCardMedia", ["root", "media", "img"]);
const ax = ["children", "className", "component", "image", "src", "style"], sx = (e) => {
  const {
    classes: t,
    isMediaComponent: o,
    isImageComponent: r
  } = e;
  return gt({
    root: ["root", o && "media", r && "img"]
  }, ix, t);
}, lx = He("div", {
  name: "MuiCardMedia",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e, {
      isMediaComponent: r,
      isImageComponent: n
    } = o;
    return [t.root, r && t.media, n && t.img];
  }
})(({
  ownerState: e
}) => u({
  display: "block",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center"
}, e.isMediaComponent && {
  width: "100%"
}, e.isImageComponent && {
  // ⚠️ object-fit is not supported by IE11.
  objectFit: "cover"
})), cx = ["video", "audio", "picture", "iframe", "img"], dx = ["picture", "img"], Nu = /* @__PURE__ */ h.forwardRef(function(t, o) {
  const r = at({
    props: t,
    name: "MuiCardMedia"
  }), {
    children: n,
    className: i,
    component: a = "div",
    image: s,
    src: l,
    style: d
  } = r, c = U(r, ax), f = cx.indexOf(a) !== -1, p = !f && s ? u({
    backgroundImage: `url("${s}")`
  }, d) : d, v = u({}, r, {
    component: a,
    isMediaComponent: f,
    isImageComponent: dx.indexOf(a) !== -1
  }), b = sx(v);
  return /* @__PURE__ */ m.jsx(lx, u({
    className: fe(b.root, i),
    as: a,
    role: !f && s ? "img" : void 0,
    ref: o,
    style: p,
    ownerState: v,
    src: f ? s || l : void 0
  }, c, {
    children: n
  }));
}), Hu = Ug({
  createStyledComponent: He("div", {
    name: "MuiContainer",
    slot: "Root",
    overridesResolver: (e, t) => {
      const {
        ownerState: o
      } = e;
      return [t.root, t[`maxWidth${Oe(String(o.maxWidth))}`], o.fixed && t.fixed, o.disableGutters && t.disableGutters];
    }
  }),
  useThemeProps: (e) => at({
    props: e,
    name: "MuiContainer"
  })
}), ux = (e, t) => u({
  WebkitFontSmoothing: "antialiased",
  // Antialiasing.
  MozOsxFontSmoothing: "grayscale",
  // Antialiasing.
  // Change from `box-sizing: content-box` so that `width`
  // is not affected by `padding` or `border`.
  boxSizing: "border-box",
  // Fix font resize problem in iOS
  WebkitTextSizeAdjust: "100%"
}, t && !e.vars && {
  colorScheme: e.palette.mode
}), px = (e) => u({
  color: (e.vars || e).palette.text.primary
}, e.typography.body1, {
  backgroundColor: (e.vars || e).palette.background.default,
  "@media print": {
    // Save printer ink.
    backgroundColor: (e.vars || e).palette.common.white
  }
}), fx = (e, t = !1) => {
  var o;
  const r = {};
  t && e.colorSchemes && Object.entries(e.colorSchemes).forEach(([a, s]) => {
    var l;
    r[e.getColorSchemeSelector(a).replace(/\s*&/, "")] = {
      colorScheme: (l = s.palette) == null ? void 0 : l.mode
    };
  });
  let n = u({
    html: ux(e, t),
    "*, *::before, *::after": {
      boxSizing: "inherit"
    },
    "strong, b": {
      fontWeight: e.typography.fontWeightBold
    },
    body: u({
      margin: 0
    }, px(e), {
      // Add support for document.body.requestFullScreen().
      // Other elements, if background transparent, are not supported.
      "&::backdrop": {
        backgroundColor: (e.vars || e).palette.background.default
      }
    })
  }, r);
  const i = (o = e.components) == null || (o = o.MuiCssBaseline) == null ? void 0 : o.styleOverrides;
  return i && (n = [n, i]), n;
};
function mx(e) {
  const t = at({
    props: e,
    name: "MuiCssBaseline"
  }), {
    children: o,
    enableColorScheme: r = !1
  } = t;
  return /* @__PURE__ */ m.jsxs(h.Fragment, {
    children: [/* @__PURE__ */ m.jsx(E0, {
      styles: (n) => fx(n, r)
    }), o]
  });
}
function hx(e) {
  return ct("MuiModal", e);
}
ht("MuiModal", ["root", "hidden", "backdrop"]);
const gx = ["BackdropComponent", "BackdropProps", "classes", "className", "closeAfterTransition", "children", "container", "component", "components", "componentsProps", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "onBackdropClick", "onClose", "onTransitionEnter", "onTransitionExited", "open", "slotProps", "slots", "theme"], vx = (e) => {
  const {
    open: t,
    exited: o,
    classes: r
  } = e;
  return gt({
    root: ["root", !t && o && "hidden"],
    backdrop: ["backdrop"]
  }, hx, r);
}, bx = He("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, !o.open && o.exited && t.hidden];
  }
})(({
  theme: e,
  ownerState: t
}) => u({
  position: "fixed",
  zIndex: (e.vars || e).zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0
}, !t.open && t.exited && {
  visibility: "hidden"
})), yx = He(L0, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (e, t) => t.backdrop
})({
  zIndex: -1
}), xx = /* @__PURE__ */ h.forwardRef(function(t, o) {
  var r, n, i, a, s, l;
  const d = at({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: c = yx,
    BackdropProps: f,
    className: p,
    closeAfterTransition: v = !1,
    children: b,
    container: y,
    component: x,
    components: C = {},
    componentsProps: S = {},
    disableAutoFocus: $ = !1,
    disableEnforceFocus: R = !1,
    disableEscapeKeyDown: P = !1,
    disablePortal: g = !1,
    disableRestoreFocus: k = !1,
    disableScrollLock: T = !1,
    hideBackdrop: j = !1,
    keepMounted: O = !1,
    onBackdropClick: A,
    open: D,
    slotProps: M,
    slots: E
    // eslint-disable-next-line react/prop-types
  } = d, w = U(d, gx), I = u({}, d, {
    closeAfterTransition: v,
    disableAutoFocus: $,
    disableEnforceFocus: R,
    disableEscapeKeyDown: P,
    disablePortal: g,
    disableRestoreFocus: k,
    disableScrollLock: T,
    hideBackdrop: j,
    keepMounted: O
  }), {
    getRootProps: z,
    getBackdropProps: _,
    getTransitionProps: L,
    portalRef: N,
    isTopModal: Y,
    exited: ee,
    hasTransition: re
  } = ky(u({}, I, {
    rootRef: o
  })), Q = u({}, I, {
    exited: ee
  }), te = vx(Q), he = {};
  if (b.props.tabIndex === void 0 && (he.tabIndex = "-1"), re) {
    const {
      onEnter: le,
      onExited: me
    } = L();
    he.onEnter = le, he.onExited = me;
  }
  const oe = (r = (n = E == null ? void 0 : E.root) != null ? n : C.Root) != null ? r : bx, B = (i = (a = E == null ? void 0 : E.backdrop) != null ? a : C.Backdrop) != null ? i : c, V = (s = M == null ? void 0 : M.root) != null ? s : S.root, K = (l = M == null ? void 0 : M.backdrop) != null ? l : S.backdrop, se = ti({
    elementType: oe,
    externalSlotProps: V,
    externalForwardedProps: w,
    getSlotProps: z,
    additionalProps: {
      ref: o,
      as: x
    },
    ownerState: Q,
    className: fe(p, V == null ? void 0 : V.className, te == null ? void 0 : te.root, !Q.open && Q.exited && (te == null ? void 0 : te.hidden))
  }), ue = ti({
    elementType: B,
    externalSlotProps: K,
    additionalProps: f,
    getSlotProps: (le) => _(u({}, le, {
      onClick: (me) => {
        A && A(me), le != null && le.onClick && le.onClick(me);
      }
    })),
    className: fe(K == null ? void 0 : K.className, f == null ? void 0 : f.className, te == null ? void 0 : te.backdrop),
    ownerState: Q
  });
  return !O && !D && (!re || ee) ? null : /* @__PURE__ */ m.jsx(hy, {
    ref: N,
    container: y,
    disablePortal: g,
    children: /* @__PURE__ */ m.jsxs(oe, u({}, se, {
      children: [!j && c ? /* @__PURE__ */ m.jsx(B, u({}, ue)) : null, /* @__PURE__ */ m.jsx(fy, {
        disableEnforceFocus: R,
        disableAutoFocus: $,
        disableRestoreFocus: k,
        isEnabled: Y,
        open: D,
        children: /* @__PURE__ */ h.cloneElement(b, he)
      })]
    }))
  });
});
function Cx(e) {
  return ct("MuiDivider", e);
}
ht("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "light", "vertical", "withChildren", "withChildrenVertical", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]);
const Sx = ["absolute", "children", "className", "component", "flexItem", "light", "orientation", "role", "textAlign", "variant"], $x = (e) => {
  const {
    absolute: t,
    children: o,
    classes: r,
    flexItem: n,
    light: i,
    orientation: a,
    textAlign: s,
    variant: l
  } = e;
  return gt({
    root: ["root", t && "absolute", l, i && "light", a === "vertical" && "vertical", n && "flexItem", o && "withChildren", o && a === "vertical" && "withChildrenVertical", s === "right" && a !== "vertical" && "textAlignRight", s === "left" && a !== "vertical" && "textAlignLeft"],
    wrapper: ["wrapper", a === "vertical" && "wrapperVertical"]
  }, Cx, r);
}, kx = He("div", {
  name: "MuiDivider",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.absolute && t.absolute, t[o.variant], o.light && t.light, o.orientation === "vertical" && t.vertical, o.flexItem && t.flexItem, o.children && t.withChildren, o.children && o.orientation === "vertical" && t.withChildrenVertical, o.textAlign === "right" && o.orientation !== "vertical" && t.textAlignRight, o.textAlign === "left" && o.orientation !== "vertical" && t.textAlignLeft];
  }
})(({
  theme: e,
  ownerState: t
}) => u({
  margin: 0,
  // Reset browser default style.
  flexShrink: 0,
  borderWidth: 0,
  borderStyle: "solid",
  borderColor: (e.vars || e).palette.divider,
  borderBottomWidth: "thin"
}, t.absolute && {
  position: "absolute",
  bottom: 0,
  left: 0,
  width: "100%"
}, t.light && {
  borderColor: e.vars ? `rgba(${e.vars.palette.dividerChannel} / 0.08)` : mo(e.palette.divider, 0.08)
}, t.variant === "inset" && {
  marginLeft: 72
}, t.variant === "middle" && t.orientation === "horizontal" && {
  marginLeft: e.spacing(2),
  marginRight: e.spacing(2)
}, t.variant === "middle" && t.orientation === "vertical" && {
  marginTop: e.spacing(1),
  marginBottom: e.spacing(1)
}, t.orientation === "vertical" && {
  height: "100%",
  borderBottomWidth: 0,
  borderRightWidth: "thin"
}, t.flexItem && {
  alignSelf: "stretch",
  height: "auto"
}), ({
  ownerState: e
}) => u({}, e.children && {
  display: "flex",
  whiteSpace: "nowrap",
  textAlign: "center",
  border: 0,
  "&::before, &::after": {
    content: '""',
    alignSelf: "center"
  }
}), ({
  theme: e,
  ownerState: t
}) => u({}, t.children && t.orientation !== "vertical" && {
  "&::before, &::after": {
    width: "100%",
    borderTop: `thin solid ${(e.vars || e).palette.divider}`
  }
}), ({
  theme: e,
  ownerState: t
}) => u({}, t.children && t.orientation === "vertical" && {
  flexDirection: "column",
  "&::before, &::after": {
    height: "100%",
    borderLeft: `thin solid ${(e.vars || e).palette.divider}`
  }
}), ({
  ownerState: e
}) => u({}, e.textAlign === "right" && e.orientation !== "vertical" && {
  "&::before": {
    width: "90%"
  },
  "&::after": {
    width: "10%"
  }
}, e.textAlign === "left" && e.orientation !== "vertical" && {
  "&::before": {
    width: "10%"
  },
  "&::after": {
    width: "90%"
  }
})), Ix = He("span", {
  name: "MuiDivider",
  slot: "Wrapper",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.wrapper, o.orientation === "vertical" && t.wrapperVertical];
  }
})(({
  theme: e,
  ownerState: t
}) => u({
  display: "inline-block",
  paddingLeft: `calc(${e.spacing(1)} * 1.2)`,
  paddingRight: `calc(${e.spacing(1)} * 1.2)`
}, t.orientation === "vertical" && {
  paddingTop: `calc(${e.spacing(1)} * 1.2)`,
  paddingBottom: `calc(${e.spacing(1)} * 1.2)`
})), rs = /* @__PURE__ */ h.forwardRef(function(t, o) {
  const r = at({
    props: t,
    name: "MuiDivider"
  }), {
    absolute: n = !1,
    children: i,
    className: a,
    component: s = i ? "div" : "hr",
    flexItem: l = !1,
    light: d = !1,
    orientation: c = "horizontal",
    role: f = s !== "hr" ? "separator" : void 0,
    textAlign: p = "center",
    variant: v = "fullWidth"
  } = r, b = U(r, Sx), y = u({}, r, {
    absolute: n,
    component: s,
    flexItem: l,
    light: d,
    orientation: c,
    role: f,
    textAlign: p,
    variant: v
  }), x = $x(y);
  return /* @__PURE__ */ m.jsx(kx, u({
    as: s,
    className: fe(x.root, a),
    role: f,
    ref: o,
    ownerState: y
  }, b, {
    children: i ? /* @__PURE__ */ m.jsx(Ix, {
      className: x.wrapper,
      ownerState: y,
      children: i
    }) : null
  }));
});
rs.muiSkipListHighlight = !0;
const Rc = /* @__PURE__ */ h.createContext();
function Rx(e) {
  return ct("MuiGrid", e);
}
const Px = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], wx = ["column-reverse", "column", "row-reverse", "row"], Tx = ["nowrap", "wrap-reverse", "wrap"], Or = ["auto", !0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], tn = ht("MuiGrid", [
  "root",
  "container",
  "item",
  "zeroMinWidth",
  // spacings
  ...Px.map((e) => `spacing-xs-${e}`),
  // direction values
  ...wx.map((e) => `direction-xs-${e}`),
  // wrap values
  ...Tx.map((e) => `wrap-xs-${e}`),
  // grid sizes for all breakpoints
  ...Or.map((e) => `grid-xs-${e}`),
  ...Or.map((e) => `grid-sm-${e}`),
  ...Or.map((e) => `grid-md-${e}`),
  ...Or.map((e) => `grid-lg-${e}`),
  ...Or.map((e) => `grid-xl-${e}`)
]), Dx = ["className", "columns", "columnSpacing", "component", "container", "direction", "item", "rowSpacing", "spacing", "wrap", "zeroMinWidth"];
function ar(e) {
  const t = parseFloat(e);
  return `${t}${String(e).replace(String(t), "") || "px"}`;
}
function Ex({
  theme: e,
  ownerState: t
}) {
  let o;
  return e.breakpoints.keys.reduce((r, n) => {
    let i = {};
    if (t[n] && (o = t[n]), !o)
      return r;
    if (o === !0)
      i = {
        flexBasis: 0,
        flexGrow: 1,
        maxWidth: "100%"
      };
    else if (o === "auto")
      i = {
        flexBasis: "auto",
        flexGrow: 0,
        flexShrink: 0,
        maxWidth: "none",
        width: "auto"
      };
    else {
      const a = jo({
        values: t.columns,
        breakpoints: e.breakpoints.values
      }), s = typeof a == "object" ? a[n] : a;
      if (s == null)
        return r;
      const l = `${Math.round(o / s * 1e8) / 1e6}%`;
      let d = {};
      if (t.container && t.item && t.columnSpacing !== 0) {
        const c = e.spacing(t.columnSpacing);
        if (c !== "0px") {
          const f = `calc(${l} + ${ar(c)})`;
          d = {
            flexBasis: f,
            maxWidth: f
          };
        }
      }
      i = u({
        flexBasis: l,
        flexGrow: 0,
        maxWidth: l
      }, d);
    }
    return e.breakpoints.values[n] === 0 ? Object.assign(r, i) : r[e.breakpoints.up(n)] = i, r;
  }, {});
}
function zx({
  theme: e,
  ownerState: t
}) {
  const o = jo({
    values: t.direction,
    breakpoints: e.breakpoints.values
  });
  return $t({
    theme: e
  }, o, (r) => {
    const n = {
      flexDirection: r
    };
    return r.indexOf("column") === 0 && (n[`& > .${tn.item}`] = {
      maxWidth: "none"
    }), n;
  });
}
function Vu({
  breakpoints: e,
  values: t
}) {
  let o = "";
  Object.keys(t).forEach((n) => {
    o === "" && t[n] !== 0 && (o = n);
  });
  const r = Object.keys(e).sort((n, i) => e[n] - e[i]);
  return r.slice(0, r.indexOf(o));
}
function Ox({
  theme: e,
  ownerState: t
}) {
  const {
    container: o,
    rowSpacing: r
  } = t;
  let n = {};
  if (o && r !== 0) {
    const i = jo({
      values: r,
      breakpoints: e.breakpoints.values
    });
    let a;
    typeof i == "object" && (a = Vu({
      breakpoints: e.breakpoints.values,
      values: i
    })), n = $t({
      theme: e
    }, i, (s, l) => {
      var d;
      const c = e.spacing(s);
      return c !== "0px" ? {
        marginTop: `-${ar(c)}`,
        [`& > .${tn.item}`]: {
          paddingTop: ar(c)
        }
      } : (d = a) != null && d.includes(l) ? {} : {
        marginTop: 0,
        [`& > .${tn.item}`]: {
          paddingTop: 0
        }
      };
    });
  }
  return n;
}
function Mx({
  theme: e,
  ownerState: t
}) {
  const {
    container: o,
    columnSpacing: r
  } = t;
  let n = {};
  if (o && r !== 0) {
    const i = jo({
      values: r,
      breakpoints: e.breakpoints.values
    });
    let a;
    typeof i == "object" && (a = Vu({
      breakpoints: e.breakpoints.values,
      values: i
    })), n = $t({
      theme: e
    }, i, (s, l) => {
      var d;
      const c = e.spacing(s);
      return c !== "0px" ? {
        width: `calc(100% + ${ar(c)})`,
        marginLeft: `-${ar(c)}`,
        [`& > .${tn.item}`]: {
          paddingLeft: ar(c)
        }
      } : (d = a) != null && d.includes(l) ? {} : {
        width: "100%",
        marginLeft: 0,
        [`& > .${tn.item}`]: {
          paddingLeft: 0
        }
      };
    });
  }
  return n;
}
function Ax(e, t, o = {}) {
  if (!e || e <= 0)
    return [];
  if (typeof e == "string" && !Number.isNaN(Number(e)) || typeof e == "number")
    return [o[`spacing-xs-${String(e)}`]];
  const r = [];
  return t.forEach((n) => {
    const i = e[n];
    Number(i) > 0 && r.push(o[`spacing-${n}-${String(i)}`]);
  }), r;
}
const jx = He("div", {
  name: "MuiGrid",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e, {
      container: r,
      direction: n,
      item: i,
      spacing: a,
      wrap: s,
      zeroMinWidth: l,
      breakpoints: d
    } = o;
    let c = [];
    r && (c = Ax(a, d, t));
    const f = [];
    return d.forEach((p) => {
      const v = o[p];
      v && f.push(t[`grid-${p}-${String(v)}`]);
    }), [t.root, r && t.container, i && t.item, l && t.zeroMinWidth, ...c, n !== "row" && t[`direction-xs-${String(n)}`], s !== "wrap" && t[`wrap-xs-${String(s)}`], ...f];
  }
})(({
  ownerState: e
}) => u({
  boxSizing: "border-box"
}, e.container && {
  display: "flex",
  flexWrap: "wrap",
  width: "100%"
}, e.item && {
  margin: 0
  // For instance, it's useful when used with a `figure` element.
}, e.zeroMinWidth && {
  minWidth: 0
}, e.wrap !== "wrap" && {
  flexWrap: e.wrap
}), zx, Ox, Mx, Ex);
function Bx(e, t) {
  if (!e || e <= 0)
    return [];
  if (typeof e == "string" && !Number.isNaN(Number(e)) || typeof e == "number")
    return [`spacing-xs-${String(e)}`];
  const o = [];
  return t.forEach((r) => {
    const n = e[r];
    if (Number(n) > 0) {
      const i = `spacing-${r}-${String(n)}`;
      o.push(i);
    }
  }), o;
}
const _x = (e) => {
  const {
    classes: t,
    container: o,
    direction: r,
    item: n,
    spacing: i,
    wrap: a,
    zeroMinWidth: s,
    breakpoints: l
  } = e;
  let d = [];
  o && (d = Bx(i, l));
  const c = [];
  l.forEach((p) => {
    const v = e[p];
    v && c.push(`grid-${p}-${String(v)}`);
  });
  const f = {
    root: ["root", o && "container", n && "item", s && "zeroMinWidth", ...d, r !== "row" && `direction-xs-${String(r)}`, a !== "wrap" && `wrap-xs-${String(a)}`, ...c]
  };
  return gt(f, Rx, t);
}, or = /* @__PURE__ */ h.forwardRef(function(t, o) {
  const r = at({
    props: t,
    name: "MuiGrid"
  }), {
    breakpoints: n
  } = Bs(), i = dn(r), {
    className: a,
    columns: s,
    columnSpacing: l,
    component: d = "div",
    container: c = !1,
    direction: f = "row",
    item: p = !1,
    rowSpacing: v,
    spacing: b = 0,
    wrap: y = "wrap",
    zeroMinWidth: x = !1
  } = i, C = U(i, Dx), S = v || b, $ = l || b, R = h.useContext(Rc), P = c ? s || 12 : R, g = {}, k = u({}, C);
  n.keys.forEach((O) => {
    C[O] != null && (g[O] = C[O], delete k[O]);
  });
  const T = u({}, i, {
    columns: P,
    container: c,
    direction: f,
    item: p,
    rowSpacing: S,
    columnSpacing: $,
    wrap: y,
    zeroMinWidth: x,
    spacing: b
  }, g, {
    breakpoints: n.keys
  }), j = _x(T);
  return /* @__PURE__ */ m.jsx(Rc.Provider, {
    value: P,
    children: /* @__PURE__ */ m.jsx(jx, u({
      ownerState: T,
      className: fe(j.root, a),
      as: d,
      ref: o
    }, k))
  });
}), Lx = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
function ns(e) {
  return `scale(${e}, ${e ** 2})`;
}
const Fx = {
  entering: {
    opacity: 1,
    transform: ns(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, Da = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), Wu = /* @__PURE__ */ h.forwardRef(function(t, o) {
  const {
    addEndListener: r,
    appear: n = !0,
    children: i,
    easing: a,
    in: s,
    onEnter: l,
    onEntered: d,
    onEntering: c,
    onExit: f,
    onExited: p,
    onExiting: v,
    style: b,
    timeout: y = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: x = co
  } = t, C = U(t, Lx), S = au(), $ = h.useRef(), R = Bs(), P = h.useRef(null), g = Yt(P, i.ref, o), k = (w) => (I) => {
    if (w) {
      const z = P.current;
      I === void 0 ? w(z) : w(z, I);
    }
  }, T = k(c), j = k((w, I) => {
    ku(w);
    const {
      duration: z,
      delay: _,
      easing: L
    } = ei({
      style: b,
      timeout: y,
      easing: a
    }, {
      mode: "enter"
    });
    let N;
    y === "auto" ? (N = R.transitions.getAutoHeightDuration(w.clientHeight), $.current = N) : N = z, w.style.transition = [R.transitions.create("opacity", {
      duration: N,
      delay: _
    }), R.transitions.create("transform", {
      duration: Da ? N : N * 0.666,
      delay: _,
      easing: L
    })].join(","), l && l(w, I);
  }), O = k(d), A = k(v), D = k((w) => {
    const {
      duration: I,
      delay: z,
      easing: _
    } = ei({
      style: b,
      timeout: y,
      easing: a
    }, {
      mode: "exit"
    });
    let L;
    y === "auto" ? (L = R.transitions.getAutoHeightDuration(w.clientHeight), $.current = L) : L = I, w.style.transition = [R.transitions.create("opacity", {
      duration: L,
      delay: z
    }), R.transitions.create("transform", {
      duration: Da ? L : L * 0.666,
      delay: Da ? z : z || L * 0.333,
      easing: _
    })].join(","), w.style.opacity = 0, w.style.transform = ns(0.75), f && f(w);
  }), M = k(p), E = (w) => {
    y === "auto" && S.start($.current || 0, w), r && r(P.current, w);
  };
  return /* @__PURE__ */ m.jsx(x, u({
    appear: n,
    in: s,
    nodeRef: P,
    onEnter: j,
    onEntered: O,
    onEntering: T,
    onExit: D,
    onExited: M,
    onExiting: A,
    addEndListener: E,
    timeout: y === "auto" ? null : y
  }, C, {
    children: (w, I) => /* @__PURE__ */ h.cloneElement(i, u({
      style: u({
        opacity: 0,
        transform: ns(0.75),
        visibility: w === "exited" && !s ? "hidden" : void 0
      }, Fx[w], b, i.props.style),
      ref: g
    }, I))
  }));
});
Wu.muiSupportAuto = !0;
function Nx(e) {
  return ct("MuiPopover", e);
}
ht("MuiPopover", ["root", "paper"]);
const Hx = ["onEntering"], Vx = ["action", "anchorEl", "anchorOrigin", "anchorPosition", "anchorReference", "children", "className", "container", "elevation", "marginThreshold", "open", "PaperProps", "slots", "slotProps", "transformOrigin", "TransitionComponent", "transitionDuration", "TransitionProps", "disableScrollLock"], Wx = ["slotProps"];
function Pc(e, t) {
  let o = 0;
  return typeof t == "number" ? o = t : t === "center" ? o = e.height / 2 : t === "bottom" && (o = e.height), o;
}
function wc(e, t) {
  let o = 0;
  return typeof t == "number" ? o = t : t === "center" ? o = e.width / 2 : t === "right" && (o = e.width), o;
}
function Tc(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function Ea(e) {
  return typeof e == "function" ? e() : e;
}
const Ux = (e) => {
  const {
    classes: t
  } = e;
  return gt({
    root: ["root"],
    paper: ["paper"]
  }, Nx, t);
}, Gx = He(xx, {
  name: "MuiPopover",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Kx = He(Iu, {
  name: "MuiPopover",
  slot: "Paper",
  overridesResolver: (e, t) => t.paper
})({
  position: "absolute",
  overflowY: "auto",
  overflowX: "hidden",
  // So we see the popover when it's empty.
  // It's most likely on issue on userland.
  minWidth: 16,
  minHeight: 16,
  maxWidth: "calc(100% - 32px)",
  maxHeight: "calc(100% - 32px)",
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), Ki = /* @__PURE__ */ h.forwardRef(function(t, o) {
  var r, n, i;
  const a = at({
    props: t,
    name: "MuiPopover"
  }), {
    action: s,
    anchorEl: l,
    anchorOrigin: d = {
      vertical: "top",
      horizontal: "left"
    },
    anchorPosition: c,
    anchorReference: f = "anchorEl",
    children: p,
    className: v,
    container: b,
    elevation: y = 8,
    marginThreshold: x = 16,
    open: C,
    PaperProps: S = {},
    slots: $,
    slotProps: R,
    transformOrigin: P = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent: g = Wu,
    transitionDuration: k = "auto",
    TransitionProps: {
      onEntering: T
    } = {},
    disableScrollLock: j = !1
  } = a, O = U(a.TransitionProps, Hx), A = U(a, Vx), D = (r = R == null ? void 0 : R.paper) != null ? r : S, M = h.useRef(), E = Yt(M, D.ref), w = u({}, a, {
    anchorOrigin: d,
    anchorReference: f,
    elevation: y,
    marginThreshold: x,
    externalPaperSlotProps: D,
    transformOrigin: P,
    TransitionComponent: g,
    transitionDuration: k,
    TransitionProps: O
  }), I = Ux(w), z = h.useCallback(() => {
    if (f === "anchorPosition")
      return c;
    const le = Ea(l), ie = (le && le.nodeType === 1 ? le : qt(M.current).body).getBoundingClientRect();
    return {
      top: ie.top + Pc(ie, d.vertical),
      left: ie.left + wc(ie, d.horizontal)
    };
  }, [l, d.horizontal, d.vertical, c, f]), _ = h.useCallback((le) => ({
    vertical: Pc(le, P.vertical),
    horizontal: wc(le, P.horizontal)
  }), [P.horizontal, P.vertical]), L = h.useCallback((le) => {
    const me = {
      width: le.offsetWidth,
      height: le.offsetHeight
    }, ie = _(me);
    if (f === "none")
      return {
        top: null,
        left: null,
        transformOrigin: Tc(ie)
      };
    const J = z();
    let Ce = J.top - ie.vertical, ce = J.left - ie.horizontal;
    const Ee = Ce + me.height, pe = ce + me.width, Se = mr(Ea(l)), $e = Se.innerHeight - x, ge = Se.innerWidth - x;
    if (x !== null && Ce < x) {
      const Ie = Ce - x;
      Ce -= Ie, ie.vertical += Ie;
    } else if (x !== null && Ee > $e) {
      const Ie = Ee - $e;
      Ce -= Ie, ie.vertical += Ie;
    }
    if (x !== null && ce < x) {
      const Ie = ce - x;
      ce -= Ie, ie.horizontal += Ie;
    } else if (pe > ge) {
      const Ie = pe - ge;
      ce -= Ie, ie.horizontal += Ie;
    }
    return {
      top: `${Math.round(Ce)}px`,
      left: `${Math.round(ce)}px`,
      transformOrigin: Tc(ie)
    };
  }, [l, f, z, _, x]), [N, Y] = h.useState(C), ee = h.useCallback(() => {
    const le = M.current;
    if (!le)
      return;
    const me = L(le);
    me.top !== null && (le.style.top = me.top), me.left !== null && (le.style.left = me.left), le.style.transformOrigin = me.transformOrigin, Y(!0);
  }, [L]);
  h.useEffect(() => (j && window.addEventListener("scroll", ee), () => window.removeEventListener("scroll", ee)), [l, j, ee]);
  const re = (le, me) => {
    T && T(le, me), ee();
  }, Q = () => {
    Y(!1);
  };
  h.useEffect(() => {
    C && ee();
  }), h.useImperativeHandle(s, () => C ? {
    updatePosition: () => {
      ee();
    }
  } : null, [C, ee]), h.useEffect(() => {
    if (!C)
      return;
    const le = ou(() => {
      ee();
    }), me = mr(l);
    return me.addEventListener("resize", le), () => {
      le.clear(), me.removeEventListener("resize", le);
    };
  }, [l, C, ee]);
  let te = k;
  k === "auto" && !g.muiSupportAuto && (te = void 0);
  const he = b || (l ? qt(Ea(l)).body : void 0), oe = (n = $ == null ? void 0 : $.root) != null ? n : Gx, B = (i = $ == null ? void 0 : $.paper) != null ? i : Kx, V = ti({
    elementType: B,
    externalSlotProps: u({}, D, {
      style: N ? D.style : u({}, D.style, {
        opacity: 0
      })
    }),
    additionalProps: {
      elevation: y,
      ref: E
    },
    ownerState: w,
    className: fe(I.paper, D == null ? void 0 : D.className)
  }), K = ti({
    elementType: oe,
    externalSlotProps: (R == null ? void 0 : R.root) || {},
    externalForwardedProps: A,
    additionalProps: {
      ref: o,
      slotProps: {
        backdrop: {
          invisible: !0
        }
      },
      container: he,
      open: C
    },
    ownerState: w,
    className: fe(I.root, v)
  }), {
    slotProps: se
  } = K, ue = U(K, Wx);
  return /* @__PURE__ */ m.jsx(oe, u({}, ue, !Ru(oe) && {
    slotProps: se,
    disableScrollLock: j
  }, {
    children: /* @__PURE__ */ m.jsx(g, u({
      appear: !0,
      in: C,
      onEntering: re,
      onExited: Q,
      timeout: te
    }, O, {
      children: /* @__PURE__ */ m.jsx(B, u({}, V, {
        children: p
      }))
    }))
  }));
}), Jx = pn(/* @__PURE__ */ m.jsx("path", {
  d: "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
}), "Star"), qx = pn(/* @__PURE__ */ m.jsx("path", {
  d: "M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
}), "StarBorder");
function Yx(e) {
  return ct("MuiRating", e);
}
const Mr = ht("MuiRating", ["root", "sizeSmall", "sizeMedium", "sizeLarge", "readOnly", "disabled", "focusVisible", "visuallyHidden", "pristine", "label", "labelEmptyValueActive", "icon", "iconEmpty", "iconFilled", "iconHover", "iconFocus", "iconActive", "decimal"]), Xx = ["value"], Zx = ["className", "defaultValue", "disabled", "emptyIcon", "emptyLabelText", "getLabelText", "highlightSelectedOnly", "icon", "IconContainerComponent", "max", "name", "onChange", "onChangeActive", "onMouseLeave", "onMouseMove", "precision", "readOnly", "size", "value"];
function Qx(e) {
  const t = e.toString().split(".")[1];
  return t ? t.length : 0;
}
function za(e, t) {
  if (e == null)
    return e;
  const o = Math.round(e / t) * t;
  return Number(o.toFixed(Qx(t)));
}
const eC = (e) => {
  const {
    classes: t,
    size: o,
    readOnly: r,
    disabled: n,
    emptyValueFocused: i,
    focusVisible: a
  } = e, s = {
    root: ["root", `size${Oe(o)}`, n && "disabled", a && "focusVisible", r && "readOnly"],
    label: ["label", "pristine"],
    labelEmptyValue: [i && "labelEmptyValueActive"],
    icon: ["icon"],
    iconEmpty: ["iconEmpty"],
    iconFilled: ["iconFilled"],
    iconHover: ["iconHover"],
    iconFocus: ["iconFocus"],
    iconActive: ["iconActive"],
    decimal: ["decimal"],
    visuallyHidden: ["visuallyHidden"]
  };
  return gt(s, Yx, t);
}, tC = He("span", {
  name: "MuiRating",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [{
      [`& .${Mr.visuallyHidden}`]: t.visuallyHidden
    }, t.root, t[`size${Oe(o.size)}`], o.readOnly && t.readOnly];
  }
})(({
  theme: e,
  ownerState: t
}) => u({
  display: "inline-flex",
  // Required to position the pristine input absolutely
  position: "relative",
  fontSize: e.typography.pxToRem(24),
  color: "#faaf00",
  cursor: "pointer",
  textAlign: "left",
  width: "min-content",
  WebkitTapHighlightColor: "transparent",
  [`&.${Mr.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity,
    pointerEvents: "none"
  },
  [`&.${Mr.focusVisible} .${Mr.iconActive}`]: {
    outline: "1px solid #999"
  },
  [`& .${Mr.visuallyHidden}`]: yg
}, t.size === "small" && {
  fontSize: e.typography.pxToRem(18)
}, t.size === "large" && {
  fontSize: e.typography.pxToRem(30)
}, t.readOnly && {
  pointerEvents: "none"
})), Uu = He("label", {
  name: "MuiRating",
  slot: "Label",
  overridesResolver: ({
    ownerState: e
  }, t) => [t.label, e.emptyValueFocused && t.labelEmptyValueActive]
})(({
  ownerState: e
}) => u({
  cursor: "inherit"
}, e.emptyValueFocused && {
  top: 0,
  bottom: 0,
  position: "absolute",
  outline: "1px solid #999",
  width: "100%"
})), oC = He("span", {
  name: "MuiRating",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.icon, o.iconEmpty && t.iconEmpty, o.iconFilled && t.iconFilled, o.iconHover && t.iconHover, o.iconFocus && t.iconFocus, o.iconActive && t.iconActive];
  }
})(({
  theme: e,
  ownerState: t
}) => u({
  // Fit wrapper to actual icon size.
  display: "flex",
  transition: e.transitions.create("transform", {
    duration: e.transitions.duration.shortest
  }),
  // Fix mouseLeave issue.
  // https://github.com/facebook/react/issues/4492
  pointerEvents: "none"
}, t.iconActive && {
  transform: "scale(1.2)"
}, t.iconEmpty && {
  color: (e.vars || e).palette.action.disabled
})), rC = He("span", {
  name: "MuiRating",
  slot: "Decimal",
  shouldForwardProp: (e) => xu(e) && e !== "iconActive",
  overridesResolver: (e, t) => {
    const {
      iconActive: o
    } = e;
    return [t.decimal, o && t.iconActive];
  }
})(({
  iconActive: e
}) => u({
  position: "relative"
}, e && {
  transform: "scale(1.2)"
}));
function nC(e) {
  const t = U(e, Xx);
  return /* @__PURE__ */ m.jsx("span", u({}, t));
}
function Dc(e) {
  const {
    classes: t,
    disabled: o,
    emptyIcon: r,
    focus: n,
    getLabelText: i,
    highlightSelectedOnly: a,
    hover: s,
    icon: l,
    IconContainerComponent: d,
    isActive: c,
    itemValue: f,
    labelProps: p,
    name: v,
    onBlur: b,
    onChange: y,
    onClick: x,
    onFocus: C,
    readOnly: S,
    ownerState: $,
    ratingValue: R,
    ratingValueRounded: P
  } = e, g = a ? f === R : f <= R, k = f <= s, T = f <= n, j = f === P, O = Ts(), A = /* @__PURE__ */ m.jsx(oC, {
    as: d,
    value: f,
    className: fe(t.icon, g ? t.iconFilled : t.iconEmpty, k && t.iconHover, T && t.iconFocus, c && t.iconActive),
    ownerState: u({}, $, {
      iconEmpty: !g,
      iconFilled: g,
      iconHover: k,
      iconFocus: T,
      iconActive: c
    }),
    children: r && !g ? r : l
  });
  return S ? /* @__PURE__ */ m.jsx("span", u({}, p, {
    children: A
  })) : /* @__PURE__ */ m.jsxs(h.Fragment, {
    children: [/* @__PURE__ */ m.jsxs(Uu, u({
      ownerState: u({}, $, {
        emptyValueFocused: void 0
      }),
      htmlFor: O
    }, p, {
      children: [A, /* @__PURE__ */ m.jsx("span", {
        className: t.visuallyHidden,
        children: i(f)
      })]
    })), /* @__PURE__ */ m.jsx("input", {
      className: t.visuallyHidden,
      onFocus: C,
      onBlur: b,
      onChange: y,
      onClick: x,
      disabled: o,
      value: f,
      id: O,
      type: "radio",
      name: v,
      checked: j
    })]
  });
}
const iC = /* @__PURE__ */ m.jsx(Jx, {
  fontSize: "inherit"
}), aC = /* @__PURE__ */ m.jsx(qx, {
  fontSize: "inherit"
});
function sC(e) {
  return `${e} Star${e !== 1 ? "s" : ""}`;
}
const lC = /* @__PURE__ */ h.forwardRef(function(t, o) {
  const r = at({
    name: "MuiRating",
    props: t
  }), {
    className: n,
    defaultValue: i = null,
    disabled: a = !1,
    emptyIcon: s = aC,
    emptyLabelText: l = "Empty",
    getLabelText: d = sC,
    highlightSelectedOnly: c = !1,
    icon: f = iC,
    IconContainerComponent: p = nC,
    max: v = 5,
    name: b,
    onChange: y,
    onChangeActive: x,
    onMouseLeave: C,
    onMouseMove: S,
    precision: $ = 1,
    readOnly: R = !1,
    size: P = "medium",
    value: g
  } = r, k = U(r, Zx), T = Ts(b), [j, O] = ru({
    controlled: g,
    default: i,
    name: "Rating"
  }), A = za(j, $), D = Rg(), [{
    hover: M,
    focus: E
  }, w] = h.useState({
    hover: -1,
    focus: -1
  });
  let I = A;
  M !== -1 && (I = M), E !== -1 && (I = E);
  const {
    isFocusVisibleRef: z,
    onBlur: _,
    onFocus: L,
    ref: N
  } = Ds(), [Y, ee] = h.useState(!1), re = h.useRef(), Q = Yt(N, re, o), te = (ie) => {
    S && S(ie);
    const J = re.current, {
      right: Ce,
      left: ce,
      width: Ee
    } = J.getBoundingClientRect();
    let pe;
    D ? pe = (Ce - ie.clientX) / Ee : pe = (ie.clientX - ce) / Ee;
    let Se = za(v * pe + $ / 2, $);
    Se = tu(Se, $, v), w(($e) => $e.hover === Se && $e.focus === Se ? $e : {
      hover: Se,
      focus: Se
    }), ee(!1), x && M !== Se && x(ie, Se);
  }, he = (ie) => {
    C && C(ie);
    const J = -1;
    w({
      hover: J,
      focus: J
    }), x && M !== J && x(ie, J);
  }, oe = (ie) => {
    let J = ie.target.value === "" ? null : parseFloat(ie.target.value);
    M !== -1 && (J = M), O(J), y && y(ie, J);
  }, B = (ie) => {
    ie.clientX === 0 && ie.clientY === 0 || (w({
      hover: -1,
      focus: -1
    }), O(null), y && parseFloat(ie.target.value) === A && y(ie, null));
  }, V = (ie) => {
    L(ie), z.current === !0 && ee(!0);
    const J = parseFloat(ie.target.value);
    w((Ce) => ({
      hover: Ce.hover,
      focus: J
    }));
  }, K = (ie) => {
    if (M !== -1)
      return;
    _(ie), z.current === !1 && ee(!1);
    const J = -1;
    w((Ce) => ({
      hover: Ce.hover,
      focus: J
    }));
  }, [se, ue] = h.useState(!1), le = u({}, r, {
    defaultValue: i,
    disabled: a,
    emptyIcon: s,
    emptyLabelText: l,
    emptyValueFocused: se,
    focusVisible: Y,
    getLabelText: d,
    icon: f,
    IconContainerComponent: p,
    max: v,
    precision: $,
    readOnly: R,
    size: P
  }), me = eC(le);
  return /* @__PURE__ */ m.jsxs(tC, u({
    ref: Q,
    onMouseMove: te,
    onMouseLeave: he,
    className: fe(me.root, n, R && "MuiRating-readOnly"),
    ownerState: le,
    role: R ? "img" : null,
    "aria-label": R ? d(I) : null
  }, k, {
    children: [Array.from(new Array(v)).map((ie, J) => {
      const Ce = J + 1, ce = {
        classes: me,
        disabled: a,
        emptyIcon: s,
        focus: E,
        getLabelText: d,
        highlightSelectedOnly: c,
        hover: M,
        icon: f,
        IconContainerComponent: p,
        name: T,
        onBlur: K,
        onChange: oe,
        onClick: B,
        onFocus: V,
        ratingValue: I,
        ratingValueRounded: A,
        readOnly: R,
        ownerState: le
      }, Ee = Ce === Math.ceil(I) && (M !== -1 || E !== -1);
      if ($ < 1) {
        const pe = Array.from(new Array(1 / $));
        return /* @__PURE__ */ m.jsx(rC, {
          className: fe(me.decimal, Ee && me.iconActive),
          ownerState: le,
          iconActive: Ee,
          children: pe.map((Se, $e) => {
            const ge = za(Ce - 1 + ($e + 1) * $, $);
            return /* @__PURE__ */ m.jsx(Dc, u({}, ce, {
              // The icon is already displayed as active
              isActive: !1,
              itemValue: ge,
              labelProps: {
                style: pe.length - 1 === $e ? {} : {
                  width: ge === I ? `${($e + 1) * $ * 100}%` : "0%",
                  overflow: "hidden",
                  position: "absolute"
                }
              }
            }), ge);
          })
        }, Ce);
      }
      return /* @__PURE__ */ m.jsx(Dc, u({}, ce, {
        isActive: Ee,
        itemValue: Ce
      }), Ce);
    }), !R && !a && /* @__PURE__ */ m.jsxs(Uu, {
      className: fe(me.label, me.labelEmptyValue),
      ownerState: le,
      children: [/* @__PURE__ */ m.jsx("input", {
        className: me.visuallyHidden,
        value: "",
        id: `${T}-empty`,
        type: "radio",
        name: T,
        checked: A == null,
        onFocus: () => ue(!0),
        onBlur: () => ue(!1),
        onChange: oe
      }), /* @__PURE__ */ m.jsx("span", {
        className: me.visuallyHidden,
        children: l
      })]
    })]
  }));
}), Ar = {
  grey: {
    50: "#FBFCFE",
    100: "#F0F4F8",
    200: "#DDE7EE",
    300: "#CDD7E1",
    400: "#9FA6AD",
    500: "#636B74",
    600: "#555E68",
    700: "#32383E",
    800: "#171A1C",
    900: "#0B0D0E"
  },
  blue: {
    50: "#EDF5FD",
    100: "#E3EFFB",
    200: "#C7DFF7",
    300: "#97C3F0",
    400: "#4393E4",
    500: "#0B6BCB",
    600: "#185EA5",
    700: "#12467B",
    800: "#0A2744",
    900: "#051423"
  },
  yellow: {
    50: "#FEFAF6",
    100: "#FDF0E1",
    200: "#FCE1C2",
    300: "#F3C896",
    400: "#EA9A3E",
    500: "#9A5B13",
    600: "#72430D",
    700: "#492B08",
    800: "#2E1B05",
    900: "#1D1002"
  },
  red: {
    50: "#FEF6F6",
    100: "#FCE4E4",
    200: "#F7C5C5",
    300: "#F09898",
    400: "#E47474",
    500: "#C41C1C",
    600: "#A51818",
    700: "#7D1212",
    800: "#430A0A",
    900: "#240505"
  },
  green: {
    50: "#F6FEF6",
    100: "#E3FBE3",
    200: "#C7F7C7",
    300: "#A1E8A1",
    400: "#51BC51",
    500: "#1F7A1F",
    600: "#136C13",
    700: "#0A470A",
    800: "#042F04",
    900: "#021D02"
  }
}, Ji = "$$joy";
function on(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let o = 1; o < arguments.length; o += 1)
    t += "&args[]=" + encodeURIComponent(arguments[o]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
function cC(e) {
  return e == null || Object.keys(e).length === 0;
}
function dC(e) {
  const {
    styles: t,
    defaultTheme: o = {}
  } = e, r = typeof t == "function" ? (n) => t(cC(n) ? o : n) : t;
  return /* @__PURE__ */ m.jsx(Ld, {
    styles: r
  });
}
function Gu(e, t) {
  return Kn(e, t);
}
const uC = (e, t) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
};
function yo(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Ku(e) {
  if (!yo(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((o) => {
    t[o] = Ku(e[o]);
  }), t;
}
function Ht(e, t, o = {
  clone: !0
}) {
  const r = o.clone ? u({}, e) : e;
  return yo(e) && yo(t) && Object.keys(t).forEach((n) => {
    n !== "__proto__" && (yo(t[n]) && n in e && yo(e[n]) ? r[n] = Ht(e[n], t[n], o) : o.clone ? r[n] = yo(t[n]) ? Ku(t[n]) : t[n] : r[n] = t[n]);
  }), r;
}
const pC = ["values", "unit", "step"], fC = (e) => {
  const t = Object.keys(e).map((o) => ({
    key: o,
    val: e[o]
  })) || [];
  return t.sort((o, r) => o.val - r.val), t.reduce((o, r) => u({}, o, {
    [r.key]: r.val
  }), {});
};
function Ju(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: t = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: o = "px",
    step: r = 5
  } = e, n = U(e, pC), i = fC(t), a = Object.keys(i);
  function s(p) {
    return `@media (min-width:${typeof t[p] == "number" ? t[p] : p}${o})`;
  }
  function l(p) {
    return `@media (max-width:${(typeof t[p] == "number" ? t[p] : p) - r / 100}${o})`;
  }
  function d(p, v) {
    const b = a.indexOf(v);
    return `@media (min-width:${typeof t[p] == "number" ? t[p] : p}${o}) and (max-width:${(b !== -1 && typeof t[a[b]] == "number" ? t[a[b]] : v) - r / 100}${o})`;
  }
  function c(p) {
    return a.indexOf(p) + 1 < a.length ? d(p, a[a.indexOf(p) + 1]) : s(p);
  }
  function f(p) {
    const v = a.indexOf(p);
    return v === 0 ? s(a[1]) : v === a.length - 1 ? l(a[v]) : d(p, a[a.indexOf(p) + 1]).replace("@media", "@media not all and");
  }
  return u({
    keys: a,
    values: i,
    up: s,
    down: l,
    between: d,
    only: c,
    not: f,
    unit: o
  }, n);
}
function mC(e, t) {
  if (!e.containerQueries)
    return t;
  const o = Object.keys(t).filter((r) => r.startsWith("@container")).sort((r, n) => {
    var a, s;
    const i = /min-width:\s*([0-9.]+)/;
    return +(((a = r.match(i)) == null ? void 0 : a[1]) || 0) - +(((s = n.match(i)) == null ? void 0 : s[1]) || 0);
  });
  return o.length ? o.reduce((r, n) => {
    const i = t[n];
    return delete r[n], r[n] = i, r;
  }, u({}, t)) : t;
}
function hC(e, t) {
  return t.startsWith("@") && (e.some((o) => t.startsWith(`@${o}`)) || !!t.match(/^@\d/));
}
function gC(e, t) {
  const o = t.match(/^@([^/]+)\/?(.+)?$/);
  if (!o)
    return null;
  const [, r, n] = o, i = Number.isNaN(+r) ? r : +r;
  return e.containerQueries(n).up(i);
}
function qu(e) {
  const t = (i, a) => i.replace("@media", a ? `@container ${a}` : "@container");
  function o(i, a) {
    i.up = (...s) => t(e.breakpoints.up(...s), a), i.down = (...s) => t(e.breakpoints.down(...s), a), i.between = (...s) => t(e.breakpoints.between(...s), a), i.only = (...s) => t(e.breakpoints.only(...s), a), i.not = (...s) => {
      const l = t(e.breakpoints.not(...s), a);
      return l.includes("not all and") ? l.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>") : l;
    };
  }
  const r = {}, n = (i) => (o(r, i), r);
  return o(n), u({}, e, {
    containerQueries: n
  });
}
const vC = {
  borderRadius: 4
};
function Wr(e, t) {
  return t ? Ht(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const qi = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, Ec = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${qi[e]}px)`
}, bC = {
  containerQueries: (e) => ({
    up: (t) => {
      let o = typeof t == "number" ? t : qi[t] || t;
      return typeof o == "number" && (o = `${o}px`), e ? `@container ${e} (min-width:${o})` : `@container (min-width:${o})`;
    }
  })
};
function Xt(e, t, o) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const i = r.breakpoints || Ec;
    return t.reduce((a, s, l) => (a[i.up(i.keys[l])] = o(t[l]), a), {});
  }
  if (typeof t == "object") {
    const i = r.breakpoints || Ec;
    return Object.keys(t).reduce((a, s) => {
      if (hC(i.keys, s)) {
        const l = gC(r.containerQueries ? r : bC, s);
        l && (a[l] = o(t[s], s));
      } else if (Object.keys(i.values || qi).indexOf(s) !== -1) {
        const l = i.up(s);
        a[l] = o(t[s], s);
      } else {
        const l = s;
        a[l] = t[l];
      }
      return a;
    }, {});
  }
  return o(t);
}
function Yu(e = {}) {
  var o;
  return ((o = e.keys) == null ? void 0 : o.reduce((r, n) => {
    const i = e.up(n);
    return r[i] = {}, r;
  }, {})) || {};
}
function Xu(e, t) {
  return e.reduce((o, r) => {
    const n = o[r];
    return (!n || Object.keys(n).length === 0) && delete o[r], o;
  }, t);
}
function yC(e, ...t) {
  const o = Yu(e), r = [o, ...t].reduce((n, i) => Ht(n, i), {});
  return Xu(Object.keys(o), r);
}
function xC(e, t) {
  if (typeof e != "object")
    return {};
  const o = {}, r = Object.keys(t);
  return Array.isArray(e) ? r.forEach((n, i) => {
    i < e.length && (o[n] = !0);
  }) : r.forEach((n) => {
    e[n] != null && (o[n] = !0);
  }), o;
}
function Oa({
  values: e,
  breakpoints: t,
  base: o
}) {
  const r = o || xC(e, t), n = Object.keys(r);
  if (n.length === 0)
    return e;
  let i;
  return n.reduce((a, s, l) => (Array.isArray(e) ? (a[s] = e[l] != null ? e[l] : e[i], i = l) : typeof e == "object" ? (a[s] = e[s] != null ? e[s] : e[i], i = s) : a[s] = e, a), {});
}
function ae(e) {
  if (typeof e != "string")
    throw new Error(on(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function yr(e, t, o = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && o) {
    const r = `vars.${t}`.split(".").reduce((n, i) => n && n[i] ? n[i] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, n) => r && r[n] != null ? r[n] : null, e);
}
function ri(e, t, o, r = o) {
  let n;
  return typeof e == "function" ? n = e(o) : Array.isArray(e) ? n = e[o] || r : n = yr(e, o) || r, t && (n = t(n, r, e)), n;
}
function rt(e) {
  const {
    prop: t,
    cssProperty: o = e.prop,
    themeKey: r,
    transform: n
  } = e, i = (a) => {
    if (a[t] == null)
      return null;
    const s = a[t], l = a.theme, d = yr(l, r) || {};
    return Xt(a, s, (f) => {
      let p = ri(d, n, f);
      return f === p && typeof f == "string" && (p = ri(d, n, `${t}${f === "default" ? "" : ae(f)}`, f)), o === !1 ? p : {
        [o]: p
      };
    });
  };
  return i.propTypes = {}, i.filterProps = [t], i;
}
function CC(e) {
  const t = {};
  return (o) => (t[o] === void 0 && (t[o] = e(o)), t[o]);
}
const SC = {
  m: "margin",
  p: "padding"
}, $C = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, zc = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, kC = CC((e) => {
  if (e.length > 2)
    if (zc[e])
      e = zc[e];
    else
      return [e];
  const [t, o] = e.split(""), r = SC[t], n = $C[o] || "";
  return Array.isArray(n) ? n.map((i) => r + i) : [r + n];
}), Ks = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Js = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...Ks, ...Js];
function hn(e, t, o, r) {
  const n = yr(e, t, !0) ?? o;
  return typeof n == "number" || typeof n == "string" ? (i) => typeof i == "string" ? i : typeof n == "string" ? `calc(${i} * ${n})` : n * i : Array.isArray(n) ? (i) => {
    if (typeof i == "string")
      return i;
    const a = Math.abs(i), s = n[a];
    return i >= 0 ? s : typeof s == "number" ? -s : `-${s}`;
  } : typeof n == "function" ? n : () => {
  };
}
function Yi(e) {
  return hn(e, "spacing", 8);
}
function No(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function IC(e, t) {
  return (o) => e.reduce((r, n) => (r[n] = No(t, o), r), {});
}
function RC(e, t, o, r) {
  if (t.indexOf(o) === -1)
    return null;
  const n = kC(o), i = IC(n, r), a = e[o];
  return Xt(e, a, i);
}
function Zu(e, t) {
  const o = Yi(e.theme);
  return Object.keys(e).map((r) => RC(e, t, r, o)).reduce(Wr, {});
}
function qe(e) {
  return Zu(e, Ks);
}
qe.propTypes = {};
qe.filterProps = Ks;
function Ye(e) {
  return Zu(e, Js);
}
Ye.propTypes = {};
Ye.filterProps = Js;
function Qu(e = 8, t = Yi({
  spacing: e
})) {
  if (e.mui)
    return e;
  const o = (...r) => (r.length === 0 ? [1] : r).map((i) => {
    const a = t(i);
    return typeof a == "number" ? `${a}px` : a;
  }).join(" ");
  return o.mui = !0, o;
}
function Xi(...e) {
  const t = e.reduce((r, n) => (n.filterProps.forEach((i) => {
    r[i] = n;
  }), r), {}), o = (r) => Object.keys(r).reduce((n, i) => t[i] ? Wr(n, t[i](r)) : n, {});
  return o.propTypes = {}, o.filterProps = e.reduce((r, n) => r.concat(n.filterProps), []), o;
}
function Ft(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Jt(e, t) {
  return rt({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const PC = Jt("border", Ft), wC = Jt("borderTop", Ft), TC = Jt("borderRight", Ft), DC = Jt("borderBottom", Ft), EC = Jt("borderLeft", Ft), zC = Jt("borderColor"), OC = Jt("borderTopColor"), MC = Jt("borderRightColor"), AC = Jt("borderBottomColor"), jC = Jt("borderLeftColor"), BC = Jt("outline", Ft), _C = Jt("outlineColor"), Zi = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = hn(e.theme, "shape.borderRadius", 4), o = (r) => ({
      borderRadius: No(t, r)
    });
    return Xt(e, e.borderRadius, o);
  }
  return null;
};
Zi.propTypes = {};
Zi.filterProps = ["borderRadius"];
Xi(PC, wC, TC, DC, EC, zC, OC, MC, AC, jC, Zi, BC, _C);
const Qi = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = hn(e.theme, "spacing", 8), o = (r) => ({
      gap: No(t, r)
    });
    return Xt(e, e.gap, o);
  }
  return null;
};
Qi.propTypes = {};
Qi.filterProps = ["gap"];
const ea = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = hn(e.theme, "spacing", 8), o = (r) => ({
      columnGap: No(t, r)
    });
    return Xt(e, e.columnGap, o);
  }
  return null;
};
ea.propTypes = {};
ea.filterProps = ["columnGap"];
const ta = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = hn(e.theme, "spacing", 8), o = (r) => ({
      rowGap: No(t, r)
    });
    return Xt(e, e.rowGap, o);
  }
  return null;
};
ta.propTypes = {};
ta.filterProps = ["rowGap"];
const LC = rt({
  prop: "gridColumn"
}), FC = rt({
  prop: "gridRow"
}), NC = rt({
  prop: "gridAutoFlow"
}), HC = rt({
  prop: "gridAutoColumns"
}), VC = rt({
  prop: "gridAutoRows"
}), WC = rt({
  prop: "gridTemplateColumns"
}), UC = rt({
  prop: "gridTemplateRows"
}), GC = rt({
  prop: "gridTemplateAreas"
}), KC = rt({
  prop: "gridArea"
});
Xi(Qi, ea, ta, LC, FC, NC, HC, VC, WC, UC, GC, KC);
function sr(e, t) {
  return t === "grey" ? t : e;
}
const JC = rt({
  prop: "color",
  themeKey: "palette",
  transform: sr
}), qC = rt({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: sr
}), YC = rt({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: sr
});
Xi(JC, qC, YC);
function Pt(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const XC = rt({
  prop: "width",
  transform: Pt
}), qs = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (o) => {
      var n, i, a, s, l;
      const r = ((a = (i = (n = e.theme) == null ? void 0 : n.breakpoints) == null ? void 0 : i.values) == null ? void 0 : a[o]) || qi[o];
      return r ? ((l = (s = e.theme) == null ? void 0 : s.breakpoints) == null ? void 0 : l.unit) !== "px" ? {
        maxWidth: `${r}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: r
      } : {
        maxWidth: Pt(o)
      };
    };
    return Xt(e, e.maxWidth, t);
  }
  return null;
};
qs.filterProps = ["maxWidth"];
const ZC = rt({
  prop: "minWidth",
  transform: Pt
}), QC = rt({
  prop: "height",
  transform: Pt
}), e1 = rt({
  prop: "maxHeight",
  transform: Pt
}), t1 = rt({
  prop: "minHeight",
  transform: Pt
});
rt({
  prop: "size",
  cssProperty: "width",
  transform: Pt
});
rt({
  prop: "size",
  cssProperty: "height",
  transform: Pt
});
const o1 = rt({
  prop: "boxSizing"
});
Xi(XC, qs, ZC, QC, e1, t1, o1);
const oa = {
  // borders
  border: {
    themeKey: "borders",
    transform: Ft
  },
  borderTop: {
    themeKey: "borders",
    transform: Ft
  },
  borderRight: {
    themeKey: "borders",
    transform: Ft
  },
  borderBottom: {
    themeKey: "borders",
    transform: Ft
  },
  borderLeft: {
    themeKey: "borders",
    transform: Ft
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: Ft
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Zi
  },
  // palette
  color: {
    themeKey: "palette",
    transform: sr
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: sr
  },
  backgroundColor: {
    themeKey: "palette",
    transform: sr
  },
  // spacing
  p: {
    style: Ye
  },
  pt: {
    style: Ye
  },
  pr: {
    style: Ye
  },
  pb: {
    style: Ye
  },
  pl: {
    style: Ye
  },
  px: {
    style: Ye
  },
  py: {
    style: Ye
  },
  padding: {
    style: Ye
  },
  paddingTop: {
    style: Ye
  },
  paddingRight: {
    style: Ye
  },
  paddingBottom: {
    style: Ye
  },
  paddingLeft: {
    style: Ye
  },
  paddingX: {
    style: Ye
  },
  paddingY: {
    style: Ye
  },
  paddingInline: {
    style: Ye
  },
  paddingInlineStart: {
    style: Ye
  },
  paddingInlineEnd: {
    style: Ye
  },
  paddingBlock: {
    style: Ye
  },
  paddingBlockStart: {
    style: Ye
  },
  paddingBlockEnd: {
    style: Ye
  },
  m: {
    style: qe
  },
  mt: {
    style: qe
  },
  mr: {
    style: qe
  },
  mb: {
    style: qe
  },
  ml: {
    style: qe
  },
  mx: {
    style: qe
  },
  my: {
    style: qe
  },
  margin: {
    style: qe
  },
  marginTop: {
    style: qe
  },
  marginRight: {
    style: qe
  },
  marginBottom: {
    style: qe
  },
  marginLeft: {
    style: qe
  },
  marginX: {
    style: qe
  },
  marginY: {
    style: qe
  },
  marginInline: {
    style: qe
  },
  marginInlineStart: {
    style: qe
  },
  marginInlineEnd: {
    style: qe
  },
  marginBlock: {
    style: qe
  },
  marginBlockStart: {
    style: qe
  },
  marginBlockEnd: {
    style: qe
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: Qi
  },
  rowGap: {
    style: ta
  },
  columnGap: {
    style: ea
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: Pt
  },
  maxWidth: {
    style: qs
  },
  minWidth: {
    transform: Pt
  },
  height: {
    transform: Pt
  },
  maxHeight: {
    transform: Pt
  },
  minHeight: {
    transform: Pt
  },
  boxSizing: {},
  // typography
  font: {
    themeKey: "font"
  },
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
};
function r1(...e) {
  const t = e.reduce((r, n) => r.concat(Object.keys(n)), []), o = new Set(t);
  return e.every((r) => o.size === Object.keys(r).length);
}
function n1(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function i1() {
  function e(o, r, n, i) {
    const a = {
      [o]: r,
      theme: n
    }, s = i[o];
    if (!s)
      return {
        [o]: r
      };
    const {
      cssProperty: l = o,
      themeKey: d,
      transform: c,
      style: f
    } = s;
    if (r == null)
      return null;
    if (d === "typography" && r === "inherit")
      return {
        [o]: r
      };
    const p = yr(n, d) || {};
    return f ? f(a) : Xt(a, r, (b) => {
      let y = ri(p, c, b);
      return b === y && typeof b == "string" && (y = ri(p, c, `${o}${b === "default" ? "" : ae(b)}`, b)), l === !1 ? y : {
        [l]: y
      };
    });
  }
  function t(o) {
    const {
      sx: r,
      theme: n = {}
    } = o || {};
    if (!r)
      return null;
    const i = n.unstable_sxConfig ?? oa;
    function a(s) {
      let l = s;
      if (typeof s == "function")
        l = s(n);
      else if (typeof s != "object")
        return s;
      if (!l)
        return null;
      const d = Yu(n.breakpoints), c = Object.keys(d);
      let f = d;
      return Object.keys(l).forEach((p) => {
        const v = n1(l[p], n);
        if (v != null)
          if (typeof v == "object")
            if (i[p])
              f = Wr(f, e(p, v, n, i));
            else {
              const b = Xt({
                theme: n
              }, v, (y) => ({
                [p]: y
              }));
              r1(b, v) ? f[p] = t({
                sx: v,
                theme: n
              }) : f = Wr(f, b);
            }
          else
            f = Wr(f, e(p, v, n, i));
      }), mC(n, Xu(c, f));
    }
    return Array.isArray(r) ? r.map(a) : a(r);
  }
  return t;
}
const gn = i1();
gn.filterProps = ["sx"];
function ep(e, t) {
  const o = this;
  return o.vars && typeof o.getColorSchemeSelector == "function" ? {
    [o.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t
  } : o.palette.mode === e ? t : {};
}
const a1 = ["breakpoints", "palette", "spacing", "shape"];
function Ys(e = {}, ...t) {
  const {
    breakpoints: o = {},
    palette: r = {},
    spacing: n,
    shape: i = {}
  } = e, a = U(e, a1), s = Ju(o), l = Qu(n);
  let d = Ht({
    breakpoints: s,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: u({
      mode: "light"
    }, r),
    spacing: l,
    shape: u({}, vC, i)
  }, a);
  return d = qu(d), d.applyStyles = ep, d = t.reduce((c, f) => Ht(c, f), d), d.unstable_sxConfig = u({}, oa, a == null ? void 0 : a.unstable_sxConfig), d.unstable_sx = function(f) {
    return gn({
      sx: f,
      theme: this
    });
  }, d;
}
function s1(e) {
  return Object.keys(e).length === 0;
}
function tp(e = null) {
  const t = h.useContext(Vo);
  return !t || s1(t) ? e : t;
}
const l1 = Ys();
function op(e = l1) {
  return tp(e);
}
const c1 = ["sx"], d1 = (e) => {
  var r;
  const t = {
    systemProps: {},
    otherProps: {}
  }, o = ((r = e == null ? void 0 : e.theme) == null ? void 0 : r.unstable_sxConfig) ?? oa;
  return Object.keys(e).forEach((n) => {
    o[n] ? t.systemProps[n] = e[n] : t.otherProps[n] = e[n];
  }), t;
};
function Xs(e) {
  const {
    sx: t
  } = e, o = U(e, c1), {
    systemProps: r,
    otherProps: n
  } = d1(o);
  let i;
  return Array.isArray(t) ? i = [r, ...t] : typeof t == "function" ? i = (...a) => {
    const s = t(...a);
    return yo(s) ? u({}, r, s) : r;
  } : i = u({}, r, t), u({}, n, {
    sx: i
  });
}
const Oc = (e) => e, u1 = () => {
  let e = Oc;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Oc;
    }
  };
}, rp = u1(), p1 = ["className", "component"];
function f1(e = {}) {
  const {
    themeId: t,
    defaultTheme: o,
    defaultClassName: r = "MuiBox-root",
    generateClassName: n
  } = e, i = Gu("div", {
    shouldForwardProp: (s) => s !== "theme" && s !== "sx" && s !== "as"
  })(gn);
  return /* @__PURE__ */ h.forwardRef(function(l, d) {
    const c = op(o), f = Xs(l), {
      className: p,
      component: v = "div"
    } = f, b = U(f, p1);
    return /* @__PURE__ */ m.jsx(i, u({
      as: v,
      ref: d,
      className: fe(p, n ? n(r) : r),
      theme: t && c[t] || c
    }, b));
  });
}
const np = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function Zs(e, t, o = "Mui") {
  const r = np[t];
  return r ? `${o}-${r}` : `${rp.generate(e)}-${t}`;
}
function ip(e, t, o = "Mui") {
  const r = {};
  return t.forEach((n) => {
    r[n] = Zs(e, n, o);
  }), r;
}
const m1 = ["ownerState"], h1 = ["variants"], g1 = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function v1(e) {
  return Object.keys(e).length === 0;
}
function b1(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function Ma(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const y1 = Ys(), x1 = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function zn({
  defaultTheme: e,
  theme: t,
  themeId: o
}) {
  return v1(t) ? e : t[o] || t;
}
function C1(e) {
  return e ? (t, o) => o[e] : null;
}
function Vn(e, t) {
  let {
    ownerState: o
  } = t, r = U(t, m1);
  const n = typeof e == "function" ? e(u({
    ownerState: o
  }, r)) : e;
  if (Array.isArray(n))
    return n.flatMap((i) => Vn(i, u({
      ownerState: o
    }, r)));
  if (n && typeof n == "object" && Array.isArray(n.variants)) {
    const {
      variants: i = []
    } = n;
    let s = U(n, h1);
    return i.forEach((l) => {
      let d = !0;
      typeof l.props == "function" ? d = l.props(u({
        ownerState: o
      }, r, o)) : Object.keys(l.props).forEach((c) => {
        (o == null ? void 0 : o[c]) !== l.props[c] && r[c] !== l.props[c] && (d = !1);
      }), d && (Array.isArray(s) || (s = [s]), s.push(typeof l.style == "function" ? l.style(u({
        ownerState: o
      }, r, o)) : l.style));
    }), s;
  }
  return n;
}
function ap(e = {}) {
  const {
    themeId: t,
    defaultTheme: o = y1,
    rootShouldForwardProp: r = Ma,
    slotShouldForwardProp: n = Ma
  } = e, i = (a) => gn(u({}, a, {
    theme: zn(u({}, a, {
      defaultTheme: o,
      themeId: t
    }))
  }));
  return i.__mui_systemSx = !0, (a, s = {}) => {
    uC(a, (P) => P.filter((g) => !(g != null && g.__mui_systemSx)));
    const {
      name: l,
      slot: d,
      skipVariantsResolver: c,
      skipSx: f,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: p = C1(x1(d))
    } = s, v = U(s, g1), b = c !== void 0 ? c : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      d && d !== "Root" && d !== "root" || !1
    ), y = f || !1;
    let x, C = Ma;
    d === "Root" || d === "root" ? C = r : d ? C = n : b1(a) && (C = void 0);
    const S = Gu(a, u({
      shouldForwardProp: C,
      label: x
    }, v)), $ = (P) => typeof P == "function" && P.__emotion_real !== P || yo(P) ? (g) => Vn(P, u({}, g, {
      theme: zn({
        theme: g.theme,
        defaultTheme: o,
        themeId: t
      })
    })) : P, R = (P, ...g) => {
      let k = $(P);
      const T = g ? g.map($) : [];
      l && p && T.push((A) => {
        const D = zn(u({}, A, {
          defaultTheme: o,
          themeId: t
        }));
        if (!D.components || !D.components[l] || !D.components[l].styleOverrides)
          return null;
        const M = D.components[l].styleOverrides, E = {};
        return Object.entries(M).forEach(([w, I]) => {
          E[w] = Vn(I, u({}, A, {
            theme: D
          }));
        }), p(A, E);
      }), l && !b && T.push((A) => {
        var E, w;
        const D = zn(u({}, A, {
          defaultTheme: o,
          themeId: t
        })), M = (w = (E = D == null ? void 0 : D.components) == null ? void 0 : E[l]) == null ? void 0 : w.variants;
        return Vn({
          variants: M
        }, u({}, A, {
          theme: D
        }));
      }), y || T.push(i);
      const j = T.length - g.length;
      if (Array.isArray(P) && j > 0) {
        const A = new Array(j).fill("");
        k = [...P, ...A], k.raw = [...P.raw, ...A];
      }
      const O = S(k, ...T);
      return a.muiName && (O.muiName = a.muiName), O;
    };
    return S.withConfig && (R.withConfig = S.withConfig), R;
  };
}
const S1 = ap();
function sp(e, t) {
  const o = u({}, t);
  return Object.keys(e).forEach((r) => {
    if (r.toString().match(/^(components|slots)$/))
      o[r] = u({}, e[r], o[r]);
    else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
      const n = e[r] || {}, i = t[r];
      o[r] = {}, !i || !Object.keys(i) ? o[r] = n : !n || !Object.keys(n) ? o[r] = i : (o[r] = u({}, i), Object.keys(n).forEach((a) => {
        o[r][a] = sp(n[a], i[a]);
      }));
    } else
      o[r] === void 0 && (o[r] = e[r]);
  }), o;
}
function $1(e) {
  const {
    theme: t,
    name: o,
    props: r
  } = e;
  return !t || !t.components || !t.components[o] || !t.components[o].defaultProps ? r : sp(t.components[o].defaultProps, r);
}
function lp({
  props: e,
  name: t,
  defaultTheme: o,
  themeId: r
}) {
  let n = op(o);
  return r && (n = n[r] || n), $1({
    theme: n,
    name: t,
    props: e
  });
}
const Ho = typeof window < "u" ? h.useLayoutEffect : h.useEffect;
function k1(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let o = e.match(t);
  return o && o[0].length === 1 && (o = o.map((r) => r + r)), o ? `rgb${o.length === 4 ? "a" : ""}(${o.map((r, n) => n < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function cp(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return cp(k1(e));
  const t = e.indexOf("("), o = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(o) === -1)
    throw new Error(on(9, e));
  let r = e.substring(t + 1, e.length - 1), n;
  if (o === "color") {
    if (r = r.split(" "), n = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(n) === -1)
      throw new Error(on(10, n));
  } else
    r = r.split(",");
  return r = r.map((i) => parseFloat(i)), {
    type: o,
    values: r,
    colorSpace: n
  };
}
const Do = (e) => {
  const t = cp(e);
  return t.values.slice(0, 3).map((o, r) => t.type.indexOf("hsl") !== -1 && r !== 0 ? `${o}%` : o).join(" ");
};
function Mc(...e) {
  return e.reduce((t, o) => o == null ? t : function(...n) {
    t.apply(this, n), o.apply(this, n);
  }, () => {
  });
}
function Qs(e, t) {
  var o, r, n;
  return /* @__PURE__ */ h.isValidElement(e) && t.indexOf(
    // For server components `muiName` is avaialble in element.type._payload.value.muiName
    // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    e.type.muiName ?? ((n = (r = (o = e.type) == null ? void 0 : o._payload) == null ? void 0 : r.value) == null ? void 0 : n.muiName)
  ) !== -1;
}
function ao(e) {
  return e && e.ownerDocument || document;
}
function el(e) {
  return ao(e).defaultView || window;
}
function ni(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
let Ac = 0;
function I1(e) {
  const [t, o] = h.useState(e), r = e || t;
  return h.useEffect(() => {
    t == null && (Ac += 1, o(`mui-${Ac}`));
  }, [t]), r;
}
const jc = h.useId;
function Zt(e) {
  if (jc !== void 0) {
    const t = jc();
    return e ?? t;
  }
  return I1(e);
}
function Ur({
  controlled: e,
  default: t,
  name: o,
  state: r = "value"
}) {
  const {
    current: n
  } = h.useRef(e !== void 0), [i, a] = h.useState(t), s = n ? e : i, l = h.useCallback((d) => {
    n || a(d);
  }, []);
  return [s, l];
}
function rr(e) {
  const t = h.useRef(e);
  return Ho(() => {
    t.current = e;
  }), h.useRef((...o) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...o)
  )).current;
}
function Ze(...e) {
  return h.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((o) => {
      ni(o, t);
    });
  }, e);
}
class tl {
  constructor() {
    this.currentId = null, this.clear = () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    }, this.disposeEffect = () => this.clear;
  }
  static create() {
    return new tl();
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(t, o) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, o();
    }, t);
  }
}
let ra = !0, is = !1;
const R1 = new tl(), P1 = {
  text: !0,
  search: !0,
  url: !0,
  tel: !0,
  email: !0,
  password: !0,
  number: !0,
  date: !0,
  month: !0,
  week: !0,
  time: !0,
  datetime: !0,
  "datetime-local": !0
};
function w1(e) {
  const {
    type: t,
    tagName: o
  } = e;
  return !!(o === "INPUT" && P1[t] && !e.readOnly || o === "TEXTAREA" && !e.readOnly || e.isContentEditable);
}
function T1(e) {
  e.metaKey || e.altKey || e.ctrlKey || (ra = !0);
}
function Aa() {
  ra = !1;
}
function D1() {
  this.visibilityState === "hidden" && is && (ra = !0);
}
function E1(e) {
  e.addEventListener("keydown", T1, !0), e.addEventListener("mousedown", Aa, !0), e.addEventListener("pointerdown", Aa, !0), e.addEventListener("touchstart", Aa, !0), e.addEventListener("visibilitychange", D1, !0);
}
function z1(e) {
  const {
    target: t
  } = e;
  try {
    return t.matches(":focus-visible");
  } catch {
  }
  return ra || w1(t);
}
function dp() {
  const e = h.useCallback((n) => {
    n != null && E1(n.ownerDocument);
  }, []), t = h.useRef(!1);
  function o() {
    return t.current ? (is = !0, R1.start(100, () => {
      is = !1;
    }), t.current = !1, !0) : !1;
  }
  function r(n) {
    return z1(n) ? (t.current = !0, !0) : !1;
  }
  return {
    isFocusVisibleRef: t,
    onFocus: r,
    onBlur: o,
    ref: e
  };
}
function O1(e) {
  const t = e.documentElement.clientWidth;
  return Math.abs(window.innerWidth - t);
}
const M1 = (e) => {
  const t = h.useRef({});
  return h.useEffect(() => {
    t.current = e;
  }), t.current;
}, A1 = {
  border: 0,
  clip: "rect(0 0 0 0)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: 0,
  position: "absolute",
  whiteSpace: "nowrap",
  width: "1px"
};
function Re(e, t, o = void 0) {
  const r = {};
  return Object.keys(e).forEach(
    // `Object.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
    // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
    (n) => {
      r[n] = e[n].reduce((i, a) => {
        if (a) {
          const s = t(a);
          s !== "" && i.push(s), o && o[a] && i.push(o[a]);
        }
        return i;
      }, []).join(" ");
    }
  ), r;
}
const up = /* @__PURE__ */ h.createContext(null);
function ol() {
  return h.useContext(up);
}
const j1 = typeof Symbol == "function" && Symbol.for, B1 = j1 ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function _1(e, t) {
  return typeof t == "function" ? t(e) : u({}, e, t);
}
function L1(e) {
  const {
    children: t,
    theme: o
  } = e, r = ol(), n = h.useMemo(() => {
    const i = r === null ? o : _1(r, o);
    return i != null && (i[B1] = r !== null), i;
  }, [o, r]);
  return /* @__PURE__ */ m.jsx(up.Provider, {
    value: n,
    children: t
  });
}
const F1 = ["value"], N1 = /* @__PURE__ */ h.createContext();
function H1(e) {
  let {
    value: t
  } = e, o = U(e, F1);
  return /* @__PURE__ */ m.jsx(N1.Provider, u({
    value: t ?? !0
  }, o));
}
const Bc = {};
function _c(e, t, o, r = !1) {
  return h.useMemo(() => {
    const n = e && t[e] || t;
    if (typeof o == "function") {
      const i = o(n), a = e ? u({}, t, {
        [e]: i
      }) : i;
      return r ? () => a : a;
    }
    return e ? u({}, t, {
      [e]: o
    }) : u({}, t, o);
  }, [e, t, o, r]);
}
function V1(e) {
  const {
    children: t,
    theme: o,
    themeId: r
  } = e, n = tp(Bc), i = ol() || Bc, a = _c(r, n, o), s = _c(r, i, o, !0), l = a.direction === "rtl";
  return /* @__PURE__ */ m.jsx(L1, {
    theme: s,
    children: /* @__PURE__ */ m.jsx(Vo.Provider, {
      value: a,
      children: /* @__PURE__ */ m.jsx(H1, {
        value: l,
        children: t
      })
    })
  });
}
const rl = "mode", nl = "color-scheme", pp = "data-color-scheme";
function W1(e) {
  const {
    defaultMode: t = "light",
    defaultLightColorScheme: o = "light",
    defaultDarkColorScheme: r = "dark",
    modeStorageKey: n = rl,
    colorSchemeStorageKey: i = nl,
    attribute: a = pp,
    colorSchemeNode: s = "document.documentElement"
  } = e || {};
  return /* @__PURE__ */ m.jsx("script", {
    // eslint-disable-next-line react/no-danger
    dangerouslySetInnerHTML: {
      __html: `(function() {
try {
  var mode = localStorage.getItem('${n}') || '${t}';
  var colorScheme = '';
  if (mode === 'system') {
    // handle system mode
    var mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      colorScheme = localStorage.getItem('${i}-dark') || '${r}';
    } else {
      colorScheme = localStorage.getItem('${i}-light') || '${o}';
    }
  }
  if (mode === 'light') {
    colorScheme = localStorage.getItem('${i}-light') || '${o}';
  }
  if (mode === 'dark') {
    colorScheme = localStorage.getItem('${i}-dark') || '${r}';
  }
  if (colorScheme) {
    ${s}.setAttribute('${a}', colorScheme);
  }
} catch(e){}})();`
    }
  }, "mui-color-scheme-init");
}
function Lc(e) {
  if (typeof window < "u" && e === "system")
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function fp(e, t) {
  if (e.mode === "light" || e.mode === "system" && e.systemMode === "light")
    return t("light");
  if (e.mode === "dark" || e.mode === "system" && e.systemMode === "dark")
    return t("dark");
}
function U1(e) {
  return fp(e, (t) => {
    if (t === "light")
      return e.lightColorScheme;
    if (t === "dark")
      return e.darkColorScheme;
  });
}
function ja(e, t) {
  if (typeof window > "u")
    return;
  let o;
  try {
    o = localStorage.getItem(e) || void 0, o || localStorage.setItem(e, t);
  } catch {
  }
  return o || t;
}
function G1(e) {
  const {
    defaultMode: t = "light",
    defaultLightColorScheme: o,
    defaultDarkColorScheme: r,
    supportedColorSchemes: n = [],
    modeStorageKey: i = rl,
    colorSchemeStorageKey: a = nl,
    storageWindow: s = typeof window > "u" ? void 0 : window
  } = e, l = n.join(","), [d, c] = h.useState(() => {
    const x = ja(i, t), C = ja(`${a}-light`, o), S = ja(`${a}-dark`, r);
    return {
      mode: x,
      systemMode: Lc(x),
      lightColorScheme: C,
      darkColorScheme: S
    };
  }), f = U1(d), p = h.useCallback((x) => {
    c((C) => {
      if (x === C.mode)
        return C;
      const S = x ?? t;
      try {
        localStorage.setItem(i, S);
      } catch {
      }
      return u({}, C, {
        mode: S,
        systemMode: Lc(S)
      });
    });
  }, [i, t]), v = h.useCallback((x) => {
    x ? typeof x == "string" ? x && !l.includes(x) ? console.error(`\`${x}\` does not exist in \`theme.colorSchemes\`.`) : c((C) => {
      const S = u({}, C);
      return fp(C, ($) => {
        try {
          localStorage.setItem(`${a}-${$}`, x);
        } catch {
        }
        $ === "light" && (S.lightColorScheme = x), $ === "dark" && (S.darkColorScheme = x);
      }), S;
    }) : c((C) => {
      const S = u({}, C), $ = x.light === null ? o : x.light, R = x.dark === null ? r : x.dark;
      if ($)
        if (!l.includes($))
          console.error(`\`${$}\` does not exist in \`theme.colorSchemes\`.`);
        else {
          S.lightColorScheme = $;
          try {
            localStorage.setItem(`${a}-light`, $);
          } catch {
          }
        }
      if (R)
        if (!l.includes(R))
          console.error(`\`${R}\` does not exist in \`theme.colorSchemes\`.`);
        else {
          S.darkColorScheme = R;
          try {
            localStorage.setItem(`${a}-dark`, R);
          } catch {
          }
        }
      return S;
    }) : c((C) => {
      try {
        localStorage.setItem(`${a}-light`, o), localStorage.setItem(`${a}-dark`, r);
      } catch {
      }
      return u({}, C, {
        lightColorScheme: o,
        darkColorScheme: r
      });
    });
  }, [l, a, o, r]), b = h.useCallback((x) => {
    d.mode === "system" && c((C) => {
      const S = x != null && x.matches ? "dark" : "light";
      return C.systemMode === S ? C : u({}, C, {
        systemMode: S
      });
    });
  }, [d.mode]), y = h.useRef(b);
  return y.current = b, h.useEffect(() => {
    const x = (...S) => y.current(...S), C = window.matchMedia("(prefers-color-scheme: dark)");
    return C.addListener(x), x(C), () => {
      C.removeListener(x);
    };
  }, []), h.useEffect(() => {
    if (s) {
      const x = (C) => {
        const S = C.newValue;
        typeof C.key == "string" && C.key.startsWith(a) && (!S || l.match(S)) && (C.key.endsWith("light") && v({
          light: S
        }), C.key.endsWith("dark") && v({
          dark: S
        })), C.key === i && (!S || ["light", "dark", "system"].includes(S)) && p(S || t);
      };
      return s.addEventListener("storage", x), () => {
        s.removeEventListener("storage", x);
      };
    }
  }, [v, p, i, a, l, t, s]), u({}, d, {
    colorScheme: f,
    setMode: p,
    setColorScheme: v
  });
}
const K1 = ["colorSchemes", "components", "cssVarPrefix"], J1 = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function q1(e) {
  const {
    themeId: t,
    /**
     * This `theme` object needs to follow a certain structure to
     * be used correctly by the finel `CssVarsProvider`. It should have a
     * `colorSchemes` key with the light and dark (and any other) palette.
     * It should also ideally have a vars object created using `prepareCssVars`.
     */
    theme: o = {},
    attribute: r = pp,
    modeStorageKey: n = rl,
    colorSchemeStorageKey: i = nl,
    defaultMode: a = "light",
    defaultColorScheme: s,
    disableTransitionOnChange: l = !1,
    resolveTheme: d
  } = e;
  (!o.colorSchemes || typeof s == "string" && !o.colorSchemes[s] || typeof s == "object" && !o.colorSchemes[s == null ? void 0 : s.light] || typeof s == "object" && !o.colorSchemes[s == null ? void 0 : s.dark]) && console.error(`MUI: \`${s}\` does not exist in \`theme.colorSchemes\`.`);
  const c = /* @__PURE__ */ h.createContext(void 0), f = () => {
    const x = h.useContext(c);
    if (!x)
      throw new Error(on(19));
    return x;
  };
  function p(x) {
    var Ve, st;
    const {
      children: C,
      theme: S = o,
      modeStorageKey: $ = n,
      colorSchemeStorageKey: R = i,
      attribute: P = r,
      defaultMode: g = a,
      defaultColorScheme: k = s,
      disableTransitionOnChange: T = l,
      storageWindow: j = typeof window > "u" ? void 0 : window,
      documentNode: O = typeof document > "u" ? void 0 : document,
      colorSchemeNode: A = typeof document > "u" ? void 0 : document.documentElement,
      colorSchemeSelector: D = ":root",
      disableNestedContext: M = !1,
      disableStyleSheetGeneration: E = !1
    } = x, w = h.useRef(!1), I = ol(), z = h.useContext(c), _ = !!z && !M, L = S[t], N = L || S, {
      colorSchemes: Y = {},
      components: ee = {},
      cssVarPrefix: re
    } = N, Q = U(N, K1), te = Object.keys(Y), he = typeof k == "string" ? k : k.light, oe = typeof k == "string" ? k : k.dark, {
      mode: B,
      setMode: V,
      systemMode: K,
      lightColorScheme: se,
      darkColorScheme: ue,
      colorScheme: le,
      setColorScheme: me
    } = G1({
      supportedColorSchemes: te,
      defaultLightColorScheme: he,
      defaultDarkColorScheme: oe,
      modeStorageKey: $,
      colorSchemeStorageKey: R,
      defaultMode: g,
      storageWindow: j
    });
    let ie = B, J = le;
    _ && (ie = z.mode, J = z.colorScheme);
    const Ce = ie || (g === "system" ? a : g), ce = J || (Ce === "dark" ? oe : he), Ee = ((Ve = Q.generateThemeVars) == null ? void 0 : Ve.call(Q)) || Q.vars, pe = u({}, Q, {
      components: ee,
      colorSchemes: Y,
      cssVarPrefix: re,
      vars: Ee
    });
    typeof pe.generateSpacing == "function" && (pe.spacing = pe.generateSpacing()), Object.entries(Y).forEach(([Me, ke]) => {
      Me === ce && (Object.keys(ke).forEach((q) => {
        ke[q] && typeof ke[q] == "object" ? pe[q] = u({}, pe[q], ke[q]) : pe[q] = ke[q];
      }), pe.palette && (pe.palette.colorScheme = Me));
    });
    const Se = typeof k == "string" ? k : g === "dark" ? k.dark : k.light;
    S.defaultColorScheme = Se, S.colorSchemeSelector = D, S.attribute = P, pe.getColorSchemeSelector || (pe.getColorSchemeSelector = (Me) => `[${P}="${Me}"] &`), h.useEffect(() => {
      J && A && A.setAttribute(P, J);
    }, [J, P, A]), h.useEffect(() => {
      let Me;
      if (T && w.current && O) {
        const ke = O.createElement("style");
        ke.appendChild(O.createTextNode(J1)), O.head.appendChild(ke), window.getComputedStyle(O.body), Me = setTimeout(() => {
          O.head.removeChild(ke);
        }, 1);
      }
      return () => {
        clearTimeout(Me);
      };
    }, [J, T, O]), h.useEffect(() => (w.current = !0, () => {
      w.current = !1;
    }), []);
    const $e = h.useMemo(() => ({
      allColorSchemes: te,
      colorScheme: J,
      darkColorScheme: ue,
      lightColorScheme: se,
      mode: ie,
      setColorScheme: me,
      setMode: V,
      systemMode: K
    }), [te, J, ue, se, ie, me, V, K]);
    let ge = !0;
    (E || _ && (I == null ? void 0 : I.cssVarPrefix) === re) && (ge = !1);
    const Ie = /* @__PURE__ */ m.jsxs(h.Fragment, {
      children: [ge && /* @__PURE__ */ m.jsx(h.Fragment, {
        children: (((st = pe.generateStyleSheets) == null ? void 0 : st.call(pe)) || []).map((Me, ke) => /* @__PURE__ */ m.jsx(dC, {
          styles: Me
        }, ke))
      }), /* @__PURE__ */ m.jsx(V1, {
        themeId: L ? t : void 0,
        theme: d ? d(pe) : pe,
        children: C
      })]
    });
    return _ ? Ie : /* @__PURE__ */ m.jsx(c.Provider, {
      value: $e,
      children: Ie
    });
  }
  const v = typeof s == "string" ? s : s.light, b = typeof s == "string" ? s : s.dark;
  return {
    CssVarsProvider: p,
    useColorScheme: f,
    getInitColorSchemeScript: (x) => W1(u({
      attribute: r,
      colorSchemeStorageKey: i,
      defaultMode: a,
      defaultLightColorScheme: v,
      defaultDarkColorScheme: b,
      modeStorageKey: n
    }, x))
  };
}
function il(e = "") {
  function t(...r) {
    if (!r.length)
      return "";
    const n = r[0];
    return typeof n == "string" && !n.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${n}${t(...r.slice(1))})` : `, ${n}`;
  }
  return (r, ...n) => `var(--${e ? `${e}-` : ""}${r}${t(...n)})`;
}
const Fc = (e, t, o, r = []) => {
  let n = e;
  t.forEach((i, a) => {
    a === t.length - 1 ? Array.isArray(n) ? n[Number(i)] = o : n && typeof n == "object" && (n[i] = o) : n && typeof n == "object" && (n[i] || (n[i] = r.includes(i) ? [] : {}), n = n[i]);
  });
}, Y1 = (e, t, o) => {
  function r(n, i = [], a = []) {
    Object.entries(n).forEach(([s, l]) => {
      (!o || o && !o([...i, s])) && l != null && (typeof l == "object" && Object.keys(l).length > 0 ? r(l, [...i, s], Array.isArray(l) ? [...a, s] : a) : t([...i, s], l, a));
    });
  }
  r(e);
}, X1 = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((r) => e.includes(r)) || e[e.length - 1].toLowerCase().indexOf("opacity") >= 0 ? t : `${t}px` : t;
function Ba(e, t) {
  const {
    prefix: o,
    shouldSkipGeneratingVar: r
  } = t || {}, n = {}, i = {}, a = {};
  return Y1(
    e,
    (s, l, d) => {
      if ((typeof l == "string" || typeof l == "number") && (!r || !r(s, l))) {
        const c = `--${o ? `${o}-` : ""}${s.join("-")}`, f = X1(s, l);
        Object.assign(n, {
          [c]: f
        }), Fc(i, s, `var(${c})`, d), Fc(a, s, `var(${c}, ${f})`, d);
      }
    },
    (s) => s[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: n,
    vars: i,
    varsWithDefaults: a
  };
}
const Z1 = ["getSelector"], Q1 = ["colorSchemes", "components", "defaultColorScheme"];
function eS(e, t = {}) {
  let {
    getSelector: o
  } = t, r = U(t, Z1);
  const {
    colorSchemes: n = {},
    defaultColorScheme: i = "light"
  } = e, a = U(e, Q1), {
    vars: s,
    css: l,
    varsWithDefaults: d
  } = Ba(a, r);
  let c = d;
  const f = {}, {
    [i]: p
  } = n, v = U(n, [i].map(Ja));
  if (Object.entries(v || {}).forEach(([x, C]) => {
    const {
      vars: S,
      css: $,
      varsWithDefaults: R
    } = Ba(C, r);
    c = Ht(c, R), f[x] = {
      css: $,
      vars: S
    };
  }), p) {
    const {
      css: x,
      vars: C,
      varsWithDefaults: S
    } = Ba(p, r);
    c = Ht(c, S), f[i] = {
      css: x,
      vars: C
    };
  }
  return {
    vars: c,
    generateThemeVars: () => {
      let x = u({}, s);
      return Object.entries(f).forEach(([, {
        vars: C
      }]) => {
        x = Ht(x, C);
      }), x;
    },
    generateStyleSheets: () => {
      const x = [], C = e.defaultColorScheme || "light";
      function S(P, g) {
        Object.keys(g).length && x.push(typeof P == "string" ? {
          [P]: u({}, g)
        } : P);
      }
      S((o == null ? void 0 : o(void 0, u({}, l))) || ":root", l);
      const {
        [C]: $
      } = f, R = U(f, [C].map(Ja));
      if ($) {
        const {
          css: P
        } = $;
        S((o == null ? void 0 : o(C, u({}, P))) || `[${e.attribute || "data-color-scheme"}="${C}"]`, P);
      }
      return Object.entries(R).forEach(([P, {
        css: g
      }]) => {
        S((o == null ? void 0 : o(P, u({}, g))) || `[${e.attribute || "data-color-scheme"}="${P}"]`, g);
      }), x;
    }
  };
}
const tS = ["component", "direction", "spacing", "divider", "children", "className", "useFlexGap"], oS = Ys(), rS = S1("div", {
  name: "MuiStack",
  slot: "Root",
  overridesResolver: (e, t) => t.root
});
function nS(e) {
  return lp({
    props: e,
    name: "MuiStack",
    defaultTheme: oS
  });
}
function iS(e, t) {
  const o = h.Children.toArray(e).filter(Boolean);
  return o.reduce((r, n, i) => (r.push(n), i < o.length - 1 && r.push(/* @__PURE__ */ h.cloneElement(t, {
    key: `separator-${i}`
  })), r), []);
}
const aS = (e) => ({
  row: "Left",
  "row-reverse": "Right",
  column: "Top",
  "column-reverse": "Bottom"
})[e], sS = ({
  ownerState: e,
  theme: t
}) => {
  let o = u({
    display: "flex",
    flexDirection: "column"
  }, Xt({
    theme: t
  }, Oa({
    values: e.direction,
    breakpoints: t.breakpoints.values
  }), (r) => ({
    flexDirection: r
  })));
  if (e.spacing) {
    const r = Yi(t), n = Object.keys(t.breakpoints.values).reduce((l, d) => ((typeof e.spacing == "object" && e.spacing[d] != null || typeof e.direction == "object" && e.direction[d] != null) && (l[d] = !0), l), {}), i = Oa({
      values: e.direction,
      base: n
    }), a = Oa({
      values: e.spacing,
      base: n
    });
    typeof i == "object" && Object.keys(i).forEach((l, d, c) => {
      if (!i[l]) {
        const p = d > 0 ? i[c[d - 1]] : "column";
        i[l] = p;
      }
    }), o = Ht(o, Xt({
      theme: t
    }, a, (l, d) => e.useFlexGap ? {
      gap: No(r, l)
    } : {
      // The useFlexGap={false} implement relies on each child to give up control of the margin.
      // We need to reset the margin to avoid double spacing.
      "& > :not(style):not(style)": {
        margin: 0
      },
      "& > :not(style) ~ :not(style)": {
        [`margin${aS(d ? i[d] : e.direction)}`]: No(r, l)
      }
    }));
  }
  return o = yC(t.breakpoints, o), o;
};
function lS(e = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent: t = rS,
    useThemeProps: o = nS,
    componentName: r = "MuiStack"
  } = e, n = () => Re({
    root: ["root"]
  }, (l) => Zs(r, l), {}), i = t(sS);
  return /* @__PURE__ */ h.forwardRef(function(l, d) {
    const c = o(l), f = Xs(c), {
      component: p = "div",
      direction: v = "column",
      spacing: b = 0,
      divider: y,
      children: x,
      className: C,
      useFlexGap: S = !1
    } = f, $ = U(f, tS), R = {
      direction: v,
      spacing: b,
      useFlexGap: S
    }, P = n();
    return /* @__PURE__ */ m.jsx(i, u({
      as: p,
      ownerState: R,
      ref: d,
      className: fe(P.root, C)
    }, $, {
      children: y ? iS(x, y) : x
    }));
  });
}
const cS = u({}, oa, {
  // The default system themeKey is shape
  borderRadius: {
    themeKey: "radius"
  },
  // The default system themeKey is shadows
  boxShadow: {
    themeKey: "shadow"
  },
  // The default system themeKey is typography
  fontFamily: {
    themeKey: "fontFamily"
  },
  // The default system themeKey is typography
  fontSize: {
    themeKey: "fontSize"
  },
  // The default system themeKey is typography
  fontWeight: {
    themeKey: "fontWeight"
  },
  // The default system themeKey is typography
  letterSpacing: {
    themeKey: "letterSpacing"
  },
  // The default system themeKey is typography
  lineHeight: {
    themeKey: "lineHeight"
  }
});
function dS(e) {
  var t;
  return !!e[0].match(/^(typography|variants|breakpoints)$/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/^(mode)$/)) || e[0] === "focus" && e[1] !== "thickness";
}
const we = (e, t) => Zs(e, t, "Mui"), Pe = (e, t) => ip(e, t, "Mui"), uS = (e) => e && typeof e == "object" && Object.keys(e).some((t) => {
  var o;
  return (o = t.match) == null ? void 0 : o.call(t, /^(plain(Hover|Active|Disabled)?(Color|Bg)|outlined(Hover|Active|Disabled)?(Color|Border|Bg)|soft(Hover|Active|Disabled)?(Color|Bg)|solid(Hover|Active|Disabled)?(Color|Bg))$/);
}), Nc = (e, t, o) => {
  t.includes("Color") && (e.color = o), t.includes("Bg") && (e.backgroundColor = o), t.includes("Border") && (e.borderColor = o);
}, Hc = (e, t, o) => {
  const r = {};
  return Object.entries(t || {}).forEach(([n, i]) => {
    if (n.match(new RegExp(`${e}(color|bg|border)`, "i")) && i) {
      const a = o ? o(n) : i;
      n.includes("Disabled") && (r.pointerEvents = "none", r.cursor = "default", r["--Icon-color"] = "currentColor"), n.match(/(Hover|Active|Disabled)/) || (r["--variant-borderWidth"] || (r["--variant-borderWidth"] = "0px"), n.includes("Border") && (r["--variant-borderWidth"] = "1px", r.border = "var(--variant-borderWidth) solid")), Nc(r, n, a);
    }
  }), r;
}, vt = (e, t) => {
  let o = {};
  if (t) {
    const {
      getCssVar: r,
      palette: n
    } = t;
    Object.entries(n).forEach((i) => {
      const [a, s] = i;
      uS(s) && typeof s == "object" && (o = u({}, o, {
        [a]: Hc(e, s, (l) => `var(--variant-${l}, ${r(`palette-${a}-${l}`, n[a][l])})`)
      }));
    });
  }
  return o.context = Hc(e, {
    plainColor: "var(--variant-plainColor)",
    plainHoverColor: "var(--variant-plainHoverColor)",
    plainHoverBg: "var(--variant-plainHoverBg)",
    plainActiveBg: "var(--variant-plainActiveBg)",
    plainDisabledColor: "var(--variant-plainDisabledColor)",
    outlinedColor: "var(--variant-outlinedColor)",
    outlinedBorder: "var(--variant-outlinedBorder)",
    outlinedHoverColor: "var(--variant-outlinedHoverColor)",
    outlinedHoverBorder: "var(--variant-outlinedHoverBorder)",
    outlinedHoverBg: "var(--variant-outlinedHoverBg)",
    outlinedActiveBg: "var(--variant-outlinedActiveBg)",
    outlinedDisabledColor: "var(--variant-outlinedDisabledColor)",
    outlinedDisabledBorder: "var(--variant-outlinedDisabledBorder)",
    softColor: "var(--variant-softColor)",
    softBg: "var(--variant-softBg)",
    softHoverColor: "var(--variant-softHoverColor)",
    softHoverBg: "var(--variant-softHoverBg)",
    softActiveBg: "var(--variant-softActiveBg)",
    softDisabledColor: "var(--variant-softDisabledColor)",
    softDisabledBg: "var(--variant-softDisabledBg)",
    solidColor: "var(--variant-solidColor)",
    solidBg: "var(--variant-solidBg)",
    solidHoverBg: "var(--variant-solidHoverBg)",
    solidActiveBg: "var(--variant-solidActiveBg)",
    solidDisabledColor: "var(--variant-solidDisabledColor)",
    solidDisabledBg: "var(--variant-solidDisabledBg)"
  }), o;
}, pS = ["cssVarPrefix", "breakpoints", "spacing", "components", "variants", "shouldSkipGeneratingVar", "getSelector"], fS = ["colorSchemes"];
function mp(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" ? e : typeof e == "function" ? mp(e(1)) : Array.isArray(e) ? e : "8px";
}
const mS = (e = "joy") => il(e);
function hp(e) {
  var N, Y, ee, re, Q, te, he, oe;
  const t = e || {}, {
    cssVarPrefix: o = "joy",
    breakpoints: r,
    spacing: n,
    components: i,
    variants: a,
    shouldSkipGeneratingVar: s = dS,
    getSelector: l
  } = t, d = U(t, pS), c = mS(o), f = {
    primary: Ar.blue,
    neutral: Ar.grey,
    danger: Ar.red,
    success: Ar.green,
    warning: Ar.yellow,
    common: {
      white: "#FFF",
      black: "#000"
    }
  }, p = (B) => {
    var ue;
    const V = B.split("-"), K = V[1], se = V[2];
    return c(B, (ue = f[K]) == null ? void 0 : ue[se]);
  }, v = (B) => ({
    plainColor: p(`palette-${B}-500`),
    plainHoverBg: p(`palette-${B}-100`),
    plainActiveBg: p(`palette-${B}-200`),
    plainDisabledColor: p("palette-neutral-400"),
    outlinedColor: p(`palette-${B}-500`),
    outlinedBorder: p(`palette-${B}-300`),
    outlinedHoverBg: p(`palette-${B}-100`),
    outlinedActiveBg: p(`palette-${B}-200`),
    outlinedDisabledColor: p("palette-neutral-400"),
    outlinedDisabledBorder: p("palette-neutral-200"),
    softColor: p(`palette-${B}-700`),
    softBg: p(`palette-${B}-100`),
    softHoverBg: p(`palette-${B}-200`),
    softActiveColor: p(`palette-${B}-800`),
    softActiveBg: p(`palette-${B}-300`),
    softDisabledColor: p("palette-neutral-400"),
    softDisabledBg: p("palette-neutral-50"),
    solidColor: p("palette-common-white"),
    solidBg: p(`palette-${B}-500`),
    solidHoverBg: p(`palette-${B}-600`),
    solidActiveBg: p(`palette-${B}-700`),
    solidDisabledColor: p("palette-neutral-400"),
    solidDisabledBg: p("palette-neutral-100")
  }), b = (B) => ({
    plainColor: p(`palette-${B}-300`),
    plainHoverBg: p(`palette-${B}-800`),
    plainActiveBg: p(`palette-${B}-700`),
    plainDisabledColor: p("palette-neutral-500"),
    outlinedColor: p(`palette-${B}-200`),
    outlinedBorder: p(`palette-${B}-700`),
    outlinedHoverBg: p(`palette-${B}-800`),
    outlinedActiveBg: p(`palette-${B}-700`),
    outlinedDisabledColor: p("palette-neutral-500"),
    outlinedDisabledBorder: p("palette-neutral-800"),
    softColor: p(`palette-${B}-200`),
    softBg: p(`palette-${B}-800`),
    softHoverBg: p(`palette-${B}-700`),
    softActiveColor: p(`palette-${B}-100`),
    softActiveBg: p(`palette-${B}-600`),
    softDisabledColor: p("palette-neutral-500"),
    softDisabledBg: p("palette-neutral-800"),
    solidColor: p("palette-common-white"),
    solidBg: p(`palette-${B}-500`),
    solidHoverBg: p(`palette-${B}-600`),
    solidActiveBg: p(`palette-${B}-700`),
    solidDisabledColor: p("palette-neutral-500"),
    solidDisabledBg: p("palette-neutral-800")
  }), y = {
    palette: {
      mode: "light",
      primary: u({}, f.primary, v("primary")),
      neutral: u({}, f.neutral, v("neutral"), {
        plainColor: p("palette-neutral-700"),
        plainHoverColor: p("palette-neutral-900"),
        outlinedColor: p("palette-neutral-700")
      }),
      danger: u({}, f.danger, v("danger")),
      success: u({}, f.success, v("success")),
      warning: u({}, f.warning, v("warning")),
      common: {
        white: "#FFF",
        black: "#000"
      },
      text: {
        primary: p("palette-neutral-800"),
        secondary: p("palette-neutral-700"),
        tertiary: p("palette-neutral-600"),
        icon: p("palette-neutral-500")
      },
      background: {
        body: p("palette-common-white"),
        surface: p("palette-neutral-50"),
        popup: p("palette-common-white"),
        level1: p("palette-neutral-100"),
        level2: p("palette-neutral-200"),
        level3: p("palette-neutral-300"),
        tooltip: p("palette-neutral-500"),
        backdrop: `rgba(${c(
          "palette-neutral-darkChannel",
          Do(f.neutral[900])
          // should be the same index as in `attachColorChannels`
        )} / 0.25)`
      },
      divider: `rgba(${c(
        "palette-neutral-mainChannel",
        Do(f.neutral[500])
        // should be the same index as in `attachColorChannels`
      )} / 0.2)`,
      focusVisible: p("palette-primary-500")
    },
    shadowRing: "0 0 #000",
    shadowChannel: "21 21 21",
    shadowOpacity: "0.08"
  }, x = {
    palette: {
      mode: "dark",
      primary: u({}, f.primary, b("primary")),
      neutral: u({}, f.neutral, b("neutral"), {
        plainColor: p("palette-neutral-300"),
        plainHoverColor: p("palette-neutral-300")
      }),
      danger: u({}, f.danger, b("danger")),
      success: u({}, f.success, b("success")),
      warning: u({}, f.warning, b("warning")),
      common: {
        white: "#FFF",
        black: "#000"
      },
      text: {
        primary: p("palette-neutral-100"),
        secondary: p("palette-neutral-300"),
        tertiary: p("palette-neutral-400"),
        icon: p("palette-neutral-400")
      },
      background: {
        body: p("palette-common-black"),
        surface: p("palette-neutral-900"),
        popup: p("palette-common-black"),
        level1: p("palette-neutral-800"),
        level2: p("palette-neutral-700"),
        level3: p("palette-neutral-600"),
        tooltip: p("palette-neutral-600"),
        backdrop: `rgba(${c(
          "palette-neutral-darkChannel",
          Do(f.neutral[50])
          // should be the same index as in `attachColorChannels`
        )} / 0.25)`
      },
      divider: `rgba(${c(
        "palette-neutral-mainChannel",
        Do(f.neutral[500])
        // should be the same index as in `attachColorChannels`
      )} / 0.16)`,
      focusVisible: p("palette-primary-500")
    },
    shadowRing: "0 0 #000",
    shadowChannel: "0 0 0",
    shadowOpacity: "0.6"
  }, C = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"', S = u({
    body: `"Inter", ${c(`fontFamily-fallback, ${C}`)}`,
    display: `"Inter", ${c(`fontFamily-fallback, ${C}`)}`,
    code: "Source Code Pro,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace",
    fallback: C
  }, d.fontFamily), $ = u({
    sm: 300,
    // regular
    md: 500,
    // medium
    lg: 600,
    // semi-bold
    xl: 700
  }, d.fontWeight), R = u({
    xs: "0.75rem",
    // 12px
    sm: "0.875rem",
    // 14px
    md: "1rem",
    // 16px
    lg: "1.125rem",
    // 18px
    xl: "1.25rem",
    // 20px
    xl2: "1.5rem",
    // 24px
    xl3: "1.875rem",
    // 30px
    xl4: "2.25rem"
  }, d.fontSize), P = u({
    xs: "1.33334",
    // largest font sizes: h1, h2
    sm: "1.42858",
    // normal font sizes
    md: "1.5",
    // normal font sizes
    lg: "1.55556",
    // large font sizes for components
    xl: "1.66667"
  }, d.lineHeight), g = ((Y = (N = d.colorSchemes) == null ? void 0 : N.light) == null ? void 0 : Y.shadowRing) ?? y.shadowRing, k = ((re = (ee = d.colorSchemes) == null ? void 0 : ee.light) == null ? void 0 : re.shadowChannel) ?? y.shadowChannel, T = ((te = (Q = d.colorSchemes) == null ? void 0 : Q.light) == null ? void 0 : te.shadowOpacity) ?? y.shadowOpacity, j = {
    colorSchemes: {
      light: y,
      dark: x
    },
    fontSize: R,
    fontFamily: S,
    fontWeight: $,
    focus: {
      thickness: "2px",
      selector: `&.${we("", "focusVisible")}, &:focus-visible`,
      default: {
        outlineOffset: `var(--focus-outline-offset, ${c("focus-thickness", ((he = d.focus) == null ? void 0 : he.thickness) ?? "2px")})`,
        outline: `${c("focus-thickness", ((oe = d.focus) == null ? void 0 : oe.thickness) ?? "2px")} solid ${c("palette-focusVisible", f.primary[500])}`
      }
    },
    lineHeight: P,
    radius: {
      xs: "2px",
      sm: "6px",
      md: "8px",
      lg: "12px",
      xl: "16px"
    },
    shadow: {
      xs: `${c("shadowRing", g)}, 0px 1px 2px 0px rgba(${c("shadowChannel", k)} / ${c("shadowOpacity", T)})`,
      sm: `${c("shadowRing", g)}, 0px 1px 2px 0px rgba(${c("shadowChannel", k)} / ${c("shadowOpacity", T)}), 0px 2px 4px 0px rgba(${c("shadowChannel", k)} / ${c("shadowOpacity", T)})`,
      md: `${c("shadowRing", g)}, 0px 2px 8px -2px rgba(${c("shadowChannel", k)} / ${c("shadowOpacity", T)}), 0px 6px 12px -2px rgba(${c("shadowChannel", k)} / ${c("shadowOpacity", T)})`,
      lg: `${c("shadowRing", g)}, 0px 2px 8px -2px rgba(${c("shadowChannel", k)} / ${c("shadowOpacity", T)}), 0px 12px 16px -4px rgba(${c("shadowChannel", k)} / ${c("shadowOpacity", T)})`,
      xl: `${c("shadowRing", g)}, 0px 2px 8px -2px rgba(${c("shadowChannel", k)} / ${c("shadowOpacity", T)}), 0px 20px 24px -4px rgba(${c("shadowChannel", k)} / ${c("shadowOpacity", T)})`
    },
    zIndex: {
      badge: 1,
      table: 10,
      popup: 1e3,
      modal: 1300,
      snackbar: 1400,
      tooltip: 1500
    },
    typography: {
      h1: {
        fontFamily: c(`fontFamily-display, ${S.display}`),
        fontWeight: c(`fontWeight-xl, ${$.xl}`),
        fontSize: c(`fontSize-xl4, ${R.xl4}`),
        lineHeight: c(`lineHeight-xs, ${P.xs}`),
        letterSpacing: "-0.025em",
        color: c(`palette-text-primary, ${y.palette.text.primary}`)
      },
      h2: {
        fontFamily: c(`fontFamily-display, ${S.display}`),
        fontWeight: c(`fontWeight-xl, ${$.xl}`),
        fontSize: c(`fontSize-xl3, ${R.xl3}`),
        lineHeight: c(`lineHeight-xs, ${P.xs}`),
        letterSpacing: "-0.025em",
        color: c(`palette-text-primary, ${y.palette.text.primary}`)
      },
      h3: {
        fontFamily: c(`fontFamily-display, ${S.display}`),
        fontWeight: c(`fontWeight-lg, ${$.lg}`),
        fontSize: c(`fontSize-xl2, ${R.xl2}`),
        lineHeight: c(`lineHeight-xs, ${P.xs}`),
        letterSpacing: "-0.025em",
        color: c(`palette-text-primary, ${y.palette.text.primary}`)
      },
      h4: {
        fontFamily: c(`fontFamily-display, ${S.display}`),
        fontWeight: c(`fontWeight-lg, ${$.lg}`),
        fontSize: c(`fontSize-xl, ${R.xl}`),
        lineHeight: c(`lineHeight-md, ${P.md}`),
        letterSpacing: "-0.025em",
        color: c(`palette-text-primary, ${y.palette.text.primary}`)
      },
      "title-lg": {
        fontFamily: c(`fontFamily-body, ${S.body}`),
        fontWeight: c(`fontWeight-lg, ${$.lg}`),
        fontSize: c(`fontSize-lg, ${R.lg}`),
        lineHeight: c(`lineHeight-xs, ${P.xs}`),
        color: c(`palette-text-primary, ${y.palette.text.primary}`)
      },
      "title-md": {
        fontFamily: c(`fontFamily-body, ${S.body}`),
        fontWeight: c(`fontWeight-md, ${$.md}`),
        fontSize: c(`fontSize-md, ${R.md}`),
        lineHeight: c(`lineHeight-md, ${P.md}`),
        color: c(`palette-text-primary, ${y.palette.text.primary}`)
      },
      "title-sm": {
        fontFamily: c(`fontFamily-body, ${S.body}`),
        fontWeight: c(`fontWeight-md, ${$.md}`),
        fontSize: c(`fontSize-sm, ${R.sm}`),
        lineHeight: c(`lineHeight-sm, ${P.sm}`),
        color: c(`palette-text-primary, ${y.palette.text.primary}`)
      },
      "body-lg": {
        fontFamily: c(`fontFamily-body, ${S.body}`),
        fontSize: c(`fontSize-lg, ${R.lg}`),
        lineHeight: c(`lineHeight-md, ${P.md}`),
        color: c(`palette-text-secondary, ${y.palette.text.secondary}`)
      },
      "body-md": {
        fontFamily: c(`fontFamily-body, ${S.body}`),
        fontSize: c(`fontSize-md, ${R.md}`),
        lineHeight: c(`lineHeight-md, ${P.md}`),
        color: c(`palette-text-secondary, ${y.palette.text.secondary}`)
      },
      "body-sm": {
        fontFamily: c(`fontFamily-body, ${S.body}`),
        fontSize: c(`fontSize-sm, ${R.sm}`),
        lineHeight: c(`lineHeight-md, ${P.md}`),
        color: c(`palette-text-tertiary, ${y.palette.text.tertiary}`)
      },
      "body-xs": {
        fontFamily: c(`fontFamily-body, ${S.body}`),
        fontWeight: c(`fontWeight-md, ${$.md}`),
        fontSize: c(`fontSize-xs, ${R.xs}`),
        lineHeight: c(`lineHeight-md, ${P.md}`),
        color: c(`palette-text-tertiary, ${y.palette.text.tertiary}`)
      }
    }
  }, O = d ? Ht(j, d) : j, {
    colorSchemes: A
  } = O, D = U(O, fS);
  let M = u({
    colorSchemes: A,
    defaultColorScheme: "light"
  }, D, {
    breakpoints: Ju(r ?? {}),
    components: Ht({
      // TODO: find a way to abstract SvgIcon out of @mui/material
      MuiSvgIcon: {
        defaultProps: {
          fontSize: "xl2"
        },
        styleOverrides: {
          root: ({
            ownerState: B,
            theme: V
          }) => {
            var se;
            const K = B.instanceFontSize;
            return u({
              margin: "var(--Icon-margin)"
            }, B.fontSize && B.fontSize !== "inherit" && {
              fontSize: `var(--Icon-fontSize, ${V.vars.fontSize[B.fontSize]})`
            }, !B.htmlColor && u({
              color: `var(--Icon-color, ${M.vars.palette.text.icon})`
            }, B.color && B.color !== "inherit" && V.vars.palette[B.color] && {
              color: `rgba(${(se = V.vars.palette[B.color]) == null ? void 0 : se.mainChannel} / 1)`
            }), K && K !== "inherit" && {
              "--Icon-fontSize": V.vars.fontSize[K]
            });
          }
        }
      }
    }, i),
    cssVarPrefix: o,
    getCssVar: c,
    spacing: mp(n)
  });
  M = qu(M);
  function E(B, V) {
    Object.keys(V).forEach((K) => {
      const se = {
        main: "500",
        light: "200",
        dark: "700"
      };
      B === "dark" && (se.main = 400), !V[K].mainChannel && V[K][se.main] && (V[K].mainChannel = Do(V[K][se.main])), !V[K].lightChannel && V[K][se.light] && (V[K].lightChannel = Do(V[K][se.light])), !V[K].darkChannel && V[K][se.dark] && (V[K].darkChannel = Do(V[K][se.dark]));
    });
  }
  Object.entries(M.colorSchemes).forEach(([B, V]) => {
    E(B, V.palette);
  });
  const w = {
    prefix: o,
    shouldSkipGeneratingVar: s,
    getSelector: l || ((B) => M.defaultColorScheme === B ? `${M.colorSchemeSelector}, [${M.attribute}="${B}"]` : B ? `[${M.attribute}="${B}"]` : M.colorSchemeSelector)
  }, {
    vars: I,
    generateThemeVars: z,
    generateStyleSheets: _
  } = eS(M, w);
  M.attribute = "data-joy-color-scheme", M.colorSchemeSelector = ":root", M.vars = I, M.generateThemeVars = z, M.generateStyleSheets = _, M.generateSpacing = function() {
    return Qu(n, Yi(this));
  }, M.spacing = M.generateSpacing(), M.unstable_sxConfig = u({}, cS, e == null ? void 0 : e.unstable_sxConfig), M.unstable_sx = function(V) {
    return gn({
      sx: V,
      theme: this
    });
  }, M.getColorSchemeSelector = (B) => `[${M.attribute}="${B}"] &`;
  const L = {
    getCssVar: c,
    palette: M.colorSchemes.light.palette
  };
  return M.variants = Ht({
    plain: vt("plain", L),
    plainHover: vt("plainHover", L),
    plainActive: vt("plainActive", L),
    plainDisabled: vt("plainDisabled", L),
    outlined: vt("outlined", L),
    outlinedHover: vt("outlinedHover", L),
    outlinedActive: vt("outlinedActive", L),
    outlinedDisabled: vt("outlinedDisabled", L),
    soft: vt("soft", L),
    softHover: vt("softHover", L),
    softActive: vt("softActive", L),
    softDisabled: vt("softDisabled", L),
    solid: vt("solid", L),
    solidHover: vt("solidHover", L),
    solidActive: vt("solidActive", L),
    solidDisabled: vt("solidDisabled", L)
  }, a), Object.entries(M.colorSchemes[M.defaultColorScheme]).forEach(([B, V]) => {
    M[B] = V;
  }), M.palette = u({}, M.colorSchemes.light.palette, {
    colorScheme: "light"
  }), M.shouldSkipGeneratingVar = s, M.applyStyles = ep, M;
}
const na = hp(), {
  CssVarsProvider: hS,
  useColorScheme: oT,
  getInitColorSchemeScript: rT
} = q1({
  themeId: Ji,
  theme: na,
  attribute: "data-joy-color-scheme",
  modeStorageKey: "joy-mode",
  colorSchemeStorageKey: "joy-color-scheme",
  defaultColorScheme: {
    light: "light",
    dark: "dark"
  }
}), G = ap({
  defaultTheme: na,
  themeId: Ji
});
function Te({
  props: e,
  name: t
}) {
  return lp({
    props: e,
    name: t,
    defaultTheme: u({}, na, {
      components: {}
    }),
    themeId: Ji
  });
}
function gS(e) {
  return typeof e == "string";
}
function gp(e, t, o) {
  return e === void 0 || gS(e) ? t : u({}, t, {
    ownerState: u({}, t.ownerState, o)
  });
}
function Vc(e, t, o = (r, n) => r === n) {
  return e.length === t.length && e.every((r, n) => o(r, t[n]));
}
const vS = {
  disableDefaultClasses: !1
}, bS = /* @__PURE__ */ h.createContext(vS);
function yS(e) {
  const {
    disableDefaultClasses: t
  } = h.useContext(bS);
  return (o) => t ? "" : e(o);
}
function Dt(e, t = []) {
  if (e === void 0)
    return {};
  const o = {};
  return Object.keys(e).filter((r) => r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)).forEach((r) => {
    o[r] = e[r];
  }), o;
}
function vp(e, t, o) {
  return typeof e == "function" ? e(t, o) : e;
}
function xS(e) {
  const {
    rootElementName: t = "",
    componentName: o
  } = e, [r, n] = h.useState(t.toUpperCase()), i = h.useCallback((a) => {
    n((a == null ? void 0 : a.tagName) ?? "");
  }, []);
  return [r, i];
}
function Wc(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((o) => !(o.match(/^on[A-Z]/) && typeof e[o] == "function")).forEach((o) => {
    t[o] = e[o];
  }), t;
}
function bp(e) {
  const {
    getSlotProps: t,
    additionalProps: o,
    externalSlotProps: r,
    externalForwardedProps: n,
    className: i
  } = e;
  if (!t) {
    const v = fe(o == null ? void 0 : o.className, i, n == null ? void 0 : n.className, r == null ? void 0 : r.className), b = u({}, o == null ? void 0 : o.style, n == null ? void 0 : n.style, r == null ? void 0 : r.style), y = u({}, o, n, r);
    return v.length > 0 && (y.className = v), Object.keys(b).length > 0 && (y.style = b), {
      props: y,
      internalRef: void 0
    };
  }
  const a = Dt(u({}, n, r)), s = Wc(r), l = Wc(n), d = t(a), c = fe(d == null ? void 0 : d.className, o == null ? void 0 : o.className, i, n == null ? void 0 : n.className, r == null ? void 0 : r.className), f = u({}, d == null ? void 0 : d.style, o == null ? void 0 : o.style, n == null ? void 0 : n.style, r == null ? void 0 : r.style), p = u({}, d, o, l, s);
  return c.length > 0 && (p.className = c), Object.keys(f).length > 0 && (p.style = f), {
    props: p,
    internalRef: d.ref
  };
}
const CS = ["elementType", "externalSlotProps", "ownerState", "skipResolvingSlotProps"];
function SS(e) {
  var f;
  const {
    elementType: t,
    externalSlotProps: o,
    ownerState: r,
    skipResolvingSlotProps: n = !1
  } = e, i = U(e, CS), a = n ? {} : vp(o, r), {
    props: s,
    internalRef: l
  } = bp(u({}, i, {
    externalSlotProps: a
  })), d = Ze(l, a == null ? void 0 : a.ref, (f = e.additionalProps) == null ? void 0 : f.ref);
  return gp(t, u({}, s, {
    ref: d
  }), r);
}
const yp = "base";
function $S(e) {
  return `${yp}--${e}`;
}
function kS(e, t) {
  return `${yp}-${e}-${t}`;
}
function xp(e, t) {
  const o = np[t];
  return o ? $S(o) : kS(e, t);
}
function IS(e, t) {
  const o = {};
  return t.forEach((r) => {
    o[r] = xp(e, r);
  }), o;
}
function ko(e = {}) {
  const {
    disabled: t = !1,
    focusableWhenDisabled: o,
    href: r,
    rootRef: n,
    tabIndex: i,
    to: a,
    type: s,
    rootElementName: l
  } = e, d = h.useRef(), [c, f] = h.useState(!1), {
    isFocusVisibleRef: p,
    onFocus: v,
    onBlur: b,
    ref: y
  } = dp(), [x, C] = h.useState(!1);
  t && !o && x && C(!1), h.useEffect(() => {
    p.current = x;
  }, [x, p]);
  const [S, $] = xS({
    rootElementName: l ?? (r || a ? "a" : void 0),
    componentName: "Button"
  }), R = (w) => (I) => {
    var z;
    x && I.preventDefault(), (z = w.onMouseLeave) == null || z.call(w, I);
  }, P = (w) => (I) => {
    var z;
    b(I), p.current === !1 && C(!1), (z = w.onBlur) == null || z.call(w, I);
  }, g = (w) => (I) => {
    var z, _;
    d.current || (d.current = I.currentTarget), v(I), p.current === !0 && (C(!0), (z = w.onFocusVisible) == null || z.call(w, I)), (_ = w.onFocus) == null || _.call(w, I);
  }, k = () => {
    const w = d.current;
    return S === "BUTTON" || S === "INPUT" && ["button", "submit", "reset"].includes(w == null ? void 0 : w.type) || S === "A" && (w == null ? void 0 : w.href);
  }, T = (w) => (I) => {
    var z;
    t || (z = w.onClick) == null || z.call(w, I);
  }, j = (w) => (I) => {
    var z;
    t || (f(!0), document.addEventListener("mouseup", () => {
      f(!1);
    }, {
      once: !0
    })), (z = w.onMouseDown) == null || z.call(w, I);
  }, O = (w) => (I) => {
    var z, _;
    (z = w.onKeyDown) == null || z.call(w, I), !I.defaultMuiPrevented && (I.target === I.currentTarget && !k() && I.key === " " && I.preventDefault(), I.target === I.currentTarget && I.key === " " && !t && f(!0), I.target === I.currentTarget && !k() && I.key === "Enter" && !t && ((_ = w.onClick) == null || _.call(w, I), I.preventDefault()));
  }, A = (w) => (I) => {
    var z, _;
    I.target === I.currentTarget && f(!1), (z = w.onKeyUp) == null || z.call(w, I), I.target === I.currentTarget && !k() && !t && I.key === " " && !I.defaultMuiPrevented && ((_ = w.onClick) == null || _.call(w, I));
  }, D = Ze($, n, y, d), M = {};
  return i !== void 0 && (M.tabIndex = i), S === "BUTTON" ? (M.type = s ?? "button", o ? M["aria-disabled"] = t : M.disabled = t) : S === "INPUT" ? s && ["button", "submit", "reset"].includes(s) && (o ? M["aria-disabled"] = t : M.disabled = t) : S !== "" && (!r && !a && (M.role = "button", M.tabIndex = i ?? 0), t && (M["aria-disabled"] = t, M.tabIndex = o ? i ?? 0 : -1)), {
    getRootProps: (w = {}) => {
      const I = u({}, Dt(e), Dt(w)), z = u({
        type: s
      }, I, M, w, {
        onBlur: P(I),
        onClick: T(I),
        onFocus: g(I),
        onKeyDown: O(I),
        onKeyUp: A(I),
        onMouseDown: j(I),
        onMouseLeave: R(I),
        ref: D
      });
      return delete z.onFocusVisible, z;
    },
    focusVisible: x,
    setFocusVisible: C,
    active: c,
    rootRef: D
  };
}
function RS(e, t) {
  return e === t;
}
const _a = {}, Uc = () => {
};
function as(e, t) {
  const o = u({}, e);
  return Object.keys(t).forEach((r) => {
    t[r] !== void 0 && (o[r] = t[r]);
  }), o;
}
function PS(e) {
  const {
    nextState: t,
    initialState: o,
    stateComparers: r,
    onStateChange: n,
    controlledProps: i,
    lastActionRef: a
  } = e, s = h.useRef(o);
  h.useEffect(() => {
    if (a.current === null)
      return;
    const l = as(s.current, i);
    Object.keys(t).forEach((d) => {
      const c = r[d] ?? RS, f = t[d], p = l[d];
      (p == null && f != null || p != null && f == null || p != null && f != null && !c(f, p)) && (n == null || n(a.current.event ?? null, d, f, a.current.type ?? "", t));
    }), s.current = t, a.current = null;
  }, [s, t, a, n, r, i]);
}
function wS(e) {
  const t = h.useRef(null), {
    reducer: o,
    initialState: r,
    controlledProps: n = _a,
    stateComparers: i = _a,
    onStateChange: a = Uc,
    actionContext: s,
    componentName: l = ""
  } = e;
  h.useRef(n);
  const d = h.useCallback((v, b) => {
    t.current = b;
    const y = as(v, n);
    return o(y, b);
  }, [n, o]), [c, f] = h.useReducer(d, r), p = h.useCallback((v) => {
    f(u({}, v, {
      context: s
    }));
  }, [s]);
  return PS({
    nextState: c,
    initialState: r,
    stateComparers: i ?? _a,
    onStateChange: a ?? Uc,
    controlledProps: n,
    lastActionRef: t
  }), [as(c, n), p];
}
const TS = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function DS(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function ES(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let o = t(`[name="${e.name}"]:checked`);
  return o || (o = t(`[name="${e.name}"]`)), o !== e;
}
function zS(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || ES(e));
}
function OS(e) {
  const t = [], o = [];
  return Array.from(e.querySelectorAll(TS)).forEach((r, n) => {
    const i = DS(r);
    i === -1 || !zS(r) || (i === 0 ? t.push(r) : o.push({
      documentOrder: n,
      tabIndex: i,
      node: r
    }));
  }), o.sort((r, n) => r.tabIndex === n.tabIndex ? r.documentOrder - n.documentOrder : r.tabIndex - n.tabIndex).map((r) => r.node).concat(t);
}
function MS() {
  return !0;
}
function AS(e) {
  const {
    children: t,
    disableAutoFocus: o = !1,
    disableEnforceFocus: r = !1,
    disableRestoreFocus: n = !1,
    getTabbable: i = OS,
    isEnabled: a = MS,
    open: s
  } = e, l = h.useRef(!1), d = h.useRef(null), c = h.useRef(null), f = h.useRef(null), p = h.useRef(null), v = h.useRef(!1), b = h.useRef(null), y = Ze(t.ref, b), x = h.useRef(null);
  h.useEffect(() => {
    !s || !b.current || (v.current = !o);
  }, [o, s]), h.useEffect(() => {
    if (!s || !b.current)
      return;
    const $ = ao(b.current);
    return b.current.contains($.activeElement) || (b.current.hasAttribute("tabIndex") || b.current.setAttribute("tabIndex", "-1"), v.current && b.current.focus()), () => {
      n || (f.current && f.current.focus && (l.current = !0, f.current.focus()), f.current = null);
    };
  }, [s]), h.useEffect(() => {
    if (!s || !b.current)
      return;
    const $ = ao(b.current), R = (k) => {
      x.current = k, !(r || !a() || k.key !== "Tab") && $.activeElement === b.current && k.shiftKey && (l.current = !0, c.current && c.current.focus());
    }, P = () => {
      var j, O;
      const k = b.current;
      if (k === null)
        return;
      if (!$.hasFocus() || !a() || l.current) {
        l.current = !1;
        return;
      }
      if (k.contains($.activeElement) || r && $.activeElement !== d.current && $.activeElement !== c.current)
        return;
      if ($.activeElement !== p.current)
        p.current = null;
      else if (p.current !== null)
        return;
      if (!v.current)
        return;
      let T = [];
      if (($.activeElement === d.current || $.activeElement === c.current) && (T = i(b.current)), T.length > 0) {
        const A = !!((j = x.current) != null && j.shiftKey && ((O = x.current) == null ? void 0 : O.key) === "Tab"), D = T[0], M = T[T.length - 1];
        typeof D != "string" && typeof M != "string" && (A ? M.focus() : D.focus());
      } else
        k.focus();
    };
    $.addEventListener("focusin", P), $.addEventListener("keydown", R, !0);
    const g = setInterval(() => {
      $.activeElement && $.activeElement.tagName === "BODY" && P();
    }, 50);
    return () => {
      clearInterval(g), $.removeEventListener("focusin", P), $.removeEventListener("keydown", R, !0);
    };
  }, [o, r, n, a, s, i]);
  const C = ($) => {
    f.current === null && (f.current = $.relatedTarget), v.current = !0, p.current = $.target;
    const R = t.props.onFocus;
    R && R($);
  }, S = ($) => {
    f.current === null && (f.current = $.relatedTarget), v.current = !0;
  };
  return /* @__PURE__ */ m.jsxs(h.Fragment, {
    children: [/* @__PURE__ */ m.jsx("div", {
      tabIndex: s ? 0 : -1,
      onFocus: S,
      ref: d,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ h.cloneElement(t, {
      ref: y,
      onFocus: C
    }), /* @__PURE__ */ m.jsx("div", {
      tabIndex: s ? 0 : -1,
      onFocus: S,
      ref: c,
      "data-testid": "sentinelEnd"
    })]
  });
}
const jS = /* @__PURE__ */ h.createContext(void 0);
function BS() {
  return h.useContext(jS);
}
function _S(e = {}) {
  const {
    defaultValue: t,
    disabled: o = !1,
    error: r = !1,
    onBlur: n,
    onChange: i,
    onFocus: a,
    required: s = !1,
    value: l,
    inputRef: d
  } = e, c = BS();
  let f, p, v, b, y;
  c ? (f = void 0, p = c.disabled ?? !1, v = c.error ?? !1, b = c.required ?? !1, y = c.value) : (f = t, p = o, v = r, b = s, y = l);
  const {
    current: x
  } = h.useRef(y != null), C = h.useCallback((D) => {
  }, []), S = h.useRef(null), $ = Ze(S, d, C), [R, P] = h.useState(!1);
  h.useEffect(() => {
    !c && p && R && (P(!1), n == null || n());
  }, [c, p, R, n]);
  const g = (D) => (M) => {
    var E, w;
    if (c != null && c.disabled) {
      M.stopPropagation();
      return;
    }
    (E = D.onFocus) == null || E.call(D, M), c && c.onFocus ? (w = c == null ? void 0 : c.onFocus) == null || w.call(c) : P(!0);
  }, k = (D) => (M) => {
    var E;
    (E = D.onBlur) == null || E.call(D, M), c && c.onBlur ? c.onBlur() : P(!1);
  }, T = (D) => (M, ...E) => {
    var w, I;
    if (!x && (M.target || S.current) == null)
      throw new Error(on(17));
    (w = c == null ? void 0 : c.onChange) == null || w.call(c, M), (I = D.onChange) == null || I.call(D, M, ...E);
  }, j = (D) => (M) => {
    var E;
    S.current && M.currentTarget === M.target && S.current.focus(), (E = D.onClick) == null || E.call(D, M);
  };
  return {
    disabled: p,
    error: v,
    focused: R,
    formControlContext: c,
    getInputProps: (D = {}) => {
      const E = u({}, {
        onBlur: n,
        onChange: i,
        onFocus: a
      }, Dt(D)), w = u({}, E, {
        onBlur: k(E),
        onChange: T(E),
        onFocus: g(E)
      });
      return u({}, w, {
        "aria-invalid": v || void 0,
        defaultValue: f,
        value: y,
        required: b,
        disabled: p
      }, D, {
        ref: $
      }, w);
    },
    getRootProps: (D = {}) => {
      const M = Dt(e, ["onBlur", "onChange", "onFocus"]), E = u({}, M, Dt(D));
      return u({}, D, E, {
        onClick: j(E)
      });
    },
    inputRef: $,
    required: b,
    value: y
  };
}
const Xe = {
  blur: "list:blur",
  focus: "list:focus",
  itemClick: "list:itemClick",
  itemHover: "list:itemHover",
  itemsChange: "list:itemsChange",
  keyDown: "list:keyDown",
  resetHighlight: "list:resetHighlight",
  highlightLast: "list:highlightLast",
  textNavigation: "list:textNavigation",
  clearSelection: "list:clearSelection"
};
function LS(e, t, o, r, n, i) {
  if (o.length === 0 || !r && o.every((s, l) => n(s, l)))
    return -1;
  let a = e;
  for (; ; ) {
    if (!i && t === "next" && a === o.length || !i && t === "previous" && a === -1)
      return -1;
    if (r ? !1 : n(o[a], a))
      a += t === "next" ? 1 : -1, i && (a = (a + o.length) % o.length);
    else
      return a;
  }
}
function ut(e, t, o) {
  const {
    items: r,
    isItemDisabled: n,
    disableListWrap: i,
    disabledItemsFocusable: a,
    itemComparer: s,
    focusManagement: l
  } = o, d = l === "DOM" ? 0 : -1, c = r.length - 1, f = e == null ? -1 : r.findIndex((x) => s(x, e));
  let p, v, b = !i;
  switch (t) {
    case "reset":
      if (d === -1)
        return null;
      p = 0, v = "next", b = !1;
      break;
    case "start":
      p = 0, v = "next", b = !1;
      break;
    case "end":
      p = c, v = "previous", b = !1;
      break;
    default: {
      const x = f + t;
      x < 0 ? !b && f !== -1 || Math.abs(t) > 1 ? (p = 0, v = "next") : (p = c, v = "previous") : x > c ? !b || Math.abs(t) > 1 ? (p = c, v = "previous") : (p = 0, v = "next") : (p = x, v = t >= 0 ? "next" : "previous");
    }
  }
  const y = LS(p, v, r, a, n, b);
  return y === -1 && e !== null && !n(e, f) ? e : r[y] ?? null;
}
function FS(e, t, o, r) {
  return o === "none" ? [] : o === "single" ? r(t[0], e) ? t : [e] : t.some((n) => r(n, e)) ? t.filter((n) => !r(n, e)) : [...t, e];
}
function al(e, t, o) {
  const {
    itemComparer: r,
    isItemDisabled: n,
    selectionMode: i,
    items: a
  } = o, {
    selectedValues: s
  } = t, l = a.findIndex((c) => r(e, c));
  if (n(e, l))
    return t;
  const d = FS(e, s, i, r);
  return u({}, t, {
    selectedValues: d,
    highlightedValue: e
  });
}
function NS(e, t, o) {
  const r = t.highlightedValue, {
    orientation: n,
    pageSize: i
  } = o;
  switch (e) {
    case "Home":
      return u({}, t, {
        highlightedValue: ut(r, "start", o)
      });
    case "End":
      return u({}, t, {
        highlightedValue: ut(r, "end", o)
      });
    case "PageUp":
      return u({}, t, {
        highlightedValue: ut(r, -i, o)
      });
    case "PageDown":
      return u({}, t, {
        highlightedValue: ut(r, i, o)
      });
    case "ArrowUp":
      if (n !== "vertical")
        break;
      return u({}, t, {
        highlightedValue: ut(r, -1, o)
      });
    case "ArrowDown":
      if (n !== "vertical")
        break;
      return u({}, t, {
        highlightedValue: ut(r, 1, o)
      });
    case "ArrowLeft": {
      if (n === "vertical")
        break;
      return u({}, t, {
        highlightedValue: ut(r, n === "horizontal-ltr" ? -1 : 1, o)
      });
    }
    case "ArrowRight": {
      if (n === "vertical")
        break;
      return u({}, t, {
        highlightedValue: ut(r, n === "horizontal-ltr" ? 1 : -1, o)
      });
    }
    case "Enter":
    case " ":
      return t.highlightedValue === null ? t : al(t.highlightedValue, t, o);
  }
  return t;
}
function HS(e, t) {
  return t.focusManagement === "DOM" ? e : u({}, e, {
    highlightedValue: null
  });
}
function VS(e, t, o) {
  var n;
  const r = (n = o(e)) == null ? void 0 : n.trim().toLowerCase();
  return !r || r.length === 0 ? !1 : r.indexOf(t) === 0;
}
function WS(e, t, o) {
  const {
    items: r,
    isItemDisabled: n,
    disabledItemsFocusable: i,
    getItemAsString: a
  } = o, s = t.length > 1;
  let l = s ? e.highlightedValue : ut(e.highlightedValue, 1, o);
  for (let d = 0; d < r.length; d += 1) {
    if (!l || !s && e.highlightedValue === l)
      return e;
    if (VS(l, t, a) && (!n(l, r.indexOf(l)) || i))
      return u({}, e, {
        highlightedValue: l
      });
    l = ut(l, 1, o);
  }
  return e;
}
function US(e, t, o, r) {
  const {
    itemComparer: n,
    focusManagement: i
  } = r;
  let a = null;
  o.highlightedValue != null ? a = e.find((d) => n(d, o.highlightedValue)) ?? null : i === "DOM" && t.length === 0 && (a = ut(null, "reset", r));
  const l = (o.selectedValues ?? []).filter((d) => e.some((c) => n(c, d)));
  return u({}, o, {
    highlightedValue: a,
    selectedValues: l
  });
}
function GS(e, t) {
  return u({}, e, {
    highlightedValue: ut(null, "reset", t)
  });
}
function KS(e, t) {
  return u({}, e, {
    highlightedValue: ut(null, "end", t)
  });
}
function JS(e, t) {
  return u({}, e, {
    selectedValues: [],
    highlightedValue: ut(null, "reset", t)
  });
}
function Cp(e, t) {
  const {
    type: o,
    context: r
  } = t;
  switch (o) {
    case Xe.keyDown:
      return NS(t.key, e, r);
    case Xe.itemClick:
      return al(t.item, e, r);
    case Xe.blur:
      return HS(e, r);
    case Xe.textNavigation:
      return WS(e, t.searchString, r);
    case Xe.itemsChange:
      return US(t.items, t.previousItems, e, r);
    case Xe.resetHighlight:
      return GS(e, r);
    case Xe.highlightLast:
      return KS(e, r);
    case Xe.clearSelection:
      return JS(e, r);
    default:
      return e;
  }
}
const qS = 500;
function YS(e) {
  const t = h.useRef({
    searchString: "",
    lastTime: null
  });
  return h.useCallback((o) => {
    if (o.key.length === 1 && o.key !== " ") {
      const r = t.current, n = o.key.toLowerCase(), i = performance.now();
      r.searchString.length > 0 && r.lastTime && i - r.lastTime > qS ? r.searchString = n : (r.searchString.length !== 1 || n !== r.searchString) && (r.searchString += n), r.lastTime = i, e(r.searchString, o);
    }
  }, [e]);
}
const Gc = {}, XS = () => {
}, ZS = (e, t) => e === t, QS = () => !1, e$ = (e) => typeof e == "string" ? e : String(e), t$ = () => ({
  highlightedValue: null,
  selectedValues: []
});
function o$(e) {
  const {
    controlledProps: t = Gc,
    disabledItemsFocusable: o = !1,
    disableListWrap: r = !1,
    focusManagement: n = "activeDescendant",
    getInitialState: i = t$,
    getItemDomElement: a,
    getItemId: s,
    isItemDisabled: l = QS,
    rootRef: d,
    onStateChange: c = XS,
    items: f,
    itemComparer: p = ZS,
    getItemAsString: v = e$,
    onChange: b,
    onHighlightChange: y,
    onItemsChange: x,
    orientation: C = "vertical",
    pageSize: S = 5,
    reducerActionContext: $ = Gc,
    selectionMode: R = "single",
    stateReducer: P,
    componentName: g = "useList"
  } = e, k = h.useRef(null), T = Ze(d, k), j = h.useCallback((oe, B, V) => {
    var K;
    y == null || y(oe, B, V), n === "DOM" && B != null && (V === Xe.itemClick || V === Xe.keyDown || V === Xe.textNavigation) && ((K = a == null ? void 0 : a(B)) == null || K.focus());
  }, [a, y, n]), O = h.useMemo(() => ({
    highlightedValue: p,
    selectedValues: (oe, B) => Vc(oe, B, p)
  }), [p]), A = h.useCallback((oe, B, V, K, se) => {
    switch (c == null || c(oe, B, V, K, se), B) {
      case "highlightedValue":
        j(oe, V, K);
        break;
      case "selectedValues":
        b == null || b(oe, V, K);
        break;
    }
  }, [j, b, c]), D = h.useMemo(() => ({
    disabledItemsFocusable: o,
    disableListWrap: r,
    focusManagement: n,
    isItemDisabled: l,
    itemComparer: p,
    items: f,
    getItemAsString: v,
    onHighlightChange: j,
    orientation: C,
    pageSize: S,
    selectionMode: R,
    stateComparers: O
  }), [o, r, n, l, p, f, v, j, C, S, R, O]), M = i(), E = P ?? Cp, w = h.useMemo(() => u({}, $, D), [$, D]), [I, z] = wS({
    reducer: E,
    actionContext: w,
    initialState: M,
    controlledProps: t,
    stateComparers: O,
    onStateChange: A,
    componentName: g
  }), {
    highlightedValue: _,
    selectedValues: L
  } = I, N = YS((oe, B) => z({
    type: Xe.textNavigation,
    event: B,
    searchString: oe
  })), Y = h.useRef([]);
  h.useEffect(() => {
    Vc(Y.current, f, p) || (z({
      type: Xe.itemsChange,
      event: null,
      items: f,
      previousItems: Y.current
    }), Y.current = f, x == null || x(f));
  }, [f, p, z, x]);
  const ee = (oe) => (B) => {
    var K;
    if ((K = oe.onKeyDown) == null || K.call(oe, B), B.defaultMuiPrevented)
      return;
    const V = ["Home", "End", "PageUp", "PageDown"];
    C === "vertical" ? V.push("ArrowUp", "ArrowDown") : V.push("ArrowLeft", "ArrowRight"), n === "activeDescendant" && V.push(" ", "Enter"), V.includes(B.key) && B.preventDefault(), z({
      type: Xe.keyDown,
      key: B.key,
      event: B
    }), N(B);
  }, re = (oe) => (B) => {
    var V, K;
    (V = oe.onBlur) == null || V.call(oe, B), !B.defaultMuiPrevented && ((K = k.current) != null && K.contains(B.relatedTarget) || z({
      type: Xe.blur,
      event: B
    }));
  }, Q = (oe = {}) => {
    const B = Dt(oe);
    return u({}, oe, {
      "aria-activedescendant": n === "activeDescendant" && _ != null ? s(_) : void 0,
      tabIndex: n === "DOM" ? -1 : 0,
      ref: T
    }, B, {
      onBlur: re(B),
      onKeyDown: ee(B)
    });
  }, te = h.useCallback((oe) => {
    const B = (L ?? []).some((se) => se != null && p(oe, se)), V = _ != null && p(oe, _);
    return {
      focusable: n === "DOM",
      highlighted: V,
      selected: B
    };
  }, [p, L, _, n]), he = h.useMemo(() => ({
    dispatch: z,
    getItemState: te
  }), [z, te]);
  return h.useDebugValue({
    state: I
  }), {
    contextValue: he,
    dispatch: z,
    getRootProps: Q,
    rootRef: T,
    state: I
  };
}
const ia = /* @__PURE__ */ h.createContext(null);
function r$(e) {
  const {
    handlePointerOverEvents: t = !1,
    item: o
  } = e, r = h.useContext(ia);
  if (!r)
    throw new Error("useListItem must be used within a ListProvider");
  const {
    dispatch: n,
    getItemState: i
  } = r, {
    highlighted: a,
    selected: s,
    focusable: l
  } = i(o), d = h.useCallback((v) => (b) => {
    var y;
    (y = v.onClick) == null || y.call(v, b), !b.defaultPrevented && n({
      type: Xe.itemClick,
      item: o,
      event: b
    });
  }, [n, o]), c = h.useCallback((v) => (b) => {
    var y;
    (y = v.onMouseOver) == null || y.call(v, b), !b.defaultPrevented && n({
      type: Xe.itemHover,
      item: o,
      event: b
    });
  }, [n, o]);
  let f;
  return l && (f = a ? 0 : -1), {
    getRootProps: (v = {}) => {
      const b = Dt(v);
      return u({}, v, {
        onClick: d(b),
        onPointerOver: t ? c(b) : void 0,
        tabIndex: f
      });
    },
    highlighted: a,
    selected: s
  };
}
const Sp = /* @__PURE__ */ h.createContext(null);
function n$(e) {
  const t = Array.from(e.keys()).map((o) => {
    const r = e.get(o);
    return {
      key: o,
      subitem: r
    };
  });
  return t.sort((o, r) => {
    const n = o.subitem.ref.current, i = r.subitem.ref.current;
    return n === null || i === null || n === i ? 0 : n.compareDocumentPosition(i) & Node.DOCUMENT_POSITION_PRECEDING ? 1 : -1;
  }), new Map(t.map((o) => [o.key, o.subitem]));
}
function i$() {
  const [e, t] = h.useState(/* @__PURE__ */ new Map()), o = h.useRef(/* @__PURE__ */ new Set()), r = h.useCallback(function(d) {
    o.current.delete(d), t((c) => {
      const f = new Map(c);
      return f.delete(d), f;
    });
  }, []), n = h.useCallback(function(d, c) {
    let f;
    return typeof d == "function" ? f = d(o.current) : f = d, o.current.add(f), t((p) => {
      const v = new Map(p);
      return v.set(f, c), v;
    }), {
      id: f,
      deregister: () => r(f)
    };
  }, [r]), i = h.useMemo(() => n$(e), [e]), a = h.useCallback(function(d) {
    return Array.from(i.keys()).indexOf(d);
  }, [i]);
  return {
    contextValue: h.useMemo(() => ({
      getItemIndex: a,
      registerItem: n,
      totalSubitemCount: e.size
    }), [a, n, e.size]),
    subitems: i
  };
}
function a$(e, t) {
  const o = h.useContext(Sp);
  if (o === null)
    throw new Error("useCompoundItem must be used within a useCompoundParent");
  const {
    registerItem: r
  } = o, [n, i] = h.useState(typeof e == "function" ? void 0 : e);
  return Ho(() => {
    const {
      id: a,
      deregister: s
    } = r(e, t);
    return i(a), s;
  }, [r, t, e]), {
    id: n,
    index: n !== void 0 ? o.getItemIndex(n) : -1,
    totalItemCount: o.totalSubitemCount
  };
}
function ii(e, t) {
  return function(r = {}) {
    const n = u({}, r, e(r));
    return u({}, n, t(n));
  };
}
function s$(e) {
  return typeof e == "function" ? e() : e;
}
const $p = /* @__PURE__ */ h.forwardRef(function(t, o) {
  const {
    children: r,
    container: n,
    disablePortal: i = !1
  } = t, [a, s] = h.useState(null), l = Ze(/* @__PURE__ */ h.isValidElement(r) ? r.ref : null, o);
  if (Ho(() => {
    i || s(s$(n) || document.body);
  }, [n, i]), Ho(() => {
    if (a && !i)
      return ni(o, a), () => {
        ni(o, null);
      };
  }, [o, a, i]), i) {
    if (/* @__PURE__ */ h.isValidElement(r)) {
      const d = {
        ref: l
      };
      return /* @__PURE__ */ h.cloneElement(r, d);
    }
    return /* @__PURE__ */ m.jsx(h.Fragment, {
      children: r
    });
  }
  return /* @__PURE__ */ m.jsx(h.Fragment, {
    children: a && /* @__PURE__ */ gd.createPortal(r, a)
  });
});
function l$(e) {
  const t = ao(e);
  return t.body === e ? el(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function Gr(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function Kc(e) {
  return parseInt(el(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function c$(e) {
  const o = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].indexOf(e.tagName) !== -1, r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return o || r;
}
function Jc(e, t, o, r, n) {
  const i = [t, o, ...r];
  [].forEach.call(e.children, (a) => {
    const s = i.indexOf(a) === -1, l = !c$(a);
    s && l && Gr(a, n);
  });
}
function La(e, t) {
  let o = -1;
  return e.some((r, n) => t(r) ? (o = n, !0) : !1), o;
}
function d$(e, t) {
  const o = [], r = e.container;
  if (!t.disableScrollLock) {
    if (l$(r)) {
      const a = O1(ao(r));
      o.push({
        value: r.style.paddingRight,
        property: "padding-right",
        el: r
      }), r.style.paddingRight = `${Kc(r) + a}px`;
      const s = ao(r).querySelectorAll(".mui-fixed");
      [].forEach.call(s, (l) => {
        o.push({
          value: l.style.paddingRight,
          property: "padding-right",
          el: l
        }), l.style.paddingRight = `${Kc(l) + a}px`;
      });
    }
    let i;
    if (r.parentNode instanceof DocumentFragment)
      i = ao(r).body;
    else {
      const a = r.parentElement, s = el(r);
      i = (a == null ? void 0 : a.nodeName) === "HTML" && s.getComputedStyle(a).overflowY === "scroll" ? a : r;
    }
    o.push({
      value: i.style.overflow,
      property: "overflow",
      el: i
    }, {
      value: i.style.overflowX,
      property: "overflow-x",
      el: i
    }, {
      value: i.style.overflowY,
      property: "overflow-y",
      el: i
    }), i.style.overflow = "hidden";
  }
  return () => {
    o.forEach(({
      value: i,
      el: a,
      property: s
    }) => {
      i ? a.style.setProperty(s, i) : a.style.removeProperty(s);
    });
  };
}
function u$(e) {
  const t = [];
  return [].forEach.call(e.children, (o) => {
    o.getAttribute("aria-hidden") === "true" && t.push(o);
  }), t;
}
class p$ {
  constructor() {
    this.containers = void 0, this.modals = void 0, this.modals = [], this.containers = [];
  }
  add(t, o) {
    let r = this.modals.indexOf(t);
    if (r !== -1)
      return r;
    r = this.modals.length, this.modals.push(t), t.modalRef && Gr(t.modalRef, !1);
    const n = u$(o);
    Jc(o, t.mount, t.modalRef, n, !0);
    const i = La(this.containers, (a) => a.container === o);
    return i !== -1 ? (this.containers[i].modals.push(t), r) : (this.containers.push({
      modals: [t],
      container: o,
      restore: null,
      hiddenSiblings: n
    }), r);
  }
  mount(t, o) {
    const r = La(this.containers, (i) => i.modals.indexOf(t) !== -1), n = this.containers[r];
    n.restore || (n.restore = d$(n, o));
  }
  remove(t, o = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1)
      return r;
    const n = La(this.containers, (a) => a.modals.indexOf(t) !== -1), i = this.containers[n];
    if (i.modals.splice(i.modals.indexOf(t), 1), this.modals.splice(r, 1), i.modals.length === 0)
      i.restore && i.restore(), t.modalRef && Gr(t.modalRef, o), Jc(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1), this.containers.splice(n, 1);
    else {
      const a = i.modals[i.modals.length - 1];
      a.modalRef && Gr(a.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
function f$(e) {
  return typeof e == "function" ? e() : e;
}
function m$(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const h$ = new p$();
function g$(e) {
  const {
    container: t,
    disableEscapeKeyDown: o = !1,
    disableScrollLock: r = !1,
    // @ts-ignore internal logic - Base UI supports the manager as a prop too
    manager: n = h$,
    closeAfterTransition: i = !1,
    onTransitionEnter: a,
    onTransitionExited: s,
    children: l,
    onClose: d,
    open: c,
    rootRef: f
  } = e, p = h.useRef({}), v = h.useRef(null), b = h.useRef(null), y = Ze(b, f), [x, C] = h.useState(!c), S = m$(l);
  let $ = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && ($ = !1);
  const R = () => ao(v.current), P = () => (p.current.modalRef = b.current, p.current.mount = v.current, p.current), g = () => {
    n.mount(P(), {
      disableScrollLock: r
    }), b.current && (b.current.scrollTop = 0);
  }, k = rr(() => {
    const I = f$(t) || R().body;
    n.add(P(), I), b.current && g();
  }), T = h.useCallback(() => n.isTopModal(P()), [n]), j = rr((I) => {
    v.current = I, I && (c && T() ? g() : b.current && Gr(b.current, $));
  }), O = h.useCallback(() => {
    n.remove(P(), $);
  }, [$, n]);
  h.useEffect(() => () => {
    O();
  }, [O]), h.useEffect(() => {
    c ? k() : (!S || !i) && O();
  }, [c, O, S, i, k]);
  const A = (I) => (z) => {
    var _;
    (_ = I.onKeyDown) == null || _.call(I, z), !(z.key !== "Escape" || z.which === 229 || // Wait until IME is settled.
    !T()) && (o || (z.stopPropagation(), d && d(z, "escapeKeyDown")));
  }, D = (I) => (z) => {
    var _;
    (_ = I.onClick) == null || _.call(I, z), z.target === z.currentTarget && d && d(z, "backdropClick");
  };
  return {
    getRootProps: (I = {}) => {
      const z = Dt(e);
      delete z.onTransitionEnter, delete z.onTransitionExited;
      const _ = u({}, z, I);
      return u({
        role: "presentation"
      }, _, {
        onKeyDown: A(_),
        ref: y
      });
    },
    getBackdropProps: (I = {}) => {
      const z = I;
      return u({
        "aria-hidden": !0
      }, z, {
        onClick: D(z),
        open: c
      });
    },
    getTransitionProps: () => {
      const I = () => {
        C(!1), a && a();
      }, z = () => {
        C(!0), s && s(), i && O();
      };
      return {
        onEnter: Mc(I, l == null ? void 0 : l.props.onEnter),
        onExited: Mc(z, l == null ? void 0 : l.props.onExited)
      };
    },
    rootRef: y,
    portalRef: j,
    isTopModal: T,
    exited: x,
    hasTransition: S
  };
}
function v$(e) {
  const {
    value: t,
    label: o,
    disabled: r,
    rootRef: n,
    id: i
  } = e, {
    getRootProps: a,
    highlighted: s,
    selected: l
  } = r$({
    item: t
  }), {
    getRootProps: d,
    rootRef: c
  } = ko({
    disabled: r,
    focusableWhenDisabled: !0
  }), f = Zt(i), p = h.useRef(null), v = h.useMemo(() => ({
    disabled: r,
    label: o,
    value: t,
    ref: p,
    id: f
  }), [r, o, t, f]), {
    index: b
  } = a$(t, v), y = Ze(n, p, c), x = (S) => ($) => {
    var R;
    (R = S.onKeyDown) == null || R.call(S, $), !$.defaultMuiPrevented && [" ", "Enter"].includes($.key) && ($.defaultMuiPrevented = !0);
  }, C = (S = {}) => ({
    onKeyDown: x(S)
  });
  return {
    getRootProps: (S = {}) => {
      const $ = Dt(S), R = ii(a, ii(d, C));
      return u({}, S, $, R($), {
        id: f,
        ref: y,
        role: "option",
        "aria-selected": l
      });
    },
    highlighted: s,
    index: b,
    selected: l,
    rootRef: y
  };
}
function b$(e) {
  const t = h.useContext(ia);
  if (!t)
    throw new Error("Option: ListContext was not found.");
  const {
    getItemState: o,
    dispatch: r
  } = t, {
    highlighted: n,
    selected: i,
    focusable: a
  } = o(e), s = h.useCallback((d) => {
    if (d !== e)
      throw new Error(["Base UI Option: Tried to access the state of another Option.", "This is unsupported when the Option uses the OptionContextStabilizer as a performance optimization."].join("/n"));
    return {
      highlighted: n,
      selected: i,
      focusable: a
    };
  }, [n, i, a, e]);
  return {
    contextValue: h.useMemo(() => ({
      dispatch: r,
      getItemState: s
    }), [r, s])
  };
}
const kp = "Popper";
function y$(e) {
  return xp(kp, e);
}
IS(kp, ["root"]);
const x$ = ["anchorEl", "children", "direction", "disablePortal", "modifiers", "open", "placement", "popperOptions", "popperRef", "slotProps", "slots", "TransitionProps", "ownerState"], C$ = ["anchorEl", "children", "container", "direction", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "style", "transition", "slotProps", "slots"];
function S$(e, t) {
  if (t === "ltr")
    return e;
  switch (e) {
    case "bottom-end":
      return "bottom-start";
    case "bottom-start":
      return "bottom-end";
    case "top-end":
      return "top-start";
    case "top-start":
      return "top-end";
    default:
      return e;
  }
}
function ss(e) {
  return typeof e == "function" ? e() : e;
}
function $$(e) {
  return e.nodeType !== void 0;
}
const k$ = () => Re({
  root: ["root"]
}, yS(y$)), I$ = {}, R$ = /* @__PURE__ */ h.forwardRef(function(t, o) {
  const {
    anchorEl: r,
    children: n,
    direction: i,
    disablePortal: a,
    modifiers: s,
    open: l,
    placement: d,
    popperOptions: c,
    popperRef: f,
    slotProps: p = {},
    slots: v = {},
    TransitionProps: b
    // @ts-ignore internal logic
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
  } = t, y = U(t, x$), x = h.useRef(null), C = Ze(x, o), S = h.useRef(null), $ = Ze(S, f), R = h.useRef($);
  Ho(() => {
    R.current = $;
  }, [$]), h.useImperativeHandle(f, () => S.current, []);
  const P = S$(d, i), [g, k] = h.useState(P), [T, j] = h.useState(ss(r));
  h.useEffect(() => {
    S.current && S.current.forceUpdate();
  }), h.useEffect(() => {
    r && j(ss(r));
  }, [r]), Ho(() => {
    if (!T || !l)
      return;
    const E = (z) => {
      k(z.placement);
    };
    let w = [{
      name: "preventOverflow",
      options: {
        altBoundary: a
      }
    }, {
      name: "flip",
      options: {
        altBoundary: a
      }
    }, {
      name: "onUpdate",
      enabled: !0,
      phase: "afterWrite",
      fn: ({
        state: z
      }) => {
        E(z);
      }
    }];
    s != null && (w = w.concat(s)), c && c.modifiers != null && (w = w.concat(c.modifiers));
    const I = D0(T, x.current, u({
      placement: P
    }, c, {
      modifiers: w
    }));
    return R.current(I), () => {
      I.destroy(), R.current(null);
    };
  }, [T, a, s, l, c, P]);
  const O = {
    placement: g
  };
  b !== null && (O.TransitionProps = b);
  const A = k$(), D = v.root ?? "div", M = SS({
    elementType: D,
    externalSlotProps: p.root,
    externalForwardedProps: y,
    additionalProps: {
      role: "tooltip",
      ref: C
    },
    ownerState: t,
    className: A.root
  });
  return /* @__PURE__ */ m.jsx(D, u({}, M, {
    children: typeof n == "function" ? n(O) : n
  }));
}), Ip = /* @__PURE__ */ h.forwardRef(function(t, o) {
  const {
    anchorEl: r,
    children: n,
    container: i,
    direction: a = "ltr",
    disablePortal: s = !1,
    keepMounted: l = !1,
    modifiers: d,
    open: c,
    placement: f = "bottom",
    popperOptions: p = I$,
    popperRef: v,
    style: b,
    transition: y = !1,
    slotProps: x = {},
    slots: C = {}
  } = t, S = U(t, C$), [$, R] = h.useState(!0), P = () => {
    R(!1);
  }, g = () => {
    R(!0);
  };
  if (!l && !c && (!y || $))
    return null;
  let k;
  if (i)
    k = i;
  else if (r) {
    const O = ss(r);
    k = O && $$(O) ? ao(O).body : ao(null).body;
  }
  const T = !c && l && (!y || $) ? "none" : void 0, j = y ? {
    in: c,
    onEnter: P,
    onExited: g
  } : void 0;
  return /* @__PURE__ */ m.jsx($p, {
    disablePortal: s,
    container: k,
    children: /* @__PURE__ */ m.jsx(R$, u({
      anchorEl: r,
      direction: a,
      disablePortal: s,
      modifiers: d,
      ref: o,
      open: y ? !$ : c,
      placement: f,
      popperOptions: p,
      popperRef: v,
      slotProps: x,
      slots: C
    }, S, {
      style: u({
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: "fixed",
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display: T
      }, b),
      TransitionProps: j,
      children: n
    }))
  });
}), ai = {
  buttonClick: "buttonClick",
  browserAutoFill: "browserAutoFill"
}, P$ = (e) => {
  const {
    label: t,
    value: o
  } = e;
  return typeof t == "string" ? t : typeof o == "string" ? o : String(e);
};
function w$(e, t) {
  const {
    open: o
  } = e, {
    context: {
      selectionMode: r
    }
  } = t;
  if (t.type === ai.buttonClick) {
    const i = e.selectedValues[0] ?? ut(null, "start", t.context);
    return u({}, e, {
      open: !o,
      highlightedValue: o ? null : i
    });
  }
  if (t.type === ai.browserAutoFill)
    return al(t.item, e, t.context);
  const n = Cp(e, t);
  switch (t.type) {
    case Xe.keyDown:
      if (e.open) {
        if (t.event.key === "Escape")
          return u({}, n, {
            open: !1
          });
      } else {
        if (t.event.key === "ArrowDown")
          return u({}, e, {
            open: !0,
            highlightedValue: e.selectedValues[0] ?? ut(null, "start", t.context)
          });
        if (t.event.key === "ArrowUp")
          return u({}, e, {
            open: !0,
            highlightedValue: e.selectedValues[0] ?? ut(null, "end", t.context)
          });
      }
      break;
    case Xe.itemClick:
      if (r === "single")
        return u({}, n, {
          open: !1
        });
      break;
    case Xe.blur:
      return u({}, n, {
        open: !1
      });
    default:
      return n;
  }
  return n;
}
function T$(e) {
  return Array.isArray(e) ? e.length === 0 ? "" : JSON.stringify(e.map((t) => t.value)) : (e == null ? void 0 : e.value) == null ? "" : typeof e.value == "string" || typeof e.value == "number" ? e.value : JSON.stringify(e.value);
}
function D$(e) {
  const {
    areOptionsEqual: t,
    buttonRef: o,
    defaultOpen: r = !1,
    defaultValue: n,
    disabled: i = !1,
    listboxId: a,
    listboxRef: s,
    multiple: l = !1,
    name: d,
    required: c,
    onChange: f,
    onHighlightChange: p,
    onOpenChange: v,
    open: b,
    options: y,
    getOptionAsString: x = P$,
    getSerializedValue: C = T$,
    value: S,
    componentName: $ = "useSelect"
  } = e, R = h.useRef(null), P = Ze(o, R), g = h.useRef(null), k = Zt(a);
  let T;
  S === void 0 && n === void 0 ? T = [] : n !== void 0 && (l ? T = n : T = n == null ? [] : [n]);
  const j = h.useMemo(() => {
    if (S !== void 0)
      return l ? S : S == null ? [] : [S];
  }, [S, l]), {
    subitems: O,
    contextValue: A
  } = i$(), D = h.useMemo(() => y != null ? new Map(y.map((X, ne) => [X.value, {
    value: X.value,
    label: X.label,
    disabled: X.disabled,
    ref: /* @__PURE__ */ h.createRef(),
    id: `${k}_${ne}`
  }])) : O, [y, O, k]), M = Ze(s, g), {
    getRootProps: E,
    active: w,
    focusVisible: I,
    rootRef: z
  } = ko({
    disabled: i,
    rootRef: P
  }), _ = h.useMemo(() => Array.from(D.keys()), [D]), L = h.useCallback((X) => {
    if (t !== void 0) {
      const ne = _.find((be) => t(be, X));
      return D.get(ne);
    }
    return D.get(X);
  }, [D, t, _]), N = h.useCallback((X) => {
    const ne = L(X);
    return (ne == null ? void 0 : ne.disabled) ?? !1;
  }, [L]), Y = h.useCallback((X) => {
    const ne = L(X);
    return ne ? x(ne) : "";
  }, [L, x]), ee = h.useMemo(() => ({
    selectedValues: j,
    open: b
  }), [j, b]), re = h.useCallback((X) => {
    var ne;
    return (ne = D.get(X)) == null ? void 0 : ne.id;
  }, [D]), Q = h.useCallback((X, ne) => {
    l ? f == null || f(X, ne) : f == null || f(X, ne[0] ?? null);
  }, [l, f]), te = h.useCallback((X, ne) => {
    p == null || p(X, ne ?? null);
  }, [p]), he = h.useCallback((X, ne, be) => {
    var ve;
    ne === "open" && (v == null || v(be), be === !1 && (X == null ? void 0 : X.type) !== "blur" && ((ve = R.current) == null || ve.focus()));
  }, [v]), oe = h.useCallback((X) => {
    var ne;
    return X == null ? null : ((ne = O.get(X)) == null ? void 0 : ne.ref.current) ?? null;
  }, [O]), B = {
    getInitialState: () => ({
      highlightedValue: null,
      selectedValues: T ?? [],
      open: r
    }),
    getItemId: re,
    controlledProps: ee,
    focusManagement: "DOM",
    getItemDomElement: oe,
    itemComparer: t,
    isItemDisabled: N,
    rootRef: M,
    onChange: Q,
    onHighlightChange: te,
    onStateChange: he,
    reducerActionContext: h.useMemo(() => ({
      multiple: l
    }), [l]),
    items: _,
    getItemAsString: Y,
    selectionMode: l ? "multiple" : "single",
    stateReducer: w$,
    componentName: $
  }, {
    dispatch: V,
    getRootProps: K,
    contextValue: se,
    state: {
      open: ue,
      highlightedValue: le,
      selectedValues: me
    },
    rootRef: ie
  } = o$(B), J = h.useRef(ue);
  Ho(() => {
    var X;
    if (ue && le !== null) {
      const ne = (X = L(le)) == null ? void 0 : X.ref;
      if (!g.current || !(ne != null && ne.current))
        return;
      J.current || ne.current.focus({
        preventScroll: !0
      });
      const be = g.current.getBoundingClientRect(), ve = ne.current.getBoundingClientRect();
      ve.top < be.top ? g.current.scrollTop -= be.top - ve.top : ve.bottom > be.bottom && (g.current.scrollTop += ve.bottom - be.bottom);
    }
  }, [ue, le, L]);
  const Ce = h.useCallback((X) => L(X), [L]), ce = (X) => (ne) => {
    var be;
    if ((be = X == null ? void 0 : X.onClick) == null || be.call(X, ne), !ne.defaultMuiPrevented) {
      const ve = {
        type: ai.buttonClick,
        event: ne
      };
      V(ve);
    }
  }, Ee = (X) => (ne) => {
    var be;
    (be = X.onKeyDown) == null || be.call(X, ne), !ne.defaultMuiPrevented && (ne.key === "ArrowDown" || ne.key === "ArrowUp") && (ne.preventDefault(), V({
      type: Xe.keyDown,
      key: ne.key,
      event: ne
    }));
  }, pe = (X = {}) => ({
    onClick: ce(X),
    onKeyDown: Ee(X)
  }), Se = (X = {}) => u({}, X, pe(X), {
    role: "combobox",
    "aria-expanded": ue,
    "aria-controls": k
  }), $e = (X = {}) => {
    const ne = Dt(X), be = ii(Se, E);
    return u({}, X, be(ne));
  }, ge = (X) => (ne) => {
    var be, ve;
    (be = X.onBlur) == null || be.call(X, ne), !ne.defaultMuiPrevented && ((ve = g.current) != null && ve.contains(ne.relatedTarget) || ne.relatedTarget === R.current) && (ne.defaultMuiPrevented = !0);
  }, Ie = (X = {}) => ({
    onBlur: ge(X)
  }), Ve = (X = {}) => {
    const ne = Dt(X), be = ii(Ie, K);
    return u({
      id: k,
      role: "listbox",
      "aria-multiselectable": l ? "true" : void 0
    }, X, be(ne));
  };
  h.useDebugValue({
    selectedOptions: me,
    highlightedOption: le,
    open: ue
  });
  const st = h.useMemo(() => u({}, se, A), [se, A]);
  let Me;
  e.multiple ? Me = me : Me = me.length > 0 ? me[0] : null;
  let ke;
  l ? ke = Me.map((X) => Ce(X)).filter((X) => X !== void 0) : ke = Ce(Me) ?? null;
  const q = (X) => (ne) => {
    var ve;
    if ((ve = X == null ? void 0 : X.onChange) == null || ve.call(X, ne), ne.defaultMuiPrevented)
      return;
    const be = D.get(ne.target.value);
    ne.target.value === "" ? V({
      type: Xe.clearSelection
    }) : be !== void 0 && V({
      type: ai.browserAutoFill,
      item: be.value,
      event: ne
    });
  };
  return {
    buttonActive: w,
    buttonFocusVisible: I,
    buttonRef: z,
    contextValue: st,
    disabled: i,
    dispatch: V,
    getButtonProps: $e,
    getHiddenInputProps: (X = {}) => {
      const ne = Dt(X);
      return u({
        name: d,
        tabIndex: -1,
        "aria-hidden": !0,
        required: c ? !0 : void 0,
        value: C(ke),
        style: A1
      }, X, {
        onChange: q(ne)
      });
    },
    getListboxProps: Ve,
    getOptionMetadata: Ce,
    listboxRef: ie,
    open: ue,
    options: _,
    value: Me,
    highlightedOption: le
  };
}
function E$(e) {
  const {
    value: t,
    children: o
  } = e, {
    dispatch: r,
    getItemIndex: n,
    getItemState: i,
    registerItem: a,
    totalSubitemCount: s
  } = t, l = h.useMemo(() => ({
    dispatch: r,
    getItemState: i,
    getItemIndex: n
  }), [r, n, i]), d = h.useMemo(() => ({
    getItemIndex: n,
    registerItem: a,
    totalSubitemCount: s
  }), [a, n, s]);
  return /* @__PURE__ */ m.jsx(Sp.Provider, {
    value: d,
    children: /* @__PURE__ */ m.jsx(ia.Provider, {
      value: l,
      children: o
    })
  });
}
function sl(e) {
  const {
    checked: t,
    defaultChecked: o,
    disabled: r,
    onBlur: n,
    onChange: i,
    onFocus: a,
    onFocusVisible: s,
    readOnly: l,
    required: d
  } = e, [c, f] = Ur({
    controlled: t,
    default: !!o,
    name: "Switch",
    state: "checked"
  }), p = (T) => (j) => {
    var O;
    j.nativeEvent.defaultPrevented || (f(j.target.checked), i == null || i(j), (O = T.onChange) == null || O.call(T, j));
  }, {
    isFocusVisibleRef: v,
    onBlur: b,
    onFocus: y,
    ref: x
  } = dp(), [C, S] = h.useState(!1);
  r && C && S(!1), h.useEffect(() => {
    v.current = C;
  }, [C, v]);
  const $ = h.useRef(null), R = (T) => (j) => {
    var O;
    $.current || ($.current = j.currentTarget), y(j), v.current === !0 && (S(!0), s == null || s(j)), a == null || a(j), (O = T.onFocus) == null || O.call(T, j);
  }, P = (T) => (j) => {
    var O;
    b(j), v.current === !1 && S(!1), n == null || n(j), (O = T.onBlur) == null || O.call(T, j);
  }, g = Ze(x, $);
  return {
    checked: c,
    disabled: !!r,
    focusVisible: C,
    getInputProps: (T = {}) => u({
      checked: t,
      defaultChecked: o,
      disabled: r,
      readOnly: l,
      ref: g,
      required: d,
      type: "checkbox",
      role: "switch",
      "aria-checked": t
    }, T, {
      onChange: p(T),
      onFocus: R(T),
      onBlur: P(T)
    }),
    inputRef: g,
    readOnly: !!l
  };
}
function qc(e) {
  return typeof e.normalize < "u" ? e.normalize("NFD").replace(/[\u0300-\u036f]/g, "") : e;
}
function z$(e = {}) {
  const {
    ignoreAccents: t = !0,
    ignoreCase: o = !0,
    limit: r,
    matchFrom: n = "any",
    stringify: i,
    trim: a = !1
  } = e;
  return (s, {
    inputValue: l,
    getOptionLabel: d
  }) => {
    let c = a ? l.trim() : l;
    o && (c = c.toLowerCase()), t && (c = qc(c));
    const f = c ? s.filter((p) => {
      let v = (i || d)(p);
      return o && (v = v.toLowerCase()), t && (v = qc(v)), n === "start" ? v.indexOf(c) === 0 : v.indexOf(c) > -1;
    }) : s;
    return typeof r == "number" ? f.slice(0, r) : f;
  };
}
function On(e, t) {
  for (let o = 0; o < e.length; o += 1)
    if (t(e[o]))
      return o;
  return -1;
}
const O$ = z$(), Yc = 5, M$ = (e) => {
  var t;
  return e.current !== null && ((t = e.current.parentElement) == null ? void 0 : t.contains(document.activeElement));
};
function A$(e) {
  const {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    unstable_isActiveElementInListbox: t = M$,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    unstable_classNamePrefix: o = "Mui",
    autoComplete: r = !1,
    autoHighlight: n = !1,
    autoSelect: i = !1,
    blurOnSelect: a = !1,
    clearOnBlur: s = !e.freeSolo,
    clearOnEscape: l = !1,
    componentName: d = "useAutocomplete",
    defaultValue: c = e.multiple ? [] : null,
    disableClearable: f = !1,
    disableCloseOnSelect: p = !1,
    disabled: v,
    disabledItemsFocusable: b = !1,
    disableListWrap: y = !1,
    filterOptions: x = O$,
    filterSelectedOptions: C = !1,
    freeSolo: S = !1,
    getOptionDisabled: $,
    getOptionKey: R,
    getOptionLabel: P = (W) => W.label ?? W,
    groupBy: g,
    handleHomeEndKeys: k = !e.freeSolo,
    id: T,
    includeInputInList: j = !1,
    inputValue: O,
    isOptionEqualToValue: A = (W, H) => W === H,
    multiple: D = !1,
    onChange: M,
    onClose: E,
    onHighlightChange: w,
    onInputChange: I,
    onOpen: z,
    open: _,
    openOnFocus: L = !1,
    options: N,
    readOnly: Y = !1,
    selectOnFocus: ee = !e.freeSolo,
    value: re
  } = e, Q = Zt(T);
  let te = P;
  te = (W) => {
    const H = P(W);
    return typeof H != "string" ? String(H) : H;
  };
  const he = h.useRef(!1), oe = h.useRef(!0), B = h.useRef(null), V = h.useRef(null), [K, se] = h.useState(null), [ue, le] = h.useState(-1), me = n ? 0 : -1, ie = h.useRef(me), [J, Ce] = Ur({
    controlled: re,
    default: c,
    name: d
  }), [ce, Ee] = Ur({
    controlled: O,
    default: "",
    name: d,
    state: "inputValue"
  }), [pe, Se] = h.useState(!1), $e = h.useCallback((W, H) => {
    if (!(D ? J.length < H.length : H !== null) && !s)
      return;
    let ye;
    if (D)
      ye = "";
    else if (H == null)
      ye = "";
    else {
      const De = te(H);
      ye = typeof De == "string" ? De : "";
    }
    ce !== ye && (Ee(ye), I && I(W, ye, "reset"));
  }, [te, ce, D, I, Ee, s, J]), [ge, Ie] = Ur({
    controlled: _,
    default: !1,
    name: d,
    state: "open"
  }), [Ve, st] = h.useState(!0), Me = !D && J != null && ce === te(J), ke = ge && !Y, q = ke ? x(
    N.filter((W) => !(C && (D ? J : [J]).some((H) => H !== null && A(W, H)))),
    // we use the empty string to manipulate `filterOptions` to not filter any options
    // i.e. the filter predicate always returns true
    {
      inputValue: Me && Ve ? "" : ce,
      getOptionLabel: te
    }
  ) : [], ze = M1({
    filteredOptions: q,
    value: J,
    inputValue: ce
  });
  h.useEffect(() => {
    const W = J !== ze.value;
    pe && !W || S && !W || $e(null, J);
  }, [J, $e, pe, ze.value, S]);
  const X = ge && q.length > 0 && !Y, ne = rr((W) => {
    W === -1 ? B.current.focus() : K.querySelector(`[data-tag-index="${W}"]`).focus();
  });
  h.useEffect(() => {
    D && ue > J.length - 1 && (le(-1), ne(-1));
  }, [J, D, ue, ne]);
  function be(W, H) {
    if (!V.current || W < 0 || W >= q.length)
      return -1;
    let de = W;
    for (; ; ) {
      const ye = V.current.querySelector(`[data-option-index="${de}"]`), De = b ? !1 : !ye || ye.disabled || ye.getAttribute("aria-disabled") === "true";
      if (ye && ye.hasAttribute("tabindex") && !De)
        return de;
      if (H === "next" ? de = (de + 1) % q.length : de = (de - 1 + q.length) % q.length, de === W)
        return -1;
    }
  }
  const ve = rr(({
    event: W,
    index: H,
    reason: de = "auto"
  }) => {
    if (ie.current = H, H === -1 ? B.current.removeAttribute("aria-activedescendant") : B.current.setAttribute("aria-activedescendant", `${Q}-option-${H}`), w && w(W, H === -1 ? null : q[H], de), !V.current)
      return;
    const ye = V.current.querySelector(`[role="option"].${o}-focused`);
    ye && (ye.classList.remove(`${o}-focused`), ye.classList.remove(`${o}-focusVisible`));
    let De = V.current;
    if (V.current.getAttribute("role") !== "listbox" && (De = V.current.parentElement.querySelector('[role="listbox"]')), !De)
      return;
    if (H === -1) {
      De.scrollTop = 0;
      return;
    }
    const nt = V.current.querySelector(`[data-option-index="${H}"]`);
    if (nt && (nt.classList.add(`${o}-focused`), de === "keyboard" && nt.classList.add(`${o}-focusVisible`), De.scrollHeight > De.clientHeight && de !== "mouse" && de !== "touch")) {
      const Qe = nt, It = De.clientHeight + De.scrollTop, Tr = Qe.offsetTop + Qe.offsetHeight;
      Tr > It ? De.scrollTop = Tr - De.clientHeight : Qe.offsetTop - Qe.offsetHeight * (g ? 1.3 : 0) < De.scrollTop && (De.scrollTop = Qe.offsetTop - Qe.offsetHeight * (g ? 1.3 : 0));
    }
  }), Le = rr(({
    event: W,
    diff: H,
    direction: de = "next",
    reason: ye = "auto"
  }) => {
    if (!ke)
      return;
    const nt = be((() => {
      const Qe = q.length - 1;
      if (H === "reset")
        return me;
      if (H === "start")
        return 0;
      if (H === "end")
        return Qe;
      const It = ie.current + H;
      return It < 0 ? It === -1 && j ? -1 : y && ie.current !== -1 || Math.abs(H) > 1 ? 0 : Qe : It > Qe ? It === Qe + 1 && j ? -1 : y || Math.abs(H) > 1 ? Qe : 0 : It;
    })(), de);
    if (ve({
      index: nt,
      reason: ye,
      event: W
    }), r && H !== "reset")
      if (nt === -1)
        B.current.value = ce;
      else {
        const Qe = te(q[nt]);
        B.current.value = Qe, Qe.toLowerCase().indexOf(ce.toLowerCase()) === 0 && ce.length > 0 && B.current.setSelectionRange(ce.length, Qe.length);
      }
  }), kt = () => {
    const W = (H, de) => {
      const ye = H ? te(H) : "", De = de ? te(de) : "";
      return ye === De;
    };
    if (ie.current !== -1 && ze.filteredOptions && ze.filteredOptions.length !== q.length && ze.inputValue === ce && (D ? J.length === ze.value.length && ze.value.every((H, de) => te(J[de]) === te(H)) : W(ze.value, J))) {
      const H = ze.filteredOptions[ie.current];
      if (H)
        return On(q, (de) => te(de) === te(H));
    }
    return -1;
  }, Ro = h.useCallback(() => {
    if (!ke)
      return;
    const W = kt();
    if (W !== -1) {
      ie.current = W;
      return;
    }
    const H = D ? J[0] : J;
    if (q.length === 0 || H == null) {
      Le({
        diff: "reset"
      });
      return;
    }
    if (V.current) {
      if (H != null) {
        const de = q[ie.current];
        if (D && de && On(J, (De) => A(de, De)) !== -1)
          return;
        const ye = On(q, (De) => A(De, H));
        ye === -1 ? Le({
          diff: "reset"
        }) : ve({
          index: ye
        });
        return;
      }
      if (ie.current >= q.length - 1) {
        ve({
          index: q.length - 1
        });
        return;
      }
      ve({
        index: ie.current
      });
    }
  }, [
    // Only sync the highlighted index when the option switch between empty and not
    q.length,
    // Don't sync the highlighted index with the value when multiple
    // eslint-disable-next-line react-hooks/exhaustive-deps
    D ? !1 : J,
    C,
    Le,
    ve,
    ke,
    ce,
    D
  ]), Uo = rr((W) => {
    ni(V, W), W && Ro();
  });
  h.useEffect(() => {
    Ro();
  }, [Ro]);
  const Ot = (W) => {
    ge || (Ie(!0), st(!0), z && z(W));
  }, Ue = (W, H) => {
    ge && (Ie(!1), E && E(W, H));
  }, Mt = (W, H, de, ye) => {
    if (D) {
      if (J.length === H.length && J.every((De, nt) => De === H[nt]))
        return;
    } else if (J === H)
      return;
    M && M(W, H, de, ye), Ce(H);
  }, Go = h.useRef(!1), Po = (W, H, de = "selectOption", ye = "options") => {
    let De = de, nt = H;
    if (D) {
      nt = Array.isArray(J) ? J.slice() : [];
      const Qe = On(nt, (It) => A(H, It));
      Qe === -1 ? nt.push(H) : ye !== "freeSolo" && (nt.splice(Qe, 1), De = "removeOption");
    }
    $e(W, nt), Mt(W, nt, De, {
      option: H
    }), !p && (!W || !W.ctrlKey && !W.metaKey) && Ue(W, De), (a === !0 || a === "touch" && Go.current || a === "mouse" && !Go.current) && B.current.blur();
  };
  function ca(W, H) {
    if (W === -1)
      return -1;
    let de = W;
    for (; ; ) {
      if (H === "next" && de === J.length || H === "previous" && de === -1)
        return -1;
      const ye = K.querySelector(`[data-tag-index="${de}"]`);
      if (!ye || !ye.hasAttribute("tabindex") || ye.disabled || ye.getAttribute("aria-disabled") === "true")
        de += H === "next" ? 1 : -1;
      else
        return de;
    }
  }
  const xn = (W, H) => {
    if (!D)
      return;
    ce === "" && Ue(W, "toggleInput");
    let de = ue;
    ue === -1 ? ce === "" && H === "previous" && (de = J.length - 1) : (de += H === "next" ? 1 : -1, de < 0 && (de = 0), de === J.length && (de = -1)), de = ca(de, H), le(de), ne(de);
  }, Cn = (W) => {
    he.current = !0, Ee(""), I && I(W, "", "clear"), Mt(W, D ? [] : null, "clear");
  }, da = (W) => (H) => {
    if (W.onKeyDown && W.onKeyDown(H), !H.defaultMuiPrevented && (ue !== -1 && ["ArrowLeft", "ArrowRight"].indexOf(H.key) === -1 && (le(-1), ne(-1)), H.which !== 229))
      switch (H.key) {
        case "Home":
          ke && k && (H.preventDefault(), Le({
            diff: "start",
            direction: "next",
            reason: "keyboard",
            event: H
          }));
          break;
        case "End":
          ke && k && (H.preventDefault(), Le({
            diff: "end",
            direction: "previous",
            reason: "keyboard",
            event: H
          }));
          break;
        case "PageUp":
          H.preventDefault(), Le({
            diff: -Yc,
            direction: "previous",
            reason: "keyboard",
            event: H
          }), Ot(H);
          break;
        case "PageDown":
          H.preventDefault(), Le({
            diff: Yc,
            direction: "next",
            reason: "keyboard",
            event: H
          }), Ot(H);
          break;
        case "ArrowDown":
          H.preventDefault(), Le({
            diff: 1,
            direction: "next",
            reason: "keyboard",
            event: H
          }), Ot(H);
          break;
        case "ArrowUp":
          H.preventDefault(), Le({
            diff: -1,
            direction: "previous",
            reason: "keyboard",
            event: H
          }), Ot(H);
          break;
        case "ArrowLeft":
          xn(H, "previous");
          break;
        case "ArrowRight":
          xn(H, "next");
          break;
        case "Enter":
          if (ie.current !== -1 && ke) {
            const de = q[ie.current], ye = $ ? $(de) : !1;
            if (H.preventDefault(), ye)
              return;
            Po(H, de, "selectOption"), r && B.current.setSelectionRange(B.current.value.length, B.current.value.length);
          } else
            S && ce !== "" && Me === !1 && (D && H.preventDefault(), Po(H, ce, "createOption", "freeSolo"));
          break;
        case "Escape":
          ke ? (H.preventDefault(), H.stopPropagation(), Ue(H, "escape")) : l && (ce !== "" || D && J.length > 0) && (H.preventDefault(), H.stopPropagation(), Cn(H));
          break;
        case "Backspace":
          if (D && !Y && ce === "" && J.length > 0) {
            const de = ue === -1 ? J.length - 1 : ue, ye = J.slice();
            ye.splice(de, 1), Mt(H, ye, "removeOption", {
              option: J[de]
            });
          }
          break;
        case "Delete":
          if (D && !Y && ce === "" && J.length > 0 && ue !== -1) {
            const de = ue, ye = J.slice();
            ye.splice(de, 1), Mt(H, ye, "removeOption", {
              option: J[de]
            });
          }
          break;
      }
  }, ua = (W) => {
    Se(!0), L && !he.current && Ot(W);
  }, Sn = (W) => {
    if (t(V)) {
      B.current.focus();
      return;
    }
    Se(!1), oe.current = !0, he.current = !1, i && ie.current !== -1 && ke ? Po(W, q[ie.current], "blur") : i && S && ce !== "" ? Po(W, ce, "blur", "freeSolo") : s && $e(W, J), Ue(W, "blur");
  }, pa = (W) => {
    const H = W.target.value;
    ce !== H && (Ee(H), st(!1), I && I(W, H, "input")), H === "" ? !f && !D && Mt(W, null, "clear") : Ot(W);
  }, fa = (W) => {
    const H = Number(W.currentTarget.getAttribute("data-option-index"));
    ie.current !== H && ve({
      event: W,
      index: H,
      reason: "mouse"
    });
  }, ma = (W) => {
    ve({
      event: W,
      index: Number(W.currentTarget.getAttribute("data-option-index")),
      reason: "touch"
    }), Go.current = !0;
  }, ha = (W) => {
    const H = Number(W.currentTarget.getAttribute("data-option-index"));
    Po(W, q[H], "selectOption"), Go.current = !1;
  }, ga = (W) => (H) => {
    const de = J.slice();
    de.splice(W, 1), Mt(H, de, "removeOption", {
      option: J[W]
    });
  }, uo = (W) => {
    ge ? Ue(W, "toggleInput") : Ot(W);
  }, va = (W) => {
    W.currentTarget.contains(W.target) && W.target.getAttribute("id") !== Q && W.preventDefault();
  }, ba = (W) => {
    W.currentTarget.contains(W.target) && (B.current.focus(), ee && oe.current && B.current.selectionEnd - B.current.selectionStart === 0 && B.current.select(), oe.current = !1);
  }, ya = (W) => {
    !v && (ce === "" || !ge) && uo(W);
  };
  let wr = S && ce.length > 0;
  wr = wr || (D ? J.length > 0 : J !== null);
  let $n = q;
  return g && ($n = q.reduce((W, H, de) => {
    const ye = g(H);
    return W.length > 0 && W[W.length - 1].group === ye ? W[W.length - 1].options.push(H) : W.push({
      key: de,
      index: de,
      group: ye,
      options: [H]
    }), W;
  }, [])), v && pe && Sn(), {
    getRootProps: (W = {}) => u({
      "aria-owns": X ? `${Q}-listbox` : null
    }, W, {
      onKeyDown: da(W),
      onMouseDown: va,
      onClick: ba
    }),
    getInputLabelProps: () => ({
      id: `${Q}-label`,
      htmlFor: Q
    }),
    getInputProps: () => ({
      id: Q,
      value: ce,
      onBlur: Sn,
      onFocus: ua,
      onChange: pa,
      onMouseDown: ya,
      // if open then this is handled imperatively so don't let react override
      // only have an opinion about this when closed
      "aria-activedescendant": ke ? "" : null,
      "aria-autocomplete": r ? "both" : "list",
      "aria-controls": X ? `${Q}-listbox` : void 0,
      "aria-expanded": X,
      // Disable browser's suggestion that might overlap with the popup.
      // Handle autocomplete but not autofill.
      autoComplete: "off",
      ref: B,
      autoCapitalize: "none",
      spellCheck: "false",
      role: "combobox",
      disabled: v
    }),
    getClearProps: () => ({
      tabIndex: -1,
      type: "button",
      onClick: Cn
    }),
    getPopupIndicatorProps: () => ({
      tabIndex: -1,
      type: "button",
      onClick: uo
    }),
    getTagProps: ({
      index: W
    }) => u({
      key: W,
      "data-tag-index": W,
      tabIndex: -1
    }, !Y && {
      onDelete: ga(W)
    }),
    getListboxProps: () => ({
      role: "listbox",
      id: `${Q}-listbox`,
      "aria-labelledby": `${Q}-label`,
      ref: Uo,
      onMouseDown: (W) => {
        W.preventDefault();
      }
    }),
    getOptionProps: ({
      index: W,
      option: H
    }) => {
      const de = (D ? J : [J]).some((De) => De != null && A(H, De)), ye = $ ? $(H) : !1;
      return {
        key: (R == null ? void 0 : R(H)) ?? te(H),
        tabIndex: -1,
        role: "option",
        id: `${Q}-option-${W}`,
        onMouseMove: fa,
        onClick: ha,
        onTouchStart: ma,
        "data-option-index": W,
        "aria-disabled": ye,
        "aria-selected": de
      };
    },
    id: Q,
    inputValue: ce,
    value: J,
    dirty: wr,
    expanded: ke && K,
    popupOpen: ke,
    focused: pe || ue !== -1,
    anchorEl: K,
    setAnchorEl: se,
    focusedTag: ue,
    groupedOptions: $n
  };
}
const j$ = ["className", "elementType", "ownerState", "externalForwardedProps", "getSlotOwnerState", "internalForwardedProps"], B$ = ["component", "slots", "slotProps"], _$ = ["component"];
function Z(e, t) {
  const {
    className: o,
    elementType: r,
    ownerState: n,
    externalForwardedProps: i,
    getSlotOwnerState: a,
    internalForwardedProps: s
  } = t, l = U(t, j$), {
    component: d,
    slots: c = {
      [e]: void 0
    },
    slotProps: f = {
      [e]: void 0
    }
  } = i, p = U(i, B$), v = c[e] || r, b = vp(f[e], n), y = bp(u({
    className: o
  }, l, {
    externalForwardedProps: e === "root" ? p : void 0,
    externalSlotProps: b
  })), {
    props: {
      component: x
    },
    internalRef: C
  } = y, S = U(y.props, _$), $ = Ze(C, b == null ? void 0 : b.ref, t.ref), R = a ? a(S) : {}, P = u({}, n, R), g = e === "root" ? x || d : x, k = gp(v, u({}, e === "root" && !d && !c[e] && s, e !== "root" && !c[e] && s, S, g && {
    as: g
  }, {
    ref: $
  }), P);
  return Object.keys(R).forEach((T) => {
    delete k[T];
  }), [v, k];
}
function L$(e) {
  return we("MuiListItem", e);
}
const si = Pe("MuiListItem", ["root", "startAction", "endAction", "nested", "nesting", "sticky", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "colorContext", "variantPlain", "variantSoft", "variantOutlined", "variantSolid"]), li = /* @__PURE__ */ h.createContext(!1), aa = /* @__PURE__ */ h.createContext(!1), Rp = /* @__PURE__ */ h.createContext(!1), Pp = /* @__PURE__ */ h.createContext(void 0), wp = /* @__PURE__ */ h.createContext(void 0), ll = /* @__PURE__ */ h.createContext(void 0), F$ = ["component", "className", "children", "nested", "sticky", "variant", "color", "startAction", "endAction", "role", "slots", "slotProps"], N$ = (e) => {
  const {
    sticky: t,
    nested: o,
    nesting: r,
    variant: n,
    color: i
  } = e, a = {
    root: ["root", o && "nested", r && "nesting", t && "sticky", i && `color${ae(i)}`, n && `variant${ae(n)}`],
    startAction: ["startAction"],
    endAction: ["endAction"]
  };
  return Re(a, L$, {});
}, H$ = G("li")(({
  theme: e,
  ownerState: t
}) => {
  var o;
  return [
    !t.nested && {
      // add negative margin to ListItemButton equal to this ListItem padding
      "--ListItemButton-marginInline": "calc(-1 * var(--ListItem-paddingLeft)) calc(-1 * var(--ListItem-paddingRight))",
      "--ListItemButton-marginBlock": "calc(-1 * var(--ListItem-paddingY))",
      alignItems: "center",
      gap: "var(--ListItem-gap)",
      marginInline: "var(--ListItem-marginInline)"
    },
    t.nested && {
      // add negative margin to NestedList equal to this ListItem padding
      "--NestedList-marginRight": "calc(-1 * var(--ListItem-paddingRight))",
      "--NestedList-marginLeft": "calc(-1 * var(--ListItem-paddingLeft))",
      "--NestedListItem-paddingLeft": "calc(var(--ListItem-paddingLeft) + var(--List-nestedInsetStart))",
      // add negative margin to ListItem, ListItemButton to make them start from the edge.
      "--ListItemButton-marginBlock": "0px",
      "--ListItemButton-marginInline": "calc(-1 * var(--ListItem-paddingLeft)) calc(-1 * var(--ListItem-paddingRight))",
      "--ListItem-marginInline": "calc(-1 * var(--ListItem-paddingLeft)) calc(-1 * var(--ListItem-paddingRight))",
      flexDirection: "column"
    },
    // Base styles
    u({
      // Integration with control elements, for example Checkbox, Radio.
      "--unstable_actionRadius": "calc(var(--ListItem-radius) - var(--variant-borderWidth, 0px))"
    }, t.startAction && {
      "--unstable_startActionWidth": "2rem"
      // to add sufficient padding-left on ListItemButton
    }, t.endAction && {
      "--unstable_endActionWidth": "2.5rem"
      // to add sufficient padding-right on ListItemButton
    }, {
      boxSizing: "border-box",
      borderRadius: "var(--ListItem-radius)",
      display: "var(--_ListItem-display)",
      "&:not([hidden])": {
        "--_ListItem-display": "var(--_List-markerDisplay, flex)"
      },
      flex: "none",
      // prevent children from shrinking when the List's height is limited.
      listStyleType: "var(--_List-markerType, disc)",
      position: "relative",
      paddingBlockStart: t.nested ? 0 : "var(--ListItem-paddingY)",
      paddingBlockEnd: t.nested ? 0 : "var(--ListItem-paddingY)",
      paddingInlineStart: "var(--ListItem-paddingLeft)",
      paddingInlineEnd: "var(--ListItem-paddingRight)"
    }, t["data-first-child"] === void 0 && u({}, t.row ? {
      marginInlineStart: "var(--List-gap)"
    } : {
      marginBlockStart: "var(--List-gap)"
    }), t.row && t.wrap && {
      marginInlineStart: "var(--List-gap)",
      marginBlockStart: "var(--List-gap)"
    }, {
      minBlockSize: "var(--ListItem-minHeight)"
    }, t.sticky && {
      // sticky in list item can be found in grouped options
      position: "sticky",
      top: "var(--ListItem-stickyTop, 0px)",
      // integration with Menu and Select.
      zIndex: 1,
      background: `var(--ListItem-stickyBackground, ${e.vars.palette.background.body})`
    }, {
      [`.${si.nested} > &`]: {
        "--_ListItem-display": "flex"
      }
    }),
    (o = e.variants[t.variant]) == null ? void 0 : o[t.color]
  ];
}), V$ = G(H$, {
  name: "JoyListItem",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), W$ = G("div", {
  name: "JoyListItem",
  slot: "StartAction",
  overridesResolver: (e, t) => t.startAction
})(({
  ownerState: e
}) => ({
  display: "inherit",
  position: "absolute",
  top: e.nested ? "calc(var(--ListItem-minHeight) / 2)" : "50%",
  left: 0,
  transform: "translate(var(--ListItem-startActionTranslateX), -50%)",
  zIndex: 1
  // to stay on top of ListItemButton (default `position: relative`).
})), U$ = G("div", {
  name: "JoyListItem",
  slot: "StartAction",
  overridesResolver: (e, t) => t.startAction
})(({
  ownerState: e
}) => ({
  display: "inherit",
  position: "absolute",
  top: e.nested ? "calc(var(--ListItem-minHeight) / 2)" : "50%",
  right: 0,
  transform: "translate(var(--ListItem-endActionTranslateX), -50%)"
})), ro = /* @__PURE__ */ h.forwardRef(function(t, o) {
  const r = Te({
    props: t,
    name: "JoyListItem"
  }), n = h.useContext(ll), i = h.useContext(Pp), a = h.useContext(aa), s = h.useContext(Rp), l = h.useContext(li), {
    component: d,
    className: c,
    children: f,
    nested: p = !1,
    sticky: v = !1,
    variant: b = "plain",
    color: y = "neutral",
    startAction: x,
    endAction: C,
    role: S,
    slots: $ = {},
    slotProps: R = {}
  } = r, P = U(r, F$), [g, k] = h.useState(""), [T, j] = (i == null ? void 0 : i.split(":")) || ["", ""], O = d || (T && !T.match(/^(ul|ol|menu)$/) ? "div" : void 0);
  let A = n === "menu" ? "none" : void 0;
  i && (A = {
    menu: "none",
    menubar: "none",
    group: "presentation"
  }[j]), S && (A = S);
  const D = u({}, r, {
    sticky: v,
    startAction: x,
    endAction: C,
    row: a,
    wrap: s,
    variant: b,
    color: y,
    nesting: l,
    nested: p,
    component: O,
    role: A
  }), M = N$(D), E = u({}, P, {
    component: O,
    slots: $,
    slotProps: R
  }), [w, I] = Z("root", {
    additionalProps: {
      role: A
    },
    ref: o,
    className: fe(M.root, c),
    elementType: V$,
    externalForwardedProps: E,
    ownerState: D
  }), [z, _] = Z("startAction", {
    className: M.startAction,
    elementType: W$,
    externalForwardedProps: E,
    ownerState: D
  }), [L, N] = Z("endAction", {
    className: M.endAction,
    elementType: U$,
    externalForwardedProps: E,
    ownerState: D
  });
  return /* @__PURE__ */ m.jsx(wp.Provider, {
    value: k,
    children: /* @__PURE__ */ m.jsx(li.Provider, {
      value: p ? g || !0 : !1,
      children: /* @__PURE__ */ m.jsxs(w, u({}, I, {
        children: [x && /* @__PURE__ */ m.jsx(z, u({}, _, {
          children: x
        })), h.Children.map(f, (Y, ee) => /* @__PURE__ */ h.isValidElement(Y) ? /* @__PURE__ */ h.cloneElement(Y, u({}, ee === 0 && {
          "data-first-child": ""
        }, Qs(Y, ["ListItem"]) && {
          // The ListItem of ListItem should not be 'li'
          component: Y.props.component || "div"
        })) : Y), C && /* @__PURE__ */ m.jsx(L, u({}, N, {
          children: C
        }))]
      }))
    })
  });
});
ro.muiName = "ListItem";
const Tp = {
  "--NestedList-marginRight": "0px",
  "--NestedList-marginLeft": "0px",
  "--NestedListItem-paddingLeft": "var(--ListItem-paddingX)",
  // reset ListItem, ListItemButton negative margin (caused by NestedListItem)
  "--ListItemButton-marginBlock": "0px",
  "--ListItemButton-marginInline": "0px",
  "--ListItem-marginBlock": "0px",
  "--ListItem-marginInline": "0px"
};
function cl(e) {
  const {
    children: t,
    nested: o,
    row: r = !1,
    wrap: n = !1
  } = e, i = /* @__PURE__ */ m.jsx(aa.Provider, {
    value: r,
    children: /* @__PURE__ */ m.jsx(Rp.Provider, {
      value: n,
      children: h.Children.map(t, (a, s) => /* @__PURE__ */ h.isValidElement(a) ? /* @__PURE__ */ h.cloneElement(a, u({}, s === 0 && {
        "data-first-child": ""
      }, s === h.Children.count(t) - 1 && {
        "data-last-child": ""
      })) : a)
    })
  });
  return o === void 0 ? i : /* @__PURE__ */ m.jsx(li.Provider, {
    value: o,
    children: i
  });
}
const vn = ({
  theme: e,
  ownerState: t
}, o) => {
  let r = {};
  function n(i) {
    if (typeof i == "function") {
      const a = i(e);
      n(a);
    } else
      Array.isArray(i) ? i.forEach((a) => {
        typeof a != "boolean" && n(a);
      }) : typeof i == "object" && (r = u({}, r, i));
  }
  return t.sx && (n(t.sx), o.forEach((i) => {
    var s;
    const a = r[i];
    typeof a == "string" || typeof a == "number" ? i === "borderRadius" ? typeof a == "number" ? r[i] = `${a}px` : r[i] = ((s = e.vars) == null ? void 0 : s.radius[a]) || a : ["p", "padding", "m", "margin"].indexOf(i) !== -1 && typeof a == "number" ? r[i] = e.spacing(a) : r[i] = a : typeof a == "function" ? r[i] = a(e) : r[i] = void 0;
  })), r;
};
function G$(e) {
  return we("MuiList", e);
}
const K$ = Pe("MuiList", ["root", "nesting", "scoped", "sizeSm", "sizeMd", "sizeLg", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "colorContext", "variantPlain", "variantOutlined", "variantSoft", "variantSolid", "horizontal", "vertical"]), dl = /* @__PURE__ */ h.createContext(void 0), J$ = ["component", "className", "children", "size", "orientation", "wrap", "variant", "color", "role", "slots", "slotProps"], q$ = (e) => {
  const {
    variant: t,
    color: o,
    size: r,
    nesting: n,
    orientation: i,
    instanceSize: a
  } = e, s = {
    root: ["root", i, t && `variant${ae(t)}`, o && `color${ae(o)}`, !a && !n && r && `size${ae(r)}`, a && `size${ae(a)}`, n && "nesting"]
  };
  return Re(s, G$, {});
}, ul = G("ul")(({
  theme: e,
  ownerState: t
}) => {
  var a;
  const {
    p: o,
    padding: r,
    borderRadius: n
  } = vn({
    theme: e,
    ownerState: t
  }, ["p", "padding", "borderRadius"]);
  function i(s) {
    return s === "sm" ? {
      "--ListDivider-gap": "0.25rem",
      "--ListItem-minHeight": "2rem",
      "--ListItem-paddingY": "3px",
      "--ListItem-paddingX": t.marker ? "3px" : "0.5rem",
      "--ListItem-gap": "0.5rem",
      "--ListItemDecorator-size": t.orientation === "horizontal" ? "1.5rem" : "2rem",
      "--Icon-fontSize": e.vars.fontSize.lg
    } : s === "md" ? {
      "--ListDivider-gap": "0.375rem",
      "--ListItem-minHeight": "2.25rem",
      "--ListItem-paddingY": "0.25rem",
      "--ListItem-paddingX": t.marker ? "0.25rem" : "0.75rem",
      "--ListItem-gap": "0.625rem",
      "--ListItemDecorator-size": t.orientation === "horizontal" ? "1.75rem" : "2.5rem",
      "--Icon-fontSize": e.vars.fontSize.xl
    } : s === "lg" ? {
      "--ListDivider-gap": "0.5rem",
      "--ListItem-minHeight": "2.75rem",
      "--ListItem-paddingY": "0.375rem",
      "--ListItem-paddingX": t.marker ? "0.5rem" : "1rem",
      "--ListItem-gap": "0.75rem",
      "--ListItemDecorator-size": t.orientation === "horizontal" ? "2.25rem" : "3rem",
      "--Icon-fontSize": e.vars.fontSize.xl2
    } : {};
  }
  return [t.nesting && u({}, i(t.instanceSize), {
    "--ListItem-paddingRight": "var(--ListItem-paddingX)",
    "--ListItem-paddingLeft": "var(--NestedListItem-paddingLeft)",
    // reset ListItem, ListItemButton negative margin (caused by NestedListItem)
    "--ListItemButton-marginBlock": "0px",
    "--ListItemButton-marginInline": "0px",
    "--ListItem-marginBlock": "0px",
    "--ListItem-marginInline": "0px",
    padding: 0
  }, t.marker && {
    paddingInlineStart: "calc(3ch - var(--_List-markerDeduct, 0px))"
    // the width of the marker
  }, {
    marginInlineStart: "var(--NestedList-marginLeft)",
    marginInlineEnd: "var(--NestedList-marginRight)",
    marginBlockStart: "var(--List-gap)",
    marginBlockEnd: "initial"
    // reset user agent stylesheet.
  }), !t.nesting && u({}, i(t.size), {
    "--List-gap": "0px",
    "--List-nestedInsetStart": "0px",
    "--ListItem-paddingLeft": "var(--ListItem-paddingX)",
    "--ListItem-paddingRight": "var(--ListItem-paddingX)"
  }, t.marker && {
    "--_List-markerDeduct": "1ch"
  }, {
    // Automatic radius adjustment kicks in only if '--List-padding' and '--List-radius' are provided.
    "--unstable_List-childRadius": "calc(max(var(--List-radius) - var(--List-padding), min(var(--List-padding) / 2, var(--List-radius) / 2)) - var(--variant-borderWidth, 0px))",
    "--ListItem-radius": "var(--unstable_List-childRadius)",
    // by default, The ListItem & ListItemButton use automatic radius adjustment based on the parent List.
    "--ListItem-startActionTranslateX": "calc(0.5 * var(--ListItem-paddingLeft))",
    "--ListItem-endActionTranslateX": "calc(-0.5 * var(--ListItem-paddingRight))",
    margin: "initial"
  }, e.typography[`body-${t.size}`], t.orientation === "horizontal" ? u({}, t.wrap ? {
    padding: "var(--List-padding)",
    // Fallback is not needed for row-wrap List
    marginInlineStart: "calc(-1 * var(--List-gap))",
    marginBlockStart: "calc(-1 * var(--List-gap))"
  } : {
    paddingInline: "var(--List-padding, var(--ListDivider-gap))",
    paddingBlock: "var(--List-padding)"
  }) : {
    paddingBlock: "var(--List-padding, var(--ListDivider-gap))",
    paddingInline: "var(--List-padding)"
  }, t.marker && {
    paddingInlineStart: "3ch"
    // the width of the marker
  }), u({
    boxSizing: "border-box",
    borderRadius: "var(--List-radius)",
    listStyle: "none",
    display: "flex",
    flexDirection: t.orientation === "horizontal" ? "row" : "column"
  }, t.wrap && {
    flexWrap: "wrap"
  }, t.marker && {
    "--_List-markerDisplay": "list-item",
    "--_List-markerType": t.marker,
    lineHeight: "calc(var(--ListItem-minHeight) - 2 * var(--ListItem-paddingY))"
  }, {
    flexGrow: 1,
    position: "relative"
  }, (a = e.variants[t.variant]) == null ? void 0 : a[t.color], {
    "--unstable_List-borderWidth": "var(--variant-borderWidth, 0px)"
  }, n !== void 0 && {
    "--List-radius": n
  }, o !== void 0 && {
    "--List-padding": o
  }, r !== void 0 && {
    "--List-padding": r
  })];
}), Y$ = G(ul, {
  name: "JoyList",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), lr = /* @__PURE__ */ h.forwardRef(function(t, o) {
  const r = h.useContext(li), n = h.useContext(ll), i = h.useContext(dl), a = Te({
    props: t,
    name: "JoyList"
  }), {
    component: s,
    className: l,
    children: d,
    size: c,
    orientation: f = "vertical",
    wrap: p = !1,
    variant: v = "plain",
    color: b = "neutral",
    role: y,
    slots: x = {},
    slotProps: C = {}
  } = a, S = U(a, J$), $ = c || (t.size ?? "md");
  let R;
  n && (R = "group"), i && (R = "presentation"), y && (R = y);
  const P = u({}, a, {
    instanceSize: t.size,
    size: $,
    nesting: r,
    orientation: f,
    wrap: p,
    variant: v,
    color: b,
    role: R
  }), g = q$(P), k = u({}, S, {
    component: s,
    slots: x,
    slotProps: C
  }), [T, j] = Z("root", {
    ref: o,
    className: fe(g.root, l),
    elementType: Y$,
    externalForwardedProps: k,
    ownerState: P,
    additionalProps: {
      as: s,
      role: R,
      "aria-labelledby": typeof r == "string" ? r : void 0
    }
  });
  return /* @__PURE__ */ m.jsx(T, u({}, j, {
    children: /* @__PURE__ */ m.jsx(Pp.Provider, {
      value: `${typeof s == "string" ? s : ""}:${R || ""}`,
      children: /* @__PURE__ */ m.jsx(cl, {
        row: f === "horizontal",
        wrap: p,
        children: d
      })
    })
  }));
});
function X$(e) {
  return we("MuiListItemButton", e);
}
const _o = Pe("MuiListItemButton", ["root", "horizontal", "vertical", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "colorContext", "focusVisible", "disabled", "selected", "variantPlain", "variantSoft", "variantOutlined", "variantSolid"]), Dp = /* @__PURE__ */ h.createContext("horizontal"), Z$ = ["children", "className", "action", "component", "orientation", "role", "selected", "color", "variant", "slots", "slotProps"], Q$ = (e) => {
  const {
    color: t,
    disabled: o,
    focusVisible: r,
    focusVisibleClassName: n,
    selected: i,
    variant: a
  } = e, s = {
    root: ["root", o && "disabled", r && "focusVisible", t && `color${ae(t)}`, i && "selected", a && `variant${ae(a)}`]
  }, l = Re(s, X$, {});
  return r && n && (l.root += ` ${n}`), l;
}, pl = G("div")(({
  theme: e,
  ownerState: t
}) => {
  var o, r, n, i, a, s;
  return u({
    "--Icon-margin": "initial",
    // reset the icon's margin.
    "--Icon-color": t.color !== "neutral" || t.variant === "solid" ? "currentColor" : e.vars.palette.text.icon,
    WebkitTapHighlightColor: "transparent",
    boxSizing: "border-box",
    position: "relative",
    font: "inherit",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
    // always stretch itself to fill the parent (List|ListItem)
    gap: "var(--ListItem-gap)"
  }, t.orientation === "vertical" && {
    flexDirection: "column",
    justifyContent: "center"
  }, {
    textAlign: "initial",
    textDecoration: "initial",
    // reset native anchor tag
    backgroundColor: "initial",
    // reset button background
    cursor: "pointer",
    // In some cases, ListItemButton is a child of ListItem so the margin needs to be controlled by the ListItem. The value is negative to account for the ListItem's padding
    marginInline: "var(--ListItemButton-marginInline)",
    marginBlock: "var(--ListItemButton-marginBlock)"
  }, t["data-first-child"] === void 0 && {
    marginInlineStart: t.row ? "var(--List-gap)" : void 0,
    marginBlockStart: t.row ? void 0 : "var(--List-gap)"
  }, {
    // account for the border width, so that all of the ListItemButtons content aligned horizontally
    paddingBlock: "calc(var(--ListItem-paddingY) - var(--variant-borderWidth, 0px))",
    // account for the border width, so that all of the ListItemButtons content aligned vertically
    paddingInlineStart: "calc(var(--ListItem-paddingLeft) + var(--ListItem-startActionWidth, var(--unstable_startActionWidth, 0px)))",
    // --internal variable makes it possible to customize the actionWidth from the top List
    paddingInlineEnd: "calc(var(--ListItem-paddingRight) + var(--ListItem-endActionWidth, var(--unstable_endActionWidth, 0px)))",
    // --internal variable makes it possible to customize the actionWidth from the top List
    minBlockSize: "var(--ListItem-minHeight)",
    border: "1px solid transparent",
    // use `transparent` as a placeholder to prevent the button from jumping when switching to `outlined` variant
    borderRadius: "var(--ListItem-radius)",
    flex: "var(--unstable_ListItem-flex, none)",
    // prevent children from shrinking when the List's height is limited.
    fontSize: "inherit",
    // prevent user agent style when component="button"
    lineHeight: "inherit",
    // prevent user agent style when component="button"
    minInlineSize: 0,
    [e.focus.selector]: u({}, e.focus.default, {
      zIndex: 1
      // to be above of the next element. For example, the first Tab item should be above the second so that the outline is above the second Tab.
    })
  }, (o = e.variants[t.variant]) == null ? void 0 : o[t.color], {
    "&:active": (r = e.variants[`${t.variant}Active`]) == null ? void 0 : r[t.color],
    [`.${si.root} > &`]: {
      "--unstable_ListItem-flex": "1 0 0%"
      // grow to fill the available space of ListItem
    },
    [`&.${_o.selected}`]: u({}, (n = e.variants[`${t.variant}Active`]) == null ? void 0 : n[t.color], {
      "--Icon-color": "currentColor"
    }),
    [`&:not(.${_o.selected}, [aria-selected="true"])`]: {
      "&:hover": (i = e.variants[`${t.variant}Hover`]) == null ? void 0 : i[t.color],
      "&:active": (a = e.variants[`${t.variant}Active`]) == null ? void 0 : a[t.color]
    },
    [`&.${_o.disabled}`]: u({}, (s = e.variants[`${t.variant}Disabled`]) == null ? void 0 : s[t.color])
  });
}), ek = G(pl, {
  name: "JoyListItemButton",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})(({
  ownerState: e,
  theme: t
}) => u({}, !e.row && {
  [`&.${_o.selected}`]: {
    fontWeight: t.vars.fontWeight.md
  }
})), tk = /* @__PURE__ */ h.forwardRef(function(t, o) {
  const r = Te({
    props: t,
    name: "JoyListItemButton"
  }), n = h.useContext(aa), {
    children: i,
    className: a,
    action: s,
    component: l = "div",
    orientation: d = "horizontal",
    role: c,
    selected: f = !1,
    color: p = "neutral",
    variant: v = "plain",
    slots: b = {},
    slotProps: y = {}
  } = r, x = U(r, Z$), C = h.useRef(null), S = Ze(C, o), {
    focusVisible: $,
    setFocusVisible: R,
    getRootProps: P
  } = ko(u({}, r, {
    rootRef: S
  }));
  h.useImperativeHandle(s, () => ({
    focusVisible: () => {
      var A;
      R(!0), (A = C.current) == null || A.focus();
    }
  }), [R]);
  const g = u({}, r, {
    component: l,
    color: p,
    focusVisible: $,
    orientation: d,
    row: n,
    selected: f,
    variant: v
  }), k = Q$(g), T = u({}, x, {
    component: l,
    slots: b,
    slotProps: y
  }), [j, O] = Z("root", {
    ref: o,
    className: fe(k.root, a),
    elementType: ek,
    externalForwardedProps: T,
    ownerState: g,
    getSlotProps: P
  });
  return /* @__PURE__ */ m.jsx(Dp.Provider, {
    value: d,
    children: /* @__PURE__ */ m.jsx(j, u({}, O, {
      role: c ?? O.role,
      children: i
    }))
  });
}), Ep = tk;
function ok(e) {
  return we("MuiSvgIcon", e);
}
Pe("MuiSvgIcon", ["root", "colorInherit", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "fontSizeInherit", "fontSizeXs", "fontSizeSm", "fontSizeMd", "fontSizeLg", "fontSizeXl", "fontSizeXl2", "fontSizeXl3", "fontSizeXl4", "sizeSm", "sizeMd", "sizeLg"]);
const rk = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox", "size", "slots", "slotProps"], nk = (e) => {
  const {
    color: t,
    size: o,
    fontSize: r
  } = e, n = {
    root: ["root", t && t !== "inherit" && `color${ae(t)}`, o && `size${ae(o)}`, r && `fontSize${ae(r)}`]
  };
  return Re(n, ok, {});
}, Xc = {
  sm: "xl",
  md: "xl2",
  lg: "xl3"
}, ik = G("svg", {
  name: "JoySvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})(({
  theme: e,
  ownerState: t
}) => {
  var o;
  return u({}, t.instanceSize && {
    "--Icon-fontSize": e.vars.fontSize[Xc[t.instanceSize]]
  }, t.instanceFontSize && t.instanceFontSize !== "inherit" && {
    "--Icon-fontSize": e.vars.fontSize[t.instanceFontSize]
  }, {
    userSelect: "none",
    margin: "var(--Icon-margin)",
    width: "1em",
    height: "1em",
    display: "inline-block",
    // the <svg> will define the property that has `currentColor`
    // for example heroicons uses fill="none" and stroke="currentColor"
    fill: t.hasSvgAsChild ? void 0 : "currentColor",
    flexShrink: 0,
    fontSize: `var(--Icon-fontSize, ${e.vars.fontSize[Xc[t.size]] || "unset"})`
  }, t.fontSize && t.fontSize !== "inherit" && {
    fontSize: `var(--Icon-fontSize, ${e.fontSize[t.fontSize]})`
  }, !t.htmlColor && u({
    color: `var(--Icon-color, ${e.vars.palette.text.icon})`
  }, t.color === "inherit" && {
    color: "inherit"
  }, t.color !== "inherit" && e.vars.palette[t.color] && {
    color: `rgba(${(o = e.vars.palette[t.color]) == null ? void 0 : o.mainChannel} / 1)`
  }));
}), Zc = /* @__PURE__ */ h.forwardRef(function(t, o) {
  const r = Te({
    props: t,
    name: "JoySvgIcon"
  }), {
    children: n,
    className: i,
    color: a,
    component: s = "svg",
    fontSize: l,
    htmlColor: d,
    inheritViewBox: c = !1,
    titleAccess: f,
    viewBox: p = "0 0 24 24",
    size: v = "md",
    slots: b = {},
    slotProps: y = {}
  } = r, x = U(r, rk), C = /* @__PURE__ */ h.isValidElement(n) && n.type === "svg", S = u({}, r, {
    color: a,
    component: s,
    size: v,
    instanceSize: t.size,
    fontSize: l,
    instanceFontSize: t.fontSize,
    inheritViewBox: c,
    viewBox: p,
    hasSvgAsChild: C
  }), $ = nk(S), R = u({}, x, {
    component: s,
    slots: b,
    slotProps: y
  }), [P, g] = Z("root", {
    ref: o,
    className: fe($.root, i),
    elementType: ik,
    externalForwardedProps: R,
    ownerState: S,
    additionalProps: u({
      color: d,
      focusable: !1
    }, f && {
      role: "img"
    }, !f && {
      "aria-hidden": !0
    }, !c && {
      viewBox: p
    }, C && n.props)
  });
  return /* @__PURE__ */ m.jsxs(P, u({}, g, {
    children: [C ? n.props.children : n, f ? /* @__PURE__ */ m.jsx("title", {
      children: f
    }) : null]
  }));
});
function Pr(e, t) {
  function o(r, n) {
    return /* @__PURE__ */ m.jsx(Zc, u({
      "data-testid": `${t}Icon`,
      ref: n
    }, r, {
      children: e
    }));
  }
  return o.muiName = Zc.muiName, /* @__PURE__ */ h.memo(/* @__PURE__ */ h.forwardRef(o));
}
const fl = (e) => (t) => `--${e ? `${e}-` : ""}${t.replace(/^--/, "")}`, xr = "data-skip-inverted-colors", zp = `& :not([${xr}], [${xr}] *)`, Op = (e) => {
  var o, r, n, i, a, s, l, d, c, f, p, v, b, y, x, C, S, $, R, P, g, k;
  const t = fl(e.cssVarPrefix);
  return {
    "--variant-plainColor": "var(--variant-plainColor) !important",
    "--variant-plainHoverColor": "var(--variant-plainHoverColor) !important",
    "--variant-plainHoverBg": "var(--variant-plainHoverBg) !important",
    "--variant-plainActiveBg": "var(--variant-plainActiveBg) !important",
    "--variant-plainDisabledColor": "var(--variant-plainDisabledColor) !important",
    "--variant-outlinedColor": "var(--variant-outlinedColor) !important",
    "--variant-outlinedBorder": "var(--variant-outlinedBorder) !important",
    "--variant-outlinedHoverColor": "var(--variant-outlinedHoverColor) !important",
    "--variant-outlinedHoverBorder": "var(--variant-outlinedHoverBorder) !important",
    "--variant-outlinedHoverBg": "var(--variant-outlinedHoverBg) !important",
    "--variant-outlinedActiveBg": "var(--variant-outlinedActiveBg) !important",
    "--variant-outlinedDisabledColor": "var(--variant-outlinedDisabledColor) !important",
    "--variant-outlinedDisabledBorder": "var(--variant-outlinedDisabledBorder) !important",
    "--variant-softColor": "var(--variant-softColor) !important",
    "--variant-softHoverColor": "var(--variant-softHoverColor) !important",
    "--variant-softBg": "var(--variant-softBg) !important",
    "--variant-softHoverBg": "var(--variant-softHoverBg) !important",
    "--variant-softActiveBg": "var(--variant-softActiveBg) !important",
    "--variant-softActiveColor": "var(--variant-softActiveColor) !important",
    "--variant-softDisabledColor": "var(--variant-softDisabledColor) !important",
    "--variant-softDisabledBg": "var(--variant-softDisabledBg) !important",
    "--variant-solidColor": "var(--variant-solidColor) !important",
    "--variant-solidBg": "var(--variant-solidBg) !important",
    "--variant-solidHoverBg": "var(--variant-solidHoverBg) !important",
    "--variant-solidActiveBg": "var(--variant-solidActiveBg) !important",
    "--variant-solidDisabledColor": "var(--variant-solidDisabledColor) !important",
    "--variant-solidDisabledBg": "var(--variant-solidDisabledBg) !important",
    "--Badge-ringColor": "var(--Badge-ringColor) !important",
    colorScheme: "unset",
    [e.getColorSchemeSelector("light")]: {
      [t("--palette-focusVisible")]: `${(o = e.colorSchemes.light) == null ? void 0 : o.palette.focusVisible} !important`,
      [t("--palette-background-body")]: `${(r = e.colorSchemes.light) == null ? void 0 : r.palette.background.body} !important`,
      [t("--palette-background-surface")]: `${(n = e.colorSchemes.light) == null ? void 0 : n.palette.background.surface} !important`,
      [t("--palette-background-popup")]: `${(i = e.colorSchemes.light) == null ? void 0 : i.palette.background.popup} !important`,
      [t("--palette-background-level1")]: `${(a = e.colorSchemes.light) == null ? void 0 : a.palette.background.level1} !important`,
      [t("--palette-background-level2")]: `${(s = e.colorSchemes.light) == null ? void 0 : s.palette.background.level2} !important`,
      [t("--palette-background-level3")]: `${(l = e.colorSchemes.light) == null ? void 0 : l.palette.background.level3} !important`,
      [t("--palette-text-primary")]: `${(d = e.colorSchemes.light) == null ? void 0 : d.palette.text.primary} !important`,
      [t("--palette-text-secondary")]: `${(c = e.colorSchemes.light) == null ? void 0 : c.palette.text.secondary} !important`,
      [t("--palette-text-tertiary")]: `${(f = e.colorSchemes.light) == null ? void 0 : f.palette.text.tertiary} !important`,
      [t("--palette-divider")]: `${(p = e.colorSchemes.light) == null ? void 0 : p.palette.divider} !important`
    },
    [e.getColorSchemeSelector("dark")]: {
      [t("--palette-focusVisible")]: `${(v = e.colorSchemes.dark) == null ? void 0 : v.palette.focusVisible} !important`,
      [t("--palette-background-body")]: `${(b = e.colorSchemes.dark) == null ? void 0 : b.palette.background.body} !important`,
      [t("--palette-background-surface")]: `${(y = e.colorSchemes.dark) == null ? void 0 : y.palette.background.surface} !important`,
      [t("--palette-background-popup")]: `${(x = e.colorSchemes.dark) == null ? void 0 : x.palette.background.popup} !important`,
      [t("--palette-background-level1")]: `${(C = e.colorSchemes.dark) == null ? void 0 : C.palette.background.level1} !important`,
      [t("--palette-background-level2")]: `${(S = e.colorSchemes.dark) == null ? void 0 : S.palette.background.level2} !important`,
      [t("--palette-background-level3")]: `${($ = e.colorSchemes.dark) == null ? void 0 : $.palette.background.level3} !important`,
      [t("--palette-text-primary")]: `${(R = e.colorSchemes.dark) == null ? void 0 : R.palette.text.primary} !important`,
      [t("--palette-text-secondary")]: `${(P = e.colorSchemes.dark) == null ? void 0 : P.palette.text.secondary} !important`,
      [t("--palette-text-tertiary")]: `${(g = e.colorSchemes.dark) == null ? void 0 : g.palette.text.tertiary} !important`,
      [t("--palette-divider")]: `${(k = e.colorSchemes.dark) == null ? void 0 : k.palette.divider} !important`
    }
  };
};
function ak(e) {
  return e.theme !== void 0;
}
const ml = (e) => (t) => {
  const o = ak(t) ? t.theme : t, r = il(o.cssVarPrefix), n = fl(o.cssVarPrefix), i = (a) => {
    const s = a.split("-");
    return r(a, o.palette[s[1]][s[2]]);
  };
  return {
    [zp]: {
      "--Badge-ringColor": i(`palette-${e}-solidBg`),
      "--Icon-color": "currentColor",
      [`${o.getColorSchemeSelector("light")}, ${o.getColorSchemeSelector("dark")}`]: {
        colorScheme: "dark",
        [n("--palette-focusVisible")]: i(`palette-${e}-200`),
        [n("--palette-background-body")]: "rgba(0 0 0 / 0.1)",
        [n("--palette-background-surface")]: "rgba(0 0 0 / 0.06)",
        [n("--palette-background-popup")]: i(`palette-${e}-700`),
        [n("--palette-background-level1")]: `rgba(${i(`palette-${e}-darkChannel`)} / 0.2)`,
        [n("--palette-background-level2")]: `rgba(${i(`palette-${e}-darkChannel`)} / 0.36)`,
        [n("--palette-background-level3")]: `rgba(${i(`palette-${e}-darkChannel`)} / 0.6)`,
        [n("--palette-text-primary")]: i("palette-common-white"),
        [n("--palette-text-secondary")]: i(`palette-${e}-200`),
        [n("--palette-text-tertiary")]: i(`palette-${e}-300`),
        [n("--palette-text-icon")]: i(`palette-${e}-200`),
        [n("--palette-divider")]: `rgba(${i(`palette-${e}-lightChannel`)} / 0.32)`,
        "--variant-plainColor": i(`palette-${e}-50`),
        "--variant-plainHoverColor": "#fff",
        "--variant-plainHoverBg": `rgba(${i(`palette-${e}-lightChannel`)} / 0.12)`,
        "--variant-plainActiveBg": `rgba(${i(`palette-${e}-lightChannel`)} / 0.32)`,
        "--variant-plainDisabledColor": `rgba(${i(`palette-${e}-lightChannel`)} / 0.72)`,
        "--variant-outlinedColor": i(`palette-${e}-50`),
        "--variant-outlinedBorder": `rgba(${i(`palette-${e}-lightChannel`)} / 0.5)`,
        "--variant-outlinedHoverColor": "#fff",
        "--variant-outlinedHoverBorder": i(`palette-${e}-300`),
        "--variant-outlinedHoverBg": `rgba(${i(`palette-${e}-lightChannel`)} / 0.12)`,
        "--variant-outlinedActiveBg": `rgba(${i(`palette-${e}-lightChannel`)} / 0.32)`,
        "--variant-outlinedDisabledColor": `rgba(${i(`palette-${e}-lightChannel`)} / 0.72)`,
        "--variant-outlinedDisabledBorder": "rgba(255 255 255 / 0.2)",
        "--variant-softColor": i("palette-common-white"),
        "--variant-softHoverColor": i("palette-common-white"),
        "--variant-softBg": `rgba(${i(`palette-${e}-lightChannel`)} / 0.24)`,
        "--variant-softHoverBg": `rgba(${i(`palette-${e}-lightChannel`)} / 0.36)`,
        "--variant-softActiveBg": `rgba(${i(`palette-${e}-lightChannel`)} / 0.16)`,
        "--variant-softActiveColor": "#fff",
        "--variant-softDisabledColor": `rgba(${i(`palette-${e}-lightChannel`)} / 0.72)`,
        "--variant-softDisabledBg": `rgba(${i(`palette-${e}-lightChannel`)} / 0.1)`,
        "--variant-solidColor": i(`palette-${e}-${e === "neutral" ? "600" : "500"}`),
        "--variant-solidBg": i("palette-common-white"),
        "--variant-solidHoverBg": i("palette-common-white"),
        "--variant-solidActiveBg": i(`palette-${e}-100`),
        "--variant-solidDisabledColor": `rgba(${i(`palette-${e}-lightChannel`)} / 0.72)`,
        "--variant-solidDisabledBg": `rgba(${i(`palette-${e}-lightChannel`)} / 0.1)`
      }
    },
    [`&, & [${xr}]`]: Op(o)
  };
}, hl = (e) => (t) => {
  const {
    theme: o = t
  } = t, r = il(o.cssVarPrefix), n = fl(o.cssVarPrefix), i = (a) => {
    const s = a.split("-");
    return r(a, o.palette[s[1]][s[2]]);
  };
  return {
    [zp]: {
      "--Badge-ringColor": i(`palette-${e}-softBg`),
      "--Icon-color": "currentColor",
      [o.getColorSchemeSelector("dark")]: {
        [n("--palette-focusVisible")]: i(`palette-${e}-300`),
        [n("--palette-background-body")]: `rgba(${i(`palette-${e}-mainChannel`)} / 0.1)`,
        [n("--palette-background-surface")]: `rgba(${i(`palette-${e}-mainChannel`)} / 0.08)`,
        [n("--palette-background-level1")]: `rgba(${i(`palette-${e}-mainChannel`)} / 0.2)`,
        [n("--palette-background-level2")]: `rgba(${i(`palette-${e}-mainChannel`)} / 0.4)`,
        [n("--palette-background-level3")]: `rgba(${i(`palette-${e}-mainChannel`)} / 0.6)`,
        [n("--palette-text-primary")]: i(`palette-${e}-100`),
        [n("--palette-text-secondary")]: `rgba(${i(`palette-${e}-lightChannel`)} / 0.72)`,
        [n("--palette-text-tertiary")]: `rgba(${i(`palette-${e}-lightChannel`)} / 0.6)`,
        [n("--palette-text-icon")]: `rgba(${i(`palette-${e}-lightChannel`)} / 0.6)`,
        [n("--palette-divider")]: `rgba(${i(`palette-${e}-lightChannel`)} / 0.2)`,
        "--variant-plainColor": `rgba(${i(`palette-${e}-lightChannel`)} / 1)`,
        "--variant-plainHoverColor": i(`palette-${e}-50`),
        "--variant-plainHoverBg": `rgba(${i(`palette-${e}-mainChannel`)} / 0.16)`,
        "--variant-plainActiveBg": `rgba(${i(`palette-${e}-mainChannel`)} / 0.32)`,
        "--variant-plainDisabledColor": `rgba(${i(`palette-${e}-mainChannel`)} / 0.72)`,
        "--variant-outlinedColor": `rgba(${i(`palette-${e}-lightChannel`)} / 1)`,
        "--variant-outlinedHoverColor": i(`palette-${e}-50`),
        "--variant-outlinedBg": "initial",
        "--variant-outlinedBorder": `rgba(${i(`palette-${e}-mainChannel`)} / 0.4)`,
        "--variant-outlinedHoverBorder": i(`palette-${e}-600`),
        "--variant-outlinedHoverBg": `rgba(${i(`palette-${e}-mainChannel`)} / 0.16)`,
        "--variant-outlinedActiveBg": `rgba(${i(`palette-${e}-mainChannel`)} / 0.32)`,
        "--variant-outlinedDisabledColor": `rgba(${i(`palette-${e}-mainChannel`)} / 0.72)`,
        "--variant-outlinedDisabledBorder": `rgba(${i(`palette-${e}-mainChannel`)} / 0.2)`,
        "--variant-softColor": i(`palette-${e}-200`),
        "--variant-softBg": `rgba(${i(`palette-${e}-mainChannel`)} / 0.24)`,
        "--variant-softHoverColor": "#fff",
        "--variant-softHoverBg": `rgba(${i(`palette-${e}-mainChannel`)} / 0.32)`,
        "--variant-softActiveBg": `rgba(${i(`palette-${e}-mainChannel`)} / 0.48)`,
        "--variant-softDisabledColor": `rgba(${i(`palette-${e}-mainChannel`)} / 0.72)`,
        "--variant-softDisabledBg": `rgba(${i(`palette-${e}-mainChannel`)} / 0.12)`,
        "--variant-solidColor": "#fff",
        "--variant-solidBg": i(`palette-${e}-500`),
        "--variant-solidHoverColor": "#fff",
        "--variant-solidHoverBg": i(`palette-${e}-600`),
        "--variant-solidActiveBg": i(`palette-${e}-600`),
        "--variant-solidDisabledColor": `rgba(${i(`palette-${e}-mainChannel`)} / 0.72)`,
        "--variant-solidDisabledBg": `rgba(${i(`palette-${e}-mainChannel`)} / 0.12)`
      },
      // `light` (default color scheme) should come last in case that `theme.getColorSchemeSelector()` return the same value
      [o.getColorSchemeSelector("light")]: {
        [n("--palette-focusVisible")]: i(`palette-${e}-500`),
        [n("--palette-background-body")]: `rgba(${i(`palette-${e}-mainChannel`)} / 0.1)`,
        [n("--palette-background-surface")]: `rgba(${i(`palette-${e}-mainChannel`)} / 0.08)`,
        [n("--palette-background-level1")]: `rgba(${i(`palette-${e}-mainChannel`)} / 0.2)`,
        [n("--palette-background-level2")]: `rgba(${i(`palette-${e}-mainChannel`)} / 0.32)`,
        [n("--palette-background-level3")]: `rgba(${i(`palette-${e}-mainChannel`)} / 0.48)`,
        [n("--palette-text-primary")]: i(`palette-${e}-700`),
        [n("--palette-text-secondary")]: `rgba(${i(`palette-${e}-darkChannel`)} / 0.8)`,
        [n("--palette-text-tertiary")]: `rgba(${i(`palette-${e}-darkChannel`)} / 0.68)`,
        [n("--palette-text-icon")]: i(`palette-${e}-500`),
        [n("--palette-divider")]: `rgba(${i(`palette-${e}-mainChannel`)} / 0.32)`,
        "--variant-plainColor": `rgba(${i(`palette-${e}-darkChannel`)} / 0.8)`,
        "--variant-plainHoverColor": `rgba(${i(`palette-${e}-darkChannel`)} / 1)`,
        "--variant-plainHoverBg": `rgba(${i(`palette-${e}-mainChannel`)} / 0.12)`,
        "--variant-plainActiveBg": `rgba(${i(`palette-${e}-mainChannel`)} / 0.24)`,
        "--variant-plainDisabledColor": `rgba(${i(`palette-${e}-mainChannel`)} / 0.6)`,
        "--variant-outlinedColor": `rgba(${i(`palette-${e}-mainChannel`)} / 1)`,
        "--variant-outlinedBorder": `rgba(${i(`palette-${e}-mainChannel`)} / 0.4)`,
        "--variant-outlinedHoverColor": i(`palette-${e}-600`),
        "--variant-outlinedHoverBorder": i(`palette-${e}-300`),
        "--variant-outlinedHoverBg": `rgba(${i(`palette-${e}-mainChannel`)} / 0.12)`,
        "--variant-outlinedActiveBg": `rgba(${i(`palette-${e}-mainChannel`)} / 0.24)`,
        "--variant-outlinedDisabledColor": `rgba(${i(`palette-${e}-mainChannel`)} / 0.6)`,
        "--variant-outlinedDisabledBorder": `rgba(${i(`palette-${e}-mainChannel`)} / 0.12)`,
        "--variant-softColor": i(`palette-${e}-600`),
        "--variant-softBg": `rgba(${i(`palette-${e}-lightChannel`)} / 0.8)`,
        "--variant-softHoverColor": i(`palette-${e}-700`),
        "--variant-softHoverBg": i(`palette-${e}-200`),
        "--variant-softActiveBg": i(`palette-${e}-300`),
        "--variant-softDisabledColor": `rgba(${i(`palette-${e}-mainChannel`)} / 0.6)`,
        "--variant-softDisabledBg": `rgba(${i(`palette-${e}-mainChannel`)} / 0.08)`,
        "--variant-solidColor": i("palette-common-white"),
        "--variant-solidBg": i(`palette-${e}-${e === "neutral" ? "700" : "500"}`),
        "--variant-solidHoverColor": i("palette-common-white"),
        "--variant-solidHoverBg": i(`palette-${e}-600`),
        "--variant-solidActiveBg": i(`palette-${e}-600`),
        "--variant-solidDisabledColor": `rgba(${i(`palette-${e}-mainChannel`)} / 0.6)`,
        "--variant-solidDisabledBg": `rgba(${i(`palette-${e}-mainChannel`)} / 0.08)`
      }
    },
    [`&, & [${xr}]`]: Op(o)
  };
};
function sk(e) {
  return we("MuiAspectRatio", e);
}
Pe("MuiAspectRatio", ["root", "content", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "colorContext", "variantPlain", "variantOutlined", "variantSoft", "variantSolid"]);
const lk = ["children", "ratio", "minHeight", "maxHeight", "objectFit", "color", "variant", "component", "flex", "slots", "slotProps"], ck = (e) => {
  const {
    variant: t,
    color: o
  } = e, r = {
    root: ["root"],
    content: ["content", t && `variant${ae(t)}`, o && `color${ae(o)}`]
  };
  return Re(r, sk, {});
}, dk = G("div", {
  name: "JoyAspectRatio",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})(({
  ownerState: e,
  theme: t
}) => {
  const o = typeof e.minHeight == "number" ? `${e.minHeight}px` : e.minHeight, r = typeof e.maxHeight == "number" ? `${e.maxHeight}px` : e.maxHeight;
  return {
    // a context variable for any child component
    "--AspectRatio-paddingBottom": `clamp(var(--AspectRatio-minHeight), calc(100% / (${e.ratio})), var(--AspectRatio-maxHeight))`,
    "--AspectRatio-maxHeight": r || "9999px",
    "--AspectRatio-minHeight": o || "0px",
    "--Icon-color": e.color !== "neutral" || e.variant === "solid" ? "currentColor" : t.vars.palette.text.icon,
    borderRadius: "var(--AspectRatio-radius)",
    display: e.flex ? "flex" : "block",
    flex: e.flex ? 1 : "initial",
    flexDirection: "column",
    margin: "var(--AspectRatio-margin)"
  };
}), uk = G("div", {
  name: "JoyAspectRatio",
  slot: "Content",
  overridesResolver: (e, t) => t.content
})(({
  theme: e,
  ownerState: t
}) => {
  var o;
  return u({
    flex: 1,
    position: "relative",
    borderRadius: "inherit",
    height: 0,
    paddingBottom: "calc(var(--AspectRatio-paddingBottom) - 2 * var(--variant-borderWidth, 0px))",
    overflow: "hidden",
    transition: "inherit",
    // makes it easy to add transition to the content
    // use data-attribute instead of :first-child to support zero config SSR (emotion)
    // use nested selector for integrating with nextjs image `fill` layout (spans are inserted on top of the img)
    "& [data-first-child]": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "absolute",
      width: "100%",
      height: "100%",
      objectFit: t.objectFit,
      margin: 0,
      padding: 0,
      "& > img": {
        // support art-direction that uses <picture><img /></picture>
        width: "100%",
        height: "100%",
        objectFit: t.objectFit
      }
    }
  }, e.typography["body-md"], (o = e.variants[t.variant]) == null ? void 0 : o[t.color]);
}), pk = /* @__PURE__ */ h.forwardRef(function(t, o) {
  const r = Te({
    props: t,
    name: "JoyAspectRatio"
  }), {
    children: n,
    ratio: i = "16 / 9",
    minHeight: a,
    maxHeight: s,
    objectFit: l = "cover",
    color: d = "neutral",
    variant: c = "soft",
    component: f,
    flex: p = !1,
    slots: v = {},
    slotProps: b = {}
  } = r, y = U(r, lk), x = u({}, r, {
    flex: p,
    minHeight: a,
    maxHeight: s,
    objectFit: l,
    ratio: i,
    color: d,
    variant: c
  }), C = ck(x), S = u({}, y, {
    component: f,
    slots: v,
    slotProps: b
  }), [$, R] = Z("root", {
    ref: o,
    className: C.root,
    elementType: dk,
    externalForwardedProps: S,
    ownerState: x
  }), [P, g] = Z("content", {
    className: C.content,
    elementType: uk,
    externalForwardedProps: S,
    ownerState: x
  });
  return /* @__PURE__ */ m.jsx($, u({}, R, {
    children: /* @__PURE__ */ m.jsx(P, u({}, g, {
      children: h.Children.map(n, (k, T) => T === 0 && /* @__PURE__ */ h.isValidElement(k) ? /* @__PURE__ */ h.cloneElement(k, {
        "data-first-child": ""
      }) : k)
    }))
  }));
}), Mp = Pr(/* @__PURE__ */ m.jsx("path", {
  d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close"), fk = Pr(/* @__PURE__ */ m.jsx("path", {
  d: "M7 10l5 5 5-5z"
}), "ArrowDropDown"), Ap = /* @__PURE__ */ h.createContext(void 0);
function Oo(e, t) {
  let o = t, r = e;
  return e === "outlined" && (o = "neutral", r = "plain"), e === "plain" && (o = "neutral"), {
    variant: r,
    color: o
  };
}
function gl(e, t, o = !1) {
  const r = h.useContext(Ap), [n, i] = typeof r == "string" ? r.split(":") : [], a = Oo(n || void 0, i || void 0);
  return a.variant = e || a.variant, a.color = t || (o ? i : a.color), a;
}
function vl({
  children: e,
  color: t,
  variant: o
}) {
  return /* @__PURE__ */ m.jsx(Ap.Provider, {
    value: `${o || ""}:${t || ""}`,
    children: e
  });
}
function mk(e) {
  return we("MuiIconButton", e);
}
Pe("MuiIconButton", ["root", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "colorContext", "variantPlain", "variantOutlined", "variantSoft", "variantSolid", "focusVisible", "disabled", "sizeSm", "sizeMd", "sizeLg", "loading", "loadingIndicator"]);
const jp = /* @__PURE__ */ h.createContext({}), Bp = /* @__PURE__ */ h.createContext(void 0);
function hk(e) {
  return we("MuiCircularProgress", e);
}
Pe("MuiCircularProgress", ["root", "determinate", "svg", "track", "progress", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "colorContext", "sizeSm", "sizeMd", "sizeLg", "variantPlain", "variantOutlined", "variantSoft", "variantSolid"]);
const gk = ["color", "backgroundColor"], vk = ["children", "className", "color", "size", "variant", "thickness", "determinate", "value", "component", "slots", "slotProps"], bk = ln({
  "0%": {
    // let the progress start at the top of the ring
    transform: "rotate(-90deg)"
  },
  "100%": {
    transform: "rotate(270deg)"
  }
}), yk = (e) => {
  const {
    determinate: t,
    color: o,
    variant: r,
    size: n
  } = e, i = {
    root: ["root", t && "determinate", o && `color${ae(o)}`, r && `variant${ae(r)}`, n && `size${ae(n)}`],
    svg: ["svg"],
    track: ["track"],
    progress: ["progress"]
  };
  return Re(i, hk, {});
};
function Qo(e, t) {
  return `var(--CircularProgress-${e}Thickness, var(--CircularProgress-thickness, ${t}))`;
}
const xk = G("span", {
  name: "JoyCircularProgress",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})(({
  ownerState: e,
  theme: t
}) => {
  var a, s, l, d;
  const o = ((a = t.variants[e.variant]) == null ? void 0 : a[e.color]) || {}, {
    color: r,
    backgroundColor: n
  } = o, i = U(o, gk);
  return u({
    // integration with icon
    "--Icon-fontSize": "calc(0.4 * var(--_root-size))",
    // public variables
    "--CircularProgress-trackColor": n,
    "--CircularProgress-progressColor": r,
    "--CircularProgress-percent": e.value,
    // 0 - 100
    "--CircularProgress-linecap": "round"
  }, e.size === "sm" && {
    "--_root-size": "var(--CircularProgress-size, 24px)",
    // use --_root-size to let other components overrides via --CircularProgress-size
    "--_track-thickness": Qo("track", "3px"),
    "--_progress-thickness": Qo("progress", "3px")
  }, e.instanceSize === "sm" && {
    "--CircularProgress-size": "24px"
  }, e.size === "md" && {
    "--_track-thickness": Qo("track", "6px"),
    "--_progress-thickness": Qo("progress", "6px"),
    "--_root-size": "var(--CircularProgress-size, 40px)"
  }, e.instanceSize === "md" && {
    "--CircularProgress-size": "40px"
  }, e.size === "lg" && {
    "--_track-thickness": Qo("track", "8px"),
    "--_progress-thickness": Qo("progress", "8px"),
    "--_root-size": "var(--CircularProgress-size, 64px)"
  }, e.instanceSize === "lg" && {
    "--CircularProgress-size": "64px"
  }, e.thickness && {
    "--_track-thickness": `${e.thickness}px`,
    "--_progress-thickness": `${e.thickness}px`
  }, {
    // internal variables
    "--_thickness-diff": "calc(var(--_track-thickness) - var(--_progress-thickness))",
    "--_inner-size": "calc(var(--_root-size) - 2 * var(--variant-borderWidth, 0px))",
    "--_outlined-inset": "max(var(--_track-thickness), var(--_progress-thickness))",
    width: "var(--_root-size)",
    height: "var(--_root-size)",
    borderRadius: "var(--_root-size)",
    margin: "var(--CircularProgress-margin)",
    boxSizing: "border-box",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0,
    // prevent from shrinking when CircularProgress is in a flex container.
    position: "relative",
    color: r
  }, e.children && {
    // only add font related properties when there is a child.
    // so that when there is no child, the size can be controlled by the parent font-size e.g. Link
    fontFamily: t.vars.fontFamily.body,
    fontWeight: t.vars.fontWeight.md,
    fontSize: "calc(0.2 * var(--_root-size))"
  }, i, e.variant === "outlined" && {
    "&::before": u({
      content: '""',
      display: "block",
      position: "absolute",
      borderRadius: "inherit",
      top: "var(--_outlined-inset)",
      left: "var(--_outlined-inset)",
      right: "var(--_outlined-inset)",
      bottom: "var(--_outlined-inset)"
    }, i)
  }, e.variant === "soft" && {
    "--CircularProgress-trackColor": t.variants.soft.neutral.backgroundColor,
    "--CircularProgress-progressColor": (s = t.variants.solid) == null ? void 0 : s[e.color].backgroundColor
  }, e.variant === "solid" && {
    "--CircularProgress-trackColor": (l = t.variants.softHover) == null ? void 0 : l[e.color].backgroundColor,
    "--CircularProgress-progressColor": (d = t.variants.solid) == null ? void 0 : d[e.color].backgroundColor
  });
}), Ck = G("svg", {
  name: "JoyCircularProgress",
  slot: "Svg",
  overridesResolver: (e, t) => t.svg
})({
  width: "inherit",
  height: "inherit",
  display: "inherit",
  boxSizing: "inherit",
  position: "absolute",
  top: "calc(-1 * var(--variant-borderWidth, 0px))",
  // centered align
  left: "calc(-1 * var(--variant-borderWidth, 0px))"
  // centered align
}), Sk = G("circle", {
  name: "JoyCircularProgress",
  slot: "track",
  overridesResolver: (e, t) => t.track
})({
  cx: "50%",
  cy: "50%",
  r: "calc(var(--_inner-size) / 2 - var(--_track-thickness) / 2 + min(0px, var(--_thickness-diff) / 2))",
  fill: "transparent",
  strokeWidth: "var(--_track-thickness)",
  stroke: "var(--CircularProgress-trackColor)"
}), $k = G("circle", {
  name: "JoyCircularProgress",
  slot: "progress",
  overridesResolver: (e, t) => t.progress
})({
  "--_progress-radius": "calc(var(--_inner-size) / 2 - var(--_progress-thickness) / 2 - max(0px, var(--_thickness-diff) / 2))",
  "--_progress-length": "calc(2 * 3.1415926535 * var(--_progress-radius))",
  // the circumference around the progress
  cx: "50%",
  cy: "50%",
  r: "var(--_progress-radius)",
  fill: "transparent",
  strokeWidth: "var(--_progress-thickness)",
  stroke: "var(--CircularProgress-progressColor)",
  strokeLinecap: "var(--CircularProgress-linecap, round)",
  // can't use CSS variable directly, need to cast type.
  strokeDasharray: "var(--_progress-length)",
  strokeDashoffset: "calc(var(--_progress-length) - var(--CircularProgress-percent) * var(--_progress-length) / 100)",
  transformOrigin: "center",
  transform: "rotate(-90deg)"
  // to initially appear at the top-center of the circle.
}, ({
  ownerState: e
}) => !e.determinate && vs`
      animation: var(--CircularProgress-circulation, 0.8s linear 0s infinite normal none running)
        ${bk};
    `), bl = /* @__PURE__ */ h.forwardRef(function(t, o) {
  const r = Te({
    props: t,
    name: "JoyCircularProgress"
  }), {
    children: n,
    className: i,
    color: a = "primary",
    size: s = "md",
    variant: l = "soft",
    thickness: d,
    determinate: c = !1,
    value: f = c ? 0 : 25,
    // `25` is the 1/4 of the circle.
    component: p,
    slots: v = {},
    slotProps: b = {}
  } = r, y = U(r, vk), x = u({}, r, {
    color: a,
    size: s,
    variant: l,
    thickness: d,
    value: f,
    determinate: c,
    instanceSize: t.size
  }), C = yk(x), S = u({}, y, {
    component: p,
    slots: v,
    slotProps: b
  }), [$, R] = Z("root", {
    ref: o,
    className: fe(C.root, i),
    elementType: xk,
    externalForwardedProps: S,
    ownerState: x,
    additionalProps: u({
      role: "progressbar",
      style: {
        // Setting this CSS variable via inline-style
        // prevents the generation of new CSS every time
        // `value` prop updates
        "--CircularProgress-percent": f
      }
    }, f && c && {
      "aria-valuenow": Math.round(typeof f == "number" ? f : Number(f || 0))
    })
  }), [P, g] = Z("svg", {
    className: C.svg,
    elementType: Ck,
    externalForwardedProps: S,
    ownerState: x
  }), [k, T] = Z("track", {
    className: C.track,
    elementType: Sk,
    externalForwardedProps: S,
    ownerState: x
  }), [j, O] = Z("progress", {
    className: C.progress,
    elementType: $k,
    externalForwardedProps: S,
    ownerState: x
  });
  return /* @__PURE__ */ m.jsxs($, u({}, R, {
    children: [/* @__PURE__ */ m.jsxs(P, u({}, g, {
      children: [/* @__PURE__ */ m.jsx(k, u({}, T)), /* @__PURE__ */ m.jsx(j, u({}, O))]
    })), n]
  }));
}), kk = ["children", "action", "component", "color", "disabled", "variant", "loading", "loadingIndicator", "size", "slots", "slotProps"], Ik = (e) => {
  const {
    color: t,
    disabled: o,
    focusVisible: r,
    focusVisibleClassName: n,
    size: i,
    variant: a,
    loading: s
  } = e, l = {
    root: ["root", o && "disabled", r && "focusVisible", a && `variant${ae(a)}`, t && `color${ae(t)}`, i && `size${ae(i)}`, s && "loading"],
    loadingIndicator: ["loadingIndicator"]
  }, d = Re(l, mk, {});
  return r && n && (d.root += ` ${n}`), d;
}, bn = G("button")(({
  theme: e,
  ownerState: t
}) => {
  var o, r, n, i;
  return [u({
    "--Icon-margin": "initial",
    // reset the icon's margin.
    "--Icon-color": t.color !== "neutral" || t.variant === "solid" ? "currentColor" : e.vars.palette.text.icon
  }, t.instanceSize && {
    "--IconButton-size": {
      sm: "2rem",
      md: "2.25rem",
      lg: "2.75rem"
    }[t.instanceSize]
  }, t.size === "sm" && {
    "--Icon-fontSize": "calc(var(--IconButton-size, 2rem) / 1.6)",
    // 1.25rem by default
    "--CircularProgress-size": "20px",
    "--CircularProgress-thickness": "2px",
    minWidth: "var(--IconButton-size, 2rem)",
    // use min-width instead of height to make the button resilient to its content
    minHeight: "var(--IconButton-size, 2rem)",
    // use min-height instead of height to make the button resilient to its content
    fontSize: e.vars.fontSize.sm,
    paddingInline: "2px"
    // add a gap, in case the content is long, for example multiple icons
  }, t.size === "md" && {
    "--Icon-fontSize": "calc(var(--IconButton-size, 2.25rem) / 1.5)",
    // 1.5rem by default
    "--CircularProgress-size": "20px",
    "--CircularProgress-thickness": "2px",
    minWidth: "var(--IconButton-size, 2.25rem)",
    minHeight: "var(--IconButton-size, 2.25rem)",
    fontSize: e.vars.fontSize.md,
    paddingInline: "0.25rem"
  }, t.size === "lg" && {
    "--Icon-fontSize": "calc(var(--IconButton-size, 2.75rem) / 1.571)",
    // 1.75rem by default
    "--CircularProgress-size": "28px",
    "--CircularProgress-thickness": "4px",
    minWidth: "var(--IconButton-size, 2.75rem)",
    minHeight: "var(--IconButton-size, 2.75rem)",
    fontSize: e.vars.fontSize.lg,
    paddingInline: "0.375rem"
  }, {
    WebkitTapHighlightColor: "transparent",
    paddingBlock: 0,
    fontFamily: e.vars.fontFamily.body,
    fontWeight: e.vars.fontWeight.md,
    margin: "var(--IconButton-margin)",
    // to be controlled by other components, for example Input
    borderRadius: `var(--IconButton-radius, ${e.vars.radius.sm})`,
    // to be controlled by other components, for example Input
    border: "none",
    boxSizing: "border-box",
    backgroundColor: "transparent",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    [e.focus.selector]: u({
      "--Icon-color": "currentColor"
    }, e.focus.default)
  }), u({}, (o = e.variants[t.variant]) == null ? void 0 : o[t.color], {
    "&:hover": {
      "@media (hover: hover)": u({
        "--Icon-color": "currentColor"
      }, (r = e.variants[`${t.variant}Hover`]) == null ? void 0 : r[t.color])
    },
    '&:active, &[aria-pressed="true"]': u({
      "--Icon-color": "currentColor"
    }, (n = e.variants[`${t.variant}Active`]) == null ? void 0 : n[t.color]),
    "&:disabled": (i = e.variants[`${t.variant}Disabled`]) == null ? void 0 : i[t.color]
  })];
}), Rk = G(bn, {
  name: "JoyIconButton",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Pk = G("span", {
  name: "JoyIconButton",
  slot: "LoadingIndicator",
  overridesResolver: (e, t) => t.loadingIndicator
})(({
  theme: e,
  ownerState: t
}) => {
  var o, r, n, i;
  return u({
    display: "inherit",
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    color: (r = (o = e.variants[t.variant]) == null ? void 0 : o[t.color]) == null ? void 0 : r.color
  }, t.disabled && {
    color: (i = (n = e.variants[`${t.variant}Disabled`]) == null ? void 0 : n[t.color]) == null ? void 0 : i.color
  });
}), cr = /* @__PURE__ */ h.forwardRef(function(t, o) {
  const r = Te({
    props: t,
    name: "JoyIconButton"
  }), {
    children: n,
    action: i,
    component: a = "button",
    color: s = "neutral",
    disabled: l,
    variant: d = "plain",
    loading: c = !1,
    loadingIndicator: f,
    size: p = "md",
    slots: v = {},
    slotProps: b = {}
  } = r, y = U(r, kk), x = h.useContext(jp), C = h.useContext(Bp), S = t.variant || x.variant || d, $ = t.size || x.size || p, R = t.color || x.color || s, P = (t.loading || t.disabled) ?? (x.disabled || c || l), g = h.useRef(null), k = Ze(g, o), {
    focusVisible: T,
    setFocusVisible: j,
    getRootProps: O
  } = ko(u({}, r, {
    disabled: P,
    rootRef: k
  })), A = f ?? /* @__PURE__ */ m.jsx(bl, {
    color: R,
    thickness: {
      sm: 2,
      md: 3,
      lg: 4
    }[$] || 3
  });
  h.useImperativeHandle(i, () => ({
    focusVisible: () => {
      var Y;
      j(!0), (Y = g.current) == null || Y.focus();
    }
  }), [j]);
  const D = u({}, r, {
    component: a,
    color: R,
    disabled: P,
    variant: S,
    loading: c,
    size: $,
    focusVisible: T,
    instanceSize: t.size
  }), M = Ik(D), E = (Y) => {
    var re;
    let ee = r.onClick;
    typeof b.root == "function" ? ee = b.root(D).onClick : b.root && (ee = b.root.onClick), ee == null || ee(Y), C && ((re = C.onClick) == null || re.call(C, Y, r.value));
  };
  let w = r["aria-pressed"];
  typeof b.root == "function" ? w = b.root(D)["aria-pressed"] : b.root && (w = b.root["aria-pressed"]), C != null && C.value && (Array.isArray(C.value) ? w = C.value.indexOf(r.value) !== -1 : w = C.value === r.value);
  const I = u({}, y, {
    component: a,
    slots: v,
    slotProps: b
  }), [z, _] = Z("root", {
    ref: o,
    className: M.root,
    elementType: Rk,
    getSlotProps: O,
    externalForwardedProps: I,
    ownerState: D,
    additionalProps: {
      onClick: E,
      "aria-pressed": w
    }
  }), [L, N] = Z("loadingIndicator", {
    className: M.loadingIndicator,
    elementType: Pk,
    externalForwardedProps: I,
    ownerState: D
  });
  return /* @__PURE__ */ m.jsx(z, u({}, _, {
    children: c ? /* @__PURE__ */ m.jsx(L, u({}, N, {
      children: A
    })) : n
  }));
});
cr.muiName = "IconButton";
function wk(e) {
  return we("MuiChip", e);
}
const ls = Pe("MuiChip", ["root", "clickable", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "colorContext", "disabled", "endDecorator", "focusVisible", "label", "labelSm", "labelMd", "labelLg", "sizeSm", "sizeMd", "sizeLg", "startDecorator", "variantPlain", "variantSolid", "variantSoft", "variantOutlined"]), _p = /* @__PURE__ */ h.createContext({
  disabled: void 0,
  variant: void 0,
  color: void 0
}), Tk = ["children", "className", "color", "onClick", "disabled", "size", "variant", "startDecorator", "endDecorator", "component", "slots", "slotProps"], Dk = (e) => {
  const {
    disabled: t,
    size: o,
    color: r,
    clickable: n,
    variant: i,
    focusVisible: a
  } = e, s = {
    root: ["root", t && "disabled", r && `color${ae(r)}`, o && `size${ae(o)}`, i && `variant${ae(i)}`, n && "clickable"],
    action: ["action", t && "disabled", a && "focusVisible"],
    label: ["label", o && `label${ae(o)}`],
    startDecorator: ["startDecorator"],
    endDecorator: ["endDecorator"]
  };
  return Re(s, wk, {});
}, Ek = G("div", {
  name: "JoyChip",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})(({
  theme: e,
  ownerState: t
}) => {
  var n, i, a, s;
  const o = (n = e.variants[t.variant]) == null ? void 0 : n[t.color], {
    borderRadius: r
  } = vn({
    theme: e,
    ownerState: t
  }, ["borderRadius"]);
  return [u({
    // for controlling chip delete margin offset
    "--Chip-decoratorChildOffset": "min(calc(var(--Chip-paddingInline) - (var(--_Chip-minHeight) - 2 * var(--variant-borderWidth, 0px) - var(--Chip-decoratorChildHeight)) / 2), var(--Chip-paddingInline))",
    "--Chip-decoratorChildRadius": "max(var(--_Chip-radius) - var(--variant-borderWidth, 0px) - var(--_Chip-paddingBlock), min(var(--_Chip-paddingBlock) + var(--variant-borderWidth, 0px), var(--_Chip-radius) / 2))",
    "--Chip-deleteRadius": "var(--Chip-decoratorChildRadius)",
    "--Chip-deleteSize": "var(--Chip-decoratorChildHeight)",
    "--Avatar-radius": "var(--Chip-decoratorChildRadius)",
    "--Avatar-size": "var(--Chip-decoratorChildHeight)",
    "--Icon-margin": "initial",
    // reset the icon's margin.
    "--Icon-color": "currentColor",
    "--unstable_actionRadius": "var(--_Chip-radius)"
  }, t.size === "sm" && {
    "--Chip-paddingInline": "0.375rem",
    "--Chip-decoratorChildHeight": "calc(var(--_Chip-minHeight) - 2 * var(--variant-borderWidth))",
    "--Icon-fontSize": e.vars.fontSize.sm,
    "--_Chip-minHeight": "var(--Chip-minHeight, 1.25rem)",
    // 20px
    gap: "3px"
  }, t.size === "md" && {
    "--Chip-paddingInline": "0.5rem",
    "--Chip-decoratorChildHeight": "calc(var(--_Chip-minHeight) - 0.25rem - 2 * var(--variant-borderWidth))",
    "--Icon-fontSize": e.vars.fontSize.md,
    "--_Chip-minHeight": "var(--Chip-minHeight, 1.5rem)",
    // 26px
    gap: "0.25rem"
  }, t.size === "lg" && {
    "--Chip-paddingInline": "0.75rem",
    "--Chip-decoratorChildHeight": "calc(var(--_Chip-minHeight) - 0.375rem - 2 * var(--variant-borderWidth))",
    "--Icon-fontSize": e.vars.fontSize.lg,
    "--_Chip-minHeight": "var(--Chip-minHeight, 1.75rem)",
    // 28px
    gap: "0.375rem"
  }, {
    "--_Chip-radius": "var(--Chip-radius, 1.5rem)",
    "--_Chip-paddingBlock": "max((var(--_Chip-minHeight) - 2 * var(--variant-borderWidth, 0px) - var(--Chip-decoratorChildHeight)) / 2, 0px)",
    minHeight: "var(--_Chip-minHeight)",
    maxWidth: "max-content",
    // to prevent Chip from stretching to full width when used with flexbox
    paddingInline: "var(--Chip-paddingInline)",
    borderRadius: "var(--_Chip-radius)",
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    whiteSpace: "nowrap",
    textDecoration: "none",
    verticalAlign: "middle",
    boxSizing: "border-box"
  }, e.typography[`body-${{
    sm: "xs",
    md: "sm",
    lg: "md"
  }[t.size]}`], {
    fontWeight: e.vars.fontWeight.md,
    [`&.${ls.disabled}`]: {
      color: (a = (i = e.variants[`${t.variant}Disabled`]) == null ? void 0 : i[t.color]) == null ? void 0 : a.color
    }
  }), ...t.clickable ? [{
    "--variant-borderWidth": "0px",
    color: o == null ? void 0 : o.color
  }] : [u({
    backgroundColor: e.vars.palette.background.surface
  }, o, {
    [`&.${ls.disabled}`]: (s = e.variants[`${t.variant}Disabled`]) == null ? void 0 : s[t.color]
  })], r !== void 0 && {
    "--_Chip-radius": r
  }];
}), zk = G("span", {
  name: "JoyChip",
  slot: "Label",
  overridesResolver: (e, t) => t.label
})(({
  ownerState: e
}) => u({
  display: "inline-block",
  overflow: "hidden",
  textOverflow: "ellipsis",
  order: 1,
  minInlineSize: 0,
  flexGrow: 1
}, e.clickable && {
  zIndex: 1,
  pointerEvents: "none"
})), Ok = G("button", {
  name: "JoyChip",
  slot: "Action",
  overridesResolver: (e, t) => t.action
})(({
  theme: e,
  ownerState: t
}) => {
  var o, r, n, i;
  return [{
    "--Icon-color": t.color !== "neutral" || t.variant === "solid" ? "currentColor" : e.vars.palette.text.icon,
    position: "absolute",
    zIndex: 0,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: "100%",
    // To fix Firefox issue (https://github.com/mui/material-ui/issues/36877)
    border: "none",
    cursor: "pointer",
    padding: "initial",
    margin: "initial",
    backgroundColor: "initial",
    textDecoration: "none",
    borderRadius: "inherit",
    [e.focus.selector]: e.focus.default
  }, u({
    backgroundColor: e.vars.palette.background.surface
  }, (o = e.variants[t.variant]) == null ? void 0 : o[t.color]), {
    "&:hover": {
      "@media (hover: hover)": (r = e.variants[`${t.variant}Hover`]) == null ? void 0 : r[t.color]
    }
  }, {
    "&:active": (n = e.variants[`${t.variant}Active`]) == null ? void 0 : n[t.color]
  }, {
    [`&.${ls.disabled}`]: (i = e.variants[`${t.variant}Disabled`]) == null ? void 0 : i[t.color]
  }];
}), Mk = G("span", {
  name: "JoyChip",
  slot: "StartDecorator",
  overridesResolver: (e, t) => t.startDecorator
})({
  "--Avatar-marginInlineStart": "calc(var(--Chip-decoratorChildOffset) * -1)",
  "--IconButton-margin": "0 calc(-1 * var(--Chip-paddingInline) / 3) 0 calc(var(--Chip-decoratorChildOffset) * -1)",
  "--Icon-margin": "0 0 0 calc(var(--Chip-paddingInline) / -4)",
  display: "inherit",
  // set zIndex to 1 with order to stay on top of other controls, for example Checkbox, Radio
  order: 0,
  zIndex: 1,
  pointerEvents: "none"
}), Ak = G("span", {
  name: "JoyChip",
  slot: "EndDecorator",
  overridesResolver: (e, t) => t.endDecorator
})({
  "--IconButton-margin": "0 calc(var(--Chip-decoratorChildOffset) * -1) 0 calc(-1 * var(--Chip-paddingInline) / 3)",
  "--Icon-margin": "0 calc(var(--Chip-paddingInline) / -4) 0 0",
  display: "inherit",
  // set zIndex to 1 with order to stay on top of other controls, for example Checkbox, Radio
  order: 2,
  zIndex: 1,
  pointerEvents: "none"
}), yl = /* @__PURE__ */ h.forwardRef(function(t, o) {
  const r = Te({
    props: t,
    name: "JoyChip"
  }), {
    children: n,
    className: i,
    color: a = "neutral",
    onClick: s,
    disabled: l = !1,
    size: d = "md",
    variant: c = "soft",
    startDecorator: f,
    endDecorator: p,
    component: v,
    slots: b = {},
    slotProps: y = {}
  } = r, x = U(r, Tk), C = !!s || !!y.action, S = u({}, r, {
    disabled: l,
    size: d,
    color: a,
    variant: c,
    clickable: C,
    focusVisible: !1
  }), $ = typeof y.action == "function" ? y.action(S) : y.action, R = h.useRef(null), {
    focusVisible: P,
    getRootProps: g
  } = ko(u({}, $, {
    disabled: l,
    rootRef: R
  }));
  S.focusVisible = P;
  const k = Dk(S), T = u({}, x, {
    component: v,
    slots: b,
    slotProps: y
  }), [j, O] = Z("root", {
    ref: o,
    className: fe(k.root, i),
    elementType: Ek,
    externalForwardedProps: T,
    ownerState: S
  }), [A, D] = Z("label", {
    className: k.label,
    elementType: zk,
    externalForwardedProps: T,
    ownerState: S
  }), M = Zt(D.id), [E, w] = Z("action", {
    className: k.action,
    elementType: Ok,
    externalForwardedProps: T,
    ownerState: S,
    getSlotProps: g,
    additionalProps: {
      "aria-labelledby": M,
      as: $ == null ? void 0 : $.component,
      onClick: s
    }
  }), [I, z] = Z("startDecorator", {
    className: k.startDecorator,
    elementType: Mk,
    externalForwardedProps: T,
    ownerState: S
  }), [_, L] = Z("endDecorator", {
    className: k.endDecorator,
    elementType: Ak,
    externalForwardedProps: T,
    ownerState: S
  }), N = h.useMemo(() => ({
    disabled: l
  }), [l]);
  return /* @__PURE__ */ m.jsx(_p.Provider, {
    value: N,
    children: /* @__PURE__ */ m.jsx(vl, {
      variant: c,
      color: a,
      children: /* @__PURE__ */ m.jsxs(j, u({}, O, {
        children: [C && /* @__PURE__ */ m.jsx(E, u({}, w)), /* @__PURE__ */ m.jsx(A, u({}, D, {
          id: M,
          children: n
        })), f && /* @__PURE__ */ m.jsx(I, u({}, z, {
          children: f
        })), p && /* @__PURE__ */ m.jsx(_, u({}, L, {
          children: p
        }))]
      }))
    })
  });
}), jk = Pr(/* @__PURE__ */ m.jsx("path", {
  d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Cancel");
function Bk(e) {
  return we("MuiChipDelete", e);
}
Pe("MuiChipDelete", ["root", "disabled", "focusVisible", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "colorContext", "variantPlain", "variantSolid", "variantSoft", "variantOutlined"]);
var Qc;
const _k = ["children", "variant", "color", "disabled", "onKeyDown", "onDelete", "onClick", "component", "slots", "slotProps"], Lk = ["onDelete"], Fk = (e) => {
  const {
    focusVisible: t,
    variant: o,
    color: r,
    disabled: n
  } = e, i = {
    root: ["root", n && "disabled", t && "focusVisible", o && `variant${ae(o)}`, r && `color${ae(r)}`]
  };
  return Re(i, Bk, {});
}, Nk = G(bn, {
  name: "JoyChipDelete",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})(({
  theme: e
}) => ({
  "--IconButton-size": "var(--Chip-deleteSize, 2rem)",
  "--Icon-fontSize": "calc(var(--IconButton-size, 2rem) / 1.3)",
  minWidth: "var(--IconButton-size, 2rem)",
  // use min-width instead of height to make the button resilient to its content
  minHeight: "var(--IconButton-size, 2rem)",
  // use min-height instead of height to make the button resilient to its content
  fontSize: e.vars.fontSize.sm,
  paddingInline: "2px",
  // add a gap, in case the content is long, for example multiple icons
  pointerEvents: "visible",
  // force the ChipDelete to be hoverable because the decorator can have pointerEvents 'none'
  borderRadius: "var(--Chip-deleteRadius, 50%)",
  zIndex: 1,
  // overflow above sibling button or anchor
  padding: 0
  // reset user agent stylesheet
})), Hk = /* @__PURE__ */ h.forwardRef(function(t, o) {
  const r = Te({
    props: t,
    name: "JoyChipDelete"
  }), {
    children: n,
    variant: i = "plain",
    color: a = "neutral",
    disabled: s,
    onKeyDown: l,
    onDelete: d,
    onClick: c,
    component: f,
    slots: p = {},
    slotProps: v = {}
  } = r, b = U(r, _k), y = h.useContext(_p), {
    variant: x = i,
    color: C = a
  } = gl(t.variant, t.color, !0), S = t.color || C, $ = s ?? y.disabled, R = h.useRef(null), P = Ze(R, o), {
    focusVisible: g,
    getRootProps: k
  } = ko(u({}, r, {
    disabled: $,
    rootRef: P
  })), T = u({}, r, {
    disabled: $,
    variant: x,
    color: S,
    focusVisible: g
  }), j = Fk(T), O = u({}, b, {
    component: f,
    slots: p,
    slotProps: v
  }), A = (I) => {
    !$ && d && d(I), c && c(I);
  }, D = (I) => {
    ["Backspace", "Enter", "Delete"].includes(I.key) && (I.preventDefault(), !$ && d && d(I)), l && l(I);
  }, [M, E] = Z("root", {
    ref: o,
    elementType: Nk,
    getSlotProps: k,
    externalForwardedProps: O,
    ownerState: T,
    additionalProps: {
      as: f,
      onKeyDown: D,
      onClick: A
    },
    className: j.root
  }), w = U(E, Lk);
  return /* @__PURE__ */ m.jsx(M, u({}, w, {
    children: n ?? (Qc || (Qc = /* @__PURE__ */ m.jsx(jk, {})))
  }));
});
function Vk(e) {
  return we("MuiInput", e);
}
const Lp = Pe("MuiInput", ["root", "input", "formControl", "focused", "disabled", "error", "adornedStart", "adornedEnd", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "colorContext", "sizeSm", "sizeMd", "sizeLg", "variantPlain", "variantOutlined", "variantSoft", "variantSolid", "fullWidth", "startDecorator", "endDecorator"]), Qt = /* @__PURE__ */ h.createContext(void 0), Wk = ["aria-describedby", "aria-label", "aria-labelledby", "autoComplete", "autoFocus", "className", "defaultValue", "disabled", "disabledInProp", "error", "id", "name", "onClick", "onChange", "onKeyDown", "onKeyUp", "onFocus", "onBlur", "placeholder", "readOnly", "required", "type", "value"];
function Uk(e, t) {
  const o = h.useContext(Qt), {
    "aria-describedby": r,
    "aria-label": n,
    "aria-labelledby": i,
    autoComplete: a,
    autoFocus: s,
    className: l,
    defaultValue: d,
    disabled: c,
    disabledInProp: f,
    error: p,
    id: v,
    name: b,
    onClick: y,
    onChange: x,
    onKeyDown: C,
    onKeyUp: S,
    onFocus: $,
    onBlur: R,
    placeholder: P,
    readOnly: g,
    required: k,
    type: T,
    value: j
  } = e, O = U(e, Wk), {
    getRootProps: A,
    getInputProps: D,
    focused: M,
    error: E,
    disabled: w
  } = _S({
    disabled: f ?? (o == null ? void 0 : o.disabled) ?? c,
    defaultValue: d,
    error: p,
    onBlur: R,
    onClick: y,
    onChange: x,
    onFocus: $,
    required: k ?? (o == null ? void 0 : o.required),
    value: j
  }), I = {
    [t.disabled]: w,
    [t.error]: E,
    [t.focused]: M,
    [t.formControl]: !!o,
    [l]: l
  }, z = {
    [t.disabled]: w
  };
  return u({
    formControl: o,
    propsToForward: {
      "aria-describedby": r,
      "aria-label": n,
      "aria-labelledby": i,
      autoComplete: a,
      autoFocus: s,
      disabled: w,
      id: v,
      onKeyDown: C,
      onKeyUp: S,
      name: b,
      placeholder: P,
      readOnly: g,
      type: T
    },
    rootStateClasses: I,
    inputStateClasses: z,
    getRootProps: A,
    getInputProps: D,
    focused: M,
    error: E,
    disabled: w
  }, O);
}
const Gk = ["propsToForward", "rootStateClasses", "inputStateClasses", "getRootProps", "getInputProps", "formControl", "focused", "error", "disabled", "fullWidth", "size", "color", "variant", "startDecorator", "endDecorator", "component", "slots", "slotProps"], Kk = (e) => {
  const {
    disabled: t,
    fullWidth: o,
    variant: r,
    color: n,
    size: i
  } = e, a = {
    root: ["root", t && "disabled", o && "fullWidth", r && `variant${ae(r)}`, n && `color${ae(n)}`, i && `size${ae(i)}`],
    input: ["input"],
    startDecorator: ["startDecorator"],
    endDecorator: ["endDecorator"]
  };
  return Re(a, Vk, {});
}, Fp = G("div")(({
  theme: e,
  ownerState: t
}) => {
  var r, n, i, a, s;
  const o = (r = e.variants[`${t.variant}`]) == null ? void 0 : r[t.color];
  return [u({
    "--Input-radius": e.vars.radius.sm,
    "--Input-gap": "0.5rem",
    "--Input-placeholderColor": "inherit",
    "--Input-placeholderOpacity": 0.64,
    "--Input-decoratorColor": e.vars.palette.text.icon,
    "--Input-focused": "0",
    "--Input-focusedThickness": e.vars.focus.thickness,
    "--Input-focusedHighlight": (n = e.vars.palette[t.color === "neutral" ? "primary" : t.color]) == null ? void 0 : n[500],
    [`&:not([${xr}])`]: u({}, t.instanceColor && {
      "--_Input-focusedHighlight": (i = e.vars.palette[t.instanceColor === "neutral" ? "primary" : t.instanceColor]) == null ? void 0 : i[500]
    }, {
      "--Input-focusedHighlight": `var(--_Input-focusedHighlight, ${e.vars.palette.focusVisible})`
    })
  }, t.size === "sm" && {
    "--Input-minHeight": "2rem",
    "--Input-paddingInline": "0.5rem",
    "--Input-decoratorChildHeight": "min(1.5rem, var(--Input-minHeight))",
    "--Icon-fontSize": e.vars.fontSize.xl
  }, t.size === "md" && {
    "--Input-minHeight": "2.25rem",
    "--Input-paddingInline": "0.75rem",
    "--Input-decoratorChildHeight": "min(1.75rem, var(--Input-minHeight))",
    "--Icon-fontSize": e.vars.fontSize.xl2
  }, t.size === "lg" && {
    "--Input-minHeight": "2.75rem",
    "--Input-paddingInline": "1rem",
    "--Input-gap": "0.75rem",
    "--Input-decoratorChildHeight": "min(2.25rem, var(--Input-minHeight))",
    "--Icon-fontSize": e.vars.fontSize.xl2
  }, {
    // variables for controlling child components
    "--Input-decoratorChildOffset": "min(calc(var(--Input-paddingInline) - (var(--Input-minHeight) - 2 * var(--variant-borderWidth, 0px) - var(--Input-decoratorChildHeight)) / 2), var(--Input-paddingInline))",
    "--_Input-paddingBlock": "max((var(--Input-minHeight) - 2 * var(--variant-borderWidth, 0px) - var(--Input-decoratorChildHeight)) / 2, 0px)",
    "--Input-decoratorChildRadius": "max(var(--Input-radius) - var(--variant-borderWidth, 0px) - var(--_Input-paddingBlock), min(var(--_Input-paddingBlock) + var(--variant-borderWidth, 0px), var(--Input-radius) / 2))",
    "--Button-minHeight": "var(--Input-decoratorChildHeight)",
    "--Button-paddingBlock": "0px",
    // to ensure that the height of the button is equal to --Button-minHeight
    "--IconButton-size": "var(--Input-decoratorChildHeight)",
    "--Button-radius": "var(--Input-decoratorChildRadius)",
    "--IconButton-radius": "var(--Input-decoratorChildRadius)",
    boxSizing: "border-box"
  }, t.variant !== "plain" && {
    boxShadow: e.shadow.xs
  }, {
    minWidth: 0,
    minHeight: "var(--Input-minHeight)"
  }, t.fullWidth && {
    width: "100%"
  }, {
    cursor: "text",
    position: "relative",
    display: "flex",
    paddingInline: "var(--Input-paddingInline)",
    borderRadius: "var(--Input-radius)"
  }, e.typography[`body-${t.size}`], o, {
    backgroundColor: (o == null ? void 0 : o.backgroundColor) ?? e.vars.palette.background.surface,
    "&::before": {
      boxSizing: "border-box",
      content: '""',
      display: "block",
      position: "absolute",
      pointerEvents: "none",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 1,
      borderRadius: "inherit",
      margin: "calc(var(--variant-borderWidth, 0px) * -1)",
      // for outlined variant
      boxShadow: "var(--Input-focusedInset, inset) 0 0 0 calc(var(--Input-focused) * var(--Input-focusedThickness)) var(--Input-focusedHighlight)"
    }
  }), {
    "&:hover": u({}, (a = e.variants[`${t.variant}Hover`]) == null ? void 0 : a[t.color], {
      backgroundColor: null
      // it is not common to change background on hover for Input
    }),
    [`&.${Lp.disabled}`]: (s = e.variants[`${t.variant}Disabled`]) == null ? void 0 : s[t.color],
    "&:focus-within::before": {
      "--Input-focused": "1"
    }
  }];
}), Np = G("input")(({
  ownerState: e
}) => ({
  border: "none",
  // remove the native input width
  minWidth: 0,
  // remove the native input width
  outline: 0,
  // remove the native input outline
  padding: 0,
  // remove the native input padding
  flex: 1,
  color: "inherit",
  backgroundColor: "transparent",
  fontFamily: "inherit",
  fontSize: "inherit",
  fontStyle: "inherit",
  fontWeight: "inherit",
  lineHeight: "inherit",
  textOverflow: "ellipsis",
  "&:-webkit-autofill": u({
    paddingInline: "var(--Input-paddingInline)"
  }, !e.startDecorator && {
    marginInlineStart: "calc(-1 * var(--Input-paddingInline))",
    paddingInlineStart: "var(--Input-paddingInline)",
    borderTopLeftRadius: "calc(var(--Input-radius) - var(--variant-borderWidth, 0px))",
    borderBottomLeftRadius: "calc(var(--Input-radius) - var(--variant-borderWidth, 0px))"
  }, !e.endDecorator && {
    marginInlineEnd: "calc(-1 * var(--Input-paddingInline))",
    paddingInlineEnd: "var(--Input-paddingInline)",
    borderTopRightRadius: "calc(var(--Input-radius) - var(--variant-borderWidth, 0px))",
    borderBottomRightRadius: "calc(var(--Input-radius) - var(--variant-borderWidth, 0px))"
  }),
  "&::-webkit-input-placeholder": {
    color: "var(--Input-placeholderColor)",
    opacity: "var(--Input-placeholderOpacity)"
  },
  "&::-moz-placeholder": {
    // Firefox 19+
    color: "var(--Input-placeholderColor)",
    opacity: "var(--Input-placeholderOpacity)"
  },
  "&:-ms-input-placeholder": {
    // IE11
    color: "var(--Input-placeholderColor)",
    opacity: "var(--Input-placeholderOpacity)"
  },
  "&::-ms-input-placeholder": {
    // Edge
    color: "var(--Input-placeholderColor)",
    opacity: "var(--Input-placeholderOpacity)"
  }
})), Hp = G("div")({
  "--Button-margin": "0 0 0 calc(var(--Input-decoratorChildOffset) * -1)",
  "--IconButton-margin": "0 0 0 calc(var(--Input-decoratorChildOffset) * -1)",
  "--Icon-margin": "0 0 0 calc(var(--Input-paddingInline) / -4)",
  display: "inherit",
  alignItems: "center",
  paddingBlock: "var(--unstable_InputPaddingBlock)",
  // for wrapping Autocomplete's tags
  flexWrap: "wrap",
  // for wrapping Autocomplete's tags
  marginInlineEnd: "var(--Input-gap)",
  color: "var(--Input-decoratorColor)",
  cursor: "initial"
}), Vp = G("div")({
  "--Button-margin": "0 calc(var(--Input-decoratorChildOffset) * -1) 0 0",
  "--IconButton-margin": "0 calc(var(--Input-decoratorChildOffset) * -1) 0 0",
  "--Icon-margin": "0 calc(var(--Input-paddingInline) / -4) 0 0",
  display: "inherit",
  alignItems: "center",
  marginInlineStart: "var(--Input-gap)",
  color: "var(--Input-decoratorColor)",
  cursor: "initial"
}), Jk = G(Fp, {
  name: "JoyInput",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), qk = G(Np, {
  name: "JoyInput",
  slot: "Input",
  overridesResolver: (e, t) => t.input
})({}), Yk = G(Hp, {
  name: "JoyInput",
  slot: "StartDecorator",
  overridesResolver: (e, t) => t.startDecorator
})({}), Xk = G(Vp, {
  name: "JoyInput",
  slot: "EndDecorator",
  overridesResolver: (e, t) => t.endDecorator
})({}), Zk = /* @__PURE__ */ h.forwardRef(function(t, o) {
  const r = Te({
    props: t,
    name: "JoyInput"
  }), n = Uk(u({}, r, {
    disabledInProp: t.disabled
  }), Lp), {
    propsToForward: i,
    rootStateClasses: a,
    inputStateClasses: s,
    getRootProps: l,
    getInputProps: d,
    formControl: c,
    focused: f,
    error: p = !1,
    disabled: v,
    fullWidth: b = !1,
    size: y = "md",
    color: x = "neutral",
    variant: C = "outlined",
    startDecorator: S,
    endDecorator: $,
    component: R,
    slots: P = {},
    slotProps: g = {}
  } = n, k = U(n, Gk), T = t.error ?? (c == null ? void 0 : c.error) ?? p, j = t.size ?? (c == null ? void 0 : c.size) ?? y, O = t.color ?? (T ? "danger" : (c == null ? void 0 : c.color) ?? x), A = u({
    instanceColor: T ? "danger" : t.color
  }, r, {
    fullWidth: b,
    color: O,
    disabled: v,
    error: T,
    focused: f,
    size: j,
    variant: C
  }), D = Kk(A), M = u({}, k, {
    component: R,
    slots: P,
    slotProps: g
  }), [E, w] = Z("root", {
    ref: o,
    className: [D.root, a],
    elementType: Jk,
    getSlotProps: l,
    externalForwardedProps: M,
    ownerState: A
  }), [I, z] = Z("input", u({}, c && {
    additionalProps: {
      id: c.htmlFor,
      "aria-describedby": c["aria-describedby"]
    }
  }, {
    className: [D.input, s],
    elementType: qk,
    getSlotProps: d,
    internalForwardedProps: i,
    externalForwardedProps: M,
    ownerState: A
  })), [_, L] = Z("startDecorator", {
    className: D.startDecorator,
    elementType: Yk,
    externalForwardedProps: M,
    ownerState: A
  }), [N, Y] = Z("endDecorator", {
    className: D.endDecorator,
    elementType: Xk,
    externalForwardedProps: M,
    ownerState: A
  });
  return /* @__PURE__ */ m.jsxs(E, u({}, w, {
    children: [S && /* @__PURE__ */ m.jsx(_, u({}, L, {
      children: S
    })), /* @__PURE__ */ m.jsx(I, u({}, z)), $ && /* @__PURE__ */ m.jsx(N, u({}, Y, {
      children: $
    }))]
  }));
}), Qk = Zk;
function eI(e) {
  return we("MuiListSubheader", e);
}
Pe("MuiListSubheader", ["root", "sticky", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "colorContext", "variantPlain", "variantSoft", "variantOutlined", "variantSolid"]);
const tI = ["component", "className", "children", "id", "sticky", "variant", "color", "slots", "slotProps"], oI = (e) => {
  const {
    variant: t,
    color: o,
    sticky: r
  } = e, n = {
    root: ["root", r && "sticky", o && `color${ae(o)}`, t && `variant${ae(t)}`]
  };
  return Re(n, eI, {});
}, rI = G("div", {
  name: "JoyListSubheader",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})(({
  theme: e,
  ownerState: t
}) => {
  var o, r;
  return u({
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    marginInline: "var(--ListItem-marginInline)",
    paddingBlock: "var(--ListItem-paddingY)",
    paddingInlineStart: "var(--ListItem-paddingLeft)",
    paddingInlineEnd: "var(--ListItem-paddingRight)",
    minBlockSize: "var(--ListItem-minHeight)"
  }, e.typography["body-xs"], {
    fontSize: "max(0.75em, 0.625rem)",
    textTransform: "uppercase",
    letterSpacing: "0.1em"
  }, t.sticky && {
    position: "sticky",
    top: "var(--ListItem-stickyTop, 0px)",
    // integration with Menu and Select.
    zIndex: 1,
    background: "var(--ListItem-stickyBackground)"
  }, {
    color: t.color ? `var(--_Link-color, rgba(${(o = e.vars.palette[t.color]) == null ? void 0 : o.mainChannel} / 1))` : e.vars.palette.text.tertiary
  }, t.instanceColor && {
    [`&:not([${xr}])`]: {
      "--_Link-color": e.vars.palette.text.secondary
    }
  }, (r = e.variants[t.variant]) == null ? void 0 : r[t.color]);
}), nI = /* @__PURE__ */ h.forwardRef(function(t, o) {
  const r = Te({
    props: t,
    name: "JoyListSubheader"
  }), {
    component: n,
    className: i,
    children: a,
    id: s,
    sticky: l = !1,
    variant: d,
    color: c,
    slots: f = {},
    slotProps: p = {}
  } = r, v = U(r, tI), b = Zt(s), y = h.useContext(wp);
  h.useEffect(() => {
    y && y(b || "");
  }, [y, b]);
  const x = u({
    instanceColor: t.color
  }, r, {
    id: b,
    sticky: l,
    variant: d,
    color: d ? c ?? "neutral" : c
  }), C = oI(x), S = u({}, v, {
    component: n,
    slots: f,
    slotProps: p
  }), [$, R] = Z("root", {
    ref: o,
    className: fe(C.root, i),
    elementType: rI,
    externalForwardedProps: S,
    ownerState: x,
    additionalProps: {
      as: n,
      id: b
    }
  });
  return /* @__PURE__ */ m.jsx($, u({}, R, {
    children: a
  }));
});
function iI(e) {
  return we("MuiAutocomplete", e);
}
const xo = Pe("MuiAutocomplete", ["root", "wrapper", "input", "startDecorator", "endDecorator", "formControl", "focused", "disabled", "error", "multiple", "limitTag", "hasPopupIcon", "hasClearIcon", "clearIndicator", "popupIndicator", "popupIndicatorOpen", "listbox", "option", "loading", "noOptions", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "colorContext", "sizeSm", "sizeMd", "sizeLg", "variantPlain", "variantOutlined", "variantSoft", "variantSolid"]), Wp = G(ul)(({
  theme: e,
  ownerState: t
}) => {
  var r;
  const o = (r = e.variants[t.variant]) == null ? void 0 : r[t.color];
  return u({
    "--focus-outline-offset": `calc(${e.vars.focus.thickness} * -1)`,
    // to prevent the focus outline from being cut by overflow
    "--ListItem-stickyBackground": (o == null ? void 0 : o.backgroundColor) || (o == null ? void 0 : o.background) || e.vars.palette.background.popup,
    "--ListItem-stickyTop": "calc(var(--List-padding, var(--ListDivider-gap)) * -1)"
  }, Tp, {
    boxShadow: e.shadow.md,
    borderRadius: `var(--List-radius, ${e.vars.radius.sm})`
  }, !(o != null && o.backgroundColor) && {
    backgroundColor: e.vars.palette.background.popup
  }, {
    zIndex: e.vars.zIndex.popup,
    overflow: "auto",
    maxHeight: "40vh",
    position: "relative",
    // to make sure that the listbox is positioned for grouped options to work.
    "&:empty": {
      visibility: "hidden"
    },
    [`& .${si.nested}, & .${si.nested} .${K$.root}`]: {
      // For grouped options autocomplete:
      // Force the position to make the scroll into view logic works because the `element.offsetTop` should reference to the listbox, not the grouped list.
      // See the implementation of the `useAutocomplete` line:370
      //
      // Resource: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetTop
      position: "initial"
    }
  });
});
G(Wp, {
  name: "JoyAutocompleteListbox",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({});
function aI(e) {
  return we("MuiAutocompleteOption", e);
}
Pe("MuiAutocompleteOption", ["root", "focused", "focusVisible", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "colorContext", "variantPlain", "variantSoft", "variantOutlined", "variantSolid"]);
const sI = ["children", "component", "color", "variant", "className", "slots", "slotProps"], lI = (e) => {
  const {
    color: t,
    variant: o
  } = e, r = {
    root: ["root", t && `color${ae(t)}`, o && `variant${ae(o)}`]
  };
  return Re(r, aI, {});
}, Up = G(pl)(({
  theme: e,
  ownerState: t
}) => {
  var o, r;
  return {
    '&[aria-disabled="true"]': (o = e.variants[`${t.variant}Disabled`]) == null ? void 0 : o[t.color],
    '&[aria-selected="true"]': u({}, (r = e.variants[`${t.variant}Active`]) == null ? void 0 : r[t.color], {
      fontWeight: e.vars.fontWeight.md
    })
  };
}), cI = G(Up, {
  name: "JoyAutocompleteOption",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Gp = /* @__PURE__ */ h.forwardRef(function(t, o) {
  const r = Te({
    props: t,
    name: "JoyAutocompleteOption"
  }), {
    children: n,
    component: i = "li",
    color: a = "neutral",
    variant: s = "plain",
    className: l,
    slots: d = {},
    slotProps: c = {}
  } = r, f = U(r, sI), {
    variant: p = s,
    color: v = a
  } = gl(t.variant, t.color), b = u({}, r, {
    component: i,
    color: v,
    variant: p
  }), y = lI(b), x = u({}, f, {
    component: i,
    slots: d,
    slotProps: c
  }), [C, S] = Z("root", {
    ref: o,
    className: fe(y.root, l),
    elementType: cI,
    externalForwardedProps: x,
    ownerState: b,
    additionalProps: {
      as: i,
      role: "option"
    }
  });
  return /* @__PURE__ */ m.jsx(C, u({}, S, {
    children: n
  }));
});
var ed, td;
const dI = ["aria-describedby", "aria-label", "aria-labelledby", "autoComplete", "autoHighlight", "autoSelect", "autoFocus", "blurOnSelect", "clearIcon", "clearOnBlur", "clearOnEscape", "clearText", "closeText", "defaultValue", "disableCloseOnSelect", "disabledItemsFocusable", "disableListWrap", "disableClearable", "disabled", "endDecorator", "error", "filterOptions", "filterSelectedOptions", "forcePopupIcon", "freeSolo", "getLimitTagsText", "getOptionDisabled", "getOptionKey", "getOptionLabel", "handleHomeEndKeys", "includeInputInList", "isOptionEqualToValue", "groupBy", "id", "inputValue", "limitTags", "loading", "loadingText", "multiple", "name", "noOptionsText", "onChange", "onClose", "onHighlightChange", "onInputChange", "onOpen", "open", "openOnFocus", "openText", "options", "placeholder", "popupIcon", "readOnly", "renderGroup", "renderOption", "renderTags", "required", "type", "startDecorator", "size", "color", "variant", "value", "component", "selectOnFocus", "slots", "slotProps"], uI = ["onDelete"], pI = ["onBlur", "onFocus", "onMouseDown"], fI = (e) => e.current !== null && e.current.contains(document.activeElement), mI = (e) => e.label ?? e, hI = (e) => `+${e}`, gI = (e) => /* @__PURE__ */ m.jsxs(ro, {
  nested: !0,
  children: [/* @__PURE__ */ m.jsx(nI, {
    sticky: !0,
    children: e.group
  }), /* @__PURE__ */ m.jsx(lr, {
    children: e.children
  })]
}, e.key), vI = (e) => {
  const {
    disabled: t,
    focused: o,
    hasClearIcon: r,
    hasPopupIcon: n,
    popupOpen: i,
    variant: a,
    color: s,
    size: l,
    multiple: d
  } = e, c = {
    root: ["root", o && "focused", r && "hasClearIcon", n && "hasPopupIcon", a && `variant${ae(a)}`, s && `color${ae(s)}`, l && `size${ae(l)}`],
    wrapper: ["wrapper", d && "multiple"],
    input: ["input"],
    startDecorator: ["startDecorator"],
    endDecorator: ["endDecorator"],
    clearIndicator: ["clearIndicator"],
    popupIndicator: ["popupIndicator", i && "popupIndicatorOpen", t && "disabled"],
    listbox: ["listbox"],
    option: ["option"],
    loading: ["loading"],
    noOptions: ["noOptions"],
    limitTag: ["limitTag"]
  };
  return Re(c, iI, {});
}, bI = G(Fp, {
  name: "JoyAutocomplete",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})(({
  ownerState: e
}) => u({}, e.size === "sm" && {
  "--Autocomplete-wrapperGap": "3px"
}, e.size === "md" && {
  "--Autocomplete-wrapperGap": "3px"
}, e.size === "lg" && {
  "--Autocomplete-wrapperGap": "4px"
}, {
  /* Avoid double tap issue on iOS */
  "@media (pointer: fine)": {
    [`&:hover .${xo.clearIndicator}`]: {
      visibility: "visible"
    }
  }
}, e.multiple && !e.startDecorator && {
  paddingInlineStart: 0
})), yI = G("div", {
  name: "JoyAutocomplete",
  slot: "Wrapper",
  overridesResolver: (e, t) => t.wrapper
})(({
  ownerState: e
}) => ({
  flex: 1,
  // stretch to fill the root slot
  minWidth: 0,
  // won't push end decorator out of the autocomplete
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "var(--Autocomplete-wrapperGap)",
  [`&.${xo.multiple}`]: u({
    paddingBlock: "var(--Autocomplete-wrapperGap)"
  }, !e.startDecorator && {
    paddingInlineStart: "var(--Autocomplete-wrapperGap)"
  }, !e.endDecorator && {
    paddingInlineEnd: "var(--Autocomplete-wrapperGap)"
  })
})), xI = G(Np, {
  name: "JoyAutocomplete",
  slot: "Input",
  overridesResolver: (e, t) => t.input
})(({
  ownerState: e
}) => u({
  minWidth: 30,
  minHeight: "var(--Chip-minHeight)"
}, e.multiple && {
  marginInlineStart: "calc(var(--Autocomplete-wrapperGap) * 2.5)"
})), CI = G(Hp, {
  name: "JoyAutocomplete",
  slot: "StartDecorator",
  overridesResolver: (e, t) => t.startDecorator
})({}), SI = G(Vp, {
  name: "JoyAutocomplete",
  slot: "EndDecorator",
  overridesResolver: (e, t) => t.endDecorator
})(({
  ownerState: e
}) => u({}, (e.hasClearIcon || e.hasPopupIcon) && {
  "--Button-margin": "0px",
  "--IconButton-margin": "0px",
  "--Icon-margin": "0px"
})), $I = G(bn, {
  name: "JoyAutocomplete",
  slot: "ClearIndicator",
  overridesResolver: (e, t) => t.clearIndicator
})(({
  ownerState: e
}) => u({
  alignSelf: "center"
}, !e.hasPopupIcon && {
  marginInlineEnd: "calc(var(--Input-decoratorChildOffset) * -1)"
}, {
  marginInlineStart: "calc(var(--_Input-paddingBlock) / 2)",
  visibility: e.focused ? "visible" : "hidden"
})), kI = G(bn, {
  name: "JoyAutocomplete",
  slot: "PopupIndicator",
  overridesResolver: (e, t) => t.popupIndicator
})({
  alignSelf: "center",
  marginInlineStart: "calc(var(--_Input-paddingBlock) / 2)",
  marginInlineEnd: "calc(var(--Input-decoratorChildOffset) * -1)",
  [`&.${xo.popupIndicatorOpen}`]: {
    transform: "rotate(180deg)",
    "--Icon-color": "currentColor"
  }
}), II = G(Wp, {
  name: "JoyAutocomplete",
  slot: "Listbox",
  overridesResolver: (e, t) => t.listbox
})(({
  theme: e
}) => ({
  // `unstable_popup-zIndex` is a private variable that lets other component, for example Modal, to override the z-index so that the listbox can be displayed above the Modal.
  zIndex: `var(--unstable_popup-zIndex, ${e.vars.zIndex.popup})`
})), RI = G(Up, {
  name: "JoyAutocomplete",
  slot: "Option",
  overridesResolver: (e, t) => t.option
})({}), PI = G(ro, {
  name: "JoyAutocomplete",
  slot: "Loading",
  overridesResolver: (e, t) => t.loading
})(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary
})), wI = G(ro, {
  name: "JoyAutocomplete",
  slot: "NoOptions",
  overridesResolver: (e, t) => t.noOptions
})(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary
})), TI = G("div", {
  name: "JoyAutocomplete",
  slot: "NoOptions",
  overridesResolver: (e, t) => t.noOptions
})({
  marginInlineStart: "calc(var(--Input-paddingInline) / 2)",
  marginBlockStart: "var(--_Input-paddingBlock)"
}), Kp = /* @__PURE__ */ h.forwardRef(function(t, o) {
  var Tr;
  const r = Te({
    props: t,
    name: "JoyAutocomplete"
  }), {
    "aria-describedby": n,
    "aria-label": i,
    "aria-labelledby": a,
    autoFocus: s,
    clearIcon: l = ed || (ed = /* @__PURE__ */ m.jsx(Mp, {
      fontSize: "md"
    })),
    clearText: d = "Clear",
    closeText: c = "Close",
    disableClearable: f = !1,
    disabled: p,
    endDecorator: v,
    error: b = !1,
    forcePopupIcon: y = "auto",
    freeSolo: x = !1,
    getLimitTagsText: C = hI,
    getOptionLabel: S = mI,
    groupBy: $,
    id: R,
    limitTags: P = -1,
    loading: g = !1,
    loadingText: k = "Loading…",
    multiple: T = !1,
    name: j,
    noOptionsText: O = "No options",
    openText: A = "Open",
    placeholder: D,
    popupIcon: M = td || (td = /* @__PURE__ */ m.jsx(fk, {})),
    readOnly: E = !1,
    renderGroup: w = gI,
    renderOption: I,
    renderTags: z,
    required: _,
    type: L,
    startDecorator: N,
    size: Y = "md",
    color: ee = "neutral",
    variant: re = "outlined",
    component: Q,
    slots: te = {},
    slotProps: he = {}
  } = r, oe = U(r, dI), B = h.useContext(Qt), V = t.error ?? (B == null ? void 0 : B.error) ?? b, K = t.size ?? (B == null ? void 0 : B.size) ?? Y, se = t.color ?? (V ? "danger" : (B == null ? void 0 : B.color) ?? ee), ue = p ?? (B == null ? void 0 : B.disabled) ?? !1, {
    getRootProps: le,
    getInputProps: me,
    getPopupIndicatorProps: ie,
    getClearProps: J,
    getTagProps: Ce,
    getListboxProps: ce,
    getOptionProps: Ee,
    value: pe,
    dirty: Se,
    popupOpen: $e,
    focused: ge,
    focusedTag: Ie,
    anchorEl: Ve,
    setAnchorEl: st,
    inputValue: Me,
    groupedOptions: ke
  } = A$(u({}, r, {
    id: R ?? (B == null ? void 0 : B.htmlFor),
    componentName: "Autocomplete",
    unstable_classNamePrefix: "Mui",
    unstable_isActiveElementInListbox: fI
  })), {
    onMouseDown: q
  } = me(), {
    onClick: ze
  } = le(), X = !f && !ue && Se && !E, ne = (!x || y === !0) && y !== !1, be = u({
    instanceColor: t.color
  }, r, {
    value: pe,
    disabled: ue,
    focused: ge,
    getOptionLabel: S,
    hasOptions: !!ke.length,
    hasClearIcon: X,
    hasPopupIcon: ne,
    inputFocused: Ie === -1,
    popupOpen: $e,
    size: K,
    color: se,
    variant: re
  }), ve = vI(be), Le = u({}, oe, {
    component: Q,
    slots: te,
    slotProps: he
  });
  let kt;
  if (T && pe.length > 0) {
    const xe = (At) => {
      const dt = Ce(At), {
        onDelete: wo
      } = dt, To = U(dt, uI);
      return u({
        disabled: ue,
        size: K,
        onClick: wo
      }, To);
    };
    z ? kt = z(pe, xe, be) : kt = pe.map((At, dt) => /* @__PURE__ */ m.jsx(yl, {
      size: K,
      variant: "soft",
      color: "neutral",
      endDecorator: /* @__PURE__ */ m.jsx(Hk, u({}, xe({
        index: dt
      }))),
      sx: {
        minWidth: 0
      },
      children: S(At)
    }, dt));
  }
  const Ro = Ze(o, st), Uo = {
    [xo.disabled]: ue,
    [xo.error]: V,
    [xo.focused]: ge,
    [xo.formControl]: !!B
  }, [Ot, Ue] = Z("root", {
    ref: Ro,
    className: [ve.root, Uo],
    elementType: bI,
    externalForwardedProps: Le,
    ownerState: be,
    getSlotProps: le,
    additionalProps: {
      onClick: (xe) => {
        ze && ze(xe), xe.currentTarget === xe.target && q && q(xe);
      }
    }
  }), [Mt, Go] = Z("wrapper", {
    className: ve.wrapper,
    elementType: yI,
    externalForwardedProps: Le,
    ownerState: be
  }), Po = {
    [xo.disabled]: ue
  }, [ca, xn] = Z("input", {
    className: [ve.input, Po],
    elementType: xI,
    getSlotProps: (xe) => {
      const At = me(), {
        onBlur: dt,
        onFocus: wo,
        onMouseDown: To
      } = At, kf = U(At, pI);
      return u({}, kf, {
        onBlur: (vo) => {
          var bo;
          dt == null || dt(vo), (bo = xe.onBlur) == null || bo.call(xe, vo);
        },
        onFocus: (vo) => {
          var bo;
          wo == null || wo(vo), (bo = xe.onFocus) == null || bo.call(xe, vo);
        },
        onMouseDown: (vo) => {
          var bo;
          To == null || To(vo), (bo = xe.onMouseDown) == null || bo.call(xe, vo);
        }
      });
    },
    externalForwardedProps: Le,
    ownerState: be,
    additionalProps: {
      autoFocus: s,
      placeholder: D,
      name: j,
      readOnly: E,
      disabled: ue,
      required: _ ?? (B == null ? void 0 : B.required),
      type: L,
      "aria-invalid": V || void 0,
      "aria-label": i,
      "aria-labelledby": a,
      "aria-describedby": n ?? (B == null ? void 0 : B["aria-describedby"])
    }
  }), [Cn, da] = Z("startDecorator", {
    className: ve.startDecorator,
    elementType: CI,
    externalForwardedProps: Le,
    ownerState: be
  }), [ua, Sn] = Z("endDecorator", {
    className: ve.endDecorator,
    elementType: SI,
    externalForwardedProps: Le,
    ownerState: be
  }), [pa, fa] = Z("clearIndicator", {
    className: ve.clearIndicator,
    elementType: $I,
    getSlotProps: J,
    externalForwardedProps: Le,
    ownerState: be,
    getSlotOwnerState: (xe) => ({
      size: xe.size || K,
      variant: xe.variant || Oo(re, se).variant || "plain",
      color: xe.color || Oo(re, se).color || "neutral",
      disableColorInversion: !!t.color
    }),
    additionalProps: {
      "aria-label": d,
      title: d
    }
  }), [ma, ha] = Z("popupIndicator", {
    className: ve.popupIndicator,
    elementType: kI,
    getSlotProps: ie,
    externalForwardedProps: Le,
    ownerState: be,
    getSlotOwnerState: (xe) => ({
      size: xe.size || K,
      variant: xe.variant || Oo(re, se).variant || "plain",
      color: xe.color || Oo(re, se).color || "neutral",
      disableColorInversion: !!t.color
    }),
    additionalProps: {
      disabled: ue,
      "aria-label": $e ? c : A,
      title: $e ? c : A,
      type: "button"
    }
  }), [ga, uo] = Z("listbox", {
    className: ve.listbox,
    elementType: II,
    getSlotProps: ce,
    externalForwardedProps: Le,
    ownerState: be,
    getSlotOwnerState: (xe) => ({
      size: xe.size || K,
      variant: xe.variant || re,
      color: xe.color || se,
      disableColorInversion: !xe.disablePortal
    }),
    additionalProps: {
      anchorEl: Ve,
      open: $e,
      style: Ve ? {
        width: Ve.clientWidth
      } : {}
    }
  }), [va, ba] = Z("loading", {
    className: ve.loading,
    elementType: PI,
    externalForwardedProps: Le,
    ownerState: be
  }), [ya, wr] = Z("noOptions", {
    className: ve.noOptions,
    elementType: wI,
    externalForwardedProps: Le,
    ownerState: be,
    additionalProps: {
      role: "presentation",
      onMouseDown: (xe) => {
        xe.preventDefault();
      }
    }
  }), [$n, W] = Z("limitTag", {
    className: ve.limitTag,
    elementType: TI,
    externalForwardedProps: Le,
    ownerState: be
  });
  if (P > -1 && Array.isArray(kt)) {
    const xe = kt.length - P;
    !ge && xe > 0 && (kt = kt.splice(0, P), kt.push(/* @__PURE__ */ m.jsx($n, u({}, W, {
      children: C(xe)
    }), kt.length)));
  }
  const [H, de] = Z("option", {
    className: ve.option,
    elementType: RI,
    externalForwardedProps: Le,
    ownerState: be,
    getSlotOwnerState: (xe) => ({
      variant: xe.variant || Oo(re, se).variant || "plain",
      color: xe.color || Oo(re, se).color || "neutral",
      disableColorInversion: !uo.disablePortal
    }),
    additionalProps: {
      as: "li"
    }
  }), De = I || ((xe, At) => /* @__PURE__ */ m.jsx(H, u({}, xe, {
    children: S(At)
  }))), nt = (xe, At) => {
    const dt = Ee({
      option: xe,
      index: At
    });
    return De(u({}, de, dt), xe, {
      // `aria-selected` prop will always by boolean, see useAutocomplete hook.
      selected: !!dt["aria-selected"],
      inputValue: Me,
      ownerState: be
    });
  }, Qe = h.useMemo(() => [{
    name: "offset",
    options: {
      offset: [0, 4]
    }
  }, ...uo.modifiers || []], [uo.modifiers]);
  let It = null;
  return Ve && (It = /* @__PURE__ */ m.jsx(vl, {
    variant: re,
    color: se,
    children: /* @__PURE__ */ m.jsx(cl, {
      nested: !0,
      children: /* @__PURE__ */ m.jsxs(ga, u({}, uo, {
        className: fe(uo.className),
        modifiers: Qe
      }, !((Tr = r.slots) != null && Tr.listbox) && {
        as: Ip,
        slots: {
          root: uo.as || "ul"
        }
      }, {
        children: [ke.map((xe, At) => {
          if ($) {
            const dt = xe;
            return w({
              key: String(dt.key),
              group: dt.group,
              children: dt.options.map((wo, To) => nt(wo, dt.index + To))
            });
          }
          return nt(xe, At);
        }), g && ke.length === 0 ? /* @__PURE__ */ m.jsx(va, u({}, ba, {
          children: k
        })) : null, ke.length === 0 && !x && !g ? /* @__PURE__ */ m.jsx(ya, u({}, wr, {
          children: O
        })) : null]
      }))
    })
  })), /* @__PURE__ */ m.jsxs(h.Fragment, {
    children: [/* @__PURE__ */ m.jsxs(Ot, u({}, Ue, {
      children: [N && /* @__PURE__ */ m.jsx(Cn, u({}, da, {
        children: N
      })), /* @__PURE__ */ m.jsxs(Mt, u({}, Go, {
        children: [kt, /* @__PURE__ */ m.jsx(ca, u({}, xn))]
      })), v && /* @__PURE__ */ m.jsx(ua, u({}, Sn, {
        children: v
      })), X ? /* @__PURE__ */ m.jsx(pa, u({}, fa, {
        children: l
      })) : null, ne ? /* @__PURE__ */ m.jsx(ma, u({}, ha, {
        children: M
      })) : null]
    })), It]
  });
}), DI = ip("MuiBox", ["root"]), wt = f1({
  themeId: Ji,
  defaultTheme: na,
  defaultClassName: DI.root,
  generateClassName: rp.generate
});
function EI(e) {
  return we("MuiTypography", e);
}
Pe("MuiTypography", ["root", "h1", "h2", "h3", "h4", "title-lg", "title-md", "title-sm", "body-lg", "body-md", "body-sm", "body-xs", "noWrap", "gutterBottom", "startDecorator", "endDecorator", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "colorContext", "variantPlain", "variantOutlined", "variantSoft", "variantSolid"]);
const zI = ["color", "textColor"], OI = ["component", "gutterBottom", "noWrap", "level", "levelMapping", "children", "endDecorator", "startDecorator", "variant", "slots", "slotProps"], ci = /* @__PURE__ */ h.createContext(!1), MI = /* @__PURE__ */ h.createContext(!1), AI = (e) => {
  const {
    gutterBottom: t,
    noWrap: o,
    level: r,
    color: n,
    variant: i
  } = e, a = {
    root: ["root", r, t && "gutterBottom", o && "noWrap", n && `color${ae(n)}`, i && `variant${ae(i)}`],
    startDecorator: ["startDecorator"],
    endDecorator: ["endDecorator"]
  };
  return Re(a, EI, {});
}, jI = G("span", {
  name: "JoyTypography",
  slot: "StartDecorator",
  overridesResolver: (e, t) => t.startDecorator
})({
  display: "inline-flex",
  marginInlineEnd: "clamp(4px, var(--Typography-gap, 0.375em), 0.75rem)"
}), BI = G("span", {
  name: "JoyTypography",
  slot: "endDecorator",
  overridesResolver: (e, t) => t.endDecorator
})({
  display: "inline-flex",
  marginInlineStart: "clamp(4px, var(--Typography-gap, 0.375em), 0.75rem)"
}), _I = G("span", {
  name: "JoyTypography",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})(({
  theme: e,
  ownerState: t
}) => {
  var r, n, i, a;
  const o = t.level !== "inherit" ? (r = e.typography[t.level]) == null ? void 0 : r.lineHeight : "1";
  return u({
    "--Icon-fontSize": `calc(1em * ${o})`
  }, t.color && {
    "--Icon-color": "currentColor"
  }, {
    margin: "var(--Typography-margin, 0px)"
  }, t.nesting ? {
    display: "inline"
    // looks better than `inline-block` when using with `variant` prop.
  } : u({
    display: "block"
  }, t.unstable_hasSkeleton && {
    position: "relative"
  }), (t.startDecorator || t.endDecorator) && u({
    display: "flex",
    alignItems: "center"
  }, t.nesting && u({
    display: "inline-flex"
  }, t.startDecorator && {
    verticalAlign: "bottom"
    // to make the text align with the parent's content
  })), t.level && t.level !== "inherit" && e.typography[t.level], {
    fontSize: `var(--Typography-fontSize, ${t.level && t.level !== "inherit" ? ((n = e.typography[t.level]) == null ? void 0 : n.fontSize) ?? "inherit" : "inherit"})`
  }, t.noWrap && {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  }, t.gutterBottom && {
    marginBottom: "0.35em"
  }, t.color && {
    color: `var(--variant-plainColor, rgba(${(i = e.vars.palette[t.color]) == null ? void 0 : i.mainChannel} / 1))`
  }, t.variant && u({
    borderRadius: e.vars.radius.xs,
    paddingBlock: "min(0.1em, 4px)",
    paddingInline: "0.25em"
  }, !t.nesting && {
    marginInline: "-0.25em"
  }, (a = e.variants[t.variant]) == null ? void 0 : a[t.color]));
}), od = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  "title-lg": "p",
  "title-md": "p",
  "title-sm": "p",
  "body-lg": "p",
  "body-md": "p",
  "body-sm": "p",
  "body-xs": "span",
  inherit: "p"
}, Ge = /* @__PURE__ */ h.forwardRef(function(t, o) {
  const r = Te({
    props: t,
    name: "JoyTypography"
  }), {
    color: n,
    textColor: i
  } = r, a = U(r, zI), s = h.useContext(ci), l = h.useContext(MI), d = Xs(u({}, a, {
    color: i
  })), {
    component: c,
    gutterBottom: f = !1,
    noWrap: p = !1,
    level: v = "body-md",
    levelMapping: b = od,
    children: y,
    endDecorator: x,
    startDecorator: C,
    variant: S,
    slots: $ = {},
    slotProps: R = {}
  } = d, P = U(d, OI), g = t.color ?? (S ? n ?? "neutral" : n), k = s || l ? t.level || "inherit" : v, T = Qs(y, ["Skeleton"]), j = c || (s ? "span" : b[k] || od[k] || "span"), O = u({}, d, {
    level: k,
    component: j,
    color: g,
    gutterBottom: f,
    noWrap: p,
    nesting: s,
    variant: S,
    unstable_hasSkeleton: T
  }), A = AI(O), D = u({}, P, {
    component: j,
    slots: $,
    slotProps: R
  }), [M, E] = Z("root", {
    ref: o,
    className: A.root,
    elementType: _I,
    externalForwardedProps: D,
    ownerState: O
  }), [w, I] = Z("startDecorator", {
    className: A.startDecorator,
    elementType: jI,
    externalForwardedProps: D,
    ownerState: O
  }), [z, _] = Z("endDecorator", {
    className: A.endDecorator,
    elementType: BI,
    externalForwardedProps: D,
    ownerState: O
  });
  return /* @__PURE__ */ m.jsx(ci.Provider, {
    value: !0,
    children: /* @__PURE__ */ m.jsxs(M, u({}, E, {
      children: [C && /* @__PURE__ */ m.jsx(w, u({}, I, {
        children: C
      })), T ? /* @__PURE__ */ h.cloneElement(y, {
        variant: y.props.variant || "inline"
      }) : y, x && /* @__PURE__ */ m.jsx(z, u({}, _, {
        children: x
      }))]
    }))
  });
});
Ge.muiName = "Typography";
function LI(e) {
  return we("MuiButton", e);
}
const FI = Pe("MuiButton", ["root", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "colorContext", "variantPlain", "variantOutlined", "variantSoft", "variantSolid", "focusVisible", "disabled", "sizeSm", "sizeMd", "sizeLg", "fullWidth", "startDecorator", "endDecorator", "loading", "loadingIndicatorCenter"]), rd = FI, NI = ["children", "action", "color", "variant", "size", "fullWidth", "startDecorator", "endDecorator", "loading", "loadingPosition", "loadingIndicator", "disabled", "component", "slots", "slotProps"], HI = (e) => {
  const {
    color: t,
    disabled: o,
    focusVisible: r,
    focusVisibleClassName: n,
    fullWidth: i,
    size: a,
    variant: s,
    loading: l
  } = e, d = {
    root: ["root", o && "disabled", r && "focusVisible", i && "fullWidth", s && `variant${ae(s)}`, t && `color${ae(t)}`, a && `size${ae(a)}`, l && "loading"],
    startDecorator: ["startDecorator"],
    endDecorator: ["endDecorator"],
    loadingIndicatorCenter: ["loadingIndicatorCenter"]
  }, c = Re(d, LI, {});
  return r && n && (c.root += ` ${n}`), c;
}, VI = G("span", {
  name: "JoyButton",
  slot: "StartDecorator",
  overridesResolver: (e, t) => t.startDecorator
})({
  "--Icon-margin": "0 0 0 calc(var(--Button-gap) / -2)",
  "--CircularProgress-margin": "0 0 0 calc(var(--Button-gap) / -2)",
  display: "inherit",
  marginRight: "var(--Button-gap)"
}), WI = G("span", {
  name: "JoyButton",
  slot: "EndDecorator",
  overridesResolver: (e, t) => t.endDecorator
})({
  "--Icon-margin": "0 calc(var(--Button-gap) / -2) 0 0",
  "--CircularProgress-margin": "0 calc(var(--Button-gap) / -2) 0 0",
  display: "inherit",
  marginLeft: "var(--Button-gap)"
}), UI = G("span", {
  name: "JoyButton",
  slot: "LoadingCenter",
  overridesResolver: (e, t) => t.loadingIndicatorCenter
})(({
  theme: e,
  ownerState: t
}) => {
  var o, r, n, i;
  return u({
    display: "inherit",
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    color: (r = (o = e.variants[t.variant]) == null ? void 0 : o[t.color]) == null ? void 0 : r.color
  }, t.disabled && {
    color: (i = (n = e.variants[`${t.variant}Disabled`]) == null ? void 0 : n[t.color]) == null ? void 0 : i.color
  });
}), GI = ({
  theme: e,
  ownerState: t
}) => {
  var o, r, n, i;
  return [u({
    "--Icon-margin": "initial",
    // reset the icon's margin.
    "--Icon-color": t.color !== "neutral" || t.variant === "solid" ? "currentColor" : e.vars.palette.text.icon
  }, t.size === "sm" && {
    "--Icon-fontSize": e.vars.fontSize.lg,
    "--CircularProgress-size": "20px",
    // must be `px` unit, otherwise the CircularProgress is broken in Safari
    "--CircularProgress-thickness": "2px",
    "--Button-gap": "0.375rem",
    minHeight: "var(--Button-minHeight, 2rem)",
    fontSize: e.vars.fontSize.sm,
    paddingBlock: "var(--Button-paddingBlock, 0.25rem)",
    paddingInline: "0.75rem"
  }, t.size === "md" && {
    "--Icon-fontSize": e.vars.fontSize.xl,
    "--CircularProgress-size": "20px",
    // must be `px` unit, otherwise the CircularProgress is broken in Safari
    "--CircularProgress-thickness": "2px",
    "--Button-gap": "0.5rem",
    minHeight: "var(--Button-minHeight, 2.25rem)",
    // use min-height instead of height to make the button resilient to its content
    fontSize: e.vars.fontSize.sm,
    // internal --Button-paddingBlock is used to control the padding-block of the button from the outside, for example as a decorator of an Input
    paddingBlock: "var(--Button-paddingBlock, 0.375rem)",
    // the padding-block act as a minimum spacing between content and root element
    paddingInline: "1rem"
  }, t.size === "lg" && {
    "--Icon-fontSize": e.vars.fontSize.xl2,
    "--CircularProgress-size": "28px",
    // must be `px` unit, otherwise the CircularProgress is broken in Safari
    "--CircularProgress-thickness": "4px",
    "--Button-gap": "0.75rem",
    minHeight: "var(--Button-minHeight, 2.75rem)",
    fontSize: e.vars.fontSize.md,
    paddingBlock: "var(--Button-paddingBlock, 0.5rem)",
    paddingInline: "1.5rem"
  }, {
    WebkitTapHighlightColor: "transparent",
    boxSizing: "border-box",
    borderRadius: `var(--Button-radius, ${e.vars.radius.sm})`,
    // to be controlled by other components, for example Input
    margin: "var(--Button-margin)",
    // to be controlled by other components, for example Input
    border: "none",
    backgroundColor: "transparent",
    cursor: "pointer",
    userSelect: "none",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    textDecoration: "none",
    // prevent user agent underline when used as anchor
    fontFamily: e.vars.fontFamily.body,
    fontWeight: e.vars.fontWeight.lg,
    lineHeight: e.vars.lineHeight.md
  }, t.fullWidth && {
    width: "100%"
  }, {
    [e.focus.selector]: e.focus.default
  }), u({}, (o = e.variants[t.variant]) == null ? void 0 : o[t.color], {
    "&:hover": {
      "@media (hover: hover)": (r = e.variants[`${t.variant}Hover`]) == null ? void 0 : r[t.color]
    },
    '&:active, &[aria-pressed="true"]': (n = e.variants[`${t.variant}Active`]) == null ? void 0 : n[t.color],
    [`&.${rd.disabled}`]: (i = e.variants[`${t.variant}Disabled`]) == null ? void 0 : i[t.color]
  }, t.loadingPosition === "center" && {
    // this has to come after the variant styles to take effect.
    [`&.${rd.loading}`]: {
      color: "transparent"
    }
  })];
}, KI = G("button", {
  name: "JoyButton",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})(GI), Ct = /* @__PURE__ */ h.forwardRef(function(t, o) {
  const r = Te({
    props: t,
    name: "JoyButton"
  }), {
    children: n,
    action: i,
    color: a = "primary",
    variant: s = "solid",
    size: l = "md",
    fullWidth: d = !1,
    startDecorator: c,
    endDecorator: f,
    loading: p = !1,
    loadingPosition: v = "center",
    loadingIndicator: b,
    disabled: y,
    component: x,
    slots: C = {},
    slotProps: S = {}
  } = r, $ = U(r, NI), R = h.useContext(jp), P = h.useContext(Bp), g = t.variant || R.variant || s, k = t.size || R.size || l, T = t.color || R.color || a, j = (t.loading || t.disabled) ?? (R.disabled || p || y), O = h.useRef(null), A = Ze(O, o), {
    focusVisible: D,
    setFocusVisible: M,
    getRootProps: E
  } = ko(u({}, r, {
    disabled: j,
    rootRef: A
  })), w = b ?? /* @__PURE__ */ m.jsx(bl, {
    color: T,
    thickness: {
      sm: 2,
      md: 3,
      lg: 4
    }[k] || 3
  });
  h.useImperativeHandle(i, () => ({
    focusVisible: () => {
      var V;
      M(!0), (V = O.current) == null || V.focus();
    }
  }), [M]);
  const I = u({}, r, {
    color: T,
    fullWidth: d,
    variant: g,
    size: k,
    focusVisible: D,
    loading: p,
    loadingPosition: v,
    disabled: j
  }), z = HI(I), _ = (V) => {
    var se;
    let K = r.onClick;
    typeof S.root == "function" ? K = S.root(I).onClick : S.root && (K = S.root.onClick), K == null || K(V), P && ((se = P.onClick) == null || se.call(P, V, r.value));
  };
  let L = r["aria-pressed"];
  typeof S.root == "function" ? L = S.root(I)["aria-pressed"] : S.root && (L = S.root["aria-pressed"]), P != null && P.value && (Array.isArray(P.value) ? L = P.value.indexOf(r.value) !== -1 : L = P.value === r.value);
  const N = u({}, $, {
    component: x,
    slots: C,
    slotProps: S
  }), [Y, ee] = Z("root", {
    ref: o,
    className: z.root,
    elementType: KI,
    externalForwardedProps: N,
    getSlotProps: E,
    ownerState: I,
    additionalProps: {
      onClick: _,
      "aria-pressed": L
    }
  }), [re, Q] = Z("startDecorator", {
    className: z.startDecorator,
    elementType: VI,
    externalForwardedProps: N,
    ownerState: I
  }), [te, he] = Z("endDecorator", {
    className: z.endDecorator,
    elementType: WI,
    externalForwardedProps: N,
    ownerState: I
  }), [oe, B] = Z("loadingIndicatorCenter", {
    className: z.loadingIndicatorCenter,
    elementType: UI,
    externalForwardedProps: N,
    ownerState: I
  });
  return /* @__PURE__ */ m.jsxs(Y, u({}, ee, {
    children: [(c || p && v === "start") && /* @__PURE__ */ m.jsx(re, u({}, Q, {
      children: p && v === "start" ? w : c
    })), n, p && v === "center" && /* @__PURE__ */ m.jsx(oe, u({}, B, {
      children: w
    })), (f || p && v === "end") && /* @__PURE__ */ m.jsx(te, u({}, he, {
      children: p && v === "end" ? w : f
    }))]
  }));
});
Ct.muiName = "Button";
function JI(e) {
  return we("MuiCard", e);
}
Pe("MuiCard", ["root", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "colorContext", "variantPlain", "variantOutlined", "variantSoft", "variantSolid", "sizeSm", "sizeMd", "sizeLg", "horizontal", "vertical"]);
const qI = ["className", "color", "component", "invertedColors", "size", "variant", "children", "orientation", "slots", "slotProps"], YI = (e) => {
  const {
    size: t,
    variant: o,
    color: r,
    orientation: n
  } = e, i = {
    root: ["root", n, o && `variant${ae(o)}`, r && `color${ae(r)}`, t && `size${ae(t)}`]
  };
  return Re(i, JI, {});
}, XI = G("div")(({
  theme: e,
  ownerState: t
}) => {
  var i;
  const {
    p: o,
    padding: r,
    borderRadius: n
  } = vn({
    theme: e,
    ownerState: t
  }, ["p", "padding", "borderRadius"]);
  return [u({
    "--Icon-color": t.color !== "neutral" || t.variant === "solid" ? "currentColor" : e.vars.palette.text.icon,
    // a context variable for any child component
    "--Card-childRadius": "max((var(--Card-radius) - var(--variant-borderWidth, 0px)) - var(--Card-padding), min(var(--Card-padding) / 2, (var(--Card-radius) - var(--variant-borderWidth, 0px)) / 2))",
    // AspectRatio integration
    "--AspectRatio-radius": "var(--Card-childRadius)",
    // Link integration
    "--unstable_actionMargin": "calc(-1 * var(--variant-borderWidth, 0px))",
    // Link, Radio, Checkbox integration
    "--unstable_actionRadius": "var(--Card-radius)",
    // CardCover integration
    "--CardCover-radius": "calc(var(--Card-radius) - var(--variant-borderWidth, 0px))",
    // CardOverflow integration
    "--CardOverflow-offset": "calc(-1 * var(--Card-padding))",
    "--CardOverflow-radius": "calc(var(--Card-radius) - var(--variant-borderWidth, 0px))",
    // Divider integration
    "--Divider-inset": "calc(-1 * var(--Card-padding))"
  }, t.size === "sm" && {
    "--Card-radius": e.vars.radius.sm,
    "--Card-padding": "0.625rem",
    gap: "0.5rem"
  }, t.size === "md" && {
    "--Card-radius": e.vars.radius.md,
    "--Card-padding": "1rem",
    gap: "0.75rem 1rem"
  }, t.size === "lg" && {
    "--Card-radius": e.vars.radius.lg,
    "--Card-padding": "1.5rem",
    gap: "1rem 1.5rem"
  }, {
    padding: "var(--Card-padding)",
    borderRadius: "var(--Card-radius)",
    backgroundColor: e.vars.palette.background.surface,
    position: "relative",
    display: "flex",
    flexDirection: t.orientation === "horizontal" ? "row" : "column"
  }, e.typography[`body-${t.size}`], t.variant === "solid" && t.color && t.invertedColors && ml(t.color)(e), t.variant === "soft" && t.color && t.invertedColors && hl(t.color)(e), (i = e.variants[t.variant]) == null ? void 0 : i[t.color]), o !== void 0 && {
    "--Card-padding": o
  }, r !== void 0 && {
    "--Card-padding": r
  }, n !== void 0 && {
    "--Card-radius": n
  }];
}), ZI = G(XI, {
  name: "JoyCard",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), QI = /* @__PURE__ */ h.forwardRef(function(t, o) {
  const r = Te({
    props: t,
    name: "JoyCard"
  }), {
    className: n,
    color: i = "neutral",
    component: a = "div",
    invertedColors: s = !1,
    size: l = "md",
    variant: d = "outlined",
    children: c,
    orientation: f = "vertical",
    slots: p = {},
    slotProps: v = {}
  } = r, b = U(r, qI), y = u({}, r, {
    color: i,
    component: a,
    orientation: f,
    size: l,
    variant: d,
    invertedColors: s
  }), x = YI(y), C = u({}, b, {
    component: a,
    slots: p,
    slotProps: v
  }), [S, $] = Z("root", {
    ref: o,
    className: fe(x.root, n),
    elementType: ZI,
    externalForwardedProps: C,
    ownerState: y
  });
  return /* @__PURE__ */ m.jsx(S, u({}, $, {
    children: h.Children.map(c, (R, P) => {
      if (!/* @__PURE__ */ h.isValidElement(R))
        return R;
      const g = {};
      if (Qs(R, ["Divider"])) {
        g.inset = "inset" in R.props ? R.props.inset : "context";
        const k = f === "vertical" ? "horizontal" : "vertical";
        g.orientation = "orientation" in R.props ? R.props.orientation : k;
      }
      return P === 0 && (g["data-first-child"] = ""), P === h.Children.count(c) - 1 && (g["data-last-child"] = ""), /* @__PURE__ */ h.cloneElement(R, g);
    })
  }));
}), Jp = Pe("MuiCardOverflow", ["root", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "colorContext", "variantPlain", "variantOutlined", "variantSoft", "variantSolid"]);
function eR(e) {
  return we("MuiDivider", e);
}
Pe("MuiDivider", ["root", "horizontal", "vertical", "insetContext", "insetNone"]);
function tR(e) {
  return we("MuiCardContent", e);
}
Pe("MuiCardContent", ["root"]);
const oR = ["className", "component", "children", "orientation", "slots", "slotProps"], rR = () => Re({
  root: ["root"]
}, tR, {}), qp = G("div")(({
  ownerState: e
}) => ({
  display: "flex",
  flexDirection: e.orientation === "horizontal" ? "row" : "column",
  flex: 9999,
  // fill the available space in the Card and also shrink if needed
  zIndex: 1,
  columnGap: "var(--Card-padding)",
  rowGap: "max(2px, calc(0.1875 * var(--Card-padding)))",
  padding: "var(--unstable_padding)",
  [`.${Jp.root} > &`]: {
    "--unstable_padding": "calc(var(--Card-padding) * 0.75) 0px"
  }
})), nR = G(qp, {
  name: "JoyCardContent",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), iR = /* @__PURE__ */ h.forwardRef(function(t, o) {
  const r = Te({
    props: t,
    name: "JoyCardContent"
  }), {
    className: n,
    component: i = "div",
    children: a,
    orientation: s = "vertical",
    slots: l = {},
    slotProps: d = {}
  } = r, c = U(r, oR), f = u({}, c, {
    component: i,
    slots: l,
    slotProps: d
  }), p = u({}, r, {
    component: i,
    orientation: s
  }), v = rR(), [b, y] = Z("root", {
    ref: o,
    className: fe(v.root, n),
    elementType: nR,
    externalForwardedProps: f,
    ownerState: p
  });
  return /* @__PURE__ */ m.jsx(b, u({}, y, {
    children: a
  }));
}), aR = Pe("MuiModalDialog", ["root", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "colorContext", "variantPlain", "variantOutlined", "variantSoft", "variantSolid", "sizeSm", "sizeMd", "sizeLg", "layoutCenter", "layoutFullscreen"]);
function sR(e) {
  return we("MuiCheckbox", e);
}
const dr = Pe("MuiCheckbox", ["root", "checkbox", "action", "input", "label", "checked", "disabled", "focusVisible", "indeterminate", "colorPrimary", "colorDanger", "colorNeutral", "colorSuccess", "colorWarning", "colorContext", "sizeSm", "sizeMd", "sizeLg", "variantOutlined", "variantSoft", "variantSolid"]), lR = Pr(/* @__PURE__ */ m.jsx("path", {
  d: "M9 16.17 5.53 12.7a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71c.39-.39.39-1.02 0-1.41a.9959.9959 0 0 0-1.41 0L9 16.17z"
}), "Check"), cR = Pr(/* @__PURE__ */ m.jsx("path", {
  d: "M19 13H5c-.55 0-1-.45-1-1s.45-1 1-1h14c.55 0 1 .45 1 1s-.45 1-1 1z"
}), "HorizontalRule"), dR = ["checked", "uncheckedIcon", "checkedIcon", "label", "defaultChecked", "disabled", "disableIcon", "overlay", "id", "indeterminate", "indeterminateIcon", "name", "onBlur", "onChange", "onFocus", "onFocusVisible", "readOnly", "required", "value", "color", "variant", "size", "component", "slots", "slotProps"], uR = (e) => {
  const {
    checked: t,
    disabled: o,
    disableIcon: r,
    focusVisible: n,
    color: i,
    variant: a,
    size: s,
    indeterminate: l
  } = e, d = {
    root: ["root", t && "checked", o && "disabled", n && "focusVisible", a && `variant${ae(a)}`, i && `color${ae(i)}`, s && `size${ae(s)}`],
    checkbox: [
      "checkbox",
      t && "checked",
      l && "indeterminate",
      o && "disabled"
      // disabled class is necessary for displaying global variant
    ],
    action: [
      "action",
      t && "checked",
      r && o && "disabled",
      // add disabled class to action element for displaying global variant
      n && "focusVisible"
    ],
    input: ["input"],
    label: ["label"]
  };
  return Re(d, sR, {});
}, pR = G("span", {
  name: "JoyCheckbox",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})(({
  ownerState: e,
  theme: t
}) => {
  var o, r, n, i, a, s;
  return u({
    "--Icon-fontSize": "var(--Checkbox-size)"
  }, e.size === "sm" && {
    "--Checkbox-size": "1rem",
    "& ~ *": {
      "--FormHelperText-margin": "0 0 0 1.5rem"
    },
    fontSize: t.vars.fontSize.sm,
    gap: "var(--Checkbox-gap, 0.5rem)"
  }, e.size === "md" && {
    "--Checkbox-size": "1.25rem",
    "& ~ *": {
      "--FormHelperText-margin": "0.25rem 0 0 1.875rem"
    },
    fontSize: t.vars.fontSize.md,
    gap: "var(--Checkbox-gap, 0.625rem)"
  }, e.size === "lg" && {
    "--Checkbox-size": "1.5rem",
    "& ~ *": {
      "--FormHelperText-margin": "0.375rem 0 0 2.25rem"
    },
    fontSize: t.vars.fontSize.lg,
    gap: "var(--Checkbox-gap, 0.75rem)"
  }, {
    position: e.overlay ? "initial" : "relative",
    display: "inline-flex",
    fontFamily: t.vars.fontFamily.body,
    lineHeight: "var(--Checkbox-size)",
    color: t.vars.palette.text.primary,
    [`&.${dr.disabled}`]: {
      color: (r = (o = t.variants.plainDisabled) == null ? void 0 : o[e.color]) == null ? void 0 : r.color
    }
  }, e.disableIcon && {
    color: (i = (n = t.variants[e.variant]) == null ? void 0 : n[e.color]) == null ? void 0 : i.color,
    [`&.${dr.disabled}`]: {
      color: (s = (a = t.variants[`${e.variant}Disabled`]) == null ? void 0 : a[e.color]) == null ? void 0 : s.color
    }
  });
}), fR = G("span", {
  name: "JoyCheckbox",
  slot: "Checkbox",
  overridesResolver: (e, t) => t.checkbox
})(({
  theme: e,
  ownerState: t
}) => {
  var r, n, i, a;
  const o = (r = e.variants[`${t.variant}`]) == null ? void 0 : r[t.color];
  return [u({
    "--Icon-color": t.color !== "neutral" || t.variant === "solid" ? "currentColor" : e.vars.palette.text.icon,
    boxSizing: "border-box",
    borderRadius: `min(${e.vars.radius.sm}, 0.25rem)`,
    width: "var(--Checkbox-size)",
    height: "var(--Checkbox-size)",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0
  }, t.disableIcon && {
    display: "contents"
  }, {
    [`&.${dr.checked}, &.${dr.indeterminate}`]: {
      "--Icon-color": "currentColor"
    }
  }), ...t.disableIcon ? [] : [u({}, o, {
    backgroundColor: (o == null ? void 0 : o.backgroundColor) ?? e.vars.palette.background.surface
  }), {
    "&:hover": {
      "@media (hover: hover)": (n = e.variants[`${t.variant}Hover`]) == null ? void 0 : n[t.color]
    }
  }, {
    "&:active": (i = e.variants[`${t.variant}Active`]) == null ? void 0 : i[t.color]
  }, {
    [`&.${dr.disabled}`]: (a = e.variants[`${t.variant}Disabled`]) == null ? void 0 : a[t.color]
  }]];
}), mR = G("span", {
  name: "JoyCheckbox",
  slot: "Action",
  overridesResolver: (e, t) => t.action
})(({
  theme: e,
  ownerState: t
}) => {
  var o, r, n, i;
  return [{
    borderRadius: `var(--Checkbox-actionRadius, ${t.overlay ? "var(--unstable_actionRadius, inherit)" : "inherit"})`,
    textAlign: "left",
    // prevent text-align inheritance
    position: "absolute",
    top: "calc(-1 * var(--variant-borderWidth, 0px))",
    // clickable on the border and focus outline does not move when checked/unchecked
    left: "calc(-1 * var(--variant-borderWidth, 0px))",
    bottom: "calc(-1 * var(--variant-borderWidth, 0px))",
    right: "calc(-1 * var(--variant-borderWidth, 0px))",
    zIndex: 1,
    // The action element usually cover the area of nearest positioned parent
    [e.focus.selector]: e.focus.default
  }, ...t.disableIcon ? [(o = e.variants[t.variant]) == null ? void 0 : o[t.color], {
    "&:hover": (r = e.variants[`${t.variant}Hover`]) == null ? void 0 : r[t.color]
  }, {
    "&:active": (n = e.variants[`${t.variant}Active`]) == null ? void 0 : n[t.color]
  }, {
    [`&.${dr.disabled}`]: (i = e.variants[`${t.variant}Disabled`]) == null ? void 0 : i[t.color]
  }] : []];
}), hR = G("input", {
  name: "JoyCheckbox",
  slot: "Input",
  overridesResolver: (e, t) => t.input
})(() => ({
  margin: 0,
  opacity: 0,
  position: "absolute",
  width: "100%",
  height: "100%",
  cursor: "pointer"
})), gR = G("label", {
  name: "JoyCheckbox",
  slot: "Label",
  overridesResolver: (e, t) => t.label
})(({
  ownerState: e
}) => u({
  flex: 1,
  minWidth: 0
}, e.disableIcon && {
  zIndex: 1,
  // label should stay on top of the action.
  pointerEvents: "none"
  // makes hover ineffect.
})), vR = /* @__PURE__ */ m.jsx(lR, {}), bR = /* @__PURE__ */ m.jsx(cR, {}), Wn = /* @__PURE__ */ h.forwardRef(function(t, o) {
  const r = Te({
    props: t,
    name: "JoyCheckbox"
  }), {
    checked: n,
    uncheckedIcon: i,
    checkedIcon: a = vR,
    label: s,
    defaultChecked: l,
    disabled: d,
    disableIcon: c = !1,
    overlay: f,
    id: p,
    indeterminate: v = !1,
    indeterminateIcon: b = bR,
    name: y,
    onBlur: x,
    onChange: C,
    onFocus: S,
    onFocusVisible: $,
    readOnly: R,
    required: P,
    value: g,
    color: k,
    variant: T,
    size: j = "md",
    component: O,
    slots: A = {},
    slotProps: D = {}
  } = r, M = U(r, dR), E = h.useContext(Qt), w = t.disabled ?? (E == null ? void 0 : E.disabled) ?? d, I = t.size ?? (E == null ? void 0 : E.size) ?? j, z = Zt(p ?? (E == null ? void 0 : E.htmlFor)), _ = {
    checked: n,
    defaultChecked: l,
    disabled: w,
    onBlur: x,
    onChange: C,
    onFocus: S,
    onFocusVisible: $
  }, {
    getInputProps: L,
    checked: N,
    disabled: Y,
    focusVisible: ee
  } = sl(_), re = N || v, he = re ? T || "solid" : T || "outlined", oe = t.color || (E != null && E.error ? "danger" : (E == null ? void 0 : E.color) ?? k), K = u({}, r, {
    checked: N,
    disabled: Y,
    disableIcon: c,
    overlay: f,
    focusVisible: ee,
    color: re ? oe || "primary" : oe || "neutral",
    variant: he,
    size: I
  }), se = uR(K), ue = u({}, M, {
    component: O,
    slots: A,
    slotProps: D
  }), [le, me] = Z("root", {
    ref: o,
    className: se.root,
    elementType: pR,
    externalForwardedProps: ue,
    ownerState: K
  }), [ie, J] = Z("checkbox", {
    className: se.checkbox,
    elementType: fR,
    externalForwardedProps: ue,
    ownerState: K
  }), [Ce, ce] = Z("action", {
    className: se.action,
    elementType: mR,
    externalForwardedProps: ue,
    ownerState: K
  }), [Ee, pe] = Z("input", {
    additionalProps: u({
      id: z,
      name: y,
      value: g,
      readOnly: R,
      role: void 0,
      required: P ?? (E == null ? void 0 : E.required),
      "aria-describedby": E == null ? void 0 : E["aria-describedby"]
    }, v && {
      // https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-checked#values
      "aria-checked": "mixed"
    }),
    className: se.input,
    elementType: hR,
    externalForwardedProps: ue,
    getSlotProps: L,
    ownerState: K
  }), [Se, $e] = Z("label", {
    additionalProps: {
      htmlFor: z
    },
    className: se.label,
    elementType: gR,
    externalForwardedProps: ue,
    ownerState: K
  });
  let ge = i;
  return c ? ge = null : v ? ge = b : N && (ge = a), /* @__PURE__ */ m.jsxs(le, u({}, me, {
    children: [/* @__PURE__ */ m.jsxs(ie, u({}, J, {
      children: [/* @__PURE__ */ m.jsx(Ce, u({}, ce, {
        children: /* @__PURE__ */ m.jsx(Ee, u({}, pe))
      })), ge]
    })), s && /* @__PURE__ */ m.jsx(ci.Provider, {
      value: !0,
      children: /* @__PURE__ */ m.jsx(Se, u({}, $e, {
        children: s
      }))
    })]
  }));
});
function yR(e) {
  return we("MuiDialogContent", e);
}
Pe("MuiDialogContent", ["root"]);
const sa = /* @__PURE__ */ h.createContext(void 0);
function xR(e) {
  return we("MuiDialogTitle", e);
}
const Yp = Pe("MuiDialogTitle", ["root", "h1", "h2", "h3", "h4", "title-lg", "title-md", "title-sm", "body-lg", "body-md", "body-sm", "body-xs", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "colorContext", "variantPlain", "variantOutlined", "variantSoft", "variantSolid"]), CR = ["component", "children", "orientation", "slots", "slotProps"], SR = () => Re({
  root: ["root"]
}, yR, {}), $R = G(qp, {
  name: "JoyDialogContent",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})(({
  theme: e
}) => ({
  color: `var(--DialogContent-color, ${e.vars.palette.text.tertiary})`,
  overflow: "auto",
  margin: "var(--unstable_DialogContent-margin)",
  [`.${aR.root} > .${Yp.root} + &`]: {
    "--unstable_DialogContent-margin": "-0.375em 0 0 0"
  }
})), kR = /* @__PURE__ */ h.forwardRef(function(t, o) {
  const r = Te({
    props: t,
    name: "JoyDialogContent"
  }), n = h.useContext(sa), {
    component: i = "div",
    children: a,
    orientation: s = "vertical",
    slots: l = {},
    slotProps: d = {}
  } = r, c = U(r, CR), f = u({}, c, {
    component: i,
    slots: l,
    slotProps: d
  }), p = u({}, r, {
    component: i,
    orientation: s
  }), v = SR(), [b, y] = Z("root", {
    ref: o,
    className: v.root,
    elementType: $R,
    externalForwardedProps: f,
    ownerState: p,
    additionalProps: {
      id: n == null ? void 0 : n.describedBy
    }
  });
  return /* @__PURE__ */ m.jsx(b, u({}, y, {
    children: a
  }));
}), xl = /* @__PURE__ */ h.createContext(void 0), IR = ["component", "children", "variant", "color", "level", "slots", "slotProps"], RR = (e) => {
  const {
    level: t,
    color: o,
    variant: r
  } = e, n = {
    root: ["root", t, o && `color${ae(o)}`, r && `variant${ae(r)}`]
  };
  return Re(n, xR, {});
}, PR = G("h2", {
  name: "JoyDialogTitle",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})(({
  theme: e,
  ownerState: t
}) => {
  var r, n;
  const o = t.level !== "inherit" ? (r = e.typography[t.level]) == null ? void 0 : r.lineHeight : "1";
  return u({
    "--Icon-fontSize": `calc(1em * ${o})`
  }, t.color && {
    "--Icon-color": "currentColor"
  }, {
    display: "flex",
    gap: "clamp(4px, 0.375em, 0.75rem)",
    margin: "var(--unstable_DialogTitle-margin, 0px)"
  }, t.level && t.level !== "inherit" && e.typography[t.level], {
    color: "inherit"
  }, t.variant && u({
    borderRadius: e.vars.radius.xs,
    paddingBlock: "min(0.1em, 4px)",
    paddingInline: "0.25em"
  }, (n = e.variants[t.variant]) == null ? void 0 : n[t.color]), {
    [`.${Jp.root} > &`]: {
      "--unstable_DialogTitle-margin": "var(--Card-padding) 0"
    }
  });
}), wR = {
  sm: "title-md",
  md: "title-lg",
  lg: "h4"
}, TR = /* @__PURE__ */ h.forwardRef(function(t, o) {
  const r = Te({
    props: t,
    name: "JoyDialogTitle"
  }), n = h.useContext(xl), i = h.useContext(sa), {
    component: a = "h2",
    children: s,
    variant: l,
    color: d,
    level: c = wR[n || "md"],
    slots: f = {},
    slotProps: p = {}
  } = r, v = U(r, IR), b = t.color || (l ? d ?? "neutral" : d), y = u({}, v, {
    component: a,
    slots: f,
    slotProps: p
  }), x = u({}, r, {
    component: a,
    color: b,
    variant: l,
    level: c
  }), C = RR(x), [S, $] = Z("root", {
    ref: o,
    className: C.root,
    elementType: PR,
    externalForwardedProps: y,
    ownerState: x,
    additionalProps: {
      id: i == null ? void 0 : i.labelledBy
    }
  });
  return /* @__PURE__ */ m.jsx(S, u({}, $, {
    children: s
  }));
}), DR = ["className", "children", "component", "inset", "orientation", "role", "slots", "slotProps"], ER = (e) => {
  const {
    orientation: t,
    inset: o
  } = e, r = {
    root: ["root", t, o && `inset${ae(o)}`]
  };
  return Re(r, eR, {});
}, zR = G("hr", {
  name: "JoyDivider",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})(({
  theme: e,
  ownerState: t
}) => u({
  "--Divider-thickness": "1px",
  "--Divider-lineColor": e.vars.palette.divider
}, t.inset === "none" && {
  "--_Divider-inset": "0px"
}, t.inset === "context" && {
  "--_Divider-inset": "var(--Divider-inset, 0px)"
}, {
  margin: "initial",
  // reset margin for `hr` tag
  marginInline: t.orientation === "vertical" ? "initial" : "var(--_Divider-inset)",
  marginBlock: t.orientation === "vertical" ? "var(--_Divider-inset)" : "initial",
  position: "relative",
  alignSelf: "stretch",
  flexShrink: 0
}, t.children ? u({
  "--Divider-gap": e.spacing(1),
  "--Divider-childPosition": "50%",
  display: "flex",
  flexDirection: t.orientation === "vertical" ? "column" : "row",
  alignItems: "center",
  whiteSpace: "nowrap",
  textAlign: "center",
  border: 0
}, e.typography["body-sm"], {
  "&::before, &::after": {
    position: "relative",
    inlineSize: t.orientation === "vertical" ? "var(--Divider-thickness)" : "initial",
    blockSize: t.orientation === "vertical" ? "initial" : "var(--Divider-thickness)",
    backgroundColor: "var(--Divider-lineColor)",
    // use logical size + background is better than border because they work with gradient.
    content: '""'
  },
  "&::before": {
    marginInlineEnd: t.orientation === "vertical" ? "initial" : "min(var(--Divider-childPosition) * 999, var(--Divider-gap))",
    marginBlockEnd: t.orientation === "vertical" ? "min(var(--Divider-childPosition) * 999, var(--Divider-gap))" : "initial",
    flexBasis: "var(--Divider-childPosition)"
  },
  "&::after": {
    marginInlineStart: t.orientation === "vertical" ? "initial" : "min((100% - var(--Divider-childPosition)) * 999, var(--Divider-gap))",
    marginBlockStart: t.orientation === "vertical" ? "min((100% - var(--Divider-childPosition)) * 999, var(--Divider-gap))" : "initial",
    flexBasis: "calc(100% - var(--Divider-childPosition))"
  }
}) : {
  border: "none",
  // reset the border for `hr` tag
  listStyle: "none",
  backgroundColor: "var(--Divider-lineColor)",
  // use logical size + background is better than border because they work with gradient.
  inlineSize: t.orientation === "vertical" ? "var(--Divider-thickness)" : "initial",
  blockSize: t.orientation === "vertical" ? "initial" : "var(--Divider-thickness)"
})), di = /* @__PURE__ */ h.forwardRef(function(t, o) {
  const r = Te({
    props: t,
    name: "JoyDivider"
  }), {
    className: n,
    children: i,
    component: a = i != null ? "div" : "hr",
    inset: s,
    orientation: l = "horizontal",
    role: d = a !== "hr" ? "separator" : void 0,
    slots: c = {},
    slotProps: f = {}
  } = r, p = U(r, DR), v = u({}, r, {
    inset: s,
    role: d,
    orientation: l,
    component: a
  }), b = ER(v), y = u({}, p, {
    component: a,
    slots: c,
    slotProps: f
  }), [x, C] = Z("root", {
    ref: o,
    className: fe(b.root, n),
    elementType: zR,
    externalForwardedProps: y,
    ownerState: v,
    additionalProps: u({
      as: a,
      role: d
    }, d === "separator" && l === "vertical" && {
      // The implicit aria-orientation of separator is 'horizontal'
      // https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/separator_role
      "aria-orientation": "vertical"
    })
  });
  return /* @__PURE__ */ m.jsx(x, u({}, C, {
    children: i
  }));
});
di.muiName = "Divider";
const Xp = /* @__PURE__ */ h.createContext(void 0), Zp = G("div")(({
  ownerState: e,
  theme: t
}) => u({
  "--unstable_popup-zIndex": `calc(${t.vars.zIndex.modal} + 1)`,
  '& ~ [role="listbox"]': {
    // target all the listbox (Autocomplete, Menu, Select, etc.) that uses portal
    "--unstable_popup-zIndex": `calc(${t.vars.zIndex.modal} + 1)`
  },
  position: "fixed",
  zIndex: t.vars.zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0
}, !e.open && {
  visibility: "hidden"
}));
G(Zp, {
  name: "JoyModal",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({});
const Qp = G("div")(({
  theme: e
}) => ({
  zIndex: -1,
  position: "fixed",
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  backgroundColor: e.vars.palette.background.backdrop,
  WebkitTapHighlightColor: "transparent",
  backdropFilter: "blur(8px)"
}));
G(Qp, {
  name: "JoyModal",
  slot: "Backdrop",
  overridesResolver: (e, t) => t.backdrop
})({});
function OR(e) {
  return we("MuiDrawer", e);
}
Pe("MuiDrawer", ["root", "hidden", "backdrop", "content", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "colorContext", "variantPlain", "variantOutlined", "variantSoft", "variantSolid", "sizeSm", "sizeMd", "sizeLg"]);
const MR = ["children", "anchor", "container", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "color", "variant", "invertedColors", "size", "onClose", "onKeyDown", "open", "component", "slots", "slotProps"], AR = (e) => {
  const {
    open: t,
    variant: o,
    color: r,
    size: n
  } = e, i = {
    root: ["root", !t && "hidden", o && `variant${ae(o)}`, r && `color${ae(r)}`, n && `size${ae(n)}`],
    backdrop: ["backdrop"],
    content: ["content"]
  };
  return Re(i, OR, {});
}, jR = G(Zp, {
  name: "JoyDrawer",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})(({
  ownerState: e
}) => u({
  "--Drawer-transitionDuration": "0.3s",
  "--Drawer-transitionFunction": "ease",
  "--ModalClose-radius": "max((var(--Drawer-contentRadius) - var(--variant-borderWidth, 0px)) - var(--ModalClose-inset), min(var(--ModalClose-inset) / 2, (var(--Drawer-contentRadius) - var(--variant-borderWidth, 0px)) / 2))"
}, e.size === "sm" && {
  "--ModalClose-inset": "0.5rem",
  "--Drawer-verticalSize": "clamp(350px, 30%, 100%)",
  "--Drawer-horizontalSize": "clamp(256px, 20%, 100%)",
  "--Drawer-titleMargin": "0.625rem 0.75rem calc(0.625rem / 2)"
}, e.size === "md" && {
  "--ModalClose-inset": "0.5rem",
  "--Drawer-verticalSize": "clamp(400px, 45%, 100%)",
  "--Drawer-horizontalSize": "clamp(300px, 30%, 100%)",
  "--Drawer-titleMargin": "0.75rem 0.75rem calc(0.75rem / 2)"
}, e.size === "lg" && {
  "--ModalClose-inset": "0.75rem",
  "--Drawer-verticalSize": "clamp(500px, 60%, 100%)",
  "--Drawer-horizontalSize": "clamp(440px, 60%, 100%)",
  "--Drawer-titleMargin": "1rem 1rem calc(1rem / 2)"
}, {
  transitionProperty: "visibility",
  transitionDelay: e.open ? "0s" : "var(--Drawer-transitionDuration)"
}, !e.open && {
  visibility: "hidden"
})), BR = G(Qp, {
  name: "JoyDrawer",
  slot: "Backdrop",
  overridesResolver: (e, t) => t.backdrop
})(({
  ownerState: e
}) => ({
  opacity: e.open ? 1 : 0,
  transition: "opacity var(--Drawer-transitionDuration) ease-in-out"
})), _R = G("div", {
  name: "JoyDrawer",
  slot: "Content",
  overridesResolver: (e, t) => t.content
})(({
  theme: e,
  ownerState: t
}) => {
  var o;
  return u({}, e.typography[`body-${t.size}`], {
    boxShadow: e.shadow.md,
    backgroundColor: e.vars.palette.background.surface,
    outline: 0,
    display: "flex",
    flexDirection: "column",
    position: "fixed",
    boxSizing: "border-box",
    overflow: "auto"
  }, t.anchor === "left" && {
    top: 0,
    left: 0,
    transform: t.open ? "translateX(0)" : "translateX(-100%)"
  }, t.anchor === "right" && {
    top: 0,
    right: 0,
    transform: t.open ? "translateX(0)" : "translateX(100%)"
  }, t.anchor === "top" && {
    top: 0,
    transform: t.open ? "translateY(0)" : "translateY(-100%)"
  }, t.anchor === "bottom" && {
    bottom: 0,
    transform: t.open ? "translateY(0)" : "translateY(100%)"
  }, {
    height: t.anchor.match(/(left|right)/) ? "100%" : "min(100vh, var(--Drawer-verticalSize))",
    width: t.anchor.match(/(top|bottom)/) ? "100vw" : "min(100vw, var(--Drawer-horizontalSize))",
    transition: "transform var(--Drawer-transitionDuration) var(--Drawer-transitionFunction)"
  }, t.variant === "solid" && t.color && t.invertedColors && ml(t.color)(e), t.variant === "soft" && t.color && t.invertedColors && hl(t.color)(e), (o = e.variants[t.variant]) == null ? void 0 : o[t.color], {
    [`& > .${Yp.root}`]: {
      "--unstable_DialogTitle-margin": "var(--Drawer-titleMargin)"
    }
  });
}), LR = /* @__PURE__ */ h.forwardRef(function(t, o) {
  const r = Te({
    props: t,
    name: "JoyDrawer"
  }), {
    children: n,
    anchor: i = "left",
    container: a,
    disableAutoFocus: s = !1,
    disableEnforceFocus: l = !1,
    disableEscapeKeyDown: d = !1,
    disablePortal: c = !1,
    disableRestoreFocus: f = !1,
    disableScrollLock: p = !1,
    hideBackdrop: v = !1,
    color: b = "neutral",
    variant: y = "plain",
    invertedColors: x = !1,
    size: C = "md",
    onClose: S,
    open: $,
    component: R,
    slots: P = {},
    slotProps: g = {}
  } = r, k = U(r, MR), T = u({}, r, {
    anchor: i,
    disableAutoFocus: s,
    disableEnforceFocus: l,
    disableEscapeKeyDown: d,
    disablePortal: c,
    disableRestoreFocus: f,
    disableScrollLock: p,
    hideBackdrop: v,
    invertedColors: x,
    color: b,
    variant: y,
    size: C
  }), {
    getRootProps: j,
    getBackdropProps: O,
    rootRef: A,
    portalRef: D,
    isTopModal: M
  } = g$(u({}, T, {
    rootRef: o,
    children: null
  })), E = AR(T), w = u({}, k, {
    component: R,
    slots: P,
    slotProps: g
  }), I = Zt(), z = Zt(), _ = h.useMemo(() => ({
    variant: y,
    color: b,
    labelledBy: I,
    describedBy: z
  }), [b, y, I, z]), [L, N] = Z("root", {
    ref: A,
    className: E.root,
    elementType: jR,
    externalForwardedProps: w,
    getSlotProps: j,
    ownerState: T
  }), [Y, ee] = Z("backdrop", {
    className: E.backdrop,
    elementType: BR,
    externalForwardedProps: w,
    getSlotProps: O,
    ownerState: T
  }), [re, Q] = Z("content", {
    className: E.content,
    elementType: _R,
    additionalProps: {
      tabIndex: -1,
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": I,
      "aria-describedby": z
    },
    externalForwardedProps: w,
    ownerState: T
  });
  return /* @__PURE__ */ m.jsx(Xp.Provider, {
    value: S,
    children: /* @__PURE__ */ m.jsx(xl.Provider, {
      value: C,
      children: /* @__PURE__ */ m.jsx(sa.Provider, {
        value: _,
        children: /* @__PURE__ */ m.jsx($p, {
          ref: D,
          container: a,
          disablePortal: c,
          children: /* @__PURE__ */ m.jsxs(L, u({}, N, {
            children: [v ? null : /* @__PURE__ */ m.jsx(Y, u({}, ee)), /* @__PURE__ */ m.jsx(AS, {
              disableEnforceFocus: l,
              disableAutoFocus: s,
              disableRestoreFocus: f,
              isEnabled: M,
              open: $,
              children: /* @__PURE__ */ m.jsx(re, u({}, Q, {
                children: n
              }))
            })]
          }))
        })
      })
    })
  });
});
function FR(e) {
  return we("MuiFormControl", e);
}
const cs = Pe("MuiFormControl", ["root", "error", "disabled", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "sizeSm", "sizeMd", "sizeLg", "horizontal", "vertical"]);
function NR(e) {
  return we("MuiSwitch", e);
}
const ui = Pe("MuiSwitch", ["root", "checked", "disabled", "action", "input", "thumb", "track", "focusVisible", "readOnly", "colorPrimary", "colorDanger", "colorSuccess", "colorWarning", "colorContext", "sizeSm", "sizeMd", "sizeLg", "variantOutlined", "variantSoft", "variantSolid", "startDecorator", "endDecorator"]), HR = ["id", "className", "component", "disabled", "required", "error", "color", "size", "orientation", "slots", "slotProps"], VR = (e) => {
  const {
    disabled: t,
    error: o,
    size: r,
    color: n,
    orientation: i
  } = e, a = {
    root: ["root", i, t && "disabled", o && "error", n && `color${ae(n)}`, r && `size${ae(r)}`]
  };
  return Re(a, FR, {});
}, WR = G("div", {
  name: "JoyFormControl",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})(({
  theme: e,
  ownerState: t
}) => {
  var o, r, n, i, a;
  return u({
    "--unstable_RadioGroup-margin": "0.5rem 0",
    "--FormLabel-alignSelf": t.orientation === "horizontal" ? "align-items" : "flex-start",
    "--FormLabel-asteriskColor": e.vars.palette.danger[500]
  }, t.size === "sm" && {
    "--FormLabel-fontSize": e.vars.fontSize.xs,
    "--FormLabel-lineHeight": e.vars.lineHeight.xl,
    "--FormLabel-margin": t.orientation === "horizontal" ? "0 0.5rem 0 0" : "0 0 0.25rem 0",
    "--FormHelperText-fontSize": e.vars.fontSize.xs,
    "--FormHelperText-lineHeight": e.vars.lineHeight.xl
  }, t.size === "md" && {
    "--FormLabel-fontSize": e.vars.fontSize.sm,
    "--FormLabel-lineHeight": e.vars.lineHeight.sm,
    "--FormLabel-margin": t.orientation === "horizontal" ? "0 0.75rem 0 0" : "0 0 0.375rem 0",
    "--FormHelperText-fontSize": e.vars.fontSize.sm,
    "--FormHelperText-lineHeight": e.vars.lineHeight.sm
  }, t.size === "lg" && {
    "--FormLabel-fontSize": e.vars.fontSize.md,
    "--FormLabel-lineHeight": e.vars.lineHeight.md,
    "--FormLabel-margin": t.orientation === "horizontal" ? "0 1rem 0 0" : "0 0 0.5rem 0",
    "--FormHelperText-fontSize": e.vars.fontSize.sm,
    "--FormHelperText-lineHeight": e.vars.lineHeight.sm
  }, t.color && {
    "--FormHelperText-color": (o = e.vars.palette[t.color]) == null ? void 0 : o[500]
  }, {
    "--FormHelperText-margin": "0.375rem 0 0 0",
    [`&.${cs.error}`]: {
      "--FormHelperText-color": e.vars.palette.danger[500]
    },
    [`&.${cs.disabled}`]: {
      "--FormLabel-color": (n = (r = e.variants.plainDisabled) == null ? void 0 : r[t.color || "neutral"]) == null ? void 0 : n.color,
      "--FormHelperText-color": (a = (i = e.variants.plainDisabled) == null ? void 0 : i[t.color || "neutral"]) == null ? void 0 : a.color
    },
    display: "flex",
    position: "relative",
    // for keeping the control action area, for example Switch
    flexDirection: t.orientation === "horizontal" ? "row" : "column"
  }, t.orientation === "horizontal" && {
    [`& > label ~ .${ui.root}`]: {
      "--unstable_Switch-margin": "0 0 0 auto"
    }
  });
}), Un = /* @__PURE__ */ h.forwardRef(function(t, o) {
  const r = Te({
    props: t,
    name: "JoyFormControl"
  }), {
    id: n,
    className: i,
    component: a = "div",
    disabled: s = !1,
    required: l = !1,
    error: d = !1,
    color: c,
    size: f = "md",
    orientation: p = "vertical",
    slots: v = {},
    slotProps: b = {}
  } = r, y = U(r, HR), x = Zt(n), [C, S] = h.useState(null), $ = u({}, r, {
    id: x,
    component: a,
    color: c,
    disabled: s,
    error: d,
    required: l,
    size: f,
    orientation: p
  });
  let R;
  const P = VR($), [g, k] = Z("root", {
    ref: o,
    className: fe(P.root, i),
    elementType: WR,
    externalForwardedProps: u({}, y, {
      component: a,
      slots: v,
      slotProps: b
    }),
    ownerState: $
  }), T = h.useMemo(() => ({
    disabled: s,
    required: l,
    error: d,
    color: c,
    size: f,
    htmlFor: x,
    labelId: `${x}-label`,
    "aria-describedby": C ? `${x}-helper-text` : void 0,
    setHelperText: S,
    registerEffect: R
  }), [c, s, d, C, x, R, l, f]);
  return /* @__PURE__ */ m.jsx(Qt.Provider, {
    value: T,
    children: /* @__PURE__ */ m.jsx(g, u({}, k))
  });
});
function UR(e) {
  return we("MuiFormHelperText", e);
}
Pe("MuiFormHelperText", ["root"]);
function GR(e) {
  return we("MuiFormLabel", e);
}
const KR = Pe("MuiFormLabel", ["root", "asterisk"]), JR = ["children", "component", "slots", "slotProps"], qR = () => Re({
  root: ["root"]
}, UR, {}), YR = G("div", {
  name: "JoyFormHelperText",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})(({
  theme: e
}) => ({
  "--Icon-fontSize": "calc(var(--FormHelperText-lineHeight) * 1em)",
  display: "flex",
  alignItems: "center",
  gap: "2px",
  fontFamily: e.vars.fontFamily.body,
  fontSize: `var(--FormHelperText-fontSize, ${e.vars.fontSize.sm})`,
  lineHeight: `var(--FormHelperText-lineHeight, ${e.vars.lineHeight.sm})`,
  color: `var(--FormHelperText-color, ${e.vars.palette.text.tertiary})`,
  margin: "var(--FormHelperText-margin, 0px)",
  [`.${KR.root} + &`]: {
    "--FormHelperText-margin": "0px"
    // remove the margin if the helper text is next to the form label.
  },
  [`.${cs.error} &`]: {
    "--Icon-color": "currentColor"
  }
})), nd = /* @__PURE__ */ h.forwardRef(function(t, o) {
  const r = Te({
    props: t,
    name: "JoyFormHelperText"
  }), {
    children: n,
    component: i,
    slots: a = {},
    slotProps: s = {}
  } = r, l = U(r, JR), d = h.useRef(null), c = Ze(d, o), f = h.useContext(Qt), p = f == null ? void 0 : f.setHelperText;
  h.useEffect(() => (p == null || p(d.current), () => {
    p == null || p(null);
  }), [p]);
  const v = qR(), b = u({}, l, {
    component: i,
    slots: a,
    slotProps: s
  }), [y, x] = Z("root", {
    ref: c,
    elementType: YR,
    externalForwardedProps: b,
    ownerState: r,
    additionalProps: {
      as: i,
      id: f == null ? void 0 : f["aria-describedby"]
    },
    className: v.root
  });
  return /* @__PURE__ */ m.jsx(y, u({}, x, {
    children: n
  }));
}), XR = ["children", "component", "htmlFor", "id", "slots", "slotProps"], ZR = () => Re({
  root: ["root"],
  asterisk: ["asterisk"]
}, GR, {}), QR = G("label", {
  name: "JoyFormLabel",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})(({
  theme: e
}) => ({
  "--Icon-fontSize": "calc(var(--FormLabel-lineHeight) * 1em)",
  WebkitTapHighlightColor: "transparent",
  alignSelf: "var(--FormLabel-alignSelf)",
  // to not fill the block space. It seems like a bug when clicking on empty space (within the label area), even though it is not.
  display: "flex",
  gap: "2px",
  alignItems: "center",
  flexWrap: "wrap",
  userSelect: "none",
  fontFamily: e.vars.fontFamily.body,
  fontSize: `var(--FormLabel-fontSize, ${e.vars.fontSize.sm})`,
  fontWeight: e.vars.fontWeight.md,
  lineHeight: `var(--FormLabel-lineHeight, ${e.vars.lineHeight.sm})`,
  color: `var(--FormLabel-color, ${e.vars.palette.text.primary})`,
  margin: "var(--FormLabel-margin, 0px)"
})), eP = G("span", {
  name: "JoyFormLabel",
  slot: "Asterisk",
  overridesResolver: (e, t) => t.asterisk
})({
  color: "var(--FormLabel-asteriskColor)"
}), Fa = /* @__PURE__ */ h.forwardRef(function(t, o) {
  const r = Te({
    props: t,
    name: "JoyFormLabel"
  }), {
    children: n,
    component: i = "label",
    htmlFor: a,
    id: s,
    slots: l = {},
    slotProps: d = {}
  } = r, c = U(r, XR), f = h.useContext(Qt), p = t.required ?? (f == null ? void 0 : f.required) ?? !1, v = u({}, r, {
    required: p
  }), b = ZR(), y = u({}, c, {
    component: i,
    slots: l,
    slotProps: d
  }), [x, C] = Z("root", {
    additionalProps: {
      htmlFor: a ?? (f == null ? void 0 : f.htmlFor),
      id: s ?? (f == null ? void 0 : f.labelId)
    },
    ref: o,
    className: b.root,
    elementType: QR,
    externalForwardedProps: y,
    ownerState: v
  }), [S, $] = Z("asterisk", {
    additionalProps: {
      "aria-hidden": !0
    },
    className: b.asterisk,
    elementType: eP,
    externalForwardedProps: y,
    ownerState: v
  });
  return /* @__PURE__ */ m.jsxs(x, u({}, C, {
    children: [n, p && /* @__PURE__ */ m.jsxs(S, u({}, $, {
      children: [" ", "*"]
    }))]
  }));
});
function tP(e) {
  return we("MuiListItemContent", e);
}
Pe("MuiListItemContent", ["root"]);
const oP = ["component", "className", "children", "slots", "slotProps"], rP = () => Re({
  root: ["root"]
}, tP, {}), nP = G("div", {
  name: "JoyListItemContent",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  flex: "1 1 auto",
  minWidth: 0
}), ef = /* @__PURE__ */ h.forwardRef(function(t, o) {
  const r = Te({
    props: t,
    name: "JoyListItemContent"
  }), {
    component: n,
    className: i,
    children: a,
    slots: s = {},
    slotProps: l = {}
  } = r, d = U(r, oP), c = u({}, r), f = rP(), p = u({}, d, {
    component: n,
    slots: s,
    slotProps: l
  }), [v, b] = Z("root", {
    ref: o,
    className: fe(f.root, i),
    elementType: nP,
    externalForwardedProps: p,
    ownerState: c
  });
  return /* @__PURE__ */ m.jsx(v, u({}, b, {
    children: a
  }));
});
function iP(e) {
  return we("MuiListItemDecorator", e);
}
Pe("MuiListItemDecorator", ["root"]);
const aP = ["component", "className", "children", "slots", "slotProps"], sP = () => Re({
  root: ["root"]
}, iP, {}), lP = G("span", {
  name: "JoyListItemDecorator",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})(({
  ownerState: e
}) => u({
  boxSizing: "border-box",
  display: "inline-flex",
  alignItems: `var(--unstable_ListItemDecorator-alignItems, ${e.parentOrientation === "horizontal" ? "center" : "initial"})`
}, e.parentOrientation === "horizontal" ? {
  minInlineSize: "var(--ListItemDecorator-size)",
  marginInlineEnd: "calc(-1 * var(--ListItem-gap))"
} : {
  minBlockSize: "var(--ListItemDecorator-size)",
  justifyContent: "center",
  marginBlockEnd: "calc(-1 * var(--ListItem-gap))"
})), cP = /* @__PURE__ */ h.forwardRef(function(t, o) {
  const r = Te({
    props: t,
    name: "JoyListItemDecorator"
  }), {
    component: n,
    className: i,
    children: a,
    slots: s = {},
    slotProps: l = {}
  } = r, d = U(r, aP), c = h.useContext(Dp), f = u({
    parentOrientation: c
  }, r), p = sP(), v = u({}, d, {
    component: n,
    slots: s,
    slotProps: l
  }), [b, y] = Z("root", {
    ref: o,
    className: fe(p.root, i),
    elementType: lP,
    externalForwardedProps: v,
    ownerState: f
  });
  return /* @__PURE__ */ m.jsx(b, u({}, y, {
    children: a
  }));
});
function dP(e) {
  return we("MuiModalClose", e);
}
Pe("MuiModalClose", ["root", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "colorContext", "variantPlain", "variantOutlined", "variantSoft", "variantSolid", "sizeSm", "sizeMd", "sizeLg"]);
var id;
const uP = ["component", "color", "variant", "size", "onClick", "slots", "slotProps"], pP = (e) => {
  const {
    variant: t,
    color: o,
    disabled: r,
    focusVisible: n,
    size: i
  } = e, a = {
    root: ["root", r && "disabled", n && "focusVisible", t && `variant${ae(t)}`, o && `color${ae(o)}`, i && `size${ae(i)}`]
  };
  return Re(a, dP, {});
}, fP = G(bn, {
  name: "JoyModalClose",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})(({
  ownerState: e,
  theme: t
}) => {
  var o, r;
  return u({}, e.size === "sm" && {
    "--IconButton-size": "1.75rem"
  }, e.size === "md" && {
    "--IconButton-size": "2rem"
  }, e.size === "lg" && {
    "--IconButton-size": "2.25rem"
  }, {
    position: "absolute",
    zIndex: 1,
    // stay on top of the title in case it is positioned relatively
    top: "var(--ModalClose-inset, 0.625rem)",
    right: "var(--ModalClose-inset, 0.625rem)",
    borderRadius: `var(--ModalClose-radius, ${t.vars.radius.sm})`
  }, !((r = (o = t.variants[e.variant]) == null ? void 0 : o[e.color]) != null && r.backgroundColor) && {
    color: t.vars.palette.text.secondary
  });
}), mP = {
  plain: "plain",
  outlined: "plain",
  soft: "soft",
  solid: "solid"
}, hP = /* @__PURE__ */ h.forwardRef(function(t, o) {
  const r = Te({
    props: t,
    name: "JoyModalClose"
  }), {
    component: n = "button",
    color: i = "neutral",
    variant: a = "plain",
    size: s = "md",
    onClick: l,
    slots: d = {},
    slotProps: c = {}
  } = r, f = U(r, uP), p = h.useContext(Xp), v = h.useContext(sa), b = t.variant ?? mP[v == null ? void 0 : v.variant] ?? a, y = t.color ?? (v == null ? void 0 : v.color) ?? i, x = h.useContext(xl), C = t.size ?? x ?? s, {
    focusVisible: S,
    getRootProps: $
  } = ko(u({}, r, {
    rootRef: o
  })), R = u({}, r, {
    color: y,
    component: n,
    variant: b,
    size: C,
    focusVisible: S
  }), P = pP(R), [g, k] = Z("root", {
    ref: o,
    elementType: fP,
    getSlotProps: $,
    externalForwardedProps: u({
      onClick: (T) => {
        p == null || p(T, "closeClick"), l == null || l(T);
      }
    }, f, {
      component: n,
      slots: d,
      slotProps: c
    }),
    className: P.root,
    ownerState: R
  });
  return /* @__PURE__ */ m.jsx(g, u({}, k, {
    children: id || (id = /* @__PURE__ */ m.jsx(Mp, {}))
  }));
});
function gP(e) {
  return we("MuiOption", e);
}
const vP = Pe("MuiOption", ["root", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "colorContext", "focusVisible", "disabled", "selected", "highlighted", "variantPlain", "variantSoft", "variantOutlined", "variantSolid"]), bP = ["component", "children", "disabled", "value", "label", "variant", "color", "slots", "slotProps"], yP = (e) => {
  const {
    disabled: t,
    highlighted: o,
    selected: r
  } = e;
  return Re({
    root: ["root", t && "disabled", o && "highlighted", r && "selected"]
  }, gP, {});
}, xP = G(pl, {
  name: "JoyOption",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})(({
  theme: e,
  ownerState: t
}) => {
  var r;
  const o = (r = e.variants[`${t.variant}Hover`]) == null ? void 0 : r[t.color];
  return {
    [`&.${vP.highlighted}:not([aria-selected="true"])`]: {
      backgroundColor: o == null ? void 0 : o.backgroundColor
    }
  };
}), CP = /* @__PURE__ */ h.memo(/* @__PURE__ */ h.forwardRef(function(t, o) {
  var M;
  const r = Te({
    props: t,
    name: "JoyOption"
  }), {
    component: n = "li",
    children: i,
    disabled: a = !1,
    value: s,
    label: l,
    variant: d = "plain",
    color: c = "neutral",
    slots: f = {},
    slotProps: p = {}
  } = r, v = U(r, bP), b = h.useContext(aa), {
    variant: y = d,
    color: x = c
  } = gl(t.variant, t.color), C = h.useRef(null), S = Ze(C, o), $ = l ?? (typeof i == "string" ? i : (M = C.current) == null ? void 0 : M.innerText), {
    getRootProps: R,
    selected: P,
    highlighted: g,
    index: k
  } = v$({
    disabled: a,
    label: $,
    value: s,
    rootRef: S
  }), T = u({}, r, {
    disabled: a,
    selected: P,
    highlighted: g,
    index: k,
    component: n,
    variant: y,
    color: x,
    row: b
  }), j = yP(T), O = u({}, v, {
    component: n,
    slots: f,
    slotProps: p
  }), [A, D] = Z("root", {
    ref: o,
    getSlotProps: R,
    elementType: xP,
    externalForwardedProps: O,
    className: j.root,
    ownerState: T
  });
  return /* @__PURE__ */ m.jsx(A, u({}, D, {
    children: i
  }));
})), SP = /* @__PURE__ */ h.forwardRef(function(t, o) {
  const {
    contextValue: r
  } = b$(t.value);
  return /* @__PURE__ */ m.jsx(ia.Provider, {
    value: r,
    children: /* @__PURE__ */ m.jsx(CP, u({}, t, {
      ref: o
    }))
  });
});
function $P(e) {
  return we("MuiRadio", e);
}
const rn = Pe("MuiRadio", ["root", "radio", "icon", "action", "input", "label", "checked", "disabled", "focusVisible", "colorPrimary", "colorDanger", "colorNeutral", "colorSuccess", "colorWarning", "colorContext", "sizeSm", "sizeMd", "sizeLg", "variantOutlined", "variantSoft", "variantSolid"]), kP = ["checked", "checkedIcon", "defaultChecked", "disabled", "disableIcon", "overlay", "label", "id", "name", "onBlur", "onChange", "onFocus", "onFocusVisible", "readOnly", "required", "color", "variant", "size", "uncheckedIcon", "value", "component", "slots", "slotProps"], IP = (e) => {
  const {
    checked: t,
    disabled: o,
    disableIcon: r,
    focusVisible: n,
    color: i,
    variant: a,
    size: s
  } = e, l = {
    root: ["root", t && "checked", o && "disabled", n && "focusVisible", a && `variant${ae(a)}`, i && `color${ae(i)}`, s && `size${ae(s)}`],
    radio: ["radio", t && "checked", o && "disabled"],
    // disabled class is necessary for displaying global variant
    icon: ["icon"],
    action: [
      "action",
      t && "checked",
      r && o && "disabled",
      // add disabled class to action element for displaying global variant
      n && "focusVisible"
    ],
    input: ["input"],
    label: ["label"]
  };
  return Re(l, $P, {});
};
function RP(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
const PP = G("span", {
  name: "JoyRadio",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})(({
  ownerState: e,
  theme: t
}) => {
  var o, r, n, i, a, s;
  return [u({
    "--Icon-fontSize": "var(--Radio-size)",
    "--Icon-color": "currentColor"
  }, e.size === "sm" && {
    "--Radio-size": "1rem",
    // --FormHelperText-margin is equal to --Radio-size + --Radio-gap but we can't use calc() with CSS variables because the FormHelperText is a sibling element
    "& ~ *": {
      "--FormHelperText-margin": "0 0 0 1.5rem"
    },
    fontSize: t.vars.fontSize.sm,
    gap: "var(--Radio-gap, 0.5rem)"
  }, e.size === "md" && {
    "--Radio-size": "1.25rem",
    "& ~ *": {
      "--FormHelperText-margin": "0.25rem 0 0 1.875rem"
    },
    fontSize: t.vars.fontSize.md,
    gap: "var(--Radio-gap, 0.625rem)"
  }, e.size === "lg" && {
    "--Radio-size": "1.5rem",
    "& ~ *": {
      "--FormHelperText-margin": "0.375rem 0 0 2.25rem"
    },
    fontSize: t.vars.fontSize.lg,
    gap: "var(--Radio-gap, 0.75rem)"
  }, {
    position: e.overlay ? "initial" : "relative",
    display: "inline-flex",
    boxSizing: "border-box",
    minWidth: 0,
    fontFamily: t.vars.fontFamily.body,
    lineHeight: "var(--Radio-size)",
    // prevent label from having larger height than the checkbox
    color: t.vars.palette.text.primary,
    [`&.${rn.disabled}`]: {
      color: (r = (o = t.variants.plainDisabled) == null ? void 0 : o[e.color]) == null ? void 0 : r.color
    }
  }, e.disableIcon && {
    color: (i = (n = t.variants[e.variant]) == null ? void 0 : n[e.color]) == null ? void 0 : i.color,
    [`&.${rn.disabled}`]: {
      color: (s = (a = t.variants[`${e.variant}Disabled`]) == null ? void 0 : a[e.color]) == null ? void 0 : s.color
    }
  }, e["data-parent"] === "RadioGroup" && e["data-first-child"] === void 0 && {
    marginInlineStart: e.orientation === "horizontal" ? "var(--RadioGroup-gap)" : void 0,
    marginBlockStart: e.orientation === "horizontal" ? void 0 : "var(--RadioGroup-gap)"
  })];
}), wP = G("span", {
  name: "JoyRadio",
  slot: "Radio",
  overridesResolver: (e, t) => t.radio
})(({
  ownerState: e,
  theme: t
}) => {
  var r, n, i, a;
  const o = (r = t.variants[`${e.variant}`]) == null ? void 0 : r[e.color];
  return [u({
    "--Icon-color": e.color !== "neutral" || e.variant === "solid" ? "currentColor" : t.vars.palette.text.icon,
    margin: 0,
    boxSizing: "border-box",
    width: "var(--Radio-size)",
    height: "var(--Radio-size)",
    borderRadius: "var(--Radio-size)",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0
  }, e.disableIcon && {
    display: "contents"
  }, {
    [`&.${rn.checked}`]: {
      "--Icon-color": "currentColor"
    }
  }), ...e.disableIcon ? [] : [u({}, o, {
    backgroundColor: (o == null ? void 0 : o.backgroundColor) ?? t.vars.palette.background.surface
  }), {
    "&:hover": {
      "@media (hover: hover)": (n = t.variants[`${e.variant}Hover`]) == null ? void 0 : n[e.color]
    }
  }, {
    "&:active": (i = t.variants[`${e.variant}Active`]) == null ? void 0 : i[e.color]
  }, {
    [`&.${rn.disabled}`]: (a = t.variants[`${e.variant}Disabled`]) == null ? void 0 : a[e.color]
  }]];
}), TP = G("span", {
  name: "JoyRadio",
  slot: "Action",
  overridesResolver: (e, t) => t.action
})(({
  theme: e,
  ownerState: t
}) => {
  var o, r, n, i;
  return [{
    position: "absolute",
    textAlign: "left",
    // prevent text-align inheritance
    borderRadius: `var(--Radio-actionRadius, ${// Automatic radius adjustment when composing with ListItem or Sheet
    t.overlay ? "var(--unstable_actionRadius, inherit)" : "inherit"})`,
    top: "calc(-1 * var(--variant-borderWidth, 0px))",
    // clickable on the border and focus outline does not move when checked/unchecked
    left: "calc(-1 * var(--variant-borderWidth, 0px))",
    bottom: "calc(-1 * var(--variant-borderWidth, 0px))",
    right: "calc(-1 * var(--variant-borderWidth, 0px))",
    zIndex: 1,
    // The action element usually cover the area of nearest positioned parent
    [e.focus.selector]: e.focus.default
  }, ...t.disableIcon ? [(o = e.variants[t.variant]) == null ? void 0 : o[t.color], {
    "&:hover": {
      "@media (hover: hover)": (r = e.variants[`${t.variant}Hover`]) == null ? void 0 : r[t.color]
    }
  }, {
    "&:active": (n = e.variants[`${t.variant}Active`]) == null ? void 0 : n[t.color]
  }, {
    [`&.${rn.disabled}`]: (i = e.variants[`${t.variant}Disabled`]) == null ? void 0 : i[t.color]
  }] : []];
}), DP = G("input", {
  name: "JoyRadio",
  slot: "Input",
  overridesResolver: (e, t) => t.input
})(() => ({
  margin: 0,
  opacity: 0,
  position: "absolute",
  height: "100%",
  width: "100%",
  cursor: "pointer"
})), EP = G("label", {
  name: "JoyRadio",
  slot: "Label",
  overridesResolver: (e, t) => t.label
})(({
  ownerState: e
}) => u({
  flex: 1,
  minWidth: 0
}, e.disableIcon && {
  zIndex: 1,
  // label should stay on top of the action.
  pointerEvents: "none"
  // makes hover ineffect.
})), zP = G("span", {
  name: "JoyRadio",
  slot: "Icon",
  overridesResolver: (e, t) => t.icon
})(({
  ownerState: e
}) => ({
  width: "calc(var(--Radio-size) / 2)",
  height: "calc(var(--Radio-size) / 2)",
  borderRadius: "inherit",
  color: "inherit",
  backgroundColor: "currentColor",
  transform: e.checked ? "scale(1)" : "scale(0)"
})), OP = /* @__PURE__ */ h.forwardRef(function(t, o) {
  const r = Te({
    props: t,
    name: "JoyRadio"
  }), {
    checked: n,
    checkedIcon: i,
    defaultChecked: a,
    disabled: s,
    disableIcon: l = !1,
    overlay: d = !1,
    label: c,
    id: f,
    name: p,
    onBlur: v,
    onChange: b,
    onFocus: y,
    onFocusVisible: x,
    readOnly: C,
    required: S,
    color: $,
    variant: R = "outlined",
    size: P = "md",
    uncheckedIcon: g,
    value: k,
    component: T,
    slots: j = {},
    slotProps: O = {}
  } = r, A = U(r, kP), D = h.useContext(Qt), M = Zt(f ?? (D == null ? void 0 : D.htmlFor)), E = h.useContext(dl), w = D != null && D.error ? "danger" : t.color ?? (D == null ? void 0 : D.color) ?? $ ?? "primary", I = D != null && D.error ? "danger" : t.color ?? (D == null ? void 0 : D.color) ?? $ ?? "neutral", z = t.size || (D == null ? void 0 : D.size) || (E == null ? void 0 : E.size) || P, _ = t.name || (E == null ? void 0 : E.name) || p, L = t.disableIcon || (E == null ? void 0 : E.disableIcon) || l, N = t.overlay || (E == null ? void 0 : E.overlay) || d, ee = {
    checked: typeof n > "u" && k != null ? RP(E == null ? void 0 : E.value, k) : n,
    defaultChecked: a,
    disabled: t.disabled || (D == null ? void 0 : D.disabled) || s,
    onBlur: v,
    onChange: b,
    onFocus: y,
    onFocusVisible: x
  }, {
    getInputProps: re,
    checked: Q,
    disabled: te,
    focusVisible: he
  } = sl(ee), oe = t.color ?? (Q ? w : I), B = u({}, r, {
    checked: Q,
    disabled: te,
    focusVisible: he,
    color: oe,
    variant: R,
    size: z,
    disableIcon: L,
    overlay: N,
    orientation: E == null ? void 0 : E.orientation
  }), V = IP(B), K = u({}, A, {
    component: T,
    slots: j,
    slotProps: O
  }), [se, ue] = Z("root", {
    ref: o,
    className: V.root,
    elementType: PP,
    externalForwardedProps: K,
    ownerState: B
  }), [le, me] = Z("radio", {
    className: V.radio,
    elementType: wP,
    externalForwardedProps: K,
    ownerState: B
  }), [ie, J] = Z("icon", {
    className: V.icon,
    elementType: zP,
    externalForwardedProps: K,
    ownerState: B
  }), [Ce, ce] = Z("action", {
    className: V.action,
    elementType: TP,
    externalForwardedProps: K,
    ownerState: B
  }), [Ee, pe] = Z("input", {
    additionalProps: {
      type: "radio",
      role: void 0,
      id: M,
      name: _,
      readOnly: C,
      required: S ?? (D == null ? void 0 : D.required),
      value: String(k),
      "aria-describedby": D == null ? void 0 : D["aria-describedby"]
    },
    className: V.input,
    elementType: DP,
    externalForwardedProps: K,
    getSlotProps: () => re({
      onChange: E == null ? void 0 : E.onChange
    }),
    ownerState: B
  }), [Se, $e] = Z("label", {
    additionalProps: {
      htmlFor: M
    },
    className: V.label,
    elementType: EP,
    externalForwardedProps: K,
    ownerState: B
  });
  return /* @__PURE__ */ m.jsxs(se, u({}, ue, {
    children: [/* @__PURE__ */ m.jsxs(le, u({}, me, {
      children: [Q && !L && i, !Q && !L && g, !i && !g && !L && /* @__PURE__ */ m.jsx(ie, u({}, J)), /* @__PURE__ */ m.jsx(Ce, u({}, ce, {
        children: /* @__PURE__ */ m.jsx(Ee, u({}, pe))
      }))]
    })), c && /* @__PURE__ */ m.jsx(Se, u({}, $e, {
      children: /* @__PURE__ */ m.jsx(ci.Provider, {
        value: !0,
        children: c
      })
    }))]
  }));
});
function MP(e) {
  return we("MuiRadioGroup", e);
}
Pe("MuiRadioGroup", ["root", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "variantPlain", "variantOutlined", "variantSoft", "variantSolid", "sizeSm", "sizeMd", "sizeLg", "horizontal", "vertical"]);
const AP = ["className", "component", "children", "name", "defaultValue", "disableIcon", "overlay", "value", "onChange", "color", "variant", "size", "orientation", "role", "slots", "slotProps"], jP = (e) => {
  const {
    orientation: t,
    size: o,
    variant: r,
    color: n
  } = e, i = {
    root: ["root", t, r && `variant${ae(r)}`, n && `color${ae(n)}`, o && `size${ae(o)}`]
  };
  return Re(i, MP, {});
}, BP = G("div", {
  name: "JoyRadioGroup",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})(({
  ownerState: e,
  theme: t
}) => {
  var o;
  return u({}, e.size === "sm" && {
    "--RadioGroup-gap": "0.625rem"
  }, e.size === "md" && {
    "--RadioGroup-gap": "0.875rem"
  }, e.size === "lg" && {
    "--RadioGroup-gap": "1.25rem"
  }, {
    display: "flex",
    margin: "var(--unstable_RadioGroup-margin)",
    flexDirection: e.orientation === "horizontal" ? "row" : "column",
    borderRadius: t.vars.radius.sm
  }, (o = t.variants[e.variant]) == null ? void 0 : o[e.color]);
}), _P = /* @__PURE__ */ h.forwardRef(function(t, o) {
  const r = Te({
    props: t,
    name: "JoyRadioGroup"
  }), {
    className: n,
    component: i,
    children: a,
    name: s,
    defaultValue: l,
    disableIcon: d = !1,
    overlay: c,
    value: f,
    onChange: p,
    color: v = "neutral",
    variant: b = "plain",
    size: y = "md",
    orientation: x = "vertical",
    role: C = "radiogroup",
    slots: S = {},
    slotProps: $ = {}
  } = r, R = U(r, AP), [P, g] = Ur({
    controlled: f,
    default: l,
    name: "RadioGroup"
  }), k = h.useContext(Qt), T = t.size || (k == null ? void 0 : k.size) || y, j = u({
    orientation: x,
    size: T,
    variant: b,
    color: v,
    role: C
  }, r), O = jP(j), A = Zt(s), D = h.useMemo(() => ({
    disableIcon: d,
    overlay: c,
    orientation: x,
    size: T,
    name: A,
    value: P,
    onChange: (w) => {
      g(w.target.value), p && p(w);
    }
  }), [d, A, p, c, x, g, T, P]), [M, E] = Z("root", {
    ref: o,
    className: fe(O.root, n),
    elementType: BP,
    externalForwardedProps: u({}, R, {
      component: i,
      slots: S,
      slotProps: $
    }),
    ownerState: j,
    additionalProps: {
      as: i,
      role: C,
      // The `id` is just for the completeness, it does not have any effect because RadioGroup (div) is non-labelable element
      // MDN: "If it is not a labelable element, then the for attribute has no effect"
      // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label#attr-for
      id: k == null ? void 0 : k.htmlFor,
      "aria-labelledby": k == null ? void 0 : k.labelId,
      "aria-describedby": k == null ? void 0 : k["aria-describedby"]
    }
  });
  return /* @__PURE__ */ m.jsx(dl.Provider, {
    value: D,
    children: /* @__PURE__ */ m.jsx(M, u({}, E, {
      children: /* @__PURE__ */ m.jsx(Qt.Provider, {
        value: void 0,
        children: h.Children.map(a, (w, I) => /* @__PURE__ */ h.isValidElement(w) ? /* @__PURE__ */ h.cloneElement(w, u({}, I === 0 && {
          "data-first-child": ""
        }, I === h.Children.count(a) - 1 && {
          "data-last-child": ""
        }, {
          "data-parent": "RadioGroup"
        })) : w)
      })
    }))
  });
}), LP = Pr(/* @__PURE__ */ m.jsx("path", {
  d: "m12 5.83 2.46 2.46c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L12.7 3.7a.9959.9959 0 0 0-1.41 0L8.12 6.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 5.83zm0 12.34-2.46-2.46a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l3.17 3.18c.39.39 1.02.39 1.41 0l3.17-3.17c.39-.39.39-1.02 0-1.41a.9959.9959 0 0 0-1.41 0L12 18.17z"
}), "Unfold");
function FP(e) {
  return we("MuiSelect", e);
}
const ur = Pe("MuiSelect", ["root", "button", "indicator", "startDecorator", "endDecorator", "popper", "listbox", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "colorContext", "variantPlain", "variantOutlined", "variantSoft", "variantSolid", "sizeSm", "sizeMd", "sizeLg", "focusVisible", "disabled", "expanded", "multiple"]);
var ad;
const NP = ["action", "autoFocus", "children", "defaultValue", "defaultListboxOpen", "disabled", "getSerializedValue", "placeholder", "listboxId", "listboxOpen", "onChange", "onListboxOpenChange", "onClose", "renderValue", "required", "value", "size", "variant", "color", "startDecorator", "endDecorator", "indicator", "aria-describedby", "aria-label", "aria-labelledby", "id", "name", "multiple", "slots", "slotProps"];
function HP(e) {
  return Array.isArray(e) ? /* @__PURE__ */ m.jsx(h.Fragment, {
    children: e.map((t) => t.label).join(", ")
  }) : (e == null ? void 0 : e.label) ?? "";
}
const VP = [{
  name: "offset",
  options: {
    offset: [0, 4]
  }
}, {
  // popper will have the same width as root element when open
  name: "equalWidth",
  enabled: !0,
  phase: "beforeWrite",
  requires: ["computeStyles"],
  fn: ({
    state: e
  }) => {
    e.styles.popper.width = `${e.rects.reference.width}px`;
  }
}], WP = (e) => {
  const {
    color: t,
    disabled: o,
    focusVisible: r,
    size: n,
    variant: i,
    open: a,
    multiple: s
  } = e, l = {
    root: ["root", o && "disabled", r && "focusVisible", a && "expanded", i && `variant${ae(i)}`, t && `color${ae(t)}`, n && `size${ae(n)}`, s && "multiple"],
    button: ["button"],
    startDecorator: ["startDecorator"],
    endDecorator: ["endDecorator"],
    indicator: ["indicator", a && "expanded"],
    listbox: ["listbox", a && "expanded", o && "disabled"]
  };
  return Re(l, FP, {});
}, UP = G("div", {
  name: "JoySelect",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})(({
  theme: e,
  ownerState: t
}) => {
  var n, i, a, s, l;
  const o = (n = e.variants[`${t.variant}`]) == null ? void 0 : n[t.color], {
    borderRadius: r
  } = vn({
    theme: e,
    ownerState: t
  }, ["borderRadius"]);
  return [u({
    "--Select-radius": e.vars.radius.sm,
    "--Select-gap": "0.5rem",
    "--Select-placeholderOpacity": 0.64,
    "--Select-decoratorColor": e.vars.palette.text.icon,
    "--Select-focusedThickness": e.vars.focus.thickness,
    "--Select-focusedHighlight": (i = e.vars.palette[t.color === "neutral" ? "primary" : t.color]) == null ? void 0 : i[500],
    '&:not([data-inverted-colors="false"])': u({}, t.instanceColor && {
      "--_Select-focusedHighlight": (a = e.vars.palette[t.instanceColor === "neutral" ? "primary" : t.instanceColor]) == null ? void 0 : a[500]
    }, {
      "--Select-focusedHighlight": e.vars.palette.focusVisible
    }),
    "--Select-indicatorColor": o != null && o.backgroundColor ? o == null ? void 0 : o.color : e.vars.palette.text.tertiary
  }, t.size === "sm" && {
    "--Select-minHeight": "2rem",
    "--Select-paddingInline": "0.5rem",
    "--Select-decoratorChildHeight": "min(1.5rem, var(--Select-minHeight))",
    "--Icon-fontSize": e.vars.fontSize.xl
  }, t.size === "md" && {
    "--Select-minHeight": "2.25rem",
    "--Select-paddingInline": "0.75rem",
    "--Select-decoratorChildHeight": "min(1.75rem, var(--Select-minHeight))",
    "--Icon-fontSize": e.vars.fontSize.xl2
  }, t.size === "lg" && {
    "--Select-minHeight": "2.75rem",
    "--Select-paddingInline": "1rem",
    "--Select-decoratorChildHeight": "min(2.375rem, var(--Select-minHeight))",
    "--Icon-fontSize": e.vars.fontSize.xl2
  }, {
    // variables for controlling child components
    "--Select-decoratorChildOffset": "min(calc(var(--Select-paddingInline) - (var(--Select-minHeight) - 2 * var(--variant-borderWidth, 0px) - var(--Select-decoratorChildHeight)) / 2), var(--Select-paddingInline))",
    "--_Select-paddingBlock": "max((var(--Select-minHeight) - 2 * var(--variant-borderWidth, 0px) - var(--Select-decoratorChildHeight)) / 2, 0px)",
    "--Select-decoratorChildRadius": "max(var(--Select-radius) - var(--variant-borderWidth, 0px) - var(--_Select-paddingBlock), min(var(--_Select-paddingBlock) + var(--variant-borderWidth, 0px), var(--Select-radius) / 2))",
    "--Button-minHeight": "var(--Select-decoratorChildHeight)",
    "--Button-paddingBlock": "0px",
    // to ensure that the height of the button is equal to --Button-minHeight
    "--IconButton-size": "var(--Select-decoratorChildHeight)",
    "--Button-radius": "var(--Select-decoratorChildRadius)",
    "--IconButton-radius": "var(--Select-decoratorChildRadius)",
    boxSizing: "border-box"
  }, t.variant !== "plain" && {
    boxShadow: e.shadow.xs
  }, {
    minWidth: 0,
    minHeight: "var(--Select-minHeight)",
    position: "relative",
    display: "flex",
    alignItems: "center",
    borderRadius: "var(--Select-radius)",
    cursor: "pointer"
  }, !(o != null && o.backgroundColor) && {
    backgroundColor: e.vars.palette.background.surface
  }, t.size && {
    paddingBlock: {
      sm: 2,
      md: 3,
      lg: 4
    }[t.size]
    // the padding-block act as a minimum spacing between content and root element
  }, {
    paddingInline: "var(--Select-paddingInline)"
  }, e.typography[`body-${t.size}`], o, {
    "&::before": {
      boxSizing: "border-box",
      content: '""',
      display: "block",
      position: "absolute",
      pointerEvents: "none",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 1,
      borderRadius: "inherit",
      margin: "calc(var(--variant-borderWidth, 0px) * -1)"
      // for outlined variant
    },
    [`&.${ur.focusVisible}`]: {
      "--Select-indicatorColor": o == null ? void 0 : o.color,
      "&::before": {
        boxShadow: "inset 0 0 0 var(--Select-focusedThickness) var(--Select-focusedHighlight)"
      }
    },
    [`&.${ur.disabled}`]: {
      "--Select-indicatorColor": "inherit"
    }
  }), {
    "&:hover": (s = e.variants[`${t.variant}Hover`]) == null ? void 0 : s[t.color],
    [`&.${ur.disabled}`]: (l = e.variants[`${t.variant}Disabled`]) == null ? void 0 : l[t.color]
  }, r !== void 0 && {
    "--Select-radius": r
  }];
}), GP = G("button", {
  name: "JoySelect",
  slot: "Button",
  overridesResolver: (e, t) => t.button
})(({
  ownerState: e
}) => u({
  // reset user-agent button style
  border: 0,
  outline: 0,
  background: "none",
  padding: 0,
  fontSize: "inherit",
  color: "inherit",
  alignSelf: "stretch",
  // make children horizontally aligned
  display: "flex",
  alignItems: "center",
  flex: 1,
  fontFamily: "inherit",
  cursor: "pointer",
  whiteSpace: "nowrap",
  overflow: "hidden"
}, (e.value === null || e.value === void 0) && {
  opacity: "var(--Select-placeholderOpacity)"
}, {
  "&::before": {
    content: '""',
    display: "block",
    position: "absolute",
    // TODO: use https://caniuse.com/?search=inset when ~94%
    top: "calc(-1 * var(--variant-borderWidth, 0px))",
    left: "calc(-1 * var(--variant-borderWidth, 0px))",
    right: "calc(-1 * var(--variant-borderWidth, 0px))",
    bottom: "calc(-1 * var(--variant-borderWidth, 0px))",
    borderRadius: "var(--Select-radius)"
  }
})), KP = G(ul, {
  name: "JoySelect",
  slot: "Listbox",
  overridesResolver: (e, t) => t.listbox
})(({
  theme: e,
  ownerState: t
}) => {
  var r;
  const o = (r = e.variants[t.variant]) == null ? void 0 : r[t.color];
  return u({
    "--focus-outline-offset": `calc(${e.vars.focus.thickness} * -1)`,
    // to prevent the focus outline from being cut by overflow
    "--ListItem-stickyBackground": (o == null ? void 0 : o.backgroundColor) || (o == null ? void 0 : o.background) || e.vars.palette.background.popup,
    "--ListItem-stickyTop": "calc(var(--List-padding, var(--ListDivider-gap)) * -1)"
  }, Tp, {
    minWidth: "max-content",
    // prevent options from shrinking if some of them is wider than the Select's root.
    maxHeight: "44vh",
    // the best value from what I tried so far which does not cause screen flicker when listbox is open.
    overflow: "auto",
    outline: 0,
    boxShadow: e.shadow.md,
    borderRadius: `var(--List-radius, ${e.vars.radius.sm})`,
    // `unstable_popup-zIndex` is a private variable that lets other component, for example Modal, to override the z-index so that the listbox can be displayed above the Modal.
    zIndex: `var(--unstable_popup-zIndex, ${e.vars.zIndex.popup})`
  }, !(o != null && o.backgroundColor) && {
    backgroundColor: e.vars.palette.background.popup
  });
}), JP = G("span", {
  name: "JoySelect",
  slot: "StartDecorator",
  overridesResolver: (e, t) => t.startDecorator
})({
  "--Button-margin": "0 0 0 calc(var(--Select-decoratorChildOffset) * -1)",
  "--IconButton-margin": "0 0 0 calc(var(--Select-decoratorChildOffset) * -1)",
  "--Icon-margin": "0 0 0 calc(var(--Select-paddingInline) / -4)",
  display: "inherit",
  alignItems: "center",
  color: "var(--Select-decoratorColor)",
  marginInlineEnd: "var(--Select-gap)"
}), qP = G("span", {
  name: "JoySelect",
  slot: "EndDecorator",
  overridesResolver: (e, t) => t.endDecorator
})({
  "--Button-margin": "0 calc(var(--Select-decoratorChildOffset) * -1) 0 0",
  "--IconButton-margin": "0 calc(var(--Select-decoratorChildOffset) * -1) 0 0",
  "--Icon-margin": "0 calc(var(--Select-paddingInline) / -4) 0 0",
  display: "inherit",
  alignItems: "center",
  color: "var(--Select-decoratorColor)",
  marginInlineStart: "var(--Select-gap)"
}), YP = G("span", {
  name: "JoySelect",
  slot: "Indicator"
})(({
  ownerState: e,
  theme: t
}) => u({}, e.size === "sm" && {
  "--Icon-fontSize": t.vars.fontSize.lg
}, e.size === "md" && {
  "--Icon-fontSize": t.vars.fontSize.xl
}, e.size === "lg" && {
  "--Icon-fontSize": t.vars.fontSize.xl2
}, {
  "--Icon-color": e.color !== "neutral" || e.variant === "solid" ? "currentColor" : t.vars.palette.text.icon,
  display: "inherit",
  alignItems: "center",
  marginInlineStart: "var(--Select-gap)",
  marginInlineEnd: "calc(var(--Select-paddingInline) / -4)",
  [`.${ur.endDecorator} + &`]: {
    marginInlineStart: "calc(var(--Select-gap) / 2)"
  },
  [`&.${ur.expanded}, .${ur.disabled} > &`]: {
    "--Icon-color": "currentColor"
  }
})), XP = /* @__PURE__ */ h.forwardRef(function(t, o) {
  var Ot;
  const r = Te({
    props: t,
    name: "JoySelect"
  }), n = r, {
    action: i,
    autoFocus: a,
    children: s,
    defaultValue: l,
    defaultListboxOpen: d = !1,
    disabled: c,
    getSerializedValue: f,
    placeholder: p,
    listboxId: v,
    listboxOpen: b,
    onChange: y,
    onListboxOpenChange: x,
    onClose: C,
    renderValue: S,
    required: $ = !1,
    value: R,
    size: P = "md",
    variant: g = "outlined",
    color: k = "neutral",
    startDecorator: T,
    endDecorator: j,
    indicator: O = ad || (ad = /* @__PURE__ */ m.jsx(LP, {})),
    // props to forward to the button (all handlers should go through slotProps.button)
    "aria-describedby": A,
    "aria-label": D,
    "aria-labelledby": M,
    id: E,
    name: w,
    multiple: I = !1,
    slots: z = {},
    slotProps: _ = {}
  } = n, L = U(n, NP), N = h.useContext(Qt), Y = t.disabled ?? (N == null ? void 0 : N.disabled) ?? c, ee = t.size ?? (N == null ? void 0 : N.size) ?? P, re = t.color ?? (N != null && N.error ? "danger" : (N == null ? void 0 : N.color) ?? k), Q = S ?? HP, [te, he] = h.useState(null), oe = h.useRef(null), B = h.useRef(null), V = Ze(o, oe);
  h.useImperativeHandle(i, () => ({
    focusVisible: () => {
      var Ue;
      (Ue = B.current) == null || Ue.focus();
    }
  }), []), h.useEffect(() => {
    he(oe.current);
  }, []), h.useEffect(() => {
    a && B.current.focus();
  }, [a]);
  const K = h.useCallback((Ue) => {
    x == null || x(Ue), Ue || C == null || C();
  }, [C, x]), {
    buttonActive: se,
    buttonFocusVisible: ue,
    contextValue: le,
    disabled: me,
    getButtonProps: ie,
    getListboxProps: J,
    getHiddenInputProps: Ce,
    getOptionMetadata: ce,
    open: Ee,
    value: pe
  } = D$({
    buttonRef: B,
    defaultOpen: d,
    defaultValue: l,
    disabled: Y,
    getSerializedValue: f,
    listboxId: v,
    multiple: I,
    name: w,
    required: $,
    onChange: y,
    onOpenChange: K,
    open: b,
    value: R
  }), Se = u({}, r, {
    active: se,
    defaultListboxOpen: d,
    disabled: me,
    focusVisible: ue,
    open: Ee,
    renderValue: Q,
    value: pe,
    size: ee,
    variant: g,
    color: re
  }), $e = WP(Se), ge = u({}, L, {
    slots: z,
    slotProps: _
  }), Ie = h.useMemo(() => {
    let Ue;
    return I ? Ue = pe.map((Mt) => ce(Mt)).filter((Mt) => Mt !== void 0) : Ue = ce(pe) ?? null, Ue;
  }, [ce, pe, I]), [Ve, st] = Z("root", {
    ref: V,
    className: $e.root,
    elementType: UP,
    externalForwardedProps: ge,
    ownerState: Se
  }), [Me, ke] = Z("button", {
    additionalProps: {
      "aria-describedby": A ?? (N == null ? void 0 : N["aria-describedby"]),
      "aria-label": D,
      "aria-labelledby": M ?? (N == null ? void 0 : N.labelId),
      "aria-required": $ ? "true" : void 0,
      id: E ?? (N == null ? void 0 : N.htmlFor),
      name: w
    },
    className: $e.button,
    elementType: GP,
    externalForwardedProps: ge,
    getSlotProps: ie,
    ownerState: Se
  }), [q, ze] = Z("listbox", {
    additionalProps: {
      anchorEl: te,
      open: Ee,
      placement: "bottom",
      keepMounted: !0
    },
    className: $e.listbox,
    elementType: KP,
    externalForwardedProps: ge,
    getSlotProps: J,
    ownerState: u({}, Se, {
      nesting: !1,
      row: !1,
      wrap: !1
    }),
    getSlotOwnerState: (Ue) => ({
      size: Ue.size || ee,
      variant: Ue.variant || g,
      color: Ue.color || (Ue.disablePortal ? re : k),
      disableColorInversion: !Ue.disablePortal
    })
  }), [X, ne] = Z("startDecorator", {
    className: $e.startDecorator,
    elementType: JP,
    externalForwardedProps: ge,
    ownerState: Se
  }), [be, ve] = Z("endDecorator", {
    className: $e.endDecorator,
    elementType: qP,
    externalForwardedProps: ge,
    ownerState: Se
  }), [Le, kt] = Z("indicator", {
    className: $e.indicator,
    elementType: YP,
    externalForwardedProps: ge,
    ownerState: Se
  }), Ro = h.useMemo(() => [...VP, ...ze.modifiers || []], [ze.modifiers]);
  let Uo = p;
  return (Array.isArray(Ie) && Ie.length > 0 || !Array.isArray(Ie) && Ie) && (Uo = Q(Ie)), /* @__PURE__ */ m.jsxs(h.Fragment, {
    children: [/* @__PURE__ */ m.jsxs(Ve, u({}, st, {
      children: [T && /* @__PURE__ */ m.jsx(X, u({}, ne, {
        children: T
      })), /* @__PURE__ */ m.jsx(Me, u({}, ke, {
        children: Uo
      })), j && /* @__PURE__ */ m.jsx(be, u({}, ve, {
        children: j
      })), O && /* @__PURE__ */ m.jsx(Le, u({}, kt, {
        children: O
      })), /* @__PURE__ */ m.jsx("input", u({}, Ce()))]
    })), te && /* @__PURE__ */ m.jsx(q, u({}, ze, {
      className: fe(ze.className),
      modifiers: Ro
    }, !((Ot = r.slots) != null && Ot.listbox) && {
      as: Ip,
      slots: {
        root: ze.as || "ul"
      }
    }, {
      children: /* @__PURE__ */ m.jsx(E$, {
        value: le,
        children: /* @__PURE__ */ m.jsx(vl, {
          variant: g,
          color: k,
          children: /* @__PURE__ */ m.jsx(ll.Provider, {
            value: "select",
            children: /* @__PURE__ */ m.jsx(cl, {
              nested: !0,
              children: s
            })
          })
        })
      })
    }))]
  });
});
function ZP(e) {
  return we("MuiSheet", e);
}
Pe("MuiSheet", ["root", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "colorContext", "variantPlain", "variantOutlined", "variantSoft", "variantSolid"]);
const QP = ["className", "color", "component", "variant", "invertedColors", "slots", "slotProps"], e2 = (e) => {
  const {
    variant: t,
    color: o
  } = e, r = {
    root: ["root", t && `variant${ae(t)}`, o && `color${ae(o)}`]
  };
  return Re(r, ZP, {});
}, t2 = G("div", {
  name: "JoySheet",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})(({
  theme: e,
  ownerState: t
}) => {
  var l, d;
  const o = (l = e.variants[t.variant]) == null ? void 0 : l[t.color], {
    borderRadius: r,
    bgcolor: n,
    backgroundColor: i,
    background: a
  } = vn({
    theme: e,
    ownerState: t
  }, ["borderRadius", "bgcolor", "backgroundColor", "background"]), s = yr(e, `palette.${n}`) || n || yr(e, `palette.${i}`) || i || a || (o == null ? void 0 : o.backgroundColor) || (o == null ? void 0 : o.background) || e.vars.palette.background.surface;
  return [u({
    "--Icon-color": t.color !== "neutral" || t.variant === "solid" ? "currentColor" : e.vars.palette.text.icon,
    "--ListItem-stickyBackground": s === "transparent" ? "initial" : s,
    // for sticky List
    "--Sheet-background": s === "transparent" ? "initial" : s
  }, r !== void 0 && {
    "--List-radius": `calc(${r} - var(--variant-borderWidth, 0px))`,
    "--unstable_actionRadius": `calc(${r} - var(--variant-borderWidth, 0px))`
  }, {
    backgroundColor: e.vars.palette.background.surface,
    position: "relative"
  }), u({}, e.typography["body-md"], t.variant === "solid" && t.color && t.invertedColors && ml(t.color)(e), t.variant === "soft" && t.color && t.invertedColors && hl(t.color)(e), (d = e.variants[t.variant]) == null ? void 0 : d[t.color], o)];
}), tf = /* @__PURE__ */ h.forwardRef(function(t, o) {
  const r = Te({
    props: t,
    name: "JoySheet"
  }), {
    className: n,
    color: i = "neutral",
    component: a = "div",
    variant: s = "plain",
    invertedColors: l = !1,
    slots: d = {},
    slotProps: c = {}
  } = r, f = U(r, QP), p = u({}, r, {
    color: i,
    component: a,
    invertedColors: l,
    variant: s
  }), v = e2(p), b = u({}, f, {
    component: a,
    slots: d,
    slotProps: c
  }), [y, x] = Z("root", {
    ref: o,
    className: fe(v.root, n),
    elementType: t2,
    externalForwardedProps: b,
    ownerState: p
  });
  return /* @__PURE__ */ m.jsx(y, u({}, x));
}), Co = lS({
  createStyledComponent: G("div", {
    name: "JoyStack",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  }),
  useThemeProps: (e) => Te({
    props: e,
    name: "JoyStack"
  })
}), o2 = ["checked", "defaultChecked", "disabled", "onBlur", "onChange", "onFocus", "onFocusVisible", "readOnly", "required", "id", "color", "variant", "size", "startDecorator", "endDecorator", "component", "slots", "slotProps"], r2 = (e) => {
  const {
    checked: t,
    disabled: o,
    focusVisible: r,
    readOnly: n,
    color: i,
    variant: a,
    size: s
  } = e, l = {
    root: ["root", t && "checked", o && "disabled", r && "focusVisible", n && "readOnly", a && `variant${ae(a)}`, i && `color${ae(i)}`, s && `size${ae(s)}`],
    thumb: ["thumb", t && "checked"],
    track: ["track", t && "checked"],
    action: ["action", r && "focusVisible"],
    input: ["input"],
    startDecorator: ["startDecorator"],
    endDecorator: ["endDecorator"]
  };
  return Re(l, NR, {});
}, n2 = ({
  theme: e,
  ownerState: t
}) => (o = {}) => {
  var n;
  const r = ((n = e.variants[`${t.variant}${o.state || ""}`]) == null ? void 0 : n[t.color]) || {};
  return {
    "--Switch-trackBackground": r.backgroundColor ?? e.vars.palette.background.surface,
    "--Switch-trackColor": r.color,
    "--Switch-trackBorderColor": t.variant === "outlined" ? r.borderColor : "currentColor",
    "--Switch-thumbBackground": r.color,
    "--Switch-thumbColor": r.backgroundColor ?? e.vars.palette.background.surface
  };
}, i2 = G("div", {
  name: "JoySwitch",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})(({
  theme: e,
  ownerState: t
}) => {
  var r, n;
  const o = n2({
    theme: e,
    ownerState: t
  });
  return u({
    "--Icon-color": "currentColor",
    "--variant-borderWidth": (n = (r = e.variants[t.variant]) == null ? void 0 : r[t.color]) == null ? void 0 : n["--variant-borderWidth"],
    "--Switch-trackRadius": e.vars.radius.xl,
    "--Switch-thumbShadow": t.variant === "soft" ? "none" : "0 0 0 1px var(--Switch-trackBackground)"
  }, t.size === "sm" && {
    "--Switch-trackWidth": "26px",
    "--Switch-trackHeight": "16px",
    "--Switch-thumbSize": "10px",
    fontSize: e.vars.fontSize.sm,
    gap: "var(--Switch-gap, 6px)"
  }, t.size === "md" && {
    "--Switch-trackWidth": "32px",
    "--Switch-trackHeight": "20px",
    "--Switch-thumbSize": "14px",
    fontSize: e.vars.fontSize.md,
    gap: "var(--Switch-gap, 8px)"
  }, t.size === "lg" && {
    "--Switch-trackWidth": "40px",
    "--Switch-trackHeight": "24px",
    "--Switch-thumbSize": "18px",
    gap: "var(--Switch-gap, 12px)"
  }, {
    "--unstable_paddingBlock": "max((var(--Switch-trackHeight) - 2 * var(--variant-borderWidth, 0px) - var(--Switch-thumbSize)) / 2, 0px)",
    "--Switch-thumbRadius": "max(var(--Switch-trackRadius) - var(--unstable_paddingBlock), min(var(--unstable_paddingBlock) / 2, var(--Switch-trackRadius) / 2))",
    "--Switch-thumbWidth": "var(--Switch-thumbSize)",
    "--Switch-thumbOffset": "max((var(--Switch-trackHeight) - var(--Switch-thumbSize)) / 2, 0px)"
  }, o(), {
    "&:hover": {
      "@media (hover: hover)": u({}, o({
        state: "Hover"
      }))
    },
    [`&.${ui.checked}`]: u({}, o(), {
      "&:hover": {
        "@media (hover: hover)": u({}, o({
          state: "Hover"
        }))
      }
    }),
    [`&.${ui.disabled}`]: u({
      pointerEvents: "none",
      color: e.vars.palette.text.tertiary
    }, o({
      state: "Disabled"
    })),
    display: "inline-flex",
    alignItems: "center",
    alignSelf: "center",
    fontFamily: e.vars.fontFamily.body,
    position: "relative",
    padding: "calc((var(--Switch-thumbSize) / 2) - (var(--Switch-trackHeight) / 2)) calc(-1 * var(--Switch-thumbOffset))",
    backgroundColor: "initial",
    // clear background in case `outlined` variant contain background.
    border: "none",
    margin: "var(--unstable_Switch-margin)"
  });
}), a2 = G("div", {
  name: "JoySwitch",
  slot: "Action",
  overridesResolver: (e, t) => t.action
})(({
  theme: e
}) => ({
  borderRadius: "var(--Switch-trackRadius)",
  position: "absolute",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  [e.focus.selector]: e.focus.default
})), s2 = G("input", {
  name: "JoySwitch",
  slot: "Input",
  overridesResolver: (e, t) => t.input
})({
  margin: 0,
  height: "100%",
  width: "100%",
  opacity: 0,
  position: "absolute",
  cursor: "pointer"
}), l2 = G("span", {
  name: "JoySwitch",
  slot: "Track",
  overridesResolver: (e, t) => t.track
})(({
  theme: e,
  ownerState: t
}) => u({
  position: "relative",
  color: "var(--Switch-trackColor)",
  height: "var(--Switch-trackHeight)",
  width: "var(--Switch-trackWidth)",
  display: "flex",
  flexShrink: 0,
  justifyContent: "space-between",
  alignItems: "center",
  boxSizing: "border-box",
  border: "var(--variant-borderWidth, 0px) solid",
  borderColor: "var(--Switch-trackBorderColor)",
  backgroundColor: "var(--Switch-trackBackground)",
  borderRadius: "var(--Switch-trackRadius)",
  fontFamily: e.vars.fontFamily.body
}, t.size === "sm" && {
  fontSize: e.vars.fontSize.xs
}, t.size === "md" && {
  fontSize: e.vars.fontSize.sm
}, t.size === "lg" && {
  fontSize: e.vars.fontSize.md
})), c2 = G("span", {
  name: "JoySwitch",
  slot: "Thumb",
  overridesResolver: (e, t) => t.thumb
})({
  "--Icon-fontSize": "calc(var(--Switch-thumbSize) * 0.75)",
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  top: "50%",
  left: "calc(50% - var(--Switch-trackWidth) / 2 + var(--Switch-thumbWidth) / 2 + var(--Switch-thumbOffset))",
  transform: "translate(-50%, -50%)",
  width: "var(--Switch-thumbWidth)",
  height: "var(--Switch-thumbSize)",
  borderRadius: "var(--Switch-thumbRadius)",
  boxShadow: "var(--Switch-thumbShadow)",
  color: "var(--Switch-thumbColor)",
  backgroundColor: "var(--Switch-thumbBackground)",
  [`&.${ui.checked}`]: {
    left: "calc(50% + var(--Switch-trackWidth) / 2 - var(--Switch-thumbWidth) / 2 - var(--Switch-thumbOffset))"
  }
}), d2 = G("span", {
  name: "JoySwitch",
  slot: "StartDecorator",
  overridesResolver: (e, t) => t.startDecorator
})({
  display: "inline-flex"
}), u2 = G("span", {
  name: "JoySwitch",
  slot: "EndDecorator",
  overridesResolver: (e, t) => t.endDecorator
})({
  display: "inline-flex"
}), sd = /* @__PURE__ */ h.forwardRef(function(t, o) {
  const r = Te({
    props: t,
    name: "JoySwitch"
  }), {
    disabled: n,
    id: i,
    color: a,
    variant: s = "solid",
    size: l = "md",
    startDecorator: d,
    endDecorator: c,
    component: f,
    slots: p = {},
    slotProps: v = {}
  } = r, b = U(r, o2), y = h.useContext(Qt), x = t.size ?? (y == null ? void 0 : y.size) ?? l, C = t.color ?? (y != null && y.error ? "danger" : (y == null ? void 0 : y.color) ?? a), S = u({
    disabled: t.disabled ?? (y == null ? void 0 : y.disabled) ?? n
  }, r), {
    getInputProps: $,
    checked: R,
    disabled: P,
    focusVisible: g,
    readOnly: k
  } = sl(S), T = u({}, r, {
    id: i,
    checked: R,
    disabled: P,
    focusVisible: g,
    readOnly: k,
    color: R ? C || "primary" : C || "neutral",
    variant: s,
    size: x
  }), j = r2(T), O = u({}, b, {
    component: f,
    slots: p,
    slotProps: v
  }), [A, D] = Z("root", {
    ref: o,
    className: j.root,
    elementType: i2,
    externalForwardedProps: O,
    ownerState: T
  }), [M, E] = Z("startDecorator", {
    additionalProps: {
      "aria-hidden": !0
      // hide the decorator from assistive technology
    },
    className: j.startDecorator,
    elementType: d2,
    externalForwardedProps: O,
    ownerState: T
  }), [w, I] = Z("endDecorator", {
    additionalProps: {
      "aria-hidden": !0
      // hide the decorator from assistive technology
    },
    className: j.endDecorator,
    elementType: u2,
    externalForwardedProps: O,
    ownerState: T
  }), [z, _] = Z("track", {
    className: j.track,
    elementType: l2,
    externalForwardedProps: O,
    ownerState: T
  }), [L, N] = Z("thumb", {
    className: j.thumb,
    elementType: c2,
    externalForwardedProps: O,
    ownerState: T
  }), [Y, ee] = Z("action", {
    className: j.action,
    elementType: a2,
    externalForwardedProps: O,
    ownerState: T
  }), [re, Q] = Z("input", {
    additionalProps: {
      id: i ?? (y == null ? void 0 : y.htmlFor),
      "aria-describedby": y == null ? void 0 : y["aria-describedby"]
    },
    className: j.input,
    elementType: s2,
    externalForwardedProps: O,
    getSlotProps: $,
    ownerState: T
  });
  return /* @__PURE__ */ m.jsxs(A, u({}, D, {
    children: [d && /* @__PURE__ */ m.jsx(M, u({}, E, {
      children: typeof d == "function" ? d(T) : d
    })), /* @__PURE__ */ m.jsxs(z, u({}, _, {
      children: [_ == null ? void 0 : _.children, /* @__PURE__ */ m.jsx(L, u({}, N))]
    })), /* @__PURE__ */ m.jsx(Y, u({}, ee, {
      children: /* @__PURE__ */ m.jsx(re, u({}, Q))
    })), c && /* @__PURE__ */ m.jsx(w, u({}, I, {
      children: typeof c == "function" ? c(T) : c
    }))]
  }));
});
var p2 = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
const ld = (e) => {
  let t;
  const o = /* @__PURE__ */ new Set(), r = (c, f) => {
    const p = typeof c == "function" ? c(t) : c;
    if (!Object.is(p, t)) {
      const v = t;
      t = f ?? (typeof p != "object" || p === null) ? p : Object.assign({}, t, p), o.forEach((b) => b(t, v));
    }
  }, n = () => t, l = { setState: r, getState: n, getInitialState: () => d, subscribe: (c) => (o.add(c), () => o.delete(c)), destroy: () => {
    (p2 ? "production" : void 0) !== "production" && console.warn(
      "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
    ), o.clear();
  } }, d = t = e(r, n, l);
  return l;
}, f2 = (e) => e ? ld(e) : ld;
var of = { exports: {} }, rf = {}, nf = { exports: {} }, af = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cr = ft;
function m2(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var h2 = typeof Object.is == "function" ? Object.is : m2, g2 = Cr.useState, v2 = Cr.useEffect, b2 = Cr.useLayoutEffect, y2 = Cr.useDebugValue;
function x2(e, t) {
  var o = t(), r = g2({ inst: { value: o, getSnapshot: t } }), n = r[0].inst, i = r[1];
  return b2(function() {
    n.value = o, n.getSnapshot = t, Na(n) && i({ inst: n });
  }, [e, o, t]), v2(function() {
    return Na(n) && i({ inst: n }), e(function() {
      Na(n) && i({ inst: n });
    });
  }, [e]), y2(o), o;
}
function Na(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var o = t();
    return !h2(e, o);
  } catch {
    return !0;
  }
}
function C2(e, t) {
  return t();
}
var S2 = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? C2 : x2;
af.useSyncExternalStore = Cr.useSyncExternalStore !== void 0 ? Cr.useSyncExternalStore : S2;
nf.exports = af;
var $2 = nf.exports;
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var la = ft, k2 = $2;
function I2(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var R2 = typeof Object.is == "function" ? Object.is : I2, P2 = k2.useSyncExternalStore, w2 = la.useRef, T2 = la.useEffect, D2 = la.useMemo, E2 = la.useDebugValue;
rf.useSyncExternalStoreWithSelector = function(e, t, o, r, n) {
  var i = w2(null);
  if (i.current === null) {
    var a = { hasValue: !1, value: null };
    i.current = a;
  } else
    a = i.current;
  i = D2(function() {
    function l(v) {
      if (!d) {
        if (d = !0, c = v, v = r(v), n !== void 0 && a.hasValue) {
          var b = a.value;
          if (n(b, v))
            return f = b;
        }
        return f = v;
      }
      if (b = f, R2(c, v))
        return b;
      var y = r(v);
      return n !== void 0 && n(b, y) ? b : (c = v, f = y);
    }
    var d = !1, c, f, p = o === void 0 ? null : o;
    return [function() {
      return l(t());
    }, p === null ? void 0 : function() {
      return l(p());
    }];
  }, [t, o, r, n]);
  var s = P2(e, i[0], i[1]);
  return T2(function() {
    a.hasValue = !0, a.value = s;
  }, [s]), E2(s), s;
};
of.exports = rf;
var z2 = of.exports;
const O2 = /* @__PURE__ */ an(z2);
var Cl = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
const { useDebugValue: M2 } = ft, { useSyncExternalStoreWithSelector: A2 } = O2;
let cd = !1;
const j2 = (e) => e;
function B2(e, t = j2, o) {
  (Cl ? "production" : void 0) !== "production" && o && !cd && (console.warn(
    "[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"
  ), cd = !0);
  const r = A2(
    e.subscribe,
    e.getState,
    e.getServerState || e.getInitialState,
    t,
    o
  );
  return M2(r), r;
}
const dd = (e) => {
  (Cl ? "production" : void 0) !== "production" && typeof e != "function" && console.warn(
    "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
  );
  const t = typeof e == "function" ? f2(e) : e, o = (r, n) => B2(t, r, n);
  return Object.assign(o, t), o;
}, yn = (e) => e ? dd(e) : dd;
var Sl = (e) => ((Cl ? "production" : void 0) !== "production" && console.warn(
  "[DEPRECATED] Default export is deprecated. Instead use `import { create } from 'zustand'`."
), yn(e));
async function _2() {
  const e = "https://module.sletat.ru/Main.svc/GetDepartCities";
  try {
    const t = await fetch(e);
    if (!t.ok)
      throw new Error(`HTTP error! status: ${t.status}`);
    const o = await t.json();
    return console.log(o.GetDepartCitiesResult.Data), o.GetDepartCitiesResult.Data;
  } catch (t) {
    console.error("Failed to fetch city data:", t);
  }
}
const sf = yn((e, t) => ({
  city: null,
  cities: [],
  setCity: (o) => e({ city: o }),
  getCities: async () => {
    if (t().cities.length > 1)
      return;
    const o = await _2();
    if (o) {
      const r = o.map((n) => ({
        ...n,
        firstLetter: /^[0-9]/.test(n.Name[0]) ? "0-9" : n.Name[0].toUpperCase()
      }));
      e({
        cities: r.sort(
          (n, i) => -i.firstLetter.localeCompare(n.firstLetter)
        )
      });
    }
  }
})), L2 = {
  Moldova: "https://flagcdn.com/md.svg",
  "United States": "https://flagcdn.com/us.svg",
  Mayotte: "https://flagcdn.com/yt.svg",
  Nauru: "https://flagcdn.com/nr.svg",
  Mozambique: "https://flagcdn.com/mz.svg",
  Brazil: "https://flagcdn.com/br.svg",
  "Cape Verde": "https://flagcdn.com/cv.svg",
  "Equatorial Guinea": "https://flagcdn.com/gq.svg",
  Albania: "https://flagcdn.com/al.svg",
  "United States Virgin Islands": "https://flagcdn.com/vi.svg",
  Niue: "https://flagcdn.com/nu.svg",
  Palau: "https://flagcdn.com/pw.svg",
  Nigeria: "https://flagcdn.com/ng.svg",
  "British Virgin Islands": "https://flagcdn.com/vg.svg",
  Gambia: "https://flagcdn.com/gm.svg",
  Somalia: "https://flagcdn.com/so.svg",
  Yemen: "https://flagcdn.com/ye.svg",
  Malaysia: "https://flagcdn.com/my.svg",
  Dominica: "https://flagcdn.com/dm.svg",
  "United Kingdom": "https://flagcdn.com/gb.svg",
  Madagascar: "https://flagcdn.com/mg.svg",
  "Western Sahara": "https://flagcdn.com/eh.svg",
  Cyprus: "https://flagcdn.com/cy.svg",
  "Antigua and Barbuda": "https://flagcdn.com/ag.svg",
  Ireland: "https://flagcdn.com/ie.svg",
  Paraguay: "https://flagcdn.com/py.svg",
  "Sri Lanka": "https://flagcdn.com/lk.svg",
  "South Africa": "https://flagcdn.com/za.svg",
  Kuwait: "https://flagcdn.com/kw.svg",
  Algeria: "https://flagcdn.com/dz.svg",
  Croatia: "https://flagcdn.com/hr.svg",
  Martinique: "https://flagcdn.com/mq.svg",
  "Sierra Leone": "https://flagcdn.com/sl.svg",
  "Northern Mariana Islands": "https://flagcdn.com/mp.svg",
  Rwanda: "https://flagcdn.com/rw.svg",
  Syria: "https://flagcdn.com/sy.svg",
  "Saint Vincent and the Grenadines": "https://flagcdn.com/vc.svg",
  Kosovo: "https://flagcdn.com/xk.svg",
  "Saint Lucia": "https://flagcdn.com/lc.svg",
  Honduras: "https://flagcdn.com/hn.svg",
  Jordan: "https://flagcdn.com/jo.svg",
  Tuvalu: "https://flagcdn.com/tv.svg",
  Nepal: "https://flagcdn.com/np.svg",
  Liberia: "https://flagcdn.com/lr.svg",
  "Heard Island and McDonald Islands": "https://flagcdn.com/hm.svg",
  Austria: "https://flagcdn.com/at.svg",
  Guernsey: "https://flagcdn.com/gg.svg",
  "Central African Republic": "https://flagcdn.com/cf.svg",
  Mauritania: "https://flagcdn.com/mr.svg",
  Djibouti: "https://flagcdn.com/dj.svg",
  Fiji: "https://flagcdn.com/fj.svg",
  Norway: "https://flagcdn.com/no.svg",
  Latvia: "https://flagcdn.com/lv.svg",
  "Falkland Islands": "https://flagcdn.com/fk.svg",
  Kazakhstan: "https://flagcdn.com/kz.svg",
  "Åland Islands": "https://flagcdn.com/ax.svg",
  Turkmenistan: "https://flagcdn.com/tm.svg",
  "Cocos (Keeling) Islands": "https://flagcdn.com/cc.svg",
  Bulgaria: "https://flagcdn.com/bg.svg",
  Tokelau: "https://flagcdn.com/tk.svg",
  "New Caledonia": "https://flagcdn.com/nc.svg",
  Barbados: "https://flagcdn.com/bb.svg",
  "São Tomé and Príncipe": "https://flagcdn.com/st.svg",
  Antarctica: "https://flagcdn.com/aq.svg",
  Brunei: "https://flagcdn.com/bn.svg",
  Bhutan: "https://flagcdn.com/bt.svg",
  Cameroon: "https://flagcdn.com/cm.svg",
  Argentina: "https://flagcdn.com/ar.svg",
  Azerbaijan: "https://flagcdn.com/az.svg",
  Mexico: "https://flagcdn.com/mx.svg",
  Morocco: "https://flagcdn.com/ma.svg",
  Guatemala: "https://flagcdn.com/gt.svg",
  Kenya: "https://flagcdn.com/ke.svg",
  Malta: "https://flagcdn.com/mt.svg",
  Czechia: "https://flagcdn.com/cz.svg",
  Gibraltar: "https://flagcdn.com/gi.svg",
  Aruba: "https://flagcdn.com/aw.svg",
  "Saint Barthélemy": "https://flagcdn.com/bl.svg",
  Monaco: "https://flagcdn.com/mc.svg",
  "United Arab Emirates": "https://flagcdn.com/ae.svg",
  "South Sudan": "https://flagcdn.com/ss.svg",
  "Puerto Rico": "https://flagcdn.com/pr.svg",
  "El Salvador": "https://flagcdn.com/sv.svg",
  France: "https://flagcdn.com/fr.svg",
  Niger: "https://flagcdn.com/ne.svg",
  "Ivory Coast": "https://flagcdn.com/ci.svg",
  "South Georgia": "https://flagcdn.com/gs.svg",
  Botswana: "https://flagcdn.com/bw.svg",
  "British Indian Ocean Territory": "https://flagcdn.com/io.svg",
  Uzbekistan: "https://flagcdn.com/uz.svg",
  Tunisia: "https://flagcdn.com/tn.svg",
  "Hong Kong": "https://flagcdn.com/hk.svg",
  "North Macedonia": "https://flagcdn.com/mk.svg",
  Suriname: "https://flagcdn.com/sr.svg",
  Belgium: "https://flagcdn.com/be.svg",
  "American Samoa": "https://flagcdn.com/as.svg",
  "Solomon Islands": "https://flagcdn.com/sb.svg",
  Ukraine: "https://flagcdn.com/ua.svg",
  Finland: "https://flagcdn.com/fi.svg",
  "Burkina Faso": "https://flagcdn.com/bf.svg",
  "Bosnia and Herzegovina": "https://flagcdn.com/ba.svg",
  Iran: "https://flagcdn.com/ir.svg",
  Cuba: "https://flagcdn.com/cu.svg",
  Eritrea: "https://flagcdn.com/er.svg",
  Slovakia: "https://flagcdn.com/sk.svg",
  Lithuania: "https://flagcdn.com/lt.svg",
  "Saint Martin": "https://flagcdn.com/mf.svg",
  "Pitcairn Islands": "https://flagcdn.com/pn.svg",
  "Guinea-Bissau": "https://flagcdn.com/gw.svg",
  Montserrat: "https://flagcdn.com/ms.svg",
  Turkey: "https://flagcdn.com/tr.svg",
  Philippines: "https://flagcdn.com/ph.svg",
  Vanuatu: "https://flagcdn.com/vu.svg",
  Bolivia: "https://flagcdn.com/bo.svg",
  "Saint Kitts and Nevis": "https://flagcdn.com/kn.svg",
  Romania: "https://flagcdn.com/ro.svg",
  Cambodia: "https://flagcdn.com/kh.svg",
  Zimbabwe: "https://flagcdn.com/zw.svg",
  Jersey: "https://flagcdn.com/je.svg",
  Kyrgyzstan: "https://flagcdn.com/kg.svg",
  "Caribbean Netherlands": "https://flagcdn.com/bq.svg",
  Guyana: "https://flagcdn.com/gy.svg",
  "United States Minor Outlying Islands": "https://flagcdn.com/um.svg",
  Armenia: "https://flagcdn.com/am.svg",
  Lebanon: "https://flagcdn.com/lb.svg",
  Montenegro: "https://flagcdn.com/me.svg",
  Greenland: "https://flagcdn.com/gl.svg",
  "Papua New Guinea": "https://flagcdn.com/pg.svg",
  Zambia: "https://flagcdn.com/zm.svg",
  "Trinidad and Tobago": "https://flagcdn.com/tt.svg",
  "French Southern and Antarctic Lands": "https://flagcdn.com/tf.svg",
  Peru: "https://flagcdn.com/pe.svg",
  Sweden: "https://flagcdn.com/se.svg",
  Sudan: "https://flagcdn.com/sd.svg",
  "Saint Pierre and Miquelon": "https://flagcdn.com/pm.svg",
  Oman: "https://flagcdn.com/om.svg",
  India: "https://flagcdn.com/in.svg",
  Taiwan: "https://flagcdn.com/tw.svg",
  Mongolia: "https://flagcdn.com/mn.svg",
  Senegal: "https://flagcdn.com/sn.svg",
  Tanzania: "https://flagcdn.com/tz.svg",
  Canada: "https://flagcdn.com/ca.svg",
  "Costa Rica": "https://flagcdn.com/cr.svg",
  China: "https://flagcdn.com/cn.svg",
  Colombia: "https://flagcdn.com/co.svg",
  Myanmar: "https://flagcdn.com/mm.svg",
  Russia: "https://flagcdn.com/ru.svg",
  "North Korea": "https://flagcdn.com/kp.svg",
  "Cayman Islands": "https://flagcdn.com/ky.svg",
  "Bouvet Island": "https://flagcdn.com/bv.svg",
  Belarus: "https://flagcdn.com/by.svg",
  Portugal: "https://flagcdn.com/pt.svg",
  Eswatini: "https://flagcdn.com/sz.svg",
  Poland: "https://flagcdn.com/pl.svg",
  Switzerland: "https://flagcdn.com/ch.svg",
  "Republic of the Congo": "https://flagcdn.com/cg.svg",
  Venezuela: "https://flagcdn.com/ve.svg",
  Panama: "https://flagcdn.com/pa.svg",
  Netherlands: "https://flagcdn.com/nl.svg",
  Samoa: "https://flagcdn.com/ws.svg",
  Denmark: "https://flagcdn.com/dk.svg",
  Luxembourg: "https://flagcdn.com/lu.svg",
  "Faroe Islands": "https://flagcdn.com/fo.svg",
  Slovenia: "https://flagcdn.com/si.svg",
  Togo: "https://flagcdn.com/tg.svg",
  Thailand: "https://flagcdn.com/th.svg",
  "Wallis and Futuna": "https://flagcdn.com/wf.svg",
  Bahamas: "https://flagcdn.com/bs.svg",
  Tonga: "https://flagcdn.com/to.svg",
  Greece: "https://flagcdn.com/gr.svg",
  "San Marino": "https://flagcdn.com/sm.svg",
  Réunion: "https://flagcdn.com/re.svg",
  "Vatican City": "https://flagcdn.com/va.svg",
  Burundi: "https://flagcdn.com/bi.svg",
  Bahrain: "https://flagcdn.com/bh.svg",
  "Marshall Islands": "https://flagcdn.com/mh.svg",
  "Turks and Caicos Islands": "https://flagcdn.com/tc.svg",
  "Isle of Man": "https://flagcdn.com/im.svg",
  Haiti: "https://flagcdn.com/ht.svg",
  Afghanistan: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg",
  Israel: "https://flagcdn.com/il.svg",
  Libya: "https://flagcdn.com/ly.svg",
  Uruguay: "https://flagcdn.com/uy.svg",
  "Norfolk Island": "https://flagcdn.com/nf.svg",
  Nicaragua: "https://flagcdn.com/ni.svg",
  "Cook Islands": "https://flagcdn.com/ck.svg",
  Laos: "https://flagcdn.com/la.svg",
  "Christmas Island": "https://flagcdn.com/cx.svg",
  "Saint Helena, Ascension and Tristan da Cunha": "https://flagcdn.com/sh.svg",
  Anguilla: "https://flagcdn.com/ai.svg",
  Micronesia: "https://flagcdn.com/fm.svg",
  Germany: "https://flagcdn.com/de.svg",
  Guam: "https://flagcdn.com/gu.svg",
  Kiribati: "https://flagcdn.com/ki.svg",
  "Sint Maarten": "https://flagcdn.com/sx.svg",
  Spain: "https://flagcdn.com/es.svg",
  Jamaica: "https://flagcdn.com/jm.svg",
  Palestine: "https://flagcdn.com/ps.svg",
  "French Guiana": "https://flagcdn.com/gf.svg",
  Andorra: "https://flagcdn.com/ad.svg",
  Chile: "https://flagcdn.com/cl.svg",
  Lesotho: "https://flagcdn.com/ls.svg",
  Australia: "https://flagcdn.com/au.svg",
  Grenada: "https://flagcdn.com/gd.svg",
  Ghana: "https://flagcdn.com/gh.svg",
  Seychelles: "https://flagcdn.com/sc.svg",
  Angola: "https://flagcdn.com/ao.svg",
  Bermuda: "https://flagcdn.com/bm.svg",
  Pakistan: "https://flagcdn.com/pk.svg",
  Mali: "https://flagcdn.com/ml.svg",
  "Saudi Arabia": "https://flagcdn.com/sa.svg",
  Curaçao: "https://flagcdn.com/cw.svg",
  "South Korea": "https://flagcdn.com/kr.svg",
  Ethiopia: "https://flagcdn.com/et.svg",
  Guadeloupe: "https://flagcdn.com/gp.svg",
  Bangladesh: "https://flagcdn.com/bd.svg",
  "New Zealand": "https://flagcdn.com/nz.svg",
  Comoros: "https://flagcdn.com/km.svg",
  Belize: "https://flagcdn.com/bz.svg",
  Uganda: "https://flagcdn.com/ug.svg",
  Singapore: "https://flagcdn.com/sg.svg",
  Liechtenstein: "https://flagcdn.com/li.svg",
  Hungary: "https://flagcdn.com/hu.svg",
  Iceland: "https://flagcdn.com/is.svg",
  Tajikistan: "https://flagcdn.com/tj.svg",
  Namibia: "https://flagcdn.com/na.svg",
  "Timor-Leste": "https://flagcdn.com/tl.svg",
  Egypt: "https://flagcdn.com/eg.svg",
  Serbia: "https://flagcdn.com/rs.svg",
  Mauritius: "https://flagcdn.com/mu.svg",
  Macau: "https://flagcdn.com/mo.svg",
  "French Polynesia": "https://flagcdn.com/pf.svg",
  Maldives: "https://flagcdn.com/mv.svg",
  Indonesia: "https://flagcdn.com/id.svg",
  "DR Congo": "https://flagcdn.com/cd.svg",
  Estonia: "https://flagcdn.com/ee.svg",
  Vietnam: "https://flagcdn.com/vn.svg",
  Italy: "https://flagcdn.com/it.svg",
  Guinea: "https://flagcdn.com/gn.svg",
  Chad: "https://flagcdn.com/td.svg",
  Ecuador: "https://flagcdn.com/ec.svg",
  Georgia: "https://flagcdn.com/ge.svg",
  Malawi: "https://flagcdn.com/mw.svg",
  Iraq: "https://flagcdn.com/iq.svg",
  "Svalbard and Jan Mayen": "https://flagcdn.com/sj.svg",
  Benin: "https://flagcdn.com/bj.svg",
  Japan: "https://flagcdn.com/jp.svg",
  "Dominican Republic": "https://flagcdn.com/do.svg",
  Qatar: "https://flagcdn.com/qa.svg",
  Gabon: "https://flagcdn.com/ga.svg"
};
async function F2(e) {
  const t = `https://module.sletat.ru/Main.svc/GetCountries?townFromId=${e}`;
  try {
    const o = await fetch(t);
    if (!o.ok)
      throw new Error(`HTTP error! status: ${o.status}`);
    const r = await o.json();
    return console.log(r.GetCountriesResult.Data), r.GetCountriesResult.Data;
  } catch (o) {
    console.error("Failed to fetch city data:", o);
  }
}
const lf = yn((e) => ({
  country: null,
  countries: [],
  setCountry: (t) => e({ country: t }),
  getCountries: async (t) => {
    if (!t)
      return;
    const o = await F2(t);
    if (o) {
      const r = o.map((n) => ({
        ...n,
        firstLetter: /^[0-9]/.test(n.Name[0]) ? "0-9" : n.Name[0].toUpperCase(),
        flag: L2[n.OriginalName]
      }));
      e({
        countries: r.sort(
          (n, i) => -i.firstLetter.localeCompare(n.firstLetter)
        )
      });
    }
  }
}));
function N2() {
  const { setCountry: e, countries: t, getCountries: o } = lf(), { city: r } = sf();
  md(() => {
    r && o(r.Id);
  }, [r, o]);
  const n = (i, a) => {
    a && e(a);
  };
  return /* @__PURE__ */ m.jsx(Un, { children: /* @__PURE__ */ m.jsx(
    Kp,
    {
      id: "country-select-demo",
      placeholder: "Выберите страну",
      slotProps: {
        input: {
          autoComplete: "new-password"
          // disable autocomplete and autofill
        }
      },
      sx: { width: 300 },
      options: t,
      autoHighlight: !0,
      variant: "plain",
      getOptionLabel: (i) => i.Name,
      onChange: n,
      getOptionKey: (i) => i.Id,
      renderOption: (i, a) => /* @__PURE__ */ hd(Gp, { ...i, key: a.Id }, a.flag && /* @__PURE__ */ m.jsx(cP, { children: /* @__PURE__ */ m.jsx(
        "img",
        {
          loading: "lazy",
          width: 20,
          height: 14,
          src: a.flag,
          alt: `${a.Name} flag`
        }
      ) }), /* @__PURE__ */ m.jsx(ef, { sx: { fontSize: "sm" }, children: /* @__PURE__ */ m.jsxs(Co, { direction: "row", children: [
        /* @__PURE__ */ m.jsxs(Ge, { level: "body-sm", sx: { flex: 1 }, children: [
          a.Name,
          " ",
          a.Id
        ] }),
        /* @__PURE__ */ m.jsx(yl, { color: "primary", size: "sm", children: a.IsProVisa ? "Шенген" : a.IsVisa ? "Visa" : "Без Visa" })
      ] }) }, a.Id))
    }
  ) });
}
function H2() {
  const { setCity: e, cities: t, getCities: o } = sf();
  md(() => {
    o();
  }, [o]);
  const r = (n, i) => {
    i && e(i);
  };
  return /* @__PURE__ */ m.jsx(
    Kp,
    {
      id: "city-select-demo",
      placeholder: "Выберите город",
      slotProps: {
        input: {
          autoComplete: "new-password"
          // disable autocomplete and autofill
        }
      },
      sx: { width: 300 },
      options: t,
      autoHighlight: !0,
      variant: "plain",
      onChange: r,
      getOptionLabel: (n) => n.Name,
      getOptionKey: (n) => n.Id,
      renderOption: (n, i) => /* @__PURE__ */ hd(Gp, { ...n, key: i.Id }, /* @__PURE__ */ m.jsxs(ef, { sx: { fontSize: "sm" }, children: [
        i.Name,
        " ",
        i.Id
      ] }, i.Id))
    }
  );
}
const V2 = Sl((e, t) => ({
  hoverIndex: null,
  startIndex: null,
  endIndex: null,
  setHoverIndex: (o) => e({ hoverIndex: o }),
  setStartIndex: (o) => e({ startIndex: o }),
  setEndIndex: (o) => e({ endIndex: o }),
  handleClickIndex: (o) => {
    const { startIndex: r, endIndex: n, setStartIndex: i, setEndIndex: a } = t();
    r === null || r !== null && n !== null ? (i(o), a(null)) : r !== null && n === null && (o < r ? (a(r), i(o)) : a(o));
  },
  handleMouseEnter: (o) => e({ hoverIndex: o })
}));
function W2() {
  const {
    hoverIndex: e,
    startIndex: t,
    endIndex: o,
    handleClickIndex: r,
    handleMouseEnter: n
  } = V2(), [i, a] = h.useState(
    null
  ), s = (f) => {
    a(f.currentTarget);
  }, l = () => {
    a(null);
  }, d = !!i, c = d ? "simple-popover" : void 0;
  return /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
    /* @__PURE__ */ m.jsxs(
      Ct,
      {
        "aria-describedby": c,
        sx: { maxWidth: 150 },
        variant: "outlined",
        onClick: s,
        children: [
          t,
          " - ",
          o,
          " ночей"
        ]
      }
    ),
    /* @__PURE__ */ m.jsxs(
      Ki,
      {
        id: c,
        open: d,
        anchorEl: i,
        onClose: l,
        slotProps: {
          paper: {
            sx: {
              boxShadow: "0 10px 35px 0 rgba(5,16,54,.102)",
              borderRadius: "20px",
              p: 1
            }
          }
        },
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "left"
        },
        children: [
          /* @__PURE__ */ m.jsx(
            Ge,
            {
              sx: {
                width: "100%",
                p: 1,
                mb: 1,
                backgroundColor: "primary.solidBg",
                borderRadius: 7,
                fontSize: "14px",
                fontWeight: 500,
                textAlign: "center",
                color: "#fff"
              },
              children: "Выберите кол-во ночей"
            }
          ),
          /* @__PURE__ */ m.jsx(
            wt,
            {
              sx: {
                display: "grid",
                gridTemplateColumns: "repeat(7, 1fr)",
                gap: 0.5
              },
              children: [...Array(28)].map((f, p) => {
                const v = t !== null && o !== null && p >= t && p <= o || t !== null && o === null && e !== null && p >= t && p <= e;
                return /* @__PURE__ */ m.jsx(
                  Ct,
                  {
                    variant: v ? "solid" : "outlined",
                    sx: {
                      width: 40,
                      height: 40
                    },
                    onClick: () => r(p),
                    onMouseEnter: () => n(p),
                    children: p + 1
                  },
                  p
                );
              })
            }
          )
        ]
      }
    )
  ] });
}
var $l = {}, Ha = {};
const U2 = /* @__PURE__ */ go(xb);
var ud;
function Io() {
  return ud || (ud = 1, function(e) {
    "use client";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "default", {
      enumerable: !0,
      get: function() {
        return t.createSvgIcon;
      }
    });
    var t = U2;
  }(Ha)), Ha;
}
var G2 = lo;
Object.defineProperty($l, "__esModule", {
  value: !0
});
var cf = $l.default = void 0, K2 = G2(Io()), J2 = m;
cf = $l.default = (0, K2.default)(/* @__PURE__ */ (0, J2.jsx)("path", {
  d: "M3 18c0 .55.45 1 1 1h5v-2H4c-.55 0-1 .45-1 1M3 6c0 .55.45 1 1 1h9V5H4c-.55 0-1 .45-1 1m10 14v-1h7c.55 0 1-.45 1-1s-.45-1-1-1h-7v-1c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1M7 10v1H4c-.55 0-1 .45-1 1s.45 1 1 1h3v1c0 .55.45 1 1 1s1-.45 1-1v-4c0-.55-.45-1-1-1s-1 .45-1 1m14 2c0-.55-.45-1-1-1h-9v2h9c.55 0 1-.45 1-1m-5-3c.55 0 1-.45 1-1V7h3c.55 0 1-.45 1-1s-.45-1-1-1h-3V4c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1"
}), "TuneRounded");
var kl = {}, q2 = lo;
Object.defineProperty(kl, "__esModule", {
  value: !0
});
var df = kl.default = void 0, Y2 = q2(Io()), X2 = m;
df = kl.default = (0, Y2.default)(/* @__PURE__ */ (0, X2.jsx)("path", {
  d: "M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1"
}), "HomeRounded");
var Il = {}, Z2 = lo;
Object.defineProperty(Il, "__esModule", {
  value: !0
});
var uf = Il.default = void 0, Q2 = Z2(Io()), ew = m;
uf = Il.default = (0, Q2.default)(/* @__PURE__ */ (0, ew.jsx)("path", {
  d: "M17 11V5c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h5c.55 0 1-.45 1-1v-3h2v3c0 .55.45 1 1 1h5c1.1 0 2-.9 2-2v-6c0-1.1-.9-2-2-2zM7 19H5v-2h2zm0-4H5v-2h2zm0-4H5V9h2zm4 4H9v-2h2zm0-4H9V9h2zm0-4H9V5h2zm4 8h-2v-2h2zm0-4h-2V9h2zm0-4h-2V5h2zm4 12h-2v-2h2zm0-4h-2v-2h2z"
}), "ApartmentRounded");
var Rl = {}, tw = lo;
Object.defineProperty(Rl, "__esModule", {
  value: !0
});
var pf = Rl.default = void 0, ow = tw(Io()), rw = m;
pf = Rl.default = (0, ow.default)(/* @__PURE__ */ (0, rw.jsx)("path", {
  d: "M20 19h-1V5c0-.55-.45-1-1-1h-4c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1v15H4c-.55 0-1 .45-1 1s.45 1 1 1h9c.55 0 1-.45 1-1V6h3v14c0 .55.45 1 1 1h2c.55 0 1-.45 1-1s-.45-1-1-1m-9-6c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1"
}), "MeetingRoomRounded");
var Pl = {}, nw = lo;
Object.defineProperty(Pl, "__esModule", {
  value: !0
});
var ff = Pl.default = void 0, iw = nw(Io()), aw = m;
ff = Pl.default = (0, iw.default)(/* @__PURE__ */ (0, aw.jsx)("path", {
  d: "M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3m12-6h-6c-1.1 0-2 .9-2 2v5H3V6c0-.55-.45-1-1-1s-1 .45-1 1v13c0 .55.45 1 1 1s1-.45 1-1v-2h18v2c0 .55.45 1 1 1s1-.45 1-1v-8c0-2.21-1.79-4-4-4"
}), "HotelRounded");
var wl = {}, sw = lo;
Object.defineProperty(wl, "__esModule", {
  value: !0
});
var mf = wl.default = void 0, lw = sw(Io()), cw = m;
mf = wl.default = (0, lw.default)(/* @__PURE__ */ (0, cw.jsx)("path", {
  d: "M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"
}), "Done");
function dw() {
  const [e, t] = h.useState(!1), [o, r] = h.useState("Guesthouse"), [n, i] = h.useState([0, 6]);
  return /* @__PURE__ */ m.jsxs(h.Fragment, { children: [
    /* @__PURE__ */ m.jsx(
      Ct,
      {
        variant: "plain",
        color: "primary",
        startDecorator: /* @__PURE__ */ m.jsx(cf, {}),
        onClick: () => t(!0),
        sx: { width: "100%" },
        children: "Фильтр"
      }
    ),
    /* @__PURE__ */ m.jsx(
      LR,
      {
        size: "md",
        variant: "plain",
        open: e,
        onClose: () => t(!1),
        slotProps: {
          content: {
            sx: {
              bgcolor: "transparent",
              p: { md: 3, sm: 0 },
              boxShadow: "none"
            }
          }
        },
        children: /* @__PURE__ */ m.jsxs(
          tf,
          {
            sx: {
              borderRadius: "md",
              p: 2,
              display: "flex",
              flexDirection: "column",
              gap: 2,
              height: "100%",
              overflow: "auto"
            },
            children: [
              /* @__PURE__ */ m.jsx(TR, { children: "Filters" }),
              /* @__PURE__ */ m.jsx(hP, {}),
              /* @__PURE__ */ m.jsx(di, { sx: { mt: "auto" } }),
              /* @__PURE__ */ m.jsxs(kR, { sx: { gap: 2 }, children: [
                /* @__PURE__ */ m.jsxs(Un, { children: [
                  /* @__PURE__ */ m.jsx(Fa, { sx: { typography: "title-md", fontWeight: "bold" }, children: "Property type" }),
                  /* @__PURE__ */ m.jsx(
                    _P,
                    {
                      value: o || "",
                      onChange: (a) => {
                        r(a.target.value);
                      },
                      children: /* @__PURE__ */ m.jsx(
                        wt,
                        {
                          sx: {
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
                            gap: 1.5
                          },
                          children: [
                            {
                              name: "House",
                              icon: /* @__PURE__ */ m.jsx(df, {})
                            },
                            {
                              name: "Apartment",
                              icon: /* @__PURE__ */ m.jsx(uf, {})
                            },
                            {
                              name: "Guesthouse",
                              icon: /* @__PURE__ */ m.jsx(pf, {})
                            },
                            {
                              name: "Hotel",
                              icon: /* @__PURE__ */ m.jsx(ff, {})
                            }
                          ].map((a) => /* @__PURE__ */ m.jsxs(
                            QI,
                            {
                              sx: {
                                boxShadow: "none",
                                "&:hover": { bgcolor: "background.level1" }
                              },
                              children: [
                                /* @__PURE__ */ m.jsxs(iR, { children: [
                                  a.icon,
                                  /* @__PURE__ */ m.jsx(Ge, { level: "title-md", children: a.name })
                                ] }),
                                /* @__PURE__ */ m.jsx(
                                  OP,
                                  {
                                    disableIcon: !0,
                                    overlay: !0,
                                    checked: o === a.name,
                                    variant: "outlined",
                                    color: "neutral",
                                    value: a.name,
                                    sx: { mt: -2 },
                                    slotProps: {
                                      action: {
                                        sx: {
                                          ...o === a.name && {
                                            borderWidth: 2,
                                            borderColor: "var(--joy-palette-primary-outlinedBorder)"
                                          },
                                          "&:hover": {
                                            bgcolor: "transparent"
                                          }
                                        }
                                      }
                                    }
                                  }
                                )
                              ]
                            },
                            a.name
                          ))
                        }
                      )
                    }
                  )
                ] }),
                /* @__PURE__ */ m.jsx(Ge, { level: "title-md", fontWeight: "bold", sx: { mt: 1 }, children: "Amenities" }),
                /* @__PURE__ */ m.jsx("div", { role: "group", "aria-labelledby": "rank", children: /* @__PURE__ */ m.jsx(
                  lr,
                  {
                    orientation: "horizontal",
                    size: "sm",
                    sx: {
                      "--List-gap": "12px",
                      "--ListItem-radius": "20px"
                    },
                    children: ["Wi-fi", "Washer", "A/C", "Kitchen"].map((a, s) => {
                      const l = n.includes(s);
                      return /* @__PURE__ */ m.jsxs(ro, { children: [
                        /* @__PURE__ */ m.jsx(
                          pk,
                          {
                            variant: l ? "solid" : "outlined",
                            color: l ? "primary" : "neutral",
                            ratio: 1,
                            sx: { width: 20, borderRadius: 20, ml: -0.5, mr: 0.75 },
                            children: /* @__PURE__ */ m.jsx("div", { children: l && /* @__PURE__ */ m.jsx(mf, { fontSize: "medium" }) })
                          }
                        ),
                        /* @__PURE__ */ m.jsx(
                          Wn,
                          {
                            size: "sm",
                            color: "neutral",
                            disableIcon: !0,
                            overlay: !0,
                            label: a,
                            variant: "outlined",
                            checked: l,
                            onChange: (d) => i((c) => {
                              const f = /* @__PURE__ */ new Set([...c, s]);
                              return d.target.checked || f.delete(s), [...f];
                            }),
                            slotProps: {
                              action: {
                                sx: {
                                  "&:hover": {
                                    bgcolor: "transparent"
                                  }
                                }
                              }
                            }
                          }
                        )
                      ] }, a);
                    })
                  }
                ) }),
                /* @__PURE__ */ m.jsx(Ge, { level: "title-md", fontWeight: "bold", sx: { mt: 2 }, children: "Booking options" }),
                /* @__PURE__ */ m.jsxs(Un, { orientation: "horizontal", children: [
                  /* @__PURE__ */ m.jsxs(wt, { sx: { flex: 1, pr: 1 }, children: [
                    /* @__PURE__ */ m.jsx(Fa, { sx: { typography: "title-sm" }, children: "Instant booking" }),
                    /* @__PURE__ */ m.jsx(nd, { sx: { typography: "body-sm" }, children: "Listings that you can book without waiting for host approval." })
                  ] }),
                  /* @__PURE__ */ m.jsx(sd, {})
                ] }),
                /* @__PURE__ */ m.jsxs(Un, { orientation: "horizontal", children: [
                  /* @__PURE__ */ m.jsxs(wt, { sx: { flex: 1, mt: 1, mr: 1 }, children: [
                    /* @__PURE__ */ m.jsx(Fa, { sx: { typography: "title-sm" }, children: "Self check-in" }),
                    /* @__PURE__ */ m.jsx(nd, { sx: { typography: "body-sm" }, children: "Easy access to the property when you arrive." })
                  ] }),
                  /* @__PURE__ */ m.jsx(sd, {})
                ] })
              ] }),
              /* @__PURE__ */ m.jsx(di, { sx: { mt: "auto" } }),
              /* @__PURE__ */ m.jsxs(
                Co,
                {
                  direction: "row",
                  justifyContent: "space-between",
                  useFlexGap: !0,
                  spacing: 1,
                  children: [
                    /* @__PURE__ */ m.jsx(
                      Ct,
                      {
                        variant: "outlined",
                        color: "neutral",
                        onClick: () => {
                          r(""), i([]);
                        },
                        children: "Clear"
                      }
                    ),
                    /* @__PURE__ */ m.jsx(Ct, { onClick: () => t(!1), children: "Show 165 properties" })
                  ]
                }
              )
            ]
          }
        )
      }
    )
  ] });
}
var hf = { exports: {} };
(function(e, t) {
  (function(o, r) {
    e.exports = r();
  })(nn, function() {
    var o = 1e3, r = 6e4, n = 36e5, i = "millisecond", a = "second", s = "minute", l = "hour", d = "day", c = "week", f = "month", p = "quarter", v = "year", b = "date", y = "Invalid Date", x = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, C = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, S = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(E) {
      var w = ["th", "st", "nd", "rd"], I = E % 100;
      return "[" + E + (w[(I - 20) % 10] || w[I] || w[0]) + "]";
    } }, $ = function(E, w, I) {
      var z = String(E);
      return !z || z.length >= w ? E : "" + Array(w + 1 - z.length).join(I) + E;
    }, R = { s: $, z: function(E) {
      var w = -E.utcOffset(), I = Math.abs(w), z = Math.floor(I / 60), _ = I % 60;
      return (w <= 0 ? "+" : "-") + $(z, 2, "0") + ":" + $(_, 2, "0");
    }, m: function E(w, I) {
      if (w.date() < I.date())
        return -E(I, w);
      var z = 12 * (I.year() - w.year()) + (I.month() - w.month()), _ = w.clone().add(z, f), L = I - _ < 0, N = w.clone().add(z + (L ? -1 : 1), f);
      return +(-(z + (I - _) / (L ? _ - N : N - _)) || 0);
    }, a: function(E) {
      return E < 0 ? Math.ceil(E) || 0 : Math.floor(E);
    }, p: function(E) {
      return { M: f, y: v, w: c, d, D: b, h: l, m: s, s: a, ms: i, Q: p }[E] || String(E || "").toLowerCase().replace(/s$/, "");
    }, u: function(E) {
      return E === void 0;
    } }, P = "en", g = {};
    g[P] = S;
    var k = "$isDayjsObject", T = function(E) {
      return E instanceof D || !(!E || !E[k]);
    }, j = function E(w, I, z) {
      var _;
      if (!w)
        return P;
      if (typeof w == "string") {
        var L = w.toLowerCase();
        g[L] && (_ = L), I && (g[L] = I, _ = L);
        var N = w.split("-");
        if (!_ && N.length > 1)
          return E(N[0]);
      } else {
        var Y = w.name;
        g[Y] = w, _ = Y;
      }
      return !z && _ && (P = _), _ || !z && P;
    }, O = function(E, w) {
      if (T(E))
        return E.clone();
      var I = typeof w == "object" ? w : {};
      return I.date = E, I.args = arguments, new D(I);
    }, A = R;
    A.l = j, A.i = T, A.w = function(E, w) {
      return O(E, { locale: w.$L, utc: w.$u, x: w.$x, $offset: w.$offset });
    };
    var D = function() {
      function E(I) {
        this.$L = j(I.locale, null, !0), this.parse(I), this.$x = this.$x || I.x || {}, this[k] = !0;
      }
      var w = E.prototype;
      return w.parse = function(I) {
        this.$d = function(z) {
          var _ = z.date, L = z.utc;
          if (_ === null)
            return /* @__PURE__ */ new Date(NaN);
          if (A.u(_))
            return /* @__PURE__ */ new Date();
          if (_ instanceof Date)
            return new Date(_);
          if (typeof _ == "string" && !/Z$/i.test(_)) {
            var N = _.match(x);
            if (N) {
              var Y = N[2] - 1 || 0, ee = (N[7] || "0").substring(0, 3);
              return L ? new Date(Date.UTC(N[1], Y, N[3] || 1, N[4] || 0, N[5] || 0, N[6] || 0, ee)) : new Date(N[1], Y, N[3] || 1, N[4] || 0, N[5] || 0, N[6] || 0, ee);
            }
          }
          return new Date(_);
        }(I), this.init();
      }, w.init = function() {
        var I = this.$d;
        this.$y = I.getFullYear(), this.$M = I.getMonth(), this.$D = I.getDate(), this.$W = I.getDay(), this.$H = I.getHours(), this.$m = I.getMinutes(), this.$s = I.getSeconds(), this.$ms = I.getMilliseconds();
      }, w.$utils = function() {
        return A;
      }, w.isValid = function() {
        return this.$d.toString() !== y;
      }, w.isSame = function(I, z) {
        var _ = O(I);
        return this.startOf(z) <= _ && _ <= this.endOf(z);
      }, w.isAfter = function(I, z) {
        return O(I) < this.startOf(z);
      }, w.isBefore = function(I, z) {
        return this.endOf(z) < O(I);
      }, w.$g = function(I, z, _) {
        return A.u(I) ? this[z] : this.set(_, I);
      }, w.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, w.valueOf = function() {
        return this.$d.getTime();
      }, w.startOf = function(I, z) {
        var _ = this, L = !!A.u(z) || z, N = A.p(I), Y = function(V, K) {
          var se = A.w(_.$u ? Date.UTC(_.$y, K, V) : new Date(_.$y, K, V), _);
          return L ? se : se.endOf(d);
        }, ee = function(V, K) {
          return A.w(_.toDate()[V].apply(_.toDate("s"), (L ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(K)), _);
        }, re = this.$W, Q = this.$M, te = this.$D, he = "set" + (this.$u ? "UTC" : "");
        switch (N) {
          case v:
            return L ? Y(1, 0) : Y(31, 11);
          case f:
            return L ? Y(1, Q) : Y(0, Q + 1);
          case c:
            var oe = this.$locale().weekStart || 0, B = (re < oe ? re + 7 : re) - oe;
            return Y(L ? te - B : te + (6 - B), Q);
          case d:
          case b:
            return ee(he + "Hours", 0);
          case l:
            return ee(he + "Minutes", 1);
          case s:
            return ee(he + "Seconds", 2);
          case a:
            return ee(he + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, w.endOf = function(I) {
        return this.startOf(I, !1);
      }, w.$set = function(I, z) {
        var _, L = A.p(I), N = "set" + (this.$u ? "UTC" : ""), Y = (_ = {}, _[d] = N + "Date", _[b] = N + "Date", _[f] = N + "Month", _[v] = N + "FullYear", _[l] = N + "Hours", _[s] = N + "Minutes", _[a] = N + "Seconds", _[i] = N + "Milliseconds", _)[L], ee = L === d ? this.$D + (z - this.$W) : z;
        if (L === f || L === v) {
          var re = this.clone().set(b, 1);
          re.$d[Y](ee), re.init(), this.$d = re.set(b, Math.min(this.$D, re.daysInMonth())).$d;
        } else
          Y && this.$d[Y](ee);
        return this.init(), this;
      }, w.set = function(I, z) {
        return this.clone().$set(I, z);
      }, w.get = function(I) {
        return this[A.p(I)]();
      }, w.add = function(I, z) {
        var _, L = this;
        I = Number(I);
        var N = A.p(z), Y = function(Q) {
          var te = O(L);
          return A.w(te.date(te.date() + Math.round(Q * I)), L);
        };
        if (N === f)
          return this.set(f, this.$M + I);
        if (N === v)
          return this.set(v, this.$y + I);
        if (N === d)
          return Y(1);
        if (N === c)
          return Y(7);
        var ee = (_ = {}, _[s] = r, _[l] = n, _[a] = o, _)[N] || 1, re = this.$d.getTime() + I * ee;
        return A.w(re, this);
      }, w.subtract = function(I, z) {
        return this.add(-1 * I, z);
      }, w.format = function(I) {
        var z = this, _ = this.$locale();
        if (!this.isValid())
          return _.invalidDate || y;
        var L = I || "YYYY-MM-DDTHH:mm:ssZ", N = A.z(this), Y = this.$H, ee = this.$m, re = this.$M, Q = _.weekdays, te = _.months, he = _.meridiem, oe = function(K, se, ue, le) {
          return K && (K[se] || K(z, L)) || ue[se].slice(0, le);
        }, B = function(K) {
          return A.s(Y % 12 || 12, K, "0");
        }, V = he || function(K, se, ue) {
          var le = K < 12 ? "AM" : "PM";
          return ue ? le.toLowerCase() : le;
        };
        return L.replace(C, function(K, se) {
          return se || function(ue) {
            switch (ue) {
              case "YY":
                return String(z.$y).slice(-2);
              case "YYYY":
                return A.s(z.$y, 4, "0");
              case "M":
                return re + 1;
              case "MM":
                return A.s(re + 1, 2, "0");
              case "MMM":
                return oe(_.monthsShort, re, te, 3);
              case "MMMM":
                return oe(te, re);
              case "D":
                return z.$D;
              case "DD":
                return A.s(z.$D, 2, "0");
              case "d":
                return String(z.$W);
              case "dd":
                return oe(_.weekdaysMin, z.$W, Q, 2);
              case "ddd":
                return oe(_.weekdaysShort, z.$W, Q, 3);
              case "dddd":
                return Q[z.$W];
              case "H":
                return String(Y);
              case "HH":
                return A.s(Y, 2, "0");
              case "h":
                return B(1);
              case "hh":
                return B(2);
              case "a":
                return V(Y, ee, !0);
              case "A":
                return V(Y, ee, !1);
              case "m":
                return String(ee);
              case "mm":
                return A.s(ee, 2, "0");
              case "s":
                return String(z.$s);
              case "ss":
                return A.s(z.$s, 2, "0");
              case "SSS":
                return A.s(z.$ms, 3, "0");
              case "Z":
                return N;
            }
            return null;
          }(K) || N.replace(":", "");
        });
      }, w.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, w.diff = function(I, z, _) {
        var L, N = this, Y = A.p(z), ee = O(I), re = (ee.utcOffset() - this.utcOffset()) * r, Q = this - ee, te = function() {
          return A.m(N, ee);
        };
        switch (Y) {
          case v:
            L = te() / 12;
            break;
          case f:
            L = te();
            break;
          case p:
            L = te() / 3;
            break;
          case c:
            L = (Q - re) / 6048e5;
            break;
          case d:
            L = (Q - re) / 864e5;
            break;
          case l:
            L = Q / n;
            break;
          case s:
            L = Q / r;
            break;
          case a:
            L = Q / o;
            break;
          default:
            L = Q;
        }
        return _ ? L : A.a(L);
      }, w.daysInMonth = function() {
        return this.endOf(f).$D;
      }, w.$locale = function() {
        return g[this.$L];
      }, w.locale = function(I, z) {
        if (!I)
          return this.$L;
        var _ = this.clone(), L = j(I, z, !0);
        return L && (_.$L = L), _;
      }, w.clone = function() {
        return A.w(this.$d, this);
      }, w.toDate = function() {
        return new Date(this.valueOf());
      }, w.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, w.toISOString = function() {
        return this.$d.toISOString();
      }, w.toString = function() {
        return this.$d.toUTCString();
      }, E;
    }(), M = D.prototype;
    return O.prototype = M, [["$ms", i], ["$s", a], ["$m", s], ["$H", l], ["$W", d], ["$M", f], ["$y", v], ["$D", b]].forEach(function(E) {
      M[E[1]] = function(w) {
        return this.$g(w, E[0], E[1]);
      };
    }), O.extend = function(E, w) {
      return E.$i || (E(w, D, O), E.$i = !0), O;
    }, O.locale = j, O.isDayjs = T, O.unix = function(E) {
      return O(1e3 * E);
    }, O.en = g[P], O.Ls = g, O.p = {}, O;
  });
})(hf);
var gf = hf.exports;
const et = /* @__PURE__ */ an(gf), uw = pn(/* @__PURE__ */ m.jsx("path", {
  d: "m14 7-5 5 5 5z"
}), "ArrowLeft"), pw = pn(/* @__PURE__ */ m.jsx("path", {
  d: "m10 17 5-5-5-5z"
}), "ArrowRight");
var vf = { exports: {} };
(function(e, t) {
  (function(o, r) {
    e.exports = r();
  })(nn, function() {
    return function(o, r) {
      r.prototype.isSameOrAfter = function(n, i) {
        return this.isSame(n, i) || this.isAfter(n, i);
      };
    };
  });
})(vf);
var fw = vf.exports;
const mw = /* @__PURE__ */ an(fw);
var bf = { exports: {} };
(function(e, t) {
  (function(o, r) {
    e.exports = r();
  })(nn, function() {
    return function(o, r) {
      r.prototype.isSameOrBefore = function(n, i) {
        return this.isSame(n, i) || this.isBefore(n, i);
      };
    };
  });
})(bf);
var hw = bf.exports;
const gw = /* @__PURE__ */ an(hw);
var vw = { exports: {} };
(function(e, t) {
  (function(o, r) {
    e.exports = r(gf);
  })(nn, function(o) {
    function r(b) {
      return b && typeof b == "object" && "default" in b ? b : { default: b };
    }
    var n = r(o), i = "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"), a = "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"), s = "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"), l = "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_"), d = /D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;
    function c(b, y, x) {
      var C, S;
      return x === "m" ? y ? "минута" : "минуту" : b + " " + (C = +b, S = { mm: y ? "минута_минуты_минут" : "минуту_минуты_минут", hh: "час_часа_часов", dd: "день_дня_дней", MM: "месяц_месяца_месяцев", yy: "год_года_лет" }[x].split("_"), C % 10 == 1 && C % 100 != 11 ? S[0] : C % 10 >= 2 && C % 10 <= 4 && (C % 100 < 10 || C % 100 >= 20) ? S[1] : S[2]);
    }
    var f = function(b, y) {
      return d.test(y) ? i[b.month()] : a[b.month()];
    };
    f.s = a, f.f = i;
    var p = function(b, y) {
      return d.test(y) ? s[b.month()] : l[b.month()];
    };
    p.s = l, p.f = s;
    var v = { name: "ru", weekdays: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"), weekdaysShort: "вск_пнд_втр_срд_чтв_птн_сбт".split("_"), weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"), months: f, monthsShort: p, weekStart: 1, yearStart: 4, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY г.", LLL: "D MMMM YYYY г., H:mm", LLLL: "dddd, D MMMM YYYY г., H:mm" }, relativeTime: { future: "через %s", past: "%s назад", s: "несколько секунд", m: c, mm: c, h: "час", hh: c, d: "день", dd: c, M: "месяц", MM: c, y: "год", yy: c }, ordinal: function(b) {
      return b;
    }, meridiem: function(b) {
      return b < 4 ? "ночи" : b < 12 ? "утра" : b < 17 ? "дня" : "вечера";
    } };
    return n.default.locale(v, null, !0), v;
  });
})(vw);
var yf = { exports: {} };
(function(e, t) {
  (function(o, r) {
    e.exports = r();
  })(nn, function() {
    return function(o, r, n) {
      r.prototype.isBetween = function(i, a, s, l) {
        var d = n(i), c = n(a), f = (l = l || "()")[0] === "(", p = l[1] === ")";
        return (f ? this.isAfter(d, s) : !this.isBefore(d, s)) && (p ? this.isBefore(c, s) : !this.isAfter(c, s)) || (f ? this.isBefore(d, s) : !this.isAfter(d, s)) && (p ? this.isAfter(c, s) : !this.isBefore(c, s));
      };
    };
  });
})(yf);
var bw = yf.exports;
const yw = /* @__PURE__ */ an(bw), xw = Sl(
  (e, t) => ({
    startDate: null,
    endDate: null,
    setStartDate: (o) => {
      e({ startDate: o });
    },
    setEndDate: (o) => {
      console.log(o), e({ endDate: o });
    },
    resetDates: () => e({ startDate: null, endDate: null }),
    handleDateClick: (o) => e((r) => (!r.startDate || r.startDate && r.endDate ? e({ startDate: et(o), endDate: null }) : r.startDate && !r.endDate && (et(o).isAfter(r.startDate) ? e({ endDate: et(o) }) : e({ startDate: et(o), endDate: null })), console.log(t().startDate, t().endDate), {}))
  })
);
et.extend(mw);
et.extend(gw);
et.locale("ru");
et.extend(yw);
const Cw = (e, t) => et(`${e}-${t + 1}-01`).daysInMonth(), Sw = (e, t) => {
  const o = Cw(e, t), r = et(`${e}-${t + 1}-01`).day(), n = [];
  let i = 1;
  for (let a = 0; a < 6; a++) {
    const s = [];
    for (let l = 0; l < 7; l++)
      a === 0 && l < r || i > o ? s.push("") : s.push(i++);
    if (n.push(s), i > o)
      break;
  }
  return n;
}, pd = () => {
  const [e, t] = xa(et().year()), [o, r] = xa(et().month()), [n, i] = xa(null), { startDate: a, endDate: s, handleDateClick: l } = xw(), d = (v) => {
    a && !s && i(v);
  }, c = () => {
    r((v) => v === 0 ? 11 : v - 1), t(
      (v) => v === 0 ? e - 1 : e
    );
  }, f = () => {
    r((v) => v === 11 ? 0 : v + 1), t(
      (v) => v === 11 ? e + 1 : e
    );
  }, p = Sw(e, o);
  return /* @__PURE__ */ m.jsx(m.Fragment, { children: /* @__PURE__ */ m.jsxs(wt, { children: [
    /* @__PURE__ */ m.jsxs(Co, { direction: "row", sx: { justifyContent: "space-between" }, children: [
      /* @__PURE__ */ m.jsx(cr, { onClick: c, children: /* @__PURE__ */ m.jsx(uw, {}) }),
      /* @__PURE__ */ m.jsx(Ct, { variant: "plain", children: /* @__PURE__ */ m.jsxs(Co, { direction: "row", spacing: 1, children: [
        /* @__PURE__ */ m.jsx(Ge, { level: "body-sm", children: et().month(o).format("MMMM").toUpperCase() }),
        /* @__PURE__ */ m.jsx(Ge, { level: "body-sm", children: et().year(e).format("YYYY") })
      ] }) }),
      /* @__PURE__ */ m.jsx(cr, { onClick: f, children: /* @__PURE__ */ m.jsx(pw, {}) })
    ] }),
    /* @__PURE__ */ m.jsxs("table", { children: [
      /* @__PURE__ */ m.jsx("thead", { children: /* @__PURE__ */ m.jsxs("tr", { children: [
        /* @__PURE__ */ m.jsx("th", { children: /* @__PURE__ */ m.jsx(Ge, { level: "body-sm", fontWeight: "400", color: "danger", children: "Вс" }) }),
        /* @__PURE__ */ m.jsx("th", { children: /* @__PURE__ */ m.jsx(Ge, { level: "body-sm", fontWeight: "400", color: "primary", children: "Пн" }) }),
        /* @__PURE__ */ m.jsx("th", { children: /* @__PURE__ */ m.jsx(Ge, { level: "body-sm", fontWeight: "400", color: "primary", children: "Вт" }) }),
        /* @__PURE__ */ m.jsx("th", { children: /* @__PURE__ */ m.jsx(Ge, { level: "body-sm", fontWeight: "400", color: "primary", children: "Ср" }) }),
        /* @__PURE__ */ m.jsx("th", { children: /* @__PURE__ */ m.jsx(Ge, { level: "body-sm", fontWeight: "400", color: "primary", children: "Чт" }) }),
        /* @__PURE__ */ m.jsx("th", { children: /* @__PURE__ */ m.jsx(Ge, { level: "body-sm", fontWeight: "400", color: "primary", children: "Пт" }) }),
        /* @__PURE__ */ m.jsx("th", { children: /* @__PURE__ */ m.jsx(Ge, { level: "body-sm", fontWeight: "400", color: "danger", children: "Сб" }) })
      ] }) }),
      /* @__PURE__ */ m.jsx("tbody", { children: p.map((v, b) => /* @__PURE__ */ m.jsx("tr", { children: v.map((y, x) => {
        const C = et(
          `${e}-${o + 1}-${y}`
        ).format("YYYY-MM-DD"), S = y && a && s && et(C).isSameOrAfter(a) && et(C).isSameOrBefore(s), $ = a && !s && n && et(C).isBetween(a, n, null, "[]"), R = et(C).isSameOrBefore(
          et().add(-1, "day")
        );
        return /* @__PURE__ */ m.jsx("td", { children: /* @__PURE__ */ m.jsx(
          Ct,
          {
            variant: S ? "solid" : "outlined",
            sx: {
              backgroundColor: $ && y ? "primary.plainActiveBg" : "",
              outline: C == et().format("YYYY-MM-DD") ? "2px solid red" : "",
              px: 1,
              height: 40,
              width: 40
            },
            onClick: () => y && l(C),
            disabled: !y || R,
            onMouseEnter: () => d(C),
            children: /* @__PURE__ */ m.jsx(
              Co,
              {
                sx: {
                  justifyContent: "center",
                  alignItems: "center"
                },
                children: y && /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
                  /* @__PURE__ */ m.jsx(
                    Ge,
                    {
                      level: "body-sm",
                      sx: {
                        lineHeight: 1,
                        color: S ? "#fff" : "",
                        textDecoration: R ? "line-through" : ""
                      },
                      children: y
                    }
                  ),
                  /* @__PURE__ */ m.jsx(
                    Ge,
                    {
                      level: "body-xs",
                      sx: {
                        fontSize: 9,
                        color: S ? "#fff" : ""
                      },
                      children: S ? "Yes" : "No"
                    }
                  )
                ] })
              }
            )
          }
        ) }, x);
      }) }, b)) })
    ] })
  ] }) });
};
function $w() {
  const [e, t] = ft.useState(
    null
  ), o = (a) => {
    t(a.currentTarget);
  }, r = () => {
    t(null);
  }, n = !!e, i = n ? "simple-popover" : void 0;
  return /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
    /* @__PURE__ */ m.jsx(
      Ct,
      {
        "aria-describedby": i,
        variant: "outlined",
        onClick: o,
        children: "16 мая - 22 мая"
      }
    ),
    /* @__PURE__ */ m.jsx(
      Ki,
      {
        id: i,
        open: n,
        anchorEl: e,
        onClose: r,
        slotProps: {
          paper: {
            sx: {
              boxShadow: "0 10px 35px 0 rgba(5,16,54,.102)",
              borderRadius: "20px",
              p: 1
            }
          }
        },
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "left"
        },
        children: /* @__PURE__ */ m.jsx(wt, { children: /* @__PURE__ */ m.jsxs(Co, { sx: { flexDirection: { xs: "column", sm: "row" } }, children: [
          /* @__PURE__ */ m.jsx(pd, {}),
          /* @__PURE__ */ m.jsx(pd, {})
        ] }) })
      }
    )
  ] });
}
const xf = Sl((e) => ({
  adultCount: 2,
  children: [],
  selectedChildId: null,
  setAdultCount: (t) => e((o) => ({ adultCount: Math.max(0, o.adultCount + t) })),
  addChild: (t) => e((o) => {
    const r = { id: Date.now(), age: t };
    return {
      children: [...o.children, r],
      selectedChildId: r.id
    };
  }),
  removeChild: (t) => e((o) => ({
    children: o.children.filter((r) => r.id !== t),
    selectedChildId: o.selectedChildId === t ? null : o.selectedChildId
  })),
  selectChild: (t) => e((o) => ({
    selectedChildId: o.selectedChildId === t ? null : t
  })),
  setChildAge: (t, o) => e((r) => ({
    children: r.children.map(
      (n) => n.id === t ? { ...n, age: o } : n
    ),
    selectedChildId: null
  }))
}));
function kw() {
  const {
    adultCount: e,
    children: t,
    selectedChildId: o,
    setAdultCount: r,
    addChild: n,
    removeChild: i,
    selectChild: a,
    setChildAge: s
  } = xf(), l = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return /* @__PURE__ */ m.jsxs(wt, { children: [
    /* @__PURE__ */ m.jsx(
      Ge,
      {
        sx: {
          width: "100%",
          p: 1,
          mb: 1,
          backgroundColor: "primary.solidBg",
          borderRadius: 7,
          fontSize: "14px",
          fontWeight: 500,
          textAlign: "center",
          color: "#fff"
        },
        children: "Выберите кол-во человек"
      }
    ),
    /* @__PURE__ */ m.jsxs(
      jr,
      {
        direction: "row",
        sx: { justifyContent: "space-between", alignItems: "center" },
        children: [
          /* @__PURE__ */ m.jsx(
            cr,
            {
              variant: "outlined",
              color: "primary",
              onClick: () => r(-1),
              children: "-"
            }
          ),
          /* @__PURE__ */ m.jsxs(Ge, { sx: { mx: 2 }, children: [
            e,
            " взрослых"
          ] }),
          /* @__PURE__ */ m.jsx(
            cr,
            {
              variant: "outlined",
              color: "primary",
              onClick: () => r(1),
              children: "+"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ m.jsx(di, { sx: { my: 2 } }),
    /* @__PURE__ */ m.jsx(lr, { children: t.map((d) => /* @__PURE__ */ m.jsxs(ro, { children: [
      /* @__PURE__ */ m.jsxs(Ep, { onClick: () => a(d.id), children: [
        "Ребенок ",
        d.age,
        " лет"
      ] }),
      /* @__PURE__ */ m.jsx(
        cr,
        {
          "aria-label": "Delete",
          onClick: () => i(d.id),
          color: "danger",
          children: "✖"
        }
      )
    ] }, d.id)) }),
    /* @__PURE__ */ m.jsx(
      Ct,
      {
        variant: "outlined",
        onClick: () => n(8),
        sx: { width: "100%", mb: 2 },
        children: "Добавить ребенка"
      }
    ),
    o && /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
      /* @__PURE__ */ m.jsx(
        Ge,
        {
          sx: {
            width: "100%",
            p: 1,
            mb: 1,
            backgroundColor: "primary.solidBg",
            borderRadius: 7,
            fontSize: "14px",
            fontWeight: 500,
            textAlign: "center",
            color: "#fff"
          },
          children: "Выберите возраст"
        }
      ),
      /* @__PURE__ */ m.jsx(
        wt,
        {
          sx: {
            display: "grid",
            justifyContent: "center",
            gridTemplateColumns: "repeat(auto-fill, minmax(50px, 1fr))",
            gap: 1
          },
          children: l.map((d) => {
            var c;
            return /* @__PURE__ */ m.jsxs(
              Ct,
              {
                variant: "outlined",
                onClick: () => s(o, d),
                sx: {
                  color: d === (((c = t.find((f) => f.id === o)) == null ? void 0 : c.age) || 0) ? "primary" : "neutral",
                  width: 50,
                  height: 40,
                  p: 2,
                  fontSize: "0.75rem"
                },
                children: [
                  d,
                  " ",
                  d === 1 ? "год" : d > 1 && d < 5 ? "года" : "лет"
                ]
              },
              d
            );
          })
        }
      )
    ] })
  ] });
}
function Iw() {
  const [e, t] = ft.useState(
    null
  ), {
    adultCount: o,
    children: r
  } = xf(), n = (l) => {
    t(l.currentTarget);
  }, i = () => {
    t(null);
  }, a = !!e, s = a ? "simple-popover" : void 0;
  return /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
    /* @__PURE__ */ m.jsxs(
      Ct,
      {
        "aria-describedby": s,
        sx: { maxWidth: 150 },
        variant: "outlined",
        onClick: n,
        children: [
          o,
          " взр. ",
          r.length,
          " детей"
        ]
      }
    ),
    /* @__PURE__ */ m.jsx(
      Ki,
      {
        id: s,
        open: a,
        anchorEl: e,
        onClose: i,
        slotProps: {
          paper: {
            sx: {
              boxShadow: "0 10px 35px 0 rgba(5,16,54,.102)",
              borderRadius: "20px",
              p: 1
            }
          }
        },
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "left"
        },
        children: /* @__PURE__ */ m.jsx(kw, {})
      }
    )
  ] });
}
async function Rw() {
  const e = "https://module.sletat.ru/Main.svc/GetMeals";
  try {
    const t = await fetch(e);
    if (!t.ok)
      throw new Error(`HTTP error! status: ${t.status}`);
    const o = await t.json();
    return console.log(o.GetMealsResult.Data), o.GetMealsResult.Data;
  } catch (t) {
    console.error("Failed to fetch city data:", t);
  }
}
function Pw() {
  const [e, t] = ft.useState([]);
  return ft.useEffect(() => {
    (async () => {
      const r = await Rw();
      if (r) {
        const n = r.map((i) => {
          const a = i.Name[0].toUpperCase();
          return {
            firstLetter: /[0-9]/.test(a) ? "0-9" : a,
            ...i
          };
        });
        t(
          n.sort((i, a) => -a.firstLetter.localeCompare(i.firstLetter))
        );
      }
    })();
  }, []), /* @__PURE__ */ m.jsx(
    XP,
    {
      variant: "outlined",
      multiple: !0,
      placeholder: /* @__PURE__ */ m.jsx(
        Bt,
        {
          color: "primary",
          sx: {
            fontFamily: "var(--joy-fontFamily-body)",
            fontWeight: "var(--joy-fontWeight-lg)",
            fontSize: "var(--joy-fontSize-sm)",
            lineHeight: "var(--joy-lineHeight-md"
          },
          children: "Тип обеда"
        }
      ),
      renderValue: (o) => /* @__PURE__ */ m.jsx(wt, { sx: { display: "flex", gap: "0.25rem" }, children: o.map((r, n) => /* @__PURE__ */ m.jsx(yl, { variant: "soft", color: "primary", children: r.label }, n)) }),
      sx: {
        borderColor: "var(--variant-outlinedBorder, var(--joy-palette-primary-outlinedBorder, var(--joy-palette-primary-300, #97C3F0)))"
      },
      slotProps: {
        listbox: {
          sx: {
            width: "100%"
          }
        }
      },
      children: e.map((o) => /* @__PURE__ */ m.jsx(SP, { value: o.Id, children: o.Name }, o.Id))
    }
  );
}
async function ww(e) {
  const t = `https://module.sletat.ru/Main.svc/GetCities?countryId=${e}`;
  try {
    const o = await fetch(t);
    if (!o.ok)
      throw new Error(`HTTP error! status: ${o.status}`);
    const r = await o.json();
    return console.log(r.GetCitiesResult.Data), r.GetCitiesResult.Data;
  } catch (o) {
    console.error("Failed to fetch city data:", o);
  }
}
const Tw = yn((e, t) => ({
  countryCity: [],
  countryCities: [],
  _prevState: {},
  setCountryCity: (o) => {
    console.log(o), e({ countryCity: o });
  },
  getCountryCities: async (o) => {
    if (t()._prevState.countryId === o)
      return;
    e({
      _prevState: {
        countryId: o
      }
    });
    const n = await ww(o);
    if (n) {
      const i = n.map((a) => {
        const s = a.Name[0].toUpperCase();
        return {
          firstLetter: /[0-9]/.test(s) ? "0-9" : s,
          ...a
        };
      });
      e({
        countryCities: i.sort(
          (a, s) => -s.firstLetter.localeCompare(a.firstLetter)
        )
      });
    }
  }
}));
async function Dw({ stars: e, countryId: t, towns: o }) {
  const r = `https://module.sletat.ru/Main.svc/GetHotels?countryId=${t}&towns=${o.join(",")}&stars=${e.join(",")}&filter=&all=-1`;
  try {
    const n = await fetch(r);
    if (!n.ok)
      throw new Error(`HTTP error! status: ${n.status}`);
    const i = await n.json();
    return console.log(i.GetHotelsResult.Data), i.GetHotelsResult.Data;
  } catch (n) {
    console.error("Failed to fetch city data:", n);
  }
}
const Ew = yn((e, t) => ({
  hotel: [],
  hotels: [],
  _prevState: {},
  setHotel: (o) => {
    console.log(o), e({ hotel: o });
  },
  getHotels: async (o, r, n) => {
    console.log({ countryId: o, townsIds: r, starsIds: n });
    const i = t()._prevState;
    if (i.countryId === o && JSON.stringify(i.towns) === JSON.stringify(r) && JSON.stringify(i.stars) === JSON.stringify(n))
      return;
    e({
      _prevState: {
        countryId: o,
        towns: r,
        stars: n
      }
    });
    const a = await Dw({
      countryId: o,
      towns: r,
      stars: n
    });
    if (a) {
      const s = a.map((l) => {
        const d = l.Name[0].toUpperCase();
        return {
          firstLetter: /[0-9]/.test(d) ? "0-9" : d,
          ...l
        };
      });
      e({
        hotels: s.sort(
          (l, d) => -d.firstLetter.localeCompare(l.firstLetter)
        )
      });
    }
  }
}));
function zw() {
  const { country: e } = lf(), { getCountryCities: t, countryCities: o, setCountryCity: r, countryCity: n } = Tw(), { getHotels: i, setHotel: a, hotels: s, hotel: l } = Ew();
  return h.useEffect(() => {
    e && t(e.Id);
  }, [e, t]), h.useEffect(() => {
    n && e && i(
      e.Id,
      n.map((d) => d.Id),
      []
    );
  }, [n, e, i]), /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
    /* @__PURE__ */ m.jsx(
      Ge,
      {
        sx: {
          width: "100%",
          p: 1,
          mb: 1,
          backgroundColor: "primary.solidBg",
          borderRadius: 7,
          fontSize: "14px",
          fontWeight: 500,
          textAlign: "center",
          color: "#fff"
        },
        children: "Выберите курорт/отель"
      }
    ),
    /* @__PURE__ */ m.jsxs(Co, { direction: "row", children: [
      /* @__PURE__ */ m.jsx(
        wt,
        {
          sx: {
            width: 300,
            pl: "24px",
            maxHeight: 500,
            overflowY: "auto",
            overflowX: "hidden",
            scrollbarWidth: "thin",
            backgroundColor: "background.level1",
            borderRadius: 8
          },
          children: /* @__PURE__ */ m.jsx(
            lr,
            {
              size: "sm",
              sx: (d) => ({
                // Gatsby colors
                "--joy-palette-primary-plainColor": "#8a4baf",
                "--joy-palette-neutral-plainHoverBg": "transparent",
                "--joy-palette-neutral-plainActiveBg": "transparent",
                "--joy-palette-primary-plainHoverBg": "transparent",
                "--joy-palette-primary-plainActiveBg": "transparent",
                [d.getColorSchemeSelector("dark")]: {
                  "--joy-palette-text-secondary": "#635e69",
                  "--joy-palette-primary-plainColor": "#d48cff"
                },
                "--List-insetStart": "8px",
                "--ListItem-paddingY": "0px",
                "--ListItem-paddingRight": "16px",
                "--ListItem-paddingLeft": "21px",
                "--ListItem-startActionWidth": "0px",
                "--ListItem-startActionTranslateX": "-50%",
                [`& .${_o.root}`]: {
                  borderLeftColor: "divider"
                },
                [`& .${_o.root}.${_o.selected}`]: {
                  borderLeftColor: "currentColor"
                },
                '& [class*="startAction"]': {
                  color: "var(--joy-palette-text-tertiary)"
                },
                "& li": {
                  marginTop: 0,
                  marginBottom: 0
                }
              }),
              children: o.filter((d) => d.ParentId == null).map((d) => /* @__PURE__ */ m.jsxs(
                ro,
                {
                  nested: !0,
                  sx: { my: 1 },
                  startAction: /* @__PURE__ */ m.jsx(
                    Wn,
                    {
                      size: "sm",
                      color: "primary",
                      overlay: !0,
                      checked: n.includes(d),
                      onChange: (c) => c.target.checked ? r([...n, d]) : r(n.filter((f) => f != d))
                    }
                  ),
                  children: [
                    /* @__PURE__ */ m.jsxs(ro, { children: [
                      /* @__PURE__ */ m.jsx(Ge, { level: "inherit", sx: {}, children: d.Name }),
                      /* @__PURE__ */ m.jsx(Ge, { component: "span", level: "body-xs", children: d.Id })
                    ] }, d.Id),
                    /* @__PURE__ */ m.jsx(
                      lr,
                      {
                        sx: { "--ListItem-paddingY": "0px", marginLeft: "1px" },
                        children: o.filter((c) => c.ParentId == d.Id).map((c) => /* @__PURE__ */ m.jsx(
                          ro,
                          {
                            startAction: /* @__PURE__ */ m.jsx(
                              Wn,
                              {
                                size: "sm",
                                color: "primary",
                                overlay: !0,
                                checked: n.includes(d),
                                onChange: (f) => f.target.checked ? r([...n, d]) : r(
                                  n.filter((p) => p != d)
                                )
                              }
                            ),
                            children: /* @__PURE__ */ m.jsx(Ep, { children: c.Name })
                          },
                          c.Id
                        ))
                      }
                    )
                  ]
                },
                d.Id
              ))
            }
          )
        }
      ),
      /* @__PURE__ */ m.jsxs(wt, { children: [
        /* @__PURE__ */ m.jsx(wt, { sx: { p: 0.75, pt: 0 }, children: /* @__PURE__ */ m.jsx(Co, { direction: "row", children: /* @__PURE__ */ m.jsx(
          Qk,
          {
            placeholder: "Type in here…",
            variant: "soft",
            size: "sm",
            sx: { borderRadius: 0 }
          }
        ) }) }),
        /* @__PURE__ */ m.jsx(
          tf,
          {
            variant: "plain",
            sx: {
              borderRadius: "sm",
              maxHeight: 430,
              overflowY: "auto",
              overflowX: "hidden",
              scrollbarWidth: "thin"
            },
            children: /* @__PURE__ */ m.jsx("div", { role: "group", "aria-labelledby": "filter-status", children: /* @__PURE__ */ m.jsxs(lr, { children: [
              s && /* @__PURE__ */ m.jsx(
                wt,
                {
                  sx: {
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  },
                  children: /* @__PURE__ */ m.jsx(bl, { variant: "soft", color: "primary" })
                }
              ),
              s.map((d) => /* @__PURE__ */ m.jsx(ro, { variant: "plain", sx: { borderRadius: 8 }, children: /* @__PURE__ */ m.jsx(
                Wn,
                {
                  size: "sm",
                  label: d.Name,
                  color: "primary",
                  overlay: !0,
                  checked: l.includes(d),
                  onChange: (c) => c.target.checked ? a([...l, d]) : a(l.filter((f) => f != d))
                }
              ) }, d.Id))
            ] }) })
          }
        )
      ] })
    ] })
  ] });
}
function Ow() {
  const [e, t] = h.useState(
    null
  ), o = (a) => {
    t(a.currentTarget);
  }, r = () => {
    t(null);
  }, n = !!e, i = n ? "simple-popover" : void 0;
  return /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
    /* @__PURE__ */ m.jsx(
      Ct,
      {
        "aria-describedby": i,
        sx: {},
        variant: "outlined",
        onClick: o,
        children: "Выберите курорт"
      }
    ),
    /* @__PURE__ */ m.jsx(
      Ki,
      {
        id: i,
        open: n,
        anchorEl: e,
        onClose: r,
        slotProps: {
          paper: {
            sx: {
              boxShadow: "0 10px 35px 0 rgba(5,16,54,.102)",
              borderRadius: "20px",
              p: 2
            }
          }
        },
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "center"
        },
        transformOrigin: {
          vertical: "top",
          horizontal: "center"
        },
        children: /* @__PURE__ */ m.jsx(zw, {})
      }
    )
  ] });
}
const Mw = {
  Data: {
    aaData: [
      [
        "1792097464",
        4,
        "https://hotels.sletat.ru/?id=120282",
        120282,
        "",
        1334,
        "ANTALYA, SIDE TWINGS RESIDENCE HOME (3 ноч.)",
        "Twings Residence Home",
        "3*",
        "Studio Apartment",
        "RO",
        "DBL",
        "22.09.2019",
        "25.09.2019",
        3,
        "30233 RUB",
        2,
        0,
        "TEZ TOUR",
        "Сиде",
        [
          "http://www.tez-tour.com/ru/spb/search.html"
        ],
        "0",
        "1",
        "1",
        "1",
        "1",
        "1",
        "Вс.",
        "25.09",
        "",
        119,
        "Турция",
        832,
        "Москва",
        "//static.sletat.ru/images/to/4.png",
        "0",
        "",
        "",
        "",
        13103,
        !1,
        117,
        30233,
        "RUB",
        5753,
        402,
        0,
        "https://sletat.ru/book/TEZ TOUR/NHwxNzkyMDk3NDY0fDgzMnw1OTIwMDY3MDJ8",
        "SIDE TWINGS RESIDENCE HOME",
        "3 *",
        "Сиде",
        "RO",
        "2ADL",
        "Studio Apartment",
        "",
        "7",
        "",
        "2",
        "-1",
        0,
        "SIDE TWINGS RESIDENCE HOME",
        "3 *",
        "Сиде",
        "RO",
        "2ADL",
        "Studio Apartment",
        402,
        0,
        "+j0faDzJV6UBHpT16oUO9A==",
        "65536",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "Y4I6oFV4RRG6pnjmHab8Pw==",
        0,
        null,
        -1,
        !1,
        "",
        "",
        30233,
        0,
        0,
        null,
        null,
        [
          17
        ],
        36.7794571,
        31.398035,
        "",
        [
          7
        ],
        0.00105993031
      ]
    ],
    cacheIsEmpty: !1,
    countryCurrencyId: "3",
    hotelDetailedTypes: null,
    hotelFacilitiesData: {
      facilities: [
        {
          id: 2,
          name: "Чистка обуви"
        },
        {
          id: 3,
          name: "Экскурсии"
        },
        {
          id: 6,
          name: "Частная"
        },
        {
          id: 8,
          name: "Глажка одежды"
        },
        {
          id: 9,
          name: "Пункт обмена валюты"
        }
      ],
      groups: [
        {
          id: 2,
          name: "Общие услуги"
        },
        {
          id: 3,
          name: "Парковка"
        },
        {
          id: 6,
          name: "Пляжная линия"
        },
        {
          id: 8,
          name: "Удобства в номерах"
        },
        {
          id: 9,
          name: "Специальные номера"
        }
      ],
      hotelFacilities: [
        {
          facilities: [
            {
              facilityId: 16,
              groupId: 2,
              hit: null
            },
            {
              facilityId: 24,
              groupId: 8,
              hit: null
            },
            {
              facilityId: 26,
              groupId: 15,
              hit: null
            },
            {
              facilityId: 30,
              groupId: 12,
              hit: null
            }
          ]
        }
      ]
    },
    hotelsCount: 8,
    iTotalDisplayRecords: 105,
    iTotalRecords: 105,
    isInTheBasket: 0,
    loadState: [
      {
        Id: 51,
        Name: "Ambotis Holidays",
        ErrorMessage: null,
        ExecutionTimeMs: 2491,
        IsCached: !1,
        IsError: !1,
        IsPersistentCacheUsed: !1,
        IsProcessed: !0,
        IsSkipped: !1,
        IsTimeout: !1,
        MaxFullPrice: 0,
        MaxPrice: 53086,
        MinFullPrice: 0,
        MinPrice: 46492,
        OnlineErrorMessage: null,
        RowsCount: 74
      },
      {
        Id: 171,
        Name: "Amigo S",
        ErrorMessage: null,
        ExecutionTimeMs: 4708,
        IsCached: !1,
        IsError: !1,
        IsPersistentCacheUsed: !1,
        IsProcessed: !0,
        IsSkipped: !1,
        IsTimeout: !1,
        MaxFullPrice: 0,
        MaxPrice: 50726,
        MinFullPrice: 0,
        MinPrice: 44120,
        OnlineErrorMessage: null,
        RowsCount: 50
      }
    ],
    oilTaxes: [
      [
        "81",
        "19.04.2019",
        "30.04.2020",
        35,
        "EUR",
        null,
        null,
        "Аланья",
        null,
        34,
        null,
        832,
        null,
        null
      ],
      [
        "81",
        "19.04.2019",
        "30.04.2020",
        35,
        "EUR",
        null,
        null,
        "Анталья",
        null,
        72,
        null,
        832,
        null,
        null
      ],
      [
        "81",
        "19.04.2019",
        "30.04.2020",
        35,
        "EUR",
        null,
        null,
        "Белек",
        null,
        149,
        null,
        832,
        null,
        null
      ]
    ]
  }
}, Aw = {
  GetToursResult: Mw
}, jw = () => {
  const e = Yw();
  return /* @__PURE__ */ m.jsxs(
    Lu,
    {
      sx: {
        ...e.card,
        maxWidth: { xs: "100%", sm: 345 },
        borderRadius: "16px",
        boxShadow: "0 10px 35px 0 rgba(5,16,54,.102)",
        mx: { xs: 1, sm: "auto" }
        // margin x-axis: auto for small and larger screens, 1 unit for extra-small screens
      },
      children: [
        /* @__PURE__ */ m.jsx(
          Nu,
          {
            component: "img",
            alt: "Asdem Park Hotel",
            height: "140",
            image: "https://resize.onlinetours.ru/JTUak4RUh12Bozv2VmjPRb5CzsGZvjDxoN8pr8c20bI/rs:fill:752:327:0/g:ce/aHR0cHM6Ly9zdGF0/aWMxLm9sdC5zdS9z/eXN0ZW0vdXBsb2Fk/cy9ob3RlbF9waG90/by9pbWFnZS8yNy8x/OC82OS80MS8wNTA1/MjAyMjA4MzA1MDAx/MC5qcGVnP3RpbWVz/dGFtcD0xNjU0ODY4/Mzcw.jpg"
          }
        ),
        /* @__PURE__ */ m.jsxs(Fu, { children: [
          /* @__PURE__ */ m.jsxs(en, { sx: { display: "flex", alignItems: "center", mb: 1 }, children: [
            /* @__PURE__ */ m.jsx(lC, { value: 4, readOnly: !0, precision: 0.5, size: "small" }),
            /* @__PURE__ */ m.jsx(Bt, { variant: "body2", color: "textSecondary", sx: { ml: 1 }, children: "7.8" })
          ] }),
          /* @__PURE__ */ m.jsx(Bt, { gutterBottom: !0, variant: "h5", component: "div", children: "Asdem Park Hotel" }),
          /* @__PURE__ */ m.jsx(Bt, { variant: "body2", color: "textSecondary", children: "Турция, Кемер, Кемер (центр города)" }),
          /* @__PURE__ */ m.jsxs(en, { sx: { display: "flex", flexWrap: "wrap", mt: 1, mb: 1 }, children: [
            /* @__PURE__ */ m.jsx(Bt, { variant: "caption", sx: { mr: 1, border: "1px solid", borderRadius: "4px", padding: "2px 4px" }, children: "1 линия" }),
            /* @__PURE__ */ m.jsx(Bt, { variant: "caption", sx: { mr: 1, border: "1px solid", borderRadius: "4px", padding: "2px 4px" }, children: "галечный" }),
            /* @__PURE__ */ m.jsx(Bt, { variant: "caption", sx: { border: "1px solid", borderRadius: "4px", padding: "2px 4px" }, children: "оборудованный" })
          ] }),
          /* @__PURE__ */ m.jsxs(Bt, { variant: "body2", color: "textSecondary", children: [
            "Туда ",
            /* @__PURE__ */ m.jsx("strong", { children: "28.05 вт" }),
            " - Обратно ",
            /* @__PURE__ */ m.jsx("strong", { children: "02.06 вс" }),
            " • Ночей ",
            /* @__PURE__ */ m.jsx("strong", { children: "5" })
          ] }),
          /* @__PURE__ */ m.jsx(Bt, { variant: "h6", color: "primary", sx: { mt: 2 }, children: "От 105 222 ₽ за 2 -х" }),
          /* @__PURE__ */ m.jsx(Y0, { variant: "contained", color: "primary", fullWidth: !0, sx: { mt: 2, borderRadius: "10px" }, children: "Book Now" })
        ] })
      ]
    }
  );
}, Bw = () => /* @__PURE__ */ m.jsx(Hu, { sx: { py: 4 }, children: /* @__PURE__ */ m.jsx(or, { container: !0, spacing: 4, children: Array.from(Array(6)).map((e, t) => /* @__PURE__ */ m.jsx(or, { item: !0, xs: 12, sm: 6, md: 4, children: /* @__PURE__ */ m.jsx(jw, {}) }, t)) }) });
var Tl = {}, _w = lo;
Object.defineProperty(Tl, "__esModule", {
  value: !0
});
var Cf = Tl.default = void 0, Lw = _w(Io()), Fw = m;
Cf = Tl.default = (0, Lw.default)(/* @__PURE__ */ (0, Fw.jsx)("path", {
  d: "M11.67 3.87 9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"
}), "ArrowBackIos");
var Dl = {}, Nw = lo;
Object.defineProperty(Dl, "__esModule", {
  value: !0
});
var Sf = Dl.default = void 0, Hw = Nw(Io()), Vw = m;
Sf = Dl.default = (0, Hw.default)(/* @__PURE__ */ (0, Vw.jsx)("path", {
  d: "M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"
}), "ArrowForwardIos");
const Ww = [
  {
    country: "Россия",
    image: "https://resize.onlinetours.ru/JTUak4RUh12Bozv2VmjPRb5CzsGZvjDxoN8pr8c20bI/rs:fill:752:327:0/g:ce/aHR0cHM6Ly9zdGF0/aWMxLm9sdC5zdS9z/eXN0ZW0vdXBsb2Fk/cy9ob3RlbF9waG90/by9pbWFnZS8yNy8x/OC82OS80MS8wNTA1/MjAyMjA4MzA1MDAx/MC5qcGVnP3RpbWVz/dGFtcD0xNjU0ODY4/Mzcw.jpg",
    destinations: [
      { name: "Большой Сочи", price: "от 19 779 ₽ / чел" },
      { name: "Адлер", price: "от 20 452 ₽ / чел" },
      { name: "Красная Поляна", price: "от 23 436 ₽ / чел" }
    ]
  },
  {
    country: "Турция",
    image: "https://resize.onlinetours.ru/JTUak4RUh12Bozv2VmjPRb5CzsGZvjDxoN8pr8c20bI/rs:fill:752:327:0/g:ce/aHR0cHM6Ly9zdGF0/aWMxLm9sdC5zdS9z/eXN0ZW0vdXBsb2Fk/cy9ob3RlbF9waG90/by9pbWFnZS8yNy8x/OC82OS80MS8wNTA1/MjAyMjA4MzA1MDAx/MC5qcGVnP3RpbWVz/dGFtcD0xNjU0ODY4/Mzcw.jpg",
    destinations: [
      { name: "Аланья", price: "от 37 062 ₽ / чел" },
      { name: "Кемер", price: "от 38 744 ₽ / чел" },
      { name: "Сиде", price: "от 40 540 ₽ / чел" }
    ]
  },
  {
    country: "Египет",
    image: "https://resize.onlinetours.ru/JTUak4RUh12Bozv2VmjPRb5CzsGZvjDxoN8pr8c20bI/rs:fill:752:327:0/g:ce/aHR0cHM6Ly9zdGF0/aWMxLm9sdC5zdS9z/eXN0ZW0vdXBsb2Fk/cy9ob3RlbF9waG90/by9pbWFnZS8yNy8x/OC82OS80MS8wNTA1/MjAyMjA4MzA1MDAx/MC5qcGVnP3RpbWVz/dGFtcD0xNjU0ODY4/Mzcw.jpg",
    destinations: [
      { name: "Шарм-эль-Шейх", price: "от 43 735 ₽ / чел" },
      { name: "Хургада", price: "от 46 357 ₽ / чел" },
      { name: "Набк Бей", price: "от 43 735 ₽ / чел" }
    ]
  }
], Uw = () => /* @__PURE__ */ m.jsxs(or, { container: !0, spacing: 2, alignItems: "center", justifyContent: "center", children: [
  /* @__PURE__ */ m.jsx(or, { item: !0, children: /* @__PURE__ */ m.jsx(fc, { children: /* @__PURE__ */ m.jsx(Cf, {}) }) }),
  Ww.map((e, t) => /* @__PURE__ */ m.jsx(or, { item: !0, xs: 12, sm: 6, md: 3, children: /* @__PURE__ */ m.jsxs(Lu, { sx: { borderRadius: "16px", boxShadow: "0 10px 35px 0 rgba(5,16,54,.102)", overflow: "hidden" }, children: [
    /* @__PURE__ */ m.jsx(
      Nu,
      {
        component: "img",
        alt: e.country,
        height: "140",
        image: e.image
      }
    ),
    /* @__PURE__ */ m.jsxs(Fu, { children: [
      /* @__PURE__ */ m.jsx(Bt, { variant: "h6", component: "div", gutterBottom: !0, children: e.country }),
      e.destinations.map((o, r) => /* @__PURE__ */ m.jsxs(en, { sx: { display: "flex", justifyContent: "space-between", mb: 1 }, children: [
        /* @__PURE__ */ m.jsx(Bt, { variant: "body2", color: "primary", children: o.name }),
        /* @__PURE__ */ m.jsx(Bt, { variant: "body2", color: "textSecondary", children: o.price })
      ] }, r))
    ] })
  ] }) }, t)),
  /* @__PURE__ */ m.jsx(or, { item: !0, children: /* @__PURE__ */ m.jsx(fc, { children: /* @__PURE__ */ m.jsx(Sf, {}) }) })
] });
function Gw() {
  const e = Aw.GetToursResult.Data.aaData[0];
  return console.log(e), /* @__PURE__ */ m.jsx(m.Fragment, { children: /* @__PURE__ */ m.jsx(
    Hu,
    {
      maxWidth: "lg",
      sx: { display: "flex", justifyContent: "center" },
      children: /* @__PURE__ */ m.jsxs(jr, { direction: "column", children: [
        /* @__PURE__ */ m.jsxs(
          jr,
          {
            spacing: { xs: 1, sm: 2 },
            direction: { xs: "column", sm: "row" },
            divider: /* @__PURE__ */ m.jsx(rs, { orientation: "vertical", flexItem: !0 }),
            sx: {
              padding: 2,
              borderRadius: "20px 20px 0 20px",
              boxShadow: "0 10px 35px 0 rgba(5,16,54,.102)"
            },
            children: [
              /* @__PURE__ */ m.jsx(H2, {}),
              /* @__PURE__ */ m.jsxs(jr, { divider: /* @__PURE__ */ m.jsx(rs, { orientation: "horizontal" }), children: [
                /* @__PURE__ */ m.jsx(N2, {}),
                /* @__PURE__ */ m.jsx(Ow, {})
              ] }),
              /* @__PURE__ */ m.jsx($w, {}),
              /* @__PURE__ */ m.jsx(Ct, { sx: { minWidth: 100 }, variant: "outlined", color: "primary", children: "Поиск" })
            ]
          }
        ),
        /* @__PURE__ */ m.jsxs(en, { sx: { width: "100%", display: "flex", justifyContent: "start" }, children: [
          /* @__PURE__ */ m.jsx(dw, {}),
          /* @__PURE__ */ m.jsxs(
            jr,
            {
              spacing: 2,
              direction: { xs: "column", sm: "row" },
              sx: {
                display: {
                  xs: "none",
                  sm: "flex"
                },
                width: "100%",
                padding: 2,
                borderRadius: "0 0 20px 20px",
                boxShadow: "0 10px 35px 0 rgba(5,16,54,.102)"
              },
              children: [
                /* @__PURE__ */ m.jsx(W2, {}),
                /* @__PURE__ */ m.jsx(Iw, {}),
                /* @__PURE__ */ m.jsx(Pw, {})
              ]
            }
          )
        ] }),
        /* @__PURE__ */ m.jsxs(en, { sx: { mt: 10 }, children: [
          /* @__PURE__ */ m.jsx(Bw, {}),
          /* @__PURE__ */ m.jsx(Uw, {})
        ] })
      ] })
    }
  ) });
}
const Kw = Su(), Jw = hp({
  fontFamily: {
    body: "Roboto"
  }
}), $f = Pf({}), qw = ({ children: e, styles: t }) => /* @__PURE__ */ m.jsx($f.Provider, { value: t, children: e }), Yw = () => fd($f), nT = ({ curstomStyles: e }) => /* @__PURE__ */ m.jsx(
  mb,
  {
    defaultColorScheme: "light",
    theme: { [Wo]: Kw },
    children: /* @__PURE__ */ m.jsxs(hS, { defaultColorScheme: "light", theme: Jw, children: [
      /* @__PURE__ */ m.jsx(mx, {}),
      /* @__PURE__ */ m.jsx(qw, { styles: e, children: /* @__PURE__ */ m.jsx(Gw, {}) }),
      ","
    ] })
  }
);
export {
  nT as App2,
  qw as StylesProvider,
  Yw as useStyles
};
