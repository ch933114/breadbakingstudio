import { createStore } from "vuex";
import { newsData } from "../newsData.js";
import { menuData } from "../menuData.js";

const store = createStore({
  state: {
    cart: [],
    cartMessage: false,
    toastMessage: "",
    newsData: newsData,
    menuData: menuData,
  },
  mutations: {
    setCart(state, cart) {
      state.cart = cart;
    },
    addToCart(state, item) {
      const existingItem = state.cart.find(
        (cartItem) => cartItem.id === item.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...item, quantity: 1 });
      }
      localStorage.setItem("cart", JSON.stringify(state.cart)); // 同步到 localStorage
      state.cartMessage = true; // 顯示提示視窗
      state.toastMessage = `${item.name} 已成功加入購物車！`; // 設定提示訊息

      // 2秒後清除提示訊息
      setTimeout(() => {
        state.toastMessage = ""; // 清除提示訊息
      }, 2000);
    },
    updateCart(state, updatedCart) {
      state.cart = updatedCart;
    },
  },
  getters: {
    cartQuantity(state) {
      return state.cart.reduce((sum, item) => sum + item.quantity, 0);
    },
    totalPrice(state) {
      return state.cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
  },
  actions: {
    updateQuantity({ state, commit }, { index, newQuantity }) {
      const updatedCart = [...state.cart];
      if (newQuantity <= 0) {
        updatedCart.splice(index, 1);
      } else {
        updatedCart[index].quantity = newQuantity;
      }
      commit("updateCart", updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    },

    removeFromCart({ state, commit }, index) {
      const updatedCart = [...state.cart];
      updatedCart.splice(index, 1);
      commit("updateCart", updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    },
  },
});

export default store;
