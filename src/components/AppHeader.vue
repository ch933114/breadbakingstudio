<template>
  <header class="header-wrapper">
    <nav class="navbar">
      <div class="navbar-container">
        <router-link
          to="/"
          class="navbar-brand boujee-text"
          @click="closeMenu"
          >Bread Baking Studio</router-link
        >
        <!-- 漢堡按鈕 -->
        <button class="menu-toggle" @click="toggleMenu">☰</button>

        <!-- 選單 -->
        <ul class="navbar-nav" :class="{ active: isMenuOpen }">
          <li class="nav-item">
            <router-link to="/" class="nav-link" @click="closeMenu"
              >首頁</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              to="/aboutbread"
              class="nav-link"
              @click="closeMenu"
              >關於BBS</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/news" class="nav-link" @click="closeMenu"
              >最新消息</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/menu" class="nav-link" @click="closeMenu"
              >菜單</router-link
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" @click="openSidebar(),closeMenu()">
              購物車 <span class="cart-badge">{{ cartItemCount }}</span>
            </a>
          </li>
        </ul>

        <!-- mask -->
        <div
          class="menu-mask"
          :class="{ active: isMenuOpen }"
          @click="closeMenu"
        ></div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, computed } from "vue"
import { useStore } from "vuex"

const store = useStore()
const isMenuOpen = ref(false)

const cartItemCount = computed(() => store.getters.cartQuantity)
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
};
const closeMenu = () => {
  isMenuOpen.value = false
};

const emit = defineEmits(["OpenSidebar"])
const openSidebar = () => {
  // 觸發事件通知父組件顯示側欄
  emit("OpenSidebar")
}
</script>
