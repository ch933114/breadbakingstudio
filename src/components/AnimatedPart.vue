<template>
  <section class="brand-story">
    <div>
      <!-- 主要區塊 -->
      <div class="content">
        <!-- 左邊圖片 -->
        <div class="image-block left" data-aos="fade-right">
          <img src="img/animated/left-bread.png" alt="左側圖片" />
        </div>

        <!-- 文字區塊 -->
        <div class="text-block" data-aos="zoom-in">
          <h2>BBS 品牌故事</h2>
          <p>
            在 Bread Baking Studio，每一顆麵包都是我們對烘焙的熱愛與堅持。從揉捏麵糰的第一刻，到麵包在烤箱裡散發出溫暖香氣，每個步驟都承載著我們對手作的尊重與用心。我們相信，好的麵包不只是填飽肚子，更是一種生活的美好體驗。因此，我們選用最純粹的食材，堅持天然發酵，讓每一口都充滿濃厚的麥香與層次。Bread Baking Studio，不只是麵包店，更是一個分享溫度與故事的地方。無論是忙碌的一天中的小確幸，還是與家人朋友共度的溫馨時光，我們希望這裡的每一塊麵包，都能帶給你滿滿的幸福感。在這裡，麵包不只是食物，而是一種溫暖的傳遞。 🍞✨
          </p>
        </div>

        <!-- 右邊圖片 -->
        <div class="image-block right" data-aos="fade-left">
          <img src="img/animated/right-bread.png" alt="右側圖片" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

onMounted(() => {
  AOS.init({
    duration: 1000, // 動畫時間
    once: false, // ✅ 只執行一次，避免滾動時閃爍
    offset: 100, // ✅ 觸發動畫的距離，避免滾太快
    easing: "ease-out", // ✅ 讓動畫更平滑
  });
});
</script>
