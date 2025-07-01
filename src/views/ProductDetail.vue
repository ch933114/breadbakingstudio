<template>
  <div class="product-detail">
    <div v-if="product" class="product-info">
      <div class="info-img">
        <img :src="product.image" class="product-img" />
      </div>
      <div class="info-des">
        <h1>{{ product.name }}</h1>
        <p>{{ product.description }}</p>
        <p>
          <span>${{ product.price }}</span> NTD / 個
        </p>
        <div class="btn-group">
          <button class="btn-primary" @click="addToCart(product)">
            加入購物車
          </button>
          <button @click="$router.push('/menu')" class="btn-secondary">
            返回菜單
          </button>
        </div>
      </div>
    </div>

    <!-- 其他產品區塊 -->
    <div v-if="relatedProducts.length > 0" class="related-products">
      <h2>其他推薦商品</h2>
      <div class="info-area">
        <div class="product-gallery">
          <div
            v-for="(relatedProduct, index) in relatedProducts"
            :key="index"
            class="product-thumbnail"
          >
            <router-link
              :to="'/menu/' + relatedProduct.id"
              class="related-link"
            >
              <img :src="relatedProduct.image" :alt="relatedProduct.name" />
              <p>{{ relatedProduct.name }}</p>
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <div v-else>
      <p>找不到該商品</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue"
import { useRoute } from "vue-router"
import { useStore } from "vuex"

const route = useRoute()
const store = useStore()
const menuData = computed(()=> store.state.menuData)
const product = computed(() =>
  menuData.value.find((item) => item.id == route.params.id)
);

// 判斷螢幕大小的變數
const isMobile = ref(false)

// 隨機選擇產品函數
const getRandomProducts = (arr, count) => {
  const shuffled = arr.slice()
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, count)
}

// 根據螢幕大小調整顯示的商品數量
const relatedProducts = computed(() => {
  if (product.value) {
    const filteredProducts = menuData.value.filter(
      (item) => item.id !== product.value.id
    )
    return getRandomProducts(filteredProducts, isMobile.value ? 2 : 4) // 小螢幕顯示 2 個商品，其他顯示 3 個
  }
  return []
})

// 判斷螢幕大小
onMounted(() => {
  isMobile.value = window.innerWidth <= 960 // 初次判斷是否是小螢幕
  window.addEventListener("resize", handleResize)
})

const handleResize = () => {
  isMobile.value = window.innerWidth <= 960 // 持續監聽判斷是否為小螢幕
}

// 加入購物車，使用 Vuex 的 mutation
const addToCart = (item) => store.commit("addToCart", item)

onUnmounted(() => {
  window.removeEventListener("resize", handleResize)
})
</script>
