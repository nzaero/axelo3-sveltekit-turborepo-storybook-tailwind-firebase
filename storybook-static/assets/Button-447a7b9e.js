import{S as y,i as b,s as m,e as f,t as k,c as p,a as g,b as h,d as r,f as d,g as _,h as v,l as w,j as x,n as c,k as z}from"./index-045b47e0.js";function C(t){let e,a,s,o;return{c(){e=f("button"),a=k(t[0]),this.h()},l(i){e=p(i,"BUTTON",{type:!0,class:!0});var l=g(e);a=h(l,t[0]),l.forEach(r),this.h()},h(){d(e,"type","button"),d(e,"class","bg-green-600")},m(i,l){_(i,e,l),v(e,a),s||(o=w(e,"click",t[4]),s=!0)},p(i,[l]){l&1&&x(a,i[0])},i:c,o:c,d(i){i&&r(e),s=!1,o()}}}function B(t,e,a){let{primary:s=!1}=e,{backgroundColor:o=void 0}=e,{size:i="medium"}=e,{label:l=""}=e;function u(n){z.call(this,t,n)}return t.$$set=n=>{"primary"in n&&a(1,s=n.primary),"backgroundColor"in n&&a(2,o=n.backgroundColor),"size"in n&&a(3,i=n.size),"label"in n&&a(0,l=n.label)},t.$$.update=()=>{t.$$.dirty&2,t.$$.dirty&4},[l,s,o,i,u]}class V extends y{constructor(e){super(),b(this,e,B,C,m,{primary:1,backgroundColor:2,size:3,label:0})}}V.__docgen={version:3,name:"Button.svelte",data:[{visibility:"public",description:null,keywords:[],name:"primary",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{visibility:"public",description:null,keywords:[],name:"backgroundColor",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{visibility:"public",description:null,keywords:[],name:"size",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"medium"},{visibility:"public",description:null,keywords:[],name:"label",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""}],computed:[],methods:[],components:[],description:null,keywords:[],events:[{keywords:[],visibility:"public",description:"class={['storybook-button', `storybook-button--${size}, bg-green-600`, mode].join(' ')}",name:"click",parent:"button",modificators:[],locations:null}],slots:[],refs:[]};export{V as B};
//# sourceMappingURL=Button-447a7b9e.js.map
