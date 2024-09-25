(function(){"use strict";var e={3390:function(e,t,n){var o=n(5130),r=n(6768),a=n(4232),i=n(144),c=n(4373),l=n(782);const u={class:"section"},s={class:"left"},f={class:"dropdown"},d={class:"dropdown-toggle",role:"button","data-bs-toggle":"dropdown"},m={class:"dropdown-menu"},p={class:"right"},h=["textContent"];var b={__name:"c_navbar",setup(e){const t=(0,l.Pj)(),n="http://35.206.224.191:80/project/select.php",o=(0,i.KR)(null),b=(0,i.KR)([]),g=(0,i.KR)(""),v=(0,r.EW)((()=>t.state.cartQty));(0,r.wB)(v,(()=>{o.value.classList.add("qty")})),(0,r.sV)((()=>{y(),o.value.addEventListener("transitionend",(()=>{o.value.classList.remove("qty")}))}));const y=()=>{let e=localStorage.getItem("cartlist"),n=0;if("[]"!=e&&null!=e){let t=JSON.parse(e);t.forEach((()=>n++))}t.commit("setQty",n)};return c.A.get(n,{params:{do:"class"}}).then((e=>{b.value=e.data,t.state.ProductClass=e.data})),(e,t)=>{const n=(0,r.g2)("font-awesome-icon"),i=(0,r.g2)("router-link");return(0,r.uX)(),(0,r.CE)("nav",u,[(0,r.Lk)("div",s,[(0,r.bF)(i,{to:{name:"home"}},{default:(0,r.k6)((()=>[(0,r.bF)(n,{class:"box",icon:["fas","store"]})])),_:1}),(0,r.bF)(i,{to:{name:"main",query:{searchText:g.value}}},{default:(0,r.k6)((()=>[(0,r.bF)(n,{class:"box",icon:["fas","house"]})])),_:1},8,["to"]),(0,r.Lk)("div",f,[(0,r.Lk)("a",d,[(0,r.bF)(n,{class:"box",icon:["fas","rectangle-list"]})]),(0,r.Lk)("ul",m,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(b.value,(e=>((0,r.uX)(),(0,r.CE)(r.FK,{key:e.id},[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(e.childclass,(e=>((0,r.uX)(),(0,r.CE)("li",{key:e.id},[(0,r.bF)(i,{class:"dropdown-item",to:{name:"categoryId",params:{categoryId:`${e.class}`}}},{default:(0,r.k6)((()=>[(0,r.eW)((0,a.v_)(e.cname),1)])),_:2},1032,["to"])])))),128))],64)))),128))])])]),(0,r.Lk)("div",p,[(0,r.bF)(i,{to:{name:"member"}},{default:(0,r.k6)((()=>[(0,r.bF)(n,{class:"box",icon:["fas","user"]})])),_:1}),(0,r.bF)(i,{to:{name:"shoppingcart"},class:"cart"},{default:(0,r.k6)((()=>[(0,r.bF)(n,{class:"box",icon:["fas","cart-shopping"]}),(0,r.Lk)("b",{ref_key:"qty",ref:o,class:"text-bg-primary badge cartQty",textContent:(0,a.v_)(v.value)},null,8,h)])),_:1})])])}}},g=n(1241);const v=(0,g.A)(b,[["__scopeId","data-v-45e1ed4a"]]);var y=v;const k=e=>((0,r.Qi)("data-v-1260babe"),e=e(),(0,r.jt)(),e),C={class:"footer"},E=k((()=>(0,r.Lk)("h6",null,"本網站內容、圖片作品展示，不為商業用途",-1))),w=k((()=>(0,r.Lk)("h6",null,"Copyright © 2024 HankLin. All rights reserved.",-1))),_=[E,w];function L(e,t){return(0,r.uX)(),(0,r.CE)("div",C,_)}const F={},j=(0,g.A)(F,[["render",L],["__scopeId","data-v-1260babe"]]);var A=j,S={__name:"App",setup(e){return(e,t)=>{const n=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.bF)(y),(0,r.bF)(n),(0,r.bF)(A)],64)}}};const I=S;var x=I,O=n(9325),P=(0,l.y$)({state:{ProductClass:[],cartQty:(0,i.KR)(0)},getters:{},mutations:{setQty(e,t){e.cartQty=t},qtyPlus(e){e.cartQty++},qtyMinus(e){e.cartQty--}},actions:{},modules:{}}),N=(n(8077),n(8950)),T=n(2353),K=n(292);N.Yv.add(T.X7I),(0,o.Ef)(x).component("font-awesome-icon",K.gc).use(P).use(O.A).mount("#app")},9325:function(e,t,n){var o=n(1387),r=n(4373);const a=[{path:"",name:"home",alias:"/home",component:()=>n.e(552).then(n.bind(n,2552))},{path:"/main",name:"main",component:()=>Promise.all([n.e(290),n.e(487)]).then(n.bind(n,7487))},{path:"/category/:categoryId",name:"categoryId",component:()=>Promise.all([n.e(290),n.e(226)]).then(n.bind(n,7226)),children:[{path:":detail",name:"detail",component:()=>Promise.all([n.e(290),n.e(451)]).then(n.bind(n,3832))}]},{path:"/login",name:"login",component:()=>n.e(688).then(n.bind(n,5688))},{path:"/member",name:"member",component:()=>n.e(368).then(n.bind(n,1368)),redirect:{name:"profile"},children:[{path:"profile",name:"profile",component:()=>n.e(36).then(n.bind(n,5036))},{path:"order",name:"order",component:()=>n.e(464).then(n.bind(n,6464)),children:[{path:"orderDetail",name:"orderDetail",component:()=>n.e(622).then(n.bind(n,1622))}]}],beforeEnter:async()=>{const e=localStorage.getItem("isLogin");if(!e)return alert("請先登入"),{name:"login"};const t=localStorage.getItem("token");if(""==t)return alert("第三方憑證錯誤，請重新登入"),{name:"login"};{const e="http://35.206.224.191/project/login.php",n=await r.A.get(e,{params:{token:t}}).then((e=>e.data));if(!n)return localStorage.removeItem("isLogin"),localStorage.removeItem("token"),localStorage.removeItem("userName"),alert("第三方憑證錯誤，請重新登入"),{name:"login"}}}},{path:"/shoppingcart",name:"shoppingcart",component:()=>Promise.all([n.e(290),n.e(69)]).then(n.bind(n,6069))},{path:"/checkout",name:"checkout",component:()=>n.e(877).then(n.bind(n,2258)),beforeEnter:async()=>{const e=localStorage.getItem("isLogin");if(!e)return alert("請先登入"),{name:"login"}}}],i=(0,o.aE)({history:(0,o.LA)(),routes:a});t.A=i}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,a){if(!o){var i=1/0;for(s=0;s<e.length;s++){o=e[s][0],r=e[s][1],a=e[s][2];for(var c=!0,l=0;l<o.length;l++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](o[l])}))?o.splice(l--,1):(c=!1,a<i&&(i=a));if(c){e.splice(s--,1);var u=r();void 0!==u&&(t=u)}}return t}a=a||0;for(var s=e.length;s>0&&e[s-1][2]>a;s--)e[s]=e[s-1];e[s]=[o,r,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{36:"caf50827",69:"18abfafd",226:"7450e3b4",290:"1ca84bfb",368:"6fad249a",451:"2a214ebc",464:"adecf831",487:"9765aa37",552:"2f01f72d",622:"ede8518e",688:"a6e744d3",877:"826c616f"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{36:"25093ff9",69:"0c2fbc09",226:"dbefa9e6",368:"faa3e15d",487:"134543fe",552:"e90faee8",622:"a016eb26",688:"7b9f27b9",877:"47c010f3"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="project:";n.l=function(o,r,a,i){if(e[o])e[o].push(r);else{var c,l;if(void 0!==a)for(var u=document.getElementsByTagName("script"),s=0;s<u.length;s++){var f=u[s];if(f.getAttribute("src")==o||f.getAttribute("data-webpack")==t+a){c=f;break}}c||(l=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.setAttribute("data-webpack",t+a),c.src=o),e[o]=[r];var d=function(t,n){c.onerror=c.onload=null,clearTimeout(m);var r=e[o];if(delete e[o],c.parentNode&&c.parentNode.removeChild(c),r&&r.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(d.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=d.bind(null,c.onerror),c.onload=d.bind(null,c.onload),l&&document.head.appendChild(c)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,o,r,a){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css",n.nc&&(i.nonce=n.nc);var c=function(n){if(i.onerror=i.onload=null,"load"===n.type)r();else{var o=n&&n.type,c=n&&n.target&&n.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+o+": "+c+")");l.name="ChunkLoadError",l.code="CSS_CHUNK_LOAD_FAILED",l.type=o,l.request=c,i.parentNode&&i.parentNode.removeChild(i),a(l)}};return i.onerror=i.onload=c,i.href=t,o?o.parentNode.insertBefore(i,o.nextSibling):document.head.appendChild(i),i},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],a=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(a===e||a===t))return r}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){r=i[o],a=r.getAttribute("data-href");if(a===e||a===t)return r}},o=function(o){return new Promise((function(r,a){var i=n.miniCssF(o),c=n.p+i;if(t(i,c))return r();e(o,c,null,r,a)}))},r={524:0};n.f.miniCss=function(e,t){var n={36:1,69:1,226:1,368:1,487:1,552:1,622:1,688:1,877:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=o(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}}(),function(){var e={524:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var a=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=a);var i=n.p+n.u(t),c=new Error,l=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;c.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",c.name="ChunkLoadError",c.type=a,c.request=i,r[1](c)}};n.l(i,l,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,a,i=o[0],c=o[1],l=o[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(r in c)n.o(c,r)&&(n.m[r]=c[r]);if(l)var s=l(n)}for(t&&t(o);u<i.length;u++)a=i[u],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(s)},o=self["webpackChunkproject"]=self["webpackChunkproject"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[504],(function(){return n(3390)}));o=n.O(o)})();
//# sourceMappingURL=app.ea0232cf.js.map