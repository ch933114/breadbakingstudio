<template>
  <div class="carousel">
    <transition name="fade" mode="out-in">
      <img :src="images[currentIndex]" :key="currentIndex" class="slide" />
    </transition>

    <!-- 左右切換按鈕 -->
    <button class="prev" @click="prevSlide">❮</button>
    <button class="next" @click="nextSlide">❯</button>

    <!-- 進度指示點 -->
    <div class="dots">
      <span
        v-for="(image, index) in images"
        :key="index"
        :class="{ active: index === currentIndex }"
        @click="currentIndex = index"
      ></span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// 這裡的麵包照片來自 Unsplash
const images = ref([
  '/img/carousel/bakery_1.jpg',
  '/img/carousel/bakery_2.jpg'
]);

const currentIndex = ref(0);
let interval = null;

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % images.value.length;
};

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + images.value.length) % images.value.length;
};

// 自動播放
onMounted(() => {
  interval = setInterval(nextSlide, 6000);
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>

