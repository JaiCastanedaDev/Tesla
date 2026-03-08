import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import TestDriveView from '../views/TestDriveView.vue';
import InventoryView from '../views/InventoryView.vue';
import CustomOrderView from '../views/CustomOrderView.vue';
import LearnMoreView from '../views/LearnMoreView.vue';
import ShopView from '../views/ShopView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/prueba-conduccion',
    name: 'test-drive',
    component: TestDriveView,
  },
  {
    path: '/inventario/:model',
    name: 'inventory',
    component: InventoryView,
    props: true,
  },
  {
    path: '/pedido-personalizado/:model',
    name: 'custom-order',
    component: CustomOrderView,
    props: true,
  },
  {
    path: '/saber-mas/:topic',
    name: 'learn-more',
    component: LearnMoreView,
    props: true,
  },
  {
    path: '/tienda/:category',
    name: 'shop',
    component: ShopView,
    props: true,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
