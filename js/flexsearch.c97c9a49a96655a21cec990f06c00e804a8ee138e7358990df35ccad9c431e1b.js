(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
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

  // node_modules/flexsearch/dist/flexsearch.bundle.js
  var require_flexsearch_bundle = __commonJS({
    "node_modules/flexsearch/dist/flexsearch.bundle.js"(exports, module) {
      (function _f(self) {
        "use strict";
        try {
          if (module) self = module;
        } catch (e) {
        }
        self._factory = _f;
        var t;
        function u(a2) {
          return "undefined" !== typeof a2 ? a2 : true;
        }
        function aa(a2) {
          const b2 = Array(a2);
          for (let c2 = 0; c2 < a2; c2++) b2[c2] = v();
          return b2;
        }
        function v() {
          return /* @__PURE__ */ Object.create(null);
        }
        function ba(a2, b2) {
          return b2.length - a2.length;
        }
        function x(a2) {
          return "string" === typeof a2;
        }
        function C(a2) {
          return "object" === typeof a2;
        }
        function D(a2) {
          return "function" === typeof a2;
        }
        ;
        function ca(a2, b2) {
          var c2 = da;
          if (a2 && (b2 && (a2 = E(a2, b2)), this.H && (a2 = E(a2, this.H)), this.J && 1 < a2.length && (a2 = E(a2, this.J)), c2 || "" === c2)) {
            a2 = a2.split(c2);
            if (this.filter) {
              b2 = this.filter;
              c2 = a2.length;
              const d2 = [];
              for (let e = 0, f = 0; e < c2; e++) {
                const g = a2[e];
                g && !b2[g] && (d2[f++] = g);
              }
              a2 = d2;
            }
            return a2;
          }
          return a2;
        }
        const da = /[\p{Z}\p{S}\p{P}\p{C}]+/u, ea = /[\u0300-\u036f]/g;
        function fa(a2, b2) {
          const c2 = Object.keys(a2), d2 = c2.length, e = [];
          let f = "", g = 0;
          for (let h = 0, k, m; h < d2; h++) k = c2[h], (m = a2[k]) ? (e[g++] = F(b2 ? "(?!\\b)" + k + "(\\b|_)" : k), e[g++] = m) : f += (f ? "|" : "") + k;
          f && (e[g++] = F(b2 ? "(?!\\b)(" + f + ")(\\b|_)" : "(" + f + ")"), e[g] = "");
          return e;
        }
        function E(a2, b2) {
          for (let c2 = 0, d2 = b2.length; c2 < d2 && (a2 = a2.replace(b2[c2], b2[c2 + 1]), a2); c2 += 2) ;
          return a2;
        }
        function F(a2) {
          return new RegExp(a2, "g");
        }
        function ha(a2) {
          let b2 = "", c2 = "";
          for (let d2 = 0, e = a2.length, f; d2 < e; d2++) (f = a2[d2]) !== c2 && (b2 += c2 = f);
          return b2;
        }
        ;
        var ja = { encode: ia, F: false, G: "" };
        function ia(a2) {
          return ca.call(this, ("" + a2).toLowerCase(), false);
        }
        ;
        const ka = {}, G = {};
        function la(a2) {
          I(a2, "add");
          I(a2, "append");
          I(a2, "search");
          I(a2, "update");
          I(a2, "remove");
        }
        function I(a2, b2) {
          a2[b2 + "Async"] = function() {
            const c2 = this, d2 = arguments;
            var e = d2[d2.length - 1];
            let f;
            D(e) && (f = e, delete d2[d2.length - 1]);
            e = new Promise(function(g) {
              setTimeout(function() {
                c2.async = true;
                const h = c2[b2].apply(c2, d2);
                c2.async = false;
                g(h);
              });
            });
            return f ? (e.then(f), this) : e;
          };
        }
        ;
        function ma(a2, b2, c2, d2) {
          const e = a2.length;
          let f = [], g, h, k = 0;
          d2 && (d2 = []);
          for (let m = e - 1; 0 <= m; m--) {
            const n = a2[m], w = n.length, q = v();
            let r = !g;
            for (let l = 0; l < w; l++) {
              const p = n[l], z = p.length;
              if (z) for (let B = 0, A, y; B < z; B++) if (y = p[B], g) {
                if (g[y]) {
                  if (!m) {
                    if (c2) c2--;
                    else if (f[k++] = y, k === b2) return f;
                  }
                  if (m || d2) q[y] = 1;
                  r = true;
                }
                if (d2 && (A = (h[y] || 0) + 1, h[y] = A, A < e)) {
                  const H = d2[A - 2] || (d2[A - 2] = []);
                  H[H.length] = y;
                }
              } else q[y] = 1;
            }
            if (d2) g || (h = q);
            else if (!r) return [];
            g = q;
          }
          if (d2) for (let m = d2.length - 1, n, w; 0 <= m; m--) {
            n = d2[m];
            w = n.length;
            for (let q = 0, r; q < w; q++) if (r = n[q], !g[r]) {
              if (c2) c2--;
              else if (f[k++] = r, k === b2) return f;
              g[r] = 1;
            }
          }
          return f;
        }
        function na(a2, b2) {
          const c2 = v(), d2 = v(), e = [];
          for (let f = 0; f < a2.length; f++) c2[a2[f]] = 1;
          for (let f = 0, g; f < b2.length; f++) {
            g = b2[f];
            for (let h = 0, k; h < g.length; h++) k = g[h], c2[k] && !d2[k] && (d2[k] = 1, e[e.length] = k);
          }
          return e;
        }
        ;
        function J(a2) {
          this.l = true !== a2 && a2;
          this.cache = v();
          this.h = [];
        }
        function oa(a2, b2, c2) {
          C(a2) && (a2 = a2.query);
          let d2 = this.cache.get(a2);
          d2 || (d2 = this.search(a2, b2, c2), this.cache.set(a2, d2));
          return d2;
        }
        J.prototype.set = function(a2, b2) {
          if (!this.cache[a2]) {
            var c2 = this.h.length;
            c2 === this.l ? delete this.cache[this.h[c2 - 1]] : c2++;
            for (--c2; 0 < c2; c2--) this.h[c2] = this.h[c2 - 1];
            this.h[0] = a2;
          }
          this.cache[a2] = b2;
        };
        J.prototype.get = function(a2) {
          const b2 = this.cache[a2];
          if (this.l && b2 && (a2 = this.h.indexOf(a2))) {
            const c2 = this.h[a2 - 1];
            this.h[a2 - 1] = this.h[a2];
            this.h[a2] = c2;
          }
          return b2;
        };
        const qa = { memory: { charset: "latin:extra", D: 3, B: 4, m: false }, performance: { D: 3, B: 3, s: false, context: { depth: 2, D: 1 } }, match: { charset: "latin:extra", G: "reverse" }, score: { charset: "latin:advanced", D: 20, B: 3, context: { depth: 3, D: 9 } }, "default": {} };
        function ra(a2, b2, c2, d2, e, f, g) {
          setTimeout(function() {
            const h = a2(c2 ? c2 + "." + d2 : d2, JSON.stringify(g));
            h && h.then ? h.then(function() {
              b2.export(a2, b2, c2, e, f + 1);
            }) : b2.export(a2, b2, c2, e, f + 1);
          });
        }
        ;
        function K(a2, b2) {
          if (!(this instanceof K)) return new K(a2);
          var c2;
          if (a2) {
            x(a2) ? a2 = qa[a2] : (c2 = a2.preset) && (a2 = Object.assign({}, c2[c2], a2));
            c2 = a2.charset;
            var d2 = a2.lang;
            x(c2) && (-1 === c2.indexOf(":") && (c2 += ":default"), c2 = G[c2]);
            x(d2) && (d2 = ka[d2]);
          } else a2 = {};
          let e, f, g = a2.context || {};
          this.encode = a2.encode || c2 && c2.encode || ia;
          this.register = b2 || v();
          this.D = e = a2.resolution || 9;
          this.G = b2 = c2 && c2.G || a2.tokenize || "strict";
          this.depth = "strict" === b2 && g.depth;
          this.l = u(g.bidirectional);
          this.s = f = u(a2.optimize);
          this.m = u(a2.fastupdate);
          this.B = a2.minlength || 1;
          this.C = a2.boost;
          this.map = f ? aa(e) : v();
          this.A = e = g.resolution || 1;
          this.h = f ? aa(e) : v();
          this.F = c2 && c2.F || a2.rtl;
          this.H = (b2 = a2.matcher || d2 && d2.H) && fa(b2, false);
          this.J = (b2 = a2.stemmer || d2 && d2.J) && fa(b2, true);
          if (c2 = b2 = a2.filter || d2 && d2.filter) {
            c2 = b2;
            d2 = v();
            for (let h = 0, k = c2.length; h < k; h++) d2[c2[h]] = 1;
            c2 = d2;
          }
          this.filter = c2;
          this.cache = (b2 = a2.cache) && new J(b2);
        }
        t = K.prototype;
        t.append = function(a2, b2) {
          return this.add(a2, b2, true);
        };
        t.add = function(a2, b2, c2, d2) {
          if (b2 && (a2 || 0 === a2)) {
            if (!d2 && !c2 && this.register[a2]) return this.update(a2, b2);
            b2 = this.encode(b2);
            if (d2 = b2.length) {
              const m = v(), n = v(), w = this.depth, q = this.D;
              for (let r = 0; r < d2; r++) {
                let l = b2[this.F ? d2 - 1 - r : r];
                var e = l.length;
                if (l && e >= this.B && (w || !n[l])) {
                  var f = L(q, d2, r), g = "";
                  switch (this.G) {
                    case "full":
                      if (2 < e) {
                        for (f = 0; f < e; f++) for (var h = e; h > f; h--) if (h - f >= this.B) {
                          var k = L(q, d2, r, e, f);
                          g = l.substring(f, h);
                          M(this, n, g, k, a2, c2);
                        }
                        break;
                      }
                    case "reverse":
                      if (1 < e) {
                        for (h = e - 1; 0 < h; h--) g = l[h] + g, g.length >= this.B && M(
                          this,
                          n,
                          g,
                          L(q, d2, r, e, h),
                          a2,
                          c2
                        );
                        g = "";
                      }
                    case "forward":
                      if (1 < e) {
                        for (h = 0; h < e; h++) g += l[h], g.length >= this.B && M(this, n, g, f, a2, c2);
                        break;
                      }
                    default:
                      if (this.C && (f = Math.min(f / this.C(b2, l, r) | 0, q - 1)), M(this, n, l, f, a2, c2), w && 1 < d2 && r < d2 - 1) {
                        for (e = v(), g = this.A, f = l, h = Math.min(w + 1, d2 - r), e[f] = 1, k = 1; k < h; k++) if ((l = b2[this.F ? d2 - 1 - r - k : r + k]) && l.length >= this.B && !e[l]) {
                          e[l] = 1;
                          const p = this.l && l > f;
                          M(this, m, p ? f : l, L(g + (d2 / 2 > g ? 0 : 1), d2, r, h - 1, k - 1), a2, c2, p ? l : f);
                        }
                      }
                  }
                }
              }
              this.m || (this.register[a2] = 1);
            }
          }
          return this;
        };
        function L(a2, b2, c2, d2, e) {
          return c2 && 1 < a2 ? b2 + (d2 || 0) <= a2 ? c2 + (e || 0) : (a2 - 1) / (b2 + (d2 || 0)) * (c2 + (e || 0)) + 1 | 0 : 0;
        }
        function M(a2, b2, c2, d2, e, f, g) {
          let h = g ? a2.h : a2.map;
          if (!b2[c2] || g && !b2[c2][g]) a2.s && (h = h[d2]), g ? (b2 = b2[c2] || (b2[c2] = v()), b2[g] = 1, h = h[g] || (h[g] = v())) : b2[c2] = 1, h = h[c2] || (h[c2] = []), a2.s || (h = h[d2] || (h[d2] = [])), f && h.includes(e) || (h[h.length] = e, a2.m && (a2 = a2.register[e] || (a2.register[e] = []), a2[a2.length] = h));
        }
        t.search = function(a2, b2, c2) {
          c2 || (!b2 && C(a2) ? (c2 = a2, a2 = c2.query) : C(b2) && (c2 = b2));
          let d2 = [], e;
          let f, g = 0;
          if (c2) {
            a2 = c2.query || a2;
            b2 = c2.limit;
            g = c2.offset || 0;
            var h = c2.context;
            f = c2.suggest;
          }
          if (a2 && (a2 = this.encode("" + a2), e = a2.length, 1 < e)) {
            c2 = v();
            var k = [];
            for (let n = 0, w = 0, q; n < e; n++) if ((q = a2[n]) && q.length >= this.B && !c2[q]) if (this.s || f || this.map[q]) k[w++] = q, c2[q] = 1;
            else return d2;
            a2 = k;
            e = a2.length;
          }
          if (!e) return d2;
          b2 || (b2 = 100);
          h = this.depth && 1 < e && false !== h;
          c2 = 0;
          let m;
          h ? (m = a2[0], c2 = 1) : 1 < e && a2.sort(ba);
          for (let n, w; c2 < e; c2++) {
            w = a2[c2];
            h ? (n = sa(
              this,
              d2,
              f,
              b2,
              g,
              2 === e,
              w,
              m
            ), f && false === n && d2.length || (m = w)) : n = sa(this, d2, f, b2, g, 1 === e, w);
            if (n) return n;
            if (f && c2 === e - 1) {
              k = d2.length;
              if (!k) {
                if (h) {
                  h = 0;
                  c2 = -1;
                  continue;
                }
                return d2;
              }
              if (1 === k) return ta(d2[0], b2, g);
            }
          }
          return ma(d2, b2, g, f);
        };
        function sa(a2, b2, c2, d2, e, f, g, h) {
          let k = [], m = h ? a2.h : a2.map;
          a2.s || (m = ua(m, g, h, a2.l));
          if (m) {
            let n = 0;
            const w = Math.min(m.length, h ? a2.A : a2.D);
            for (let q = 0, r = 0, l, p; q < w; q++) if (l = m[q]) {
              if (a2.s && (l = ua(l, g, h, a2.l)), e && l && f && (p = l.length, p <= e ? (e -= p, l = null) : (l = l.slice(e), e = 0)), l && (k[n++] = l, f && (r += l.length, r >= d2))) break;
            }
            if (n) {
              if (f) return ta(k, d2, 0);
              b2[b2.length] = k;
              return;
            }
          }
          return !c2 && k;
        }
        function ta(a2, b2, c2) {
          a2 = 1 === a2.length ? a2[0] : [].concat.apply([], a2);
          return c2 || a2.length > b2 ? a2.slice(c2, c2 + b2) : a2;
        }
        function ua(a2, b2, c2, d2) {
          c2 ? (d2 = d2 && b2 > c2, a2 = (a2 = a2[d2 ? b2 : c2]) && a2[d2 ? c2 : b2]) : a2 = a2[b2];
          return a2;
        }
        t.contain = function(a2) {
          return !!this.register[a2];
        };
        t.update = function(a2, b2) {
          return this.remove(a2).add(a2, b2);
        };
        t.remove = function(a2, b2) {
          const c2 = this.register[a2];
          if (c2) {
            if (this.m) for (let d2 = 0, e; d2 < c2.length; d2++) e = c2[d2], e.splice(e.indexOf(a2), 1);
            else N(this.map, a2, this.D, this.s), this.depth && N(this.h, a2, this.A, this.s);
            b2 || delete this.register[a2];
            if (this.cache) {
              b2 = this.cache;
              for (let d2 = 0, e, f; d2 < b2.h.length; d2++) f = b2.h[d2], e = b2.cache[f], e.includes(a2) && (b2.h.splice(d2--, 1), delete b2.cache[f]);
            }
          }
          return this;
        };
        function N(a2, b2, c2, d2, e) {
          let f = 0;
          if (a2.constructor === Array) if (e) b2 = a2.indexOf(b2), -1 !== b2 ? 1 < a2.length && (a2.splice(b2, 1), f++) : f++;
          else {
            e = Math.min(a2.length, c2);
            for (let g = 0, h; g < e; g++) if (h = a2[g]) f = N(h, b2, c2, d2, e), d2 || f || delete a2[g];
          }
          else for (let g in a2) (f = N(a2[g], b2, c2, d2, e)) || delete a2[g];
          return f;
        }
        t.searchCache = oa;
        t.export = function(a2, b2, c2, d2, e) {
          let f, g;
          switch (e || (e = 0)) {
            case 0:
              f = "reg";
              if (this.m) {
                g = v();
                for (let h in this.register) g[h] = 1;
              } else g = this.register;
              break;
            case 1:
              f = "cfg";
              g = { doc: 0, opt: this.s ? 1 : 0 };
              break;
            case 2:
              f = "map";
              g = this.map;
              break;
            case 3:
              f = "ctx";
              g = this.h;
              break;
            default:
              return;
          }
          ra(a2, b2 || this, c2, f, d2, e, g);
          return true;
        };
        t.import = function(a2, b2) {
          if (b2) switch (x(b2) && (b2 = JSON.parse(b2)), a2) {
            case "cfg":
              this.s = !!b2.opt;
              break;
            case "reg":
              this.m = false;
              this.register = b2;
              break;
            case "map":
              this.map = b2;
              break;
            case "ctx":
              this.h = b2;
          }
        };
        la(K.prototype);
        function va(a2) {
          a2 = a2.data;
          var b2 = self._index;
          const c2 = a2.args;
          var d2 = a2.task;
          switch (d2) {
            case "init":
              d2 = a2.options || {};
              a2 = a2.factory;
              b2 = d2.encode;
              d2.cache = false;
              b2 && 0 === b2.indexOf("function") && (d2.encode = Function("return " + b2)());
              a2 ? (Function("return " + a2)()(self), self._index = new self.FlexSearch.Index(d2), delete self.FlexSearch) : self._index = new K(d2);
              break;
            default:
              a2 = a2.id, b2 = b2[d2].apply(b2, c2), postMessage("search" === d2 ? { id: a2, msg: b2 } : { id: a2 });
          }
        }
        ;
        let wa = 0;
        function O(a2) {
          if (!(this instanceof O)) return new O(a2);
          var b2;
          a2 ? D(b2 = a2.encode) && (a2.encode = b2.toString()) : a2 = {};
          (b2 = (self || window)._factory) && (b2 = b2.toString());
          const c2 = "undefined" === typeof window && self.exports, d2 = this;
          this.o = xa(b2, c2, a2.worker);
          this.h = v();
          if (this.o) {
            if (c2) this.o.on("message", function(e) {
              d2.h[e.id](e.msg);
              delete d2.h[e.id];
            });
            else this.o.onmessage = function(e) {
              e = e.data;
              d2.h[e.id](e.msg);
              delete d2.h[e.id];
            };
            this.o.postMessage({ task: "init", factory: b2, options: a2 });
          }
        }
        P("add");
        P("append");
        P("search");
        P("update");
        P("remove");
        function P(a2) {
          O.prototype[a2] = O.prototype[a2 + "Async"] = function() {
            const b2 = this, c2 = [].slice.call(arguments);
            var d2 = c2[c2.length - 1];
            let e;
            D(d2) && (e = d2, c2.splice(c2.length - 1, 1));
            d2 = new Promise(function(f) {
              setTimeout(function() {
                b2.h[++wa] = f;
                b2.o.postMessage({ task: a2, id: wa, args: c2 });
              });
            });
            return e ? (d2.then(e), this) : d2;
          };
        }
        function xa(a, b, c) {
          let d;
          try {
            d = b ? eval('new (require("worker_threads")["Worker"])("../dist/node/node.js")') : a ? new Worker(URL.createObjectURL(new Blob(["onmessage=" + va.toString()], { type: "text/javascript" }))) : new Worker(x(c) ? c : "worker/worker.js", { type: "module" });
          } catch (e) {
          }
          return d;
        }
        ;
        function Q(a2) {
          if (!(this instanceof Q)) return new Q(a2);
          var b2 = a2.document || a2.doc || a2, c2;
          this.K = [];
          this.h = [];
          this.A = [];
          this.register = v();
          this.key = (c2 = b2.key || b2.id) && S(c2, this.A) || "id";
          this.m = u(a2.fastupdate);
          this.C = (c2 = b2.store) && true !== c2 && [];
          this.store = c2 && v();
          this.I = (c2 = b2.tag) && S(c2, this.A);
          this.l = c2 && v();
          this.cache = (c2 = a2.cache) && new J(c2);
          a2.cache = false;
          this.o = a2.worker;
          this.async = false;
          c2 = v();
          let d2 = b2.index || b2.field || b2;
          x(d2) && (d2 = [d2]);
          for (let e = 0, f, g; e < d2.length; e++) f = d2[e], x(f) || (g = f, f = f.field), g = C(g) ? Object.assign({}, a2, g) : a2, this.o && (c2[f] = new O(g), c2[f].o || (this.o = false)), this.o || (c2[f] = new K(g, this.register)), this.K[e] = S(f, this.A), this.h[e] = f;
          if (this.C) for (a2 = b2.store, x(a2) && (a2 = [a2]), b2 = 0; b2 < a2.length; b2++) this.C[b2] = S(a2[b2], this.A);
          this.index = c2;
        }
        function S(a2, b2) {
          const c2 = a2.split(":");
          let d2 = 0;
          for (let e = 0; e < c2.length; e++) a2 = c2[e], 0 <= a2.indexOf("[]") && (a2 = a2.substring(0, a2.length - 2)) && (b2[d2] = true), a2 && (c2[d2++] = a2);
          d2 < c2.length && (c2.length = d2);
          return 1 < d2 ? c2 : c2[0];
        }
        function T(a2, b2) {
          if (x(b2)) a2 = a2[b2];
          else for (let c2 = 0; a2 && c2 < b2.length; c2++) a2 = a2[b2[c2]];
          return a2;
        }
        function U(a2, b2, c2, d2, e) {
          a2 = a2[e];
          if (d2 === c2.length - 1) b2[e] = a2;
          else if (a2) if (a2.constructor === Array) for (b2 = b2[e] = Array(a2.length), e = 0; e < a2.length; e++) U(a2, b2, c2, d2, e);
          else b2 = b2[e] || (b2[e] = v()), e = c2[++d2], U(a2, b2, c2, d2, e);
        }
        function V(a2, b2, c2, d2, e, f, g, h) {
          if (a2 = a2[g]) if (d2 === b2.length - 1) {
            if (a2.constructor === Array) {
              if (c2[d2]) {
                for (b2 = 0; b2 < a2.length; b2++) e.add(f, a2[b2], true, true);
                return;
              }
              a2 = a2.join(" ");
            }
            e.add(f, a2, h, true);
          } else if (a2.constructor === Array) for (g = 0; g < a2.length; g++) V(a2, b2, c2, d2, e, f, g, h);
          else g = b2[++d2], V(a2, b2, c2, d2, e, f, g, h);
        }
        t = Q.prototype;
        t.add = function(a2, b2, c2) {
          C(a2) && (b2 = a2, a2 = T(b2, this.key));
          if (b2 && (a2 || 0 === a2)) {
            if (!c2 && this.register[a2]) return this.update(a2, b2);
            for (let d2 = 0, e, f; d2 < this.h.length; d2++) f = this.h[d2], e = this.K[d2], x(e) && (e = [e]), V(b2, e, this.A, 0, this.index[f], a2, e[0], c2);
            if (this.I) {
              let d2 = T(b2, this.I), e = v();
              x(d2) && (d2 = [d2]);
              for (let f = 0, g, h; f < d2.length; f++) if (g = d2[f], !e[g] && (e[g] = 1, h = this.l[g] || (this.l[g] = []), !c2 || !h.includes(a2))) {
                if (h[h.length] = a2, this.m) {
                  const k = this.register[a2] || (this.register[a2] = []);
                  k[k.length] = h;
                }
              }
            }
            if (this.store && (!c2 || !this.store[a2])) {
              let d2;
              if (this.C) {
                d2 = v();
                for (let e = 0, f; e < this.C.length; e++) f = this.C[e], x(f) ? d2[f] = b2[f] : U(b2, d2, f, 0, f[0]);
              }
              this.store[a2] = d2 || b2;
            }
          }
          return this;
        };
        t.append = function(a2, b2) {
          return this.add(a2, b2, true);
        };
        t.update = function(a2, b2) {
          return this.remove(a2).add(a2, b2);
        };
        t.remove = function(a2) {
          C(a2) && (a2 = T(a2, this.key));
          if (this.register[a2]) {
            for (var b2 = 0; b2 < this.h.length && (this.index[this.h[b2]].remove(a2, !this.o), !this.m); b2++) ;
            if (this.I && !this.m) for (let c2 in this.l) {
              b2 = this.l[c2];
              const d2 = b2.indexOf(a2);
              -1 !== d2 && (1 < b2.length ? b2.splice(d2, 1) : delete this.l[c2]);
            }
            this.store && delete this.store[a2];
            delete this.register[a2];
          }
          return this;
        };
        t.search = function(a2, b2, c2, d2) {
          c2 || (!b2 && C(a2) ? (c2 = a2, a2 = "") : C(b2) && (c2 = b2, b2 = 0));
          let e = [], f = [], g, h, k, m, n, w, q = 0;
          if (c2) if (c2.constructor === Array) k = c2, c2 = null;
          else {
            a2 = c2.query || a2;
            k = (g = c2.pluck) || c2.index || c2.field;
            m = c2.tag;
            h = this.store && c2.enrich;
            n = "and" === c2.bool;
            b2 = c2.limit || b2 || 100;
            w = c2.offset || 0;
            if (m && (x(m) && (m = [m]), !a2)) {
              for (let l = 0, p; l < m.length; l++) if (p = ya.call(this, m[l], b2, w, h)) e[e.length] = p, q++;
              return q ? e : [];
            }
            x(k) && (k = [k]);
          }
          k || (k = this.h);
          n = n && (1 < k.length || m && 1 < m.length);
          const r = !d2 && (this.o || this.async) && [];
          for (let l = 0, p, z, B; l < k.length; l++) {
            let A;
            z = k[l];
            x(z) || (A = z, z = A.field, a2 = A.query || a2, b2 = A.limit || b2);
            if (r) r[l] = this.index[z].searchAsync(a2, b2, A || c2);
            else {
              d2 ? p = d2[l] : p = this.index[z].search(a2, b2, A || c2);
              B = p && p.length;
              if (m && B) {
                const y = [];
                let H = 0;
                n && (y[0] = [p]);
                for (let X = 0, pa, R; X < m.length; X++) if (pa = m[X], B = (R = this.l[pa]) && R.length) H++, y[y.length] = n ? [R] : R;
                H && (p = n ? ma(y, b2 || 100, w || 0) : na(p, y), B = p.length);
              }
              if (B) f[q] = z, e[q++] = p;
              else if (n) return [];
            }
          }
          if (r) {
            const l = this;
            return new Promise(function(p) {
              Promise.all(r).then(function(z) {
                p(l.search(
                  a2,
                  b2,
                  c2,
                  z
                ));
              });
            });
          }
          if (!q) return [];
          if (g && (!h || !this.store)) return e[0];
          for (let l = 0, p; l < f.length; l++) {
            p = e[l];
            p.length && h && (p = za.call(this, p));
            if (g) return p;
            e[l] = { field: f[l], result: p };
          }
          return e;
        };
        function ya(a2, b2, c2, d2) {
          let e = this.l[a2], f = e && e.length - c2;
          if (f && 0 < f) {
            if (f > b2 || c2) e = e.slice(c2, c2 + b2);
            d2 && (e = za.call(this, e));
            return { tag: a2, result: e };
          }
        }
        function za(a2) {
          const b2 = Array(a2.length);
          for (let c2 = 0, d2; c2 < a2.length; c2++) d2 = a2[c2], b2[c2] = { id: d2, doc: this.store[d2] };
          return b2;
        }
        t.contain = function(a2) {
          return !!this.register[a2];
        };
        t.get = function(a2) {
          return this.store[a2];
        };
        t.set = function(a2, b2) {
          this.store[a2] = b2;
          return this;
        };
        t.searchCache = oa;
        t.export = function(a2, b2, c2, d2, e) {
          e || (e = 0);
          d2 || (d2 = 0);
          if (d2 < this.h.length) {
            const f = this.h[d2], g = this.index[f];
            b2 = this;
            setTimeout(function() {
              g.export(a2, b2, e ? f : "", d2, e++) || (d2++, e = 1, b2.export(a2, b2, f, d2, e));
            });
          } else {
            let f, g;
            switch (e) {
              case 1:
                f = "tag";
                g = this.l;
                break;
              case 2:
                f = "store";
                g = this.store;
                break;
              default:
                return;
            }
            ra(a2, this, c2, f, d2, e, g);
          }
        };
        t.import = function(a2, b2) {
          if (b2) switch (x(b2) && (b2 = JSON.parse(b2)), a2) {
            case "tag":
              this.l = b2;
              break;
            case "reg":
              this.m = false;
              this.register = b2;
              for (let d2 = 0, e; d2 < this.h.length; d2++) e = this.index[this.h[d2]], e.register = b2, e.m = false;
              break;
            case "store":
              this.store = b2;
              break;
            default:
              a2 = a2.split(".");
              const c2 = a2[0];
              a2 = a2[1];
              c2 && a2 && this.index[c2].import(a2, b2);
          }
        };
        la(Q.prototype);
        var Ba = { encode: Aa, F: false, G: "" };
        const Ca = [F("[\xE0\xE1\xE2\xE3\xE4\xE5]"), "a", F("[\xE8\xE9\xEA\xEB]"), "e", F("[\xEC\xED\xEE\xEF]"), "i", F("[\xF2\xF3\xF4\xF5\xF6\u0151]"), "o", F("[\xF9\xFA\xFB\xFC\u0171]"), "u", F("[\xFD\u0177\xFF]"), "y", F("\xF1"), "n", F("[\xE7c]"), "k", F("\xDF"), "s", F(" & "), " and "];
        function Aa(a2) {
          var b2 = a2 = "" + a2;
          b2.normalize && (b2 = b2.normalize("NFD").replace(ea, ""));
          return ca.call(this, b2.toLowerCase(), !a2.normalize && Ca);
        }
        ;
        var Ea = { encode: Da, F: false, G: "strict" };
        const Fa = /[^a-z0-9]+/, Ga = { b: "p", v: "f", w: "f", z: "s", x: "s", "\xDF": "s", d: "t", n: "m", c: "k", g: "k", j: "k", q: "k", i: "e", y: "e", u: "o" };
        function Da(a2) {
          a2 = Aa.call(this, a2).join(" ");
          const b2 = [];
          if (a2) {
            const c2 = a2.split(Fa), d2 = c2.length;
            for (let e = 0, f, g = 0; e < d2; e++) if ((a2 = c2[e]) && (!this.filter || !this.filter[a2])) {
              f = a2[0];
              let h = Ga[f] || f, k = h;
              for (let m = 1; m < a2.length; m++) {
                f = a2[m];
                const n = Ga[f] || f;
                n && n !== k && (h += n, k = n);
              }
              b2[g++] = h;
            }
          }
          return b2;
        }
        ;
        var Ia = { encode: Ha, F: false, G: "" };
        const Ja = [F("ae"), "a", F("oe"), "o", F("sh"), "s", F("th"), "t", F("ph"), "f", F("pf"), "f", F("(?![aeo])h(?![aeo])"), "", F("(?!^[aeo])h(?!^[aeo])"), ""];
        function Ha(a2, b2) {
          a2 && (a2 = Da.call(this, a2).join(" "), 2 < a2.length && (a2 = E(a2, Ja)), b2 || (1 < a2.length && (a2 = ha(a2)), a2 && (a2 = a2.split(" "))));
          return a2 || [];
        }
        ;
        var La = { encode: Ka, F: false, G: "" };
        const Ma = F("(?!\\b)[aeo]");
        function Ka(a2) {
          a2 && (a2 = Ha.call(this, a2, true), 1 < a2.length && (a2 = a2.replace(Ma, "")), 1 < a2.length && (a2 = ha(a2)), a2 && (a2 = a2.split(" ")));
          return a2 || [];
        }
        ;
        G["latin:default"] = ja;
        G["latin:simple"] = Ba;
        G["latin:balance"] = Ea;
        G["latin:advanced"] = Ia;
        G["latin:extra"] = La;
        const W = self;
        let Y;
        const Z = { Index: K, Document: Q, Worker: O, registerCharset: function(a2, b2) {
          G[a2] = b2;
        }, registerLanguage: function(a2, b2) {
          ka[a2] = b2;
        } };
        (Y = W.define) && Y.amd ? Y([], function() {
          return Z;
        }) : W.exports ? W.exports = Z : W.FlexSearch = Z;
      })(exports);
    }
  });

  // <stdin>
  var FlexSearch = __toESM(require_flexsearch_bundle());
  (function() {
    "use strict";
    const index = new FlexSearch.Document({
      tokenize: "forward",
      document: {
        id: "id",
        index: [
          {
            field: "title"
          },
          {
            field: "tags"
          },
          {
            field: "content"
          },
          {
            field: "date",
            tokenize: "strict",
            encode: false
          }
        ],
        store: ["title", "summary", "date", "permalink"]
      }
    });
    function showResults(items) {
      const template = document.querySelector("template").content;
      const fragment = document.createDocumentFragment();
      const results = document.querySelector(".search-results");
      results.textContent = "";
      const itemsLength = Object.keys(items).length;
      if (itemsLength === 0 && query.value === "") {
        document.querySelector(".search-no-results").classList.add("d-none");
        document.querySelector(".search-no-recent").classList.remove("d-none");
      } else if (itemsLength === 0 && query.value !== "") {
        document.querySelector(".search-no-recent").classList.add("d-none");
        const queryNoResults = document.querySelector(".query-no-results");
        queryNoResults.innerText = query.value;
        document.querySelector(".search-no-results").classList.remove("d-none");
      } else {
        document.querySelector(".search-no-recent").classList.add("d-none");
        document.querySelector(".search-no-results").classList.add("d-none");
      }
      for (const id in items) {
        const item = items[id];
        const result = template.cloneNode(true);
        const a2 = result.querySelector("a");
        const time = result.querySelector("time");
        const content = result.querySelector(".content");
        a2.innerHTML = item.title;
        a2.href = item.permalink;
        time.innerText = item.date;
        content.innerHTML = item.summary;
        fragment.appendChild(result);
      }
      results.appendChild(fragment);
    }
    function doSearch() {
      const query2 = document.querySelector(".search-text").value.trim();
      const limit = 99;
      const results = index.search({
        query: query2,
        enrich: true,
        limit
      });
      const items = {};
      results.forEach(function(result) {
        result.result.forEach(function(r) {
          items[r.id] = r.doc;
        });
      });
      showResults(items);
    }
    function enableUI() {
      const searchform = document.querySelector(".search-form");
      searchform.addEventListener("submit", function(e) {
        e.preventDefault();
        doSearch();
      });
      searchform.addEventListener("input", function() {
        doSearch();
      });
      document.querySelector(".search-loading").classList.add("d-none");
      document.querySelector(".search-input").classList.remove("d-none");
      document.querySelector(".search-text").focus();
    }
    function buildIndex() {
      document.querySelector(".search-loading").classList.remove("d-none");
      fetch("/search-index.json").then(function(response) {
        return response.json();
      }).then(function(data) {
        data.forEach(function(item) {
          index.add(item);
        });
      });
    }
    buildIndex();
    enableUI();
  })();
})();
/*!
 * FlexSearch for Bootstrap based Hyas sites
 * Copyright 2021-2023 Hyas
 * Licensed under the MIT License
 * Based on https://github.com/frjo/hugo-theme-zen/blob/main/assets/js/search.js
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL2ZsZXhzZWFyY2gvZGlzdC9mbGV4c2VhcmNoLmJ1bmRsZS5qcyIsICI8c3RkaW4+Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvKiohXHJcbiAqIEZsZXhTZWFyY2guanMgdjAuNy4zMSAoQnVuZGxlKVxyXG4gKiBDb3B5cmlnaHQgMjAxOC0yMDIyIE5leHRhcHBzIEdtYkhcclxuICogQXV0aG9yOiBUaG9tYXMgV2lsa2VybGluZ1xyXG4gKiBMaWNlbmNlOiBBcGFjaGUtMi4wXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9uZXh0YXBwcy1kZS9mbGV4c2VhcmNoXHJcbiAqL1xyXG4oZnVuY3Rpb24gX2Yoc2VsZil7J3VzZSBzdHJpY3QnO3RyeXtpZihtb2R1bGUpc2VsZj1tb2R1bGV9Y2F0Y2goZSl7fXNlbGYuX2ZhY3Rvcnk9X2Y7dmFyIHQ7ZnVuY3Rpb24gdShhKXtyZXR1cm5cInVuZGVmaW5lZFwiIT09dHlwZW9mIGE/YTohMH1mdW5jdGlvbiBhYShhKXtjb25zdCBiPUFycmF5KGEpO2ZvcihsZXQgYz0wO2M8YTtjKyspYltjXT12KCk7cmV0dXJuIGJ9ZnVuY3Rpb24gdigpe3JldHVybiBPYmplY3QuY3JlYXRlKG51bGwpfWZ1bmN0aW9uIGJhKGEsYil7cmV0dXJuIGIubGVuZ3RoLWEubGVuZ3RofWZ1bmN0aW9uIHgoYSl7cmV0dXJuXCJzdHJpbmdcIj09PXR5cGVvZiBhfWZ1bmN0aW9uIEMoYSl7cmV0dXJuXCJvYmplY3RcIj09PXR5cGVvZiBhfWZ1bmN0aW9uIEQoYSl7cmV0dXJuXCJmdW5jdGlvblwiPT09dHlwZW9mIGF9O2Z1bmN0aW9uIGNhKGEsYil7dmFyIGM9ZGE7aWYoYSYmKGImJihhPUUoYSxiKSksdGhpcy5IJiYoYT1FKGEsdGhpcy5IKSksdGhpcy5KJiYxPGEubGVuZ3RoJiYoYT1FKGEsdGhpcy5KKSksY3x8XCJcIj09PWMpKXthPWEuc3BsaXQoYyk7aWYodGhpcy5maWx0ZXIpe2I9dGhpcy5maWx0ZXI7Yz1hLmxlbmd0aDtjb25zdCBkPVtdO2ZvcihsZXQgZT0wLGY9MDtlPGM7ZSsrKXtjb25zdCBnPWFbZV07ZyYmIWJbZ10mJihkW2YrK109Zyl9YT1kfXJldHVybiBhfXJldHVybiBhfWNvbnN0IGRhPS9bXFxwe1p9XFxwe1N9XFxwe1B9XFxwe0N9XSsvdSxlYT0vW1xcdTAzMDAtXFx1MDM2Zl0vZztcclxuZnVuY3Rpb24gZmEoYSxiKXtjb25zdCBjPU9iamVjdC5rZXlzKGEpLGQ9Yy5sZW5ndGgsZT1bXTtsZXQgZj1cIlwiLGc9MDtmb3IobGV0IGg9MCxrLG07aDxkO2grKylrPWNbaF0sKG09YVtrXSk/KGVbZysrXT1GKGI/XCIoPyFcXFxcYilcIitrK1wiKFxcXFxifF8pXCI6ayksZVtnKytdPW0pOmYrPShmP1wifFwiOlwiXCIpK2s7ZiYmKGVbZysrXT1GKGI/XCIoPyFcXFxcYikoXCIrZitcIikoXFxcXGJ8XylcIjpcIihcIitmK1wiKVwiKSxlW2ddPVwiXCIpO3JldHVybiBlfWZ1bmN0aW9uIEUoYSxiKXtmb3IobGV0IGM9MCxkPWIubGVuZ3RoO2M8ZCYmKGE9YS5yZXBsYWNlKGJbY10sYltjKzFdKSxhKTtjKz0yKTtyZXR1cm4gYX1mdW5jdGlvbiBGKGEpe3JldHVybiBuZXcgUmVnRXhwKGEsXCJnXCIpfWZ1bmN0aW9uIGhhKGEpe2xldCBiPVwiXCIsYz1cIlwiO2ZvcihsZXQgZD0wLGU9YS5sZW5ndGgsZjtkPGU7ZCsrKShmPWFbZF0pIT09YyYmKGIrPWM9Zik7cmV0dXJuIGJ9O3ZhciBqYT17ZW5jb2RlOmlhLEY6ITEsRzpcIlwifTtmdW5jdGlvbiBpYShhKXtyZXR1cm4gY2EuY2FsbCh0aGlzLChcIlwiK2EpLnRvTG93ZXJDYXNlKCksITEpfTtjb25zdCBrYT17fSxHPXt9O2Z1bmN0aW9uIGxhKGEpe0koYSxcImFkZFwiKTtJKGEsXCJhcHBlbmRcIik7SShhLFwic2VhcmNoXCIpO0koYSxcInVwZGF0ZVwiKTtJKGEsXCJyZW1vdmVcIil9ZnVuY3Rpb24gSShhLGIpe2FbYitcIkFzeW5jXCJdPWZ1bmN0aW9uKCl7Y29uc3QgYz10aGlzLGQ9YXJndW1lbnRzO3ZhciBlPWRbZC5sZW5ndGgtMV07bGV0IGY7RChlKSYmKGY9ZSxkZWxldGUgZFtkLmxlbmd0aC0xXSk7ZT1uZXcgUHJvbWlzZShmdW5jdGlvbihnKXtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Yy5hc3luYz0hMDtjb25zdCBoPWNbYl0uYXBwbHkoYyxkKTtjLmFzeW5jPSExO2coaCl9KX0pO3JldHVybiBmPyhlLnRoZW4oZiksdGhpcyk6ZX19O2Z1bmN0aW9uIG1hKGEsYixjLGQpe2NvbnN0IGU9YS5sZW5ndGg7bGV0IGY9W10sZyxoLGs9MDtkJiYoZD1bXSk7Zm9yKGxldCBtPWUtMTswPD1tO20tLSl7Y29uc3Qgbj1hW21dLHc9bi5sZW5ndGgscT12KCk7bGV0IHI9IWc7Zm9yKGxldCBsPTA7bDx3O2wrKyl7Y29uc3QgcD1uW2xdLHo9cC5sZW5ndGg7aWYoeilmb3IobGV0IEI9MCxBLHk7Qjx6O0IrKylpZih5PXBbQl0sZyl7aWYoZ1t5XSl7aWYoIW0paWYoYyljLS07ZWxzZSBpZihmW2srK109eSxrPT09YilyZXR1cm4gZjtpZihtfHxkKXFbeV09MTtyPSEwfWlmKGQmJihBPShoW3ldfHwwKSsxLGhbeV09QSxBPGUpKXtjb25zdCBIPWRbQS0yXXx8KGRbQS0yXT1bXSk7SFtILmxlbmd0aF09eX19ZWxzZSBxW3ldPTF9aWYoZClnfHwoaD1xKTtlbHNlIGlmKCFyKXJldHVybltdO2c9cX1pZihkKWZvcihsZXQgbT1kLmxlbmd0aC0xLG4sdzswPD1tO20tLSl7bj1kW21dO3c9bi5sZW5ndGg7Zm9yKGxldCBxPTAscjtxPHc7cSsrKWlmKHI9XHJcbm5bcV0sIWdbcl0pe2lmKGMpYy0tO2Vsc2UgaWYoZltrKytdPXIsaz09PWIpcmV0dXJuIGY7Z1tyXT0xfX1yZXR1cm4gZn1mdW5jdGlvbiBuYShhLGIpe2NvbnN0IGM9digpLGQ9digpLGU9W107Zm9yKGxldCBmPTA7ZjxhLmxlbmd0aDtmKyspY1thW2ZdXT0xO2ZvcihsZXQgZj0wLGc7ZjxiLmxlbmd0aDtmKyspe2c9YltmXTtmb3IobGV0IGg9MCxrO2g8Zy5sZW5ndGg7aCsrKWs9Z1toXSxjW2tdJiYhZFtrXSYmKGRba109MSxlW2UubGVuZ3RoXT1rKX1yZXR1cm4gZX07ZnVuY3Rpb24gSihhKXt0aGlzLmw9ITAhPT1hJiZhO3RoaXMuY2FjaGU9digpO3RoaXMuaD1bXX1mdW5jdGlvbiBvYShhLGIsYyl7QyhhKSYmKGE9YS5xdWVyeSk7bGV0IGQ9dGhpcy5jYWNoZS5nZXQoYSk7ZHx8KGQ9dGhpcy5zZWFyY2goYSxiLGMpLHRoaXMuY2FjaGUuc2V0KGEsZCkpO3JldHVybiBkfUoucHJvdG90eXBlLnNldD1mdW5jdGlvbihhLGIpe2lmKCF0aGlzLmNhY2hlW2FdKXt2YXIgYz10aGlzLmgubGVuZ3RoO2M9PT10aGlzLmw/ZGVsZXRlIHRoaXMuY2FjaGVbdGhpcy5oW2MtMV1dOmMrKztmb3IoLS1jOzA8YztjLS0pdGhpcy5oW2NdPXRoaXMuaFtjLTFdO3RoaXMuaFswXT1hfXRoaXMuY2FjaGVbYV09Yn07Si5wcm90b3R5cGUuZ2V0PWZ1bmN0aW9uKGEpe2NvbnN0IGI9dGhpcy5jYWNoZVthXTtpZih0aGlzLmwmJmImJihhPXRoaXMuaC5pbmRleE9mKGEpKSl7Y29uc3QgYz10aGlzLmhbYS0xXTt0aGlzLmhbYS0xXT10aGlzLmhbYV07dGhpcy5oW2FdPWN9cmV0dXJuIGJ9O2NvbnN0IHFhPXttZW1vcnk6e2NoYXJzZXQ6XCJsYXRpbjpleHRyYVwiLEQ6MyxCOjQsbTohMX0scGVyZm9ybWFuY2U6e0Q6MyxCOjMsczohMSxjb250ZXh0OntkZXB0aDoyLEQ6MX19LG1hdGNoOntjaGFyc2V0OlwibGF0aW46ZXh0cmFcIixHOlwicmV2ZXJzZVwifSxzY29yZTp7Y2hhcnNldDpcImxhdGluOmFkdmFuY2VkXCIsRDoyMCxCOjMsY29udGV4dDp7ZGVwdGg6MyxEOjl9fSxcImRlZmF1bHRcIjp7fX07ZnVuY3Rpb24gcmEoYSxiLGMsZCxlLGYsZyl7c2V0VGltZW91dChmdW5jdGlvbigpe2NvbnN0IGg9YShjP2MrXCIuXCIrZDpkLEpTT04uc3RyaW5naWZ5KGcpKTtoJiZoLnRoZW4/aC50aGVuKGZ1bmN0aW9uKCl7Yi5leHBvcnQoYSxiLGMsZSxmKzEpfSk6Yi5leHBvcnQoYSxiLGMsZSxmKzEpfSl9O2Z1bmN0aW9uIEsoYSxiKXtpZighKHRoaXMgaW5zdGFuY2VvZiBLKSlyZXR1cm4gbmV3IEsoYSk7dmFyIGM7aWYoYSl7eChhKT9hPXFhW2FdOihjPWEucHJlc2V0KSYmKGE9T2JqZWN0LmFzc2lnbih7fSxjW2NdLGEpKTtjPWEuY2hhcnNldDt2YXIgZD1hLmxhbmc7eChjKSYmKC0xPT09Yy5pbmRleE9mKFwiOlwiKSYmKGMrPVwiOmRlZmF1bHRcIiksYz1HW2NdKTt4KGQpJiYoZD1rYVtkXSl9ZWxzZSBhPXt9O2xldCBlLGYsZz1hLmNvbnRleHR8fHt9O3RoaXMuZW5jb2RlPWEuZW5jb2RlfHxjJiZjLmVuY29kZXx8aWE7dGhpcy5yZWdpc3Rlcj1ifHx2KCk7dGhpcy5EPWU9YS5yZXNvbHV0aW9ufHw5O3RoaXMuRz1iPWMmJmMuR3x8YS50b2tlbml6ZXx8XCJzdHJpY3RcIjt0aGlzLmRlcHRoPVwic3RyaWN0XCI9PT1iJiZnLmRlcHRoO3RoaXMubD11KGcuYmlkaXJlY3Rpb25hbCk7dGhpcy5zPWY9dShhLm9wdGltaXplKTt0aGlzLm09dShhLmZhc3R1cGRhdGUpO3RoaXMuQj1hLm1pbmxlbmd0aHx8MTt0aGlzLkM9XHJcbmEuYm9vc3Q7dGhpcy5tYXA9Zj9hYShlKTp2KCk7dGhpcy5BPWU9Zy5yZXNvbHV0aW9ufHwxO3RoaXMuaD1mP2FhKGUpOnYoKTt0aGlzLkY9YyYmYy5GfHxhLnJ0bDt0aGlzLkg9KGI9YS5tYXRjaGVyfHxkJiZkLkgpJiZmYShiLCExKTt0aGlzLko9KGI9YS5zdGVtbWVyfHxkJiZkLkopJiZmYShiLCEwKTtpZihjPWI9YS5maWx0ZXJ8fGQmJmQuZmlsdGVyKXtjPWI7ZD12KCk7Zm9yKGxldCBoPTAsaz1jLmxlbmd0aDtoPGs7aCsrKWRbY1toXV09MTtjPWR9dGhpcy5maWx0ZXI9Yzt0aGlzLmNhY2hlPShiPWEuY2FjaGUpJiZuZXcgSihiKX10PUsucHJvdG90eXBlO3QuYXBwZW5kPWZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMuYWRkKGEsYiwhMCl9O1xyXG50LmFkZD1mdW5jdGlvbihhLGIsYyxkKXtpZihiJiYoYXx8MD09PWEpKXtpZighZCYmIWMmJnRoaXMucmVnaXN0ZXJbYV0pcmV0dXJuIHRoaXMudXBkYXRlKGEsYik7Yj10aGlzLmVuY29kZShiKTtpZihkPWIubGVuZ3RoKXtjb25zdCBtPXYoKSxuPXYoKSx3PXRoaXMuZGVwdGgscT10aGlzLkQ7Zm9yKGxldCByPTA7cjxkO3IrKyl7bGV0IGw9Ylt0aGlzLkY/ZC0xLXI6cl07dmFyIGU9bC5sZW5ndGg7aWYobCYmZT49dGhpcy5CJiYod3x8IW5bbF0pKXt2YXIgZj1MKHEsZCxyKSxnPVwiXCI7c3dpdGNoKHRoaXMuRyl7Y2FzZSBcImZ1bGxcIjppZigyPGUpe2ZvcihmPTA7ZjxlO2YrKylmb3IodmFyIGg9ZTtoPmY7aC0tKWlmKGgtZj49dGhpcy5CKXt2YXIgaz1MKHEsZCxyLGUsZik7Zz1sLnN1YnN0cmluZyhmLGgpO00odGhpcyxuLGcsayxhLGMpfWJyZWFrfWNhc2UgXCJyZXZlcnNlXCI6aWYoMTxlKXtmb3IoaD1lLTE7MDxoO2gtLSlnPWxbaF0rZyxnLmxlbmd0aD49dGhpcy5CJiZNKHRoaXMsbixcclxuZyxMKHEsZCxyLGUsaCksYSxjKTtnPVwiXCJ9Y2FzZSBcImZvcndhcmRcIjppZigxPGUpe2ZvcihoPTA7aDxlO2grKylnKz1sW2hdLGcubGVuZ3RoPj10aGlzLkImJk0odGhpcyxuLGcsZixhLGMpO2JyZWFrfWRlZmF1bHQ6aWYodGhpcy5DJiYoZj1NYXRoLm1pbihmL3RoaXMuQyhiLGwscil8MCxxLTEpKSxNKHRoaXMsbixsLGYsYSxjKSx3JiYxPGQmJnI8ZC0xKWZvcihlPXYoKSxnPXRoaXMuQSxmPWwsaD1NYXRoLm1pbih3KzEsZC1yKSxlW2ZdPTEsaz0xO2s8aDtrKyspaWYoKGw9Ylt0aGlzLkY/ZC0xLXItazpyK2tdKSYmbC5sZW5ndGg+PXRoaXMuQiYmIWVbbF0pe2VbbF09MTtjb25zdCBwPXRoaXMubCYmbD5mO00odGhpcyxtLHA/ZjpsLEwoZysoZC8yPmc/MDoxKSxkLHIsaC0xLGstMSksYSxjLHA/bDpmKX19fX10aGlzLm18fCh0aGlzLnJlZ2lzdGVyW2FdPTEpfX1yZXR1cm4gdGhpc307XHJcbmZ1bmN0aW9uIEwoYSxiLGMsZCxlKXtyZXR1cm4gYyYmMTxhP2IrKGR8fDApPD1hP2MrKGV8fDApOihhLTEpLyhiKyhkfHwwKSkqKGMrKGV8fDApKSsxfDA6MH1mdW5jdGlvbiBNKGEsYixjLGQsZSxmLGcpe2xldCBoPWc/YS5oOmEubWFwO2lmKCFiW2NdfHxnJiYhYltjXVtnXSlhLnMmJihoPWhbZF0pLGc/KGI9YltjXXx8KGJbY109digpKSxiW2ddPTEsaD1oW2ddfHwoaFtnXT12KCkpKTpiW2NdPTEsaD1oW2NdfHwoaFtjXT1bXSksYS5zfHwoaD1oW2RdfHwoaFtkXT1bXSkpLGYmJmguaW5jbHVkZXMoZSl8fChoW2gubGVuZ3RoXT1lLGEubSYmKGE9YS5yZWdpc3RlcltlXXx8KGEucmVnaXN0ZXJbZV09W10pLGFbYS5sZW5ndGhdPWgpKX1cclxudC5zZWFyY2g9ZnVuY3Rpb24oYSxiLGMpe2N8fCghYiYmQyhhKT8oYz1hLGE9Yy5xdWVyeSk6QyhiKSYmKGM9YikpO2xldCBkPVtdLGU7bGV0IGYsZz0wO2lmKGMpe2E9Yy5xdWVyeXx8YTtiPWMubGltaXQ7Zz1jLm9mZnNldHx8MDt2YXIgaD1jLmNvbnRleHQ7Zj1jLnN1Z2dlc3R9aWYoYSYmKGE9dGhpcy5lbmNvZGUoXCJcIithKSxlPWEubGVuZ3RoLDE8ZSkpe2M9digpO3ZhciBrPVtdO2ZvcihsZXQgbj0wLHc9MCxxO248ZTtuKyspaWYoKHE9YVtuXSkmJnEubGVuZ3RoPj10aGlzLkImJiFjW3FdKWlmKHRoaXMuc3x8Znx8dGhpcy5tYXBbcV0pa1t3KytdPXEsY1txXT0xO2Vsc2UgcmV0dXJuIGQ7YT1rO2U9YS5sZW5ndGh9aWYoIWUpcmV0dXJuIGQ7Ynx8KGI9MTAwKTtoPXRoaXMuZGVwdGgmJjE8ZSYmITEhPT1oO2M9MDtsZXQgbTtoPyhtPWFbMF0sYz0xKToxPGUmJmEuc29ydChiYSk7Zm9yKGxldCBuLHc7YzxlO2MrKyl7dz1hW2NdO2g/KG49c2EodGhpcyxkLGYsYixnLDI9PT1lLHcsXHJcbm0pLGYmJiExPT09biYmZC5sZW5ndGh8fChtPXcpKTpuPXNhKHRoaXMsZCxmLGIsZywxPT09ZSx3KTtpZihuKXJldHVybiBuO2lmKGYmJmM9PT1lLTEpe2s9ZC5sZW5ndGg7aWYoIWspe2lmKGgpe2g9MDtjPS0xO2NvbnRpbnVlfXJldHVybiBkfWlmKDE9PT1rKXJldHVybiB0YShkWzBdLGIsZyl9fXJldHVybiBtYShkLGIsZyxmKX07XHJcbmZ1bmN0aW9uIHNhKGEsYixjLGQsZSxmLGcsaCl7bGV0IGs9W10sbT1oP2EuaDphLm1hcDthLnN8fChtPXVhKG0sZyxoLGEubCkpO2lmKG0pe2xldCBuPTA7Y29uc3Qgdz1NYXRoLm1pbihtLmxlbmd0aCxoP2EuQTphLkQpO2ZvcihsZXQgcT0wLHI9MCxsLHA7cTx3O3ErKylpZihsPW1bcV0paWYoYS5zJiYobD11YShsLGcsaCxhLmwpKSxlJiZsJiZmJiYocD1sLmxlbmd0aCxwPD1lPyhlLT1wLGw9bnVsbCk6KGw9bC5zbGljZShlKSxlPTApKSxsJiYoa1tuKytdPWwsZiYmKHIrPWwubGVuZ3RoLHI+PWQpKSlicmVhaztpZihuKXtpZihmKXJldHVybiB0YShrLGQsMCk7YltiLmxlbmd0aF09aztyZXR1cm59fXJldHVybiFjJiZrfWZ1bmN0aW9uIHRhKGEsYixjKXthPTE9PT1hLmxlbmd0aD9hWzBdOltdLmNvbmNhdC5hcHBseShbXSxhKTtyZXR1cm4gY3x8YS5sZW5ndGg+Yj9hLnNsaWNlKGMsYytiKTphfVxyXG5mdW5jdGlvbiB1YShhLGIsYyxkKXtjPyhkPWQmJmI+YyxhPShhPWFbZD9iOmNdKSYmYVtkP2M6Yl0pOmE9YVtiXTtyZXR1cm4gYX10LmNvbnRhaW49ZnVuY3Rpb24oYSl7cmV0dXJuISF0aGlzLnJlZ2lzdGVyW2FdfTt0LnVwZGF0ZT1mdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLnJlbW92ZShhKS5hZGQoYSxiKX07XHJcbnQucmVtb3ZlPWZ1bmN0aW9uKGEsYil7Y29uc3QgYz10aGlzLnJlZ2lzdGVyW2FdO2lmKGMpe2lmKHRoaXMubSlmb3IobGV0IGQ9MCxlO2Q8Yy5sZW5ndGg7ZCsrKWU9Y1tkXSxlLnNwbGljZShlLmluZGV4T2YoYSksMSk7ZWxzZSBOKHRoaXMubWFwLGEsdGhpcy5ELHRoaXMucyksdGhpcy5kZXB0aCYmTih0aGlzLmgsYSx0aGlzLkEsdGhpcy5zKTtifHxkZWxldGUgdGhpcy5yZWdpc3RlclthXTtpZih0aGlzLmNhY2hlKXtiPXRoaXMuY2FjaGU7Zm9yKGxldCBkPTAsZSxmO2Q8Yi5oLmxlbmd0aDtkKyspZj1iLmhbZF0sZT1iLmNhY2hlW2ZdLGUuaW5jbHVkZXMoYSkmJihiLmguc3BsaWNlKGQtLSwxKSxkZWxldGUgYi5jYWNoZVtmXSl9fXJldHVybiB0aGlzfTtcclxuZnVuY3Rpb24gTihhLGIsYyxkLGUpe2xldCBmPTA7aWYoYS5jb25zdHJ1Y3Rvcj09PUFycmF5KWlmKGUpYj1hLmluZGV4T2YoYiksLTEhPT1iPzE8YS5sZW5ndGgmJihhLnNwbGljZShiLDEpLGYrKyk6ZisrO2Vsc2V7ZT1NYXRoLm1pbihhLmxlbmd0aCxjKTtmb3IobGV0IGc9MCxoO2c8ZTtnKyspaWYoaD1hW2ddKWY9TihoLGIsYyxkLGUpLGR8fGZ8fGRlbGV0ZSBhW2ddfWVsc2UgZm9yKGxldCBnIGluIGEpKGY9TihhW2ddLGIsYyxkLGUpKXx8ZGVsZXRlIGFbZ107cmV0dXJuIGZ9dC5zZWFyY2hDYWNoZT1vYTtcclxudC5leHBvcnQ9ZnVuY3Rpb24oYSxiLGMsZCxlKXtsZXQgZixnO3N3aXRjaChlfHwoZT0wKSl7Y2FzZSAwOmY9XCJyZWdcIjtpZih0aGlzLm0pe2c9digpO2ZvcihsZXQgaCBpbiB0aGlzLnJlZ2lzdGVyKWdbaF09MX1lbHNlIGc9dGhpcy5yZWdpc3RlcjticmVhaztjYXNlIDE6Zj1cImNmZ1wiO2c9e2RvYzowLG9wdDp0aGlzLnM/MTowfTticmVhaztjYXNlIDI6Zj1cIm1hcFwiO2c9dGhpcy5tYXA7YnJlYWs7Y2FzZSAzOmY9XCJjdHhcIjtnPXRoaXMuaDticmVhaztkZWZhdWx0OnJldHVybn1yYShhLGJ8fHRoaXMsYyxmLGQsZSxnKTtyZXR1cm4hMH07dC5pbXBvcnQ9ZnVuY3Rpb24oYSxiKXtpZihiKXN3aXRjaCh4KGIpJiYoYj1KU09OLnBhcnNlKGIpKSxhKXtjYXNlIFwiY2ZnXCI6dGhpcy5zPSEhYi5vcHQ7YnJlYWs7Y2FzZSBcInJlZ1wiOnRoaXMubT0hMTt0aGlzLnJlZ2lzdGVyPWI7YnJlYWs7Y2FzZSBcIm1hcFwiOnRoaXMubWFwPWI7YnJlYWs7Y2FzZSBcImN0eFwiOnRoaXMuaD1ifX07bGEoSy5wcm90b3R5cGUpO2Z1bmN0aW9uIHZhKGEpe2E9YS5kYXRhO3ZhciBiPXNlbGYuX2luZGV4O2NvbnN0IGM9YS5hcmdzO3ZhciBkPWEudGFzaztzd2l0Y2goZCl7Y2FzZSBcImluaXRcIjpkPWEub3B0aW9uc3x8e307YT1hLmZhY3Rvcnk7Yj1kLmVuY29kZTtkLmNhY2hlPSExO2ImJjA9PT1iLmluZGV4T2YoXCJmdW5jdGlvblwiKSYmKGQuZW5jb2RlPUZ1bmN0aW9uKFwicmV0dXJuIFwiK2IpKCkpO2E/KEZ1bmN0aW9uKFwicmV0dXJuIFwiK2EpKCkoc2VsZiksc2VsZi5faW5kZXg9bmV3IHNlbGYuRmxleFNlYXJjaC5JbmRleChkKSxkZWxldGUgc2VsZi5GbGV4U2VhcmNoKTpzZWxmLl9pbmRleD1uZXcgSyhkKTticmVhaztkZWZhdWx0OmE9YS5pZCxiPWJbZF0uYXBwbHkoYixjKSxwb3N0TWVzc2FnZShcInNlYXJjaFwiPT09ZD97aWQ6YSxtc2c6Yn06e2lkOmF9KX19O2xldCB3YT0wO2Z1bmN0aW9uIE8oYSl7aWYoISh0aGlzIGluc3RhbmNlb2YgTykpcmV0dXJuIG5ldyBPKGEpO3ZhciBiO2E/RChiPWEuZW5jb2RlKSYmKGEuZW5jb2RlPWIudG9TdHJpbmcoKSk6YT17fTsoYj0oc2VsZnx8d2luZG93KS5fZmFjdG9yeSkmJihiPWIudG9TdHJpbmcoKSk7Y29uc3QgYz1cInVuZGVmaW5lZFwiPT09dHlwZW9mIHdpbmRvdyYmc2VsZi5leHBvcnRzLGQ9dGhpczt0aGlzLm89eGEoYixjLGEud29ya2VyKTt0aGlzLmg9digpO2lmKHRoaXMubyl7aWYoYyl0aGlzLm8ub24oXCJtZXNzYWdlXCIsZnVuY3Rpb24oZSl7ZC5oW2UuaWRdKGUubXNnKTtkZWxldGUgZC5oW2UuaWRdfSk7ZWxzZSB0aGlzLm8ub25tZXNzYWdlPWZ1bmN0aW9uKGUpe2U9ZS5kYXRhO2QuaFtlLmlkXShlLm1zZyk7ZGVsZXRlIGQuaFtlLmlkXX07dGhpcy5vLnBvc3RNZXNzYWdlKHt0YXNrOlwiaW5pdFwiLGZhY3Rvcnk6YixvcHRpb25zOmF9KX19UChcImFkZFwiKTtQKFwiYXBwZW5kXCIpO1AoXCJzZWFyY2hcIik7XHJcblAoXCJ1cGRhdGVcIik7UChcInJlbW92ZVwiKTtmdW5jdGlvbiBQKGEpe08ucHJvdG90eXBlW2FdPU8ucHJvdG90eXBlW2ErXCJBc3luY1wiXT1mdW5jdGlvbigpe2NvbnN0IGI9dGhpcyxjPVtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTt2YXIgZD1jW2MubGVuZ3RoLTFdO2xldCBlO0QoZCkmJihlPWQsYy5zcGxpY2UoYy5sZW5ndGgtMSwxKSk7ZD1uZXcgUHJvbWlzZShmdW5jdGlvbihmKXtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Yi5oWysrd2FdPWY7Yi5vLnBvc3RNZXNzYWdlKHt0YXNrOmEsaWQ6d2EsYXJnczpjfSl9KX0pO3JldHVybiBlPyhkLnRoZW4oZSksdGhpcyk6ZH19XHJcbmZ1bmN0aW9uIHhhKGEsYixjKXtsZXQgZDt0cnl7ZD1iP2V2YWwoJ25ldyAocmVxdWlyZShcIndvcmtlcl90aHJlYWRzXCIpW1wiV29ya2VyXCJdKShcIi4uL2Rpc3Qvbm9kZS9ub2RlLmpzXCIpJyk6YT9uZXcgV29ya2VyKFVSTC5jcmVhdGVPYmplY3RVUkwobmV3IEJsb2IoW1wib25tZXNzYWdlPVwiK3ZhLnRvU3RyaW5nKCldLHt0eXBlOlwidGV4dC9qYXZhc2NyaXB0XCJ9KSkpOm5ldyBXb3JrZXIoeChjKT9jOlwid29ya2VyL3dvcmtlci5qc1wiLHt0eXBlOlwibW9kdWxlXCJ9KX1jYXRjaChlKXt9cmV0dXJuIGR9O2Z1bmN0aW9uIFEoYSl7aWYoISh0aGlzIGluc3RhbmNlb2YgUSkpcmV0dXJuIG5ldyBRKGEpO3ZhciBiPWEuZG9jdW1lbnR8fGEuZG9jfHxhLGM7dGhpcy5LPVtdO3RoaXMuaD1bXTt0aGlzLkE9W107dGhpcy5yZWdpc3Rlcj12KCk7dGhpcy5rZXk9KGM9Yi5rZXl8fGIuaWQpJiZTKGMsdGhpcy5BKXx8XCJpZFwiO3RoaXMubT11KGEuZmFzdHVwZGF0ZSk7dGhpcy5DPShjPWIuc3RvcmUpJiYhMCE9PWMmJltdO3RoaXMuc3RvcmU9YyYmdigpO3RoaXMuST0oYz1iLnRhZykmJlMoYyx0aGlzLkEpO3RoaXMubD1jJiZ2KCk7dGhpcy5jYWNoZT0oYz1hLmNhY2hlKSYmbmV3IEooYyk7YS5jYWNoZT0hMTt0aGlzLm89YS53b3JrZXI7dGhpcy5hc3luYz0hMTtjPXYoKTtsZXQgZD1iLmluZGV4fHxiLmZpZWxkfHxiO3goZCkmJihkPVtkXSk7Zm9yKGxldCBlPTAsZixnO2U8ZC5sZW5ndGg7ZSsrKWY9ZFtlXSx4KGYpfHwoZz1mLGY9Zi5maWVsZCksZz1DKGcpP09iamVjdC5hc3NpZ24oe30sYSxnKTphLFxyXG50aGlzLm8mJihjW2ZdPW5ldyBPKGcpLGNbZl0ub3x8KHRoaXMubz0hMSkpLHRoaXMub3x8KGNbZl09bmV3IEsoZyx0aGlzLnJlZ2lzdGVyKSksdGhpcy5LW2VdPVMoZix0aGlzLkEpLHRoaXMuaFtlXT1mO2lmKHRoaXMuQylmb3IoYT1iLnN0b3JlLHgoYSkmJihhPVthXSksYj0wO2I8YS5sZW5ndGg7YisrKXRoaXMuQ1tiXT1TKGFbYl0sdGhpcy5BKTt0aGlzLmluZGV4PWN9ZnVuY3Rpb24gUyhhLGIpe2NvbnN0IGM9YS5zcGxpdChcIjpcIik7bGV0IGQ9MDtmb3IobGV0IGU9MDtlPGMubGVuZ3RoO2UrKylhPWNbZV0sMDw9YS5pbmRleE9mKFwiW11cIikmJihhPWEuc3Vic3RyaW5nKDAsYS5sZW5ndGgtMikpJiYoYltkXT0hMCksYSYmKGNbZCsrXT1hKTtkPGMubGVuZ3RoJiYoYy5sZW5ndGg9ZCk7cmV0dXJuIDE8ZD9jOmNbMF19ZnVuY3Rpb24gVChhLGIpe2lmKHgoYikpYT1hW2JdO2Vsc2UgZm9yKGxldCBjPTA7YSYmYzxiLmxlbmd0aDtjKyspYT1hW2JbY11dO3JldHVybiBhfVxyXG5mdW5jdGlvbiBVKGEsYixjLGQsZSl7YT1hW2VdO2lmKGQ9PT1jLmxlbmd0aC0xKWJbZV09YTtlbHNlIGlmKGEpaWYoYS5jb25zdHJ1Y3Rvcj09PUFycmF5KWZvcihiPWJbZV09QXJyYXkoYS5sZW5ndGgpLGU9MDtlPGEubGVuZ3RoO2UrKylVKGEsYixjLGQsZSk7ZWxzZSBiPWJbZV18fChiW2VdPXYoKSksZT1jWysrZF0sVShhLGIsYyxkLGUpfWZ1bmN0aW9uIFYoYSxiLGMsZCxlLGYsZyxoKXtpZihhPWFbZ10paWYoZD09PWIubGVuZ3RoLTEpe2lmKGEuY29uc3RydWN0b3I9PT1BcnJheSl7aWYoY1tkXSl7Zm9yKGI9MDtiPGEubGVuZ3RoO2IrKyllLmFkZChmLGFbYl0sITAsITApO3JldHVybn1hPWEuam9pbihcIiBcIil9ZS5hZGQoZixhLGgsITApfWVsc2UgaWYoYS5jb25zdHJ1Y3Rvcj09PUFycmF5KWZvcihnPTA7ZzxhLmxlbmd0aDtnKyspVihhLGIsYyxkLGUsZixnLGgpO2Vsc2UgZz1iWysrZF0sVihhLGIsYyxkLGUsZixnLGgpfXQ9US5wcm90b3R5cGU7XHJcbnQuYWRkPWZ1bmN0aW9uKGEsYixjKXtDKGEpJiYoYj1hLGE9VChiLHRoaXMua2V5KSk7aWYoYiYmKGF8fDA9PT1hKSl7aWYoIWMmJnRoaXMucmVnaXN0ZXJbYV0pcmV0dXJuIHRoaXMudXBkYXRlKGEsYik7Zm9yKGxldCBkPTAsZSxmO2Q8dGhpcy5oLmxlbmd0aDtkKyspZj10aGlzLmhbZF0sZT10aGlzLktbZF0seChlKSYmKGU9W2VdKSxWKGIsZSx0aGlzLkEsMCx0aGlzLmluZGV4W2ZdLGEsZVswXSxjKTtpZih0aGlzLkkpe2xldCBkPVQoYix0aGlzLkkpLGU9digpO3goZCkmJihkPVtkXSk7Zm9yKGxldCBmPTAsZyxoO2Y8ZC5sZW5ndGg7ZisrKWlmKGc9ZFtmXSwhZVtnXSYmKGVbZ109MSxoPXRoaXMubFtnXXx8KHRoaXMubFtnXT1bXSksIWN8fCFoLmluY2x1ZGVzKGEpKSlpZihoW2gubGVuZ3RoXT1hLHRoaXMubSl7Y29uc3Qgaz10aGlzLnJlZ2lzdGVyW2FdfHwodGhpcy5yZWdpc3RlclthXT1bXSk7a1trLmxlbmd0aF09aH19aWYodGhpcy5zdG9yZSYmKCFjfHwhdGhpcy5zdG9yZVthXSkpe2xldCBkO1xyXG5pZih0aGlzLkMpe2Q9digpO2ZvcihsZXQgZT0wLGY7ZTx0aGlzLkMubGVuZ3RoO2UrKylmPXRoaXMuQ1tlXSx4KGYpP2RbZl09YltmXTpVKGIsZCxmLDAsZlswXSl9dGhpcy5zdG9yZVthXT1kfHxifX1yZXR1cm4gdGhpc307dC5hcHBlbmQ9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5hZGQoYSxiLCEwKX07dC51cGRhdGU9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5yZW1vdmUoYSkuYWRkKGEsYil9O1xyXG50LnJlbW92ZT1mdW5jdGlvbihhKXtDKGEpJiYoYT1UKGEsdGhpcy5rZXkpKTtpZih0aGlzLnJlZ2lzdGVyW2FdKXtmb3IodmFyIGI9MDtiPHRoaXMuaC5sZW5ndGgmJih0aGlzLmluZGV4W3RoaXMuaFtiXV0ucmVtb3ZlKGEsIXRoaXMubyksIXRoaXMubSk7YisrKTtpZih0aGlzLkkmJiF0aGlzLm0pZm9yKGxldCBjIGluIHRoaXMubCl7Yj10aGlzLmxbY107Y29uc3QgZD1iLmluZGV4T2YoYSk7LTEhPT1kJiYoMTxiLmxlbmd0aD9iLnNwbGljZShkLDEpOmRlbGV0ZSB0aGlzLmxbY10pfXRoaXMuc3RvcmUmJmRlbGV0ZSB0aGlzLnN0b3JlW2FdO2RlbGV0ZSB0aGlzLnJlZ2lzdGVyW2FdfXJldHVybiB0aGlzfTtcclxudC5zZWFyY2g9ZnVuY3Rpb24oYSxiLGMsZCl7Y3x8KCFiJiZDKGEpPyhjPWEsYT1cIlwiKTpDKGIpJiYoYz1iLGI9MCkpO2xldCBlPVtdLGY9W10sZyxoLGssbSxuLHcscT0wO2lmKGMpaWYoYy5jb25zdHJ1Y3Rvcj09PUFycmF5KWs9YyxjPW51bGw7ZWxzZXthPWMucXVlcnl8fGE7az0oZz1jLnBsdWNrKXx8Yy5pbmRleHx8Yy5maWVsZDttPWMudGFnO2g9dGhpcy5zdG9yZSYmYy5lbnJpY2g7bj1cImFuZFwiPT09Yy5ib29sO2I9Yy5saW1pdHx8Ynx8MTAwO3c9Yy5vZmZzZXR8fDA7aWYobSYmKHgobSkmJihtPVttXSksIWEpKXtmb3IobGV0IGw9MCxwO2w8bS5sZW5ndGg7bCsrKWlmKHA9eWEuY2FsbCh0aGlzLG1bbF0sYix3LGgpKWVbZS5sZW5ndGhdPXAscSsrO3JldHVybiBxP2U6W119eChrKSYmKGs9W2tdKX1rfHwoaz10aGlzLmgpO249biYmKDE8ay5sZW5ndGh8fG0mJjE8bS5sZW5ndGgpO2NvbnN0IHI9IWQmJih0aGlzLm98fHRoaXMuYXN5bmMpJiZbXTtmb3IobGV0IGw9MCxwLHosQjtsPFxyXG5rLmxlbmd0aDtsKyspe2xldCBBO3o9a1tsXTt4KHopfHwoQT16LHo9QS5maWVsZCxhPUEucXVlcnl8fGEsYj1BLmxpbWl0fHxiKTtpZihyKXJbbF09dGhpcy5pbmRleFt6XS5zZWFyY2hBc3luYyhhLGIsQXx8Yyk7ZWxzZXtkP3A9ZFtsXTpwPXRoaXMuaW5kZXhbel0uc2VhcmNoKGEsYixBfHxjKTtCPXAmJnAubGVuZ3RoO2lmKG0mJkIpe2NvbnN0IHk9W107bGV0IEg9MDtuJiYoeVswXT1bcF0pO2ZvcihsZXQgWD0wLHBhLFI7WDxtLmxlbmd0aDtYKyspaWYocGE9bVtYXSxCPShSPXRoaXMubFtwYV0pJiZSLmxlbmd0aClIKysseVt5Lmxlbmd0aF09bj9bUl06UjtIJiYocD1uP21hKHksYnx8MTAwLHd8fDApOm5hKHAseSksQj1wLmxlbmd0aCl9aWYoQilmW3FdPXosZVtxKytdPXA7ZWxzZSBpZihuKXJldHVybltdfX1pZihyKXtjb25zdCBsPXRoaXM7cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHApe1Byb21pc2UuYWxsKHIpLnRoZW4oZnVuY3Rpb24oeil7cChsLnNlYXJjaChhLGIsXHJcbmMseikpfSl9KX1pZighcSlyZXR1cm5bXTtpZihnJiYoIWh8fCF0aGlzLnN0b3JlKSlyZXR1cm4gZVswXTtmb3IobGV0IGw9MCxwO2w8Zi5sZW5ndGg7bCsrKXtwPWVbbF07cC5sZW5ndGgmJmgmJihwPXphLmNhbGwodGhpcyxwKSk7aWYoZylyZXR1cm4gcDtlW2xdPXtmaWVsZDpmW2xdLHJlc3VsdDpwfX1yZXR1cm4gZX07ZnVuY3Rpb24geWEoYSxiLGMsZCl7bGV0IGU9dGhpcy5sW2FdLGY9ZSYmZS5sZW5ndGgtYztpZihmJiYwPGYpe2lmKGY+Ynx8YyllPWUuc2xpY2UoYyxjK2IpO2QmJihlPXphLmNhbGwodGhpcyxlKSk7cmV0dXJue3RhZzphLHJlc3VsdDplfX19ZnVuY3Rpb24gemEoYSl7Y29uc3QgYj1BcnJheShhLmxlbmd0aCk7Zm9yKGxldCBjPTAsZDtjPGEubGVuZ3RoO2MrKylkPWFbY10sYltjXT17aWQ6ZCxkb2M6dGhpcy5zdG9yZVtkXX07cmV0dXJuIGJ9dC5jb250YWluPWZ1bmN0aW9uKGEpe3JldHVybiEhdGhpcy5yZWdpc3RlclthXX07dC5nZXQ9ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuc3RvcmVbYV19O1xyXG50LnNldD1mdW5jdGlvbihhLGIpe3RoaXMuc3RvcmVbYV09YjtyZXR1cm4gdGhpc307dC5zZWFyY2hDYWNoZT1vYTt0LmV4cG9ydD1mdW5jdGlvbihhLGIsYyxkLGUpe2V8fChlPTApO2R8fChkPTApO2lmKGQ8dGhpcy5oLmxlbmd0aCl7Y29uc3QgZj10aGlzLmhbZF0sZz10aGlzLmluZGV4W2ZdO2I9dGhpcztzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Zy5leHBvcnQoYSxiLGU/ZjpcIlwiLGQsZSsrKXx8KGQrKyxlPTEsYi5leHBvcnQoYSxiLGYsZCxlKSl9KX1lbHNle2xldCBmLGc7c3dpdGNoKGUpe2Nhc2UgMTpmPVwidGFnXCI7Zz10aGlzLmw7YnJlYWs7Y2FzZSAyOmY9XCJzdG9yZVwiO2c9dGhpcy5zdG9yZTticmVhaztkZWZhdWx0OnJldHVybn1yYShhLHRoaXMsYyxmLGQsZSxnKX19O1xyXG50LmltcG9ydD1mdW5jdGlvbihhLGIpe2lmKGIpc3dpdGNoKHgoYikmJihiPUpTT04ucGFyc2UoYikpLGEpe2Nhc2UgXCJ0YWdcIjp0aGlzLmw9YjticmVhaztjYXNlIFwicmVnXCI6dGhpcy5tPSExO3RoaXMucmVnaXN0ZXI9Yjtmb3IobGV0IGQ9MCxlO2Q8dGhpcy5oLmxlbmd0aDtkKyspZT10aGlzLmluZGV4W3RoaXMuaFtkXV0sZS5yZWdpc3Rlcj1iLGUubT0hMTticmVhaztjYXNlIFwic3RvcmVcIjp0aGlzLnN0b3JlPWI7YnJlYWs7ZGVmYXVsdDphPWEuc3BsaXQoXCIuXCIpO2NvbnN0IGM9YVswXTthPWFbMV07YyYmYSYmdGhpcy5pbmRleFtjXS5pbXBvcnQoYSxiKX19O2xhKFEucHJvdG90eXBlKTt2YXIgQmE9e2VuY29kZTpBYSxGOiExLEc6XCJcIn07Y29uc3QgQ2E9W0YoXCJbXFx1MDBlMFxcdTAwZTFcXHUwMGUyXFx1MDBlM1xcdTAwZTRcXHUwMGU1XVwiKSxcImFcIixGKFwiW1xcdTAwZThcXHUwMGU5XFx1MDBlYVxcdTAwZWJdXCIpLFwiZVwiLEYoXCJbXFx1MDBlY1xcdTAwZWRcXHUwMGVlXFx1MDBlZl1cIiksXCJpXCIsRihcIltcXHUwMGYyXFx1MDBmM1xcdTAwZjRcXHUwMGY1XFx1MDBmNlxcdTAxNTFdXCIpLFwib1wiLEYoXCJbXFx1MDBmOVxcdTAwZmFcXHUwMGZiXFx1MDBmY1xcdTAxNzFdXCIpLFwidVwiLEYoXCJbXFx1MDBmZFxcdTAxNzdcXHUwMGZmXVwiKSxcInlcIixGKFwiXFx1MDBmMVwiKSxcIm5cIixGKFwiW1xcdTAwZTdjXVwiKSxcImtcIixGKFwiXFx1MDBkZlwiKSxcInNcIixGKFwiICYgXCIpLFwiIGFuZCBcIl07ZnVuY3Rpb24gQWEoYSl7dmFyIGI9YT1cIlwiK2E7Yi5ub3JtYWxpemUmJihiPWIubm9ybWFsaXplKFwiTkZEXCIpLnJlcGxhY2UoZWEsXCJcIikpO3JldHVybiBjYS5jYWxsKHRoaXMsYi50b0xvd2VyQ2FzZSgpLCFhLm5vcm1hbGl6ZSYmQ2EpfTt2YXIgRWE9e2VuY29kZTpEYSxGOiExLEc6XCJzdHJpY3RcIn07Y29uc3QgRmE9L1teYS16MC05XSsvLEdhPXtiOlwicFwiLHY6XCJmXCIsdzpcImZcIix6Olwic1wiLHg6XCJzXCIsXCJcXHUwMGRmXCI6XCJzXCIsZDpcInRcIixuOlwibVwiLGM6XCJrXCIsZzpcImtcIixqOlwia1wiLHE6XCJrXCIsaTpcImVcIix5OlwiZVwiLHU6XCJvXCJ9O2Z1bmN0aW9uIERhKGEpe2E9QWEuY2FsbCh0aGlzLGEpLmpvaW4oXCIgXCIpO2NvbnN0IGI9W107aWYoYSl7Y29uc3QgYz1hLnNwbGl0KEZhKSxkPWMubGVuZ3RoO2ZvcihsZXQgZT0wLGYsZz0wO2U8ZDtlKyspaWYoKGE9Y1tlXSkmJighdGhpcy5maWx0ZXJ8fCF0aGlzLmZpbHRlclthXSkpe2Y9YVswXTtsZXQgaD1HYVtmXXx8ZixrPWg7Zm9yKGxldCBtPTE7bTxhLmxlbmd0aDttKyspe2Y9YVttXTtjb25zdCBuPUdhW2ZdfHxmO24mJm4hPT1rJiYoaCs9bixrPW4pfWJbZysrXT1ofX1yZXR1cm4gYn07dmFyIElhPXtlbmNvZGU6SGEsRjohMSxHOlwiXCJ9O2NvbnN0IEphPVtGKFwiYWVcIiksXCJhXCIsRihcIm9lXCIpLFwib1wiLEYoXCJzaFwiKSxcInNcIixGKFwidGhcIiksXCJ0XCIsRihcInBoXCIpLFwiZlwiLEYoXCJwZlwiKSxcImZcIixGKFwiKD8hW2Flb10paCg/IVthZW9dKVwiKSxcIlwiLEYoXCIoPyFeW2Flb10paCg/IV5bYWVvXSlcIiksXCJcIl07ZnVuY3Rpb24gSGEoYSxiKXthJiYoYT1EYS5jYWxsKHRoaXMsYSkuam9pbihcIiBcIiksMjxhLmxlbmd0aCYmKGE9RShhLEphKSksYnx8KDE8YS5sZW5ndGgmJihhPWhhKGEpKSxhJiYoYT1hLnNwbGl0KFwiIFwiKSkpKTtyZXR1cm4gYXx8W119O3ZhciBMYT17ZW5jb2RlOkthLEY6ITEsRzpcIlwifTtjb25zdCBNYT1GKFwiKD8hXFxcXGIpW2Flb11cIik7ZnVuY3Rpb24gS2EoYSl7YSYmKGE9SGEuY2FsbCh0aGlzLGEsITApLDE8YS5sZW5ndGgmJihhPWEucmVwbGFjZShNYSxcIlwiKSksMTxhLmxlbmd0aCYmKGE9aGEoYSkpLGEmJihhPWEuc3BsaXQoXCIgXCIpKSk7cmV0dXJuIGF8fFtdfTtHW1wibGF0aW46ZGVmYXVsdFwiXT1qYTtHW1wibGF0aW46c2ltcGxlXCJdPUJhO0dbXCJsYXRpbjpiYWxhbmNlXCJdPUVhO0dbXCJsYXRpbjphZHZhbmNlZFwiXT1JYTtHW1wibGF0aW46ZXh0cmFcIl09TGE7Y29uc3QgVz1zZWxmO2xldCBZO2NvbnN0IFo9e0luZGV4OkssRG9jdW1lbnQ6USxXb3JrZXI6TyxyZWdpc3RlckNoYXJzZXQ6ZnVuY3Rpb24oYSxiKXtHW2FdPWJ9LHJlZ2lzdGVyTGFuZ3VhZ2U6ZnVuY3Rpb24oYSxiKXtrYVthXT1ifX07KFk9Vy5kZWZpbmUpJiZZLmFtZD9ZKFtdLGZ1bmN0aW9uKCl7cmV0dXJuIFp9KTpXLmV4cG9ydHM/Vy5leHBvcnRzPVo6Vy5GbGV4U2VhcmNoPVo7fSh0aGlzKSk7XHJcbiIsICIvKiFcclxuICogRmxleFNlYXJjaCBmb3IgQm9vdHN0cmFwIGJhc2VkIEh5YXMgc2l0ZXNcclxuICogQ29weXJpZ2h0IDIwMjEtMjAyMyBIeWFzXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZVxyXG4gKiBCYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZnJqby9odWdvLXRoZW1lLXplbi9ibG9iL21haW4vYXNzZXRzL2pzL3NlYXJjaC5qc1xyXG4gKi9cclxuXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmLCBndWFyZC1mb3ItaW4gKi9cclxuXHJcbi8qKlxyXG4gKiBAZmlsZVxyXG4gKiBBIEphdmFTY3JpcHQgZmlsZSBmb3IgZmxleHNlYXJjaC5cclxuICovXHJcblxyXG5pbXBvcnQgKiBhcyBGbGV4U2VhcmNoIGZyb20gJ2ZsZXhzZWFyY2gnO1xyXG5cclxuKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICBjb25zdCBpbmRleCA9IG5ldyBGbGV4U2VhcmNoLkRvY3VtZW50KHtcclxuICAgIHRva2VuaXplOiAnZm9yd2FyZCcsXHJcbiAgICBkb2N1bWVudDoge1xyXG4gICAgICBpZDogJ2lkJyxcclxuICAgICAgaW5kZXg6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBmaWVsZDogJ3RpdGxlJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZmllbGQ6ICd0YWdzJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZmllbGQ6ICdjb250ZW50J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZmllbGQ6ICAnZGF0ZScsXHJcbiAgICAgICAgICB0b2tlbml6ZTogJ3N0cmljdCcsXHJcbiAgICAgICAgICBlbmNvZGU6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICBdLFxyXG4gICAgICBzdG9yZTogWyd0aXRsZScsJ3N1bW1hcnknLCdkYXRlJywncGVybWFsaW5rJ11cclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgZnVuY3Rpb24gc2hvd1Jlc3VsdHMoaXRlbXMpIHtcclxuICAgIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndGVtcGxhdGUnKS5jb250ZW50O1xyXG4gICAgY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcblxyXG4gICAgY29uc3QgcmVzdWx0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtcmVzdWx0cycpO1xyXG4gICAgcmVzdWx0cy50ZXh0Q29udGVudCA9ICcnO1xyXG5cclxuICAgIGNvbnN0IGl0ZW1zTGVuZ3RoID0gT2JqZWN0LmtleXMoaXRlbXMpLmxlbmd0aDtcclxuXHJcbiAgICAvLyBTaG93L2hpZGUgXCJObyByZWNlbnQgc2VhcmNoZXNcIiBhbmQgXCJObyBzZWFyY2ggcmVzdWx0c1wiIG1lc3NhZ2VzXHJcbiAgICBpZiAoKGl0ZW1zTGVuZ3RoID09PSAwKSAmJiAocXVlcnkudmFsdWUgPT09ICcnKSkge1xyXG4gICAgICAvLyBIaWRlIFwiTm8gc2VhcmNoIHJlc3VsdHNcIiBtZXNzYWdlXHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtbm8tcmVzdWx0cycpLmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xyXG4gICAgICAvLyBTaG93IFwiTm8gcmVjZW50IHNlYXJjaGVzXCIgbWVzc2FnZVxyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLW5vLXJlY2VudCcpLmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xyXG4gICAgfSBlbHNlIGlmICgoaXRlbXNMZW5ndGggPT09IDApICYmIChxdWVyeS52YWx1ZSAhPT0gJycpKSB7XHJcbiAgICAgIC8vIEhpZGUgXCJObyByZWNlbnQgc2VhcmNoZXNcIiBtZXNzYWdlXHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtbm8tcmVjZW50JykuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XHJcbiAgICAgIC8vIFNob3cgXCJObyBzZWFyY2ggcmVzdWx0c1wiIG1lc3NhZ2VcclxuICAgICAgY29uc3QgcXVlcnlOb1Jlc3VsdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucXVlcnktbm8tcmVzdWx0cycpO1xyXG4gICAgICBxdWVyeU5vUmVzdWx0cy5pbm5lclRleHQgPSBxdWVyeS52YWx1ZTtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1uby1yZXN1bHRzJykuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBIaWRlIGJvdGggXCJObyByZWNlbnQgc2VhcmNoZXNcIiBhbmQgXCJObyBzZWFyY2ggcmVzdWx0c1wiIG1lc3NhZ2VzXHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtbm8tcmVjZW50JykuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtbm8tcmVzdWx0cycpLmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAoY29uc3QgaWQgaW4gaXRlbXMpIHtcclxuICAgICAgY29uc3QgaXRlbSA9IGl0ZW1zW2lkXTtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gdGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgICBjb25zdCBhID0gcmVzdWx0LnF1ZXJ5U2VsZWN0b3IoJ2EnKTtcclxuICAgICAgY29uc3QgdGltZSA9IHJlc3VsdC5xdWVyeVNlbGVjdG9yKCd0aW1lJyk7XHJcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSByZXN1bHQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcclxuICAgICAgYS5pbm5lckhUTUwgPSBpdGVtLnRpdGxlO1xyXG4gICAgICBhLmhyZWYgPSBpdGVtLnBlcm1hbGluaztcclxuICAgICAgdGltZS5pbm5lclRleHQgPSBpdGVtLmRhdGU7XHJcbiAgICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gaXRlbS5zdW1tYXJ5O1xyXG4gICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChyZXN1bHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc3VsdHMuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZG9TZWFyY2goKSB7XHJcbiAgICBjb25zdCBxdWVyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtdGV4dCcpLnZhbHVlLnRyaW0oKTtcclxuICAgIGNvbnN0IGxpbWl0ID0gOTk7XHJcbiAgICBjb25zdCByZXN1bHRzID0gaW5kZXguc2VhcmNoKHtcclxuICAgICAgcXVlcnk6IHF1ZXJ5LFxyXG4gICAgICBlbnJpY2g6IHRydWUsXHJcbiAgICAgIGxpbWl0OiBsaW1pdCxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgaXRlbXMgPSB7fTtcclxuXHJcbiAgICByZXN1bHRzLmZvckVhY2goZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICByZXN1bHQucmVzdWx0LmZvckVhY2goZnVuY3Rpb24gKHIpIHtcclxuICAgICAgICBpdGVtc1tyLmlkXSA9IHIuZG9jO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHNob3dSZXN1bHRzKGl0ZW1zKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGVuYWJsZVVJKCkge1xyXG4gICAgY29uc3Qgc2VhcmNoZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtZm9ybScpO1xyXG4gICAgc2VhcmNoZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGRvU2VhcmNoKCk7XHJcbiAgICB9KTtcclxuICAgIHNlYXJjaGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGRvU2VhcmNoKCk7XHJcbiAgICB9KTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtbG9hZGluZycpLmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1pbnB1dCcpLmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC10ZXh0JykuZm9jdXMoKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGJ1aWxkSW5kZXgoKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWxvYWRpbmcnKS5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcclxuICAgIGZldGNoKFwiL3NlYXJjaC1pbmRleC5qc29uXCIpXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgZGF0YS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICBpbmRleC5hZGQoaXRlbSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYnVpbGRJbmRleCgpO1xyXG4gIGVuYWJsZVVJKCk7XHJcbn0pKCk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBT0EsT0FBQyxTQUFTLEdBQUcsTUFBSztBQUFDO0FBQWEsWUFBRztBQUFDLGNBQUcsT0FBTyxRQUFLO0FBQUEsUUFBTSxTQUFPLEdBQUU7QUFBQSxRQUFDO0FBQUMsYUFBSyxXQUFTO0FBQUcsWUFBSTtBQUFFLGlCQUFTLEVBQUVBLElBQUU7QUFBQyxpQkFBTSxnQkFBYyxPQUFPQSxLQUFFQSxLQUFFO0FBQUEsUUFBRTtBQUFDLGlCQUFTLEdBQUdBLElBQUU7QUFBQyxnQkFBTUMsS0FBRSxNQUFNRCxFQUFDO0FBQUUsbUJBQVFFLEtBQUUsR0FBRUEsS0FBRUYsSUFBRUUsS0FBSSxDQUFBRCxHQUFFQyxFQUFDLElBQUUsRUFBRTtBQUFFLGlCQUFPRDtBQUFBLFFBQUM7QUFBQyxpQkFBUyxJQUFHO0FBQUMsaUJBQU8sdUJBQU8sT0FBTyxJQUFJO0FBQUEsUUFBQztBQUFDLGlCQUFTLEdBQUdELElBQUVDLElBQUU7QUFBQyxpQkFBT0EsR0FBRSxT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QUUsY0FBWTtBQUFFLGVBQUssSUFBRSxJQUFFLEdBQUcsQ0FBQyxJQUFFLEVBQUU7QUFBRSxlQUFLLElBQUVFLE1BQUdBLEdBQUUsS0FBR0YsR0FBRTtBQUFJLGVBQUssS0FBR0MsS0FBRUQsR0FBRSxXQUFTRyxNQUFHQSxHQUFFLE1BQUksR0FBR0YsSUFBRSxLQUFFO0FBQUUsZUFBSyxLQUFHQSxLQUFFRCxHQUFFLFdBQVNHLE1BQUdBLEdBQUUsTUFBSSxHQUFHRixJQUFFLElBQUU7QUFBRSxjQUFHQyxLQUFFRCxLQUFFRCxHQUFFLFVBQVFHLE1BQUdBLEdBQUUsUUFBTztBQUFDLFlBQUFELEtBQUVEO0FBQUUsWUFBQUUsS0FBRSxFQUFFO0FBQUUscUJBQVEsSUFBRSxHQUFFLElBQUVELEdBQUUsUUFBTyxJQUFFLEdBQUUsSUFBSSxDQUFBQyxHQUFFRCxHQUFFLENBQUMsQ0FBQyxJQUFFO0FBQUUsWUFBQUEsS0FBRUM7QUFBQSxVQUFDO0FBQUMsZUFBSyxTQUFPRDtBQUFFLGVBQUssU0FBT0QsS0FBRUQsR0FBRSxVQUFRLElBQUksRUFBRUMsRUFBQztBQUFBLFFBQUM7QUFBQyxZQUFFLEVBQUU7QUFBVSxVQUFFLFNBQU8sU0FBU0QsSUFBRUMsSUFBRTtBQUFDLGlCQUFPLEtBQUssSUFBSUQsSUFBRUMsSUFBRSxJQUFFO0FBQUEsUUFBQztBQUM1VyxVQUFFLE1BQUksU0FBU0QsSUFBRUMsSUFBRUMsSUFBRUMsSUFBRTtBQUFDLGNBQUdGLE9BQUlELE1BQUcsTUFBSUEsS0FBRztBQUFDLGdCQUFHLENBQUNHLE1BQUcsQ0FBQ0QsTUFBRyxLQUFLLFNBQVNGLEVBQUMsRUFBRSxRQUFPLEtBQUssT0FBT0EsSUFBRUMsRUFBQztBQUFFLFlBQUFBLEtBQUUsS0FBSyxPQUFPQSxFQUFDO0FBQUUsZ0JBQUdFLEtBQUVGLEdBQUUsUUFBTztBQUFDLG9CQUFNLElBQUUsRUFBRSxHQUFFLElBQUUsRUFBRSxHQUFFLElBQUUsS0FBSyxPQUFNLElBQUUsS0FBSztBQUFFLHVCQUFRLElBQUUsR0FBRSxJQUFFRSxJQUFF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VUFBQztBQUFDLGlCQUFNLENBQUNDLE1BQUc7QUFBQSxRQUFDO0FBQUMsaUJBQVMsR0FBR0YsSUFBRUMsSUFBRUMsSUFBRTtBQUFDLFVBQUFGLEtBQUUsTUFBSUEsR0FBRSxTQUFPQSxHQUFFLENBQUMsSUFBRSxDQUFDLEVBQUUsT0FBTyxNQUFNLENBQUMsR0FBRUEsRUFBQztBQUFFLGlCQUFPRSxNQUFHRixHQUFFLFNBQU9DLEtBQUVELEdBQUUsTUFBTUUsSUFBRUEsS0FBRUQsRUFBQyxJQUFFRDtBQUFBLFFBQUM7QUFDcGMsaUJBQVMsR0FBR0EsSUFBRUMsSUFBRUMsSUFBRUMsSUFBRTtBQUFDLFVBQUFELE1BQUdDLEtBQUVBLE1BQUdGLEtBQUVDLElBQUVGLE1BQUdBLEtBQUVBLEdBQUVHLEtBQUVGLEtBQUVDLEVBQUMsTUFBSUYsR0FBRUcsS0FBRUQsS0FBRUQsRUFBQyxLQUFHRCxLQUFFQSxHQUFFQyxFQUFDO0FBQUUsaUJBQU9EO0FBQUEsUUFBQztBQUFDLFVBQUUsVUFBUSxTQUFTQSxJQUFFO0FBQUMsaUJBQU0sQ0FBQyxDQUFDLEtBQUssU0FBU0EsRUFBQztBQUFBLFFBQUM7QUFBRSxVQUFFLFNBQU8sU0FBU0EsSUFBRUMsSUFBRTtBQUFDLGlCQUFPLEtBQUssT0FBT0QsRUFBQyxFQUFFLElBQUlBLElBQUVDLEVBQUM7QUFBQSxRQUFDO0FBQ2hMLFVBQUUsU0FBTyxTQUFTRCxJQUFFQyxJQUFFO0FBQUMsZ0JBQU1DLEtBQUUsS0FBSyxTQUFTRixFQUFDO0FBQUUsY0FBR0UsSUFBRTtBQUFDLGdCQUFHLEtBQUssRUFBRSxVQUFRQyxLQUFFLEdBQUUsR0FBRUEsS0FBRUQsR0FBRSxRQUFPQyxLQUFJLEtBQUVELEdBQUVDLEVBQUMsR0FBRSxFQUFFLE9BQU8sRUFBRSxRQUFRSCxFQUFDLEdBQUUsQ0FBQztBQUFBLGdCQUFPLEdBQUUsS0FBSyxLQUFJQSxJQUFFLEtBQUssR0FBRSxLQUFLLENBQUMsR0FBRSxLQUFLLFNBQU8sRUFBRSxLQUFLLEdBQUVBLElBQUUsS0FBSyxHQUFFLEtBQUssQ0FB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LE1BQUlBLEtBQUUsQ0FBQ0EsRUFBQztBQUFHLG1CQUFRLElBQUUsR0FBRSxHQUFFLEdBQUUsSUFBRUEsR0FBRSxRQUFPLElBQUksS0FBRUEsR0FBRSxDQUFDLEdBQUUsRUFBRSxDQUFDLE1BQUksSUFBRSxHQUFFLElBQUUsRUFBRSxRQUFPLElBQUUsRUFBRSxDQUFDLElBQUUsT0FBTyxPQUFPLENBQUMsR0FBRUgsSUFBRSxDQUFDLElBQUVBLElBQzV3QixLQUFLLE1BQUlFLEdBQUUsQ0FBQyxJQUFFLElBQUksRUFBRSxDQUFDLEdBQUVBLEdBQUUsQ0FBQyxFQUFFLE1BQUksS0FBSyxJQUFFLFNBQUssS0FBSyxNQUFJQSxHQUFFLENBQUMsSUFBRSxJQUFJLEVBQUUsR0FBRSxLQUFLLFFBQVEsSUFBRyxLQUFLLEVBQUUsQ0FBQyxJQUFFLEVBQUUsR0FBRSxLQUFLLENBQUMsR0FBRSxLQUFLLEVBQUUsQ0FBQyxJQUFFO0FBQUUsY0FBRyxLQUFLLEVBQUUsTUFBSUYsS0FBRUMsR0FBRSxPQUFNLEVBQUVELEVBQUMsTUFBSUEsS0FBRSxDQUFDQSxFQUFDLElBQUdDLEtBQUUsR0FBRUEsS0FBRUQsR0FBRSxRQUFPQyxLQUFJLE1BQUssRUFBRUEsRUFBQyxJQUFFLEVBQUVELEdBQUVDLEVBQUMsR0FBRSxLQUFLLENBQUM7QUFBRSxlQUFLLFFBQU1DO0FBQUEsUUFBQztBQUFDLGlCQUFTLEVBQUVGLElBQUVDLElBQUU7QUFBQyxnQkFBTUMsS0FBRUYsR0FBRSxNQUFNLEdBQUc7QUFBRSxjQUFJRyxLQUFFO0FBQUUsbUJBQVEsSUFBRSxHQUFFLElBQUVELEdBQUUsUUFBTyxJQUFJLENBQUFGLEtBQUVFLEdBQUUsQ0FBQyxHQUFFLEtBQUdGLEdBQUUsUUFBUSxJQUFJLE1BQUlBLEtBQUVBLEdBQUUsVUFBVSxHQUFFQSxHQUFFLFNBQU8sQ0FBQyxPQUFLQyxHQUFFRSxFQUFDLElBQUUsT0FBSUgsT0FBSUUsR0FBRUMsSUFBRyxJQUFFSDtBQUFHLFVBQUFHLEtBQUVELEdBQUUsV0FBU0EsR0FBRSxTQUFPQztBQUFHLGlCQUFPLElBQUVBLEtBQUVELEtBQUVBLEdBQUUsQ0FBQztBQUFBLFFBQUM7QUFBQyxpQkFBUyxFQUFFRixJQUFFQyxJQUFFO0FBQUMsY0FBRyxFQUFFQSxFQUFDLEVBQUUsQ0FBQUQsS0FBRUEsR0FBRUMsRUFBQztBQUFBLGNBQU8sVUFBUUMsS0FBRSxHQUFFRixNQUFHRSxLQUFFRCxHQUFFLFFBQU9DLEtBQUksQ0FBQUYsS0FBRUEsR0FBRUMsR0FBRUMsRUFBQyxDQUFDO0FBQUUsaUJBQU9GO0FBQUEsUUFBQztBQUM1ZSxpQkFBUyxFQUFFQSxJQUFFQyxJQUFFQyxJQUFFQyxJQUFFLEdBQUU7QUFBQyxVQUFBSCxLQUFFQSxHQUFFLENBQUM7QUFBRSxjQUFHRyxPQUFJRCxHQUFFLFNBQU8sRUFBRSxDQUFBRCxHQUFFLENBQUMsSUFBRUQ7QUFBQSxtQkFBVUEsR0FBRSxLQUFHQSxHQUFFLGdCQUFjLE1BQU0sTUFBSUMsS0FBRUEsR0FBRSxDQUFDLElBQUUsTUFBTUQsR0FBRSxNQUFNLEdBQUUsSUFBRSxHQUFFLElBQUVBLEdBQUUsUUFBTyxJQUFJLEdBQUVBLElBQUVDLElBQUVDLElBQUVDLElBQUUsQ0FBQztBQUFBLGNBQU8sQ0FBQUYsS0FBRUEsR0FBRSxDQUFDLE1BQUlBLEdBQUUsQ0FBQyxJQUFFLEVBQUUsSUFBRyxJQUFFQyxHQUFFLEVBQUVDLEVBQUMsR0FBRSxFQUFFSCxJQUFFQyxJQUFFQyxJQUFFQyxJQUFFLENBQUM7QUFBQSxRQUFDO0FBQUMsaUJBQVMsRUFBRUgsSUFBRUMsSUFBRUMsSUFBRUMsSUFBRSxHQUFFLEdBQUUsR0FBRSxHQUFFO0FBQUMsY0FBR0gsS0FBRUEsR0FBRSxDQUFDLEVBQUUsS0FBR0csT0FBSUYsR0FBRSxTQUFPLEdBQUU7QUFBQyxnQkFBR0QsR0FBRSxnQkFBYyxPQUFNO0FBQUMsa0JBQUdFLEdBQUVDLEVBQUMsR0FBRTtBQUFDLHFCQUFJRixLQUFFLEdBQUVBLEtBQUVELEdBQUUsUUFBT0MsS0FBSSxHQUFFLElBQUksR0FBRUQsR0FBRUMsRUFBQyxHQUFFLE1BQUcsSUFBRTtBQUFFO0FBQUEsY0FBTTtBQUFDLGNBQUFELEtBQUVBLEdBQUUsS0FBSyxHQUFHO0FBQUEsWUFBQztBQUFDLGNBQUUsSUFBSSxHQUFFQSxJQUFFLEdBQUUsSUFBRTtBQUFBLFVBQUMsV0FBU0EsR0FBRSxnQkFBYyxNQUFNLE1BQUksSUFBRSxHQUFFLElBQUVBLEdBQUUsUUFBTyxJQUFJLEdBQUVBLElBQUVDLElBQUVDLElBQUVDLElBQUUsR0FBRSxHQUFFLEdBQUUsQ0FBQztBQUFBLGNBQU8sS0FBRUYsR0FBRSxFQUFFRSxFQUFDLEdBQUUsRUFBRUgsSUFBRUMsSUFBRUMsSUFBRUMsSUFBRSxHQUFFLEdBQUUsR0FBRSxDQUFDO0FBQUEsUUFBQztBQUFDLFlBQUUsRUFBRTtBQUMzZCxVQUFFLE1BQUksU0FBU0gsSUFBRUMsSUFBRUMsSUFBRTtBQUFDLFlBQUVGLEVBQUMsTUFBSUMsS0FBRUQsSUFBRUEsS0FBRSxFQUFFQyxJQUFFLEtBQUssR0FBRztBQUFHLGNBQUdBLE9BQUlELE1BQUcsTUFBSUEsS0FBRztBQUFDLGdCQUFHLENBQUNFLE1BQUcsS0FBSyxTQUFTRixFQUFDLEVBQUUsUUFBTyxLQUFLLE9BQU9BLElBQUVDLEVBQUM7QUFBRSxxQkFBUUUsS0FBRSxHQUFFLEdBQUUsR0FBRUEsS0FBRSxLQUFLLEVBQUUsUUFBT0EsS0FBSSxLQUFFLEtBQUssRUFBRUEsRUFBQyxHQUFFLElBQUUsS0FBSyxFQUFFQSxFQUFDLEdBQUUsRUFBRSxDQUFDLE1BQUksSUFBRSxDQUFDLENBQUMsSUFBRyxFQUFFRixJQUFFLEdBQUUsS0FBSyxHQUFFLEdBQUUsS0FBSyxNQUFNLENBQUMsR0FBRUQsSUFBRSxFQUFFLENBQUMsR0FBRUUsRUFBQztBQUFFLGdCQUFHLEtBQUssR0FBRTtBQUFDLGtCQUFJQyxLQUFFLEVBQUVGLElBQUUsS0FBSyxDQUFDLEdBQUUsSUFBRSxFQUFFO0FBQUUsZ0JBQUVFLEVBQUMsTUFBSUEsS0FBRSxDQUFDQSxFQUFDO0FBQUcsdUJBQVEsSUFBRSxHQUFFLEdBQUUsR0FBRSxJQUFFQSxHQUFFLFFBQU8sSUFBSSxLQUFHLElBQUVBLEdBQUUsQ0FBQyxHQUFFLENBQUMsRUFBRSxDQUFDLE1BQUksRUFBRSxDQUFDLElBQUUsR0FBRSxJQUFFLEtBQUssRUFBRSxDQUFDLE1BQUksS0FBSyxFQUFFLENBQUMsSUFBRSxDQUFDLElBQUcsQ0FBQ0QsTUFBRyxDQUFDLEVBQUUsU0FBU0YsRUFBQztBQUFHLG9CQUFHLEVBQUUsRUFBRSxNQUFNLElBQUVBLElBQUUsS0FBSyxHQUFFO0FBQUMsd0JBQU0sSUFBRSxLQUFLLFNBQVNBLEVBQUMsTUFBSSxLQUFLLFNBQVNBLEVBQUMsSUFBRSxDQUFDO0FBQUcsb0JBQUUsRUFBRSxNQUFNLElBQUU7QUFBQSxnQkFBQztBQUFBO0FBQUEsWUFBQztBQUFDLGdCQUFHLEtBQUssVUFBUSxDQUFDRSxNQUFHLENBQUMsS0FBSyxNQUFNRixFQUFDLElBQUc7QUFBQyxrQkFBSUc7QUFDL2Ysa0JBQUcsS0FBSyxHQUFFO0FBQUMsZ0JBQUFBLEtBQUUsRUFBRTtBQUFFLHlCQUFRLElBQUUsR0FBRSxHQUFFLElBQUUsS0FBSyxFQUFFLFFBQU8sSUFBSSxLQUFFLEtBQUssRUFBRSxDQUFDLEdBQUUsRUFBRSxDQUFDLElBQUVBLEdBQUUsQ0FBQyxJQUFFRixHQUFFLENBQUMsSUFBRSxFQUFFQSxJQUFFRSxJQUFFLEdBQUUsR0FBRSxFQUFFLENBQUMsQ0FBQztBQUFBLGNBQUM7QUFBQyxtQkFBSyxNQUFNSCxFQUFDLElBQUVHLE1BQUdGO0FBQUEsWUFBQztBQUFBLFVBQUM7QUFBQyxpQkFBTztBQUFBLFFBQUk7QUFBRSxVQUFFLFNBQU8sU0FBU0QsSUFBRUMsSUFBRTtBQUFDLGlCQUFPLEtBQUssSUFBSUQsSUFBRUMsSUFBRSxJQUFFO0FBQUEsUUFBQztBQUFFLFVBQUUsU0FBTyxTQUFTRCxJQUFFQyxJQUFFO0FBQUMsaUJBQU8sS0FBSyxPQUFPRCxFQUFDLEVBQUUsSUFBSUEsSUFBRUMsRUFBQztBQUFBLFFBQUM7QUFDcE8sVUFBRSxTQUFPLFNBQVNELElBQUU7QUFBQyxZQUFFQSxFQUFDLE1BQUlBLEtBQUUsRUFBRUEsSUFBRSxLQUFLLEdBQUc7QUFBRyxjQUFHLEtBQUssU0FBU0EsRUFBQyxHQUFFO0FBQUMscUJBQVFDLEtBQUUsR0FBRUEsS0FBRSxLQUFLLEVBQUUsV0FBUyxLQUFLLE1BQU0sS0FBSyxFQUFFQSxFQUFDLENBQUMsRUFBRSxPQUFPRCxJQUFFLENBQUMsS0FBSyxDQUFDLEdBQUUsQ0FBQyxLQUFLLElBQUdDLEtBQUk7QUFBQyxnQkFBRyxLQUFLLEtBQUcsQ0FBQyxLQUFLLEVBQUUsVUFBUUMsTUFBSyxLQUFLLEdBQUU7QUFBQyxjQUFBRCxLQUFFLEtBQUssRUFBRUMsRUFBQztBQUFFLG9CQUFNQyxLQUFFRixHQUFFLFFBQVFELEVBQUM7QUFBRSxxQkFBS0csT0FBSSxJQUFFRixHQUFFLFNBQU9BLEdBQUUsT0FBT0UsSUFBRSxDQUFDLElBQUUsT0FBTyxLQUFLLEVBQUVELEVBQUM7QUFBQSxZQUFFO0FBQUMsaUJBQUssU0FBTyxPQUFPLEtBQUssTUFBTUYsRUFBQztBQUFFLG1CQUFPLEtBQUssU0FBU0EsRUFBQztBQUFBLFVBQUM7QUFBQyxpQkFBTztBQUFBLFFBQUk7QUFDdlYsVUFBRSxTQUFPLFNBQVNBLElBQUVDLElBQUVDLElBQUVDLElBQUU7QUFBQyxVQUFBRCxPQUFJLENBQUNELE1BQUcsRUFBRUQsRUFBQyxLQUFHRSxLQUFFRixJQUFFQSxLQUFFLE1BQUksRUFBRUMsRUFBQyxNQUFJQyxLQUFFRCxJQUFFQSxLQUFFO0FBQUksY0FBSSxJQUFFLENBQUMsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxJQUFFO0FBQUUsY0FBR0MsR0FBRSxLQUFHQSxHQUFFLGdCQUFjLE1BQU0sS0FBRUEsSUFBRUEsS0FBRTtBQUFBLGVBQVM7QUFBQyxZQUFBRixLQUFFRSxHQUFFLFNBQU9GO0FBQUUsaUJBQUcsSUFBRUUsR0FBRSxVQUFRQSxHQUFFLFNBQU9BLEdBQUU7QUFBTSxnQkFBRUEsR0FBRTtBQUFJLGdCQUFF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U0FBUyxTQUFTLFVBQVUsSUFBSTtBQUN0QyxjQUFNRyxLQUFJLE9BQU8sY0FBYyxHQUFHO0FBQ2xDLGNBQU0sT0FBTyxPQUFPLGNBQWMsTUFBTTtBQUN4QyxjQUFNLFVBQVUsT0FBTyxjQUFjLFVBQVU7QUFDL0MsUUFBQUEsR0FBRSxZQUFZLEtBQUs7QUFDbkIsUUFBQUEsR0FBRSxPQUFPLEtBQUs7QUFDZCxhQUFLLFlBQVksS0FBSztBQUN0QixnQkFBUSxZQUFZLEtBQUs7QUFDekIsaUJBQVMsWUFBWSxNQUFNO0FBQUEsTUFDN0I7QUFFQSxjQUFRLFlBQVksUUFBUTtBQUFBLElBQzlCO0FBRUEsYUFBUyxXQUFXO0FBQ2xCLFlBQU1DLFNBQVEsU0FBUyxjQUFjLGNBQWMsRUFBRSxNQUFNLEtBQUs7QUFDaEUsWUFBTSxRQUFRO0FBQ2QsWUFBTSxVQUFVLE1BQU0sT0FBTztBQUFBLFFBQzNCLE9BQU9BO0FBQUEsUUFDUCxRQUFRO0FBQUEsUUFDUjtBQUFBLE1BQ0YsQ0FBQztBQUNELFlBQU0sUUFBUSxDQUFDO0FBRWYsY0FBUSxRQUFRLFNBQVUsUUFBUTtBQUNoQyxlQUFPLE9BQU8sUUFBUSxTQUFVLEdBQUc7QUFDakMsZ0JBQU0sRUFBRSxFQUFFLElBQUksRUFBRTtBQUFBLFFBQ2xCLENBQUM7QUFBQSxNQUNILENBQUM7QUFFRCxrQkFBWSxLQUFLO0FBQUEsSUFDbkI7QUFFQSxhQUFTLFdBQVc7QUFDbEIsWUFBTSxhQUFhLFNBQVMsY0FBYyxjQUFjO0FBQ3hELGlCQUFXLGlCQUFpQixVQUFVLFNBQVUsR0FBRztBQUNqRCxVQUFFLGVBQWU7QUFDakIsaUJBQVM7QUFBQSxNQUNYLENBQUM7QUFDRCxpQkFBVyxpQkFBaUIsU0FBUyxXQUFZO0FBQy9DLGlCQUFTO0FBQUEsTUFDWCxDQUFDO0FBQ0QsZUFBUyxjQUFjLGlCQUFpQixFQUFFLFVBQVUsSUFBSSxRQUFRO0FBQ2hFLGVBQVMsY0FBYyxlQUFlLEVBQUUsVUFBVSxPQUFPLFFBQVE7QUFDakUsZUFBUyxjQUFjLGNBQWMsRUFBRSxNQUFNO0FBQUEsSUFDL0M7QUFFQSxhQUFTLGFBQWE7QUFDcEIsZUFBUyxjQUFjLGlCQUFpQixFQUFFLFVBQVUsT0FBTyxRQUFRO0FBQ25FLFlBQU0sb0JBQW9CLEVBQ3ZCLEtBQUssU0FBVSxVQUFVO0FBQ3hCLGVBQU8sU0FBUyxLQUFLO0FBQUEsTUFDdkIsQ0FBQyxFQUNBLEtBQUssU0FBVSxNQUFNO0FBQ3BCLGFBQUssUUFBUSxTQUFVLE1BQU07QUFDM0IsZ0JBQU0sSUFBSSxJQUFJO0FBQUEsUUFDaEIsQ0FBQztBQUFBLE1BQ0gsQ0FBQztBQUFBLElBQ0w7QUFFQSxlQUFXO0FBQ1gsYUFBUztBQUFBLEVBQ1gsR0FBRzsiLAogICJuYW1lcyI6IFsiYSIsICJiIiwgImMiLCAiZCIsICJhIiwgInF1ZXJ5Il0KfQo=
