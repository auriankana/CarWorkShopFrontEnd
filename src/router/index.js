import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ListeDesEtudiant from '@/components/etudiants/ListeDesEtudiant.vue'
import ProfileEtudiant from '@/components/etudiants/ProfileEtudiant.vue'
import AjoutEtudiant from '@/components/etudiants/AjoutUtilisateur.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ListeDesEtudiant
    },
    {
      path: '/profile/:id',
      name: 'profile',
      component: ProfileEtudiant
    },
    {
      path: '/ajout-etudiant',
      name: 'ajout-etudiant',
      component: AjoutEtudiant
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
