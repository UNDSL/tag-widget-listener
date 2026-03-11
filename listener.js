var ti = { exports: {} };
/*! For license information please see index.js.LICENSE.txt */
var Qi = ti.exports, Vi;
function es() {
  return Vi || (Vi = 1, (function(Qt, Zt) {
    (function(On, en) {
      Qt.exports = en();
    })(Object(typeof self < "u" ? self : Qi), () => (() => {
      var On, en, Mi = { 911(g, z, K) {
        var je = typeof globalThis < "u" && globalThis || typeof self < "u" && self || K.g !== void 0 && K.g, Ee = (function() {
          function Ge() {
            this.fetch = !1, this.DOMException = je.DOMException;
          }
          return Ge.prototype = je, new Ge();
        })();
        (function(Ge) {
          (function(ze) {
            var Oe = Ge !== void 0 && Ge || typeof self < "u" && self || Oe !== void 0 && Oe, Se = "URLSearchParams" in Oe, Z = "Symbol" in Oe && "iterator" in Symbol, ke = "FileReader" in Oe && "Blob" in Oe && (function() {
              try {
                return new Blob(), !0;
              } catch {
                return !1;
              }
            })(), De = "FormData" in Oe, Be = "ArrayBuffer" in Oe;
            if (Be) var Ke = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"], nt = ArrayBuffer.isView || function(m) {
              return m && Ke.indexOf(Object.prototype.toString.call(m)) > -1;
            };
            function st(m) {
              if (typeof m != "string" && (m = String(m)), /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(m) || m === "") throw new TypeError('Invalid character in header field name: "' + m + '"');
              return m.toLowerCase();
            }
            function Me(m) {
              return typeof m != "string" && (m = String(m)), m;
            }
            function it(m) {
              var U = { next: function() {
                var de = m.shift();
                return { done: de === void 0, value: de };
              } };
              return Z && (U[Symbol.iterator] = function() {
                return U;
              }), U;
            }
            function Te(m) {
              this.map = {}, m instanceof Te ? m.forEach(function(U, de) {
                this.append(de, U);
              }, this) : Array.isArray(m) ? m.forEach(function(U) {
                this.append(U[0], U[1]);
              }, this) : m && Object.getOwnPropertyNames(m).forEach(function(U) {
                this.append(U, m[U]);
              }, this);
            }
            function Ce(m) {
              if (m.bodyUsed) return Promise.reject(new TypeError("Already read"));
              m.bodyUsed = !0;
            }
            function Xe(m) {
              return new Promise(function(U, de) {
                m.onload = function() {
                  U(m.result);
                }, m.onerror = function() {
                  de(m.error);
                };
              });
            }
            function ot(m) {
              var U = new FileReader(), de = Xe(U);
              return U.readAsArrayBuffer(m), de;
            }
            function Ae(m) {
              if (m.slice) return m.slice(0);
              var U = new Uint8Array(m.byteLength);
              return U.set(new Uint8Array(m)), U.buffer;
            }
            function me() {
              return this.bodyUsed = !1, this._initBody = function(m) {
                var U;
                this.bodyUsed = this.bodyUsed, this._bodyInit = m, m ? typeof m == "string" ? this._bodyText = m : ke && Blob.prototype.isPrototypeOf(m) ? this._bodyBlob = m : De && FormData.prototype.isPrototypeOf(m) ? this._bodyFormData = m : Se && URLSearchParams.prototype.isPrototypeOf(m) ? this._bodyText = m.toString() : Be && ke && (U = m) && DataView.prototype.isPrototypeOf(U) ? (this._bodyArrayBuffer = Ae(m.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : Be && (ArrayBuffer.prototype.isPrototypeOf(m) || nt(m)) ? this._bodyArrayBuffer = Ae(m) : this._bodyText = m = Object.prototype.toString.call(m) : this._bodyText = "", this.headers.get("content-type") || (typeof m == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : Se && URLSearchParams.prototype.isPrototypeOf(m) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
              }, ke && (this.blob = function() {
                var m = Ce(this);
                if (m) return m;
                if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                return Promise.resolve(new Blob([this._bodyText]));
              }, this.arrayBuffer = function() {
                return this._bodyArrayBuffer ? Ce(this) || (ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset, this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength)) : Promise.resolve(this._bodyArrayBuffer)) : this.blob().then(ot);
              }), this.text = function() {
                var m, U, de, ve = Ce(this);
                if (ve) return ve;
                if (this._bodyBlob) return m = this._bodyBlob, de = Xe(U = new FileReader()), U.readAsText(m), de;
                if (this._bodyArrayBuffer) return Promise.resolve((function(ae) {
                  for (var _ = new Uint8Array(ae), S = new Array(_.length), j = 0; j < _.length; j++) S[j] = String.fromCharCode(_[j]);
                  return S.join("");
                })(this._bodyArrayBuffer));
                if (this._bodyFormData) throw new Error("could not read FormData body as text");
                return Promise.resolve(this._bodyText);
              }, De && (this.formData = function() {
                return this.text().then(N);
              }), this.json = function() {
                return this.text().then(JSON.parse);
              }, this;
            }
            Te.prototype.append = function(m, U) {
              m = st(m), U = Me(U);
              var de = this.map[m];
              this.map[m] = de ? de + ", " + U : U;
            }, Te.prototype.delete = function(m) {
              delete this.map[st(m)];
            }, Te.prototype.get = function(m) {
              return m = st(m), this.has(m) ? this.map[m] : null;
            }, Te.prototype.has = function(m) {
              return this.map.hasOwnProperty(st(m));
            }, Te.prototype.set = function(m, U) {
              this.map[st(m)] = Me(U);
            }, Te.prototype.forEach = function(m, U) {
              for (var de in this.map) this.map.hasOwnProperty(de) && m.call(U, this.map[de], de, this);
            }, Te.prototype.keys = function() {
              var m = [];
              return this.forEach(function(U, de) {
                m.push(de);
              }), it(m);
            }, Te.prototype.values = function() {
              var m = [];
              return this.forEach(function(U) {
                m.push(U);
              }), it(m);
            }, Te.prototype.entries = function() {
              var m = [];
              return this.forEach(function(U, de) {
                m.push([de, U]);
              }), it(m);
            }, Z && (Te.prototype[Symbol.iterator] = Te.prototype.entries);
            var Pe = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
            function C(m, U) {
              if (!(this instanceof C)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
              var de, ve, ae = (U = U || {}).body;
              if (m instanceof C) {
                if (m.bodyUsed) throw new TypeError("Already read");
                this.url = m.url, this.credentials = m.credentials, U.headers || (this.headers = new Te(m.headers)), this.method = m.method, this.mode = m.mode, this.signal = m.signal, ae || m._bodyInit == null || (ae = m._bodyInit, m.bodyUsed = !0);
              } else this.url = String(m);
              if (this.credentials = U.credentials || this.credentials || "same-origin", !U.headers && this.headers || (this.headers = new Te(U.headers)), this.method = (ve = (de = U.method || this.method || "GET").toUpperCase(), Pe.indexOf(ve) > -1 ? ve : de), this.mode = U.mode || this.mode || null, this.signal = U.signal || this.signal, this.referrer = null, (this.method === "GET" || this.method === "HEAD") && ae) throw new TypeError("Body not allowed for GET or HEAD requests");
              if (this._initBody(ae), !(this.method !== "GET" && this.method !== "HEAD" || U.cache !== "no-store" && U.cache !== "no-cache")) {
                var _ = /([?&])_=[^&]*/;
                _.test(this.url) ? this.url = this.url.replace(_, "$1_=" + (/* @__PURE__ */ new Date()).getTime()) : this.url += (/\?/.test(this.url) ? "&" : "?") + "_=" + (/* @__PURE__ */ new Date()).getTime();
              }
            }
            function N(m) {
              var U = new FormData();
              return m.trim().split("&").forEach(function(de) {
                if (de) {
                  var ve = de.split("="), ae = ve.shift().replace(/\+/g, " "), _ = ve.join("=").replace(/\+/g, " ");
                  U.append(decodeURIComponent(ae), decodeURIComponent(_));
                }
              }), U;
            }
            function L(m, U) {
              if (!(this instanceof L)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
              U || (U = {}), this.type = "default", this.status = U.status === void 0 ? 200 : U.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = U.statusText === void 0 ? "" : "" + U.statusText, this.headers = new Te(U.headers), this.url = U.url || "", this._initBody(m);
            }
            C.prototype.clone = function() {
              return new C(this, { body: this._bodyInit });
            }, me.call(C.prototype), me.call(L.prototype), L.prototype.clone = function() {
              return new L(this._bodyInit, { status: this.status, statusText: this.statusText, headers: new Te(this.headers), url: this.url });
            }, L.error = function() {
              var m = new L(null, { status: 0, statusText: "" });
              return m.type = "error", m;
            };
            var A = [301, 302, 303, 307, 308];
            L.redirect = function(m, U) {
              if (A.indexOf(U) === -1) throw new RangeError("Invalid status code");
              return new L(null, { status: U, headers: { location: m } });
            }, ze.DOMException = Oe.DOMException;
            try {
              new ze.DOMException();
            } catch {
              ze.DOMException = function(U, de) {
                this.message = U, this.name = de;
                var ve = Error(U);
                this.stack = ve.stack;
              }, ze.DOMException.prototype = Object.create(Error.prototype), ze.DOMException.prototype.constructor = ze.DOMException;
            }
            function V(m, U) {
              return new Promise(function(de, ve) {
                var ae = new C(m, U);
                if (ae.signal && ae.signal.aborted) return ve(new ze.DOMException("Aborted", "AbortError"));
                var _ = new XMLHttpRequest();
                function S() {
                  _.abort();
                }
                _.onload = function() {
                  var j, Y, bt = { status: _.status, statusText: _.statusText, headers: (j = _.getAllResponseHeaders() || "", Y = new Te(), j.replace(/\r?\n[\t ]+/g, " ").split("\r").map(function(At) {
                    return At.indexOf(`
`) === 0 ? At.substr(1, At.length) : At;
                  }).forEach(function(At) {
                    var Nt = At.split(":"), _t = Nt.shift().trim();
                    if (_t) {
                      var w = Nt.join(":").trim();
                      Y.append(_t, w);
                    }
                  }), Y) };
                  bt.url = "responseURL" in _ ? _.responseURL : bt.headers.get("X-Request-URL");
                  var mt = "response" in _ ? _.response : _.responseText;
                  setTimeout(function() {
                    de(new L(mt, bt));
                  }, 0);
                }, _.onerror = function() {
                  setTimeout(function() {
                    ve(new TypeError("Network request failed"));
                  }, 0);
                }, _.ontimeout = function() {
                  setTimeout(function() {
                    ve(new TypeError("Network request failed"));
                  }, 0);
                }, _.onabort = function() {
                  setTimeout(function() {
                    ve(new ze.DOMException("Aborted", "AbortError"));
                  }, 0);
                }, _.open(ae.method, (function(j) {
                  try {
                    return j === "" && Oe.location.href ? Oe.location.href : j;
                  } catch {
                    return j;
                  }
                })(ae.url), !0), ae.credentials === "include" ? _.withCredentials = !0 : ae.credentials === "omit" && (_.withCredentials = !1), "responseType" in _ && (ke ? _.responseType = "blob" : Be && ae.headers.get("Content-Type") && ae.headers.get("Content-Type").indexOf("application/octet-stream") !== -1 && (_.responseType = "arraybuffer")), !U || typeof U.headers != "object" || U.headers instanceof Te ? ae.headers.forEach(function(j, Y) {
                  _.setRequestHeader(Y, j);
                }) : Object.getOwnPropertyNames(U.headers).forEach(function(j) {
                  _.setRequestHeader(j, Me(U.headers[j]));
                }), ae.signal && (ae.signal.addEventListener("abort", S), _.onreadystatechange = function() {
                  _.readyState === 4 && ae.signal.removeEventListener("abort", S);
                }), _.send(ae._bodyInit === void 0 ? null : ae._bodyInit);
              });
            }
            V.polyfill = !0, Oe.fetch || (Oe.fetch = V, Oe.Headers = Te, Oe.Request = C, Oe.Response = L), ze.Headers = Te, ze.Request = C, ze.Response = L, ze.fetch = V;
          })({});
        })(Ee), Ee.fetch.ponyfill = !0, delete Ee.fetch.polyfill;
        var Ve = je.fetch ? je : Ee;
        (z = Ve.fetch).default = Ve.fetch, z.fetch = Ve.fetch, z.Headers = Ve.Headers, z.Request = Ve.Request, z.Response = Ve.Response, g.exports = z;
      }, 913(g, z, K) {
        var je = K(265), Ee = K(131), Ve = K(186), Ge = K(206), ze = K(748), Oe = g.exports = function(Se, Z) {
          var ke, De, Be, Ke, nt;
          return arguments.length < 2 || typeof Se != "string" ? (Ke = Z, Z = Se, Se = null) : Ke = arguments[2], je(Se) ? (ke = ze.call(Se, "c"), De = ze.call(Se, "e"), Be = ze.call(Se, "w")) : (ke = Be = !0, De = !1), nt = { value: Z, configurable: ke, enumerable: De, writable: Be }, Ke ? Ve(Ge(Ke), nt) : nt;
        };
        Oe.gs = function(Se, Z, ke) {
          var De, Be, Ke, nt;
          return typeof Se != "string" ? (Ke = ke, ke = Z, Z = Se, Se = null) : Ke = arguments[3], je(Z) ? Ee(Z) ? je(ke) ? Ee(ke) || (Ke = ke, ke = void 0) : ke = void 0 : (Ke = Z, Z = ke = void 0) : Z = void 0, je(Se) ? (De = ze.call(Se, "c"), Be = ze.call(Se, "e")) : (De = !0, Be = !1), nt = { get: Z, set: ke, configurable: De, enumerable: Be }, Ke ? Ve(Ge(Ke), nt) : nt;
        };
      }, 441(g) {
        g.exports = function() {
        };
      }, 186(g, z, K) {
        g.exports = K(665)() ? Object.assign : K(573);
      }, 665(g) {
        g.exports = function() {
          var z, K = Object.assign;
          return typeof K == "function" && (K(z = { foo: "raz" }, { bar: "dwa" }, { trzy: "trzy" }), z.foo + z.bar + z.trzy === "razdwatrzy");
        };
      }, 573(g, z, K) {
        var je = K(555), Ee = K(856), Ve = Math.max;
        g.exports = function(Ge, ze) {
          var Oe, Se, Z, ke = Ve(arguments.length, 2);
          for (Ge = Object(Ee(Ge)), Z = function(De) {
            try {
              Ge[De] = ze[De];
            } catch (Be) {
              Oe || (Oe = Be);
            }
          }, Se = 1; Se < ke; ++Se) je(ze = arguments[Se]).forEach(Z);
          if (Oe !== void 0) throw Oe;
          return Ge;
        };
      }, 658(g, z, K) {
        var je = K(136), Ee = { function: !0, object: !0 };
        g.exports = function(Ve) {
          return je(Ve) && Ee[typeof Ve] || !1;
        };
      }, 136(g, z, K) {
        var je = K(441)();
        g.exports = function(Ee) {
          return Ee !== je && Ee !== null;
        };
      }, 555(g, z, K) {
        g.exports = K(98)() ? Object.keys : K(954);
      }, 98(g) {
        g.exports = function() {
          try {
            return Object.keys("primitive"), !0;
          } catch {
            return !1;
          }
        };
      }, 954(g, z, K) {
        var je = K(136), Ee = Object.keys;
        g.exports = function(Ve) {
          return Ee(je(Ve) ? Object(Ve) : Ve);
        };
      }, 206(g, z, K) {
        var je = K(136), Ee = Array.prototype.forEach, Ve = Object.create;
        g.exports = function(Ge) {
          var ze = Ve(null);
          return Ee.call(arguments, function(Oe) {
            je(Oe) && (function(Se, Z) {
              var ke;
              for (ke in Se) Z[ke] = Se[ke];
            })(Object(Oe), ze);
          }), ze;
        };
      }, 805(g) {
        g.exports = function(z) {
          if (typeof z != "function") throw new TypeError(z + " is not a function");
          return z;
        };
      }, 666(g, z, K) {
        var je = K(658);
        g.exports = function(Ee) {
          if (!je(Ee)) throw new TypeError(Ee + " is not an Object");
          return Ee;
        };
      }, 856(g, z, K) {
        var je = K(136);
        g.exports = function(Ee) {
          if (!je(Ee)) throw new TypeError("Cannot use null or undefined");
          return Ee;
        };
      }, 748(g, z, K) {
        g.exports = K(875)() ? String.prototype.contains : K(339);
      }, 875(g) {
        var z = "razdwatrzy";
        g.exports = function() {
          return typeof z.contains == "function" && z.contains("dwa") === !0 && z.contains("foo") === !1;
        };
      }, 339(g) {
        var z = String.prototype.indexOf;
        g.exports = function(K) {
          return z.call(this, K, arguments[1]) > -1;
        };
      }, 497(g, z, K) {
        var je = K(666), Ee = Object.prototype.hasOwnProperty;
        g.exports = function(Ve) {
          var Ge, ze = arguments[1];
          if (je(Ve), ze === void 0) Ee.call(Ve, "__ee__") && delete Ve.__ee__;
          else {
            if (!(Ge = Ee.call(Ve, "__ee__") && Ve.__ee__)) return;
            Ge[ze] && delete Ge[ze];
          }
        };
      }, 322(g, z, K) {
        var je, Ee, Ve, Ge, ze, Oe, Se, Z = K(913), ke = K(805), De = Function.prototype.apply, Be = Function.prototype.call, Ke = Object.create, nt = Object.defineProperty, st = Object.defineProperties, Me = Object.prototype.hasOwnProperty, it = { configurable: !0, enumerable: !1, writable: !0 };
        Ee = function(Te, Ce) {
          var Xe, ot;
          return ke(Ce), ot = this, je.call(this, Te, Xe = function() {
            Ve.call(ot, Te, Xe), De.call(Ce, this, arguments);
          }), Xe.__eeOnceListener__ = Ce, this;
        }, Ge = function(Te) {
          var Ce, Xe, ot, Ae, me;
          if (Me.call(this, "__ee__") && (Ae = this.__ee__[Te])) if (typeof Ae == "object") {
            for (Xe = arguments.length, me = new Array(Xe - 1), Ce = 1; Ce < Xe; ++Ce) me[Ce - 1] = arguments[Ce];
            for (Ae = Ae.slice(), Ce = 0; ot = Ae[Ce]; ++Ce) De.call(ot, this, me);
          } else switch (arguments.length) {
            case 1:
              Be.call(Ae, this);
              break;
            case 2:
              Be.call(Ae, this, arguments[1]);
              break;
            case 3:
              Be.call(Ae, this, arguments[1], arguments[2]);
              break;
            default:
              for (Xe = arguments.length, me = new Array(Xe - 1), Ce = 1; Ce < Xe; ++Ce) me[Ce - 1] = arguments[Ce];
              De.call(Ae, this, me);
          }
        }, ze = { on: je = function(Te, Ce) {
          var Xe;
          return ke(Ce), Me.call(this, "__ee__") ? Xe = this.__ee__ : (Xe = it.value = Ke(null), nt(this, "__ee__", it), it.value = null), Xe[Te] ? typeof Xe[Te] == "object" ? Xe[Te].push(Ce) : Xe[Te] = [Xe[Te], Ce] : Xe[Te] = Ce, this;
        }, once: Ee, off: Ve = function(Te, Ce) {
          var Xe, ot, Ae, me;
          if (ke(Ce), !Me.call(this, "__ee__")) return this;
          if (!(Xe = this.__ee__)[Te]) return this;
          if (typeof (ot = Xe[Te]) == "object") for (me = 0; Ae = ot[me]; ++me) Ae !== Ce && Ae.__eeOnceListener__ !== Ce || (ot.length === 2 ? Xe[Te] = ot[me ? 0 : 1] : ot.splice(me, 1));
          else ot !== Ce && ot.__eeOnceListener__ !== Ce || delete Xe[Te];
          return this;
        }, emit: Ge }, Oe = { on: Z(je), once: Z(Ee), off: Z(Ve), emit: Z(Ge) }, Se = st({}, Oe), g.exports = z = function(Te) {
          return Te == null ? Ke(Se) : st(Object(Te), Oe);
        }, z.methods = ze;
      }, 545(g) {
        const z = (w) => typeof w == "string", K = () => {
          let w, r;
          const n = new Promise((u, h) => {
            w = u, r = h;
          });
          return n.resolve = w, n.reject = r, n;
        }, je = (w) => w == null ? "" : "" + w, Ee = /###/g, Ve = (w) => w && w.indexOf("###") > -1 ? w.replace(Ee, ".") : w, Ge = (w) => !w || z(w), ze = (w, r, n) => {
          const u = z(r) ? r.split(".") : r;
          let h = 0;
          for (; h < u.length - 1; ) {
            if (Ge(w)) return {};
            const k = Ve(u[h]);
            !w[k] && n && (w[k] = new n()), w = Object.prototype.hasOwnProperty.call(w, k) ? w[k] : {}, ++h;
          }
          return Ge(w) ? {} : { obj: w, k: Ve(u[h]) };
        }, Oe = (w, r, n) => {
          const { obj: u, k: h } = ze(w, r, Object);
          if (u !== void 0 || r.length === 1) return void (u[h] = n);
          let k = r[r.length - 1], P = r.slice(0, r.length - 1), G = ze(w, P, Object);
          for (; G.obj === void 0 && P.length; ) k = `${P[P.length - 1]}.${k}`, P = P.slice(0, P.length - 1), G = ze(w, P, Object), G && G.obj && G.obj[`${G.k}.${k}`] !== void 0 && (G.obj = void 0);
          G.obj[`${G.k}.${k}`] = n;
        }, Se = (w, r) => {
          const { obj: n, k: u } = ze(w, r);
          if (n) return n[u];
        }, Z = (w, r, n) => {
          for (const u in r) u !== "__proto__" && u !== "constructor" && (u in w ? z(w[u]) || w[u] instanceof String || z(r[u]) || r[u] instanceof String ? n && (w[u] = r[u]) : Z(w[u], r[u], n) : w[u] = r[u]);
          return w;
        }, ke = (w) => w.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
        var De = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#x2F;" };
        const Be = (w) => z(w) ? w.replace(/[&<>"'\/]/g, (r) => De[r]) : w, Ke = [" ", ",", "?", "!", ";"], nt = new class {
          constructor(w) {
            this.capacity = w, this.regExpMap = /* @__PURE__ */ new Map(), this.regExpQueue = [];
          }
          getRegExp(w) {
            const r = this.regExpMap.get(w);
            if (r !== void 0) return r;
            const n = new RegExp(w);
            return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()), this.regExpMap.set(w, n), this.regExpQueue.push(w), n;
          }
        }(20), st = function(w, r) {
          let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
          if (!w) return;
          if (w[r]) return w[r];
          const u = r.split(n);
          let h = w;
          for (let k = 0; k < u.length; ) {
            if (!h || typeof h != "object") return;
            let P, G = "";
            for (let B = k; B < u.length; ++B) if (B !== k && (G += n), G += u[B], P = h[G], P !== void 0) {
              if (["string", "number", "boolean"].indexOf(typeof P) > -1 && B < u.length - 1) continue;
              k += B - k + 1;
              break;
            }
            h = P;
          }
          return h;
        }, Me = (w) => w && w.replace("_", "-"), it = { type: "logger", log(w) {
          this.output("log", w);
        }, warn(w) {
          this.output("warn", w);
        }, error(w) {
          this.output("error", w);
        }, output(w, r) {
          console && console[w] && console[w].apply(console, r);
        } };
        class Te {
          constructor(r) {
            let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            this.init(r, n);
          }
          init(r) {
            let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            this.prefix = n.prefix || "i18next:", this.logger = r || it, this.options = n, this.debug = n.debug;
          }
          log() {
            for (var r = arguments.length, n = new Array(r), u = 0; u < r; u++) n[u] = arguments[u];
            return this.forward(n, "log", "", !0);
          }
          warn() {
            for (var r = arguments.length, n = new Array(r), u = 0; u < r; u++) n[u] = arguments[u];
            return this.forward(n, "warn", "", !0);
          }
          error() {
            for (var r = arguments.length, n = new Array(r), u = 0; u < r; u++) n[u] = arguments[u];
            return this.forward(n, "error", "");
          }
          deprecate() {
            for (var r = arguments.length, n = new Array(r), u = 0; u < r; u++) n[u] = arguments[u];
            return this.forward(n, "warn", "WARNING DEPRECATED: ", !0);
          }
          forward(r, n, u, h) {
            return h && !this.debug ? null : (z(r[0]) && (r[0] = `${u}${this.prefix} ${r[0]}`), this.logger[n](r));
          }
          create(r) {
            return new Te(this.logger, { prefix: `${this.prefix}:${r}:`, ...this.options });
          }
          clone(r) {
            return (r = r || this.options).prefix = r.prefix || this.prefix, new Te(this.logger, r);
          }
        }
        var Ce = new Te();
        class Xe {
          constructor() {
            this.observers = {};
          }
          on(r, n) {
            return r.split(" ").forEach((u) => {
              this.observers[u] || (this.observers[u] = /* @__PURE__ */ new Map());
              const h = this.observers[u].get(n) || 0;
              this.observers[u].set(n, h + 1);
            }), this;
          }
          off(r, n) {
            this.observers[r] && (n ? this.observers[r].delete(n) : delete this.observers[r]);
          }
          emit(r) {
            for (var n = arguments.length, u = new Array(n > 1 ? n - 1 : 0), h = 1; h < n; h++) u[h - 1] = arguments[h];
            this.observers[r] && Array.from(this.observers[r].entries()).forEach((k) => {
              let [P, G] = k;
              for (let B = 0; B < G; B++) P(...u);
            }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach((k) => {
              let [P, G] = k;
              for (let B = 0; B < G; B++) P.apply(P, [r, ...u]);
            });
          }
        }
        class ot extends Xe {
          constructor(r) {
            let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { ns: ["translation"], defaultNS: "translation" };
            super(), this.data = r || {}, this.options = n, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0);
          }
          addNamespaces(r) {
            this.options.ns.indexOf(r) < 0 && this.options.ns.push(r);
          }
          removeNamespaces(r) {
            const n = this.options.ns.indexOf(r);
            n > -1 && this.options.ns.splice(n, 1);
          }
          getResource(r, n, u) {
            let h = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
            const k = h.keySeparator !== void 0 ? h.keySeparator : this.options.keySeparator, P = h.ignoreJSONStructure !== void 0 ? h.ignoreJSONStructure : this.options.ignoreJSONStructure;
            let G;
            r.indexOf(".") > -1 ? G = r.split(".") : (G = [r, n], u && (Array.isArray(u) ? G.push(...u) : z(u) && k ? G.push(...u.split(k)) : G.push(u)));
            const B = Se(this.data, G);
            return !B && !n && !u && r.indexOf(".") > -1 && (r = G[0], n = G[1], u = G.slice(2).join(".")), !B && P && z(u) ? st(this.data && this.data[r] && this.data[r][n], u, k) : B;
          }
          addResource(r, n, u, h) {
            let k = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : { silent: !1 };
            const P = k.keySeparator !== void 0 ? k.keySeparator : this.options.keySeparator;
            let G = [r, n];
            u && (G = G.concat(P ? u.split(P) : u)), r.indexOf(".") > -1 && (G = r.split("."), h = n, n = G[1]), this.addNamespaces(n), Oe(this.data, G, h), k.silent || this.emit("added", r, n, u, h);
          }
          addResources(r, n, u) {
            let h = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : { silent: !1 };
            for (const k in u) (z(u[k]) || Array.isArray(u[k])) && this.addResource(r, n, k, u[k], { silent: !0 });
            h.silent || this.emit("added", r, n, u);
          }
          addResourceBundle(r, n, u, h, k) {
            let P = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : { silent: !1, skipCopy: !1 }, G = [r, n];
            r.indexOf(".") > -1 && (G = r.split("."), h = u, u = n, n = G[1]), this.addNamespaces(n);
            let B = Se(this.data, G) || {};
            P.skipCopy || (u = JSON.parse(JSON.stringify(u))), h ? Z(B, u, k) : B = { ...B, ...u }, Oe(this.data, G, B), P.silent || this.emit("added", r, n, u);
          }
          removeResourceBundle(r, n) {
            this.hasResourceBundle(r, n) && delete this.data[r][n], this.removeNamespaces(n), this.emit("removed", r, n);
          }
          hasResourceBundle(r, n) {
            return this.getResource(r, n) !== void 0;
          }
          getResourceBundle(r, n) {
            return n || (n = this.options.defaultNS), this.options.compatibilityAPI === "v1" ? { ...this.getResource(r, n) } : this.getResource(r, n);
          }
          getDataByLanguage(r) {
            return this.data[r];
          }
          hasLanguageSomeTranslations(r) {
            const n = this.getDataByLanguage(r);
            return !!(n && Object.keys(n) || []).find((u) => n[u] && Object.keys(n[u]).length > 0);
          }
          toJSON() {
            return this.data;
          }
        }
        var Ae = { processors: {}, addPostProcessor(w) {
          this.processors[w.name] = w;
        }, handle(w, r, n, u, h) {
          return w.forEach((k) => {
            this.processors[k] && (r = this.processors[k].process(r, n, u, h));
          }), r;
        } };
        const me = {};
        class Pe extends Xe {
          constructor(r) {
            let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            var u, h;
            super(), u = r, h = this, ["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"].forEach((k) => {
              u[k] && (h[k] = u[k]);
            }), this.options = n, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = Ce.create("translator");
          }
          changeLanguage(r) {
            r && (this.language = r);
          }
          exists(r) {
            let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { interpolation: {} };
            if (r == null) return !1;
            const u = this.resolve(r, n);
            return u && u.res !== void 0;
          }
          extractFromKey(r, n) {
            let u = n.nsSeparator !== void 0 ? n.nsSeparator : this.options.nsSeparator;
            u === void 0 && (u = ":");
            const h = n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator;
            let k = n.ns || this.options.defaultNS || [];
            const P = u && r.indexOf(u) > -1, G = !(this.options.userDefinedKeySeparator || n.keySeparator || this.options.userDefinedNsSeparator || n.nsSeparator || ((B, X, le) => {
              X = X || "", le = le || "";
              const ce = Ke.filter((Ye) => X.indexOf(Ye) < 0 && le.indexOf(Ye) < 0);
              if (ce.length === 0) return !0;
              const Q = nt.getRegExp(`(${ce.map((Ye) => Ye === "?" ? "\\?" : Ye).join("|")})`);
              let He = !Q.test(B);
              if (!He) {
                const Ye = B.indexOf(le);
                Ye > 0 && !Q.test(B.substring(0, Ye)) && (He = !0);
              }
              return He;
            })(r, u, h));
            if (P && !G) {
              const B = r.match(this.interpolator.nestingRegexp);
              if (B && B.length > 0) return { key: r, namespaces: z(k) ? [k] : k };
              const X = r.split(u);
              (u !== h || u === h && this.options.ns.indexOf(X[0]) > -1) && (k = X.shift()), r = X.join(h);
            }
            return { key: r, namespaces: z(k) ? [k] : k };
          }
          translate(r, n, u) {
            if (typeof n != "object" && this.options.overloadTranslationOptionHandler && (n = this.options.overloadTranslationOptionHandler(arguments)), typeof n == "object" && (n = { ...n }), n || (n = {}), r == null) return "";
            Array.isArray(r) || (r = [String(r)]);
            const h = n.returnDetails !== void 0 ? n.returnDetails : this.options.returnDetails, k = n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator, { key: P, namespaces: G } = this.extractFromKey(r[r.length - 1], n), B = G[G.length - 1], X = n.lng || this.language, le = n.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
            if (X && X.toLowerCase() === "cimode") {
              if (le) {
                const J = n.nsSeparator || this.options.nsSeparator;
                return h ? { res: `${B}${J}${P}`, usedKey: P, exactUsedKey: P, usedLng: X, usedNS: B, usedParams: this.getUsedParamsDetails(n) } : `${B}${J}${P}`;
              }
              return h ? { res: P, usedKey: P, exactUsedKey: P, usedLng: X, usedNS: B, usedParams: this.getUsedParamsDetails(n) } : P;
            }
            const ce = this.resolve(r, n);
            let Q = ce && ce.res;
            const He = ce && ce.usedKey || P, Ye = ce && ce.exactUsedKey || P, vt = Object.prototype.toString.apply(Q), wt = n.joinArrays !== void 0 ? n.joinArrays : this.options.joinArrays, Ut = !this.i18nFormat || this.i18nFormat.handleAsObject, lt = !z(Q) && typeof Q != "boolean" && typeof Q != "number";
            if (!(Ut && Q && lt && ["[object Number]", "[object Function]", "[object RegExp]"].indexOf(vt) < 0) || z(wt) && Array.isArray(Q)) if (Ut && z(wt) && Array.isArray(Q)) Q = Q.join(wt), Q && (Q = this.extendTranslation(Q, r, n, u));
            else {
              let J = !1, E = !1;
              const ne = n.count !== void 0 && !z(n.count), ie = Pe.hasDefaultValue(n), se = ne ? this.pluralResolver.getSuffix(X, n.count, n) : "", he = n.ordinal && ne ? this.pluralResolver.getSuffix(X, n.count, { ordinal: !1 }) : "", Ie = ne && !n.ordinal && n.count === 0 && this.pluralResolver.shouldUseIntlApi(), T = Ie && n[`defaultValue${this.options.pluralSeparator}zero`] || n[`defaultValue${se}`] || n[`defaultValue${he}`] || n.defaultValue;
              !this.isValidLookup(Q) && ie && (J = !0, Q = T), this.isValidLookup(Q) || (E = !0, Q = P);
              const R = (n.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && E ? void 0 : Q, x = ie && T !== Q && this.options.updateMissing;
              if (E || J || x) {
                if (this.logger.log(x ? "updateKey" : "missingKey", X, B, P, x ? T : Q), k) {
                  const Ne = this.resolve(P, { ...n, keySeparator: !1 });
                  Ne && Ne.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
                }
                let F = [];
                const H = this.languageUtils.getFallbackCodes(this.options.fallbackLng, n.lng || this.language);
                if (this.options.saveMissingTo === "fallback" && H && H[0]) for (let Ne = 0; Ne < H.length; Ne++) F.push(H[Ne]);
                else this.options.saveMissingTo === "all" ? F = this.languageUtils.toResolveHierarchy(n.lng || this.language) : F.push(n.lng || this.language);
                const re = (Ne, Fe, pt) => {
                  const dt = ie && pt !== Q ? pt : R;
                  this.options.missingKeyHandler ? this.options.missingKeyHandler(Ne, B, Fe, dt, x, n) : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing(Ne, B, Fe, dt, x, n), this.emit("missingKey", Ne, B, Fe, Q);
                };
                this.options.saveMissing && (this.options.saveMissingPlurals && ne ? F.forEach((Ne) => {
                  const Fe = this.pluralResolver.getSuffixes(Ne, n);
                  Ie && n[`defaultValue${this.options.pluralSeparator}zero`] && Fe.indexOf(`${this.options.pluralSeparator}zero`) < 0 && Fe.push(`${this.options.pluralSeparator}zero`), Fe.forEach((pt) => {
                    re([Ne], P + pt, n[`defaultValue${pt}`] || T);
                  });
                }) : re(F, P, T));
              }
              Q = this.extendTranslation(Q, r, n, ce, u), E && Q === P && this.options.appendNamespaceToMissingKey && (Q = `${B}:${P}`), (E || J) && this.options.parseMissingKeyHandler && (Q = this.options.compatibilityAPI !== "v1" ? this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${B}:${P}` : P, J ? Q : void 0) : this.options.parseMissingKeyHandler(Q));
            }
            else {
              if (!n.returnObjects && !this.options.returnObjects) {
                this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
                const J = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(He, Q, { ...n, ns: G }) : `key '${P} (${this.language})' returned an object instead of string.`;
                return h ? (ce.res = J, ce.usedParams = this.getUsedParamsDetails(n), ce) : J;
              }
              if (k) {
                const J = Array.isArray(Q), E = J ? [] : {}, ne = J ? Ye : He;
                for (const ie in Q) if (Object.prototype.hasOwnProperty.call(Q, ie)) {
                  const se = `${ne}${k}${ie}`;
                  E[ie] = this.translate(se, { ...n, joinArrays: !1, ns: G }), E[ie] === se && (E[ie] = Q[ie]);
                }
                Q = E;
              }
            }
            return h ? (ce.res = Q, ce.usedParams = this.getUsedParamsDetails(n), ce) : Q;
          }
          extendTranslation(r, n, u, h, k) {
            var P = this;
            if (this.i18nFormat && this.i18nFormat.parse) r = this.i18nFormat.parse(r, { ...this.options.interpolation.defaultVariables, ...u }, u.lng || this.language || h.usedLng, h.usedNS, h.usedKey, { resolved: h });
            else if (!u.skipInterpolation) {
              u.interpolation && this.interpolator.init({ ...u, interpolation: { ...this.options.interpolation, ...u.interpolation } });
              const X = z(r) && (u && u.interpolation && u.interpolation.skipOnVariables !== void 0 ? u.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
              let le;
              if (X) {
                const Q = r.match(this.interpolator.nestingRegexp);
                le = Q && Q.length;
              }
              let ce = u.replace && !z(u.replace) ? u.replace : u;
              if (this.options.interpolation.defaultVariables && (ce = { ...this.options.interpolation.defaultVariables, ...ce }), r = this.interpolator.interpolate(r, ce, u.lng || this.language || h.usedLng, u), X) {
                const Q = r.match(this.interpolator.nestingRegexp);
                le < (Q && Q.length) && (u.nest = !1);
              }
              !u.lng && this.options.compatibilityAPI !== "v1" && h && h.res && (u.lng = this.language || h.usedLng), u.nest !== !1 && (r = this.interpolator.nest(r, function() {
                for (var Q = arguments.length, He = new Array(Q), Ye = 0; Ye < Q; Ye++) He[Ye] = arguments[Ye];
                return k && k[0] === He[0] && !u.context ? (P.logger.warn(`It seems you are nesting recursively key: ${He[0]} in key: ${n[0]}`), null) : P.translate(...He, n);
              }, u)), u.interpolation && this.interpolator.reset();
            }
            const G = u.postProcess || this.options.postProcess, B = z(G) ? [G] : G;
            return r != null && B && B.length && u.applyPostProcessor !== !1 && (r = Ae.handle(B, r, n, this.options && this.options.postProcessPassResolved ? { i18nResolved: { ...h, usedParams: this.getUsedParamsDetails(u) }, ...u } : u, this)), r;
          }
          resolve(r) {
            let n, u, h, k, P, G = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            return z(r) && (r = [r]), r.forEach((B) => {
              if (this.isValidLookup(n)) return;
              const X = this.extractFromKey(B, G), le = X.key;
              u = le;
              let ce = X.namespaces;
              this.options.fallbackNS && (ce = ce.concat(this.options.fallbackNS));
              const Q = G.count !== void 0 && !z(G.count), He = Q && !G.ordinal && G.count === 0 && this.pluralResolver.shouldUseIntlApi(), Ye = G.context !== void 0 && (z(G.context) || typeof G.context == "number") && G.context !== "", vt = G.lngs ? G.lngs : this.languageUtils.toResolveHierarchy(G.lng || this.language, G.fallbackLng);
              ce.forEach((wt) => {
                this.isValidLookup(n) || (P = wt, !me[`${vt[0]}-${wt}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(P) && (me[`${vt[0]}-${wt}`] = !0, this.logger.warn(`key "${u}" for languages "${vt.join(", ")}" won't get resolved as namespace "${P}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), vt.forEach((Ut) => {
                  if (this.isValidLookup(n)) return;
                  k = Ut;
                  const lt = [le];
                  if (this.i18nFormat && this.i18nFormat.addLookupKeys) this.i18nFormat.addLookupKeys(lt, le, Ut, wt, G);
                  else {
                    let E;
                    Q && (E = this.pluralResolver.getSuffix(Ut, G.count, G));
                    const ne = `${this.options.pluralSeparator}zero`, ie = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                    if (Q && (lt.push(le + E), G.ordinal && E.indexOf(ie) === 0 && lt.push(le + E.replace(ie, this.options.pluralSeparator)), He && lt.push(le + ne)), Ye) {
                      const se = `${le}${this.options.contextSeparator}${G.context}`;
                      lt.push(se), Q && (lt.push(se + E), G.ordinal && E.indexOf(ie) === 0 && lt.push(se + E.replace(ie, this.options.pluralSeparator)), He && lt.push(se + ne));
                    }
                  }
                  let J;
                  for (; J = lt.pop(); ) this.isValidLookup(n) || (h = J, n = this.getResource(Ut, wt, J, G));
                }));
              });
            }), { res: n, usedKey: u, exactUsedKey: h, usedLng: k, usedNS: P };
          }
          isValidLookup(r) {
            return !(r === void 0 || !this.options.returnNull && r === null || !this.options.returnEmptyString && r === "");
          }
          getResource(r, n, u) {
            let h = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
            return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(r, n, u, h) : this.resourceStore.getResource(r, n, u, h);
          }
          getUsedParamsDetails() {
            let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            const n = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"], u = r.replace && !z(r.replace);
            let h = u ? r.replace : r;
            if (u && r.count !== void 0 && (h.count = r.count), this.options.interpolation.defaultVariables && (h = { ...this.options.interpolation.defaultVariables, ...h }), !u) {
              h = { ...h };
              for (const k of n) delete h[k];
            }
            return h;
          }
          static hasDefaultValue(r) {
            for (const n in r) if (Object.prototype.hasOwnProperty.call(r, n) && n.substring(0, 12) === "defaultValue" && r[n] !== void 0) return !0;
            return !1;
          }
        }
        const C = (w) => w.charAt(0).toUpperCase() + w.slice(1);
        class N {
          constructor(r) {
            this.options = r, this.supportedLngs = this.options.supportedLngs || !1, this.logger = Ce.create("languageUtils");
          }
          getScriptPartFromCode(r) {
            if (!(r = Me(r)) || r.indexOf("-") < 0) return null;
            const n = r.split("-");
            return n.length === 2 ? null : (n.pop(), n[n.length - 1].toLowerCase() === "x" ? null : this.formatLanguageCode(n.join("-")));
          }
          getLanguagePartFromCode(r) {
            if (!(r = Me(r)) || r.indexOf("-") < 0) return r;
            const n = r.split("-");
            return this.formatLanguageCode(n[0]);
          }
          formatLanguageCode(r) {
            if (z(r) && r.indexOf("-") > -1) {
              if (typeof Intl < "u" && Intl.getCanonicalLocales !== void 0) try {
                let h = Intl.getCanonicalLocales(r)[0];
                if (h && this.options.lowerCaseLng && (h = h.toLowerCase()), h) return h;
              } catch {
              }
              const n = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
              let u = r.split("-");
              return this.options.lowerCaseLng ? u = u.map((h) => h.toLowerCase()) : u.length === 2 ? (u[0] = u[0].toLowerCase(), u[1] = u[1].toUpperCase(), n.indexOf(u[1].toLowerCase()) > -1 && (u[1] = C(u[1].toLowerCase()))) : u.length === 3 && (u[0] = u[0].toLowerCase(), u[1].length === 2 && (u[1] = u[1].toUpperCase()), u[0] !== "sgn" && u[2].length === 2 && (u[2] = u[2].toUpperCase()), n.indexOf(u[1].toLowerCase()) > -1 && (u[1] = C(u[1].toLowerCase())), n.indexOf(u[2].toLowerCase()) > -1 && (u[2] = C(u[2].toLowerCase()))), u.join("-");
            }
            return this.options.cleanCode || this.options.lowerCaseLng ? r.toLowerCase() : r;
          }
          isSupportedCode(r) {
            return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (r = this.getLanguagePartFromCode(r)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(r) > -1;
          }
          getBestMatchFromCodes(r) {
            if (!r) return null;
            let n;
            return r.forEach((u) => {
              if (n) return;
              const h = this.formatLanguageCode(u);
              this.options.supportedLngs && !this.isSupportedCode(h) || (n = h);
            }), !n && this.options.supportedLngs && r.forEach((u) => {
              if (n) return;
              const h = this.getLanguagePartFromCode(u);
              if (this.isSupportedCode(h)) return n = h;
              n = this.options.supportedLngs.find((k) => k === h ? k : k.indexOf("-") < 0 && h.indexOf("-") < 0 ? void 0 : k.indexOf("-") > 0 && h.indexOf("-") < 0 && k.substring(0, k.indexOf("-")) === h || k.indexOf(h) === 0 && h.length > 1 ? k : void 0);
            }), n || (n = this.getFallbackCodes(this.options.fallbackLng)[0]), n;
          }
          getFallbackCodes(r, n) {
            if (!r) return [];
            if (typeof r == "function" && (r = r(n)), z(r) && (r = [r]), Array.isArray(r)) return r;
            if (!n) return r.default || [];
            let u = r[n];
            return u || (u = r[this.getScriptPartFromCode(n)]), u || (u = r[this.formatLanguageCode(n)]), u || (u = r[this.getLanguagePartFromCode(n)]), u || (u = r.default), u || [];
          }
          toResolveHierarchy(r, n) {
            const u = this.getFallbackCodes(n || this.options.fallbackLng || [], r), h = [], k = (P) => {
              P && (this.isSupportedCode(P) ? h.push(P) : this.logger.warn(`rejecting language code not found in supportedLngs: ${P}`));
            };
            return z(r) && (r.indexOf("-") > -1 || r.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && k(this.formatLanguageCode(r)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && k(this.getScriptPartFromCode(r)), this.options.load !== "currentOnly" && k(this.getLanguagePartFromCode(r))) : z(r) && k(this.formatLanguageCode(r)), u.forEach((P) => {
              h.indexOf(P) < 0 && k(this.formatLanguageCode(P));
            }), h;
          }
        }
        let L = [{ lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "tl", "ti", "tr", "uz", "wa"], nr: [1, 2], fc: 1 }, { lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kk", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"], nr: [1, 2], fc: 2 }, { lngs: ["ay", "bo", "cgg", "fa", "ht", "id", "ja", "jbo", "ka", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"], nr: [1], fc: 3 }, { lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"], nr: [1, 2, 5], fc: 4 }, { lngs: ["ar"], nr: [0, 1, 2, 3, 11, 100], fc: 5 }, { lngs: ["cs", "sk"], nr: [1, 2, 5], fc: 6 }, { lngs: ["csb", "pl"], nr: [1, 2, 5], fc: 7 }, { lngs: ["cy"], nr: [1, 2, 3, 8], fc: 8 }, { lngs: ["fr"], nr: [1, 2], fc: 9 }, { lngs: ["ga"], nr: [1, 2, 3, 7, 11], fc: 10 }, { lngs: ["gd"], nr: [1, 2, 3, 20], fc: 11 }, { lngs: ["is"], nr: [1, 2], fc: 12 }, { lngs: ["jv"], nr: [0, 1], fc: 13 }, { lngs: ["kw"], nr: [1, 2, 3, 4], fc: 14 }, { lngs: ["lt"], nr: [1, 2, 10], fc: 15 }, { lngs: ["lv"], nr: [1, 2, 0], fc: 16 }, { lngs: ["mk"], nr: [1, 2], fc: 17 }, { lngs: ["mnk"], nr: [0, 1, 2], fc: 18 }, { lngs: ["mt"], nr: [1, 2, 11, 20], fc: 19 }, { lngs: ["or"], nr: [2, 1], fc: 2 }, { lngs: ["ro"], nr: [1, 2, 20], fc: 20 }, { lngs: ["sl"], nr: [5, 1, 2, 3], fc: 21 }, { lngs: ["he", "iw"], nr: [1, 2, 20, 21], fc: 22 }], A = { 1: (w) => +(w > 1), 2: (w) => +(w != 1), 3: (w) => 0, 4: (w) => w % 10 == 1 && w % 100 != 11 ? 0 : w % 10 >= 2 && w % 10 <= 4 && (w % 100 < 10 || w % 100 >= 20) ? 1 : 2, 5: (w) => w == 0 ? 0 : w == 1 ? 1 : w == 2 ? 2 : w % 100 >= 3 && w % 100 <= 10 ? 3 : w % 100 >= 11 ? 4 : 5, 6: (w) => w == 1 ? 0 : w >= 2 && w <= 4 ? 1 : 2, 7: (w) => w == 1 ? 0 : w % 10 >= 2 && w % 10 <= 4 && (w % 100 < 10 || w % 100 >= 20) ? 1 : 2, 8: (w) => w == 1 ? 0 : w == 2 ? 1 : w != 8 && w != 11 ? 2 : 3, 9: (w) => +(w >= 2), 10: (w) => w == 1 ? 0 : w == 2 ? 1 : w < 7 ? 2 : w < 11 ? 3 : 4, 11: (w) => w == 1 || w == 11 ? 0 : w == 2 || w == 12 ? 1 : w > 2 && w < 20 ? 2 : 3, 12: (w) => +(w % 10 != 1 || w % 100 == 11), 13: (w) => +(w !== 0), 14: (w) => w == 1 ? 0 : w == 2 ? 1 : w == 3 ? 2 : 3, 15: (w) => w % 10 == 1 && w % 100 != 11 ? 0 : w % 10 >= 2 && (w % 100 < 10 || w % 100 >= 20) ? 1 : 2, 16: (w) => w % 10 == 1 && w % 100 != 11 ? 0 : w !== 0 ? 1 : 2, 17: (w) => w == 1 || w % 10 == 1 && w % 100 != 11 ? 0 : 1, 18: (w) => w == 0 ? 0 : w == 1 ? 1 : 2, 19: (w) => w == 1 ? 0 : w == 0 || w % 100 > 1 && w % 100 < 11 ? 1 : w % 100 > 10 && w % 100 < 20 ? 2 : 3, 20: (w) => w == 1 ? 0 : w == 0 || w % 100 > 0 && w % 100 < 20 ? 1 : 2, 21: (w) => w % 100 == 1 ? 1 : w % 100 == 2 ? 2 : w % 100 == 3 || w % 100 == 4 ? 3 : 0, 22: (w) => w == 1 ? 0 : w == 2 ? 1 : (w < 0 || w > 10) && w % 10 == 0 ? 2 : 3 };
        const V = ["v1", "v2", "v3"], m = ["v4"], U = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 };
        class de {
          constructor(r) {
            let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            this.languageUtils = r, this.options = n, this.logger = Ce.create("pluralResolver"), this.options.compatibilityJSON && !m.includes(this.options.compatibilityJSON) || typeof Intl < "u" && Intl.PluralRules || (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = (() => {
              const u = {};
              return L.forEach((h) => {
                h.lngs.forEach((k) => {
                  u[k] = { numbers: h.nr, plurals: A[h.fc] };
                });
              }), u;
            })(), this.pluralRulesCache = {};
          }
          addRule(r, n) {
            this.rules[r] = n;
          }
          clearCache() {
            this.pluralRulesCache = {};
          }
          getRule(r) {
            let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            if (this.shouldUseIntlApi()) {
              const u = Me(r === "dev" ? "en" : r), h = n.ordinal ? "ordinal" : "cardinal", k = JSON.stringify({ cleanedCode: u, type: h });
              if (k in this.pluralRulesCache) return this.pluralRulesCache[k];
              let P;
              try {
                P = new Intl.PluralRules(u, { type: h });
              } catch {
                if (!r.match(/-|_/)) return;
                const B = this.languageUtils.getLanguagePartFromCode(r);
                P = this.getRule(B, n);
              }
              return this.pluralRulesCache[k] = P, P;
            }
            return this.rules[r] || this.rules[this.languageUtils.getLanguagePartFromCode(r)];
          }
          needsPlural(r) {
            let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            const u = this.getRule(r, n);
            return this.shouldUseIntlApi() ? u && u.resolvedOptions().pluralCategories.length > 1 : u && u.numbers.length > 1;
          }
          getPluralFormsOfKey(r, n) {
            let u = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
            return this.getSuffixes(r, u).map((h) => `${n}${h}`);
          }
          getSuffixes(r) {
            let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            const u = this.getRule(r, n);
            return u ? this.shouldUseIntlApi() ? u.resolvedOptions().pluralCategories.sort((h, k) => U[h] - U[k]).map((h) => `${this.options.prepend}${n.ordinal ? `ordinal${this.options.prepend}` : ""}${h}`) : u.numbers.map((h) => this.getSuffix(r, h, n)) : [];
          }
          getSuffix(r, n) {
            let u = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
            const h = this.getRule(r, u);
            return h ? this.shouldUseIntlApi() ? `${this.options.prepend}${u.ordinal ? `ordinal${this.options.prepend}` : ""}${h.select(n)}` : this.getSuffixRetroCompatible(h, n) : (this.logger.warn(`no plural rule found for: ${r}`), "");
          }
          getSuffixRetroCompatible(r, n) {
            const u = r.noAbs ? r.plurals(n) : r.plurals(Math.abs(n));
            let h = r.numbers[u];
            this.options.simplifyPluralSuffix && r.numbers.length === 2 && r.numbers[0] === 1 && (h === 2 ? h = "plural" : h === 1 && (h = ""));
            const k = () => this.options.prepend && h.toString() ? this.options.prepend + h.toString() : h.toString();
            return this.options.compatibilityJSON === "v1" ? h === 1 ? "" : typeof h == "number" ? `_plural_${h.toString()}` : k() : this.options.compatibilityJSON === "v2" || this.options.simplifyPluralSuffix && r.numbers.length === 2 && r.numbers[0] === 1 ? k() : this.options.prepend && u.toString() ? this.options.prepend + u.toString() : u.toString();
          }
          shouldUseIntlApi() {
            return !V.includes(this.options.compatibilityJSON);
          }
        }
        const ve = function(w, r, n) {
          let u = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", h = !(arguments.length > 4 && arguments[4] !== void 0) || arguments[4], k = ((P, G, B) => {
            const X = Se(P, B);
            return X !== void 0 ? X : Se(G, B);
          })(w, r, n);
          return !k && h && z(n) && (k = st(w, n, u), k === void 0 && (k = st(r, n, u))), k;
        }, ae = (w) => w.replace(/\$/g, "$$$$");
        class _ {
          constructor() {
            let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            this.logger = Ce.create("interpolator"), this.options = r, this.format = r.interpolation && r.interpolation.format || ((n) => n), this.init(r);
          }
          init() {
            let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            r.interpolation || (r.interpolation = { escapeValue: !0 });
            const { escape: n, escapeValue: u, useRawValueToEscape: h, prefix: k, prefixEscaped: P, suffix: G, suffixEscaped: B, formatSeparator: X, unescapeSuffix: le, unescapePrefix: ce, nestingPrefix: Q, nestingPrefixEscaped: He, nestingSuffix: Ye, nestingSuffixEscaped: vt, nestingOptionsSeparator: wt, maxReplaces: Ut, alwaysFormat: lt } = r.interpolation;
            this.escape = n !== void 0 ? n : Be, this.escapeValue = u === void 0 || u, this.useRawValueToEscape = h !== void 0 && h, this.prefix = k ? ke(k) : P || "{{", this.suffix = G ? ke(G) : B || "}}", this.formatSeparator = X || ",", this.unescapePrefix = le ? "" : ce || "-", this.unescapeSuffix = this.unescapePrefix ? "" : le || "", this.nestingPrefix = Q ? ke(Q) : He || ke("$t("), this.nestingSuffix = Ye ? ke(Ye) : vt || ke(")"), this.nestingOptionsSeparator = wt || ",", this.maxReplaces = Ut || 1e3, this.alwaysFormat = lt !== void 0 && lt, this.resetRegExp();
          }
          reset() {
            this.options && this.init(this.options);
          }
          resetRegExp() {
            const r = (n, u) => n && n.source === u ? (n.lastIndex = 0, n) : new RegExp(u, "g");
            this.regexp = r(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = r(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = r(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`);
          }
          interpolate(r, n, u, h) {
            let k, P, G;
            const B = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {}, X = (Q) => {
              if (Q.indexOf(this.formatSeparator) < 0) {
                const wt = ve(n, B, Q, this.options.keySeparator, this.options.ignoreJSONStructure);
                return this.alwaysFormat ? this.format(wt, void 0, u, { ...h, ...n, interpolationkey: Q }) : wt;
              }
              const He = Q.split(this.formatSeparator), Ye = He.shift().trim(), vt = He.join(this.formatSeparator).trim();
              return this.format(ve(n, B, Ye, this.options.keySeparator, this.options.ignoreJSONStructure), vt, u, { ...h, ...n, interpolationkey: Ye });
            };
            this.resetRegExp();
            const le = h && h.missingInterpolationHandler || this.options.missingInterpolationHandler, ce = h && h.interpolation && h.interpolation.skipOnVariables !== void 0 ? h.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
            return [{ regex: this.regexpUnescape, safeValue: (Q) => ae(Q) }, { regex: this.regexp, safeValue: (Q) => this.escapeValue ? ae(this.escape(Q)) : ae(Q) }].forEach((Q) => {
              for (G = 0; k = Q.regex.exec(r); ) {
                const He = k[1].trim();
                if (P = X(He), P === void 0) if (typeof le == "function") {
                  const vt = le(r, k, h);
                  P = z(vt) ? vt : "";
                } else if (h && Object.prototype.hasOwnProperty.call(h, He)) P = "";
                else {
                  if (ce) {
                    P = k[0];
                    continue;
                  }
                  this.logger.warn(`missed to pass in variable ${He} for interpolating ${r}`), P = "";
                }
                else z(P) || this.useRawValueToEscape || (P = je(P));
                const Ye = Q.safeValue(P);
                if (r = r.replace(k[0], Ye), ce ? (Q.regex.lastIndex += P.length, Q.regex.lastIndex -= k[0].length) : Q.regex.lastIndex = 0, G++, G >= this.maxReplaces) break;
              }
            }), r;
          }
          nest(r, n) {
            let u, h, k, P = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
            const G = (B, X) => {
              const le = this.nestingOptionsSeparator;
              if (B.indexOf(le) < 0) return B;
              const ce = B.split(new RegExp(`${le}[ ]*{`));
              let Q = `{${ce[1]}`;
              B = ce[0], Q = this.interpolate(Q, k);
              const He = Q.match(/'/g), Ye = Q.match(/"/g);
              (He && He.length % 2 == 0 && !Ye || Ye.length % 2 != 0) && (Q = Q.replace(/'/g, '"'));
              try {
                k = JSON.parse(Q), X && (k = { ...X, ...k });
              } catch (vt) {
                return this.logger.warn(`failed parsing options string in nesting for key ${B}`, vt), `${B}${le}${Q}`;
              }
              return k.defaultValue && k.defaultValue.indexOf(this.prefix) > -1 && delete k.defaultValue, B;
            };
            for (; u = this.nestingRegexp.exec(r); ) {
              let B = [];
              k = { ...P }, k = k.replace && !z(k.replace) ? k.replace : k, k.applyPostProcessor = !1, delete k.defaultValue;
              let X = !1;
              if (u[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(u[1])) {
                const le = u[1].split(this.formatSeparator).map((ce) => ce.trim());
                u[1] = le.shift(), B = le, X = !0;
              }
              if (h = n(G.call(this, u[1].trim(), k), k), h && u[0] === r && !z(h)) return h;
              z(h) || (h = je(h)), h || (this.logger.warn(`missed to resolve ${u[1]} for nesting ${r}`), h = ""), X && (h = B.reduce((le, ce) => this.format(le, ce, P.lng, { ...P, interpolationkey: u[1].trim() }), h.trim())), r = r.replace(u[0], h), this.regexp.lastIndex = 0;
            }
            return r;
          }
        }
        const S = (w) => {
          const r = {};
          return (n, u, h) => {
            let k = h;
            h && h.interpolationkey && h.formatParams && h.formatParams[h.interpolationkey] && h[h.interpolationkey] && (k = { ...k, [h.interpolationkey]: void 0 });
            const P = u + JSON.stringify(k);
            let G = r[P];
            return G || (G = w(Me(u), h), r[P] = G), G(n);
          };
        };
        class j {
          constructor() {
            let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            this.logger = Ce.create("formatter"), this.options = r, this.formats = { number: S((n, u) => {
              const h = new Intl.NumberFormat(n, { ...u });
              return (k) => h.format(k);
            }), currency: S((n, u) => {
              const h = new Intl.NumberFormat(n, { ...u, style: "currency" });
              return (k) => h.format(k);
            }), datetime: S((n, u) => {
              const h = new Intl.DateTimeFormat(n, { ...u });
              return (k) => h.format(k);
            }), relativetime: S((n, u) => {
              const h = new Intl.RelativeTimeFormat(n, { ...u });
              return (k) => h.format(k, u.range || "day");
            }), list: S((n, u) => {
              const h = new Intl.ListFormat(n, { ...u });
              return (k) => h.format(k);
            }) }, this.init(r);
          }
          init(r) {
            let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { interpolation: {} };
            this.formatSeparator = n.interpolation.formatSeparator || ",";
          }
          add(r, n) {
            this.formats[r.toLowerCase().trim()] = n;
          }
          addCached(r, n) {
            this.formats[r.toLowerCase().trim()] = S(n);
          }
          format(r, n, u) {
            let h = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
            const k = n.split(this.formatSeparator);
            if (k.length > 1 && k[0].indexOf("(") > 1 && k[0].indexOf(")") < 0 && k.find((P) => P.indexOf(")") > -1)) {
              const P = k.findIndex((G) => G.indexOf(")") > -1);
              k[0] = [k[0], ...k.splice(1, P)].join(this.formatSeparator);
            }
            return k.reduce((P, G) => {
              const { formatName: B, formatOptions: X } = ((le) => {
                let ce = le.toLowerCase().trim();
                const Q = {};
                if (le.indexOf("(") > -1) {
                  const He = le.split("(");
                  ce = He[0].toLowerCase().trim();
                  const Ye = He[1].substring(0, He[1].length - 1);
                  ce === "currency" && Ye.indexOf(":") < 0 ? Q.currency || (Q.currency = Ye.trim()) : ce === "relativetime" && Ye.indexOf(":") < 0 ? Q.range || (Q.range = Ye.trim()) : Ye.split(";").forEach((vt) => {
                    if (vt) {
                      const [wt, ...Ut] = vt.split(":"), lt = Ut.join(":").trim().replace(/^'+|'+$/g, ""), J = wt.trim();
                      Q[J] || (Q[J] = lt), lt === "false" && (Q[J] = !1), lt === "true" && (Q[J] = !0), isNaN(lt) || (Q[J] = parseInt(lt, 10));
                    }
                  });
                }
                return { formatName: ce, formatOptions: Q };
              })(G);
              if (this.formats[B]) {
                let le = P;
                try {
                  const ce = h && h.formatParams && h.formatParams[h.interpolationkey] || {}, Q = ce.locale || ce.lng || h.locale || h.lng || u;
                  le = this.formats[B](P, Q, { ...X, ...h, ...ce });
                } catch (ce) {
                  this.logger.warn(ce);
                }
                return le;
              }
              return this.logger.warn(`there was no format function for ${B}`), P;
            }, r);
          }
        }
        class Y extends Xe {
          constructor(r, n, u) {
            let h = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
            super(), this.backend = r, this.store = n, this.services = u, this.languageUtils = u.languageUtils, this.options = h, this.logger = Ce.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = h.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = h.maxRetries >= 0 ? h.maxRetries : 5, this.retryTimeout = h.retryTimeout >= 1 ? h.retryTimeout : 350, this.state = {}, this.queue = [], this.backend && this.backend.init && this.backend.init(u, h.backend, h);
          }
          queueLoad(r, n, u, h) {
            const k = {}, P = {}, G = {}, B = {};
            return r.forEach((X) => {
              let le = !0;
              n.forEach((ce) => {
                const Q = `${X}|${ce}`;
                !u.reload && this.store.hasResourceBundle(X, ce) ? this.state[Q] = 2 : this.state[Q] < 0 || (this.state[Q] === 1 ? P[Q] === void 0 && (P[Q] = !0) : (this.state[Q] = 1, le = !1, P[Q] === void 0 && (P[Q] = !0), k[Q] === void 0 && (k[Q] = !0), B[ce] === void 0 && (B[ce] = !0)));
              }), le || (G[X] = !0);
            }), (Object.keys(k).length || Object.keys(P).length) && this.queue.push({ pending: P, pendingCount: Object.keys(P).length, loaded: {}, errors: [], callback: h }), { toLoad: Object.keys(k), pending: Object.keys(P), toLoadLanguages: Object.keys(G), toLoadNamespaces: Object.keys(B) };
          }
          loaded(r, n, u) {
            const h = r.split("|"), k = h[0], P = h[1];
            n && this.emit("failedLoading", k, P, n), !n && u && this.store.addResourceBundle(k, P, u, void 0, void 0, { skipCopy: !0 }), this.state[r] = n ? -1 : 2, n && u && (this.state[r] = 0);
            const G = {};
            this.queue.forEach((B) => {
              ((X, le, ce) => {
                const { obj: Q, k: He } = ze(X, le, Object);
                Q[He] = Q[He] || [], Q[He].push(ce);
              })(B.loaded, [k], P), ((X, le) => {
                X.pending[le] !== void 0 && (delete X.pending[le], X.pendingCount--);
              })(B, r), n && B.errors.push(n), B.pendingCount !== 0 || B.done || (Object.keys(B.loaded).forEach((X) => {
                G[X] || (G[X] = {});
                const le = B.loaded[X];
                le.length && le.forEach((ce) => {
                  G[X][ce] === void 0 && (G[X][ce] = !0);
                });
              }), B.done = !0, B.errors.length ? B.callback(B.errors) : B.callback());
            }), this.emit("loaded", G), this.queue = this.queue.filter((B) => !B.done);
          }
          read(r, n, u) {
            let h = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, k = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout, P = arguments.length > 5 ? arguments[5] : void 0;
            if (!r.length) return P(null, {});
            if (this.readingCalls >= this.maxParallelReads) return void this.waitingReads.push({ lng: r, ns: n, fcName: u, tried: h, wait: k, callback: P });
            this.readingCalls++;
            const G = (X, le) => {
              if (this.readingCalls--, this.waitingReads.length > 0) {
                const ce = this.waitingReads.shift();
                this.read(ce.lng, ce.ns, ce.fcName, ce.tried, ce.wait, ce.callback);
              }
              X && le && h < this.maxRetries ? setTimeout(() => {
                this.read.call(this, r, n, u, h + 1, 2 * k, P);
              }, k) : P(X, le);
            }, B = this.backend[u].bind(this.backend);
            if (B.length !== 2) return B(r, n, G);
            try {
              const X = B(r, n);
              X && typeof X.then == "function" ? X.then((le) => G(null, le)).catch(G) : G(null, X);
            } catch (X) {
              G(X);
            }
          }
          prepareLoading(r, n) {
            let u = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, h = arguments.length > 3 ? arguments[3] : void 0;
            if (!this.backend) return this.logger.warn("No backend was added via i18next.use. Will not load resources."), h && h();
            z(r) && (r = this.languageUtils.toResolveHierarchy(r)), z(n) && (n = [n]);
            const k = this.queueLoad(r, n, u, h);
            if (!k.toLoad.length) return k.pending.length || h(), null;
            k.toLoad.forEach((P) => {
              this.loadOne(P);
            });
          }
          load(r, n, u) {
            this.prepareLoading(r, n, {}, u);
          }
          reload(r, n, u) {
            this.prepareLoading(r, n, { reload: !0 }, u);
          }
          loadOne(r) {
            let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
            const u = r.split("|"), h = u[0], k = u[1];
            this.read(h, k, "read", void 0, void 0, (P, G) => {
              P && this.logger.warn(`${n}loading namespace ${k} for language ${h} failed`, P), !P && G && this.logger.log(`${n}loaded namespace ${k} for language ${h}`, G), this.loaded(r, P, G);
            });
          }
          saveMissing(r, n, u, h, k) {
            let P = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {}, G = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {
            };
            if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(n)) this.logger.warn(`did not save key "${u}" as the namespace "${n}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
            else if (u != null && u !== "") {
              if (this.backend && this.backend.create) {
                const B = { ...P, isUpdate: k }, X = this.backend.create.bind(this.backend);
                if (X.length < 6) try {
                  let le;
                  le = X.length === 5 ? X(r, n, u, h, B) : X(r, n, u, h), le && typeof le.then == "function" ? le.then((ce) => G(null, ce)).catch(G) : G(null, le);
                } catch (le) {
                  G(le);
                }
                else X(r, n, u, h, G, B);
              }
              r && r[0] && this.store.addResource(r[0], n, u, h);
            }
          }
        }
        const bt = () => ({ debug: !1, initImmediate: !0, ns: ["translation"], defaultNS: ["translation"], fallbackLng: ["dev"], fallbackNS: !1, supportedLngs: !1, nonExplicitSupportedLngs: !1, load: "all", preload: !1, simplifyPluralSuffix: !0, keySeparator: ".", nsSeparator: ":", pluralSeparator: "_", contextSeparator: "_", partialBundledLanguages: !1, saveMissing: !1, updateMissing: !1, saveMissingTo: "fallback", saveMissingPlurals: !0, missingKeyHandler: !1, missingInterpolationHandler: !1, postProcess: !1, postProcessPassResolved: !1, returnNull: !1, returnEmptyString: !0, returnObjects: !1, joinArrays: !1, returnedObjectHandler: !1, parseMissingKeyHandler: !1, appendNamespaceToMissingKey: !1, appendNamespaceToCIMode: !1, overloadTranslationOptionHandler: (w) => {
          let r = {};
          if (typeof w[1] == "object" && (r = w[1]), z(w[1]) && (r.defaultValue = w[1]), z(w[2]) && (r.tDescription = w[2]), typeof w[2] == "object" || typeof w[3] == "object") {
            const n = w[3] || w[2];
            Object.keys(n).forEach((u) => {
              r[u] = n[u];
            });
          }
          return r;
        }, interpolation: { escapeValue: !0, format: (w) => w, prefix: "{{", suffix: "}}", formatSeparator: ",", unescapePrefix: "-", nestingPrefix: "$t(", nestingSuffix: ")", nestingOptionsSeparator: ",", maxReplaces: 1e3, skipOnVariables: !0 } }), mt = (w) => (z(w.ns) && (w.ns = [w.ns]), z(w.fallbackLng) && (w.fallbackLng = [w.fallbackLng]), z(w.fallbackNS) && (w.fallbackNS = [w.fallbackNS]), w.supportedLngs && w.supportedLngs.indexOf("cimode") < 0 && (w.supportedLngs = w.supportedLngs.concat(["cimode"])), w), At = () => {
        };
        class Nt extends Xe {
          constructor() {
            let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0;
            var u;
            if (super(), this.options = mt(r), this.services = {}, this.logger = Ce, this.modules = { external: [] }, u = this, Object.getOwnPropertyNames(Object.getPrototypeOf(u)).forEach((h) => {
              typeof u[h] == "function" && (u[h] = u[h].bind(u));
            }), n && !this.isInitialized && !r.isClone) {
              if (!this.options.initImmediate) return this.init(r, n), this;
              setTimeout(() => {
                this.init(r, n);
              }, 0);
            }
          }
          init() {
            var r = this;
            let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, u = arguments.length > 1 ? arguments[1] : void 0;
            this.isInitializing = !0, typeof n == "function" && (u = n, n = {}), !n.defaultNS && n.defaultNS !== !1 && n.ns && (z(n.ns) ? n.defaultNS = n.ns : n.ns.indexOf("translation") < 0 && (n.defaultNS = n.ns[0]));
            const h = bt();
            this.options = { ...h, ...this.options, ...mt(n) }, this.options.compatibilityAPI !== "v1" && (this.options.interpolation = { ...h.interpolation, ...this.options.interpolation }), n.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = n.keySeparator), n.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = n.nsSeparator);
            const k = (B) => B ? typeof B == "function" ? new B() : B : null;
            if (!this.options.isClone) {
              let B;
              this.modules.logger ? Ce.init(k(this.modules.logger), this.options) : Ce.init(null, this.options), this.modules.formatter ? B = this.modules.formatter : typeof Intl < "u" && (B = j);
              const X = new N(this.options);
              this.store = new ot(this.options.resources, this.options);
              const le = this.services;
              le.logger = Ce, le.resourceStore = this.store, le.languageUtils = X, le.pluralResolver = new de(X, { prepend: this.options.pluralSeparator, compatibilityJSON: this.options.compatibilityJSON, simplifyPluralSuffix: this.options.simplifyPluralSuffix }), !B || this.options.interpolation.format && this.options.interpolation.format !== h.interpolation.format || (le.formatter = k(B), le.formatter.init(le, this.options), this.options.interpolation.format = le.formatter.format.bind(le.formatter)), le.interpolator = new _(this.options), le.utils = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) }, le.backendConnector = new Y(k(this.modules.backend), le.resourceStore, le, this.options), le.backendConnector.on("*", function(ce) {
                for (var Q = arguments.length, He = new Array(Q > 1 ? Q - 1 : 0), Ye = 1; Ye < Q; Ye++) He[Ye - 1] = arguments[Ye];
                r.emit(ce, ...He);
              }), this.modules.languageDetector && (le.languageDetector = k(this.modules.languageDetector), le.languageDetector.init && le.languageDetector.init(le, this.options.detection, this.options)), this.modules.i18nFormat && (le.i18nFormat = k(this.modules.i18nFormat), le.i18nFormat.init && le.i18nFormat.init(this)), this.translator = new Pe(this.services, this.options), this.translator.on("*", function(ce) {
                for (var Q = arguments.length, He = new Array(Q > 1 ? Q - 1 : 0), Ye = 1; Ye < Q; Ye++) He[Ye - 1] = arguments[Ye];
                r.emit(ce, ...He);
              }), this.modules.external.forEach((ce) => {
                ce.init && ce.init(this);
              });
            }
            if (this.format = this.options.interpolation.format, u || (u = At), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
              const B = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
              B.length > 0 && B[0] !== "dev" && (this.options.lng = B[0]);
            }
            this.services.languageDetector || this.options.lng || this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach((B) => {
              this[B] = function() {
                return r.store[B](...arguments);
              };
            }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach((B) => {
              this[B] = function() {
                return r.store[B](...arguments), r;
              };
            });
            const P = K(), G = () => {
              const B = (X, le) => {
                this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), P.resolve(le), u(X, le);
              };
              if (this.languages && this.options.compatibilityAPI !== "v1" && !this.isInitialized) return B(null, this.t.bind(this));
              this.changeLanguage(this.options.lng, B);
            };
            return this.options.resources || !this.options.initImmediate ? G() : setTimeout(G, 0), P;
          }
          loadResources(r) {
            let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : At;
            const u = z(r) ? r : this.language;
            if (typeof r == "function" && (n = r), !this.options.resources || this.options.partialBundledLanguages) {
              if (u && u.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return n();
              const h = [], k = (P) => {
                P && P !== "cimode" && this.services.languageUtils.toResolveHierarchy(P).forEach((G) => {
                  G !== "cimode" && h.indexOf(G) < 0 && h.push(G);
                });
              };
              u ? k(u) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((P) => k(P)), this.options.preload && this.options.preload.forEach((P) => k(P)), this.services.backendConnector.load(h, this.options.ns, (P) => {
                P || this.resolvedLanguage || !this.language || this.setResolvedLanguage(this.language), n(P);
              });
            } else n(null);
          }
          reloadResources(r, n, u) {
            const h = K();
            return typeof r == "function" && (u = r, r = void 0), typeof n == "function" && (u = n, n = void 0), r || (r = this.languages), n || (n = this.options.ns), u || (u = At), this.services.backendConnector.reload(r, n, (k) => {
              h.resolve(), u(k);
            }), h;
          }
          use(r) {
            if (!r) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
            if (!r.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
            return r.type === "backend" && (this.modules.backend = r), (r.type === "logger" || r.log && r.warn && r.error) && (this.modules.logger = r), r.type === "languageDetector" && (this.modules.languageDetector = r), r.type === "i18nFormat" && (this.modules.i18nFormat = r), r.type === "postProcessor" && Ae.addPostProcessor(r), r.type === "formatter" && (this.modules.formatter = r), r.type === "3rdParty" && this.modules.external.push(r), this;
          }
          setResolvedLanguage(r) {
            if (r && this.languages && !(["cimode", "dev"].indexOf(r) > -1)) for (let n = 0; n < this.languages.length; n++) {
              const u = this.languages[n];
              if (!(["cimode", "dev"].indexOf(u) > -1) && this.store.hasLanguageSomeTranslations(u)) {
                this.resolvedLanguage = u;
                break;
              }
            }
          }
          changeLanguage(r, n) {
            var u = this;
            this.isLanguageChangingTo = r;
            const h = K();
            this.emit("languageChanging", r);
            const k = (B) => {
              this.language = B, this.languages = this.services.languageUtils.toResolveHierarchy(B), this.resolvedLanguage = void 0, this.setResolvedLanguage(B);
            }, P = (B, X) => {
              X ? (k(X), this.translator.changeLanguage(X), this.isLanguageChangingTo = void 0, this.emit("languageChanged", X), this.logger.log("languageChanged", X)) : this.isLanguageChangingTo = void 0, h.resolve(function() {
                return u.t(...arguments);
              }), n && n(B, function() {
                return u.t(...arguments);
              });
            }, G = (B) => {
              r || B || !this.services.languageDetector || (B = []);
              const X = z(B) ? B : this.services.languageUtils.getBestMatchFromCodes(B);
              X && (this.language || k(X), this.translator.language || this.translator.changeLanguage(X), this.services.languageDetector && this.services.languageDetector.cacheUserLanguage && this.services.languageDetector.cacheUserLanguage(X)), this.loadResources(X, (le) => {
                P(le, X);
              });
            };
            return r || !this.services.languageDetector || this.services.languageDetector.async ? !r && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(G) : this.services.languageDetector.detect(G) : G(r) : G(this.services.languageDetector.detect()), h;
          }
          getFixedT(r, n, u) {
            var h = this;
            const k = function(P, G) {
              let B;
              if (typeof G != "object") {
                for (var X = arguments.length, le = new Array(X > 2 ? X - 2 : 0), ce = 2; ce < X; ce++) le[ce - 2] = arguments[ce];
                B = h.options.overloadTranslationOptionHandler([P, G].concat(le));
              } else B = { ...G };
              B.lng = B.lng || k.lng, B.lngs = B.lngs || k.lngs, B.ns = B.ns || k.ns, B.keyPrefix !== "" && (B.keyPrefix = B.keyPrefix || u || k.keyPrefix);
              const Q = h.options.keySeparator || ".";
              let He;
              return He = B.keyPrefix && Array.isArray(P) ? P.map((Ye) => `${B.keyPrefix}${Q}${Ye}`) : B.keyPrefix ? `${B.keyPrefix}${Q}${P}` : P, h.t(He, B);
            };
            return z(r) ? k.lng = r : k.lngs = r, k.ns = n, k.keyPrefix = u, k;
          }
          t() {
            return this.translator && this.translator.translate(...arguments);
          }
          exists() {
            return this.translator && this.translator.exists(...arguments);
          }
          setDefaultNamespace(r) {
            this.options.defaultNS = r;
          }
          hasLoadedNamespace(r) {
            let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            if (!this.isInitialized) return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
            if (!this.languages || !this.languages.length) return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
            const u = n.lng || this.resolvedLanguage || this.languages[0], h = !!this.options && this.options.fallbackLng, k = this.languages[this.languages.length - 1];
            if (u.toLowerCase() === "cimode") return !0;
            const P = (G, B) => {
              const X = this.services.backendConnector.state[`${G}|${B}`];
              return X === -1 || X === 0 || X === 2;
            };
            if (n.precheck) {
              const G = n.precheck(this, P);
              if (G !== void 0) return G;
            }
            return !(!this.hasResourceBundle(u, r) && this.services.backendConnector.backend && (!this.options.resources || this.options.partialBundledLanguages) && (!P(u, r) || h && !P(k, r)));
          }
          loadNamespaces(r, n) {
            const u = K();
            return this.options.ns ? (z(r) && (r = [r]), r.forEach((h) => {
              this.options.ns.indexOf(h) < 0 && this.options.ns.push(h);
            }), this.loadResources((h) => {
              u.resolve(), n && n(h);
            }), u) : (n && n(), Promise.resolve());
          }
          loadLanguages(r, n) {
            const u = K();
            z(r) && (r = [r]);
            const h = this.options.preload || [], k = r.filter((P) => h.indexOf(P) < 0 && this.services.languageUtils.isSupportedCode(P));
            return k.length ? (this.options.preload = h.concat(k), this.loadResources((P) => {
              u.resolve(), n && n(P);
            }), u) : (n && n(), Promise.resolve());
          }
          dir(r) {
            if (r || (r = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)), !r) return "rtl";
            const n = this.services && this.services.languageUtils || new N(bt());
            return ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"].indexOf(n.getLanguagePartFromCode(r)) > -1 || r.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
          }
          static createInstance() {
            return new Nt(arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, arguments.length > 1 ? arguments[1] : void 0);
          }
          cloneInstance() {
            let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : At;
            const u = r.forkResourceStore;
            u && delete r.forkResourceStore;
            const h = { ...this.options, ...r, isClone: !0 }, k = new Nt(h);
            return r.debug === void 0 && r.prefix === void 0 || (k.logger = k.logger.clone(r)), ["store", "services", "language"].forEach((P) => {
              k[P] = this[P];
            }), k.services = { ...this.services }, k.services.utils = { hasLoadedNamespace: k.hasLoadedNamespace.bind(k) }, u && (k.store = new ot(this.store.data, h), k.services.resourceStore = k.store), k.translator = new Pe(k.services, h), k.translator.on("*", function(P) {
              for (var G = arguments.length, B = new Array(G > 1 ? G - 1 : 0), X = 1; X < G; X++) B[X - 1] = arguments[X];
              k.emit(P, ...B);
            }), k.init(h, n), k.translator.options = h, k.translator.backendConnector.services.utils = { hasLoadedNamespace: k.hasLoadedNamespace.bind(k) }, k;
          }
          toJSON() {
            return { options: this.options, store: this.store, language: this.language, languages: this.languages, resolvedLanguage: this.resolvedLanguage };
          }
        }
        const _t = Nt.createInstance();
        _t.createInstance = Nt.createInstance, g.exports = _t;
      }, 327(g, z) {
        Object.defineProperty(z, "__esModule", { value: !0 });
        class K extends Error {
        }
        class je extends K {
          constructor(e) {
            super(`Invalid DateTime: ${e.toMessage()}`);
          }
        }
        class Ee extends K {
          constructor(e) {
            super(`Invalid Interval: ${e.toMessage()}`);
          }
        }
        class Ve extends K {
          constructor(e) {
            super(`Invalid Duration: ${e.toMessage()}`);
          }
        }
        class Ge extends K {
        }
        class ze extends K {
          constructor(e) {
            super(`Invalid unit ${e}`);
          }
        }
        class Oe extends K {
        }
        class Se extends K {
          constructor() {
            super("Zone is an abstract class");
          }
        }
        const Z = "numeric", ke = "short", De = "long", Be = { year: Z, month: Z, day: Z }, Ke = { year: Z, month: ke, day: Z }, nt = { year: Z, month: ke, day: Z, weekday: ke }, st = { year: Z, month: De, day: Z }, Me = { year: Z, month: De, day: Z, weekday: De }, it = { hour: Z, minute: Z }, Te = { hour: Z, minute: Z, second: Z }, Ce = { hour: Z, minute: Z, second: Z, timeZoneName: ke }, Xe = { hour: Z, minute: Z, second: Z, timeZoneName: De }, ot = { hour: Z, minute: Z, hourCycle: "h23" }, Ae = { hour: Z, minute: Z, second: Z, hourCycle: "h23" }, me = { hour: Z, minute: Z, second: Z, hourCycle: "h23", timeZoneName: ke }, Pe = { hour: Z, minute: Z, second: Z, hourCycle: "h23", timeZoneName: De }, C = { year: Z, month: Z, day: Z, hour: Z, minute: Z }, N = { year: Z, month: Z, day: Z, hour: Z, minute: Z, second: Z }, L = { year: Z, month: ke, day: Z, hour: Z, minute: Z }, A = { year: Z, month: ke, day: Z, hour: Z, minute: Z, second: Z }, V = { year: Z, month: ke, day: Z, weekday: ke, hour: Z, minute: Z }, m = { year: Z, month: De, day: Z, hour: Z, minute: Z, timeZoneName: ke }, U = { year: Z, month: De, day: Z, hour: Z, minute: Z, second: Z, timeZoneName: ke }, de = { year: Z, month: De, day: Z, weekday: De, hour: Z, minute: Z, timeZoneName: De }, ve = { year: Z, month: De, day: Z, weekday: De, hour: Z, minute: Z, second: Z, timeZoneName: De };
        class ae {
          get type() {
            throw new Se();
          }
          get name() {
            throw new Se();
          }
          get ianaName() {
            return this.name;
          }
          get isUniversal() {
            throw new Se();
          }
          offsetName(e, i) {
            throw new Se();
          }
          formatOffset(e, i) {
            throw new Se();
          }
          offset(e) {
            throw new Se();
          }
          equals(e) {
            throw new Se();
          }
          get isValid() {
            throw new Se();
          }
        }
        let _ = null;
        class S extends ae {
          static get instance() {
            return _ === null && (_ = new S()), _;
          }
          get type() {
            return "system";
          }
          get name() {
            return new Intl.DateTimeFormat().resolvedOptions().timeZone;
          }
          get isUniversal() {
            return !1;
          }
          offsetName(e, { format: i, locale: a }) {
            return be(e, i, a);
          }
          formatOffset(e, i) {
            return oe(this.offset(e), i);
          }
          offset(e) {
            return -new Date(e).getTimezoneOffset();
          }
          equals(e) {
            return e.type === "system";
          }
          get isValid() {
            return !0;
          }
        }
        let j = {};
        const Y = { year: 0, month: 1, day: 2, era: 3, hour: 4, minute: 5, second: 6 };
        let bt = {};
        class mt extends ae {
          static create(e) {
            return bt[e] || (bt[e] = new mt(e)), bt[e];
          }
          static resetCache() {
            bt = {}, j = {};
          }
          static isValidSpecifier(e) {
            return this.isValidZone(e);
          }
          static isValidZone(e) {
            if (!e) return !1;
            try {
              return new Intl.DateTimeFormat("en-US", { timeZone: e }).format(), !0;
            } catch {
              return !1;
            }
          }
          constructor(e) {
            super(), this.zoneName = e, this.valid = mt.isValidZone(e);
          }
          get type() {
            return "iana";
          }
          get name() {
            return this.zoneName;
          }
          get isUniversal() {
            return !1;
          }
          offsetName(e, { format: i, locale: a }) {
            return be(e, i, a, this.name);
          }
          formatOffset(e, i) {
            return oe(this.offset(e), i);
          }
          offset(e) {
            const i = new Date(e);
            if (isNaN(i)) return NaN;
            const a = (f = this.name, j[f] || (j[f] = new Intl.DateTimeFormat("en-US", { hour12: !1, timeZone: f, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", era: "short" })), j[f]);
            var f;
            let [O, D, W, te, pe, Je, xe] = a.formatToParts ? (function($e, St) {
              const yt = $e.formatToParts(St), Et = [];
              for (let Rt = 0; Rt < yt.length; Rt++) {
                const { type: Ft, value: Ot } = yt[Rt], Lt = Y[Ft];
                Ft === "era" ? Et[Lt] = Ot : Ze(Lt) || (Et[Lt] = parseInt(Ot, 10));
              }
              return Et;
            })(a, i) : (function($e, St) {
              const yt = $e.format(St).replace(/\u200E/g, ""), Et = /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(yt), [, Rt, Ft, Ot, Lt, Jt, Cn, Yt] = Et;
              return [Ot, Rt, Ft, Lt, Jt, Cn, Yt];
            })(a, i);
            te === "BC" && (O = 1 - Math.abs(O));
            let Qe = +i;
            const tt = Qe % 1e3;
            return Qe -= tt >= 0 ? tt : 1e3 + tt, (s({ year: O, month: D, day: W, hour: pe === 24 ? 0 : pe, minute: Je, second: xe, millisecond: 0 }) - Qe) / 6e4;
          }
          equals(e) {
            return e.type === "iana" && e.name === this.name;
          }
          get isValid() {
            return this.valid;
          }
        }
        let At = {}, Nt = {};
        function _t(l, e = {}) {
          const i = JSON.stringify([l, e]);
          let a = Nt[i];
          return a || (a = new Intl.DateTimeFormat(l, e), Nt[i] = a), a;
        }
        let w = {}, r = {}, n = null, u = {};
        function h(l, e, i, a) {
          const f = l.listingMode();
          return f === "error" ? null : f === "en" ? i(e) : a(e);
        }
        class k {
          constructor(e, i, a) {
            this.padTo = a.padTo || 0, this.floor = a.floor || !1;
            const { padTo: f, floor: O, ...D } = a;
            if (!i || Object.keys(D).length > 0) {
              const W = { useGrouping: !1, ...a };
              a.padTo > 0 && (W.minimumIntegerDigits = a.padTo), this.inf = (function(te, pe = {}) {
                const Je = JSON.stringify([te, pe]);
                let xe = w[Je];
                return xe || (xe = new Intl.NumberFormat(te, pe), w[Je] = xe), xe;
              })(e, W);
            }
          }
          format(e) {
            if (this.inf) {
              const i = this.floor ? Math.floor(e) : e;
              return this.inf.format(i);
            }
            return It(this.floor ? Math.floor(e) : cn(e, 3), this.padTo);
          }
        }
        class P {
          constructor(e, i, a) {
            let f;
            if (this.opts = a, this.originalZone = void 0, this.opts.timeZone) this.dt = e;
            else if (e.zone.type === "fixed") {
              const D = e.offset / 60 * -1, W = D >= 0 ? `Etc/GMT+${D}` : `Etc/GMT${D}`;
              e.offset !== 0 && mt.create(W).valid ? (f = W, this.dt = e) : (f = "UTC", this.dt = e.offset === 0 ? e : e.setZone("UTC").plus({ minutes: e.offset }), this.originalZone = e.zone);
            } else e.zone.type === "system" ? this.dt = e : e.zone.type === "iana" ? (this.dt = e, f = e.zone.name) : (f = "UTC", this.dt = e.setZone("UTC").plus({ minutes: e.offset }), this.originalZone = e.zone);
            const O = { ...this.opts };
            O.timeZone = O.timeZone || f, this.dtf = _t(i, O);
          }
          format() {
            return this.originalZone ? this.formatToParts().map(({ value: e }) => e).join("") : this.dtf.format(this.dt.toJSDate());
          }
          formatToParts() {
            const e = this.dtf.formatToParts(this.dt.toJSDate());
            return this.originalZone ? e.map((i) => {
              if (i.type === "timeZoneName") {
                const a = this.originalZone.offsetName(this.dt.ts, { locale: this.dt.locale, format: this.opts.timeZoneName });
                return { ...i, value: a };
              }
              return i;
            }) : e;
          }
          resolvedOptions() {
            return this.dtf.resolvedOptions();
          }
        }
        class G {
          constructor(e, i, a) {
            this.opts = { style: "long", ...a }, !i && bn() && (this.rtf = (function(f, O = {}) {
              const { base: D, ...W } = O, te = JSON.stringify([f, W]);
              let pe = r[te];
              return pe || (pe = new Intl.RelativeTimeFormat(f, O), r[te] = pe), pe;
            })(e, a));
          }
          format(e, i) {
            return this.rtf ? this.rtf.format(e, i) : (function(a, f, O = "always", D = !1) {
              const W = { years: ["year", "yr."], quarters: ["quarter", "qtr."], months: ["month", "mo."], weeks: ["week", "wk."], days: ["day", "day", "days"], hours: ["hour", "hr."], minutes: ["minute", "min."], seconds: ["second", "sec."] }, te = ["hours", "minutes", "seconds"].indexOf(a) === -1;
              if (O === "auto" && te) {
                const $e = a === "days";
                switch (f) {
                  case 1:
                    return $e ? "tomorrow" : `next ${W[a][0]}`;
                  case -1:
                    return $e ? "yesterday" : `last ${W[a][0]}`;
                  case 0:
                    return $e ? "today" : `this ${W[a][0]}`;
                }
              }
              const pe = Object.is(f, -0) || f < 0, Je = Math.abs(f), xe = Je === 1, Qe = W[a], tt = D ? xe ? Qe[1] : Qe[2] || Qe[1] : xe ? W[a][0] : a;
              return pe ? `${Je} ${tt} ago` : `in ${Je} ${tt}`;
            })(i, e, this.opts.numeric, this.opts.style !== "long");
          }
          formatToParts(e, i) {
            return this.rtf ? this.rtf.formatToParts(e, i) : [];
          }
        }
        const B = { firstDay: 1, minimalDays: 4, weekend: [6, 7] };
        class X {
          static fromOpts(e) {
            return X.create(e.locale, e.numberingSystem, e.outputCalendar, e.weekSettings, e.defaultToEN);
          }
          static create(e, i, a, f, O = !1) {
            const D = e || ie.defaultLocale, W = D || (O ? "en-US" : n || (n = new Intl.DateTimeFormat().resolvedOptions().locale, n)), te = i || ie.defaultNumberingSystem, pe = a || ie.defaultOutputCalendar, Je = Wt(f) || ie.defaultWeekSettings;
            return new X(W, te, pe, Je, D);
          }
          static resetCache() {
            n = null, Nt = {}, w = {}, r = {};
          }
          static fromObject({ locale: e, numberingSystem: i, outputCalendar: a, weekSettings: f } = {}) {
            return X.create(e, i, a, f);
          }
          constructor(e, i, a, f, O) {
            const [D, W, te] = (function(pe) {
              const Je = pe.indexOf("-x-");
              Je !== -1 && (pe = pe.substring(0, Je));
              const xe = pe.indexOf("-u-");
              if (xe === -1) return [pe];
              {
                let Qe, tt;
                try {
                  Qe = _t(pe).resolvedOptions(), tt = pe;
                } catch {
                  const Et = pe.substring(0, xe);
                  Qe = _t(Et).resolvedOptions(), tt = Et;
                }
                const { numberingSystem: $e, calendar: St } = Qe;
                return [tt, $e, St];
              }
            })(e);
            this.locale = D, this.numberingSystem = i || W || null, this.outputCalendar = a || te || null, this.weekSettings = f, this.intl = (function(pe, Je, xe) {
              return (xe || Je) && (pe.includes("-u-") || (pe += "-u"), xe && (pe += `-ca-${xe}`), Je && (pe += `-nu-${Je}`)), pe;
            })(this.locale, this.numberingSystem, this.outputCalendar), this.weekdaysCache = { format: {}, standalone: {} }, this.monthsCache = { format: {}, standalone: {} }, this.meridiemCache = null, this.eraCache = {}, this.specifiedLocale = O, this.fastNumbersCached = null;
          }
          get fastNumbers() {
            var e;
            return this.fastNumbersCached == null && (this.fastNumbersCached = (!(e = this).numberingSystem || e.numberingSystem === "latn") && (e.numberingSystem === "latn" || !e.locale || e.locale.startsWith("en") || new Intl.DateTimeFormat(e.intl).resolvedOptions().numberingSystem === "latn")), this.fastNumbersCached;
          }
          listingMode() {
            const e = this.isEnglish(), i = !(this.numberingSystem !== null && this.numberingSystem !== "latn" || this.outputCalendar !== null && this.outputCalendar !== "gregory");
            return e && i ? "en" : "intl";
          }
          clone(e) {
            return e && Object.getOwnPropertyNames(e).length !== 0 ? X.create(e.locale || this.specifiedLocale, e.numberingSystem || this.numberingSystem, e.outputCalendar || this.outputCalendar, Wt(e.weekSettings) || this.weekSettings, e.defaultToEN || !1) : this;
          }
          redefaultToEN(e = {}) {
            return this.clone({ ...e, defaultToEN: !0 });
          }
          redefaultToSystem(e = {}) {
            return this.clone({ ...e, defaultToEN: !1 });
          }
          months(e, i = !1) {
            return h(this, e, Bt, () => {
              const a = i ? { month: e, day: "numeric" } : { month: e }, f = i ? "format" : "standalone";
              return this.monthsCache[f][e] || (this.monthsCache[f][e] = (function(O) {
                const D = [];
                for (let W = 1; W <= 12; W++) {
                  const te = rt.utc(2009, W, 1);
                  D.push(O(te));
                }
                return D;
              })((O) => this.extract(O, a, "month"))), this.monthsCache[f][e];
            });
          }
          weekdays(e, i = !1) {
            return h(this, e, kn, () => {
              const a = i ? { weekday: e, year: "numeric", month: "long", day: "numeric" } : { weekday: e }, f = i ? "format" : "standalone";
              return this.weekdaysCache[f][e] || (this.weekdaysCache[f][e] = (function(O) {
                const D = [];
                for (let W = 1; W <= 7; W++) {
                  const te = rt.utc(2016, 11, 13 + W);
                  D.push(O(te));
                }
                return D;
              })((O) => this.extract(O, a, "weekday"))), this.weekdaysCache[f][e];
            });
          }
          meridiems() {
            return h(this, void 0, () => Un, () => {
              if (!this.meridiemCache) {
                const e = { hour: "numeric", hourCycle: "h12" };
                this.meridiemCache = [rt.utc(2016, 11, 13, 9), rt.utc(2016, 11, 13, 19)].map((i) => this.extract(i, e, "dayperiod"));
              }
              return this.meridiemCache;
            });
          }
          eras(e) {
            return h(this, e, o, () => {
              const i = { era: e };
              return this.eraCache[e] || (this.eraCache[e] = [rt.utc(-40, 1, 1), rt.utc(2017, 1, 1)].map((a) => this.extract(a, i, "era"))), this.eraCache[e];
            });
          }
          extract(e, i, a) {
            const f = this.dtFormatter(e, i).formatToParts().find((O) => O.type.toLowerCase() === a);
            return f ? f.value : null;
          }
          numberFormatter(e = {}) {
            return new k(this.intl, e.forceSimple || this.fastNumbers, e);
          }
          dtFormatter(e, i = {}) {
            return new P(e, this.intl, i);
          }
          relFormatter(e = {}) {
            return new G(this.intl, this.isEnglish(), e);
          }
          listFormatter(e = {}) {
            return (function(i, a = {}) {
              const f = JSON.stringify([i, a]);
              let O = At[f];
              return O || (O = new Intl.ListFormat(i, a), At[f] = O), O;
            })(this.intl, e);
          }
          isEnglish() {
            return this.locale === "en" || this.locale.toLowerCase() === "en-us" || new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us");
          }
          getWeekSettings() {
            return this.weekSettings ? this.weekSettings : fn() ? (function(e) {
              let i = u[e];
              if (!i) {
                const a = new Intl.Locale(e);
                i = "getWeekInfo" in a ? a.getWeekInfo() : a.weekInfo, u[e] = i;
              }
              return i;
            })(this.locale) : B;
          }
          getStartOfWeek() {
            return this.getWeekSettings().firstDay;
          }
          getMinDaysInFirstWeek() {
            return this.getWeekSettings().minimalDays;
          }
          getWeekendDays() {
            return this.getWeekSettings().weekend;
          }
          equals(e) {
            return this.locale === e.locale && this.numberingSystem === e.numberingSystem && this.outputCalendar === e.outputCalendar;
          }
        }
        let le = null;
        class ce extends ae {
          static get utcInstance() {
            return le === null && (le = new ce(0)), le;
          }
          static instance(e) {
            return e === 0 ? ce.utcInstance : new ce(e);
          }
          static parseSpecifier(e) {
            if (e) {
              const i = e.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
              if (i) return new ce(we(i[1], i[2]));
            }
            return null;
          }
          constructor(e) {
            super(), this.fixed = e;
          }
          get type() {
            return "fixed";
          }
          get name() {
            return this.fixed === 0 ? "UTC" : `UTC${oe(this.fixed, "narrow")}`;
          }
          get ianaName() {
            return this.fixed === 0 ? "Etc/UTC" : `Etc/GMT${oe(-this.fixed, "narrow")}`;
          }
          offsetName() {
            return this.name;
          }
          formatOffset(e, i) {
            return oe(this.fixed, i);
          }
          get isUniversal() {
            return !0;
          }
          offset() {
            return this.fixed;
          }
          equals(e) {
            return e.type === "fixed" && e.fixed === this.fixed;
          }
          get isValid() {
            return !0;
          }
        }
        class Q extends ae {
          constructor(e) {
            super(), this.zoneName = e;
          }
          get type() {
            return "invalid";
          }
          get name() {
            return this.zoneName;
          }
          get isUniversal() {
            return !1;
          }
          offsetName() {
            return null;
          }
          formatOffset() {
            return "";
          }
          offset() {
            return NaN;
          }
          equals() {
            return !1;
          }
          get isValid() {
            return !1;
          }
        }
        function He(l, e) {
          if (Ze(l) || l === null) return e;
          if (l instanceof ae) return l;
          if (typeof l == "string") {
            const i = l.toLowerCase();
            return i === "default" ? e : i === "local" || i === "system" ? S.instance : i === "utc" || i === "gmt" ? ce.utcInstance : ce.parseSpecifier(i) || mt.create(l);
          }
          return xt(l) ? ce.instance(l) : typeof l == "object" && "offset" in l && typeof l.offset == "function" ? l : new Q(l);
        }
        let Ye, vt = () => Date.now(), wt = "system", Ut = null, lt = null, J = null, E = 60, ne = null;
        class ie {
          static get now() {
            return vt;
          }
          static set now(e) {
            vt = e;
          }
          static set defaultZone(e) {
            wt = e;
          }
          static get defaultZone() {
            return He(wt, S.instance);
          }
          static get defaultLocale() {
            return Ut;
          }
          static set defaultLocale(e) {
            Ut = e;
          }
          static get defaultNumberingSystem() {
            return lt;
          }
          static set defaultNumberingSystem(e) {
            lt = e;
          }
          static get defaultOutputCalendar() {
            return J;
          }
          static set defaultOutputCalendar(e) {
            J = e;
          }
          static get defaultWeekSettings() {
            return ne;
          }
          static set defaultWeekSettings(e) {
            ne = Wt(e);
          }
          static get twoDigitCutoffYear() {
            return E;
          }
          static set twoDigitCutoffYear(e) {
            E = e % 100;
          }
          static get throwOnInvalid() {
            return Ye;
          }
          static set throwOnInvalid(e) {
            Ye = e;
          }
          static resetCaches() {
            X.resetCache(), mt.resetCache();
          }
        }
        class se {
          constructor(e, i) {
            this.reason = e, this.explanation = i;
          }
          toMessage() {
            return this.explanation ? `${this.reason}: ${this.explanation}` : this.reason;
          }
        }
        const he = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], Ie = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
        function T(l, e) {
          return new se("unit out of range", `you specified ${e} (of type ${typeof e}) as a ${l}, which is invalid`);
        }
        function R(l, e, i) {
          const a = new Date(Date.UTC(l, e - 1, i));
          l < 100 && l >= 0 && a.setUTCFullYear(a.getUTCFullYear() - 1900);
          const f = a.getUTCDay();
          return f === 0 ? 7 : f;
        }
        function x(l, e, i) {
          return i + (mn(l) ? Ie : he)[e - 1];
        }
        function F(l, e) {
          const i = mn(l) ? Ie : he, a = i.findIndex((f) => f < e);
          return { month: a + 1, day: e - i[a] };
        }
        function H(l, e) {
          return (l - e + 7) % 7 + 1;
        }
        function re(l, e = 4, i = 1) {
          const { year: a, month: f, day: O } = l, D = x(a, f, O), W = H(R(a, f, O), i);
          let te, pe = Math.floor((D - W + 14 - e) / 7);
          return pe < 1 ? (te = a - 1, pe = c(te, e, i)) : pe > c(a, e, i) ? (te = a + 1, pe = 1) : te = a, { weekYear: te, weekNumber: pe, weekday: W, ...et(l) };
        }
        function Ne(l, e = 4, i = 1) {
          const { weekYear: a, weekNumber: f, weekday: O } = l, D = H(R(a, 1, e), i), W = p(a);
          let te, pe = 7 * f + O - D - 7 + e;
          pe < 1 ? (te = a - 1, pe += p(te)) : pe > W ? (te = a + 1, pe -= p(a)) : te = a;
          const { month: Je, day: xe } = F(te, pe);
          return { year: te, month: Je, day: xe, ...et(l) };
        }
        function Fe(l) {
          const { year: e, month: i, day: a } = l;
          return { year: e, ordinal: x(e, i, a), ...et(l) };
        }
        function pt(l) {
          const { year: e, ordinal: i } = l, { month: a, day: f } = F(e, i);
          return { year: e, month: a, day: f, ...et(l) };
        }
        function dt(l, e) {
          if (!Ze(l.localWeekday) || !Ze(l.localWeekNumber) || !Ze(l.localWeekYear)) {
            if (!Ze(l.weekday) || !Ze(l.weekNumber) || !Ze(l.weekYear)) throw new Ge("Cannot mix locale-based week fields with ISO-based week fields");
            return Ze(l.localWeekday) || (l.weekday = l.localWeekday), Ze(l.localWeekNumber) || (l.weekNumber = l.localWeekNumber), Ze(l.localWeekYear) || (l.weekYear = l.localWeekYear), delete l.localWeekday, delete l.localWeekNumber, delete l.localWeekYear, { minDaysInFirstWeek: e.getMinDaysInFirstWeek(), startOfWeek: e.getStartOfWeek() };
          }
          return { minDaysInFirstWeek: 4, startOfWeek: 1 };
        }
        function ct(l) {
          const e = tn(l.year), i = zt(l.month, 1, 12), a = zt(l.day, 1, t(l.year, l.month));
          return e ? i ? !a && T("day", l.day) : T("month", l.month) : T("year", l.year);
        }
        function Ht(l) {
          const { hour: e, minute: i, second: a, millisecond: f } = l, O = zt(e, 0, 23) || e === 24 && i === 0 && a === 0 && f === 0, D = zt(i, 0, 59), W = zt(a, 0, 59), te = zt(f, 0, 999);
          return O ? D ? W ? !te && T("millisecond", f) : T("second", a) : T("minute", i) : T("hour", e);
        }
        function Ze(l) {
          return l === void 0;
        }
        function xt(l) {
          return typeof l == "number";
        }
        function tn(l) {
          return typeof l == "number" && l % 1 == 0;
        }
        function bn() {
          try {
            return typeof Intl < "u" && !!Intl.RelativeTimeFormat;
          } catch {
            return !1;
          }
        }
        function fn() {
          try {
            return typeof Intl < "u" && !!Intl.Locale && ("weekInfo" in Intl.Locale.prototype || "getWeekInfo" in Intl.Locale.prototype);
          } catch {
            return !1;
          }
        }
        function gn(l, e, i) {
          if (l.length !== 0) return l.reduce((a, f) => {
            const O = [e(f), f];
            return a && i(a[0], O[0]) === a[0] ? a : O;
          }, null)[1];
        }
        function ln(l, e) {
          return Object.prototype.hasOwnProperty.call(l, e);
        }
        function Wt(l) {
          if (l == null) return null;
          if (typeof l != "object") throw new Oe("Week settings must be an object");
          if (!zt(l.firstDay, 1, 7) || !zt(l.minimalDays, 1, 7) || !Array.isArray(l.weekend) || l.weekend.some((e) => !zt(e, 1, 7))) throw new Oe("Invalid week settings");
          return { firstDay: l.firstDay, minimalDays: l.minimalDays, weekend: Array.from(l.weekend) };
        }
        function zt(l, e, i) {
          return tn(l) && l >= e && l <= i;
        }
        function It(l, e = 2) {
          let i;
          return i = l < 0 ? "-" + ("" + -l).padStart(e, "0") : ("" + l).padStart(e, "0"), i;
        }
        function nn(l) {
          return Ze(l) || l === null || l === "" ? void 0 : parseInt(l, 10);
        }
        function sn(l) {
          return Ze(l) || l === null || l === "" ? void 0 : parseFloat(l);
        }
        function wn(l) {
          if (!Ze(l) && l !== null && l !== "") {
            const e = 1e3 * parseFloat("0." + l);
            return Math.floor(e);
          }
        }
        function cn(l, e, i = !1) {
          const a = 10 ** e;
          return (i ? Math.trunc : Math.round)(l * a) / a;
        }
        function mn(l) {
          return l % 4 == 0 && (l % 100 != 0 || l % 400 == 0);
        }
        function p(l) {
          return mn(l) ? 366 : 365;
        }
        function t(l, e) {
          const i = (a = e - 1) - 12 * Math.floor(a / 12) + 1;
          var a;
          return i === 2 ? mn(l + (e - i) / 12) ? 29 : 28 : [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][i - 1];
        }
        function s(l) {
          let e = Date.UTC(l.year, l.month - 1, l.day, l.hour, l.minute, l.second, l.millisecond);
          return l.year < 100 && l.year >= 0 && (e = new Date(e), e.setUTCFullYear(l.year, l.month - 1, l.day)), +e;
        }
        function b(l, e, i) {
          return -H(R(l, 1, e), i) + e - 1;
        }
        function c(l, e = 4, i = 1) {
          const a = b(l, e, i), f = b(l + 1, e, i);
          return (p(l) - a + f) / 7;
        }
        function I(l) {
          return l > 99 ? l : l > ie.twoDigitCutoffYear ? 1900 + l : 2e3 + l;
        }
        function be(l, e, i, a = null) {
          const f = new Date(l), O = { hourCycle: "h23", year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" };
          a && (O.timeZone = a);
          const D = { timeZoneName: e, ...O }, W = new Intl.DateTimeFormat(i, D).formatToParts(f).find((te) => te.type.toLowerCase() === "timezonename");
          return W ? W.value : null;
        }
        function we(l, e) {
          let i = parseInt(l, 10);
          Number.isNaN(i) && (i = 0);
          const a = parseInt(e, 10) || 0;
          return 60 * i + (i < 0 || Object.is(i, -0) ? -a : a);
        }
        function Le(l) {
          const e = Number(l);
          if (typeof l == "boolean" || l === "" || Number.isNaN(e)) throw new Oe(`Invalid unit value ${l}`);
          return e;
        }
        function ue(l, e) {
          const i = {};
          for (const a in l) if (ln(l, a)) {
            const f = l[a];
            if (f == null) continue;
            i[e(a)] = Le(f);
          }
          return i;
        }
        function oe(l, e) {
          const i = Math.trunc(Math.abs(l / 60)), a = Math.trunc(Math.abs(l % 60)), f = l >= 0 ? "+" : "-";
          switch (e) {
            case "short":
              return `${f}${It(i, 2)}:${It(a, 2)}`;
            case "narrow":
              return `${f}${i}${a > 0 ? `:${a}` : ""}`;
            case "techie":
              return `${f}${It(i, 2)}${It(a, 2)}`;
            default:
              throw new RangeError(`Value format ${e} is out of range for property format`);
          }
        }
        function et(l) {
          return (function(e) {
            return ["hour", "minute", "second", "millisecond"].reduce((i, a) => (i[a] = e[a], i), {});
          })(l);
        }
        const ht = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], ft = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], kt = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
        function Bt(l) {
          switch (l) {
            case "narrow":
              return [...kt];
            case "short":
              return [...ft];
            case "long":
              return [...ht];
            case "numeric":
              return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
            case "2-digit":
              return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
            default:
              return null;
          }
        }
        const jt = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], Gt = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], rn = ["M", "T", "W", "T", "F", "S", "S"];
        function kn(l) {
          switch (l) {
            case "narrow":
              return [...rn];
            case "short":
              return [...Gt];
            case "long":
              return [...jt];
            case "numeric":
              return ["1", "2", "3", "4", "5", "6", "7"];
            default:
              return null;
          }
        }
        const Un = ["AM", "PM"], Tn = ["Before Christ", "Anno Domini"], _n = ["BC", "AD"], Ct = ["B", "A"];
        function o(l) {
          switch (l) {
            case "narrow":
              return [...Ct];
            case "short":
              return [..._n];
            case "long":
              return [...Tn];
            default:
              return null;
          }
        }
        function d(l, e) {
          let i = "";
          for (const a of l) a.literal ? i += a.val : i += e(a.val);
          return i;
        }
        const y = { D: Be, DD: Ke, DDD: st, DDDD: Me, t: it, tt: Te, ttt: Ce, tttt: Xe, T: ot, TT: Ae, TTT: me, TTTT: Pe, f: C, ff: L, fff: m, ffff: de, F: N, FF: A, FFF: U, FFFF: ve };
        class v {
          static create(e, i = {}) {
            return new v(e, i);
          }
          static parseFormat(e) {
            let i = null, a = "", f = !1;
            const O = [];
            for (let D = 0; D < e.length; D++) {
              const W = e.charAt(D);
              W === "'" ? (a.length > 0 && O.push({ literal: f || /^\s+$/.test(a), val: a }), i = null, a = "", f = !f) : f || W === i ? a += W : (a.length > 0 && O.push({ literal: /^\s+$/.test(a), val: a }), a = W, i = W);
            }
            return a.length > 0 && O.push({ literal: f || /^\s+$/.test(a), val: a }), O;
          }
          static macroTokenToFormatOpts(e) {
            return y[e];
          }
          constructor(e, i) {
            this.opts = i, this.loc = e, this.systemLoc = null;
          }
          formatWithSystemDefault(e, i) {
            return this.systemLoc === null && (this.systemLoc = this.loc.redefaultToSystem()), this.systemLoc.dtFormatter(e, { ...this.opts, ...i }).format();
          }
          dtFormatter(e, i = {}) {
            return this.loc.dtFormatter(e, { ...this.opts, ...i });
          }
          formatDateTime(e, i) {
            return this.dtFormatter(e, i).format();
          }
          formatDateTimeParts(e, i) {
            return this.dtFormatter(e, i).formatToParts();
          }
          formatInterval(e, i) {
            return this.dtFormatter(e.start, i).dtf.formatRange(e.start.toJSDate(), e.end.toJSDate());
          }
          resolvedOptions(e, i) {
            return this.dtFormatter(e, i).resolvedOptions();
          }
          num(e, i = 0) {
            if (this.opts.forceSimple) return It(e, i);
            const a = { ...this.opts };
            return i > 0 && (a.padTo = i), this.loc.numberFormatter(a).format(e);
          }
          formatDateTimeFromString(e, i) {
            const a = this.loc.listingMode() === "en", f = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory", O = (xe, Qe) => this.loc.extract(e, xe, Qe), D = (xe) => e.isOffsetFixed && e.offset === 0 && xe.allowZ ? "Z" : e.isValid ? e.zone.formatOffset(e.ts, xe.format) : "", W = (xe, Qe) => a ? (function(tt, $e) {
              return Bt($e)[tt.month - 1];
            })(e, xe) : O(Qe ? { month: xe } : { month: xe, day: "numeric" }, "month"), te = (xe, Qe) => a ? (function(tt, $e) {
              return kn($e)[tt.weekday - 1];
            })(e, xe) : O(Qe ? { weekday: xe } : { weekday: xe, month: "long", day: "numeric" }, "weekday"), pe = (xe) => {
              const Qe = v.macroTokenToFormatOpts(xe);
              return Qe ? this.formatWithSystemDefault(e, Qe) : xe;
            }, Je = (xe) => a ? (function(Qe, tt) {
              return o(tt)[Qe.year < 0 ? 0 : 1];
            })(e, xe) : O({ era: xe }, "era");
            return d(v.parseFormat(i), (xe) => {
              switch (xe) {
                case "S":
                  return this.num(e.millisecond);
                case "u":
                case "SSS":
                  return this.num(e.millisecond, 3);
                case "s":
                  return this.num(e.second);
                case "ss":
                  return this.num(e.second, 2);
                case "uu":
                  return this.num(Math.floor(e.millisecond / 10), 2);
                case "uuu":
                  return this.num(Math.floor(e.millisecond / 100));
                case "m":
                  return this.num(e.minute);
                case "mm":
                  return this.num(e.minute, 2);
                case "h":
                  return this.num(e.hour % 12 == 0 ? 12 : e.hour % 12);
                case "hh":
                  return this.num(e.hour % 12 == 0 ? 12 : e.hour % 12, 2);
                case "H":
                  return this.num(e.hour);
                case "HH":
                  return this.num(e.hour, 2);
                case "Z":
                  return D({ format: "narrow", allowZ: this.opts.allowZ });
                case "ZZ":
                  return D({ format: "short", allowZ: this.opts.allowZ });
                case "ZZZ":
                  return D({ format: "techie", allowZ: this.opts.allowZ });
                case "ZZZZ":
                  return e.zone.offsetName(e.ts, { format: "short", locale: this.loc.locale });
                case "ZZZZZ":
                  return e.zone.offsetName(e.ts, { format: "long", locale: this.loc.locale });
                case "z":
                  return e.zoneName;
                case "a":
                  return a ? (function(Qe) {
                    return Un[Qe.hour < 12 ? 0 : 1];
                  })(e) : O({ hour: "numeric", hourCycle: "h12" }, "dayperiod");
                case "d":
                  return f ? O({ day: "numeric" }, "day") : this.num(e.day);
                case "dd":
                  return f ? O({ day: "2-digit" }, "day") : this.num(e.day, 2);
                case "c":
                case "E":
                  return this.num(e.weekday);
                case "ccc":
                  return te("short", !0);
                case "cccc":
                  return te("long", !0);
                case "ccccc":
                  return te("narrow", !0);
                case "EEE":
                  return te("short", !1);
                case "EEEE":
                  return te("long", !1);
                case "EEEEE":
                  return te("narrow", !1);
                case "L":
                  return f ? O({ month: "numeric", day: "numeric" }, "month") : this.num(e.month);
                case "LL":
                  return f ? O({ month: "2-digit", day: "numeric" }, "month") : this.num(e.month, 2);
                case "LLL":
                  return W("short", !0);
                case "LLLL":
                  return W("long", !0);
                case "LLLLL":
                  return W("narrow", !0);
                case "M":
                  return f ? O({ month: "numeric" }, "month") : this.num(e.month);
                case "MM":
                  return f ? O({ month: "2-digit" }, "month") : this.num(e.month, 2);
                case "MMM":
                  return W("short", !1);
                case "MMMM":
                  return W("long", !1);
                case "MMMMM":
                  return W("narrow", !1);
                case "y":
                  return f ? O({ year: "numeric" }, "year") : this.num(e.year);
                case "yy":
                  return f ? O({ year: "2-digit" }, "year") : this.num(e.year.toString().slice(-2), 2);
                case "yyyy":
                  return f ? O({ year: "numeric" }, "year") : this.num(e.year, 4);
                case "yyyyyy":
                  return f ? O({ year: "numeric" }, "year") : this.num(e.year, 6);
                case "G":
                  return Je("short");
                case "GG":
                  return Je("long");
                case "GGGGG":
                  return Je("narrow");
                case "kk":
                  return this.num(e.weekYear.toString().slice(-2), 2);
                case "kkkk":
                  return this.num(e.weekYear, 4);
                case "W":
                  return this.num(e.weekNumber);
                case "WW":
                  return this.num(e.weekNumber, 2);
                case "n":
                  return this.num(e.localWeekNumber);
                case "nn":
                  return this.num(e.localWeekNumber, 2);
                case "ii":
                  return this.num(e.localWeekYear.toString().slice(-2), 2);
                case "iiii":
                  return this.num(e.localWeekYear, 4);
                case "o":
                  return this.num(e.ordinal);
                case "ooo":
                  return this.num(e.ordinal, 3);
                case "q":
                  return this.num(e.quarter);
                case "qq":
                  return this.num(e.quarter, 2);
                case "X":
                  return this.num(Math.floor(e.ts / 1e3));
                case "x":
                  return this.num(e.ts);
                default:
                  return pe(xe);
              }
            });
          }
          formatDurationFromString(e, i) {
            const a = (D) => {
              switch (D[0]) {
                case "S":
                  return "millisecond";
                case "s":
                  return "second";
                case "m":
                  return "minute";
                case "h":
                  return "hour";
                case "d":
                  return "day";
                case "w":
                  return "week";
                case "M":
                  return "month";
                case "y":
                  return "year";
                default:
                  return null;
              }
            }, f = v.parseFormat(i), O = f.reduce((D, { literal: W, val: te }) => W ? D : D.concat(te), []);
            return d(f, /* @__PURE__ */ ((D) => (W) => {
              const te = a(W);
              return te ? this.num(D.get(te), W.length) : W;
            })(e.shiftTo(...O.map(a).filter((D) => D))));
          }
        }
        const M = /[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;
        function $(...l) {
          const e = l.reduce((i, a) => i + a.source, "");
          return RegExp(`^${e}$`);
        }
        function q(...l) {
          return (e) => l.reduce(([i, a, f], O) => {
            const [D, W, te] = O(e, f);
            return [{ ...i, ...D }, W || a, te];
          }, [{}, null, 1]).slice(0, 2);
        }
        function ee(l, ...e) {
          if (l == null) return [null, null];
          for (const [i, a] of e) {
            const f = i.exec(l);
            if (f) return a(f);
          }
          return [null, null];
        }
        function fe(...l) {
          return (e, i) => {
            const a = {};
            let f;
            for (f = 0; f < l.length; f++) a[l[f]] = nn(e[i + f]);
            return [a, null, i + f];
          };
        }
        const ge = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/, ye = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/, _e = RegExp(`${ye.source}(?:${ge.source}?(?:\\[(${M.source})\\])?)?`), Re = RegExp(`(?:T${_e.source})?`), qe = fe("weekYear", "weekNumber", "weekDay"), We = fe("year", "ordinal"), Ue = RegExp(`${ye.source} ?(?:${ge.source}|(${M.source}))?`), at = RegExp(`(?: ${Ue.source})?`);
        function Pt(l, e, i) {
          const a = l[e];
          return Ze(a) ? i : nn(a);
        }
        function gt(l, e) {
          return [{ hours: Pt(l, e, 0), minutes: Pt(l, e + 1, 0), seconds: Pt(l, e + 2, 0), milliseconds: wn(l[e + 3]) }, null, e + 4];
        }
        function Vt(l, e) {
          const i = !l[e] && !l[e + 1], a = we(l[e + 1], l[e + 2]);
          return [{}, i ? null : ce.instance(a), e + 3];
        }
        function on(l, e) {
          return [{}, l[e] ? mt.create(l[e]) : null, e + 1];
        }
        const Bn = RegExp(`^T?${ye.source}$`), pn = /^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;
        function jn(l) {
          const [e, i, a, f, O, D, W, te, pe] = l, Je = e[0] === "-", xe = te && te[0] === "-", Qe = (tt, $e = !1) => tt !== void 0 && ($e || tt && Je) ? -tt : tt;
          return [{ years: Qe(sn(i)), months: Qe(sn(a)), weeks: Qe(sn(f)), days: Qe(sn(O)), hours: Qe(sn(D)), minutes: Qe(sn(W)), seconds: Qe(sn(te), te === "-0"), milliseconds: Qe(wn(pe), xe) }];
        }
        const xn = { GMT: 0, EDT: -240, EST: -300, CDT: -300, CST: -360, MDT: -360, MST: -420, PDT: -420, PST: -480 };
        function Pn(l, e, i, a, f, O, D) {
          const W = { year: e.length === 2 ? I(nn(e)) : nn(e), month: ft.indexOf(i) + 1, day: nn(a), hour: nn(f), minute: nn(O) };
          return D && (W.second = nn(D)), l && (W.weekday = l.length > 3 ? jt.indexOf(l) + 1 : Gt.indexOf(l) + 1), W;
        }
        const Hn = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
        function Vn(l) {
          const [, e, i, a, f, O, D, W, te, pe, Je, xe] = l, Qe = Pn(e, f, a, i, O, D, W);
          let tt;
          return tt = te ? xn[te] : pe ? 0 : we(Je, xe), [Qe, new ce(tt)];
        }
        const Rn = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/, En = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/, Wn = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
        function Kt(l) {
          const [, e, i, a, f, O, D, W] = l;
          return [Pn(e, f, a, i, O, D, W), ce.utcInstance];
        }
        function Jn(l) {
          const [, e, i, a, f, O, D, W] = l;
          return [Pn(e, W, i, a, f, O, D), ce.utcInstance];
        }
        const vn = $(/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/, Re), Zn = $(/(\d{4})-?W(\d\d)(?:-?(\d))?/, Re), si = $(/(\d{4})-?(\d{3})/, Re), un = $(_e), an = q(function(l, e) {
          return [{ year: Pt(l, e), month: Pt(l, e + 1, 1), day: Pt(l, e + 2, 1) }, null, e + 3];
        }, gt, Vt, on), In = q(qe, gt, Vt, on), qt = q(We, gt, Vt, on), qn = q(gt, Vt, on), _i = q(gt), ji = $(/(\d{4})-(\d\d)-(\d\d)/, at), qi = $(Ue), Fi = q(gt, Vt, on), fi = "Invalid Duration", gi = { weeks: { days: 7, hours: 168, minutes: 10080, seconds: 604800, milliseconds: 6048e5 }, days: { hours: 24, minutes: 1440, seconds: 86400, milliseconds: 864e5 }, hours: { minutes: 60, seconds: 3600, milliseconds: 36e5 }, minutes: { seconds: 60, milliseconds: 6e4 }, seconds: { milliseconds: 1e3 } }, $i = { years: { quarters: 4, months: 12, weeks: 52, days: 365, hours: 8760, minutes: 525600, seconds: 31536e3, milliseconds: 31536e6 }, quarters: { months: 3, weeks: 13, days: 91, hours: 2184, minutes: 131040, seconds: 7862400, milliseconds: 78624e5 }, months: { weeks: 4, days: 30, hours: 720, minutes: 43200, seconds: 2592e3, milliseconds: 2592e6 }, ...gi }, zi = { years: { quarters: 4, months: 12, weeks: 52.1775, days: 365.2425, hours: 8765.82, minutes: 525949.2, seconds: 525949.2 * 60, milliseconds: 525949.2 * 60 * 1e3 }, quarters: { months: 3, weeks: 13.044375, days: 91.310625, hours: 2191.455, minutes: 131487.3, seconds: 525949.2 * 60 / 4, milliseconds: 7889237999999999e-6 }, months: { weeks: 4.3481250000000005, days: 30.436875, hours: 730.485, minutes: 43829.1, seconds: 2629746, milliseconds: 2629746e3 }, ...gi }, Nn = ["years", "quarters", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds"], Bi = Nn.slice(0).reverse();
        function An(l, e, i = !1) {
          const a = { values: i ? e.values : { ...l.values, ...e.values || {} }, loc: l.loc.clone(e.loc), conversionAccuracy: e.conversionAccuracy || l.conversionAccuracy, matrix: e.matrix || l.matrix };
          return new ut(a);
        }
        function mi(l, e) {
          var i;
          let a = (i = e.milliseconds) != null ? i : 0;
          for (const f of Bi.slice(1)) e[f] && (a += e[f] * l[f].milliseconds);
          return a;
        }
        function pi(l, e) {
          const i = mi(l, e) < 0 ? -1 : 1;
          Nn.reduceRight((a, f) => {
            if (Ze(e[f])) return a;
            if (a) {
              const O = e[a] * i, D = l[f][a], W = Math.floor(O / D);
              e[f] += W * i, e[a] -= W * D * i;
            }
            return f;
          }, null), Nn.reduce((a, f) => {
            if (Ze(e[f])) return a;
            if (a) {
              const O = e[a] % 1;
              e[a] -= O, e[f] += O * l[a][f];
            }
            return f;
          }, null);
        }
        class ut {
          constructor(e) {
            const i = e.conversionAccuracy === "longterm" || !1;
            let a = i ? zi : $i;
            e.matrix && (a = e.matrix), this.values = e.values, this.loc = e.loc || X.create(), this.conversionAccuracy = i ? "longterm" : "casual", this.invalid = e.invalid || null, this.matrix = a, this.isLuxonDuration = !0;
          }
          static fromMillis(e, i) {
            return ut.fromObject({ milliseconds: e }, i);
          }
          static fromObject(e, i = {}) {
            if (e == null || typeof e != "object") throw new Oe("Duration.fromObject: argument expected to be an object, got " + (e === null ? "null" : typeof e));
            return new ut({ values: ue(e, ut.normalizeUnit), loc: X.fromObject(i), conversionAccuracy: i.conversionAccuracy, matrix: i.matrix });
          }
          static fromDurationLike(e) {
            if (xt(e)) return ut.fromMillis(e);
            if (ut.isDuration(e)) return e;
            if (typeof e == "object") return ut.fromObject(e);
            throw new Oe(`Unknown duration argument ${e} of type ${typeof e}`);
          }
          static fromISO(e, i) {
            const [a] = (function(f) {
              return ee(f, [pn, jn]);
            })(e);
            return a ? ut.fromObject(a, i) : ut.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`);
          }
          static fromISOTime(e, i) {
            const [a] = (function(f) {
              return ee(f, [Bn, _i]);
            })(e);
            return a ? ut.fromObject(a, i) : ut.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`);
          }
          static invalid(e, i = null) {
            if (!e) throw new Oe("need to specify a reason the Duration is invalid");
            const a = e instanceof se ? e : new se(e, i);
            if (ie.throwOnInvalid) throw new Ve(a);
            return new ut({ invalid: a });
          }
          static normalizeUnit(e) {
            const i = { year: "years", years: "years", quarter: "quarters", quarters: "quarters", month: "months", months: "months", week: "weeks", weeks: "weeks", day: "days", days: "days", hour: "hours", hours: "hours", minute: "minutes", minutes: "minutes", second: "seconds", seconds: "seconds", millisecond: "milliseconds", milliseconds: "milliseconds" }[e && e.toLowerCase()];
            if (!i) throw new ze(e);
            return i;
          }
          static isDuration(e) {
            return e && e.isLuxonDuration || !1;
          }
          get locale() {
            return this.isValid ? this.loc.locale : null;
          }
          get numberingSystem() {
            return this.isValid ? this.loc.numberingSystem : null;
          }
          toFormat(e, i = {}) {
            const a = { ...i, floor: i.round !== !1 && i.floor !== !1 };
            return this.isValid ? v.create(this.loc, a).formatDurationFromString(this, e) : fi;
          }
          toHuman(e = {}) {
            if (!this.isValid) return fi;
            const i = Nn.map((a) => {
              const f = this.values[a];
              return Ze(f) ? null : this.loc.numberFormatter({ style: "unit", unitDisplay: "long", ...e, unit: a.slice(0, -1) }).format(f);
            }).filter((a) => a);
            return this.loc.listFormatter({ type: "conjunction", style: e.listStyle || "narrow", ...e }).format(i);
          }
          toObject() {
            return this.isValid ? { ...this.values } : {};
          }
          toISO() {
            if (!this.isValid) return null;
            let e = "P";
            return this.years !== 0 && (e += this.years + "Y"), this.months === 0 && this.quarters === 0 || (e += this.months + 3 * this.quarters + "M"), this.weeks !== 0 && (e += this.weeks + "W"), this.days !== 0 && (e += this.days + "D"), this.hours === 0 && this.minutes === 0 && this.seconds === 0 && this.milliseconds === 0 || (e += "T"), this.hours !== 0 && (e += this.hours + "H"), this.minutes !== 0 && (e += this.minutes + "M"), this.seconds === 0 && this.milliseconds === 0 || (e += cn(this.seconds + this.milliseconds / 1e3, 3) + "S"), e === "P" && (e += "T0S"), e;
          }
          toISOTime(e = {}) {
            if (!this.isValid) return null;
            const i = this.toMillis();
            return i < 0 || i >= 864e5 ? null : (e = { suppressMilliseconds: !1, suppressSeconds: !1, includePrefix: !1, format: "extended", ...e, includeOffset: !1 }, rt.fromMillis(i, { zone: "UTC" }).toISOTime(e));
          }
          toJSON() {
            return this.toISO();
          }
          toString() {
            return this.toISO();
          }
          [Symbol.for("nodejs.util.inspect.custom")]() {
            return this.isValid ? `Duration { values: ${JSON.stringify(this.values)} }` : `Duration { Invalid, reason: ${this.invalidReason} }`;
          }
          toMillis() {
            return this.isValid ? mi(this.matrix, this.values) : NaN;
          }
          valueOf() {
            return this.toMillis();
          }
          plus(e) {
            if (!this.isValid) return this;
            const i = ut.fromDurationLike(e), a = {};
            for (const f of Nn) (ln(i.values, f) || ln(this.values, f)) && (a[f] = i.get(f) + this.get(f));
            return An(this, { values: a }, !0);
          }
          minus(e) {
            if (!this.isValid) return this;
            const i = ut.fromDurationLike(e);
            return this.plus(i.negate());
          }
          mapUnits(e) {
            if (!this.isValid) return this;
            const i = {};
            for (const a of Object.keys(this.values)) i[a] = Le(e(this.values[a], a));
            return An(this, { values: i }, !0);
          }
          get(e) {
            return this[ut.normalizeUnit(e)];
          }
          set(e) {
            return this.isValid ? An(this, { values: { ...this.values, ...ue(e, ut.normalizeUnit) } }) : this;
          }
          reconfigure({ locale: e, numberingSystem: i, conversionAccuracy: a, matrix: f } = {}) {
            return An(this, { loc: this.loc.clone({ locale: e, numberingSystem: i }), matrix: f, conversionAccuracy: a });
          }
          as(e) {
            return this.isValid ? this.shiftTo(e).get(e) : NaN;
          }
          normalize() {
            if (!this.isValid) return this;
            const e = this.toObject();
            return pi(this.matrix, e), An(this, { values: e }, !0);
          }
          rescale() {
            return this.isValid ? An(this, { values: (function(e) {
              const i = {};
              for (const [a, f] of Object.entries(e)) f !== 0 && (i[a] = f);
              return i;
            })(this.normalize().shiftToAll().toObject()) }, !0) : this;
          }
          shiftTo(...e) {
            if (!this.isValid) return this;
            if (e.length === 0) return this;
            e = e.map((D) => ut.normalizeUnit(D));
            const i = {}, a = {}, f = this.toObject();
            let O;
            for (const D of Nn) if (e.indexOf(D) >= 0) {
              O = D;
              let W = 0;
              for (const pe in a) W += this.matrix[pe][D] * a[pe], a[pe] = 0;
              xt(f[D]) && (W += f[D]);
              const te = Math.trunc(W);
              i[D] = te, a[D] = (1e3 * W - 1e3 * te) / 1e3;
            } else xt(f[D]) && (a[D] = f[D]);
            for (const D in a) a[D] !== 0 && (i[O] += D === O ? a[D] : a[D] / this.matrix[O][D]);
            return pi(this.matrix, i), An(this, { values: i }, !0);
          }
          shiftToAll() {
            return this.isValid ? this.shiftTo("years", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds") : this;
          }
          negate() {
            if (!this.isValid) return this;
            const e = {};
            for (const i of Object.keys(this.values)) e[i] = this.values[i] === 0 ? 0 : -this.values[i];
            return An(this, { values: e }, !0);
          }
          get years() {
            return this.isValid ? this.values.years || 0 : NaN;
          }
          get quarters() {
            return this.isValid ? this.values.quarters || 0 : NaN;
          }
          get months() {
            return this.isValid ? this.values.months || 0 : NaN;
          }
          get weeks() {
            return this.isValid ? this.values.weeks || 0 : NaN;
          }
          get days() {
            return this.isValid ? this.values.days || 0 : NaN;
          }
          get hours() {
            return this.isValid ? this.values.hours || 0 : NaN;
          }
          get minutes() {
            return this.isValid ? this.values.minutes || 0 : NaN;
          }
          get seconds() {
            return this.isValid ? this.values.seconds || 0 : NaN;
          }
          get milliseconds() {
            return this.isValid ? this.values.milliseconds || 0 : NaN;
          }
          get isValid() {
            return this.invalid === null;
          }
          get invalidReason() {
            return this.invalid ? this.invalid.reason : null;
          }
          get invalidExplanation() {
            return this.invalid ? this.invalid.explanation : null;
          }
          equals(e) {
            if (!this.isValid || !e.isValid || !this.loc.equals(e.loc)) return !1;
            function i(a, f) {
              return a === void 0 || a === 0 ? f === void 0 || f === 0 : a === f;
            }
            for (const a of Nn) if (!i(this.values[a], e.values[a])) return !1;
            return !0;
          }
        }
        const Mn = "Invalid Interval";
        class Tt {
          constructor(e) {
            this.s = e.start, this.e = e.end, this.invalid = e.invalid || null, this.isLuxonInterval = !0;
          }
          static invalid(e, i = null) {
            if (!e) throw new Oe("need to specify a reason the Interval is invalid");
            const a = e instanceof se ? e : new se(e, i);
            if (ie.throwOnInvalid) throw new Ee(a);
            return new Tt({ invalid: a });
          }
          static fromDateTimes(e, i) {
            const a = zn(e), f = zn(i), O = (function(D, W) {
              return D && D.isValid ? W && W.isValid ? W < D ? Tt.invalid("end before start", `The end of an interval must be after its start, but you had start=${D.toISO()} and end=${W.toISO()}`) : null : Tt.invalid("missing or invalid end") : Tt.invalid("missing or invalid start");
            })(a, f);
            return O ?? new Tt({ start: a, end: f });
          }
          static after(e, i) {
            const a = ut.fromDurationLike(i), f = zn(e);
            return Tt.fromDateTimes(f, f.plus(a));
          }
          static before(e, i) {
            const a = ut.fromDurationLike(i), f = zn(e);
            return Tt.fromDateTimes(f.minus(a), f);
          }
          static fromISO(e, i) {
            const [a, f] = (e || "").split("/", 2);
            if (a && f) {
              let O, D, W, te;
              try {
                O = rt.fromISO(a, i), D = O.isValid;
              } catch {
                D = !1;
              }
              try {
                W = rt.fromISO(f, i), te = W.isValid;
              } catch {
                te = !1;
              }
              if (D && te) return Tt.fromDateTimes(O, W);
              if (D) {
                const pe = ut.fromISO(f, i);
                if (pe.isValid) return Tt.after(O, pe);
              } else if (te) {
                const pe = ut.fromISO(a, i);
                if (pe.isValid) return Tt.before(W, pe);
              }
            }
            return Tt.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`);
          }
          static isInterval(e) {
            return e && e.isLuxonInterval || !1;
          }
          get start() {
            return this.isValid ? this.s : null;
          }
          get end() {
            return this.isValid ? this.e : null;
          }
          get isValid() {
            return this.invalidReason === null;
          }
          get invalidReason() {
            return this.invalid ? this.invalid.reason : null;
          }
          get invalidExplanation() {
            return this.invalid ? this.invalid.explanation : null;
          }
          length(e = "milliseconds") {
            return this.isValid ? this.toDuration(e).get(e) : NaN;
          }
          count(e = "milliseconds", i) {
            if (!this.isValid) return NaN;
            const a = this.start.startOf(e, i);
            let f;
            return f = i != null && i.useLocaleWeeks ? this.end.reconfigure({ locale: a.locale }) : this.end, f = f.startOf(e, i), Math.floor(f.diff(a, e).get(e)) + (f.valueOf() !== this.end.valueOf());
          }
          hasSame(e) {
            return !!this.isValid && (this.isEmpty() || this.e.minus(1).hasSame(this.s, e));
          }
          isEmpty() {
            return this.s.valueOf() === this.e.valueOf();
          }
          isAfter(e) {
            return !!this.isValid && this.s > e;
          }
          isBefore(e) {
            return !!this.isValid && this.e <= e;
          }
          contains(e) {
            return !!this.isValid && this.s <= e && this.e > e;
          }
          set({ start: e, end: i } = {}) {
            return this.isValid ? Tt.fromDateTimes(e || this.s, i || this.e) : this;
          }
          splitAt(...e) {
            if (!this.isValid) return [];
            const i = e.map(zn).filter((D) => this.contains(D)).sort((D, W) => D.toMillis() - W.toMillis()), a = [];
            let { s: f } = this, O = 0;
            for (; f < this.e; ) {
              const D = i[O] || this.e, W = +D > +this.e ? this.e : D;
              a.push(Tt.fromDateTimes(f, W)), f = W, O += 1;
            }
            return a;
          }
          splitBy(e) {
            const i = ut.fromDurationLike(e);
            if (!this.isValid || !i.isValid || i.as("milliseconds") === 0) return [];
            let a, { s: f } = this, O = 1;
            const D = [];
            for (; f < this.e; ) {
              const W = this.start.plus(i.mapUnits((te) => te * O));
              a = +W > +this.e ? this.e : W, D.push(Tt.fromDateTimes(f, a)), f = a, O += 1;
            }
            return D;
          }
          divideEqually(e) {
            return this.isValid ? this.splitBy(this.length() / e).slice(0, e) : [];
          }
          overlaps(e) {
            return this.e > e.s && this.s < e.e;
          }
          abutsStart(e) {
            return !!this.isValid && +this.e == +e.s;
          }
          abutsEnd(e) {
            return !!this.isValid && +e.e == +this.s;
          }
          engulfs(e) {
            return !!this.isValid && this.s <= e.s && this.e >= e.e;
          }
          equals(e) {
            return !(!this.isValid || !e.isValid) && this.s.equals(e.s) && this.e.equals(e.e);
          }
          intersection(e) {
            if (!this.isValid) return this;
            const i = this.s > e.s ? this.s : e.s, a = this.e < e.e ? this.e : e.e;
            return i >= a ? null : Tt.fromDateTimes(i, a);
          }
          union(e) {
            if (!this.isValid) return this;
            const i = this.s < e.s ? this.s : e.s, a = this.e > e.e ? this.e : e.e;
            return Tt.fromDateTimes(i, a);
          }
          static merge(e) {
            const [i, a] = e.sort((f, O) => f.s - O.s).reduce(([f, O], D) => O ? O.overlaps(D) || O.abutsStart(D) ? [f, O.union(D)] : [f.concat([O]), D] : [f, D], [[], null]);
            return a && i.push(a), i;
          }
          static xor(e) {
            let i = null, a = 0;
            const f = [], O = e.map((W) => [{ time: W.s, type: "s" }, { time: W.e, type: "e" }]), D = Array.prototype.concat(...O).sort((W, te) => W.time - te.time);
            for (const W of D) a += W.type === "s" ? 1 : -1, a === 1 ? i = W.time : (i && +i != +W.time && f.push(Tt.fromDateTimes(i, W.time)), i = null);
            return Tt.merge(f);
          }
          difference(...e) {
            return Tt.xor([this].concat(e)).map((i) => this.intersection(i)).filter((i) => i && !i.isEmpty());
          }
          toString() {
            return this.isValid ? `[${this.s.toISO()} – ${this.e.toISO()})` : Mn;
          }
          [Symbol.for("nodejs.util.inspect.custom")]() {
            return this.isValid ? `Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }` : `Interval { Invalid, reason: ${this.invalidReason} }`;
          }
          toLocaleString(e = Be, i = {}) {
            return this.isValid ? v.create(this.s.loc.clone(i), e).formatInterval(this) : Mn;
          }
          toISO(e) {
            return this.isValid ? `${this.s.toISO(e)}/${this.e.toISO(e)}` : Mn;
          }
          toISODate() {
            return this.isValid ? `${this.s.toISODate()}/${this.e.toISODate()}` : Mn;
          }
          toISOTime(e) {
            return this.isValid ? `${this.s.toISOTime(e)}/${this.e.toISOTime(e)}` : Mn;
          }
          toFormat(e, { separator: i = " – " } = {}) {
            return this.isValid ? `${this.s.toFormat(e)}${i}${this.e.toFormat(e)}` : Mn;
          }
          toDuration(e, i) {
            return this.isValid ? this.e.diff(this.s, e, i) : ut.invalid(this.invalidReason);
          }
          mapEndpoints(e) {
            return Tt.fromDateTimes(e(this.s), e(this.e));
          }
        }
        class Fn {
          static hasDST(e = ie.defaultZone) {
            const i = rt.now().setZone(e).set({ month: 12 });
            return !e.isUniversal && i.offset !== i.set({ month: 6 }).offset;
          }
          static isValidIANAZone(e) {
            return mt.isValidZone(e);
          }
          static normalizeZone(e) {
            return He(e, ie.defaultZone);
          }
          static getStartOfWeek({ locale: e = null, locObj: i = null } = {}) {
            return (i || X.create(e)).getStartOfWeek();
          }
          static getMinimumDaysInFirstWeek({ locale: e = null, locObj: i = null } = {}) {
            return (i || X.create(e)).getMinDaysInFirstWeek();
          }
          static getWeekendWeekdays({ locale: e = null, locObj: i = null } = {}) {
            return (i || X.create(e)).getWeekendDays().slice();
          }
          static months(e = "long", { locale: i = null, numberingSystem: a = null, locObj: f = null, outputCalendar: O = "gregory" } = {}) {
            return (f || X.create(i, a, O)).months(e);
          }
          static monthsFormat(e = "long", { locale: i = null, numberingSystem: a = null, locObj: f = null, outputCalendar: O = "gregory" } = {}) {
            return (f || X.create(i, a, O)).months(e, !0);
          }
          static weekdays(e = "long", { locale: i = null, numberingSystem: a = null, locObj: f = null } = {}) {
            return (f || X.create(i, a, null)).weekdays(e);
          }
          static weekdaysFormat(e = "long", { locale: i = null, numberingSystem: a = null, locObj: f = null } = {}) {
            return (f || X.create(i, a, null)).weekdays(e, !0);
          }
          static meridiems({ locale: e = null } = {}) {
            return X.create(e).meridiems();
          }
          static eras(e = "short", { locale: i = null } = {}) {
            return X.create(i, null, "gregory").eras(e);
          }
          static features() {
            return { relative: bn(), localeWeek: fn() };
          }
        }
        function vi(l, e) {
          const i = (f) => f.toUTC(0, { keepLocalTime: !0 }).startOf("day").valueOf(), a = i(e) - i(l);
          return Math.floor(ut.fromMillis(a).as("days"));
        }
        const ri = { arab: "[٠-٩]", arabext: "[۰-۹]", bali: "[᭐-᭙]", beng: "[০-৯]", deva: "[०-९]", fullwide: "[０-９]", gujr: "[૦-૯]", hanidec: "[〇|一|二|三|四|五|六|七|八|九]", khmr: "[០-៩]", knda: "[೦-೯]", laoo: "[໐-໙]", limb: "[᥆-᥏]", mlym: "[൦-൯]", mong: "[᠐-᠙]", mymr: "[၀-၉]", orya: "[୦-୯]", tamldec: "[௦-௯]", telu: "[౦-౯]", thai: "[๐-๙]", tibt: "[༠-༩]", latn: "\\d" }, yi = { arab: [1632, 1641], arabext: [1776, 1785], bali: [6992, 7001], beng: [2534, 2543], deva: [2406, 2415], fullwide: [65296, 65303], gujr: [2790, 2799], khmr: [6112, 6121], knda: [3302, 3311], laoo: [3792, 3801], limb: [6470, 6479], mlym: [3430, 3439], mong: [6160, 6169], mymr: [4160, 4169], orya: [2918, 2927], tamldec: [3046, 3055], telu: [3174, 3183], thai: [3664, 3673], tibt: [3872, 3881] }, Hi = ri.hanidec.replace(/[\[|\]]/g, "").split("");
        function dn({ numberingSystem: l }, e = "") {
          return new RegExp(`${ri[l || "latn"]}${e}`);
        }
        function yn(l, e = (i) => i) {
          return { regex: l, deser: ([i]) => e((function(a) {
            let f = parseInt(a, 10);
            if (isNaN(f)) {
              f = "";
              for (let O = 0; O < a.length; O++) {
                const D = a.charCodeAt(O);
                if (a[O].search(ri.hanidec) !== -1) f += Hi.indexOf(a[O]);
                else for (const W in yi) {
                  const [te, pe] = yi[W];
                  D >= te && D <= pe && (f += D - te);
                }
              }
              return parseInt(f, 10);
            }
            return f;
          })(i)) };
        }
        const Ei = "[  ]", Si = new RegExp(Ei, "g");
        function Wi(l) {
          return l.replace(/\./g, "\\.?").replace(Si, Ei);
        }
        function bi(l) {
          return l.replace(/\./g, "").replace(Si, " ").toLowerCase();
        }
        function hn(l, e) {
          return l === null ? null : { regex: RegExp(l.map(Wi).join("|")), deser: ([i]) => l.findIndex((a) => bi(i) === bi(a)) + e };
        }
        function wi(l, e) {
          return { regex: l, deser: ([, i, a]) => we(i, a), groups: e };
        }
        function Gn(l) {
          return { regex: l, deser: ([e]) => e };
        }
        const Ji = { year: { "2-digit": "yy", numeric: "yyyyy" }, month: { numeric: "M", "2-digit": "MM", short: "MMM", long: "MMMM" }, day: { numeric: "d", "2-digit": "dd" }, weekday: { short: "EEE", long: "EEEE" }, dayperiod: "a", dayPeriod: "a", hour12: { numeric: "h", "2-digit": "hh" }, hour24: { numeric: "H", "2-digit": "HH" }, minute: { numeric: "m", "2-digit": "mm" }, second: { numeric: "s", "2-digit": "ss" }, timeZoneName: { long: "ZZZZZ", short: "ZZZ" } };
        let oi = null;
        function ki(l, e) {
          return Array.prototype.concat(...l.map((i) => (function(a, f) {
            if (a.literal) return a;
            const O = Ai(v.macroTokenToFormatOpts(a.val), f);
            return O == null || O.includes(void 0) ? a : O;
          })(i, e)));
        }
        function Ii(l, e, i) {
          const a = ki(v.parseFormat(i), l), f = a.map((D) => (function(W, te) {
            const pe = dn(te), Je = dn(te, "{2}"), xe = dn(te, "{3}"), Qe = dn(te, "{4}"), tt = dn(te, "{6}"), $e = dn(te, "{1,2}"), St = dn(te, "{1,3}"), yt = dn(te, "{1,6}"), Et = dn(te, "{1,9}"), Rt = dn(te, "{2,4}"), Ft = dn(te, "{4,6}"), Ot = (Jt) => {
              return { regex: RegExp((Cn = Jt.val, Cn.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"))), deser: ([Yt]) => Yt, literal: !0 };
              var Cn;
            }, Lt = ((Jt) => {
              if (W.literal) return Ot(Jt);
              switch (Jt.val) {
                case "G":
                  return hn(te.eras("short"), 0);
                case "GG":
                  return hn(te.eras("long"), 0);
                case "y":
                  return yn(yt);
                case "yy":
                case "kk":
                  return yn(Rt, I);
                case "yyyy":
                case "kkkk":
                  return yn(Qe);
                case "yyyyy":
                  return yn(Ft);
                case "yyyyyy":
                  return yn(tt);
                case "M":
                case "L":
                case "d":
                case "H":
                case "h":
                case "m":
                case "q":
                case "s":
                case "W":
                  return yn($e);
                case "MM":
                case "LL":
                case "dd":
                case "HH":
                case "hh":
                case "mm":
                case "qq":
                case "ss":
                case "WW":
                  return yn(Je);
                case "MMM":
                  return hn(te.months("short", !0), 1);
                case "MMMM":
                  return hn(te.months("long", !0), 1);
                case "LLL":
                  return hn(te.months("short", !1), 1);
                case "LLLL":
                  return hn(te.months("long", !1), 1);
                case "o":
                case "S":
                  return yn(St);
                case "ooo":
                case "SSS":
                  return yn(xe);
                case "u":
                  return Gn(Et);
                case "uu":
                  return Gn($e);
                case "uuu":
                case "E":
                case "c":
                  return yn(pe);
                case "a":
                  return hn(te.meridiems(), 0);
                case "EEE":
                  return hn(te.weekdays("short", !1), 1);
                case "EEEE":
                  return hn(te.weekdays("long", !1), 1);
                case "ccc":
                  return hn(te.weekdays("short", !0), 1);
                case "cccc":
                  return hn(te.weekdays("long", !0), 1);
                case "Z":
                case "ZZ":
                  return wi(new RegExp(`([+-]${$e.source})(?::(${Je.source}))?`), 2);
                case "ZZZ":
                  return wi(new RegExp(`([+-]${$e.source})(${Je.source})?`), 2);
                case "z":
                  return Gn(/[a-z_+-/]{1,256}?/i);
                case " ":
                  return Gn(/[^\S\n\r]/);
                default:
                  return Ot(Jt);
              }
            })(W) || { invalidReason: "missing Intl.DateTimeFormat.formatToParts support" };
            return Lt.token = W, Lt;
          })(D, l)), O = f.find((D) => D.invalidReason);
          if (O) return { input: e, tokens: a, invalidReason: O.invalidReason };
          {
            const [D, W] = (function($e) {
              return [`^${$e.map((St) => St.regex).reduce((St, yt) => `${St}(${yt.source})`, "")}$`, $e];
            })(f), te = RegExp(D, "i"), [pe, Je] = (function($e, St, yt) {
              const Et = $e.match(St);
              if (Et) {
                const Rt = {};
                let Ft = 1;
                for (const Ot in yt) if (ln(yt, Ot)) {
                  const Lt = yt[Ot], Jt = Lt.groups ? Lt.groups + 1 : 1;
                  !Lt.literal && Lt.token && (Rt[Lt.token.val[0]] = Lt.deser(Et.slice(Ft, Ft + Jt))), Ft += Jt;
                }
                return [Et, Rt];
              }
              return [Et, {}];
            })(e, te, W), [xe, Qe, tt] = Je ? (function($e) {
              let St, yt = null;
              return Ze($e.z) || (yt = mt.create($e.z)), Ze($e.Z) || (yt || (yt = new ce($e.Z)), St = $e.Z), Ze($e.q) || ($e.M = 3 * ($e.q - 1) + 1), Ze($e.h) || ($e.h < 12 && $e.a === 1 ? $e.h += 12 : $e.h === 12 && $e.a === 0 && ($e.h = 0)), $e.G === 0 && $e.y && ($e.y = -$e.y), Ze($e.u) || ($e.S = wn($e.u)), [Object.keys($e).reduce((Et, Rt) => {
                const Ft = ((Ot) => {
                  switch (Ot) {
                    case "S":
                      return "millisecond";
                    case "s":
                      return "second";
                    case "m":
                      return "minute";
                    case "h":
                    case "H":
                      return "hour";
                    case "d":
                      return "day";
                    case "o":
                      return "ordinal";
                    case "L":
                    case "M":
                      return "month";
                    case "y":
                      return "year";
                    case "E":
                    case "c":
                      return "weekday";
                    case "W":
                      return "weekNumber";
                    case "k":
                      return "weekYear";
                    case "q":
                      return "quarter";
                    default:
                      return null;
                  }
                })(Rt);
                return Ft && (Et[Ft] = $e[Rt]), Et;
              }, {}), yt, St];
            })(Je) : [null, null, void 0];
            if (ln(Je, "a") && ln(Je, "H")) throw new Ge("Can't include meridiem when specifying 24-hour format");
            return { input: e, tokens: a, regex: te, rawMatches: pe, matches: Je, result: xe, zone: Qe, specificOffset: tt };
          }
        }
        function Ai(l, e) {
          if (!l) return null;
          const i = v.create(e, l).dtFormatter((oi || (oi = rt.fromMillis(1555555555555)), oi)), a = i.formatToParts(), f = i.resolvedOptions();
          return a.map((O) => (function(D, W, te) {
            const { type: pe, value: Je } = D;
            if (pe === "literal") {
              const $e = /^\s+$/.test(Je);
              return { literal: !$e, val: $e ? " " : Je };
            }
            const xe = W[pe];
            let Qe = pe;
            pe === "hour" && (Qe = W.hour12 != null ? W.hour12 ? "hour12" : "hour24" : W.hourCycle != null ? W.hourCycle === "h11" || W.hourCycle === "h12" ? "hour12" : "hour24" : te.hour12 ? "hour12" : "hour24");
            let tt = Ji[Qe];
            if (typeof tt == "object" && (tt = tt[xe]), tt) return { literal: !1, val: tt };
          })(O, l, f));
        }
        const ai = "Invalid DateTime", Ci = 864e13;
        function Kn(l) {
          return new se("unsupported zone", `the zone "${l.name}" is not supported`);
        }
        function li(l) {
          return l.weekData === null && (l.weekData = re(l.c)), l.weekData;
        }
        function ci(l) {
          return l.localWeekData === null && (l.localWeekData = re(l.c, l.loc.getMinDaysInFirstWeek(), l.loc.getStartOfWeek())), l.localWeekData;
        }
        function Ln(l, e) {
          const i = { ts: l.ts, zone: l.zone, c: l.c, o: l.o, loc: l.loc, invalid: l.invalid };
          return new rt({ ...i, ...e, old: i });
        }
        function Oi(l, e, i) {
          let a = l - 60 * e * 1e3;
          const f = i.offset(a);
          if (e === f) return [a, e];
          a -= 60 * (f - e) * 1e3;
          const O = i.offset(a);
          return f === O ? [a, f] : [l - 60 * Math.min(f, O) * 1e3, Math.max(f, O)];
        }
        function Yn(l, e) {
          const i = new Date(l += 60 * e * 1e3);
          return { year: i.getUTCFullYear(), month: i.getUTCMonth() + 1, day: i.getUTCDate(), hour: i.getUTCHours(), minute: i.getUTCMinutes(), second: i.getUTCSeconds(), millisecond: i.getUTCMilliseconds() };
        }
        function Xn(l, e, i) {
          return Oi(s(l), e, i);
        }
        function Ti(l, e) {
          const i = l.o, a = l.c.year + Math.trunc(e.years), f = l.c.month + Math.trunc(e.months) + 3 * Math.trunc(e.quarters), O = { ...l.c, year: a, month: f, day: Math.min(l.c.day, t(a, f)) + Math.trunc(e.days) + 7 * Math.trunc(e.weeks) }, D = ut.fromObject({ years: e.years - Math.trunc(e.years), quarters: e.quarters - Math.trunc(e.quarters), months: e.months - Math.trunc(e.months), weeks: e.weeks - Math.trunc(e.weeks), days: e.days - Math.trunc(e.days), hours: e.hours, minutes: e.minutes, seconds: e.seconds, milliseconds: e.milliseconds }).as("milliseconds"), W = s(O);
          let [te, pe] = Oi(W, i, l.zone);
          return D !== 0 && (te += D, pe = l.zone.offset(te)), { ts: te, o: pe };
        }
        function $n(l, e, i, a, f, O) {
          const { setZone: D, zone: W } = i;
          if (l && Object.keys(l).length !== 0 || e) {
            const te = e || W, pe = rt.fromObject(l, { ...i, zone: te, specificOffset: O });
            return D ? pe : pe.setZone(W);
          }
          return rt.invalid(new se("unparsable", `the input "${f}" can't be parsed as ${a}`));
        }
        function Qn(l, e, i = !0) {
          return l.isValid ? v.create(X.create("en-US"), { allowZ: i, forceSimple: !0 }).formatDateTimeFromString(l, e) : null;
        }
        function ui(l, e) {
          const i = l.c.year > 9999 || l.c.year < 0;
          let a = "";
          return i && l.c.year >= 0 && (a += "+"), a += It(l.c.year, i ? 6 : 4), e ? (a += "-", a += It(l.c.month), a += "-", a += It(l.c.day)) : (a += It(l.c.month), a += It(l.c.day)), a;
        }
        function Ri(l, e, i, a, f, O) {
          let D = It(l.c.hour);
          return e ? (D += ":", D += It(l.c.minute), l.c.millisecond === 0 && l.c.second === 0 && i || (D += ":")) : D += It(l.c.minute), l.c.millisecond === 0 && l.c.second === 0 && i || (D += It(l.c.second), l.c.millisecond === 0 && a || (D += ".", D += It(l.c.millisecond, 3))), f && (l.isOffsetFixed && l.offset === 0 && !O ? D += "Z" : l.o < 0 ? (D += "-", D += It(Math.trunc(-l.o / 60)), D += ":", D += It(Math.trunc(-l.o % 60))) : (D += "+", D += It(Math.trunc(l.o / 60)), D += ":", D += It(Math.trunc(l.o % 60)))), O && (D += "[" + l.zone.ianaName + "]"), D;
        }
        const Ni = { month: 1, day: 1, hour: 0, minute: 0, second: 0, millisecond: 0 }, Zi = { weekNumber: 1, weekday: 1, hour: 0, minute: 0, second: 0, millisecond: 0 }, Gi = { ordinal: 1, hour: 0, minute: 0, second: 0, millisecond: 0 }, Li = ["year", "month", "day", "hour", "minute", "second", "millisecond"], Ki = ["weekYear", "weekNumber", "weekday", "hour", "minute", "second", "millisecond"], Yi = ["year", "ordinal", "hour", "minute", "second", "millisecond"];
        function Di(l) {
          switch (l.toLowerCase()) {
            case "localweekday":
            case "localweekdays":
              return "localWeekday";
            case "localweeknumber":
            case "localweeknumbers":
              return "localWeekNumber";
            case "localweekyear":
            case "localweekyears":
              return "localWeekYear";
            default:
              return (function(e) {
                const i = { year: "year", years: "year", month: "month", months: "month", day: "day", days: "day", hour: "hour", hours: "hour", minute: "minute", minutes: "minute", quarter: "quarter", quarters: "quarter", second: "second", seconds: "second", millisecond: "millisecond", milliseconds: "millisecond", weekday: "weekday", weekdays: "weekday", weeknumber: "weekNumber", weeksnumber: "weekNumber", weeknumbers: "weekNumber", weekyear: "weekYear", weekyears: "weekYear", ordinal: "ordinal" }[e.toLowerCase()];
                if (!i) throw new ze(e);
                return i;
              })(l);
          }
        }
        function Ui(l, e) {
          const i = He(e.zone, ie.defaultZone), a = X.fromObject(e), f = ie.now();
          let O, D;
          if (Ze(l.year)) O = f;
          else {
            for (const pe of Li) Ze(l[pe]) && (l[pe] = Ni[pe]);
            const W = ct(l) || Ht(l);
            if (W) return rt.invalid(W);
            const te = i.offset(f);
            [O, D] = Xn(l, te, i);
          }
          return new rt({ ts: O, zone: i, loc: a, o: D });
        }
        function xi(l, e, i) {
          const a = !!Ze(i.round) || i.round, f = (D, W) => (D = cn(D, a || i.calendary ? 0 : 2, !0), e.loc.clone(i).relFormatter(i).format(D, W)), O = (D) => i.calendary ? e.hasSame(l, D) ? 0 : e.startOf(D).diff(l.startOf(D), D).get(D) : e.diff(l, D).get(D);
          if (i.unit) return f(O(i.unit), i.unit);
          for (const D of i.units) {
            const W = O(D);
            if (Math.abs(W) >= 1) return f(W, D);
          }
          return f(l > e ? -0 : 0, i.units[i.units.length - 1]);
        }
        function Pi(l) {
          let e, i = {};
          return l.length > 0 && typeof l[l.length - 1] == "object" ? (i = l[l.length - 1], e = Array.from(l).slice(0, l.length - 1)) : e = Array.from(l), [i, e];
        }
        class rt {
          constructor(e) {
            const i = e.zone || ie.defaultZone;
            let a = e.invalid || (Number.isNaN(e.ts) ? new se("invalid input") : null) || (i.isValid ? null : Kn(i));
            this.ts = Ze(e.ts) ? ie.now() : e.ts;
            let f = null, O = null;
            if (!a) if (e.old && e.old.ts === this.ts && e.old.zone.equals(i)) [f, O] = [e.old.c, e.old.o];
            else {
              const D = i.offset(this.ts);
              f = Yn(this.ts, D), a = Number.isNaN(f.year) ? new se("invalid input") : null, f = a ? null : f, O = a ? null : D;
            }
            this._zone = i, this.loc = e.loc || X.create(), this.invalid = a, this.weekData = null, this.localWeekData = null, this.c = f, this.o = O, this.isLuxonDateTime = !0;
          }
          static now() {
            return new rt({});
          }
          static local() {
            const [e, i] = Pi(arguments), [a, f, O, D, W, te, pe] = i;
            return Ui({ year: a, month: f, day: O, hour: D, minute: W, second: te, millisecond: pe }, e);
          }
          static utc() {
            const [e, i] = Pi(arguments), [a, f, O, D, W, te, pe] = i;
            return e.zone = ce.utcInstance, Ui({ year: a, month: f, day: O, hour: D, minute: W, second: te, millisecond: pe }, e);
          }
          static fromJSDate(e, i = {}) {
            const a = (f = e, Object.prototype.toString.call(f) === "[object Date]" ? e.valueOf() : NaN);
            var f;
            if (Number.isNaN(a)) return rt.invalid("invalid input");
            const O = He(i.zone, ie.defaultZone);
            return O.isValid ? new rt({ ts: a, zone: O, loc: X.fromObject(i) }) : rt.invalid(Kn(O));
          }
          static fromMillis(e, i = {}) {
            if (xt(e)) return e < -Ci || e > Ci ? rt.invalid("Timestamp out of range") : new rt({ ts: e, zone: He(i.zone, ie.defaultZone), loc: X.fromObject(i) });
            throw new Oe(`fromMillis requires a numerical input, but received a ${typeof e} with value ${e}`);
          }
          static fromSeconds(e, i = {}) {
            if (xt(e)) return new rt({ ts: 1e3 * e, zone: He(i.zone, ie.defaultZone), loc: X.fromObject(i) });
            throw new Oe("fromSeconds requires a numerical input");
          }
          static fromObject(e, i = {}) {
            e = e || {};
            const a = He(i.zone, ie.defaultZone);
            if (!a.isValid) return rt.invalid(Kn(a));
            const f = X.fromObject(i), O = ue(e, Di), { minDaysInFirstWeek: D, startOfWeek: W } = dt(O, f), te = ie.now(), pe = Ze(i.specificOffset) ? a.offset(te) : i.specificOffset, Je = !Ze(O.ordinal), xe = !Ze(O.year), Qe = !Ze(O.month) || !Ze(O.day), tt = xe || Qe, $e = O.weekYear || O.weekNumber;
            if ((tt || Je) && $e) throw new Ge("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
            if (Qe && Je) throw new Ge("Can't mix ordinal dates with month/day");
            const St = $e || O.weekday && !tt;
            let yt, Et, Rt = Yn(te, pe);
            St ? (yt = Ki, Et = Zi, Rt = re(Rt, D, W)) : Je ? (yt = Yi, Et = Gi, Rt = Fe(Rt)) : (yt = Li, Et = Ni);
            let Ft = !1;
            for (const Dt of yt) Ze(O[Dt]) ? O[Dt] = Ft ? Et[Dt] : Rt[Dt] : Ft = !0;
            const Ot = St ? (function(Dt, Sn = 4, $t = 1) {
              const Xt = tn(Dt.weekYear), ei = zt(Dt.weekNumber, 1, c(Dt.weekYear, Sn, $t)), Xi = zt(Dt.weekday, 1, 7);
              return Xt ? ei ? !Xi && T("weekday", Dt.weekday) : T("week", Dt.weekNumber) : T("weekYear", Dt.weekYear);
            })(O, D, W) : Je ? (function(Dt) {
              const Sn = tn(Dt.year), $t = zt(Dt.ordinal, 1, p(Dt.year));
              return Sn ? !$t && T("ordinal", Dt.ordinal) : T("year", Dt.year);
            })(O) : ct(O), Lt = Ot || Ht(O);
            if (Lt) return rt.invalid(Lt);
            const Jt = St ? Ne(O, D, W) : Je ? pt(O) : O, [Cn, Yt] = Xn(Jt, pe, a), Dn = new rt({ ts: Cn, zone: a, o: Yt, loc: f });
            return O.weekday && tt && e.weekday !== Dn.weekday ? rt.invalid("mismatched weekday", `you can't specify both a weekday of ${O.weekday} and a date of ${Dn.toISO()}`) : Dn;
          }
          static fromISO(e, i = {}) {
            const [a, f] = (function(O) {
              return ee(O, [vn, an], [Zn, In], [si, qt], [un, qn]);
            })(e);
            return $n(a, f, i, "ISO 8601", e);
          }
          static fromRFC2822(e, i = {}) {
            const [a, f] = (function(O) {
              return ee((function(D) {
                return D.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
              })(O), [Hn, Vn]);
            })(e);
            return $n(a, f, i, "RFC 2822", e);
          }
          static fromHTTP(e, i = {}) {
            const [a, f] = (function(O) {
              return ee(O, [Rn, Kt], [En, Kt], [Wn, Jn]);
            })(e);
            return $n(a, f, i, "HTTP", i);
          }
          static fromFormat(e, i, a = {}) {
            if (Ze(e) || Ze(i)) throw new Oe("fromFormat requires an input string and a format");
            const { locale: f = null, numberingSystem: O = null } = a, D = X.fromOpts({ locale: f, numberingSystem: O, defaultToEN: !0 }), [W, te, pe, Je] = (function(xe, Qe, tt) {
              const { result: $e, zone: St, specificOffset: yt, invalidReason: Et } = Ii(xe, Qe, tt);
              return [$e, St, yt, Et];
            })(D, e, i);
            return Je ? rt.invalid(Je) : $n(W, te, a, `format ${i}`, e, pe);
          }
          static fromString(e, i, a = {}) {
            return rt.fromFormat(e, i, a);
          }
          static fromSQL(e, i = {}) {
            const [a, f] = (function(O) {
              return ee(O, [ji, an], [qi, Fi]);
            })(e);
            return $n(a, f, i, "SQL", e);
          }
          static invalid(e, i = null) {
            if (!e) throw new Oe("need to specify a reason the DateTime is invalid");
            const a = e instanceof se ? e : new se(e, i);
            if (ie.throwOnInvalid) throw new je(a);
            return new rt({ invalid: a });
          }
          static isDateTime(e) {
            return e && e.isLuxonDateTime || !1;
          }
          static parseFormatForOpts(e, i = {}) {
            const a = Ai(e, X.fromObject(i));
            return a ? a.map((f) => f ? f.val : null).join("") : null;
          }
          static expandFormat(e, i = {}) {
            return ki(v.parseFormat(e), X.fromObject(i)).map((a) => a.val).join("");
          }
          get(e) {
            return this[e];
          }
          get isValid() {
            return this.invalid === null;
          }
          get invalidReason() {
            return this.invalid ? this.invalid.reason : null;
          }
          get invalidExplanation() {
            return this.invalid ? this.invalid.explanation : null;
          }
          get locale() {
            return this.isValid ? this.loc.locale : null;
          }
          get numberingSystem() {
            return this.isValid ? this.loc.numberingSystem : null;
          }
          get outputCalendar() {
            return this.isValid ? this.loc.outputCalendar : null;
          }
          get zone() {
            return this._zone;
          }
          get zoneName() {
            return this.isValid ? this.zone.name : null;
          }
          get year() {
            return this.isValid ? this.c.year : NaN;
          }
          get quarter() {
            return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
          }
          get month() {
            return this.isValid ? this.c.month : NaN;
          }
          get day() {
            return this.isValid ? this.c.day : NaN;
          }
          get hour() {
            return this.isValid ? this.c.hour : NaN;
          }
          get minute() {
            return this.isValid ? this.c.minute : NaN;
          }
          get second() {
            return this.isValid ? this.c.second : NaN;
          }
          get millisecond() {
            return this.isValid ? this.c.millisecond : NaN;
          }
          get weekYear() {
            return this.isValid ? li(this).weekYear : NaN;
          }
          get weekNumber() {
            return this.isValid ? li(this).weekNumber : NaN;
          }
          get weekday() {
            return this.isValid ? li(this).weekday : NaN;
          }
          get isWeekend() {
            return this.isValid && this.loc.getWeekendDays().includes(this.weekday);
          }
          get localWeekday() {
            return this.isValid ? ci(this).weekday : NaN;
          }
          get localWeekNumber() {
            return this.isValid ? ci(this).weekNumber : NaN;
          }
          get localWeekYear() {
            return this.isValid ? ci(this).weekYear : NaN;
          }
          get ordinal() {
            return this.isValid ? Fe(this.c).ordinal : NaN;
          }
          get monthShort() {
            return this.isValid ? Fn.months("short", { locObj: this.loc })[this.month - 1] : null;
          }
          get monthLong() {
            return this.isValid ? Fn.months("long", { locObj: this.loc })[this.month - 1] : null;
          }
          get weekdayShort() {
            return this.isValid ? Fn.weekdays("short", { locObj: this.loc })[this.weekday - 1] : null;
          }
          get weekdayLong() {
            return this.isValid ? Fn.weekdays("long", { locObj: this.loc })[this.weekday - 1] : null;
          }
          get offset() {
            return this.isValid ? +this.o : NaN;
          }
          get offsetNameShort() {
            return this.isValid ? this.zone.offsetName(this.ts, { format: "short", locale: this.locale }) : null;
          }
          get offsetNameLong() {
            return this.isValid ? this.zone.offsetName(this.ts, { format: "long", locale: this.locale }) : null;
          }
          get isOffsetFixed() {
            return this.isValid ? this.zone.isUniversal : null;
          }
          get isInDST() {
            return !this.isOffsetFixed && (this.offset > this.set({ month: 1, day: 1 }).offset || this.offset > this.set({ month: 5 }).offset);
          }
          getPossibleOffsets() {
            if (!this.isValid || this.isOffsetFixed) return [this];
            const e = 864e5, i = 6e4, a = s(this.c), f = this.zone.offset(a - e), O = this.zone.offset(a + e), D = this.zone.offset(a - f * i), W = this.zone.offset(a - O * i);
            if (D === W) return [this];
            const te = a - D * i, pe = a - W * i, Je = Yn(te, D), xe = Yn(pe, W);
            return Je.hour === xe.hour && Je.minute === xe.minute && Je.second === xe.second && Je.millisecond === xe.millisecond ? [Ln(this, { ts: te }), Ln(this, { ts: pe })] : [this];
          }
          get isInLeapYear() {
            return mn(this.year);
          }
          get daysInMonth() {
            return t(this.year, this.month);
          }
          get daysInYear() {
            return this.isValid ? p(this.year) : NaN;
          }
          get weeksInWeekYear() {
            return this.isValid ? c(this.weekYear) : NaN;
          }
          get weeksInLocalWeekYear() {
            return this.isValid ? c(this.localWeekYear, this.loc.getMinDaysInFirstWeek(), this.loc.getStartOfWeek()) : NaN;
          }
          resolvedLocaleOptions(e = {}) {
            const { locale: i, numberingSystem: a, calendar: f } = v.create(this.loc.clone(e), e).resolvedOptions(this);
            return { locale: i, numberingSystem: a, outputCalendar: f };
          }
          toUTC(e = 0, i = {}) {
            return this.setZone(ce.instance(e), i);
          }
          toLocal() {
            return this.setZone(ie.defaultZone);
          }
          setZone(e, { keepLocalTime: i = !1, keepCalendarTime: a = !1 } = {}) {
            if ((e = He(e, ie.defaultZone)).equals(this.zone)) return this;
            if (e.isValid) {
              let f = this.ts;
              if (i || a) {
                const O = e.offset(this.ts), D = this.toObject();
                [f] = Xn(D, O, e);
              }
              return Ln(this, { ts: f, zone: e });
            }
            return rt.invalid(Kn(e));
          }
          reconfigure({ locale: e, numberingSystem: i, outputCalendar: a } = {}) {
            return Ln(this, { loc: this.loc.clone({ locale: e, numberingSystem: i, outputCalendar: a }) });
          }
          setLocale(e) {
            return this.reconfigure({ locale: e });
          }
          set(e) {
            if (!this.isValid) return this;
            const i = ue(e, Di), { minDaysInFirstWeek: a, startOfWeek: f } = dt(i, this.loc), O = !Ze(i.weekYear) || !Ze(i.weekNumber) || !Ze(i.weekday), D = !Ze(i.ordinal), W = !Ze(i.year), te = !Ze(i.month) || !Ze(i.day), pe = W || te, Je = i.weekYear || i.weekNumber;
            if ((pe || D) && Je) throw new Ge("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
            if (te && D) throw new Ge("Can't mix ordinal dates with month/day");
            let xe;
            O ? xe = Ne({ ...re(this.c, a, f), ...i }, a, f) : Ze(i.ordinal) ? (xe = { ...this.toObject(), ...i }, Ze(i.day) && (xe.day = Math.min(t(xe.year, xe.month), xe.day))) : xe = pt({ ...Fe(this.c), ...i });
            const [Qe, tt] = Xn(xe, this.o, this.zone);
            return Ln(this, { ts: Qe, o: tt });
          }
          plus(e) {
            return this.isValid ? Ln(this, Ti(this, ut.fromDurationLike(e))) : this;
          }
          minus(e) {
            return this.isValid ? Ln(this, Ti(this, ut.fromDurationLike(e).negate())) : this;
          }
          startOf(e, { useLocaleWeeks: i = !1 } = {}) {
            if (!this.isValid) return this;
            const a = {}, f = ut.normalizeUnit(e);
            switch (f) {
              case "years":
                a.month = 1;
              case "quarters":
              case "months":
                a.day = 1;
              case "weeks":
              case "days":
                a.hour = 0;
              case "hours":
                a.minute = 0;
              case "minutes":
                a.second = 0;
              case "seconds":
                a.millisecond = 0;
            }
            if (f === "weeks") if (i) {
              const O = this.loc.getStartOfWeek(), { weekday: D } = this;
              D < O && (a.weekNumber = this.weekNumber - 1), a.weekday = O;
            } else a.weekday = 1;
            if (f === "quarters") {
              const O = Math.ceil(this.month / 3);
              a.month = 3 * (O - 1) + 1;
            }
            return this.set(a);
          }
          endOf(e, i) {
            return this.isValid ? this.plus({ [e]: 1 }).startOf(e, i).minus(1) : this;
          }
          toFormat(e, i = {}) {
            return this.isValid ? v.create(this.loc.redefaultToEN(i)).formatDateTimeFromString(this, e) : ai;
          }
          toLocaleString(e = Be, i = {}) {
            return this.isValid ? v.create(this.loc.clone(i), e).formatDateTime(this) : ai;
          }
          toLocaleParts(e = {}) {
            return this.isValid ? v.create(this.loc.clone(e), e).formatDateTimeParts(this) : [];
          }
          toISO({ format: e = "extended", suppressSeconds: i = !1, suppressMilliseconds: a = !1, includeOffset: f = !0, extendedZone: O = !1 } = {}) {
            if (!this.isValid) return null;
            const D = e === "extended";
            let W = ui(this, D);
            return W += "T", W += Ri(this, D, i, a, f, O), W;
          }
          toISODate({ format: e = "extended" } = {}) {
            return this.isValid ? ui(this, e === "extended") : null;
          }
          toISOWeekDate() {
            return Qn(this, "kkkk-'W'WW-c");
          }
          toISOTime({ suppressMilliseconds: e = !1, suppressSeconds: i = !1, includeOffset: a = !0, includePrefix: f = !1, extendedZone: O = !1, format: D = "extended" } = {}) {
            return this.isValid ? (f ? "T" : "") + Ri(this, D === "extended", i, e, a, O) : null;
          }
          toRFC2822() {
            return Qn(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", !1);
          }
          toHTTP() {
            return Qn(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
          }
          toSQLDate() {
            return this.isValid ? ui(this, !0) : null;
          }
          toSQLTime({ includeOffset: e = !0, includeZone: i = !1, includeOffsetSpace: a = !0 } = {}) {
            let f = "HH:mm:ss.SSS";
            return (i || e) && (a && (f += " "), i ? f += "z" : e && (f += "ZZ")), Qn(this, f, !0);
          }
          toSQL(e = {}) {
            return this.isValid ? `${this.toSQLDate()} ${this.toSQLTime(e)}` : null;
          }
          toString() {
            return this.isValid ? this.toISO() : ai;
          }
          [Symbol.for("nodejs.util.inspect.custom")]() {
            return this.isValid ? `DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }` : `DateTime { Invalid, reason: ${this.invalidReason} }`;
          }
          valueOf() {
            return this.toMillis();
          }
          toMillis() {
            return this.isValid ? this.ts : NaN;
          }
          toSeconds() {
            return this.isValid ? this.ts / 1e3 : NaN;
          }
          toUnixInteger() {
            return this.isValid ? Math.floor(this.ts / 1e3) : NaN;
          }
          toJSON() {
            return this.toISO();
          }
          toBSON() {
            return this.toJSDate();
          }
          toObject(e = {}) {
            if (!this.isValid) return {};
            const i = { ...this.c };
            return e.includeConfig && (i.outputCalendar = this.outputCalendar, i.numberingSystem = this.loc.numberingSystem, i.locale = this.loc.locale), i;
          }
          toJSDate() {
            return new Date(this.isValid ? this.ts : NaN);
          }
          diff(e, i = "milliseconds", a = {}) {
            if (!this.isValid || !e.isValid) return ut.invalid("created by diffing an invalid DateTime");
            const f = { locale: this.locale, numberingSystem: this.numberingSystem, ...a }, O = (te = i, Array.isArray(te) ? te : [te]).map(ut.normalizeUnit), D = e.valueOf() > this.valueOf(), W = (function(pe, Je, xe, Qe) {
              let [tt, $e, St, yt] = (function(Ot, Lt, Jt) {
                const Cn = [["years", ($t, Xt) => Xt.year - $t.year], ["quarters", ($t, Xt) => Xt.quarter - $t.quarter + 4 * (Xt.year - $t.year)], ["months", ($t, Xt) => Xt.month - $t.month + 12 * (Xt.year - $t.year)], ["weeks", ($t, Xt) => {
                  const ei = vi($t, Xt);
                  return (ei - ei % 7) / 7;
                }], ["days", vi]], Yt = {}, Dn = Ot;
                let Dt, Sn;
                for (const [$t, Xt] of Cn) Jt.indexOf($t) >= 0 && (Dt = $t, Yt[$t] = Xt(Ot, Lt), Sn = Dn.plus(Yt), Sn > Lt ? (Yt[$t]--, (Ot = Dn.plus(Yt)) > Lt && (Sn = Ot, Yt[$t]--, Ot = Dn.plus(Yt))) : Ot = Sn);
                return [Ot, Yt, Sn, Dt];
              })(pe, Je, xe);
              const Et = Je - tt, Rt = xe.filter((Ot) => ["hours", "minutes", "seconds", "milliseconds"].indexOf(Ot) >= 0);
              Rt.length === 0 && (St < Je && (St = tt.plus({ [yt]: 1 })), St !== tt && ($e[yt] = ($e[yt] || 0) + Et / (St - tt)));
              const Ft = ut.fromObject($e, Qe);
              return Rt.length > 0 ? ut.fromMillis(Et, Qe).shiftTo(...Rt).plus(Ft) : Ft;
            })(D ? this : e, D ? e : this, O, f);
            var te;
            return D ? W.negate() : W;
          }
          diffNow(e = "milliseconds", i = {}) {
            return this.diff(rt.now(), e, i);
          }
          until(e) {
            return this.isValid ? Tt.fromDateTimes(this, e) : this;
          }
          hasSame(e, i, a) {
            if (!this.isValid) return !1;
            const f = e.valueOf(), O = this.setZone(e.zone, { keepLocalTime: !0 });
            return O.startOf(i, a) <= f && f <= O.endOf(i, a);
          }
          equals(e) {
            return this.isValid && e.isValid && this.valueOf() === e.valueOf() && this.zone.equals(e.zone) && this.loc.equals(e.loc);
          }
          toRelative(e = {}) {
            if (!this.isValid) return null;
            const i = e.base || rt.fromObject({}, { zone: this.zone }), a = e.padding ? this < i ? -e.padding : e.padding : 0;
            let f = ["years", "months", "days", "hours", "minutes", "seconds"], O = e.unit;
            return Array.isArray(e.unit) && (f = e.unit, O = void 0), xi(i, this.plus(a), { ...e, numeric: "always", units: f, unit: O });
          }
          toRelativeCalendar(e = {}) {
            return this.isValid ? xi(e.base || rt.fromObject({}, { zone: this.zone }), this, { ...e, numeric: "auto", units: ["years", "months", "days"], calendary: !0 }) : null;
          }
          static min(...e) {
            if (!e.every(rt.isDateTime)) throw new Oe("min requires all arguments be DateTimes");
            return gn(e, (i) => i.valueOf(), Math.min);
          }
          static max(...e) {
            if (!e.every(rt.isDateTime)) throw new Oe("max requires all arguments be DateTimes");
            return gn(e, (i) => i.valueOf(), Math.max);
          }
          static fromFormatExplain(e, i, a = {}) {
            const { locale: f = null, numberingSystem: O = null } = a;
            return Ii(X.fromOpts({ locale: f, numberingSystem: O, defaultToEN: !0 }), e, i);
          }
          static fromStringExplain(e, i, a = {}) {
            return rt.fromFormatExplain(e, i, a);
          }
          static get DATE_SHORT() {
            return Be;
          }
          static get DATE_MED() {
            return Ke;
          }
          static get DATE_MED_WITH_WEEKDAY() {
            return nt;
          }
          static get DATE_FULL() {
            return st;
          }
          static get DATE_HUGE() {
            return Me;
          }
          static get TIME_SIMPLE() {
            return it;
          }
          static get TIME_WITH_SECONDS() {
            return Te;
          }
          static get TIME_WITH_SHORT_OFFSET() {
            return Ce;
          }
          static get TIME_WITH_LONG_OFFSET() {
            return Xe;
          }
          static get TIME_24_SIMPLE() {
            return ot;
          }
          static get TIME_24_WITH_SECONDS() {
            return Ae;
          }
          static get TIME_24_WITH_SHORT_OFFSET() {
            return me;
          }
          static get TIME_24_WITH_LONG_OFFSET() {
            return Pe;
          }
          static get DATETIME_SHORT() {
            return C;
          }
          static get DATETIME_SHORT_WITH_SECONDS() {
            return N;
          }
          static get DATETIME_MED() {
            return L;
          }
          static get DATETIME_MED_WITH_SECONDS() {
            return A;
          }
          static get DATETIME_MED_WITH_WEEKDAY() {
            return V;
          }
          static get DATETIME_FULL() {
            return m;
          }
          static get DATETIME_FULL_WITH_SECONDS() {
            return U;
          }
          static get DATETIME_HUGE() {
            return de;
          }
          static get DATETIME_HUGE_WITH_SECONDS() {
            return ve;
          }
        }
        function zn(l) {
          if (rt.isDateTime(l)) return l;
          if (l && l.valueOf && xt(l.valueOf())) return rt.fromJSDate(l);
          if (l && typeof l == "object") return rt.fromObject(l);
          throw new Oe(`Unknown datetime argument: ${l}, of type ${typeof l}`);
        }
        z.DateTime = rt, z.Duration = ut, z.FixedOffsetZone = ce, z.IANAZone = mt, z.Info = Fn, z.Interval = Tt, z.InvalidZone = Q, z.Settings = ie, z.SystemZone = S, z.VERSION = "3.4.4", z.Zone = ae;
      }, 566(g, z, K) {
        var je = K(684);
        g.exports = function(Ee) {
          if (typeof Ee != "function" || !hasOwnProperty.call(Ee, "length")) return !1;
          try {
            if (typeof Ee.length != "number" || typeof Ee.call != "function" || typeof Ee.apply != "function") return !1;
          } catch {
            return !1;
          }
          return !je(Ee);
        };
      }, 23(g, z, K) {
        var je = K(265), Ee = { object: !0, function: !0, undefined: !0 };
        g.exports = function(Ve) {
          return !!je(Ve) && hasOwnProperty.call(Ee, typeof Ve);
        };
      }, 131(g, z, K) {
        var je = K(566), Ee = /^\s*class[\s{/}]/, Ve = Function.prototype.toString;
        g.exports = function(Ge) {
          return !!je(Ge) && !Ee.test(Ve.call(Ge));
        };
      }, 684(g, z, K) {
        var je = K(23);
        g.exports = function(Ee) {
          if (!je(Ee)) return !1;
          try {
            return !!Ee.constructor && Ee.constructor.prototype === Ee;
          } catch {
            return !1;
          }
        };
      }, 265(g) {
        g.exports = function(z) {
          return z != null;
        };
      }, 960(g, z, K) {
        K.r(z), K.d(z, { v1: () => Be, v3: () => Xe, v4: () => ot, v5: () => Pe });
        var je = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto < "u" && typeof msCrypto.getRandomValues == "function" && msCrypto.getRandomValues.bind(msCrypto), Ee = new Uint8Array(16);
        function Ve() {
          if (!je) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
          return je(Ee);
        }
        for (var Ge = [], ze = 0; ze < 256; ++ze) Ge[ze] = (ze + 256).toString(16).substr(1);
        const Oe = function(C, N) {
          var L = 0, A = Ge;
          return [A[C[L++]], A[C[L++]], A[C[L++]], A[C[L++]], "-", A[C[L++]], A[C[L++]], "-", A[C[L++]], A[C[L++]], "-", A[C[L++]], A[C[L++]], "-", A[C[L++]], A[C[L++]], A[C[L++]], A[C[L++]], A[C[L++]], A[C[L++]]].join("");
        };
        var Se, Z, ke = 0, De = 0;
        const Be = function(C, N, L) {
          var A = N && L || 0, V = N || [], m = (C = C || {}).node || Se, U = C.clockseq !== void 0 ? C.clockseq : Z;
          if (m == null || U == null) {
            var de = C.random || (C.rng || Ve)();
            m == null && (m = Se = [1 | de[0], de[1], de[2], de[3], de[4], de[5]]), U == null && (U = Z = 16383 & (de[6] << 8 | de[7]));
          }
          var ve = C.msecs !== void 0 ? C.msecs : (/* @__PURE__ */ new Date()).getTime(), ae = C.nsecs !== void 0 ? C.nsecs : De + 1, _ = ve - ke + (ae - De) / 1e4;
          if (_ < 0 && C.clockseq === void 0 && (U = U + 1 & 16383), (_ < 0 || ve > ke) && C.nsecs === void 0 && (ae = 0), ae >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
          ke = ve, De = ae, Z = U;
          var S = (1e4 * (268435455 & (ve += 122192928e5)) + ae) % 4294967296;
          V[A++] = S >>> 24 & 255, V[A++] = S >>> 16 & 255, V[A++] = S >>> 8 & 255, V[A++] = 255 & S;
          var j = ve / 4294967296 * 1e4 & 268435455;
          V[A++] = j >>> 8 & 255, V[A++] = 255 & j, V[A++] = j >>> 24 & 15 | 16, V[A++] = j >>> 16 & 255, V[A++] = U >>> 8 | 128, V[A++] = 255 & U;
          for (var Y = 0; Y < 6; ++Y) V[A + Y] = m[Y];
          return N || Oe(V);
        };
        function Ke(C, N, L) {
          var A = function(V, m, U, de) {
            var ve = U && de || 0;
            if (typeof V == "string" && (V = (function(S) {
              S = unescape(encodeURIComponent(S));
              for (var j = new Array(S.length), Y = 0; Y < S.length; Y++) j[Y] = S.charCodeAt(Y);
              return j;
            })(V)), typeof m == "string" && (m = (function(S) {
              var j = [];
              return S.replace(/[a-fA-F0-9]{2}/g, function(Y) {
                j.push(parseInt(Y, 16));
              }), j;
            })(m)), !Array.isArray(V)) throw TypeError("value must be an array of bytes");
            if (!Array.isArray(m) || m.length !== 16) throw TypeError("namespace must be uuid string or an Array of 16 byte values");
            var ae = L(m.concat(V));
            if (ae[6] = 15 & ae[6] | N, ae[8] = 63 & ae[8] | 128, U) for (var _ = 0; _ < 16; ++_) U[ve + _] = ae[_];
            return U || Oe(ae);
          };
          try {
            A.name = C;
          } catch {
          }
          return A.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", A.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8", A;
        }
        function nt(C, N) {
          var L = (65535 & C) + (65535 & N);
          return (C >> 16) + (N >> 16) + (L >> 16) << 16 | 65535 & L;
        }
        function st(C, N, L, A, V, m) {
          return nt((U = nt(nt(N, C), nt(A, m))) << (de = V) | U >>> 32 - de, L);
          var U, de;
        }
        function Me(C, N, L, A, V, m, U) {
          return st(N & L | ~N & A, C, N, V, m, U);
        }
        function it(C, N, L, A, V, m, U) {
          return st(N & A | L & ~A, C, N, V, m, U);
        }
        function Te(C, N, L, A, V, m, U) {
          return st(N ^ L ^ A, C, N, V, m, U);
        }
        function Ce(C, N, L, A, V, m, U) {
          return st(L ^ (N | ~A), C, N, V, m, U);
        }
        const Xe = Ke("v3", 48, function(C) {
          if (typeof C == "string") {
            var N = unescape(encodeURIComponent(C));
            C = new Array(N.length);
            for (var L = 0; L < N.length; L++) C[L] = N.charCodeAt(L);
          }
          return (function(A) {
            var V, m, U, de = [], ve = 32 * A.length, ae = "0123456789abcdef";
            for (V = 0; V < ve; V += 8) m = A[V >> 5] >>> V % 32 & 255, U = parseInt(ae.charAt(m >>> 4 & 15) + ae.charAt(15 & m), 16), de.push(U);
            return de;
          })((function(A, V) {
            var m, U, de, ve, ae;
            A[V >> 5] |= 128 << V % 32, A[14 + (V + 64 >>> 9 << 4)] = V;
            var _ = 1732584193, S = -271733879, j = -1732584194, Y = 271733878;
            for (m = 0; m < A.length; m += 16) U = _, de = S, ve = j, ae = Y, _ = Me(_, S, j, Y, A[m], 7, -680876936), Y = Me(Y, _, S, j, A[m + 1], 12, -389564586), j = Me(j, Y, _, S, A[m + 2], 17, 606105819), S = Me(S, j, Y, _, A[m + 3], 22, -1044525330), _ = Me(_, S, j, Y, A[m + 4], 7, -176418897), Y = Me(Y, _, S, j, A[m + 5], 12, 1200080426), j = Me(j, Y, _, S, A[m + 6], 17, -1473231341), S = Me(S, j, Y, _, A[m + 7], 22, -45705983), _ = Me(_, S, j, Y, A[m + 8], 7, 1770035416), Y = Me(Y, _, S, j, A[m + 9], 12, -1958414417), j = Me(j, Y, _, S, A[m + 10], 17, -42063), S = Me(S, j, Y, _, A[m + 11], 22, -1990404162), _ = Me(_, S, j, Y, A[m + 12], 7, 1804603682), Y = Me(Y, _, S, j, A[m + 13], 12, -40341101), j = Me(j, Y, _, S, A[m + 14], 17, -1502002290), _ = it(_, S = Me(S, j, Y, _, A[m + 15], 22, 1236535329), j, Y, A[m + 1], 5, -165796510), Y = it(Y, _, S, j, A[m + 6], 9, -1069501632), j = it(j, Y, _, S, A[m + 11], 14, 643717713), S = it(S, j, Y, _, A[m], 20, -373897302), _ = it(_, S, j, Y, A[m + 5], 5, -701558691), Y = it(Y, _, S, j, A[m + 10], 9, 38016083), j = it(j, Y, _, S, A[m + 15], 14, -660478335), S = it(S, j, Y, _, A[m + 4], 20, -405537848), _ = it(_, S, j, Y, A[m + 9], 5, 568446438), Y = it(Y, _, S, j, A[m + 14], 9, -1019803690), j = it(j, Y, _, S, A[m + 3], 14, -187363961), S = it(S, j, Y, _, A[m + 8], 20, 1163531501), _ = it(_, S, j, Y, A[m + 13], 5, -1444681467), Y = it(Y, _, S, j, A[m + 2], 9, -51403784), j = it(j, Y, _, S, A[m + 7], 14, 1735328473), _ = Te(_, S = it(S, j, Y, _, A[m + 12], 20, -1926607734), j, Y, A[m + 5], 4, -378558), Y = Te(Y, _, S, j, A[m + 8], 11, -2022574463), j = Te(j, Y, _, S, A[m + 11], 16, 1839030562), S = Te(S, j, Y, _, A[m + 14], 23, -35309556), _ = Te(_, S, j, Y, A[m + 1], 4, -1530992060), Y = Te(Y, _, S, j, A[m + 4], 11, 1272893353), j = Te(j, Y, _, S, A[m + 7], 16, -155497632), S = Te(S, j, Y, _, A[m + 10], 23, -1094730640), _ = Te(_, S, j, Y, A[m + 13], 4, 681279174), Y = Te(Y, _, S, j, A[m], 11, -358537222), j = Te(j, Y, _, S, A[m + 3], 16, -722521979), S = Te(S, j, Y, _, A[m + 6], 23, 76029189), _ = Te(_, S, j, Y, A[m + 9], 4, -640364487), Y = Te(Y, _, S, j, A[m + 12], 11, -421815835), j = Te(j, Y, _, S, A[m + 15], 16, 530742520), _ = Ce(_, S = Te(S, j, Y, _, A[m + 2], 23, -995338651), j, Y, A[m], 6, -198630844), Y = Ce(Y, _, S, j, A[m + 7], 10, 1126891415), j = Ce(j, Y, _, S, A[m + 14], 15, -1416354905), S = Ce(S, j, Y, _, A[m + 5], 21, -57434055), _ = Ce(_, S, j, Y, A[m + 12], 6, 1700485571), Y = Ce(Y, _, S, j, A[m + 3], 10, -1894986606), j = Ce(j, Y, _, S, A[m + 10], 15, -1051523), S = Ce(S, j, Y, _, A[m + 1], 21, -2054922799), _ = Ce(_, S, j, Y, A[m + 8], 6, 1873313359), Y = Ce(Y, _, S, j, A[m + 15], 10, -30611744), j = Ce(j, Y, _, S, A[m + 6], 15, -1560198380), S = Ce(S, j, Y, _, A[m + 13], 21, 1309151649), _ = Ce(_, S, j, Y, A[m + 4], 6, -145523070), Y = Ce(Y, _, S, j, A[m + 11], 10, -1120210379), j = Ce(j, Y, _, S, A[m + 2], 15, 718787259), S = Ce(S, j, Y, _, A[m + 9], 21, -343485551), _ = nt(_, U), S = nt(S, de), j = nt(j, ve), Y = nt(Y, ae);
            return [_, S, j, Y];
          })((function(A) {
            var V, m = [];
            for (m[(A.length >> 2) - 1] = void 0, V = 0; V < m.length; V += 1) m[V] = 0;
            var U = 8 * A.length;
            for (V = 0; V < U; V += 8) m[V >> 5] |= (255 & A[V / 8]) << V % 32;
            return m;
          })(C), 8 * C.length));
        }), ot = function(C, N, L) {
          var A = N && L || 0;
          typeof C == "string" && (N = C === "binary" ? new Array(16) : null, C = null);
          var V = (C = C || {}).random || (C.rng || Ve)();
          if (V[6] = 15 & V[6] | 64, V[8] = 63 & V[8] | 128, N) for (var m = 0; m < 16; ++m) N[A + m] = V[m];
          return N || Oe(V);
        };
        function Ae(C, N, L, A) {
          switch (C) {
            case 0:
              return N & L ^ ~N & A;
            case 1:
            case 3:
              return N ^ L ^ A;
            case 2:
              return N & L ^ N & A ^ L & A;
          }
        }
        function me(C, N) {
          return C << N | C >>> 32 - N;
        }
        const Pe = Ke("v5", 80, function(C) {
          var N = [1518500249, 1859775393, 2400959708, 3395469782], L = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
          if (typeof C == "string") {
            var A = unescape(encodeURIComponent(C));
            C = new Array(A.length);
            for (var V = 0; V < A.length; V++) C[V] = A.charCodeAt(V);
          }
          C.push(128);
          var m = C.length / 4 + 2, U = Math.ceil(m / 16), de = new Array(U);
          for (V = 0; V < U; V++) {
            de[V] = new Array(16);
            for (var ve = 0; ve < 16; ve++) de[V][ve] = C[64 * V + 4 * ve] << 24 | C[64 * V + 4 * ve + 1] << 16 | C[64 * V + 4 * ve + 2] << 8 | C[64 * V + 4 * ve + 3];
          }
          for (de[U - 1][14] = 8 * (C.length - 1) / Math.pow(2, 32), de[U - 1][14] = Math.floor(de[U - 1][14]), de[U - 1][15] = 8 * (C.length - 1) & 4294967295, V = 0; V < U; V++) {
            for (var ae = new Array(80), _ = 0; _ < 16; _++) ae[_] = de[V][_];
            for (_ = 16; _ < 80; _++) ae[_] = me(ae[_ - 3] ^ ae[_ - 8] ^ ae[_ - 14] ^ ae[_ - 16], 1);
            var S = L[0], j = L[1], Y = L[2], bt = L[3], mt = L[4];
            for (_ = 0; _ < 80; _++) {
              var At = Math.floor(_ / 20), Nt = me(S, 5) + Ae(At, j, Y, bt) + mt + N[At] + ae[_] >>> 0;
              mt = bt, bt = Y, Y = me(j, 30) >>> 0, j = S, S = Nt;
            }
            L[0] = L[0] + S >>> 0, L[1] = L[1] + j >>> 0, L[2] = L[2] + Y >>> 0, L[3] = L[3] + bt >>> 0, L[4] = L[4] + mt >>> 0;
          }
          return [L[0] >> 24 & 255, L[0] >> 16 & 255, L[0] >> 8 & 255, 255 & L[0], L[1] >> 24 & 255, L[1] >> 16 & 255, L[1] >> 8 & 255, 255 & L[1], L[2] >> 24 & 255, L[2] >> 16 & 255, L[2] >> 8 & 255, 255 & L[2], L[3] >> 24 & 255, L[3] >> 16 & 255, L[3] >> 8 & 255, 255 & L[3], L[4] >> 24 & 255, L[4] >> 16 & 255, L[4] >> 8 & 255, 255 & L[4]];
        });
      }, 542(g, z, K) {
        function je(Se, Z) {
          var ke = Object.keys(Se);
          if (Object.getOwnPropertySymbols) {
            var De = Object.getOwnPropertySymbols(Se);
            Z && (De = De.filter(function(Be) {
              return Object.getOwnPropertyDescriptor(Se, Be).enumerable;
            })), ke.push.apply(ke, De);
          }
          return ke;
        }
        function Ee(Se) {
          for (var Z = 1; Z < arguments.length; Z++) {
            var ke = arguments[Z] != null ? arguments[Z] : {};
            Z % 2 ? je(Object(ke), !0).forEach(function(De) {
              Ve(Se, De, ke[De]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(Se, Object.getOwnPropertyDescriptors(ke)) : je(Object(ke)).forEach(function(De) {
              Object.defineProperty(Se, De, Object.getOwnPropertyDescriptor(ke, De));
            });
          }
          return Se;
        }
        function Ve(Se, Z, ke) {
          return (Z = (function(De) {
            var Be = (function(Ke) {
              if (typeof Ke != "object" || !Ke) return Ke;
              var nt = Ke[Symbol.toPrimitive];
              if (nt !== void 0) {
                var st = nt.call(Ke, "string");
                if (typeof st != "object") return st;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(Ke);
            })(De);
            return typeof Be == "symbol" ? Be : Be + "";
          })(Z)) in Se ? Object.defineProperty(Se, Z, { value: ke, enumerable: !0, configurable: !0, writable: !0 }) : Se[Z] = ke, Se;
        }
        function Ge(Se, Z, ke, De, Be, Ke, nt) {
          try {
            var st = Se[Ke](nt), Me = st.value;
          } catch (it) {
            return void ke(it);
          }
          st.done ? Z(Me) : Promise.resolve(Me).then(De, Be);
        }
        function ze(Se) {
          return function() {
            var Z = this, ke = arguments;
            return new Promise(function(De, Be) {
              var Ke = Se.apply(Z, ke);
              function nt(Me) {
                Ge(Ke, De, Be, nt, st, "next", Me);
              }
              function st(Me) {
                Ge(Ke, De, Be, nt, st, "throw", Me);
              }
              nt(void 0);
            });
          };
        }
        var Oe;
        Oe = () => (() => {
          var Se = { n: (J) => {
            var E = J && J.__esModule ? () => J.default : () => J;
            return Se.d(E, { a: E }), E;
          }, d: (J, E) => {
            for (var ne in E) Se.o(E, ne) && !Se.o(J, ne) && Object.defineProperty(J, ne, { enumerable: !0, get: E[ne] });
          }, o: (J, E) => Object.prototype.hasOwnProperty.call(J, E), r: (J) => {
            typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(J, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(J, "__esModule", { value: !0 });
          } }, Z = {};
          Se.r(Z), Se.d(Z, { AssertUtils: () => Q, BrowserNotification: () => Ce, Decorator: () => ot, Err: () => Xe, Evt: () => U, I18N: () => bt, Logger: () => Me, NotificationItemsContent: () => mt, Notifications: () => u, Signal: () => h, clearInterval: () => Ye, clearTimeout: () => vt, createBrowserNotifications: () => me, createHttp: () => Y, createLogger: () => Te, createNotifications: () => G, ensureError: () => lt, setInterval: () => wt, setTimeout: () => Ut });
          var ke = K(322), De = Se.n(ke), Be = K(327), Ke = "*********", nt = ["authorization"];
          class st {
            constructor(E) {
              this.maskKeys = E;
            }
            tryJSONParse(E) {
              try {
                return JSON.parse(E);
              } catch {
                return;
              }
            }
            copiedObj(E) {
              try {
                return JSON.parse(JSON.stringify(E));
              } catch {
                return E;
              }
            }
            maskObjectProperty(E) {
              var ne = E;
              Object.keys(E).forEach((ie) => {
                typeof E[ie] == "object" && E[ie] !== null ? this.maskObjectProperty(E[ie]) : ne[ie] = Ke;
              });
            }
            maskLogData(E) {
              Object.keys(E).forEach((ne) => {
                typeof E[ne] == "object" && E[ne] !== null ? this.maskKeys[ne] ? this.maskObjectProperty(E[ne]) : this.maskLogData(E[ne]) : (this.maskKeys[ne] && typeof E[ne] == "string" || ne === "value" && this.maskKeys[E.name]) && (E[ne] = Ke);
              });
            }
            maskAuthorizationValues(E) {
              if (E && typeof E == "object") if (Array.isArray(E)) E.forEach((R) => this.maskAuthorizationValues(R));
              else {
                var ne = E, ie = /\b[A-Za-z0-9-_]{1,15000}\.[A-Za-z0-9-_]{1,15000}\.[A-Za-z0-9-_]{1,15000}\b/g, se = new RegExp("\\b(".concat(nt.join("|"), ")\\s*:\\s*[A-Za-z0-9-_.]+"), "gi");
                for (var [he, Ie] of Object.entries(ne)) if (typeof Ie != "object" || Ie instanceof Date) {
                  if (nt.includes(he.toLowerCase())) ne[he] = Ke;
                  else if (typeof Ie == "string") {
                    var T = Ie.replace(se, "$1: ".concat(Ke));
                    T.includes("eyJ") && (T = T.replace(ie, Ke)), ne[he] = T;
                  }
                } else this.maskAuthorizationValues(Ie);
              }
            }
            maskPIIInformation(E) {
              var ne = E[E.length - 1], ie = typeof ne == "string" ? this.tryJSONParse(ne) : this.copiedObj(ne);
              ie && typeof ie == "object" && (this.maskAuthorizationValues(ie), this.maskLogData(ie), E.splice(E.length - 1, 1, ie));
            }
          }
          var Me, it = function() {
            for (var J = arguments.length, E = new Array(J), ne = 0; ne < J; ne++) E[ne] = arguments[ne];
            return E.map((ie) => typeof ie == "string" ? ie : JSON.stringify(ie));
          };
          function Te(J, E) {
            var ne = new Me.Service(J, E);
            return Me.POOL.addLogger(ne), ne;
          }
          (function(J) {
            J.MAX_LOGS_SIZE = 1048576, J.LS_LOGS_KEY = "uuip-client-logs";
            var E, ne = "<uuip-eol>", ie = /[\u0100-\uFFFF]/g, se = "yyyy-LL-dd HH:mm:ss:SSS";
            J.defaultSaveIntervalMilliSeconds = 5e3, (function(Ie) {
              Ie[Ie.Trace = 1] = "Trace", Ie[Ie.Debug = 2] = "Debug", Ie[Ie.Warn = 3] = "Warn", Ie[Ie.Error = 4] = "Error", Ie[Ie.Fatal = 5] = "Fatal";
            })(E = J.Level || (J.Level = {})), J.Service = class {
              constructor(Ie, T) {
                this.loggerEmitter = De()(), this.prefix = Ie, this.maskKeys = T;
              }
              log(Ie) {
                for (var T = arguments.length, R = new Array(T > 1 ? T - 1 : 0), x = 1; x < T; x++) R[x - 1] = arguments[x];
                this.maskKeys && typeof this.maskKeys == "object" && ((Fe, pt) => {
                  new st(pt).maskPIIInformation(Fe);
                })(R, this.maskKeys);
                var F = it(this.prefix ? ["".concat(this.prefix), ...R] : R), H = Date.now(), re = Be.DateTime.fromMillis(H).toFormat(se);
                switch (Ie) {
                  case J.Level.Trace:
                    console.info(re, ...F);
                    break;
                  case J.Level.Debug:
                    console.log(re, ...F);
                    break;
                  case J.Level.Warn:
                    console.warn(re, ...F);
                    break;
                  case J.Level.Error:
                  case J.Level.Fatal:
                    console.error(re, ...F);
                    break;
                  default:
                    console.log(...F);
                }
                var Ne = { pfx: this.prefix, msgs: [...R], ts: H, lvl: Ie };
                this.emit("add", Ne);
              }
              info() {
                for (var Ie = arguments.length, T = new Array(Ie), R = 0; R < Ie; R++) T[R] = arguments[R];
                this.log(E.Trace, ...T);
              }
              debug() {
                for (var Ie = arguments.length, T = new Array(Ie), R = 0; R < Ie; R++) T[R] = arguments[R];
                this.log(E.Debug, ...T);
              }
              warn() {
                for (var Ie = arguments.length, T = new Array(Ie), R = 0; R < Ie; R++) T[R] = arguments[R];
                this.log(E.Warn, ...T);
              }
              error() {
                for (var Ie = arguments.length, T = new Array(Ie), R = 0; R < Ie; R++) T[R] = arguments[R];
                this.log(E.Error, ...T);
              }
              emit(Ie) {
                for (var T = arguments.length, R = new Array(T > 1 ? T - 1 : 0), x = 1; x < T; x++) R[x - 1] = arguments[x];
                this.loggerEmitter.emit(Ie, ...R);
              }
              addEventListener(Ie, T) {
                return this.loggerEmitter.on(Ie, T), () => {
                  this.removeEventListener(Ie, T);
                };
              }
              removeEventListener(Ie, T) {
                this.loggerEmitter.off(Ie, T);
              }
            };
            class he {
              constructor() {
                this.loggers = /* @__PURE__ */ new Map(), this.logsCollectionString = "", this.prefixedLogsCollections = {}, this.lastSaveTime = Date.now(), this.config = { saveIntervalMilliSeconds: J.defaultSaveIntervalMilliSeconds }, this.logRecordsSerializedLength = 0, this.flush = () => {
                  this.save(!1);
                }, this.onLoggerAddRecord = (T) => {
                  this.addLogRecord(T), this.save(!0);
                }, this.restore();
              }
              static getSerializedJsonLogRecordBytesSize() {
                var T = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", R = T.length;
                if (R) {
                  var x = T.replace(ie, "").length;
                  return 1 * x + 2 * (R - x);
                }
                return R;
              }
              get serializedJsonLogsBytesSize() {
                var T = this.logsCollectionString.split(ne).length;
                return 2 + this.logRecordsSerializedLength + 1 * (T - 1);
              }
              save() {
                var T = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0], R = Date.now();
                T && R - this.lastSaveTime < this.config.saveIntervalMilliSeconds || (this.lastSaveTime = R, window.sessionStorage.setItem(J.LS_LOGS_KEY, this.logsCollectionString));
              }
              restore() {
                try {
                  var T = window.sessionStorage.getItem(J.LS_LOGS_KEY) || "";
                  this.logsCollectionString = T, this.logRecordsSerializedLength += he.getSerializedJsonLogRecordBytesSize(this.logsCollectionString), this.restorePreFixedLogs();
                } catch (R) {
                  console.warn("Logger failed read logs from sessionStorage: ", R);
                }
              }
              getLogObjectFromString() {
                try {
                  if (this.logsCollectionString !== "") return JSON.parse("[".concat(this.logsCollectionString.split(ne).join(","), "]"));
                } catch {
                  console.log("Error parsing local storage data");
                }
                return {};
              }
              restorePreFixedLogs() {
                var T = this.getLogObjectFromString();
                T && Array.isArray(T) && T.length > 0 && T.forEach((R) => {
                  this.addPreFixedLogs(R), this.removeOversized();
                });
              }
              addPreFixedLogs(T) {
                this.prefixedLogsCollections[T.pfx] = this.prefixedLogsCollections[T.pfx] || /* @__PURE__ */ new Set(), this.prefixedLogsCollections[T.pfx].add(T);
              }
              removeOversized() {
                for (; this.serializedJsonLogsBytesSize > J.MAX_LOGS_SIZE && this.logsCollectionString !== ""; ) this.removeLogRecord();
              }
              removeTextFromString(T, R, x) {
                return "".concat(T.slice(0, R)).concat(T.slice(x + R));
              }
              addLogRecord(T) {
                try {
                  var R = JSON.stringify(T), x = this.logsCollectionString;
                  this.logsCollectionString = x == null ? void 0 : x.concat("".concat(x.trim() !== "" ? ne : "").concat(R));
                } catch (H) {
                  var F = JSON.stringify(T);
                  this.logsCollectionString = F, console.warn("Logger failed read logs from sessionStorage: ", H);
                }
                this.logRecordsSerializedLength += he.getSerializedJsonLogRecordBytesSize(JSON.stringify(T)), this.addPreFixedLogs(T), this.removeOversized();
              }
              removeLogRecord() {
                if (this.logsCollectionString !== "") {
                  var T = this.logsCollectionString.indexOf(ne);
                  if (T !== -1) {
                    var R = this.logsCollectionString.substring(0, T), x = T + 10, F = this.removeTextFromString(this.logsCollectionString, 0, x);
                    this.logsCollectionString = F, this.logRecordsSerializedLength -= he.getSerializedJsonLogRecordBytesSize(R);
                    try {
                      var H = JSON.parse(R);
                      this.prefixedLogsCollections[H.pfx] && this.prefixedLogsCollections[H.pfx].forEach((re) => {
                        re.ts === H.ts && this.prefixedLogsCollections[H.pfx].delete(re);
                      });
                    } catch (re) {
                      console.warn("Logger failed to read/parse the first logs from sessionStorage: ", re);
                    }
                  }
                }
              }
              removePreFixedLogs(T) {
                var R = this.getLogObjectFromString();
                T.forEach((x) => {
                  var F = R.findIndex((H) => H.pfx === x.pfx);
                  F !== -1 && (R.splice(F, 1), this.logRecordsSerializedLength -= he.getSerializedJsonLogRecordBytesSize(JSON.stringify(x)), this.prefixedLogsCollections[x.pfx] && this.prefixedLogsCollections[x.pfx].has(x) && this.prefixedLogsCollections[x.pfx].delete(x));
                }), this.logsCollectionString = R.map((x) => JSON.stringify(x)).join(ne);
              }
              static getLogRecordReadable(T) {
                return T.ts ? { prefix: T.pfx, messages: T.msgs, timestamp: Be.DateTime.fromMillis(T.ts).toFormat(se), level: E[T.lvl] } : {};
              }
              static getLogsReadableJson(T) {
                var R = (x) => x.map((F) => he.getLogRecordReadable(F));
                return JSON.stringify(Array.isArray(T) ? R(T) : Object.keys(T).reduce((x, F) => (x[F] = R(T[F]), x), {}), null, 2);
              }
              static getLogsReadableText(T) {
                var R = (x) => x.reduce((F, H) => {
                  var re = he.getLogRecordReadable(H);
                  return re && (F += "".concat(re.timestamp, " ").concat(re.prefix, " ").concat(re.level, " ").concat(it(re.messages).join(" "), ` \r
`)), F;
                }, "");
                return Array.isArray(T) ? R(T) : Object.keys(T).reduce((x, F) => (x += '[SERVICE "'.concat(F, '" LOGS]: ')) + R(T[F]), "");
              }
              static getLogsUrl(T) {
                return "data:text/plain;charset=utf-8,".concat(encodeURIComponent(T));
              }
              static browserDownload(T, R) {
                try {
                  if (document && document.createElement) {
                    var x = document.createElement("a");
                    x.setAttribute("href", T), x.setAttribute("download", R), x.style.display = "none", document.body.appendChild(x), x.click(), document.body.removeChild(x);
                  } else console.warn("Browser is not supported to download logs");
                } catch {
                }
              }
              addLogger(T) {
                this.loggers.set(T.prefix, T), T.removeEventListener("add", this.onLoggerAddRecord), T.addEventListener("add", this.onLoggerAddRecord);
              }
              getAllLogsJsonUrl() {
                return he.getLogsUrl(he.getLogsReadableJson(this.getLogObjectFromString()));
              }
              getAllPrefixedLogsJsonUrl() {
                return he.getLogsUrl(he.getLogsReadableJson(this.getAllPrefixedLogsCollections()));
              }
              getPrefixedLogsJsonUrl(T) {
                return he.getLogsUrl(he.getLogsReadableJson(this.getPrefixedLogsCollection(T)));
              }
              getAllLogsTextUrl() {
                return he.getLogsUrl(he.getLogsReadableText(this.getLogObjectFromString()));
              }
              getPrefixedLogsTextUrl(T) {
                return he.getLogsUrl(he.getLogsReadableText(this.getPrefixedLogsCollection(T)));
              }
              browserDownloadAllLogsJson() {
                he.browserDownload(this.getAllLogsJsonUrl(), "".concat(/* @__PURE__ */ new Date(), "_all_logs.json"));
              }
              browserDownloadAllPrefixedLogsJson() {
                he.browserDownload(this.getAllPrefixedLogsJsonUrl(), "".concat(/* @__PURE__ */ new Date(), "_all_prefixed_logs.json"));
              }
              browserDownloadPrefixedLogsJson(T) {
                he.browserDownload(this.getPrefixedLogsJsonUrl(T), "".concat(/* @__PURE__ */ new Date(), "_").concat(T, "_logs.json"));
              }
              browserDownloadAllLogsText() {
                he.browserDownload(this.getAllLogsTextUrl(), "".concat(/* @__PURE__ */ new Date(), "_all_logs.log"));
              }
              browserDownloadPrefixedLogsText(T) {
                he.browserDownload(this.getPrefixedLogsTextUrl(T), "".concat(/* @__PURE__ */ new Date(), "_").concat(T, "_logs.log"));
              }
              cleanupAllLogs() {
                this.logRecordsSerializedLength = 0, this.logsCollectionString = "", Object.keys(this.prefixedLogsCollections).forEach((T) => this.prefixedLogsCollections[T] = /* @__PURE__ */ new Set()), this.save(!0);
              }
              cleanupPrefixedLogs(T) {
                var R = this.getPrefixedLogsCollection(T);
                this.removePreFixedLogs(R), this.prefixedLogsCollections[T] = /* @__PURE__ */ new Set(), this.save(!0);
              }
              getAllPrefixedLogsCollections() {
                return Object.keys(this.prefixedLogsCollections).reduce((T, R) => (T[R] = this.getPrefixedLogsCollection(R), T), {});
              }
              getPrefixedLogsCollection(T) {
                return Array.from(this.prefixedLogsCollections[T] || /* @__PURE__ */ new Set());
              }
            }
            J.ServicesPool = he, J.POOL = new J.ServicesPool();
          })(Me || (Me = {}));
          var Ce, Xe, ot, Ae = Te("unified-ui-platform-sdk", { title: !0, text: !0 });
          function me(J) {
            return new Ce.Service(J);
          }
          function Pe(J, E) {
            if (J.descriptor = J.descriptor || Object.getOwnPropertyDescriptor(J.target, J.key), typeof J.descriptor.value != "function") return console.warn(J.key, "Decorator must be used on function"), J.descriptor;
            var ne = J.descriptor.value, ie = J.target.constructor.name;
            return J.descriptor.value = function() {
              for (var se = [], he = 0; he < arguments.length; he++) se[he] = arguments[he];
              return E.call(this, ne, se, ie);
            }, J.descriptor;
          }
          function C() {
            var J = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 250;
            return function(E, ne, ie) {
              var se;
              return Pe({ target: E, key: ne, descriptor: ie }, function(he, Ie) {
                clearTimeout(se), se = window.setTimeout(() => {
                  clearTimeout(se), he.apply(this, Ie);
                }, J);
              });
            };
          }
          function N() {
            return (J, E) => {
              var ne = { get() {
                return new U(this, E !== void 0 ? E : J.key);
              }, enumerable: !0, configurable: !0 };
              return E !== void 0 ? Object.defineProperty(J, E, ne) : { kind: "method", placement: "prototype", key: J.key, descriptor: ne };
            };
          }
          function L(J) {
            var E = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1];
            return function(ne, ie, se) {
              return Pe({ target: ne, key: ie, descriptor: se }, (function() {
                var he = ze(function* (Ie, T) {
                  var R = "_".concat(ie, "_exec_flag");
                  if (!E || !this[R]) {
                    var x = (H) => {
                      if (this[R] = H, typeof J == "function") J.call(this, { isExec: H, ctx: this });
                      else {
                        var re = J;
                        H ? re.before && re.before.call(this, this) : re.after && re.after.call(this, this);
                      }
                    };
                    x(!0);
                    var F = Ie.apply(this, T);
                    F instanceof Promise ? F.then(() => x(!1)).catch(() => x(!1)) : (console.warn("Must be async function to use [@Executing] decorator"), x(!1));
                  }
                });
                return function(Ie, T) {
                  return he.apply(this, arguments);
                };
              })());
            };
          }
          function A(J) {
            return function(E, ne, ie) {
              return Pe({ target: E, key: ne, descriptor: ie }, (function() {
                var se = ze(function* (he, Ie, T) {
                  var R = this, x = (function() {
                    var H = ze(function* (re) {
                      re.id && typeof re.id == "string" && re.isErr === "yes" || (typeof re == "string" || re instanceof Error ? re = new Xe.Message("system", re) : (console.warn("Err must be 'string' or 'new Error()' instance"), re = new Xe.Message("system", "")));
                      var Ne = re;
                      Ne.ctx = R;
                      var Fe = "Error] ".concat(T, ".").concat(ne, " [").concat(Ne.id, "]: ").concat(Ne.message);
                      if (typeof J == "function") {
                        var pt = J;
                        console.log("[Handled".concat(Fe));
                        var dt = pt.call(R, Ne);
                        dt instanceof Promise && (yield dt);
                      } else {
                        var ct = J;
                        if (ct[Ne.id]) {
                          console.log("[Handled".concat(Fe));
                          var Ht = ct[Ne.id].call(R, Ne);
                          Ht instanceof Promise && (yield Ht);
                        } else if (ct.handle) {
                          console.log("[Handled".concat(Fe));
                          var Ze = ct.handle.call(R, Ne);
                          Ze instanceof Promise && (yield Ze);
                        } else console.warn("[Unhandled ".concat(Fe));
                        if (ct.fallback) {
                          var xt = ct.fallback.call(R, Ne);
                          xt instanceof Promise && (yield xt);
                        }
                      }
                    });
                    return function(re) {
                      return H.apply(this, arguments);
                    };
                  })();
                  try {
                    var F = he.apply(R, Ie);
                    return F instanceof Promise ? new Promise((H) => {
                      F.then(H).catch((function() {
                        var re = ze(function* (Ne) {
                          yield x(Ne), H(void 0);
                        });
                        return function(Ne) {
                          return re.apply(this, arguments);
                        };
                      })());
                    }) : F;
                  } catch (H) {
                    return void (yield x(H));
                  }
                });
                return function(he, Ie, T) {
                  return se.apply(this, arguments);
                };
              })());
            };
          }
          function V() {
            return function(J, E, ne) {
              return Pe({ target: J, key: E, descriptor: ne }, function(ie, se) {
                var he = "_".concat(E, "_once_flag");
                this[he] || (this[he] = !0, ie.call(this, se));
              });
            };
          }
          function m() {
            var J = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 16.666666666666668;
            return function(E, ne, ie) {
              var se, he = Date.now();
              return Pe({ target: E, key: ne, descriptor: ie }, function(Ie, T) {
                var R = this, x = function() {
                  for (var F = arguments.length, H = new Array(F), re = 0; re < F; re++) H[re] = arguments[re];
                  var Ne = Date.now();
                  window.clearTimeout(se), !he || Ne - he >= J ? (he = Ne, Ie.apply(R, H)) : se = window.setTimeout(() => x(...H), J - (Ne - he));
                };
                x(...T);
              });
            };
          }
          (function(J) {
            class E {
              static get isBrowserNotificationPromiseSupported() {
                try {
                  window.Notification.requestPermission().then();
                } catch {
                  return !1;
                }
                return !0;
              }
              constructor(ie) {
                this.defaultOptions = ie || {};
              }
              get isBrowserNotificationSupported() {
                return "Notification" in window;
              }
              get isBrowserNotificationIconSupported() {
                return this.isBrowserNotificationSupported && "icon" in window.Notification.prototype;
              }
              get isBrowserNotificationImageSupported() {
                return this.isBrowserNotificationSupported && "image" in window.Notification.prototype;
              }
              get isBrowserNotificationBadgeSupported() {
                return this.isBrowserNotificationSupported && "badge" in window.Notification.prototype;
              }
              get isPermissionGranted() {
                return window.Notification.permission === "granted";
              }
              get isPermissionDenied() {
                return window.Notification.permission === "denied";
              }
              get isPermissionUnknown() {
                return !this.isPermissionGranted && !this.isPermissionDenied;
              }
              requestNotificationUserPermission() {
                var ie = this;
                return ze(function* () {
                  ie.isBrowserNotificationSupported ? E.isBrowserNotificationPromiseSupported ? yield window.Notification.requestPermission() : yield new Promise((se) => window.Notification.requestPermission((he) => se(he))) : Ae.warn("Browser notification is not supported...");
                })();
              }
              fire(ie, se) {
                return new window.Notification(ie, Ee(Ee({}, this.defaultOptions), se || {}));
              }
            }
            J.Service = E;
          })(Ce || (Ce = {})), (function(J) {
            class E extends Error {
              constructor(se, he) {
                super(), this.isErr = "yes", this.id = se, this.stack = new Error().stack, typeof he == "string" ? this.message = he : he instanceof Error ? (this.message = he.message, this.name = he.name) : this.message = "";
              }
            }
            J.Message = E;
            class ne extends Error {
              constructor(se, he) {
                super(), this.isErr = "yes", this.id = se, this.stack = new Error().stack, this.details = he;
              }
            }
            J.Details = ne;
          })(Xe || (Xe = {})), (function(J) {
            J.Debounce = C, J.Evt = N, J.Exec = L, J.Handle = A, J.Once = V, J.Throttle = m;
          })(ot || (ot = {}));
          class U {
            constructor(E, ne) {
              this.target = E, this.eventName = ne;
            }
            emit(E) {
              var ne = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { bubbles: !0, composed: !0, cancelable: !1 };
              this.target.dispatchEvent(new CustomEvent(this.eventName, Ee({ detail: E }, ne)));
            }
          }
          var de = K(901), ve = Se.n(de), ae = K(960), _ = "uuip", S = "1.0", j = "1.0";
          function Y(J) {
            var E = ve().create();
            return E.accessToken = J, E.interceptors.request.use((ne) => {
              if (!ne.headers.Authorization && E.accessToken && (ne.headers.Authorization = "Bearer ".concat(E.accessToken)), !ne.headers.TrackingID) {
                var ie = (0, ae.v1)();
                ne.headers.TrackingID = "".concat(_, "_").concat(ie, "_").concat(S, ":").concat(j);
              }
              return ne.headers["Content-Type"] || (ne.headers["Content-Type"] = "application/json"), ne;
            }), E;
          }
          var bt, mt, At = K(545), Nt = Se.n(At), _t = K(176), w = Se.n(_t), r = K(855), n = Se.n(r);
          (function(J) {
            J.createService = (E) => {
              var ne = Nt().createInstance(), ie = E && E.backend ? E.backend : new (n())();
              ne.use(ie);
              var se = E && E.languageDetector ? E.languageDetector : new (w())();
              return ne.use(se), E && E.logger && ne.use({ log: "log" in E.logger ? E.logger.log : E.logger.info, warn: E.logger.warn, error: E.logger.error, type: "logger" }), ne;
            }, J.mergeServiceInitOptions = function() {
              for (var E = arguments.length, ne = new Array(E), ie = 0; ie < E; ie++) ne[ie] = arguments[ie];
              return Object.assign.call(null, {}, ...ne);
            }, J.createMixin = (E) => {
              var ne = "i18n" in E ? E.i18n : J.createService(), ie = "i18nInitOptions" in E ? E.i18nInitOptions : null;
              ie || Ae.info("i18n mixin instance waiting service initialization outside...");
              var se = !1;
              return (he) => class extends he {
                constructor() {
                  super(...arguments), this.onI18NInitialized = (Ie) => this.requestUpdate(), this.onI18NLanguageChanged = (Ie) => this.requestUpdate(), this.t = Nt().t.bind(ne);
                }
                connectedCallback() {
                  super.connectedCallback && super.connectedCallback(), ne.on("initialized", this.onI18NInitialized), ne.on("languageChanged", this.onI18NLanguageChanged), ne.isInitialized || se || !ie || (se = !0, ne.init(ie).finally(() => se = !1));
                }
                disconnectedCallback() {
                  ne.off("initialized", this.onI18NInitialized), ne.off("languageChanged", this.onI18NLanguageChanged), super.disconnectedCallback && super.disconnectedCallback();
                }
              };
            };
          })(bt || (bt = {})), (function(J) {
            J.DataController = class {
              constructor(E) {
                this.localization = { closeButtonText: "Close" }, this.type = E.type, this.text = E.text, this.link = E.link, this.linkName = E.linkName, this.linkTooltip = E.linkTooltip, this.iconDetail = E.iconDetail, this.linkHandler = E.linkHandler, this.clickHandler = E.clickHandler, this.errorDetail = E.errorDetail, this.taskId = E.taskId, this.localization = E.localization || this.localization, this.dismissHandler = E.dismissHandler, this.actions = E.actions, this.lineClamp = E.lineClamp;
              }
            };
          })(mt || (mt = {}));
          var u, h, k = K(497), P = Se.n(k);
          function G() {
            var J = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, E = new u.Service();
            return E.updateConfig(J), E;
          }
          (function(J) {
            var E, ne;
            (function(T) {
              var R, x, F;
              (function(H) {
                H.Info = "info", H.Warn = "warn", H.Error = "error", H.Success = "success", H.Chat = "chat", H.Default = "default";
              })(R = T.Type || (T.Type = {})), T.TYPES = Object.values(R), (function(H) {
                H.Silent = "silent", H.AutoDismiss = "autodismiss", H.Acknowledge = "acknowledge";
              })(x = T.Mode || (T.Mode = {})), T.MODES = Object.values(x), (function(H) {
                H.Added = "added", H.Pended = "pended", H.Activated = "activated", H.Deactivated = "deactivated", H.Removed = "removed";
              })(F = T.Status || (T.Status = {})), T.StatusWeight = { [F.Added]: 0, [F.Pended]: 1, [F.Activated]: 2, [F.Deactivated]: 3, [F.Removed]: 4 }, T.STATUSES = Object.values(F), (function(H) {
                H.User = "user_add";
              })(T.AddEventReason || (T.AddEventReason = {})), (function(H) {
                H.ServiceAutoPropagate = "service_auto_propagate_pending", H.ServiceAutoDismiss = "service_autodismiss_pending", H.UserSilent = "user_silent_pending";
              })(T.PendingEventReason || (T.PendingEventReason = {})), (function(H) {
                H.ServiceAutoPropagate = "service_auto_propagate_activate";
              })(T.ActivateEventReason || (T.ActivateEventReason = {})), (function(H) {
                H.UserNegative = "user_negative_deactivate", H.UserPositive = "user_positive_deactivate", H.UserNeutral = "user_neutral_deactivate";
              })(T.DeactivateEventReason || (T.DeactivateEventReason = {})), (function(H) {
                H.User = "user_remove";
              })(T.RemoveEventReason || (T.RemoveEventReason = {}));
            })(E = J.ItemMeta || (J.ItemMeta = {})), (function(T) {
              T.STATUS_EVENTS = ["add", "pending", "activate", "deactivate", "remove"], T.STATUS_EVENT_MAP = { add: E.Status.Added, pending: E.Status.Pended, activate: E.Status.Activated, deactivate: E.Status.Deactivated, remove: E.Status.Removed }, T.DISABLED_ITEM_MODE = { [E.Mode.Silent]: !1, [E.Mode.AutoDismiss]: !1, [E.Mode.Acknowledge]: !1 }, T.ACTIVATED_ITEM_MODE_LIMIT = { [E.Mode.Silent]: 0, [E.Mode.AutoDismiss]: 10, [E.Mode.Acknowledge]: 1 }, T.AUTO_DISMISS_TIMEOUT = 5e3;
            })(ne = J.ServiceMeta || (J.ServiceMeta = {}));
            class ie {
              constructor() {
                this.hubEmitter = De()();
              }
              emit(R) {
                for (var x = arguments.length, F = new Array(x > 1 ? x - 1 : 0), H = 1; H < x; H++) F[H - 1] = arguments[H];
                this.hubEmitter.emit(R, ...F);
              }
              addEventListener(R, x) {
                this.hubEmitter.on(R, x);
              }
              addOnceEventListener(R, x) {
                this.hubEmitter.once(R, x);
              }
              removeEventListener(R, x) {
                this.hubEmitter.off(R, x);
              }
              removeAllEventListeners() {
                P()(this.hubEmitter);
              }
            }
            J.Item = class {
              get status() {
                return this._status;
              }
              get reason() {
                return this._reason;
              }
              get mode() {
                return this._mode;
              }
              validateAuxOptions(T) {
                var R = {};
                return T && T.AUTO_DISMISS_TIMEOUT !== void 0 && this.mode === E.Mode.AutoDismiss && (R = Ee(Ee({}, R), {}, { AUTO_DISMISS_TIMEOUT: T.AUTO_DISMISS_TIMEOUT })), R;
              }
              constructor(T, R) {
                this._serviceHubSubscriptions = [], this._itemEmitter = De()();
                var { type: x, mode: F, title: H, data: re, timestamp: Ne } = T.data;
                this.type = x, this.title = H, this.data = re, this._mode = F, this.timestamp = Ne || (/* @__PURE__ */ new Date()).toISOString(), this.datetime = Be.DateTime.fromISO(this.timestamp).toLocaleString(Be.DateTime.DATETIME_SHORT_WITH_SECONDS), this.options = Object.freeze(this.validateAuxOptions(T.options || {})), R && (this._serviceHubAdapter = R, this._status = E.Status.Added, this._reason = E.AddEventReason.User, this.bindItemHubListeners());
              }
              bindItemHubListeners() {
                if (this._serviceHubAdapter) {
                  var T = (x, F, H) => {
                    this.timestamp in x && (this._status = F, this._reason = H, F === E.Status.Removed && (this.unbindItemHubListeners(), this.removeAllEventListeners()), this.emit("statusUpdate", F, H));
                  };
                  this._serviceHubAdapter.addEventListener("statusServiceUpdateResponse", T), this._serviceHubSubscriptions.push(() => {
                    var x;
                    (x = this._serviceHubAdapter) === null || x === void 0 || x.removeEventListener("statusServiceUpdateResponse", T);
                  });
                  var R = (x, F) => {
                    this.timestamp in x && (this._mode = F, this.emit("modeUpdate", F));
                  };
                  this._serviceHubAdapter.addEventListener("modeStatusUpdateResponse", R), this._serviceHubSubscriptions.push(() => {
                    var x;
                    (x = this._serviceHubAdapter) === null || x === void 0 || x.removeEventListener("modeStatusUpdateResponse", R);
                  });
                }
              }
              unbindItemHubListeners() {
                this._serviceHubSubscriptions && (this._serviceHubSubscriptions.forEach((T) => T()), this._serviceHubSubscriptions.length = 0);
              }
              deactivate(T) {
                this._status && E.StatusWeight[this._status] < E.StatusWeight[E.Status.Deactivated] ? this._serviceHubAdapter ? this._serviceHubAdapter.emit("statusServiceUpdateRequest", this, E.Status.Deactivated, T) : Ae.warn("Service hub adapter is not initialized for this notification item instance: ", this) : Ae.warn('Notification should have "'.concat(E.Status.Pended, '" or "').concat(E.Status.Activated, '" status to be able change status to "').concat(E.Status.Deactivated, '".Current notification status is "').concat(this._status, '". Ignoring this change'));
              }
              pending() {
                this._status === E.Status.Activated || this.mode !== E.Mode.Silent ? this._serviceHubAdapter ? this._serviceHubAdapter.emit("statusServiceUpdateRequest", this, E.Status.Pended, E.PendingEventReason.UserSilent) : Ae.warn("Service hub adapter is not initialized for this notification item instance: ", this) : Ae.warn('Notification should have "'.concat(E.Status.Activated, '" status or not "').concat(E.Mode.Silent, '" mode, to be able change status to "').concat(E.Status.Pended, '" and mode to "').concat(E.Mode.Silent, '".Current notification status is "').concat(this._status, '" and mode is "').concat(this.mode, '". Ignoring this change'));
              }
              emit(T) {
                for (var R = arguments.length, x = new Array(R > 1 ? R - 1 : 0), F = 1; F < R; F++) x[F - 1] = arguments[F];
                this._itemEmitter.emit(T, ...x);
              }
              addEventListener(T, R) {
                this._itemEmitter.on(T, R);
              }
              addOnceEventListener(T, R) {
                this._itemEmitter.once(T, R);
              }
              removeEventListener(T, R) {
                this._itemEmitter.off(T, R);
              }
              removeAllEventListeners() {
                P()(this._itemEmitter);
              }
            };
            var se = function(T, R) {
              return [...T, ...R].sort(arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : () => 0);
            }, he = (T, R) => T.reduce((x, F) => (R.indexOf(F) === -1 && x.push(F), x), []);
            class Ie {
              constructor() {
                this.emitter = De()(), this.map = {}, this.status = Ie.createStatus(), this.serviceConfig = { DISABLED_ITEM_MODE: Ee({}, ne.DISABLED_ITEM_MODE), ACTIVATED_ITEM_MODE_LIMIT: Ee({}, ne.ACTIVATED_ITEM_MODE_LIMIT), AUTO_DISMISS_TIMEOUT: ne.AUTO_DISMISS_TIMEOUT }, this.activeAutoDismissTimeoutRefs = {}, this.serviceHubAdapter = new ie(), this.bindServiceHubEvents();
              }
              static mergeConfig(R) {
                for (var x = arguments.length, F = new Array(x > 1 ? x - 1 : 0), H = 1; H < x; H++) F[H - 1] = arguments[H];
                if (!F.length) return R;
                var re = F.shift(), Ne = (pt) => pt && typeof pt == "object" && !Array.isArray(pt);
                if (Ne(R) && Ne(re)) for (var Fe in re) Ne(re[Fe]) ? (R[Fe] || Object.assign(R, { [Fe]: {} }), this.mergeConfig(R[Fe], re[Fe])) : Object.assign(R, { [Fe]: re[Fe] });
                return this.mergeConfig(R, ...F);
              }
              static createStatus() {
                return { [E.Status.Added]: this.createStatusHolderCollection(), [E.Status.Pended]: this.createStatusHolderCollection(), [E.Status.Activated]: this.createStatusHolderCollection(), [E.Status.Deactivated]: this.createStatusHolderCollection(), [E.Status.Removed]: this.createStatusHolderCollection() };
              }
              static createStatusHolderCollection() {
                return Object.assign([], Ee(Ee({ ids: [] }, this.createStatusHolderSubCollections(E.MODES)), this.createStatusHolderSubCollections(E.TYPES)));
              }
              static createStatusHolderSubCollections(R) {
                return Ee({}, R.reduce((x, F) => (x[F] = [], x), {}));
              }
              updateNotificationsCollections() {
                var R = Ie.createStatus();
                this.status.added.ids.forEach((x) => {
                  var F = this.map[x];
                  E.STATUSES.forEach((H) => {
                    this.status[H].ids.indexOf(F.timestamp) !== -1 && (R[H].push(F), R[H].ids.push(x), R[H][F.mode].push(F), R[H][F.type].push(F));
                  });
                }), this.status = R;
              }
              setAutoDismiss(R) {
                var x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : () => {
                };
                this.prepareUpdateNotifications(R).forEach((F) => {
                  var H;
                  F.mode === E.Mode.AutoDismiss && (this.activeAutoDismissTimeoutRefs[F.timestamp] = window.setTimeout(() => x(F), (H = F.options.AUTO_DISMISS_TIMEOUT) !== null && H !== void 0 ? H : this.serviceConfig.AUTO_DISMISS_TIMEOUT));
                });
              }
              removeAutoDismiss(R) {
                var x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : () => {
                };
                this.prepareUpdateNotifications(R).forEach((F) => {
                  F.timestamp in this.activeAutoDismissTimeoutRefs && (x(F), window.clearTimeout(this.activeAutoDismissTimeoutRefs[F.timestamp]), delete this.activeAutoDismissTimeoutRefs[F.timestamp]);
                });
              }
              update(R, x, F) {
                var H = Array.isArray(F) ? F : [F];
                if (H.length) {
                  var re = H.map((Ne) => Ne.timestamp);
                  switch (R) {
                    case "add":
                      H.forEach((Ne) => this.map[Ne.timestamp] = Ne), this.status.added.ids = se(this.status.added.ids, re, Ie.sortTimestampsFn);
                      break;
                    case "pending":
                      this.status.pended.ids = se(this.status.pended.ids, re, Ie.sortTimestampsFn), this.status.activated.ids = he(this.status.activated.ids, re), this.status.deactivated.ids = he(this.status.deactivated.ids, re);
                      break;
                    case "activate":
                      this.status.pended.ids = he(this.status.pended.ids, re), this.status.activated.ids = se(this.status.activated.ids, re, Ie.sortTimestampsFn), this.status.deactivated.ids = he(this.status.deactivated.ids, re);
                      break;
                    case "deactivate":
                      this.status.pended.ids = he(this.status.pended.ids, re), this.status.activated.ids = he(this.status.activated.ids, re), this.status.deactivated.ids = se(this.status.deactivated.ids, re, Ie.sortTimestampsFn);
                      break;
                    case "remove":
                      this.status.pended.ids = he(this.status.pended.ids, re), this.status.activated.ids = he(this.status.activated.ids, re), this.status.deactivated.ids = he(this.status.deactivated.ids, re), this.status.added.ids = he(this.status.added.ids, re), this.status.removed.ids = se(this.status.removed.ids, re, Ie.sortTimestampsFn), re.forEach((Ne) => delete this.map[Ne]);
                  }
                  this.updateNotificationsCollections(), this.emit(R, H, x), this.propagate(R, x, H);
                }
              }
              propagate(R, x, F) {
                var H = Array.isArray(F) ? F : [F];
                if (H.length) switch (R) {
                  case "add":
                    this.update("pending", E.PendingEventReason.ServiceAutoPropagate, H);
                    break;
                  case "pending":
                  case "deactivate":
                    H.forEach((re) => {
                      this.removeAutoDismiss(re);
                    }), this.update("activate", E.ActivateEventReason.ServiceAutoPropagate, this.prepareActiveCandidatesNotifications(this.status.pended));
                    break;
                  case "activate":
                    H.forEach((re) => {
                      this.setAutoDismiss(re, (Ne) => {
                        Ne.mode === E.Mode.AutoDismiss && this.serviceHubAdapter.emit("statusServiceUpdateRequest", Ne, E.Status.Pended, E.PendingEventReason.ServiceAutoDismiss);
                      });
                    });
                    break;
                  case "remove":
                    this.update("deactivate", E.DeactivateEventReason.UserNegative, H);
                }
              }
              prepareAddNotifications(R) {
                var x = Object.keys(this.serviceConfig.DISABLED_ITEM_MODE).reduce((F, H) => (this.serviceConfig.DISABLED_ITEM_MODE[H] || F.push(H), F), []).map((F) => '"'.concat(F, '"')).join(", ");
                return (Array.isArray(R) ? R : [R]).filter((F) => !this.serviceConfig.DISABLED_ITEM_MODE[F.data.mode] || (Ae.error('Trying to .add(...) notification mode "'.concat(F.data.mode, '" that is disabled in this notifications service instance by configuration.Current configuration is: "').concat(JSON.stringify(this.config), '"Only ').concat(x, " allowed. Ignoring .add(").concat(JSON.stringify(F), ") notification...")), !1)).map((F) => new J.Item(F, this.serviceHubAdapter));
              }
              prepareUpdateNotifications(R) {
                return (Array.isArray(R) ? R : [R]).reduce((x, F) => (F.timestamp in this.map ? x.push(F) : Ae.error("Trying to handle untracked notification. Call .add(...) first...", JSON.stringify(F)), x), []);
              }
              prepareActiveCandidatesNotifications(R) {
                var x = (Array.isArray(R) ? R : [R]).reduce((F, H) => (this.status.activated[H.mode].length + F[H.mode].length < this.serviceConfig.ACTIVATED_ITEM_MODE_LIMIT[H.mode] && F[H.mode].push(H), F), Ie.createStatusHolderSubCollections(E.MODES));
                return Object.values(x).reduce((F, H) => F.concat(H), []);
              }
              static sortByTimestampsFn(R, x) {
                return Ie.sortTimestampsFn(R.timestamp, x.timestamp);
              }
              get added() {
                return this.status.added;
              }
              get pended() {
                return this.status.pended;
              }
              get activated() {
                return this.status.activated;
              }
              get deactivated() {
                return this.status.deactivated;
              }
              getNotificationStatus(R) {
                return Object.keys(this.status).filter((x) => x !== E.Status.Added).find((x) => this.status[x].ids.indexOf(R.timestamp) !== -1);
              }
              get config() {
                return Object.freeze(this.serviceConfig);
              }
              static validateUpdateConfig(R) {
                var x = R;
                if (x.ACTIVATED_ITEM_MODE_LIMIT && x.ACTIVATED_ITEM_MODE_LIMIT.acknowledge > ne.ACTIVATED_ITEM_MODE_LIMIT.acknowledge) throw new Error(`
          Max `.concat(E.Mode.Acknowledge, " limit is ").concat(ne.ACTIVATED_ITEM_MODE_LIMIT.acknowledge, `
        `));
                if (x.DISABLED_ITEM_MODE) {
                  if (!Object.keys(x.DISABLED_ITEM_MODE).reduce((F, H) => (x.DISABLED_ITEM_MODE[H] && F++, F), 0)) throw new Error("At least one notifications mode should be allowed in service instance");
                  Object.keys(x.ACTIVATED_ITEM_MODE_LIMIT).forEach((F) => {
                    F in x.DISABLED_ITEM_MODE && x.DISABLED_ITEM_MODE[F] && Ae.warn('Changing configuration limit count for mode "'.concat(F, `" won't have any effect, because this mode is disabled in notifications service instance`));
                  }), "AUTO_DISMISS_TIMEOUT" in x && x.DISABLED_ITEM_MODE[E.Mode.AutoDismiss] && Ae.warn(`Changing "AUTO_DISMISS_TIMEOUT" configuration option won't have any effect,because "`.concat(E.Mode.AutoDismiss, '" mode is disabled in notifications service instance'));
                }
                return !0;
              }
              updateConfig(R) {
                Ie.validateUpdateConfig(R) && (this.serviceConfig = Ie.mergeConfig({}, this.serviceConfig, R), Ae.info("Updated notifications service configuration: ", this.config));
              }
              add(R) {
                var x = this.prepareAddNotifications(R);
                return this.update("add", E.AddEventReason.User, x), x;
              }
              pending(R) {
                var x = this.prepareUpdateNotifications(R);
                return this.serviceHubAdapter.emit("statusServiceUpdateRequest", x, E.Status.Pended, E.PendingEventReason.UserSilent), x;
              }
              deactivate(R, x) {
                var F = this.prepareUpdateNotifications(R);
                return this.serviceHubAdapter.emit("statusServiceUpdateRequest", F, E.Status.Deactivated, x), F;
              }
              remove(R) {
                var x = this.prepareUpdateNotifications(R);
                return this.serviceHubAdapter.emit("statusServiceUpdateRequest", x, E.Status.Removed, E.RemoveEventReason.User), x;
              }
              pendingAllActivated() {
                return this.pending(this.status.activated);
              }
              pendingAll() {
                return this.pending([...this.status.pended, ...this.status.activated]);
              }
              deactivateAllActivated(R) {
                return this.deactivate(this.status.activated, R);
              }
              deactivateAll(R) {
                return this.deactivate([...this.status.pended, ...this.status.activated], R);
              }
              removeAllDeactivated() {
                return this.remove(this.status.deactivated);
              }
              removeAll() {
                return this.remove(this.status.added);
              }
              addEventListener(R, x) {
                this.emitter.on(R, x);
              }
              removeEventListener(R, x) {
                this.emitter.off(R, x);
              }
              addOnceEventListener(R, x) {
                this.emitter.once(R, x);
              }
              removeAllEventListeners() {
                P()(this.emitter);
              }
              emit(R) {
                for (var x = arguments.length, F = new Array(x > 1 ? x - 1 : 0), H = 1; H < x; H++) F[H - 1] = arguments[H];
                this.emitter.emit(R, ...F);
              }
              bindServiceHubEvents() {
                this.serviceHubAdapter.addEventListener("statusServiceUpdateRequest", (R, x, F) => {
                  var H = Array.isArray(R) ? R : [R], re = H.reduce((dt, ct) => (dt[ct.timestamp] = this.getNotificationStatus(ct), dt), {}), Ne = H.filter((dt) => (re[dt.timestamp] === E.Status.Activated || dt.mode !== E.Mode.Silent) && x === E.Status.Pended), Fe = Ne.filter((dt) => dt.mode !== E.Mode.Silent);
                  Fe.length && this.serviceHubAdapter.emit("modeStatusUpdateResponse", Fe.reduce((dt, ct) => (dt[ct.timestamp] = ct, dt), {}), E.Mode.Silent), Ne.length && this.update("pending", F, Ne);
                  var pt = H.filter((dt) => {
                    var ct = re[dt.timestamp];
                    return (ct === E.Status.Pended || ct === E.Status.Activated) && x === E.Status.Deactivated;
                  });
                  pt.length && this.update("deactivate", F, pt), H.filter((dt) => {
                    var ct = re[dt.timestamp];
                    return (ct === E.Status.Pended || ct === E.Status.Activated || ct === E.Status.Deactivated) && x === E.Status.Removed;
                  }).length && this.update("remove", F, R);
                }), ne.STATUS_EVENTS.forEach((R) => {
                  this.addEventListener(R, (x, F) => {
                    var H = ne.STATUS_EVENT_MAP[R], re = x.reduce((Ne, Fe) => (Ne[Fe.timestamp] = Fe, Ne), {});
                    this.serviceHubAdapter.emit("statusServiceUpdateResponse", re, H, F);
                  });
                });
              }
            }
            Ie.sortTimestampsFn = (T, R) => T > R ? 1 : T < R ? -1 : 0, J.Service = Ie;
          })(u || (u = {})), (function(J) {
            class E {
              constructor() {
                this.listeners = [], this.listenersOnce = [], this.listen = (se) => (this.listeners.push(se), { stopListen: () => this.stopListen(se) }), this.listenOnce = (se) => (this.listenersOnce.push(se), { stopListenOnce: () => this.stopListenOnce(se) }), this.stopListen = (se) => {
                  var he = this.listeners.indexOf(se, 0);
                  return he > -1 && (this.listeners.splice(he, 1), !0);
                }, this.stopListenOnce = (se) => {
                  var he = this.listenersOnce.indexOf(se, 0);
                  return he > -1 && (this.listenersOnce.splice(he, 1), !0);
                }, this.stopListenAll = () => {
                  this.listeners = [], this.listenersOnce = [];
                }, this.send = (se) => {
                  this.listeners.forEach((he) => he(se)), this.listenersOnce.forEach((he) => he(se)), this.listenersOnce = [];
                };
              }
            }
            class ne {
              constructor() {
                this.listeners = [], this.listenersOnce = [], this.listen = (se) => (this.listeners.push(se), { stopListen: () => this.stopListen(se) }), this.listenOnce = (se) => (this.listenersOnce.push(se), { stopListenOnce: () => this.stopListenOnce(se) }), this.stopListen = (se) => {
                  var he = this.listeners.indexOf(se, 0);
                  return he > -1 && (this.listeners.splice(he, 1), !0);
                }, this.stopListenOnce = (se) => {
                  var he = this.listenersOnce.indexOf(se, 0);
                  return he > -1 && (this.listenersOnce.splice(he, 1), !0);
                }, this.stopListenAll = () => {
                  this.listeners = [], this.listenersOnce = [];
                }, this.send = () => {
                  this.listeners.forEach((se) => se()), this.listenersOnce.forEach((se) => se()), this.listenersOnce = [];
                };
              }
            }
            J.create = new class {
              withData() {
                var ie = new E();
                return { signal: ie, send: ie.send, stopListenAll: ie.stopListenAll };
              }
              empty() {
                var ie = new ne();
                return { signal: ie, send: ie.send, stopListenAll: ie.stopListenAll };
              }
            }();
          })(h || (h = {}));
          var B = null, X = Number.MAX_SAFE_INTEGER === void 0 ? 9007199254740991 : Number.MAX_SAFE_INTEGER, le = 1073741824;
          class ce extends Error {
            constructor() {
              super("The timer is in an undefined state.");
            }
          }
          var Q, He = () => {
            if (B !== null) return B;
            var J = new Blob([`(()=>{"use strict";
const e=new Map,t=new Map,r=(e,t)=>
{let r,o;const i=performance.now();r=i,o=e-Math.max(0,i-t);
    return{expected:r+o,remainingDelay:o}},
    o=(e,t,r,i)=>{const s=performance.now();
        s>r?postMessage({id:null,method:"call",params:{timerId:t,timerType:i}}):e.set(t,setTimeout(o,r-s,e,t,r,i))};
        addEventListener("message",(i=>{let{data:s}=i;try{if("clear"===s.method){const{id:r,params:{timerId:o,timerType:i}}=s;
        if("interval"===i)
        (t=>{const r=e.get(t);
        if(void 0===r)
        throw new Error('There is no interval scheduled with the given id "'.concat(t,'".'));
        clearTimeout(r),e.delete(t)})(o),postMessage({error:null,id:r});
        else{if("timeout"!==i)
        throw new Error('The given type "'.concat(i,'" is not supported'));
        (e=>{const r=t.get(e);if(void 0===r)
        throw new Error('There is no timeout scheduled with the given id "'.concat(e,'".'));
        clearTimeout(r),t.delete(e)})(o),postMessage({error:null,id:r})}}
        else{if("set"!==s.method)
        throw new Error('The given method "'.concat(s.method,'" is not supported'));
        {const{params:{delay:i,now:n,timerId:a,timerType:d}}=s;
        if("interval"===d)
        ((t,i,s)=>{const{expected:n,remainingDelay:a}=r(t,s);
        e.set(i,setTimeout(o,a,e,i,n,"interval"))})(i,a,n);
        else{if("timeout"!==d)
        throw new Error('The given type "'.concat(d,'" is not supported'));
        ((e,i,s)=>{const{expected:n,remainingDelay:a}=r(e,s);
        t.set(i,setTimeout(o,a,t,i,n,"timeout"))})(i,a,n)}}}}catch(e){postMessage({error:{message:e.message},id:s.id,result:null})}}))})();`], { type: "application/javascript; charset=utf-8" }), E = URL.createObjectURL(J);
            return Ae.info("Worker url established", E), B = ((ne) => {
              var ie = /* @__PURE__ */ new Map([[0, () => {
              }]]), se = /* @__PURE__ */ new Map([[0, () => {
              }]]), he = /* @__PURE__ */ new Map(), Ie = new Worker(ne);
              Ae.info("worker created ", Ie);
              var T, R = /* @__PURE__ */ new WeakMap(), x = /* @__PURE__ */ ((F, H) => (re) => {
                var Ne = H.get(re), Fe = Ne === void 0 ? re.size : Ne < le ? Ne + 1 : 0;
                if (!re.has(Fe)) return F(re, Fe);
                if (re.size < 536870912) {
                  for (; re.has(Fe); ) Fe = Math.floor(Math.random() * le);
                  return F(re, Fe);
                }
                if (re.size > X) throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");
                for (; re.has(Fe); ) Fe = Math.floor(Math.random() * X);
                return F(re, Fe);
              })((T = R, (F, H) => (T.set(F, H), H)), R);
              return Ie.addEventListener("message", (F) => {
                var H, { data: re } = F;
                if ((H = re).method !== void 0 && H.method === "call") {
                  var { params: { timerId: Ne, timerType: Fe } } = re;
                  if (Fe === "interval") {
                    var pt = ie.get(Ne);
                    if (typeof pt == "number") {
                      var dt = he.get(pt);
                      if (dt === void 0 || dt.timerId !== Ne || dt.timerType !== Fe) throw new ce();
                    } else {
                      if (pt === void 0) throw new ce();
                      pt();
                    }
                  } else if (Fe === "timeout") {
                    var ct = se.get(Ne);
                    if (typeof ct == "number") {
                      var Ht = he.get(ct);
                      if (Ht === void 0 || Ht.timerId !== Ne || Ht.timerType !== Fe) throw new ce();
                    } else {
                      if (ct === void 0) throw new ce();
                      ct(), se.delete(Ne);
                    }
                  }
                } else if (((gn) => gn.error === null && typeof gn.id == "number")(re)) {
                  var { id: Ze } = re, xt = he.get(Ze);
                  if (xt === void 0) throw new ce();
                  var { timerId: tn, timerType: bn } = xt;
                  he.delete(Ze), bn === "interval" ? ie.delete(tn) : se.delete(tn);
                } else {
                  var { error: { message: fn } } = re;
                  Ae.error(fn);
                }
              }), { clearInterval: (F) => {
                var H = x(he);
                he.set(H, { timerId: F, timerType: "interval" }), ie.set(F, H), Ie.postMessage({ id: H, method: "clear", params: { timerId: F, timerType: "interval" } });
              }, clearTimeout: (F) => {
                var H = x(he);
                he.set(H, { timerId: F, timerType: "timeout" }), se.set(F, H), Ie.postMessage({ id: H, method: "clear", params: { timerId: F, timerType: "timeout" } });
              }, setInterval: (F, H) => {
                var re = x(ie);
                return ie.set(re, () => {
                  F(), typeof ie.get(re) == "function" && Ie.postMessage({ id: null, method: "set", params: { delay: H, now: performance.now(), timerId: re, timerType: "interval" } });
                }), Ie.postMessage({ id: null, method: "set", params: { delay: H, now: performance.now(), timerId: re, timerType: "interval" } }), re;
              }, setTimeout: (F, H) => {
                var re = x(se);
                return se.set(re, F), Ie.postMessage({ id: null, method: "set", params: { delay: H, now: performance.now(), timerId: re, timerType: "timeout" } }), re;
              } };
            })(E), B.setTimeout(() => URL.revokeObjectURL(E), 0), B;
          }, Ye = (J) => He().clearInterval(J), vt = (J) => He().clearTimeout(J), wt = (J, E) => He().setInterval(J, E), Ut = (J, E) => He().setTimeout(J, E);
          function lt(J) {
            if (J instanceof Error) return J;
            var E = "[Unable to stringify the thrown value]";
            try {
              E = JSON.stringify(J);
            } catch {
            }
            return new Error("This value was thrown as is, not through an Error: ".concat(E));
          }
          return (function(J) {
            var E = null;
            J.setErrorHandler = function(ne) {
              E ? Ae.error("Error handler already set") : (Ae.info("Setting custom error handler: ".concat(ne)), E = ne);
            }, J.check = function(ne, ie, se) {
              return ne || (E ? E(ie, se) : Ae.info("Assert failed in ".concat(ie, ": ").concat(se))), ne;
            };
          })(Q || (Q = {})), Z;
        })(), g.exports = Oe();
      }, 901(g, z, K) {
        function je(o, d) {
          return function() {
            return o.apply(d, arguments);
          };
        }
        const { toString: Ee } = Object.prototype, { getPrototypeOf: Ve } = Object, { iterator: Ge, toStringTag: ze } = Symbol, Oe = (Se = /* @__PURE__ */ Object.create(null), (o) => {
          const d = Ee.call(o);
          return Se[d] || (Se[d] = d.slice(8, -1).toLowerCase());
        });
        var Se;
        const Z = (o) => (o = o.toLowerCase(), (d) => Oe(d) === o), ke = (o) => (d) => typeof d === o, { isArray: De } = Array, Be = ke("undefined");
        function Ke(o) {
          return o !== null && !Be(o) && o.constructor !== null && !Be(o.constructor) && Me(o.constructor.isBuffer) && o.constructor.isBuffer(o);
        }
        const nt = Z("ArrayBuffer"), st = ke("string"), Me = ke("function"), it = ke("number"), Te = (o) => o !== null && typeof o == "object", Ce = (o) => {
          if (Oe(o) !== "object") return !1;
          const d = Ve(o);
          return !(d !== null && d !== Object.prototype && Object.getPrototypeOf(d) !== null || ze in o || Ge in o);
        }, Xe = Z("Date"), ot = Z("File"), Ae = Z("Blob"), me = Z("FileList"), Pe = Z("URLSearchParams"), [C, N, L, A] = ["ReadableStream", "Request", "Response", "Headers"].map(Z);
        function V(o, d, { allOwnKeys: y = !1 } = {}) {
          if (o == null) return;
          let v, M;
          if (typeof o != "object" && (o = [o]), De(o)) for (v = 0, M = o.length; v < M; v++) d.call(null, o[v], v, o);
          else {
            if (Ke(o)) return;
            const $ = y ? Object.getOwnPropertyNames(o) : Object.keys(o), q = $.length;
            let ee;
            for (v = 0; v < q; v++) ee = $[v], d.call(null, o[ee], ee, o);
          }
        }
        function m(o, d) {
          if (Ke(o)) return null;
          d = d.toLowerCase();
          const y = Object.keys(o);
          let v, M = y.length;
          for (; M-- > 0; ) if (v = y[M], d === v.toLowerCase()) return v;
          return null;
        }
        const U = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : K.g, de = (o) => !Be(o) && o !== U, ve = (ae = typeof Uint8Array < "u" && Ve(Uint8Array), (o) => ae && o instanceof ae);
        var ae;
        const _ = Z("HTMLFormElement"), S = (({ hasOwnProperty: o }) => (d, y) => o.call(d, y))(Object.prototype), j = Z("RegExp"), Y = (o, d) => {
          const y = Object.getOwnPropertyDescriptors(o), v = {};
          V(y, (M, $) => {
            let q;
            (q = d(M, $, o)) !== !1 && (v[$] = q || M);
          }), Object.defineProperties(o, v);
        }, bt = Z("AsyncFunction"), mt = (At = typeof setImmediate == "function", Nt = Me(U.postMessage), At ? setImmediate : Nt ? (_t = `axios@${Math.random()}`, w = [], U.addEventListener("message", ({ source: o, data: d }) => {
          o === U && d === _t && w.length && w.shift()();
        }, !1), (o) => {
          w.push(o), U.postMessage(_t, "*");
        }) : (o) => setTimeout(o));
        var At, Nt, _t, w;
        const r = typeof queueMicrotask < "u" ? queueMicrotask.bind(U) : typeof process < "u" && process.nextTick || mt;
        var n = { isArray: De, isArrayBuffer: nt, isBuffer: Ke, isFormData: (o) => {
          let d;
          return o && (typeof FormData == "function" && o instanceof FormData || Me(o.append) && ((d = Oe(o)) === "formdata" || d === "object" && Me(o.toString) && o.toString() === "[object FormData]"));
        }, isArrayBufferView: function(o) {
          let d;
          return d = typeof ArrayBuffer < "u" && ArrayBuffer.isView ? ArrayBuffer.isView(o) : o && o.buffer && nt(o.buffer), d;
        }, isString: st, isNumber: it, isBoolean: (o) => o === !0 || o === !1, isObject: Te, isPlainObject: Ce, isEmptyObject: (o) => {
          if (!Te(o) || Ke(o)) return !1;
          try {
            return Object.keys(o).length === 0 && Object.getPrototypeOf(o) === Object.prototype;
          } catch {
            return !1;
          }
        }, isReadableStream: C, isRequest: N, isResponse: L, isHeaders: A, isUndefined: Be, isDate: Xe, isFile: ot, isBlob: Ae, isRegExp: j, isFunction: Me, isStream: (o) => Te(o) && Me(o.pipe), isURLSearchParams: Pe, isTypedArray: ve, isFileList: me, forEach: V, merge: function o() {
          const { caseless: d, skipUndefined: y } = de(this) && this || {}, v = {}, M = ($, q) => {
            const ee = d && m(v, q) || q;
            Ce(v[ee]) && Ce($) ? v[ee] = o(v[ee], $) : Ce($) ? v[ee] = o({}, $) : De($) ? v[ee] = $.slice() : y && Be($) || (v[ee] = $);
          };
          for (let $ = 0, q = arguments.length; $ < q; $++) arguments[$] && V(arguments[$], M);
          return v;
        }, extend: (o, d, y, { allOwnKeys: v } = {}) => (V(d, (M, $) => {
          y && Me(M) ? Object.defineProperty(o, $, { value: je(M, y), writable: !0, enumerable: !0, configurable: !0 }) : Object.defineProperty(o, $, { value: M, writable: !0, enumerable: !0, configurable: !0 });
        }, { allOwnKeys: v }), o), trim: (o) => o.trim ? o.trim() : o.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""), stripBOM: (o) => (o.charCodeAt(0) === 65279 && (o = o.slice(1)), o), inherits: (o, d, y, v) => {
          o.prototype = Object.create(d.prototype, v), Object.defineProperty(o.prototype, "constructor", { value: o, writable: !0, enumerable: !1, configurable: !0 }), Object.defineProperty(o, "super", { value: d.prototype }), y && Object.assign(o.prototype, y);
        }, toFlatObject: (o, d, y, v) => {
          let M, $, q;
          const ee = {};
          if (d = d || {}, o == null) return d;
          do {
            for (M = Object.getOwnPropertyNames(o), $ = M.length; $-- > 0; ) q = M[$], v && !v(q, o, d) || ee[q] || (d[q] = o[q], ee[q] = !0);
            o = y !== !1 && Ve(o);
          } while (o && (!y || y(o, d)) && o !== Object.prototype);
          return d;
        }, kindOf: Oe, kindOfTest: Z, endsWith: (o, d, y) => {
          o = String(o), (y === void 0 || y > o.length) && (y = o.length), y -= d.length;
          const v = o.indexOf(d, y);
          return v !== -1 && v === y;
        }, toArray: (o) => {
          if (!o) return null;
          if (De(o)) return o;
          let d = o.length;
          if (!it(d)) return null;
          const y = new Array(d);
          for (; d-- > 0; ) y[d] = o[d];
          return y;
        }, forEachEntry: (o, d) => {
          const y = (o && o[Ge]).call(o);
          let v;
          for (; (v = y.next()) && !v.done; ) {
            const M = v.value;
            d.call(o, M[0], M[1]);
          }
        }, matchAll: (o, d) => {
          let y;
          const v = [];
          for (; (y = o.exec(d)) !== null; ) v.push(y);
          return v;
        }, isHTMLForm: _, hasOwnProperty: S, hasOwnProp: S, reduceDescriptors: Y, freezeMethods: (o) => {
          Y(o, (d, y) => {
            if (Me(o) && ["arguments", "caller", "callee"].indexOf(y) !== -1) return !1;
            const v = o[y];
            Me(v) && (d.enumerable = !1, "writable" in d ? d.writable = !1 : d.set || (d.set = () => {
              throw Error("Can not rewrite read-only method '" + y + "'");
            }));
          });
        }, toObjectSet: (o, d) => {
          const y = {}, v = (M) => {
            M.forEach(($) => {
              y[$] = !0;
            });
          };
          return De(o) ? v(o) : v(String(o).split(d)), y;
        }, toCamelCase: (o) => o.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(d, y, v) {
          return y.toUpperCase() + v;
        }), noop: () => {
        }, toFiniteNumber: (o, d) => o != null && Number.isFinite(o = +o) ? o : d, findKey: m, global: U, isContextDefined: de, isSpecCompliantForm: function(o) {
          return !!(o && Me(o.append) && o[ze] === "FormData" && o[Ge]);
        }, toJSONObject: (o) => {
          const d = new Array(10), y = (v, M) => {
            if (Te(v)) {
              if (d.indexOf(v) >= 0) return;
              if (Ke(v)) return v;
              if (!("toJSON" in v)) {
                d[M] = v;
                const $ = De(v) ? [] : {};
                return V(v, (q, ee) => {
                  const fe = y(q, M + 1);
                  !Be(fe) && ($[ee] = fe);
                }), d[M] = void 0, $;
              }
            }
            return v;
          };
          return y(o, 0);
        }, isAsyncFn: bt, isThenable: (o) => o && (Te(o) || Me(o)) && Me(o.then) && Me(o.catch), setImmediate: mt, asap: r, isIterable: (o) => o != null && Me(o[Ge]) };
        class u extends Error {
          static from(d, y, v, M, $, q) {
            const ee = new u(d.message, y || d.code, v, M, $);
            return ee.cause = d, ee.name = d.name, q && Object.assign(ee, q), ee;
          }
          constructor(d, y, v, M, $) {
            super(d), this.name = "AxiosError", this.isAxiosError = !0, y && (this.code = y), v && (this.config = v), M && (this.request = M), $ && (this.response = $, this.status = $.status);
          }
          toJSON() {
            return { message: this.message, name: this.name, description: this.description, number: this.number, fileName: this.fileName, lineNumber: this.lineNumber, columnNumber: this.columnNumber, stack: this.stack, config: n.toJSONObject(this.config), code: this.code, status: this.status };
          }
        }
        u.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE", u.ERR_BAD_OPTION = "ERR_BAD_OPTION", u.ECONNABORTED = "ECONNABORTED", u.ETIMEDOUT = "ETIMEDOUT", u.ERR_NETWORK = "ERR_NETWORK", u.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS", u.ERR_DEPRECATED = "ERR_DEPRECATED", u.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE", u.ERR_BAD_REQUEST = "ERR_BAD_REQUEST", u.ERR_CANCELED = "ERR_CANCELED", u.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT", u.ERR_INVALID_URL = "ERR_INVALID_URL";
        var h = u;
        function k(o) {
          return n.isPlainObject(o) || n.isArray(o);
        }
        function P(o) {
          return n.endsWith(o, "[]") ? o.slice(0, -2) : o;
        }
        function G(o, d, y) {
          return o ? o.concat(d).map(function(v, M) {
            return v = P(v), !y && M ? "[" + v + "]" : v;
          }).join(y ? "." : "") : d;
        }
        const B = n.toFlatObject(n, {}, null, function(o) {
          return /^is[A-Z]/.test(o);
        });
        function X(o, d, y) {
          if (!n.isObject(o)) throw new TypeError("target must be an object");
          d = d || new FormData();
          const v = (y = n.toFlatObject(y, { metaTokens: !0, dots: !1, indexes: !1 }, !1, function(Re, qe) {
            return !n.isUndefined(qe[Re]);
          })).metaTokens, M = y.visitor || ge, $ = y.dots, q = y.indexes, ee = (y.Blob || typeof Blob < "u" && Blob) && n.isSpecCompliantForm(d);
          if (!n.isFunction(M)) throw new TypeError("visitor must be a function");
          function fe(Re) {
            if (Re === null) return "";
            if (n.isDate(Re)) return Re.toISOString();
            if (n.isBoolean(Re)) return Re.toString();
            if (!ee && n.isBlob(Re)) throw new h("Blob is not supported. Use a Buffer instead.");
            return n.isArrayBuffer(Re) || n.isTypedArray(Re) ? ee && typeof Blob == "function" ? new Blob([Re]) : Buffer.from(Re) : Re;
          }
          function ge(Re, qe, We) {
            let Ue = Re;
            if (Re && !We && typeof Re == "object") {
              if (n.endsWith(qe, "{}")) qe = v ? qe : qe.slice(0, -2), Re = JSON.stringify(Re);
              else if (n.isArray(Re) && (function(at) {
                return n.isArray(at) && !at.some(k);
              })(Re) || (n.isFileList(Re) || n.endsWith(qe, "[]")) && (Ue = n.toArray(Re))) return qe = P(qe), Ue.forEach(function(at, Pt) {
                !n.isUndefined(at) && at !== null && d.append(q === !0 ? G([qe], Pt, $) : q === null ? qe : qe + "[]", fe(at));
              }), !1;
            }
            return !!k(Re) || (d.append(G(We, qe, $), fe(Re)), !1);
          }
          const ye = [], _e = Object.assign(B, { defaultVisitor: ge, convertValue: fe, isVisitable: k });
          if (!n.isObject(o)) throw new TypeError("data must be an object");
          return (function Re(qe, We) {
            if (!n.isUndefined(qe)) {
              if (ye.indexOf(qe) !== -1) throw Error("Circular reference detected in " + We.join("."));
              ye.push(qe), n.forEach(qe, function(Ue, at) {
                (!(n.isUndefined(Ue) || Ue === null) && M.call(d, Ue, n.isString(at) ? at.trim() : at, We, _e)) === !0 && Re(Ue, We ? We.concat(at) : [at]);
              }), ye.pop();
            }
          })(o), d;
        }
        function le(o) {
          const d = { "!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+", "%00": "\0" };
          return encodeURIComponent(o).replace(/[!'()~]|%20|%00/g, function(y) {
            return d[y];
          });
        }
        function ce(o, d) {
          this._pairs = [], o && X(o, this, d);
        }
        const Q = ce.prototype;
        function He(o) {
          return encodeURIComponent(o).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
        }
        function Ye(o, d, y) {
          if (!d) return o;
          const v = y && y.encode || He, M = n.isFunction(y) ? { serialize: y } : y, $ = M && M.serialize;
          let q;
          if (q = $ ? $(d, M) : n.isURLSearchParams(d) ? d.toString() : new ce(d, M).toString(v), q) {
            const ee = o.indexOf("#");
            ee !== -1 && (o = o.slice(0, ee)), o += (o.indexOf("?") === -1 ? "?" : "&") + q;
          }
          return o;
        }
        Q.append = function(o, d) {
          this._pairs.push([o, d]);
        }, Q.toString = function(o) {
          const d = o ? function(y) {
            return o.call(this, y, le);
          } : le;
          return this._pairs.map(function(y) {
            return d(y[0]) + "=" + d(y[1]);
          }, "").join("&");
        };
        var vt = class {
          constructor() {
            this.handlers = [];
          }
          use(o, d, y) {
            return this.handlers.push({ fulfilled: o, rejected: d, synchronous: !!y && y.synchronous, runWhen: y ? y.runWhen : null }), this.handlers.length - 1;
          }
          eject(o) {
            this.handlers[o] && (this.handlers[o] = null);
          }
          clear() {
            this.handlers && (this.handlers = []);
          }
          forEach(o) {
            n.forEach(this.handlers, function(d) {
              d !== null && o(d);
            });
          }
        }, wt = { silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1 }, Ut = { isBrowser: !0, classes: { URLSearchParams: typeof URLSearchParams < "u" ? URLSearchParams : ce, FormData: typeof FormData < "u" ? FormData : null, Blob: typeof Blob < "u" ? Blob : null }, protocols: ["http", "https", "file", "blob", "url", "data"] };
        const lt = typeof window < "u" && typeof document < "u", J = typeof navigator == "object" && navigator || void 0, E = lt && (!J || ["ReactNative", "NativeScript", "NS"].indexOf(J.product) < 0), ne = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function", ie = lt && window.location.href || "http://localhost";
        var se = { ...Object.freeze({ __proto__: null, hasBrowserEnv: lt, hasStandardBrowserWebWorkerEnv: ne, hasStandardBrowserEnv: E, navigator: J, origin: ie }), ...Ut };
        function he(o) {
          function d(y, v, M, $) {
            let q = y[$++];
            if (q === "__proto__") return !0;
            const ee = Number.isFinite(+q), fe = $ >= y.length;
            return q = !q && n.isArray(M) ? M.length : q, fe ? (n.hasOwnProp(M, q) ? M[q] = [M[q], v] : M[q] = v, !ee) : (M[q] && n.isObject(M[q]) || (M[q] = []), d(y, v, M[q], $) && n.isArray(M[q]) && (M[q] = (function(ge) {
              const ye = {}, _e = Object.keys(ge);
              let Re;
              const qe = _e.length;
              let We;
              for (Re = 0; Re < qe; Re++) We = _e[Re], ye[We] = ge[We];
              return ye;
            })(M[q])), !ee);
          }
          if (n.isFormData(o) && n.isFunction(o.entries)) {
            const y = {};
            return n.forEachEntry(o, (v, M) => {
              d((function($) {
                return n.matchAll(/\w+|\[(\w*)]/g, $).map((q) => q[0] === "[]" ? "" : q[1] || q[0]);
              })(v), M, y, 0);
            }), y;
          }
          return null;
        }
        const Ie = { transitional: wt, adapter: ["xhr", "http", "fetch"], transformRequest: [function(o, d) {
          const y = d.getContentType() || "", v = y.indexOf("application/json") > -1, M = n.isObject(o);
          if (M && n.isHTMLForm(o) && (o = new FormData(o)), n.isFormData(o)) return v ? JSON.stringify(he(o)) : o;
          if (n.isArrayBuffer(o) || n.isBuffer(o) || n.isStream(o) || n.isFile(o) || n.isBlob(o) || n.isReadableStream(o)) return o;
          if (n.isArrayBufferView(o)) return o.buffer;
          if (n.isURLSearchParams(o)) return d.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), o.toString();
          let $;
          if (M) {
            if (y.indexOf("application/x-www-form-urlencoded") > -1) return (function(q, ee) {
              return X(q, new se.classes.URLSearchParams(), { visitor: function(fe, ge, ye, _e) {
                return se.isNode && n.isBuffer(fe) ? (this.append(ge, fe.toString("base64")), !1) : _e.defaultVisitor.apply(this, arguments);
              }, ...ee });
            })(o, this.formSerializer).toString();
            if (($ = n.isFileList(o)) || y.indexOf("multipart/form-data") > -1) {
              const q = this.env && this.env.FormData;
              return X($ ? { "files[]": o } : o, q && new q(), this.formSerializer);
            }
          }
          return M || v ? (d.setContentType("application/json", !1), (function(q) {
            if (n.isString(q)) try {
              return (0, JSON.parse)(q), n.trim(q);
            } catch (ee) {
              if (ee.name !== "SyntaxError") throw ee;
            }
            return (0, JSON.stringify)(q);
          })(o)) : o;
        }], transformResponse: [function(o) {
          const d = this.transitional || Ie.transitional, y = d && d.forcedJSONParsing, v = this.responseType === "json";
          if (n.isResponse(o) || n.isReadableStream(o)) return o;
          if (o && n.isString(o) && (y && !this.responseType || v)) {
            const M = !(d && d.silentJSONParsing) && v;
            try {
              return JSON.parse(o, this.parseReviver);
            } catch ($) {
              if (M)
                throw $.name === "SyntaxError" ? h.from($, h.ERR_BAD_RESPONSE, this, null, this.response) : $;
            }
          }
          return o;
        }], timeout: 0, xsrfCookieName: "XSRF-TOKEN", xsrfHeaderName: "X-XSRF-TOKEN", maxContentLength: -1, maxBodyLength: -1, env: { FormData: se.classes.FormData, Blob: se.classes.Blob }, validateStatus: function(o) {
          return o >= 200 && o < 300;
        }, headers: { common: { Accept: "application/json, text/plain, */*", "Content-Type": void 0 } } };
        n.forEach(["delete", "get", "head", "post", "put", "patch"], (o) => {
          Ie.headers[o] = {};
        });
        var T = Ie;
        const R = n.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]), x = Symbol("internals");
        function F(o) {
          return o && String(o).trim().toLowerCase();
        }
        function H(o) {
          return o === !1 || o == null ? o : n.isArray(o) ? o.map(H) : String(o);
        }
        function re(o, d, y, v, M) {
          return n.isFunction(v) ? v.call(this, d, y) : (M && (d = y), n.isString(d) ? n.isString(v) ? d.indexOf(v) !== -1 : n.isRegExp(v) ? v.test(d) : void 0 : void 0);
        }
        class Ne {
          constructor(d) {
            d && this.set(d);
          }
          set(d, y, v) {
            const M = this;
            function $(ee, fe, ge) {
              const ye = F(fe);
              if (!ye) throw new Error("header name must be a non-empty string");
              const _e = n.findKey(M, ye);
              (!_e || M[_e] === void 0 || ge === !0 || ge === void 0 && M[_e] !== !1) && (M[_e || fe] = H(ee));
            }
            const q = (ee, fe) => n.forEach(ee, (ge, ye) => $(ge, ye, fe));
            if (n.isPlainObject(d) || d instanceof this.constructor) q(d, y);
            else if (n.isString(d) && (d = d.trim()) && !/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(d.trim())) q(((ee) => {
              const fe = {};
              let ge, ye, _e;
              return ee && ee.split(`
`).forEach(function(Re) {
                _e = Re.indexOf(":"), ge = Re.substring(0, _e).trim().toLowerCase(), ye = Re.substring(_e + 1).trim(), !ge || fe[ge] && R[ge] || (ge === "set-cookie" ? fe[ge] ? fe[ge].push(ye) : fe[ge] = [ye] : fe[ge] = fe[ge] ? fe[ge] + ", " + ye : ye);
              }), fe;
            })(d), y);
            else if (n.isObject(d) && n.isIterable(d)) {
              let ee, fe, ge = {};
              for (const ye of d) {
                if (!n.isArray(ye)) throw TypeError("Object iterator must return a key-value pair");
                ge[fe = ye[0]] = (ee = ge[fe]) ? n.isArray(ee) ? [...ee, ye[1]] : [ee, ye[1]] : ye[1];
              }
              q(ge, y);
            } else d != null && $(y, d, v);
            return this;
          }
          get(d, y) {
            if (d = F(d)) {
              const v = n.findKey(this, d);
              if (v) {
                const M = this[v];
                if (!y) return M;
                if (y === !0) return (function($) {
                  const q = /* @__PURE__ */ Object.create(null), ee = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                  let fe;
                  for (; fe = ee.exec($); ) q[fe[1]] = fe[2];
                  return q;
                })(M);
                if (n.isFunction(y)) return y.call(this, M, v);
                if (n.isRegExp(y)) return y.exec(M);
                throw new TypeError("parser must be boolean|regexp|function");
              }
            }
          }
          has(d, y) {
            if (d = F(d)) {
              const v = n.findKey(this, d);
              return !(!v || this[v] === void 0 || y && !re(0, this[v], v, y));
            }
            return !1;
          }
          delete(d, y) {
            const v = this;
            let M = !1;
            function $(q) {
              if (q = F(q)) {
                const ee = n.findKey(v, q);
                !ee || y && !re(0, v[ee], ee, y) || (delete v[ee], M = !0);
              }
            }
            return n.isArray(d) ? d.forEach($) : $(d), M;
          }
          clear(d) {
            const y = Object.keys(this);
            let v = y.length, M = !1;
            for (; v--; ) {
              const $ = y[v];
              d && !re(0, this[$], $, d, !0) || (delete this[$], M = !0);
            }
            return M;
          }
          normalize(d) {
            const y = this, v = {};
            return n.forEach(this, (M, $) => {
              const q = n.findKey(v, $);
              if (q) return y[q] = H(M), void delete y[$];
              const ee = d ? (function(fe) {
                return fe.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (ge, ye, _e) => ye.toUpperCase() + _e);
              })($) : String($).trim();
              ee !== $ && delete y[$], y[ee] = H(M), v[ee] = !0;
            }), this;
          }
          concat(...d) {
            return this.constructor.concat(this, ...d);
          }
          toJSON(d) {
            const y = /* @__PURE__ */ Object.create(null);
            return n.forEach(this, (v, M) => {
              v != null && v !== !1 && (y[M] = d && n.isArray(v) ? v.join(", ") : v);
            }), y;
          }
          [Symbol.iterator]() {
            return Object.entries(this.toJSON())[Symbol.iterator]();
          }
          toString() {
            return Object.entries(this.toJSON()).map(([d, y]) => d + ": " + y).join(`
`);
          }
          getSetCookie() {
            return this.get("set-cookie") || [];
          }
          get [Symbol.toStringTag]() {
            return "AxiosHeaders";
          }
          static from(d) {
            return d instanceof this ? d : new this(d);
          }
          static concat(d, ...y) {
            const v = new this(d);
            return y.forEach((M) => v.set(M)), v;
          }
          static accessor(d) {
            const y = (this[x] = this[x] = { accessors: {} }).accessors, v = this.prototype;
            function M($) {
              const q = F($);
              y[q] || ((function(ee, fe) {
                const ge = n.toCamelCase(" " + fe);
                ["get", "set", "has"].forEach((ye) => {
                  Object.defineProperty(ee, ye + ge, { value: function(_e, Re, qe) {
                    return this[ye].call(this, fe, _e, Re, qe);
                  }, configurable: !0 });
                });
              })(v, $), y[q] = !0);
            }
            return n.isArray(d) ? d.forEach(M) : M(d), this;
          }
        }
        Ne.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]), n.reduceDescriptors(Ne.prototype, ({ value: o }, d) => {
          let y = d[0].toUpperCase() + d.slice(1);
          return { get: () => o, set(v) {
            this[y] = v;
          } };
        }), n.freezeMethods(Ne);
        var Fe = Ne;
        function pt(o, d) {
          const y = this || T, v = d || y, M = Fe.from(v.headers);
          let $ = v.data;
          return n.forEach(o, function(q) {
            $ = q.call(y, $, M.normalize(), d ? d.status : void 0);
          }), M.normalize(), $;
        }
        function dt(o) {
          return !(!o || !o.__CANCEL__);
        }
        var ct = class extends h {
          constructor(o, d, y) {
            super(o ?? "canceled", h.ERR_CANCELED, d, y), this.name = "CanceledError", this.__CANCEL__ = !0;
          }
        };
        function Ht(o, d, y) {
          const v = y.config.validateStatus;
          y.status && v && !v(y.status) ? d(new h("Request failed with status code " + y.status, [h.ERR_BAD_REQUEST, h.ERR_BAD_RESPONSE][Math.floor(y.status / 100) - 4], y.config, y.request, y)) : o(y);
        }
        const Ze = (o, d, y = 3) => {
          let v = 0;
          const M = (function($, q) {
            $ = $ || 10;
            const ee = new Array($), fe = new Array($);
            let ge, ye = 0, _e = 0;
            return q = q !== void 0 ? q : 1e3, function(Re) {
              const qe = Date.now(), We = fe[_e];
              ge || (ge = qe), ee[ye] = Re, fe[ye] = qe;
              let Ue = _e, at = 0;
              for (; Ue !== ye; ) at += ee[Ue++], Ue %= $;
              if (ye = (ye + 1) % $, ye === _e && (_e = (_e + 1) % $), qe - ge < q) return;
              const Pt = We && qe - We;
              return Pt ? Math.round(1e3 * at / Pt) : void 0;
            };
          })(50, 250);
          return (function($, q) {
            let ee, fe, ge = 0, ye = 1e3 / q;
            const _e = (Re, qe = Date.now()) => {
              ge = qe, ee = null, fe && (clearTimeout(fe), fe = null), ((We) => {
                const Ue = We.loaded, at = We.lengthComputable ? We.total : void 0, Pt = Ue - v, gt = M(Pt);
                v = Ue, o({ loaded: Ue, total: at, progress: at ? Ue / at : void 0, bytes: Pt, rate: gt || void 0, estimated: gt && at && Ue <= at ? (at - Ue) / gt : void 0, event: We, lengthComputable: at != null, [d ? "download" : "upload"]: !0 });
              })(...Re);
            };
            return [(...Re) => {
              const qe = Date.now(), We = qe - ge;
              We >= ye ? _e(Re, qe) : (ee = Re, fe || (fe = setTimeout(() => {
                fe = null, _e(ee);
              }, ye - We)));
            }, () => ee && _e(ee)];
          })(0, y);
        }, xt = (o, d) => {
          const y = o != null;
          return [(v) => d[0]({ lengthComputable: y, total: o, loaded: v }), d[1]];
        }, tn = (o) => (...d) => n.asap(() => o(...d));
        var bn = se.hasStandardBrowserEnv ? /* @__PURE__ */ ((o, d) => (y) => (y = new URL(y, se.origin), o.protocol === y.protocol && o.host === y.host && (d || o.port === y.port)))(new URL(se.origin), se.navigator && /(msie|trident)/i.test(se.navigator.userAgent)) : () => !0, fn = se.hasStandardBrowserEnv ? { write(o, d, y, v, M, $, q) {
          if (typeof document > "u") return;
          const ee = [`${o}=${encodeURIComponent(d)}`];
          n.isNumber(y) && ee.push(`expires=${new Date(y).toUTCString()}`), n.isString(v) && ee.push(`path=${v}`), n.isString(M) && ee.push(`domain=${M}`), $ === !0 && ee.push("secure"), n.isString(q) && ee.push(`SameSite=${q}`), document.cookie = ee.join("; ");
        }, read(o) {
          if (typeof document > "u") return null;
          const d = document.cookie.match(new RegExp("(?:^|; )" + o + "=([^;]*)"));
          return d ? decodeURIComponent(d[1]) : null;
        }, remove(o) {
          this.write(o, "", Date.now() - 864e5, "/");
        } } : { write() {
        }, read: () => null, remove() {
        } };
        function gn(o, d, y) {
          let v = !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(d);
          return o && (v || y == 0) ? (function(M, $) {
            return $ ? M.replace(/\/?\/$/, "") + "/" + $.replace(/^\/+/, "") : M;
          })(o, d) : d;
        }
        const ln = (o) => o instanceof Fe ? { ...o } : o;
        function Wt(o, d) {
          d = d || {};
          const y = {};
          function v(ge, ye, _e, Re) {
            return n.isPlainObject(ge) && n.isPlainObject(ye) ? n.merge.call({ caseless: Re }, ge, ye) : n.isPlainObject(ye) ? n.merge({}, ye) : n.isArray(ye) ? ye.slice() : ye;
          }
          function M(ge, ye, _e, Re) {
            return n.isUndefined(ye) ? n.isUndefined(ge) ? void 0 : v(void 0, ge, 0, Re) : v(ge, ye, 0, Re);
          }
          function $(ge, ye) {
            if (!n.isUndefined(ye)) return v(void 0, ye);
          }
          function q(ge, ye) {
            return n.isUndefined(ye) ? n.isUndefined(ge) ? void 0 : v(void 0, ge) : v(void 0, ye);
          }
          function ee(ge, ye, _e) {
            return _e in d ? v(ge, ye) : _e in o ? v(void 0, ge) : void 0;
          }
          const fe = { url: $, method: $, data: $, baseURL: q, transformRequest: q, transformResponse: q, paramsSerializer: q, timeout: q, timeoutMessage: q, withCredentials: q, withXSRFToken: q, adapter: q, responseType: q, xsrfCookieName: q, xsrfHeaderName: q, onUploadProgress: q, onDownloadProgress: q, decompress: q, maxContentLength: q, maxBodyLength: q, beforeRedirect: q, transport: q, httpAgent: q, httpsAgent: q, cancelToken: q, socketPath: q, responseEncoding: q, validateStatus: ee, headers: (ge, ye, _e) => M(ln(ge), ln(ye), 0, !0) };
          return n.forEach(Object.keys({ ...o, ...d }), function(ge) {
            const ye = fe[ge] || M, _e = ye(o[ge], d[ge], ge);
            n.isUndefined(_e) && ye !== ee || (y[ge] = _e);
          }), y;
        }
        var zt = (o) => {
          const d = Wt({}, o);
          let { data: y, withXSRFToken: v, xsrfHeaderName: M, xsrfCookieName: $, headers: q, auth: ee } = d;
          if (d.headers = q = Fe.from(q), d.url = Ye(gn(d.baseURL, d.url, d.allowAbsoluteUrls), o.params, o.paramsSerializer), ee && q.set("Authorization", "Basic " + btoa((ee.username || "") + ":" + (ee.password ? unescape(encodeURIComponent(ee.password)) : ""))), n.isFormData(y)) {
            if (se.hasStandardBrowserEnv || se.hasStandardBrowserWebWorkerEnv) q.setContentType(void 0);
            else if (n.isFunction(y.getHeaders)) {
              const fe = y.getHeaders(), ge = ["content-type", "content-length"];
              Object.entries(fe).forEach(([ye, _e]) => {
                ge.includes(ye.toLowerCase()) && q.set(ye, _e);
              });
            }
          }
          if (se.hasStandardBrowserEnv && (v && n.isFunction(v) && (v = v(d)), v || v !== !1 && bn(d.url))) {
            const fe = M && $ && fn.read($);
            fe && q.set(M, fe);
          }
          return d;
        }, It = typeof XMLHttpRequest < "u" && function(o) {
          return new Promise(function(d, y) {
            const v = zt(o);
            let M = v.data;
            const $ = Fe.from(v.headers).normalize();
            let q, ee, fe, ge, ye, { responseType: _e, onUploadProgress: Re, onDownloadProgress: qe } = v;
            function We() {
              ge && ge(), ye && ye(), v.cancelToken && v.cancelToken.unsubscribe(q), v.signal && v.signal.removeEventListener("abort", q);
            }
            let Ue = new XMLHttpRequest();
            function at() {
              if (!Ue) return;
              const gt = Fe.from("getAllResponseHeaders" in Ue && Ue.getAllResponseHeaders());
              Ht(function(Vt) {
                d(Vt), We();
              }, function(Vt) {
                y(Vt), We();
              }, { data: _e && _e !== "text" && _e !== "json" ? Ue.response : Ue.responseText, status: Ue.status, statusText: Ue.statusText, headers: gt, config: o, request: Ue }), Ue = null;
            }
            Ue.open(v.method.toUpperCase(), v.url, !0), Ue.timeout = v.timeout, "onloadend" in Ue ? Ue.onloadend = at : Ue.onreadystatechange = function() {
              Ue && Ue.readyState === 4 && (Ue.status !== 0 || Ue.responseURL && Ue.responseURL.indexOf("file:") === 0) && setTimeout(at);
            }, Ue.onabort = function() {
              Ue && (y(new h("Request aborted", h.ECONNABORTED, o, Ue)), Ue = null);
            }, Ue.onerror = function(gt) {
              const Vt = gt && gt.message ? gt.message : "Network Error", on = new h(Vt, h.ERR_NETWORK, o, Ue);
              on.event = gt || null, y(on), Ue = null;
            }, Ue.ontimeout = function() {
              let gt = v.timeout ? "timeout of " + v.timeout + "ms exceeded" : "timeout exceeded";
              const Vt = v.transitional || wt;
              v.timeoutErrorMessage && (gt = v.timeoutErrorMessage), y(new h(gt, Vt.clarifyTimeoutError ? h.ETIMEDOUT : h.ECONNABORTED, o, Ue)), Ue = null;
            }, M === void 0 && $.setContentType(null), "setRequestHeader" in Ue && n.forEach($.toJSON(), function(gt, Vt) {
              Ue.setRequestHeader(Vt, gt);
            }), n.isUndefined(v.withCredentials) || (Ue.withCredentials = !!v.withCredentials), _e && _e !== "json" && (Ue.responseType = v.responseType), qe && ([fe, ye] = Ze(qe, !0), Ue.addEventListener("progress", fe)), Re && Ue.upload && ([ee, ge] = Ze(Re), Ue.upload.addEventListener("progress", ee), Ue.upload.addEventListener("loadend", ge)), (v.cancelToken || v.signal) && (q = (gt) => {
              Ue && (y(!gt || gt.type ? new ct(null, o, Ue) : gt), Ue.abort(), Ue = null);
            }, v.cancelToken && v.cancelToken.subscribe(q), v.signal && (v.signal.aborted ? q() : v.signal.addEventListener("abort", q)));
            const Pt = (function(gt) {
              const Vt = /^([-+\w]{1,25})(:?\/\/|:)/.exec(gt);
              return Vt && Vt[1] || "";
            })(v.url);
            Pt && se.protocols.indexOf(Pt) === -1 ? y(new h("Unsupported protocol " + Pt + ":", h.ERR_BAD_REQUEST, o)) : Ue.send(M || null);
          });
        }, nn = (o, d) => {
          const { length: y } = o = o ? o.filter(Boolean) : [];
          if (d || y) {
            let v, M = new AbortController();
            const $ = function(ge) {
              if (!v) {
                v = !0, ee();
                const ye = ge instanceof Error ? ge : this.reason;
                M.abort(ye instanceof h ? ye : new ct(ye instanceof Error ? ye.message : ye));
              }
            };
            let q = d && setTimeout(() => {
              q = null, $(new h(`timeout of ${d}ms exceeded`, h.ETIMEDOUT));
            }, d);
            const ee = () => {
              o && (q && clearTimeout(q), q = null, o.forEach((ge) => {
                ge.unsubscribe ? ge.unsubscribe($) : ge.removeEventListener("abort", $);
              }), o = null);
            };
            o.forEach((ge) => ge.addEventListener("abort", $));
            const { signal: fe } = M;
            return fe.unsubscribe = () => n.asap(ee), fe;
          }
        };
        const sn = function* (o, d) {
          let y = o.byteLength;
          if (y < d) return void (yield o);
          let v, M = 0;
          for (; M < y; ) v = M + d, yield o.slice(M, v), M = v;
        }, wn = (o, d, y, v) => {
          const M = (async function* (fe, ge) {
            for await (const ye of (async function* (_e) {
              if (_e[Symbol.asyncIterator]) return void (yield* _e);
              const Re = _e.getReader();
              try {
                for (; ; ) {
                  const { done: qe, value: We } = await Re.read();
                  if (qe) break;
                  yield We;
                }
              } finally {
                await Re.cancel();
              }
            })(fe)) yield* sn(ye, ge);
          })(o, d);
          let $, q = 0, ee = (fe) => {
            $ || ($ = !0, v && v(fe));
          };
          return new ReadableStream({ async pull(fe) {
            try {
              const { done: ge, value: ye } = await M.next();
              if (ge) return ee(), void fe.close();
              let _e = ye.byteLength;
              if (y) {
                let Re = q += _e;
                y(Re);
              }
              fe.enqueue(new Uint8Array(ye));
            } catch (ge) {
              throw ee(ge), ge;
            }
          }, cancel: (fe) => (ee(fe), M.return()) }, { highWaterMark: 2 });
        }, { isFunction: cn } = n, mn = (({ Request: o, Response: d }) => ({ Request: o, Response: d }))(n.global), { ReadableStream: p, TextEncoder: t } = n.global, s = (o, ...d) => {
          try {
            return !!o(...d);
          } catch {
            return !1;
          }
        }, b = (o) => {
          o = n.merge.call({ skipUndefined: !0 }, mn, o);
          const { fetch: d, Request: y, Response: v } = o, M = d ? cn(d) : typeof fetch == "function", $ = cn(y), q = cn(v);
          if (!M) return !1;
          const ee = M && cn(p), fe = M && (typeof t == "function" ? (ge = new t(), (qe) => ge.encode(qe)) : async (qe) => new Uint8Array(await new y(qe).arrayBuffer()));
          var ge;
          const ye = $ && ee && s(() => {
            let qe = !1;
            const We = new y(se.origin, { body: new p(), method: "POST", get duplex() {
              return qe = !0, "half";
            } }).headers.has("Content-Type");
            return qe && !We;
          }), _e = q && ee && s(() => n.isReadableStream(new v("").body)), Re = { stream: _e && ((qe) => qe.body) };
          return M && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((qe) => {
            !Re[qe] && (Re[qe] = (We, Ue) => {
              let at = We && We[qe];
              if (at) return at.call(We);
              throw new h(`Response type '${qe}' is not supported`, h.ERR_NOT_SUPPORT, Ue);
            });
          }), async (qe) => {
            let { url: We, method: Ue, data: at, signal: Pt, cancelToken: gt, timeout: Vt, onDownloadProgress: on, onUploadProgress: Bn, responseType: pn, headers: jn, withCredentials: xn = "same-origin", fetchOptions: Pn } = zt(qe), Hn = d || fetch;
            pn = pn ? (pn + "").toLowerCase() : "text";
            let Vn = nn([Pt, gt && gt.toAbortSignal()], Vt), Rn = null;
            const En = Vn && Vn.unsubscribe && (() => {
              Vn.unsubscribe();
            });
            let Wn;
            try {
              if (Bn && ye && Ue !== "get" && Ue !== "head" && (Wn = await (async (un, an) => {
                const In = n.toFiniteNumber(un.getContentLength());
                return In ?? (async (qt) => qt == null ? 0 : n.isBlob(qt) ? qt.size : n.isSpecCompliantForm(qt) ? (await new y(se.origin, { method: "POST", body: qt }).arrayBuffer()).byteLength : n.isArrayBufferView(qt) || n.isArrayBuffer(qt) ? qt.byteLength : (n.isURLSearchParams(qt) && (qt += ""), n.isString(qt) ? (await fe(qt)).byteLength : void 0))(an);
              })(jn, at)) !== 0) {
                let un, an = new y(We, { method: "POST", body: at, duplex: "half" });
                if (n.isFormData(at) && (un = an.headers.get("content-type")) && jn.setContentType(un), an.body) {
                  const [In, qt] = xt(Wn, Ze(tn(Bn)));
                  at = wn(an.body, 65536, In, qt);
                }
              }
              n.isString(xn) || (xn = xn ? "include" : "omit");
              const Kt = $ && "credentials" in y.prototype, Jn = { ...Pn, signal: Vn, method: Ue.toUpperCase(), headers: jn.normalize().toJSON(), body: at, duplex: "half", credentials: Kt ? xn : void 0 };
              Rn = $ && new y(We, Jn);
              let vn = await ($ ? Hn(Rn, Pn) : Hn(We, Jn));
              const Zn = _e && (pn === "stream" || pn === "response");
              if (_e && (on || Zn && En)) {
                const un = {};
                ["status", "statusText", "headers"].forEach((qn) => {
                  un[qn] = vn[qn];
                });
                const an = n.toFiniteNumber(vn.headers.get("content-length")), [In, qt] = on && xt(an, Ze(tn(on), !0)) || [];
                vn = new v(wn(vn.body, 65536, In, () => {
                  qt && qt(), En && En();
                }), un);
              }
              pn = pn || "text";
              let si = await Re[n.findKey(Re, pn) || "text"](vn, qe);
              return !Zn && En && En(), await new Promise((un, an) => {
                Ht(un, an, { data: si, headers: Fe.from(vn.headers), status: vn.status, statusText: vn.statusText, config: qe, request: Rn });
              });
            } catch (Kt) {
              throw En && En(), Kt && Kt.name === "TypeError" && /Load failed|fetch/i.test(Kt.message) ? Object.assign(new h("Network Error", h.ERR_NETWORK, qe, Rn), { cause: Kt.cause || Kt }) : h.from(Kt, Kt && Kt.code, qe, Rn);
            }
          };
        }, c = /* @__PURE__ */ new Map(), I = (o) => {
          let d = o && o.env || {};
          const { fetch: y, Request: v, Response: M } = d, $ = [v, M, y];
          let q, ee, fe = $.length, ge = c;
          for (; fe--; ) q = $[fe], ee = ge.get(q), ee === void 0 && ge.set(q, ee = fe ? /* @__PURE__ */ new Map() : b(d)), ge = ee;
          return ee;
        };
        I();
        const be = { http: null, xhr: It, fetch: { get: I } };
        n.forEach(be, (o, d) => {
          if (o) {
            try {
              Object.defineProperty(o, "name", { value: d });
            } catch {
            }
            Object.defineProperty(o, "adapterName", { value: d });
          }
        });
        const we = (o) => `- ${o}`, Le = (o) => n.isFunction(o) || o === null || o === !1;
        var ue = function(o, d) {
          o = n.isArray(o) ? o : [o];
          const { length: y } = o;
          let v, M;
          const $ = {};
          for (let q = 0; q < y; q++) {
            let ee;
            if (v = o[q], M = v, !Le(v) && (M = be[(ee = String(v)).toLowerCase()], M === void 0)) throw new h(`Unknown adapter '${ee}'`);
            if (M && (n.isFunction(M) || (M = M.get(d)))) break;
            $[ee || "#" + q] = M;
          }
          if (!M) {
            const q = Object.entries($).map(([fe, ge]) => `adapter ${fe} ` + (ge === !1 ? "is not supported by the environment" : "is not available in the build"));
            let ee = y ? q.length > 1 ? `since :
` + q.map(we).join(`
`) : " " + we(q[0]) : "as no adapter specified";
            throw new h("There is no suitable adapter to dispatch the request " + ee, "ERR_NOT_SUPPORT");
          }
          return M;
        };
        function oe(o) {
          if (o.cancelToken && o.cancelToken.throwIfRequested(), o.signal && o.signal.aborted) throw new ct(null, o);
        }
        function et(o) {
          return oe(o), o.headers = Fe.from(o.headers), o.data = pt.call(o, o.transformRequest), ["post", "put", "patch"].indexOf(o.method) !== -1 && o.headers.setContentType("application/x-www-form-urlencoded", !1), ue(o.adapter || T.adapter, o)(o).then(function(d) {
            return oe(o), d.data = pt.call(o, o.transformResponse, d), d.headers = Fe.from(d.headers), d;
          }, function(d) {
            return dt(d) || (oe(o), d && d.response && (d.response.data = pt.call(o, o.transformResponse, d.response), d.response.headers = Fe.from(d.response.headers))), Promise.reject(d);
          });
        }
        const ht = "1.13.4", ft = {};
        ["object", "boolean", "number", "function", "string", "symbol"].forEach((o, d) => {
          ft[o] = function(y) {
            return typeof y === o || "a" + (d < 1 ? "n " : " ") + o;
          };
        });
        const kt = {};
        ft.transitional = function(o, d, y) {
          function v(M, $) {
            return "[Axios v" + ht + "] Transitional option '" + M + "'" + $ + (y ? ". " + y : "");
          }
          return (M, $, q) => {
            if (o === !1) throw new h(v($, " has been removed" + (d ? " in " + d : "")), h.ERR_DEPRECATED);
            return d && !kt[$] && (kt[$] = !0, console.warn(v($, " has been deprecated since v" + d + " and will be removed in the near future"))), !o || o(M, $, q);
          };
        }, ft.spelling = function(o) {
          return (d, y) => (console.warn(`${y} is likely a misspelling of ${o}`), !0);
        };
        var Bt = { assertOptions: function(o, d, y) {
          if (typeof o != "object") throw new h("options must be an object", h.ERR_BAD_OPTION_VALUE);
          const v = Object.keys(o);
          let M = v.length;
          for (; M-- > 0; ) {
            const $ = v[M], q = d[$];
            if (q) {
              const ee = o[$], fe = ee === void 0 || q(ee, $, o);
              if (fe !== !0) throw new h("option " + $ + " must be " + fe, h.ERR_BAD_OPTION_VALUE);
              continue;
            }
            if (y !== !0) throw new h("Unknown option " + $, h.ERR_BAD_OPTION);
          }
        }, validators: ft };
        const jt = Bt.validators;
        class Gt {
          constructor(d) {
            this.defaults = d || {}, this.interceptors = { request: new vt(), response: new vt() };
          }
          async request(d, y) {
            try {
              return await this._request(d, y);
            } catch (v) {
              if (v instanceof Error) {
                let M = {};
                Error.captureStackTrace ? Error.captureStackTrace(M) : M = new Error();
                const $ = M.stack ? M.stack.replace(/^.+\n/, "") : "";
                try {
                  v.stack ? $ && !String(v.stack).endsWith($.replace(/^.+\n.+\n/, "")) && (v.stack += `
` + $) : v.stack = $;
                } catch {
                }
              }
              throw v;
            }
          }
          _request(d, y) {
            typeof d == "string" ? (y = y || {}).url = d : y = d || {}, y = Wt(this.defaults, y);
            const { transitional: v, paramsSerializer: M, headers: $ } = y;
            v !== void 0 && Bt.assertOptions(v, { silentJSONParsing: jt.transitional(jt.boolean), forcedJSONParsing: jt.transitional(jt.boolean), clarifyTimeoutError: jt.transitional(jt.boolean) }, !1), M != null && (n.isFunction(M) ? y.paramsSerializer = { serialize: M } : Bt.assertOptions(M, { encode: jt.function, serialize: jt.function }, !0)), y.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? y.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : y.allowAbsoluteUrls = !0), Bt.assertOptions(y, { baseUrl: jt.spelling("baseURL"), withXsrfToken: jt.spelling("withXSRFToken") }, !0), y.method = (y.method || this.defaults.method || "get").toLowerCase();
            let q = $ && n.merge($.common, $[y.method]);
            $ && n.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (We) => {
              delete $[We];
            }), y.headers = Fe.concat(q, $);
            const ee = [];
            let fe = !0;
            this.interceptors.request.forEach(function(We) {
              typeof We.runWhen == "function" && We.runWhen(y) === !1 || (fe = fe && We.synchronous, ee.unshift(We.fulfilled, We.rejected));
            });
            const ge = [];
            let ye;
            this.interceptors.response.forEach(function(We) {
              ge.push(We.fulfilled, We.rejected);
            });
            let _e, Re = 0;
            if (!fe) {
              const We = [et.bind(this), void 0];
              for (We.unshift(...ee), We.push(...ge), _e = We.length, ye = Promise.resolve(y); Re < _e; ) ye = ye.then(We[Re++], We[Re++]);
              return ye;
            }
            _e = ee.length;
            let qe = y;
            for (; Re < _e; ) {
              const We = ee[Re++], Ue = ee[Re++];
              try {
                qe = We(qe);
              } catch (at) {
                Ue.call(this, at);
                break;
              }
            }
            try {
              ye = et.call(this, qe);
            } catch (We) {
              return Promise.reject(We);
            }
            for (Re = 0, _e = ge.length; Re < _e; ) ye = ye.then(ge[Re++], ge[Re++]);
            return ye;
          }
          getUri(d) {
            return Ye(gn((d = Wt(this.defaults, d)).baseURL, d.url, d.allowAbsoluteUrls), d.params, d.paramsSerializer);
          }
        }
        n.forEach(["delete", "get", "head", "options"], function(o) {
          Gt.prototype[o] = function(d, y) {
            return this.request(Wt(y || {}, { method: o, url: d, data: (y || {}).data }));
          };
        }), n.forEach(["post", "put", "patch"], function(o) {
          function d(y) {
            return function(v, M, $) {
              return this.request(Wt($ || {}, { method: o, headers: y ? { "Content-Type": "multipart/form-data" } : {}, url: v, data: M }));
            };
          }
          Gt.prototype[o] = d(), Gt.prototype[o + "Form"] = d(!0);
        });
        var rn = Gt;
        class kn {
          constructor(d) {
            if (typeof d != "function") throw new TypeError("executor must be a function.");
            let y;
            this.promise = new Promise(function(M) {
              y = M;
            });
            const v = this;
            this.promise.then((M) => {
              if (!v._listeners) return;
              let $ = v._listeners.length;
              for (; $-- > 0; ) v._listeners[$](M);
              v._listeners = null;
            }), this.promise.then = (M) => {
              let $;
              const q = new Promise((ee) => {
                v.subscribe(ee), $ = ee;
              }).then(M);
              return q.cancel = function() {
                v.unsubscribe($);
              }, q;
            }, d(function(M, $, q) {
              v.reason || (v.reason = new ct(M, $, q), y(v.reason));
            });
          }
          throwIfRequested() {
            if (this.reason) throw this.reason;
          }
          subscribe(d) {
            this.reason ? d(this.reason) : this._listeners ? this._listeners.push(d) : this._listeners = [d];
          }
          unsubscribe(d) {
            if (!this._listeners) return;
            const y = this._listeners.indexOf(d);
            y !== -1 && this._listeners.splice(y, 1);
          }
          toAbortSignal() {
            const d = new AbortController(), y = (v) => {
              d.abort(v);
            };
            return this.subscribe(y), d.signal.unsubscribe = () => this.unsubscribe(y), d.signal;
          }
          static source() {
            let d;
            return { token: new kn(function(y) {
              d = y;
            }), cancel: d };
          }
        }
        var Un = kn;
        const Tn = { Continue: 100, SwitchingProtocols: 101, Processing: 102, EarlyHints: 103, Ok: 200, Created: 201, Accepted: 202, NonAuthoritativeInformation: 203, NoContent: 204, ResetContent: 205, PartialContent: 206, MultiStatus: 207, AlreadyReported: 208, ImUsed: 226, MultipleChoices: 300, MovedPermanently: 301, Found: 302, SeeOther: 303, NotModified: 304, UseProxy: 305, Unused: 306, TemporaryRedirect: 307, PermanentRedirect: 308, BadRequest: 400, Unauthorized: 401, PaymentRequired: 402, Forbidden: 403, NotFound: 404, MethodNotAllowed: 405, NotAcceptable: 406, ProxyAuthenticationRequired: 407, RequestTimeout: 408, Conflict: 409, Gone: 410, LengthRequired: 411, PreconditionFailed: 412, PayloadTooLarge: 413, UriTooLong: 414, UnsupportedMediaType: 415, RangeNotSatisfiable: 416, ExpectationFailed: 417, ImATeapot: 418, MisdirectedRequest: 421, UnprocessableEntity: 422, Locked: 423, FailedDependency: 424, TooEarly: 425, UpgradeRequired: 426, PreconditionRequired: 428, TooManyRequests: 429, RequestHeaderFieldsTooLarge: 431, UnavailableForLegalReasons: 451, InternalServerError: 500, NotImplemented: 501, BadGateway: 502, ServiceUnavailable: 503, GatewayTimeout: 504, HttpVersionNotSupported: 505, VariantAlsoNegotiates: 506, InsufficientStorage: 507, LoopDetected: 508, NotExtended: 510, NetworkAuthenticationRequired: 511, WebServerIsDown: 521, ConnectionTimedOut: 522, OriginIsUnreachable: 523, TimeoutOccurred: 524, SslHandshakeFailed: 525, InvalidSslCertificate: 526 };
        Object.entries(Tn).forEach(([o, d]) => {
          Tn[d] = o;
        });
        var _n = Tn;
        const Ct = (function o(d) {
          const y = new rn(d), v = je(rn.prototype.request, y);
          return n.extend(v, rn.prototype, y, { allOwnKeys: !0 }), n.extend(v, y, null, { allOwnKeys: !0 }), v.create = function(M) {
            return o(Wt(d, M));
          }, v;
        })(T);
        Ct.Axios = rn, Ct.CanceledError = ct, Ct.CancelToken = Un, Ct.isCancel = dt, Ct.VERSION = ht, Ct.toFormData = X, Ct.AxiosError = h, Ct.Cancel = Ct.CanceledError, Ct.all = function(o) {
          return Promise.all(o);
        }, Ct.spread = function(o) {
          return function(d) {
            return o.apply(null, d);
          };
        }, Ct.isAxiosError = function(o) {
          return n.isObject(o) && o.isAxiosError === !0;
        }, Ct.mergeConfig = Wt, Ct.AxiosHeaders = Fe, Ct.formToJSON = (o) => he(n.isHTMLForm(o) ? new FormData(o) : o), Ct.getAdapter = ue, Ct.HttpStatusCode = _n, Ct.default = Ct, g.exports = Ct;
      }, 855(g, z, K) {
        function je(C) {
          return je = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(N) {
            return typeof N;
          } : function(N) {
            return N && typeof Symbol == "function" && N.constructor === Symbol && N !== Symbol.prototype ? "symbol" : typeof N;
          }, je(C);
        }
        function Ee() {
          return typeof XMLHttpRequest == "function" || (typeof XMLHttpRequest > "u" ? "undefined" : je(XMLHttpRequest)) === "object";
        }
        function Ve(C, N) {
          var L = Object.keys(C);
          if (Object.getOwnPropertySymbols) {
            var A = Object.getOwnPropertySymbols(C);
            N && (A = A.filter(function(V) {
              return Object.getOwnPropertyDescriptor(C, V).enumerable;
            })), L.push.apply(L, A);
          }
          return L;
        }
        function Ge(C) {
          for (var N = 1; N < arguments.length; N++) {
            var L = arguments[N] != null ? arguments[N] : {};
            N % 2 ? Ve(Object(L), !0).forEach(function(A) {
              ze(C, A, L[A]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(C, Object.getOwnPropertyDescriptors(L)) : Ve(Object(L)).forEach(function(A) {
              Object.defineProperty(C, A, Object.getOwnPropertyDescriptor(L, A));
            });
          }
          return C;
        }
        function ze(C, N, L) {
          return (N = (function(A) {
            var V = (function(m) {
              if (Oe(m) != "object" || !m) return m;
              var U = m[Symbol.toPrimitive];
              if (U !== void 0) {
                var de = U.call(m, "string");
                if (Oe(de) != "object") return de;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(m);
            })(A);
            return Oe(V) == "symbol" ? V : V + "";
          })(N)) in C ? Object.defineProperty(C, N, { value: L, enumerable: !0, configurable: !0, writable: !0 }) : C[N] = L, C;
        }
        function Oe(C) {
          return Oe = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(N) {
            return typeof N;
          } : function(N) {
            return N && typeof Symbol == "function" && N.constructor === Symbol && N !== Symbol.prototype ? "symbol" : typeof N;
          }, Oe(C);
        }
        K.r(z), K.d(z, { default: () => Pe });
        var Se, Z, ke = typeof fetch == "function" ? fetch : void 0;
        if (K.g !== void 0 && K.g.fetch ? ke = K.g.fetch : typeof window < "u" && window.fetch && (ke = window.fetch), Ee() && (K.g !== void 0 && K.g.XMLHttpRequest ? Se = K.g.XMLHttpRequest : typeof window < "u" && window.XMLHttpRequest && (Se = window.XMLHttpRequest)), typeof ActiveXObject == "function" && (K.g !== void 0 && K.g.ActiveXObject ? Z = K.g.ActiveXObject : typeof window < "u" && window.ActiveXObject && (Z = window.ActiveXObject)), typeof ke != "function" && (ke = void 0), !ke && !Se && !Z) try {
          Promise.resolve().then(K.t.bind(K, 911, 19)).then(function(C) {
            ke = C.default;
          }).catch(function() {
          });
        } catch {
        }
        var De = function(C, N) {
          if (N && Oe(N) === "object") {
            var L = "";
            for (var A in N) L += "&" + encodeURIComponent(A) + "=" + encodeURIComponent(N[A]);
            if (!L) return C;
            C = C + (C.indexOf("?") !== -1 ? "&" : "?") + L.slice(1);
          }
          return C;
        }, Be = function(C, N, L, A) {
          var V = function(U) {
            if (!U.ok) return L(U.statusText || "Error", { status: U.status });
            U.text().then(function(de) {
              L(null, { status: U.status, data: de });
            }).catch(L);
          };
          if (A) {
            var m = A(C, N);
            if (m instanceof Promise) return void m.then(V).catch(L);
          }
          typeof fetch == "function" ? fetch(C, N).then(V).catch(L) : ke(C, N).then(V).catch(L);
        }, Ke = !1;
        const nt = function(C, N, L, A) {
          return typeof L == "function" && (A = L, L = void 0), A = A || function() {
          }, ke && N.indexOf("file:") !== 0 ? (function(V, m, U, de) {
            V.queryStringParams && (m = De(m, V.queryStringParams));
            var ve = Ge({}, typeof V.customHeaders == "function" ? V.customHeaders() : V.customHeaders);
            typeof window > "u" && K.g !== void 0 && K.g.process !== void 0 && K.g.process.versions && K.g.process.versions.node && (ve["User-Agent"] = "i18next-http-backend (node/".concat(K.g.process.version, "; ").concat(K.g.process.platform, " ").concat(K.g.process.arch, ")")), U && (ve["Content-Type"] = "application/json");
            var ae = typeof V.requestOptions == "function" ? V.requestOptions(U) : V.requestOptions, _ = Ge({ method: U ? "POST" : "GET", body: U ? V.stringify(U) : void 0, headers: ve }, Ke ? {} : ae), S = typeof V.alternateFetch == "function" && V.alternateFetch.length >= 1 ? V.alternateFetch : void 0;
            try {
              Be(m, _, de, S);
            } catch (j) {
              if (!ae || Object.keys(ae).length === 0 || !j.message || j.message.indexOf("not implemented") < 0) return de(j);
              try {
                Object.keys(ae).forEach(function(Y) {
                  delete _[Y];
                }), Be(m, _, de, S), Ke = !0;
              } catch (Y) {
                de(Y);
              }
            }
          })(C, N, L, A) : Ee() || typeof ActiveXObject == "function" ? (function(V, m, U, de) {
            U && Oe(U) === "object" && (U = De("", U).slice(1)), V.queryStringParams && (m = De(m, V.queryStringParams));
            try {
              var ve = Se ? new Se() : new Z("MSXML2.XMLHTTP.3.0");
              ve.open(U ? "POST" : "GET", m, 1), V.crossDomain || ve.setRequestHeader("X-Requested-With", "XMLHttpRequest"), ve.withCredentials = !!V.withCredentials, U && ve.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), ve.overrideMimeType && ve.overrideMimeType("application/json");
              var ae = V.customHeaders;
              if (ae = typeof ae == "function" ? ae() : ae) for (var _ in ae) ve.setRequestHeader(_, ae[_]);
              ve.onreadystatechange = function() {
                ve.readyState > 3 && de(ve.status >= 400 ? ve.statusText : null, { status: ve.status, data: ve.responseText });
              }, ve.send(U);
            } catch (S) {
              console && console.log(S);
            }
          })(C, N, L, A) : void A(new Error("No fetch and no xhr implementation found!"));
        };
        function st(C) {
          return st = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(N) {
            return typeof N;
          } : function(N) {
            return N && typeof Symbol == "function" && N.constructor === Symbol && N !== Symbol.prototype ? "symbol" : typeof N;
          }, st(C);
        }
        function Me(C, N) {
          var L = Object.keys(C);
          if (Object.getOwnPropertySymbols) {
            var A = Object.getOwnPropertySymbols(C);
            N && (A = A.filter(function(V) {
              return Object.getOwnPropertyDescriptor(C, V).enumerable;
            })), L.push.apply(L, A);
          }
          return L;
        }
        function it(C) {
          for (var N = 1; N < arguments.length; N++) {
            var L = arguments[N] != null ? arguments[N] : {};
            N % 2 ? Me(Object(L), !0).forEach(function(A) {
              Ce(C, A, L[A]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(C, Object.getOwnPropertyDescriptors(L)) : Me(Object(L)).forEach(function(A) {
              Object.defineProperty(C, A, Object.getOwnPropertyDescriptor(L, A));
            });
          }
          return C;
        }
        function Te(C, N) {
          for (var L = 0; L < N.length; L++) {
            var A = N[L];
            A.enumerable = A.enumerable || !1, A.configurable = !0, "value" in A && (A.writable = !0), Object.defineProperty(C, Xe(A.key), A);
          }
        }
        function Ce(C, N, L) {
          return (N = Xe(N)) in C ? Object.defineProperty(C, N, { value: L, enumerable: !0, configurable: !0, writable: !0 }) : C[N] = L, C;
        }
        function Xe(C) {
          var N = (function(L) {
            if (st(L) != "object" || !L) return L;
            var A = L[Symbol.toPrimitive];
            if (A !== void 0) {
              var V = A.call(L, "string");
              if (st(V) != "object") return V;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(L);
          })(C);
          return st(N) == "symbol" ? N : N + "";
        }
        var ot, Ae, me = (ot = function C(N) {
          var L = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, A = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          (function(V, m) {
            if (!(V instanceof m)) throw new TypeError("Cannot call a class as a function");
          })(this, C), this.services = N, this.options = L, this.allOptions = A, this.type = "backend", this.init(N, L, A);
        }, Ae = [{ key: "init", value: function(C) {
          var N = this, L = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, A = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          if (this.services = C, this.options = it(it(it({}, { loadPath: "/locales/{{lng}}/{{ns}}.json", addPath: "/locales/add/{{lng}}/{{ns}}", parse: function(m) {
            return JSON.parse(m);
          }, stringify: JSON.stringify, parsePayload: function(m, U, de) {
            return Ce({}, U, de || "");
          }, parseLoadPayload: function(m, U) {
          }, request: nt, reloadInterval: typeof window > "u" && 36e5, customHeaders: {}, queryStringParams: {}, crossDomain: !1, withCredentials: !1, overrideMimeType: !1, requestOptions: { mode: "cors", credentials: "same-origin", cache: "default" } }), this.options || {}), L), this.allOptions = A, this.services && this.options.reloadInterval) {
            var V = setInterval(function() {
              return N.reload();
            }, this.options.reloadInterval);
            st(V) === "object" && typeof V.unref == "function" && V.unref();
          }
        } }, { key: "readMulti", value: function(C, N, L) {
          this._readAny(C, C, N, N, L);
        } }, { key: "read", value: function(C, N, L) {
          this._readAny([C], C, [N], N, L);
        } }, { key: "_readAny", value: function(C, N, L, A, V) {
          var m, U = this, de = this.options.loadPath;
          typeof this.options.loadPath == "function" && (de = this.options.loadPath(C, L)), (de = (function(ve) {
            return !!ve && typeof ve.then == "function";
          })(m = de) ? m : Promise.resolve(m)).then(function(ve) {
            if (!ve) return V(null, {});
            var ae = U.services.interpolator.interpolate(ve, { lng: C.join("+"), ns: L.join("+") });
            U.loadUrl(ae, V, N, A);
          });
        } }, { key: "loadUrl", value: function(C, N, L, A) {
          var V = this, m = typeof L == "string" ? [L] : L, U = typeof A == "string" ? [A] : A, de = this.options.parseLoadPayload(m, U);
          this.options.request(this.options, C, de, function(ve, ae) {
            if (ae && (ae.status >= 500 && ae.status < 600 || !ae.status)) return N("failed loading " + C + "; status code: " + ae.status, !0);
            if (ae && ae.status >= 400 && ae.status < 500) return N("failed loading " + C + "; status code: " + ae.status, !1);
            if (!ae && ve && ve.message) {
              var _ = ve.message.toLowerCase();
              if (["failed", "fetch", "network", "load"].find(function(Y) {
                return _.indexOf(Y) > -1;
              })) return N("failed loading " + C + ": " + ve.message, !0);
            }
            if (ve) return N(ve, !1);
            var S, j;
            try {
              S = typeof ae.data == "string" ? V.options.parse(ae.data, L, A) : ae.data;
            } catch {
              j = "failed parsing " + C + " to json";
            }
            if (j) return N(j, !1);
            N(null, S);
          });
        } }, { key: "create", value: function(C, N, L, A, V) {
          var m = this;
          if (this.options.addPath) {
            typeof C == "string" && (C = [C]);
            var U = this.options.parsePayload(N, L, A), de = 0, ve = [], ae = [];
            C.forEach(function(_) {
              var S = m.options.addPath;
              typeof m.options.addPath == "function" && (S = m.options.addPath(_, N));
              var j = m.services.interpolator.interpolate(S, { lng: _, ns: N });
              m.options.request(m.options, j, U, function(Y, bt) {
                de += 1, ve.push(Y), ae.push(bt), de === C.length && typeof V == "function" && V(ve, ae);
              });
            });
          }
        } }, { key: "reload", value: function() {
          var C = this, N = this.services, L = N.backendConnector, A = N.languageUtils, V = N.logger, m = L.language;
          if (!m || m.toLowerCase() !== "cimode") {
            var U = [], de = function(ve) {
              A.toResolveHierarchy(ve).forEach(function(ae) {
                U.indexOf(ae) < 0 && U.push(ae);
              });
            };
            de(m), this.allOptions.preload && this.allOptions.preload.forEach(function(ve) {
              return de(ve);
            }), U.forEach(function(ve) {
              C.allOptions.ns.forEach(function(ae) {
                L.read(ve, ae, "read", null, null, function(_, S) {
                  _ && V.warn("loading namespace ".concat(ae, " for language ").concat(ve, " failed"), _), !_ && S && V.log("loaded namespace ".concat(ae, " for language ").concat(ve), S), L.loaded("".concat(ve, "|").concat(ae), _, S);
                });
              });
            });
          }
        } }], Ae && Te(ot.prototype, Ae), Object.defineProperty(ot, "prototype", { writable: !1 }), ot);
        me.type = "backend";
        const Pe = me;
      }, 176(g, z, K) {
        K.r(z), K.d(z, { default: () => ot });
        var { slice: je, forEach: Ee } = [], Ve = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/, Ge = { create(Ae, me, Pe, C) {
          var N = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : { path: "/", sameSite: "strict" };
          Pe && (N.expires = /* @__PURE__ */ new Date(), N.expires.setTime(N.expires.getTime() + 60 * Pe * 1e3)), C && (N.domain = C), document.cookie = (function(L, A) {
            var V = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : { path: "/" }, m = encodeURIComponent(A), U = "".concat(L, "=").concat(m);
            if (V.maxAge > 0) {
              var de = V.maxAge - 0;
              if (Number.isNaN(de)) throw new Error("maxAge should be a Number");
              U += "; Max-Age=".concat(Math.floor(de));
            }
            if (V.domain) {
              if (!Ve.test(V.domain)) throw new TypeError("option domain is invalid");
              U += "; Domain=".concat(V.domain);
            }
            if (V.path) {
              if (!Ve.test(V.path)) throw new TypeError("option path is invalid");
              U += "; Path=".concat(V.path);
            }
            if (V.expires) {
              if (typeof V.expires.toUTCString != "function") throw new TypeError("option expires is invalid");
              U += "; Expires=".concat(V.expires.toUTCString());
            }
            if (V.httpOnly && (U += "; HttpOnly"), V.secure && (U += "; Secure"), V.sameSite) switch (typeof V.sameSite == "string" ? V.sameSite.toLowerCase() : V.sameSite) {
              case !0:
                U += "; SameSite=Strict";
                break;
              case "lax":
                U += "; SameSite=Lax";
                break;
              case "strict":
                U += "; SameSite=Strict";
                break;
              case "none":
                U += "; SameSite=None";
                break;
              default:
                throw new TypeError("option sameSite is invalid");
            }
            return V.partitioned && (U += "; Partitioned"), U;
          })(Ae, me, N);
        }, read(Ae) {
          for (var me = "".concat(Ae, "="), Pe = document.cookie.split(";"), C = 0; C < Pe.length; C++) {
            for (var N = Pe[C]; N.charAt(0) === " "; ) N = N.substring(1, N.length);
            if (N.indexOf(me) === 0) return N.substring(me.length, N.length);
          }
          return null;
        }, remove(Ae, me) {
          this.create(Ae, "", -1, me);
        } }, ze = { name: "cookie", lookup(Ae) {
          var { lookupCookie: me } = Ae;
          if (me && typeof document < "u") return Ge.read(me) || void 0;
        }, cacheUserLanguage(Ae, me) {
          var { lookupCookie: Pe, cookieMinutes: C, cookieDomain: N, cookieOptions: L } = me;
          Pe && typeof document < "u" && Ge.create(Pe, Ae, C, N, L);
        } }, Oe = { name: "querystring", lookup(Ae) {
          var me, { lookupQuerystring: Pe } = Ae;
          if (typeof window < "u") {
            var C, { search: N } = window.location;
            !window.location.search && ((C = window.location.hash) === null || C === void 0 ? void 0 : C.indexOf("?")) > -1 && (N = window.location.hash.substring(window.location.hash.indexOf("?")));
            for (var L = N.substring(1).split("&"), A = 0; A < L.length; A++) {
              var V = L[A].indexOf("=");
              V > 0 && L[A].substring(0, V) === Pe && (me = L[A].substring(V + 1));
            }
          }
          return me;
        } }, Se = { name: "hash", lookup(Ae) {
          var me, { lookupHash: Pe, lookupFromHashIndex: C } = Ae;
          if (typeof window < "u") {
            var { hash: N } = window.location;
            if (N && N.length > 2) {
              var L = N.substring(1);
              if (Pe) for (var A = L.split("&"), V = 0; V < A.length; V++) {
                var m = A[V].indexOf("=");
                m > 0 && A[V].substring(0, m) === Pe && (me = A[V].substring(m + 1));
              }
              if (me) return me;
              if (!me && C > -1) {
                var U, de = N.match(/\/([a-zA-Z-]*)/g);
                return Array.isArray(de) ? (U = de[typeof C == "number" ? C : 0]) === null || U === void 0 ? void 0 : U.replace("/", "") : void 0;
              }
            }
          }
          return me;
        } }, Z = null, ke = () => {
          if (Z !== null) return Z;
          try {
            if (!(Z = typeof window < "u" && window.localStorage !== null)) return !1;
            var Ae = "i18next.translate.boo";
            window.localStorage.setItem(Ae, "foo"), window.localStorage.removeItem(Ae);
          } catch {
            Z = !1;
          }
          return Z;
        }, De = { name: "localStorage", lookup(Ae) {
          var { lookupLocalStorage: me } = Ae;
          if (me && ke()) return window.localStorage.getItem(me) || void 0;
        }, cacheUserLanguage(Ae, me) {
          var { lookupLocalStorage: Pe } = me;
          Pe && ke() && window.localStorage.setItem(Pe, Ae);
        } }, Be = null, Ke = () => {
          if (Be !== null) return Be;
          try {
            if (!(Be = typeof window < "u" && window.sessionStorage !== null)) return !1;
            var Ae = "i18next.translate.boo";
            window.sessionStorage.setItem(Ae, "foo"), window.sessionStorage.removeItem(Ae);
          } catch {
            Be = !1;
          }
          return Be;
        }, nt = { name: "sessionStorage", lookup(Ae) {
          var { lookupSessionStorage: me } = Ae;
          if (me && Ke()) return window.sessionStorage.getItem(me) || void 0;
        }, cacheUserLanguage(Ae, me) {
          var { lookupSessionStorage: Pe } = me;
          Pe && Ke() && window.sessionStorage.setItem(Pe, Ae);
        } }, st = { name: "navigator", lookup(Ae) {
          var me = [];
          if (typeof navigator < "u") {
            var { languages: Pe, userLanguage: C, language: N } = navigator;
            if (Pe) for (var L = 0; L < Pe.length; L++) me.push(Pe[L]);
            C && me.push(C), N && me.push(N);
          }
          return me.length > 0 ? me : void 0;
        } }, Me = { name: "htmlTag", lookup(Ae) {
          var me, { htmlTag: Pe } = Ae, C = Pe || (typeof document < "u" ? document.documentElement : null);
          return C && typeof C.getAttribute == "function" && (me = C.getAttribute("lang")), me;
        } }, it = { name: "path", lookup(Ae) {
          var me, { lookupFromPathIndex: Pe } = Ae;
          if (typeof window < "u") {
            var C = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
            if (Array.isArray(C)) return (me = C[typeof Pe == "number" ? Pe : 0]) === null || me === void 0 ? void 0 : me.replace("/", "");
          }
        } }, Te = { name: "subdomain", lookup(Ae) {
          var me, { lookupFromSubdomainIndex: Pe } = Ae, C = typeof Pe == "number" ? Pe + 1 : 1, N = typeof window < "u" && ((me = window.location) === null || me === void 0 || (me = me.hostname) === null || me === void 0 ? void 0 : me.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i));
          if (N) return N[C];
        } }, Ce = !1;
        try {
          document.cookie, Ce = !0;
        } catch {
        }
        var Xe = ["querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag"];
        Ce || Xe.splice(1, 1);
        class ot {
          constructor(me) {
            var Pe = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            this.type = "languageDetector", this.detectors = {}, this.init(me, Pe);
          }
          init() {
            var me = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { languageUtils: {} }, Pe = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, C = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
            this.services = me, this.options = (function(N) {
              return Ee.call(je.call(arguments, 1), (L) => {
                if (L) for (var A in L) N[A] === void 0 && (N[A] = L[A]);
              }), N;
            })(Pe, this.options || {}, { order: Xe, lookupQuerystring: "lng", lookupCookie: "i18next", lookupLocalStorage: "i18nextLng", lookupSessionStorage: "i18nextLng", caches: ["localStorage"], excludeCacheFor: ["cimode"], convertDetectedLanguage: (N) => N }), typeof this.options.convertDetectedLanguage == "string" && this.options.convertDetectedLanguage.indexOf("15897") > -1 && (this.options.convertDetectedLanguage = (N) => N.replace("-", "_")), this.options.lookupFromUrlIndex && (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex), this.i18nOptions = C, this.addDetector(ze), this.addDetector(Oe), this.addDetector(De), this.addDetector(nt), this.addDetector(st), this.addDetector(Me), this.addDetector(it), this.addDetector(Te), this.addDetector(Se);
          }
          addDetector(me) {
            return this.detectors[me.name] = me, this;
          }
          detect() {
            var me = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.options.order, Pe = [];
            return me.forEach((C) => {
              if (this.detectors[C]) {
                var N = this.detectors[C].lookup(this.options);
                N && typeof N == "string" && (N = [N]), N && (Pe = Pe.concat(N));
              }
            }), Pe = Pe.filter((C) => {
              return C != null && !(typeof (N = C) == "string" && [/<\s*script.*?>/i, /<\s*\/\s*script\s*>/i, /<\s*img.*?on\w+\s*=/i, /<\s*\w+\s*on\w+\s*=.*?>/i, /javascript\s*:/i, /vbscript\s*:/i, /expression\s*\(/i, /eval\s*\(/i, /alert\s*\(/i, /document\.cookie/i, /document\.write\s*\(/i, /window\.location/i, /innerHTML/i].some((L) => L.test(N)));
              var N;
            }).map((C) => this.options.convertDetectedLanguage(C)), this.services && this.services.languageUtils && this.services.languageUtils.getBestMatchFromCodes ? Pe : Pe.length > 0 ? Pe[0] : null;
          }
          cacheUserLanguage(me) {
            var Pe = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.options.caches;
            Pe && (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(me) > -1 || Pe.forEach((C) => {
              this.detectors[C] && this.detectors[C].cacheUserLanguage(me, this.options);
            }));
          }
        }
        ot.type = "languageDetector";
      } }, hi = {};
      function Mt(g) {
        var z = hi[g];
        if (z !== void 0) return z.exports;
        var K = hi[g] = { exports: {} };
        return Mi[g](K, K.exports, Mt), K.exports;
      }
      Mt.n = (g) => {
        var z = g && g.__esModule ? () => g.default : () => g;
        return Mt.d(z, { a: z }), z;
      }, en = Object.getPrototypeOf ? (g) => Object.getPrototypeOf(g) : (g) => g.__proto__, Mt.t = function(g, z) {
        if (1 & z && (g = this(g)), 8 & z || typeof g == "object" && g && (4 & z && g.__esModule || 16 & z && typeof g.then == "function"))
          return g;
        var K = /* @__PURE__ */ Object.create(null);
        Mt.r(K);
        var je = {};
        On = On || [null, en({}), en([]), en(en)];
        for (var Ee = 2 & z && g; (typeof Ee == "object" || typeof Ee == "function") && !~On.indexOf(Ee); Ee = en(Ee)) Object.getOwnPropertyNames(Ee).forEach((Ve) => je[Ve] = () => g[Ve]);
        return je.default = () => g, Mt.d(K, je), K;
      }, Mt.d = (g, z) => {
        for (var K in z) Mt.o(z, K) && !Mt.o(g, K) && Object.defineProperty(g, K, { enumerable: !0, get: z[K] });
      }, Mt.g = (function() {
        if (typeof globalThis == "object") return globalThis;
        try {
          return this || new Function("return this")();
        } catch {
          if (typeof window == "object") return window;
        }
      })(), Mt.o = (g, z) => Object.prototype.hasOwnProperty.call(g, z), Mt.r = (g) => {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(g, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(g, "__esModule", { value: !0 });
      };
      var ii = {};
      return (() => {
        Mt.r(ii), Mt.d(ii, { Desktop: () => mn });
        var g = Mt(542);
        const z = (0, g.createLogger)("agentx-js-api"), K = (p, t) => ({ info: (...s) => p.info(t, ...s), warn: (...s) => p.warn(t, ...s), error: (...s) => p.error(t, ...s) });
        class je {
          constructor(t) {
            this.logger = t.logger;
          }
          check(t) {
            return t ? !!t.isInited || (this.logger.error("SERVICE still not initialized... Await it's init(...) first."), !1) : (this.logger.error("SERVICE is not defined..."), !1);
          }
        }
        const Ee = (p) => new je(p);
        var Ve = function(p, t, s, b) {
          return new (s || (s = Promise))(function(c, I) {
            function be(ue) {
              try {
                Le(b.next(ue));
              } catch (oe) {
                I(oe);
              }
            }
            function we(ue) {
              try {
                Le(b.throw(ue));
              } catch (oe) {
                I(oe);
              }
            }
            function Le(ue) {
              var oe;
              ue.done ? c(ue.value) : (oe = ue.value, oe instanceof s ? oe : new s(function(et) {
                et(oe);
              })).then(be, we);
            }
            Le((b = b.apply(p, [])).next());
          });
        };
        const Ge = "jsapi", ze = { rps: 120, tag: Ge }, Oe = { rps: 0, tag: Ge }, Se = { tag: Ge }, Z = (p) => p.actionsChannels.createSource("fireGeneralSilentNotification/Req", ze), ke = (p) => p.actionsChannels.createSource("fireGeneralAutoDismissNotification/Req", Oe), De = (p) => p.actionsChannels.createDestination("fireGeneralAutoDismissNotification/Res", Oe), Be = (p) => p.actionsChannels.createSource("fireGeneralAcknowledgeNotification/Req", Oe), Ke = (p) => p.actionsChannels.createDestination("fireGeneralAcknowledgeNotification/Res", Oe), nt = (p) => p.actionsChannels.createSource("addCustomTask", ze), st = (p) => p.actionsChannels.createSource("getToken/Req", Oe), Me = (p) => p.actionsChannels.createDestination("getToken/Res", Se), it = (p) => p.actionsChannels.createSource("getTaskMap/Req", Oe), Te = (p) => p.actionsChannels.createDestination("getTaskMap/Res", Se), Ce = (p) => p.actionsChannels.createSource("getMediaTypeQueue/Req", Oe), Xe = (p) => p.actionsChannels.createDestination("getMediaTypeQueue/Res", Se), ot = (p) => p.actionsChannels.createSource("getIdleCodes/Req", Oe), Ae = (p) => p.actionsChannels.createDestination("getIdleCodes/Res", Se), me = (p) => p.actionsChannels.createSource("getWrapUpCodes/Req", Oe), Pe = (p) => p.actionsChannels.createDestination("getWrapUpCodes/Res", Se);
        class C {
          checkService() {
            return this.serviceChecker.check(this.SERVICE);
          }
          getNextReqId() {
            const t = Date.now();
            return this.lastReqTs !== t ? (this.lastReqTs = t, this.lastReqN = 0) : this.lastReqN++, `${this.lastReqTs}_${this.lastReqN}`;
          }
          constructor(t) {
            this.lastReqTs = Date.now(), this.lastReqN = 0, this.toggleMiximizeRestore = (s) => {
              var b;
              if (s && s.target) {
                const c = (b = this.getClosestElement(s.target, ".dynamic-widget-wrapper")) === null || b === void 0 ? void 0 : b.id;
                if (c) {
                  const I = new CustomEvent("toggle-maximize-restore", { detail: { widgetId: c } });
                  window.dispatchEvent(I), z.info("Dispatching toggle-maximize-restore event for widgetId:", c);
                }
              }
            }, this.toggleVoiceInteractionPanel = () => {
              window.dispatchEvent(new CustomEvent("toggle-voice-interaction-panel")), z.info("Dispatching toggl-voice-interaction-panel");
            }, this.toggleMuteUnmuteWebRtcCall = () => {
              const s = new CustomEvent("ax-web-call-mute-unmute", {});
              window.dispatchEvent(s), z.info("Dispatching ax-web-call-mute-unmute event");
            }, this.declineWebRtcCall = () => {
              const s = new CustomEvent("ax-web-call-decline", {});
              window.dispatchEvent(s), z.info("Dispatching ax-web-call-decline event");
            }, this.acceptWebRtcCall = () => {
              const s = new CustomEvent("ax-web-call-answer", {});
              window.dispatchEvent(s), z.info("Dispatching ax-web-call-answer event");
            }, this.logger = t.logger, this.serviceChecker = t.serviceChecker;
          }
          init(t) {
            t && (this.SERVICE = t), this.checkService() && (this.sourceActionsChannels = { fireGeneralSilentNotification: Z(this.SERVICE), fireGeneralAutoDismissNotification: ke(this.SERVICE), fireGeneralAcknowledgeNotification: Be(this.SERVICE), addCustomTask: nt(this.SERVICE), getToken: st(this.SERVICE), getTaskMap: it(this.SERVICE), getMediaTypeQueue: Ce(this.SERVICE), getIdleCodes: ot(this.SERVICE), getWrapUpCodes: me(this.SERVICE) }, this.destinationActionsChannels = { fireGeneralAutoDismissNotification: De(this.SERVICE), fireGeneralAcknowledgeNotification: Ke(this.SERVICE), getToken: Me(this.SERVICE), getTaskMap: Te(this.SERVICE), getMediaTypeQueue: Xe(this.SERVICE), getIdleCodes: Ae(this.SERVICE), getWrapUpCodes: Pe(this.SERVICE) }, this.logger.info("Inited"));
          }
          cleanup() {
            this.SERVICE = void 0, this.logger.info("Cleaned");
          }
          fireGeneralSilentNotification(...t) {
            this.checkService() && this.sourceActionsChannels.fireGeneralSilentNotification.send(...t);
          }
          fireGeneralAutoDismissNotification(...t) {
            return Ve(this, void 0, void 0, function* () {
              if (this.checkService()) return new Promise((s) => {
                const b = this.getNextReqId(), c = ({ args: [I, be, we, Le] }) => {
                  Le === b && (we !== g.Notifications.ItemMeta.Mode.AutoDismiss && we !== g.Notifications.ItemMeta.Mode.Silent || I === g.Notifications.ItemMeta.Status.Deactivated && (s([I, be, we]), this.destinationActionsChannels.fireGeneralAutoDismissNotification.removeListener(c)));
                };
                this.destinationActionsChannels.fireGeneralAutoDismissNotification.addListener(c), this.sourceActionsChannels.fireGeneralAutoDismissNotification.send(...t);
              });
            });
          }
          fireGeneralAcknowledgeNotification(...t) {
            return Ve(this, void 0, void 0, function* () {
              if (this.checkService()) return new Promise((s) => {
                const b = this.getNextReqId(), c = ({ args: [I, be, we, Le] }) => {
                  Le === b && (we !== g.Notifications.ItemMeta.Mode.Acknowledge && we !== g.Notifications.ItemMeta.Mode.Silent || I === g.Notifications.ItemMeta.Status.Deactivated && (s([I, be, we]), this.destinationActionsChannels.fireGeneralAcknowledgeNotification.removeListener(c)));
                };
                this.destinationActionsChannels.fireGeneralAcknowledgeNotification.addListener(c), this.sourceActionsChannels.fireGeneralAcknowledgeNotification.send(...t);
              });
            });
          }
          addCustomTask(...t) {
            this.checkService() && this.sourceActionsChannels.addCustomTask.send(...t);
          }
          getTaskMap() {
            return Ve(this, void 0, void 0, function* () {
              if (this.checkService()) return new Promise((t) => {
                const s = this.getNextReqId(), b = ({ args: [c, I] }) => {
                  I === s && (t(c), this.destinationActionsChannels.getTaskMap.removeListener(b));
                };
                this.destinationActionsChannels.getTaskMap.addListener(b), this.sourceActionsChannels.getTaskMap.send(s);
              });
            });
          }
          getMediaTypeQueue(t) {
            return Ve(this, void 0, void 0, function* () {
              if (this.checkService()) return new Promise((s) => {
                const b = this.getNextReqId(), c = ({ args: [I, be] }) => {
                  be === b && (s(I), this.destinationActionsChannels.getMediaTypeQueue.removeListener(c));
                };
                this.destinationActionsChannels.getMediaTypeQueue.addListener(c), this.sourceActionsChannels.getMediaTypeQueue.send(t, b);
              });
            });
          }
          getToken() {
            return Ve(this, void 0, void 0, function* () {
              if (this.checkService()) return new Promise((t) => {
                const s = this.getNextReqId(), b = ({ args: [c, I] }) => {
                  I === s && (t(c), this.destinationActionsChannels.getToken.removeListener(b));
                };
                this.destinationActionsChannels.getToken.addListener(b), this.sourceActionsChannels.getToken.send(s);
              });
            });
          }
          getIdleCodes() {
            return Ve(this, void 0, void 0, function* () {
              if (this.checkService()) return new Promise((t) => {
                const s = this.getNextReqId(), b = ({ args: [c, I] }) => {
                  I === s && (t(c), this.destinationActionsChannels.getIdleCodes.removeListener(b));
                };
                this.destinationActionsChannels.getIdleCodes.addListener(b), this.sourceActionsChannels.getIdleCodes.send(s);
              });
            });
          }
          getWrapUpCodes() {
            return Ve(this, void 0, void 0, function* () {
              if (this.checkService()) return new Promise((t) => {
                const s = this.getNextReqId(), b = ({ args: [c, I] }) => {
                  I === s && (t(c), this.destinationActionsChannels.getWrapUpCodes.removeListener(b));
                };
                this.destinationActionsChannels.getWrapUpCodes.addListener(b), this.sourceActionsChannels.getWrapUpCodes.send(s);
              });
            });
          }
          getClosestElement(t, s) {
            return t && t !== document && t !== window ? t instanceof ShadowRoot ? this.getClosestElement(t.host, s) : t instanceof HTMLElement && t.matches(s) ? t : this.getClosestElement(t.parentNode, s) : null;
          }
        }
        const N = K(z, "[Actions JSAPI] =>");
        class L {
          constructor(t) {
            this.isInited = !1, this.listeners = /* @__PURE__ */ new Map(), this.listenersOnce = /* @__PURE__ */ new Map(), this.logger = t.logger;
          }
          init(t) {
            this.aqmServiceEntity = t.aqmServiceEntity, this.aqmServiceEntityString = t.aqmServiceEntityString, this.isInited = !0;
          }
          cleanup() {
            this.removeAllEventListeners(), this.aqmServiceEntity = void 0, this.aqmServiceEntityString = void 0, this.isInited = !1;
          }
          _addEventListener(t, s, b) {
            var c, I, be;
            const we = b ? "listenersOnce" : "listeners";
            this[we].has(t) || this[we].set(t, /* @__PURE__ */ new Map());
            const Le = this[we].get(t), ue = b ? "listenOnce" : "listen", oe = (et) => {
              let ht = null;
              return b && (ht = this.aqmServiceEntity[t].listenOnce(() => this.removeOnceEventListener(t, s))), () => {
                var ft;
                if (et) {
                  b ? (et.stopListenOnce(), ht && ht.stopListenOnce()) : et.stopListen();
                  const kt = [];
                  kt.push(`UnBound "${t.toString()}"`), b && kt.push("Once"), this.aqmServiceEntityString && kt.push(`from "${this.aqmServiceEntityString}"`), (ft = this.logger) === null || ft === void 0 || ft.info(kt.join(" "));
                }
              };
            };
            if (this.aqmServiceEntity) if (t in this.aqmServiceEntity && ue in this.aqmServiceEntity[t]) {
              const et = this.aqmServiceEntity[t][ue](s);
              Le.set(s, oe(et));
              const ht = [];
              ht.push(`Bound "${t.toString()}"`), b && ht.push("Once"), this.aqmServiceEntityString && ht.push(`to "${this.aqmServiceEntityString}"`), (c = this.logger) === null || c === void 0 || c.info(ht.join(" "));
            } else (I = this.logger) === null || I === void 0 || I.warn(`EventName "${t.toString()}" is not recognized, so won't be subscribed...`);
            else (be = this.logger) === null || be === void 0 || be.error(`"${this.aqmServiceEntityString}" is not ready yet. .init(...) first...`);
          }
          _removeEventListener(t, s, b) {
            const c = b ? "listenersOnce" : "listeners";
            if (this[c].has(t)) {
              const I = this[c].get(t);
              I && (I.has(s) && (I.get(s)(), I.delete(s)), I.size < 1 && this[c].delete(t));
            }
          }
          addEventListener(t, s) {
            this._addEventListener(t, s, !1);
          }
          addOnceEventListener(t, s) {
            this._addEventListener(t, s, !0);
          }
          removeEventListener(t, s) {
            this._removeEventListener(t, s, !1);
          }
          removeOnceEventListener(t, s) {
            this._removeEventListener(t, s, !0);
          }
          removeAllEventListeners() {
            ["listeners", "listenersOnce"].forEach((t) => {
              this[t].forEach((s, b) => {
                s.forEach((c, I) => c()), s.clear();
              }), this[t].clear();
            });
          }
        }
        const A = (p) => new L(p);
        var V, m, U, de, ve, ae, _, S;
        (function(p) {
          p.TELEPHONY = "telephony", p.CHAT = "chat", p.EMAIL = "email", p.SOCIAL = "social", p.MIDCALL_TELEPHONY = "midcall telephony", p.APPLE_MESSAGES = "appleMessages";
        })(V || (V = {})), (function(p) {
          p.QUEUE = "queue", p.DIAL_NUMBER = "dialNumber", p.AGENT = "agent", p.EPDN = "entrypointDialNumber", p.ENTRY_POINT = "entryPoint";
        })(m || (m = {})), (function(p) {
          p.IDLE = "Idle", p.AVAILABLE = "Available", p.RONA = "RONA";
        })(U || (U = {})), (function(p) {
          p.All = "All", p.TELEPHONY = "telephony", p.CHAT = "chat", p.EMAIL = "email", p.SOCIAL = "social";
        })(de || (de = {})), (function(p) {
          p.SMS = "SMS", p.TELEPHONY = "Call", p.CHAT = "Chat", p.EMAIL = "Email", p.MESSENGER = "Messenger", p.WHATSAPP = "WhatsApp", p.APPLE_BUSINESS_CHAT = "Apple Business Chat", p.GOOGLE_BUSINESS_MESSAGES = "Google's Business Messages";
        })(ve || (ve = {})), (function(p) {
          p.MIDCALL = "midcall", p.ADHOC = "adhoc", p.CONTINUOUS = "continuous";
        })(ae || (ae = {})), (function(p) {
          p.EMAIL = "email", p.CHAT = "chat", p.TELEPHONY = "telephony", p.SOCIAL = "social", p.SMS = "sms", p.FACEBOOK = "facebook", p.WHATSAPP = "whatsapp", p.APPLEMESSAGES = "appleMessages", p.GOOGLEMESSAGES = "googleMessages";
        })(_ || (_ = {})), (function(p) {
          const t = "is not a valid UUID", s = "is not a valid media type", b = "is not a valid destination type";
          p.validatePropValueNotNullAndEmpty = (c) => c !== null && c !== "", p.validateAgentState = (c) => Object.values(U).includes(c), p.validateURL = (c) => /^(https?:\/\/)?(www\.)?[a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(c), p.validateChannelName = (c) => Object.values(ve).includes(c), p.validateStateChannelType = (c) => Array.isArray(c) && c.length > 0 && c.every((I) => ["telephony", "chat", "email", "social"].includes(I)), p.validateDestinationType = (c) => Object.values(m).includes(c), p.validateMediaType = (c) => Object.values(V).includes(c), p.validateUTCTimeStampNumberFormat = (c) => Number.isInteger(c) && c >= 0 && c <= 4102444799999, p.validateNumber = (c) => Number.isInteger(c) && c >= 0 && c <= 2147483647, p.validateBoolean = (c) => typeof c == "boolean" || (c === 0 || c === 1) && p.validatePropValueNotNullAndEmpty(c), p.validateStringToBoolean = (c) => {
            const I = c == null ? void 0 : c.toLowerCase();
            return I === "true" || I === "false" || I === "0" || I === "1";
          }, p.validateChannelType = (c) => Object.values(ve).includes(c), p.validateMonitorType = (c) => Object.values(ae).includes(c), p.validateUUID = (c) => /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/.test(c), p.validateStringNumberOnly = (c) => /^(\+)?\d+$/.test(c), p.validateBuddyAgents = (c, I) => {
            g.AssertUtils.check(p.validateUUID(c == null ? void 0 : c.agentProfileId), I, "agentProfileId is not a valid UUID"), g.AssertUtils.check(p.validateChannelName(c == null ? void 0 : c.channelName), I, "channelName is not a valid channel name"), (c == null ? void 0 : c.state) !== void 0 && g.AssertUtils.check(p.validateAgentState(c.state), I, "state is not a valid state"), (c == null ? void 0 : c.trackingId) !== void 0 && g.AssertUtils.check(p.validatePropValueNotNullAndEmpty(c == null ? void 0 : c.trackingId), I, "trackingId is not a valid string");
          }, p.validateAuxCodeType = (c, I) => {
            g.AssertUtils.check(p.validatePropValueNotNullAndEmpty(c), I, "value is null or empty"), g.AssertUtils.check(c === "IDLE_CODE" || c === "WRAP_UP_CODE", I, "value is not IDLE_CODE or WRAP_UP_CODE");
          }, p.validateAuxCodePayload = (c, I) => {
            p.validateAuxCodeType(c.workType, I), c.page !== void 0 && g.AssertUtils.check(p.validatePropValueNotNullAndEmpty(c.page), I, "page is is null or empty"), c.pageSize !== void 0 && g.AssertUtils.check(p.validatePropValueNotNullAndEmpty(c.pageSize), I, "pageSize is is null or empty"), c.search !== void 0 && g.AssertUtils.check(p.validatePropValueNotNullAndEmpty(c.search), I, "search is is null or empty"), c.customFilter !== void 0 && g.AssertUtils.check(p.validatePropValueNotNullAndEmpty(c.customFilter), I, "customFilter is is null or empty");
          }, p.validateCancelCtq = (c, I) => {
            g.AssertUtils.check(p.validateUUID(c == null ? void 0 : c.agentId), I, `agentId ${t}`), g.AssertUtils.check(p.validateUUID(c == null ? void 0 : c.queueId), I, `queueId ${t}`);
          }, p.validateWrapupPayload = (c, I) => {
            g.AssertUtils.check(p.validatePropValueNotNullAndEmpty(c == null ? void 0 : c.wrapUpReason), I, "wrapUpReason is not a valid string"), g.AssertUtils.check(p.validatePropValueNotNullAndEmpty(c == null ? void 0 : c.auxCodeId), I, "auxCodeId is not a valid string"), g.AssertUtils.check(p.validateStringToBoolean(c == null ? void 0 : c.isAutoWrapup), I, "isAutoWrapup is not a valid boolean value");
          }, p.validateVTeamTransferPayload = (c, I) => {
            g.AssertUtils.check(p.validatePropValueNotNullAndEmpty(c == null ? void 0 : c.vteamId), I, "vteamId is not a valid string"), g.AssertUtils.check(p.validatePropValueNotNullAndEmpty(c == null ? void 0 : c.vteamType), I, "vteamType is not a valid string");
          }, p.validateBlindTransferPayload = (c, I) => {
            g.AssertUtils.check(p.validateUUID(c == null ? void 0 : c.agentId), I, `agentId ${t}`), g.AssertUtils.check(p.validateUUID(c == null ? void 0 : c.destAgentId), I, `destAgentId ${t}`), g.AssertUtils.check(p.validateMediaType(c == null ? void 0 : c.mediaType), I, s), g.AssertUtils.check(p.validatePropValueNotNullAndEmpty(c == null ? void 0 : c.destAgentTeamId), I, "destAgentTeamId is not a valid string"), g.AssertUtils.check(p.validateStringNumberOnly(c == null ? void 0 : c.destAgentDN), I, "destAgentDN is not a numbers only string"), g.AssertUtils.check(p.validatePropValueNotNullAndEmpty(c == null ? void 0 : c.destSiteId), I, "destSiteId is not a valid string");
          }, p.validateConsultPayload = (c, I) => {
            g.AssertUtils.check(p.validateUUID(c == null ? void 0 : c.agentId), I, `agentId ${t}`), (c == null ? void 0 : c.destAgentId) !== void 0 && g.AssertUtils.check(p.validateUUID(c == null ? void 0 : c.destAgentId), I, `destAgentId ${t}`), (c == null ? void 0 : c.mediaType) !== void 0 && g.AssertUtils.check(p.validateMediaType(c == null ? void 0 : c.mediaType), I, s), (c == null ? void 0 : c.holdParticipants) !== void 0 && g.AssertUtils.check(p.validatePropValueNotNullAndEmpty(c == null ? void 0 : c.holdParticipants), I, "holdParticipants is not valid");
          }, p.validateConsultTransferPayLoad = (c, I) => {
            (c == null ? void 0 : c.agentId) !== void 0 && g.AssertUtils.check(p.validateUUID(c == null ? void 0 : c.agentId), I, `agentId ${t}`), g.AssertUtils.check(p.validateUUID(c == null ? void 0 : c.destAgentId), I, `destagentId ${t}`), g.AssertUtils.check(p.validateMediaType(c == null ? void 0 : c.mediaType), I, s), g.AssertUtils.check(p.validateUUID(c == null ? void 0 : c.mediaResourceId), I, `mediaResourceId ${t}`), g.AssertUtils.check(p.validateDestinationType(c == null ? void 0 : c.destinationType), I, b);
          }, p.validateWrapUpV2Payload = (c, I) => {
            g.AssertUtils.check(p.validatePropValueNotNullAndEmpty(c == null ? void 0 : c.wrapUpReason), I, "wrapUpReason is not a valid string"), g.AssertUtils.check(p.validatePropValueNotNullAndEmpty(c == null ? void 0 : c.auxCodeId), I, "auxCodeId is not a valid string");
          }, p.validateChangeAgentStateType = (c, I) => {
            g.AssertUtils.check(p.validatePropValueNotNullAndEmpty(c.state), I, "state is null or empty"), g.AssertUtils.check(c.state.toLowerCase() === "available" || c.state.toLowerCase() === "idle", I, "state is not Available or Idle"), g.AssertUtils.check(p.validatePropValueNotNullAndEmpty(c.auxCodeId), I, "auxCodeId is null or empty"), g.AssertUtils.check(p.validateUUID(c.agentId), I, "agentId is not a valid UUID");
          }, p.validateConsultDataV2Payload = (c, I) => {
            (c == null ? void 0 : c.to) !== void 0 && g.AssertUtils.check(p.validatePropValueNotNullAndEmpty(c == null ? void 0 : c.to), I, "to is not a valid string or not undefined"), g.AssertUtils.check(p.validateDestinationType(c == null ? void 0 : c.destinationType), I, b), g.AssertUtils.check(p.validatePropValueNotNullAndEmpty(c == null ? void 0 : c.holdParticipants), I, "holdParticipants is not valid");
          }, p.validateConsultConferenceDataV2Payload = (c, I) => {
            (c == null ? void 0 : c.agentId) !== void 0 && g.AssertUtils.check(p.validateUUID(c == null ? void 0 : c.agentId), I, `agentId ${t}`), (c == null ? void 0 : c.to) !== void 0 && g.AssertUtils.check(p.validatePropValueNotNullAndEmpty(c == null ? void 0 : c.to), I, "to is not a valid string or not undefined"), g.AssertUtils.check(p.validateDestinationType(c == null ? void 0 : c.destinationType), I, b);
          }, p.validateTransferV2Payload = (c, I) => {
            (c == null ? void 0 : c.to) !== void 0 && g.AssertUtils.check(p.validatePropValueNotNullAndEmpty(c == null ? void 0 : c.to), I, "to is not a valid string or not undefined"), g.AssertUtils.check(p.validateDestinationType(c == null ? void 0 : c.destinationType), I, b);
          }, p.validateBuddyAgentsV2Payload = (c, I) => {
            g.AssertUtils.check(p.validateUUID(c == null ? void 0 : c.agentProfileId), I, `agentProfileId ${t}`), g.AssertUtils.check(p.validateMediaType(c == null ? void 0 : c.mediaType), I, s), g.AssertUtils.check(p.validateAgentState(c == null ? void 0 : c.state), I, "state is not a valid state");
          }, p.validateVTeam = (c, I) => {
            g.AssertUtils.check(p.validateUUID(c == null ? void 0 : c.agentProfileId), I, "agentProfileId is not a valid UUID"), g.AssertUtils.check(p.validateUUID(c == null ? void 0 : c.agentSessionId), I, "agentSessionId is not a valid UUID"), g.AssertUtils.check(p.validateChannelType(c == null ? void 0 : c.channelType), I, "channelType is not a valid channel type"), g.AssertUtils.check(p.validatePropValueNotNullAndEmpty(c == null ? void 0 : c.type), I, "type is not a valid string"), (c == null ? void 0 : c.trackingId) !== void 0 && g.AssertUtils.check(p.validatePropValueNotNullAndEmpty(c == null ? void 0 : c.trackingId), I, "trackingId is not a valid string");
          }, p.validateDialerTasks = (c, I) => {
            c != null && c.id && g.AssertUtils.check(p.validateUUID(c.id), I, "id is not a valid UUID"), g.AssertUtils.check(p.validateUUID(c == null ? void 0 : c.entryPointId), I, "entryPointId is not a valid UUID"), g.AssertUtils.check(p.validatePropValueNotNullAndEmpty(c == null ? void 0 : c.destination), I, "destination is null or empty"), g.AssertUtils.check(p.validateUUID(c == null ? void 0 : c.direction), I, "direction is not a valid UUID"), c != null && c.origin && g.AssertUtils.check(p.validatePropValueNotNullAndEmpty(c.origin), I, "origin is null or empty"), g.AssertUtils.check(p.validatePropValueNotNullAndEmpty(c == null ? void 0 : c.attributes.key), I, "attributes.key is null or empty"), g.AssertUtils.check(p.validatePropValueNotNullAndEmpty(c == null ? void 0 : c.attributes.value), I, "attributes.value is null or empty"), g.AssertUtils.check(p.validateMediaType(c == null ? void 0 : c.mediaType), I, "mediaType is not a valid media type"), g.AssertUtils.check(p.validatePropValueNotNullAndEmpty(c == null ? void 0 : c.outboundType), I, "outboundType is null or empty");
          }, p.validatePreviewCampaignPayload = (c, I) => {
            g.AssertUtils.check(p.validateUUID(c == null ? void 0 : c.interactionId), I, "interactionId is not a valid UUID"), g.AssertUtils.check(p.validatePropValueNotNullAndEmpty(c == null ? void 0 : c.campaignId), I, "campaignId is null or empty");
          }, p.validateMonitoringRequest = (c, I) => {
            g.AssertUtils.check(p.validateUUID(c == null ? void 0 : c.id), I, "id is not a valid UUID"), g.AssertUtils.check(p.validateMonitorType(c == null ? void 0 : c.monitorType), I, "monitorType is not a valid monitor type"), (c == null ? void 0 : c.queueIds) !== void 0 && c.queueIds.forEach((be) => {
              g.AssertUtils.check(p.validateUUID(be), I, "queueIds is not a valid UUID");
            }), (c == null ? void 0 : c.teams) !== void 0 && c.teams.forEach((be) => {
              g.AssertUtils.check(p.validateUUID(be), I, "team is not a valid UUID");
            }), (c == null ? void 0 : c.sites) !== void 0 && c.sites.forEach((be) => {
              g.AssertUtils.check(p.validateUUID(be), I, "site is not a valid UUID");
            }), (c == null ? void 0 : c.agents) !== void 0 && c.agents.forEach((be) => {
              g.AssertUtils.check(p.validateUUID(be), I, "agent is not a valid UUID");
            }), (c == null ? void 0 : c.startUTCTimestamp) !== void 0 && g.AssertUtils.check(p.validateUTCTimeStampNumberFormat(c.startUTCTimestamp), I, "startUTCTimestamp is not a valid timestamp"), (c == null ? void 0 : c.continuousDuration) !== void 0 && g.AssertUtils.check(p.validatePropValueNotNullAndEmpty(c.continuousDuration), I, "continuousDuration is not a valid string or not undefined"), (c == null ? void 0 : c.taskId) !== void 0 && g.AssertUtils.check(p.validateUUID(c.taskId), I, "taskId is not a valid UUID"), g.AssertUtils.check(p.validateUUID(c == null ? void 0 : c.trackingId), I, "trackingId is not a valid UUID"), c != null && c.invisibleMode && g.AssertUtils.check(p.validatePropValueNotNullAndEmpty(c.invisibleMode), I, "invisibleMode is not a valid string or not undefined");
          }, p.validateMultiConsultPayload = (c, I) => {
            c && Object.entries(c).forEach(([be, we]) => {
              switch (be) {
                case "agentId":
                  g.AssertUtils.check(p.validateUUID(String(we)), I, `agentId ${t}`);
                  break;
                case "destAgentId":
                  g.AssertUtils.check(p.validateUUID(String(we)), I, `destAgentId ${t}`);
                  break;
                case "mediaType":
                  g.AssertUtils.check(p.validateMediaType(we), I, s);
                  break;
                case "holdParticipants":
                  g.AssertUtils.check(p.validatePropValueNotNullAndEmpty(we), I, "holdParticipants is not valid");
                  break;
                case "destAgentDN":
                  g.AssertUtils.check(p.validateStringNumberOnly(String(we)), I, "destAgentDN is not a numbers only string");
                  break;
                case "destinationType":
                  g.AssertUtils.check(p.validateDestinationType(we), I, b);
                  break;
                case "destAgentTeamId":
                  g.AssertUtils.check(p.validatePropValueNotNullAndEmpty(String(we)), I, "destAgentTeamId is not a valid string");
                  break;
                case "destSiteId":
                  g.AssertUtils.check(p.validatePropValueNotNullAndEmpty(String(we)), I, "destSiteId is not a valid string");
                  break;
                case "queueId":
                  g.AssertUtils.check(p.validateUUID(String(we)), I, `queueId ${t}`);
                  break;
                case "trackingId":
                  g.AssertUtils.check(p.validateUUID(String(we)), I, "trackingId is not a valid string");
              }
            });
          }, p.validateFetchByAssigneeAgentIdType = (c, I, be) => {
            g.AssertUtils.check(p.validatePropValueNotNullAndEmpty(c), be, "page is is null or empty"), g.AssertUtils.check(p.validatePropValueNotNullAndEmpty(I), be, "assigneeAgent is is null or empty"), g.AssertUtils.check(p.validateUUID(I), be, "assigneeAgent is not a valid UUID");
          }, p.validatefetchByCallbackPhoneNumberType = (c, I, be) => {
            g.AssertUtils.check(p.validatePropValueNotNullAndEmpty(c), be, "page is null or empty"), g.AssertUtils.check(p.validatePropValueNotNullAndEmpty(I), be, "phoneNumber is is null or empty");
          }, p.validateCreateOrUpdateScheduleCallbackType = (c, I, be = !1) => {
            be && (g.AssertUtils.check(p.validatePropValueNotNullAndEmpty(c.id), I, "id is null or empty"), c.id && g.AssertUtils.check(p.validateUUID(c.id), I, "id is not a valid UUID")), g.AssertUtils.check(p.validatePropValueNotNullAndEmpty(c.customerName), I, "customerName is null or empty"), g.AssertUtils.check(p.validatePropValueNotNullAndEmpty(c.callbackNumber), I, "callbackNumber is null or empty"), g.AssertUtils.check(p.validatePropValueNotNullAndEmpty(c.timezone), I, "timezone is null or empty"), g.AssertUtils.check(p.validatePropValueNotNullAndEmpty(c.scheduleDate), I, "scheduleDate is null or empty"), g.AssertUtils.check(p.validatePropValueNotNullAndEmpty(c.startTime), I, "startTime is null or empty"), g.AssertUtils.check(p.validatePropValueNotNullAndEmpty(c.endTime), I, "endTime is null or empty"), g.AssertUtils.check(p.validatePropValueNotNullAndEmpty(c.queueId), I, "queueId is null or empty");
          }, p.validateGetValidCampaignTimesType = (c, I, be) => {
            g.AssertUtils.check(p.validatePropValueNotNullAndEmpty(c), be, "campaignId is null or empty"), g.AssertUtils.check(p.validatePropValueNotNullAndEmpty(I), be, "agentId is null or empty"), g.AssertUtils.check(p.validateUUID(I), be, "agentId is not a valid UUID");
          };
        })(S || (S = {}));
        var j = function(p, t, s, b) {
          return new (s || (s = Promise))(function(c, I) {
            function be(ue) {
              try {
                Le(b.next(ue));
              } catch (oe) {
                I(oe);
              }
            }
            function we(ue) {
              try {
                Le(b.throw(ue));
              } catch (oe) {
                I(oe);
              }
            }
            function Le(ue) {
              var oe;
              ue.done ? c(ue.value) : (oe = ue.value, oe instanceof s ? oe : new s(function(et) {
                et(oe);
              })).then(be, we);
            }
            Le((b = b.apply(p, [])).next());
          });
        };
        const Y = "interactionId is not a valid UUID";
        class bt {
          checkService() {
            return this.serviceChecker.check(this.SERVICE);
          }
          constructor(t) {
            this.logger = t.logger, this.aqmEvents = t.aqmEvents, this.serviceChecker = t.serviceChecker;
          }
          init(t) {
            t && (this.SERVICE = t), this.checkService() && (this.aqmEvents.init({ aqmServiceEntity: this.SERVICE.aqm.contact, aqmServiceEntityString: "SERVICE.aqm.contact" }), this.logger.info("Inited"));
          }
          cleanup() {
            this.aqmEvents.cleanup(), this.SERVICE = void 0, this.logger.info("Cleaned");
          }
          sendDtmf(t) {
            this.checkService() && this.SERVICE.webCalling.sendDTMF(Number(t));
          }
          accept(t) {
            var s;
            return j(this, void 0, void 0, function* () {
              if (this.checkService()) return g.AssertUtils.check(S.validateUUID(t.interactionId), "accept", Y), (s = this.SERVICE) === null || s === void 0 ? void 0 : s.aqm.contact.accept(t);
            });
          }
          consultAccept(t) {
            var s;
            return j(this, void 0, void 0, function* () {
              if (this.checkService()) return g.AssertUtils.check(S.validateUUID(t.interactionId), "consultAccept", Y), (s = this.SERVICE) === null || s === void 0 ? void 0 : s.aqm.contact.consultAccept(t);
            });
          }
          buddyAgents(t) {
            var s;
            return j(this, void 0, void 0, function* () {
              if (this.checkService()) return S.validateBuddyAgents(t.data, "buddyAgents"), (s = this.SERVICE) === null || s === void 0 ? void 0 : s.aqm.contact.buddyAgents(t);
            });
          }
          end(t) {
            var s;
            return j(this, void 0, void 0, function* () {
              if (this.checkService()) return g.AssertUtils.check(S.validateUUID(t.interactionId), "end", Y), (s = this.SERVICE) === null || s === void 0 ? void 0 : s.aqm.contact.end(t);
            });
          }
          consultEnd(t) {
            var s;
            return j(this, void 0, void 0, function* () {
              if (this.checkService()) return g.AssertUtils.check(S.validateUUID(t.interactionId), "consultEnd", Y), g.AssertUtils.check(S.validateBoolean(t.isConsult), "consultEnd", "isConsult is not a valid boolean value"), (s = this.SERVICE) === null || s === void 0 ? void 0 : s.aqm.contact.consultEnd(t);
            });
          }
          cancelCtq(t) {
            var s;
            return j(this, void 0, void 0, function* () {
              if (this.checkService()) return g.AssertUtils.check(S.validateUUID(t.interactionId), "cancelCtq", Y), S.validateCancelCtq(t.data, "cancelCtq"), (s = this.SERVICE) === null || s === void 0 ? void 0 : s.aqm.contact.cancelCtq(t);
            });
          }
          wrapup(t) {
            var s;
            return j(this, void 0, void 0, function* () {
              if (this.checkService()) return g.AssertUtils.check(S.validateUUID(t.interactionId), "wrapup", Y), S.validateWrapupPayload(t.data, "wrapup"), (s = this.SERVICE) === null || s === void 0 ? void 0 : s.aqm.contact.wrapup(t);
            });
          }
          vteamTransfer(t) {
            var s;
            return j(this, void 0, void 0, function* () {
              if (this.checkService()) return g.AssertUtils.check(S.validateUUID(t.interactionId), "vteamTransfer", Y), S.validateVTeamTransferPayload(t.data, "vteamTransfer"), (s = this.SERVICE) === null || s === void 0 ? void 0 : s.aqm.contact.vteamTransfer(t);
            });
          }
          blindTransfer(t) {
            var s;
            return j(this, void 0, void 0, function* () {
              if (this.checkService()) return g.AssertUtils.check(S.validateUUID(t.interactionId), "blindTransfer", Y), S.validateBlindTransferPayload(t.data, "blindTransfer"), (s = this.SERVICE) === null || s === void 0 ? void 0 : s.aqm.contact.blindTransfer(t);
            });
          }
          hold(t) {
            var s, b;
            return j(this, void 0, void 0, function* () {
              if (this.checkService()) return g.AssertUtils.check(S.validateUUID(t.interactionId), "hold", Y), g.AssertUtils.check(S.validateUUID((s = t.data) === null || s === void 0 ? void 0 : s.mediaResourceId), "hold", "mediaResourceId is not a valid UUID"), (b = this.SERVICE) === null || b === void 0 ? void 0 : b.aqm.contact.hold(t);
            });
          }
          unHold(t) {
            var s, b;
            return j(this, void 0, void 0, function* () {
              if (this.checkService()) return g.AssertUtils.check(S.validateUUID(t.interactionId), "unHold", Y), g.AssertUtils.check(S.validateUUID((s = t.data) === null || s === void 0 ? void 0 : s.mediaResourceId), "unHold", "mediaResourceId is not a valid UUID"), (b = this.SERVICE) === null || b === void 0 ? void 0 : b.aqm.contact.unHold(t);
            });
          }
          consult(t) {
            var s;
            return j(this, void 0, void 0, function* () {
              if (this.checkService()) return g.AssertUtils.check(S.validateUUID(t.interactionId), "consult", Y), g.AssertUtils.check(S.validateURL(t.url), "consult", "url is not a valid URL"), S.validateMultiConsultPayload(t.data, "consult"), (s = this.SERVICE) === null || s === void 0 ? void 0 : s.aqm.contact.consult(t);
            });
          }
          consultConference(t) {
            var s;
            return j(this, void 0, void 0, function* () {
              if (this.checkService()) return g.AssertUtils.check(S.validateUUID(t.interactionId), "consultConference", Y), S.validateConsultPayload(t.data, "consultConference"), (s = this.SERVICE) === null || s === void 0 ? void 0 : s.aqm.contact.consultConference(t);
            });
          }
          decline(t) {
            var s, b;
            return j(this, void 0, void 0, function* () {
              if (this.checkService()) return g.AssertUtils.check(S.validateUUID(t.interactionId), "decline", "ERROR_INTERACTION_ID_INVALID"), g.AssertUtils.check(S.validateUUID((s = t.data) === null || s === void 0 ? void 0 : s.mediaResourceId), "decline", "mediaResourceId is not a valid UUID"), g.AssertUtils.check(S.validateBoolean(t.isConsult), "decline", "isConsult is not a valid boolean value"), (b = this.SERVICE) === null || b === void 0 ? void 0 : b.aqm.contact.decline(t);
            });
          }
          consultTransfer(t) {
            var s;
            return j(this, void 0, void 0, function* () {
              if (this.checkService()) return g.AssertUtils.check(S.validateUUID(t.interactionId), "decline", "ERROR_INTERACTION_ID_INVALID"), S.validateConsultTransferPayLoad(t.data, "consultTransfer"), (s = this.SERVICE) === null || s === void 0 ? void 0 : s.aqm.contact.consultTransfer(t);
            });
          }
          vteamList(t) {
            var s;
            return j(this, void 0, void 0, function* () {
              if (this.checkService()) return S.validateVTeam(t.data, "vteamList"), (s = this.SERVICE) === null || s === void 0 ? void 0 : s.aqm.contact.vteamList(t);
            });
          }
          pauseRecording(t) {
            var s;
            return j(this, void 0, void 0, function* () {
              if (this.checkService()) return g.AssertUtils.check(S.validateUUID(t.interactionId), "pauseRecording", "ERROR_INTERACTION_ID_INVALID"), (s = this.SERVICE) === null || s === void 0 ? void 0 : s.aqm.contact.pauseRecording(t);
            });
          }
          resumeRecording(t) {
            var s, b;
            return j(this, void 0, void 0, function* () {
              if (this.checkService()) return g.AssertUtils.check(S.validateUUID(t.interactionId), "resumeRecording", "ERROR_INTERACTION_ID_INVALID"), g.AssertUtils.check(S.validateBoolean((s = t.data) === null || s === void 0 ? void 0 : s.autoResumed), "resumeRecording", "autoResumed is not a valid boolean value"), (b = this.SERVICE) === null || b === void 0 ? void 0 : b.aqm.contact.resumeRecording(t);
            });
          }
          acceptV2(t) {
            var s;
            return j(this, void 0, void 0, function* () {
              if (this.checkService()) return g.AssertUtils.check(S.validateUUID(t.interactionId), "acceptV2", "ERROR_INTERACTION_ID_INVALID"), (s = this.SERVICE) === null || s === void 0 ? void 0 : s.aqm.contact.acceptV2(t);
            });
          }
          endV2(t) {
            var s, b;
            return j(this, void 0, void 0, function* () {
              if (this.checkService()) return g.AssertUtils.check(S.validateUUID(t.interactionId), "endV2", "ERROR_INTERACTION_ID_INVALID"), t.isEndingFromNonPrimary && g.AssertUtils.check(S.validateBoolean(t.isEndingFromNonPrimary), "endV2", "isEndingFromNonPrimary is not a valid boolean value"), !((s = this.SERVICE) === null || s === void 0) && s.aqm.contact.endV2 ? (b = this.SERVICE) === null || b === void 0 ? void 0 : b.aqm.contact.endV2(t) : void 0;
            });
          }
          cancelTaskV2(t) {
            var s, b;
            return j(this, void 0, void 0, function* () {
              if (this.checkService()) return g.AssertUtils.check(S.validateUUID(t.interactionId), "cancelTaskV2", "ERROR_INTERACTION_ID_INVALID"), !((s = this.SERVICE) === null || s === void 0) && s.aqm.contact.cancelTaskV2 ? (b = this.SERVICE) === null || b === void 0 ? void 0 : b.aqm.contact.cancelTaskV2(t) : void 0;
            });
          }
          pauseRecordingV2(t) {
            var s;
            return j(this, void 0, void 0, function* () {
              if (this.checkService()) return g.AssertUtils.check(S.validateUUID(t.interactionId), "pauseRecordingV2", "ERROR_INTERACTION_ID_INVALID"), (s = this.SERVICE) === null || s === void 0 ? void 0 : s.aqm.contact.pauseRecordingV2(t);
            });
          }
          resumeRecordingV2(t) {
            var s, b;
            return j(this, void 0, void 0, function* () {
              if (this.checkService()) return g.AssertUtils.check(S.validateUUID(t.interactionId), "resumeRecordingV2", "ERROR_INTERACTION_ID_INVALID"), g.AssertUtils.check(S.validateBoolean((s = t.data) === null || s === void 0 ? void 0 : s.autoResumed), "resumeRecordingV2", "autoResumed is not a valid boolean value"), (b = this.SERVICE) === null || b === void 0 ? void 0 : b.aqm.contact.resumeRecordingV2(t);
            });
          }
          wrapupV2(t) {
            var s, b;
            return j(this, void 0, void 0, function* () {
              if (this.checkService()) return g.AssertUtils.check(S.validateUUID(t.interactionId), "wrapupV2", "ERROR_INTERACTION_ID_INVALID"), S.validateWrapUpV2Payload(t.data, "wrapupV2"), !((s = this.SERVICE) === null || s === void 0) && s.aqm.contact.wrapupV2 ? (b = this.SERVICE) === null || b === void 0 ? void 0 : b.aqm.contact.wrapupV2(t) : void 0;
            });
          }
          consultV2(t) {
            var s;
            return j(this, void 0, void 0, function* () {
              if (this.checkService()) return g.AssertUtils.check(S.validateUUID(t.interactionId), "consultV2", "ERROR_INTERACTION_ID_INVALID"), S.validateConsultDataV2Payload(t.data, "consultV2"), (s = this.SERVICE) === null || s === void 0 ? void 0 : s.aqm.contact.consultV2(t);
            });
          }
          consultEndV2(t) {
            var s;
            return j(this, void 0, void 0, function* () {
              if (this.checkService()) return g.AssertUtils.check(S.validateUUID(t.interactionId), "consultEndV2", "ERROR_INTERACTION_ID_INVALID"), g.AssertUtils.check(S.validateBoolean(t.isConsult), "consultEndV2", "isConsult is not a valid boolean value"), t.isSecondaryEpDnAgent && g.AssertUtils.check(S.validateBoolean(t.isSecondaryEpDnAgent), "consultEndV2", "isSecondaryEpDnAgent is not a valid boolean value"), t.queueId && g.AssertUtils.check(S.validateUUID(t.queueId), "consultEndV2", "queueId is not a valid UUID"), (s = this.SERVICE) === null || s === void 0 ? void 0 : s.aqm.contact.consultEndV2(t);
            });
          }
          consultConferenceV2(t) {
            var s;
            return j(this, void 0, void 0, function* () {
              if (this.checkService()) return g.AssertUtils.check(S.validateUUID(t.interactionId), "consultConferenceV2", "ERROR_INTERACTION_ID_INVALID"), S.validateConsultConferenceDataV2Payload(t.data, "consultConferenceV2"), (s = this.SERVICE) === null || s === void 0 ? void 0 : s.aqm.contact.consultConferenceV2(t);
            });
          }
          exitConference(t) {
            var s;
            return j(this, void 0, void 0, function* () {
              if (this.checkService()) return g.AssertUtils.check(S.validateUUID(t.interactionId), "exitConference", "ERROR_INTERACTION_ID_INVALID"), (s = this.SERVICE) === null || s === void 0 ? void 0 : s.aqm.contact.exitConference(t);
            });
          }
          consultTransferV2(t) {
            var s;
            return j(this, void 0, void 0, function* () {
              if (this.checkService()) return g.AssertUtils.check(S.validateUUID(t.interactionId), "consultTransferV2", "ERROR_INTERACTION_ID_INVALID"), S.validateTransferV2Payload(t.data, "consultTransferV2"), (s = this.SERVICE) === null || s === void 0 ? void 0 : s.aqm.contact.consultTransferV2(t);
            });
          }
          blindTransferV2(t) {
            var s;
            return j(this, void 0, void 0, function* () {
              if (this.checkService()) return g.AssertUtils.check(S.validateUUID(t.interactionId), "blindTransferV2", "ERROR_INTERACTION_ID_INVALID"), S.validateTransferV2Payload(t.data, "blindTransferV2"), (s = this.SERVICE) === null || s === void 0 ? void 0 : s.aqm.contact.blindTransferV2(t);
            });
          }
          vteamTransferV2(t) {
            var s;
            return j(this, void 0, void 0, function* () {
              if (this.checkService()) return g.AssertUtils.check(S.validateUUID(t.interactionId), "vteamTransferV2", "ERROR_INTERACTION_ID_INVALID"), S.validateTransferV2Payload(t.data, "vteamTransferV2"), (s = this.SERVICE) === null || s === void 0 ? void 0 : s.aqm.contact.vteamTransferV2(t);
            });
          }
          buddyAgentsV2(t) {
            var s;
            return j(this, void 0, void 0, function* () {
              if (this.checkService()) return S.validateBuddyAgentsV2Payload(t.data, "buddyAgentsV2"), (s = this.SERVICE) === null || s === void 0 ? void 0 : s.aqm.contact.buddyAgentsV2(t);
            });
          }
          dropConferenceParticipant(t) {
            var s;
            return j(this, void 0, void 0, function* () {
              if (this.checkService()) return g.AssertUtils.check(S.validateUUID(t.interactionId), "dropConferenceParticipant", "ERROR_INTERACTION_ID_INVALID"), (s = this.SERVICE) === null || s === void 0 ? void 0 : s.aqm.contact.dropConferenceParticipant(t);
            });
          }
          addEventListener(t, s) {
            this.checkService() && this.aqmEvents.addEventListener(t, s);
          }
          addOnceEventListener(t, s) {
            this.checkService() && this.aqmEvents.addOnceEventListener(t, s);
          }
          removeEventListener(t, s) {
            this.aqmEvents.removeEventListener(t, s);
          }
          removeOnceEventListener(t, s) {
            this.aqmEvents.removeOnceEventListener(t, s);
          }
          removeAllEventListeners() {
            this.aqmEvents.removeAllEventListeners();
          }
        }
        const mt = K(z, "[AgentContact JSAPI] =>"), At = K(mt, "[AqmServiceEvents: Contact] => ");
        var Nt = Mt(322), _t = Mt.n(Nt), w = Mt(497), r = Mt.n(w), n = function(p, t, s, b) {
          return new (s || (s = Promise))(function(c, I) {
            function be(ue) {
              try {
                Le(b.next(ue));
              } catch (oe) {
                I(oe);
              }
            }
            function we(ue) {
              try {
                Le(b.throw(ue));
              } catch (oe) {
                I(oe);
              }
            }
            function Le(ue) {
              var oe;
              ue.done ? c(ue.value) : (oe = ue.value, oe instanceof s ? oe : new s(function(et) {
                et(oe);
              })).then(be, we);
            }
            Le((b = b.apply(p, [])).next());
          });
        };
        const u = { agentName: void 0, agentProfileID: void 0, agentSessionId: void 0, idleCode: void 0, teamId: void 0, teamName: void 0, dn: void 0, status: void 0, subStatus: void 0, idleCodes: void 0, wrapupCodes: void 0, outDialRegex: void 0, isOutboundEnabledForTenant: void 0, isOutboundEnabledForAgent: void 0, isEndCallEnabled: void 0, isEndConsultEnabled: void 0, allowConsultToQueue: void 0, isAdhocDialingEnabled: void 0, isAgentAvailableAfterOutdial: void 0, isCampaignManagementEnabled: void 0, agentPersonalStatsEnabled: void 0 };
        class h {
          stateChangeByChannelType(t) {
            throw new Error("Method not implemented.");
          }
          checkService() {
            return this.serviceChecker.check(this.SERVICE);
          }
          emit(t, ...s) {
            this.emitter.emit(t, ...s);
          }
          update(t) {
            const s = Object.keys(t).reduce((b, c) => {
              const I = t[c], be = this.latestData[c];
              return JSON.stringify(I) !== JSON.stringify(be) && b.push({ name: c, value: I, oldValue: be }), b;
            }, []);
            s.length && (s.forEach((b) => this.latestData[b.name] = b.value), this.emit("updated", s));
          }
          static getOutdialRegex(t) {
            if (t && t.dialPlanEntity) {
              const s = t.dialPlanEntity.find((b) => b.name === "Any Format");
              if (s) return s.regex;
            }
            return "";
          }
          constructor(t) {
            this.emitter = _t()(), this.listeners = /* @__PURE__ */ new Set(), this.teams = [], this.idleCodes = {}, this.latestData = Object.assign({}, u), this.logger = t.logger, this.serviceChecker = t.serviceChecker;
          }
          static findTeamName(t, s) {
            const b = t.find((c) => c.teamId === s);
            return (b == null ? void 0 : b.teamName) || "";
          }
          init(t) {
            return n(this, void 0, void 0, function* () {
              t && (this.SERVICE = t), this.checkService() && (yield this.fetchLatestData(), this.subscribeSelfDataEvents(), this.logger.info("Inited"));
            });
          }
          cleanup() {
            this.unsubscribeSelfDataEvents(), this.removeAllEventListeners(), this.SERVICE = void 0, this.update(Object.assign({}, u)), this.logger.info("Cleaned");
          }
          fetchLatestData() {
            var t, s, b, c, I, be, we;
            return n(this, void 0, void 0, function* () {
              const Le = !((t = this.SERVICE) === null || t === void 0) && t.conf.profile ? (s = this.SERVICE) === null || s === void 0 ? void 0 : s.conf.profile : yield (b = this.SERVICE) === null || b === void 0 ? void 0 : b.conf.fetchProfile();
              if (Le) {
                const { teams: ue, agentName: oe, agentProfileID: et, defaultDn: ht, agentSubStatus: ft, agentStatus: kt, idleCodes: Bt, wrapupCodes: jt, dialPlan: Gt, isOutboundEnabledForTenant: rn, isOutboundEnabledForAgent: kn, isAdhocDialingEnabled: Un, isEndCallEnabled: Tn, isEndConsultEnabled: _n, allowConsultToQueue: Ct, isAgentAvailableAfterOutdial: o, isCampaignManagementEnabled: d, agentPersonalStatsEnabled: y } = Le;
                let { idleCode: v } = Le;
                const M = ht;
                let $ = kt, q = ft;
                if (this.teams = ue, Bt == null || Bt.forEach((fe) => {
                  this.idleCodes[fe.id] = { id: fe.id, name: fe.name };
                }), !v || !(!((c = this.SERVICE) === null || c === void 0) && c.conf.isReloginSuccess)) {
                  const fe = yield (I = this.SERVICE) === null || I === void 0 ? void 0 : I.aqm.agent.reload();
                  fe != null && fe.data && (v = fe.data.auxCodeId !== "0" && fe.data.auxCodeId ? this.idleCodes[fe.data.auxCodeId] : void 0, $ = (be = fe == null ? void 0 : fe.data) === null || be === void 0 ? void 0 : be.status, q = (we = fe == null ? void 0 : fe.data) === null || we === void 0 ? void 0 : we.subStatus);
                }
                const ee = h.getOutdialRegex(Gt);
                this.update({ agentName: oe, agentProfileID: et, dn: M, status: $, subStatus: q, idleCode: v, idleCodes: Bt, wrapupCodes: jt, outDialRegex: ee, isOutboundEnabledForTenant: rn, isOutboundEnabledForAgent: kn, isAdhocDialingEnabled: Un, isEndCallEnabled: Tn, isEndConsultEnabled: _n, allowConsultToQueue: Ct, isAgentAvailableAfterOutdial: o, isCampaignManagementEnabled: d, agentPersonalStatsEnabled: y });
              }
            });
          }
          subscribeSelfDataEvents() {
            var t, s, b, c, I, be;
            if (this.checkService()) {
              {
                const we = (t = this.SERVICE) === null || t === void 0 ? void 0 : t.aqm.agent.eAgentReloginSuccess.listen(({ data: { agentSessionId: Le = "", teamId: ue = "", dn: oe = "", status: et = "", subStatus: ht = "", auxCodeId: ft = "" } }) => {
                  const kt = h.findTeamName(this.teams, ue);
                  this.update({ agentSessionId: Le, teamId: ue, teamName: kt, dn: oe, status: et, subStatus: ht, idleCode: this.idleCodes[ft] });
                });
                this.listeners.add(() => we == null ? void 0 : we.stopListen());
              }
              {
                const we = (s = this.SERVICE) === null || s === void 0 ? void 0 : s.aqm.agent.eAgentStationLoginSuccess.listen(({ data: { agentSessionId: Le = "", teamId: ue = "", status: oe = "", subStatus: et = "", auxCodeId: ht = "" } }) => {
                  const ft = h.findTeamName(this.teams, ue);
                  this.update({ agentSessionId: Le, teamId: ue, teamName: ft, status: oe, subStatus: et, idleCode: this.idleCodes[ht] });
                });
                this.listeners.add(() => we == null ? void 0 : we.stopListen());
              }
              {
                const we = (b = this.SERVICE) === null || b === void 0 ? void 0 : b.aqm.agent.eAgentStateChangeSuccess.listen(({ data: { agentSessionId: Le = "", status: ue = "", subStatus: oe = "", auxCodeId: et = "" } }) => {
                  var ht;
                  const ft = this.idleCodes ? (ht = this.idleCodes[et]) === null || ht === void 0 ? void 0 : ht.name : "";
                  this.update({ agentSessionId: Le, status: ue, subStatus: oe, idleCode: { id: et, name: ft } });
                });
                this.listeners.add(() => we == null ? void 0 : we.stopListen());
              }
              {
                const we = (c = this.SERVICE) === null || c === void 0 ? void 0 : c.aqm.agent.eAgentDNRegistered.listen(({ data: { dn: Le = "" } }) => {
                  this.update({ dn: Le });
                });
                this.listeners.add(() => we == null ? void 0 : we.stopListen());
              }
              {
                const we = (I = this.SERVICE) === null || I === void 0 ? void 0 : I.aqm.agent.eAgentChannelReloginSuccess.listen((Le) => {
                  this.emit("eAgentChannelReloginSuccess", Le);
                });
                this.listeners.add(() => we == null ? void 0 : we.stopListen());
              }
              {
                const we = (be = this.SERVICE) === null || be === void 0 ? void 0 : be.aqm.agent.eAgentChannelStateChanged.listen((Le) => {
                  this.emit("eAgentChannelStateChanged", Le);
                });
                this.listeners.add(() => we == null ? void 0 : we.stopListen());
              }
            }
          }
          unsubscribeSelfDataEvents() {
            this.listeners.forEach((t) => t()), this.listeners.clear();
          }
          stateChange(t) {
            var s, b, c;
            return n(this, void 0, void 0, function* () {
              if (this.checkService()) return g.AssertUtils.check(S.validatePropValueNotNullAndEmpty(t.state), "stateChange", "state is null or empty"), g.AssertUtils.check(((s = t.state) === null || s === void 0 ? void 0 : s.toLowerCase()) === "available" || ((b = t.state) === null || b === void 0 ? void 0 : b.toLowerCase()) === "idle", "stateChange", "state is not Available or Idle"), g.AssertUtils.check(S.validatePropValueNotNullAndEmpty(t.auxCodeIdArray), "stateChange", "auxCodeIdArray is null or empty"), (c = this.SERVICE) === null || c === void 0 ? void 0 : c.aqm.agent.stateChange({ data: t });
            });
          }
          stateChangeV2(t) {
            var s;
            return n(this, void 0, void 0, function* () {
              if (this.checkService()) return g.AssertUtils.check(S.validatePropValueNotNullAndEmpty(t.state), "stateChange", "state is null or empty"), g.AssertUtils.check(S.validatePropValueNotNullAndEmpty(t.auxCodeId), "stateChange", "auxCodeId is null or empty"), g.AssertUtils.check(S.validateStateChannelType(t.channelType), "stateChange", "channelType is null or empty or invalid"), (s = this.SERVICE) === null || s === void 0 ? void 0 : s.aqm.agent.stateChangeV2({ data: t });
              z.info("stateChangeV2 - Service is not available");
            });
          }
          mockOutdialAniList() {
            var t, s;
            return n(this, void 0, void 0, function* () {
              if (this.checkService()) return ((t = this.SERVICE) === null || t === void 0 ? void 0 : t.aqm.agent.mockOutdialAniList) && ((s = this.SERVICE) === null || s === void 0 ? void 0 : s.aqm.agent.mockOutdialAniList());
            });
          }
          fetchAddressBooks() {
            var t, s;
            return n(this, void 0, void 0, function* () {
              if (this.checkService()) return ((t = this.SERVICE) === null || t === void 0 ? void 0 : t.aqm.agent.fetchAddressBooks) && ((s = this.SERVICE) === null || s === void 0 ? void 0 : s.aqm.agent.fetchAddressBooks());
            });
          }
          changeAgentState(t, s) {
            var b;
            return n(this, void 0, void 0, function* () {
              if (this.checkService()) return g.AssertUtils.check(S.validateUUID(t), "changeAgentState", "orgId is not a valid UUID"), S.validateChangeAgentStateType(s, "changeAgentState"), (b = this.SERVICE) === null || b === void 0 ? void 0 : b.aqm.supervisor.changeAgentState({ orgId: t, data: s });
            });
          }
          fetchAgentIdleCodes(t, s) {
            var b;
            return n(this, void 0, void 0, function* () {
              if (this.checkService()) return g.AssertUtils.check(S.validateUUID(t), "fetchAgentIdleCodes", "orgId is not a valid UUID"), g.AssertUtils.check(S.validateUUID(s), "fetchAgentIdleCodes", "agentId is not a valid UUID"), yield (b = this.SERVICE) === null || b === void 0 ? void 0 : b.abs.fetchAgentIdleCodes({ orgId: t, agentId: s });
            });
          }
          fetchOrganizationIdleCodes(t) {
            var s;
            return n(this, void 0, void 0, function* () {
              if (this.checkService()) return g.AssertUtils.check(S.validateUUID(t), "fetchOrganizationIdleCodes", "orgId is not a valid UUID"), yield (s = this.SERVICE) === null || s === void 0 ? void 0 : s.abs.fetchIdleCodes({ orgId: t, accessType: "ALL" });
            });
          }
          addEventListener(t, s) {
            this.checkService() && this.emitter.on(t, s);
          }
          removeEventListener(t, s) {
            this.checkService() && this.emitter.off(t, s);
          }
          removeAllEventListeners() {
            r()(this.emitter);
          }
        }
        const k = K(z, "[AgentInfo JSAPI] =>");
        var P = function(p, t, s, b) {
          return new (s || (s = Promise))(function(c, I) {
            function be(ue) {
              try {
                Le(b.next(ue));
              } catch (oe) {
                I(oe);
              }
            }
            function we(ue) {
              try {
                Le(b.throw(ue));
              } catch (oe) {
                I(oe);
              }
            }
            function Le(ue) {
              var oe;
              ue.done ? c(ue.value) : (oe = ue.value, oe instanceof s ? oe : new s(function(et) {
                et(oe);
              })).then(be, we);
            }
            Le((b = b.apply(p, [])).next());
          });
        };
        const G = 1e3 / 30;
        class B {
          waitUntil(t) {
            return P(this, void 0, void 0, function* () {
              typeof t == "function" && (yield new Promise((s) => setTimeout(s, G)), !t() && (yield this.waitUntil(t)));
            });
          }
          constructor(t) {
            this.initEventType = {}, this.emitter = _t()(), this.logger = t.logger, this.agentxSERVICE = t.SERVICE;
          }
          checkService(t) {
            return P(this, void 0, void 0, function* () {
              t ? (t.isInited || (this.logger.warn("SERVICE is not inited. Awaiting it's initAgentxServices(...)..."), yield this.waitUntil(() => t.isInited)), this.logger.info("SERVICE is inited. Continuing..."), this.emit("inited")) : this.logger.error("SERVICE is not defiend...");
            });
          }
          emit(t, ...s) {
            this.emitter.emit(t, ...s);
          }
          init(t) {
            return P(this, void 0, void 0, function* () {
              this.agentxSERVICE ? yield this.checkService(this.agentxSERVICE) : this.logger.error("SERVICE is not defined..."), this.initEventType.widgetName = t.widgetName, this.initEventType.widgetProvider = t.widgetProvider, this.publishEvent("agentx-js-sdk-init");
            });
          }
          registerCrmConnector(t) {
            if (window.self !== window.top) {
              this.initEventType.crmPlatform = t.crmPlatform, this.initEventType.crmConnectorProvider = t.crmConnectorProvider || "Cisco", z.info(`CRm Connector registered through JS SDK... [crmPlatform: ${this.initEventType.crmPlatform}, widgetProvider: ${this.initEventType.crmConnectorProvider}]  `);
              const s = document.referrer;
              z.info("This Desktop is loaded inside an iframe.", s), this.publishEvent("agentx-js-sdk-register-crm-connector");
            } else z.warn("This Desktop is not loaded inside an iframe. CRM Connector is not registered.");
          }
          publishEvent(t) {
            const { crmPlatform: s, crmConnectorProvider: b, widgetName: c, widgetProvider: I } = this.initEventType, be = Object.assign({}, ...Object.entries(this.initEventType).map(([we, Le]) => Le ? { [we]: Le } : {}));
            this.logger.info("initEvent", be), z.info(`Publishing js sdk init ${t} event : [widgetName: ${c}, widgetProvider: ${I}, crmPlatform: ${s}, crmConnectorProvider: ${b}]`), this.agentxSERVICE && this.agentxSERVICE.isInited && this.agentxSERVICE.webexMetrics && (z.info(`tracking behavioral for ${t} event `), this.agentxSERVICE.webexMetrics.trackBehavioralEvent(t, Object.assign({}, be)));
          }
          cleanup() {
            this.agentxSERVICE = void 0, this.emit("cleaned"), this.logger.info("Cleaned");
          }
          get clientLocale() {
            return window.navigator.languages !== void 0 ? window.navigator.languages[0] : window.navigator.language;
          }
          addEventListener(t, s) {
            this.emitter.on(t, s);
          }
          removeEventListener(t, s) {
            this.emitter.off(t, s);
          }
        }
        const X = K(z, "[Config JSAPI] =>");
        var le = function(p, t, s, b) {
          return new (s || (s = Promise))(function(c, I) {
            function be(ue) {
              try {
                Le(b.next(ue));
              } catch (oe) {
                I(oe);
              }
            }
            function we(ue) {
              try {
                Le(b.throw(ue));
              } catch (oe) {
                I(oe);
              }
            }
            function Le(ue) {
              var oe;
              ue.done ? c(ue.value) : (oe = ue.value, oe instanceof s ? oe : new s(function(et) {
                et(oe);
              })).then(be, we);
            }
            Le((b = b.apply(p, [])).next());
          });
        };
        class ce {
          checkService() {
            return this.serviceChecker.check(this.SERVICE);
          }
          constructor(t) {
            this.logger = t.logger, this.aqmEvents = t.aqmEvents, this.serviceChecker = t.serviceChecker;
          }
          init(t) {
            t && (this.SERVICE = t), this.checkService() && (this.aqmEvents.init({ aqmServiceEntity: this.SERVICE.aqm.dialer, aqmServiceEntityString: "SERVICE.aqm.dialer" }), this.logger.info("Inited"));
          }
          cleanup() {
            this.aqmEvents.cleanup(), this.SERVICE = void 0, this.logger.info("Cleaned");
          }
          startOutdial(t) {
            var s;
            return le(this, void 0, void 0, function* () {
              if (this.checkService()) return S.validateDialerTasks(t.data, "startOutdial"), (s = this.SERVICE) === null || s === void 0 ? void 0 : s.aqm.dialer.startOutdial(t);
            });
          }
          previewCampaignAccept(t) {
            var s;
            return le(this, void 0, void 0, function* () {
              if (this.checkService()) return S.validatePreviewCampaignPayload(t.data, "previewCampaignAccept"), (s = this.SERVICE) === null || s === void 0 ? void 0 : s.aqm.dialer.acceptPreviewContact(t);
            });
          }
          previewCampaignSkip(t) {
            var s;
            return le(this, void 0, void 0, function* () {
              if (this.checkService()) return S.validatePreviewCampaignPayload(t.data, "previewCampaignSkip"), (s = this.SERVICE) === null || s === void 0 ? void 0 : s.aqm.dialer.skipPreviewContact(t);
            });
          }
          removePreviewContact(t) {
            var s;
            return le(this, void 0, void 0, function* () {
              if (this.checkService()) return S.validatePreviewCampaignPayload(t.data, "removePreviewContact"), (s = this.SERVICE) === null || s === void 0 ? void 0 : s.aqm.dialer.removePreviewContact(t);
            });
          }
          updateCadVariables(t) {
            var s, b, c, I, be;
            return le(this, void 0, void 0, function* () {
              if (this.checkService()) return g.AssertUtils.check(S.validateUUID(t.interactionId), "updateCadVariables", "interactionId is not valid UUID"), g.AssertUtils.check(S.validatePropValueNotNullAndEmpty((b = (s = t.data) === null || s === void 0 ? void 0 : s.attributes) === null || b === void 0 ? void 0 : b.key), "updateCadVariables", "attributes.key is not valid"), g.AssertUtils.check(S.validatePropValueNotNullAndEmpty((I = (c = t.data) === null || c === void 0 ? void 0 : c.attributes) === null || I === void 0 ? void 0 : I.value), "updateCadVariables", "attributes.value is not valid"), t.secureCad && t.secureCad.forEach((we) => {
                g.AssertUtils.check(S.validatePropValueNotNullAndEmpty(we), "updateCadVariables", "secureCad is not valid");
              }), t.keyId && g.AssertUtils.check(S.validateUUID(t.keyId), "updateCadVariables", "keyId is not valid UUID"), t.keyVersion && g.AssertUtils.check(S.validatePropValueNotNullAndEmpty(t.keyVersion), "updateCadVariables", "keyVersion is not valid"), (be = this.SERVICE) === null || be === void 0 ? void 0 : be.aqm.dialer.updateCadVariables(t);
            });
          }
          addEventListener(t, s) {
            this.checkService() && this.aqmEvents.addEventListener(t, s);
          }
          addOnceEventListener(t, s) {
            this.checkService() && this.aqmEvents.addOnceEventListener(t, s);
          }
          removeEventListener(t, s) {
            this.aqmEvents.removeEventListener(t, s);
          }
          removeOnceEventListener(t, s) {
            this.aqmEvents.removeOnceEventListener(t, s);
          }
          removeAllEventListeners() {
            this.aqmEvents.removeAllEventListeners();
          }
        }
        const Q = K(z, "[Dialer JSAPI] =>"), He = K(Q, "[AqmServiceEvents: Dialer] =>");
        class Ye {
          checkService() {
            return this.serviceChecker.check(this.SERVICE);
          }
          constructor(t) {
            this.logger = t.logger, this.serviceChecker = t.serviceChecker;
          }
          init(t) {
            t && (this.SERVICE = t), this.checkService() && this.logger.info("Inited");
          }
          cleanup() {
            this.SERVICE = void 0, this.logger.info("Cleaned");
          }
          createInstance(t) {
            return g.I18N.createService(t);
          }
          createMixin(t) {
            return g.I18N.createMixin(t);
          }
          get DEFAULT_INIT_OPTIONS() {
            var t;
            if (this.checkService()) return (t = this.SERVICE) === null || t === void 0 ? void 0 : t.i18n.DEFAULT_INIT_OPTIONS;
          }
          getMergedInitOptions(...t) {
            return g.I18N.mergeServiceInitOptions(...t);
          }
        }
        const vt = K(z, "[I18N JSAPI] =>");
        class wt {
          constructor(t) {
            this.clientLoggers = /* @__PURE__ */ new Map(), this.logger = t.logger;
          }
          createLogger(t) {
            const s = (0, g.createLogger)(t);
            return this.clientLoggers.set(t, s), this.logger.info(`Client logger created: "${t}"`), s;
          }
          cleanupLogs(t) {
            this.clientLoggers.has(t) && g.Logger.POOL.cleanupPrefixedLogs(t);
          }
          browserDownloadLogsJson(t) {
            this.clientLoggers.has(t) && g.Logger.POOL.browserDownloadPrefixedLogsJson(t);
          }
          browserDownloadLogsText(t) {
            this.clientLoggers.has(t) && g.Logger.POOL.browserDownloadPrefixedLogsText(t);
          }
          getLogsCollection(t) {
            if (this.clientLoggers.has(t)) return g.Logger.POOL.getPrefixedLogsCollection(t);
          }
          getLogsJsonUrl(t) {
            if (this.clientLoggers.has(t)) return g.Logger.POOL.getPrefixedLogsJsonUrl(t);
          }
          getLogsTextUrl(t) {
            if (this.clientLoggers.has(t)) return g.Logger.POOL.getPrefixedLogsTextUrl(t);
          }
        }
        const Ut = K(z, "[Logger JSAPI] =>");
        var lt = function(p, t, s, b) {
          return new (s || (s = Promise))(function(c, I) {
            function be(ue) {
              try {
                Le(b.next(ue));
              } catch (oe) {
                I(oe);
              }
            }
            function we(ue) {
              try {
                Le(b.throw(ue));
              } catch (oe) {
                I(oe);
              }
            }
            function Le(ue) {
              var oe;
              ue.done ? c(ue.value) : (oe = ue.value, oe instanceof s ? oe : new s(function(et) {
                et(oe);
              })).then(be, we);
            }
            Le((b = b.apply(p, [])).next());
          });
        };
        class J {
          checkService() {
            return this.serviceChecker.check(this.SERVICE);
          }
          constructor(t) {
            this.logger = t.logger, this.serviceChecker = t.serviceChecker;
          }
          init(t) {
            t && (this.SERVICE = t), this.checkService() && this.logger.info("[JSAPI] ScheduleCallbackJsApi Initialized");
          }
          cleanup() {
            this.SERVICE = void 0, this.logger.info("Cleaned");
          }
          fetchByAssigneeAgentId(t) {
            var s;
            return lt(this, void 0, void 0, function* () {
              if (!this.checkService()) return;
              const { page: b, assigneeAgent: c, sortBy: I, sortOrder: be } = t.data;
              return S.validateFetchByAssigneeAgentIdType(b, c, "fetchByAssigneeAgentId"), (s = this.SERVICE) === null || s === void 0 ? void 0 : s.aqm.scheduleCallback.fetchByAssigneeAgentId(b, c, I, be);
            });
          }
          fetchByCallbackPhoneNumber(t) {
            var s;
            return lt(this, void 0, void 0, function* () {
              if (!this.checkService()) return;
              const { page: b, phoneNumber: c } = t.data;
              return S.validatefetchByCallbackPhoneNumberType(b, c, "fetchByCallbackPhoneNumber"), (s = this.SERVICE) === null || s === void 0 ? void 0 : s.aqm.scheduleCallback.fetchByCallbackPhoneNumber(b, c);
            });
          }
          createScheduleCallback(t) {
            var s;
            return lt(this, void 0, void 0, function* () {
              if (this.checkService()) return S.validateCreateOrUpdateScheduleCallbackType(t.data, "createScheduleCallback"), (s = this.SERVICE) === null || s === void 0 ? void 0 : s.aqm.scheduleCallback.save(t.data);
            });
          }
          updateCallBackDetails(t) {
            var s;
            return lt(this, void 0, void 0, function* () {
              if (this.checkService()) return S.validateCreateOrUpdateScheduleCallbackType(t.data, "updateCallBackDetails", !0), (s = this.SERVICE) === null || s === void 0 ? void 0 : s.aqm.scheduleCallback.updateCallBackDetails(t.data);
            });
          }
          deleteScheduleCallback(t) {
            var s;
            return lt(this, void 0, void 0, function* () {
              if (!this.checkService()) return;
              const { id: b } = t.data;
              return g.AssertUtils.check(S.validateUUID(b), "deleteScheduleCallback", "id is not a valid UUID"), (s = this.SERVICE) === null || s === void 0 ? void 0 : s.aqm.scheduleCallback.deleteScheduleCallback(b);
            });
          }
          getValidCampaignTimes(t) {
            var s;
            return lt(this, void 0, void 0, function* () {
              if (!this.checkService()) return;
              const { campaignId: b, agentId: c } = t.data;
              return S.validateGetValidCampaignTimesType(b, c, "getValidCampaignTimes"), (s = this.SERVICE) === null || s === void 0 ? void 0 : s.aqm.scheduleCallback.getValidCampaignTimes(b, c);
            });
          }
        }
        const E = K(z, "[SCHEDULE CALLBACK JSAPI] =>");
        class ne {
          checkService() {
            return this.serviceChecker.check(this.SERVICE);
          }
          constructor(t) {
            this.logger = t.logger, this.aqmEvents = t.aqmEvents, this.serviceChecker = t.serviceChecker;
          }
          init(t) {
            t && (this.SERVICE = t), this.checkService() && (this.aqmEvents.init({ aqmServiceEntity: this.SERVICE.aqm.screenpop, aqmServiceEntityString: "SERVICE.aqm.screenpop" }), this.logger.info("Inited"));
          }
          cleanup() {
            this.aqmEvents.cleanup(), this.SERVICE = void 0, this.logger.info("Cleaned");
          }
          addEventListener(t, s) {
            this.checkService() && this.aqmEvents.addEventListener(t, s);
          }
          addOnceEventListener(t, s) {
            this.checkService() && this.aqmEvents.addOnceEventListener(t, s);
          }
          removeEventListener(t, s) {
            this.aqmEvents.removeEventListener(t, s);
          }
          removeOnceEventListener(t, s) {
            this.aqmEvents.removeOnceEventListener(t, s);
          }
          removeAllEventListeners() {
            this.aqmEvents.removeAllEventListeners();
          }
        }
        const ie = K(z, "[ScreenPop JSAPI] =>"), se = K(ie, "[AqmServiceEvents: ScreenPop] =>");
        class he {
          checkService() {
            return this.serviceChecker.check(this.SERVICE);
          }
          constructor(t) {
            this.logger = t.logger, this.serviceChecker = t.serviceChecker;
          }
          init(t) {
            t && (this.SERVICE = t), this.checkService() && this.logger.info("Inited");
          }
          cleanup() {
            this.SERVICE = void 0, this.logger.info("Cleaned");
          }
          listenKeyPress(...t) {
            var s;
            this.checkService() && ((s = this.SERVICE) === null || s === void 0 || s.shortcut.event.listenKeyPress(...t));
          }
          listenKeyConflict(...t) {
            var s;
            this.checkService() && ((s = this.SERVICE) === null || s === void 0 || s.shortcut.event.listenKeyConflict(...t));
          }
          listenConflictResolved(...t) {
            var s;
            this.checkService() && ((s = this.SERVICE) === null || s === void 0 || s.shortcut.event.listenConflictResolved(...t));
          }
          register(...t) {
            var s;
            this.checkService() && ((s = this.SERVICE) === null || s === void 0 || s.shortcut.register(...t));
          }
          unregisterKeys(...t) {
            var s;
            this.checkService() && ((s = this.SERVICE) === null || s === void 0 || s.shortcut.unregisterKeys(...t));
          }
          getRegisteredKeys() {
            var t;
            if (this.checkService()) return (t = this.SERVICE) === null || t === void 0 ? void 0 : t.shortcut.getRegisteredKeys();
          }
          get DEFAULT_SHORTCUT_KEYS() {
            var t;
            return (t = this.SERVICE) === null || t === void 0 ? void 0 : t.shortcut.DEFAULT_SHORTCUT_KEYS;
          }
          get MODIFIERS() {
            var t;
            return (t = this.SERVICE) === null || t === void 0 ? void 0 : t.shortcut.MODIFIERS;
          }
          get REGISTERED_KEYS() {
            var t;
            return (t = this.SERVICE) === null || t === void 0 ? void 0 : t.shortcut.REGISTERED_KEYS;
          }
        }
        const Ie = K(z, "[ShortcutKey JSAPI] =>");
        var T = function(p, t, s, b) {
          return new (s || (s = Promise))(function(c, I) {
            function be(ue) {
              try {
                Le(b.next(ue));
              } catch (oe) {
                I(oe);
              }
            }
            function we(ue) {
              try {
                Le(b.throw(ue));
              } catch (oe) {
                I(oe);
              }
            }
            function Le(ue) {
              var oe;
              ue.done ? c(ue.value) : (oe = ue.value, oe instanceof s ? oe : new s(function(et) {
                et(oe);
              })).then(be, we);
            }
            Le((b = b.apply(p, [])).next());
          });
        };
        const R = 1e3 / 30;
        class x {
          waitUntil(t) {
            return T(this, void 0, void 0, function* () {
              typeof t == "function" && (yield new Promise((s) => setTimeout(s, R)), !t() && (yield this.waitUntil(t)));
            });
          }
          checkService() {
            var t, s, b, c, I;
            return T(this, void 0, void 0, function* () {
              window.wxcc && (!((t = window.wxcc) === null || t === void 0) && t.rtdwc) ? (!((b = (s = window.wxcc) === null || s === void 0 ? void 0 : s.rtdwc) === null || b === void 0) && b.error && (this.logger.error("RTDWC initialization failed. Awaiting Websocket connection to establish", (I = (c = window.wxcc) === null || c === void 0 ? void 0 : c.rtdwc) === null || I === void 0 ? void 0 : I.error), yield this.waitUntil(() => {
                var be, we;
                return !(!((we = (be = window.wxcc) === null || be === void 0 ? void 0 : be.rtdwc) === null || we === void 0) && we.error);
              })), this.logger.info("Websocket connection established successfully. Continue to subscribe...")) : this.logger.error("issue in loading rtdwc");
            });
          }
          constructor(t) {
            this.emitter = _t()(), this.logger = t.logger;
          }
          init() {
            return T(this, void 0, void 0, function* () {
              yield this.checkService(), this.logger.info("rtdwc initialized");
            });
          }
          subscribe({ datasetName: t, update: s, error: b }) {
            var c, I;
            return T(this, void 0, void 0, function* () {
              return yield this.checkService(), (I = (c = window.wxcc) === null || c === void 0 ? void 0 : c.rtdwc) === null || I === void 0 ? void 0 : I.subscribe({ datasetName: t, update: s, error: b });
            });
          }
        }
        const F = K(z, "[RTDWC JSAPI] =>");
        var H = function(p, t, s, b) {
          return new (s || (s = Promise))(function(c, I) {
            function be(ue) {
              try {
                Le(b.next(ue));
              } catch (oe) {
                I(oe);
              }
            }
            function we(ue) {
              try {
                Le(b.throw(ue));
              } catch (oe) {
                I(oe);
              }
            }
            function Le(ue) {
              var oe;
              ue.done ? c(ue.value) : (oe = ue.value, oe instanceof s ? oe : new s(function(et) {
                et(oe);
              })).then(be, we);
            }
            Le((b = b.apply(p, [])).next());
          });
        };
        const re = "interactionId is not valid UUID";
        class Ne {
          checkService() {
            return this.serviceChecker.check(this.SERVICE);
          }
          constructor(t) {
            this.logger = t.logger, this.aqmEvents = t.aqmEvents, this.serviceChecker = t.serviceChecker;
          }
          init(t) {
            t && (this.SERVICE = t), this.checkService() && (this.aqmEvents.init({ aqmServiceEntity: this.SERVICE.aqm.supervisor, aqmServiceEntityString: "SERVICE.aqm.supervisor" }), this.logger.info("[JSAPI] Monitoring Inited"));
          }
          cleanup() {
            this.aqmEvents.cleanup(), this.SERVICE = void 0, this.logger.info("Cleaned");
          }
          startMonitoring(t) {
            var s, b;
            return H(this, void 0, void 0, function* () {
              if (this.checkService()) return S.validateMonitoringRequest(t.data, "startMonitoring"), (b = (s = this.SERVICE) === null || s === void 0 ? void 0 : s.aqm.supervisor) === null || b === void 0 ? void 0 : b.startMonitoring(t);
            });
          }
          endMonitoring(t) {
            var s, b;
            return H(this, void 0, void 0, function* () {
              if (this.checkService()) return g.AssertUtils.check(S.validateUUID(t.interactionId), "endMonitoring", re), (b = (s = this.SERVICE) === null || s === void 0 ? void 0 : s.aqm.supervisor) === null || b === void 0 ? void 0 : b.endMonitoring(t);
            });
          }
          holdMonitoring(t) {
            var s, b;
            return H(this, void 0, void 0, function* () {
              if (this.checkService()) return g.AssertUtils.check(S.validateUUID(t.interactionId), "holdMonitoring", re), (b = (s = this.SERVICE) === null || s === void 0 ? void 0 : s.aqm.supervisor) === null || b === void 0 ? void 0 : b.holdMonitoring(t);
            });
          }
          unHoldMonitoring(t) {
            var s, b;
            return H(this, void 0, void 0, function* () {
              if (this.checkService()) return g.AssertUtils.check(S.validateUUID(t.interactionId), "unHoldMonitoring", re), (b = (s = this.SERVICE) === null || s === void 0 ? void 0 : s.aqm.supervisor) === null || b === void 0 ? void 0 : b.unHoldMonitoring(t);
            });
          }
          bargeIn(t) {
            var s, b;
            return H(this, void 0, void 0, function* () {
              if (this.checkService()) return g.AssertUtils.check(S.validateUUID(t.interactionId), "bargeIn", re), (b = (s = this.SERVICE) === null || s === void 0 ? void 0 : s.aqm.supervisor) === null || b === void 0 ? void 0 : b.bargeIn(t);
            });
          }
          addEventListener(t, s) {
            this.checkService() && this.aqmEvents.addEventListener(t, s);
          }
          addOnceEventListener(t, s) {
            this.checkService() && this.aqmEvents.addOnceEventListener(t, s);
          }
          removeEventListener(t, s) {
            this.aqmEvents.removeEventListener(t, s);
          }
          removeOnceEventListener(t, s) {
            this.aqmEvents.removeOnceEventListener(t, s);
          }
          removeAllEventListeners() {
            this.aqmEvents.removeAllEventListeners();
          }
        }
        const Fe = K(z, "[Call Monitoring JSAPI] =>"), pt = K(Fe, "[AqmServiceEvents: Call Monitoring] =>");
        class dt {
          checkService() {
            return this.serviceChecker.check(this.SERVICE);
          }
          constructor(t) {
            this.logger = t.logger, this.serviceChecker = t.serviceChecker;
          }
          init(t) {
            t && (this.SERVICE = t), this.checkService() && this.logger.info("Inited");
          }
          cleanup() {
            this.SERVICE = void 0, this.logger.info("Cleaned");
          }
          trackBehavioralEvent(...t) {
            var s;
            if (this.checkService()) try {
              z.info("[webexMetrics Internal JSAPI] => event=trackBehavioralEvent for", t), (s = this.SERVICE) === null || s === void 0 || s.webexMetrics.trackBehavioralEvent(...t);
            } catch (b) {
              z.error("[webexMetrics Internal JSAPI] => event=trackBehavioralEvent Error", b);
            }
          }
        }
        const ct = K(z, "[webexMetrics Internal JSAPI] =>");
        var Ht = function(p, t, s, b) {
          return new (s || (s = Promise))(function(c, I) {
            function be(ue) {
              try {
                Le(b.next(ue));
              } catch (oe) {
                I(oe);
              }
            }
            function we(ue) {
              try {
                Le(b.throw(ue));
              } catch (oe) {
                I(oe);
              }
            }
            function Le(ue) {
              var oe;
              ue.done ? c(ue.value) : (oe = ue.value, oe instanceof s ? oe : new s(function(et) {
                et(oe);
              })).then(be, we);
            }
            Le((b = b.apply(p, [])).next());
          });
        };
        class Ze {
          checkService() {
            return this.serviceChecker.check(this.SERVICE);
          }
          constructor(t) {
            this.logger = t.logger, this.aqmEvents = t.aqmEvents, this.serviceChecker = t.serviceChecker;
          }
          init(t) {
            t && (this.SERVICE = t), this.checkService() && (this.aqmEvents.init({ aqmServiceEntity: this.SERVICE.aqm.agent, aqmServiceEntityString: "SERVICE.aqm.agent" }), this.logger.info("[JSAPI] Logout Inited"));
          }
          cleanup() {
            this.aqmEvents.cleanup(), this.SERVICE = void 0, this.logger.info("Cleaned");
          }
          desktopLogout(t) {
            var s, b;
            return Ht(this, void 0, void 0, function* () {
              if (!this.checkService()) return;
              const c = yield mn.actions.getTaskMap();
              if ((c == null ? void 0 : c.size) !== 0) throw new Error("You cannot sign out now because you have active conversations. Complete them and try again.");
              return t.data.logoutReason !== void 0 && g.AssertUtils.check(S.validatePropValueNotNullAndEmpty(t.data.logoutReason), "desktopLogout", "logoutReason is null or empty"), t.data.logoutReason !== void 0 && g.AssertUtils.check(t.data.logoutReason.toLowerCase() === "user requested logout" || t.data.logoutReason.toLowerCase() === "inactivity Logout", "desktopLogout", "logoutReason should be either 'User requested logout' or 'Inactivity Logout'"), (b = (s = this.SERVICE) === null || s === void 0 ? void 0 : s.aqm.agent) === null || b === void 0 ? void 0 : b.logout(t);
            });
          }
          signoutAgent(t) {
            var s, b;
            return Ht(this, void 0, void 0, function* () {
              if (this.checkService()) try {
                return z.info("[App:TPW] event=signoutAgentBySupervisor for agent ", t.data.agentId), g.AssertUtils.check(S.validateUUID(t.orgId), "signoutAgent", "orgId is not a valid UUID"), g.AssertUtils.check(S.validateUUID(t.data.agentId), "signoutAgent", "agentId is not a valid UUID"), g.AssertUtils.check(S.validatePropValueNotNullAndEmpty(t.data.logoutReason), "signoutAgent", "logoutReason is null or empty"), (b = (s = this.SERVICE) === null || s === void 0 ? void 0 : s.aqm.supervisor) === null || b === void 0 ? void 0 : b.signoutAgent(t);
              } catch (c) {
                return void z.error("[App:TPW] event=signoutAgentBySupervisorFailed for agent ", t.data.agentId, c);
              }
            });
          }
          addEventListener(t, s) {
            this.checkService() && this.aqmEvents.addEventListener(t, s);
          }
          addOnceEventListener(t, s) {
            this.checkService() && this.aqmEvents.addOnceEventListener(t, s);
          }
          removeEventListener(t, s) {
            this.aqmEvents.removeEventListener(t, s);
          }
          removeOnceEventListener(t, s) {
            this.aqmEvents.removeOnceEventListener(t, s);
          }
          removeAllEventListeners() {
            this.aqmEvents.removeAllEventListeners();
          }
        }
        const xt = K(z, "[Station Logout JSAPI] =>"), tn = K(xt, "[AqmServiceEvents: Call Monitoring] =>");
        class bn {
          checkService() {
            return this.serviceChecker.check(this.SERVICE);
          }
          constructor(t) {
            this.logger = t.logger, this.aqmEvents = t.aqmEvents, this.serviceChecker = t.serviceChecker;
          }
          init(t) {
            var s, b;
            t && (this.SERVICE = t), this.checkService() ? (this.aqmEvents.init({ aqmServiceEntity: this.SERVICE.aqm.aiAssistant, aqmServiceEntityString: "SERVICE.aqm.aiAssistant" }), this.logger.info("AiAssistantJsApi inited.")) : (b = (s = this.logger).warn) === null || b === void 0 || b.call(s, "Service check failed");
          }
          cleanup() {
            this.aqmEvents.cleanup(), this.SERVICE = void 0, this.logger.info("Cleaned AiAssistantJsApi.");
          }
          addEventListener(t, s) {
            this.checkService() && this.aqmEvents.addEventListener(t, s);
          }
          addOnceEventListener(t, s) {
            this.checkService() && this.aqmEvents.addOnceEventListener(t, s);
          }
          removeEventListener(t, s) {
            this.aqmEvents.removeEventListener(t, s);
          }
          removeOnceEventListener(t, s) {
            this.aqmEvents.removeOnceEventListener(t, s);
          }
          removeAllEventListeners() {
            this.aqmEvents.removeAllEventListeners();
          }
        }
        const fn = K(z, "[AI Assistant JSAPI] =>"), gn = K(fn, "[AqmServiceEvents: AiAssistant] =>");
        class ln {
          checkService() {
            return this.serviceChecker.check(this.SERVICE);
          }
          constructor(t) {
            this.logger = t.logger, this.aqmEvents = t.aqmEvents, this.serviceChecker = t.serviceChecker;
          }
          init(t) {
            var s, b;
            t && (this.SERVICE = t), this.checkService() ? (this.aqmEvents.init({ aqmServiceEntity: this.SERVICE.dataNotifs.aiAssistant, aqmServiceEntityString: "SERVICE.dataNotifs.aiAssistant" }), this.logger.info("AiAssistantJsApi inited.")) : (b = (s = this.logger).warn) === null || b === void 0 || b.call(s, "Service check failed");
          }
          cleanup() {
            this.aqmEvents.cleanup(), this.SERVICE = void 0, this.logger.info("Cleaned AiAssistantJsApi.");
          }
          addEventListener(t, s) {
            this.checkService() && this.aqmEvents.addEventListener(t, s);
          }
          addOnceEventListener(t, s) {
            this.checkService() && this.aqmEvents.addOnceEventListener(t, s);
          }
          removeEventListener(t, s) {
            this.aqmEvents.removeEventListener(t, s);
          }
          removeOnceEventListener(t, s) {
            this.aqmEvents.removeOnceEventListener(t, s);
          }
          removeAllEventListeners() {
            this.aqmEvents.removeAllEventListeners();
          }
        }
        const Wt = K(z, "[AI Assistant JSAPI] =>"), zt = K(Wt, "[AqmServiceEvents: AiAssistant] =>");
        var It = function(p, t, s, b) {
          return new (s || (s = Promise))(function(c, I) {
            function be(ue) {
              try {
                Le(b.next(ue));
              } catch (oe) {
                I(oe);
              }
            }
            function we(ue) {
              try {
                Le(b.throw(ue));
              } catch (oe) {
                I(oe);
              }
            }
            function Le(ue) {
              var oe;
              ue.done ? c(ue.value) : (oe = ue.value, oe instanceof s ? oe : new s(function(et) {
                et(oe);
              })).then(be, we);
            }
            Le((b = b.apply(p, [])).next());
          });
        };
        class nn {
          checkService() {
            return this.serviceChecker.check(this.SERVICE);
          }
          constructor(t) {
            this.logger = t.logger, this.serviceChecker = t.serviceChecker;
          }
          init(t) {
            t && (this.SERVICE = t), this.checkService() && this.logger.info("[JSAPI] Initialized");
          }
          cleanup() {
            this.SERVICE = void 0, this.logger.info("Cleaned");
          }
          fetchTasks(t) {
            var s, b;
            return It(this, void 0, void 0, function* () {
              if (this.checkService()) return g.AssertUtils.check(S.validatePropValueNotNullAndEmpty(t.startTime), "fetchTasks", "startTime is null or empty"), g.AssertUtils.check(S.validatePropValueNotNullAndEmpty(t.endTime), "fetchTasks", "endTime is null or empty"), g.AssertUtils.check(S.validatePropValueNotNullAndEmpty(t.pageNumber), "fetchTasks", "pageNumber is null or empty"), g.AssertUtils.check(S.validateNumber(t.startTime), "fetchTasks", "startTime is not a valid time"), g.AssertUtils.check(S.validateNumber(t.endTime), "fetchTasks", "endTime is not a valid time"), g.AssertUtils.check(S.validateNumber(t.pageNumber), "fetchTasks", "pageNumber is not a valid number"), (b = (s = this.SERVICE) === null || s === void 0 ? void 0 : s.qmw) === null || b === void 0 ? void 0 : b.fetchTasks(t);
            });
          }
          fetchCapture(t) {
            var s, b;
            return It(this, void 0, void 0, function* () {
              if (this.checkService()) return g.AssertUtils.check(S.validateUUID(t.taskId), "fetchCapture", "taskId is not a valid UUID"), (b = (s = this.SERVICE) === null || s === void 0 ? void 0 : s.qmw) === null || b === void 0 ? void 0 : b.fetchCapture(t);
            });
          }
        }
        const sn = K(z, "[PI JSAPI] =>");
        class wn {
          checkService() {
            return this.serviceChecker.check(this.SERVICE);
          }
          constructor(t) {
            this.logger = t.logger, this.serviceChecker = t.serviceChecker;
          }
          init(t) {
            t && (this.SERVICE = t), this.checkService() && this.logger.info("[JSAPI] AgentConfigJsApi Initialized");
          }
          cleanup() {
            this.SERVICE = void 0, this.logger.info("Cleaned");
          }
          fetchPaginatedAuxCodes(t) {
            var s, b, c, I, be, we;
            return c = this, I = void 0, we = function* () {
              if (this.checkService()) return S.validateAuxCodePayload(t, "fetchPaginatedAuxCodes"), yield (b = (s = this.SERVICE) === null || s === void 0 ? void 0 : s.abs) === null || b === void 0 ? void 0 : b.fetchPaginatedAuxCodes(t);
            }, new ((be = void 0) || (be = Promise))(function(Le, ue) {
              function oe(ft) {
                try {
                  ht(we.next(ft));
                } catch (kt) {
                  ue(kt);
                }
              }
              function et(ft) {
                try {
                  ht(we.throw(ft));
                } catch (kt) {
                  ue(kt);
                }
              }
              function ht(ft) {
                var kt;
                ft.done ? Le(ft.value) : (kt = ft.value, kt instanceof be ? kt : new be(function(Bt) {
                  Bt(kt);
                })).then(oe, et);
              }
              ht((we = we.apply(c, I || [])).next());
            });
          }
        }
        const cn = K(z, "[AGENT CONFIG JSAPI] =>"), mn = (() => {
          AGENTX_SERVICE ? z.info('Found global "AGENTX_SERVICE"!') : z.error('Missed global "AGENTX_SERVICE"...');
          const p = (t = AGENTX_SERVICE, new B({ logger: X, SERVICE: t }));
          var t;
          const s = new wt({ logger: Ut }), b = new he({ logger: Ie, serviceChecker: Ee({ logger: Ie }) }), c = new C({ logger: N, serviceChecker: Ee({ logger: N }) }), I = new h({ logger: k, serviceChecker: Ee({ logger: k }) }), be = new bt({ logger: mt, serviceChecker: Ee({ logger: mt }), aqmEvents: A({ logger: At }) }), we = new ce({ logger: Q, aqmEvents: A({ logger: He }), serviceChecker: Ee({ logger: Q }) }), Le = new Ne({ logger: Fe, aqmEvents: A({ logger: pt }), serviceChecker: Ee({ logger: Fe }) }), ue = new ne({ logger: ie, aqmEvents: A({ logger: se }), serviceChecker: Ee({ logger: ie }) }), oe = new Ze({ logger: xt, aqmEvents: A({ logger: tn }), serviceChecker: Ee({ logger: xt }) }), et = new bn({ logger: fn, aqmEvents: A({ logger: gn }), serviceChecker: Ee({ logger: fn }) }), ht = new ln({ logger: Wt, aqmEvents: A({ logger: zt }), serviceChecker: Ee({ logger: Wt }) }), ft = new J({ logger: E, serviceChecker: Ee({ logger: E }) }), kt = new Ye({ logger: vt, serviceChecker: Ee({ logger: vt }) }), Bt = new x({ logger: F });
          Bt.init();
          const jt = new nn({ logger: sn, serviceChecker: Ee({ logger: sn }) }), Gt = new wn({ logger: cn, serviceChecker: Ee({ logger: cn }) }), rn = new dt({ logger: ct, serviceChecker: Ee({ logger: ct }) });
          return p.addEventListener("inited", () => {
            be.init(AGENTX_SERVICE), I.init(AGENTX_SERVICE), we.init(AGENTX_SERVICE), Le.init(AGENTX_SERVICE), ue.init(AGENTX_SERVICE), oe.init(AGENTX_SERVICE), et.init(AGENTX_SERVICE), ht.init(AGENTX_SERVICE), ft.init(AGENTX_SERVICE), jt.init(AGENTX_SERVICE), b.init(AGENTX_SERVICE), c.init(AGENTX_SERVICE), kt.init(AGENTX_SERVICE), Gt.init(AGENTX_SERVICE), rn.init(AGENTX_SERVICE);
          }), p.addEventListener("cleaned", () => {
            be.cleanup(), I.cleanup(), we.cleanup(), Le.cleanup(), ue.cleanup(), oe.cleanup(), et.cleanup(), ht.cleanup(), ft.cleanup(), jt.cleanup(), b.cleanup(), kt.cleanup(), c.cleanup(), Gt.cleanup(), rn.cleanup();
          }), { config: p, logger: s, monitoring: Le, shortcutKey: b, actions: c, agentContact: be, agentStateInfo: I, dialer: we, screenpop: ue, aiAssistant: et, dataNotifsAiAssistant: ht, i18n: kt, rtdwc: Bt, postInteractions: jt, logout: oe, agentConfigJsApi: Gt, webexMetricsInternal: rn, scheduleCallback: ft };
        })();
      })(), ii;
    })());
  })(ti)), ti.exports;
}
var di = es();
function ni(Qt, Zt) {
  console.log("[CallTagListener]", Qt, Zt || "");
}
async function ts() {
  const Qt = await di.Desktop.actions.getTaskMap(), On = Object.values(Qt || {}).find(
    (en) => en && en.interactionId && !en.isTerminated
  );
  if (!On)
    throw new Error("No active interaction found");
  return On.interactionId;
}
async function ns(Qt) {
  const Zt = await ts();
  await di.Desktop.dialer.updateCadVariables({
    interactionId: Zt,
    data: {
      Call_Tags: Qt
    }
  }), ni("Updated Call_Tags successfully", { interactionId: Zt, tagValue: Qt });
}
async function is() {
  try {
    di.Desktop.config.init(), ni("Desktop SDK initialized");
  } catch (Qt) {
    console.error("[CallTagListener] Failed to initialize SDK:", Qt);
    return;
  }
  window.addEventListener("message", async (Qt) => {
    try {
      const Zt = Qt.data;
      if (!Zt || Zt.type !== "SET_CALL_TAG")
        return;
      ni("Received tag message", Zt), await ns(Zt.value);
    } catch (Zt) {
      console.error("[CallTagListener] Failed to update Call_Tags:", Zt);
    }
  }), ni("Message listener ready");
}
is();
