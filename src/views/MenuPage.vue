<template>
  <div class="menu-page">
    <div class="menu-search">
      <input v-model="search" class="search-input" placeholder="搜尋品名" />
    </div>
    <div class="menu-items">
      <div v-for="item in filteredMenu" :key="item.id" class="menu-item">
        <div class="card">
          <img :src="item.image" class="card-img-top img-fixed" />
          <div class="card-body">
            <h5 class="card-title">{{ item.name }}</h5>
            <p class="card-text">價格: ${{ item.price }}</p>
            <button class="btn-primary" @click="addToCart(item)">加入購物車</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, inject } from 'vue';

export default {
  props: ['cart'],
  emits: ['add-to-cart'],
  setup(_, { emit }) {
    const search = ref('');
    // 從父組件中注入 menuData，並提供預設值 []
    const menuData = inject('menuData') || ref([]); 

    const filteredMenu = computed(() =>
    Array.isArray(menuData.value) 
      ? menuData.value.filter(item => item.name?.toLowerCase().includes(search.value.toLowerCase())) 
      : []
    );

    const addToCart = (item) => emit('add-to-cart', item);

    return { search, filteredMenu, addToCart };
  },
};
</script>
