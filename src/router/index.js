import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Register from '../components/Register.vue'
import Additems from '../components/Additems.vue'
import Edititems from '../components/Edititems.vue'
import Eventful from '../components/Eventful.vue'
import Singleitem from '../components/Singleitem.vue'





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
  {
    path: '/eventful',
    name: 'Eventful',
    component: Eventful
  },
  {
    path: '/singleitem',
    name: 'Singleitem',
    component: Singleitem
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
