(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[359],{9359:function(i,e,s){"use strict";var r,o=s(7294),n=(r=o)&&"object"===typeof r&&"default"in r?r.default:r,t=new(s(3451)),a=t.getBrowser(),l=(t.getCPU(),t.getDevice()),d=t.getEngine(),w=t.getOS(),u=t.getUA(),c=function(i){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"none";return i||e},b=function(){return!("undefined"===typeof window||!window.navigator&&!navigator)&&(window.navigator||navigator)},m=function(i){var e=b();return e&&e.platform&&(-1!==e.platform.indexOf(i)||"MacIntel"===e.platform&&e.maxTouchPoints>1&&!window.MSStream)};function p(i){return p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(i){return typeof i}:function(i){return i&&"function"===typeof Symbol&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},p(i)}function f(i,e){for(var s=0;s<e.length;s++){var r=e[s];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(i,r.key,r)}}function g(i,e,s){return e in i?Object.defineProperty(i,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):i[e]=s,i}function h(){return h=Object.assign||function(i){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(i[r]=s[r])}return i},h.apply(this,arguments)}function v(i,e){var s=Object.keys(i);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(i);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable}))),s.push.apply(s,r)}return s}function y(i){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(i){return i.__proto__||Object.getPrototypeOf(i)},y(i)}function x(i,e){return x=Object.setPrototypeOf||function(i,e){return i.__proto__=e,i},x(i,e)}function k(i){if(void 0===i)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}var O="mobile",S="tablet",E="smarttv",_="console",A="wearable",N=void 0,T="Chrome",j="Firefox",P="Opera",C="Yandex",M="Safari",B="Internet Explorer",z="Edge",R="Chromium",q="IE",F="Mobile Safari",I="MIUI Browser",U="iOS",V="Android",D="Windows Phone",L="Windows",W="Mac OS",G={isMobile:!1,isTablet:!1,isBrowser:!1,isSmartTV:!1,isConsole:!1,isWearable:!1},Z=function(i,e,s,r){return function(i){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?v(s,!0).forEach((function(e){g(i,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(s)):v(s).forEach((function(e){Object.defineProperty(i,e,Object.getOwnPropertyDescriptor(s,e))}))}return i}({},i,{vendor:c(e.vendor),model:c(e.model),os:c(s.name),osVersion:c(s.version),ua:c(r)})},H=function(i){switch(i){case O:return{isMobile:!0};case S:return{isTablet:!0};case E:return{isSmartTV:!0};case _:return{isConsole:!0};case A:return{isWearable:!0};case N:return{isBrowser:!0};default:return G}}(l.type);var $=function(){return"string"===typeof u&&-1!==u.indexOf("Edg/")},X=function(){return a.name===z},Y=function(){return m("iPad")},J=l.type===E,K=l.type===_,Q=l.type===A,ii=a.name===F||Y(),ei=a.name===R,si=function(){switch(l.type){case O:case S:return!0;default:return!1}}()||Y(),ri=l.type===O,oi=l.type===S||Y(),ni=l.type===N,ti=w.name===V,ai=w.name===D,li=w.name===U||Y(),di=a.name===T,wi=a.name===j,ui=a.name===M||a.name===F,ci=a.name===P,bi=a.name===B||a.name===q,mi=c(w.version),pi=c(w.name),fi=c(a.version),gi=c(a.major),hi=c(a.name),vi=c(l.vendor),yi=c(l.model),xi=c(d.name),ki=c(d.version),Oi=c(u),Si=X()||$(),Ei=a.name===C,_i=c(l.type,"browser"),Ai=function(){var i=b();return i&&(/iPad|iPhone|iPod/.test(i.platform)||"MacIntel"===i.platform&&i.maxTouchPoints>1)&&!window.MSStream}(),Ni=Y(),Ti=m("iPhone"),ji=m("iPod"),Pi=function(){var i=b(),e=i&&i.userAgent.toLowerCase();return"string"===typeof e&&/electron/.test(e)}(),Ci=$(),Mi=X()&&!$(),Bi=w.name===L,zi=w.name===W,Ri=a.name===I;e.I3=function(i){var e=i.renderWithFragment,s=i.children,r=i.viewClassName,t=i.style;return ni?e?n.createElement(o.Fragment,null,s):n.createElement("div",{className:r,style:t},s):null},e.A_=function(i){var e=i.renderWithFragment,s=i.children,r=i.viewClassName,t=i.style;return ri?e?n.createElement(o.Fragment,null,s):n.createElement("div",{className:r,style:t},s):null},e.tq=si},3451:function(i,e,s){var r;!function(o,n){"use strict";var t="function",a="undefined",l="object",d="string",w="model",u="name",c="type",b="vendor",m="version",p="architecture",f="console",g="mobile",h="tablet",v="smarttv",y="wearable",x="embedded",k={extend:function(i,e){var s={};for(var r in i)e[r]&&e[r].length%2===0?s[r]=e[r].concat(i[r]):s[r]=i[r];return s},has:function(i,e){return typeof i===d&&-1!==e.toLowerCase().indexOf(i.toLowerCase())},lowerize:function(i){return i.toLowerCase()},major:function(i){return typeof i===d?i.replace(/[^\d\.]/g,"").split(".")[0]:n},trim:function(i,e){return i=i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),typeof e===a?i:i.substring(0,255)}},O={rgx:function(i,e){for(var s,r,o,a,d,w,u=0;u<e.length&&!d;){var c=e[u],b=e[u+1];for(s=r=0;s<c.length&&!d;)if(d=c[s++].exec(i))for(o=0;o<b.length;o++)w=d[++r],typeof(a=b[o])===l&&a.length>0?2==a.length?typeof a[1]==t?this[a[0]]=a[1].call(this,w):this[a[0]]=a[1]:3==a.length?typeof a[1]!==t||a[1].exec&&a[1].test?this[a[0]]=w?w.replace(a[1],a[2]):n:this[a[0]]=w?a[1].call(this,w,a[2]):n:4==a.length&&(this[a[0]]=w?a[3].call(this,w.replace(a[1],a[2])):n):this[a]=w||n;u+=2}},str:function(i,e){for(var s in e)if(typeof e[s]===l&&e[s].length>0){for(var r=0;r<e[s].length;r++)if(k.has(e[s][r],i))return"?"===s?n:s}else if(k.has(e[s],i))return"?"===s?n:s;return i}},S={browser:{oldSafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}},oldEdge:{version:{.1:"12.",21:"13.",31:"14.",39:"15.",41:"16.",42:"17.",44:"18."}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}},E={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[m,[u,"Chrome"]],[/(?:edge|edgios|edga|edg)\/([\w\.]+)/i],[m,[u,"Edge"]],[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]{3,6})\b.+version\/([\w\.-]+)/i,/(opera)(?:.+version\/|[\/\s]+)([\w\.]+)/i],[u,m],[/opios[\/\s]+([\w\.]+)/i],[m,[u,"Opera Mini"]],[/\sopr\/([\w\.]+)/i],[m,[u,"Opera"]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,/(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i,/(ba?idubrowser)[\/\s]?([\w\.]+)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i,/(rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([\w\.]+)/i,/(weibo)__([\d\.]+)/i],[u,m],[/(?:[\s\/]uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],[m,[u,"UCBrowser"]],[/(?:windowswechat)?\sqbcore\/([\w\.]+)\b.*(?:windowswechat)?/i],[m,[u,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[m,[u,"WeChat"]],[/konqueror\/([\w\.]+)/i],[m,[u,"Konqueror"]],[/trident.+rv[:\s]([\w\.]{1,9})\b.+like\sgecko/i],[m,[u,"IE"]],[/yabrowser\/([\w\.]+)/i],[m,[u,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[u,/(.+)/,"$1 Secure Browser"],m],[/focus\/([\w\.]+)/i],[m,[u,"Firefox Focus"]],[/opt\/([\w\.]+)/i],[m,[u,"Opera Touch"]],[/coc_coc_browser\/([\w\.]+)/i],[m,[u,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[m,[u,"Dolphin"]],[/coast\/([\w\.]+)/i],[m,[u,"Opera Coast"]],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[m,[u,"MIUI Browser"]],[/fxios\/([\w\.-]+)/i],[m,[u,"Firefox"]],[/(qihu|qhbrowser|qihoobrowser|360browser)/i],[[u,"360 Browser"]],[/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],[[u,/(.+)/,"$1 Browser"],m],[/(comodo_dragon)\/([\w\.]+)/i],[[u,/_/g," "],m],[/\s(electron)\/([\w\.]+)\ssafari/i,/(tesla)(?:\sqtcarbrowser|\/(20[12]\d\.[\w\.-]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/\s]?([\w\.]+)/i],[u,m],[/(MetaSr)[\/\s]?([\w\.]+)/i,/(LBBROWSER)/i],[u],[/;fbav\/([\w\.]+);/i],[m,[u,"Facebook"]],[/FBAN\/FBIOS|FB_IAB\/FB4A/i],[[u,"Facebook"]],[/safari\s(line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/\s]([\w\.-]+)/i],[u,m],[/\bgsa\/([\w\.]+)\s.*safari\//i],[m,[u,"GSA"]],[/headlesschrome(?:\/([\w\.]+)|\s)/i],[m,[u,"Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[u,"Chrome WebView"],m],[/droid.+\sversion\/([\w\.]+)\b.+(?:mobile\ssafari|safari)/i],[m,[u,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],[u,m],[/version\/([\w\.]+)\s.*mobile\/\w+\s(safari)/i],[m,[u,"Mobile Safari"]],[/version\/([\w\.]+)\s.*(mobile\s?safari|safari)/i],[m,u],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[u,[m,O.str,S.browser.oldSafari.version]],[/(webkit|khtml)\/([\w\.]+)/i],[u,m],[/(navigator|netscape)\/([\w\.-]+)/i],[[u,"Netscape"],m],[/ile\svr;\srv:([\w\.]+)\).+firefox/i],[m,[u,"Firefox Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,/(firefox)\/([\w\.]+)\s[\w\s\-]+\/[\w\.]+$/i,/(mozilla)\/([\w\.]+)\s.+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]*)/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[u,m]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[[p,"amd64"]],[/(ia32(?=;))/i],[[p,k.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[p,"ia32"]],[/\b(aarch64|armv?8e?l?)\b/i],[[p,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[p,"armhf"]],[/windows\s(ce|mobile);\sppc;/i],[[p,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[[p,/ower/,"",k.lowerize]],[/(sun4\w)[;\)]/i],[[p,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?:64|(?=v(?:[1-7]|[5-7]1)l?|;|eabi))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[p,k.lowerize]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus\s10)/i],[w,[b,"Samsung"],[c,h]],[/\b((?:s[cgp]h|gt|sm)-\w+|galaxy\snexus)/i,/\ssamsung[\s-]([\w-]+)/i,/sec-(sgh\w+)/i],[w,[b,"Samsung"],[c,g]],[/\((ip(?:hone|od)[\s\w]*);/i],[w,[b,"Apple"],[c,g]],[/\((ipad);[\w\s\),;-]+apple/i,/applecoremedia\/[\w\.]+\s\((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[w,[b,"Apple"],[c,h]],[/\b((?:agr|ags[23]|bah2?|sht?)-a?[lw]\d{2})/i],[w,[b,"Huawei"],[c,h]],[/d\/huawei([\w\s-]+)[;\)]/i,/\b(nexus\s6p|vog-[at]?l\d\d|ane-[at]?l[x\d]\d|eml-a?l\d\da?|lya-[at]?l\d[\dc]|clt-a?l\d\di?|ele-l\d\d)/i,/\b(\w{2,4}-[atu][ln][01259][019])[;\)\s]/i],[w,[b,"Huawei"],[c,g]],[/\b(poco[\s\w]+)(?:\sbuild|\))/i,/\b;\s(\w+)\sbuild\/hm\1/i,/\b(hm[\s\-_]?note?[\s_]?(?:\d\w)?)\sbuild/i,/\b(redmi[\s\-_]?(?:note|k)?[\w\s_]+)(?:\sbuild|\))/i,/\b(mi[\s\-_]?(?:a\d|one|one[\s_]plus|note lte)?[\s_]?(?:\d?\w?)[\s_]?(?:plus)?)\sbuild/i],[[w,/_/g," "],[b,"Xiaomi"],[c,g]],[/\b(mi[\s\-_]?(?:pad)(?:[\w\s_]+))(?:\sbuild|\))/i],[[w,/_/g," "],[b,"Xiaomi"],[c,h]],[/;\s(\w+)\sbuild.+\soppo/i,/\s(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007)\b/i],[w,[b,"OPPO"],[c,g]],[/\svivo\s(\w+)(?:\sbuild|\))/i,/\s(v[12]\d{3}\w?[at])(?:\sbuild|;)/i],[w,[b,"Vivo"],[c,g]],[/\s(rmx[12]\d{3})(?:\sbuild|;)/i],[w,[b,"Realme"],[c,g]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)\b[\w\s]+build\//i,/\smot(?:orola)?[\s-](\w*)/i,/((?:moto[\s\w\(\)]+|xt\d{3,4}|nexus\s6)(?=\sbuild|\)))/i],[w,[b,"Motorola"],[c,g]],[/\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[w,[b,"Motorola"],[c,h]],[/((?=lg)?[vl]k\-?\d{3})\sbuild|\s3\.[\s\w;-]{10}lg?-([06cv9]{3,4})/i],[w,[b,"LG"],[c,h]],[/(lm-?f100[nv]?|nexus\s[45])/i,/lg[e;\s\/-]+((?!browser|netcast)\w+)/i,/\blg(\-?[\d\w]+)\sbuild/i],[w,[b,"LG"],[c,g]],[/(ideatab[\w\-\s]+)/i,/lenovo\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+)|yt[\d\w-]{6}|tb[\d\w-]{6})/i],[w,[b,"Lenovo"],[c,h]],[/(?:maemo|nokia).*(n900|lumia\s\d+)/i,/nokia[\s_-]?([\w\.-]*)/i],[[w,/_/g," "],[b,"Nokia"],[c,g]],[/droid.+;\s(pixel\sc)[\s)]/i],[w,[b,"Google"],[c,h]],[/droid.+;\s(pixel[\s\daxl]{0,6})(?:\sbuild|\))/i],[w,[b,"Google"],[c,g]],[/droid.+\s([c-g]\d{4}|so[-l]\w+|xq-a\w[4-7][12])(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[w,[b,"Sony"],[c,g]],[/sony\stablet\s[ps]\sbuild\//i,/(?:sony)?sgp\w+(?:\sbuild\/|\))/i],[[w,"Xperia Tablet"],[b,"Sony"],[c,h]],[/\s(kb2005|in20[12]5|be20[12][59])\b/i,/\ba000(1)\sbuild/i,/\boneplus\s(a\d{4})[\s)]/i],[w,[b,"OnePlus"],[c,g]],[/(alexa)webm/i,/(kf[a-z]{2}wi)(\sbuild\/|\))/i,/(kf[a-z]+)(\sbuild\/|\)).+silk\//i],[w,[b,"Amazon"],[c,h]],[/(sd|kf)[0349hijorstuw]+(\sbuild\/|\)).+silk\//i],[[w,"Fire Phone"],[b,"Amazon"],[c,g]],[/\((playbook);[\w\s\),;-]+(rim)/i],[w,b,[c,h]],[/((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10;\s(\w+)/i],[w,[b,"BlackBerry"],[c,g]],[/(?:\b|asus_)(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus\s7|padfone|p00[cj])/i],[w,[b,"ASUS"],[c,h]],[/\s(z[es]6[027][01][km][ls]|zenfone\s\d\w?)\b/i],[w,[b,"ASUS"],[c,g]],[/(nexus\s9)/i],[w,[b,"HTC"],[c,h]],[/(htc)[;_\s-]{1,2}([\w\s]+(?=\)|\sbuild)|\w+)/i,/(zte)-(\w*)/i,/(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],[b,[w,/_/g," "],[c,g]],[/droid[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],[w,[b,"Acer"],[c,h]],[/droid.+;\s(m[1-5]\snote)\sbuild/i,/\bmz-([\w-]{2,})/i],[w,[b,"Meizu"],[c,g]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i,/(microsoft);\s(lumia[\s\w]+)/i,/(lenovo)[_\s-]?([\w-]+)/i,/linux;.+(jolla);/i,/droid.+;\s(oppo)\s?([\w\s]+)\sbuild/i],[b,w,[c,g]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i,/[;\/]\s?(le[\s\-]+pan)[\s\-]+(\w{1,9})\sbuild/i,/[;\/]\s?(trinity)[\-\s]*(t\d{3})\sbuild/i,/\b(gigaset)[\s\-]+(q\w{1,9})\sbuild/i,/\b(vodafone)\s([\w\s]+)(?:\)|\sbuild)/i],[b,w,[c,h]],[/\s(surface\sduo)\s/i],[w,[b,"Microsoft"],[c,h]],[/droid\s[\d\.]+;\s(fp\du?)\sbuild/i],[w,[b,"Fairphone"],[c,g]],[/\s(u304aa)\sbuild/i],[w,[b,"AT&T"],[c,g]],[/sie-(\w*)/i],[w,[b,"Siemens"],[c,g]],[/[;\/]\s?(rct\w+)\sbuild/i],[w,[b,"RCA"],[c,h]],[/[;\/\s](venue[\d\s]{2,7})\sbuild/i],[w,[b,"Dell"],[c,h]],[/[;\/]\s?(q(?:mv|ta)\w+)\sbuild/i],[w,[b,"Verizon"],[c,h]],[/[;\/]\s(?:barnes[&\s]+noble\s|bn[rt])([\w\s\+]*)\sbuild/i],[w,[b,"Barnes & Noble"],[c,h]],[/[;\/]\s(tm\d{3}\w+)\sbuild/i],[w,[b,"NuVision"],[c,h]],[/;\s(k88)\sbuild/i],[w,[b,"ZTE"],[c,h]],[/;\s(nx\d{3}j)\sbuild/i],[w,[b,"ZTE"],[c,g]],[/[;\/]\s?(gen\d{3})\sbuild.*49h/i],[w,[b,"Swiss"],[c,g]],[/[;\/]\s?(zur\d{3})\sbuild/i],[w,[b,"Swiss"],[c,h]],[/[;\/]\s?((zeki)?tb.*\b)\sbuild/i],[w,[b,"Zeki"],[c,h]],[/[;\/]\s([yr]\d{2})\sbuild/i,/[;\/]\s(dragon[\-\s]+touch\s|dt)(\w{5})\sbuild/i],[[b,"Dragon Touch"],w,[c,h]],[/[;\/]\s?(ns-?\w{0,9})\sbuild/i],[w,[b,"Insignia"],[c,h]],[/[;\/]\s?((nxa|Next)-?\w{0,9})\sbuild/i],[w,[b,"NextBook"],[c,h]],[/[;\/]\s?(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05]))\sbuild/i],[[b,"Voice"],w,[c,g]],[/[;\/]\s?(lvtel\-)?(v1[12])\sbuild/i],[[b,"LvTel"],w,[c,g]],[/;\s(ph-1)\s/i],[w,[b,"Essential"],[c,g]],[/[;\/]\s?(v(100md|700na|7011|917g).*\b)\sbuild/i],[w,[b,"Envizen"],[c,h]],[/[;\/]\s?(trio[\s\w\-\.]+)\sbuild/i],[w,[b,"MachSpeed"],[c,h]],[/[;\/]\s?tu_(1491)\sbuild/i],[w,[b,"Rotor"],[c,h]],[/(shield[\w\s]+)\sbuild/i],[w,[b,"Nvidia"],[c,h]],[/(sprint)\s(\w+)/i],[b,w,[c,g]],[/(kin\.[onetw]{3})/i],[[w,/\./g," "],[b,"Microsoft"],[c,g]],[/droid\s[\d\.]+;\s(cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[w,[b,"Zebra"],[c,h]],[/droid\s[\d\.]+;\s(ec30|ps20|tc[2-8]\d[kx])\)/i],[w,[b,"Zebra"],[c,g]],[/\s(ouya)\s/i,/(nintendo)\s([wids3utch]+)/i],[b,w,[c,f]],[/droid.+;\s(shield)\sbuild/i],[w,[b,"Nvidia"],[c,f]],[/(playstation\s[345portablevi]+)/i],[w,[b,"Sony"],[c,f]],[/[\s\(;](xbox(?:\sone)?(?!;\sxbox))[\s\);]/i],[w,[b,"Microsoft"],[c,f]],[/smart-tv.+(samsung)/i],[b,[c,v]],[/hbbtv.+maple;(\d+)/i],[[w,/^/,"SmartTV"],[b,"Samsung"],[c,v]],[/(?:linux;\snetcast.+smarttv|lg\snetcast\.tv-201\d)/i],[[b,"LG"],[c,v]],[/(apple)\s?tv/i],[b,[w,"Apple TV"],[c,v]],[/crkey/i],[[w,"Chromecast"],[b,"Google"],[c,v]],[/droid.+aft([\w])(\sbuild\/|\))/i],[w,[b,"Amazon"],[c,v]],[/\(dtv[\);].+(aquos)/i],[w,[b,"Sharp"],[c,v]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[b,k.trim],[w,k.trim],[c,v]],[/[\s\/\(](android\s|smart[-\s]?|opera\s)tv[;\)\s]/i],[[c,v]],[/((pebble))app\/[\d\.]+\s/i],[b,w,[c,y]],[/droid.+;\s(glass)\s\d/i],[w,[b,"Google"],[c,y]],[/droid\s[\d\.]+;\s(wt63?0{2,3})\)/i],[w,[b,"Zebra"],[c,y]],[/(tesla)(?:\sqtcarbrowser|\/20[12]\d\.[\w\.-]+)/i],[b,[c,x]],[/droid .+?; ([^;]+?)(?: build|\) applewebkit).+? mobile safari/i],[w,[c,g]],[/droid .+?;\s([^;]+?)(?: build|\) applewebkit).+?(?! mobile) safari/i],[w,[c,h]],[/\s(tablet|tab)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[c,k.lowerize]],[/(android[\w\.\s\-]{0,9});.+build/i],[w,[b,"Generic"]],[/(phone)/i],[[c,g]]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[m,[u,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[m,[u,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[u,m],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[m,u]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[u,m],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)(?!.+xbox)/i],[u,[m,O.str,S.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[u,"Windows"],[m,O.str,S.os.windows.version]],[/ip[honead]{2,4}\b(?:.*os\s([\w]+)\slike\smac|;\sopera)/i,/cfnetwork\/.+darwin/i],[[m,/_/g,"."],[u,"iOS"]],[/(mac\sos\sx)\s?([\w\s\.]*)/i,/(macintosh|mac(?=_powerpc)\s)(?!.+haiku)/i],[[u,"Mac OS"],[m,/_/g,"."]],[/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/\s]([\w\.]+)/i,/\((series40);/i],[u,m],[/\(bb(10);/i],[m,[u,"BlackBerry"]],[/(?:symbian\s?os|symbos|s60(?=;)|series60)[\/\s-]?([\w\.]*)/i],[m,[u,"Symbian"]],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[u,"Firefox OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[m,[u,"webOS"]],[/crkey\/([\d\.]+)/i],[m,[u,"Chromecast"]],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[u,"Chromium OS"],m],[/(nintendo|playstation)\s([wids345portablevuch]+)/i,/(xbox);\s+xbox\s([^\);]+)/i,/(mint)[\/\s\(\)]?(\w*)/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?=\slinux)|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus|raspbian)(?:\sgnu\/linux)?(?:\slinux)?[\/\s-]?(?!chrom|package)([\w\.-]*)/i,/(hurd|linux)\s?([\w\.]*)/i,/(gnu)\s?([\w\.]*)/i,/\s([frentopc-]{0,4}bsd|dragonfly)\s?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku)\s(\w+)/i],[u,m],[/(sunos)\s?([\w\.\d]*)/i],[[u,"Solaris"],m],[/((?:open)?solaris)[\/\s-]?([\w\.]*)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,/(unix)\s?([\w\.]*)/i],[u,m]]},_=function(i,e){if("object"===typeof i&&(e=i,i=n),!(this instanceof _))return new _(i,e).getResult();var s=i||("undefined"!==typeof o&&o.navigator&&o.navigator.userAgent?o.navigator.userAgent:""),r=e?k.extend(E,e):E;return this.getBrowser=function(){var i={name:n,version:n};return O.rgx.call(i,s,r.browser),i.major=k.major(i.version),i},this.getCPU=function(){var i={architecture:n};return O.rgx.call(i,s,r.cpu),i},this.getDevice=function(){var i={vendor:n,model:n,type:n};return O.rgx.call(i,s,r.device),i},this.getEngine=function(){var i={name:n,version:n};return O.rgx.call(i,s,r.engine),i},this.getOS=function(){var i={name:n,version:n};return O.rgx.call(i,s,r.os),i},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return s},this.setUA=function(i){return s=typeof i===d&&i.length>255?k.trim(i,255):i,this},this.setUA(s),this};_.VERSION="0.7.28",_.BROWSER={NAME:u,MAJOR:"major",VERSION:m},_.CPU={ARCHITECTURE:p},_.DEVICE={MODEL:w,VENDOR:b,TYPE:c,CONSOLE:f,MOBILE:g,SMARTTV:v,TABLET:h,WEARABLE:y,EMBEDDED:x},_.ENGINE={NAME:u,VERSION:m},_.OS={NAME:u,VERSION:m},typeof e!==a?(i.exports&&(e=i.exports=_),e.UAParser=_):(r=function(){return _}.call(e,s,e,i))===n||(i.exports=r);var A="undefined"!==typeof o&&(o.jQuery||o.Zepto);if(A&&!A.ua){var N=new _;A.ua=N.getResult(),A.ua.get=function(){return N.getUA()},A.ua.set=function(i){N.setUA(i);var e=N.getResult();for(var s in e)A.ua[s]=e[s]}}}("object"===typeof window?window:this)}}]);