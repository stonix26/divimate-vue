import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Login from '@/components/Login'
import NewAuthor from '@/components/NewAuthor'
import UpdateAuthor from '@/components/UpdateAuthor'
import ViewAuthor from '@/components/ViewAuthor'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/new-author',
      name: 'new-author',
      component: NewAuthor
    },
    {
      path: '/update-author/:slug',
      name: 'update-author',
      component: UpdateAuthor
    },
    {
      path: '/:slug',
      name: 'view-author',
      component: ViewAuthor
    }
  ]
})
