import Vue from 'vue'
import Router from 'vue-router'
import Search from '@/components/Search'
import Rate from '@/components/Rate'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Search',
      component: Search
    },
    {
      path: '*',
      redirect: Search
    },
    {
      path: '/rate',
      name: 'Rate',
      component: Rate,
      props: true
    }
  ],
  mode: 'history'
})
