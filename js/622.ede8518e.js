"use strict";(self["webpackChunkproject"]=self["webpackChunkproject"]||[]).push([[622],{1622:function(t,e,l){l.r(e),l.d(e,{default:function(){return J}});l(4114);var n=l(6768),o=l(4232),a=l(1387),s=l(4373),c=l(144);const u=t=>((0,n.Qi)("data-v-c4bd93f4"),t=t(),(0,n.jt)(),t),d=["textContent"],v={class:"p-5"},r={class:"p-2"},i=["textContent"],p={class:"p-2"},k=["textContent"],_={class:"p-2"},x=["textContent"],L={class:"p-2"},h=["textContent"],C={class:"p-2"},y=["textContent"],f={class:"p-2"},b=["textContent"],m={class:"p-2"},g=["textContent"],w=u((()=>(0,n.Lk)("h3",{class:"p-2 bg-secondary bg-opacity-25 text-dark"},"訂單狀態",-1))),S={class:"text-center p-5"},$=["textContent"],X=u((()=>(0,n.Lk)("h3",{class:"p-2 bg-secondary bg-opacity-25 text-dark"},"訂單商品",-1))),j={class:"table-responsive text-center"},q={class:"table align-middle"},A=u((()=>(0,n.Lk)("thead",null,[(0,n.Lk)("tr",null,[(0,n.Lk)("th",{scope:"col"},"名稱"),(0,n.Lk)("th",{scope:"col"},"價格"),(0,n.Lk)("th",{scope:"col"},"數量")])],-1))),E=["textContent"],I=["textContent"],W=["textContent"];var K={__name:"h_orderdetail",setup(t){const e=(0,a.lq)(),l=(0,n.EW)((()=>e.query.orderId)),u=(0,c.KR)({}),K="http://35.206.224.191/project/login.php",T="http://35.206.224.191:80/project/select.php",F={headers:{"Content-Type":"application/x-www-form-urlencoded"}};let J={do:"orderDetail",o_id:l.value,o_account:localStorage.getItem("userAcc")};async function N(t){u.value.o_item=[];for(let e of t)await s.A.get(T,{params:{do:"cart",p_id:e.p_id,qty:e.qty}}).then((t=>{u.value.o_item.push(t.data)}))}return(0,n.wB)(l,(t=>{J.o_id=t,s.A.post(K,J,F).then((t=>{u.value=t.data,N(JSON.parse(u.value.o_item))})),window.scrollTo(0,0)})),s.A.post(K,J,F).then((t=>{u.value=t.data,N(JSON.parse(u.value.o_item))})),window.scrollTo(0,0),(t,e)=>{const a=(0,n.g2)("font-awesome-icon");return(0,n.uX)(),(0,n.CE)(n.FK,null,[(0,n.Lk)("h3",{class:"p-2 bg-secondary bg-opacity-25 text-dark",textContent:(0,o.v_)(`編號 ${l.value} 的訂單資訊`)},null,8,d),(0,n.Lk)("div",v,[(0,n.Lk)("div",r,[(0,n.Lk)("h5",{textContent:(0,o.v_)(`訂購人: ${u.value.o_name}`)},null,8,i)]),(0,n.Lk)("div",p,[(0,n.Lk)("h5",{textContent:(0,o.v_)(`聯絡電話: ${u.value.o_phone}`)},null,8,k)]),(0,n.Lk)("div",_,[(0,n.Lk)("h5",{textContent:(0,o.v_)(`配送方式: ${u.value.o_delivery}`)},null,8,x)]),(0,n.Lk)("div",L,[(0,n.Lk)("h5",{textContent:(0,o.v_)(`配送地址: ${u.value.o_address}`)},null,8,h)]),(0,n.Lk)("div",C,[(0,n.Lk)("h5",{textContent:(0,o.v_)(`訂單總額: ${u.value.o_total} 元`)},null,8,y)]),(0,n.Lk)("div",f,[(0,n.Lk)("h5",{textContent:(0,o.v_)(`訂購時間: ${u.value.o_create}`)},null,8,b)]),(0,n.Lk)("div",m,[(0,n.Lk)("h5",{textContent:(0,o.v_)(`備註: ${u.value.o_note}`)},null,8,g)])]),w,(0,n.Lk)("div",S,["準備中"==u.value.o_deliveryStatus?((0,n.uX)(),(0,n.Wv)(a,{key:0,class:"deliveryStatus",icon:["fas","box"]})):"配送中"==u.value.o_deliveryStatus?((0,n.uX)(),(0,n.Wv)(a,{key:1,class:"deliveryStatus",icon:["fas","truck"]})):"已結單"==u.value.o_deliveryStatus?((0,n.uX)(),(0,n.Wv)(a,{key:2,class:"deliveryStatus",icon:["fas","file-circle-check"]})):(0,n.Q3)("",!0),(0,n.Lk)("h5",{class:"mt-3",textContent:(0,o.v_)(u.value.o_deliveryStatus)},null,8,$)]),X,(0,n.Lk)("div",j,[(0,n.Lk)("table",q,[A,(0,n.Lk)("tbody",null,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(u.value.o_item,(t=>((0,n.uX)(),(0,n.CE)("tr",{key:t.p_id},[(0,n.Lk)("td",{textContent:(0,o.v_)(t.p_name)},null,8,E),(0,n.Lk)("td",{textContent:(0,o.v_)(t.p_price)},null,8,I),(0,n.Lk)("td",{textContent:(0,o.v_)(t.qty)},null,8,W)])))),128))])])])],64)}}},T=l(1241);const F=(0,T.A)(K,[["__scopeId","data-v-c4bd93f4"]]);var J=F}}]);
//# sourceMappingURL=622.ede8518e.js.map