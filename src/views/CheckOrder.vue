<template>
   <div>
     <div class="order-progress">
       <div class="progress-label" :class="{'active': step >= 1}">STEP1 : 確認訂單</div>
       <div class="progress-label" :class="{'active': step >= 2}">STEP2 : 建立訂單</div>
       <div class="progress-label" :class="{'active': step >= 3}">STEP3 : 完成訂單</div>
     </div>

     <!-- 顯示購物車商品 -->
     <div v-if="step === 1" class="order-confirm">
       <h2>確認您的訂單</h2>
       <!-- 購物車資料 -->
       <div class="order-info">
        <div class="cart-info">
        <h3>購物車資訊</h3>
        <p v-if="cart.length === 0" class="warning-text">請加入商品才能繼續結帳。</p>
       <div class="order-list">
         <ul class="order-items">  
          <li v-for="(item, index) in cart" :key="item.id" class="order-item">
           <img :src="item.image" class="item-img" />
           <span class="item-info">
              {{ item.name }} - {{ item.price }} NTD x {{item.quantity}}= {{ item.price * item.quantity }} NTD
              <div class="quantity-controls">
                <button class="p-adj" @click="updateQuantity(index, item.quantity - 1)">◀</button>
                <span>{{ item.quantity }}</span>
                <button class="p-adj" @click="updateQuantity(index, item.quantity + 1)">▶</button>
                <button class="remove-button" @click="removeFromCart(index)">移除</button>
              </div>
            </span>
            </li>
          </ul>
        </div>
        <h3 class="order-total">總計：{{ totalPrice }} NTD</h3>
       </div>
       <!-- 訂購人資料 -->
       <div class="recipient-info">
          <h3>請輸入訂購人資訊</h3>
          <form @submit.prevent="submitOrder" ref="orderForm" class="order-form">
            <div class="form-row">
              <label for="email"><span>*</span>信箱</label>
              <input type="text" id="email" v-model="user.email" placeholder="請輸入Email" required />
            </div>
            <div class="form-row">
              <label for="name"><span>*</span>姓名</label>
              <input type="text" id="name" v-model="user.name" placeholder="請輸入姓名" required />
            </div>
            <div class="form-row">
              <label for="address"><span>*</span>地址</label>
              <input type="text" id="address" v-model="user.address" placeholder="請輸入地址" required />
            </div>
            <div class="form-row">
              <label for="phone"><span>*</span>聯絡電話</label>
              <input type="text" id="phone" v-model="user.phone" placeholder="請輸入手機號碼" required />
            </div>
            <div class="form-row">
              <label for="note">備註</label>
              <textarea id="note" rows="10" v-model="user.note" placeholder="請輸入其他訂單備註需求"></textarea>
            </div>
          </form>
       </div>
       </div>
       <div class="button-group">
         <button 
           @click="validateForm" :disabled="cart.length === 0" class="next-btn">
           下一步
         </button>
       </div>
     </div>

     <!-- 用戶資料輸入 -->
     <div v-if="step === 2" class="order-create">
      <div class="order-create-info">
        <div class="cart-info-check">
       <div class="order-list">
         <ul class="order-items">  
          <li v-for="(item) in cart" :key="item.id" class="order-item">
           <img :src="item.image" class="item-img" />
            <span class="item-info">
              {{ item.name }} - {{ item.price }} NTD x {{item.quantity}}= {{ item.price * item.quantity }} NTD
            </span>
            </li>
          </ul>
        </div>
        <h3 class="order-total">總計：{{ totalPrice }} NTD</h3>
       </div>
        <div class="recipient-info-check">
            <h3>您輸入的訂購人資訊</h3>
            <div class="form-row">
              <label for="email"><span>*</span>信箱</label>
              {{ user.email }}
            </div>
            <div class="form-row">
              <label for="name"><span>*</span>姓名</label>
              {{ user.name }}
            </div>
            <div class="form-row">
              <label for="address"><span>*</span>地址</label>
              {{ user.address }}
            </div>
            <div class="form-row">
              <label for="phone"><span>*</span>聯絡電話</label>
              {{ user.phone }}
            </div>
            <div class="form-row">
              <label for="note">備註</label>
              {{ user.note }}
            </div>
          </div>
      </div>
      <div class="button-group">
         <button class="prev-btn" @click="prevStep">上一步</button>
         <button 
           @click="orderestablish"  class="next-btn">下一步</button>
      </div>
     </div>

     <!-- 訂單完成 -->
     <div v-if="step === 3" class="order-complete">
       <h2>訂單已完成！</h2>
       <p>感謝您的購買，您的訂單{{order.orderNumber}}已經建立完成！</p>
       <p>我們會儘快處理您的訂單並發送到您的地址。</p>
       <div class="button-group">
        <button class="prev-btn" @click="prevStep">上一步</button>
        <button class="back-btn" @click="resetOrder">了解返回</button>
       </div>
     </div>
   </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex';

export default {
   data() {
     return {
       step: 1,
       user: {
         email: '',
         name: '',
         address: '',
         phone: '',
         note: ''
       },
       order: {

       }
     };
   },
   computed: {
     ...mapState(['cart']),
     ...mapGetters(['totalPrice'])
   },
   methods: {
     ...mapMutations(['updateCart', 'removeFromCart']),
     
     // 更新數量的函數
     updateQuantity(index, newQuantity) {
       const updatedCart = [...this.cart];

       if (newQuantity <= 0) {
         updatedCart.splice(index, 1); // 移除數量為 0 的商品
       } else {
         updatedCart[index].quantity = newQuantity;
       }

       this.updateCart(updatedCart);  // 更新 Vuex 中的購物車
       localStorage.setItem('cart', JSON.stringify(updatedCart));  // 同步到 localStorage
     },

      // 移除購物車商品（整個品項）
      removeFromCart(index) {
        const updatedCart = [...this.cart];
        updatedCart.splice(index, 1);
        // 使用 Vuex 提交更新
        this.$store.commit('updateCart', updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart)); // 存回 localStorage
     },


     nextStep() {
       if (this.cart.length > 0) {
         if (this.step < 3) {
           this.step++;
         }
       }
     },
     prevStep() {
       if (this.step > 1) {
         this.step--;
       }
     },
     validateForm() {
     const form = this.$refs.orderForm;
     if (!form.checkValidity()) {
       form.reportValidity(); // 觸發瀏覽器內建的表單驗證提示
       return;
     }

     // 如果驗證通過，就執行下一步
       this.nextStep();
     },
     resetOrder() {
        this.step = 1;
        this.user = { name: '', address: '', phone: '' };
        this.updateCart([]); // 清空 Vuex 中的購物車資料
        localStorage.removeItem('cart'); // 清空 localStorage 中的購物車資料
      },
      generateOrderNumber() {
         const timestamp = Date.now(); // 取得當前時間戳
         const randomPart = Math.floor(1000 + Math.random() * 9000); // 產生四位數隨機數
         return `BBS-${timestamp}-${randomPart}`; // 組合訂單號
      },
      orderestablish() {
        this.order = {
        orderNumber: this.generateOrderNumber(), // 訂單編號
        user: { ...this.user }, // 訂購人資訊
        cart: [...this.cart], // 購物車內容
        totalPrice: this.totalPrice, // 訂單總金額
        createdAt: new Date().toISOString() // 訂單建立時間
        };
        console.log("訂單建立成功：", this.order);
        // 儲存到 localStorage（模擬存儲）
        // localStorage.setItem("order", JSON.stringify(this.order));
        // 進入下一步
        this.nextStep();
    }
   }
};
</script>
