<template>
  <nav class="navbar">
    <div class="navbar-container">
      <a href="/" class="navbar-brand">Bread Baking Studio</a>

      <!-- 漢堡按鈕 -->
      <button class="menu-toggle" @click="toggleMenu">
        ☰
      </button>

      <!-- 選單 -->
      <ul class="navbar-nav" :class="{ active: isMenuOpen }">
        <li class="nav-item">
          <router-link to="/aboutbread" class="nav-link" @click="closeMenu">關於BBS</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/news" class="nav-link" @click="closeMenu">最新消息</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/menu" class="nav-link" @click="closeMenu">菜單</router-link>
        </li>
        <!-- <li class="nav-item">
          <router-link to="/" class="nav-link" @click="closeMenu">店面查詢</router-link>
        </li> -->
        <li class="nav-item">
          <a class="nav-link" @click="openSidebar">
            購物車 <span class="cart-badge">{{ cartItemCount }}</span>
          </a>
        </li>
      </ul>

      <!-- 遮罩 (mask) -->
      <div class="menu-mask" :class="{ active: isMenuOpen }" @click="closeMenu"></div>
    </div>
  </nav>
</template>

<script>
export default {
  props: ['cartItemCount'],
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
    openSidebar() {
      // 觸發事件通知父組件顯示側欄
      this.$emit('OpenSidebar');
    }
  },
};
</script>
