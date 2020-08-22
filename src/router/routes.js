// import Home from '../views/Home.vue'


const routes = [
    {
      path: '/',
      component: () => import(/* webpackChunkName: "partner_dashboard_layout_chunk" */ '../layouts/dashboard.vue'),
      children: [
        { name:'finance', path: '/finance', component: () => import('../pages/finance.vue'), meta: { requiresAuth: false } },
        { name:'marketing', path: '/marketing', component: () => import('../pages/marketing.vue'), meta: { requiresAuth: false } },
        { name:'personal', path: '/personal', component: () => import('../pages/personal.vue'), meta: { requiresAuth: false } },
      ]
    }
  ]

  
  // routes.push({
  //   path: '*',
  //   component: () => import('pages/Error404.vue')
  // })
  
  export default routes
  