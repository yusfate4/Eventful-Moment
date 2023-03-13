import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Register from '../components/Register.vue'
import Additems from '../components/Additems.vue'
import Edititems from '../components/Edititems.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/additems',
    name: 'Additems',
    component: Additems
  },
  {
    path: '/edititems',
    name: 'Edititems',
    component: Edititems
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
