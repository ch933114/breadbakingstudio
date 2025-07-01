<template>
  <div class="contact-area">
    <div class="contact-info">
      <img src="img/animated/bread-4.png" class="deco-image1" alt="裝飾麵包1" />
      <img src="img/animated/bread-1.png" class="deco-image2" alt="裝飾麵包2" />
      <div class="contact-des">
        <h3>BBS 苗栗新東店</h3>
        <p>地址 : 苗栗縣苗栗市新東街197號</p>
        <p>電話 : 037-381666</p>
        <p>LINE : BBS1425</p>
        <p>IG : BBS1425</p>
      </div>
    </div>
    <div class="store-location">
      <div id="map" class="store-map"></div>
      <div class="map-mask" id="mapMask">
        <p class="mask-text">請按住 Ctrl 拖曳或縮放地圖</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, nextTick } from "vue";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

onMounted(() => {
  nextTick(() => {
    const map = L.map("map").setView([24.550914, 120.8220857], 16)

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(map)

    const customIcon = L.icon({
      iconUrl: 'img/icon/bakery.svg', // 圖片路徑
      iconSize: [40, 40], // 圖片大小
      iconAnchor: [20, 40], // 對齊點，通常設在底部中心
      popupAnchor: [0, -40] // 彈窗偏移
    })

    L.marker([24.550914, 120.8220857], { icon: customIcon })
      .addTo(map)
      .bindPopup("BBS 苗栗新東店<br>新東街197號")
      .openPopup()

    const mask = document.getElementById("mapMask")

    // 控制 Ctrl 按下時隱藏遮罩，啟用互動
    window.addEventListener("keydown", (e) => {
      if (e.ctrlKey) {
        mask.classList.add("hidden")
        map.dragging.enable()
        map.scrollWheelZoom.enable()
      }
    })

    window.addEventListener("keyup", (e) => {
      if (!e.ctrlKey) {
        mask.classList.remove("hidden")
        map.dragging.disable()
        map.scrollWheelZoom.disable()
      }
    })

    // 確保地圖容器尺寸正確
    setTimeout(() => {
      map.invalidateSize()
    }, 500)
  })
})
</script>
