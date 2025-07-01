<template>
  <div class="ig-template">
    <div class="article-header">
      <div class="ig-user">
        <img src="img/icon/batman.png" alt="老闆頭像" />
        <div class="user-info">
          <p class="user-name">Dean</p>
          <p class="location">Miaoli City</p>
        </div>
        <div class="certification-mark"></div>
      </div>
      <div class="article-btn">
        <i class="fa-solid fa-ellipsis-vertical"></i>
      </div>
    </div>
    <div class="carousel">
      <!-- 大圖輪播 -->
      <div class="carousel">
        <transition name="fade" mode="out-in">
          <img
            v-bind:src="images[currentIndex]"
            v-bind:key="currentIndex"
            class="slide"
          />
        </transition>
        <!-- 左右切換按鈕 -->
        <button class="prev" v-on:click="prevSlide">❮</button>
        <button class="next" v-on:click="nextSlide">❯</button>
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
    </div>
    <div class="article-des">
      <div class="des-btn">
        <img src="img/icon/heart.png" alt="喜歡icon" />
        <img src="img/icon/chat.png" alt="聊天icon" />
      </div>
      <span class="like-count">666 likes</span>
      <p>歡迎來到 BBS ，找出純粹健康滋味 !</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue"

const images = ref(["img/carousel/bakery_1.jpg", "img/carousel/bakery_2.jpg", "img/carousel/bakery_3.jpg" ])
const currentIndex = ref(0)
let interval = null

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % images.value.length
}
const prevSlide = () => {
  currentIndex.value =
    (currentIndex.value - 1 + images.value.length) % images.value.length
}
// 自動播放
onMounted(() => {
  interval = setInterval(nextSlide,5000)
})
onUnmounted(() => {
  clearInterval(interval)
})
</script>
