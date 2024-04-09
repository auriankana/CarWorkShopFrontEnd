import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ListeDesEtudiant from '@/components/etudiants/ListeDesEtudiant.vue'
import ProfileEtudiant from '@/components/etudiants/ProfileEtudiant.vue'
import AjoutEtudiant from '@/components/etudiants/AjoutUtilisateur.vue'
import ListeDesDepartement from '@/components/departements/ListesDeDepartements.vue'
import AjoutDepartement from '@/components/departements/AjoutDepartement.vue'
import MiseAJourDepartement from '@/components/departements/MiseAjourDepartement.vue'
import ListeDesEmplacement from '@/components/emplacements/ListeDesEmplacement.vue'
import AjoutEmplacement from '@/components/emplacements/AjoutEmplacement.vue'
import MiseAJourEmplacement from '@/components/emplacements/MiseAjourEmplacement.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
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

    //departement
    {
      path: '/departements',
      name: 'liste-departements',
      component: ListeDesDepartement
    },
    {
      path: '/departements/ajout',
      name: 'ajout-departement',
      component: AjoutDepartement
    },
    {
      path: '/departements/mise-a-jour/:id',
      name: 'mise-a-jour-departement',
      component: MiseAJourDepartement
    },
    
    //emplacement
    {
      path: '/emplacements',
      name: 'liste-emplacements',
      component: ListeDesEmplacement
    },
    {
      path: '/emplacements/ajout',
      name: 'ajout-emplacement',
      component: AjoutEmplacement
    },
    {
      path: '/emplacements/mise-a-jour/:id',
      name: 'mise-a-jour-emplacement',
      component: MiseAJourEmplacement
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

// Liste des routes non protegees
import useAuthStore from '@/stores/auth/authStore'
const routeOuvertes = ['login']

router.beforeEach((to, from, next) => {
  const { currentToken: token } = useAuthStore()
  if (routeOuvertes.includes(to.name.toLowerCase()) && token) next({ name: 'home' })
  if (!routeOuvertes.includes(to.name.toLowerCase()) && !token) next({ name: 'login' })
  else next()
})

export default router
