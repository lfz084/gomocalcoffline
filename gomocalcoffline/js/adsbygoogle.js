(function(sttc) {
	var q, aa;

	function ba(a) { var b = 0; return function() { return b < a.length ? { done: !1, value: a[b++] } : { done: !0 } } }
	var ca = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) { if (a == Array.prototype || a == Object.prototype) return a;
		a[b] = c.value; return a };

	function ea(a) { a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global]; for (var b = 0; b < a.length; ++b) { var c = a[b]; if (c && c.Math == Math) return c } throw Error("Cannot find global object"); }
	var fa = ea(this),
		ia = "function" === typeof Symbol && "symbol" === typeof Symbol("x"),
		t = {},
		ja = {};

	function u(a, b, c) { if (!c || null != a) { c = ja[b]; if (null == c) return a[b];
			c = a[c]; return void 0 !== c ? c : a[b] } }

	function v(a, b, c) { if (b) a: { var d = a.split(".");a = 1 === d.length; var e = d[0],
				f;!a && e in t ? f = t : f = fa; for (e = 0; e < d.length - 1; e++) { var g = d[e]; if (!(g in f)) break a;
				f = f[g] } d = d[d.length - 1];c = ia && "es6" === c ? f[d] : null;b = b(c);null != b && (a ? ca(t, d, { configurable: !0, writable: !0, value: b }) : b !== c && (void 0 === ja[d] && (a = 1E9 * Math.random() >>> 0, ja[d] = ia ? fa.Symbol(d) : "$jscp$" + a + "$" + d), ca(f, ja[d], { configurable: !0, writable: !0, value: b }))) } }
	v("Symbol", function(a) {
		function b(f) { if (this instanceof b) throw new TypeError("Symbol is not a constructor"); return new c(d + (f || "") + "_" + e++, f) }

		function c(f, g) { this.g = f;
			ca(this, "description", { configurable: !0, writable: !0, value: g }) } if (a) return a;
		c.prototype.toString = function() { return this.g }; var d = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
			e = 0; return b }, "es6");
	v("Symbol.iterator", function(a) { if (a) return a;
		a = (0, t.Symbol)("Symbol.iterator"); for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) { var d = fa[b[c]]; "function" === typeof d && "function" != typeof d.prototype[a] && ca(d.prototype, a, { configurable: !0, writable: !0, value: function() { return ka(ba(this)) } }) } return a }, "es6");

	function ka(a) { a = { next: a };
		a[u(t.Symbol, "iterator")] = function() { return this }; return a }

	function la(a) { return a.raw = a }

	function w(a) { var b = "undefined" != typeof t.Symbol && u(t.Symbol, "iterator") && a[u(t.Symbol, "iterator")]; if (b) return b.call(a); if ("number" == typeof a.length) return { next: ba(a) }; throw Error(String(a) + " is not an iterable or ArrayLike"); }

	function ma(a) { if (!(a instanceof Array)) { a = w(a); for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
			a = c } return a }

	function na(a, b) { return Object.prototype.hasOwnProperty.call(a, b) }
	var oa = ia && "function" == typeof u(Object, "assign") ? u(Object, "assign") : function(a, b) { for (var c = 1; c < arguments.length; c++) { var d = arguments[c]; if (d)
				for (var e in d) na(d, e) && (a[e] = d[e]) } return a };
	v("Object.assign", function(a) { return a || oa }, "es6");
	var pa = "function" == typeof Object.create ? Object.create : function(a) {
			function b() {} b.prototype = a; return new b },
		qa;
	if (ia && "function" == typeof Object.setPrototypeOf) qa = Object.setPrototypeOf;
	else { var ra;
		a: { var sa = { a: !0 },
				ta = {}; try { ta.__proto__ = sa;
				ra = ta.a; break a } catch (a) {} ra = !1 } qa = ra ? function(a, b) { a.__proto__ = b; if (a.__proto__ !== b) throw new TypeError(a + " is not extensible"); return a } : null }
	var ua = qa;

	function x(a, b) { a.prototype = pa(b.prototype);
		a.prototype.constructor = a; if (ua) ua(a, b);
		else
			for (var c in b)
				if ("prototype" != c)
					if (Object.defineProperties) { var d = Object.getOwnPropertyDescriptor(b, c);
						d && Object.defineProperty(a, c, d) } else a[c] = b[c];
		a.Gc = b.prototype }

	function va() { this.l = !1;
		this.h = null;
		this.A = void 0;
		this.g = 1;
		this.u = 0;
		this.j = null }

	function wa(a) { if (a.l) throw new TypeError("Generator is already running");
		a.l = !0 } va.prototype.m = function(a) { this.A = a };

	function xa(a, b) { a.j = { exception: b, Jb: !0 };
		a.g = a.u } va.prototype.return = function(a) { this.j = { return: a };
		this.g = this.u };

	function ya(a, b, c) { a.g = c; return { value: b } }

	function za(a) { this.g = new va;
		this.h = a }

	function Aa(a, b) { wa(a.g); var c = a.g.h; if (c) return Ba(a, "return" in c ? c["return"] : function(d) { return { value: d, done: !0 } }, b, a.g.return);
		a.g.return(b); return Ca(a) }

	function Ba(a, b, c, d) { try { var e = b.call(a.g.h, c); if (!(e instanceof Object)) throw new TypeError("Iterator result " + e + " is not an object"); if (!e.done) return a.g.l = !1, e; var f = e.value } catch (g) { return a.g.h = null, xa(a.g, g), Ca(a) } a.g.h = null;
		d.call(a.g, f); return Ca(a) }

	function Ca(a) { for (; a.g.g;) try { var b = a.h(a.g); if (b) return a.g.l = !1, { value: b.value, done: !1 } } catch (c) { a.g.A = void 0, xa(a.g, c) } a.g.l = !1; if (a.g.j) { b = a.g.j;
			a.g.j = null; if (b.Jb) throw b.exception; return { value: b.return, done: !0 } } return { value: void 0, done: !0 } }

	function Da(a) { this.next = function(b) { wa(a.g);
			a.g.h ? b = Ba(a, a.g.h.next, b, a.g.m) : (a.g.m(b), b = Ca(a)); return b };
		this.throw = function(b) { wa(a.g);
			a.g.h ? b = Ba(a, a.g.h["throw"], b, a.g.m) : (xa(a.g, b), b = Ca(a)); return b };
		this.return = function(b) { return Aa(a, b) };
		this[u(t.Symbol, "iterator")] = function() { return this } }

	function Ea(a) {
		function b(d) { return a.next(d) }

		function c(d) { return a.throw(d) } return new t.Promise(function(d, e) {
			function f(g) { g.done ? d(g.value) : t.Promise.resolve(g.value).then(b, c).then(f, e) } f(a.next()) }) }

	function Fa(a) { return Ea(new Da(new za(a))) }

	function Ga() { for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c]; return b }
	v("Promise", function(a) {
		function b(g) { this.g = 0;
			this.j = void 0;
			this.h = [];
			this.A = !1; var h = this.l(); try { g(h.resolve, h.reject) } catch (k) { h.reject(k) } }

		function c() { this.g = null }

		function d(g) { return g instanceof b ? g : new b(function(h) { h(g) }) }
		if (a) return a;
		c.prototype.h = function(g) { if (null == this.g) { this.g = []; var h = this;
				this.j(function() { h.m() }) } this.g.push(g) };
		var e = fa.setTimeout;
		c.prototype.j = function(g) { e(g, 0) };
		c.prototype.m = function() {
			for (; this.g && this.g.length;) {
				var g = this.g;
				this.g = [];
				for (var h = 0; h < g.length; ++h) {
					var k =
						g[h];
					g[h] = null;
					try { k() } catch (l) { this.l(l) }
				}
			}
			this.g = null
		};
		c.prototype.l = function(g) { this.j(function() { throw g; }) };
		b.prototype.l = function() {
			function g(l) { return function(m) { k || (k = !0, l.call(h, m)) } } var h = this,
				k = !1; return { resolve: g(this.Z), reject: g(this.m) } };
		b.prototype.Z = function(g) { if (g === this) this.m(new TypeError("A Promise cannot resolve to itself"));
			else if (g instanceof b) this.ha(g);
			else { a: switch (typeof g) {
					case "object":
						var h = null != g; break a;
					case "function":
						h = !0; break a;
					default:
						h = !1 } h ? this.T(g) : this.u(g) } };
		b.prototype.T = function(g) { var h = void 0; try { h = g.then } catch (k) { this.m(k); return } "function" == typeof h ? this.na(h, g) : this.u(g) };
		b.prototype.m = function(g) { this.B(2, g) };
		b.prototype.u = function(g) { this.B(1, g) };
		b.prototype.B = function(g, h) { if (0 != this.g) throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.g);
			this.g = g;
			this.j = h;
			2 === this.g && this.ga();
			this.G() };
		b.prototype.ga = function() { var g = this;
			e(function() { if (g.L()) { var h = fa.console; "undefined" !== typeof h && h.error(g.j) } }, 1) };
		b.prototype.L =
			function() { if (this.A) return !1; var g = fa.CustomEvent,
					h = fa.Event,
					k = fa.dispatchEvent; if ("undefined" === typeof k) return !0; "function" === typeof g ? g = new g("unhandledrejection", { cancelable: !0 }) : "function" === typeof h ? g = new h("unhandledrejection", { cancelable: !0 }) : (g = fa.document.createEvent("CustomEvent"), g.initCustomEvent("unhandledrejection", !1, !0, g));
				g.promise = this;
				g.reason = this.j; return k(g) };
		b.prototype.G = function() { if (null != this.h) { for (var g = 0; g < this.h.length; ++g) f.h(this.h[g]);
				this.h = null } };
		var f = new c;
		b.prototype.ha = function(g) { var h = this.l();
			g.pa(h.resolve, h.reject) };
		b.prototype.na = function(g, h) { var k = this.l(); try { g.call(h, k.resolve, k.reject) } catch (l) { k.reject(l) } };
		b.prototype.then = function(g, h) {
			function k(n, r) { return "function" == typeof n ? function(A) { try { l(n(A)) } catch (y) { m(y) } } : r } var l, m, p = new b(function(n, r) { l = n;
				m = r });
			this.pa(k(g, l), k(h, m)); return p };
		b.prototype.catch = function(g) { return this.then(void 0, g) };
		b.prototype.pa = function(g, h) {
			function k() {
				switch (l.g) {
					case 1:
						g(l.j);
						break;
					case 2:
						h(l.j);
						break;
					default:
						throw Error("Unexpected state: " + l.g);
				}
			}
			var l = this;
			null == this.h ? f.h(k) : this.h.push(k);
			this.A = !0
		};
		b.resolve = d;
		b.reject = function(g) { return new b(function(h, k) { k(g) }) };
		b.race = function(g) { return new b(function(h, k) { for (var l = w(g), m = l.next(); !m.done; m = l.next()) d(m.value).pa(h, k) }) };
		b.all = function(g) {
			var h = w(g),
				k = h.next();
			return k.done ? d([]) : new b(function(l, m) {
				function p(A) { return function(y) { n[A] = y;
						r--;
						0 == r && l(n) } }
				var n = [],
					r = 0;
				do n.push(void 0), r++, d(k.value).pa(p(n.length - 1), m), k = h.next();
				while (!k.done)
			})
		};
		return b
	}, "es6");
	v("Array.prototype.find", function(a) { return a ? a : function(b, c) { a: { var d = this;d instanceof String && (d = String(d)); for (var e = d.length, f = 0; f < e; f++) { var g = d[f]; if (b.call(c, g, f, d)) { b = g; break a } } b = void 0 } return b } }, "es6");
	v("WeakMap", function(a) {
		function b(g) { this.g = (f += Math.random() + 1).toString(); if (g) { g = w(g); for (var h; !(h = g.next()).done;) h = h.value, this.set(h[0], h[1]) } }

		function c() {}

		function d(g) { var h = typeof g; return "object" === h && null !== g || "function" === h }
		if (function() { if (!a || !Object.seal) return !1; try { var g = Object.seal({}),
						h = Object.seal({}),
						k = new a([[g, 2], [h, 3]]); if (2 != k.get(g) || 3 != k.get(h)) return !1;
					k.delete(g);
					k.set(h, 4); return !k.has(g) && 4 == k.get(h) } catch (l) { return !1 } }()) return a;
		var e = "$jscomp_hidden_" + Math.random(),
			f = 0;
		b.prototype.set = function(g, h) { if (!d(g)) throw Error("Invalid WeakMap key"); if (!na(g, e)) { var k = new c;
				ca(g, e, { value: k }) } if (!na(g, e)) throw Error("WeakMap key fail: " + g);
			g[e][this.g] = h; return this };
		b.prototype.get = function(g) { return d(g) && na(g, e) ? g[e][this.g] : void 0 };
		b.prototype.has = function(g) { return d(g) && na(g, e) && na(g[e], this.g) };
		b.prototype.delete = function(g) { return d(g) && na(g, e) && na(g[e], this.g) ? delete g[e][this.g] : !1 };
		return b
	}, "es6");
	v("Map", function(a) {
		function b() { var h = {}; return h.U = h.next = h.head = h }

		function c(h, k) { var l = h[1]; return ka(function() { if (l) { for (; l.head != h[1];) l = l.U; for (; l.next != l.head;) return l = l.next, { done: !1, value: k(l) };
					l = null } return { done: !0, value: void 0 } }) }

		function d(h, k) {
			var l = k && typeof k;
			"object" == l || "function" == l ? f.has(k) ? l = f.get(k) : (l = "" + ++g, f.set(k, l)) : l = "p_" + k;
			var m = h[0][l];
			if (m && na(h[0], l))
				for (h = 0; h < m.length; h++) { var p = m[h]; if (k !== k && p.key !== p.key || k === p.key) return { id: l, list: m, index: h, C: p } }
			return {
				id: l,
				list: m,
				index: -1,
				C: void 0
			}
		}

		function e(h) { this[0] = {};
			this[1] = b();
			this.size = 0; if (h) { h = w(h); for (var k; !(k = h.next()).done;) k = k.value, this.set(k[0], k[1]) } }
		if (function() {
				if (!a || "function" != typeof a || !u(a.prototype, "entries") || "function" != typeof Object.seal) return !1;
				try {
					var h = Object.seal({ x: 4 }),
						k = new a(w([[h, "s"]]));
					if ("s" != k.get(h) || 1 != k.size || k.get({ x: 4 }) || k.set({ x: 4 }, "t") != k || 2 != k.size) return !1;
					var l = u(k, "entries").call(k),
						m = l.next();
					if (m.done || m.value[0] != h || "s" != m.value[1]) return !1;
					m = l.next();
					return m.done ||
						4 != m.value[0].x || "t" != m.value[1] || !l.next().done ? !1 : !0
				} catch (p) { return !1 }
			}()) return a;
		var f = new t.WeakMap;
		e.prototype.set = function(h, k) { h = 0 === h ? 0 : h; var l = d(this, h);
			l.list || (l.list = this[0][l.id] = []);
			l.C ? l.C.value = k : (l.C = { next: this[1], U: this[1].U, head: this[1], key: h, value: k }, l.list.push(l.C), this[1].U.next = l.C, this[1].U = l.C, this.size++); return this };
		e.prototype.delete = function(h) {
			h = d(this, h);
			return h.C && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this[0][h.id], h.C.U.next = h.C.next, h.C.next.U =
				h.C.U, h.C.head = null, this.size--, !0) : !1
		};
		e.prototype.clear = function() { this[0] = {};
			this[1] = this[1].U = b();
			this.size = 0 };
		e.prototype.has = function(h) { return !!d(this, h).C };
		e.prototype.get = function(h) { return (h = d(this, h).C) && h.value };
		e.prototype.entries = function() { return c(this, function(h) { return [h.key, h.value] }) };
		e.prototype.keys = function() { return c(this, function(h) { return h.key }) };
		e.prototype.values = function() { return c(this, function(h) { return h.value }) };
		e.prototype.forEach = function(h, k) {
			for (var l = u(this,
					"entries").call(this), m; !(m = l.next()).done;) m = m.value, h.call(k, m[1], m[0], this)
		};
		e.prototype[u(t.Symbol, "iterator")] = u(e.prototype, "entries");
		var g = 0;
		return e
	}, "es6");
	v("Math.trunc", function(a) { return a ? a : function(b) { b = Number(b); if (isNaN(b) || Infinity === b || -Infinity === b || 0 === b) return b; var c = Math.floor(Math.abs(b)); return 0 > b ? -c : c } }, "es6");
	v("Object.values", function(a) { return a ? a : function(b) { var c = [],
				d; for (d in b) na(b, d) && c.push(b[d]); return c } }, "es8");
	v("Object.is", function(a) { return a ? a : function(b, c) { return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c } }, "es6");
	v("Array.prototype.includes", function(a) { return a ? a : function(b, c) { var d = this;
			d instanceof String && (d = String(d)); var e = d.length;
			c = c || 0; for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) { var f = d[c]; if (f === b || u(Object, "is").call(Object, f, b)) return !0 } return !1 } }, "es7");

	function Ha(a, b, c) { if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined"); if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression"); return a + "" } v("String.prototype.includes", function(a) { return a ? a : function(b, c) { return -1 !== Ha(this, b, "includes").indexOf(b, c || 0) } }, "es6");
	v("Set", function(a) {
		function b(c) { this.g = new t.Map; if (c) { c = w(c); for (var d; !(d = c.next()).done;) this.add(d.value) } this.size = this.g.size }
		if (function() {
				if (!a || "function" != typeof a || !u(a.prototype, "entries") || "function" != typeof Object.seal) return !1;
				try {
					var c = Object.seal({ x: 4 }),
						d = new a(w([c]));
					if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({ x: 4 }) != d || 2 != d.size) return !1;
					var e = u(d, "entries").call(d),
						f = e.next();
					if (f.done || f.value[0] != c || f.value[1] != c) return !1;
					f = e.next();
					return f.done || f.value[0] ==
						c || 4 != f.value[0].x || f.value[1] != f.value[0] ? !1 : e.next().done
				} catch (g) { return !1 }
			}()) return a;
		b.prototype.add = function(c) { c = 0 === c ? 0 : c;
			this.g.set(c, c);
			this.size = this.g.size; return this };
		b.prototype.delete = function(c) { c = this.g.delete(c);
			this.size = this.g.size; return c };
		b.prototype.clear = function() { this.g.clear();
			this.size = 0 };
		b.prototype.has = function(c) { return this.g.has(c) };
		b.prototype.entries = function() { return u(this.g, "entries").call(this.g) };
		b.prototype.values = function() { return u(this.g, "values").call(this.g) };
		b.prototype.keys = u(b.prototype, "values");
		b.prototype[u(t.Symbol, "iterator")] = u(b.prototype, "values");
		b.prototype.forEach = function(c, d) { var e = this;
			this.g.forEach(function(f) { return c.call(d, f, f, e) }) };
		return b
	}, "es6");
	v("Number.MAX_SAFE_INTEGER", function() { return 9007199254740991 }, "es6");
	v("Number.isFinite", function(a) { return a ? a : function(b) { return "number" !== typeof b ? !1 : !isNaN(b) && Infinity !== b && -Infinity !== b } }, "es6");
	v("Number.isInteger", function(a) { return a ? a : function(b) { return u(Number, "isFinite").call(Number, b) ? b === Math.floor(b) : !1 } }, "es6");
	v("Number.isSafeInteger", function(a) { return a ? a : function(b) { return u(Number, "isInteger").call(Number, b) && Math.abs(b) <= u(Number, "MAX_SAFE_INTEGER") } }, "es6");

	function Ia(a, b) { a instanceof String && (a += ""); var c = 0,
			d = !1,
			e = { next: function() { if (!d && c < a.length) { var f = c++; return { value: b(f, a[f]), done: !1 } } d = !0; return { done: !0, value: void 0 } } };
		e[u(t.Symbol, "iterator")] = function() { return e }; return e } v("Array.prototype.entries", function(a) { return a ? a : function() { return Ia(this, function(b, c) { return [b, c] }) } }, "es6");
	v("Array.prototype.keys", function(a) { return a ? a : function() { return Ia(this, function(b) { return b }) } }, "es6");
	v("Array.prototype.values", function(a) { return a ? a : function() { return Ia(this, function(b, c) { return c }) } }, "es8");
	v("Array.from", function(a) { return a ? a : function(b, c, d) { c = null != c ? c : function(h) { return h }; var e = [],
				f = "undefined" != typeof t.Symbol && u(t.Symbol, "iterator") && b[u(t.Symbol, "iterator")]; if ("function" == typeof f) { b = f.call(b); for (var g = 0; !(f = b.next()).done;) e.push(c.call(d, f.value, g++)) } else
				for (f = b.length, g = 0; g < f; g++) e.push(c.call(d, b[g], g)); return e } }, "es6");
	v("Number.isNaN", function(a) { return a ? a : function(b) { return "number" === typeof b && isNaN(b) } }, "es6");
	v("Object.entries", function(a) { return a ? a : function(b) { var c = [],
				d; for (d in b) na(b, d) && c.push([d, b[d]]); return c } }, "es8");
	v("String.prototype.endsWith", function(a) { return a ? a : function(b, c) { var d = Ha(this, b, "endsWith");
			void 0 === c && (c = d.length);
			c = Math.max(0, Math.min(c | 0, d.length)); for (var e = b.length; 0 < e && 0 < c;)
				if (d[--c] != b[--e]) return !1; return 0 >= e } }, "es6");
	v("String.prototype.startsWith", function(a) { return a ? a : function(b, c) { var d = Ha(this, b, "startsWith"),
				e = d.length,
				f = b.length;
			c = Math.max(0, Math.min(c | 0, d.length)); for (var g = 0; g < f && c < e;)
				if (d[c++] != b[g++]) return !1; return g >= f } }, "es6");
	v("String.prototype.repeat", function(a) { return a ? a : function(b) { var c = Ha(this, null, "repeat"); if (0 > b || 1342177279 < b) throw new RangeError("Invalid count value");
			b |= 0; for (var d = ""; b;)
				if (b & 1 && (d += c), b >>>= 1) c += c; return d } }, "es6");
	v("globalThis", function(a) { return a || fa }, "es_2020");
	v("String.prototype.padStart", function(a) { return a ? a : function(b, c) { var d = Ha(this, null, "padStart");
			b -= d.length;
			c = void 0 !== c ? String(c) : " "; return (0 < b && c ? u(c, "repeat").call(c, Math.ceil(b / c.length)).substring(0, b) : "") + d } }, "es8");
	v("Promise.prototype.finally", function(a) { return a ? a : function(b) { return this.then(function(c) { return t.Promise.resolve(b()).then(function() { return c }) }, function(c) { return t.Promise.resolve(b()).then(function() { throw c; }) }) } }, "es9");
	/* 
	 
	 Copyright The Closure Library Authors. 
	 SPDX-License-Identifier: Apache-2.0 
	*/
	var B = this || self;

	function Ja(a, b) { var c = Ka("CLOSURE_FLAGS");
		a = c && c[a]; return null != a ? a : b }

	function Ka(a) { a = a.split("."); for (var b = B, c = 0; c < a.length; c++)
			if (b = b[a[c]], null == b) return null; return b }

	function La(a) { var b = typeof a; return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null" }

	function Ma(a) { var b = La(a); return "array" == b || "object" == b && "number" == typeof a.length }

	function Na(a) { var b = typeof a; return "object" == b && null != a || "function" == b }

	function Oa(a) { return Object.prototype.hasOwnProperty.call(a, Pa) && a[Pa] || (a[Pa] = ++Qa) }
	var Pa = "closure_uid_" + (1E9 * Math.random() >>> 0),
		Qa = 0;

	function Ra(a, b, c) { return a.call.apply(a.bind, arguments) }

	function Sa(a, b, c) { if (!a) throw Error(); if (2 < arguments.length) { var d = Array.prototype.slice.call(arguments, 2); return function() { var e = Array.prototype.slice.call(arguments);
				Array.prototype.unshift.apply(e, d); return a.apply(b, e) } } return function() { return a.apply(b, arguments) } }

	function Ta(a, b, c) { Ta = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? Ra : Sa; return Ta.apply(null, arguments) }

	function Ua(a, b) { var c = Array.prototype.slice.call(arguments, 1); return function() { var d = c.slice();
			d.push.apply(d, arguments); return a.apply(this, d) } }

	function Va(a, b, c) { a = a.split(".");
		c = c || B;
		a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]); for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b }

	function Wa(a) { return a };
	var Xa = (new Date).getTime();

	function Ya(a) { B.setTimeout(function() { throw a; }, 0) };

	function Za(a) { return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1] }

	function $a(a, b) { var c = 0;
		a = Za(String(a)).split(".");
		b = Za(String(b)).split("."); for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) { var f = a[e] || "",
				g = b[e] || "";
			do { f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
				g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""]; if (0 == f[0].length && 0 == g[0].length) break;
				c = ab(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || ab(0 == f[2].length, 0 == g[2].length) || ab(f[2], g[2]);
				f = f[3];
				g = g[3] } while (0 == c) } return c }

	function ab(a, b) { return a < b ? -1 : a > b ? 1 : 0 };
	var bb = Ja(610401301, !1),
		cb = Ja(572417392, Ja(1, !0));

	function db() { var a = B.navigator; return a && (a = a.userAgent) ? a : "" }
	var eb, fb = B.navigator;
	eb = fb ? fb.userAgentData || null : null;

	function gb(a) { return bb ? eb ? eb.brands.some(function(b) { return (b = b.brand) && -1 != b.indexOf(a) }) : !1 : !1 }

	function C(a) { return -1 != db().indexOf(a) };

	function hb() { return bb ? !!eb && 0 < eb.brands.length : !1 }

	function ib() { return hb() ? !1 : C("Trident") || C("MSIE") }

	function jb() { return hb() ? gb("Microsoft Edge") : C("Edg/") }

	function kb() {!C("Safari") || lb() || (hb() ? 0 : C("Coast")) || (hb() ? 0 : C("Opera")) || (hb() ? 0 : C("Edge")) || jb() || hb() && gb("Opera") }

	function lb() { return hb() ? gb("Chromium") : (C("Chrome") || C("CriOS")) && !(hb() ? 0 : C("Edge")) || C("Silk") }

	function mb(a) { var b = {};
		a.forEach(function(c) { b[c[0]] = c[1] }); return function(c) { return b[u(c, "find").call(c, function(d) { return d in b })] || "" } }

	function nb() {
		var a = db();
		if (ib()) { var b = /rv: *([\d\.]*)/.exec(a); if (b && b[1]) a = b[1];
			else { b = ""; var c = /MSIE +([\d\.]+)/.exec(a); if (c && c[1])
					if (a = /Trident\/(\d.\d)/.exec(a), "7.0" == c[1])
						if (a && a[1]) switch (a[1]) {
							case "4.0":
								b = "8.0"; break;
							case "5.0":
								b = "9.0"; break;
							case "6.0":
								b = "10.0"; break;
							case "7.0":
								b = "11.0" } else b = "7.0";
						else b = c[1];
				a = b } return a } c = RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?", "g");
		b = [];
		for (var d; d = c.exec(a);) b.push([d[1], d[2], d[3] || void 0]);
		a = mb(b);
		return (hb() ? 0 : C("Opera")) ? a(["Version",
"Opera"]) : (hb() ? 0 : C("Edge")) ? a(["Edge"]) : jb() ? a(["Edg"]) : C("Silk") ? a(["Silk"]) : lb() ? a(["Chrome", "CriOS", "HeadlessChrome"]) : (a = b[2]) && a[1] || ""
	};

	function pb(a, b) { if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0); for (var c = 0; c < a.length; c++)
			if (c in a && a[c] === b) return c; return -1 }

	function qb(a, b) { for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a) }

	function rb(a, b) { for (var c = a.length, d = [], e = 0, f = "string" === typeof a ? a.split("") : a, g = 0; g < c; g++)
			if (g in f) { var h = f[g];
				b.call(void 0, h, g, a) && (d[e++] = h) } return d }

	function sb(a, b) { for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a)); return d }

	function tb(a, b) { for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
			if (e in d && b.call(void 0, d[e], e, a)) return !0; return !1 }

	function ub(a, b) { a: { for (var c = "string" === typeof a ? a.split("") : a, d = a.length - 1; 0 <= d; d--)
				if (d in c && b.call(void 0, c[d], d, a)) { b = d; break a } b = -1 } return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b] }

	function vb(a, b) { return 0 <= pb(a, b) }

	function wb(a) { var b = a.length; if (0 < b) { for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d]; return c } return [] };

	function xb(a) { xb[" "](a); return a } xb[" "] = function() {};
	var yb = ib();
	!C("Android") || lb();
	lb();
	kb();
	var zb = {},
		Ab = null;

	function Bb(a) { var b = [];
		Cb(a, function(c) { b.push(c) }); return b }

	function Cb(a, b) {
		function c(k) { for (; d < a.length;) { var l = a.charAt(d++),
					m = Ab[l]; if (null != m) return m; if (!/^[\s\xa0]*$/.test(l)) throw Error("Unknown base64 encoding at char: " + l); } return k } Eb(); for (var d = 0;;) { var e = c(-1),
				f = c(0),
				g = c(64),
				h = c(64); if (64 === h && -1 === e) break;
			b(e << 2 | f >> 4);
			64 != g && (b(f << 4 & 240 | g >> 2), 64 != h && b(g << 6 & 192 | h)) } }

	function Eb() { if (!Ab) { Ab = {}; for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) { var d = a.concat(b[c].split(""));
				zb[c] = d; for (var e = 0; e < d.length; e++) { var f = d[e];
					void 0 === Ab[f] && (Ab[f] = e) } } } };
	var Fb = "undefined" !== typeof Uint8Array,
		Gb = !yb && "function" === typeof btoa;

	function Hb() { return "function" === typeof BigInt }
	var Ib = !cb,
		Jb = !cb;
	var Kb = 0,
		Lb = 0;

	function Mb(a) { var b = 0 > a;
		a = Math.abs(a); var c = a >>> 0;
		a = Math.floor((a - c) / 4294967296);
		b && (c = w(Nb(c, a)), b = c.next().value, a = c.next().value, c = b);
		Kb = c >>> 0;
		Lb = a >>> 0 }

	function Ob(a, b) { b >>>= 0;
		a >>>= 0; if (2097151 >= b) var c = "" + (4294967296 * b + a);
		else Hb() ? c = "" + (BigInt(b) << BigInt(32) | BigInt(a)) : (c = (a >>> 24 | b << 8) & 16777215, b = b >> 16 & 65535, a = (a & 16777215) + 6777216 * c + 6710656 * b, c += 8147497 * b, b *= 2, 1E7 <= a && (c += Math.floor(a / 1E7), a %= 1E7), 1E7 <= c && (b += Math.floor(c / 1E7), c %= 1E7), c = b + Pb(c) + Pb(a)); return c }

	function Pb(a) { a = String(a); return "0000000".slice(a.length) + a }

	function Qb() { var a = Kb,
			b = Lb;
		b & 2147483648 ? Hb() ? a = "" + (BigInt(b | 0) << BigInt(32) | BigInt(a >>> 0)) : (b = w(Nb(a, b)), a = b.next().value, b = b.next().value, a = "-" + Ob(a, b)) : a = Ob(a, b); return a }

	function Nb(a, b) { b = ~b;
		a ? a = ~a + 1 : b += 1; return [a, b] };

	function Rb(a) { return Array.prototype.slice.call(a) };
	var Sb = "function" === typeof t.Symbol && "symbol" === typeof(0, t.Symbol)() ? (0, t.Symbol)() : void 0,
		Tb = Sb ? function(a, b) { a[Sb] |= b } : function(a, b) { void 0 !== a.J ? a.J |= b : Object.defineProperties(a, { J: { value: b, configurable: !0, writable: !0, enumerable: !1 } }) };

	function Ub(a) { var b = Vb(a);
		1 !== (b & 1) && (Object.isFrozen(a) && (a = Rb(a)), D(a, b | 1)) }
	var Wb = Sb ? function(a, b) { a[Sb] &= ~b } : function(a, b) { void 0 !== a.J && (a.J &= ~b) };

	function E(a, b, c) { return c ? a | b : a & ~b }
	var Vb = Sb ? function(a) { return a[Sb] | 0 } : function(a) { return a.J | 0 },
		G = Sb ? function(a) { return a[Sb] } : function(a) { return a.J },
		D = Sb ? function(a, b) { a[Sb] = b } : function(a, b) { void 0 !== a.J ? a.J = b : Object.defineProperties(a, { J: { value: b, configurable: !0, writable: !0, enumerable: !1 } }) };

	function Yb() { var a = [];
		Tb(a, 1); return a }

	function Zb(a) { Tb(a, 32); return a }

	function $b(a, b) { D(b, (a | 0) & -14591) }

	function ac(a, b) { D(b, (a | 34) & -14557) }

	function bc(a) { a = a >> 14 & 1023; return 0 === a ? 536870912 : a };
	var cc = {},
		dc = {};

	function ec(a) { return !(!a || "object" !== typeof a || a.Dc !== dc) }

	function fc(a) { return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object }
	var gc, hc = !cb;

	function ic(a, b, c) { if (!Array.isArray(a) || a.length) return !1; var d = Vb(a); if (d & 1) return !0; if (!(b && (Array.isArray(b) ? u(b, "includes").call(b, c) : b.has(c)))) return !1;
		D(a, d | 1); return !0 }
	var jc, kc = [];
	D(kc, 55);
	jc = Object.freeze(kc);

	function lc(a) { if (a & 2) throw Error(); };

	function mc(a, b) { a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
		a.__closure__error__context__984382.severity = b };
	var nc;

	function oc(a) { if (nc) throw Error("");
		nc = a }

	function pc(a) { if (nc) try { nc(a) } catch (b) { throw b.cause = a, b; } }

	function qc() { var a = rc();
		nc ? B.setTimeout(function() { pc(a) }, 0) : Ya(a) }

	function sc(a) { a = Error(a);
		mc(a, "warning");
		pc(a); return a }

	function rc() { var a = Error();
		mc(a, "incident"); return a };

	function tc(a) { if (null != a && "boolean" !== typeof a) throw Error("Expected boolean but got " + La(a) + ": " + a); return a }
	var uc = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;

	function vc(a) { var b = typeof a; return "number" === b ? u(Number, "isFinite").call(Number, a) : "string" !== b ? !1 : uc.test(a) }

	function wc(a) { null != a && (u(Number, "isFinite").call(Number, a) || qc()); return a }

	function xc(a) { return a }

	function yc(a) { if ("number" !== typeof a) throw sc("int32");
		u(Number, "isFinite").call(Number, a) || qc(); return a }

	function zc(a) { return null == a ? a : yc(a) }

	function Ac(a) { if (null == a) return a; if ("string" === typeof a) { if (!a) return;
			a = +a } if ("number" === typeof a) return a }

	function Bc(a) { if (null == a) return a; if ("string" === typeof a) { if (!a) return;
			a = +a } if ("number" === typeof a) return a }

	function Cc(a) { return a = u(Math, "trunc").call(Math, a) }

	function Dc(a, b) {
		var c = u(Math, "trunc").call(Math, Number(a));
		if (u(Number, "isSafeInteger").call(Number, c)) return String(c);
		c = a.indexOf("."); - 1 !== c && (a = a.substring(0, c));
		if (b) {
			if (16 > a.length) Mb(Number(a));
			else if (Hb()) a = BigInt(a), Kb = Number(a & BigInt(4294967295)) >>> 0, Lb = Number(a >> BigInt(32) & BigInt(4294967295));
			else {
				b = +("-" === a[0]);
				Lb = Kb = 0;
				c = a.length;
				for (var d = b, e = (c - b) % 6 + b; e <= c; d = e, e += 6) d = Number(a.slice(d, e)), Lb *= 1E6, Kb = 1E6 * Kb + d, 4294967296 <= Kb && (Lb += u(Math, "trunc").call(Math, Kb / 4294967296), Lb >>>= 0, Kb >>>=
					0);
				b && (b = w(Nb(Kb, Lb)), a = b.next().value, b = b.next().value, Kb = a, Lb = b)
			}
			a = Qb()
		}
		return a
	}

	function Ec(a) { if (null == a) return a; if (vc(a)) return "number" === typeof a ? Cc(a) : Dc(a, !1) }

	function Fc(a) { if ("string" !== typeof a) throw Error(); return a }

	function Gc(a) { if (null != a && "string" !== typeof a) throw Error(); return a }

	function Hc(a) { return null == a || "string" === typeof a ? a : void 0 }

	function Ic(a, b, c, d) { if (null != a && "object" === typeof a && a.wa === cc) return a; if (!Array.isArray(a)) return c ? d & 2 ? (a = b[Jc]) ? b = a : (a = new b, Tb(a.i, 34), b = b[Jc] = a) : b = new b : b = void 0, b; var e = c = Vb(a);
		0 === e && (e |= d & 32);
		e |= d & 2;
		e !== c && D(a, e); return new b(a) }
	var Jc = "function" === typeof t.Symbol && "symbol" === typeof(0, t.Symbol)() ? (0, t.Symbol)() : "di";
	var Kc;

	function Lc(a, b) { Kc = b;
		a = new a(b);
		Kc = void 0; return a }

	function H(a, b, c) { null == a && (a = Kc);
		Kc = void 0; if (null == a) { var d = 96;
			c ? (a = [c], d |= 512) : a = [];
			b && (d = d & -16760833 | (b & 1023) << 14) } else { if (!Array.isArray(a)) throw Error();
			d = Vb(a); if (d & 64) return a;
			d |= 64; if (c && (d |= 512, c !== a[0])) throw Error();
			a: { c = d; if (d = a.length) { var e = d - 1; if (fc(a[e])) { c |= 256;
						b = e - (+!!(c & 512) - 1); if (1024 <= b) throw Error();
						d = c & -16760833 | (b & 1023) << 14; break a } } if (b) { b = Math.max(b, d - (+!!(c & 512) - 1)); if (1024 < b) throw Error();
					d = c & -16760833 | (b & 1023) << 14 } else d = c } } D(a, d); return a };

	function Mc(a, b) { return Nc(b) }

	function Nc(a) {
		switch (typeof a) {
			case "number":
				return isFinite(a) ? a : String(a);
			case "boolean":
				return a ? 1 : 0;
			case "object":
				if (a) {
					if (Array.isArray(a)) return hc || !ic(a, void 0, 9999) ? a : void 0;
					if (Fb && null != a && a instanceof Uint8Array) {
						if (Gb) { for (var b = "", c = 0, d = a.length - 10240; c < d;) b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
							b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
							a = btoa(b) } else {
							void 0 === b && (b = 0);
							Eb();
							b = zb[b];
							c = Array(Math.floor(a.length / 3));
							d = b[64] || "";
							for (var e = 0, f = 0; e < a.length - 2; e +=
								3) { var g = a[e],
									h = a[e + 1],
									k = a[e + 2],
									l = b[g >> 2];
								g = b[(g & 3) << 4 | h >> 4];
								h = b[(h & 15) << 2 | k >> 6];
								k = b[k & 63];
								c[f++] = l + g + h + k } l = 0;
							k = d;
							switch (a.length - e) {
								case 2:
									l = a[e + 1], k = b[(l & 15) << 2] || d;
								case 1:
									a = a[e], c[f] = b[a >> 2] + b[(a & 3) << 4 | l >> 4] + k + d } a = c.join("")
						}
						return a
					}
				}
		}
		return a
	};

	function Oc(a, b, c) { a = Rb(a); var d = a.length,
			e = b & 256 ? a[d - 1] : void 0;
		d += e ? -1 : 0; for (b = b & 512 ? 1 : 0; b < d; b++) a[b] = c(a[b]); if (e) { b = a[b] = {}; for (var f in e) Object.prototype.hasOwnProperty.call(e, f) && (b[f] = c(e[f])) } return a }

	function Pc(a, b, c, d, e, f) { if (null != a) { if (Array.isArray(a)) a = e && 0 == a.length && Vb(a) & 1 ? void 0 : f && Vb(a) & 2 ? a : Qc(a, b, c, void 0 !== d, e, f);
			else if (fc(a)) { var g = {},
					h; for (h in a) Object.prototype.hasOwnProperty.call(a, h) && (g[h] = Pc(a[h], b, c, d, e, f));
				a = g } else a = b(a, d); return a } }

	function Qc(a, b, c, d, e, f) { var g = d || c ? Vb(a) : 0;
		d = d ? !!(g & 32) : void 0;
		a = Rb(a); for (var h = 0; h < a.length; h++) a[h] = Pc(a[h], b, c, d, e, f);
		c && c(g, a); return a }

	function Rc(a) { return a.wa === cc ? Sc(a, Qc(a.i, Rc, void 0, void 0, !1, !1), !0) : Fb && null != a && a instanceof Uint8Array ? new Uint8Array(a) : a }

	function Tc(a) { return a.wa === cc ? a.toJSON() : Nc(a) }
	var Uc = "undefined" != typeof structuredClone ? structuredClone : function(a) { return Qc(a, Rc, void 0, void 0, !1, !1) };

	function Vc(a, b, c) { c = void 0 === c ? ac : c; if (null != a) { if (Fb && a instanceof Uint8Array) return b ? a : new Uint8Array(a); if (Array.isArray(a)) { var d = Vb(a); if (d & 2) return a;
				b && (b = 0 === d || !!(d & 32) && !(d & 64 || !(d & 16))); return b ? (D(a, (d | 34) & -12293), a) : Qc(a, Vc, d & 4 ? ac : c, !0, !1, !0) } a.wa === cc && (c = a.i, d = G(c), a = d & 2 ? a : Lc(a.constructor, Wc(c, d, !0))); return a } }

	function Wc(a, b, c) { var d = c || b & 2 ? ac : $b,
			e = !!(b & 32);
		a = Oc(a, b, function(f) { return Vc(f, e, d) });
		Tb(a, 32 | (c ? 2 : 0)); return a }

	function Xc(a) { var b = a.i,
			c = G(b); return c & 2 ? Lc(a.constructor, Wc(b, c, !1)) : a };
	Object.freeze({});

	function I(a, b) { a = a.i; return Zc(a, G(a), b) }

	function Zc(a, b, c, d) { if (-1 === c) return null; if (c >= bc(b)) { if (b & 256) return a[a.length - 1][c] } else { var e = a.length; if (d && b & 256 && (d = a[e - 1][c], null != d)) return d;
			b = c + (+!!(b & 512) - 1); if (b < e) return a[b] } }

	function $c(a, b, c) { var d = a.i,
			e = G(d);
		lc(e);
		J(d, e, b, c); return a }

	function J(a, b, c, d, e) { var f = bc(b); if (c >= f || e) { e = b; if (b & 256) f = a[a.length - 1];
			else { if (null == d) return e;
				f = a[f + (+!!(b & 512) - 1)] = {};
				e |= 256 } f[c] = d;
			e !== b && D(a, e); return e } a[c + (+!!(b & 512) - 1)] = d;
		b & 256 && (a = a[a.length - 1], c in a && delete a[c]); return b }

	function ad(a, b, c) { return void 0 !== bd(a, b, c, !1) }

	function cd(a, b, c) { return void 0 !== bd(a, b, dd(a, ed, c)) }

	function fd(a, b, c, d) { var e = b & 2,
			f = Zc(a, b, c);
		Array.isArray(f) || (f = jc); var g = !(d & 2);
		d = !(d & 1); var h = !!(b & 32),
			k = Vb(f);
		0 !== k || !h || e || g ? k & 1 || (k |= 1, D(f, k)) : (k |= 33, D(f, k));
		e ? (a = !1, k & 2 || (Tb(f, 34), a = !!(4 & k)), (d || a) && Object.freeze(f)) : (e = !!(2 & k) || !!(2048 & k), d && e ? (f = Rb(f), d = 1, h && !g && (d |= 32), D(f, d), J(a, b, c, f)) : g && k & 32 && !e && Wb(f, 32)); return f }

	function gd(a, b) { a = I(a, b); return null == a || "boolean" === typeof a ? a : "number" === typeof a ? !!a : void 0 }

	function hd(a, b, c) { var d = void 0;
		d = void 0 === d ? 2 : d;
		a = a.i; var e = G(a);
		2 & e && (d = 1); var f = fd(a, e, b, 1);
		e = G(a); var g = Vb(f),
			h = g,
			k = !!(2 & g),
			l = k && !!(4 & g); if (!(4 & g)) { Object.isFrozen(f) && (f = Rb(f), h = 0, g = id(g, e, !1), k = !!(2 & g), e = J(a, e, b, f));
			g = E(g, 4, !1);
			g = E(g, 4096, !1);
			g = E(g, 8192, !1); for (var m = 0, p = 0; m < f.length; m++) { var n = c(f[m]);
				null != n && (f[p++] = n) } p < m && (f.length = p);
			g = E(g, 20, !0) } l || ((c = 1 === d) && (g = E(g, 2, !0)), g !== h && D(f, g), (c || k) && Object.freeze(f));
		2 === d && k && (f = Rb(f), g = id(g, e, !1), D(f, g), J(a, e, b, f)); return f }

	function jd(a, b, c, d) { var e = a.i,
			f = G(e);
		lc(f); if (null == c) return J(e, f, b), a; var g = Vb(c),
			h = g,
			k = !!(2 & g) || Object.isFrozen(c),
			l = !k && !1; if (!(4 & g)) { g = 21;
			k && (c = Rb(c), h = 0, g = id(g, f, !0));
			k = !!(4 & g) && !!(4096 & g); for (var m = 0; m < c.length; m++) c[m] = d(c[m], k) } l && (g = E(g, 2, !0));
		g !== h && D(c, g);
		l && Object.freeze(c);
		J(e, f, b, c); return a }

	function kd(a, b, c, d) { var e = a.i,
			f = G(e);
		lc(f);
		J(e, f, b, ("0" === d ? 0 === Number(c) : c === d) ? void 0 : c); return a }

	function ld(a, b, c, d) { var e = a.i,
			f = G(e);
		lc(f);
		(c = md(e, f, c)) && c !== b && null != d && (f = J(e, f, c));
		J(e, f, b, d); return a }

	function dd(a, b, c) { a = a.i; return md(a, G(a), b) === c ? c : -1 }

	function nd(a, b) { a = a.i; return md(a, G(a), b) }

	function md(a, b, c) { for (var d = 0, e = 0; e < c.length; e++) { var f = c[e];
			null != Zc(a, b, f) && (0 !== d && (b = J(a, b, d)), d = f) } return d }

	function od(a) { var b = pd;
		a = a.i; var c = G(a);
		lc(c); var d = Zc(a, c, 3);
		b = Xc(Ic(d, b, !0, c));
		d !== b && J(a, c, 3, b); return b }

	function bd(a, b, c, d) { a = a.i; var e = G(a),
			f = Zc(a, e, c, d);
		b = Ic(f, b, !1, e);
		b !== f && null != b && J(a, e, c, b, d); return b }

	function K(a, b, c) { var d = void 0 === d ? !1 : d;
		b = bd(a, b, c, d); if (null == b) return b;
		a = a.i; var e = G(a); if (!(e & 2)) { var f = Xc(b);
			f !== b && (b = f, J(a, e, c, b, d)) } return b }

	function L(a, b, c) {
		a = a.i;
		var d = G(a),
			e = !!(2 & d),
			f = e ? 1 : 2,
			g = 1 === f;
		f = 2 === f;
		var h = !!(2 & d) && f,
			k = fd(a, d, c, 3);
		d = G(a);
		var l = Vb(k),
			m = !!(2 & l),
			p = !!(4 & l),
			n = !!(32 & l),
			r = m && p || !!(2048 & l);
		if (!p) { var A = k,
				y = d,
				z = !!(2 & l);
			z && (y = E(y, 2, !0)); for (var F = !z, da = !0, ha = 0, W = 0; ha < A.length; ha++) { var ob = Ic(A[ha], b, !1, y); if (ob instanceof b) { if (!z) { var Db = !!(Vb(ob.i) & 2);
						F && (F = !Db);
						da && (da = Db) } A[W++] = ob } } W < ha && (A.length = W);
			l = E(l, 4, !0);
			l = E(l, 16, da);
			l = E(l, 8, F);
			D(A, l);
			m && !h && (Object.freeze(k), r = !0) } b = l;
		h = !!(8 & l) || g && !k.length;
		if (!e && !h) {
			r &&
				(k = Rb(k), r = !1, b = 0, l = id(l, d, !1), d = J(a, d, c, k));
			e = k;
			h = l;
			for (m = 0; m < e.length; m++) A = e[m], l = Xc(A), A !== l && (e[m] = l);
			h = E(h, 8, !0);
			l = h = E(h, 16, !e.length)
		}
		r || (g ? l = E(l, !k.length || 16 & l && (!p || n) ? 2 : 2048, !0) : l = E(l, 32, !1), l !== b && D(k, l), g && (Object.freeze(k), r = !0));
		f && r && (k = Rb(k), l = id(l, d, !1), D(k, l), J(a, d, c, k));
		return k
	}

	function qd(a, b, c) { null == c && (c = void 0); return $c(a, b, c) }

	function rd(a, b, c, d) { null == d && (d = void 0); return ld(a, b, c, d) }

	function sd(a, b, c) { var d = a.i,
			e = G(d);
		lc(e); if (null == c) return J(d, e, b), a; for (var f = Vb(c), g = f, h = !!(2 & f) || !!(2048 & f), k = h || Object.isFrozen(c), l = !k && !1, m = !0, p = !0, n = 0; n < c.length; n++) { var r = c[n];
			h || (r = !!(Vb(r.i) & 2), m && (m = !r), p && (p = r)) } h || (f = E(f, 5, !0), f = E(f, 8, m), f = E(f, 16, p), l && (f = E(f, p ? 2 : 2048, !0)), f !== g && (k && (c = Rb(c), f = id(f, e, !0)), D(c, f)), l && Object.freeze(c));
		J(d, e, b, c); return a }

	function id(a, b, c) { a = E(a, 2, !!(2 & b));
		a = E(a, 32, !!(32 & b) && c); return a = E(a, 2048, !1) }

	function td(a, b) { return Ac(I(a, b)) }

	function M(a, b) { return Hc(I(a, b)) }

	function ud(a, b) { return hd(a, b, Hc) }

	function vd(a, b) { return I(a, b) }

	function wd(a, b) { return null != a ? a : b }

	function xd(a, b, c) { return wd(gd(a, b), void 0 === c ? !1 : c) }

	function yd(a, b) { var c = void 0 === c ? 0 : c; return wd(td(a, b), c) }

	function zd(a, b) { var c = void 0 === c ? 0 : c; return wd(Bc(I(a, b)), c) }

	function Ad(a, b) { var c = void 0 === c ? 0 : c; return wd(Ec(I(a, b)), c) }

	function Bd(a, b) { var c = void 0 === c ? 0 : c;
		a = a.i; var d = G(a),
			e = Zc(a, d, b); var f = null == e ? e : "number" === typeof e || "NaN" === e || "Infinity" === e || "-Infinity" === e ? Number(e) : void 0;
		null != f && f !== e && J(a, d, b, f); return wd(f, c) }

	function N(a, b) { return wd(M(a, b), "") }

	function O(a, b) { return wd(I(a, b), 0) }

	function Cd(a, b, c, d) { return K(a, b, dd(a, d, c)) }

	function Dd(a, b, c) { if (null == c) var d = c;
		else { d = !!d; if (!vc(c)) throw sc("int64"); "string" === typeof c ? d = Dc(c, d) : d ? (c = u(Math, "trunc").call(Math, c), !d || u(Number, "isSafeInteger").call(Number, c) ? d = String(c) : (Mb(c), d = Qb())) : d = Cc(c) } return kd(a, b, d, "0") }

	function Ed(a, b) { var c = performance.now(); if (null != c && "number" !== typeof c) throw Error("Value of float/double field must be a number, found " + typeof c + ": " + c);
		kd(a, b, c, 0) }

	function Fd(a, b, c) { return kd(a, b, Gc(c), "") }

	function P(a, b, c) { return kd(a, b, wc(c), 0) };

	function Q(a, b, c) { this.i = H(a, b, c) } Q.prototype.toJSON = function() { if (gc) var a = Sc(this, this.i, !1);
		else a = Qc(this.i, Tc, void 0, void 0, !1, !1), a = Sc(this, a, !0); return a };
	Q.prototype.wa = cc;

	function Sc(a, b, c) {
		var d = a.constructor.v,
			e = G(c ? a.i : b),
			f = bc(e),
			g = !1;
		if (d && hc) { if (!c) { b = Rb(b); var h; if (b.length && fc(h = b[b.length - 1]))
					for (g = 0; g < d.length; g++)
						if (d[g] >= f) { u(Object, "assign").call(Object, b[b.length - 1] = {}, h); break } g = !0 } f = b;
			c = !c;
			h = G(a.i);
			a = bc(h);
			h = +!!(h & 512) - 1; for (var k, l, m = 0; m < d.length; m++)
				if (l = d[m], l < a) { l += h; var p = f[l];
					null == p ? f[l] = c ? jc : Yb() : c && p !== jc && Ub(p) } else k || (p = void 0, f.length && fc(p = f[f.length - 1]) ? k = p : f.push(k = {})), p = k[l], null == k[l] ? k[l] = c ? jc : Yb() : c && p !== jc && Ub(p) } k = b.length;
		if (!k) return b;
		var n;
		if (fc(f = b[k - 1])) { a: { var r = f;c = {};a = !1; for (var A in r)
					if (Object.prototype.hasOwnProperty.call(r, A)) { h = r[A]; if (Array.isArray(h)) { m = h; if (!Jb && ic(h, d, +A) || !Ib && ec(h) && 0 === h.size) h = null;
							h != m && (a = !0) } null != h ? c[A] = h : a = !0 } if (a) { for (var y in c) { r = c; break a } r = null } } r != f && (n = !0);k-- }
		for (e = +!!(e & 512) - 1; 0 < k; k--) { A = k - 1;
			f = b[A]; if (!(null == f || !Jb && ic(f, d, A - e) || !Ib && ec(f) && 0 === f.size)) break; var z = !0 }
		if (!n && !z) return b;
		var F;
		g ? F = b : F = Array.prototype.slice.call(b, 0, k);
		b = F;
		g && (b.length = k);
		r && b.push(r);
		return b
	}

	function Hd(a, b) { if (null == b) return new a; if (!Array.isArray(b)) throw Error("must be an array"); if (Object.isFrozen(b) || Object.isSealed(b) || !Object.isExtensible(b)) throw Error("arrays passed to jspb constructors must be mutable");
		Tb(b, 128); return Lc(a, Zb(b)) };

	function Id(a, b) { var c = Jd;
		Jd = void 0; if (!b(a)) throw b = c ? c() + "\n" : "", Error(b + String(a)); }

	function Kd(a) { return null !== a && void 0 !== a }
	var Jd = void 0;

	function Ld(a) { return function(b) { if (null == b || "" == b) b = new a;
			else { b = JSON.parse(b); if (!Array.isArray(b)) throw Error(void 0);
				b = Lc(a, Zb(b)) } return b } };

	function Md(a) { this.i = H(a) } x(Md, Q);

	function Nd(a) { this.i = H(a) } x(Nd, Q);
	Nd.v = [2, 3, 4];

	function Od(a) { return function() { return !a.apply(this, arguments) } }

	function Pd(a) { var b = !1,
			c; return function() { b || (c = a(), b = !0); return c } }

	function Qd(a) { var b = a; return function() { if (b) { var c = b;
				b = null;
				c() } } };

	function Rd(a, b, c) { a.addEventListener && a.addEventListener(b, c, !1) }

	function Sd(a, b, c) { return a.removeEventListener ? (a.removeEventListener(b, c, !1), !0) : !1 };

	function Td(a, b) { var c = {},
			d; for (d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]); return c }

	function Ud(a, b) { for (var c in a)
			if (b.call(void 0, a[c], c, a)) return !0; return !1 }

	function Vd(a) { var b = [],
			c = 0,
			d; for (d in a) b[c++] = a[d]; return b }

	function Wd(a) { var b = {},
			c; for (c in a) b[c] = a[c]; return b };
	var Xd;

	function Yd(a) { this.h = a } Yd.prototype.toString = function() { return this.h + "" };

	function Zd(a, b) { a = $d.exec(ae(a).toString()); var c = a[3] || ""; return be(a[1] + ce("?", a[2] || "", b) + ce("#", c)) }

	function ae(a) { return a instanceof Yd && a.constructor === Yd ? a.h : "type_error:TrustedResourceUrl" }
	var $d = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
		de = {};

	function be(a) { if (void 0 === Xd) { var b = null; var c = B.trustedTypes; if (c && c.createPolicy) { try { b = c.createPolicy("goog#html", { createHTML: Wa, createScript: Wa, createScriptURL: Wa }) } catch (d) { B.console && B.console.error(d.message) } Xd = b } else Xd = b } a = (b = Xd) ? b.createScriptURL(a) : a; return new Yd(a, de) }

	function ce(a, b, c) { if (null == c) return b; if ("string" === typeof c) return c ? a + encodeURIComponent(c) : ""; for (var d in c)
			if (Object.prototype.hasOwnProperty.call(c, d)) { var e = c[d];
				e = Array.isArray(e) ? e : [e]; for (var f = 0; f < e.length; f++) { var g = e[f];
					null != g && (b || (b = a), b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(g))) } } return b };

	function ee(a) { this.g = a } ee.prototype.toString = function() { return this.g.toString() };

	function fe(a) { return String(a).replace(/\-([a-z])/g, function(b, c) { return c.toUpperCase() }) };

	function ge(a, b, c) {
		function d(h) { h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h) } for (var e = 1; e < c.length; e++) { var f = c[e]; if (!Ma(f) || Na(f) && 0 < f.nodeType) d(f);
			else { a: { if (f && "number" == typeof f.length) { if (Na(f)) { var g = "function" == typeof f.item || "string" == typeof f.item; break a } if ("function" === typeof f) { g = "function" == typeof f.item; break a } } g = !1 } qb(g ? wb(f) : f, d) } } }

	function he(a) { this.g = a || B.document || document } q = he.prototype;
	q.getElementsByTagName = function(a, b) { return (b || this.g).getElementsByTagName(String(a)) };
	q.createElement = function(a) { var b = this.g;
		a = String(a); "application/xhtml+xml" === b.contentType && (a = a.toLowerCase()); return b.createElement(a) };
	q.createTextNode = function(a) { return this.g.createTextNode(String(a)) };
	q.append = function(a, b) { ge(9 == a.nodeType ? a : a.ownerDocument || a.document, a, arguments) };
	q.contains = function(a, b) { if (!a || !b) return !1; if (a.contains && 1 == b.nodeType) return a == b || a.contains(b); if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16); for (; b && a != b;) b = b.parentNode; return b == a };

	function ie() { return bb && eb ? eb.mobile : !je() && (C("iPod") || C("iPhone") || C("Android") || C("IEMobile")) }

	function je() { return bb && eb ? !eb.mobile && (C("iPad") || C("Android") || C("Silk")) : C("iPad") || C("Android") && !C("Mobile") || C("Silk") };
	var le = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"),
		me = /#|$/;

	function ne(a, b) { var c = a.search(me);
		a: { var d = 0; for (var e = b.length; 0 <= (d = a.indexOf(b, d)) && d < c;) { var f = a.charCodeAt(d - 1); if (38 == f || 63 == f)
					if (f = a.charCodeAt(d + e), !f || 61 == f || 38 == f || 35 == f) break a;
				d += e + 1 } d = -1 }
		if (0 > d) return null;
		e = a.indexOf("&", d); if (0 > e || e > c) e = c;
		d += b.length + 1; return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " ")) };
	/* 
	 
	 SPDX-License-Identifier: Apache-2.0 
	*/
	var oe = "function" === typeof URL;
	var pe = "alternate author bookmark canonical cite help icon license next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");

	function qe(a) { try { var b; if (b = !!a && null != a.location.href) a: { try { xb(a.foo);
					b = !0; break a } catch (c) {} b = !1 }
			return b } catch (c) { return !1 } }

	function re(a) { return qe(a.top) ? a.top : null }

	function se(a, b) { var c = te("SCRIPT", a);
		c.src = ae(b); var d, e;
		(d = (b = null == (e = (d = (c.ownerDocument && c.ownerDocument.defaultView || window).document).querySelector) ? void 0 : e.call(d, "script[nonce]")) ? b.nonce || b.getAttribute("nonce") || "" : "") && c.setAttribute("nonce", d); return (a = a.getElementsByTagName("script")[0]) && a.parentNode ? (a.parentNode.insertBefore(c, a), c) : null }

	function ue(a, b) { return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle }

	function ve() { if (!t.globalThis.crypto) return Math.random(); try { var a = new Uint32Array(1);
			t.globalThis.crypto.getRandomValues(a); return a[0] / 65536 / 65536 } catch (b) { return Math.random() } }

	function we(a, b) { if (a)
			for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a) }

	function xe(a) { var b = a.length; if (0 == b) return 0; for (var c = 305419896, d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295; return 0 < c ? c : 4294967296 + c }
	var ye = /^([0-9.]+)px$/,
		ze = /^(-?[0-9.]{1,30})$/;

	function Ae(a) { if (!ze.test(a)) return null;
		a = Number(a); return isNaN(a) ? null : a }

	function Be(a) { return (a = ye.exec(a)) ? +a[1] : null }

	function Ce(a, b) { for (var c = 0; 50 > c; ++c) { try { var d = !(!a.frames || !a.frames[b]) } catch (g) { d = !1 } if (d) return a;
			a: { try { var e = a.parent; if (e && e != a) { var f = e; break a } } catch (g) {} f = null }
			if (!(a = f)) break } return null }
	var De = Pd(function() { return ie() ? 2 : je() ? 1 : 0 });

	function Ee(a) { we({ display: "none" }, function(b, c) { a.style.setProperty(c, b, "important") }) }
	var Fe = [];

	function Ge() { var a = Fe;
		Fe = [];
		a = w(a); for (var b = a.next(); !b.done; b = a.next()) { b = b.value; try { b() } catch (c) {} } }

	function He() { var a = R(Ie).h(Je.g, Je.defaultValue),
			b = S.document; if (a.length && b.head) { a = w(a); for (var c = a.next(); !c.done; c = a.next())
				if ((c = c.value) && b.head) { var d = te("META");
					b.head.appendChild(d);
					d.httpEquiv = "origin-trial";
					d.content = c } } }

	function Ke() { var a = void 0 === a ? Math.random : a; return Math.floor(a() * Math.pow(2, 52)) }

	function Le(a) { if ("number" !== typeof a.goog_pvsid) try { Object.defineProperty(a, "goog_pvsid", { value: Ke(), configurable: !1 }) } catch (b) {}
		return Number(a.goog_pvsid) || -1 }

	function Me(a) { var b = Ne; "complete" === b.readyState || "interactive" === b.readyState ? (Fe.push(a), 1 == Fe.length && (t.Promise ? t.Promise.resolve().then(Ge) : window.setImmediate ? setImmediate(Ge) : setTimeout(Ge, 0))) : b.addEventListener("DOMContentLoaded", a) }

	function te(a, b) { b = void 0 === b ? document : b; return b.createElement(String(a).toLowerCase()) };

	function Oe(a, b, c, d) { d = void 0 === d ? !1 : d;
		a.google_image_requests || (a.google_image_requests = []); var e = te("IMG", a.document); if (c) { var f = function() { if (c) { var g = a.google_image_requests,
						h = pb(g, e);
					0 <= h && Array.prototype.splice.call(g, h, 1) } Sd(e, "load", f);
				Sd(e, "error", f) };
			Rd(e, "load", f);
			Rd(e, "error", f) } d && (e.attributionSrc = "");
		e.src = b;
		a.google_image_requests.push(e) }

	function Pe(a) { var b = void 0 === b ? !1 : b; var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
		we(a, function(d, e) { if (d || 0 === d) c += "&" + e + "=" + encodeURIComponent("" + d) });
		Qe(c, b) }

	function Qe(a, b) { var c = window;
		b = void 0 === b ? !1 : b; var d = void 0 === d ? !1 : d;
		c.fetch ? (b = { keepalive: !0, credentials: "include", redirect: "follow", method: "get", mode: "no-cors" }, d && (b.mode = "cors", "setAttributionReporting" in XMLHttpRequest.prototype ? b.attributionReporting = { eventSourceEligible: "true", triggerEligible: "false" } : b.headers = { "Attribution-Reporting-Eligible": "event-source" }), c.fetch(a, b)) : Oe(c, a, void 0 === b ? !1 : b, void 0 === d ? !1 : d) };
	var Re = null;
	var Ne = document,
		S = window;

	function Se(a) { this.g = a || { cookie: "" } }
	Se.prototype.set = function(a, b, c) {
		var d = !1;
		if ("object" === typeof c) { var e = c.Ec;
			d = c.Fc || !1; var f = c.domain || void 0; var g = c.path || void 0; var h = c.Nb }
		if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
		if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
		void 0 === h && (h = -1);
		this.g.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (g ? ";path=" + g : "") + (0 > h ? "" : 0 == h ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * h)).toUTCString()) + (d ? ";secure" : "") + (null != e ? ";samesite=" +
			e : "")
	};
	Se.prototype.get = function(a, b) { for (var c = a + "=", d = (this.g.cookie || "").split(";"), e = 0, f; e < d.length; e++) { f = Za(d[e]); if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length); if (f == a) return "" } return b };
	Se.prototype.isEmpty = function() { return !this.g.cookie };
	Se.prototype.clear = function() { for (var a = (this.g.cookie || "").split(";"), b = [], c = [], d, e, f = 0; f < a.length; f++) e = Za(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1))); for (a = b.length - 1; 0 <= a; a--) c = b[a], this.get(c), this.set(c, "", { Nb: 0, path: void 0, domain: void 0 }) };

	function Te(a) { var b = Ga.apply(1, arguments); if (0 === b.length) return be(a[0]); for (var c = a[0], d = 0; d < b.length; d++) c += encodeURIComponent(b[d]) + a[d + 1]; return be(c) };
	var Ue = la(["https://pagead2.googlesyndication.com/pagead/js/logging_library.js"]),
		Ve = null;

	function We(a, b) { b = void 0 === b ? [] : b; var c = !1;
		B.google_logging_queue || (c = !0, B.google_logging_queue = []);
		B.google_logging_queue.push([a, b]); if (a = c) { if (null == Ve) { Ve = !1; try { var d = re(B);
					d && -1 !== d.location.hash.indexOf("google_logging") && (Ve = !0); var e;
					d = B;
					d = void 0 === d ? window : d; try { var f = d.localStorage } catch (g) { f = null } if (null == (e = f) ? 0 : e.getItem("google_logging")) Ve = !0 } catch (g) {} } a = Ve } a && se(B.document, Te(Ue)) };

	function Xe(a) { a = void 0 === a ? B : a; var b = a.context || a.AMP_CONTEXT_DATA; if (!b) try { b = a.parent.context || a.parent.AMP_CONTEXT_DATA } catch (e) {}
		var c, d; return (null == (c = b) ? 0 : c.pageViewId) && (null == (d = b) ? 0 : d.canonicalUrl) ? b : null }

	function Ye(a) { return (a = void 0 === a ? Xe() : a) ? qe(a.master) ? a.master : null : null };

	function Ze(a) { var b = void 0 === b ? 1 : b;
		a = Ye(Xe(a)) || a;
		a.google_unique_id = (a.google_unique_id || 0) + b; return a.google_unique_id }

	function $e(a) { a = a.google_unique_id; return "number" === typeof a ? a : 0 }

	function af() { var a = void 0 === a ? S : a; if (!a) return !1; try { return !(!a.navigator.standalone && !a.top.navigator.standalone) } catch (b) { return !1 } }

	function bf(a) { if (!a) return "";
		a = a.toLowerCase(); "ca-" != a.substring(0, 3) && (a = "ca-" + a); return a };

	function cf(a, b) { var c = void 0 === c ? {} : c;
		this.error = a;
		this.context = b.context;
		this.msg = b.message || "";
		this.id = b.id || "jserror";
		this.meta = c }

	function df(a) { return !!(a.error && a.meta && a.id) };
	var ef = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");

	function ff(a, b) { this.g = a;
		this.h = b }

	function gf(a, b, c) { this.url = a;
		this.s = b;
		this.nb = !!c;
		this.depth = null };
	var hf = null;

	function jf() { if (null === hf) { hf = ""; try { var a = ""; try { a = B.top.location.hash } catch (c) { a = B.location.hash } if (a) { var b = a.match(/\bdeid=([\d,]+)/);
					hf = b ? b[1] : "" } } catch (c) {} } return hf };

	function kf() { var a = void 0 === a ? B : a; return (a = a.performance) && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now() }

	function lf() { var a = void 0 === a ? B : a; return (a = a.performance) && a.now ? a.now() : null };

	function mf(a, b) { var c = lf() || kf();
		this.label = a;
		this.type = b;
		this.value = c;
		this.duration = 0;
		this.taskId = this.slotId = void 0;
		this.uniqueId = Math.random() };
	var nf = B.performance,
		of = !!(nf && nf.mark && nf.measure && nf.clearMarks),
		pf = Pd(function() { var a; if (a = of) a = jf(), a = !!a.indexOf && 0 <= a.indexOf("1337"); return a });

	function qf(a) { this.h = [];
		this.j = a || B; var b = null;
		a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.h = a.google_js_reporting_queue, b = a.google_measure_js_timing);
		this.g = pf() || (null != b ? b : 1 > Math.random()) }

	function rf(a) { a.g = !1;
		a.h != a.j.google_js_reporting_queue && (pf() && qb(a.h, sf), a.h.length = 0) }

	function sf(a) { a && nf && pf() && (nf.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"), nf.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end")) } qf.prototype.start = function(a, b) { if (!this.g) return null;
		a = new mf(a, b);
		b = "goog_" + a.label + "_" + a.uniqueId + "_start";
		nf && pf() && nf.mark(b); return a };
	qf.prototype.end = function(a) { if (this.g && "number" === typeof a.value) { a.duration = (lf() || kf()) - a.value; var b = "goog_" + a.label + "_" + a.uniqueId + "_end";
			nf && pf() && nf.mark(b);!this.g || 2048 < this.h.length || this.h.push(a) } };

	function tf() { this.j = "&";
		this.h = {};
		this.l = 0;
		this.g = [] }

	function uf(a, b) { var c = {};
		c[a] = b; return [c] }

	function vf(a, b, c, d, e) { var f = [];
		we(a, function(g, h) {
			(g = wf(g, b, c, d, e)) && f.push(h + "=" + g) }); return f.join(b) }

	function wf(a, b, c, d, e) { if (null == a) return "";
		b = b || "&";
		c = c || ",$"; "string" == typeof c && (c = c.split("")); if (a instanceof Array) { if (d = d || 0, d < c.length) { for (var f = [], g = 0; g < a.length; g++) f.push(wf(a[g], b, c, d + 1, e)); return f.join(c[d]) } } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(vf(a, b, c, d, e + 1)) : "..."; return encodeURIComponent(String(a)) }

	function xf(a, b) { var c = "https://pagead2.googlesyndication.com" + b,
			d = yf(a) - b.length; if (0 > d) return "";
		a.g.sort(function(m, p) { return m - p });
		b = null; for (var e = "", f = 0; f < a.g.length; f++)
			for (var g = a.g[f], h = a.h[g], k = 0; k < h.length; k++) { if (!d) { b = null == b ? g : b; break } var l = vf(h[k], a.j, ",$"); if (l) { l = e + l; if (d >= l.length) { d -= l.length;
						c += l;
						e = a.j; break } b = null == b ? g : b } } a = "";
		null != b && (a = e + "trn=" + b); return c + a }

	function yf(a) { var b = 1,
			c; for (c in a.h) b = c.length > b ? c.length : b; return 3997 - b - a.j.length - 1 };

	function zf(a, b, c) { this.m = a;
		this.u = b;
		this.h = void 0 === c ? null : c;
		this.g = null;
		this.j = !1;
		this.l = this.M } q = zf.prototype;
	q.vb = function(a) { this.l = a };
	q.Ma = function(a) { this.g = a };
	q.Na = function(a) { this.j = a };
	q.ya = function(a, b, c) { try { if (this.h && this.h.g) { var d = this.h.start(a.toString(), 3); var e = b();
				this.h.end(d) } else e = b() } catch (h) { b = this.u; try { sf(d), b = this.l(a, new cf(h, { message: Af(h) }), void 0, c) } catch (k) { this.M(217, k) } if (b) { var f, g;
				null == (f = window.console) || null == (g = f.error) || g.call(f, h) } else throw h; } return e };
	q.sb = function(a, b) { var c = this; return function() { var d = Ga.apply(0, arguments); return c.ya(a, function() { return b.apply(void 0, d) }) } };
	q.M = function(a, b, c, d, e) {
		e = e || "jserror";
		try {
			var f = new tf;
			f.g.push(1);
			f.h[1] = uf("context", a);
			df(b) || (b = new cf(b, { message: Af(b) }));
			if (b.msg) { var g = b.msg.substring(0, 512);
				f.g.push(2);
				f.h[2] = uf("msg", g) }
			var h = b.meta || {};
			if (this.g) try { this.g(h) } catch (Xb) {}
			if (d) try { d(h) } catch (Xb) {} b = [h];
			f.g.push(3);
			f.h[3] = b;
			d = B;
			b = [];
			g = null;
			do { var k = d; if (qe(k)) { var l = k.location.href;
					g = k.document && k.document.referrer || null } else l = g, g = null;
				b.push(new gf(l || "", k)); try { d = k.parent } catch (Xb) { d = null } } while (d && k != d);
			l = 0;
			for (var m =
					b.length - 1; l <= m; ++l) b[l].depth = m - l;
			k = B;
			if (k.location && k.location.ancestorOrigins && k.location.ancestorOrigins.length == b.length - 1)
				for (m = 1; m < b.length; ++m) { var p = b[m];
					p.url || (p.url = k.location.ancestorOrigins[m - 1] || "", p.nb = !0) }
			var n = new gf(B.location.href, B, !1);
			k = null;
			var r = b.length - 1;
			for (p = r; 0 <= p; --p) { var A = b[p];!k && ef.test(A.url) && (k = A); if (A.url && !A.nb) { n = A; break } } A = null;
			var y = b.length && b[r].url;
			0 != n.depth && y && (A = b[r]);
			var z = new ff(n, A);
			if (z.h) { var F = z.h.url || "";
				f.g.push(4);
				f.h[4] = uf("top", F) }
			var da = { url: z.g.url || "" };
			if (z.g.url) { var ha = z.g.url.match(le),
					W = ha[1],
					ob = ha[3],
					Db = ha[4];
				n = "";
				W && (n += W + ":");
				ob && (n += "//", n += ob, Db && (n += ":" + Db)); var Gd = n } else Gd = "";
			da = [da, { url: Gd }];
			f.g.push(5);
			f.h[5] = da;
			Bf(this.m, e, f, this.j, c)
		} catch (Xb) { try { Bf(this.m, e, { context: "ecmserr", rctx: a, msg: Af(Xb), url: z && z.g.url }, this.j, c) } catch (oi) {} }
		return this.u
	};
	q.Ja = function(a, b) { var c = this;
		b.catch(function(d) { d = d ? d : "unknown rejection";
			c.M(a, d instanceof Error ? d : Error(d), void 0, c.g || void 0) }) };

	function Af(a) { var b = a.toString();
		a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
		a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message); if (a.stack) { a = a.stack; var c = b; try {-1 == a.indexOf(c) && (a = c + "\n" + a); for (var d; a != d;) d = a, a = a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
				b = a.replace(RegExp("\n *", "g"), "\n") } catch (e) { b = c } } return b };

	function Cf(a) { return "string" === typeof a }

	function Df(a) { return void 0 === a };

	function Ef(a) { this.i = H(a) } x(Ef, Q);
	Ef.v = [2, 8];
	var Ff = [3, 4, 5],
		Gf = [6, 7];

	function Hf(a) { return null != a ? !a : a }

	function If(a, b) { for (var c = !1, d = 0; d < a.length; d++) { var e = a[d](); if (e === b) return e;
			null == e && (c = !0) } if (!c) return !b }

	function Jf(a, b) { var c = L(a, Ef, 2); if (!c.length) return Kf(a, b);
		a = O(a, 1); if (1 === a) return Hf(Jf(c[0], b));
		c = sb(c, function(d) { return function() { return Jf(d, b) } }); switch (a) {
			case 2:
				return If(c, !1);
			case 3:
				return If(c, !0) } }

	function Kf(a, b) {
		var c = nd(a, Ff);
		a: { switch (c) {
				case 3:
					var d = O(a, dd(a, Ff, 3)); break a;
				case 4:
					d = O(a, dd(a, Ff, 4)); break a;
				case 5:
					d = O(a, dd(a, Ff, 5)); break a } d = void 0 }
		if (d && (b = (b = b[c]) && b[d])) {
			try { var e = b.apply(null, ma(ud(a, 8))) } catch (f) { return } b = O(a, 1);
			if (4 === b) return !!e;
			if (5 === b) return null != e;
			if (12 === b) a = N(a, dd(a, Gf, 7));
			else a: { switch (c) {
					case 4:
						a = Bd(a, dd(a, Gf, 6)); break a;
					case 5:
						a = N(a, dd(a, Gf, 7)); break a } a = void 0 }
			if (null != a) {
				if (6 === b) return e === a;
				if (9 === b) return null != e && 0 === $a(String(e), a);
				if (null != e) switch (b) {
					case 7:
						return e <
							a;
					case 8:
						return e > a;
					case 12:
						return Cf(a) && Cf(e) && (new RegExp(a)).test(e);
					case 10:
						return null != e && -1 === $a(String(e), a);
					case 11:
						return null != e && 1 === $a(String(e), a)
				}
			}
		}
	}

	function Lf(a, b) { return !a || !(!b || !Jf(a, b)) };

	function Mf(a) { this.i = H(a) } x(Mf, Q);
	Mf.v = [4];

	function Nf(a) { this.i = H(a) } x(Nf, Q);
	Nf.prototype.getValue = function() { return K(this, Mf, 2) };

	function Of(a) { this.i = H(a) } x(Of, Q);
	var Pf = Ld(Of);
	Of.v = [5];
	var Qf = [1, 2, 3, 6, 7];

	function Rf(a) { this.i = H(a) } x(Rf, Q);

	function Sf(a, b) {
		function c(d) { var e = {}; return [(e[d.Oa] = d.Ia, e)] } return JSON.stringify([a.filter(function(d) { return d.va }).map(c), b.toJSON(), a.filter(function(d) { return !d.va }).map(c)]) }

	function Tf(a, b) { var c = new Rf;
		a = P(c, 1, a);
		b = Fd(a, 2, b);
		a = b.i;
		c = G(a);
		this.m = c & 2 ? b : Lc(b.constructor, Wc(a, c, !0)) };

	function Uf(a) { this.i = H(a) } x(Uf, Q);
	Uf.v = [2];

	function Vf(a) { this.i = H(a) } x(Vf, Q);
	Vf.prototype.getValue = function() { return O(this, 1) };

	function Wf(a) { var b = new Vf; return $c(b, 1, wc(a)) };

	function Xf(a) { this.i = H(a) } x(Xf, Q);
	Xf.prototype.getWidth = function() { return Ad(this, 1) };

	function Yf(a, b) { return Dd(a, 1, b) } Xf.prototype.getHeight = function() { return Ad(this, 2) };

	function Zf(a, b) { return Dd(a, 2, b) };

	function $f(a) { this.i = H(a) } x($f, Q);

	function ag(a, b) { return qd(a, 1, b) }

	function bg(a, b) { return qd(a, 2, b) }

	function cg(a, b) { qd(a, 3, b) } $f.prototype.getContentUrl = function() { return N(this, 4) };

	function dg(a, b) { Fd(a, 4, b) }

	function eg(a, b) { return kd(a, 5, tc(b), !1) };

	function pd(a) { this.i = H(a) } x(pd, Q);

	function fg(a) { this.i = H(a) } x(fg, Q);

	function gg(a) { this.i = H(a) } x(gg, Q);
	gg.prototype.getContentUrl = function() { return N(this, 1) };

	function hg(a, b) { Fd(a, 1, b) };

	function ig(a) { this.i = H(a) } x(ig, Q);

	function jg(a) { var b = new ig; return P(b, 1, a) };

	function kg(a) { this.i = H(a) } x(kg, Q);

	function lg(a, b) { return rd(a, 4, mg, b) }
	var mg = [4, 5, 6, 8, 9, 10, 11];

	function ng(a) { this.i = H(a) } x(ng, Q);

	function og(a) { this.i = H(a) } x(og, Q);

	function pg(a, b) { return P(a, 1, b) }

	function qg(a, b) { return P(a, 2, b) };

	function rg(a) { this.i = H(a) } x(rg, Q);
	var sg = [1, 2];

	function tg(a) { this.i = H(a) } x(tg, Q);

	function ug(a, b) { return qd(a, 1, b) }

	function vg(a, b) { return sd(a, 2, b) }

	function wg(a, b) { return jd(a, 4, b, yc) }

	function xg(a, b) { return sd(a, 5, b) }

	function yg(a, b) { return P(a, 6, b) } tg.v = [2, 4, 5];

	function zg(a) { this.i = H(a) } x(zg, Q);
	zg.v = [5];
	var Ag = [1, 2, 3, 4];

	function Bg(a) { this.i = H(a) } x(Bg, Q);
	Bg.v = [2, 3];

	function Cg(a) { this.i = H(a) } x(Cg, Q);
	Cg.prototype.getTagSessionCorrelator = function() { return Ad(this, 2) };

	function Dg(a) { var b = new Cg; return rd(b, 4, Eg, a) }
	var Eg = [4, 5, 7, 8];

	function Fg(a) { this.i = H(a) } x(Fg, Q);

	function Gg(a) { this.i = H(a) } x(Gg, Q);
	Gg.v = [4, 5];

	function Hg(a) { this.i = H(a) } x(Hg, Q);
	Hg.prototype.getTagSessionCorrelator = function() { return Ad(this, 1) };
	Hg.v = [2];

	function Ig(a) { this.i = H(a) } x(Ig, Q);
	var Jg = [4, 6];

	function Kg() { Tf.apply(this, arguments) } x(Kg, Tf);

	function Lg() { Kg.apply(this, arguments) } x(Lg, Kg);
	Lg.prototype.Z = function() { this.j.apply(this, ma(Ga.apply(0, arguments).map(function(a) { return { va: !0, Oa: 3, Ia: a.toJSON() } }))) };
	Lg.prototype.Ka = function() { this.j.apply(this, ma(Ga.apply(0, arguments).map(function(a) { return { va: !0, Oa: 4, Ia: a.toJSON() } }))) };
	Lg.prototype.Aa = function() { this.j.apply(this, ma(Ga.apply(0, arguments).map(function(a) { return { va: !0, Oa: 7, Ia: a.toJSON() } }))) };

	function Mg(a, b) { if (t.globalThis.fetch) t.globalThis.fetch(a, { method: "POST", body: b, keepalive: 65536 > b.length, credentials: "omit", mode: "no-cors", redirect: "follow" }).catch(function() {});
		else { var c = new XMLHttpRequest;
			c.open("POST", a, !0);
			c.send(b) } };

	function Ng(a, b, c, d, e, f, g, h) { Lg.call(this, a, b);
		this.L = c;
		this.G = d;
		this.T = e;
		this.A = f;
		this.B = g;
		this.l = h;
		this.g = [];
		this.h = null;
		this.u = !1 } x(Ng, Lg);

	function Og(a) { null !== a.h && (clearTimeout(a.h), a.h = null); if (a.g.length) { var b = Sf(a.g, a.m);
			a.G(a.L + "?e=1", b);
			a.g = [] } }
	Ng.prototype.j = function() { var a = Ga.apply(0, arguments),
			b = this;
		this.B && 65536 <= Sf(this.g.concat(a), this.m).length && Og(this);
		this.l && !this.u && (this.u = !0, Pg(this.l, function() { Og(b) }));
		this.g.push.apply(this.g, ma(a));
		this.g.length >= this.A && Og(this);
		this.g.length && null === this.h && (this.h = setTimeout(function() { Og(b) }, this.T)) };

	function Qg(a, b, c, d, e, f) { Ng.call(this, a, b, "https://pagead2.googlesyndication.com/pagead/ping", Mg, void 0 === c ? 1E3 : c, void 0 === d ? 100 : d, (void 0 === e ? !1 : e) && !!t.globalThis.fetch, f) } x(Qg, Ng);

	function Rg(a, b, c) { var d = void 0 === d ? new Qg(6, "unknown", b) : d;
		this.m = a;
		this.l = c;
		this.h = d;
		this.g = [];
		this.j = 0 < a && ve() < 1 / a }

	function Sg(a, b, c, d, e, f) { if (a.j) { var g = qg(pg(new og, b), c);
			b = yg(vg(ug(xg(wg(new tg, d), e), g), a.g.slice()), f);
			b = Dg(b);
			a.h.Ka(Tg(a, b)); if (1 === f || 3 === f || 4 === f && !a.g.some(function(h) { return O(h, 1) === O(g, 1) && O(h, 2) === c })) a.g.push(g), 100 < a.g.length && a.g.shift() } }

	function Ug(a, b, c, d) { if (a.j && a.l) { var e = new Bg;
			b = sd(e, 2, b);
			c = sd(b, 3, c);
			d && kd(c, 1, zc(d), 0);
			d = new Cg;
			d = rd(d, 7, Eg, c);
			a.h.Ka(Tg(a, d)) } }

	function Vg(a, b, c, d) { if (a.j) { var e = new ng;
			b = $c(e, 1, zc(b));
			c = $c(b, 2, zc(c));
			d = $c(c, 3, wc(d));
			c = new Cg;
			d = rd(c, 8, Eg, d);
			a.h.Ka(Tg(a, d)) } }

	function Tg(a, b) { var c = Date.now();
		c = u(Number, "isFinite").call(Number, c) ? Math.round(c) : 0;
		b = Dd(b, 1, c);
		c = Le(window);
		b = Dd(b, 2, c); return Dd(b, 6, a.m) };

	function R(a) { var b = "Ha"; if (a.Ha && a.hasOwnProperty(b)) return a.Ha;
		b = new a; return a.Ha = b };

	function Wg() { var a = {};
		this.H = (a[3] = {}, a[4] = {}, a[5] = {}, a) };
	var Xg = /^true$/.test("false");

	function Yg(a, b) { switch (b) {
			case 1:
				return O(a, dd(a, Qf, 1));
			case 2:
				return O(a, dd(a, Qf, 2));
			case 3:
				return O(a, dd(a, Qf, 3));
			case 6:
				return O(a, dd(a, Qf, 6));
			default:
				return null } }

	function Zg(a, b) { if (!a) return null; switch (b) {
			case 1:
				return xd(a, 1);
			case 7:
				return N(a, 3);
			case 2:
				return Bd(a, 2);
			case 3:
				return N(a, 3);
			case 6:
				return ud(a, 4);
			default:
				return null } }
	var $g = Pd(function() { if (!Xg) return {}; try { var a; var b = void 0 === b ? window : b; try { var c = b.sessionStorage } catch (e) { c = null } var d = null == (a = c) ? void 0 : a.getItem("GGDFSSK"); if (d) return JSON.parse(d) } catch (e) {} return {} });

	function ah(a, b, c, d) { var e = d = void 0 === d ? 0 : d,
			f, g;
		R(bh).j[e] = null != (g = null == (f = R(bh).j[e]) ? void 0 : f.add(b)) ? g : (new t.Set).add(b);
		e = $g(); if (null != e[b]) return e[b];
		b = ch(d)[b]; if (!b) return c;
		b = Pf(JSON.stringify(b));
		b = dh(b);
		a = Zg(b, a); return null != a ? a : c }

	function dh(a) { var b = R(Wg).H; if (b) { var c = ub(L(a, Nf, 5), function(f) { return Lf(K(f, Ef, 1), b) }); if (c) { var d; return null != (d = c.getValue()) ? d : null } } var e; return null != (e = K(a, Mf, 4)) ? e : null }

	function bh() { this.h = {};
		this.l = [];
		this.j = {};
		this.g = new t.Map }

	function eh(a, b, c) { return !!ah(1, a, void 0 === b ? !1 : b, c) }

	function fh(a, b, c) { b = void 0 === b ? 0 : b;
		a = Number(ah(2, a, b, c)); return isNaN(a) ? b : a }

	function gh(a, b, c) { b = void 0 === b ? "" : b;
		a = ah(3, a, b, c); return "string" === typeof a ? a : b }

	function hh(a, b, c) { b = void 0 === b ? [] : b;
		a = ah(6, a, b, c); return Array.isArray(a) ? a : b }

	function ch(a) { return R(bh).h[a] || (R(bh).h[a] = {}) }

	function ih(a, b) { var c = ch(b);
		we(a, function(d, e) { return c[e] = d }) }

	function jh(a, b, c, d, e) {
		e = void 0 === e ? !1 : e;
		var f = [],
			g = [];
		qb(b, function(h) {
			var k = ch(h);
			qb(a, function(l) {
				var m = nd(l, Qf),
					p = Yg(l, m);
				if (p) {
					var n, r, A;
					var y = null != (A = null == (n = R(bh).g.get(h)) ? void 0 : null == (r = n.get(p)) ? void 0 : r.slice(0)) ? A : [];
					a: { n = new zg; switch (m) {
							case 1:
								ld(n, 1, Ag, wc(p)); break;
							case 2:
								ld(n, 2, Ag, wc(p)); break;
							case 3:
								ld(n, 3, Ag, wc(p)); break;
							case 6:
								ld(n, 4, Ag, wc(p)); break;
							default:
								m = void 0; break a } jd(n, 5, y, yc);m = n }
					if (y = m) { var z;
						y = !(null == (z = R(bh).j[h]) || !z.has(p)) } y && f.push(m);
					if (z = m) {
						var F;
						z = !(null ==
							(F = R(bh).g.get(h)) || !F.has(p))
					}
					z && g.push(m);
					e || (F = R(bh), F.g.has(h) || F.g.set(h, new t.Map), F.g.get(h).has(p) || F.g.get(h).set(p, []), d && F.g.get(h).get(p).push(d));
					k[p] = l.toJSON()
				}
			})
		});
		(f.length || g.length) && Ug(c, f, g, null != d ? d : void 0)
	}

	function kh(a, b) { var c = ch(b);
		qb(a, function(d) { var e = Pf(JSON.stringify(d)),
				f = nd(e, Qf);
			(e = Yg(e, f)) && (c[e] || (c[e] = d)) }) }

	function lh() { return sb(u(Object, "keys").call(Object, R(bh).h), function(a) { return Number(a) }) }

	function mh(a) { vb(R(bh).l, a) || ih(ch(4), a) };

	function nh(a, b, c) { c.hasOwnProperty(a) || Object.defineProperty(c, String(a), { value: b }) }

	function oh(a, b, c) { return b[a] || c }

	function ph(a) { nh(5, eh, a);
		nh(6, fh, a);
		nh(7, gh, a);
		nh(8, hh, a);
		nh(13, kh, a);
		nh(15, mh, a) }

	function qh(a) { nh(4, function(b) { R(Wg).H = b }, a);
		nh(9, function(b, c) { var d = R(Wg);
			null == d.H[3][b] && (d.H[3][b] = c) }, a);
		nh(10, function(b, c) { var d = R(Wg);
			null == d.H[4][b] && (d.H[4][b] = c) }, a);
		nh(11, function(b, c) { var d = R(Wg);
			null == d.H[5][b] && (d.H[5][b] = c) }, a);
		nh(14, function(b) { for (var c = R(Wg), d = w([3, 4, 5]), e = d.next(); !e.done; e = d.next()) e = e.value, u(Object, "assign").call(Object, c.H[e], b[e]) }, a) }

	function rh(a) { a.hasOwnProperty("init-done") || Object.defineProperty(a, "init-done", { value: !0 }) };

	function sh() {} sh.prototype.j = function() {};
	sh.prototype.h = function() {};
	sh.prototype.l = function() { return [] };
	sh.prototype.g = function() { return [] };

	function th(a, b, c) { a.j = oh(1, b, function() {});
		a.l = function(d, e) { return oh(2, b, function() { return [] })(d, c, e) };
		a.g = function() { return oh(3, b, function() { return [] })(c) };
		a.h = function(d) { oh(16, b, function() {})(d, c) } };

	function uh() { this.g = Math.random() }

	function vh(a, b) { 0 <= b && 1 >= b && (a.g = b) }

	function Bf(a, b, c, d, e) { if (((void 0 === d ? 0 : d) ? a.g : Math.random()) < (e || .01)) try { if (c instanceof tf) var f = c;
			else f = new tf, we(c, function(h, k) { var l = f,
					m = l.l++;
				h = uf(k, h);
				l.g.push(m);
				l.h[m] = h }); var g = xf(f, "/pagead/gen_204?id=" + b + "&");
			g && Oe(B, g, !1, !1) } catch (h) {} };
	var wh, xh, yh = new qf(window);
	(function(a) { wh = null != a ? a : new uh; "number" !== typeof window.google_srt && (window.google_srt = Math.random());
		vh(wh, window.google_srt);
		xh = new zf(wh, !0, yh);
		xh.Ma(function() {});
		xh.Na(!0); "complete" == window.document.readyState ? window.google_measure_js_timing || rf(yh) : yh.g && Rd(window, "load", function() { window.google_measure_js_timing || rf(yh) }) })();
	var zh = { rc: 0, qc: 1, mc: 2, hc: 3, nc: 4, ic: 5, oc: 6, kc: 7, lc: 8, ec: 9, jc: 10, sc: 11 };
	var Ah = { uc: 0, vc: 1, tc: 2 };

	function Bh() { this.h = new Ch(this);
		this.g = 0 } Bh.prototype.resolve = function(a) { Dh(this);
		this.g = 1;
		this.l = a;
		Eh(this.h) };
	Bh.prototype.reject = function(a) { Dh(this);
		this.g = 2;
		this.j = a;
		Eh(this.h) };

	function Dh(a) { if (0 != a.g) throw Error("Already resolved/rejected."); }

	function Ch(a) { this.g = a } Ch.prototype.then = function(a, b) { if (this.h) throw Error("Then functions already set.");
		this.h = a;
		this.j = b;
		Eh(this) };

	function Eh(a) { switch (a.g.g) {
			case 0:
				break;
			case 1:
				a.h && a.h(a.g.l); break;
			case 2:
				a.j && a.j(a.g.j); break;
			default:
				throw Error("Unhandled deferred state."); } };

	function Fh(a) { this.g = a.slice(0) } q = Fh.prototype;
	q.forEach = function(a) { var b = this;
		this.g.forEach(function(c, d) { return void a(c, d, b) }) };
	q.filter = function(a) { return new Fh(rb(this.g, a)) };
	q.apply = function(a) { return new Fh(a(this.g.slice(0))) };
	q.sort = function(a) { return new Fh(this.g.slice(0).sort(a)) };
	q.get = function(a) { return this.g[a] };
	q.add = function(a) { var b = this.g.slice(0);
		b.push(a); return new Fh(b) };

	function Gh(a, b) { for (var c = [], d = a.length, e = 0; e < d; e++) c.push(a[e]);
		c.forEach(b, void 0) };

	function Hh() { this.g = {};
		this.h = {} } Hh.prototype.set = function(a, b) { var c = Ih(a);
		this.g[c] = b;
		this.h[c] = a };
	Hh.prototype.get = function(a, b) { a = Ih(a); return void 0 !== this.g[a] ? this.g[a] : b };
	Hh.prototype.clear = function() { this.g = {};
		this.h = {} };

	function Ih(a) { return a instanceof Object ? String(Oa(a)) : a + "" };

	function Jh(a, b) { this.g = a;
		this.h = b } Jh.prototype.getValue = function() { return this.g.value };

	function Kh(a) { return null != a.g ? a.getValue() : null }

	function Lh(a, b) { null != a.g && b(a.getValue()); return a } Jh.prototype.map = function(a) { return null != this.g ? (a = a(this.getValue()), a instanceof Jh ? a : Mh(a)) : this };

	function Nh(a, b) { null != a.g || b(a.h); return a }

	function Mh(a) { return new Jh({ value: a }, null) }

	function Oh(a) { return new Jh(null, a) }

	function Ph(a) { try { return Mh(a()) } catch (b) { return Oh(b) } };

	function Qh(a) { this.g = new Hh; if (a)
			for (var b = 0; b < a.length; ++b) this.add(a[b]) } Qh.prototype.add = function(a) { this.g.set(a, !0) };
	Qh.prototype.contains = function(a) { return void 0 !== this.g.g[Ih(a)] };

	function Rh() { this.g = new Hh } Rh.prototype.set = function(a, b) { var c = this.g.get(a);
		c || (c = new Qh, this.g.set(a, c));
		c.add(b) };

	function Sh(a) { this.i = H(a) } x(Sh, Q);
	Sh.prototype.getId = function() { return M(this, 3) };
	Sh.v = [4];

	function Th(a) { var b = void 0 === a.eb ? void 0 : a.eb,
			c = void 0 === a.Hb ? void 0 : a.Hb,
			d = void 0 === a.ub ? void 0 : a.ub;
		this.g = void 0 === a.Ab ? void 0 : a.Ab;
		this.l = new Fh(b || []);
		this.j = d;
		this.h = c };

	function Uh(a) { var b = [],
			c = a.l;
		c && c.g.length && b.push({ ba: "a", ja: Vh(c) });
		null != a.g && b.push({ ba: "as", ja: a.g });
		null != a.h && b.push({ ba: "i", ja: String(a.h) });
		null != a.j && b.push({ ba: "rp", ja: String(a.j) });
		b.sort(function(d, e) { return d.ba.localeCompare(e.ba) });
		b.unshift({ ba: "t", ja: "aa" }); return b }

	function Vh(a) { a = a.g.slice(0).map(Wh);
		a = JSON.stringify(a); return xe(a) }

	function Wh(a) { var b = {};
		null != M(a, 7) && (b.q = M(a, 7));
		null != td(a, 2) && (b.o = td(a, 2));
		null != td(a, 5) && (b.p = td(a, 5)); return b };

	function Xh(a) { this.i = H(a) } x(Xh, Q);
	Xh.prototype.setLocation = function(a) { return $c(this, 1, wc(a)) };

	function Yh(a, b) { this.jb = a;
		this.tb = b }

	function Zh(a) { var b = [].slice.call(arguments).filter(Od(function(e) { return null === e })); if (!b.length) return null; var c = [],
			d = {};
		b.forEach(function(e) { c = c.concat(e.jb || []);
			d = u(Object, "assign").call(Object, d, e.tb) }); return new Yh(c, d) }

	function $h(a) { switch (a) {
			case 1:
				return new Yh(null, { google_ad_semantic_area: "mc" });
			case 2:
				return new Yh(null, { google_ad_semantic_area: "h" });
			case 3:
				return new Yh(null, { google_ad_semantic_area: "f" });
			case 4:
				return new Yh(null, { google_ad_semantic_area: "s" });
			default:
				return null } }

	function ai(a) { if (null == a) a = null;
		else { var b = Uh(a);
			a = [];
			b = w(b); for (var c = b.next(); !c.done; c = b.next()) { c = c.value; var d = String(c.ja);
				a.push(c.ba + "." + (20 >= d.length ? d : d.slice(0, 19) + "_")) } a = new Yh(null, { google_placement_id: a.join("~") }) } return a };
	var bi = {},
		ci = new Yh(["google-auto-placed"], (bi.google_reactive_ad_format = 40, bi.google_tag_origin = "qs", bi));

	function di(a) { this.i = H(a) } x(di, Q);
	var ei = Ld(di);

	function fi(a) { this.i = H(a) } x(fi, Q);

	function gi(a) { this.i = H(a) } x(gi, Q);

	function hi(a) { this.i = H(a) } x(hi, Q);
	hi.v = [6, 7, 9, 10, 11];

	function ii(a) { this.i = H(a) } x(ii, Q);

	function ji(a) { this.i = H(a) } x(ji, Q);
	ji.v = [1];

	function ki(a) { if (1 != a.nodeType) var b = !1;
		else if (b = "INS" == a.tagName) a: { b = ["adsbygoogle-placeholder"];a = a.className ? a.className.split(/\s+/) : []; for (var c = {}, d = 0; d < a.length; ++d) c[a[d]] = !0; for (d = 0; d < b.length; ++d)
				if (!c[b[d]]) { b = !1; break a } b = !0 }
		return b };

	function T(a, b) { this.g = a;
		this.defaultValue = void 0 === b ? !1 : b }

	function li(a, b) { this.g = a;
		this.defaultValue = void 0 === b ? 0 : b }

	function mi(a) { this.g = a;
		this.defaultValue = "" }

	function ni(a, b) { b = void 0 === b ? [] : b;
		this.g = a;
		this.defaultValue = b };
	var pi = new T(1082, !0),
		qi = new T(1271),
		ri = new T(1305),
		si = new li(1130, 100),
		ti = new mi(14),
		ui = new T(1247, !0),
		vi = new T(1272),
		wi = new T(316),
		xi = new T(1207, !0),
		yi = new T(313),
		zi = new T(369),
		Ai = new T(1289),
		Bi = new T(1298),
		Ci = new T(1230, !0),
		Di = new T(1229, !0),
		Ei = new T(1231, !0),
		Fi = new T(1302),
		Gi = new T(217),
		Hi = new T(1288),
		Ii = new mi(1307),
		Ji = new li(572636916),
		Ki = new li(579884443),
		Li = new T(568515114, !0),
		Mi = new ni(556791602, ["1", "2"]),
		Ni = new T(572636914),
		Oi = new T(529362570, !0),
		Pi = new T(579884441),
		Qi = new li(572636915),
		Ri = new li(579884442),
		Si = new T(506914611),
		Ti = new T(506852289),
		Ui = new T(1120),
		Vi = new T(567362967, !0),
		Wi = new li(1079, 5),
		Xi = new T(10009, !0),
		Je = new ni(1934, ["As0hBNJ8h++fNYlkq8cTye2qDLyom8NddByiVytXGGD0YVE+2CEuTCpqXMDxdhOMILKoaiaYifwEvCRlJ/9GcQ8AAAB8eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3MTk1MzI3OTksImlzU3ViZG9tYWluIjp0cnVlfQ==", "AgRYsXo24ypxC89CJanC+JgEmraCCBebKl8ZmG7Tj5oJNx0cmH0NtNRZs3NB5ubhpbX/bIt7l2zJOSyO64NGmwMAAACCeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3MTk1MzI3OTksImlzU3ViZG9tYWluIjp0cnVlfQ=="]),
		Yi = new T(84);

	function Ie() { var a = {};
		this.j = function(b, c) { return null != a[b] ? a[b] : c };
		this.l = function(b, c) { return null != a[b] ? a[b] : c };
		this.g = function(b, c) { return null != a[b] ? a[b] : c };
		this.h = function(b, c) { return null != a[b] ? a[b] : c };
		this.m = function() {} }

	function U(a) { return R(Ie).j(a.g, a.defaultValue) }

	function Zi(a) { return R(Ie).l(a.g, a.defaultValue) };

	function $i(a, b, c) { switch (c) {
			case 0:
				b.parentNode && b.parentNode.insertBefore(a, b); break;
			case 3:
				if (c = b.parentNode) { var d = b.nextSibling; if (d && d.parentNode != c)
						for (; d && 8 == d.nodeType;) d = d.nextSibling;
					c.insertBefore(a, d) } break;
			case 1:
				b.insertBefore(a, b.firstChild); break;
			case 2:
				b.appendChild(a) } ki(b) && (b.setAttribute("data-init-display", b.style.display), b.style.display = "block") };

	function aj(a, b, c) {
		function d(f) { f = bj(f); return null == f ? !1 : c > f }

		function e(f) { f = bj(f); return null == f ? !1 : c < f }
		switch (b) {
			case 0:
				return { init: cj(a.previousSibling, e), sa: function(f) { return cj(f.previousSibling, e) }, xa: 0 };
			case 2:
				return { init: cj(a.lastChild, e), sa: function(f) { return cj(f.previousSibling, e) }, xa: 0 };
			case 3:
				return { init: cj(a.nextSibling, d), sa: function(f) { return cj(f.nextSibling, d) }, xa: 3 };
			case 1:
				return { init: cj(a.firstChild, d), sa: function(f) { return cj(f.nextSibling, d) }, xa: 3 } }
		throw Error("Un-handled RelativePosition: " +
			b);
	}

	function bj(a) { return a.hasOwnProperty("google-ama-order-assurance") ? a["google-ama-order-assurance"] : null }

	function cj(a, b) { return a && b(a) ? a : null };
	var dj = { rectangle: 1, horizontal: 2, vertical: 4 };
	var ej = { overlays: 1, interstitials: 2, vignettes: 2, inserts: 3, immersives: 4, list_view: 5, full_page: 6, side_rails: 7 };

	function fj(a) { a = a.document; var b = {};
		a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body); return b || {} }

	function gj(a) { return fj(a).clientWidth };

	function hj(a) { if (a == a.top) return 0; for (; a && a != a.top && qe(a); a = a.parent) { if (a.sf_) return 2; if (a.$sf) return 3; if (a.inGptIF) return 4; if (a.inDapIF) return 5 } return 1 };

	function ij(a, b) { do { var c = ue(a, b); if (c && "fixed" == c.position) return !1 } while (a = a.parentElement); return !0 };

	function jj(a, b) { for (var c = ["width", "height"], d = 0; d < c.length; d++) { var e = "google_ad_" + c[d]; if (!b.hasOwnProperty(e)) { var f = Be(a[c[d]]);
				f = null === f ? null : Math.round(f);
				null != f && (b[e] = f) } } }

	function kj(a, b) { return !((ze.test(b.google_ad_width) || ye.test(a.style.width)) && (ze.test(b.google_ad_height) || ye.test(a.style.height))) }

	function lj(a, b) { return (a = mj(a, b)) ? a.y : 0 }

	function mj(a, b) { try { var c = b.document.documentElement.getBoundingClientRect(),
				d = a.getBoundingClientRect(); return { x: d.left - c.left, y: d.top - c.top } } catch (e) { return null } }

	function nj(a, b, c, d, e) { if (a !== a.top) return re(a) ? 3 : 16; if (!(488 > gj(a))) return 4; if (!(a.innerHeight >= a.innerWidth)) return 5; var f = gj(a); if (!f || (f - c) / f > d) a = 6;
		else { if (c = "true" != e.google_full_width_responsive) a: { c = b.parentElement; for (b = gj(a); c; c = c.parentElement)
					if ((d = ue(c, a)) && (e = Be(d.width)) && !(e >= b) && "visible" != d.overflow) { c = !0; break a } c = !1 } a = c ? 7 : !0 } return a }

	function oj(a, b, c, d) { var e = nj(b, c, a, .3, d);!0 !== e ? a = e : "true" == d.google_full_width_responsive || ij(c, b) ? (b = gj(b), a = b - a, a = b && 0 <= a ? !0 : b ? -10 > a ? 11 : 0 > a ? 14 : 12 : 10) : a = 9; return a }

	function pj(a, b, c) { a = a.style; "rtl" == b ? a.marginRight = c : a.marginLeft = c }

	function qj(a, b) { if (3 == b.nodeType) return /\S/.test(b.data); if (1 == b.nodeType) { if (/^(script|style)$/i.test(b.nodeName)) return !1; try { var c = ue(b, a) } catch (d) {} return !c || "none" != c.display && !("absolute" == c.position && ("hidden" == c.visibility || "collapse" == c.visibility)) } return !1 }

	function rj(a, b, c) { a = mj(b, a); return "rtl" == c ? -a.x : a.x }

	function sj(a, b) { var c;
		c = (c = b.parentElement) ? (c = ue(c, a)) ? c.direction : "" : ""; if (c) { b.style.border = b.style.borderStyle = b.style.outline = b.style.outlineStyle = b.style.transition = "none";
			b.style.borderSpacing = b.style.padding = "0";
			pj(b, c, "0px");
			b.style.width = gj(a) + "px"; if (0 !== rj(a, b, c)) { pj(b, c, "0px"); var d = rj(a, b, c);
				pj(b, c, -1 * d + "px");
				a = rj(a, b, c);
				0 !== a && a !== d && pj(b, c, d / (a - d) * d + "px") } b.style.zIndex = 30 } };

	function tj(a, b) { this.O = a;
		this.j = b } tj.prototype.height = function() { return this.j };
	tj.prototype.g = function(a) { return 300 < a && 300 < this.j ? this.O : Math.min(1200, Math.round(a)) };
	tj.prototype.h = function() {};

	function uj(a, b, c, d) { d = void 0 === d ? function(f) { return f } : d; var e; return a.style && a.style[c] && d(a.style[c]) || (e = ue(a, b)) && e[c] && d(e[c]) || null }

	function vj(a) { return function(b) { return b.O <= a } }

	function wj(a, b, c, d) { var e = a && xj(c, b),
			f = yj(b, d); return function(g) { return !(e && g.height() >= f) } }

	function zj(a) { return function(b) { return b.height() <= a } }

	function xj(a, b) { return lj(a, b) < fj(b).clientHeight - 100 }

	function Aj(a, b) { var c = uj(b, a, "height", Be); if (c) return c; var d = b.style.height;
		b.style.height = "inherit";
		c = uj(b, a, "height", Be);
		b.style.height = d; if (c) return c;
		c = Infinity;
		do(d = b.style && Be(b.style.height)) && (c = Math.min(c, d)), (d = uj(b, a, "maxHeight", Be)) && (c = Math.min(c, d)); while ((b = b.parentElement) && "HTML" != b.tagName); return c }

	function yj(a, b) { var c = 0 == $e(a); return b && c ? Math.max(250, 2 * fj(a).clientHeight / 3) : 250 };
	var V = {},
		Bj = (V.google_ad_channel = !0, V.google_ad_client = !0, V.google_ad_host = !0, V.google_ad_host_channel = !0, V.google_adtest = !0, V.google_tag_for_child_directed_treatment = !0, V.google_tag_for_under_age_of_consent = !0, V.google_tag_partner = !0, V.google_restrict_data_processing = !0, V.google_page_url = !0, V.google_debug_params = !0, V.google_shadow_mode = !0, V.google_adbreak_test = !0, V.google_ad_frequency_hint = !0, V.google_admob_interstitial_slot = !0, V.google_admob_rewarded_slot = !0, V.google_admob_ads_only = !0, V.google_max_ad_content_rating = !0, V.google_traffic_source = !0, V.google_overlays = !0, V.google_privacy_treatments = !0, V.google_xz = !0, V),
		Cj = RegExp("(^| )adsbygoogle($| )");

	function Dj(a, b) { for (var c = 0; c < b.length; c++) { var d = b[c],
				e = fe(d.property);
			a[e] = d.value } };

	function Ej(a) { this.i = H(a) } x(Ej, Q);

	function Fj(a) { this.i = H(a) } x(Fj, Q);

	function Gj(a) { this.i = H(a) } x(Gj, Q);

	function Hj(a) { this.i = H(a) } x(Hj, Q);

	function Ij(a) { this.i = H(a) } x(Ij, Q);

	function Jj(a) { this.i = H(a) } x(Jj, Q);

	function Kj(a) { this.i = H(a) } x(Kj, Q);

	function Lj(a) { this.i = H(a) } x(Lj, Q);

	function Mj(a) { this.i = H(a) } x(Mj, Q);
	Mj.prototype.getName = function() { return M(this, 4) };
	var Nj = [1, 2, 3];

	function Oj(a) { this.i = H(a) } x(Oj, Q);
	Oj.v = [2, 5, 6, 11];

	function Pj(a) { this.i = H(a) } x(Pj, Q);

	function Qj(a) { this.i = H(a) } x(Qj, Q);
	var Rj = [1, 2];

	function Sj(a) { this.i = H(a) } x(Sj, Q);
	Sj.v = [1, 4];

	function Tj(a) { this.i = H(a) } x(Tj, Q);
	var Uj = Ld(Tj);
	Tj.v = [1, 2, 5, 7];

	function Vj(a, b, c, d) { this.l = a;
		this.h = b;
		this.j = c;
		this.g = d } Vj.prototype.query = function(a) { var b = []; try { b = a.querySelectorAll(this.l) } catch (f) {} if (!b.length) return [];
		a = wb(b);
		a = Wj(this, a); "number" === typeof this.h && (b = this.h, 0 > b && (b += a.length), a = 0 <= b && b < a.length ? [a[b]] : []); if ("number" === typeof this.j) { b = []; for (var c = 0; c < a.length; c++) { var d = Xj(a[c]),
					e = this.j;
				0 > e && (e += d.length);
				0 <= e && e < d.length && b.push(d[e]) } a = b } return a };
	Vj.prototype.toString = function() { return JSON.stringify({ nativeQuery: this.l, occurrenceIndex: this.h, paragraphIndex: this.j, ignoreMode: this.g }) };

	function Wj(a, b) { if (null == a.g) return b; switch (a.g) {
			case 1:
				return b.slice(1);
			case 2:
				return b.slice(0, b.length - 1);
			case 3:
				return b.slice(1, b.length - 1);
			case 0:
				return b;
			default:
				throw Error("Unknown ignore mode: " + a.g); } }

	function Xj(a) { var b = [];
		Gh(a.getElementsByTagName("p"), function(c) { 100 <= Yj(c) && b.push(c) }); return b }

	function Yj(a) { if (3 == a.nodeType) return a.length; if (1 != a.nodeType || "SCRIPT" == a.tagName) return 0; var b = 0;
		Gh(a.childNodes, function(c) { b += Yj(c) }); return b }

	function Zj(a) { return 0 == a.length || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1) };
	var ak = la(["https://pagead2.googlesyndication.com/pagead/js/err_rep.js"]);

	function bk() { var a = void 0 === a ? "jserror" : a; var b = void 0 === b ? .01 : b; var c = void 0 === c ? Te(ak) : c;
		this.m = a;
		this.g = null;
		this.j = !1;
		this.u = Math.random();
		this.l = b;
		this.h = this.M;
		this.A = c } q = bk.prototype;
	q.Ma = function(a) { this.g = a };
	q.Na = function(a) { this.j = a };
	q.vb = function(a) { this.h = a };
	q.M = function(a, b, c, d, e) { c = void 0 === c ? this.l : c;
		e = void 0 === e ? this.m : e; if ((this.j ? this.u : Math.random()) > c) return !1;
		df(b) || (b = new cf(b, { context: a, id: e })); if (d || this.g) b.meta = {}, this.g && this.g(b.meta), d && d(b.meta);
		B.google_js_errors = B.google_js_errors || [];
		B.google_js_errors.push(b);
		B.error_rep_loaded || (se(B.document, this.A), B.error_rep_loaded = !0); return !1 };
	q.ya = function(a, b, c) { try { return b() } catch (d) { if (!this.h(a, d, this.l, c, this.m)) throw d; } };
	q.sb = function(a, b) { var c = this; return function() { var d = Ga.apply(0, arguments); return c.ya(a, function() { return b.apply(void 0, d) }) } };
	q.Ja = function(a, b) { var c = this;
		b.catch(function(d) { d = d ? d : "unknown rejection";
			c.M(a, d instanceof Error ? d : Error(d), void 0, c.g || void 0) }) };

	function ck(a, b) { b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
		2048 > b.length && b.push(a) }

	function dk(a, b, c, d, e) {
		e = void 0 === e ? !1 : e;
		var f = d || window,
			g = "undefined" !== typeof queueMicrotask;
		return function() {
			e && g && queueMicrotask(function() { f.google_rum_task_id_counter = f.google_rum_task_id_counter || 1;
				f.google_rum_task_id_counter += 1 });
			var h = lf(),
				k = 3;
			try { var l = b.apply(this, arguments) } catch (m) { k = 13; if (!c) throw m;
				c(a, m) } finally {
				f.google_measure_js_timing && h && ck(u(Object, "assign").call(Object, {}, { label: a.toString(), value: h, duration: (lf() || 0) - h, type: k }, e && g && {
					taskId: f.google_rum_task_id_counter = f.google_rum_task_id_counter ||
						1
				}), f)
			}
			return l
		}
	}

	function ek(a, b) { return dk(a, b, function(c, d) {
			(new bk).M(c, d) }, void 0, !1) };

	function fk(a, b, c) { return dk(a, b, void 0, c, !0).apply() }

	function gk(a) { if (!a) return null; var b = M(a, 7); if (M(a, 1) || a.getId() || 0 < ud(a, 4).length) { var c = ud(a, 4);
			b = td(a, 2); var d = td(a, 5),
				e = hk(I(a, 6)),
				f = M(a, 3),
				g = M(a, 1);
			a = "";
			g && (a += g);
			f && (a += "#" + Zj(f)); if (c)
				for (f = 0; f < c.length; f++) a += "." + Zj(c[f]);
			b = (c = a) ? new Vj(c, b, d, e) : null } else b = b ? new Vj(b, td(a, 2), td(a, 5), hk(I(a, 6))) : null; return b }
	var ik = { 1: 1, 2: 2, 3: 3, 0: 0 };

	function hk(a) { return null == a ? a : ik[a] }
	var jk = { 1: 0, 2: 1, 3: 2, 4: 3 };

	function kk(a) { return a.google_ama_state = a.google_ama_state || {} }

	function ok(a) { a = kk(a); return a.optimization = a.optimization || {} };

	function pk(a) { switch (I(a, 8)) {
			case 1:
			case 2:
				if (null == a) var b = null;
				else b = K(a, Sh, 1), null == b ? b = null : (a = I(a, 2), b = null == a ? null : new Th({ eb: [b], ub: a })); return null != b ? Mh(b) : Oh(Error("Missing dimension when creating placement id"));
			case 3:
				return Oh(Error("Missing dimension when creating placement id"));
			default:
				return Oh(Error("Invalid type: " + I(a, 8))) } };

	function qk(a, b) {
		function c() { d.push({ anchor: e.anchor, position: e.position }); return e.anchor == b.anchor && e.position == b.position }
		for (var d = [], e = a; e;) {
			switch (e.position) {
				case 1:
					if (c()) return d;
					e.position = 2;
				case 2:
					if (c()) return d; if (e.anchor.firstChild) { e = { anchor: e.anchor.firstChild, position: 1 }; continue } else e.position = 3;
				case 3:
					if (c()) return d;
					e.position = 4;
				case 4:
					if (c()) return d }
			for (; e && !e.anchor.nextSibling && e.anchor.parentNode != e.anchor.ownerDocument.body;) {
				e = { anchor: e.anchor.parentNode, position: 3 };
				if (c()) return d;
				e.position = 4;
				if (c()) return d
			}
			e && e.anchor.nextSibling ? e = { anchor: e.anchor.nextSibling, position: 1 } : e = null
		}
		return d
	};

	function rk(a, b) { this.h = a;
		this.g = b }

	function sk(a, b) {
		var c = new Rh,
			d = new Qh;
		b.forEach(function(e) {
			if (Cd(e, Kj, 1, Nj)) { e = Cd(e, Kj, 1, Nj); if (K(e, fi, 1) && K(K(e, fi, 1), Sh, 1) && K(e, fi, 2) && K(K(e, fi, 2), Sh, 1)) { var f = tk(a, K(K(e, fi, 1), Sh, 1)),
						g = tk(a, K(K(e, fi, 2), Sh, 1)); if (f && g)
						for (f = w(qk({ anchor: f, position: vd(K(e, fi, 1), 2) }, { anchor: g, position: vd(K(e, fi, 2), 2) })), g = f.next(); !g.done; g = f.next()) g = g.value, c.set(Oa(g.anchor), g.position) } K(e, fi, 3) && K(K(e, fi, 3), Sh, 1) && (f = tk(a, K(K(e, fi, 3), Sh, 1))) && c.set(Oa(f), vd(K(e, fi, 3), 2)) } else Cd(e, Lj, 2, Nj) ? uk(a, Cd(e, Lj, 2, Nj),
				c) : Cd(e, Jj, 3, Nj) && vk(a, Cd(e, Jj, 3, Nj), d)
		});
		return new rk(c, d)
	}

	function uk(a, b, c) { K(b, fi, 2) ? (b = K(b, fi, 2), (a = tk(a, K(b, Sh, 1))) && c.set(Oa(a), I(b, 2))) : K(b, Sh, 1) && (a = wk(a, K(b, Sh, 1))) && a.forEach(function(d) { d = Oa(d);
			c.set(d, 1);
			c.set(d, 4);
			c.set(d, 2);
			c.set(d, 3) }) }

	function vk(a, b, c) { K(b, Sh, 1) && (a = wk(a, K(b, Sh, 1))) && a.forEach(function(d) { c.add(Oa(d)) }) }

	function tk(a, b) { return (a = wk(a, b)) && 0 < a.length ? a[0] : null }

	function wk(a, b) { return (b = gk(b)) ? b.query(a) : null };

	function X(a) { a = void 0 === a ? "" : a; var b = Error.call(this);
		this.message = b.message; "stack" in b && (this.stack = b.stack);
		this.name = "TagError";
		this.message = a ? "adsbygoogle.push() error: " + a : "";
		Error.captureStackTrace ? Error.captureStackTrace(this, X) : this.stack = Error().stack || "" } x(X, Error);
	var xk, yk, zk = new qf(B);

	function Ak(a) { null != a && (B.google_measure_js_timing = a);
		B.google_measure_js_timing || rf(zk) }(function(a, b) { b = void 0 === b ? !0 : b;
		xk = a || new uh; "number" !== typeof B.google_srt && (B.google_srt = Math.random());
		vh(xk, B.google_srt);
		yk = new zf(xk, b, zk);
		yk.Na(!0); "complete" == B.document.readyState ? Ak() : zk.g && Rd(B, "load", function() { Ak() }) })();

	function Bk(a, b, c) { return yk.ya(a, b, c) }

	function Ck(a, b) { return yk.sb(a, b) }

	function Dk(a, b, c) { var d = R(sh).g();!b.eid && d.length && (b.eid = d.toString());
		Bf(xk, a, b, !0, c) }

	function Ek(a, b) { yk.Ja(a, b) }

	function Fk(a, b, c, d) { var e;
		df(b) ? e = b.msg || Af(b.error) : e = Af(b); return 0 == e.indexOf("TagError") ? ((b instanceof cf ? b.error : b).pbr = !0, !1) : yk.M(a, b, c, d) };

	function Gk() { this.g = Ke();
		this.h = 0 };

	function Hk() { this.g = new t.Set;
		this.h = new Gk }

	function Ik(a) { a = Jk(a); return a.has("all") || a.has("after") }

	function Kk(a) { a = Jk(a); return a.has("all") || a.has("before") }

	function Lk(a, b, c) { switch (c) {
			case 2:
			case 3:
				break;
			case 1:
			case 4:
				b = b.parentElement; break;
			default:
				throw Error("Unknown RelativePosition: " + c); } for (c = []; b;) { if (Mk(b)) return !0; if (a.g.has(b)) break;
			c.push(b);
			b = b.parentElement } c.forEach(function(d) { return a.g.add(d) }); return !1 }

	function Mk(a) { var b = Jk(a); return a && ("AUTO-ADS-EXCLUSION-AREA" === a.tagName || b.has("inside") || b.has("all")) }

	function Jk(a) { return (a = a && a.getAttribute("data-no-auto-ads")) ? new t.Set(a.split("|")) : new t.Set };

	function Nk(a, b) { if (!a) return !1;
		a = ue(a, b); if (!a) return !1;
		a = a.cssFloat || a.styleFloat; return "left" == a || "right" == a }

	function Ok(a) { for (a = a.previousSibling; a && 1 != a.nodeType;) a = a.previousSibling; return a ? a : null }

	function Pk(a) { return !!a.nextSibling || !!a.parentNode && Pk(a.parentNode) };

	function Qk(a) { var b;
		a = (null != (b = void 0 === a ? null : a) ? b : window).googletag; return (null == a ? 0 : a.apiReady) ? a : void 0 };

	function Rk(a) { var b = Qk(a); return b ? rb(sb(b.pubads().getSlots(), function(c) { return a.document.getElementById(c.getSlotElementId()) }), function(c) { return null != c }) : null }

	function Sk(a, b) { return wb(a.document.querySelectorAll(b)) }

	function Tk(a) { var b = [];
		a = w(a); for (var c = a.next(); !c.done; c = a.next()) { c = c.value; for (var d = !0, e = 0; e < b.length; e++) { var f = b[e]; if (f.contains(c)) { d = !1; break } if (c.contains(f)) { d = !1;
					b[e] = c; break } } d && b.push(c) } return b };

	function Uk(a, b, c, d, e) { this.g = a;
		this.G = b;
		this.j = c;
		this.m = e || null;
		this.u = (this.B = d) ? sk(a.document, L(d, Mj, 5)) : sk(a.document, []);
		this.A = new Hk;
		this.h = 0;
		this.l = !1 }

	function Vk(a, b) {
		if (a.l) return !0;
		a.l = !0;
		var c = L(a.j, hi, 1);
		a.h = 0;
		var d = Wk(a.B);
		var e = a.g;
		var f;
		try { var g = (f = e.localStorage.getItem("google_ama_settings")) ? ei(f) : null } catch (F) { g = null } f = null !== g && xd(g, 2, !1);
		g = kk(e);
		f && (g.eatf = !0, We(7, [!0, 0, !1]));
		b: {
			var h = { Fb: !1, Gb: !1 },
				k = Sk(e, ".google-auto-placed"),
				l = Sk(e, "ins.adsbygoogle[data-anchor-shown],ins.adsbygoogle[data-anchor-status]"),
				m = Sk(e, "ins.adsbygoogle[data-ad-format=autorelaxed]");
			var p = (Rk(e) || Sk(e, "div[id^=div-gpt-ad]")).concat(Sk(e, "iframe[id^=google_ads_iframe]"));
			var n = Sk(e, "div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]"),
				r = Sk(e, "ins.adsbygoogle-ablated-ad-slot"),
				A = Sk(e, "div.googlepublisherpluginad"),
				y = Sk(e, "html > ins.adsbygoogle"),
				z = [].concat(Sk(e, "iframe[id^=aswift_],iframe[id^=google_ads_frame]"), Sk(e, "body ins.adsbygoogle"));f = [];h = w([[h.yc, k], [h.Fb, l], [h.Bc, m], [h.zc, p], [h.Cc, n], [h.xc, r], [h.Ac, A], [h.Gb, y]]);
			for (k = h.next(); !k.done; k = h.next()) l = w(k.value),
			k = l.next().value,
			l = l.next().value,
			!1 === k ? f = f.concat(l) : z = z.concat(l);z = Tk(z);h = Tk(f);f = z.slice(0);z = w(h);
			for (h = z.next(); !h.done; h = z.next())
				for (h = h.value, k = 0; k < f.length; k++)(h.contains(f[k]) || f[k].contains(h)) && f.splice(k, 1);e = fj(e).clientHeight;
			for (z = 0; z < f.length; z++)
				if (!(f[z].getBoundingClientRect().top > e)) { e = !0; break b } e = !1
		}
		e = e ? g.eatfAbg = !0 : !1;
		if (e) return !0;
		e = new Qh([2]);
		for (g = 0; g < c.length; g++) {
			f = a;
			h = c[g];
			z = g;
			k = b;
			if (K(h, Xh, 4) && e.contains(vd(K(h, Xh, 4), 1)) && 1 === I(h, 8) && Xk(h, d)) {
				f.h++;
				if (k = Yk(f, h, k, d)) l = kk(f.g), l.numAutoAdsPlaced || (l.numAutoAdsPlaced = 0), K(h, Sh, 1) && null != td(K(h, Sh, 1), 5) && (l.numPostPlacementsPlaced ? l.numPostPlacementsPlaced++ : l.numPostPlacementsPlaced = 1), null == l.placed && (l.placed = []), l.numAutoAdsPlaced++, l.placed.push({
					index: z,
					element: k.oa
				}), We(7, [!1, f.h, !0]);
				f = k
			} else f = null;
			if (f) return !0
		}
		We(7, [!1, a.h, !1]);
		return !1
	}

	function Yk(a, b, c, d) {
		if (!Xk(b, d) || 1 != I(b, 8)) return null;
		d = K(b, Sh, 1);
		if (!d) return null;
		d = gk(d);
		if (!d) return null;
		d = d.query(a.g.document);
		if (0 == d.length) return null;
		d = d[0];
		var e = jk[I(b, 2)];
		e = void 0 === e ? null : e;
		var f;
		if (!(f = null == e)) { a: { f = a.g; switch (e) {
					case 0:
						f = Nk(Ok(d), f); break a;
					case 3:
						f = Nk(d, f); break a;
					case 2:
						var g = d.lastChild;
						f = Nk(g ? 1 == g.nodeType ? g : Ok(g) : null, f); break a } f = !1 } if (c = !f && !(!c && 2 == e && !Pk(d))) c = 1 == e || 2 == e ? d : d.parentNode, c = !(c && !ki(c) && 0 >= c.offsetWidth);f = !c }
		if (!(c = f)) {
			c = a.u;
			f = I(b, 2);
			g =
				Oa(d);
			g = c.h.g.get(g);
			if (!(g = g ? g.contains(f) : !1)) a: { if (c.g.contains(Oa(d))) switch (f) {
					case 2:
					case 3:
						g = !0; break a;
					default:
						g = !1; break a }
				for (f = d.parentElement; f;) { if (c.g.contains(Oa(f))) { g = !0; break a } f = f.parentElement } g = !1 } c = g
		}
		if (!c) {
			c = a.A;
			g = I(b, 2);
			a: switch (g) {
				case 1:
					f = Ik(d.previousElementSibling) || Kk(d); break a;
				case 4:
					f = Ik(d) || Kk(d.nextElementSibling); break a;
				case 2:
					f = Kk(d.firstElementChild); break a;
				case 3:
					f = Ik(d.lastElementChild); break a;
				default:
					throw Error("Unknown RelativePosition: " + g); } g = Lk(c, d,
				g);
			c = c.h;
			Dk("ama_exclusion_zone", u(Object, "assign").call(Object, {}, { typ: f ? g ? "siuex" : "siex" : g ? "suex" : "noex" }, { cor: c.g, num: c.h++, dvc: De() }), .1);
			c = f || g
		}
		if (c) return null;
		c = K(b, gi, 3);
		f = {};
		c && (f.xb = M(c, 1), f.hb = M(c, 2), f.Bb = !!gd(c, 3));
		c = K(b, Xh, 4) && vd(K(b, Xh, 4), 2) ? vd(K(b, Xh, 4), 2) : null;
		c = $h(c);
		g = null != td(b, 12) ? td(b, 12) : null;
		g = null == g ? null : new Yh(null, { google_ml_rank: g });
		b = Zk(a, b);
		b = Zh(a.m, c, g, b);
		c = a.g;
		a = a.G;
		var h = c.document,
			k = f.Bb || !1;
		g = (new he(h)).createElement("DIV");
		var l = g.style;
		l.width = "100%";
		l.height =
			"auto";
		l.clear = k ? "both" : "none";
		k = g.style;
		k.textAlign = "center";
		f.Qb && Dj(k, f.Qb);
		h = (new he(h)).createElement("INS");
		k = h.style;
		k.display = "block";
		k.margin = "auto";
		k.backgroundColor = "transparent";
		f.xb && (k.marginTop = f.xb);
		f.hb && (k.marginBottom = f.hb);
		f.zb && Dj(k, f.zb);
		g.appendChild(h);
		f = { Ga: g, oa: h };
		f.oa.setAttribute("data-ad-format", "auto");
		g = [];
		if (h = b && b.jb) f.Ga.className = h.join(" ");
		h = f.oa;
		h.className = "adsbygoogle";
		h.setAttribute("data-ad-client", a);
		g.length && h.setAttribute("data-ad-channel", g.join("+"));
		a: {
			try {
				var m = f.Ga;
				var p = void 0 === p ? 0 : p;
				if (U(yi)) { p = void 0 === p ? 0 : p; var n = aj(d, e, p); if (n.init) { var r = n.init; for (d = r; d = n.sa(d);) r = d; var A = { anchor: r, position: n.xa } } else A = { anchor: d, position: e };
					m["google-ama-order-assurance"] = p;
					$i(m, A.anchor, A.position) } else $i(m, d, e);
				b: {
					var y = f.oa;y.dataset.adsbygoogleStatus = "reserved";y.className += " adsbygoogle-noablate";m = { element: y };
					var z = b && b.tb;
					if (y.hasAttribute("data-pub-vars")) { try { z = JSON.parse(y.getAttribute("data-pub-vars")) } catch (F) { break b } y.removeAttribute("data-pub-vars") } z &&
					(m.params = z);
					(c.adsbygoogle = c.adsbygoogle || []).push(m)
				}
			} catch (F) {
				(y = f.Ga) && y.parentNode && (z = y.parentNode, z.removeChild(y), ki(z) && (z.style.display = z.getAttribute("data-init-display") || "none"));
				y = !1; break a } y = !0
		}
		return y ? f : null
	}

	function Zk(a, b) { return Kh(Nh(pk(b).map(ai), function(c) { kk(a.g).exception = c })) }

	function Wk(a) { var b = {};
		a && hd(a, 6, xc).forEach(function(c) { b[c] = !0 }); return b }

	function Xk(a, b) { return a && ad(a, Xh, 4) && b[vd(K(a, Xh, 4), 2)] ? !1 : !0 };

	function $k(a) { this.i = H(a) } x($k, Q);
	var al = Ld($k);

	function bl(a) { try { var b = a.localStorage.getItem("google_auto_fc_cmp_setting") || null } catch (d) { b = null } var c = b; return c ? Ph(function() { return al(c) }) : Mh(null) };

	function cl() { this.S = {} }

	function dl() { if (el) return el; var a = Ye() || window; var b = a.google_persistent_state_async; return null != b && "object" == typeof b && null != b.S && "object" == typeof b.S ? el = b : a.google_persistent_state_async = el = new cl }

	function fl(a, b, c) { b = gl[b] || "google_ps_" + b;
		a = a.S; var d = a[b]; return void 0 === d ? (a[b] = c(), a[b]) : d }

	function hl(a, b, c) { return fl(a, b, function() { return c }) }

	function il(a, b, c) { a.S[gl[b] || "google_ps_" + b] = c }

	function jl(a, b) { il(a, 38, b) }
	var el = null,
		kl = {},
		gl = (kl[8] = "google_prev_ad_formats_by_region", kl[9] = "google_prev_ad_slotnames_by_region", kl);

	function ll(a) { this.i = H(a) } x(ll, Q);

	function ml(a) { var b = new ll; return $c(b, 5, tc(a)) } ll.v = [10];

	function nl() { this.m = this.m;
		this.j = this.j } nl.prototype.m = !1;

	function ol(a, b) { a.m ? b() : (a.j || (a.j = []), a.j.push(b)) };

	function pl(a) { void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
		void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0); return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3 }

	function ql(a, b) { b = void 0 === b ? {} : b;
		nl.call(this);
		this.h = a;
		this.g = null;
		this.A = {};
		this.G = 0; var c;
		this.B = null != (c = b.timeoutMs) ? c : 500; var d;
		this.u = null != (d = b.wc) ? d : !1;
		this.l = null } x(ql, nl);

	function rl(a) { return "function" === typeof a.h.__tcfapi || null != sl(a) }
	ql.prototype.addEventListener = function(a) {
		function b(g, h) { clearTimeout(f);
			g ? (d = g, d.internalErrorState = pl(d), d.internalBlockOnErrors = c.u, h && 0 === d.internalErrorState || (d.tcString = "tcunavailable", h || (d.internalErrorState = 3))) : (d.tcString = "tcunavailable", d.internalErrorState = 3);
			a(d) }
		var c = this,
			d = { internalBlockOnErrors: this.u },
			e = Qd(function() { return a(d) }),
			f = 0; - 1 !== this.B && (f = setTimeout(function() { d.tcString = "tcunavailable";
			d.internalErrorState = 1;
			e() }, this.B));
		try { tl(this, "addEventListener", b) } catch (g) {
			d.tcString =
				"tcunavailable", d.internalErrorState = 3, f && (clearTimeout(f), f = 0), e()
		}
	};
	ql.prototype.removeEventListener = function(a) { a && a.listenerId && tl(this, "removeEventListener", null, a.listenerId) };

	function tl(a, b, c, d) { c || (c = function() {}); if ("function" === typeof a.h.__tcfapi) a = a.h.__tcfapi, a(b, 2, c, d);
		else if (sl(a)) { ul(a); var e = ++a.G;
			a.A[e] = c;
			a.g && (c = {}, a.g.postMessage((c.__tcfapiCall = { command: b, version: 2, callId: e, parameter: d }, c), "*")) } else c({}, !1) }

	function sl(a) { if (a.g) return a.g;
		a.g = Ce(a.h, "__tcfapiLocator"); return a.g }

	function ul(a) { a.l || (a.l = function(b) { try { var c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
				a.A[c.callId](c.returnValue, c.success) } catch (d) {} }, Rd(a.h, "message", a.l)) }

	function vl(a) { if (!1 === a.gdprApplies) return !0;
		void 0 === a.internalErrorState && (a.internalErrorState = pl(a)); return "error" === a.cmpStatus || 0 !== a.internalErrorState ? a.internalBlockOnErrors ? (Pe({ e: String(a.internalErrorState) }), !1) : !0 : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0 };

	function wl(a) { var b = a.s,
			c = a.timeoutMs,
			d = a.ia;
		a = xl({ s: b, ka: a.ka, ta: void 0 === a.ta ? !1 : a.ta, ua: void 0 === a.ua ? !1 : a.ua });
		null != a.g || "tcunav" != a.h.message ? d(a) : yl(b, c).then(function(e) { return e.map(zl) }).then(function(e) { return e.map(function(f) { return Al(b, f) }) }).then(d) }

	function xl(a) { var b = a.s,
			c = a.ka,
			d = void 0 === a.ta ? !1 : a.ta; if (a = (void 0 === a.ua ? 0 : a.ua) || !rl(new ql(b))) { if (!d) { if (!(c = !c))
					if (c = bl(b), null == c.g) yk.M(806, c.h, void 0, void 0), c = !1;
					else if ((c = c.getValue()) && null != I(c, 1)) b: switch (c = I(c, 1), c) {
					case 1:
						c = !0; break b;
					default:
						throw Error("Unhandled AutoGdprFeatureStatus: " + c); } else c = !1;
				d = c } a = d } if (a) return Al(b, ml(!0));
		c = dl(); return (c = hl(c, 24)) ? Al(b, zl(c)) : Oh(Error("tcunav")) }

	function yl(a, b) { return t.Promise.race([Bl(), Cl(a, b)]) }

	function Bl() { return (new t.Promise(function(a) { var b = dl();
			a = { resolve: a }; var c = hl(b, 25, []);
			c.push(a);
			il(b, 25, c) })).then(Dl) }

	function Cl(a, b) { return new t.Promise(function(c) { a.setTimeout(c, b, Oh(Error("tcto"))) }) }

	function Dl(a) { return a ? Mh(a) : Oh(Error("tcnull")) }

	function zl(a) {
		var b = void 0 === b ? !1 : b;
		if (vl(a))
			if (!1 === a.gdprApplies || "tcunavailable" === a.tcString || void 0 === a.gdprApplies && !b || "string" !== typeof a.tcString || !a.tcString.length) a = !0;
			else {
				var c = void 0 === c ? "755" : c;
				b: { if (a.publisher && a.publisher.restrictions && (b = a.publisher.restrictions["1"], void 0 !== b)) { b = b[void 0 === c ? "755" : c]; break b } b = void 0 } 0 === b ? a = !1 : a.purpose && a.vendor ? (b = a.vendor.consents, (c = !(!b || !b[void 0 === c ? "755" : c])) && a.purposeOneTreatment && "CH" === a.publisherCC ? a = !0 : (c && (a = a.purpose.consents,
					c = !(!a || !a["1"])), a = c)) : a = !0
			}
		else a = !1;
		return ml(a)
	}

	function Al(a, b) { a: { a = void 0 === a ? window : a; if (xd(b, 5)) try { var c = a.localStorage; break a } catch (d) {} c = null } return (b = c) ? Mh(b) : Oh(Error("unav")) };

	function El(a) { this.i = H(a) } x(El, Q);
	El.v = [1, 2, 3];

	function Fl(a) { this.i = H(a) } x(Fl, Q);
	Fl.v = [1, 2, 3];

	function Gl(a) { this.i = H(a) } x(Gl, Q);

	function Hl(a) { this.exception = a }

	function Il(a, b, c) { this.j = a;
		this.g = b;
		this.h = c } Il.prototype.start = function() { this.l() };
	Il.prototype.l = function() { try { switch (this.j.document.readyState) {
				case "complete":
				case "interactive":
					Vk(this.g, !0);
					Jl(this); break;
				default:
					Vk(this.g, !1) ? Jl(this) : this.j.setTimeout(Ta(this.l, this), 100) } } catch (a) { Jl(this, a) } };

	function Jl(a, b) { try { var c = a.h,
				d = c.resolve,
				e = a.g;
			kk(e.g);
			L(e.j, hi, 1);
			d.call(c, new Hl(b)) } catch (f) { a.h.reject(f) } };

	function Kl(a) { this.i = H(a) } x(Kl, Q);
	var Ll = { "-": 0, Y: 2, N: 1 },
		Ml = {},
		Nl = (Ml[0] = "-", Ml[2] = "Y", Ml[1] = "N", Ml);

	function Ol(a) { this.i = H(a) } x(Ol, Q);
	Ol.prototype.getVersion = function() { return yd(this, 2) };
	Ol.v = [3];

	function Pl(a) { return Bb(2 > (a.length + 3) % 4 ? a + "A" : a).map(function(b) { return (aa = b.toString(2), u(aa, "padStart")).call(aa, 8, "0") }).join("") }

	function Ql(a) { if (!/^[0-1]+$/.test(a)) throw Error("Invalid input [" + a + "] not a bit string."); return parseInt(a, 2) }

	function Rl(a) { if (!/^[0-1]+$/.test(a)) throw Error("Invalid input [" + a + "] not a bit string."); for (var b = [1, 2, 3, 5], c = 0, d = 0; d < a.length - 1; d++) b.length <= d && b.push(b[d - 1] + b[d - 2]), c += parseInt(a[d], 2) * b[d]; return c };

	function Sl(a) {
		var b = Pl(a + "A"),
			c = Ql(b.slice(0, 6));
		a = Ql(b.slice(6, 12));
		var d = new Ol;
		c = kd(d, 1, zc(c), 0);
		a = kd(c, 2, zc(a), 0);
		b = b.slice(12);
		c = Ql(b.slice(0, 12));
		d = [];
		for (var e = b.slice(12).replace(/0+$/, ""), f = 0; f < c; f++) { if (0 === e.length) throw Error("Found " + f + " of " + c + " sections [" + d + "] but reached end of input [" + b + "]"); var g = 0 === Ql(e[0]);
			e = e.slice(1); var h = Tl(e, b),
				k = 0 === d.length ? 0 : d[d.length - 1];
			k = Rl(h) + k;
			e = e.slice(h.length); if (g) d.push(k);
			else { g = Tl(e, b);
				h = Rl(g); for (var l = 0; l <= h; l++) d.push(k + l);
				e = e.slice(g.length) } }
		if (0 <
			e.length) throw Error("Found " + c + " sections [" + d + "] but has remaining input [" + e + "], entire input [" + b + "]");
		return jd(a, 3, d, yc)
	}

	function Tl(a, b) { var c = a.indexOf("11"); if (-1 === c) throw Error("Expected section bitstring but not found in [" + a + "] part of [" + b + "]"); return a.slice(0, c + 2) };

	function Ul(a) { this.i = H(a) } x(Ul, Q);

	function Vl(a) { this.i = H(a) } x(Vl, Q);

	function Wl(a) { this.i = H(a) } x(Wl, Q);
	Wl.prototype.getVersion = function() { return yd(this, 1) };

	function Xl(a) { var b = new Wl; return kd(b, 1, zc(a), 0) };

	function Yl(a) { this.i = H(a) } x(Yl, Q);

	function Zl(a) { this.i = H(a) } x(Zl, Q);

	function $l(a) { var b = new Zl; return qd(b, 1, a) };
	var am = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
		bm = am.reduce(function(a, b) { return a + b });
	var cm = "a".charCodeAt(),
		dm = Vd(zh),
		em = Vd(Ah);

	function fm(a) { this.i = H(a) } x(fm, Q);

	function gm() { var a = new fm; return Dd(a, 1, 0) }

	function hm(a) { var b = Ad(a, 1);
		a = yd(a, 2); return new Date(1E3 * b + a / 1E6) };

	function im(a) { if (/[^01]/.test(a)) throw Error("Input bitstring " + a + " is malformed!");
		this.h = a;
		this.g = 0 }

	function jm(a) { var b = km(a, 16); return !0 === !!km(a, 1) ? (a = lm(a), a.forEach(function(c) { if (c > b) throw Error("ID " + c + " is past MaxVendorId " + b + "!"); }), a) : mm(a, b) }

	function lm(a) { for (var b = km(a, 12), c = []; b--;) { var d = !0 === !!km(a, 1),
				e = km(a, 16); if (d)
				for (d = km(a, 16); e <= d; e++) c.push(e);
			else c.push(e) } c.sort(function(f, g) { return f - g }); return c }

	function mm(a, b, c) { for (var d = [], e = 0; e < b; e++)
			if (km(a, 1)) { var f = e + 1; if (c && -1 === c.indexOf(f)) throw Error("ID: " + f + " is outside of allowed values!");
				d.push(f) } return d }

	function km(a, b) { if (a.g + b > a.h.length) throw Error("Requested length " + b + " is past end of string."); var c = a.h.substring(a.g, a.g + b);
		a.g += b; return parseInt(c, 2) };

	function nm(a, b) {
		try {
			var c = Bb(a.split(".")[0]).map(function(e) { return (aa = e.toString(2), u(aa, "padStart")).call(aa, 8, "0") }).join(""),
				d = new im(c);
			c = {};
			c.tcString = a;
			c.gdprApplies = !0;
			d.g += 78;
			c.cmpId = km(d, 12);
			c.cmpVersion = km(d, 12);
			d.g += 30;
			c.tcfPolicyVersion = km(d, 6);
			c.isServiceSpecific = !!km(d, 1);
			c.useNonStandardStacks = !!km(d, 1);
			c.specialFeatureOptins = om(mm(d, 12, em), em);
			c.purpose = { consents: om(mm(d, 24, dm), dm), legitimateInterests: om(mm(d, 24, dm), dm) };
			c.purposeOneTreatment = !!km(d, 1);
			c.publisherCC = String.fromCharCode(cm +
				km(d, 6)) + String.fromCharCode(cm + km(d, 6));
			c.vendor = { consents: om(jm(d), b), legitimateInterests: om(jm(d), b) };
			return c
		} catch (e) { return null }
	}

	function om(a, b) { var c = {}; if (Array.isArray(b) && 0 !== b.length) { b = w(b); for (var d = b.next(); !d.done; d = b.next()) d = d.value, c[d] = -1 !== a.indexOf(d) } else
			for (a = w(a), d = a.next(); !d.done; d = a.next()) c[d.value] = !0;
		delete c[0]; return c };

	function pm() { return "m202311090101" };
	var qm = new T(203);

	function rm(a) { this.i = H(a) } x(rm, Q);

	function sm(a) { this.i = H(a) } x(sm, Q);

	function tm(a) { this.i = H(a) } x(tm, Q);

	function um(a) { this.i = H(a) } x(um, Q);
	var vm = Ld(um);
	um.v = [7];

	function wm(a) { a = xm(a); try { var b = a ? vm(a) : null } catch (c) { b = null } return b ? K(b, tm, 4) || null : null }

	function xm(a) { a = (new Se(a)).get("FCCDCF", ""); if (a)
			if (u(a, "startsWith").call(a, "%")) try { var b = decodeURIComponent(a) } catch (c) { b = null } else b = a;
			else b = null; return b };

	function ym(a) { this.s = a;
		this.g = null }

	function zm(a) { a.__uspapiPostMessageReady || Am(new ym(a)) }

	function Am(a) { a.g = function(b) { var c = "string" === typeof b.data; try { var d = c ? JSON.parse(b.data) : b.data } catch (f) { return } var e = d.__uspapiCall;
			e && "getUSPData" === e.command && a.s.__uspapi(e.command, e.version, function(f, g) { var h = {};
				h.__uspapiReturn = { returnValue: f, success: g, callId: e.callId };
				f = c ? JSON.stringify(h) : h;
				b.source && "function" === typeof b.source.postMessage && b.source.postMessage(f, b.origin); return f }) };
		a.s.addEventListener("message", a.g);
		a.s.__uspapiPostMessageReady = !0 };
	[].concat(ma(new t.Map([[8, "usca"], [9, "usva"], [10, "usco"], [12, "usct"], [11, "usut"]]))).sort(function(a, b) { return a[0] - b[0] }).map(function(a) { return a[1] });
	var Bm = $l(Xl(1));

	function Cm(a, b) { a = void 0 === a ? Bm : a;
		b = void 0 === b ? new fm : b;
		this.g = a;
		this.timestamp = b }

	function Dm(a, b) {
		var c;
		try {
			if (0 === a.length) throw Error("Cannot decode empty USCA section string");
			var d = a.split(".");
			if (2 < d.length) throw Error("Expected at most 1 sub-section but got " + (d.length - 1) + " when decoding " + a);
			var e = Pl(d[0]),
				f = Ql(e.slice(0, 6));
			e = e.slice(6);
			if (1 !== f) throw Error("Unable to decode unsupported USCA Section specification version " + f + " - only version 1 is supported.");
			if (e.length < bm)
				if (e.length + 8 >= bm) e += "00000000";
				else throw Error("Expected core segment bitstring minus version plus padding to be at least of length " +
					bm + " but was " + (e.length + 8));
			a = 0;
			for (var g = [], h = 0; h < am.length; h++) { var k = am[h];
				g.push(Ql(e.slice(a, a + k)));
				a += k }
			var l = Xl(f),
				m = g.shift();
			var p = P(l, 2, m);
			var n = g.shift();
			var r = P(p, 3, n);
			var A = g.shift();
			var y = P(r, 4, A);
			var z = g.shift();
			var F = P(y, 5, z);
			var da = g.shift();
			var ha = P(F, 6, da);
			var W = new Vl,
				ob = g.shift();
			var Db = P(W, 1, ob);
			var Gd = g.shift();
			var Xb = P(Db, 2, Gd);
			var oi = g.shift();
			var kp = P(Xb, 3, oi);
			var lp = g.shift();
			var mp = P(kp, 4, lp);
			var np = g.shift();
			var op = P(mp, 5, np);
			var pp = g.shift();
			var qp = P(op, 6, pp);
			var rp =
				g.shift();
			var sp = P(qp, 7, rp);
			var tp = g.shift();
			var up = P(sp, 8, tp);
			var vp = g.shift();
			var wp = P(up, 9, vp);
			var xp = qd(ha, 7, wp);
			var yp = new Ul,
				zp = g.shift();
			var Ap = P(yp, 1, zp);
			var Bp = g.shift();
			var Cp = P(Ap, 2, Bp);
			var Dp = qd(xp, 8, Cp);
			var Ep = g.shift();
			var Fp = P(Dp, 9, Ep);
			var Gp = g.shift();
			var Hp = P(Fp, 10, Gp);
			var Ip = g.shift();
			var Jp = P(Hp, 11, Ip);
			var Kp = g.shift();
			var lk = P(Jp, 12, Kp);
			if (1 === d.length) var mk = $l(lk);
			else {
				var Lp = $l(lk),
					Yc = Pl(d[1]);
				if (3 > Yc.length) throw Error("Invalid GPC Segment [" + Yc + "]. Expected length 3, but was " +
					Yc.length + ".");
				var ke = Ql(Yc.slice(0, 2));
				if (0 > ke || 1 < ke) throw Error("Attempting to decode unknown GPC segment subsection type " + ke + ".");
				var Mp = ke + 1;
				var Np = Ql(Yc.charAt(2)),
					Op = new Yl;
				var Pp = P(Op, 2, Mp);
				var Qp = kd(Pp, 1, tc(!!Np), !1);
				mk = qd(Lp, 2, Qp)
			}
			var nk = mk
		} catch (at) { nk = null }
		return new Cm(null != (c = nk) ? c : Bm, b)
	}
	Cm.prototype.getTimestamp = function() { return this.timestamp };

	function Em(a) { var b = new Kl;
		b = kd(b, 1, zc(1), 0); var c = O(K(a.g, Wl, 1), 2),
			d = O(K(a.g, Wl, 1), 3);
		0 === c && 0 === d ? P(b, 2, 0) : 2 === c || 2 === d ? P(b, 2, 1) : P(b, 2, 2);
		c = O(K(a.g, Wl, 1), 5);
		a = O(K(a.g, Wl, 1), 6);
		0 === c && 0 === a ? P(b, 3, 0) : 1 === c || 1 === a ? P(b, 3, 2) : P(b, 3, 1);
		P(b, 4, 1);
		a = [yd(b, 1), Nl[O(b, 2)], Nl[O(b, 3)], Nl[O(b, 4)]].join(""); return 4 === a.length && (-1 === a.indexOf("-") || "---" === a.substring(1)) && "1" <= a[0] && "9" >= a[0] && Ll.hasOwnProperty(a[1]) && Ll.hasOwnProperty(a[2]) && Ll.hasOwnProperty(a[3]) ? a : null };
	Vd(zh).map(function(a) { return Number(a) });
	Vd(Ah).map(function(a) { return Number(a) });

	function Fm(a) { this.g = a;
		this.h = null }

	function Gm(a) { a.__tcfapiPostMessageReady || Hm(new Fm(a)) }

	function Hm(a) {
		a.h = function(b) {
			var c = "string" == typeof b.data;
			try { var d = c ? JSON.parse(b.data) : b.data } catch (f) { return }
			var e = d.__tcfapiCall;
			!e || "ping" !== e.command && "getTCData" !== e.command && "addEventListener" !== e.command && "removeEventListener" !== e.command || a.g.__tcfapi(e.command, e.version, function(f, g) {
				var h = {};
				h.__tcfapiReturn = "removeEventListener" === e.command ? { success: f, callId: e.callId } : { returnValue: f, success: g, callId: e.callId };
				f = c ? JSON.stringify(h) : h;
				b.source && "function" === typeof b.source.postMessage &&
					b.source.postMessage(f, b.origin);
				return f
			}, e.parameter)
		};
		a.g.addEventListener("message", a.h);
		a.g.__tcfapiPostMessageReady = !0
	};

	function Im(a) { this.i = H(a) } x(Im, Q);

	function Jm(a) { this.i = H(a) } x(Jm, Q);
	var Km = Ld(Jm);
	Jm.v = [2];

	function Lm(a, b) {
		function c(k) { if (10 > k.length) return null; var l = e(k.slice(0, 4));
			l = f(l);
			k = e(k.slice(6, 10));
			k = g(k); return "1" + l + k + "N" }

		function d(k) { if (10 > k.length) return null; var l = e(k.slice(0, 6));
			l = f(l);
			k = e(k.slice(6, 10));
			k = g(k); return "1" + l + k + "N" }

		function e(k) { for (var l = [], m = 0, p = 0; p < k.length / 2; p++) l.push(Ql(k.slice(m, m + 2))), m += 2; return l }

		function f(k) { return k.every(function(l) { return 1 === l }) ? "Y" : "N" }

		function g(k) { return k.some(function(l) { return 1 === l }) ? "Y" : "N" }
		if (0 === a.length) return null;
		a = a.split(".");
		if (2 < a.length) return null;
		a = Pl(a[0]);
		var h = Ql(a.slice(0, 6));
		a = a.slice(6);
		if (1 !== h) return null;
		switch (b) {
			case 8:
				return c(a);
			case 10:
			case 12:
			case 9:
				return d(a);
			case 11:
				return null;
			default:
				return null }
	};

	function Mm(a, b) {
		function c() { if (!a.frames[b])
				if (d.body) { var e = te("IFRAME", d);
					e.style.display = "none";
					e.style.width = "0px";
					e.style.height = "0px";
					e.style.border = "none";
					e.style.zIndex = "-1000";
					e.style.left = "-1000px";
					e.style.top = "-1000px";
					e.name = b;
					d.body.appendChild(e) } else a.setTimeout(c, 5) } var d = a.document;
		c() };

	function Nm(a) {
		var b = S;
		this.g = b;
		this.l = a;
		var c;
		a = xm(this.g.document);
		try { var d = a ? vm(a) : null } catch (e) { d = null }(a = d) ? (d = K(a, sm, 5) || null, a = null != (c = L(a, rm, 7)) ? c : [], c = Om(a), c = { ib: d, mb: c }) : c = { ib: null, mb: null };
		d = c;
		c = Pm(this, d.mb);
		d = d.ib;
		null != d && null != M(d, 2) && 0 !== N(d, 2).length ? (a = ad(d, fm, 1) ? K(d, fm, 1) : gm(), d = { uspString: N(d, 2), qa: hm(a) }) : d = null;
		this.m = d && c ? c.qa > d.qa ? c.uspString : d.uspString : d ? d.uspString : c ? c.uspString : null;
		this.h = (c = wm(b.document)) && null != M(c, 1) ? N(c, 1) : null;
		this.j = (b = wm(b.document)) && null !=
			M(b, 2) ? N(b, 2) : null
	}

	function Qm() { var a = U(ri);
		S !== S.top || S.__uspapi || S.frames.__uspapiLocator || (a = new Nm(a), Rm(a), Sm(a)) }

	function Rm(a) {!a.m || a.g.__uspapi || a.g.frames.__uspapiLocator || (a.g.__uspapiManager = "fc", Mm(a.g, "__uspapiLocator"), Va("__uspapi", function() { return a.A.apply(a, ma(Ga.apply(0, arguments))) }, a.g), a.l && zm(a.g)) } Nm.prototype.A = function(a, b, c) { "function" === typeof c && "getUSPData" === a && c({ version: 1, uspString: this.m }, !0) };

	function Om(a) { a = u(a, "find").call(a, function(b) { return 13 === O(b, 1) }); if (null == a ? 0 : null != M(a, 2)) try { return Km(N(a, 2)) } catch (b) {}
		return null }

	function Pm(a, b) {
		if (null == b || null == M(b, 1) || 0 === N(b, 1).length || 0 == L(b, Im, 2).length) return null;
		var c = N(b, 1);
		try { var d = Sl(c.split("~")[0]); var e = u(c, "includes").call(c, "~") ? c.split("~").slice(1) : [] } catch (f) { return null }
		if (a.l) return a = L(b, Im, 2).reduce(function(f, g) { return Ad(Tm(f), 1) > Ad(Tm(g), 1) ? f : g }), d = hd(d, 3, Ac).indexOf(yd(a, 1)), -1 === d || d >= e.length ? null : { uspString: Lm(e[d], yd(a, 1)), qa: hm(Tm(a)) };
		a = (aa = L(b, Im, 2), u(aa, "find")).call(aa, function(f) { return 8 === yd(f, 1) });
		a = (null == a ? 0 : ad(a, fm, 2)) ? K(a, fm,
			2) : gm();
		d = hd(d, 3, Ac).indexOf(8);
		return -1 === d ? null : { uspString: Em(Dm(e[d], a)), qa: hm(a) }
	}

	function Tm(a) { return ad(a, fm, 2) ? K(a, fm, 2) : gm() }

	function Sm(a) {!a.h || a.g.__tcfapi || a.g.frames.__tcfapiLocator || (a.g.__tcfapiManager = "fc", Mm(a.g, "__tcfapiLocator"), a.g.__tcfapiEventListeners = a.g.__tcfapiEventListeners || [], Va("__tcfapi", function() { return a.u.apply(a, ma(Ga.apply(0, arguments))) }, a.g), Gm(a.g)) }
	Nm.prototype.u = function(a, b, c, d) {
		d = void 0 === d ? null : d;
		if ("function" === typeof c)
			if (b && (2.1 < b || 1 >= b)) c(null, !1);
			else switch (b = this.g.__tcfapiEventListeners, a) {
				case "getTCData":
					!d || Array.isArray(d) && d.every(function(e) { return "number" === typeof e }) ? c(Um(this, d, null), !0) : c(null, !1);
					break;
				case "ping":
					c({ gdprApplies: !0, cmpLoaded: !0, cmpStatus: "loaded", displayStatus: "disabled", apiVersion: "2.1", cmpVersion: 2, cmpId: 300 });
					break;
				case "addEventListener":
					a = b.push(c);
					c(Um(this, null, a - 1), !0);
					break;
				case "removeEventListener":
					b[d] ?
						(b[d] = null, c(!0)) : c(!1);
					break;
				case "getInAppTCData":
				case "getVendorList":
					c(null, !1)
			}
	};

	function Um(a, b, c) { if (!a.h) return null;
		b = nm(a.h, b);
		b.addtlConsent = null != a.j ? a.j : void 0;
		b.cmpStatus = "loaded";
		b.eventStatus = "tcloaded";
		null != c && (b.listenerId = c); return b };
	var Vm = {},
		Wm = (Vm.google_ad_channel = !0, Vm.google_ad_host = !0, Vm);

	function Xm(a, b) { a.location.href && a.location.href.substring && (b.url = a.location.href.substring(0, 200));
		Dk("ama", b, .01) }

	function Ym(a) { var b = {};
		we(Wm, function(c, d) { d in a && (b[d] = a[d]) }); return b };

	function Zm(a) { var b = /[a-zA-Z0-9._~-]/,
			c = /%[89a-zA-Z]./; return a.replace(/(%[a-zA-Z0-9]{2})/g, function(d) { if (!d.match(c)) { var e = decodeURIComponent(d); if (e.match(b)) return e } return d.toUpperCase() }) }

	function $m(a) { for (var b = "", c = /[/%?&=]/, d = 0; d < a.length; ++d) { var e = a[d];
			b = e.match(c) ? b + e : b + encodeURIComponent(e) } return b };

	function an(a) { a = hd(a, 2, xc); if (!a) return !1; for (var b = 0; b < a.length; b++)
			if (1 == a[b]) return !0; return !1 }

	function bn(a, b) { a = $m(Zm(a.location.pathname)).replace(/(^\/)|(\/$)/g, ""); var c = xe(a),
			d = cn(a); return u(b, "find").call(b, function(e) { if (ad(e, Ij, 7)) { var f = K(e, Ij, 7);
				f = Bc(I(f, 1)) } else f = Bc(I(e, 1));
			e = ad(e, Ij, 7) ? vd(K(e, Ij, 7), 2) : 2; if ("number" !== typeof f) return !1; switch (e) {
				case 1:
					return f == c;
				case 2:
					return d[f] || !1 } return !1 }) || null }

	function cn(a) { for (var b = {};;) { b[xe(a)] = !0; if (!a) return b;
			a = a.substring(0, a.lastIndexOf("/")) } };

	function dn(a) { a = K(a, Hj, 3); return !a || Ec(I(a, 1)) <= Date.now() ? !1 : !0 }

	function en(a) { if (U(wi)) var b = null;
		else try { b = a.getItem("google_ama_config") } catch (d) { b = null }
		try { var c = b ? Uj(b) : null } catch (d) { c = null } return c };

	function fn(a) { this.i = H(a) } x(fn, Q);

	function gn(a) { this.i = H(a) } x(gn, Q);
	gn.v = [1];

	function hn(a) { this.i = H(a) } x(hn, Q);
	hn.prototype.getId = function() { return yd(this, 1) };
	hn.v = [2];

	function jn(a) { this.i = H(a) } x(jn, Q);
	jn.v = [2];

	function kn(a) { this.i = H(a) } x(kn, Q);
	kn.v = [2];

	function ln(a) { this.i = H(a) } x(ln, Q);

	function mn(a) { this.i = H(a) } x(mn, Q);
	mn.v = [1, 4, 2, 3];

	function nn(a) { this.i = H(a) } x(nn, Q);

	function on(a) { return Cd(a, fn, 13, ed) }

	function pn(a) { return Cd(a, gn, 14, ed) } nn.v = [19];
	var ed = [13, 14];
	var qn = void 0;

	function rn(a) { Id(qn, Df);
		qn = a };

	function Y(a) { return a.google_ad_modifications = a.google_ad_modifications || {} }

	function sn(a) { a = Y(a); var b = a.space_collapsing || "none"; return a.remove_ads_by_default ? { bb: !0, Xb: b, Da: a.ablation_viewport_offset } : null }

	function tn(a, b) { a = Y(a);
		a.had_ads_ablation = !0;
		a.remove_ads_by_default = !0;
		a.space_collapsing = "slot";
		a.ablation_viewport_offset = b }

	function un(a) { Y(S).allow_second_reactive_tag = a }

	function vn() { var a = Y(window);
		a.afg_slotcar_vars || (a.afg_slotcar_vars = {}); return a.afg_slotcar_vars };

	function wn(a) { var b, c, d; return null != (d = null == (b = Y(a)) ? void 0 : null == (c = b.head_tag_slot_vars) ? void 0 : c.google_ad_host) ? d : xn(a) }

	function xn(a) { var b, c, d; return null != (d = null == (b = a.document) ? void 0 : null == (c = b.querySelector('meta[name="google-adsense-platform-account"]')) ? void 0 : c.getAttribute("content")) ? d : null };
	var yn = [2, 7, 1];

	function zn(a, b, c, d) { c = void 0 === c ? "" : c; return 1 === b && An(c, void 0 === d ? null : d) ? !0 : Bn(a, c, function(e) { return tb(L(e, Md, 2), function(f) { return I(f, 1) === b }) }) }

	function An(a, b) { return b ? cd(b, fn, 13) ? xd(on(b), 1) : cd(b, gn, 14) && "" !== a && 1 === ud(pn(b), 1).length && ud(pn(b), 1)[0] === a ? xd(K(pn(b), fn, 2), 1) : !1 : !1 }

	function Cn(a, b) { b = yd(b, 18); - 1 !== b && (a.tmod = b) }

	function Dn(a) { var b = void 0 === b ? "" : b; var c = re(S) || S; return En(c, a) ? !0 : Bn(S, b, function(d) { return tb(hd(d, 3, xc), function(e) { return e === a }) }) }

	function En(a, b) { a = (a = (a = a.location && a.location.hash) && a.match(/forced_clientside_labs=([\d,]+)/)) && a[1]; return !!a && vb(a.split(","), b.toString()) }

	function Bn(a, b, c) { a = re(a) || a; var d = Fn(a);
		b && (b = bf(String(b))); return Ud(d, function(e, f) { return Object.prototype.hasOwnProperty.call(d, f) && (!b || b === f) && c(e) }) }

	function Fn(a) { a = Gn(a); var b = {};
		we(a, function(c, d) { try { var e = new Nd(c);
				b[d] = e } catch (f) {} }); return b }

	function Gn(a) { return U(pi) ? (Id(qn, Kd), a = xl({ s: a, ka: qn }), null != a.g ? Hn(a.getValue()) : {}) : Hn(a.localStorage) }

	function Hn(a) { try { var b = a.getItem("google_adsense_settings"); if (!b) return {}; var c = JSON.parse(b); return c !== Object(c) ? {} : Td(c, function(d, e) { return Object.prototype.hasOwnProperty.call(c, e) && "string" === typeof e && Array.isArray(d) }) } catch (d) { return {} } }

	function In(a) { Dk("atf_ad_settings_from_ppabg", { p_s: a }, .01) }

	function Jn(a) { return !!a && (0 < L(a, hi, 1).length || U(xi) && 0 < L(a, ii, 3).length) }

	function Kn(a) { Dk("overlay_settings_from_ppabg", { p_s: a }, .01) }

	function Ln(a, b) {
		if (wn(B)) return yn;
		if (null == b ? 0 : cd(b, fn, 13)) { var c = N(on(b), 9),
				d, e;
			b = null == b ? void 0 : null == (d = on(b)) ? void 0 : null == (e = K(d, Gl, 2)) ? void 0 : K(e, Fl, 3); if (!a || c != a || !b) return yn;
			Kn(!1); return hd(b, 3, xc) }
		if (null == b ? 0 : cd(b, gn, 14)) {
			var f;
			d = null == b ? void 0 : null == (f = pn(b)) ? void 0 : ud(f, 1);
			if (!d || 1 !== d.length || !a || d[0] !== a || N(b, 17) != B.location.host) return yn;
			var g, h;
			a = null == b ? void 0 : null == (c = pn(b)) ? void 0 : null == (g = K(c, fn, 2)) ? void 0 : null == (h = K(g, Gl, 2)) ? void 0 : K(h, Fl, 3);
			if (!a) return yn;
			Kn(!0);
			return hd(a,
				3, xc)
		}
		return yn
	}

	function Mn(a, b) { var c = [],
			d = yn; if (U(Di) || U(Ci) || U(Ei)) d = Ln(a, b);
		U(Di) && !u(d, "includes").call(d, 1) && c.push(1);
		U(Ci) && !u(d, "includes").call(d, 2) && c.push(2);
		U(Ei) && !u(d, "includes").call(d, 7) && c.push(7); return c };

	function Nn(a, b, c, d) { On(new Pn(a, b, c, d)) }

	function Pn(a, b, c, d) { this.s = a;
		this.g = b;
		this.j = c;
		this.h = d }

	function On(a) { Nh(Lh(xl({ s: a.s, ka: xd(a.g, 6) }), function(b) { Qn(a, b, !0) }), function() { Rn(a) }) }

	function Qn(a, b, c) { Nh(Lh(Sn(b), function(d) { Tn("ok");
			a.h(d, { fromLocalStorage: !0 }) }), function() { var d = a.s; try { b.removeItem("google_ama_config") } catch (e) { Xm(d, { lserr: 1 }) } c ? Rn(a) : a.h(null, null) }) }

	function Rn(a) { Nh(Lh(Un(a), function(b) { a.h(b, { fromPABGSettings: !0 }) }), function() { Vn(a) }) }

	function Vn(a) { wl({ s: a.s, ka: xd(a.g, 6), timeoutMs: 50, ia: function(b) { Wn(a, b) } }) }

	function Sn(a) { return (a = (a = en(a)) ? dn(a) ? a : null : null) ? Mh(a) : Oh(Error("invlocst")) }

	function Un(a) {
		if (wn(a.s) && !xd(a.g, 22)) return Oh(Error("invtag"));
		a: {
			var b = a.s;
			var c = a.j;a = a.g;
			if (null == a ? 0 : cd(a, fn, 13)) { var d, e;
				b = null == a ? void 0 : null == (d = on(a)) ? void 0 : null == (e = K(d, Gl, 2)) ? void 0 : K(e, El, 2);
				Jn(b) ? In(!1) : b = null } else {
				if (null == a ? 0 : cd(a, gn, 14)) { var f;
					d = null == a ? void 0 : null == (f = pn(a)) ? void 0 : ud(f, 1); var g, h, k;
					e = null == a ? void 0 : null == (g = pn(a)) ? void 0 : null == (h = K(g, fn, 2)) ? void 0 : null == (k = K(h, Gl, 2)) ? void 0 : K(k, El, 2); if (d && 1 === d.length && d[0] === c && Jn(e) && N(a, 17) === b.location.host) { In(!0);
						b = e; break a } } b =
					null
			}
		}
		b ? (c = new Tj, g = L(b, hi, 1), c = sd(c, 1, g), g = L(b, Oj, 2), c = sd(c, 7, g), U(xi) && 0 < L(b, ii, 3).length && (g = new ji, b = L(b, ii, 3), b = sd(g, 1, b), qd(c, 6, b)), b = Mh(c)) : b = Oh(Error("invtag"));
		return b
	}

	function Wn(a, b) { Nh(Lh(b, function(c) { Qn(a, c, !1) }), function(c) { Tn(c.message);
			a.h(null, null) }) }

	function Tn(a) { Dk("abg::amalserr", { status: a, guarding: "true", timeout: 50, rate: .01 }, .01) };

	function Xn(a, b, c, d) { try { var e = bn(a, L(c, Oj, 7)); if (e && an(e)) { if (M(e, 4)) { var f = {},
						g = new Yh(null, (f.google_package = M(e, 4), f));
					d = Zh(d, g) } var h = new Uk(a, b, c, e, d);
				fk(1E3, function() { var k = new Bh;
					(new Il(a, h, k)).start(); return k.h }, a).then(Ua(Yn, a), Ua(Zn, a)) } } catch (k) { Xm(a, { atf: -1 }) } }

	function Yn(a) { Xm(a, { atf: 1 }) }

	function Zn(a, b) {
		(a.google_ama_state = a.google_ama_state || {}).exception = b;
		Xm(a, { atf: 0 }) };

	function $n(a) { a.easpi = U(Ui);
		a.asla = .4;
		a.asaa = -1;
		a.sedf = !1;
		a.asro = U(Si);
		U(Oi) && (a.asiscm = !0);
		a.sefa = !0;
		U(Ti) && (a.sugawps = !0);
		U(Li) && (a.ascmds = !0); var b = R(Ie).h(Mi.g, Mi.defaultValue);
		b.length && (a.seiel = b.join("~"));
		U(Ni) && (a.slcwct = Zi(Qi), a.sacwct = Zi(Ji));
		U(Pi) && (a.slmct = Zi(Ri), a.samct = Zi(Ki)) };

	function ao(a, b) { if (!a) return !1;
		a = a.hash; if (!a || !a.indexOf) return !1; if (-1 != a.indexOf(b)) return !0;
		b = bo(b); return "go" != b && -1 != a.indexOf(b) ? !0 : !1 }

	function bo(a) { var b = "";
		we(a.split("_"), function(c) { b += c.substr(0, 2) }); return b };
	yb || kb();

	function co() { var a = {};
		R(Ie).g(ti.g, ti.defaultValue) && (a.bust = R(Ie).g(ti.g, ti.defaultValue)); var b = dl();
		b = hl(b, 38, ""); "" !== b && (a.sbust = b); return a };

	function eo() { var a = this;
		this.promise = new t.Promise(function(b, c) { a.resolve = b;
			a.reject = c }) };

	function fo() { var a = new eo; return { promise: a.promise, resolve: a.resolve } };

	function go(a) { a = void 0 === a ? function() {} : a;
		B.google_llp || (B.google_llp = {}); var b = B.google_llp,
			c = b[7]; if (c) return c;
		c = fo();
		b[7] = c;
		a(); return c }

	function ho(a) { return go(function() { se(B.document, a) }).promise };

	function io() { this.wasPlaTagProcessed = !1;
		this.wasReactiveAdConfigReceived = {};
		this.adCount = {};
		this.wasReactiveAdVisible = {};
		this.stateForType = {};
		this.reactiveTypeEnabledInAsfe = {};
		this.wasReactiveTagRequestSent = !1;
		this.reactiveTypeDisabledByPublisher = {};
		this.tagSpecificState = {};
		this.messageValidationEnabled = !1;
		this.floatingAdsStacking = new jo;
		this.sideRailProcessedFixedElements = new t.Set;
		this.sideRailAvailableSpace = new t.Map;
		this.sideRailPlasParam = new t.Map }

	function ko(a) {
		a.google_reactive_ads_global_state ? (null == a.google_reactive_ads_global_state.sideRailProcessedFixedElements && (a.google_reactive_ads_global_state.sideRailProcessedFixedElements = new t.Set), null == a.google_reactive_ads_global_state.sideRailAvailableSpace && (a.google_reactive_ads_global_state.sideRailAvailableSpace = new t.Map), null == a.google_reactive_ads_global_state.sideRailPlasParam && (a.google_reactive_ads_global_state.sideRailPlasParam = new t.Map)) : a.google_reactive_ads_global_state = new io;
		return a.google_reactive_ads_global_state
	}

	function jo() { this.maxZIndexRestrictions = {};
		this.nextRestrictionId = 0;
		this.maxZIndexListeners = [] };

	function lo(a) { var b = {}; return { enable_page_level_ads: (b.pltais = !0, b), google_ad_client: a } };

	function mo(a) { if (B.google_apltlad || B !== B.top && !U(Fi) || !a.google_ad_client) return null;
		B.google_apltlad = !0; var b = lo(a.google_ad_client),
			c = b.enable_page_level_ads;
		we(a, function(d, e) { Bj[e] && "google_ad_client" !== e && (c[e] = d) });
		c.google_pgb_reactive = 7;
		$n(c); if ("google_ad_section" in a || "google_ad_region" in a) c.google_ad_section = a.google_ad_section || a.google_ad_region; return b };

	function no(a, b) { Y(S).ama_ran_on_page || fk(1001, function() { oo(new po(a, b)) }, B) }

	function po(a, b) { this.s = B;
		this.g = a;
		this.h = b }

	function oo(a) { Nn(a.s, a.h, a.g.google_ad_client || "", function(b, c) { var d = a.s,
				e = a.g;
			Y(S).ama_ran_on_page || b && qo(d, e, b, c) }) }

	function qo(a, b, c, d) {
		d && (kk(a).configSourceInAbg = d);
		if (ad(c, Sj, 24)) { d = ok(a);
			d.availableAbg = !0; var e, f;
			d.ablationFromStorage = !!(null == (e = K(c, Sj, 24)) ? 0 : null == (f = K(e, Qj, 3)) ? 0 : Cd(f, Pj, 2, Rj)) }
		if (Na(b.enable_page_level_ads) && 7 === b.enable_page_level_ads.google_pgb_reactive) { if (!bn(a, L(c, Oj, 7))) { Dk("amaait", { value: "true" }); return } Dk("amaait", { value: "false" }) } Y(S).ama_ran_on_page = !0;
		var g;
		if (null == (g = K(c, Gj, 15)) ? 0 : gd(g, 23)) Y(a).enable_overlap_observer = !0;
		if ((e = K(c, Fj, 13)) && 1 === I(e, 1)) {
			var h = 0,
				k = K(e, Ej, 6);
			k && td(k, 3) && (h = td(k, 3) || 0);
			tn(a, h)
		} else if (null == (h = K(c, Sj, 24)) ? 0 : null == (k = K(h, Qj, 3)) ? 0 : Cd(k, Pj, 2, Rj)) ok(a).ablatingThisPageview = !0, tn(a, 1);
		We(3, [c.toJSON()]);
		var l = b.google_ad_client || "";
		b = Ym(Na(b.enable_page_level_ads) ? b.enable_page_level_ads : {});
		var m = Zh(ci, new Yh(null, b));
		Bk(782, function() { Xn(a, l, c, m) })
	};

	function ro(a, b) { a = a.document; for (var c = void 0, d = 0; !c || a.getElementById(c + "_host");) c = "aswift_" + d++;
		a = c;
		c = Number(b.google_ad_width || 0);
		b = Number(b.google_ad_height || 0);
		d = document.createElement("div");
		d.id = a + "_host"; var e = d.style;
		e.border = "none";
		e.height = b + "px";
		e.width = c + "px";
		e.margin = "0px";
		e.padding = "0px";
		e.position = "relative";
		e.visibility = "visible";
		e.backgroundColor = "transparent";
		e.display = "inline-block"; return { Eb: a, Zb: d } };

	function so(a) { var b = a.La; return a.Ea || ("dev" === b ? "dev" : "") };
	var to = {},
		uo = (to.google_analytics_domain_name = !0, to.google_analytics_uacct = !0, to.google_pause_ad_requests = !0, to.google_user_agent_client_hint = !0, to);

	function vo(a) { return (a = a.innerText || a.innerHTML) && (a = a.replace(/^\s+/, "").split(/\r?\n/, 1)[0].match(/^\x3c!--+(.*?)(?:--+>)?\s*$/)) && RegExp("google_ad_client").test(a[1]) ? a[1] : null }

	function wo(a) { if (a = a.innerText || a.innerHTML)
			if (a = a.replace(/^\s+|\s+$/g, "").replace(/\s*(\r?\n)+\s*/g, ";"), (a = a.match(/^\x3c!--+(.*?)(?:--+>)?$/) || a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?$/i)) && RegExp("google_ad_client").test(a[1])) return a[1]; return null }

	function xo(a) { switch (a) {
			case "true":
				return !0;
			case "false":
				return !1;
			case "null":
				return null;
			case "undefined":
				break;
			default:
				try { var b = a.match(/^(?:'(.*)'|"(.*)")$/); if (b) return b[1] || b[2] || ""; if (/^[-+]?\d*(\.\d+)?$/.test(a)) { var c = parseFloat(a); return c === c ? c : void 0 } } catch (d) {} } };

	function yo(a) {
		if (a.google_ad_client) return String(a.google_ad_client);
		var b, c, d, e, f;
		if (null != (e = null != (d = null == (b = Y(a).head_tag_slot_vars) ? void 0 : b.google_ad_client) ? d : null == (c = a.document.querySelector(".adsbygoogle[data-ad-client]")) ? void 0 : c.getAttribute("data-ad-client"))) b = e;
		else {
			b: {
				b = a.document.getElementsByTagName("script");a = a.navigator && a.navigator.userAgent || "";a = RegExp("appbankapppuzdradb|daumapps|fban|fbios|fbav|fb_iab|gsa/|messengerforios|naver|niftyappmobile|nonavigation|pinterest|twitter|ucbrowser|yjnewsapp|youtube",
					"i").test(a) || /i(phone|pad|pod)/i.test(a) && /applewebkit/i.test(a) && !/version|safari/i.test(a) && !af() ? vo : wo;
				for (c = b.length - 1; 0 <= c; c--)
					if (d = b[c], !d.google_parsed_script_for_pub_code && (d.google_parsed_script_for_pub_code = !0, d = a(d))) { b = d; break b } b = null
			}
			if (b) { a = /(google_\w+) *= *(['"]?[\w.-]+['"]?) *(?:;|$)/gm; for (c = {}; d = a.exec(b);) c[d[1]] = xo(d[2]);
				b = c.google_ad_client ? c.google_ad_client : "" } else b = ""
		}
		return null != (f = b) ? f : ""
	};
	var zo = { "120x90": !0, "160x90": !0, "180x90": !0, "200x90": !0, "468x15": !0, "728x15": !0 };

	function Ao(a, b) { if (15 == b) { if (728 <= a) return 728; if (468 <= a) return 468 } else if (90 == b) { if (200 <= a) return 200; if (180 <= a) return 180; if (160 <= a) return 160; if (120 <= a) return 120 } return null };

	function Bo(a) { this.i = H(a) } x(Bo, Q);
	Bo.prototype.getVersion = function() { return N(this, 2) };

	function Co(a) { this.i = H(a) } x(Co, Q);

	function Do(a, b) { return $c(a, 2, Gc(b)) }

	function Eo(a, b) { return $c(a, 3, Gc(b)) }

	function Fo(a, b) { return $c(a, 4, Gc(b)) }

	function Go(a, b) { return $c(a, 5, Gc(b)) }

	function Ho(a, b) { return $c(a, 9, Gc(b)) }

	function Io(a, b) { return sd(a, 10, b) }

	function Jo(a, b) { return $c(a, 11, tc(b)) }

	function Ko(a, b) { return $c(a, 1, Gc(b)) }

	function Lo(a, b) { return $c(a, 7, tc(b)) } Co.v = [10, 6];
	var Mo = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

	function No(a) { var b; return null != (b = a.google_tag_data) ? b : a.google_tag_data = {} }

	function Oo(a) { var b, c; return "function" === typeof(null == (b = a.navigator) ? void 0 : null == (c = b.userAgentData) ? void 0 : c.getHighEntropyValues) }

	function Po() { var a = S; if (!Oo(a)) return null; var b = No(a); if (b.uach_promise) return b.uach_promise;
		a = a.navigator.userAgentData.getHighEntropyValues(Mo).then(function(c) { null != b.uach || (b.uach = c); return c }); return b.uach_promise = a }

	function Qo(a) { var b; return Jo(Io(Go(Do(Ko(Fo(Lo(Ho(Eo(new Co, String(a.architecture || "")), String(a.bitness || "")), !!a.mobile), String(a.model || "")), String(a.platform || "")), String(a.platformVersion || "")), String(a.uaFullVersion || "")), (null == (b = a.fullVersionList) ? void 0 : b.map(function(c) { var d = new Bo;
			d = $c(d, 1, Gc(String(c.brand))); return $c(d, 2, Gc(String(c.version))) })) || []), !!a.wow64) }

	function Ro() { var a, b; return null != (b = null == (a = Po()) ? void 0 : a.then(function(c) { return Qo(c) })) ? b : null };

	function So() { var a = S;
		a.google_sa_impl && !a.document.getElementById("google_shimpl") && (delete a.google_sa_queue, delete a.google_sa_impl) }

	function To(a, b) { b.google_ad_host || (a = xn(a)) && (b.google_ad_host = a) }

	function Uo(a, b, c) { c = void 0 === c ? "" : c;
		So();
		S.google_sa_queue || (S.google_sa_queue = [], S.google_process_slots = Ck(215, function() { Vo(S.google_sa_queue) }), a = Wo(c, a, b), se(S.document, a).id = "google_shimpl") }

	function Vo(a) { var b = a.shift(); "function" === typeof b && Bk(216, b);
		a.length && B.setTimeout(Ck(215, function() { Vo(a) }), 0) }

	function Xo(a, b) { a.google_sa_queue = a.google_sa_queue || [];
		a.google_sa_impl ? b() : a.google_sa_queue.push(b) }

	function Wo(a, b, c) { b = xd(c, 4) ? b.Tb : b.Ub; var d = {};
		a: { if (xd(c, 4)) { if (a = a || yo(S)) { c = {};
					a = (c.client = a, c.plah = S.location.host, c); break a } throw Error("PublisherCodeNotFoundForAma"); } a = {} } Yo(a, d);
		Yo(co(), d); return Zd(b, d) }

	function Yo(a, b) { we(a, function(c, d) { void 0 === b[d] && (b[d] = c) }) }

	function Zo(a) {
		a: { var b = void 0 === b ? !1 : b; for (var c = [B.top], d = [], e = 0, f; f = c[e++];) { b && !qe(f) || d.push(f); try { if (f.frames)
						for (var g = 0; g < f.frames.length && 1024 > c.length; ++g) c.push(f.frames[g]) } catch (k) {} } for (b = 0; b < d.length; b++) try { var h = d[b].frames.google_esf; if (h) { Re = h; break a } } catch (k) {} Re = null }
		if (Re) return null;d = te("IFRAME");d.id = "google_esf";d.name = "google_esf";h = U(Hi) ? a.bc : a.dc;b = R(Ie).g(Ii.g, Ii.defaultValue);
		"inhead" === b ? h = a.ac : "nohtml" === b && (h = a.cc);U(Ai) && (h = Zd(h, { hello: "world" }));d.src = ae(h).toString();
		d.style.display = "none";
		return d
	}

	function $o(a, b, c, d) {
		var e = ro(a, b),
			f = e.Eb,
			g = e.Zb;
		c.appendChild(g);
		ap(a, c, b);
		var h;
		c = null != (h = b.google_start_time) ? h : Xa;
		h = (new Date).getTime();
		b.google_lrv = so({ Ea: pm(), La: N(d, 2) });
		b.google_async_iframe_id = f;
		b.google_start_time = c;
		b.google_bpp = h > c ? h - c : 1;
		a.google_sv_map = a.google_sv_map || {};
		a.google_sv_map[f] = b;
		Xo(a, function() {
			var k = g;
			if (!k || !k.isConnected)
				if (k = a.document.getElementById(String(b.google_async_iframe_id) + "_host"), null == k) throw Error("no_div");
			(k = a.google_sa_impl({ pubWin: a, vars: b, innerInsElement: k })) &&
			Ek(911, k)
		})
	}

	function ap(a, b, c) {
		var d = c.google_ad_output,
			e = c.google_ad_format,
			f = c.google_ad_width || 0,
			g = c.google_ad_height || 0;
		e || "html" !== d && null != d || (e = f + "x" + g);
		d = !c.google_ad_slot || c.google_override_format || !zo[c.google_ad_width + "x" + c.google_ad_height] && "aa" === c.google_loader_used;
		e && d ? e = e.toLowerCase() : e = "";
		c.google_ad_format = e;
		if ("number" !== typeof c.google_reactive_sra_index || !c.google_ad_unit_key) {
			e = [c.google_ad_slot, c.google_orig_ad_format || c.google_ad_format, c.google_ad_type, c.google_orig_ad_width || c.google_ad_width,
c.google_orig_ad_height || c.google_ad_height];
			d = [];
			f = 0;
			for (g = b; g && 25 > f; g = g.parentNode, ++f) 9 === g.nodeType ? d.push("") : d.push(g.id);
			(d = d.join()) && e.push(d);
			c.google_ad_unit_key = xe(e.join(":")).toString();
			var h = void 0 === h ? !1 : h;
			e = [];
			for (d = 0; b && 25 > d; ++d) {
				f = "";
				void 0 !== h && h || (f = (f = 9 !== b.nodeType && b.id) ? "/" + f : "");
				a: {
					if (b && b.nodeName && b.parentElement) {
						g = b.nodeName.toString().toLowerCase();
						for (var k = b.parentElement.childNodes, l = 0, m = 0; m < k.length; ++m) {
							var p = k[m];
							if (p.nodeName && p.nodeName.toString().toLowerCase() ===
								g) { if (b === p) { g = "." + l; break a }++l }
						}
					}
					g = ""
				}
				e.push((b.nodeName && b.nodeName.toString().toLowerCase()) + f + g);
				b = b.parentElement
			}
			h = e.join() + ":";
			b = [];
			if (a) try { var n = a.parent; for (e = 0; n && n !== a && 25 > e; ++e) { var r = n.frames; for (d = 0; d < r.length; ++d)
						if (a === r[d]) { b.push(d); break } a = n;
					n = a.parent } } catch (A) {} c.google_ad_dom_fingerprint = xe(h + b.join()).toString()
		}
	}

	function bp() { var a = re(B);
		a && (a = ko(a), a.tagSpecificState[1] || (a.tagSpecificState[1] = { debugCard: null, debugCardRequested: !1 })) }

	function cp() { var a = Ro();
		null != a && a.then(function(b) { a: { gc = !0; try { var c = JSON.stringify(b.toJSON(), Mc); break a } finally { gc = !1 } c = void 0 } S.google_user_agent_client_hint = c });
		He() };

	function Z(a, b, c, d) { d = void 0 === d ? !1 : d;
		tj.call(this, a, b);
		this.la = c;
		this.Kb = d } x(Z, tj);
	Z.prototype.za = function() { return this.la };
	Z.prototype.h = function(a, b, c) { if (!b.google_ad_resize || U(Bi)) c.style.height = this.height() + "px", b.rpe = !0 };

	function dp(a) { return function(b) { return !!(b.la & a) } };
	var ep = {},
		fp = (ep.image_stacked = 1 / 1.91, ep.image_sidebyside = 1 / 3.82, ep.mobile_banner_image_sidebyside = 1 / 3.82, ep.pub_control_image_stacked = 1 / 1.91, ep.pub_control_image_sidebyside = 1 / 3.82, ep.pub_control_image_card_stacked = 1 / 1.91, ep.pub_control_image_card_sidebyside = 1 / 3.74, ep.pub_control_text = 0, ep.pub_control_text_card = 0, ep),
		gp = {},
		hp = (gp.image_stacked = 80, gp.image_sidebyside = 0, gp.mobile_banner_image_sidebyside = 0, gp.pub_control_image_stacked = 80, gp.pub_control_image_sidebyside = 0, gp.pub_control_image_card_stacked =
			85, gp.pub_control_image_card_sidebyside = 0, gp.pub_control_text = 80, gp.pub_control_text_card = 80, gp),
		ip = {},
		jp = (ip.pub_control_image_stacked = 100, ip.pub_control_image_sidebyside = 200, ip.pub_control_image_card_stacked = 150, ip.pub_control_image_card_sidebyside = 250, ip.pub_control_text = 100, ip.pub_control_text_card = 150, ip);

	function Rp(a) {
		var b = 0;
		a.X && b++;
		a.P && b++;
		a.R && b++;
		if (3 > b) return { V: "Tags data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num should be set together." };
		b = a.X.split(",");
		var c = a.R.split(",");
		a = a.P.split(",");
		if (b.length !== c.length || b.length !== a.length) return { V: 'Lengths of parameters data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num must match. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"' };
		if (2 < b.length) return { V: "The parameter length of attribute data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num is too long. At most 2 parameters for each attribute are needed: one for mobile and one for desktop, while you are providing " + (b.length + ' parameters. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside".') };
		for (var d = [], e = [], f = 0; f < b.length; f++) {
			var g =
				Number(c[f]);
			if (u(Number, "isNaN").call(Number, g) || 0 === g) return { V: "Wrong value '" + c[f] + "' for data-matched-content-rows-num." };
			d.push(g);
			g = Number(a[f]);
			if (u(Number, "isNaN").call(Number, g) || 0 === g) return { V: "Wrong value '" + a[f] + "' for data-matched-content-columns-num." };
			e.push(g)
		}
		return { R: d, P: e, pb: b }
	}

	function Sp(a) { return 1200 <= a ? { width: 1200, height: 600 } : 850 <= a ? { width: a, height: Math.floor(.5 * a) } : 550 <= a ? { width: a, height: Math.floor(.6 * a) } : 468 <= a ? { width: a, height: Math.floor(.7 * a) } : { width: a, height: Math.floor(3.44 * a) } };
	var Tp = xb("script");

	function Up(a, b, c, d, e, f, g, h, k, l, m, p) { this.u = a;
		this.T = b;
		this.la = void 0 === c ? null : c;
		this.g = void 0 === d ? null : d;
		this.L = void 0 === e ? null : e;
		this.h = void 0 === f ? null : f;
		this.j = void 0 === g ? null : g;
		this.A = void 0 === h ? null : h;
		this.B = void 0 === k ? null : k;
		this.l = void 0 === l ? null : l;
		this.m = void 0 === m ? null : m;
		this.G = void 0 === p ? null : p } Up.prototype.size = function() { return this.T };

	function Vp(a, b, c) {
		null != a.la && (c.google_responsive_formats = a.la);
		null != a.L && (c.google_safe_for_responsive_override = a.L);
		null != a.h && (!0 === a.h ? c.google_full_width_responsive_allowed = !0 : (c.google_full_width_responsive_allowed = !1, c.gfwrnwer = a.h));
		null != a.j && !0 !== a.j && (c.gfwrnher = a.j);
		var d = a.m || c.google_ad_width;
		null != d && (c.google_resizing_width = d);
		d = a.l || c.google_ad_height;
		null != d && (c.google_resizing_height = d);
		d = a.size().g(b);
		var e = a.size().height();
		if (!c.google_ad_resize || U(Bi)) {
			c.google_ad_width =
				d;
			c.google_ad_height = e;
			var f = a.size();
			b = f.g(b) + "x" + f.height();
			c.google_ad_format = b;
			c.google_responsive_auto_format = a.u;
			null != a.g && (c.armr = a.g);
			c.google_ad_resizable = !0;
			c.google_override_format = 1;
			c.google_loader_features_used = 128;
			!0 === a.h && (c.gfwrnh = a.size().height() + "px")
		}
		null != a.A && (c.gfwroml = a.A);
		null != a.B && (c.gfwromr = a.B);
		null != a.l && (c.gfwroh = a.l);
		null != a.m && (c.gfwrow = a.m);
		null != a.G && (c.gfwroz = a.G);
		b = re(window) || window;
		ao(b.location, "google_responsive_dummy_ad") && (vb([1, 2, 3, 4, 5, 6, 7, 8], a.u) || 1 ===
			a.g) && 2 !== a.g && (a = JSON.stringify({ googMsgType: "adpnt", key_value: [{ key: "qid", value: "DUMMY_AD" }] }), c.dash = "<" + Tp + ">window.top.postMessage('" + a + "', '*');\n          </" + Tp + '>\n          <div id="dummyAd" style="width:' + d + "px;height:" + e + 'px;\n            background:#ddd;border:3px solid #f00;box-sizing:border-box;\n            color:#000;">\n            <p>Requested size:' + d + "x" + e + "</p>\n            <p>Rendered size:" + d + "x" + e + "</p>\n          </div>")
	};
	var Wp = ["google_content_recommendation_ui_type", "google_content_recommendation_columns_num", "google_content_recommendation_rows_num"];

	function Xp(a, b) { tj.call(this, a, b) } x(Xp, tj);
	Xp.prototype.g = function(a) { return Math.min(1200, Math.max(this.O, Math.round(a))) };

	function Yp(a, b) {
		Zp(a, b);
		if ("pedestal" == b.google_content_recommendation_ui_type) return new Up(9, new Xp(a, Math.floor(a * b.google_phwr)));
		var c = ie();
		468 > a ? c ? (c = a - 8 - 8, c = Math.floor(c / 1.91 + 70) + Math.floor(11 * (c * fp.mobile_banner_image_sidebyside + hp.mobile_banner_image_sidebyside) + 96), a = { fa: a, ea: c, P: 1, R: 12, X: "mobile_banner_image_sidebyside" }) : (a = Sp(a), a = { fa: a.width, ea: a.height, P: 1, R: 13, X: "image_sidebyside" }) : (a = Sp(a), a = { fa: a.width, ea: a.height, P: 4, R: 2, X: "image_stacked" });
		$p(b, a);
		return new Up(9, new Xp(a.fa,
			a.ea))
	}

	function aq(a, b) {
		Zp(a, b);
		var c = Rp({ R: b.google_content_recommendation_rows_num, P: b.google_content_recommendation_columns_num, X: b.google_content_recommendation_ui_type });
		if (c.V) a = { fa: 0, ea: 0, P: 0, R: 0, X: "image_stacked", V: c.V };
		else {
			var d = 2 === c.pb.length && 468 <= a ? 1 : 0;
			var e = c.pb[d];
			e = 0 === e.indexOf("pub_control_") ? e : "pub_control_" + e;
			var f = jp[e];
			for (var g = c.P[d]; a / g < f && 1 < g;) g--;
			f = g;
			c = c.R[d];
			d = Math.floor(((a - 8 * f - 8) / f * fp[e] + hp[e]) * c + 8 * c + 8);
			a = 1500 < a ? { width: 0, height: 0, Vb: "Calculated slot width is too large: " + a } :
				1500 < d ? { width: 0, height: 0, Vb: "Calculated slot height is too large: " + d } : { width: a, height: d };
			a = { fa: a.width, ea: a.height, P: f, R: c, X: e }
		}
		if (a.V) throw new X(a.V);
		$p(b, a);
		return new Up(9, new Xp(a.fa, a.ea))
	}

	function Zp(a, b) { if (0 >= a) throw new X("Invalid responsive width from Matched Content slot " + b.google_ad_slot + ": " + a + ". Please ensure to put this Matched Content slot into a non-zero width div container."); }

	function $p(a, b) { a.google_content_recommendation_ui_type = b.X;
		a.google_content_recommendation_columns_num = b.P;
		a.google_content_recommendation_rows_num = b.R };

	function bq(a, b) { tj.call(this, a, b) } x(bq, tj);
	bq.prototype.g = function() { return this.O };
	bq.prototype.h = function(a, b, c) { sj(a, c); if (!b.google_ad_resize || U(Bi)) c.style.height = this.height() + "px", b.rpe = !0 };
	var cq = { "image-top": function(a) { return 600 >= a ? 284 + .414 * (a - 250) : 429 }, "image-middle": function(a) { return 500 >= a ? 196 - .13 * (a - 250) : 164 + .2 * (a - 500) }, "image-side": function(a) { return 500 >= a ? 205 - .28 * (a - 250) : 134 + .21 * (a - 500) }, "text-only": function(a) { return 500 >= a ? 187 - .228 * (a - 250) : 130 }, "in-article": function(a) { return 420 >= a ? a / 1.2 : 460 >= a ? a / 1.91 + 130 : 800 >= a ? a / 4 : 200 } };

	function dq(a, b) { tj.call(this, a, b) } x(dq, tj);
	dq.prototype.g = function() { return Math.min(1200, this.O) };

	function eq(a, b, c, d, e) {
		var f = e.google_ad_layout || "image-top";
		if ("in-article" == f) { var g = a; if ("false" == e.google_full_width_responsive) a = g;
			else if (a = nj(b, c, g, .2, e), !0 !== a) e.gfwrnwer = a, a = g;
			else if (a = gj(b))
				if (e.google_full_width_responsive_allowed = !0, c.parentElement) { b: { g = c; for (var h = 0; 100 > h && g.parentElement; ++h) { for (var k = g.parentElement.childNodes, l = 0; l < k.length; ++l) { var m = k[l]; if (m != g && qj(b, m)) break b } g = g.parentElement;
							g.style.width = "100%";
							g.style.height = "auto" } } sj(b, c) }
			else a = g;
			else a = g }
		if (250 > a) throw new X("Fluid responsive ads must be at least 250px wide: availableWidth=" +
			a);
		a = Math.min(1200, Math.floor(a));
		if (d && "in-article" != f) { f = Math.ceil(d); if (50 > f) throw new X("Fluid responsive ads must be at least 50px tall: height=" + f); return new Up(11, new tj(a, f)) }
		if ("in-article" != f && (d = e.google_ad_layout_key)) {
			f = "" + d;
			b = Math.pow(10, 3);
			if (d = (c = f.match(/([+-][0-9a-z]+)/g)) && c.length) { e = []; for (g = 0; g < d; g++) e.push(parseInt(c[g], 36) / b);
				b = e } else b = null;
			if (!b) throw new X("Invalid data-ad-layout-key value: " + f);
			f = (a + -725) / 1E3;
			c = 0;
			d = 1;
			e = b.length;
			for (g = 0; g < e; g++) c += b[g] * d, d *= f;
			f = Math.ceil(1E3 *
				c - -725 + 10);
			if (isNaN(f)) throw new X("Invalid height: height=" + f);
			if (50 > f) throw new X("Fluid responsive ads must be at least 50px tall: height=" + f);
			if (1200 < f) throw new X("Fluid responsive ads must be at most 1200px tall: height=" + f);
			return new Up(11, new tj(a, f))
		}
		d = cq[f];
		if (!d) throw new X("Invalid data-ad-layout value: " + f);
		c = xj(c, b);
		b = gj(b);
		b = "in-article" !== f || c || a !== b ? Math.ceil(d(a)) : Math.ceil(1.25 * d(a));
		return new Up(11, "in-article" == f ? new dq(a, b) : new tj(a, b))
	};

	function fq(a) { return function(b) { for (var c = a.length - 1; 0 <= c; --c)
				if (!a[c](b)) return !1; return !0 } }

	function gq(a, b) { for (var c = hq.slice(0), d = c.length, e = null, f = 0; f < d; ++f) { var g = c[f]; if (a(g)) { if (!b || b(g)) return g;
				null === e && (e = g) } } return e };
	var iq = [new Z(970, 90, 2), new Z(728, 90, 2), new Z(468, 60, 2), new Z(336, 280, 1), new Z(320, 100, 2), new Z(320, 50, 2), new Z(300, 600, 4), new Z(300, 250, 1), new Z(250, 250, 1), new Z(234, 60, 2), new Z(200, 200, 1), new Z(180, 150, 1), new Z(160, 600, 4), new Z(125, 125, 1), new Z(120, 600, 4), new Z(120, 240, 4), new Z(120, 120, 1, !0)],
		hq = [iq[6], iq[12], iq[3], iq[0], iq[7], iq[14], iq[1], iq[8], iq[10], iq[4], iq[15], iq[2], iq[11], iq[5], iq[13], iq[9], iq[16]];

	function jq(a, b, c, d, e) { "false" == e.google_full_width_responsive ? c = { D: a, F: 1 } : "autorelaxed" == b && e.google_full_width_responsive || kq(b) || e.google_ad_resize ? (b = oj(a, c, d, e), c = !0 !== b ? { D: a, F: b } : { D: gj(c) || a, F: !0 }) : c = { D: a, F: 2 };
		b = c.F; return !0 !== b ? { D: a, F: b } : d.parentElement ? { D: c.D, F: b } : { D: a, F: b } }

	function lq(a, b, c, d, e) { var f = Bk(247, function() { return jq(a, b, c, d, e) }),
			g = f.D;
		f = f.F; var h = !0 === f,
			k = Be(d.style.width),
			l = Be(d.style.height),
			m = mq(g, b, c, d, e, h);
		g = m.ca;
		h = m.aa; var p = m.za;
		m = m.ob; var n = nq(b, p),
			r, A = (r = uj(d, c, "marginLeft", Be)) ? r + "px" : "",
			y = (r = uj(d, c, "marginRight", Be)) ? r + "px" : "";
		r = uj(d, c, "zIndex") || ""; return new Up(n, g, p, null, m, f, h, A, y, l, k, r) }

	function kq(a) { return "auto" == a || /^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(a) }

	function mq(a, b, c, d, e, f) {
		b = oq(c, a, b);
		var g = !1,
			h = !1,
			k = 488 > gj(c);
		if (k) { var l = ij(d, c); var m = xj(d, c);
			g = !m && l;
			h = m && l } m = [vj(a), dp(b)];
		m.push(wj(k, c, d, h));
		null != e.google_max_responsive_height && m.push(zj(e.google_max_responsive_height));
		k = [function(n) { return !n.Kb }];
		if (g || h) g = Aj(c, d), k.push(zj(g));
		var p = gq(fq(m), fq(k));
		if (!p) throw new X("No slot size for availableWidth=" + a);
		m = Bk(248, function() {
			var n;
			a: if (f) {
				if (e.gfwrnh && (n = Be(e.gfwrnh))) { n = { ca: new bq(a, n), aa: !0 }; break a } n = a / 1.2;
				var r = Math;
				var A = r.min;
				if (e.google_resizing_allowed ||
					"true" == e.google_full_width_responsive) var y = Infinity;
				else { y = d; var z = Infinity;
					do { var F = uj(y, c, "height", Be);
						F && (z = Math.min(z, F));
						(F = uj(y, c, "maxHeight", Be)) && (z = Math.min(z, F)) } while ((y = y.parentElement) && "HTML" != y.tagName);
					y = z } r = A.call(r, n, y);
				if (r < .5 * n || 100 > r) r = n;
				n = { ca: new bq(a, Math.floor(r)), aa: r < n ? 102 : !0 }
			} else n = { ca: p, aa: 100 };
			return n
		});
		g = m.ca;
		m = m.aa;
		return "in-article" === e.google_ad_layout && c.location && "#hffwroe2etoq" == c.location.hash ? { ca: pq(a, c, d, g, e), aa: !1, za: b, ob: l } : { ca: g, aa: m, za: b, ob: l }
	}

	function nq(a, b) { if ("auto" == a) return 1; switch (b) {
			case 2:
				return 2;
			case 1:
				return 3;
			case 4:
				return 4;
			case 3:
				return 5;
			case 6:
				return 6;
			case 5:
				return 7;
			case 7:
				return 8 } throw Error("bad mask"); }

	function oq(a, b, c) { if ("auto" == c) c = Math.min(1200, gj(a)), b = .25 >= b / c ? 4 : 3;
		else { b = 0; for (var d in dj) - 1 != c.indexOf(d) && (b |= dj[d]) } return b }

	function pq(a, b, c, d, e) { var f = e.google_ad_height || uj(c, b, "height", Be);
		b = eq(a, b, c, f, e).size(); return b.O * b.height() > a * d.height() ? new Z(b.O, b.height(), 1) : d };

	function qq(a, b, c, d, e) { var f;
		(f = gj(b)) ? 488 > gj(b) ? b.innerHeight >= b.innerWidth ? (e.google_full_width_responsive_allowed = !0, sj(b, c), f = { D: f, F: !0 }) : f = { D: a, F: 5 } : f = { D: a, F: 4 }: f = { D: a, F: 10 }; var g = f;
		f = g.D;
		g = g.F; if (!0 !== g || a == f) return new Up(12, new tj(a, d), null, null, !0, g, 100);
		a = mq(f, "auto", b, c, e, !0); return new Up(1, a.ca, a.za, 2, !0, g, a.aa) };

	function rq(a, b) { var c = b.google_ad_format; if ("autorelaxed" == c) { a: { if ("pedestal" != b.google_content_recommendation_ui_type)
					for (a = w(Wp), c = a.next(); !c.done; c = a.next())
						if (null != b[c.value]) { b = !0; break a } b = !1 } return b ? 9 : 5 } if (kq(c)) return 1; if ("link" === c) return 4; if ("fluid" == c) return "in-article" !== b.google_ad_layout || !a.location || "#hffwroe2etop" != a.location.hash && "#hffwroe2etoq" != a.location.hash ? 8 : (sq(b), 1); if (27 === b.google_reactive_ad_format) return sq(b), 1 }

	function tq(a, b, c, d, e) { e = b.offsetWidth || (c.google_ad_resize || (void 0 === e ? !1 : e)) && uj(b, d, "width", Be) || c.google_ad_width || 0;
		4 === a && (c.google_ad_format = "auto", a = 1); var f = (f = uq(a, e, b, c, d)) ? f : lq(e, c.google_ad_format, d, b, c);
		f.size().h(d, c, b);
		Vp(f, e, c);
		1 != a && (a = f.size().height(), b.style.height = a + "px") }

	function uq(a, b, c, d, e) { var f = d.google_ad_height || uj(c, e, "height", Be); switch (a) {
			case 5:
				return f = Bk(247, function() { return jq(b, d.google_ad_format, e, c, d) }), a = f.D, f = f.F, !0 === f && b != a && sj(e, c), !0 === f ? d.google_full_width_responsive_allowed = !0 : (d.google_full_width_responsive_allowed = !1, d.gfwrnwer = f), Yp(a, d);
			case 9:
				return aq(b, d);
			case 8:
				return eq(b, e, c, f, d);
			case 10:
				return qq(b, e, c, f, d) } }

	function sq(a) { a.google_ad_format = "auto";
		a.armr = 3 };

	function vq(a, b) { a.google_resizing_allowed = !0;
		a.ovlp = !0;
		a.google_ad_format = "auto";
		a.iaaso = !0;
		a.armr = b };

	function wq(a, b) { var c = re(b); if (c) { c = gj(c); var d = ue(a, b) || {},
				e = d.direction; if ("0px" === d.width && "none" !== d.cssFloat) return -1; if ("ltr" === e && c) return Math.floor(Math.min(1200, c - a.getBoundingClientRect().left)); if ("rtl" === e && c) return a = b.document.body.getBoundingClientRect().right - a.getBoundingClientRect().right, Math.floor(Math.min(1200, c - a - Math.floor((c - b.document.body.clientWidth) / 2))) } return -1 };

	function xq(a, b) { switch (a) {
			case "google_reactive_ad_format":
				return a = parseInt(b, 10), isNaN(a) ? 0 : a;
			case "google_allow_expandable_ads":
				return /^true$/.test(b);
			default:
				return b } }

	function yq(a, b) { if (a.getAttribute("src")) { var c = a.getAttribute("src") || "",
				d = ne(c, "client");
			d && (b.google_ad_client = xq("google_ad_client", d));
			(c = ne(c, "host")) && (b.google_ad_host = xq("google_ad_host", c)) } a = a.attributes;
		c = a.length; for (d = 0; d < c; d++) { var e = a[d]; if (/data-/.test(e.name)) { var f = Za(e.name.replace("data-matched-content", "google_content_recommendation").replace("data", "google").replace(/-/g, "_"));
				b.hasOwnProperty(f) || (e = xq(f, e.value), null !== e && (b[f] = e)) } } }

	function zq(a) { if (a = Xe(a)) switch (a.data && a.data.autoFormat) {
			case "rspv":
				return 13;
			case "mcrspv":
				return 15;
			default:
				return 14 } else return 12 }

	function Aq(a, b, c, d) {
		yq(a, b);
		if (c.document && c.document.body && !rq(c, b) && !b.google_reactive_ad_format) {
			var e = parseInt(a.style.width, 10),
				f = wq(a, c);
			if (0 < f && e > f) {
				var g = parseInt(a.style.height, 10);
				e = !!zo[e + "x" + g];
				var h = f;
				if (e) { var k = Ao(f, g); if (k) h = k, b.google_ad_format = k + "x" + g + "_0ads_al";
					else throw new X("No slot size for availableWidth=" + f); } b.google_ad_resize = !0;
				b.google_ad_width = h;
				e || (b.google_ad_format = null, b.google_override_format = !0);
				f = h;
				a.style.width = f + "px";
				U(Bi) ? vq(b, 4) : (g = lq(f, "auto", c, a, b), h = f,
					g.size().h(c, b, a), Vp(g, h, b), g = g.size(), b.google_responsive_formats = null, b.ovlp = !0, g.O > f && !e && (b.google_ad_width = g.O, a.style.width = g.O + "px"))
			}
		}
		if (488 > gj(c)) {
			f = re(c) || c;
			e = a.offsetWidth || uj(a, c, "width", Be) || b.google_ad_width || 0;
			g = b.google_ad_client;
			if (d = ao(f.location, "google_responsive_slot_preview") || U(Gi) || zn(f, 1, g, d)) b: if (b.google_reactive_ad_format || b.google_ad_resize || rq(c, b) || kj(a, b)) d = !1;
				else {
					for (d = a; d; d = d.parentElement) {
						f = ue(d, c);
						if (!f) { b.gfwrnwer = 18;
							d = !1; break b }
						if (!vb(["static", "relative"],
								f.position)) { b.gfwrnwer = 17;
							d = !1; break b }
					}
					d = nj(c, a, e, .3, b);
					!0 !== d ? (b.gfwrnwer = d, d = !1) : d = c === c.top ? !0 : !1
				} d ? (vq(b, 1), d = !0) : d = !1
		} else d = !1;
		if (e = rq(c, b)) tq(e, a, b, c, d);
		else {
			if (kj(a, b)) { if (d = ue(a, c)) a.style.width = d.width, a.style.height = d.height, jj(d, b);
				b.google_ad_width || (b.google_ad_width = a.offsetWidth);
				b.google_ad_height || (b.google_ad_height = a.offsetHeight);
				b.google_loader_features_used = 256;
				b.google_responsive_auto_format = zq(c) } else jj(a.style, b);
			c.location && "#gfwmrp" == c.location.hash || 12 == b.google_responsive_auto_format &&
				"true" == b.google_full_width_responsive ? tq(10, a, b, c, !1) : .01 > Math.random() && 12 === b.google_responsive_auto_format && (a = oj(a.offsetWidth || parseInt(a.style.width, 10) || b.google_ad_width, c, a, b), !0 !== a ? (b.efwr = !1, b.gfwrnwer = a) : b.efwr = !0)
		}
	};

	function Bq(a) { nl.call(this);
		this.s = a;
		this.h = 0;
		this.g = new t.Map } x(Bq, nl);

	function Cq(a) { a.s.document.visibilityState ? Dq(a, a.s.document, "visibilitychange", function(b) { "hidden" === a.s.document.visibilityState && Eq(a, b); "visible" === a.s.document.visibilityState && (a.h = 0) }) : "onpagehide" in a.s ? (Dq(a, a.s, "pagehide", function(b) { Eq(a, b) }), Dq(a, a.s, "pageshow", function() { a.h = 0 })) : Dq(a, a.s, "beforeunload", function(b) { Eq(a, b) }) }

	function Pg(a, b, c) { c = void 0 === c ? 0 : c;
		0 < a.g.size || Cq(a);
		c = Math.min(Math.max(0, c), 9); var d = a.g.get(c);
		d ? d.push(b) : a.g.set(c, [b]) }

	function Fq(a, b) { for (var c = 9; 0 <= c; c--) { var d = void 0;
			null == (d = a.g.get(c)) || d.forEach(function(e) { e(b) }) } }

	function Eq(a, b) { 1 !== a.h && (a.h = 1, 0 < a.g.size && Fq(a, b)) }

	function Dq(a, b, c, d) { Rd(b, c, d);
		ol(a, function() { return Sd(b, c, d) }) };

	function Gq(a, b) { var c = 10; return Fa(function(d) { return 0 >= c ? d.return(t.Promise.reject()) : b() ? d.return(t.Promise.resolve()) : d.return(new t.Promise(function(e, f) { var g = a.setInterval(function() {--c ? b() && (a.clearInterval(g), e()) : (a.clearInterval(g), f()) }, 200) })) }) };

	function Hq(a, b) { this.s = Ye() || window;
		this.l = null != b ? b : new Bq(this.s);
		this.h = null != a ? a : new Qg(2, pm(), 100, 100, !0, this.l);
		this.g = fl(dl(), 33, function() { var c = Zi(si); return { sd: c, ssp: 0 < c && ve() < 1 / c, pc: null, wpc: null, cu: null, le: [], lgdp: [], psi: null } }) }

	function Iq(a, b) { var c = new kg; var d = Jq(a);
		c = Dd(c, 1, d);
		d = Kq(a);
		c = Fd(c, 2, d);
		c = Dd(c, 3, a.g.sd); return Dd(c, 7, Math.round(b || a.s.performance.now())) }

	function Jq(a) { var b = a.g.pc; return null !== b && 0 !== b ? b : a.g.pc = Le(a.s) }

	function Kq(a) { var b = a.g.wpc; return null !== b && "" !== b ? b : a.g.wpc = yo(a.s) }

	function Lq(a) { return Fa(function(b) { return ya(b, Gq(a.s, function() { return !(!Jq(a) || !Kq(a)) }), 0) }) }

	function Mq(a) { var b = R(Hq);
		b.j && Bk(1178, function() { var c = b.u;
			a(c);
			b.g.psi = c.toJSON() }) }

	function Nq(a) {
		var b = R(Hq),
			c, d, e, f, g, h, k, l;
		return Fa(function(m) {
			if (1 == m.g) { if (!b.j || u(b.g.le, "includes").call(b.g.le, 1)) return m.return();
				b.g.le.push(1);
				c = b.s.performance.now(); return ya(m, Lq(b), 2) } d = ag(bg(eg(new $f, a), Zf(Yf(new Xf, fj(b.s).scrollWidth), fj(b.s).scrollHeight)), Zf(Yf(new Xf, gj(b.s)), fj(b.s).clientHeight));
			e = new gg;
			U(ui) ? (dg(d, b.m), hg(e, b.m)) : (dg(d, null == (f = b.s) ? void 0 : null == (g = f.document) ? void 0 : g.URL), hg(e, null == (h = b.s) ? void 0 : null == (k = h.document) ? void 0 : k.URL));
			l = hj(b.s);
			0 !== l && cg(d,
				Wf(l));
			b.h.Aa(lg(Iq(b, c), d));
			Pg(b.l, function() { try { var p; if (null != (null == (p = b.g) ? void 0 : p.psi)) { var n = Hd(fg, Uc(b.g.psi));
						qd(e, 2, n) } } catch (A) {} p = b.h;
				n = p.Aa; var r = Iq(b);
				r = rd(r, 8, mg, e);
				n.call(p, r) }, 9);
			m.g = 0
		})
	}

	function Oq(a, b, c) { var d; return Fa(function(e) { if (1 == e.g) { if (!a.j || !c.length || u(a.g.lgdp, "includes").call(a.g.lgdp, Number(b))) return e.return();
				a.g.lgdp.push(Number(b));
				d = a.s.performance.now(); return ya(e, Lq(a), 2) } var f = a.h,
				g = f.Aa,
				h = Iq(a, d); var k = new Uf;
			k = P(k, 1, b);
			k = jd(k, 2, c, yc);
			h = rd(h, 9, mg, k);
			g.call(f, h);
			e.g = 0 }) }

	function Pq(a, b) { Fa(function(c) { if (1 == c.g) return ya(c, Lq(a), 2); var d = a.h,
				e = d.Aa; var f = Iq(a);
			f = Dd(f, 3, 1);
			f = rd(f, 10, mg, b);
			e.call(d, f);
			c.g = 0 }) }
	fa.Object.defineProperties(Hq.prototype, { j: { configurable: !0, enumerable: !0, get: function() { return this.g.ssp } }, m: { configurable: !0, enumerable: !0, get: function() { return this.g.cu }, set: function(a) { this.g.cu = a } }, u: { configurable: !0, enumerable: !0, get: function() { return null === this.g.psi ? new fg : Hd(fg, Uc(this.g.psi)) } } });

	function Qq() { var a = window; if ("on" !== B.google_adtest && "on" !== B.google_adbreak_test && !u(a.location.host, "endsWith").call(a.location.host, "h5games.usercontent.goog")) return []; var b, c; return (null == (b = a.document.querySelector('meta[name="h5-games-eids"]')) ? void 0 : null == (c = b.getAttribute("content")) ? void 0 : c.split(",").map(function(d) { return Math.floor(Number(d)) }).filter(function(d) { return !isNaN(d) && 0 < d })) || [] };

	function Rq(a, b) { return a instanceof HTMLScriptElement && b.test(a.src) ? 0 : 1 }

	function Sq(a) { var b = S.document; if (b.currentScript) return Rq(b.currentScript, a);
		b = w(b.scripts); for (var c = b.next(); !c.done; c = b.next())
			if (0 === Rq(c.value, a)) return 0; return 1 };

	function Tq(a, b) { var c = {},
			d = {},
			e = {}; return e[3] = (c[55] = function() { return 0 === a }, c[23] = function(f) { return zn(S, Number(f)) }, c[24] = function(f) { return Dn(Number(f)) }, c[61] = function() { return xd(b, 6) }, c[63] = function() { return xd(b, 6) || ".google.ch" === N(b, 8) }, c), e[4] = {}, e[5] = (d[6] = function() { return N(b, 15) }, d), e };

	function Uq(a) { a = void 0 === a ? B : a; return a.ggeac || (a.ggeac = {}) };

	function Vq(a, b) { try { var c = a.split(".");
			a = B; for (var d = 0, e; null != a && d < c.length; d++) e = a, a = a[c[d]], "function" === typeof a && (a = e[c[d]]()); var f = a; if (typeof f === b) return f } catch (g) {} }
	var Wq = {},
		Xq = {},
		Yq = {},
		Zq = {},
		$q = (Zq[3] = (Wq[8] = function(a) { try { return null != Ka(a) } catch (b) {} }, Wq[9] = function(a) { try { var b = Ka(a) } catch (c) { return } if (a = "function" === typeof b) b = b && b.toString && b.toString(), a = "string" === typeof b && -1 != b.indexOf("[native code]"); return a }, Wq[10] = function() { return window === window.top }, Wq[6] = function(a) { return vb(R(sh).g(), Number(a)) }, Wq[27] = function(a) { a = Vq(a, "boolean"); return void 0 !== a ? a : void 0 }, Wq[60] = function(a) { try { return !!B.document.querySelector(a) } catch (b) {} }, Wq[69] =
			function(a) { var b = B.document;
				b = void 0 === b ? document : b; var c; return !(null == (c = b.featurePolicy) || !(aa = c.features(), u(aa, "includes")).call(aa, a)) }, Wq[70] = function(a) { var b = B.document;
				b = void 0 === b ? document : b; var c; return !(null == (c = b.featurePolicy) || !(aa = c.allowedFeatures(), u(aa, "includes")).call(aa, a)) }, Wq), Zq[4] = (Xq[3] = function() { return De() }, Xq[6] = function(a) { a = Vq(a, "number"); return void 0 !== a ? a : void 0 }, Xq), Zq[5] = (Yq[2] = function() { return window.location.href }, Yq[3] = function() { try { return window.top.location.hash } catch (a) { return "" } },
			Yq[4] = function(a) { a = Vq(a, "string"); return void 0 !== a ? a : void 0 }, Yq), Zq);

	function ar(a) { var b = {}; return br((b[0] = new t.Map, b[1] = new t.Map, b[2] = new t.Map, b), a) }

	function br(a, b) {
		for (var c = new t.Map, d = w(u(a[1], "entries").call(a[1])), e = d.next(); !e.done; e = d.next()) { var f = w(e.value);
			e = f.next().value;
			f = f.next().value;
			f = f[f.length - 1];
			c.set(e, f.wb + f.qb * f.rb) } b = w(b);
		for (d = b.next(); !d.done; d = b.next())
			for (d = d.value, e = w(L(d, jn, 2)), f = e.next(); !f.done; f = e.next())
				if (f = f.value, 0 !== L(f, hn, 2).length) {
					var g = zd(f, 8);
					if (O(f, 4) && !O(f, 13)) { var h = void 0;
						g = null != (h = c.get(O(f, 4))) ? h : 0;
						h = zd(f, 1) * L(f, hn, 2).length;
						c.set(O(f, 4), g + h) } h = [];
					for (var k = 0; k < L(f, hn, 2).length; k++) {
						var l = {
							wb: g,
							qb: zd(f, 1),
							rb: L(f, hn, 2).length,
							Ob: k,
							lb: O(d, 1),
							Ca: f,
							W: L(f, hn, 2)[k]
						};
						h.push(l)
					}
					cr(a[2], O(f, 10), h) || cr(a[1], O(f, 4), h) || cr(a[0], L(f, hn, 2)[0].getId(), h)
				} return a
	}

	function cr(a, b, c) { if (!b) return !1;
		a.has(b) || a.set(b, []); var d;
		(d = a.get(b)).push.apply(d, ma(c)); return !0 };

	function dr(a) { a = void 0 === a ? ve() : a; return function(b) { return xe(b + " + " + a) % 1E3 } };
	var er = [12, 13, 20];

	function fr(a, b, c, d) { d = void 0 === d ? {} : d; var e = void 0 === d.ra ? !1 : d.ra;
		d = void 0 === d.Sb ? [] : d.Sb;
		this.da = a;
		this.K = c;
		this.l = {};
		this.ra = e;
		a = {};
		this.g = (a[b] = [], a[4] = [], a);
		this.h = {};
		this.j = {}; if (b = jf())
			for (b = w(b.split(",") || []), a = b.next(); !a.done; a = b.next())(a = Number(a.value)) && (this.h[a] = !0);
		d = w(d); for (b = d.next(); !b.done; b = d.next()) this.h[b.value] = !0 }

	function gr(a, b, c, d) {
		var e = [],
			f;
		if (f = 9 !== b) a.l[b] ? f = !0 : (a.l[b] = !0, f = !1);
		if (f) return Sg(a.K, b, c, e, [], 4), e;
		f = u(er, "includes").call(er, b);
		for (var g = [], h = R(Wg).H, k = [], l = w([0, 1, 2]), m = l.next(); !m.done; m = l.next()) {
			m = m.value;
			for (var p = w(u(a.da[m], "entries").call(a.da[m])), n = p.next(); !n.done; n = p.next()) {
				var r = w(n.value);
				n = r.next().value;
				r = r.next().value;
				var A = n,
					y = r;
				n = new rg;
				r = y.filter(function(W) { return W.lb === b && !!a.h[W.W.getId()] && Lf(K(W.Ca, Ef, 3), h) && Lf(K(W.W, Ef, 3), h) });
				if (r.length)
					for (n = w(r), y = n.next(); !y.done; y =
						n.next()) k.push(y.value.W);
				else if (!a.ra) {
					r = void 0;
					2 === m ? (r = d[1], ld(n, 2, sg, wc(A))) : r = d[0];
					var z = void 0,
						F = void 0;
					r = null != (F = null == (z = r) ? void 0 : z(String(A))) ? F : 2 === m && 1 === O(y[0].Ca, 11) ? void 0 : d[0](String(A));
					if (void 0 !== r) {
						A = w(y);
						for (y = A.next(); !y.done; y = A.next())
							if (y = y.value, y.lb === b) {
								z = r - y.wb;
								var da = y;
								F = da.qb;
								var ha = da.rb;
								da = da.Ob;
								0 <= z && z < F * ha && z % ha === da && Lf(K(y.Ca, Ef, 3), h) && Lf(K(y.W, Ef, 3), h) && (z = O(y.Ca, 13), 0 !== z && void 0 !== z && (F = a.j[String(z)], void 0 !== F && F !== y.W.getId() ? Vg(a.K, a.j[String(z)], y.W.getId(),
									z) : a.j[String(z)] = y.W.getId()), k.push(y.W))
							} 0 !== nd(n, sg) && (kd(n, 3, zc(r), 0), g.push(n))
					}
				}
			}
		}
		d = w(k);
		for (k = d.next(); !k.done; k = d.next()) k = k.value, l = k.getId(), e.push(l), hr(a, l, f ? 4 : c), jh(L(k, Of, 2), f ? lh() : [c], a.K, l);
		Sg(a.K, b, c, e, g, 1);
		return e
	}

	function hr(a, b, c) { a.g[c] || (a.g[c] = []);
		a = a.g[c];
		u(a, "includes").call(a, b) || a.push(b) }

	function ir(a, b) { b = b.map(function(c) { return new kn(c) }).filter(function(c) { return !u(er, "includes").call(er, O(c, 1)) });
		a.da = br(a.da, b) }

	function jr(a, b) { nh(1, function(c) { a.h[c] = !0 }, b);
		nh(2, function(c, d, e) { return gr(a, c, d, e) }, b);
		nh(3, function(c) { return (a.g[c] || []).concat(a.g[4]) }, b);
		nh(12, function(c) { return void ir(a, c) }, b);
		nh(16, function(c, d) { return void hr(a, c, d) }, b) };

	function kr() { this.g = function() {} }

	function lr(a, b) { a.g = oh(14, b, function() {}) }

	function mr(a) { R(kr).g(a) };
	var nr, or, pr, qr, rr, sr;

	function tr(a) {
		var b = a.Db,
			c = a.H,
			d = a.config,
			e = void 0 === a.fb ? Uq() : a.fb,
			f = void 0 === a.gb ? 0 : a.gb,
			g = void 0 === a.K ? new Rg(null != (qr = null == (nr = K(b, ln, 5)) ? void 0 : Ad(nr, 2)) ? qr : 0, null != (rr = null == (or = K(b, ln, 5)) ? void 0 : Ad(or, 4)) ? rr : 0, null != (sr = null == (pr = K(b, ln, 5)) ? void 0 : xd(pr, 3)) ? sr : !1) : a.K;
		a = void 0 === a.da ? ar(L(b, kn, 2)) : a.da;
		e.hasOwnProperty("init-done") ? (oh(12, e, function() {})(L(b, kn, 2).map(function(h) { return h.toJSON() })), oh(13, e, function() {})(L(b, Of, 1).map(function(h) { return h.toJSON() }), f), c && oh(14, e, function() {})(c),
			ur(f, e)) : (jr(new fr(a, f, g, d), e), ph(e), qh(e), rh(e), ur(f, e), jh(L(b, Of, 1), [f], g, void 0, !0), Xg = Xg || !(!d || !d.Ib), mr($q), c && mr(c))
	}

	function ur(a, b) { var c = b = void 0 === b ? Uq() : b;
		th(R(sh), c, a);
		vr(b, a);
		a = b;
		lr(R(kr), a);
		R(Ie).m() }

	function vr(a, b) { var c = R(Ie);
		c.j = function(d, e) { return oh(5, a, function() { return !1 })(d, e, b) };
		c.l = function(d, e) { return oh(6, a, function() { return 0 })(d, e, b) };
		c.g = function(d, e) { return oh(7, a, function() { return "" })(d, e, b) };
		c.h = function(d, e) { return oh(8, a, function() { return [] })(d, e, b) };
		c.m = function() { oh(15, a, function() {})(b) } };

	function wr(a, b) { var c = {};
		b = (c[0] = dr(Le(b).toString()), c);
		b = R(sh).l(a, b);
		xh.Ja(1085, Oq(R(Hq), a, b)) }

	function xr(a, b, c) { var d = Y(a); if (d.plle) ur(1, Uq(a));
		else { d.plle = !0;
			d = K(b, mn, 12); var e = xd(b, 9);
			tr({ Db: d, H: Tq(c, b), config: { ra: e && !!a.google_disable_experiments, Ib: e }, fb: Uq(a), gb: 1 }); if (c = N(b, 15)) c = Number(c), R(sh).j(c);
			b = w(hd(b, 19, Ac)); for (c = b.next(); !c.done; c = b.next()) c = c.value, R(sh).h(c);
			wr(12, a);
			wr(10, a);
			a = re(a) || a;
			ao(a.location, "google_mc_lab") && R(sh).h(44738307);
			ao(a.location, "google_auto_storify_swipeable") && R(sh).h(44773747);
			ao(a.location, "google_auto_storify_scrollable") && R(sh).h(44773746) } };

	function yr(a) { yk.Ma(function(b) { b.shv = String(a);
			b.mjsv = so({ Ea: pm(), La: a }); var c = R(sh).g(),
				d = Qq();
			b.eid = c.concat(d).join(",") }) };
	var zr = "undefined" === typeof sttc ? void 0 : sttc;

	function Ar(a) { var b = yk; try { return Id(a, Cf), new nn(JSON.parse(a)) } catch (c) { b.M(838, c instanceof Error ? c : Error(String(c)), void 0, function(d) { d.jspb = String(a) }) } return new nn };

	function Br(a, b, c) { nl.call(this);
		this.B = b;
		this.u = c;
		this.A = new t.Map;
		this.l = new t.Map;
		this.h = a } x(Br, nl);

	function Cr(a) { if (a.g) return a.g;
		a.u && a.u(a.h) ? a.g = a.h : a.g = Ce(a.h, a.B); var b; return null != (b = a.g) ? b : null };

	function Dr(a, b) {
		(0, a.__uspapi)("getUSPData", 1, function(c, d) { b.ia({ Fa: null != c ? c : void 0, Cb: d ? void 0 : 2 }) }) }
	var Er = { Lb: function(a) { return a.ia }, Mb: function(a, b) { a = {}; return a.__uspapiCall = { callId: b, command: "getUSPData", version: 1 }, a }, Pb: function(a, b) { b = b.__uspapiReturn; var c;
			a({ Fa: null != (c = b.returnValue) ? c : void 0, Cb: b.success ? void 0 : 2 }) } };

	function Fr(a) { var b = {}; "string" === typeof a.data ? b = JSON.parse(a.data) : b = a.data; return { payload: b, Rb: b.__uspapiReturn.callId } }

	function Gr(a, b) { b = void 0 === b ? {} : b;
		nl.call(this); var c;
		this.timeoutMs = null != (c = b.timeoutMs) ? c : 500;
		this.caller = new Br(a, "__uspapiLocator", function(d) { return "function" === typeof d.__uspapi }, Fr);
		this.caller.A.set("getDataWithCallback", Dr);
		this.caller.l.set("getDataWithCallback", Er) } x(Gr, nl);

	function Hr(a) { this.i = H(a) } x(Hr, Q);
	var Ir = Ld(Hr);

	function Jr(a, b) { var c = { cb: function(d) { d = Ir(d);
				b.ia({ Fa: d }) } };
		b.spsp && (c.spsp = b.spsp);
		a = a.googlefc || (a.googlefc = {});
		a.__fci = a.__fci || [];
		a.__fci.push(b.command, c) }
	var Kr = { Lb: function(a) { return a.ia }, Mb: function(a, b) { return { __fciCall: { callId: b, command: a.command, spsp: a.spsp || void 0 } } }, Pb: function(a, b) { a({ Fa: b }) } };

	function Lr(a) { a = Ir(a.data.__fciReturn); return { payload: a, Rb: Ad(a, 1) } }

	function Mr(a) { nl.call(this);
		this.g = this.h = !1;
		this.caller = new Br(a, "googlefcPresent", void 0, Lr);
		this.caller.A.set("getDataWithCallback", Jr);
		this.caller.l.set("getDataWithCallback", Kr) } x(Mr, nl);

	function Nr(a) { var b = window; var c = void 0 === c ? null : c;
		Rd(b, "message", function(d) { try { var e = JSON.parse(d.data) } catch (f) { return }!e || "sc-cnf" !== e.googMsgType || c && /[:|%3A]javascript\(/i.test(d.data) && !c(e, d) || a(e, d) }) };

	function Or(a, b) { return null == b ? "&" + a + "=null" : "&" + a + "=" + Math.floor(b) }

	function Pr(a, b) { return "&" + a + "=" + b.toFixed(3) }

	function Qr() { var a = new t.Set,
			b = Qk(); try { if (!b) return a; for (var c = b.pubads(), d = w(c.getSlots()), e = d.next(); !e.done; e = d.next()) a.add(e.value.getSlotId().getDomId()) } catch (f) {} return a }

	function Rr(a) { a = a.id; return null != a && (Qr().has(a) || u(a, "startsWith").call(a, "google_ads_iframe_") || u(a, "startsWith").call(a, "aswift")) }

	function Sr(a, b, c) { if (!a.sources) return !1; switch (Tr(a)) {
			case 2:
				var d = Ur(a); if (d) return c.some(function(f) { return Vr(d, f) }); break;
			case 1:
				var e = Wr(a); if (e) return b.some(function(f) { return Vr(e, f) }) } return !1 }

	function Tr(a) { if (!a.sources) return 0;
		a = a.sources.filter(function(b) { return b.previousRect && b.currentRect }); if (1 <= a.length) { a = a[0]; if (a.previousRect.top < a.currentRect.top) return 2; if (a.previousRect.top > a.currentRect.top) return 1 } return 0 }

	function Wr(a) { return Xr(a, function(b) { return b.currentRect }) }

	function Ur(a) { return Xr(a, function(b) { return b.previousRect }) }

	function Xr(a, b) { return a.sources.reduce(function(c, d) { d = b(d); return c ? d && 0 !== d.width * d.height ? d.top < c.top ? d : c : c : d }, null) }

	function Vr(a, b) { var c = Math.min(a.right, b.right) - Math.max(a.left, b.left);
		a = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top); return 0 >= c || 0 >= a ? !1 : 50 <= 100 * c * a / ((b.right - b.left) * (b.bottom - b.top)) }

	function Yr() { var a = { kb: U(Vi) };
		a = void 0 === a ? { kb: !1 } : a;
		this.j = this.h = this.Z = this.L = this.A = 0;
		this.Xa = this.Ua = Number.NEGATIVE_INFINITY;
		this.g = [];
		this.B = {};
		this.Ra = 0;
		this.T = Infinity;
		this.Pa = this.Sa = this.Ta = this.Va = this.ab = this.m = this.Za = this.ha = this.l = 0;
		this.Qa = !1;
		this.ga = this.G = this.u = 0;
		this.K = null;
		this.Wa = !1;
		this.na = function() {}; var b = document.querySelector("[data-google-query-id]");
		this.Ya = b ? b.getAttribute("data-google-query-id") : null;
		this.yb = a }
	var Zr, $r;

	function as() { var a = new Yr; if (U(qm)) { var b = window; if (!b.google_plmetrics && window.PerformanceObserver) { b.google_plmetrics = !0;
				b = ["layout-shift", "largest-contentful-paint", "first-input", "longtask"];
				a.yb.kb && b.push("event");
				b = w(b); for (var c = b.next(); !c.done; c = b.next()) { c = c.value; var d = { type: c, buffered: !0 }; "event" === c && (d.durationThreshold = 40);
					bs(a).observe(d) } cs(a) } } }

	function bs(a) { a.K || (a.K = new PerformanceObserver(ek(640, function(b) { ds(a, b) }))); return a.K }

	function cs(a) { var b = ek(641, function() { var d = document;
				2 === (d.prerendering ? 3 : { visible: 1, hidden: 2, prerender: 3, preview: 4, unloaded: 5 } [d.visibilityState || d.webkitVisibilityState || d.mozVisibilityState || ""] || 0) && es(a) }),
			c = ek(641, function() { return void es(a) });
		document.addEventListener("visibilitychange", b);
		document.addEventListener("pagehide", c);
		a.na = function() { document.removeEventListener("visibilitychange", b);
			document.removeEventListener("pagehide", c);
			bs(a).disconnect() } }

	function es(a) {
		if (!a.Wa) {
			a.Wa = !0;
			bs(a).takeRecords();
			var b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics";
			window.LayoutShift && (b += Pr("cls", a.A), b += Pr("mls", a.L), b += Or("nls", a.Z), window.LayoutShiftAttribution && (b += Pr("cas", a.m), b += Or("nas", a.Va), b += Pr("was", a.ab)), b += Pr("wls", a.ha), b += Pr("tls", a.Za));
			window.LargestContentfulPaint && (b += Or("lcp", a.Ta), b += Or("lcps", a.Sa));
			window.PerformanceEventTiming && a.Qa && (b += Or("fid", a.Pa));
			window.PerformanceLongTaskTiming && (b += Or("cbt", a.u),
				b += Or("mbt", a.G), b += Or("nlt", a.ga));
			for (var c = 0, d = w(document.getElementsByTagName("iframe")), e = d.next(); !e.done; e = d.next()) Rr(e.value) && c++;
			b += Or("nif", c);
			b += Or("ifi", $e(window));
			c = R(sh).g();
			b += "&eid=" + encodeURIComponent(c.join());
			b += "&top=" + (B === B.top ? 1 : 0);
			b += a.Ya ? "&qqid=" + encodeURIComponent(a.Ya) : Or("pvsid", Le(B));
			window.googletag && (b += "&gpt=1");
			c = Math.min(a.g.length - 1, Math.floor((a.K ? a.Ra : performance.interactionCount || 0) / 50));
			0 <= c && (c = a.g[c].latency, 0 <= c && (b += Or("inp", c)));
			window.fetch(b, {
				keepalive: !0,
				credentials: "include",
				redirect: "follow",
				method: "get",
				mode: "no-cors"
			});
			a.na()
		}
	}

	function fs(a, b, c, d) { if (!b.hadRecentInput) { a.A += Number(b.value);
			Number(b.value) > a.L && (a.L = Number(b.value));
			a.Z += 1; if (c = Sr(b, c, d)) a.m += b.value, a.Va++; if (5E3 < b.startTime - a.Ua || 1E3 < b.startTime - a.Xa) a.Ua = b.startTime, a.h = 0, a.j = 0;
			a.Xa = b.startTime;
			a.h += b.value;
			c && (a.j += b.value);
			a.h > a.ha && (a.ha = a.h, a.ab = a.j, a.Za = b.startTime + b.duration) } }

	function ds(a, b) {
		var c = Zr !== window.scrollX || $r !== window.scrollY ? [] : gs,
			d = hs();
		b = w(b.getEntries());
		for (var e = b.next(), f = {}; !e.done; f = { I: f.I }, e = b.next()) switch (f.I = e.value, e = f.I.entryType, e) {
			case "layout-shift":
				fs(a, f.I, c, d);
				break;
			case "largest-contentful-paint":
				e = f.I;
				a.Ta = Math.floor(e.renderTime || e.loadTime);
				a.Sa = e.size;
				break;
			case "first-input":
				e = f.I;
				a.Pa = Number((e.processingStart - e.startTime).toFixed(3));
				a.Qa = !0;
				a.g.some(function(g) {
					return function(h) {
						return u(h, "entries").some(function(k) {
							return g.I.duration ===
								k.duration && g.I.startTime === k.startTime
						})
					}
				}(f)) || is(a, f.I);
				break;
			case "longtask":
				e = Math.max(0, f.I.duration - 50);
				a.u += e;
				a.G = Math.max(a.G, e);
				a.ga += 1;
				break;
			case "event":
				is(a, f.I);
				break;
			default:
				throw Error("unexpected value " + e + "!");
		}
	}

	function is(a, b) { js(a, b); var c = a.g[a.g.length - 1],
			d = a.B[b.interactionId]; if (d || 10 > a.g.length || b.duration > c.latency) d ? (u(d, "entries").push(b), d.latency = Math.max(d.latency, b.duration)) : (b = { id: b.interactionId, latency: b.duration, entries: [b] }, a.B[b.id] = b, a.g.push(b)), a.g.sort(function(e, f) { return f.latency - e.latency }), a.g.splice(10).forEach(function(e) { delete a.B[e.id] }) }

	function js(a, b) { b.interactionId && (a.T = Math.min(a.T, b.interactionId), a.l = Math.max(a.l, b.interactionId), a.Ra = a.l ? (a.l - a.T) / 7 + 1 : 0) }

	function hs() { var a = u(Array, "from").call(Array, document.getElementsByTagName("iframe")).filter(Rr),
			b = [].concat(ma(Qr())).map(function(c) { return document.getElementById(c) }).filter(function(c) { return null !== c });
		Zr = window.scrollX;
		$r = window.scrollY; return gs = [].concat(ma(a), ma(b)).map(function(c) { return c.getBoundingClientRect() }) }
	var gs = [];
	var ks = la(["https://googleads.g.doubleclick.net"]),
		ls = null,
		ms = [],
		ns = new t.Map,
		os = -1;

	function ps(a) { return Cj.test(a.className) && "done" !== a.dataset.adsbygoogleStatus }

	function qs(a, b, c) { a.dataset.adsbygoogleStatus = "done";
		rs(a, b, c) }

	function rs(a, b, c) {
		var d = window;
		d.google_spfd || (d.google_spfd = Aq);
		var e = b.google_reactive_ads_config;
		e || Aq(a, b, d, c);
		To(d, b);
		if (!ss(a, b, d)) {
			if (e) { e = e.page_level_pubvars || {}; if (Y(S).page_contains_reactive_tag && !Y(S).allow_second_reactive_tag) { if (e.pltais) { un(!1); return } throw new X("Only one 'enable_page_level_ads' allowed per page."); } Y(S).page_contains_reactive_tag = !0;
				un(7 === e.google_pgb_reactive) } b.google_unique_id = Ze(d);
			we(uo, function(f, g) { b[g] = b[g] || d[g] });
			"sd" !== b.google_loader_used && (b.google_loader_used =
				"aa");
			b.google_reactive_tag_first = 1 === (Y(S).first_tag_on_page || 0);
			Bk(164, function() { $o(d, b, a, c) })
		}
	}

	function ss(a, b, c) {
		var d = b.google_reactive_ads_config,
			e = "string" === typeof a.className && RegExp("(\\W|^)adsbygoogle-noablate(\\W|$)").test(a.className),
			f = sn(c);
		if (f && f.bb && "on" !== b.google_adtest && !e) {
			e = lj(a, c);
			var g = fj(c).clientHeight;
			if (!f.Da || f.Da && ((0 == g ? null : e / g) || 0) >= f.Da) return a.className += " adsbygoogle-ablated-ad-slot", c = c.google_sv_map = c.google_sv_map || {}, d = Oa(a), b.google_element_uid = d, c[b.google_element_uid] = b, a.setAttribute("google_element_uid", String(d)), "slot" === f.Xb && (null !== Ae(a.getAttribute("width")) &&
				a.setAttribute("width", "0"), null !== Ae(a.getAttribute("height")) && a.setAttribute("height", "0"), a.style.width = "0px", a.style.height = "0px"), !0
		}
		if ((f = ue(a, c)) && "none" === f.display && !("on" === b.google_adtest || 0 < b.google_reactive_ad_format || d)) return c.document.createComment && a.appendChild(c.document.createComment("No ad requested because of display:none on the adsbygoogle tag")), !0;
		a = null == b.google_pgb_reactive || 3 === b.google_pgb_reactive;
		return 1 !== b.google_reactive_ad_format && 8 !== b.google_reactive_ad_format ||
			!a ? !1 : (B.console && B.console.warn("Adsbygoogle tag with data-reactive-ad-format=" + String(b.google_reactive_ad_format) + " is deprecated. Check out page-level ads at https://www.google.com/adsense"), !0)
	}

	function ts(a) { var b = document.getElementsByTagName("INS"); for (var c = 0, d = b[c]; c < b.length; d = b[++c]) { var e = d; if (ps(e) && "reserved" !== e.dataset.adsbygoogleStatus && (!a || d.id === a)) return d } return null }

	function us(a, b, c) { if (a && "shift" in a) { Mq(function(e) { Bd(od(e), 2) || (e = od(e), Ed(e, 2)) }); for (var d = 20; 0 < a.length && 0 < d;) { try { vs(a.shift(), b, c) } catch (e) { setTimeout(function() { throw e; }) }--d } } }

	function ws() { var a = te("INS");
		a.className = "adsbygoogle";
		a.className += " adsbygoogle-noablate";
		Ee(a); return a }

	function xs(a, b) { var c = {},
			d = Mn(a.google_ad_client, b);
		we(ej, function(g, h) {!1 === a.enable_page_level_ads ? c[h] = !1 : a.hasOwnProperty(h) ? c[h] = a[h] : u(d, "includes").call(d, g) && (c[h] = !1) });
		Na(a.enable_page_level_ads) && (c.page_level_pubvars = a.enable_page_level_ads); var e = ws();
		Ne.body.appendChild(e); var f = {};
		f = (f.google_reactive_ads_config = c, f.google_ad_client = a.google_ad_client, f);
		f.google_pause_ad_requests = !!Y(S).pause_ad_requests;
		qs(e, f, b);
		Mq(function(g) { Bd(od(g), 6) || (g = od(g), Ed(g, 6)) }) }

	function ys(a, b) {
		function c() { xs(a, b) } ko(B).wasPlaTagProcessed = !0; var d = B.document; if (d.body || "complete" === d.readyState || "interactive" === d.readyState) c();
		else { var e = Qd(Ck(191, c));
			Rd(d, "DOMContentLoaded", e);
			(new B.MutationObserver(function(f, g) { d.body && (e(), g.disconnect()) })).observe(d, { childList: !0, subtree: !0 }) } }

	function vs(a, b, c) { var d = {};
		Bk(165, function() { zs(a, d, b, c) }, function(e) { e.client = e.client || d.google_ad_client || a.google_ad_client;
			e.slotname = e.slotname || d.google_ad_slot;
			e.tag_origin = e.tag_origin || d.google_tag_origin }) }

	function As(a) { delete a.google_checked_head;
		we(a, function(b, c) { Bj[c] || (delete a[c], b = c.replace("google", "data").replace(/_/g, "-"), B.console.warn("AdSense head tag doesn't support " + b + " attribute.")) }) }

	function Bs(a, b) {
		var c = S.document.querySelector('script[src*="/pagead/js/adsbygoogle.js?client="]:not([data-checked-head])') || S.document.querySelector('script[src*="/pagead/js/adsbygoogle.js"][data-ad-client]:not([data-checked-head])');
		if (c) {
			c.setAttribute("data-checked-head", "true");
			var d = Y(window);
			if (d.head_tag_slot_vars) Cs(c);
			else {
				Mq(function(h) { h = od(h);
					kd(h, 7, tc(!0), !1) });
				var e = {};
				yq(c, e);
				As(e);
				var f = Wd(e);
				d.head_tag_slot_vars = f;
				c = { google_ad_client: e.google_ad_client, enable_page_level_ads: e };
				"bottom" === e.google_overlays && (d = {}, c.overlays = (d.bottom = !0, d));
				delete e.google_overlays;
				S.adsbygoogle || (S.adsbygoogle = []);
				d = S.adsbygoogle;
				d.loaded ? d.push(c) : d.splice && d.splice(0, 0, c);
				var g;
				e.google_adbreak_test || (null == (g = on(b)) ? 0 : xd(g, 3)) ? Ds(f, a) : Nr(function() { Ds(f, a) })
			}
		}
	}

	function Cs(a) { var b = Y(window).head_tag_slot_vars,
			c = a.getAttribute("src") || ""; if ((a = ne(c, "client") || a.getAttribute("data-ad-client") || "") && a !== b.google_ad_client) throw new X("Warning: Do not add multiple property codes with AdSense tag to avoid seeing unexpected behavior. These codes were found on the page " + a + ", " + b.google_ad_client); }

	function Es(a) { if ("object" === typeof a && null != a) { if ("string" === typeof a.type) return 2; if ("string" === typeof a.sound || "string" === typeof a.preloadAdBreaks) return 3 } return 0 }

	function zs(a, b, c, d) {
		if (null == a) throw new X("push() called with no parameters.");
		Mq(function(g) { Bd(od(g), 3) || (g = od(g), Ed(g, 3)) });
		cd(d, gn, 14) && Fs(a, ud(pn(d), 1), N(d, 2));
		var e = Es(a);
		if (0 !== e)
			if (d = vn(), d.first_slotcar_request_processing_time || (d.first_slotcar_request_processing_time = Date.now(), d.adsbygoogle_execution_start_time = Xa), null == ls) Gs(a), ms.push(a);
			else if (3 === e) { var f = ls;
			Bk(787, function() { f.handleAdConfig(a) }) } else Ek(730, ls.handleAdBreak(a));
		else {
			Xa = (new Date).getTime();
			Uo(c, d, Hs(a));
			Is();
			a: { if (void 0 != a.enable_page_level_ads) { if ("string" === typeof a.google_ad_client) { e = !0; break a } throw new X("'google_ad_client' is missing from the tag config."); } e = !1 }
			if (e) Mq(function(g) { Bd(od(g), 4) || (g = od(g), Ed(g, 4)) }), Js(a, d);
			else if ((e = a.params) && we(e, function(g, h) { b[h] = g }), "js" === b.google_ad_output) console.warn("Ads with google_ad_output='js' have been deprecated and no longer work. Contact your AdSense account manager or switch to standard AdSense ads.");
			else {
				e = Ks(a.element);
				yq(e, b);
				c = Y(B).head_tag_slot_vars || {};
				we(c, function(g, h) { b.hasOwnProperty(h) || (b[h] = g) });
				if (e.hasAttribute("data-require-head") && !Y(B).head_tag_slot_vars) throw new X("AdSense head tag is missing. AdSense body tags don't work without the head tag. You can copy the head tag from your account on https://adsense.com.");
				if (!b.google_ad_client) throw new X("Ad client is missing from the slot.");
				if (c = 0 === (Y(S).first_tag_on_page || 0) && mo(b)) Mq(function(g) { Bd(od(g), 5) || (g = od(g), Ed(g, 5)) }), Ls(c);
				0 === (Y(S).first_tag_on_page || 0) && (Y(S).first_tag_on_page =
					2);
				b.google_pause_ad_requests = !!Y(S).pause_ad_requests;
				qs(e, b, d)
			}
		}
	}
	var Ms = !1;

	function Fs(a, b, c) { Ms || (Ms = !0, a = Hs(a) || yo(S), Dk("predictive_abg", { a_c: a, p_c: b.join(), b_v: c }, .01)) }

	function Hs(a) { return a.google_ad_client ? a.google_ad_client : (a = a.params) && a.google_ad_client ? a.google_ad_client : "" }

	function Is() { if (U(zi)) { var a = sn(S); if (!(a = a && a.bb)) { a = S; try { var b = a.localStorage } catch (c) { b = null } b = b ? en(b) : null;
				a = !(b && dn(b) && b) } a || tn(S, 1) } }

	function Ls(a) { Me(function() { ko(B).wasPlaTagProcessed || B.adsbygoogle && B.adsbygoogle.push(a) }) }

	function Js(a, b) { 0 === (Y(S).first_tag_on_page || 0) && (Y(S).first_tag_on_page = 1); if (a.tag_partner) { var c = a.tag_partner,
				d = Y(B);
			d.tag_partners = d.tag_partners || [];
			d.tag_partners.push(c) } no(a, b);
		ys(a, b) }

	function Ks(a) { if (a) { if (!ps(a) && (a.id ? a = ts(a.id) : a = null, !a)) throw new X("'element' has already been filled."); if (!("innerHTML" in a)) throw new X("'element' is not a good DOM element."); } else if (a = ts(), !a) throw new X("All ins elements in the DOM with class=adsbygoogle already have ads in them."); return a }

	function Ns() { var a = new ql(S),
			b = new Gr(S),
			c = new Mr(S),
			d = S.__cmp ? 1 : 0;
		a = rl(a) ? 1 : 0;
		b = Cr(b.caller) ? 1 : 0;
		c.h || (c.g = !!Cr(c.caller), c.h = !0);
		c = c.g;
		Dk("cmpMet", { tcfv1: d, tcfv2: a, usp: b, fc: c ? 1 : 0, ptt: 9 }, .001) }

	function Os(a) { var b = dl();
		il(b, 26, !!Number(a)) }

	function Ps(a) { Number(a) ? Y(S).pause_ad_requests = !0 : (Y(S).pause_ad_requests = !1, a = function() { if (!Y(S).pause_ad_requests) { var b = void 0 === b ? {} : b; if ("function" === typeof window.CustomEvent) var c = new CustomEvent("adsbygoogle-pub-unpause-ad-requests-event", b);
				else c = document.createEvent("CustomEvent"), c.initCustomEvent("adsbygoogle-pub-unpause-ad-requests-event", !!b.bubbles, !!b.cancelable, b.detail);
				S.dispatchEvent(c) } }, B.setTimeout(a, 0), B.setTimeout(a, 1E3)) }

	function Qs(a) { a && a.call && "function" === typeof a && window.setTimeout(a, 0) }

	function Ds(a, b) { b = ho(Zd(b.Wb, co())).then(function(c) { null == ls && (c.init(a), ls = c, Rs(c)) });
		Ek(723, b);
		u(b, "finally").call(b, function() { ms.length = 0;
			Dk("slotcar", { event: "api_ld", time: Date.now() - Xa, time_pr: Date.now() - os });
			U(Xi) && Pq(R(Hq), jg(23)) }) }

	function Rs(a) { for (var b = w(ns), c = b.next(); !c.done; c = b.next()) { var d = w(c.value);
			c = d.next().value;
			d = d.next().value; - 1 !== d && (B.clearTimeout(d), ns.delete(c)) } b = {}; for (c = 0; c < ms.length; b = { Ba: b.Ba, ma: b.ma }, c++) ns.has(c) || (b.ma = ms[c], b.Ba = Es(b.ma), Bk(723, function(e) { return function() { 3 === e.Ba ? a.handleAdConfig(e.ma) : 2 === e.Ba && Ek(730, a.handleAdBreakBeforeReady(e.ma)) } }(b))) }

	function Gs(a) { var b = ms.length; if (2 === Es(a) && "preroll" === a.type && null != a.adBreakDone) { var c = a.adBreakDone; - 1 === os && (os = Date.now()); var d = B.setTimeout(function() { try { c({ breakType: "preroll", breakName: a.name, breakFormat: "preroll", breakStatus: "timeout" }), ns.set(b, -1), Dk("slotcar", { event: "pr_to", source: "adsbygoogle" }), U(Xi) && Pq(R(Hq), jg(22)) } catch (e) { console.error("[Ad Placement API] adBreakDone callback threw an error:", e instanceof Error ? e : Error(String(e))) } }, 1E3 * Zi(Wi));
			ns.set(b, d) } }

	function Ss() {
		var a = S.document,
			b = Te(ks),
			c = a.createElement("LINK");
		c.crossOrigin = "";
		a: {
			if (b instanceof Yd) c.href = ae(b).toString();
			else {
				if (-1 === pe.indexOf("preconnect")) throw Error('TrustedResourceUrl href attribute required with rel="preconnect"');
				if (b instanceof ee) b = b instanceof ee && b.constructor === ee ? b.g : "type_error:SafeUrl";
				else {
					c: if (oe) { try { var d = new URL(b) } catch (e) { d = "https:"; break c } d = d.protocol } else d: {
						d = document.createElement("a");
						try { d.href = b } catch (e) { d = void 0; break d } d = d.protocol;d = ":" ===
						d || "" === d ? "https:" : d
					}
					b = "javascript:" !== d ? b : void 0
				}
				if (void 0 === b) break a;
				c.href = b
			}
			c.rel = "preconnect"
		}
		a.head.appendChild(c)
	};
	var Ts = la(["data:text/javascript,//show_ads_impl_preview.js"]),
		Us = la(["https://pagead2.googlesyndication.com/pagead/managed/js/adsense/", "/", "slotcar_library", ".js"]),
		Vs = la(["https://pagead2.googlesyndication.com/pagead/managed/js/adsense/", "/", "show_ads_impl", ".js"]),
		Ws = la(["https://pagead2.googlesyndication.com/pagead/managed/js/adsense/", "/", "show_ads_impl_with_ama", ".js"]),
		Xs = la(["https://googleads.g.doubleclick.net/pagead/html/", "/", "/zrt_lookup.html"]),
		Ys = la(["https://googleads.g.doubleclick.net/pagead/html/",
"/", "/zrt_lookup", ".html"]),
		Zs = la(["https://googleads.g.doubleclick.net/pagead/html/", "/", "/zrt_lookup_inhead", ".html"]),
		$s = la(["https://googleads.g.doubleclick.net/pagead/html/", "/", "/zrt_lookup_nohtml", ".html"]);
	(function(a, b, c, d) {
		d = void 0 === d ? function() {} : d;
		yk.vb(Fk);
		Bk(166, function() {
			var e = new Qg(2, a);
			try {
				oc(function(n) {
					var r = new Ig;
					var A = new Hg;
					try { var y = Le(window);
						Dd(A, 1, y) } catch (W) {}
					try { var z = R(sh).g();
						jd(A, 2, z, yc) } catch (W) {}
					try { Fd(A, 3, window.document.URL) } catch (W) {} r = qd(r, 2, A);
					A = new Gg;
					A = P(A, 1, 1191);
					try { var F = Cf(null == n ? void 0 : n.name) ? n.name : "Unknown error";
						Fd(A, 2, F) } catch (W) {}
					try { var da = Cf(null == n ? void 0 : n.message) ? n.message : "Caught " + n;
						Fd(A, 3, da) } catch (W) {}
					try {
						var ha = Cf(null == n ? void 0 : n.stack) ? n.stack :
							Error().stack;
						ha && jd(A, 4, ha.split(/\n\s*/), Fc)
					} catch (W) {} n = qd(r, 1, A);
					F = new Fg;
					try { Fd(F, 1, pm()) } catch (W) {} rd(n, 6, Jg, F);
					Dd(n, 5, 1);
					e.Z(n)
				})
			} catch (n) {}
			var f = Ar(b);
			yr(N(f, 2));
			rn(xd(f, 6));
			jl(dl(), N(f, 24));
			d();
			We(16, [1, f.toJSON()]);
			var g = Ye(Xe(S)) || S,
				h = c(so({ Ea: a, La: N(f, 2) }), f),
				k = null === S.document.currentScript ? 1 : Sq(h.Yb);
			Cn(g, f);
			xr(g, f, k);
			U(qi) && Ss();
			Mq(function(n) { var r = yd(n, 1) + 1;
				kd(n, 1, zc(r), 0);
				S.top === S && (r = yd(n, 2) + 1, kd(n, 2, zc(r), 0));
				Bd(od(n), 1) || (n = od(n), Ed(n, 1)) });
			Ek(1086, Nq(0 === k));
			if (!ib() || 0 <= $a(nb(),
					11)) {
				Ak(U(Yi));
				cp();
				Qm();
				try { as() } catch (n) {} bp();
				Bs(h, f);
				g = window;
				k = g.adsbygoogle;
				if (!k || !k.loaded) {
					Dk("new_abg_tag", { value: "" + xd(f, 16), host_v: "" + xd(f, 22), frequency: .01 }, .01);
					Ns();
					var l = { push: function(n) { vs(n, h, f) }, loaded: !0 };
					try { Object.defineProperty(l, "requestNonPersonalizedAds", { set: Os }), Object.defineProperty(l, "pauseAdRequests", { set: Ps }), Object.defineProperty(l, "onload", { set: Qs }) } catch (n) {}
					if (k)
						for (var m = w(["requestNonPersonalizedAds", "pauseAdRequests"]), p = m.next(); !p.done; p = m.next()) p = p.value,
							void 0 !== k[p] && (l[p] = k[p]);
					us(k, h, f);
					g.adsbygoogle = l;
					k && (l.onload = k.onload);
					U(vi) || (g = Zo(h)) && document.documentElement.appendChild(g)
				}
			}
		})
	})(pm(), zr, function(a, b) { var c = 2012 < yd(b, 1) ? "_fy" + yd(b, 1) : "",
			d = N(b, 3);
		b = N(b, 2);
		Te(Ts); return { Wb: Te(Us, a, "", c), Ub: Te(Vs, a, "", c), Tb: Te(Ws, a, "", c), dc: Te(Xs, b, d), bc: Te(Ys, b, d, c), ac: Te(Zs, b, d, c), cc: Te($s, b, d, c), Yb: /^(?:https?:)?\/\/(?:pagead2\.googlesyndication\.com|securepubads\.g\.doubleclick\.net)\/pagead\/(?:js\/)?(?:show_ads|adsbygoogle)\.js(?:[?#].*)?$/ } });
}).call(this, "[2012,\"r20231109\",\"r20190131\",null,null,null,null,\".google.cn\",null,null,null,[[[1082,null,null,[1]],[1277,null,null,[1]],[1305,null,null,[1]],[null,1130,null,[null,100]],[1270,null,null,[1]],[null,1032,null,[null,200],[[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[null,500]]]],[1247,null,null,[1]],[null,1224,null,[null,0.01]],[null,1159,null,[null,500]],[576992373,null,null,[1]],[1207,null,null,[1]],[null,1263,null,[null,-1]],[null,1265,null,[null,-1]],[null,1264,null,[null,-1]],[1267,null,null,[1]],[1268,null,null,[1]],[null,66,null,[null,-1]],[null,65,null,[null,-1]],[1241,null,null,[1]],[1287,null,null,[1]],[1285,null,null,[1]],[1300,null,null,[1]],[null,null,null,[null,null,null,[\"en\",\"de\"]],null,1273],[1223,null,null,[1]],[null,null,null,[null,null,null,[\"44786015\",\"44786016\"]],null,1261],[1298,null,null,[1]],[1167,null,null,[1]],[1129,null,null,[1]],[1280,null,null,[1]],[45460962,null,null,[1]],[1230,null,null,[1]],[1229,null,null,[1]],[1231,null,null,[1]],[1292,null,null,[1]],[1199,null,null,[1]],[1161,null,null,[1]],[1288,null,null,[1]],[null,1072,null,[null,0.75]],[1101,null,null,[1]],[1198,null,null,[1]],[1206,null,null,[1]],[1190,null,null,[1]],[null,1245,null,[null,3600]],[1284,null,null,[1]],[null,566560958,null,[null,30000]],[null,506864295,null,[null,300]],[null,508040914,null,[null,100]],[null,547455356,null,[null,49]],[568515114,null,null,[1]],[576840663,null,null,[1]],[null,null,null,[null,null,null,[\"1\",\"2\"]],null,556791602],[529362570,null,null,[1]],[null,null,549581487,[null,null,\"#1A73E8\"]],[null,null,549581486,[null,null,\"#FFFFFF\"]],[575790354,null,null,[1]],[null,561668774,null,[null,0.1]],[576554717,null,null,[1]],[576780579,null,null,[1]],[577117848,null,null,[1]],[null,469675170,null,[null,30000]],[570095433,null,null,[1]],[573506525,null,null,[1]],[573506524,null,null,[1]],[567362967,null,null,[1]],[570863962,null,null,[1]],[null,null,570879859,[null,null,\"control_1\\\\\\\\.\\\\\\\\d\"]],[null,570863961,null,[null,50]],[null,1085,null,[null,5]],[null,63,null,[null,30]],[null,1080,null,[null,5]],[1086,null,null,[1]],[10010,null,null,[1]],[null,1027,null,[null,10]],[null,57,null,[null,120]],[null,1079,null,[null,5]],[10009,null,null,[1]],[null,1050,null,[null,30]],[null,58,null,[null,120]],[10005,null,null,[1]],[555237685,null,null,[1]],[45460956,null,null,[1]],[45414947,null,null,[1]],[null,472785970,null,[null,500]],[557143911,null,null,[1]],[541943501,null,null,[1]],[null,550718588,null,[null,250]],[null,null,null,[null,null,null,[\"As0hBNJ8h++fNYlkq8cTye2qDLyom8NddByiVytXGGD0YVE+2CEuTCpqXMDxdhOMILKoaiaYifwEvCRlJ\/9GcQ8AAAB8eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3MTk1MzI3OTksImlzU3ViZG9tYWluIjp0cnVlfQ==\",\"AgRYsXo24ypxC89CJanC+JgEmraCCBebKl8ZmG7Tj5oJNx0cmH0NtNRZs3NB5ubhpbX\/bIt7l2zJOSyO64NGmwMAAACCeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3MTk1MzI3OTksImlzU3ViZG9tYWluIjp0cnVlfQ==\",\"A\/ERL66fN363FkXxgDc6F1+ucRUkAhjEca9W3la6xaLnD2Y1lABsqmdaJmPNaUKPKVBRpyMKEhXYl7rSvrQw+AkAAACNeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiRmxlZGdlQmlkZGluZ0FuZEF1Y3Rpb25TZXJ2ZXIiLCJleHBpcnkiOjE3MTkzNTk5OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9\",\"A6OdGH3fVf4eKRDbXb4thXA4InNqDJDRhZ8U533U\/roYjp4Yau0T3YSuc63vmAs\/8ga1cD0E3A7LEq6AXk1uXgsAAACTeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiRmxlZGdlQmlkZGluZ0FuZEF1Y3Rpb25TZXJ2ZXIiLCJleHBpcnkiOjE3MTkzNTk5OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9\"]],null,1934],[577888470,null,null,[1]],[485990406,null,null,[]]],[[12,[[40,[[21065724],[21065725,[[203,null,null,[1]]]]],[4,null,9,null,null,null,null,[\"LayoutShift\"]],71],[10,[[31061690],[31061691,[[83,null,null,[1]],[84,null,null,[1]]]]],null,61]]],[13,[[500,[[31061692],[31061693,[[77,null,null,[1]],[78,null,null,[1]],[85,null,null,[1]],[80,null,null,[1]],[76,null,null,[1]]]]],[4,null,6,null,null,null,null,[\"31061691\"]]],[1000,[[31078663,null,[2,[[4,null,70,null,null,null,null,[\"browsing-topics\"]],[4,null,8,null,null,null,null,[\"document.browsingTopics\"]]]]]]],[1000,[[31078664,null,[2,[[4,null,69,null,null,null,null,[\"browsing-topics\"]],[1,[[4,null,70,null,null,null,null,[\"browsing-topics\"]]]]]]]]],[1000,[[31078665,null,[2,[[4,null,8,null,null,null,null,[\"navigator.runAdAuction\"]],[4,null,70,null,null,null,null,[\"run-ad-auction\"]],[4,null,70,null,null,null,null,[\"join-ad-interest-group\"]]]]]]],[1000,[[31078666,null,[2,[[4,null,69,null,null,null,null,[\"join-ad-interest-group\"]],[1,[[4,null,70,null,null,null,null,[\"join-ad-interest-group\"]]]]]]]]],[1000,[[31078667,null,[2,[[4,null,69,null,null,null,null,[\"run-ad-auction\"]],[1,[[4,null,70,null,null,null,null,[\"run-ad-auction\"]]]]]]]]],[1000,[[31078668,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]]],[1000,[[31078669,null,[2,[[4,null,69,null,null,null,null,[\"attribution-reporting\"]],[1,[[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]]]]]]],[1000,[[31078670,null,[4,null,70,null,null,null,null,[\"shared-storage\"]]]]],[1000,[[31078671,null,[2,[[4,null,69,null,null,null,null,[\"shared-storage\"]],[1,[[4,null,70,null,null,null,null,[\"shared-storage\"]]]]]]]]]]],[10,[[50,[[31067422],[31067423,[[null,1032,null,[]]]],[44776369],[44792510],[44804781],[44806359]],[3,[[4,null,8,null,null,null,null,[\"gmaSdk.getQueryInfo\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaQueryInfo.postMessage\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaSig.postMessage\"]]]],69],[10,[[31078019],[31078020]]],[10,[[31078237],[31078238,[[1302,null,null,[1]]]]]],[500,[[31078297],[31078301,[[1230,null,null,[]],[1229,null,null,[]],[1231,null,null,[]]]]],null,87],[null,[[31078995],[31078996,[[45459826,null,null,[1]],[531007060,null,null,[1]],[45430975,null,null,[1]],[531582260,null,null,[1]]]]]],[50,[[31079265],[31079266,[[573506525,null,null,[]]]]]],[50,[[31079437],[31079438,[[573506524,null,null,[]]]]]],[10,[[31079491],[31079492,[[1290,null,null,[1]]]]]],[10,[[31079517],[31079518,[[1282,null,null,[1]]]]]],[100,[[31079605],[31079606,[[557811243,null,null,[1]]]]]],[100,[[31079628],[31079629,[[568515114,null,null,[]]]]]],[1000,[[31079653,[[null,null,14,[null,null,\"31079653\"]]],[6,null,null,null,6,null,\"31079653\"]]],[4,null,55],63,null,null,null,null,null,null,null,null,2],[1000,[[31079654,[[null,null,14,[null,null,\"31079654\"]]],[6,null,null,null,6,null,\"31079654\"]]],[4,null,55],63,null,null,null,null,null,null,null,null,2],[1000,[[31079698,[[null,null,14,[null,null,\"31079698\"]]],[6,null,null,null,6,null,\"31079698\"]]],[4,null,55],63,null,null,null,null,null,null,null,null,2],[1000,[[31079699,[[null,null,14,[null,null,\"31079699\"]]],[6,null,null,null,6,null,\"31079699\"]]],[4,null,55],63,null,null,null,null,null,null,null,null,2],[10,[[31079714],[31079715,[[1275,null,null,[1]]]]]],[1,[[31079721],[31079722,[[570879858,null,null,[1]]]]],null,102],[1000,[[31079756,[[null,null,14,[null,null,\"31079756\"]]],[6,null,null,null,6,null,\"31079756\"]]],[4,null,55],63,null,null,null,null,null,null,null,null,2],[1000,[[31079757,[[null,null,14,[null,null,\"31079757\"]]],[6,null,null,null,6,null,\"31079757\"]]],[4,null,55],63,null,null,null,null,null,null,null,null,2],[50,[[31079758],[31079759,[[1298,null,null,[]],[1292,null,null,[]]]]]],[1,[[42531513],[42531514,[[316,null,null,[1]]]]]],[1,[[42531644],[42531645,[[368,null,null,[1]]]],[42531646,[[369,null,null,[1]],[368,null,null,[1]]]]]],[50,[[42531705],[42531706]]],[1,[[42532242],[42532243,[[1256,null,null,[1]],[290,null,null,[1]]]]]],[1,[[42532262],[42532263,[[null,1263,null,[null,16]]]],[42532264,[[null,1263,null,[null,4294967296]]]],[42532265,[[null,1265,null,[null,60]],[null,1264,null,[null,0.2]],[1266,null,null,[1]]]],[42532266,[[null,1263,null,[null,4294967296]],[null,1265,null,[null,60]],[null,1264,null,[null,0.2]],[1266,null,null,[1]]]],[42532267,[[null,1263,null,[null,16]],[null,1265,null,[null,60]],[null,1264,null,[null,0.2]],[1266,null,null,[1]]]],[42532268,[[1266,null,null,[1]]]]]],[1,[[42532360],[42532361,[[1260,null,null,[1]],[1291,null,null,[1]]]]],null,90],[1,[[42532362],[42532363]]],[50,[[42532523],[42532524,[[1300,null,null,[]]]]]],[null,[[42532525],[42532526]]],[10,[[42532598],[42532599,[[1271,null,null,[1]]]],[42532600,[[1272,null,null,[1]]]],[42532601,[[1271,null,null,[1]],[1272,null,null,[1]]]]]],[1,[[44719338],[44719339,[[334,null,null,[1]],[null,54,null,[null,100]],[null,66,null,[null,10]],[null,65,null,[null,1000]]]]]],[10,[[44776368],[44779257]],[3,[[4,null,8,null,null,null,null,[\"gmaSdk.getQueryInfo\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaQueryInfo.postMessage\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaSig.postMessage\"]]]],69],[10,[[44785292],[44785293,[[1239,null,null,[1]]]]]],[10,[[44785294],[44785295]]],[1,[[44795552],[44795553,[[1260,null,null,[1]]]]],null,90],[1,[[44795554],[44795555]]],[100,[[44795921],[44795922,[[1222,null,null,[1]]]],[44798934,[[1222,null,null,[1]]]]]],[10,[[44800658],[44800659,[[1185,null,null,[1]]]]],null,76],[1,[[44801778],[44801779,[[506914611,null,null,[1]]]]],[4,null,55]],[1000,[[44802674,[[506852289,null,null,[1]]],[12,null,null,null,2,null,\"smitmehta\\\\.com\/\"]]],[4,null,55]],[null,[[44805914],[44805915,[[571859167,null,null,[1]]]]],[4,null,55]],[50,[[44807405],[44807406,[[570863962,null,null,[]]]]],null,102],[50,[[44807749],[44807751,[[1185,null,null,[1]]]]],null,76],[10,[[44807750],[44807752,[[1185,null,null,[1]]]]],null,76],[50,[[44807753],[44807754,[[1185,null,null,[1]]]]],null,76],[50,[[44809003,[[1289,null,null,[1]]]],[44809004,[[1289,null,null,[1]],[null,null,1307,[null,null,\"inhead\"]]]],[44809005,[[1289,null,null,[1]],[null,null,1307,[null,null,\"nohtml\"]]]]]],[100,[[44809314],[44809315,[[null,572636916,null,[null,50]],[572636914,null,null,[1]],[null,572636915,null,[null,300]]]],[44809316,[[null,572636916,null,[null,25]],[572636914,null,null,[1]],[null,572636915,null,[null,150]]]],[44809317,[[null,572636916,null,[null,1]],[572636914,null,null,[1]],[null,572636915,null,[null,1]]]]],[4,null,55]]]],[11,[[1000,[[31079716,null,[4,null,6,null,null,null,null,[\"31079714\"]]]],[4,null,8,null,null,null,null,[\"__gpp\"]],88,null,null,null,null,null,null,null,null,9],[1000,[[31079717,null,[4,null,6,null,null,null,null,[\"31079715\"]]]],[4,null,8,null,null,null,null,[\"__gpp\"]],88,null,null,null,null,null,null,null,null,9],[1000,[[31079729,null,[4,null,6,null,null,null,null,[\"31079721\"]]]],[4,null,8,null,null,null,null,[\"navigator.cookieDeprecationLabel\"]],103,null,null,null,null,null,null,null,null,16],[1000,[[31079730,null,[4,null,6,null,null,null,null,[\"31079722\"]]]],[4,null,8,null,null,null,null,[\"navigator.cookieDeprecationLabel\"]],103,null,null,null,null,null,null,null,null,16],[1000,[[44807497,null,[4,null,6,null,null,null,null,[\"44807405\"]]]],[4,null,8,null,null,null,null,[\"navigator.cookieDeprecationLabel\"]],103,null,null,null,null,null,null,null,null,16],[1000,[[44807498,null,[4,null,6,null,null,null,null,[\"44807406\"]]]],[4,null,8,null,null,null,null,[\"navigator.cookieDeprecationLabel\"]],103,null,null,null,null,null,null,null,null,16]]],[17,[[1,[[44797663,[[null,506871937,null,[null,44797663]],[1120,null,null,[1]]]],[44797664,[[null,506871937,null,[null,44797664]],[160889229,null,null,[1]],[1120,null,null,[1]]]]],[4,null,55],null,null,null,null,300,null,123],[95,[[44806139,[[null,506871937,null,[null,44806139]]]],[44806140,[[545453532,null,null,[1]],[null,506871937,null,[null,44806140]],[1120,null,null,[1]]]],[44806141,[[null,506871937,null,[null,44806141]],[1120,null,null,[1]]]]],[4,null,55],null,null,null,null,610,null,123],[1,[[44806145,[[null,506871937,null,[null,44806145]],[1120,null,null,[1]]]],[44806146,[[566279275,null,null,[1]],[null,506871937,null,[null,44806146]],[1120,null,null,[1]]]],[44806147,[[566279276,null,null,[1]],[null,506871937,null,[null,44806147]],[1120,null,null,[1]]]]],[4,null,55],null,null,null,null,910,null,123],[500,[[44807763],[44807764,[[576499818,null,null,[1]]]]],[4,null,55],null,null,null,null,null,null,126],[500,[[44808148],[44808149,[[575790353,null,null,[1]]]]],[4,null,55],null,null,null,null,null,null,124],[500,[[44808284],[44808285,[[577127756,null,null,[1]]]]],[4,null,55],null,null,null,null,null,null,125],[200,[[44809053],[44809054,[[null,null,null,[null,null,null,[\"1\",\"2\",\"5\"]],null,556791602]]],[44809055,[[null,null,null,[null,null,null,[\"1\",\"2\",\"6\"]],null,556791602]]],[44809056,[[null,null,null,[null,null,null,[\"1\",\"2\",\"4\"]],null,556791602]]],[44809057,[[null,null,null,[null,null,null,[\"1\",\"2\",\"4\",\"5\",\"6\"]],null,556791602]]]],[4,null,55],null,null,null,null,null,null,127],[100,[[44809071],[44809072,[[561639568,null,null,[1]]]]],[4,null,55],null,null,null,null,null,null,128],[50,[[318512601]],null,null,null,null,null,600,null,102],[50,[[318512602,[[541943501,null,null,[]],[1284,null,null,[]]]]],null,null,null,null,null,650,null,102]]]],null,null,[null,1000,1,1000]],[null,[],null,null,null,null,null,null,\"ca-pub-6783132972349113\"],null,null,1,null,1480318202,[44759875,44759926]]");