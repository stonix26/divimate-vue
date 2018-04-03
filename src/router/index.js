import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import NewAuthor from '@/components/NewAuthor'
import EditAuthor from '@/components/EditAuthor'
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
      path: '/new-author',
      name: 'new-author',
      component: NewAuthor
    },
    {
      path: '/edit-author/:author_id',
      name: 'edit-author',
      component: EditAuthor
    },
    {
      path: '/:author_id',
      name: 'view-author',
      component: ViewAuthor
    }
  ]
})
