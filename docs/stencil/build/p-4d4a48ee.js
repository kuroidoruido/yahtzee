function r(r,n,e){return n in r?Object.defineProperty(r,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[n]=e,r}function n(r,n){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(r);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable}))),e.push.apply(e,t)}return e}function e(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(n){r(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}function t(r){return"Minified Redux error #"+r+"; visit https://redux.js.org/Errors?code="+r+" for the full message or use the non-minified dev environment for full errors. "}var o="function"==typeof Symbol&&Symbol.observable||"@@observable",i=function(){return Math.random().toString(36).substring(7).split("").join(".")},u={INIT:"@@redux/INIT"+i(),REPLACE:"@@redux/REPLACE"+i(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+i()}};function f(r){if("object"!=typeof r||null===r)return!1;for(var n=r;null!==Object.getPrototypeOf(n);)n=Object.getPrototypeOf(n);return Object.getPrototypeOf(r)===n}function c(r,n,e){var i;if("function"==typeof n&&"function"==typeof e||"function"==typeof e&&"function"==typeof arguments[3])throw new Error(t(0));if("function"==typeof n&&void 0===e&&(e=n,n=void 0),void 0!==e){if("function"!=typeof e)throw new Error(t(1));return e(c)(r,n)}if("function"!=typeof r)throw new Error(t(2));var a=r,s=n,v=[],l=v,p=!1;function d(){l===v&&(l=v.slice())}function y(){if(p)throw new Error(t(3));return s}function h(r){if("function"!=typeof r)throw new Error(t(4));if(p)throw new Error(t(5));var n=!0;return d(),l.push(r),function(){if(n){if(p)throw new Error(t(6));n=!1,d();var e=l.indexOf(r);l.splice(e,1),v=null}}}function b(r){if(!f(r))throw new Error(t(7));if(void 0===r.type)throw new Error(t(8));if(p)throw new Error(t(9));try{p=!0,s=a(s,r)}finally{p=!1}for(var n=v=l,e=0;e<n.length;e++)(0,n[e])();return r}function w(r){if("function"!=typeof r)throw new Error(t(10));a=r,b({type:u.REPLACE})}function O(){var r,n=h;return(r={subscribe:function(r){if("object"!=typeof r||null===r)throw new Error(t(11));function e(){r.next&&r.next(y())}return e(),{unsubscribe:n(e)}}})[o]=function(){return this},r}return b({type:u.INIT}),(i={dispatch:b,subscribe:h,getState:y,replaceReducer:w})[o]=O,i}function a(){for(var r=arguments.length,n=new Array(r),e=0;e<r;e++)n[e]=arguments[e];return 0===n.length?function(r){return r}:1===n.length?n[0]:n.reduce((function(r,n){return function(){return r(n.apply(void 0,arguments))}}))}function s(){for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return function(r){return function(){var o=r.apply(void 0,arguments),i=function(){throw new Error(t(15))},u={getState:o.getState,dispatch:function(){return i.apply(void 0,arguments)}},f=n.map((function(r){return r(u)}));return i=a.apply(void 0,f)(o.dispatch),e(e({},o),{},{dispatch:i})}}}function v(r){for(var n=arguments.length,e=Array(n>1?n-1:0),t=1;t<n;t++)e[t-1]=arguments[t];throw Error("[Immer] minified error nr: "+r+(e.length?" "+e.map((function(r){return"'"+r+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function l(r){return!!r&&!!r[Q]}function p(r){return!!r&&(function(r){if(!r||"object"!=typeof r)return!1;var n=Object.getPrototypeOf(r);if(null===n)return!0;var e=Object.hasOwnProperty.call(n,"constructor")&&n.constructor;return e===Object||"function"==typeof e&&Function.toString.call(e)===V}(r)||Array.isArray(r)||!!r[X]||!!r.constructor[X]||O(r)||j(r))}function d(r,n,e){void 0===e&&(e=!1),0===y(r)?(e?Object.keys:rr)(r).forEach((function(t){e&&"symbol"==typeof t||n(t,r[t],r)})):r.forEach((function(e,t){return n(t,e,r)}))}function y(r){var n=r[Q];return n?n.i>3?n.i-4:n.i:Array.isArray(r)?1:O(r)?2:j(r)?3:0}function h(r,n){return 2===y(r)?r.has(n):Object.prototype.hasOwnProperty.call(r,n)}function b(r,n,e){var t=y(r);2===t?r.set(n,e):3===t?(r.delete(n),r.add(e)):r[n]=e}function w(r,n){return r===n?0!==r||1/r==1/n:r!=r&&n!=n}function O(r){return B&&r instanceof Map}function j(r){return Z&&r instanceof Set}function m(r){return r.o||r.t}function A(r){if(Array.isArray(r))return Array.prototype.slice.call(r);var n=nr(r);delete n[Q];for(var e=rr(n),t=0;t<e.length;t++){var o=e[t],i=n[o];!1===i.writable&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(n[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:r[o]})}return Object.create(Object.getPrototypeOf(r),n)}function g(r,n){return void 0===n&&(n=!1),E(r)||l(r)||!p(r)||(y(r)>1&&(r.set=r.add=r.clear=r.delete=S),Object.freeze(r),n&&d(r,(function(r,n){return g(n,!0)}),!0)),r}function S(){v(2)}function E(r){return null==r||"object"!=typeof r||Object.isFrozen(r)}function N(r){var n=er[r];return n||v(18,r),n}function M(){return Y}function k(r,n){n&&(N("Patches"),r.u=[],r.s=[],r.v=n)}function x(r){L(r),r.p.forEach(P),r.p=null}function L(r){r===Y&&(Y=r.l)}function K(r){return Y={p:[],l:Y,h:r,m:!0,_:0}}function P(r){var n=r[Q];0===n.i||1===n.i?n.j():n.O=!0}function U(r,n){n._=n.p.length;var e=n.p[0],t=void 0!==r&&r!==e;return n.h.g||N("ES5").S(n,r,t),t?(e[Q].P&&(x(n),v(4)),p(r)&&(r=_(n,r),n.l||R(n,r)),n.u&&N("Patches").M(e[Q],r,n.u,n.s)):r=_(n,e,[]),x(n),n.u&&n.v(n.u,n.s),r!==J?r:void 0}function _(r,n,e){if(E(n))return n;var t=n[Q];if(!t)return d(n,(function(o,i){return I(r,t,n,o,i,e)}),!0),n;if(t.A!==r)return n;if(!t.P)return R(r,t.t,!0),t.t;if(!t.I){t.I=!0,t.A._--;var o=4===t.i||5===t.i?t.o=A(t.k):t.o;d(3===t.i?new Set(o):o,(function(n,i){return I(r,t,o,n,i,e)})),R(r,o,!1),e&&r.u&&N("Patches").R(t,e,r.u,r.s)}return t.o}function I(r,n,e,t,o,i){if(l(o)){var u=_(r,o,i&&n&&3!==n.i&&!h(n.D,t)?i.concat(t):void 0);if(b(e,t,u),!l(u))return;r.m=!1}if(p(o)&&!E(o)){if(!r.h.F&&r._<1)return;_(r,o),n&&n.A.l||R(r,o)}}function R(r,n,e){void 0===e&&(e=!1),r.h.F&&r.m&&g(n,e)}function T(r,n){var e=r[Q];return(e?m(e):r)[n]}function H(r,n){if(n in r)for(var e=Object.getPrototypeOf(r);e;){var t=Object.getOwnPropertyDescriptor(e,n);if(t)return t;e=Object.getPrototypeOf(e)}}function C(r){r.P||(r.P=!0,r.l&&C(r.l))}function z(r){r.o||(r.o=A(r.t))}function D(r,n,e){var t=O(n)?N("MapSet").N(n,e):j(n)?N("MapSet").T(n,e):r.g?function(r,n){var e=Array.isArray(r),t={i:e?1:0,A:n?n.A:M(),P:!1,I:!1,D:{},l:n,t:r,k:null,o:null,j:null,C:!1},o=t,i=tr;e&&(o=[t],i=or);var u=Proxy.revocable(o,i),f=u.revoke,c=u.proxy;return t.k=c,t.j=f,c}(n,e):N("ES5").J(n,e);return(e?e.A:M()).p.push(t),t}function G(r){return l(r)||v(22,r),function r(n){if(!p(n))return n;var e,t=n[Q],o=y(n);if(t){if(!t.P&&(t.i<4||!N("ES5").K(t)))return t.t;t.I=!0,e=F(n,o),t.I=!1}else e=F(n,o);return d(e,(function(n,o){t&&function(r,n){return 2===y(r)?r.get(n):r[n]}(t.t,n)===o||b(e,n,r(o))})),3===o?new Set(e):e}(r)}function F(r,n){switch(n){case 2:return new Map(r);case 3:return Array.from(r)}return A(r)}var W,Y,q="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),B="undefined"!=typeof Map,Z="undefined"!=typeof Set,$="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,J=q?Symbol.for("immer-nothing"):((W={})["immer-nothing"]=!0,W),X=q?Symbol.for("immer-draftable"):"__$immer_draftable",Q=q?Symbol.for("immer-state"):"__$immer_state",V=""+Object.prototype.constructor,rr="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(r){return Object.getOwnPropertyNames(r).concat(Object.getOwnPropertySymbols(r))}:Object.getOwnPropertyNames,nr=Object.getOwnPropertyDescriptors||function(r){var n={};return rr(r).forEach((function(e){n[e]=Object.getOwnPropertyDescriptor(r,e)})),n},er={},tr={get:function(r,n){if(n===Q)return r;var e=m(r);if(!h(e,n))return function(r,n,e){var t,o=H(n,e);return o?"value"in o?o.value:null===(t=o.get)||void 0===t?void 0:t.call(r.k):void 0}(r,e,n);var t=e[n];return r.I||!p(t)?t:t===T(r.t,n)?(z(r),r.o[n]=D(r.A.h,t,r)):t},has:function(r,n){return n in m(r)},ownKeys:function(r){return Reflect.ownKeys(m(r))},set:function(r,n,e){var t=H(m(r),n);if(null==t?void 0:t.set)return t.set.call(r.k,e),!0;if(!r.P){var o=T(m(r),n),i=null==o?void 0:o[Q];if(i&&i.t===e)return r.o[n]=e,r.D[n]=!1,!0;if(w(e,o)&&(void 0!==e||h(r.t,n)))return!0;z(r),C(r)}return r.o[n]===e&&"number"!=typeof e||(r.o[n]=e,r.D[n]=!0,!0)},deleteProperty:function(r,n){return void 0!==T(r.t,n)||n in r.t?(r.D[n]=!1,z(r),C(r)):delete r.D[n],r.o&&delete r.o[n],!0},getOwnPropertyDescriptor:function(r,n){var e=m(r),t=Reflect.getOwnPropertyDescriptor(e,n);return t?{writable:!0,configurable:1!==r.i||"length"!==n,enumerable:t.enumerable,value:e[n]}:t},defineProperty:function(){v(11)},getPrototypeOf:function(r){return Object.getPrototypeOf(r.t)},setPrototypeOf:function(){v(12)}},or={};d(tr,(function(r,n){or[r]=function(){return arguments[0]=arguments[0][0],n.apply(this,arguments)}})),or.deleteProperty=function(r,n){return tr.deleteProperty.call(this,r[0],n)},or.set=function(r,n,e){return tr.set.call(this,r[0],n,e,r[0])};var ir=new(function(){function r(r){var n=this;this.g=$,this.F=!0,this.produce=function(r,e,t){if("function"==typeof r&&"function"!=typeof e){var o=e;e=r;var i=n;return function(r){var n=this;void 0===r&&(r=o);for(var t=arguments.length,u=Array(t>1?t-1:0),f=1;f<t;f++)u[f-1]=arguments[f];return i.produce(r,(function(r){var t;return(t=e).call.apply(t,[n,r].concat(u))}))}}var u;if("function"!=typeof e&&v(6),void 0!==t&&"function"!=typeof t&&v(7),p(r)){var f=K(n),c=D(n,r,void 0),a=!0;try{u=e(c),a=!1}finally{a?x(f):L(f)}return"undefined"!=typeof Promise&&u instanceof Promise?u.then((function(r){return k(f,t),U(r,f)}),(function(r){throw x(f),r})):(k(f,t),U(u,f))}if(!r||"object"!=typeof r){if((u=e(r))===J)return;return void 0===u&&(u=r),n.F&&g(u,!0),u}v(21,r)},this.produceWithPatches=function(r,e){return"function"==typeof r?function(e){for(var t=arguments.length,o=Array(t>1?t-1:0),i=1;i<t;i++)o[i-1]=arguments[i];return n.produceWithPatches(e,(function(n){return r.apply(void 0,[n].concat(o))}))}:[n.produce(r,e,(function(r,n){t=r,o=n})),t,o];var t,o},"boolean"==typeof(null==r?void 0:r.useProxies)&&this.setUseProxies(r.useProxies),"boolean"==typeof(null==r?void 0:r.autoFreeze)&&this.setAutoFreeze(r.autoFreeze)}var n=r.prototype;return n.createDraft=function(r){p(r)||v(8),l(r)&&(r=G(r));var n=K(this),e=D(this,r,void 0);return e[Q].C=!0,L(n),e},n.finishDraft=function(r,n){var e=(r&&r[Q]).A;return k(e,n),U(void 0,e)},n.setAutoFreeze=function(r){this.F=r},n.setUseProxies=function(r){r&&!$&&v(20),this.g=r},n.applyPatches=function(r,n){var e;for(e=n.length-1;e>=0;e--){var t=n[e];if(0===t.path.length&&"replace"===t.op){r=t.value;break}}var o=N("Patches").$;return l(r)?o(r,n):this.produce(r,(function(r){return o(r,n.slice(e+1))}))},r}()),ur=ir.produce;function fr(r,n){return r===n}function cr(r,n,e){if(null===n||null===e||n.length!==e.length)return!1;for(var t=n.length,o=0;o<t;o++)if(!r(n[o],e[o]))return!1;return!0}function ar(r){return function(n){var e=n.dispatch,t=n.getState;return function(n){return function(o){return"function"==typeof o?o(e,t,r):n(o)}}}}ir.produceWithPatches.bind(ir),ir.setAutoFreeze.bind(ir),ir.setUseProxies.bind(ir),ir.applyPatches.bind(ir),ir.createDraft.bind(ir),ir.finishDraft.bind(ir),function(r){for(var n=arguments.length,e=Array(n>1?n-1:0),t=1;t<n;t++)e[t-1]=arguments[t]}((function(r){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:fr,e=null,t=null;return function(){return cr(n,e,arguments)||(t=r.apply(null,arguments)),e=arguments,t}}));var sr=ar();sr.withExtraArgument=ar;var vr,lr=(vr=function(r,n){return(vr=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(r[e]=n[e])})(r,n)},function(r,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function e(){this.constructor=r}vr(r,n),r.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}),pr=function(r,n){for(var e=0,t=n.length,o=r.length;e<t;e++,o++)r[o]=n[e];return r},dr=Object.defineProperty,yr=Object.prototype.hasOwnProperty,hr=Object.getOwnPropertySymbols,br=Object.prototype.propertyIsEnumerable,wr=function(r,n,e){return n in r?dr(r,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[n]=e},Or=function(r,n){for(var e in n||(n={}))yr.call(n,e)&&wr(r,e,n[e]);if(hr)for(var t=0,o=hr(n);t<o.length;t++)br.call(n,e=o[t])&&wr(r,e,n[e]);return r},jr="undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!==arguments.length)return"object"==typeof arguments[0]?a:a.apply(null,arguments)},mr=function(r){function n(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var o=r.apply(this,e)||this;return Object.setPrototypeOf(o,n.prototype),o}return lr(n,r),Object.defineProperty(n,Symbol.species,{get:function(){return n},enumerable:!1,configurable:!0}),n.prototype.concat=function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];return r.prototype.concat.apply(this,n)},n.prototype.prepend=function(){for(var r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];return 1===r.length&&Array.isArray(r[0])?new(n.bind.apply(n,pr([void 0],r[0].concat(this)))):new(n.bind.apply(n,pr([void 0],r.concat(this))))},n}(Array);function Ar(r,n){function e(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];if(n){var o=n.apply(void 0,e);if(!o)throw new Error("prepareAction did not return an object");return Or(Or({type:r,payload:o.payload},"meta"in o&&{meta:o.meta}),"error"in o&&{error:o.error})}return{type:r,payload:e[0]}}return e.toString=function(){return""+r},e.type=r,e.match=function(n){return n.type===r},e}function gr(r){var n,e={},t=[],o={addCase:function(r,n){var t="string"==typeof r?r:r.type;if(t in e)throw new Error("addCase cannot be called with two reducers for the same action type");return e[t]=n,o},addMatcher:function(r,n){return t.push({matcher:r,reducer:n}),o},addDefaultCase:function(r){return n=r,o}};return r(o),[e,t,n]}const Sr=[1,2,3,4,5,6],Er=[0,1,2,3,4];function Nr(r){const n={};return Sr.forEach((r=>n[r]=0)),r.forEach((r=>n[r]++)),n}const Mr=["fr","en"];function kr(){return{"superior.ace":-1,"superior.two":-1,"superior.three":-1,"superior.four":-1,"superior.five":-1,"superior.six":-1,"superior.bonus":0,"superior.total":0,"inferior.3ofKind":-1,"inferior.4ofKind":-1,"inferior.fullHouse":-1,"inferior.lowStraight":-1,"inferior.highStraight":-1,"inferior.yahtzee":-1,"inferior.chance":-1,"inferior.total":0,total:0}}function xr(r){return n=>n===r}function Lr(r,n){return r+n}const Kr=[[1,2,3,4],[2,3,4,5],[3,4,5,6]],Pr=[[1,2,3,4,5],[2,3,4,5,6]],Ur={"superior.ace":{key:"superior.ace",type:"MANUAL",compute:r=>r.filter(xr(1)).reduce(Lr,0)},"superior.two":{key:"superior.two",type:"MANUAL",compute:r=>r.filter(xr(2)).reduce(Lr,0)},"superior.three":{key:"superior.three",type:"MANUAL",compute:r=>r.filter(xr(3)).reduce(Lr,0)},"superior.four":{key:"superior.four",type:"MANUAL",compute:r=>r.filter(xr(4)).reduce(Lr,0)},"superior.five":{key:"superior.five",type:"MANUAL",compute:r=>r.filter(xr(5)).reduce(Lr,0)},"superior.six":{key:"superior.six",type:"MANUAL",compute:r=>r.filter(xr(6)).reduce(Lr,0)},"superior.bonus":{key:"superior.bonus",type:"AUTO",compute(r,n){const e=_r(n);return e("superior.ace")+e("superior.two")+e("superior.three")+e("superior.four")+e("superior.five")+e("superior.six")>=63?35:0}},"superior.total":{key:"superior.total",type:"AUTO",compute(r,n){const e=_r(n);return e("superior.ace")+e("superior.two")+e("superior.three")+e("superior.four")+e("superior.five")+e("superior.six")+e("superior.bonus")}},"inferior.3ofKind":{key:"inferior.3ofKind",type:"MANUAL",compute(r){const n=Nr(r);return Sr.some((r=>n[r]>=3))?r.reduce(Lr,0):0}},"inferior.4ofKind":{key:"inferior.4ofKind",type:"MANUAL",compute(r){const n=Nr(r);return Sr.some((r=>n[r]>=4))?r.reduce(Lr,0):0}},"inferior.fullHouse":{key:"inferior.fullHouse",type:"MANUAL",compute(r){const n=Nr(r),[e,t]=Sr.filter((r=>n[r]>=2));return 5===n[e]||3===n[e]&&2===n[t]||2===n[e]&&3===n[t]?25:0}},"inferior.lowStraight":{key:"inferior.lowStraight",type:"MANUAL",compute:r=>Kr.some((n=>n.every((n=>r.includes(n)))))?30:0},"inferior.highStraight":{key:"inferior.highStraight",type:"MANUAL",compute(r){const n=r.slice().sort();return Pr.some((r=>r.every(((r,e)=>r===n[e]))))?40:0}},"inferior.yahtzee":{key:"inferior.yahtzee",type:"MANUAL",compute(r){const n=Nr(r);return Sr.some((r=>n[r]>=5))?50:0}},"inferior.chance":{key:"inferior.chance",type:"MANUAL",compute:r=>r.reduce(Lr)},"inferior.total":{key:"inferior.total",type:"AUTO",compute(r,n){const e=_r(n);return e("inferior.3ofKind")+e("inferior.4ofKind")+e("inferior.fullHouse")+e("inferior.lowStraight")+e("inferior.highStraight")+e("inferior.yahtzee")+e("inferior.chance")}},total:{key:"total",type:"AUTO",compute:(r,n)=>n["superior.total"]+n["inferior.total"]}};function _r(r){return n=>-1===r[n]?0:r[n]}const Ir=["superior.ace","superior.two","superior.three","superior.four","superior.five","superior.six","superior.bonus","superior.total","inferior.3ofKind","inferior.4ofKind","inferior.fullHouse","inferior.lowStraight","inferior.highStraight","inferior.yahtzee","inferior.chance","inferior.total","total"],Rr=Ir.filter((r=>"AUTO"===Ur[r].type)),Tr=Ir.filter((r=>"MANUAL"===Ur[r].type)),Hr=Ir.filter((r=>r.startsWith("superior."))),Cr=Ir.filter((r=>r.startsWith("inferior.")));var zr;const Dr=null!==(zr=function(r=localStorage){const n=r.getItem("YAHTZEE.LANG");return Mr.includes(n)?n:void 0}())&&void 0!==zr?zr:function(r=navigator){const n=null==r?void 0:r.language;return(null==n?void 0:n.toLocaleLowerCase().includes("fr"))?"fr":"en"}(),Gr={currentLang:Dr,gameStatus:"NO_GAME",dices:[1,1,1,1,1],diceLocks:[!1,!1,!1,!1,!1],roll:0,scores:{"superior.ace":-1,"superior.two":-1,"superior.three":-1,"superior.four":-1,"superior.five":-1,"superior.six":-1,"superior.bonus":0,"superior.total":0,"inferior.3ofKind":-1,"inferior.4ofKind":-1,"inferior.fullHouse":-1,"inferior.lowStraight":-1,"inferior.highStraight":-1,"inferior.yahtzee":-1,"inferior.chance":-1,"inferior.total":0,total:0},scoreOfDices:{"superior.ace":-1,"superior.two":-1,"superior.three":-1,"superior.four":-1,"superior.five":-1,"superior.six":-1,"superior.bonus":0,"superior.total":0,"inferior.3ofKind":-1,"inferior.4ofKind":-1,"inferior.fullHouse":-1,"inferior.lowStraight":-1,"inferior.highStraight":-1,"inferior.yahtzee":-1,"inferior.chance":-1,"inferior.total":0,total:0}},Fr=function(r){var n=r.name,e=r.initialState;if(!n)throw new Error("`name` is a required option for createSlice");var t=r.reducers||{},o="function"==typeof r.extraReducers?gr(r.extraReducers):[r.extraReducers],i=o[0],u=void 0===i?{}:i,f=o[1],c=void 0===f?[]:f,a=o[2],s=void 0===a?void 0:a,v=Object.keys(t),y={},b={},O={};v.forEach((function(r){var e,o,i=t[r],u=n+"/"+r;"reducer"in i?(e=i.reducer,o=i.prepare):e=i,y[r]=e,b[u]=e,O[r]=o?Ar(u,o):Ar(u)}));var j=function(r,n,e,t){void 0===e&&(e=[]),function(){function r(r,n){var e=o[r];return e?e.enumerable=n:o[r]=e={configurable:!0,enumerable:n,get:function(){return tr.get(this[Q],r)},set:function(n){tr.set(this[Q],r,n)}},e}function n(r){for(var n=r.length-1;n>=0;n--){var o=r[n][Q];if(!o.P)switch(o.i){case 5:t(o)&&C(o);break;case 4:e(o)&&C(o)}}}function e(r){for(var n=r.t,e=r.k,t=rr(e),o=t.length-1;o>=0;o--){var i=t[o];if(i!==Q){var u=n[i];if(void 0===u&&!h(n,i))return!0;var f=e[i],c=f&&f[Q];if(c?c.t!==u:!w(f,u))return!0}}var a=!!n[Q];return t.length!==rr(n).length+(a?0:1)}function t(r){var n=r.k;if(n.length!==r.t.length)return!0;var e=Object.getOwnPropertyDescriptor(n,n.length-1);return!(!e||e.get)}var o={};!function(r,n){er.ES5||(er.ES5=n)}(0,{J:function(n,e){var t=Array.isArray(n),o=function(n,e){if(n){for(var t=Array(e.length),o=0;o<e.length;o++)Object.defineProperty(t,""+o,r(o,!0));return t}var i=nr(e);delete i[Q];for(var u=rr(i),f=0;f<u.length;f++){var c=u[f];i[c]=r(c,n||!!i[c].enumerable)}return Object.create(Object.getPrototypeOf(e),i)}(t,n),i={i:t?5:4,A:e?e.A:M(),P:!1,I:!1,D:{},l:e,t:n,k:o,o:null,O:!1,C:!1};return Object.defineProperty(o,Q,{value:i,writable:!0}),o},S:function(r,e,o){o?l(e)&&e[Q].A===r&&n(r.p):(r.u&&function r(n){if(n&&"object"==typeof n){var e=n[Q];if(e){var o=e.t,i=e.k,u=e.D,f=e.i;if(4===f)d(i,(function(n){n!==Q&&(void 0!==o[n]||h(o,n)?u[n]||r(i[n]):(u[n]=!0,C(e)))})),d(o,(function(r){void 0!==i[r]||h(i,r)||(u[r]=!1,C(e))}));else if(5===f){if(t(e)&&(C(e),u.length=!0),i.length<o.length)for(var c=i.length;c<o.length;c++)u[c]=!1;else for(var a=o.length;a<i.length;a++)u[a]=!0;for(var s=Math.min(i.length,o.length),v=0;v<s;v++)void 0===u[v]&&r(i[v])}}}}(r.p[0]),n(r.p))},K:function(r){return 4===r.i?e(r):t(r)}})}();var o="function"==typeof n?gr(n):[n,e,t],i=o[0],u=o[1],f=o[2],c=ur(r,(function(){}));return function(r,n){void 0===r&&(r=c);var e=pr([i[n.type]],u.filter((function(r){return(0,r.matcher)(n)})).map((function(r){return r.reducer})));return 0===e.filter((function(r){return!!r})).length&&(e=[f]),e.reduce((function(r,e){if(e){var t;if(l(r))return void 0===(t=e(r,n))?r:t;if(p(r))return ur(r,(function(r){return e(r,n)}));if(void 0===(t=e(r,n))){if(null===r)return r;throw Error("A case reducer on a non-draftable value must not return undefined")}return t}return r}),r)}}(e,Or(Or({},u),b),c,s);return{name:n,reducer:j,actions:O,caseReducers:y}}({name:"app",initialState:Gr,reducers:{setLang(r,{payload:{lang:n}}){r.currentLang=n},lock(r,{payload:{diceIndex:n}}){r.diceLocks[n]=!0},unlock(r,{payload:{diceIndex:n}}){r.diceLocks[n]=!1},toggleLock(r,{payload:{diceIndex:n}}){r.diceLocks[n]=!r.diceLocks[n]},dicesRoll(r){r.roll<3&&(Er.forEach((n=>{r.diceLocks[n]||(r.dices[n]=Math.floor(6*Math.random())+1)})),Tr.forEach((n=>{r.scoreOfDices[n]=Ur[n].compute(r.dices,r.scores)})),"NO_GAME"===r.gameStatus&&0===r.roll&&(r.gameStatus="PLAYING"),r.roll++)},setScore(r,{payload:{scoreKey:n}}){r.roll=0,r.scores[n]=r.scoreOfDices[n],r.scoreOfDices={"superior.ace":-1,"superior.two":-1,"superior.three":-1,"superior.four":-1,"superior.five":-1,"superior.six":-1,"superior.bonus":0,"superior.total":0,"inferior.3ofKind":-1,"inferior.4ofKind":-1,"inferior.fullHouse":-1,"inferior.lowStraight":-1,"inferior.highStraight":-1,"inferior.yahtzee":-1,"inferior.chance":-1,"inferior.total":0,total:0},r.diceLocks=[!1,!1,!1,!1,!1],Rr.forEach((n=>{r.scores[n]=Ur[n].compute(r.dices,r.scores)})),Tr.every((n=>r.scores[n]>=0))&&(r.gameStatus="GAME_FINISHED")},resetGame:()=>Gr}}),Wr=function(){var r,n=function(r){return function(r){void 0===r&&(r={});var n=r.thunk,e=void 0===n||n,t=new mr;return e&&(function(r){return"boolean"==typeof r}(e)?t.push(sr):t.push(sr.withExtraArgument(e.extraArgument))),t}(r)},e={reducer:Fr.reducer}||{},o=e.reducer,i=void 0===o?void 0:o,f=e.middleware,v=void 0===f?n():f,l=e.devTools,p=void 0===l||l,d=e.preloadedState,y=void 0===d?void 0:d,h=e.enhancers,b=void 0===h?void 0:h;if("function"==typeof i)r=i;else{if(!function(r){if("object"!=typeof r||null===r)return!1;for(var n=r;null!==Object.getPrototypeOf(n);)n=Object.getPrototypeOf(n);return Object.getPrototypeOf(r)===n}(i))throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');r=function(r){for(var n=Object.keys(r),e={},o=0;o<n.length;o++){var i=n[o];"function"==typeof r[i]&&(e[i]=r[i])}var f,c=Object.keys(e);try{!function(r){Object.keys(r).forEach((function(n){var e=r[n];if(void 0===e(void 0,{type:u.INIT}))throw new Error(t(12));if(void 0===e(void 0,{type:u.PROBE_UNKNOWN_ACTION()}))throw new Error(t(13))}))}(e)}catch(r){f=r}return function(r,n){if(void 0===r&&(r={}),f)throw f;for(var o=!1,i={},u=0;u<c.length;u++){var a=c[u],s=r[a],v=(0,e[a])(s,n);if(void 0===v)throw new Error(t(14));i[a]=v,o=o||v!==s}return(o=o||c.length!==Object.keys(r).length)?i:r}}(i)}var w=v;"function"==typeof w&&(w=w(n));var O=s.apply(void 0,w),j=a;p&&(j=jr(Or({trace:!1},"object"==typeof p&&p)));var m=[O];return Array.isArray(b)?m=pr([O],b):"function"==typeof b&&(m=b(m)),c(r,y,j.apply(void 0,m))}(),Yr=Fr.actions;function qr(r,n=localStorage){return async function(e){e(Yr.setLang({lang:r})),n.setItem("YAHTZEE.LANG",r)}}export{Dr as D,Cr as I,Mr as S,Yr as a,Hr as b,qr as c,Ur as d,kr as m,Wr as s}