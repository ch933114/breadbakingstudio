<template>
  <div>
    <NewsList :news="newsData" :showMore="false" />
  </div>
</template>

<script>
import { inject } from 'vue';
import NewsList from '../components/NewsList.vue';

export default {
  components: { NewsList },
  setup() {
    // 從父組件中注入 newsData
    const newsData = inject('newsData');

    // 如果沒有注入 newsData，則提供一個默認值或處理錯誤
    if (!newsData) {
      console.warn('newsData is not provided!');
      return { newsData: [] };  // 預設為空陣列
    }

    return { newsData };
  },
};
</script>
