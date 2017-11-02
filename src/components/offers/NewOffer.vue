<template>
  <div class="offers-show">
    <div class="row">
      <div class="col-md-12">
        <h4>输入您想要交易的金额或数量</h4>
      </div>
    </div>      
    <div class="offers-show-info">
      <br>
      <div class="row">
        <div class="alert alert-info info-box">
          <i class="fa fa-info-circle"></i> 您不需要支付任何手续费，交易手续费将由广告发布者承担，请安心交易
        </div>

        <form novalidate="" class="simple_form new_order" id="new_order" accept-charset="UTF-8" method="post">
          <input name="utf8" type="hidden" value="✓">
          <input type="hidden" name="authenticity_token" value="LfOBSfiPwM69jUOLbvyNV6O2GxUDRoN8CBhDLKolGnsVplgajMHEQ+HHun86BgP8kxElSK1PNh3zUUPRMrFqdg==">
          <div class="col-md-4 fiat-no-padding">
            <div class="form-group decimal optional order_fiat_currency_amount">
              <label class="decimal optional control-label" for="order_fiat_currency_amount">您想购买多少 CNY？</label>
              <input data-parsley-range="[2000.0, 3000.0]" data-parsley-trigger="input" data-parsley-validation-threshold="1" data-parsley-required="true" class="numeric decimal optional form-control" type="number" step="any" value="0.0" name="order[fiat_currency_amount]" id="order_fiat_currency_amount">
            </div>
          </div>
          <div class="col-md-1">
            <i class="fa fa-exchange exchange-icon" aria-hidden="true"></i>
          </div>
          <div class="col-md-4 digital-no-padding">
            <div class="form-group decimal optional order_crypto_currency_amount">
              <label class="decimal optional control-label" for="order_crypto_currency_amount">换取 BTC</label>
              <input data-parsley-required="true" class="numeric decimal optional form-control" type="number" step="any" value="0.0" name="order[crypto_currency_amount]" id="order_crypto_currency_amount">
            </div>
          </div>

          <div class="col-md-3">
            <div class="form-group select optional order_payment_type">
              <label class="select optional control-label" for="order_payment_type">交易方式</label>
              <select class="select optional form-control" name="order[payment_type]" id="order_payment_type">
                <option value="wechat">微信</option>
                <option value="alipay">支付宝</option>
                <option value="bank_transfer">银行转帐</option>
              </select>
            </div>
          </div>

          <div class="col-md-12 price-notice">
            当前数字货币价格为系统自动计算，实际交易价格以发起交易时的价格为准，请点击查看
            <a href="https://otcbtc.zendesk.com/hc/zh-cn/articles/115002203051" target="_blank">关于浮动价格的说明</a>
            <hr>
          </div>
          <div class="col-md-12">
            <div class="offer-terms">
              <div class="offer-terms-info">
                <span class="offer-terms-title">交易条款：</span><br>
                <div>
                  1. 请确定能在一小时内完成转账再下单，下单后请先通过站内聊天窗口和我联系，或是加我微信，确认我能及时给你释放数字币再转账给我&nbsp;<br>2. 请注意您选择的交易方式（例如网上银行，支付宝）是否有每日转账金额限制&nbsp;<br>3. 开始交易后数字币是锁在平台上的，请安心下单<br><br>
                </div>
              </div>
            </div>

            <div class="price">
              <ul class="user-info">
                <li class="user-name">
                  <span class="user-info-head">用户名</span>
                  <div class="user-name-warrper">
                    <a target="_blank" class="user-name-warrper--gray" href="/users/bluefog510">bluefog510</a>
                    <span class="status light grow light-success"></span>
                  </div>
                </li>

                <li class="trading-order-count">
                  <span class="user-info-head">  交易次数</span> 7
                </li>
                <li class="trading-order-done">
                  <span class="user-info-head">  历史成交</span> 0-2 BTC
                </li>
                <li class="recieved-reviews-bad">
                  <span class="user-info-head">  好评度</span> 100.00%
                </li>
                <li class="recieved-reviews-good">
                  <span class="user-info-head">  评价数</span> +4 / -0
                </li>
              </ul>

              <ul class="price-info-head">
                <li class="make-offers">单价</li>
                <li class="trading-limit">交易限额</li>
                <li class="payment-type">交易方式</li>
                <li class="payment-time">付款期限</li>
                <li class="payment-status">状态</li>
              </ul>

              <ul class="price-info">
                <li class="make-offers">
                  <span class="make-offers-head-mobile">单价</span> 44,671.17 CNY / BTC
                </li>

                <li class="trading-limit">
                  <span class="trading-limit-head-mobile">交易限额</span> 2,000 ~ 3,000 CNY
                </li>

                <li class="payment-type">
                  <span class="payment-type-head-mobile">交易方式</span>
                    <span class="payment-icon">
                      <img src="../../assets/img/payment_alipay.png" alt="Payment alipay">
                    </span>
                    <span class="payment-icon">
                      <img src="../../assets/img/payment_wechat.png" alt="Payment wechat">
                    </span>
                    <span class="payment-icon">
                      <img src="../../assets/img/payment_card.png" alt="Payment card">
                    </span>
                </li>
                <li class="payment-time">
                  <span class="payment-time-head-mobile">付款期限</span> 30 分钟
                </li>

                <li class="payment-status">
                  <span class="payment-status-head-mobile">状态</span> 上架中
                </li>
              </ul>
            </div>
          </div>

          <div class="col-md-12 text-right">
            <span class="transaction-amount-title">交易数额</span>
            <div class="transaction-amount">
              <span id="transaction-fiat_currency_amount">0</span>
              <span>CNY</span>
              <i class="fa fa-exchange" aria-hidden="true"></i>
              <span id="transaction-crypto_currency_amount">0</span>
              <span>BTC</span>
            </div>
          </div>

          <div class="col-md-4 col-md-offset-8 actions-button">
            <div class="form-group boolean optional order_agreement">
              <div class="checkbox">
                <input value="0" type="hidden" name="order[agreement]">
                <label class="boolean optional" for="order_agreement">
                  <input data-parsley-required="true" data-parsley-error-message="请确认交易内容后勾选本选项" class="boolean optional" type="checkbox" value="1" name="order[agreement]" id="order_agreement" data-parsley-multiple="orderagreement">我已经阅读并确认以上交易信息
                </label>
              </div>
            </div>
            <input type="hidden" value="2d302483-ea55-4912-838e-1ba093703514" name="order[version_token]" id="order_version_token">
          </div>
          <div class="col-md-8 col-md-offset-4">
            <div class="reminder">
            </div>
          </div>
          <div class="col-md-4 col-md-offset-8 actions-button">
            <input type="bottom" name="commit" value="立即购买" class="btn btn-theme" data-disable-with="立即购买" @click="nextStep()">
          </div>
        </form>
      </div>
      <hr>
      <div class="offers-tips-content">
        <ul>
          <li>1. 交易发起前，请您确认已阅读并同意卖家提出的条款，并再次确认交易内容无误后，再点击购买按钮。</li>
          <li> 2. 交易发起后，请您于付款期限截止前转帐至指定帐户，并<b>标记已付款完毕</b>，逾期系统将自动取消交易。</li>
          <li>3. 交易发起后，系统会自动将卖家的数字货币锁定，待卖家确认收到您的转帐后，将会释放数字货币至您的帐户中。</li>
          <li>4. 建议您在交易前先查看卖家信息，检视相关交易记录及评价，以減少交易纠纷。</li>
          <li>5. 交易过程请使用平台的聊天系统进行沟通，平台外的对话记录将无法作为交易纠纷的依据。</li>
        </ul>
      </div>

      <div class="alert alert-info">
        <i class="fa fa-check verification_icon"></i>
        <span> 通过邮箱验证，单笔交易限额：1000 CNY</span>
        <br>
        <i class="fa fa-exclamation-circle verification_icon"></i>
        <span> 通过实名验证，单笔交易限额：50000 CNY</span>
        <span><a href="/account/verification_methods"> (前往实名验证)</a></span>
        <br>
        <i class="fa fa-exclamation-circle verification_icon"></i>
        <span> 通过进阶验证，单笔交易限额：不限制</span>
        <span><a href="/account/advanced_identity_verifications/new"> (前往进阶验证)</a></span>
        <br>
        若您想购买的金额大于目前单笔限额，可先通过验证再回来下单。
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NEW',
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
    nextStep () {
      this.$router.push({name: 'newOrder'})
    }
  }
}
</script>

<style >
</style>