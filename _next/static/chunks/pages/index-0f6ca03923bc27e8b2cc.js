_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=a,t.useAmp=function(){return a(o.default.useContext(i.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},i=n("lwAK");function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,i=e.hasQuery;return n||o&&(void 0!==i&&i)}},"/EDR":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("23aj")}])},"23aj":function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return ve}));var r=n("q1tI"),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=o.a.createElement,u=function(){return a("header",null,"This is header")},c=o.a.createElement,s=function(){return c("div",null," Footer ")},f=n("TSYQ"),l=n.n(f),p=o.a.createElement,d=function(e){var t,n=e.slug,r=e.className,o=e.children,a="m-page--".concat(n);return p("div",{className:l()("m-page",(t={},i(t,a,n),i(t,r,r),t))},p(u,null),o,p(s,null))},h=n("8Kt/"),m=n.n(h),y=o.a.createElement,v=function(e){var t=e.type,n=e.img;return y("img",{className:l()("contact-user-photo avatar",i({},"avatar--".concat(t),t)),src:n,alt:name})},b=n("ExHo"),g=n.n(b),w=o.a.createElement,x=function(e){var t=e.bots,n=e.activeId,r=e.onClick;return w("aside",{className:g.a.contacts__wrap},w("ul",{className:g.a.contact},t&&t.map((function(e){var t=e.id,o=e.name,i=e.img;return w("li",{className:l()(g.a.contact__user,{active:n===t}),key:t,onClick:function(){r(t)}},w(v,{type:"primary",img:i}),w("span",null,o))}))))},O=n("2vnA"),j=!1;function S(){return j}function E(e){return Object(O.g)(e)}var C,T=1e4,_=1e4,R=new Set;function A(){void 0===C&&(C=setTimeout(P,_))}function P(){C=void 0;var e=Date.now();R.forEach((function(t){var n=t.current;n&&e>=n.cleanAt&&(n.reaction.dispose(),t.current=null,R.delete(t))})),R.size>0&&A()}var k=n("R7aG"),M=!1,N=[];var B={};function L(e){return"observer"+e}function U(e,t,n){if(void 0===t&&(t="observed"),void 0===n&&(n=B),S())return e();var r,i=function(e){return function(){M?N.push(e):e()}}((n.useForceUpdate||k.a)()),a=o.a.useRef(null);if(!a.current){var u=new O.b(L(t),(function(){c.mounted?i():(u.dispose(),a.current=null)})),c=function(e){return{cleanAt:Date.now()+T,reaction:e}}(u);a.current=c,r=a,R.add(r),A()}var s=a.current.reaction;return o.a.useDebugValue(s,E),o.a.useEffect((function(){var e;return e=a,R.delete(e),a.current?a.current.mounted=!0:(a.current={reaction:new O.b(L(t),(function(){i()})),cleanAt:1/0},i()),function(){a.current.reaction.dispose(),a.current=null}}),[]),function(e){M=!0,N=[];try{var t=e();M=!1;var n=N.length>0?N:void 0;return o.a.useLayoutEffect((function(){n&&n.forEach((function(e){return e()}))}),[n]),t}finally{M=!1}}((function(){var t,n;if(s.track((function(){try{t=e()}catch(r){n=r}})),n)throw n;return t}))}function D(e){var t=e.children,n=e.render,r=t||n;return"function"!==typeof r?null:U(r)}function q(e,t,n,r,o){var i="children"===t?"render":"children",a="function"===typeof e[t],u="function"===typeof e[i];return a&&u?new Error("MobX Observer: Do not use children and render in the same time in`"+n):a||u?null:new Error("Invalid prop `"+o+"` of type `"+typeof e[t]+"` supplied to `"+n+"`, expected `function`.")}D.propTypes={children:q,render:q},D.displayName="Observer";var I=function(){return(I=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function H(e,t){if(S())return e;var n,o,i,a=I({forwardRef:!1},t),u=e.displayName||e.name,c=function(t,n){return U((function(){return e(t,n)}),u)};return c.displayName=u,n=a.forwardRef?Object(r.memo)(Object(r.forwardRef)(c)):Object(r.memo)(c),o=e,i=n,Object.keys(o).forEach((function(e){J[e]||Object.defineProperty(i,e,Object.getOwnPropertyDescriptor(o,e))})),n.displayName=u,n}var J={$$typeof:!0,render:!0,compare:!0,type:!0};var F=0;var $={};function W(e){return $[e]||($[e]=function(e){if("function"===typeof Symbol)return Symbol(e);var t="__$mobx-react "+e+" ("+F+")";return F++,t}(e)),$[e]}function Q(e,t){if(X(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(var o=0;o<n.length;o++)if(!Object.hasOwnProperty.call(t,n[o])||!X(e[n[o]],t[n[o]]))return!1;return!0}function X(e,t){return e===t?0!==e||1/e===1/t:e!==e&&t!==t}function Y(e,t,n){Object.hasOwnProperty.call(e,t)?e[t]=n:Object.defineProperty(e,t,{enumerable:!1,configurable:!0,writable:!0,value:n})}var z=W("patchMixins"),K=W("patchedDefinition");function Z(e,t){for(var n=this,r=arguments.length,o=new Array(r>2?r-2:0),i=2;i<r;i++)o[i-2]=arguments[i];t.locks++;try{var a;return void 0!==e&&null!==e&&(a=e.apply(this,o)),a}finally{t.locks--,0===t.locks&&t.methods.forEach((function(e){e.apply(n,o)}))}}function V(e,t){return function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];Z.call.apply(Z,[this,e,t].concat(r))}}function G(e,t,n){var r=function(e,t){var n=e[z]=e[z]||{},r=n[t]=n[t]||{};return r.locks=r.locks||0,r.methods=r.methods||[],r}(e,t);r.methods.indexOf(n)<0&&r.methods.push(n);var o=Object.getOwnPropertyDescriptor(e,t);if(!o||!o[K]){var i=e[t],a=function e(t,n,r,o,i){var a,u=V(i,o);return(a={})[K]=!0,a.get=function(){return u},a.set=function(i){if(this===t)u=V(i,o);else{var a=e(this,n,r,o,i);Object.defineProperty(this,n,a)}},a.configurable=!0,a.enumerable=r,a}(e,t,o?o.enumerable:void 0,r,i);Object.defineProperty(e,t,a)}}var ee=O.a||"$mobx",te=W("isMobXReactObserver"),ne=W("isUnmounted"),re=W("skipRender"),oe=W("isForcingUpdate");function ie(e){var t=e.prototype;if(e[te]){var n=ae(t);console.warn("The provided component class ("+n+") \n                has already been declared as an observer component.")}else e[te]=!0;if(t.componentWillReact)throw new Error("The componentWillReact life-cycle event is no longer supported");if(e.__proto__!==r.PureComponent)if(t.shouldComponentUpdate){if(t.shouldComponentUpdate!==ce)throw new Error("It is not allowed to use shouldComponentUpdate in observer based components.")}else t.shouldComponentUpdate=ce;se(t,"props"),se(t,"state");var o=t.render;return t.render=function(){return ue.call(this,o)},G(t,"componentWillUnmount",(function(){var e;if(!0!==S()&&(null===(e=this.render[ee])||void 0===e||e.dispose(),this[ne]=!0,!this.render[ee])){var t=ae(this);console.warn("The reactive render of an observer class component ("+t+") \n                was overriden after MobX attached. This may result in a memory leak if the \n                overriden reactive render was not properly disposed.")}})),e}function ae(e){return e.displayName||e.name||e.constructor&&(e.constructor.displayName||e.constructor.name)||"<component>"}function ue(e){var t=this;if(!0===S())return e.call(this);Y(this,re,!1),Y(this,oe,!1);var n=ae(this),o=e.bind(this),i=!1,a=new O.b(n+".render()",(function(){if(!i&&(i=!0,!0!==t[ne])){var e=!0;try{Y(t,oe,!0),t[re]||r.Component.prototype.forceUpdate.call(t),e=!1}finally{Y(t,oe,!1),e&&a.dispose()}}}));function u(){i=!1;var e=void 0,t=void 0;if(a.track((function(){try{t=Object(O.c)(!1,o)}catch(n){e=n}})),e)throw e;return t}return a.reactComponent=this,u[ee]=a,this.render=u,u.call(this)}function ce(e,t){return S()&&console.warn("[mobx-react] It seems that a re-rendering of a React component is triggered while in static (server-side) mode. Please make sure components are rendered only once server-side."),this.state!==t||!Q(this.props,e)}function se(e,t){var n=W("reactProp_"+t+"_valueHolder"),r=W("reactProp_"+t+"_atomHolder");function o(){return this[r]||Y(this,r,Object(O.f)("reactive "+t)),this[r]}Object.defineProperty(e,t,{configurable:!0,enumerable:!0,get:function(){var e=!1;return O.e&&O.d&&(e=Object(O.e)(!0)),o.call(this).reportObserved(),O.e&&O.d&&Object(O.d)(e),this[n]},set:function(e){this[oe]||Q(this[n],e)?Y(this,n,e):(Y(this,n,e),Y(this,re,!0),o.call(this).reportChanged(),Y(this,re,!1))}})}var fe="function"===typeof Symbol&&Symbol.for,le=fe?Symbol.for("react.forward_ref"):"function"===typeof r.forwardRef&&Object(r.forwardRef)((function(e){return null})).$$typeof,pe=fe?Symbol.for("react.memo"):"function"===typeof r.memo&&Object(r.memo)((function(e){return null})).$$typeof;function de(e){if(!0===e.isMobxInjector&&console.warn("Mobx observer: You are trying to use 'observer' on a component that already has 'inject'. Please apply 'observer' before applying 'inject'"),pe&&e.$$typeof===pe)throw new Error("Mobx observer: You are trying to use 'observer' on a function component wrapped in either another observer or 'React.memo'. The observer already applies 'React.memo' for you.");if(le&&e.$$typeof===le){var t=e.render;if("function"!==typeof t)throw new Error("render property of ForwardRef was not a function");return Object(r.forwardRef)((function(){var e=arguments;return Object(r.createElement)(D,null,(function(){return t.apply(void 0,e)}))}))}return"function"!==typeof e||e.prototype&&e.prototype.render||e.isReactClass||Object.prototype.isPrototypeOf.call(r.Component,e)?ie(e):H(e)}if(!r.Component)throw new Error("mobx-react requires React to be available");if(!O.k)throw new Error("mobx-react requires mobx to be available");var he=n("vDqi"),me=n.n(he),ye=o.a.createElement,ve=!0;t.default=de((function(e){console.log("data",e);var t=e.bots,n=(e.users,Object(r.useState)(0)),i=n[0],a=n[1];return ye(o.a.Fragment,null,ye(m.a,null,ye("title",null,"Test application")),ye(x,{bots:t,activeId:i,onClick:function(e){a(e)}}),ye(d,{slug:"home"},ye("h1",null,"Messenger with bots"),ye("button",{onClick:function(){(function(e,t){var n="".concat(window.location.href).concat(e);return new Promise((function(r,o){me()({method:"get",url:n,params:t,headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){var t=e.data;r(t)})).catch((function(t){o({type:"ServerRequestError",page:e,message:t.message})}))}))})("/answer").then((function(e){console.log("data: ",e)}))}},"Click me"),ye("ul",null)))}))},"2SVd":function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},"5oMp":function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=f,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),i=(r=n("Xuae"))&&r.__esModule?r:{default:r},a=n("lwAK"),u=n("FYa8"),c=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(l,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var i=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var a=o.key.slice(o.key.indexOf("$")+1);e.has(a)?i=!1:e.add(a)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(var u=0,c=p.length;u<c;u++){var s=p[u];if(o.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?i=!1:n.add(s);else{var f=o.props[s],l=r[s]||new Set;l.has(f)?i=!1:(l.add(f),r[s]=l)}}}return i}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,o.useContext)(a.AmpStateContext),r=(0,o.useContext)(u.HeadManagerContext);return o.default.createElement(i.default,{reduceComponentsToState:d,headManager:r,inAmpMode:(0,c.isInAmpMode)(n)},t)}h.rewind=function(){};var m=h;t.default=m},"8oxB":function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function u(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"===typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var c,s=[],f=!1,l=-1;function p(){f&&c&&(f=!1,c.length?s=c.concat(s):l=-1,s.length&&d())}function d(){if(!f){var e=u(p);f=!0;for(var t=s.length;t;){for(c=s,s=[];++l<t;)c&&c[l].run();l=-1,t=s.length}c=null,f=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function m(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new h(e,t)),1!==s.length||f||u(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},"9rSQ":function(e,t,n){"use strict";var r=n("xTJ+");function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=o},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},CgaS:function(e,t,n){"use strict";var r=n("xTJ+"),o=n("MLWZ"),i=n("9rSQ"),a=n("UnBK"),u=n("SntB");function c(e){this.defaults=e,this.interceptors={request:new i,response:new i}}c.prototype.request=function(e){"string"===typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=u(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[a,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)n=n.then(t.shift(),t.shift());return n},c.prototype.getUri=function(e){return e=u(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){c.prototype[e]=function(t,n){return this.request(u(n||{},{method:e,url:t}))}})),r.forEach(["post","put","patch"],(function(e){c.prototype[e]=function(t,n,r){return this.request(u(r||{},{method:e,url:t,data:n}))}})),e.exports=c},DfZB:function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},ExHo:function(e,t,n){e.exports={contacts__wrap:"Navigation_contacts__wrap__AMBMR"}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},HSsa:function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},JEQr:function(e,t,n){"use strict";(function(t){var r=n("xTJ+"),o=n("yK9s"),i={"Content-Type":"application/x-www-form-urlencoded"};function a(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var u={adapter:function(){var e;return"undefined"!==typeof XMLHttpRequest?e=n("tQ2B"):"undefined"!==typeof t&&"[object process]"===Object.prototype.toString.call(t)&&(e=n("tQ2B")),e}(),transformRequest:[function(e,t){return o(t,"Accept"),o(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(a(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(a(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"===typeof e)try{e=JSON.parse(e)}catch(t){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(e){u.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){u.headers[e]=r.merge(i)})),e.exports=u}).call(this,n("8oxB"))},LYNF:function(e,t,n){"use strict";var r=n("OH9c");e.exports=function(e,t,n,o,i){var a=new Error(e);return r(a,t,n,o,i)}},Lmem:function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},MLWZ:function(e,t,n){"use strict";var r=n("xTJ+");function o(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var i;if(n)i=n(t);else if(r.isURLSearchParams(t))i=t.toString();else{var a=[];r.forEach(t,(function(e,t){null!==e&&"undefined"!==typeof e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),a.push(o(t)+"="+o(e))})))})),i=a.join("&")}if(i){var u=e.indexOf("#");-1!==u&&(e=e.slice(0,u)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},OH9c:function(e,t,n){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},OTTw:function(e,t,n){"use strict";var r=n("xTJ+");e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=o(window.location.href),function(t){var n=r.isString(t)?o(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},R7aG:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return i}));var r=n("q1tI"),o=function(e,t){var n="function"===typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(u){o={error:u}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a};function i(){var e=o(Object(r.useState)(0),2)[1];return Object(r.useCallback)((function(){e((function(e){return e+1}))}),[])}}).call(this,n("yLpj"))},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),i=n("ZhPi"),a=n("Bnag");e.exports=function(e){return r(e)||o(e)||i(e)||a()}},"Rn+g":function(e,t,n){"use strict";var r=n("LYNF");e.exports=function(e,t,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},SksO:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},SntB:function(e,t,n){"use strict";var r=n("xTJ+");e.exports=function(e,t){t=t||{};var n={},o=["url","method","data"],i=["headers","auth","proxy","params"],a=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],u=["validateStatus"];function c(e,t){return r.isPlainObject(e)&&r.isPlainObject(t)?r.merge(e,t):r.isPlainObject(t)?r.merge({},t):r.isArray(t)?t.slice():t}function s(o){r.isUndefined(t[o])?r.isUndefined(e[o])||(n[o]=c(void 0,e[o])):n[o]=c(e[o],t[o])}r.forEach(o,(function(e){r.isUndefined(t[e])||(n[e]=c(void 0,t[e]))})),r.forEach(i,s),r.forEach(a,(function(o){r.isUndefined(t[o])?r.isUndefined(e[o])||(n[o]=c(void 0,e[o])):n[o]=c(void 0,t[o])})),r.forEach(u,(function(r){r in t?n[r]=c(e[r],t[r]):r in e&&(n[r]=c(void 0,e[r]))}));var f=o.concat(i).concat(a).concat(u),l=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===f.indexOf(e)}));return r.forEach(l,s),n}},TSYQ:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var a=o.apply(null,r);a&&e.push(a)}else if("object"===i)for(var u in r)n.call(r,u)&&r[u]&&e.push(u)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},UnBK:function(e,t,n){"use strict";var r=n("xTJ+"),o=n("xAGQ"),i=n("Lmem"),a=n("JEQr");function u(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return u(e),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||a.adapter)(e).then((function(t){return u(e),t.data=o(t.data,t.headers,e.transformResponse),t}),(function(t){return i(t)||(u(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},W8MJ:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),o=n("lwsE"),i=n("W8MJ"),a=n("PJYZ"),u=n("7W2i"),c=n("a1gu"),s=n("Nsbk");function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),p=!1,d=function(e){u(n,e);var t=f(n);function n(e){var i;return o(this,n),(i=t.call(this,e))._hasHeadManager=void 0,i.emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(r(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,p&&i._hasHeadManager&&(i.props.headManager.mountedInstances.add(a(i)),i.emitChange()),i}return i(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=d},ZhPi:function(e,t,n){var r=n("WkPL");e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},a1gu:function(e,t,n){var r=n("cDf5"),o=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},cDf5:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},endd:function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},eqyj:function(e,t,n){"use strict";var r=n("xTJ+");e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,o,i,a){var u=[];u.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&u.push("expires="+new Date(n).toGMTString()),r.isString(o)&&u.push("path="+o),r.isString(i)&&u.push("domain="+i),!0===a&&u.push("secure"),document.cookie=u.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},g7np:function(e,t,n){"use strict";var r=n("2SVd"),o=n("5oMp");e.exports=function(e,t){return e&&!r(t)?o(e,t):t}},"jfS+":function(e,t,n){"use strict";var r=n("endd");function o(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e;return{token:new o((function(t){e=t})),cancel:e}},e.exports=o},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},tQ2B:function(e,t,n){"use strict";var r=n("xTJ+"),o=n("Rn+g"),i=n("eqyj"),a=n("MLWZ"),u=n("g7np"),c=n("w0Vi"),s=n("OTTw"),f=n("LYNF");e.exports=function(e){return new Promise((function(t,n){var l=e.data,p=e.headers;r.isFormData(l)&&delete p["Content-Type"],(r.isBlob(l)||r.isFile(l))&&l.type&&delete p["Content-Type"];var d=new XMLHttpRequest;if(e.auth){var h=e.auth.username||"",m=unescape(encodeURIComponent(e.auth.password))||"";p.Authorization="Basic "+btoa(h+":"+m)}var y=u(e.baseURL,e.url);if(d.open(e.method.toUpperCase(),a(y,e.params,e.paramsSerializer),!0),d.timeout=e.timeout,d.onreadystatechange=function(){if(d&&4===d.readyState&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in d?c(d.getAllResponseHeaders()):null,i={data:e.responseType&&"text"!==e.responseType?d.response:d.responseText,status:d.status,statusText:d.statusText,headers:r,config:e,request:d};o(t,n,i),d=null}},d.onabort=function(){d&&(n(f("Request aborted",e,"ECONNABORTED",d)),d=null)},d.onerror=function(){n(f("Network Error",e,null,d)),d=null},d.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(f(t,e,"ECONNABORTED",d)),d=null},r.isStandardBrowserEnv()){var v=(e.withCredentials||s(y))&&e.xsrfCookieName?i.read(e.xsrfCookieName):void 0;v&&(p[e.xsrfHeaderName]=v)}if("setRequestHeader"in d&&r.forEach(p,(function(e,t){"undefined"===typeof l&&"content-type"===t.toLowerCase()?delete p[t]:d.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(d.withCredentials=!!e.withCredentials),e.responseType)try{d.responseType=e.responseType}catch(b){if("json"!==e.responseType)throw b}"function"===typeof e.onDownloadProgress&&d.addEventListener("progress",e.onDownloadProgress),"function"===typeof e.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){d&&(d.abort(),n(e),d=null)})),l||(l=null),d.send(l)}))}},vDqi:function(e,t,n){e.exports=n("zuR4")},w0Vi:function(e,t,n){"use strict";var r=n("xTJ+"),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,i,a={};return e?(r.forEach(e.split("\n"),(function(e){if(i=e.indexOf(":"),t=r.trim(e.substr(0,i)).toLowerCase(),n=r.trim(e.substr(i+1)),t){if(a[t]&&o.indexOf(t)>=0)return;a[t]="set-cookie"===t?(a[t]?a[t]:[]).concat([n]):a[t]?a[t]+", "+n:n}})),a):a}},xAGQ:function(e,t,n){"use strict";var r=n("xTJ+");e.exports=function(e,t,n){return r.forEach(n,(function(n){e=n(e,t)})),e}},"xTJ+":function(e,t,n){"use strict";var r=n("HSsa"),o=Object.prototype.toString;function i(e){return"[object Array]"===o.call(e)}function a(e){return"undefined"===typeof e}function u(e){return null!==e&&"object"===typeof e}function c(e){if("[object Object]"!==o.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function s(e){return"[object Function]"===o.call(e)}function f(e,t){if(null!==e&&"undefined"!==typeof e)if("object"!==typeof e&&(e=[e]),i(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:i,isArrayBuffer:function(e){return"[object ArrayBuffer]"===o.call(e)},isBuffer:function(e){return null!==e&&!a(e)&&null!==e.constructor&&!a(e.constructor)&&"function"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!==typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"===typeof e},isNumber:function(e){return"number"===typeof e},isObject:u,isPlainObject:c,isUndefined:a,isDate:function(e){return"[object Date]"===o.call(e)},isFile:function(e){return"[object File]"===o.call(e)},isBlob:function(e){return"[object Blob]"===o.call(e)},isFunction:s,isStream:function(e){return u(e)&&s(e.pipe)},isURLSearchParams:function(e){return"undefined"!==typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)},forEach:f,merge:function e(){var t={};function n(n,r){c(t[r])&&c(n)?t[r]=e(t[r],n):c(n)?t[r]=e({},n):i(n)?t[r]=n.slice():t[r]=n}for(var r=0,o=arguments.length;r<o;r++)f(arguments[r],n);return t},extend:function(e,t,n){return f(t,(function(t,o){e[o]=n&&"function"===typeof t?r(t,n):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}}},yK9s:function(e,t,n){"use strict";var r=n("xTJ+");e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}e.exports=n},zuR4:function(e,t,n){"use strict";var r=n("xTJ+"),o=n("HSsa"),i=n("CgaS"),a=n("SntB");function u(e){var t=new i(e),n=o(i.prototype.request,t);return r.extend(n,i.prototype,t),r.extend(n,t),n}var c=u(n("JEQr"));c.Axios=i,c.create=function(e){return u(a(c.defaults,e))},c.Cancel=n("endd"),c.CancelToken=n("jfS+"),c.isCancel=n("Lmem"),c.all=function(e){return Promise.all(e)},c.spread=n("DfZB"),e.exports=c,e.exports.default=c}},[["/EDR",0,1,3]]]);