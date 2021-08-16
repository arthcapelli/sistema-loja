import VueRouter from 'vue-router';
import Home from './pages/Home.vue';
import Produto from './pages/Produto.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/produto', component: Produto },
];
const router = new VueRouter({
  routes,
  mode: 'history',
});
export default router;
