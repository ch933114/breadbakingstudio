<template>
  <div
    ref="subscribeRef"
    class="subscribe-area"
    v-bind:class="{ show: isShown }"
  >
    <img src="img/subscribe/subscribe_deco1.jpg" alt="訂閱插圖" />
    <div class="subscribe-form">
      <h3 class="subscribe-title">SUBSCRIBE</h3>
      <p>訂閱我們，掌握新品資訊 !</p>
      <div class="input-area">
        <input type="text" placeholder="請輸入電子信箱" />
        <button type="button" class="subscribe-btn">啟用訂閱</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"

const isShown = ref(false)
const subscribeRef = ref(null)
const imageLoaded = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(
    async ([entry]) => {
      if (entry.isIntersecting) {
        imageLoaded.value = true;
        isShown.value = true;
      }
    },
    {
      threshold: 0.2,
    }
  )

  if (subscribeRef.value) {
    observer.observe(subscribeRef.value)
  }
})
</script>
