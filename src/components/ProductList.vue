<template>
  <div class="popup popup-products ng-scope modal-in" ng-controller="sliderListController" style="display: block;">
    <div class="content-block sliderWrap">
      <div class="markets">
        <ul>
          <li v-for="k in mkts" @click="marketClick(k)" :class="['ng-binding ng-scope',{'cur':curMarket==k}]">{{k}} Markets</li>
        </ul>
        <span class="close close-popup closeIcon">
          <i class="font font-xiajiantou"></i>
        </span>
      </div>
      <div class="curProduct ng-binding">
          Current：EOS / ETH
      </div>
      <div class="productList">
        <template v-for="product in filterProductsList">
          <router-link :to="{ name: 'exchange', params: {symbol: product.baseAsset+'_'+product.quoteAsset}}" class="close close-popup ng-scope"  @click="changeSymbol">
            <span class="symbol ng-binding">AST / ETH</span>
            <span :class="['ng-binding',{'magenta':product.close<product.open},{'green':product.close>product.open}]">
              0.0006608 
              <small class="ng-binding">-2.68%</small>
              <span v-if="product.close<product.open" class="ng-scope">
                <i class="font font-xiadie"></i>
              </span>
            </span>
          </router-link>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import {IndexData} from '../libs/DataSource.js'

export default {
  name: 'ProductList',
  props: {
  },
  data () {
    return {
      curMarket: '',
      products: IndexData.data,
      mkts: ['BTC', 'ETH', 'USDT']
    }
  },
  computed: {
    filterProductsList: function () {
      var key = this.curMarket
      var products = this.products
      return products.filter(function (item) {
        return item.quoteAsset === key
      })
    }
  },
  methods: {
    changeSymbol () {
    },
    marketClick (val) {
      this.curMarket = val
    }
  }
}
</script>

<style scoped>

    .sliderWrap ul{padding:0;margin:0;list-style:none;border-bottom:1px solid #23292f;box-shadow:0px 1px #23292f;}
    .sliderWrap ul:after{content:"."; display:block; height:0; visibility:hidden; clear:both;}
    .sliderWrap ul li{float:left;padding: 0.8rem;}

    .sliderWrap ul li.cur{border-bottom: 1px solid #e8b342;color:#e8b342}
    .sliderWrap{position: absolute;top:0;left: 0;bottom: 0;right: 0;z-index: 1000000;background-color: #14171a;font-size: 0.7rem;color:#ffffff}
    #slider{overflow: hidden}
    .sliderWrap .markets{position: relative;}
    .sliderWrap .curProduct{padding: 0.5rem;background-color: #1a1e22}
    .sliderWrap .productList>a{padding: 0.7rem;border-bottom: 1px solid #23292f;display: block;color:#ffffff}
    .sliderWrap .closeIcon{position: absolute;top:0.65rem;right:0.8rem;}
    .sliderWrap .symbol{width: 4.3rem;display: inline-block}
    .sliderWrap .closeIcon i{font-size: 1rem}

    .popup-products{z-index: 1000000;}
    .popup-products .content-block{margin: 0;padding: 0}
</style>
