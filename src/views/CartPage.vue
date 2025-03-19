<template>
  <div class="cart-container">
    <div v-if="cart.length === 0" class="cart-empty">
      <router-link :to="'/menu'" class="cta-button">選購去!</router-link>
    </div>
    <ul class="cart-items">
      <li v-for="(item, index) in cart" :key="item.id" class="cart-item">
        <img :src="item.image" class="cart-img" />
        <span class="item-info">
          {{ item.name }} - {{ item.price }} NTD x {{ item.quantity }} = {{ item.price * item.quantity }} NTD
          <div class="quantity-controls">
            <button class="p-adj" @click="updateQuantity(index, item.quantity - 1)">◀</button>
            <span>{{ item.quantity }}</span>
            <button class="p-adj" @click="updateQuantity(index, item.quantity + 1)">▶</button>
            <button class="remove-button" @click="removeFromCart(index)">移除</button>
          </div>
        </span>
      </li>
    </ul>
    <hr />
    <h4 v-if="cart.length > 0" class="total-price">總計金額 : {{ totalPrice }} NTD</h4>
    <div v-if="!(cart.length === 0)" class="order-area">
      <router-link :to="'/checkorder'" class="cart-order">訂單結帳</router-link>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';  // 引入 vuex store

export default {
  setup() {
    const store = useStore(); // 使用 store
    const cart = computed(() => store.state.cart);  // 從 Vuex store 取得購物車資料

    // 計算總價（考慮數量）
    const totalPrice = computed(() =>
      cart.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
    );

    // 更新數量
    const updateQuantity = (index, newQuantity) => {
      const updatedCart = [...cart.value];

      if (newQuantity <= 0) {
        updatedCart.splice(index, 1); // 數量為 0 時移除
      } else {
        updatedCart[index].quantity = newQuantity;
      }

      // 使用 Vuex 提交更新
      store.commit('updateCart', updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart)); // 存回 localStorage
    };

    // 移除購物車商品（整個品項）
    const removeFromCart = (index) => {
      const updatedCart = [...cart.value];
      updatedCart.splice(index, 1);

      // 使用 Vuex 提交更新
      store.commit('updateCart', updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart)); // 存回 localStorage
    };

    return { cart, updateQuantity, removeFromCart, totalPrice };
  },
};
</script>
