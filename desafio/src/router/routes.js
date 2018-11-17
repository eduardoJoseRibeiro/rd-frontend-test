
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue'), name: 'todos' },
      { path: '/atendidos', component: () => import('pages/Index.vue'), name: 'atendidos' },
      { path: '/lixeira', component: () => import('pages/Index.vue'), name: 'lixeira' }
    ]
  },
  {
    path: '/user',
    component: () => import('layouts/User.vue'),
    children: [
      { path: '/user/:id', component: () => import('pages/User.vue'), name: 'user' }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
