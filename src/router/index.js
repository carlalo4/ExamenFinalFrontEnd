import { createRouter, createWebHistory } from 'vue-router'
import componenteHome from '../components/componenteHome.vue'
import saveComponent from '../components/saveComponent.vue'
import componenteLista from '../components/componenteLista.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: componenteHome
    },
    {
      path: '/formulario',
      name: 'formulario',
      component: saveComponent
    }, 
    {
      path: '/lista',
      name: 'lista',
      component: componenteLista
    }
  ]
})

export default router
