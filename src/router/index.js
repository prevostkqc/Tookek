import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Portfolio from '../components/Portfolio.vue';
import Quisommesnous from '../components/Quisommesnous.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'TooKek',
      metaTags: [
        {
          name: 'description',
          content: 'Bienvenue dans notre univers.'
        },
        {
          property: 'og:description',
          content: 'Boostez votre présence en ligne !'
        }
      ]
    }
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio,
    meta: {
      title: 'TooKek - Portfolio',
      metaTags: [
        {
          name: 'description',
          content: 'Découvrez nos projets réalisés.'
        },
        {
          property: 'og:description',
          content: 'Découvrez notre portfolio et les projets que nous avons réalisés pour nos clients.'
        }
      ]
    }
  },
  {
    path: '/quisommesnous',
    name: 'Quisommesnous',
    component: Quisommesnous,
    meta: {
      title: 'TooKek - qui sommes-nous',
      metaTags: [
        {
          name: 'description',
          content: 'Découvrez nos projets réalisés.'
        },
        {
          property: 'og:description',
          content: 'Découvrez notre portfolio et les projets que nous avons réalisés pour nos clients.'
        }
      ]
    }
  }
];


// Création du routeur
const router = createRouter({
  history: createWebHistory(),
  routes
});

// Mise à jour du titre de la page et des meta tags après chaque navigation
router.afterEach((to) => {
  // Mettre à jour le titre de la page
  document.title = to.meta.title || 'Default Title';

  // Supprimer les anciennes balises meta
  const oldMetaTags = document.querySelectorAll('meta[name="description"], meta[property^="og:"]');
  oldMetaTags.forEach(tag => tag.remove());

  // Ajouter les nouvelles balises meta
  if (to.meta.metaTags) {
    to.meta.metaTags.forEach(tagDef => {
      const tag = document.createElement('meta');
      Object.keys(tagDef).forEach(key => {
        tag.setAttribute(key, tagDef[key]);
      });
      document.head.appendChild(tag);
    });
  }
});

export default router;