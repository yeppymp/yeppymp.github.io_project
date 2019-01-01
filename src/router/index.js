import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  relative: true,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/components/Home'),
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('@/components/About'),
    },
    {
      path: '/experiences',
      name: 'Experiences',
      component: () => import('@/components/Experiences'),
    },
    {
      path: '/services',
      name: 'Services',
      component: () => import('@/components/Services'),
    },
    {
      path: '/skills',
      name: 'Skills',
      component: () => import('@/components/Skills'),
    },
    // {
    //   path: '/blog',
    //   name: 'Blog',
    //   component: () => import('@/components/Blog'),
    // },
  ],
});
