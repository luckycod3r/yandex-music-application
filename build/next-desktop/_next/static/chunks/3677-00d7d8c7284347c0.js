(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3677],{36245:function(e,t){"use strict";var n=function(e){function t(t,a,o,i){var c=a?n+t+e.e+a:n+t,u=c;if(o){var s=" "+u+e.m;for(var l in o)if(o.hasOwnProperty(l)){var d=o[l];!0===d?u+=s+l:d&&(u+=s+l+r+d)}}if(void 0!==i)for(var f=0,v=i.length;f<v;f++){var h=i[f];if(h&&"string"==typeof h.valueOf())for(var m=h.valueOf().split(" "),p=0;p<m.length;p++){var g=m[p];g!==c&&(u+=" "+g)}}return u}var n=e.n||"",r=e.v||e.m;return function(e,n){return function(r,a,o){return"string"==typeof r?Array.isArray(a)?t(e,r,void 0,a):t(e,r,a,o):t(e,n,r,a)}}}({e:"-",m:"_"});t.cn=n},20243:function(e,t,n){"use strict";e.exports=n(36245)},92089:function(e,t,n){"use strict";n.d(t,{J:function(){return r}});var r="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement},63426:function(e,t,n){"use strict";n.d(t,{t:function(){return a}});var r=n(99616);function a(e,t){(0,r.useImperativeHandle)(t,function(){return e.current})}},98595:function(e,t,n){"use strict";n.r(t),n.d(t,{useIsomorphicLayoutEffect:function(){return r.L}});var r=n(88871)},88871:function(e,t,n){"use strict";n.d(t,{L:function(){return a}});var r=n(99616),a=n(92089).J?r.useLayoutEffect:r.useEffect},57356:function(e,t,n){"use strict";n.r(t),n.d(t,{lock:function(){return g},unlock:function(){return C}});var r,a=n(92089);function o(e){return"undefined"!=typeof window&&null!=window.navigator&&e.test(window.navigator.userAgent)}function i(){return o(/iphone|ipod|ipad/i)||o(/macintosh/i)&&navigator.maxTouchPoints>1}function c(e,t){var n={};for(var r in t)t.hasOwnProperty(r)&&(n[r]=e.style[r]);for(var r in t)t.hasOwnProperty(r)&&(e.style[r]=t[r]);return n}function u(e){return e===document.body||e===document.documentElement}var s=Math.random().toString(36).slice(2),l="__scrollLockState$".concat(s),d=!function(){var e=!1;if(!a.J)return!1;try{var t=function(){return null};window.addEventListener("testPassive",t,{get passive(){e=!0;return}}),window.removeEventListener("testPassive",t)}catch(e){}return e}()?void 0:{passive:!1},f={count:0,lastX:0,lastY:0,scrollable:null,scrollX:0,scrollY:0};function v(e){1!==e.changedTouches.length||(f.scrollable=function(e){for(var t,n;e&&(t=e,n=getComputedStyle(t),!/(auto|scroll)/.test(n.overflow+n.overflowX+n.overflowY));)e=e.parentElement;return e||document.documentElement}(e.target),u(f.scrollable)||(f.lastX=e.changedTouches[0].pageX,f.lastY=e.changedTouches[0].pageY))}function h(e){var t=f.scrollable,n=f.lastX,r=f.lastY;if(!(e.changedTouches.length>1)){if(!t||u(t)){e.preventDefault();return}var a=e.changedTouches[0].pageX,o=e.changedTouches[0].pageY,i=Math.abs(r-o)>Math.abs(n-a),c=t.scrollTop,s=t.scrollHeight-t.clientHeight,l=t.scrollLeft,d=t.scrollWidth-t.clientWidth,v=!i&&(l<=0&&a>n||l>=d&&a<n);(i&&(c<=0&&o>r||c>=s&&o<r)||v)&&e.preventDefault(),f.lastX=a,f.lastY=o}}function m(){f.scrollable&&(f.scrollable=null)}function p(e){return e||document.body}function g(e){if(a.J){var t=p(e);!function(e){var t,n,a,o=e[l];if(o){o.count++;return}var i=(t=u(e)&&window.innerWidth-document.documentElement.clientWidth>0,n=e.scrollHeight>e.clientHeight,t||n||(a=getComputedStyle(e).overflowY,/scroll/.test(a))?function(){if("undefined"==typeof document)return 0;if(void 0===r){var e=document.createElement("div");e.style.width="100%",e.style.height="200px";var t=document.createElement("div");t.style.position="absolute",t.style.top="0",t.style.left="0",t.style.pointerEvents="none",t.style.visibility="hidden",t.style.width="200px",t.style.height="150px",t.style.overflow="hidden",t.appendChild(e),document.body.appendChild(t);var n=e.offsetWidth;t.style.overflow="scroll";var a=e.offsetWidth;n===a&&(a=t.clientWidth),document.body.removeChild(t),r=n-a}return r}():0),s=parseInt(getComputedStyle(e).getPropertyValue("padding-right"),10),d=c(e,{paddingRight:"".concat(s+i,"px"),overflow:"hidden",overflowX:"hidden",overflowY:"hidden"});e[l]={initialStyle:d,count:1}}(t),i()&&u(t)&&(f.count++,1===f.count&&(f.scrollX=window.pageXOffset,f.scrollY=window.pageYOffset,document.addEventListener("touchstart",v,d),document.addEventListener("touchmove",h,d),document.addEventListener("touchend",m,d)))}}function C(e){if(a.J){var t,n,r=p(e);(n=(t=r)[l])&&(n.count--,0===n.count&&(c(t,n.initialStyle),delete t[l])),i()&&u(r)&&0!==f.count&&(f.count--,0===f.count&&(document.removeEventListener("touchstart",v),document.removeEventListener("touchmove",h),document.removeEventListener("touchend",m),window.scrollTo(f.scrollX,f.scrollY)))}}},78103:function(e,t,n){"use strict";t.t=void 0;var r=n(26688),a=n(99616),o=n(98595),i=r.__importStar(n(57356));t.t=function(e){var t=e.enabled,n=e.containerRef,r=(0,a.useRef)(null),c=(0,a.useRef)(!1);(0,o.useIsomorphicLayoutEffect)(function(){var e=n?n.current:null;r.current!==e&&(t&&c.current&&(i.unlock(r.current),i.lock(e)),r.current=e)}),(0,o.useIsomorphicLayoutEffect)(function(){if(t)return c.current=!0,i.lock(r.current),function(){c.current=!1,i.unlock(r.current)}},[t])}},28248:function(e,t,n){"use strict";n.d(t,{L:function(){return o},V:function(){return i}});var r=n(99616),a=n(20243);n(2216);var o=(0,a.cn)("UserWidget","Content"),i=r.forwardRef(function(e,t){var n=e.loading,a=e.preload,i=e.height,c=e.colorScheme,u=e.src,s=e.width;return r.createElement("div",{className:o({loading:n,colorScheme:c})},a&&r.createElement("iframe",{className:"UserWidget-Iframe",ref:t,width:s,src:u,height:n?300:i}),n&&r.createElement("div",{className:"UserWidget-Spin"}))})},85500:function(e,t,n){"use strict";n.r(t),n.d(t,{Content:function(){return r.V},cnUserID:function(){return r.L}});var r=n(28248)},82468:function(e,t,n){"use strict";n.d(t,{V:function(){return s}});var r=n(99616),a=n(20243),o=n(78103);n(91108);var i=(0,a.cn)("UserID","CloseButton"),c=function(e){var t=e.onClick,n=e.colorScheme;return r.createElement("button",{className:i({colorScheme:n}),onClick:t,"aria-label":"Закрыть",tabIndex:1},r.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",focusable:"false","aria-hidden":"true"},r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z",fill:"currentColor"})))};n(38657);var u=(0,a.cn)("UserWidget","Dialog"),s=(0,r.forwardRef)(function(e,t){var n=e.visible,a=e.loading,i=e.colorScheme,s=e.platform,l=e.onClose,d=e.className;return(0,o.t)({enabled:n&&"touch"===s}),r.createElement("div",{role:"dialog","aria-busy":a,"aria-modal":"true",className:u("Dialog",{visible:n,loading:a,colorScheme:i,platform:s},[d]),ref:t},a&&r.createElement(c,{colorScheme:i,onClick:l}),e.children)})},38676:function(e,t,n){"use strict";n.r(t),n.d(t,{Dialog:function(){return r.V}});var r=n(82468)},26480:function(e,t,n){"use strict";n.r(t),n.d(t,{User:function(){return h},UserBase:function(){return f}});var r=n(99616),a=n(20243),o=n(63426),i=n(26688);n(61704);var c=function(e){var t=e.children,n=e.fetchMail,a=e.tld,o=e.hideCounter,c=(0,i.__read)((0,r.useState)(0),2),u=c[0],s=c[1];(0,r.useEffect)(function(){n&&!o&&fetch("https://mail.yandex."+a+"/api/v2/serp/counters?silent",{credentials:"include"}).then(function(e){return e.json()}).then(function(e){return s(e.counters.unread)}).catch(function(e){})},[a,n,o]);var l=n&&u>0?Math.min(u,99):void 0,d=!!(n&&l&&u>l),f=l&&!o?""+l+(d?"+":""):null;return r.createElement("div",{className:"UserID-Badge"},t,r.createElement("div",{className:"UserID-Badge-Dot"},f))};c.displayName="UserIDBadge",n(2041);var u=function(e,t,n){return void 0===e&&(e="https://avatars.mds.yandex.net"),void 0===t&&(t="0/0-0"),e+"/get-yapic/"+t+"/"+(n?"islands-retina-middle":"islands-middle")},s=(0,a.cn)("UserID","Avatar"),l=function(e){var t=e.host,n=e.avatarId,a=e.plus,o=e.child,c=e.colorScheme,l=e.className,d=(0,i.__read)((0,r.useState)(!1),2),f=d[0],v=d[1],h=(0,r.useMemo)(function(){return u(t,n,!1)},[t,n]),m=(0,r.useMemo)(function(){return u(t,n,!0)},[t,n]),p=(0,r.useRef)(null);return(0,r.useEffect)(function(){var e=p.current;window&&o&&e&&v(e.getBoundingClientRect().width<=36)},[o,p]),r.createElement("div",{className:s({child:o,plus:a,small:f,dark:"dark"===c},[l]),ref:p},r.createElement("img",{src:h,className:"UserID-Avatar-Image",srcSet:h+" 1x, "+m+" 2x"}),o&&r.createElement("svg",{className:"UserID-Avatar-ChildStroke",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 300 300"},r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M165.9 37.9822L166.068 38.0049C166.221 38.0257 166.442 38.0562 166.726 38.0968C167.295 38.1778 168.118 38.2987 169.162 38.4618C171.249 38.7878 174.224 39.283 177.813 39.9651C184.975 41.3261 194.666 43.4461 204.678 46.4778C214.632 49.492 225.211 53.4982 233.986 58.7338C242.568 63.8543 250.611 70.8545 253.512 80.3646C262.231 108.946 272.638 153.705 267.746 188.864C263.821 217.084 243.295 239.946 214.374 255.633C185.337 271.383 152.717 277.077 132.993 274.341C113.268 271.605 83.4377 257.247 59.8001 234.191C36.2561 211.225 22.7482 183.642 26.674 155.422C33.0239 109.778 55.8032 71.8059 70.7041 51.2431C76.2121 43.6422 85.9125 39.8089 95.3615 37.7283C105.121 35.5793 116.278 34.95 126.593 35.003C136.965 35.0564 146.789 35.8036 153.998 36.5322C157.61 36.8972 160.584 37.2595 162.664 37.5319C163.704 37.6681 164.522 37.782 165.085 37.8627C165.367 37.903 165.585 37.9351 165.736 37.9575L165.9 37.9822ZM210.975 249.385C238.745 234.322 257.19 213.071 260.694 187.886C265.355 154.381 255.388 110.913 246.701 82.4364C238.203 54.5778 164.895 45.0216 164.895 45.0216C164.895 45.0216 92.1316 33.8026 76.4727 55.4113C61.8934 75.5303 39.8488 112.394 33.7267 156.401C30.2229 181.586 42.1687 207.053 64.7756 229.104C87.5594 251.328 116.05 264.812 133.973 267.298C151.895 269.784 182.987 264.566 210.975 249.385Z"})))};l.displayName="UserIDAvatar",n(94385);var d=(0,a.cn)("UserID","Wrapper"),f=(0,r.forwardRef)(function(e,t){var n=e.tld,a=e.tabIndex,i=e.children,u=e.env,s=e.colorScheme,f=e.userData,v=e.onClick,h=e.onPointerEnter,m=e.className,p=e.fetchMail,g=e.visible,C=e.ariaLabel,w=e.avatarSize,E=e.platform,y=e.beforeAvatar,b=e.afterAvatar,_=f||{},k=_.child,S=_.plus,L=_.avatarId,x=(0,r.useRef)(null);return(0,o.t)(x,t),r.createElement("div",{className:d({child:k},[m]),style:null!==w?{"--user-id-size":(w||42)+"px"}:void 0},r.createElement("button",{"aria-expanded":g,"aria-haspopup":!0,"aria-label":C||"Ваш профиль",className:"UserID-Account",ref:x,role:"button",tabIndex:void 0===a?0:a,onClick:v,onPointerEnter:h},y,r.createElement(c,{fetchMail:p&&"test"!==u,tld:void 0===n?"ru":n,hideCounter:"touch"===E},r.createElement(l,{host:"test"===u?"https://avatars.mdst.yandex.net":"https://avatars.mds.yandex.net",avatarId:L,plus:S,child:k,colorScheme:s})),b),i)});f.displayName="UserBase";var v=n(82468),h=(0,n(49403).k)(f,v.V)},87506:function(e,t,n){"use strict";n.r(t),n.d(t,{useUserID:function(){return r.C}});var r=n(51277)},51277:function(e,t,n){"use strict";n.d(t,{C:function(){return b}});var r=n(26688),a=n(99616),o=n(63426),i=[],c=null,u=null;function s(){return i[i.length-1]}function l(e,t,n){var r,a,o=s();o&&o.onClose&&(!n||n===o.closeStrategy)&&("click"===t&&(r=o.refs,a=e.target,r.some(function(e){return e.current instanceof HTMLElement&&e.current.contains(a)}))||o.onClose({nativeEvent:e,source:t}))}function d(e){var t=e.key;("Escape"===t||"Esc"===t)&&l(e,"esc")}function f(e){c=e.target,u=s(),l(e,"click","pressdown")}function v(e){var t=c;c=null;var n=u;u=null,e.button>0||n!==s()||t!==e.target||l(e,"click","pressup")}var h=Object.freeze({count:function(){return i.length},addOverlay:function(e){0===i.length&&(document.addEventListener("keyup",d),document.addEventListener("pointerdown",f,!0),document.addEventListener("click",v,!0)),i.push(e)},removeOverlay:function(e){i.splice(i.indexOf(e),1),0===i.length&&(document.removeEventListener("keyup",d),document.removeEventListener("pointerdown",f,!0),document.removeEventListener("click",v,!0))},getTopOverlayOptions:s}),m=n(88871),p="undefined"!=typeof window,g=function(){return window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight},C=function(e){var t=e.enabled,n=e.onHeightChange,o=(0,r.__read)((0,a.useState)(p?g():void 0),2),i=o[0],c=o[1],u=(0,a.useCallback)(function(){var e=g();i!==e&&(c(g()),n(e))},[i,n]);(0,m.L)(function(){if(t)return window.addEventListener("resize",u),function(){window.removeEventListener("resize",u)}},[u,t])},w=function(e){var t=e.touchBreakpointWidth,n=void 0===t?520:t,o=e.platform,i=void 0===o?"auto":o,c=(0,r.__read)((0,a.useState)(function(){return"auto"!==i?i:p?window.matchMedia("(max-width: "+n+"px)").matches?"touch":"desktop":void 0}),2),u=c[0],s=c[1];return(0,a.useEffect)(function(){"auto"!==i&&s(i)},[i]),(0,m.L)(function(){if(p&&(!i||"auto"===i)){var e=window.matchMedia("(max-width: "+n+"px)");return t(e),e.addEventListener?e.addEventListener("change",t):e.addListener(t),function(){e.removeEventListener?e.removeEventListener("change",t):e.removeListener(t)}}function t(e){e.matches?s("touch"):s("desktop")}},[u,s,n]),u},E=["tr","am","ge"],y=["il"];function b(e){var t,n,i,c,u,s,l,d,f,v,m,b,_,k,S,L=e.avatarRef,x=e.avatarSize,I=void 0===x?[42,22]:x,R=e.colorScheme,P=void 0===R?"light":R,M=e.dialogClassName,D=e.dialogRef,N=e.dir,U=void 0===N?"ltr":N,O=e.env,W=void 0===O?"prod":O,H=e.essentialRef,T=e.features,Y=e.fetchUserData,A=e.host,B=e.iframeRef,X=e.lang,z=e.onClose,j=e.onMenuItemClick,J=e.onOpen,V=e.onThemeChange,K=e.platform,Z=e.preload,q=void 0!==Z&&Z,F=e.project,$=e.queryParams,G=e.retpath,Q=e.rpcHandlers,ee=e.theme,et=e.tld,en=e.touchBreakpointWidth,er=e.userData,ea=e.visible,eo=void 0!==ea&&ea,ei=(0,a.useRef)(null),ec=(0,a.useRef)(null),eu=(0,a.useRef)(null),es=(t=void 0===et?"ru":et,(0,a.useMemo)(function(){return E.includes(t)?"com."+t:y.includes(t)?"co."+t:t},[t]));(0,o.t)(ei,L||(0,a.createRef)()),ec=null!=D?D:ec,eu=null!=B?B:eu;var el=(0,r.__read)((0,a.useState)(!0),2),ed=el[0],ef=el[1],ev=(0,a.useMemo)(function(){return p?G||location.href:G},[G]),eh=(0,r.__read)((0,a.useState)(q),2),em=eh[0],ep=eh[1],eg=(0,a.useRef)({colorScheme:P,theme:ee,retpath:ev}),eC=(0,a.useMemo)(function(){if(A)return"https://"+A;if(p){var e=new URL(location.href).searchParams.get("user_id_host");if(e)return"https://"+e}return"https://yandex."+es},[A,es]),ew=(0,a.useMemo)(function(){em||eg.current.colorScheme===P&&eg.current.theme===ee&&eg.current.retpath===ev||(eg.current={colorScheme:P,theme:ee,retpath:ev});var e=new URL("user-id",eC);if(eg.current.retpath&&e.searchParams.set("retpath",eg.current.retpath),eg.current.colorScheme&&e.searchParams.set("colorScheme",eg.current.colorScheme),eg.current.theme&&e.searchParams.set("theme",eg.current.theme),X&&e.searchParams.set("l10n",X),Array.isArray(T)){var t=T.join(",");e.searchParams.set("exp_flags",t)}for(var n in F&&e.searchParams.set("project",F),W&&e.searchParams.set("env",W),e.searchParams.set("dir",U),$)e.searchParams.set(n,$[n]);return e.toString()},[eC,T,F,$,P,ee,ev,em]);(0,a.useEffect)(function(){!em&&(q||Y)&&ep(!0)},[em,q,ep,Y]);var eE=w({platform:K,touchBreakpointWidth:en}),ey=(0,a.useCallback)(function(){em||ep(!0)},[em,ep]),eb=(0,a.useMemo)(function(){return null===I?null:"number"==typeof I?I:"touch"===eE?I[1]:I[0]},[eE,I]),e_=(0,a.useCallback)(function(){var e;null===(e=ei.current)||void 0===e||e.focus(),null==z||z()},[z]),ek=(0,r.__read)((0,a.useState)(),2),eS=ek[0],eL=ek[1],ex=(0,r.__read)((0,a.useState)(er),2),eI=ex[0],eR=ex[1];(0,a.useEffect)(function(){eR(er)},[er]);var eP=(0,a.useCallback)(function(e){if(p){if("desktop"===eE){eL(e);return}eL(g())}},[eE]);C({enabled:"touch"===eE,onHeightChange:eP});var eM=(i=(n={loading:ed,iframeRef:eu,origin:eC,rpcHandler:(0,a.useCallback)(function(e,t){var n;switch(e.methodCall){case"onInit":Y&&eR(e.params[0]);break;case"onDataLoad":case"updateUserHeight":eP(e.params[0].height),ef(!1);break;case"ITEM_CLICK":var a=e.params[0];null==j||j(a.item,a);break;case"closeUserID":null==e_||e_();break;case"updateTheme":var o=e.params[0].theme;null==V||V(o);break;default:if(!(null==Q?void 0:Q[e.methodCall]))return;Promise.resolve(null===(n=null==Q?void 0:Q[e.methodCall])||void 0===n?void 0:n.call.apply(n,(0,r.__spread)([Q],e.params))).then(t)}},[Q,j,e_,V,eP,eR,Y])}).loading,c=n.iframeRef,u=n.origin,s=n.rpcHandler,l=(0,a.useRef)([]),d=(0,a.useCallback)(function(e){var t,n,r=JSON.stringify(e);i?l.current.push(r):null===(n=null===(t=c.current)||void 0===t?void 0:t.contentWindow)||void 0===n||n.postMessage(r,"*")},[i,c]),f=(0,a.useCallback)(function(e){var t;if(e.origin===u){try{t=JSON.parse(e.data)}catch(e){return}if(!t.methodCall)return;null==s||s((0,r.__assign)({},t),function(e){var n;d({returnCall:!0,params:[e],resultCallbackIndex:(null===(n=t.resultCallbackIndex)||void 0===n?void 0:n.__callbackId)||-1})})}},[u,s,d]),(0,a.useEffect)(function(){return window.addEventListener("message",f),function(){window.removeEventListener("message",f)}},[f]),(0,a.useEffect)(function(){c&&!i&&0!==l.current.length&&(l.current.forEach(function(e){var t,n;return null===(n=null===(t=c.current)||void 0===t?void 0:t.contentWindow)||void 0===n?void 0:n.postMessage(e,"*")}),l.current=[])},[i,c]),{sendMessage:d}).sendMessage;(0,a.useEffect)(function(){eM({methodCall:"updateRetpath",params:[{retpath:ev}]})},[ev,eM]),(0,a.useEffect)(function(){eM({methodCall:"updateTheme",params:[{colorScheme:P,theme:ee}]})},[P,eM,ee]);var eD=(0,a.useCallback)(function(e){eM({methodCall:"focusFirst",params:[{fromKeyboard:e}]})},[eM]),eN=(0,a.useCallback)(function(){eo?(eD(!0),e_()):(em||ep(!0),eD(!1),null==J||J())},[eD,J,em,eo,e_]);m=(v={visible:eo,onClose:e_,essentialRefs:(0,a.useMemo)(function(){var e=[ec,ei];return H&&e.push(H),e},[ec,ei,H])}).visible,b=v.onClose,_=v.essentialRefs,k=v.unsafe_strategy,(S=(0,a.useRef)({onClose:b,refs:_,closeStrategy:void 0===k?"pressdown":k})).current.onClose=b,S.current.refs=_,(0,a.useEffect)(function(){if(m){var e=S.current;return h.addOverlay(e),function(){h.removeOverlay(e)}}},[m]);var eU={colorScheme:P,height:eS,loading:ed,preload:em,ref:eu,src:ew,width:"desktop"===eE?320:"100%"},eO={className:M,colorScheme:P,platform:eE,ref:ec,visible:eo,onClose:e_,loading:ed};return{avatarProps:{avatarSize:eb,env:W,onClick:eN,onPointerEnter:ey,platform:eE,ref:ei,retpath:ev,userData:eI,visible:eo,tld:es},contentProps:eU,dialogProps:eO}}},86042:function(e,t,n){"use strict";n.r(t),n.d(t,{withUserID:function(){return r.k}});var r=n(49403)},49403:function(e,t,n){"use strict";n.d(t,{k:function(){return c}});var r=n(26688),a=n(99616),o=n(51277),i=n(28248);function c(e,t){var n,c=function(n){var c=n.onOpen,u=n.onClose,s=(0,r.__read)((0,a.useState)(!1),2),l=s[0],d=s[1],f=(0,a.useCallback)(function(){d(!0),null==c||c()},[d,c]),v=(0,a.useCallback)(function(){d(!1),null==u||u()},[d,u]),h=(0,o.C)((0,r.__assign)((0,r.__assign)({},n),{visible:l,onOpen:f,onClose:v})),m=h.avatarProps,p=h.contentProps,g=h.dialogProps;return a.createElement(e,(0,r.__assign)({},n,m),n.children,a.createElement(t,(0,r.__assign)({},g,{onClose:v}),a.createElement(i.V,(0,r.__assign)({},p))))};return c.displayName="'withUserID("+(null!==(n=e.displayName)&&void 0!==n?n:e)+")'",c}},83677:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(26688);r.__exportStar(n(85500),t),r.__exportStar(n(38676),t),r.__exportStar(n(56441),t),r.__exportStar(n(26480),t),r.__exportStar(n(87506),t),r.__exportStar(n(86042),t)},56441:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},2041:function(){},61704:function(){},91108:function(){},2216:function(){},38657:function(){},94385:function(){}}]);
//# sourceMappingURL=3677-00d7d8c7284347c0.js.map