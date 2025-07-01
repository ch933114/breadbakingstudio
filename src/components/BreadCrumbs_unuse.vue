<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <router-link to="/">首頁</router-link>
      </li>
      <li
        v-for="(route, index) in breadcrumbs"
        :key="index"
        class="breadcrumb-item"
        :class="{ active: index === breadcrumbs.length - 1 }"
      >
        <router-link v-if="index !== breadcrumbs.length - 1" :to="route.path">
          {{ route.meta.title }}
        </router-link>
        <span v-else>{{ route.meta.title }}</span>
      </li>
    </ol>
  </nav>
</template>

<script setup>
import { computed } from "vue"
import { useRoute } from "vue-router"

const route = useRoute()

// 取得當前頁面的麵包屑路徑
const breadcrumbs = computed(() => {
  return route.matched.map((r) => ({
    path: r.path,
    meta: r.meta,
  }))
})
</script>
