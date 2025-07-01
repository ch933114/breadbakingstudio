<template>
  <div class="menu-page">
    <div class="menu-title">
      <h1>BBS 最新菜單</h1>
    </div>
    <div class="menu-search">
      <input v-model="search" class="search-input" placeholder="搜尋品名" />
    </div>
    <div class="menu-items" v-if="filteredMenu.length !== 0">
      <div v-for="item in filteredMenu" :key="item.id" class="menu-item">
        <div class="card">
          <img :src="item.image" class="card-img" />
          <div class="card-body">
            <h5 class="card-title">
              <router-link class="title-link" :to="'/menu/' + item.id">{{ item.name }}</router-link>
            </h5>
            <p class="card-text">價格: ${{ item.price }}</p>
            <div class="btn-group">
              <button class="btn-primary" @click="addToCart(item)">
                加入購物車
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="search-alert" v-if="filteredMenu.length === 0">
        <p>很抱歉，您搜尋的關鍵字目前未有對應商品，請重新輸入</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue"
import { useStore } from "vuex"

const store = useStore()
const search = ref("")

const menuData = computed(() => store.state.menuData)
const filteredMenu = computed(() =>
  Array.isArray(menuData.value)
    ? menuData.value.filter((item) =>
        item.name?.toLowerCase().includes(search.value.toLowerCase())
      )
    : []
)

// 加入購物車，使用 Vuex 的 mutation
const addToCart = (item) => store.commit("addToCart", item)
</script>
