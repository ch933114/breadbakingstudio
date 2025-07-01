<template>
  <div class="home-pg">
    <!-- 大圖輪播 -->
    <div class="pg-full">
      <CarouselPage />
    </div>
    <!-- 品牌故事 -->
    <div class="pg-full">
      <AnimatedPart />
    </div>
    <!-- 最新消息 -->
    <div class="pg-content">
      <NewsSummary/>
    </div>
    <!-- 精選菜單 -->
    <div class="pg-content">
      <MenuSummary limit="4" />
    </div>
    <!-- 常見QA -->
    <div class="pg-content">
      <AccordionArea/>
    </div>
    <!-- 訂閱我們 -->
    <div class="pg-content">
      <SubscribeMe />
    </div>
    <div class="ai-chat">
      <p>BBS LINE AI 客服 !</p>
      <a href="https://line.me/R/ti/p/@411jrvtx"><img src="img/LINE_logo.webp" alt="BBS的LINE官方"></a>
    </div>
  </div>
</template>

<script setup>
import CarouselPage from "../components/CarouselPage.vue"
import NewsSummary from "@/components/NewsSummary.vue"
import MenuSummary from "../components/MenuSummary.vue"
import AnimatedPart from "../components/AnimatedPart.vue"
import SubscribeMe from "../components/SubscribeMe.vue"
import AccordionArea from '../components/AccordionArea.vue'

</script>
 