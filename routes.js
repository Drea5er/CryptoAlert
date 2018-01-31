export default [
  {
    path: '/smpComp/',
    component: require('./assets/vue/pages/smpComp.vue')
  },
  {
    path: '/form/',
    component: require('./assets/vue/pages/form.vue')
  },
   {
    path: '/coinAnalysis/',
    component: require('./assets/vue/pages/coinAnalysisPage.vue')
  },
  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: require('./assets/vue/pages/dynamic-route.vue')
  }
]
