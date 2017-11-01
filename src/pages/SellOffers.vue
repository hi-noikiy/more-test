<template>
<div class="container-fluid">
  <div class="row">
    <div class="container no-padding page-space">
      <div class="row">
        <!-- 右边 -->
        <div class="col-md-9 col-md-push-3">
          <!--  -->
          <sell></sell>

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
import Sell from '../components/offers/Sell'

export default {
  name: 'sellOffers',
  components: {
    Sell
  }

}
</script>

<style>
</style>
