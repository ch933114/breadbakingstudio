<template>
  <div class="cart-container">
    <div v-if="cart.length === 0" class="cart-empty">
      <router-link to="/menu" class="btn-primary" @click="closeSidebar">選購去!</router-link>
    </div>
    <ul class="cart-items">
      <li v-for="(item, index) in cart" :key="item.id" class="cart-item">
        <div class="item-des">
          <img :src="item.image" class="cart-img" />
          {{ item.name }}
        </div>
        <span class="item-info">
          {{ item.price }} NTD x {{ item.quantity }} =
          {{ item.price * item.quantity }} NTD
          <div class="quantity-controls">
            <button
              class="p-adj"
              @click="updateQuantity(index, item.quantity - 1)"
            >
              ◀
            </button>
            <span>{{ item.quantity }}</span>
            <button
              class="p-adj"
              @click="updateQuantity(index, item.quantity + 1)"
            >
              ▶
            </button>
            <button class="remove-button" @click="removeFromCart(index)">
              移除
            </button>
          </div>
        </span>
      </li>
    </ul>
    <h4 v-if="cart.length > 0" class="total-price">
      總計金額 : {{ totalPrice }} NTD
    </h4>
    <div v-if="!(cart.length === 0)" class="order-area">
      <router-link
        to="/checkorder"
        class="btn-primary"
        @click="closeSidebar"
        >訂單結帳</router-link
      >
    </div>
  </div>
</template>

<script setup>
import { computed, readonly } from "vue"
import { useStore } from "vuex"

const store = useStore()
const cart = readonly(computed(() => store.state.cart))
const totalPrice = readonly(computed(() => store.getters.totalPrice))

// 呼叫 store 的購物車更新商品數量
const updateQuantity = (index, newQuantity) => {
  store.dispatch("updateQuantity", { index, newQuantity })
}

// 呼叫 store 的購物車移除商品
const removeFromCart = (index) => {
  store.dispatch("removeFromCart", index)
}

// 定義 emit 事件
const emit = defineEmits(["close-sidebar"])
// 關閉側欄
const closeSidebar = () => {
  emit("close-sidebar")
}
</script>
