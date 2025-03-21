(function(){"use strict";var e={133:function(e,t,a){var n=a(5130),s=a(6768),r=a(4232);const i={class:"index-backg"},l={class:"header-wrapper"},o={key:0,class:"toast"},c={class:"sidebar-header"},u={class:"sidebar-content"},d={class:"main-cotent"};function p(e,t,a,n,p,m){const k=(0,s.g2)("AppHeader"),v=(0,s.g2)("CartPage"),g=(0,s.g2)("router-view");return(0,s.uX)(),(0,s.CE)("div",i,[(0,s.Lk)("header",l,[(0,s.bF)(k,{cartItemCount:n.cartQuantity,onOpenSidebar:n.toggleSidebar},null,8,["cartItemCount","onOpenSidebar"])]),n.isShowToast?((0,s.uX)(),(0,s.CE)("div",o,[(0,s.Lk)("p",null,(0,r.v_)(n.toastMessage),1)])):(0,s.Q3)("",!0),(0,s.Lk)("div",{class:(0,r.C4)(["sidebar",{active:n.isSidebarOpen}])},[(0,s.Lk)("div",c,[t[1]||(t[1]=(0,s.Lk)("span",{class:"sidebar-title"},"購物車",-1)),(0,s.Lk)("button",{class:"close-btn",onClick:t[0]||(t[0]=(...e)=>n.toggleSidebar&&n.toggleSidebar(...e))},"×")]),(0,s.Lk)("div",u,[(0,s.bF)(v,{cart:n.cart,onUpdateCart:n.updateCart},null,8,["cart","onUpdateCart"])])],2),(0,s.Lk)("section",d,[(0,s.bF)(g,{cart:n.cart,onAddToCart:n.addToCart,onUpdateCart:n.updateCart},null,8,["cart","onAddToCart","onUpdateCart"])]),t[2]||(t[2]=(0,s.Lk)("footer",{class:"footer"},[(0,s.Lk)("p",null,"本網站僅供個人作品使用，未提供商業用途"),(0,s.Lk)("p",null,"BBS © 2025 COPYRIGHT")],-1))])}var m=a(144),k=a(782);const v={class:"navbar"},g={class:"navbar-container"},L={class:"nav-item"},b={class:"nav-item"},h={class:"nav-item"},f={class:"nav-item"},C={class:"nav-item"},y={class:"cart-badge"};function w(e,t,a,n,i,l){const o=(0,s.g2)("router-link");return(0,s.uX)(),(0,s.CE)("nav",v,[(0,s.Lk)("div",g,[(0,s.bF)(o,{to:"/",class:"navbar-brand",onClick:l.closeMenu},{default:(0,s.k6)((()=>t[3]||(t[3]=[(0,s.eW)("Bread Baking Studio")]))),_:1},8,["onClick"]),(0,s.Lk)("button",{class:"menu-toggle",onClick:t[0]||(t[0]=(...e)=>l.toggleMenu&&l.toggleMenu(...e))}," ☰ "),(0,s.Lk)("ul",{class:(0,r.C4)(["navbar-nav",{active:i.isMenuOpen}])},[(0,s.Lk)("li",L,[(0,s.bF)(o,{to:"/",class:"nav-link",onClick:l.closeMenu},{default:(0,s.k6)((()=>t[4]||(t[4]=[(0,s.eW)("首頁")]))),_:1},8,["onClick"])]),(0,s.Lk)("li",b,[(0,s.bF)(o,{to:"/aboutbread",class:"nav-link",onClick:l.closeMenu},{default:(0,s.k6)((()=>t[5]||(t[5]=[(0,s.eW)("關於BBS")]))),_:1},8,["onClick"])]),(0,s.Lk)("li",h,[(0,s.bF)(o,{to:"/news",class:"nav-link",onClick:l.closeMenu},{default:(0,s.k6)((()=>t[6]||(t[6]=[(0,s.eW)("最新消息")]))),_:1},8,["onClick"])]),(0,s.Lk)("li",f,[(0,s.bF)(o,{to:"/menu",class:"nav-link",onClick:l.closeMenu},{default:(0,s.k6)((()=>t[7]||(t[7]=[(0,s.eW)("菜單")]))),_:1},8,["onClick"])]),(0,s.Lk)("li",C,[(0,s.Lk)("a",{class:"nav-link",onClick:t[1]||(t[1]=(...e)=>l.openSidebar&&l.openSidebar(...e))},[t[8]||(t[8]=(0,s.eW)(" 購物車 ")),(0,s.Lk)("span",y,(0,r.v_)(a.cartItemCount),1)])])],2),(0,s.Lk)("div",{class:(0,r.C4)(["menu-mask",{active:i.isMenuOpen}]),onClick:t[2]||(t[2]=(...e)=>l.closeMenu&&l.closeMenu(...e))},null,2)])])}var S={props:["cartItemCount"],data(){return{isMenuOpen:!1}},methods:{toggleMenu(){this.isMenuOpen=!this.isMenuOpen},closeMenu(){this.isMenuOpen=!1},openSidebar(){this.$emit("OpenSidebar")}}},_=a(1241);const E=(0,_.A)(S,[["render",w]]);var F=E;const X={class:"cart-container"},B={key:0,class:"cart-empty"},W={class:"cart-items"},P=["src"],O={class:"item-info"},M={class:"quantity-controls"},D=["onClick"],x=["onClick"],T=["onClick"],N={key:1,class:"total-price"},Q={key:2,class:"order-area"};function q(e,t,a,n,i,l){const o=(0,s.g2)("router-link");return(0,s.uX)(),(0,s.CE)("div",X,[0===n.cart.length?((0,s.uX)(),(0,s.CE)("div",B,[(0,s.bF)(o,{to:"/menu",class:"btn-primary"},{default:(0,s.k6)((()=>t[0]||(t[0]=[(0,s.eW)("選購去!")]))),_:1})])):(0,s.Q3)("",!0),(0,s.Lk)("ul",W,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(n.cart,((e,t)=>((0,s.uX)(),(0,s.CE)("li",{key:e.id,class:"cart-item"},[(0,s.Lk)("img",{src:e.image,class:"cart-img"},null,8,P),(0,s.Lk)("span",O,[(0,s.eW)((0,r.v_)(e.name)+" - "+(0,r.v_)(e.price)+" NTD x "+(0,r.v_)(e.quantity)+" = "+(0,r.v_)(e.price*e.quantity)+" NTD ",1),(0,s.Lk)("div",M,[(0,s.Lk)("button",{class:"p-adj",onClick:a=>n.updateQuantity(t,e.quantity-1)},"◀",8,D),(0,s.Lk)("span",null,(0,r.v_)(e.quantity),1),(0,s.Lk)("button",{class:"p-adj",onClick:a=>n.updateQuantity(t,e.quantity+1)},"▶",8,x),(0,s.Lk)("button",{class:"remove-button",onClick:e=>n.removeFromCart(t)},"移除",8,T)])])])))),128))]),n.cart.length>0?((0,s.uX)(),(0,s.CE)("h4",N,"總計金額 : "+(0,r.v_)(n.totalPrice)+" NTD",1)):(0,s.Q3)("",!0),0!==n.cart.length?((0,s.uX)(),(0,s.CE)("div",Q,[(0,s.bF)(o,{to:"/checkorder",class:"btn-primary"},{default:(0,s.k6)((()=>t[1]||(t[1]=[(0,s.eW)("訂單結帳")]))),_:1})])):(0,s.Q3)("",!0)])}a(8111),a(8237);var j={setup(){const e=(0,k.Pj)(),t=(0,s.EW)((()=>e.state.cart)),a=(0,s.EW)((()=>t.value.reduce(((e,t)=>e+t.price*t.quantity),0))),n=(a,n)=>{const s=[...t.value];n<=0?s.splice(a,1):s[a].quantity=n,e.commit("updateCart",s),localStorage.setItem("cart",JSON.stringify(s))},r=a=>{const n=[...t.value];n.splice(a,1),e.commit("updateCart",n),localStorage.setItem("cart",JSON.stringify(n))};return{cart:t,updateQuantity:n,removeFromCart:r,totalPrice:a}}};const I=(0,_.A)(j,[["render",q]]);var A=I;const K=[{id:1,title:"🌸 蘋果麥香味麵包上市！",date:"2025-02-20",image:"img/news/news_1.jpg",content:"🍏 春天的味道來了！Bread Baking Studio 全新推出蘋果麥香味麵包，將清新果香與濃郁麥香完美融合。\n\n🥖特色亮點：\n✅ 採用新鮮蘋果製作，甜而不膩\n✅ 天然小麥發酵，口感鬆軟帶有淡淡麥香\n✅ 無添加人工香料，純粹美味\n\n🌿 每一口都是春天的氣息，快來嚐鮮吧！\n\n📅 販售期間：即日起至 4/30\n📍Bread Baking Studio 門市限定\n🔔每日新鮮現烤，售完為止！"},{id:2,title:"🔥 本週滿額優惠活動",date:"2025-02-18",image:"img/news/news_1.jpg",content:"🎉 好消息！Bread Baking Studio 為感謝大家的支持，本週推出滿額優惠活動，讓你買得更開心，吃得更滿足！\n\n📢 活動內容：\n🛒 單筆消費滿 $300，即贈 手工餅乾 1 包 🍪\n🛒 單筆消費滿 $500，再送 人氣麵包乙個 🥖\n\n✨ 期間限定，錯過等下次！ ✨\n\n📅 活動時間：3/25 (一) - 3/31 (日)\n📍 Bread Baking Studio 門市限定\n⚡ 數量有限，送完為止！\n\n這週就來 Bread Baking Studio，把你的購物袋裝滿香氣四溢的美味麵包，還能享受超值優惠！趕快來參加吧！ 💕"},{id:3,title:"⏳ 冬季促銷最後倒數",date:"2025-02-15",image:"img/news/news_1.jpg",content:"❄️ **冬季優惠即將結束，最後機會把美味帶回家！** ❄️\n\n🎉 **冬季促銷倒數 3 天！**\n🔥 **全館麵包 88 折**，限時優惠錯過等明年！\n🎁 單筆消費滿 $500，加贈 **人氣手工餅乾 1 包 🍪**\n\n✨ **活動倒數，快來搶購你的冬日最愛！**\n\n📅 **活動期間：即日起至 3/31**\n📍 **Bread Baking Studio 門市限定**\n⚡ **數量有限，售完為止！**"},{id:4,title:"🎉 新年快樂！店內優惠大放送",date:"2025-02-10",image:"img/news/news_1.jpg",content:"🍾 **新年到來，祝福滿滿，優惠不停！** 🥳\n\n🎉 **即日起，Bread Baking Studio 舉行新年大放送！**\n\n🎁 **全館麵包 8 折優惠**，讓你以超值價格品嚐所有美味！\n🛒 **單筆消費滿 $400**，再加贈 **手工甜點 1 份** 🍪\n\n🎊 **新年快樂，願您的每一天都如新鮮出爐的麵包般溫暖！**\n\n📅 **活動期間：即日起至 1/31**\n📍 **Bread Baking Studio 門市限定**\n⚡ **數量有限，售完為止！**"}],$=[{id:1,name:"經典可頌",price:40,image:"img/bread/croissant.jpg",description:"我們的 經典可頌 採用 進口法國AOP認證奶油 與 高品質麵粉，經過 三折六疊工法，手工反覆摺疊出 27 層 的酥脆層次。每一口都帶有濃郁的奶香與微微焦糖化的香氣，外酥內嫩，口感細膩有層次。"},{id:2,name:"經典肉桂捲",price:50,image:"img/bread/cinnamon_rolls.jpg",description:"我們的經典肉桂捲選用 純手工揉製 的麵糰，經過長時間低溫發酵，使口感更加鬆軟濕潤。內餡使用 斯里蘭卡頂級肉桂粉，    搭配香甜焦糖與法國進口奶油，完美呈現濃郁的肉桂香氣，每一口都充滿溫暖療癒的風味。"},{id:3,name:"山形吐司",price:80,image:"img/bread/plain_white_toast.jpg",description:"我們的 山形吐司 採用 嚴選高品質小麥粉，經過 低溫長時間發酵，讓麵包內部形成細膩柔軟的結構，外皮則呈現金黃微脆的完美口感。以 純鮮奶與天然奶油 製作，不添加人工香料與防腐劑，讓你吃得安心又健康。"},{id:4,name:"蘋果麥香麵包",price:80,image:"img/bread/apple_bread.jpg",description:"我們的 蘋果麥香麵包 採用 高纖全麥麵粉，搭配 新鮮蘋果丁 及 天然蜂蜜，經過 長時間低溫發酵，讓口感更加濕潤綿密，帶有淡淡的麥香與蘋果的自然甜味。這款麵包不僅健康美味，更是早餐或下午茶的最佳選擇！"},{id:5,name:"香蕉蛋糕",price:80,image:"img/bread/banana_cake.jpg",description:"我們的 香蕉蛋糕 採用 新鮮熟成香蕉 製作，不添加人工香精，讓你品嚐到最純粹的香蕉甜香。搭配 法國進口奶油與天然蜂蜜，使蛋糕口感濕潤綿密，入口即化，甜而不膩。無論是搭配咖啡、茶，或是單吃，都是令人回味無窮的經典甜點！"},{id:6,name:"芝麻饅頭",price:30,image:"img/bread/sesame_bun.jpg",description:"我們的 芝麻饅頭 採用 精選黑芝麻研磨粉，搭配 高品質中筋麵粉與天然酵母，經過 長時間發酵，讓口感更加Q彈有嚼勁。每一口都能感受到濃郁的芝麻香氣，既營養又美味，是早餐、下午茶或搭配料理的完美選擇！"}];var J={components:{AppHeader:F,CartPage:A},setup(){const e=(0,k.Pj)(),t=(0,m.KR)(!1),a=(0,m.KR)(!1),n=(0,m.KR)("");(0,s.sV)((()=>{const t=localStorage.getItem("cart");t&&e.commit("setCart",JSON.parse(t))}));const r=(0,s.EW)((()=>e.getters.cartQuantity)),i=t=>{e.commit("addToCart",t),localStorage.setItem("cart",JSON.stringify(e.state.cart)),n.value=`${t.name} 已成功加入購物車！`,a.value=!0,setTimeout((()=>{a.value=!1}),2e3)},l=t=>{e.commit("updateCart",t),localStorage.setItem("cart",JSON.stringify(t))},o=()=>{t.value=!t.value};return{cart:e.state.cart,addToCart:i,updateCart:l,toggleSidebar:o,isSidebarOpen:t,cartQuantity:r,isShowToast:a,toastMessage:n}},provide(){return{newsData:(0,m.KR)(K),menuData:(0,m.KR)($)}}};const R=(0,_.A)(J,[["render",p]]);var V=R,U=a(1387);const H={class:"home-pg"},z={class:"pg-content"},Y={class:"pg-content"},G={class:"pg-content"},Z={class:"pg-content"},ee={class:"pg-content"};function te(e,t,a,n,r,i){const l=(0,s.g2)("CarouselPage"),o=(0,s.g2)("AnimatedPart"),c=(0,s.g2)("NewsList"),u=(0,s.g2)("MenuSummary"),d=(0,s.g2)("StoreLocation");return(0,s.uX)(),(0,s.CE)("div",H,[(0,s.Lk)("div",z,[(0,s.bF)(l)]),(0,s.Lk)("div",Y,[(0,s.bF)(o)]),(0,s.Lk)("div",G,[(0,s.bF)(c,{news:n.newsData,limit:4,showMore:!0},null,8,["news"])]),(0,s.Lk)("div",Z,[(0,s.bF)(u,{limit:4})]),(0,s.Lk)("div",ee,[(0,s.bF)(d)])])}const ae={class:"carousel"},ne=["src"],se={class:"dots"},re=["onClick"];var ie={__name:"CarouselPage",setup(e){const t=(0,m.KR)(["img/carousel/bakery_1.jpg","img/carousel/bakery_2.jpg"]),a=(0,m.KR)(0);let i=null;const l=()=>{a.value=(a.value+1)%t.value.length},o=()=>{a.value=(a.value-1+t.value.length)%t.value.length};return(0,s.sV)((()=>{i=setInterval(l,6e3)})),(0,s.hi)((()=>{clearInterval(i)})),(e,i)=>((0,s.uX)(),(0,s.CE)("div",ae,[(0,s.bF)(n.eB,{name:"fade",mode:"out-in"},{default:(0,s.k6)((()=>[((0,s.uX)(),(0,s.CE)("img",{src:t.value[a.value],key:a.value,class:"slide"},null,8,ne))])),_:1}),(0,s.Lk)("button",{class:"prev",onClick:o},"❮"),(0,s.Lk)("button",{class:"next",onClick:l},"❯"),(0,s.Lk)("div",se,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(t.value,((e,t)=>((0,s.uX)(),(0,s.CE)("span",{key:t,class:(0,r.C4)({active:t===a.value}),onClick:e=>a.value=t},null,10,re)))),128))])]))}};const le=ie;var oe=le;const ce={class:"news-list"},ue={class:"content"},de={class:"card"},pe=["src"],me={class:"card-body"},ke={class:"card-title"},ve={class:"text-muted"},ge={key:0,class:"more-btn"};function Le(e,t,a,n,i,l){const o=(0,s.g2)("router-link");return(0,s.uX)(),(0,s.CE)("div",ce,[t[1]||(t[1]=(0,s.Lk)("h3",{class:"news-title"},"最新消息",-1)),(0,s.Lk)("div",ue,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(n.displayedNews,((e,t)=>((0,s.uX)(),(0,s.CE)("div",{key:t,class:"cards"},[(0,s.Lk)("div",de,[(0,s.bF)(o,{to:"/news/"+e.id,class:"card-route"},{default:(0,s.k6)((()=>[e.image?((0,s.uX)(),(0,s.CE)("img",{key:0,src:e.image,class:"card-img-top",alt:"新聞圖片"},null,8,pe)):(0,s.Q3)("",!0),(0,s.Lk)("div",me,[(0,s.Lk)("h5",ke,(0,r.v_)(e.title),1),(0,s.Lk)("p",ve,(0,r.v_)(e.date),1)])])),_:2},1032,["to"])])])))),128))]),a.showMore?((0,s.uX)(),(0,s.CE)("div",ge,[(0,s.bF)(o,{to:"/news",class:"btn-primary"},{default:(0,s.k6)((()=>t[0]||(t[0]=[(0,s.eW)("查看更多")]))),_:1})])):(0,s.Q3)("",!0)])}var be={props:{news:Array,limit:Number,title:String,showMore:Boolean},setup(e){const t=(0,s.EW)((()=>e.limit?e.news.slice(0,e.limit):e.news));return{displayedNews:t}}};const he=(0,_.A)(be,[["render",Le]]);var fe=he;const Ce={class:"menu-summary"},ye={class:"menu-items"},we={class:"card"},Se=["src"],_e={class:"card-body"},Ee={class:"card-title"},Fe={class:"card-text"},Xe={class:"more-btn"};function Be(e,t,a,n,i,l){const o=(0,s.g2)("router-link");return(0,s.uX)(),(0,s.CE)("div",Ce,[t[1]||(t[1]=(0,s.Lk)("h2",{class:"menu-title"},"精選菜單",-1)),(0,s.Lk)("div",ye,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(n.limitedMenu,(e=>((0,s.uX)(),(0,s.CE)("div",{key:e.id,class:"menu-item"},[(0,s.Lk)("div",we,[(0,s.Lk)("img",{src:e.image,class:"card-img-top img-fixed",alt:"菜單圖片"},null,8,Se),(0,s.Lk)("div",_e,[(0,s.Lk)("h5",Ee,[(0,s.bF)(o,{class:"title-link",to:"/menu/"+e.id},{default:(0,s.k6)((()=>[(0,s.eW)((0,r.v_)(e.name),1)])),_:2},1032,["to"])]),(0,s.Lk)("p",Fe,"價格: $"+(0,r.v_)(e.price),1)])])])))),128))]),(0,s.Lk)("div",Xe,[(0,s.bF)(o,{to:"/menu",class:"btn-primary"},{default:(0,s.k6)((()=>t[0]||(t[0]=[(0,s.eW)("查看更多")]))),_:1})])])}var We={props:{limit:Number},setup(e){const t=(0,s.WQ)("menuData")||(0,m.KR)([]),a=(0,s.EW)((()=>t.value.slice(0,e.limit)));return{limitedMenu:a}}};const Pe=(0,_.A)(We,[["render",Be]]);var Oe=Pe,Me=a(3497),De=a.n(Me);const xe={class:"brand-story"};var Te={__name:"AnimatedPart",setup(e){return(0,s.sV)((()=>{De().init({duration:1e3,once:!1,offset:100,easing:"ease-out"})})),(e,t)=>((0,s.uX)(),(0,s.CE)("section",xe,t[0]||(t[0]=[(0,s.Fv)('<div><div class="content"><div class="image-block left" data-aos="fade-right"><img src="img/animated/left-bread.png" alt="左側圖片"></div><div class="text-block" data-aos="zoom-in"><h2>BBS 品牌故事</h2><p> 在 Bread Baking Studio，每一顆麵包都是我們對烘焙的熱愛與堅持。從揉捏麵糰的第一刻，到麵包在烤箱裡散發出溫暖香氣，每個步驟都承載著我們對手作的尊重與用心。我們相信，好的麵包不只是填飽肚子，更是一種生活的美好體驗。因此，我們選用最純粹的食材，堅持天然發酵，讓每一口都充滿濃厚的麥香與層次。Bread Baking Studio，不只是麵包店，更是一個分享溫度與故事的地方。無論是忙碌的一天中的小確幸，還是與家人朋友共度的溫馨時光，我們希望這裡的每一塊麵包，都能帶給你滿滿的幸福感。在這裡，麵包不只是食物，而是一種溫暖的傳遞。 🍞✨ </p></div><div class="image-block right" data-aos="fade-left"><img src="img/animated/right-bread.png" alt="右側圖片"></div></div></div>',1)])))}};const Ne=Te;var Qe=Ne,qe=(a(1701),a(6886)),je=a.n(qe);const Ie={class:"store-loc"},Ae={class:"loc-info"};var Ke={__name:"StoreLocation",setup(e){const t=(0,m.KR)(null);return(0,s.sV)((()=>{const e=je().map(t.value).setView([25.0418,121.5532],20);je().tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(e);const a=je().divIcon({className:"circle-icon",html:'<div style="background-color: #69806C; width: 25px; height: 25px; border-radius: 50%;"></div>',iconSize:[30,30]});je().marker([25.0418,121.5532],{icon:a}).addTo(e).bindPopup("Bread Baking Studio").openPopup()})),(e,a)=>((0,s.uX)(),(0,s.CE)("section",Ie,[a[1]||(a[1]=(0,s.Lk)("h3",{class:"loc-title"},"店鋪位置",-1)),(0,s.Lk)("div",Ae,[(0,s.Lk)("div",{class:"map",ref_key:"mapContainer",ref:t},null,512),a[0]||(a[0]=(0,s.Lk)("div",{class:"loc-des"},[(0,s.Lk)("h3",null,"店鋪地址"),(0,s.Lk)("p",null,"台北市大安區忠孝東路四段 100 號"),(0,s.Lk)("h3",null,"交通方式"),(0,s.Lk)("p",null,"捷運板南線「忠孝敦化站」步行 5 分鐘")],-1))])]))}};const $e=Ke;var Je=$e,Re={components:{CarouselPage:oe,NewsList:fe,MenuSummary:Oe,AnimatedPart:Qe,StoreLocation:Je},setup(){const e=(0,s.WQ)("newsData");return e||console.warn("newsData is not provided!"),{newsData:e}}};const Ve=(0,_.A)(Re,[["render",te]]);var Ue=Ve;const He={class:"menu-page"},ze={class:"menu-search"},Ye={class:"menu-items"},Ge={class:"card"},Ze=["src"],et={class:"card-body"},tt={class:"card-title"},at={class:"card-text"},nt={class:"btn-group"},st=["onClick"];function rt(e,t,a,i,l,o){const c=(0,s.g2)("router-link");return(0,s.uX)(),(0,s.CE)("div",He,[(0,s.Lk)("div",ze,[(0,s.bo)((0,s.Lk)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>i.search=e),class:"search-input",placeholder:"搜尋品名"},null,512),[[n.Jo,i.search]])]),(0,s.Lk)("div",Ye,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(i.filteredMenu,(e=>((0,s.uX)(),(0,s.CE)("div",{key:e.id,class:"menu-item"},[(0,s.Lk)("div",Ge,[(0,s.Lk)("img",{src:e.image,class:"card-img-top img-fixed"},null,8,Ze),(0,s.Lk)("div",et,[(0,s.Lk)("h5",tt,[(0,s.bF)(c,{class:"title-link",to:"/menu/"+e.id},{default:(0,s.k6)((()=>[(0,s.eW)((0,r.v_)(e.name),1)])),_:2},1032,["to"])]),(0,s.Lk)("p",at,"價格: $"+(0,r.v_)(e.price),1),(0,s.Lk)("div",nt,[(0,s.Lk)("button",{class:"btn-primary",onClick:t=>i.addToCart(e)},"加入購物車",8,st)])])])])))),128))])])}a(2489);var it={props:["cart"],emits:["add-to-cart"],setup(e,{emit:t}){const a=(0,m.KR)(""),n=(0,s.WQ)("menuData")||(0,m.KR)([]),r=(0,s.EW)((()=>Array.isArray(n.value)?n.value.filter((e=>e.name?.toLowerCase().includes(a.value.toLowerCase()))):[])),i=e=>t("add-to-cart",e);return{search:a,filteredMenu:r,addToCart:i}}};const lt=(0,_.A)(it,[["render",rt]]);var ot=lt;const ct={class:"news-pg"};function ut(e,t,a,n,r,i){const l=(0,s.g2)("NewsList");return(0,s.uX)(),(0,s.CE)("div",ct,[(0,s.bF)(l,{news:n.newsData,showMore:!1},null,8,["news"])])}var dt={components:{NewsList:fe},setup(){const e=(0,s.WQ)("newsData");return e?{newsData:e}:(console.warn("newsData is not provided!"),{newsData:[]})}};const pt=(0,_.A)(dt,[["render",ut]]);var mt=pt;const kt={class:"about-store"};function vt(e,t){return(0,s.uX)(),(0,s.CE)("div",kt,t[0]||(t[0]=[(0,s.Fv)('<div class="store-title"><h1>Bread Baking Studio｜用心烘焙，傳遞溫度</h1></div><div class="store-story"><p>在「Bread Baking Studio」，我們相信，麵包不只是食物，而是一種溫暖的記憶。 每天清晨，當第一爐麵包出爐，空氣中瀰漫著天然酵母的香氣，這不僅是一種味覺的享受，更是一份來自我們對烘焙的熱愛與堅持。我們的故事，從一個簡單的夢想開始——希望讓每個人都能品嚐到純粹、自然，並充滿手作溫度的麵包。</p><h3>初心｜從一顆麥粒到一口感動</h3><p>「Bread Baking Studio」的誕生，來自對麵包最純粹的熱愛。小時候，記憶裡的早餐總是伴隨著剛出爐的麵包香氣，外酥內軟的法國麵包、奶香濃郁的布里歐許，每一口都像是家人親手製作的味道，簡單卻難以忘懷。我們希望將這份感動傳遞出去，讓更多人可以在生活的某個瞬間，透過一塊麵包，找到熟悉的幸福感。因此，Bread Baking Studio 堅持使用 天然酵母、無添加物的高品質麵粉、純天然奶油與新鮮食材，回歸最單純的風味，讓每一口都安心、健康。</p><h3>職人精神｜細節決定美味，時間成就風味</h3><p>烘焙不只是技術，更是一門關於時間與耐心的藝術。我們的烘焙師每天親手揉製麵糰，遵循傳統發酵工法，細心掌控溫度與時間，讓每個麵包都能達到最完美的口感。從繁複的層層折疊打造出的黃金可頌，到低溫發酵 72 小時的歐式鄉村麵包，每一道工序都藏著我們的堅持與專業。這份執著，讓每一塊麵包都有著獨特的靈魂與故事，不只是食物，而是我們獻給每位顧客的心意。</p><h3>與你一起｜分享美味，創造溫暖的日常</h3><p>Bread Baking Studio 不只是賣麵包的地方，而是一個能讓人感受到幸福的空間。我們希望，這裡能成為你生活中的一部分：</p><ul><li>清晨的活力早餐——一口剛出爐的麵包，搭配濃醇咖啡，為一天注入滿滿能量。</li><li>午後的小確幸——鬆軟香甜的手工甜點，配上一杯熱茶，療癒忙碌的心。</li><li>回家的溫暖感——為家人帶上一份健康美味的麵包，讓家中充滿溫馨氣息。</li></ul><p>回家的溫暖感——為家人帶上一份健康美味的麵包，讓家中充滿溫馨氣息。我們相信，麵包不只是填飽肚子的食物，而是生活的一部分，是每一天的溫暖陪伴。用心烘焙，傳遞溫度，讓每一天都更有味道。</p></div>',2)]))}const gt={},Lt=(0,_.A)(gt,[["render",vt]]);var bt=Lt;const ht={class:"check-order"},ft={class:"order-progress"},Ct={class:"right-icon"},yt={class:"right-icon"},wt={key:0,class:"order-confirm"},St={class:"order-info"},_t={class:"cart-info"},Et={key:0,class:"warning-text"},Ft={class:"order-list"},Xt={class:"order-items"},Bt=["src"],Wt={class:"item-info"},Pt={class:"quantity-controls"},Ot=["onClick"],Mt=["onClick"],Dt=["onClick"],xt={class:"order-total"},Tt={class:"recipient-info"},Nt={class:"form-row"},Qt={key:0,class:"error-text"},qt={class:"form-row"},jt={class:"form-row"},It={class:"form-row"},At={key:0,class:"error-text"},Kt={class:"form-row"},$t={class:"button-group"},Jt=["disabled"],Rt={key:1,class:"order-create"},Vt={class:"order-create-info"},Ut={class:"cart-info-check"},Ht={class:"order-list"},zt={class:"order-items"},Yt=["src"],Gt={class:"item-info"},Zt={class:"order-total"},ea={class:"recipient-info-check"},ta={class:"form-row"},aa={class:"form-row"},na={class:"form-row"},sa={class:"form-row"},ra={class:"form-row"},ia={class:"button-group"},la={key:2,class:"order-complete"},oa={class:"complete-info"},ca={class:"button-group"};function ua(e,t,a,i,l,o){const c=(0,s.g2)("font-awesome-icon");return(0,s.uX)(),(0,s.CE)("div",ht,[(0,s.Lk)("div",ft,[(0,s.Lk)("div",{class:(0,r.C4)(["progress-label",{active:l.step>=1}])},"STEP1 : 確認訂單",2),(0,s.Lk)("div",Ct,[(0,s.bF)(c,{icon:["fas","right-long"]})]),(0,s.Lk)("div",{class:(0,r.C4)(["progress-label",{active:l.step>=2}])},"STEP2 : 建立訂單",2),(0,s.Lk)("div",yt,[(0,s.bF)(c,{icon:["fas","right-long"]})]),(0,s.Lk)("div",{class:(0,r.C4)(["progress-label",{active:l.step>=3}])},"STEP3 : 完成訂單",2)]),1===l.step?((0,s.uX)(),(0,s.CE)("div",wt,[(0,s.Lk)("div",St,[(0,s.Lk)("div",_t,[t[11]||(t[11]=(0,s.Lk)("h3",null,"購物車資訊",-1)),0===e.cart.length?((0,s.uX)(),(0,s.CE)("p",Et,"請加入商品才能繼續結帳。")):(0,s.Q3)("",!0),(0,s.Lk)("div",Ft,[(0,s.Lk)("ul",Xt,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(e.cart,((e,t)=>((0,s.uX)(),(0,s.CE)("li",{key:e.id,class:"order-item"},[(0,s.Lk)("img",{src:e.image,class:"item-img"},null,8,Bt),(0,s.Lk)("span",Wt,[(0,s.eW)((0,r.v_)(e.name)+" - "+(0,r.v_)(e.price)+" NTD x "+(0,r.v_)(e.quantity)+"= "+(0,r.v_)(e.price*e.quantity)+" NTD ",1),(0,s.Lk)("div",Pt,[(0,s.Lk)("button",{class:"p-adj",onClick:a=>o.updateQuantity(t,e.quantity-1)},"◀",8,Ot),(0,s.Lk)("span",null,(0,r.v_)(e.quantity),1),(0,s.Lk)("button",{class:"p-adj",onClick:a=>o.updateQuantity(t,e.quantity+1)},"▶",8,Mt),(0,s.Lk)("button",{class:"remove-button",onClick:e=>o.removeFromCart(t)},"移除",8,Dt)])])])))),128))])]),(0,s.Lk)("h3",xt,"總計："+(0,r.v_)(e.totalPrice)+" NTD",1)]),(0,s.Lk)("div",Tt,[t[17]||(t[17]=(0,s.Lk)("h3",null,"請輸入訂購人資訊",-1)),(0,s.Lk)("form",{onSubmit:t[5]||(t[5]=(0,n.D$)(((...t)=>e.submitOrder&&e.submitOrder(...t)),["prevent"])),ref:"orderForm",class:"order-form",novalidate:""},[(0,s.Lk)("div",Nt,[t[12]||(t[12]=(0,s.Lk)("label",{for:"email"},[(0,s.Lk)("span",null,"*"),(0,s.eW)("信箱")],-1)),(0,s.bo)((0,s.Lk)("input",{type:"text",id:"email","onUpdate:modelValue":t[0]||(t[0]=e=>l.user.email=e),placeholder:"請輸入Email",required:""},null,512),[[n.Jo,l.user.email]]),l.errors.email?((0,s.uX)(),(0,s.CE)("span",Qt,(0,r.v_)(l.errors.email),1)):(0,s.Q3)("",!0)]),(0,s.Lk)("div",qt,[t[13]||(t[13]=(0,s.Lk)("label",{for:"name"},[(0,s.Lk)("span",null,"*"),(0,s.eW)("姓名")],-1)),(0,s.bo)((0,s.Lk)("input",{type:"text",id:"name","onUpdate:modelValue":t[1]||(t[1]=e=>l.user.name=e),placeholder:"請輸入姓名",required:""},null,512),[[n.Jo,l.user.name]])]),(0,s.Lk)("div",jt,[t[14]||(t[14]=(0,s.Lk)("label",{for:"address"},[(0,s.Lk)("span",null,"*"),(0,s.eW)("地址")],-1)),(0,s.bo)((0,s.Lk)("input",{type:"text",id:"address","onUpdate:modelValue":t[2]||(t[2]=e=>l.user.address=e),placeholder:"請輸入地址",required:""},null,512),[[n.Jo,l.user.address]])]),(0,s.Lk)("div",It,[t[15]||(t[15]=(0,s.Lk)("label",{for:"phone"},[(0,s.Lk)("span",null,"*"),(0,s.eW)("聯絡電話")],-1)),(0,s.bo)((0,s.Lk)("input",{type:"text",id:"phone","onUpdate:modelValue":t[3]||(t[3]=e=>l.user.phone=e),placeholder:"請輸入手機號碼",required:""},null,512),[[n.Jo,l.user.phone]]),l.errors.phone?((0,s.uX)(),(0,s.CE)("span",At,(0,r.v_)(l.errors.phone),1)):(0,s.Q3)("",!0)]),(0,s.Lk)("div",Kt,[t[16]||(t[16]=(0,s.Lk)("label",{for:"note"},"備註",-1)),(0,s.bo)((0,s.Lk)("textarea",{id:"note",rows:"10","onUpdate:modelValue":t[4]||(t[4]=e=>l.user.note=e),placeholder:"請輸入其他訂單備註需求"},null,512),[[n.Jo,l.user.note]])])],544)])]),(0,s.Lk)("div",$t,[(0,s.Lk)("button",{onClick:t[6]||(t[6]=(...e)=>o.validateForm&&o.validateForm(...e)),disabled:0===e.cart.length,class:"btn-primary"}," 下一步 ",8,Jt)])])):(0,s.Q3)("",!0),2===l.step?((0,s.uX)(),(0,s.CE)("div",Rt,[(0,s.Lk)("div",Vt,[(0,s.Lk)("div",Ut,[t[18]||(t[18]=(0,s.Lk)("h3",null,"您的購物車資訊",-1)),(0,s.Lk)("div",Ht,[(0,s.Lk)("ul",zt,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(e.cart,(e=>((0,s.uX)(),(0,s.CE)("li",{key:e.id,class:"order-item"},[(0,s.Lk)("img",{src:e.image,class:"item-img"},null,8,Yt),(0,s.Lk)("span",Gt,(0,r.v_)(e.name)+" - "+(0,r.v_)(e.price)+" NTD x "+(0,r.v_)(e.quantity)+"= "+(0,r.v_)(e.price*e.quantity)+" NTD ",1)])))),128))])]),(0,s.Lk)("h3",Zt,"總計："+(0,r.v_)(e.totalPrice)+" NTD",1)]),(0,s.Lk)("div",ea,[t[24]||(t[24]=(0,s.Lk)("h3",null,"您輸入的訂購人資訊",-1)),(0,s.Lk)("div",ta,[t[19]||(t[19]=(0,s.Lk)("label",{for:"email"},[(0,s.Lk)("span",null,"*"),(0,s.eW)("信箱")],-1)),(0,s.eW)(" "+(0,r.v_)(l.user.email),1)]),(0,s.Lk)("div",aa,[t[20]||(t[20]=(0,s.Lk)("label",{for:"name"},[(0,s.Lk)("span",null,"*"),(0,s.eW)("姓名")],-1)),(0,s.eW)(" "+(0,r.v_)(l.user.name),1)]),(0,s.Lk)("div",na,[t[21]||(t[21]=(0,s.Lk)("label",{for:"address"},[(0,s.Lk)("span",null,"*"),(0,s.eW)("地址")],-1)),(0,s.eW)(" "+(0,r.v_)(l.user.address),1)]),(0,s.Lk)("div",sa,[t[22]||(t[22]=(0,s.Lk)("label",{for:"phone"},[(0,s.Lk)("span",null,"*"),(0,s.eW)("聯絡電話")],-1)),(0,s.eW)(" "+(0,r.v_)(l.user.phone),1)]),(0,s.Lk)("div",ra,[t[23]||(t[23]=(0,s.Lk)("label",{for:"note"},"備註",-1)),(0,s.eW)(" "+(0,r.v_)(l.user.note),1)])])]),(0,s.Lk)("div",ia,[(0,s.Lk)("button",{class:"btn-primary",onClick:t[7]||(t[7]=(...e)=>o.prevStep&&o.prevStep(...e))},"上一步"),(0,s.Lk)("button",{onClick:t[8]||(t[8]=(...e)=>o.orderestablish&&o.orderestablish(...e)),class:"btn-primary"},"下一步")])])):(0,s.Q3)("",!0),3===l.step?((0,s.uX)(),(0,s.CE)("div",la,[(0,s.Lk)("div",oa,[t[25]||(t[25]=(0,s.Lk)("h2",null,"訂單已完成！",-1)),(0,s.Lk)("p",null,"感謝您的購買，您的訂單"+(0,r.v_)(l.order.orderNumber)+"已經建立完成！",1),t[26]||(t[26]=(0,s.Lk)("p",null,"我們會儘快處理您的訂單並發送到您的地址。",-1))]),(0,s.Lk)("div",ca,[(0,s.Lk)("button",{class:"btn-primary",onClick:t[9]||(t[9]=(...e)=>o.prevStep&&o.prevStep(...e))},"上一步"),(0,s.Lk)("button",{class:"btn-primary",onClick:t[10]||(t[10]=(...e)=>o.resetOrder&&o.resetOrder(...e))},"了解返回")])])):(0,s.Q3)("",!0)])}a(4114);var da={data(){return{step:1,user:{email:"",name:"",address:"",phone:"",note:""},order:{},errors:{}}},computed:{...(0,k.aH)(["cart"]),...(0,k.L8)(["totalPrice"])},methods:{...(0,k.PY)(["updateCart","removeFromCart"]),updateQuantity(e,t){const a=[...this.cart];t<=0?a.splice(e,1):a[e].quantity=t,this.updateCart(a),localStorage.setItem("cart",JSON.stringify(a))},removeFromCart(e){const t=[...this.cart];t.splice(e,1),this.$store.commit("updateCart",t),localStorage.setItem("cart",JSON.stringify(t))},nextStep(){this.cart.length>0&&this.step<3&&this.step++},prevStep(){this.step>1&&this.step--},validateForm(){const e=this.$refs.orderForm;if(!e.checkValidity())return void e.reportValidity();this.errors={};let t=!0;/\S+@\S+\.\S+/.test(this.user.email)||(this.errors.email="請輸入有效的電子郵件",t=!1),/^09\d{8}$/.test(this.user.phone)||(this.errors.phone="請輸入有效手機號碼（09開頭，10碼）",t=!1),t&&this.nextStep()},resetOrder(){this.step=1,this.user={name:"",address:"",phone:""},this.updateCart([]),localStorage.removeItem("cart"),this.$router.push("/menu")},generateOrderNumber(){const e=Date.now(),t=Math.floor(1e3+9e3*Math.random());return`BBS-${e}-${t}`},orderestablish(){this.order={orderNumber:this.generateOrderNumber(),user:{...this.user},cart:[...this.cart],totalPrice:this.totalPrice,createdAt:(new Date).toISOString()},this.nextStep()}}};const pa=(0,_.A)(da,[["render",ua]]);var ma=pa;const ka={class:"product-detail"},va={key:0,class:"product-info"},ga={class:"info-img"},La=["src"],ba={class:"info-des"},ha={class:"btn-group"},fa={key:1,class:"related-products"},Ca={class:"info-area"},ya=["disabled"],wa={class:"product-gallery"},Sa=["src","alt"],_a=["disabled"],Ea={key:2};function Fa(e,t,a,n,i,l){const o=(0,s.g2)("router-link");return(0,s.uX)(),(0,s.CE)("div",ka,[n.product?((0,s.uX)(),(0,s.CE)("div",va,[(0,s.Lk)("div",ga,[(0,s.Lk)("img",{src:n.product.image,class:"product-img"},null,8,La)]),(0,s.Lk)("div",ba,[(0,s.Lk)("h1",null,(0,r.v_)(n.product.name),1),(0,s.Lk)("p",null,(0,r.v_)(n.product.description),1),(0,s.Lk)("p",null,[(0,s.Lk)("span",null,"$"+(0,r.v_)(n.product.price),1),t[4]||(t[4]=(0,s.eW)(" NTD / 個"))]),(0,s.Lk)("div",ha,[(0,s.Lk)("button",{class:"btn-primary",onClick:t[0]||(t[0]=e=>n.addToCart(n.product))},"加入購物車"),(0,s.Lk)("button",{onClick:t[1]||(t[1]=t=>e.$router.push("/menu")),class:"btn-secondary"},"返回菜單")])])])):(0,s.Q3)("",!0),n.relatedProducts.length>0?((0,s.uX)(),(0,s.CE)("div",fa,[t[5]||(t[5]=(0,s.Lk)("h2",null,"其他產品",-1)),(0,s.Lk)("div",Ca,[(0,s.Lk)("button",{class:"btn-turn",onClick:t[2]||(t[2]=(...e)=>n.prevPage&&n.prevPage(...e)),disabled:0===n.currentPage},"◀",8,ya),(0,s.Lk)("div",wa,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(n.relatedProducts,((e,t)=>((0,s.uX)(),(0,s.CE)("div",{key:t,class:"product-thumbnail"},[(0,s.bF)(o,{to:"/menu/"+e.id,class:"related-link"},{default:(0,s.k6)((()=>[(0,s.Lk)("img",{src:e.image,alt:e.name},null,8,Sa),(0,s.Lk)("p",null,(0,r.v_)(e.name),1)])),_:2},1032,["to"])])))),128))]),(0,s.Lk)("button",{class:"btn-turn",onClick:t[3]||(t[3]=(...e)=>n.nextPage&&n.nextPage(...e)),disabled:5*(n.currentPage+1)>=n.menuData.length},"▶",8,_a)])])):((0,s.uX)(),(0,s.CE)("div",Ea,t[6]||(t[6]=[(0,s.Lk)("p",null,"找不到該商品",-1)])))])}a(116);var Xa={emits:["add-to-cart"],setup(e,{emit:t}){const a=(0,U.lq)(),n=(0,k.Pj)(),r=(0,s.WQ)("menuData")||(0,m.KR)([]),i=(0,s.EW)((()=>r.value.find((e=>e.id==a.params.id)))),l=(0,m.KR)(0),o=3,c=(0,s.EW)((()=>{if(i.value){const e=r.value.filter((e=>e.id!==i.value.id));return e.slice(l.value*o,(l.value+1)*o)}return[]})),u=()=>{(l.value+1)*o<r.value.length&&l.value++},d=()=>{l.value>0&&l.value--},p=()=>{i.value&&(n.commit("addToCart",i.value),localStorage.setItem("cart",JSON.stringify(n.state.cart)),t("add-to-cart",i.value))};return{product:i,addToCart:p,relatedProducts:c,menuData:r,currentPage:l,nextPage:u,prevPage:d}}};const Ba=(0,_.A)(Xa,[["render",Fa]]);var Wa=Ba;const Pa={class:"news-info"},Oa={class:"news-img"},Ma=["src"],Da={class:"news-des"},xa={class:"news-title"},Ta={class:"title-info"},Na={class:"text-muted"},Qa={class:"news-content"};function qa(e,t,a,n,i,l){const o=(0,s.g2)("router-link");return(0,s.uX)(),(0,s.CE)("div",Pa,[(0,s.Lk)("div",Oa,[(0,s.Lk)("img",{src:n.newsDetail?.image},null,8,Ma)]),(0,s.Lk)("div",Da,[(0,s.Lk)("div",xa,[(0,s.Lk)("h2",Ta,(0,r.v_)(n.newsDetail?.title||"找不到新聞"),1),(0,s.Lk)("div",Na,"發布日期 : "+(0,r.v_)(n.newsDetail?.date),1)]),(0,s.Lk)("p",Qa,[(0,s.Lk)("pre",null,(0,r.v_)(n.newsDetail?.content),1)]),(0,s.bF)(o,{to:"/news",class:"btn-secondary"},{default:(0,s.k6)((()=>t[0]||(t[0]=[(0,s.eW)("返回列表")]))),_:1})])])}var ja={setup(){const e=(0,s.WQ)("newsData",{value:[]}),t=(0,U.lq)(),a=(0,s.EW)((()=>e.value.find((e=>e.id.toString()===t.params.id))));return{newsDetail:a}}};const Ia=(0,_.A)(ja,[["render",qa]]);var Aa=Ia;const Ka=[{path:"/",component:Ue,meta:{title:"首頁"}},{path:"/aboutbread",component:bt,meta:{title:"品牌故事"}},{path:"/news",component:mt,meta:{title:"最新消息"}},{path:"/news/:id",component:Aa,props:!0},{path:"/menu",component:ot,meta:{title:"菜單"}},{path:"/cart",component:A,meta:{title:"購物車"}},{path:"/checkorder",component:ma,meta:{title:"訂單結帳"}},{path:"/menu/:id",component:Wa,props:!0}],$a=(0,U.aE)({history:(0,U.Bt)(),routes:Ka});var Ja=$a;const Ra=(0,k.y$)({state:{cart:[],cartMessage:!1},mutations:{setCart(e,t){e.cart=t},addToCart(e,t){const a=e.cart.find((e=>e.id===t.id));a?a.quantity+=1:e.cart.push({...t,quantity:1}),e.cartMessage=!0},updateCart(e,t){e.cart=t},showCartMessage(e){e.cartMessage=!0},hideCartMessage(e){e.cartMessage=!1}},getters:{cartQuantity(e){return e.cart.reduce(((e,t)=>e+t.quantity),0)},totalPrice(e){return e.cart.reduce(((e,t)=>e+t.price*t.quantity),0)}}});var Va=Ra,Ua=a(8950),Ha=a(2353),za=a(292);Ua.Yv.add(Ha.MjS,Ha.dmS);const Ya=(0,n.Ef)(V);Ya.component("font-awesome-icon",za.gc),Ya.use(Ja),Ya.use(Va),Ya.mount("#app")}},t={};function a(n){var s=t[n];if(void 0!==s)return s.exports;var r=t[n]={exports:{}};return e[n].call(r.exports,r,r.exports,a),r.exports}a.m=e,function(){var e=[];a.O=function(t,n,s,r){if(!n){var i=1/0;for(u=0;u<e.length;u++){n=e[u][0],s=e[u][1],r=e[u][2];for(var l=!0,o=0;o<n.length;o++)(!1&r||i>=r)&&Object.keys(a.O).every((function(e){return a.O[e](n[o])}))?n.splice(o--,1):(l=!1,r<i&&(i=r));if(l){e.splice(u--,1);var c=s();void 0!==c&&(t=c)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[n,s,r]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var s,r,i=n[0],l=n[1],o=n[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(s in l)a.o(l,s)&&(a.m[s]=l[s]);if(o)var u=o(a)}for(t&&t(n);c<i.length;c++)r=i[c],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(u)},n=self["webpackChunkbakery_shop"]=self["webpackChunkbakery_shop"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[504],(function(){return a(133)}));n=a.O(n)})();
//# sourceMappingURL=app.cad994ea.js.map