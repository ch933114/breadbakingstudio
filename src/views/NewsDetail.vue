<template>
  <div class="news-info">
    <div class="news-img">
      <img :src="newsDetail?.image"/>
    </div>
    <div class="news-area">
      <div class="news-des">
        <h2 class="title-info">{{ newsDetail?.title }}</h2>
        <div class="text-muted">發布日期 : {{ newsDetail?.date }}</div>
        <p class="news-content"><pre>{{ newsDetail?.content }}</pre></p>
      </div>
      <router-link to="/news" class="btn-secondary">返回列表</router-link>
    </div>
  </div>
</template>

<script setup>
    import { computed } from 'vue'
    import { useRoute } from 'vue-router'
    import { useStore } from "vuex"

    const store = useStore()
    const route = useRoute()

    const newsData = computed(()=> store.state.newsData)
    const newsDetail = computed(() => {
      return newsData.value.find((item) => item.id.toString() === route.params.id)
    })

</script>