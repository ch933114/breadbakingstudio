<template>
  <div class="menu-summary">
    <h2 class="menu-title">精選菜單</h2>
    <div class="menu-items">
      <div v-for="item in limitedMenu" :key="item.id" class="menu-item">
        <div class="card">
          <img :src="item.image" class="card-img-top img-fixed" alt="菜單圖片" />
          <div class="card-body">
            <h4 class="card-title">{{ item.name }}</h4>
            <p class="card-text">價格: ${{ item.price }}</p>
            <router-link :to="'/menu'" class="btn-primary">查看詳情</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed,inject,ref } from 'vue';

export default {
  props: {
    limit: Number,  // 顯示的菜品數量
  },
  setup(props) {
    const menuData = inject('menuData') || ref([]); 
    // 使用 .value 操作響應式數據，並對數據進行計算處理
    const limitedMenu = computed(() => menuData.value.slice(0, props.limit));

    return { limitedMenu };
  },
};
</script>
