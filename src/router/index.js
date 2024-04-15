import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ListeDesUtilisateurs from '@/components/utilisateurs/ListeDesUtilisateurs.vue'
import AjoutUtilisateur from '@/components/utilisateurs/AjoutUtilisateur.vue'
import ProfileUtilisateurs from '@/components/utilisateurs/ProfileUtilisateurs.vue'
import Login from '@/components/authentification/Login.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ListeDesUtilisateurs
    },

    {
      path: '/profile/:id',
      name: 'profile',
      component: ProfileUtilisateurs
    },
    {
      path: '/AjoutUtilisateur',
      name: 'ajoutUtilisateur',
      component: AjoutUtilisateur
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
