<template>
  <div class="accordion-item">
    <button class="accordion-header" @click="toggle">
      {{ title }}
    </button>
    <div class="accordion-body" v-show="isOpen">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"

const props = defineProps({
  title: String,
  defaultOpen: Boolean,
})

const isOpen = ref(props.defaultOpen || false)

const toggle = () => {
  isOpen.value = !isOpen.value
}
</script>
