import{S as C,i as L,s as M,e as $,c as k,b as g,g as b,M as j,N as D,L as I,d as h,O as ne,P as le,t as R,k as N,a as y,h as B,m as q,Q as K,H as p,j as ie,l as E,w as P,x as U,y as V,R as H,q as T,o as w,B as A,n as Q,T as z,p as F,U as O,V as S,W as G}from"../chunks/vendor-de5c08b0.js";function oe(a){let e,t,n;return{c(){e=$("input"),this.h()},l(i){e=k(i,"INPUT",{type:!0,placeholder:!0,class:!0}),this.h()},h(){g(e,"type","text"),g(e,"placeholder","Enter your task..."),g(e,"class","svelte-ehi7wn")},m(i,r){b(i,e,r),j(e,a[0]),t||(n=[D(e,"input",a[2]),D(e,"keyup",a[1])],t=!0)},p(i,[r]){r&1&&e.value!==i[0]&&j(e,i[0])},i:I,o:I,d(i){i&&h(e),t=!1,ne(n)}}}function re(a,e,t){const n=le();let i="";function r(c){c.key==="Enter"&&(n("onEnter",i),t(0,i=""))}function _(){i=this.value,t(0,i)}return[i,r,_]}class ae extends C{constructor(e){super();L(this,e,re,oe,M,{})}}function J(a){let e,t,n=(a[0].text.trim()||"No title")+"",i,r,_,c,f,m;return{c(){e=$("div"),t=$("p"),i=R(n),r=N(),_=$("button"),c=R("\u2715"),this.h()},l(o){e=k(o,"DIV",{class:!0});var d=y(e);t=k(d,"P",{class:!0});var l=y(t);i=B(l,n),l.forEach(h),r=q(d),_=k(d,"BUTTON",{class:!0});var s=y(_);c=B(s,"\u2715"),s.forEach(h),d.forEach(h),this.h()},h(){g(t,"class","svelte-crqune"),g(_,"class","svelte-crqune"),g(e,"class","item svelte-crqune"),K(e,"item--done",a[0].done)},m(o,d){b(o,e,d),p(e,t),p(t,i),p(e,r),p(e,_),p(_,c),f||(m=[D(_,"click",a[2]),D(e,"click",a[1])],f=!0)},p(o,d){d&1&&n!==(n=(o[0].text.trim()||"No title")+"")&&ie(i,n),d&1&&K(e,"item--done",o[0].done)},d(o){o&&h(e),f=!1,ne(m)}}}function ue(a){let e,t=a[0]&&J(a);return{c(){t&&t.c(),e=E()},l(n){t&&t.l(n),e=E()},m(n,i){t&&t.m(n,i),b(n,e,i)},p(n,[i]){n[0]?t?t.p(n,i):(t=J(n),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:I,o:I,d(n){t&&t.d(n),n&&h(e)}}}function fe(a,e,t){const n=le();let{item:i=null}=e;function r(){n("toggle")}function _(c){c.stopPropagation(),n("remove")}return a.$$set=c=>{"item"in c&&t(0,i=c.item)},[i,r,_]}class se extends C{constructor(e){super();L(this,e,fe,ue,M,{item:0})}}function X(a,e,t){const n=a.slice();return n[9]=e[t],n[10]=e,n[11]=t,n}function Y(a,e,t){const n=a.slice();return n[9]=e[t],n[12]=e,n[13]=t,n}function Z(a,e){let t,n,i,r;function _(o){e[3](o,e[9],e[12],e[13])}function c(){return e[4](e[9])}function f(){return e[5](e[9])}let m={};return e[9]!==void 0&&(m.item=e[9]),n=new se({props:m}),O.push(()=>S(n,"item",_)),n.$on("toggle",c),n.$on("remove",f),{key:a,first:null,c(){t=E(),P(n.$$.fragment),this.h()},l(o){t=E(),U(n.$$.fragment,o),this.h()},h(){this.first=t},m(o,d){b(o,t,d),V(n,o,d),r=!0},p(o,d){e=o;const l={};!i&&d&1&&(i=!0,l.item=e[9],H(()=>i=!1)),n.$set(l)},i(o){r||(T(n.$$.fragment,o),r=!0)},o(o){w(n.$$.fragment,o),r=!1},d(o){o&&h(t),A(n,o)}}}function x(a,e){let t,n,i,r;function _(o){e[6](o,e[9],e[10],e[11])}function c(){return e[7](e[9])}function f(){return e[8](e[9])}let m={};return e[9]!==void 0&&(m.item=e[9]),n=new se({props:m}),O.push(()=>S(n,"item",_)),n.$on("toggle",c),n.$on("remove",f),{key:a,first:null,c(){t=E(),P(n.$$.fragment),this.h()},l(o){t=E(),U(n.$$.fragment,o),this.h()},h(){this.first=t},m(o,d){b(o,t,d),V(n,o,d),r=!0},p(o,d){e=o;const l={};!i&&d&1&&(i=!0,l.item=e[9],H(()=>i=!1)),n.$set(l)},i(o){r||(T(n.$$.fragment,o),r=!0)},o(o){w(n.$$.fragment,o),r=!1},d(o){o&&h(t),A(n,o)}}}function ce(a){let e,t=[],n=new Map,i,r=[],_=new Map,c,f=a[0].filter(ee);const m=l=>l[9].id;for(let l=0;l<f.length;l+=1){let s=Y(a,f,l),u=m(s);n.set(u,t[l]=Z(u,s))}let o=a[0].filter(te);const d=l=>l[9].id;for(let l=0;l<o.length;l+=1){let s=X(a,o,l),u=d(s);_.set(u,r[l]=x(u,s))}return{c(){e=$("div");for(let l=0;l<t.length;l+=1)t[l].c();i=N();for(let l=0;l<r.length;l+=1)r[l].c();this.h()},l(l){e=k(l,"DIV",{class:!0});var s=y(e);for(let u=0;u<t.length;u+=1)t[u].l(s);i=q(s);for(let u=0;u<r.length;u+=1)r[u].l(s);s.forEach(h),this.h()},h(){g(e,"class","list svelte-10ytnoi")},m(l,s){b(l,e,s);for(let u=0;u<t.length;u+=1)t[u].m(e,null);p(e,i);for(let u=0;u<r.length;u+=1)r[u].m(e,null);c=!0},p(l,[s]){s&7&&(f=l[0].filter(ee),Q(),t=z(t,s,m,1,l,f,n,e,G,Z,i,Y),F()),s&7&&(o=l[0].filter(te),Q(),r=z(r,s,d,1,l,o,_,e,G,x,null,X),F())},i(l){if(!c){for(let s=0;s<f.length;s+=1)T(t[s]);for(let s=0;s<o.length;s+=1)T(r[s]);c=!0}},o(l){for(let s=0;s<t.length;s+=1)w(t[s]);for(let s=0;s<r.length;s+=1)w(r[s]);c=!1},d(l){l&&h(e);for(let s=0;s<t.length;s+=1)t[s].d();for(let s=0;s<r.length;s+=1)r[s].d()}}}const ee=a=>!a.done,te=a=>a.done;function _e(a,e,t){let{items:n=[]}=e;function i(l){l.done=!l.done,t(0,n)}function r(l){t(0,n=n.filter(s=>s!==l))}function _(l,s,u,v){u[v]=l,t(0,n)}const c=l=>i(l),f=l=>r(l);function m(l,s,u,v){u[v]=l,t(0,n)}const o=l=>i(l),d=l=>r(l);return a.$$set=l=>{"items"in l&&t(0,n=l.items)},[n,i,r,_,c,f,m,o,d]}class de extends C{constructor(e){super();L(this,e,_e,ce,M,{items:0})}}function me(a){let e,t,n,i,r,_,c,f,m,o;r=new ae({}),r.$on("onEnter",a[2]);function d(s){a[3](s)}let l={};return a[0]!==void 0&&(l.items=a[0]),f=new de({props:l}),O.push(()=>S(f,"items",d)),{c(){e=$("article"),t=$("h1"),n=R("ToDoApp"),i=N(),P(r.$$.fragment),_=N(),c=$("div"),P(f.$$.fragment),this.h()},l(s){e=k(s,"ARTICLE",{class:!0});var u=y(e);t=k(u,"H1",{class:!0});var v=y(t);n=B(v,"ToDoApp"),v.forEach(h),i=q(u),U(r.$$.fragment,u),_=q(u),c=k(u,"DIV",{class:!0});var W=y(c);U(f.$$.fragment,W),W.forEach(h),u.forEach(h),this.h()},h(){g(t,"class","svelte-5m9g69"),g(c,"class","list-container svelte-5m9g69"),g(e,"class","svelte-5m9g69")},m(s,u){b(s,e,u),p(e,t),p(t,n),p(e,i),V(r,e,null),p(e,_),p(e,c),V(f,c,null),o=!0},p(s,[u]){const v={};!m&&u&1&&(m=!0,v.items=s[0],H(()=>m=!1)),f.$set(v)},i(s){o||(T(r.$$.fragment,s),T(f.$$.fragment,s),o=!0)},o(s){w(r.$$.fragment,s),w(f.$$.fragment,s),o=!1},d(s){s&&h(e),A(r),A(f)}}}function he(a,e,t){let n=0,i=[{id:n++,text:"Click here!"},{id:n++,done:!0,text:"Walk the dog"}];function r(f){f=f.trim(),!!f&&t(0,i=[{id:n++,text:f},...i])}const _=f=>r(f.detail);function c(f){i=f,t(0,i)}return[i,r,_,c]}class ge extends C{constructor(e){super();L(this,e,he,me,M,{})}}export{ge as default};