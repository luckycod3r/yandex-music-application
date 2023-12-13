"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3217],{70345:function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0}),function(t,e){for(var r in e)Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}(e,{suspense:function(){return a},NoSSR:function(){return o}}),r(1073),r(99616);let n=r(53518);function a(){let t=Error(n.NEXT_DYNAMIC_NO_SSR_CODE);throw t.digest=n.NEXT_DYNAMIC_NO_SSR_CODE,t}function o(t){let{children:e}=t;return e}},28151:function(t,e,r){r.d(e,{Z:function(){return X}});var n=r(26688),a=r(99616),o=r(71157),i=r(64385),l=r(77891),s=r(92333),u=r(17516),m=r(92095);function c(t,e){return Object.keys(t).reduce(function(r,a){return r[a]=(0,n.__assign)({timeZone:e},t[a]),r},{})}function f(t,e){return Object.keys((0,n.__assign)((0,n.__assign)({},t),e)).reduce(function(r,a){return r[a]=(0,n.__assign)((0,n.__assign)({},t[a]||{}),e[a]||{}),r},{})}function g(t,e){if(!e)return t;var r=s.C.formats;return(0,n.__assign)((0,n.__assign)((0,n.__assign)({},r),t),{date:f(c(r.date,e),c(t.date||{},e)),time:f(c(r.time,e),c(t.time||{},e))})}var d=function(t,e,r,a,o){var i=t.locale,s=t.formats,c=t.messages,f=t.defaultLocale,d=t.defaultFormats,p=t.fallbackOnEmptyString,y=t.onError,v=t.timeZone,h=t.defaultRichTextElements;void 0===r&&(r={id:""});var _=r.id,b=r.defaultMessage;(0,l.kG)(!!_,"[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue");var E=String(_),T=c&&Object.prototype.hasOwnProperty.call(c,E)&&c[E];if(Array.isArray(T)&&1===T.length&&T[0].type===m.TYPE.literal)return T[0].value;if(!a&&T&&"string"==typeof T&&!h)return T.replace(/'\{(.*?)\}'/gi,"{$1}");if(a=(0,n.__assign)((0,n.__assign)({},h),a||{}),s=g(s,v),d=g(d,v),!T){if(!1===p&&""===T)return T;if((!b||i&&i.toLowerCase()!==f.toLowerCase())&&y(new u.$6(r,i)),b)try{var w=e.getMessageFormat(b,f,d,o);return w.format(a)}catch(t){return y(new u.X9('Error formatting default message for: "'.concat(E,'", rendering default message verbatim'),i,r,t)),"string"==typeof b?b:E}return E}try{var w=e.getMessageFormat(T,i,s,(0,n.__assign)({formatters:e},o||{}));return w.format(a)}catch(t){y(new u.X9('Error formatting message: "'.concat(E,'", using ').concat(b?"default message":"id"," as fallback."),i,r,t))}if(b)try{var w=e.getMessageFormat(b,f,d,o);return w.format(a)}catch(t){y(new u.X9('Error formatting the default message for: "'.concat(E,'", rendering message verbatim'),i,r,t))}return"string"==typeof T?T:"string"==typeof b?b:E},p=r(29836),y=["style","currency","currencyDisplay","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay","numberingSystem"];function v(t,e,r){var n=t.locale,a=t.formats,o=t.onError;void 0===r&&(r={});var i=r.format,l=i&&(0,p.TB)(a,"number",i,o)||{};return e(n,(0,p.L6)(r,y,l))}function h(t,e,r,n){void 0===n&&(n={});try{return v(t,e,n).format(r)}catch(e){t.onError(new u.Qe("Error formatting number.",t.locale,e))}return String(r)}function _(t,e,r,n){void 0===n&&(n={});try{return v(t,e,n).formatToParts(r)}catch(e){t.onError(new u.Qe("Error formatting number.",t.locale,e))}return[]}var b=r(97424),E=["numeric","style"];function T(t,e,r,n,a){void 0===a&&(a={}),n||(n="second"),Intl.RelativeTimeFormat||t.onError(new b.u_('Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-relativetimeformat"\n',b.jK.MISSING_INTL_API));try{var o,i,l,s,m,c;return(o=a,i=t.locale,l=t.formats,s=t.onError,void 0===o&&(o={}),c=!!(m=o.format)&&(0,p.TB)(l,"relative",m,s)||{},e(i,(0,p.L6)(o,E,c))).format(r,n)}catch(e){t.onError(new u.Qe("Error formatting relative time.",t.locale,e))}return String(r)}var w=["formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","calendar","numberingSystem","fractionalSecondDigits"];function S(t,e,r,a){var o=t.locale,i=t.formats,l=t.onError,s=t.timeZone;void 0===a&&(a={});var u=a.format,m=(0,n.__assign)((0,n.__assign)({},s&&{timeZone:s}),u&&(0,p.TB)(i,e,u,l)),c=(0,p.L6)(a,w,m);return"time"!==e||c.hour||c.minute||c.second||c.timeStyle||c.dateStyle||(c=(0,n.__assign)((0,n.__assign)({},c),{hour:"numeric",minute:"numeric"})),r(o,c)}function D(t,e){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];var a=r[0],o=r[1],i="string"==typeof a?new Date(a||0):a;try{return S(t,"date",e,void 0===o?{}:o).format(i)}catch(e){t.onError(new u.Qe("Error formatting date.",t.locale,e))}return String(i)}function I(t,e){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];var a=r[0],o=r[1],i="string"==typeof a?new Date(a||0):a;try{return S(t,"time",e,void 0===o?{}:o).format(i)}catch(e){t.onError(new u.Qe("Error formatting time.",t.locale,e))}return String(i)}function F(t,e){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];var a=r[0],o=r[1],i=r[2],l=t.timeZone,s=t.locale,m=t.onError,c=(0,p.L6)(void 0===i?{}:i,w,l?{timeZone:l}:{});try{return e(s,c).formatRange(a,o)}catch(e){m(new u.Qe("Error formatting date time range.",t.locale,e))}return String(a)}function j(t,e){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];var a=r[0],o=r[1],i="string"==typeof a?new Date(a||0):a;try{return S(t,"date",e,void 0===o?{}:o).formatToParts(i)}catch(e){t.onError(new u.Qe("Error formatting date.",t.locale,e))}return[]}function N(t,e){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];var a=r[0],o=r[1],i="string"==typeof a?new Date(a||0):a;try{return S(t,"time",e,void 0===o?{}:o).formatToParts(i)}catch(e){t.onError(new u.Qe("Error formatting time.",t.locale,e))}return[]}var L=["type"];function R(t,e,r,n){var a=t.locale,o=t.onError;void 0===n&&(n={}),Intl.PluralRules||o(new b.u_('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',b.jK.MISSING_INTL_API));var i=(0,p.L6)(n,L);try{return e(a,i).select(r)}catch(t){o(new u.Qe("Error formatting plural.",a,t))}return"other"}var P=["type","style"],k=Date.now();function C(t,e,r,n){void 0===n&&(n={});var a=O(t,e,r,n).reduce(function(t,e){var r=e.value;return"string"!=typeof r?t.push(r):"string"==typeof t[t.length-1]?t[t.length-1]+=r:t.push(r),t},[]);return 1===a.length?a[0]:0===a.length?"":a}function O(t,e,r,a){var o=t.locale,i=t.onError;void 0===a&&(a={}),Intl.ListFormat||i(new b.u_('Intl.ListFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-listformat"\n',b.jK.MISSING_INTL_API));var l=(0,p.L6)(a,P);try{var s={},m=r.map(function(t,e){if("object"==typeof t){var r="".concat(k,"_").concat(e,"_").concat(k);return s[r]=t,r}return String(t)});return e(o,l).formatToParts(m).map(function(t){return"literal"===t.type?t:(0,n.__assign)((0,n.__assign)({},t),{value:s[t.value]||t.value})})}catch(t){i(new u.Qe("Error formatting list.",o,t))}return r}var x=["style","type","fallback","languageDisplay"];function Z(t,e,r,n){var a=t.locale,o=t.onError;Intl.DisplayNames||o(new b.u_('Intl.DisplayNames is not available in this environment.\nTry polyfilling it using "@formatjs/intl-displaynames"\n',b.jK.MISSING_INTL_API));var i=(0,p.L6)(n,x);try{return e(a,i).of(r)}catch(t){o(new u.Qe("Error formatting display name.",a,t))}}var M=r(46714);function A(t){return{locale:t.locale,timeZone:t.timeZone,fallbackOnEmptyString:t.fallbackOnEmptyString,formats:t.formats,textComponent:t.textComponent,messages:t.messages,defaultLocale:t.defaultLocale,defaultFormats:t.defaultFormats,onError:t.onError,onWarn:t.onWarn,wrapRichTextChunksInFragment:t.wrapRichTextChunksInFragment,defaultRichTextElements:t.defaultRichTextElements}}function U(t){return t?Object.keys(t).reduce(function(e,r){var n=t[r];return e[r]=(0,M.Gt)(n)?(0,i.dt)(n):n,e},{}):t}var Q=function(t,e,r,o){for(var i=[],l=4;l<arguments.length;l++)i[l-4]=arguments[l];var s=U(o),u=d.apply(void 0,(0,n.__spreadArray)([t,e,r,s],i,!1));return Array.isArray(u)?a.Children.toArray(u):u},G=function(t,e){var r,a,o,l,s,m,c,f=t.defaultRichTextElements,g=(0,n.__rest)(t,["defaultRichTextElements"]),y=U(f),v=(a=(0,n.__assign)((0,n.__assign)((0,n.__assign)({},i.Z0),g),{defaultRichTextElements:y}),o=(0,p.ax)(e),s=(l=(0,n.__assign)((0,n.__assign)({},p.Z0),a)).locale,m=l.defaultLocale,c=l.onError,s?!Intl.NumberFormat.supportedLocalesOf(s).length&&c?c(new u.gb('Missing locale data for locale: "'.concat(s,'" in Intl.NumberFormat. Using default locale: "').concat(m,'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))):!Intl.DateTimeFormat.supportedLocalesOf(s).length&&c&&c(new u.gb('Missing locale data for locale: "'.concat(s,'" in Intl.DateTimeFormat. Using default locale: "').concat(m,'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))):(c&&c(new u.OV('"locale" was not configured, using "'.concat(m,'" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))),l.locale=l.defaultLocale||"en"),l.onWarn&&l.defaultRichTextElements&&"string"==typeof(r=l.messages||{})[Object.keys(r)[0]]&&l.onWarn('[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. \nPlease consider using "@formatjs/cli" to pre-compile your messages for performance.\nFor more details see https://formatjs.io/docs/getting-started/message-distribution'),(0,n.__assign)((0,n.__assign)({},l),{formatters:o,formatNumber:h.bind(null,l,o.getNumberFormat),formatNumberToParts:_.bind(null,l,o.getNumberFormat),formatRelativeTime:T.bind(null,l,o.getRelativeTimeFormat),formatDate:D.bind(null,l,o.getDateTimeFormat),formatDateToParts:j.bind(null,l,o.getDateTimeFormat),formatTime:I.bind(null,l,o.getDateTimeFormat),formatDateTimeRange:F.bind(null,l,o.getDateTimeFormat),formatTimeToParts:N.bind(null,l,o.getDateTimeFormat),formatPlural:R.bind(null,l,o.getPluralRules),formatMessage:d.bind(null,l,o),$t:d.bind(null,l,o),formatList:C.bind(null,l,o.getListFormat),formatListToParts:O.bind(null,l,o.getListFormat),formatDisplayName:Z.bind(null,l,o.getDisplayNames)})),b={locale:v.locale,timeZone:v.timeZone,fallbackOnEmptyString:v.fallbackOnEmptyString,formats:v.formats,defaultLocale:v.defaultLocale,defaultFormats:v.defaultFormats,messages:v.messages,onError:v.onError,defaultRichTextElements:y};return(0,n.__assign)((0,n.__assign)({},v),{formatMessage:Q.bind(null,b,v.formatters),$t:Q.bind(null,b,v.formatters)})},X=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.cache=(0,p.Sn)(),e.state={cache:e.cache,intl:G(A(e.props),e.cache),prevConfig:A(e.props)},e}return(0,n.__extends)(e,t),e.getDerivedStateFromProps=function(t,e){var r=e.prevConfig,n=e.cache,a=A(t);return(0,i.wU)(r,a)?null:{intl:G(a,n),prevConfig:a}},e.prototype.render=function(){return(0,i.lq)(this.state.intl),a.createElement(o.zt,{value:this.state.intl},this.props.children)},e.displayName="IntlProvider",e.defaultProps=i.Z0,e}(a.PureComponent)},42503:function(t,e,r){let n;r.d(e,{Z:function(){return s}});let a="undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);var o={randomUUID:a};let i=new Uint8Array(16),l=[];for(let t=0;t<256;++t)l.push((t+256).toString(16).slice(1));var s=function(t,e,r){if(o.randomUUID&&!e&&!t)return o.randomUUID();t=t||{};let a=t.random||(t.rng||function(){if(!n&&!(n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(i)})();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,e){r=r||0;for(let t=0;t<16;++t)e[r+t]=a[t];return e}return function(t,e=0){return l[t[e+0]]+l[t[e+1]]+l[t[e+2]]+l[t[e+3]]+"-"+l[t[e+4]]+l[t[e+5]]+"-"+l[t[e+6]]+l[t[e+7]]+"-"+l[t[e+8]]+l[t[e+9]]+"-"+l[t[e+10]]+l[t[e+11]]+l[t[e+12]]+l[t[e+13]]+l[t[e+14]]+l[t[e+15]]}(a)}}}]);
//# sourceMappingURL=3217-195ef48961b01dce.js.map