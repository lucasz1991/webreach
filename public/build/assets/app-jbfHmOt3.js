const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/pagebuilder-7CA-VarU.js","assets/pagebuilder-BNkG6GyW.css"])))=>i.map(i=>d[i]);
const ld="modulepreload",nd=function(r){return"/build/"+r},ts={},sd=function(e,t,i){let l=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),a=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));l=Promise.allSettled(t.map(o=>{if(o=nd(o),o in ts)return;ts[o]=!0;const c=o.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${d}`))return;const h=document.createElement("link");if(h.rel=c?"stylesheet":ld,c||(h.as="script"),h.crossOrigin="",h.href=o,a&&h.setAttribute("nonce",a),document.head.appendChild(h),c)return new Promise((f,u)=>{h.addEventListener("load",f),h.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${o}`)))})}))}function n(s){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=s,window.dispatchEvent(a),!a.defaultPrevented)throw s}return l.then(s=>{for(const a of s||[])a.status==="rejected"&&n(a.reason);return e().catch(n)})};function Ga(r,e){return function(){return r.apply(e,arguments)}}const{toString:ad}=Object.prototype,{getPrototypeOf:Tn}=Object,{iterator:tl,toStringTag:qa}=Symbol,rl=(r=>e=>{const t=ad.call(e);return r[t]||(r[t]=t.slice(8,-1).toLowerCase())})(Object.create(null)),Re=r=>(r=r.toLowerCase(),e=>rl(e)===r),il=r=>e=>typeof e===r,{isArray:ir}=Array,er=il("undefined");function Ir(r){return r!==null&&!er(r)&&r.constructor!==null&&!er(r.constructor)&&ve(r.constructor.isBuffer)&&r.constructor.isBuffer(r)}const Wa=Re("ArrayBuffer");function od(r){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(r):e=r&&r.buffer&&Wa(r.buffer),e}const cd=il("string"),ve=il("function"),Ua=il("number"),Rr=r=>r!==null&&typeof r=="object",dd=r=>r===!0||r===!1,pi=r=>{if(rl(r)!=="object")return!1;const e=Tn(r);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(qa in r)&&!(tl in r)},hd=r=>{if(!Rr(r)||Ir(r))return!1;try{return Object.keys(r).length===0&&Object.getPrototypeOf(r)===Object.prototype}catch{return!1}},fd=Re("Date"),ud=Re("File"),pd=r=>!!(r&&typeof r.uri<"u"),md=r=>r&&typeof r.getParts<"u",gd=Re("Blob"),xd=Re("FileList"),vd=r=>Rr(r)&&ve(r.pipe);function yd(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const rs=yd(),is=typeof rs.FormData<"u"?rs.FormData:void 0,wd=r=>{let e;return r&&(is&&r instanceof is||ve(r.append)&&((e=rl(r))==="formdata"||e==="object"&&ve(r.toString)&&r.toString()==="[object FormData]"))},bd=Re("URLSearchParams"),[kd,Sd,Md,Cd]=["ReadableStream","Request","Response","Headers"].map(Re),Td=r=>r.trim?r.trim():r.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Dr(r,e,{allOwnKeys:t=!1}={}){if(r===null||typeof r>"u")return;let i,l;if(typeof r!="object"&&(r=[r]),ir(r))for(i=0,l=r.length;i<l;i++)e.call(null,r[i],i,r);else{if(Ir(r))return;const n=t?Object.getOwnPropertyNames(r):Object.keys(r),s=n.length;let a;for(i=0;i<s;i++)a=n[i],e.call(null,r[a],a,r)}}function Ka(r,e){if(Ir(r))return null;e=e.toLowerCase();const t=Object.keys(r);let i=t.length,l;for(;i-- >0;)if(l=t[i],e===l.toLowerCase())return l;return null}const vt=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Ja=r=>!er(r)&&r!==vt;function Yl(){const{caseless:r,skipUndefined:e}=Ja(this)&&this||{},t={},i=(l,n)=>{if(n==="__proto__"||n==="constructor"||n==="prototype")return;const s=r&&Ka(t,n)||n;pi(t[s])&&pi(l)?t[s]=Yl(t[s],l):pi(l)?t[s]=Yl({},l):ir(l)?t[s]=l.slice():(!e||!er(l))&&(t[s]=l)};for(let l=0,n=arguments.length;l<n;l++)arguments[l]&&Dr(arguments[l],i);return t}const Ed=(r,e,t,{allOwnKeys:i}={})=>(Dr(e,(l,n)=>{t&&ve(l)?Object.defineProperty(r,n,{value:Ga(l,t),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(r,n,{value:l,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:i}),r),zd=r=>(r.charCodeAt(0)===65279&&(r=r.slice(1)),r),Ad=(r,e,t,i)=>{r.prototype=Object.create(e.prototype,i),Object.defineProperty(r.prototype,"constructor",{value:r,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(r,"super",{value:e.prototype}),t&&Object.assign(r.prototype,t)},Od=(r,e,t,i)=>{let l,n,s;const a={};if(e=e||{},r==null)return e;do{for(l=Object.getOwnPropertyNames(r),n=l.length;n-- >0;)s=l[n],(!i||i(s,r,e))&&!a[s]&&(e[s]=r[s],a[s]=!0);r=t!==!1&&Tn(r)}while(r&&(!t||t(r,e))&&r!==Object.prototype);return e},Ld=(r,e,t)=>{r=String(r),(t===void 0||t>r.length)&&(t=r.length),t-=e.length;const i=r.indexOf(e,t);return i!==-1&&i===t},jd=r=>{if(!r)return null;if(ir(r))return r;let e=r.length;if(!Ua(e))return null;const t=new Array(e);for(;e-- >0;)t[e]=r[e];return t},Bd=(r=>e=>r&&e instanceof r)(typeof Uint8Array<"u"&&Tn(Uint8Array)),Pd=(r,e)=>{const i=(r&&r[tl]).call(r);let l;for(;(l=i.next())&&!l.done;){const n=l.value;e.call(r,n[0],n[1])}},Id=(r,e)=>{let t;const i=[];for(;(t=r.exec(e))!==null;)i.push(t);return i},Rd=Re("HTMLFormElement"),Dd=r=>r.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(t,i,l){return i.toUpperCase()+l}),ls=(({hasOwnProperty:r})=>(e,t)=>r.call(e,t))(Object.prototype),Nd=Re("RegExp"),Ya=(r,e)=>{const t=Object.getOwnPropertyDescriptors(r),i={};Dr(t,(l,n)=>{let s;(s=e(l,n,r))!==!1&&(i[n]=s||l)}),Object.defineProperties(r,i)},Fd=r=>{Ya(r,(e,t)=>{if(ve(r)&&["arguments","caller","callee"].indexOf(t)!==-1)return!1;const i=r[t];if(ve(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+t+"'")})}})},Hd=(r,e)=>{const t={},i=l=>{l.forEach(n=>{t[n]=!0})};return ir(r)?i(r):i(String(r).split(e)),t},_d=()=>{},$d=(r,e)=>r!=null&&Number.isFinite(r=+r)?r:e;function Vd(r){return!!(r&&ve(r.append)&&r[qa]==="FormData"&&r[tl])}const Gd=r=>{const e=new Array(10),t=(i,l)=>{if(Rr(i)){if(e.indexOf(i)>=0)return;if(Ir(i))return i;if(!("toJSON"in i)){e[l]=i;const n=ir(i)?[]:{};return Dr(i,(s,a)=>{const o=t(s,l+1);!er(o)&&(n[a]=o)}),e[l]=void 0,n}}return i};return t(r,0)},qd=Re("AsyncFunction"),Wd=r=>r&&(Rr(r)||ve(r))&&ve(r.then)&&ve(r.catch),Xa=((r,e)=>r?setImmediate:e?((t,i)=>(vt.addEventListener("message",({source:l,data:n})=>{l===vt&&n===t&&i.length&&i.shift()()},!1),l=>{i.push(l),vt.postMessage(t,"*")}))(`axios@${Math.random()}`,[]):t=>setTimeout(t))(typeof setImmediate=="function",ve(vt.postMessage)),Ud=typeof queueMicrotask<"u"?queueMicrotask.bind(vt):typeof process<"u"&&process.nextTick||Xa,Kd=r=>r!=null&&ve(r[tl]),v={isArray:ir,isArrayBuffer:Wa,isBuffer:Ir,isFormData:wd,isArrayBufferView:od,isString:cd,isNumber:Ua,isBoolean:dd,isObject:Rr,isPlainObject:pi,isEmptyObject:hd,isReadableStream:kd,isRequest:Sd,isResponse:Md,isHeaders:Cd,isUndefined:er,isDate:fd,isFile:ud,isReactNativeBlob:pd,isReactNative:md,isBlob:gd,isRegExp:Nd,isFunction:ve,isStream:vd,isURLSearchParams:bd,isTypedArray:Bd,isFileList:xd,forEach:Dr,merge:Yl,extend:Ed,trim:Td,stripBOM:zd,inherits:Ad,toFlatObject:Od,kindOf:rl,kindOfTest:Re,endsWith:Ld,toArray:jd,forEachEntry:Pd,matchAll:Id,isHTMLForm:Rd,hasOwnProperty:ls,hasOwnProp:ls,reduceDescriptors:Ya,freezeMethods:Fd,toObjectSet:Hd,toCamelCase:Dd,noop:_d,toFiniteNumber:$d,findKey:Ka,global:vt,isContextDefined:Ja,isSpecCompliantForm:Vd,toJSONObject:Gd,isAsyncFn:qd,isThenable:Wd,setImmediate:Xa,asap:Ud,isIterable:Kd};let D=class Za extends Error{static from(e,t,i,l,n,s){const a=new Za(e.message,t||e.code,i,l,n);return a.cause=e,a.name=e.name,e.status!=null&&a.status==null&&(a.status=e.status),s&&Object.assign(a,s),a}constructor(e,t,i,l,n){super(e),Object.defineProperty(this,"message",{value:e,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,t&&(this.code=t),i&&(this.config=i),l&&(this.request=l),n&&(this.response=n,this.status=n.status)}toJSON(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:v.toJSONObject(this.config),code:this.code,status:this.status}}};D.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";D.ERR_BAD_OPTION="ERR_BAD_OPTION";D.ECONNABORTED="ECONNABORTED";D.ETIMEDOUT="ETIMEDOUT";D.ERR_NETWORK="ERR_NETWORK";D.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";D.ERR_DEPRECATED="ERR_DEPRECATED";D.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";D.ERR_BAD_REQUEST="ERR_BAD_REQUEST";D.ERR_CANCELED="ERR_CANCELED";D.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";D.ERR_INVALID_URL="ERR_INVALID_URL";const Jd=null;function Xl(r){return v.isPlainObject(r)||v.isArray(r)}function Qa(r){return v.endsWith(r,"[]")?r.slice(0,-2):r}function fl(r,e,t){return r?r.concat(e).map(function(l,n){return l=Qa(l),!t&&n?"["+l+"]":l}).join(t?".":""):e}function Yd(r){return v.isArray(r)&&!r.some(Xl)}const Xd=v.toFlatObject(v,{},null,function(e){return/^is[A-Z]/.test(e)});function ll(r,e,t){if(!v.isObject(r))throw new TypeError("target must be an object");e=e||new FormData,t=v.toFlatObject(t,{metaTokens:!0,dots:!1,indexes:!1},!1,function(m,x){return!v.isUndefined(x[m])});const i=t.metaTokens,l=t.visitor||d,n=t.dots,s=t.indexes,o=(t.Blob||typeof Blob<"u"&&Blob)&&v.isSpecCompliantForm(e);if(!v.isFunction(l))throw new TypeError("visitor must be a function");function c(p){if(p===null)return"";if(v.isDate(p))return p.toISOString();if(v.isBoolean(p))return p.toString();if(!o&&v.isBlob(p))throw new D("Blob is not supported. Use a Buffer instead.");return v.isArrayBuffer(p)||v.isTypedArray(p)?o&&typeof Blob=="function"?new Blob([p]):Buffer.from(p):p}function d(p,m,x){let y=p;if(v.isReactNative(e)&&v.isReactNativeBlob(p))return e.append(fl(x,m,n),c(p)),!1;if(p&&!x&&typeof p=="object"){if(v.endsWith(m,"{}"))m=i?m:m.slice(0,-2),p=JSON.stringify(p);else if(v.isArray(p)&&Yd(p)||(v.isFileList(p)||v.endsWith(m,"[]"))&&(y=v.toArray(p)))return m=Qa(m),y.forEach(function(g,b){!(v.isUndefined(g)||g===null)&&e.append(s===!0?fl([m],b,n):s===null?m:m+"[]",c(g))}),!1}return Xl(p)?!0:(e.append(fl(x,m,n),c(p)),!1)}const h=[],f=Object.assign(Xd,{defaultVisitor:d,convertValue:c,isVisitable:Xl});function u(p,m){if(!v.isUndefined(p)){if(h.indexOf(p)!==-1)throw Error("Circular reference detected in "+m.join("."));h.push(p),v.forEach(p,function(y,k){(!(v.isUndefined(y)||y===null)&&l.call(e,y,v.isString(k)?k.trim():k,m,f))===!0&&u(y,m?m.concat(k):[k])}),h.pop()}}if(!v.isObject(r))throw new TypeError("data must be an object");return u(r),e}function ns(r){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(r).replace(/[!'()~]|%20|%00/g,function(i){return e[i]})}function En(r,e){this._pairs=[],r&&ll(r,this,e)}const eo=En.prototype;eo.append=function(e,t){this._pairs.push([e,t])};eo.toString=function(e){const t=e?function(i){return e.call(this,i,ns)}:ns;return this._pairs.map(function(l){return t(l[0])+"="+t(l[1])},"").join("&")};function Zd(r){return encodeURIComponent(r).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function to(r,e,t){if(!e)return r;const i=t&&t.encode||Zd,l=v.isFunction(t)?{serialize:t}:t,n=l&&l.serialize;let s;if(n?s=n(e,l):s=v.isURLSearchParams(e)?e.toString():new En(e,l).toString(i),s){const a=r.indexOf("#");a!==-1&&(r=r.slice(0,a)),r+=(r.indexOf("?")===-1?"?":"&")+s}return r}class ss{constructor(){this.handlers=[]}use(e,t,i){return this.handlers.push({fulfilled:e,rejected:t,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){v.forEach(this.handlers,function(i){i!==null&&e(i)})}}const zn={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0},Qd=typeof URLSearchParams<"u"?URLSearchParams:En,eh=typeof FormData<"u"?FormData:null,th=typeof Blob<"u"?Blob:null,rh={isBrowser:!0,classes:{URLSearchParams:Qd,FormData:eh,Blob:th},protocols:["http","https","file","blob","url","data"]},An=typeof window<"u"&&typeof document<"u",Zl=typeof navigator=="object"&&navigator||void 0,ih=An&&(!Zl||["ReactNative","NativeScript","NS"].indexOf(Zl.product)<0),lh=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",nh=An&&window.location.href||"http://localhost",sh=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:An,hasStandardBrowserEnv:ih,hasStandardBrowserWebWorkerEnv:lh,navigator:Zl,origin:nh},Symbol.toStringTag,{value:"Module"})),he={...sh,...rh};function ah(r,e){return ll(r,new he.classes.URLSearchParams,{visitor:function(t,i,l,n){return he.isNode&&v.isBuffer(t)?(this.append(i,t.toString("base64")),!1):n.defaultVisitor.apply(this,arguments)},...e})}function oh(r){return v.matchAll(/\w+|\[(\w*)]/g,r).map(e=>e[0]==="[]"?"":e[1]||e[0])}function ch(r){const e={},t=Object.keys(r);let i;const l=t.length;let n;for(i=0;i<l;i++)n=t[i],e[n]=r[n];return e}function ro(r){function e(t,i,l,n){let s=t[n++];if(s==="__proto__")return!0;const a=Number.isFinite(+s),o=n>=t.length;return s=!s&&v.isArray(l)?l.length:s,o?(v.hasOwnProp(l,s)?l[s]=[l[s],i]:l[s]=i,!a):((!l[s]||!v.isObject(l[s]))&&(l[s]=[]),e(t,i,l[s],n)&&v.isArray(l[s])&&(l[s]=ch(l[s])),!a)}if(v.isFormData(r)&&v.isFunction(r.entries)){const t={};return v.forEachEntry(r,(i,l)=>{e(oh(i),l,t,0)}),t}return null}function dh(r,e,t){if(v.isString(r))try{return(e||JSON.parse)(r),v.trim(r)}catch(i){if(i.name!=="SyntaxError")throw i}return(t||JSON.stringify)(r)}const Nr={transitional:zn,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const i=t.getContentType()||"",l=i.indexOf("application/json")>-1,n=v.isObject(e);if(n&&v.isHTMLForm(e)&&(e=new FormData(e)),v.isFormData(e))return l?JSON.stringify(ro(e)):e;if(v.isArrayBuffer(e)||v.isBuffer(e)||v.isStream(e)||v.isFile(e)||v.isBlob(e)||v.isReadableStream(e))return e;if(v.isArrayBufferView(e))return e.buffer;if(v.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(n){if(i.indexOf("application/x-www-form-urlencoded")>-1)return ah(e,this.formSerializer).toString();if((a=v.isFileList(e))||i.indexOf("multipart/form-data")>-1){const o=this.env&&this.env.FormData;return ll(a?{"files[]":e}:e,o&&new o,this.formSerializer)}}return n||l?(t.setContentType("application/json",!1),dh(e)):e}],transformResponse:[function(e){const t=this.transitional||Nr.transitional,i=t&&t.forcedJSONParsing,l=this.responseType==="json";if(v.isResponse(e)||v.isReadableStream(e))return e;if(e&&v.isString(e)&&(i&&!this.responseType||l)){const s=!(t&&t.silentJSONParsing)&&l;try{return JSON.parse(e,this.parseReviver)}catch(a){if(s)throw a.name==="SyntaxError"?D.from(a,D.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:he.classes.FormData,Blob:he.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};v.forEach(["delete","get","head","post","put","patch"],r=>{Nr.headers[r]={}});const hh=v.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),fh=r=>{const e={};let t,i,l;return r&&r.split(`
`).forEach(function(s){l=s.indexOf(":"),t=s.substring(0,l).trim().toLowerCase(),i=s.substring(l+1).trim(),!(!t||e[t]&&hh[t])&&(t==="set-cookie"?e[t]?e[t].push(i):e[t]=[i]:e[t]=e[t]?e[t]+", "+i:i)}),e},as=Symbol("internals");function or(r){return r&&String(r).trim().toLowerCase()}function mi(r){return r===!1||r==null?r:v.isArray(r)?r.map(mi):String(r)}function uh(r){const e=Object.create(null),t=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=t.exec(r);)e[i[1]]=i[2];return e}const ph=r=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(r.trim());function ul(r,e,t,i,l){if(v.isFunction(i))return i.call(this,e,t);if(l&&(e=t),!!v.isString(e)){if(v.isString(i))return e.indexOf(i)!==-1;if(v.isRegExp(i))return i.test(e)}}function mh(r){return r.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,i)=>t.toUpperCase()+i)}function gh(r,e){const t=v.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(r,i+t,{value:function(l,n,s){return this[i].call(this,e,l,n,s)},configurable:!0})})}let ye=class{constructor(e){e&&this.set(e)}set(e,t,i){const l=this;function n(a,o,c){const d=or(o);if(!d)throw new Error("header name must be a non-empty string");const h=v.findKey(l,d);(!h||l[h]===void 0||c===!0||c===void 0&&l[h]!==!1)&&(l[h||o]=mi(a))}const s=(a,o)=>v.forEach(a,(c,d)=>n(c,d,o));if(v.isPlainObject(e)||e instanceof this.constructor)s(e,t);else if(v.isString(e)&&(e=e.trim())&&!ph(e))s(fh(e),t);else if(v.isObject(e)&&v.isIterable(e)){let a={},o,c;for(const d of e){if(!v.isArray(d))throw TypeError("Object iterator must return a key-value pair");a[c=d[0]]=(o=a[c])?v.isArray(o)?[...o,d[1]]:[o,d[1]]:d[1]}s(a,t)}else e!=null&&n(t,e,i);return this}get(e,t){if(e=or(e),e){const i=v.findKey(this,e);if(i){const l=this[i];if(!t)return l;if(t===!0)return uh(l);if(v.isFunction(t))return t.call(this,l,i);if(v.isRegExp(t))return t.exec(l);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=or(e),e){const i=v.findKey(this,e);return!!(i&&this[i]!==void 0&&(!t||ul(this,this[i],i,t)))}return!1}delete(e,t){const i=this;let l=!1;function n(s){if(s=or(s),s){const a=v.findKey(i,s);a&&(!t||ul(i,i[a],a,t))&&(delete i[a],l=!0)}}return v.isArray(e)?e.forEach(n):n(e),l}clear(e){const t=Object.keys(this);let i=t.length,l=!1;for(;i--;){const n=t[i];(!e||ul(this,this[n],n,e,!0))&&(delete this[n],l=!0)}return l}normalize(e){const t=this,i={};return v.forEach(this,(l,n)=>{const s=v.findKey(i,n);if(s){t[s]=mi(l),delete t[n];return}const a=e?mh(n):String(n).trim();a!==n&&delete t[n],t[a]=mi(l),i[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return v.forEach(this,(i,l)=>{i!=null&&i!==!1&&(t[l]=e&&v.isArray(i)?i.join(", "):i)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+": "+t).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const i=new this(e);return t.forEach(l=>i.set(l)),i}static accessor(e){const i=(this[as]=this[as]={accessors:{}}).accessors,l=this.prototype;function n(s){const a=or(s);i[a]||(gh(l,s),i[a]=!0)}return v.isArray(e)?e.forEach(n):n(e),this}};ye.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);v.reduceDescriptors(ye.prototype,({value:r},e)=>{let t=e[0].toUpperCase()+e.slice(1);return{get:()=>r,set(i){this[t]=i}}});v.freezeMethods(ye);function pl(r,e){const t=this||Nr,i=e||t,l=ye.from(i.headers);let n=i.data;return v.forEach(r,function(a){n=a.call(t,n,l.normalize(),e?e.status:void 0)}),l.normalize(),n}function io(r){return!!(r&&r.__CANCEL__)}let Fr=class extends D{constructor(e,t,i){super(e??"canceled",D.ERR_CANCELED,t,i),this.name="CanceledError",this.__CANCEL__=!0}};function lo(r,e,t){const i=t.config.validateStatus;!t.status||!i||i(t.status)?r(t):e(new D("Request failed with status code "+t.status,[D.ERR_BAD_REQUEST,D.ERR_BAD_RESPONSE][Math.floor(t.status/100)-4],t.config,t.request,t))}function xh(r){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(r);return e&&e[1]||""}function vh(r,e){r=r||10;const t=new Array(r),i=new Array(r);let l=0,n=0,s;return e=e!==void 0?e:1e3,function(o){const c=Date.now(),d=i[n];s||(s=c),t[l]=o,i[l]=c;let h=n,f=0;for(;h!==l;)f+=t[h++],h=h%r;if(l=(l+1)%r,l===n&&(n=(n+1)%r),c-s<e)return;const u=d&&c-d;return u?Math.round(f*1e3/u):void 0}}function yh(r,e){let t=0,i=1e3/e,l,n;const s=(c,d=Date.now())=>{t=d,l=null,n&&(clearTimeout(n),n=null),r(...c)};return[(...c)=>{const d=Date.now(),h=d-t;h>=i?s(c,d):(l=c,n||(n=setTimeout(()=>{n=null,s(l)},i-h)))},()=>l&&s(l)]}const Ai=(r,e,t=3)=>{let i=0;const l=vh(50,250);return yh(n=>{const s=n.loaded,a=n.lengthComputable?n.total:void 0,o=s-i,c=l(o),d=s<=a;i=s;const h={loaded:s,total:a,progress:a?s/a:void 0,bytes:o,rate:c||void 0,estimated:c&&a&&d?(a-s)/c:void 0,event:n,lengthComputable:a!=null,[e?"download":"upload"]:!0};r(h)},t)},cs=(r,e)=>{const t=r!=null;return[i=>e[0]({lengthComputable:t,total:r,loaded:i}),e[1]]},ds=r=>(...e)=>v.asap(()=>r(...e)),wh=he.hasStandardBrowserEnv?((r,e)=>t=>(t=new URL(t,he.origin),r.protocol===t.protocol&&r.host===t.host&&(e||r.port===t.port)))(new URL(he.origin),he.navigator&&/(msie|trident)/i.test(he.navigator.userAgent)):()=>!0,bh=he.hasStandardBrowserEnv?{write(r,e,t,i,l,n,s){if(typeof document>"u")return;const a=[`${r}=${encodeURIComponent(e)}`];v.isNumber(t)&&a.push(`expires=${new Date(t).toUTCString()}`),v.isString(i)&&a.push(`path=${i}`),v.isString(l)&&a.push(`domain=${l}`),n===!0&&a.push("secure"),v.isString(s)&&a.push(`SameSite=${s}`),document.cookie=a.join("; ")},read(r){if(typeof document>"u")return null;const e=document.cookie.match(new RegExp("(?:^|; )"+r+"=([^;]*)"));return e?decodeURIComponent(e[1]):null},remove(r){this.write(r,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function kh(r){return typeof r!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(r)}function Sh(r,e){return e?r.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):r}function no(r,e,t){let i=!kh(e);return r&&(i||t==!1)?Sh(r,e):e}const hs=r=>r instanceof ye?{...r}:r;function zt(r,e){e=e||{};const t={};function i(c,d,h,f){return v.isPlainObject(c)&&v.isPlainObject(d)?v.merge.call({caseless:f},c,d):v.isPlainObject(d)?v.merge({},d):v.isArray(d)?d.slice():d}function l(c,d,h,f){if(v.isUndefined(d)){if(!v.isUndefined(c))return i(void 0,c,h,f)}else return i(c,d,h,f)}function n(c,d){if(!v.isUndefined(d))return i(void 0,d)}function s(c,d){if(v.isUndefined(d)){if(!v.isUndefined(c))return i(void 0,c)}else return i(void 0,d)}function a(c,d,h){if(h in e)return i(c,d);if(h in r)return i(void 0,c)}const o={url:n,method:n,data:n,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,withXSRFToken:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(c,d,h)=>l(hs(c),hs(d),h,!0)};return v.forEach(Object.keys({...r,...e}),function(d){if(d==="__proto__"||d==="constructor"||d==="prototype")return;const h=v.hasOwnProp(o,d)?o[d]:l,f=h(r[d],e[d],d);v.isUndefined(f)&&h!==a||(t[d]=f)}),t}const so=r=>{const e=zt({},r);let{data:t,withXSRFToken:i,xsrfHeaderName:l,xsrfCookieName:n,headers:s,auth:a}=e;if(e.headers=s=ye.from(s),e.url=to(no(e.baseURL,e.url,e.allowAbsoluteUrls),r.params,r.paramsSerializer),a&&s.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):""))),v.isFormData(t)){if(he.hasStandardBrowserEnv||he.hasStandardBrowserWebWorkerEnv)s.setContentType(void 0);else if(v.isFunction(t.getHeaders)){const o=t.getHeaders(),c=["content-type","content-length"];Object.entries(o).forEach(([d,h])=>{c.includes(d.toLowerCase())&&s.set(d,h)})}}if(he.hasStandardBrowserEnv&&(i&&v.isFunction(i)&&(i=i(e)),i||i!==!1&&wh(e.url))){const o=l&&n&&bh.read(n);o&&s.set(l,o)}return e},Mh=typeof XMLHttpRequest<"u",Ch=Mh&&function(r){return new Promise(function(t,i){const l=so(r);let n=l.data;const s=ye.from(l.headers).normalize();let{responseType:a,onUploadProgress:o,onDownloadProgress:c}=l,d,h,f,u,p;function m(){u&&u(),p&&p(),l.cancelToken&&l.cancelToken.unsubscribe(d),l.signal&&l.signal.removeEventListener("abort",d)}let x=new XMLHttpRequest;x.open(l.method.toUpperCase(),l.url,!0),x.timeout=l.timeout;function y(){if(!x)return;const g=ye.from("getAllResponseHeaders"in x&&x.getAllResponseHeaders()),w={data:!a||a==="text"||a==="json"?x.responseText:x.response,status:x.status,statusText:x.statusText,headers:g,config:r,request:x};lo(function(S){t(S),m()},function(S){i(S),m()},w),x=null}"onloadend"in x?x.onloadend=y:x.onreadystatechange=function(){!x||x.readyState!==4||x.status===0&&!(x.responseURL&&x.responseURL.indexOf("file:")===0)||setTimeout(y)},x.onabort=function(){x&&(i(new D("Request aborted",D.ECONNABORTED,r,x)),x=null)},x.onerror=function(b){const w=b&&b.message?b.message:"Network Error",T=new D(w,D.ERR_NETWORK,r,x);T.event=b||null,i(T),x=null},x.ontimeout=function(){let b=l.timeout?"timeout of "+l.timeout+"ms exceeded":"timeout exceeded";const w=l.transitional||zn;l.timeoutErrorMessage&&(b=l.timeoutErrorMessage),i(new D(b,w.clarifyTimeoutError?D.ETIMEDOUT:D.ECONNABORTED,r,x)),x=null},n===void 0&&s.setContentType(null),"setRequestHeader"in x&&v.forEach(s.toJSON(),function(b,w){x.setRequestHeader(w,b)}),v.isUndefined(l.withCredentials)||(x.withCredentials=!!l.withCredentials),a&&a!=="json"&&(x.responseType=l.responseType),c&&([f,p]=Ai(c,!0),x.addEventListener("progress",f)),o&&x.upload&&([h,u]=Ai(o),x.upload.addEventListener("progress",h),x.upload.addEventListener("loadend",u)),(l.cancelToken||l.signal)&&(d=g=>{x&&(i(!g||g.type?new Fr(null,r,x):g),x.abort(),x=null)},l.cancelToken&&l.cancelToken.subscribe(d),l.signal&&(l.signal.aborted?d():l.signal.addEventListener("abort",d)));const k=xh(l.url);if(k&&he.protocols.indexOf(k)===-1){i(new D("Unsupported protocol "+k+":",D.ERR_BAD_REQUEST,r));return}x.send(n||null)})},Th=(r,e)=>{const{length:t}=r=r?r.filter(Boolean):[];if(e||t){let i=new AbortController,l;const n=function(c){if(!l){l=!0,a();const d=c instanceof Error?c:this.reason;i.abort(d instanceof D?d:new Fr(d instanceof Error?d.message:d))}};let s=e&&setTimeout(()=>{s=null,n(new D(`timeout of ${e}ms exceeded`,D.ETIMEDOUT))},e);const a=()=>{r&&(s&&clearTimeout(s),s=null,r.forEach(c=>{c.unsubscribe?c.unsubscribe(n):c.removeEventListener("abort",n)}),r=null)};r.forEach(c=>c.addEventListener("abort",n));const{signal:o}=i;return o.unsubscribe=()=>v.asap(a),o}},Eh=function*(r,e){let t=r.byteLength;if(t<e){yield r;return}let i=0,l;for(;i<t;)l=i+e,yield r.slice(i,l),i=l},zh=async function*(r,e){for await(const t of Ah(r))yield*Eh(t,e)},Ah=async function*(r){if(r[Symbol.asyncIterator]){yield*r;return}const e=r.getReader();try{for(;;){const{done:t,value:i}=await e.read();if(t)break;yield i}}finally{await e.cancel()}},fs=(r,e,t,i)=>{const l=zh(r,e);let n=0,s,a=o=>{s||(s=!0,i&&i(o))};return new ReadableStream({async pull(o){try{const{done:c,value:d}=await l.next();if(c){a(),o.close();return}let h=d.byteLength;if(t){let f=n+=h;t(f)}o.enqueue(new Uint8Array(d))}catch(c){throw a(c),c}},cancel(o){return a(o),l.return()}},{highWaterMark:2})},us=64*1024,{isFunction:Wr}=v,Oh=(({Request:r,Response:e})=>({Request:r,Response:e}))(v.global),{ReadableStream:ps,TextEncoder:ms}=v.global,gs=(r,...e)=>{try{return!!r(...e)}catch{return!1}},Lh=r=>{r=v.merge.call({skipUndefined:!0},Oh,r);const{fetch:e,Request:t,Response:i}=r,l=e?Wr(e):typeof fetch=="function",n=Wr(t),s=Wr(i);if(!l)return!1;const a=l&&Wr(ps),o=l&&(typeof ms=="function"?(p=>m=>p.encode(m))(new ms):async p=>new Uint8Array(await new t(p).arrayBuffer())),c=n&&a&&gs(()=>{let p=!1;const m=new t(he.origin,{body:new ps,method:"POST",get duplex(){return p=!0,"half"}}).headers.has("Content-Type");return p&&!m}),d=s&&a&&gs(()=>v.isReadableStream(new i("").body)),h={stream:d&&(p=>p.body)};l&&["text","arrayBuffer","blob","formData","stream"].forEach(p=>{!h[p]&&(h[p]=(m,x)=>{let y=m&&m[p];if(y)return y.call(m);throw new D(`Response type '${p}' is not supported`,D.ERR_NOT_SUPPORT,x)})});const f=async p=>{if(p==null)return 0;if(v.isBlob(p))return p.size;if(v.isSpecCompliantForm(p))return(await new t(he.origin,{method:"POST",body:p}).arrayBuffer()).byteLength;if(v.isArrayBufferView(p)||v.isArrayBuffer(p))return p.byteLength;if(v.isURLSearchParams(p)&&(p=p+""),v.isString(p))return(await o(p)).byteLength},u=async(p,m)=>{const x=v.toFiniteNumber(p.getContentLength());return x??f(m)};return async p=>{let{url:m,method:x,data:y,signal:k,cancelToken:g,timeout:b,onDownloadProgress:w,onUploadProgress:T,responseType:S,headers:z,withCredentials:B="same-origin",fetchOptions:E}=so(p),M=e||fetch;S=S?(S+"").toLowerCase():"text";let A=Th([k,g&&g.toAbortSignal()],b),P=null;const F=A&&A.unsubscribe&&(()=>{A.unsubscribe()});let G;try{if(T&&c&&x!=="get"&&x!=="head"&&(G=await u(z,y))!==0){let te=new t(m,{method:"POST",body:y,duplex:"half"}),Ne;if(v.isFormData(y)&&(Ne=te.headers.get("content-type"))&&z.setContentType(Ne),te.body){const[hl,qr]=cs(G,Ai(ds(T)));y=fs(te.body,us,hl,qr)}}v.isString(B)||(B=B?"include":"omit");const _=n&&"credentials"in t.prototype,ee={...E,signal:A,method:x.toUpperCase(),headers:z.normalize().toJSON(),body:y,duplex:"half",credentials:_?B:void 0};P=n&&new t(m,ee);let j=await(n?M(P,E):M(m,ee));const W=d&&(S==="stream"||S==="response");if(d&&(w||W&&F)){const te={};["status","statusText","headers"].forEach(es=>{te[es]=j[es]});const Ne=v.toFiniteNumber(j.headers.get("content-length")),[hl,qr]=w&&cs(Ne,Ai(ds(w),!0))||[];j=new i(fs(j.body,us,hl,()=>{qr&&qr(),F&&F()}),te)}S=S||"text";let U=await h[v.findKey(h,S)||"text"](j,p);return!W&&F&&F(),await new Promise((te,Ne)=>{lo(te,Ne,{data:U,headers:ye.from(j.headers),status:j.status,statusText:j.statusText,config:p,request:P})})}catch(_){throw F&&F(),_&&_.name==="TypeError"&&/Load failed|fetch/i.test(_.message)?Object.assign(new D("Network Error",D.ERR_NETWORK,p,P,_&&_.response),{cause:_.cause||_}):D.from(_,_&&_.code,p,P,_&&_.response)}}},jh=new Map,ao=r=>{let e=r&&r.env||{};const{fetch:t,Request:i,Response:l}=e,n=[i,l,t];let s=n.length,a=s,o,c,d=jh;for(;a--;)o=n[a],c=d.get(o),c===void 0&&d.set(o,c=a?new Map:Lh(e)),d=c;return c};ao();const On={http:Jd,xhr:Ch,fetch:{get:ao}};v.forEach(On,(r,e)=>{if(r){try{Object.defineProperty(r,"name",{value:e})}catch{}Object.defineProperty(r,"adapterName",{value:e})}});const xs=r=>`- ${r}`,Bh=r=>v.isFunction(r)||r===null||r===!1;function Ph(r,e){r=v.isArray(r)?r:[r];const{length:t}=r;let i,l;const n={};for(let s=0;s<t;s++){i=r[s];let a;if(l=i,!Bh(i)&&(l=On[(a=String(i)).toLowerCase()],l===void 0))throw new D(`Unknown adapter '${a}'`);if(l&&(v.isFunction(l)||(l=l.get(e))))break;n[a||"#"+s]=l}if(!l){const s=Object.entries(n).map(([o,c])=>`adapter ${o} `+(c===!1?"is not supported by the environment":"is not available in the build"));let a=t?s.length>1?`since :
`+s.map(xs).join(`
`):" "+xs(s[0]):"as no adapter specified";throw new D("There is no suitable adapter to dispatch the request "+a,"ERR_NOT_SUPPORT")}return l}const oo={getAdapter:Ph,adapters:On};function ml(r){if(r.cancelToken&&r.cancelToken.throwIfRequested(),r.signal&&r.signal.aborted)throw new Fr(null,r)}function vs(r){return ml(r),r.headers=ye.from(r.headers),r.data=pl.call(r,r.transformRequest),["post","put","patch"].indexOf(r.method)!==-1&&r.headers.setContentType("application/x-www-form-urlencoded",!1),oo.getAdapter(r.adapter||Nr.adapter,r)(r).then(function(i){return ml(r),i.data=pl.call(r,r.transformResponse,i),i.headers=ye.from(i.headers),i},function(i){return io(i)||(ml(r),i&&i.response&&(i.response.data=pl.call(r,r.transformResponse,i.response),i.response.headers=ye.from(i.response.headers))),Promise.reject(i)})}const co="1.13.6",nl={};["object","boolean","number","function","string","symbol"].forEach((r,e)=>{nl[r]=function(i){return typeof i===r||"a"+(e<1?"n ":" ")+r}});const ys={};nl.transitional=function(e,t,i){function l(n,s){return"[Axios v"+co+"] Transitional option '"+n+"'"+s+(i?". "+i:"")}return(n,s,a)=>{if(e===!1)throw new D(l(s," has been removed"+(t?" in "+t:"")),D.ERR_DEPRECATED);return t&&!ys[s]&&(ys[s]=!0,console.warn(l(s," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(n,s,a):!0}};nl.spelling=function(e){return(t,i)=>(console.warn(`${i} is likely a misspelling of ${e}`),!0)};function Ih(r,e,t){if(typeof r!="object")throw new D("options must be an object",D.ERR_BAD_OPTION_VALUE);const i=Object.keys(r);let l=i.length;for(;l-- >0;){const n=i[l],s=e[n];if(s){const a=r[n],o=a===void 0||s(a,n,r);if(o!==!0)throw new D("option "+n+" must be "+o,D.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new D("Unknown option "+n,D.ERR_BAD_OPTION)}}const gi={assertOptions:Ih,validators:nl},Te=gi.validators;let St=class{constructor(e){this.defaults=e||{},this.interceptors={request:new ss,response:new ss}}async request(e,t){try{return await this._request(e,t)}catch(i){if(i instanceof Error){let l={};Error.captureStackTrace?Error.captureStackTrace(l):l=new Error;const n=l.stack?l.stack.replace(/^.+\n/,""):"";try{i.stack?n&&!String(i.stack).endsWith(n.replace(/^.+\n.+\n/,""))&&(i.stack+=`
`+n):i.stack=n}catch{}}throw i}}_request(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=zt(this.defaults,t);const{transitional:i,paramsSerializer:l,headers:n}=t;i!==void 0&&gi.assertOptions(i,{silentJSONParsing:Te.transitional(Te.boolean),forcedJSONParsing:Te.transitional(Te.boolean),clarifyTimeoutError:Te.transitional(Te.boolean),legacyInterceptorReqResOrdering:Te.transitional(Te.boolean)},!1),l!=null&&(v.isFunction(l)?t.paramsSerializer={serialize:l}:gi.assertOptions(l,{encode:Te.function,serialize:Te.function},!0)),t.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:t.allowAbsoluteUrls=!0),gi.assertOptions(t,{baseUrl:Te.spelling("baseURL"),withXsrfToken:Te.spelling("withXSRFToken")},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();let s=n&&v.merge(n.common,n[t.method]);n&&v.forEach(["delete","get","head","post","put","patch","common"],p=>{delete n[p]}),t.headers=ye.concat(s,n);const a=[];let o=!0;this.interceptors.request.forEach(function(m){if(typeof m.runWhen=="function"&&m.runWhen(t)===!1)return;o=o&&m.synchronous;const x=t.transitional||zn;x&&x.legacyInterceptorReqResOrdering?a.unshift(m.fulfilled,m.rejected):a.push(m.fulfilled,m.rejected)});const c=[];this.interceptors.response.forEach(function(m){c.push(m.fulfilled,m.rejected)});let d,h=0,f;if(!o){const p=[vs.bind(this),void 0];for(p.unshift(...a),p.push(...c),f=p.length,d=Promise.resolve(t);h<f;)d=d.then(p[h++],p[h++]);return d}f=a.length;let u=t;for(;h<f;){const p=a[h++],m=a[h++];try{u=p(u)}catch(x){m.call(this,x);break}}try{d=vs.call(this,u)}catch(p){return Promise.reject(p)}for(h=0,f=c.length;h<f;)d=d.then(c[h++],c[h++]);return d}getUri(e){e=zt(this.defaults,e);const t=no(e.baseURL,e.url,e.allowAbsoluteUrls);return to(t,e.params,e.paramsSerializer)}};v.forEach(["delete","get","head","options"],function(e){St.prototype[e]=function(t,i){return this.request(zt(i||{},{method:e,url:t,data:(i||{}).data}))}});v.forEach(["post","put","patch"],function(e){function t(i){return function(n,s,a){return this.request(zt(a||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:n,data:s}))}}St.prototype[e]=t(),St.prototype[e+"Form"]=t(!0)});let Rh=class ho{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let t;this.promise=new Promise(function(n){t=n});const i=this;this.promise.then(l=>{if(!i._listeners)return;let n=i._listeners.length;for(;n-- >0;)i._listeners[n](l);i._listeners=null}),this.promise.then=l=>{let n;const s=new Promise(a=>{i.subscribe(a),n=a}).then(l);return s.cancel=function(){i.unsubscribe(n)},s},e(function(n,s,a){i.reason||(i.reason=new Fr(n,s,a),t(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}toAbortSignal(){const e=new AbortController,t=i=>{e.abort(i)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let e;return{token:new ho(function(l){e=l}),cancel:e}}};function Dh(r){return function(t){return r.apply(null,t)}}function Nh(r){return v.isObject(r)&&r.isAxiosError===!0}const Ql={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Ql).forEach(([r,e])=>{Ql[e]=r});function fo(r){const e=new St(r),t=Ga(St.prototype.request,e);return v.extend(t,St.prototype,e,{allOwnKeys:!0}),v.extend(t,e,null,{allOwnKeys:!0}),t.create=function(l){return fo(zt(r,l))},t}const Q=fo(Nr);Q.Axios=St;Q.CanceledError=Fr;Q.CancelToken=Rh;Q.isCancel=io;Q.VERSION=co;Q.toFormData=ll;Q.AxiosError=D;Q.Cancel=Q.CanceledError;Q.all=function(e){return Promise.all(e)};Q.spread=Dh;Q.isAxiosError=Nh;Q.mergeConfig=zt;Q.AxiosHeaders=ye;Q.formToJSON=r=>ro(v.isHTMLForm(r)?new FormData(r):r);Q.getAdapter=oo.getAdapter;Q.HttpStatusCode=Ql;Q.default=Q;const{Axios:zm,AxiosError:Am,CanceledError:Om,isCancel:Lm,CancelToken:jm,VERSION:Bm,all:Pm,Cancel:Im,isAxiosError:Rm,spread:Dm,toFormData:Nm,AxiosHeaders:Fm,HttpStatusCode:Hm,formToJSON:_m,getAdapter:$m,mergeConfig:Vm}=Q;window.axios=Q;window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest";function Fh(r){r.directive("collapse",e),e.inline=(t,{modifiers:i})=>{i.includes("min")&&(t._x_doShow=()=>{},t._x_doHide=()=>{})};function e(t,{modifiers:i}){let l=ws(i,"duration",250)/1e3,n=ws(i,"min",0),s=!i.includes("min");t._x_isShown||(t.style.height=`${n}px`),!t._x_isShown&&s&&(t.hidden=!0),t._x_isShown||(t.style.overflow="hidden");let a=(c,d)=>{let h=r.setStyles(c,d);return d.height?()=>{}:h},o={transitionProperty:"height",transitionDuration:`${l}s`,transitionTimingFunction:"cubic-bezier(0.4, 0.0, 0.2, 1)"};t._x_transition={in(c=()=>{},d=()=>{}){s&&(t.hidden=!1),s&&(t.style.display=null);let h=t.getBoundingClientRect().height;t.style.height="auto";let f=t.getBoundingClientRect().height;h===f&&(h=n),r.transition(t,r.setStyles,{during:o,start:{height:h+"px"},end:{height:f+"px"}},()=>t._x_isShown=!0,()=>{Math.abs(t.getBoundingClientRect().height-f)<1&&(t.style.overflow=null)})},out(c=()=>{},d=()=>{}){let h=t.getBoundingClientRect().height;r.transition(t,a,{during:o,start:{height:h+"px"},end:{height:n+"px"}},()=>t.style.overflow="hidden",()=>{t._x_isShown=!1,t.style.height==`${n}px`&&s&&(t.style.display="none",t.hidden=!0)})}}}}function ws(r,e,t){if(r.indexOf(e)===-1)return t;const i=r[r.indexOf(e)+1];if(!i)return t;if(e==="duration"){let l=i.match(/([0-9]+)ms/);if(l)return l[1]}if(e==="min"){let l=i.match(/([0-9]+)px/);if(l)return l[1]}return i}var Hh=Fh;function _h(r){r.directive("mask",(e,{value:t,expression:i},{effect:l,evaluateLater:n,cleanup:s})=>{let a=()=>i,o="";queueMicrotask(()=>{if(["function","dynamic"].includes(t)){let f=n(i);l(()=>{a=u=>{let p;return r.dontAutoEvaluateFunctions(()=>{f(m=>{p=typeof m=="function"?m(u):m},{scope:{$input:u,$money:Vh.bind({el:e})}})}),p},d(e,!1)})}else d(e,!1);if(e._x_model){if(e._x_model.get()===e.value||e._x_model.get()===null&&e.value==="")return;e._x_model.set(e.value)}});const c=new AbortController;s(()=>{c.abort()}),e.addEventListener("input",()=>d(e),{signal:c.signal,capture:!0}),e.addEventListener("blur",()=>d(e,!1),{signal:c.signal});function d(f,u=!0){let p=f.value,m=a(p);if(!m||m==="false")return!1;if(o.length-f.value.length===1)return o=f.value;let x=()=>{o=f.value=h(p,m)};u?$h(f,m,()=>{x()}):x()}function h(f,u){if(f==="")return"";let p=uo(u,f);return po(u,p)}}).before("model")}function $h(r,e,t){let i=r.selectionStart,l=r.value;t();let n=l.slice(0,i),s=po(e,uo(e,n)).length;r.setSelectionRange(s,s)}function uo(r,e){let t=e,i="",l={9:/[0-9]/,a:/[a-zA-Z]/,"*":/[a-zA-Z0-9]/},n="";for(let s=0;s<r.length;s++){if(["9","a","*"].includes(r[s])){n+=r[s];continue}for(let a=0;a<t.length;a++)if(t[a]===r[s]){t=t.slice(0,a)+t.slice(a+1);break}}for(let s=0;s<n.length;s++){let a=!1;for(let o=0;o<t.length;o++)if(l[n[s]].test(t[o])){i+=t[o],t=t.slice(0,o)+t.slice(o+1),a=!0;break}if(!a)break}return i}function po(r,e){let t=Array.from(e),i="";for(let l=0;l<r.length;l++){if(!["9","a","*"].includes(r[l])){i+=r[l];continue}if(t.length===0)break;i+=t.shift()}return i}function Vh(r,e=".",t,i=2){if(r==="-")return"-";if(/^\D+$/.test(r))return"9";t==null&&(t=e===","?".":",");let l=(o,c)=>{let d="",h=0;for(let f=o.length-1;f>=0;f--)o[f]!==c&&(h===3?(d=o[f]+c+d,h=0):d=o[f]+d,h++);return d},n=r.startsWith("-")?"-":"",s=r.replaceAll(new RegExp(`[^0-9\\${e}]`,"g"),""),a=Array.from({length:s.split(e)[0].length}).fill("9").join("");return a=`${n}${l(a,t)}`,i>0&&r.includes(e)&&(a+=`${e}`+"9".repeat(i)),queueMicrotask(()=>{this.el.value.endsWith(e)||this.el.value[this.el.selectionStart-1]===e&&this.el.setSelectionRange(this.el.selectionStart-1,this.el.selectionStart-1)}),a}var Gh=_h;function qh(r){r.directive("resize",r.skipDuringClone((e,{value:t,expression:i,modifiers:l},{evaluateLater:n,cleanup:s})=>{let a=n(i),o=(d,h)=>{a(()=>{},{scope:{$width:d,$height:h}})},c=l.includes("document")?Uh(o):Wh(e,o);s(()=>c())}))}function Wh(r,e){let t=new ResizeObserver(i=>{let[l,n]=mo(i);e(l,n)});return t.observe(r),()=>t.disconnect()}var gl,xl=new Set;function Uh(r){return xl.add(r),gl||(gl=new ResizeObserver(e=>{let[t,i]=mo(e);xl.forEach(l=>l(t,i))}),gl.observe(document.documentElement)),()=>{xl.delete(r)}}function mo(r){let e,t;for(let i of r)e=i.borderBoxSize[0].inlineSize,t=i.borderBoxSize[0].blockSize;return[e,t]}var Kh=qh;function Jh(r){r.directive("intersect",r.skipDuringClone((e,{value:t,expression:i,modifiers:l},{evaluateLater:n,cleanup:s})=>{let a=n(i),o={rootMargin:Zh(l),threshold:Yh(l)},c=new IntersectionObserver(d=>{d.forEach(h=>{h.isIntersecting!==(t==="leave")&&(a(),l.includes("once")&&c.disconnect())})},o);c.observe(e),s(()=>{c.disconnect()})}))}function Yh(r){if(r.includes("full"))return .99;if(r.includes("half"))return .5;if(!r.includes("threshold"))return 0;let e=r[r.indexOf("threshold")+1];return e==="100"?1:e==="0"?0:+`.${e}`}function Xh(r){let e=r.match(/^(-?[0-9]+)(px|%)?$/);return e?e[1]+(e[2]||"px"):void 0}function Zh(r){const e="margin",t="0px 0px 0px 0px",i=r.indexOf(e);if(i===-1)return t;let l=[];for(let n=1;n<5;n++)l.push(Xh(r[i+n]||""));return l=l.filter(n=>n!==void 0),l.length?l.join(" ").trim():t}var Qh=Jh;function bs(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(r);e&&(i=i.filter(function(l){return Object.getOwnPropertyDescriptor(r,l).enumerable})),t.push.apply(t,i)}return t}function _e(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?bs(Object(t),!0).forEach(function(i){e0(r,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):bs(Object(t)).forEach(function(i){Object.defineProperty(r,i,Object.getOwnPropertyDescriptor(t,i))})}return r}function xi(r){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?xi=function(e){return typeof e}:xi=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},xi(r)}function e0(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function Qe(){return Qe=Object.assign||function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=t[i])}return r},Qe.apply(this,arguments)}function t0(r,e){if(r==null)return{};var t={},i=Object.keys(r),l,n;for(n=0;n<i.length;n++)l=i[n],!(e.indexOf(l)>=0)&&(t[l]=r[l]);return t}function r0(r,e){if(r==null)return{};var t=t0(r,e),i,l;if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);for(l=0;l<n.length;l++)i=n[l],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(r,i)&&(t[i]=r[i])}return t}var i0="1.15.2";function Ye(r){if(typeof window<"u"&&window.navigator)return!!navigator.userAgent.match(r)}var et=Ye(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),Hr=Ye(/Edge/i),ks=Ye(/firefox/i),xr=Ye(/safari/i)&&!Ye(/chrome/i)&&!Ye(/android/i),go=Ye(/iP(ad|od|hone)/i),xo=Ye(/chrome/i)&&Ye(/android/i),vo={capture:!1,passive:!1};function q(r,e,t){r.addEventListener(e,t,!et&&vo)}function V(r,e,t){r.removeEventListener(e,t,!et&&vo)}function Oi(r,e){if(e){if(e[0]===">"&&(e=e.substring(1)),r)try{if(r.matches)return r.matches(e);if(r.msMatchesSelector)return r.msMatchesSelector(e);if(r.webkitMatchesSelector)return r.webkitMatchesSelector(e)}catch{return!1}return!1}}function l0(r){return r.host&&r!==document&&r.host.nodeType?r.host:r.parentNode}function je(r,e,t,i){if(r){t=t||document;do{if(e!=null&&(e[0]===">"?r.parentNode===t&&Oi(r,e):Oi(r,e))||i&&r===t)return r;if(r===t)break}while(r=l0(r))}return null}var Ss=/\s+/g;function we(r,e,t){if(r&&e)if(r.classList)r.classList[t?"add":"remove"](e);else{var i=(" "+r.className+" ").replace(Ss," ").replace(" "+e+" "," ");r.className=(i+(t?" "+e:"")).replace(Ss," ")}}function I(r,e,t){var i=r&&r.style;if(i){if(t===void 0)return document.defaultView&&document.defaultView.getComputedStyle?t=document.defaultView.getComputedStyle(r,""):r.currentStyle&&(t=r.currentStyle),e===void 0?t:t[e];!(e in i)&&e.indexOf("webkit")===-1&&(e="-webkit-"+e),i[e]=t+(typeof t=="string"?"":"px")}}function Kt(r,e){var t="";if(typeof r=="string")t=r;else do{var i=I(r,"transform");i&&i!=="none"&&(t=i+" "+t)}while(!e&&(r=r.parentNode));var l=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return l&&new l(t)}function yo(r,e,t){if(r){var i=r.getElementsByTagName(e),l=0,n=i.length;if(t)for(;l<n;l++)t(i[l],l);return i}return[]}function He(){var r=document.scrollingElement;return r||document.documentElement}function ie(r,e,t,i,l){if(!(!r.getBoundingClientRect&&r!==window)){var n,s,a,o,c,d,h;if(r!==window&&r.parentNode&&r!==He()?(n=r.getBoundingClientRect(),s=n.top,a=n.left,o=n.bottom,c=n.right,d=n.height,h=n.width):(s=0,a=0,o=window.innerHeight,c=window.innerWidth,d=window.innerHeight,h=window.innerWidth),(e||t)&&r!==window&&(l=l||r.parentNode,!et))do if(l&&l.getBoundingClientRect&&(I(l,"transform")!=="none"||t&&I(l,"position")!=="static")){var f=l.getBoundingClientRect();s-=f.top+parseInt(I(l,"border-top-width")),a-=f.left+parseInt(I(l,"border-left-width")),o=s+n.height,c=a+n.width;break}while(l=l.parentNode);if(i&&r!==window){var u=Kt(l||r),p=u&&u.a,m=u&&u.d;u&&(s/=m,a/=p,h/=p,d/=m,o=s+d,c=a+h)}return{top:s,left:a,bottom:o,right:c,width:h,height:d}}}function Ms(r,e,t){for(var i=st(r,!0),l=ie(r)[e];i;){var n=ie(i)[t],s=void 0;if(s=l>=n,!s)return i;if(i===He())break;i=st(i,!1)}return!1}function tr(r,e,t,i){for(var l=0,n=0,s=r.children;n<s.length;){if(s[n].style.display!=="none"&&s[n]!==R.ghost&&(i||s[n]!==R.dragged)&&je(s[n],t.draggable,r,!1)){if(l===e)return s[n];l++}n++}return null}function Ln(r,e){for(var t=r.lastElementChild;t&&(t===R.ghost||I(t,"display")==="none"||e&&!Oi(t,e));)t=t.previousElementSibling;return t||null}function Ee(r,e){var t=0;if(!r||!r.parentNode)return-1;for(;r=r.previousElementSibling;)r.nodeName.toUpperCase()!=="TEMPLATE"&&r!==R.clone&&(!e||Oi(r,e))&&t++;return t}function Cs(r){var e=0,t=0,i=He();if(r)do{var l=Kt(r),n=l.a,s=l.d;e+=r.scrollLeft*n,t+=r.scrollTop*s}while(r!==i&&(r=r.parentNode));return[e,t]}function n0(r,e){for(var t in r)if(r.hasOwnProperty(t)){for(var i in e)if(e.hasOwnProperty(i)&&e[i]===r[t][i])return Number(t)}return-1}function st(r,e){if(!r||!r.getBoundingClientRect)return He();var t=r,i=!1;do if(t.clientWidth<t.scrollWidth||t.clientHeight<t.scrollHeight){var l=I(t);if(t.clientWidth<t.scrollWidth&&(l.overflowX=="auto"||l.overflowX=="scroll")||t.clientHeight<t.scrollHeight&&(l.overflowY=="auto"||l.overflowY=="scroll")){if(!t.getBoundingClientRect||t===document.body)return He();if(i||e)return t;i=!0}}while(t=t.parentNode);return He()}function s0(r,e){if(r&&e)for(var t in e)e.hasOwnProperty(t)&&(r[t]=e[t]);return r}function vl(r,e){return Math.round(r.top)===Math.round(e.top)&&Math.round(r.left)===Math.round(e.left)&&Math.round(r.height)===Math.round(e.height)&&Math.round(r.width)===Math.round(e.width)}var vr;function wo(r,e){return function(){if(!vr){var t=arguments,i=this;t.length===1?r.call(i,t[0]):r.apply(i,t),vr=setTimeout(function(){vr=void 0},e)}}}function a0(){clearTimeout(vr),vr=void 0}function bo(r,e,t){r.scrollLeft+=e,r.scrollTop+=t}function ko(r){var e=window.Polymer,t=window.jQuery||window.Zepto;return e&&e.dom?e.dom(r).cloneNode(!0):t?t(r).clone(!0)[0]:r.cloneNode(!0)}function So(r,e,t){var i={};return Array.from(r.children).forEach(function(l){var n,s,a,o;if(!(!je(l,e.draggable,r,!1)||l.animated||l===t)){var c=ie(l);i.left=Math.min((n=i.left)!==null&&n!==void 0?n:1/0,c.left),i.top=Math.min((s=i.top)!==null&&s!==void 0?s:1/0,c.top),i.right=Math.max((a=i.right)!==null&&a!==void 0?a:-1/0,c.right),i.bottom=Math.max((o=i.bottom)!==null&&o!==void 0?o:-1/0,c.bottom)}}),i.width=i.right-i.left,i.height=i.bottom-i.top,i.x=i.left,i.y=i.top,i}var Se="Sortable"+new Date().getTime();function o0(){var r=[],e;return{captureAnimationState:function(){if(r=[],!!this.options.animation){var i=[].slice.call(this.el.children);i.forEach(function(l){if(!(I(l,"display")==="none"||l===R.ghost)){r.push({target:l,rect:ie(l)});var n=_e({},r[r.length-1].rect);if(l.thisAnimationDuration){var s=Kt(l,!0);s&&(n.top-=s.f,n.left-=s.e)}l.fromRect=n}})}},addAnimationState:function(i){r.push(i)},removeAnimationState:function(i){r.splice(n0(r,{target:i}),1)},animateAll:function(i){var l=this;if(!this.options.animation){clearTimeout(e),typeof i=="function"&&i();return}var n=!1,s=0;r.forEach(function(a){var o=0,c=a.target,d=c.fromRect,h=ie(c),f=c.prevFromRect,u=c.prevToRect,p=a.rect,m=Kt(c,!0);m&&(h.top-=m.f,h.left-=m.e),c.toRect=h,c.thisAnimationDuration&&vl(f,h)&&!vl(d,h)&&(p.top-h.top)/(p.left-h.left)===(d.top-h.top)/(d.left-h.left)&&(o=d0(p,f,u,l.options)),vl(h,d)||(c.prevFromRect=d,c.prevToRect=h,o||(o=l.options.animation),l.animate(c,p,h,o)),o&&(n=!0,s=Math.max(s,o),clearTimeout(c.animationResetTimer),c.animationResetTimer=setTimeout(function(){c.animationTime=0,c.prevFromRect=null,c.fromRect=null,c.prevToRect=null,c.thisAnimationDuration=null},o),c.thisAnimationDuration=o)}),clearTimeout(e),n?e=setTimeout(function(){typeof i=="function"&&i()},s):typeof i=="function"&&i(),r=[]},animate:function(i,l,n,s){if(s){I(i,"transition",""),I(i,"transform","");var a=Kt(this.el),o=a&&a.a,c=a&&a.d,d=(l.left-n.left)/(o||1),h=(l.top-n.top)/(c||1);i.animatingX=!!d,i.animatingY=!!h,I(i,"transform","translate3d("+d+"px,"+h+"px,0)"),this.forRepaintDummy=c0(i),I(i,"transition","transform "+s+"ms"+(this.options.easing?" "+this.options.easing:"")),I(i,"transform","translate3d(0,0,0)"),typeof i.animated=="number"&&clearTimeout(i.animated),i.animated=setTimeout(function(){I(i,"transition",""),I(i,"transform",""),i.animated=!1,i.animatingX=!1,i.animatingY=!1},s)}}}}function c0(r){return r.offsetWidth}function d0(r,e,t,i){return Math.sqrt(Math.pow(e.top-r.top,2)+Math.pow(e.left-r.left,2))/Math.sqrt(Math.pow(e.top-t.top,2)+Math.pow(e.left-t.left,2))*i.animation}var It=[],yl={initializeByDefault:!0},_r={mount:function(e){for(var t in yl)yl.hasOwnProperty(t)&&!(t in e)&&(e[t]=yl[t]);It.forEach(function(i){if(i.pluginName===e.pluginName)throw"Sortable: Cannot mount plugin ".concat(e.pluginName," more than once")}),It.push(e)},pluginEvent:function(e,t,i){var l=this;this.eventCanceled=!1,i.cancel=function(){l.eventCanceled=!0};var n=e+"Global";It.forEach(function(s){t[s.pluginName]&&(t[s.pluginName][n]&&t[s.pluginName][n](_e({sortable:t},i)),t.options[s.pluginName]&&t[s.pluginName][e]&&t[s.pluginName][e](_e({sortable:t},i)))})},initializePlugins:function(e,t,i,l){It.forEach(function(a){var o=a.pluginName;if(!(!e.options[o]&&!a.initializeByDefault)){var c=new a(e,t,e.options);c.sortable=e,c.options=e.options,e[o]=c,Qe(i,c.defaults)}});for(var n in e.options)if(e.options.hasOwnProperty(n)){var s=this.modifyOption(e,n,e.options[n]);typeof s<"u"&&(e.options[n]=s)}},getEventProperties:function(e,t){var i={};return It.forEach(function(l){typeof l.eventProperties=="function"&&Qe(i,l.eventProperties.call(t[l.pluginName],e))}),i},modifyOption:function(e,t,i){var l;return It.forEach(function(n){e[n.pluginName]&&n.optionListeners&&typeof n.optionListeners[t]=="function"&&(l=n.optionListeners[t].call(e[n.pluginName],i))}),l}};function h0(r){var e=r.sortable,t=r.rootEl,i=r.name,l=r.targetEl,n=r.cloneEl,s=r.toEl,a=r.fromEl,o=r.oldIndex,c=r.newIndex,d=r.oldDraggableIndex,h=r.newDraggableIndex,f=r.originalEvent,u=r.putSortable,p=r.extraEventProperties;if(e=e||t&&t[Se],!!e){var m,x=e.options,y="on"+i.charAt(0).toUpperCase()+i.substr(1);window.CustomEvent&&!et&&!Hr?m=new CustomEvent(i,{bubbles:!0,cancelable:!0}):(m=document.createEvent("Event"),m.initEvent(i,!0,!0)),m.to=s||t,m.from=a||t,m.item=l||t,m.clone=n,m.oldIndex=o,m.newIndex=c,m.oldDraggableIndex=d,m.newDraggableIndex=h,m.originalEvent=f,m.pullMode=u?u.lastPutMode:void 0;var k=_e(_e({},p),_r.getEventProperties(i,e));for(var g in k)m[g]=k[g];t&&t.dispatchEvent(m),x[y]&&x[y].call(e,m)}}var f0=["evt"],xe=function(e,t){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},l=i.evt,n=r0(i,f0);_r.pluginEvent.bind(R)(e,t,_e({dragEl:C,parentEl:Z,ghostEl:N,rootEl:Y,nextEl:mt,lastDownEl:vi,cloneEl:X,cloneHidden:lt,dragStarted:fr,putSortable:se,activeSortable:R.active,originalEvent:l,oldIndex:Ut,oldDraggableIndex:yr,newIndex:be,newDraggableIndex:rt,hideGhostForTarget:Eo,unhideGhostForTarget:zo,cloneNowHidden:function(){lt=!0},cloneNowShown:function(){lt=!1},dispatchSortableEvent:function(a){ue({sortable:t,name:a,originalEvent:l})}},n))};function ue(r){h0(_e({putSortable:se,cloneEl:X,targetEl:C,rootEl:Y,oldIndex:Ut,oldDraggableIndex:yr,newIndex:be,newDraggableIndex:rt},r))}var C,Z,N,Y,mt,vi,X,lt,Ut,be,yr,rt,Ur,se,Vt=!1,Li=!1,ji=[],ut,Le,wl,bl,Ts,Es,fr,Rt,wr,br=!1,Kr=!1,yi,de,kl=[],en=!1,Bi=[],sl=typeof document<"u",Jr=go,zs=Hr||et?"cssFloat":"float",u0=sl&&!xo&&!go&&"draggable"in document.createElement("div"),Mo=function(){if(sl){if(et)return!1;var r=document.createElement("x");return r.style.cssText="pointer-events:auto",r.style.pointerEvents==="auto"}}(),Co=function(e,t){var i=I(e),l=parseInt(i.width)-parseInt(i.paddingLeft)-parseInt(i.paddingRight)-parseInt(i.borderLeftWidth)-parseInt(i.borderRightWidth),n=tr(e,0,t),s=tr(e,1,t),a=n&&I(n),o=s&&I(s),c=a&&parseInt(a.marginLeft)+parseInt(a.marginRight)+ie(n).width,d=o&&parseInt(o.marginLeft)+parseInt(o.marginRight)+ie(s).width;if(i.display==="flex")return i.flexDirection==="column"||i.flexDirection==="column-reverse"?"vertical":"horizontal";if(i.display==="grid")return i.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(n&&a.float&&a.float!=="none"){var h=a.float==="left"?"left":"right";return s&&(o.clear==="both"||o.clear===h)?"vertical":"horizontal"}return n&&(a.display==="block"||a.display==="flex"||a.display==="table"||a.display==="grid"||c>=l&&i[zs]==="none"||s&&i[zs]==="none"&&c+d>l)?"vertical":"horizontal"},p0=function(e,t,i){var l=i?e.left:e.top,n=i?e.right:e.bottom,s=i?e.width:e.height,a=i?t.left:t.top,o=i?t.right:t.bottom,c=i?t.width:t.height;return l===a||n===o||l+s/2===a+c/2},m0=function(e,t){var i;return ji.some(function(l){var n=l[Se].options.emptyInsertThreshold;if(!(!n||Ln(l))){var s=ie(l),a=e>=s.left-n&&e<=s.right+n,o=t>=s.top-n&&t<=s.bottom+n;if(a&&o)return i=l}}),i},To=function(e){function t(n,s){return function(a,o,c,d){var h=a.options.group.name&&o.options.group.name&&a.options.group.name===o.options.group.name;if(n==null&&(s||h))return!0;if(n==null||n===!1)return!1;if(s&&n==="clone")return n;if(typeof n=="function")return t(n(a,o,c,d),s)(a,o,c,d);var f=(s?a:o).options.group.name;return n===!0||typeof n=="string"&&n===f||n.join&&n.indexOf(f)>-1}}var i={},l=e.group;(!l||xi(l)!="object")&&(l={name:l}),i.name=l.name,i.checkPull=t(l.pull,!0),i.checkPut=t(l.put),i.revertClone=l.revertClone,e.group=i},Eo=function(){!Mo&&N&&I(N,"display","none")},zo=function(){!Mo&&N&&I(N,"display","")};sl&&!xo&&document.addEventListener("click",function(r){if(Li)return r.preventDefault(),r.stopPropagation&&r.stopPropagation(),r.stopImmediatePropagation&&r.stopImmediatePropagation(),Li=!1,!1},!0);var pt=function(e){if(C){e=e.touches?e.touches[0]:e;var t=m0(e.clientX,e.clientY);if(t){var i={};for(var l in e)e.hasOwnProperty(l)&&(i[l]=e[l]);i.target=i.rootEl=t,i.preventDefault=void 0,i.stopPropagation=void 0,t[Se]._onDragOver(i)}}},g0=function(e){C&&C.parentNode[Se]._isOutsideThisEl(e.target)};function R(r,e){if(!(r&&r.nodeType&&r.nodeType===1))throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(r));this.el=r,this.options=e=Qe({},e),r[Se]=this;var t={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(r.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return Co(r,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(s,a){s.setData("Text",a.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:R.supportPointer!==!1&&"PointerEvent"in window&&!xr,emptyInsertThreshold:5};_r.initializePlugins(this,r,t);for(var i in t)!(i in e)&&(e[i]=t[i]);To(e);for(var l in this)l.charAt(0)==="_"&&typeof this[l]=="function"&&(this[l]=this[l].bind(this));this.nativeDraggable=e.forceFallback?!1:u0,this.nativeDraggable&&(this.options.touchStartThreshold=1),e.supportPointer?q(r,"pointerdown",this._onTapStart):(q(r,"mousedown",this._onTapStart),q(r,"touchstart",this._onTapStart)),this.nativeDraggable&&(q(r,"dragover",this),q(r,"dragenter",this)),ji.push(this.el),e.store&&e.store.get&&this.sort(e.store.get(this)||[]),Qe(this,o0())}R.prototype={constructor:R,_isOutsideThisEl:function(e){!this.el.contains(e)&&e!==this.el&&(Rt=null)},_getDirection:function(e,t){return typeof this.options.direction=="function"?this.options.direction.call(this,e,t,C):this.options.direction},_onTapStart:function(e){if(e.cancelable){var t=this,i=this.el,l=this.options,n=l.preventOnFilter,s=e.type,a=e.touches&&e.touches[0]||e.pointerType&&e.pointerType==="touch"&&e,o=(a||e).target,c=e.target.shadowRoot&&(e.path&&e.path[0]||e.composedPath&&e.composedPath()[0])||o,d=l.filter;if(M0(i),!C&&!(/mousedown|pointerdown/.test(s)&&e.button!==0||l.disabled)&&!c.isContentEditable&&!(!this.nativeDraggable&&xr&&o&&o.tagName.toUpperCase()==="SELECT")&&(o=je(o,l.draggable,i,!1),!(o&&o.animated)&&vi!==o)){if(Ut=Ee(o),yr=Ee(o,l.draggable),typeof d=="function"){if(d.call(this,e,o,this)){ue({sortable:t,rootEl:c,name:"filter",targetEl:o,toEl:i,fromEl:i}),xe("filter",t,{evt:e}),n&&e.cancelable&&e.preventDefault();return}}else if(d&&(d=d.split(",").some(function(h){if(h=je(c,h.trim(),i,!1),h)return ue({sortable:t,rootEl:h,name:"filter",targetEl:o,fromEl:i,toEl:i}),xe("filter",t,{evt:e}),!0}),d)){n&&e.cancelable&&e.preventDefault();return}l.handle&&!je(c,l.handle,i,!1)||this._prepareDragStart(e,a,o)}}},_prepareDragStart:function(e,t,i){var l=this,n=l.el,s=l.options,a=n.ownerDocument,o;if(i&&!C&&i.parentNode===n){var c=ie(i);if(Y=n,C=i,Z=C.parentNode,mt=C.nextSibling,vi=i,Ur=s.group,R.dragged=C,ut={target:C,clientX:(t||e).clientX,clientY:(t||e).clientY},Ts=ut.clientX-c.left,Es=ut.clientY-c.top,this._lastX=(t||e).clientX,this._lastY=(t||e).clientY,C.style["will-change"]="all",o=function(){if(xe("delayEnded",l,{evt:e}),R.eventCanceled){l._onDrop();return}l._disableDelayedDragEvents(),!ks&&l.nativeDraggable&&(C.draggable=!0),l._triggerDragStart(e,t),ue({sortable:l,name:"choose",originalEvent:e}),we(C,s.chosenClass,!0)},s.ignore.split(",").forEach(function(d){yo(C,d.trim(),Sl)}),q(a,"dragover",pt),q(a,"mousemove",pt),q(a,"touchmove",pt),q(a,"mouseup",l._onDrop),q(a,"touchend",l._onDrop),q(a,"touchcancel",l._onDrop),ks&&this.nativeDraggable&&(this.options.touchStartThreshold=4,C.draggable=!0),xe("delayStart",this,{evt:e}),s.delay&&(!s.delayOnTouchOnly||t)&&(!this.nativeDraggable||!(Hr||et))){if(R.eventCanceled){this._onDrop();return}q(a,"mouseup",l._disableDelayedDrag),q(a,"touchend",l._disableDelayedDrag),q(a,"touchcancel",l._disableDelayedDrag),q(a,"mousemove",l._delayedDragTouchMoveHandler),q(a,"touchmove",l._delayedDragTouchMoveHandler),s.supportPointer&&q(a,"pointermove",l._delayedDragTouchMoveHandler),l._dragStartTimer=setTimeout(o,s.delay)}else o()}},_delayedDragTouchMoveHandler:function(e){var t=e.touches?e.touches[0]:e;Math.max(Math.abs(t.clientX-this._lastX),Math.abs(t.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){C&&Sl(C),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var e=this.el.ownerDocument;V(e,"mouseup",this._disableDelayedDrag),V(e,"touchend",this._disableDelayedDrag),V(e,"touchcancel",this._disableDelayedDrag),V(e,"mousemove",this._delayedDragTouchMoveHandler),V(e,"touchmove",this._delayedDragTouchMoveHandler),V(e,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(e,t){t=t||e.pointerType=="touch"&&e,!this.nativeDraggable||t?this.options.supportPointer?q(document,"pointermove",this._onTouchMove):t?q(document,"touchmove",this._onTouchMove):q(document,"mousemove",this._onTouchMove):(q(C,"dragend",this),q(Y,"dragstart",this._onDragStart));try{document.selection?wi(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch{}},_dragStarted:function(e,t){if(Vt=!1,Y&&C){xe("dragStarted",this,{evt:t}),this.nativeDraggable&&q(document,"dragover",g0);var i=this.options;!e&&we(C,i.dragClass,!1),we(C,i.ghostClass,!0),R.active=this,e&&this._appendGhost(),ue({sortable:this,name:"start",originalEvent:t})}else this._nulling()},_emulateDragOver:function(){if(Le){this._lastX=Le.clientX,this._lastY=Le.clientY,Eo();for(var e=document.elementFromPoint(Le.clientX,Le.clientY),t=e;e&&e.shadowRoot&&(e=e.shadowRoot.elementFromPoint(Le.clientX,Le.clientY),e!==t);)t=e;if(C.parentNode[Se]._isOutsideThisEl(e),t)do{if(t[Se]){var i=void 0;if(i=t[Se]._onDragOver({clientX:Le.clientX,clientY:Le.clientY,target:e,rootEl:t}),i&&!this.options.dragoverBubble)break}e=t}while(t=t.parentNode);zo()}},_onTouchMove:function(e){if(ut){var t=this.options,i=t.fallbackTolerance,l=t.fallbackOffset,n=e.touches?e.touches[0]:e,s=N&&Kt(N,!0),a=N&&s&&s.a,o=N&&s&&s.d,c=Jr&&de&&Cs(de),d=(n.clientX-ut.clientX+l.x)/(a||1)+(c?c[0]-kl[0]:0)/(a||1),h=(n.clientY-ut.clientY+l.y)/(o||1)+(c?c[1]-kl[1]:0)/(o||1);if(!R.active&&!Vt){if(i&&Math.max(Math.abs(n.clientX-this._lastX),Math.abs(n.clientY-this._lastY))<i)return;this._onDragStart(e,!0)}if(N){s?(s.e+=d-(wl||0),s.f+=h-(bl||0)):s={a:1,b:0,c:0,d:1,e:d,f:h};var f="matrix(".concat(s.a,",").concat(s.b,",").concat(s.c,",").concat(s.d,",").concat(s.e,",").concat(s.f,")");I(N,"webkitTransform",f),I(N,"mozTransform",f),I(N,"msTransform",f),I(N,"transform",f),wl=d,bl=h,Le=n}e.cancelable&&e.preventDefault()}},_appendGhost:function(){if(!N){var e=this.options.fallbackOnBody?document.body:Y,t=ie(C,!0,Jr,!0,e),i=this.options;if(Jr){for(de=e;I(de,"position")==="static"&&I(de,"transform")==="none"&&de!==document;)de=de.parentNode;de!==document.body&&de!==document.documentElement?(de===document&&(de=He()),t.top+=de.scrollTop,t.left+=de.scrollLeft):de=He(),kl=Cs(de)}N=C.cloneNode(!0),we(N,i.ghostClass,!1),we(N,i.fallbackClass,!0),we(N,i.dragClass,!0),I(N,"transition",""),I(N,"transform",""),I(N,"box-sizing","border-box"),I(N,"margin",0),I(N,"top",t.top),I(N,"left",t.left),I(N,"width",t.width),I(N,"height",t.height),I(N,"opacity","0.8"),I(N,"position",Jr?"absolute":"fixed"),I(N,"zIndex","100000"),I(N,"pointerEvents","none"),R.ghost=N,e.appendChild(N),I(N,"transform-origin",Ts/parseInt(N.style.width)*100+"% "+Es/parseInt(N.style.height)*100+"%")}},_onDragStart:function(e,t){var i=this,l=e.dataTransfer,n=i.options;if(xe("dragStart",this,{evt:e}),R.eventCanceled){this._onDrop();return}xe("setupClone",this),R.eventCanceled||(X=ko(C),X.removeAttribute("id"),X.draggable=!1,X.style["will-change"]="",this._hideClone(),we(X,this.options.chosenClass,!1),R.clone=X),i.cloneId=wi(function(){xe("clone",i),!R.eventCanceled&&(i.options.removeCloneOnHide||Y.insertBefore(X,C),i._hideClone(),ue({sortable:i,name:"clone"}))}),!t&&we(C,n.dragClass,!0),t?(Li=!0,i._loopId=setInterval(i._emulateDragOver,50)):(V(document,"mouseup",i._onDrop),V(document,"touchend",i._onDrop),V(document,"touchcancel",i._onDrop),l&&(l.effectAllowed="move",n.setData&&n.setData.call(i,l,C)),q(document,"drop",i),I(C,"transform","translateZ(0)")),Vt=!0,i._dragStartId=wi(i._dragStarted.bind(i,t,e)),q(document,"selectstart",i),fr=!0,xr&&I(document.body,"user-select","none")},_onDragOver:function(e){var t=this.el,i=e.target,l,n,s,a=this.options,o=a.group,c=R.active,d=Ur===o,h=a.sort,f=se||c,u,p=this,m=!1;if(en)return;function x(j,W){xe(j,p,_e({evt:e,isOwner:d,axis:u?"vertical":"horizontal",revert:s,dragRect:l,targetRect:n,canSort:h,fromSortable:f,target:i,completed:k,onMove:function(te,Ne){return Yr(Y,t,C,l,te,ie(te),e,Ne)},changed:g},W))}function y(){x("dragOverAnimationCapture"),p.captureAnimationState(),p!==f&&f.captureAnimationState()}function k(j){return x("dragOverCompleted",{insertion:j}),j&&(d?c._hideClone():c._showClone(p),p!==f&&(we(C,se?se.options.ghostClass:c.options.ghostClass,!1),we(C,a.ghostClass,!0)),se!==p&&p!==R.active?se=p:p===R.active&&se&&(se=null),f===p&&(p._ignoreWhileAnimating=i),p.animateAll(function(){x("dragOverAnimationComplete"),p._ignoreWhileAnimating=null}),p!==f&&(f.animateAll(),f._ignoreWhileAnimating=null)),(i===C&&!C.animated||i===t&&!i.animated)&&(Rt=null),!a.dragoverBubble&&!e.rootEl&&i!==document&&(C.parentNode[Se]._isOutsideThisEl(e.target),!j&&pt(e)),!a.dragoverBubble&&e.stopPropagation&&e.stopPropagation(),m=!0}function g(){be=Ee(C),rt=Ee(C,a.draggable),ue({sortable:p,name:"change",toEl:t,newIndex:be,newDraggableIndex:rt,originalEvent:e})}if(e.preventDefault!==void 0&&e.cancelable&&e.preventDefault(),i=je(i,a.draggable,t,!0),x("dragOver"),R.eventCanceled)return m;if(C.contains(e.target)||i.animated&&i.animatingX&&i.animatingY||p._ignoreWhileAnimating===i)return k(!1);if(Li=!1,c&&!a.disabled&&(d?h||(s=Z!==Y):se===this||(this.lastPutMode=Ur.checkPull(this,c,C,e))&&o.checkPut(this,c,C,e))){if(u=this._getDirection(e,i)==="vertical",l=ie(C),x("dragOverValid"),R.eventCanceled)return m;if(s)return Z=Y,y(),this._hideClone(),x("revert"),R.eventCanceled||(mt?Y.insertBefore(C,mt):Y.appendChild(C)),k(!0);var b=Ln(t,a.draggable);if(!b||w0(e,u,this)&&!b.animated){if(b===C)return k(!1);if(b&&t===e.target&&(i=b),i&&(n=ie(i)),Yr(Y,t,C,l,i,n,e,!!i)!==!1)return y(),b&&b.nextSibling?t.insertBefore(C,b.nextSibling):t.appendChild(C),Z=t,g(),k(!0)}else if(b&&y0(e,u,this)){var w=tr(t,0,a,!0);if(w===C)return k(!1);if(i=w,n=ie(i),Yr(Y,t,C,l,i,n,e,!1)!==!1)return y(),t.insertBefore(C,w),Z=t,g(),k(!0)}else if(i.parentNode===t){n=ie(i);var T=0,S,z=C.parentNode!==t,B=!p0(C.animated&&C.toRect||l,i.animated&&i.toRect||n,u),E=u?"top":"left",M=Ms(i,"top","top")||Ms(C,"top","top"),A=M?M.scrollTop:void 0;Rt!==i&&(S=n[E],br=!1,Kr=!B&&a.invertSwap||z),T=b0(e,i,n,u,B?1:a.swapThreshold,a.invertedSwapThreshold==null?a.swapThreshold:a.invertedSwapThreshold,Kr,Rt===i);var P;if(T!==0){var F=Ee(C);do F-=T,P=Z.children[F];while(P&&(I(P,"display")==="none"||P===N))}if(T===0||P===i)return k(!1);Rt=i,wr=T;var G=i.nextElementSibling,_=!1;_=T===1;var ee=Yr(Y,t,C,l,i,n,e,_);if(ee!==!1)return(ee===1||ee===-1)&&(_=ee===1),en=!0,setTimeout(v0,30),y(),_&&!G?t.appendChild(C):i.parentNode.insertBefore(C,_?G:i),M&&bo(M,0,A-M.scrollTop),Z=C.parentNode,S!==void 0&&!Kr&&(yi=Math.abs(S-ie(i)[E])),g(),k(!0)}if(t.contains(C))return k(!1)}return!1},_ignoreWhileAnimating:null,_offMoveEvents:function(){V(document,"mousemove",this._onTouchMove),V(document,"touchmove",this._onTouchMove),V(document,"pointermove",this._onTouchMove),V(document,"dragover",pt),V(document,"mousemove",pt),V(document,"touchmove",pt)},_offUpEvents:function(){var e=this.el.ownerDocument;V(e,"mouseup",this._onDrop),V(e,"touchend",this._onDrop),V(e,"pointerup",this._onDrop),V(e,"touchcancel",this._onDrop),V(document,"selectstart",this)},_onDrop:function(e){var t=this.el,i=this.options;if(be=Ee(C),rt=Ee(C,i.draggable),xe("drop",this,{evt:e}),Z=C&&C.parentNode,be=Ee(C),rt=Ee(C,i.draggable),R.eventCanceled){this._nulling();return}Vt=!1,Kr=!1,br=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),tn(this.cloneId),tn(this._dragStartId),this.nativeDraggable&&(V(document,"drop",this),V(t,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),xr&&I(document.body,"user-select",""),I(C,"transform",""),e&&(fr&&(e.cancelable&&e.preventDefault(),!i.dropBubble&&e.stopPropagation()),N&&N.parentNode&&N.parentNode.removeChild(N),(Y===Z||se&&se.lastPutMode!=="clone")&&X&&X.parentNode&&X.parentNode.removeChild(X),C&&(this.nativeDraggable&&V(C,"dragend",this),Sl(C),C.style["will-change"]="",fr&&!Vt&&we(C,se?se.options.ghostClass:this.options.ghostClass,!1),we(C,this.options.chosenClass,!1),ue({sortable:this,name:"unchoose",toEl:Z,newIndex:null,newDraggableIndex:null,originalEvent:e}),Y!==Z?(be>=0&&(ue({rootEl:Z,name:"add",toEl:Z,fromEl:Y,originalEvent:e}),ue({sortable:this,name:"remove",toEl:Z,originalEvent:e}),ue({rootEl:Z,name:"sort",toEl:Z,fromEl:Y,originalEvent:e}),ue({sortable:this,name:"sort",toEl:Z,originalEvent:e})),se&&se.save()):be!==Ut&&be>=0&&(ue({sortable:this,name:"update",toEl:Z,originalEvent:e}),ue({sortable:this,name:"sort",toEl:Z,originalEvent:e})),R.active&&((be==null||be===-1)&&(be=Ut,rt=yr),ue({sortable:this,name:"end",toEl:Z,originalEvent:e}),this.save()))),this._nulling()},_nulling:function(){xe("nulling",this),Y=C=Z=N=mt=X=vi=lt=ut=Le=fr=be=rt=Ut=yr=Rt=wr=se=Ur=R.dragged=R.ghost=R.clone=R.active=null,Bi.forEach(function(e){e.checked=!0}),Bi.length=wl=bl=0},handleEvent:function(e){switch(e.type){case"drop":case"dragend":this._onDrop(e);break;case"dragenter":case"dragover":C&&(this._onDragOver(e),x0(e));break;case"selectstart":e.preventDefault();break}},toArray:function(){for(var e=[],t,i=this.el.children,l=0,n=i.length,s=this.options;l<n;l++)t=i[l],je(t,s.draggable,this.el,!1)&&e.push(t.getAttribute(s.dataIdAttr)||S0(t));return e},sort:function(e,t){var i={},l=this.el;this.toArray().forEach(function(n,s){var a=l.children[s];je(a,this.options.draggable,l,!1)&&(i[n]=a)},this),t&&this.captureAnimationState(),e.forEach(function(n){i[n]&&(l.removeChild(i[n]),l.appendChild(i[n]))}),t&&this.animateAll()},save:function(){var e=this.options.store;e&&e.set&&e.set(this)},closest:function(e,t){return je(e,t||this.options.draggable,this.el,!1)},option:function(e,t){var i=this.options;if(t===void 0)return i[e];var l=_r.modifyOption(this,e,t);typeof l<"u"?i[e]=l:i[e]=t,e==="group"&&To(i)},destroy:function(){xe("destroy",this);var e=this.el;e[Se]=null,V(e,"mousedown",this._onTapStart),V(e,"touchstart",this._onTapStart),V(e,"pointerdown",this._onTapStart),this.nativeDraggable&&(V(e,"dragover",this),V(e,"dragenter",this)),Array.prototype.forEach.call(e.querySelectorAll("[draggable]"),function(t){t.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),ji.splice(ji.indexOf(this.el),1),this.el=e=null},_hideClone:function(){if(!lt){if(xe("hideClone",this),R.eventCanceled)return;I(X,"display","none"),this.options.removeCloneOnHide&&X.parentNode&&X.parentNode.removeChild(X),lt=!0}},_showClone:function(e){if(e.lastPutMode!=="clone"){this._hideClone();return}if(lt){if(xe("showClone",this),R.eventCanceled)return;C.parentNode==Y&&!this.options.group.revertClone?Y.insertBefore(X,C):mt?Y.insertBefore(X,mt):Y.appendChild(X),this.options.group.revertClone&&this.animate(C,X),I(X,"display",""),lt=!1}}};function x0(r){r.dataTransfer&&(r.dataTransfer.dropEffect="move"),r.cancelable&&r.preventDefault()}function Yr(r,e,t,i,l,n,s,a){var o,c=r[Se],d=c.options.onMove,h;return window.CustomEvent&&!et&&!Hr?o=new CustomEvent("move",{bubbles:!0,cancelable:!0}):(o=document.createEvent("Event"),o.initEvent("move",!0,!0)),o.to=e,o.from=r,o.dragged=t,o.draggedRect=i,o.related=l||e,o.relatedRect=n||ie(e),o.willInsertAfter=a,o.originalEvent=s,r.dispatchEvent(o),d&&(h=d.call(c,o,s)),h}function Sl(r){r.draggable=!1}function v0(){en=!1}function y0(r,e,t){var i=ie(tr(t.el,0,t.options,!0)),l=So(t.el,t.options,N),n=10;return e?r.clientX<l.left-n||r.clientY<i.top&&r.clientX<i.right:r.clientY<l.top-n||r.clientY<i.bottom&&r.clientX<i.left}function w0(r,e,t){var i=ie(Ln(t.el,t.options.draggable)),l=So(t.el,t.options,N),n=10;return e?r.clientX>l.right+n||r.clientY>i.bottom&&r.clientX>i.left:r.clientY>l.bottom+n||r.clientX>i.right&&r.clientY>i.top}function b0(r,e,t,i,l,n,s,a){var o=i?r.clientY:r.clientX,c=i?t.height:t.width,d=i?t.top:t.left,h=i?t.bottom:t.right,f=!1;if(!s){if(a&&yi<c*l){if(!br&&(wr===1?o>d+c*n/2:o<h-c*n/2)&&(br=!0),br)f=!0;else if(wr===1?o<d+yi:o>h-yi)return-wr}else if(o>d+c*(1-l)/2&&o<h-c*(1-l)/2)return k0(e)}return f=f||s,f&&(o<d+c*n/2||o>h-c*n/2)?o>d+c/2?1:-1:0}function k0(r){return Ee(C)<Ee(r)?1:-1}function S0(r){for(var e=r.tagName+r.className+r.src+r.href+r.textContent,t=e.length,i=0;t--;)i+=e.charCodeAt(t);return i.toString(36)}function M0(r){Bi.length=0;for(var e=r.getElementsByTagName("input"),t=e.length;t--;){var i=e[t];i.checked&&Bi.push(i)}}function wi(r){return setTimeout(r,0)}function tn(r){return clearTimeout(r)}sl&&q(document,"touchmove",function(r){(R.active||Vt)&&r.cancelable&&r.preventDefault()});R.utils={on:q,off:V,css:I,find:yo,is:function(e,t){return!!je(e,t,e,!1)},extend:s0,throttle:wo,closest:je,toggleClass:we,clone:ko,index:Ee,nextTick:wi,cancelNextTick:tn,detectDirection:Co,getChild:tr};R.get=function(r){return r[Se]};R.mount=function(){for(var r=arguments.length,e=new Array(r),t=0;t<r;t++)e[t]=arguments[t];e[0].constructor===Array&&(e=e[0]),e.forEach(function(i){if(!i.prototype||!i.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(i));i.utils&&(R.utils=_e(_e({},R.utils),i.utils)),_r.mount(i)})};R.create=function(r,e){return new R(r,e)};R.version=i0;var re=[],ur,rn,ln=!1,Ml,Cl,Pi,pr;function C0(){function r(){this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0};for(var e in this)e.charAt(0)==="_"&&typeof this[e]=="function"&&(this[e]=this[e].bind(this))}return r.prototype={dragStarted:function(t){var i=t.originalEvent;this.sortable.nativeDraggable?q(document,"dragover",this._handleAutoScroll):this.options.supportPointer?q(document,"pointermove",this._handleFallbackAutoScroll):i.touches?q(document,"touchmove",this._handleFallbackAutoScroll):q(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(t){var i=t.originalEvent;!this.options.dragOverBubble&&!i.rootEl&&this._handleAutoScroll(i)},drop:function(){this.sortable.nativeDraggable?V(document,"dragover",this._handleAutoScroll):(V(document,"pointermove",this._handleFallbackAutoScroll),V(document,"touchmove",this._handleFallbackAutoScroll),V(document,"mousemove",this._handleFallbackAutoScroll)),As(),bi(),a0()},nulling:function(){Pi=rn=ur=ln=pr=Ml=Cl=null,re.length=0},_handleFallbackAutoScroll:function(t){this._handleAutoScroll(t,!0)},_handleAutoScroll:function(t,i){var l=this,n=(t.touches?t.touches[0]:t).clientX,s=(t.touches?t.touches[0]:t).clientY,a=document.elementFromPoint(n,s);if(Pi=t,i||this.options.forceAutoScrollFallback||Hr||et||xr){Tl(t,this.options,a,i);var o=st(a,!0);ln&&(!pr||n!==Ml||s!==Cl)&&(pr&&As(),pr=setInterval(function(){var c=st(document.elementFromPoint(n,s),!0);c!==o&&(o=c,bi()),Tl(t,l.options,c,i)},10),Ml=n,Cl=s)}else{if(!this.options.bubbleScroll||st(a,!0)===He()){bi();return}Tl(t,this.options,st(a,!1),!1)}}},Qe(r,{pluginName:"scroll",initializeByDefault:!0})}function bi(){re.forEach(function(r){clearInterval(r.pid)}),re=[]}function As(){clearInterval(pr)}var Tl=wo(function(r,e,t,i){if(e.scroll){var l=(r.touches?r.touches[0]:r).clientX,n=(r.touches?r.touches[0]:r).clientY,s=e.scrollSensitivity,a=e.scrollSpeed,o=He(),c=!1,d;rn!==t&&(rn=t,bi(),ur=e.scroll,d=e.scrollFn,ur===!0&&(ur=st(t,!0)));var h=0,f=ur;do{var u=f,p=ie(u),m=p.top,x=p.bottom,y=p.left,k=p.right,g=p.width,b=p.height,w=void 0,T=void 0,S=u.scrollWidth,z=u.scrollHeight,B=I(u),E=u.scrollLeft,M=u.scrollTop;u===o?(w=g<S&&(B.overflowX==="auto"||B.overflowX==="scroll"||B.overflowX==="visible"),T=b<z&&(B.overflowY==="auto"||B.overflowY==="scroll"||B.overflowY==="visible")):(w=g<S&&(B.overflowX==="auto"||B.overflowX==="scroll"),T=b<z&&(B.overflowY==="auto"||B.overflowY==="scroll"));var A=w&&(Math.abs(k-l)<=s&&E+g<S)-(Math.abs(y-l)<=s&&!!E),P=T&&(Math.abs(x-n)<=s&&M+b<z)-(Math.abs(m-n)<=s&&!!M);if(!re[h])for(var F=0;F<=h;F++)re[F]||(re[F]={});(re[h].vx!=A||re[h].vy!=P||re[h].el!==u)&&(re[h].el=u,re[h].vx=A,re[h].vy=P,clearInterval(re[h].pid),(A!=0||P!=0)&&(c=!0,re[h].pid=setInterval((function(){i&&this.layer===0&&R.active._onTouchMove(Pi);var G=re[this.layer].vy?re[this.layer].vy*a:0,_=re[this.layer].vx?re[this.layer].vx*a:0;typeof d=="function"&&d.call(R.dragged.parentNode[Se],_,G,r,Pi,re[this.layer].el)!=="continue"||bo(re[this.layer].el,_,G)}).bind({layer:h}),24))),h++}while(e.bubbleScroll&&f!==o&&(f=st(f,!1)));ln=c}},30),Ao=function(e){var t=e.originalEvent,i=e.putSortable,l=e.dragEl,n=e.activeSortable,s=e.dispatchSortableEvent,a=e.hideGhostForTarget,o=e.unhideGhostForTarget;if(t){var c=i||n;a();var d=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:t,h=document.elementFromPoint(d.clientX,d.clientY);o(),c&&!c.el.contains(h)&&(s("spill"),this.onSpill({dragEl:l,putSortable:i}))}};function jn(){}jn.prototype={startIndex:null,dragStart:function(e){var t=e.oldDraggableIndex;this.startIndex=t},onSpill:function(e){var t=e.dragEl,i=e.putSortable;this.sortable.captureAnimationState(),i&&i.captureAnimationState();var l=tr(this.sortable.el,this.startIndex,this.options);l?this.sortable.el.insertBefore(t,l):this.sortable.el.appendChild(t),this.sortable.animateAll(),i&&i.animateAll()},drop:Ao};Qe(jn,{pluginName:"revertOnSpill"});function Bn(){}Bn.prototype={onSpill:function(e){var t=e.dragEl,i=e.putSortable,l=i||this.sortable;l.captureAnimationState(),t.parentNode&&t.parentNode.removeChild(t),l.animateAll()},drop:Ao};Qe(Bn,{pluginName:"removeOnSpill"});R.mount(new C0);R.mount(Bn,jn);var T0=R;function nn(r,e){if(typeof ShadowRoot=="function"&&r instanceof ShadowRoot){Array.from(r.children).forEach(l=>nn(l,e));return}let t=!1;if(e(r,()=>t=!0),t)return;let i=r.firstElementChild;for(;i;)nn(i,e),i=i.nextElementSibling}function E0(r){r.directive("sort",(e,{value:t,modifiers:i,expression:l},{effect:n,evaluate:s,cleanup:a})=>{if(t==="config"||t==="handle"||t==="group")return;if(t==="key"||t==="item"){if([void 0,null,""].includes(l))return;e._x_sort_key=s(l);return}let o={hideGhost:!i.includes("ghost"),useHandles:!!e.querySelector("[x-sort\\:handle],[wire\\:sort\\:handle]"),group:j0(e,i)},c=z0(l,s),d=A0(e,i,s),h=O0(e,d,o,(f,u)=>{c(f,u)});a(()=>h.destroy())})}function z0(r,e){return[void 0,null,""].includes(r)?()=>{}:(t,i)=>{e(r,{scope:{$key:t,$item:t,$position:i},params:[t,i]})}}function A0(r,e,t){return r.hasAttribute("x-sort:config")?t(r.getAttribute("x-sort:config")):r.hasAttribute("wire:sort:config")?t(r.getAttribute("wire:sort:config")):{}}function O0(r,e,t,i){let l,n={animation:150,handle:t.useHandles?"[x-sort\\:handle],[wire\\:sort\\:handle]":null,group:t.group,scroll:!0,forceAutoScrollFallback:!0,scrollSensitivity:50,preventOnFilter:!1,filter(s){return s.target.hasAttribute("x-sort:ignore")||s.target.hasAttribute("wire:sort:ignore")||s.target.closest("[x-sort\\:ignore]")||s.target.closest("[wire\\:sort\\:ignore]")?!0:r.querySelector("[x-sort\\:item],[wire\\:sort\\:item]")?!s.target.closest("[x-sort\\:item],[wire\\:sort\\:item]"):!1},onSort(s){if(s.from!==s.to&&s.to!==s.target)return;let a;nn(s.item,(c,d)=>{a===void 0&&c._x_sort_key&&(a=c._x_sort_key,d())});let o=s.newIndex;(a!==void 0||a!==null)&&i(a,o)},onStart(){document.body.classList.add("sorting"),l=document.querySelector(".sortable-ghost"),t.hideGhost&&l&&(l.style.opacity="0")},onEnd(){document.body.classList.remove("sorting"),t.hideGhost&&l&&(l.style.opacity="1"),l=void 0,L0(r)}};return new T0(r,{...n,...e})}function L0(r){let e=r.firstChild;for(;e.nextSibling;){if(e.textContent.trim()==="[if ENDBLOCK]><![endif]"){r.append(e);break}e=e.nextSibling}}function j0(r,e){return r.hasAttribute("x-sort:group")?r.getAttribute("x-sort:group"):r.hasAttribute("wire:sort:group")?r.getAttribute("wire:sort:group"):e.indexOf("group")!==-1?e[e.indexOf("group")+1]:null}var B0=E0;/*! Bundled license information:

sortablejs/modular/sortable.esm.js:
  (**!
   * Sortable 1.15.2
   * @author	RubaXa   <trash@rubaxa.org>
   * @author	owenm    <owen23355@gmail.com>
   * @license MIT
   *)
*/function Os(r){return r!==null&&typeof r=="object"&&"constructor"in r&&r.constructor===Object}function Pn(r={},e={}){const t=["__proto__","constructor","prototype"];Object.keys(e).filter(i=>t.indexOf(i)<0).forEach(i=>{typeof r[i]>"u"?r[i]=e[i]:Os(e[i])&&Os(r[i])&&Object.keys(e[i]).length>0&&Pn(r[i],e[i])})}const Oo={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function jt(){const r=typeof document<"u"?document:{};return Pn(r,Oo),r}const P0={document:Oo,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(r){return typeof setTimeout>"u"?(r(),null):setTimeout(r,0)},cancelAnimationFrame(r){typeof setTimeout>"u"||clearTimeout(r)}};function ge(){const r=typeof window<"u"?window:{};return Pn(r,P0),r}function I0(r=""){return r.trim().split(" ").filter(e=>!!e.trim())}function R0(r){const e=r;Object.keys(e).forEach(t=>{try{e[t]=null}catch{}try{delete e[t]}catch{}})}function Lo(r,e=0){return setTimeout(r,e)}function Ii(){return Date.now()}function D0(r){const e=ge();let t;return e.getComputedStyle&&(t=e.getComputedStyle(r,null)),!t&&r.currentStyle&&(t=r.currentStyle),t||(t=r.style),t}function N0(r,e="x"){const t=ge();let i,l,n;const s=D0(r);return t.WebKitCSSMatrix?(l=s.transform||s.webkitTransform,l.split(",").length>6&&(l=l.split(", ").map(a=>a.replace(",",".")).join(", ")),n=new t.WebKitCSSMatrix(l==="none"?"":l)):(n=s.MozTransform||s.OTransform||s.MsTransform||s.msTransform||s.transform||s.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),i=n.toString().split(",")),e==="x"&&(t.WebKitCSSMatrix?l=n.m41:i.length===16?l=parseFloat(i[12]):l=parseFloat(i[4])),e==="y"&&(t.WebKitCSSMatrix?l=n.m42:i.length===16?l=parseFloat(i[13]):l=parseFloat(i[5])),l||0}function Xr(r){return typeof r=="object"&&r!==null&&r.constructor&&Object.prototype.toString.call(r).slice(8,-1)==="Object"}function F0(r){return typeof window<"u"&&typeof window.HTMLElement<"u"?r instanceof HTMLElement:r&&(r.nodeType===1||r.nodeType===11)}function ke(...r){const e=Object(r[0]);for(let t=1;t<r.length;t+=1){const i=r[t];if(i!=null&&!F0(i)){const l=Object.keys(Object(i)).filter(n=>n!=="__proto__"&&n!=="constructor"&&n!=="prototype");for(let n=0,s=l.length;n<s;n+=1){const a=l[n],o=Object.getOwnPropertyDescriptor(i,a);o!==void 0&&o.enumerable&&(Xr(e[a])&&Xr(i[a])?i[a].__swiper__?e[a]=i[a]:ke(e[a],i[a]):!Xr(e[a])&&Xr(i[a])?(e[a]={},i[a].__swiper__?e[a]=i[a]:ke(e[a],i[a])):e[a]=i[a])}}}return e}function Dt(r,e,t){r.style.setProperty(e,t)}function jo({swiper:r,targetPosition:e,side:t}){const i=ge(),l=-r.translate;let n=null,s;const a=r.params.speed;r.wrapperEl.style.scrollSnapType="none",i.cancelAnimationFrame(r.cssModeFrameID);const o=e>l?"next":"prev",c=(h,f)=>o==="next"&&h>=f||o==="prev"&&h<=f,d=()=>{s=new Date().getTime(),n===null&&(n=s);const h=Math.max(Math.min((s-n)/a,1),0),f=.5-Math.cos(h*Math.PI)/2;let u=l+f*(e-l);if(c(u,e)&&(u=e),r.wrapperEl.scrollTo({[t]:u}),c(u,e)){r.wrapperEl.style.overflow="hidden",r.wrapperEl.style.scrollSnapType="",setTimeout(()=>{r.wrapperEl.style.overflow="",r.wrapperEl.scrollTo({[t]:u})}),i.cancelAnimationFrame(r.cssModeFrameID);return}r.cssModeFrameID=i.requestAnimationFrame(d)};d()}function Ke(r,e=""){const t=ge(),i=[...r.children];return t.HTMLSlotElement&&r instanceof HTMLSlotElement&&i.push(...r.assignedElements()),e?i.filter(l=>l.matches(e)):i}function H0(r,e){const t=[e];for(;t.length>0;){const i=t.shift();if(r===i)return!0;t.push(...i.children,...i.shadowRoot?i.shadowRoot.children:[],...i.assignedElements?i.assignedElements():[])}}function _0(r,e){const t=ge();let i=e.contains(r);return!i&&t.HTMLSlotElement&&e instanceof HTMLSlotElement&&(i=[...e.assignedElements()].includes(r),i||(i=H0(r,e))),i}function Ri(r){try{console.warn(r);return}catch{}}function sn(r,e=[]){const t=document.createElement(r);return t.classList.add(...Array.isArray(e)?e:I0(e)),t}function $0(r,e){const t=[];for(;r.previousElementSibling;){const i=r.previousElementSibling;e?i.matches(e)&&t.push(i):t.push(i),r=i}return t}function V0(r,e){const t=[];for(;r.nextElementSibling;){const i=r.nextElementSibling;e?i.matches(e)&&t.push(i):t.push(i),r=i}return t}function at(r,e){return ge().getComputedStyle(r,null).getPropertyValue(e)}function Ls(r){let e=r,t;if(e){for(t=0;(e=e.previousSibling)!==null;)e.nodeType===1&&(t+=1);return t}}function G0(r,e){const t=[];let i=r.parentElement;for(;i;)t.push(i),i=i.parentElement;return t}function js(r,e,t){const i=ge();return r[e==="width"?"offsetWidth":"offsetHeight"]+parseFloat(i.getComputedStyle(r,null).getPropertyValue(e==="width"?"margin-right":"margin-top"))+parseFloat(i.getComputedStyle(r,null).getPropertyValue(e==="width"?"margin-left":"margin-bottom"))}let El;function q0(){const r=ge(),e=jt();return{smoothScroll:e.documentElement&&e.documentElement.style&&"scrollBehavior"in e.documentElement.style,touch:!!("ontouchstart"in r||r.DocumentTouch&&e instanceof r.DocumentTouch)}}function Bo(){return El||(El=q0()),El}let zl;function W0({userAgent:r}={}){const e=Bo(),t=ge(),i=t.navigator.platform,l=r||t.navigator.userAgent,n={ios:!1,android:!1},s=t.screen.width,a=t.screen.height,o=l.match(/(Android);?[\s\/]+([\d.]+)?/);let c=l.match(/(iPad)(?!\1).*OS\s([\d_]+)/);const d=l.match(/(iPod)(.*OS\s([\d_]+))?/),h=!c&&l.match(/(iPhone\sOS|iOS)\s([\d_]+)/),f=i==="Win32";let u=i==="MacIntel";const p=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!c&&u&&e.touch&&p.indexOf(`${s}x${a}`)>=0&&(c=l.match(/(Version)\/([\d.]+)/),c||(c=[0,1,"13_0_0"]),u=!1),o&&!f&&(n.os="android",n.android=!0),(c||h||d)&&(n.os="ios",n.ios=!0),n}function Po(r={}){return zl||(zl=W0(r)),zl}let Al;function U0(){const r=ge(),e=Po();let t=!1;function i(){const a=r.navigator.userAgent.toLowerCase();return a.indexOf("safari")>=0&&a.indexOf("chrome")<0&&a.indexOf("android")<0}if(i()){const a=String(r.navigator.userAgent);if(a.includes("Version/")){const[o,c]=a.split("Version/")[1].split(" ")[0].split(".").map(d=>Number(d));t=o<16||o===16&&c<2}}const l=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(r.navigator.userAgent),n=i(),s=n||l&&e.ios;return{isSafari:t||n,needPerspectiveFix:t,need3dFix:s,isWebView:l}}function Io(){return Al||(Al=U0()),Al}function K0({swiper:r,on:e,emit:t}){const i=ge();let l=null,n=null;const s=()=>{!r||r.destroyed||!r.initialized||(t("beforeResize"),t("resize"))},a=()=>{!r||r.destroyed||!r.initialized||(l=new ResizeObserver(d=>{n=i.requestAnimationFrame(()=>{const{width:h,height:f}=r;let u=h,p=f;d.forEach(({contentBoxSize:m,contentRect:x,target:y})=>{y&&y!==r.el||(u=x?x.width:(m[0]||m).inlineSize,p=x?x.height:(m[0]||m).blockSize)}),(u!==h||p!==f)&&s()})}),l.observe(r.el))},o=()=>{n&&i.cancelAnimationFrame(n),l&&l.unobserve&&r.el&&(l.unobserve(r.el),l=null)},c=()=>{!r||r.destroyed||!r.initialized||t("orientationchange")};e("init",()=>{if(r.params.resizeObserver&&typeof i.ResizeObserver<"u"){a();return}i.addEventListener("resize",s),i.addEventListener("orientationchange",c)}),e("destroy",()=>{o(),i.removeEventListener("resize",s),i.removeEventListener("orientationchange",c)})}function J0({swiper:r,extendParams:e,on:t,emit:i}){const l=[],n=ge(),s=(c,d={})=>{const h=n.MutationObserver||n.WebkitMutationObserver,f=new h(u=>{if(r.__preventObserver__)return;if(u.length===1){i("observerUpdate",u[0]);return}const p=function(){i("observerUpdate",u[0])};n.requestAnimationFrame?n.requestAnimationFrame(p):n.setTimeout(p,0)});f.observe(c,{attributes:typeof d.attributes>"u"?!0:d.attributes,childList:r.isElement||(typeof d.childList>"u"?!0:d).childList,characterData:typeof d.characterData>"u"?!0:d.characterData}),l.push(f)},a=()=>{if(r.params.observer){if(r.params.observeParents){const c=G0(r.hostEl);for(let d=0;d<c.length;d+=1)s(c[d])}s(r.hostEl,{childList:r.params.observeSlideChildren}),s(r.wrapperEl,{attributes:!1})}},o=()=>{l.forEach(c=>{c.disconnect()}),l.splice(0,l.length)};e({observer:!1,observeParents:!1,observeSlideChildren:!1}),t("init",a),t("destroy",o)}var Y0={on(r,e,t){const i=this;if(!i.eventsListeners||i.destroyed||typeof e!="function")return i;const l=t?"unshift":"push";return r.split(" ").forEach(n=>{i.eventsListeners[n]||(i.eventsListeners[n]=[]),i.eventsListeners[n][l](e)}),i},once(r,e,t){const i=this;if(!i.eventsListeners||i.destroyed||typeof e!="function")return i;function l(...n){i.off(r,l),l.__emitterProxy&&delete l.__emitterProxy,e.apply(i,n)}return l.__emitterProxy=e,i.on(r,l,t)},onAny(r,e){const t=this;if(!t.eventsListeners||t.destroyed||typeof r!="function")return t;const i=e?"unshift":"push";return t.eventsAnyListeners.indexOf(r)<0&&t.eventsAnyListeners[i](r),t},offAny(r){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsAnyListeners)return e;const t=e.eventsAnyListeners.indexOf(r);return t>=0&&e.eventsAnyListeners.splice(t,1),e},off(r,e){const t=this;return!t.eventsListeners||t.destroyed||!t.eventsListeners||r.split(" ").forEach(i=>{typeof e>"u"?t.eventsListeners[i]=[]:t.eventsListeners[i]&&t.eventsListeners[i].forEach((l,n)=>{(l===e||l.__emitterProxy&&l.__emitterProxy===e)&&t.eventsListeners[i].splice(n,1)})}),t},emit(...r){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsListeners)return e;let t,i,l;return typeof r[0]=="string"||Array.isArray(r[0])?(t=r[0],i=r.slice(1,r.length),l=e):(t=r[0].events,i=r[0].data,l=r[0].context||e),i.unshift(l),(Array.isArray(t)?t:t.split(" ")).forEach(s=>{e.eventsAnyListeners&&e.eventsAnyListeners.length&&e.eventsAnyListeners.forEach(a=>{a.apply(l,[s,...i])}),e.eventsListeners&&e.eventsListeners[s]&&e.eventsListeners[s].forEach(a=>{a.apply(l,i)})}),e}};function X0(){const r=this;let e,t;const i=r.el;typeof r.params.width<"u"&&r.params.width!==null?e=r.params.width:e=i.clientWidth,typeof r.params.height<"u"&&r.params.height!==null?t=r.params.height:t=i.clientHeight,!(e===0&&r.isHorizontal()||t===0&&r.isVertical())&&(e=e-parseInt(at(i,"padding-left")||0,10)-parseInt(at(i,"padding-right")||0,10),t=t-parseInt(at(i,"padding-top")||0,10)-parseInt(at(i,"padding-bottom")||0,10),Number.isNaN(e)&&(e=0),Number.isNaN(t)&&(t=0),Object.assign(r,{width:e,height:t,size:r.isHorizontal()?e:t}))}function Z0(){const r=this;function e(E,M){return parseFloat(E.getPropertyValue(r.getDirectionLabel(M))||0)}const t=r.params,{wrapperEl:i,slidesEl:l,rtlTranslate:n,wrongRTL:s}=r,a=r.virtual&&t.virtual.enabled,o=a?r.virtual.slides.length:r.slides.length,c=Ke(l,`.${r.params.slideClass}, swiper-slide`),d=a?r.virtual.slides.length:c.length;let h=[];const f=[],u=[];let p=t.slidesOffsetBefore;typeof p=="function"&&(p=t.slidesOffsetBefore.call(r));let m=t.slidesOffsetAfter;typeof m=="function"&&(m=t.slidesOffsetAfter.call(r));const x=r.snapGrid.length,y=r.slidesGrid.length,k=r.size-p-m;let g=t.spaceBetween,b=-p,w=0,T=0;if(typeof k>"u")return;typeof g=="string"&&g.indexOf("%")>=0?g=parseFloat(g.replace("%",""))/100*k:typeof g=="string"&&(g=parseFloat(g)),r.virtualSize=-g-p-m,c.forEach(E=>{n?E.style.marginLeft="":E.style.marginRight="",E.style.marginBottom="",E.style.marginTop=""}),t.centeredSlides&&t.cssMode&&(Dt(i,"--swiper-centered-offset-before",""),Dt(i,"--swiper-centered-offset-after","")),t.cssMode&&(Dt(i,"--swiper-slides-offset-before",`${p}px`),Dt(i,"--swiper-slides-offset-after",`${m}px`));const S=t.grid&&t.grid.rows>1&&r.grid;S?r.grid.initSlides(c):r.grid&&r.grid.unsetSlides();let z;const B=t.slidesPerView==="auto"&&t.breakpoints&&Object.keys(t.breakpoints).filter(E=>typeof t.breakpoints[E].slidesPerView<"u").length>0;for(let E=0;E<d;E+=1){z=0;const M=c[E];if(!(M&&(S&&r.grid.updateSlide(E,M,c),at(M,"display")==="none"))){if(a&&t.slidesPerView==="auto")t.virtual.slidesPerViewAutoSlideSize&&(z=t.virtual.slidesPerViewAutoSlideSize),z&&M&&(t.roundLengths&&(z=Math.floor(z)),M.style[r.getDirectionLabel("width")]=`${z}px`);else if(t.slidesPerView==="auto"){B&&(M.style[r.getDirectionLabel("width")]="");const A=getComputedStyle(M),P=M.style.transform,F=M.style.webkitTransform;if(P&&(M.style.transform="none"),F&&(M.style.webkitTransform="none"),t.roundLengths)z=r.isHorizontal()?js(M,"width"):js(M,"height");else{const G=e(A,"width"),_=e(A,"padding-left"),ee=e(A,"padding-right"),j=e(A,"margin-left"),W=e(A,"margin-right"),U=A.getPropertyValue("box-sizing");if(U&&U==="border-box")z=G+j+W;else{const{clientWidth:te,offsetWidth:Ne}=M;z=G+_+ee+j+W+(Ne-te)}}P&&(M.style.transform=P),F&&(M.style.webkitTransform=F),t.roundLengths&&(z=Math.floor(z))}else z=(k-(t.slidesPerView-1)*g)/t.slidesPerView,t.roundLengths&&(z=Math.floor(z)),M&&(M.style[r.getDirectionLabel("width")]=`${z}px`);M&&(M.swiperSlideSize=z),u.push(z),t.centeredSlides?(b=b+z/2+w/2+g,w===0&&E!==0&&(b=b-k/2-g),E===0&&(b=b-k/2-g),Math.abs(b)<1/1e3&&(b=0),t.roundLengths&&(b=Math.floor(b)),T%t.slidesPerGroup===0&&h.push(b),f.push(b)):(t.roundLengths&&(b=Math.floor(b)),(T-Math.min(r.params.slidesPerGroupSkip,T))%r.params.slidesPerGroup===0&&h.push(b),f.push(b),b=b+z+g),r.virtualSize+=z+g,w=z,T+=1}}if(r.virtualSize=Math.max(r.virtualSize,k)+m,n&&s&&(t.effect==="slide"||t.effect==="coverflow")&&(i.style.width=`${r.virtualSize+g}px`),t.setWrapperSize&&(i.style[r.getDirectionLabel("width")]=`${r.virtualSize+g}px`),S&&r.grid.updateWrapperSize(z,h),!t.centeredSlides){const E=t.slidesPerView!=="auto"&&t.slidesPerView%1!==0,M=t.snapToSlideEdge&&!t.loop&&(t.slidesPerView==="auto"||E);let A=h.length;if(M){let F;if(t.slidesPerView==="auto"){F=1;let G=0;for(let _=u.length-1;_>=0&&(G+=u[_]+(_<u.length-1?g:0),G<=k);_-=1)F=u.length-_}else F=Math.floor(t.slidesPerView);A=Math.max(d-F,0)}const P=[];for(let F=0;F<h.length;F+=1){let G=h[F];t.roundLengths&&(G=Math.floor(G)),M?F<=A&&P.push(G):h[F]<=r.virtualSize-k&&P.push(G)}h=P,Math.floor(r.virtualSize-k)-Math.floor(h[h.length-1])>1&&(M||h.push(r.virtualSize-k))}if(a&&t.loop){const E=u[0]+g;if(t.slidesPerGroup>1){const M=Math.ceil((r.virtual.slidesBefore+r.virtual.slidesAfter)/t.slidesPerGroup),A=E*t.slidesPerGroup;for(let P=0;P<M;P+=1)h.push(h[h.length-1]+A)}for(let M=0;M<r.virtual.slidesBefore+r.virtual.slidesAfter;M+=1)t.slidesPerGroup===1&&h.push(h[h.length-1]+E),f.push(f[f.length-1]+E),r.virtualSize+=E}if(h.length===0&&(h=[0]),g!==0){const E=r.isHorizontal()&&n?"marginLeft":r.getDirectionLabel("marginRight");c.filter((M,A)=>!t.cssMode||t.loop?!0:A!==c.length-1).forEach(M=>{M.style[E]=`${g}px`})}if(t.centeredSlides&&t.centeredSlidesBounds){let E=0;u.forEach(A=>{E+=A+(g||0)}),E-=g;const M=E>k?E-k:0;h=h.map(A=>A<=0?-p:A>M?M+m:A)}if(t.centerInsufficientSlides){let E=0;if(u.forEach(M=>{E+=M+(g||0)}),E-=g,E<k){const M=(k-E)/2;h.forEach((A,P)=>{h[P]=A-M}),f.forEach((A,P)=>{f[P]=A+M})}}if(Object.assign(r,{slides:c,snapGrid:h,slidesGrid:f,slidesSizesGrid:u}),t.centeredSlides&&t.cssMode&&!t.centeredSlidesBounds){Dt(i,"--swiper-centered-offset-before",`${-h[0]}px`),Dt(i,"--swiper-centered-offset-after",`${r.size/2-u[u.length-1]/2}px`);const E=-r.snapGrid[0],M=-r.slidesGrid[0];r.snapGrid=r.snapGrid.map(A=>A+E),r.slidesGrid=r.slidesGrid.map(A=>A+M)}if(d!==o&&r.emit("slidesLengthChange"),h.length!==x&&(r.params.watchOverflow&&r.checkOverflow(),r.emit("snapGridLengthChange")),f.length!==y&&r.emit("slidesGridLengthChange"),t.watchSlidesProgress&&r.updateSlidesOffset(),r.emit("slidesUpdated"),!a&&!t.cssMode&&(t.effect==="slide"||t.effect==="fade")){const E=`${t.containerModifierClass}backface-hidden`,M=r.el.classList.contains(E);d<=t.maxBackfaceHiddenSlides?M||r.el.classList.add(E):M&&r.el.classList.remove(E)}}function Q0(r){const e=this,t=[],i=e.virtual&&e.params.virtual.enabled;let l=0,n;typeof r=="number"?e.setTransition(r):r===!0&&e.setTransition(e.params.speed);const s=a=>i?e.slides[e.getSlideIndexByData(a)]:e.slides[a];if(e.params.slidesPerView!=="auto"&&e.params.slidesPerView>1)if(e.params.centeredSlides)(e.visibleSlides||[]).forEach(a=>{t.push(a)});else for(n=0;n<Math.ceil(e.params.slidesPerView);n+=1){const a=e.activeIndex+n;if(a>e.slides.length&&!i)break;t.push(s(a))}else t.push(s(e.activeIndex));for(n=0;n<t.length;n+=1)if(typeof t[n]<"u"){const a=t[n].offsetHeight;l=a>l?a:l}(l||l===0)&&(e.wrapperEl.style.height=`${l}px`)}function ef(){const r=this,e=r.slides,t=r.isElement?r.isHorizontal()?r.wrapperEl.offsetLeft:r.wrapperEl.offsetTop:0;for(let i=0;i<e.length;i+=1)e[i].swiperSlideOffset=(r.isHorizontal()?e[i].offsetLeft:e[i].offsetTop)-t-r.cssOverflowAdjustment()}const Bs=(r,e,t)=>{e&&!r.classList.contains(t)?r.classList.add(t):!e&&r.classList.contains(t)&&r.classList.remove(t)};function tf(r=this&&this.translate||0){const e=this,t=e.params,{slides:i,rtlTranslate:l,snapGrid:n}=e;if(i.length===0)return;typeof i[0].swiperSlideOffset>"u"&&e.updateSlidesOffset();let s=-r;l&&(s=r),e.visibleSlidesIndexes=[],e.visibleSlides=[];let a=t.spaceBetween;typeof a=="string"&&a.indexOf("%")>=0?a=parseFloat(a.replace("%",""))/100*e.size:typeof a=="string"&&(a=parseFloat(a));for(let o=0;o<i.length;o+=1){const c=i[o];let d=c.swiperSlideOffset;t.cssMode&&t.centeredSlides&&(d-=i[0].swiperSlideOffset);const h=(s+(t.centeredSlides?e.minTranslate():0)-d)/(c.swiperSlideSize+a),f=(s-n[0]+(t.centeredSlides?e.minTranslate():0)-d)/(c.swiperSlideSize+a),u=-(s-d),p=u+e.slidesSizesGrid[o],m=u>=0&&u<=e.size-e.slidesSizesGrid[o],x=u>=0&&u<e.size-1||p>1&&p<=e.size||u<=0&&p>=e.size;x&&(e.visibleSlides.push(c),e.visibleSlidesIndexes.push(o)),Bs(c,x,t.slideVisibleClass),Bs(c,m,t.slideFullyVisibleClass),c.progress=l?-h:h,c.originalProgress=l?-f:f}}function rf(r){const e=this;if(typeof r>"u"){const d=e.rtlTranslate?-1:1;r=e&&e.translate&&e.translate*d||0}const t=e.params,i=e.maxTranslate()-e.minTranslate();let{progress:l,isBeginning:n,isEnd:s,progressLoop:a}=e;const o=n,c=s;if(i===0)l=0,n=!0,s=!0;else{l=(r-e.minTranslate())/i;const d=Math.abs(r-e.minTranslate())<1,h=Math.abs(r-e.maxTranslate())<1;n=d||l<=0,s=h||l>=1,d&&(l=0),h&&(l=1)}if(t.loop){const d=e.getSlideIndexByData(0),h=e.getSlideIndexByData(e.slides.length-1),f=e.slidesGrid[d],u=e.slidesGrid[h],p=e.slidesGrid[e.slidesGrid.length-1],m=Math.abs(r);m>=f?a=(m-f)/p:a=(m+p-u)/p,a>1&&(a-=1)}Object.assign(e,{progress:l,progressLoop:a,isBeginning:n,isEnd:s}),(t.watchSlidesProgress||t.centeredSlides&&t.autoHeight)&&e.updateSlidesProgress(r),n&&!o&&e.emit("reachBeginning toEdge"),s&&!c&&e.emit("reachEnd toEdge"),(o&&!n||c&&!s)&&e.emit("fromEdge"),e.emit("progress",l)}const Ol=(r,e,t)=>{e&&!r.classList.contains(t)?r.classList.add(t):!e&&r.classList.contains(t)&&r.classList.remove(t)};function lf(){const r=this,{slides:e,params:t,slidesEl:i,activeIndex:l}=r,n=r.virtual&&t.virtual.enabled,s=r.grid&&t.grid&&t.grid.rows>1,a=h=>Ke(i,`.${t.slideClass}${h}, swiper-slide${h}`)[0];let o,c,d;if(n)if(t.loop){let h=l-r.virtual.slidesBefore;h<0&&(h=r.virtual.slides.length+h),h>=r.virtual.slides.length&&(h-=r.virtual.slides.length),o=a(`[data-swiper-slide-index="${h}"]`)}else o=a(`[data-swiper-slide-index="${l}"]`);else s?(o=e.find(h=>h.column===l),d=e.find(h=>h.column===l+1),c=e.find(h=>h.column===l-1)):o=e[l];o&&(s||(d=V0(o,`.${t.slideClass}, swiper-slide`)[0],t.loop&&!d&&(d=e[0]),c=$0(o,`.${t.slideClass}, swiper-slide`)[0],t.loop&&!c===0&&(c=e[e.length-1]))),e.forEach(h=>{Ol(h,h===o,t.slideActiveClass),Ol(h,h===d,t.slideNextClass),Ol(h,h===c,t.slidePrevClass)}),r.emitSlidesClasses()}const ki=(r,e)=>{if(!r||r.destroyed||!r.params)return;const t=()=>r.isElement?"swiper-slide":`.${r.params.slideClass}`,i=e.closest(t());if(i){let l=i.querySelector(`.${r.params.lazyPreloaderClass}`);!l&&r.isElement&&(i.shadowRoot?l=i.shadowRoot.querySelector(`.${r.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{i.shadowRoot&&(l=i.shadowRoot.querySelector(`.${r.params.lazyPreloaderClass}`),l&&!l.lazyPreloaderManaged&&l.remove())})),l&&!l.lazyPreloaderManaged&&l.remove()}},Ll=(r,e)=>{if(!r.slides[e])return;const t=r.slides[e].querySelector('[loading="lazy"]');t&&t.removeAttribute("loading")},an=r=>{if(!r||r.destroyed||!r.params)return;let e=r.params.lazyPreloadPrevNext;const t=r.slides.length;if(!t||!e||e<0)return;e=Math.min(e,t);const i=r.params.slidesPerView==="auto"?r.slidesPerViewDynamic():Math.ceil(r.params.slidesPerView),l=r.activeIndex;if(r.params.grid&&r.params.grid.rows>1){const s=l,a=[s-e];a.push(...Array.from({length:e}).map((o,c)=>s+i+c)),r.slides.forEach((o,c)=>{a.includes(o.column)&&Ll(r,c)});return}const n=l+i-1;if(r.params.rewind||r.params.loop)for(let s=l-e;s<=n+e;s+=1){const a=(s%t+t)%t;(a<l||a>n)&&Ll(r,a)}else for(let s=Math.max(l-e,0);s<=Math.min(n+e,t-1);s+=1)s!==l&&(s>n||s<l)&&Ll(r,s)};function nf(r){const{slidesGrid:e,params:t}=r,i=r.rtlTranslate?r.translate:-r.translate;let l;for(let n=0;n<e.length;n+=1)typeof e[n+1]<"u"?i>=e[n]&&i<e[n+1]-(e[n+1]-e[n])/2?l=n:i>=e[n]&&i<e[n+1]&&(l=n+1):i>=e[n]&&(l=n);return t.normalizeSlideIndex&&(l<0||typeof l>"u")&&(l=0),l}function sf(r){const e=this,t=e.rtlTranslate?e.translate:-e.translate,{snapGrid:i,params:l,activeIndex:n,realIndex:s,snapIndex:a}=e;let o=r,c;const d=u=>{let p=u-e.virtual.slidesBefore;return p<0&&(p=e.virtual.slides.length+p),p>=e.virtual.slides.length&&(p-=e.virtual.slides.length),p};if(typeof o>"u"&&(o=nf(e)),i.indexOf(t)>=0)c=i.indexOf(t);else{const u=Math.min(l.slidesPerGroupSkip,o);c=u+Math.floor((o-u)/l.slidesPerGroup)}if(c>=i.length&&(c=i.length-1),o===n&&!e.params.loop){c!==a&&(e.snapIndex=c,e.emit("snapIndexChange"));return}if(o===n&&e.params.loop&&e.virtual&&e.params.virtual.enabled){e.realIndex=d(o);return}const h=e.grid&&l.grid&&l.grid.rows>1;let f;if(e.virtual&&l.virtual.enabled)l.loop?f=d(o):f=o;else if(h){const u=e.slides.find(m=>m.column===o);let p=parseInt(u.getAttribute("data-swiper-slide-index"),10);Number.isNaN(p)&&(p=Math.max(e.slides.indexOf(u),0)),f=Math.floor(p/l.grid.rows)}else if(e.slides[o]){const u=e.slides[o].getAttribute("data-swiper-slide-index");u?f=parseInt(u,10):f=o}else f=o;Object.assign(e,{previousSnapIndex:a,snapIndex:c,previousRealIndex:s,realIndex:f,previousIndex:n,activeIndex:o}),e.initialized&&an(e),e.emit("activeIndexChange"),e.emit("snapIndexChange"),(e.initialized||e.params.runCallbacksOnInit)&&(s!==f&&e.emit("realIndexChange"),e.emit("slideChange"))}function af(r,e){const t=this,i=t.params;let l=r.closest(`.${i.slideClass}, swiper-slide`);!l&&t.isElement&&e&&e.length>1&&e.includes(r)&&[...e.slice(e.indexOf(r)+1,e.length)].forEach(a=>{!l&&a.matches&&a.matches(`.${i.slideClass}, swiper-slide`)&&(l=a)});let n=!1,s;if(l){for(let a=0;a<t.slides.length;a+=1)if(t.slides[a]===l){n=!0,s=a;break}}if(l&&n)t.clickedSlide=l,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(l.getAttribute("data-swiper-slide-index"),10):t.clickedIndex=s;else{t.clickedSlide=void 0,t.clickedIndex=void 0;return}i.slideToClickedSlide&&t.clickedIndex!==void 0&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}var of={updateSize:X0,updateSlides:Z0,updateAutoHeight:Q0,updateSlidesOffset:ef,updateSlidesProgress:tf,updateProgress:rf,updateSlidesClasses:lf,updateActiveIndex:sf,updateClickedSlide:af};function cf(r=this.isHorizontal()?"x":"y"){const e=this,{params:t,rtlTranslate:i,translate:l,wrapperEl:n}=e;if(t.virtualTranslate)return i?-l:l;if(t.cssMode)return l;let s=N0(n,r);return s+=e.cssOverflowAdjustment(),i&&(s=-s),s||0}function df(r,e){const t=this,{rtlTranslate:i,params:l,wrapperEl:n,progress:s}=t;let a=0,o=0;const c=0;t.isHorizontal()?a=i?-r:r:o=r,l.roundLengths&&(a=Math.floor(a),o=Math.floor(o)),t.previousTranslate=t.translate,t.translate=t.isHorizontal()?a:o,l.cssMode?n[t.isHorizontal()?"scrollLeft":"scrollTop"]=t.isHorizontal()?-a:-o:l.virtualTranslate||(t.isHorizontal()?a-=t.cssOverflowAdjustment():o-=t.cssOverflowAdjustment(),n.style.transform=`translate3d(${a}px, ${o}px, ${c}px)`);let d;const h=t.maxTranslate()-t.minTranslate();h===0?d=0:d=(r-t.minTranslate())/h,d!==s&&t.updateProgress(r),t.emit("setTranslate",t.translate,e)}function hf(){return-this.snapGrid[0]}function ff(){return-this.snapGrid[this.snapGrid.length-1]}function uf(r=0,e=this.params.speed,t=!0,i=!0,l){const n=this,{params:s,wrapperEl:a}=n;if(n.animating&&s.preventInteractionOnTransition)return!1;const o=n.minTranslate(),c=n.maxTranslate();let d;if(i&&r>o?d=o:i&&r<c?d=c:d=r,n.updateProgress(d),s.cssMode){const h=n.isHorizontal();if(e===0)a[h?"scrollLeft":"scrollTop"]=-d;else{if(!n.support.smoothScroll)return jo({swiper:n,targetPosition:-d,side:h?"left":"top"}),!0;a.scrollTo({[h?"left":"top"]:-d,behavior:"smooth"})}return!0}return e===0?(n.setTransition(0),n.setTranslate(d),t&&(n.emit("beforeTransitionStart",e,l),n.emit("transitionEnd"))):(n.setTransition(e),n.setTranslate(d),t&&(n.emit("beforeTransitionStart",e,l),n.emit("transitionStart")),n.animating||(n.animating=!0,n.onTranslateToWrapperTransitionEnd||(n.onTranslateToWrapperTransitionEnd=function(f){!n||n.destroyed||f.target===this&&(n.wrapperEl.removeEventListener("transitionend",n.onTranslateToWrapperTransitionEnd),n.onTranslateToWrapperTransitionEnd=null,delete n.onTranslateToWrapperTransitionEnd,n.animating=!1,t&&n.emit("transitionEnd"))}),n.wrapperEl.addEventListener("transitionend",n.onTranslateToWrapperTransitionEnd))),!0}var pf={getTranslate:cf,setTranslate:df,minTranslate:hf,maxTranslate:ff,translateTo:uf};function mf(r,e){const t=this;t.params.cssMode||(t.wrapperEl.style.transitionDuration=`${r}ms`,t.wrapperEl.style.transitionDelay=r===0?"0ms":""),t.emit("setTransition",r,e)}function Ro({swiper:r,runCallbacks:e,direction:t,step:i}){const{activeIndex:l,previousIndex:n}=r;let s=t;s||(l>n?s="next":l<n?s="prev":s="reset"),r.emit(`transition${i}`),e&&s==="reset"?r.emit(`slideResetTransition${i}`):e&&l!==n&&(r.emit(`slideChangeTransition${i}`),s==="next"?r.emit(`slideNextTransition${i}`):r.emit(`slidePrevTransition${i}`))}function gf(r=!0,e){const t=this,{params:i}=t;i.cssMode||(i.autoHeight&&t.updateAutoHeight(),Ro({swiper:t,runCallbacks:r,direction:e,step:"Start"}))}function xf(r=!0,e){const t=this,{params:i}=t;t.animating=!1,!i.cssMode&&(t.setTransition(0),Ro({swiper:t,runCallbacks:r,direction:e,step:"End"}))}var vf={setTransition:mf,transitionStart:gf,transitionEnd:xf};function yf(r=0,e,t=!0,i,l){typeof r=="string"&&(r=parseInt(r,10));const n=this;let s=r;s<0&&(s=0);const{params:a,snapGrid:o,slidesGrid:c,previousIndex:d,activeIndex:h,rtlTranslate:f,wrapperEl:u,enabled:p}=n;if(!p&&!i&&!l||n.destroyed||n.animating&&a.preventInteractionOnTransition)return!1;typeof e>"u"&&(e=n.params.speed);const m=Math.min(n.params.slidesPerGroupSkip,s);let x=m+Math.floor((s-m)/n.params.slidesPerGroup);x>=o.length&&(x=o.length-1);const y=-o[x];if(a.normalizeSlideIndex)for(let S=0;S<c.length;S+=1){const z=-Math.floor(y*100),B=Math.floor(c[S]*100),E=Math.floor(c[S+1]*100);typeof c[S+1]<"u"?z>=B&&z<E-(E-B)/2?s=S:z>=B&&z<E&&(s=S+1):z>=B&&(s=S)}if(n.initialized&&s!==h&&(!n.allowSlideNext&&(f?y>n.translate&&y>n.minTranslate():y<n.translate&&y<n.minTranslate())||!n.allowSlidePrev&&y>n.translate&&y>n.maxTranslate()&&(h||0)!==s))return!1;s!==(d||0)&&t&&n.emit("beforeSlideChangeStart"),n.updateProgress(y);let k;s>h?k="next":s<h?k="prev":k="reset";const g=n.virtual&&n.params.virtual.enabled;if(!(g&&l)&&(f&&-y===n.translate||!f&&y===n.translate))return n.updateActiveIndex(s),a.autoHeight&&n.updateAutoHeight(),n.updateSlidesClasses(),a.effect!=="slide"&&n.setTranslate(y),k!=="reset"&&(n.transitionStart(t,k),n.transitionEnd(t,k)),!1;if(a.cssMode){const S=n.isHorizontal(),z=f?y:-y;if(e===0)g&&(n.wrapperEl.style.scrollSnapType="none",n._immediateVirtual=!0),g&&!n._cssModeVirtualInitialSet&&n.params.initialSlide>0?(n._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{u[S?"scrollLeft":"scrollTop"]=z})):u[S?"scrollLeft":"scrollTop"]=z,g&&requestAnimationFrame(()=>{n.wrapperEl.style.scrollSnapType="",n._immediateVirtual=!1});else{if(!n.support.smoothScroll)return jo({swiper:n,targetPosition:z,side:S?"left":"top"}),!0;u.scrollTo({[S?"left":"top"]:z,behavior:"smooth"})}return!0}const T=Io().isSafari;return g&&!l&&T&&n.isElement&&n.virtual.update(!1,!1,s),n.setTransition(e),n.setTranslate(y),n.updateActiveIndex(s),n.updateSlidesClasses(),n.emit("beforeTransitionStart",e,i),n.transitionStart(t,k),e===0?n.transitionEnd(t,k):n.animating||(n.animating=!0,n.onSlideToWrapperTransitionEnd||(n.onSlideToWrapperTransitionEnd=function(z){!n||n.destroyed||z.target===this&&(n.wrapperEl.removeEventListener("transitionend",n.onSlideToWrapperTransitionEnd),n.onSlideToWrapperTransitionEnd=null,delete n.onSlideToWrapperTransitionEnd,n.transitionEnd(t,k))}),n.wrapperEl.addEventListener("transitionend",n.onSlideToWrapperTransitionEnd)),!0}function wf(r=0,e,t=!0,i){typeof r=="string"&&(r=parseInt(r,10));const l=this;if(l.destroyed)return;typeof e>"u"&&(e=l.params.speed);const n=l.grid&&l.params.grid&&l.params.grid.rows>1;let s=r;if(l.params.loop)if(l.virtual&&l.params.virtual.enabled)s=s+l.virtual.slidesBefore;else{let a;if(n){const m=s*l.params.grid.rows;a=l.slides.find(x=>x.getAttribute("data-swiper-slide-index")*1===m).column}else a=l.getSlideIndexByData(s);const o=n?Math.ceil(l.slides.length/l.params.grid.rows):l.slides.length,{centeredSlides:c,slidesOffsetBefore:d,slidesOffsetAfter:h}=l.params,f=c||!!d||!!h;let u=l.params.slidesPerView;u==="auto"?u=l.slidesPerViewDynamic():(u=Math.ceil(parseFloat(l.params.slidesPerView,10)),f&&u%2===0&&(u=u+1));let p=o-a<u;if(f&&(p=p||a<Math.ceil(u/2)),i&&f&&l.params.slidesPerView!=="auto"&&!n&&(p=!1),p){const m=f?a<l.activeIndex?"prev":"next":a-l.activeIndex-1<l.params.slidesPerView?"next":"prev";l.loopFix({direction:m,slideTo:!0,activeSlideIndex:m==="next"?a+1:a-o+1,slideRealIndex:m==="next"?l.realIndex:void 0})}if(n){const m=s*l.params.grid.rows;s=l.slides.find(x=>x.getAttribute("data-swiper-slide-index")*1===m).column}else s=l.getSlideIndexByData(s)}return requestAnimationFrame(()=>{l.slideTo(s,e,t,i)}),l}function bf(r,e=!0,t){const i=this,{enabled:l,params:n,animating:s}=i;if(!l||i.destroyed)return i;typeof r>"u"&&(r=i.params.speed);let a=n.slidesPerGroup;n.slidesPerView==="auto"&&n.slidesPerGroup===1&&n.slidesPerGroupAuto&&(a=Math.max(i.slidesPerViewDynamic("current",!0),1));const o=i.activeIndex<n.slidesPerGroupSkip?1:a,c=i.virtual&&n.virtual.enabled;if(n.loop){if(s&&!c&&n.loopPreventsSliding)return!1;if(i.loopFix({direction:"next"}),i._clientLeft=i.wrapperEl.clientLeft,i.activeIndex===i.slides.length-1&&n.cssMode)return requestAnimationFrame(()=>{i.slideTo(i.activeIndex+o,r,e,t)}),!0}return n.rewind&&i.isEnd?i.slideTo(0,r,e,t):i.slideTo(i.activeIndex+o,r,e,t)}function kf(r,e=!0,t){const i=this,{params:l,snapGrid:n,slidesGrid:s,rtlTranslate:a,enabled:o,animating:c}=i;if(!o||i.destroyed)return i;typeof r>"u"&&(r=i.params.speed);const d=i.virtual&&l.virtual.enabled;if(l.loop){if(c&&!d&&l.loopPreventsSliding)return!1;i.loopFix({direction:"prev"}),i._clientLeft=i.wrapperEl.clientLeft}const h=a?i.translate:-i.translate;function f(k){return k<0?-Math.floor(Math.abs(k)):Math.floor(k)}const u=f(h),p=n.map(k=>f(k)),m=l.freeMode&&l.freeMode.enabled;let x=n[p.indexOf(u)-1];if(typeof x>"u"&&(l.cssMode||m)){let k;n.forEach((g,b)=>{u>=g&&(k=b)}),typeof k<"u"&&(x=m?n[k]:n[k>0?k-1:k])}let y=0;if(typeof x<"u"&&(y=s.indexOf(x),y<0&&(y=i.activeIndex-1),l.slidesPerView==="auto"&&l.slidesPerGroup===1&&l.slidesPerGroupAuto&&(y=y-i.slidesPerViewDynamic("previous",!0)+1,y=Math.max(y,0))),l.rewind&&i.isBeginning){const k=i.params.virtual&&i.params.virtual.enabled&&i.virtual?i.virtual.slides.length-1:i.slides.length-1;return i.slideTo(k,r,e,t)}else if(l.loop&&i.activeIndex===0&&l.cssMode)return requestAnimationFrame(()=>{i.slideTo(y,r,e,t)}),!0;return i.slideTo(y,r,e,t)}function Sf(r,e=!0,t){const i=this;if(!i.destroyed)return typeof r>"u"&&(r=i.params.speed),i.slideTo(i.activeIndex,r,e,t)}function Mf(r,e=!0,t,i=.5){const l=this;if(l.destroyed)return;typeof r>"u"&&(r=l.params.speed);let n=l.activeIndex;const s=Math.min(l.params.slidesPerGroupSkip,n),a=s+Math.floor((n-s)/l.params.slidesPerGroup),o=l.rtlTranslate?l.translate:-l.translate;if(o>=l.snapGrid[a]){const c=l.snapGrid[a],d=l.snapGrid[a+1];o-c>(d-c)*i&&(n+=l.params.slidesPerGroup)}else{const c=l.snapGrid[a-1],d=l.snapGrid[a];o-c<=(d-c)*i&&(n-=l.params.slidesPerGroup)}return n=Math.max(n,0),n=Math.min(n,l.slidesGrid.length-1),l.slideTo(n,r,e,t)}function Cf(){const r=this;if(r.destroyed)return;const{params:e,slidesEl:t}=r,i=e.slidesPerView==="auto"?r.slidesPerViewDynamic():e.slidesPerView;let l=r.getSlideIndexWhenGrid(r.clickedIndex),n;const s=r.isElement?"swiper-slide":`.${e.slideClass}`,a=r.grid&&r.params.grid&&r.params.grid.rows>1;if(e.loop){if(r.animating)return;n=parseInt(r.clickedSlide.getAttribute("data-swiper-slide-index"),10),e.centeredSlides?r.slideToLoop(n):l>(a?(r.slides.length-i)/2-(r.params.grid.rows-1):r.slides.length-i)?(r.loopFix(),l=r.getSlideIndex(Ke(t,`${s}[data-swiper-slide-index="${n}"]`)[0]),Lo(()=>{r.slideTo(l)})):r.slideTo(l)}else r.slideTo(l)}var Tf={slideTo:yf,slideToLoop:wf,slideNext:bf,slidePrev:kf,slideReset:Sf,slideToClosest:Mf,slideToClickedSlide:Cf};function Ef(r,e){const t=this,{params:i,slidesEl:l}=t;if(!i.loop||t.virtual&&t.params.virtual.enabled)return;const n=()=>{Ke(l,`.${i.slideClass}, swiper-slide`).forEach((p,m)=>{p.setAttribute("data-swiper-slide-index",m)})},s=()=>{const u=Ke(l,`.${i.slideBlankClass}`);u.forEach(p=>{p.remove()}),u.length>0&&(t.recalcSlides(),t.updateSlides())},a=t.grid&&i.grid&&i.grid.rows>1;i.loopAddBlankSlides&&(i.slidesPerGroup>1||a)&&s();const o=i.slidesPerGroup*(a?i.grid.rows:1),c=t.slides.length%o!==0,d=a&&t.slides.length%i.grid.rows!==0,h=u=>{for(let p=0;p<u;p+=1){const m=t.isElement?sn("swiper-slide",[i.slideBlankClass]):sn("div",[i.slideClass,i.slideBlankClass]);t.slidesEl.append(m)}};if(c){if(i.loopAddBlankSlides){const u=o-t.slides.length%o;h(u),t.recalcSlides(),t.updateSlides()}else Ri("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");n()}else if(d){if(i.loopAddBlankSlides){const u=i.grid.rows-t.slides.length%i.grid.rows;h(u),t.recalcSlides(),t.updateSlides()}else Ri("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");n()}else n();const f=i.centeredSlides||!!i.slidesOffsetBefore||!!i.slidesOffsetAfter;t.loopFix({slideRealIndex:r,direction:f?void 0:"next",initial:e})}function zf({slideRealIndex:r,slideTo:e=!0,direction:t,setTranslate:i,activeSlideIndex:l,initial:n,byController:s,byMousewheel:a}={}){const o=this;if(!o.params.loop)return;o.emit("beforeLoopFix");const{slides:c,allowSlidePrev:d,allowSlideNext:h,slidesEl:f,params:u}=o,{centeredSlides:p,slidesOffsetBefore:m,slidesOffsetAfter:x,initialSlide:y}=u,k=p||!!m||!!x;if(o.allowSlidePrev=!0,o.allowSlideNext=!0,o.virtual&&u.virtual.enabled){e&&(!k&&o.snapIndex===0?o.slideTo(o.virtual.slides.length,0,!1,!0):k&&o.snapIndex<u.slidesPerView?o.slideTo(o.virtual.slides.length+o.snapIndex,0,!1,!0):o.snapIndex===o.snapGrid.length-1&&o.slideTo(o.virtual.slidesBefore,0,!1,!0)),o.allowSlidePrev=d,o.allowSlideNext=h,o.emit("loopFix");return}let g=u.slidesPerView;g==="auto"?g=o.slidesPerViewDynamic():(g=Math.ceil(parseFloat(u.slidesPerView,10)),k&&g%2===0&&(g=g+1));const b=u.slidesPerGroupAuto?g:u.slidesPerGroup;let w=k?Math.max(b,Math.ceil(g/2)):b;w%b!==0&&(w+=b-w%b),w+=u.loopAdditionalSlides,o.loopedSlides=w;const T=o.grid&&u.grid&&u.grid.rows>1;c.length<g+w||o.params.effect==="cards"&&c.length<g+w*2?Ri("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):T&&u.grid.fill==="row"&&Ri("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const S=[],z=[],B=T?Math.ceil(c.length/u.grid.rows):c.length,E=n&&B-y<g&&!k;let M=E?y:o.activeIndex;typeof l>"u"?l=o.getSlideIndex(c.find(j=>j.classList.contains(u.slideActiveClass))):M=l;const A=t==="next"||!t,P=t==="prev"||!t;let F=0,G=0;const ee=(T?c[l].column:l)+(k&&typeof i>"u"?-g/2+.5:0);if(ee<w){F=Math.max(w-ee,b);for(let j=0;j<w-ee;j+=1){const W=j-Math.floor(j/B)*B;if(T){const U=B-W-1;for(let te=c.length-1;te>=0;te-=1)c[te].column===U&&S.push(te)}else S.push(B-W-1)}}else if(ee+g>B-w){G=Math.max(ee-(B-w*2),b),E&&(G=Math.max(G,g-B+y+1));for(let j=0;j<G;j+=1){const W=j-Math.floor(j/B)*B;T?c.forEach((U,te)=>{U.column===W&&z.push(te)}):z.push(W)}}if(o.__preventObserver__=!0,requestAnimationFrame(()=>{o.__preventObserver__=!1}),o.params.effect==="cards"&&c.length<g+w*2&&(z.includes(l)&&z.splice(z.indexOf(l),1),S.includes(l)&&S.splice(S.indexOf(l),1)),P&&S.forEach(j=>{c[j].swiperLoopMoveDOM=!0,f.prepend(c[j]),c[j].swiperLoopMoveDOM=!1}),A&&z.forEach(j=>{c[j].swiperLoopMoveDOM=!0,f.append(c[j]),c[j].swiperLoopMoveDOM=!1}),o.recalcSlides(),u.slidesPerView==="auto"?o.updateSlides():T&&(S.length>0&&P||z.length>0&&A)&&o.slides.forEach((j,W)=>{o.grid.updateSlide(W,j,o.slides)}),u.watchSlidesProgress&&o.updateSlidesOffset(),e){if(S.length>0&&P){if(typeof r>"u"){const j=o.slidesGrid[M],U=o.slidesGrid[M+F]-j;a?o.setTranslate(o.translate-U):(o.slideTo(M+Math.ceil(F),0,!1,!0),i&&(o.touchEventsData.startTranslate=o.touchEventsData.startTranslate-U,o.touchEventsData.currentTranslate=o.touchEventsData.currentTranslate-U))}else if(i){const j=T?S.length/u.grid.rows:S.length;o.slideTo(o.activeIndex+j,0,!1,!0),o.touchEventsData.currentTranslate=o.translate}}else if(z.length>0&&A)if(typeof r>"u"){const j=o.slidesGrid[M],U=o.slidesGrid[M-G]-j;a?o.setTranslate(o.translate-U):(o.slideTo(M-G,0,!1,!0),i&&(o.touchEventsData.startTranslate=o.touchEventsData.startTranslate-U,o.touchEventsData.currentTranslate=o.touchEventsData.currentTranslate-U))}else{const j=T?z.length/u.grid.rows:z.length;o.slideTo(o.activeIndex-j,0,!1,!0)}}if(o.allowSlidePrev=d,o.allowSlideNext=h,o.controller&&o.controller.control&&!s){const j={slideRealIndex:r,direction:t,setTranslate:i,activeSlideIndex:l,byController:!0};Array.isArray(o.controller.control)?o.controller.control.forEach(W=>{!W.destroyed&&W.params.loop&&W.loopFix({...j,slideTo:W.params.slidesPerView===u.slidesPerView?e:!1})}):o.controller.control instanceof o.constructor&&o.controller.control.params.loop&&o.controller.control.loopFix({...j,slideTo:o.controller.control.params.slidesPerView===u.slidesPerView?e:!1})}o.emit("loopFix")}function Af(){const r=this,{params:e,slidesEl:t}=r;if(!e.loop||!t||r.virtual&&r.params.virtual.enabled)return;r.recalcSlides();const i=[];r.slides.forEach(l=>{const n=typeof l.swiperSlideIndex>"u"?l.getAttribute("data-swiper-slide-index")*1:l.swiperSlideIndex;i[n]=l}),r.slides.forEach(l=>{l.removeAttribute("data-swiper-slide-index")}),i.forEach(l=>{t.append(l)}),r.recalcSlides(),r.slideTo(r.realIndex,0)}var Of={loopCreate:Ef,loopFix:zf,loopDestroy:Af};function Lf(r){const e=this;if(!e.params.simulateTouch||e.params.watchOverflow&&e.isLocked||e.params.cssMode)return;const t=e.params.touchEventsTarget==="container"?e.el:e.wrapperEl;e.isElement&&(e.__preventObserver__=!0),t.style.cursor="move",t.style.cursor=r?"grabbing":"grab",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1})}function jf(){const r=this;r.params.watchOverflow&&r.isLocked||r.params.cssMode||(r.isElement&&(r.__preventObserver__=!0),r[r.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",r.isElement&&requestAnimationFrame(()=>{r.__preventObserver__=!1}))}var Bf={setGrabCursor:Lf,unsetGrabCursor:jf};function Pf(r,e=this){function t(i){if(!i||i===jt()||i===ge())return null;i.assignedSlot&&(i=i.assignedSlot);const l=i.closest(r);return!l&&!i.getRootNode?null:l||t(i.getRootNode().host)}return t(e)}function Ps(r,e,t){const i=ge(),{params:l}=r,n=l.edgeSwipeDetection,s=l.edgeSwipeThreshold;return n&&(t<=s||t>=i.innerWidth-s)?n==="prevent"?(e.preventDefault(),!0):!1:!0}function If(r){const e=this,t=jt();let i=r;i.originalEvent&&(i=i.originalEvent);const l=e.touchEventsData;if(i.type==="pointerdown"){if(l.pointerId!==null&&l.pointerId!==i.pointerId)return;l.pointerId=i.pointerId}else i.type==="touchstart"&&i.targetTouches.length===1&&(l.touchId=i.targetTouches[0].identifier);if(i.type==="touchstart"){Ps(e,i,i.targetTouches[0].pageX);return}const{params:n,touches:s,enabled:a}=e;if(!a||!n.simulateTouch&&i.pointerType==="mouse"||e.animating&&n.preventInteractionOnTransition)return;!e.animating&&n.cssMode&&n.loop&&e.loopFix();let o=i.target;if(n.touchEventsTarget==="wrapper"&&!_0(o,e.wrapperEl)||"which"in i&&i.which===3||"button"in i&&i.button>0||l.isTouched&&l.isMoved)return;const c=!!n.noSwipingClass&&n.noSwipingClass!=="",d=i.composedPath?i.composedPath():i.path;c&&i.target&&i.target.shadowRoot&&d&&(o=d[0]);const h=n.noSwipingSelector?n.noSwipingSelector:`.${n.noSwipingClass}`,f=!!(i.target&&i.target.shadowRoot);if(n.noSwiping&&(f?Pf(h,o):o.closest(h))){e.allowClick=!0;return}if(n.swipeHandler&&!o.closest(n.swipeHandler))return;s.currentX=i.pageX,s.currentY=i.pageY;const u=s.currentX,p=s.currentY;if(!Ps(e,i,u))return;Object.assign(l,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),s.startX=u,s.startY=p,l.touchStartTime=Ii(),e.allowClick=!0,e.updateSize(),e.swipeDirection=void 0,n.threshold>0&&(l.allowThresholdMove=!1);let m=!0;o.matches(l.focusableElements)&&(m=!1,o.nodeName==="SELECT"&&(l.isTouched=!1)),t.activeElement&&t.activeElement.matches(l.focusableElements)&&t.activeElement!==o&&(i.pointerType==="mouse"||i.pointerType!=="mouse"&&!o.matches(l.focusableElements))&&t.activeElement.blur();const x=m&&e.allowTouchMove&&n.touchStartPreventDefault;(n.touchStartForcePreventDefault||x)&&!o.isContentEditable&&i.preventDefault(),n.freeMode&&n.freeMode.enabled&&e.freeMode&&e.animating&&!n.cssMode&&e.freeMode.onTouchStart(),e.emit("touchStart",i)}function Rf(r){const e=jt(),t=this,i=t.touchEventsData,{params:l,touches:n,rtlTranslate:s,enabled:a}=t;if(!a||!l.simulateTouch&&r.pointerType==="mouse")return;let o=r;if(o.originalEvent&&(o=o.originalEvent),o.type==="pointermove"&&(i.touchId!==null||o.pointerId!==i.pointerId))return;let c;if(o.type==="touchmove"){if(c=[...o.changedTouches].find(w=>w.identifier===i.touchId),!c||c.identifier!==i.touchId)return}else c=o;if(!i.isTouched){i.startMoving&&i.isScrolling&&t.emit("touchMoveOpposite",o);return}const d=c.pageX,h=c.pageY;if(o.preventedByNestedSwiper){n.startX=d,n.startY=h;return}if(!t.allowTouchMove){o.target.matches(i.focusableElements)||(t.allowClick=!1),i.isTouched&&(Object.assign(n,{startX:d,startY:h,currentX:d,currentY:h}),i.touchStartTime=Ii());return}if(l.touchReleaseOnEdges&&!l.loop)if(t.isVertical()){if(h<n.startY&&t.translate<=t.maxTranslate()||h>n.startY&&t.translate>=t.minTranslate()){i.isTouched=!1,i.isMoved=!1;return}}else{if(s&&(d>n.startX&&-t.translate<=t.maxTranslate()||d<n.startX&&-t.translate>=t.minTranslate()))return;if(!s&&(d<n.startX&&t.translate<=t.maxTranslate()||d>n.startX&&t.translate>=t.minTranslate()))return}if(e.activeElement&&e.activeElement.matches(i.focusableElements)&&e.activeElement!==o.target&&o.pointerType!=="mouse"&&e.activeElement.blur(),e.activeElement&&o.target===e.activeElement&&o.target.matches(i.focusableElements)){i.isMoved=!0,t.allowClick=!1;return}i.allowTouchCallbacks&&t.emit("touchMove",o),n.previousX=n.currentX,n.previousY=n.currentY,n.currentX=d,n.currentY=h;const f=n.currentX-n.startX,u=n.currentY-n.startY;if(t.params.threshold&&Math.sqrt(f**2+u**2)<t.params.threshold)return;if(typeof i.isScrolling>"u"){let w;t.isHorizontal()&&n.currentY===n.startY||t.isVertical()&&n.currentX===n.startX?i.isScrolling=!1:f*f+u*u>=25&&(w=Math.atan2(Math.abs(u),Math.abs(f))*180/Math.PI,i.isScrolling=t.isHorizontal()?w>l.touchAngle:90-w>l.touchAngle)}if(i.isScrolling&&t.emit("touchMoveOpposite",o),typeof i.startMoving>"u"&&(n.currentX!==n.startX||n.currentY!==n.startY)&&(i.startMoving=!0),i.isScrolling||o.type==="touchmove"&&i.preventTouchMoveFromPointerMove){i.isTouched=!1;return}if(!i.startMoving)return;t.allowClick=!1,!l.cssMode&&o.cancelable&&o.preventDefault(),l.touchMoveStopPropagation&&!l.nested&&o.stopPropagation();let p=t.isHorizontal()?f:u,m=t.isHorizontal()?n.currentX-n.previousX:n.currentY-n.previousY;l.oneWayMovement&&(p=Math.abs(p)*(s?1:-1),m=Math.abs(m)*(s?1:-1)),n.diff=p,p*=l.touchRatio,s&&(p=-p,m=-m);const x=t.touchesDirection;t.swipeDirection=p>0?"prev":"next",t.touchesDirection=m>0?"prev":"next";const y=t.params.loop&&!l.cssMode,k=t.touchesDirection==="next"&&t.allowSlideNext||t.touchesDirection==="prev"&&t.allowSlidePrev;if(!i.isMoved){if(y&&k&&t.loopFix({direction:t.swipeDirection}),i.startTranslate=t.getTranslate(),t.setTransition(0),t.animating){const w=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});t.wrapperEl.dispatchEvent(w)}i.allowMomentumBounce=!1,l.grabCursor&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!0),t.emit("sliderFirstMove",o)}if(new Date().getTime(),l._loopSwapReset!==!1&&i.isMoved&&i.allowThresholdMove&&x!==t.touchesDirection&&y&&k&&Math.abs(p)>=1){Object.assign(n,{startX:d,startY:h,currentX:d,currentY:h,startTranslate:i.currentTranslate}),i.loopSwapReset=!0,i.startTranslate=i.currentTranslate;return}t.emit("sliderMove",o),i.isMoved=!0,i.currentTranslate=p+i.startTranslate;let g=!0,b=l.resistanceRatio;if(l.touchReleaseOnEdges&&(b=0),p>0?(y&&k&&i.allowThresholdMove&&i.currentTranslate>(l.centeredSlides?t.minTranslate()-t.slidesSizesGrid[t.activeIndex+1]-(l.slidesPerView!=="auto"&&t.slides.length-l.slidesPerView>=2?t.slidesSizesGrid[t.activeIndex+1]+t.params.spaceBetween:0)-t.params.spaceBetween:t.minTranslate())&&t.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),i.currentTranslate>t.minTranslate()&&(g=!1,l.resistance&&(i.currentTranslate=t.minTranslate()-1+(-t.minTranslate()+i.startTranslate+p)**b))):p<0&&(y&&k&&i.allowThresholdMove&&i.currentTranslate<(l.centeredSlides?t.maxTranslate()+t.slidesSizesGrid[t.slidesSizesGrid.length-1]+t.params.spaceBetween+(l.slidesPerView!=="auto"&&t.slides.length-l.slidesPerView>=2?t.slidesSizesGrid[t.slidesSizesGrid.length-1]+t.params.spaceBetween:0):t.maxTranslate())&&t.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:t.slides.length-(l.slidesPerView==="auto"?t.slidesPerViewDynamic():Math.ceil(parseFloat(l.slidesPerView,10)))}),i.currentTranslate<t.maxTranslate()&&(g=!1,l.resistance&&(i.currentTranslate=t.maxTranslate()+1-(t.maxTranslate()-i.startTranslate-p)**b))),g&&(o.preventedByNestedSwiper=!0),!t.allowSlideNext&&t.swipeDirection==="next"&&i.currentTranslate<i.startTranslate&&(i.currentTranslate=i.startTranslate),!t.allowSlidePrev&&t.swipeDirection==="prev"&&i.currentTranslate>i.startTranslate&&(i.currentTranslate=i.startTranslate),!t.allowSlidePrev&&!t.allowSlideNext&&(i.currentTranslate=i.startTranslate),l.threshold>0)if(Math.abs(p)>l.threshold||i.allowThresholdMove){if(!i.allowThresholdMove){i.allowThresholdMove=!0,n.startX=n.currentX,n.startY=n.currentY,i.currentTranslate=i.startTranslate,n.diff=t.isHorizontal()?n.currentX-n.startX:n.currentY-n.startY;return}}else{i.currentTranslate=i.startTranslate;return}!l.followFinger||l.cssMode||((l.freeMode&&l.freeMode.enabled&&t.freeMode||l.watchSlidesProgress)&&(t.updateActiveIndex(),t.updateSlidesClasses()),l.freeMode&&l.freeMode.enabled&&t.freeMode&&t.freeMode.onTouchMove(),t.updateProgress(i.currentTranslate),t.setTranslate(i.currentTranslate))}function Df(r){const e=this,t=e.touchEventsData;let i=r;i.originalEvent&&(i=i.originalEvent);let l;if(i.type==="touchend"||i.type==="touchcancel"){if(l=[...i.changedTouches].find(w=>w.identifier===t.touchId),!l||l.identifier!==t.touchId)return}else{if(t.touchId!==null||i.pointerId!==t.pointerId)return;l=i}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(i.type)&&!(["pointercancel","contextmenu"].includes(i.type)&&(e.browser.isSafari||e.browser.isWebView)))return;t.pointerId=null,t.touchId=null;const{params:s,touches:a,rtlTranslate:o,slidesGrid:c,enabled:d}=e;if(!d||!s.simulateTouch&&i.pointerType==="mouse")return;if(t.allowTouchCallbacks&&e.emit("touchEnd",i),t.allowTouchCallbacks=!1,!t.isTouched){t.isMoved&&s.grabCursor&&e.setGrabCursor(!1),t.isMoved=!1,t.startMoving=!1;return}s.grabCursor&&t.isMoved&&t.isTouched&&(e.allowSlideNext===!0||e.allowSlidePrev===!0)&&e.setGrabCursor(!1);const h=Ii(),f=h-t.touchStartTime;if(e.allowClick){const w=i.path||i.composedPath&&i.composedPath();e.updateClickedSlide(w&&w[0]||i.target,w),e.emit("tap click",i),f<300&&h-t.lastClickTime<300&&e.emit("doubleTap doubleClick",i)}if(t.lastClickTime=Ii(),Lo(()=>{e.destroyed||(e.allowClick=!0)}),!t.isTouched||!t.isMoved||!e.swipeDirection||a.diff===0&&!t.loopSwapReset||t.currentTranslate===t.startTranslate&&!t.loopSwapReset){t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;return}t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;let u;if(s.followFinger?u=o?e.translate:-e.translate:u=-t.currentTranslate,s.cssMode)return;if(s.freeMode&&s.freeMode.enabled){e.freeMode.onTouchEnd({currentPos:u});return}const p=u>=-e.maxTranslate()&&!e.params.loop;let m=0,x=e.slidesSizesGrid[0];for(let w=0;w<c.length;w+=w<s.slidesPerGroupSkip?1:s.slidesPerGroup){const T=w<s.slidesPerGroupSkip-1?1:s.slidesPerGroup;typeof c[w+T]<"u"?(p||u>=c[w]&&u<c[w+T])&&(m=w,x=c[w+T]-c[w]):(p||u>=c[w])&&(m=w,x=c[c.length-1]-c[c.length-2])}let y=null,k=null;s.rewind&&(e.isBeginning?k=s.virtual&&s.virtual.enabled&&e.virtual?e.virtual.slides.length-1:e.slides.length-1:e.isEnd&&(y=0));const g=(u-c[m])/x,b=m<s.slidesPerGroupSkip-1?1:s.slidesPerGroup;if(f>s.longSwipesMs){if(!s.longSwipes){e.slideTo(e.activeIndex);return}e.swipeDirection==="next"&&(g>=s.longSwipesRatio?e.slideTo(s.rewind&&e.isEnd?y:m+b):e.slideTo(m)),e.swipeDirection==="prev"&&(g>1-s.longSwipesRatio?e.slideTo(m+b):k!==null&&g<0&&Math.abs(g)>s.longSwipesRatio?e.slideTo(k):e.slideTo(m))}else{if(!s.shortSwipes){e.slideTo(e.activeIndex);return}e.navigation&&(i.target===e.navigation.nextEl||i.target===e.navigation.prevEl)?i.target===e.navigation.nextEl?e.slideTo(m+b):e.slideTo(m):(e.swipeDirection==="next"&&e.slideTo(y!==null?y:m+b),e.swipeDirection==="prev"&&e.slideTo(k!==null?k:m))}}function Is(){const r=this,{params:e,el:t}=r;if(t&&t.offsetWidth===0)return;e.breakpoints&&r.setBreakpoint();const{allowSlideNext:i,allowSlidePrev:l,snapGrid:n}=r,s=r.virtual&&r.params.virtual.enabled;r.allowSlideNext=!0,r.allowSlidePrev=!0,r.updateSize(),r.updateSlides(),r.updateSlidesClasses();const a=s&&e.loop;(e.slidesPerView==="auto"||e.slidesPerView>1)&&r.isEnd&&!r.isBeginning&&!r.params.centeredSlides&&!a?r.slideTo(r.slides.length-1,0,!1,!0):r.params.loop&&!s?r.slideToLoop(r.realIndex,0,!1,!0):r.slideTo(r.activeIndex,0,!1,!0),r.autoplay&&r.autoplay.running&&r.autoplay.paused&&(clearTimeout(r.autoplay.resizeTimeout),r.autoplay.resizeTimeout=setTimeout(()=>{r.autoplay&&r.autoplay.running&&r.autoplay.paused&&r.autoplay.resume()},500)),r.allowSlidePrev=l,r.allowSlideNext=i,r.params.watchOverflow&&n!==r.snapGrid&&r.checkOverflow()}function Nf(r){const e=this;e.enabled&&(e.allowClick||(e.params.preventClicks&&r.preventDefault(),e.params.preventClicksPropagation&&e.animating&&(r.stopPropagation(),r.stopImmediatePropagation())))}function Ff(){const r=this,{wrapperEl:e,rtlTranslate:t,enabled:i}=r;if(!i)return;r.previousTranslate=r.translate,r.isHorizontal()?r.translate=-e.scrollLeft:r.translate=-e.scrollTop,r.translate===0&&(r.translate=0),r.updateActiveIndex(),r.updateSlidesClasses();let l;const n=r.maxTranslate()-r.minTranslate();n===0?l=0:l=(r.translate-r.minTranslate())/n,l!==r.progress&&r.updateProgress(t?-r.translate:r.translate),r.emit("setTranslate",r.translate,!1)}function Hf(r){const e=this;ki(e,r.target),!(e.params.cssMode||e.params.slidesPerView!=="auto"&&!e.params.autoHeight)&&e.update()}function _f(){const r=this;r.documentTouchHandlerProceeded||(r.documentTouchHandlerProceeded=!0,r.params.touchReleaseOnEdges&&(r.el.style.touchAction="auto"))}const Do=(r,e)=>{const t=jt(),{params:i,el:l,wrapperEl:n,device:s}=r,a=!!i.nested,o=e==="on"?"addEventListener":"removeEventListener",c=e;!l||typeof l=="string"||(t[o]("touchstart",r.onDocumentTouchStart,{passive:!1,capture:a}),l[o]("touchstart",r.onTouchStart,{passive:!1}),l[o]("pointerdown",r.onTouchStart,{passive:!1}),t[o]("touchmove",r.onTouchMove,{passive:!1,capture:a}),t[o]("pointermove",r.onTouchMove,{passive:!1,capture:a}),t[o]("touchend",r.onTouchEnd,{passive:!0}),t[o]("pointerup",r.onTouchEnd,{passive:!0}),t[o]("pointercancel",r.onTouchEnd,{passive:!0}),t[o]("touchcancel",r.onTouchEnd,{passive:!0}),t[o]("pointerout",r.onTouchEnd,{passive:!0}),t[o]("pointerleave",r.onTouchEnd,{passive:!0}),t[o]("contextmenu",r.onTouchEnd,{passive:!0}),(i.preventClicks||i.preventClicksPropagation)&&l[o]("click",r.onClick,!0),i.cssMode&&n[o]("scroll",r.onScroll),i.updateOnWindowResize?r[c](s.ios||s.android?"resize orientationchange observerUpdate":"resize observerUpdate",Is,!0):r[c]("observerUpdate",Is,!0),l[o]("load",r.onLoad,{capture:!0}))};function $f(){const r=this,{params:e}=r;r.onTouchStart=If.bind(r),r.onTouchMove=Rf.bind(r),r.onTouchEnd=Df.bind(r),r.onDocumentTouchStart=_f.bind(r),e.cssMode&&(r.onScroll=Ff.bind(r)),r.onClick=Nf.bind(r),r.onLoad=Hf.bind(r),Do(r,"on")}function Vf(){Do(this,"off")}var Gf={attachEvents:$f,detachEvents:Vf};const Rs=(r,e)=>r.grid&&e.grid&&e.grid.rows>1;function qf(){const r=this,{realIndex:e,initialized:t,params:i,el:l}=r,n=i.breakpoints;if(!n||n&&Object.keys(n).length===0)return;const s=jt(),a=i.breakpointsBase==="window"||!i.breakpointsBase?i.breakpointsBase:"container",o=["window","container"].includes(i.breakpointsBase)||!i.breakpointsBase?r.el:s.querySelector(i.breakpointsBase),c=r.getBreakpoint(n,a,o);if(!c||r.currentBreakpoint===c)return;const h=(c in n?n[c]:void 0)||r.originalParams,f=Rs(r,i),u=Rs(r,h),p=r.params.grabCursor,m=h.grabCursor,x=i.enabled;f&&!u?(l.classList.remove(`${i.containerModifierClass}grid`,`${i.containerModifierClass}grid-column`),r.emitContainerClasses()):!f&&u&&(l.classList.add(`${i.containerModifierClass}grid`),(h.grid.fill&&h.grid.fill==="column"||!h.grid.fill&&i.grid.fill==="column")&&l.classList.add(`${i.containerModifierClass}grid-column`),r.emitContainerClasses()),p&&!m?r.unsetGrabCursor():!p&&m&&r.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(T=>{if(typeof h[T]>"u")return;const S=i[T]&&i[T].enabled,z=h[T]&&h[T].enabled;S&&!z&&r[T].disable(),!S&&z&&r[T].enable()});const y=h.direction&&h.direction!==i.direction,k=i.loop&&(h.slidesPerView!==i.slidesPerView||y),g=i.loop;y&&t&&r.changeDirection(),ke(r.params,h);const b=r.params.enabled,w=r.params.loop;Object.assign(r,{allowTouchMove:r.params.allowTouchMove,allowSlideNext:r.params.allowSlideNext,allowSlidePrev:r.params.allowSlidePrev}),x&&!b?r.disable():!x&&b&&r.enable(),r.currentBreakpoint=c,r.emit("_beforeBreakpoint",h),t&&(k?(r.loopDestroy(),r.loopCreate(e),r.updateSlides()):!g&&w?(r.loopCreate(e),r.updateSlides()):g&&!w&&r.loopDestroy()),r.emit("breakpoint",h)}function Wf(r,e="window",t){if(!r||e==="container"&&!t)return;let i=!1;const l=ge(),n=e==="window"?l.innerHeight:t.clientHeight,s=Object.keys(r).map(a=>{if(typeof a=="string"&&a.indexOf("@")===0){const o=parseFloat(a.substr(1));return{value:n*o,point:a}}return{value:a,point:a}});s.sort((a,o)=>parseInt(a.value,10)-parseInt(o.value,10));for(let a=0;a<s.length;a+=1){const{point:o,value:c}=s[a];e==="window"?l.matchMedia(`(min-width: ${c}px)`).matches&&(i=o):c<=t.clientWidth&&(i=o)}return i||"max"}var Uf={setBreakpoint:qf,getBreakpoint:Wf};function Kf(r,e){const t=[];return r.forEach(i=>{typeof i=="object"?Object.keys(i).forEach(l=>{i[l]&&t.push(e+l)}):typeof i=="string"&&t.push(e+i)}),t}function Jf(){const r=this,{classNames:e,params:t,rtl:i,el:l,device:n}=r,s=Kf(["initialized",t.direction,{"free-mode":r.params.freeMode&&t.freeMode.enabled},{autoheight:t.autoHeight},{rtl:i},{grid:t.grid&&t.grid.rows>1},{"grid-column":t.grid&&t.grid.rows>1&&t.grid.fill==="column"},{android:n.android},{ios:n.ios},{"css-mode":t.cssMode},{centered:t.cssMode&&t.centeredSlides},{"watch-progress":t.watchSlidesProgress}],t.containerModifierClass);e.push(...s),l.classList.add(...e),r.emitContainerClasses()}function Yf(){const r=this,{el:e,classNames:t}=r;!e||typeof e=="string"||(e.classList.remove(...t),r.emitContainerClasses())}var Xf={addClasses:Jf,removeClasses:Yf};function Zf(){const r=this,{isLocked:e,params:t}=r,{slidesOffsetBefore:i}=t;if(i){const l=r.slides.length-1,n=r.slidesGrid[l]+r.slidesSizesGrid[l]+i*2;r.isLocked=r.size>n}else r.isLocked=r.snapGrid.length===1;t.allowSlideNext===!0&&(r.allowSlideNext=!r.isLocked),t.allowSlidePrev===!0&&(r.allowSlidePrev=!r.isLocked),e&&e!==r.isLocked&&(r.isEnd=!1),e!==r.isLocked&&r.emit(r.isLocked?"lock":"unlock")}var Qf={checkOverflow:Zf},Ds={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,snapToSlideEdge:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function e1(r,e){return function(i={}){const l=Object.keys(i)[0],n=i[l];if(typeof n!="object"||n===null){ke(e,i);return}if(r[l]===!0&&(r[l]={enabled:!0}),l==="navigation"&&r[l]&&r[l].enabled&&!r[l].prevEl&&!r[l].nextEl&&(r[l].auto=!0),["pagination","scrollbar"].indexOf(l)>=0&&r[l]&&r[l].enabled&&!r[l].el&&(r[l].auto=!0),!(l in r&&"enabled"in n)){ke(e,i);return}typeof r[l]=="object"&&!("enabled"in r[l])&&(r[l].enabled=!0),r[l]||(r[l]={enabled:!1}),ke(e,i)}}const jl={eventsEmitter:Y0,update:of,translate:pf,transition:vf,slide:Tf,loop:Of,grabCursor:Bf,events:Gf,breakpoints:Uf,checkOverflow:Qf,classes:Xf},Bl={};class ze{constructor(...e){let t,i;e.length===1&&e[0].constructor&&Object.prototype.toString.call(e[0]).slice(8,-1)==="Object"?i=e[0]:[t,i]=e,i||(i={}),i=ke({},i),t&&!i.el&&(i.el=t);const l=jt();if(i.el&&typeof i.el=="string"&&l.querySelectorAll(i.el).length>1){const o=[];return l.querySelectorAll(i.el).forEach(c=>{const d=ke({},i,{el:c});o.push(new ze(d))}),o}const n=this;n.__swiper__=!0,n.support=Bo(),n.device=Po({userAgent:i.userAgent}),n.browser=Io(),n.eventsListeners={},n.eventsAnyListeners=[],n.modules=[...n.__modules__],i.modules&&Array.isArray(i.modules)&&i.modules.forEach(o=>{typeof o=="function"&&n.modules.indexOf(o)<0&&n.modules.push(o)});const s={};n.modules.forEach(o=>{o({params:i,swiper:n,extendParams:e1(i,s),on:n.on.bind(n),once:n.once.bind(n),off:n.off.bind(n),emit:n.emit.bind(n)})});const a=ke({},Ds,s);return n.params=ke({},a,Bl,i),n.originalParams=ke({},n.params),n.passedParams=ke({},i),n.params&&n.params.on&&Object.keys(n.params.on).forEach(o=>{n.on(o,n.params.on[o])}),n.params&&n.params.onAny&&n.onAny(n.params.onAny),Object.assign(n,{enabled:n.params.enabled,el:t,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return n.params.direction==="horizontal"},isVertical(){return n.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:n.params.allowSlideNext,allowSlidePrev:n.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:n.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:n.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),n.emit("_swiper"),n.params.init&&n.init(),n}getDirectionLabel(e){return this.isHorizontal()?e:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[e]}getSlideIndex(e){const{slidesEl:t,params:i}=this,l=Ke(t,`.${i.slideClass}, swiper-slide`),n=Ls(l[0]);return Ls(e)-n}getSlideIndexByData(e){return this.getSlideIndex(this.slides.find(t=>t.getAttribute("data-swiper-slide-index")*1===e))}getSlideIndexWhenGrid(e){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill==="column"?e=Math.floor(e/this.params.grid.rows):this.params.grid.fill==="row"&&(e=e%Math.ceil(this.slides.length/this.params.grid.rows))),e}recalcSlides(){const e=this,{slidesEl:t,params:i}=e;e.slides=Ke(t,`.${i.slideClass}, swiper-slide`)}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,t){const i=this;e=Math.min(Math.max(e,0),1);const l=i.minTranslate(),s=(i.maxTranslate()-l)*e+l;i.translateTo(s,typeof t>"u"?0:t),i.updateActiveIndex(),i.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=e.el.className.split(" ").filter(i=>i.indexOf("swiper")===0||i.indexOf(e.params.containerModifierClass)===0);e.emit("_containerClasses",t.join(" "))}getSlideClasses(e){const t=this;return t.destroyed?"":e.className.split(" ").filter(i=>i.indexOf("swiper-slide")===0||i.indexOf(t.params.slideClass)===0).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=[];e.slides.forEach(i=>{const l=e.getSlideClasses(i);t.push({slideEl:i,classNames:l}),e.emit("_slideClass",i,l)}),e.emit("_slideClasses",t)}slidesPerViewDynamic(e="current",t=!1){const i=this,{params:l,slides:n,slidesGrid:s,slidesSizesGrid:a,size:o,activeIndex:c}=i;let d=1;if(typeof l.slidesPerView=="number")return l.slidesPerView;if(l.centeredSlides){let h=n[c]?Math.ceil(n[c].swiperSlideSize):0,f;for(let u=c+1;u<n.length;u+=1)n[u]&&!f&&(h+=Math.ceil(n[u].swiperSlideSize),d+=1,h>o&&(f=!0));for(let u=c-1;u>=0;u-=1)n[u]&&!f&&(h+=n[u].swiperSlideSize,d+=1,h>o&&(f=!0))}else if(e==="current")for(let h=c+1;h<n.length;h+=1)(t?s[h]+a[h]-s[c]<o:s[h]-s[c]<o)&&(d+=1);else for(let h=c-1;h>=0;h-=1)s[c]-s[h]<o&&(d+=1);return d}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:t,params:i}=e;i.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll('[loading="lazy"]')].forEach(s=>{s.complete&&ki(e,s)}),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses();function l(){const s=e.rtlTranslate?e.translate*-1:e.translate,a=Math.min(Math.max(s,e.maxTranslate()),e.minTranslate());e.setTranslate(a),e.updateActiveIndex(),e.updateSlidesClasses()}let n;if(i.freeMode&&i.freeMode.enabled&&!i.cssMode)l(),i.autoHeight&&e.updateAutoHeight();else{if((i.slidesPerView==="auto"||i.slidesPerView>1)&&e.isEnd&&!i.centeredSlides){const s=e.virtual&&i.virtual.enabled?e.virtual.slides:e.slides;n=e.slideTo(s.length-1,0,!1,!0)}else n=e.slideTo(e.activeIndex,0,!1,!0);n||l()}i.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,t=!0){const i=this,l=i.params.direction;return e||(e=l==="horizontal"?"vertical":"horizontal"),e===l||e!=="horizontal"&&e!=="vertical"||(i.el.classList.remove(`${i.params.containerModifierClass}${l}`),i.el.classList.add(`${i.params.containerModifierClass}${e}`),i.emitContainerClasses(),i.params.direction=e,i.slides.forEach(n=>{e==="vertical"?n.style.width="":n.style.height=""}),i.emit("changeDirection"),t&&i.update()),i}changeLanguageDirection(e){const t=this;t.rtl&&e==="rtl"||!t.rtl&&e==="ltr"||(t.rtl=e==="rtl",t.rtlTranslate=t.params.direction==="horizontal"&&t.rtl,t.rtl?(t.el.classList.add(`${t.params.containerModifierClass}rtl`),t.el.dir="rtl"):(t.el.classList.remove(`${t.params.containerModifierClass}rtl`),t.el.dir="ltr"),t.update())}mount(e){const t=this;if(t.mounted)return!0;let i=e||t.params.el;if(typeof i=="string"&&(i=document.querySelector(i)),!i)return!1;i.swiper=t,i.parentNode&&i.parentNode.host&&i.parentNode.host.nodeName===t.params.swiperElementNodeName.toUpperCase()&&(t.isElement=!0);const l=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;let s=i&&i.shadowRoot&&i.shadowRoot.querySelector?i.shadowRoot.querySelector(l()):Ke(i,l())[0];return!s&&t.params.createElements&&(s=sn("div",t.params.wrapperClass),i.append(s),Ke(i,`.${t.params.slideClass}`).forEach(a=>{s.append(a)})),Object.assign(t,{el:i,wrapperEl:s,slidesEl:t.isElement&&!i.parentNode.host.slideSlots?i.parentNode.host:s,hostEl:t.isElement?i.parentNode.host:i,mounted:!0,rtl:i.dir.toLowerCase()==="rtl"||at(i,"direction")==="rtl",rtlTranslate:t.params.direction==="horizontal"&&(i.dir.toLowerCase()==="rtl"||at(i,"direction")==="rtl"),wrongRTL:at(s,"display")==="-webkit-box"}),!0}init(e){const t=this;if(t.initialized||t.mount(e)===!1)return t;t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.loop&&t.virtual&&t.params.virtual.enabled?t.slideTo(t.params.initialSlide+t.virtual.slidesBefore,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.params.loop&&t.loopCreate(void 0,!0),t.attachEvents();const l=[...t.el.querySelectorAll('[loading="lazy"]')];return t.isElement&&l.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),l.forEach(n=>{n.complete?ki(t,n):n.addEventListener("load",s=>{ki(t,s.target)})}),an(t),t.initialized=!0,an(t),t.emit("init"),t.emit("afterInit"),t}destroy(e=!0,t=!0){const i=this,{params:l,el:n,wrapperEl:s,slides:a}=i;return typeof i.params>"u"||i.destroyed||(i.emit("beforeDestroy"),i.initialized=!1,i.detachEvents(),l.loop&&i.loopDestroy(),t&&(i.removeClasses(),n&&typeof n!="string"&&n.removeAttribute("style"),s&&s.removeAttribute("style"),a&&a.length&&a.forEach(o=>{o.classList.remove(l.slideVisibleClass,l.slideFullyVisibleClass,l.slideActiveClass,l.slideNextClass,l.slidePrevClass),o.removeAttribute("style"),o.removeAttribute("data-swiper-slide-index")})),i.emit("destroy"),Object.keys(i.eventsListeners).forEach(o=>{i.off(o)}),e!==!1&&(i.el&&typeof i.el!="string"&&(i.el.swiper=null),R0(i)),i.destroyed=!0),null}static extendDefaults(e){ke(Bl,e)}static get extendedDefaults(){return Bl}static get defaults(){return Ds}static installModule(e){ze.prototype.__modules__||(ze.prototype.__modules__=[]);const t=ze.prototype.__modules__;typeof e=="function"&&t.indexOf(e)<0&&t.push(e)}static use(e){return Array.isArray(e)?(e.forEach(t=>ze.installModule(t)),ze):(ze.installModule(e),ze)}}Object.keys(jl).forEach(r=>{Object.keys(jl[r]).forEach(e=>{ze.prototype[e]=jl[r][e]})});ze.use([K0,J0]);function Ns(r){r.Blocks.add("swiper",{label:"Swiper Slider",category:"Extra",media:'<svg viewBox="0 0 24 24"><path d="M22 7.6c0-1-.5-1.6-1.3-1.6H3.4C2.5 6 2 6.7 2 7.6v9.8c0 1 .5 1.6 1.3 1.6h17.4c.8 0 1.3-.6 1.3-1.6V7.6zM21 18H3V7h18v11z" fill-rule="nonzero"/><path d="M4 12.5L6 14v-3zM20 12.5L18 14v-3z"/></svg>',content:`<div class="swiper" style="height: 200px">
          <div class="swiper-wrapper">
            <div class="swiper-slide"><div>Slide 1</div></div>
            <div class="swiper-slide"><div>Slide 2</div></div>
            <div class="swiper-slide"><div>Slide 3</div></div>
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>`}),r.Blocks.add("blog1",{label:"Blog 1",category:"Blog",media:'<svg viewBox="0 0 266 150" fill="#fff"><path fill="#fff" d="M0 0h266v150H0z"></path><rect x="20.5" y="43.5" width="67" height="62" rx="1.5" fill="#fff" stroke="#cbd5e0"></rect><path d="M48.556 69h10.888c.86 0 1.556-.696 1.556-1.556V56.556c0-.86-.696-1.556-1.556-1.556H48.556c-.86 0-1.556.696-1.556 1.556v10.888c0 .86.696 1.556 1.556 1.556zm0 0l8.555-8.556L61 64.334m-8.556-5.056a1.167 1.167 0 11-2.333 0 1.167 1.167 0 012.333 0z" stroke="#a0aec0" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M26 88a1 1 0 011-1h48a1 1 0 110 2H27a1 1 0 01-1-1zM26 93a1 1 0 011-1h40a1 1 0 110 2H27a1 1 0 01-1-1z" fill="#a0aec0"></path><path d="M26 98a1 1 0 011-1h11a1 1 0 110 2H27a1 1 0 01-1-1z" fill="#6366f1"></path><path d="M26 82.5a1.5 1.5 0 011.5-1.5h32a1.5 1.5 0 010 3h-32a1.5 1.5 0 01-1.5-1.5z" fill="#4a5568"></path><rect x="99.5" y="43.5" width="67" height="62" rx="1.5" fill="#fff" stroke="#cbd5e0"></rect><path d="M127.556 69h10.888c.86 0 1.556-.696 1.556-1.556V56.556c0-.86-.696-1.556-1.556-1.556h-10.888c-.86 0-1.556.696-1.556 1.556v10.888c0 .86.696 1.556 1.556 1.556zm0 0l8.555-8.556 3.889 3.89m-8.556-5.056a1.166 1.166 0 11-2.333 0 1.166 1.166 0 012.333 0z" stroke="#a0aec0" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M105 88a1 1 0 011-1h48a1 1 0 010 2h-48a1 1 0 01-1-1zM105 93a1 1 0 011-1h40a1 1 0 010 2h-40a1 1 0 01-1-1z" fill="#a0aec0"></path><path d="M105 98a1 1 0 011-1h11a1 1 0 010 2h-11a1 1 0 01-1-1z" fill="#6366f1"></path><path d="M105 82.5a1.5 1.5 0 011.5-1.5h32a1.5 1.5 0 010 3h-32a1.5 1.5 0 01-1.5-1.5z" fill="#4a5568"></path><rect x="178.5" y="43.5" width="67" height="62" rx="1.5" fill="#fff" stroke="#cbd5e0"></rect><path d="M206.556 69h10.888c.86 0 1.556-.696 1.556-1.556V56.556c0-.86-.696-1.556-1.556-1.556h-10.888c-.86 0-1.556.696-1.556 1.556v10.888c0 .86.696 1.556 1.556 1.556zm0 0l8.555-8.556 3.889 3.89m-8.556-5.056a1.166 1.166 0 11-2.333 0 1.166 1.166 0 012.333 0z" stroke="#a0aec0" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M184 88a1 1 0 011-1h48a1 1 0 010 2h-48a1 1 0 01-1-1zM184 93a1 1 0 011-1h40a1 1 0 010 2h-40a1 1 0 01-1-1z" fill="#a0aec0"></path><path d="M184 98a1 1 0 011-1h11a1 1 0 010 2h-11a1 1 0 01-1-1z" fill="#6366f1"></path><path d="M184 82.5a1.5 1.5 0 011.5-1.5h32a1.5 1.5 0 010 3h-32a1.5 1.5 0 01-1.5-1.5z" fill="#4a5568"></path></svg>',content:`<section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-wrap -m-4">
                <div class="p-4 md:w-1/3">
                    <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog">
                    <div class="p-6">
                        <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                        <h1 class="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
                        <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                        <div class="flex items-center flex-wrap ">
                        <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="#fff" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                        <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                            <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="#fff" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                            </svg>1.2K
                        </span>
                        <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                            <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="#fff" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                            </svg>6
                        </span>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="p-4 md:w-1/3">
                    <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/721x401" alt="blog">
                    <div class="p-6">
                        <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                        <h1 class="title-font text-lg font-medium text-gray-900 mb-3">The 400 Blows</h1>
                        <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                        <div class="flex items-center flex-wrap">
                        <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="#fff" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                        <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                            <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="#fff" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                            </svg>1.2K
                        </span>
                        <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                            <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="#fff" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                            </svg>6
                        </span>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="p-4 md:w-1/3">
                    <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/722x402" alt="blog">
                    <div class="p-6">
                        <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                        <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
                        <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                        <div class="flex items-center flex-wrap ">
                        <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="#fff" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                        <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                            <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="#fff" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                            </svg>1.2K
                        </span>
                        <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                            <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="#fff" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                            </svg>6
                        </span>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>`}),r.Blocks.add("blog2",{label:"Blog 2",category:"Blog",media:'<svg viewBox="0 0 266 150" fill="#fff"><path fill="#fff" d="M0 0h266v150H0z"></path><rect x="20" y="43" width="68" height="63" rx="2" fill="#e2e8f0"></rect><path d="M29 73a1 1 0 011-1h48a1 1 0 110 2H30a1 1 0 01-1-1zM33 78a1 1 0 011-1h40a1 1 0 110 2H34a1 1 0 01-1-1z" fill="#a0aec0"></path><path d="M48 83a1 1 0 011-1h11a1 1 0 110 2H49a1 1 0 01-1-1z" fill="#6366f1"></path><path d="M37 67.5a1.5 1.5 0 011.5-1.5h32a1.5 1.5 0 010 3h-32a1.5 1.5 0 01-1.5-1.5z" fill="#4a5568"></path><rect x="99" y="43" width="68" height="63" rx="2" fill="#e2e8f0"></rect><path d="M108 73a1 1 0 011-1h48a1 1 0 010 2h-48a1 1 0 01-1-1zM112 78a1 1 0 011-1h40a1 1 0 010 2h-40a1 1 0 01-1-1z" fill="#a0aec0"></path><path d="M127 83a1 1 0 011-1h11a1 1 0 010 2h-11a1 1 0 01-1-1z" fill="#6366f1"></path><path d="M116 67.5a1.5 1.5 0 011.5-1.5h32a1.5 1.5 0 010 3h-32a1.5 1.5 0 01-1.5-1.5z" fill="#4a5568"></path><rect x="178" y="43" width="68" height="63" rx="2" fill="#e2e8f0"></rect><path d="M187 73a1 1 0 011-1h48a1 1 0 010 2h-48a1 1 0 01-1-1zM191 78a1 1 0 011-1h40a1 1 0 010 2h-40a1 1 0 01-1-1z" fill="#a0aec0"></path><path d="M206 83a1 1 0 011-1h11a1 1 0 010 2h-11a1 1 0 01-1-1z" fill="#6366f1"></path><path d="M195 67.5a1.5 1.5 0 011.5-1.5h32a1.5 1.5 0 010 3h-32a1.5 1.5 0 01-1.5-1.5z" fill="#4a5568"></path></svg>',content:`<section class="text-gray-600 body-font">
                    <div class="container px-5 py-24 mx-auto">
                        <div class="flex flex-wrap -m-4">
                        <div class="p-4 lg:w-1/3">
                            <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                            <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Raclette Blueberry Nextious Level</h1>
                            <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                            <a class="text-indigo-500 inline-flex items-center">Learn More
                                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="#fff" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                            <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                                <span class="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="#fff" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                </svg>1.2K
                                </span>
                                <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="#fff" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                </svg>6
                                </span>
                            </div>
                            </div>
                        </div>
                        <div class="p-4 lg:w-1/3">
                            <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                            <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Ennui Snackwave Thundercats</h1>
                            <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                            <a class="text-indigo-500 inline-flex items-center">Learn More
                                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="#fff" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                            <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                                <span class="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="#fff" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                </svg>1.2K
                                </span>
                                <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="#fff" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                </svg>6
                                </span>
                            </div>
                            </div>
                        </div>
                        <div class="p-4 lg:w-1/3">
                            <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                            <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Selvage Poke Waistcoat Godard</h1>
                            <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                            <a class="text-indigo-500 inline-flex items-center">Learn More
                                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="#fff" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                            <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                                <span class="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="#fff" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                </svg>1.2K
                                </span>
                                <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="#fff" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                </svg>6
                                </span>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </section>`}),r.Blocks.add("blog3",{label:"Blog 3",category:"Blog",media:'<svg viewBox="0 0 266 150" fill="#fff"><path fill="#fff" d="M0 0h266v150H0z"></path><rect x="20" y="48" width="70" height="5" rx="2.5" fill="#4a5568"></rect><rect x="20" y="36" width="34" height="8" rx="2" fill="#ebf4ff"></rect><rect x="20" y="58" width="92" height="4" rx="2" fill="#a0aec0"></rect><rect x="20" y="66" width="82" height="4" rx="2" fill="#a0aec0"></rect><rect x="20" y="74" width="68" height="4" rx="2" fill="#a0aec0"></rect><rect x="20" y="82" width="18" height="4" rx="2" fill="#6366f1"></rect><rect x="23" y="39" width="28" height="2" rx="1" fill="#6366f1"></rect><path d="M121.5 93a.5.5 0 010 1h-101a.5.5 0 010-1h101z" fill="#e2e8f0"></path><circle cx="27.5" cy="107.5" r="7.5" fill="#e2e8f0"></circle><path d="M39 110a1 1 0 011-1h19a1 1 0 010 2H40a1 1 0 01-1-1z" fill="#a0aec0"></path><rect x="39" y="103" width="35" height="3" rx="1.5" fill="#4a5568"></rect><rect x="144" y="48" width="70" height="5" rx="2.5" fill="#4a5568"></rect><rect x="144" y="36" width="34" height="8" rx="2" fill="#ebf4ff"></rect><rect x="144" y="58" width="92" height="4" rx="2" fill="#a0aec0"></rect><rect x="144" y="66" width="82" height="4" rx="2" fill="#a0aec0"></rect><rect x="144" y="74" width="68" height="4" rx="2" fill="#a0aec0"></rect><rect x="144" y="82" width="18" height="4" rx="2" fill="#6366f1"></rect><rect x="147" y="39" width="28" height="2" rx="1" fill="#6366f1"></rect><path d="M245.5 93a.5.5 0 010 1h-101a.5.5 0 010-1h101z" fill="#e2e8f0"></path><circle cx="151.5" cy="107.5" r="7.5" fill="#e2e8f0"></circle><path d="M163 110a1 1 0 011-1h19a1 1 0 010 2h-19a1 1 0 01-1-1z" fill="#a0aec0"></path><rect x="163" y="103" width="35" height="3" rx="1.5" fill="#4a5568"></rect></svg>',content:`<section class="text-gray-600 body-font overflow-hidden">
            <div class="container px-5 py-24 mx-auto">
              <div class="flex flex-wrap -m-12">
                <div class="p-12 md:w-1/2 flex flex-col items-start">
                  <span class="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">CATEGORY</span>
                  <h2 class="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">Roof party normcore before they sold out, cornhole vape</h2>
                  <p class="leading-relaxed mb-8">Live-edge letterpress cliche, salvia fanny pack humblebrag narwhal portland. VHS man braid palo santo hoodie brunch trust fund. Bitters hashtag waistcoat fashion axe chia unicorn. Plaid fixie chambray 90's, slow-carb etsy tumeric. Cray pug you probably haven't heard of them hexagon kickstarter craft beer pork chic.</p>
                  <div class="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                    <a class="text-indigo-500 inline-flex items-center">Learn More
                      <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="#fff" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <span class="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="#fff" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>1.2K
                    </span>
                    <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="#fff" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>6
                    </span>
                  </div>
                  <a class="inline-flex items-center">
                    <img alt="blog" src="https://dummyimage.com/104x104" class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center">
                    <span class="flex-grow flex flex-col pl-4">
                      <span class="title-font font-medium text-gray-900">Holden Caulfield</span>
                      <span class="text-gray-400 text-xs tracking-widest mt-0.5">UI DEVELOPER</span>
                    </span>
                  </a>
                </div>
                <div class="p-12 md:w-1/2 flex flex-col items-start">
                  <span class="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">CATEGORY</span>
                  <h2 class="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">Pinterest DIY dreamcatcher gentrify single-origin coffee</h2>
                  <p class="leading-relaxed mb-8">Live-edge letterpress cliche, salvia fanny pack humblebrag narwhal portland. VHS man braid palo santo hoodie brunch trust fund. Bitters hashtag waistcoat fashion axe chia unicorn. Plaid fixie chambray 90's, slow-carb etsy tumeric.</p>
                  <div class="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                    <a class="text-indigo-500 inline-flex items-center">Learn More
                      <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="#fff" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <span class="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="#fff" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>1.2K
                    </span>
                    <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="#fff" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>6
                    </span>
                  </div>
                  <a class="inline-flex items-center">
                    <img alt="blog" src="https://dummyimage.com/103x103" class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center">
                    <span class="flex-grow flex flex-col pl-4">
                      <span class="title-font font-medium text-gray-900">Alper Kamu</span>
                      <span class="text-gray-400 text-xs tracking-widest mt-0.5">DESIGNER</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </section>`}),r.Blocks.add("blog4",{label:"Blog 4",category:"Blog",media:'<svg viewBox="0 0 266 150" fill="#fff"><path fill="#fff" d="M0 0h266v150H0z"></path><rect x="84" y="20" width="70" height="5" rx="2.5" fill="#4a5568"></rect><rect x="84" y="29" width="145" height="3" rx="1.5" fill="#a0aec0"></rect><rect x="20" y="26" width="12" height="2" rx="1" fill="#a0aec0"></rect><rect x="84" y="35" width="129" height="3" rx="1.5" fill="#a0aec0"></rect><rect x="84" y="41" width="18" height="3" rx="1.5" fill="#6366f1"></rect><path d="M245.5 53a.5.5 0 010 1h-225a.5.5 0 010-1h225zM245.5 96a.5.5 0 010 1h-225a.5.5 0 010-1h225z" fill="#e2e8f0"></path><rect x="20" y="20" width="23" height="3" rx="1.5" fill="#4a5568"></rect><rect x="84" y="63" width="70" height="5" rx="2.5" fill="#4a5568"></rect><rect x="84" y="72" width="145" height="3" rx="1.5" fill="#a0aec0"></rect><rect x="20" y="69" width="12" height="2" rx="1" fill="#a0aec0"></rect><rect x="84" y="78" width="129" height="3" rx="1.5" fill="#a0aec0"></rect><rect x="84" y="84" width="18" height="3" rx="1.5" fill="#6366f1"></rect><rect x="20" y="63" width="23" height="3" rx="1.5" fill="#4a5568"></rect><rect x="84" y="106" width="70" height="5" rx="2.5" fill="#4a5568"></rect><rect x="84" y="115" width="145" height="3" rx="1.5" fill="#a0aec0"></rect><rect x="20" y="112" width="12" height="2" rx="1" fill="#a0aec0"></rect><rect x="84" y="121" width="129" height="3" rx="1.5" fill="#a0aec0"></rect><rect x="84" y="127" width="18" height="3" rx="1.5" fill="#6366f1"></rect><rect x="20" y="106" width="23" height="3" rx="1.5" fill="#4a5568"></rect></svg>',content:`<section class="text-gray-600 body-font overflow-hidden">
          <div class="container px-5 py-24 mx-auto">
            <div class="-my-8 divide-y-2 divide-gray-100">
              <div class="py-8 flex flex-wrap md:flex-nowrap">
                <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span class="font-semibold title-font text-gray-700">CATEGORY</span>
                  <span class="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
                </div>
                <div class="md:flex-grow">
                  <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">Bitters hashtag waistcoat fashion axe chia unicorn</h2>
                  <p class="leading-relaxed">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
                  <a class="text-indigo-500 inline-flex items-center mt-4">Learn More
                    <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="#fff" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div class="py-8 flex flex-wrap md:flex-nowrap">
                <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span class="font-semibold title-font text-gray-700">CATEGORY</span>
                  <span class="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
                </div>
                <div class="md:flex-grow">
                  <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">Meditation bushwick direct trade taxidermy shaman</h2>
                  <p class="leading-relaxed">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
                  <a class="text-indigo-500 inline-flex items-center mt-4">Learn More
                    <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="#fff" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div class="py-8 flex flex-wrap md:flex-nowrap">
                <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span class="font-semibold title-font text-gray-700">CATEGORY</span>
                  <span class="text-sm text-gray-500">12 Jun 2019</span>
                </div>
                <div class="md:flex-grow">
                  <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">Woke master cleanse drinking vinegar salvia</h2>
                  <p class="leading-relaxed">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
                  <a class="text-indigo-500 inline-flex items-center mt-4">Learn More
                    <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="#fff" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>`}),r.Blocks.add("blog5",{label:"Blog 5",category:"Blog",media:'<svg viewBox="0 0 266 150" fill="#fff"><path fill="#fff" d="M0 0h266v150H0z"></path><path d="M39 70.5a1.5 1.5 0 011.5-1.5h46a1.5 1.5 0 010 3h-46a1.5 1.5 0 01-1.5-1.5zM39 76.5a1.5 1.5 0 011.5-1.5h40a1.5 1.5 0 010 3h-40a1.5 1.5 0 01-1.5-1.5z" fill="#a0aec0"></path><path d="M39 58.5a1.5 1.5 0 011.5-1.5h14a1.5 1.5 0 010 3h-14a1.5 1.5 0 01-1.5-1.5z" fill="#6366f1"></path><path d="M39 64.5a1.5 1.5 0 011.5-1.5h32a1.5 1.5 0 010 3h-32a1.5 1.5 0 01-1.5-1.5z" fill="#4a5568"></path><path d="M20 60a3 3 0 013-3h6a3 3 0 110 6h-6a3 3 0 01-3-3z" fill="#e2e8f0"></path><circle cx="44" cy="88" r="5" fill="#e2e8f0"></circle><path d="M51 87.5a1.5 1.5 0 011.5-1.5h18a1.5 1.5 0 010 3h-18a1.5 1.5 0 01-1.5-1.5z" fill="#4a5568"></path><path d="M118 70.5a1.5 1.5 0 011.5-1.5h46a1.5 1.5 0 010 3h-46a1.5 1.5 0 01-1.5-1.5zM118 76.5a1.5 1.5 0 011.5-1.5h40a1.5 1.5 0 010 3h-40a1.5 1.5 0 01-1.5-1.5z" fill="#a0aec0"></path><path d="M118 58.5a1.5 1.5 0 011.5-1.5h14a1.5 1.5 0 010 3h-14a1.5 1.5 0 01-1.5-1.5z" fill="#6366f1"></path><path d="M118 64.5a1.5 1.5 0 011.5-1.5h32a1.5 1.5 0 010 3h-32a1.5 1.5 0 01-1.5-1.5z" fill="#4a5568"></path><path d="M99 60a3 3 0 013-3h6a3 3 0 110 6h-6a3 3 0 01-3-3z" fill="#e2e8f0"></path><circle cx="123" cy="88" r="5" fill="#e2e8f0"></circle><path d="M130 87.5a1.5 1.5 0 011.5-1.5h18a1.5 1.5 0 010 3h-18a1.5 1.5 0 01-1.5-1.5z" fill="#4a5568"></path><path d="M197 70.5a1.5 1.5 0 011.5-1.5h46a1.5 1.5 0 010 3h-46a1.5 1.5 0 01-1.5-1.5zM197 76.5a1.5 1.5 0 011.5-1.5h40a1.5 1.5 0 010 3h-40a1.5 1.5 0 01-1.5-1.5z" fill="#a0aec0"></path><path d="M197 58.5a1.5 1.5 0 011.5-1.5h14a1.5 1.5 0 010 3h-14a1.5 1.5 0 01-1.5-1.5z" fill="#6366f1"></path><path d="M197 64.5a1.5 1.5 0 011.5-1.5h32a1.5 1.5 0 010 3h-32a1.5 1.5 0 01-1.5-1.5z" fill="#4a5568"></path><path d="M178 60a3 3 0 013-3h6a3 3 0 110 6h-6a3 3 0 01-3-3z" fill="#e2e8f0"></path><circle cx="202" cy="88" r="5" fill="#e2e8f0"></circle><path d="M209 87.5a1.5 1.5 0 011.5-1.5h18a1.5 1.5 0 010 3h-18a1.5 1.5 0 01-1.5-1.5z" fill="#4a5568"></path></svg>',content:`<section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
              <div class="flex flex-wrap -mx-4 -my-8">
                <div class="py-8 px-4 lg:w-1/3">
                  <div class="h-full flex items-start">
                    <div class="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                      <span class="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">Jul</span>
                      <span class="font-medium text-lg text-gray-800 title-font leading-none">18</span>
                    </div>
                    <div class="flex-grow pl-6">
                      <h2 class="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">CATEGORY</h2>
                      <h1 class="title-font text-xl font-medium text-gray-900 mb-3">The 400 Blows</h1>
                      <p class="leading-relaxed mb-5">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                      <a class="inline-flex items-center">
                        <img alt="blog" src="https://dummyimage.com/103x103" class="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center">
                        <span class="flex-grow flex flex-col pl-3">
                          <span class="title-font font-medium text-gray-900">Alper Kamu</span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="py-8 px-4 lg:w-1/3">
                  <div class="h-full flex items-start">
                    <div class="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                      <span class="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">Jul</span>
                      <span class="font-medium text-lg text-gray-800 title-font leading-none">18</span>
                    </div>
                    <div class="flex-grow pl-6">
                      <h2 class="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">CATEGORY</h2>
                      <h1 class="title-font text-xl font-medium text-gray-900 mb-3">Shooting Stars</h1>
                      <p class="leading-relaxed mb-5">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                      <a class="inline-flex items-center">
                        <img alt="blog" src="https://dummyimage.com/102x102" class="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center">
                        <span class="flex-grow flex flex-col pl-3">
                          <span class="title-font font-medium text-gray-900">Holden Caulfield</span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="py-8 px-4 lg:w-1/3">
                  <div class="h-full flex items-start">
                    <div class="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                      <span class="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">Jul</span>
                      <span class="font-medium text-lg text-gray-800 title-font leading-none">18</span>
                    </div>
                    <div class="flex-grow pl-6">
                      <h2 class="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">CATEGORY</h2>
                      <h1 class="title-font text-xl font-medium text-gray-900 mb-3">Neptune</h1>
                      <p class="leading-relaxed mb-5">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                      <a class="inline-flex items-center">
                        <img alt="blog" src="https://dummyimage.com/101x101" class="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center">
                        <span class="flex-grow flex flex-col pl-3">
                          <span class="title-font font-medium text-gray-900">Henry Letham</span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>`}),r.Blocks.add("contact1",{label:"Contact 1",category:"Contact",media:'<svg fill="none" viewBox="0 0 266 150"><path fill="#fff" d="M0 0h266v150H0z"></path><rect x="153" y="30" width="93" height="90" rx="2" fill="#e2e8f0"></rect><rect x="162" y="101" width="75" height="10" rx="2" fill="#6366f1"></rect><rect x="162" y="66" width="75" height="30" rx="2" fill="#cbd5e0"></rect><rect x="162" y="51" width="75" height="10" rx="2" fill="#cbd5e0"></rect><rect x="162" y="40" width="40" height="4" rx="2" fill="#4a5568"></rect><path d="M89 71.682C89 81.546 76.5 90 76.5 90S64 81.546 64 71.682c0-3.364 1.317-6.59 3.661-8.968A12.41 12.41 0 0176.5 59a12.41 12.41 0 018.839 3.714A12.776 12.776 0 0189 71.682z" stroke="#a0aec0" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path d="M76.5 75.91c2.301 0 4.167-1.894 4.167-4.228 0-2.335-1.866-4.228-4.167-4.228-2.301 0-4.167 1.893-4.167 4.228 0 2.334 1.866 4.227 4.167 4.227z" stroke="#a0aec0" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path></svg>',content:`<section class="text-gray-600 body-font relative">
          <div class="absolute inset-0 bg-gray-300">
            <iframe width="100%" height="100%" style="filter: grayscale(1) contrast(1.2) opacity(0.4);" frameborder="0" marginheight="0" marginwidth="0" title="map" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"></iframe>
          </div>
          <div class="container px-5 py-24 mx-auto flex">
            <div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
              <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
              <p class="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
              <div class="relative mb-4">
                <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
              </div>
              <div class="relative mb-4">
                <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
                <textarea id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
              </div>
              <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
              <p class="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
            </div>
          </div>
        </section>`}),r.Blocks.add("contact2",{label:"Contact 2",category:"Contact",media:'<svg fill="none" viewBox="0 0 266 150"><path fill="#fff" d="M0 0h266v150H0z"></path><rect x="20" y="30" width="127" height="90" rx="2" fill="#e2e8f0"></rect><rect x="30" y="71" width="107" height="39" rx="2" fill="#fff"></rect><rect x="35" y="76" width="24" height="3" rx="1.5" fill="#4a5568"></rect><rect x="35" y="83" width="37" height="3" rx="1.5" fill="#a0aec0"></rect><rect x="35" y="89" width="40" height="3" rx="1.5" fill="#a0aec0"></rect><rect x="86" y="76" width="24" height="3" rx="1.5" fill="#4a5568"></rect><rect x="86" y="83" width="32" height="3" rx="1.5" fill="#6366f1"></rect><rect x="86" y="95" width="20" height="3" rx="1.5" fill="#4a5568"></rect><rect x="86" y="102" width="32" height="3" rx="1.5" fill="#a0aec0"></rect><rect x="162" y="101" width="84" height="10" rx="2" fill="#6366f1"></rect><rect x="162" y="66" width="84" height="30" rx="2" fill="#cbd5e0"></rect><rect x="162" y="51" width="84" height="10" rx="2" fill="#cbd5e0"></rect><rect x="162" y="40" width="44.8" height="4" rx="2" fill="#4a5568"></rect><path d="M89 49.136C89 53.91 83 58 83 58s-6-4.09-6-8.864a6.21 6.21 0 011.757-4.339A5.933 5.933 0 0183 43c1.591 0 3.117.647 4.243 1.797A6.208 6.208 0 0189 49.137z" stroke="#a0aec0" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path><path d="M83 51.182c1.105 0 2-.916 2-2.046s-.895-2.045-2-2.045-2 .916-2 2.045c0 1.13.895 2.046 2 2.046z" stroke="#a0aec0" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path></svg>',content:`<section class="text-gray-600 body-font relative">
          <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
            <div class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
              <iframe width="100%" height="100%" class="absolute inset-0" style="filter: grayscale(1) contrast(1.2) opacity(0.4);" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"></iframe>
              <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                <div class="lg:w-1/2 px-6">
                  <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                  <p class="mt-1">Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter</p>
                </div>
                <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
                  <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                  <a class="text-indigo-500 leading-relaxed">example@email.com</a>
                  <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                  <p class="leading-relaxed">123-456-7890</p>
                </div>
              </div>
            </div>
            <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
              <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
              <p class="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
              <div class="relative mb-4">
                <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
                <input type="text" id="name" name="name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
              </div>
              <div class="relative mb-4">
                <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
              </div>
              <div class="relative mb-4">
                <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
                <textarea id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
              </div>
              <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
              <p class="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
            </div>
          </div>
        </section>`}),r.Blocks.add("contact3",{label:"Contact 3",category:"Contact",media:'<svg fill="none" viewBox="0 0 266 150"><path fill="#fff" d="M0 0h266v150H0z"></path><rect x="113" y="117" width="40" height="10" rx="2" fill="#6366f1"></rect><rect x="63" y="81" width="140" height="30" rx="2" fill="#cbd5e0"></rect><rect x="63" y="65" width="66" height="10" rx="2" fill="#cbd5e0"></rect><rect x="135" y="65" width="68" height="10" rx="2" fill="#cbd5e0"></rect><rect x="90" y="24" width="86" height="5" rx="2.5" fill="#4a5568"></rect><rect x="80" y="33" width="106" height="4" rx="2" fill="#a0aec0"></rect><rect x="85" y="41" width="97" height="4" rx="2" fill="#a0aec0"></rect></svg>',content:`<section class="text-gray-600 body-font relative">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center w-full mb-12">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>
              <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>
            </div>
            <div class="lg:w-1/2 md:w-2/3 mx-auto">
              <div class="flex flex-wrap -m-2">
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
                    <input type="text" id="name" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                  </div>
                </div>
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                    <input type="email" id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                  </div>
                </div>
                <div class="p-2 w-full">
                  <div class="relative">
                    <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
                    <textarea id="message" name="message" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                  </div>
                </div>
                <div class="p-2 w-full">
                  <button class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                </div>
                <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                  <a class="text-indigo-500">example@email.com</a>
                  <p class="leading-normal my-5">49 Smith St.
                    <br>Saint Cloud, MN 56301
                  </p>
                  <span class="inline-flex">
                    <a class="text-gray-500">
                      <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a class="ml-4 text-gray-500">
                      <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a class="ml-4 text-gray-500">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                      </svg>
                    </a>
                    <a class="ml-4 text-gray-500">
                      <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>`}),r.Blocks.add("content1",{label:"Content 1",category:"Content",media:'<svg viewBox="0 0 266 150" fill="none"><path fill="#fff" d="M0 0h266v150H0z"></path><rect x="113" y="120" width="40" height="10" rx="2" fill="#6366f1"></rect><rect x="81" y="31" width="104.391" height="4" rx="2" fill="#a0aec0"></rect><rect x="96" y="20" width="74" height="5" rx="2.5" fill="#4a5568"></rect><rect x="85" y="39" width="97.365" height="4" rx="2" fill="#a0aec0"></rect><rect x="26" y="73" width="28" height="3" rx="1.5" fill="#4a5568"></rect><rect x="26" y="79" width="34" height="2" rx="1" fill="#a0aec0"></rect><rect x="26" y="84" width="38" height="2" rx="1" fill="#a0aec0"></rect><rect x="26" y="89" width="24" height="2" rx="1" fill="#6366f1"></rect><rect x="20" y="62" width="1" height="39" rx="0.5" fill="#cbd5e0"></rect><rect x="86" y="73" width="28" height="3" rx="1.5" fill="#4a5568"></rect><rect x="86" y="79" width="34" height="2" rx="1" fill="#a0aec0"></rect><rect x="86" y="84" width="38" height="2" rx="1" fill="#a0aec0"></rect><rect x="86" y="89" width="24" height="2" rx="1" fill="#6366f1"></rect><rect x="80" y="62" width="1" height="39" rx="0.5" fill="#cbd5e0"></rect><rect x="146.136" y="73" width="28.636" height="3" rx="1.5" fill="#4a5568"></rect><rect x="146.136" y="79" width="34.773" height="2" rx="1" fill="#a0aec0"></rect><rect x="146.136" y="84" width="38.864" height="2" rx="1" fill="#a0aec0"></rect><rect x="146.136" y="89" width="24.546" height="2" rx="1" fill="#6366f1"></rect><rect x="140" y="62" width="1.023" height="39" rx="0.511" fill="#cbd5e0"></rect><rect x="207.136" y="73" width="28.636" height="3" rx="1.5" fill="#4a5568"></rect><rect x="207.136" y="79" width="34.773" height="2" rx="1" fill="#a0aec0"></rect><rect x="207.136" y="84" width="38.864" height="2" rx="1" fill="#a0aec0"></rect><rect x="207.136" y="89" width="24.546" height="2" rx="1" fill="#6366f1"></rect><rect x="201" y="62" width="1.023" height="39" rx="0.511" fill="#cbd5e0"></rect></svg>',content:`<section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center w-full mb-20">
              <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">ROOF PARTY POLAROID</h2>
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Master Cleanse Reliac Heirloom</h1>
              <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
            </div>
            <div class="flex flex-wrap">
              <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Shooting Stars</h2>
                <p class="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                <a class="text-indigo-500 inline-flex items-center">Learn More
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">The Catalyzer</h2>
                <p class="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                <a class="text-indigo-500 inline-flex items-center">Learn More
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Neptune</h2>
                <p class="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                <a class="text-indigo-500 inline-flex items-center">Learn More
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Melanchole</h2>
                <p class="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                <a class="text-indigo-500 inline-flex items-center">Learn More
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
          </div>
        </section>`}),r.Blocks.add("content2",{label:"Content 2",category:"Content",media:'<svg viewBox="0 0 266 150" fill="none"><path fill="#fff" d="M0 0h266v150H0z"></path><rect x="142" y="32" width="104.391" height="4" rx="2" fill="#a0aec0"></rect><rect x="20" y="32" width="74" height="5" rx="2.5" fill="#4a5568"></rect><rect x="142" y="40" width="77" height="4" rx="2" fill="#a0aec0"></rect><rect x="20" y="74" width="50" height="44" rx="2" fill="#e2e8f0"></rect><path d="M40.333 95h9.334c.736 0 1.333-.597 1.333-1.333v-9.334c0-.736-.597-1.333-1.333-1.333h-9.334c-.736 0-1.333.597-1.333 1.333v9.334c0 .736.597 1.333 1.333 1.333zm0 0l7.334-7.333L51 91m-7.333-4.333a1 1 0 11-2 0 1 1 0 012 0z" stroke="#a0aec0" stroke-linecap="round" stroke-linejoin="round"></path><rect x="24" y="108" width="28" height="2" rx="1" fill="#4a5568"></rect><rect x="24" y="112" width="34" height="2" rx="1" fill="#a0aec0"></rect><rect x="24" y="104" width="10" height="2" rx="1" fill="#6366f1"></rect><rect x="79" y="74" width="50" height="44" rx="2" fill="#e2e8f0"></rect><path d="M99.333 95h9.334c.736 0 1.333-.597 1.333-1.333v-9.334c0-.736-.597-1.333-1.333-1.333h-9.334c-.736 0-1.333.597-1.333 1.333v9.334c0 .736.597 1.333 1.333 1.333zm0 0l7.334-7.333L110 91m-7.333-4.333a1 1 0 11-2 0 1 1 0 012 0z" stroke="#a0aec0" stroke-linecap="round" stroke-linejoin="round"></path><rect x="83" y="108" width="28" height="2" rx="1" fill="#4a5568"></rect><rect x="83" y="112" width="34" height="2" rx="1" fill="#a0aec0"></rect><rect x="83" y="104" width="10" height="2" rx="1" fill="#6366f1"></rect><rect x="138" y="74" width="50" height="44" rx="2" fill="#e2e8f0"></rect><path d="M158.333 95h9.334c.736 0 1.333-.597 1.333-1.333v-9.334c0-.736-.597-1.333-1.333-1.333h-9.334c-.736 0-1.333.597-1.333 1.333v9.334c0 .736.597 1.333 1.333 1.333zm0 0l7.334-7.333L169 91m-7.333-4.333a1 1 0 11-2 0 1 1 0 012 0z" stroke="#a0aec0" stroke-linecap="round" stroke-linejoin="round"></path><rect x="142" y="108" width="28" height="2" rx="1" fill="#4a5568"></rect><rect x="142" y="112" width="34" height="2" rx="1" fill="#a0aec0"></rect><rect x="142" y="104" width="10" height="2" rx="1" fill="#6366f1"></rect><rect x="197" y="74" width="50" height="44" rx="2" fill="#e2e8f0"></rect><path d="M217.333 95h9.334c.736 0 1.333-.597 1.333-1.333v-9.334c0-.736-.597-1.333-1.333-1.333h-9.334c-.736 0-1.333.597-1.333 1.333v9.334c0 .736.597 1.333 1.333 1.333zm0 0l7.334-7.333L228 91m-7.333-4.333a1 1 0 11-2 0 1 1 0 012 0z" stroke="#a0aec0" stroke-linecap="round" stroke-linejoin="round"></path><rect x="201" y="108" width="28" height="2" rx="1" fill="#4a5568"></rect><rect x="201" y="112" width="34" height="2" rx="1" fill="#a0aec0"></rect><rect x="201" y="104" width="10" height="2" rx="1" fill="#6366f1"></rect></svg>',content:`<section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-wrap w-full mb-20">
              <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Pitchfork Kickstarter Taxidermy</h1>
                <div class="h-1 w-20 bg-indigo-500 rounded"></div>
              </div>
              <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
            </div>
            <div class="flex flex-wrap -m-4">
              <div class="xl:w-1/4 md:w-1/2 p-4">
                <div class="bg-gray-100 p-6 rounded-lg">
                  <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content">
                  <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Chichen Itza</h2>
                  <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                </div>
              </div>
              <div class="xl:w-1/4 md:w-1/2 p-4">
                <div class="bg-gray-100 p-6 rounded-lg">
                  <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/721x401" alt="content">
                  <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Colosseum Roma</h2>
                  <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                </div>
              </div>
              <div class="xl:w-1/4 md:w-1/2 p-4">
                <div class="bg-gray-100 p-6 rounded-lg">
                  <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/722x402" alt="content">
                  <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Great Pyramid of Giza</h2>
                  <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                </div>
              </div>
              <div class="xl:w-1/4 md:w-1/2 p-4">
                <div class="bg-gray-100 p-6 rounded-lg">
                  <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/723x403" alt="content">
                  <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-4">San Francisco</h2>
                  <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                </div>
              </div>
            </div>
          </div>
        </section>`}),r.Blocks.add("content3",{label:"Content 3",category:"Content",media:'<svg viewBox="0 0 266 150" fill="none"><path fill="#fff" d="M0 0h266v150H0z"></path><rect x="113" y="120" width="40" height="10" rx="2" fill="#6366f1"></rect><rect x="81" y="31" width="104.391" height="4" rx="2" fill="#a0aec0"></rect><rect x="96" y="20" width="74" height="5" rx="2.5" fill="#4a5568"></rect><rect x="20.5" y="51.5" width="69" height="23" rx="1.5" fill="#fff" stroke="#cbd5e0"></rect><rect x="24" y="65" width="28" height="2" rx="1" fill="#4a5568"></rect><rect x="24" y="69" width="34" height="2" rx="1" fill="#a0aec0"></rect><circle cx="28" cy="59" r="4" fill="#c3dafe"></circle><rect x="98.5" y="51.5" width="69" height="23" rx="1.5" fill="#fff" stroke="#cbd5e0"></rect><rect x="102" y="65" width="28" height="2" rx="1" fill="#4a5568"></rect><rect x="102" y="69" width="34" height="2" rx="1" fill="#a0aec0"></rect><circle cx="106" cy="59" r="4" fill="#c3dafe"></circle><rect x="176.5" y="51.5" width="69" height="23" rx="1.5" fill="#fff" stroke="#cbd5e0"></rect><rect x="180" y="65" width="28" height="2" rx="1" fill="#4a5568"></rect><rect x="180" y="69" width="34" height="2" rx="1" fill="#a0aec0"></rect><circle cx="184" cy="59" r="4" fill="#c3dafe"></circle><rect x="20.5" y="81.5" width="69" height="23" rx="1.5" fill="#fff" stroke="#cbd5e0"></rect><rect x="24" y="95" width="28" height="2" rx="1" fill="#4a5568"></rect><rect x="24" y="99" width="34" height="2" rx="1" fill="#a0aec0"></rect><circle cx="28" cy="89" r="4" fill="#c3dafe"></circle><rect x="98.5" y="81.5" width="69" height="23" rx="1.5" fill="#fff" stroke="#cbd5e0"></rect><rect x="102" y="95" width="28" height="2" rx="1" fill="#4a5568"></rect><rect x="102" y="99" width="34" height="2" rx="1" fill="#a0aec0"></rect><circle cx="106" cy="89" r="4" fill="#c3dafe"></circle><rect x="176.5" y="81.5" width="69" height="23" rx="1.5" fill="#fff" stroke="#cbd5e0"></rect><rect x="180" y="95" width="28" height="2" rx="1" fill="#4a5568"></rect><rect x="180" y="99" width="34" height="2" rx="1" fill="#a0aec0"></rect><circle cx="184" cy="89" r="4" fill="#c3dafe"></circle></svg>',content:`<section class="text-gray-600 body-font">
              <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                  <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Pitchfork Kickstarter Taxidermy</h1>
                  <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table.</p>
                </div>
                <div class="flex flex-wrap -m-4">
                  <div class="xl:w-1/3 md:w-1/2 p-4">
                    <div class="border border-gray-200 p-6 rounded-lg">
                      <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                        </svg>
                      </div>
                      <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Shooting Stars</h2>
                      <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
                    </div>
                  </div>
                  <div class="xl:w-1/3 md:w-1/2 p-4">
                    <div class="border border-gray-200 p-6 rounded-lg">
                      <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                          <circle cx="6" cy="6" r="3"></circle>
                          <circle cx="6" cy="18" r="3"></circle>
                          <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                        </svg>
                      </div>
                      <h2 class="text-lg text-gray-900 font-medium title-font mb-2">The Catalyzer</h2>
                      <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
                    </div>
                  </div>
                  <div class="xl:w-1/3 md:w-1/2 p-4">
                    <div class="border border-gray-200 p-6 rounded-lg">
                      <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                      </div>
                      <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Neptune</h2>
                      <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
                    </div>
                  </div>
                  <div class="xl:w-1/3 md:w-1/2 p-4">
                    <div class="border border-gray-200 p-6 rounded-lg">
                      <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                          <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
                        </svg>
                      </div>
                      <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Melanchole</h2>
                      <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
                    </div>
                  </div>
                  <div class="xl:w-1/3 md:w-1/2 p-4">
                    <div class="border border-gray-200 p-6 rounded-lg">
                      <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
                        </svg>
                      </div>
                      <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Bunker</h2>
                      <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
                    </div>
                  </div>
                  <div class="xl:w-1/3 md:w-1/2 p-4">
                    <div class="border border-gray-200 p-6 rounded-lg">
                      <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                        </svg>
                      </div>
                      <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Ramona Falls</h2>
                      <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
                    </div>
                  </div>
                </div>
                <button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
              </div>
            </section>`}),r.Blocks.add("content4",{label:"Content 4",category:"Content",media:'<svg viewBox="0 0 266 150" fill="none"><path fill="#fff" d="M0 0h266v150H0z"></path><rect x="20" y="59" width="70" height="5" rx="2.5" fill="#4a5568"></rect><rect x="20" y="70" width="92" height="4" rx="2" fill="#a0aec0"></rect><rect x="20" y="78" width="79" height="4" rx="2" fill="#a0aec0"></rect><rect x="20" y="88" width="24" height="4" rx="2" fill="#6366f1"></rect><rect x="144" y="65" width="40" height="4" rx="2" fill="#4a5568"></rect><rect x="144" y="74" width="22" height="2" rx="1" fill="#a0aec0"></rect><rect x="144" y="79" width="28" height="2" rx="1" fill="#a0aec0"></rect><rect x="144" y="84" width="19" height="2" rx="1" fill="#a0aec0"></rect><rect x="180" y="74" width="18" height="2" rx="1" fill="#a0aec0"></rect><rect x="180" y="79" width="24" height="2" rx="1" fill="#a0aec0"></rect><rect x="180" y="84" width="24" height="2" rx="1" fill="#a0aec0"></rect><rect x="212" y="74" width="18" height="2" rx="1" fill="#a0aec0"></rect><rect x="212" y="79" width="24" height="2" rx="1" fill="#a0aec0"></rect><rect x="212" y="84" width="24" height="2" rx="1" fill="#a0aec0"></rect><path d="M128 44.5a.5.5 0 011 0v62a.5.5 0 01-1 0v-62z" fill="#cbd5e0"></path></svg>',content:`<section class="text-gray-600 body-font">
          <div class="container flex flex-wrap px-5 py-24 mx-auto items-center">
            <div class="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Pitchfork Kickstarter Taxidermy</h1>
              <p class="leading-relaxed text-base">Locavore cardigan small batch roof party blue bottle blog meggings sartorial jean shorts kickstarter migas sriracha church-key synth succulents. Actually taiyaki neutra, distillery gastropub pok pok ugh.</p>
              <a class="text-indigo-500 inline-flex items-center mt-4">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div class="flex flex-col md:w-1/2 md:pl-12">
              <h2 class="title-font font-semibold text-gray-800 tracking-wider text-sm mb-3">CATEGORIES</h2>
              <nav class="flex flex-wrap list-none -mb-1">
                <li class="lg:w-1/3 mb-1 w-1/2">
                  <a class="text-gray-600 hover:text-gray-800">First Link</a>
                </li>
                <li class="lg:w-1/3 mb-1 w-1/2">
                  <a class="text-gray-600 hover:text-gray-800">Second Link</a>
                </li>
                <li class="lg:w-1/3 mb-1 w-1/2">
                  <a class="text-gray-600 hover:text-gray-800">Third Link</a>
                </li>
                <li class="lg:w-1/3 mb-1 w-1/2">
                  <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
                </li>
                <li class="lg:w-1/3 mb-1 w-1/2">
                  <a class="text-gray-600 hover:text-gray-800">Fifth Link</a>
                </li>
                <li class="lg:w-1/3 mb-1 w-1/2">
                  <a class="text-gray-600 hover:text-gray-800">Sixth Link</a>
                </li>
                <li class="lg:w-1/3 mb-1 w-1/2">
                  <a class="text-gray-600 hover:text-gray-800">Seventh Link</a>
                </li>
                <li class="lg:w-1/3 mb-1 w-1/2">
                  <a class="text-gray-600 hover:text-gray-800">Eighth Link</a>
                </li>
              </nav>
            </div>
          </div>
        </section>`}),r.Blocks.add("content5",{label:"Content 5",category:"Content",media:'<svg viewBox="0 0 266 150" fill="none"><path fill="#fff" d="M0 0h266v150H0z"></path><path d="M128 44.5a.5.5 0 011 0v62a.5.5 0 01-1 0v-62z" fill="#cbd5e0"></path><rect x="20" y="69" width="70" height="5" rx="2.5" fill="#4a5568"></rect><rect x="20" y="78" width="92" height="5" rx="2.5" fill="#4a5568"></rect><path d="M144 60a2 2 0 012-2h75a2 2 0 110 4h-75a2 2 0 01-2-2zM144 68a2 2 0 012-2h88a2 2 0 110 4h-88a2 2 0 01-2-2zM144 76a2 2 0 012-2h60a2 2 0 110 4h-60a2 2 0 01-2-2z" fill="#a0aec0"></path><path d="M190 89a2 2 0 012-2h20a2 2 0 110 4h-20a2 2 0 01-2-2z" fill="#6366f1"></path><rect x="144" y="84" width="40" height="10" rx="2" fill="#6366f1"></rect></svg>',content:`<section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto flex flex-wrap">
            <h2 class="sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-2 md:w-2/5">Kickstarter Actually Pinterest Brunch Bitters Occupy</h2>
            <div class="md:w-3/5 md:pl-6">
              <p class="leading-relaxed text-base">Taxidermy bushwick celiac master cleanse microdosing seitan. Fashion axe four dollar toast truffaut, direct trade kombucha brunch williamsburg keffiyeh gastropub tousled squid meh taiyaki drinking vinegar tacos.</p>
              <div class="flex md:mt-4 mt-6">
                <button class="inline-flex text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
                <a class="text-indigo-500 inline-flex items-center ml-4">Learn More
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>`}),r.Blocks.add("content6",{label:"Content 6",category:"Content",media:'<svg viewBox="0 0 266 150" fill="none"><path fill="#fff" d="M0 0h266v150H0z"></path><path d="M93 67.5a.5.5 0 011 0v62a.5.5 0 01-1 0v-62z" fill="#cbd5e0"></path><path d="M106 83a2 2 0 012-2h103.337a2 2 0 110 4H108a2 2 0 01-2-2zM106 107a2 2 0 012-2h95a2 2 0 110 4h-95a2 2 0 01-2-2zM106 91a2 2 0 012-2h121a2 2 0 110 4H108a2 2 0 01-2-2zM106 99a2 2 0 012-2h82.957a2 2 0 010 4H108a2 2 0 01-2-2z" fill="#a0aec0"></path><path d="M106 115a2 2 0 012-2h20a2 2 0 110 4h-20a2 2 0 01-2-2z" fill="#6366f1"></path><path d="M45 104a2 2 0 012-2h20a2 2 0 110 4H47a2 2 0 01-2-2z" fill="#4a5568"></path><rect x="37" y="110" width="40" height="2" rx="1" fill="#a0aec0"></rect><rect x="35" y="120" width="44" height="2" rx="1" fill="#a0aec0"></rect><path d="M33 116a1 1 0 011-1h45a1 1 0 010 2H34a1 1 0 01-1-1z" fill="#a0aec0"></path><path d="M122.889 47h20.222A2.889 2.889 0 00146 44.111V23.89a2.889 2.889 0 00-2.889-2.89h-20.222A2.889 2.889 0 00120 23.889V44.11a2.889 2.889 0 002.889 2.89zm0 0l15.889-15.889L146 38.333m-15.889-9.389a2.167 2.167 0 11-4.333 0 2.167 2.167 0 014.333 0z" stroke="#a0aec0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><circle cx="56.5" cy="85.5" r="10.5" fill="#e2e8f0"></circle></svg>',content:`<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-col">
    <div class="lg:w-4/6 mx-auto">
      <div class="rounded-lg h-64 overflow-hidden">
        <img alt="content" class="object-cover object-center h-full w-full" src="https://dummyimage.com/1200x500">
      </div>
      <div class="flex flex-col sm:flex-row mt-10">
        <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
          <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div class="flex flex-col items-center text-center justify-center">
            <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">Phoebe Caulfield</h2>
            <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
            <p class="text-base">Raclette knausgaard hella meggs normcore williamsburg enamel pin sartorial venmo tbh hot chicken gentrify portland.</p>
          </div>
        </div>
        <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
          <p class="leading-relaxed text-lg mb-4">Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami everyday carry hexagon locavore direct trade art party. Locavore small batch listicle gastropub farm-to-table lumbersexual salvia messenger bag. Coloring book flannel truffaut craft beer drinking vinegar sartorial, disrupt fashion axe normcore meh butcher. Portland 90's scenester vexillologist forage post-ironic asymmetrical, chartreuse disrupt butcher paleo intelligentsia pabst before they sold out four loko. 3 wolf moon brooklyn.</p>
          <a class="text-indigo-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>`}),r.Blocks.add("content7",{label:"Content 7",category:"Content",media:'<svg viewBox="0 0 266 150" fill="none"><path fill="#fff" d="M0 0h266v150H0z"></path><path d="M41.692 86a2 2 0 012-2H114.4a2 2 0 010 4H43.692a2 2 0 01-2-2z" fill="#a0aec0"></path><rect x="59" y="104" width="40" height="10" rx="2" fill="#6366f1"></rect><path d="M35 94a2 2 0 012-2h83a2 2 0 110 4H37a2 2 0 01-2-2z" fill="#a0aec0"></path><path d="M68.889 63H89.11A2.889 2.889 0 0092 60.111V39.89A2.889 2.889 0 0089.111 37H68.89A2.889 2.889 0 0066 39.889V60.11A2.889 2.889 0 0068.889 63zm0 0l15.889-15.889L92 54.333m-15.889-9.389a2.167 2.167 0 11-4.333 0 2.167 2.167 0 014.333 0z" stroke="#a0aec0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><rect x="56" y="73" width="46" height="5" rx="2.5" fill="#4a5568"></rect><path d="M150.692 86a2 2 0 012-2h70.707a2 2 0 010 4h-70.707a2 2 0 01-2-2z" fill="#a0aec0"></path><rect x="168" y="104" width="40" height="10" rx="2" fill="#6366f1"></rect><path d="M144 94a2 2 0 012-2h83a2 2 0 110 4h-83a2 2 0 01-2-2z" fill="#a0aec0"></path><path d="M177.889 63h20.222A2.889 2.889 0 00201 60.111V39.89a2.889 2.889 0 00-2.889-2.89h-20.222A2.889 2.889 0 00175 39.889V60.11a2.889 2.889 0 002.889 2.89zm0 0l15.889-15.889L201 54.333m-15.889-9.389a2.167 2.167 0 11-4.333 0 2.167 2.167 0 014.333 0z" stroke="#a0aec0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><rect x="165" y="73" width="46" height="5" rx="2.5" fill="#4a5568"></rect></svg>',content:`<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -mx-4 -mb-10 text-center">
      <div class="sm:w-1/2 mb-10 px-4">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src="https://dummyimage.com/1201x501">
        </div>
        <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Buy YouTube Videos</h2>
        <p class="leading-relaxed text-base">Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.</p>
        <button class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
      </div>
      <div class="sm:w-1/2 mb-10 px-4">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src="https://dummyimage.com/1202x502">
        </div>
        <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">The Catalyzer</h2>
        <p class="leading-relaxed text-base">Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.</p>
        <button class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
      </div>
    </div>
  </div>
</section>`}),r.Blocks.add("content8",{label:"Content 8",category:"Content",media:'<svg viewBox="0 0 266 150" fill="none"><path fill="#fff" d="M0 0h266v150H0z"></path><path d="M20 111.5a1.5 1.5 0 011.5-1.5h64a1.5 1.5 0 010 3h-64a1.5 1.5 0 01-1.5-1.5zM20 118.5a1.5 1.5 0 011.5-1.5h51a1.5 1.5 0 010 3h-51a1.5 1.5 0 01-1.5-1.5z" fill="#a0aec0"></path><path d="M20 125.5a1.5 1.5 0 011.5-1.5h18a1.5 1.5 0 010 3h-18a1.5 1.5 0 01-1.5-1.5z" fill="#6366f1"></path><path d="M45.444 87h17.112A2.444 2.444 0 0065 84.556V67.444A2.444 2.444 0 0062.556 65H45.444A2.444 2.444 0 0043 67.444v17.112A2.444 2.444 0 0045.444 87zm0 0L58.89 73.556l6.11 6.11m-13.444-7.944a1.833 1.833 0 11-3.667 0 1.833 1.833 0 013.667 0z" stroke="#a0aec0" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path><rect x="20" y="101" width="56" height="4" rx="2" fill="#4a5568"></rect><path d="M100 111.5a1.5 1.5 0 011.5-1.5h64a1.5 1.5 0 010 3h-64a1.5 1.5 0 01-1.5-1.5zM100 118.5a1.5 1.5 0 011.5-1.5h51a1.5 1.5 0 010 3h-51a1.5 1.5 0 01-1.5-1.5z" fill="#a0aec0"> </path><path d="M100 125.5a1.5 1.5 0 011.5-1.5h18a1.5 1.5 0 010 3h-18a1.5 1.5 0 01-1.5-1.5z" fill="#6366f1"></path><path d="M125.444 87h17.112A2.444 2.444 0 00145 84.556V67.444A2.444 2.444 0 00142.556 65h-17.112A2.444 2.444 0 00123 67.444v17.112A2.444 2.444 0 00125.444 87zm0 0l13.445-13.444 6.111 6.11m-13.444-7.944a1.834 1.834 0 11-3.667 0 1.834 1.834 0 013.667 0z" stroke="#a0aec0" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path><rect x="100" y="101" width="56" height="4" rx="2" fill="#4a5568"></rect><path d="M180 111.5a1.5 1.5 0 011.5-1.5h64a1.5 1.5 0 010 3h-64a1.5 1.5 0 01-1.5-1.5zM180 118.5a1.5 1.5 0 011.5-1.5h51a1.5 1.5 0 010 3h-51a1.5 1.5 0 01-1.5-1.5z" fill="#a0aec0"></path><path d="M180 125.5a1.5 1.5 0 011.5-1.5h18a1.5 1.5 0 010 3h-18a1.5 1.5 0 01-1.5-1.5z" fill="#6366f1"></path><path d="M205.444 87h17.112A2.444 2.444 0 00225 84.556V67.444A2.444 2.444 0 00222.556 65h-17.112A2.444 2.444 0 00203 67.444v17.112A2.444 2.444 0 00205.444 87zm0 0l13.445-13.444 6.111 6.11m-13.444-7.944a1.834 1.834 0 11-3.667 0 1.834 1.834 0 013.667 0z" stroke="#a0aec0" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path><rect x="180" y="101" width="56" height="4" rx="2" fill="#4a5568"></rect><rect x="142" y="23" width="104.391" height="4" rx="2" fill="#a0aec0"></rect><rect x="20" y="23" width="74" height="5" rx="2.5" fill="#4a5568"></rect><rect x="142" y="31" width="77" height="4" rx="2" fill="#a0aec0"></rect></svg>',content:`<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col">
      <div class="h-1 bg-gray-200 rounded overflow-hidden">
        <div class="w-24 h-full bg-indigo-500"></div>
      </div>
      <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
        <h1 class="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">Space The Final Frontier</h1>
        <p class="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">Street art subway tile salvia four dollar toast bitters selfies quinoa yuccie synth meditation iPhone intelligentsia prism tofu. Viral gochujang bitters dreamcatcher.</p>
      </div>
    </div>
    <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
      <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src="https://dummyimage.com/1203x503">
        </div>
        <h2 class="text-xl font-medium title-font text-gray-900 mt-5">Shooting Stars</h2>
        <p class="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
        <a class="text-indigo-500 inline-flex items-center mt-3">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src="https://dummyimage.com/1204x504">
        </div>
        <h2 class="text-xl font-medium title-font text-gray-900 mt-5">The Catalyzer</h2>
        <p class="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
        <a class="text-indigo-500 inline-flex items-center mt-3">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src="https://dummyimage.com/1205x505">
        </div>
        <h2 class="text-xl font-medium title-font text-gray-900 mt-5">The 400 Blows</h2>
        <p class="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
        <a class="text-indigo-500 inline-flex items-center mt-3">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
</section>`}),r.Blocks.add("cta1",{label:"CTA 1",category:"CTA",media:'<svg fill="none" viewBox="0 0 266 150"><path fill="#fff" d="M0 0h266v150H0z"></path><rect x="20" y="68" width="119" height="5" rx="2.5" fill="#4a5568"></rect><rect x="20" y="77" width="92" height="5" rx="2.5" fill="#4a5568"></rect><rect x="206" y="70" width="40" height="10" rx="2" fill="#6366f1"></rect></svg>',content:`<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
      <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">Slow-carb next level shoindxgoitch ethical authentic, scenester sriracha forage.</h1>
      <button class="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0">Button</button>
    </div>
  </div>
</section>`}),r.Blocks.add("cta2",{label:"CTA 2",category:"CTA",media:'<svg fill="none" viewBox="0 0 266 150"><path fill="#fff" d="M0 0h266v150H0z"></path><rect x="151" y="40" width="93" height="70" rx="2" fill="#e2e8f0"></rect><rect x="20" y="61" width="86" height="5" rx="2.5" fill="#4a5568"></rect><rect x="20" y="70" width="66" height="5" rx="2.5" fill="#4a5568"></rect><rect x="20" y="79" width="106" height="4" rx="2" fill="#a0aec0"></rect><rect x="20" y="87" width="97" height="4" rx="2" fill="#a0aec0"></rect><rect x="160" y="91" width="75" height="10" rx="2" fill="#6366f1"></rect><rect x="160" y="76" width="75" height="10" rx="2" fill="#cbd5e0"></rect><rect x="160" y="61" width="75" height="10" rx="2" fill="#cbd5e0"></rect><rect x="160" y="50" width="40" height="4" rx="2" fill="#4a5568"></rect></svg>',content:`<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
    <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
      <h1 class="title-font font-medium text-3xl text-gray-900">Slow-carb next level shoindcgoitch ethical authentic, poko scenester</h1>
      <p class="leading-relaxed mt-4">Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder roathse. Craies vegan tousled etsy austin.</p>
    </div>
    <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
      <h2 class="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
      <div class="relative mb-4">
        <label for="full-name" class="leading-7 text-sm text-gray-600">Full Name</label>
        <input type="text" id="full-name" name="full-name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
      </div>
      <div class="relative mb-4">
        <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
      </div>
      <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
      <p class="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
    </div>
  </div>
</section>`}),r.Blocks.add("cta3",{label:"CTA 3",category:"CTA",media:'<svg fill="none" viewBox="0 0 266 150"><path fill="#fff" d="M0 0h266v150H0z"></path><rect x="90" y="48" width="86" height="5" rx="2.5" fill="#4a5568"></rect><rect x="80" y="57" width="106" height="4" rx="2" fill="#a0aec0"></rect><rect x="85" y="65" width="97" height="4" rx="2" fill="#a0aec0"></rect><rect x="183" y="92" width="44" height="10" rx="2" fill="#6366f1"></rect><rect x="111" y="92" width="66" height="10" rx="2" fill="#cbd5e0"></rect><rect x="39" y="92" width="66" height="10" rx="2" fill="#cbd5e0"></rect></svg>',content:`<section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
              <div class="flex flex-col text-center w-full mb-12">
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Master Cleanse Reliac Heirloom</h1>
                <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep.</p>
              </div>
              <div class="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                <div class="relative flex-grow w-full">
                  <label for="full-name" class="leading-7 text-sm text-gray-600">Full Name</label>
                  <input type="text" id="full-name" name="full-name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                </div>
                <div class="relative flex-grow w-full">
                  <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                  <input type="email" id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                </div>
                <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
              </div>
            </div>
          </section>`}),r.Blocks.add("cta4",{label:"CTA 4",category:"CTA",media:'<svg fill="none" viewBox="0 0 266 150"><path fill="#fff" d="M0 0h266v150H0z"></path><rect x="20" y="68" width="26" height="5" rx="2.5" fill="#6366f1"></rect><rect x="20" y="77" width="92" height="5" rx="2.5" fill="#4a5568"></rect><rect x="206" y="70" width="40" height="10" rx="2" fill="#cbd5e0"></rect><rect x="160" y="70" width="40" height="10" rx="2" fill="#cbd5e0"></rect></svg>',content:`<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex items-center md:flex-row flex-col">
    <div class="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
      <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">ROOF PARTY POLAROID</h2>
      <h1 class="md:text-3xl text-2xl font-medium title-font text-gray-900">Master Cleanse Reliac Heirloom</h1>
    </div>
    <div class="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4">
      <button class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6" viewBox="0 0 512 512">
          <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
        </svg>
        <span class="ml-4 flex items-start flex-col leading-none">
          <span class="text-xs text-gray-600 mb-1">GET IT ON</span>
          <span class="title-font font-medium">Google Play</span>
        </span>
      </button>
      <button class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6" viewBox="0 0 305 305">
          <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
          <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
        </svg>
        <span class="ml-4 flex items-start flex-col leading-none">
          <span class="text-xs text-gray-600 mb-1">Download on the</span>
          <span class="title-font font-medium">App Store</span>
        </span>
      </button>
    </div>
  </div>
</section>`}),r.Blocks.add("ecommerce1",{label:"Ecommerce 1",category:"Ecommerce",media:'<svg viewBox="0 0 266 150" fill="none"><path fill="#fff" d="M0 0h266v150H0z"></path><path d="M40.333 48h9.334c.736 0 1.333-.597 1.333-1.333v-9.334c0-.736-.597-1.333-1.333-1.333h-9.334c-.736 0-1.333.597-1.333 1.333v9.334c0 .736.597 1.333 1.333 1.333zm0 0l7.334-7.333L51 44m-7.333-4.333a1 1 0 11-2 0 1 1 0 012 0z" stroke="#a0aec0" stroke-linecap="round" stroke-linejoin="round"></path><rect x="20" y="61" width="41" height="2" rx="1" fill="#4a5568"></rect><rect x="20" y="65" width="13" height="2" rx="1" fill="#a0aec0"></rect><rect x="20" y="57" width="17" height="2" rx="1" fill="#cbd5e0"></rect><path d="M99.333 48h9.334c.736 0 1.333-.597 1.333-1.333v-9.334c0-.736-.597-1.333-1.333-1.333h-9.334c-.736 0-1.333.597-1.333 1.333v9.334c0 .736.597 1.333 1.333 1.333zm0 0l7.334-7.333L110 44m-7.333-4.333a1 1 0 11-2 0 1 1 0 012 0z" stroke="#a0aec0" stroke-linecap="round" stroke-linejoin="round"></path><rect x="79" y="61" width="41" height="2" rx="1" fill="#4a5568"></rect><rect x="79" y="65" width="13" height="2" rx="1" fill="#a0aec0"></rect><rect x="79" y="57" width="17" height="2" rx="1" fill="#cbd5e0"></rect><path d="M158.333 48h9.334c.736 0 1.333-.597 1.333-1.333v-9.334c0-.736-.597-1.333-1.333-1.333h-9.334c-.736 0-1.333.597-1.333 1.333v9.334c0 .736.597 1.333 1.333 1.333zm0 0l7.334-7.333L169 44m-7.333-4.333a1 1 0 11-2 0 1 1 0 012 0z" stroke="#a0aec0" stroke-linecap="round" stroke-linejoin="round"></path><rect x="138" y="61" width="41" height="2" rx="1" fill="#4a5568"></rect><rect x="138" y="65" width="13" height="2" rx="1" fill="#a0aec0"></rect><rect x="138" y="57" width="17" height="2" rx="1" fill="#cbd5e0"></rect><path d="M217.333 48h9.334c.736 0 1.333-.597 1.333-1.333v-9.334c0-.736-.597-1.333-1.333-1.333h-9.334c-.736 0-1.333.597-1.333 1.333v9.334c0 .736.597 1.333 1.333 1.333zm0 0l7.334-7.333L228 44m-7.333-4.333a1 1 0 11-2 0 1 1 0 012 0z" stroke="#a0aec0" stroke-linecap="round" stroke-linejoin="round"></path><rect x="197" y="61" width="41" height="2" rx="1" fill="#4a5568"></rect><rect x="197" y="65" width="13" height="2" rx="1" fill="#a0aec0"></rect><rect x="197" y="57" width="17" height="2" rx="1" fill="#cbd5e0"></rect><path d="M40.333 94h9.334c.736 0 1.333-.597 1.333-1.333v-9.334c0-.736-.597-1.333-1.333-1.333h-9.334c-.736 0-1.333.597-1.333 1.333v9.334c0 .736.597 1.333 1.333 1.333zm0 0l7.334-7.333L51 90m-7.333-4.333a1 1 0 11-2 0 1 1 0 012 0z" stroke="#a0aec0" stroke-linecap="round" stroke-linejoin="round"></path><rect x="20" y="107" width="41" height="2" rx="1" fill="#4a5568"></rect><rect x="20" y="111" width="13" height="2" rx="1" fill="#a0aec0"></rect><rect x="20" y="103" width="17" height="2" rx="1" fill="#cbd5e0"></rect><path d="M99.333 94h9.334c.736 0 1.333-.597 1.333-1.333v-9.334c0-.736-.597-1.333-1.333-1.333h-9.334c-.736 0-1.333.597-1.333 1.333v9.334c0 .736.597 1.333 1.333 1.333zm0 0l7.334-7.333L110 90m-7.333-4.333a1 1 0 11-2 0 1 1 0 012 0z" stroke="#a0aec0" stroke-linecap="round" stroke-linejoin="round"></path><rect x="79" y="107" width="41" height="2" rx="1" fill="#4a5568"></rect><rect x="79" y="111" width="13" height="2" rx="1" fill="#a0aec0"></rect><rect x="79" y="103" width="17" height="2" rx="1" fill="#cbd5e0"></rect><path d="M158.333 94h9.334c.736 0 1.333-.597 1.333-1.333v-9.334c0-.736-.597-1.333-1.333-1.333h-9.334c-.736 0-1.333.597-1.333 1.333v9.334c0 .736.597 1.333 1.333 1.333zm0 0l7.334-7.333L169 90m-7.333-4.333a1 1 0 11-2 0 1 1 0 012 0z" stroke="#a0aec0" stroke-linecap="round" stroke-linejoin="round"></path><rect x="138" y="107" width="41" height="2" rx="1" fill="#4a5568"></rect><rect x="138" y="111" width="13" height="2" rx="1" fill="#a0aec0"></rect><rect x="138" y="103" width="17" height="2" rx="1" fill="#cbd5e0"></rect><path d="M217.333 94h9.334c.736 0 1.333-.597 1.333-1.333v-9.334c0-.736-.597-1.333-1.333-1.333h-9.334c-.736 0-1.333.597-1.333 1.333v9.334c0 .736.597 1.333 1.333 1.333zm0 0l7.334-7.333L228 90m-7.333-4.333a1 1 0 11-2 0 1 1 0 012 0z" stroke="#a0aec0" stroke-linecap="round" stroke-linejoin="round"></path><rect x="197" y="107" width="41" height="2" rx="1" fill="#4a5568"></rect><rect x="197" y="111" width="13" height="2" rx="1" fill="#a0aec0"></rect><rect x="197" y="103" width="17" height="2" rx="1" fill="#cbd5e0"></rect></svg>',content:`<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260">
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
          <p class="mt-1">$16.00</p>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/421x261">
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
          <p class="mt-1">$21.15</p>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/422x262">
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Neptune</h2>
          <p class="mt-1">$12.00</p>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/423x263">
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
          <p class="mt-1">$18.40</p>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/424x264">
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
          <p class="mt-1">$16.00</p>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/425x265">
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
          <p class="mt-1">$21.15</p>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/427x267">
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">Neptune</h2>
          <p class="mt-1">$12.00</p>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/428x268">
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
          <p class="mt-1">$18.40</p>
        </div>
      </div>
    </div>
  </div>
</section>`}),r.Blocks.add("ecommerce2",{label:"Ecommerce 2",category:"Ecommerce",media:'<svg viewBox="0 0 266 150" fill="none"><path fill="#fff" d="M0 0h266v150H0z"></path><path d="M52.792 91h26.544a3.785 3.785 0 003.792-3.778V60.778A3.785 3.785 0 0079.336 57H52.792A3.785 3.785 0 0049 60.778v26.444A3.785 3.785 0 0052.792 91zm0 0l20.856-20.778 9.48 9.445M62.272 67.389a2.839 2.839 0 01-2.844 2.833 2.839 2.839 0 01-2.844-2.833 2.839 2.839 0 012.844-2.833 2.839 2.839 0 012.844 2.833z" stroke="#a0aec0" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><rect x="133" y="42" width="74" height="5" rx="2.5" fill="#4a5568"></rect><rect x="133" y="105" width="26" height="5" rx="2.5" fill="#4a5568"></rect><rect x="133" y="35" width="38" height="3" rx="1.5" fill="#cbd5e0"></rect><rect x="133" y="51" width="26" height="3" rx="1.5" fill="#6366f1"></rect><rect x="133" y="64" width="92" height="4" rx="2" fill="#a0aec0"></rect><circle cx="241" cy="108" r="5" fill="#e2e8f0"></circle><path d="M245.5 94a.5.5 0 010 1h-112a.5.5 0 010-1h112z" fill="#e2e8f0"></path><rect x="200" y="103" width="31" height="10" rx="2" fill="#6366f1"></rect><rect x="133" y="72" width="82" height="4" rx="2" fill="#a0aec0"></rect><rect x="133" y="80" width="68" height="4" rx="2" fill="#a0aec0"></rect></svg>',content:`<section class="text-gray-600 body-font overflow-hidden">
  <div class="container px-5 py-24 mx-auto">
    <div class="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400">
      <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 class="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
        <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">The Catcher in the Rye</h1>
        <div class="flex mb-4">
          <span class="flex items-center">
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <span class="text-gray-600 ml-3">4 Reviews</span>
          </span>
          <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
            <a class="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a class="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a class="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
            </a>
          </span>
        </div>
        <p class="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
        <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
          <div class="flex">
            <span class="mr-3">Color</span>
            <button class="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
            <button class="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
            <button class="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
          </div>
          <div class="flex ml-6 items-center">
            <span class="mr-3">Size</span>
            <div class="relative">
              <select class="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                <option>SM</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
              <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4" viewBox="0 0 24 24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div class="flex">
          <span class="title-font font-medium text-2xl text-gray-900">$58.00</span>
          <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
          <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</section>`}),r.Blocks.add("ecommerce3",{label:"Ecommerce 3",category:"Ecommerce",media:'<svg viewBox="0 0 266 150" fill="none"><path fill="#fff" d="M0 0h266v150H0z"></path><rect x="20" y="37" width="74" height="5" rx="2.5" fill="#4a5568"></rect><rect x="20" y="112" width="26" height="5" rx="2.5" fill="#4a5568"></rect><rect x="20" y="30" width="38" height="3" rx="1.5" fill="#cbd5e0"></rect><rect x="20" y="55" width="26" height="3" rx="1.5" fill="#6366f1"></rect><path d="M56 56.5a1.5 1.5 0 011.5-1.5h23a1.5 1.5 0 010 3h-23a1.5 1.5 0 01-1.5-1.5z" fill="#a0aec0"></path><rect x="92" y="55" width="26" height="3" rx="1.5" fill="#a0aec0"></rect><rect x="20" y="73" width="92" height="4" rx="2" fill="#a0aec0"></rect><path d="M132.5 102a.5.5 0 010 1h-112a.5.5 0 010-1h112zM133 64v2H20v-2h113z" fill="#e2e8f0"></path><rect x="87" y="110" width="31" height="10" rx="2" fill="#6366f1"></rect><rect x="20" y="81" width="82" height="4" rx="2" fill="#a0aec0"></rect><rect x="20" y="89" width="68" height="4" rx="2" fill="#a0aec0"></rect><path fill="#6366f1" d="M20 64h32v2H20z"></path><path d="M187.792 92h26.544a3.785 3.785 0 003.792-3.778V61.778A3.785 3.785 0 00214.336 58h-26.544A3.785 3.785 0 00184 61.778v26.444A3.785 3.785 0 00187.792 92zm0 0l20.856-20.778 9.48 9.445m-20.856-12.278a2.838 2.838 0 01-2.844 2.833 2.838 2.838 0 01-2.844-2.833 2.838 2.838 0 012.844-2.833 2.838 2.838 0 012.844 2.833z" stroke="#a0aec0" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><circle cx="128" cy="114" r="5" fill="#e2e8f0"></circle></svg>',content:`<section class="text-gray-600 body-font overflow-hidden">
  <div class="container px-5 py-24 mx-auto">
    <div class="lg:w-4/5 mx-auto flex flex-wrap">
      <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        <h2 class="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
        <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">Animated Night Hill Illustrations</h1>
        <div class="flex mb-4">
          <a class="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1">Description</a>
          <a class="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Reviews</a>
          <a class="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Details</a>
        </div>
        <p class="leading-relaxed mb-4">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam inxigo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean.</p>
        <div class="flex border-t border-gray-200 py-2">
          <span class="text-gray-500">Color</span>
          <span class="ml-auto text-gray-900">Blue</span>
        </div>
        <div class="flex border-t border-gray-200 py-2">
          <span class="text-gray-500">Size</span>
          <span class="ml-auto text-gray-900">Medium</span>
        </div>
        <div class="flex border-t border-b mb-6 border-gray-200 py-2">
          <span class="text-gray-500">Quantity</span>
          <span class="ml-auto text-gray-900">4</span>
        </div>
        <div class="flex">
          <span class="title-font font-medium text-2xl text-gray-900">$58.00</span>
          <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
          <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
            </svg>
          </button>
        </div>
      </div>
      <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400">
    </div>
  </div>
</section>`}),r.Blocks.add("feature1",{label:"Feature 1",category:"Feature",media:'<svg viewBox="0 0 266 150" fill="none"><path fill="#fff" d="M0 0h266v150H0z"></path><rect x="96" y="39" width="74" height="5" rx="2.5" fill="#4a5568"></rect><circle cx="26" cy="90" r="6" fill="#c3dafe"></circle><rect x="82" y="48" width="102" height="5" rx="2.5" fill="#4a5568"></rect><path d="M38 94.5a1.5 1.5 0 011.5-1.5h48a1.5 1.5 0 010 3h-48a1.5 1.5 0 01-1.5-1.5zM38 101.5a1.5 1.5 0 011.5-1.5h38a1.5 1.5 0 010 3h-38a1.5 1.5 0 01-1.5-1.5z" fill="#a0aec0"></path><path d="M38 108.5a1.5 1.5 0 011.5-1.5h13a1.5 1.5 0 010 3h-13a1.5 1.5 0 01-1.5-1.5z" fill="#6366f1"></path><rect x="38" y="84" width="43" height="4" rx="2" fill="#4a5568"></rect><circle cx="105" cy="90" r="6" fill="#c3dafe"></circle><path d="M117 94.5a1.5 1.5 0 011.5-1.5h48a1.5 1.5 0 010 3h-48a1.5 1.5 0 01-1.5-1.5zM117 101.5a1.5 1.5 0 011.5-1.5h38a1.5 1.5 0 010 3h-38a1.5 1.5 0 01-1.5-1.5z" fill="#a0aec0"></path><path d="M117 108.5a1.5 1.5 0 011.5-1.5h13a1.5 1.5 0 010 3h-13a1.5 1.5 0 01-1.5-1.5z" fill="#6366f1"></path><rect x="117" y="84" width="43" height="4" rx="2" fill="#4a5568"></rect><circle cx="184" cy="90" r="6" fill="#c3dafe"></circle><path d="M196 94.5a1.5 1.5 0 011.5-1.5h48a1.5 1.5 0 010 3h-48a1.5 1.5 0 01-1.5-1.5zM196 101.5a1.5 1.5 0 011.5-1.5h38a1.5 1.5 0 010 3h-38a1.5 1.5 0 01-1.5-1.5z" fill="#a0aec0"></path><path d="M196 108.5a1.5 1.5 0 011.5-1.5h13a1.5 1.5 0 010 3h-13a1.5 1.5 0 01-1.5-1.5z" fill="#6366f1"></path><rect x="196" y="84" width="43" height="4" rx="2" fill="#4a5568"></rect></svg>',content:`<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <h1 class="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-20">Raw Denim Heirloom Man Braid
      <br class="hidden sm:block">Selfies Wayfarers
    </h1>
    <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
      <div class="p-4 md:w-1/3 flex">
        <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
        </div>
        <div class="flex-grow pl-6">
          <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Shooting Stars</h2>
          <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard ugh iceland kickstarter tumblr live-edge tilde.</p>
          <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      <div class="p-4 md:w-1/3 flex">
        <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
            <circle cx="6" cy="6" r="3"></circle>
            <circle cx="6" cy="18" r="3"></circle>
            <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
          </svg>
        </div>
        <div class="flex-grow pl-6">
          <h2 class="text-gray-900 text-lg title-font font-medium mb-2">The Catalyzer</h2>
          <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard ugh iceland kickstarter tumblr live-edge tilde.</p>
          <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      <div class="p-4 md:w-1/3 flex">
        <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
        <div class="flex-grow pl-6">
          <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Neptune</h2>
          <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard ugh iceland kickstarter tumblr live-edge tilde.</p>
          <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>`}),r.Blocks.add("feature2",{label:"Feature 2",category:"Feature",media:'<svg viewBox="0 0 266 150" fill="none"><path fill="#fff" d="M0 0h266v150H0z"></path><circle cx="56" cy="61" r="8" fill="#c3dafe"></circle><path d="M20 87.5a1.5 1.5 0 011.5-1.5h65a1.5 1.5 0 010 3h-65a1.5 1.5 0 01-1.5-1.5zM27 94.5a1.5 1.5 0 011.5-1.5h51a1.5 1.5 0 010 3h-51a1.5 1.5 0 01-1.5-1.5z" fill="#a0aec0"></path><path d="M43 101.5a1.5 1.5 0 011.5-1.5h20a1.5 1.5 0 010 3h-20a1.5 1.5 0 01-1.5-1.5z" fill="#6366f1"></path><rect x="25" y="77" width="58" height="4" rx="2" fill="#4a5568"></rect><circle cx="135" cy="61" r="8" fill="#c3dafe"></circle><path d="M99 87.5a1.5 1.5 0 011.5-1.5h65a1.5 1.5 0 010 3h-65a1.5 1.5 0 01-1.5-1.5zM106 94.5a1.5 1.5 0 011.5-1.5h51a1.5 1.5 0 010 3h-51a1.5 1.5 0 01-1.5-1.5z" fill="#a0aec0"></path><path d="M122 101.5a1.5 1.5 0 011.5-1.5h20a1.5 1.5 0 010 3h-20a1.5 1.5 0 01-1.5-1.5z" fill="#6366f1"></path><rect x="104" y="77" width="58" height="4" rx="2" fill="#4a5568"></rect><circle cx="214" cy="61" r="8" fill="#c3dafe"></circle><path d="M178 87.5a1.5 1.5 0 011.5-1.5h65a1.5 1.5 0 010 3h-65a1.5 1.5 0 01-1.5-1.5zM185 94.5a1.5 1.5 0 011.5-1.5h51a1.5 1.5 0 010 3h-51a1.5 1.5 0 01-1.5-1.5z" fill="#a0aec0"></path><path d="M201 101.5a1.5 1.5 0 011.5-1.5h20a1.5 1.5 0 010 3h-20a1.5 1.5 0 01-1.5-1.5z" fill="#6366f1"></path><rect x="183" y="77" width="58" height="4" rx="2" fill="#4a5568"></rect><rect x="81" y="32" width="104.391" height="4" rx="2" fill="#a0aec0"></rect><rect x="96" y="21" width="74" height="5" rx="2.5" fill="#4a5568"></rect><rect x="113" y="120" width="40" height="10" rx="2" fill="#6366f1"></rect></svg>',content:`<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="text-center mb-20">
      <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Raw Denim Heirloom Man Braid</h1>
      <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug.</p>
      <div class="flex mt-6 justify-center">
        <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
      </div>
    </div>
    <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
      <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
        </div>
        <div class="flex-grow">
          <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Shooting Stars</h2>
          <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
          <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
            <circle cx="6" cy="6" r="3"></circle>
            <circle cx="6" cy="18" r="3"></circle>
            <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
          </svg>
        </div>
        <div class="flex-grow">
          <h2 class="text-gray-900 text-lg title-font font-medium mb-3">The Catalyzer</h2>
          <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
          <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
        <div class="flex-grow">
          <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Neptune</h2>
          <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
          <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
    <button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
  </div>
</section>`}),r.Blocks.add("feature3",{label:"Feature 3",category:"Feature",media:'<svg viewBox="0 0 266 150" fill="none"><path fill="#fff" d="M0 0h266v150H0z"></path><circle cx="140" cy="26" r="6" fill="#c3dafe"></circle><path d="M134 44a1 1 0 011-1h77a1 1 0 010 2h-77a1 1 0 01-1-1z" fill="#a0aec0"></path><path d="M134 49a1 1 0 011-1h21a1 1 0 010 2h-21a1 1 0 01-1-1z" fill="#6366f1"></path><rect x="134" y="37" width="58" height="3" rx="1.5" fill="#4a5568"></rect><circle cx="140" cy="66" r="6" fill="#c3dafe"></circle><path d="M134 84a1 1 0 011-1h77a1 1 0 010 2h-77a1 1 0 01-1-1z" fill="#a0aec0"></path><path d="M134 89a1 1 0 011-1h21a1 1 0 010 2h-21a1 1 0 01-1-1z" fill="#6366f1"></path><rect x="134" y="77" width="58" height="3" rx="1.5" fill="#4a5568"></rect><circle cx="140" cy="106" r="6" fill="#c3dafe"></circle><path d="M134 124a1 1 0 011-1h77a1 1 0 010 2h-77a1 1 0 01-1-1z" fill="#a0aec0"></path><path d="M134 129a1 1 0 011-1h21a1 1 0 010 2h-21a1 1 0 01-1-1z" fill="#6366f1"></path><rect x="134" y="117" width="58" height="3" rx="1.5" fill="#4a5568"></rect><path d="M63.792 92h26.544a3.785 3.785 0 003.792-3.778V61.778A3.785 3.785 0 0090.336 58H63.792A3.785 3.785 0 0060 61.778v26.444A3.785 3.785 0 0063.792 92zm0 0l20.856-20.778 9.48 9.445M73.272 68.389a2.839 2.839 0 01-2.844 2.833 2.839 2.839 0 01-2.844-2.833 2.839 2.839 0 012.844-2.833 2.839 2.839 0 012.844 2.833z" stroke="#a0aec0" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path></svg>',content:`<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-wrap">
    <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
      <img alt="feature" class="object-cover object-center h-full w-full" src="https://dummyimage.com/460x500">
    </div>
    <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
      <div class="flex flex-col mb-10 lg:items-start items-center">
        <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
        </div>
        <div class="flex-grow">
          <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Shooting Stars</h2>
          <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
          <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      <div class="flex flex-col mb-10 lg:items-start items-center">
        <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
            <circle cx="6" cy="6" r="3"></circle>
            <circle cx="6" cy="18" r="3"></circle>
            <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
          </svg>
        </div>
        <div class="flex-grow">
          <h2 class="text-gray-900 text-lg title-font font-medium mb-3">The Catalyzer</h2>
          <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
          <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      <div class="flex flex-col mb-10 lg:items-start items-center">
        <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
        <div class="flex-grow">
          <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Neptune</h2>
          <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
          <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>`}),r.Blocks.add("feature4",{label:"Feature 4",category:"Feature",media:'<svg viewBox="0 0 266 150" fill="none"><path fill="#fff" d="M0 0h266v150H0z"></path><rect x="20.5" y="54.5" width="107" height="41" rx="1.5" fill="#fff" stroke="#cbd5e0"></rect><circle cx="32" cy="68" r="6" fill="#c3dafe"></circle><path d="M44 72.5a1.5 1.5 0 011.5-1.5h68a1.5 1.5 0 010 3h-68a1.5 1.5 0 01-1.5-1.5zM44 79.5a1.5 1.5 0 011.5-1.5h54a1.5 1.5 0 010 3h-54a1.5 1.5 0 01-1.5-1.5z" fill="#a0aec0"></path><path d="M44 86.5a1.5 1.5 0 011.5-1.5h19a1.5 1.5 0 010 3h-19a1.5 1.5 0 01-1.5-1.5z" fill="#6366f1"></path><rect x="44" y="62" width="32" height="4" rx="2" fill="#4a5568"></rect><rect x="138.5" y="54.5" width="107" height="41" rx="1.5" fill="#fff" stroke="#cbd5e0"></rect><circle cx="150" cy="68" r="6" fill="#c3dafe"></circle><path d="M162 72.5a1.5 1.5 0 011.5-1.5h68a1.5 1.5 0 010 3h-68a1.5 1.5 0 01-1.5-1.5zM162 79.5a1.5 1.5 0 011.5-1.5h54a1.5 1.5 0 010 3h-54a1.5 1.5 0 01-1.5-1.5z" fill="#a0aec0"></path><path d="M162 86.5a1.5 1.5 0 011.5-1.5h19a1.5 1.5 0 010 3h-19a1.5 1.5 0 01-1.5-1.5z" fill="#6366f1"></path><rect x="162" y="62" width="32" height="4" rx="2" fill="#4a5568"></rect></svg>',content:`<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-wrap">
    <div class="flex flex-wrap -m-4">
      <div class="p-4 lg:w-1/2 md:w-full">
        <div class="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
          <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-8 h-8" viewBox="0 0 24 24">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <div class="flex-grow">
            <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Shooting Stars</h2>
            <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
            <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/2 md:w-full">
        <div class="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
          <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div class="flex-grow">
            <h2 class="text-gray-900 text-lg title-font font-medium mb-3">The Catalyzer</h2>
            <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
            <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`}),r.Blocks.add("feature5",{label:"Feature 5",category:"Feature",media:'<svg viewBox="0 0 266 150" fill="none"><path fill="#fff" d="M0 0h266v150H0z"></path><rect x="20" y="78" width="69" height="31" rx="2" fill="#e2e8f0"></rect><rect x="113" y="41" width="40" height="3" rx="1.5" fill="#6366f1"></rect><circle cx="28" cy="86" r="3" fill="#6366f1"></circle><rect x="98" y="49" width="70" height="5" rx="2.5" fill="#4a5568"></rect><path d="M25 93a1 1 0 011-1h54a1 1 0 110 2H26a1 1 0 01-1-1zM25 98a1 1 0 011-1h44a1 1 0 110 2H26a1 1 0 01-1-1z" fill="#a0aec0"></path><path d="M25 103a1 1 0 011-1h11a1 1 0 010 2H26a1 1 0 01-1-1z" fill="#6366f1"></path><rect x="34" y="84.5" width="35" height="3" rx="1.5" fill="#4a5568"></rect><rect x="99" y="78" width="69" height="31" rx="2" fill="#e2e8f0"></rect><circle cx="107" cy="86" r="3" fill="#6366f1"></circle><path d="M104 93a1 1 0 011-1h54a1 1 0 010 2h-54a1 1 0 01-1-1zM104 98a1 1 0 011-1h44a1 1 0 010 2h-44a1 1 0 01-1-1z" fill="#a0aec0"></path><path d="M104 103a1 1 0 011-1h11a1 1 0 010 2h-11a1 1 0 01-1-1z" fill="#6366f1"></path><rect x="113" y="84.5" width="35" height="3" rx="1.5" fill="#4a5568"></rect><rect x="178" y="78" width="69" height="31" rx="2" fill="#e2e8f0"></rect><circle cx="186" cy="86" r="3" fill="#6366f1"></circle><path d="M183 93a1 1 0 011-1h54a1 1 0 010 2h-54a1 1 0 01-1-1zM183 98a1 1 0 011-1h44a1 1 0 010 2h-44a1 1 0 01-1-1z" fill="#a0aec0"></path><path d="M183 103a1 1 0 011-1h11a1 1 0 010 2h-11a1 1 0 01-1-1z" fill="#6366f1"></path><rect x="192" y="84.5" width="35" height="3" rx="1.5" fill="#4a5568"></rect></svg>',content:`<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">ROOF PARTY POLAROID</h2>
      <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">Master Cleanse Reliac Heirloom</h1>
    </div>
    <div class="flex flex-wrap -m-4">
      <div class="p-4 md:w-1/3">
        <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div class="flex items-center mb-3">
            <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <h2 class="text-gray-900 text-lg title-font font-medium">Shooting Stars</h2>
          </div>
          <div class="flex-grow">
            <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
            <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div class="flex items-center mb-3">
            <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <h2 class="text-gray-900 text-lg title-font font-medium">The Catalyzer</h2>
          </div>
          <div class="flex-grow">
            <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
            <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div class="flex items-center mb-3">
            <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <circle cx="6" cy="6" r="3"></circle>
                <circle cx="6" cy="18" r="3"></circle>
                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
              </svg>
            </div>
            <h2 class="text-gray-900 text-lg title-font font-medium">Neptune</h2>
          </div>
          <div class="flex-grow">
            <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
            <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`}),r.Blocks.add("feature6",{label:"Feature 6",category:"Feature",media:'<svg viewBox="0 0 266 150" fill="none"><path fill="#fff" d="M0 0h266v150H0z"></path><circle cx="88" cy="28" r="8" fill="#c3dafe"></circle><path d="M102 28a1 1 0 011-1h68a1 1 0 010 2h-68a1 1 0 01-1-1z" fill="#a0aec0"></path><path d="M102 33a1 1 0 011-1h14a1 1 0 010 2h-14a1 1 0 01-1-1z" fill="#6366f1"></path><rect x="102" y="21" width="40" height="3" rx="1.5" fill="#4a5568"></rect><circle cx="88" cy="98" r="8" fill="#c3dafe"></circle><path d="M102 98a1 1 0 011-1h68a1 1 0 010 2h-68a1 1 0 01-1-1z" fill="#a0aec0"></path><path d="M102 103a1 1 0 011-1h14a1 1 0 010 2h-14a1 1 0 01-1-1z" fill="#6366f1"></path><rect x="102" y="91" width="40" height="3" rx="1.5" fill="#4a5568"></rect><circle cx="178" cy="63" r="8" fill="#c3dafe"></circle><path d="M80 63a1 1 0 011-1h68a1 1 0 010 2H81a1 1 0 01-1-1z" fill="#a0aec0"></path><path d="M80 68a1 1 0 011-1h14a1 1 0 110 2H81a1 1 0 01-1-1z" fill="#6366f1"></path><rect x="80" y="56" width="40" height="3" rx="1.5" fill="#4a5568"></rect><rect x="113" y="120" width="40" height="10" rx="2" fill="#6366f1"></rect><path d="M185.5 45a.5.5 0 010 1h-105a.5.5 0 010-1h105zM185.5 80a.5.5 0 010 1h-105a.5.5 0 010-1h105z" fill="#cbd5e0"></path></svg>',content:`<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
      <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>
      </div>
      <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Shooting Stars</h2>
        <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
        <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
    <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
      <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 class="text-gray-900 text-lg title-font font-medium mb-2">The Catalyzer</h2>
        <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
        <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div class="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
          <circle cx="6" cy="6" r="3"></circle>
          <circle cx="6" cy="18" r="3"></circle>
          <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
        </svg>
      </div>
    </div>
    <div class="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
      <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      </div>
      <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 class="text-gray-900 text-lg title-font font-medium mb-2">The 400 Blows</h2>
        <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
        <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
    <button class="flex mx-auto mt-20 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
  </div>
</section>`}),r.Blocks.add("feature7",{label:"Feature 7",category:"Feature",media:'<svg viewBox="0 0 266 150" fill="none"><path fill="#fff" d="M0 0h266v150H0z"></path><path d="M70 61a1 1 0 011-1h58a1 1 0 011 1v8a1 1 0 01-1 1H71a1 1 0 01-1-1v-8z" fill="#e2e8f0"></path><path d="M80 65a1 1 0 011-1h40a1 1 0 010 2H81a1 1 0 01-1-1z" fill="#4a5568"></path><path d="M77 65a2 2 0 11-4 0 2 2 0 014 0z" fill="#6366f1"></path><path d="M136 61a1 1 0 011-1h58a1 1 0 011 1v8a1 1 0 01-1 1h-58a1 1 0 01-1-1v-8z" fill="#e2e8f0"></path><path d="M146 65a1 1 0 011-1h40a1 1 0 010 2h-40a1 1 0 01-1-1z" fill="#4a5568"></path><path d="M143 65a2 2 0 11-4 0 2 2 0 014 0z" fill="#6366f1"></path><path d="M70 77a1 1 0 011-1h58a1 1 0 011 1v8a1 1 0 01-1 1H71a1 1 0 01-1-1v-8z" fill="#e2e8f0"></path><path d="M80 81a1 1 0 011-1h40a1 1 0 010 2H81a1 1 0 01-1-1z" fill="#4a5568"></path><path d="M77 81a2 2 0 11-4 0 2 2 0 014 0z" fill="#6366f1"></path><path d="M136 77a1 1 0 011-1h58a1 1 0 011 1v8a1 1 0 01-1 1h-58a1 1 0 01-1-1v-8z" fill="#e2e8f0"></path><path d="M146 81a1 1 0 011-1h40a1 1 0 010 2h-40a1 1 0 01-1-1z" fill="#4a5568"></path><path d="M143 81a2 2 0 11-4 0 2 2 0 014 0z" fill="#6366f1"></path><path d="M70 93a1 1 0 011-1h58a1 1 0 011 1v8a1 1 0 01-1 1H71a1 1 0 01-1-1v-8z" fill="#e2e8f0"></path><path d="M80 97a1 1 0 011-1h40a1 1 0 010 2H81a1 1 0 01-1-1z" fill="#4a5568"></path><path d="M77 97a2 2 0 11-4 0 2 2 0 014 0z" fill="#6366f1"></path><path d="M136 93a1 1 0 011-1h58a1 1 0 011 1v8a1 1 0 01-1 1h-58a1 1 0 01-1-1v-8z" fill="#e2e8f0"></path><path d="M146 97a1 1 0 011-1h40a1 1 0 010 2h-40a1 1 0 01-1-1z" fill="#4a5568"></path><path d="M143 97a2 2 0 11-4 0 2 2 0 014 0z" fill="#6366f1"></path><rect x="81" y="31" width="104.391" height="4" rx="2" fill="#a0aec0"></rect><rect x="81" y="31" width="104.391" height="4" rx="2" fill="#a0aec0"></rect><rect x="96" y="20" width="74" height="5" rx="2.5" fill="#4a5568"></rect><rect x="97" y="39" width="73" height="4" rx="2" fill="#a0aec0"></rect><rect x="113" y="120" width="40" height="10" rx="2" fill="#6366f1"></rect></svg>',content:`<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="text-center mb-20">
      <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">Raw Denim Heirloom Man Braid</h1>
      <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug.</p>
    </div>
    <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
      <div class="p-2 sm:w-1/2 w-full">
        <div class="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span class="title-font font-medium">Authentic Cliche Forage</span>
        </div>
      </div>
      <div class="p-2 sm:w-1/2 w-full">
        <div class="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span class="title-font font-medium">Kinfolk Chips Snackwave</span>
        </div>
      </div>
      <div class="p-2 sm:w-1/2 w-full">
        <div class="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span class="title-font font-medium">Coloring Book Ethical</span>
        </div>
      </div>
      <div class="p-2 sm:w-1/2 w-full">
        <div class="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span class="title-font font-medium">Typewriter Polaroid Cray</span>
        </div>
      </div>
      <div class="p-2 sm:w-1/2 w-full">
        <div class="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span class="title-font font-medium">Pack Truffaut Blue</span>
        </div>
      </div>
      <div class="p-2 sm:w-1/2 w-full">
        <div class="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span class="title-font font-medium">The Catcher In The Rye</span>
        </div>
      </div>
    </div>
    <button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
  </div>
</section>`}),r.Blocks.add("feature8",{label:"Feature 8",category:"Feature",media:'<svg viewBox="0 0 266 150" fill="none"><path fill="#fff" d="M0 0h266v150H0z"></path><rect x="81" y="31" width="104.391" height="4" rx="2" fill="#a0aec0"></rect><rect x="81" y="31" width="104.391" height="4" rx="2" fill="#a0aec0"></rect><rect x="96" y="39" width="73" height="4" rx="2" fill="#a0aec0"></rect><rect x="96" y="20" width="74" height="5" rx="2.5" fill="#4a5568"></rect><rect x="28" y="62" width="35" height="3" rx="1.5" fill="#4a5568"></rect><rect x="35" y="70" width="23" height="2" rx="1" fill="#a0aec0"></rect><path d="M32 71a2 2 0 11-4 0 2 2 0 014 0z" fill="#c3dafe"></path><rect x="35" y="77" width="16" height="2" rx="1" fill="#a0aec0"></rect><path d="M32 78a2 2 0 11-4 0 2 2 0 014 0z" fill="#c3dafe"></path><rect x="35" y="84" width="28" height="2" rx="1" fill="#a0aec0"></rect><path d="M32 85a2 2 0 11-4 0 2 2 0 014 0z" fill="#c3dafe"></path><rect x="35" y="91" width="23" height="2" rx="1" fill="#a0aec0"></rect><path d="M32 92a2 2 0 11-4 0 2 2 0 014 0z" fill="#c3dafe"></path><rect x="35" y="98" width="21" height="2" rx="1" fill="#a0aec0"></rect><path d="M32 99a2 2 0 11-4 0 2 2 0 014 0z" fill="#c3dafe"></path><rect x="85" y="62" width="33" height="3" rx="1.5" fill="#4a5568"></rect><rect x="92" y="70" width="23" height="2" rx="1" fill="#a0aec0"></rect><path d="M89 71a2 2 0 11-4 0 2 2 0 014 0z" fill="#c3dafe"></path><rect x="92" y="77" width="16" height="2" rx="1" fill="#a0aec0"></rect><path d="M89 78a2 2 0 11-4 0 2 2 0 014 0z" fill="#c3dafe"></path><rect x="92" y="84" width="28" height="2" rx="1" fill="#a0aec0"></rect><path d="M89 85a2 2 0 11-4 0 2 2 0 014 0z" fill="#c3dafe"></path><rect x="92" y="91" width="23" height="2" rx="1" fill="#a0aec0"></rect><path d="M89 92a2 2 0 11-4 0 2 2 0 014 0z" fill="#c3dafe"></path><rect x="92" y="98" width="21" height="2" rx="1" fill="#a0aec0"></rect><path d="M89 99a2 2 0 11-4 0 2 2 0 014 0z" fill="#c3dafe"></path><rect x="142" y="62" width="28" height="3" rx="1.5" fill="#4a5568"></rect><rect x="149" y="70" width="23" height="2" rx="1" fill="#a0aec0"></rect><path d="M146 71a2 2 0 11-4 0 2 2 0 014 0z" fill="#c3dafe"></path><rect x="149" y="77" width="16" height="2" rx="1" fill="#a0aec0"></rect><path d="M146 78a2 2 0 11-4 0 2 2 0 014 0z" fill="#c3dafe"></path><rect x="149" y="84" width="28" height="2" rx="1" fill="#a0aec0"></rect><path d="M146 85a2 2 0 11-4 0 2 2 0 014 0z" fill="#c3dafe"></path><rect x="149" y="91" width="23" height="2" rx="1" fill="#a0aec0"></rect><path d="M146 92a2 2 0 11-4 0 2 2 0 014 0z" fill="#c3dafe"></path><rect x="149" y="98" width="21" height="2" rx="1" fill="#a0aec0"></rect><path d="M146 99a2 2 0 11-3.999.001A2 2 0 01146 99z" fill="#c3dafe"></path><rect x="199" y="62" width="39" height="3" rx="1.5" fill="#4a5568"></rect><rect x="206" y="70" width="23" height="2" rx="1" fill="#a0aec0"></rect><path d="M203 71a2 2 0 11-4 0 2 2 0 014 0z" fill="#c3dafe"></path><rect x="206" y="77" width="16" height="2" rx="1" fill="#a0aec0"></rect><path d="M203 78a2 2 0 11-4 0 2 2 0 014 0z" fill="#c3dafe"></path><rect x="206" y="84" width="28" height="2" rx="1" fill="#a0aec0"></rect><path d="M203 85a2 2 0 11-4 0 2 2 0 014 0z" fill="#c3dafe"></path><rect x="206" y="91" width="23" height="2" rx="1" fill="#a0aec0"></rect><path d="M203 92a2 2 0 11-4 0 2 2 0 014 0z" fill="#c3dafe"></path><rect x="206" y="98" width="21" height="2" rx="1" fill="#a0aec0"></rect><path d="M203 99a2 2 0 11-3.999.001A2 2 0 01203 99z" fill="#c3dafe"></path><rect x="113" y="120" width="40" height="10" rx="2" fill="#6366f1"></rect></svg>',content:`<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="text-center mb-20">
      <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">Raw Denim Heirloom Man Braid</h1>
      <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug.</p>
    </div>
    <div class="flex flex-wrap -m-4">
      <div class="p-4 lg:w-1/4 sm:w-1/2 w-full">
        <h2 class="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">SHOOTING STARS</h2>
        <nav class="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
          <a>
            <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>First Link
          </a>
          <a>
            <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Second Link
          </a>
          <a>
            <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Third Link
          </a>
          <a>
            <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Fourth Link
          </a>
          <a>
            <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Fifth Link
          </a>
        </nav>
      </div>
      <div class="p-4 lg:w-1/4 sm:w-1/2 w-full">
        <h2 class="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">THE 400 BLOWS</h2>
        <nav class="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
          <a>
            <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>First Link
          </a>
          <a>
            <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Second Link
          </a>
          <a>
            <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Third Link
          </a>
          <a>
            <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Fourth Link
          </a>
          <a>
            <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Fifth Link
          </a>
        </nav>
      </div>
      <div class="p-4 lg:w-1/4 sm:w-1/2 w-full">
        <h2 class="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">THE CATALYZER</h2>
        <nav class="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
          <a>
            <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>First Link
          </a>
          <a>
            <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Second Link
          </a>
          <a>
            <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Third Link
          </a>
          <a>
            <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Fourth Link
          </a>
          <a>
            <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Fifth Link
          </a>
        </nav>
      </div>
      <div class="p-4 lg:w-1/4 sm:w-1/2 w-full">
        <h2 class="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">NEPTUNE</h2>
        <nav class="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
          <a>
            <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>First Link
          </a>
          <a>
            <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Second Link
          </a>
          <a>
            <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Third Link
          </a>
          <a>
            <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Fourth Link
          </a>
          <a>
            <span class="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Fifth Link
          </a>
        </nav>
      </div>
    </div>
    <button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
  </div>
</section>`}),r.Blocks.add("footer1",{label:"Footer 1",category:"Footer",media:'<svg fill="none" viewBox="0 0 266 150"><path fill="#fff" d="M0 0h266v150H0z"></path><rect x="61" y="85" width="35" height="3" rx="1.5" fill="#4a5568"></rect><rect x="61" y="93" width="23" height="3" rx="1.5" fill="#a0aec0"></rect><rect x="61" y="100" width="16" height="3" rx="1.5" fill="#a0aec0"></rect><rect x="61" y="107" width="28" height="3" rx="1.5" fill="#a0aec0"></rect><rect x="61" y="114" width="23" height="3" rx="1.5" fill="#a0aec0"></rect><rect x="111" y="85" width="35" height="3" rx="1.5" fill="#4a5568"></rect><rect x="111" y="93" width="23" height="3" rx="1.5" fill="#a0aec0"></rect><rect x="111" y="100" width="16" height="3" rx="1.5" fill="#a0aec0"></rect><rect x="111" y="107" width="28" height="3" rx="1.5" fill="#a0aec0"></rect><rect x="111" y="114" width="23" height="3" rx="1.5" fill="#a0aec0"></rect><rect x="161" y="85" width="35" height="3" rx="1.5" fill="#4a5568"></rect><rect x="161" y="93" width="23" height="3" rx="1.5" fill="#a0aec0"></rect><rect x="161" y="107" width="28" height="3" rx="1.5" fill="#a0aec0"></rect><rect x="161" y="100" width="16" height="3" rx="1.5" fill="#a0aec0"></rect><rect x="161" y="114" width="23" height="3" rx="1.5" fill="#a0aec0"></rect><rect x="211" y="85" width="35" height="3" rx="1.5" fill="#4a5568"></rect><rect x="211" y="93" width="23" height="3" rx="1.5" fill="#a0aec0"></rect><rect x="211" y="100" width="16" height="3" rx="1.5" fill="#a0aec0"></rect><rect x="211" y="107" width="28" height="3" rx="1.5" fill="#a0aec0"></rect><rect x="211" y="114" width="23" height="3" rx="1.5" fill="#a0aec0"></rect><path fill="#e2e8f0" d="M0 131h266v19H0z"></path><rect x="20" y="139" width="41" height="3" rx="1.5" fill="#a0aec0"></rect><rect x="222" y="139" width="25" height="3" rx="1.5" fill="#a0aec0"></rect><circle cx="29" cy="94" r="9" fill="#6366f1"></circle></svg>',content:`<footer class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span class="ml-3 text-xl">Tailblocks</span>
      </a>
      <p class="mt-2 text-sm text-gray-500">Air plant banjo lyft occupy retro adaptogen indego</p>
    </div>
    <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-gray-600 hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-gray-600 hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-gray-600 hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-gray-600 hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
    </div>
  </div>
  <div class="bg-gray-100">
    <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p class="text-gray-500 text-sm text-center sm:text-left">© 2020 Tailblocks —
        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" class="text-gray-600 ml-1" target="_blank">@knyttneve</a>
      </p>
      <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a class="text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
  </div>
</footer>`}),r.Blocks.add("footer2",{label:"Footer 2",category:"Footer",media:'<svg fill="none" viewBox="0 0 266 150"><path fill="#fff" d="M0 0h266v150H0z"></path><rect x="21" y="85" width="35" height="3" rx="1.5" fill="#4a5568"></rect><rect x="21" y="93" width="23" height="3" rx="1.5" fill="#a0aec0"></rect><rect x="21" y="100" width="16" height="3" rx="1.5" fill="#a0aec0"></rect><rect x="21" y="107" width="28" height="3" rx="1.5" fill="#a0aec0"></rect><rect x="21" y="114" width="23" height="3" rx="1.5" fill="#a0aec0"></rect><rect x="71" y="85" width="35" height="3" rx="1.5" fill="#4a5568"></rect><rect x="71" y="93" width="23" height="3" rx="1.5" fill="#a0aec0"></rect><rect x="71" y="100" width="16" height="3" rx="1.5" fill="#a0aec0"></rect><rect x="71" y="107" width="28" height="3" rx="1.5" fill="#a0aec0"></rect><rect x="71" y="114" width="23" height="3" rx="1.5" fill="#a0aec0"></rect><rect x="121" y="85" width="35" height="3" rx="1.5" fill="#4a5568"></rect><rect x="121" y="93" width="23" height="3" rx="1.5" fill="#a0aec0"></rect><rect x="121" y="107" width="28" height="3" rx="1.5" fill="#a0aec0"></rect><rect x="121" y="100" width="16" height="3" rx="1.5" fill="#a0aec0"></rect><rect x="121" y="114" width="23" height="3" rx="1.5" fill="#a0aec0"></rect><rect x="171" y="85" width="35" height="3" rx="1.5" fill="#4a5568"></rect><rect x="171" y="93" width="23" height="3" rx="1.5" fill="#a0aec0"></rect><rect x="171" y="100" width="16" height="3" rx="1.5" fill="#a0aec0"></rect><rect x="171" y="107" width="28" height="3" rx="1.5" fill="#a0aec0"></rect><rect x="171" y="114" width="23" height="3" rx="1.5" fill="#a0aec0"></rect><path fill="#e2e8f0" d="M0 131h266v19H0z"></path><rect x="20" y="139" width="41" height="3" rx="1.5" fill="#a0aec0"></rect><rect x="222" y="139" width="25" height="3" rx="1.5" fill="#a0aec0"></rect><circle cx="237" cy="94" r="9" fill="#6366f1"></circle></svg>',content:`<footer class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
      <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span class="ml-3 text-xl">Tailblocks</span>
      </a>
      <p class="mt-2 text-sm text-gray-500">Air plant banjo lyft occupy retro adaptogen indego</p>
    </div>
    <div class="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-gray-600 hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-gray-600 hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-gray-600 hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-gray-600 hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
    </div>
  </div>
  <div class="bg-gray-100">
    <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p class="text-gray-500 text-sm text-center sm:text-left">© 2020 Tailblocks —
        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" class="text-gray-600 ml-1" target="_blank">@knyttneve</a>
      </p>
      <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a class="text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
  </div>
</footer>`}),r.Blocks.add("footer3",{label:"Footer 3",category:"Footer",media:'<svg fill="none" viewBox="0 0 266 150"><path fill="#fff" d="M0 0h266v150H0z"></path><rect x="67" y="57" width="35" height="3" rx="1.5" fill="#4a5568"></rect><rect x="67" y="65" width="23" height="3" rx="1.5" fill="#a0aec0"></rect><rect x="67" y="72" width="16" height="3" rx="1.5" fill="#a0aec0"></rect><rect x="67" y="79" width="28" height="3" rx="1.5" fill="#a0aec0"></rect><rect x="67" y="86" width="23" height="3" rx="1.5" fill="#a0aec0"></rect><rect x="20" y="57" width="35" height="3" rx="1.5" fill="#4a5568"></rect><rect x="20" y="65" width="23" height="3" rx="1.5" fill="#a0aec0"></rect><rect x="20" y="72" width="16" height="3" rx="1.5" fill="#a0aec0"></rect><rect x="20" y="79" width="28" height="3" rx="1.5" fill="#a0aec0"></rect><rect x="20" y="86" width="23" height="3" rx="1.5" fill="#a0aec0"></rect><rect x="115" y="57" width="35" height="3" rx="1.5" fill="#4a5568"></rect><rect x="115" y="65" width="23" height="3" rx="1.5" fill="#a0aec0"></rect><rect x="115" y="72" width="16" height="3" rx="1.5" fill="#a0aec0"></rect><rect x="115" y="79" width="28" height="3" rx="1.5" fill="#a0aec0"></rect><rect x="115" y="86" width="23" height="3" rx="1.5" fill="#a0aec0"></rect><rect x="163" y="57" width="35" height="3" rx="1.5" fill="#4a5568"></rect><rect x="163" y="65" width="23" height="3" rx="1.5" fill="#a0aec0"></rect><rect x="163" y="79" width="28" height="3" rx="1.5" fill="#a0aec0"></rect><rect x="163" y="72" width="16" height="3" rx="1.5" fill="#a0aec0"></rect><rect x="163" y="86" width="23" height="3" rx="1.5" fill="#a0aec0"></rect><rect x="211" y="57" width="35" height="3" rx="1.5" fill="#4a5568"></rect><rect x="211" y="65" width="23" height="3" rx="1.5" fill="#a0aec0"></rect><rect x="211" y="72" width="16" height="3" rx="1.5" fill="#a0aec0"></rect><rect x="211" y="79" width="28" height="3" rx="1.5" fill="#a0aec0"></rect><rect x="211" y="86" width="23" height="3" rx="1.5" fill="#a0aec0"></rect><rect x="199" y="117" width="48" height="3" rx="1.5" fill="#a0aec0"></rect><path stroke="#e2e8f0" d="M266 103.5H0"></path><path d="M79 114a2 2 0 012-2h25a2 2 0 012 2v6a2 2 0 01-2 2H81a2 2 0 01-2-2v-6z" fill="#6366f1"></path><rect x="20" y="112" width="55" height="10" rx="2" fill="#cbd5e0"></rect><path fill="#e2e8f0" d="M0 131h266v19H0z"></path><rect x="20" y="139" width="41" height="3" rx="1.5" fill="#a0aec0"></rect><rect x="222" y="139" width="25" height="3" rx="1.5" fill="#a0aec0"></rect></svg>',content:`<footer class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap md:text-left text-center -mb-10 -mx-4">
      <div class="lg:w-1/6 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-gray-600 hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/6 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-gray-600 hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/6 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-gray-600 hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/6 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-gray-600 hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/6 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-gray-600 hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/6 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-gray-600 hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
    </div>
  </div>
  <div class="border-t border-gray-200">
    <div class="container px-5 py-8 flex flex-wrap mx-auto items-center">
      <div class="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
        <div class="relative sm:w-64 w-40 sm:mr-4 mr-2">
          <label for="footer-field" class="leading-7 text-sm text-gray-600">Placeholder</label>
          <input type="text" id="footer-field" name="footer-field" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
        </div>
        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
        <p class="text-gray-500 text-sm md:ml-6 md:mt-0 mt-2 sm:text-left text-center">Bitters chicharrones fanny pack
          <br class="lg:block hidden">waistcoat green juice
        </p>
      </div>
      <span class="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
        <a class="text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
  </div>
  <div class="bg-gray-100">
    <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p class="text-gray-500 text-sm text-center sm:text-left">© 2020 Tailblocks —
        <a href="https://twitter.com/knyttneve" class="text-gray-600 ml-1" target="_blank" rel="noopener noreferrer">@knyttneve</a>
      </p>
      <span class="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">Enamel pin tousled raclette tacos irony</span>
    </div>
  </div>
</footer>`}),r.Blocks.add("footer4",{label:"Footer 4",category:"Footer",media:'<svg fill="none" viewBox="0 0 266 150"><path fill="#fff" d="M0 0h266v150H0z"></path><path stroke="#e2e8f0" d="M266 112.5H0"></path><circle cx="29" cy="131" r="9" fill="#6366f1"></circle><rect x="213" y="129" width="31" height="4" rx="2" fill="#a0aec0"></rect><rect x="53" y="129" width="45" height="4" rx="2" fill="#a0aec0"></rect><path fill="#cbd5e0" d="M45 120h1v22h-1z"></path></svg>',content:`<footer class="text-gray-600 body-font">
  <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span class="ml-3 text-xl">Tailblocks</span>
    </a>
    <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2020 Tailblocks —
      <a href="https://twitter.com/knyttneve" class="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@knyttneve</a>
    </p>
    <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a class="text-gray-500">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
        </svg>
      </a>
      <a class="ml-3 text-gray-500">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
        </svg>
      </a>
      <a class="ml-3 text-gray-500">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
        </svg>
      </a>
      <a class="ml-3 text-gray-500">
        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
          <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
          <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
      </a>
    </span>
  </div>
</footer>`}),r.Blocks.add("footer5",{label:"Footer 5",category:"Footer",media:'<svg fill="none" viewBox="0 0 266 150"><path fill="#fff" d="M0 0h266v150H0z"></path><rect x="63.385" y="76" width="32.308" height="3" rx="1.5" fill="#4a5568"></rect><rect x="63.385" y="84" width="21.231" height="3" rx="1.5" fill="#a0aec0"></rect><rect x="63.385" y="91" width="14.769" height="3" rx="1.5" fill="#a0aec0"></rect><rect x="63.385" y="98" width="25.846" height="3" rx="1.5" fill="#a0aec0"></rect><rect x="63.385" y="105" width="21.231" height="3" rx="1.5" fill="#a0aec0"></rect><rect x="20" y="76" width="32.308" height="3" rx="1.5" fill="#4a5568"></rect><rect x="20" y="84" width="21.231" height="3" rx="1.5" fill="#a0aec0"></rect><rect x="20" y="91" width="14.769" height="3" rx="1.5" fill="#a0aec0"></rect><rect x="20" y="98" width="25.846" height="3" rx="1.5" fill="#a0aec0"></rect><rect x="20" y="105" width="21.231" height="3" rx="1.5" fill="#a0aec0"></rect><rect x="107.692" y="76" width="32.308" height="3" rx="1.5" fill="#4a5568"></rect><rect x="163" y="76" width="32.308" height="3" rx="1.5" fill="#4a5568"></rect><rect x="107.692" y="84" width="21.231" height="3" rx="1.5" fill="#a0aec0"></rect><rect x="107.692" y="91" width="14.769" height="3" rx="1.5" fill="#a0aec0"></rect><rect x="107.692" y="98" width="25.846" height="3" rx="1.5" fill="#a0aec0"></rect><rect x="107.692" y="105" width="21.231" height="3" rx="1.5" fill="#a0aec0"></rect><path d="M217 86a2 2 0 012-2h25a2 2 0 012 2v6a2 2 0 01-2 2h-25a2 2 0 01-2-2v-6z" fill="#6366f1"></path><rect x="163" y="84" width="50" height="10" rx="2" fill="#cbd5e0"></rect><path fill="#e2e8f0" d="M0 119h266v31H0z"></path><circle cx="28.5" cy="134.5" r="8.5" fill="#6366f1"></circle><rect x="45" y="133" width="30" height="3" rx="1.5" fill="#a0aec0"></rect><rect x="198" y="133" width="48" height="3" rx="1.5" fill="#a0aec0"></rect></svg>',content:`<footer class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap md:text-left text-center order-first">
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-gray-600 hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-gray-600 hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-gray-600 hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">SUBSCRIBE</h2>
        <div class="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
          <div class="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
            <label for="footer-field" class="leading-7 text-sm text-gray-600">Placeholder</label>
            <input type="text" id="footer-field" name="footer-field" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
          </div>
          <button class="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
        </div>
        <p class="text-gray-500 text-sm mt-2 md:text-left text-center">Bitters chicharrones fanny pack
          <br class="lg:block hidden">waistcoat green juice
        </p>
      </div>
    </div>
  </div>
  <div class="bg-gray-100">
    <div class="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
      <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span class="ml-3 text-xl">Tailblocks</span>
      </a>
      <p class="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">© 2020 Tailblocks —
        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" class="text-gray-600 ml-1" target="_blank">@knyttneve</a>
      </p>
      <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <a class="text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
  </div>
</footer>`}),r.Blocks.add("gallery1",{label:"Gallery 1",category:"Gallery",media:'<svg viewBox="0 0 266 150" fill="none"><path fill="#fff" d="M0 0h266v150H0z"></path><rect x="142" y="32" width="104.391" height="4" rx="2" fill="#a0aec0"></rect><rect x="20" y="32" width="74" height="5" rx="2.5" fill="#4a5568"></rect><rect x="142" y="40" width="77" height="4" rx="2" fill="#a0aec0"></rect><path fill="#e2e8f0" d="M20 61h55v27H20zM20 91h111v39H20z"></path><path d="M70.556 118h10.888c.86 0 1.556-.696 1.556-1.556v-10.888c0-.86-.696-1.556-1.556-1.556H70.556c-.86 0-1.556.696-1.556 1.556v10.888c0 .86.696 1.556 1.556 1.556zm0 0l8.555-8.556L83 113.333m-8.556-5.055a1.166 1.166 0 11-2.332 0 1.166 1.166 0 012.332 0z" stroke="#a0aec0" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path fill="#e2e8f0" d="M78 61h53v27H78z"></path><path d="M101.111 79h7.778A1.11 1.11 0 00110 77.889V70.11a1.11 1.11 0 00-1.111-1.11h-7.778A1.11 1.11 0 00100 70.111v7.778A1.11 1.11 0 00101.111 79zm0 0l6.111-6.111L110 75.667m-6.111-3.611a.833.833 0 11-1.666 0 .833.833 0 011.666 0zM44.111 79h7.778c.613 0 1.111-.498 1.111-1.111V70.11c0-.614-.498-1.111-1.111-1.111H44.11c-.613 0-1.111.498-1.111 1.111v7.778c0 .614.498 1.111 1.111 1.111zm0 0l6.111-6.111L53 75.667m-6.111-3.611a.833.833 0 11-1.667 0 .833.833 0 011.667 0z" stroke="#a0aec0" stroke-linecap="round" stroke-linejoin="round"></path><path fill="#e2e8f0" d="M134 103h56v27h-56z"></path><path d="M158.111 122h7.778a1.11 1.11 0 001.111-1.111v-7.778a1.11 1.11 0 00-1.111-1.111h-7.778a1.11 1.11 0 00-1.111 1.111v7.778a1.11 1.11 0 001.111 1.111zm0 0l6.111-6.111 2.778 2.778m-6.111-3.611a.833.833 0 11-1.666 0 .833.833 0 011.666 0z" stroke="#a0aec0" stroke-linecap="round" stroke-linejoin="round"></path><path fill="#e2e8f0" d="M134 61h112v39H134zM193 103h53v27h-53z"></path><path d="M215.111 122h7.778a1.11 1.11 0 001.111-1.111v-7.778a1.11 1.11 0 00-1.111-1.111h-7.778a1.11 1.11 0 00-1.111 1.111v7.778a1.11 1.11 0 001.111 1.111zm0 0l6.111-6.111 2.778 2.778m-6.111-3.611a.833.833 0 11-1.666 0 .833.833 0 011.666 0z" stroke="#a0aec0" stroke-linecap="round" stroke-linejoin="round"></path><path d="M184.556 87h10.888c.86 0 1.556-.696 1.556-1.556V74.556c0-.86-.696-1.556-1.556-1.556h-10.888c-.86 0-1.556.696-1.556 1.556v10.888c0 .86.696 1.556 1.556 1.556zm0 0l8.555-8.556 3.889 3.89m-8.556-5.056a1.166 1.166 0 11-2.333 0 1.166 1.166 0 012.333 0z" stroke="#a0aec0" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path></svg>',content:`<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-wrap">
    <div class="flex w-full mb-20 flex-wrap">
      <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Master Cleanse Reliac Heirloom</h1>
      <p class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p>
    </div>
    <div class="flex flex-wrap md:-m-2 -m-1">
      <div class="flex flex-wrap w-1/2">
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://dummyimage.com/500x300">
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://dummyimage.com/501x301">
        </div>
        <div class="md:p-2 p-1 w-full">
          <img alt="gallery" class="w-full h-full object-cover object-center block" src="https://dummyimage.com/600x360">
        </div>
      </div>
      <div class="flex flex-wrap w-1/2">
        <div class="md:p-2 p-1 w-full">
          <img alt="gallery" class="w-full h-full object-cover object-center block" src="https://dummyimage.com/601x361">
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://dummyimage.com/502x302">
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://dummyimage.com/503x303">
        </div>
      </div>
    </div>
  </div>
</section>`}),r.Blocks.add("gallery2",{label:"Gallery 2",category:"Gallery",media:'<svg viewBox="0 0 266 150" fill="none"><path fill="#fff" d="M0 0h266v150H0z"></path><path fill="#e2e8f0" d="M71 84h62v38H71zM71 27h127v54H71zM136 84h62v38h-62z"></path><path d="M93 54.5a1.5 1.5 0 011.5-1.5h77a1.5 1.5 0 010 3h-77a1.5 1.5 0 01-1.5-1.5z" fill="#a0aec0"></path><path d="M123 61.5a1.5 1.5 0 011.5-1.5h17a1.5 1.5 0 010 3h-17a1.5 1.5 0 01-1.5-1.5z" fill="#6366f1"></path><rect x="108" y="45" width="50" height="4" rx="2" fill="#4a5568"></rect><path d="M81 103.5a1.5 1.5 0 011.5-1.5h39a1.5 1.5 0 010 3h-39a1.5 1.5 0 01-1.5-1.5z" fill="#a0aec0"></path><path d="M97 110.5a1.5 1.5 0 011.5-1.5h7a1.5 1.5 0 010 3h-7a1.5 1.5 0 01-1.5-1.5z" fill="#6366f1"></path><rect x="89" y="94" width="26" height="4" rx="2" fill="#4a5568"></rect><path d="M146 103.5a1.5 1.5 0 011.5-1.5h39a1.5 1.5 0 010 3h-39a1.5 1.5 0 01-1.5-1.5z" fill="#a0aec0"></path><path d="M162 110.5a1.5 1.5 0 011.5-1.5h7a1.5 1.5 0 010 3h-7a1.5 1.5 0 01-1.5-1.5z" fill="#6366f1"></path><rect x="154" y="94" width="26" height="4" rx="2" fill="#4a5568"></rect></svg>',content:`<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-wrap">
    <div class="lg:w-2/3 mx-auto">
      <div class="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4">
        <img alt="gallery" class="w-full object-cover h-full object-center block opacity-25 absolute inset-0" src="https://dummyimage.com/820x340">
        <div class="text-center relative z-10 w-full">
          <h2 class="text-2xl text-gray-900 font-medium title-font mb-2">Shooting Stars</h2>
          <p class="leading-relaxed">Skateboard +1 mustache fixie paleo lumbersexual.</p>
          <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      <div class="flex flex-wrap -mx-2">
        <div class="px-2 w-1/2">
          <div class="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
            <img alt="gallery" class="w-full object-cover h-full object-center block opacity-25 absolute inset-0" src="https://dummyimage.com/542x460">
            <div class="text-center relative z-10 w-full">
              <h2 class="text-xl text-gray-900 font-medium title-font mb-2">Shooting Stars</h2>
              <p class="leading-relaxed">Skateboard +1 mustache fixie paleo lumbersexual.</p>
              <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div class="px-2 w-1/2">
          <div class="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
            <img alt="gallery" class="w-full object-cover h-full object-center block opacity-25 absolute inset-0" src="https://dummyimage.com/542x420">
            <div class="text-center relative z-10 w-full">
              <h2 class="text-xl text-gray-900 font-medium title-font mb-2">Shooting Stars</h2>
              <p class="leading-relaxed">Skateboard +1 mustache fixie paleo lumbersexual.</p>
              <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`}),r.Blocks.add("gallery3",{label:"Gallery 3",category:"Gallery",media:'<svg viewBox="0 0 266 150" fill="none"><path fill="#fff" d="M0 0h266v150H0z"></path><path fill="#e2e8f0" d="M20 61h72v32H20zM97 61h72v32H97zM174 61h72v32h-72zM20 98h72v32H20zM97 98h72v32H97zM174 98h72v32h-72z"></path><rect x="81" y="31" width="104.391" height="4" rx="2" fill="#a0aec0"></rect><rect x="81" y="31" width="104.391" height="4" rx="2" fill="#a0aec0"></rect><rect x="96" y="20" width="74" height="5" rx="2.5" fill="#4a5568"></rect><rect x="97" y="39" width="73" height="4" rx="2" fill="#a0aec0"></rect><path d="M50.556 84h10.888c.86 0 1.556-.696 1.556-1.556V71.556c0-.86-.696-1.556-1.556-1.556H50.556c-.86 0-1.556.696-1.556 1.556v10.888c0 .86.696 1.556 1.556 1.556zm0 0l8.555-8.556L63 79.334m-8.556-5.056a1.167 1.167 0 11-2.333 0 1.167 1.167 0 012.333 0zM127.556 84h10.888c.86 0 1.556-.696 1.556-1.556V71.556c0-.86-.696-1.556-1.556-1.556h-10.888c-.86 0-1.556.696-1.556 1.556v10.888c0 .86.696 1.556 1.556 1.556zm0 0l8.555-8.556 3.889 3.89m-8.556-5.056a1.166 1.166 0 11-2.333 0 1.166 1.166 0 012.333 0zM204.556 84h10.888c.86 0 1.556-.696 1.556-1.556V71.556c0-.86-.696-1.556-1.556-1.556h-10.888c-.86 0-1.556.696-1.556 1.556v10.888c0 .86.696 1.556 1.556 1.556zm0 0l8.555-8.556 3.889 3.89m-8.556-5.056a1.166 1.166 0 11-2.333 0 1.166 1.166 0 012.333 0zM204.556 121h10.888c.86 0 1.556-.696 1.556-1.556v-10.888c0-.86-.696-1.556-1.556-1.556h-10.888c-.86 0-1.556.696-1.556 1.556v10.888c0 .86.696 1.556 1.556 1.556zm0 0l8.555-8.556 3.889 3.889m-8.556-5.055a1.166 1.166 0 11-2.332 0 1.166 1.166 0 012.332 0zM127.556 121h10.888c.86 0 1.556-.696 1.556-1.556v-10.888c0-.86-.696-1.556-1.556-1.556h-10.888c-.86 0-1.556.696-1.556 1.556v10.888c0 .86.696 1.556 1.556 1.556zm0 0l8.555-8.556 3.889 3.889m-8.556-5.055a1.166 1.166 0 11-2.332 0 1.166 1.166 0 012.332 0zM50.556 121h10.888c.86 0 1.556-.696 1.556-1.556v-10.888c0-.86-.696-1.556-1.556-1.556H50.556c-.86 0-1.556.696-1.556 1.556v10.888c0 .86.696 1.556 1.556 1.556zm0 0l8.555-8.556L63 116.333m-8.556-5.055a1.166 1.166 0 11-2.332 0 1.166 1.166 0 012.332 0z" stroke="#a0aec0" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path></svg>',content:`<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Master Cleanse Reliac Heirloom</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p>
    </div>
    <div class="flex flex-wrap -m-4">
      <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/600x360">
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
            <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/601x361">
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
            <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/603x363">
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">The 400 Blows</h1>
            <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/602x362">
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Neptune</h1>
            <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/605x365">
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Holden Caulfield</h1>
            <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/606x366">
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Alper Kamu</h1>
            <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`}),r.Blocks.add("header1",{label:"Header 1",category:"Header",media:'<svg fill="none" viewBox="0 0 266 150"><path fill="#fff" d="M0 0h266v150H0z"></path><path stroke="#e2e8f0" d="M266 38.5H0"></path><rect x="217" y="14" width="29" height="10" rx="2" fill="#cbd5e0"></rect><circle cx="29" cy="19" r="9" fill="#6366f1"></circle><rect x="150.132" y="17" width="16.604" height="4" rx="2" fill="#4a5568"></rect><rect x="171.264" y="17" width="16.604" height="4" rx="2" fill="#4a5568"></rect><rect x="192.396" y="17" width="16.604" height="4" rx="2" fill="#4a5568"></rect><rect x="129" y="17" width="16.604" height="4" rx="2" fill="#4a5568"></rect></svg>',content:`<header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span class="ml-3 text-xl">Tailblocks</span>
    </a>
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a class="mr-5 hover:text-gray-900">First Link</a>
      <a class="mr-5 hover:text-gray-900">Second Link</a>
      <a class="mr-5 hover:text-gray-900">Third Link</a>
      <a class="mr-5 hover:text-gray-900">Fourth Link</a>
    </nav>
    <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>`}),r.Blocks.add("header2",{label:"Header 2",category:"Header",media:'<svg fill="none" viewBox="0 0 266 150"><path fill="#fff" d="M0 0h266v150H0z"></path><path stroke="#e2e8f0" d="M266 38.5H0"></path><rect x="141" y="14" width="29" height="10" rx="2" fill="#cbd5e0"></rect><circle cx="29" cy="19" r="9" fill="#6366f1"></circle><rect x="74.132" y="17" width="16.604" height="4" rx="2" fill="#4a5568"></rect><rect x="95.264" y="17" width="16.604" height="4" rx="2" fill="#4a5568"></rect><rect x="116.396" y="17" width="16.604" height="4" rx="2" fill="#4a5568"></rect><rect x="53" y="17" width="16.604" height="4" rx="2" fill="#4a5568"></rect><path fill="#cbd5e0" d="M45 8h1v22h-1z"></path></svg>',content:`<header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span class="ml-3 text-xl">Tailblocks</span>
    </a>
    <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      <a class="mr-5 hover:text-gray-900">First Link</a>
      <a class="mr-5 hover:text-gray-900">Second Link</a>
      <a class="mr-5 hover:text-gray-900">Third Link</a>
      <a class="mr-5 hover:text-gray-900">Fourth Link</a>
    </nav>
    <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>`}),r.Blocks.add("header3",{label:"Header 3",category:"Header",media:'<svg fill="none" viewBox="0 0 266 150"><path fill="#fff" d="M0 0h266v150H0z"></path><path stroke="#e2e8f0" d="M266 38.5H0"></path><rect x="217" y="14" width="29" height="10" rx="2" fill="#cbd5e0"></rect><circle cx="133" cy="19" r="9" fill="#6366f1"></circle><rect x="62.264" y="17" width="16.604" height="4" rx="2" fill="#4a5568"></rect><rect x="41.132" y="17" width="16.604" height="4" rx="2" fill="#4a5568"></rect><rect x="83.396" y="17" width="16.604" height="4" rx="2" fill="#4a5568"></rect><rect x="20" y="17" width="16.604" height="4" rx="2" fill="#4a5568"></rect></svg>',content:`<header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <nav class="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
      <a class="mr-5 hover:text-gray-900">First Link</a>
      <a class="mr-5 hover:text-gray-900">Second Link</a>
      <a class="mr-5 hover:text-gray-900">Third Link</a>
      <a class="hover:text-gray-900">Fourth Link</a>
    </nav>
    <a class="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span class="ml-3 text-xl">Tailblocks</span>
    </a>
    <div class="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
      <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  </div>
</header>`}),r.Blocks.add("header4",{label:"Header 4",category:"Header",media:'<svg fill="none" viewBox="0 0 266 150"><path fill="#fff" d="M0 0h266v150H0z"></path><path stroke="#e2e8f0" d="M266 38.5H0"></path><rect x="217" y="14" width="29" height="10" rx="2" fill="#cbd5e0"></rect><circle cx="29" cy="19" r="9" fill="#6366f1"></circle><rect x="129.264" y="17" width="16.604" height="4" rx="2" fill="#4a5568"></rect><rect x="108.132" y="17" width="16.604" height="4" rx="2" fill="#4a5568"></rect><rect x="150.396" y="17" width="16.604" height="4" rx="2" fill="#4a5568"></rect><rect x="87" y="17" width="16.604" height="4" rx="2" fill="#4a5568"></rect></svg>',content:`<header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span class="ml-3 text-xl">Tailblocks</span>
    </a>
    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a class="mr-5 hover:text-gray-900">First Link</a>
      <a class="mr-5 hover:text-gray-900">Second Link</a>
      <a class="mr-5 hover:text-gray-900">Third Link</a>
      <a class="mr-5 hover:text-gray-900">Fourth Link</a>
    </nav>
    <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>`}),r.Blocks.add("hero1",{label:"Hero 1",category:"Hero",media:'<svg  viewBox="0 0 266 150" fill="#fff"><rect x="20" y="86" width="29" height="10" rx="2" fill="#6366f1"></rect><rect x="55" y="86" width="29" height="10" rx="2" fill="#7f9cf5"></rect><rect x="20" y="64" width="104" height="4" rx="2" fill="#333"></rect><rect x="20" y="53" width="72" height="5" rx="2.5" fill="#333"></rect><rect x="20" y="72" width="97" height="4" rx="2" fill="#333"></rect><path d="M176.778 92h26.444A3.778 3.778 0 00207 88.222V61.778A3.778 3.778 0 00203.222 58h-26.444A3.778 3.778 0 00173 61.778v26.444A3.778 3.778 0 00176.778 92zm0 0l20.778-20.778L207 80.667m-20.778-12.278a2.833 2.833 0 11-5.666 0 2.833 2.833 0 015.666 0z" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke="#333333"></path></svg>',content:`<section class="text-gray-600 body-font">
            <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
              <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
                  <br class="hidden lg:inline-block">readymade gluten
                </h1>
                <p class="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
                <div class="flex justify-center">
                  <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                  <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
                </div>
              </div>
              <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600">
              </div>
            </div>
          </section>`}),r.Blocks.add("hero2",{label:"Hero 2",category:"Hero",media:'<svg viewBox="0 0 266 150" fill="none"><path fill="#fff" d="M0 0h266v150H0z"></path><rect x="136" y="114" width="29" height="10" rx="2" fill="#cbd5e0"></rect><rect x="101" y="114" width="29" height="10" rx="2" fill="#6366f1"></rect><rect x="81" y="92" width="104" height="4" rx="2" fill="#a0aec0"></rect><rect x="97" y="81" width="72" height="5" rx="2.5" fill="#4a5568"></rect><rect x="85" y="100" width="97" height="4" rx="2" fill="#a0aec0"></rect><path d="M119.778 61h26.444A3.778 3.778 0 00150 57.222V30.778A3.778 3.778 0 00146.222 27h-26.444A3.778 3.778 0 00116 30.778v26.444A3.778 3.778 0 00119.778 61zm0 0l20.778-20.778L150 49.667m-20.778-12.278a2.833 2.833 0 11-5.666 0 2.833 2.833 0 015.666 0z" stroke="#a0aec0" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path></svg>',content:`<section class="text-gray-600 body-font">
      <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600">
        <div class="text-center lg:w-2/3 w-full">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Microdosing synth tattooed vexillologist</h1>
          <p class="mb-8 leading-relaxed">Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over meditation PBR&amp;B pickled ennui celiac mlkshk freegan photo booth af fingerstache pitchfork.</p>
          <div class="flex justify-center">
            <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
            <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
          </div>
        </div>
      </div>
    </section>`}),r.Blocks.add("hero3",{label:"Hero 3",category:"Hero",media:'<svg viewBox="0 0 266 150" fill="none"><path fill="#fff" d="M0 0h266v150H0z"></path><rect x="133" y="86" width="29" height="10" rx="2" fill="#6366f1"></rect><rect x="168" y="86" width="29" height="10" rx="2" fill="#cbd5e0"></rect><rect x="133" y="64" width="104" height="4" rx="2" fill="#a0aec0"></rect><rect x="133" y="53" width="72" height="5" rx="2.5" fill="#4a5568"></rect><rect x="133" y="72" width="97" height="4" rx="2" fill="#a0aec0"></rect><path d="M62.778 92h26.444A3.778 3.778 0 0093 88.222V61.778A3.778 3.778 0 0089.222 58H62.778A3.778 3.778 0 0059 61.778v26.444A3.778 3.778 0 0062.778 92zm0 0l20.778-20.778L93 80.667M72.222 68.389a2.833 2.833 0 11-5.666 0 2.833 2.833 0 015.666 0z" stroke="#a0aec0" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path></svg>',content:`<section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600">
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
        <br class="hidden lg:inline-block">readymade gluten
      </h1>
      <p class="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
        <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
      </div>
    </div>
  </div>
</section>`}),r.Blocks.add("hero4",{label:"Hero 4",category:"Hero",media:'<svg viewBox="0 0 266 150" fill="none"><path fill="#fff" d="M0 0h266v150H0z"></path><path d="M79 88a2 2 0 012-2h25a2 2 0 012 2v6a2 2 0 01-2 2H81a2 2 0 01-2-2v-6z" fill="#6366f1"></path><rect x="20" y="86" width="55" height="10" rx="2" fill="#cbd5e0"></rect><rect x="20" y="64" width="104" height="4" rx="2" fill="#a0aec0"></rect><rect x="20" y="53" width="72" height="5" rx="2.5" fill="#4a5568"></rect><rect x="20" y="72" width="97" height="4" rx="2" fill="#a0aec0"></rect><path d="M176.778 92h26.444A3.778 3.778 0 00207 88.222V61.778A3.778 3.778 0 00203.222 58h-26.444A3.778 3.778 0 00173 61.778v26.444A3.778 3.778 0 00176.778 92zm0 0l20.778-20.778L207 80.667m-20.778-12.278a2.833 2.833 0 11-5.666 0 2.833 2.833 0 015.666 0z" stroke="#a0aec0" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path></svg>',content:`<section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Knausgaard typewriter readymade marfa</h1>
      <p class="mb-8 leading-relaxed">Chillwave portland ugh, knausgaard fam polaroid iPhone. Man braid swag typewriter affogato, hella selvage wolf narwhal dreamcatcher.</p>
      <div class="flex w-full md:justify-start justify-center items-end">
        <div class="relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4">
          <label for="hero-field" class="leading-7 text-sm text-gray-600">Placeholder</label>
          <input type="text" id="hero-field" name="hero-field" class="w-full bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
        </div>
        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
      </div>
      <p class="text-sm mt-2 text-gray-500 mb-8 w-full">Neutra shabby chic ramps, viral fixie.</p>
      <div class="flex lg:flex-row md:flex-col">
        <button class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6" viewBox="0 0 512 512">
            <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
          </svg>
          <span class="ml-4 flex items-start flex-col leading-none">
            <span class="text-xs text-gray-600 mb-1">GET IT ON</span>
            <span class="title-font font-medium">Google Play</span>
          </span>
        </button>
        <button class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center lg:ml-4 md:ml-0 ml-4 md:mt-4 mt-0 lg:mt-0 hover:bg-gray-200 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6" viewBox="0 0 305 305">
            <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
            <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
          </svg>
          <span class="ml-4 flex items-start flex-col leading-none">
            <span class="text-xs text-gray-600 mb-1">Download on the</span>
            <span class="title-font font-medium">App Store</span>
          </span>
        </button>
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600">
    </div>
  </div>
</section>`}),r.Blocks.add("hero5",{label:"Hero 5",category:"Hero",media:'<svg viewBox="0 0 266 150" fill="none"><path fill="#fff" d="M0 0h266v150H0z"></path><path d="M192 88a2 2 0 012-2h25a2 2 0 012 2v6a2 2 0 01-2 2h-25a2 2 0 01-2-2v-6z" fill="#6366f1"></path><rect x="133" y="86" width="55" height="10" rx="2" fill="#cbd5e0"></rect><rect x="133" y="64" width="104" height="4" rx="2" fill="#a0aec0"></rect><rect x="133" y="53" width="72" height="5" rx="2.5" fill="#4a5568"></rect><rect x="133" y="72" width="97" height="4" rx="2" fill="#a0aec0"></rect><path d="M62.778 92h26.444A3.778 3.778 0 0093 88.222V61.778A3.778 3.778 0 0089.222 58H62.778A3.778 3.778 0 0059 61.778v26.444A3.778 3.778 0 0062.778 92zm0 0l20.778-20.778L93 80.667M72.222 68.389a2.833 2.833 0 11-5.666 0 2.833 2.833 0 015.666 0z" stroke="#a0aec0" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path></svg>',content:`<section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600">
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Knausgaard typewriter readymade marfa</h1>
      <p class="mb-8 leading-relaxed">Chillwave portland ugh, knausgaard fam polaroid iPhone. Man braid swag typewriter affogato, hella selvage wolf narwhal dreamcatcher.</p>
      <div class="flex w-full md:justify-start justify-center items-end">
        <div class="relative mr-4 lg:w-full xl:w-1/2 w-2/4">
          <label for="hero-field" class="leading-7 text-sm text-gray-600">Placeholder</label>
          <input type="text" id="hero-field" name="hero-field" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
        </div>
        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
      </div>
      <p class="text-sm mt-2 text-gray-500 mb-8 w-full">Neutra shabby chic ramps, viral fixie.</p>
      <div class="flex lg:flex-row md:flex-col">
        <button class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6" viewBox="0 0 512 512">
            <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
          </svg>
          <span class="ml-4 flex items-start flex-col leading-none">
            <span class="text-xs text-gray-600 mb-1">GET IT ON</span>
            <span class="title-font font-medium">Google Play</span>
          </span>
        </button>
        <button class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center lg:ml-4 md:ml-0 ml-4 md:mt-4 mt-0 lg:mt-0 hover:bg-gray-200 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6" viewBox="0 0 305 305">
            <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
            <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
          </svg>
          <span class="ml-4 flex items-start flex-col leading-none">
            <span class="text-xs text-gray-600 mb-1">Download on the</span>
            <span class="title-font font-medium">App Store</span>
          </span>
        </button>
      </div>
    </div>
  </div>
</section>`}),r.Blocks.add("hero6",{label:"Hero 6",category:"Hero",media:'<svg viewBox="0 0 266 150" fill="none"><path fill="#fff" d="M0 0h266v150H0z"></path><rect x="81" y="92" width="104" height="4" rx="2" fill="#a0aec0"></rect><rect x="97" y="81" width="72" height="5" rx="2.5" fill="#4a5568"></rect><path d="M148 116a2 2 0 012-2h25a2 2 0 012 2v6a2 2 0 01-2 2h-25a2 2 0 01-2-2v-6z" fill="#6366f1"></path><rect x="89" y="114" width="55" height="10" rx="2" fill="#cbd5e0"></rect><rect x="85" y="100" width="97" height="4" rx="2" fill="#a0aec0"></rect><path d="M119.778 61h26.444A3.778 3.778 0 00150 57.222V30.778A3.778 3.778 0 00146.222 27h-26.444A3.778 3.778 0 00116 30.778v26.444A3.778 3.778 0 00119.778 61zm0 0l20.778-20.778L150 49.667m-20.778-12.278a2.833 2.833 0 11-5.666 0 2.833 2.833 0 015.666 0z" stroke="#a0aec0" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path></svg>',content:`<section class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
    <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600">
    <div class="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Knausgaard typewriter readymade marfa</h1>
      <p class="mb-8 leading-relaxed">Kickstarter biodiesel roof party wayfarers cold-pressed. Palo santo live-edge tumeric scenester copper mug flexitarian. Prism vice offal plaid everyday carry. Gluten-free chia VHS squid listicle artisan.</p>
      <div class="flex w-full justify-center items-end">
        <div class="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
          <label for="hero-field" class="leading-7 text-sm text-gray-600">Placeholder</label>
          <input type="text" id="hero-field" name="hero-field" class="w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-indigo-200 focus:bg-transparent border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
        </div>
        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
      </div>
      <p class="text-sm mt-2 text-gray-500 mb-8 w-full">Neutra shabby chic ramps, viral fixie.</p>
      <div class="flex">
        <button class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6" viewBox="0 0 512 512">
            <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
          </svg>
          <span class="ml-4 flex items-start flex-col leading-none">
            <span class="text-xs text-gray-600 mb-1">GET IT ON</span>
            <span class="title-font font-medium">Google Play</span>
          </span>
        </button>
        <button class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center ml-4 hover:bg-gray-200 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6" viewBox="0 0 305 305">
            <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
            <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
          </svg>
          <span class="ml-4 flex items-start flex-col leading-none">
            <span class="text-xs text-gray-600 mb-1">Download on the</span>
            <span class="title-font font-medium">App Store</span>
          </span>
        </button>
      </div>
    </div>
  </div>
</section>`}),r.Blocks.add("pricing1",{label:"Pricing 1",category:"Pricing",media:'<svg viewBox="0 0 266 150" fill="none"><path fill="#fff" d="M0 0h266v150H0z"></path><rect x="96" y="22" width="74" height="5" rx="2.5" fill="#4a5568"></rect><rect x="87" y="31" width="92" height="4" rx="2" fill="#a0aec0"></rect><path d="M65.5 83a.5.5 0 010 1h-41a.5.5 0 010-1h41z" fill="#e2e8f0"></path><rect x="20.5" y="69.5" width="49" height="58" rx="1.5" stroke="#cbd5e0"></rect><circle cx="26" cy="89" r="2" fill="#a0aec0"></circle><rect x="24" y="77" width="18" height="2" rx="1" fill="#4a5568"></rect><rect x="30" y="88" width="34" height="2" rx="1" fill="#a0aec0"></rect><circle cx="26" cy="95" r="2" fill="#a0aec0"></circle><rect x="30" y="94" width="34" height="2" rx="1" fill="#a0aec0"></rect><circle cx="26" cy="101" r="2" fill="#a0aec0"></circle><rect x="30" y="100" width="34" height="2" rx="1" fill="#a0aec0"></rect><circle cx="26" cy="107" r="2" fill="#a0aec0"></circle><rect x="30" y="106" width="34" height="2" rx="1" fill="#a0aec0"></rect><rect x="24" y="73" width="10" height="2" rx="1" fill="#4a5568"></rect><path d="M24 116.5a2 2 0 012-2h38a2 2 0 012 2v4a2 2 0 01-2 2H26a2 2 0 01-2-2v-4z" fill="#a0aec0"></path><path d="M124.5 83a.5.5 0 010 1h-41a.5.5 0 010-1h41z" fill="#e2e8f0"></path><rect x="79.5" y="69.5" width="49" height="58" rx="1.5" stroke="#6366f1"></rect><circle cx="85" cy="89" r="2" fill="#a0aec0"></circle><rect x="83" y="77" width="18" height="2" rx="1" fill="#4a5568"></rect><rect x="89" y="88" width="34" height="2" rx="1" fill="#a0aec0"></rect><circle cx="85" cy="95" r="2" fill="#a0aec0"></circle><rect x="89" y="94" width="34" height="2" rx="1" fill="#a0aec0"></rect><circle cx="85" cy="101" r="2" fill="#a0aec0"></circle><rect x="89" y="100" width="34" height="2" rx="1" fill="#a0aec0"></rect><circle cx="85" cy="107" r="2" fill="#a0aec0"></circle><rect x="89" y="106" width="34" height="2" rx="1" fill="#a0aec0"></rect><rect x="83" y="73" width="10" height="2" rx="1" fill="#4a5568"></rect><path d="M183.5 83a.5.5 0 010 1h-41a.5.5 0 010-1h41z" fill="#e2e8f0"></path><rect x="138.5" y="69.5" width="49" height="58" rx="1.5" stroke="#cbd5e0"></rect><circle cx="144" cy="89" r="2" fill="#a0aec0"></circle><rect x="142" y="77" width="18" height="2" rx="1" fill="#4a5568"></rect><rect x="148" y="88" width="34" height="2" rx="1" fill="#a0aec0"></rect><circle cx="144" cy="95" r="2" fill="#a0aec0"></circle><rect x="148" y="94" width="34" height="2" rx="1" fill="#a0aec0"></rect><circle cx="144" cy="101" r="2" fill="#a0aec0"></circle><rect x="148" y="100" width="34" height="2" rx="1" fill="#a0aec0"></rect><circle cx="144" cy="107" r="2" fill="#a0aec0"></circle><rect x="148" y="106" width="34" height="2" rx="1" fill="#a0aec0"></rect><rect x="142" y="73" width="10" height="2" rx="1" fill="#4a5568"></rect><path d="M142 116.5a2 2 0 012-2h38a2 2 0 012 2v4a2 2 0 01-2 2h-38a2 2 0 01-2-2v-4z" fill="#a0aec0"></path><path d="M83 116.5a2 2 0 012-2h38a2 2 0 012 2v4a2 2 0 01-2 2H85a2 2 0 01-2-2v-4z" fill="#6366f1"></path><path d="M242.5 83a.5.5 0 010 1h-41a.5.5 0 010-1h41z" fill="#e2e8f0"></path><rect x="197.5" y="69.5" width="49" height="58" rx="1.5" stroke="#cbd5e0"></rect><circle cx="203" cy="89" r="2" fill="#a0aec0"></circle><rect x="201" y="77" width="18" height="2" rx="1" fill="#4a5568"></rect><rect x="207" y="88" width="34" height="2" rx="1" fill="#a0aec0"></rect><circle cx="203" cy="95" r="2" fill="#a0aec0"></circle><rect x="207" y="94" width="34" height="2" rx="1" fill="#a0aec0"></rect><circle cx="203" cy="101" r="2" fill="#a0aec0"></circle><rect x="207" y="100" width="34" height="2" rx="1" fill="#a0aec0"></rect><circle cx="203" cy="107" r="2" fill="#a0aec0"></circle><rect x="207" y="106" width="34" height="2" rx="1" fill="#a0aec0"></rect><rect x="201" y="73" width="10" height="2" rx="1" fill="#4a5568"></rect><path d="M201 116.5a2 2 0 012-2h38a2 2 0 012 2v4a2 2 0 01-2 2h-38a2 2 0 01-2-2v-4z" fill="#a0aec0"></path><path d="M118 43.5h30a1.5 1.5 0 011.5 1.5v4a1.5 1.5 0 01-1.5 1.5h-30a1.5 1.5 0 01-1.5-1.5v-4a1.5 1.5 0 011.5-1.5z" stroke="#6366f1"></path><path fill="#6366f1" d="M117 43h16v7h-16z"></path></svg>',content:`<section class="text-gray-600 body-font overflow-hidden">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Pricing</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical.</p>
      <div class="flex mx-auto border-2 border-indigo-500 rounded overflow-hidden mt-6">
        <button class="py-1 px-4 bg-indigo-500 text-white focus:outline-none">Monthly</button>
        <button class="py-1 px-4 focus:outline-none">Annually</button>
      </div>
    </div>
    <div class="flex flex-wrap -m-4">
      <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
        <div class="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
          <h2 class="text-sm tracking-widest title-font mb-1 font-medium">START</h2>
          <h1 class="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">Free</h1>
          <p class="flex items-center text-gray-600 mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Vexillologist pitchfork
          </p>
          <p class="flex items-center text-gray-600 mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Tumeric plaid portland
          </p>
          <p class="flex items-center text-gray-600 mb-6">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Mixtape chillwave tumeric
          </p>
          <button class="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">Button
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
          <p class="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
        </div>
      </div>
      <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
        <div class="h-full p-6 rounded-lg border-2 border-indigo-500 flex flex-col relative overflow-hidden">
          <span class="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">POPULAR</span>
          <h2 class="text-sm tracking-widest title-font mb-1 font-medium">PRO</h2>
          <h1 class="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
            <span>$38</span>
            <span class="text-lg ml-1 font-normal text-gray-500">/mo</span>
          </h1>
          <p class="flex items-center text-gray-600 mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Vexillologist pitchfork
          </p>
          <p class="flex items-center text-gray-600 mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Tumeric plaid portland
          </p>
          <p class="flex items-center text-gray-600 mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Hexagon neutra unicorn
          </p>
          <p class="flex items-center text-gray-600 mb-6">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Mixtape chillwave tumeric
          </p>
          <button class="flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded">Button
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
          <p class="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
        </div>
      </div>
      <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
        <div class="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
          <h2 class="text-sm tracking-widest title-font mb-1 font-medium">BUSINESS</h2>
          <h1 class="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
            <span>$56</span>
            <span class="text-lg ml-1 font-normal text-gray-500">/mo</span>
          </h1>
          <p class="flex items-center text-gray-600 mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Vexillologist pitchfork
          </p>
          <p class="flex items-center text-gray-600 mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Tumeric plaid portland
          </p>
          <p class="flex items-center text-gray-600 mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Hexagon neutra unicorn
          </p>
          <p class="flex items-center text-gray-600 mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Vexillologist pitchfork
          </p>
          <p class="flex items-center text-gray-600 mb-6">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Mixtape chillwave tumeric
          </p>
          <button class="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">Button
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
          <p class="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
        </div>
      </div>
      <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
        <div class="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
          <h2 class="text-sm tracking-widest title-font mb-1 font-medium">SPECIAL</h2>
          <h1 class="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
            <span>$72</span>
            <span class="text-lg ml-1 font-normal text-gray-500">/mo</span>
          </h1>
          <p class="flex items-center text-gray-600 mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Vexillologist pitchfork
          </p>
          <p class="flex items-center text-gray-600 mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Tumeric plaid portland
          </p>
          <p class="flex items-center text-gray-600 mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Hexagon neutra unicorn
          </p>
          <p class="flex items-center text-gray-600 mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Vexillologist pitchfork
          </p>
          <p class="flex items-center text-gray-600 mb-6">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Mixtape chillwave tumeric
          </p>
          <button class="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">Button
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
          <p class="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
        </div>
      </div>
    </div>
  </div>
</section>`}),r.Blocks.add("pricing2",{label:"Pricing 2",category:"Pricing",media:'<svg viewBox="0 0 266 150" fill="none"><path fill="#fff" d="M0 0h266v150H0z"></path><rect x="110" y="20" width="46" height="5" rx="2.5" fill="#4a5568"></rect><rect x="87" y="29" width="92" height="4" rx="2" fill="#a0aec0"></rect><rect x="106" y="37" width="55" height="4" rx="2" fill="#a0aec0"></rect><rect x="50" y="57" width="167" height="11" rx="1" fill="#e2e8f0"></rect><rect x="55" y="61" width="39" height="3" rx="1.5" fill="#4a5568"></rect><rect x="55" y="121" width="19" height="3" rx="1.5" fill="#6366f1"></rect><rect x="108" y="61" width="24" height="3" rx="1.5" fill="#4a5568"></rect><rect x="145" y="61" width="30" height="3" rx="1.5" fill="#4a5568"></rect><rect x="188" y="61" width="20" height="3" rx="1.5" fill="#4a5568"></rect><rect x="55" y="74" width="26" height="2" rx="1" fill="#a0aec0"></rect><rect x="108" y="74" width="12" height="2" rx="1" fill="#a0aec0"></rect><path d="M216.5 82a.5.5 0 010 1h-166a.5.5 0 010-1h166z" fill="#e2e8f0"></path><rect x="145" y="74" width="13" height="2" rx="1" fill="#a0aec0"></rect><rect x="188" y="74" width="20" height="2" rx="1" fill="#a0aec0"></rect><rect x="55" y="89" width="39" height="2" rx="1" fill="#a0aec0"></rect><rect x="108" y="89" width="17" height="2" rx="1" fill="#a0aec0"></rect><path d="M216.5 97a.5.5 0 010 1h-166a.5.5 0 010-1h166z" fill="#e2e8f0"></path><rect x="145" y="89" width="18" height="2" rx="1" fill="#a0aec0"></rect><rect x="188" y="89" width="13" height="2" rx="1" fill="#a0aec0"></rect><rect x="55" y="104" width="33" height="2" rx="1" fill="#a0aec0"></rect><rect x="108" y="104" width="14" height="2" rx="1" fill="#a0aec0"></rect><path d="M216.5 112a.5.5 0 010 1h-166a.5.5 0 010-1h166z" fill="#e2e8f0"></path><rect x="182" y="119" width="31" height="10" rx="2" fill="#6366f1"></rect><rect x="145" y="104" width="18" height="2" rx="1" fill="#a0aec0"></rect><rect x="188" y="104" width="20" height="2" rx="1" fill="#a0aec0"></rect></svg>',content:`<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Pricing</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Banh mi cornhole echo park skateboard authentic crucifix neutra tilde lyft biodiesel artisan direct trade mumblecore 3 wolf moon twee</p>
    </div>
    <div class="lg:w-2/3 w-full mx-auto overflow-auto">
      <table class="table-auto w-full text-left whitespace-no-wrap">
        <thead>
          <tr>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Plan</th>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Speed</th>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Storage</th>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Price</th>
            <th class="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="px-4 py-3">Start</td>
            <td class="px-4 py-3">5 Mb/s</td>
            <td class="px-4 py-3">15 GB</td>
            <td class="px-4 py-3 text-lg text-gray-900">Free</td>
            <td class="w-10 text-center">
              <input name="plan" type="radio">
            </td>
          </tr>
          <tr>
            <td class="border-t-2 border-gray-200 px-4 py-3">Pro</td>
            <td class="border-t-2 border-gray-200 px-4 py-3">25 Mb/s</td>
            <td class="border-t-2 border-gray-200 px-4 py-3">25 GB</td>
            <td class="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">$24</td>
            <td class="border-t-2 border-gray-200 w-10 text-center">
              <input name="plan" type="radio">
            </td>
          </tr>
          <tr>
            <td class="border-t-2 border-gray-200 px-4 py-3">Business</td>
            <td class="border-t-2 border-gray-200 px-4 py-3">36 Mb/s</td>
            <td class="border-t-2 border-gray-200 px-4 py-3">40 GB</td>
            <td class="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">$50</td>
            <td class="border-t-2 border-gray-200 w-10 text-center">
              <input name="plan" type="radio">
            </td>
          </tr>
          <tr>
            <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">Exclusive</td>
            <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">48 Mb/s</td>
            <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">120 GB</td>
            <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900">$72</td>
            <td class="border-t-2 border-b-2 border-gray-200 w-10 text-center">
              <input name="plan" type="radio">
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
      <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </a>
      <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
    </div>
  </div>
</section>`}),r.Blocks.add("statistic1",{label:"Statistic 1",category:"Statistic",media:'<svg viewBox="0 0 266 150" fill="none"><path fill="#fff" d="M0 0h266v150H0z"></path><rect x="45" y="66" width="26" height="10" rx="5" fill="#4a5568"></rect><rect x="43" y="80" width="30" height="4" rx="2" fill="#a0aec0"></rect><rect x="95" y="66" width="26" height="10" rx="5" fill="#4a5568"></rect><rect x="93" y="80" width="30" height="4" rx="2" fill="#a0aec0"></rect><rect x="145" y="66" width="26" height="10" rx="5" fill="#4a5568"></rect><rect x="143" y="80" width="30" height="4" rx="2" fill="#a0aec0"></rect><rect x="195" y="66" width="26" height="10" rx="5" fill="#4a5568"></rect><rect x="193" y="80" width="30" height="4" rx="2" fill="#a0aec0"></rect></svg>',content:`<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4 text-center">
      <div class="p-4 sm:w-1/4 w-1/2">
        <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">2.7K</h2>
        <p class="leading-relaxed">Users</p>
      </div>
      <div class="p-4 sm:w-1/4 w-1/2">
        <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">1.8K</h2>
        <p class="leading-relaxed">Subscribes</p>
      </div>
      <div class="p-4 sm:w-1/4 w-1/2">
        <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">35</h2>
        <p class="leading-relaxed">Downloads</p>
      </div>
      <div class="p-4 sm:w-1/4 w-1/2">
        <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">4</h2>
        <p class="leading-relaxed">Products</p>
      </div>
    </div>
  </div>
</section>`}),r.Blocks.add("statistic2",{label:"Statistic 2",category:"Statistic",media:'<svg viewBox="0 0 266 150" fill="none"><path fill="#fff" d="M0 0h266v150H0z"></path><path d="M175.792 92h26.544a3.785 3.785 0 003.792-3.778V61.778A3.785 3.785 0 00202.336 58h-26.544A3.785 3.785 0 00172 61.778v26.444A3.785 3.785 0 00175.792 92zm0 0l20.856-20.778 9.48 9.445m-20.856-12.278a2.838 2.838 0 01-2.844 2.833 2.838 2.838 0 01-2.844-2.833 2.838 2.838 0 012.844-2.833 2.838 2.838 0 012.844 2.833z" stroke="#a0aec0" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><rect x="20" y="46" width="70" height="5" rx="2.5" fill="#4a5568"></rect><rect x="20" y="57" width="98" height="4" rx="2" fill="#a0aec0"></rect><rect x="20" y="65" width="87" height="4" rx="2" fill="#a0aec0"></rect><rect x="20" y="88" width="17" height="7" rx="3.5" fill="#4a5568"></rect><rect x="20" y="99" width="20" height="4" rx="2" fill="#a0aec0"></rect><rect x="46" y="88" width="17" height="7" rx="3.5" fill="#4a5568"></rect><rect x="46" y="99" width="20" height="4" rx="2" fill="#a0aec0"></rect><rect x="72" y="88" width="17" height="7" rx="3.5" fill="#4a5568"></rect><rect x="72" y="99" width="20" height="4" rx="2" fill="#a0aec0"></rect><rect x="98" y="88" width="17" height="7" rx="3.5" fill="#4a5568"></rect><rect x="98" y="99" width="20" height="4" rx="2" fill="#a0aec0"></rect></svg>',content:`<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-wrap">
    <div class="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
      <div class="w-full sm:p-4 px-4 mb-6">
        <h1 class="title-font font-medium text-xl mb-2 text-gray-900">Moon hashtag pop-up try-hard offal truffaut</h1>
        <div class="leading-relaxed">Pour-over craft beer pug drinking vinegar live-edge gastropub, keytar neutra sustainable fingerstache kickstarter.</div>
      </div>
      <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 class="title-font font-medium text-3xl text-gray-900">2.7K</h2>
        <p class="leading-relaxed">Users</p>
      </div>
      <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 class="title-font font-medium text-3xl text-gray-900">1.8K</h2>
        <p class="leading-relaxed">Subscribes</p>
      </div>
      <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 class="title-font font-medium text-3xl text-gray-900">35</h2>
        <p class="leading-relaxed">Downloads</p>
      </div>
      <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 class="title-font font-medium text-3xl text-gray-900">4</h2>
        <p class="leading-relaxed">Products</p>
      </div>
    </div>
    <div class="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
      <img class="object-cover object-center w-full h-full" src="https://dummyimage.com/600x300" alt="stats">
    </div>
  </div>
</section>`}),r.Blocks.add("statistic3",{label:"Statistic 3",category:"Statistic",media:'<svg viewBox="0 0 266 150" fill="none"><path fill="#fff" d="M0 0h266v150H0z"></path><path d="M21 64.5h48a.5.5 0 01.5.5v33a.5.5 0 01-.5.5H21a.5.5 0 01-.5-.5V65a.5.5 0 01.5-.5z" stroke="#cbd5e0"></path><path d="M50 75a5 5 0 11-10 0 5 5 0 0110 0z" fill="#6366f1"></path><path d="M39 92a1 1 0 011-1h10a1 1 0 110 2H40a1 1 0 01-1-1z" fill="#a0aec0"></path><rect x="35" y="84" width="20" height="4" rx="2" fill="#4a5568"></rect><path d="M80 64.5h48a.5.5 0 01.5.5v33a.5.5 0 01-.5.5H80a.5.5 0 01-.5-.5V65a.5.5 0 01.5-.5z" stroke="#cbd5e0"></path><path d="M109 75a5 5 0 11-10 0 5 5 0 0110 0z" fill="#6366f1"></path><path d="M98 92a1 1 0 011-1h10a1 1 0 010 2H99a1 1 0 01-1-1z" fill="#a0aec0"></path><rect x="94" y="84" width="20" height="4" rx="2" fill="#4a5568"></rect><path d="M139 64.5h48a.5.5 0 01.5.5v33a.5.5 0 01-.5.5h-48a.5.5 0 01-.5-.5V65a.5.5 0 01.5-.5z" stroke="#cbd5e0"></path><path d="M168 75a5 5 0 11-10 0 5 5 0 0110 0z" fill="#6366f1"></path><path d="M157 92a1 1 0 011-1h10a1 1 0 010 2h-10a1 1 0 01-1-1z" fill="#a0aec0"></path><rect x="153" y="84" width="20" height="4" rx="2" fill="#4a5568"></rect><path d="M198 64.5h48a.5.5 0 01.5.5v33a.5.5 0 01-.5.5h-48a.5.5 0 01-.5-.5V65a.5.5 0 01.5-.5z" stroke="#cbd5e0"></path><path d="M227 75a5 5 0 11-10 0 5 5 0 0110 0z" fill="#6366f1"></path><path d="M216 92a1 1 0 011-1h10a1 1 0 010 2h-10a1 1 0 01-1-1z" fill="#a0aec0"></path><rect x="212" y="84" width="20" height="4" rx="2" fill="#4a5568"></rect><rect x="81" y="36" width="104.391" height="4" rx="2" fill="#a0aec0"></rect><rect x="81" y="36" width="104.391" height="4" rx="2" fill="#a0aec0"></rect><rect x="96" y="25" width="74" height="5" rx="2.5" fill="#4a5568"></rect><rect x="97" y="44" width="73" height="4" rx="2" fill="#a0aec0"></rect><rect x="113" y="115" width="40" height="10" rx="2" fill="#6366f1"></rect></svg>',content:`<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Master Cleanse Reliac Heirloom</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
    </div>
    <div class="flex flex-wrap -m-4 text-center">
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M8 17l4 4 4-4m-4-5v9"></path>
            <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
          </svg>
          <h2 class="title-font font-medium text-3xl text-gray-900">2.7K</h2>
          <p class="leading-relaxed">Downloads</p>
        </div>
      </div>
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
          </svg>
          <h2 class="title-font font-medium text-3xl text-gray-900">1.3K</h2>
          <p class="leading-relaxed">Users</p>
        </div>
      </div>
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M3 18v-6a9 9 0 0118 0v6"></path>
            <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
          </svg>
          <h2 class="title-font font-medium text-3xl text-gray-900">74</h2>
          <p class="leading-relaxed">Files</p>
        </div>
      </div>
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
          <h2 class="title-font font-medium text-3xl text-gray-900">46</h2>
          <p class="leading-relaxed">Places</p>
        </div>
      </div>
    </div>
  </div>
</section>`}),r.Blocks.add("step1",{label:"Step 1",category:"Step",media:'<svg viewBox="0 0 266 150" fill="none"><path fill="#fff" d="M0 0h266v150H0z"></path><path d="M24 28.5a.5.5 0 011 0v94a.5.5 0 01-1 0v-94z" fill="#cbd5e0"></path><path d="M29 30.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" fill="#6366f1"></path><path d="M34 35a1 1 0 011-1h54a1 1 0 110 2H35a1 1 0 01-1-1z" fill="#a0aec0"></path><rect x="34" y="28" width="35" height="3" rx="1.5" fill="#4a5568"></rect><path d="M29 52.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" fill="#6366f1"></path><path d="M34 57a1 1 0 011-1h54a1 1 0 110 2H35a1 1 0 01-1-1z" fill="#a0aec0"></path><rect x="34" y="50" width="35" height="3" rx="1.5" fill="#4a5568"></rect><path d="M29 74.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" fill="#6366f1"></path><path d="M34 79a1 1 0 011-1h54a1 1 0 110 2H35a1 1 0 01-1-1z" fill="#a0aec0"></path><rect x="34" y="72" width="35" height="3" rx="1.5" fill="#4a5568"></rect><path d="M29 96.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" fill="#6366f1"></path><path d="M34 101a1 1 0 011-1h54a1 1 0 010 2H35a1 1 0 01-1-1z" fill="#a0aec0"></path><rect x="34" y="94" width="35" height="3" rx="1.5" fill="#4a5568"></rect><path d="M29 118.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" fill="#6366f1"></path><path d="M34 123a1 1 0 011-1h54a1 1 0 010 2H35a1 1 0 01-1-1z" fill="#a0aec0"></path><rect x="34" y="116" width="35" height="3" rx="1.5" fill="#4a5568"></rect><path d="M175.792 89h26.544a3.785 3.785 0 003.792-3.778V58.778A3.785 3.785 0 00202.336 55h-26.544A3.785 3.785 0 00172 58.778v26.444A3.785 3.785 0 00175.792 89zm0 0l20.856-20.778 9.48 9.445m-20.856-12.278a2.838 2.838 0 01-2.844 2.833 2.838 2.838 0 01-2.844-2.833 2.838 2.838 0 012.844-2.833 2.838 2.838 0 012.844 2.833z" stroke="#a0aec0" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path></svg>',content:`<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-wrap">
    <div class="flex flex-wrap w-full">
      <div class="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
        <div class="flex relative pb-12">
          <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>
          <div class="flex-grow pl-4">
            <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 1</h2>
            <p class="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
          </div>
        </div>
        <div class="flex relative pb-12">
          <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <div class="flex-grow pl-4">
            <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 2</h2>
            <p class="leading-relaxed">Vice migas literally kitsch +1 pok pok. Truffaut hot chicken slow-carb health goth, vape typewriter.</p>
          </div>
        </div>
        <div class="flex relative pb-12">
          <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <circle cx="12" cy="5" r="3"></circle>
              <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
            </svg>
          </div>
          <div class="flex-grow pl-4">
            <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 3</h2>
            <p class="leading-relaxed">Coloring book nar whal glossier master cleanse umami. Salvia +1 master cleanse blog taiyaki.</p>
          </div>
        </div>
        <div class="flex relative pb-12">
          <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div class="flex-grow pl-4">
            <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 4</h2>
            <p class="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
          </div>
        </div>
        <div class="flex relative">
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
          </div>
          <div class="flex-grow pl-4">
            <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">FINISH</h2>
            <p class="leading-relaxed">Pitchfork ugh tattooed scenester echo park gastropub whatever cold-pressed retro.</p>
          </div>
        </div>
      </div>
      <img class="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12" src="https://dummyimage.com/1200x500" alt="step">
    </div>
  </div>
</section>`}),r.Blocks.add("step2",{label:"Step 2",category:"Step",media:'<svg viewBox="0 0 266 150" fill="none"><path fill="#fff" d="M0 0h266v150H0z"></path><path d="M78 41v-1h110v1H78z" fill="#cbd5e0"></path><path stroke="#6366f1" d="M78 40.5h28"></path><path d="M78 31a2 2 0 012-2h24a2 2 0 012 2v9H78v-9z" fill="#ebf4ff"></path><path d="M82 35a1 1 0 011-1h18a1 1 0 010 2H83a1 1 0 01-1-1z" fill="#6366f1"></path><path d="M112 35a1 1 0 011-1h18a1 1 0 010 2h-18a1 1 0 01-1-1zM138 35a1 1 0 011-1h18a1 1 0 010 2h-18a1 1 0 01-1-1zM164 35a1 1 0 011-1h18a1 1 0 010 2h-18a1 1 0 01-1-1z" fill="#4a5568"></path><path d="M122.889 87h20.222A2.889 2.889 0 00146 84.111V63.89a2.889 2.889 0 00-2.889-2.89h-20.222A2.889 2.889 0 00120 63.889V84.11a2.889 2.889 0 002.889 2.89zm0 0l15.889-15.889L146 78.333m-15.889-9.389a2.167 2.167 0 11-4.333 0 2.167 2.167 0 014.333 0z" stroke="#a0aec0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M85 111.5a1.5 1.5 0 011.5-1.5h93a1.5 1.5 0 010 3h-93a1.5 1.5 0 01-1.5-1.5zM80 118.5a1.5 1.5 0 011.5-1.5h104a1.5 1.5 0 010 3h-104a1.5 1.5 0 01-1.5-1.5z" fill="#a0aec0"></path><rect x="100" y="101" width="67" height="4" rx="2" fill="#4a5568"></rect></svg>',content:`<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-wrap flex-col">
    <div class="flex mx-auto flex-wrap mb-20">
      <a class="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium bg-gray-100 inline-flex items-center leading-none border-indigo-500 text-indigo-500 tracking-wider rounded-t">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5 mr-3" viewBox="0 0 24 24">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>STEP 1
      </a>
      <a class="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5 mr-3" viewBox="0 0 24 24">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>STEP 2
      </a>
      <a class="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5 mr-3" viewBox="0 0 24 24">
          <circle cx="12" cy="5" r="3"></circle>
          <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
        </svg>STEP 3
      </a>
      <a class="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5 mr-3" viewBox="0 0 24 24">
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>STEP 4
      </a>
    </div>
    <img class="xl:w-1/4 lg:w-1/3 md:w-1/2 w-2/3 block mx-auto mb-10 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600">
    <div class="flex flex-col text-center w-full">
      <h1 class="text-xl font-medium title-font mb-4 text-gray-900">Master Cleanse Reliac Heirloom</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
    </div>
  </div>
</section>`}),r.Blocks.add("step3",{label:"Step 3",category:"Step",media:'<svg viewBox="0 0 266 150" fill="none"><path fill="#fff" d="M0 0h266v150H0z"></path><path d="M24 28.5a.5.5 0 011 0v93a.5.5 0 01-1 0v-93z" fill="#cbd5e0"></path><path d="M26 40.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" fill="#6366f1"></path><path d="M47 43a1 1 0 011-1h54a1 1 0 010 2H48a1 1 0 01-1-1z" fill="#a0aec0"></path><rect x="47" y="36" width="35" height="3" rx="1.5" fill="#4a5568"></rect><circle cx="36.5" cy="40.5" r="6.5" fill="#c3dafe"></circle><path d="M26 63.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" fill="#6366f1"></path><path d="M47 66a1 1 0 011-1h54a1 1 0 010 2H48a1 1 0 01-1-1z" fill="#a0aec0"></path><rect x="47" y="59" width="35" height="3" rx="1.5" fill="#4a5568"></rect><circle cx="36.5" cy="63.5" r="6.5" fill="#c3dafe"></circle><path d="M26 86.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" fill="#6366f1"></path><path d="M47 89a1 1 0 011-1h54a1 1 0 010 2H48a1 1 0 01-1-1z" fill="#a0aec0"></path><rect x="47" y="82" width="35" height="3" rx="1.5" fill="#4a5568"></rect><circle cx="36.5" cy="86.5" r="6.5" fill="#c3dafe"></circle><path d="M26 109.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" fill="#6366f1"></path><path d="M47 112a1 1 0 011-1h54a1 1 0 010 2H48a1 1 0 01-1-1z" fill="#a0aec0"></path><rect x="47" y="105" width="35" height="3" rx="1.5" fill="#4a5568"></rect><circle cx="36.5" cy="109.5" r="6.5" fill="#c3dafe"></circle><path d="M175.792 89h26.544a3.785 3.785 0 003.792-3.778V58.778A3.785 3.785 0 00202.336 55h-26.544A3.785 3.785 0 00172 58.778v26.444A3.785 3.785 0 00175.792 89zm0 0l20.856-20.778 9.48 9.445m-20.856-12.278a2.838 2.838 0 01-2.844 2.833 2.838 2.838 0 01-2.844-2.833 2.838 2.838 0 012.844-2.833 2.838 2.838 0 012.844 2.833z" stroke="#a0aec0" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path></svg>',content:`<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-wrap">
    <div class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
      <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">1</div>
      <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
        </div>
        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">Shooting Stars</h2>
          <p class="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
        </div>
      </div>
    </div>
    <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
      <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">2</div>
      <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
        </div>
        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">The Catalyzer</h2>
          <p class="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
        </div>
      </div>
    </div>
    <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
      <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">3</div>
      <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
            <circle cx="12" cy="5" r="3"></circle>
            <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
          </svg>
        </div>
        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">The 400 Blows</h2>
          <p class="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
        </div>
      </div>
    </div>
    <div class="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
      <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">4</div>
      <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">Neptune</h2>
          <p class="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
        </div>
      </div>
    </div>
  </div>
</section>`}),r.Blocks.add("team1",{label:"Team 1",category:"Team",media:'<svg fill="none" viewBox="0 0 266 150"><path fill="#fff" d="M0 0h266v150H0z"></path><rect x="110" y="20" width="46" height="5" rx="2.5" fill="#4a5568"></rect><rect x="87" y="29" width="92" height="4" rx="2" fill="#a0aec0"></rect><rect x="44" y="52" width="39" height="3" rx="1.5" fill="#4a5568"></rect><rect x="44" y="58" width="20" height="3" rx="1.5" fill="#a0aec0"></rect><circle cx="31.5" cy="56.5" r="7.5" fill="#e2e8f0"></circle><rect x="20.5" y="45.5" width="69" height="22" rx="1.5" stroke="#cbd5e0"></rect><rect x="122" y="52" width="39" height="3" rx="1.5" fill="#4a5568"></rect><rect x="122" y="58" width="20" height="3" rx="1.5" fill="#a0aec0"></rect><circle cx="109.5" cy="56.5" r="7.5" fill="#e2e8f0"></circle><rect x="98.5" y="45.5" width="69" height="22" rx="1.5" stroke="#cbd5e0"></rect><rect x="200" y="52" width="39" height="3" rx="1.5" fill="#4a5568"></rect><rect x="200" y="58" width="20" height="3" rx="1.5" fill="#a0aec0"></rect><circle cx="187.5" cy="56.5" r="7.5" fill="#e2e8f0"></circle><rect x="176.5" y="45.5" width="69" height="22" rx="1.5" stroke="#cbd5e0"></rect><rect x="44" y="83" width="39" height="3" rx="1.5" fill="#4a5568"></rect><rect x="44" y="89" width="20" height="3" rx="1.5" fill="#a0aec0"></rect><circle cx="31.5" cy="87.5" r="7.5" fill="#e2e8f0"></circle><rect x="20.5" y="76.5" width="69" height="22" rx="1.5" stroke="#cbd5e0"></rect><rect x="122" y="83" width="39" height="3" rx="1.5" fill="#4a5568"></rect><rect x="122" y="89" width="20" height="3" rx="1.5" fill="#a0aec0"></rect><circle cx="109.5" cy="87.5" r="7.5" fill="#e2e8f0"></circle><rect x="98.5" y="76.5" width="69" height="22" rx="1.5" stroke="#cbd5e0"></rect><rect x="200" y="83" width="39" height="3" rx="1.5" fill="#4a5568"></rect><rect x="200" y="89" width="20" height="3" rx="1.5" fill="#a0aec0"></rect><circle cx="187.5" cy="87.5" r="7.5" fill="#e2e8f0"></circle><rect x="176.5" y="76.5" width="69" height="22" rx="1.5" stroke="#cbd5e0"></rect><rect x="44" y="114" width="39" height="3" rx="1.5" fill="#4a5568"></rect><rect x="44" y="120" width="20" height="3" rx="1.5" fill="#a0aec0"></rect><circle cx="31.5" cy="118.5" r="7.5" fill="#e2e8f0"></circle><rect x="20.5" y="107.5" width="69" height="22" rx="1.5" stroke="#cbd5e0"></rect><rect x="122" y="114" width="39" height="3" rx="1.5" fill="#4a5568"></rect><rect x="122" y="120" width="20" height="3" rx="1.5" fill="#a0aec0"></rect><circle cx="109.5" cy="118.5" r="7.5" fill="#e2e8f0"></circle><rect x="98.5" y="107.5" width="69" height="22" rx="1.5" stroke="#cbd5e0"></rect><rect x="200" y="114" width="39" height="3" rx="1.5" fill="#4a5568"></rect><rect x="200" y="120" width="20" height="3" rx="1.5" fill="#a0aec0"></rect><circle cx="187.5" cy="118.5" r="7.5" fill="#e2e8f0"></circle><rect x="176.5" y="107.5" width="69" height="22" rx="1.5" stroke="#cbd5e0"></rect></svg>',content:`<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our Team</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
    </div>
    <div class="flex flex-wrap -m-2">
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80">
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">Holden Caulfield</h2>
            <p class="text-gray-500">UI Designer</p>
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/84x84">
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">Henry Letham</h2>
            <p class="text-gray-500">CTO</p>
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/88x88">
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">Oskar Blinde</h2>
            <p class="text-gray-500">Founder</p>
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/90x90">
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">John Doe</h2>
            <p class="text-gray-500">DevOps</p>
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/94x94">
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">Martin Eden</h2>
            <p class="text-gray-500">Software Engineer</p>
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98">
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">Boris Kitua</h2>
            <p class="text-gray-500">UX Researcher</p>
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/100x90">
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">Atticus Finch</h2>
            <p class="text-gray-500">QA Engineer</p>
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/104x94">
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">Alper Kamu</h2>
            <p class="text-gray-500">System</p>
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/108x98">
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">Rodrigo Monchi</h2>
            <p class="text-gray-500">Product Manager</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`}),r.Blocks.add("team2",{label:"Team 2",category:"Team",media:'<svg fill="none" viewBox="0 0 266 150"><path fill="#fff" d="M0 0h266v150H0z"></path><rect x="110" y="28" width="46" height="5" rx="2.5" fill="#4a5568"></rect><rect x="87" y="37" width="92" height="4" rx="2" fill="#a0aec0"></rect><path d="M36.111 83H50.89A2.111 2.111 0 0053 80.889V66.11A2.111 2.111 0 0050.889 64H36.11A2.111 2.111 0 0034 66.111V80.89a2.11 2.11 0 002.111 2.111zm0 0l11.611-11.611L53 76.667m-11.611-6.861a1.583 1.583 0 11-3.167 0 1.583 1.583 0 013.167 0z" stroke="#a0aec0" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"></path><rect x="66" y="65" width="39" height="3" rx="1.5" fill="#4a5568"></rect><path d="M66 73.5a1.5 1.5 0 011.5-1.5h48a1.5 1.5 0 010 3h-48a1.5 1.5 0 01-1.5-1.5zm0 7a1.5 1.5 0 011.5-1.5h53a1.5 1.5 0 010 3h-53a1.5 1.5 0 01-1.5-1.5z" fill="#a0aec0"></path><path d="M147.111 83h14.778A2.111 2.111 0 00164 80.889V66.11a2.111 2.111 0 00-2.111-2.11h-14.778A2.111 2.111 0 00145 66.111V80.89a2.11 2.11 0 002.111 2.111zm0 0l11.611-11.611L164 76.667m-11.611-6.861a1.583 1.583 0 11-3.167 0 1.583 1.583 0 013.167 0z" stroke="#a0aec0" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"></path><rect x="177" y="65" width="39" height="3" rx="1.5" fill="#4a5568"></rect><path d="M177 73.5a1.5 1.5 0 011.5-1.5h48a1.5 1.5 0 010 3h-48a1.5 1.5 0 01-1.5-1.5zm0 7a1.5 1.5 0 011.5-1.5h53a1.5 1.5 0 010 3h-53a1.5 1.5 0 01-1.5-1.5z" fill="#a0aec0"></path><path d="M36.111 121H50.89a2.111 2.111 0 002.11-2.111v-14.778A2.111 2.111 0 0050.889 102H36.11a2.111 2.111 0 00-2.11 2.111v14.778A2.11 2.11 0 0036.111 121zm0 0l11.611-11.611L53 114.667m-11.611-6.861a1.583 1.583 0 11-3.167 0 1.583 1.583 0 013.167 0z" stroke="#a0aec0" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"></path><rect x="66" y="103" width="39" height="3" rx="1.5" fill="#4a5568"></rect><path d="M66 111.5a1.5 1.5 0 011.5-1.5h48a1.5 1.5 0 010 3h-48a1.5 1.5 0 01-1.5-1.5zm0 7a1.5 1.5 0 011.5-1.5h53a1.5 1.5 0 010 3h-53a1.5 1.5 0 01-1.5-1.5z" fill="#a0aec0"></path><path d="M147.111 121h14.778a2.11 2.11 0 002.111-2.111v-14.778a2.11 2.11 0 00-2.111-2.111h-14.778a2.11 2.11 0 00-2.111 2.111v14.778a2.11 2.11 0 002.111 2.111zm0 0l11.611-11.611 5.278 5.278m-11.611-6.861a1.583 1.583 0 11-3.167 0 1.583 1.583 0 013.167 0z" stroke="#a0aec0" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"></path><rect x="177" y="103" width="39" height="3" rx="1.5" fill="#4a5568"></rect><path d="M177 111.5a1.5 1.5 0 011.5-1.5h48a1.5 1.5 0 010 3h-48a1.5 1.5 0 01-1.5-1.5zm0 7a1.5 1.5 0 011.5-1.5h53a1.5 1.5 0 010 3h-53a1.5 1.5 0 01-1.5-1.5z" fill="#a0aec0"></path></svg>',content:`<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">OUR TEAM</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
    </div>
    <div class="flex flex-wrap -m-4">
      <div class="p-4 lg:w-1/2">
        <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/200x200">
          <div class="flex-grow sm:pl-8">
            <h2 class="title-font font-medium text-lg text-gray-900">Holden Caulfield</h2>
            <h3 class="text-gray-500 mb-3">UI Developer</h3>
            <p class="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
            <span class="inline-flex">
              <a class="text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a class="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a class="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/2">
        <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/201x201">
          <div class="flex-grow sm:pl-8">
            <h2 class="title-font font-medium text-lg text-gray-900">Alper Kamu</h2>
            <h3 class="text-gray-500 mb-3">Designer</h3>
            <p class="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
            <span class="inline-flex">
              <a class="text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a class="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a class="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/2">
        <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/204x204">
          <div class="flex-grow sm:pl-8">
            <h2 class="title-font font-medium text-lg text-gray-900">Atticus Finch</h2>
            <h3 class="text-gray-500 mb-3">UI Developer</h3>
            <p class="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
            <span class="inline-flex">
              <a class="text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a class="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a class="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/2">
        <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/206x206">
          <div class="flex-grow sm:pl-8">
            <h2 class="title-font font-medium text-lg text-gray-900">Henry Letham</h2>
            <h3 class="text-gray-500 mb-3">Designer</h3>
            <p class="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
            <span class="inline-flex">
              <a class="text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a class="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a class="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`}),r.Blocks.add("team3",{label:"Team 3",category:"Team",media:'<svg fill="none" viewBox="0 0 266 150"><path fill="#fff" d="M0 0h266v150H0z"></path><rect x="110" y="20" width="46" height="5" rx="2.5" fill="#4a5568"></rect><rect x="87" y="29" width="92" height="4" rx="2" fill="#a0aec0"></rect><path d="M39.444 66h10.112c.797 0 1.444-.647 1.444-1.444V54.444c0-.797-.647-1.444-1.444-1.444H39.444c-.797 0-1.444.647-1.444 1.444v10.112c0 .797.647 1.444 1.444 1.444zm0 0l7.945-7.944L51 61.666m-7.944-4.694a1.083 1.083 0 11-2.167 0 1.083 1.083 0 012.167 0z" stroke="#a0aec0" stroke-linecap="round" stroke-linejoin="round"></path><rect x="24" y="78" width="41" height="2" rx="1" fill="#a0aec0"></rect><rect x="29" y="82" width="32" height="2" rx="1" fill="#a0aec0"></rect><rect x="36" y="74" width="17" height="2" rx="1" fill="#4a5568"></rect><path d="M98.444 66h10.112c.797 0 1.444-.647 1.444-1.444V54.444c0-.797-.647-1.444-1.444-1.444H98.444c-.797 0-1.444.647-1.444 1.444v10.112c0 .797.647 1.444 1.444 1.444zm0 0l7.945-7.944 3.611 3.61m-7.944-4.694a1.084 1.084 0 11-2.167 0 1.084 1.084 0 012.167 0z" stroke="#a0aec0" stroke-linecap="round" stroke-linejoin="round"></path><rect x="83" y="78" width="41" height="2" rx="1" fill="#a0aec0"></rect><rect x="88" y="82" width="32" height="2" rx="1" fill="#a0aec0"></rect><rect x="95" y="74" width="17" height="2" rx="1" fill="#4a5568"></rect><path d="M157.444 66h10.112c.797 0 1.444-.647 1.444-1.444V54.444c0-.797-.647-1.444-1.444-1.444h-10.112c-.797 0-1.444.647-1.444 1.444v10.112c0 .797.647 1.444 1.444 1.444zm0 0l7.945-7.944 3.611 3.61m-7.944-4.694a1.084 1.084 0 11-2.167 0 1.084 1.084 0 012.167 0z" stroke="#a0aec0" stroke-linecap="round" stroke-linejoin="round"></path><rect x="142" y="78" width="41" height="2" rx="1" fill="#a0aec0"></rect><rect x="147" y="82" width="32" height="2" rx="1" fill="#a0aec0"></rect><rect x="154" y="74" width="17" height="2" rx="1" fill="#4a5568"></rect><path d="M216.444 66h10.112c.797 0 1.444-.647 1.444-1.444V54.444c0-.797-.647-1.444-1.444-1.444h-10.112c-.797 0-1.444.647-1.444 1.444v10.112c0 .797.647 1.444 1.444 1.444zm0 0l7.945-7.944 3.611 3.61m-7.944-4.694a1.084 1.084 0 11-2.167 0 1.084 1.084 0 012.167 0z" stroke="#a0aec0" stroke-linecap="round" stroke-linejoin="round"></path><rect x="201" y="78" width="41" height="2" rx="1" fill="#a0aec0"></rect><rect x="206" y="82" width="32" height="2" rx="1" fill="#a0aec0"></rect><rect x="213" y="74" width="17" height="2" rx="1" fill="#4a5568"></rect><path d="M39.444 112h10.112c.797 0 1.444-.647 1.444-1.444v-10.112c0-.797-.647-1.444-1.444-1.444H39.444c-.797 0-1.444.647-1.444 1.444v10.112c0 .797.647 1.444 1.444 1.444zm0 0l7.945-7.944L51 107.667m-7.944-4.695a1.084 1.084 0 11-2.167.001 1.084 1.084 0 012.167-.001z" stroke="#a0aec0" stroke-linecap="round" stroke-linejoin="round"></path><rect x="24" y="124" width="41" height="2" rx="1" fill="#a0aec0"></rect><rect x="29" y="128" width="32" height="2" rx="1" fill="#a0aec0"></rect><rect x="36" y="120" width="17" height="2" rx="1" fill="#4a5568"></rect><path d="M98.444 112h10.112c.797 0 1.444-.647 1.444-1.444v-10.112c0-.797-.647-1.444-1.444-1.444H98.444c-.797 0-1.444.647-1.444 1.444v10.112c0 .797.647 1.444 1.444 1.444zm0 0l7.945-7.944 3.611 3.611m-7.944-4.695a1.084 1.084 0 11-2.167 0 1.084 1.084 0 012.167 0z" stroke="#a0aec0" stroke-linecap="round" stroke-linejoin="round"></path><rect x="83" y="124" width="41" height="2" rx="1" fill="#a0aec0"></rect><rect x="88" y="128" width="32" height="2" rx="1" fill="#a0aec0"></rect><rect x="95" y="120" width="17" height="2" rx="1" fill="#4a5568"></rect><path d="M157.444 112h10.112c.797 0 1.444-.647 1.444-1.444v-10.112c0-.797-.647-1.444-1.444-1.444h-10.112c-.797 0-1.444.647-1.444 1.444v10.112c0 .797.647 1.444 1.444 1.444zm0 0l7.945-7.944 3.611 3.611m-7.944-4.695a1.084 1.084 0 11-2.167 0 1.084 1.084 0 012.167 0z" stroke="#a0aec0" stroke-linecap="round" stroke-linejoin="round"></path><rect x="142" y="124" width="41" height="2" rx="1" fill="#a0aec0"></rect><rect x="147" y="128" width="32" height="2" rx="1" fill="#a0aec0"></rect><rect x="154" y="120" width="17" height="2" rx="1" fill="#4a5568"></rect><path d="M216.444 112h10.112c.797 0 1.444-.647 1.444-1.444v-10.112c0-.797-.647-1.444-1.444-1.444h-10.112c-.797 0-1.444.647-1.444 1.444v10.112c0 .797.647 1.444 1.444 1.444zm0 0l7.945-7.944 3.611 3.611m-7.944-4.695a1.084 1.084 0 11-2.167 0 1.084 1.084 0 012.167 0z" stroke="#a0aec0" stroke-linecap="round" stroke-linejoin="round"></path><rect x="201" y="124" width="41" height="2" rx="1" fill="#a0aec0"></rect><rect x="206" y="128" width="32" height="2" rx="1" fill="#a0aec0"></rect><rect x="213" y="120" width="17" height="2" rx="1" fill="#4a5568"></rect></svg>',content:`<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="text-2xl font-medium title-font mb-4 text-gray-900">OUR TEAM</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
    </div>
    <div class="flex flex-wrap -m-4">
      <div class="p-4 lg:w-1/4 md:w-1/2">
        <div class="h-full flex flex-col items-center text-center">
          <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://dummyimage.com/200x200">
          <div class="w-full">
            <h2 class="title-font font-medium text-lg text-gray-900">Alper Kamu</h2>
            <h3 class="text-gray-500 mb-3">UI Developer</h3>
            <p class="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
            <span class="inline-flex">
              <a class="text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a class="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a class="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/4 md:w-1/2">
        <div class="h-full flex flex-col items-center text-center">
          <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://dummyimage.com/201x201">
          <div class="w-full">
            <h2 class="title-font font-medium text-lg text-gray-900">Holden Caulfield</h2>
            <h3 class="text-gray-500 mb-3">UI Developer</h3>
            <p class="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
            <span class="inline-flex">
              <a class="text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a class="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a class="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/4 md:w-1/2">
        <div class="h-full flex flex-col items-center text-center">
          <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://dummyimage.com/202x202">
          <div class="w-full">
            <h2 class="title-font font-medium text-lg text-gray-900">Atticus Finch</h2>
            <h3 class="text-gray-500 mb-3">UI Developer</h3>
            <p class="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
            <span class="inline-flex">
              <a class="text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a class="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a class="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/4 md:w-1/2">
        <div class="h-full flex flex-col items-center text-center">
          <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://dummyimage.com/203x203">
          <div class="w-full">
            <h2 class="title-font font-medium text-lg text-gray-900">Henry Letham</h2>
            <h3 class="text-gray-500 mb-3">UI Developer</h3>
            <p class="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
            <span class="inline-flex">
              <a class="text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a class="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a class="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`}),r.Blocks.add("testimonial1",{label:"Testimonial 1",category:"Testimonial",media:'<svg viewBox="0 0 266 150" fill="none"><path fill="#fff" d="M0 0h266v150H0z"></path><rect x="25" y="57" width="104" height="62" rx="1" fill="#e2e8f0"></rect><circle cx="39.5" cy="105.5" r="7.5" fill="#cbd5e0"></circle><path d="M52 108a1 1 0 011-1h24a1 1 0 010 2H53a1 1 0 01-1-1z" fill="#a0aec0"></path><rect x="52" y="101" width="43" height="3" rx="1.5" fill="#4a5568"></rect><rect x="32" y="75" width="76" height="3" rx="1.5" fill="#a0aec0"></rect><rect x="32" y="81" width="88" height="3" rx="1.5" fill="#a0aec0"></rect><rect x="32" y="87" width="83" height="3" rx="1.5" fill="#a0aec0"></rect><path d="M38.641 63h-2.182a.354.354 0 00-.36.349v2.119c0 .192.161.349.36.349h1.044c-.014.554-.146.999-.398 1.333-.198.263-.498.481-.9.653a.344.344 0 00-.177.468l.258.53c.084.17.29.245.468.17.475-.2.876-.452 1.204-.758.399-.375.672-.797.82-1.268.148-.472.222-1.115.222-1.93v-1.666a.354.354 0 00-.359-.349zM32.761 68.97c.47-.199.869-.451 1.198-.757.403-.375.678-.796.826-1.264.148-.467.222-1.112.222-1.934v-1.666a.354.354 0 00-.359-.349h-2.183a.354.354 0 00-.359.349v2.119c0 .192.161.349.36.349h1.044c-.014.554-.146.999-.398 1.333-.198.263-.498.481-.9.653a.344.344 0 00-.177.468l.258.529c.083.17.29.245.468.17z" fill="#a0aec0"></path><rect x="137" y="57" width="104" height="62" rx="1" fill="#e2e8f0"></rect><circle cx="151.5" cy="105.5" r="7.5" fill="#cbd5e0"></circle><path d="M164 108a1 1 0 011-1h24a1 1 0 010 2h-24a1 1 0 01-1-1z" fill="#a0aec0"></path><rect x="164" y="101" width="43" height="3" rx="1.5" fill="#4a5568"></rect><rect x="144" y="75" width="76" height="3" rx="1.5" fill="#a0aec0"></rect><rect x="144" y="81" width="88" height="3" rx="1.5" fill="#a0aec0"></rect><rect x="144" y="87" width="83" height="3" rx="1.5" fill="#a0aec0"></rect><path d="M150.641 63h-2.182a.354.354 0 00-.359.349v2.119c0 .192.16.349.359.349h1.044c-.014.554-.146.999-.398 1.333-.198.263-.498.481-.899.653a.344.344 0 00-.178.468l.258.53c.084.17.29.245.468.17.475-.2.876-.452 1.204-.758.399-.375.672-.797.82-1.268.148-.472.222-1.115.222-1.93v-1.666a.354.354 0 00-.359-.349zM144.761 68.97c.47-.199.869-.451 1.198-.757.403-.375.678-.796.826-1.264.148-.467.222-1.112.222-1.934v-1.666a.354.354 0 00-.359-.349h-2.183a.353.353 0 00-.358.349v2.119c0 .192.16.349.358.349h1.045c-.014.554-.146.999-.398 1.333-.198.263-.498.481-.899.653a.344.344 0 00-.178.468l.257.529c.084.17.291.245.469.17z" fill="#a0aec0"></path><rect x="107" y="31" width="52" height="5" rx="2.5" fill="#4a5568"></rect></svg>',content:`<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <h1 class="text-3xl font-medium title-font text-gray-900 mb-12 text-center">Testimonials</h1>
    <div class="flex flex-wrap -m-4">
      <div class="p-4 md:w-1/2 w-full">
        <div class="h-full bg-gray-100 p-8 rounded">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
          </svg>
          <p class="leading-relaxed mb-6">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</p>
          <a class="inline-flex items-center">
            <img alt="testimonial" src="https://dummyimage.com/106x106" class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center">
            <span class="flex-grow flex flex-col pl-4">
              <span class="title-font font-medium text-gray-900">Holden Caulfield</span>
              <span class="text-gray-500 text-sm">UI DEVELOPER</span>
            </span>
          </a>
        </div>
      </div>
      <div class="p-4 md:w-1/2 w-full">
        <div class="h-full bg-gray-100 p-8 rounded">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
          </svg>
          <p class="leading-relaxed mb-6">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</p>
          <a class="inline-flex items-center">
            <img alt="testimonial" src="https://dummyimage.com/107x107" class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center">
            <span class="flex-grow flex flex-col pl-4">
              <span class="title-font font-medium text-gray-900">Alper Kamu</span>
              <span class="text-gray-500 text-sm">DESIGNER</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>`}),r.Blocks.add("testimonial2",{label:"Testimonial 2",category:"Testimonial",media:'<svg viewBox="0 0 266 150" fill="none"><path fill="#fff" d="M0 0h266v150H0z"></path><path d="M139.282 32h-4.365a.708.708 0 00-.718.697v4.239c0 .385.322.697.718.697h2.089c-.027 1.11-.293 1.998-.795 2.666-.396.527-.997.963-1.799 1.308a.687.687 0 00-.356.935l.517 1.06c.166.34.578.49.934.34.951-.398 1.753-.903 2.408-1.517.798-.748 1.346-1.593 1.641-2.536.296-.943.444-2.228.444-3.86v-3.332a.708.708 0 00-.718-.697zM127.523 43.94c.939-.398 1.737-.903 2.396-1.515.805-.748 1.355-1.59 1.651-2.526.296-.936.444-2.226.444-3.87v-3.332a.708.708 0 00-.718-.697h-4.365a.708.708 0 00-.718.697v4.239c0 .385.322.697.718.697h2.089c-.027 1.11-.293 1.998-.795 2.666-.397.527-.997.963-1.799 1.308a.689.689 0 00-.357.935l.516 1.057c.166.34.581.491.938.34z" fill="#a0aec0"></path><rect x="95" y="58" width="76" height="4" rx="2" fill="#a0aec0"></rect><rect x="123" y="94" width="20" height="2" rx="1" fill="#6366f1"></rect><rect x="89" y="66" width="88" height="4" rx="2" fill="#a0aec0"></rect><rect x="92" y="74" width="83" height="4" rx="2" fill="#a0aec0"></rect><rect x="103" y="82" width="60" height="4" rx="2" fill="#a0aec0"></rect><rect x="113" y="104" width="40" height="4" rx="2" fill="#4a5568"></rect><rect x="106" y="112" width="54" height="4" rx="2" fill="#cbd5e0"></rect></svg>',content:`<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="inline-block w-8 h-8 text-gray-400 mb-8" viewBox="0 0 975.036 975.036">
        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
      </svg>
      <p class="leading-relaxed text-lg">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware. Man bun next level coloring book skateboard four loko knausgaard. Kitsch keffiyeh master cleanse direct trade indigo juice before they sold out gentrify plaid gastropub normcore XOXO 90's pickled cindigo jean shorts. Slow-carb next level shoindigoitch ethical authentic, yr scenester sriracha forage franzen organic drinking vinegar.</p>
      <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
      <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
      <p class="text-gray-500">Senior Product Designer</p>
    </div>
  </div>
</section>`}),r.Blocks.add("testimonial3",{label:"Testimonial 3",category:"Testimonial",media:'<svg viewBox="0 0 266 150" fill="none"><path fill="#fff" d="M0 0h266v150H0z"></path><path d="M21 77a2 2 0 012-2h59a2 2 0 110 4H23a2 2 0 01-2-2zM26 85a2 2 0 012-2h48.92a2 2 0 110 4H28a2 2 0 01-2-2z" fill="#a0aec0"></path><path d="M38 104a2 2 0 012-2h25a2 2 0 110 4H40a2 2 0 01-2-2z" fill="#4a5568"></path><path d="M26 69a2 2 0 012-2h48.92a2 2 0 110 4H28a2 2 0 01-2-2z" fill="#a0aec0"></path><path d="M44 94.5a1.5 1.5 0 011.5-1.5h13.38a1.5 1.5 0 010 3H45.5a1.5 1.5 0 01-1.5-1.5z" fill="#6366f1"></path><circle cx="53" cy="53" r="8" fill="#e2e8f0"></circle><path d="M102 77a2 2 0 012-2h59a2 2 0 110 4h-59a2 2 0 01-2-2zM107 85a2 2 0 012-2h48.92a2 2 0 110 4H109a2 2 0 01-2-2z" fill="#a0aec0"></path><path d="M119 104a2 2 0 012-2h25a2 2 0 110 4h-25a2 2 0 01-2-2z" fill="#4a5568"></path><path d="M107 69a2 2 0 012-2h48.92a2 2 0 110 4H109a2 2 0 01-2-2z" fill="#a0aec0"></path><path d="M125 94.5a1.5 1.5 0 011.5-1.5h13.38a1.5 1.5 0 010 3H126.5a1.5 1.5 0 01-1.5-1.5z" fill="#6366f1"></path><circle cx="134" cy="53" r="8" fill="#e2e8f0"></circle><path d="M183 77a2 2 0 012-2h59a2 2 0 110 4h-59a2 2 0 01-2-2zM188 85a2 2 0 012-2h48.92a2 2 0 110 4H190a2 2 0 01-2-2z" fill="#a0aec0"></path><path d="M200 104a2 2 0 012-2h25a2 2 0 110 4h-25a2 2 0 01-2-2z" fill="#4a5568"></path><path d="M188 69a2 2 0 012-2h48.92a2 2 0 110 4H190a2 2 0 01-2-2z" fill="#a0aec0"></path><path d="M206 94.5a1.5 1.5 0 011.5-1.5h13.38a1.5 1.5 0 010 3H207.5a1.5 1.5 0 01-1.5-1.5z" fill="#6366f1"></path><circle cx="215" cy="53" r="8" fill="#e2e8f0"></circle></svg>',content:`<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div class="h-full text-center">
          <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://dummyimage.com/302x302">
          <p class="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
          <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
          <p class="text-gray-500">Senior Product Designer</p>
        </div>
      </div>
      <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div class="h-full text-center">
          <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://dummyimage.com/300x300">
          <p class="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
          <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">ALPER KAMU</h2>
          <p class="text-gray-500">UI Develeoper</p>
        </div>
      </div>
      <div class="lg:w-1/3 lg:mb-0 p-4">
        <div class="h-full text-center">
          <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://dummyimage.com/305x305">
          <p class="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
          <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">HENRY LETHAM</h2>
          <p class="text-gray-500">CTO</p>
        </div>
      </div>
    </div>
  </div>
</section>`})}const No="app.grapesjs.com",t1="app-stage.grapesjs.com",Fs=[No,t1,"localhost","127.0.0.1",".local-credentialless.webcontainer.io",".local.webcontainer.io","-sandpack.codesandbox.io"],r1="license:check:start",i1="license:check:end",l1=()=>typeof window<"u",n1=({isDev:r,isStage:e})=>`${`https://${No}`}/api`,s1=()=>{const r=l1()&&window.location.hostname;return!!r&&(Fs.includes(r)||Fs.some(e=>r.endsWith(e)))},a1=r=>r.replace(/[A-Z]+(?![a-z])|[A-Z]/g,(e,t)=>(t?"-":"")+e.toLowerCase()),o1=r=>typeof r<"u";async function c1({path:r,baseApiUrl:e,method:t="GET",headers:i={},params:l,body:n}){const s=`${e||n1({isDev:!1,isStage:!1})}${r}`,a={method:t,headers:{"Content-Type":"application/json",...i}};n&&(a.body=JSON.stringify(n));const o=l?new URLSearchParams(l).toString():"",c=o?`?${o}`:"",d=await fetch(`${s}${c}`,a);if(!d.ok)throw new Error(`HTTP error! status: ${d.status}`);return d.json()}var Pe=(r=>(r.free="free",r.startup="startup",r.business="business",r.enterprise="enterprise",r))(Pe||{}),Fo=(r=>(r.Info="info",r.Error="error",r.Success="success",r.Warning="warning",r))(Fo||{}),$e=(r=>(r.toastAdd="studio:toastAdd",r.dialogOpen="studio:dialogOpen",r.dialogClose="studio:dialogClose",r.sidebarLeftSet="studio:sidebarLeft:set",r.sidebarLeftGet="studio:sidebarLeft:get",r.sidebarLeftToggle="studio:sidebarLeft:toggle",r.sidebarRightSet="studio:sidebarRight:set",r.sidebarRightGet="studio:sidebarRight:get",r.sidebarRightToggle="studio:sidebarRight:toggle",r.sidebarTopSet="studio:sidebarTop:set",r.sidebarTopGet="studio:sidebarTop:get",r.sidebarTopToggle="studio:sidebarTop:toggle",r.sidebarBottomSet="studio:sidebarBottom:set",r.sidebarBottomGet="studio:sidebarBottom:get",r.sidebarBottomToggle="studio:sidebarBottom:toggle",r.symbolAdd="studio:symbolAdd",r.symbolDetach="studio:symbolDetach",r.symbolOverride="studio:symbolOverride",r.symbolPropagateStyles="studio:propagateStyles",r.getPagesConfig="studio:getPagesConfig",r.setPagesConfig="studio:setPagesConfig",r.getPageSettings="studio:getPageSettings",r.setPageSettings="studio:setPageSettings",r.projectFiles="studio:projectFiles",r.canvasReload="studio:canvasReload",r.getBlocksPanel="studio:getBlocksPanel",r.setBlocksPanel="studio:setBlocksPanel",r.getStateContextMenu="studio:getStateContextMenu",r.setStateContextMenu="studio:setStateContextMenu",r.contextMenuComponent="studio:contextMenuComponent",r.layoutAdd="studio:layoutAdd",r.layoutRemove="studio:layoutRemove",r.layoutToggle="studio:layoutToggle",r.getStateTheme="studio:getStateTheme",r.setStateTheme="studio:setStateTheme",r.assetProviderGet="studio:assetProviderGet",r.assetProviderAdd="studio:assetProviderAdd",r.assetProviderRemove="studio:assetProviderRemove",r))($e||{}),Ho=(r=>(r.dark="dark",r.light="light",r.auto="auto",r))(Ho||{});const Hs={[Pe.free]:0,[Pe.startup]:10,[Pe.business]:20,[Pe.enterprise]:30};function d1(r){const e=r;return e.init=t=>i=>r(i,t),e}const lr=r=>d1(r);async function nr({editor:r,plan:e,pluginName:t,licenseKey:i,cleanup:l}){let n="",s=!1;const a=s1(),o=d=>{console.warn("Cleanup plugin:",t,"Reason:",d),l()},c=(d={})=>{var h;const{error:f,sdkLicense:u}=d,p=(h=d.plan)==null?void 0:h.category;if(!(u||d.license)||f)o(f||"Invalid license");else if(p){const m=Hs[e],x=Hs[p];m>x&&o({pluginRequiredPlan:e,licensePlan:p})}};r.on(r1,d=>{n=d==null?void 0:d.baseApiUrl,s=!0}),r.on(i1,d=>{c(d)}),setTimeout(async()=>{if(!s){if(a)return;if(i){const d=await h1({licenseKey:i,pluginName:t,baseApiUrl:n});d&&c(d)}else o("The `licenseKey` option not provided")}},2e3)}async function h1(r){const{licenseKey:e,pluginName:t,baseApiUrl:i}=r;try{return(await c1({baseApiUrl:i,path:`/sdk/${e||"na"}`,method:"POST",params:{d:window.location.hostname,pn:t}})).result||{}}catch(l){return console.error("Error during SDK license check:",l),!1}}const Si=(r,e)=>{var t;return!!((t=r==null?void 0:r.hasAttribute)!=null&&t.call(r,e))},At=(r,e)=>{var t;return!!((t=r==null?void 0:r.classList)!=null&&t.contains(e))},f1=(r,e={})=>{var t;const i={},l=[],n=[];for(const s in r){const{value:a,...o}=r[s];l.push({id:s,name:s,changeProp:!0,category:e.category,...o}),i[s]=a,!o1(a)&&n.push(s);const{subTraits:c={}}=o;for(const d in o.subTraits)(t=c[d])==null||t.forEach(h=>{const f=h.id||h.name;i[f]=h.value})}return{propKeys:Object.keys(i),propsNoValues:n,props:i,traits:l}},u1=(r,e)=>{e.forEach(t=>{if(t.subTraits){const i=`${t.id||t.name}`,l=t.changeProp?`change:${i}`:`change:attributes:${i}`;r.on(l,()=>_s(r,i)),_s(r,i)}})},_s=(r,e)=>{const t=r.getTrait(e),i=t.get("category"),l=t.get("subTraits")||{},n=(Object.values(l).flat()||[]).map(o=>o.id||o.name);r.removeTrait(n);const s=l[t.getValue()],a=r.getTraitIndex(e)+1;s&&r.addTrait(s.map(o=>({category:i,...o})),{at:a})},p1=(r,e)=>{e.forEach(t=>{const i=a1(t);i!==t&&r.has(i)&&r.set({[t]:r.get(i),[i]:void 0})})},m1="gjs-plg-",$s=(...r)=>r.map(e=>`[data-gjs-type="${e}"]`).join(","),g1="dialogComponent",x1=function(r,e={}){const{Blocks:t,Components:i}=r,{licenseKey:l}=e,n="gjs-plg-dialog",s="gjs-plg-dialog-overlay",a="gjs-plg-dialog-content",o="gjs-plg-dialog-close",c="gjs-plg-dialog-title",d="gjs-plg-dialog-body",h="gjs-plg-dialog-description",f="gjs-plg-dialog-placeholder";t.add(n,{label:"Dialog",media:`
    <svg viewBox="0 0 24 24">
      <path d="M4 4h16v10H8l-4 4V4z"></path>
    </svg>
  `,category:"Extra",content:{type:n},activate:!0,...e.block}),i.addType(n,{model:{defaults:{tagName:"div",attributes:{class:n,"data-type-role":n},components:[{type:s},{type:f}],draggable:$s("wrapper"),droppable:$s(n),styles:`
          .${n} {
            position: relative;
            z-index: 1;
          }
        `,traits:[{type:"button",label:"Open dialog",name:"onActive",changeProp:!0,command(u){var p;(p=u.getSelected())==null||p.trigger("active")}},{type:"checkbox",label:"Close when pressing X",name:"closeWhenPressingX",default:!0,changeProp:!0},{type:"checkbox",label:"Close when pressing ESC",name:"closeWhenPressingEsc",default:!0,changeProp:!0},{type:"checkbox",label:"Open when leaving the window",name:"openWhenLeavingWindow",default:!1,changeProp:!0},{type:"number",label:"Open when scrolling to level",name:"openWhenScrollingToLevel",default:0,changeProp:!0}],"script-props":["closeWhenPressingX","closeWhenPressingEsc","openWhenLeavingWindow","openWhenScrollingToLevel"],script:function(u){const p=this;function m(g){const b=p.querySelector('[data-type-role="gjs-plg-dialog-overlay"]'),w=p.querySelector('[data-type-role="gjs-plg-dialog-close"]');function T(){b.style.display="none"}g?(p._onCloseWhenPressingX=T,w.addEventListener("click",p._onCloseWhenPressingX)):(w.removeEventListener("click",p._onCloseWhenPressingX),p._onCloseWhenPressingX=null)}function x(g){const b=p.querySelector('[data-type-role="gjs-plg-dialog-overlay"]');function w(T){T.key==="Escape"&&(b.style.display="none")}g?(p._onCloseWhenPressingEsc=w,p.addEventListener("keydown",p._onCloseWhenPressingEsc)):(p.removeEventListener("keydown",p._onCloseWhenPressingEsc),p._onCloseWhenPressingEsc=null)}function y(g){const b=p.querySelector('[data-type-role="gjs-plg-dialog-overlay"]');function w(){b.style.display="flex"}g?(p._onOpenWhenLeavingWindow=w,document.addEventListener("mouseleave",p._onOpenWhenLeavingWindow)):(document.removeEventListener("mouseleave",p._onOpenWhenLeavingWindow),p._onOpenWhenLeavingWindow=null)}function k(g){const b=p.querySelector('[data-type-role="gjs-plg-dialog-overlay"]');function w(){const T=document.documentElement.scrollTop;g&&T>=Number(g)&&(b.style.display="flex")}g?(p._onOpenWhenScrollingToLevel=w,document.addEventListener("scroll",p._onOpenWhenScrollingToLevel)):(document.removeEventListener("scroll",p._onOpenWhenScrollingToLevel),p._onOpenWhenScrollingToLevel=null)}m(u.closeWhenPressingX),x(u.closeWhenPressingEsc),y(u.openWhenLeavingWindow),k(u.openWhenScrollingToLevel)}},init(){this.on("active",this.handleOpenWhenClickPlaceholder)},handleOpenWhenClickPlaceholder(){this.view.el.querySelector('[data-type-role="gjs-plg-dialog-placeholder"]').addEventListener("click",()=>{const u=this.view.el.querySelector('[data-type-role="gjs-plg-dialog-overlay"]');u.style.display="flex"})}},view:{onActive(){const u=this.el.querySelector('[data-type-role="gjs-plg-dialog-overlay"]');u.style.display="flex"}}}),i.addType(s,{model:{defaults:{tagName:"div",attributes:{class:s,"data-type-role":s},components:{type:a},droppable:!1,draggable:!1,styles:`
          .${s} {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: none;
            align-items: center;
            justify-content: center;
            background-color: rgba(0, 0, 0, 0.5);
          }
        `}}}),i.addType(a,{model:{defaults:{tagName:"div",attributes:{class:a,"data-type-role":a},components:[{type:o},{type:c},{type:d}],droppable:!1,draggable:!1,styles:`
          .${a} {
            position: relative;
            background-color: #fff;
            border-radius: 10px;
            border: 1px solid #eee;
            padding: 20px;
            width: 800px;
            height: 600px;
            box-sizing: border-box;
          }
        `}}}),i.addType(o,{model:{defaults:{tagName:"button",attributes:{class:o,"data-type-role":o},components:"&times;",droppable:!1,draggable:!1,styles:`
          .${o} {
            position: absolute;
            top: 10px;
            right: 10px;
            width: 30px;
            height: 30px;
            background: none;
            border: none;
            font-size: 20px;
            cursor: pointer;
          }
        `}}}),i.addType(c,{model:{defaults:{tagName:"h2",attributes:{class:c,"data-type-role":c},components:"Dialog Title",editable:!0,droppable:!1,draggable:!1,styles:`
          .${c} {
            margin: 0;
            padding: 0 40px 20px 0;
          }
        `}}}),i.addType(d,{model:{defaults:{tagName:"div",attributes:{class:d,"data-type-role":d},components:[{type:h}],styles:`
          .${d} {
            height: 90%;
            overflow: auto;
          }
        `}}}),i.addType(h,{model:{defaults:{tagName:"p",attributes:{class:h,"data-type-role":h},components:"This is a customizable dialog!",editable:!0,styles:`
          .${h} {
            margin: 0;
          }
        `}}}),i.addType(f,{model:{toHTML(){return""},defaults:{tagName:"button",attributes:{class:f,"data-type-role":f},components:"Dialog (click me to open)",droppable:!1,draggable:!1}},view:{init(){const{em:u,el:p}=this,m="core:preview",x=u.Commands.events;this.listenTo(u,`${x.runCommand}${m}`,()=>{p.style.display="none"}),this.listenTo(u,`${x.stopCommand}${m}`,()=>{p.style.display=""})}}}),nr({editor:r,licenseKey:l,plan:Pe.startup,pluginName:g1,cleanup:()=>{t.remove(n),i.removeType(n)}})},Gm=lr(x1),v1={ratioDefault:!0,tc:!1,cl:!1,cr:!1,bc:!1},Pl=`<svg viewBox="0 0 24 24">
  <path d="M19 0H9C7.9 0 7 .9 7 2V18C7 19.1 7.9 20 9 20H19C20.1 20 21 19.1 21 18V2C21 .9 20.1 0 19 0M19 18H9V2H19V18M3 4V22C3 23.1 3.9 24 5 24H17V22H5V4H3M14 5L11 10L14 15L17 10L14 5Z" />
</svg>`,_o="layout-icon-picker",y1="icons-layout-",$o="icons-list-layout",Vo="gs-iconify-picker",In="__iconify_collection",w1="https://api.iconify.design",Il=new Map;let Zr;const b1=({collectionId:r})=>`https://cdn.jsdelivr.net/npm/@iconify-json/${r}@latest/icons.json`;async function Go({collectionId:r,editor:e}){try{if(Il.has(r))return Il.get(r);const t=await fetch(b1({collectionId:r}));if(!t.ok)throw new Error(`Failed to fetch collection: ${t.statusText}`);const i=await t.json();return Il.set(r,i),i}catch(t){console.error("Error fetching collection",t),e.runCommand($e.toastAdd,A1());return}}async function k1({collectionIds:r,editor:e}){try{if(Zr)return Zr;const t=r?`?prefixes=${r.join(",")}`:"",i=await fetch(`${w1}/collections${t}`);if(!i.ok)throw new Error(`Failed to fetch collections: ${i.statusText}`);return Zr=await i.json(),Zr}catch(t){console.error("Error fetching collections",t),e.runCommand($e.toastAdd,qo());return}}function Vs(){return{type:"button",label:"Open Icon Picker",name:"onActive",changeProp:!0,command(r){var e;(e=r.getSelected())==null||e.trigger("active")}}}async function S1({collectionIds:r,editor:e,component:t}){const i=await k1({collectionIds:r,editor:e});if(!i)return;const l=({icon:o,collectionId:c,iconId:d})=>{t.components(o),t.set({collectionId:c,iconId:d})},n=Object.entries(i).map(([o,c])=>({id:o,...c})).sort((o,c)=>o.name.localeCompare(c.name)),s=t.get("collectionId")??n[0].id;e.runCommand($e.layoutToggle,{id:_o,placer:{type:"dialog",size:"l",title:"Select Icon"},header:!1,layout:{type:"column",style:{height:500,gap:10},children:[T1({collectionsList:n,collectionId:s,editor:e,handleClick:l}),{id:$o,type:"column",grow:!0}]}});const a=await Go({collectionId:s,editor:e});a&&on({editor:e,collection:a,handleClick:l})}function M1({editor:r,collection:e}){r.em.set(In,e)}function C1(r){return r.em.get(In)}function on(r){const{editor:e}=r,t={id:y1,layout:E1(r),header:!1,style:{height:"100%"},placer:{type:"static",layoutId:$o}};e.runCommand($e.layoutRemove,{id:t.id,force:!0}),setTimeout(()=>e.runCommand($e.layoutAdd,t),10)}function T1(r){const{collectionsList:e,collectionId:t,editor:i,handleClick:l}=r,n=e.map(({id:s,name:a,total:o})=>({id:s,label:`${a} (${o})`})).sort((s,a)=>s.label.localeCompare(a.label));return{type:"column",style:{gap:10},className:`${Vo}__header`,children:[{type:"selectField",value:t,options:n,emptyState:"Select an icon collection",onChange:async({setState:s,value:a})=>{const o=await Go({collectionId:a,editor:i});o&&(s({value:a}),M1({editor:i,collection:o}),on({editor:i,collection:o,handleClick:l}))}},{type:"inputField",value:"",placeholder:"Search icons inside collection...",editorEvents:{[`change:${In}`]:({setState:s})=>s({value:""})},onInput:({setState:s,value:a,editor:o})=>{const c=C1(o);if(!c)return;const d=Object.fromEntries(Object.entries(c.icons).filter(([h])=>h.includes(a)));s({value:a}),on({editor:o,collection:c,handleClick:l,collectionFiltered:{...c,icons:d}})}}]}}function E1({collection:r,collectionFiltered:e,handleClick:t}){const{height:i=24,width:l=24,icons:n,prefix:s}=e||r,a=Object.entries(n).map(([o,{body:c}])=>({name:o,body:c}),{});return{type:"column",className:`${Vo}__content`,style:{height:"100%"},children:{type:"virtualList",items:a,itemLayout:({item:o})=>[{type:"custom",render:c=>{const{editor:d,addEl:h,removeEl:f}=c,u=document.createElementNS("http://www.w3.org/2000/svg","svg");u.setAttribute("xmlns","http://www.w3.org/2000/svg"),u.innerHTML=o.body,u.setAttribute("viewBox",`0 0 ${l} ${i}`);const{cssWidth:p,cssHeight:m}=z1(l,i);u.style.cssText=`width: ${p}px; height: ${m}px; cursor: pointer;`,u.addEventListener("mouseover",()=>{u.style.border="2px solid currentColor",u.style.borderRadius="4px",u.style.padding="4px"}),u.addEventListener("mouseout",()=>{u.style.border="none"});const x=()=>{const y=u.cloneNode(!0);y.removeAttribute("style");const k=y.outerHTML;t({icon:k,collectionId:s,iconId:o.name}),d==null||d.runCommand($e.layoutRemove,{id:_o})};return u.addEventListener("click",x),h(u),()=>{u.removeEventListener("click",x),f(u)}}}]}}}function z1(r,e){const t=r/e;let i=48,l=48;return t>1?l=48/t:t<1&&(i=48*t),{cssWidth:i,cssHeight:l}}function qo(){return{id:"toast-error-getCollections",header:"Error",content:"Error fetching collections",variant:Fo.Error}}function A1(){return{...qo(),id:"toast-error-getCollection",content:"Error fetching collection"}}const O1="iconifyComponent",L1=function(r,e={}){var t;const{Components:i,Blocks:l}=r,{collections:n,extendIconComponent:s=!0,licenseKey:a,block:o={}}=e,c="icon",d="iconify",h="Iconify",f="data-type-iconify",u={events:()=>({dblclick:"onActive"}),onActive(){S1({collectionIds:n,editor:r,component:this.model})}};if(i.addType(d,{block:o&&{label:h,media:Pl,content:{type:d},category:"Extra",activate:!0,...o},isComponent:p=>Si(p,f),model:{defaults:{name:h,icon:Pl,droppable:!1,attributes:{[f]:!0},resizable:v1,components:Pl,style:{width:"50px",height:"50px"},traits:[Vs()]},init(){this.listenTo(this.components(),"change add",this.disableLayers),this.disableLayers()},disableLayers(){this.components().forEach(p=>p.set({layerable:!1,locked:!0}))}},view:u}),s){const p=(t=i.getType(c))==null?void 0:t.model,[m,x,...y]=p.getDefaults().traits;i.addType(c,{model:{defaults:{traits:[m,x,Vs(),...y]}},view:u})}nr({editor:r,licenseKey:a,plan:Pe.startup,pluginName:O1,cleanup:()=>{l.remove(d),i.removeType(d)}})},qm=lr(L1),j1="fsLightboxComponent",Qr="data-fslightbox",ei="data-type",B1="fslightbox-open",Nt="fslightbox",Ft={image:'<svg viewBox="0 0 24 24"><path d="m8.5 13.5 2.5 3 3.5-4.5 4.5 6H5m16 1V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2Z"/></svg>',video:'<svg viewBox="0 0 24 24"><path d="M17 10.5V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.5l4 4v-11l-4 4Z"/></svg>',imageLightbox:'<svg viewBox="0 0 24 24"><path d="M4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H16L12,22L8,18H4A2,2 0 0,1 2,16V4A2,2 0 0,1 4,2M19,15V7L15,11L13,9L7,15H19M7,5A2,2 0 0,0 5,7A2,2 0 0,0 7,9A2,2 0 0,0 9,7A2,2 0 0,0 7,5Z" /></svg>',external:'<svg viewBox="0 0 24 24"><path d="M14 3v2h3.6l-9.8 9.8 1.4 1.4L19 6.4V10h2V3m-2 16H5V5h7V3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-7h-2v7z"/></svg>',eye:'<svg viewBox="0 0 24 24"><path d="M12 9a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5 5 5 0 0 1 5-5 5 5 0 0 1 5 5 5 5 0 0 1-5 5m0-12.5C7 4.5 2.7 7.6 1 12a11.8 11.8 0 0 0 22 0c-1.7-4.4-6-7.5-11-7.5Z"/></svg>'},P1=function(r,e={}){const{Blocks:t,Components:i}=r,l="Lightbox",n=`${m1}${Nt}`,s={toolbarIconOpen:Ft.eye,block:{},defaultSrc:"https://placehold.co/300/777/white.png?text=Image",cdnScript:"https://cdn.jsdelivr.net/npm/fslightbox@3.4.2/index.js",...e},{block:a,toolbarIconOpen:o,defaultSrc:c}=s,d=function(k){const g=this,b="data-fslightbox",w=window,T=()=>{var S;const z=w.refreshFsLightbox;z==null||z();const B=g.getAttribute(b);(S=w.fsLightboxInstances)==null||S[B],w._isEditor&&Array.from(document.querySelectorAll(`[${b}]`)).forEach(E=>{const M=E.onclick;E.onclick=function(A){A.preventDefault();const P=E;!P.__skipLb&&(M==null||M(A)),P.__skipLb=!0}})};if(w.refreshFsLightbox)T();else{const S=document.createElement("script");S.src=k.cdnScript,S.onload=T,document.head.appendChild(S)}},h=k=>({id:`${Nt}-open-lb`,label:o,command:()=>{const g=k.getView();g==null||g.toggleLightbox()}}),f="source-type",u={type:"radio",name:f,label:"Source type",changeProp:!0,options:[{id:"image",label:"Image",icon:Ft.image},{id:"video",label:"Video",icon:Ft.video},{id:"el",label:"Custom Element",icon:Ft.external}],labelToTitle:!0},p={id:"href-image",name:"href",type:"file",label:"Source Image"},m={id:"href-video",name:"href",label:"Source Video",placeholder:"https://www.youtube.com/watch?v=..."},x={id:"href-el",name:"href",label:"Source Element",placeholder:"#custom-element-id"},y={image:[p],video:[m],el:[x]};i.addType(Nt,{block:a&&{label:l,media:Ft.imageLightbox,category:"Extra",select:!0,...s.block},isComponent:k=>{var g;return(g=k.hasAttribute)==null?void 0:g.call(k,Qr)},extendFn:["initToolbar"],model:{defaults:{tagName:"a",name:l,icon:Ft.imageLightbox,classes:n,draggable:(k,g)=>!g.is(Nt),attributes:{[Qr]:"lightbox",[ei]:"image",href:c},components:{type:"image",src:c},script:d,cdnScript:s.cdnScript,"script-props":["attributes","cdnScript"],[f]:"image",traits:[u,{name:Qr,label:"Group name"},{type:"button",label:"Toggle Lightbox",command(k,g){var b;const w=(b=g.target)==null?void 0:b.getView();w==null||w.toggleLightbox()}}],styles:`
          .${n} {
            display: inline-block;
            padding: 10px;
          }
        `},init(){const k=[f].map(g=>`change:${g}`).join(" ");this.on(k,this.updateTraits),this.on(`change:${f}`,this.onSourceTypeChange),this.on("change:attributes:href",this.adjustSourceType),this.updateTraits({init:!0}),this.adjustSourceType()},onSourceTypeChange(k,g,b){if(b.adjust)return;const w=this.get(f)==="video"?"video":"image";this.addAttributes({[ei]:w,href:""})},adjustSourceType(){const k=this.get(f),g=this.getAttributes().href||"",b={adjust:!0};if(k==="video"){const w=g.includes("youtube.com")?"youtube":"video";this.addAttributes({[ei]:w},b)}else k!=="el"&&g.startsWith("#")?this.set(f,"el",b):k==="image"&&this.addAttributes({[ei]:"image"},b)},updateTraits(k={}){const{changed:g}=this,{init:b}=k;if(g[u.name]||b){this.removeTrait([p.name,m.name,x.name]);const w=this.get(f)||"image",T=this.getTraitIndex(f)+1;this.addTrait(y[w],{at:T})}},initToolbar(){if(!o)return;const{toolbar:k}=this,g=h(this);!k.find(b=>b.id===g.id)&&(k==null||k.unshift(g))}},view:{onRender(){this.el.__skipLb=!0},toggleLightbox(){var k;const{em:g,el:b,model:w}=this,{Canvas:T}=g,S=w.getAttributes()[Qr],{defaultView:z,documentElement:B}=b.ownerDocument,E=(k=z.fsLightboxInstances)==null?void 0:k[S];if(B.classList.contains(B1))E.close();else{b.__skipLb=!1;let M;E.props.onOpen=()=>{M=T.getSpots(),setTimeout(()=>T.removeSpots())},E.props.onClose=()=>{M.forEach(A=>T.addSpot(A.attributes))},b.click()}}}}),nr({editor:r,plan:Pe.startup,licenseKey:s.licenseKey,pluginName:j1,cleanup:()=>{t.remove(Nt),i.removeType(Nt)}})},Wm=lr(P1);var Gt=(r=>(r.image="image",r.video="video",r.external="external",r))(Gt||{});const gt="lightGallery",Gs=`${gt}-item`,Mi="data-lightgallery",qs=`${Mi}-item`,Di="toggle",yt={image:'<svg viewBox="0 0 24 24"><path d="m8.5 13.5 2.5 3 3.5-4.5 4.5 6H5m16 1V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2Z"/></svg>',video:'<svg viewBox="0 0 24 24"><path d="M17 10.5V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.5l4 4v-11l-4 4Z"/></svg>',gallery:'<svg viewBox="0 0 24 24"><path d="M4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H16L12,22L8,18H4A2,2 0 0,1 2,16V4A2,2 0 0,1 4,2M19,15V7L15,11L13,9L7,15H19M7,5A2,2 0 0,0 5,7A2,2 0 0,0 7,9A2,2 0 0,0 9,7A2,2 0 0,0 7,5Z" /></svg>',galleryItem:'<svg viewBox="0 0 24 24"><path d="M20 2H4a2 2 0 0 0-2 2v18l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2M8 14H6v-2h2v2m0-3H6V9h2v2m0-3H6V6h2v2m7 6h-5v-2h5v2m3-3h-8V9h8v2m0-3h-8V6h8v2Z"/></svg>',external:'<svg viewBox="0 0 24 24"><path d="M14 3v2h3.6l-9.8 9.8 1.4 1.4L19 6.4V10h2V3m-2 16H5V5h7V3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-7h-2v7z"/></svg>',eye:'<svg viewBox="0 0 24 24"><path d="M12 9a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5 5 5 0 0 1 5-5 5 5 0 0 1 5 5 5 5 0 0 1-5 5m0-12.5C7 4.5 2.7 7.6 1 12a11.8 11.8 0 0 0 22 0c-1.7-4.4-6-7.5-11-7.5Z"/></svg>'},Rl={propKeys:[],props:{},traits:[]},cr=(r,e={})=>{var t;const i={},l=[];for(const n in r){const{value:s,...a}=r[n];l.push({id:n,name:n,changeProp:!0,category:e.category,...a}),i[n]=s;const{subTraits:o={}}=a;for(const c in a.subTraits)(t=o[c])==null||t.forEach(d=>{const h=d.id||d.name;i[h]=d.value})}return{propKeys:Object.keys(i),props:i,traits:l}},cn=(r,e)=>{const t=r.getTrait(e),i=t.get("category"),l=t.get("subTraits")||{},n=(Object.values(l).flat()||[]).map(o=>o.id||o.name);r.removeTrait(n);const s=l[t.getValue()],a=r.getTraitIndex(e)+1;s&&r.addTrait(s.map(o=>({category:i,...o})),{at:a})},Dl=(r,e)=>{e.forEach(t=>{const i=r.getTrait(t);if(!i||!i.get("subTraits"))return;const l=i.changeProp?`change:${t}`:`change:attributes:${t}`;r.on(l,()=>cn(r,t)),cn(r,t)})},I1=(r,e,t)=>{const i=r.getTrait(e).get("subTraits")||{},l=(Object.values(i).flat()||[]).map(s=>{const a=s.name||s.id;return s.changeProp?`change:${a}`:`change:attributes:${a}`}),n=Array.from(new Set(l));n.length&&r.on(n.join(" "),t)},R1={[Di]:{type:"button",label:"Toggle Gallery",command:(r,e)=>{var t,i;return(i=(t=e.target)==null?void 0:t.getView())==null?void 0:i.toggleGallery()}},speed:{type:"number",label:"Speed",tip:"Transition duration between slides (in ms)",value:400,step:50,min:0},inline:{type:"checkbox",label:"Inline Gallery",value:!1},allowMediaOverlap:{type:"checkbox",label:"Allow media overlap",tip:"If enabled, toolbar, captions and thumbnails will overlap with the media element",value:!1},controls:{type:"checkbox",label:"Show controls",tip:"If disabled, prev/next buttons will not be displayed",value:!0},counter:{type:"checkbox",label:"Show counter",tip:"Display the total number of images and index number of the currently displayed slide",value:!0},download:{type:"checkbox",label:"Download icon",tip:"Enable download button",value:!0},enableDrag:{type:"checkbox",label:"Enable drag",tip:"Enables desktop mouse drag support",value:!0},enableSwipe:{type:"checkbox",label:"Enable swipe",tip:"Enables swipe support for mobile devices",value:!0},escKey:{type:"checkbox",label:"Enable Esc key",tip:'Whether the gallery could be closed by pressing the "Esc" key',value:!0},keyPress:{type:"checkbox",label:"Enable keyboard navigation",value:!1},loop:{type:"checkbox",label:"Loop",tip:"If false, will disable the ability to loop back to the beginning of the gallery from the last slide",value:!0},getCaptionFromTitleOrAlt:{type:"checkbox",label:"Caption from title or alt",tip:"Get captions from alt or title tags",value:!0},showMaximizeIcon:{type:"checkbox",label:"Show maximize icon",value:!1},closable:{type:"checkbox",label:"Closable",tip:"If false, it won't be possible to close the gallery",value:!0},showCloseIcon:{type:"checkbox",label:"Show close icon",tip:"If false, close button won't be displayed.",visible:({component:r})=>!!r.getTrait("closable").getValue(),value:!0},closeOnTap:{type:"checkbox",label:"Close on tap",tip:"Allows clicks on black area to close gallery",visible:({component:r})=>!!r.getTrait("closable").getValue(),value:!0}},D1={thumbnail:{category:{id:"thumbnail-options",label:"Thumbnail Options"},type:"checkbox",label:"Thumbnails",value:!0,subTraits:{false:[],true:[{type:"checkbox",name:"enableThumbDrag",label:"Thumbnail drag",tip:"Enable thumbnail drag on desktop",changeProp:!0,value:!0},{type:"checkbox",name:"enableThumbSwipe",label:"Thumbnail swipe",tip:"Enable thumbnail swipe on mobile devices",changeProp:!0,value:!0},{type:"select",name:"alignThumbnails",tip:"Position of thumbnails when the width of all thumbnails combined is less than the gallery's width",label:"Align Thumbnails",value:"middle",changeProp:!0,options:[{id:"left",label:"Left"},{id:"middle",label:"Middle"},{id:"right",label:"Right"}]},{type:"select",name:"currentPagerPosition",label:"Select thumbnail position",value:"middle",changeProp:!0,options:[{id:"left",label:"Left"},{id:"middle",label:"Middle"},{id:"right",label:"Right"}]},{type:"number",name:"thumbMargin",label:"Thumb margin",tip:"Spacing between each thumbnails",changeProp:!0,min:0,value:"5"},{type:"number",name:"thumbWidth",label:"Thumb width",tip:"Width of each thumbnails",changeProp:!0,min:0,value:"100"}]}}},N1={autoplay:{category:{id:"autoplay-options",label:"Autoplay options"},type:"checkbox",label:"Autoplay",value:!0,subTraits:{false:[],true:[{type:"checkbox",name:"autoplayControls",label:"Autoplay controls",tip:"Show/hide autoplay controls",changeProp:!0,value:!0},{type:"checkbox",name:"progressBar",label:"Progress bar",tip:"Show autoplay progress bar",changeProp:!0,value:!0},{type:"checkbox",name:"forceSlideShowAutoplay",label:"Force autoplay",tip:"If false, autoplay will be stopped after first user action",changeProp:!0,value:!1},{type:"checkbox",name:"slideShowAutoplay",label:"Start autoplay",tip:"Enable autoplay on start",changeProp:!0,value:!1},{type:"number",name:"slideShowInterval",label:"Interval",tip:"The time (in ms) between each auto transition",changeProp:!0,min:0,step:50,value:5e3}]}}},F1={zoom:{category:{id:"zoom-options",label:"Zoom options"},type:"checkbox",label:"Zoom",value:!0,subTraits:{false:[],true:[{type:"checkbox",name:"actualSize",label:"Show actual size icon",changeProp:!0,value:!0},{type:"checkbox",name:"infiniteZoom",label:"Infinte zoom",changeProp:!0,value:!0},{type:"checkbox",name:"showZoomInOutIcons",label:"Show zoom in/out icons",changeProp:!0,value:!1},{type:"number",name:"scale",label:"Scale",tip:"Value of zoom should be incremented/decremented",changeProp:!0,min:0,value:1}]}}},tt="sourceType",ti="data-iframe",dn={name:"href",type:"file",label:"Image Source"},Ni={name:"data-src",label:"Video Source",placeholder:"https://www.youtube.com/watch?v=..."},hn={name:"data-poster",label:"Video Poster",type:"file"},Ws={name:"data-src",label:"External Source",placeholder:"https://some-external-source.com/...."},Wo={label:"Caption",name:"data-sub-html",placeholder:"My caption",changeProp:!1},H1={[Di]:{type:"button",label:"Toggle Gallery",command:(r,e)=>{var t,i;const l=e.target,n=(t=l==null?void 0:l.closestType(gt))==null?void 0:t.getView();if(n&&l){const s=((i=n.getLightGallery())==null?void 0:i.items)||[],a=Array.from(s).indexOf(l.getEl());a>=0&&n.toggleGallery(a)}}},[tt]:{type:"radio",label:"Source type",labelToTitle:!0,value:"image",subTraits:{image:[dn],video:[Ni,hn],external:[Ws]},options:[{id:"image",label:dn.label||"",icon:yt.image},{id:"video",label:Ni.label||"",icon:yt.video},{id:"external",label:Ws.label||"",icon:yt.external}]},subHtml:Wo},_1="lightGalleryComponent",Us="lgThumbnail",$1="lgVideo",Ks="lgAutoplay",Js="lgZoom",Ht="https://cdn.jsdelivr.net/npm/lightgallery@2.8.2",V1=function(r,e={}){const{Blocks:t,Components:i}=r,l="LightGallery",n="LightGallery Item",s={toolbarIconOpen:yt.eye,block:{},lgLicenseKey:"92DE1DB8-7986-4F02-B908-514F97678D28",defaultSrc:"https://placehold.co/200/777/white.png?text=Image",plugins:[Us,$1,Ks,Js],cdnScript:[`${Ht}/lightgallery.min.js`,`${Ht}/plugins/thumbnail/lg-thumbnail.min.js`,`${Ht}/plugins/video/lg-video.min.js`,`${Ht}/plugins/autoplay/lg-autoplay.min.js`,`${Ht}/plugins/zoom/lg-zoom.min.js`],cdnStyle:`${Ht}/css/lightgallery-bundle.min.css`,...e},{block:a,toolbarIconOpen:o,defaultSrc:c}=s,d=function(g){const b=this,w=window,{plugins:T,cdnScript:S,cdnStyle:z,inline:B,lgLicenseKey:E,...M}=g||{},A=F=>isNaN(F)?void 0:parseInt(F,10),P=()=>{var F;const G={...M,licenseKey:E,speed:A(M.speed),startAnimationDuration:A(M.startAnimationDuration),thumbMargin:A(M.thumbMargin),thumbWidth:A(M.thumbWidth),slideShowInterval:A(M.slideShowInterval),scale:A(M.scale),enableZoomAfter:A(M.enableZoomAfter),plugins:(T||[]).map(ee=>w[ee])};B&&(G.container=b,G.closable=!1);const _=(F=w.lightGallery)==null?void 0:F.call(w,b,G);B&&_.openGallery()};if(w.lightGallery)P();else{const{head:F}=document,G=Array.isArray(S)?[...S]:[S],_=Array.isArray(z)?[...z]:[z],ee=W=>{if(W.length){const U=document.createElement("link");U.href=W.shift(),U.rel="stylesheet",F.appendChild(U),ee(W)}},j=W=>{if(W.length){const U=document.createElement("script");U.src=W.shift(),U.onerror=U.onload=j.bind(null,W),F.appendChild(U)}else P()};ee(_),j(G)}},h=g=>{const b=g.getTrait(Di);if(!o||!b)return;const{toolbar:w}=g,T={id:Di,label:o,command:()=>setTimeout(()=>b.runCommand(),100)};!w.find(S=>S.id===T.id)&&(w==null||w.unshift(T))};let f=[];const u=s.plugins||[],p=cr(R1),m=u.includes(Us)?cr(D1):Rl,x=u.includes(Ks)?cr(N1):Rl,y=u.includes(Js)?cr(F1):Rl;i.addType(gt,{block:a&&{label:l,media:yt.gallery,category:"Extra",select:!0,...s.block},isComponent:g=>Si(g,Mi),extendFn:["init","initToolbar"],model:{defaults:{name:l,icon:yt.gallery,draggable:(g,b)=>!b.is(gt),attributes:{[Mi]:!0},components:{type:Gs},script:d,selector:"",exThumbImage:"",cdnScript:s.cdnScript,cdnStyle:s.cdnStyle,plugins:s.plugins,lgLicenseKey:s.lgLicenseKey,"script-props":["lgLicenseKey","cdnScript","cdnStyle","plugins","selector","exThumbImage",...p.propKeys,...m.propKeys,...x.propKeys,...y.propKeys],...p.props,...m.props,...x.props,...y.props,traits:[...p.traits,...m.traits,...x.traits,...y.traits]},init(){Dl(this,["thumbnail"]),Dl(this,["autoplay"]),Dl(this,["zoom"])},initToolbar(){h(this)}},extendFnView:["init"],view:{events:()=>({lgInit:"onLgInit",lgBeforeOpen:"onLgOpen",lgAfterClose:"onLgClose"}),init(){this.listenTo(this.model,i.events.scriptUnmount,this.destroyLightGallery)},getLightGallery(){return this.el.__lg},destroyLightGallery(){const g=this.getLightGallery();g==null||g.destroy()},disableLgInCanvas(){const g=this.getLightGallery();g.lgOpened=!0},isInlineGallery(){var g;const b=this.getLightGallery();return((g=b==null?void 0:b.settings)==null?void 0:g.container)===this.el},onLgInit(g){this.el.__lg=g.detail.instance,!this.isInlineGallery()&&this.disableLgInCanvas()},onLgOpen(){const{em:g}=this,{Canvas:b}=g,w=this.getLightGallery();f=b.getSpots(),setTimeout(()=>b.removeSpots()),w.__lgOpened=!0},onLgClose(){const g=this.getLightGallery();f.forEach(b=>this.em.Canvas.addSpot(b.attributes)),f=[],g.__lgOpened=!1,setTimeout(()=>this.disableLgInCanvas())},toggleGallery(g){const b=this.getLightGallery();if(b.__lgOpened)return b.closeGallery(!0);b.lgOpened=!1,b.openGallery(g)}}});const k=cr(H1);i.addType(Gs,{isComponent:g=>Si(g,qs)||g.tagName==="A"&&Si(g.parentElement,Mi),extendFn:["init","initToolbar"],model:{defaults:{tagName:"a",name:n,icon:yt.galleryItem,attributes:{[qs]:!0,href:c},components:{type:"image",attributes:{alt:"Image",src:c}},...k.props,traits:[...k.traits]},init(){const g=[tt].map(b=>`change:${b}`).join(" ");this.initSourceType(),this.on(g,this.updateTraits),this.updateTraits({init:!0}),this.initScriptUpdate(),I1(this,tt,this.triggerGalleryUpdate)},initToolbar(){h(this)},initScriptUpdate(){const g=[Wo.name].map(b=>`change:attributes:${b}`).join(" ");this.on(g,this.triggerGalleryUpdate)},triggerGalleryUpdate(...g){var b;(b=this.closestType(gt))==null||b.__scriptPropsChange(...g)},updateTraits(g={}){const{changed:b}=this,{init:w}=g;if(b[tt]||w){cn(this,tt);const T=this.getTrait(tt).getValue();if(T===Gt.image){this.removeAttributes([Ni.name,hn.name,ti]);const S=this.getTrait(dn.name);S.setValue(S.getValue()||c)}else T===Gt.video?this.removeAttributes([ti]):T===Gt.external&&this.addAttributes({[ti]:!0})}},initSourceType(){const g=this.getAttributes({noClass:!0,noStyle:!0});g[ti]?this.set(tt,Gt.external):(g[Ni.name]||g[hn.name])&&this.set(tt,Gt.video)}}}),nr({editor:r,plan:Pe.startup,licenseKey:s.licenseKey,pluginName:_1,cleanup:()=>{t.remove(gt),i.removeType(gt)}})},Um=lr(V1),Ie="swiper",Ar=`${Ie}-slide`,Jt=`${Ie}-wrapper`,Yt=`${Ie}-nav-prev`,Fi=`${Ie}-nav-next`,Xt=`${Ie}-pagination`,kr=`${Ie}-scrollbar`,me={slider:`<svg viewBox="0 0 24 24">
  <path d="M22 7.6c0-1-.5-1.6-1.3-1.6H3.4C2.5 6 2 6.7 2 7.6v9.8c0 1 .5 1.6 1.3 1.6h17.4c.8 0 1.3-.6 1.3-1.6V7.6zM21 18H3V7h18v11z" fill-rule="nonzero"/>
  <path d="M4 12.5L6 14v-3zM20 12.5L18 14v-3z"/>
</svg>`,effect:`<svg viewBox="0 0 24 24">
  <path d="M7.5 5.6 5 7l1.4-2.5L5 2l2.5 1.4L10 2 8.6 4.5 10 7 7.5 5.6m12 9.8L22 14l-1.4 2.5L22 19l-2.5-1.4L17 19l1.4-2.5L17 14l2.5 1.4M22 2l-1.4 2.5L22 7l-2.5-1.4L17 7l1.4-2.5L17 2l2.5 1.4L22 2m-8.7 10.8 2.5-2.5-2.1-2-2.5 2.4 2.1 2m1-5.4 2.4 2.3c.4.4.4 1 0 1.4L5 22.7a1 1 0 0 1-1.4 0l-2.3-2.3a1 1 0 0 1 0-1.4L13 7.3a1 1 0 0 1 1.4 0Z"/>
</svg>`,autoplay:`<svg viewBox="0 0 24 24">
  <path d="M5 6.3A1 1 0 0 1 5 5a1 1 0 0 1 1.3 0l6.8 5.4.3.3a2 2 0 0 1-2.8 2.8l-.3-.3L5 6.3M12 20a8 8 0 0 0 8-8 8 8 0 0 0-2.3-5.7L19 5a10 10 0 0 1 3 7 10 10 0 0 1-10 10A10 10 0 0 1 2 12h2a8 8 0 0 0 8 8m0-19a2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2 2 2 0 0 1 2-2Z"/>
</svg>`,pagination:`<svg viewBox="0 0 24 24">
  <path d="M16 12a2 2 0 0 1 2-2 2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2m-6 0a2 2 0 0 1 2-2 2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2m-6 0a2 2 0 0 1 2-2 2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2Z"/>
</svg>`,scrollbar:`<svg viewBox="0 0 24 24">
  <path d="M7.2 9.2 5.8 7.8 1.5 12l4.3 4.2 1.4-1.4L4.4 12zm9.6 5.6 1.4 1.4 4.3-4.2-4.3-4.2-1.4 1.4 2.8 2.8z"/>
  <path fill-rule="evenodd" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-2 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" clip-rule="evenodd"/>
</svg>`,parallax:`<svg viewBox="0 0 24 24">
  <path d="M12.6 23.3h-.2v.5h.2v-.5m.3-.2-.2.1v.5l.2.1v-.6m-.8 0v.6h.2v-.5z"/>
  <path fill="currentColor" d="M18 9.4a2.5 2.5 0 0 1 3 2.3v5.7a3 3 0 0 1-2.2 2.9h-.2L13 21.4a2.5 2.5 0 0 1-3-2.3v-5.7a3 3 0 0 1 2.2-2.9h.2zM14.5 6a2.5 2.5 0 0 1 3 2.3v.4l-5.3 1A4 4 0 0 0 9 13.4v4.8a2.5 2.5 0 0 1-2.5-2.4v-5.7a3 3 0 0 1 2.2-2.9H9zM11 2.6a2.5 2.5 0 0 1 3 2.3v.3l-5.3 1A4 4 0 0 0 5.5 10v4.8A2.5 2.5 0 0 1 3 12.3V6.6a3 3 0 0 1 2.2-2.9h.2z"/>
</svg>`,responsive:`<svg viewBox="0 0 24 24">
  <path d="M17 21q-.4 0-.7-.3T16 20V10q0-.8-.6-1.4T14 8h-3.5q-.4 0-.7-.3T9.5 7V4q0-.4.3-.7t.7-.3H20q.4 0 .7.3t.3.7v16q0 .4-.3.7t-.7.3zm-6.5 0q-.4 0-.7-.3t-.3-.7v-9q0-.4.3-.7t.7-.3H13q.4 0 .7.3t.3.7v9q0 .4-.3.7t-.7.3zM4 21q-.4 0-.7-.3T3 20v-9q0-.4.3-.7T4 10h2.5q.4 0 .7.3t.3.7v9q0 .4-.3.7t-.7.3z"/>
</svg>`,extra:`<svg viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3M5 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0m5 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0m7-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" clip-rule="evenodd"/>
</svg>`,reload:`<svg viewBox="0 0 24 24">
  <path d="M2 12c0 5 4 9 9 9 2.4 0 4.7-1 6.4-2.6l-1.5-1.5A6.7 6.7 0 0 1 11 19a7 7 0 1 1 7-7h-3l4 4h.1l3.9-4h-3a9 9 0 0 0-18 0Z"/>
</svg>`,prev:'<svg viewBox="0 0 24 24"><path d="M15.4 16.6 10.8 12l4.6-4.6L14 6l-6 6 6 6 1.4-1.4Z"/></svg>',next:'<svg viewBox="0 0 24 24"><path d="m8.6 16.6 4.6-4.6-4.6-4.6L10 6l6 6-6 6-1.4-1.4Z"/></svg>',add:`<svg viewBox="0 0 24 24">
  <path d="M12 20a8 8 0 1 1 0-16 8 8 0 0 1 0 16m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2m1 5h-2v4H7v2h4v4h2v-4h4v-2h-4V7Z"/>
</svg>`},Ys={id:"swiper-responsive",label:"Responsive",icon:me.responsive},Xs={id:"swiper-extra",label:"Extra",icon:me.extra},G1={actions:{type:"radio",label:!1,labelToTitle:!0,options:[{id:"r",label:"Reload slider",icon:me.reload},{id:"p",label:"Previous slide",icon:me.prev},{id:"n",label:"Next slide",icon:me.next},{id:"a",label:"Add new slide",icon:me.add}],setValue:({component:r,value:e})=>{var t;const i=(t=r.getView())==null?void 0:t.getSwiper();switch(e){case"r":r.reloadSlider();break;case"p":i==null||i.slidePrev();break;case"n":i==null||i.slideNext();break;case"a":r.addSlide();break}}},vertical:{type:"checkbox",label:"Vertical",value:!1},loop:{type:"checkbox",label:"Loop",value:!1},freeMode:{type:"checkbox",label:"Free mode",value:!1},autoHeight:{type:"checkbox",label:"Auto height",value:!1},navigation:{type:"checkbox",label:"Navigation",getValue:({component:r})=>!!r.findFirstType(Yt),setValue:({component:r,value:e})=>{var t,i;e?r.append([{type:Yt},{type:Fi}]):((t=r.findFirstType(Yt))==null||t.remove(),(i=r.findFirstType(Fi))==null||i.remove()),r.set({navigation:e})}},initialSlide:{type:"number",label:"Initial slide",min:0,value:"0"},speed:{type:"number",label:"Speed",tip:"Transition duration (in ms)",step:500,min:0,value:300},effect:{category:{id:"swiper-effect",label:"Effects",icon:me.effect},type:"select",label:"Effect Type",value:"slide",options:[{id:"slide",label:"Slide"},{id:"fade",label:"Fade"},{id:"cube",label:"Cube"},{id:"coverflow",label:"Coverflow"},{id:"flip",label:"Flip"},{id:"cards",label:"Cards"}],subTraits:{slide:[{type:"number",name:"slidesPerView",label:"Slides per view",changeProp:!0,min:1,value:1},{type:"number",name:"slidesPerGroup",label:"Slides per group",tip:"Numbers of slides for group sliding",changeProp:!0,min:1,value:1},{type:"number",name:"spaceBetween",label:"Space between",tip:"Distance between slides in px",changeProp:!0,min:0,value:0},{type:"number",name:"slidesOffsetBefore",label:"Slides offset before",tip:"Add additional slide offset in the beginning of the container (in px, before all slides)",changeProp:!0,min:0,value:0},{type:"number",name:"slidesOffsetAfter",label:"Slides offset after",tip:"Add additional slide offset in the end of the container (in px, after all slides)",changeProp:!0,min:0,value:0},{type:"checkbox",name:"centeredSlides",label:"Centered slides",tip:"If enabled, the active slide will be centered",changeProp:!0,value:!1}],fade:[{type:"checkbox",name:"crossFade",tip:"Enables slides cross fade",label:"Cross fade",changeProp:!0,value:!1}],cube:[{type:"checkbox",name:"cubeEffectShadow",label:"Shadow",changeProp:!0,value:!0},{type:"checkbox",name:"cubeEffectSlideShadows",label:"Slide shadows",changeProp:!0,value:!0},{type:"number",name:"cubeEffectShadowOffset",label:"Shadow offset",changeProp:!0,value:20},{type:"number",name:"cubeEffectShadowScale",label:"Shadow scale",changeProp:!0,value:.94}],coverflow:[{type:"number",name:"coverflowEffectDepth",tip:"Depth offset in px (slides translate in Z axis)",label:"Depth",changeProp:!0,min:0,value:100},{type:"number",name:"coverflowEffectModifier",tip:"Effect multiplier",label:"Modifier",changeProp:!0,step:.1,min:0,value:1},{type:"number",name:"coverflowEffectRotate",tip:"Slide rotate in degrees",label:"Rotate",changeProp:!0,min:0,value:50},{type:"number",name:"coverflowEffectScale",tip:"Slide scale effect",label:"Scale",changeProp:!0,min:0,step:.1,value:1},{type:"number",name:"coverflowEffectStretch",tip:"Stretch space between slides (in px)",label:"Stretch",changeProp:!0,min:0,value:0},{type:"checkbox",name:"coverflowEffectSlideShadows",tip:"Enables slides shadows",label:"Slide shadow",changeProp:!0,value:!0}],flip:[{type:"checkbox",name:"flipEffectLimitRotation",tip:"Limit edge slides rotation",label:"Limit rotation",changeProp:!0,value:!0},{type:"checkbox",name:"flipEffectSlideShadows",tip:"Enables slides shadows",label:"Slide shadows",changeProp:!0,value:!0}],cards:[{type:"number",name:"cardsEffectPerSlideOffset",tip:"Offset distance per slide (in px)",label:"Slide offset",changeProp:!0,min:0,value:8},{type:"number",name:"cardsEffectPerSlideRotate",tip:"Rotate angle per slide (in degrees)",label:"Slide rotate",changeProp:!0,min:0,value:2},{type:"checkbox",name:"cardsEffectRotate",tip:"Enables cards rotation",label:"Rotate",changeProp:!0,value:!0},{type:"checkbox",name:"cardsEffectSlideShadows",tip:"Enables slides shadows",label:"Slide shadows",changeProp:!0,value:!0}]}},autoplay:{category:{id:"swiper-autoplay",label:"Autoplay",icon:me.autoplay},type:"checkbox",label:"Enable Autoplay",value:!1,subTraits:{true:[{type:"number",name:"autoplayDelay",label:"Delay",changeProp:!0,value:3e3},{type:"checkbox",name:"autoplayDisableOnInteraction",label:"Disable on interaction",changeProp:!0,value:!0},{type:"checkbox",name:"autoplayWaitForTransition",label:"Wait for transition",changeProp:!0,value:!0},{type:"checkbox",name:"autoplayPauseOnMouseEnter",label:"Pause on mouse enter",changeProp:!0,value:!1},{type:"checkbox",name:"autoplayReverseDirection",label:"Reverse direction",changeProp:!0,value:!1},{type:"checkbox",name:"autoplayStopOnLastSlide",label:"Stop on last slide",changeProp:!0,value:!1}]}},pagination:{category:{id:"swiper-pagination",label:"Pagination",icon:me.pagination},type:"select",label:"Pagination Type",options:[{id:"none",label:"None"},{id:"bullets",label:"Bullets"},{id:"progressbar",label:"Progressbar"},{id:"fraction",label:"Fraction"}],getValue:({component:r})=>r.findFirstType(Xt)?r.get("pagination")||"bullets":"none",setValue:({component:r,value:e})=>{const t=r.findFirstType(Xt);t==null||t.remove(),e!=="none"&&r.append({type:Xt}),r.set({pagination:e})},subTraits:{bullets:[{type:"checkbox",name:"dynamicBullets",label:"Dynamic bullets",changeProp:!0,value:!1},{type:"checkbox",name:"clickableBullets",label:"Clickable bullets",changeProp:!0,value:!0}],progressbar:[{type:"checkbox",name:"progressbarOpposite",label:"Progress opposite",changeProp:!0,value:!1}]}},scrollbar:{category:{id:"swiper-scrollbar",label:"Scrollbar",icon:me.scrollbar},type:"checkbox",label:"Enable Scrollbar",getValue:({component:r})=>!!r.findFirstType(kr),setValue:({component:r,value:e})=>{const t=r.findFirstType(kr);t==null||t.remove(),e&&r.append({type:kr}),r.set({scrollbar:e})},subTraits:{false:[],true:[{type:"checkbox",name:"scrollbarDraggable",label:"Draggable",changeProp:!0,value:!1},{type:"checkbox",name:"scrollbarHide",label:"Hide",tip:"Hide scrollbar automatically after user interaction",changeProp:!0,value:!0}]}},parallax:{category:{id:"swiper-parallax",label:"Parallax",icon:me.parallax},type:"checkbox",label:"Enable Parallax",value:!1},mobile:{category:Ys,type:"checkbox",label:"Enable mobile breakpoint",value:!1,subTraits:{true:[{type:"number",name:"mobileBreakpoint",label:"Mobile breakpoint",tip:"Slide values below will be applied when the screen width is greater than this value",changeProp:!0,min:1,value:460},{type:"number",name:"mobileSlidesPerView",label:"Slides per view",changeProp:!0,min:1,value:1},{type:"number",name:"mobileSlidesPerGroup",label:"Slides per group",changeProp:!0,min:1,value:1},{type:"number",name:"mobileSpaceBetween",label:"Space between",changeProp:!0,min:0,value:0}]}},tablet:{category:Ys,type:"checkbox",label:"Enable tablet breakpoint",value:!1,subTraits:{true:[{type:"number",name:"tabletBreakpoint",label:"Tablet breakpoint",tip:"Slide values below will be applied when the screen width is greater than this value",changeProp:!0,min:1,value:991},{type:"number",name:"tabletSlidesPerView",label:"Slides per view",changeProp:!0,min:1,value:1},{type:"number",name:"tabletSlidesPerGroup",label:"Slides per group",changeProp:!0,min:1,value:1},{type:"number",name:"tabletSpaceBetween",label:"Space between",changeProp:!0,min:0,value:0}]}},allowTouchMove:{category:Xs,type:"checkbox",label:"Allow touch move",tip:"Allow touch interactions",value:!0},grabCursor:{category:Xs,type:"checkbox",label:"Grab cursor",tip:'If enabled, the user will see the "grab" cursor when hover the slider',value:!1}},Zs="Slider",fn="swiper",sr=`${fn}-`,q1=(r,e)=>{const{Components:t,Blocks:i,Commands:l}=r,{block:n}=e,s=f1(G1),a="core:preview",o=l.events,c=function(f){const u=this,p=window,m=u.__onLoad,x=u.__activeSlide,y=u.__inPreview,{cdnScript:k,cdnStyle:g,slidesPerView:b}=f||{},w=S=>isNaN(S)?void 0:parseFloat(S),T=()=>{const S={loop:f.loop,speed:f.speed,initialSlide:f.initialSlide,direction:f.vertical?"vertical":"horizontal",effect:f.effect,freeMode:f.freeMode,parallax:f.parallax,autoHeight:f.autoHeight,allowTouchMove:f.allowTouchMove,grabCursor:f.grabCursor,simulateTouch:!0,breakpoints:{},slidesPerView:isNaN(b)?b:w(b),slidesPerGroup:w(f.slidesPerGroup),spaceBetween:w(f.spaceBetween),slidesOffsetBefore:w(f.slidesOffsetBefore),slidesOffsetAfter:w(f.slidesOffsetAfter),centeredSlides:f.centeredSlides,fadeEffect:{crossFade:f.crossFade},cubeEffect:{shadow:f.cubeEffectShadow,slideShadows:f.cubeEffectSlideShadows,shadowOffset:w(f.cubeEffectShadowOffset),shadowScale:w(f.cubeEffectShadowScale)},coverflowEffect:{depth:w(f.coverflowEffectDepth),modifier:w(f.coverflowEffectModifier),rotate:w(f.coverflowEffectRotate),scale:w(f.coverflowEffectScale),stretch:w(f.coverflowEffectStretch),slideShadows:f.coverflowEffectSlideShadows},flipEffect:{limitRotation:f.flipEffectLimitRotation,slideShadows:f.flipEffectSlideShadows},cardsEffect:{perSlideOffset:w(f.cardsEffectPerSlideOffset),perSlideRotate:w(f.cardsEffectPerSlideRotate),rotate:f.cardsEffectRotate,slideShadows:f.cardsEffectSlideShadows},navigation:{nextEl:u.querySelector(".swiper-button-next"),prevEl:u.querySelector(".swiper-button-prev")},pagination:{type:f.pagination||"bullets",dynamicBullets:f.dynamicBullets,clickable:f.clickableBullets,progressbarOpposite:f.progressbarOpposite,el:u.querySelector(".swiper-pagination")},scrollbar:{el:u.querySelector(".swiper-scrollbar"),draggable:f.scrollbarDraggable,hide:f.scrollbarHide},autoplay:f.autoplay&&{delay:f.autoplayDelay,disableOnInteraction:f.autoplayDisableOnInteraction,pauseOnMouseEnter:f.autoplayPauseOnMouseEnter,reverseDirection:f.autoplayReverseDirection,stopOnLastSlide:f.autoplayStopOnLastSlide,waitForTransition:f.autoplayWaitForTransition}};if(f.tablet){const{tabletBreakpoint:B,tabletSlidesPerView:E}=f,M=w(B);S.breakpoints[M]={slidesPerView:isNaN(E)?E:w(E),slidesPerGroup:w(f.tabletSlidesPerGroup),spaceBetween:w(f.tabletSpaceBetween)}}if(f.mobile){const{mobileBreakpoint:B,mobileSlidesPerView:E}=f,M=w(B);S.breakpoints[M]={slidesPerView:isNaN(E)?E:w(E),slidesPerGroup:w(f.mobileSlidesPerGroup),spaceBetween:w(f.mobileSpaceBetween)}}m&&!y&&(S.simulateTouch=!1),x&&(S.initialSlide=x);const z=new p.Swiper(u,S);m==null||m(z)};if(p.Swiper)T();else{const{head:S}=document,z=Array.isArray(k)?[...k]:[k],B=Array.isArray(g)?[...g]:[g],E=A=>{if(A.length){const P=document.createElement("link");P.href=A.shift(),P.rel="stylesheet",S.appendChild(P),E(A)}},M=A=>{if(A.length){const P=document.createElement("script");P.src=A.shift(),P.onerror=P.onload=M.bind(null,A),S.appendChild(P)}else T()};E(B),M(z)}},d=(f=0)=>({type:Ar,style:{padding:"50px"},components:{type:"text",components:{type:"textnode",content:`Slide ${f}`}}}),h=t.getType("default").model;return t.addType(Ie,{block:n&&{label:Zs,media:me.slider,category:"Extra",select:!0,...e.block},isComponent:f=>At(f,fn),model:{defaults:()=>({name:Zs,icon:me.slider,classes:fn,draggable:(f,u)=>!u.is(Ie),components:[{type:Jt,components:[d(1),d(2),d(3)]},{type:Xt}],script:c,cdnScript:e.cdnScript,cdnStyle:e.cdnStyle,"script-props":["cdnScript","cdnStyle",...s.propKeys],...s.props,traits:[...s.traits]}),init(){const{em:f}=this;u1(this,s.traits),p1(this,s.propKeys),this.listenTo(f,`${o.runCommand}${a}`,this.onPreviewOn),this.listenTo(f,`${o.stopCommand}${a}`,this.onPreviewOff)},onPreviewOn(){this.__inPreview=!0,this.reloadSlider()},onPreviewOff(){this.__inPreview=!1,this.reloadSlider()},reloadSlider(){this.trigger("rerender")},addSlide(){const f=this.findFirstType(Jt);f==null||f.append(this.getNewSlideComponentDef())},getNewSlideComponentDef(){var f;const u=((f=this.findFirstType(Jt))==null?void 0:f.components().length)||0;return{type:Ar,components:{type:"text",components:{type:"textnode",content:`Slide ${u+1}`}}}},toJSON(...f){const u=h.prototype.toJSON.apply(this,f);return s.propsNoValues.forEach(p=>delete u[p]),delete u["script-props"],u}},view:{init(){this.listenTo(this.model,t.events.scriptUnmount,this.destroySwiper)},getSwiper(){return this.el.swiper},destroySwiper(){var f;(f=this.getSwiper())==null||f.destroy()},onRender(){const f=this.el;f.__onLoad=u=>u.on("slideChange",()=>this.__activeSlide=u.activeIndex),f.__activeSlide=this.__activeSlide,f.__inPreview=this.model.__inPreview}}}),()=>{t.removeType(Ie),i.remove(Ie)}},W1="Nav Prev",U1="Nav Next",ri=`${sr}button-prev`,ii=`${sr}button-next`,K1=r=>{const{Components:e}=r,t=i=>({type:"svg",selectable:!1,hoverable:!1,attributes:{viewBox:"0 0 27 44"},components:{type:"svg-in",tagName:"path",attributes:{d:i,fill:"currentColor"}}});return e.addType(Yt,{isComponent:i=>At(i,ri),model:{defaults:{name:W1,classes:ri,copyable:!1,highlightable:!1,droppable:!1,draggable:!1,selectable:!1,hoverable:!1,layerable:!1,components:t("M0,22L22,0l2.1,2.1L4.2,22l19.9,19.9L22,44L0,22L0,22L0,22z"),styles:`
          .${ri} {
            color: inherit;
          }
          .${ri}:after {
            content: none;
          }
        `}}}),e.addType(Fi,{extend:Yt,isComponent:i=>At(i,ii),model:{defaults:{name:U1,classes:ii,components:t("M27,22L27,22L5,44l-2.1-2.1L22.8,22L2.9,2.1L5,0L27,22L27,22z"),styles:`
          .${ii} {
            color: inherit;
          }
          .${ii}:after {
            content: none;
          }
        `}}}),()=>{e.removeType(Yt),e.removeType(Fi)}},J1=r=>{const{Components:e}=r,t=`${sr}pagination`;return e.addType(Xt,{isComponent:i=>At(i,t),model:{defaults:{name:"Pagination",classes:t,copyable:!1,highlightable:!1,droppable:!1,draggable:!1,selectable:!1,hoverable:!1,layerable:!1,styles:`
          .${t}-bullet-active {
            background-color: currentColor;
          }
          .${t}-progressbar-fill {
            --swiper-pagination-color: currentColor;
          }
        `}}}),()=>{e.removeType(Xt)}},Y1="Scrollbar",Qs=`${sr}scrollbar`,X1=r=>{const{Components:e}=r;return e.addType(kr,{isComponent:t=>At(t,Qs),model:{defaults:{name:Y1,classes:Qs,copyable:!1,highlightable:!1,removable:!1,selectable:!1,hoverable:!1,layerable:!1,droppable:!1,draggable:!1}}}),()=>{e.removeType(kr)}},Z1="Slide",ea=`${sr}slide`,Q1=r=>{const{Components:e}=r;return e.addType(Ar,{isComponent:t=>At(t,ea),model:{defaults:{name:Z1,classes:ea,icon:me.slider,draggable:(t,i)=>i.is(Jt)}}}),()=>{e.removeType(Ar)}},eu="Wrapper",ta=`${sr}wrapper`,tu=r=>{const{Components:e}=r,{events:t}=e;return e.addType(Jt,{isComponent:i=>At(i,ta),model:{defaults:{name:eu,icon:me.slider,classes:ta,copyable:!1,removable:!1,draggable:!1,highlightable:!1,droppable:i=>i.is(Ar)},init(){const i=this.components();this.listenTo(i,"add remove",this.updateSlider)},updateSlider(i){const l=this.closestType(Ie);if(l){const n=l.getView();l.reloadSlider(),this.em.once(t.scriptMount,()=>{setTimeout(()=>{var s;return(s=n.getSwiper())==null?void 0:s.slideTo(i.index())},100)})}}}}),()=>{e.removeType(Jt)}},ru="swiperComponent",iu=function(r,e={}){const t={block:{},cdnScript:"https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js",cdnStyle:"https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css",...e},i=[q1(r,t),K1(r),tu(r),Q1(r),J1(r),X1(r)];nr({editor:r,plan:Pe.startup,licenseKey:t.licenseKey,pluginName:ru,cleanup:()=>{i.forEach(l=>l())}})},Km=lr(iu),lu=r=>r.dispatchEvent(new CustomEvent("input"));function nu(r,e){if(!e)return()=>{};const t=r.Components.events,i=d=>r.getSelectedAll().includes(d),l=d=>d.isInstanceOf("text")&&!d.isChildOf("text"),n=d=>d.isChildOf("text"),s=d=>r.getEditing()===d,a=(d,h={})=>{d.trigger("focus",h.event)},o=(d,h)=>{i(d)&&l(d)&&!s(d)&&a(d,h)},c=(d,h)=>{if(i(d)&&!l(d)&&n(d)){const f=d.parents().find(u=>u.isInstanceOf("text"));f&&(a(f,h),setTimeout(()=>r.select(f),0))}};return r.on(t.select,o),r.on(t.selectBefore,c),()=>{r.off(t.select,o),r.off(t.selectBefore,c)}}const Rn=new WeakMap,su=(r,e)=>{Rn.set(r,e)},au=r=>{Rn.delete(r)},Nl=r=>Rn.get(r),li=r=>{const e=r.target,t=e.closest(".tox"),i=e.matches(".ephox-snooker-resizer-bar");(t||i)&&r.stopPropagation()},ra=r=>{r.stopPropagation(),r.preventDefault()},ou=(r,e)=>{const t=r.getDoc(),i=r.getWin();if(e!=null&&e.event){const{event:l}=e,{clientX:n,clientY:s}=l;let a;if(t.caretRangeFromPoint)a=t.caretRangeFromPoint(n,s);else if(t.caretPositionFromPoint){const o=t.caretPositionFromPoint(n,s);a=t.createRange(),a==null||a.setStart(o.offsetNode,o.offset)}if(a){const o=i.getSelection();o==null||o.removeAllRanges(),o==null||o.addRange(a),r.selection.setRng(a)}}else r.execCommand("SelectAll")},cu=r=>{var e,t;const{el:i,editor:l,componentView:n}=r,s=l.runCommand($e.getStateTheme),a=n.model,o={target:i,inline:!0,skin:(s==null?void 0:s.theme)===Ho.dark?"oxide-dark":"oxide",menubar:!1,image_advtab:!0,paste_data_images:!0,statusbar:!1,branding:!1,forced_root_block:"div",plugins:"advlist autolink lists link image media table",toolbar_mode:"sliding",toolbar:"bold italic underline strikethrough forecolor backcolor alignleft aligncenter alignright alignjustify link image | fontfamily fontsize bullist numlist outdent indent table"},c=((t=(e=r.pluginOpts)==null?void 0:e.loadConfig)==null?void 0:t.call(e,{config:o,editor:l,componentView:n,component:a}))||{};return{...o,...c}},ia=(r,e=document)=>new Promise((t,i)=>{const l=Array.isArray(r)?[...r]:[r],{head:n}=e,s=a=>{if(a.length){const o=e.createElement("script");o.src=a.shift(),o.onload=s.bind(null,a),o.onerror=i,n.appendChild(o)}else t()};s(l)}),du="rteTinyMce",hu=function(r,e={}){const t={cdnScript:"https://cdn.jsdelivr.net/npm/tinymce@6.8.5/tinymce.min.js",...e},{cdnScript:i}=t,l=r.Canvas.events,n=async(o,c)=>{const d=o.ownerDocument,h=d.defaultView,f=c==null?void 0:c.view;if(!h||!f){console.warn("Missing required data",{win:h,componentView:f});return}const u=cu({el:o,editor:r,componentView:f,pluginOpts:t}),p=(await h.tinymce.init(u))[0];if(!p)return;const m=(await window.tinymce.init({...u,target:document.createElement("div")}))[0];return p.ui.show(),d.body.addEventListener("mousedown",li),document.body.addEventListener("mousedown",li),p.on("Change",()=>lu(o)),p.on("blur",()=>p.ui.show()),p.on("OpenWindow",function(){var x;const y=(x=d.querySelector(".tox-dialog"))==null?void 0:x.closest(".tox");y&&(y==null?void 0:y.ownerDocument)!==document&&(document.body.appendChild(y),p.once("CloseWindow",()=>{y&&y.ownerDocument===document&&d.body.appendChild(y)}))}),o.addEventListener("dragstart",ra,{capture:!0}),r.runCommand($e.setStateContextMenu,{enabled:!1}),ou(p,c),{rteEditor:p,rteEditorShallow:m}},s=(o,c)=>{o.ownerDocument.body.removeEventListener("mousedown",li),document.body.removeEventListener("mousedown",li),o.removeEventListener("dragstart",ra,{capture:!0}),r.runCommand($e.setStateContextMenu,{enabled:!0}),c.rteEditor.destroy(),c.rteEditorShallow.destroy()};r.on(l.frameLoad,async({window:o})=>{ia(i,o.document)}),r.onReady(()=>{ia(i,document)}),r.setCustomRte({parseContent:!0,async enable(o,c,d){const h=Nl(o);if(h)return h.rteEditor;const f=await n(o,d);return f&&su(o,f),f==null?void 0:f.rteEditor},disable(o){const c=Nl(o);c&&(au(o),s(o,c))},getContent(o){var c,d;const h=Nl(o);return h?(d=(c=h.rteEditor).getContent)==null?void 0:d.call(c):o.innerHTML}});const a=nu(r,t.enableOnClick);nr({editor:r,licenseKey:t.licenseKey,plan:Pe.startup,pluginName:du,cleanup:()=>{r.RichTextEditor.customRte=void 0,a()}})},ni=lr(hu);function ae(r){this.content=r}ae.prototype={constructor:ae,find:function(r){for(var e=0;e<this.content.length;e+=2)if(this.content[e]===r)return e;return-1},get:function(r){var e=this.find(r);return e==-1?void 0:this.content[e+1]},update:function(r,e,t){var i=t&&t!=r?this.remove(t):this,l=i.find(r),n=i.content.slice();return l==-1?n.push(t||r,e):(n[l+1]=e,t&&(n[l]=t)),new ae(n)},remove:function(r){var e=this.find(r);if(e==-1)return this;var t=this.content.slice();return t.splice(e,2),new ae(t)},addToStart:function(r,e){return new ae([r,e].concat(this.remove(r).content))},addToEnd:function(r,e){var t=this.remove(r).content.slice();return t.push(r,e),new ae(t)},addBefore:function(r,e,t){var i=this.remove(e),l=i.content.slice(),n=i.find(r);return l.splice(n==-1?l.length:n,0,e,t),new ae(l)},forEach:function(r){for(var e=0;e<this.content.length;e+=2)r(this.content[e],this.content[e+1])},prepend:function(r){return r=ae.from(r),r.size?new ae(r.content.concat(this.subtract(r).content)):this},append:function(r){return r=ae.from(r),r.size?new ae(this.subtract(r).content.concat(r.content)):this},subtract:function(r){var e=this;r=ae.from(r);for(var t=0;t<r.content.length;t+=2)e=e.remove(r.content[t]);return e},toObject:function(){var r={};return this.forEach(function(e,t){r[e]=t}),r},get size(){return this.content.length>>1}};ae.from=function(r){if(r instanceof ae)return r;var e=[];if(r)for(var t in r)e.push(t,r[t]);return new ae(e)};function Uo(r,e,t){for(let i=0;;i++){if(i==r.childCount||i==e.childCount)return r.childCount==e.childCount?null:t;let l=r.child(i),n=e.child(i);if(l==n){t+=l.nodeSize;continue}if(!l.sameMarkup(n))return t;if(l.isText&&l.text!=n.text){for(let s=0;l.text[s]==n.text[s];s++)t++;return t}if(l.content.size||n.content.size){let s=Uo(l.content,n.content,t+1);if(s!=null)return s}t+=l.nodeSize}}function Ko(r,e,t,i){for(let l=r.childCount,n=e.childCount;;){if(l==0||n==0)return l==n?null:{a:t,b:i};let s=r.child(--l),a=e.child(--n),o=s.nodeSize;if(s==a){t-=o,i-=o;continue}if(!s.sameMarkup(a))return{a:t,b:i};if(s.isText&&s.text!=a.text){let c=0,d=Math.min(s.text.length,a.text.length);for(;c<d&&s.text[s.text.length-c-1]==a.text[a.text.length-c-1];)c++,t--,i--;return{a:t,b:i}}if(s.content.size||a.content.size){let c=Ko(s.content,a.content,t-1,i-1);if(c)return c}t-=o,i-=o}}class O{constructor(e,t){if(this.content=e,this.size=t||0,t==null)for(let i=0;i<e.length;i++)this.size+=e[i].nodeSize}nodesBetween(e,t,i,l=0,n){for(let s=0,a=0;a<t;s++){let o=this.content[s],c=a+o.nodeSize;if(c>e&&i(o,l+a,n||null,s)!==!1&&o.content.size){let d=a+1;o.nodesBetween(Math.max(0,e-d),Math.min(o.content.size,t-d),i,l+d)}a=c}}descendants(e){this.nodesBetween(0,this.size,e)}textBetween(e,t,i,l){let n="",s=!0;return this.nodesBetween(e,t,(a,o)=>{let c=a.isText?a.text.slice(Math.max(e,o)-o,t-o):a.isLeaf?l?typeof l=="function"?l(a):l:a.type.spec.leafText?a.type.spec.leafText(a):"":"";a.isBlock&&(a.isLeaf&&c||a.isTextblock)&&i&&(s?s=!1:n+=i),n+=c},0),n}append(e){if(!e.size)return this;if(!this.size)return e;let t=this.lastChild,i=e.firstChild,l=this.content.slice(),n=0;for(t.isText&&t.sameMarkup(i)&&(l[l.length-1]=t.withText(t.text+i.text),n=1);n<e.content.length;n++)l.push(e.content[n]);return new O(l,this.size+e.size)}cut(e,t=this.size){if(e==0&&t==this.size)return this;let i=[],l=0;if(t>e)for(let n=0,s=0;s<t;n++){let a=this.content[n],o=s+a.nodeSize;o>e&&((s<e||o>t)&&(a.isText?a=a.cut(Math.max(0,e-s),Math.min(a.text.length,t-s)):a=a.cut(Math.max(0,e-s-1),Math.min(a.content.size,t-s-1))),i.push(a),l+=a.nodeSize),s=o}return new O(i,l)}cutByIndex(e,t){return e==t?O.empty:e==0&&t==this.content.length?this:new O(this.content.slice(e,t))}replaceChild(e,t){let i=this.content[e];if(i==t)return this;let l=this.content.slice(),n=this.size+t.nodeSize-i.nodeSize;return l[e]=t,new O(l,n)}addToStart(e){return new O([e].concat(this.content),this.size+e.nodeSize)}addToEnd(e){return new O(this.content.concat(e),this.size+e.nodeSize)}eq(e){if(this.content.length!=e.content.length)return!1;for(let t=0;t<this.content.length;t++)if(!this.content[t].eq(e.content[t]))return!1;return!0}get firstChild(){return this.content.length?this.content[0]:null}get lastChild(){return this.content.length?this.content[this.content.length-1]:null}get childCount(){return this.content.length}child(e){let t=this.content[e];if(!t)throw new RangeError("Index "+e+" out of range for "+this);return t}maybeChild(e){return this.content[e]||null}forEach(e){for(let t=0,i=0;t<this.content.length;t++){let l=this.content[t];e(l,i,t),i+=l.nodeSize}}findDiffStart(e,t=0){return Uo(this,e,t)}findDiffEnd(e,t=this.size,i=e.size){return Ko(this,e,t,i)}findIndex(e,t=-1){if(e==0)return si(0,e);if(e==this.size)return si(this.content.length,e);if(e>this.size||e<0)throw new RangeError(`Position ${e} outside of fragment (${this})`);for(let i=0,l=0;;i++){let n=this.child(i),s=l+n.nodeSize;if(s>=e)return s==e||t>0?si(i+1,s):si(i,l);l=s}}toString(){return"<"+this.toStringInner()+">"}toStringInner(){return this.content.join(", ")}toJSON(){return this.content.length?this.content.map(e=>e.toJSON()):null}static fromJSON(e,t){if(!t)return O.empty;if(!Array.isArray(t))throw new RangeError("Invalid input for Fragment.fromJSON");return new O(t.map(e.nodeFromJSON))}static fromArray(e){if(!e.length)return O.empty;let t,i=0;for(let l=0;l<e.length;l++){let n=e[l];i+=n.nodeSize,l&&n.isText&&e[l-1].sameMarkup(n)?(t||(t=e.slice(0,l)),t[t.length-1]=n.withText(t[t.length-1].text+n.text)):t&&t.push(n)}return new O(t||e,i)}static from(e){if(!e)return O.empty;if(e instanceof O)return e;if(Array.isArray(e))return this.fromArray(e);if(e.attrs)return new O([e],e.nodeSize);throw new RangeError("Can not convert "+e+" to a Fragment"+(e.nodesBetween?" (looks like multiple versions of prosemirror-model were loaded)":""))}}O.empty=new O([],0);const Fl={index:0,offset:0};function si(r,e){return Fl.index=r,Fl.offset=e,Fl}function Hi(r,e){if(r===e)return!0;if(!(r&&typeof r=="object")||!(e&&typeof e=="object"))return!1;let t=Array.isArray(r);if(Array.isArray(e)!=t)return!1;if(t){if(r.length!=e.length)return!1;for(let i=0;i<r.length;i++)if(!Hi(r[i],e[i]))return!1}else{for(let i in r)if(!(i in e)||!Hi(r[i],e[i]))return!1;for(let i in e)if(!(i in r))return!1}return!0}class K{constructor(e,t){this.type=e,this.attrs=t}addToSet(e){let t,i=!1;for(let l=0;l<e.length;l++){let n=e[l];if(this.eq(n))return e;if(this.type.excludes(n.type))t||(t=e.slice(0,l));else{if(n.type.excludes(this.type))return e;!i&&n.type.rank>this.type.rank&&(t||(t=e.slice(0,l)),t.push(this),i=!0),t&&t.push(n)}}return t||(t=e.slice()),i||t.push(this),t}removeFromSet(e){for(let t=0;t<e.length;t++)if(this.eq(e[t]))return e.slice(0,t).concat(e.slice(t+1));return e}isInSet(e){for(let t=0;t<e.length;t++)if(this.eq(e[t]))return!0;return!1}eq(e){return this==e||this.type==e.type&&Hi(this.attrs,e.attrs)}toJSON(){let e={type:this.type.name};for(let t in this.attrs){e.attrs=this.attrs;break}return e}static fromJSON(e,t){if(!t)throw new RangeError("Invalid input for Mark.fromJSON");let i=e.marks[t.type];if(!i)throw new RangeError(`There is no mark type ${t.type} in this schema`);let l=i.create(t.attrs);return i.checkAttrs(l.attrs),l}static sameSet(e,t){if(e==t)return!0;if(e.length!=t.length)return!1;for(let i=0;i<e.length;i++)if(!e[i].eq(t[i]))return!1;return!0}static setFrom(e){if(!e||Array.isArray(e)&&e.length==0)return K.none;if(e instanceof K)return[e];let t=e.slice();return t.sort((i,l)=>i.type.rank-l.type.rank),t}}K.none=[];class _i extends Error{}class L{constructor(e,t,i){this.content=e,this.openStart=t,this.openEnd=i}get size(){return this.content.size-this.openStart-this.openEnd}insertAt(e,t){let i=Yo(this.content,e+this.openStart,t);return i&&new L(i,this.openStart,this.openEnd)}removeBetween(e,t){return new L(Jo(this.content,e+this.openStart,t+this.openStart),this.openStart,this.openEnd)}eq(e){return this.content.eq(e.content)&&this.openStart==e.openStart&&this.openEnd==e.openEnd}toString(){return this.content+"("+this.openStart+","+this.openEnd+")"}toJSON(){if(!this.content.size)return null;let e={content:this.content.toJSON()};return this.openStart>0&&(e.openStart=this.openStart),this.openEnd>0&&(e.openEnd=this.openEnd),e}static fromJSON(e,t){if(!t)return L.empty;let i=t.openStart||0,l=t.openEnd||0;if(typeof i!="number"||typeof l!="number")throw new RangeError("Invalid input for Slice.fromJSON");return new L(O.fromJSON(e,t.content),i,l)}static maxOpen(e,t=!0){let i=0,l=0;for(let n=e.firstChild;n&&!n.isLeaf&&(t||!n.type.spec.isolating);n=n.firstChild)i++;for(let n=e.lastChild;n&&!n.isLeaf&&(t||!n.type.spec.isolating);n=n.lastChild)l++;return new L(e,i,l)}}L.empty=new L(O.empty,0,0);function Jo(r,e,t){let{index:i,offset:l}=r.findIndex(e),n=r.maybeChild(i),{index:s,offset:a}=r.findIndex(t);if(l==e||n.isText){if(a!=t&&!r.child(s).isText)throw new RangeError("Removing non-flat range");return r.cut(0,e).append(r.cut(t))}if(i!=s)throw new RangeError("Removing non-flat range");return r.replaceChild(i,n.copy(Jo(n.content,e-l-1,t-l-1)))}function Yo(r,e,t,i){let{index:l,offset:n}=r.findIndex(e),s=r.maybeChild(l);if(n==e||s.isText)return r.cut(0,e).append(t).append(r.cut(e));let a=Yo(s.content,e-n-1,t);return a&&r.replaceChild(l,s.copy(a))}function fu(r,e,t){if(t.openStart>r.depth)throw new _i("Inserted content deeper than insertion position");if(r.depth-t.openStart!=e.depth-t.openEnd)throw new _i("Inconsistent open depths");return Xo(r,e,t,0)}function Xo(r,e,t,i){let l=r.index(i),n=r.node(i);if(l==e.index(i)&&i<r.depth-t.openStart){let s=Xo(r,e,t,i+1);return n.copy(n.content.replaceChild(l,s))}else if(t.content.size)if(!t.openStart&&!t.openEnd&&r.depth==i&&e.depth==i){let s=r.parent,a=s.content;return Ct(s,a.cut(0,r.parentOffset).append(t.content).append(a.cut(e.parentOffset)))}else{let{start:s,end:a}=uu(t,r);return Ct(n,Qo(r,s,a,e,i))}else return Ct(n,$i(r,e,i))}function Zo(r,e){if(!e.type.compatibleContent(r.type))throw new _i("Cannot join "+e.type.name+" onto "+r.type.name)}function un(r,e,t){let i=r.node(t);return Zo(i,e.node(t)),i}function Mt(r,e){let t=e.length-1;t>=0&&r.isText&&r.sameMarkup(e[t])?e[t]=r.withText(e[t].text+r.text):e.push(r)}function Sr(r,e,t,i){let l=(e||r).node(t),n=0,s=e?e.index(t):l.childCount;r&&(n=r.index(t),r.depth>t?n++:r.textOffset&&(Mt(r.nodeAfter,i),n++));for(let a=n;a<s;a++)Mt(l.child(a),i);e&&e.depth==t&&e.textOffset&&Mt(e.nodeBefore,i)}function Ct(r,e){return r.type.checkContent(e),r.copy(e)}function Qo(r,e,t,i,l){let n=r.depth>l&&un(r,e,l+1),s=i.depth>l&&un(t,i,l+1),a=[];return Sr(null,r,l,a),n&&s&&e.index(l)==t.index(l)?(Zo(n,s),Mt(Ct(n,Qo(r,e,t,i,l+1)),a)):(n&&Mt(Ct(n,$i(r,e,l+1)),a),Sr(e,t,l,a),s&&Mt(Ct(s,$i(t,i,l+1)),a)),Sr(i,null,l,a),new O(a)}function $i(r,e,t){let i=[];if(Sr(null,r,t,i),r.depth>t){let l=un(r,e,t+1);Mt(Ct(l,$i(r,e,t+1)),i)}return Sr(e,null,t,i),new O(i)}function uu(r,e){let t=e.depth-r.openStart,i=e.node(t).copy(r.content);for(let l=t-1;l>=0;l--)i=e.node(l).copy(O.from(i));return{start:i.resolveNoCache(r.openStart+t),end:i.resolveNoCache(i.content.size-r.openEnd-t)}}class Or{constructor(e,t,i){this.pos=e,this.path=t,this.parentOffset=i,this.depth=t.length/3-1}resolveDepth(e){return e==null?this.depth:e<0?this.depth+e:e}get parent(){return this.node(this.depth)}get doc(){return this.node(0)}node(e){return this.path[this.resolveDepth(e)*3]}index(e){return this.path[this.resolveDepth(e)*3+1]}indexAfter(e){return e=this.resolveDepth(e),this.index(e)+(e==this.depth&&!this.textOffset?0:1)}start(e){return e=this.resolveDepth(e),e==0?0:this.path[e*3-1]+1}end(e){return e=this.resolveDepth(e),this.start(e)+this.node(e).content.size}before(e){if(e=this.resolveDepth(e),!e)throw new RangeError("There is no position before the top-level node");return e==this.depth+1?this.pos:this.path[e*3-1]}after(e){if(e=this.resolveDepth(e),!e)throw new RangeError("There is no position after the top-level node");return e==this.depth+1?this.pos:this.path[e*3-1]+this.path[e*3].nodeSize}get textOffset(){return this.pos-this.path[this.path.length-1]}get nodeAfter(){let e=this.parent,t=this.index(this.depth);if(t==e.childCount)return null;let i=this.pos-this.path[this.path.length-1],l=e.child(t);return i?e.child(t).cut(i):l}get nodeBefore(){let e=this.index(this.depth),t=this.pos-this.path[this.path.length-1];return t?this.parent.child(e).cut(0,t):e==0?null:this.parent.child(e-1)}posAtIndex(e,t){t=this.resolveDepth(t);let i=this.path[t*3],l=t==0?0:this.path[t*3-1]+1;for(let n=0;n<e;n++)l+=i.child(n).nodeSize;return l}marks(){let e=this.parent,t=this.index();if(e.content.size==0)return K.none;if(this.textOffset)return e.child(t).marks;let i=e.maybeChild(t-1),l=e.maybeChild(t);if(!i){let a=i;i=l,l=a}let n=i.marks;for(var s=0;s<n.length;s++)n[s].type.spec.inclusive===!1&&(!l||!n[s].isInSet(l.marks))&&(n=n[s--].removeFromSet(n));return n}marksAcross(e){let t=this.parent.maybeChild(this.index());if(!t||!t.isInline)return null;let i=t.marks,l=e.parent.maybeChild(e.index());for(var n=0;n<i.length;n++)i[n].type.spec.inclusive===!1&&(!l||!i[n].isInSet(l.marks))&&(i=i[n--].removeFromSet(i));return i}sharedDepth(e){for(let t=this.depth;t>0;t--)if(this.start(t)<=e&&this.end(t)>=e)return t;return 0}blockRange(e=this,t){if(e.pos<this.pos)return e.blockRange(this);for(let i=this.depth-(this.parent.inlineContent||this.pos==e.pos?1:0);i>=0;i--)if(e.pos<=this.end(i)&&(!t||t(this.node(i))))return new gu(this,e,i);return null}sameParent(e){return this.pos-this.parentOffset==e.pos-e.parentOffset}max(e){return e.pos>this.pos?e:this}min(e){return e.pos<this.pos?e:this}toString(){let e="";for(let t=1;t<=this.depth;t++)e+=(e?"/":"")+this.node(t).type.name+"_"+this.index(t-1);return e+":"+this.parentOffset}static resolve(e,t){if(!(t>=0&&t<=e.content.size))throw new RangeError("Position "+t+" out of range");let i=[],l=0,n=t;for(let s=e;;){let{index:a,offset:o}=s.content.findIndex(n),c=n-o;if(i.push(s,a,l+o),!c||(s=s.child(a),s.isText))break;n=c-1,l+=o+1}return new Or(t,i,n)}static resolveCached(e,t){let i=la.get(e);if(i)for(let n=0;n<i.elts.length;n++){let s=i.elts[n];if(s.pos==t)return s}else la.set(e,i=new pu);let l=i.elts[i.i]=Or.resolve(e,t);return i.i=(i.i+1)%mu,l}}class pu{constructor(){this.elts=[],this.i=0}}const mu=12,la=new WeakMap;class gu{constructor(e,t,i){this.$from=e,this.$to=t,this.depth=i}get start(){return this.$from.before(this.depth+1)}get end(){return this.$to.after(this.depth+1)}get parent(){return this.$from.node(this.depth)}get startIndex(){return this.$from.index(this.depth)}get endIndex(){return this.$to.indexAfter(this.depth)}}const xu=Object.create(null);let Zt=class pn{constructor(e,t,i,l=K.none){this.type=e,this.attrs=t,this.marks=l,this.content=i||O.empty}get children(){return this.content.content}get nodeSize(){return this.isLeaf?1:2+this.content.size}get childCount(){return this.content.childCount}child(e){return this.content.child(e)}maybeChild(e){return this.content.maybeChild(e)}forEach(e){this.content.forEach(e)}nodesBetween(e,t,i,l=0){this.content.nodesBetween(e,t,i,l,this)}descendants(e){this.nodesBetween(0,this.content.size,e)}get textContent(){return this.isLeaf&&this.type.spec.leafText?this.type.spec.leafText(this):this.textBetween(0,this.content.size,"")}textBetween(e,t,i,l){return this.content.textBetween(e,t,i,l)}get firstChild(){return this.content.firstChild}get lastChild(){return this.content.lastChild}eq(e){return this==e||this.sameMarkup(e)&&this.content.eq(e.content)}sameMarkup(e){return this.hasMarkup(e.type,e.attrs,e.marks)}hasMarkup(e,t,i){return this.type==e&&Hi(this.attrs,t||e.defaultAttrs||xu)&&K.sameSet(this.marks,i||K.none)}copy(e=null){return e==this.content?this:new pn(this.type,this.attrs,e,this.marks)}mark(e){return e==this.marks?this:new pn(this.type,this.attrs,this.content,e)}cut(e,t=this.content.size){return e==0&&t==this.content.size?this:this.copy(this.content.cut(e,t))}slice(e,t=this.content.size,i=!1){if(e==t)return L.empty;let l=this.resolve(e),n=this.resolve(t),s=i?0:l.sharedDepth(t),a=l.start(s),o=l.node(s).content.cut(l.pos-a,n.pos-a);return new L(o,l.depth-s,n.depth-s)}replace(e,t,i){return fu(this.resolve(e),this.resolve(t),i)}nodeAt(e){for(let t=this;;){let{index:i,offset:l}=t.content.findIndex(e);if(t=t.maybeChild(i),!t)return null;if(l==e||t.isText)return t;e-=l+1}}childAfter(e){let{index:t,offset:i}=this.content.findIndex(e);return{node:this.content.maybeChild(t),index:t,offset:i}}childBefore(e){if(e==0)return{node:null,index:0,offset:0};let{index:t,offset:i}=this.content.findIndex(e);if(i<e)return{node:this.content.child(t),index:t,offset:i};let l=this.content.child(t-1);return{node:l,index:t-1,offset:i-l.nodeSize}}resolve(e){return Or.resolveCached(this,e)}resolveNoCache(e){return Or.resolve(this,e)}rangeHasMark(e,t,i){let l=!1;return t>e&&this.nodesBetween(e,t,n=>(i.isInSet(n.marks)&&(l=!0),!l)),l}get isBlock(){return this.type.isBlock}get isTextblock(){return this.type.isTextblock}get inlineContent(){return this.type.inlineContent}get isInline(){return this.type.isInline}get isText(){return this.type.isText}get isLeaf(){return this.type.isLeaf}get isAtom(){return this.type.isAtom}toString(){if(this.type.spec.toDebugString)return this.type.spec.toDebugString(this);let e=this.type.name;return this.content.size&&(e+="("+this.content.toStringInner()+")"),ec(this.marks,e)}contentMatchAt(e){let t=this.type.contentMatch.matchFragment(this.content,0,e);if(!t)throw new Error("Called contentMatchAt on a node with invalid content");return t}canReplace(e,t,i=O.empty,l=0,n=i.childCount){let s=this.contentMatchAt(e).matchFragment(i,l,n),a=s&&s.matchFragment(this.content,t);if(!a||!a.validEnd)return!1;for(let o=l;o<n;o++)if(!this.type.allowsMarks(i.child(o).marks))return!1;return!0}canReplaceWith(e,t,i,l){if(l&&!this.type.allowsMarks(l))return!1;let n=this.contentMatchAt(e).matchType(i),s=n&&n.matchFragment(this.content,t);return s?s.validEnd:!1}canAppend(e){return e.content.size?this.canReplace(this.childCount,this.childCount,e.content):this.type.compatibleContent(e.type)}check(){this.type.checkContent(this.content),this.type.checkAttrs(this.attrs);let e=K.none;for(let t=0;t<this.marks.length;t++){let i=this.marks[t];i.type.checkAttrs(i.attrs),e=i.addToSet(e)}if(!K.sameSet(e,this.marks))throw new RangeError(`Invalid collection of marks for node ${this.type.name}: ${this.marks.map(t=>t.type.name)}`);this.content.forEach(t=>t.check())}toJSON(){let e={type:this.type.name};for(let t in this.attrs){e.attrs=this.attrs;break}return this.content.size&&(e.content=this.content.toJSON()),this.marks.length&&(e.marks=this.marks.map(t=>t.toJSON())),e}static fromJSON(e,t){if(!t)throw new RangeError("Invalid input for Node.fromJSON");let i;if(t.marks){if(!Array.isArray(t.marks))throw new RangeError("Invalid mark data for Node.fromJSON");i=t.marks.map(e.markFromJSON)}if(t.type=="text"){if(typeof t.text!="string")throw new RangeError("Invalid text node in JSON");return e.text(t.text,i)}let l=O.fromJSON(e,t.content),n=e.nodeType(t.type).create(t.attrs,l,i);return n.type.checkAttrs(n.attrs),n}};Zt.prototype.text=void 0;class Vi extends Zt{constructor(e,t,i,l){if(super(e,t,null,l),!i)throw new RangeError("Empty text nodes are not allowed");this.text=i}toString(){return this.type.spec.toDebugString?this.type.spec.toDebugString(this):ec(this.marks,JSON.stringify(this.text))}get textContent(){return this.text}textBetween(e,t){return this.text.slice(e,t)}get nodeSize(){return this.text.length}mark(e){return e==this.marks?this:new Vi(this.type,this.attrs,this.text,e)}withText(e){return e==this.text?this:new Vi(this.type,this.attrs,e,this.marks)}cut(e=0,t=this.text.length){return e==0&&t==this.text.length?this:this.withText(this.text.slice(e,t))}eq(e){return this.sameMarkup(e)&&this.text==e.text}toJSON(){let e=super.toJSON();return e.text=this.text,e}}function ec(r,e){for(let t=r.length-1;t>=0;t--)e=r[t].type.name+"("+e+")";return e}class Ot{constructor(e){this.validEnd=e,this.next=[],this.wrapCache=[]}static parse(e,t){let i=new vu(e,t);if(i.next==null)return Ot.empty;let l=tc(i);i.next&&i.err("Unexpected trailing text");let n=Cu(Mu(l));return Tu(n,i),n}matchType(e){for(let t=0;t<this.next.length;t++)if(this.next[t].type==e)return this.next[t].next;return null}matchFragment(e,t=0,i=e.childCount){let l=this;for(let n=t;l&&n<i;n++)l=l.matchType(e.child(n).type);return l}get inlineContent(){return this.next.length!=0&&this.next[0].type.isInline}get defaultType(){for(let e=0;e<this.next.length;e++){let{type:t}=this.next[e];if(!(t.isText||t.hasRequiredAttrs()))return t}return null}compatible(e){for(let t=0;t<this.next.length;t++)for(let i=0;i<e.next.length;i++)if(this.next[t].type==e.next[i].type)return!0;return!1}fillBefore(e,t=!1,i=0){let l=[this];function n(s,a){let o=s.matchFragment(e,i);if(o&&(!t||o.validEnd))return O.from(a.map(c=>c.createAndFill()));for(let c=0;c<s.next.length;c++){let{type:d,next:h}=s.next[c];if(!(d.isText||d.hasRequiredAttrs())&&l.indexOf(h)==-1){l.push(h);let f=n(h,a.concat(d));if(f)return f}}return null}return n(this,[])}findWrapping(e){for(let i=0;i<this.wrapCache.length;i+=2)if(this.wrapCache[i]==e)return this.wrapCache[i+1];let t=this.computeWrapping(e);return this.wrapCache.push(e,t),t}computeWrapping(e){let t=Object.create(null),i=[{match:this,type:null,via:null}];for(;i.length;){let l=i.shift(),n=l.match;if(n.matchType(e)){let s=[];for(let a=l;a.type;a=a.via)s.push(a.type);return s.reverse()}for(let s=0;s<n.next.length;s++){let{type:a,next:o}=n.next[s];!a.isLeaf&&!a.hasRequiredAttrs()&&!(a.name in t)&&(!l.type||o.validEnd)&&(i.push({match:a.contentMatch,type:a,via:l}),t[a.name]=!0)}}return null}get edgeCount(){return this.next.length}edge(e){if(e>=this.next.length)throw new RangeError(`There's no ${e}th edge in this content match`);return this.next[e]}toString(){let e=[];function t(i){e.push(i);for(let l=0;l<i.next.length;l++)e.indexOf(i.next[l].next)==-1&&t(i.next[l].next)}return t(this),e.map((i,l)=>{let n=l+(i.validEnd?"*":" ")+" ";for(let s=0;s<i.next.length;s++)n+=(s?", ":"")+i.next[s].type.name+"->"+e.indexOf(i.next[s].next);return n}).join(`
`)}}Ot.empty=new Ot(!0);class vu{constructor(e,t){this.string=e,this.nodeTypes=t,this.inline=null,this.pos=0,this.tokens=e.split(/\s*(?=\b|\W|$)/),this.tokens[this.tokens.length-1]==""&&this.tokens.pop(),this.tokens[0]==""&&this.tokens.shift()}get next(){return this.tokens[this.pos]}eat(e){return this.next==e&&(this.pos++||!0)}err(e){throw new SyntaxError(e+" (in content expression '"+this.string+"')")}}function tc(r){let e=[];do e.push(yu(r));while(r.eat("|"));return e.length==1?e[0]:{type:"choice",exprs:e}}function yu(r){let e=[];do e.push(wu(r));while(r.next&&r.next!=")"&&r.next!="|");return e.length==1?e[0]:{type:"seq",exprs:e}}function wu(r){let e=Su(r);for(;;)if(r.eat("+"))e={type:"plus",expr:e};else if(r.eat("*"))e={type:"star",expr:e};else if(r.eat("?"))e={type:"opt",expr:e};else if(r.eat("{"))e=bu(r,e);else break;return e}function na(r){/\D/.test(r.next)&&r.err("Expected number, got '"+r.next+"'");let e=Number(r.next);return r.pos++,e}function bu(r,e){let t=na(r),i=t;return r.eat(",")&&(r.next!="}"?i=na(r):i=-1),r.eat("}")||r.err("Unclosed braced range"),{type:"range",min:t,max:i,expr:e}}function ku(r,e){let t=r.nodeTypes,i=t[e];if(i)return[i];let l=[];for(let n in t){let s=t[n];s.isInGroup(e)&&l.push(s)}return l.length==0&&r.err("No node type or group '"+e+"' found"),l}function Su(r){if(r.eat("(")){let e=tc(r);return r.eat(")")||r.err("Missing closing paren"),e}else if(/\W/.test(r.next))r.err("Unexpected token '"+r.next+"'");else{let e=ku(r,r.next).map(t=>(r.inline==null?r.inline=t.isInline:r.inline!=t.isInline&&r.err("Mixing inline and block content"),{type:"name",value:t}));return r.pos++,e.length==1?e[0]:{type:"choice",exprs:e}}}function Mu(r){let e=[[]];return l(n(r,0),t()),e;function t(){return e.push([])-1}function i(s,a,o){let c={term:o,to:a};return e[s].push(c),c}function l(s,a){s.forEach(o=>o.to=a)}function n(s,a){if(s.type=="choice")return s.exprs.reduce((o,c)=>o.concat(n(c,a)),[]);if(s.type=="seq")for(let o=0;;o++){let c=n(s.exprs[o],a);if(o==s.exprs.length-1)return c;l(c,a=t())}else if(s.type=="star"){let o=t();return i(a,o),l(n(s.expr,o),o),[i(o)]}else if(s.type=="plus"){let o=t();return l(n(s.expr,a),o),l(n(s.expr,o),o),[i(o)]}else{if(s.type=="opt")return[i(a)].concat(n(s.expr,a));if(s.type=="range"){let o=a;for(let c=0;c<s.min;c++){let d=t();l(n(s.expr,o),d),o=d}if(s.max==-1)l(n(s.expr,o),o);else for(let c=s.min;c<s.max;c++){let d=t();i(o,d),l(n(s.expr,o),d),o=d}return[i(o)]}else{if(s.type=="name")return[i(a,void 0,s.value)];throw new Error("Unknown expr type")}}}}function rc(r,e){return e-r}function sa(r,e){let t=[];return i(e),t.sort(rc);function i(l){let n=r[l];if(n.length==1&&!n[0].term)return i(n[0].to);t.push(l);for(let s=0;s<n.length;s++){let{term:a,to:o}=n[s];!a&&t.indexOf(o)==-1&&i(o)}}}function Cu(r){let e=Object.create(null);return t(sa(r,0));function t(i){let l=[];i.forEach(s=>{r[s].forEach(({term:a,to:o})=>{if(!a)return;let c;for(let d=0;d<l.length;d++)l[d][0]==a&&(c=l[d][1]);sa(r,o).forEach(d=>{c||l.push([a,c=[]]),c.indexOf(d)==-1&&c.push(d)})})});let n=e[i.join(",")]=new Ot(i.indexOf(r.length-1)>-1);for(let s=0;s<l.length;s++){let a=l[s][1].sort(rc);n.next.push({type:l[s][0],next:e[a.join(",")]||t(a)})}return n}}function Tu(r,e){for(let t=0,i=[r];t<i.length;t++){let l=i[t],n=!l.validEnd,s=[];for(let a=0;a<l.next.length;a++){let{type:o,next:c}=l.next[a];s.push(o.name),n&&!(o.isText||o.hasRequiredAttrs())&&(n=!1),i.indexOf(c)==-1&&i.push(c)}n&&e.err("Only non-generatable nodes ("+s.join(", ")+") in a required position (see https://prosemirror.net/docs/guide/#generatable)")}}function ic(r){let e=Object.create(null);for(let t in r){let i=r[t];if(!i.hasDefault)return null;e[t]=i.default}return e}function lc(r,e){let t=Object.create(null);for(let i in r){let l=e&&e[i];if(l===void 0){let n=r[i];if(n.hasDefault)l=n.default;else throw new RangeError("No value supplied for attribute "+i)}t[i]=l}return t}function nc(r,e,t,i){for(let l in e)if(!(l in r))throw new RangeError(`Unsupported attribute ${l} for ${t} of type ${l}`);for(let l in r){let n=r[l];n.validate&&n.validate(e[l])}}function sc(r,e){let t=Object.create(null);if(e)for(let i in e)t[i]=new zu(r,i,e[i]);return t}let aa=class ac{constructor(e,t,i){this.name=e,this.schema=t,this.spec=i,this.markSet=null,this.groups=i.group?i.group.split(" "):[],this.attrs=sc(e,i.attrs),this.defaultAttrs=ic(this.attrs),this.contentMatch=null,this.inlineContent=null,this.isBlock=!(i.inline||e=="text"),this.isText=e=="text"}get isInline(){return!this.isBlock}get isTextblock(){return this.isBlock&&this.inlineContent}get isLeaf(){return this.contentMatch==Ot.empty}get isAtom(){return this.isLeaf||!!this.spec.atom}isInGroup(e){return this.groups.indexOf(e)>-1}get whitespace(){return this.spec.whitespace||(this.spec.code?"pre":"normal")}hasRequiredAttrs(){for(let e in this.attrs)if(this.attrs[e].isRequired)return!0;return!1}compatibleContent(e){return this==e||this.contentMatch.compatible(e.contentMatch)}computeAttrs(e){return!e&&this.defaultAttrs?this.defaultAttrs:lc(this.attrs,e)}create(e=null,t,i){if(this.isText)throw new Error("NodeType.create can't construct text nodes");return new Zt(this,this.computeAttrs(e),O.from(t),K.setFrom(i))}createChecked(e=null,t,i){return t=O.from(t),this.checkContent(t),new Zt(this,this.computeAttrs(e),t,K.setFrom(i))}createAndFill(e=null,t,i){if(e=this.computeAttrs(e),t=O.from(t),t.size){let s=this.contentMatch.fillBefore(t);if(!s)return null;t=s.append(t)}let l=this.contentMatch.matchFragment(t),n=l&&l.fillBefore(O.empty,!0);return n?new Zt(this,e,t.append(n),K.setFrom(i)):null}validContent(e){let t=this.contentMatch.matchFragment(e);if(!t||!t.validEnd)return!1;for(let i=0;i<e.childCount;i++)if(!this.allowsMarks(e.child(i).marks))return!1;return!0}checkContent(e){if(!this.validContent(e))throw new RangeError(`Invalid content for node ${this.name}: ${e.toString().slice(0,50)}`)}checkAttrs(e){nc(this.attrs,e,"node",this.name)}allowsMarkType(e){return this.markSet==null||this.markSet.indexOf(e)>-1}allowsMarks(e){if(this.markSet==null)return!0;for(let t=0;t<e.length;t++)if(!this.allowsMarkType(e[t].type))return!1;return!0}allowedMarks(e){if(this.markSet==null)return e;let t;for(let i=0;i<e.length;i++)this.allowsMarkType(e[i].type)?t&&t.push(e[i]):t||(t=e.slice(0,i));return t?t.length?t:K.none:e}static compile(e,t){let i=Object.create(null);e.forEach((n,s)=>i[n]=new ac(n,t,s));let l=t.spec.topNode||"doc";if(!i[l])throw new RangeError("Schema is missing its top node type ('"+l+"')");if(!i.text)throw new RangeError("Every schema needs a 'text' type");for(let n in i.text.attrs)throw new RangeError("The text node type should not have attributes");return i}};function Eu(r,e,t){let i=t.split("|");return l=>{let n=l===null?"null":typeof l;if(i.indexOf(n)<0)throw new RangeError(`Expected value of type ${i} for attribute ${e} on type ${r}, got ${n}`)}}class zu{constructor(e,t,i){this.hasDefault=Object.prototype.hasOwnProperty.call(i,"default"),this.default=i.default,this.validate=typeof i.validate=="string"?Eu(e,t,i.validate):i.validate}get isRequired(){return!this.hasDefault}}class Dn{constructor(e,t,i,l){this.name=e,this.rank=t,this.schema=i,this.spec=l,this.attrs=sc(e,l.attrs),this.excluded=null;let n=ic(this.attrs);this.instance=n?new K(this,n):null}create(e=null){return!e&&this.instance?this.instance:new K(this,lc(this.attrs,e))}static compile(e,t){let i=Object.create(null),l=0;return e.forEach((n,s)=>i[n]=new Dn(n,l++,t,s)),i}removeFromSet(e){for(var t=0;t<e.length;t++)e[t].type==this&&(e=e.slice(0,t).concat(e.slice(t+1)),t--);return e}isInSet(e){for(let t=0;t<e.length;t++)if(e[t].type==this)return e[t]}checkAttrs(e){nc(this.attrs,e,"mark",this.name)}excludes(e){return this.excluded.indexOf(e)>-1}}class Au{constructor(e){this.linebreakReplacement=null,this.cached=Object.create(null);let t=this.spec={};for(let l in e)t[l]=e[l];t.nodes=ae.from(e.nodes),t.marks=ae.from(e.marks||{}),this.nodes=aa.compile(this.spec.nodes,this),this.marks=Dn.compile(this.spec.marks,this);let i=Object.create(null);for(let l in this.nodes){if(l in this.marks)throw new RangeError(l+" can not be both a node and a mark");let n=this.nodes[l],s=n.spec.content||"",a=n.spec.marks;if(n.contentMatch=i[s]||(i[s]=Ot.parse(s,this.nodes)),n.inlineContent=n.contentMatch.inlineContent,n.spec.linebreakReplacement){if(this.linebreakReplacement)throw new RangeError("Multiple linebreak nodes defined");if(!n.isInline||!n.isLeaf)throw new RangeError("Linebreak replacement nodes must be inline leaf nodes");this.linebreakReplacement=n}n.markSet=a=="_"?null:a?oa(this,a.split(" ")):a==""||!n.inlineContent?[]:null}for(let l in this.marks){let n=this.marks[l],s=n.spec.excludes;n.excluded=s==null?[n]:s==""?[]:oa(this,s.split(" "))}this.nodeFromJSON=this.nodeFromJSON.bind(this),this.markFromJSON=this.markFromJSON.bind(this),this.topNodeType=this.nodes[this.spec.topNode||"doc"],this.cached.wrappings=Object.create(null)}node(e,t=null,i,l){if(typeof e=="string")e=this.nodeType(e);else if(e instanceof aa){if(e.schema!=this)throw new RangeError("Node type from different schema used ("+e.name+")")}else throw new RangeError("Invalid node type: "+e);return e.createChecked(t,i,l)}text(e,t){let i=this.nodes.text;return new Vi(i,i.defaultAttrs,e,K.setFrom(t))}mark(e,t){return typeof e=="string"&&(e=this.marks[e]),e.create(t)}nodeFromJSON(e){return Zt.fromJSON(this,e)}markFromJSON(e){return K.fromJSON(this,e)}nodeType(e){let t=this.nodes[e];if(!t)throw new RangeError("Unknown node type: "+e);return t}}function oa(r,e){let t=[];for(let i=0;i<e.length;i++){let l=e[i],n=r.marks[l],s=n;if(n)t.push(n);else for(let a in r.marks){let o=r.marks[a];(l=="_"||o.spec.group&&o.spec.group.split(" ").indexOf(l)>-1)&&t.push(s=o)}if(!s)throw new SyntaxError("Unknown mark type: '"+e[i]+"'")}return t}function Ou(r){return r.tag!=null}function Lu(r){return r.style!=null}class Gi{constructor(e,t){this.schema=e,this.rules=t,this.tags=[],this.styles=[];let i=this.matchedStyles=[];t.forEach(l=>{if(Ou(l))this.tags.push(l);else if(Lu(l)){let n=/[^=]*/.exec(l.style)[0];i.indexOf(n)<0&&i.push(n),this.styles.push(l)}}),this.normalizeLists=!this.tags.some(l=>{if(!/^(ul|ol)\b/.test(l.tag)||!l.node)return!1;let n=e.nodes[l.node];return n.contentMatch.matchType(n)})}parse(e,t={}){let i=new da(this,t,!1);return i.addAll(e,K.none,t.from,t.to),i.finish()}parseSlice(e,t={}){let i=new da(this,t,!0);return i.addAll(e,K.none,t.from,t.to),L.maxOpen(i.finish())}matchTag(e,t,i){for(let l=i?this.tags.indexOf(i)+1:0;l<this.tags.length;l++){let n=this.tags[l];if(Pu(e,n.tag)&&(n.namespace===void 0||e.namespaceURI==n.namespace)&&(!n.context||t.matchesContext(n.context))){if(n.getAttrs){let s=n.getAttrs(e);if(s===!1)continue;n.attrs=s||void 0}return n}}}matchStyle(e,t,i,l){for(let n=l?this.styles.indexOf(l)+1:0;n<this.styles.length;n++){let s=this.styles[n],a=s.style;if(!(a.indexOf(e)!=0||s.context&&!i.matchesContext(s.context)||a.length>e.length&&(a.charCodeAt(e.length)!=61||a.slice(e.length+1)!=t))){if(s.getAttrs){let o=s.getAttrs(t);if(o===!1)continue;s.attrs=o||void 0}return s}}}static schemaRules(e){let t=[];function i(l){let n=l.priority==null?50:l.priority,s=0;for(;s<t.length;s++){let a=t[s];if((a.priority==null?50:a.priority)<n)break}t.splice(s,0,l)}for(let l in e.marks){let n=e.marks[l].spec.parseDOM;n&&n.forEach(s=>{i(s=ha(s)),s.mark||s.ignore||s.clearMark||(s.mark=l)})}for(let l in e.nodes){let n=e.nodes[l].spec.parseDOM;n&&n.forEach(s=>{i(s=ha(s)),s.node||s.ignore||s.mark||(s.node=l)})}return t}static fromSchema(e){return e.cached.domParser||(e.cached.domParser=new Gi(e,Gi.schemaRules(e)))}}const oc={address:!0,article:!0,aside:!0,blockquote:!0,canvas:!0,dd:!0,div:!0,dl:!0,fieldset:!0,figcaption:!0,figure:!0,footer:!0,form:!0,h1:!0,h2:!0,h3:!0,h4:!0,h5:!0,h6:!0,header:!0,hgroup:!0,hr:!0,li:!0,noscript:!0,ol:!0,output:!0,p:!0,pre:!0,section:!0,table:!0,tfoot:!0,ul:!0},ju={head:!0,noscript:!0,object:!0,script:!0,style:!0,title:!0},cc={ol:!0,ul:!0},qi=1,Wi=2,Mr=4;function ca(r,e,t){return e!=null?(e?qi:0)|(e==="full"?Wi:0):r&&r.whitespace=="pre"?qi|Wi:t&~Mr}class ai{constructor(e,t,i,l,n,s){this.type=e,this.attrs=t,this.marks=i,this.solid=l,this.options=s,this.content=[],this.activeMarks=K.none,this.match=n||(s&Mr?null:e.contentMatch)}findWrapping(e){if(!this.match){if(!this.type)return[];let t=this.type.contentMatch.fillBefore(O.from(e));if(t)this.match=this.type.contentMatch.matchFragment(t);else{let i=this.type.contentMatch,l;return(l=i.findWrapping(e.type))?(this.match=i,l):null}}return this.match.findWrapping(e.type)}finish(e){if(!(this.options&qi)){let i=this.content[this.content.length-1],l;if(i&&i.isText&&(l=/[ \t\r\n\u000c]+$/.exec(i.text))){let n=i;i.text.length==l[0].length?this.content.pop():this.content[this.content.length-1]=n.withText(n.text.slice(0,n.text.length-l[0].length))}}let t=O.from(this.content);return!e&&this.match&&(t=t.append(this.match.fillBefore(O.empty,!0))),this.type?this.type.create(this.attrs,t,this.marks):t}inlineContext(e){return this.type?this.type.inlineContent:this.content.length?this.content[0].isInline:e.parentNode&&!oc.hasOwnProperty(e.parentNode.nodeName.toLowerCase())}}class da{constructor(e,t,i){this.parser=e,this.options=t,this.isOpen=i,this.open=0;let l=t.topNode,n,s=ca(null,t.preserveWhitespace,0)|(i?Mr:0);l?n=new ai(l.type,l.attrs,K.none,!0,t.topMatch||l.type.contentMatch,s):i?n=new ai(null,null,K.none,!0,null,s):n=new ai(e.schema.topNodeType,null,K.none,!0,null,s),this.nodes=[n],this.find=t.findPositions,this.needsBlock=!1}get top(){return this.nodes[this.open]}addDOM(e,t){e.nodeType==3?this.addTextNode(e,t):e.nodeType==1&&this.addElement(e,t)}addTextNode(e,t){let i=e.nodeValue,l=this.top;if(l.options&Wi||l.inlineContext(e)||/[^ \t\r\n\u000c]/.test(i)){if(l.options&qi)l.options&Wi?i=i.replace(/\r\n?/g,`
`):i=i.replace(/\r?\n|\r/g," ");else if(i=i.replace(/[ \t\r\n\u000c]+/g," "),/^[ \t\r\n\u000c]/.test(i)&&this.open==this.nodes.length-1){let n=l.content[l.content.length-1],s=e.previousSibling;(!n||s&&s.nodeName=="BR"||n.isText&&/[ \t\r\n\u000c]$/.test(n.text))&&(i=i.slice(1))}i&&this.insertNode(this.parser.schema.text(i),t),this.findInText(e)}else this.findInside(e)}addElement(e,t,i){let l=e.nodeName.toLowerCase(),n;cc.hasOwnProperty(l)&&this.parser.normalizeLists&&Bu(e);let s=this.options.ruleFromNode&&this.options.ruleFromNode(e)||(n=this.parser.matchTag(e,this,i));if(s?s.ignore:ju.hasOwnProperty(l))this.findInside(e),this.ignoreFallback(e,t);else if(!s||s.skip||s.closeParent){s&&s.closeParent?this.open=Math.max(0,this.open-1):s&&s.skip.nodeType&&(e=s.skip);let a,o=this.top,c=this.needsBlock;if(oc.hasOwnProperty(l))o.content.length&&o.content[0].isInline&&this.open&&(this.open--,o=this.top),a=!0,o.type||(this.needsBlock=!0);else if(!e.firstChild){this.leafFallback(e,t);return}let d=s&&s.skip?t:this.readStyles(e,t);d&&this.addAll(e,d),a&&this.sync(o),this.needsBlock=c}else{let a=this.readStyles(e,t);a&&this.addElementByRule(e,s,a,s.consuming===!1?n:void 0)}}leafFallback(e,t){e.nodeName=="BR"&&this.top.type&&this.top.type.inlineContent&&this.addTextNode(e.ownerDocument.createTextNode(`
`),t)}ignoreFallback(e,t){e.nodeName=="BR"&&(!this.top.type||!this.top.type.inlineContent)&&this.findPlace(this.parser.schema.text("-"),t)}readStyles(e,t){let i=e.style;if(i&&i.length)for(let l=0;l<this.parser.matchedStyles.length;l++){let n=this.parser.matchedStyles[l],s=i.getPropertyValue(n);if(s)for(let a=void 0;;){let o=this.parser.matchStyle(n,s,this,a);if(!o)break;if(o.ignore)return null;if(o.clearMark?t=t.filter(c=>!o.clearMark(c)):t=t.concat(this.parser.schema.marks[o.mark].create(o.attrs)),o.consuming===!1)a=o;else break}}return t}addElementByRule(e,t,i,l){let n,s;if(t.node)if(s=this.parser.schema.nodes[t.node],s.isLeaf)this.insertNode(s.create(t.attrs),i)||this.leafFallback(e,i);else{let o=this.enter(s,t.attrs||null,i,t.preserveWhitespace);o&&(n=!0,i=o)}else{let o=this.parser.schema.marks[t.mark];i=i.concat(o.create(t.attrs))}let a=this.top;if(s&&s.isLeaf)this.findInside(e);else if(l)this.addElement(e,i,l);else if(t.getContent)this.findInside(e),t.getContent(e,this.parser.schema).forEach(o=>this.insertNode(o,i));else{let o=e;typeof t.contentElement=="string"?o=e.querySelector(t.contentElement):typeof t.contentElement=="function"?o=t.contentElement(e):t.contentElement&&(o=t.contentElement),this.findAround(e,o,!0),this.addAll(o,i),this.findAround(e,o,!1)}n&&this.sync(a)&&this.open--}addAll(e,t,i,l){let n=i||0;for(let s=i?e.childNodes[i]:e.firstChild,a=l==null?null:e.childNodes[l];s!=a;s=s.nextSibling,++n)this.findAtPoint(e,n),this.addDOM(s,t);this.findAtPoint(e,n)}findPlace(e,t){let i,l;for(let n=this.open;n>=0;n--){let s=this.nodes[n],a=s.findWrapping(e);if(a&&(!i||i.length>a.length)&&(i=a,l=s,!a.length)||s.solid)break}if(!i)return null;this.sync(l);for(let n=0;n<i.length;n++)t=this.enterInner(i[n],null,t,!1);return t}insertNode(e,t){if(e.isInline&&this.needsBlock&&!this.top.type){let l=this.textblockFromContext();l&&(t=this.enterInner(l,null,t))}let i=this.findPlace(e,t);if(i){this.closeExtra();let l=this.top;l.match&&(l.match=l.match.matchType(e.type));let n=K.none;for(let s of i.concat(e.marks))(l.type?l.type.allowsMarkType(s.type):fa(s.type,e.type))&&(n=s.addToSet(n));return l.content.push(e.mark(n)),!0}return!1}enter(e,t,i,l){let n=this.findPlace(e.create(t),i);return n&&(n=this.enterInner(e,t,i,!0,l)),n}enterInner(e,t,i,l=!1,n){this.closeExtra();let s=this.top;s.match=s.match&&s.match.matchType(e);let a=ca(e,n,s.options);s.options&Mr&&s.content.length==0&&(a|=Mr);let o=K.none;return i=i.filter(c=>(s.type?s.type.allowsMarkType(c.type):fa(c.type,e))?(o=c.addToSet(o),!1):!0),this.nodes.push(new ai(e,t,o,l,null,a)),this.open++,i}closeExtra(e=!1){let t=this.nodes.length-1;if(t>this.open){for(;t>this.open;t--)this.nodes[t-1].content.push(this.nodes[t].finish(e));this.nodes.length=this.open+1}}finish(){return this.open=0,this.closeExtra(this.isOpen),this.nodes[0].finish(this.isOpen||this.options.topOpen)}sync(e){for(let t=this.open;t>=0;t--)if(this.nodes[t]==e)return this.open=t,!0;return!1}get currentPos(){this.closeExtra();let e=0;for(let t=this.open;t>=0;t--){let i=this.nodes[t].content;for(let l=i.length-1;l>=0;l--)e+=i[l].nodeSize;t&&e++}return e}findAtPoint(e,t){if(this.find)for(let i=0;i<this.find.length;i++)this.find[i].node==e&&this.find[i].offset==t&&(this.find[i].pos=this.currentPos)}findInside(e){if(this.find)for(let t=0;t<this.find.length;t++)this.find[t].pos==null&&e.nodeType==1&&e.contains(this.find[t].node)&&(this.find[t].pos=this.currentPos)}findAround(e,t,i){if(e!=t&&this.find)for(let l=0;l<this.find.length;l++)this.find[l].pos==null&&e.nodeType==1&&e.contains(this.find[l].node)&&t.compareDocumentPosition(this.find[l].node)&(i?2:4)&&(this.find[l].pos=this.currentPos)}findInText(e){if(this.find)for(let t=0;t<this.find.length;t++)this.find[t].node==e&&(this.find[t].pos=this.currentPos-(e.nodeValue.length-this.find[t].offset))}matchesContext(e){if(e.indexOf("|")>-1)return e.split(/\s*\|\s*/).some(this.matchesContext,this);let t=e.split("/"),i=this.options.context,l=!this.isOpen&&(!i||i.parent.type==this.nodes[0].type),n=-(i?i.depth+1:0)+(l?0:1),s=(a,o)=>{for(;a>=0;a--){let c=t[a];if(c==""){if(a==t.length-1||a==0)continue;for(;o>=n;o--)if(s(a-1,o))return!0;return!1}else{let d=o>0||o==0&&l?this.nodes[o].type:i&&o>=n?i.node(o-n).type:null;if(!d||d.name!=c&&!d.isInGroup(c))return!1;o--}}return!0};return s(t.length-1,this.open)}textblockFromContext(){let e=this.options.context;if(e)for(let t=e.depth;t>=0;t--){let i=e.node(t).contentMatchAt(e.indexAfter(t)).defaultType;if(i&&i.isTextblock&&i.defaultAttrs)return i}for(let t in this.parser.schema.nodes){let i=this.parser.schema.nodes[t];if(i.isTextblock&&i.defaultAttrs)return i}}}function Bu(r){for(let e=r.firstChild,t=null;e;e=e.nextSibling){let i=e.nodeType==1?e.nodeName.toLowerCase():null;i&&cc.hasOwnProperty(i)&&t?(t.appendChild(e),e=t):i=="li"?t=e:i&&(t=null)}}function Pu(r,e){return(r.matches||r.msMatchesSelector||r.webkitMatchesSelector||r.mozMatchesSelector).call(r,e)}function ha(r){let e={};for(let t in r)e[t]=r[t];return e}function fa(r,e){let t=e.schema.nodes;for(let i in t){let l=t[i];if(!l.allowsMarkType(r))continue;let n=[],s=a=>{n.push(a);for(let o=0;o<a.edgeCount;o++){let{type:c,next:d}=a.edge(o);if(c==e||n.indexOf(d)<0&&s(d))return!0}};if(s(l.contentMatch))return!0}}class al{constructor(e,t){this.nodes=e,this.marks=t}serializeFragment(e,t={},i){i||(i=Hl(t).createDocumentFragment());let l=i,n=[];return e.forEach(s=>{if(n.length||s.marks.length){let a=0,o=0;for(;a<n.length&&o<s.marks.length;){let c=s.marks[o];if(!this.marks[c.type.name]){o++;continue}if(!c.eq(n[a][0])||c.type.spec.spanning===!1)break;a++,o++}for(;a<n.length;)l=n.pop()[1];for(;o<s.marks.length;){let c=s.marks[o++],d=this.serializeMark(c,s.isInline,t);d&&(n.push([c,l]),l.appendChild(d.dom),l=d.contentDOM||d.dom)}}l.appendChild(this.serializeNodeInner(s,t))}),i}serializeNodeInner(e,t){let{dom:i,contentDOM:l}=Ci(Hl(t),this.nodes[e.type.name](e),null,e.attrs);if(l){if(e.isLeaf)throw new RangeError("Content hole not allowed in a leaf node spec");this.serializeFragment(e.content,t,l)}return i}serializeNode(e,t={}){let i=this.serializeNodeInner(e,t);for(let l=e.marks.length-1;l>=0;l--){let n=this.serializeMark(e.marks[l],e.isInline,t);n&&((n.contentDOM||n.dom).appendChild(i),i=n.dom)}return i}serializeMark(e,t,i={}){let l=this.marks[e.type.name];return l&&Ci(Hl(i),l(e,t),null,e.attrs)}static renderSpec(e,t,i=null,l){return Ci(e,t,i,l)}static fromSchema(e){return e.cached.domSerializer||(e.cached.domSerializer=new al(this.nodesFromSchema(e),this.marksFromSchema(e)))}static nodesFromSchema(e){let t=ua(e.nodes);return t.text||(t.text=i=>i.text),t}static marksFromSchema(e){return ua(e.marks)}}function ua(r){let e={};for(let t in r){let i=r[t].spec.toDOM;i&&(e[t]=i)}return e}function Hl(r){return r.document||window.document}const pa=new WeakMap;function Iu(r){let e=pa.get(r);return e===void 0&&pa.set(r,e=Ru(r)),e}function Ru(r){let e=null;function t(i){if(i&&typeof i=="object")if(Array.isArray(i))if(typeof i[0]=="string")e||(e=[]),e.push(i);else for(let l=0;l<i.length;l++)t(i[l]);else for(let l in i)t(i[l])}return t(r),e}function Ci(r,e,t,i){if(typeof e=="string")return{dom:r.createTextNode(e)};if(e.nodeType!=null)return{dom:e};if(e.dom&&e.dom.nodeType!=null)return e;let l=e[0],n;if(typeof l!="string")throw new RangeError("Invalid array passed to renderSpec");if(i&&(n=Iu(i))&&n.indexOf(e)>-1)throw new RangeError("Using an array from an attribute object as a DOM spec. This may be an attempted cross site scripting attack.");let s=l.indexOf(" ");s>0&&(t=l.slice(0,s),l=l.slice(s+1));let a,o=t?r.createElementNS(t,l):r.createElement(l),c=e[1],d=1;if(c&&typeof c=="object"&&c.nodeType==null&&!Array.isArray(c)){d=2;for(let h in c)if(c[h]!=null){let f=h.indexOf(" ");f>0?o.setAttributeNS(h.slice(0,f),h.slice(f+1),c[h]):o.setAttribute(h,c[h])}}for(let h=d;h<e.length;h++){let f=e[h];if(f===0){if(h<e.length-1||h>d)throw new RangeError("Content hole must be the only child of its parent node");return{dom:o,contentDOM:o}}else{let{dom:u,contentDOM:p}=Ci(r,f,t,i);if(o.appendChild(u),p){if(a)throw new RangeError("Multiple content holes");a=p}}}return{dom:o,contentDOM:a}}const dc=65535,hc=Math.pow(2,16);function Du(r,e){return r+e*hc}function ma(r){return r&dc}function Nu(r){return(r-(r&dc))/hc}const fc=1,uc=2,Ti=4,pc=8;class mn{constructor(e,t,i){this.pos=e,this.delInfo=t,this.recover=i}get deleted(){return(this.delInfo&pc)>0}get deletedBefore(){return(this.delInfo&(fc|Ti))>0}get deletedAfter(){return(this.delInfo&(uc|Ti))>0}get deletedAcross(){return(this.delInfo&Ti)>0}}class Me{constructor(e,t=!1){if(this.ranges=e,this.inverted=t,!e.length&&Me.empty)return Me.empty}recover(e){let t=0,i=ma(e);if(!this.inverted)for(let l=0;l<i;l++)t+=this.ranges[l*3+2]-this.ranges[l*3+1];return this.ranges[i*3]+t+Nu(e)}mapResult(e,t=1){return this._map(e,t,!1)}map(e,t=1){return this._map(e,t,!0)}_map(e,t,i){let l=0,n=this.inverted?2:1,s=this.inverted?1:2;for(let a=0;a<this.ranges.length;a+=3){let o=this.ranges[a]-(this.inverted?l:0);if(o>e)break;let c=this.ranges[a+n],d=this.ranges[a+s],h=o+c;if(e<=h){let f=c?e==o?-1:e==h?1:t:t,u=o+l+(f<0?0:d);if(i)return u;let p=e==(t<0?o:h)?null:Du(a/3,e-o),m=e==o?uc:e==h?fc:Ti;return(t<0?e!=o:e!=h)&&(m|=pc),new mn(u,m,p)}l+=d-c}return i?e+l:new mn(e+l,0,null)}touches(e,t){let i=0,l=ma(t),n=this.inverted?2:1,s=this.inverted?1:2;for(let a=0;a<this.ranges.length;a+=3){let o=this.ranges[a]-(this.inverted?i:0);if(o>e)break;let c=this.ranges[a+n],d=o+c;if(e<=d&&a==l*3)return!0;i+=this.ranges[a+s]-c}return!1}forEach(e){let t=this.inverted?2:1,i=this.inverted?1:2;for(let l=0,n=0;l<this.ranges.length;l+=3){let s=this.ranges[l],a=s-(this.inverted?n:0),o=s+(this.inverted?0:n),c=this.ranges[l+t],d=this.ranges[l+i];e(a,a+c,o,o+d),n+=d-c}}invert(){return new Me(this.ranges,!this.inverted)}toString(){return(this.inverted?"-":"")+JSON.stringify(this.ranges)}static offset(e){return e==0?Me.empty:new Me(e<0?[0,-e,0]:[0,0,e])}}Me.empty=new Me([]);class Cr{constructor(e=[],t,i=0,l=e.length){this.maps=e,this.mirror=t,this.from=i,this.to=l}slice(e=0,t=this.maps.length){return new Cr(this.maps,this.mirror,e,t)}copy(){return new Cr(this.maps.slice(),this.mirror&&this.mirror.slice(),this.from,this.to)}appendMap(e,t){this.to=this.maps.push(e),t!=null&&this.setMirror(this.maps.length-1,t)}appendMapping(e){for(let t=0,i=this.maps.length;t<e.maps.length;t++){let l=e.getMirror(t);this.appendMap(e.maps[t],l!=null&&l<t?i+l:void 0)}}getMirror(e){if(this.mirror){for(let t=0;t<this.mirror.length;t++)if(this.mirror[t]==e)return this.mirror[t+(t%2?-1:1)]}}setMirror(e,t){this.mirror||(this.mirror=[]),this.mirror.push(e,t)}appendMappingInverted(e){for(let t=e.maps.length-1,i=this.maps.length+e.maps.length;t>=0;t--){let l=e.getMirror(t);this.appendMap(e.maps[t].invert(),l!=null&&l>t?i-l-1:void 0)}}invert(){let e=new Cr;return e.appendMappingInverted(this),e}map(e,t=1){if(this.mirror)return this._map(e,t,!0);for(let i=this.from;i<this.to;i++)e=this.maps[i].map(e,t);return e}mapResult(e,t=1){return this._map(e,t,!1)}_map(e,t,i){let l=0;for(let n=this.from;n<this.to;n++){let s=this.maps[n],a=s.mapResult(e,t);if(a.recover!=null){let o=this.getMirror(n);if(o!=null&&o>n&&o<this.to){n=o,e=this.maps[o].recover(a.recover);continue}}l|=a.delInfo,e=a.pos}return i?e:new mn(e,l,null)}}const _l=Object.create(null);class fe{getMap(){return Me.empty}merge(e){return null}static fromJSON(e,t){if(!t||!t.stepType)throw new RangeError("Invalid input for Step.fromJSON");let i=_l[t.stepType];if(!i)throw new RangeError(`No step type ${t.stepType} defined`);return i.fromJSON(e,t)}static jsonID(e,t){if(e in _l)throw new RangeError("Duplicate use of step JSON ID "+e);return _l[e]=t,t.prototype.jsonID=e,t}}class le{constructor(e,t){this.doc=e,this.failed=t}static ok(e){return new le(e,null)}static fail(e){return new le(null,e)}static fromReplace(e,t,i,l){try{return le.ok(e.replace(t,i,l))}catch(n){if(n instanceof _i)return le.fail(n.message);throw n}}}function Nn(r,e,t){let i=[];for(let l=0;l<r.childCount;l++){let n=r.child(l);n.content.size&&(n=n.copy(Nn(n.content,e,n))),n.isInline&&(n=e(n,t,l)),i.push(n)}return O.fromArray(i)}class wt extends fe{constructor(e,t,i){super(),this.from=e,this.to=t,this.mark=i}apply(e){let t=e.slice(this.from,this.to),i=e.resolve(this.from),l=i.node(i.sharedDepth(this.to)),n=new L(Nn(t.content,(s,a)=>!s.isAtom||!a.type.allowsMarkType(this.mark.type)?s:s.mark(this.mark.addToSet(s.marks)),l),t.openStart,t.openEnd);return le.fromReplace(e,this.from,this.to,n)}invert(){return new bt(this.from,this.to,this.mark)}map(e){let t=e.mapResult(this.from,1),i=e.mapResult(this.to,-1);return t.deleted&&i.deleted||t.pos>=i.pos?null:new wt(t.pos,i.pos,this.mark)}merge(e){return e instanceof wt&&e.mark.eq(this.mark)&&this.from<=e.to&&this.to>=e.from?new wt(Math.min(this.from,e.from),Math.max(this.to,e.to),this.mark):null}toJSON(){return{stepType:"addMark",mark:this.mark.toJSON(),from:this.from,to:this.to}}static fromJSON(e,t){if(typeof t.from!="number"||typeof t.to!="number")throw new RangeError("Invalid input for AddMarkStep.fromJSON");return new wt(t.from,t.to,e.markFromJSON(t.mark))}}fe.jsonID("addMark",wt);class bt extends fe{constructor(e,t,i){super(),this.from=e,this.to=t,this.mark=i}apply(e){let t=e.slice(this.from,this.to),i=new L(Nn(t.content,l=>l.mark(this.mark.removeFromSet(l.marks)),e),t.openStart,t.openEnd);return le.fromReplace(e,this.from,this.to,i)}invert(){return new wt(this.from,this.to,this.mark)}map(e){let t=e.mapResult(this.from,1),i=e.mapResult(this.to,-1);return t.deleted&&i.deleted||t.pos>=i.pos?null:new bt(t.pos,i.pos,this.mark)}merge(e){return e instanceof bt&&e.mark.eq(this.mark)&&this.from<=e.to&&this.to>=e.from?new bt(Math.min(this.from,e.from),Math.max(this.to,e.to),this.mark):null}toJSON(){return{stepType:"removeMark",mark:this.mark.toJSON(),from:this.from,to:this.to}}static fromJSON(e,t){if(typeof t.from!="number"||typeof t.to!="number")throw new RangeError("Invalid input for RemoveMarkStep.fromJSON");return new bt(t.from,t.to,e.markFromJSON(t.mark))}}fe.jsonID("removeMark",bt);class kt extends fe{constructor(e,t){super(),this.pos=e,this.mark=t}apply(e){let t=e.nodeAt(this.pos);if(!t)return le.fail("No node at mark step's position");let i=t.type.create(t.attrs,null,this.mark.addToSet(t.marks));return le.fromReplace(e,this.pos,this.pos+1,new L(O.from(i),0,t.isLeaf?0:1))}invert(e){let t=e.nodeAt(this.pos);if(t){let i=this.mark.addToSet(t.marks);if(i.length==t.marks.length){for(let l=0;l<t.marks.length;l++)if(!t.marks[l].isInSet(i))return new kt(this.pos,t.marks[l]);return new kt(this.pos,this.mark)}}return new Lr(this.pos,this.mark)}map(e){let t=e.mapResult(this.pos,1);return t.deletedAfter?null:new kt(t.pos,this.mark)}toJSON(){return{stepType:"addNodeMark",pos:this.pos,mark:this.mark.toJSON()}}static fromJSON(e,t){if(typeof t.pos!="number")throw new RangeError("Invalid input for AddNodeMarkStep.fromJSON");return new kt(t.pos,e.markFromJSON(t.mark))}}fe.jsonID("addNodeMark",kt);class Lr extends fe{constructor(e,t){super(),this.pos=e,this.mark=t}apply(e){let t=e.nodeAt(this.pos);if(!t)return le.fail("No node at mark step's position");let i=t.type.create(t.attrs,null,this.mark.removeFromSet(t.marks));return le.fromReplace(e,this.pos,this.pos+1,new L(O.from(i),0,t.isLeaf?0:1))}invert(e){let t=e.nodeAt(this.pos);return!t||!this.mark.isInSet(t.marks)?this:new kt(this.pos,this.mark)}map(e){let t=e.mapResult(this.pos,1);return t.deletedAfter?null:new Lr(t.pos,this.mark)}toJSON(){return{stepType:"removeNodeMark",pos:this.pos,mark:this.mark.toJSON()}}static fromJSON(e,t){if(typeof t.pos!="number")throw new RangeError("Invalid input for RemoveNodeMarkStep.fromJSON");return new Lr(t.pos,e.markFromJSON(t.mark))}}fe.jsonID("removeNodeMark",Lr);class Be extends fe{constructor(e,t,i,l=!1){super(),this.from=e,this.to=t,this.slice=i,this.structure=l}apply(e){return this.structure&&gn(e,this.from,this.to)?le.fail("Structure replace would overwrite content"):le.fromReplace(e,this.from,this.to,this.slice)}getMap(){return new Me([this.from,this.to-this.from,this.slice.size])}invert(e){return new Be(this.from,this.from+this.slice.size,e.slice(this.from,this.to))}map(e){let t=e.mapResult(this.from,1),i=e.mapResult(this.to,-1);return t.deletedAcross&&i.deletedAcross?null:new Be(t.pos,Math.max(t.pos,i.pos),this.slice)}merge(e){if(!(e instanceof Be)||e.structure||this.structure)return null;if(this.from+this.slice.size==e.from&&!this.slice.openEnd&&!e.slice.openStart){let t=this.slice.size+e.slice.size==0?L.empty:new L(this.slice.content.append(e.slice.content),this.slice.openStart,e.slice.openEnd);return new Be(this.from,this.to+(e.to-e.from),t,this.structure)}else if(e.to==this.from&&!this.slice.openStart&&!e.slice.openEnd){let t=this.slice.size+e.slice.size==0?L.empty:new L(e.slice.content.append(this.slice.content),e.slice.openStart,this.slice.openEnd);return new Be(e.from,this.to,t,this.structure)}else return null}toJSON(){let e={stepType:"replace",from:this.from,to:this.to};return this.slice.size&&(e.slice=this.slice.toJSON()),this.structure&&(e.structure=!0),e}static fromJSON(e,t){if(typeof t.from!="number"||typeof t.to!="number")throw new RangeError("Invalid input for ReplaceStep.fromJSON");return new Be(t.from,t.to,L.fromJSON(e,t.slice),!!t.structure)}}fe.jsonID("replace",Be);class Xe extends fe{constructor(e,t,i,l,n,s,a=!1){super(),this.from=e,this.to=t,this.gapFrom=i,this.gapTo=l,this.slice=n,this.insert=s,this.structure=a}apply(e){if(this.structure&&(gn(e,this.from,this.gapFrom)||gn(e,this.gapTo,this.to)))return le.fail("Structure gap-replace would overwrite content");let t=e.slice(this.gapFrom,this.gapTo);if(t.openStart||t.openEnd)return le.fail("Gap is not a flat range");let i=this.slice.insertAt(this.insert,t.content);return i?le.fromReplace(e,this.from,this.to,i):le.fail("Content does not fit in gap")}getMap(){return new Me([this.from,this.gapFrom-this.from,this.insert,this.gapTo,this.to-this.gapTo,this.slice.size-this.insert])}invert(e){let t=this.gapTo-this.gapFrom;return new Xe(this.from,this.from+this.slice.size+t,this.from+this.insert,this.from+this.insert+t,e.slice(this.from,this.to).removeBetween(this.gapFrom-this.from,this.gapTo-this.from),this.gapFrom-this.from,this.structure)}map(e){let t=e.mapResult(this.from,1),i=e.mapResult(this.to,-1),l=this.from==this.gapFrom?t.pos:e.map(this.gapFrom,-1),n=this.to==this.gapTo?i.pos:e.map(this.gapTo,1);return t.deletedAcross&&i.deletedAcross||l<t.pos||n>i.pos?null:new Xe(t.pos,i.pos,l,n,this.slice,this.insert,this.structure)}toJSON(){let e={stepType:"replaceAround",from:this.from,to:this.to,gapFrom:this.gapFrom,gapTo:this.gapTo,insert:this.insert};return this.slice.size&&(e.slice=this.slice.toJSON()),this.structure&&(e.structure=!0),e}static fromJSON(e,t){if(typeof t.from!="number"||typeof t.to!="number"||typeof t.gapFrom!="number"||typeof t.gapTo!="number"||typeof t.insert!="number")throw new RangeError("Invalid input for ReplaceAroundStep.fromJSON");return new Xe(t.from,t.to,t.gapFrom,t.gapTo,L.fromJSON(e,t.slice),t.insert,!!t.structure)}}fe.jsonID("replaceAround",Xe);function gn(r,e,t){let i=r.resolve(e),l=t-e,n=i.depth;for(;l>0&&n>0&&i.indexAfter(n)==i.node(n).childCount;)n--,l--;if(l>0){let s=i.node(n).maybeChild(i.indexAfter(n));for(;l>0;){if(!s||s.isLeaf)return!0;s=s.firstChild,l--}}return!1}function Fu(r,e,t){return(e==0||r.canReplace(e,r.childCount))&&(t==r.childCount||r.canReplace(0,t))}function Fn(r){let e=r.parent.content.cutByIndex(r.startIndex,r.endIndex);for(let t=r.depth;;--t){let i=r.$from.node(t),l=r.$from.index(t),n=r.$to.indexAfter(t);if(t<r.depth&&i.canReplace(l,n,e))return t;if(t==0||i.type.spec.isolating||!Fu(i,l,n))break}return null}function Ei(r,e,t=1,i){let l=r.resolve(e),n=l.depth-t,s=i&&i[i.length-1]||l.parent;if(n<0||l.parent.type.spec.isolating||!l.parent.canReplace(l.index(),l.parent.childCount)||!s.type.validContent(l.parent.content.cutByIndex(l.index(),l.parent.childCount)))return!1;for(let c=l.depth-1,d=t-2;c>n;c--,d--){let h=l.node(c),f=l.index(c);if(h.type.spec.isolating)return!1;let u=h.content.cutByIndex(f,h.childCount),p=i&&i[d+1];p&&(u=u.replaceChild(0,p.type.create(p.attrs)));let m=i&&i[d]||h;if(!h.canReplace(f+1,h.childCount)||!m.type.validContent(u))return!1}let a=l.indexAfter(n),o=i&&i[0];return l.node(n).canReplaceWith(a,a,o?o.type:l.node(n+1).type)}function mc(r,e){let t=r.resolve(e),i=t.index();return _u(t.nodeBefore,t.nodeAfter)&&t.parent.canReplace(i,i+1)}function Hu(r,e){e.content.size||r.type.compatibleContent(e.type);let t=r.contentMatchAt(r.childCount),{linebreakReplacement:i}=r.type.schema;for(let l=0;l<e.childCount;l++){let n=e.child(l),s=n.type==i?r.type.schema.nodes.text:n.type;if(t=t.matchType(s),!t||!r.type.allowsMarks(n.marks))return!1}return t.validEnd}function _u(r,e){return!!(r&&e&&!r.isLeaf&&Hu(r,e))}function $u(r,e,t){let i=r.resolve(e);if(!t.content.size)return e;let l=t.content;for(let n=0;n<t.openStart;n++)l=l.firstChild.content;for(let n=1;n<=(t.openStart==0&&t.size?2:1);n++)for(let s=i.depth;s>=0;s--){let a=s==i.depth?0:i.pos<=(i.start(s+1)+i.end(s+1))/2?-1:1,o=i.index(s)+(a>0?1:0),c=i.node(s),d=!1;if(n==1)d=c.canReplace(o,o,l);else{let h=c.contentMatchAt(o).findWrapping(l.firstChild.type);d=h&&c.canReplaceWith(o,o,h[0])}if(d)return a==0?i.pos:a<0?i.before(s+1):i.after(s+1)}return null}function gc(r,e,t=e,i=L.empty){if(e==t&&!i.size)return null;let l=r.resolve(e),n=r.resolve(t);return Vu(l,n,i)?new Be(e,t,i):new Gu(l,n,i).fit()}function Vu(r,e,t){return!t.openStart&&!t.openEnd&&r.start()==e.start()&&r.parent.canReplace(r.index(),e.index(),t.content)}class Gu{constructor(e,t,i){this.$from=e,this.$to=t,this.unplaced=i,this.frontier=[],this.placed=O.empty;for(let l=0;l<=e.depth;l++){let n=e.node(l);this.frontier.push({type:n.type,match:n.contentMatchAt(e.indexAfter(l))})}for(let l=e.depth;l>0;l--)this.placed=O.from(e.node(l).copy(this.placed))}get depth(){return this.frontier.length-1}fit(){for(;this.unplaced.size;){let c=this.findFittable();c?this.placeNodes(c):this.openMore()||this.dropNode()}let e=this.mustMoveInline(),t=this.placed.size-this.depth-this.$from.depth,i=this.$from,l=this.close(e<0?this.$to:i.doc.resolve(e));if(!l)return null;let n=this.placed,s=i.depth,a=l.depth;for(;s&&a&&n.childCount==1;)n=n.firstChild.content,s--,a--;let o=new L(n,s,a);return e>-1?new Xe(i.pos,e,this.$to.pos,this.$to.end(),o,t):o.size||i.pos!=this.$to.pos?new Be(i.pos,l.pos,o):null}findFittable(){let e=this.unplaced.openStart;for(let t=this.unplaced.content,i=0,l=this.unplaced.openEnd;i<e;i++){let n=t.firstChild;if(t.childCount>1&&(l=0),n.type.spec.isolating&&l<=i){e=i;break}t=n.content}for(let t=1;t<=2;t++)for(let i=t==1?e:this.unplaced.openStart;i>=0;i--){let l,n=null;i?(n=$l(this.unplaced.content,i-1).firstChild,l=n.content):l=this.unplaced.content;let s=l.firstChild;for(let a=this.depth;a>=0;a--){let{type:o,match:c}=this.frontier[a],d,h=null;if(t==1&&(s?c.matchType(s.type)||(h=c.fillBefore(O.from(s),!1)):n&&o.compatibleContent(n.type)))return{sliceDepth:i,frontierDepth:a,parent:n,inject:h};if(t==2&&s&&(d=c.findWrapping(s.type)))return{sliceDepth:i,frontierDepth:a,parent:n,wrap:d};if(n&&c.matchType(n.type))break}}}openMore(){let{content:e,openStart:t,openEnd:i}=this.unplaced,l=$l(e,t);return!l.childCount||l.firstChild.isLeaf?!1:(this.unplaced=new L(e,t+1,Math.max(i,l.size+t>=e.size-i?t+1:0)),!0)}dropNode(){let{content:e,openStart:t,openEnd:i}=this.unplaced,l=$l(e,t);if(l.childCount<=1&&t>0){let n=e.size-t<=t+l.size;this.unplaced=new L(mr(e,t-1,1),t-1,n?t-1:i)}else this.unplaced=new L(mr(e,t,1),t,i)}placeNodes({sliceDepth:e,frontierDepth:t,parent:i,inject:l,wrap:n}){for(;this.depth>t;)this.closeFrontierNode();if(n)for(let m=0;m<n.length;m++)this.openFrontierNode(n[m]);let s=this.unplaced,a=i?i.content:s.content,o=s.openStart-e,c=0,d=[],{match:h,type:f}=this.frontier[t];if(l){for(let m=0;m<l.childCount;m++)d.push(l.child(m));h=h.matchFragment(l)}let u=a.size+e-(s.content.size-s.openEnd);for(;c<a.childCount;){let m=a.child(c),x=h.matchType(m.type);if(!x)break;c++,(c>1||o==0||m.content.size)&&(h=x,d.push(xc(m.mark(f.allowedMarks(m.marks)),c==1?o:0,c==a.childCount?u:-1)))}let p=c==a.childCount;p||(u=-1),this.placed=gr(this.placed,t,O.from(d)),this.frontier[t].match=h,p&&u<0&&i&&i.type==this.frontier[this.depth].type&&this.frontier.length>1&&this.closeFrontierNode();for(let m=0,x=a;m<u;m++){let y=x.lastChild;this.frontier.push({type:y.type,match:y.contentMatchAt(y.childCount)}),x=y.content}this.unplaced=p?e==0?L.empty:new L(mr(s.content,e-1,1),e-1,u<0?s.openEnd:e-1):new L(mr(s.content,e,c),s.openStart,s.openEnd)}mustMoveInline(){if(!this.$to.parent.isTextblock)return-1;let e=this.frontier[this.depth],t;if(!e.type.isTextblock||!Vl(this.$to,this.$to.depth,e.type,e.match,!1)||this.$to.depth==this.depth&&(t=this.findCloseLevel(this.$to))&&t.depth==this.depth)return-1;let{depth:i}=this.$to,l=this.$to.after(i);for(;i>1&&l==this.$to.end(--i);)++l;return l}findCloseLevel(e){e:for(let t=Math.min(this.depth,e.depth);t>=0;t--){let{match:i,type:l}=this.frontier[t],n=t<e.depth&&e.end(t+1)==e.pos+(e.depth-(t+1)),s=Vl(e,t,l,i,n);if(s){for(let a=t-1;a>=0;a--){let{match:o,type:c}=this.frontier[a],d=Vl(e,a,c,o,!0);if(!d||d.childCount)continue e}return{depth:t,fit:s,move:n?e.doc.resolve(e.after(t+1)):e}}}}close(e){let t=this.findCloseLevel(e);if(!t)return null;for(;this.depth>t.depth;)this.closeFrontierNode();t.fit.childCount&&(this.placed=gr(this.placed,t.depth,t.fit)),e=t.move;for(let i=t.depth+1;i<=e.depth;i++){let l=e.node(i),n=l.type.contentMatch.fillBefore(l.content,!0,e.index(i));this.openFrontierNode(l.type,l.attrs,n)}return e}openFrontierNode(e,t=null,i){let l=this.frontier[this.depth];l.match=l.match.matchType(e),this.placed=gr(this.placed,this.depth,O.from(e.create(t,i))),this.frontier.push({type:e,match:e.contentMatch})}closeFrontierNode(){let e=this.frontier.pop().match.fillBefore(O.empty,!0);e.childCount&&(this.placed=gr(this.placed,this.frontier.length,e))}}function mr(r,e,t){return e==0?r.cutByIndex(t,r.childCount):r.replaceChild(0,r.firstChild.copy(mr(r.firstChild.content,e-1,t)))}function gr(r,e,t){return e==0?r.append(t):r.replaceChild(r.childCount-1,r.lastChild.copy(gr(r.lastChild.content,e-1,t)))}function $l(r,e){for(let t=0;t<e;t++)r=r.firstChild.content;return r}function xc(r,e,t){if(e<=0)return r;let i=r.content;return e>1&&(i=i.replaceChild(0,xc(i.firstChild,e-1,i.childCount==1?t-1:0))),e>0&&(i=r.type.contentMatch.fillBefore(i).append(i),t<=0&&(i=i.append(r.type.contentMatch.matchFragment(i).fillBefore(O.empty,!0)))),r.copy(i)}function Vl(r,e,t,i,l){let n=r.node(e),s=l?r.indexAfter(e):r.index(e);if(s==n.childCount&&!t.compatibleContent(n.type))return null;let a=i.fillBefore(n.content,!0,s);return a&&!qu(t,n.content,s)?a:null}function qu(r,e,t){for(let i=t;i<e.childCount;i++)if(!r.allowsMarks(e.child(i).marks))return!0;return!1}class Tr extends fe{constructor(e,t,i){super(),this.pos=e,this.attr=t,this.value=i}apply(e){let t=e.nodeAt(this.pos);if(!t)return le.fail("No node at attribute step's position");let i=Object.create(null);for(let n in t.attrs)i[n]=t.attrs[n];i[this.attr]=this.value;let l=t.type.create(i,null,t.marks);return le.fromReplace(e,this.pos,this.pos+1,new L(O.from(l),0,t.isLeaf?0:1))}getMap(){return Me.empty}invert(e){return new Tr(this.pos,this.attr,e.nodeAt(this.pos).attrs[this.attr])}map(e){let t=e.mapResult(this.pos,1);return t.deletedAfter?null:new Tr(t.pos,this.attr,this.value)}toJSON(){return{stepType:"attr",pos:this.pos,attr:this.attr,value:this.value}}static fromJSON(e,t){if(typeof t.pos!="number"||typeof t.attr!="string")throw new RangeError("Invalid input for AttrStep.fromJSON");return new Tr(t.pos,t.attr,t.value)}}fe.jsonID("attr",Tr);class Ui extends fe{constructor(e,t){super(),this.attr=e,this.value=t}apply(e){let t=Object.create(null);for(let l in e.attrs)t[l]=e.attrs[l];t[this.attr]=this.value;let i=e.type.create(t,e.content,e.marks);return le.ok(i)}getMap(){return Me.empty}invert(e){return new Ui(this.attr,e.attrs[this.attr])}map(e){return this}toJSON(){return{stepType:"docAttr",attr:this.attr,value:this.value}}static fromJSON(e,t){if(typeof t.attr!="string")throw new RangeError("Invalid input for DocAttrStep.fromJSON");return new Ui(t.attr,t.value)}}fe.jsonID("docAttr",Ui);let jr=class extends Error{};jr=function r(e){let t=Error.call(this,e);return t.__proto__=r.prototype,t};jr.prototype=Object.create(Error.prototype);jr.prototype.constructor=jr;jr.prototype.name="TransformError";const Gl=Object.create(null);class ${constructor(e,t,i){this.$anchor=e,this.$head=t,this.ranges=i||[new vc(e.min(t),e.max(t))]}get anchor(){return this.$anchor.pos}get head(){return this.$head.pos}get from(){return this.$from.pos}get to(){return this.$to.pos}get $from(){return this.ranges[0].$from}get $to(){return this.ranges[0].$to}get empty(){let e=this.ranges;for(let t=0;t<e.length;t++)if(e[t].$from.pos!=e[t].$to.pos)return!1;return!0}content(){return this.$from.doc.slice(this.from,this.to,!0)}replace(e,t=L.empty){let i=t.content.lastChild,l=null;for(let a=0;a<t.openEnd;a++)l=i,i=i.lastChild;let n=e.steps.length,s=this.ranges;for(let a=0;a<s.length;a++){let{$from:o,$to:c}=s[a],d=e.mapping.slice(n);e.replaceRange(d.map(o.pos),d.map(c.pos),a?L.empty:t),a==0&&va(e,n,(i?i.isInline:l&&l.isTextblock)?-1:1)}}replaceWith(e,t){let i=e.steps.length,l=this.ranges;for(let n=0;n<l.length;n++){let{$from:s,$to:a}=l[n],o=e.mapping.slice(i),c=o.map(s.pos),d=o.map(a.pos);n?e.deleteRange(c,d):(e.replaceRangeWith(c,d,t),va(e,i,t.isInline?-1:1))}}static findFrom(e,t,i=!1){let l=e.parent.inlineContent?new J(e):qt(e.node(0),e.parent,e.pos,e.index(),t,i);if(l)return l;for(let n=e.depth-1;n>=0;n--){let s=t<0?qt(e.node(0),e.node(n),e.before(n+1),e.index(n),t,i):qt(e.node(0),e.node(n),e.after(n+1),e.index(n)+1,t,i);if(s)return s}return null}static near(e,t=1){return this.findFrom(e,t)||this.findFrom(e,-t)||new Oe(e.node(0))}static atStart(e){return qt(e,e,0,0,1)||new Oe(e)}static atEnd(e){return qt(e,e,e.content.size,e.childCount,-1)||new Oe(e)}static fromJSON(e,t){if(!t||!t.type)throw new RangeError("Invalid input for Selection.fromJSON");let i=Gl[t.type];if(!i)throw new RangeError(`No selection type ${t.type} defined`);return i.fromJSON(e,t)}static jsonID(e,t){if(e in Gl)throw new RangeError("Duplicate use of selection JSON ID "+e);return Gl[e]=t,t.prototype.jsonID=e,t}getBookmark(){return J.between(this.$anchor,this.$head).getBookmark()}}$.prototype.visible=!0;class vc{constructor(e,t){this.$from=e,this.$to=t}}let ga=!1;function xa(r){!ga&&!r.parent.inlineContent&&(ga=!0,console.warn("TextSelection endpoint not pointing into a node with inline content ("+r.parent.type.name+")"))}class J extends ${constructor(e,t=e){xa(e),xa(t),super(e,t)}get $cursor(){return this.$anchor.pos==this.$head.pos?this.$head:null}map(e,t){let i=e.resolve(t.map(this.head));if(!i.parent.inlineContent)return $.near(i);let l=e.resolve(t.map(this.anchor));return new J(l.parent.inlineContent?l:i,i)}replace(e,t=L.empty){if(super.replace(e,t),t==L.empty){let i=this.$from.marksAcross(this.$to);i&&e.ensureMarks(i)}}eq(e){return e instanceof J&&e.anchor==this.anchor&&e.head==this.head}getBookmark(){return new ol(this.anchor,this.head)}toJSON(){return{type:"text",anchor:this.anchor,head:this.head}}static fromJSON(e,t){if(typeof t.anchor!="number"||typeof t.head!="number")throw new RangeError("Invalid input for TextSelection.fromJSON");return new J(e.resolve(t.anchor),e.resolve(t.head))}static create(e,t,i=t){let l=e.resolve(t);return new this(l,i==t?l:e.resolve(i))}static between(e,t,i){let l=e.pos-t.pos;if((!i||l)&&(i=l>=0?1:-1),!t.parent.inlineContent){let n=$.findFrom(t,i,!0)||$.findFrom(t,-i,!0);if(n)t=n.$head;else return $.near(t,i)}return e.parent.inlineContent||(l==0?e=t:(e=($.findFrom(e,-i,!0)||$.findFrom(e,i,!0)).$anchor,e.pos<t.pos!=l<0&&(e=t))),new J(e,t)}}$.jsonID("text",J);class ol{constructor(e,t){this.anchor=e,this.head=t}map(e){return new ol(e.map(this.anchor),e.map(this.head))}resolve(e){return J.between(e.resolve(this.anchor),e.resolve(this.head))}}class H extends ${constructor(e){let t=e.nodeAfter,i=e.node(0).resolve(e.pos+t.nodeSize);super(e,i),this.node=t}map(e,t){let{deleted:i,pos:l}=t.mapResult(this.anchor),n=e.resolve(l);return i?$.near(n):new H(n)}content(){return new L(O.from(this.node),0,0)}eq(e){return e instanceof H&&e.anchor==this.anchor}toJSON(){return{type:"node",anchor:this.anchor}}getBookmark(){return new Hn(this.anchor)}static fromJSON(e,t){if(typeof t.anchor!="number")throw new RangeError("Invalid input for NodeSelection.fromJSON");return new H(e.resolve(t.anchor))}static create(e,t){return new H(e.resolve(t))}static isSelectable(e){return!e.isText&&e.type.spec.selectable!==!1}}H.prototype.visible=!1;$.jsonID("node",H);class Hn{constructor(e){this.anchor=e}map(e){let{deleted:t,pos:i}=e.mapResult(this.anchor);return t?new ol(i,i):new Hn(i)}resolve(e){let t=e.resolve(this.anchor),i=t.nodeAfter;return i&&H.isSelectable(i)?new H(t):$.near(t)}}class Oe extends ${constructor(e){super(e.resolve(0),e.resolve(e.content.size))}replace(e,t=L.empty){if(t==L.empty){e.delete(0,e.doc.content.size);let i=$.atStart(e.doc);i.eq(e.selection)||e.setSelection(i)}else super.replace(e,t)}toJSON(){return{type:"all"}}static fromJSON(e){return new Oe(e)}map(e){return new Oe(e)}eq(e){return e instanceof Oe}getBookmark(){return Wu}}$.jsonID("all",Oe);const Wu={map(){return this},resolve(r){return new Oe(r)}};function qt(r,e,t,i,l,n=!1){if(e.inlineContent)return J.create(r,t);for(let s=i-(l>0?0:1);l>0?s<e.childCount:s>=0;s+=l){let a=e.child(s);if(a.isAtom){if(!n&&H.isSelectable(a))return H.create(r,t-(l<0?a.nodeSize:0))}else{let o=qt(r,a,t+l,l<0?a.childCount:0,l,n);if(o)return o}t+=a.nodeSize*l}return null}function va(r,e,t){let i=r.steps.length-1;if(i<e)return;let l=r.steps[i];if(!(l instanceof Be||l instanceof Xe))return;let n=r.mapping.maps[i],s;n.forEach((a,o,c,d)=>{s==null&&(s=d)}),r.setSelection($.near(r.doc.resolve(s),t))}function ya(r,e){return!e||!r?r:r.bind(e)}class oi{constructor(e,t,i){this.name=e,this.init=ya(t.init,i),this.apply=ya(t.apply,i)}}new oi("doc",{init(r){return r.doc||r.schema.topNodeType.createAndFill()},apply(r){return r.doc}}),new oi("selection",{init(r,e){return r.selection||$.atStart(e.doc)},apply(r){return r.selection}}),new oi("storedMarks",{init(r){return r.storedMarks||null},apply(r,e,t,i){return i.selection.$cursor?r.storedMarks:null}}),new oi("scrollToSelection",{init(){return 0},apply(r,e){return r.scrolledIntoView?e+1:e}});const ql=Object.create(null);function Uu(r){return r in ql?r+"$"+ ++ql[r]:(ql[r]=0,r+"$")}class $r{constructor(e="key"){this.key=Uu(e)}get(e){return e.config.pluginsByKey[this.key]}getState(e){return e[this.key]}}const yc=(r,e)=>r.selection.empty?!1:(e&&e(r.tr.deleteSelection().scrollIntoView()),!0);function Ku(r,e){let{$cursor:t}=r.selection;return!t||(e?!e.endOfTextblock("backward",r):t.parentOffset>0)?null:t}const Ju=(r,e,t)=>{let i=Ku(r,t);if(!i)return!1;let l=wc(i);if(!l){let s=i.blockRange(),a=s&&Fn(s);return a==null?!1:(e&&e(r.tr.lift(s,a).scrollIntoView()),!0)}let n=l.nodeBefore;if(Sc(r,l,e,-1))return!0;if(i.parent.content.size==0&&(rr(n,"end")||H.isSelectable(n)))for(let s=i.depth;;s--){let a=gc(r.doc,i.before(s),i.after(s),L.empty);if(a&&a.slice.size<a.to-a.from){if(e){let o=r.tr.step(a);o.setSelection(rr(n,"end")?$.findFrom(o.doc.resolve(o.mapping.map(l.pos,-1)),-1):H.create(o.doc,l.pos-n.nodeSize)),e(o.scrollIntoView())}return!0}if(s==1||i.node(s-1).childCount>1)break}return n.isAtom&&l.depth==i.depth-1?(e&&e(r.tr.delete(l.pos-n.nodeSize,l.pos).scrollIntoView()),!0):!1};function rr(r,e,t=!1){for(let i=r;i;i=e=="start"?i.firstChild:i.lastChild){if(i.isTextblock)return!0;if(t&&i.childCount!=1)return!1}return!1}const Yu=(r,e,t)=>{let{$head:i,empty:l}=r.selection,n=i;if(!l)return!1;if(i.parent.isTextblock){if(t?!t.endOfTextblock("backward",r):i.parentOffset>0)return!1;n=wc(i)}let s=n&&n.nodeBefore;return!s||!H.isSelectable(s)?!1:(e&&e(r.tr.setSelection(H.create(r.doc,n.pos-s.nodeSize)).scrollIntoView()),!0)};function wc(r){if(!r.parent.type.spec.isolating)for(let e=r.depth-1;e>=0;e--){if(r.index(e)>0)return r.doc.resolve(r.before(e+1));if(r.node(e).type.spec.isolating)break}return null}function Xu(r,e){let{$cursor:t}=r.selection;return!t||(e?!e.endOfTextblock("forward",r):t.parentOffset<t.parent.content.size)?null:t}const Zu=(r,e,t)=>{let i=Xu(r,t);if(!i)return!1;let l=bc(i);if(!l)return!1;let n=l.nodeAfter;if(Sc(r,l,e,1))return!0;if(i.parent.content.size==0&&(rr(n,"start")||H.isSelectable(n))){let s=gc(r.doc,i.before(),i.after(),L.empty);if(s&&s.slice.size<s.to-s.from){if(e){let a=r.tr.step(s);a.setSelection(rr(n,"start")?$.findFrom(a.doc.resolve(a.mapping.map(l.pos)),1):H.create(a.doc,a.mapping.map(l.pos))),e(a.scrollIntoView())}return!0}}return n.isAtom&&l.depth==i.depth-1?(e&&e(r.tr.delete(l.pos,l.pos+n.nodeSize).scrollIntoView()),!0):!1},Qu=(r,e,t)=>{let{$head:i,empty:l}=r.selection,n=i;if(!l)return!1;if(i.parent.isTextblock){if(t?!t.endOfTextblock("forward",r):i.parentOffset<i.parent.content.size)return!1;n=bc(i)}let s=n&&n.nodeAfter;return!s||!H.isSelectable(s)?!1:(e&&e(r.tr.setSelection(H.create(r.doc,n.pos)).scrollIntoView()),!0)};function bc(r){if(!r.parent.type.spec.isolating)for(let e=r.depth-1;e>=0;e--){let t=r.node(e);if(r.index(e)+1<t.childCount)return r.doc.resolve(r.after(e+1));if(t.type.spec.isolating)break}return null}const ep=(r,e)=>{let{$head:t,$anchor:i}=r.selection;return!t.parent.type.spec.code||!t.sameParent(i)?!1:(e&&e(r.tr.insertText(`
`).scrollIntoView()),!0)};function kc(r){for(let e=0;e<r.edgeCount;e++){let{type:t}=r.edge(e);if(t.isTextblock&&!t.hasRequiredAttrs())return t}return null}const tp=(r,e)=>{let t=r.selection,{$from:i,$to:l}=t;if(t instanceof Oe||i.parent.inlineContent||l.parent.inlineContent)return!1;let n=kc(l.parent.contentMatchAt(l.indexAfter()));if(!n||!n.isTextblock)return!1;if(e){let s=(!i.parentOffset&&l.index()<l.parent.childCount?i:l).pos,a=r.tr.insert(s,n.createAndFill());a.setSelection(J.create(a.doc,s+1)),e(a.scrollIntoView())}return!0},rp=(r,e)=>{let{$cursor:t}=r.selection;if(!t||t.parent.content.size)return!1;if(t.depth>1&&t.after()!=t.end(-1)){let n=t.before();if(Ei(r.doc,n))return e&&e(r.tr.split(n).scrollIntoView()),!0}let i=t.blockRange(),l=i&&Fn(i);return l==null?!1:(e&&e(r.tr.lift(i,l).scrollIntoView()),!0)};function ip(r){return(e,t)=>{let{$from:i,$to:l}=e.selection;if(e.selection instanceof H&&e.selection.node.isBlock)return!i.parentOffset||!Ei(e.doc,i.pos)?!1:(t&&t(e.tr.split(i.pos).scrollIntoView()),!0);if(!i.depth)return!1;let n=[],s,a,o=!1,c=!1;for(let u=i.depth;;u--)if(i.node(u).isBlock){o=i.end(u)==i.pos+(i.depth-u),c=i.start(u)==i.pos-(i.depth-u),a=kc(i.node(u-1).contentMatchAt(i.indexAfter(u-1))),n.unshift(o&&a?{type:a}:null),s=u;break}else{if(u==1)return!1;n.unshift(null)}let d=e.tr;(e.selection instanceof J||e.selection instanceof Oe)&&d.deleteSelection();let h=d.mapping.map(i.pos),f=Ei(d.doc,h,n.length,n);if(f||(n[0]=a?{type:a}:null,f=Ei(d.doc,h,n.length,n)),d.split(h,n.length,n),!o&&c&&i.node(s).type!=a){let u=d.mapping.map(i.before(s)),p=d.doc.resolve(u);a&&i.node(s-1).canReplaceWith(p.index(),p.index()+1,a)&&d.setNodeMarkup(d.mapping.map(i.before(s)),a)}return t&&t(d.scrollIntoView()),!0}}const lp=ip();function np(r,e,t){let i=e.nodeBefore,l=e.nodeAfter,n=e.index();return!i||!l||!i.type.compatibleContent(l.type)?!1:!i.content.size&&e.parent.canReplace(n-1,n)?(t&&t(r.tr.delete(e.pos-i.nodeSize,e.pos).scrollIntoView()),!0):!e.parent.canReplace(n,n+1)||!(l.isTextblock||mc(r.doc,e.pos))?!1:(t&&t(r.tr.join(e.pos).scrollIntoView()),!0)}function Sc(r,e,t,i){let l=e.nodeBefore,n=e.nodeAfter,s,a,o=l.type.spec.isolating||n.type.spec.isolating;if(!o&&np(r,e,t))return!0;let c=!o&&e.parent.canReplace(e.index(),e.index()+1);if(c&&(s=(a=l.contentMatchAt(l.childCount)).findWrapping(n.type))&&a.matchType(s[0]||n.type).validEnd){if(t){let u=e.pos+n.nodeSize,p=O.empty;for(let y=s.length-1;y>=0;y--)p=O.from(s[y].create(null,p));p=O.from(l.copy(p));let m=r.tr.step(new Xe(e.pos-1,u,e.pos,u,new L(p,1,0),s.length,!0)),x=m.doc.resolve(u+2*s.length);x.nodeAfter&&x.nodeAfter.type==l.type&&mc(m.doc,x.pos)&&m.join(x.pos),t(m.scrollIntoView())}return!0}let d=n.type.spec.isolating||i>0&&o?null:$.findFrom(e,1),h=d&&d.$from.blockRange(d.$to),f=h&&Fn(h);if(f!=null&&f>=e.depth)return t&&t(r.tr.lift(h,f).scrollIntoView()),!0;if(c&&rr(n,"start",!0)&&rr(l,"end")){let u=l,p=[];for(;p.push(u),!u.isTextblock;)u=u.lastChild;let m=n,x=1;for(;!m.isTextblock;m=m.firstChild)x++;if(u.canReplace(u.childCount,u.childCount,m.content)){if(t){let y=O.empty;for(let g=p.length-1;g>=0;g--)y=O.from(p[g].copy(y));let k=r.tr.step(new Xe(e.pos-p.length,e.pos+n.nodeSize,e.pos+x,e.pos+n.nodeSize-x,new L(y,p.length,0),0,!0));t(k.scrollIntoView())}return!0}}return!1}function _n(...r){return function(e,t,i){for(let l=0;l<r.length;l++)if(r[l](e,t,i))return!0;return!1}}_n(yc,Ju,Yu);_n(yc,Zu,Qu);_n(ep,tp,rp,lp);typeof navigator<"u"?/Mac|iP(hone|[oa]d)/.test(navigator.platform):typeof os<"u"&&os.platform&&os.platform()=="darwin";var Ki=200,ne=function(){};ne.prototype.append=function(r){return r.length?(r=ne.from(r),!this.length&&r||r.length<Ki&&this.leafAppend(r)||this.length<Ki&&r.leafPrepend(this)||this.appendInner(r)):this};ne.prototype.prepend=function(r){return r.length?ne.from(r).append(this):this};ne.prototype.appendInner=function(r){return new sp(this,r)};ne.prototype.slice=function(r,e){return r===void 0&&(r=0),e===void 0&&(e=this.length),r>=e?ne.empty:this.sliceInner(Math.max(0,r),Math.min(this.length,e))};ne.prototype.get=function(r){if(!(r<0||r>=this.length))return this.getInner(r)};ne.prototype.forEach=function(r,e,t){e===void 0&&(e=0),t===void 0&&(t=this.length),e<=t?this.forEachInner(r,e,t,0):this.forEachInvertedInner(r,e,t,0)};ne.prototype.map=function(r,e,t){e===void 0&&(e=0),t===void 0&&(t=this.length);var i=[];return this.forEach(function(l,n){return i.push(r(l,n))},e,t),i};ne.from=function(r){return r instanceof ne?r:r&&r.length?new Mc(r):ne.empty};var Mc=function(r){function e(i){r.call(this),this.values=i}r&&(e.__proto__=r),e.prototype=Object.create(r&&r.prototype),e.prototype.constructor=e;var t={length:{configurable:!0},depth:{configurable:!0}};return e.prototype.flatten=function(){return this.values},e.prototype.sliceInner=function(i,l){return i==0&&l==this.length?this:new e(this.values.slice(i,l))},e.prototype.getInner=function(i){return this.values[i]},e.prototype.forEachInner=function(i,l,n,s){for(var a=l;a<n;a++)if(i(this.values[a],s+a)===!1)return!1},e.prototype.forEachInvertedInner=function(i,l,n,s){for(var a=l-1;a>=n;a--)if(i(this.values[a],s+a)===!1)return!1},e.prototype.leafAppend=function(i){if(this.length+i.length<=Ki)return new e(this.values.concat(i.flatten()))},e.prototype.leafPrepend=function(i){if(this.length+i.length<=Ki)return new e(i.flatten().concat(this.values))},t.length.get=function(){return this.values.length},t.depth.get=function(){return 0},Object.defineProperties(e.prototype,t),e}(ne);ne.empty=new Mc([]);var sp=function(r){function e(t,i){r.call(this),this.left=t,this.right=i,this.length=t.length+i.length,this.depth=Math.max(t.depth,i.depth)+1}return r&&(e.__proto__=r),e.prototype=Object.create(r&&r.prototype),e.prototype.constructor=e,e.prototype.flatten=function(){return this.left.flatten().concat(this.right.flatten())},e.prototype.getInner=function(t){return t<this.left.length?this.left.get(t):this.right.get(t-this.left.length)},e.prototype.forEachInner=function(t,i,l,n){var s=this.left.length;if(i<s&&this.left.forEachInner(t,i,Math.min(l,s),n)===!1||l>s&&this.right.forEachInner(t,Math.max(i-s,0),Math.min(this.length,l)-s,n+s)===!1)return!1},e.prototype.forEachInvertedInner=function(t,i,l,n){var s=this.left.length;if(i>s&&this.right.forEachInvertedInner(t,i-s,Math.max(l,s)-s,n+s)===!1||l<s&&this.left.forEachInvertedInner(t,Math.min(i,s),l,n)===!1)return!1},e.prototype.sliceInner=function(t,i){if(t==0&&i==this.length)return this;var l=this.left.length;return i<=l?this.left.slice(t,i):t>=l?this.right.slice(t-l,i-l):this.left.slice(t,l).append(this.right.slice(0,i-l))},e.prototype.leafAppend=function(t){var i=this.right.leafAppend(t);if(i)return new e(this.left,i)},e.prototype.leafPrepend=function(t){var i=this.left.leafPrepend(t);if(i)return new e(i,this.right)},e.prototype.appendInner=function(t){return this.left.depth>=Math.max(this.right.depth,t.depth)+1?new e(this.left,new e(this.right,t)):new e(this,t)},e}(ne);const ap=500;class nt{constructor(e,t){this.items=e,this.eventCount=t}popEvent(e,t){if(this.eventCount==0)return null;let i=this.items.length;for(;;i--)if(this.items.get(i-1).selection){--i;break}let l,n;t&&(l=this.remapping(i,this.items.length),n=l.maps.length);let s=e.tr,a,o,c=[],d=[];return this.items.forEach((h,f)=>{if(!h.step){l||(l=this.remapping(i,f+1),n=l.maps.length),n--,d.push(h);return}if(l){d.push(new Fe(h.map));let u=h.step.map(l.slice(n)),p;u&&s.maybeStep(u).doc&&(p=s.mapping.maps[s.mapping.maps.length-1],c.push(new Fe(p,void 0,void 0,c.length+d.length))),n--,p&&l.appendMap(p,n)}else s.maybeStep(h.step);if(h.selection)return a=l?h.selection.map(l.slice(n)):h.selection,o=new nt(this.items.slice(0,i).append(d.reverse().concat(c)),this.eventCount-1),!1},this.items.length,0),{remaining:o,transform:s,selection:a}}addTransform(e,t,i,l){let n=[],s=this.eventCount,a=this.items,o=!l&&a.length?a.get(a.length-1):null;for(let d=0;d<e.steps.length;d++){let h=e.steps[d].invert(e.docs[d]),f=new Fe(e.mapping.maps[d],h,t),u;(u=o&&o.merge(f))&&(f=u,d?n.pop():a=a.slice(0,a.length-1)),n.push(f),t&&(s++,t=void 0),l||(o=f)}let c=s-i.depth;return c>cp&&(a=op(a,c),s-=c),new nt(a.append(n),s)}remapping(e,t){let i=new Cr;return this.items.forEach((l,n)=>{let s=l.mirrorOffset!=null&&n-l.mirrorOffset>=e?i.maps.length-l.mirrorOffset:void 0;i.appendMap(l.map,s)},e,t),i}addMaps(e){return this.eventCount==0?this:new nt(this.items.append(e.map(t=>new Fe(t))),this.eventCount)}rebased(e,t){if(!this.eventCount)return this;let i=[],l=Math.max(0,this.items.length-t),n=e.mapping,s=e.steps.length,a=this.eventCount;this.items.forEach(f=>{f.selection&&a--},l);let o=t;this.items.forEach(f=>{let u=n.getMirror(--o);if(u==null)return;s=Math.min(s,u);let p=n.maps[u];if(f.step){let m=e.steps[u].invert(e.docs[u]),x=f.selection&&f.selection.map(n.slice(o+1,u));x&&a++,i.push(new Fe(p,m,x))}else i.push(new Fe(p))},l);let c=[];for(let f=t;f<s;f++)c.push(new Fe(n.maps[f]));let d=this.items.slice(0,l).append(c).append(i),h=new nt(d,a);return h.emptyItemCount()>ap&&(h=h.compress(this.items.length-i.length)),h}emptyItemCount(){let e=0;return this.items.forEach(t=>{t.step||e++}),e}compress(e=this.items.length){let t=this.remapping(0,e),i=t.maps.length,l=[],n=0;return this.items.forEach((s,a)=>{if(a>=e)l.push(s),s.selection&&n++;else if(s.step){let o=s.step.map(t.slice(i)),c=o&&o.getMap();if(i--,c&&t.appendMap(c,i),o){let d=s.selection&&s.selection.map(t.slice(i));d&&n++;let h=new Fe(c.invert(),o,d),f,u=l.length-1;(f=l.length&&l[u].merge(h))?l[u]=f:l.push(h)}}else s.map&&i--},this.items.length,0),new nt(ne.from(l.reverse()),n)}}nt.empty=new nt(ne.empty,0);function op(r,e){let t;return r.forEach((i,l)=>{if(i.selection&&e--==0)return t=l,!1}),r.slice(t)}class Fe{constructor(e,t,i,l){this.map=e,this.step=t,this.selection=i,this.mirrorOffset=l}merge(e){if(this.step&&e.step&&!e.selection){let t=e.step.merge(this.step);if(t)return new Fe(t.getMap().invert(),t,this.selection)}}}const cp=20;new $r("history");new $r("closeHistory");var dt={8:"Backspace",9:"Tab",10:"Enter",12:"NumLock",13:"Enter",16:"Shift",17:"Control",18:"Alt",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",44:"PrintScreen",45:"Insert",46:"Delete",59:";",61:"=",91:"Meta",92:"Meta",106:"*",107:"+",108:",",109:"-",110:".",111:"/",144:"NumLock",145:"ScrollLock",160:"Shift",161:"Shift",162:"Control",163:"Control",164:"Alt",165:"Alt",173:"-",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},Ji={48:")",49:"!",50:"@",51:"#",52:"$",53:"%",54:"^",55:"&",56:"*",57:"(",59:":",61:"+",173:"_",186:":",187:"+",188:"<",189:"_",190:">",191:"?",192:"~",219:"{",220:"|",221:"}",222:'"'},dp=typeof navigator<"u"&&/Mac/.test(navigator.platform),hp=typeof navigator<"u"&&/MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);for(var ce=0;ce<10;ce++)dt[48+ce]=dt[96+ce]=String(ce);for(var ce=1;ce<=24;ce++)dt[ce+111]="F"+ce;for(var ce=65;ce<=90;ce++)dt[ce]=String.fromCharCode(ce+32),Ji[ce]=String.fromCharCode(ce);for(var Wl in dt)Ji.hasOwnProperty(Wl)||(Ji[Wl]=dt[Wl]);function fp(r){var e=dp&&r.metaKey&&r.shiftKey&&!r.ctrlKey&&!r.altKey||hp&&r.shiftKey&&r.key&&r.key.length==1||r.key=="Unidentified",t=!e&&r.key||(r.shiftKey?Ji:dt)[r.keyCode]||r.key||"Unidentified";return t=="Esc"&&(t="Escape"),t=="Del"&&(t="Delete"),t=="Left"&&(t="ArrowLeft"),t=="Up"&&(t="ArrowUp"),t=="Right"&&(t="ArrowRight"),t=="Down"&&(t="ArrowDown"),t}const up=typeof navigator<"u"?/Mac|iP(hone|[oa]d)/.test(navigator.platform):!1;function pp(r){let e=r.split(/-(?!$)/),t=e[e.length-1];t=="Space"&&(t=" ");let i,l,n,s;for(let a=0;a<e.length-1;a++){let o=e[a];if(/^(cmd|meta|m)$/i.test(o))s=!0;else if(/^a(lt)?$/i.test(o))i=!0;else if(/^(c|ctrl|control)$/i.test(o))l=!0;else if(/^s(hift)?$/i.test(o))n=!0;else if(/^mod$/i.test(o))up?s=!0:l=!0;else throw new Error("Unrecognized modifier name: "+o)}return i&&(t="Alt-"+t),l&&(t="Ctrl-"+t),s&&(t="Meta-"+t),n&&(t="Shift-"+t),t}function mp(r){let e=Object.create(null);for(let t in r)e[pp(t)]=r[t];return e}function Ul(r,e,t=!0){return e.altKey&&(r="Alt-"+r),e.ctrlKey&&(r="Ctrl-"+r),e.metaKey&&(r="Meta-"+r),t&&e.shiftKey&&(r="Shift-"+r),r}function gp(r){let e=mp(r);return function(t,i){let l=fp(i),n,s=e[Ul(l,i)];if(s&&s(t.state,t.dispatch,t))return!0;if(l.length==1&&l!=" "){if(i.shiftKey){let a=e[Ul(l,i,!1)];if(a&&a(t.state,t.dispatch,t))return!0}if((i.shiftKey||i.altKey||i.metaKey||l.charCodeAt(0)>127)&&(n=dt[i.keyCode])&&n!=l){let a=e[Ul(n,i)];if(a&&a(t.state,t.dispatch,t))return!0}}return!1}}const Bt=function(r){for(var e=0;;e++)if(r=r.previousSibling,!r)return e},Cc=function(r,e,t,i){return t&&(wa(r,e,t,i,-1)||wa(r,e,t,i,1))},xp=/^(img|br|input|textarea|hr)$/i;function wa(r,e,t,i,l){for(;;){if(r==t&&e==i)return!0;if(e==(l<0?0:Yi(r))){let n=r.parentNode;if(!n||n.nodeType!=1||$n(r)||xp.test(r.nodeName)||r.contentEditable=="false")return!1;e=Bt(r)+(l<0?0:1),r=n}else if(r.nodeType==1){if(r=r.childNodes[e+(l<0?-1:0)],r.contentEditable=="false")return!1;e=l<0?Yi(r):0}else return!1}}function Yi(r){return r.nodeType==3?r.nodeValue.length:r.childNodes.length}function vp(r,e,t){for(let i=e==0,l=e==Yi(r);i||l;){if(r==t)return!0;let n=Bt(r);if(r=r.parentNode,!r)return!1;i=i&&n==0,l=l&&n==Yi(r)}}function $n(r){let e;for(let t=r;t&&!(e=t.pmViewDesc);t=t.parentNode);return e&&e.node&&e.node.isBlock&&(e.dom==r||e.contentDOM==r)}const Tc=function(r){return r.focusNode&&Cc(r.focusNode,r.focusOffset,r.anchorNode,r.anchorOffset)};function Ec(r,e){let t=document.createEvent("Event");return t.initEvent("keydown",!0,!0),t.keyCode=r,t.key=t.code=e,t}const Ve=typeof navigator<"u"?navigator:null,ba=typeof document<"u"?document:null,ht=Ve&&Ve.userAgent||"",xn=/Edge\/(\d+)/.exec(ht),zc=/MSIE \d/.exec(ht),vn=/Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(ht),Vr=!!(zc||vn||xn),Ac=zc?document.documentMode:vn?+vn[1]:xn?+xn[1]:0,cl=!Vr&&/gecko\/(\d+)/i.test(ht);cl&&+(/Firefox\/(\d+)/.exec(ht)||[0,0])[1];const yn=!Vr&&/Chrome\/(\d+)/.exec(ht),ft=!!yn,Oc=yn?+yn[1]:0,Pt=!Vr&&!!Ve&&/Apple Computer/.test(Ve.vendor),Vn=Pt&&(/Mobile\/\w+/.test(ht)||!!Ve&&Ve.maxTouchPoints>2),Ae=Vn||(Ve?/Mac/.test(Ve.platform):!1),yp=Ve?/Win/.test(Ve.platform):!1,Gr=/Android \d/.test(ht),Gn=!!ba&&"webkitFontSmoothing"in ba.documentElement.style,wp=Gn?+(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent)||[0,0])[1]:0;function bp(r,e=null){let t=r.domSelectionRange(),i=r.state.doc;if(!t.focusNode)return null;let l=r.docView.nearestDesc(t.focusNode),n=l&&l.size==0,s=r.docView.posFromDOM(t.focusNode,t.focusOffset,1);if(s<0)return null;let a=i.resolve(s),o,c;if(Tc(t)){for(o=s;l&&!l.node;)l=l.parent;let h=l.node;if(l&&h.isAtom&&H.isSelectable(h)&&l.parent&&!(h.isInline&&vp(t.focusNode,t.focusOffset,l.dom))){let f=l.posBefore;c=new H(s==f?a:i.resolve(f))}}else{if(t instanceof r.dom.ownerDocument.defaultView.Selection&&t.rangeCount>1){let h=s,f=s;for(let u=0;u<t.rangeCount;u++){let p=t.getRangeAt(u);h=Math.min(h,r.docView.posFromDOM(p.startContainer,p.startOffset,1)),f=Math.max(f,r.docView.posFromDOM(p.endContainer,p.endOffset,-1))}if(h<0)return null;[o,s]=f==r.state.selection.anchor?[f,h]:[h,f],a=i.resolve(s)}else o=r.docView.posFromDOM(t.anchorNode,t.anchorOffset,1);if(o<0)return null}let d=i.resolve(o);if(!c){let h=e=="pointer"||r.state.selection.head<a.pos&&!n?1:-1;c=jc(r,d,a,h)}return c}function Lc(r){return r.editable?r.hasFocus():Cp(r)&&document.activeElement&&document.activeElement.contains(r.dom)}function qn(r,e=!1){let t=r.state.selection;if(Mp(r,t),!!Lc(r)){if(!e&&r.input.mouseDown&&r.input.mouseDown.allowDefault&&ft){let i=r.domSelectionRange(),l=r.domObserver.currentSelection;if(i.anchorNode&&l.anchorNode&&Cc(i.anchorNode,i.anchorOffset,l.anchorNode,l.anchorOffset)){r.input.mouseDown.delayedSelectionSync=!0,r.domObserver.setCurSelection();return}}if(r.domObserver.disconnectSelection(),r.cursorWrapper)Sp(r);else{let{anchor:i,head:l}=t,n,s;ka&&!(t instanceof J)&&(t.$from.parent.inlineContent||(n=Sa(r,t.from)),!t.empty&&!t.$from.parent.inlineContent&&(s=Sa(r,t.to))),r.docView.setSelection(i,l,r,e),ka&&(n&&Ma(n),s&&Ma(s)),t.visible?r.dom.classList.remove("ProseMirror-hideselection"):(r.dom.classList.add("ProseMirror-hideselection"),"onselectionchange"in document&&kp(r))}r.domObserver.setCurSelection(),r.domObserver.connectSelection()}}const ka=Pt||ft&&Oc<63;function Sa(r,e){let{node:t,offset:i}=r.docView.domFromPos(e,0),l=i<t.childNodes.length?t.childNodes[i]:null,n=i?t.childNodes[i-1]:null;if(Pt&&l&&l.contentEditable=="false")return Kl(l);if((!l||l.contentEditable=="false")&&(!n||n.contentEditable=="false")){if(l)return Kl(l);if(n)return Kl(n)}}function Kl(r){return r.contentEditable="true",Pt&&r.draggable&&(r.draggable=!1,r.wasDraggable=!0),r}function Ma(r){r.contentEditable="false",r.wasDraggable&&(r.draggable=!0,r.wasDraggable=null)}function kp(r){let e=r.dom.ownerDocument;e.removeEventListener("selectionchange",r.input.hideSelectionGuard);let t=r.domSelectionRange(),i=t.anchorNode,l=t.anchorOffset;e.addEventListener("selectionchange",r.input.hideSelectionGuard=()=>{(t.anchorNode!=i||t.anchorOffset!=l)&&(e.removeEventListener("selectionchange",r.input.hideSelectionGuard),setTimeout(()=>{(!Lc(r)||r.state.selection.visible)&&r.dom.classList.remove("ProseMirror-hideselection")},20))})}function Sp(r){let e=r.domSelection(),t=document.createRange();if(!e)return;let i=r.cursorWrapper.dom,l=i.nodeName=="IMG";l?t.setStart(i.parentNode,Bt(i)+1):t.setStart(i,0),t.collapse(!0),e.removeAllRanges(),e.addRange(t),!l&&!r.state.selection.visible&&Vr&&Ac<=11&&(i.disabled=!0,i.disabled=!1)}function Mp(r,e){if(e instanceof H){let t=r.docView.descAt(e.from);t!=r.lastSelectedViewDesc&&(Ca(r),t&&t.selectNode(),r.lastSelectedViewDesc=t)}else Ca(r)}function Ca(r){r.lastSelectedViewDesc&&(r.lastSelectedViewDesc.parent&&r.lastSelectedViewDesc.deselectNode(),r.lastSelectedViewDesc=void 0)}function jc(r,e,t,i){return r.someProp("createSelectionBetween",l=>l(r,e,t))||J.between(e,t,i)}function Cp(r){let e=r.domSelectionRange();if(!e.anchorNode)return!1;try{return r.dom.contains(e.anchorNode.nodeType==3?e.anchorNode.parentNode:e.anchorNode)&&(r.editable||r.dom.contains(e.focusNode.nodeType==3?e.focusNode.parentNode:e.focusNode))}catch{return!1}}function wn(r,e){let{$anchor:t,$head:i}=r.selection,l=e>0?t.max(i):t.min(i),n=l.parent.inlineContent?l.depth?r.doc.resolve(e>0?l.after():l.before()):null:l;return n&&$.findFrom(n,e)}function it(r,e){return r.dispatch(r.state.tr.setSelection(e).scrollIntoView()),!0}function Ta(r,e,t){let i=r.state.selection;if(i instanceof J)if(t.indexOf("s")>-1){let{$head:l}=i,n=l.textOffset?null:e<0?l.nodeBefore:l.nodeAfter;if(!n||n.isText||!n.isLeaf)return!1;let s=r.state.doc.resolve(l.pos+n.nodeSize*(e<0?-1:1));return it(r,new J(i.$anchor,s))}else if(i.empty){if(r.endOfTextblock(e>0?"forward":"backward")){let l=wn(r.state,e);return l&&l instanceof H?it(r,l):!1}else if(!(Ae&&t.indexOf("m")>-1)){let l=i.$head,n=l.textOffset?null:e<0?l.nodeBefore:l.nodeAfter,s;if(!n||n.isText)return!1;let a=e<0?l.pos-n.nodeSize:l.pos;return n.isAtom||(s=r.docView.descAt(a))&&!s.contentDOM?H.isSelectable(n)?it(r,new H(e<0?r.state.doc.resolve(l.pos-n.nodeSize):l)):Gn?it(r,new J(r.state.doc.resolve(e<0?a:a+n.nodeSize))):!1:!1}}else return!1;else{if(i instanceof H&&i.node.isInline)return it(r,new J(e>0?i.$to:i.$from));{let l=wn(r.state,e);return l?it(r,l):!1}}}function Xi(r){return r.nodeType==3?r.nodeValue.length:r.childNodes.length}function Er(r,e){let t=r.pmViewDesc;return t&&t.size==0&&(e<0||r.nextSibling||r.nodeName!="BR")}function _t(r,e){return e<0?Tp(r):Ep(r)}function Tp(r){let e=r.domSelectionRange(),t=e.focusNode,i=e.focusOffset;if(!t)return;let l,n,s=!1;for(cl&&t.nodeType==1&&i<Xi(t)&&Er(t.childNodes[i],-1)&&(s=!0);;)if(i>0){if(t.nodeType!=1)break;{let a=t.childNodes[i-1];if(Er(a,-1))l=t,n=--i;else if(a.nodeType==3)t=a,i=t.nodeValue.length;else break}}else{if(Bc(t))break;{let a=t.previousSibling;for(;a&&Er(a,-1);)l=t.parentNode,n=Bt(a),a=a.previousSibling;if(a)t=a,i=Xi(t);else{if(t=t.parentNode,t==r.dom)break;i=0}}}s?bn(r,t,i):l&&bn(r,l,n)}function Ep(r){let e=r.domSelectionRange(),t=e.focusNode,i=e.focusOffset;if(!t)return;let l=Xi(t),n,s;for(;;)if(i<l){if(t.nodeType!=1)break;let a=t.childNodes[i];if(Er(a,1))n=t,s=++i;else break}else{if(Bc(t))break;{let a=t.nextSibling;for(;a&&Er(a,1);)n=a.parentNode,s=Bt(a)+1,a=a.nextSibling;if(a)t=a,i=0,l=Xi(t);else{if(t=t.parentNode,t==r.dom)break;i=l=0}}}n&&bn(r,n,s)}function Bc(r){let e=r.pmViewDesc;return e&&e.node&&e.node.isBlock}function zp(r,e){for(;r&&e==r.childNodes.length&&!$n(r);)e=Bt(r)+1,r=r.parentNode;for(;r&&e<r.childNodes.length;){let t=r.childNodes[e];if(t.nodeType==3)return t;if(t.nodeType==1&&t.contentEditable=="false")break;r=t,e=0}}function Ap(r,e){for(;r&&!e&&!$n(r);)e=Bt(r),r=r.parentNode;for(;r&&e;){let t=r.childNodes[e-1];if(t.nodeType==3)return t;if(t.nodeType==1&&t.contentEditable=="false")break;r=t,e=r.childNodes.length}}function bn(r,e,t){if(e.nodeType!=3){let n,s;(s=zp(e,t))?(e=s,t=0):(n=Ap(e,t))&&(e=n,t=n.nodeValue.length)}let i=r.domSelection();if(!i)return;if(Tc(i)){let n=document.createRange();n.setEnd(e,t),n.setStart(e,t),i.removeAllRanges(),i.addRange(n)}else i.extend&&i.extend(e,t);r.domObserver.setCurSelection();let{state:l}=r;setTimeout(()=>{r.state==l&&qn(r)},50)}function Ea(r,e){let t=r.state.doc.resolve(e);if(!(ft||yp)&&t.parent.inlineContent){let i=r.coordsAtPos(e);if(e>t.start()){let l=r.coordsAtPos(e-1),n=(l.top+l.bottom)/2;if(n>i.top&&n<i.bottom&&Math.abs(l.left-i.left)>1)return l.left<i.left?"ltr":"rtl"}if(e<t.end()){let l=r.coordsAtPos(e+1),n=(l.top+l.bottom)/2;if(n>i.top&&n<i.bottom&&Math.abs(l.left-i.left)>1)return l.left>i.left?"ltr":"rtl"}}return getComputedStyle(r.dom).direction=="rtl"?"rtl":"ltr"}function za(r,e,t){let i=r.state.selection;if(i instanceof J&&!i.empty||t.indexOf("s")>-1||Ae&&t.indexOf("m")>-1)return!1;let{$from:l,$to:n}=i;if(!l.parent.inlineContent||r.endOfTextblock(e<0?"up":"down")){let s=wn(r.state,e);if(s&&s instanceof H)return it(r,s)}if(!l.parent.inlineContent){let s=e<0?l:n,a=i instanceof Oe?$.near(s,e):$.findFrom(s,e);return a?it(r,a):!1}return!1}function Aa(r,e){if(!(r.state.selection instanceof J))return!0;let{$head:t,$anchor:i,empty:l}=r.state.selection;if(!t.sameParent(i))return!0;if(!l)return!1;if(r.endOfTextblock(e>0?"forward":"backward"))return!0;let n=!t.textOffset&&(e<0?t.nodeBefore:t.nodeAfter);if(n&&!n.isText){let s=r.state.tr;return e<0?s.delete(t.pos-n.nodeSize,t.pos):s.delete(t.pos,t.pos+n.nodeSize),r.dispatch(s),!0}return!1}function Oa(r,e,t){r.domObserver.stop(),e.contentEditable=t,r.domObserver.start()}function Op(r){if(!Pt||r.state.selection.$head.parentOffset>0)return!1;let{focusNode:e,focusOffset:t}=r.domSelectionRange();if(e&&e.nodeType==1&&t==0&&e.firstChild&&e.firstChild.contentEditable=="false"){let i=e.firstChild;Oa(r,i,"true"),setTimeout(()=>Oa(r,i,"false"),20)}return!1}function Lp(r){let e="";return r.ctrlKey&&(e+="c"),r.metaKey&&(e+="m"),r.altKey&&(e+="a"),r.shiftKey&&(e+="s"),e}function jp(r,e){let t=e.keyCode,i=Lp(e);if(t==8||Ae&&t==72&&i=="c")return Aa(r,-1)||_t(r,-1);if(t==46&&!e.shiftKey||Ae&&t==68&&i=="c")return Aa(r,1)||_t(r,1);if(t==13||t==27)return!0;if(t==37||Ae&&t==66&&i=="c"){let l=t==37?Ea(r,r.state.selection.from)=="ltr"?-1:1:-1;return Ta(r,l,i)||_t(r,l)}else if(t==39||Ae&&t==70&&i=="c"){let l=t==39?Ea(r,r.state.selection.from)=="ltr"?1:-1:1;return Ta(r,l,i)||_t(r,l)}else{if(t==38||Ae&&t==80&&i=="c")return za(r,-1,i)||_t(r,-1);if(t==40||Ae&&t==78&&i=="c")return Op(r)||za(r,1,i)||_t(r,1);if(i==(Ae?"m":"c")&&(t==66||t==73||t==89||t==90))return!0}return!1}function Pc(r,e){r.someProp("transformCopied",u=>{e=u(e,r)});let t=[],{content:i,openStart:l,openEnd:n}=e;for(;l>1&&n>1&&i.childCount==1&&i.firstChild.childCount==1;){l--,n--;let u=i.firstChild;t.push(u.type.name,u.attrs!=u.type.defaultAttrs?u.attrs:null),i=u.content}let s=r.someProp("clipboardSerializer")||al.fromSchema(r.state.schema),a=Hc(),o=a.createElement("div");o.appendChild(s.serializeFragment(i,{document:a}));let c=o.firstChild,d,h=0;for(;c&&c.nodeType==1&&(d=Fc[c.nodeName.toLowerCase()]);){for(let u=d.length-1;u>=0;u--){let p=a.createElement(d[u]);for(;o.firstChild;)p.appendChild(o.firstChild);o.appendChild(p),h++}c=o.firstChild}c&&c.nodeType==1&&c.setAttribute("data-pm-slice",`${l} ${n}${h?` -${h}`:""} ${JSON.stringify(t)}`);let f=r.someProp("clipboardTextSerializer",u=>u(e,r))||e.content.textBetween(0,e.content.size,`

`);return{dom:o,text:f,slice:e}}function Ic(r,e,t,i,l){let n=l.parent.type.spec.code,s,a;if(!t&&!e)return null;let o=e&&(i||n||!t);if(o){if(r.someProp("transformPastedText",f=>{e=f(e,n||i,r)}),n)return e?new L(O.from(r.state.schema.text(e.replace(/\r\n?/g,`
`))),0,0):L.empty;let h=r.someProp("clipboardTextParser",f=>f(e,l,i,r));if(h)a=h;else{let f=l.marks(),{schema:u}=r.state,p=al.fromSchema(u);s=document.createElement("div"),e.split(/(?:\r\n?|\n)+/).forEach(m=>{let x=s.appendChild(document.createElement("p"));m&&x.appendChild(p.serializeNode(u.text(m,f)))})}}else r.someProp("transformPastedHTML",h=>{t=h(t,r)}),s=Rp(t),Gn&&Dp(s);let c=s&&s.querySelector("[data-pm-slice]"),d=c&&/^(\d+) (\d+)(?: -(\d+))? (.*)/.exec(c.getAttribute("data-pm-slice")||"");if(d&&d[3])for(let h=+d[3];h>0;h--){let f=s.firstChild;for(;f&&f.nodeType!=1;)f=f.nextSibling;if(!f)break;s=f}if(a||(a=(r.someProp("clipboardParser")||r.someProp("domParser")||Gi.fromSchema(r.state.schema)).parseSlice(s,{preserveWhitespace:!!(o||d),context:l,ruleFromNode(h){return h.nodeName=="BR"&&!h.nextSibling&&h.parentNode&&!Bp.test(h.parentNode.nodeName)?{ignore:!0}:null}})),d)a=Np(La(a,+d[1],+d[2]),d[4]);else if(a=L.maxOpen(Pp(a.content,l),!0),a.openStart||a.openEnd){let h=0,f=0;for(let u=a.content.firstChild;h<a.openStart&&!u.type.spec.isolating;h++,u=u.firstChild);for(let u=a.content.lastChild;f<a.openEnd&&!u.type.spec.isolating;f++,u=u.lastChild);a=La(a,h,f)}return r.someProp("transformPasted",h=>{a=h(a,r)}),a}const Bp=/^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;function Pp(r,e){if(r.childCount<2)return r;for(let t=e.depth;t>=0;t--){let i=e.node(t).contentMatchAt(e.index(t)),l,n=[];if(r.forEach(s=>{if(!n)return;let a=i.findWrapping(s.type),o;if(!a)return n=null;if(o=n.length&&l.length&&Dc(a,l,s,n[n.length-1],0))n[n.length-1]=o;else{n.length&&(n[n.length-1]=Nc(n[n.length-1],l.length));let c=Rc(s,a);n.push(c),i=i.matchType(c.type),l=a}}),n)return O.from(n)}return r}function Rc(r,e,t=0){for(let i=e.length-1;i>=t;i--)r=e[i].create(null,O.from(r));return r}function Dc(r,e,t,i,l){if(l<r.length&&l<e.length&&r[l]==e[l]){let n=Dc(r,e,t,i.lastChild,l+1);if(n)return i.copy(i.content.replaceChild(i.childCount-1,n));if(i.contentMatchAt(i.childCount).matchType(l==r.length-1?t.type:r[l+1]))return i.copy(i.content.append(O.from(Rc(t,r,l+1))))}}function Nc(r,e){if(e==0)return r;let t=r.content.replaceChild(r.childCount-1,Nc(r.lastChild,e-1)),i=r.contentMatchAt(r.childCount).fillBefore(O.empty,!0);return r.copy(t.append(i))}function kn(r,e,t,i,l,n){let s=e<0?r.firstChild:r.lastChild,a=s.content;return r.childCount>1&&(n=0),l<i-1&&(a=kn(a,e,t,i,l+1,n)),l>=t&&(a=e<0?s.contentMatchAt(0).fillBefore(a,n<=l).append(a):a.append(s.contentMatchAt(s.childCount).fillBefore(O.empty,!0))),r.replaceChild(e<0?0:r.childCount-1,s.copy(a))}function La(r,e,t){return e<r.openStart&&(r=new L(kn(r.content,-1,e,r.openStart,0,r.openEnd),e,r.openEnd)),t<r.openEnd&&(r=new L(kn(r.content,1,t,r.openEnd,0,0),r.openStart,t)),r}const Fc={thead:["table"],tbody:["table"],tfoot:["table"],caption:["table"],colgroup:["table"],col:["table","colgroup"],tr:["table","tbody"],td:["table","tbody","tr"],th:["table","tbody","tr"]};let ja=null;function Hc(){return ja||(ja=document.implementation.createHTMLDocument("title"))}let Jl=null;function Ip(r){let e=window.trustedTypes;return e?(Jl||(Jl=e.createPolicy("ProseMirrorClipboard",{createHTML:t=>t})),Jl.createHTML(r)):r}function Rp(r){let e=/^(\s*<meta [^>]*>)*/.exec(r);e&&(r=r.slice(e[0].length));let t=Hc().createElement("div"),i=/<([a-z][^>\s]+)/i.exec(r),l;if((l=i&&Fc[i[1].toLowerCase()])&&(r=l.map(n=>"<"+n+">").join("")+r+l.map(n=>"</"+n+">").reverse().join("")),t.innerHTML=Ip(r),l)for(let n=0;n<l.length;n++)t=t.querySelector(l[n])||t;return t}function Dp(r){let e=r.querySelectorAll(ft?"span:not([class]):not([style])":"span.Apple-converted-space");for(let t=0;t<e.length;t++){let i=e[t];i.childNodes.length==1&&i.textContent==" "&&i.parentNode&&i.parentNode.replaceChild(r.ownerDocument.createTextNode(" "),i)}}function Np(r,e){if(!r.size)return r;let t=r.content.firstChild.type.schema,i;try{i=JSON.parse(e)}catch{return r}let{content:l,openStart:n,openEnd:s}=r;for(let a=i.length-2;a>=0;a-=2){let o=t.nodes[i[a]];if(!o||o.hasRequiredAttrs())break;l=O.from(o.create(i[a+1],l)),n++,s++}return new L(l,n,s)}const De={},Ce={};function ot(r,e){r.input.lastSelectionOrigin=e,r.input.lastSelectionTime=Date.now()}Ce.keydown=(r,e)=>{let t=e;if(r.input.shiftKey=t.keyCode==16||t.shiftKey,!$c(r,t)&&(r.input.lastKeyCode=t.keyCode,r.input.lastKeyCodeTime=Date.now(),!(Gr&&ft&&t.keyCode==13)))if(t.keyCode!=229&&r.domObserver.forceFlush(),Vn&&t.keyCode==13&&!t.ctrlKey&&!t.altKey&&!t.metaKey){let i=Date.now();r.input.lastIOSEnter=i,r.input.lastIOSEnterFallbackTimeout=setTimeout(()=>{r.input.lastIOSEnter==i&&(r.someProp("handleKeyDown",l=>l(r,Ec(13,"Enter"))),r.input.lastIOSEnter=0)},200)}else r.someProp("handleKeyDown",i=>i(r,t))||jp(r,t)?t.preventDefault():ot(r,"key")};Ce.keyup=(r,e)=>{e.keyCode==16&&(r.input.shiftKey=!1)};Ce.keypress=(r,e)=>{let t=e;if($c(r,t)||!t.charCode||t.ctrlKey&&!t.altKey||Ae&&t.metaKey)return;if(r.someProp("handleKeyPress",l=>l(r,t))){t.preventDefault();return}let i=r.state.selection;if(!(i instanceof J)||!i.$from.sameParent(i.$to)){let l=String.fromCharCode(t.charCode);!/[\r\n]/.test(l)&&!r.someProp("handleTextInput",n=>n(r,i.$from.pos,i.$to.pos,l))&&r.dispatch(r.state.tr.insertText(l).scrollIntoView()),t.preventDefault()}};function dl(r){return{left:r.clientX,top:r.clientY}}function Fp(r,e){let t=e.x-r.clientX,i=e.y-r.clientY;return t*t+i*i<100}function Wn(r,e,t,i,l){if(i==-1)return!1;let n=r.state.doc.resolve(i);for(let s=n.depth+1;s>0;s--)if(r.someProp(e,a=>s>n.depth?a(r,t,n.nodeAfter,n.before(s),l,!0):a(r,t,n.node(s),n.before(s),l,!1)))return!0;return!1}function Qt(r,e,t){if(r.focused||r.focus(),r.state.selection.eq(e))return;let i=r.state.tr.setSelection(e);i.setMeta("pointer",!0),r.dispatch(i)}function Hp(r,e){if(e==-1)return!1;let t=r.state.doc.resolve(e),i=t.nodeAfter;return i&&i.isAtom&&H.isSelectable(i)?(Qt(r,new H(t)),!0):!1}function _p(r,e){if(e==-1)return!1;let t=r.state.selection,i,l;t instanceof H&&(i=t.node);let n=r.state.doc.resolve(e);for(let s=n.depth+1;s>0;s--){let a=s>n.depth?n.nodeAfter:n.node(s);if(H.isSelectable(a)){i&&t.$from.depth>0&&s>=t.$from.depth&&n.before(t.$from.depth+1)==t.$from.pos?l=n.before(t.$from.depth):l=n.before(s);break}}return l!=null?(Qt(r,H.create(r.state.doc,l)),!0):!1}function $p(r,e,t,i,l){return Wn(r,"handleClickOn",e,t,i)||r.someProp("handleClick",n=>n(r,e,i))||(l?_p(r,t):Hp(r,t))}function Vp(r,e,t,i){return Wn(r,"handleDoubleClickOn",e,t,i)||r.someProp("handleDoubleClick",l=>l(r,e,i))}function Gp(r,e,t,i){return Wn(r,"handleTripleClickOn",e,t,i)||r.someProp("handleTripleClick",l=>l(r,e,i))||qp(r,t,i)}function qp(r,e,t){if(t.button!=0)return!1;let i=r.state.doc;if(e==-1)return i.inlineContent?(Qt(r,J.create(i,0,i.content.size)),!0):!1;let l=i.resolve(e);for(let n=l.depth+1;n>0;n--){let s=n>l.depth?l.nodeAfter:l.node(n),a=l.before(n);if(s.inlineContent)Qt(r,J.create(i,a+1,a+1+s.content.size));else if(H.isSelectable(s))Qt(r,H.create(i,a));else continue;return!0}}function Un(r){return Zi(r)}const _c=Ae?"metaKey":"ctrlKey";De.mousedown=(r,e)=>{let t=e;r.input.shiftKey=t.shiftKey;let i=Un(r),l=Date.now(),n="singleClick";l-r.input.lastClick.time<500&&Fp(t,r.input.lastClick)&&!t[_c]&&(r.input.lastClick.type=="singleClick"?n="doubleClick":r.input.lastClick.type=="doubleClick"&&(n="tripleClick")),r.input.lastClick={time:l,x:t.clientX,y:t.clientY,type:n};let s=r.posAtCoords(dl(t));s&&(n=="singleClick"?(r.input.mouseDown&&r.input.mouseDown.done(),r.input.mouseDown=new Wp(r,s,t,!!i)):(n=="doubleClick"?Vp:Gp)(r,s.pos,s.inside,t)?t.preventDefault():ot(r,"pointer"))};class Wp{constructor(e,t,i,l){this.view=e,this.pos=t,this.event=i,this.flushed=l,this.delayedSelectionSync=!1,this.mightDrag=null,this.startDoc=e.state.doc,this.selectNode=!!i[_c],this.allowDefault=i.shiftKey;let n,s;if(t.inside>-1)n=e.state.doc.nodeAt(t.inside),s=t.inside;else{let d=e.state.doc.resolve(t.pos);n=d.parent,s=d.depth?d.before():0}const a=l?null:i.target,o=a?e.docView.nearestDesc(a,!0):null;this.target=o&&o.dom.nodeType==1?o.dom:null;let{selection:c}=e.state;(i.button==0&&n.type.spec.draggable&&n.type.spec.selectable!==!1||c instanceof H&&c.from<=s&&c.to>s)&&(this.mightDrag={node:n,pos:s,addAttr:!!(this.target&&!this.target.draggable),setUneditable:!!(this.target&&cl&&!this.target.hasAttribute("contentEditable"))}),this.target&&this.mightDrag&&(this.mightDrag.addAttr||this.mightDrag.setUneditable)&&(this.view.domObserver.stop(),this.mightDrag.addAttr&&(this.target.draggable=!0),this.mightDrag.setUneditable&&setTimeout(()=>{this.view.input.mouseDown==this&&this.target.setAttribute("contentEditable","false")},20),this.view.domObserver.start()),e.root.addEventListener("mouseup",this.up=this.up.bind(this)),e.root.addEventListener("mousemove",this.move=this.move.bind(this)),ot(e,"pointer")}done(){this.view.root.removeEventListener("mouseup",this.up),this.view.root.removeEventListener("mousemove",this.move),this.mightDrag&&this.target&&(this.view.domObserver.stop(),this.mightDrag.addAttr&&this.target.removeAttribute("draggable"),this.mightDrag.setUneditable&&this.target.removeAttribute("contentEditable"),this.view.domObserver.start()),this.delayedSelectionSync&&setTimeout(()=>qn(this.view)),this.view.input.mouseDown=null}up(e){if(this.done(),!this.view.dom.contains(e.target))return;let t=this.pos;this.view.state.doc!=this.startDoc&&(t=this.view.posAtCoords(dl(e))),this.updateAllowDefault(e),this.allowDefault||!t?ot(this.view,"pointer"):$p(this.view,t.pos,t.inside,e,this.selectNode)?e.preventDefault():e.button==0&&(this.flushed||Pt&&this.mightDrag&&!this.mightDrag.node.isAtom||ft&&!this.view.state.selection.visible&&Math.min(Math.abs(t.pos-this.view.state.selection.from),Math.abs(t.pos-this.view.state.selection.to))<=2)?(Qt(this.view,$.near(this.view.state.doc.resolve(t.pos))),e.preventDefault()):ot(this.view,"pointer")}move(e){this.updateAllowDefault(e),ot(this.view,"pointer"),e.buttons==0&&this.done()}updateAllowDefault(e){!this.allowDefault&&(Math.abs(this.event.x-e.clientX)>4||Math.abs(this.event.y-e.clientY)>4)&&(this.allowDefault=!0)}}De.touchstart=r=>{r.input.lastTouch=Date.now(),Un(r),ot(r,"pointer")};De.touchmove=r=>{r.input.lastTouch=Date.now(),ot(r,"pointer")};De.contextmenu=r=>Un(r);function $c(r,e){return r.composing?!0:Pt&&Math.abs(e.timeStamp-r.input.compositionEndedAt)<500?(r.input.compositionEndedAt=-2e8,!0):!1}const Up=Gr?5e3:-1;Ce.compositionstart=Ce.compositionupdate=r=>{if(!r.composing){r.domObserver.flush();let{state:e}=r,t=e.selection.$to;if(e.selection instanceof J&&(e.storedMarks||!t.textOffset&&t.parentOffset&&t.nodeBefore.marks.some(i=>i.type.spec.inclusive===!1)))r.markCursor=r.state.storedMarks||t.marks(),Zi(r,!0),r.markCursor=null;else if(Zi(r,!e.selection.empty),cl&&e.selection.empty&&t.parentOffset&&!t.textOffset&&t.nodeBefore.marks.length){let i=r.domSelectionRange();for(let l=i.focusNode,n=i.focusOffset;l&&l.nodeType==1&&n!=0;){let s=n<0?l.lastChild:l.childNodes[n-1];if(!s)break;if(s.nodeType==3){let a=r.domSelection();a&&a.collapse(s,s.nodeValue.length);break}else l=s,n=-1}}r.input.composing=!0}Vc(r,Up)};Ce.compositionend=(r,e)=>{r.composing&&(r.input.composing=!1,r.input.compositionEndedAt=e.timeStamp,r.input.compositionPendingChanges=r.domObserver.pendingRecords().length?r.input.compositionID:0,r.input.compositionNode=null,r.input.compositionPendingChanges&&Promise.resolve().then(()=>r.domObserver.flush()),r.input.compositionID++,Vc(r,20))};function Vc(r,e){clearTimeout(r.input.composingTimeout),e>-1&&(r.input.composingTimeout=setTimeout(()=>Zi(r),e))}function Kp(r){for(r.composing&&(r.input.composing=!1,r.input.compositionEndedAt=Jp());r.input.compositionNodes.length>0;)r.input.compositionNodes.pop().markParentsDirty()}function Jp(){let r=document.createEvent("Event");return r.initEvent("event",!0,!0),r.timeStamp}function Zi(r,e=!1){if(!(Gr&&r.domObserver.flushingSoon>=0)){if(r.domObserver.forceFlush(),Kp(r),e||r.docView&&r.docView.dirty){let t=bp(r);return t&&!t.eq(r.state.selection)?r.dispatch(r.state.tr.setSelection(t)):(r.markCursor||e)&&!r.state.selection.empty?r.dispatch(r.state.tr.deleteSelection()):r.updateState(r.state),!0}return!1}}function Yp(r,e){if(!r.dom.parentNode)return;let t=r.dom.parentNode.appendChild(document.createElement("div"));t.appendChild(e),t.style.cssText="position: fixed; left: -10000px; top: 10px";let i=getSelection(),l=document.createRange();l.selectNodeContents(e),r.dom.blur(),i.removeAllRanges(),i.addRange(l),setTimeout(()=>{t.parentNode&&t.parentNode.removeChild(t),r.focus()},50)}const Br=Vr&&Ac<15||Vn&&wp<604;De.copy=Ce.cut=(r,e)=>{let t=e,i=r.state.selection,l=t.type=="cut";if(i.empty)return;let n=Br?null:t.clipboardData,s=i.content(),{dom:a,text:o}=Pc(r,s);n?(t.preventDefault(),n.clearData(),n.setData("text/html",a.innerHTML),n.setData("text/plain",o)):Yp(r,a),l&&r.dispatch(r.state.tr.deleteSelection().scrollIntoView().setMeta("uiEvent","cut"))};function Xp(r){return r.openStart==0&&r.openEnd==0&&r.content.childCount==1?r.content.firstChild:null}function Zp(r,e){if(!r.dom.parentNode)return;let t=r.input.shiftKey||r.state.selection.$from.parent.type.spec.code,i=r.dom.parentNode.appendChild(document.createElement(t?"textarea":"div"));t||(i.contentEditable="true"),i.style.cssText="position: fixed; left: -10000px; top: 10px",i.focus();let l=r.input.shiftKey&&r.input.lastKeyCode!=45;setTimeout(()=>{r.focus(),i.parentNode&&i.parentNode.removeChild(i),t?Sn(r,i.value,null,l,e):Sn(r,i.textContent,i.innerHTML,l,e)},50)}function Sn(r,e,t,i,l){let n=Ic(r,e,t,i,r.state.selection.$from);if(r.someProp("handlePaste",o=>o(r,l,n||L.empty)))return!0;if(!n)return!1;let s=Xp(n),a=s?r.state.tr.replaceSelectionWith(s,i):r.state.tr.replaceSelection(n);return r.dispatch(a.scrollIntoView().setMeta("paste",!0).setMeta("uiEvent","paste")),!0}function Gc(r){let e=r.getData("text/plain")||r.getData("Text");if(e)return e;let t=r.getData("text/uri-list");return t?t.replace(/\r?\n/g," "):""}Ce.paste=(r,e)=>{let t=e;if(r.composing&&!Gr)return;let i=Br?null:t.clipboardData,l=r.input.shiftKey&&r.input.lastKeyCode!=45;i&&Sn(r,Gc(i),i.getData("text/html"),l,t)?t.preventDefault():Zp(r,t)};class Qp{constructor(e,t,i){this.slice=e,this.move=t,this.node=i}}const qc=Ae?"altKey":"ctrlKey";De.dragstart=(r,e)=>{let t=e,i=r.input.mouseDown;if(i&&i.done(),!t.dataTransfer)return;let l=r.state.selection,n=l.empty?null:r.posAtCoords(dl(t)),s;if(!(n&&n.pos>=l.from&&n.pos<=(l instanceof H?l.to-1:l.to))){if(i&&i.mightDrag)s=H.create(r.state.doc,i.mightDrag.pos);else if(t.target&&t.target.nodeType==1){let h=r.docView.nearestDesc(t.target,!0);h&&h.node.type.spec.draggable&&h!=r.docView&&(s=H.create(r.state.doc,h.posBefore))}}let a=(s||r.state.selection).content(),{dom:o,text:c,slice:d}=Pc(r,a);(!t.dataTransfer.files.length||!ft||Oc>120)&&t.dataTransfer.clearData(),t.dataTransfer.setData(Br?"Text":"text/html",o.innerHTML),t.dataTransfer.effectAllowed="copyMove",Br||t.dataTransfer.setData("text/plain",c),r.dragging=new Qp(d,!t[qc],s)};De.dragend=r=>{let e=r.dragging;window.setTimeout(()=>{r.dragging==e&&(r.dragging=null)},50)};Ce.dragover=Ce.dragenter=(r,e)=>e.preventDefault();Ce.drop=(r,e)=>{let t=e,i=r.dragging;if(r.dragging=null,!t.dataTransfer)return;let l=r.posAtCoords(dl(t));if(!l)return;let n=r.state.doc.resolve(l.pos),s=i&&i.slice;s?r.someProp("transformPasted",p=>{s=p(s,r)}):s=Ic(r,Gc(t.dataTransfer),Br?null:t.dataTransfer.getData("text/html"),!1,n);let a=!!(i&&!t[qc]);if(r.someProp("handleDrop",p=>p(r,t,s||L.empty,a))){t.preventDefault();return}if(!s)return;t.preventDefault();let o=s?$u(r.state.doc,n.pos,s):n.pos;o==null&&(o=n.pos);let c=r.state.tr;if(a){let{node:p}=i;p?p.replace(c):c.deleteSelection()}let d=c.mapping.map(o),h=s.openStart==0&&s.openEnd==0&&s.content.childCount==1,f=c.doc;if(h?c.replaceRangeWith(d,d,s.content.firstChild):c.replaceRange(d,d,s),c.doc.eq(f))return;let u=c.doc.resolve(d);if(h&&H.isSelectable(s.content.firstChild)&&u.nodeAfter&&u.nodeAfter.sameMarkup(s.content.firstChild))c.setSelection(new H(u));else{let p=c.mapping.map(o);c.mapping.maps[c.mapping.maps.length-1].forEach((m,x,y,k)=>p=k),c.setSelection(jc(r,u,c.doc.resolve(p)))}r.focus(),r.dispatch(c.setMeta("uiEvent","drop"))};De.focus=r=>{r.input.lastFocus=Date.now(),r.focused||(r.domObserver.stop(),r.dom.classList.add("ProseMirror-focused"),r.domObserver.start(),r.focused=!0,setTimeout(()=>{r.docView&&r.hasFocus()&&!r.domObserver.currentSelection.eq(r.domSelectionRange())&&qn(r)},20))};De.blur=(r,e)=>{let t=e;r.focused&&(r.domObserver.stop(),r.dom.classList.remove("ProseMirror-focused"),r.domObserver.start(),t.relatedTarget&&r.dom.contains(t.relatedTarget)&&r.domObserver.currentSelection.clear(),r.focused=!1)};De.beforeinput=(r,e)=>{if(ft&&Gr&&e.inputType=="deleteContentBackward"){r.domObserver.flushSoon();let{domChangeCount:t}=r.input;setTimeout(()=>{if(r.input.domChangeCount!=t||(r.dom.blur(),r.focus(),r.someProp("handleKeyDown",l=>l(r,Ec(8,"Backspace")))))return;let{$cursor:i}=r.state.selection;i&&i.pos>0&&r.dispatch(r.state.tr.delete(i.pos-1,i.pos).scrollIntoView())},50)}};for(let r in Ce)De[r]=Ce[r];function Pr(r,e){if(r==e)return!0;for(let t in r)if(r[t]!==e[t])return!1;for(let t in e)if(!(t in r))return!1;return!0}class Qi{constructor(e,t){this.toDOM=e,this.spec=t||Tt,this.side=this.spec.side||0}map(e,t,i,l){let{pos:n,deleted:s}=e.mapResult(t.from+l,this.side<0?-1:1);return s?null:new Je(n-i,n-i,this)}valid(){return!0}eq(e){return this==e||e instanceof Qi&&(this.spec.key&&this.spec.key==e.spec.key||this.toDOM==e.toDOM&&Pr(this.spec,e.spec))}destroy(e){this.spec.destroy&&this.spec.destroy(e)}}class ct{constructor(e,t){this.attrs=e,this.spec=t||Tt}map(e,t,i,l){let n=e.map(t.from+l,this.spec.inclusiveStart?-1:1)-i,s=e.map(t.to+l,this.spec.inclusiveEnd?1:-1)-i;return n>=s?null:new Je(n,s,this)}valid(e,t){return t.from<t.to}eq(e){return this==e||e instanceof ct&&Pr(this.attrs,e.attrs)&&Pr(this.spec,e.spec)}static is(e){return e.type instanceof ct}destroy(){}}class Kn{constructor(e,t){this.attrs=e,this.spec=t||Tt}map(e,t,i,l){let n=e.mapResult(t.from+l,1);if(n.deleted)return null;let s=e.mapResult(t.to+l,-1);return s.deleted||s.pos<=n.pos?null:new Je(n.pos-i,s.pos-i,this)}valid(e,t){let{index:i,offset:l}=e.content.findIndex(t.from),n;return l==t.from&&!(n=e.child(i)).isText&&l+n.nodeSize==t.to}eq(e){return this==e||e instanceof Kn&&Pr(this.attrs,e.attrs)&&Pr(this.spec,e.spec)}destroy(){}}class Je{constructor(e,t,i){this.from=e,this.to=t,this.type=i}copy(e,t){return new Je(e,t,this.type)}eq(e,t=0){return this.type.eq(e.type)&&this.from+t==e.from&&this.to+t==e.to}map(e,t,i){return this.type.map(e,this,t,i)}static widget(e,t,i){return new Je(e,e,new Qi(t,i))}static inline(e,t,i,l){return new Je(e,t,new ct(i,l))}static node(e,t,i,l){return new Je(e,t,new Kn(i,l))}get spec(){return this.type.spec}get inline(){return this.type instanceof ct}get widget(){return this.type instanceof Qi}}const Wt=[],Tt={};class oe{constructor(e,t){this.local=e.length?e:Wt,this.children=t.length?t:Wt}static create(e,t){return t.length?el(t,e,0,Tt):pe}find(e,t,i){let l=[];return this.findInner(e??0,t??1e9,l,0,i),l}findInner(e,t,i,l,n){for(let s=0;s<this.local.length;s++){let a=this.local[s];a.from<=t&&a.to>=e&&(!n||n(a.spec))&&i.push(a.copy(a.from+l,a.to+l))}for(let s=0;s<this.children.length;s+=3)if(this.children[s]<t&&this.children[s+1]>e){let a=this.children[s]+1;this.children[s+2].findInner(e-a,t-a,i,l+a,n)}}map(e,t,i){return this==pe||e.maps.length==0?this:this.mapInner(e,t,0,0,i||Tt)}mapInner(e,t,i,l,n){let s;for(let a=0;a<this.local.length;a++){let o=this.local[a].map(e,i,l);o&&o.type.valid(t,o)?(s||(s=[])).push(o):n.onRemove&&n.onRemove(this.local[a].spec)}return this.children.length?em(this.children,s||[],e,t,i,l,n):s?new oe(s.sort(Et),Wt):pe}add(e,t){return t.length?this==pe?oe.create(e,t):this.addInner(e,t,0):this}addInner(e,t,i){let l,n=0;e.forEach((a,o)=>{let c=o+i,d;if(d=Uc(t,a,c)){for(l||(l=this.children.slice());n<l.length&&l[n]<o;)n+=3;l[n]==o?l[n+2]=l[n+2].addInner(a,d,c+1):l.splice(n,0,o,o+a.nodeSize,el(d,a,c+1,Tt)),n+=3}});let s=Wc(n?Kc(t):t,-i);for(let a=0;a<s.length;a++)s[a].type.valid(e,s[a])||s.splice(a--,1);return new oe(s.length?this.local.concat(s).sort(Et):this.local,l||this.children)}remove(e){return e.length==0||this==pe?this:this.removeInner(e,0)}removeInner(e,t){let i=this.children,l=this.local;for(let n=0;n<i.length;n+=3){let s,a=i[n]+t,o=i[n+1]+t;for(let d=0,h;d<e.length;d++)(h=e[d])&&h.from>a&&h.to<o&&(e[d]=null,(s||(s=[])).push(h));if(!s)continue;i==this.children&&(i=this.children.slice());let c=i[n+2].removeInner(s,a+1);c!=pe?i[n+2]=c:(i.splice(n,3),n-=3)}if(l.length){for(let n=0,s;n<e.length;n++)if(s=e[n])for(let a=0;a<l.length;a++)l[a].eq(s,t)&&(l==this.local&&(l=this.local.slice()),l.splice(a--,1))}return i==this.children&&l==this.local?this:l.length||i.length?new oe(l,i):pe}forChild(e,t){if(this==pe)return this;if(t.isLeaf)return oe.empty;let i,l;for(let a=0;a<this.children.length;a+=3)if(this.children[a]>=e){this.children[a]==e&&(i=this.children[a+2]);break}let n=e+1,s=n+t.content.size;for(let a=0;a<this.local.length;a++){let o=this.local[a];if(o.from<s&&o.to>n&&o.type instanceof ct){let c=Math.max(n,o.from)-n,d=Math.min(s,o.to)-n;c<d&&(l||(l=[])).push(o.copy(c,d))}}if(l){let a=new oe(l.sort(Et),Wt);return i?new xt([a,i]):a}return i||pe}eq(e){if(this==e)return!0;if(!(e instanceof oe)||this.local.length!=e.local.length||this.children.length!=e.children.length)return!1;for(let t=0;t<this.local.length;t++)if(!this.local[t].eq(e.local[t]))return!1;for(let t=0;t<this.children.length;t+=3)if(this.children[t]!=e.children[t]||this.children[t+1]!=e.children[t+1]||!this.children[t+2].eq(e.children[t+2]))return!1;return!0}locals(e){return Jn(this.localsInner(e))}localsInner(e){if(this==pe)return Wt;if(e.inlineContent||!this.local.some(ct.is))return this.local;let t=[];for(let i=0;i<this.local.length;i++)this.local[i].type instanceof ct||t.push(this.local[i]);return t}forEachSet(e){e(this)}}oe.empty=new oe([],[]);oe.removeOverlap=Jn;const pe=oe.empty;class xt{constructor(e){this.members=e}map(e,t){const i=this.members.map(l=>l.map(e,t,Tt));return xt.from(i)}forChild(e,t){if(t.isLeaf)return oe.empty;let i=[];for(let l=0;l<this.members.length;l++){let n=this.members[l].forChild(e,t);n!=pe&&(n instanceof xt?i=i.concat(n.members):i.push(n))}return xt.from(i)}eq(e){if(!(e instanceof xt)||e.members.length!=this.members.length)return!1;for(let t=0;t<this.members.length;t++)if(!this.members[t].eq(e.members[t]))return!1;return!0}locals(e){let t,i=!0;for(let l=0;l<this.members.length;l++){let n=this.members[l].localsInner(e);if(n.length)if(!t)t=n;else{i&&(t=t.slice(),i=!1);for(let s=0;s<n.length;s++)t.push(n[s])}}return t?Jn(i?t:t.sort(Et)):Wt}static from(e){switch(e.length){case 0:return pe;case 1:return e[0];default:return new xt(e.every(t=>t instanceof oe)?e:e.reduce((t,i)=>t.concat(i instanceof oe?i:i.members),[]))}}forEachSet(e){for(let t=0;t<this.members.length;t++)this.members[t].forEachSet(e)}}function em(r,e,t,i,l,n,s){let a=r.slice();for(let c=0,d=n;c<t.maps.length;c++){let h=0;t.maps[c].forEach((f,u,p,m)=>{let x=m-p-(u-f);for(let y=0;y<a.length;y+=3){let k=a[y+1];if(k<0||f>k+d-h)continue;let g=a[y]+d-h;u>=g?a[y+1]=f<=g?-2:-1:f>=d&&x&&(a[y]+=x,a[y+1]+=x)}h+=x}),d=t.maps[c].map(d,-1)}let o=!1;for(let c=0;c<a.length;c+=3)if(a[c+1]<0){if(a[c+1]==-2){o=!0,a[c+1]=-1;continue}let d=t.map(r[c]+n),h=d-l;if(h<0||h>=i.content.size){o=!0;continue}let f=t.map(r[c+1]+n,-1),u=f-l,{index:p,offset:m}=i.content.findIndex(h),x=i.maybeChild(p);if(x&&m==h&&m+x.nodeSize==u){let y=a[c+2].mapInner(t,x,d+1,r[c]+n+1,s);y!=pe?(a[c]=h,a[c+1]=u,a[c+2]=y):(a[c+1]=-2,o=!0)}else o=!0}if(o){let c=tm(a,r,e,t,l,n,s),d=el(c,i,0,s);e=d.local;for(let h=0;h<a.length;h+=3)a[h+1]<0&&(a.splice(h,3),h-=3);for(let h=0,f=0;h<d.children.length;h+=3){let u=d.children[h];for(;f<a.length&&a[f]<u;)f+=3;a.splice(f,0,d.children[h],d.children[h+1],d.children[h+2])}}return new oe(e.sort(Et),a)}function Wc(r,e){if(!e||!r.length)return r;let t=[];for(let i=0;i<r.length;i++){let l=r[i];t.push(new Je(l.from+e,l.to+e,l.type))}return t}function tm(r,e,t,i,l,n,s){function a(o,c){for(let d=0;d<o.local.length;d++){let h=o.local[d].map(i,l,c);h?t.push(h):s.onRemove&&s.onRemove(o.local[d].spec)}for(let d=0;d<o.children.length;d+=3)a(o.children[d+2],o.children[d]+c+1)}for(let o=0;o<r.length;o+=3)r[o+1]==-1&&a(r[o+2],e[o]+n+1);return t}function Uc(r,e,t){if(e.isLeaf)return null;let i=t+e.nodeSize,l=null;for(let n=0,s;n<r.length;n++)(s=r[n])&&s.from>t&&s.to<i&&((l||(l=[])).push(s),r[n]=null);return l}function Kc(r){let e=[];for(let t=0;t<r.length;t++)r[t]!=null&&e.push(r[t]);return e}function el(r,e,t,i){let l=[],n=!1;e.forEach((a,o)=>{let c=Uc(r,a,o+t);if(c){n=!0;let d=el(c,a,t+o+1,i);d!=pe&&l.push(o,o+a.nodeSize,d)}});let s=Wc(n?Kc(r):r,-t).sort(Et);for(let a=0;a<s.length;a++)s[a].type.valid(e,s[a])||(i.onRemove&&i.onRemove(s[a].spec),s.splice(a--,1));return s.length||l.length?new oe(s,l):pe}function Et(r,e){return r.from-e.from||r.to-e.to}function Jn(r){let e=r;for(let t=0;t<e.length-1;t++){let i=e[t];if(i.from!=i.to)for(let l=t+1;l<e.length;l++){let n=e[l];if(n.from==i.from){n.to!=i.to&&(e==r&&(e=r.slice()),e[l]=n.copy(n.from,i.to),Ba(e,l+1,n.copy(i.to,n.to)));continue}else{n.from<i.to&&(e==r&&(e=r.slice()),e[t]=i.copy(i.from,n.from),Ba(e,l,i.copy(n.from,i.to)));break}}}return e}function Ba(r,e,t){for(;e<r.length&&Et(t,r[e])>0;)e++;r.splice(e,0,t)}var Mn,Cn;if(typeof WeakMap<"u"){let r=new WeakMap;Mn=e=>r.get(e),Cn=(e,t)=>(r.set(e,t),t)}else{const r=[];let e=0;Mn=t=>{for(let i=0;i<r.length;i+=2)if(r[i]==t)return r[i+1]},Cn=(t,i)=>(e==10&&(e=0),r[e++]=t,r[e++]=i)}var Ue=class{constructor(r,e,t,i){this.width=r,this.height=e,this.map=t,this.problems=i}findCell(r){for(let e=0;e<this.map.length;e++){const t=this.map[e];if(t!=r)continue;const i=e%this.width,l=e/this.width|0;let n=i+1,s=l+1;for(let a=1;n<this.width&&this.map[e+a]==t;a++)n++;for(let a=1;s<this.height&&this.map[e+this.width*a]==t;a++)s++;return{left:i,top:l,right:n,bottom:s}}throw new RangeError(`No cell with offset ${r} found`)}colCount(r){for(let e=0;e<this.map.length;e++)if(this.map[e]==r)return e%this.width;throw new RangeError(`No cell with offset ${r} found`)}nextCell(r,e,t){const{left:i,right:l,top:n,bottom:s}=this.findCell(r);return e=="horiz"?(t<0?i==0:l==this.width)?null:this.map[n*this.width+(t<0?i-1:l)]:(t<0?n==0:s==this.height)?null:this.map[i+this.width*(t<0?n-1:s)]}rectBetween(r,e){const{left:t,right:i,top:l,bottom:n}=this.findCell(r),{left:s,right:a,top:o,bottom:c}=this.findCell(e);return{left:Math.min(t,s),top:Math.min(l,o),right:Math.max(i,a),bottom:Math.max(n,c)}}cellsInRect(r){const e=[],t={};for(let i=r.top;i<r.bottom;i++)for(let l=r.left;l<r.right;l++){const n=i*this.width+l,s=this.map[n];t[s]||(t[s]=!0,!(l==r.left&&l&&this.map[n-1]==s||i==r.top&&i&&this.map[n-this.width]==s)&&e.push(s))}return e}positionAt(r,e,t){for(let i=0,l=0;;i++){const n=l+t.child(i).nodeSize;if(i==r){let s=e+r*this.width;const a=(r+1)*this.width;for(;s<a&&this.map[s]<l;)s++;return s==a?n-1:this.map[s]}l=n}}static get(r){return Mn(r)||Cn(r,rm(r))}};function rm(r){if(r.type.spec.tableRole!="table")throw new RangeError("Not a table node: "+r.type.name);const e=im(r),t=r.childCount,i=[];let l=0,n=null;const s=[];for(let c=0,d=e*t;c<d;c++)i[c]=0;for(let c=0,d=0;c<t;c++){const h=r.child(c);d++;for(let p=0;;p++){for(;l<i.length&&i[l]!=0;)l++;if(p==h.childCount)break;const m=h.child(p),{colspan:x,rowspan:y,colwidth:k}=m.attrs;for(let g=0;g<y;g++){if(g+c>=t){(n||(n=[])).push({type:"overlong_rowspan",pos:d,n:y-g});break}const b=l+g*e;for(let w=0;w<x;w++){i[b+w]==0?i[b+w]=d:(n||(n=[])).push({type:"collision",row:c,pos:d,n:x-w});const T=k&&k[w];if(T){const S=(b+w)%e*2,z=s[S];z==null||z!=T&&s[S+1]==1?(s[S]=T,s[S+1]=1):z==T&&s[S+1]++}}}l+=x,d+=m.nodeSize}const f=(c+1)*e;let u=0;for(;l<f;)i[l++]==0&&u++;u&&(n||(n=[])).push({type:"missing",row:c,n:u}),d++}const a=new Ue(e,t,i,n);let o=!1;for(let c=0;!o&&c<s.length;c+=2)s[c]!=null&&s[c+1]<t&&(o=!0);return o&&lm(a,s,r),a}function im(r){let e=-1,t=!1;for(let i=0;i<r.childCount;i++){const l=r.child(i);let n=0;if(t)for(let s=0;s<i;s++){const a=r.child(s);for(let o=0;o<a.childCount;o++){const c=a.child(o);s+c.attrs.rowspan>i&&(n+=c.attrs.colspan)}}for(let s=0;s<l.childCount;s++){const a=l.child(s);n+=a.attrs.colspan,a.attrs.rowspan>1&&(t=!0)}e==-1?e=n:e!=n&&(e=Math.max(e,n))}return e}function lm(r,e,t){r.problems||(r.problems=[]);const i={};for(let l=0;l<r.map.length;l++){const n=r.map[l];if(i[n])continue;i[n]=!0;const s=t.nodeAt(n);if(!s)throw new RangeError(`No cell with offset ${n} found`);let a=null;const o=s.attrs;for(let c=0;c<o.colspan;c++){const d=(l+c)%r.width,h=e[d*2];h!=null&&(!o.colwidth||o.colwidth[c]!=h)&&((a||(a=nm(o)))[c]=h)}a&&r.problems.unshift({type:"colwidth mismatch",pos:n,colwidth:a})}}function nm(r){if(r.colwidth)return r.colwidth.slice();const e=[];for(let t=0;t<r.colspan;t++)e.push(0);return e}function Pa(r,e){if(typeof r=="string")return{};const t=r.getAttribute("data-colwidth"),i=t&&/^\d+(,\d+)*$/.test(t)?t.split(",").map(s=>Number(s)):null,l=Number(r.getAttribute("colspan")||1),n={colspan:l,rowspan:Number(r.getAttribute("rowspan")||1),colwidth:i&&i.length==l?i:null};for(const s in e){const a=e[s].getFromDOM,o=a&&a(r);o!=null&&(n[s]=o)}return n}function Ia(r,e){const t={};r.attrs.colspan!=1&&(t.colspan=r.attrs.colspan),r.attrs.rowspan!=1&&(t.rowspan=r.attrs.rowspan),r.attrs.colwidth&&(t["data-colwidth"]=r.attrs.colwidth.join(","));for(const i in e){const l=e[i].setDOMAttr;l&&l(r.attrs[i],t)}return t}function sm(r){const e=r.cellAttributes||{},t={colspan:{default:1},rowspan:{default:1},colwidth:{default:null}};for(const i in e)t[i]={default:e[i].default};return{table:{content:"table_row+",tableRole:"table",isolating:!0,group:r.tableGroup,parseDOM:[{tag:"table"}],toDOM(){return["table",["tbody",0]]}},table_row:{content:"(table_cell | table_header)*",tableRole:"row",parseDOM:[{tag:"tr"}],toDOM(){return["tr",0]}},table_cell:{content:r.cellContent,attrs:t,tableRole:"cell",isolating:!0,parseDOM:[{tag:"td",getAttrs:i=>Pa(i,e)}],toDOM(i){return["td",Ia(i,e),0]}},table_header:{content:r.cellContent,attrs:t,tableRole:"header_cell",isolating:!0,parseDOM:[{tag:"th",getAttrs:i=>Pa(i,e)}],toDOM(i){return["th",Ia(i,e),0]}}}}function Yn(r){let e=r.cached.tableNodeTypes;if(!e){e=r.cached.tableNodeTypes={};for(const t in r.nodes){const i=r.nodes[t],l=i.spec.tableRole;l&&(e[l]=i)}}return e}new $r("selectingCells");function am(r){for(let e=r.depth-1;e>0;e--)if(r.node(e).type.spec.tableRole=="row")return r.node(0).resolve(r.before(e+1));return null}function Jc(r){const e=r.selection.$head;for(let t=e.depth;t>0;t--)if(e.node(t).type.spec.tableRole=="row")return!0;return!1}function om(r){const e=r.selection;if("$anchorCell"in e&&e.$anchorCell)return e.$anchorCell.pos>e.$headCell.pos?e.$anchorCell:e.$headCell;if("node"in e&&e.node&&e.node.type.spec.tableRole=="cell")return e.$anchor;const t=am(e.$head)||cm(e.$head);if(t)return t;throw new RangeError(`No cell found around position ${e.head}`)}function cm(r){for(let e=r.nodeAfter,t=r.pos;e;e=e.firstChild,t++){const i=e.type.spec.tableRole;if(i=="cell"||i=="header_cell")return r.doc.resolve(t)}for(let e=r.nodeBefore,t=r.pos;e;e=e.lastChild,t--){const i=e.type.spec.tableRole;if(i=="cell"||i=="header_cell")return r.doc.resolve(t-e.nodeSize)}}function Ra(r){return r.parent.type.spec.tableRole=="row"&&!!r.nodeAfter}function Yc(r,e){return r.depth==e.depth&&r.pos>=e.start(-1)&&r.pos<=e.end(-1)}function Xc(r,e,t){const i=r.node(-1),l=Ue.get(i),n=r.start(-1),s=l.nextCell(r.pos-n,e,t);return s==null?null:r.node(0).resolve(n+s)}function Da(r,e,t=1){const i={...r,colspan:r.colspan-t};return i.colwidth&&(i.colwidth=i.colwidth.slice(),i.colwidth.splice(e,t),i.colwidth.some(l=>l>0)||(i.colwidth=null)),i}var Ze=class We extends ${constructor(e,t=e){const i=e.node(-1),l=Ue.get(i),n=e.start(-1),s=l.rectBetween(e.pos-n,t.pos-n),a=e.node(0),o=l.cellsInRect(s).filter(d=>d!=t.pos-n);o.unshift(t.pos-n);const c=o.map(d=>{const h=i.nodeAt(d);if(!h)throw RangeError(`No cell with offset ${d} found`);const f=n+d+1;return new vc(a.resolve(f),a.resolve(f+h.content.size))});super(c[0].$from,c[0].$to,c),this.$anchorCell=e,this.$headCell=t}map(e,t){const i=e.resolve(t.map(this.$anchorCell.pos)),l=e.resolve(t.map(this.$headCell.pos));if(Ra(i)&&Ra(l)&&Yc(i,l)){const n=this.$anchorCell.node(-1)!=i.node(-1);return n&&this.isRowSelection()?We.rowSelection(i,l):n&&this.isColSelection()?We.colSelection(i,l):new We(i,l)}return J.between(i,l)}content(){const e=this.$anchorCell.node(-1),t=Ue.get(e),i=this.$anchorCell.start(-1),l=t.rectBetween(this.$anchorCell.pos-i,this.$headCell.pos-i),n={},s=[];for(let o=l.top;o<l.bottom;o++){const c=[];for(let d=o*t.width+l.left,h=l.left;h<l.right;h++,d++){const f=t.map[d];if(n[f])continue;n[f]=!0;const u=t.findCell(f);let p=e.nodeAt(f);if(!p)throw RangeError(`No cell with offset ${f} found`);const m=l.left-u.left,x=u.right-l.right;if(m>0||x>0){let y=p.attrs;if(m>0&&(y=Da(y,0,m)),x>0&&(y=Da(y,y.colspan-x,x)),u.left<l.left){if(p=p.type.createAndFill(y),!p)throw RangeError(`Could not create cell with attrs ${JSON.stringify(y)}`)}else p=p.type.create(y,p.content)}if(u.top<l.top||u.bottom>l.bottom){const y={...p.attrs,rowspan:Math.min(u.bottom,l.bottom)-Math.max(u.top,l.top)};u.top<l.top?p=p.type.createAndFill(y):p=p.type.create(y,p.content)}c.push(p)}s.push(e.child(o).copy(O.from(c)))}const a=this.isColSelection()&&this.isRowSelection()?e:s;return new L(O.from(a),1,1)}replace(e,t=L.empty){const i=e.steps.length,l=this.ranges;for(let s=0;s<l.length;s++){const{$from:a,$to:o}=l[s],c=e.mapping.slice(i);e.replace(c.map(a.pos),c.map(o.pos),s?L.empty:t)}const n=$.findFrom(e.doc.resolve(e.mapping.slice(i).map(this.to)),-1);n&&e.setSelection(n)}replaceWith(e,t){this.replace(e,new L(O.from(t),0,0))}forEachCell(e){const t=this.$anchorCell.node(-1),i=Ue.get(t),l=this.$anchorCell.start(-1),n=i.cellsInRect(i.rectBetween(this.$anchorCell.pos-l,this.$headCell.pos-l));for(let s=0;s<n.length;s++)e(t.nodeAt(n[s]),l+n[s])}isColSelection(){const e=this.$anchorCell.index(-1),t=this.$headCell.index(-1);if(Math.min(e,t)>0)return!1;const i=e+this.$anchorCell.nodeAfter.attrs.rowspan,l=t+this.$headCell.nodeAfter.attrs.rowspan;return Math.max(i,l)==this.$headCell.node(-1).childCount}static colSelection(e,t=e){const i=e.node(-1),l=Ue.get(i),n=e.start(-1),s=l.findCell(e.pos-n),a=l.findCell(t.pos-n),o=e.node(0);return s.top<=a.top?(s.top>0&&(e=o.resolve(n+l.map[s.left])),a.bottom<l.height&&(t=o.resolve(n+l.map[l.width*(l.height-1)+a.right-1]))):(a.top>0&&(t=o.resolve(n+l.map[a.left])),s.bottom<l.height&&(e=o.resolve(n+l.map[l.width*(l.height-1)+s.right-1]))),new We(e,t)}isRowSelection(){const e=this.$anchorCell.node(-1),t=Ue.get(e),i=this.$anchorCell.start(-1),l=t.colCount(this.$anchorCell.pos-i),n=t.colCount(this.$headCell.pos-i);if(Math.min(l,n)>0)return!1;const s=l+this.$anchorCell.nodeAfter.attrs.colspan,a=n+this.$headCell.nodeAfter.attrs.colspan;return Math.max(s,a)==t.width}eq(e){return e instanceof We&&e.$anchorCell.pos==this.$anchorCell.pos&&e.$headCell.pos==this.$headCell.pos}static rowSelection(e,t=e){const i=e.node(-1),l=Ue.get(i),n=e.start(-1),s=l.findCell(e.pos-n),a=l.findCell(t.pos-n),o=e.node(0);return s.left<=a.left?(s.left>0&&(e=o.resolve(n+l.map[s.top*l.width])),a.right<l.width&&(t=o.resolve(n+l.map[l.width*(a.top+1)-1]))):(a.left>0&&(t=o.resolve(n+l.map[a.top*l.width])),s.right<l.width&&(e=o.resolve(n+l.map[l.width*(s.top+1)-1]))),new We(e,t)}toJSON(){return{type:"cell",anchor:this.$anchorCell.pos,head:this.$headCell.pos}}static fromJSON(e,t){return new We(e.resolve(t.anchor),e.resolve(t.head))}static create(e,t,i=t){return new We(e.resolve(t),e.resolve(i))}getBookmark(){return new dm(this.$anchorCell.pos,this.$headCell.pos)}};Ze.prototype.visible=!1;$.jsonID("cell",Ze);var dm=class Zc{constructor(e,t){this.anchor=e,this.head=t}map(e){return new Zc(e.map(this.anchor),e.map(this.head))}resolve(e){const t=e.resolve(this.anchor),i=e.resolve(this.head);return t.parent.type.spec.tableRole=="row"&&i.parent.type.spec.tableRole=="row"&&t.index()<t.parent.childCount&&i.index()<i.parent.childCount&&Yc(t,i)?new Ze(t,i):$.near(i,1)}};new $r("fix-tables");function Qc(r){const e=r.selection,t=om(r),i=t.node(-1),l=t.start(-1),n=Ue.get(i);return{...e instanceof Ze?n.rectBetween(e.$anchorCell.pos-l,e.$headCell.pos-l):n.findCell(t.pos-l),tableStart:l,map:n,table:i}}function hm(r){return function(e,t){if(!Jc(e))return!1;if(t){const i=Yn(e.schema),l=Qc(e),n=e.tr,s=l.map.cellsInRect(r=="column"?{left:l.left,top:0,right:l.right,bottom:l.map.height}:r=="row"?{left:0,top:l.top,right:l.map.width,bottom:l.bottom}:l),a=s.map(o=>l.table.nodeAt(o));for(let o=0;o<s.length;o++)a[o].type==i.header_cell&&n.setNodeMarkup(l.tableStart+s[o],i.cell,a[o].attrs);if(n.steps.length==0)for(let o=0;o<s.length;o++)n.setNodeMarkup(l.tableStart+s[o],i.header_cell,a[o].attrs);t(n)}return!0}}function Na(r,e,t){const i=e.map.cellsInRect({left:0,top:0,right:r=="row"?e.map.width:1,bottom:r=="column"?e.map.height:1});for(let l=0;l<i.length;l++){const n=e.table.nodeAt(i[l]);if(n&&n.type!==t.header_cell)return!1}return!0}function Xn(r,e){return e=e||{useDeprecatedLogic:!1},e.useDeprecatedLogic?hm(r):function(t,i){if(!Jc(t))return!1;if(i){const l=Yn(t.schema),n=Qc(t),s=t.tr,a=Na("row",n,l),o=Na("column",n,l),c=(r==="column"?a:r==="row"&&o)?1:0,d=r=="column"?{left:0,top:c,right:1,bottom:n.map.height}:r=="row"?{left:c,top:0,right:n.map.width,bottom:1}:n,h=r=="column"?o?l.cell:l.header_cell:r=="row"?a?l.cell:l.header_cell:l.cell;n.map.cellsInRect(d).forEach(f=>{const u=f+n.tableStart,p=s.doc.nodeAt(u);p&&s.setNodeMarkup(u,h,p.attrs)}),i(s)}return!0}}Xn("row",{useDeprecatedLogic:!0});Xn("column",{useDeprecatedLogic:!0});Xn("cell",{useDeprecatedLogic:!0});function ci(r,e){const t=r.selection;if(!(t instanceof Ze))return!1;if(e){const i=r.tr,l=Yn(r.schema).cell.createAndFill().content;t.forEachCell((n,s)=>{n.content.eq(l)||i.replace(i.mapping.map(s+1),i.mapping.map(s+n.nodeSize-1),new L(l,0,0))}),i.docChanged&&e(i)}return!0}gp({ArrowLeft:di("horiz",-1),ArrowRight:di("horiz",1),ArrowUp:di("vert",-1),ArrowDown:di("vert",1),"Shift-ArrowLeft":hi("horiz",-1),"Shift-ArrowRight":hi("horiz",1),"Shift-ArrowUp":hi("vert",-1),"Shift-ArrowDown":hi("vert",1),Backspace:ci,"Mod-Backspace":ci,Delete:ci,"Mod-Delete":ci});function zi(r,e,t){return t.eq(r.selection)?!1:(e&&e(r.tr.setSelection(t).scrollIntoView()),!0)}function di(r,e){return(t,i,l)=>{if(!l)return!1;const n=t.selection;if(n instanceof Ze)return zi(t,i,$.near(n.$headCell,e));if(r!="horiz"&&!n.empty)return!1;const s=ed(l,r,e);if(s==null)return!1;if(r=="horiz")return zi(t,i,$.near(t.doc.resolve(n.head+e),e));{const a=t.doc.resolve(s),o=Xc(a,r,e);let c;return o?c=$.near(o,1):e<0?c=$.near(t.doc.resolve(a.before(-1)),-1):c=$.near(t.doc.resolve(a.after(-1)),1),zi(t,i,c)}}}function hi(r,e){return(t,i,l)=>{if(!l)return!1;const n=t.selection;let s;if(n instanceof Ze)s=n;else{const o=ed(l,r,e);if(o==null)return!1;s=new Ze(t.doc.resolve(o))}const a=Xc(s.$headCell,r,e);return a?zi(t,i,new Ze(s.$anchorCell,a)):!1}}function ed(r,e,t){if(!(r.state.selection instanceof J))return null;const{$head:i}=r.state.selection;for(let l=i.depth-1;l>=0;l--){const n=i.node(l);if((t<0?i.index(l):i.indexAfter(l))!=(t<0?0:n.childCount))return null;if(n.type.spec.tableRole=="cell"||n.type.spec.tableRole=="header_cell"){const s=i.before(l),a=e=="vert"?t>0?"down":"up":t>0?"right":"left";return r.endOfTextblock(a)?s:null}}return null}new $r("tableColumnResizing");const zr=r=>{const e=Object.fromEntries(Array.from(r.attributes).map(t=>[t.name,t.value]));return delete e.draggable,e},Fa="data-gs-mrk-fs",Ha="data-gs-ib",_a="data-gs-ifrg",Lt="attrs",td={[Lt]:{default:"{}"}},Ge={[Lt]:{default:{}}},rd=r=>({[Lt]:JSON.stringify(zr(r))}),qe=r=>({attrs:zr(r)}),dr=r=>e=>[r,e.attrs.attrs,0],$t=r=>r.attrs[Lt]?JSON.parse(r.attrs[Lt]):{},fm={doc:{content:"block+"},text:{group:"inline",inline:!0},inlineFragment:{group:"block",content:"inline*",isTextBlock:!0,parseDOM:[{tag:`span[${_a}]`,getAttrs:qe}],toDOM:()=>["span",{[_a]:""},0]},div:{group:"block",content:"inline*",attrs:Ge,parseDOM:[{tag:"div",getAttrs:qe}],toDOM:dr("div")},paragraph:{group:"block",content:"inline*",attrs:Ge,parseDOM:[{tag:"p",getAttrs:qe}],toDOM:dr("p")},orderedList:{group:"block",content:"listItem+",attrs:Ge,parseDOM:[{tag:"ol",getAttrs:qe}],toDOM:dr("ol")},bulletList:{group:"block",content:"listItem+",attrs:Ge,parseDOM:[{tag:"ul",getAttrs:qe}],toDOM:dr("ul")},listItem:{content:"block*",group:"block",attrs:Ge,parseDOM:[{tag:"li",getAttrs:qe}],toDOM:dr("li"),defining:!0},codeBlock:{group:"block",content:"text*",marks:"",attrs:Ge,parseDOM:[{tag:"pre",getAttrs:qe}],toDOM:r=>["pre",r.attrs.attrs,["code",0]]},image:{inline:!0,group:"inline",selectable:!0,attrs:Ge,parseDOM:[{tag:"img[src]",getAttrs:qe}],toDOM:r=>["img",r.attrs.attrs]},inlineBreak:{inline:!0,group:"inline",selectable:!1,parseDOM:[{tag:`br[${Ha}]`}],toDOM(){return["br",{[Ha]:""}]}},hardBreak:{inline:!1,group:"block",selectable:!1,attrs:Ge,parseDOM:[{tag:"br",getAttrs:qe}],toDOM:r=>["br",{...r.attrs.attrs}]},heading:{group:"block",content:"inline*",attrs:{level:{default:1},attrs:{default:{}}},defining:!0,parseDOM:Array.from({length:6},(r,e)=>({tag:`h${e+1}`,getAttrs:t=>({level:e+1,attrs:zr(t)})})),toDOM({attrs:r}){const{level:e}=r;return[e?`h${e}`:"div",r.attrs,0]}},...sm({tableGroup:"block",cellContent:"block+",cellAttributes:{[Lt]:{default:Ge[Lt].default,getFromDOM:zr,setDOMAttr:(r,e)=>{r&&Object.assign(e,r)}},background:{default:null,getFromDOM(r){return r.style.backgroundColor||null},setDOMAttr(r,e){r&&(e.style=(e.style||"")+`background-color: ${r};`)}}}}),nonTextNode:{group:"block",content:"block*",attrs:{tagName:{default:"span"},attrs:{default:{}}},parseDOM:[{tag:"*:not(tbody)",getAttrs:r=>({tagName:r.tagName.toLowerCase(),attrs:zr(r)}),priority:0}],toDOM(r){const{tagName:e,attrs:t}=r.attrs;return[e,t,0]}}},hr=(r,e)=>({attrs:td,parseDOM:r.map(t=>({tag:t,getAttrs:rd})),toDOM:e}),um={strong:hr(["strong","b"],r=>["b",$t(r)]),link:hr(["a"],r=>["a",$t(r),0]),em:hr(["em","i"],r=>["em",$t(r)]),underline:hr(["u"],r=>["u",$t(r),0]),strikethrough:hr(["s"],r=>["s",$t(r),0]),font_size:{attrs:{...td,size:{default:null}},parseDOM:[{tag:`span[${Fa}]`,getAttrs:r=>({...rd(r),size:r.style.fontSize})}],toDOM(r){const{size:e}=r.attrs,t={...$t(r),[Fa]:!0};return e&&(t.style=`font-size: ${e}`),["span",t,0]}}};new Au({nodes:fm,marks:um});class ar{constructor(e,t,i={}){this.match=e,this.match=e,this.handler=typeof t=="string"?pm(t):t,this.undoable=i.undoable!==!1,this.inCode=i.inCode||!1}}function pm(r){return function(e,t,i,l){let n=r;if(t[1]){let s=t[0].lastIndexOf(t[1]);n+=t[0].slice(s+t[1].length),i+=s;let a=i-l;a>0&&(n=t[0].slice(s-a,s)+n,i=l)}return e.tr.insertText(n,i,l)}}new ar(/--$/,"—");new ar(/\.\.\.$/,"…");new ar(/(?:^|[\s\{\[\(\<'"\u2018\u201C])(")$/,"“");new ar(/"$/,"”");new ar(/(?:^|[\s\{\[\(\<'"\u2018\u201C])(')$/,"‘");new ar(/'$/,"’");Alpine.plugin(Hh);Alpine.plugin(Gh);Alpine.plugin(Kh);Alpine.plugin(Qh);Alpine.plugin(B0);window.Swiper=ze;let fi=null,ui=null;const $a="20260330-1";function mm(r){return Array.isArray(r)?r.filter(e=>typeof e=="function"):[]}function gm(){const r=window.__lmzBuilderConfig&&typeof window.__lmzBuilderConfig=="object"?window.__lmzBuilderConfig:{};if(r.__lmzRuntimeExtensionsRegistered){window.__lmzBuilderConfig=r;return}const e=mm(r.blockRegistrars);e.includes(Ns)||e.push(Ns);const t=Array.isArray(r.plugins)?r.plugins.filter(Boolean):[];try{ni!=null&&ni.init&&t.push(ni.init({enableOnClick:!0}))}catch(i){console.warn("LMZ Builder Plugin konnte nicht registriert werden:",i)}r.blockRegistrars=e,r.plugins=t,r.__lmzRuntimeExtensionsRegistered=!0,window.__lmzBuilderConfig=r}function Va(){window.editor&&typeof window.editor.destroy=="function"&&(window.editor.destroy(),window.editor=null),window.__webreachStudioProjectId=null,window.__webreachStudioMountedRoot=null}function xm(){window.__lmzBuilderInstance&&typeof window.__lmzBuilderInstance.destroy=="function"&&window.__lmzBuilderInstance.destroy(),window.__lmzBuilderInstance=null,window.__lmzBuilderProjectId=null,window.__lmzBuilderRoot=null}function vm(r){return document.querySelector(`link[data-webreach-style="${r}"]`)?Promise.resolve():new Promise((e,t)=>{const i=document.createElement("link");i.rel="stylesheet",i.href=r,i.dataset.webreachStyle=r,i.onload=e,i.onerror=()=>t(new Error(`Stylesheet konnte nicht geladen werden: ${r}`)),document.head.appendChild(i)})}function ym(r){return document.querySelector(`script[data-webreach-script="${r}"]`)?Promise.resolve():new Promise((e,t)=>{const i=document.createElement("script");i.src=r,i.async=!0,i.dataset.webreachScript=r,i.onload=e,i.onerror=()=>t(new Error(`Script konnte nicht geladen werden: ${r}`)),document.head.appendChild(i)})}function wm(){return typeof window.initLMZBuilder=="function"?Promise.resolve():(ui||(ui=Promise.all([vm("/adminressources/pagebuilder/lmz-builder.css?v="+$a),ym("/adminressources/pagebuilder/lmz-builder.js?v="+$a)]).catch(r=>{throw ui=null,r})),ui)}function bm(){!window.MetisMenu||!document.getElementById("side-menu")||(window.__webreachMetisMenu&&typeof window.__webreachMetisMenu.dispose=="function"&&window.__webreachMetisMenu.dispose(),window.__webreachMetisMenu=new window.MetisMenu("#side-menu"))}function km(){document.querySelectorAll(".vertical-menu-btn").forEach(r=>{r.dataset.webreachBound!=="1"&&(r.dataset.webreachBound="1",r.addEventListener("click",e=>{if(e.preventDefault(),document.body.classList.toggle("sidebar-enable"),window.innerWidth>=992){const t=document.body.getAttribute("data-sidebar-size");document.body.setAttribute("data-sidebar-size",t==="sm"?"lg":"sm")}id()}))})}function Sm(){const r=window.location.href.split(/[?#]/)[0],e=document.querySelectorAll("#sidebar-menu a");e.forEach(t=>{t.classList.remove("active");const i=t.closest("li");i&&i.classList.remove("mm-active")}),e.forEach(t=>{if(t.href!==r)return;t.classList.add("active");let i=t.closest("li");for(;i;){i.classList.add("mm-active");const l=i.parentElement;l&&l.tagName==="UL"&&l.classList.add("mm-show"),i=l?l.closest("li"):null}})}function id(){setTimeout(()=>{const r=document.getElementById("side-menu"),e=r==null?void 0:r.querySelector(".mm-active .active");if(!e||e.offsetTop<=300)return;const t=document.querySelector(".vertical-menu"),i=t==null?void 0:t.querySelector(".simplebar-content-wrapper");i&&(i.scrollTop=e.offsetTop)},150)}function Mm(){window.feather&&typeof window.feather.replace=="function"&&window.feather.replace()}function Zn(){bm(),km(),Sm(),id(),Mm()}function Qn(){if(gm(),!document.getElementById("studio-editor")){Va(),xm();return}wm().then(()=>{if(document.getElementById("studio-editor")){if(typeof window.initLMZBuilder=="function")return Va(),window.initLMZBuilder();throw new Error("initLMZBuilder ist nicht verfuegbar.")}}).catch(e=>{if(console.error("LMZ Builder konnte nicht geladen werden:",e),typeof window.initGrapesJs=="function"){window.initGrapesJs();return}fi||(fi=sd(()=>import("./pagebuilder-7CA-VarU.js"),__vite__mapDeps([0,1])).catch(t=>{console.error("Studio-Pagebuilder konnte nicht geladen werden:",t),fi=null})),fi.then(()=>{typeof window.initGrapesJs=="function"&&document.getElementById("studio-editor")&&window.initGrapesJs()})})}document.addEventListener("DOMContentLoaded",Zn);document.addEventListener("livewire:load",Zn);document.addEventListener("livewire:navigated",Zn);document.addEventListener("DOMContentLoaded",Qn);document.addEventListener("livewire:load",Qn);document.addEventListener("livewire:navigated",Qn);export{qm as D,Km as L,Gm as N,Wm as R,Um as V,Ns as a,ni as z};
