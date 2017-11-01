import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import OffersNew from '@/pages/account/offersNew'
import SellOffers from '@/pages/SellOffers'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/account/offers/new',
      name: 'offersNew',
      component: OffersNew
    },
    {
      path: '/sell/offers',
      name: 'sellOffers',
      component: SellOffers
    }
  ]
})
