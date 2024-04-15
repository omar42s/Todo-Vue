const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Todo.vue') },
      { path: '/help', component: () => import('pages/Help.vue') }
    ]
  },


  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
