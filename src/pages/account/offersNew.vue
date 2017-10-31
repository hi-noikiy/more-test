<template>
<div class="row">
  <div class="container-fluid no-padding">
    <div class="container read-width offers-new-title">
      <h2>发布交易广告</h2>
      <div class="rule">
        <ul>
          <li>广告发布前，请先确认您已充值至 OTCBTC 上的帐户中。</li>
          <li><strong>开幕期间 (2017/10/26 ~ 2017/11/30) 交易手续费将优惠至 0.1%</strong>，交易手续费由发布广告的用户承担。
          <h4><code>假设交易金额为 1 BTC，则手续费为 0.001 BTC。</code></h4></li>
          <li>请务必使用您自身的帐号进行交易，否则将自行承担利益损失。</li>
          <li>请务必在交易过程中确认交易内容及帐户信息正确，以顺利完成交易。</li>
          <li>交易过程中，所有的沟通都必须在 OTCBTC 上进行，私下沟通将无法作为发生交易纠纷时的依据。</li>
        </ul>
      </div>
    </div>

    <div class="offers-new-content">
      <div class="container read-width">
        <div class="alert alert-warning">
          <strong><i class="fa fa-exclamation-triangle"></i></strong>
          <span>您的帐户余额必须大于 0.001 BTC，才能发布广告，请先</span><a href="/account">充值</a>
        </div>

        <form novalidate="novalidate" class="simple_form new_sell_offer" id="new_sell_offer" action="/account/offers" accept-charset="UTF-8" method="post">
          <input name="utf8" type="hidden" value="✓">
          <input type="hidden" name="authenticity_token" value="b33/AJdEV8hHTG2cTrkspY7SQzIRjuVRv06lnt2I4YRXKCZT4wpTRRsGlGgaQ6IOvnV9b7+HUDBEB6VjRRyRiQ==">
          <div class="row">
            <div class="col-md-12"></div>
          </div>

          <div class="row">
            <div class="col-md-3">
              <div class="trade-title form-block">我想</div>
            </div>
            <div class="form-block">
              <div class="col-md-2">
                <div class="form-group select required sell_offer_type">
                  <select class="select required js-refreshable form-control" data-refreshable-attribute="offer_type" name="sell_offer[type]" id="sell_offer_type">
                    <option selected="selected" value="SellOffer">出售</option>
                    <option value="BuyOffer">购买</option>
                  </select>
                </div>
              </div>
              <div class="col-md-3">
                <div class="form-group select required sell_offer_currency">
                  <select class="select required js-refreshable form-control" data-refreshable-attribute="currency" name="sell_offer[currency]" id="sell_offer_currency">
                    <option selected="selected" value="btc">BTC</option>
                    <option value="eth">ETH</option>
                    <option value="eos">EOS</option>
                  </select>
                </div>
              </div>
              <div class="convert-mark"><=></div>
              <div class="col-md-3">
                <div class="form-group select required sell_offer_fiat_currency">
                  <select class="select required js-refreshable form-control" data-refreshable-attribute="fiat_currency" name="sell_offer[fiat_currency]" id="sell_offer_fiat_currency">
                    <option selected="selected" value="cny">人民币</option>
                    <option value="twd">新台幣</option>
                    <option value="hkd">港幣</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </form>

      </div>
    </div>
  </div>
  </div>
</template>

<script>
// import HeaderTop from './components/Header'

export default {
  name: 'app',
  components: {
    // HeaderTop
  }

}
</script>

<style>
@import '../../assets/css/application.css';

</style>
