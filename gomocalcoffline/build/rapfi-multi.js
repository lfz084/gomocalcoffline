var Rapfi = (() => {
	var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
	return (function(Rapfi) {
		Rapfi = Rapfi || {};

		function f() { l.buffer != w && x(l.buffer); return aa }

		function ba() { l.buffer != w && x(l.buffer); return ca }

		function y() { l.buffer != w && x(l.buffer); return da }

		function z() { l.buffer != w && x(l.buffer); return ea }

		function fa() { l.buffer != w && x(l.buffer); return ia }
		var A;
		A || (A = typeof Rapfi !== 'undefined' ? Rapfi : {});
		var ja, ka;
		A.ready = new Promise(function(a, b) { ja = a;
			ka = b });
		A.Nb || (A.Nb = 0);
		A.Nb++;
		A.ENVIRONMENT_IS_PTHREAD || function(a) {
			function b(n, r, p) { var q = new XMLHttpRequest;
				q.open("GET", n, !0);
				q.responseType = "arraybuffer";
				q.onprogress = function(t) { var h = r;
					t.total && (h = t.total); if (t.loaded) { q.cb ? A.vb[n].loaded = t.loaded : (q.cb = !0, A.vb || (A.vb = {}), A.vb[n] = { loaded: t.loaded, total: h }); var u = h = t = 0,
							v; for (v in A.vb) { var G = A.vb[v];
							t += G.total;
							h += G.loaded;
							u++ } t = Math.ceil(t * A.Nb / u);
						A.setStatus && A.setStatus("Downloading data... (" + h + "/" + t + ")") } else !A.vb && A.setStatus && A.setStatus("Downloading data...") };
				q.onerror = function() { throw Error("NetworkError for: " + n); };
				q.onload = function() { if (200 == q.status || 304 == q.status || 206 == q.status || 0 == q.status && q.response) p(q.response);
					else throw Error(q.statusText + " : " + q.responseURL); };
				q.send(null) }

			function c(n) { console.error("package error:", n) }

			function d() {
				function n(t, h, u) { this.start = t;
					this.end = h;
					this.audio = u }

				function r(t) { if (!t) throw "Loading data file failed." + Error().stack; if (!(t instanceof ArrayBuffer)) throw "bad input to processPackageData" + Error().stack;
					t = new Uint8Array(t);
					n.prototype.Mb = t;
					t = a.files; for (var h = 0; h < t.length; ++h) n.prototype.cb[t[h].filename].onload();
					A.removeRunDependency("datafile_rapfi-multi.data") } n.prototype = { cb: {}, open: function(t, h) { this.name = h;
						this.cb[h] = this;
						A.addRunDependency("fp " + this.name) }, onload: function() { this.qb(this.Mb.subarray(this.start, this.end)) }, qb: function(t) { A.FS_createDataFile(this.name, null, t, !0, !0, !0);
						A.removeRunDependency("fp " + this.name);
						this.cb[this.name] = null } }; for (var p = a.files, q = 0; q < p.length; ++q)(new n(p[q].start, p[q].end, p[q].audio || 0)).open("GET", p[q].filename);
				A.addRunDependency("datafile_rapfi-multi.data");
				A.pc || (A.pc = {});
				A.pc["rapfi-multi.data"] = { jd: !1 };
				m ? (r(m), m = null) : k = r } "object" === typeof window ? window.encodeURIComponent(window.location.pathname.toString().substring(0, window.location.pathname.toString().lastIndexOf("/")) + "/") : "undefined" === typeof process && "undefined" !== typeof location && encodeURIComponent(location.pathname.toString().substring(0, location.pathname.toString().lastIndexOf("/")) + "/"); "function" !== typeof A.locateFilePackage || A.locateFile || (A.locateFile = A.locateFilePackage, B("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")); var e = A.locateFile ? A.locateFile("rapfi-multi.data", "") : "rapfi-multi.data",
				g = a.remote_package_size,
				k = null,
				m = A.getPreloadedPackage ? A.getPreloadedPackage(e, g) : null;
			m || b(e, g, function(n) { k ? (k(n), k = null) : m = n }, c);
			A.calledRun ? d() : (A.preRun || (A.preRun = []), A.preRun.push(d)) }({ files: [{ filename: "/config-210901.toml", start: 0, end: 602 }, { filename: "/config-220723.toml", start: 602, end: 1203 }, { filename: "/config-default.toml", start: 1203, end: 3040 }, { filename: "/model210901.bin", start: 3040, end: 26244 }, { filename: "/model220723.bin", start: 26244, end: 85974 }], remote_package_size: 85974 });
		A.sendCommand = A.sendCommand || null;
		A.receiveStdout = A.receiveStdout || (a => console.log(a));
		A.receiveStderr = A.receiveStderr || (a => console.error(a));
		A.onEngineReady = A.onEngineReady || (() => {});
		A.preRun || (A.preRun = []);
		A.preRun.push(function() { var a = "",
				b = 0; let c = "",
				d = "";
			la(function() { return b < a.length ? a.charCodeAt(b++) : null }, function(g) { g && 10 != g ? c += String.fromCharCode(g) : (A.receiveStdout(c), c = "") }, function(g) { g && 10 != g ? d += String.fromCharCode(g) : (A.receiveStderr(d), d = "") }); let e = A.cwrap("gomocupLoopOnce", "number", []);
			A.sendCommand = function(g) { a = g + "\n";
				b = 0;
				e() } });
		A.onRuntimeInitialized = function() { A.onEngineReady() };
		var ma = Object.assign({}, A),
			na = "./this.program",
			oa = (a, b) => { throw b; },
			pa = "object" == typeof window,
			qa = "function" == typeof importScripts,
			ra = "object" == typeof process && "object" == typeof process.fd && "string" == typeof process.fd.node,
			C = A.ENVIRONMENT_IS_PTHREAD || !1,
			D = "";

		function sa(a) { return A.locateFile ? A.locateFile(a, D) : D + a }
		var ta, ua, va;
		if (pa || qa) qa ? D = self.location.href : "undefined" != typeof document && document.currentScript && (D = document.currentScript.src), _scriptDir && (D = _scriptDir), 0 !== D.indexOf("blob:") ? D = D.substr(0, D.replace(/[?#].*/, "").lastIndexOf("/") + 1) : D = "", ta = a => { var b = new XMLHttpRequest;
			b.open("GET", a, !1);
			b.send(null); return b.responseText }, qa && (va = a => { var b = new XMLHttpRequest;
			b.open("GET", a, !1);
			b.responseType = "arraybuffer";
			b.send(null); return new Uint8Array(b.response) }), ua = (a, b, c) => { var d = new XMLHttpRequest;
			d.open("GET", a, !0);
			d.responseType = "arraybuffer";
			d.onload = () => { 200 == d.status || 0 == d.status && d.response ? b(d.response) : c() };
			d.onerror = c;
			d.send(null) };
		var wa = A.print || console.log.bind(console),
			B = A.printErr || console.warn.bind(console);
		Object.assign(A, ma);
		ma = null;
		A.thisProgram && (na = A.thisProgram);
		A.quit && (oa = A.quit);
		var xa;
		A.wasmBinary && (xa = A.wasmBinary);
		var noExitRuntime = A.noExitRuntime || !0;
		"object" != typeof WebAssembly && E("no native wasm support detected");
		var l, ya, za = !1,
			Aa = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0;

		function Ba(a, b) { for (var c = b + NaN, d = b; a[d] && !(d >= c);) ++d; if (16 < d - b && a.buffer && Aa) return Aa.decode(a.buffer instanceof SharedArrayBuffer ? a.slice(b, d) : a.subarray(b, d)); for (c = ""; b < d;) { var e = a[b++]; if (e & 128) { var g = a[b++] & 63; if (192 == (e & 224)) c += String.fromCharCode((e & 31) << 6 | g);
					else { var k = a[b++] & 63;
						e = 224 == (e & 240) ? (e & 15) << 12 | g << 6 | k : (e & 7) << 18 | g << 12 | k << 6 | a[b++] & 63;
						65536 > e ? c += String.fromCharCode(e) : (e -= 65536, c += String.fromCharCode(55296 | e >> 10, 56320 | e & 1023)) } } else c += String.fromCharCode(e) } return c }

		function Ca(a) { return a ? Ba(ba(), a) : "" }

		function Da(a, b, c, d) { if (!(0 < d)) return 0; var e = c;
			d = c + d - 1; for (var g = 0; g < a.length; ++g) { var k = a.charCodeAt(g); if (55296 <= k && 57343 >= k) { var m = a.charCodeAt(++g);
					k = 65536 + ((k & 1023) << 10) | m & 1023 } if (127 >= k) { if (c >= d) break;
					b[c++] = k } else { if (2047 >= k) { if (c + 1 >= d) break;
						b[c++] = 192 | k >> 6 } else { if (65535 >= k) { if (c + 2 >= d) break;
							b[c++] = 224 | k >> 12 } else { if (c + 3 >= d) break;
							b[c++] = 240 | k >> 18;
							b[c++] = 128 | k >> 12 & 63 } b[c++] = 128 | k >> 6 & 63 } b[c++] = 128 | k & 63 } } b[c] = 0; return c - e }
		var w, aa, ca, Ea, da, ea, ia;
		C && (w = A.buffer);

		function x(a) { w = a;
			A.HEAP8 = aa = new Int8Array(a);
			A.HEAP16 = Ea = new Int16Array(a);
			A.HEAP32 = da = new Int32Array(a);
			A.HEAPU8 = ca = new Uint8Array(a);
			A.HEAPU16 = new Uint16Array(a);
			A.HEAPU32 = ea = new Uint32Array(a);
			A.HEAPF32 = new Float32Array(a);
			A.HEAPF64 = ia = new Float64Array(a) }
		var Fa = A.INITIAL_MEMORY || 134217728;
		if (C) l = A.wasmMemory, w = A.buffer;
		else if (A.wasmMemory) l = A.wasmMemory;
		else if (l = new WebAssembly.Memory({ initial: Fa / 65536, maximum: 16384, shared: !0 }), !(l.buffer instanceof SharedArrayBuffer)) throw B("requested a shared WebAssembly.Memory but the returned buffer is not a SharedArrayBuffer, indicating that while the browser has SharedArrayBuffer it does not have WebAssembly threads support - you may need to set a flag"), ra && console.log("(on node you may need: --experimental-wasm-threads --experimental-wasm-bulk-memory and also use a recent version)"), Error("bad memory");
		l && (w = l.buffer);
		Fa = w.byteLength;
		x(w);
		var Ga, Ha = [],
			Ia = [],
			Ja = [];

		function Ka() { C || (A.noFSInit || La || la(), Ma = !1, Na(Ia)) }

		function Oa() { var a = A.preRun.shift();
			Ha.unshift(a) }
		var Pa = 0,
			Qa = null,
			Ra = null;

		function Sa() { Pa++;
			A.monitorRunDependencies && A.monitorRunDependencies(Pa) }

		function Ta() { Pa--;
			A.monitorRunDependencies && A.monitorRunDependencies(Pa); if (0 == Pa && (null !== Qa && (clearInterval(Qa), Qa = null), Ra)) { var a = Ra;
				Ra = null;
				a() } }

		function E(a) { if (C) postMessage({ cmd: "onAbort", arg: a });
			else if (A.onAbort) A.onAbort(a);
			a = "Aborted(" + a + ")";
			B(a);
			za = !0;
			a = new WebAssembly.RuntimeError(a + ". Build with -sASSERTIONS for more info.");
			ka(a); throw a; }

		function Ua() { return F.startsWith("data:application/octet-stream;base64,") }
		var F;
		F = "rapfi-multi.wasm";
		Ua() || (F = sa(F));

		function Va() { var a = F; try { if (a == F && xa) return new Uint8Array(xa); if (va) return va(a); throw "both async and sync fetching of the wasm failed"; } catch (b) { E(b) } }

		function Wa() { return xa || !pa && !qa || "function" != typeof fetch ? Promise.resolve().then(function() { return Va() }) : fetch(F, { credentials: "same-origin" }).then(function(a) { if (!a.ok) throw "failed to load wasm binary file at '" + F + "'"; return a.arrayBuffer() }).catch(function() { return Va() }) }
		var H, I, Xa = {};

		function Ya(a) { this.name = "ExitStatus";
			this.message = "Program terminated with exit(" + a + ")";
			this.status = a }

		function Za(a) {
			(a = K.ob[a]) || E();
			K.sc(a) }

		function $a(a) { var b = K.Jc(); if (!b) return 6;
			K.Eb.push(b);
			K.ob[a.nb] = b;
			b.nb = a.nb; var c = { cmd: "run", start_routine: a.Yc, arg: a.zc, pthread_ptr: a.nb };
			b.Db = () => { c.time = performance.now();
				b.postMessage(c, a.dd) };
			b.loaded && (b.Db(), delete b.Db); return 0 }
		var ab = (a, b) => { for (var c = 0, d = a.length - 1; 0 <= d; d--) { var e = a[d]; "." === e ? a.splice(d, 1) : ".." === e ? (a.splice(d, 1), c++) : c && (a.splice(d, 1), c--) } if (b)
					for (; c; c--) a.unshift(".."); return a },
			L = a => { var b = "/" === a.charAt(0),
					c = "/" === a.substr(-1);
				(a = ab(a.split("/").filter(d => !!d), !b).join("/")) || b || (a = ".");
				a && c && (a += "/"); return (b ? "/" : "") + a },
			bb = a => { var b = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(a).slice(1);
				a = b[0];
				b = b[1]; if (!a && !b) return ".";
				b && (b = b.substr(0, b.length - 1)); return a + b },
			cb = a => { if ("/" === a) return "/";
				a = L(a);
				a = a.replace(/\/$/, ""); var b = a.lastIndexOf("/"); return -1 === b ? a : a.substr(b + 1) };

		function db() { if ("object" == typeof crypto && "function" == typeof crypto.getRandomValues) { var a = new Uint8Array(1); return () => { crypto.getRandomValues(a); return a[0] } } return () => E("randomDevice") }

		function eb() { for (var a = "", b = !1, c = arguments.length - 1; - 1 <= c && !b; c--) { b = 0 <= c ? arguments[c] : "/"; if ("string" != typeof b) throw new TypeError("Arguments to path.resolve must be strings"); if (!b) return "";
				a = b + "/" + a;
				b = "/" === b.charAt(0) } a = ab(a.split("/").filter(d => !!d), !b).join("/"); return (b ? "/" : "") + a || "." }

		function fb(a, b) { for (var c = 0, d = 0; d < a.length; ++d) { var e = a.charCodeAt(d);
				127 >= e ? c++ : 2047 >= e ? c += 2 : 55296 <= e && 57343 >= e ? (c += 4, ++d) : c += 3 } c = Array(c + 1);
			a = Da(a, c, 0, c.length);
			b && (c.length = a); return c }
		var gb = [];

		function hb(a, b) { gb[a] = { input: [], gb: [], xb: b };
			ib(a, jb) }
		var jb = { open: function(a) { var b = gb[a.node.Bb]; if (!b) throw new M(43);
					a.fb = b;
					a.seekable = !1 }, close: function(a) { a.fb.xb.Gb(a.fb) }, Gb: function(a) { a.fb.xb.Gb(a.fb) }, read: function(a, b, c, d) { if (!a.fb || !a.fb.xb.hc) throw new M(60); for (var e = 0, g = 0; g < d; g++) { try { var k = a.fb.xb.hc(a.fb) } catch (m) { throw new M(29); } if (void 0 === k && 0 === e) throw new M(6); if (null === k || void 0 === k) break;
						e++;
						b[c + g] = k } e && (a.node.timestamp = Date.now()); return e }, write: function(a, b, c, d) { if (!a.fb || !a.fb.xb.Tb) throw new M(60); try { for (var e = 0; e < d; e++) a.fb.xb.Tb(a.fb, b[c + e]) } catch (g) { throw new M(29); } d && (a.node.timestamp = Date.now()); return e } },
			kb = { hc: function(a) { if (!a.input.length) { var b = null; "undefined" != typeof window && "function" == typeof window.prompt ? (b = window.prompt("Input: "), null !== b && (b += "\n")) : "function" == typeof readline && (b = readline(), null !== b && (b += "\n")); if (!b) return null;
						a.input = fb(b, !0) } return a.input.shift() }, Tb: function(a, b) { null === b || 10 === b ? (wa(Ba(a.gb, 0)), a.gb = []) : 0 != b && a.gb.push(b) }, Gb: function(a) { a.gb && 0 < a.gb.length && (wa(Ba(a.gb, 0)), a.gb = []) } },
			lb = { Tb: function(a, b) { null === b || 10 === b ? (B(Ba(a.gb, 0)), a.gb = []) : 0 != b && a.gb.push(b) }, Gb: function(a) { a.gb && 0 < a.gb.length && (B(Ba(a.gb, 0)), a.gb = []) } },
			O = { jb: null, mb: function() { return O.createNode(null, "/", 16895, 0) }, createNode: function(a, b, c, d) { if (24576 === (c & 61440) || 4096 === (c & 61440)) throw new M(63);
					O.jb || (O.jb = { dir: { node: { ib: O.$a.ib, hb: O.$a.hb, zb: O.$a.zb, Hb: O.$a.Hb, rc: O.$a.rc, Lb: O.$a.Lb, tc: O.$a.tc, qc: O.$a.qc, Ib: O.$a.Ib }, stream: { sb: O.ab.sb } }, file: { node: { ib: O.$a.ib, hb: O.$a.hb }, stream: { sb: O.ab.sb, read: O.ab.read, write: O.ab.write, Yb: O.ab.Yb, Sb: O.ab.Sb, nc: O.ab.nc } }, link: { node: { ib: O.$a.ib, hb: O.$a.hb, Cb: O.$a.Cb }, stream: {} }, bc: { node: { ib: O.$a.ib, hb: O.$a.hb }, stream: mb } });
					c = nb(a, b, c, d);
					16384 === (c.mode & 61440) ? (c.$a = O.jb.dir.node, c.ab = O.jb.dir.stream, c.Za = {}) : 32768 === (c.mode & 61440) ? (c.$a = O.jb.file.node, c.ab = O.jb.file.stream, c.bb = 0, c.Za = null) : 40960 === (c.mode & 61440) ? (c.$a = O.jb.link.node, c.ab = O.jb.link.stream) : 8192 === (c.mode & 61440) && (c.$a = O.jb.bc.node, c.ab = O.jb.bc.stream);
					c.timestamp = Date.now();
					a && (a.Za[b] = c, a.timestamp = c.timestamp); return c }, kd: function(a) { return a.Za ? a.Za.subarray ? a.Za.subarray(0, a.bb) : new Uint8Array(a.Za) : new Uint8Array(0) }, ec: function(a, b) { var c = a.Za ? a.Za.length : 0;
					c >= b || (b = Math.max(b, c * (1048576 > c ? 2 : 1.125) >>> 0), 0 != c && (b = Math.max(b, 256)), c = a.Za, a.Za = new Uint8Array(b), 0 < a.bb && a.Za.set(c.subarray(0, a.bb), 0)) }, Wc: function(a, b) { if (a.bb != b)
						if (0 == b) a.Za = null, a.bb = 0;
						else { var c = a.Za;
							a.Za = new Uint8Array(b);
							c && a.Za.set(c.subarray(0, Math.min(b, a.bb)));
							a.bb = b } }, $a: { ib: function(a) { var b = {};
						b.Fc = 8192 === (a.mode & 61440) ? a.id : 1;
						b.Qb = a.id;
						b.mode = a.mode;
						b.Tc = 1;
						b.uid = 0;
						b.Lc = 0;
						b.Bb = a.Bb;
						16384 === (a.mode & 61440) ? b.size = 4096 : 32768 === (a.mode & 61440) ? b.size = a.bb : 40960 === (a.mode & 61440) ? b.size = a.link.length : b.size = 0;
						b.$b = new Date(a.timestamp);
						b.oc = new Date(a.timestamp);
						b.dc = new Date(a.timestamp);
						b.Bc = 4096;
						b.Cc = Math.ceil(b.size / b.Bc); return b }, hb: function(a, b) { void 0 !== b.mode && (a.mode = b.mode);
						void 0 !== b.timestamp && (a.timestamp = b.timestamp);
						void 0 !== b.size && O.Wc(a, b.size) }, zb: function() { throw ob[44]; }, Hb: function(a, b, c, d) { return O.createNode(a, b, c, d) }, rc: function(a, b, c) { if (16384 === (a.mode & 61440)) { try { var d = pb(b, c) } catch (g) {} if (d)
								for (var e in d.Za) throw new M(55); } delete a.parent.Za[a.name];
						a.parent.timestamp = Date.now();
						a.name = c;
						b.Za[c] = a;
						b.timestamp = a.parent.timestamp;
						a.parent = b }, Lb: function(a, b) { delete a.Za[b];
						a.timestamp = Date.now() }, tc: function(a, b) { var c = pb(a, b),
							d; for (d in c.Za) throw new M(55);
						delete a.Za[b];
						a.timestamp = Date.now() }, qc: function(a) { var b = [".", ".."],
							c; for (c in a.Za) a.Za.hasOwnProperty(c) && b.push(c); return b }, Ib: function(a, b, c) { a = O.createNode(a, b, 41471, 0);
						a.link = c; return a }, Cb: function(a) { if (40960 !== (a.mode & 61440)) throw new M(28); return a.link } }, ab: { read: function(a, b, c, d, e) { var g = a.node.Za; if (e >= a.node.bb) return 0;
						a = Math.min(a.node.bb - e, d); if (8 < a && g.subarray) b.set(g.subarray(e, e + a), c);
						else
							for (d = 0; d < a; d++) b[c + d] = g[e + d]; return a }, write: function(a, b, c, d, e, g) { b.buffer === f().buffer && (g = !1); if (!d) return 0;
						a = a.node;
						a.timestamp = Date.now(); if (b.subarray && (!a.Za || a.Za.subarray)) { if (g) return a.Za = b.subarray(c, c + d), a.bb = d; if (0 === a.bb && 0 === e) return a.Za = b.slice(c, c + d), a.bb = d; if (e + d <= a.bb) return a.Za.set(b.subarray(c, c + d), e), d } O.ec(a, e + d); if (a.Za.subarray && b.subarray) a.Za.set(b.subarray(c, c + d), e);
						else
							for (g = 0; g < d; g++) a.Za[e + g] = b[c + g];
						a.bb = Math.max(a.bb, e + d); return d }, sb: function(a, b, c) { 1 === c ? b += a.position : 2 === c && 32768 === (a.node.mode & 61440) && (b += a.node.bb); if (0 > b) throw new M(28); return b }, Yb: function(a, b, c) { O.ec(a.node, b + c);
						a.node.bb = Math.max(a.node.bb, b + c) }, Sb: function(a, b, c, d, e) { if (32768 !== (a.node.mode & 61440)) throw new M(43);
						a = a.node.Za; if (e & 2 || a.buffer !== w) { if (0 < c || c + b < a.length) a.subarray ? a = a.subarray(c, c + b) : a = Array.prototype.slice.call(a, c, c + b);
							c = !0;
							E();
							b = void 0; if (!b) throw new M(48);
							f().set(a, b) } else c = !1, b = a.byteOffset; return { eb: b, gd: c } }, nc: function(a, b, c, d, e) { if (32768 !== (a.node.mode & 61440)) throw new M(43); if (e & 2) return 0;
						O.ab.write(a, b, 0, d, c, !1); return 0 } } };

		function qb(a, b, c) { var d = "al " + a;
			ua(a, e => { e || E('Loading data file "' + a + '" failed (no arrayBuffer).');
				b(new Uint8Array(e));
				d && Ta(d) }, () => { if (c) c();
				else throw 'Loading data file "' + a + '" failed.'; });
			d && Sa(d) }
		var rb = null,
			sb = {},
			tb = [],
			ub = 1,
			P = null,
			Ma = !0,
			M = null,
			ob = {},
			Q = (a, b = {}) => { a = eb("/", a); if (!a) return { path: "", node: null };
				b = Object.assign({ fc: !0, Ub: 0 }, b); if (8 < b.Ub) throw new M(32);
				a = ab(a.split("/").filter(k => !!k), !1); for (var c = rb, d = "/", e = 0; e < a.length; e++) { var g = e === a.length - 1; if (g && b.parent) break;
					c = pb(c, a[e]);
					d = L(d + "/" + a[e]);
					c.Ab && (!g || g && b.fc) && (c = c.Ab.root); if (!g || b.Fb)
						for (g = 0; 40960 === (c.mode & 61440);)
							if (c = vb(d), d = eb(bb(d), c), c = Q(d, { Ub: b.Ub + 1 }).node, 40 < g++) throw new M(32); } return { path: d, node: c } },
			wb = a => { for (var b;;) { if (a === a.parent) return a = a.mb.mc, b ? "/" !== a[a.length - 1] ? a + "/" + b : a + b : a;
					b = b ? a.name + "/" + b : a.name;
					a = a.parent } },
			xb = (a, b) => { for (var c = 0, d = 0; d < b.length; d++) c = (c << 5) - c + b.charCodeAt(d) | 0; return (a + c >>> 0) % P.length },
			pb = (a, b) => { var c; if (c = (c = yb(a, "x")) ? c : a.$a.zb ? 0 : 2) throw new M(c, a); for (c = P[xb(a.id, b)]; c; c = c.wb) { var d = c.name; if (c.parent.id === a.id && d === b) return c } return a.$a.zb(a, b) },
			nb = (a, b, c, d) => { a = new zb(a, b, c, d);
				b = xb(a.parent.id, a.name);
				a.wb = P[b]; return P[b] = a },
			Ab = { r: 0, "r+": 2, w: 577, "w+": 578, a: 1089, "a+": 1090 },
			Bb = a => { var b = ["r", "w", "rw"][a & 3];
				a & 512 && (b += "w"); return b },
			yb = (a, b) => { if (Ma) return 0; if (!b.includes("r") || a.mode & 292) { if (b.includes("w") && !(a.mode & 146) || b.includes("x") && !(a.mode & 73)) return 2 } else return 2; return 0 },
			Cb = (a, b) => { try { return pb(a, b), 20 } catch (c) {} return yb(a, "wx") },
			Db = (a = 0) => { for (; 4096 >= a; a++)
					if (!tb[a]) return a; throw new M(33); },
			Fb = (a, b) => { Eb || (Eb = function() { this.cb = {} }, Eb.prototype = {}, Object.defineProperties(Eb.prototype, { object: { get: function() { return this.node }, set: function(c) { this.node = c } }, flags: { get: function() { return this.cb.flags }, set: function(c) { this.cb.flags = c } }, position: { get: function() { return this.cb.position }, set: function(c) { this.cb.position = c } } }));
				a = Object.assign(new Eb, a);
				b = Db(b);
				a.rb = b; return tb[b] = a },
			mb = { open: a => { a.ab = sb[a.node.Bb].ab;
					a.ab.open && a.ab.open(a) }, sb: () => { throw new M(70); } },
			ib = (a, b) => { sb[a] = { ab: b } },
			Gb = (a, b) => { var c = "/" === b,
					d = !b; if (c && rb) throw new M(10); if (!c && !d) { var e = Q(b, { fc: !1 });
					b = e.path;
					e = e.node; if (e.Ab) throw new M(10); if (16384 !== (e.mode & 61440)) throw new M(54); } b = { type: a, md: {}, mc: b, Sc: [] };
				a = a.mb(b);
				a.mb = b;
				b.root = a;
				c ? rb = a : e && (e.Ab = b, e.mb && e.mb.Sc.push(b)) },
			R = (a, b, c) => { var d = Q(a, { parent: !0 }).node;
				a = cb(a); if (!a || "." === a || ".." === a) throw new M(28); var e = Cb(d, a); if (e) throw new M(e); if (!d.$a.Hb) throw new M(63); return d.$a.Hb(d, a, b, c) },
			Hb = (a, b, c) => { "undefined" == typeof c && (c = b, b = 438); return R(a, b | 8192, c) },
			Ib = (a, b) => { if (!eb(a)) throw new M(44); var c = Q(b, { parent: !0 }).node; if (!c) throw new M(44);
				b = cb(b); var d = Cb(c, b); if (d) throw new M(d); if (!c.$a.Ib) throw new M(63);
				c.$a.Ib(c, b, a) },
			Jb = a => { var b = Q(a, { parent: !0 }).node; if (!b) throw new M(44); var c = cb(a);
				a = pb(b, c);
				a: { try { var d = pb(b, c) } catch (g) { d = g.lb; break a } var e = yb(b, "wx");d = e ? e : 16384 === (d.mode & 61440) ? 31 : 0 }
				if (d) throw new M(d); if (!b.$a.Lb) throw new M(63); if (a.Ab) throw new M(10);
				b.$a.Lb(b, c);
				b = xb(a.parent.id, a.name); if (P[b] === a) P[b] = a.wb;
				else
					for (b = P[b]; b;) { if (b.wb === a) { b.wb = a.wb; break } b = b.wb } },
			vb = a => { a = Q(a).node; if (!a) throw new M(44); if (!a.$a.Cb) throw new M(28); return eb(wb(a.parent), a.$a.Cb(a)) },
			Kb = (a, b) => { a = "string" == typeof a ? Q(a, { Fb: !0 }).node : a; if (!a.$a.hb) throw new M(63);
				a.$a.hb(a, { mode: b & 4095 | a.mode & -4096, timestamp: Date.now() }) },
			Mb = (a, b, c) => { if ("" === a) throw new M(44); if ("string" == typeof b) { var d = Ab[b]; if ("undefined" == typeof d) throw Error("Unknown file open mode: " + b);
					b = d } c = b & 64 ? ("undefined" == typeof c ? 438 : c) & 4095 | 32768 : 0; if ("object" == typeof a) var e = a;
				else { a = L(a); try { e = Q(a, { Fb: !(b & 131072) }).node } catch (g) {} } d = !1; if (b & 64)
					if (e) { if (b & 128) throw new M(20); } else e = R(a, c, 0), d = !0; if (!e) throw new M(44);
				8192 === (e.mode & 61440) && (b &= -513); if (b & 65536 && 16384 !== (e.mode & 61440)) throw new M(54); if (!d && (c = e ? 40960 === (e.mode & 61440) ? 32 : 16384 === (e.mode & 61440) && ("r" !== Bb(b) || b & 512) ? 31 : yb(e, Bb(b)) : 44)) throw new M(c); if (b & 512 && !d) { c = e;
					c = "string" == typeof c ? Q(c, { Fb: !0 }).node : c; if (!c.$a.hb) throw new M(63); if (16384 === (c.mode & 61440)) throw new M(31); if (32768 !== (c.mode & 61440)) throw new M(28); if (d = yb(c, "w")) throw new M(d);
					c.$a.hb(c, { size: 0, timestamp: Date.now() }) } b &= -131713;
				e = Fb({ node: e, path: wb(e), flags: b, seekable: !0, position: 0, ab: e.ab, ed: [], error: !1 });
				e.ab.open && e.ab.open(e);!A.logReadFiles || b & 1 || (Lb || (Lb = {}), a in Lb || (Lb[a] = 1)); return e },
			Nb = a => { if (null === a.rb) throw new M(8);
				a.Ob && (a.Ob = null); try { a.ab.close && a.ab.close(a) } catch (b) { throw b; } finally { tb[a.rb] = null } a.rb = null },
			Ob = (a, b, c) => { if (null === a.rb) throw new M(8); if (!a.seekable || !a.ab.sb) throw new M(70); if (0 != c && 1 != c && 2 != c) throw new M(28);
				a.position = a.ab.sb(a, b, c);
				a.ed = [] },
			Pb = (a, b, c, d, e, g) => { if (0 > d || 0 > e) throw new M(28); if (null === a.rb) throw new M(8); if (0 === (a.flags & 2097155)) throw new M(8); if (16384 === (a.node.mode & 61440)) throw new M(31); if (!a.ab.write) throw new M(28);
				a.seekable && a.flags & 1024 && Ob(a, 0, 2); var k = "undefined" != typeof e; if (!k) e = a.position;
				else if (!a.seekable) throw new M(70);
				b = a.ab.write(a, b, c, d, e, g);
				k || (a.position += b); return b },
			Qb = () => { M || (M = function(a, b) { this.node = b;
					this.Xc = function(c) { this.lb = c };
					this.Xc(a);
					this.message = "FS error" }, M.prototype = Error(), M.prototype.constructor = M, [44].forEach(a => { ob[a] = new M(a);
					ob[a].stack = "<generic error, no stack>" })) },
			la = (a, b, c) => { La = !0;
				Qb();
				A.stdin = a || A.stdin;
				A.stdout = b || A.stdout;
				A.stderr = c || A.stderr;
				A.stdin ? S("/dev", "stdin", A.stdin) : Ib("/dev/tty", "/dev/stdin");
				A.stdout ? S("/dev", "stdout", null, A.stdout) : Ib("/dev/tty", "/dev/stdout");
				A.stderr ? S("/dev", "stderr", null, A.stderr) : Ib("/dev/tty1", "/dev/stderr");
				Mb("/dev/stdin", 0);
				Mb("/dev/stdout", 1);
				Mb("/dev/stderr", 1) },
			La, Rb = (a, b) => { var c = 0;
				a && (c |= 365);
				b && (c |= 146); return c },
			Sb = (a, b) => { a = "string" == typeof a ? a : wb(a); for (b = b.split("/").reverse(); b.length;) { var c = b.pop(); if (c) { var d = L(a + "/" + c); try { R(d, 16895, 0) } catch (e) {} a = d } } return d },
			Tb = (a, b, c, d) => { a = L(("string" == typeof a ? a : wb(a)) + "/" + b);
				c = Rb(c, d); return R(a, (void 0 !== c ? c : 438) & 4095 | 32768, 0) },
			Ub = (a, b, c, d, e, g) => { var k = b;
				a && (a = "string" == typeof a ? a : wb(a), k = b ? L(a + "/" + b) : a);
				a = Rb(d, e);
				k = R(k, (void 0 !== a ? a : 438) & 4095 | 32768, 0); if (c) { if ("string" == typeof c) { b = Array(c.length);
						d = 0; for (e = c.length; d < e; ++d) b[d] = c.charCodeAt(d);
						c = b } Kb(k, a | 146);
					b = Mb(k, 577);
					Pb(b, c, 0, c.length, 0, g);
					Nb(b);
					Kb(k, a) } return k },
			S = (a, b, c, d) => { a = L(("string" == typeof a ? a : wb(a)) + "/" + b);
				b = Rb(!!c, !!d);
				S.lc || (S.lc = 64); var e = S.lc++ << 8 | 0;
				ib(e, { open: g => { g.seekable = !1 }, close: () => { d && d.buffer && d.buffer.length && d(10) }, read: (g, k, m, n) => { for (var r = 0, p = 0; p < n; p++) { try { var q = c() } catch (t) { throw new M(29); } if (void 0 === q && 0 === r) throw new M(6); if (null === q || void 0 === q) break;
							r++;
							k[m + p] = q } r && (g.node.timestamp = Date.now()); return r }, write: (g, k, m, n) => { for (var r = 0; r < n; r++) try { d(k[m + r]) } catch (p) { throw new M(29); } n && (g.node.timestamp = Date.now()); return r } }); return Hb(a, b, e) },
			Vb = a => { if (!(a.Qc || a.Rc || a.link || a.Za)) { if ("undefined" != typeof XMLHttpRequest) throw Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread."); if (ta) try { a.Za = fb(ta(a.url), !0), a.bb = a.Za.length } catch (b) { throw new M(29); } else throw Error("Cannot load without read() or XMLHttpRequest."); } },
			Wb = (a, b, c, d, e) => {
				function g() { this.Rb = !1;
					this.cb = [] } g.prototype.get = function(p) { if (!(p > this.length - 1 || 0 > p)) { var q = p % this.cc; return this.jc(p / this.cc | 0)[q] } };
				g.prototype.qb = function(p) { this.jc = p };
				g.prototype.ac = function() { var p = new XMLHttpRequest;
					p.open("HEAD", c, !1);
					p.send(null); if (!(200 <= p.status && 300 > p.status || 304 === p.status)) throw Error("Couldn't load " + c + ". Status: " + p.status); var q = Number(p.getResponseHeader("Content-length")),
						t, h = (t = p.getResponseHeader("Accept-Ranges")) && "bytes" === t;
					p = (t = p.getResponseHeader("Content-Encoding")) && "gzip" === t; var u = 1048576;
					h || (u = q); var v = this;
					v.qb(G => { var J = G * u,
							ha = (G + 1) * u - 1;
						ha = Math.min(ha, q - 1); if ("undefined" == typeof v.cb[G]) { var dd = v.cb; if (J > ha) throw Error("invalid range (" + J + ", " + ha + ") or no bytes requested!"); if (ha > q - 1) throw Error("only " + q + " bytes available! programmer error!"); var N = new XMLHttpRequest;
							N.open("GET", c, !1);
							q !== u && N.setRequestHeader("Range", "bytes=" + J + "-" + ha);
							N.responseType = "arraybuffer";
							N.overrideMimeType && N.overrideMimeType("text/plain; charset=x-user-defined");
							N.send(null); if (!(200 <= N.status && 300 > N.status || 304 === N.status)) throw Error("Couldn't load " + c + ". Status: " + N.status);
							J = void 0 !== N.response ? new Uint8Array(N.response || []) : fb(N.responseText || "", !0);
							dd[G] = J } if ("undefined" == typeof v.cb[G]) throw Error("doXHR failed!"); return v.cb[G] }); if (p || !q) u = q = 1, u = q = this.jc(0).length, wa("LazyFiles on gzip forces download of the whole file when length is accessed");
					this.yc = q;
					this.xc = u;
					this.Rb = !0 };
				if ("undefined" != typeof XMLHttpRequest) { if (!qa) throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc"; var k = new g;
					Object.defineProperties(k, { length: { get: function() { this.Rb || this.ac(); return this.yc } }, cc: { get: function() { this.Rb || this.ac(); return this.xc } } }); var m = void 0 } else m = c, k = void 0;
				var n = Tb(a, b, d, e);
				k ? n.Za = k : m && (n.Za = null, n.url = m);
				Object.defineProperties(n, { bb: { get: function() { return this.Za.length } } });
				var r = {};
				Object.keys(n.ab).forEach(p => { var q = n.ab[p];
					r[p] = function() { Vb(n); return q.apply(null, arguments) } });
				r.read = (p, q, t, h, u) => {
					Vb(n);
					p = p.node.Za;
					if (u >= p.length) q = 0;
					else {
						h = Math.min(p.length - u, h);
						if (p.slice)
							for (var v = 0; v < h; v++) q[t +
								v] = p[u + v];
						else
							for (v = 0; v < h; v++) q[t + v] = p.get(u + v);
						q = h
					}
					return q
				};
				r.Sb = () => { Vb(n);
					E(); throw new M(48); };
				n.ab = r;
				return n
			},
			Yb = (a, b, c, d, e, g, k, m, n, r) => {
				function p(h) {
					function u(v) { r && r();
						m || Ub(a, b, v, d, e, n);
						g && g();
						Ta(t) } Xb.ld(h, q, u, () => { k && k();
						Ta(t) }) || u(h) } var q = b ? eb(L(a + "/" + b)) : a,
					t = "cp " + q;
				Sa(t); "string" == typeof c ? qb(c, h => p(h), k) : p(c) },
			T = {},
			Eb, Lb, Zb = void 0;

		function $b() { Zb += 4; return y()[Zb - 4 >> 2] }

		function ac(a) { a = tb[a]; if (!a) throw new M(8); return a }

		function bc(a) { if (C) return U(1, 1, a); if (!noExitRuntime) { K.Zc(); if (A.onExit) A.onExit(a);
				za = !0 } oa(a, new Ya(a)) }

		function cc(a, b) { if (!b && C) throw dc(a), "unwind";
			bc(a) }
		var K = { pb: [], Eb: [], wc: [], ob: {}, Pb: function() { C ? K.Oc() : K.Nc() }, Nc: function() { for (var a = 1 + navigator.hardwareConcurrency; a--;) K.Zb() }, Oc: function() { K.receiveObjectTransfer = K.Uc;
				K.threadInitTLS = K.vc;
				K.setExitStatus = K.uc;
				noExitRuntime = !1 }, uc: function() {}, Zc: function() { for (var a of Object.values(K.ob)) K.sc(a); for (a of K.pb) a.terminate();
				K.pb = [] }, sc: function(a) { var b = a.nb;
				delete K.ob[b];
				K.pb.push(a);
				K.Eb.splice(K.Eb.indexOf(a), 1);
				a.nb = 0;
				ec(b) }, Uc: function() {}, vc: function() { K.wc.forEach(a => a()) }, kc: function(a, b) { a.onmessage = c => { c = c.data; var d = c.cmd;
					a.nb && (K.Ec = a.nb); if (c.targetThread && c.targetThread != fc()) { var e = K.ob[c.nd];
						e ? e.postMessage(c, c.transferList) : B('Internal error! Worker sent a message "' + d + '" to target pthread ' + c.targetThread + ", but that thread no longer exists!") } else if ("processProxyingQueue" === d) gc(c.queue);
					else if ("spawnThread" === d) $a(c);
					else if ("cleanupThread" === d) Za(c.thread);
					else if ("killThread" === d) c = c.thread, d = K.ob[c], delete K.ob[c], d.terminate(), ec(c), K.Eb.splice(K.Eb.indexOf(d), 1), d.nb = 0;
					else if ("cancelThread" === d) K.ob[c.thread].postMessage({ cmd: "cancel" });
					else if ("loaded" === d) a.loaded = !0, b && b(a), a.Db && (a.Db(), delete a.Db);
					else if ("print" === d) wa("Thread " + c.threadId + ": " + c.text);
					else if ("printErr" === d) B("Thread " + c.threadId + ": " + c.text);
					else if ("alert" === d) alert("Thread " + c.threadId + ": " + c.text);
					else if ("setimmediate" === c.target) a.postMessage(c);
					else if ("onAbort" === d) { if (A.onAbort) A.onAbort(c.arg) } else d && B("worker sent an unknown command " + d);
					K.Ec = void 0 };
				a.onerror = c => { B("worker sent an error! " + c.filename + ":" + c.lineno + ": " + c.message); throw c; };
				a.postMessage({ cmd: "load", urlOrBlob: A.mainScriptUrlOrBlob || _scriptDir, wasmMemory: l, wasmModule: ya }) }, Zb: function() { var a = sa("rapfi-multi.worker.js");
				K.pb.push(new Worker(a)) }, Jc: function() { 0 == K.pb.length && (K.Zb(), K.kc(K.pb[0])); return K.pb.pop() } };
		A.PThread = K;

		function Na(a) { for (; 0 < a.length;) a.shift()(A) }

		function hc(a) { var b = V();
			a = a();
			W(b); return a }
		A.establishStackSpace = function() { var a = fc(),
				b = y()[a + 44 >> 2];
			a = y()[a + 48 >> 2];
			ic(b, b - a);
			W(b) };

		function dc(a) { if (C) return U(2, 0, a); try { cc(a) } catch (b) { b instanceof Ya || "unwind" == b || oa(1, b) } }
		var jc = [];

		function X(a) { var b = jc[a];
			b || (a >= jc.length && (jc.length = a + 1), jc[a] = b = Ga.get(a)); return b } A.invokeEntryPoint = function(a, b) { a = X(a)(b);
			noExitRuntime ? K.uc(a) : kc(a) };

		function lc(a, b) { f().set(a, b) }
		var mc = [],
			nc = 0,
			oc = 0;

		function pc(a) { this.yb = a;
			this.eb = a - 24;
			this.Mc = function(b) { z()[this.eb + 4 >> 2] = b };
			this.cb = function() { return z()[this.eb + 4 >> 2] };
			this.Hc = function(b) { z()[this.eb + 8 >> 2] = b };
			this.Kc = function() { return z()[this.eb + 8 >> 2] };
			this.Ic = function() { y()[this.eb >> 2] = 0 };
			this.Vb = function(b) { b = b ? 1 : 0;
				f()[this.eb + 12 >> 0] = b };
			this.Dc = function() { return 0 != f()[this.eb + 12 >> 0] };
			this.Wb = function(b) { b = b ? 1 : 0;
				f()[this.eb + 13 >> 0] = b };
			this.ic = function() { return 0 != f()[this.eb + 13 >> 0] };
			this.Pb = function(b, c) { this.qb(0);
				this.Mc(b);
				this.Hc(c);
				this.Ic();
				this.Vb(!1);
				this.Wb(!1) };
			this.Mb = function() { Atomics.add(y(), this.eb >> 2, 1) };
			this.Vc = function() { return 1 === Atomics.sub(y(), this.eb >> 2, 1) };
			this.qb = function(b) { z()[this.eb + 16 >> 2] = b };
			this.Ac = function() { return z()[this.eb + 16 >> 2] };
			this.Gc = function() { if (qc(this.cb())) return z()[this.yb >> 2]; var b = this.Ac(); return 0 !== b ? b : this.yb } }

		function rc(a) { return sc((new pc(a)).eb) }

		function tc(a, b, c, d) { return C ? U(3, 1, a, b, c, d) : uc(a, b, c, d) }

		function uc(a, b, c, d) { if ("undefined" == typeof SharedArrayBuffer) return B("Current environment does not support SharedArrayBuffer, pthreads are not available!"), 6; var e = []; if (C && 0 === e.length) return tc(a, b, c, d);
			a = { Yc: c, nb: a, zc: d, dd: e }; return C ? (a.hd = "spawnThread", postMessage(a, e), 0) : $a(a) }

		function vc(a, b, c) { if (C) return U(4, 1, a, b, c);
			Zb = c; try { var d = ac(a); switch (b) {
					case 0:
						var e = $b(); return 0 > e ? -28 : Fb(d, e).rb;
					case 1:
					case 2:
						return 0;
					case 3:
						return d.flags;
					case 4:
						return e = $b(), d.flags |= e, 0;
					case 5:
						return e = $b(), l.buffer != w && x(l.buffer), Ea[e + 0 >> 1] = 2, 0;
					case 6:
					case 7:
						return 0;
					case 16:
					case 8:
						return -28;
					case 9:
						return y()[wc() >> 2] = 28, -1;
					default:
						return -28 } } catch (g) { if ("undefined" == typeof T || !(g instanceof M)) throw g; return -g.lb } }

		function xc(a, b, c) { if (C) return U(5, 1, a, b, c);
			Zb = c; try { var d = ac(a); switch (b) {
					case 21509:
					case 21505:
						return d.fb ? 0 : -59;
					case 21510:
					case 21511:
					case 21512:
					case 21506:
					case 21507:
					case 21508:
						return d.fb ? 0 : -59;
					case 21519:
						if (!d.fb) return -59; var e = $b(); return y()[e >> 2] = 0;
					case 21520:
						return d.fb ? -28 : -59;
					case 21531:
						a = e = $b(); if (!d.ab.Pc) throw new M(59); return d.ab.Pc(d, b, a);
					case 21523:
						return d.fb ? 0 : -59;
					case 21524:
						return d.fb ? 0 : -59;
					default:
						return -28 } } catch (g) { if ("undefined" == typeof T || !(g instanceof M)) throw g; return -g.lb } }

		function yc(a, b, c, d) { if (C) return U(6, 1, a, b, c, d);
			Zb = d; try { b = Ca(b); var e = b; if ("/" === e.charAt(0)) b = e;
				else { var g = -100 === a ? "/" : ac(a).path; if (0 == e.length) throw new M(44);
					b = L(g + "/" + e) } var k = d ? $b() : 0; return Mb(b, c, k).rb } catch (m) { if ("undefined" == typeof T || !(m instanceof M)) throw m; return -m.lb } }

		function zc(a, b) { if (C) return U(7, 1, a, b); try { a = Ca(a);
				a: { try { var c = Q(a, { Fb: !0 }).node; if (!c) throw new M(44); if (!c.$a.ib) throw new M(63); var d = c.$a.ib(c) } catch (g) { if (g && g.node && L(a) !== L(wb(g.node))) { var e = -54; break a } throw g; } y()[b >> 2] = d.Fc;y()[b + 8 >> 2] = d.Qb;y()[b + 12 >> 2] = d.mode;z()[b + 16 >> 2] = d.Tc;y()[b + 20 >> 2] = d.uid;y()[b + 24 >> 2] = d.Lc;y()[b + 28 >> 2] = d.Bb;I = [d.size >>> 0, (H = d.size, 1 <= +Math.abs(H) ? 0 < H ? (Math.min(+Math.floor(H / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((H - +(~~H >>> 0)) / 4294967296) >>> 0 : 0)];y()[b + 40 >> 2] = I[0];y()[b + 44 >> 2] = I[1];y()[b + 48 >> 2] = 4096;y()[b + 52 >> 2] = d.Cc;I = [Math.floor(d.$b.getTime() / 1E3) >>> 0, (H = Math.floor(d.$b.getTime() / 1E3), 1 <= +Math.abs(H) ? 0 < H ? (Math.min(+Math.floor(H / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((H - +(~~H >>> 0)) / 4294967296) >>> 0 : 0)];y()[b + 56 >> 2] = I[0];y()[b + 60 >> 2] = I[1];z()[b + 64 >> 2] = 0;I = [Math.floor(d.oc.getTime() / 1E3) >>> 0, (H = Math.floor(d.oc.getTime() / 1E3), 1 <= +Math.abs(H) ? 0 < H ? (Math.min(+Math.floor(H / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((H - +(~~H >>> 0)) / 4294967296) >>> 0 : 0)];y()[b + 72 >> 2] = I[0];y()[b + 76 >> 2] = I[1];z()[b + 80 >> 2] = 0;I = [Math.floor(d.dc.getTime() / 1E3) >>> 0, (H = Math.floor(d.dc.getTime() / 1E3), 1 <= +Math.abs(H) ? 0 < H ? (Math.min(+Math.floor(H / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((H - +(~~H >>> 0)) / 4294967296) >>> 0 : 0)];y()[b + 88 >> 2] = I[0];y()[b + 92 >> 2] = I[1];z()[b + 96 >> 2] = 0;I = [d.Qb >>> 0, (H = d.Qb, 1 <= +Math.abs(H) ? 0 < H ? (Math.min(+Math.floor(H / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((H - +(~~H >>> 0)) / 4294967296) >>> 0 : 0)];y()[b + 104 >> 2] = I[0];y()[b + 108 >> 2] = I[1];e = 0 }
				return e } catch (g) { if ("undefined" == typeof T || !(g instanceof M)) throw g; return -g.lb } }

		function gc(a) { Atomics.store(y(), a >> 2, 1);
			fc() && Ac(a);
			Atomics.compareExchange(y(), a >> 2, 1, 0) } A.executeNotifiedProxyingQueue = gc;
		var Bc, Cc;
		Cc = C ? () => performance.now() - A.__performance_now_clock_drift : () => performance.now();

		function U(a, b) { var c = arguments.length - 2,
				d = arguments; return hc(() => { for (var e = Dc(8 * c), g = e >> 3, k = 0; k < c; k++) { var m = d[2 + k];
					fa()[g + k] = m } return Ec(a, c, e, b) }) }
		var Fc = [],
			Gc = {};

		function Hc() { if (!Ic) { var a = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: ("object" == typeof navigator && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", _: na || "./this.program" },
					b; for (b in Gc) void 0 === Gc[b] ? delete a[b] : a[b] = Gc[b]; var c = []; for (b in a) c.push(b + "=" + a[b]);
				Ic = c } return Ic }
		var Ic;

		function Jc(a, b) { if (C) return U(8, 1, a, b); var c = 0;
			Hc().forEach(function(d, e) { var g = b + c;
				e = z()[a + 4 * e >> 2] = g; for (g = 0; g < d.length; ++g) f()[e++ >> 0] = d.charCodeAt(g);
				f()[e >> 0] = 0;
				c += d.length + 1 }); return 0 }

		function Kc(a, b) { if (C) return U(9, 1, a, b); var c = Hc();
			z()[a >> 2] = c.length; var d = 0;
			c.forEach(function(e) { d += e.length + 1 });
			z()[b >> 2] = d; return 0 }

		function Lc(a) { if (C) return U(10, 1, a); try { var b = ac(a);
				Nb(b); return 0 } catch (c) { if ("undefined" == typeof T || !(c instanceof M)) throw c; return c.lb } }

		function Mc(a, b, c, d) { if (C) return U(11, 1, a, b, c, d); try { a: { var e = ac(a);a = b; for (var g = b = 0; g < c; g++) { var k = z()[a >> 2],
							m = z()[a + 4 >> 2];
						a += 8; var n = e,
							r = f(),
							p = k,
							q = m,
							t = void 0; if (0 > q || 0 > t) throw new M(28); if (null === n.rb) throw new M(8); if (1 === (n.flags & 2097155)) throw new M(8); if (16384 === (n.node.mode & 61440)) throw new M(31); if (!n.ab.read) throw new M(28); var h = "undefined" != typeof t; if (!h) t = n.position;
						else if (!n.seekable) throw new M(70); var u = n.ab.read(n, r, p, q, t);
						h || (n.position += u); var v = u; if (0 > v) { var G = -1; break a } b += v; if (v < m) break } G = b } z()[d >> 2] = G; return 0 } catch (J) { if ("undefined" == typeof T || !(J instanceof M)) throw J; return J.lb } }

		function Nc(a, b, c, d, e) { if (C) return U(12, 1, a, b, c, d, e); try { b = c + 2097152 >>> 0 < 4194305 - !!b ? (b >>> 0) + 4294967296 * c : NaN; if (isNaN(b)) return 61; var g = ac(a);
				Ob(g, b, d);
				I = [g.position >>> 0, (H = g.position, 1 <= +Math.abs(H) ? 0 < H ? (Math.min(+Math.floor(H / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((H - +(~~H >>> 0)) / 4294967296) >>> 0 : 0)];
				y()[e >> 2] = I[0];
				y()[e + 4 >> 2] = I[1];
				g.Ob && 0 === b && 0 === d && (g.Ob = null); return 0 } catch (k) { if ("undefined" == typeof T || !(k instanceof M)) throw k; return k.lb } }

		function Oc(a, b, c, d) { if (C) return U(13, 1, a, b, c, d); try { a: { var e = ac(a);a = b; for (var g = b = 0; g < c; g++) { var k = z()[a >> 2],
							m = z()[a + 4 >> 2];
						a += 8; var n = Pb(e, f(), k, m); if (0 > n) { var r = -1; break a } b += n } r = b } z()[d >> 2] = r; return 0 } catch (p) { if ("undefined" == typeof T || !(p instanceof M)) throw p; return p.lb } }

		function Pc(a) { return 0 === a % 4 && (0 !== a % 100 || 0 === a % 400) }
		var Qc = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
			Rc = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

		function Sc(a, b, c, d) {
			function e(h, u, v) { for (h = "number" == typeof h ? h.toString() : h || ""; h.length < u;) h = v[0] + h; return h }

			function g(h, u) { return e(h, u, "0") }

			function k(h, u) {
				function v(J) { return 0 > J ? -1 : 0 < J ? 1 : 0 } var G;
				0 === (G = v(h.getFullYear() - u.getFullYear())) && 0 === (G = v(h.getMonth() - u.getMonth())) && (G = v(h.getDate() - u.getDate())); return G }

			function m(h) { switch (h.getDay()) {
					case 0:
						return new Date(h.getFullYear() - 1, 11, 29);
					case 1:
						return h;
					case 2:
						return new Date(h.getFullYear(), 0, 3);
					case 3:
						return new Date(h.getFullYear(), 0, 2);
					case 4:
						return new Date(h.getFullYear(), 0, 1);
					case 5:
						return new Date(h.getFullYear() - 1, 11, 31);
					case 6:
						return new Date(h.getFullYear() - 1, 11, 30) } }

			function n(h) { var u = h.tb; for (h = new Date((new Date(h.ub + 1900, 0, 1)).getTime()); 0 < u;) { var v = h.getMonth(),
						G = (Pc(h.getFullYear()) ? Qc : Rc)[v]; if (u > G - h.getDate()) u -= G - h.getDate() + 1, h.setDate(1), 11 > v ? h.setMonth(v + 1) : (h.setMonth(0), h.setFullYear(h.getFullYear() + 1));
					else { h.setDate(h.getDate() + u); break } } v = new Date(h.getFullYear() + 1, 0, 4);
				u = m(new Date(h.getFullYear(), 0, 4));
				v = m(v); return 0 >= k(u, h) ? 0 >= k(v, h) ? h.getFullYear() + 1 : h.getFullYear() : h.getFullYear() - 1 }
			var r = y()[d + 40 >> 2];
			d = { bd: y()[d >> 2], ad: y()[d + 4 >> 2], Jb: y()[d + 8 >> 2], Xb: y()[d + 12 >> 2], Kb: y()[d + 16 >> 2], ub: y()[d + 20 >> 2], kb: y()[d + 24 >> 2], tb: y()[d + 28 >> 2], od: y()[d + 32 >> 2], $c: y()[d + 36 >> 2], cd: r ? Ca(r) : "" };
			c = Ca(c);
			r = { "%c": "%a %b %d %H:%M:%S %Y", "%D": "%m/%d/%y", "%F": "%Y-%m-%d", "%h": "%b", "%r": "%I:%M:%S %p", "%R": "%H:%M", "%T": "%H:%M:%S", "%x": "%m/%d/%y", "%X": "%H:%M:%S", "%Ec": "%c", "%EC": "%C", "%Ex": "%m/%d/%y", "%EX": "%H:%M:%S", "%Ey": "%y", "%EY": "%Y", "%Od": "%d", "%Oe": "%e", "%OH": "%H", "%OI": "%I", "%Om": "%m", "%OM": "%M", "%OS": "%S", "%Ou": "%u", "%OU": "%U", "%OV": "%V", "%Ow": "%w", "%OW": "%W", "%Oy": "%y" };
			for (var p in r) c = c.replace(new RegExp(p, "g"), r[p]);
			var q = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
				t = "January February March April May June July August September October November December".split(" ");
			r = {
				"%a": function(h) { return q[h.kb].substring(0, 3) },
				"%A": function(h) { return q[h.kb] },
				"%b": function(h) { return t[h.Kb].substring(0, 3) },
				"%B": function(h) { return t[h.Kb] },
				"%C": function(h) { return g((h.ub + 1900) / 100 | 0, 2) },
				"%d": function(h) { return g(h.Xb, 2) },
				"%e": function(h) { return e(h.Xb, 2, " ") },
				"%g": function(h) { return n(h).toString().substring(2) },
				"%G": function(h) { return n(h) },
				"%H": function(h) { return g(h.Jb, 2) },
				"%I": function(h) { h = h.Jb;
					0 == h ? h = 12 : 12 < h && (h -= 12); return g(h, 2) },
				"%j": function(h) { for (var u = 0, v = 0; v <= h.Kb - 1; u += (Pc(h.ub + 1900) ? Qc : Rc)[v++]); return g(h.Xb + u, 3) },
				"%m": function(h) { return g(h.Kb + 1, 2) },
				"%M": function(h) { return g(h.ad, 2) },
				"%n": function() { return "\n" },
				"%p": function(h) { return 0 <= h.Jb && 12 > h.Jb ? "AM" : "PM" },
				"%S": function(h) { return g(h.bd, 2) },
				"%t": function() { return "\t" },
				"%u": function(h) { return h.kb || 7 },
				"%U": function(h) { return g(Math.floor((h.tb + 7 - h.kb) / 7), 2) },
				"%V": function(h) { var u = Math.floor((h.tb + 7 - (h.kb + 6) % 7) / 7);
					2 >= (h.kb + 371 - h.tb - 2) % 7 && u++; if (u) 53 == u && (v = (h.kb + 371 - h.tb) % 7, 4 == v || 3 == v && Pc(h.ub) || (u = 1));
					else { u = 52; var v = (h.kb + 7 - h.tb - 1) % 7;
						(4 == v || 5 == v && Pc(h.ub % 400 - 1)) && u++ } return g(u, 2) },
				"%w": function(h) { return h.kb },
				"%W": function(h) {
					return g(Math.floor((h.tb +
						7 - (h.kb + 6) % 7) / 7), 2)
				},
				"%y": function(h) { return (h.ub + 1900).toString().substring(2) },
				"%Y": function(h) { return h.ub + 1900 },
				"%z": function(h) { h = h.$c; var u = 0 <= h;
					h = Math.abs(h) / 60; return (u ? "+" : "-") + String("0000" + (h / 60 * 100 + h % 60)).slice(-4) },
				"%Z": function(h) { return h.cd },
				"%%": function() { return "%" }
			};
			c = c.replace(/%%/g, "\x00\x00");
			for (p in r) c.includes(p) && (c = c.replace(new RegExp(p, "g"), r[p](d)));
			c = c.replace(/\0\0/g, "%");
			p = fb(c, !1);
			if (p.length > b) return 0;
			lc(p, a);
			return p.length - 1
		}

		function Tc(a, b, c, d) { var e = { string: r => { var p = 0; if (null !== r && void 0 !== r && 0 !== r) { var q = (r.length << 2) + 1,
							t = p = Dc(q);
						Da(r, ba(), t, q) } return p }, array: r => { var p = Dc(r.length);
					lc(r, p); return p } };
			a = A["_" + a]; var g = [],
				k = 0; if (d)
				for (var m = 0; m < d.length; m++) { var n = e[c[m]];
					n ? (0 === k && (k = V()), g[m] = n(d[m])) : g[m] = d[m] } c = a.apply(null, g); return c = function(r) { 0 !== k && W(k); return "string" === b ? Ca(r) : "boolean" === b ? !!r : r }(c) } K.Pb();

		function zb(a, b, c, d) { a || (a = this);
			this.parent = a;
			this.mb = a.mb;
			this.Ab = null;
			this.id = ub++;
			this.name = b;
			this.mode = c;
			this.$a = {};
			this.ab = {};
			this.Bb = d } Object.defineProperties(zb.prototype, { read: { get: function() { return 365 === (this.mode & 365) }, set: function(a) { a ? this.mode |= 365 : this.mode &= -366 } }, write: { get: function() { return 146 === (this.mode & 146) }, set: function(a) { a ? this.mode |= 146 : this.mode &= -147 } }, Rc: { get: function() { return 16384 === (this.mode & 61440) } }, Qc: { get: function() { return 8192 === (this.mode & 61440) } } });
		Qb();
		P = Array(4096);
		Gb(O, "/");
		R("/tmp", 16895, 0);
		R("/home", 16895, 0);
		R("/home/web_user", 16895, 0);
		(() => { R("/dev", 16895, 0);
			ib(259, { read: () => 0, write: (b, c, d, e) => e });
			Hb("/dev/null", 259);
			hb(1280, kb);
			hb(1536, lb);
			Hb("/dev/tty", 1280);
			Hb("/dev/tty1", 1536); var a = db();
			S("/dev", "random", a);
			S("/dev", "urandom", a);
			R("/dev/shm", 16895, 0);
			R("/dev/shm/tmp", 16895, 0) })();
		(() => { R("/proc", 16895, 0); var a = R("/proc/self", 16895, 0);
			R("/proc/self/fd", 16895, 0);
			Gb({ mb: () => { var b = nb(a, "fd", 16895, 73);
					b.$a = { zb: (c, d) => { var e = tb[+d]; if (!e) throw new M(8);
							c = { parent: null, mb: { mc: "fake" }, $a: { Cb: () => e.path } }; return c.parent = c } }; return b } }, "/proc/self/fd") })();
		var Xb;
		A.FS_createPath = Sb;
		A.FS_createDataFile = Ub;
		A.FS_createPreloadedFile = Yb;
		A.FS_unlink = Jb;
		A.FS_createLazyFile = Wb;
		A.FS_createDevice = S;
		var Uc = [null, bc, dc, tc, vc, xc, yc, zc, Jc, Kc, Lc, Mc, Nc, Oc],
			Hd = { m: function(a) { return Vc(a + 24) + 24 }, o: function(a) { a = new pc(a);
					a.Dc() || (a.Vb(!0), nc--);
					a.Wb(!1);
					mc.push(a);
					a.Mb(); return a.Gc() }, p: function() { Y(0); var a = mc.pop(); if (a.Vc() && !a.ic()) { var b = a.Kc();
						b && X(b)(a.yb);
						rc(a.yb) } oc = 0 }, b: function() { var a = oc; if (!a) return Z(0), 0; var b = new pc(a);
					b.qb(a); var c = b.cb(); if (!c) return Z(0), a; for (var d = 0; d < arguments.length; d++) { var e = arguments[d]; if (0 === e || e === c) break; if (Wc(e, c, b.eb + 16)) return Z(e), a } Z(c); return a }, g: function() { var a = oc; if (!a) return Z(0), 0; var b = new pc(a);
					b.qb(a); var c = b.cb(); if (!c) return Z(0), a; for (var d = 0; d < arguments.length; d++) { var e = arguments[d]; if (0 === e || e === c) break; if (Wc(e, c, b.eb + 16)) return Z(e), a } Z(c); return a }, r: function() { var a = oc; if (!a) return Z(0), 0; var b = new pc(a);
					b.qb(a); var c = b.cb(); if (!c) return Z(0), a; for (var d = 0; d < arguments.length; d++) { var e = arguments[d]; if (0 === e || e === c) break; if (Wc(e, c, b.eb + 16)) return Z(e), a } Z(c); return a }, n: rc, K: function() { var a = mc.pop();
					a || E("no exception to throw"); var b = a.yb;
					a.ic() || (mc.push(a), a.Wb(!0), a.Vb(!1), nc++);
					oc = b; throw b; }, q: function(a, b, c) {
					(new pc(a)).Pb(b, c);
					oc = a;
					nc++; throw a; }, ja: function() { return nc }, ra: function(a) { Xc(a, !qa, 1, !pa);
					K.vc() }, O: function(a) { C ? postMessage({ cmd: "cleanupThread", thread: a }) : Za(a) }, na: uc, f: function(a) { oc || (oc = a); throw a; }, M: vc, ia: xc, ka: yc, da: zc, oa: function() { return 2097152 }, sa: function() { return !0 }, ta: function(a, b, c, d) { if (a == b) setTimeout(() => gc(d));
					else if (C) postMessage({ targetThread: a, cmd: "processProxyingQueue", queue: d });
					else { a = K.ob[a]; if (!a) return;
						a.postMessage({ cmd: "processProxyingQueue", queue: d }) } return 1 }, qa: function() { return -1 }, G: function() { E("") }, P: function() { qa || (Bc || (Bc = {}), Bc["Blocking on the main thread is very dangerous, see https://emscripten.org/docs/porting/pthreads.html#blocking-on-the-main-browser-thread"] || (Bc["Blocking on the main thread is very dangerous, see https://emscripten.org/docs/porting/pthreads.html#blocking-on-the-main-browser-thread"] = 1, B("Blocking on the main thread is very dangerous, see https://emscripten.org/docs/porting/pthreads.html#blocking-on-the-main-browser-thread"))) }, w: Cc, U: function(a, b, c) { ba().copyWithin(a, b, b + c) }, ca: function() { return navigator.hardwareConcurrency }, pa: function(a, b, c) { Fc.length = b;
					c >>= 3; for (var d = 0; d < b; d++) Fc[d] = fa()[c + d]; return (0 > a ? Xa[-a - 1] : Uc[a]).apply(null, Fc) }, ma: function(a) { var b = ba().length;
					a >>>= 0; if (a <= b || 1073741824 < a) return !1; for (var c = 1; 4 >= c; c *= 2) { var d = b * (1 + .2 / c);
						d = Math.min(d, a + 100663296); var e = Math;
						d = Math.max(a, d);
						e = e.min.call(e, 1073741824, d + (65536 - d % 65536) % 65536);
						a: { try { l.grow(e - w.byteLength + 65535 >>> 16);
								x(l.buffer); var g = 1; break a } catch (k) {} g = void 0 }
						if (g) return !0 } return !1 }, Q: function() { throw "unwind"; }, fa: Jc, ga: Kc, H: cc, N: Lc, ha: Mc, $: Nc, la: Oc, ba: Yc, aa: Zc, F: $c, d: ad, L: bd, E: cd, c: ed, e: fd, D: gd, J: hd, z: jd, C: kd, v: ld, I: md, B: nd, S: od, T: pd, V: qd, _: rd, W: sd, Z: td, X: ud, R: vd, i: wd, j: xd, h: yd, k: zd, l: Ad, u: Bd, y: Cd, t: Dd, x: Ed, A: Fd, Y: Gd, s: function(a) { return a }, a: l || A.wasmMemory, ea: function(a, b, c, d) { return Sc(a, b, c, d) } };
		(function() {
			function a(e, g) { A.asm = e.exports;
				K.wc.push(A.asm.za);
				Ga = A.asm.ya;
				Ia.unshift(A.asm.ua);
				ya = g; if (!C) { var k = K.pb.length;
					K.pb.forEach(function(m) { K.kc(m, function() {--k || Ta("wasm-instantiate") }) }) } }

			function b(e) { a(e.instance, e.module) }

			function c(e) { return Wa().then(function(g) { return WebAssembly.instantiate(g, d) }).then(function(g) { return g }).then(e, function(g) { B("failed to asynchronously prepare wasm: " + g);
					E(g) }) } var d = { a: Hd };
			C || Sa("wasm-instantiate"); if (A.instantiateWasm) try { return A.instantiateWasm(d, a) } catch (e) { return B("Module.instantiateWasm callback failed with error: " + e), !1 }(function() { return xa || "function" != typeof WebAssembly.instantiateStreaming || Ua() || "function" != typeof fetch ? c(b) : fetch(F, { credentials: "same-origin" }).then(function(e) { return WebAssembly.instantiateStreaming(e, d).then(b, function(g) { B("wasm streaming compile failed: " + g);
						B("falling back to ArrayBuffer instantiation"); return c(b) }) }) })().catch(ka); return {} })();
		A.___wasm_call_ctors = function() { return (A.___wasm_call_ctors = A.asm.ua).apply(null, arguments) };
		A._gomocupLoopOnce = function() { return (A._gomocupLoopOnce = A.asm.va).apply(null, arguments) };
		var sc = A._free = function() { return (sc = A._free = A.asm.wa).apply(null, arguments) },
			Vc = A._malloc = function() { return (Vc = A._malloc = A.asm.xa).apply(null, arguments) };
		A.__emscripten_tls_init = function() { return (A.__emscripten_tls_init = A.asm.za).apply(null, arguments) };
		var fc = A._pthread_self = function() { return (fc = A._pthread_self = A.asm.Aa).apply(null, arguments) },
			wc = A.___errno_location = function() { return (wc = A.___errno_location = A.asm.Ba).apply(null, arguments) },
			Xc = A.__emscripten_thread_init = function() { return (Xc = A.__emscripten_thread_init = A.asm.Ca).apply(null, arguments) };
		A.__emscripten_thread_crashed = function() { return (A.__emscripten_thread_crashed = A.asm.Da).apply(null, arguments) };
		var Ec = A._emscripten_run_in_main_runtime_thread_js = function() { return (Ec = A._emscripten_run_in_main_runtime_thread_js = A.asm.Ea).apply(null, arguments) },
			Ac = A.__emscripten_proxy_execute_task_queue = function() { return (Ac = A.__emscripten_proxy_execute_task_queue = A.asm.Fa).apply(null, arguments) },
			ec = A.__emscripten_thread_free_data = function() { return (ec = A.__emscripten_thread_free_data = A.asm.Ga).apply(null, arguments) },
			kc = A.__emscripten_thread_exit = function() { return (kc = A.__emscripten_thread_exit = A.asm.Ha).apply(null, arguments) },
			Y = A._setThrew = function() { return (Y = A._setThrew = A.asm.Ia).apply(null, arguments) },
			Z = A.setTempRet0 = function() { return (Z = A.setTempRet0 = A.asm.Ja).apply(null, arguments) },
			ic = A._emscripten_stack_set_limits = function() { return (ic = A._emscripten_stack_set_limits = A.asm.Ka).apply(null, arguments) },
			V = A.stackSave = function() { return (V = A.stackSave = A.asm.La).apply(null, arguments) },
			W = A.stackRestore = function() { return (W = A.stackRestore = A.asm.Ma).apply(null, arguments) },
			Dc = A.stackAlloc = function() { return (Dc = A.stackAlloc = A.asm.Na).apply(null, arguments) },
			Wc = A.___cxa_can_catch = function() { return (Wc = A.___cxa_can_catch = A.asm.Oa).apply(null, arguments) },
			qc = A.___cxa_is_pointer_type = function() { return (qc = A.___cxa_is_pointer_type = A.asm.Pa).apply(null, arguments) },
			Id = A.dynCall_iij = function() { return (Id = A.dynCall_iij = A.asm.Qa).apply(null, arguments) },
			Jd = A.dynCall_ji = function() { return (Jd = A.dynCall_ji = A.asm.Ra).apply(null, arguments) },
			Kd = A.dynCall_j = function() { return (Kd = A.dynCall_j = A.asm.Sa).apply(null, arguments) },
			Ld = A.dynCall_iiiiij = function() { return (Ld = A.dynCall_iiiiij = A.asm.Ta).apply(null, arguments) },
			Md = A.dynCall_vij = function() { return (Md = A.dynCall_vij = A.asm.Ua).apply(null, arguments) },
			Nd = A.dynCall_jii = function() { return (Nd = A.dynCall_jii = A.asm.Va).apply(null, arguments) },
			Od = A.dynCall_jiii = function() { return (Od = A.dynCall_jiii = A.asm.Wa).apply(null, arguments) },
			Pd = A.dynCall_iiij = function() { return (Pd = A.dynCall_iiij = A.asm.Xa).apply(null, arguments) },
			Qd = A.dynCall_iiiij = function() { return (Qd = A.dynCall_iiiij = A.asm.Ya).apply(null, arguments) };

		function ad(a, b) { var c = V(); try { return X(a)(b) } catch (d) { W(c); if (d !== d + 0) throw d;
				Y(1, 0) } }

		function ed(a, b, c) { var d = V(); try { return X(a)(b, c) } catch (e) { W(d); if (e !== e + 0) throw e;
				Y(1, 0) } }

		function xd(a, b) { var c = V(); try { X(a)(b) } catch (d) { W(c); if (d !== d + 0) throw d;
				Y(1, 0) } }

		function yd(a, b, c) { var d = V(); try { X(a)(b, c) } catch (e) { W(d); if (e !== e + 0) throw e;
				Y(1, 0) } }

		function fd(a, b, c, d) { var e = V(); try { return X(a)(b, c, d) } catch (g) { W(e); if (g !== g + 0) throw g;
				Y(1, 0) } }

		function $c(a) { var b = V(); try { return X(a)() } catch (c) { W(b); if (c !== c + 0) throw c;
				Y(1, 0) } }

		function zd(a, b, c, d) { var e = V(); try { X(a)(b, c, d) } catch (g) { W(e); if (g !== g + 0) throw g;
				Y(1, 0) } }

		function ld(a, b, c, d, e, g, k) { var m = V(); try { return X(a)(b, c, d, e, g, k) } catch (n) { W(m); if (n !== n + 0) throw n;
				Y(1, 0) } }

		function wd(a) { var b = V(); try { X(a)() } catch (c) { W(b); if (c !== c + 0) throw c;
				Y(1, 0) } }

		function Bd(a, b, c, d, e, g) { var k = V(); try { X(a)(b, c, d, e, g) } catch (m) { W(k); if (m !== m + 0) throw m;
				Y(1, 0) } }

		function bd(a, b, c) { var d = V(); try { return X(a)(b, c) } catch (e) { W(d); if (e !== e + 0) throw e;
				Y(1, 0) } }

		function cd(a, b, c) { var d = V(); try { return X(a)(b, c) } catch (e) { W(d); if (e !== e + 0) throw e;
				Y(1, 0) } }

		function gd(a, b, c, d, e) { var g = V(); try { return X(a)(b, c, d, e) } catch (k) { W(g); if (k !== k + 0) throw k;
				Y(1, 0) } }

		function Ad(a, b, c, d, e) { var g = V(); try { X(a)(b, c, d, e) } catch (k) { W(g); if (k !== k + 0) throw k;
				Y(1, 0) } }

		function jd(a, b, c, d, e, g) { var k = V(); try { return X(a)(b, c, d, e, g) } catch (m) { W(k); if (m !== m + 0) throw m;
				Y(1, 0) } }

		function Cd(a, b, c, d, e, g, k) { var m = V(); try { X(a)(b, c, d, e, g, k) } catch (n) { W(m); if (n !== n + 0) throw n;
				Y(1, 0) } }

		function Yc(a, b) { var c = V(); try { return X(a)(b) } catch (d) { W(c); if (d !== d + 0) throw d;
				Y(1, 0) } }

		function kd(a, b, c, d, e, g) { var k = V(); try { return X(a)(b, c, d, e, g) } catch (m) { W(k); if (m !== m + 0) throw m;
				Y(1, 0) } }

		function hd(a, b, c, d, e, g) { var k = V(); try { return X(a)(b, c, d, e, g) } catch (m) { W(k); if (m !== m + 0) throw m;
				Y(1, 0) } }

		function md(a, b, c, d, e, g, k, m) { var n = V(); try { return X(a)(b, c, d, e, g, k, m) } catch (r) { W(n); if (r !== r + 0) throw r;
				Y(1, 0) } }

		function Dd(a, b, c, d, e, g, k, m) { var n = V(); try { X(a)(b, c, d, e, g, k, m) } catch (r) { W(n); if (r !== r + 0) throw r;
				Y(1, 0) } }

		function nd(a, b, c, d, e, g, k, m, n, r, p, q) { var t = V(); try { return X(a)(b, c, d, e, g, k, m, n, r, p, q) } catch (h) { W(t); if (h !== h + 0) throw h;
				Y(1, 0) } }

		function Ed(a, b, c, d, e, g, k, m, n, r, p) { var q = V(); try { X(a)(b, c, d, e, g, k, m, n, r, p) } catch (t) { W(q); if (t !== t + 0) throw t;
				Y(1, 0) } }

		function Fd(a, b, c, d, e, g, k, m, n, r, p, q, t, h, u, v) { var G = V(); try { X(a)(b, c, d, e, g, k, m, n, r, p, q, t, h, u, v) } catch (J) { W(G); if (J !== J + 0) throw J;
				Y(1, 0) } }

		function Zc(a, b, c) { var d = V(); try { return X(a)(b, c) } catch (e) { W(d); if (e !== e + 0) throw e;
				Y(1, 0) } }

		function rd(a, b, c, d) { var e = V(); try { return Id(a, b, c, d) } catch (g) { W(e); if (g !== g + 0) throw g;
				Y(1, 0) } }

		function td(a, b) { var c = V(); try { return Jd(a, b) } catch (d) { W(c); if (d !== d + 0) throw d;
				Y(1, 0) } }

		function Gd(a, b, c, d) { var e = V(); try { Md(a, b, c, d) } catch (g) { W(e); if (g !== g + 0) throw g;
				Y(1, 0) } }

		function ud(a, b, c) { var d = V(); try { return Nd(a, b, c) } catch (e) { W(d); if (e !== e + 0) throw e;
				Y(1, 0) } }

		function sd(a) { var b = V(); try { return Kd(a) } catch (c) { W(b); if (c !== c + 0) throw c;
				Y(1, 0) } }

		function qd(a, b, c, d, e) { var g = V(); try { return Pd(a, b, c, d, e) } catch (k) { W(g); if (k !== k + 0) throw k;
				Y(1, 0) } }

		function pd(a, b, c, d, e, g) { var k = V(); try { return Qd(a, b, c, d, e, g) } catch (m) { W(k); if (m !== m + 0) throw m;
				Y(1, 0) } }

		function od(a, b, c, d, e, g, k) { var m = V(); try { return Ld(a, b, c, d, e, g, k) } catch (n) { W(m); if (n !== n + 0) throw n;
				Y(1, 0) } }

		function vd(a, b, c, d) { var e = V(); try { return Od(a, b, c, d) } catch (g) { W(e); if (g !== g + 0) throw g;
				Y(1, 0) } } A.addRunDependency = Sa;
		A.removeRunDependency = Ta;
		A.FS_createPath = Sb;
		A.FS_createDataFile = Ub;
		A.FS_createPreloadedFile = Yb;
		A.FS_createLazyFile = Wb;
		A.FS_createDevice = S;
		A.FS_unlink = Jb;
		A.keepRuntimeAlive = function() { return noExitRuntime };
		A.wasmMemory = l;
		A.cwrap = function(a, b, c, d) { c = c || []; var e = c.every(g => "number" === g || "boolean" === g); return "string" !== b && e && !d ? A["_" + a] : function() { return Tc(a, b, c, arguments) } };
		A.ExitStatus = Ya;
		A.PThread = K;
		var Rd;
		Ra = function Sd() { Rd || Td();
			Rd || (Ra = Sd) };

		function Td() {
			function a() { if (!Rd && (Rd = !0, A.calledRun = !0, !za)) { Ka();
					ja(A); if (A.onRuntimeInitialized) A.onRuntimeInitialized(); if (!C) { if (A.postRun)
							for ("function" == typeof A.postRun && (A.postRun = [A.postRun]); A.postRun.length;) { var b = A.postRun.shift();
								Ja.unshift(b) } Na(Ja) } } } if (!(0 < Pa))
				if (C) ja(A), Ka(), postMessage({ cmd: "loaded" });
				else { if (A.preRun)
						for ("function" == typeof A.preRun && (A.preRun = [A.preRun]); A.preRun.length;) Oa();
					Na(Ha);
					0 < Pa || (A.setStatus ? (A.setStatus("Running..."), setTimeout(function() { setTimeout(function() { A.setStatus("") }, 1);
						a() }, 1)) : a()) } }
		if (A.preInit)
			for ("function" == typeof A.preInit && (A.preInit = [A.preInit]); 0 < A.preInit.length;) A.preInit.pop()();
		Td();
		return Rapfi.ready
	});
})();
if (typeof exports === 'object' && typeof module === 'object')
	module.exports = Rapfi;
else if (typeof define === 'function' && define['amd'])
	define([], function() { return Rapfi; });
else if (typeof exports === 'object')
	exports["Rapfi"] = Rapfi;