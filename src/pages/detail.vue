<template>
<div class="page-view content ng-scope" ui-view="">
  <div class="main-page ng-scope" id="tradeDiv">
    <div class="buttons-tab">
      <a onclick="changeSide(1)" href="/indexSpa.html#/trade/index?symbol=NEO_BTC" class="button ng-binding active" ng-class="{true:'active',false:''}[curPage=='index']">Charts</a>
      <a onclick="changeSide(2)" href="/indexSpa.html#/trade/trade?symbol=NEO_BTC" class="button ng-binding" ng-class="{true:'active',false:''}[curPage=='trade']">Trade</a>
      <a onclick="changeSide(3)" href="/indexSpa.html#/trade/openOrders?symbol=NEO_BTC" class="button ng-binding" ng-class="{true:'active',false:''}[curPage=='openOrders']">Open Orders</a>
    </div>
    <div class="viewWrap">
      <div ui-view="" class="ng-scope">
        <div class="content page-index ng-scope" style="padding-bottom:2.5rem;overflow-x: hidden;" data-ng-controller="indexController">

          <div class="f-center products">
            <div class="select">
              <label @click="setShowStatus()"><span class="ng-binding">NEO / BTC</span><i class="icon icon-caret" style="font-size: 0.6rem"></i></label>
            </div>
          </div>

          <div class="kline-params">
            <div :class="['lastPrice',{'green':currentProduct.close>trades[1].price},{'magenta':currentProduct.close<trades[1].price}]">
              <span class="ng-binding">0.004992</span>
              <!-- ngIf: cur_lang!='cn' && currentProduct.quoteAsset!='USDT' -->
              <span class="transMoney ng-binding ng-scope" v-if="cur_lang!='cn' && currentProduct.quoteAsset!='USDT'">$28.55</span>
              <!-- end ngIf: cur_lang!='cn' && currentProduct.quoteAsset!='USDT' -->
              <!-- ngIf: cur_lang=='cn' && currentProduct.quoteAsset!='USDT' -->
              <!-- ngIf: cur_lang!='cn' && currentProduct.quoteAsset=='USDT' -->
              <!-- ngIf: cur_lang=='cn' && currentProduct.quoteAsset=='USDT' -->
            </div>
            <div class="priceChange">
              <span :class="['ng-binding',{'green':currentProduct.close>currentProduct.open},{'magenta':currentProduct.close<currentProduct.open}]">0.00020  4.20%</span>
            </div>
            <table>
              <tbody><tr>
                <th class="f-center ng-binding">24h High</th>

                <th class="f-center ng-binding">24h Low</th>
                <th class="f-center ng-binding">24h Volume</th>
              </tr>
              <tr>
                <td class="f-center ng-binding">0.004996</td>
                <td class="f-center ng-binding">0.004673</td>

                <td class="f-center ng-binding">1,900.50 BTC</td>
              </tr>
            </tbody></table>
          </div>
        <div class="kline-box">
          <div class="kline-tab">
            <span @click="klineSwitch(true)" :class="['ng-binding',{'cur':isKline}]">
              <i class="font font-kline"></i>Candle
            </span>
            <span @click="klineSwitch(false)" :class="['ng-binding',{'cur':!isKline}]" >
              <i class="font font-depth"></i>Depth
            </span>
          </div>
        </div>
        <candle v-show="isKline"></candle>
      </div>
    </div>
    </div>
  </div>
  <popup v-model="popShow" height="100%">
    <div class="pop-wrap">
      <product-list></product-list>
    </div>
  </popup>
</div>
</template>

<script>
import candle from '../components/Candle'
import ProductList from '../components/ProductList'
import popup from '../components/popup'

export default {
  name: 'exchange',
  data () {
    return {
      popShow: false,
      cur_lang: 'en',
      isKline: true,
      trades: [{'price': 240}, {'price': 540}],
      currentProduct: {'symbol': 'NEOBTC', 'tradedMoney': 1896.06920227, 'baseAssetUnit': '', 'active': true, ' minTrade': '0.01000000', 'baseAsset': 'NEO', 'activeSell': 395620.09, 'withdrawFee': '0', 'tickSize': '0.000001', 'prevClose': 0.004802, 'activeBuy': 0, 'volume': '395620.090000', 'high': '0.004996', 'lastAggTradeId': 1617464, 'decimalPlaces': 8, 'low': '0.004673', 'quoteAssetUnit': '฿', 'matchingUnitType': 'STANDARD', 'close': '0.004989', 'quoteAsset': 'BTC', 'open': '0.004802', 'status': 'TRADING', 'minQty': '1E-8'}
    }
  },
  components: {
    popup,
    candle,
    ProductList
  },
  methods: {
    klineSwitch (val) {
      this.isKline = val
    },
    setShowStatus () {
      this.popShow = !this.popShow
    }
  }
}
</script>
<style scoped>
@import '../assets/css/index.css';

.main-page [ui-view] {
    height: 100%;
    width: 100%;
    background-color: #14171a;
}

[ui-view] {
    position: absolute;
}
.pop-wrap{
  width:100%;
  height: 100%;
}
</style>