import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Classroom from '../views/Classroom.vue'
import Login from '../views/Login.vue'
import Perfil from '../views/Perfil.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },    
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/perfil',
    name: 'Perfil',
    component: Perfil
  },     
  {
    path: '/classroom',
    name: 'Classroom',
    component: Classroom
  },  
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('TOKEN');
  if(to.name !== 'Login') {
    console.log(token);
    if (token || to.name === 'Login') {
      next()
    } else {
      next({name: 'Login'}) 
    } 
  } else {
    next()
  }
}
);

export default router
