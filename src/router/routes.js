
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'Index',
        component: () => import('pages/Index.vue')
      },

      {
        path: 'login',
        name: 'Login',
        component: () => import('pages/Login.vue')
      },

      {
        path: 'cadastro',
        name: 'Cadastro',
        component: () => import('pages/Cadastro.vue')
      },

      {
        path: 'comidas',
        name: 'Comidas',
        component: () => import('pages/Comidas.vue')
      },

      {
        path: 'doacao',
        name: 'Doacao',
        component: () => import('pages/Doacao.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
