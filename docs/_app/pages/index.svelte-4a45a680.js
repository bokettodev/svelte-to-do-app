import{S as P,i as U,s as V,e as $,c as k,b as v,g as b,M as j,N as I,L as N,d as h,O as oe,P as C,t as A,k as S,a as y,h as B,m as q,Q,H as g,j as ie,l as T,w as L,x as R,y as M,R as H,q as w,o as D,B as O,n as W,T as X,p as z,U as J,V as K,W as F,v as re,X as ae}from"../chunks/vendor-d06b3aa2.js";function ue(a){let e,s,n;return{c(){e=$("input"),this.h()},l(i){e=k(i,"INPUT",{type:!0,placeholder:!0,class:!0}),this.h()},h(){v(e,"type","text"),v(e,"placeholder","Enter your task..."),v(e,"class","svelte-ehi7wn")},m(i,o){b(i,e,o),j(e,a[0]),s||(n=[I(e,"input",a[2]),I(e,"keyup",a[1])],s=!0)},p(i,[o]){o&1&&e.value!==i[0]&&j(e,i[0])},i:N,o:N,d(i){i&&h(e),s=!1,oe(n)}}}function ce(a,e,s){const n=C();let i="";const o=f=>{f.key==="Enter"&&(n("onEnter",i),s(0,i=""))};function _(){i=this.value,s(0,i)}return[i,o,_]}class fe extends P{constructor(e){super();U(this,e,ce,ue,V,{})}}function G(a){let e,s,n=(a[0].text.trim()||"No title")+"",i,o,_,f,u,d;return{c(){e=$("div"),s=$("p"),i=A(n),o=S(),_=$("button"),f=A("\u2715"),this.h()},l(l){e=k(l,"DIV",{class:!0});var m=y(e);s=k(m,"P",{class:!0});var r=y(s);i=B(r,n),r.forEach(h),o=q(m),_=k(m,"BUTTON",{class:!0});var t=y(_);f=B(t,"\u2715"),t.forEach(h),m.forEach(h),this.h()},h(){v(s,"class","svelte-crqune"),v(_,"class","svelte-crqune"),v(e,"class","item svelte-crqune"),Q(e,"item--done",a[0].done)},m(l,m){b(l,e,m),g(e,s),g(s,i),g(e,o),g(e,_),g(_,f),u||(d=[I(_,"click",a[2]),I(e,"click",a[1])],u=!0)},p(l,m){m&1&&n!==(n=(l[0].text.trim()||"No title")+"")&&ie(i,n),m&1&&Q(e,"item--done",l[0].done)},d(l){l&&h(e),u=!1,oe(d)}}}function _e(a){let e,s=a[0]&&G(a);return{c(){s&&s.c(),e=T()},l(n){s&&s.l(n),e=T()},m(n,i){s&&s.m(n,i),b(n,e,i)},p(n,[i]){n[0]?s?s.p(n,i):(s=G(n),s.c(),s.m(e.parentNode,e)):s&&(s.d(1),s=null)},i:N,o:N,d(n){s&&s.d(n),n&&h(e)}}}function me(a,e,s){const n=C();let{item:i=null}=e;const o=()=>{n("toggle")},_=f=>{f.stopPropagation(),n("remove")};return a.$$set=f=>{"item"in f&&s(0,i=f.item)},[i,o,_]}class le extends P{constructor(e){super();U(this,e,me,_e,V,{item:0})}}function Y(a,e,s){const n=a.slice();return n[10]=e[s],n[11]=e,n[12]=s,n}function Z(a,e,s){const n=a.slice();return n[10]=e[s],n[13]=e,n[14]=s,n}function x(a,e){let s,n,i,o;function _(l){e[3](l,e[10],e[13],e[14])}function f(){return e[4](e[10])}function u(){return e[5](e[10])}let d={};return e[10]!==void 0&&(d.item=e[10]),n=new le({props:d}),J.push(()=>K(n,"item",_)),n.$on("toggle",f),n.$on("remove",u),{key:a,first:null,c(){s=T(),L(n.$$.fragment),this.h()},l(l){s=T(),R(n.$$.fragment,l),this.h()},h(){this.first=s},m(l,m){b(l,s,m),M(n,l,m),o=!0},p(l,m){e=l;const r={};!i&&m&1&&(i=!0,r.item=e[10],H(()=>i=!1)),n.$set(r)},i(l){o||(w(n.$$.fragment,l),o=!0)},o(l){D(n.$$.fragment,l),o=!1},d(l){l&&h(s),O(n,l)}}}function ee(a,e){let s,n,i,o;function _(l){e[6](l,e[10],e[11],e[12])}function f(){return e[7](e[10])}function u(){return e[8](e[10])}let d={};return e[10]!==void 0&&(d.item=e[10]),n=new le({props:d}),J.push(()=>K(n,"item",_)),n.$on("toggle",f),n.$on("remove",u),{key:a,first:null,c(){s=T(),L(n.$$.fragment),this.h()},l(l){s=T(),R(n.$$.fragment,l),this.h()},h(){this.first=s},m(l,m){b(l,s,m),M(n,l,m),o=!0},p(l,m){e=l;const r={};!i&&m&1&&(i=!0,r.item=e[10],H(()=>i=!1)),n.$set(r)},i(l){o||(w(n.$$.fragment,l),o=!0)},o(l){D(n.$$.fragment,l),o=!1},d(l){l&&h(s),O(n,l)}}}function de(a){let e,s=[],n=new Map,i,o=[],_=new Map,f,u=a[0].filter(te);const d=r=>r[10].id;for(let r=0;r<u.length;r+=1){let t=Z(a,u,r),c=d(t);n.set(c,s[r]=x(c,t))}let l=a[0].filter(ne);const m=r=>r[10].id;for(let r=0;r<l.length;r+=1){let t=Y(a,l,r),c=m(t);_.set(c,o[r]=ee(c,t))}return{c(){e=$("div");for(let r=0;r<s.length;r+=1)s[r].c();i=S();for(let r=0;r<o.length;r+=1)o[r].c();this.h()},l(r){e=k(r,"DIV",{class:!0});var t=y(e);for(let c=0;c<s.length;c+=1)s[c].l(t);i=q(t);for(let c=0;c<o.length;c+=1)o[c].l(t);t.forEach(h),this.h()},h(){v(e,"class","list svelte-10ytnoi")},m(r,t){b(r,e,t);for(let c=0;c<s.length;c+=1)s[c].m(e,null);g(e,i);for(let c=0;c<o.length;c+=1)o[c].m(e,null);f=!0},p(r,[t]){t&7&&(u=r[0].filter(te),W(),s=X(s,t,d,1,r,u,n,e,F,x,i,Z),z()),t&7&&(l=r[0].filter(ne),W(),o=X(o,t,m,1,r,l,_,e,F,ee,null,Y),z())},i(r){if(!f){for(let t=0;t<u.length;t+=1)w(s[t]);for(let t=0;t<l.length;t+=1)w(o[t]);f=!0}},o(r){for(let t=0;t<s.length;t+=1)D(s[t]);for(let t=0;t<o.length;t+=1)D(o[t]);f=!1},d(r){r&&h(e);for(let t=0;t<s.length;t+=1)s[t].d();for(let t=0;t<o.length;t+=1)o[t].d()}}}const te=a=>!a.done,ne=a=>a.done;function he(a,e,s){let{items:n=[]}=e;const i=C(),o=({item:t})=>{t.done=!t.done,_({item:t,skipEvent:!0}),n.unshift(t),i("onToggle",t)},_=({item:t,skipEvent:c})=>{s(0,n=n.filter(p=>p!==t)),c||i("onRemove",t)};function f(t,c,p,E){p[E]=t,s(0,n)}const u=t=>o({item:t}),d=t=>_({item:t});function l(t,c,p,E){p[E]=t,s(0,n)}const m=t=>o({item:t}),r=t=>_({item:t});return a.$$set=t=>{"items"in t&&s(0,n=t.items)},[n,o,_,f,u,d,l,m,r]}class pe extends P{constructor(e){super();U(this,e,he,de,V,{items:0})}}function ge(a){let e,s,n,i,o,_,f,u,d,l;o=new fe({}),o.$on("onEnter",a[3]);function m(t){a[4](t)}let r={};return a[0]!==void 0&&(r.items=a[0]),u=new pe({props:r}),J.push(()=>K(u,"items",m)),u.$on("onToggle",a[2]),u.$on("onRemove",a[2]),{c(){e=$("article"),s=$("h1"),n=A("ToDoApp"),i=S(),L(o.$$.fragment),_=S(),f=$("div"),L(u.$$.fragment),this.h()},l(t){e=k(t,"ARTICLE",{class:!0});var c=y(e);s=k(c,"H1",{class:!0});var p=y(s);n=B(p,"ToDoApp"),p.forEach(h),i=q(c),R(o.$$.fragment,c),_=q(c),f=k(c,"DIV",{class:!0});var E=y(f);R(u.$$.fragment,E),E.forEach(h),c.forEach(h),this.h()},h(){v(s,"class","svelte-5m9g69"),v(f,"class","list-container svelte-5m9g69"),v(e,"class","svelte-5m9g69")},m(t,c){b(t,e,c),g(e,s),g(s,n),g(e,i),M(o,e,null),g(e,_),g(e,f),M(u,f,null),l=!0},p(t,[c]){const p={};!d&&c&1&&(d=!0,p.items=t[0],H(()=>d=!1)),u.$set(p)},i(t){l||(w(o.$$.fragment,t),w(u.$$.fragment,t),l=!0)},o(t){D(o.$$.fragment,t),D(u.$$.fragment,t),l=!1},d(t){t&&h(e),O(o),O(u)}}}const se="toDoList";function ve(a,e,s){let n;re(()=>{try{s(0,n=JSON.parse(localStorage.getItem(se))||[])}catch{s(0,n=[]),o()}});const i=u=>{u=u.trim(),!!u&&(s(0,n=[{id:ae(),done:!1,text:u},...n]),o())},o=()=>{localStorage.setItem(se,JSON.stringify(n))},_=u=>i(u.detail);function f(u){n=u,s(0,n)}return[n,i,o,_,f]}class ke extends P{constructor(e){super();U(this,e,ve,ge,V,{})}}export{ke as default};
