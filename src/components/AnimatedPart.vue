<template>
  <section class="brand-story">
    <!-- 主要區塊 -->
    <div class="content" ref="containerRef">
      <!-- 左邊圖片 -->
      <div class="image-block left" :class="{ active: show }">
        <img src="img/animated/left-bread.png" alt="左側圖片" ref="imageRefs" />
      </div>
      <!-- 文字區塊 -->
      <div class="text-block" data-aos="zoom-in">
        <h2>BBS 品牌故事</h2>
        <p>
          在 Bread Baking
          Studio，每一顆麵包都是我們對烘焙的熱愛與堅持。從揉捏麵糰的第一刻，到麵包在烤箱裡散發出溫暖香氣，每個步驟都承載著我們對手作的尊重與用心。我們相信，好的麵包不只是填飽肚子，更是一種生活的美好體驗。因此，我們選用最純粹的食材，堅持天然發酵，讓每一口都充滿濃厚的麥香與層次。
        </p>
        <img
          src="img/animated/bread-1.png"
          alt="裝飾麵包1"
          class="deco-bread1"
        />
        <img
          src="img/animated/bread-4.png"
          alt="裝飾麵包2"
          class="deco-bread2"
        />
      </div>
      <!-- 右邊圖片 -->
      <div class="image-block right" :class="{ active: show }">
        <img
          src="img/animated/right-bread.png"
          alt="右側圖片"
          ref="imageRefs"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue"

const containerRef = ref(null)
const show = ref(false)
let observer

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        show.value = true
      } else {
        show.value = false
      }
    },
    {
      threshold: 0.1,
    }
  );
  if (containerRef.value) {
    observer.observe(containerRef.value)
  }
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})

</script>
