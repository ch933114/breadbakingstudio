<template>
  <div class="menu-carousel">
    <h2 class="menu-title">精選菜單</h2>
    <div class="menu-board">
      <h3>UPCOMING BREADS</h3>
      <img src="img/animated/bread-2.png" alt="裝飾麵包1" class="deco-bread1" />
      <img src="img/animated/bread-3.png" alt="裝飾麵包2" class="deco-bread2" />
      <div class="new-breads">
        <div class="new-bread">
          <div class="bread-des">
            <h5>100%全麥酸種麵包</h5>
            <p>
              使用天然酵母、麵粉、水與鹽，長時間低溫發酵，讓每一口酸種都帶有自然酸香、濕潤有嚼勁的口感
            </p>
          </div>
          <img src="img/menu/new-bread-1.png" alt="" class="new-product" />
        </div>
        <div class="new-bread">
          <div class="bread-des">
            <h5>紅酒無花果硬歐麵包</h5>
            <p>
              選用天然酸種低溫發酵，揉入浸漬紅酒的土耳其無花果與核桃，外皮酥脆、內裡濕潤富彈性，果香與酒香交織出層次豐富的風味，適合搭配起司或單吃細品。
            </p>
          </div>
          <img src="img/menu/new-bread-2.png" alt="" class="new-product" />
        </div>
        <div class="new-bread">
          <div class="bread-des">
            <h5>德國鹼水麵包</h5>
            <p>
              傳承德國經典工法，麵團經過鹼水浸泡後烘烤出獨特的深琥珀色外皮，帶有微微鹹香與酥脆口感，內裡柔軟有彈性。無論單吃、夾餡或搭配湯品都是絕佳選擇。
            </p>
          </div>
          <img src="img/menu/new-bread-3.png" alt="" class="new-product" />
        </div>
      </div>
    </div>
    <div class="carousel-container">
      <button class="carousel-btn left" @click="prevSlide">‹</button>
      <div
        class="carousel-track"
        v-for="item in visibleItems"
        v-bind:key="item.id"
      >
        <div class="card">
          <img v-bind:src="item.image" class="card-img" alt="菜單圖片" />
          <div class="card-body">
            <h5 class="card-title">
              <router-link class="title-link" v-bind:to="'/menu/' + item.id">
                {{ item.name }}
              </router-link>
            </h5>
            <p class="card-text">價格: ${{ item.price }}</p>
          </div>
        </div>
      </div>
      <button class="carousel-btn right" v-on:click="nextSlide">›</button>
    </div>
    <div class="more-area">
      <router-link v-bind:to="'/menu'" class="more-btn"
        >查看更多 <img src="img/icon/right-side.png" alt="前往更多"
      /></router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue"
import { useStore } from 'vuex'

const store = useStore()
const menuData = computed (()=>store.state.menuData)

// 狀態變數
const currentIndex = ref(0)
const itemsPerPage = ref(1)

// 計算目前顯示的菜單項目
const visibleItems = computed(() => {
  return Array.isArray(menuData.value)
    ? menuData.value.slice(
        currentIndex.value,
        currentIndex.value + itemsPerPage.value
      )
    : []
})

// 下一張
const nextSlide = () => {
  if (currentIndex.value + itemsPerPage.value < menuData.value.length) {
    currentIndex.value += 1
  } else {
    currentIndex.value = 0
  }
};

// 上一張
const prevSlide = () => {
  if (currentIndex.value - itemsPerPage.value >= 0) {
    currentIndex.value -= 1
  } else {
    currentIndex.value = menuData.value.length - itemsPerPage.value
  }
}

// 根據視窗大小調整每頁項目數量
const updateItemsPerPage = () => {
  const width = window.innerWidth;
  if (width > 1024) {
    itemsPerPage.value = 4
  } else if (width > 768) {
    itemsPerPage.value = 2
  } else {
    itemsPerPage.value = 1
  }
}

let observer

let interval = null

onMounted(() => {
  const carouselSection=document.querySelectorAll('.menu-carousel')
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in")
        }
      })
    },
    {
      threshold: 0.1,
    }
  )

  carouselSection.forEach((block) => observer.observe(block))
  updateItemsPerPage()
  window.addEventListener("resize", updateItemsPerPage)
  interval = setInterval(nextSlide, 3000)
})

onUnmounted(() => {
  window.removeEventListener("resize", updateItemsPerPage)
  clearInterval(interval)
})
</script>
