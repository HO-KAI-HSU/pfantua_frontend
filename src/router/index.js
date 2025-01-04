import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: '首頁-台灣藝術大學藝術學院'}
  },
  {
    path: '/collageInfo',
    name: 'CollageInfo',
    meta: { title: '關於本院-台灣藝術大學藝術學院'},
    component: () => import('../views/CollageInfo.vue'),
  },
  {
    path: '/newsList',
    name: 'NewsList',
    meta: { title: '最新消息-台灣藝術大學藝術學院'},
    component: () => import('../views/NewsList.vue'),
  },
  {
    path: '/news/:id',
    name: 'News',
    meta: { title: '最新消息內容-台灣藝術大學藝術學院'},
    component: () => import('../views/News.vue'),
  },
  {
    path: '/activityList',
    name: 'ActivityList',
    meta: { title: '活動資訊-台灣藝術大學藝術學院'},
    component: () => import('../views/ActivityList.vue'),
  },
  {
    path: '/activity/:id',
    name: 'Activity',
    meta: { title: '活動資訊內容-台灣藝術大學藝術學院'},
    component: () => import('../views/Activity.vue'),
  },
  { 
    path: '/:pathMatch(.*)*', 
    name: 'NotFound',
    meta: { title: '沒有任何資源錯誤畫面-台灣藝術大學藝術學院'},
    component: () => import('../views/NotFound.vue'), 
  },
];

const router = new VueRouter({
  routes
})


export default router
