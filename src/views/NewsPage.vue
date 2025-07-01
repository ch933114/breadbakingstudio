<template>
  <div class="news-pg">
    <h1 class="news-title">最新消息</h1>
    <newsList :news="newsData" :showMore="false" />
  </div>
</template>

<script setup>
import newsList from "../components/NewsList.vue"
import { computed } from 'vue'
import { useStore } from "vuex"

const store = useStore()
const newsData = computed(() => store.state.newsData)

// 如果沒有注入 newsData，則提供一個默認值或處理錯誤
if (!newsData.value) {
  console.warn("newsData is not provided!")
}
</script>
