import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    // 一级页面路由配置
    {
      path: '/',
      name: 'find',
      component: () => import('@/pages/Find.vue')
    },
    {
      path: '/studyPlan',
      name: 'studyPlan',
      component: () => import('@/pages/StudyPlan.vue')
    },
    {
      path: '/knowledgeCityState',
      name: 'knowledgeCityState',
      component: () => import('@/pages/KnowledgeCityState.vue')
    },
    {
      path: '/purchased',
      name: 'purchased',
      component: () => import('@/pages/Purchased.vue')
    },
    {
      path: '/mine',
      name: 'mine',
      component: () => import('@/pages/Mine.vue')
    }
  ]
})
