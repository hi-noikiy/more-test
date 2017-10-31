<template>
 <!-- <a ui-sref="trade.index({symbol:product.baseAsset+'_'+product.quoteAsset})" href="#/trade/index?symbol=NEO_BTC"> -->
 <router-link :to="{ name: 'exchange', params: {symbol: product.baseAsset+'_'+product.quoteAsset}}">
    <div class="f-cb">
      <div class="f-fl">
        <span class="symbol ng-binding">{{product.baseAsset}} / {{product.quoteAsset}}</span>
      </div>
      <div class="f-fr">
        <span :class="['change ng-binding',{'magenta':product.close<product.open},{'green':product.close>product.open}]">
          +0.000104
        </span>
        <span :class="['change ng-binding',{'magenta':product.close<product.open},{'green':product.close>product.open}]">
          +2.17%
        </span>
      </div>
    </div>
    <div class="f-cb">
      <div class="f-fl">
        <span :class="['lastPrice ng-binding',{'magenta':product.close<product.preClose},{'green':product.close>product.preClose}]">
          0.004900
          <i :class="['font',{'font-shangzhang':product.close>product.preClose},{'font-xiadie':product.close<product.preClose}]"></i>
        </span>
        <!-- ngIf: cur_lang!='cn' && curMarket!='USDT' -->
        <span class="transMoney ng-binding ng-scope" v-if="cur_lang!='cn' && curMarket!='USDT'">$28.28</span>
        <!-- end ngIf: cur_lang!='cn' && curMarket!='USDT' --><!-- ngIf: cur_lang=='cn' && curMarket!='USDT' --><!-- ngIf: cur_lang!='cn' && curMarket=='USDT' --><!-- ngIf: cur_lang=='cn' && curMarket=='USDT' -->
      </div>
      <div class="f-fr ng-binding">
        <label class="ng-binding">24h Volume</label> 1,933.90 BTC
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'ProductItem',
  props: {
    product: {
      type: Object,
      default: {}
    },
    curMarket: {
      type: String,
      default: ''
    },
    cur_lang: {
      type: String,
      default: 'en'
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
a{display:block;padding:0.8rem 0.5rem;line-height:100%;font-size:0.6rem;text-align:left;}
a .f-cb:first-of-type{margin-bottom:0.3rem;}
a .symbol, a .lastPrice{display:inline-block;color:#fff;vertical-align:middle;font-size:0.7rem;}
a .change{vertical-align:middle;margin-left:5px;}
a .symbol{margin-right:0.4rem;}
a .font{display:inline-block;width:0.55rem;vertical-align:top;margin-right:0;font-size:0.6rem;}
a .transMoney{color:#777;font-size:0.6rem;    line-height: 100%;display: inline-block;vertical-align: middle;}
</style>
