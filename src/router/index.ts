import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Blog from '../views/Blog.vue';
import MentionsLegales from '../views/MentionsLegales.vue';
import PolitiqueConfidentialite from '../views/PolitiqueConfidentialite.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/blog', name: 'Blog', component: Blog },
  { path: '/mentions-legales', name: 'MentionsLegales', component: MentionsLegales },
  { path: '/politique-de-confidentialite', name: 'PolitiqueConfidentialite', component: PolitiqueConfidentialite },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
