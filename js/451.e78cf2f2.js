"use strict";(self["webpackChunkproject"]=self["webpackChunkproject"]||[]).push([[451],{3832:function(l,t,e){e.r(t),e.d(t,{default:function(){return $}});e(4114);var a=e(6768),s=e(4232),c=e(1387),i=e(144),o=e(782),r=e(4373);const u={class:"row"},n=(0,a.Lk)("h1",null,"商品介紹",-1),d={class:"card mb-3"},p={class:"row"},m={class:"col-lg-4 col-md-6 col-sm-6 col-12 border-end"},v=["src","alt","title"],g={class:"row"},k=["src","alt","title","onClick"],_={class:"col-lg-8 col-md-6 col-sm-6 col-12 py-5"},L={class:"row"},b={class:"card-title"},f={class:"card-text mt-2"},y={class:"card-text mt-3"},h={class:"row mt-3"},w=(0,a.Lk)("div",{class:"col-lg col-md-7 col-sm-7 col"},[(0,a.Lk)("div",{class:"input-group input-group-lg"},[(0,a.Lk)("span",{class:"input-group-text",id:"inputGroup-sizing-lg"},"數量"),(0,a.Lk)("input",{id:"qty",type:"number",min:"1",max:"50",value:"1",class:"form-control","aria-label":"Sizing example input","aria-describedby":"inputGroup-sizing-lg"})])],-1),q={class:"col-lg col-md-5 col-sm-5 col"},C={class:"card-text mt-5"};var N={__name:"h_detail",setup(l){const t=(0,i.KR)([]),N=(0,o.Pj)(),S=(0,c.lq)(),$="http://35.206.224.191/select.php",x=(0,a.EW)((()=>S.params.detail)),E=(0,i.KR)(),I=l=>{E.value=e(290)(`./${l}`)};function j(l){r.A.get($,{params:{do:"product",p_id:l}}).then((l=>{t.value=l.data,E.value=e(290)(`./${l.data.p_image}`)}))}function z(l){let t=document.getElementById("qty").value;if(t<=0)return alert("產品數量不可為0或負數!"),!1;void 0==t&&(t=1);let e=l,a=0;const s={p_id:e,qty:Number(t)};let c=localStorage.getItem("cartlist");if(null==c)localStorage.setItem("cartlist",JSON.stringify([s]));else{let l=JSON.parse(c);l.forEach((l=>{if(s.p_id==l.p_id){let t=Number(l.qty)+Number(s.qty);l.qty=t,a++}})),0==a&&(N.commit("qtyPlus"),l.push(s)),localStorage.setItem("cartlist",JSON.stringify(l))}}return j(x.value),(0,a.wB)(x,(l=>{j(l),window.scrollTo(0,0)})),window.scrollTo(0,0),(l,c)=>((0,a.uX)(),(0,a.CE)("div",u,[n,(0,a.Lk)("div",d,[(0,a.Lk)("div",p,[(0,a.Lk)("div",m,[(0,a.Lk)("img",{src:E.value,class:"img-fluid rounded",alt:`${t.value.p_name}`,title:`${t.value.p_name}`},null,8,v),(0,a.Lk)("div",g,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(t.value.all_image,(l=>((0,a.uX)(),(0,a.CE)("div",{key:l.sort_id,class:"col-md-4 col-sm-6 col-4 border"},[(0,a.Lk)("img",{src:e(290)(`./${l.img_name}`),alt:`${t.value.p_name}`,title:`${t.value.p_name}`,class:"img-fluid",onClick:t=>I(l.img_name)},null,8,k)])))),128))])]),(0,a.Lk)("div",_,[(0,a.Lk)("div",L,[(0,a.Lk)("h2",b,(0,s.v_)(t.value.p_name),1),(0,a.Lk)("p",f,(0,s.v_)(t.value.p_intro),1),(0,a.Lk)("h4",y,"NT. "+(0,s.v_)(t.value.p_price),1)]),(0,a.Lk)("div",h,[w,(0,a.Lk)("div",q,[(0,a.Lk)("button",{type:"button",class:"btn btn-success btn-lg color-success",onClick:c[0]||(c[0]=l=>z(t.value.p_id))}," 加入購物車 ")])]),(0,a.Lk)("p",C,(0,s.v_)(t.value.p_content),1)])])])]))}};const S=N;var $=S}}]);
//# sourceMappingURL=451.e78cf2f2.js.map