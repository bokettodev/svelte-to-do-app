import{S as D,i as N,s as x,e as p,t as q,k as I,c as v,a as h,h as E,d as _,m as P,b as g,W as T,g as S,J as d,Q as k,j as B,K as y,R as C,T as J}from"../../chunks/vendor-663a98ee.js";function K(o){var j;let t,l,i=(((j=o[0])==null?void 0:j.text.trim())||"No title")+"",r,c,s,n,f,b;return{c(){t=p("div"),l=p("p"),r=q(i),c=I(),s=p("button"),n=q("\u2715"),this.h()},l(e){t=v(e,"DIV",{class:!0});var a=h(t);l=v(a,"P",{class:!0});var m=h(l);r=E(m,i),m.forEach(_),c=P(a),s=v(a,"BUTTON",{class:!0});var u=h(s);n=E(u,"\u2715"),u.forEach(_),a.forEach(_),this.h()},h(){var e;g(l,"class","svelte-q6mmuj"),g(s,"class","svelte-q6mmuj"),g(t,"class","item svelte-q6mmuj"),T(t,"item--done",(e=o[0])==null?void 0:e.done)},m(e,a){S(e,t,a),d(t,l),d(l,r),d(t,c),d(t,s),d(s,n),f||(b=[k(s,"click",o[2]),k(t,"click",o[1])],f=!0)},p(e,[a]){var m,u;a&1&&i!==(i=(((m=e[0])==null?void 0:m.text.trim())||"No title")+"")&&B(r,i),a&1&&T(t,"item--done",(u=e[0])==null?void 0:u.done)},i:y,o:y,d(e){e&&_(t),f=!1,C(b)}}}function O(o,t,l){let{item:i=null}=t;const r=J();function c(){r("toggle")}function s(n){n.stopPropagation(),r("remove")}return o.$$set=n=>{"item"in n&&l(0,i=n.item)},[i,c,s]}class R extends D{constructor(t){super();N(this,t,O,K,x,{item:0})}}export{R as default};
