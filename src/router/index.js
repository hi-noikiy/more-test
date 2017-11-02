import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import OffersNew from '@/pages/account/offersNew'
import SellOffers from '@/pages/SellOffers'

import Sell from '@/components/offers/Sell'
import NewOffer from '@/components/offers/NewOffer'
import NewOrder from '@/components/offers/NewOrder'

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
      path: '/offers',
      component: SellOffers,
      // kaiman 下的子路由
      children: [
        {
          path: '',
          component: Sell,
          name: 'Sell'
        },
        {
          path: 'sell',
          component: Sell,
          name: 'offersSell'
        },
        {
          path: 'new',
          component: NewOffer,
          name: 'newOffer'
        },
        {
          path: 'new/order',
          component: NewOrder,
          name: 'newOrder'
        }
      ]
    }
  ]
})
