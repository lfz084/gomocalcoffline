var Rapfi = (() => {
	var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
	return (function(Rapfi) {
		Rapfi = Rapfi || {};
		var f;
		f || (f = typeof Rapfi !== 'undefined' ? Rapfi : {});
		var ba, ca;
		f.ready = new Promise(function(a, b) {
			ba = a;
			ca = b
		});
		f.pb || (f.pb = 0);
		f.pb++;
		f.ENVIRONMENT_IS_PTHREAD || function(a) {
			function b(n, r, m) {
				var q = new XMLHttpRequest;
				q.open("GET", n, !0);
				q.responseType = "arraybuffer";
				q.onprogress = function(u) {
					var h = r;
					u.total && (h = u.total);
					if (u.loaded) {
						q.Ka ? f.Za[n].loaded = u.loaded : (q.Ka = !0, f.Za || (f.Za = {}), f.Za[n] = { loaded: u.loaded, total: h });
						var t = h = u = 0,
							v;
						for (v in f.Za) {
							var D = f.Za[v];
							u += D.total;
							h += D.loaded;
							t++
						}
						u = Math.ceil(u * f.pb / t);
						f.setStatus && f.setStatus("Downloading data... (" + h + "/" + u + ")")
					} else !f.Za && f.setStatus && f.setStatus("Downloading data...")
				};
				q.onerror = function() { throw Error("NetworkError for: " + n); };
				q.onload = function() {
					if (200 == q.status || 304 == q.status || 206 == q.status || 0 == q.status && q.response) m(q.response);
					else throw Error(q.statusText + " : " + q.responseURL);
				};
				q.send(null)
			}

			function c(n) { console.error("package error:", n) }

			function d() {
				function n(u, h, t) {
					this.start = u;
					this.end = h;
					this.audio = t
				}

				function r(u) {
					if (!u) throw "Loading data file failed." + Error().stack;
					if (!(u instanceof ArrayBuffer)) throw "bad input to processPackageData" + Error().stack;
					u = new Uint8Array(u);
					n.prototype.ob = u;
					u = a.files;
					for (var h = 0; h < u.length; ++h) n.prototype.Ka[u[h].filename].onload();
					f.removeRunDependency("datafile_rapfi-single.data")
				}
				n.prototype = {
					Ka: {},
					open: function(u, h) {
						this.name = h;
						this.Ka[h] = this;
						f.addRunDependency("fp " + this.name)
					},
					onload: function() { this.Ua(this.ob.subarray(this.start, this.end)) },
					Ua: function(u) {
						f.FS_createDataFile(this.name, null, u, !0, !0, !0);
						f.removeRunDependency("fp " + this.name);
						this.Ka[this.name] = null
					}
				};
				for (var m = a.files, q = 0; q < m.length; ++q)(new n(m[q].start, m[q].end, m[q].audio || 0)).open("GET", m[q].filename);
				f.addRunDependency("datafile_rapfi-single.data");
				f.Ob || (f.Ob = {});
				f.Ob["rapfi-single.data"] = { uc: !1 };
				p ? (r(p), p = null) : k = r
			}
			"object" === typeof window ? window.encodeURIComponent(window.location.pathname.toString().substring(0, window.location.pathname.toString().lastIndexOf("/")) + "/") : "undefined" === typeof process && "undefined" !== typeof location && encodeURIComponent(location.pathname.toString().substring(0, location.pathname.toString().lastIndexOf("/")) + "/");
			"function" !== typeof f.locateFilePackage || f.locateFile || (f.locateFile = f.locateFilePackage, l("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)"));
			var e = f.locateFile ? f.locateFile("rapfi-single.data", "") : "rapfi-single.data",
				g = a.remote_package_size,
				k = null,
				p = f.getPreloadedPackage ? f.getPreloadedPackage(e, g) : null;
			p || b(e, g, function(n) { k ? (k(n), k = null) : p = n }, c);
			f.calledRun ? d() : (f.preRun || (f.preRun = []), f.preRun.push(d))
		}({ files: [{ filename: "/config-210901.toml", start: 0, end: 602 }, { filename: "/config-220723.toml", start: 602, end: 1203 }, { filename: "/config-default.toml", start: 1203, end: 3040 }, { filename: "/model210901.bin", start: 3040, end: 26244 }, { filename: "/model220723.bin", start: 26244, end: 85974 }], remote_package_size: 85974 });
		f.sendCommand = f.sendCommand || null;
		f.receiveStdout = f.receiveStdout || (a => console.log(a));
		f.receiveStderr = f.receiveStderr || (a => console.error(a));
		f.onEngineReady = f.onEngineReady || (() => {});
		f.preRun || (f.preRun = []);
		f.preRun.push(function() {
			var a = "",
				b = 0;
			let c = "",
				d = "";
			da(function() { return b < a.length ? a.charCodeAt(b++) : null }, function(g) { g && 10 != g ? c += String.fromCharCode(g) : (f.receiveStdout(c), c = "") }, function(g) { g && 10 != g ? d += String.fromCharCode(g) : (f.receiveStderr(d), d = "") });
			let e = f.cwrap("gomocupLoopOnce", "number", []);
			f.sendCommand = function(g) {
				a = g + "\n";
				b = 0;
				e()
			}
		});
		f.onRuntimeInitialized = function() { f.onEngineReady() };
		var ea = Object.assign({}, f),
			fa = "./this.program",
			ha = (a, b) => { throw b; },
			ia = "object" == typeof window,
			ja = "function" == typeof importScripts,
			w = "",
			ka, la, ma;
		if (ia || ja) ja ? w = self.location.href : "undefined" != typeof document && document.currentScript && (w = document.currentScript.src), _scriptDir && (w = _scriptDir), 0 !== w.indexOf("blob:") ? w = w.substr(0, w.replace(/[?#].*/, "").lastIndexOf("/") + 1) : w = "", ka = a => {
			var b = new XMLHttpRequest;
			b.open("GET", a, !1);
			b.send(null);
			return b.responseText
		}, ja && (ma = a => {
			var b = new XMLHttpRequest;
			b.open("GET", a, !1);
			b.responseType = "arraybuffer";
			b.send(null);
			return new Uint8Array(b.response)
		}), la = (a, b, c) => {
			var d = new XMLHttpRequest;
			d.open("GET", a, !0);
			d.responseType = "arraybuffer";
			d.onload = () => { 200 == d.status || 0 == d.status && d.response ? b(d.response) : c() };
			d.onerror = c;
			d.send(null)
		};
		var na = f.print || console.log.bind(console),
			l = f.printErr || console.warn.bind(console);
		Object.assign(f, ea);
		ea = null;
		f.thisProgram && (fa = f.thisProgram);
		f.quit && (ha = f.quit);
		var oa;
		f.wasmBinary && (oa = f.wasmBinary);
		var noExitRuntime = f.noExitRuntime || !0;
		"object" != typeof WebAssembly && x("no native wasm support detected");
		var pa, qa = !1,
			ra = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0;

		function sa(a, b) {
			for (var c = b + NaN, d = b; a[d] && !(d >= c);) ++d;
			if (16 < d - b && a.buffer && ra) return ra.decode(a.subarray(b, d));
			for (c = ""; b < d;) {
				var e = a[b++];
				if (e & 128) {
					var g = a[b++] & 63;
					if (192 == (e & 224)) c += String.fromCharCode((e & 31) << 6 | g);
					else {
						var k = a[b++] & 63;
						e = 224 == (e & 240) ? (e & 15) << 12 | g << 6 | k : (e & 7) << 18 | g << 12 | k << 6 | a[b++] & 63;
						65536 > e ? c += String.fromCharCode(e) : (e -= 65536, c += String.fromCharCode(55296 | e >> 10, 56320 | e & 1023))
					}
				} else c += String.fromCharCode(e)
			}
			return c
		}

		function ta(a) { return a ? sa(ua, a) : "" }

		function va(a, b, c, d) {
			if (!(0 < d)) return 0;
			var e = c;
			d = c + d - 1;
			for (var g = 0; g < a.length; ++g) {
				var k = a.charCodeAt(g);
				if (55296 <= k && 57343 >= k) {
					var p = a.charCodeAt(++g);
					k = 65536 + ((k & 1023) << 10) | p & 1023
				}
				if (127 >= k) {
					if (c >= d) break;
					b[c++] = k
				} else {
					if (2047 >= k) {
						if (c + 1 >= d) break;
						b[c++] = 192 | k >> 6
					} else {
						if (65535 >= k) {
							if (c + 2 >= d) break;
							b[c++] = 224 | k >> 12
						} else {
							if (c + 3 >= d) break;
							b[c++] = 240 | k >> 18;
							b[c++] = 128 | k >> 12 & 63
						}
						b[c++] = 128 | k >> 6 & 63
					}
					b[c++] = 128 | k & 63
				}
			}
			b[c] = 0;
			return c - e
		}
		var wa, y, ua, xa, z, A;

		function ya() {
			var a = pa.buffer;
			wa = a;
			f.HEAP8 = y = new Int8Array(a);
			f.HEAP16 = xa = new Int16Array(a);
			f.HEAP32 = z = new Int32Array(a);
			f.HEAPU8 = ua = new Uint8Array(a);
			f.HEAPU16 = new Uint16Array(a);
			f.HEAPU32 = A = new Uint32Array(a);
			f.HEAPF32 = new Float32Array(a);
			f.HEAPF64 = new Float64Array(a)
		}
		var za, Aa = [],
			Ba = [],
			Ca = [];

		function Da() {
			var a = f.preRun.shift();
			Aa.unshift(a)
		}
		var B = 0,
			Ea = null,
			Fa = null;

		function Ga() {
			B++;
			f.monitorRunDependencies && f.monitorRunDependencies(B)
		}

		function Ha() {
			B--;
			f.monitorRunDependencies && f.monitorRunDependencies(B);
			if (0 == B && (null !== Ea && (clearInterval(Ea), Ea = null), Fa)) {
				var a = Fa;
				Fa = null;
				a()
			}
		}

		function x(a) {
			if (f.onAbort) f.onAbort(a);
			a = "Aborted(" + a + ")";
			l(a);
			qa = !0;
			a = new WebAssembly.RuntimeError(a + ". Build with -sASSERTIONS for more info.");
			ca(a);
			throw a;
		}

		function Ia() { return C.startsWith("data:application/octet-stream;base64,") }
		var C;
		C = "rapfi-single.wasm";
		if (!Ia()) {
			var Ja = C;
			C = f.locateFile ? f.locateFile(Ja, w) : w + Ja
		}

		function Ka() { var a = C; try { if (a == C && oa) return new Uint8Array(oa); if (ma) return ma(a); throw "both async and sync fetching of the wasm failed"; } catch (b) { x(b) } }

		function La() { return oa || !ia && !ja || "function" != typeof fetch ? Promise.resolve().then(function() { return Ka() }) : fetch(C, { credentials: "same-origin" }).then(function(a) { if (!a.ok) throw "failed to load wasm binary file at '" + C + "'"; return a.arrayBuffer() }).catch(function() { return Ka() }) }
		var E, F;

		function Ma(a) {
			this.name = "ExitStatus";
			this.message = "Program terminated with exit(" + a + ")";
			this.status = a
		}

		function Na(a) { for (; 0 < a.length;) a.shift()(f) }
		var Oa = [],
			Pa = 0,
			H = 0;

		function I(a) {
			this.bb = a;
			this.La = a - 24;
			this.Yb = function(b) { A[this.La + 4 >> 2] = b };
			this.Ka = function() { return A[this.La + 4 >> 2] };
			this.Wb = function(b) { A[this.La + 8 >> 2] = b };
			this.dc = function() { return A[this.La + 8 >> 2] };
			this.Xb = function() { z[this.La >> 2] = 0 };
			this.wb = function(b) { y[this.La + 12 >> 0] = b ? 1 : 0 };
			this.Tb = function() { return 0 != y[this.La + 12 >> 0] };
			this.xb = function(b) { y[this.La + 13 >> 0] = b ? 1 : 0 };
			this.Ib = function() { return 0 != y[this.La + 13 >> 0] };
			this.Vb = function(b, c) {
				this.Ua(0);
				this.Yb(b);
				this.Wb(c);
				this.Xb();
				this.wb(!1);
				this.xb(!1)
			};
			this.ob = function() { z[this.La >> 2] += 1 };
			this.lc = function() {
				var b = z[this.La >> 2];
				z[this.La >> 2] = b - 1;
				return 1 === b
			};
			this.Ua = function(b) { A[this.La + 16 >> 2] = b };
			this.Sb = function() { return A[this.La + 16 >> 2] };
			this.Ub = function() { if (Qa(this.Ka())) return A[this.bb >> 2]; var b = this.Sb(); return 0 !== b ? b : this.bb }
		}

		function Ra(a) { return Sa((new I(a)).La) }
		var Ta = [];

		function K(a) {
			var b = Ta[a];
			b || (a >= Ta.length && (Ta.length = a + 1), Ta[a] = b = za.get(a));
			return b
		}
		var Ua = (a, b) => {
				for (var c = 0, d = a.length - 1; 0 <= d; d--) { var e = a[d]; "." === e ? a.splice(d, 1) : ".." === e ? (a.splice(d, 1), c++) : c && (a.splice(d, 1), c--) }
				if (b)
					for (; c; c--) a.unshift("..");
				return a
			},
			L = a => {
				var b = "/" === a.charAt(0),
					c = "/" === a.substr(-1);
				(a = Ua(a.split("/").filter(d => !!d), !b).join("/")) || b || (a = ".");
				a && c && (a += "/");
				return (b ? "/" : "") + a
			},
			Va = a => {
				var b = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(a).slice(1);
				a = b[0];
				b = b[1];
				if (!a && !b) return ".";
				b && (b = b.substr(0, b.length - 1));
				return a + b
			},
			Wa = a => {
				if ("/" === a) return "/";
				a = L(a);
				a = a.replace(/\/$/, "");
				var b = a.lastIndexOf("/");
				return -1 === b ? a : a.substr(b + 1)
			};

		function Xa() { if ("object" == typeof crypto && "function" == typeof crypto.getRandomValues) { var a = new Uint8Array(1); return () => { crypto.getRandomValues(a); return a[0] } } return () => x("randomDevice") }

		function Ya() {
			for (var a = "", b = !1, c = arguments.length - 1; - 1 <= c && !b; c--) {
				b = 0 <= c ? arguments[c] : "/";
				if ("string" != typeof b) throw new TypeError("Arguments to path.resolve must be strings");
				if (!b) return "";
				a = b + "/" + a;
				b = "/" === b.charAt(0)
			}
			a = Ua(a.split("/").filter(d => !!d), !b).join("/");
			return (b ? "/" : "") + a || "."
		}

		function Za(a, b) {
			for (var c = 0, d = 0; d < a.length; ++d) {
				var e = a.charCodeAt(d);
				127 >= e ? c++ : 2047 >= e ? c += 2 : 55296 <= e && 57343 >= e ? (c += 4, ++d) : c += 3
			}
			c = Array(c + 1);
			a = va(a, c, 0, c.length);
			b && (c.length = a);
			return c
		}
		var $a = [];

		function ab(a, b) {
			$a[a] = { input: [], Na: [], ab: b };
			bb(a, cb)
		}
		var cb = {
				open: function(a) {
					var b = $a[a.node.fb];
					if (!b) throw new M(43);
					a.Ma = b;
					a.seekable = !1
				},
				close: function(a) { a.Ma.ab.ib(a.Ma) },
				ib: function(a) { a.Ma.ab.ib(a.Ma) },
				read: function(a, b, c, d) {
					if (!a.Ma || !a.Ma.ab.Hb) throw new M(60);
					for (var e = 0, g = 0; g < d; g++) {
						try { var k = a.Ma.ab.Hb(a.Ma) } catch (p) { throw new M(29); }
						if (void 0 === k && 0 === e) throw new M(6);
						if (null === k || void 0 === k) break;
						e++;
						b[c + g] = k
					}
					e && (a.node.timestamp = Date.now());
					return e
				},
				write: function(a, b, c, d) { if (!a.Ma || !a.Ma.ab.ub) throw new M(60); try { for (var e = 0; e < d; e++) a.Ma.ab.ub(a.Ma, b[c + e]) } catch (g) { throw new M(29); } d && (a.node.timestamp = Date.now()); return e }
			},
			db = {
				Hb: function(a) {
					if (!a.input.length) {
						var b = null;
						"undefined" != typeof window && "function" == typeof window.prompt ? (b = window.prompt("Input: "), null !== b && (b += "\n")) : "function" == typeof readline && (b = readline(), null !== b && (b += "\n"));
						if (!b) return null;
						a.input = Za(b, !0)
					}
					return a.input.shift()
				},
				ub: function(a, b) { null === b || 10 === b ? (na(sa(a.Na, 0)), a.Na = []) : 0 != b && a.Na.push(b) },
				ib: function(a) { a.Na && 0 < a.Na.length && (na(sa(a.Na, 0)), a.Na = []) }
			},
			eb = { ub: function(a, b) { null === b || 10 === b ? (l(sa(a.Na, 0)), a.Na = []) : 0 != b && a.Na.push(b) }, ib: function(a) { a.Na && 0 < a.Na.length && (l(sa(a.Na, 0)), a.Na = []) } },
			N = {
				Qa: null,
				Ta: function() { return N.createNode(null, "/", 16895, 0) },
				createNode: function(a, b, c, d) {
					if (24576 === (c & 61440) || 4096 === (c & 61440)) throw new M(63);
					N.Qa || (N.Qa = { dir: { node: { Pa: N.Ha.Pa, Oa: N.Ha.Oa, cb: N.Ha.cb, jb: N.Ha.jb, Qb: N.Ha.Qb, nb: N.Ha.nb, Rb: N.Ha.Rb, Pb: N.Ha.Pb, kb: N.Ha.kb }, stream: { Wa: N.Ia.Wa } }, file: { node: { Pa: N.Ha.Pa, Oa: N.Ha.Oa }, stream: { Wa: N.Ia.Wa, read: N.Ia.read, write: N.Ia.write, zb: N.Ia.zb, tb: N.Ia.tb, Mb: N.Ia.Mb } }, link: { node: { Pa: N.Ha.Pa, Oa: N.Ha.Oa, gb: N.Ha.gb }, stream: {} }, Cb: { node: { Pa: N.Ha.Pa, Oa: N.Ha.Oa }, stream: fb } });
					c = gb(a, b, c, d);
					16384 === (c.mode & 61440) ? (c.Ha = N.Qa.dir.node, c.Ia = N.Qa.dir.stream, c.Ga = {}) : 32768 === (c.mode & 61440) ? (c.Ha = N.Qa.file.node, c.Ia = N.Qa.file.stream, c.Ja = 0, c.Ga = null) : 40960 === (c.mode & 61440) ? (c.Ha = N.Qa.link.node, c.Ia = N.Qa.link.stream) : 8192 === (c.mode & 61440) && (c.Ha = N.Qa.Cb.node, c.Ia = N.Qa.Cb.stream);
					c.timestamp = Date.now();
					a && (a.Ga[b] = c, a.timestamp = c.timestamp);
					return c
				},
				vc: function(a) { return a.Ga ? a.Ga.subarray ? a.Ga.subarray(0, a.Ja) : new Uint8Array(a.Ga) : new Uint8Array(0) },
				Fb: function(a, b) {
					var c = a.Ga ? a.Ga.length : 0;
					c >= b || (b = Math.max(b, c * (1048576 > c ? 2 : 1.125) >>> 0), 0 != c && (b = Math.max(b, 256)), c = a.Ga, a.Ga = new Uint8Array(b), 0 < a.Ja && a.Ga.set(c.subarray(0, a.Ja), 0))
				},
				mc: function(a, b) {
					if (a.Ja != b)
						if (0 == b) a.Ga = null, a.Ja = 0;
						else {
							var c = a.Ga;
							a.Ga = new Uint8Array(b);
							c && a.Ga.set(c.subarray(0, Math.min(b, a.Ja)));
							a.Ja = b
						}
				},
				Ha: {
					Pa: function(a) {
						var b = {};
						b.cc = 8192 === (a.mode & 61440) ? a.id : 1;
						b.rb = a.id;
						b.mode = a.mode;
						b.kc = 1;
						b.uid = 0;
						b.ec = 0;
						b.fb = a.fb;
						16384 === (a.mode & 61440) ? b.size = 4096 : 32768 === (a.mode & 61440) ? b.size = a.Ja : 40960 === (a.mode & 61440) ? b.size = a.link.length : b.size = 0;
						b.Ab = new Date(a.timestamp);
						b.Nb = new Date(a.timestamp);
						b.Eb = new Date(a.timestamp);
						b.ac = 4096;
						b.bc = Math.ceil(b.size / b.ac);
						return b
					},
					Oa: function(a, b) {
						void 0 !== b.mode && (a.mode = b.mode);
						void 0 !== b.timestamp && (a.timestamp = b.timestamp);
						void 0 !== b.size && N.mc(a, b.size)
					},
					cb: function() { throw hb[44]; },
					jb: function(a, b, c, d) { return N.createNode(a, b, c, d) },
					Qb: function(a, b, c) {
						if (16384 === (a.mode & 61440)) {
							try { var d = O(b, c) } catch (g) {}
							if (d)
								for (var e in d.Ga) throw new M(55);
						}
						delete a.parent.Ga[a.name];
						a.parent.timestamp = Date.now();
						a.name = c;
						b.Ga[c] = a;
						b.timestamp = a.parent.timestamp;
						a.parent = b
					},
					nb: function(a, b) {
						delete a.Ga[b];
						a.timestamp = Date.now()
					},
					Rb: function(a, b) {
						var c = O(a, b),
							d;
						for (d in c.Ga) throw new M(55);
						delete a.Ga[b];
						a.timestamp = Date.now()
					},
					Pb: function(a) {
						var b = [".", ".."],
							c;
						for (c in a.Ga) a.Ga.hasOwnProperty(c) && b.push(c);
						return b
					},
					kb: function(a, b, c) {
						a = N.createNode(a, b, 41471, 0);
						a.link = c;
						return a
					},
					gb: function(a) { if (40960 !== (a.mode & 61440)) throw new M(28); return a.link }
				},
				Ia: {
					read: function(a, b, c, d, e) {
						var g = a.node.Ga;
						if (e >= a.node.Ja) return 0;
						a = Math.min(a.node.Ja - e, d);
						if (8 < a && g.subarray) b.set(g.subarray(e, e + a), c);
						else
							for (d = 0; d < a; d++) b[c + d] = g[e + d];
						return a
					},
					write: function(a, b, c, d, e, g) {
						b.buffer === y.buffer && (g = !1);
						if (!d) return 0;
						a = a.node;
						a.timestamp = Date.now();
						if (b.subarray && (!a.Ga || a.Ga.subarray)) { if (g) return a.Ga = b.subarray(c, c + d), a.Ja = d; if (0 === a.Ja && 0 === e) return a.Ga = b.slice(c, c + d), a.Ja = d; if (e + d <= a.Ja) return a.Ga.set(b.subarray(c, c + d), e), d } N.Fb(a, e + d);
						if (a.Ga.subarray && b.subarray) a.Ga.set(b.subarray(c, c + d), e);
						else
							for (g = 0; g < d; g++) a.Ga[e + g] = b[c + g];
						a.Ja = Math.max(a.Ja, e + d);
						return d
					},
					Wa: function(a, b, c) { 1 === c ? b += a.position : 2 === c && 32768 === (a.node.mode & 61440) && (b += a.node.Ja); if (0 > b) throw new M(28); return b },
					zb: function(a, b, c) {
						N.Fb(a.node, b + c);
						a.node.Ja = Math.max(a.node.Ja, b + c)
					},
					tb: function(a, b, c, d, e) {
						if (32768 !== (a.node.mode & 61440)) throw new M(43);
						a = a.node.Ga;
						if (e & 2 || a.buffer !== wa) {
							if (0 < c || c + b < a.length) a.subarray ? a = a.subarray(c, c + b) : a = Array.prototype.slice.call(a, c, c + b);
							c = !0;
							x();
							b = void 0;
							if (!b) throw new M(48);
							y.set(a, b)
						} else c = !1, b = a.byteOffset;
						return { La: b, tc: c }
					},
					Mb: function(a, b, c, d, e) {
						if (32768 !== (a.node.mode & 61440)) throw new M(43);
						if (e & 2) return 0;
						N.Ia.write(a, b, 0, d, c, !1);
						return 0
					}
				}
			};

		function ib(a, b, c) {
			var d = "al " + a;
			la(a, e => {
				e || x('Loading data file "' + a + '" failed (no arrayBuffer).');
				b(new Uint8Array(e));
				d && Ha(d)
			}, () => {
				if (c) c();
				else throw 'Loading data file "' + a + '" failed.';
			});
			d && Ga(d)
		}
		var jb = null,
			kb = {},
			lb = [],
			mb = 1,
			P = null,
			nb = !0,
			M = null,
			hb = {},
			Q = (a, b = {}) => {
				a = Ya("/", a);
				if (!a) return { path: "", node: null };
				b = Object.assign({ Gb: !0, vb: 0 }, b);
				if (8 < b.vb) throw new M(32);
				a = Ua(a.split("/").filter(k => !!k), !1);
				for (var c = jb, d = "/", e = 0; e < a.length; e++) {
					var g = e === a.length - 1;
					if (g && b.parent) break;
					c = O(c, a[e]);
					d = L(d + "/" + a[e]);
					c.eb && (!g || g && b.Gb) && (c = c.eb.root);
					if (!g || b.hb)
						for (g = 0; 40960 === (c.mode & 61440);)
							if (c = ob(d), d = Ya(Va(d), c), c = Q(d, { vb: b.vb + 1 }).node, 40 < g++) throw new M(32);
				}
				return { path: d, node: c }
			},
			R = a => {
				for (var b;;) {
					if (a === a.parent) return a = a.Ta.Lb, b ? "/" !== a[a.length - 1] ? a + "/" + b : a + b : a;
					b = b ? a.name + "/" + b : a.name;
					a = a.parent
				}
			},
			pb = (a, b) => { for (var c = 0, d = 0; d < b.length; d++) c = (c << 5) - c + b.charCodeAt(d) | 0; return (a + c >>> 0) % P.length },
			O = (a, b) => { var c; if (c = (c = qb(a, "x")) ? c : a.Ha.cb ? 0 : 2) throw new M(c, a); for (c = P[pb(a.id, b)]; c; c = c.$a) { var d = c.name; if (c.parent.id === a.id && d === b) return c } return a.Ha.cb(a, b) },
			gb = (a, b, c, d) => {
				a = new rb(a, b, c, d);
				b = pb(a.parent.id, a.name);
				a.$a = P[b];
				return P[b] = a
			},
			sb = { r: 0, "r+": 2, w: 577, "w+": 578, a: 1089, "a+": 1090 },
			tb = a => {
				var b = ["r", "w", "rw"][a & 3];
				a & 512 && (b += "w");
				return b
			},
			qb = (a, b) => { if (nb) return 0; if (!b.includes("r") || a.mode & 292) { if (b.includes("w") && !(a.mode & 146) || b.includes("x") && !(a.mode & 73)) return 2 } else return 2; return 0 },
			ub = (a, b) => { try { return O(a, b), 20 } catch (c) {} return qb(a, "wx") },
			vb = (a = 0) => {
				for (; 4096 >= a; a++)
					if (!lb[a]) return a;
				throw new M(33);
			},
			xb = (a, b) => {
				wb || (wb = function() { this.Ka = {} }, wb.prototype = {}, Object.defineProperties(wb.prototype, { object: { get: function() { return this.node }, set: function(c) { this.node = c } }, flags: { get: function() { return this.Ka.flags }, set: function(c) { this.Ka.flags = c } }, position: { get: function() { return this.Ka.position }, set: function(c) { this.Ka.position = c } } }));
				a = Object.assign(new wb, a);
				b = vb(b);
				a.Va = b;
				return lb[b] = a
			},
			fb = {
				open: a => {
					a.Ia = kb[a.node.fb].Ia;
					a.Ia.open && a.Ia.open(a)
				},
				Wa: () => { throw new M(70); }
			},
			bb = (a, b) => { kb[a] = { Ia: b } },
			yb = (a, b) => {
				var c = "/" === b,
					d = !b;
				if (c && jb) throw new M(10);
				if (!c && !d) {
					var e = Q(b, { Gb: !1 });
					b = e.path;
					e = e.node;
					if (e.eb) throw new M(10);
					if (16384 !== (e.mode & 61440)) throw new M(54);
				}
				b = { type: a, xc: {}, Lb: b, jc: [] };
				a = a.Ta(b);
				a.Ta = b;
				b.root = a;
				c ? jb = a : e && (e.eb = b, e.Ta && e.Ta.jc.push(b))
			},
			S = (a, b, c) => {
				var d = Q(a, { parent: !0 }).node;
				a = Wa(a);
				if (!a || "." === a || ".." === a) throw new M(28);
				var e = ub(d, a);
				if (e) throw new M(e);
				if (!d.Ha.jb) throw new M(63);
				return d.Ha.jb(d, a, b, c)
			},
			zb = (a, b, c) => { "undefined" == typeof c && (c = b, b = 438); return S(a, b | 8192, c) },
			Ab = (a, b) => {
				if (!Ya(a)) throw new M(44);
				var c = Q(b, { parent: !0 }).node;
				if (!c) throw new M(44);
				b = Wa(b);
				var d = ub(c, b);
				if (d) throw new M(d);
				if (!c.Ha.kb) throw new M(63);
				c.Ha.kb(c, b, a)
			},
			Bb = a => {
				var b = Q(a, { parent: !0 }).node;
				if (!b) throw new M(44);
				var c = Wa(a);
				a = O(b, c);
				a: { try { var d = O(b, c) } catch (g) { d = g.Sa; break a } var e = qb(b, "wx");d = e ? e : 16384 === (d.mode & 61440) ? 31 : 0 }
				if (d) throw new M(d);
				if (!b.Ha.nb) throw new M(63);
				if (a.eb) throw new M(10);
				b.Ha.nb(b, c);
				b = pb(a.parent.id, a.name);
				if (P[b] === a) P[b] = a.$a;
				else
					for (b = P[b]; b;) { if (b.$a === a) { b.$a = a.$a; break } b = b.$a }
			},
			ob = a => { a = Q(a).node; if (!a) throw new M(44); if (!a.Ha.gb) throw new M(28); return Ya(R(a.parent), a.Ha.gb(a)) },
			Cb = (a, b) => {
				a = "string" == typeof a ? Q(a, { hb: !0 }).node : a;
				if (!a.Ha.Oa) throw new M(63);
				a.Ha.Oa(a, { mode: b & 4095 | a.mode & -4096, timestamp: Date.now() })
			},
			Eb = (a, b, c) => {
				if ("" === a) throw new M(44);
				if ("string" == typeof b) {
					var d = sb[b];
					if ("undefined" == typeof d) throw Error("Unknown file open mode: " + b);
					b = d
				}
				c = b & 64 ? ("undefined" == typeof c ? 438 : c) & 4095 | 32768 : 0;
				if ("object" == typeof a) var e = a;
				else { a = L(a); try { e = Q(a, { hb: !(b & 131072) }).node } catch (g) {} } d = !1;
				if (b & 64)
					if (e) { if (b & 128) throw new M(20); } else e = S(a, c, 0), d = !0;
				if (!e) throw new M(44);
				8192 === (e.mode & 61440) && (b &= -513);
				if (b & 65536 && 16384 !== (e.mode & 61440)) throw new M(54);
				if (!d && (c = e ? 40960 === (e.mode & 61440) ? 32 : 16384 === (e.mode & 61440) && ("r" !== tb(b) || b & 512) ? 31 : qb(e, tb(b)) : 44)) throw new M(c);
				if (b & 512 && !d) {
					c = e;
					c = "string" == typeof c ? Q(c, { hb: !0 }).node : c;
					if (!c.Ha.Oa) throw new M(63);
					if (16384 === (c.mode & 61440)) throw new M(31);
					if (32768 !== (c.mode & 61440)) throw new M(28);
					if (d = qb(c, "w")) throw new M(d);
					c.Ha.Oa(c, { size: 0, timestamp: Date.now() })
				}
				b &= -131713;
				e = xb({ node: e, path: R(e), flags: b, seekable: !0, position: 0, Ia: e.Ia, sc: [], error: !1 });
				e.Ia.open && e.Ia.open(e);
				!f.logReadFiles || b & 1 || (Db || (Db = {}), a in Db || (Db[a] = 1));
				return e
			},
			Fb = a => {
				if (null === a.Va) throw new M(8);
				a.qb && (a.qb = null);
				try { a.Ia.close && a.Ia.close(a) } catch (b) { throw b; } finally { lb[a.Va] = null } a.Va = null
			},
			Gb = (a, b, c) => {
				if (null === a.Va) throw new M(8);
				if (!a.seekable || !a.Ia.Wa) throw new M(70);
				if (0 != c && 1 != c && 2 != c) throw new M(28);
				a.position = a.Ia.Wa(a, b, c);
				a.sc = []
			},
			Hb = (a, b, c, d, e, g) => {
				if (0 > d || 0 > e) throw new M(28);
				if (null === a.Va) throw new M(8);
				if (0 === (a.flags & 2097155)) throw new M(8);
				if (16384 === (a.node.mode & 61440)) throw new M(31);
				if (!a.Ia.write) throw new M(28);
				a.seekable && a.flags & 1024 && Gb(a, 0, 2);
				var k = "undefined" != typeof e;
				if (!k) e = a.position;
				else if (!a.seekable) throw new M(70);
				b = a.Ia.write(a, b, c, d, e, g);
				k || (a.position += b);
				return b
			},
			Ib = () => {
				M || (M = function(a, b) {
					this.node = b;
					this.nc = function(c) { this.Sa = c };
					this.nc(a);
					this.message = "FS error"
				}, M.prototype = Error(), M.prototype.constructor = M, [44].forEach(a => {
					hb[a] = new M(a);
					hb[a].stack = "<generic error, no stack>"
				}))
			},
			da = (a, b, c) => {
				Jb = !0;
				Ib();
				f.stdin = a || f.stdin;
				f.stdout = b || f.stdout;
				f.stderr = c || f.stderr;
				f.stdin ? T("/dev", "stdin", f.stdin) : Ab("/dev/tty", "/dev/stdin");
				f.stdout ? T("/dev", "stdout", null, f.stdout) : Ab("/dev/tty", "/dev/stdout");
				f.stderr ? T("/dev", "stderr", null, f.stderr) : Ab("/dev/tty1", "/dev/stderr");
				Eb("/dev/stdin", 0);
				Eb("/dev/stdout", 1);
				Eb("/dev/stderr", 1)
			},
			Jb, Kb = (a, b) => {
				var c = 0;
				a && (c |= 365);
				b && (c |= 146);
				return c
			},
			Lb = (a, b) => { a = "string" == typeof a ? a : R(a); for (b = b.split("/").reverse(); b.length;) { var c = b.pop(); if (c) { var d = L(a + "/" + c); try { S(d, 16895, 0) } catch (e) {} a = d } } return d },
			Mb = (a, b, c, d) => {
				a = L(("string" == typeof a ? a : R(a)) + "/" + b);
				c = Kb(c, d);
				return S(a, (void 0 !== c ? c : 438) & 4095 | 32768, 0)
			},
			Nb = (a, b, c, d, e, g) => {
				var k = b;
				a && (a = "string" == typeof a ? a : R(a), k = b ? L(a + "/" + b) : a);
				a = Kb(d, e);
				k = S(k, (void 0 !== a ? a : 438) & 4095 | 32768, 0);
				if (c) {
					if ("string" == typeof c) {
						b = Array(c.length);
						d = 0;
						for (e = c.length; d < e; ++d) b[d] = c.charCodeAt(d);
						c = b
					}
					Cb(k, a | 146);
					b = Eb(k, 577);
					Hb(b, c, 0, c.length, 0, g);
					Fb(b);
					Cb(k, a)
				}
				return k
			},
			T = (a, b, c, d) => {
				a = L(("string" == typeof a ? a : R(a)) + "/" + b);
				b = Kb(!!c, !!d);
				T.Kb || (T.Kb = 64);
				var e = T.Kb++ << 8 | 0;
				bb(e, {
					open: g => { g.seekable = !1 },
					close: () => { d && d.buffer && d.buffer.length && d(10) },
					read: (g, k, p, n) => {
						for (var r = 0, m = 0; m < n; m++) {
							try { var q = c() } catch (u) { throw new M(29); }
							if (void 0 === q && 0 === r) throw new M(6);
							if (null === q || void 0 === q) break;
							r++;
							k[p + m] = q
						}
						r && (g.node.timestamp = Date.now());
						return r
					},
					write: (g, k, p, n) => { for (var r = 0; r < n; r++) try { d(k[p + r]) } catch (m) { throw new M(29); } n && (g.node.timestamp = Date.now()); return r }
				});
				return zb(a, b, e)
			},
			Ob = a => { if (!(a.hc || a.ic || a.link || a.Ga)) { if ("undefined" != typeof XMLHttpRequest) throw Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread."); if (ka) try { a.Ga = Za(ka(a.url), !0), a.Ja = a.Ga.length } catch (b) { throw new M(29); } else throw Error("Cannot load without read() or XMLHttpRequest."); } },
			Pb = (a, b, c, d, e) => {
				function g() {
					this.sb = !1;
					this.Ka = []
				}
				g.prototype.get = function(m) { if (!(m > this.length - 1 || 0 > m)) { var q = m % this.Db; return this.Jb(m / this.Db | 0)[q] } };
				g.prototype.Ua = function(m) { this.Jb = m };
				g.prototype.Bb = function() {
					var m = new XMLHttpRequest;
					m.open("HEAD", c, !1);
					m.send(null);
					if (!(200 <= m.status && 300 > m.status || 304 === m.status)) throw Error("Couldn't load " + c + ". Status: " + m.status);
					var q = Number(m.getResponseHeader("Content-length")),
						u, h = (u = m.getResponseHeader("Accept-Ranges")) && "bytes" === u;
					m = (u = m.getResponseHeader("Content-Encoding")) && "gzip" === u;
					var t = 1048576;
					h || (t = q);
					var v = this;
					v.Ua(D => {
						var G = D * t,
							aa = (D + 1) * t - 1;
						aa = Math.min(aa, q - 1);
						if ("undefined" == typeof v.Ka[D]) {
							var nc = v.Ka;
							if (G > aa) throw Error("invalid range (" + G + ", " + aa + ") or no bytes requested!");
							if (aa > q - 1) throw Error("only " + q + " bytes available! programmer error!");
							var J = new XMLHttpRequest;
							J.open("GET", c, !1);
							q !== t && J.setRequestHeader("Range", "bytes=" + G + "-" + aa);
							J.responseType = "arraybuffer";
							J.overrideMimeType && J.overrideMimeType("text/plain; charset=x-user-defined");
							J.send(null);
							if (!(200 <= J.status && 300 > J.status || 304 === J.status)) throw Error("Couldn't load " + c + ". Status: " + J.status);
							G = void 0 !== J.response ? new Uint8Array(J.response || []) : Za(J.responseText || "", !0);
							nc[D] = G
						}
						if ("undefined" == typeof v.Ka[D]) throw Error("doXHR failed!");
						return v.Ka[D]
					});
					if (m || !q) t = q = 1, t = q = this.Jb(0).length, na("LazyFiles on gzip forces download of the whole file when length is accessed");
					this.$b = q;
					this.Zb = t;
					this.sb = !0
				};
				if ("undefined" != typeof XMLHttpRequest) {
					if (!ja) throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
					var k = new g;
					Object.defineProperties(k, { length: { get: function() { this.sb || this.Bb(); return this.$b } }, Db: { get: function() { this.sb || this.Bb(); return this.Zb } } });
					var p = void 0
				} else p = c, k = void 0;
				var n = Mb(a, b, d, e);
				k ? n.Ga = k : p && (n.Ga = null, n.url = p);
				Object.defineProperties(n, { Ja: { get: function() { return this.Ga.length } } });
				var r = {};
				Object.keys(n.Ia).forEach(m => {
					var q = n.Ia[m];
					r[m] = function() { Ob(n); return q.apply(null, arguments) }
				});
				r.read = (m, q, u, h, t) => {
					Ob(n);
					m = m.node.Ga;
					if (t >= m.length) q = 0;
					else {
						h = Math.min(m.length - t, h);
						if (m.slice)
							for (var v = 0; v < h; v++) q[u +
								v] = m[t + v];
						else
							for (v = 0; v < h; v++) q[u + v] = m.get(t + v);
						q = h
					}
					return q
				};
				r.tb = () => {
					Ob(n);
					x();
					throw new M(48);
				};
				n.Ia = r;
				return n
			},
			Rb = (a, b, c, d, e, g, k, p, n, r) => {
				function m(h) {
					function t(v) {
						r && r();
						p || Nb(a, b, v, d, e, n);
						g && g();
						Ha(u)
					}
					Qb.wc(h, q, t, () => {
						k && k();
						Ha(u)
					}) || t(h)
				}
				var q = b ? Ya(L(a + "/" + b)) : a,
					u = "cp " + q;
				Ga(u);
				"string" == typeof c ? ib(c, h => m(h), k) : m(c)
			},
			U = {},
			wb, Db, Sb = void 0;

		function Tb() { Sb += 4; return z[Sb - 4 >> 2] }

		function V(a) { a = lb[a]; if (!a) throw new M(8); return a }
		var Ub = {};

		function Vb() {
			if (!Wb) {
				var a = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: ("object" == typeof navigator && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", _: fa || "./this.program" },
					b;
				for (b in Ub) void 0 === Ub[b] ? delete a[b] : a[b] = Ub[b];
				var c = [];
				for (b in a) c.push(b + "=" + a[b]);
				Wb = c
			}
			return Wb
		}
		var Wb;

		function Xb(a) { return 0 === a % 4 && (0 !== a % 100 || 0 === a % 400) }
		var Yb = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
			Zb = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

		function $b(a, b, c, d) {
			function e(h, t, v) { for (h = "number" == typeof h ? h.toString() : h || ""; h.length < t;) h = v[0] + h; return h }

			function g(h, t) { return e(h, t, "0") }

			function k(h, t) {
				function v(G) { return 0 > G ? -1 : 0 < G ? 1 : 0 }
				var D;
				0 === (D = v(h.getFullYear() - t.getFullYear())) && 0 === (D = v(h.getMonth() - t.getMonth())) && (D = v(h.getDate() - t.getDate()));
				return D
			}

			function p(h) {
				switch (h.getDay()) {
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
						return new Date(h.getFullYear() - 1, 11, 30)
				}
			}

			function n(h) {
				var t = h.Xa;
				for (h = new Date((new Date(h.Ya + 1900, 0, 1)).getTime()); 0 < t;) {
					var v = h.getMonth(),
						D = (Xb(h.getFullYear()) ? Yb : Zb)[v];
					if (t > D - h.getDate()) t -= D - h.getDate() + 1, h.setDate(1), 11 > v ? h.setMonth(v + 1) : (h.setMonth(0), h.setFullYear(h.getFullYear() + 1));
					else { h.setDate(h.getDate() + t); break }
				}
				v = new Date(h.getFullYear() + 1, 0, 4);
				t = p(new Date(h.getFullYear(), 0, 4));
				v = p(v);
				return 0 >= k(t, h) ? 0 >= k(v, h) ? h.getFullYear() + 1 : h.getFullYear() : h.getFullYear() - 1
			}
			var r = z[d + 40 >> 2];
			d = { qc: z[d >> 2], pc: z[d + 4 >> 2], lb: z[d + 8 >> 2], yb: z[d + 12 >> 2], mb: z[d + 16 >> 2], Ya: z[d + 20 >> 2], Ra: z[d + 24 >> 2], Xa: z[d + 28 >> 2], yc: z[d + 32 >> 2], oc: z[d + 36 >> 2], rc: r ? ta(r) : "" };
			c = ta(c);
			r = { "%c": "%a %b %d %H:%M:%S %Y", "%D": "%m/%d/%y", "%F": "%Y-%m-%d", "%h": "%b", "%r": "%I:%M:%S %p", "%R": "%H:%M", "%T": "%H:%M:%S", "%x": "%m/%d/%y", "%X": "%H:%M:%S", "%Ec": "%c", "%EC": "%C", "%Ex": "%m/%d/%y", "%EX": "%H:%M:%S", "%Ey": "%y", "%EY": "%Y", "%Od": "%d", "%Oe": "%e", "%OH": "%H", "%OI": "%I", "%Om": "%m", "%OM": "%M", "%OS": "%S", "%Ou": "%u", "%OU": "%U", "%OV": "%V", "%Ow": "%w", "%OW": "%W", "%Oy": "%y" };
			for (var m in r) c = c.replace(new RegExp(m, "g"), r[m]);
			var q = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
				u = "January February March April May June July August September October November December".split(" ");
			r = {
				"%a": function(h) { return q[h.Ra].substring(0, 3) },
				"%A": function(h) { return q[h.Ra] },
				"%b": function(h) { return u[h.mb].substring(0, 3) },
				"%B": function(h) { return u[h.mb] },
				"%C": function(h) { return g((h.Ya + 1900) / 100 | 0, 2) },
				"%d": function(h) { return g(h.yb, 2) },
				"%e": function(h) { return e(h.yb, 2, " ") },
				"%g": function(h) { return n(h).toString().substring(2) },
				"%G": function(h) { return n(h) },
				"%H": function(h) { return g(h.lb, 2) },
				"%I": function(h) {
					h = h.lb;
					0 == h ? h = 12 : 12 < h && (h -= 12);
					return g(h, 2)
				},
				"%j": function(h) { for (var t = 0, v = 0; v <= h.mb - 1; t += (Xb(h.Ya + 1900) ? Yb : Zb)[v++]); return g(h.yb + t, 3) },
				"%m": function(h) { return g(h.mb + 1, 2) },
				"%M": function(h) { return g(h.pc, 2) },
				"%n": function() { return "\n" },
				"%p": function(h) { return 0 <= h.lb && 12 > h.lb ? "AM" : "PM" },
				"%S": function(h) { return g(h.qc, 2) },
				"%t": function() { return "\t" },
				"%u": function(h) { return h.Ra || 7 },
				"%U": function(h) { return g(Math.floor((h.Xa + 7 - h.Ra) / 7), 2) },
				"%V": function(h) {
					var t = Math.floor((h.Xa + 7 - (h.Ra + 6) % 7) / 7);
					2 >= (h.Ra + 371 - h.Xa - 2) % 7 && t++;
					if (t) 53 == t && (v = (h.Ra + 371 - h.Xa) % 7, 4 == v || 3 == v && Xb(h.Ya) || (t = 1));
					else {
						t = 52;
						var v = (h.Ra + 7 - h.Xa - 1) % 7;
						(4 == v || 5 == v && Xb(h.Ya % 400 - 1)) && t++
					}
					return g(t, 2)
				},
				"%w": function(h) { return h.Ra },
				"%W": function(h) {
					return g(Math.floor((h.Xa +
						7 - (h.Ra + 6) % 7) / 7), 2)
				},
				"%y": function(h) { return (h.Ya + 1900).toString().substring(2) },
				"%Y": function(h) { return h.Ya + 1900 },
				"%z": function(h) {
					h = h.oc;
					var t = 0 <= h;
					h = Math.abs(h) / 60;
					return (t ? "+" : "-") + String("0000" + (h / 60 * 100 + h % 60)).slice(-4)
				},
				"%Z": function(h) { return h.rc },
				"%%": function() { return "%" }
			};
			c = c.replace(/%%/g, "\x00\x00");
			for (m in r) c.includes(m) && (c = c.replace(new RegExp(m, "g"), r[m](d)));
			c = c.replace(/\0\0/g, "%");
			m = Za(c, !1);
			if (m.length > b) return 0;
			y.set(m, a);
			return m.length - 1
		}

		function ac(a, b, c, d) {
			var e = {
				string: r => {
					var m = 0;
					if (null !== r && void 0 !== r && 0 !== r) {
						var q = (r.length << 2) + 1;
						m = bc(q);
						va(r, ua, m, q)
					}
					return m
				},
				array: r => {
					var m = bc(r.length);
					y.set(r, m);
					return m
				}
			};
			a = f["_" + a];
			var g = [],
				k = 0;
			if (d)
				for (var p = 0; p < d.length; p++) {
					var n = e[c[p]];
					n ? (0 === k && (k = W()), g[p] = n(d[p])) : g[p] = d[p]
				}
			c = a.apply(null, g);
			return c = function(r) { 0 !== k && X(k); return "string" === b ? ta(r) : "boolean" === b ? !!r : r }(c)
		}

		function rb(a, b, c, d) {
			a || (a = this);
			this.parent = a;
			this.Ta = a.Ta;
			this.eb = null;
			this.id = mb++;
			this.name = b;
			this.mode = c;
			this.Ha = {};
			this.Ia = {};
			this.fb = d
		}
		Object.defineProperties(rb.prototype, { read: { get: function() { return 365 === (this.mode & 365) }, set: function(a) { a ? this.mode |= 365 : this.mode &= -366 } }, write: { get: function() { return 146 === (this.mode & 146) }, set: function(a) { a ? this.mode |= 146 : this.mode &= -147 } }, ic: { get: function() { return 16384 === (this.mode & 61440) } }, hc: { get: function() { return 8192 === (this.mode & 61440) } } });
		Ib();
		P = Array(4096);
		yb(N, "/");
		S("/tmp", 16895, 0);
		S("/home", 16895, 0);
		S("/home/web_user", 16895, 0);
		(() => {
			S("/dev", 16895, 0);
			bb(259, { read: () => 0, write: (b, c, d, e) => e });
			zb("/dev/null", 259);
			ab(1280, db);
			ab(1536, eb);
			zb("/dev/tty", 1280);
			zb("/dev/tty1", 1536);
			var a = Xa();
			T("/dev", "random", a);
			T("/dev", "urandom", a);
			S("/dev/shm", 16895, 0);
			S("/dev/shm/tmp", 16895, 0)
		})();
		(() => {
			S("/proc", 16895, 0);
			var a = S("/proc/self", 16895, 0);
			S("/proc/self/fd", 16895, 0);
			yb({
				Ta: () => {
					var b = gb(a, "fd", 16895, 73);
					b.Ha = {
						cb: (c, d) => {
							var e = lb[+d];
							if (!e) throw new M(8);
							c = { parent: null, Ta: { Lb: "fake" }, Ha: { gb: () => e.path } };
							return c.parent = c
						}
					};
					return b
				}
			}, "/proc/self/fd")
		})();
		var Qb;
		f.FS_createPath = Lb;
		f.FS_createDataFile = Nb;
		f.FS_createPreloadedFile = Rb;
		f.FS_unlink = Bb;
		f.FS_createLazyFile = Pb;
		f.FS_createDevice = T;
		var Oc = {
			l: function(a) { return cc(a + 24) + 24 },
			n: function(a) {
				a = new I(a);
				a.Tb() || (a.wb(!0), Pa--);
				a.xb(!1);
				Oa.push(a);
				a.ob();
				return a.Ub()
			},
			o: function() {
				Y(0);
				var a = Oa.pop();
				if (a.lc() && !a.Ib()) {
					var b = a.dc();
					b && K(b)(a.bb);
					Ra(a.bb)
				}
				H = 0
			},
			a: function() {
				var a = H;
				if (!a) return Z(0), 0;
				var b = new I(a);
				b.Ua(a);
				var c = b.Ka();
				if (!c) return Z(0), a;
				for (var d = 0; d < arguments.length; d++) { var e = arguments[d]; if (0 === e || e === c) break; if (dc(e, c, b.La + 16)) return Z(e), a } Z(c);
				return a
			},
			e: function() {
				var a = H;
				if (!a) return Z(0), 0;
				var b = new I(a);
				b.Ua(a);
				var c = b.Ka();
				if (!c) return Z(0), a;
				for (var d = 0; d < arguments.length; d++) { var e = arguments[d]; if (0 === e || e === c) break; if (dc(e, c, b.La + 16)) return Z(e), a } Z(c);
				return a
			},
			q: function() {
				var a = H;
				if (!a) return Z(0), 0;
				var b = new I(a);
				b.Ua(a);
				var c = b.Ka();
				if (!c) return Z(0), a;
				for (var d = 0; d < arguments.length; d++) { var e = arguments[d]; if (0 === e || e === c) break; if (dc(e, c, b.La + 16)) return Z(e), a } Z(c);
				return a
			},
			m: Ra,
			G: function() {
				var a = Oa.pop();
				a || x("no exception to throw");
				var b = a.bb;
				a.Ib() || (Oa.push(a), a.xb(!0), a.wb(!1), Pa++);
				H = b;
				throw b;
			},
			p: function(a, b, c) {
				(new I(a)).Vb(b, c);
				H = a;
				Pa++;
				throw a;
			},
			ga: function() { return Pa },
			f: function(a) { H || (H = a); throw a; },
			J: function(a, b, c) {
				Sb = c;
				try {
					var d = V(a);
					switch (b) {
						case 0:
							var e = Tb();
							return 0 > e ? -28 : xb(d, e).Va;
						case 1:
						case 2:
							return 0;
						case 3:
							return d.flags;
						case 4:
							return e = Tb(), d.flags |= e, 0;
						case 5:
							return e = Tb(), xa[e + 0 >> 1] = 2, 0;
						case 6:
						case 7:
							return 0;
						case 16:
						case 8:
							return -28;
						case 9:
							return z[ec() >> 2] = 28, -1;
						default:
							return -28
					}
				} catch (g) { if ("undefined" == typeof U || !(g instanceof M)) throw g; return -g.Sa }
			},
			fa: function(a, b, c) {
				Sb = c;
				try {
					var d = V(a);
					switch (b) {
						case 21509:
						case 21505:
							return d.Ma ? 0 : -59;
						case 21510:
						case 21511:
						case 21512:
						case 21506:
						case 21507:
						case 21508:
							return d.Ma ? 0 : -59;
						case 21519:
							if (!d.Ma) return -59;
							var e = Tb();
							return z[e >> 2] = 0;
						case 21520:
							return d.Ma ? -28 : -59;
						case 21531:
							a = e = Tb();
							if (!d.Ia.fc) throw new M(59);
							return d.Ia.fc(d, b, a);
						case 21523:
							return d.Ma ? 0 : -59;
						case 21524:
							return d.Ma ? 0 : -59;
						default:
							return -28
					}
				} catch (g) { if ("undefined" == typeof U || !(g instanceof M)) throw g; return -g.Sa }
			},
			ha: function(a, b, c, d) {
				Sb = d;
				try {
					b = ta(b);
					var e = b;
					if ("/" === e.charAt(0)) b = e;
					else {
						var g = -100 === a ? "/" : V(a).path;
						if (0 == e.length) throw new M(44);
						b = L(g + "/" + e)
					}
					var k = d ? Tb() : 0;
					return Eb(b, c, k).Va
				} catch (p) { if ("undefined" == typeof U || !(p instanceof M)) throw p; return -p.Sa }
			},
			$: function(a, b) {
				try {
					a = ta(a);
					a: {
						try { var c = Q(a, { hb: !0 }).node; if (!c) throw new M(44); if (!c.Ha.Pa) throw new M(63); var d = c.Ha.Pa(c) } catch (g) { if (g && g.node && L(a) !== L(R(g.node))) { var e = -54; break a } throw g; } z[b >> 2] = d.cc;z[b + 8 >> 2] = d.rb;z[b + 12 >> 2] = d.mode;A[b + 16 >> 2] = d.kc;z[b +
							20 >> 2] = d.uid;z[b + 24 >> 2] = d.ec;z[b + 28 >> 2] = d.fb;F = [d.size >>> 0, (E = d.size, 1 <= +Math.abs(E) ? 0 < E ? (Math.min(+Math.floor(E / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((E - +(~~E >>> 0)) / 4294967296) >>> 0 : 0)];z[b + 40 >> 2] = F[0];z[b + 44 >> 2] = F[1];z[b + 48 >> 2] = 4096;z[b + 52 >> 2] = d.bc;F = [Math.floor(d.Ab.getTime() / 1E3) >>> 0, (E = Math.floor(d.Ab.getTime() / 1E3), 1 <= +Math.abs(E) ? 0 < E ? (Math.min(+Math.floor(E / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((E - +(~~E >>> 0)) / 4294967296) >>> 0 : 0)];z[b + 56 >> 2] = F[0];z[b + 60 >> 2] = F[1];A[b + 64 >> 2] = 0;F = [Math.floor(d.Nb.getTime() / 1E3) >>> 0, (E = Math.floor(d.Nb.getTime() / 1E3), 1 <= +Math.abs(E) ? 0 < E ? (Math.min(+Math.floor(E / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((E - +(~~E >>> 0)) / 4294967296) >>> 0 : 0)];z[b + 72 >> 2] = F[0];z[b + 76 >> 2] = F[1];A[b + 80 >> 2] = 0;F = [Math.floor(d.Eb.getTime() / 1E3) >>> 0, (E = Math.floor(d.Eb.getTime() / 1E3), 1 <= +Math.abs(E) ? 0 < E ? (Math.min(+Math.floor(E / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((E - +(~~E >>> 0)) / 4294967296) >>> 0 : 0)];z[b + 88 >> 2] = F[0];z[b + 92 >> 2] = F[1];A[b + 96 >> 2] = 0;F = [d.rb >>> 0, (E = d.rb, 1 <= +Math.abs(E) ? 0 < E ? (Math.min(+Math.floor(E / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((E - +(~~E >>> 0)) / 4294967296) >>> 0 : 0)];z[b + 104 >> 2] = F[0];z[b + 108 >> 2] = F[1];e = 0
					}
					return e
				} catch (g) { if ("undefined" == typeof U || !(g instanceof M)) throw g; return -g.Sa }
			},
			L: function() { return !0 },
			F: function() { x("") },
			ia: () => performance.now(),
			M: function(a, b, c) { ua.copyWithin(a, b, b + c) },
			B: function(a) {
				var b = ua.length;
				a >>>= 0;
				if (1073741824 < a) return !1;
				for (var c = 1; 4 >= c; c *= 2) {
					var d = b * (1 + .2 / c);
					d = Math.min(d, a + 100663296);
					var e = Math;
					d = Math.max(a, d);
					e = e.min.call(e, 1073741824, d + (65536 -
						d % 65536) % 65536);
					a: {
						try {
							pa.grow(e - wa.byteLength + 65535 >>> 16);
							ya();
							var g = 1;
							break a
						} catch (k) {} g = void 0
					}
					if (g) return !0
				}
				return !1
			},
			ba: function(a, b) {
				var c = 0;
				Vb().forEach(function(d, e) {
					var g = b + c;
					e = A[a + 4 * e >> 2] = g;
					for (g = 0; g < d.length; ++g) y[e++ >> 0] = d.charCodeAt(g);
					y[e >> 0] = 0;
					c += d.length + 1
				});
				return 0
			},
			ca: function(a, b) {
				var c = Vb();
				A[a >> 2] = c.length;
				var d = 0;
				c.forEach(function(e) { d += e.length + 1 });
				A[b >> 2] = d;
				return 0
			},
			Q: function(a) {
				if (!noExitRuntime) {
					if (f.onExit) f.onExit(a);
					qa = !0
				}
				ha(a, new Ma(a))
			},
			K: function(a) {
				try {
					var b = V(a);
					Fb(b);
					return 0
				} catch (c) { if ("undefined" == typeof U || !(c instanceof M)) throw c; return c.Sa }
			},
			ea: function(a, b, c, d) {
				try {
					a: {
						var e = V(a);a = b;
						for (var g = b = 0; g < c; g++) {
							var k = A[a >> 2],
								p = A[a + 4 >> 2];
							a += 8;
							var n = e,
								r = k,
								m = p,
								q = void 0,
								u = y;
							if (0 > m || 0 > q) throw new M(28);
							if (null === n.Va) throw new M(8);
							if (1 === (n.flags & 2097155)) throw new M(8);
							if (16384 === (n.node.mode & 61440)) throw new M(31);
							if (!n.Ia.read) throw new M(28);
							var h = "undefined" != typeof q;
							if (!h) q = n.position;
							else if (!n.seekable) throw new M(70);
							var t = n.Ia.read(n, u, r, m, q);
							h || (n.position += t);
							var v = t;
							if (0 > v) { var D = -1; break a } b += v;
							if (v < p) break
						}
						D = b
					}
					A[d >> 2] = D;
					return 0
				}
				catch (G) { if ("undefined" == typeof U || !(G instanceof M)) throw G; return G.Sa }
			},
			X: function(a, b, c, d, e) {
				try {
					b = c + 2097152 >>> 0 < 4194305 - !!b ? (b >>> 0) + 4294967296 * c : NaN;
					if (isNaN(b)) return 61;
					var g = V(a);
					Gb(g, b, d);
					F = [g.position >>> 0, (E = g.position, 1 <= +Math.abs(E) ? 0 < E ? (Math.min(+Math.floor(E / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((E - +(~~E >>> 0)) / 4294967296) >>> 0 : 0)];
					z[e >> 2] = F[0];
					z[e + 4 >> 2] = F[1];
					g.qb && 0 === b && 0 === d && (g.qb = null);
					return 0
				} catch (k) { if ("undefined" == typeof U || !(k instanceof M)) throw k; return k.Sa }
			},
			da: function(a, b, c, d) {
				try {
					a: {
						var e = V(a);a = b;
						for (var g = b = 0; g < c; g++) {
							var k = A[a >> 2],
								p = A[a + 4 >> 2];
							a += 8;
							var n = Hb(e, y, k, p);
							if (0 > n) { var r = -1; break a } b += n
						}
						r = b
					}
					A[d >> 2] = r;
					return 0
				}
				catch (m) { if ("undefined" == typeof U || !(m instanceof M)) throw m; return m.Sa }
			},
			Z: fc,
			Y: gc,
			A: hc,
			c: ic,
			E: jc,
			D: kc,
			b: lc,
			d: mc,
			_: oc,
			I: pc,
			x: qc,
			C: rc,
			t: sc,
			H: tc,
			z: uc,
			O: vc,
			P: wc,
			R: xc,
			W: yc,
			S: zc,
			V: Ac,
			T: Bc,
			N: Cc,
			h: Dc,
			k: Ec,
			g: Fc,
			i: Gc,
			j: Hc,
			u: Ic,
			w: Jc,
			s: Kc,
			v: Lc,
			y: Mc,
			U: Nc,
			r: function(a) { return a },
			aa: function(a, b, c, d) { return $b(a, b, c, d) }
		};
		(function() {
			function a(e) {
				f.asm = e.exports;
				pa = f.asm.ja;
				ya();
				za = f.asm.oa;
				Ba.unshift(f.asm.ka);
				Ha("wasm-instantiate")
			}

			function b(e) { a(e.instance) }

			function c(e) {
				return La().then(function(g) { return WebAssembly.instantiate(g, d) }).then(function(g) { return g }).then(e, function(g) {
					l("failed to asynchronously prepare wasm: " + g);
					x(g)
				})
			}
			var d = { a: Oc };
			Ga("wasm-instantiate");
			if (f.instantiateWasm) try { return f.instantiateWasm(d, a) } catch (e) { return l("Module.instantiateWasm callback failed with error: " + e), !1 }(function() {
				return oa || "function" != typeof WebAssembly.instantiateStreaming || Ia() || "function" != typeof fetch ? c(b) : fetch(C, { credentials: "same-origin" }).then(function(e) {
					return WebAssembly.instantiateStreaming(e, d).then(b, function(g) {
						l("wasm streaming compile failed: " + g);
						l("falling back to ArrayBuffer instantiation");
						return c(b)
					})
				})
			})().catch(ca);
			return {}
		})();
		f.___wasm_call_ctors = function() { return (f.___wasm_call_ctors = f.asm.ka).apply(null, arguments) };
		f._gomocupLoopOnce = function() { return (f._gomocupLoopOnce = f.asm.la).apply(null, arguments) };
		var Sa = f._free = function() { return (Sa = f._free = f.asm.ma).apply(null, arguments) },
			cc = f._malloc = function() { return (cc = f._malloc = f.asm.na).apply(null, arguments) },
			ec = f.___errno_location = function() { return (ec = f.___errno_location = f.asm.pa).apply(null, arguments) },
			Y = f._setThrew = function() { return (Y = f._setThrew = f.asm.qa).apply(null, arguments) },
			Z = f.setTempRet0 = function() { return (Z = f.setTempRet0 = f.asm.ra).apply(null, arguments) },
			W = f.stackSave = function() { return (W = f.stackSave = f.asm.sa).apply(null, arguments) },
			X = f.stackRestore = function() { return (X = f.stackRestore = f.asm.ta).apply(null, arguments) },
			bc = f.stackAlloc = function() { return (bc = f.stackAlloc = f.asm.ua).apply(null, arguments) },
			dc = f.___cxa_can_catch = function() { return (dc = f.___cxa_can_catch = f.asm.va).apply(null, arguments) },
			Qa = f.___cxa_is_pointer_type = function() { return (Qa = f.___cxa_is_pointer_type = f.asm.wa).apply(null, arguments) },
			Pc = f.dynCall_iij = function() { return (Pc = f.dynCall_iij = f.asm.xa).apply(null, arguments) },
			Qc = f.dynCall_ji = function() { return (Qc = f.dynCall_ji = f.asm.ya).apply(null, arguments) },
			Rc = f.dynCall_j = function() { return (Rc = f.dynCall_j = f.asm.za).apply(null, arguments) },
			Sc = f.dynCall_iiiiij = function() { return (Sc = f.dynCall_iiiiij = f.asm.Aa).apply(null, arguments) },
			Tc = f.dynCall_vij = function() { return (Tc = f.dynCall_vij = f.asm.Ba).apply(null, arguments) },
			Uc = f.dynCall_jii = function() { return (Uc = f.dynCall_jii = f.asm.Ca).apply(null, arguments) },
			Vc = f.dynCall_jiii = function() { return (Vc = f.dynCall_jiii = f.asm.Da).apply(null, arguments) },
			Wc = f.dynCall_iiij = function() { return (Wc = f.dynCall_iiij = f.asm.Ea).apply(null, arguments) },
			Xc = f.dynCall_iiiij = function() { return (Xc = f.dynCall_iiiij = f.asm.Fa).apply(null, arguments) };

		function ic(a, b) {
			var c = W();
			try { return K(a)(b) } catch (d) {
				X(c);
				if (d !== d + 0) throw d;
				Y(1, 0)
			}
		}

		function lc(a, b, c) {
			var d = W();
			try { return K(a)(b, c) } catch (e) {
				X(d);
				if (e !== e + 0) throw e;
				Y(1, 0)
			}
		}

		function Ec(a, b) {
			var c = W();
			try { K(a)(b) } catch (d) {
				X(c);
				if (d !== d + 0) throw d;
				Y(1, 0)
			}
		}

		function Fc(a, b, c) {
			var d = W();
			try { K(a)(b, c) } catch (e) {
				X(d);
				if (e !== e + 0) throw e;
				Y(1, 0)
			}
		}

		function Dc(a) {
			var b = W();
			try { K(a)() } catch (c) {
				X(b);
				if (c !== c + 0) throw c;
				Y(1, 0)
			}
		}

		function mc(a, b, c, d) {
			var e = W();
			try { return K(a)(b, c, d) } catch (g) {
				X(e);
				if (g !== g + 0) throw g;
				Y(1, 0)
			}
		}

		function hc(a) {
			var b = W();
			try { return K(a)() } catch (c) {
				X(b);
				if (c !== c + 0) throw c;
				Y(1, 0)
			}
		}

		function Gc(a, b, c, d) {
			var e = W();
			try { K(a)(b, c, d) } catch (g) {
				X(e);
				if (g !== g + 0) throw g;
				Y(1, 0)
			}
		}

		function sc(a, b, c, d, e, g, k) {
			var p = W();
			try { return K(a)(b, c, d, e, g, k) } catch (n) {
				X(p);
				if (n !== n + 0) throw n;
				Y(1, 0)
			}
		}

		function jc(a, b, c) {
			var d = W();
			try { return K(a)(b, c) } catch (e) {
				X(d);
				if (e !== e + 0) throw e;
				Y(1, 0)
			}
		}

		function kc(a, b, c) {
			var d = W();
			try { return K(a)(b, c) } catch (e) {
				X(d);
				if (e !== e + 0) throw e;
				Y(1, 0)
			}
		}

		function oc(a, b, c, d, e) {
			var g = W();
			try { return K(a)(b, c, d, e) } catch (k) {
				X(g);
				if (k !== k + 0) throw k;
				Y(1, 0)
			}
		}

		function Hc(a, b, c, d, e) {
			var g = W();
			try { K(a)(b, c, d, e) } catch (k) {
				X(g);
				if (k !== k + 0) throw k;
				Y(1, 0)
			}
		}

		function Ic(a, b, c, d, e, g) {
			var k = W();
			try { K(a)(b, c, d, e, g) } catch (p) {
				X(k);
				if (p !== p + 0) throw p;
				Y(1, 0)
			}
		}

		function qc(a, b, c, d, e, g) {
			var k = W();
			try { return K(a)(b, c, d, e, g) } catch (p) {
				X(k);
				if (p !== p + 0) throw p;
				Y(1, 0)
			}
		}

		function Jc(a, b, c, d, e, g, k) {
			var p = W();
			try { K(a)(b, c, d, e, g, k) } catch (n) {
				X(p);
				if (n !== n + 0) throw n;
				Y(1, 0)
			}
		}

		function fc(a, b) {
			var c = W();
			try { return K(a)(b) } catch (d) {
				X(c);
				if (d !== d + 0) throw d;
				Y(1, 0)
			}
		}

		function rc(a, b, c, d, e, g) {
			var k = W();
			try { return K(a)(b, c, d, e, g) } catch (p) {
				X(k);
				if (p !== p + 0) throw p;
				Y(1, 0)
			}
		}

		function pc(a, b, c, d, e, g) {
			var k = W();
			try { return K(a)(b, c, d, e, g) } catch (p) {
				X(k);
				if (p !== p + 0) throw p;
				Y(1, 0)
			}
		}

		function tc(a, b, c, d, e, g, k, p) {
			var n = W();
			try { return K(a)(b, c, d, e, g, k, p) } catch (r) {
				X(n);
				if (r !== r + 0) throw r;
				Y(1, 0)
			}
		}

		function Kc(a, b, c, d, e, g, k, p) {
			var n = W();
			try { K(a)(b, c, d, e, g, k, p) } catch (r) {
				X(n);
				if (r !== r + 0) throw r;
				Y(1, 0)
			}
		}

		function uc(a, b, c, d, e, g, k, p, n, r, m, q) {
			var u = W();
			try { return K(a)(b, c, d, e, g, k, p, n, r, m, q) } catch (h) {
				X(u);
				if (h !== h + 0) throw h;
				Y(1, 0)
			}
		}

		function Lc(a, b, c, d, e, g, k, p, n, r, m) {
			var q = W();
			try { K(a)(b, c, d, e, g, k, p, n, r, m) } catch (u) {
				X(q);
				if (u !== u + 0) throw u;
				Y(1, 0)
			}
		}

		function Mc(a, b, c, d, e, g, k, p, n, r, m, q, u, h, t, v) {
			var D = W();
			try { K(a)(b, c, d, e, g, k, p, n, r, m, q, u, h, t, v) } catch (G) {
				X(D);
				if (G !== G + 0) throw G;
				Y(1, 0)
			}
		}

		function gc(a, b, c) {
			var d = W();
			try { return K(a)(b, c) } catch (e) {
				X(d);
				if (e !== e + 0) throw e;
				Y(1, 0)
			}
		}

		function yc(a, b, c, d) {
			var e = W();
			try { return Pc(a, b, c, d) } catch (g) {
				X(e);
				if (g !== g + 0) throw g;
				Y(1, 0)
			}
		}

		function Ac(a, b) {
			var c = W();
			try { return Qc(a, b) } catch (d) {
				X(c);
				if (d !== d + 0) throw d;
				Y(1, 0)
			}
		}

		function Nc(a, b, c, d) {
			var e = W();
			try { Tc(a, b, c, d) } catch (g) {
				X(e);
				if (g !== g + 0) throw g;
				Y(1, 0)
			}
		}

		function Bc(a, b, c) {
			var d = W();
			try { return Uc(a, b, c) } catch (e) {
				X(d);
				if (e !== e + 0) throw e;
				Y(1, 0)
			}
		}

		function zc(a) {
			var b = W();
			try { return Rc(a) } catch (c) {
				X(b);
				if (c !== c + 0) throw c;
				Y(1, 0)
			}
		}

		function xc(a, b, c, d, e) {
			var g = W();
			try { return Wc(a, b, c, d, e) } catch (k) {
				X(g);
				if (k !== k + 0) throw k;
				Y(1, 0)
			}
		}

		function wc(a, b, c, d, e, g) {
			var k = W();
			try { return Xc(a, b, c, d, e, g) } catch (p) {
				X(k);
				if (p !== p + 0) throw p;
				Y(1, 0)
			}
		}

		function vc(a, b, c, d, e, g, k) {
			var p = W();
			try { return Sc(a, b, c, d, e, g, k) } catch (n) {
				X(p);
				if (n !== n + 0) throw n;
				Y(1, 0)
			}
		}

		function Cc(a, b, c, d) {
			var e = W();
			try { return Vc(a, b, c, d) } catch (g) {
				X(e);
				if (g !== g + 0) throw g;
				Y(1, 0)
			}
		}
		f.addRunDependency = Ga;
		f.removeRunDependency = Ha;
		f.FS_createPath = Lb;
		f.FS_createDataFile = Nb;
		f.FS_createPreloadedFile = Rb;
		f.FS_createLazyFile = Pb;
		f.FS_createDevice = T;
		f.FS_unlink = Bb;
		f.cwrap = function(a, b, c, d) { c = c || []; var e = c.every(g => "number" === g || "boolean" === g); return "string" !== b && e && !d ? f["_" + a] : function() { return ac(a, b, c, arguments) } };
		var Yc;
		Fa = function Zc() {
			Yc || $c();
			Yc || (Fa = Zc)
		};

		function $c() {
			function a() {
				if (!Yc && (Yc = !0, f.calledRun = !0, !qa)) {
					f.noFSInit || Jb || da();
					nb = !1;
					Na(Ba);
					ba(f);
					if (f.onRuntimeInitialized) f.onRuntimeInitialized();
					if (f.postRun)
						for ("function" == typeof f.postRun && (f.postRun = [f.postRun]); f.postRun.length;) {
							var b = f.postRun.shift();
							Ca.unshift(b)
						}
					Na(Ca)
				}
			}
			if (!(0 < B)) {
				if (f.preRun)
					for ("function" == typeof f.preRun && (f.preRun = [f.preRun]); f.preRun.length;) Da();
				Na(Aa);
				0 < B || (f.setStatus ? (f.setStatus("Running..."), setTimeout(function() {
					setTimeout(function() { f.setStatus("") }, 1);
					a()
				}, 1)) : a())
			}
		}
		if (f.preInit)
			for ("function" == typeof f.preInit && (f.preInit = [f.preInit]); 0 < f.preInit.length;) f.preInit.pop()();
		$c();
		return Rapfi.ready
	});
})();
if (typeof exports === 'object' && typeof module === 'object')
	module.exports = Rapfi;
else if (typeof define === 'function' && define['amd'])
	define([], function() { return Rapfi; });
else if (typeof exports === 'object')
	exports["Rapfi"] = Rapfi;