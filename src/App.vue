<template>
  <div class="index-backg">
    <!-- Header區塊，固定在最上方 -->
    <div class="header-wrapper">
      <AppHeader :cartItemCount="cartQuantity" @OpenSidebar="toggleSidebar" />
    </div>

    <!-- 右側側欄 -->
    <div class="sidebar" :class="{ active: isSidebarOpen }">
      <!-- 側欄標題與關閉按鈕 -->
      <div class="sidebar-header">
        <span class="sidebar-title">購物車</span>
        <button class="close-btn" @click="toggleSidebar">×</button>
      </div>
      <!-- 購物車內容 -->
      <div class="sidebar-content">
        <CartPage :cart="cart" @update-cart="updateCart" />
      </div>
    </div>

    <!-- Breadcrumbs區塊 -->
    <!-- <div class="Breadcrumbs">
      <Breadcrumbs />
    </div> -->

    <!-- 主要內容區塊 -->
    <div class="container-fluid">
      <router-view :cart="cart" @add-to-cart="addToCart" @update-cart="updateCart" />
    </div>

    <!-- Footer區塊 -->
    <footer class="footer">
      <p>本網站僅供個人作品使用，未提供商業用途</p>
      <p>BBS &copy; 2025 COPYRIGHT</p>
    </footer>
  </div>
</template>

<script>
import { ref,computed, onMounted } from 'vue';
import { useStore } from 'vuex'; // 引入 vuex 的 useStore
import AppHeader from './components/AppHeader.vue';
import CartPage from './views/CartPage.vue';  // 引入 CartPage.vue
import { newsData } from './newsData.js'; // 引入共享資料
import { menuData } from './menuData.js'; // 引入共享資料

export default {
  components: { AppHeader, CartPage },
  setup() {
    const store = useStore(); // 使用 store
    const isSidebarOpen = ref(false); // 用來控制側欄是否開啟

    // **載入時讀取 localStorage 並更新 Vuex 資料**
    onMounted(() => {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        store.commit('setCart', JSON.parse(savedCart));
      }
    });

    // 使用 computed 來計算 cart 中商品的總數量
    const cartQuantity = computed(() => store.getters.cartQuantity);

    // **加入購物車並存入 `localStorage`**
    const addToCart = (item) => {
      store.commit('addToCart', item);
      localStorage.setItem('cart', JSON.stringify(store.state.cart));
    };

    const updateCart = (updatedCart) => {
      store.commit('updateCart', updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const toggleSidebar = () => {
      isSidebarOpen.value = !isSidebarOpen.value; // 控制側欄開關
    };

    return { cart: store.state.cart, addToCart, updateCart, toggleSidebar, isSidebarOpen, cartQuantity };
  },
  provide() {
    return {
      newsData: ref(newsData), // 提供 newsData
      menuData: ref(menuData), // 提供 menuData
    };
  },
};
</script>