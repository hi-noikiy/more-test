<template>
  <div class="show-solution">
    <!-- 系统根据条件为您挑选 -->
    <div class="group clearfix">
      <h4 class="show-solution-title">系统根据条件为您挑选</h4>
      <hr>
      <div class="show-solution-box">
        <div class="row">
          <!-- 单个box start-->
          <div class="col-md-4">
            <div class="box">
              <div class="ribbon ribbon-success">
                <strong class="ribbon-content">价格最低</strong>
              </div>
              <h4 class="text-center user-info">
                <span class="status light grow light-success"></span>
                <a href="/users/bluefog510">bluefog510</a>
                <i class="fa fa-check-circle-o"></i>
                <br>
                <div class="rating-stars">
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                </div>
              </h4>
              <p>单价</p>
              <div class="can-buy-count">44,645.58  CNY/BTC</div>
              <br>
              <p>交易限额</p>
              <strong>2,000  -  3,000  CNY</strong>
              <hr>
              <a class="btn btn-theme" href="/offers/9fab75500464024607763f99?currency=btc&amp;fiat_currency=cny&amp;payment_type=all">立即购买</a>
              <br>
            </div>
          </div>
          <!-- 单个box  end-->
        </div>
      </div>
    </div>
    <!-- 更多其他的选择： -->
    <div class="group clearfix">
      <div class="long-solution-list">
        <h4>更多其他的选择：</h4>
        <hr>
        <ul class="list-head">
          <li class="user-name-head">昵称</li>
          <li class="user-trust-head">信用</li>
          <li class="payment-type-head">交易方式</li>
          <li class="minimum-amount-head">交易限额</li>
          <li class="price-head">单价</li>
          <li class="buy-button-head">操作</li>
        </ul>
        <!-- 单条数据 start -->
        <ul class="list-content">
          <li class="user-name">
            <div class="status">
              <span class="status light grow light-success"></span>
            </div>
            <a href="/users/bluefog510">bluefog510</a>
            <i class="fa fa-check-circle-o"></i>
            <span class="user-last-online">  不到一分钟 前上线</span>
          </li>
          <li class="user-trust">
            <span class="mobile-head">信用</span>
            交易 3 | 好评度 100.00%
          </li>
          <li class="payment-type">
            <span class="mobile-head">交易方式</span>
            <span class="payment-icon"><img src="../../assets/img/payment_alipay.png" alt="Payment alipay"></span>
            <span class="payment-icon"><img src="../../assets/img/payment_wechat.png" alt="Payment wechat"></span>
            <span class="payment-icon"><img src="../../assets/img/payment_card.png" alt="Payment card"></span>
          </li>
          <li class="minimum-amount">
            <span class="mobile-head">交易限额</span>
            2,000 - 3,000 CNY
          </li>
          <li class="price">
            <span class="mobile-head">单价</span>
            44,645.58 CNY/BTC
          </li>
          <li class="buy-button">
            <a class="btn btn-theme" href="/offers/9fab75500464024607763f99?payment_type=all">购买</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sell',
  data () {
    return {
    }
  },
  components: {
  },
  created () {
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style >
</style>