(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[253],{2447:function(e,i,s){"use strict";function r(e,i,s,r,o,n,t){try{var a=e[n](t),l=a.value}catch(u){return void s(u)}a.done?i(l):Promise.resolve(l).then(r,o)}function o(e){return function(){var i=this,s=arguments;return new Promise((function(o,n){var t=e.apply(i,s);function a(e){r(t,o,n,a,l,"next",e)}function l(e){r(t,o,n,a,l,"throw",e)}a(void 0)}))}}s.d(i,{Z:function(){return o}})},1385:function(e,i,s){"use strict";function r(e,i){(null==i||i>e.length)&&(i=e.length);for(var s=0,r=new Array(i);s<i;s++)r[s]=e[s];return r}function o(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,i){if(e){if("string"===typeof e)return r(e,i);var s=Object.prototype.toString.call(e).slice(8,-1);return"Object"===s&&e.constructor&&(s=e.constructor.name),"Map"===s||"Set"===s?Array.from(e):"Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?r(e,i):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}s.d(i,{Z:function(){return o}})},9359:function(e,i,s){"use strict";var r,o=s(7294),n=(r=o)&&"object"===typeof r&&"default"in r?r.default:r,t=new(s(3451)),a=t.getBrowser(),l=(t.getCPU(),t.getDevice()),u=t.getEngine(),d=t.getOS(),w=t.getUA(),c=function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"none";return e||i},b=function(){return!("undefined"===typeof window||!window.navigator&&!navigator)&&(window.navigator||navigator)},m=function(e){var i=b();return i&&i.platform&&(-1!==i.platform.indexOf(e)||"MacIntel"===i.platform&&i.maxTouchPoints>1&&!window.MSStream)};function f(e){return(f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,i){for(var s=0;s<i.length;s++){var r=i[s];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,i,s){return i in e?Object.defineProperty(e,i,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[i]=s,e}function g(){return(g=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var s=arguments[i];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r])}return e}).apply(this,arguments)}function v(e,i){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);i&&(r=r.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),s.push.apply(s,r)}return s}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function x(e,i){return(x=Object.setPrototypeOf||function(e,i){return e.__proto__=i,e})(e,i)}function k(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var O="mobile",S="tablet",E="smarttv",A="console",_="wearable",T=void 0,j="Chrome",N="Firefox",P="Opera",C="Yandex",M="Safari",B="Internet Explorer",z="Edge",R="Chromium",F="IE",I="Mobile Safari",q="MIUI Browser",U="iOS",V="Android",D="Windows Phone",L="Windows",W="Mac OS",G={isMobile:!1,isTablet:!1,isBrowser:!1,isSmartTV:!1,isConsole:!1,isWearable:!1},Z=function(e,i,s,r){return function(e){for(var i=1;i<arguments.length;i++){var s=null!=arguments[i]?arguments[i]:{};i%2?v(s,!0).forEach((function(i){h(e,i,s[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):v(s).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(s,i))}))}return e}({},e,{vendor:c(i.vendor),model:c(i.model),os:c(s.name),osVersion:c(s.version),ua:c(r)})},H=function(e){switch(e){case O:return{isMobile:!0};case S:return{isTablet:!0};case E:return{isSmartTV:!0};case A:return{isConsole:!0};case _:return{isWearable:!0};case T:return{isBrowser:!0};default:return G}}(l.type);var $=function(){return"string"===typeof w&&-1!==w.indexOf("Edg/")},X=function(){return a.name===z},Y=function(){return m("iPad")},J=l.type===E,K=l.type===A,Q=l.type===_,ee=a.name===I||Y(),ie=a.name===R,se=function(){switch(l.type){case O:case S:return!0;default:return!1}}()||Y(),re=l.type===O,oe=l.type===S||Y(),ne=l.type===T,te=d.name===V,ae=d.name===D,le=d.name===U||Y(),ue=a.name===j,de=a.name===N,we=a.name===M||a.name===I,ce=a.name===P,be=a.name===B||a.name===F,me=c(d.version),fe=c(d.name),pe=c(a.version),he=c(a.major),ge=c(a.name),ve=c(l.vendor),ye=c(l.model),xe=c(u.name),ke=c(u.version),Oe=c(w),Se=X()||$(),Ee=a.name===C,Ae=c(l.type,"browser"),_e=function(){var e=b();return e&&(/iPad|iPhone|iPod/.test(e.platform)||"MacIntel"===e.platform&&e.maxTouchPoints>1)&&!window.MSStream}(),Te=Y(),je=m("iPhone"),Ne=m("iPod"),Pe=function(){var e=b(),i=e&&e.userAgent.toLowerCase();return"string"===typeof i&&/electron/.test(i)}(),Ce=$(),Me=X()&&!$(),Be=d.name===L,ze=d.name===W,Re=a.name===q;i.I3=function(e){var i=e.renderWithFragment,s=e.children,r=e.viewClassName,t=e.style;return ne?i?n.createElement(o.Fragment,null,s):n.createElement("div",{className:r,style:t},s):null},i.A_=function(e){var i=e.renderWithFragment,s=e.children,r=e.viewClassName,t=e.style;return re?i?n.createElement(o.Fragment,null,s):n.createElement("div",{className:r,style:t},s):null}},3451:function(e,i,s){var r;!function(o,n){"use strict";var t="function",a="undefined",l="object",u="string",d="model",w="name",c="type",b="vendor",m="version",f="architecture",p="console",h="mobile",g="tablet",v="smarttv",y="wearable",x="embedded",k={extend:function(e,i){var s={};for(var r in e)i[r]&&i[r].length%2===0?s[r]=i[r].concat(e[r]):s[r]=e[r];return s},has:function(e,i){return typeof e===u&&-1!==i.toLowerCase().indexOf(e.toLowerCase())},lowerize:function(e){return e.toLowerCase()},major:function(e){return typeof e===u?e.replace(/[^\d\.]/g,"").split(".")[0]:n},trim:function(e,i){return e=e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),typeof i===a?e:e.substring(0,255)}},O={rgx:function(e,i){for(var s,r,o,a,u,d,w=0;w<i.length&&!u;){var c=i[w],b=i[w+1];for(s=r=0;s<c.length&&!u;)if(u=c[s++].exec(e))for(o=0;o<b.length;o++)d=u[++r],typeof(a=b[o])===l&&a.length>0?2==a.length?typeof a[1]==t?this[a[0]]=a[1].call(this,d):this[a[0]]=a[1]:3==a.length?typeof a[1]!==t||a[1].exec&&a[1].test?this[a[0]]=d?d.replace(a[1],a[2]):n:this[a[0]]=d?a[1].call(this,d,a[2]):n:4==a.length&&(this[a[0]]=d?a[3].call(this,d.replace(a[1],a[2])):n):this[a]=d||n;w+=2}},str:function(e,i){for(var s in i)if(typeof i[s]===l&&i[s].length>0){for(var r=0;r<i[s].length;r++)if(k.has(i[s][r],e))return"?"===s?n:s}else if(k.has(i[s],e))return"?"===s?n:s;return e}},S={browser:{oldSafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}},oldEdge:{version:{.1:"12.",21:"13.",31:"14.",39:"15.",41:"16.",42:"17.",44:"18."}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}},E={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[m,[w,"Chrome"]],[/(?:edge|edgios|edga|edg)\/([\w\.]+)/i],[m,[w,"Edge"]],[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]{3,6})\b.+version\/([\w\.-]+)/i,/(opera)(?:.+version\/|[\/\s]+)([\w\.]+)/i],[w,m],[/opios[\/\s]+([\w\.]+)/i],[m,[w,"Opera Mini"]],[/\sopr\/([\w\.]+)/i],[m,[w,"Opera"]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,/(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i,/(ba?idubrowser)[\/\s]?([\w\.]+)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i,/(rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([\w\.]+)/i,/(weibo)__([\d\.]+)/i],[w,m],[/(?:[\s\/]uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],[m,[w,"UCBrowser"]],[/(?:windowswechat)?\sqbcore\/([\w\.]+)\b.*(?:windowswechat)?/i],[m,[w,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[m,[w,"WeChat"]],[/konqueror\/([\w\.]+)/i],[m,[w,"Konqueror"]],[/trident.+rv[:\s]([\w\.]{1,9})\b.+like\sgecko/i],[m,[w,"IE"]],[/yabrowser\/([\w\.]+)/i],[m,[w,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[w,/(.+)/,"$1 Secure Browser"],m],[/focus\/([\w\.]+)/i],[m,[w,"Firefox Focus"]],[/opt\/([\w\.]+)/i],[m,[w,"Opera Touch"]],[/coc_coc_browser\/([\w\.]+)/i],[m,[w,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[m,[w,"Dolphin"]],[/coast\/([\w\.]+)/i],[m,[w,"Opera Coast"]],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[m,[w,"MIUI Browser"]],[/fxios\/([\w\.-]+)/i],[m,[w,"Firefox"]],[/(qihu|qhbrowser|qihoobrowser|360browser)/i],[[w,"360 Browser"]],[/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],[[w,/(.+)/,"$1 Browser"],m],[/(comodo_dragon)\/([\w\.]+)/i],[[w,/_/g," "],m],[/\s(electron)\/([\w\.]+)\ssafari/i,/(tesla)(?:\sqtcarbrowser|\/(20[12]\d\.[\w\.-]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/\s]?([\w\.]+)/i],[w,m],[/(MetaSr)[\/\s]?([\w\.]+)/i,/(LBBROWSER)/i],[w],[/;fbav\/([\w\.]+);/i],[m,[w,"Facebook"]],[/FBAN\/FBIOS|FB_IAB\/FB4A/i],[[w,"Facebook"]],[/safari\s(line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/\s]([\w\.-]+)/i],[w,m],[/\bgsa\/([\w\.]+)\s.*safari\//i],[m,[w,"GSA"]],[/headlesschrome(?:\/([\w\.]+)|\s)/i],[m,[w,"Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[w,"Chrome WebView"],m],[/droid.+\sversion\/([\w\.]+)\b.+(?:mobile\ssafari|safari)/i],[m,[w,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],[w,m],[/version\/([\w\.]+)\s.*mobile\/\w+\s(safari)/i],[m,[w,"Mobile Safari"]],[/version\/([\w\.]+)\s.*(mobile\s?safari|safari)/i],[m,w],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[w,[m,O.str,S.browser.oldSafari.version]],[/(webkit|khtml)\/([\w\.]+)/i],[w,m],[/(navigator|netscape)\/([\w\.-]+)/i],[[w,"Netscape"],m],[/ile\svr;\srv:([\w\.]+)\).+firefox/i],[m,[w,"Firefox Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,/(firefox)\/([\w\.]+)\s[\w\s\-]+\/[\w\.]+$/i,/(mozilla)\/([\w\.]+)\s.+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]*)/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[w,m]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[[f,"amd64"]],[/(ia32(?=;))/i],[[f,k.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[f,"ia32"]],[/\b(aarch64|armv?8e?l?)\b/i],[[f,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[f,"armhf"]],[/windows\s(ce|mobile);\sppc;/i],[[f,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[[f,/ower/,"",k.lowerize]],[/(sun4\w)[;\)]/i],[[f,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?:64|(?=v(?:[1-7]|[5-7]1)l?|;|eabi))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[f,k.lowerize]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus\s10)/i],[d,[b,"Samsung"],[c,g]],[/\b((?:s[cgp]h|gt|sm)-\w+|galaxy\snexus)/i,/\ssamsung[\s-]([\w-]+)/i,/sec-(sgh\w+)/i],[d,[b,"Samsung"],[c,h]],[/\((ip(?:hone|od)[\s\w]*);/i],[d,[b,"Apple"],[c,h]],[/\((ipad);[\w\s\),;-]+apple/i,/applecoremedia\/[\w\.]+\s\((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[d,[b,"Apple"],[c,g]],[/\b((?:agr|ags[23]|bah2?|sht?)-a?[lw]\d{2})/i],[d,[b,"Huawei"],[c,g]],[/d\/huawei([\w\s-]+)[;\)]/i,/\b(nexus\s6p|vog-[at]?l\d\d|ane-[at]?l[x\d]\d|eml-a?l\d\da?|lya-[at]?l\d[\dc]|clt-a?l\d\di?|ele-l\d\d)/i,/\b(\w{2,4}-[atu][ln][01259][019])[;\)\s]/i],[d,[b,"Huawei"],[c,h]],[/\b(poco[\s\w]+)(?:\sbuild|\))/i,/\b;\s(\w+)\sbuild\/hm\1/i,/\b(hm[\s\-_]?note?[\s_]?(?:\d\w)?)\sbuild/i,/\b(redmi[\s\-_]?(?:note|k)?[\w\s_]+)(?:\sbuild|\))/i,/\b(mi[\s\-_]?(?:a\d|one|one[\s_]plus|note lte)?[\s_]?(?:\d?\w?)[\s_]?(?:plus)?)\sbuild/i],[[d,/_/g," "],[b,"Xiaomi"],[c,h]],[/\b(mi[\s\-_]?(?:pad)(?:[\w\s_]+))(?:\sbuild|\))/i],[[d,/_/g," "],[b,"Xiaomi"],[c,g]],[/;\s(\w+)\sbuild.+\soppo/i,/\s(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007)\b/i],[d,[b,"OPPO"],[c,h]],[/\svivo\s(\w+)(?:\sbuild|\))/i,/\s(v[12]\d{3}\w?[at])(?:\sbuild|;)/i],[d,[b,"Vivo"],[c,h]],[/\s(rmx[12]\d{3})(?:\sbuild|;)/i],[d,[b,"Realme"],[c,h]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)\b[\w\s]+build\//i,/\smot(?:orola)?[\s-](\w*)/i,/((?:moto[\s\w\(\)]+|xt\d{3,4}|nexus\s6)(?=\sbuild|\)))/i],[d,[b,"Motorola"],[c,h]],[/\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[d,[b,"Motorola"],[c,g]],[/((?=lg)?[vl]k\-?\d{3})\sbuild|\s3\.[\s\w;-]{10}lg?-([06cv9]{3,4})/i],[d,[b,"LG"],[c,g]],[/(lm-?f100[nv]?|nexus\s[45])/i,/lg[e;\s\/-]+((?!browser|netcast)\w+)/i,/\blg(\-?[\d\w]+)\sbuild/i],[d,[b,"LG"],[c,h]],[/(ideatab[\w\-\s]+)/i,/lenovo\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+)|yt[\d\w-]{6}|tb[\d\w-]{6})/i],[d,[b,"Lenovo"],[c,g]],[/(?:maemo|nokia).*(n900|lumia\s\d+)/i,/nokia[\s_-]?([\w\.-]*)/i],[[d,/_/g," "],[b,"Nokia"],[c,h]],[/droid.+;\s(pixel\sc)[\s)]/i],[d,[b,"Google"],[c,g]],[/droid.+;\s(pixel[\s\daxl]{0,6})(?:\sbuild|\))/i],[d,[b,"Google"],[c,h]],[/droid.+\s([c-g]\d{4}|so[-l]\w+|xq-a\w[4-7][12])(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[d,[b,"Sony"],[c,h]],[/sony\stablet\s[ps]\sbuild\//i,/(?:sony)?sgp\w+(?:\sbuild\/|\))/i],[[d,"Xperia Tablet"],[b,"Sony"],[c,g]],[/\s(kb2005|in20[12]5|be20[12][59])\b/i,/\ba000(1)\sbuild/i,/\boneplus\s(a\d{4})[\s)]/i],[d,[b,"OnePlus"],[c,h]],[/(alexa)webm/i,/(kf[a-z]{2}wi)(\sbuild\/|\))/i,/(kf[a-z]+)(\sbuild\/|\)).+silk\//i],[d,[b,"Amazon"],[c,g]],[/(sd|kf)[0349hijorstuw]+(\sbuild\/|\)).+silk\//i],[[d,"Fire Phone"],[b,"Amazon"],[c,h]],[/\((playbook);[\w\s\),;-]+(rim)/i],[d,b,[c,g]],[/((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10;\s(\w+)/i],[d,[b,"BlackBerry"],[c,h]],[/(?:\b|asus_)(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus\s7|padfone|p00[cj])/i],[d,[b,"ASUS"],[c,g]],[/\s(z[es]6[027][01][km][ls]|zenfone\s\d\w?)\b/i],[d,[b,"ASUS"],[c,h]],[/(nexus\s9)/i],[d,[b,"HTC"],[c,g]],[/(htc)[;_\s-]{1,2}([\w\s]+(?=\)|\sbuild)|\w+)/i,/(zte)-(\w*)/i,/(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],[b,[d,/_/g," "],[c,h]],[/droid[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],[d,[b,"Acer"],[c,g]],[/droid.+;\s(m[1-5]\snote)\sbuild/i,/\bmz-([\w-]{2,})/i],[d,[b,"Meizu"],[c,h]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i,/(microsoft);\s(lumia[\s\w]+)/i,/(lenovo)[_\s-]?([\w-]+)/i,/linux;.+(jolla);/i,/droid.+;\s(oppo)\s?([\w\s]+)\sbuild/i],[b,d,[c,h]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i,/[;\/]\s?(le[\s\-]+pan)[\s\-]+(\w{1,9})\sbuild/i,/[;\/]\s?(trinity)[\-\s]*(t\d{3})\sbuild/i,/\b(gigaset)[\s\-]+(q\w{1,9})\sbuild/i,/\b(vodafone)\s([\w\s]+)(?:\)|\sbuild)/i],[b,d,[c,g]],[/\s(surface\sduo)\s/i],[d,[b,"Microsoft"],[c,g]],[/droid\s[\d\.]+;\s(fp\du?)\sbuild/i],[d,[b,"Fairphone"],[c,h]],[/\s(u304aa)\sbuild/i],[d,[b,"AT&T"],[c,h]],[/sie-(\w*)/i],[d,[b,"Siemens"],[c,h]],[/[;\/]\s?(rct\w+)\sbuild/i],[d,[b,"RCA"],[c,g]],[/[;\/\s](venue[\d\s]{2,7})\sbuild/i],[d,[b,"Dell"],[c,g]],[/[;\/]\s?(q(?:mv|ta)\w+)\sbuild/i],[d,[b,"Verizon"],[c,g]],[/[;\/]\s(?:barnes[&\s]+noble\s|bn[rt])([\w\s\+]*)\sbuild/i],[d,[b,"Barnes & Noble"],[c,g]],[/[;\/]\s(tm\d{3}\w+)\sbuild/i],[d,[b,"NuVision"],[c,g]],[/;\s(k88)\sbuild/i],[d,[b,"ZTE"],[c,g]],[/;\s(nx\d{3}j)\sbuild/i],[d,[b,"ZTE"],[c,h]],[/[;\/]\s?(gen\d{3})\sbuild.*49h/i],[d,[b,"Swiss"],[c,h]],[/[;\/]\s?(zur\d{3})\sbuild/i],[d,[b,"Swiss"],[c,g]],[/[;\/]\s?((zeki)?tb.*\b)\sbuild/i],[d,[b,"Zeki"],[c,g]],[/[;\/]\s([yr]\d{2})\sbuild/i,/[;\/]\s(dragon[\-\s]+touch\s|dt)(\w{5})\sbuild/i],[[b,"Dragon Touch"],d,[c,g]],[/[;\/]\s?(ns-?\w{0,9})\sbuild/i],[d,[b,"Insignia"],[c,g]],[/[;\/]\s?((nxa|Next)-?\w{0,9})\sbuild/i],[d,[b,"NextBook"],[c,g]],[/[;\/]\s?(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05]))\sbuild/i],[[b,"Voice"],d,[c,h]],[/[;\/]\s?(lvtel\-)?(v1[12])\sbuild/i],[[b,"LvTel"],d,[c,h]],[/;\s(ph-1)\s/i],[d,[b,"Essential"],[c,h]],[/[;\/]\s?(v(100md|700na|7011|917g).*\b)\sbuild/i],[d,[b,"Envizen"],[c,g]],[/[;\/]\s?(trio[\s\w\-\.]+)\sbuild/i],[d,[b,"MachSpeed"],[c,g]],[/[;\/]\s?tu_(1491)\sbuild/i],[d,[b,"Rotor"],[c,g]],[/(shield[\w\s]+)\sbuild/i],[d,[b,"Nvidia"],[c,g]],[/(sprint)\s(\w+)/i],[b,d,[c,h]],[/(kin\.[onetw]{3})/i],[[d,/\./g," "],[b,"Microsoft"],[c,h]],[/droid\s[\d\.]+;\s(cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[d,[b,"Zebra"],[c,g]],[/droid\s[\d\.]+;\s(ec30|ps20|tc[2-8]\d[kx])\)/i],[d,[b,"Zebra"],[c,h]],[/\s(ouya)\s/i,/(nintendo)\s([wids3utch]+)/i],[b,d,[c,p]],[/droid.+;\s(shield)\sbuild/i],[d,[b,"Nvidia"],[c,p]],[/(playstation\s[345portablevi]+)/i],[d,[b,"Sony"],[c,p]],[/[\s\(;](xbox(?:\sone)?(?!;\sxbox))[\s\);]/i],[d,[b,"Microsoft"],[c,p]],[/smart-tv.+(samsung)/i],[b,[c,v]],[/hbbtv.+maple;(\d+)/i],[[d,/^/,"SmartTV"],[b,"Samsung"],[c,v]],[/(?:linux;\snetcast.+smarttv|lg\snetcast\.tv-201\d)/i],[[b,"LG"],[c,v]],[/(apple)\s?tv/i],[b,[d,"Apple TV"],[c,v]],[/crkey/i],[[d,"Chromecast"],[b,"Google"],[c,v]],[/droid.+aft([\w])(\sbuild\/|\))/i],[d,[b,"Amazon"],[c,v]],[/\(dtv[\);].+(aquos)/i],[d,[b,"Sharp"],[c,v]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[b,k.trim],[d,k.trim],[c,v]],[/[\s\/\(](android\s|smart[-\s]?|opera\s)tv[;\)\s]/i],[[c,v]],[/((pebble))app\/[\d\.]+\s/i],[b,d,[c,y]],[/droid.+;\s(glass)\s\d/i],[d,[b,"Google"],[c,y]],[/droid\s[\d\.]+;\s(wt63?0{2,3})\)/i],[d,[b,"Zebra"],[c,y]],[/(tesla)(?:\sqtcarbrowser|\/20[12]\d\.[\w\.-]+)/i],[b,[c,x]],[/droid .+?; ([^;]+?)(?: build|\) applewebkit).+? mobile safari/i],[d,[c,h]],[/droid .+?;\s([^;]+?)(?: build|\) applewebkit).+?(?! mobile) safari/i],[d,[c,g]],[/\s(tablet|tab)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[c,k.lowerize]],[/(android[\w\.\s\-]{0,9});.+build/i],[d,[b,"Generic"]],[/(phone)/i],[[c,h]]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[m,[w,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[m,[w,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[w,m],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[m,w]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[w,m],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)(?!.+xbox)/i],[w,[m,O.str,S.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[w,"Windows"],[m,O.str,S.os.windows.version]],[/ip[honead]{2,4}\b(?:.*os\s([\w]+)\slike\smac|;\sopera)/i,/cfnetwork\/.+darwin/i],[[m,/_/g,"."],[w,"iOS"]],[/(mac\sos\sx)\s?([\w\s\.]*)/i,/(macintosh|mac(?=_powerpc)\s)(?!.+haiku)/i],[[w,"Mac OS"],[m,/_/g,"."]],[/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/\s]([\w\.]+)/i,/\((series40);/i],[w,m],[/\(bb(10);/i],[m,[w,"BlackBerry"]],[/(?:symbian\s?os|symbos|s60(?=;)|series60)[\/\s-]?([\w\.]*)/i],[m,[w,"Symbian"]],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[w,"Firefox OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[m,[w,"webOS"]],[/crkey\/([\d\.]+)/i],[m,[w,"Chromecast"]],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[w,"Chromium OS"],m],[/(nintendo|playstation)\s([wids345portablevuch]+)/i,/(xbox);\s+xbox\s([^\);]+)/i,/(mint)[\/\s\(\)]?(\w*)/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?=\slinux)|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus|raspbian)(?:\sgnu\/linux)?(?:\slinux)?[\/\s-]?(?!chrom|package)([\w\.-]*)/i,/(hurd|linux)\s?([\w\.]*)/i,/(gnu)\s?([\w\.]*)/i,/\s([frentopc-]{0,4}bsd|dragonfly)\s?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku)\s(\w+)/i],[w,m],[/(sunos)\s?([\w\.\d]*)/i],[[w,"Solaris"],m],[/((?:open)?solaris)[\/\s-]?([\w\.]*)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,/(unix)\s?([\w\.]*)/i],[w,m]]},A=function(e,i){if("object"===typeof e&&(i=e,e=n),!(this instanceof A))return new A(e,i).getResult();var s=e||("undefined"!==typeof o&&o.navigator&&o.navigator.userAgent?o.navigator.userAgent:""),r=i?k.extend(E,i):E;return this.getBrowser=function(){var e={name:n,version:n};return O.rgx.call(e,s,r.browser),e.major=k.major(e.version),e},this.getCPU=function(){var e={architecture:n};return O.rgx.call(e,s,r.cpu),e},this.getDevice=function(){var e={vendor:n,model:n,type:n};return O.rgx.call(e,s,r.device),e},this.getEngine=function(){var e={name:n,version:n};return O.rgx.call(e,s,r.engine),e},this.getOS=function(){var e={name:n,version:n};return O.rgx.call(e,s,r.os),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return s},this.setUA=function(e){return s=typeof e===u&&e.length>255?k.trim(e,255):e,this},this.setUA(s),this};A.VERSION="0.7.28",A.BROWSER={NAME:w,MAJOR:"major",VERSION:m},A.CPU={ARCHITECTURE:f},A.DEVICE={MODEL:d,VENDOR:b,TYPE:c,CONSOLE:p,MOBILE:h,SMARTTV:v,TABLET:g,WEARABLE:y,EMBEDDED:x},A.ENGINE={NAME:w,VERSION:m},A.OS={NAME:w,VERSION:m},typeof i!==a?(e.exports&&(i=e.exports=A),i.UAParser=A):(r=function(){return A}.call(i,s,i,e))===n||(e.exports=r);var _="undefined"!==typeof o&&(o.jQuery||o.Zepto);if(_&&!_.ua){var T=new A;_.ua=T.getResult(),_.ua.get=function(){return T.getUA()},_.ua.set=function(e){T.setUA(e);var i=T.getResult();for(var s in i)_.ua[s]=i[s]}}}("object"===typeof window?window:this)}}]);