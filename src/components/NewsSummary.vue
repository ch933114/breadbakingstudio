<template>
  <div class="news-list">
    <h3 class="news-title">最新消息</h3>
    <MarqueeComp>每日出爐時間為中午12:00及下午7:00，新鮮現烤出爐，別錯過囉!</MarqueeComp>
    <NewsList :news="newsData" :limit="3"></NewsList>
    <div class="more-area">
      <router-link to="/news" class="more-btn"
        >查看更多 <img src="img/icon/right-side.png" alt="前往更多"
      /></router-link>
    </div>
  </div>
</template>

<script setup>
import MarqueeComp from "./MarqueeComp.vue"
import NewsList from "./NewsList.vue"
import { computed } from 'vue'
import { useStore } from "vuex"

const store = useStore()
const newsData = computed(() => store.state.newsData)

</script>
