<template>
    <h2 class="qa-title">常見問題</h2>
    <div>
        <accordionComp>
          <accordionItem title="麵包常溫可以保存幾天？" :defaultOpen="true">天然酵母或無防腐劑的麵包建議常溫保存 1～2天，避免陽光直射和潮濕。氣溫較高時，建議盡早食用或冷凍保存。</accordionItem>
          <accordionItem title="麵包要怎麼冷凍保存？">建議先將麵包切片（或分裝成食用份量），用保鮮袋密封裝好，再放進冷凍庫。可保存 2～4週，風味最佳期約在2週內。</accordionItem>
          <accordionItem title="冷凍麵包要怎麼解凍？">可放回室溫約 10～20分鐘，或使用烤箱/氣炸鍋加熱約 150°C烘烤3～5分鐘，外皮酥脆、內部鬆軟。</accordionItem>
          <accordionItem title="麵包上有白點是壞掉了嗎？">若是白色粉狀，可能是麵粉殘留；但若是 模糊狀、有異味或變色，可能是發霉，請勿食用。</accordionItem>
          <accordionItem title="保存時要放塑膠袋還是紙袋？">短期（當天吃）：紙袋通風，可保持外皮酥脆。長一點（1～2天）：可套上塑膠袋防乾硬。更久：建議冷凍保存。</accordionItem>
        </accordionComp>
    </div>
</template>
<script setup>
import accordionComp from './AccordionComp.vue'
import accordionItem from './AccordionItem.vue'
</script>