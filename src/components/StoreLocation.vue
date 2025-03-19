<template>
  <section class="store-loc">
    <h3 class="loc-title">店鋪位置</h3>
    <div class="loc-info">
      <div class="map" ref="mapContainer"></div>
      <div class="loc-des">
        <h3>店鋪地址</h3>
        <p>台北市大安區忠孝東路四段 100 號</p>
        <h3>交通方式</h3>
        <p>捷運板南線「忠孝敦化站」步行 5 分鐘</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import L from "leaflet";

const mapContainer = ref(null);

onMounted(() => {
  const map = L.map(mapContainer.value).setView([25.0418, 121.5532], 20); // 設定台北某個位置
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);
  
  const circleIcon = L.divIcon({
    className: 'circle-icon',
    html: '<div style="background-color: #69806C; width: 25px; height: 25px; border-radius: 50%;"></div>',
    iconSize: [30, 30],
  });

  L.marker([25.0418, 121.5532],{ icon: circleIcon }).addTo(map).bindPopup("Bread Baking Studio").openPopup();
});
</script>