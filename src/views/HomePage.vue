<template>
  <div>
    <div>
      <CarouselPage />
    </div>
    <div>
      <AnimatedPart />
    </div>
    <div>
      <NewsList :news="newsData" :limit="4" :showMore="true" />
    </div>
    <!-- 顯示菜單摘要 -->
    <div class="container mt-4">
      <div class="row">
         <!-- 引入 MenuSummary 並傳遞菜單資料 -->
         <MenuSummary :limit="4" />
      </div>
    </div>
    <div>
      <StoreLocation />
    </div>
  </div>
</template>

<script>
import CarouselPage from '../components/CarouselPage.vue';
import { inject } from 'vue';  // 引入 inject
import NewsList from '../components/NewsList.vue';
import MenuSummary from '../components/MenuSummary.vue';
import AnimatedPart from '../components/AnimatedPart.vue';
import StoreLocation from '../components/StoreLocation.vue';

export default {
  components: { CarouselPage, NewsList, MenuSummary,AnimatedPart,StoreLocation},
  setup() {
    // 使用 inject 來獲取父組件提供的 newsData
    const newsData = inject('newsData');  

    // 如果 newsData 為 undefined，則可以提供一個默認值
    if (!newsData) {
      console.warn('newsData is not provided!');
    }

    return { newsData };
  },
};
</script>
