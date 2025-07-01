<template>
  <div class="index-backg">
    <!-- header -->
    <AppHeader @OpenSidebar="toggleSidebar" />
    <!-- 提示訊息 -->
    <div v-if="toastMessage" class="toast">
      <p>{{ toastMessage }}</p>
    </div>
    <!-- 右側側欄 -->
    <div class="sidebar" :class="{ active: isSidebarOpen }">
      <div class="sidebar-header">
        <span class="sidebar-title">購物車</span>
        <button class="close-btn" @click="toggleSidebar">×</button>
      </div>
      <!-- 購物車內容 -->
      <div class="sidebar-content">
        <CartPage @close-sidebar="() => toggleSidebar(false)" />
      </div>
    </div>
    <!-- 主要內容區塊 -->
    <section class="main-content">
      <router-view />
    </section>
    <!-- 聯絡我們 -->
    <div class="pg-content">
      <ContactUs />
    </div>
    <!-- Footer -->
    <AppFooter/>
    <!-- 回到最上方按鈕 -->
    <ScrollToTop/>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue"
import { useStore } from "vuex"
import AppHeader from "./components/AppHeader.vue"
import AppFooter from "./components/AppFooter.vue"
import ScrollToTop from "./components/ScrollToTop.vue"
import ContactUs from "./components/ContactUs.vue"
import CartPage from "./views/CartPage.vue"

const store = useStore()
const isSidebarOpen = ref(false)
const toastMessage = computed(() => store.state.toastMessage)
const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}

onMounted(() => {
  // 載入時讀取 localStorage 並更新 Vuex 資料，實務上要接DB資料，使用者端的瀏覽器資料不可信用
  const savedCart = localStorage.getItem("cart")
  if (savedCart) {
    store.commit("setCart", JSON.parse(savedCart))
  }
})

</script>
