/*! live-0.0.0.js 2016-06-03 */
window._bd_share_main ? window._bd_share_is_recently_loaded = !0 : (window._bd_share_is_recently_loaded = !1, window._bd_share_main = {version: '2.0', jscfg: {domain: {staticUrl: 'http://bdimg.share.baidu.com/'}}}), !window._bd_share_is_recently_loaded && (window._bd_share_main.F = window._bd_share_main.F || (function (a, b) { function c (a, b) { if (a instanceof Array) { for (var c = 0, d = a.length; d > c; c++) if (b.call(a[c], a[c], c) === !1) return } else for (var c in a) if (a.hasOwnProperty(c) && b.call(a[c], a[c], c) === !1) return } function d (a, b) { if (this.svnMod = '', this.name = null, this.path = a, this.fn = null, this.exports = {}, this._loaded = !1, this._requiredStack = [], this._readyStack = [], d.cache[this.path] = this, b && b.charAt(0) !== '.') { var c = b.split(':'); c.length > 1 ? (this.svnMod = c[0], this.name = c[1]) : this.name = b } this.svnMod || (this.svnMod = this.path.split('/js/')[0].substr(1)), this.type = 'js', this.getKey = function () { return this.svnMod + ':' + this.name }, this._info = {} } function e (a, b) { var c = b == 'css', d = document.createElement(c ? 'link' : 'script'); return d } function f (b, c, d, f) { function i () { i.isCalled || (i.isCalled = !0, clearTimeout(k), d && d()) } var j = e(b, c); j.nodeName === 'SCRIPT' ? g(j, i) : h(j, i); var k = setTimeout(function () { throw new Error('load ' + c + ' timeout : ' + b) }, a._loadScriptTimeout || 1e4), l = document.getElementsByTagName('head')[0]; c == 'css' ? (j.rel = 'stylesheet', j.href = b, l.appendChild(j)) : (j.type = 'text/javascript', j.src = b, l.insertBefore(j, l.firstChild)) } function g (a, b) { a.onload = a.onerror = a.onreadystatechange = function () { if (/loaded|complete|undefined/.test(a.readyState)) { if (a.onload = a.onerror = a.onreadystatechange = null, a.parentNode) { a.parentNode.removeChild(a); try { if (a.clearAttributes)a.clearAttributes(); else for (var c in a) delete a[c] } catch (d) {} }a = void 0, b && b() } } } function h (a, b) { a.attachEvent ? a.attachEvent('onload', b) : setTimeout(function () { i(a, b) }, 0) } function i (a, b) { if (!b || !b.isCalled) { var c, d = navigator.userAgent, e = ~d.indexOf('AppleWebKit'), f = ~d.indexOf('Opera'); if (e || f)a.sheet && (c = !0); else if (a.sheet) try { a.sheet.cssRules && (c = !0) } catch (g) { g.name !== 'SecurityError' && g.name !== 'NS_ERROR_DOM_SECURITY_ERR' || (c = !0) }setTimeout(function () { c ? b && b() : i(a, b) }, 1) } } var j = 'api'; a.each = c, d.currentPath = '', d.loadedPaths = {}, d.loadingPaths = {}, d.cache = {}, d.paths = {}, d.handlers = [], d.moduleFileMap = {}, d.requiredPaths = {}, d.lazyLoadPaths = {}, d.services = {}, d.isPathsLoaded = function (a) { var b = !0; return c(a, function (a) { return a in d.loadedPaths ? void 0 : b = !1 }), b }, d.require = function (a, b) { a.search(':') < 0 && (b || (b = j, d.currentPath && (b = d.currentPath.split('/js/')[0].substr(1))), a = b + ':' + a); var c = d.get(a, d.currentPath); if (c.type != 'css') { if (c) { if (!c._inited) { c._inited = !0; var e, f = c.svnMod; (e = c.fn.call(null, function (a) { return d.require(a, f) }, c.exports, new m(c.name, f))) && (c.exports = e) } return c.exports } throw new Error('Module "' + a + '" not found!') } }, d.baseUrl = b ? b[b.length - 1] == '/' ? b : b + '/' : '/', d.getBasePath = function (a) { var b, c; return (c = a.indexOf('/')) !== -1 && (b = a.slice(0, c)), b && b in d.paths ? d.paths[b] : d.baseUrl }, d.getJsPath = function (b, c) { if (b.charAt(0) === '.') { c = c.replace(/\/[^\/]+\/[^\/]+$/, ''), b.search('./') === 0 && (b = b.substr(2)); var e = 0; for (b = b.replace(/^(\.\.\/)+/g, function (a) { return e = a.length / 3, '' }); e > 0;)c = c.substr(0, c.lastIndexOf('/')), e--; return c + '/' + b + '/' + b.substr(b.lastIndexOf('/') + 1) + '.js' } var f, g, h, i, k, l; if (b.search(':') >= 0) { var m = b.split(':'); f = m[0], b = m[1] } else c && (f = c.split('/')[1]); f = f || j; var n = /\.css(?:\?|$)/i.test(b); n && a._useConfig && d.moduleFileMap[f][b] && (b = d.moduleFileMap[f][b]); var b = k = b, o = d.getBasePath(b); return (h = b.indexOf('/')) !== -1 && (g = b.slice(0, h), i = b.lastIndexOf('/'), k = b.slice(i + 1)), g && g in d.paths && (b = b.slice(h + 1)), l = o + f + '/js/' + b + '.js' }, d.get = function (a, b) { var c = d.getJsPath(a, b); return d.cache[c] ? d.cache[c] : new d(c, a) }, d.prototype = {load: function () { d.loadingPaths[this.path] = !0; var b = this.svnMod || j, c = window._bd_share_main.jscfg.domain.staticUrl + 'static/' + b + '/', e = this, f = /\.css(?:\?|$)/i.test(this.name); this.type = f ? 'css' : 'js'; var g = '/' + this.type + '/' + d.moduleFileMap[b][this.name]; if (c += a._useConfig && d.moduleFileMap[b][this.name] ? this.type + '/' + d.moduleFileMap[b][this.name] : this.type + '/' + this.name + (f ? '' : '.js'), a._firstScreenCSS.indexOf(this.name) > 0 || a._useConfig && g == a._firstScreenJS)e._loaded = !0, e.ready(); else { var h = (new Date()).getTime(); k.create({src: c, type: this.type, loaded: function () { e._info.loadedTime = (new Date()).getTime() - h, e.type == 'css' && (e._loaded = !0, e.ready()) }}) } }, lazyLoad: function () { this.name; if (d.lazyLoadPaths[this.getKey()]) this.define(), delete d.lazyLoadPaths[this.getKey()]; else { if (this.exist()) return; d.requiredPaths[this.getKey()] = !0, this.load() } }, ready: function (a, b) { var e = b ? this._requiredStack : this._readyStack; if (a) this._loaded ? a() : e.push(a); else { if (d.loadedPaths[this.path] = !0, delete d.loadingPaths[this.path], this._loaded = !0, d.currentPath = this.path, this._readyStack && this._readyStack.length > 0) { this._inited = !0; var f, g = this.svnMod; this.fn && (f = this.fn.call(null, function (a) { return d.require(a, g) }, this.exports, new m(this.name, g))) && (this.exports = f), c(this._readyStack, function (a) { a() }), delete this._readyStack } this._requiredStack && this._requiredStack.length > 0 && (c(this._requiredStack, function (a) { a() }), delete this._requiredStack) } }, define: function () { var a = this, b = this.deps, e = (this.path, []); b || (b = this.getDependents()), b.length ? (c(b, function (b) { e.push(d.getJsPath(b, a.path)) }), c(b, function (b) { var c = d.get(b, a.path); c.ready(function () { d.isPathsLoaded(e) && a.ready() }, !0), c.lazyLoad() })) : this.ready() }, exist: function () { var a = this.path; return a in d.loadedPaths || a in d.loadingPaths }, getDependents: function () { var a = this.fn.toString(), b = a.match(/function\s*\(([^,]*),/i), d = new RegExp('[^.]\\b' + b[1] + "\\(\\s*('|\")([^()\"']*)('|\")\\s*\\)", 'g'), e = a.match(d), f = []; return e && c(e, function (a, c) { f[c] = a.substr(b[1].length + 3).slice(0, -2) }), f }}; var k = {create: function (a) { var b = a.src; b in this._paths || (this._paths[b] = !0, c(this._rules, function (a) { b = a.call(null, b) }), f(b, a.type, a.loaded)) }, _paths: {}, _rules: [], addPathRule: function (a) { this._rules.push(a) }}; a.version = '1.0', a.use = function (a, b) { typeof a === 'string' && (a = [a]); var e = [], f = []; c(a, function (a, b) { f[b] = !1 }), c(a, function (a, g) { var h = d.get(a), i = h._loaded; h.ready(function () { var a = h.exports || {}; a._INFO = h._info, a._INFO && (a._INFO.isNew = !i), e[g] = a, f[g] = !0; var d = !0; c(f, function (a) { return a === !1 ? d = !1 : void 0 }), b && d && b.apply(null, e) }), h.lazyLoad() }) }, a.module = function (a, b, c) { var e = d.get(a); e.fn = b, e.deps = c, d.requiredPaths[e.getKey()] ? e.define() : d.lazyLoadPaths[e.getKey()] = !0 }, a.pathRule = function (a) { k.addPathRule(a) }, a._addPath = function (a, b) { if (b.slice(-1) !== '/' && (b += '/'), a in d.paths) throw new Error(a + ' has already in Module.paths'); d.paths[a] = b }; var l = j; a._setMod = function (a) { l = a || j }, a._fileMap = function (b, e) { if (typeof b === 'object')c(b, function (b, c) { a._fileMap(c, b) }); else { var f = l; typeof e === 'string' && (e = [e]), b = b.indexOf('js/') == 1 ? b.substr(4) : b, b = b.indexOf('css/') == 1 ? b.substr(5) : b; var g = d.moduleFileMap[f]; g || (g = {}), c(e, function (a) { g[a] || (g[a] = b) }), d.moduleFileMap[f] = g } }, a._eventMap = {}, a.call = function (b, c, d) { for (var e = [], f = 2, g = arguments.length; g > f; f++)e.push(arguments[f]); a.use(b, function (a) { for (var b = c.split('.'), d = 0, f = b.length; f > d; d++)a = a[b[d]]; a && a.apply(this, e) }) }, a._setContext = function (a) { typeof a === 'object' && c(a, function (a, b) { m.prototype[b] = d.require(a) }) }, a._setContextMethod = function (a, b) { m.prototype[a] = b }; var m = function (a, b) { this.modName = a, this.svnMod = b }; return m.prototype = {domain: window._bd_share_main.jscfg.domain, use: function (b, c) { typeof b === 'string' && (b = [b]); for (var d = b.length - 1; d >= 0; d--)b[d] = this.svnMod + ':' + b[d]; a.use(b, c) }}, a._Context = m, a.addLog = function (b, c) { a.use('lib/log', function (a) { a.defaultLog(b, c) }) }, a.fire = function (b, c, d) { a.use('lib/mod_evt', function (a) { a.fire(b, c, d) }) }, a._defService = function (a, b) { if (a) { var e = d.services[a]; e = e || {}, c(b, function (a, b) { e[b] = a }), d.services[a] = e } }, a.getService = function (b, c, e) { var f = d.services[b]; if (!f) throw new Error(b + " mod didn't define any services"); var g = f[c]; if (!g) throw new Error(b + " mod didn't provide service " + c); a.use(b + ':' + g, e) }, a }({}))), !window._bd_share_is_recently_loaded && window._bd_share_main.F.module('base/min_tangram', function (a, b) { var c = {}; c.each = function (a, b, c) { var d, e, f, g = a.length; if (typeof b === 'function') for (f = 0; g > f && (e = a[f], d = b.call(c || a, f, e), d !== !1); f++);return a }; var d = function (a, b) { for (var c in b)b.hasOwnProperty(c) && (a[c] = b[c]); return a }; c.extend = function () { for (var a = arguments[0], b = 1, c = arguments.length; c > b; b++)d(a, arguments[b]); return a }, c.domready = function (a, b) { if (b = b || document, /complete/.test(b.readyState))a(); else if (b.addEventListener)b.readyState == 'interactive' ? a() : b.addEventListener('DOMContentLoaded', a, !1); else { var c = function () { c = new Function(), a() }; void (function () { try { b.body.doScroll('left') } catch (a) { return setTimeout(arguments.callee, 10) }c() }()), b.attachEvent('onreadystatechange', function () { b.readyState == 'complete' && c() }) } }, c.isArray = function (a) { return Object.prototype.toString.call(a) == '[object Array]' }, b.T = c }), !window._bd_share_is_recently_loaded && window._bd_share_main.F.module('base/class', function (a, b, c) { var d = a('base/min_tangram').T; b.BaseClass = function () { var a = this, b = {}; a.on = function (a, c) { var d = b[a]; d || (d = b[a] = []), d.push(c) }, a.un = function (a, c) { if (!a) return void (b = {}); var e = b[a]; e && (c ? d.each(e, function (a, b) { return b == c ? (e.splice(a, 1), !1) : void 0 }) : b[a] = []) }, a.fire = function (c, e) { var f = b[c]; f && (e = e || {}, d.each(f, function (b, c) { e._result = c.call(a, d.extend({_ctx: {src: a}}, e)) })) } }; var e = {}; e.create = function (a, c) { return c = c || b.BaseClass, function () { c.apply(this, arguments); var b = d.extend({}, this); a.apply(this, arguments), this._super = b } }, b.Class = e }), !window._bd_share_is_recently_loaded && window._bd_share_main.F.module('conf/const', function (a, b, c) { b.CMD_ATTR = 'data-cmd', b.CONFIG_TAG_ATTR = 'data-tag', b.URLS = {likeSetUrl: 'http://like.baidu.com/set', commitUrl: 'http://s.share.baidu.com/commit', jumpUrl: 'http://s.share.baidu.com', mshareUrl: 'http://s.share.baidu.com/mshare', emailUrl: 'http://s.share.baidu.com/sendmail', nsClick: 'http://nsclick.baidu.com/v.gif', backUrl: 'http://s.share.baidu.com/back', shortUrl: 'http://dwz.cn/v2cut.php'} }), !window._bd_share_is_recently_loaded && (function () { window._bd_share_main.F._setMod('api'), window._bd_share_main.F._fileMap({'/js/share.js?v=da893e3e.js': ['conf/define', 'base/fis', 'base/tangrammin', 'base/class.js', 'conf/define.js', 'conf/const.js', 'config', 'share/api_base.js', 'view/view_base.js', 'start/router.js', 'component/comm_tools.js', 'trans/trans.js'], '/js/base/tangram.js?v=37768233.js': ['base/tangram'], '/js/view/share_view.js?v=3ae6026d.js': ['view/share_view'], '/js/view/slide_view.js?v=08373964.js': ['view/slide_view'], '/js/view/like_view.js?v=df3e0eca.js': ['view/like_view'], '/js/view/select_view.js?v=85fc7cec.js': ['view/select_view'], '/js/trans/data.js?v=17af2bd2.js': ['trans/data'], '/js/trans/logger.js?v=d16ec0e3.js': ['trans/logger'], '/js/trans/trans_bdxc.js?v=7ac21555.js': ['trans/trans_bdxc'], '/js/trans/trans_bdysc.js?v=fc21acaa.js': ['trans/trans_bdysc'], '/js/trans/trans_weixin.js?v=080be124.js': ['trans/trans_weixin'], '/js/share/combine_api.js?v=8d37a7b3.js': ['share/combine_api'], '/js/share/like_api.js?v=d3693f0a.js': ['share/like_api'], '/js/share/likeshare.js?v=e1f4fbf1.js': ['share/likeshare'], '/js/share/share_api.js?v=226108fe.js': ['share/share_api'], '/js/share/slide_api.js?v=ec14f516.js': ['share/slide_api'], '/js/component/animate.js?v=5b737477.js': ['component/animate'], '/js/component/anticheat.js?v=44b9b245.js': ['component/anticheat'], '/js/component/partners.js?v=911c4302.js': ['component/partners'], '/js/component/pop_base.js?v=36f92e70.js': ['component/pop_base'], '/js/component/pop_dialog.js?v=d479767d.js': ['component/pop_dialog'], '/js/component/pop_popup.js?v=4387b4e1.js': ['component/pop_popup'], '/js/component/pop_popup_slide.js?v=b16a1f10.js': ['component/pop_popup_slide'], '/js/component/qrcode.js?v=d69754a9.js': ['component/qrcode'], '/css/share_style0_16.css?v=6aba13f0.css': ['share_style0_16.css'], '/css/share_style0_32.css?v=4413acf0.css': ['share_style0_32.css'], '/css/share_style2.css?v=611d4f74.css': ['share_style2.css'], '/css/share_style4.css?v=cef2b8f3.css': ['share_style4.css'], '/css/slide_share.css?v=9c50d088.css': ['slide_share.css'], '/css/share_popup.css?v=240f357d.css': ['share_popup.css'], '/css/like.css?v=d52a0ea5.css': ['like.css'], '/css/imgshare.css?v=a7830602.css': ['imgshare.css'], '/css/select_share.css?v=15f56735.css': ['select_share.css'], '/css/weixin_popup.css?v=1a56666e.css': ['weixin_popup.css']}), window._bd_share_main.F._loadScriptTimeout = 15e3, window._bd_share_main.F._useConfig = !0, window._bd_share_main.F._firstScreenCSS = '', window._bd_share_main.F._firstScreenJS = '' }()), !window._bd_share_is_recently_loaded && window._bd_share_main.F.use('base/min_tangram', function (a) { function b (a, b, c) { var d = new a(c); d.setView(new b(c)), d.init(), c && c._handleId && (_bd_share_main.api = _bd_share_main.api || {}, _bd_share_main.api[c._handleId] = d) } function c (a, c) { window._bd_share_main.F.use(a, function (a, d) { e.isArray(c) ? e.each(c, function (c, e) { b(a.Api, d.View, e) }) : b(a.Api, d.View, c) }) } function d (a) { var b = a.common || window._bd_share_config && _bd_share_config.common || {}, c = {like: {type: 'like'}, share: {type: 'share', bdStyle: 0, bdMini: 2, bdSign: 'on'}, slide: {type: 'slide', bdStyle: '1', bdMini: 2, bdImg: 0, bdPos: 'right', bdTop: 100, bdSign: 'on'}, image: {viewType: 'list', viewStyle: '0', viewPos: 'top', viewColor: 'black', viewSize: '16', viewList: ['qzone', 'tsina', 'huaban', 'tqq', 'renren']}, selectShare: {type: 'select', bdStyle: 0, bdMini: 2, bdSign: 'on'}}, d = {share: {__cmd: '', __buttonType: '', __type: '', __element: null}, slide: {__cmd: '', __buttonType: '', __type: '', __element: null}, image: {__cmd: '', __buttonType: '', __type: '', __element: null}}; return e.each(['like', 'share', 'slide', 'image', 'selectShare'], function (f, g) { a[g] && (e.isArray(a[g]) && a[g].length > 0 ? e.each(a[g], function (f, h) { a[g][f] = e.extend({}, c[g], b, h, d[g]) }) : a[g] = e.extend({}, c[g], b, a[g], d[g])) }), a } var e = a.T; _bd_share_main.init = function (a) { if (a = a || window._bd_share_config || {share: {}}) { var b = d(a); b.like && c(['share/like_api', 'view/like_view'], b.like), b.share && c(['share/share_api', 'view/share_view'], b.share), b.slide && c(['share/slide_api', 'view/slide_view'], b.slide), b.selectShare && c(['share/select_api', 'view/select_view'], b.selectShare), b.image && c(['share/image_api', 'view/image_view'], b.image) } }, window._bd_share_main._LogPoolV2 = [], window._bd_share_main.n1 = (new Date()).getTime(), e.domready(function () { window._bd_share_main.n2 = (new Date()).getTime() + 1e3, _bd_share_main.init(), setTimeout(function () { window._bd_share_main.F.use('trans/logger', function (a) { a.nsClick(), a.back(), a.duration() }) }, 3e3) }) }), !window._bd_share_is_recently_loaded && window._bd_share_main.F.module('component/comm_tools', function (a, b) { var c = function () { var a = window.location || document.location || {}; return a.href || '' }, d = function (a, b) { for (var c = a.length, d = '', e = 1; b >= e; e++) { var f = Math.floor(c * Math.random()); d += a.charAt(f) } return d }, e = function () { var a = (+new Date()).toString(36), b = d('0123456789abcdefghijklmnopqrstuvwxyz', 3); return a + b }; b.getLinkId = e, b.getPageUrl = c }), !window._bd_share_is_recently_loaded && window._bd_share_main.F.module('trans/trans', function (a, b) { var c = a('component/comm_tools'), d = a('conf/const').URLS, e = function () { window._bd_share_main.F.use('base/tangram', function (a) { var b = a.T; b.cookie.get('bdshare_firstime') == null && b.cookie.set('bdshare_firstime', 1 * new Date(), {path: '/', expires: (new Date()).setFullYear(2022) - new Date()}) }) }, f = function (a) { var b = a.bdUrl || c.getPageUrl(); return b = b.replace(/\'/g, '%27').replace(/\"/g, '%22') }, g = function (a) { var b = (new Date()).getTime() + 3e3, d = {click: 1, url: f(a), uid: a.bdUid || '0', to: a.__cmd, type: 'text', pic: a.bdPic || '', title: (a.bdText || document.title).substr(0, 300), key: (a.bdSnsKey || {})[a.__cmd] || '', desc: a.bdDesc || '', comment: a.bdComment || '', relateUid: a.bdWbuid || '', searchPic: a.bdSearchPic || 0, sign: a.bdSign || 'on', l: window._bd_share_main.n1.toString(32) + window._bd_share_main.n2.toString(32) + b.toString(32), linkid: c.getLinkId(), firstime: i('bdshare_firstime') || ''}; switch (a.__cmd) { case 'copy':k(d); break; case 'print':l(); break; case 'bdxc':m(); break; case 'bdysc':n(d); break; case 'weixin':o(d); break; default:h(a, d) }window._bd_share_main.F.use('trans/logger', function (b) { b.commit(a, d) }) }, h = function (a, b) { var c = d.jumpUrl; a.__cmd == 'mshare' ? c = d.mshareUrl : a.__cmd == 'mail' && (c = d.emailUrl); var e = c + '?' + j(b); window.open(e) }, i = function (a) { if (a) { var b = new RegExp('(^| )' + a + '=([^;]*)(;|$)'), c = b.exec(document.cookie); if (c) return decodeURIComponent(c[2] || null) } }, j = function (a) { var b = []; for (var c in a)b.push(encodeURIComponent(c) + '=' + encodeURIComponent(a[c])); return b.join('&').replace(/%20/g, '+') }, k = function (a) { window._bd_share_main.F.use('base/tangram', function (b) { var d = b.T; d.browser.ie ? (window.clipboardData.setData('text', document.title + ' ' + (a.bdUrl || c.getPageUrl())), alert('标题和链接复制成功，您可以推荐给QQ/MSN上的好友了！')) : window.prompt('您使用的是非IE核心浏览器，请按下 Ctrl+C 复制代码到剪贴板', document.title + ' ' + (a.bdUrl || c.getPageUrl())) }) }, l = function () { window.print() }, m = function () { window._bd_share_main.F.use('trans/trans_bdxc', function (a) { a && a.run() }) }, n = function (a) { window._bd_share_main.F.use('trans/trans_bdysc', function (b) { b && b.run(a) }) }, o = function (a) { window._bd_share_main.F.use('trans/trans_weixin', function (b) { b && b.run(a) }) }, p = function (a) { g(a) }; b.run = p, e() })
