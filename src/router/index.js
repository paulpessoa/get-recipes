import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RecipeView from '../views/RecipeView.vue' 
import ListRecipesComponent from '../components/ListRecipesComponent.vue'


const routes = [
  {
    path: '/listvieiwiw',
    name: 'recipe-list',
    component: ListRecipesComponent,
  },
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/recipe/:id',
    name: 'recipe',
    component: RecipeView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
