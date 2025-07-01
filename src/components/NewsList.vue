<template>
  <div class="news-list">
    <div class="content">
      <div
        v-for="(news, index) in displayedNews"
        :key="index"
        class="cards"
      >
        <div class="card">
          <router-link :to="'/news/' + news.id" class="card-route">
            <img
              v-if="news.image"
              :src="news.image"
              class="card-img"
              alt="新聞圖片"
            />
            <div class="card-body">
              <h5 class="card-title">{{ news.title }}</h5>
              <p class="text-muted">{{ news.date }}</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue"

const props = defineProps({
  news: Array,
  limit: Number,
})

const displayedNews = computed(() => {
  return props.limit ? props.news.slice(0, props.limit) : props.news
})

</script>
