(function(){"use strict";var e={6894:function(e,t,a){var r=a(5130),n=a(6768),s=a(4232);const i={class:"index-backg"},l={class:"header-wrapper"},o={class:"sidebar-header"},c={class:"sidebar-content"},u={class:"container-fluid"};function d(e,t,a,r,d,p){const m=(0,n.g2)("AppHeader"),k=(0,n.g2)("CartPage"),v=(0,n.g2)("router-view");return(0,n.uX)(),(0,n.CE)("div",i,[(0,n.Lk)("div",l,[(0,n.bF)(m,{cartItemCount:r.cartQuantity,onOpenSidebar:r.toggleSidebar},null,8,["cartItemCount","onOpenSidebar"])]),(0,n.Lk)("div",{class:(0,s.C4)(["sidebar",{active:r.isSidebarOpen}])},[(0,n.Lk)("div",o,[t[1]||(t[1]=(0,n.Lk)("span",{class:"sidebar-title"},"購物車",-1)),(0,n.Lk)("button",{class:"close-btn",onClick:t[0]||(t[0]=(...e)=>r.toggleSidebar&&r.toggleSidebar(...e))},"×")]),(0,n.Lk)("div",c,[(0,n.bF)(k,{cart:r.cart,onUpdateCart:r.updateCart},null,8,["cart","onUpdateCart"])])],2),(0,n.Lk)("div",u,[(0,n.bF)(v,{cart:r.cart,onAddToCart:r.addToCart,onUpdateCart:r.updateCart},null,8,["cart","onAddToCart","onUpdateCart"])]),t[2]||(t[2]=(0,n.Lk)("footer",{class:"footer"},[(0,n.Lk)("p",null,"本網站僅供個人作品使用，未提供商業用途"),(0,n.Lk)("p",null,"BBS © 2025 COPYRIGHT")],-1))])}var p=a(144),m=a(782);const k={class:"navbar"},v={class:"navbar-container"},g={class:"nav-item"},L={class:"nav-item"},b={class:"nav-item"},h={class:"nav-item"},C={class:"cart-badge"};function f(e,t,a,r,i,l){const o=(0,n.g2)("router-link");return(0,n.uX)(),(0,n.CE)("nav",k,[(0,n.Lk)("div",v,[(0,n.bF)(o,{to:"/",class:"navbar-brand",onClick:l.closeMenu},{default:(0,n.k6)((()=>t[3]||(t[3]=[(0,n.eW)("Bread Baking Studio")]))),_:1},8,["onClick"]),(0,n.Lk)("button",{class:"menu-toggle",onClick:t[0]||(t[0]=(...e)=>l.toggleMenu&&l.toggleMenu(...e))}," ☰ "),(0,n.Lk)("ul",{class:(0,s.C4)(["navbar-nav",{active:i.isMenuOpen}])},[(0,n.Lk)("li",g,[(0,n.bF)(o,{to:"/aboutbread",class:"nav-link",onClick:l.closeMenu},{default:(0,n.k6)((()=>t[4]||(t[4]=[(0,n.eW)("關於BBS")]))),_:1},8,["onClick"])]),(0,n.Lk)("li",L,[(0,n.bF)(o,{to:"/news",class:"nav-link",onClick:l.closeMenu},{default:(0,n.k6)((()=>t[5]||(t[5]=[(0,n.eW)("最新消息")]))),_:1},8,["onClick"])]),(0,n.Lk)("li",b,[(0,n.bF)(o,{to:"/menu",class:"nav-link",onClick:l.closeMenu},{default:(0,n.k6)((()=>t[6]||(t[6]=[(0,n.eW)("菜單")]))),_:1},8,["onClick"])]),(0,n.Lk)("li",h,[(0,n.Lk)("a",{class:"nav-link",onClick:t[1]||(t[1]=(...e)=>l.openSidebar&&l.openSidebar(...e))},[t[7]||(t[7]=(0,n.eW)(" 購物車 ")),(0,n.Lk)("span",C,(0,s.v_)(a.cartItemCount),1)])])],2),(0,n.Lk)("div",{class:(0,s.C4)(["menu-mask",{active:i.isMenuOpen}]),onClick:t[2]||(t[2]=(...e)=>l.closeMenu&&l.closeMenu(...e))},null,2)])])}var y={props:["cartItemCount"],data(){return{isMenuOpen:!1}},methods:{toggleMenu(){this.isMenuOpen=!this.isMenuOpen},closeMenu(){this.isMenuOpen=!1},openSidebar(){this.$emit("OpenSidebar")}}},w=a(1241);const _=(0,w.A)(y,[["render",f]]);var S=_;const E={class:"cart-container"},F={key:0,class:"cart-empty"},O={class:"cart-items"},X=["src"],W={class:"item-info"},x={class:"quantity-controls"},M=["onClick"],N=["onClick"],P=["onClick"],q={key:1,class:"total-price"},D={key:2,class:"order-area"};function T(e,t,a,r,i,l){const o=(0,n.g2)("router-link");return(0,n.uX)(),(0,n.CE)("div",E,[0===r.cart.length?((0,n.uX)(),(0,n.CE)("div",F,[(0,n.bF)(o,{to:"/menu",class:"cta-button"},{default:(0,n.k6)((()=>t[0]||(t[0]=[(0,n.eW)("選購去!")]))),_:1})])):(0,n.Q3)("",!0),(0,n.Lk)("ul",O,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(r.cart,((e,t)=>((0,n.uX)(),(0,n.CE)("li",{key:e.id,class:"cart-item"},[(0,n.Lk)("img",{src:e.image,class:"cart-img"},null,8,X),(0,n.Lk)("span",W,[(0,n.eW)((0,s.v_)(e.name)+" - "+(0,s.v_)(e.price)+" NTD x "+(0,s.v_)(e.quantity)+" = "+(0,s.v_)(e.price*e.quantity)+" NTD ",1),(0,n.Lk)("div",x,[(0,n.Lk)("button",{class:"p-adj",onClick:a=>r.updateQuantity(t,e.quantity-1)},"◀",8,M),(0,n.Lk)("span",null,(0,s.v_)(e.quantity),1),(0,n.Lk)("button",{class:"p-adj",onClick:a=>r.updateQuantity(t,e.quantity+1)},"▶",8,N),(0,n.Lk)("button",{class:"remove-button",onClick:e=>r.removeFromCart(t)},"移除",8,P)])])])))),128))]),t[2]||(t[2]=(0,n.Lk)("hr",null,null,-1)),r.cart.length>0?((0,n.uX)(),(0,n.CE)("h4",q,"總計金額 : "+(0,s.v_)(r.totalPrice)+" NTD",1)):(0,n.Q3)("",!0),0!==r.cart.length?((0,n.uX)(),(0,n.CE)("div",D,[(0,n.bF)(o,{to:"/checkorder",class:"cart-order"},{default:(0,n.k6)((()=>t[1]||(t[1]=[(0,n.eW)("訂單結帳")]))),_:1})])):(0,n.Q3)("",!0)])}a(8111),a(8237);var j={setup(){const e=(0,m.Pj)(),t=(0,n.EW)((()=>e.state.cart)),a=(0,n.EW)((()=>t.value.reduce(((e,t)=>e+t.price*t.quantity),0))),r=(a,r)=>{const n=[...t.value];r<=0?n.splice(a,1):n[a].quantity=r,e.commit("updateCart",n),localStorage.setItem("cart",JSON.stringify(n))},s=a=>{const r=[...t.value];r.splice(a,1),e.commit("updateCart",r),localStorage.setItem("cart",JSON.stringify(r))};return{cart:t,updateQuantity:r,removeFromCart:s,totalPrice:a}}};const I=(0,w.A)(j,[["render",T]]);var A=I;const Q=[{title:"🌸 櫻花口味新品上市！",date:"2025-02-20",image:"img/news/news_1.jpg"},{title:"🔥 本週滿額優惠活動",date:"2025-02-18",image:"img/news/news_1.jpg"},{title:"⏳ 冬季促銷最後倒數",date:"2025-02-15",image:"img/news/news_1.jpg"},{title:"🎉 新年快樂！店內優惠大放送",date:"2025-02-10",image:"img/news/news_1.jpg"}],B=[{id:1,name:"可頌",price:40,image:"img/bread/croissant.jpg"},{id:2,name:"肉桂捲",price:50,image:"img/bread/cinnamon_rolls.jpg"},{id:3,name:"山形吐司",price:80,image:"img/bread/plain_white_toast.jpg"},{id:4,name:"蘋果麥香麵包",price:80,image:"img/bread/apple_bread.jpg"},{id:5,name:"香蕉蛋糕",price:80,image:"img/bread/banana_cake.jpg"},{id:6,name:"芝麻饅頭",price:30,image:"img/bread/sesame_bun.jpg"}];var K={components:{AppHeader:S,CartPage:A},setup(){const e=(0,m.Pj)(),t=(0,p.KR)(!1);(0,n.sV)((()=>{const t=localStorage.getItem("cart");t&&e.commit("setCart",JSON.parse(t))}));const a=(0,n.EW)((()=>e.getters.cartQuantity)),r=t=>{e.commit("addToCart",t),localStorage.setItem("cart",JSON.stringify(e.state.cart))},s=t=>{e.commit("updateCart",t),localStorage.setItem("cart",JSON.stringify(t))},i=()=>{t.value=!t.value};return{cart:e.state.cart,addToCart:r,updateCart:s,toggleSidebar:i,isSidebarOpen:t,cartQuantity:a}},provide(){return{newsData:(0,p.KR)(Q),menuData:(0,p.KR)(B)}}};const J=(0,w.A)(K,[["render",d]]);var V=J,R=a(1387);const U={class:"container mt-4"},$={class:"row"};function H(e,t,a,r,s,i){const l=(0,n.g2)("CarouselPage"),o=(0,n.g2)("AnimatedPart"),c=(0,n.g2)("NewsList"),u=(0,n.g2)("MenuSummary"),d=(0,n.g2)("StoreLocation");return(0,n.uX)(),(0,n.CE)("div",null,[(0,n.Lk)("div",null,[(0,n.bF)(l)]),(0,n.Lk)("div",null,[(0,n.bF)(o)]),(0,n.Lk)("div",null,[(0,n.bF)(c,{news:r.newsData,limit:4,showMore:!0},null,8,["news"])]),(0,n.Lk)("div",U,[(0,n.Lk)("div",$,[(0,n.bF)(u,{limit:4})])]),(0,n.Lk)("div",null,[(0,n.bF)(d)])])}const z={class:"carousel"},Y=["src"],G={class:"dots"},Z=["onClick"];var ee={__name:"CarouselPage",setup(e){const t=(0,p.KR)(["img/carousel/bakery_1.jpg","img/carousel/bakery_2.jpg"]),a=(0,p.KR)(0);let i=null;const l=()=>{a.value=(a.value+1)%t.value.length},o=()=>{a.value=(a.value-1+t.value.length)%t.value.length};return(0,n.sV)((()=>{i=setInterval(l,6e3)})),(0,n.hi)((()=>{clearInterval(i)})),(e,i)=>((0,n.uX)(),(0,n.CE)("div",z,[(0,n.bF)(r.eB,{name:"fade",mode:"out-in"},{default:(0,n.k6)((()=>[((0,n.uX)(),(0,n.CE)("img",{src:t.value[a.value],key:a.value,class:"slide"},null,8,Y))])),_:1}),(0,n.Lk)("button",{class:"prev",onClick:o},"❮"),(0,n.Lk)("button",{class:"next",onClick:l},"❯"),(0,n.Lk)("div",G,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(t.value,((e,t)=>((0,n.uX)(),(0,n.CE)("span",{key:t,class:(0,s.C4)({active:t===a.value}),onClick:e=>a.value=t},null,10,Z)))),128))])]))}};const te=ee;var ae=te;const re={class:"news-list"},ne={class:"content"},se={class:"card"},ie=["src"],le={class:"card-body"},oe={class:"card-title"},ce={class:"text-muted"},ue={key:0,class:"more-btn"};function de(e,t,a,r,i,l){const o=(0,n.g2)("router-link");return(0,n.uX)(),(0,n.CE)("div",re,[t[1]||(t[1]=(0,n.Lk)("h3",{class:"news-title"},"最新消息",-1)),(0,n.Lk)("div",ne,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(r.displayedNews,((e,t)=>((0,n.uX)(),(0,n.CE)("div",{key:t,class:"cards"},[(0,n.Lk)("div",se,[e.image?((0,n.uX)(),(0,n.CE)("img",{key:0,src:e.image,class:"card-img-top",alt:"新聞圖片"},null,8,ie)):(0,n.Q3)("",!0),(0,n.Lk)("div",le,[(0,n.Lk)("h5",oe,(0,s.v_)(e.title),1),(0,n.Lk)("p",ce,(0,s.v_)(e.date),1)])])])))),128))]),a.showMore?((0,n.uX)(),(0,n.CE)("div",ue,[(0,n.bF)(o,{to:"/news",class:"btn"},{default:(0,n.k6)((()=>t[0]||(t[0]=[(0,n.eW)("查看更多")]))),_:1})])):(0,n.Q3)("",!0)])}var pe={props:{news:Array,limit:Number,title:String,showMore:Boolean},setup(e){const t=(0,n.EW)((()=>e.limit?e.news.slice(0,e.limit):e.news));return{displayedNews:t}}};const me=(0,w.A)(pe,[["render",de]]);var ke=me;const ve={class:"menu-summary"},ge={class:"menu-items"},Le={class:"card"},be=["src"],he={class:"card-body"},Ce={class:"card-title"},fe={class:"card-text"};function ye(e,t,a,r,i,l){const o=(0,n.g2)("router-link");return(0,n.uX)(),(0,n.CE)("div",ve,[t[1]||(t[1]=(0,n.Lk)("h2",{class:"menu-title"},"精選菜單",-1)),(0,n.Lk)("div",ge,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(r.limitedMenu,(e=>((0,n.uX)(),(0,n.CE)("div",{key:e.id,class:"menu-item"},[(0,n.Lk)("div",Le,[(0,n.Lk)("img",{src:e.image,class:"card-img-top img-fixed",alt:"菜單圖片"},null,8,be),(0,n.Lk)("div",he,[(0,n.Lk)("h4",Ce,(0,s.v_)(e.name),1),(0,n.Lk)("p",fe,"價格: $"+(0,s.v_)(e.price),1),(0,n.bF)(o,{to:"/menu",class:"btn-primary"},{default:(0,n.k6)((()=>t[0]||(t[0]=[(0,n.eW)("查看詳情")]))),_:1})])])])))),128))])])}var we={props:{limit:Number},setup(e){const t=(0,n.WQ)("menuData")||(0,p.KR)([]),a=(0,n.EW)((()=>t.value.slice(0,e.limit)));return{limitedMenu:a}}};const _e=(0,w.A)(we,[["render",ye]]);var Se=_e,Ee=a(3497),Fe=a.n(Ee);const Oe={class:"brand-story"};var Xe={__name:"AnimatedPart",setup(e){return(0,n.sV)((()=>{Fe().init({duration:1e3,once:!1,offset:100,easing:"ease-out"})})),(e,t)=>((0,n.uX)(),(0,n.CE)("section",Oe,t[0]||(t[0]=[(0,n.Fv)('<div><div class="content"><div class="image-block left" data-aos="fade-right"><img src="img/animated/left-bread.png" alt="左側圖片"></div><div class="text-block" data-aos="zoom-in"><h2>BBS 品牌故事</h2><p> 在 Bread Baking Studio，每一顆麵包都是我們對烘焙的熱愛與堅持。從揉捏麵糰的第一刻，到麵包在烤箱裡散發出溫暖香氣，每個步驟都承載著我們對手作的尊重與用心。我們相信，好的麵包不只是填飽肚子，更是一種生活的美好體驗。因此，我們選用最純粹的食材，堅持天然發酵，讓每一口都充滿濃厚的麥香與層次。Bread Baking Studio，不只是麵包店，更是一個分享溫度與故事的地方。無論是忙碌的一天中的小確幸，還是與家人朋友共度的溫馨時光，我們希望這裡的每一塊麵包，都能帶給你滿滿的幸福感。在這裡，麵包不只是食物，而是一種溫暖的傳遞。 🍞✨ </p></div><div class="image-block right" data-aos="fade-left"><img src="img/animated/right-bread.png" alt="右側圖片"></div></div></div>',1)])))}};const We=Xe;var xe=We,Me=(a(1701),a(6886)),Ne=a.n(Me);const Pe={class:"store-loc"},qe={class:"loc-info"};var De={__name:"StoreLocation",setup(e){const t=(0,p.KR)(null);return(0,n.sV)((()=>{const e=Ne().map(t.value).setView([25.0418,121.5532],20);Ne().tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(e);const a=Ne().divIcon({className:"circle-icon",html:'<div style="background-color: #69806C; width: 25px; height: 25px; border-radius: 50%;"></div>',iconSize:[30,30]});Ne().marker([25.0418,121.5532],{icon:a}).addTo(e).bindPopup("Bread Baking Studio").openPopup()})),(e,a)=>((0,n.uX)(),(0,n.CE)("section",Pe,[a[1]||(a[1]=(0,n.Lk)("h3",{class:"loc-title"},"店鋪位置",-1)),(0,n.Lk)("div",qe,[(0,n.Lk)("div",{class:"map",ref_key:"mapContainer",ref:t},null,512),a[0]||(a[0]=(0,n.Lk)("div",{class:"loc-des"},[(0,n.Lk)("h3",null,"店鋪地址"),(0,n.Lk)("p",null,"台北市大安區忠孝東路四段 100 號"),(0,n.Lk)("h3",null,"交通方式"),(0,n.Lk)("p",null,"捷運板南線「忠孝敦化站」步行 5 分鐘")],-1))])]))}};const Te=De;var je=Te,Ie={components:{CarouselPage:ae,NewsList:ke,MenuSummary:Se,AnimatedPart:xe,StoreLocation:je},setup(){const e=(0,n.WQ)("newsData");return e||console.warn("newsData is not provided!"),{newsData:e}}};const Ae=(0,w.A)(Ie,[["render",H]]);var Qe=Ae;const Be={class:"menu-page"},Ke={class:"menu-search"},Je={class:"menu-items"},Ve={class:"card"},Re=["src"],Ue={class:"card-body"},$e={class:"card-title"},He={class:"card-text"},ze=["onClick"];function Ye(e,t,a,i,l,o){return(0,n.uX)(),(0,n.CE)("div",Be,[(0,n.Lk)("div",Ke,[(0,n.bo)((0,n.Lk)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>i.search=e),class:"search-input",placeholder:"搜尋品名"},null,512),[[r.Jo,i.search]])]),(0,n.Lk)("div",Je,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(i.filteredMenu,(e=>((0,n.uX)(),(0,n.CE)("div",{key:e.id,class:"menu-item"},[(0,n.Lk)("div",Ve,[(0,n.Lk)("img",{src:e.image,class:"card-img-top img-fixed"},null,8,Re),(0,n.Lk)("div",Ue,[(0,n.Lk)("h5",$e,(0,s.v_)(e.name),1),(0,n.Lk)("p",He,"價格: $"+(0,s.v_)(e.price),1),(0,n.Lk)("button",{class:"btn-primary",onClick:t=>i.addToCart(e)},"加入購物車",8,ze)])])])))),128))])])}a(2489);var Ge={props:["cart"],emits:["add-to-cart"],setup(e,{emit:t}){const a=(0,p.KR)(""),r=(0,n.WQ)("menuData")||(0,p.KR)([]),s=(0,n.EW)((()=>Array.isArray(r.value)?r.value.filter((e=>e.name?.toLowerCase().includes(a.value.toLowerCase()))):[])),i=e=>t("add-to-cart",e);return{search:a,filteredMenu:s,addToCart:i}}};const Ze=(0,w.A)(Ge,[["render",Ye]]);var et=Ze;function tt(e,t,a,r,s,i){const l=(0,n.g2)("NewsList");return(0,n.uX)(),(0,n.CE)("div",null,[(0,n.bF)(l,{news:r.newsData,showMore:!1},null,8,["news"])])}var at={components:{NewsList:ke},setup(){const e=(0,n.WQ)("newsData");return e?{newsData:e}:(console.warn("newsData is not provided!"),{newsData:[]})}};const rt=(0,w.A)(at,[["render",tt]]);var nt=rt;function st(e,t,a,r,s,i){const l=(0,n.g2)("AnimatedPart");return(0,n.uX)(),(0,n.CE)("div",null,[(0,n.bF)(l)])}var it={components:{AnimatedPart:xe},setup(){}};const lt=(0,w.A)(it,[["render",st]]);var ot=lt;const ct={class:"order-progress"},ut={key:0,class:"order-confirm"},dt={class:"order-info"},pt={class:"cart-info"},mt={key:0,class:"warning-text"},kt={class:"order-list"},vt={class:"order-items"},gt=["src"],Lt={class:"item-info"},bt={class:"quantity-controls"},ht=["onClick"],Ct=["onClick"],ft=["onClick"],yt={class:"order-total"},wt={class:"recipient-info"},_t={class:"form-row"},St={class:"form-row"},Et={class:"form-row"},Ft={class:"form-row"},Ot={class:"form-row"},Xt={class:"button-group"},Wt=["disabled"],xt={key:1,class:"order-create"},Mt={class:"order-create-info"},Nt={class:"cart-info-check"},Pt={class:"order-list"},qt={class:"order-items"},Dt=["src"],Tt={class:"item-info"},jt={class:"order-total"},It={class:"recipient-info-check"},At={class:"form-row"},Qt={class:"form-row"},Bt={class:"form-row"},Kt={class:"form-row"},Jt={class:"form-row"},Vt={class:"button-group"},Rt={key:2,class:"order-complete"},Ut={class:"button-group"};function $t(e,t,a,i,l,o){return(0,n.uX)(),(0,n.CE)("div",null,[(0,n.Lk)("div",ct,[(0,n.Lk)("div",{class:(0,s.C4)(["progress-label",{active:l.step>=1}])},"STEP1 : 確認訂單",2),(0,n.Lk)("div",{class:(0,s.C4)(["progress-label",{active:l.step>=2}])},"STEP2 : 建立訂單",2),(0,n.Lk)("div",{class:(0,s.C4)(["progress-label",{active:l.step>=3}])},"STEP3 : 完成訂單",2)]),1===l.step?((0,n.uX)(),(0,n.CE)("div",ut,[t[18]||(t[18]=(0,n.Lk)("h2",null,"確認您的訂單",-1)),(0,n.Lk)("div",dt,[(0,n.Lk)("div",pt,[t[11]||(t[11]=(0,n.Lk)("h3",null,"購物車資訊",-1)),0===e.cart.length?((0,n.uX)(),(0,n.CE)("p",mt,"請加入商品才能繼續結帳。")):(0,n.Q3)("",!0),(0,n.Lk)("div",kt,[(0,n.Lk)("ul",vt,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(e.cart,((e,t)=>((0,n.uX)(),(0,n.CE)("li",{key:e.id,class:"order-item"},[(0,n.Lk)("img",{src:e.image,class:"item-img"},null,8,gt),(0,n.Lk)("span",Lt,[(0,n.eW)((0,s.v_)(e.name)+" - "+(0,s.v_)(e.price)+" NTD x "+(0,s.v_)(e.quantity)+"= "+(0,s.v_)(e.price*e.quantity)+" NTD ",1),(0,n.Lk)("div",bt,[(0,n.Lk)("button",{class:"p-adj",onClick:a=>o.updateQuantity(t,e.quantity-1)},"◀",8,ht),(0,n.Lk)("span",null,(0,s.v_)(e.quantity),1),(0,n.Lk)("button",{class:"p-adj",onClick:a=>o.updateQuantity(t,e.quantity+1)},"▶",8,Ct),(0,n.Lk)("button",{class:"remove-button",onClick:e=>o.removeFromCart(t)},"移除",8,ft)])])])))),128))])]),(0,n.Lk)("h3",yt,"總計："+(0,s.v_)(e.totalPrice)+" NTD",1)]),(0,n.Lk)("div",wt,[t[17]||(t[17]=(0,n.Lk)("h3",null,"請輸入訂購人資訊",-1)),(0,n.Lk)("form",{onSubmit:t[5]||(t[5]=(0,r.D$)(((...t)=>e.submitOrder&&e.submitOrder(...t)),["prevent"])),ref:"orderForm",class:"order-form"},[(0,n.Lk)("div",_t,[t[12]||(t[12]=(0,n.Lk)("label",{for:"email"},[(0,n.Lk)("span",null,"*"),(0,n.eW)("信箱")],-1)),(0,n.bo)((0,n.Lk)("input",{type:"text",id:"email","onUpdate:modelValue":t[0]||(t[0]=e=>l.user.email=e),placeholder:"請輸入Email",required:""},null,512),[[r.Jo,l.user.email]])]),(0,n.Lk)("div",St,[t[13]||(t[13]=(0,n.Lk)("label",{for:"name"},[(0,n.Lk)("span",null,"*"),(0,n.eW)("姓名")],-1)),(0,n.bo)((0,n.Lk)("input",{type:"text",id:"name","onUpdate:modelValue":t[1]||(t[1]=e=>l.user.name=e),placeholder:"請輸入姓名",required:""},null,512),[[r.Jo,l.user.name]])]),(0,n.Lk)("div",Et,[t[14]||(t[14]=(0,n.Lk)("label",{for:"address"},[(0,n.Lk)("span",null,"*"),(0,n.eW)("地址")],-1)),(0,n.bo)((0,n.Lk)("input",{type:"text",id:"address","onUpdate:modelValue":t[2]||(t[2]=e=>l.user.address=e),placeholder:"請輸入地址",required:""},null,512),[[r.Jo,l.user.address]])]),(0,n.Lk)("div",Ft,[t[15]||(t[15]=(0,n.Lk)("label",{for:"phone"},[(0,n.Lk)("span",null,"*"),(0,n.eW)("聯絡電話")],-1)),(0,n.bo)((0,n.Lk)("input",{type:"text",id:"phone","onUpdate:modelValue":t[3]||(t[3]=e=>l.user.phone=e),placeholder:"請輸入手機號碼",required:""},null,512),[[r.Jo,l.user.phone]])]),(0,n.Lk)("div",Ot,[t[16]||(t[16]=(0,n.Lk)("label",{for:"note"},"備註",-1)),(0,n.bo)((0,n.Lk)("textarea",{id:"note",rows:"10","onUpdate:modelValue":t[4]||(t[4]=e=>l.user.note=e),placeholder:"請輸入其他訂單備註需求"},null,512),[[r.Jo,l.user.note]])])],544)])]),(0,n.Lk)("div",Xt,[(0,n.Lk)("button",{onClick:t[6]||(t[6]=(...e)=>o.validateForm&&o.validateForm(...e)),disabled:0===e.cart.length,class:"next-btn"}," 下一步 ",8,Wt)])])):(0,n.Q3)("",!0),2===l.step?((0,n.uX)(),(0,n.CE)("div",xt,[(0,n.Lk)("div",Mt,[(0,n.Lk)("div",Nt,[(0,n.Lk)("div",Pt,[(0,n.Lk)("ul",qt,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(e.cart,(e=>((0,n.uX)(),(0,n.CE)("li",{key:e.id,class:"order-item"},[(0,n.Lk)("img",{src:e.image,class:"item-img"},null,8,Dt),(0,n.Lk)("span",Tt,(0,s.v_)(e.name)+" - "+(0,s.v_)(e.price)+" NTD x "+(0,s.v_)(e.quantity)+"= "+(0,s.v_)(e.price*e.quantity)+" NTD ",1)])))),128))])]),(0,n.Lk)("h3",jt,"總計："+(0,s.v_)(e.totalPrice)+" NTD",1)]),(0,n.Lk)("div",It,[t[24]||(t[24]=(0,n.Lk)("h3",null,"您輸入的訂購人資訊",-1)),(0,n.Lk)("div",At,[t[19]||(t[19]=(0,n.Lk)("label",{for:"email"},[(0,n.Lk)("span",null,"*"),(0,n.eW)("信箱")],-1)),(0,n.eW)(" "+(0,s.v_)(l.user.email),1)]),(0,n.Lk)("div",Qt,[t[20]||(t[20]=(0,n.Lk)("label",{for:"name"},[(0,n.Lk)("span",null,"*"),(0,n.eW)("姓名")],-1)),(0,n.eW)(" "+(0,s.v_)(l.user.name),1)]),(0,n.Lk)("div",Bt,[t[21]||(t[21]=(0,n.Lk)("label",{for:"address"},[(0,n.Lk)("span",null,"*"),(0,n.eW)("地址")],-1)),(0,n.eW)(" "+(0,s.v_)(l.user.address),1)]),(0,n.Lk)("div",Kt,[t[22]||(t[22]=(0,n.Lk)("label",{for:"phone"},[(0,n.Lk)("span",null,"*"),(0,n.eW)("聯絡電話")],-1)),(0,n.eW)(" "+(0,s.v_)(l.user.phone),1)]),(0,n.Lk)("div",Jt,[t[23]||(t[23]=(0,n.Lk)("label",{for:"note"},"備註",-1)),(0,n.eW)(" "+(0,s.v_)(l.user.note),1)])])]),(0,n.Lk)("div",Vt,[(0,n.Lk)("button",{class:"prev-btn",onClick:t[7]||(t[7]=(...e)=>o.prevStep&&o.prevStep(...e))},"上一步"),(0,n.Lk)("button",{onClick:t[8]||(t[8]=(...e)=>o.orderestablish&&o.orderestablish(...e)),class:"next-btn"},"下一步")])])):(0,n.Q3)("",!0),3===l.step?((0,n.uX)(),(0,n.CE)("div",Rt,[t[25]||(t[25]=(0,n.Lk)("h2",null,"訂單已完成！",-1)),(0,n.Lk)("p",null,"感謝您的購買，您的訂單"+(0,s.v_)(l.order.orderNumber)+"已經建立完成！",1),t[26]||(t[26]=(0,n.Lk)("p",null,"我們會儘快處理您的訂單並發送到您的地址。",-1)),(0,n.Lk)("div",Ut,[(0,n.Lk)("button",{class:"prev-btn",onClick:t[9]||(t[9]=(...e)=>o.prevStep&&o.prevStep(...e))},"上一步"),(0,n.Lk)("button",{class:"back-btn",onClick:t[10]||(t[10]=(...e)=>o.resetOrder&&o.resetOrder(...e))},"了解返回")])])):(0,n.Q3)("",!0)])}var Ht={data(){return{step:1,user:{email:"",name:"",address:"",phone:"",note:""},order:{}}},computed:{...(0,m.aH)(["cart"]),...(0,m.L8)(["totalPrice"])},methods:{...(0,m.PY)(["updateCart","removeFromCart"]),updateQuantity(e,t){const a=[...this.cart];t<=0?a.splice(e,1):a[e].quantity=t,this.updateCart(a),localStorage.setItem("cart",JSON.stringify(a))},removeFromCart(e){const t=[...this.cart];t.splice(e,1),this.$store.commit("updateCart",t),localStorage.setItem("cart",JSON.stringify(t))},nextStep(){this.cart.length>0&&this.step<3&&this.step++},prevStep(){this.step>1&&this.step--},validateForm(){const e=this.$refs.orderForm;e.checkValidity()?this.nextStep():e.reportValidity()},resetOrder(){this.step=1,this.user={name:"",address:"",phone:""},this.updateCart([]),localStorage.removeItem("cart")},generateOrderNumber(){const e=Date.now(),t=Math.floor(1e3+9e3*Math.random());return`BBS-${e}-${t}`},orderestablish(){this.order={orderNumber:this.generateOrderNumber(),user:{...this.user},cart:[...this.cart],totalPrice:this.totalPrice,createdAt:(new Date).toISOString()},console.log("訂單建立成功：",this.order),this.nextStep()}}};const zt=(0,w.A)(Ht,[["render",$t]]);var Yt=zt;const Gt=[{path:"/",component:Qe,meta:{title:"首頁"}},{path:"/aboutbread",component:ot,meta:{title:"品牌故事"}},{path:"/news",component:nt,meta:{title:"最新消息"}},{path:"/menu",component:et,meta:{title:"菜單"}},{path:"/cart",component:A,meta:{title:"購物車"}},{path:"/checkorder",component:Yt,meta:{title:"訂單結帳"}}],Zt=(0,R.aE)({history:(0,R.Bt)(),routes:Gt});var ea=Zt;a(4114),a(116);const ta=(0,m.y$)({state:{cart:[]},mutations:{setCart(e,t){e.cart=t},addToCart(e,t){const a=e.cart.find((e=>e.id===t.id));a?a.quantity+=1:e.cart.push({...t,quantity:1})},updateCart(e,t){e.cart=t}},getters:{cartQuantity(e){return e.cart.reduce(((e,t)=>e+t.quantity),0)},totalPrice(e){return e.cart.reduce(((e,t)=>e+t.price*t.quantity),0)}}});var aa=ta;(0,r.Ef)(V).use(ea).use(aa).mount("#app")}},t={};function a(r){var n=t[r];if(void 0!==n)return n.exports;var s=t[r]={exports:{}};return e[r].call(s.exports,s,s.exports,a),s.exports}a.m=e,function(){var e=[];a.O=function(t,r,n,s){if(!r){var i=1/0;for(u=0;u<e.length;u++){r=e[u][0],n=e[u][1],s=e[u][2];for(var l=!0,o=0;o<r.length;o++)(!1&s||i>=s)&&Object.keys(a.O).every((function(e){return a.O[e](r[o])}))?r.splice(o--,1):(l=!1,s<i&&(i=s));if(l){e.splice(u--,1);var c=n();void 0!==c&&(t=c)}}return t}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[r,n,s]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};a.O.j=function(t){return 0===e[t]};var t=function(t,r){var n,s,i=r[0],l=r[1],o=r[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(n in l)a.o(l,n)&&(a.m[n]=l[n]);if(o)var u=o(a)}for(t&&t(r);c<i.length;c++)s=i[c],a.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return a.O(u)},r=self["webpackChunkbakery_shop"]=self["webpackChunkbakery_shop"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=a.O(void 0,[504],(function(){return a(6894)}));r=a.O(r)})();
//# sourceMappingURL=app.9905c70a.js.map