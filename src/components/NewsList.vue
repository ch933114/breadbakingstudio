<template>
  <div class="news-list">
    <h3 class="news-title">最新消息</h3>
    <div class="content">
      <div v-for="(news, index) in displayedNews" :key="index" class="cards">
        <div class="card">
          <!-- 替換圖片區域為單色塊占位 -->
          <img v-if="news.image" :src="news.image" class="card-img-top" alt="新聞圖片">
          <div class="card-body">
            <h5 class="card-title">{{ news.title }}</h5>
            <p class="text-muted">{{ news.date }}</p>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showMore" class="more-btn">
      <router-link to="/news" class="btn">查看更多</router-link>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';

export default {
  props: {
    news: Array,  // 傳入的新聞列表
    limit: Number,  // 顯示幾則新聞
    title: String,  // 標題
    showMore: Boolean,  // 是否顯示「查看更多」按鈕
  },
  setup(props) {
    // 限制顯示的新聞數量
    const displayedNews = computed(() => {
      return props.limit ? props.news.slice(0, props.limit) : props.news;
    });

    return { displayedNews };
  },
};
</script>