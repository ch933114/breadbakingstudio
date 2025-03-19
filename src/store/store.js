// src/store.js
import { createStore } from 'vuex';

const store = createStore({
  state: {
    cart: [],
  },
  mutations: {
    // 設定購物車
    setCart(state, cart) {
      state.cart = cart;
    },
    // 加入商品到購物車
    addToCart(state, item) {
      const existingItem = state.cart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...item, quantity: 1 });
      }
    },
    // 更新購物車
    updateCart(state, updatedCart) {
      state.cart = updatedCart;
    },
  },
  getters: {
    cartQuantity(state) {
      return state.cart.reduce((sum, item) => sum + item.quantity, 0);
    },
    totalPrice(state) {
      return state.cart.reduce((total, item) => {
        return total + (item.price * item.quantity);
       }, 0);
     }
    },
});

export default store;
