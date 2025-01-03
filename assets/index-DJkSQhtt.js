(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function $a(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const be={},_r=[],Bt=()=>{},cg=()=>!1,io=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Ha=t=>t.startsWith("onUpdate:"),rt=Object.assign,qa=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},ug=Object.prototype.hasOwnProperty,Te=(t,e)=>ug.call(t,e),oe=Array.isArray,ii=t=>so(t)==="[object Map]",hg=t=>so(t)==="[object Set]",ae=t=>typeof t=="function",Be=t=>typeof t=="string",Vr=t=>typeof t=="symbol",Ve=t=>t!==null&&typeof t=="object",Oh=t=>(Ve(t)||ae(t))&&ae(t.then)&&ae(t.catch),fg=Object.prototype.toString,so=t=>fg.call(t),dg=t=>so(t).slice(8,-1),pg=t=>so(t)==="[object Object]",za=t=>Be(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,si=$a(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),oo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},gg=/-(\w)/g,kn=oo(t=>t.replace(gg,(e,n)=>n?n.toUpperCase():"")),mg=/\B([A-Z])/g,sr=oo(t=>t.replace(mg,"-$1").toLowerCase()),kh=oo(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ho=oo(t=>t?`on${kh(t)}`:""),Rn=(t,e)=>!Object.is(t,e),qo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Dh=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},_g=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Vc;const ao=()=>Vc||(Vc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ga(t){if(oe(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=Be(r)?Tg(r):Ga(r);if(i)for(const s in i)e[s]=i[s]}return e}else if(Be(t)||Ve(t))return t}const yg=/;(?![^(]*\))/g,vg=/:([^]+)/,Eg=/\/\*[^]*?\*\//g;function Tg(t){const e={};return t.replace(Eg,"").split(yg).forEach(n=>{if(n){const r=n.split(vg);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Ka(t){let e="";if(Be(t))e=t;else if(oe(t))for(let n=0;n<t.length;n++){const r=Ka(t[n]);r&&(e+=r+" ")}else if(Ve(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Ig="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",wg=$a(Ig);function Nh(t){return!!t||t===""}/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let yt;class Vh{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=yt,!e&&yt&&(this.index=(yt.scopes||(yt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=yt;try{return yt=this,e()}finally{yt=n}}}on(){yt=this}off(){yt=this.parent}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function Ag(t){return new Vh(t)}function bg(){return yt}let Ae;const zo=new WeakSet;class xh{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,yt&&yt.active&&yt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,zo.has(this)&&(zo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Lh(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,xc(this),Fh(this);const e=Ae,n=Ot;Ae=this,Ot=!0;try{return this.fn()}finally{Uh(this),Ae=e,Ot=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ja(e);this.deps=this.depsTail=void 0,xc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?zo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ha(this)&&this.run()}get dirty(){return ha(this)}}let Mh=0,oi,ai;function Lh(t,e=!1){if(t.flags|=8,e){t.next=ai,ai=t;return}t.next=oi,oi=t}function Wa(){Mh++}function Qa(){if(--Mh>0)return;if(ai){let e=ai;for(ai=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;oi;){let e=oi;for(oi=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Fh(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Uh(t){let e,n=t.depsTail,r=n;for(;r;){const i=r.prevDep;r.version===-1?(r===n&&(n=i),Ja(r),Rg(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=i}t.deps=e,t.depsTail=n}function ha(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Bh(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Bh(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===vi))return;t.globalVersion=vi;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!ha(t)){t.flags&=-3;return}const n=Ae,r=Ot;Ae=t,Ot=!0;try{Fh(t);const i=t.fn(t._value);(e.version===0||Rn(i,t._value))&&(t._value=i,e.version++)}catch(i){throw e.version++,i}finally{Ae=n,Ot=r,Uh(t),t.flags&=-3}}function Ja(t,e=!1){const{dep:n,prevSub:r,nextSub:i}=t;if(r&&(r.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)Ja(s,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Rg(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Ot=!0;const jh=[];function xn(){jh.push(Ot),Ot=!1}function Mn(){const t=jh.pop();Ot=t===void 0?!0:t}function xc(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ae;Ae=void 0;try{e()}finally{Ae=n}}}let vi=0;class Sg{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Xa{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Ae||!Ot||Ae===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ae)n=this.activeLink=new Sg(Ae,this),Ae.deps?(n.prevDep=Ae.depsTail,Ae.depsTail.nextDep=n,Ae.depsTail=n):Ae.deps=Ae.depsTail=n,$h(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Ae.depsTail,n.nextDep=void 0,Ae.depsTail.nextDep=n,Ae.depsTail=n,Ae.deps===n&&(Ae.deps=r)}return n}trigger(e){this.version++,vi++,this.notify(e)}notify(e){Wa();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Qa()}}}function $h(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)$h(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const fa=new WeakMap,Kn=Symbol(""),da=Symbol(""),Ei=Symbol("");function et(t,e,n){if(Ot&&Ae){let r=fa.get(t);r||fa.set(t,r=new Map);let i=r.get(n);i||(r.set(n,i=new Xa),i.map=r,i.key=n),i.track()}}function Zt(t,e,n,r,i,s){const a=fa.get(t);if(!a){vi++;return}const l=c=>{c&&c.trigger()};if(Wa(),e==="clear")a.forEach(l);else{const c=oe(t),f=c&&za(n);if(c&&n==="length"){const d=Number(r);a.forEach((p,y)=>{(y==="length"||y===Ei||!Vr(y)&&y>=d)&&l(p)})}else switch((n!==void 0||a.has(void 0))&&l(a.get(n)),f&&l(a.get(Ei)),e){case"add":c?f&&l(a.get("length")):(l(a.get(Kn)),ii(t)&&l(a.get(da)));break;case"delete":c||(l(a.get(Kn)),ii(t)&&l(a.get(da)));break;case"set":ii(t)&&l(a.get(Kn));break}}Qa()}function fr(t){const e=Ee(t);return e===t?e:(et(e,"iterate",Ei),kt(t)?e:e.map(lt))}function Ya(t){return et(t=Ee(t),"iterate",Ei),t}const Pg={__proto__:null,[Symbol.iterator](){return Go(this,Symbol.iterator,lt)},concat(...t){return fr(this).concat(...t.map(e=>oe(e)?fr(e):e))},entries(){return Go(this,"entries",t=>(t[1]=lt(t[1]),t))},every(t,e){return Qt(this,"every",t,e,void 0,arguments)},filter(t,e){return Qt(this,"filter",t,e,n=>n.map(lt),arguments)},find(t,e){return Qt(this,"find",t,e,lt,arguments)},findIndex(t,e){return Qt(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Qt(this,"findLast",t,e,lt,arguments)},findLastIndex(t,e){return Qt(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Qt(this,"forEach",t,e,void 0,arguments)},includes(...t){return Ko(this,"includes",t)},indexOf(...t){return Ko(this,"indexOf",t)},join(t){return fr(this).join(t)},lastIndexOf(...t){return Ko(this,"lastIndexOf",t)},map(t,e){return Qt(this,"map",t,e,void 0,arguments)},pop(){return Yr(this,"pop")},push(...t){return Yr(this,"push",t)},reduce(t,...e){return Mc(this,"reduce",t,e)},reduceRight(t,...e){return Mc(this,"reduceRight",t,e)},shift(){return Yr(this,"shift")},some(t,e){return Qt(this,"some",t,e,void 0,arguments)},splice(...t){return Yr(this,"splice",t)},toReversed(){return fr(this).toReversed()},toSorted(t){return fr(this).toSorted(t)},toSpliced(...t){return fr(this).toSpliced(...t)},unshift(...t){return Yr(this,"unshift",t)},values(){return Go(this,"values",lt)}};function Go(t,e,n){const r=Ya(t),i=r[e]();return r!==t&&!kt(t)&&(i._next=i.next,i.next=()=>{const s=i._next();return s.value&&(s.value=n(s.value)),s}),i}const Cg=Array.prototype;function Qt(t,e,n,r,i,s){const a=Ya(t),l=a!==t&&!kt(t),c=a[e];if(c!==Cg[e]){const p=c.apply(t,s);return l?lt(p):p}let f=n;a!==t&&(l?f=function(p,y){return n.call(this,lt(p),y,t)}:n.length>2&&(f=function(p,y){return n.call(this,p,y,t)}));const d=c.call(a,f,r);return l&&i?i(d):d}function Mc(t,e,n,r){const i=Ya(t);let s=n;return i!==t&&(kt(t)?n.length>3&&(s=function(a,l,c){return n.call(this,a,l,c,t)}):s=function(a,l,c){return n.call(this,a,lt(l),c,t)}),i[e](s,...r)}function Ko(t,e,n){const r=Ee(t);et(r,"iterate",Ei);const i=r[e](...n);return(i===-1||i===!1)&&tl(n[0])?(n[0]=Ee(n[0]),r[e](...n)):i}function Yr(t,e,n=[]){xn(),Wa();const r=Ee(t)[e].apply(t,n);return Qa(),Mn(),r}const Og=$a("__proto__,__v_isRef,__isVue"),Hh=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Vr));function kg(t){Vr(t)||(t=String(t));const e=Ee(this);return et(e,"has",t),e.hasOwnProperty(t)}class qh{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const i=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return s;if(n==="__v_raw")return r===(i?s?jg:Wh:s?Kh:Gh).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=oe(e);if(!i){let c;if(a&&(c=Pg[n]))return c;if(n==="hasOwnProperty")return kg}const l=Reflect.get(e,n,nt(e)?e:r);return(Vr(n)?Hh.has(n):Og(n))||(i||et(e,"get",n),s)?l:nt(l)?a&&za(n)?l:l.value:Ve(l)?i?Jh(l):lo(l):l}}class zh extends qh{constructor(e=!1){super(!1,e)}set(e,n,r,i){let s=e[n];if(!this._isShallow){const c=Yn(s);if(!kt(r)&&!Yn(r)&&(s=Ee(s),r=Ee(r)),!oe(e)&&nt(s)&&!nt(r))return c?!1:(s.value=r,!0)}const a=oe(e)&&za(n)?Number(n)<e.length:Te(e,n),l=Reflect.set(e,n,r,nt(e)?e:i);return e===Ee(i)&&(a?Rn(r,s)&&Zt(e,"set",n,r):Zt(e,"add",n,r)),l}deleteProperty(e,n){const r=Te(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&r&&Zt(e,"delete",n,void 0),i}has(e,n){const r=Reflect.has(e,n);return(!Vr(n)||!Hh.has(n))&&et(e,"has",n),r}ownKeys(e){return et(e,"iterate",oe(e)?"length":Kn),Reflect.ownKeys(e)}}class Dg extends qh{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Ng=new zh,Vg=new Dg,xg=new zh(!0);const pa=t=>t,ls=t=>Reflect.getPrototypeOf(t);function Mg(t,e,n){return function(...r){const i=this.__v_raw,s=Ee(i),a=ii(s),l=t==="entries"||t===Symbol.iterator&&a,c=t==="keys"&&a,f=i[t](...r),d=n?pa:e?ga:lt;return!e&&et(s,"iterate",c?da:Kn),{next(){const{value:p,done:y}=f.next();return y?{value:p,done:y}:{value:l?[d(p[0]),d(p[1])]:d(p),done:y}},[Symbol.iterator](){return this}}}}function cs(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Lg(t,e){const n={get(i){const s=this.__v_raw,a=Ee(s),l=Ee(i);t||(Rn(i,l)&&et(a,"get",i),et(a,"get",l));const{has:c}=ls(a),f=e?pa:t?ga:lt;if(c.call(a,i))return f(s.get(i));if(c.call(a,l))return f(s.get(l));s!==a&&s.get(i)},get size(){const i=this.__v_raw;return!t&&et(Ee(i),"iterate",Kn),Reflect.get(i,"size",i)},has(i){const s=this.__v_raw,a=Ee(s),l=Ee(i);return t||(Rn(i,l)&&et(a,"has",i),et(a,"has",l)),i===l?s.has(i):s.has(i)||s.has(l)},forEach(i,s){const a=this,l=a.__v_raw,c=Ee(l),f=e?pa:t?ga:lt;return!t&&et(c,"iterate",Kn),l.forEach((d,p)=>i.call(s,f(d),f(p),a))}};return rt(n,t?{add:cs("add"),set:cs("set"),delete:cs("delete"),clear:cs("clear")}:{add(i){!e&&!kt(i)&&!Yn(i)&&(i=Ee(i));const s=Ee(this);return ls(s).has.call(s,i)||(s.add(i),Zt(s,"add",i,i)),this},set(i,s){!e&&!kt(s)&&!Yn(s)&&(s=Ee(s));const a=Ee(this),{has:l,get:c}=ls(a);let f=l.call(a,i);f||(i=Ee(i),f=l.call(a,i));const d=c.call(a,i);return a.set(i,s),f?Rn(s,d)&&Zt(a,"set",i,s):Zt(a,"add",i,s),this},delete(i){const s=Ee(this),{has:a,get:l}=ls(s);let c=a.call(s,i);c||(i=Ee(i),c=a.call(s,i)),l&&l.call(s,i);const f=s.delete(i);return c&&Zt(s,"delete",i,void 0),f},clear(){const i=Ee(this),s=i.size!==0,a=i.clear();return s&&Zt(i,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=Mg(i,t,e)}),n}function Za(t,e){const n=Lg(t,e);return(r,i,s)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?r:Reflect.get(Te(n,i)&&i in r?n:r,i,s)}const Fg={get:Za(!1,!1)},Ug={get:Za(!1,!0)},Bg={get:Za(!0,!1)};const Gh=new WeakMap,Kh=new WeakMap,Wh=new WeakMap,jg=new WeakMap;function $g(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Hg(t){return t.__v_skip||!Object.isExtensible(t)?0:$g(dg(t))}function lo(t){return Yn(t)?t:el(t,!1,Ng,Fg,Gh)}function Qh(t){return el(t,!1,xg,Ug,Kh)}function Jh(t){return el(t,!0,Vg,Bg,Wh)}function el(t,e,n,r,i){if(!Ve(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=i.get(t);if(s)return s;const a=Hg(t);if(a===0)return t;const l=new Proxy(t,a===2?r:n);return i.set(t,l),l}function li(t){return Yn(t)?li(t.__v_raw):!!(t&&t.__v_isReactive)}function Yn(t){return!!(t&&t.__v_isReadonly)}function kt(t){return!!(t&&t.__v_isShallow)}function tl(t){return t?!!t.__v_raw:!1}function Ee(t){const e=t&&t.__v_raw;return e?Ee(e):t}function Xh(t){return!Te(t,"__v_skip")&&Object.isExtensible(t)&&Dh(t,"__v_skip",!0),t}const lt=t=>Ve(t)?lo(t):t,ga=t=>Ve(t)?Jh(t):t;function nt(t){return t?t.__v_isRef===!0:!1}function Yh(t){return Zh(t,!1)}function qg(t){return Zh(t,!0)}function Zh(t,e){return nt(t)?t:new zg(t,e)}class zg{constructor(e,n){this.dep=new Xa,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ee(e),this._value=n?e:lt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||kt(e)||Yn(e);e=r?e:Ee(e),Rn(e,n)&&(this._rawValue=e,this._value=r?e:lt(e),this.dep.trigger())}}function Wn(t){return nt(t)?t.value:t}const Gg={get:(t,e,n)=>e==="__v_raw"?t:Wn(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return nt(i)&&!nt(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function ef(t){return li(t)?t:new Proxy(t,Gg)}class Kg{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Xa(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=vi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ae!==this)return Lh(this,!0),!0}get value(){const e=this.dep.track();return Bh(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Wg(t,e,n=!1){let r,i;return ae(t)?r=t:(r=t.get,i=t.set),new Kg(r,i,n)}const us={},Os=new WeakMap;let Hn;function Qg(t,e=!1,n=Hn){if(n){let r=Os.get(n);r||Os.set(n,r=[]),r.push(t)}}function Jg(t,e,n=be){const{immediate:r,deep:i,once:s,scheduler:a,augmentJob:l,call:c}=n,f=z=>i?z:kt(z)||i===!1||i===0?In(z,1):In(z);let d,p,y,I,O=!1,M=!1;if(nt(t)?(p=()=>t.value,O=kt(t)):li(t)?(p=()=>f(t),O=!0):oe(t)?(M=!0,O=t.some(z=>li(z)||kt(z)),p=()=>t.map(z=>{if(nt(z))return z.value;if(li(z))return f(z);if(ae(z))return c?c(z,2):z()})):ae(t)?e?p=c?()=>c(t,2):t:p=()=>{if(y){xn();try{y()}finally{Mn()}}const z=Hn;Hn=d;try{return c?c(t,3,[I]):t(I)}finally{Hn=z}}:p=Bt,e&&i){const z=p,ce=i===!0?1/0:i;p=()=>In(z(),ce)}const F=bg(),G=()=>{d.stop(),F&&F.active&&qa(F.effects,d)};if(s&&e){const z=e;e=(...ce)=>{z(...ce),G()}}let j=M?new Array(t.length).fill(us):us;const q=z=>{if(!(!(d.flags&1)||!d.dirty&&!z))if(e){const ce=d.run();if(i||O||(M?ce.some((ue,w)=>Rn(ue,j[w])):Rn(ce,j))){y&&y();const ue=Hn;Hn=d;try{const w=[ce,j===us?void 0:M&&j[0]===us?[]:j,I];c?c(e,3,w):e(...w),j=ce}finally{Hn=ue}}}else d.run()};return l&&l(q),d=new xh(p),d.scheduler=a?()=>a(q,!1):q,I=z=>Qg(z,!1,d),y=d.onStop=()=>{const z=Os.get(d);if(z){if(c)c(z,4);else for(const ce of z)ce();Os.delete(d)}},e?r?q(!0):j=d.run():a?a(q.bind(null,!0),!0):d.run(),G.pause=d.pause.bind(d),G.resume=d.resume.bind(d),G.stop=G,G}function In(t,e=1/0,n){if(e<=0||!Ve(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,nt(t))In(t.value,e,n);else if(oe(t))for(let r=0;r<t.length;r++)In(t[r],e,n);else if(hg(t)||ii(t))t.forEach(r=>{In(r,e,n)});else if(pg(t)){for(const r in t)In(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&In(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Vi(t,e,n,r){try{return r?t(...r):t()}catch(i){co(i,e,n)}}function Ht(t,e,n,r){if(ae(t)){const i=Vi(t,e,n,r);return i&&Oh(i)&&i.catch(s=>{co(s,e,n)}),i}if(oe(t)){const i=[];for(let s=0;s<t.length;s++)i.push(Ht(t[s],e,n,r));return i}}function co(t,e,n,r=!0){const i=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||be;if(e){let l=e.parent;const c=e.proxy,f=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const d=l.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](t,c,f)===!1)return}l=l.parent}if(s){xn(),Vi(s,null,10,[t,c,f]),Mn();return}}Xg(t,n,i,r,a)}function Xg(t,e,n,r=!0,i=!1){if(i)throw t;console.error(t)}const ct=[];let Lt=-1;const yr=[];let vn=null,dr=0;const tf=Promise.resolve();let ks=null;function nf(t){const e=ks||tf;return t?e.then(this?t.bind(this):t):e}function Yg(t){let e=Lt+1,n=ct.length;for(;e<n;){const r=e+n>>>1,i=ct[r],s=Ti(i);s<t||s===t&&i.flags&2?e=r+1:n=r}return e}function nl(t){if(!(t.flags&1)){const e=Ti(t),n=ct[ct.length-1];!n||!(t.flags&2)&&e>=Ti(n)?ct.push(t):ct.splice(Yg(e),0,t),t.flags|=1,rf()}}function rf(){ks||(ks=tf.then(of))}function Zg(t){oe(t)?yr.push(...t):vn&&t.id===-1?vn.splice(dr+1,0,t):t.flags&1||(yr.push(t),t.flags|=1),rf()}function Lc(t,e,n=Lt+1){for(;n<ct.length;n++){const r=ct[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;ct.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function sf(t){if(yr.length){const e=[...new Set(yr)].sort((n,r)=>Ti(n)-Ti(r));if(yr.length=0,vn){vn.push(...e);return}for(vn=e,dr=0;dr<vn.length;dr++){const n=vn[dr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}vn=null,dr=0}}const Ti=t=>t.id==null?t.flags&2?-1:1/0:t.id;function of(t){try{for(Lt=0;Lt<ct.length;Lt++){const e=ct[Lt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Vi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Lt<ct.length;Lt++){const e=ct[Lt];e&&(e.flags&=-2)}Lt=-1,ct.length=0,sf(),ks=null,(ct.length||yr.length)&&of()}}let Ut=null,af=null;function Ds(t){const e=Ut;return Ut=t,af=t&&t.type.__scopeId||null,e}function em(t,e=Ut,n){if(!e||t._n)return t;const r=(...i)=>{r._d&&Gc(-1);const s=Ds(e);let a;try{a=t(...i)}finally{Ds(s),r._d&&Gc(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function jn(t,e,n,r){const i=t.dirs,s=e&&e.dirs;for(let a=0;a<i.length;a++){const l=i[a];s&&(l.oldValue=s[a].value);let c=l.dir[r];c&&(xn(),Ht(c,n,8,[t.el,l,t,e]),Mn())}}const tm=Symbol("_vte"),nm=t=>t.__isTeleport;function rl(t,e){t.shapeFlag&6&&t.component?(t.transition=e,rl(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function xi(t,e){return ae(t)?rt({name:t.name},e,{setup:t}):t}function lf(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Ns(t,e,n,r,i=!1){if(oe(t)){t.forEach((O,M)=>Ns(O,e&&(oe(e)?e[M]:e),n,r,i));return}if(ci(r)&&!i){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Ns(t,e,n,r.component.subTree);return}const s=r.shapeFlag&4?al(r.component):r.el,a=i?null:s,{i:l,r:c}=t,f=e&&e.r,d=l.refs===be?l.refs={}:l.refs,p=l.setupState,y=Ee(p),I=p===be?()=>!1:O=>Te(y,O);if(f!=null&&f!==c&&(Be(f)?(d[f]=null,I(f)&&(p[f]=null)):nt(f)&&(f.value=null)),ae(c))Vi(c,l,12,[a,d]);else{const O=Be(c),M=nt(c);if(O||M){const F=()=>{if(t.f){const G=O?I(c)?p[c]:d[c]:c.value;i?oe(G)&&qa(G,s):oe(G)?G.includes(s)||G.push(s):O?(d[c]=[s],I(c)&&(p[c]=d[c])):(c.value=[s],t.k&&(d[t.k]=c.value))}else O?(d[c]=a,I(c)&&(p[c]=a)):M&&(c.value=a,t.k&&(d[t.k]=a))};a?(F.id=-1,_t(F,n)):F()}}}ao().requestIdleCallback;ao().cancelIdleCallback;const ci=t=>!!t.type.__asyncLoader,cf=t=>t.type.__isKeepAlive;function rm(t,e){uf(t,"a",e)}function im(t,e){uf(t,"da",e)}function uf(t,e,n=ut){const r=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(uo(e,r,n),n){let i=n.parent;for(;i&&i.parent;)cf(i.parent.vnode)&&sm(r,e,n,i),i=i.parent}}function sm(t,e,n,r){const i=uo(e,t,r,!0);hf(()=>{qa(r[e],i)},n)}function uo(t,e,n=ut,r=!1){if(n){const i=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...a)=>{xn();const l=Mi(n),c=Ht(e,n,t,a);return l(),Mn(),c});return r?i.unshift(s):i.push(s),s}}const un=t=>(e,n=ut)=>{(!Ai||t==="sp")&&uo(t,(...r)=>e(...r),n)},om=un("bm"),am=un("m"),lm=un("bu"),cm=un("u"),um=un("bum"),hf=un("um"),hm=un("sp"),fm=un("rtg"),dm=un("rtc");function pm(t,e=ut){uo("ec",t,e)}const gm=Symbol.for("v-ndc"),ma=t=>t?Nf(t)?al(t):ma(t.parent):null,ui=rt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ma(t.parent),$root:t=>ma(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>df(t),$forceUpdate:t=>t.f||(t.f=()=>{nl(t.update)}),$nextTick:t=>t.n||(t.n=nf.bind(t.proxy)),$watch:t=>Mm.bind(t)}),Wo=(t,e)=>t!==be&&!t.__isScriptSetup&&Te(t,e),mm={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:i,props:s,accessCache:a,type:l,appContext:c}=t;let f;if(e[0]!=="$"){const I=a[e];if(I!==void 0)switch(I){case 1:return r[e];case 2:return i[e];case 4:return n[e];case 3:return s[e]}else{if(Wo(r,e))return a[e]=1,r[e];if(i!==be&&Te(i,e))return a[e]=2,i[e];if((f=t.propsOptions[0])&&Te(f,e))return a[e]=3,s[e];if(n!==be&&Te(n,e))return a[e]=4,n[e];_a&&(a[e]=0)}}const d=ui[e];let p,y;if(d)return e==="$attrs"&&et(t.attrs,"get",""),d(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==be&&Te(n,e))return a[e]=4,n[e];if(y=c.config.globalProperties,Te(y,e))return y[e]},set({_:t},e,n){const{data:r,setupState:i,ctx:s}=t;return Wo(i,e)?(i[e]=n,!0):r!==be&&Te(r,e)?(r[e]=n,!0):Te(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:s}},a){let l;return!!n[a]||t!==be&&Te(t,a)||Wo(e,a)||(l=s[0])&&Te(l,a)||Te(r,a)||Te(ui,a)||Te(i.config.globalProperties,a)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Te(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Fc(t){return oe(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let _a=!0;function _m(t){const e=df(t),n=t.proxy,r=t.ctx;_a=!1,e.beforeCreate&&Uc(e.beforeCreate,t,"bc");const{data:i,computed:s,methods:a,watch:l,provide:c,inject:f,created:d,beforeMount:p,mounted:y,beforeUpdate:I,updated:O,activated:M,deactivated:F,beforeDestroy:G,beforeUnmount:j,destroyed:q,unmounted:z,render:ce,renderTracked:ue,renderTriggered:w,errorCaptured:m,serverPrefetch:T,expose:A,inheritAttrs:b,components:S,directives:E,filters:st}=e;if(f&&ym(f,r,null),a)for(const pe in a){const he=a[pe];ae(he)&&(r[pe]=he.bind(n))}if(i){const pe=i.call(n,n);Ve(pe)&&(t.data=lo(pe))}if(_a=!0,s)for(const pe in s){const he=s[pe],gt=ae(he)?he.bind(n,n):ae(he.get)?he.get.bind(n,n):Bt,At=!ae(he)&&ae(he.set)?he.set.bind(n):Bt,Tt=St({get:gt,set:At});Object.defineProperty(r,pe,{enumerable:!0,configurable:!0,get:()=>Tt.value,set:Ce=>Tt.value=Ce})}if(l)for(const pe in l)ff(l[pe],r,n,pe);if(c){const pe=ae(c)?c.call(n):c;Reflect.ownKeys(pe).forEach(he=>{_s(he,pe[he])})}d&&Uc(d,t,"c");function xe(pe,he){oe(he)?he.forEach(gt=>pe(gt.bind(n))):he&&pe(he.bind(n))}if(xe(om,p),xe(am,y),xe(lm,I),xe(cm,O),xe(rm,M),xe(im,F),xe(pm,m),xe(dm,ue),xe(fm,w),xe(um,j),xe(hf,z),xe(hm,T),oe(A))if(A.length){const pe=t.exposed||(t.exposed={});A.forEach(he=>{Object.defineProperty(pe,he,{get:()=>n[he],set:gt=>n[he]=gt})})}else t.exposed||(t.exposed={});ce&&t.render===Bt&&(t.render=ce),b!=null&&(t.inheritAttrs=b),S&&(t.components=S),E&&(t.directives=E),T&&lf(t)}function ym(t,e,n=Bt){oe(t)&&(t=ya(t));for(const r in t){const i=t[r];let s;Ve(i)?"default"in i?s=jt(i.from||r,i.default,!0):s=jt(i.from||r):s=jt(i),nt(s)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):e[r]=s}}function Uc(t,e,n){Ht(oe(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function ff(t,e,n,r){let i=r.includes(".")?Sf(n,r):()=>n[r];if(Be(t)){const s=e[t];ae(s)&&ys(i,s)}else if(ae(t))ys(i,t.bind(n));else if(Ve(t))if(oe(t))t.forEach(s=>ff(s,e,n,r));else{const s=ae(t.handler)?t.handler.bind(n):e[t.handler];ae(s)&&ys(i,s,t)}}function df(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:a}}=t.appContext,l=s.get(e);let c;return l?c=l:!i.length&&!n&&!r?c=e:(c={},i.length&&i.forEach(f=>Vs(c,f,a,!0)),Vs(c,e,a)),Ve(e)&&s.set(e,c),c}function Vs(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&Vs(t,s,n,!0),i&&i.forEach(a=>Vs(t,a,n,!0));for(const a in e)if(!(r&&a==="expose")){const l=vm[a]||n&&n[a];t[a]=l?l(t[a],e[a]):e[a]}return t}const vm={data:Bc,props:jc,emits:jc,methods:ni,computed:ni,beforeCreate:at,created:at,beforeMount:at,mounted:at,beforeUpdate:at,updated:at,beforeDestroy:at,beforeUnmount:at,destroyed:at,unmounted:at,activated:at,deactivated:at,errorCaptured:at,serverPrefetch:at,components:ni,directives:ni,watch:Tm,provide:Bc,inject:Em};function Bc(t,e){return e?t?function(){return rt(ae(t)?t.call(this,this):t,ae(e)?e.call(this,this):e)}:e:t}function Em(t,e){return ni(ya(t),ya(e))}function ya(t){if(oe(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function at(t,e){return t?[...new Set([].concat(t,e))]:e}function ni(t,e){return t?rt(Object.create(null),t,e):e}function jc(t,e){return t?oe(t)&&oe(e)?[...new Set([...t,...e])]:rt(Object.create(null),Fc(t),Fc(e??{})):e}function Tm(t,e){if(!t)return e;if(!e)return t;const n=rt(Object.create(null),t);for(const r in e)n[r]=at(t[r],e[r]);return n}function pf(){return{app:null,config:{isNativeTag:cg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Im=0;function wm(t,e){return function(r,i=null){ae(r)||(r=rt({},r)),i!=null&&!Ve(i)&&(i=null);const s=pf(),a=new WeakSet,l=[];let c=!1;const f=s.app={_uid:Im++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:s_,get config(){return s.config},set config(d){},use(d,...p){return a.has(d)||(d&&ae(d.install)?(a.add(d),d.install(f,...p)):ae(d)&&(a.add(d),d(f,...p))),f},mixin(d){return s.mixins.includes(d)||s.mixins.push(d),f},component(d,p){return p?(s.components[d]=p,f):s.components[d]},directive(d,p){return p?(s.directives[d]=p,f):s.directives[d]},mount(d,p,y){if(!c){const I=f._ceVNode||dt(r,i);return I.appContext=s,y===!0?y="svg":y===!1&&(y=void 0),t(I,d,y),c=!0,f._container=d,d.__vue_app__=f,al(I.component)}},onUnmount(d){l.push(d)},unmount(){c&&(Ht(l,f._instance,16),t(null,f._container),delete f._container.__vue_app__)},provide(d,p){return s.provides[d]=p,f},runWithContext(d){const p=vr;vr=f;try{return d()}finally{vr=p}}};return f}}let vr=null;function _s(t,e){if(ut){let n=ut.provides;const r=ut.parent&&ut.parent.provides;r===n&&(n=ut.provides=Object.create(r)),n[t]=e}}function jt(t,e,n=!1){const r=ut||Ut;if(r||vr){const i=vr?vr._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&ae(e)?e.call(r&&r.proxy):e}}const gf={},mf=()=>Object.create(gf),_f=t=>Object.getPrototypeOf(t)===gf;function Am(t,e,n,r=!1){const i={},s=mf();t.propsDefaults=Object.create(null),yf(t,e,i,s);for(const a in t.propsOptions[0])a in i||(i[a]=void 0);n?t.props=r?i:Qh(i):t.type.props?t.props=i:t.props=s,t.attrs=s}function bm(t,e,n,r){const{props:i,attrs:s,vnode:{patchFlag:a}}=t,l=Ee(i),[c]=t.propsOptions;let f=!1;if((r||a>0)&&!(a&16)){if(a&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let y=d[p];if(ho(t.emitsOptions,y))continue;const I=e[y];if(c)if(Te(s,y))I!==s[y]&&(s[y]=I,f=!0);else{const O=kn(y);i[O]=va(c,l,O,I,t,!1)}else I!==s[y]&&(s[y]=I,f=!0)}}}else{yf(t,e,i,s)&&(f=!0);let d;for(const p in l)(!e||!Te(e,p)&&((d=sr(p))===p||!Te(e,d)))&&(c?n&&(n[p]!==void 0||n[d]!==void 0)&&(i[p]=va(c,l,p,void 0,t,!0)):delete i[p]);if(s!==l)for(const p in s)(!e||!Te(e,p))&&(delete s[p],f=!0)}f&&Zt(t.attrs,"set","")}function yf(t,e,n,r){const[i,s]=t.propsOptions;let a=!1,l;if(e)for(let c in e){if(si(c))continue;const f=e[c];let d;i&&Te(i,d=kn(c))?!s||!s.includes(d)?n[d]=f:(l||(l={}))[d]=f:ho(t.emitsOptions,c)||(!(c in r)||f!==r[c])&&(r[c]=f,a=!0)}if(s){const c=Ee(n),f=l||be;for(let d=0;d<s.length;d++){const p=s[d];n[p]=va(i,c,p,f[p],t,!Te(f,p))}}return a}function va(t,e,n,r,i,s){const a=t[n];if(a!=null){const l=Te(a,"default");if(l&&r===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&ae(c)){const{propsDefaults:f}=i;if(n in f)r=f[n];else{const d=Mi(i);r=f[n]=c.call(null,e),d()}}else r=c;i.ce&&i.ce._setProp(n,r)}a[0]&&(s&&!l?r=!1:a[1]&&(r===""||r===sr(n))&&(r=!0))}return r}const Rm=new WeakMap;function vf(t,e,n=!1){const r=n?Rm:e.propsCache,i=r.get(t);if(i)return i;const s=t.props,a={},l=[];let c=!1;if(!ae(t)){const d=p=>{c=!0;const[y,I]=vf(p,e,!0);rt(a,y),I&&l.push(...I)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!s&&!c)return Ve(t)&&r.set(t,_r),_r;if(oe(s))for(let d=0;d<s.length;d++){const p=kn(s[d]);$c(p)&&(a[p]=be)}else if(s)for(const d in s){const p=kn(d);if($c(p)){const y=s[d],I=a[p]=oe(y)||ae(y)?{type:y}:rt({},y),O=I.type;let M=!1,F=!0;if(oe(O))for(let G=0;G<O.length;++G){const j=O[G],q=ae(j)&&j.name;if(q==="Boolean"){M=!0;break}else q==="String"&&(F=!1)}else M=ae(O)&&O.name==="Boolean";I[0]=M,I[1]=F,(M||Te(I,"default"))&&l.push(p)}}const f=[a,l];return Ve(t)&&r.set(t,f),f}function $c(t){return t[0]!=="$"&&!si(t)}const Ef=t=>t[0]==="_"||t==="$stable",il=t=>oe(t)?t.map(Ft):[Ft(t)],Sm=(t,e,n)=>{if(e._n)return e;const r=em((...i)=>il(e(...i)),n);return r._c=!1,r},Tf=(t,e,n)=>{const r=t._ctx;for(const i in t){if(Ef(i))continue;const s=t[i];if(ae(s))e[i]=Sm(i,s,r);else if(s!=null){const a=il(s);e[i]=()=>a}}},If=(t,e)=>{const n=il(e);t.slots.default=()=>n},wf=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},Pm=(t,e,n)=>{const r=t.slots=mf();if(t.vnode.shapeFlag&32){const i=e._;i?(wf(r,e,n),n&&Dh(r,"_",i,!0)):Tf(e,r)}else e&&If(t,e)},Cm=(t,e,n)=>{const{vnode:r,slots:i}=t;let s=!0,a=be;if(r.shapeFlag&32){const l=e._;l?n&&l===1?s=!1:wf(i,e,n):(s=!e.$stable,Tf(e,i)),a=e}else e&&(If(t,e),a={default:1});if(s)for(const l in i)!Ef(l)&&a[l]==null&&delete i[l]},_t=Hm;function Om(t){return km(t)}function km(t,e){const n=ao();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:a,createText:l,createComment:c,setText:f,setElementText:d,parentNode:p,nextSibling:y,setScopeId:I=Bt,insertStaticContent:O}=t,M=(_,v,R,D=null,V=null,N=null,K=void 0,$=null,B=!!v.dynamicChildren)=>{if(_===v)return;_&&!Zr(_,v)&&(D=k(_),Ce(_,V,N,!0),_=null),v.patchFlag===-2&&(B=!1,v.dynamicChildren=null);const{type:L,ref:ee,shapeFlag:Q}=v;switch(L){case fo:F(_,v,R,D);break;case Ii:G(_,v,R,D);break;case vs:_==null&&j(v,R,D,K);break;case Yt:S(_,v,R,D,V,N,K,$,B);break;default:Q&1?ce(_,v,R,D,V,N,K,$,B):Q&6?E(_,v,R,D,V,N,K,$,B):(Q&64||Q&128)&&L.process(_,v,R,D,V,N,K,$,B,X)}ee!=null&&V&&Ns(ee,_&&_.ref,N,v||_,!v)},F=(_,v,R,D)=>{if(_==null)r(v.el=l(v.children),R,D);else{const V=v.el=_.el;v.children!==_.children&&f(V,v.children)}},G=(_,v,R,D)=>{_==null?r(v.el=c(v.children||""),R,D):v.el=_.el},j=(_,v,R,D)=>{[_.el,_.anchor]=O(_.children,v,R,D,_.el,_.anchor)},q=({el:_,anchor:v},R,D)=>{let V;for(;_&&_!==v;)V=y(_),r(_,R,D),_=V;r(v,R,D)},z=({el:_,anchor:v})=>{let R;for(;_&&_!==v;)R=y(_),i(_),_=R;i(v)},ce=(_,v,R,D,V,N,K,$,B)=>{v.type==="svg"?K="svg":v.type==="math"&&(K="mathml"),_==null?ue(v,R,D,V,N,K,$,B):T(_,v,V,N,K,$,B)},ue=(_,v,R,D,V,N,K,$)=>{let B,L;const{props:ee,shapeFlag:Q,transition:Z,dirs:ne}=_;if(B=_.el=a(_.type,N,ee&&ee.is,ee),Q&8?d(B,_.children):Q&16&&m(_.children,B,null,D,V,Qo(_,N),K,$),ne&&jn(_,null,D,"created"),w(B,_,_.scopeId,K,D),ee){for(const se in ee)se!=="value"&&!si(se)&&s(B,se,null,ee[se],N,D);"value"in ee&&s(B,"value",null,ee.value,N),(L=ee.onVnodeBeforeMount)&&Mt(L,D,_)}ne&&jn(_,null,D,"beforeMount");const te=Dm(V,Z);te&&Z.beforeEnter(B),r(B,v,R),((L=ee&&ee.onVnodeMounted)||te||ne)&&_t(()=>{L&&Mt(L,D,_),te&&Z.enter(B),ne&&jn(_,null,D,"mounted")},V)},w=(_,v,R,D,V)=>{if(R&&I(_,R),D)for(let N=0;N<D.length;N++)I(_,D[N]);if(V){let N=V.subTree;if(v===N||Cf(N.type)&&(N.ssContent===v||N.ssFallback===v)){const K=V.vnode;w(_,K,K.scopeId,K.slotScopeIds,V.parent)}}},m=(_,v,R,D,V,N,K,$,B=0)=>{for(let L=B;L<_.length;L++){const ee=_[L]=$?En(_[L]):Ft(_[L]);M(null,ee,v,R,D,V,N,K,$)}},T=(_,v,R,D,V,N,K)=>{const $=v.el=_.el;let{patchFlag:B,dynamicChildren:L,dirs:ee}=v;B|=_.patchFlag&16;const Q=_.props||be,Z=v.props||be;let ne;if(R&&$n(R,!1),(ne=Z.onVnodeBeforeUpdate)&&Mt(ne,R,v,_),ee&&jn(v,_,R,"beforeUpdate"),R&&$n(R,!0),(Q.innerHTML&&Z.innerHTML==null||Q.textContent&&Z.textContent==null)&&d($,""),L?A(_.dynamicChildren,L,$,R,D,Qo(v,V),N):K||he(_,v,$,null,R,D,Qo(v,V),N,!1),B>0){if(B&16)b($,Q,Z,R,V);else if(B&2&&Q.class!==Z.class&&s($,"class",null,Z.class,V),B&4&&s($,"style",Q.style,Z.style,V),B&8){const te=v.dynamicProps;for(let se=0;se<te.length;se++){const ge=te[se],We=Q[ge],je=Z[ge];(je!==We||ge==="value")&&s($,ge,We,je,V,R)}}B&1&&_.children!==v.children&&d($,v.children)}else!K&&L==null&&b($,Q,Z,R,V);((ne=Z.onVnodeUpdated)||ee)&&_t(()=>{ne&&Mt(ne,R,v,_),ee&&jn(v,_,R,"updated")},D)},A=(_,v,R,D,V,N,K)=>{for(let $=0;$<v.length;$++){const B=_[$],L=v[$],ee=B.el&&(B.type===Yt||!Zr(B,L)||B.shapeFlag&70)?p(B.el):R;M(B,L,ee,null,D,V,N,K,!0)}},b=(_,v,R,D,V)=>{if(v!==R){if(v!==be)for(const N in v)!si(N)&&!(N in R)&&s(_,N,v[N],null,V,D);for(const N in R){if(si(N))continue;const K=R[N],$=v[N];K!==$&&N!=="value"&&s(_,N,$,K,V,D)}"value"in R&&s(_,"value",v.value,R.value,V)}},S=(_,v,R,D,V,N,K,$,B)=>{const L=v.el=_?_.el:l(""),ee=v.anchor=_?_.anchor:l("");let{patchFlag:Q,dynamicChildren:Z,slotScopeIds:ne}=v;ne&&($=$?$.concat(ne):ne),_==null?(r(L,R,D),r(ee,R,D),m(v.children||[],R,ee,V,N,K,$,B)):Q>0&&Q&64&&Z&&_.dynamicChildren?(A(_.dynamicChildren,Z,R,V,N,K,$),(v.key!=null||V&&v===V.subTree)&&Af(_,v,!0)):he(_,v,R,ee,V,N,K,$,B)},E=(_,v,R,D,V,N,K,$,B)=>{v.slotScopeIds=$,_==null?v.shapeFlag&512?V.ctx.activate(v,R,D,K,B):st(v,R,D,V,N,K,B):Et(_,v,B)},st=(_,v,R,D,V,N,K)=>{const $=_.component=Zm(_,D,V);if(cf(_)&&($.ctx.renderer=X),e_($,!1,K),$.asyncDep){if(V&&V.registerDep($,xe,K),!_.el){const B=$.subTree=dt(Ii);G(null,B,v,R)}}else xe($,_,v,R,V,N,K)},Et=(_,v,R)=>{const D=v.component=_.component;if(jm(_,v,R))if(D.asyncDep&&!D.asyncResolved){pe(D,v,R);return}else D.next=v,D.update();else v.el=_.el,D.vnode=v},xe=(_,v,R,D,V,N,K)=>{const $=()=>{if(_.isMounted){let{next:Q,bu:Z,u:ne,parent:te,vnode:se}=_;{const Qe=bf(_);if(Qe){Q&&(Q.el=se.el,pe(_,Q,K)),Qe.asyncDep.then(()=>{_.isUnmounted||$()});return}}let ge=Q,We;$n(_,!1),Q?(Q.el=se.el,pe(_,Q,K)):Q=se,Z&&qo(Z),(We=Q.props&&Q.props.onVnodeBeforeUpdate)&&Mt(We,te,Q,se),$n(_,!0);const je=qc(_),It=_.subTree;_.subTree=je,M(It,je,p(It.el),k(It),_,V,N),Q.el=je.el,ge===null&&$m(_,je.el),ne&&_t(ne,V),(We=Q.props&&Q.props.onVnodeUpdated)&&_t(()=>Mt(We,te,Q,se),V)}else{let Q;const{el:Z,props:ne}=v,{bm:te,m:se,parent:ge,root:We,type:je}=_,It=ci(v);$n(_,!1),te&&qo(te),!It&&(Q=ne&&ne.onVnodeBeforeMount)&&Mt(Q,ge,v),$n(_,!0);{We.ce&&We.ce._injectChildStyle(je);const Qe=_.subTree=qc(_);M(null,Qe,R,D,_,V,N),v.el=Qe.el}if(se&&_t(se,V),!It&&(Q=ne&&ne.onVnodeMounted)){const Qe=v;_t(()=>Mt(Q,ge,Qe),V)}(v.shapeFlag&256||ge&&ci(ge.vnode)&&ge.vnode.shapeFlag&256)&&_.a&&_t(_.a,V),_.isMounted=!0,v=R=D=null}};_.scope.on();const B=_.effect=new xh($);_.scope.off();const L=_.update=B.run.bind(B),ee=_.job=B.runIfDirty.bind(B);ee.i=_,ee.id=_.uid,B.scheduler=()=>nl(ee),$n(_,!0),L()},pe=(_,v,R)=>{v.component=_;const D=_.vnode.props;_.vnode=v,_.next=null,bm(_,v.props,D,R),Cm(_,v.children,R),xn(),Lc(_),Mn()},he=(_,v,R,D,V,N,K,$,B=!1)=>{const L=_&&_.children,ee=_?_.shapeFlag:0,Q=v.children,{patchFlag:Z,shapeFlag:ne}=v;if(Z>0){if(Z&128){At(L,Q,R,D,V,N,K,$,B);return}else if(Z&256){gt(L,Q,R,D,V,N,K,$,B);return}}ne&8?(ee&16&&ht(L,V,N),Q!==L&&d(R,Q)):ee&16?ne&16?At(L,Q,R,D,V,N,K,$,B):ht(L,V,N,!0):(ee&8&&d(R,""),ne&16&&m(Q,R,D,V,N,K,$,B))},gt=(_,v,R,D,V,N,K,$,B)=>{_=_||_r,v=v||_r;const L=_.length,ee=v.length,Q=Math.min(L,ee);let Z;for(Z=0;Z<Q;Z++){const ne=v[Z]=B?En(v[Z]):Ft(v[Z]);M(_[Z],ne,R,null,V,N,K,$,B)}L>ee?ht(_,V,N,!0,!1,Q):m(v,R,D,V,N,K,$,B,Q)},At=(_,v,R,D,V,N,K,$,B)=>{let L=0;const ee=v.length;let Q=_.length-1,Z=ee-1;for(;L<=Q&&L<=Z;){const ne=_[L],te=v[L]=B?En(v[L]):Ft(v[L]);if(Zr(ne,te))M(ne,te,R,null,V,N,K,$,B);else break;L++}for(;L<=Q&&L<=Z;){const ne=_[Q],te=v[Z]=B?En(v[Z]):Ft(v[Z]);if(Zr(ne,te))M(ne,te,R,null,V,N,K,$,B);else break;Q--,Z--}if(L>Q){if(L<=Z){const ne=Z+1,te=ne<ee?v[ne].el:D;for(;L<=Z;)M(null,v[L]=B?En(v[L]):Ft(v[L]),R,te,V,N,K,$,B),L++}}else if(L>Z)for(;L<=Q;)Ce(_[L],V,N,!0),L++;else{const ne=L,te=L,se=new Map;for(L=te;L<=Z;L++){const $e=v[L]=B?En(v[L]):Ft(v[L]);$e.key!=null&&se.set($e.key,L)}let ge,We=0;const je=Z-te+1;let It=!1,Qe=0;const dn=new Array(je);for(L=0;L<je;L++)dn[L]=0;for(L=ne;L<=Q;L++){const $e=_[L];if(We>=je){Ce($e,V,N,!0);continue}let wt;if($e.key!=null)wt=se.get($e.key);else for(ge=te;ge<=Z;ge++)if(dn[ge-te]===0&&Zr($e,v[ge])){wt=ge;break}wt===void 0?Ce($e,V,N,!0):(dn[wt-te]=L+1,wt>=Qe?Qe=wt:It=!0,M($e,v[wt],R,null,V,N,K,$,B),We++)}const Ur=It?Nm(dn):_r;for(ge=Ur.length-1,L=je-1;L>=0;L--){const $e=te+L,wt=v[$e],Gi=$e+1<ee?v[$e+1].el:D;dn[L]===0?M(null,wt,R,Gi,V,N,K,$,B):It&&(ge<0||L!==Ur[ge]?Tt(wt,R,Gi,2):ge--)}}},Tt=(_,v,R,D,V=null)=>{const{el:N,type:K,transition:$,children:B,shapeFlag:L}=_;if(L&6){Tt(_.component.subTree,v,R,D);return}if(L&128){_.suspense.move(v,R,D);return}if(L&64){K.move(_,v,R,X);return}if(K===Yt){r(N,v,R);for(let Q=0;Q<B.length;Q++)Tt(B[Q],v,R,D);r(_.anchor,v,R);return}if(K===vs){q(_,v,R);return}if(D!==2&&L&1&&$)if(D===0)$.beforeEnter(N),r(N,v,R),_t(()=>$.enter(N),V);else{const{leave:Q,delayLeave:Z,afterLeave:ne}=$,te=()=>r(N,v,R),se=()=>{Q(N,()=>{te(),ne&&ne()})};Z?Z(N,te,se):se()}else r(N,v,R)},Ce=(_,v,R,D=!1,V=!1)=>{const{type:N,props:K,ref:$,children:B,dynamicChildren:L,shapeFlag:ee,patchFlag:Q,dirs:Z,cacheIndex:ne}=_;if(Q===-2&&(V=!1),$!=null&&Ns($,null,R,_,!0),ne!=null&&(v.renderCache[ne]=void 0),ee&256){v.ctx.deactivate(_);return}const te=ee&1&&Z,se=!ci(_);let ge;if(se&&(ge=K&&K.onVnodeBeforeUnmount)&&Mt(ge,v,_),ee&6)xt(_.component,R,D);else{if(ee&128){_.suspense.unmount(R,D);return}te&&jn(_,null,v,"beforeUnmount"),ee&64?_.type.remove(_,v,R,X,D):L&&!L.hasOnce&&(N!==Yt||Q>0&&Q&64)?ht(L,v,R,!1,!0):(N===Yt&&Q&384||!V&&ee&16)&&ht(B,v,R),D&&Oe(_)}(se&&(ge=K&&K.onVnodeUnmounted)||te)&&_t(()=>{ge&&Mt(ge,v,_),te&&jn(_,null,v,"unmounted")},R)},Oe=_=>{const{type:v,el:R,anchor:D,transition:V}=_;if(v===Yt){fn(R,D);return}if(v===vs){z(_);return}const N=()=>{i(R),V&&!V.persisted&&V.afterLeave&&V.afterLeave()};if(_.shapeFlag&1&&V&&!V.persisted){const{leave:K,delayLeave:$}=V,B=()=>K(R,N);$?$(_.el,N,B):B()}else N()},fn=(_,v)=>{let R;for(;_!==v;)R=y(_),i(_),_=R;i(v)},xt=(_,v,R)=>{const{bum:D,scope:V,job:N,subTree:K,um:$,m:B,a:L}=_;Hc(B),Hc(L),D&&qo(D),V.stop(),N&&(N.flags|=8,Ce(K,_,v,R)),$&&_t($,v),_t(()=>{_.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},ht=(_,v,R,D=!1,V=!1,N=0)=>{for(let K=N;K<_.length;K++)Ce(_[K],v,R,D,V)},k=_=>{if(_.shapeFlag&6)return k(_.component.subTree);if(_.shapeFlag&128)return _.suspense.next();const v=y(_.anchor||_.el),R=v&&v[tm];return R?y(R):v};let J=!1;const W=(_,v,R)=>{_==null?v._vnode&&Ce(v._vnode,null,null,!0):M(v._vnode||null,_,v,null,null,null,R),v._vnode=_,J||(J=!0,Lc(),sf(),J=!1)},X={p:M,um:Ce,m:Tt,r:Oe,mt:st,mc:m,pc:he,pbc:A,n:k,o:t};return{render:W,hydrate:void 0,createApp:wm(W)}}function Qo({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function $n({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Dm(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Af(t,e,n=!1){const r=t.children,i=e.children;if(oe(r)&&oe(i))for(let s=0;s<r.length;s++){const a=r[s];let l=i[s];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[s]=En(i[s]),l.el=a.el),!n&&l.patchFlag!==-2&&Af(a,l)),l.type===fo&&(l.el=a.el)}}function Nm(t){const e=t.slice(),n=[0];let r,i,s,a,l;const c=t.length;for(r=0;r<c;r++){const f=t[r];if(f!==0){if(i=n[n.length-1],t[i]<f){e[r]=i,n.push(r);continue}for(s=0,a=n.length-1;s<a;)l=s+a>>1,t[n[l]]<f?s=l+1:a=l;f<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}for(s=n.length,a=n[s-1];s-- >0;)n[s]=a,a=e[a];return n}function bf(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:bf(e)}function Hc(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Vm=Symbol.for("v-scx"),xm=()=>jt(Vm);function ys(t,e,n){return Rf(t,e,n)}function Rf(t,e,n=be){const{immediate:r,deep:i,flush:s,once:a}=n,l=rt({},n),c=e&&r||!e&&s!=="post";let f;if(Ai){if(s==="sync"){const I=xm();f=I.__watcherHandles||(I.__watcherHandles=[])}else if(!c){const I=()=>{};return I.stop=Bt,I.resume=Bt,I.pause=Bt,I}}const d=ut;l.call=(I,O,M)=>Ht(I,d,O,M);let p=!1;s==="post"?l.scheduler=I=>{_t(I,d&&d.suspense)}:s!=="sync"&&(p=!0,l.scheduler=(I,O)=>{O?I():nl(I)}),l.augmentJob=I=>{e&&(I.flags|=4),p&&(I.flags|=2,d&&(I.id=d.uid,I.i=d))};const y=Jg(t,e,l);return Ai&&(f?f.push(y):c&&y()),y}function Mm(t,e,n){const r=this.proxy,i=Be(t)?t.includes(".")?Sf(r,t):()=>r[t]:t.bind(r,r);let s;ae(e)?s=e:(s=e.handler,n=e);const a=Mi(this),l=Rf(i,s.bind(r),n);return a(),l}function Sf(t,e){const n=e.split(".");return()=>{let r=t;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}const Lm=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${kn(e)}Modifiers`]||t[`${sr(e)}Modifiers`];function Fm(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||be;let i=n;const s=e.startsWith("update:"),a=s&&Lm(r,e.slice(7));a&&(a.trim&&(i=n.map(d=>Be(d)?d.trim():d)),a.number&&(i=n.map(_g)));let l,c=r[l=Ho(e)]||r[l=Ho(kn(e))];!c&&s&&(c=r[l=Ho(sr(e))]),c&&Ht(c,t,6,i);const f=r[l+"Once"];if(f){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Ht(f,t,6,i)}}function Pf(t,e,n=!1){const r=e.emitsCache,i=r.get(t);if(i!==void 0)return i;const s=t.emits;let a={},l=!1;if(!ae(t)){const c=f=>{const d=Pf(f,e,!0);d&&(l=!0,rt(a,d))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!s&&!l?(Ve(t)&&r.set(t,null),null):(oe(s)?s.forEach(c=>a[c]=null):rt(a,s),Ve(t)&&r.set(t,a),a)}function ho(t,e){return!t||!io(e)?!1:(e=e.slice(2).replace(/Once$/,""),Te(t,e[0].toLowerCase()+e.slice(1))||Te(t,sr(e))||Te(t,e))}function qc(t){const{type:e,vnode:n,proxy:r,withProxy:i,propsOptions:[s],slots:a,attrs:l,emit:c,render:f,renderCache:d,props:p,data:y,setupState:I,ctx:O,inheritAttrs:M}=t,F=Ds(t);let G,j;try{if(n.shapeFlag&4){const z=i||r,ce=z;G=Ft(f.call(ce,z,d,p,I,y,O)),j=l}else{const z=e;G=Ft(z.length>1?z(p,{attrs:l,slots:a,emit:c}):z(p,null)),j=e.props?l:Um(l)}}catch(z){hi.length=0,co(z,t,1),G=dt(Ii)}let q=G;if(j&&M!==!1){const z=Object.keys(j),{shapeFlag:ce}=q;z.length&&ce&7&&(s&&z.some(Ha)&&(j=Bm(j,s)),q=Ar(q,j,!1,!0))}return n.dirs&&(q=Ar(q,null,!1,!0),q.dirs=q.dirs?q.dirs.concat(n.dirs):n.dirs),n.transition&&rl(q,n.transition),G=q,Ds(F),G}const Um=t=>{let e;for(const n in t)(n==="class"||n==="style"||io(n))&&((e||(e={}))[n]=t[n]);return e},Bm=(t,e)=>{const n={};for(const r in t)(!Ha(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function jm(t,e,n){const{props:r,children:i,component:s}=t,{props:a,children:l,patchFlag:c}=e,f=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?zc(r,a,f):!!a;if(c&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const y=d[p];if(a[y]!==r[y]&&!ho(f,y))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:r===a?!1:r?a?zc(r,a,f):!0:!!a;return!1}function zc(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!ho(n,s))return!0}return!1}function $m({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Cf=t=>t.__isSuspense;function Hm(t,e){e&&e.pendingBranch?oe(t)?e.effects.push(...t):e.effects.push(t):Zg(t)}const Yt=Symbol.for("v-fgt"),fo=Symbol.for("v-txt"),Ii=Symbol.for("v-cmt"),vs=Symbol.for("v-stc"),hi=[];let vt=null;function sl(t=!1){hi.push(vt=t?null:[])}function qm(){hi.pop(),vt=hi[hi.length-1]||null}let wi=1;function Gc(t,e=!1){wi+=t,t<0&&vt&&e&&(vt.hasOnce=!0)}function Of(t){return t.dynamicChildren=wi>0?vt||_r:null,qm(),wi>0&&vt&&vt.push(t),t}function kf(t,e,n,r,i,s){return Of(Ms(t,e,n,r,i,s,!0))}function zm(t,e,n,r,i){return Of(dt(t,e,n,r,i,!0))}function xs(t){return t?t.__v_isVNode===!0:!1}function Zr(t,e){return t.type===e.type&&t.key===e.key}const Df=({key:t})=>t??null,Es=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Be(t)||nt(t)||ae(t)?{i:Ut,r:t,k:e,f:!!n}:t:null);function Ms(t,e=null,n=null,r=0,i=null,s=t===Yt?0:1,a=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Df(e),ref:e&&Es(e),scopeId:af,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Ut};return l?(ol(c,n),s&128&&t.normalize(c)):n&&(c.shapeFlag|=Be(n)?8:16),wi>0&&!a&&vt&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&vt.push(c),c}const dt=Gm;function Gm(t,e=null,n=null,r=0,i=null,s=!1){if((!t||t===gm)&&(t=Ii),xs(t)){const l=Ar(t,e,!0);return n&&ol(l,n),wi>0&&!s&&vt&&(l.shapeFlag&6?vt[vt.indexOf(t)]=l:vt.push(l)),l.patchFlag=-2,l}if(i_(t)&&(t=t.__vccOpts),e){e=Km(e);let{class:l,style:c}=e;l&&!Be(l)&&(e.class=Ka(l)),Ve(c)&&(tl(c)&&!oe(c)&&(c=rt({},c)),e.style=Ga(c))}const a=Be(t)?1:Cf(t)?128:nm(t)?64:Ve(t)?4:ae(t)?2:0;return Ms(t,e,n,r,i,a,s,!0)}function Km(t){return t?tl(t)||_f(t)?rt({},t):t:null}function Ar(t,e,n=!1,r=!1){const{props:i,ref:s,patchFlag:a,children:l,transition:c}=t,f=e?Jm(i||{},e):i,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:f,key:f&&Df(f),ref:e&&e.ref?n&&s?oe(s)?s.concat(Es(e)):[s,Es(e)]:Es(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Yt?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ar(t.ssContent),ssFallback:t.ssFallback&&Ar(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&rl(d,c.clone(d)),d}function Wm(t=" ",e=0){return dt(fo,null,t,e)}function Qm(t,e){const n=dt(vs,null,t);return n.staticCount=e,n}function Ft(t){return t==null||typeof t=="boolean"?dt(Ii):oe(t)?dt(Yt,null,t.slice()):xs(t)?En(t):dt(fo,null,String(t))}function En(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ar(t)}function ol(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(oe(e))n=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),ol(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!_f(e)?e._ctx=Ut:i===3&&Ut&&(Ut.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ae(e)?(e={default:e,_ctx:Ut},n=32):(e=String(e),r&64?(n=16,e=[Wm(e)]):n=8);t.children=e,t.shapeFlag|=n}function Jm(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=Ka([e.class,r.class]));else if(i==="style")e.style=Ga([e.style,r.style]);else if(io(i)){const s=e[i],a=r[i];a&&s!==a&&!(oe(s)&&s.includes(a))&&(e[i]=s?[].concat(s,a):a)}else i!==""&&(e[i]=r[i])}return e}function Mt(t,e,n,r=null){Ht(t,e,7,[n,r])}const Xm=pf();let Ym=0;function Zm(t,e,n){const r=t.type,i=(e?e.appContext:t.appContext)||Xm,s={uid:Ym++,vnode:t,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Vh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:vf(r,i),emitsOptions:Pf(r,i),emit:null,emitted:null,propsDefaults:be,inheritAttrs:r.inheritAttrs,ctx:be,data:be,props:be,attrs:be,slots:be,refs:be,setupState:be,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Fm.bind(null,s),t.ce&&t.ce(s),s}let ut=null,Ls,Ea;{const t=ao(),e=(n,r)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(r),s=>{i.length>1?i.forEach(a=>a(s)):i[0](s)}};Ls=e("__VUE_INSTANCE_SETTERS__",n=>ut=n),Ea=e("__VUE_SSR_SETTERS__",n=>Ai=n)}const Mi=t=>{const e=ut;return Ls(t),t.scope.on(),()=>{t.scope.off(),Ls(e)}},Kc=()=>{ut&&ut.scope.off(),Ls(null)};function Nf(t){return t.vnode.shapeFlag&4}let Ai=!1;function e_(t,e=!1,n=!1){e&&Ea(e);const{props:r,children:i}=t.vnode,s=Nf(t);Am(t,r,s,e),Pm(t,i,n);const a=s?t_(t,e):void 0;return e&&Ea(!1),a}function t_(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,mm);const{setup:r}=n;if(r){xn();const i=t.setupContext=r.length>1?r_(t):null,s=Mi(t),a=Vi(r,t,0,[t.props,i]),l=Oh(a);if(Mn(),s(),(l||t.sp)&&!ci(t)&&lf(t),l){if(a.then(Kc,Kc),e)return a.then(c=>{Wc(t,c)}).catch(c=>{co(c,t,0)});t.asyncDep=a}else Wc(t,a)}else Vf(t)}function Wc(t,e,n){ae(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ve(e)&&(t.setupState=ef(e)),Vf(t)}function Vf(t,e,n){const r=t.type;t.render||(t.render=r.render||Bt);{const i=Mi(t);xn();try{_m(t)}finally{Mn(),i()}}}const n_={get(t,e){return et(t,"get",""),t[e]}};function r_(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,n_),slots:t.slots,emit:t.emit,expose:e}}function al(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(ef(Xh(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ui)return ui[n](t)},has(e,n){return n in e||n in ui}})):t.proxy}function i_(t){return ae(t)&&"__vccOpts"in t}const St=(t,e)=>Wg(t,e,Ai);function xf(t,e,n){const r=arguments.length;return r===2?Ve(e)&&!oe(e)?xs(e)?dt(t,null,[e]):dt(t,e):dt(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&xs(n)&&(n=[n]),dt(t,e,n))}const s_="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ta;const Qc=typeof window<"u"&&window.trustedTypes;if(Qc)try{Ta=Qc.createPolicy("vue",{createHTML:t=>t})}catch{}const Mf=Ta?t=>Ta.createHTML(t):t=>t,o_="http://www.w3.org/2000/svg",a_="http://www.w3.org/1998/Math/MathML",Xt=typeof document<"u"?document:null,Jc=Xt&&Xt.createElement("template"),l_={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e==="svg"?Xt.createElementNS(o_,t):e==="mathml"?Xt.createElementNS(a_,t):n?Xt.createElement(t,{is:n}):Xt.createElement(t);return t==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:t=>Xt.createTextNode(t),createComment:t=>Xt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Xt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,i,s){const a=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{Jc.innerHTML=Mf(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=Jc.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},c_=Symbol("_vtc");function u_(t,e,n){const r=t[c_];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Xc=Symbol("_vod"),h_=Symbol("_vsh"),f_=Symbol(""),d_=/(^|;)\s*display\s*:/;function p_(t,e,n){const r=t.style,i=Be(n);let s=!1;if(n&&!i){if(e)if(Be(e))for(const a of e.split(";")){const l=a.slice(0,a.indexOf(":")).trim();n[l]==null&&Ts(r,l,"")}else for(const a in e)n[a]==null&&Ts(r,a,"");for(const a in n)a==="display"&&(s=!0),Ts(r,a,n[a])}else if(i){if(e!==n){const a=r[f_];a&&(n+=";"+a),r.cssText=n,s=d_.test(n)}}else e&&t.removeAttribute("style");Xc in t&&(t[Xc]=s?r.display:"",t[h_]&&(r.display="none"))}const Yc=/\s*!important$/;function Ts(t,e,n){if(oe(n))n.forEach(r=>Ts(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=g_(t,e);Yc.test(n)?t.setProperty(sr(r),n.replace(Yc,""),"important"):t[r]=n}}const Zc=["Webkit","Moz","ms"],Jo={};function g_(t,e){const n=Jo[e];if(n)return n;let r=kn(e);if(r!=="filter"&&r in t)return Jo[e]=r;r=kh(r);for(let i=0;i<Zc.length;i++){const s=Zc[i]+r;if(s in t)return Jo[e]=s}return e}const eu="http://www.w3.org/1999/xlink";function tu(t,e,n,r,i,s=wg(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(eu,e.slice(6,e.length)):t.setAttributeNS(eu,e,n):n==null||s&&!Nh(n)?t.removeAttribute(e):t.setAttribute(e,s?"":Vr(n)?String(n):n)}function nu(t,e,n,r,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Mf(n):n);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const l=s==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Nh(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(i||e)}function m_(t,e,n,r){t.addEventListener(e,n,r)}function __(t,e,n,r){t.removeEventListener(e,n,r)}const ru=Symbol("_vei");function y_(t,e,n,r,i=null){const s=t[ru]||(t[ru]={}),a=s[e];if(r&&a)a.value=r;else{const[l,c]=v_(e);if(r){const f=s[e]=I_(r,i);m_(t,l,f,c)}else a&&(__(t,l,a,c),s[e]=void 0)}}const iu=/(?:Once|Passive|Capture)$/;function v_(t){let e;if(iu.test(t)){e={};let r;for(;r=t.match(iu);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):sr(t.slice(2)),e]}let Xo=0;const E_=Promise.resolve(),T_=()=>Xo||(E_.then(()=>Xo=0),Xo=Date.now());function I_(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ht(w_(r,n.value),e,5,[r])};return n.value=t,n.attached=T_(),n}function w_(t,e){if(oe(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const su=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,A_=(t,e,n,r,i,s)=>{const a=i==="svg";e==="class"?u_(t,r,a):e==="style"?p_(t,n,r):io(e)?Ha(e)||y_(t,e,n,r,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):b_(t,e,r,a))?(nu(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&tu(t,e,r,a,s,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Be(r))?nu(t,kn(e),r,s,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),tu(t,e,r,a))};function b_(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&su(e)&&ae(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return su(e)&&Be(n)?!1:e in t}const R_=rt({patchProp:A_},l_);let ou;function S_(){return ou||(ou=Om(R_))}const P_=(...t)=>{const e=S_().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=O_(r);if(!i)return;const s=e._component;!ae(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const a=n(i,!1,C_(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),a},e};function C_(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function O_(t){return Be(t)?document.querySelector(t):t}var k_=!1;/*!
 * pinia v2.3.0
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */const D_=Symbol();var au;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(au||(au={}));function N_(){const t=Ag(!0),e=t.run(()=>Yh({}));let n=[],r=[];const i=Xh({install(s){i._a=s,s.provide(D_,i),s.config.globalProperties.$pinia=i,r.forEach(a=>n.push(a)),r=[]},use(s){return!this._a&&!k_?r.push(s):n.push(s),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}var lu={};/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Lf=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},V_=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],a=t[n++],l=t[n++],c=((i&7)<<18|(s&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],a=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},Ff={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],a=i+1<t.length,l=a?t[i+1]:0,c=i+2<t.length,f=c?t[i+2]:0,d=s>>2,p=(s&3)<<4|l>>4;let y=(l&15)<<2|f>>6,I=f&63;c||(I=64,a||(y=64)),r.push(n[d],n[p],n[y],n[I])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Lf(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):V_(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const f=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||f==null||p==null)throw new x_;const y=s<<2|l>>4;if(r.push(y),f!==64){const I=l<<4&240|f>>2;if(r.push(I),p!==64){const O=f<<6&192|p;r.push(O)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class x_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const M_=function(t){const e=Lf(t);return Ff.encodeByteArray(e,!0)},Fs=function(t){return M_(t).replace(/\./g,"")},Uf=function(t){try{return Ff.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
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
 */function L_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
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
 */const F_=()=>L_().__FIREBASE_DEFAULTS__,U_=()=>{if(typeof process>"u"||typeof lu>"u")return;const t=lu.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},B_=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Uf(t[1]);return e&&JSON.parse(e)},po=()=>{try{return F_()||U_()||B_()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Bf=t=>{var e,n;return(n=(e=po())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},j_=t=>{const e=Bf(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},jf=()=>{var t;return(t=po())===null||t===void 0?void 0:t.config},$f=t=>{var e;return(e=po())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
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
 */class $_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
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
 */function H_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Fs(JSON.stringify(n)),Fs(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function it(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function q_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(it())}function z_(){var t;const e=(t=po())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function G_(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function K_(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function W_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Q_(){const t=it();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function J_(){return!z_()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function X_(){try{return typeof indexedDB=="object"}catch{return!1}}function Y_(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Z_="FirebaseError";class hn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Z_,Object.setPrototypeOf(this,hn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Li.prototype.create)}}class Li{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?ey(s,r):"Error",l=`${this.serviceName}: ${a} (${i}).`;return new hn(i,l,r)}}function ey(t,e){return t.replace(ty,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const ty=/\{\$([^}]+)}/g;function ny(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Us(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],a=e[i];if(cu(s)&&cu(a)){if(!Us(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function cu(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function Fi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ry(t,e){const n=new iy(t,e);return n.subscribe.bind(n)}class iy{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");sy(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Yo),i.error===void 0&&(i.error=Yo),i.complete===void 0&&(i.complete=Yo);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function sy(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Yo(){}/**
 * @license
 * Copyright 2021 Google LLC
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
 */function Nt(t){return t&&t._delegate?t._delegate:t}class Zn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */const qn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
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
 */class oy{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new $_;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ly(e))try{this.getOrInitializeService({instanceIdentifier:qn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=qn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=qn){return this.instances.has(e)}getOptions(e=qn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&a.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ay(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=qn){return this.component?this.component.multipleInstances?e:qn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ay(t){return t===qn?void 0:t}function ly(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class cy{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new oy(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */var fe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(fe||(fe={}));const uy={debug:fe.DEBUG,verbose:fe.VERBOSE,info:fe.INFO,warn:fe.WARN,error:fe.ERROR,silent:fe.SILENT},hy=fe.INFO,fy={[fe.DEBUG]:"log",[fe.VERBOSE]:"log",[fe.INFO]:"info",[fe.WARN]:"warn",[fe.ERROR]:"error"},dy=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=fy[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ll{constructor(e){this.name=e,this._logLevel=hy,this._logHandler=dy,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in fe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?uy[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,fe.DEBUG,...e),this._logHandler(this,fe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,fe.VERBOSE,...e),this._logHandler(this,fe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,fe.INFO,...e),this._logHandler(this,fe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,fe.WARN,...e),this._logHandler(this,fe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,fe.ERROR,...e),this._logHandler(this,fe.ERROR,...e)}}const py=(t,e)=>e.some(n=>t instanceof n);let uu,hu;function gy(){return uu||(uu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function my(){return hu||(hu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Hf=new WeakMap,Ia=new WeakMap,qf=new WeakMap,Zo=new WeakMap,cl=new WeakMap;function _y(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",a)},s=()=>{n(Sn(t.result)),i()},a=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&Hf.set(n,t)}).catch(()=>{}),cl.set(e,t),e}function yy(t){if(Ia.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",a),t.removeEventListener("abort",a)},s=()=>{n(),i()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",a),t.addEventListener("abort",a)});Ia.set(t,e)}let wa={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ia.get(t);if(e==="objectStoreNames")return t.objectStoreNames||qf.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Sn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function vy(t){wa=t(wa)}function Ey(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ea(this),e,...n);return qf.set(r,e.sort?e.sort():[e]),Sn(r)}:my().includes(t)?function(...e){return t.apply(ea(this),e),Sn(Hf.get(this))}:function(...e){return Sn(t.apply(ea(this),e))}}function Ty(t){return typeof t=="function"?Ey(t):(t instanceof IDBTransaction&&yy(t),py(t,gy())?new Proxy(t,wa):t)}function Sn(t){if(t instanceof IDBRequest)return _y(t);if(Zo.has(t))return Zo.get(t);const e=Ty(t);return e!==t&&(Zo.set(t,e),cl.set(e,t)),e}const ea=t=>cl.get(t);function Iy(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(t,e),l=Sn(a);return r&&a.addEventListener("upgradeneeded",c=>{r(Sn(a.result),c.oldVersion,c.newVersion,Sn(a.transaction),c)}),n&&a.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",f=>i(f.oldVersion,f.newVersion,f))}).catch(()=>{}),l}const wy=["get","getKey","getAll","getAllKeys","count"],Ay=["put","add","delete","clear"],ta=new Map;function fu(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ta.get(e))return ta.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Ay.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||wy.includes(n)))return;const s=async function(a,...l){const c=this.transaction(a,i?"readwrite":"readonly");let f=c.store;return r&&(f=f.index(l.shift())),(await Promise.all([f[n](...l),i&&c.done]))[0]};return ta.set(e,s),s}vy(t=>({...t,get:(e,n,r)=>fu(e,n)||t.get(e,n,r),has:(e,n)=>!!fu(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
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
 */class by{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ry(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Ry(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Aa="@firebase/app",du="0.10.17";/**
 * @license
 * Copyright 2019 Google LLC
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
 */const ln=new ll("@firebase/app"),Sy="@firebase/app-compat",Py="@firebase/analytics-compat",Cy="@firebase/analytics",Oy="@firebase/app-check-compat",ky="@firebase/app-check",Dy="@firebase/auth",Ny="@firebase/auth-compat",Vy="@firebase/database",xy="@firebase/data-connect",My="@firebase/database-compat",Ly="@firebase/functions",Fy="@firebase/functions-compat",Uy="@firebase/installations",By="@firebase/installations-compat",jy="@firebase/messaging",$y="@firebase/messaging-compat",Hy="@firebase/performance",qy="@firebase/performance-compat",zy="@firebase/remote-config",Gy="@firebase/remote-config-compat",Ky="@firebase/storage",Wy="@firebase/storage-compat",Qy="@firebase/firestore",Jy="@firebase/vertexai",Xy="@firebase/firestore-compat",Yy="firebase",Zy="11.1.0";/**
 * @license
 * Copyright 2019 Google LLC
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
 */const ba="[DEFAULT]",ev={[Aa]:"fire-core",[Sy]:"fire-core-compat",[Cy]:"fire-analytics",[Py]:"fire-analytics-compat",[ky]:"fire-app-check",[Oy]:"fire-app-check-compat",[Dy]:"fire-auth",[Ny]:"fire-auth-compat",[Vy]:"fire-rtdb",[xy]:"fire-data-connect",[My]:"fire-rtdb-compat",[Ly]:"fire-fn",[Fy]:"fire-fn-compat",[Uy]:"fire-iid",[By]:"fire-iid-compat",[jy]:"fire-fcm",[$y]:"fire-fcm-compat",[Hy]:"fire-perf",[qy]:"fire-perf-compat",[zy]:"fire-rc",[Gy]:"fire-rc-compat",[Ky]:"fire-gcs",[Wy]:"fire-gcs-compat",[Qy]:"fire-fst",[Xy]:"fire-fst-compat",[Jy]:"fire-vertex","fire-js":"fire-js",[Yy]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
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
 */const Bs=new Map,tv=new Map,Ra=new Map;function pu(t,e){try{t.container.addComponent(e)}catch(n){ln.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function br(t){const e=t.name;if(Ra.has(e))return ln.debug(`There were multiple attempts to register component ${e}.`),!1;Ra.set(e,t);for(const n of Bs.values())pu(n,t);for(const n of tv.values())pu(n,t);return!0}function ul(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function tn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
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
 */const nv={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Pn=new Li("app","Firebase",nv);/**
 * @license
 * Copyright 2019 Google LLC
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
 */class rv{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Zn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Pn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */const xr=Zy;function zf(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ba,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Pn.create("bad-app-name",{appName:String(i)});if(n||(n=jf()),!n)throw Pn.create("no-options");const s=Bs.get(i);if(s){if(Us(n,s.options)&&Us(r,s.config))return s;throw Pn.create("duplicate-app",{appName:i})}const a=new cy(i);for(const c of Ra.values())a.addComponent(c);const l=new rv(n,r,a);return Bs.set(i,l),l}function Gf(t=ba){const e=Bs.get(t);if(!e&&t===ba&&jf())return zf();if(!e)throw Pn.create("no-app",{appName:t});return e}function Cn(t,e,n){var r;let i=(r=ev[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ln.warn(l.join(" "));return}br(new Zn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const iv="firebase-heartbeat-database",sv=1,bi="firebase-heartbeat-store";let na=null;function Kf(){return na||(na=Iy(iv,sv,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(bi)}catch(n){console.warn(n)}}}}).catch(t=>{throw Pn.create("idb-open",{originalErrorMessage:t.message})})),na}async function ov(t){try{const n=(await Kf()).transaction(bi),r=await n.objectStore(bi).get(Wf(t));return await n.done,r}catch(e){if(e instanceof hn)ln.warn(e.message);else{const n=Pn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ln.warn(n.message)}}}async function gu(t,e){try{const r=(await Kf()).transaction(bi,"readwrite");await r.objectStore(bi).put(e,Wf(t)),await r.done}catch(n){if(n instanceof hn)ln.warn(n.message);else{const r=Pn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ln.warn(r.message)}}}function Wf(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const av=1024,lv=30*24*60*60*1e3;class cv{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new hv(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=mu();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=lv}),this._storage.overwrite(this._heartbeatsCache))}catch(r){ln.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=mu(),{heartbeatsToSend:r,unsentEntries:i}=uv(this._heartbeatsCache.heartbeats),s=Fs(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return ln.warn(n),""}}}function mu(){return new Date().toISOString().substring(0,10)}function uv(t,e=av){const n=[];let r=t.slice();for(const i of t){const s=n.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),_u(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),_u(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class hv{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return X_()?Y_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await ov(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return gu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return gu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function _u(t){return Fs(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
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
 */function fv(t){br(new Zn("platform-logger",e=>new by(e),"PRIVATE")),br(new Zn("heartbeat",e=>new cv(e),"PRIVATE")),Cn(Aa,du,t),Cn(Aa,du,"esm2017"),Cn("fire-js","")}fv("");var yu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Qf;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,m){function T(){}T.prototype=m.prototype,w.D=m.prototype,w.prototype=new T,w.prototype.constructor=w,w.C=function(A,b,S){for(var E=Array(arguments.length-2),st=2;st<arguments.length;st++)E[st-2]=arguments[st];return m.prototype[b].apply(A,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,m,T){T||(T=0);var A=Array(16);if(typeof m=="string")for(var b=0;16>b;++b)A[b]=m.charCodeAt(T++)|m.charCodeAt(T++)<<8|m.charCodeAt(T++)<<16|m.charCodeAt(T++)<<24;else for(b=0;16>b;++b)A[b]=m[T++]|m[T++]<<8|m[T++]<<16|m[T++]<<24;m=w.g[0],T=w.g[1],b=w.g[2];var S=w.g[3],E=m+(S^T&(b^S))+A[0]+3614090360&4294967295;m=T+(E<<7&4294967295|E>>>25),E=S+(b^m&(T^b))+A[1]+3905402710&4294967295,S=m+(E<<12&4294967295|E>>>20),E=b+(T^S&(m^T))+A[2]+606105819&4294967295,b=S+(E<<17&4294967295|E>>>15),E=T+(m^b&(S^m))+A[3]+3250441966&4294967295,T=b+(E<<22&4294967295|E>>>10),E=m+(S^T&(b^S))+A[4]+4118548399&4294967295,m=T+(E<<7&4294967295|E>>>25),E=S+(b^m&(T^b))+A[5]+1200080426&4294967295,S=m+(E<<12&4294967295|E>>>20),E=b+(T^S&(m^T))+A[6]+2821735955&4294967295,b=S+(E<<17&4294967295|E>>>15),E=T+(m^b&(S^m))+A[7]+4249261313&4294967295,T=b+(E<<22&4294967295|E>>>10),E=m+(S^T&(b^S))+A[8]+1770035416&4294967295,m=T+(E<<7&4294967295|E>>>25),E=S+(b^m&(T^b))+A[9]+2336552879&4294967295,S=m+(E<<12&4294967295|E>>>20),E=b+(T^S&(m^T))+A[10]+4294925233&4294967295,b=S+(E<<17&4294967295|E>>>15),E=T+(m^b&(S^m))+A[11]+2304563134&4294967295,T=b+(E<<22&4294967295|E>>>10),E=m+(S^T&(b^S))+A[12]+1804603682&4294967295,m=T+(E<<7&4294967295|E>>>25),E=S+(b^m&(T^b))+A[13]+4254626195&4294967295,S=m+(E<<12&4294967295|E>>>20),E=b+(T^S&(m^T))+A[14]+2792965006&4294967295,b=S+(E<<17&4294967295|E>>>15),E=T+(m^b&(S^m))+A[15]+1236535329&4294967295,T=b+(E<<22&4294967295|E>>>10),E=m+(b^S&(T^b))+A[1]+4129170786&4294967295,m=T+(E<<5&4294967295|E>>>27),E=S+(T^b&(m^T))+A[6]+3225465664&4294967295,S=m+(E<<9&4294967295|E>>>23),E=b+(m^T&(S^m))+A[11]+643717713&4294967295,b=S+(E<<14&4294967295|E>>>18),E=T+(S^m&(b^S))+A[0]+3921069994&4294967295,T=b+(E<<20&4294967295|E>>>12),E=m+(b^S&(T^b))+A[5]+3593408605&4294967295,m=T+(E<<5&4294967295|E>>>27),E=S+(T^b&(m^T))+A[10]+38016083&4294967295,S=m+(E<<9&4294967295|E>>>23),E=b+(m^T&(S^m))+A[15]+3634488961&4294967295,b=S+(E<<14&4294967295|E>>>18),E=T+(S^m&(b^S))+A[4]+3889429448&4294967295,T=b+(E<<20&4294967295|E>>>12),E=m+(b^S&(T^b))+A[9]+568446438&4294967295,m=T+(E<<5&4294967295|E>>>27),E=S+(T^b&(m^T))+A[14]+3275163606&4294967295,S=m+(E<<9&4294967295|E>>>23),E=b+(m^T&(S^m))+A[3]+4107603335&4294967295,b=S+(E<<14&4294967295|E>>>18),E=T+(S^m&(b^S))+A[8]+1163531501&4294967295,T=b+(E<<20&4294967295|E>>>12),E=m+(b^S&(T^b))+A[13]+2850285829&4294967295,m=T+(E<<5&4294967295|E>>>27),E=S+(T^b&(m^T))+A[2]+4243563512&4294967295,S=m+(E<<9&4294967295|E>>>23),E=b+(m^T&(S^m))+A[7]+1735328473&4294967295,b=S+(E<<14&4294967295|E>>>18),E=T+(S^m&(b^S))+A[12]+2368359562&4294967295,T=b+(E<<20&4294967295|E>>>12),E=m+(T^b^S)+A[5]+4294588738&4294967295,m=T+(E<<4&4294967295|E>>>28),E=S+(m^T^b)+A[8]+2272392833&4294967295,S=m+(E<<11&4294967295|E>>>21),E=b+(S^m^T)+A[11]+1839030562&4294967295,b=S+(E<<16&4294967295|E>>>16),E=T+(b^S^m)+A[14]+4259657740&4294967295,T=b+(E<<23&4294967295|E>>>9),E=m+(T^b^S)+A[1]+2763975236&4294967295,m=T+(E<<4&4294967295|E>>>28),E=S+(m^T^b)+A[4]+1272893353&4294967295,S=m+(E<<11&4294967295|E>>>21),E=b+(S^m^T)+A[7]+4139469664&4294967295,b=S+(E<<16&4294967295|E>>>16),E=T+(b^S^m)+A[10]+3200236656&4294967295,T=b+(E<<23&4294967295|E>>>9),E=m+(T^b^S)+A[13]+681279174&4294967295,m=T+(E<<4&4294967295|E>>>28),E=S+(m^T^b)+A[0]+3936430074&4294967295,S=m+(E<<11&4294967295|E>>>21),E=b+(S^m^T)+A[3]+3572445317&4294967295,b=S+(E<<16&4294967295|E>>>16),E=T+(b^S^m)+A[6]+76029189&4294967295,T=b+(E<<23&4294967295|E>>>9),E=m+(T^b^S)+A[9]+3654602809&4294967295,m=T+(E<<4&4294967295|E>>>28),E=S+(m^T^b)+A[12]+3873151461&4294967295,S=m+(E<<11&4294967295|E>>>21),E=b+(S^m^T)+A[15]+530742520&4294967295,b=S+(E<<16&4294967295|E>>>16),E=T+(b^S^m)+A[2]+3299628645&4294967295,T=b+(E<<23&4294967295|E>>>9),E=m+(b^(T|~S))+A[0]+4096336452&4294967295,m=T+(E<<6&4294967295|E>>>26),E=S+(T^(m|~b))+A[7]+1126891415&4294967295,S=m+(E<<10&4294967295|E>>>22),E=b+(m^(S|~T))+A[14]+2878612391&4294967295,b=S+(E<<15&4294967295|E>>>17),E=T+(S^(b|~m))+A[5]+4237533241&4294967295,T=b+(E<<21&4294967295|E>>>11),E=m+(b^(T|~S))+A[12]+1700485571&4294967295,m=T+(E<<6&4294967295|E>>>26),E=S+(T^(m|~b))+A[3]+2399980690&4294967295,S=m+(E<<10&4294967295|E>>>22),E=b+(m^(S|~T))+A[10]+4293915773&4294967295,b=S+(E<<15&4294967295|E>>>17),E=T+(S^(b|~m))+A[1]+2240044497&4294967295,T=b+(E<<21&4294967295|E>>>11),E=m+(b^(T|~S))+A[8]+1873313359&4294967295,m=T+(E<<6&4294967295|E>>>26),E=S+(T^(m|~b))+A[15]+4264355552&4294967295,S=m+(E<<10&4294967295|E>>>22),E=b+(m^(S|~T))+A[6]+2734768916&4294967295,b=S+(E<<15&4294967295|E>>>17),E=T+(S^(b|~m))+A[13]+1309151649&4294967295,T=b+(E<<21&4294967295|E>>>11),E=m+(b^(T|~S))+A[4]+4149444226&4294967295,m=T+(E<<6&4294967295|E>>>26),E=S+(T^(m|~b))+A[11]+3174756917&4294967295,S=m+(E<<10&4294967295|E>>>22),E=b+(m^(S|~T))+A[2]+718787259&4294967295,b=S+(E<<15&4294967295|E>>>17),E=T+(S^(b|~m))+A[9]+3951481745&4294967295,w.g[0]=w.g[0]+m&4294967295,w.g[1]=w.g[1]+(b+(E<<21&4294967295|E>>>11))&4294967295,w.g[2]=w.g[2]+b&4294967295,w.g[3]=w.g[3]+S&4294967295}r.prototype.u=function(w,m){m===void 0&&(m=w.length);for(var T=m-this.blockSize,A=this.B,b=this.h,S=0;S<m;){if(b==0)for(;S<=T;)i(this,w,S),S+=this.blockSize;if(typeof w=="string"){for(;S<m;)if(A[b++]=w.charCodeAt(S++),b==this.blockSize){i(this,A),b=0;break}}else for(;S<m;)if(A[b++]=w[S++],b==this.blockSize){i(this,A),b=0;break}}this.h=b,this.o+=m},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var m=1;m<w.length-8;++m)w[m]=0;var T=8*this.o;for(m=w.length-8;m<w.length;++m)w[m]=T&255,T/=256;for(this.u(w),w=Array(16),m=T=0;4>m;++m)for(var A=0;32>A;A+=8)w[T++]=this.g[m]>>>A&255;return w};function s(w,m){var T=l;return Object.prototype.hasOwnProperty.call(T,w)?T[w]:T[w]=m(w)}function a(w,m){this.h=m;for(var T=[],A=!0,b=w.length-1;0<=b;b--){var S=w[b]|0;A&&S==m||(T[b]=S,A=!1)}this.g=T}var l={};function c(w){return-128<=w&&128>w?s(w,function(m){return new a([m|0],0>m?-1:0)}):new a([w|0],0>w?-1:0)}function f(w){if(isNaN(w)||!isFinite(w))return p;if(0>w)return F(f(-w));for(var m=[],T=1,A=0;w>=T;A++)m[A]=w/T|0,T*=4294967296;return new a(m,0)}function d(w,m){if(w.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(w.charAt(0)=="-")return F(d(w.substring(1),m));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=f(Math.pow(m,8)),A=p,b=0;b<w.length;b+=8){var S=Math.min(8,w.length-b),E=parseInt(w.substring(b,b+S),m);8>S?(S=f(Math.pow(m,S)),A=A.j(S).add(f(E))):(A=A.j(T),A=A.add(f(E)))}return A}var p=c(0),y=c(1),I=c(16777216);t=a.prototype,t.m=function(){if(M(this))return-F(this).m();for(var w=0,m=1,T=0;T<this.g.length;T++){var A=this.i(T);w+=(0<=A?A:4294967296+A)*m,m*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(O(this))return"0";if(M(this))return"-"+F(this).toString(w);for(var m=f(Math.pow(w,6)),T=this,A="";;){var b=z(T,m).g;T=G(T,b.j(m));var S=((0<T.g.length?T.g[0]:T.h)>>>0).toString(w);if(T=b,O(T))return S+A;for(;6>S.length;)S="0"+S;A=S+A}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function O(w){if(w.h!=0)return!1;for(var m=0;m<w.g.length;m++)if(w.g[m]!=0)return!1;return!0}function M(w){return w.h==-1}t.l=function(w){return w=G(this,w),M(w)?-1:O(w)?0:1};function F(w){for(var m=w.g.length,T=[],A=0;A<m;A++)T[A]=~w.g[A];return new a(T,~w.h).add(y)}t.abs=function(){return M(this)?F(this):this},t.add=function(w){for(var m=Math.max(this.g.length,w.g.length),T=[],A=0,b=0;b<=m;b++){var S=A+(this.i(b)&65535)+(w.i(b)&65535),E=(S>>>16)+(this.i(b)>>>16)+(w.i(b)>>>16);A=E>>>16,S&=65535,E&=65535,T[b]=E<<16|S}return new a(T,T[T.length-1]&-2147483648?-1:0)};function G(w,m){return w.add(F(m))}t.j=function(w){if(O(this)||O(w))return p;if(M(this))return M(w)?F(this).j(F(w)):F(F(this).j(w));if(M(w))return F(this.j(F(w)));if(0>this.l(I)&&0>w.l(I))return f(this.m()*w.m());for(var m=this.g.length+w.g.length,T=[],A=0;A<2*m;A++)T[A]=0;for(A=0;A<this.g.length;A++)for(var b=0;b<w.g.length;b++){var S=this.i(A)>>>16,E=this.i(A)&65535,st=w.i(b)>>>16,Et=w.i(b)&65535;T[2*A+2*b]+=E*Et,j(T,2*A+2*b),T[2*A+2*b+1]+=S*Et,j(T,2*A+2*b+1),T[2*A+2*b+1]+=E*st,j(T,2*A+2*b+1),T[2*A+2*b+2]+=S*st,j(T,2*A+2*b+2)}for(A=0;A<m;A++)T[A]=T[2*A+1]<<16|T[2*A];for(A=m;A<2*m;A++)T[A]=0;return new a(T,0)};function j(w,m){for(;(w[m]&65535)!=w[m];)w[m+1]+=w[m]>>>16,w[m]&=65535,m++}function q(w,m){this.g=w,this.h=m}function z(w,m){if(O(m))throw Error("division by zero");if(O(w))return new q(p,p);if(M(w))return m=z(F(w),m),new q(F(m.g),F(m.h));if(M(m))return m=z(w,F(m)),new q(F(m.g),m.h);if(30<w.g.length){if(M(w)||M(m))throw Error("slowDivide_ only works with positive integers.");for(var T=y,A=m;0>=A.l(w);)T=ce(T),A=ce(A);var b=ue(T,1),S=ue(A,1);for(A=ue(A,2),T=ue(T,2);!O(A);){var E=S.add(A);0>=E.l(w)&&(b=b.add(T),S=E),A=ue(A,1),T=ue(T,1)}return m=G(w,b.j(m)),new q(b,m)}for(b=p;0<=w.l(m);){for(T=Math.max(1,Math.floor(w.m()/m.m())),A=Math.ceil(Math.log(T)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),S=f(T),E=S.j(m);M(E)||0<E.l(w);)T-=A,S=f(T),E=S.j(m);O(S)&&(S=y),b=b.add(S),w=G(w,E)}return new q(b,w)}t.A=function(w){return z(this,w).h},t.and=function(w){for(var m=Math.max(this.g.length,w.g.length),T=[],A=0;A<m;A++)T[A]=this.i(A)&w.i(A);return new a(T,this.h&w.h)},t.or=function(w){for(var m=Math.max(this.g.length,w.g.length),T=[],A=0;A<m;A++)T[A]=this.i(A)|w.i(A);return new a(T,this.h|w.h)},t.xor=function(w){for(var m=Math.max(this.g.length,w.g.length),T=[],A=0;A<m;A++)T[A]=this.i(A)^w.i(A);return new a(T,this.h^w.h)};function ce(w){for(var m=w.g.length+1,T=[],A=0;A<m;A++)T[A]=w.i(A)<<1|w.i(A-1)>>>31;return new a(T,w.h)}function ue(w,m){var T=m>>5;m%=32;for(var A=w.g.length-T,b=[],S=0;S<A;S++)b[S]=0<m?w.i(S+T)>>>m|w.i(S+T+1)<<32-m:w.i(S+T);return new a(b,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=d,Qf=a}).apply(typeof yu<"u"?yu:typeof self<"u"?self:typeof window<"u"?window:{});var hs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Jf,ri,Xf,Is,Sa,Yf,Zf,ed;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,h){return o==Array.prototype||o==Object.prototype||(o[u]=h.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof hs=="object"&&hs];for(var u=0;u<o.length;++u){var h=o[u];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=n(this);function i(o,u){if(u)e:{var h=r;o=o.split(".");for(var g=0;g<o.length-1;g++){var P=o[g];if(!(P in h))break e;h=h[P]}o=o[o.length-1],g=h[o],u=u(g),u!=g&&u!=null&&e(h,o,{configurable:!0,writable:!0,value:u})}}function s(o,u){o instanceof String&&(o+="");var h=0,g=!1,P={next:function(){if(!g&&h<o.length){var C=h++;return{value:u(C,o[C]),done:!1}}return g=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}i("Array.prototype.values",function(o){return o||function(){return s(this,function(u,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function c(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function f(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function d(o,u,h){return o.call.apply(o.bind,arguments)}function p(o,u,h){if(!o)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,g),o.apply(u,P)}}return function(){return o.apply(u,arguments)}}function y(o,u,h){return y=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,y.apply(null,arguments)}function I(o,u){var h=Array.prototype.slice.call(arguments,1);return function(){var g=h.slice();return g.push.apply(g,arguments),o.apply(this,g)}}function O(o,u){function h(){}h.prototype=u.prototype,o.aa=u.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(g,P,C){for(var H=Array(arguments.length-2),we=2;we<arguments.length;we++)H[we-2]=arguments[we];return u.prototype[P].apply(g,H)}}function M(o){const u=o.length;if(0<u){const h=Array(u);for(let g=0;g<u;g++)h[g]=o[g];return h}return[]}function F(o,u){for(let h=1;h<arguments.length;h++){const g=arguments[h];if(c(g)){const P=o.length||0,C=g.length||0;o.length=P+C;for(let H=0;H<C;H++)o[P+H]=g[H]}else o.push(g)}}class G{constructor(u,h){this.i=u,this.j=h,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function j(o){return/^[\s\xa0]*$/.test(o)}function q(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function z(o){return z[" "](o),o}z[" "]=function(){};var ce=q().indexOf("Gecko")!=-1&&!(q().toLowerCase().indexOf("webkit")!=-1&&q().indexOf("Edge")==-1)&&!(q().indexOf("Trident")!=-1||q().indexOf("MSIE")!=-1)&&q().indexOf("Edge")==-1;function ue(o,u,h){for(const g in o)u.call(h,o[g],g,o)}function w(o,u){for(const h in o)u.call(void 0,o[h],h,o)}function m(o){const u={};for(const h in o)u[h]=o[h];return u}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(o,u){let h,g;for(let P=1;P<arguments.length;P++){g=arguments[P];for(h in g)o[h]=g[h];for(let C=0;C<T.length;C++)h=T[C],Object.prototype.hasOwnProperty.call(g,h)&&(o[h]=g[h])}}function b(o){var u=1;o=o.split(":");const h=[];for(;0<u&&o.length;)h.push(o.shift()),u--;return o.length&&h.push(o.join(":")),h}function S(o){l.setTimeout(()=>{throw o},0)}function E(){var o=gt;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class st{constructor(){this.h=this.g=null}add(u,h){const g=Et.get();g.set(u,h),this.h?this.h.next=g:this.g=g,this.h=g}}var Et=new G(()=>new xe,o=>o.reset());class xe{constructor(){this.next=this.g=this.h=null}set(u,h){this.h=u,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let pe,he=!1,gt=new st,At=()=>{const o=l.Promise.resolve(void 0);pe=()=>{o.then(Tt)}};var Tt=()=>{for(var o;o=E();){try{o.h.call(o.g)}catch(h){S(h)}var u=Et;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}he=!1};function Ce(){this.s=this.s,this.C=this.C}Ce.prototype.s=!1,Ce.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ce.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Oe(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}Oe.prototype.h=function(){this.defaultPrevented=!0};var fn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};l.addEventListener("test",h,u),l.removeEventListener("test",h,u)}catch{}return o}();function xt(o,u){if(Oe.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,g=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(ce){e:{try{z(u.nodeName);var P=!0;break e}catch{}P=!1}P||(u=null)}}else h=="mouseover"?u=o.fromElement:h=="mouseout"&&(u=o.toElement);this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:ht[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&xt.aa.h.call(this)}}O(xt,Oe);var ht={2:"touch",3:"pen",4:"mouse"};xt.prototype.h=function(){xt.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var k="closure_listenable_"+(1e6*Math.random()|0),J=0;function W(o,u,h,g,P){this.listener=o,this.proxy=null,this.src=u,this.type=h,this.capture=!!g,this.ha=P,this.key=++J,this.da=this.fa=!1}function X(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function _e(o){this.src=o,this.g={},this.h=0}_e.prototype.add=function(o,u,h,g,P){var C=o.toString();o=this.g[C],o||(o=this.g[C]=[],this.h++);var H=v(o,u,g,P);return-1<H?(u=o[H],h||(u.fa=!1)):(u=new W(u,this.src,C,!!g,P),u.fa=h,o.push(u)),u};function _(o,u){var h=u.type;if(h in o.g){var g=o.g[h],P=Array.prototype.indexOf.call(g,u,void 0),C;(C=0<=P)&&Array.prototype.splice.call(g,P,1),C&&(X(u),o.g[h].length==0&&(delete o.g[h],o.h--))}}function v(o,u,h,g){for(var P=0;P<o.length;++P){var C=o[P];if(!C.da&&C.listener==u&&C.capture==!!h&&C.ha==g)return P}return-1}var R="closure_lm_"+(1e6*Math.random()|0),D={};function V(o,u,h,g,P){if(Array.isArray(u)){for(var C=0;C<u.length;C++)V(o,u[C],h,g,P);return null}return h=ne(h),o&&o[k]?o.K(u,h,f(g)?!!g.capture:!!g,P):N(o,u,h,!1,g,P)}function N(o,u,h,g,P,C){if(!u)throw Error("Invalid event type");var H=f(P)?!!P.capture:!!P,we=Q(o);if(we||(o[R]=we=new _e(o)),h=we.add(u,h,g,H,C),h.proxy)return h;if(g=K(),h.proxy=g,g.src=o,g.listener=h,o.addEventListener)fn||(P=H),P===void 0&&(P=!1),o.addEventListener(u.toString(),g,P);else if(o.attachEvent)o.attachEvent(L(u.toString()),g);else if(o.addListener&&o.removeListener)o.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return h}function K(){function o(h){return u.call(o.src,o.listener,h)}const u=ee;return o}function $(o,u,h,g,P){if(Array.isArray(u))for(var C=0;C<u.length;C++)$(o,u[C],h,g,P);else g=f(g)?!!g.capture:!!g,h=ne(h),o&&o[k]?(o=o.i,u=String(u).toString(),u in o.g&&(C=o.g[u],h=v(C,h,g,P),-1<h&&(X(C[h]),Array.prototype.splice.call(C,h,1),C.length==0&&(delete o.g[u],o.h--)))):o&&(o=Q(o))&&(u=o.g[u.toString()],o=-1,u&&(o=v(u,h,g,P)),(h=-1<o?u[o]:null)&&B(h))}function B(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[k])_(u.i,o);else{var h=o.type,g=o.proxy;u.removeEventListener?u.removeEventListener(h,g,o.capture):u.detachEvent?u.detachEvent(L(h),g):u.addListener&&u.removeListener&&u.removeListener(g),(h=Q(u))?(_(h,o),h.h==0&&(h.src=null,u[R]=null)):X(o)}}}function L(o){return o in D?D[o]:D[o]="on"+o}function ee(o,u){if(o.da)o=!0;else{u=new xt(u,this);var h=o.listener,g=o.ha||o.src;o.fa&&B(o),o=h.call(g,u)}return o}function Q(o){return o=o[R],o instanceof _e?o:null}var Z="__closure_events_fn_"+(1e9*Math.random()>>>0);function ne(o){return typeof o=="function"?o:(o[Z]||(o[Z]=function(u){return o.handleEvent(u)}),o[Z])}function te(){Ce.call(this),this.i=new _e(this),this.M=this,this.F=null}O(te,Ce),te.prototype[k]=!0,te.prototype.removeEventListener=function(o,u,h,g){$(this,o,u,h,g)};function se(o,u){var h,g=o.F;if(g)for(h=[];g;g=g.F)h.push(g);if(o=o.M,g=u.type||u,typeof u=="string")u=new Oe(u,o);else if(u instanceof Oe)u.target=u.target||o;else{var P=u;u=new Oe(g,o),A(u,P)}if(P=!0,h)for(var C=h.length-1;0<=C;C--){var H=u.g=h[C];P=ge(H,g,!0,u)&&P}if(H=u.g=o,P=ge(H,g,!0,u)&&P,P=ge(H,g,!1,u)&&P,h)for(C=0;C<h.length;C++)H=u.g=h[C],P=ge(H,g,!1,u)&&P}te.prototype.N=function(){if(te.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var h=o.g[u],g=0;g<h.length;g++)X(h[g]);delete o.g[u],o.h--}}this.F=null},te.prototype.K=function(o,u,h,g){return this.i.add(String(o),u,!1,h,g)},te.prototype.L=function(o,u,h,g){return this.i.add(String(o),u,!0,h,g)};function ge(o,u,h,g){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var P=!0,C=0;C<u.length;++C){var H=u[C];if(H&&!H.da&&H.capture==h){var we=H.listener,He=H.ha||H.src;H.fa&&_(o.i,H),P=we.call(He,g)!==!1&&P}}return P&&!g.defaultPrevented}function We(o,u,h){if(typeof o=="function")h&&(o=y(o,h));else if(o&&typeof o.handleEvent=="function")o=y(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(o,u||0)}function je(o){o.g=We(()=>{o.g=null,o.i&&(o.i=!1,je(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class It extends Ce{constructor(u,h){super(),this.m=u,this.l=h,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:je(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Qe(o){Ce.call(this),this.h=o,this.g={}}O(Qe,Ce);var dn=[];function Ur(o){ue(o.g,function(u,h){this.g.hasOwnProperty(h)&&B(u)},o),o.g={}}Qe.prototype.N=function(){Qe.aa.N.call(this),Ur(this)},Qe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var $e=l.JSON.stringify,wt=l.JSON.parse,Gi=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function Po(){}Po.prototype.h=null;function Hl(o){return o.h||(o.h=o.i())}function ql(){}var Br={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Co(){Oe.call(this,"d")}O(Co,Oe);function Oo(){Oe.call(this,"c")}O(Oo,Oe);var Ln={},zl=null;function Ki(){return zl=zl||new te}Ln.La="serverreachability";function Gl(o){Oe.call(this,Ln.La,o)}O(Gl,Oe);function jr(o){const u=Ki();se(u,new Gl(u))}Ln.STAT_EVENT="statevent";function Kl(o,u){Oe.call(this,Ln.STAT_EVENT,o),this.stat=u}O(Kl,Oe);function ot(o){const u=Ki();se(u,new Kl(u,o))}Ln.Ma="timingevent";function Wl(o,u){Oe.call(this,Ln.Ma,o),this.size=u}O(Wl,Oe);function $r(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},u)}function Hr(){this.g=!0}Hr.prototype.xa=function(){this.g=!1};function Bp(o,u,h,g,P,C){o.info(function(){if(o.g)if(C)for(var H="",we=C.split("&"),He=0;He<we.length;He++){var ye=we[He].split("=");if(1<ye.length){var Je=ye[0];ye=ye[1];var Xe=Je.split("_");H=2<=Xe.length&&Xe[1]=="type"?H+(Je+"="+ye+"&"):H+(Je+"=redacted&")}}else H=null;else H=C;return"XMLHTTP REQ ("+g+") [attempt "+P+"]: "+u+`
`+h+`
`+H})}function jp(o,u,h,g,P,C,H){o.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+P+"]: "+u+`
`+h+`
`+C+" "+H})}function lr(o,u,h,g){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+Hp(o,h)+(g?" "+g:"")})}function $p(o,u){o.info(function(){return"TIMEOUT: "+u})}Hr.prototype.info=function(){};function Hp(o,u){if(!o.g)return u;if(!u)return null;try{var h=JSON.parse(u);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var g=h[o];if(!(2>g.length)){var P=g[1];if(Array.isArray(P)&&!(1>P.length)){var C=P[0];if(C!="noop"&&C!="stop"&&C!="close")for(var H=1;H<P.length;H++)P[H]=""}}}}return $e(h)}catch{return u}}var Wi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ql={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ko;function Qi(){}O(Qi,Po),Qi.prototype.g=function(){return new XMLHttpRequest},Qi.prototype.i=function(){return{}},ko=new Qi;function pn(o,u,h,g){this.j=o,this.i=u,this.l=h,this.R=g||1,this.U=new Qe(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Jl}function Jl(){this.i=null,this.g="",this.h=!1}var Xl={},Do={};function No(o,u,h){o.L=1,o.v=Zi(Kt(u)),o.m=h,o.P=!0,Yl(o,null)}function Yl(o,u){o.F=Date.now(),Ji(o),o.A=Kt(o.v);var h=o.A,g=o.R;Array.isArray(g)||(g=[String(g)]),fc(h.i,"t",g),o.C=0,h=o.j.J,o.h=new Jl,o.g=Oc(o.j,h?u:null,!o.m),0<o.O&&(o.M=new It(y(o.Y,o,o.g),o.O)),u=o.U,h=o.g,g=o.ca;var P="readystatechange";Array.isArray(P)||(P&&(dn[0]=P.toString()),P=dn);for(var C=0;C<P.length;C++){var H=V(h,P[C],g||u.handleEvent,!1,u.h||u);if(!H)break;u.g[H.key]=H}u=o.H?m(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),jr(),Bp(o.i,o.u,o.A,o.l,o.R,o.m)}pn.prototype.ca=function(o){o=o.target;const u=this.M;u&&Wt(o)==3?u.j():this.Y(o)},pn.prototype.Y=function(o){try{if(o==this.g)e:{const Xe=Wt(this.g);var u=this.g.Ba();const hr=this.g.Z();if(!(3>Xe)&&(Xe!=3||this.g&&(this.h.h||this.g.oa()||vc(this.g)))){this.J||Xe!=4||u==7||(u==8||0>=hr?jr(3):jr(2)),Vo(this);var h=this.g.Z();this.X=h;t:if(Zl(this)){var g=vc(this.g);o="";var P=g.length,C=Wt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Fn(this),qr(this);var H="";break t}this.h.i=new l.TextDecoder}for(u=0;u<P;u++)this.h.h=!0,o+=this.h.i.decode(g[u],{stream:!(C&&u==P-1)});g.length=0,this.h.g+=o,this.C=0,H=this.h.g}else H=this.g.oa();if(this.o=h==200,jp(this.i,this.u,this.A,this.l,this.R,Xe,h),this.o){if(this.T&&!this.K){t:{if(this.g){var we,He=this.g;if((we=He.g?He.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!j(we)){var ye=we;break t}}ye=null}if(h=ye)lr(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,xo(this,h);else{this.o=!1,this.s=3,ot(12),Fn(this),qr(this);break e}}if(this.P){h=!0;let bt;for(;!this.J&&this.C<H.length;)if(bt=qp(this,H),bt==Do){Xe==4&&(this.s=4,ot(14),h=!1),lr(this.i,this.l,null,"[Incomplete Response]");break}else if(bt==Xl){this.s=4,ot(15),lr(this.i,this.l,H,"[Invalid Chunk]"),h=!1;break}else lr(this.i,this.l,bt,null),xo(this,bt);if(Zl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Xe!=4||H.length!=0||this.h.h||(this.s=1,ot(16),h=!1),this.o=this.o&&h,!h)lr(this.i,this.l,H,"[Invalid Chunked Response]"),Fn(this),qr(this);else if(0<H.length&&!this.W){this.W=!0;var Je=this.j;Je.g==this&&Je.ba&&!Je.M&&(Je.j.info("Great, no buffering proxy detected. Bytes received: "+H.length),jo(Je),Je.M=!0,ot(11))}}else lr(this.i,this.l,H,null),xo(this,H);Xe==4&&Fn(this),this.o&&!this.J&&(Xe==4?Rc(this.j,this):(this.o=!1,Ji(this)))}else ag(this.g),h==400&&0<H.indexOf("Unknown SID")?(this.s=3,ot(12)):(this.s=0,ot(13)),Fn(this),qr(this)}}}catch{}finally{}};function Zl(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function qp(o,u){var h=o.C,g=u.indexOf(`
`,h);return g==-1?Do:(h=Number(u.substring(h,g)),isNaN(h)?Xl:(g+=1,g+h>u.length?Do:(u=u.slice(g,g+h),o.C=g+h,u)))}pn.prototype.cancel=function(){this.J=!0,Fn(this)};function Ji(o){o.S=Date.now()+o.I,ec(o,o.I)}function ec(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=$r(y(o.ba,o),u)}function Vo(o){o.B&&(l.clearTimeout(o.B),o.B=null)}pn.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?($p(this.i,this.A),this.L!=2&&(jr(),ot(17)),Fn(this),this.s=2,qr(this)):ec(this,this.S-o)};function qr(o){o.j.G==0||o.J||Rc(o.j,o)}function Fn(o){Vo(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,Ur(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function xo(o,u){try{var h=o.j;if(h.G!=0&&(h.g==o||Mo(h.h,o))){if(!o.K&&Mo(h.h,o)&&h.G==3){try{var g=h.Da.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var P=g;if(P[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)ss(h),rs(h);else break e;Bo(h),ot(18)}}else h.za=P[1],0<h.za-h.T&&37500>P[2]&&h.F&&h.v==0&&!h.C&&(h.C=$r(y(h.Za,h),6e3));if(1>=rc(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Bn(h,11)}else if((o.K||h.g==o)&&ss(h),!j(u))for(P=h.Da.g.parse(u),u=0;u<P.length;u++){let ye=P[u];if(h.T=ye[0],ye=ye[1],h.G==2)if(ye[0]=="c"){h.K=ye[1],h.ia=ye[2];const Je=ye[3];Je!=null&&(h.la=Je,h.j.info("VER="+h.la));const Xe=ye[4];Xe!=null&&(h.Aa=Xe,h.j.info("SVER="+h.Aa));const hr=ye[5];hr!=null&&typeof hr=="number"&&0<hr&&(g=1.5*hr,h.L=g,h.j.info("backChannelRequestTimeoutMs_="+g)),g=h;const bt=o.g;if(bt){const as=bt.g?bt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(as){var C=g.h;C.g||as.indexOf("spdy")==-1&&as.indexOf("quic")==-1&&as.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(Lo(C,C.h),C.h=null))}if(g.D){const $o=bt.g?bt.g.getResponseHeader("X-HTTP-Session-Id"):null;$o&&(g.ya=$o,Se(g.I,g.D,$o))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),g=h;var H=o;if(g.qa=Cc(g,g.J?g.ia:null,g.W),H.K){ic(g.h,H);var we=H,He=g.L;He&&(we.I=He),we.B&&(Vo(we),Ji(we)),g.g=H}else Ac(g);0<h.i.length&&is(h)}else ye[0]!="stop"&&ye[0]!="close"||Bn(h,7);else h.G==3&&(ye[0]=="stop"||ye[0]=="close"?ye[0]=="stop"?Bn(h,7):Uo(h):ye[0]!="noop"&&h.l&&h.l.ta(ye),h.v=0)}}jr(4)}catch{}}var zp=class{constructor(o,u){this.g=o,this.map=u}};function tc(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function nc(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function rc(o){return o.h?1:o.g?o.g.size:0}function Mo(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function Lo(o,u){o.g?o.g.add(u):o.h=u}function ic(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}tc.prototype.cancel=function(){if(this.i=sc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function sc(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const h of o.g.values())u=u.concat(h.D);return u}return M(o.i)}function Gp(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var u=[],h=o.length,g=0;g<h;g++)u.push(o[g]);return u}u=[],h=0;for(g in o)u[h++]=o[g];return u}function Kp(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var u=[];o=o.length;for(var h=0;h<o;h++)u.push(h);return u}u=[],h=0;for(const g in o)u[h++]=g;return u}}}function oc(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var h=Kp(o),g=Gp(o),P=g.length,C=0;C<P;C++)u.call(void 0,g[C],h&&h[C],o)}var ac=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Wp(o,u){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var g=o[h].indexOf("="),P=null;if(0<=g){var C=o[h].substring(0,g);P=o[h].substring(g+1)}else C=o[h];u(C,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function Un(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Un){this.h=o.h,Xi(this,o.j),this.o=o.o,this.g=o.g,Yi(this,o.s),this.l=o.l;var u=o.i,h=new Kr;h.i=u.i,u.g&&(h.g=new Map(u.g),h.h=u.h),lc(this,h),this.m=o.m}else o&&(u=String(o).match(ac))?(this.h=!1,Xi(this,u[1]||"",!0),this.o=zr(u[2]||""),this.g=zr(u[3]||"",!0),Yi(this,u[4]),this.l=zr(u[5]||"",!0),lc(this,u[6]||"",!0),this.m=zr(u[7]||"")):(this.h=!1,this.i=new Kr(null,this.h))}Un.prototype.toString=function(){var o=[],u=this.j;u&&o.push(Gr(u,cc,!0),":");var h=this.g;return(h||u=="file")&&(o.push("//"),(u=this.o)&&o.push(Gr(u,cc,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(Gr(h,h.charAt(0)=="/"?Xp:Jp,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",Gr(h,Zp)),o.join("")};function Kt(o){return new Un(o)}function Xi(o,u,h){o.j=h?zr(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Yi(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function lc(o,u,h){u instanceof Kr?(o.i=u,eg(o.i,o.h)):(h||(u=Gr(u,Yp)),o.i=new Kr(u,o.h))}function Se(o,u,h){o.i.set(u,h)}function Zi(o){return Se(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function zr(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Gr(o,u,h){return typeof o=="string"?(o=encodeURI(o).replace(u,Qp),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Qp(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var cc=/[#\/\?@]/g,Jp=/[#\?:]/g,Xp=/[#\?]/g,Yp=/[#\?@]/g,Zp=/#/g;function Kr(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function gn(o){o.g||(o.g=new Map,o.h=0,o.i&&Wp(o.i,function(u,h){o.add(decodeURIComponent(u.replace(/\+/g," ")),h)}))}t=Kr.prototype,t.add=function(o,u){gn(this),this.i=null,o=cr(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(u),this.h+=1,this};function uc(o,u){gn(o),u=cr(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function hc(o,u){return gn(o),u=cr(o,u),o.g.has(u)}t.forEach=function(o,u){gn(this),this.g.forEach(function(h,g){h.forEach(function(P){o.call(u,P,g,this)},this)},this)},t.na=function(){gn(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),h=[];for(let g=0;g<u.length;g++){const P=o[g];for(let C=0;C<P.length;C++)h.push(u[g])}return h},t.V=function(o){gn(this);let u=[];if(typeof o=="string")hc(this,o)&&(u=u.concat(this.g.get(cr(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)u=u.concat(o[h])}return u},t.set=function(o,u){return gn(this),this.i=null,o=cr(this,o),hc(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},t.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function fc(o,u,h){uc(o,u),0<h.length&&(o.i=null,o.g.set(cr(o,u),M(h)),o.h+=h.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var h=0;h<u.length;h++){var g=u[h];const C=encodeURIComponent(String(g)),H=this.V(g);for(g=0;g<H.length;g++){var P=C;H[g]!==""&&(P+="="+encodeURIComponent(String(H[g]))),o.push(P)}}return this.i=o.join("&")};function cr(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function eg(o,u){u&&!o.j&&(gn(o),o.i=null,o.g.forEach(function(h,g){var P=g.toLowerCase();g!=P&&(uc(this,g),fc(this,P,h))},o)),o.j=u}function tg(o,u){const h=new Hr;if(l.Image){const g=new Image;g.onload=I(mn,h,"TestLoadImage: loaded",!0,u,g),g.onerror=I(mn,h,"TestLoadImage: error",!1,u,g),g.onabort=I(mn,h,"TestLoadImage: abort",!1,u,g),g.ontimeout=I(mn,h,"TestLoadImage: timeout",!1,u,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=o}else u(!1)}function ng(o,u){const h=new Hr,g=new AbortController,P=setTimeout(()=>{g.abort(),mn(h,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:g.signal}).then(C=>{clearTimeout(P),C.ok?mn(h,"TestPingServer: ok",!0,u):mn(h,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(P),mn(h,"TestPingServer: error",!1,u)})}function mn(o,u,h,g,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),g(h)}catch{}}function rg(){this.g=new Gi}function ig(o,u,h){const g=h||"";try{oc(o,function(P,C){let H=P;f(P)&&(H=$e(P)),u.push(g+C+"="+encodeURIComponent(H))})}catch(P){throw u.push(g+"type="+encodeURIComponent("_badmap")),P}}function es(o){this.l=o.Ub||null,this.j=o.eb||!1}O(es,Po),es.prototype.g=function(){return new ts(this.l,this.j)},es.prototype.i=function(o){return function(){return o}}({});function ts(o,u){te.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}O(ts,te),t=ts.prototype,t.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,Qr(this)},t.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Wr(this)),this.readyState=0},t.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Qr(this)),this.g&&(this.readyState=3,Qr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;dc(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function dc(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}t.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?Wr(this):Qr(this),this.readyState==3&&dc(this)}},t.Ra=function(o){this.g&&(this.response=this.responseText=o,Wr(this))},t.Qa=function(o){this.g&&(this.response=o,Wr(this))},t.ga=function(){this.g&&Wr(this)};function Wr(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Qr(o)}t.setRequestHeader=function(o,u){this.u.append(o,u)},t.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var h=u.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=u.next();return o.join(`\r
`)};function Qr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(ts.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function pc(o){let u="";return ue(o,function(h,g){u+=g,u+=":",u+=h,u+=`\r
`}),u}function Fo(o,u,h){e:{for(g in h){var g=!1;break e}g=!0}g||(h=pc(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):Se(o,u,h))}function ke(o){te.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}O(ke,te);var sg=/^https?$/i,og=["POST","PUT"];t=ke.prototype,t.Ha=function(o){this.J=o},t.ea=function(o,u,h,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ko.g(),this.v=this.o?Hl(this.o):Hl(ko),this.g.onreadystatechange=y(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(C){gc(this,C);return}if(o=h||"",h=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var P in g)h.set(P,g[P]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const C of g.keys())h.set(C,g.get(C));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(h.keys()).find(C=>C.toLowerCase()=="content-type"),P=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(og,u,void 0))||g||P||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,H]of h)this.g.setRequestHeader(C,H);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{yc(this),this.u=!0,this.g.send(o),this.u=!1}catch(C){gc(this,C)}};function gc(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,mc(o),ns(o)}function mc(o){o.A||(o.A=!0,se(o,"complete"),se(o,"error"))}t.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,se(this,"complete"),se(this,"abort"),ns(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ns(this,!0)),ke.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?_c(this):this.bb())},t.bb=function(){_c(this)};function _c(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Wt(o)!=4||o.Z()!=2)){if(o.u&&Wt(o)==4)We(o.Ea,0,o);else if(se(o,"readystatechange"),Wt(o)==4){o.h=!1;try{const H=o.Z();e:switch(H){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var h;if(!(h=u)){var g;if(g=H===0){var P=String(o.D).match(ac)[1]||null;!P&&l.self&&l.self.location&&(P=l.self.location.protocol.slice(0,-1)),g=!sg.test(P?P.toLowerCase():"")}h=g}if(h)se(o,"complete"),se(o,"success");else{o.m=6;try{var C=2<Wt(o)?o.g.statusText:""}catch{C=""}o.l=C+" ["+o.Z()+"]",mc(o)}}finally{ns(o)}}}}function ns(o,u){if(o.g){yc(o);const h=o.g,g=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||se(o,"ready");try{h.onreadystatechange=g}catch{}}}function yc(o){o.I&&(l.clearTimeout(o.I),o.I=null)}t.isActive=function(){return!!this.g};function Wt(o){return o.g?o.g.readyState:0}t.Z=function(){try{return 2<Wt(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),wt(u)}};function vc(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function ag(o){const u={};o=(o.g&&2<=Wt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<o.length;g++){if(j(o[g]))continue;var h=b(o[g]);const P=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const C=u[P]||[];u[P]=C,C.push(h)}w(u,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Jr(o,u,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||u}function Ec(o){this.Aa=0,this.i=[],this.j=new Hr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Jr("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Jr("baseRetryDelayMs",5e3,o),this.cb=Jr("retryDelaySeedMs",1e4,o),this.Wa=Jr("forwardChannelMaxRetries",2,o),this.wa=Jr("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new tc(o&&o.concurrentRequestLimit),this.Da=new rg,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Ec.prototype,t.la=8,t.G=1,t.connect=function(o,u,h,g){ot(0),this.W=o,this.H=u||{},h&&g!==void 0&&(this.H.OSID=h,this.H.OAID=g),this.F=this.X,this.I=Cc(this,null,this.W),is(this)};function Uo(o){if(Tc(o),o.G==3){var u=o.U++,h=Kt(o.I);if(Se(h,"SID",o.K),Se(h,"RID",u),Se(h,"TYPE","terminate"),Xr(o,h),u=new pn(o,o.j,u),u.L=2,u.v=Zi(Kt(h)),h=!1,l.navigator&&l.navigator.sendBeacon)try{h=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!h&&l.Image&&(new Image().src=u.v,h=!0),h||(u.g=Oc(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Ji(u)}Pc(o)}function rs(o){o.g&&(jo(o),o.g.cancel(),o.g=null)}function Tc(o){rs(o),o.u&&(l.clearTimeout(o.u),o.u=null),ss(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function is(o){if(!nc(o.h)&&!o.s){o.s=!0;var u=o.Ga;pe||At(),he||(pe(),he=!0),gt.add(u,o),o.B=0}}function lg(o,u){return rc(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=$r(y(o.Ga,o,u),Sc(o,o.B)),o.B++,!0)}t.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const P=new pn(this,this.j,o);let C=this.o;if(this.S&&(C?(C=m(C),A(C,this.S)):C=this.S),this.m!==null||this.O||(P.H=C,C=null),this.P)e:{for(var u=0,h=0;h<this.i.length;h++){t:{var g=this.i[h];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,4096<u){u=h;break e}if(u===4096||h===this.i.length-1){u=h+1;break e}}u=1e3}else u=1e3;u=wc(this,P,u),h=Kt(this.I),Se(h,"RID",o),Se(h,"CVER",22),this.D&&Se(h,"X-HTTP-Session-Id",this.D),Xr(this,h),C&&(this.O?u="headers="+encodeURIComponent(String(pc(C)))+"&"+u:this.m&&Fo(h,this.m,C)),Lo(this.h,P),this.Ua&&Se(h,"TYPE","init"),this.P?(Se(h,"$req",u),Se(h,"SID","null"),P.T=!0,No(P,h,null)):No(P,h,u),this.G=2}}else this.G==3&&(o?Ic(this,o):this.i.length==0||nc(this.h)||Ic(this))};function Ic(o,u){var h;u?h=u.l:h=o.U++;const g=Kt(o.I);Se(g,"SID",o.K),Se(g,"RID",h),Se(g,"AID",o.T),Xr(o,g),o.m&&o.o&&Fo(g,o.m,o.o),h=new pn(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),u&&(o.i=u.D.concat(o.i)),u=wc(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Lo(o.h,h),No(h,g,u)}function Xr(o,u){o.H&&ue(o.H,function(h,g){Se(u,g,h)}),o.l&&oc({},function(h,g){Se(u,g,h)})}function wc(o,u,h){h=Math.min(o.i.length,h);var g=o.l?y(o.l.Na,o.l,o):null;e:{var P=o.i;let C=-1;for(;;){const H=["count="+h];C==-1?0<h?(C=P[0].g,H.push("ofs="+C)):C=0:H.push("ofs="+C);let we=!0;for(let He=0;He<h;He++){let ye=P[He].g;const Je=P[He].map;if(ye-=C,0>ye)C=Math.max(0,P[He].g-100),we=!1;else try{ig(Je,H,"req"+ye+"_")}catch{g&&g(Je)}}if(we){g=H.join("&");break e}}}return o=o.i.splice(0,h),u.D=o,g}function Ac(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;pe||At(),he||(pe(),he=!0),gt.add(u,o),o.v=0}}function Bo(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=$r(y(o.Fa,o),Sc(o,o.v)),o.v++,!0)}t.Fa=function(){if(this.u=null,bc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=$r(y(this.ab,this),o)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ot(10),rs(this),bc(this))};function jo(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function bc(o){o.g=new pn(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=Kt(o.qa);Se(u,"RID","rpc"),Se(u,"SID",o.K),Se(u,"AID",o.T),Se(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&Se(u,"TO",o.ja),Se(u,"TYPE","xmlhttp"),Xr(o,u),o.m&&o.o&&Fo(u,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=Zi(Kt(u)),h.m=null,h.P=!0,Yl(h,o)}t.Za=function(){this.C!=null&&(this.C=null,rs(this),Bo(this),ot(19))};function ss(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function Rc(o,u){var h=null;if(o.g==u){ss(o),jo(o),o.g=null;var g=2}else if(Mo(o.h,u))h=u.D,ic(o.h,u),g=1;else return;if(o.G!=0){if(u.o)if(g==1){h=u.m?u.m.length:0,u=Date.now()-u.F;var P=o.B;g=Ki(),se(g,new Wl(g,h)),is(o)}else Ac(o);else if(P=u.s,P==3||P==0&&0<u.X||!(g==1&&lg(o,u)||g==2&&Bo(o)))switch(h&&0<h.length&&(u=o.h,u.i=u.i.concat(h)),P){case 1:Bn(o,5);break;case 4:Bn(o,10);break;case 3:Bn(o,6);break;default:Bn(o,2)}}}function Sc(o,u){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*u}function Bn(o,u){if(o.j.info("Error code "+u),u==2){var h=y(o.fb,o),g=o.Xa;const P=!g;g=new Un(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Xi(g,"https"),Zi(g),P?tg(g.toString(),h):ng(g.toString(),h)}else ot(2);o.G=0,o.l&&o.l.sa(u),Pc(o),Tc(o)}t.fb=function(o){o?(this.j.info("Successfully pinged google.com"),ot(2)):(this.j.info("Failed to ping google.com"),ot(1))};function Pc(o){if(o.G=0,o.ka=[],o.l){const u=sc(o.h);(u.length!=0||o.i.length!=0)&&(F(o.ka,u),F(o.ka,o.i),o.h.i.length=0,M(o.i),o.i.length=0),o.l.ra()}}function Cc(o,u,h){var g=h instanceof Un?Kt(h):new Un(h);if(g.g!="")u&&(g.g=u+"."+g.g),Yi(g,g.s);else{var P=l.location;g=P.protocol,u=u?u+"."+P.hostname:P.hostname,P=+P.port;var C=new Un(null);g&&Xi(C,g),u&&(C.g=u),P&&Yi(C,P),h&&(C.l=h),g=C}return h=o.D,u=o.ya,h&&u&&Se(g,h,u),Se(g,"VER",o.la),Xr(o,g),g}function Oc(o,u,h){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new ke(new es({eb:h})):new ke(o.pa),u.Ha(o.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function kc(){}t=kc.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function os(){}os.prototype.g=function(o,u){return new mt(o,u)};function mt(o,u){te.call(this),this.g=new Ec(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!j(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!j(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new ur(this)}O(mt,te),mt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},mt.prototype.close=function(){Uo(this.g)},mt.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=$e(o),o=h);u.i.push(new zp(u.Ya++,o)),u.G==3&&is(u)},mt.prototype.N=function(){this.g.l=null,delete this.j,Uo(this.g),delete this.g,mt.aa.N.call(this)};function Dc(o){Co.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const h in u){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}O(Dc,Co);function Nc(){Oo.call(this),this.status=1}O(Nc,Oo);function ur(o){this.g=o}O(ur,kc),ur.prototype.ua=function(){se(this.g,"a")},ur.prototype.ta=function(o){se(this.g,new Dc(o))},ur.prototype.sa=function(o){se(this.g,new Nc)},ur.prototype.ra=function(){se(this.g,"b")},os.prototype.createWebChannel=os.prototype.g,mt.prototype.send=mt.prototype.o,mt.prototype.open=mt.prototype.m,mt.prototype.close=mt.prototype.close,ed=function(){return new os},Zf=function(){return Ki()},Yf=Ln,Sa={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Wi.NO_ERROR=0,Wi.TIMEOUT=8,Wi.HTTP_ERROR=6,Is=Wi,Ql.COMPLETE="complete",Xf=Ql,ql.EventType=Br,Br.OPEN="a",Br.CLOSE="b",Br.ERROR="c",Br.MESSAGE="d",te.prototype.listen=te.prototype.K,ri=ql,ke.prototype.listenOnce=ke.prototype.L,ke.prototype.getLastError=ke.prototype.Ka,ke.prototype.getLastErrorCode=ke.prototype.Ba,ke.prototype.getStatus=ke.prototype.Z,ke.prototype.getResponseJson=ke.prototype.Oa,ke.prototype.getResponseText=ke.prototype.oa,ke.prototype.send=ke.prototype.ea,ke.prototype.setWithCredentials=ke.prototype.Ha,Jf=ke}).apply(typeof hs<"u"?hs:typeof self<"u"?self:typeof window<"u"?window:{});const vu="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Ze{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ze.UNAUTHENTICATED=new Ze(null),Ze.GOOGLE_CREDENTIALS=new Ze("google-credentials-uid"),Ze.FIRST_PARTY=new Ze("first-party-uid"),Ze.MOCK_USER=new Ze("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
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
 */let Mr="11.0.2";/**
 * @license
 * Copyright 2017 Google LLC
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
 */const er=new ll("@firebase/firestore");function pr(){return er.logLevel}function Y(t,...e){if(er.logLevel<=fe.DEBUG){const n=e.map(hl);er.debug(`Firestore (${Mr}): ${t}`,...n)}}function tr(t,...e){if(er.logLevel<=fe.ERROR){const n=e.map(hl);er.error(`Firestore (${Mr}): ${t}`,...n)}}function js(t,...e){if(er.logLevel<=fe.WARN){const n=e.map(hl);er.warn(`Firestore (${Mr}): ${t}`,...n)}}function hl(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function de(t="Unexpected state"){const e=`FIRESTORE (${Mr}) INTERNAL ASSERTION FAILED: `+t;throw tr(e),new Error(e)}function Ne(t,e){t||de()}function Re(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const U={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class re extends hn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Qn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class td{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class dv{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ze.UNAUTHENTICATED))}shutdown(){}}class pv{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class gv{constructor(e){this.t=e,this.currentUser=Ze.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ne(this.o===void 0);let r=this.i;const i=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let s=new Qn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Qn,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},l=c=>{Y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(Y("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Qn)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ne(typeof r.accessToken=="string"),new td(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ne(e===null||typeof e=="string"),new Ze(e)}}class mv{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Ze.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class _v{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new mv(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ze.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class yv{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class vv{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Ne(this.o===void 0);const r=s=>{s.error!=null&&Y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.R;return this.R=s.token,Y("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{Y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):Y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ne(typeof n.token=="string"),this.R=n.token,new yv(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function Ev(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class nd{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=Ev(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Ie(t,e){return t<e?-1:t>e?1:0}function Rr(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Ue{static now(){return Ue.fromMillis(Date.now())}static fromDate(e){return Ue.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ue(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new re(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new re(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new re(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new re(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ie(this.nanoseconds,e.nanoseconds):Ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Pe{static fromTimestamp(e){return new Pe(e)}static min(){return new Pe(new Ue(0,0))}static max(){return new Pe(new Ue(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Ri{constructor(e,n,r){n===void 0?n=0:n>e.length&&de(),r===void 0?r=e.length-n:r>e.length-n&&de(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ri.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ri?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),a=n.get(i);if(s<a)return-1;if(s>a)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class De extends Ri{construct(e,n,r){return new De(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new re(U.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new De(n)}static emptyPath(){return new De([])}}const Tv=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ge extends Ri{construct(e,n,r){return new Ge(e,n,r)}static isValidIdentifier(e){return Tv.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ge.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ge(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new re(U.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new re(U.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new re(U.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else l==="`"?(a=!a,i++):l!=="."||a?(r+=l,i++):(s(),i++)}if(s(),a)throw new re(U.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ge(n)}static emptyPath(){return new Ge([])}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class le{constructor(e){this.path=e}static fromPath(e){return new le(De.fromString(e))}static fromName(e){return new le(De.fromString(e).popFirst(5))}static empty(){return new le(De.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&De.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return De.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new le(new De(e.slice()))}}function Iv(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Pe.fromTimestamp(r===1e9?new Ue(n+1,0):new Ue(n,r));return new Dn(i,le.empty(),e)}function wv(t){return new Dn(t.readTime,t.key,-1)}class Dn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Dn(Pe.min(),le.empty(),-1)}static max(){return new Dn(Pe.max(),le.empty(),-1)}}function Av(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=le.comparator(t.documentKey,e.documentKey),n!==0?n:Ie(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const bv="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Rv{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */async function fl(t){if(t.code!==U.FAILED_PRECONDITION||t.message!==bv)throw t;Y("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class x{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&de(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new x((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof x?n:x.resolve(n)}catch(n){return x.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):x.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):x.reject(n)}static resolve(e){return new x((n,r)=>{n(e)})}static reject(e){return new x((n,r)=>{r(e)})}static waitFor(e){return new x((n,r)=>{let i=0,s=0,a=!1;e.forEach(l=>{++i,l.next(()=>{++s,a&&s===i&&n()},c=>r(c))}),a=!0,s===i&&n()})}static or(e){let n=x.resolve(!1);for(const r of e)n=n.next(i=>i?x.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new x((r,i)=>{const s=e.length,a=new Array(s);let l=0;for(let c=0;c<s;c++){const f=c;n(e[f]).next(d=>{a[f]=d,++l,l===s&&r(a)},d=>i(d))}})}static doWhile(e,n){return new x((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Sv(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ui(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class dl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}dl.oe=-1;function pl(t){return t==null}function $s(t){return t===0&&1/t==-1/0}function Pv(t){return typeof t=="number"&&Number.isInteger(t)&&!$s(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function Cv(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Eu(e)),e=Ov(t.get(n),e);return Eu(e)}function Ov(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function Eu(t){return t+""}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function Tu(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Lr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function rd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class pt{constructor(e,n){this.comparator=e,this.root=n||qe.EMPTY}insert(e,n){return new pt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,qe.BLACK,null,null))}remove(e){return new pt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,qe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new fs(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new fs(this.root,e,this.comparator,!1)}getReverseIterator(){return new fs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new fs(this.root,e,this.comparator,!0)}}class fs{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class qe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??qe.RED,this.left=i??qe.EMPTY,this.right=s??qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new qe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return qe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return qe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw de();const e=this.left.check();if(e!==this.right.check())throw de();return e+(this.isRed()?0:1)}}qe.EMPTY=null,qe.RED=!0,qe.BLACK=!1;qe.EMPTY=new class{constructor(){this.size=0}get key(){throw de()}get value(){throw de()}get color(){throw de()}get left(){throw de()}get right(){throw de()}copy(e,n,r,i,s){return this}insert(e,n,r){return new qe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Ke{constructor(e){this.comparator=e,this.data=new pt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Iu(this.data.getIterator())}getIteratorFrom(e){return new Iu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ke)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ke(this.comparator);return n.data=e,n}}class Iu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Ct{constructor(e){this.fields=e,e.sort(Ge.comparator)}static empty(){return new Ct([])}unionWith(e){let n=new Ke(Ge.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ct(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Rr(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class kv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class qt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new kv("Invalid base64 string: "+s):s}}(e);return new qt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s}(e);return new qt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}qt.EMPTY_BYTE_STRING=new qt("");const Dv=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function nr(t){if(Ne(!!t),typeof t=="string"){let e=0;const n=Dv.exec(t);if(Ne(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ze(t.seconds),nanos:ze(t.nanos)}}function ze(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Sr(t){return typeof t=="string"?qt.fromBase64String(t):qt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function gl(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ml(t){const e=t.mapValue.fields.__previous_value__;return gl(e)?ml(e):e}function Hs(t){const e=nr(t.mapValue.fields.__local_write_time__.timestampValue);return new Ue(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Nv{constructor(e,n,r,i,s,a,l,c,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=f}}class qs{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new qs("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof qs&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const ds={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function rr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?gl(t)?4:xv(t)?9007199254740991:Vv(t)?10:11:de()}function zt(t,e){if(t===e)return!0;const n=rr(t);if(n!==rr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Hs(t).isEqual(Hs(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const a=nr(i.timestampValue),l=nr(s.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Sr(i.bytesValue).isEqual(Sr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return ze(i.geoPointValue.latitude)===ze(s.geoPointValue.latitude)&&ze(i.geoPointValue.longitude)===ze(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ze(i.integerValue)===ze(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const a=ze(i.doubleValue),l=ze(s.doubleValue);return a===l?$s(a)===$s(l):isNaN(a)&&isNaN(l)}return!1}(t,e);case 9:return Rr(t.arrayValue.values||[],e.arrayValue.values||[],zt);case 10:case 11:return function(i,s){const a=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Tu(a)!==Tu(l))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(l[c]===void 0||!zt(a[c],l[c])))return!1;return!0}(t,e);default:return de()}}function Si(t,e){return(t.values||[]).find(n=>zt(n,e))!==void 0}function Pr(t,e){if(t===e)return 0;const n=rr(t),r=rr(e);if(n!==r)return Ie(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ie(t.booleanValue,e.booleanValue);case 2:return function(s,a){const l=ze(s.integerValue||s.doubleValue),c=ze(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return wu(t.timestampValue,e.timestampValue);case 4:return wu(Hs(t),Hs(e));case 5:return Ie(t.stringValue,e.stringValue);case 6:return function(s,a){const l=Sr(s),c=Sr(a);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(s,a){const l=s.split("/"),c=a.split("/");for(let f=0;f<l.length&&f<c.length;f++){const d=Ie(l[f],c[f]);if(d!==0)return d}return Ie(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,a){const l=Ie(ze(s.latitude),ze(a.latitude));return l!==0?l:Ie(ze(s.longitude),ze(a.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Au(t.arrayValue,e.arrayValue);case 10:return function(s,a){var l,c,f,d;const p=s.fields||{},y=a.fields||{},I=(l=p.value)===null||l===void 0?void 0:l.arrayValue,O=(c=y.value)===null||c===void 0?void 0:c.arrayValue,M=Ie(((f=I==null?void 0:I.values)===null||f===void 0?void 0:f.length)||0,((d=O==null?void 0:O.values)===null||d===void 0?void 0:d.length)||0);return M!==0?M:Au(I,O)}(t.mapValue,e.mapValue);case 11:return function(s,a){if(s===ds.mapValue&&a===ds.mapValue)return 0;if(s===ds.mapValue)return 1;if(a===ds.mapValue)return-1;const l=s.fields||{},c=Object.keys(l),f=a.fields||{},d=Object.keys(f);c.sort(),d.sort();for(let p=0;p<c.length&&p<d.length;++p){const y=Ie(c[p],d[p]);if(y!==0)return y;const I=Pr(l[c[p]],f[d[p]]);if(I!==0)return I}return Ie(c.length,d.length)}(t.mapValue,e.mapValue);default:throw de()}}function wu(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ie(t,e);const n=nr(t),r=nr(e),i=Ie(n.seconds,r.seconds);return i!==0?i:Ie(n.nanos,r.nanos)}function Au(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Pr(n[i],r[i]);if(s)return s}return Ie(n.length,r.length)}function Cr(t){return Pa(t)}function Pa(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=nr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Sr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return le.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Pa(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const a of r)s?s=!1:i+=",",i+=`${a}:${Pa(n.fields[a])}`;return i+"}"}(t.mapValue):de()}function ws(t){switch(rr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ml(t);return e?16+ws(e):16;case 5:return 2*t.stringValue.length;case 6:return Sr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+ws(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return Lr(r.fields,(s,a)=>{i+=s.length+ws(a)}),i}(t.mapValue);default:throw de()}}function Ca(t){return!!t&&"integerValue"in t}function _l(t){return!!t&&"arrayValue"in t}function As(t){return!!t&&"mapValue"in t}function Vv(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function fi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Lr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=fi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=fi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function xv(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Pt{constructor(e){this.value=e}static empty(){return new Pt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!As(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=fi(n)}setAll(e){let n=Ge.emptyPath(),r={},i=[];e.forEach((a,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,i),r={},i=[],n=l.popLast()}a?r[l.lastSegment()]=fi(a):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());As(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return zt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];As(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Lr(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Pt(fi(this.value))}}function id(t){const e=[];return Lr(t.fields,(n,r)=>{const i=new Ge([n]);if(As(r)){const s=id(r.mapValue).fields;if(s.length===0)e.push(i);else for(const a of s)e.push(i.child(a))}else e.push(i)}),new Ct(e)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Rt{constructor(e,n,r,i,s,a,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=a,this.documentState=l}static newInvalidDocument(e){return new Rt(e,0,Pe.min(),Pe.min(),Pe.min(),Pt.empty(),0)}static newFoundDocument(e,n,r,i){return new Rt(e,1,n,Pe.min(),r,i,0)}static newNoDocument(e,n){return new Rt(e,2,n,Pe.min(),Pe.min(),Pt.empty(),0)}static newUnknownDocument(e,n){return new Rt(e,3,n,Pe.min(),Pe.min(),Pt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Pe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Pt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Pt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Pe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Rt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Rt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class zs{constructor(e,n){this.position=e,this.inclusive=n}}function bu(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],a=t.position[i];if(s.field.isKeyField()?r=le.comparator(le.fromName(a.referenceValue),n.key):r=Pr(a,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ru(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!zt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class Gs{constructor(e,n="asc"){this.field=e,this.dir=n}}function Mv(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class sd{}class Fe extends sd{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Fv(e,n,r):n==="array-contains"?new jv(e,r):n==="in"?new $v(e,r):n==="not-in"?new Hv(e,r):n==="array-contains-any"?new qv(e,r):new Fe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Uv(e,r):new Bv(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Pr(n,this.value)):n!==null&&rr(this.value)===rr(n)&&this.matchesComparison(Pr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return de()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Nn extends sd{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Nn(e,n)}matches(e){return od(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function od(t){return t.op==="and"}function ad(t){return Lv(t)&&od(t)}function Lv(t){for(const e of t.filters)if(e instanceof Nn)return!1;return!0}function Oa(t){if(t instanceof Fe)return t.field.canonicalString()+t.op.toString()+Cr(t.value);if(ad(t))return t.filters.map(e=>Oa(e)).join(",");{const e=t.filters.map(n=>Oa(n)).join(",");return`${t.op}(${e})`}}function ld(t,e){return t instanceof Fe?function(r,i){return i instanceof Fe&&r.op===i.op&&r.field.isEqual(i.field)&&zt(r.value,i.value)}(t,e):t instanceof Nn?function(r,i){return i instanceof Nn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,a,l)=>s&&ld(a,i.filters[l]),!0):!1}(t,e):void de()}function cd(t){return t instanceof Fe?function(n){return`${n.field.canonicalString()} ${n.op} ${Cr(n.value)}`}(t):t instanceof Nn?function(n){return n.op.toString()+" {"+n.getFilters().map(cd).join(" ,")+"}"}(t):"Filter"}class Fv extends Fe{constructor(e,n,r){super(e,n,r),this.key=le.fromName(r.referenceValue)}matches(e){const n=le.comparator(e.key,this.key);return this.matchesComparison(n)}}class Uv extends Fe{constructor(e,n){super(e,"in",n),this.keys=ud("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Bv extends Fe{constructor(e,n){super(e,"not-in",n),this.keys=ud("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function ud(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>le.fromName(r.referenceValue))}class jv extends Fe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return _l(n)&&Si(n.arrayValue,this.value)}}class $v extends Fe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Si(this.value.arrayValue,n)}}class Hv extends Fe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Si(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Si(this.value.arrayValue,n)}}class qv extends Fe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!_l(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Si(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class zv{constructor(e,n=null,r=[],i=[],s=null,a=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=a,this.endAt=l,this.ue=null}}function Su(t,e=null,n=[],r=[],i=null,s=null,a=null){return new zv(t,e,n,r,i,s,a)}function yl(t){const e=Re(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Oa(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),pl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Cr(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Cr(r)).join(",")),e.ue=n}return e.ue}function vl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Mv(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!ld(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ru(t.startAt,e.startAt)&&Ru(t.endAt,e.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class go{constructor(e,n=null,r=[],i=[],s=null,a="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=a,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Gv(t,e,n,r,i,s,a,l){return new go(t,e,n,r,i,s,a,l)}function Kv(t){return new go(t)}function Pu(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Wv(t){return t.collectionGroup!==null}function di(t){const e=Re(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new Ke(Ge.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(f=>{f.isInequality()&&(l=l.add(f.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Gs(s,r))}),n.has(Ge.keyField().canonicalString())||e.ce.push(new Gs(Ge.keyField(),r))}return e.ce}function Jn(t){const e=Re(t);return e.le||(e.le=Qv(e,di(t))),e.le}function Qv(t,e){if(t.limitType==="F")return Su(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Gs(i.field,s)});const n=t.endAt?new zs(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new zs(t.startAt.position,t.startAt.inclusive):null;return Su(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function ka(t,e,n){return new go(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function hd(t,e){return vl(Jn(t),Jn(e))&&t.limitType===e.limitType}function fd(t){return`${yl(Jn(t))}|lt:${t.limitType}`}function ei(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>cd(i)).join(", ")}]`),pl(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Cr(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Cr(i)).join(",")),`Target(${r})`}(Jn(t))}; limitType=${t.limitType})`}function El(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):le.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of di(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(a,l,c){const f=bu(a,l,c);return a.inclusive?f<=0:f<0}(r.startAt,di(r),i)||r.endAt&&!function(a,l,c){const f=bu(a,l,c);return a.inclusive?f>=0:f>0}(r.endAt,di(r),i))}(t,e)}function Jv(t){return(e,n)=>{let r=!1;for(const i of di(t)){const s=Xv(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Xv(t,e,n){const r=t.field.isKeyField()?le.comparator(e.key,n.key):function(s,a,l){const c=a.data.field(s),f=l.data.field(s);return c!==null&&f!==null?Pr(c,f):de()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return de()}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class or{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Lr(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return rd(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Yv=new pt(le.comparator);function Ks(){return Yv}const dd=new pt(le.comparator);function ps(...t){let e=dd;for(const n of t)e=e.insert(n.key,n);return e}function pd(t){let e=dd;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function zn(){return pi()}function gd(){return pi()}function pi(){return new or(t=>t.toString(),(t,e)=>t.isEqual(e))}const Zv=new pt(le.comparator),eE=new Ke(le.comparator);function tt(...t){let e=eE;for(const n of t)e=e.add(n);return e}const tE=new Ke(Ie);function nE(){return tE}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function Tl(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:$s(e)?"-0":e}}function md(t){return{integerValue:""+t}}function rE(t,e){return Pv(e)?md(e):Tl(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class mo{constructor(){this._=void 0}}function iE(t,e,n){return t instanceof Ws?function(i,s){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&gl(s)&&(s=ml(s)),s&&(a.fields.__previous_value__=s),{mapValue:a}}(n,e):t instanceof Pi?yd(t,e):t instanceof Ci?vd(t,e):function(i,s){const a=_d(i,s),l=Cu(a)+Cu(i.Pe);return Ca(a)&&Ca(i.Pe)?md(l):Tl(i.serializer,l)}(t,e)}function sE(t,e,n){return t instanceof Pi?yd(t,e):t instanceof Ci?vd(t,e):n}function _d(t,e){return t instanceof Qs?function(r){return Ca(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Ws extends mo{}class Pi extends mo{constructor(e){super(),this.elements=e}}function yd(t,e){const n=Ed(e);for(const r of t.elements)n.some(i=>zt(i,r))||n.push(r);return{arrayValue:{values:n}}}class Ci extends mo{constructor(e){super(),this.elements=e}}function vd(t,e){let n=Ed(e);for(const r of t.elements)n=n.filter(i=>!zt(i,r));return{arrayValue:{values:n}}}class Qs extends mo{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Cu(t){return ze(t.integerValue||t.doubleValue)}function Ed(t){return _l(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function oE(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Pi&&i instanceof Pi||r instanceof Ci&&i instanceof Ci?Rr(r.elements,i.elements,zt):r instanceof Qs&&i instanceof Qs?zt(r.Pe,i.Pe):r instanceof Ws&&i instanceof Ws}(t.transform,e.transform)}class aE{constructor(e,n){this.version=e,this.transformResults=n}}class on{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new on}static exists(e){return new on(void 0,e)}static updateTime(e){return new on(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function bs(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class _o{}function Td(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new wd(t.key,on.none()):new Bi(t.key,t.data,on.none());{const n=t.data,r=Pt.empty();let i=new Ke(Ge.comparator);for(let s of e.fields)if(!i.has(s)){let a=n.field(s);a===null&&s.length>1&&(s=s.popLast(),a=n.field(s)),a===null?r.delete(s):r.set(s,a),i=i.add(s)}return new ar(t.key,r,new Ct(i.toArray()),on.none())}}function lE(t,e,n){t instanceof Bi?function(i,s,a){const l=i.value.clone(),c=ku(i.fieldTransforms,s,a.transformResults);l.setAll(c),s.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(t,e,n):t instanceof ar?function(i,s,a){if(!bs(i.precondition,s))return void s.convertToUnknownDocument(a.version);const l=ku(i.fieldTransforms,s,a.transformResults),c=s.data;c.setAll(Id(i)),c.setAll(l),s.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(t,e,n):function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,n)}function gi(t,e,n,r){return t instanceof Bi?function(s,a,l,c){if(!bs(s.precondition,a))return l;const f=s.value.clone(),d=Du(s.fieldTransforms,c,a);return f.setAll(d),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),null}(t,e,n,r):t instanceof ar?function(s,a,l,c){if(!bs(s.precondition,a))return l;const f=Du(s.fieldTransforms,c,a),d=a.data;return d.setAll(Id(s)),d.setAll(f),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,a,l){return bs(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(t,e,n)}function cE(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=_d(r.transform,i||null);s!=null&&(n===null&&(n=Pt.empty()),n.set(r.field,s))}return n||null}function Ou(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Rr(r,i,(s,a)=>oE(s,a))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Bi extends _o{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ar extends _o{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Id(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function ku(t,e,n){const r=new Map;Ne(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],a=s.transform,l=e.data.field(s.field);r.set(s.field,sE(a,l,n[i]))}return r}function Du(t,e,n){const r=new Map;for(const i of t){const s=i.transform,a=n.data.field(i.field);r.set(i.field,iE(s,a,e))}return r}class wd extends _o{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class uE extends _o{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class hE{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&lE(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=gi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=gi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=gd();return this.mutations.forEach(i=>{const s=e.get(i.key),a=s.overlayedDocument;let l=this.applyToLocalView(a,s.mutatedFields);l=n.has(i.key)?null:l;const c=Td(a,l);c!==null&&r.set(i.key,c),a.isValidDocument()||a.convertToNoDocument(Pe.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),tt())}isEqual(e){return this.batchId===e.batchId&&Rr(this.mutations,e.mutations,(n,r)=>Ou(n,r))&&Rr(this.baseMutations,e.baseMutations,(n,r)=>Ou(n,r))}}class Il{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Ne(e.mutations.length===r.length);let i=function(){return Zv}();const s=e.mutations;for(let a=0;a<s.length;a++)i=i.insert(s[a].key,r[a].version);return new Il(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class fE{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */var Me,me;function dE(t){switch(t){default:return de();case U.CANCELLED:case U.UNKNOWN:case U.DEADLINE_EXCEEDED:case U.RESOURCE_EXHAUSTED:case U.INTERNAL:case U.UNAVAILABLE:case U.UNAUTHENTICATED:return!1;case U.INVALID_ARGUMENT:case U.NOT_FOUND:case U.ALREADY_EXISTS:case U.PERMISSION_DENIED:case U.FAILED_PRECONDITION:case U.ABORTED:case U.OUT_OF_RANGE:case U.UNIMPLEMENTED:case U.DATA_LOSS:return!0}}function pE(t){if(t===void 0)return tr("GRPC error has no .code"),U.UNKNOWN;switch(t){case Me.OK:return U.OK;case Me.CANCELLED:return U.CANCELLED;case Me.UNKNOWN:return U.UNKNOWN;case Me.DEADLINE_EXCEEDED:return U.DEADLINE_EXCEEDED;case Me.RESOURCE_EXHAUSTED:return U.RESOURCE_EXHAUSTED;case Me.INTERNAL:return U.INTERNAL;case Me.UNAVAILABLE:return U.UNAVAILABLE;case Me.UNAUTHENTICATED:return U.UNAUTHENTICATED;case Me.INVALID_ARGUMENT:return U.INVALID_ARGUMENT;case Me.NOT_FOUND:return U.NOT_FOUND;case Me.ALREADY_EXISTS:return U.ALREADY_EXISTS;case Me.PERMISSION_DENIED:return U.PERMISSION_DENIED;case Me.FAILED_PRECONDITION:return U.FAILED_PRECONDITION;case Me.ABORTED:return U.ABORTED;case Me.OUT_OF_RANGE:return U.OUT_OF_RANGE;case Me.UNIMPLEMENTED:return U.UNIMPLEMENTED;case Me.DATA_LOSS:return U.DATA_LOSS;default:return de()}}(me=Me||(Me={}))[me.OK=0]="OK",me[me.CANCELLED=1]="CANCELLED",me[me.UNKNOWN=2]="UNKNOWN",me[me.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",me[me.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",me[me.NOT_FOUND=5]="NOT_FOUND",me[me.ALREADY_EXISTS=6]="ALREADY_EXISTS",me[me.PERMISSION_DENIED=7]="PERMISSION_DENIED",me[me.UNAUTHENTICATED=16]="UNAUTHENTICATED",me[me.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",me[me.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",me[me.ABORTED=10]="ABORTED",me[me.OUT_OF_RANGE=11]="OUT_OF_RANGE",me[me.UNIMPLEMENTED=12]="UNIMPLEMENTED",me[me.INTERNAL=13]="INTERNAL",me[me.UNAVAILABLE=14]="UNAVAILABLE",me[me.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
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
 */new Qf([4294967295,4294967295],0);class gE{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Da(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function mE(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function _E(t,e){return Da(t,e.toTimestamp())}function Er(t){return Ne(!!t),Pe.fromTimestamp(function(n){const r=nr(n);return new Ue(r.seconds,r.nanos)}(t))}function Ad(t,e){return Na(t,e).canonicalString()}function Na(t,e){const n=function(i){return new De(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function yE(t){const e=De.fromString(t);return Ne(RE(e)),e}function Va(t,e){return Ad(t.databaseId,e.path)}function vE(t){const e=yE(t);return e.length===4?De.emptyPath():TE(e)}function EE(t){return new De(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function TE(t){return Ne(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Nu(t,e,n){return{name:Va(t,e),fields:n.value.mapValue.fields}}function IE(t,e){let n;if(e instanceof Bi)n={update:Nu(t,e.key,e.value)};else if(e instanceof wd)n={delete:Va(t,e.key)};else if(e instanceof ar)n={update:Nu(t,e.key,e.data),updateMask:bE(e.fieldMask)};else{if(!(e instanceof uE))return de();n={verify:Va(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,a){const l=a.transform;if(l instanceof Ws)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Pi)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Ci)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Qs)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw de()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:_E(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:de()}(t,e.precondition)),n}function wE(t,e){return t&&t.length>0?(Ne(e!==void 0),t.map(n=>function(i,s){let a=i.updateTime?Er(i.updateTime):Er(s);return a.isEqual(Pe.min())&&(a=Er(s)),new aE(a,i.transformResults||[])}(n,e))):[]}function AE(t){let e=vE(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Ne(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(p){const y=bd(p);return y instanceof Nn&&ad(y)?y.getFilters():[y]}(n.where));let a=[];n.orderBy&&(a=function(p){return p.map(y=>function(O){return new Gs(gr(O.field),function(F){switch(F){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(O.direction))}(y))}(n.orderBy));let l=null;n.limit&&(l=function(p){let y;return y=typeof p=="object"?p.value:p,pl(y)?null:y}(n.limit));let c=null;n.startAt&&(c=function(p){const y=!!p.before,I=p.values||[];return new zs(I,y)}(n.startAt));let f=null;return n.endAt&&(f=function(p){const y=!p.before,I=p.values||[];return new zs(I,y)}(n.endAt)),Gv(e,i,a,s,l,"F",c,f)}function bd(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=gr(n.unaryFilter.field);return Fe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=gr(n.unaryFilter.field);return Fe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=gr(n.unaryFilter.field);return Fe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=gr(n.unaryFilter.field);return Fe.create(a,"!=",{nullValue:"NULL_VALUE"});default:return de()}}(t):t.fieldFilter!==void 0?function(n){return Fe.create(gr(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return de()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Nn.create(n.compositeFilter.filters.map(r=>bd(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return de()}}(n.compositeFilter.op))}(t):de()}function gr(t){return Ge.fromServerFormat(t.fieldPath)}function bE(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function RE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class SE{constructor(e){this.ht=e}}function PE(t){const e=AE({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ka(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class CE{constructor(){this.ln=new OE}addToCollectionParentIndex(e,n){return this.ln.add(n),x.resolve()}getCollectionParents(e,n){return x.resolve(this.ln.getEntries(n))}addFieldIndex(e,n){return x.resolve()}deleteFieldIndex(e,n){return x.resolve()}deleteAllFieldIndexes(e){return x.resolve()}createTargetIndexes(e,n){return x.resolve()}getDocumentsMatchingTarget(e,n){return x.resolve(null)}getIndexType(e,n){return x.resolve(0)}getFieldIndexes(e,n){return x.resolve([])}getNextCollectionGroupToUpdate(e){return x.resolve(null)}getMinOffset(e,n){return x.resolve(Dn.min())}getMinOffsetFromCollectionGroup(e,n){return x.resolve(Dn.min())}updateCollectionGroup(e,n,r){return x.resolve()}updateIndexEntries(e,n){return x.resolve()}}class OE{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ke(De.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ke(De.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */const Vu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class ft{static withCacheSize(e){return new ft(e,ft.DEFAULT_COLLECTION_PERCENTILE,ft.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */ft.DEFAULT_COLLECTION_PERCENTILE=10,ft.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ft.DEFAULT=new ft(41943040,ft.DEFAULT_COLLECTION_PERCENTILE,ft.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ft.DISABLED=new ft(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Or{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new Or(0)}static Qn(){return new Or(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function xu([t,e],[n,r]){const i=Ie(t,n);return i===0?Ie(e,r):i}class kE{constructor(e){this.Gn=e,this.buffer=new Ke(xu),this.zn=0}jn(){return++this.zn}Hn(e){const n=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();xu(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class DE{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){Y("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ui(n)?Y("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await fl(n)}await this.Yn(3e5)})}}class NE{constructor(e,n){this.Zn=e,this.params=n}calculateTargetCount(e,n){return this.Zn.Xn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return x.resolve(dl.oe);const r=new kE(n);return this.Zn.forEachTarget(e,i=>r.Hn(i.sequenceNumber)).next(()=>this.Zn.er(e,i=>r.Hn(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Zn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Zn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(Y("LruGarbageCollector","Garbage collection skipped; disabled"),x.resolve(Vu)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(Y("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Vu):this.tr(e,n))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,n){let r,i,s,a,l,c,f;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(Y("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,a=Date.now(),this.nthSequenceNumber(e,i))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(s=p,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(f=Date.now(),pr()<=fe.DEBUG&&Y("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-d}ms
	Determined least recently used ${i} in `+(l-a)+`ms
	Removed ${s} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(f-c)+`ms
Total Duration: ${f-d}ms`),x.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:p})))}}function VE(t,e){return new NE(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class xE{constructor(){this.changes=new or(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Rt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?x.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
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
 *//**
 * @license
 * Copyright 2022 Google LLC
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
 */class ME{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class LE{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&gi(r.mutation,i,Ct.empty(),Ue.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,tt()).next(()=>r))}getLocalViewOfDocuments(e,n,r=tt()){const i=zn();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let a=ps();return s.forEach((l,c)=>{a=a.insert(l,c.overlayedDocument)}),a}))}getOverlayedDocuments(e,n){const r=zn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,tt()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((a,l)=>{n.set(a,l)})})}computeViews(e,n,r,i){let s=Ks();const a=pi(),l=function(){return pi()}();return n.forEach((c,f)=>{const d=r.get(f.key);i.has(f.key)&&(d===void 0||d.mutation instanceof ar)?s=s.insert(f.key,f):d!==void 0?(a.set(f.key,d.mutation.getFieldMask()),gi(d.mutation,f,d.mutation.getFieldMask(),Ue.now())):a.set(f.key,Ct.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((f,d)=>a.set(f,d)),n.forEach((f,d)=>{var p;return l.set(f,new ME(d,(p=a.get(f))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=pi();let i=new pt((a,l)=>a-l),s=tt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(a=>{for(const l of a)l.keys().forEach(c=>{const f=n.get(c);if(f===null)return;let d=r.get(c)||Ct.empty();d=l.applyToLocalView(f,d),r.set(c,d);const p=(i.get(l.batchId)||tt()).add(c);i=i.insert(l.batchId,p)})}).next(()=>{const a=[],l=i.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),f=c.key,d=c.value,p=gd();d.forEach(y=>{if(!s.has(y)){const I=Td(n.get(y),r.get(y));I!==null&&p.set(y,I),s=s.add(y)}}),a.push(this.documentOverlayCache.saveOverlays(e,f,p))}return x.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(a){return le.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Wv(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):x.resolve(zn());let l=-1,c=s;return a.next(f=>x.forEach(f,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(d)?x.resolve():this.remoteDocumentCache.getEntry(e,d).next(y=>{c=c.insert(d,y)}))).next(()=>this.populateOverlays(e,f,s)).next(()=>this.computeViews(e,c,f,tt())).next(d=>({batchId:l,changes:pd(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new le(n)).next(r=>{let i=ps();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let a=ps();return this.indexManager.getCollectionParents(e,s).next(l=>x.forEach(l,c=>{const f=function(p,y){return new go(y,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,c.child(s));return this.getDocumentsMatchingCollectionQuery(e,f,r,i).next(d=>{d.forEach((p,y)=>{a=a.insert(p,y)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(a=>{s.forEach((c,f)=>{const d=f.getKey();a.get(d)===null&&(a=a.insert(d,Rt.newInvalidDocument(d)))});let l=ps();return a.forEach((c,f)=>{const d=s.get(c);d!==void 0&&gi(d.mutation,f,Ct.empty(),Ue.now()),El(n,f)&&(l=l.insert(c,f))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class FE{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,n){return x.resolve(this.Tr.get(n))}saveBundleMetadata(e,n){return this.Tr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Er(i.createTime)}}(n)),x.resolve()}getNamedQuery(e,n){return x.resolve(this.Ir.get(n))}saveNamedQuery(e,n){return this.Ir.set(n.name,function(i){return{name:i.name,query:PE(i.bundledQuery),readTime:Er(i.readTime)}}(n)),x.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class UE{constructor(){this.overlays=new pt(le.comparator),this.Er=new Map}getOverlay(e,n){return x.resolve(this.overlays.get(n))}getOverlays(e,n){const r=zn();return x.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.Tt(e,n,s)}),x.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Er.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Er.delete(r)),x.resolve()}getOverlaysForCollection(e,n,r){const i=zn(),s=n.length+1,a=new le(n.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const c=l.getNext().value,f=c.getKey();if(!n.isPrefixOf(f.path))break;f.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return x.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new pt((f,d)=>f-d);const a=this.overlays.getIterator();for(;a.hasNext();){const f=a.getNext().value;if(f.getKey().getCollectionGroup()===n&&f.largestBatchId>r){let d=s.get(f.largestBatchId);d===null&&(d=zn(),s=s.insert(f.largestBatchId,d)),d.set(f.getKey(),f)}}const l=zn(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((f,d)=>l.set(f,d)),!(l.size()>=i)););return x.resolve(l)}Tt(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.Er.get(i.largestBatchId).delete(r.key);this.Er.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new fE(n,r));let s=this.Er.get(n);s===void 0&&(s=tt(),this.Er.set(n,s)),this.Er.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class BE{constructor(){this.sessionToken=qt.EMPTY_BYTE_STRING}getSessionToken(e){return x.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,x.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class wl{constructor(){this.dr=new Ke(Le.Ar),this.Rr=new Ke(Le.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,n){const r=new Le(e,n);this.dr=this.dr.add(r),this.Rr=this.Rr.add(r)}mr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.gr(new Le(e,n))}pr(e,n){e.forEach(r=>this.removeReference(r,n))}yr(e){const n=new le(new De([])),r=new Le(n,e),i=new Le(n,e+1),s=[];return this.Rr.forEachInRange([r,i],a=>{this.gr(a),s.push(a.key)}),s}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const n=new le(new De([])),r=new Le(n,e),i=new Le(n,e+1);let s=tt();return this.Rr.forEachInRange([r,i],a=>{s=s.add(a.key)}),s}containsKey(e){const n=new Le(e,0),r=this.dr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Le{constructor(e,n){this.key=e,this.br=n}static Ar(e,n){return le.comparator(e.key,n.key)||Ie(e.br,n.br)}static Vr(e,n){return Ie(e.br,n.br)||le.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class jE{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Dr=1,this.vr=new Ke(Le.Ar)}checkEmpty(e){return x.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new hE(s,n,r,i);this.mutationQueue.push(a);for(const l of i)this.vr=this.vr.add(new Le(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return x.resolve(a)}lookupMutationBatch(e,n){return x.resolve(this.Cr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Fr(r),s=i<0?0:i;return x.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return x.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return x.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Le(n,0),i=new Le(n,Number.POSITIVE_INFINITY),s=[];return this.vr.forEachInRange([r,i],a=>{const l=this.Cr(a.br);s.push(l)}),x.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ke(Ie);return n.forEach(i=>{const s=new Le(i,0),a=new Le(i,Number.POSITIVE_INFINITY);this.vr.forEachInRange([s,a],l=>{r=r.add(l.br)})}),x.resolve(this.Mr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;le.isDocumentKey(s)||(s=s.child(""));const a=new Le(new le(s),0);let l=new Ke(Ie);return this.vr.forEachWhile(c=>{const f=c.key.path;return!!r.isPrefixOf(f)&&(f.length===i&&(l=l.add(c.br)),!0)},a),x.resolve(this.Mr(l))}Mr(e){const n=[];return e.forEach(r=>{const i=this.Cr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Ne(this.Or(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.vr;return x.forEach(n.mutations,i=>{const s=new Le(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.vr=r})}Ln(e){}containsKey(e,n){const r=new Le(n,0),i=this.vr.firstAfterOrEqual(r);return x.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,x.resolve()}Or(e,n){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const n=this.Fr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class $E{constructor(e){this.Nr=e,this.docs=function(){return new pt(le.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,a=this.Nr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return x.resolve(r?r.document.mutableCopy():Rt.newInvalidDocument(n))}getEntries(e,n){let r=Ks();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Rt.newInvalidDocument(i))}),x.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Ks();const a=n.path,l=new le(a.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:f,value:{document:d}}=c.getNext();if(!a.isPrefixOf(f.path))break;f.path.length>a.length+1||Av(wv(d),r)<=0||(i.has(d.key)||El(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return x.resolve(s)}getAllFromCollectionGroup(e,n,r,i){de()}Lr(e,n){return x.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new HE(this)}getSize(e){return x.resolve(this.size)}}class HE extends xE{constructor(e){super(),this.hr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.hr.addEntry(e,i)):this.hr.removeEntry(r)}),x.waitFor(n)}getFromCache(e,n){return this.hr.getEntry(e,n)}getAllFromCache(e,n){return this.hr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class qE{constructor(e){this.persistence=e,this.Br=new or(n=>yl(n),vl),this.lastRemoteSnapshotVersion=Pe.min(),this.highestTargetId=0,this.kr=0,this.qr=new wl,this.targetCount=0,this.Qr=Or.qn()}forEachTarget(e,n){return this.Br.forEach((r,i)=>n(i)),x.resolve()}getLastRemoteSnapshotVersion(e){return x.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return x.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),x.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.kr&&(this.kr=n),x.resolve()}Un(e){this.Br.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Qr=new Or(n),this.highestTargetId=n),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,n){return this.Un(n),this.targetCount+=1,x.resolve()}updateTargetData(e,n){return this.Un(n),x.resolve()}removeTargetData(e,n){return this.Br.delete(n.target),this.qr.yr(n.targetId),this.targetCount-=1,x.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Br.forEach((a,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Br.delete(a),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),x.waitFor(s).next(()=>i)}getTargetCount(e){return x.resolve(this.targetCount)}getTargetData(e,n){const r=this.Br.get(n)||null;return x.resolve(r)}addMatchingKeys(e,n,r){return this.qr.mr(n,r),x.resolve()}removeMatchingKeys(e,n,r){this.qr.pr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(a=>{s.push(i.markPotentiallyOrphaned(e,a))}),x.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.qr.yr(n),x.resolve()}getMatchingKeysForTargetId(e,n){const r=this.qr.Sr(n);return x.resolve(r)}containsKey(e,n){return x.resolve(this.qr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Rd{constructor(e,n){this.Kr={},this.overlays={},this.$r=new dl(0),this.Ur=!1,this.Ur=!0,this.Wr=new BE,this.referenceDelegate=e(this),this.Gr=new qE(this),this.indexManager=new CE,this.remoteDocumentCache=function(i){return new $E(i)}(r=>this.referenceDelegate.zr(r)),this.serializer=new SE(n),this.jr=new FE(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new UE,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Kr[e.toKey()];return r||(r=new jE(n,this.referenceDelegate),this.Kr[e.toKey()]=r),r}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,n,r){Y("MemoryPersistence","Starting transaction:",e);const i=new zE(this.$r.next());return this.referenceDelegate.Hr(),r(i).next(s=>this.referenceDelegate.Jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Yr(e,n){return x.or(Object.values(this.Kr).map(r=>()=>r.containsKey(e,n)))}}class zE extends Rv{constructor(e){super(),this.currentSequenceNumber=e}}class Al{constructor(e){this.persistence=e,this.Zr=new wl,this.Xr=null}static ei(e){return new Al(e)}get ti(){if(this.Xr)return this.Xr;throw de()}addReference(e,n,r){return this.Zr.addReference(r,n),this.ti.delete(r.toString()),x.resolve()}removeReference(e,n,r){return this.Zr.removeReference(r,n),this.ti.add(r.toString()),x.resolve()}markPotentiallyOrphaned(e,n){return this.ti.add(n.toString()),x.resolve()}removeTarget(e,n){this.Zr.yr(n.targetId).forEach(i=>this.ti.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.ti.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Hr(){this.Xr=new Set}Jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return x.forEach(this.ti,r=>{const i=le.fromPath(r);return this.ni(e,i).next(s=>{s||n.removeEntry(i,Pe.min())})}).next(()=>(this.Xr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ni(e,n).next(r=>{r?this.ti.delete(n.toString()):this.ti.add(n.toString())})}zr(e){return 0}ni(e,n){return x.or([()=>x.resolve(this.Zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Yr(e,n)])}}class Js{constructor(e,n){this.persistence=e,this.ri=new or(r=>Cv(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=VE(this,n)}static ei(e,n){return new Js(e,n)}Hr(){}Jr(e){return x.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}Xn(e){const n=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}nr(e){let n=0;return this.er(e,r=>{n++}).next(()=>n)}er(e,n){return x.forEach(this.ri,(r,i)=>this.ir(e,r,i).next(s=>s?x.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.Lr(e,a=>this.ir(e,a,n).next(l=>{l||(r++,s.removeEntry(a,Pe.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.ri.set(n,e.currentSequenceNumber),x.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.ri.set(r,e.currentSequenceNumber),x.resolve()}removeReference(e,n,r){return this.ri.set(r,e.currentSequenceNumber),x.resolve()}updateLimboDocument(e,n){return this.ri.set(n,e.currentSequenceNumber),x.resolve()}zr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=ws(e.data.value)),n}ir(e,n,r){return x.or([()=>this.persistence.Yr(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.ri.get(n);return x.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class bl{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Wi=r,this.Gi=i}static zi(e,n){let r=tt(),i=tt();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new bl(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class GE{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class KE{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return J_()?8:Sv(it())>0?6:4}()}initialize(e,n){this.Zi=e,this.indexManager=n,this.ji=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Xi(e,n).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.es(e,n,i,r).next(a=>{s.result=a})}).next(()=>{if(s.result)return;const a=new GE;return this.ts(e,n,a).next(l=>{if(s.result=l,this.Hi)return this.ns(e,n,a,l.size)})}).next(()=>s.result)}ns(e,n,r,i){return r.documentReadCount<this.Ji?(pr()<=fe.DEBUG&&Y("QueryEngine","SDK will not create cache indexes for query:",ei(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),x.resolve()):(pr()<=fe.DEBUG&&Y("QueryEngine","Query:",ei(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Yi*i?(pr()<=fe.DEBUG&&Y("QueryEngine","The SDK decides to create cache indexes for query:",ei(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Jn(n))):x.resolve())}Xi(e,n){if(Pu(n))return x.resolve(null);let r=Jn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=ka(n,null,"F"),r=Jn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const a=tt(...s);return this.Zi.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const f=this.rs(n,l);return this.ss(n,f,a,c.readTime)?this.Xi(e,ka(n,null,"F")):this.os(e,f,n,c)}))})))}es(e,n,r,i){return Pu(n)||i.isEqual(Pe.min())?x.resolve(null):this.Zi.getDocuments(e,r).next(s=>{const a=this.rs(n,s);return this.ss(n,a,r,i)?x.resolve(null):(pr()<=fe.DEBUG&&Y("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ei(n)),this.os(e,a,n,Iv(i,-1)).next(l=>l))})}rs(e,n){let r=new Ke(Jv(e));return n.forEach((i,s)=>{El(e,s)&&(r=r.add(s))}),r}ss(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ts(e,n,r){return pr()<=fe.DEBUG&&Y("QueryEngine","Using full collection scan to execute query:",ei(n)),this.Zi.getDocumentsMatchingQuery(e,n,Dn.min(),r)}os(e,n,r,i){return this.Zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class WE{constructor(e,n,r,i){this.persistence=e,this._s=n,this.serializer=i,this.us=new pt(Ie),this.cs=new or(s=>yl(s),vl),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(r)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new LE(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.us))}}function QE(t,e,n,r){return new WE(t,e,n,r)}async function Sd(t,e){const n=Re(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Ps(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const a=[],l=[];let c=tt();for(const f of i){a.push(f.batchId);for(const d of f.mutations)c=c.add(d.key)}for(const f of s){l.push(f.batchId);for(const d of f.mutations)c=c.add(d.key)}return n.localDocuments.getDocuments(r,c).next(f=>({Ts:f,removedBatchIds:a,addedBatchIds:l}))})})}function JE(t,e){const n=Re(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.hs.newChangeBuffer({trackRemovals:!0});return function(l,c,f,d){const p=f.batch,y=p.keys();let I=x.resolve();return y.forEach(O=>{I=I.next(()=>d.getEntry(c,O)).next(M=>{const F=f.docVersions.get(O);Ne(F!==null),M.version.compareTo(F)<0&&(p.applyToRemoteDocument(M,f),M.isValidDocument()&&(M.setReadTime(f.commitVersion),d.addEntry(M)))})}),I.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=tt();for(let f=0;f<l.mutationResults.length;++f)l.mutationResults[f].transformResults.length>0&&(c=c.add(l.batch.mutations[f].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function XE(t){const e=Re(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Gr.getLastRemoteSnapshotVersion(n))}function YE(t,e){const n=Re(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}class Mu{constructor(){this.activeTargetIds=nE()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ZE{constructor(){this._o=new Mu,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,n,r){this.ao[e]=n}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new Mu,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class eT{uo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class Lu{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){Y("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){Y("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let gs=null;function ra(){return gs===null?gs=function(){return 268435456+Math.round(2147483648*Math.random())}():gs++,"0x"+gs.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const tT={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
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
 */class nT{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Ye="WebChannelConnection";class rT extends class{get Co(){return!1}constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Fo=r+"://"+n.host,this.Mo=`projects/${i}/databases/${s}`,this.xo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}Oo(n,r,i,s,a){const l=ra(),c=this.No(n,r.toUriEncodedString());Y("RestConnection",`Sending RPC '${n}' ${l}:`,c,i);const f={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(f,s,a),this.Bo(n,c,f,i).then(d=>(Y("RestConnection",`Received RPC '${n}' ${l}: `,d),d),d=>{throw js("RestConnection",`RPC '${n}' ${l} failed with error: `,d,"url: ",c,"request:",i),d})}ko(n,r,i,s,a,l){return this.Oo(n,r,i,s,a)}Lo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Mr}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,a)=>n[a]=s),i&&i.headers.forEach((s,a)=>n[a]=s)}No(n,r){const i=tT[n];return`${this.Fo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,n,r,i){const s=ra();return new Promise((a,l)=>{const c=new Jf;c.setWithCredentials(!0),c.listenOnce(Xf.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Is.NO_ERROR:const d=c.getResponseJson();Y(Ye,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),a(d);break;case Is.TIMEOUT:Y(Ye,`RPC '${e}' ${s} timed out`),l(new re(U.DEADLINE_EXCEEDED,"Request time out"));break;case Is.HTTP_ERROR:const p=c.getStatus();if(Y(Ye,`RPC '${e}' ${s} failed with status:`,p,"response text:",c.getResponseText()),p>0){let y=c.getResponseJson();Array.isArray(y)&&(y=y[0]);const I=y==null?void 0:y.error;if(I&&I.status&&I.message){const O=function(F){const G=F.toLowerCase().replace(/_/g,"-");return Object.values(U).indexOf(G)>=0?G:U.UNKNOWN}(I.status);l(new re(O,I.message))}else l(new re(U.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new re(U.UNAVAILABLE,"Connection failed."));break;default:de()}}finally{Y(Ye,`RPC '${e}' ${s} completed.`)}});const f=JSON.stringify(i);Y(Ye,`RPC '${e}' ${s} sending request:`,i),c.send(n,"POST",f,r,15)})}qo(e,n,r){const i=ra(),s=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=ed(),l=Zf(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(c.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Lo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const d=s.join("");Y(Ye,`Creating RPC '${e}' stream ${i}: ${d}`,c);const p=a.createWebChannel(d,c);let y=!1,I=!1;const O=new nT({Eo:F=>{I?Y(Ye,`Not sending because RPC '${e}' stream ${i} is closed:`,F):(y||(Y(Ye,`Opening RPC '${e}' stream ${i} transport.`),p.open(),y=!0),Y(Ye,`RPC '${e}' stream ${i} sending:`,F),p.send(F))},Ao:()=>p.close()}),M=(F,G,j)=>{F.listen(G,q=>{try{j(q)}catch(z){setTimeout(()=>{throw z},0)}})};return M(p,ri.EventType.OPEN,()=>{I||(Y(Ye,`RPC '${e}' stream ${i} transport opened.`),O.So())}),M(p,ri.EventType.CLOSE,()=>{I||(I=!0,Y(Ye,`RPC '${e}' stream ${i} transport closed`),O.Do())}),M(p,ri.EventType.ERROR,F=>{I||(I=!0,js(Ye,`RPC '${e}' stream ${i} transport errored:`,F),O.Do(new re(U.UNAVAILABLE,"The operation could not be completed")))}),M(p,ri.EventType.MESSAGE,F=>{var G;if(!I){const j=F.data[0];Ne(!!j);const q=j,z=(q==null?void 0:q.error)||((G=q[0])===null||G===void 0?void 0:G.error);if(z){Y(Ye,`RPC '${e}' stream ${i} received error:`,z);const ce=z.status;let ue=function(T){const A=Me[T];if(A!==void 0)return pE(A)}(ce),w=z.message;ue===void 0&&(ue=U.INTERNAL,w="Unknown error status: "+ce+" with message "+z.message),I=!0,O.Do(new re(ue,w)),p.close()}else Y(Ye,`RPC '${e}' stream ${i} received:`,j),O.vo(j)}}),M(l,Yf.STAT_EVENT,F=>{F.stat===Sa.PROXY?Y(Ye,`RPC '${e}' stream ${i} detected buffering proxy`):F.stat===Sa.NOPROXY&&Y(Ye,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{O.bo()},0),O}}function ia(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function yo(t){return new gE(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Pd{constructor(e,n,r=1e3,i=1.5,s=6e4){this.li=e,this.timerId=n,this.Qo=r,this.Ko=i,this.$o=s,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const n=Math.floor(this.Uo+this.Ho()),r=Math.max(0,Date.now()-this.Go),i=Math.max(0,n-r);i>0&&Y("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Uo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,i,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class iT{constructor(e,n,r,i,s,a,l,c){this.li=e,this.Yo=r,this.Zo=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new Pd(e,n)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,n){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():n&&n.code===U.RESOURCE_EXHAUSTED?(tr(n.toString()),tr("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):n&&n.code===U.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(n)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),n=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Xo===n&&this.I_(r,i)},r=>{e(()=>{const i=new re(U.UNKNOWN,"Fetching auth token failed: "+r.message);return this.E_(i)})})}I_(e,n){const r=this.T_(this.Xo);this.stream=this.d_(e,n),this.stream.Ro(()=>{r(()=>this.listener.Ro())}),this.stream.mo(()=>{r(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(i=>{r(()=>this.E_(i))}),this.stream.onMessage(i=>{r(()=>++this.n_==1?this.A_(i):this.onNext(i))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return Y("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return n=>{this.li.enqueueAndForget(()=>this.Xo===e?n():(Y("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class sT extends iT{constructor(e,n,r,i,s,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,a),this.serializer=s}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,n){return this.connection.qo("Write",e,n)}A_(e){return Ne(!!e.streamToken),this.lastStreamToken=e.streamToken,Ne(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){Ne(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const n=wE(e.writeResults,e.commitTime),r=Er(e.commitTime);return this.listener.y_(r,n)}w_(){const e={};e.database=EE(this.serializer),this.c_(e)}g_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>IE(this.serializer,r))};this.c_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class oT extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.S_=!1}b_(){if(this.S_)throw new re(U.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,n,r,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Oo(e,Na(n,r),i,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new re(U.UNKNOWN,s.toString())})}ko(e,n,r,i,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.ko(e,Na(n,r),i,a,l,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new re(U.UNKNOWN,a.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class aT{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(tr(n),this.C_=!1):Y("OnlineStateTracker",n)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class lT{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=s,this.Q_.uo(a=>{r.enqueueAndForget(async()=>{$i(this)&&(Y("RemoteStore","Restarting streams for network reachability change."),await async function(c){const f=Re(c);f.k_.add(4),await ji(f),f.K_.set("Unknown"),f.k_.delete(4),await vo(f)}(this))})}),this.K_=new aT(r,i)}}async function vo(t){if($i(t))for(const e of t.q_)await e(!0)}async function ji(t){for(const e of t.q_)await e(!1)}function $i(t){return Re(t).k_.size===0}async function Cd(t,e,n){if(!Ui(e))throw e;t.k_.add(1),await ji(t),t.K_.set("Offline"),n||(n=()=>XE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Y("RemoteStore","Retrying IndexedDB access"),await n(),t.k_.delete(1),await vo(t)})}function Od(t,e){return e().catch(n=>Cd(t,n,e))}async function Eo(t){const e=Re(t),n=Vn(e);let r=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;cT(e);)try{const i=await YE(e.localStore,r);if(i===null){e.L_.length===0&&n.a_();break}r=i.batchId,uT(e,i)}catch(i){await Cd(e,i)}kd(e)&&Dd(e)}function cT(t){return $i(t)&&t.L_.length<10}function uT(t,e){t.L_.push(e);const n=Vn(t);n.s_()&&n.f_&&n.g_(e.mutations)}function kd(t){return $i(t)&&!Vn(t).i_()&&t.L_.length>0}function Dd(t){Vn(t).start()}async function hT(t){Vn(t).w_()}async function fT(t){const e=Vn(t);for(const n of t.L_)e.g_(n.mutations)}async function dT(t,e,n){const r=t.L_.shift(),i=Il.from(r,e,n);await Od(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Eo(t)}async function pT(t,e){e&&Vn(t).f_&&await async function(r,i){if(function(a){return dE(a)&&a!==U.ABORTED}(i.code)){const s=r.L_.shift();Vn(r).__(),await Od(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Eo(r)}}(t,e),kd(t)&&Dd(t)}async function Fu(t,e){const n=Re(t);n.asyncQueue.verifyOperationInProgress(),Y("RemoteStore","RemoteStore received new credentials");const r=$i(n);n.k_.add(3),await ji(n),r&&n.K_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.k_.delete(3),await vo(n)}async function gT(t,e){const n=Re(t);e?(n.k_.delete(2),await vo(n)):e||(n.k_.add(2),await ji(n),n.K_.set("Unknown"))}function Vn(t){return t.G_||(t.G_=function(n,r,i){const s=Re(n);return s.b_(),new sT(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Ro:()=>Promise.resolve(),mo:hT.bind(null,t),po:pT.bind(null,t),p_:fT.bind(null,t),y_:dT.bind(null,t)}),t.q_.push(async e=>{e?(t.G_.__(),await Eo(t)):(await t.G_.stop(),t.L_.length>0&&(Y("RemoteStore",`Stopping write stream with ${t.L_.length} pending writes`),t.L_=[]))})),t.G_}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Rl{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Qn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const a=Date.now()+r,l=new Rl(e,n,a,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new re(U.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Nd(t,e){if(tr("AsyncQueue",`${e}: ${t}`),Ui(t))return new re(U.UNAVAILABLE,`${e}: ${t}`);throw t}class mT{constructor(){this.queries=Uu(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(n,r){const i=Re(n),s=i.queries;i.queries=Uu(),s.forEach((a,l)=>{for(const c of l.J_)c.onError(r)})})(this,new re(U.ABORTED,"Firestore shutting down"))}}function Uu(){return new or(t=>fd(t),hd)}function _T(t){t.X_.forEach(e=>{e.next()})}var Bu,ju;(ju=Bu||(Bu={})).na="default",ju.Cache="cache";class yT{constructor(e,n,r,i,s,a){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.Ma={},this.xa=new or(l=>fd(l),hd),this.Oa=new Map,this.Na=new Set,this.La=new pt(le.comparator),this.Ba=new Map,this.ka=new wl,this.qa={},this.Qa=new Map,this.Ka=Or.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function vT(t,e,n){const r=wT(t);try{const i=await function(a,l){const c=Re(a),f=Ue.now(),d=l.reduce((I,O)=>I.add(O.key),tt());let p,y;return c.persistence.runTransaction("Locally write mutations","readwrite",I=>{let O=Ks(),M=tt();return c.hs.getEntries(I,d).next(F=>{O=F,O.forEach((G,j)=>{j.isValidDocument()||(M=M.add(G))})}).next(()=>c.localDocuments.getOverlayedDocuments(I,O)).next(F=>{p=F;const G=[];for(const j of l){const q=cE(j,p.get(j.key).overlayedDocument);q!=null&&G.push(new ar(j.key,q,id(q.value.mapValue),on.exists(!0)))}return c.mutationQueue.addMutationBatch(I,f,G,l)}).next(F=>{y=F;const G=F.applyToLocalDocumentSet(p,M);return c.documentOverlayCache.saveOverlays(I,F.batchId,G)})}).then(()=>({batchId:y.batchId,changes:pd(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(a,l,c){let f=a.qa[a.currentUser.toKey()];f||(f=new pt(Ie)),f=f.insert(l,c),a.qa[a.currentUser.toKey()]=f}(r,i.batchId,n),await To(r,i.changes),await Eo(r.remoteStore)}catch(i){const s=Nd(i,"Failed to persist write");n.reject(s)}}function $u(t,e,n){const r=Re(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.xa.forEach((s,a)=>{const l=a.view.ea(e);l.snapshot&&i.push(l.snapshot)}),function(a,l){const c=Re(a);c.onlineState=l;let f=!1;c.queries.forEach((d,p)=>{for(const y of p.J_)y.ea(l)&&(f=!0)}),f&&_T(c)}(r.eventManager,e),i.length&&r.Ma.R_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function ET(t,e){const n=Re(t),r=e.batch.batchId;try{const i=await JE(n.localStore,e);xd(n,r,null),Vd(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await To(n,i)}catch(i){await fl(i)}}async function TT(t,e,n){const r=Re(t);try{const i=await function(a,l){const c=Re(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let d;return c.mutationQueue.lookupMutationBatch(f,l).next(p=>(Ne(p!==null),d=p.keys(),c.mutationQueue.removeMutationBatch(f,p))).next(()=>c.mutationQueue.performConsistencyCheck(f)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(f,d,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,d)).next(()=>c.localDocuments.getDocuments(f,d))})}(r.localStore,e);xd(r,e,n),Vd(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await To(r,i)}catch(i){await fl(i)}}function Vd(t,e){(t.Qa.get(e)||[]).forEach(n=>{n.resolve()}),t.Qa.delete(e)}function xd(t,e,n){const r=Re(t);let i=r.qa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.qa[r.currentUser.toKey()]=i}}async function To(t,e,n){const r=Re(t),i=[],s=[],a=[];r.xa.isEmpty()||(r.xa.forEach((l,c)=>{a.push(r.Ua(c,e,n).then(f=>{var d;if((f||n)&&r.isPrimaryClient){const p=f?!f.fromCache:(d=void 0)===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(f){i.push(f);const p=bl.zi(c.targetId,f);s.push(p)}}))}),await Promise.all(a),r.Ma.R_(i),await async function(c,f){const d=Re(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>x.forEach(f,y=>x.forEach(y.Wi,I=>d.persistence.referenceDelegate.addReference(p,y.targetId,I)).next(()=>x.forEach(y.Gi,I=>d.persistence.referenceDelegate.removeReference(p,y.targetId,I)))))}catch(p){if(!Ui(p))throw p;Y("LocalStore","Failed to update sequence numbers: "+p)}for(const p of f){const y=p.targetId;if(!p.fromCache){const I=d.us.get(y),O=I.snapshotVersion,M=I.withLastLimboFreeSnapshotVersion(O);d.us=d.us.insert(y,M)}}}(r.localStore,s))}async function IT(t,e){const n=Re(t);if(!n.currentUser.isEqual(e)){Y("SyncEngine","User change. New user:",e.toKey());const r=await Sd(n.localStore,e);n.currentUser=e,function(s,a){s.Qa.forEach(l=>{l.forEach(c=>{c.reject(new re(U.CANCELLED,a))})}),s.Qa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await To(n,r.Ts)}}function wT(t){const e=Re(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ET.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=TT.bind(null,e),e}class Xs{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=yo(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,n){return null}Ya(e,n){return null}Ha(e){return QE(this.persistence,new KE,e.initialUser,this.serializer)}ja(e){return new Rd(Al.ei,this.serializer)}za(e){return new ZE}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Xs.provider={build:()=>new Xs};class AT extends Xs{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,n){Ne(this.persistence.referenceDelegate instanceof Js);const r=this.persistence.referenceDelegate.garbageCollector;return new DE(r,e.asyncQueue,n)}ja(e){const n=this.cacheSizeBytes!==void 0?ft.withCacheSize(this.cacheSizeBytes):ft.DEFAULT;return new Rd(r=>Js.ei(r,n),this.serializer)}}class xa{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>$u(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=IT.bind(null,this.syncEngine),await gT(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new mT}()}createDatastore(e){const n=yo(e.databaseInfo.databaseId),r=function(s){return new rT(s)}(e.databaseInfo);return function(s,a,l,c){return new oT(s,a,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,a,l){return new lT(r,i,s,a,l)}(this.localStore,this.datastore,e.asyncQueue,n=>$u(this.syncEngine,n,0),function(){return Lu.p()?new Lu:new eT}())}createSyncEngine(e,n){return function(i,s,a,l,c,f,d){const p=new yT(i,s,a,l,c,f);return d&&(p.$a=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=Re(i);Y("RemoteStore","RemoteStore shutting down."),s.k_.add(5),await ji(s),s.Q_.shutdown(),s.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}xa.provider={build:()=>new xa};/**
 * @license
 * Copyright 2017 Google LLC
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
 */class bT{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Ze.UNAUTHENTICATED,this.clientId=nd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async a=>{Y("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(Y("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Qn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Nd(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function sa(t,e){t.asyncQueue.verifyOperationInProgress(),Y("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Sd(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Hu(t,e){t.asyncQueue.verifyOperationInProgress();const n=await RT(t);Y("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Fu(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Fu(e.remoteStore,i)),t._onlineComponents=e}async function RT(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Y("FirestoreClient","Using user provided OfflineComponentProvider");try{await sa(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===U.FAILED_PRECONDITION||i.code===U.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;js("Error using user provided cache. Falling back to memory cache: "+n),await sa(t,new Xs)}}else Y("FirestoreClient","Using default OfflineComponentProvider"),await sa(t,new AT(void 0));return t._offlineComponents}async function ST(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Y("FirestoreClient","Using user provided OnlineComponentProvider"),await Hu(t,t._uninitializedComponentsProvider._online)):(Y("FirestoreClient","Using default OnlineComponentProvider"),await Hu(t,new xa))),t._onlineComponents}function PT(t){return ST(t).then(e=>e.syncEngine)}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function Md(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const qu=new Map;/**
 * @license
 * Copyright 2017 Google LLC
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
 */function Ld(t,e,n){if(!n)throw new re(U.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function CT(t,e,n,r){if(e===!0&&r===!0)throw new re(U.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function zu(t){if(!le.isDocumentKey(t))throw new re(U.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Gu(t){if(le.isDocumentKey(t))throw new re(U.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Sl(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":de()}function Fd(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new re(U.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Sl(t);throw new re(U.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Ku{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new re(U.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new re(U.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}CT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Md((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new re(U.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new re(U.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new re(U.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Io{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ku({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new re(U.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new re(U.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ku(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new dv;switch(r.type){case"firstParty":return new _v(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new re(U.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=qu.get(n);r&&(Y("ComponentProvider","Removing Datastore"),qu.delete(n),r.terminate())}(this),Promise.resolve()}}function OT(t,e,n,r={}){var i;const s=(t=Fd(t,Io))._getSettings(),a=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==a&&js("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),r.mockUserToken){let l,c;if(typeof r.mockUserToken=="string")l=r.mockUserToken,c=Ze.MOCK_USER;else{l=H_(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const f=r.mockUserToken.sub||r.mockUserToken.user_id;if(!f)throw new re(U.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Ze(f)}t._authCredentials=new pv(new td(l,c))}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Pl{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Pl(this.firestore,e,this._query)}}class an{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new On(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new an(this.firestore,e,this._key)}}class On extends Pl{constructor(e,n,r){super(e,n,Kv(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new an(this.firestore,null,new le(e))}withConverter(e){return new On(this.firestore,e,this._path)}}function kT(t,e,...n){if(t=Nt(t),Ld("collection","path",e),t instanceof Io){const r=De.fromString(e,...n);return Gu(r),new On(t,null,r)}{if(!(t instanceof an||t instanceof On))throw new re(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(De.fromString(e,...n));return Gu(r),new On(t.firestore,null,r)}}function DT(t,e,...n){if(t=Nt(t),arguments.length===1&&(e=nd.newId()),Ld("doc","path",e),t instanceof Io){const r=De.fromString(e,...n);return zu(r),new an(t,null,new le(r))}{if(!(t instanceof an||t instanceof On))throw new re(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(De.fromString(e,...n));return zu(r),new an(t.firestore,t instanceof On?t.converter:null,new le(r))}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Wu{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new Pd(this,"async_queue_retry"),this.fu=()=>{const r=ia();r&&Y("AsyncQueue","Visibility state changed to "+r.visibilityState),this.r_.Jo()},this.gu=e;const n=ia();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const n=ia();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const n=new Qn;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!Ui(e))throw e;Y("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const n=this.gu.then(()=>(this.Ru=!0,e().catch(r=>{this.Au=r,this.Ru=!1;const i=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw tr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ru=!1,r))));return this.gu=n,n}enqueueAfterDelay(e,n,r){this.pu(),this.mu.indexOf(e)>-1&&(n=0);const i=Rl.createAndSchedule(this,e,n,r,s=>this.Su(s));return this.du.push(i),i}pu(){this.Au&&de()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const n of this.du)if(n.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.du)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const n=this.du.indexOf(e);this.du.splice(n,1)}}class Ud extends Io{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Wu,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Wu(e),this._firestoreClient=void 0,await e}}}function NT(t,e){const n=typeof t=="object"?t:Gf(),r=typeof t=="string"?t:"(default)",i=ul(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=j_("firestore");s&&OT(i,...s)}return i}function VT(t){if(t._terminated)throw new re(U.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||xT(t),t._firestoreClient}function xT(t){var e,n,r;const i=t._freezeSettings(),s=function(l,c,f,d){return new Nv(l,c,f,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,Md(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new bT(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Oi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Oi(qt.fromBase64String(e))}catch(n){throw new re(U.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Oi(qt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Bd{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new re(U.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ge(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class jd{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class $d{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new re(U.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new re(U.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ie(this._lat,e._lat)||Ie(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Hd{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const MT=/^__.*__$/;class LT{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ar(e,this.data,this.fieldMask,n,this.fieldTransforms):new Bi(e,this.data,n,this.fieldTransforms)}}function qd(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw de()}}class Cl{constructor(e,n,r,i,s,a){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Fu(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new Cl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.xu({path:r,Nu:!1});return i.Lu(e),i}Bu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.xu({path:r,Nu:!1});return i.Fu(),i}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return Ys(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(qd(this.Mu)&&MT.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class FT{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||yo(e)}$u(e,n,r,i=!1){return new Cl({Mu:e,methodName:n,Ku:r,path:Ge.emptyPath(),Nu:!1,Qu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function UT(t){const e=t._freezeSettings(),n=yo(t._databaseId);return new FT(t._databaseId,!!e.ignoreUndefinedProperties,n)}function BT(t,e,n,r,i,s={}){const a=t.$u(s.merge||s.mergeFields?2:0,e,n,i);Wd("Data must be an object, but it was:",a,r);const l=Gd(r,a);let c,f;if(s.merge)c=new Ct(a.fieldMask),f=a.fieldTransforms;else if(s.mergeFields){const d=[];for(const p of s.mergeFields){const y=jT(e,p,n);if(!a.contains(y))throw new re(U.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);qT(d,y)||d.push(y)}c=new Ct(d),f=a.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,f=a.fieldTransforms;return new LT(new Pt(l),c,f)}function zd(t,e){if(Kd(t=Nt(t)))return Wd("Unsupported field value:",e,t),Gd(t,e);if(t instanceof jd)return function(r,i){if(!qd(i.Mu))throw i.qu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.qu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(r,i){const s=[];let a=0;for(const l of r){let c=zd(l,i.ku(a));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),a++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Nt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return rE(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ue.fromDate(r);return{timestampValue:Da(i.serializer,s)}}if(r instanceof Ue){const s=new Ue(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Da(i.serializer,s)}}if(r instanceof $d)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Oi)return{bytesValue:mE(i.serializer,r._byteString)};if(r instanceof an){const s=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(s))throw i.qu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Ad(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Hd)return function(a,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(c=>{if(typeof c!="number")throw l.qu("VectorValues must only contain numeric values.");return Tl(l.serializer,c)})}}}}}}(r,i);throw i.qu(`Unsupported field value: ${Sl(r)}`)}(t,e)}function Gd(t,e){const n={};return rd(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Lr(t,(r,i)=>{const s=zd(i,e.Ou(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Kd(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ue||t instanceof $d||t instanceof Oi||t instanceof an||t instanceof jd||t instanceof Hd)}function Wd(t,e,n){if(!Kd(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Sl(n);throw r==="an object"?e.qu(t+" a custom object"):e.qu(t+" "+r)}}function jT(t,e,n){if((e=Nt(e))instanceof Bd)return e._internalPath;if(typeof e=="string")return HT(t,e);throw Ys("Field path arguments must be of type string or ",t,!1,void 0,n)}const $T=new RegExp("[~\\*/\\[\\]]");function HT(t,e,n){if(e.search($T)>=0)throw Ys(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Bd(...e.split("."))._internalPath}catch{throw Ys(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ys(t,e,n,r,i){const s=r&&!r.isEmpty(),a=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(s||a)&&(c+=" (found",s&&(c+=` in field ${r}`),a&&(c+=` in document ${i}`),c+=")"),new re(U.INVALID_ARGUMENT,l+t+c)}function qT(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function zT(t,e,n){let r;return r=t?t.toFirestore(e):e,r}function GT(t,e){const n=Fd(t.firestore,Ud),r=DT(t),i=zT(t.converter,e);return KT(n,[BT(UT(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,on.exists(!1))]).then(()=>r)}function KT(t,e){return function(r,i){const s=new Qn;return r.asyncQueue.enqueueAndForget(async()=>vT(await PT(r),i,s)),s.promise}(VT(t),e)}(function(e,n=!0){(function(i){Mr=i})(xr),br(new Zn("firestore",(r,{instanceIdentifier:i,options:s})=>{const a=r.getProvider("app").getImmediate(),l=new Ud(new gv(r.getProvider("auth-internal")),new vv(r.getProvider("app-check-internal")),function(f,d){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new re(U.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new qs(f.options.projectId,d)}(a,i),a);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Cn(vu,"4.7.5",e),Cn(vu,"4.7.5","esm2017")})();/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const mr=typeof document<"u";function Qd(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function WT(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Qd(t.default)}const ve=Object.assign;function oa(t,e){const n={};for(const r in e){const i=e[r];n[r]=Vt(i)?i.map(t):t(i)}return n}const mi=()=>{},Vt=Array.isArray,Jd=/#/g,QT=/&/g,JT=/\//g,XT=/=/g,YT=/\?/g,Xd=/\+/g,ZT=/%5B/g,eI=/%5D/g,Yd=/%5E/g,tI=/%60/g,Zd=/%7B/g,nI=/%7C/g,ep=/%7D/g,rI=/%20/g;function Ol(t){return encodeURI(""+t).replace(nI,"|").replace(ZT,"[").replace(eI,"]")}function iI(t){return Ol(t).replace(Zd,"{").replace(ep,"}").replace(Yd,"^")}function Ma(t){return Ol(t).replace(Xd,"%2B").replace(rI,"+").replace(Jd,"%23").replace(QT,"%26").replace(tI,"`").replace(Zd,"{").replace(ep,"}").replace(Yd,"^")}function sI(t){return Ma(t).replace(XT,"%3D")}function oI(t){return Ol(t).replace(Jd,"%23").replace(YT,"%3F")}function aI(t){return t==null?"":oI(t).replace(JT,"%2F")}function ki(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const lI=/\/$/,cI=t=>t.replace(lI,"");function aa(t,e,n="/"){let r,i={},s="",a="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(r=e.slice(0,c),s=e.slice(c+1,l>-1?l:e.length),i=t(s)),l>-1&&(r=r||e.slice(0,l),a=e.slice(l,e.length)),r=dI(r??e,n),{fullPath:r+(s&&"?")+s+a,path:r,query:i,hash:ki(a)}}function uI(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Qu(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function hI(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&kr(e.matched[r],n.matched[i])&&tp(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function kr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function tp(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!fI(t[n],e[n]))return!1;return!0}function fI(t,e){return Vt(t)?Ju(t,e):Vt(e)?Ju(e,t):t===e}function Ju(t,e){return Vt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function dI(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let s=n.length-1,a,l;for(a=0;a<r.length;a++)if(l=r[a],l!==".")if(l==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(a).join("/")}const _n={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Di;(function(t){t.pop="pop",t.push="push"})(Di||(Di={}));var _i;(function(t){t.back="back",t.forward="forward",t.unknown=""})(_i||(_i={}));function pI(t){if(!t)if(mr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),cI(t)}const gI=/^[^#]+#/;function mI(t,e){return t.replace(gI,"#")+e}function _I(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const wo=()=>({left:window.scrollX,top:window.scrollY});function yI(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=_I(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Xu(t,e){return(history.state?history.state.position-e:-1)+t}const La=new Map;function vI(t,e){La.set(t,e)}function EI(t){const e=La.get(t);return La.delete(t),e}let TI=()=>location.protocol+"//"+location.host;function np(t,e){const{pathname:n,search:r,hash:i}=e,s=t.indexOf("#");if(s>-1){let l=i.includes(t.slice(s))?t.slice(s).length:1,c=i.slice(l);return c[0]!=="/"&&(c="/"+c),Qu(c,"")}return Qu(n,t)+r+i}function II(t,e,n,r){let i=[],s=[],a=null;const l=({state:y})=>{const I=np(t,location),O=n.value,M=e.value;let F=0;if(y){if(n.value=I,e.value=y,a&&a===O){a=null;return}F=M?y.position-M.position:0}else r(I);i.forEach(G=>{G(n.value,O,{delta:F,type:Di.pop,direction:F?F>0?_i.forward:_i.back:_i.unknown})})};function c(){a=n.value}function f(y){i.push(y);const I=()=>{const O=i.indexOf(y);O>-1&&i.splice(O,1)};return s.push(I),I}function d(){const{history:y}=window;y.state&&y.replaceState(ve({},y.state,{scroll:wo()}),"")}function p(){for(const y of s)y();s=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:c,listen:f,destroy:p}}function Yu(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?wo():null}}function wI(t){const{history:e,location:n}=window,r={value:np(t,n)},i={value:e.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(c,f,d){const p=t.indexOf("#"),y=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:TI()+t+c;try{e[d?"replaceState":"pushState"](f,"",y),i.value=f}catch(I){console.error(I),n[d?"replace":"assign"](y)}}function a(c,f){const d=ve({},e.state,Yu(i.value.back,c,i.value.forward,!0),f,{position:i.value.position});s(c,d,!0),r.value=c}function l(c,f){const d=ve({},i.value,e.state,{forward:c,scroll:wo()});s(d.current,d,!0);const p=ve({},Yu(r.value,c,null),{position:d.position+1},f);s(c,p,!1),r.value=c}return{location:r,state:i,push:l,replace:a}}function AI(t){t=pI(t);const e=wI(t),n=II(t,e.state,e.location,e.replace);function r(s,a=!0){a||n.pauseListeners(),history.go(s)}const i=ve({location:"",base:t,go:r,createHref:mI.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function bI(t){return typeof t=="string"||t&&typeof t=="object"}function rp(t){return typeof t=="string"||typeof t=="symbol"}const ip=Symbol("");var Zu;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Zu||(Zu={}));function Dr(t,e){return ve(new Error,{type:t,[ip]:!0},e)}function Jt(t,e){return t instanceof Error&&ip in t&&(e==null||!!(t.type&e))}const eh="[^/]+?",RI={sensitive:!1,strict:!1,start:!0,end:!0},SI=/[.+*?^${}()[\]/\\]/g;function PI(t,e){const n=ve({},RI,e),r=[];let i=n.start?"^":"";const s=[];for(const f of t){const d=f.length?[]:[90];n.strict&&!f.length&&(i+="/");for(let p=0;p<f.length;p++){const y=f[p];let I=40+(n.sensitive?.25:0);if(y.type===0)p||(i+="/"),i+=y.value.replace(SI,"\\$&"),I+=40;else if(y.type===1){const{value:O,repeatable:M,optional:F,regexp:G}=y;s.push({name:O,repeatable:M,optional:F});const j=G||eh;if(j!==eh){I+=10;try{new RegExp(`(${j})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${O}" (${j}): `+z.message)}}let q=M?`((?:${j})(?:/(?:${j}))*)`:`(${j})`;p||(q=F&&f.length<2?`(?:/${q})`:"/"+q),F&&(q+="?"),i+=q,I+=20,F&&(I+=-8),M&&(I+=-20),j===".*"&&(I+=-50)}d.push(I)}r.push(d)}if(n.strict&&n.end){const f=r.length-1;r[f][r[f].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&!i.endsWith("/")&&(i+="(?:/|$)");const a=new RegExp(i,n.sensitive?"":"i");function l(f){const d=f.match(a),p={};if(!d)return null;for(let y=1;y<d.length;y++){const I=d[y]||"",O=s[y-1];p[O.name]=I&&O.repeatable?I.split("/"):I}return p}function c(f){let d="",p=!1;for(const y of t){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const I of y)if(I.type===0)d+=I.value;else if(I.type===1){const{value:O,repeatable:M,optional:F}=I,G=O in f?f[O]:"";if(Vt(G)&&!M)throw new Error(`Provided param "${O}" is an array but it is not repeatable (* or + modifiers)`);const j=Vt(G)?G.join("/"):G;if(!j)if(F)y.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${O}"`);d+=j}}return d||"/"}return{re:a,score:r,keys:s,parse:l,stringify:c}}function CI(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function sp(t,e){let n=0;const r=t.score,i=e.score;for(;n<r.length&&n<i.length;){const s=CI(r[n],i[n]);if(s)return s;n++}if(Math.abs(i.length-r.length)===1){if(th(r))return 1;if(th(i))return-1}return i.length-r.length}function th(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const OI={type:0,value:""},kI=/[a-zA-Z0-9_]/;function DI(t){if(!t)return[[]];if(t==="/")return[[OI]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(I){throw new Error(`ERR (${n})/"${f}": ${I}`)}let n=0,r=n;const i=[];let s;function a(){s&&i.push(s),s=[]}let l=0,c,f="",d="";function p(){f&&(n===0?s.push({type:0,value:f}):n===1||n===2||n===3?(s.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:f,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),f="")}function y(){f+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(f&&p(),a()):c===":"?(p(),n=1):y();break;case 4:y(),n=r;break;case 1:c==="("?n=2:kI.test(c)?y():(p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:n=3:d+=c;break;case 3:p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${f}"`),p(),a(),i}function NI(t,e,n){const r=PI(DI(t.path),n),i=ve(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function VI(t,e){const n=[],r=new Map;e=sh({strict:!1,end:!0,sensitive:!1},e);function i(p){return r.get(p)}function s(p,y,I){const O=!I,M=rh(p);M.aliasOf=I&&I.record;const F=sh(e,p),G=[M];if("alias"in p){const z=typeof p.alias=="string"?[p.alias]:p.alias;for(const ce of z)G.push(rh(ve({},M,{components:I?I.record.components:M.components,path:ce,aliasOf:I?I.record:M})))}let j,q;for(const z of G){const{path:ce}=z;if(y&&ce[0]!=="/"){const ue=y.record.path,w=ue[ue.length-1]==="/"?"":"/";z.path=y.record.path+(ce&&w+ce)}if(j=NI(z,y,F),I?I.alias.push(j):(q=q||j,q!==j&&q.alias.push(j),O&&p.name&&!ih(j)&&a(p.name)),op(j)&&c(j),M.children){const ue=M.children;for(let w=0;w<ue.length;w++)s(ue[w],j,I&&I.children[w])}I=I||j}return q?()=>{a(q)}:mi}function a(p){if(rp(p)){const y=r.get(p);y&&(r.delete(p),n.splice(n.indexOf(y),1),y.children.forEach(a),y.alias.forEach(a))}else{const y=n.indexOf(p);y>-1&&(n.splice(y,1),p.record.name&&r.delete(p.record.name),p.children.forEach(a),p.alias.forEach(a))}}function l(){return n}function c(p){const y=LI(p,n);n.splice(y,0,p),p.record.name&&!ih(p)&&r.set(p.record.name,p)}function f(p,y){let I,O={},M,F;if("name"in p&&p.name){if(I=r.get(p.name),!I)throw Dr(1,{location:p});F=I.record.name,O=ve(nh(y.params,I.keys.filter(q=>!q.optional).concat(I.parent?I.parent.keys.filter(q=>q.optional):[]).map(q=>q.name)),p.params&&nh(p.params,I.keys.map(q=>q.name))),M=I.stringify(O)}else if(p.path!=null)M=p.path,I=n.find(q=>q.re.test(M)),I&&(O=I.parse(M),F=I.record.name);else{if(I=y.name?r.get(y.name):n.find(q=>q.re.test(y.path)),!I)throw Dr(1,{location:p,currentLocation:y});F=I.record.name,O=ve({},y.params,p.params),M=I.stringify(O)}const G=[];let j=I;for(;j;)G.unshift(j.record),j=j.parent;return{name:F,path:M,params:O,matched:G,meta:MI(G)}}t.forEach(p=>s(p));function d(){n.length=0,r.clear()}return{addRoute:s,resolve:f,removeRoute:a,clearRoutes:d,getRoutes:l,getRecordMatcher:i}}function nh(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function rh(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:xI(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function xI(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function ih(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function MI(t){return t.reduce((e,n)=>ve(e,n.meta),{})}function sh(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function LI(t,e){let n=0,r=e.length;for(;n!==r;){const s=n+r>>1;sp(t,e[s])<0?r=s:n=s+1}const i=FI(t);return i&&(r=e.lastIndexOf(i,r-1)),r}function FI(t){let e=t;for(;e=e.parent;)if(op(e)&&sp(t,e)===0)return e}function op({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function UI(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(Xd," "),a=s.indexOf("="),l=ki(a<0?s:s.slice(0,a)),c=a<0?null:ki(s.slice(a+1));if(l in e){let f=e[l];Vt(f)||(f=e[l]=[f]),f.push(c)}else e[l]=c}return e}function oh(t){let e="";for(let n in t){const r=t[n];if(n=sI(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Vt(r)?r.map(s=>s&&Ma(s)):[r&&Ma(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function BI(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Vt(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return e}const jI=Symbol(""),ah=Symbol(""),Ao=Symbol(""),ap=Symbol(""),Fa=Symbol("");function ti(){let t=[];function e(r){return t.push(r),()=>{const i=t.indexOf(r);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Tn(t,e,n,r,i,s=a=>a()){const a=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((l,c)=>{const f=y=>{y===!1?c(Dr(4,{from:n,to:e})):y instanceof Error?c(y):bI(y)?c(Dr(2,{from:e,to:y})):(a&&r.enterCallbacks[i]===a&&typeof y=="function"&&a.push(y),l())},d=s(()=>t.call(r&&r.instances[i],e,n,f));let p=Promise.resolve(d);t.length<3&&(p=p.then(f)),p.catch(y=>c(y))})}function la(t,e,n,r,i=s=>s()){const s=[];for(const a of t)for(const l in a.components){let c=a.components[l];if(!(e!=="beforeRouteEnter"&&!a.instances[l]))if(Qd(c)){const d=(c.__vccOpts||c)[e];d&&s.push(Tn(d,n,r,a,l,i))}else{let f=c();s.push(()=>f.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${l}" at "${a.path}"`);const p=WT(d)?d.default:d;a.mods[l]=d,a.components[l]=p;const I=(p.__vccOpts||p)[e];return I&&Tn(I,n,r,a,l,i)()}))}}return s}function lh(t){const e=jt(Ao),n=jt(ap),r=St(()=>{const c=Wn(t.to);return e.resolve(c)}),i=St(()=>{const{matched:c}=r.value,{length:f}=c,d=c[f-1],p=n.matched;if(!d||!p.length)return-1;const y=p.findIndex(kr.bind(null,d));if(y>-1)return y;const I=ch(c[f-2]);return f>1&&ch(d)===I&&p[p.length-1].path!==I?p.findIndex(kr.bind(null,c[f-2])):y}),s=St(()=>i.value>-1&&GI(n.params,r.value.params)),a=St(()=>i.value>-1&&i.value===n.matched.length-1&&tp(n.params,r.value.params));function l(c={}){if(zI(c)){const f=e[Wn(t.replace)?"replace":"push"](Wn(t.to)).catch(mi);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>f),f}return Promise.resolve()}return{route:r,href:St(()=>r.value.href),isActive:s,isExactActive:a,navigate:l}}function $I(t){return t.length===1?t[0]:t}const HI=xi({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:lh,setup(t,{slots:e}){const n=lo(lh(t)),{options:r}=jt(Ao),i=St(()=>({[uh(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[uh(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&$I(e.default(n));return t.custom?s:xf("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},s)}}}),qI=HI;function zI(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function GI(t,e){for(const n in e){const r=e[n],i=t[n];if(typeof r=="string"){if(r!==i)return!1}else if(!Vt(i)||i.length!==r.length||r.some((s,a)=>s!==i[a]))return!1}return!0}function ch(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const uh=(t,e,n)=>t??e??n,KI=xi({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=jt(Fa),i=St(()=>t.route||r.value),s=jt(ah,0),a=St(()=>{let f=Wn(s);const{matched:d}=i.value;let p;for(;(p=d[f])&&!p.components;)f++;return f}),l=St(()=>i.value.matched[a.value]);_s(ah,St(()=>a.value+1)),_s(jI,l),_s(Fa,i);const c=Yh();return ys(()=>[c.value,l.value,t.name],([f,d,p],[y,I,O])=>{d&&(d.instances[p]=f,I&&I!==d&&f&&f===y&&(d.leaveGuards.size||(d.leaveGuards=I.leaveGuards),d.updateGuards.size||(d.updateGuards=I.updateGuards))),f&&d&&(!I||!kr(d,I)||!y)&&(d.enterCallbacks[p]||[]).forEach(M=>M(f))},{flush:"post"}),()=>{const f=i.value,d=t.name,p=l.value,y=p&&p.components[d];if(!y)return hh(n.default,{Component:y,route:f});const I=p.props[d],O=I?I===!0?f.params:typeof I=="function"?I(f):I:null,F=xf(y,ve({},O,e,{onVnodeUnmounted:G=>{G.component.isUnmounted&&(p.instances[d]=null)},ref:c}));return hh(n.default,{Component:F,route:f})||F}}});function hh(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const lp=KI;function WI(t){const e=VI(t.routes,t),n=t.parseQuery||UI,r=t.stringifyQuery||oh,i=t.history,s=ti(),a=ti(),l=ti(),c=qg(_n);let f=_n;mr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=oa.bind(null,k=>""+k),p=oa.bind(null,aI),y=oa.bind(null,ki);function I(k,J){let W,X;return rp(k)?(W=e.getRecordMatcher(k),X=J):X=k,e.addRoute(X,W)}function O(k){const J=e.getRecordMatcher(k);J&&e.removeRoute(J)}function M(){return e.getRoutes().map(k=>k.record)}function F(k){return!!e.getRecordMatcher(k)}function G(k,J){if(J=ve({},J||c.value),typeof k=="string"){const R=aa(n,k,J.path),D=e.resolve({path:R.path},J),V=i.createHref(R.fullPath);return ve(R,D,{params:y(D.params),hash:ki(R.hash),redirectedFrom:void 0,href:V})}let W;if(k.path!=null)W=ve({},k,{path:aa(n,k.path,J.path).path});else{const R=ve({},k.params);for(const D in R)R[D]==null&&delete R[D];W=ve({},k,{params:p(R)}),J.params=p(J.params)}const X=e.resolve(W,J),_e=k.hash||"";X.params=d(y(X.params));const _=uI(r,ve({},k,{hash:iI(_e),path:X.path})),v=i.createHref(_);return ve({fullPath:_,hash:_e,query:r===oh?BI(k.query):k.query||{}},X,{redirectedFrom:void 0,href:v})}function j(k){return typeof k=="string"?aa(n,k,c.value.path):ve({},k)}function q(k,J){if(f!==k)return Dr(8,{from:J,to:k})}function z(k){return w(k)}function ce(k){return z(ve(j(k),{replace:!0}))}function ue(k){const J=k.matched[k.matched.length-1];if(J&&J.redirect){const{redirect:W}=J;let X=typeof W=="function"?W(k):W;return typeof X=="string"&&(X=X.includes("?")||X.includes("#")?X=j(X):{path:X},X.params={}),ve({query:k.query,hash:k.hash,params:X.path!=null?{}:k.params},X)}}function w(k,J){const W=f=G(k),X=c.value,_e=k.state,_=k.force,v=k.replace===!0,R=ue(W);if(R)return w(ve(j(R),{state:typeof R=="object"?ve({},_e,R.state):_e,force:_,replace:v}),J||W);const D=W;D.redirectedFrom=J;let V;return!_&&hI(r,X,W)&&(V=Dr(16,{to:D,from:X}),Tt(X,X,!0,!1)),(V?Promise.resolve(V):A(D,X)).catch(N=>Jt(N)?Jt(N,2)?N:At(N):he(N,D,X)).then(N=>{if(N){if(Jt(N,2))return w(ve({replace:v},j(N.to),{state:typeof N.to=="object"?ve({},_e,N.to.state):_e,force:_}),J||D)}else N=S(D,X,!0,v,_e);return b(D,X,N),N})}function m(k,J){const W=q(k,J);return W?Promise.reject(W):Promise.resolve()}function T(k){const J=fn.values().next().value;return J&&typeof J.runWithContext=="function"?J.runWithContext(k):k()}function A(k,J){let W;const[X,_e,_]=QI(k,J);W=la(X.reverse(),"beforeRouteLeave",k,J);for(const R of X)R.leaveGuards.forEach(D=>{W.push(Tn(D,k,J))});const v=m.bind(null,k,J);return W.push(v),ht(W).then(()=>{W=[];for(const R of s.list())W.push(Tn(R,k,J));return W.push(v),ht(W)}).then(()=>{W=la(_e,"beforeRouteUpdate",k,J);for(const R of _e)R.updateGuards.forEach(D=>{W.push(Tn(D,k,J))});return W.push(v),ht(W)}).then(()=>{W=[];for(const R of _)if(R.beforeEnter)if(Vt(R.beforeEnter))for(const D of R.beforeEnter)W.push(Tn(D,k,J));else W.push(Tn(R.beforeEnter,k,J));return W.push(v),ht(W)}).then(()=>(k.matched.forEach(R=>R.enterCallbacks={}),W=la(_,"beforeRouteEnter",k,J,T),W.push(v),ht(W))).then(()=>{W=[];for(const R of a.list())W.push(Tn(R,k,J));return W.push(v),ht(W)}).catch(R=>Jt(R,8)?R:Promise.reject(R))}function b(k,J,W){l.list().forEach(X=>T(()=>X(k,J,W)))}function S(k,J,W,X,_e){const _=q(k,J);if(_)return _;const v=J===_n,R=mr?history.state:{};W&&(X||v?i.replace(k.fullPath,ve({scroll:v&&R&&R.scroll},_e)):i.push(k.fullPath,_e)),c.value=k,Tt(k,J,W,v),At()}let E;function st(){E||(E=i.listen((k,J,W)=>{if(!xt.listening)return;const X=G(k),_e=ue(X);if(_e){w(ve(_e,{replace:!0,force:!0}),X).catch(mi);return}f=X;const _=c.value;mr&&vI(Xu(_.fullPath,W.delta),wo()),A(X,_).catch(v=>Jt(v,12)?v:Jt(v,2)?(w(ve(j(v.to),{force:!0}),X).then(R=>{Jt(R,20)&&!W.delta&&W.type===Di.pop&&i.go(-1,!1)}).catch(mi),Promise.reject()):(W.delta&&i.go(-W.delta,!1),he(v,X,_))).then(v=>{v=v||S(X,_,!1),v&&(W.delta&&!Jt(v,8)?i.go(-W.delta,!1):W.type===Di.pop&&Jt(v,20)&&i.go(-1,!1)),b(X,_,v)}).catch(mi)}))}let Et=ti(),xe=ti(),pe;function he(k,J,W){At(k);const X=xe.list();return X.length?X.forEach(_e=>_e(k,J,W)):console.error(k),Promise.reject(k)}function gt(){return pe&&c.value!==_n?Promise.resolve():new Promise((k,J)=>{Et.add([k,J])})}function At(k){return pe||(pe=!k,st(),Et.list().forEach(([J,W])=>k?W(k):J()),Et.reset()),k}function Tt(k,J,W,X){const{scrollBehavior:_e}=t;if(!mr||!_e)return Promise.resolve();const _=!W&&EI(Xu(k.fullPath,0))||(X||!W)&&history.state&&history.state.scroll||null;return nf().then(()=>_e(k,J,_)).then(v=>v&&yI(v)).catch(v=>he(v,k,J))}const Ce=k=>i.go(k);let Oe;const fn=new Set,xt={currentRoute:c,listening:!0,addRoute:I,removeRoute:O,clearRoutes:e.clearRoutes,hasRoute:F,getRoutes:M,resolve:G,options:t,push:z,replace:ce,go:Ce,back:()=>Ce(-1),forward:()=>Ce(1),beforeEach:s.add,beforeResolve:a.add,afterEach:l.add,onError:xe.add,isReady:gt,install(k){const J=this;k.component("RouterLink",qI),k.component("RouterView",lp),k.config.globalProperties.$router=J,Object.defineProperty(k.config.globalProperties,"$route",{enumerable:!0,get:()=>Wn(c)}),mr&&!Oe&&c.value===_n&&(Oe=!0,z(i.location).catch(_e=>{}));const W={};for(const _e in _n)Object.defineProperty(W,_e,{get:()=>c.value[_e],enumerable:!0});k.provide(Ao,J),k.provide(ap,Qh(W)),k.provide(Fa,c);const X=k.unmount;fn.add(k),k.unmount=function(){fn.delete(k),fn.size<1&&(f=_n,E&&E(),E=null,c.value=_n,Oe=!1,pe=!1),X()}}};function ht(k){return k.reduce((J,W)=>J.then(()=>T(W)),Promise.resolve())}return xt}function QI(t,e){const n=[],r=[],i=[],s=Math.max(e.matched.length,t.matched.length);for(let a=0;a<s;a++){const l=e.matched[a];l&&(t.matched.find(f=>kr(f,l))?r.push(l):n.push(l));const c=t.matched[a];c&&(e.matched.find(f=>kr(f,c))||i.push(c))}return[n,r,i]}function JI(){return jt(Ao)}const XI=xi({__name:"App",setup(t){return(e,n)=>(sl(),zm(Wn(lp)))}}),YI="modulepreload",ZI=function(t){return"/ssf_web/"+t},fh={},ew=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=Promise.allSettled(n.map(c=>{if(c=ZI(c),c in fh)return;fh[c]=!0;const f=c.endsWith(".css"),d=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const p=document.createElement("link");if(p.rel=f?"stylesheet":YI,f||(p.as="script"),p.crossOrigin="",p.href=c,l&&p.setAttribute("nonce",l),document.head.appendChild(p),f)return new Promise((y,I)=>{p.addEventListener("load",y),p.addEventListener("error",()=>I(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return i.then(a=>{for(const l of a||[])l.status==="rejected"&&s(l.reason);return e().catch(s)})},tw="/ssf_web/assets/brand_logo-BowcBpKQ.jpg";function kl(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function cp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const nw=cp,up=new Li("auth","Firebase",cp());/**
 * @license
 * Copyright 2020 Google LLC
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
 */const Zs=new ll("@firebase/auth");function rw(t,...e){Zs.logLevel<=fe.WARN&&Zs.warn(`Auth (${xr}): ${t}`,...e)}function Rs(t,...e){Zs.logLevel<=fe.ERROR&&Zs.error(`Auth (${xr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function Gt(t,...e){throw Nl(t,...e)}function Dt(t,...e){return Nl(t,...e)}function Dl(t,e,n){const r=Object.assign(Object.assign({},nw()),{[e]:n});return new Li("auth","Firebase",r).create(e,{appName:t.name})}function Xn(t){return Dl(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function iw(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Gt(t,"argument-error"),Dl(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Nl(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return up.create(t,...e)}function ie(t,e,...n){if(!t)throw Nl(e,...n)}function nn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Rs(e),new Error(e)}function cn(t,e){t||nn(e)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function Ua(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function sw(){return dh()==="http:"||dh()==="https:"}function dh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function ow(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(sw()||K_()||"connection"in navigator)?navigator.onLine:!0}function aw(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Hi{constructor(e,n){this.shortDelay=e,this.longDelay=n,cn(n>e,"Short delay should be less than long delay!"),this.isMobile=q_()||W_()}get(){return ow()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function Vl(t,e){cn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class hp{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;nn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;nn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;nn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const lw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
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
 */const cw=new Hi(3e4,6e4);function xl(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Fr(t,e,n,r,i={}){return fp(t,i,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});const l=Fi(Object.assign({key:t.config.apiKey},a)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const f=Object.assign({method:e,headers:c},s);return G_()||(f.referrerPolicy="no-referrer"),hp.fetch()(dp(t,t.config.apiHost,n,l),f)})}async function fp(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},lw),e);try{const i=new hw(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw ms(t,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const l=s.ok?a.errorMessage:a.error.message,[c,f]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ms(t,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw ms(t,"email-already-in-use",a);if(c==="USER_DISABLED")throw ms(t,"user-disabled",a);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw Dl(t,d,f);Gt(t,d)}}catch(i){if(i instanceof hn)throw i;Gt(t,"network-request-failed",{message:String(i)})}}async function uw(t,e,n,r,i={}){const s=await Fr(t,e,n,r,i);return"mfaPendingCredential"in s&&Gt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function dp(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Vl(t.config,i):`${t.config.apiScheme}://${i}`}class hw{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Dt(this.auth,"network-request-failed")),cw.get())})}}function ms(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Dt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function fw(t,e){return Fr(t,"POST","/v1/accounts:delete",e)}async function pp(t,e){return Fr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function yi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function dw(t,e=!1){const n=Nt(t),r=await n.getIdToken(e),i=Ml(r);ie(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:yi(ca(i.auth_time)),issuedAtTime:yi(ca(i.iat)),expirationTime:yi(ca(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ca(t){return Number(t)*1e3}function Ml(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Rs("JWT malformed, contained fewer than 3 sections"),null;try{const i=Uf(n);return i?JSON.parse(i):(Rs("Failed to decode base64 JWT payload"),null)}catch(i){return Rs("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function ph(t){const e=Ml(t);return ie(e,"internal-error"),ie(typeof e.exp<"u","internal-error"),ie(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function Ni(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof hn&&pw(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function pw({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class gw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Ba{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=yi(this.lastLoginAt),this.creationTime=yi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */async function eo(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ni(t,pp(n,{idToken:r}));ie(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?gp(s.providerUserInfo):[],l=_w(t.providerData,a),c=t.isAnonymous,f=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),d=c?f:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Ba(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function mw(t){const e=Nt(t);await eo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function _w(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function gp(t){return t.map(e=>{var{providerId:n}=e,r=kl(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function yw(t,e){const n=await fp(t,{},async()=>{const r=Fi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,a=dp(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",hp.fetch()(a,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function vw(t,e){return Fr(t,"POST","/v2/accounts:revokeToken",xl(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Tr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ie(e.idToken,"internal-error"),ie(typeof e.idToken<"u","internal-error"),ie(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ph(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ie(e.length!==0,"internal-error");const n=ph(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ie(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await yw(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,a=new Tr;return r&&(ie(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(ie(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(ie(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Tr,this.toJSON())}_performRefresh(){return nn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function yn(t,e){ie(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class rn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=kl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new gw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ba(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ni(this,this.stsTokenManager.getToken(this.auth,e));return ie(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return dw(this,e)}reload(){return mw(this)}_assign(e){this!==e&&(ie(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new rn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ie(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await eo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(tn(this.auth.app))return Promise.reject(Xn(this.auth));const e=await this.getIdToken();return await Ni(this,fw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,a,l,c,f,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,y=(i=n.email)!==null&&i!==void 0?i:void 0,I=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,O=(a=n.photoURL)!==null&&a!==void 0?a:void 0,M=(l=n.tenantId)!==null&&l!==void 0?l:void 0,F=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,G=(f=n.createdAt)!==null&&f!==void 0?f:void 0,j=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:q,emailVerified:z,isAnonymous:ce,providerData:ue,stsTokenManager:w}=n;ie(q&&w,e,"internal-error");const m=Tr.fromJSON(this.name,w);ie(typeof q=="string",e,"internal-error"),yn(p,e.name),yn(y,e.name),ie(typeof z=="boolean",e,"internal-error"),ie(typeof ce=="boolean",e,"internal-error"),yn(I,e.name),yn(O,e.name),yn(M,e.name),yn(F,e.name),yn(G,e.name),yn(j,e.name);const T=new rn({uid:q,auth:e,email:y,emailVerified:z,displayName:p,isAnonymous:ce,photoURL:O,phoneNumber:I,tenantId:M,stsTokenManager:m,createdAt:G,lastLoginAt:j});return ue&&Array.isArray(ue)&&(T.providerData=ue.map(A=>Object.assign({},A))),F&&(T._redirectEventId=F),T}static async _fromIdTokenResponse(e,n,r=!1){const i=new Tr;i.updateFromServerResponse(n);const s=new rn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await eo(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];ie(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?gp(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Tr;l.updateFromIdToken(r);const c=new rn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:a}),f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Ba(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(c,f),c}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const gh=new Map;function sn(t){cn(t instanceof Function,"Expected a class definition");let e=gh.get(t);return e?(cn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,gh.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class mp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}mp.type="NONE";const mh=mp;/**
 * @license
 * Copyright 2019 Google LLC
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
 */function Ss(t,e,n){return`firebase:${t}:${e}:${n}`}class Ir{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ss(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ss("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?rn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ir(sn(mh),e,r);const i=(await Promise.all(n.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f);let s=i[0]||sn(mh);const a=Ss(r,e.config.apiKey,e.name);let l=null;for(const f of n)try{const d=await f._get(a);if(d){const p=rn._fromJSON(e,d);f!==s&&(l=p),s=f;break}}catch{}const c=i.filter(f=>f._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new Ir(s,e,r):(s=c[0],l&&await s._set(a,l.toJSON()),await Promise.all(n.map(async f=>{if(f!==s)try{await f._remove(a)}catch{}})),new Ir(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function _h(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ep(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(_p(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ip(e))return"Blackberry";if(wp(e))return"Webos";if(yp(e))return"Safari";if((e.includes("chrome/")||vp(e))&&!e.includes("edge/"))return"Chrome";if(Tp(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function _p(t=it()){return/firefox\//i.test(t)}function yp(t=it()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function vp(t=it()){return/crios\//i.test(t)}function Ep(t=it()){return/iemobile/i.test(t)}function Tp(t=it()){return/android/i.test(t)}function Ip(t=it()){return/blackberry/i.test(t)}function wp(t=it()){return/webos/i.test(t)}function Ll(t=it()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Ew(t=it()){var e;return Ll(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Tw(){return Q_()&&document.documentMode===10}function Ap(t=it()){return Ll(t)||Tp(t)||wp(t)||Ip(t)||/windows phone/i.test(t)||Ep(t)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function bp(t,e=[]){let n;switch(t){case"Browser":n=_h(it());break;case"Worker":n=`${_h(it())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${xr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class Iw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((a,l)=>{try{const c=e(s);a(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function ww(t,e={}){return Fr(t,"GET","/v2/passwordPolicy",xl(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const Aw=6;class bw{constructor(e){var n,r,i,s;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:Aw,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,a,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(a=c.containsNumericCharacter)!==null&&a!==void 0?a:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Rw{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new yh(this),this.idTokenSubscription=new yh(this),this.beforeStateQueue=new Iw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=up,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=sn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ir.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await pp(this,{idToken:e}),r=await rn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(tn(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!a||a===l)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ie(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await eo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=aw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(tn(this.app))return Promise.reject(Xn(this));const n=e?Nt(e):null;return n&&ie(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ie(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return tn(this.app)?Promise.reject(Xn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return tn(this.app)?Promise.reject(Xn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(sn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ww(this),n=new bw(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Li("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await vw(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&sn(e)||this._popupRedirectResolver;ie(n,this,"argument-error"),this.redirectPersistenceManager=await Ir.create(this,[sn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ie(l,this,"internal-error"),l.then(()=>{a||s(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,i);return()=>{a=!0,c()}}else{const c=e.addObserver(n);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ie(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=bp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&rw(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function bo(t){return Nt(t)}class yh{constructor(e){this.auth=e,this.observer=null,this.addObserver=ry(n=>this.observer=n)}get next(){return ie(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */let Fl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Sw(t){Fl=t}function Pw(t){return Fl.loadJS(t)}function Cw(){return Fl.gapiScript}function Ow(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function kw(t,e){const n=ul(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Us(s,e??{}))return i;Gt(i,"already-initialized")}return n.initialize({options:e})}function Dw(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(sn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Nw(t,e,n){const r=bo(t);ie(r._canInitEmulator,r,"emulator-config-failed"),ie(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Rp(e),{host:a,port:l}=Vw(e),c=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${a}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),xw()}function Rp(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Vw(t){const e=Rp(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:vh(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:vh(a)}}}function vh(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function xw(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Sp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return nn("not implemented")}_getIdTokenResponse(e){return nn("not implemented")}_linkToIdToken(e,n){return nn("not implemented")}_getReauthenticationResolver(e){return nn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function wr(t,e){return uw(t,"POST","/v1/accounts:signInWithIdp",xl(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const Mw="http://localhost";class ir extends Sp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ir(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Gt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=kl(n,["providerId","signInMethod"]);if(!r||!i)return null;const a=new ir(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return wr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,wr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,wr(e,n)}buildRequest(){const e={requestUri:Mw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Fi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Ul{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class qi extends Ul{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class wn extends qi{constructor(){super("facebook.com")}static credential(e){return ir._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wn.credentialFromTaggedObject(e)}static credentialFromError(e){return wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wn.credential(e.oauthAccessToken)}catch{return null}}}wn.FACEBOOK_SIGN_IN_METHOD="facebook.com";wn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
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
 */class en extends qi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ir._fromParams({providerId:en.PROVIDER_ID,signInMethod:en.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return en.credentialFromTaggedObject(e)}static credentialFromError(e){return en.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return en.credential(n,r)}catch{return null}}}en.GOOGLE_SIGN_IN_METHOD="google.com";en.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
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
 */class An extends qi{constructor(){super("github.com")}static credential(e){return ir._fromParams({providerId:An.PROVIDER_ID,signInMethod:An.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return An.credentialFromTaggedObject(e)}static credentialFromError(e){return An.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return An.credential(e.oauthAccessToken)}catch{return null}}}An.GITHUB_SIGN_IN_METHOD="github.com";An.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
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
 */class bn extends qi{constructor(){super("twitter.com")}static credential(e,n){return ir._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return bn.credential(n,r)}catch{return null}}}bn.TWITTER_SIGN_IN_METHOD="twitter.com";bn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Nr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await rn._fromIdTokenResponse(e,r,i),a=Eh(r);return new Nr({user:s,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Eh(r);return new Nr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Eh(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class to extends hn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,to.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new to(e,n,r,i)}}function Pp(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?to._fromErrorAndOperation(t,s,e,r):s})}async function Lw(t,e,n=!1){const r=await Ni(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Nr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
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
 */async function Fw(t,e,n=!1){const{auth:r}=t;if(tn(r.app))return Promise.reject(Xn(r));const i="reauthenticate";try{const s=await Ni(t,Pp(r,i,e,t),n);ie(s.idToken,r,"internal-error");const a=Ml(s.idToken);ie(a,r,"internal-error");const{sub:l}=a;return ie(t.uid===l,r,"user-mismatch"),Nr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Gt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function Uw(t,e,n=!1){if(tn(t.app))return Promise.reject(Xn(t));const r="signIn",i=await Pp(t,r,e),s=await Nr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function Bw(t,e,n,r){return Nt(t).onIdTokenChanged(e,n,r)}function jw(t,e,n){return Nt(t).beforeAuthStateChanged(e,n)}const no="__sak";/**
 * @license
 * Copyright 2019 Google LLC
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
 */class Cp{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(no,"1"),this.storage.removeItem(no),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const $w=1e3,Hw=10;class Op extends Cp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ap(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,l,c)=>{this.notifyListeners(a,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);Tw()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Hw):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},$w)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Op.type="LOCAL";const qw=Op;/**
 * @license
 * Copyright 2020 Google LLC
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
 */class kp extends Cp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}kp.type="SESSION";const Dp=kp;/**
 * @license
 * Copyright 2019 Google LLC
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
 */function zw(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class Ro{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Ro(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(a).map(async f=>f(n.origin,s)),c=await zw(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ro.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
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
 */function Bl(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class Gw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((l,c)=>{const f=Bl("",20);i.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(p){const y=p;if(y.data.eventId===f)switch(y.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(y.data.response);break;default:clearTimeout(d),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:f,data:n},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function $t(){return window}function Kw(t){$t().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function Np(){return typeof $t().WorkerGlobalScope<"u"&&typeof $t().importScripts=="function"}async function Ww(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Qw(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Jw(){return Np()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
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
 */const Vp="firebaseLocalStorageDb",Xw=1,ro="firebaseLocalStorage",xp="fbase_key";class zi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function So(t,e){return t.transaction([ro],e?"readwrite":"readonly").objectStore(ro)}function Yw(){const t=indexedDB.deleteDatabase(Vp);return new zi(t).toPromise()}function ja(){const t=indexedDB.open(Vp,Xw);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ro,{keyPath:xp})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ro)?e(r):(r.close(),await Yw(),e(await ja()))})})}async function Th(t,e,n){const r=So(t,!0).put({[xp]:e,value:n});return new zi(r).toPromise()}async function Zw(t,e){const n=So(t,!1).get(e),r=await new zi(n).toPromise();return r===void 0?null:r.value}function Ih(t,e){const n=So(t,!0).delete(e);return new zi(n).toPromise()}const e0=800,t0=3;class Mp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ja(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>t0)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Np()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ro._getInstance(Jw()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Ww(),!this.activeServiceWorker)return;this.sender=new Gw(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Qw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ja();return await Th(e,no,"1"),await Ih(e,no),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Th(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Zw(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ih(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=So(i,!1).getAll();return new zi(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),e0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Mp.type="LOCAL";const n0=Mp;new Hi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
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
 */function Lp(t,e){return e?sn(e):(ie(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class jl extends Sp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return wr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return wr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return wr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function r0(t){return Uw(t.auth,new jl(t),t.bypassAuthState)}function i0(t){const{auth:e,user:n}=t;return ie(n,e,"internal-error"),Fw(n,new jl(t),t.bypassAuthState)}async function s0(t){const{auth:e,user:n}=t;return ie(n,e,"internal-error"),Lw(n,new jl(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Fp{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:a,type:l}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(f){this.reject(f)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return r0;case"linkViaPopup":case"linkViaRedirect":return s0;case"reauthViaPopup":case"reauthViaRedirect":return i0;default:Gt(this.auth,"internal-error")}}resolve(e){cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const o0=new Hi(2e3,1e4);async function a0(t,e,n){if(tn(t.app))return Promise.reject(Dt(t,"operation-not-supported-in-this-environment"));const r=bo(t);iw(t,e,Ul);const i=Lp(r,n);return new Gn(r,"signInViaPopup",e,i).executeNotNull()}class Gn extends Fp{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Gn.currentPopupAction&&Gn.currentPopupAction.cancel(),Gn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ie(e,this.auth,"internal-error"),e}async onExecution(){cn(this.filter.length===1,"Popup operations only handle one event");const e=Bl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Dt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Dt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Gn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Dt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,o0.get())};e()}}Gn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
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
 */const l0="pendingRedirect",Ps=new Map;class c0 extends Fp{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ps.get(this.auth._key());if(!e){try{const r=await u0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ps.set(this.auth._key(),e)}return this.bypassAuthState||Ps.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function u0(t,e){const n=d0(e),r=f0(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function h0(t,e){Ps.set(t._key(),e)}function f0(t){return sn(t._redirectPersistence)}function d0(t){return Ss(l0,t.config.apiKey,t.name)}async function p0(t,e,n=!1){if(tn(t.app))return Promise.reject(Xn(t));const r=bo(t),i=Lp(r,e),a=await new c0(r,i,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const g0=10*60*1e3;class m0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!_0(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Up(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Dt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=g0&&this.cachedEventUids.clear(),this.cachedEventUids.has(wh(e))}saveEventToCache(e){this.cachedEventUids.add(wh(e)),this.lastProcessedEventTime=Date.now()}}function wh(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Up({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function _0(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Up(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function y0(t,e={}){return Fr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const v0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,E0=/^https?/;async function T0(t){if(t.config.emulator)return;const{authorizedDomains:e}=await y0(t);for(const n of e)try{if(I0(n))return}catch{}Gt(t,"unauthorized-domain")}function I0(t){const e=Ua(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!E0.test(n))return!1;if(v0.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const w0=new Hi(3e4,6e4);function Ah(){const t=$t().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function A0(t){return new Promise((e,n)=>{var r,i,s;function a(){Ah(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ah(),n(Dt(t,"network-request-failed"))},timeout:w0.get()})}if(!((i=(r=$t().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=$t().gapi)===null||s===void 0)&&s.load)a();else{const l=Ow("iframefcb");return $t()[l]=()=>{gapi.load?a():n(Dt(t,"network-request-failed"))},Pw(`${Cw()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw Cs=null,e})}let Cs=null;function b0(t){return Cs=Cs||A0(t),Cs}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const R0=new Hi(5e3,15e3),S0="__/auth/iframe",P0="emulator/auth/iframe",C0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},O0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function k0(t){const e=t.config;ie(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Vl(e,P0):`https://${t.config.authDomain}/${S0}`,r={apiKey:e.apiKey,appName:t.name,v:xr},i=O0.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Fi(r).slice(1)}`}async function D0(t){const e=await b0(t),n=$t().gapi;return ie(n,t,"internal-error"),e.open({where:document.body,url:k0(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:C0,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=Dt(t,"network-request-failed"),l=$t().setTimeout(()=>{s(a)},R0.get());function c(){$t().clearTimeout(l),i(r)}r.ping(c).then(c,()=>{s(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const N0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},V0=500,x0=600,M0="_blank",L0="http://localhost";class bh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function F0(t,e,n,r=V0,i=x0){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},N0),{width:r.toString(),height:i.toString(),top:s,left:a}),f=it().toLowerCase();n&&(l=vp(f)?M0:n),_p(f)&&(e=e||L0,c.scrollbars="yes");const d=Object.entries(c).reduce((y,[I,O])=>`${y}${I}=${O},`,"");if(Ew(f)&&l!=="_self")return U0(e||"",l),new bh(null);const p=window.open(e||"",l,d);ie(p,t,"popup-blocked");try{p.focus()}catch{}return new bh(p)}function U0(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const B0="__/auth/handler",j0="emulator/auth/handler",$0=encodeURIComponent("fac");async function Rh(t,e,n,r,i,s){ie(t.config.authDomain,t,"auth-domain-config-required"),ie(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:xr,eventId:i};if(e instanceof Ul){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",ny(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))a[d]=p}if(e instanceof qi){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(a.scopes=d.join(","))}t.tenantId&&(a.tid=t.tenantId);const l=a;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await t._getAppCheckToken(),f=c?`#${$0}=${encodeURIComponent(c)}`:"";return`${H0(t)}?${Fi(l).slice(1)}${f}`}function H0({config:t}){return t.emulator?Vl(t,j0):`https://${t.authDomain}/${B0}`}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const ua="webStorageSupport";class q0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Dp,this._completeRedirectFn=p0,this._overrideRedirectResult=h0}async _openPopup(e,n,r,i){var s;cn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await Rh(e,n,r,Ua(),i);return F0(e,a,Bl())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Rh(e,n,r,Ua(),i);return Kw(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(cn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await D0(e),r=new m0(e);return n.register("authEvent",i=>(ie(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ua,{type:ua},i=>{var s;const a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[ua];a!==void 0&&n(!!a),Gt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=T0(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ap()||yp()||Ll()}}const z0=q0;var Sh="@firebase/auth",Ph="1.8.1";/**
 * @license
 * Copyright 2020 Google LLC
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
 */class G0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ie(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function K0(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function W0(t){br(new Zn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;ie(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:a,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:bp(t)},f=new Rw(r,i,s,c);return Dw(f,n),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),br(new Zn("auth-internal",e=>{const n=bo(e.getProvider("auth").getImmediate());return(r=>new G0(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Cn(Sh,Ph,K0(t)),Cn(Sh,Ph,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const Q0=5*60,J0=$f("authIdTokenMaxAge")||Q0;let Ch=null;const X0=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>J0)return;const i=n==null?void 0:n.token;Ch!==i&&(Ch=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Y0(t=Gf()){const e=ul(t,"auth");if(e.isInitialized())return e.getImmediate();const n=kw(t,{popupRedirectResolver:z0,persistence:[n0,qw,Dp]}),r=$f("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const a=X0(s.toString());jw(n,a,()=>a(n.currentUser)),Bw(n,l=>a(l))}}const i=Bf("auth");return i&&Nw(n,`http://${i}`),n}function Z0(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Sw({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Dt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Z0().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});W0("Browser");const eA={class:"container-fluid"},tA=xi({__name:"SignUp",setup(t){const e=JI();async function n(i){try{const s=await GT(kT(uA,"users"),i);console.log("Document written with ID: ",s.id)}catch(s){console.error("Error adding document: ",s)}}const r=()=>{const i=new en;a0(Y0(),i).then(s=>{const a=s.user,l={uid:a.uid,email:a.email,displayName:a.displayName};n(l),console.log("User signed in successfully:",a),e.push("/member")}).catch(s=>{console.error("Error signing in with Google:",s)})};return(i,s)=>(sl(),kf("div",eA,[s[0]||(s[0]=Qm('<form class="mx-auto" data-v-29ce80fc><img class="img-fluid img-thumbnail brand-logo" src="'+tw+'" alt="Logo" data-v-29ce80fc><h4 class="text-center" data-v-29ce80fc>Sign Up</h4><div class="mb-3 mt-5" data-v-29ce80fc><label for="email" class="form-label" data-v-29ce80fc>Email</label><input type="email" class="form-control" id="email" aria-describedby="emailHelp" data-v-29ce80fc></div><div class="mb-3" data-v-29ce80fc><label for="password" class="form-label" data-v-29ce80fc>Password</label><input type="password" class="form-control" id="password" data-v-29ce80fc><div id="emailHelp" class="form-text mt-3" data-v-29ce80fc>Forget password ?</div></div><button type="submit" class="btn mt-5" data-v-29ce80fc>Sign Up</button></form>',1)),Ms("div",{class:"social-media"},[Ms("button",{onClick:r,class:"btn mt-5"},"Google")])]))}}),nA=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n},rA=nA(tA,[["__scopeId","data-v-29ce80fc"]]),iA=xi({__name:"HomeView",setup(t){return(e,n)=>(sl(),kf("main",null,[dt(rA)]))}}),sA=WI({history:AI("/ssf_web/"),routes:[{path:"/",name:"home",component:iA},{path:"/member",name:"Member",component:()=>ew(()=>import("./MemberView-Cfbdci5R.js"),[])}]});var oA="firebase",aA="11.1.0";/**
 * @license
 * Copyright 2020 Google LLC
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
 */Cn(oA,aA,"app");const lA={apiKey:"AIzaSyD8mn8ne4YBLU6qcdn_qJisA03PvKGQaso",authDomain:"ssf-web-ab742.firebaseapp.com",projectId:"ssf-web-ab742",storageBucket:"ssf-web-ab742.firebasestorage.app",messagingSenderId:"1014915914617",appId:"1:1014915914617:web:2cd79bebb883f1c4c36da8",measurementId:"G-J47LXF42V7"},cA=zf(lA),uA=NT(cA),$l=P_(XI);$l.use(N_());$l.use(sA);$l.mount("#app");export{nA as _,dt as a,kf as c,xi as d,sl as o};
