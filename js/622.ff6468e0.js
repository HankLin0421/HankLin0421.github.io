"use strict";(self["webpackChunkproject"]=self["webpackChunkproject"]||[]).push([[622],{1622:function(t,e,n){n.r(e),n.d(e,{default:function(){return J}});n(4114);var l=n(6768),o=n(4232),a=n(1387),s=n(4373),c=n(144);const u=t=>((0,l.Qi)("data-v-c4bd93f4"),t=t(),(0,l.jt)(),t),d=["textContent"],i={class:"p-5"},v={class:"p-2"},r=["textContent"],p={class:"p-2"},k=["textContent"],_={class:"p-2"},h=["textContent"],x={class:"p-2"},L=["textContent"],C={class:"p-2"},y=["textContent"],b={class:"p-2"},f=["textContent"],g={class:"p-2"},m=["textContent"],w=u((()=>(0,l.Lk)("h3",{class:"p-2 bg-secondary bg-opacity-25 text-dark"},"訂單狀態",-1))),S={class:"text-center p-5"},$=["textContent"],X=u((()=>(0,l.Lk)("h3",{class:"p-2 bg-secondary bg-opacity-25 text-dark"},"訂單商品",-1))),j={class:"table-responsive text-center"},q={class:"table align-middle"},A=u((()=>(0,l.Lk)("thead",null,[(0,l.Lk)("tr",null,[(0,l.Lk)("th",{scope:"col"},"名稱"),(0,l.Lk)("th",{scope:"col"},"價格"),(0,l.Lk)("th",{scope:"col"},"數量")])],-1))),E=["textContent"],I=["textContent"],W=["textContent"];var K={__name:"h_orderdetail",setup(t){const e=(0,a.lq)(),n=(0,l.EW)((()=>e.query.orderId)),u=(0,c.KR)({}),K="https://hanklin0421.github.io/project2/login.php",T="https://hanklin0421.github.io/project2/select.php",F={headers:{"Content-Type":"application/x-www-form-urlencoded"}};let J={do:"orderDetail",o_id:n.value,o_account:localStorage.getItem("userAcc")};async function N(t){u.value.o_item=[];for(let e of t)await s.A.get(T,{params:{do:"cart",p_id:e.p_id,qty:e.qty}}).then((t=>{u.value.o_item.push(t.data)}))}return(0,l.wB)(n,(t=>{J.o_id=t,s.A.post(K,J,F).then((t=>{u.value=t.data,N(JSON.parse(u.value.o_item))})),window.scrollTo(0,0)})),s.A.post(K,J,F).then((t=>{u.value=t.data,N(JSON.parse(u.value.o_item))})),window.scrollTo(0,0),(t,e)=>{const a=(0,l.g2)("font-awesome-icon");return(0,l.uX)(),(0,l.CE)(l.FK,null,[(0,l.Lk)("h3",{class:"p-2 bg-secondary bg-opacity-25 text-dark",textContent:(0,o.v_)(`編號 ${n.value} 的訂單資訊`)},null,8,d),(0,l.Lk)("div",i,[(0,l.Lk)("div",v,[(0,l.Lk)("h5",{textContent:(0,o.v_)(`訂購人: ${u.value.o_name}`)},null,8,r)]),(0,l.Lk)("div",p,[(0,l.Lk)("h5",{textContent:(0,o.v_)(`聯絡電話: ${u.value.o_phone}`)},null,8,k)]),(0,l.Lk)("div",_,[(0,l.Lk)("h5",{textContent:(0,o.v_)(`配送方式: ${u.value.o_delivery}`)},null,8,h)]),(0,l.Lk)("div",x,[(0,l.Lk)("h5",{textContent:(0,o.v_)(`配送地址: ${u.value.o_address}`)},null,8,L)]),(0,l.Lk)("div",C,[(0,l.Lk)("h5",{textContent:(0,o.v_)(`訂單總額: ${u.value.o_total} 元`)},null,8,y)]),(0,l.Lk)("div",b,[(0,l.Lk)("h5",{textContent:(0,o.v_)(`訂購時間: ${u.value.o_create}`)},null,8,f)]),(0,l.Lk)("div",g,[(0,l.Lk)("h5",{textContent:(0,o.v_)(`備註: ${u.value.o_note}`)},null,8,m)])]),w,(0,l.Lk)("div",S,["準備中"==u.value.o_deliveryStatus?((0,l.uX)(),(0,l.Wv)(a,{key:0,class:"deliveryStatus",icon:["fas","box"]})):"配送中"==u.value.o_deliveryStatus?((0,l.uX)(),(0,l.Wv)(a,{key:1,class:"deliveryStatus",icon:["fas","truck"]})):"已結單"==u.value.o_deliveryStatus?((0,l.uX)(),(0,l.Wv)(a,{key:2,class:"deliveryStatus",icon:["fas","file-circle-check"]})):(0,l.Q3)("",!0),(0,l.Lk)("h5",{class:"mt-3",textContent:(0,o.v_)(u.value.o_deliveryStatus)},null,8,$)]),X,(0,l.Lk)("div",j,[(0,l.Lk)("table",q,[A,(0,l.Lk)("tbody",null,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(u.value.o_item,(t=>((0,l.uX)(),(0,l.CE)("tr",{key:t.p_id},[(0,l.Lk)("td",{textContent:(0,o.v_)(t.p_name)},null,8,E),(0,l.Lk)("td",{textContent:(0,o.v_)(t.p_price)},null,8,I),(0,l.Lk)("td",{textContent:(0,o.v_)(t.qty)},null,8,W)])))),128))])])])],64)}}},T=n(1241);const F=(0,T.A)(K,[["__scopeId","data-v-c4bd93f4"]]);var J=F}}]);
//# sourceMappingURL=622.ff6468e0.js.map