import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomePage.vue';
import Menu from '../views/MenuPage.vue';
import Cart from '../views/CartPage.vue';
import NewsPage from '../views/NewsPage.vue';
import AboutBread from '../views/AboutStore.vue'
import CheckOrder from '../views/CheckOrder.vue'

const routes = [
  { path: '/', component: Home, meta: { title: '' } },
  { path: '/aboutbread', component: AboutBread, meta: { title: '品牌故事' } },
  { path: '/news', component: NewsPage, meta: { title: '最新消息' } },
  { path: '/menu', component: Menu, meta: { title: '菜單' } },
  { path: '/cart', component: Cart, meta: { title: '購物車' } },
  { path: '/checkorder', component: CheckOrder, meta: { title: '訂單結帳' } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
