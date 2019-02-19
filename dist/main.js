!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=94)}([function(t,e,r){var n=r(26)("wks"),o=r(12),i=r(1).Symbol,a="function"==typeof i;(t.exports=function(t){return n[t]||(n[t]=a&&i[t]||(a?i:o)("Symbol."+t))}).store=n},function(t,e){var r=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},function(t,e){var r=t.exports={version:"2.5.5"};"number"==typeof __e&&(__e=r)},function(t,e,r){var n=r(1),o=r(2),i=r(4),a=r(11),u=r(38),s=function(t,e,r){var c,f,l,h,p=t&s.F,d=t&s.G,y=t&s.S,v=t&s.P,_=t&s.B,b=d?n:y?n[e]||(n[e]={}):(n[e]||{}).prototype,m=d?o:o[e]||(o[e]={}),g=m.prototype||(m.prototype={});for(c in d&&(r=e),r)l=((f=!p&&b&&void 0!==b[c])?b:r)[c],h=_&&f?u(l,n):v&&"function"==typeof l?u(Function.call,l):l,b&&a(b,c,l,t&s.U),m[c]!=l&&i(m,c,h),v&&g[c]!=l&&(g[c]=l)};n.core=o,s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},function(t,e,r){var n=r(7),o=r(17);t.exports=r(8)?function(t,e,r){return n.f(t,e,o(1,r))}:function(t,e,r){return t[e]=r,t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){var r={}.hasOwnProperty;t.exports=function(t,e){return r.call(t,e)}},function(t,e,r){var n=r(16),o=r(36),i=r(22),a=Object.defineProperty;e.f=r(8)?Object.defineProperty:function(t,e,r){if(n(t),e=i(e,!0),n(r),o)try{return a(t,e,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[e]=r.value),t}},function(t,e,r){t.exports=!r(10)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e,r){var n=r(23),o=r(13);t.exports=function(t){return n(o(t))}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,r){var n=r(1),o=r(4),i=r(6),a=r(12)("src"),u=Function.toString,s=(""+u).split("toString");r(2).inspectSource=function(t){return u.call(t)},(t.exports=function(t,e,r,u){var c="function"==typeof r;c&&(i(r,"name")||o(r,"name",e)),t[e]!==r&&(c&&(i(r,a)||o(r,a,t[e]?""+t[e]:s.join(String(e)))),t===n?t[e]=r:u?t[e]?t[e]=r:o(t,e,r):(delete t[e],o(t,e,r)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[a]||u.call(this)})},function(t,e){var r=0,n=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++r+n).toString(36))}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,r){var n=r(41),o=r(29);t.exports=Object.keys||function(t){return n(t,o)}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(92),o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i="[DEFAULT]",a=[],u=function(){function t(t,e,r){this.firebase_=r,this.isDeleted_=!1,this.services_={},this.name_=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled||!1,this.options_=n.deepCopy(t),this.INTERNAL={getUid:function(){return null},getToken:function(){return Promise.resolve(null)},addAuthTokenListener:function(t){a.push(t),setTimeout(function(){return t(null)},0)},removeAuthTokenListener:function(t){a=a.filter(function(e){return e!==t})}}}return Object.defineProperty(t.prototype,"automaticDataCollectionEnabled",{get:function(){return this.checkDestroyed_(),this._automaticDataCollectionEnabled},set:function(t){this.checkDestroyed_(),this._automaticDataCollectionEnabled=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"name",{get:function(){return this.checkDestroyed_(),this.name_},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"options",{get:function(){return this.checkDestroyed_(),this.options_},enumerable:!0,configurable:!0}),t.prototype.delete=function(){var t=this;return new Promise(function(e){t.checkDestroyed_(),e()}).then(function(){t.firebase_.INTERNAL.removeApp(t.name_);var e=[];return Object.keys(t.services_).forEach(function(r){Object.keys(t.services_[r]).forEach(function(n){e.push(t.services_[r][n])})}),Promise.all(e.map(function(t){return t.INTERNAL.delete()}))}).then(function(){t.isDeleted_=!0,t.services_={}})},t.prototype._getService=function(t,e){if(void 0===e&&(e=i),this.checkDestroyed_(),this.services_[t]||(this.services_[t]={}),!this.services_[t][e]){var r=e!==i?e:void 0,n=this.firebase_.INTERNAL.factories[t](this,this.extendApp.bind(this),r);this.services_[t][e]=n}return this.services_[t][e]},t.prototype.extendApp=function(t){var e=this;n.deepExtend(this,t),t.INTERNAL&&t.INTERNAL.addAuthTokenListener&&(a.forEach(function(t){e.INTERNAL.addAuthTokenListener(t)}),a=[])},t.prototype.checkDestroyed_=function(){this.isDeleted_&&s("app-deleted",{name:this.name_})},t}();
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s(t,e){throw c.create(t,e)}u.prototype.name&&u.prototype.options||u.prototype.delete||console.log("dc");var c=new n.ErrorFactory("app","Firebase",{"no-app":"No Firebase App '{$name}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$name}","duplicate-app":"Firebase App named '{$name}' already exists","app-deleted":"Firebase App named '{$name}' already deleted","duplicate-service":"Firebase service named '{$name}' already registered","sa-not-supported":"Initializing the Firebase SDK with a service account is only allowed in a Node.js environment. On client devices, you should instead initialize the SDK with an api key and auth domain","invalid-app-argument":"firebase.{$name}() takes either no argument or a Firebase App instance."}),f=function t(){var e={},r={},a={},c={__esModule:!0,initializeApp:function(t,r){if(void 0===r&&(r={}),"object"!=typeof r||null===r){var n=r;r={name:n}}var a=r;void 0===a.name&&(a.name=i);var f=a.name;"string"==typeof f&&f||s("bad-app-name",{name:f+""}),o(e,f)&&s("duplicate-app",{name:f});var l=new u(t,a,c);return e[f]=l,h(l,"create"),l},app:f,apps:null,Promise:Promise,SDK_VERSION:"5.8.3",INTERNAL:{registerService:function(t,e,o,i,h){r[t]&&s("duplicate-service",{name:t}),r[t]=e,i&&(a[t]=i,l().forEach(function(t){i("create",t)}));var p=function(e){return void 0===e&&(e=f()),"function"!=typeof e[t]&&s("invalid-app-argument",{name:t}),e[t]()};return void 0!==o&&n.deepExtend(p,o),c[t]=p,u.prototype[t]=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return this._getService.bind(this,t).apply(this,h?e:[])},p},createFirebaseNamespace:t,extendNamespace:function(t){n.deepExtend(c,t)},createSubscribe:n.createSubscribe,ErrorFactory:n.ErrorFactory,removeApp:function(t){h(e[t],"delete"),delete e[t]},factories:r,useAsService:p,Promise:Promise,deepExtend:n.deepExtend}};function f(t){return o(e,t=t||i)||s("no-app",{name:t}),e[t]}function l(){return Object.keys(e).map(function(t){return e[t]})}function h(t,e){Object.keys(r).forEach(function(r){var n=p(t,r);null!==n&&a[n]&&a[n](e,t)})}function p(t,e){if("serverAuth"===e)return null;var r=e;return t.options,r}return n.patchProperty(c,"default",c),Object.defineProperty(c,"apps",{get:l}),n.patchProperty(f,"App",u),c}();e.firebase=f,e.default=f},function(t,e,r){var n=r(5);t.exports=function(t){if(!n(t))throw TypeError(t+" is not an object!");return t}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,e){var r=Math.ceil,n=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?n:r)(t)}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,e,r){var n=r(5);t.exports=function(t,e){if(!n(t))return t;var r,o;if(e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!n(o=r.call(t)))return o;if(!e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,r){var n=r(18);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==n(t)?t.split(""):Object(t)}},function(t,e,r){var n=r(13);t.exports=function(t){return Object(n(t))}},function(t,e,r){var n=r(19),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},function(t,e,r){var n=r(1),o=n["__core-js_shared__"]||(n["__core-js_shared__"]={});t.exports=function(t){return o[t]||(o[t]={})}},function(t,e,r){var n=r(0)("unscopables"),o=Array.prototype;null==o[n]&&r(4)(o,n,{}),t.exports=function(t){o[n][t]=!0}},function(t,e,r){var n=r(26)("keys"),o=r(12);t.exports=function(t){return n[t]||(n[t]=o(t))}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,r){var n=r(7).f,o=r(6),i=r(0)("toStringTag");t.exports=function(t,e,r){t&&!o(t=r?t:t.prototype,i)&&n(t,i,{configurable:!0,value:e})}},function(t,e,r){e.f=r(0)},function(t,e,r){var n=r(1),o=r(2),i=r(34),a=r(32),u=r(7).f;t.exports=function(t){var e=o.Symbol||(o.Symbol=i?{}:n.Symbol||{});"_"==t.charAt(0)||t in e||u(e,t,{value:a.f(t)})}},function(t,e){t.exports=!1},function(t,e){t.exports={}},function(t,e,r){t.exports=!r(8)&&!r(10)(function(){return 7!=Object.defineProperty(r(37)("div"),"a",{get:function(){return 7}}).a})},function(t,e,r){var n=r(5),o=r(1).document,i=n(o)&&n(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e,r){var n=r(54);t.exports=function(t,e,r){if(n(t),void 0===e)return t;switch(r){case 1:return function(r){return t.call(e,r)};case 2:return function(r,n){return t.call(e,r,n)};case 3:return function(r,n,o){return t.call(e,r,n,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,r){var n=r(38),o=r(23),i=r(24),a=r(25),u=r(55);t.exports=function(t,e){var r=1==t,s=2==t,c=3==t,f=4==t,l=6==t,h=5==t||l,p=e||u;return function(e,u,d){for(var y,v,_=i(e),b=o(_),m=n(u,d,3),g=a(b.length),w=0,E=r?p(e,g):s?p(e,0):void 0;g>w;w++)if((h||w in b)&&(v=m(y=b[w],w,_),t))if(r)E[w]=v;else if(v)switch(t){case 3:return!0;case 5:return y;case 6:return w;case 2:E.push(y)}else if(f)return!1;return l?-1:c||f?f:E}}},function(t,e,r){var n=r(18);t.exports=Array.isArray||function(t){return"Array"==n(t)}},function(t,e,r){var n=r(6),o=r(9),i=r(62)(!1),a=r(28)("IE_PROTO");t.exports=function(t,e){var r,u=o(t),s=0,c=[];for(r in u)r!=a&&n(u,r)&&c.push(r);for(;e.length>s;)n(u,r=e[s++])&&(~i(c,r)||c.push(r));return c}},function(t,e,r){var n=r(16),o=r(76),i=r(29),a=r(28)("IE_PROTO"),u=function(){},s=function(){var t,e=r(37)("iframe"),n=i.length;for(e.style.display="none",r(77).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),s=t.F;n--;)delete s.prototype[i[n]];return s()};t.exports=Object.create||function(t,e){var r;return null!==t?(u.prototype=n(t),r=new u,u.prototype=null,r[a]=t):r=s(),void 0===e?r:o(r,e)}},function(t,e,r){var n=r(41),o=r(29).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,o)}},function(t,e,r){"use strict";var n=r(34),o=r(3),i=r(11),a=r(4),u=r(35),s=r(87),c=r(31),f=r(88),l=r(0)("iterator"),h=!([].keys&&"next"in[].keys()),p=function(){return this};t.exports=function(t,e,r,d,y,v,_){s(r,e,d);var b,m,g,w=function(t){if(!h&&t in O)return O[t];switch(t){case"keys":case"values":return function(){return new r(this,t)}}return function(){return new r(this,t)}},E=e+" Iterator",S="values"==y,T=!1,O=t.prototype,A=O[l]||O["@@iterator"]||y&&O[y],R=A||w(y),x=y?S?w("entries"):R:void 0,N="Array"==e&&O.entries||A;if(N&&(g=f(N.call(new t)))!==Object.prototype&&g.next&&(c(g,E,!0),n||"function"==typeof g[l]||a(g,l,p)),S&&A&&"values"!==A.name&&(T=!0,R=function(){return A.call(this)}),n&&!_||!h&&!T&&O[l]||a(O,l,R),u[e]=R,u[E]=p,y)if(b={values:S?R:w("values"),keys:v?R:w("keys"),entries:x},_)for(m in b)m in O||i(O,m,b[m]);else o(o.P+o.F*(h||T),e,b);return b}},function(t,e,r){"use strict";r(46);var n,o=(n=r(15))&&"object"==typeof n&&"default"in n?n.default:n;
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */t.exports=o},function(t,e,r){"use strict";r.r(e);r(47),r(48),r(52),r(57),r(59),r(64),r(69),r(72),r(84)},function(t,e){!function(t){"use strict";if(!t.fetch){var e={searchParams:"URLSearchParams"in t,iterable:"Symbol"in t&&"iterator"in Symbol,blob:"FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in t,arrayBuffer:"ArrayBuffer"in t};if(e.arrayBuffer)var r=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],n=function(t){return t&&DataView.prototype.isPrototypeOf(t)},o=ArrayBuffer.isView||function(t){return t&&r.indexOf(Object.prototype.toString.call(t))>-1};f.prototype.append=function(t,e){t=u(t),e=s(e);var r=this.map[t];this.map[t]=r?r+","+e:e},f.prototype.delete=function(t){delete this.map[u(t)]},f.prototype.get=function(t){return t=u(t),this.has(t)?this.map[t]:null},f.prototype.has=function(t){return this.map.hasOwnProperty(u(t))},f.prototype.set=function(t,e){this.map[u(t)]=s(e)},f.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},f.prototype.keys=function(){var t=[];return this.forEach(function(e,r){t.push(r)}),c(t)},f.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),c(t)},f.prototype.entries=function(){var t=[];return this.forEach(function(e,r){t.push([r,e])}),c(t)},e.iterable&&(f.prototype[Symbol.iterator]=f.prototype.entries);var i=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];v.prototype.clone=function(){return new v(this,{body:this._bodyInit})},y.call(v.prototype),y.call(b.prototype),b.prototype.clone=function(){return new b(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new f(this.headers),url:this.url})},b.error=function(){var t=new b(null,{status:0,statusText:""});return t.type="error",t};var a=[301,302,303,307,308];b.redirect=function(t,e){if(-1===a.indexOf(e))throw new RangeError("Invalid status code");return new b(null,{status:e,headers:{location:t}})},t.Headers=f,t.Request=v,t.Response=b,t.fetch=function(t,r){return new Promise(function(n,o){var i=new v(t,r),a=new XMLHttpRequest;a.onload=function(){var t,e,r={status:a.status,statusText:a.statusText,headers:(t=a.getAllResponseHeaders()||"",e=new f,t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(t){var r=t.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();e.append(n,o)}}),e)};r.url="responseURL"in a?a.responseURL:r.headers.get("X-Request-URL");var o="response"in a?a.response:a.responseText;n(new b(o,r))},a.onerror=function(){o(new TypeError("Network request failed"))},a.ontimeout=function(){o(new TypeError("Network request failed"))},a.open(i.method,i.url,!0),"include"===i.credentials?a.withCredentials=!0:"omit"===i.credentials&&(a.withCredentials=!1),"responseType"in a&&e.blob&&(a.responseType="blob"),i.headers.forEach(function(t,e){a.setRequestHeader(e,t)}),a.send(void 0===i._bodyInit?null:i._bodyInit)})},t.fetch.polyfill=!0}function u(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function s(t){return"string"!=typeof t&&(t=String(t)),t}function c(t){var r={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return e.iterable&&(r[Symbol.iterator]=function(){return r}),r}function f(t){this.map={},t instanceof f?t.forEach(function(t,e){this.append(e,t)},this):Array.isArray(t)?t.forEach(function(t){this.append(t[0],t[1])},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function l(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function h(t){return new Promise(function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}})}function p(t){var e=new FileReader,r=h(e);return e.readAsArrayBuffer(t),r}function d(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function y(){return this.bodyUsed=!1,this._initBody=function(t){if(this._bodyInit=t,t)if("string"==typeof t)this._bodyText=t;else if(e.blob&&Blob.prototype.isPrototypeOf(t))this._bodyBlob=t;else if(e.formData&&FormData.prototype.isPrototypeOf(t))this._bodyFormData=t;else if(e.searchParams&&URLSearchParams.prototype.isPrototypeOf(t))this._bodyText=t.toString();else if(e.arrayBuffer&&e.blob&&n(t))this._bodyArrayBuffer=d(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!e.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(t)&&!o(t))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=d(t)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):e.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},e.blob&&(this.blob=function(){var t=l(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?l(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(p)}),this.text=function(){var t,e,r,n=l(this);if(n)return n;if(this._bodyBlob)return t=this._bodyBlob,e=new FileReader,r=h(e),e.readAsText(t),r;if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),r=new Array(e.length),n=0;n<e.length;n++)r[n]=String.fromCharCode(e[n]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},e.formData&&(this.formData=function(){return this.text().then(_)}),this.json=function(){return this.text().then(JSON.parse)},this}function v(t,e){var r,n,o=(e=e||{}).body;if(t instanceof v){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new f(t.headers)),this.method=t.method,this.mode=t.mode,o||null==t._bodyInit||(o=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"omit",!e.headers&&this.headers||(this.headers=new f(e.headers)),this.method=(r=e.method||this.method||"GET",n=r.toUpperCase(),i.indexOf(n)>-1?n:r),this.mode=e.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}function _(t){var e=new FormData;return t.trim().split("&").forEach(function(t){if(t){var r=t.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(n),decodeURIComponent(o))}}),e}function b(t,e){e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new f(e.headers),this.url=e.url||"",this._initBody(t)}}("undefined"!=typeof self?self:this)},function(t,e,r){"use strict";(function(t,e){var r=setTimeout;function n(){}function o(t){if(!(this instanceof o))throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],f(t,this)}function i(t,e){for(;3===t._state;)t=t._value;0!==t._state?(t._handled=!0,o._immediateFn(function(){var r=1===t._state?e.onFulfilled:e.onRejected;if(null!==r){var n;try{n=r(t._value)}catch(t){return void u(e.promise,t)}a(e.promise,n)}else(1===t._state?a:u)(e.promise,t._value)})):t._deferreds.push(e)}function a(t,e){try{if(e===t)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var r=e.then;if(e instanceof o)return t._state=3,t._value=e,void s(t);if("function"==typeof r)return void f((n=r,i=e,function(){n.apply(i,arguments)}),t)}t._state=1,t._value=e,s(t)}catch(e){u(t,e)}var n,i}function u(t,e){t._state=2,t._value=e,s(t)}function s(t){2===t._state&&0===t._deferreds.length&&o._immediateFn(function(){t._handled||o._unhandledRejectionFn(t._value)});for(var e=0,r=t._deferreds.length;e<r;e++)i(t,t._deferreds[e]);t._deferreds=null}function c(t,e,r){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof e?e:null,this.promise=r}function f(t,e){var r=!1;try{t(function(t){r||(r=!0,a(e,t))},function(t){r||(r=!0,u(e,t))})}catch(t){if(r)return;r=!0,u(e,t)}}o.prototype.catch=function(t){return this.then(null,t)},o.prototype.then=function(t,e){var r=new this.constructor(n);return i(this,new c(t,e,r)),r},o.prototype.finally=function(t){var e=this.constructor;return this.then(function(r){return e.resolve(t()).then(function(){return r})},function(r){return e.resolve(t()).then(function(){return e.reject(r)})})},o.all=function(t){return new o(function(e,r){if(!t||void 0===t.length)throw new TypeError("Promise.all accepts an array");var n=Array.prototype.slice.call(t);if(0===n.length)return e([]);var o=n.length;function i(t,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var u=a.then;if("function"==typeof u)return void u.call(a,function(e){i(t,e)},r)}n[t]=a,0==--o&&e(n)}catch(t){r(t)}}for(var a=0;a<n.length;a++)i(a,n[a])})},o.resolve=function(t){return t&&"object"==typeof t&&t.constructor===o?t:new o(function(e){e(t)})},o.reject=function(t){return new o(function(e,r){r(t)})},o.race=function(t){return new o(function(e,r){for(var n=0,o=t.length;n<o;n++)t[n].then(e,r)})},o._immediateFn="function"==typeof t&&function(e){t(e)}||function(t){r(t,0)},o._unhandledRejectionFn=function(t){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",t)};var l=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==e)return e;throw new Error("unable to locate global object")}();l.Promise||(l.Promise=o)}).call(this,r(49).setImmediate,r(21))},function(t,e,r){(function(t){var n=void 0!==t&&t||"undefined"!=typeof self&&self||window,o=Function.prototype.apply;function i(t,e){this._id=t,this._clearFn=e}e.setTimeout=function(){return new i(o.call(setTimeout,n,arguments),clearTimeout)},e.setInterval=function(){return new i(o.call(setInterval,n,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(n,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout(function(){t._onTimeout&&t._onTimeout()},e))},r(50),e.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==t&&t.setImmediate||this&&this.setImmediate,e.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==t&&t.clearImmediate||this&&this.clearImmediate}).call(this,r(21))},function(t,e,r){(function(t,e){!function(t,r){"use strict";if(!t.setImmediate){var n,o,i,a,u,s=1,c={},f=!1,l=t.document,h=Object.getPrototypeOf&&Object.getPrototypeOf(t);h=h&&h.setTimeout?h:t,"[object process]"==={}.toString.call(t.process)?n=function(t){e.nextTick(function(){d(t)})}:!function(){if(t.postMessage&&!t.importScripts){var e=!0,r=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=r,e}}()?t.MessageChannel?((i=new MessageChannel).port1.onmessage=function(t){d(t.data)},n=function(t){i.port2.postMessage(t)}):l&&"onreadystatechange"in l.createElement("script")?(o=l.documentElement,n=function(t){var e=l.createElement("script");e.onreadystatechange=function(){d(t),e.onreadystatechange=null,o.removeChild(e),e=null},o.appendChild(e)}):n=function(t){setTimeout(d,0,t)}:(a="setImmediate$"+Math.random()+"$",u=function(e){e.source===t&&"string"==typeof e.data&&0===e.data.indexOf(a)&&d(+e.data.slice(a.length))},t.addEventListener?t.addEventListener("message",u,!1):t.attachEvent("onmessage",u),n=function(e){t.postMessage(a+e,"*")}),h.setImmediate=function(t){"function"!=typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),r=0;r<e.length;r++)e[r]=arguments[r+1];var o={callback:t,args:e};return c[s]=o,n(s),s++},h.clearImmediate=p}function p(t){delete c[t]}function d(t){if(f)setTimeout(d,0,t);else{var e=c[t];if(e){f=!0;try{!function(t){var e=t.callback,n=t.args;switch(n.length){case 0:e();break;case 1:e(n[0]);break;case 2:e(n[0],n[1]);break;case 3:e(n[0],n[1],n[2]);break;default:e.apply(r,n)}}(e)}finally{p(t),f=!1}}}}}("undefined"==typeof self?void 0===t?this:t:self)}).call(this,r(21),r(51))},function(t,e){var r,n,o=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function u(t){if(r===setTimeout)return setTimeout(t,0);if((r===i||!r)&&setTimeout)return r=setTimeout,setTimeout(t,0);try{return r(t,0)}catch(e){try{return r.call(null,t,0)}catch(e){return r.call(this,t,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:i}catch(t){r=i}try{n="function"==typeof clearTimeout?clearTimeout:a}catch(t){n=a}}();var s,c=[],f=!1,l=-1;function h(){f&&s&&(f=!1,s.length?c=s.concat(c):l=-1,c.length&&p())}function p(){if(!f){var t=u(h);f=!0;for(var e=c.length;e;){for(s=c,c=[];++l<e;)s&&s[l].run();l=-1,e=c.length}s=null,f=!1,function(t){if(n===clearTimeout)return clearTimeout(t);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(t);try{n(t)}catch(e){try{return n.call(null,t)}catch(e){return n.call(this,t)}}}(t)}}function d(t,e){this.fun=t,this.array=e}function y(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];c.push(new d(t,e)),1!==c.length||f||u(p)},d.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=y,o.addListener=y,o.once=y,o.off=y,o.removeListener=y,o.removeAllListeners=y,o.emit=y,o.prependListener=y,o.prependOnceListener=y,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(t,e,r){r(53),t.exports=r(2).Array.find},function(t,e,r){"use strict";var n=r(3),o=r(39)(5),i=!0;"find"in[]&&Array(1).find(function(){i=!1}),n(n.P+n.F*i,"Array",{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),r(27)("find")},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,r){var n=r(56);t.exports=function(t,e){return new(n(t))(e)}},function(t,e,r){var n=r(5),o=r(40),i=r(0)("species");t.exports=function(t){var e;return o(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!o(e.prototype)||(e=void 0),n(e)&&null===(e=e[i])&&(e=void 0)),void 0===e?Array:e}},function(t,e,r){r(58),t.exports=r(2).Array.findIndex},function(t,e,r){"use strict";var n=r(3),o=r(39)(6),i="findIndex",a=!0;i in[]&&Array(1)[i](function(){a=!1}),n(n.P+n.F*a,"Array",{findIndex:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),r(27)(i)},function(t,e,r){r(60),t.exports=r(2).Object.assign},function(t,e,r){var n=r(3);n(n.S+n.F,"Object",{assign:r(61)})},function(t,e,r){"use strict";var n=r(14),o=r(30),i=r(20),a=r(24),u=r(23),s=Object.assign;t.exports=!s||r(10)(function(){var t={},e={},r=Symbol(),n="abcdefghijklmnopqrst";return t[r]=7,n.split("").forEach(function(t){e[t]=t}),7!=s({},t)[r]||Object.keys(s({},e)).join("")!=n})?function(t,e){for(var r=a(t),s=arguments.length,c=1,f=o.f,l=i.f;s>c;)for(var h,p=u(arguments[c++]),d=f?n(p).concat(f(p)):n(p),y=d.length,v=0;y>v;)l.call(p,h=d[v++])&&(r[h]=p[h]);return r}:s},function(t,e,r){var n=r(9),o=r(25),i=r(63);t.exports=function(t){return function(e,r,a){var u,s=n(e),c=o(s.length),f=i(a,c);if(t&&r!=r){for(;c>f;)if((u=s[f++])!=u)return!0}else for(;c>f;f++)if((t||f in s)&&s[f]===r)return t||f||0;return!t&&-1}}},function(t,e,r){var n=r(19),o=Math.max,i=Math.min;t.exports=function(t,e){return(t=n(t))<0?o(t+e,0):i(t,e)}},function(t,e,r){r(65),t.exports=r(2).String.startsWith},function(t,e,r){"use strict";var n=r(3),o=r(25),i=r(66),a="".startsWith;n(n.P+n.F*r(68)("startsWith"),"String",{startsWith:function(t){var e=i(this,t,"startsWith"),r=o(Math.min(arguments.length>1?arguments[1]:void 0,e.length)),n=String(t);return a?a.call(e,n,r):e.slice(r,r+n.length)===n}})},function(t,e,r){var n=r(67),o=r(13);t.exports=function(t,e,r){if(n(e))throw TypeError("String#"+r+" doesn't accept regex!");return String(o(t))}},function(t,e,r){var n=r(5),o=r(18),i=r(0)("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==o(t))}},function(t,e,r){var n=r(0)("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(r){try{return e[n]=!1,!"/./"[t](e)}catch(t){}}return!0}},function(t,e,r){r(70),t.exports=r(2).String.repeat},function(t,e,r){var n=r(3);n(n.P,"String",{repeat:r(71)})},function(t,e,r){"use strict";var n=r(19),o=r(13);t.exports=function(t){var e=String(o(this)),r="",i=n(t);if(i<0||i==1/0)throw RangeError("Count can't be negative");for(;i>0;(i>>>=1)&&(e+=e))1&i&&(r+=e);return r}},function(t,e,r){r(73),r(80),r(82),r(83),t.exports=r(2).Symbol},function(t,e,r){"use strict";var n=r(1),o=r(6),i=r(8),a=r(3),u=r(11),s=r(74).KEY,c=r(10),f=r(26),l=r(31),h=r(12),p=r(0),d=r(32),y=r(33),v=r(75),_=r(40),b=r(16),m=r(5),g=r(9),w=r(22),E=r(17),S=r(42),T=r(78),O=r(79),A=r(7),R=r(14),x=O.f,N=A.f,C=T.f,P=n.Symbol,k=n.JSON,U=k&&k.stringify,I=p("_hidden"),j=p("toPrimitive"),D={}.propertyIsEnumerable,L=f("symbol-registry"),M=f("symbols"),B=f("op-symbols"),F=Object.prototype,W="function"==typeof P,G=n.QObject,z=!G||!G.prototype||!G.prototype.findChild,q=i&&c(function(){return 7!=S(N({},"a",{get:function(){return N(this,"a",{value:7}).a}})).a})?function(t,e,r){var n=x(F,e);n&&delete F[e],N(t,e,r),n&&t!==F&&N(F,e,n)}:N,H=function(t){var e=M[t]=S(P.prototype);return e._k=t,e},V=W&&"symbol"==typeof P.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof P},X=function(t,e,r){return t===F&&X(B,e,r),b(t),e=w(e,!0),b(r),o(M,e)?(r.enumerable?(o(t,I)&&t[I][e]&&(t[I][e]=!1),r=S(r,{enumerable:E(0,!1)})):(o(t,I)||N(t,I,E(1,{})),t[I][e]=!0),q(t,e,r)):N(t,e,r)},K=function(t,e){b(t);for(var r,n=v(e=g(e)),o=0,i=n.length;i>o;)X(t,r=n[o++],e[r]);return t},J=function(t){var e=D.call(this,t=w(t,!0));return!(this===F&&o(M,t)&&!o(B,t))&&(!(e||!o(this,t)||!o(M,t)||o(this,I)&&this[I][t])||e)},$=function(t,e){if(t=g(t),e=w(e,!0),t!==F||!o(M,e)||o(B,e)){var r=x(t,e);return!r||!o(M,e)||o(t,I)&&t[I][e]||(r.enumerable=!0),r}},Z=function(t){for(var e,r=C(g(t)),n=[],i=0;r.length>i;)o(M,e=r[i++])||e==I||e==s||n.push(e);return n},Q=function(t){for(var e,r=t===F,n=C(r?B:g(t)),i=[],a=0;n.length>a;)!o(M,e=n[a++])||r&&!o(F,e)||i.push(M[e]);return i};W||(u((P=function(){if(this instanceof P)throw TypeError("Symbol is not a constructor!");var t=h(arguments.length>0?arguments[0]:void 0),e=function(r){this===F&&e.call(B,r),o(this,I)&&o(this[I],t)&&(this[I][t]=!1),q(this,t,E(1,r))};return i&&z&&q(F,t,{configurable:!0,set:e}),H(t)}).prototype,"toString",function(){return this._k}),O.f=$,A.f=X,r(43).f=T.f=Z,r(20).f=J,r(30).f=Q,i&&!r(34)&&u(F,"propertyIsEnumerable",J,!0),d.f=function(t){return H(p(t))}),a(a.G+a.W+a.F*!W,{Symbol:P});for(var Y="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),tt=0;Y.length>tt;)p(Y[tt++]);for(var et=R(p.store),rt=0;et.length>rt;)y(et[rt++]);a(a.S+a.F*!W,"Symbol",{for:function(t){return o(L,t+="")?L[t]:L[t]=P(t)},keyFor:function(t){if(!V(t))throw TypeError(t+" is not a symbol!");for(var e in L)if(L[e]===t)return e},useSetter:function(){z=!0},useSimple:function(){z=!1}}),a(a.S+a.F*!W,"Object",{create:function(t,e){return void 0===e?S(t):K(S(t),e)},defineProperty:X,defineProperties:K,getOwnPropertyDescriptor:$,getOwnPropertyNames:Z,getOwnPropertySymbols:Q}),k&&a(a.S+a.F*(!W||c(function(){var t=P();return"[null]"!=U([t])||"{}"!=U({a:t})||"{}"!=U(Object(t))})),"JSON",{stringify:function(t){for(var e,r,n=[t],o=1;arguments.length>o;)n.push(arguments[o++]);if(r=e=n[1],(m(e)||void 0!==t)&&!V(t))return _(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!V(e))return e}),n[1]=e,U.apply(k,n)}}),P.prototype[j]||r(4)(P.prototype,j,P.prototype.valueOf),l(P,"Symbol"),l(Math,"Math",!0),l(n.JSON,"JSON",!0)},function(t,e,r){var n=r(12)("meta"),o=r(5),i=r(6),a=r(7).f,u=0,s=Object.isExtensible||function(){return!0},c=!r(10)(function(){return s(Object.preventExtensions({}))}),f=function(t){a(t,n,{value:{i:"O"+ ++u,w:{}}})},l=t.exports={KEY:n,NEED:!1,fastKey:function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,n)){if(!s(t))return"F";if(!e)return"E";f(t)}return t[n].i},getWeak:function(t,e){if(!i(t,n)){if(!s(t))return!0;if(!e)return!1;f(t)}return t[n].w},onFreeze:function(t){return c&&l.NEED&&s(t)&&!i(t,n)&&f(t),t}}},function(t,e,r){var n=r(14),o=r(30),i=r(20);t.exports=function(t){var e=n(t),r=o.f;if(r)for(var a,u=r(t),s=i.f,c=0;u.length>c;)s.call(t,a=u[c++])&&e.push(a);return e}},function(t,e,r){var n=r(7),o=r(16),i=r(14);t.exports=r(8)?Object.defineProperties:function(t,e){o(t);for(var r,a=i(e),u=a.length,s=0;u>s;)n.f(t,r=a[s++],e[r]);return t}},function(t,e,r){var n=r(1).document;t.exports=n&&n.documentElement},function(t,e,r){var n=r(9),o=r(43).f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return a&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(t){return a.slice()}}(t):o(n(t))}},function(t,e,r){var n=r(20),o=r(17),i=r(9),a=r(22),u=r(6),s=r(36),c=Object.getOwnPropertyDescriptor;e.f=r(8)?c:function(t,e){if(t=i(t),e=a(e,!0),s)try{return c(t,e)}catch(t){}if(u(t,e))return o(!n.f.call(t,e),t[e])}},function(t,e,r){"use strict";var n=r(81),o={};o[r(0)("toStringTag")]="z",o+""!="[object z]"&&r(11)(Object.prototype,"toString",function(){return"[object "+n(this)+"]"},!0)},function(t,e,r){var n=r(18),o=r(0)("toStringTag"),i="Arguments"==n(function(){return arguments}());t.exports=function(t){var e,r,a;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),o))?r:i?n(e):"Object"==(a=n(e))&&"function"==typeof e.callee?"Arguments":a}},function(t,e,r){r(33)("asyncIterator")},function(t,e,r){r(33)("observable")},function(t,e,r){r(85),r(89),t.exports=r(32).f("iterator")},function(t,e,r){"use strict";var n=r(86)(!0);r(44)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,r=this._i;return r>=e.length?{value:void 0,done:!0}:(t=n(e,r),this._i+=t.length,{value:t,done:!1})})},function(t,e,r){var n=r(19),o=r(13);t.exports=function(t){return function(e,r){var i,a,u=String(o(e)),s=n(r),c=u.length;return s<0||s>=c?t?"":void 0:(i=u.charCodeAt(s))<55296||i>56319||s+1===c||(a=u.charCodeAt(s+1))<56320||a>57343?t?u.charAt(s):i:t?u.slice(s,s+2):a-56320+(i-55296<<10)+65536}}},function(t,e,r){"use strict";var n=r(42),o=r(17),i=r(31),a={};r(4)(a,r(0)("iterator"),function(){return this}),t.exports=function(t,e,r){t.prototype=n(a,{next:o(1,r)}),i(t,e+" Iterator")}},function(t,e,r){var n=r(6),o=r(24),i=r(28)("IE_PROTO"),a=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),n(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},function(t,e,r){for(var n=r(90),o=r(14),i=r(11),a=r(1),u=r(4),s=r(35),c=r(0),f=c("iterator"),l=c("toStringTag"),h=s.Array,p={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},d=o(p),y=0;y<d.length;y++){var v,_=d[y],b=p[_],m=a[_],g=m&&m.prototype;if(g&&(g[f]||u(g,f,h),g[l]||u(g,l,_),s[_]=h,b))for(v in n)g[v]||i(g,v,n[v],!0)}},function(t,e,r){"use strict";var n=r(27),o=r(91),i=r(35),a=r(9);t.exports=r(44)(Array,"Array",function(t,e){this._t=a(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,r=this._i++;return!t||r>=t.length?(this._t=void 0,o(1)):o(0,"keys"==e?r:"values"==e?t[r]:[r,t[r]])},"values"),i.Arguments=i.Array,n("keys"),n("values"),n("entries")},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(93),o={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},i=function(t,e){if(!t)throw a(e)},a=function(t){return new Error("Firebase Database ("+o.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)},u=function(t){for(var e=[],r=0,n=0;n<t.length;n++){var o=t.charCodeAt(n);o<128?e[r++]=o:o<2048?(e[r++]=o>>6|192,e[r++]=63&o|128):55296==(64512&o)&&n+1<t.length&&56320==(64512&t.charCodeAt(n+1))?(o=65536+((1023&o)<<10)+(1023&t.charCodeAt(++n)),e[r++]=o>>18|240,e[r++]=o>>12&63|128,e[r++]=o>>6&63|128,e[r++]=63&o|128):(e[r++]=o>>12|224,e[r++]=o>>6&63|128,e[r++]=63&o|128)}return e},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var r=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[],o=0;o<t.length;o+=3){var i=t[o],a=o+1<t.length,u=a?t[o+1]:0,s=o+2<t.length,c=s?t[o+2]:0,f=i>>2,l=(3&i)<<4|u>>4,h=(15&u)<<2|c>>6,p=63&c;s||(p=64,a||(h=64)),n.push(r[f],r[l],r[h],r[p])}return n.join("")},encodeString:function(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(u(t),e)},decodeString:function(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){for(var e=[],r=0,n=0;r<t.length;){var o=t[r++];if(o<128)e[n++]=String.fromCharCode(o);else if(o>191&&o<224){var i=t[r++];e[n++]=String.fromCharCode((31&o)<<6|63&i)}else if(o>239&&o<365){var a=((7&o)<<18|(63&(i=t[r++]))<<12|(63&(u=t[r++]))<<6|63&t[r++])-65536;e[n++]=String.fromCharCode(55296+(a>>10)),e[n++]=String.fromCharCode(56320+(1023&a))}else{i=t[r++];var u=t[r++];e[n++]=String.fromCharCode((15&o)<<12|(63&i)<<6|63&u)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray:function(t,e){this.init_();for(var r=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[],o=0;o<t.length;){var i=r[t.charAt(o++)],a=o<t.length?r[t.charAt(o)]:0,u=++o<t.length?r[t.charAt(o)]:64,s=++o<t.length?r[t.charAt(o)]:64;if(++o,null==i||null==a||null==u||null==s)throw Error();var c=i<<2|a>>4;if(n.push(c),64!=u){var f=a<<4&240|u>>2;if(n.push(f),64!=s){var l=u<<6&192|s;n.push(l)}}}return n},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},c=function(t){try{return s.decodeString(t,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:return new Date(e.getTime());case Object:void 0===t&&(t={});break;case Array:t=[];break;default:return e}for(var r in e)e.hasOwnProperty(r)&&(t[r]=f(t[r],e[r]));return t}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var l=function(){function t(){var t=this;this.promise=new Promise(function(e,r){t.resolve=e,t.reject=r})}return t.prototype.wrapCallback=function(t){var e=this;return function(r,n){r?e.reject(r):e.resolve(n),"function"==typeof t&&(e.promise.catch(function(){}),1===t.length?t(r):t(r,n))}},t}(),h=function(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""},p="FirebaseError",d=Error.captureStackTrace;
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var y=function(){return function(t,e){if(this.code=t,this.message=e,d)d(this,v.prototype.create);else try{throw Error.apply(this,arguments)}catch(t){this.name=p,Object.defineProperty(this,"stack",{get:function(){return t.stack}})}}}();y.prototype=Object.create(Error.prototype),y.prototype.constructor=y,y.prototype.name=p;var v=function(){function t(t,e,r){this.service=t,this.serviceName=e,this.errors=r,this.pattern=/\{\$([^}]+)}/g}return t.prototype.create=function(t,e){void 0===e&&(e={});var r,n=this.errors[t],o=this.service+"/"+t;r=void 0===n?"Error":n.replace(this.pattern,function(t,r){var n=e[r];return void 0!==n?n.toString():"<"+r+"?>"}),r=this.serviceName+": "+r+" ("+o+").";var i=new y(o,r);for(var a in e)e.hasOwnProperty(a)&&"_"!==a.slice(-1)&&(i[a]=e[a]);return i},t}();
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(t){return JSON.parse(t)}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var b=function(t){var e={},r={},n={},o="";try{var i=t.split(".");e=_(c(i[0])||""),r=_(c(i[1])||""),o=i[2],n=r.d||{},delete r.d}catch(t){}return{header:e,claims:r,data:n,signature:o}},m=function(t,e){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e(r,t[r])},g=function(t,e){return m(e,function(e,r){t[e]=r}),t},w=function(t,e,r){for(var n in t)if(e.call(r,t[n],n,t))return n},E=function(t){function e(){var e=t.call(this)||this;e.chain_=[],e.buf_=[],e.W_=[],e.pad_=[],e.inbuf_=0,e.total_=0,e.blockSize=64,e.pad_[0]=128;for(var r=1;r<e.blockSize;++r)e.pad_[r]=0;return e.reset(),e}return n.__extends(e,t),e.prototype.reset=function(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0},e.prototype.compress_=function(t,e){e||(e=0);var r=this.W_;if("string"==typeof t)for(var n=0;n<16;n++)r[n]=t.charCodeAt(e)<<24|t.charCodeAt(e+1)<<16|t.charCodeAt(e+2)<<8|t.charCodeAt(e+3),e+=4;else for(n=0;n<16;n++)r[n]=t[e]<<24|t[e+1]<<16|t[e+2]<<8|t[e+3],e+=4;for(n=16;n<80;n++){var o=r[n-3]^r[n-8]^r[n-14]^r[n-16];r[n]=4294967295&(o<<1|o>>>31)}var i,a,u=this.chain_[0],s=this.chain_[1],c=this.chain_[2],f=this.chain_[3],l=this.chain_[4];for(n=0;n<80;n++){n<40?n<20?(i=f^s&(c^f),a=1518500249):(i=s^c^f,a=1859775393):n<60?(i=s&c|f&(s|c),a=2400959708):(i=s^c^f,a=3395469782);o=(u<<5|u>>>27)+i+l+a+r[n]&4294967295;l=f,f=c,c=4294967295&(s<<30|s>>>2),s=u,u=o}this.chain_[0]=this.chain_[0]+u&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+c&4294967295,this.chain_[3]=this.chain_[3]+f&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295},e.prototype.update=function(t,e){if(null!=t){void 0===e&&(e=t.length);for(var r=e-this.blockSize,n=0,o=this.buf_,i=this.inbuf_;n<e;){if(0==i)for(;n<=r;)this.compress_(t,n),n+=this.blockSize;if("string"==typeof t){for(;n<e;)if(o[i]=t.charCodeAt(n),++n,++i==this.blockSize){this.compress_(o),i=0;break}}else for(;n<e;)if(o[i]=t[n],++n,++i==this.blockSize){this.compress_(o),i=0;break}}this.inbuf_=i,this.total_+=e}},e.prototype.digest=function(){var t=[],e=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(var r=this.blockSize-1;r>=56;r--)this.buf_[r]=255&e,e/=256;this.compress_(this.buf_);var n=0;for(r=0;r<5;r++)for(var o=24;o>=0;o-=8)t[n]=this.chain_[r]>>o&255,++n;return t},e}(function(){return function(){this.blockSize=-1}}());var S=function(){function t(t,e){var r=this;this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(function(){t(r)}).catch(function(t){r.error(t)})}return t.prototype.next=function(t){this.forEachObserver(function(e){e.next(t)})},t.prototype.error=function(t){this.forEachObserver(function(e){e.error(t)}),this.close(t)},t.prototype.complete=function(){this.forEachObserver(function(t){t.complete()}),this.close()},t.prototype.subscribe=function(t,e,r){var n,o=this;if(void 0===t&&void 0===e&&void 0===r)throw new Error("Missing Observer.");void 0===(n=function(t,e){if("object"!=typeof t||null===t)return!1;for(var r=0,n=e;r<n.length;r++){var o=n[r];if(o in t&&"function"==typeof t[o])return!0}return!1}(t,["next","error","complete"])?t:{next:t,error:e,complete:r}).next&&(n.next=T),void 0===n.error&&(n.error=T),void 0===n.complete&&(n.complete=T);var i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(function(){try{o.finalError?n.error(o.finalError):n.complete()}catch(t){}}),this.observers.push(n),i},t.prototype.unsubscribeOne=function(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))},t.prototype.forEachObserver=function(t){if(!this.finalized)for(var e=0;e<this.observers.length;e++)this.sendOne(e,t)},t.prototype.sendOne=function(t,e){var r=this;this.task.then(function(){if(void 0!==r.observers&&void 0!==r.observers[t])try{e(r.observers[t])}catch(t){"undefined"!=typeof console&&console.error&&console.error(t)}})},t.prototype.close=function(t){var e=this;this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then(function(){e.observers=void 0,e.onNoObservers=void 0}))},t}();function T(){}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(t,e,r){var n="";switch(e){case 1:n=r?"first":"First";break;case 2:n=r?"second":"Second";break;case 3:n=r?"third":"Third";break;case 4:n=r?"fourth":"Fourth";break;default:throw new Error("errorPrefix called with argumentNumber > 4.  Need to update it?")}var o=t+" failed: ";return o+=n+" argument "}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e.assert=i,e.assertionError=a,e.base64=s,e.base64Decode=c,e.base64Encode=function(t){var e=u(t);return s.encodeByteArray(e,!0)},e.CONSTANTS=o,e.deepCopy=
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(t){return f(void 0,t)},e.deepExtend=f,e.patchProperty=function(t,e,r){t[e]=r},e.Deferred=l,e.getUA=h,e.isMobileCordova=function(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(h())},e.isNodeSdk=function(){return!0===o.NODE_CLIENT||!0===o.NODE_ADMIN},e.isReactNative=function(){return"object"==typeof navigator&&"ReactNative"===navigator.product},e.ErrorFactory=v,e.FirebaseError=y,e.patchCapture=function(t){var e=d;return d=t,e},e.jsonEval=_,e.stringify=function(t){return JSON.stringify(t)},e.decode=b,e.isAdmin=function(t){var e=b(t).claims;return"object"==typeof e&&!0===e.admin},e.issuedAtTime=function(t){var e=b(t).claims;return"object"==typeof e&&e.hasOwnProperty("iat")?e.iat:null},e.isValidFormat=function(t){var e=b(t).claims;return!!e&&"object"==typeof e&&e.hasOwnProperty("iat")},e.isValidTimestamp=function(t){var e,r,n=b(t).claims,o=Math.floor((new Date).getTime()/1e3);return"object"==typeof n&&(n.hasOwnProperty("nbf")?e=n.nbf:n.hasOwnProperty("iat")&&(e=n.iat),r=n.hasOwnProperty("exp")?n.exp:e+86400),o&&e&&r&&o>=e&&o<=r},e.clone=function(t){return g({},t)},e.contains=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.every=function(t,e){for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)&&!e(r,t[r]))return!1;return!0},e.extend=g,e.findKey=w,e.findValue=function(t,e,r){var n=w(t,e,r);return n&&t[n]},e.forEach=m,e.getAnyKey=function(t){for(var e in t)return e},e.getCount=function(t){var e=0;for(var r in t)e++;return e},e.getValues=function(t){var e=[],r=0;for(var n in t)e[r++]=t[n];return e},e.isEmpty=function(t){for(var e in t)return!1;return!0},e.isNonNullObject=function(t){return"object"==typeof t&&null!==t},e.map=function(t,e,r){var n={};for(var o in t)n[o]=e.call(r,t[o],o,t);return n},e.safeGet=function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]},e.querystring=function(t){var e=[];return m(t,function(t,r){Array.isArray(r)?r.forEach(function(r){e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}),e.length?"&"+e.join("&"):""},e.querystringDecode=function(t){var e={};return t.replace(/^\?/,"").split("&").forEach(function(t){if(t){var r=t.split("=");e[r[0]]=r[1]}}),e},e.Sha1=E,e.async=function(t,e){return function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];Promise.resolve(!0).then(function(){t.apply(void 0,r)}).catch(function(t){e&&e(t)})}},e.createSubscribe=function(t,e){var r=new S(t,e);return r.subscribe.bind(r)},e.errorPrefix=O,e.validateArgCount=function(t,e,r,n){var o;if(n<e?o="at least "+e:n>r&&(o=0===r?"none":"no more than "+r),o)throw new Error(t+" failed: Was called with "+n+(1===n?" argument.":" arguments.")+" Expects "+o+".")},e.validateCallback=function(t,e,r,n){if((!n||r)&&"function"!=typeof r)throw new Error(O(t,e,n)+"must be a valid function.")},e.validateContextObject=function(t,e,r,n){if((!n||r)&&("object"!=typeof r||null===r))throw new Error(O(t,e,n)+"must be a valid context object.")}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */,e.validateNamespace=function(t,e,r,n){if((!n||r)&&"string"!=typeof r)throw new Error(O(t,e,n)+"must be a valid firebase namespace.")},e.stringLength=function(t){for(var e=0,r=0;r<t.length;r++){var n=t.charCodeAt(r);n<128?e++:n<2048?e+=2:n>=55296&&n<=56319?(e+=4,r++):e+=3}return e},e.stringToByteArray=function(t){for(var e=[],r=0,n=0;n<t.length;n++){var o=t.charCodeAt(n);if(o>=55296&&o<=56319){var a=o-55296;i(++n<t.length,"Surrogate pair missing trail surrogate."),o=65536+(a<<10)+(t.charCodeAt(n)-56320)}o<128?e[r++]=o:o<2048?(e[r++]=o>>6|192,e[r++]=63&o|128):o<65536?(e[r++]=o>>12|224,e[r++]=o>>6&63|128,e[r++]=63&o|128):(e[r++]=o>>18|240,e[r++]=o>>12&63|128,e[r++]=o>>6&63|128,e[r++]=63&o|128)}return e}},function(t,e,r){"use strict";r.r(e),r.d(e,"__extends",function(){return o}),r.d(e,"__assign",function(){return i}),r.d(e,"__rest",function(){return a}),r.d(e,"__decorate",function(){return u}),r.d(e,"__param",function(){return s}),r.d(e,"__metadata",function(){return c}),r.d(e,"__awaiter",function(){return f}),r.d(e,"__generator",function(){return l}),r.d(e,"__exportStar",function(){return h}),r.d(e,"__values",function(){return p}),r.d(e,"__read",function(){return d}),r.d(e,"__spread",function(){return y}),r.d(e,"__await",function(){return v}),r.d(e,"__asyncGenerator",function(){return _}),r.d(e,"__asyncDelegator",function(){return b}),r.d(e,"__asyncValues",function(){return m}),r.d(e,"__makeTemplateObject",function(){return g}),r.d(e,"__importStar",function(){return w}),r.d(e,"__importDefault",function(){return E});
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])};function o(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}var i=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t};function a(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&(r[n[o]]=t[n[o]])}return r}function u(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var u=t.length-1;u>=0;u--)(o=t[u])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a}function s(t,e){return function(r,n){e(r,n,t)}}function c(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}function f(t,e,r,n){return new(r||(r=Promise))(function(o,i){function a(t){try{s(n.next(t))}catch(t){i(t)}}function u(t){try{s(n.throw(t))}catch(t){i(t)}}function s(t){t.done?o(t.value):new r(function(e){e(t.value)}).then(a,u)}s((n=n.apply(t,e||[])).next())})}function l(t,e){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=n[2&i[0]?"return":i[0]?"throw":"next"])&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[0,o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}}function h(t,e){for(var r in t)e.hasOwnProperty(r)||(e[r]=t[r])}function p(t){var e="function"==typeof Symbol&&t[Symbol.iterator],r=0;return e?e.call(t):{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}}}function d(t,e){var r="function"==typeof Symbol&&t[Symbol.iterator];if(!r)return t;var n,o,i=r.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(n=i.next()).done;)a.push(n.value)}catch(t){o={error:t}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return a}function y(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(d(arguments[e]));return t}function v(t){return this instanceof v?(this.v=t,this):new v(t)}function _(t,e,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,o=r.apply(t,e||[]),i=[];return n={},a("next"),a("throw"),a("return"),n[Symbol.asyncIterator]=function(){return this},n;function a(t){o[t]&&(n[t]=function(e){return new Promise(function(r,n){i.push([t,e,r,n])>1||u(t,e)})})}function u(t,e){try{(r=o[t](e)).value instanceof v?Promise.resolve(r.value.v).then(s,c):f(i[0][2],r)}catch(t){f(i[0][3],t)}var r}function s(t){u("next",t)}function c(t){u("throw",t)}function f(t,e){t(e),i.shift(),i.length&&u(i[0][0],i[0][1])}}function b(t){var e,r;return e={},n("next"),n("throw",function(t){throw t}),n("return"),e[Symbol.iterator]=function(){return this},e;function n(n,o){t[n]&&(e[n]=function(e){return(r=!r)?{value:v(t[n](e)),done:"return"===n}:o?o(e):e})}}function m(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=t[Symbol.asyncIterator];return e?e.call(t):p(t)}function g(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t}function w(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function E(t){return t&&t.__esModule?t:{default:t}}},function(t,e,r){"use strict";r.r(e);var n=r(45),o=r.n(n),i=r(15),a=r.n(i),u="https://firebasestorage.googleapis.com",s="https://firebasestorage.googleapis.com",c="/v0",f="/v0",l=12e4,h=6e4,p=-9007199254740991,d=function(){function t(t,e){this.code_=v(t),this.message_="Firebase Storage: "+e,this.serverResponse_=null,this.name_="FirebaseError"}return t.prototype.codeProp=function(){return this.code},t.prototype.codeEquals=function(t){return v(t)===this.codeProp()},t.prototype.serverResponseProp=function(){return this.serverResponse_},t.prototype.setServerResponseProp=function(t){this.serverResponse_=t},Object.defineProperty(t.prototype,"name",{get:function(){return this.name_},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"code",{get:function(){return this.code_},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"message",{get:function(){return this.message_},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"serverResponse",{get:function(){return this.serverResponse_},enumerable:!0,configurable:!0}),t}(),y={UNKNOWN:"unknown",OBJECT_NOT_FOUND:"object-not-found",BUCKET_NOT_FOUND:"bucket-not-found",PROJECT_NOT_FOUND:"project-not-found",QUOTA_EXCEEDED:"quota-exceeded",UNAUTHENTICATED:"unauthenticated",UNAUTHORIZED:"unauthorized",RETRY_LIMIT_EXCEEDED:"retry-limit-exceeded",INVALID_CHECKSUM:"invalid-checksum",CANCELED:"canceled",INVALID_EVENT_NAME:"invalid-event-name",INVALID_URL:"invalid-url",INVALID_DEFAULT_BUCKET:"invalid-default-bucket",NO_DEFAULT_BUCKET:"no-default-bucket",CANNOT_SLICE_BLOB:"cannot-slice-blob",SERVER_FILE_WRONG_SIZE:"server-file-wrong-size",NO_DOWNLOAD_URL:"no-download-url",INVALID_ARGUMENT:"invalid-argument",INVALID_ARGUMENT_COUNT:"invalid-argument-count",APP_DELETED:"app-deleted",INVALID_ROOT_OPERATION:"invalid-root-operation",INVALID_FORMAT:"invalid-format",INTERNAL_ERROR:"internal-error"};function v(t){return"storage/"+t}function _(){return new d(y.UNKNOWN,"An unknown error occurred, please check the error payload for server response.")}function b(){return new d(y.CANCELED,"User canceled the upload/download.")}function m(){return new d(y.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function g(t,e,r){return new d(y.INVALID_ARGUMENT,"Invalid argument in `"+e+"` at index "+t+": "+r)}function w(){return new d(y.APP_DELETED,"The Firebase app was deleted.")}function E(t,e){return new d(y.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function S(t){throw new d(y.INTERNAL_ERROR,"Internal error: "+t)}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var T={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};function O(t){switch(t){case T.RAW:case T.BASE64:case T.BASE64URL:case T.DATA_URL:return;default:throw"Expected one of the event types: ["+T.RAW+", "+T.BASE64+", "+T.BASE64URL+", "+T.DATA_URL+"]."}}var A=function(){return function(t,e){this.data=t,this.contentType=e||null}}();function R(t,e){switch(t){case T.RAW:return new A(x(e));case T.BASE64:case T.BASE64URL:return new A(N(t,e));case T.DATA_URL:return new A(function(t){var e=new C(t);return e.base64?N(T.BASE64,e.rest):function(t){var e;try{e=decodeURIComponent(t)}catch(t){throw E(T.DATA_URL,"Malformed data URL.")}return x(e)}(e.rest)}(e),function(t){return new C(t).contentType}(e))}throw _()}function x(t){for(var e=[],r=0;r<t.length;r++){var n=t.charCodeAt(r);if(n<=127)e.push(n);else if(n<=2047)e.push(192|n>>6,128|63&n);else if(55296==(64512&n))if(r<t.length-1&&56320==(64512&t.charCodeAt(r+1)))n=65536|(1023&n)<<10|1023&t.charCodeAt(++r),e.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|63&n);else e.push(239,191,189);else 56320==(64512&n)?e.push(239,191,189):e.push(224|n>>12,128|n>>6&63,128|63&n)}return new Uint8Array(e)}function N(t,e){switch(t){case T.BASE64:var r=-1!==e.indexOf("-"),n=-1!==e.indexOf("_");if(r||n)throw E(t,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break;case T.BASE64URL:var o=-1!==e.indexOf("+"),i=-1!==e.indexOf("/");if(o||i)throw E(t,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/")}var a;try{a=atob(e)}catch(e){throw E(t,"Invalid character found")}for(var u=new Uint8Array(a.length),s=0;s<a.length;s++)u[s]=a.charCodeAt(s);return u}var C=function(){return function(t){this.base64=!1,this.contentType=null;var e=t.match(/^data:([^,]+)?,/);if(null===e)throw E(T.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");var r=e[1]||null;null!=r&&(this.base64=(n=r,o=";base64",n.length>=o.length&&n.substring(n.length-o.length)===o),this.contentType=this.base64?r.substring(0,r.length-";base64".length):r),this.rest=t.substring(t.indexOf(",")+1);var n,o;
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}}();var P,k={STATE_CHANGED:"state_changed"},U={RUNNING:"running",PAUSING:"pausing",PAUSED:"paused",SUCCESS:"success",CANCELING:"canceling",CANCELED:"canceled",ERROR:"error"},I={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function j(t){switch(t){case U.RUNNING:case U.PAUSING:case U.CANCELING:return I.RUNNING;case U.PAUSED:return I.PAUSED;case U.SUCCESS:return I.SUCCESS;case U.CANCELED:return I.CANCELED;case U.ERROR:default:return I.ERROR}}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function L(t,e){for(var r in t)D(t,r)&&e(r,t[r])}function M(t){if(null==t)return{};var e={};return L(t,function(t,r){e[t]=r}),e}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(t){return new Promise(t)}function F(t){return Promise.resolve(t)}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function W(t){return null!=t}function G(t){return void 0!==t}function z(t){return"function"==typeof t}function q(t){return"object"==typeof t}function H(t){return q(t)&&null!==t}function V(t){return"string"==typeof t||t instanceof String}function X(t){return K()&&t instanceof Blob}function K(){return"undefined"!=typeof Blob}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"}(P||(P={}));
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var J=function(){function t(){var t=this;this.sent_=!1,this.xhr_=new XMLHttpRequest,this.errorCode_=P.NO_ERROR,this.sendPromise_=B(function(e,r){t.xhr_.addEventListener("abort",function(r){t.errorCode_=P.ABORT,e(t)}),t.xhr_.addEventListener("error",function(r){t.errorCode_=P.NETWORK_ERROR,e(t)}),t.xhr_.addEventListener("load",function(r){e(t)})})}return t.prototype.send=function(t,e,r,n){var o=this;if(this.sent_)throw S("cannot .send() more than once");(this.sent_=!0,this.xhr_.open(e,t,!0),W(n))&&L(n,function(t,e){o.xhr_.setRequestHeader(t,e.toString())});return W(r)?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_},t.prototype.getErrorCode=function(){if(!this.sent_)throw S("cannot .getErrorCode() before sending");return this.errorCode_},t.prototype.getStatus=function(){if(!this.sent_)throw S("cannot .getStatus() before sending");try{return this.xhr_.status}catch(t){return-1}},t.prototype.getResponseText=function(){if(!this.sent_)throw S("cannot .getResponseText() before sending");return this.xhr_.responseText},t.prototype.abort=function(){this.xhr_.abort()},t.prototype.getResponseHeader=function(t){return this.xhr_.getResponseHeader(t)},t.prototype.addUploadProgressListener=function(t){W(this.xhr_.upload)&&this.xhr_.upload.addEventListener("progress",t)},t.prototype.removeUploadProgressListener=function(t){W(this.xhr_.upload)&&this.xhr_.upload.removeEventListener("progress",t)},t}(),$=function(){function t(){}return t.prototype.createXhrIo=function(){return new J},t}();
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Z(t){var e,r;try{e=JSON.parse(t)}catch(t){return null}return q(r=e)&&!Array.isArray(r)?e:null}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Q=function(){function t(t,e){this.bucket=t,this.path_=e}return Object.defineProperty(t.prototype,"path",{get:function(){return this.path_},enumerable:!0,configurable:!0}),t.prototype.fullServerUrl=function(){var t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)},t.prototype.bucketOnlyServerUrl=function(){return"/b/"+encodeURIComponent(this.bucket)+"/o"},t.makeFromBucketSpec=function(e){var r,n;try{r=t.makeFromUrl(e)}catch(r){return new t(e,"")}if(""===r.path)return r;throw n=e,new d(y.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")},t.makeFromUrl=function(e){var r=null;for(var n=[{regex:new RegExp("^gs://([A-Za-z0-9.\\-_]+)(/(.*))?$","i"),indices:{bucket:1,path:3},postModify:function(t){"/"===t.path.charAt(t.path.length-1)&&(t.path_=t.path_.slice(0,-1))}},{regex:new RegExp("^https?://firebasestorage\\.googleapis\\.com/v[A-Za-z0-9_]+/b/([A-Za-z0-9.\\-_]+)/o(/([^?#]*).*)?$","i"),indices:{bucket:1,path:3},postModify:function(t){t.path_=decodeURIComponent(t.path)}}],o=0;o<n.length;o++){var i=n[o],a=i.regex.exec(e);if(a){var u=a[i.indices.bucket],s=a[i.indices.path];s||(s=""),r=new t(u,s),i.postModify(r);break}}if(null==r)throw function(t){return new d(y.INVALID_URL,"Invalid URL '"+t+"'.")}(e);return r},t}();
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(t){var e=t.lastIndexOf("/",t.length-2);return-1===e?t:t.slice(e+1)}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(t){return u+c+t}function et(t){return u+f+t}function rt(t){var e=encodeURIComponent,r="?";return L(t,function(t,n){var o=e(t)+"="+e(n);r=r+o+"&"}),r=r.slice(0,-1)}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(t,e){return e}var ot=function(){return function(t,e,r,n){this.server=t,this.local=e||t,this.writable=!!r,this.xform=n||nt}}(),it=null;function at(){if(it)return it;var t=[];t.push(new ot("bucket")),t.push(new ot("generation")),t.push(new ot("metageneration")),t.push(new ot("name","fullPath",!0));var e=new ot("name");e.xform=function(t,e){return function(t){return!V(t)||t.length<2?t:Y(t=t)}(e)},t.push(e);var r=new ot("size");return r.xform=function(t,e){return W(e)?+e:e},t.push(r),t.push(new ot("timeCreated")),t.push(new ot("updated")),t.push(new ot("md5Hash",null,!0)),t.push(new ot("cacheControl",null,!0)),t.push(new ot("contentDisposition",null,!0)),t.push(new ot("contentEncoding",null,!0)),t.push(new ot("contentLanguage",null,!0)),t.push(new ot("contentType",null,!0)),t.push(new ot("metadata","customMetadata",!0)),it=t}function ut(t,e,r){for(var n={type:"file"},o=r.length,i=0;i<o;i++){var a=r[i];n[a.local]=a.xform(n,e[a.server])}return function(t,e){Object.defineProperty(t,"ref",{get:function(){var r=t.bucket,n=t.fullPath,o=new Q(r,n);return e.makeStorageReference(o)}})}(n,t),n}function st(t,e,r){var n=Z(e);return null===n?null:ut(t,n,r)}function ct(t,e){var r=Z(e);if(null===r)return null;if(!V(r.downloadTokens))return null;var n=r.downloadTokens;if(0===n.length)return null;var o=encodeURIComponent;return n.split(",").map(function(e){var r=t.bucket,n=t.fullPath;return function(t){return s+c+t}("/b/"+o(r)+"/o/"+o(n))+rt({alt:"media",token:e})})[0]}function ft(t,e){for(var r={},n=e.length,o=0;o<n;o++){var i=e[o];i.writable&&(r[i.server]=t[i.local])}return JSON.stringify(r)}function lt(t){if(!(t&&q(t)))throw"Expected Metadata object.";for(var e in t){var r=t[e];if("customMetadata"===e){if(!q(r))throw"Expected object for 'customMetadata' mapping."}else if(H(r))throw"Mapping for '"+e+"' cannot be an object."}}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(t,e,r){for(var n=e.length,o=e.length,i=0;i<e.length;i++)if(e[i].optional){n=i;break}var a,u,s,c,f,l;if(!(n<=r.length&&r.length<=o))throw a=n,u=o,s=t,c=r.length,a===u?(f=a,l=1===a?"argument":"arguments"):(f="between "+a+" and "+u,l="arguments"),new d(y.INVALID_ARGUMENT_COUNT,"Invalid argument count in `"+s+"`: Expected "+f+" "+l+", received "+c+".");for(i=0;i<r.length;i++)try{e[i].validator(r[i])}catch(e){throw e instanceof Error?g(i,t,e.message):g(i,t,e)}}var pt=function(){return function(t,e){var r=this;this.validator=function(e){r.optional&&!G(e)||t(e)},this.optional=!!e}}();function dt(t,e){function r(t){if(!V(t))throw"Expected string."}var n,o,i;return t?(o=r,i=t,n=function(t){o(t),i(t)}):n=r,new pt(n,e)}function yt(){return new pt(function(t){if(!(t instanceof Uint8Array||t instanceof ArrayBuffer||K()&&t instanceof Blob))throw"Expected Blob or File."})}function vt(t){return new pt(lt,t)}function _t(){return new pt(function(t){if(!(function(t){return"number"==typeof t||t instanceof Number}(t)&&t>=0))throw"Expected a number 0 or greater."})}function bt(t,e){return new pt(function(e){if(!(null===e||W(e)&&e instanceof Object))throw"Expected an Object.";null!=t&&t(e)},e)}function mt(t){return new pt(function(t){if(null!==t&&!z(t))throw"Expected a Function."},t)}function gt(){return"undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var wt=function(){function t(t,e){var r=0,n="";X(t)?(this.data_=t,r=t.size,n=t.type):t instanceof ArrayBuffer?(e?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),r=this.data_.length):t instanceof Uint8Array&&(e?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),r=t.length),this.size_=r,this.type_=n}return t.prototype.size=function(){return this.size_},t.prototype.type=function(){return this.type_},t.prototype.slice=function(e,r){if(X(this.data_)){var n=this.data_,o=(a=e,u=r,(i=n).webkitSlice?i.webkitSlice(a,u):i.mozSlice?i.mozSlice(a,u):i.slice?i.slice(a,u):null);return null===o?null:new t(o)}var i,a,u;return new t(new Uint8Array(this.data_.buffer,e,r-e),!0)},t.getBlob=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];if(K()){var n=e.map(function(e){return e instanceof t?e.data_:e});return new t(function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var r=gt();if(void 0!==r){for(var n=new r,o=0;o<t.length;o++)n.append(t[o]);return n.getBlob()}if(K())return new Blob(t);throw Error("This browser doesn't seem to support creating Blobs")}.apply(null,n))}var o=e.map(function(t){return V(t)?R(T.RAW,t).data:t.data_}),i=0;o.forEach(function(t){i+=t.byteLength});var a=new Uint8Array(i),u=0;return o.forEach(function(t){for(var e=0;e<t.length;e++)a[u++]=t[e]}),new t(a,!0)},t.prototype.uploadData=function(){return this.data_},t}();
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(t,e){return-1!==t.indexOf(e)}var St=function(){return function(t,e,r,n){this.url=t,this.method=e,this.handler=r,this.timeout=n,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}();
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(t){if(!t)throw _()}function Ot(t,e){return function(r,n){var o=st(t,n,e);return Tt(null!==o),o}}function At(t){return function(e,r){var n,o,i;return 401===e.getStatus()?n=new d(y.UNAUTHENTICATED,"User is not authenticated, please authenticate using Firebase Authentication and try again."):402===e.getStatus()?(i=t.bucket,n=new d(y.QUOTA_EXCEEDED,"Quota for bucket '"+i+"' exceeded, please view quota on https://firebase.google.com/pricing/.")):403===e.getStatus()?(o=t.path,n=new d(y.UNAUTHORIZED,"User does not have permission to access '"+o+"'.")):n=r,n.setServerResponseProp(r.serverResponseProp()),n}}function Rt(t){var e=At(t);return function(r,n){var o,i=e(r,n);return 404===r.getStatus()&&(o=t.path,i=new d(y.OBJECT_NOT_FOUND,"Object '"+o+"' does not exist.")),i.setServerResponseProp(n.serverResponseProp()),i}}function xt(t,e,r){var n=tt(e.fullServerUrl()),o=t.maxOperationRetryTime(),i=new St(n,"GET",Ot(t,r),o);return i.errorHandler=Rt(e),i}function Nt(t,e,r){var n=tt(e.fullServerUrl()),o=t.maxOperationRetryTime(),i=new St(n,"GET",function(t,e){return function(r,n){var o=st(t,n,e);return Tt(null!==o),ct(o,n)}}(t,r),o);return i.errorHandler=Rt(e),i}function Ct(t,e,r){var n=M(r);return n.fullPath=t.path,n.size=e.size(),n.contentType||(n.contentType=function(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}(null,e)),n}var Pt=function(){return function(t,e,r,n){this.current=t,this.total=e,this.finalized=!!r,this.metadata=n||null}}();function kt(t,e){var r;try{r=t.getResponseHeader("X-Goog-Upload-Status")}catch(t){Tt(!1)}return Tt(Et(e||["active"],r)),r}function Ut(t,e,r,n,o,i,a,u){var s=new Pt(0,0);if(a?(s.current=a.current,s.total=a.total):(s.current=0,s.total=n.size()),n.size()!==s.total)throw new d(y.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.");var c=s.total-s.current,f=c;o>0&&(f=Math.min(f,o));var l=s.current,h=l+f,p={"X-Goog-Upload-Command":f===c?"upload, finalize":"upload","X-Goog-Upload-Offset":s.current},v=n.slice(l,h);if(null===v)throw m();var _=e.maxUploadRetryTime(),b=new St(r,"POST",function(t,r){var o,a=kt(t,["active","final"]),u=s.current+f,c=n.size();return o="final"===a?Ot(e,i)(t,r):null,new Pt(u,c,"final"===a,o)},_);return b.headers=p,b.body=v.uploadData(),b.progressCallback=u||null,b.errorHandler=At(t),b}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var It=function(){return function(t,e,r){if(z(t)||W(e)||W(r))this.next=t,this.error=e||null,this.complete=r||null;else{var n=t;this.next=n.next||null,this.error=n.error||null,this.complete=n.complete||null}}}(),jt=function(){return function(t,e,r,n,o,i){this.bytesTransferred=t,this.totalBytes=e,this.state=r,this.metadata=n,this.task=o,this.ref=i}}();
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Dt(t){return function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];F(!0).then(function(){t.apply(null,e)})}}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Lt=function(){function t(t,e,r,n,o,i){void 0===i&&(i=null);var a=this;this.transferred_=0,this.needToFetchStatus_=!1,this.needToFetchMetadata_=!1,this.observers_=[],this.error_=null,this.uploadUrl_=null,this.request_=null,this.chunkMultiplier_=1,this.resolve_=null,this.reject_=null,this.ref_=t,this.authWrapper_=e,this.location_=r,this.blob_=o,this.metadata_=i,this.mappings_=n,this.resumable_=this.shouldDoResumable_(this.blob_),this.state_=U.RUNNING,this.errorHandler_=function(t){a.request_=null,a.chunkMultiplier_=1,t.codeEquals(y.CANCELED)?(a.needToFetchStatus_=!0,a.completeTransitions_()):(a.error_=t,a.transition_(U.ERROR))},this.metadataErrorHandler_=function(t){a.request_=null,t.codeEquals(y.CANCELED)?a.completeTransitions_():(a.error_=t,a.transition_(U.ERROR))},this.promise_=B(function(t,e){a.resolve_=t,a.reject_=e,a.start_()}),this.promise_.then(null,function(){})}return t.prototype.makeProgressCallback_=function(){var t=this,e=this.transferred_;return function(r,n){t.updateProgress_(e+r)}},t.prototype.shouldDoResumable_=function(t){return t.size()>262144},t.prototype.start_=function(){this.state_===U.RUNNING&&null===this.request_&&(this.resumable_?null===this.uploadUrl_?this.createResumable_():this.needToFetchStatus_?this.fetchStatus_():this.needToFetchMetadata_?this.fetchMetadata_():this.continueUpload_():this.oneShotUpload_())},t.prototype.resolveToken_=function(t){var e=this;this.authWrapper_.getAuthToken().then(function(r){switch(e.state_){case U.RUNNING:t(r);break;case U.CANCELING:e.transition_(U.CANCELED);break;case U.PAUSING:e.transition_(U.PAUSED)}})},t.prototype.createResumable_=function(){var t=this;this.resolveToken_(function(e){var r=function(t,e,r,n,o){var i=e.bucketOnlyServerUrl(),a=Ct(e,n,o),u={name:a.fullPath},s=et(i),c={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":n.size(),"X-Goog-Upload-Header-Content-Type":a.contentType,"Content-Type":"application/json; charset=utf-8"},f=ft(a,r),l=t.maxUploadRetryTime(),h=new St(s,"POST",function(t,e){var r;kt(t);try{r=t.getResponseHeader("X-Goog-Upload-URL")}catch(t){Tt(!1)}return Tt(V(r)),r},l);return h.urlParams=u,h.headers=c,h.body=f,h.errorHandler=At(e),h}(t.authWrapper_,t.location_,t.mappings_,t.blob_,t.metadata_),n=t.authWrapper_.makeRequest(r,e);t.request_=n,n.getPromise().then(function(e){t.request_=null,t.uploadUrl_=e,t.needToFetchStatus_=!1,t.completeTransitions_()},t.errorHandler_)})},t.prototype.fetchStatus_=function(){var t=this,e=this.uploadUrl_;this.resolveToken_(function(r){var n=function(t,e,r,n){var o=t.maxUploadRetryTime(),i=new St(r,"POST",function(t,e){var r,o=kt(t,["active","final"]);try{r=t.getResponseHeader("X-Goog-Upload-Size-Received")}catch(t){Tt(!1)}var i=parseInt(r,10);return Tt(!isNaN(i)),new Pt(i,n.size(),"final"===o)},o);return i.headers={"X-Goog-Upload-Command":"query"},i.errorHandler=At(e),i}(t.authWrapper_,t.location_,e,t.blob_),o=t.authWrapper_.makeRequest(n,r);t.request_=o,o.getPromise().then(function(e){e=e,t.request_=null,t.updateProgress_(e.current),t.needToFetchStatus_=!1,e.finalized&&(t.needToFetchMetadata_=!0),t.completeTransitions_()},t.errorHandler_)})},t.prototype.continueUpload_=function(){var t=this,e=262144*this.chunkMultiplier_,r=new Pt(this.transferred_,this.blob_.size()),n=this.uploadUrl_;this.resolveToken_(function(o){var i;try{i=Ut(t.location_,t.authWrapper_,n,t.blob_,e,t.mappings_,r,t.makeProgressCallback_())}catch(e){return t.error_=e,void t.transition_(U.ERROR)}var a=t.authWrapper_.makeRequest(i,o);t.request_=a,a.getPromise().then(function(e){t.increaseMultiplier_(),t.request_=null,t.updateProgress_(e.current),e.finalized?(t.metadata_=e.metadata,t.transition_(U.SUCCESS)):t.completeTransitions_()},t.errorHandler_)})},t.prototype.increaseMultiplier_=function(){262144*this.chunkMultiplier_<33554432&&(this.chunkMultiplier_*=2)},t.prototype.fetchMetadata_=function(){var t=this;this.resolveToken_(function(e){var r=xt(t.authWrapper_,t.location_,t.mappings_),n=t.authWrapper_.makeRequest(r,e);t.request_=n,n.getPromise().then(function(e){t.request_=null,t.metadata_=e,t.transition_(U.SUCCESS)},t.metadataErrorHandler_)})},t.prototype.oneShotUpload_=function(){var t=this;this.resolveToken_(function(e){var r=function(t,e,r,n,o){var i=e.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"},u=function(){for(var t="",e=0;e<2;e++)t+=Math.random().toString().slice(2);return t}();a["Content-Type"]="multipart/related; boundary="+u;var s=Ct(e,n,o),c="--"+u+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+ft(s,r)+"\r\n--"+u+"\r\nContent-Type: "+s.contentType+"\r\n\r\n",f="\r\n--"+u+"--",l=wt.getBlob(c,n,f);if(null===l)throw m();var h={name:s.fullPath},p=et(i),d=t.maxUploadRetryTime(),y=new St(p,"POST",Ot(t,r),d);return y.urlParams=h,y.headers=a,y.body=l.uploadData(),y.errorHandler=At(e),y}(t.authWrapper_,t.location_,t.mappings_,t.blob_,t.metadata_),n=t.authWrapper_.makeRequest(r,e);t.request_=n,n.getPromise().then(function(e){t.request_=null,t.metadata_=e,t.updateProgress_(t.blob_.size()),t.transition_(U.SUCCESS)},t.errorHandler_)})},t.prototype.updateProgress_=function(t){var e=this.transferred_;this.transferred_=t,this.transferred_!==e&&this.notifyObservers_()},t.prototype.transition_=function(t){if(this.state_!==t)switch(t){case U.CANCELING:case U.PAUSING:this.state_=t,null!==this.request_&&this.request_.cancel();break;case U.RUNNING:var e=this.state_===U.PAUSED;this.state_=t,e&&(this.notifyObservers_(),this.start_());break;case U.PAUSED:this.state_=t,this.notifyObservers_();break;case U.CANCELED:this.error_=b(),this.state_=t,this.notifyObservers_();break;case U.ERROR:case U.SUCCESS:this.state_=t,this.notifyObservers_()}},t.prototype.completeTransitions_=function(){switch(this.state_){case U.PAUSING:this.transition_(U.PAUSED);break;case U.CANCELING:this.transition_(U.CANCELED);break;case U.RUNNING:this.start_()}},Object.defineProperty(t.prototype,"snapshot",{get:function(){var t=j(this.state_);return new jt(this.transferred_,this.blob_.size(),t,this.metadata_,this,this.ref_)},enumerable:!0,configurable:!0}),t.prototype.on=function(t,e,r,n){void 0===e&&(e=void 0),void 0===r&&(r=void 0),void 0===n&&(n=void 0);var o="Expected a function or an Object with one of `next`, `error`, `complete` properties.",i=mt(!0).validator,a=bt(null,!0).validator;function u(t){try{return void i(t)}catch(t){}try{if(a(t),!(G(t.next)||G(t.error)||G(t.complete)))throw"";return}catch(t){throw o}}ht("on",[dt(function(e){if(t!==k.STATE_CHANGED)throw"Expected one of the event types: ["+k.STATE_CHANGED+"]."}),bt(u,!0),mt(!0),mt(!0)],arguments);var s=this;function c(t){return function(e,r,o){null!==t&&ht("on",t,arguments);var i=new It(e,r,n);return s.addObserver_(i),function(){s.removeObserver_(i)}}}var f=[bt(function(t){if(null===t)throw o;u(t)}),mt(!0),mt(!0)];return!(G(e)||G(r)||G(n))?c(f):c(null)(e,r,n)},t.prototype.then=function(t,e){return this.promise_.then(t,e)},t.prototype.catch=function(t){return this.then(null,t)},t.prototype.addObserver_=function(t){this.observers_.push(t),this.notifyObserver_(t)},t.prototype.removeObserver_=function(t){var e,r,n;e=this.observers_,r=t,-1!==(n=e.indexOf(r))&&e.splice(n,1)},t.prototype.notifyObservers_=function(){var t,e=this;this.finishPromise_(),(t=this.observers_,Array.prototype.slice.call(t)).forEach(function(t){e.notifyObserver_(t)})},t.prototype.finishPromise_=function(){if(null!==this.resolve_){var t=!0;switch(j(this.state_)){case I.SUCCESS:Dt(this.resolve_.bind(null,this.snapshot))();break;case I.CANCELED:case I.ERROR:Dt(this.reject_.bind(null,this.error_))();break;default:t=!1}t&&(this.resolve_=null,this.reject_=null)}},t.prototype.notifyObserver_=function(t){switch(j(this.state_)){case I.RUNNING:case I.PAUSED:null!==t.next&&Dt(t.next.bind(t,this.snapshot))();break;case I.SUCCESS:null!==t.complete&&Dt(t.complete.bind(t))();break;case I.CANCELED:case I.ERROR:null!==t.error&&Dt(t.error.bind(t,this.error_))();break;default:null!==t.error&&Dt(t.error.bind(t,this.error_))()}},t.prototype.resume=function(){ht("resume",[],arguments);var t=this.state_===U.PAUSED||this.state_===U.PAUSING;return t&&this.transition_(U.RUNNING),t},t.prototype.pause=function(){ht("pause",[],arguments);var t=this.state_===U.RUNNING;return t&&this.transition_(U.PAUSING),t},t.prototype.cancel=function(){ht("cancel",[],arguments);var t=this.state_===U.RUNNING||this.state_===U.PAUSING;return t&&this.transition_(U.CANCELING),t},t}(),Mt=function(){function t(t,e){this.authWrapper=t,this.location=e instanceof Q?e:Q.makeFromUrl(e)}return t.prototype.toString=function(){return ht("toString",[],arguments),"gs://"+this.location.bucket+"/"+this.location.path},t.prototype.newRef=function(e,r){return new t(e,r)},t.prototype.mappings=function(){return at()},t.prototype.child=function(t){ht("child",[dt()],arguments);var e=function(t,e){var r=e.split("/").filter(function(t){return t.length>0}).join("/");return 0===t.length?r:t+"/"+r}(this.location.path,t),r=new Q(this.location.bucket,e);return this.newRef(this.authWrapper,r)},Object.defineProperty(t.prototype,"parent",{get:function(){var t=function(t){if(0==t.length)return null;var e=t.lastIndexOf("/");return-1===e?"":t.slice(0,e)}(this.location.path);if(null===t)return null;var e=new Q(this.location.bucket,t);return this.newRef(this.authWrapper,e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"root",{get:function(){var t=new Q(this.location.bucket,"");return this.newRef(this.authWrapper,t)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"bucket",{get:function(){return this.location.bucket},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"fullPath",{get:function(){return this.location.path},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"name",{get:function(){return Y(this.location.path)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"storage",{get:function(){return this.authWrapper.service()},enumerable:!0,configurable:!0}),t.prototype.put=function(t,e){return void 0===e&&(e=null),ht("put",[yt(),vt(!0)],arguments),this.throwIfRoot_("put"),new Lt(this,this.authWrapper,this.location,this.mappings(),new wt(t),e)},t.prototype.putString=function(t,e,r){void 0===e&&(e=T.RAW),ht("putString",[dt(),dt(O,!0),vt(!0)],arguments),this.throwIfRoot_("putString");var n=R(e,t),o=M(r);return!W(o.contentType)&&W(n.contentType)&&(o.contentType=n.contentType),new Lt(this,this.authWrapper,this.location,this.mappings(),new wt(n.data,!0),o)},t.prototype.delete=function(){ht("delete",[],arguments),this.throwIfRoot_("delete");var t=this;return this.authWrapper.getAuthToken().then(function(e){var r=function(t,e){var r=tt(e.fullServerUrl()),n=t.maxOperationRetryTime(),o=new St(r,"DELETE",function(t,e){},n);return o.successCodes=[200,204],o.errorHandler=Rt(e),o}(t.authWrapper,t.location);return t.authWrapper.makeRequest(r,e).getPromise()})},t.prototype.getMetadata=function(){ht("getMetadata",[],arguments),this.throwIfRoot_("getMetadata");var t=this;return this.authWrapper.getAuthToken().then(function(e){var r=xt(t.authWrapper,t.location,t.mappings());return t.authWrapper.makeRequest(r,e).getPromise()})},t.prototype.updateMetadata=function(t){ht("updateMetadata",[vt()],arguments),this.throwIfRoot_("updateMetadata");var e=this;return this.authWrapper.getAuthToken().then(function(r){var n=function(t,e,r,n){var o=tt(e.fullServerUrl()),i=ft(r,n),a=t.maxOperationRetryTime(),u=new St(o,"PATCH",Ot(t,n),a);return u.headers={"Content-Type":"application/json; charset=utf-8"},u.body=i,u.errorHandler=Rt(e),u}(e.authWrapper,e.location,t,e.mappings());return e.authWrapper.makeRequest(n,r).getPromise()})},t.prototype.getDownloadURL=function(){ht("getDownloadURL",[],arguments),this.throwIfRoot_("getDownloadURL");var t=this;return this.authWrapper.getAuthToken().then(function(e){var r=Nt(t.authWrapper,t.location,t.mappings());return t.authWrapper.makeRequest(r,e).getPromise().then(function(t){if(null===t)throw new d(y.NO_DOWNLOAD_URL,"The given file does not have any download URLs.");return t})})},t.prototype.throwIfRoot_=function(t){if(""===this.location.path)throw function(t){return new d(y.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}(t)},t}(),Bt=function(){function t(t){this.promise_=function(t){return Promise.reject(t)}(t)}return t.prototype.getPromise=function(){return this.promise_},t.prototype.cancel=function(t){void 0===t&&(t=!1)},t}(),Ft=function(){function t(){this.map_={},this.id_=p}return t.prototype.addRequest=function(t){var e=this.id_;this.id_++,this.map_[e]=t;var r=this;function n(){delete r.map_[e]}t.getPromise().then(n,n)},t.prototype.clear=function(){L(this.map_,function(t,e){e&&e.cancel(!0)}),this.map_={}},t}(),Wt=function(){function t(e,r,n,o,i){if(this.bucket_=null,this.deleted_=!1,this.app_=e,null!==this.app_){var a=this.app_.options;W(a)&&(this.bucket_=t.extractBucket_(a))}this.storageRefMaker_=r,this.requestMaker_=n,this.pool_=i,this.service_=o,this.maxOperationRetryTime_=l,this.maxUploadRetryTime_=h,this.requestMap_=new Ft}return t.extractBucket_=function(t){var e=t.storageBucket||null;return null==e?null:Q.makeFromBucketSpec(e).bucket},t.prototype.getAuthToken=function(){return null!==this.app_&&W(this.app_.INTERNAL)&&W(this.app_.INTERNAL.getToken)?this.app_.INTERNAL.getToken().then(function(t){return null!==t?t.accessToken:null},function(t){return null}):F(null)},t.prototype.bucket=function(){if(this.deleted_)throw w();return this.bucket_},t.prototype.service=function(){return this.service_},t.prototype.makeStorageReference=function(t){return this.storageRefMaker_(this,t)},t.prototype.makeRequest=function(t,e){if(this.deleted_)return new Bt(w());var r=this.requestMaker_(t,e,this.pool_);return this.requestMap_.addRequest(r),r},t.prototype.deleteApp=function(){this.deleted_=!0,this.app_=null,this.requestMap_.clear()},t.prototype.maxUploadRetryTime=function(){return this.maxUploadRetryTime_},t.prototype.setMaxUploadRetryTime=function(t){this.maxUploadRetryTime_=t},t.prototype.maxOperationRetryTime=function(){return this.maxOperationRetryTime_},t.prototype.setMaxOperationRetryTime=function(t){this.maxOperationRetryTime_=t},t}();
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Gt=function(){function t(t,e,r,n,o,i,a,u,s,c,f){this.pendingXhr_=null,this.backoffId_=null,this.resolve_=null,this.reject_=null,this.canceled_=!1,this.appDelete_=!1,this.url_=t,this.method_=e,this.headers_=r,this.body_=n,this.successCodes_=o.slice(),this.additionalRetryCodes_=i.slice(),this.callback_=a,this.errorCallback_=u,this.progressCallback_=c,this.timeout_=s,this.pool_=f;var l=this;this.promise_=B(function(t,e){l.resolve_=t,l.reject_=e,l.start_()})}return t.prototype.start_=function(){var t=this;function e(e,r){var n,o=t.resolve_,i=t.reject_,a=r.xhr;if(r.wasSuccessCode)try{var u=t.callback_(a,a.getResponseText());G(u)?o(u):o()}catch(t){i(t)}else null!==a?((n=_()).setServerResponseProp(a.getResponseText()),t.errorCallback_?i(t.errorCallback_(a,n)):i(n)):r.canceled?i(n=t.appDelete_?w():b()):i(n=new d(y.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again."))}this.canceled_?e(0,new zt(!1,null,!0)):this.backoffId_=
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(t,e,r){var n=1,o=null,i=!1,a=0;function u(){return 2===a}var s=!1;function c(){s||(s=!0,e.apply(null,arguments))}function f(e){o=setTimeout(function(){o=null,t(l,u())},e)}function l(t){for(var e,r=[],o=1;o<arguments.length;o++)r[o-1]=arguments[o];s||(t?c.apply(null,arguments):u()||i?c.apply(null,arguments):(n<64&&(n*=2),1===a?(a=2,e=0):e=1e3*(n+Math.random()),f(e)))}var h=!1;function p(t){h||(h=!0,s||(null!==o?(t||(a=2),clearTimeout(o),f(0)):t||(a=1)))}return f(0),setTimeout(function(){i=!0,p(!0)},r),p}(function(e,r){if(r)e(!1,new zt(!1,null,!0));else{var n=t.pool_.createXhrIo();t.pendingXhr_=n,null!==t.progressCallback_&&n.addUploadProgressListener(o),n.send(t.url_,t.method_,t.body_,t.headers_).then(function(r){null!==t.progressCallback_&&r.removeUploadProgressListener(o),t.pendingXhr_=null;var n=(r=r).getErrorCode()===P.NO_ERROR,i=r.getStatus();if(n&&!t.isRetryStatusCode_(i)){var a=Et(t.successCodes_,i);e(!0,new zt(a,r))}else{var u=r.getErrorCode()===P.ABORT;e(!1,new zt(!1,null,u))}})}function o(e){var r=e.loaded,n=e.lengthComputable?e.total:-1;null!==t.progressCallback_&&t.progressCallback_(r,n)}},e,this.timeout_)},t.prototype.getPromise=function(){return this.promise_},t.prototype.cancel=function(t){this.canceled_=!0,this.appDelete_=t||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingXhr_&&this.pendingXhr_.abort()},t.prototype.isRetryStatusCode_=function(t){var e=t>=500&&t<600,r=Et([408,429],t),n=Et(this.additionalRetryCodes_,t);return e||r||n},t}(),zt=function(){return function(t,e,r){this.wasSuccessCode=t,this.xhr=e,this.canceled=!!r}}();function qt(t,e,r){var n=rt(t.urlParams),o=t.url+n,i=M(t.headers);return function(t,e){null!==e&&e.length>0&&(t.Authorization="Firebase "+e)}(i,e),function(t){var e=void 0!==a.a?a.a.SDK_VERSION:"AppManager";t["X-Firebase-Storage-Version"]="webjs/"+e}(i),new Gt(o,t.method,i,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r)}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ht,Vt,Xt=function(){function t(t,e,r){if(this.bucket_=null,this.authWrapper_=new Wt(t,function(t,e){return new Mt(t,e)},qt,this,e),this.app_=t,null!=r)this.bucket_=Q.makeFromBucketSpec(r);else{var n=this.authWrapper_.bucket();null!=n&&(this.bucket_=new Q(n,""))}this.internals_=new Kt(this)}return t.prototype.ref=function(t){if(ht("ref",[dt(function(t){if(/^[A-Za-z]+:\/\//.test(t))throw"Expected child path but got a URL, use refFromURL instead."},!0)],arguments),null==this.bucket_)throw new Error("No Storage Bucket defined in Firebase Options.");var e=new Mt(this.authWrapper_,this.bucket_);return null!=t?e.child(t):e},t.prototype.refFromURL=function(t){return ht("refFromURL",[dt(function(t){if(!/^[A-Za-z]+:\/\//.test(t))throw"Expected full URL but got a child path, use ref instead.";try{Q.makeFromUrl(t)}catch(t){throw"Expected valid full URL but got an invalid one."}},!1)],arguments),new Mt(this.authWrapper_,t)},Object.defineProperty(t.prototype,"maxUploadRetryTime",{get:function(){return this.authWrapper_.maxUploadRetryTime()},enumerable:!0,configurable:!0}),t.prototype.setMaxUploadRetryTime=function(t){ht("setMaxUploadRetryTime",[_t()],arguments),this.authWrapper_.setMaxUploadRetryTime(t)},Object.defineProperty(t.prototype,"maxOperationRetryTime",{get:function(){return this.authWrapper_.maxOperationRetryTime()},enumerable:!0,configurable:!0}),t.prototype.setMaxOperationRetryTime=function(t){ht("setMaxOperationRetryTime",[_t()],arguments),this.authWrapper_.setMaxOperationRetryTime(t)},Object.defineProperty(t.prototype,"app",{get:function(){return this.app_},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"INTERNAL",{get:function(){return this.internals_},enumerable:!0,configurable:!0}),t}(),Kt=function(){function t(t){this.service_=t}return t.prototype.delete=function(){return this.service_.authWrapper_.deleteApp(),F(void 0)},t}(),Jt="storage";function $t(t,e,r){return new Xt(t,new $,r)}Ht=a.a,Vt={TaskState:I,TaskEvent:k,StringFormat:T,Storage:Xt,Reference:Mt},Ht.INTERNAL.registerService(Jt,$t,Vt,void 0,!0);var Zt;(()=>o.a.initializeApp({apiKey:"AIzaSyBDrSwWXn2AklmSJtlGTJ37jpUXorwyv1c",authDomain:"gitedvinhub.firebaseapp.com",databaseURL:"https://gitedvinhub.firebaseio.com",projectId:"gitedvinhub",storageBucket:"gitedvinhub.appspot.com",messagingSenderId:"821443809987"}))().storage().ref("path"),Zt="Hej världen!",document.getElementById("main-header").innerText=Zt}]);