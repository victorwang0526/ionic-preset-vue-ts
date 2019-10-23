// @ts-ignore
import Vue from 'vue'
import { IonicVueRouter } from '@ionic/vue';

Vue.use(IonicVueRouter)

const routes = [
  { path: "/", redirect: "/home" },
  {
    path: '/home',
    redirect: "/tab1",
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    children: [
      {path: '/tab1', name: 'tab1'},
      {path: '/tab2', name: 'tab2'}
    ]
  },
  {
    path: "/tab1-details",
    name: "tab1-details",
    component: () => import(/* webpackChunkName: "tab1Details" */ '../views/Tab1Details.vue')
  },
]

// @ts-ignore
const router = new IonicVueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
