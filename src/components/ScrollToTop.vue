<template>
    <div v-if="showToTop" class="to-top" v-on:click="goTop">
      <font-awesome-icon :icon="['fas', 'chevron-up']" class="arrow" />
      <font-awesome-icon :icon="['fas', 'chevron-up']" class="arrow" />
      <font-awesome-icon :icon="['fas', 'chevron-up']" class="arrow" />
    </div>
</template>

<script setup>
import { ref,onMounted, onBeforeUnmount } from "vue"
onMounted(() => {
  // 監聽滾動事件
  window.addEventListener("scroll", handleScroll)
})

// 返回頁面最上方
const showToTop = ref(false)
const goTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}

// 決定滾動多深會顯示返回最上方按鈕
const handleScroll = () => {
  showToTop.value = window.scrollY > 1000
}

onBeforeUnmount(() => {
  // 移除監聽滾動事件
  window.removeEventListener("scroll", handleScroll)
})
</script>