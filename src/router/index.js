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
    path: '/collageDepartmentColleagueList',
    name: 'CollageDepartmentColleagueList',
    meta: { title: '師資陣容-台灣藝術大學藝術學院'},
    component: () => import('../views/CollageDepartmentColleagueList.vue'),
  },
  {
    path: '/collageDepartmentColleague/:id',
    name: 'CollageDepartmentColleague',
    meta: { title: '師資陣容-台灣藝術大學藝術學院'},
    component: () => import('../views/CollageDepartmentColleague.vue'),
  },
  {
    path: '/collageDepartmentList',
    name: 'CollageDepartmentList',
    meta: { title: '系所單位-台灣藝術大學藝術學院'},
    component: () => import('../views/CollageDepartmentList.vue'),
  },
  {
    path: '/collageHead/:id',
    name: 'CollageHead',
    meta: { title: '現任院長-台灣藝術大學藝術學院'},
    component: () => import('../views/CollageHead.vue'),
  },
  {
    path: '/collageHistoryHead/:id',
    name: 'CollageHistoryHead',
    meta: { title: '歷任院長-台灣藝術大學藝術學院'},
    component: () => import('../views/CollageHistoryHead.vue'),
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
    meta: { title: '活動資訊-台灣藝術大學藝術學院'},
    component: () => import('../views/Activity.vue'),
  },
  {
    path: '/activityHistoryList',
    name: 'ActivityHistoryList',
    meta: { title: '活動集錦-台灣藝術大學藝術學院'},
    component: () => import('../views/ActivityHistoryList.vue'),
  },
  {
    path: '/activityHistory/:id',
    name: 'ActivityHistory',
    meta: { title: '活動集錦-台灣藝術大學藝術學院'},
    component: () => import('../views/ActivityHistory.vue'),
  },
  {
    path: '/regulation',
    name: 'Regulation',
    meta: { title: '法規章程-台灣藝術大學藝術學院'},
    component: () => import('../views/Regulation.vue'),
  },
  {
    path: '/relatedResource',
    name: 'RelatedResource',
    meta: { title: '相關資源'},
    component: () => import('../views/RelatedResource.vue'),
  },
  {
    path: '/collageHeadElection',
    name: 'CollageHeadElection',
    meta: { title: '院長遴選'},
    component: () => import('../views/CollageHeadElection.vue'),
  },
  {
    path: '/collageCourse',
    name: 'CollageCourse',
    meta: { title: '學院課程-台灣藝術大學藝術學院'},
    component: () => import('../views/CollageCourse.vue'),
  },
  // { 
  //   path: '/:pathMatch(.*)*', 
  //   name: 'NotFound',
  //   meta: { title: '沒有任何資源錯誤畫面-台灣藝術大學藝術學院'},
  //   component: () => import('../views/NotFound.vue'), 
  // },
];

const router = new VueRouter({
  // mode: 'history',  // 設置為歷史模式
  routes
})


export default router
