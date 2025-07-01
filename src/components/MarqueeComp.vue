<template>
    <div class="news-board" ref="boardArea">
      <span class="notification" ref="notificationArea">
        <slot/>
      </span>
    </div>
</template>

<script setup>
import { ref,onMounted } from 'vue'
const notificationArea = ref(null)
const boardArea = ref(null)

onMounted(() => {
  if (notificationArea.value && boardArea.value) {
    const distance = notificationArea.value.offsetWidth + boardArea.value.offsetWidth // 總移動距離
    const speed = 150 // 每秒跑 100px
    const duration = distance / speed // 秒數
    notificationArea.value.style.setProperty('--marquee-duration', `${duration}s`)
  }
})
</script>