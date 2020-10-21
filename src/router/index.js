import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import storage from '../services/storage';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      requiresAuth: true,
    },
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: () => {},
  },
  {
    path: '/classroom/:courseId',
    name: 'Classroomm',
    meta: {
      requiresAuth: true,
    },
    component: () => {},
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  console.log('beforeEach()...');
  console.log(from);
  console.log(to);
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    console.log(`isLogedIn = ${storage.isLoggedIn()}`);
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!storage.isLoggedIn()) {
      next({ name: 'Login' });
    } else {
      next(); // go to wherever I'm going
    }
  } else {
    next(); // does not require auth, make sure to always call next()!
  }
});

export default router;
