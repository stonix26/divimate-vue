import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Login from '@/components/Login'
import Register from '@/components/Register'
import NewAuthor from '@/components/NewAuthor'
import UpdateAuthor from '@/components/UpdateAuthor'
import ViewAuthor from '@/components/ViewAuthor'
import firebase from 'firebase'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/new-author',
      name: 'new-author',
      component: NewAuthor,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/update-author/:slug',
      name: 'update-author',
      component: UpdateAuthor,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/:slug',
      name: 'view-author',
      component: ViewAuthor,
      meta: {
        requiresAuth: true
      }
    }
  ]
});

// Nav Guard
router.beforeEach((to, from, next) => {
  // Check for requiresAuth guard
  if(to.matched.some(record => record.meta.requiresAuth)) {
    // Check if no logged user
    if(!firebase.auth().currentUser) {
      // Go to login
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      // Proceed to route
      next();
    }
  } else if(to.matched.some(record => record.meta.requiresGuest)) {
    // Chack if no logged user
    if(firebase.auth().currentUser) {
      // Go to login
      next({
        path: '/',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      // Proceed to route
      next();
    }
  } else {
    // Proceed to route
    next();
  }
});

export default router;
