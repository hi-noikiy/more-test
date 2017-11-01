<template>
<div class="container-fluid">
  <div class="row">
    <div class="container no-padding page-space">
      <div class="row">
        <!-- 右边 -->
        <div class="col-md-9 col-md-push-3">
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
                    <span class="payment-icon"><img src="../assets/img/payment_alipay.png" alt="Payment alipay"></span>
                    <span class="payment-icon"><img src="../assets/img/payment_wechat.png" alt="Payment wechat"></span>
                    <span class="payment-icon"><img src="../assets/img/payment_card.png" alt="Payment card"></span>
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


        </div>
        <!-- 左边 -->
        <div class="col-md-3 col-md-pull-9">
          <div class="timeline-sidebar">
            <!-- 步骤 -->
            <div class="timeline-box">
              <div class="timeline">
                <div class="line text-muted"></div>
                <article class="panel panel-default panel-outline">
                  <div class="panel-heading icon">
                    <i class="fa fa-check"></i>
                  </div>
                  <div class="panel-body">
                    <h4> 条件搜索</h4>
                    <span class="desc">你想出</span>
                    <br>
                    <strong>CNY
                      <a href="/sell_offers?currency=btc&amp;fiat_currency=cny">修改</a>
                    </strong>
                    <br>
                    <span class="desc">进行</span>
                    <br>
                    <strong>CNY > BTC</strong>
                    <br>
                    <span class="desc">交易方式</span>
                    <br>
                    <strong>不限</strong>
                  </div>
                </article>

                <article class="panel panel-success panel-outline">
                  <div class="panel-heading icon">
                    <span style="color: white;">2</span>
                  </div>
                  <div class="panel-body">
                    <h4>方案选择</h4>
                  </div>
                  </article>

                  <article class="panel panel-default panel-outline">
                    <div class="panel-heading icon">
                      <span>3</span>
                    </div>
                    <div class="panel-body">
                      <h4>新建交易</h4>
                    </div>
                  </article>

                  <article class="panel panel-default panel-outline">
                    <div class="panel-heading icon">
                      <span>4</span>
                    </div>
                    <div class="panel-body">
                      <h4>进行交易</h4>
                    </div>
                  </article>

                  <article class="panel panel-default panel-outline">
                    <div class="panel-heading icon">
                      <span>5</span>
                    </div>
                    <div class="panel-body">
                      <h4>进行移交</h4>
                    </div>
                  </article>

                  <article class="panel panel-default panel-outline">
                    <div class="panel-heading icon">
                      <span>6</span>
                    </div>
                    <div class="panel-body">
                      <h4>完成交易</h4>
                    </div>
                  </article>
  
              </div>
            </div>
          
            <!-- 当前 BTC 市价 -->
            <div class="clearfix current-rate">
              <div class="box">
                <h4>当前 BTC 市价</h4>
                <span class="price">  43,433.78 CNY</span>
                <span class="market">  2017-11-01 22:20 - Coinmarketcap</span>
              </div>
            </div>
            <!-- 常见问题 -->
            <div class="trade-faq-content">
              <h4><i class="fa fa-question-circle-o"></i> 常见问题</h4>
              <ul>
                <li>
                  <a target="_blank" href="/company">OTCBTC 是什么？</a>
                </li>
                <li>
                  <a target="_blank" href="https://otcbtc.zendesk.com/hc/zh-cn/articles/115001742711">如何使用 OTCBTC？</a>
                </li>
                <li>
                  <a target="_blank" href="https://otcbtc.zendesk.com/hc/zh-cn/articles/115002037111">如何购买数字币？</a>
                </li>
                <li>
                  <a target="_blank" href="https://otcbtc.zendesk.com/hc/zh-cn/articles/115002052032">如何出售数字币？</a>
                </li>
                <li>
                  <a target="_blank" href="https://otcbtc.zendesk.com/hc/zh-cn/articles/115002196831">为什么价格比交易所高？</a>
                </li>
                <li>
                  <a target="_blank" href="https://otcbtc.zendesk.com/hc/zh-cn/articles/115002203051">什么是浮动价格机制？</a>
                </li>
                <li>
                  <a target="_blank" href="https://otcbtc.zendesk.com/hc/zh-cn/articles/115001808251">如何计算手续费？</a>
                </li>
                <li>
                  <a target="_blank" href="https://otcbtc.zendesk.com/hc/zh-cn/articles/115001808311">如何充值？</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
// import HeaderTop from './components/Header'

export default {
  name: 'sellOffers',
  components: {
    // HeaderTop
  }

}
</script>

<style>
</style>
