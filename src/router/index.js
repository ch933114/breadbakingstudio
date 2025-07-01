import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import MenuPage from '../views/MenuPage.vue';
import CartPage from '../views/CartPage.vue';
import NewsPage from '../views/NewsPage.vue';
import AboutBread from '../views/AboutStore.vue';
import CheckOrder from '../views/CheckOrder.vue';
import ProductDetail from '../views/ProductDetail.vue'; 
import NewsDetail from '../views/NewsDetail.vue';

const routes = [
  { path: '/', component: HomePage, meta: { title: '首頁' } },
  { path: '/aboutbread', component: AboutBread, meta: { title: '品牌故事' } },
  { path: '/news', component: NewsPage, meta: { title: '最新消息' } },
  { path: '/news/:id', component: NewsDetail, props: true },
  { path: '/menu', component: MenuPage, meta: { title: '菜單' } },
  { path: '/cart', component: CartPage, meta: { title: '購物車' } },
  { path: '/checkorder', component: CheckOrder, meta: { title: '訂單結帳' } },
  { path: '/menu/:id', component: ProductDetail, props: true }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // 如果有儲存的位置，回到該位置
    if (savedPosition) {
      return savedPosition
    }
    // 預設回到頁面頂端
    return { top: 0 }
  },
});

export default router;
