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

          <!-- 想怎么样 -->
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

          <!-- 出售价设置 -->
          <div class="row">
            <div class="col-md-3">
              <div class="trade-title form-block">出售价设置</div>
            </div>
            <div class="form-block">
              <div class="col-md-4">
                <div class="form-group decimal required sell_offer_margin">
                  <label class="decimal required control-label" for="sell_offer_margin">
                    <abbr title="required">*</abbr> 溢价
                  </label>
                  <div class="input-group">
                    <input label="false" class="numeric decimal required form-control" id="js-offer-commission" step="0.01" value="0" type="number" name="sell_offer[margin]">
                    <span class="input-group-addon" aria-describedby="sell_ad_margin">%</span>
                  </div>
                </div>    
              </div>
              <div class="col-md-5">
                <div class="form-group decimal optional disabled sell_offer_price">
                  <label class="decimal optional disabled control-label" for="js-offer-market_price">单价</label>
                  <input id="js-offer-market_price" value="41161.58" data-market-price="41161.58" data-decimal-scale="2" class="numeric decimal optional disabled form-control" disabled="disabled" type="number" step="any" name="sell_offer[price]">
                </div>
              </div>
            </div>
            <div class="col-md-9 col-md-offset-3 tips-text">
              <p>
                「溢价」为基于市场价格的溢出比例，「单价」为依据主流交易所得出的数字币价格，设定适当的溢价比例能让您的广告报价处于合理范围，假设数字币单价为 30000，溢价比例为 5%，那麽交易价格为 31500。
              </p>
              <p class="alert alert-warning">
                <i class="fa fa-info-circle"></i>
                您也可以设定负的溢出比例，来获得比市价低的出售价格，这样将能让您的广告在平台上更有竞争力。假设当前价格为30000，溢价比例为-5%，那麽价格为28500。
              </p>
              <div class="price-notice">
                广告发布后，「单价」会依据市场价格实时调整，实际交易价格将以用户下单时的价格为准，请查看<a href="https://otcbtc.zendesk.com/hc/zh-cn/articles/115002203051" target="_blank">关于浮动价格的说明</a>
              </div>
            </div>

            <!-- 交易方式 -->
            <div class="row">
              <div class="col-md-3">
                <div class="trade-title form-block">交易方式</div>
              </div>
              <div class="col-md-4">
                <div class="form-block">
                  <div class="form-group check_boxes required sell_offer_payment_types">
                    <input type="hidden" name="sell_offer[payment_type_ids][]" value="">
                    <span class="checkbox">
                      <label for="sell_offer_payment_type_ids_1">
                        <input class="check_boxes required" type="checkbox" value="1" name="sell_offer[payment_type_ids][]" id="sell_offer_payment_type_ids_1">银行转帐
                      </label>
                    </span>
                    <span class="checkbox">
                      <label for="sell_offer_payment_type_ids_2">
                        <input class="check_boxes required" type="checkbox" value="2" name="sell_offer[payment_type_ids][]" id="sell_offer_payment_type_ids_2">支付宝
                      </label>
                    </span>
                    <span class="checkbox">
                      <label for="sell_offer_payment_type_ids_3">
                        <input class="check_boxes required" type="checkbox" value="3" name="sell_offer[payment_type_ids][]" id="sell_offer_payment_type_ids_3">微信
                      </label>
                    </span>
                    <span class="checkbox">
                      <label for="sell_offer_payment_type_ids_4">
                        <input class="check_boxes required" type="checkbox" value="4" name="sell_offer[payment_type_ids][]" id="sell_offer_payment_type_ids_4">Paypal
                      </label>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <!--交易限制  -->
            <div class="row">
              <div class="col-md-3">
                <div class="trade-title form-block">交易限制</div>
              </div>
              <div class="clearfix form-block">
                <div class="col-md-4">
                  <div style="width:80%; float:left;">
                    <div class="form-group decimal required sell_offer_minimum_amount">
                      <label class="decimal required control-label" for="sell_offer_minimum_amount">
                        <abbr title="required">*</abbr> 最小限额
                      </label>
                      <input min="0" placeholder="1" class="numeric decimal required form-control" type="number" step="any" name="sell_offer[minimum_amount]" id="sell_offer_minimum_amount">
                    </div>
                  </div>
                  <div class="pull-left" style="padding-top: 35px; padding-left: 10px; font-size: 16px;">CNY</div>
                </div>
                <div class="col-md-4">
                  <div style="width:80%; float:left;">
                    <div class="form-group decimal required sell_offer_max_amount">
                      <label class="decimal required control-label" for="sell_offer_max_amount">
                        <abbr title="required">*</abbr> 最大限额
                      </label>
                      <input min="0" placeholder="10" class="numeric decimal required form-control" type="number" step="any" name="sell_offer[max_amount]" id="sell_offer_max_amount">
                    </div>
                  </div>
                  <div class="pull-left" style="padding-top: 35px; padding-left: 10px; font-size: 16px;">CNY</div>
                </div>
              </div>
              <div class="col-md-9 col-md-offset-3 tips-text">
                <p>
                  设定限额可以调整买家单次购买的金额区间，您可以依据需求来调整。
                </p>
                <p class="alert alert-warning">
                  <i class="fa fa-info-circle"></i>
                  您可以依据交易方式设定不同的单笔限额，例如将"最大限额"依据银行转帐或支付宝的单笔转帐上限作调整，提高"最小限额"也可避免一直收到交易金额过低的订单，设定合适的限额区间能让您的交易更有效率。
                </p>
                <br>
              </div>

              <div class="col-md-9 col-md-offset-3">
                <div class="form-group integer required sell_offer_payment_window">
                  <label class="integer required control-label" for="sell_offer_payment_window">
                    <abbr title="required">*</abbr> 付款期限
                  </label>
                  <div class="input-group">
                    <input class="numeric integer required form-control" step="1" min="0" type="number" value="45" name="sell_offer[payment_window]" id="sell_offer_payment_window">
                    <span class="input-group-addon">分钟</span>
                  </div>
                </div>
                <span class="tips-text">设定付款期限可以限制买家下单后，多长时间内必须转账並点击确认按钮，超过时限该笔交易将自动取消，并将数字货币返还至您的帐户中，您可以依据不同交易方式来调整时限。</span>
              </div>
            </div>
          </div>

          <!-- 交易说明 -->
          <div class="row">
            <div class="col-md-3">
              <div class="trade-title form-block">交易说明</div>
            </div>
            <div class="col-md-9">
              <div class="form-block">
                <input type="hidden" name="sell_offer[offer_terms]" id="sell_offer_offer_terms_trix_input_sell_offer" value="<div>1. 请确定能在一小时内完成转账再下单，下单后请先通过站内聊天窗口和我联系，或是加我微信，确认我能及时给你释放数字币再转账给我&amp;nbsp;<br>2. 请注意您选择的交易方式（例如网上银行，支付宝）是否有每日转账金额限制&amp;nbsp;<br>3. 开始交易后数字币是锁在平台上的，请安心下单<br><br></div>">
                <trix-editor input="<div>1. 请确定能在一小时内完成转账再下单，下单后请先通过站内聊天窗口和我联系，或是加我微信，确认我能及时给你释放数字币再转账给我&amp;nbsp;<br>2. 请注意您选择的交易方式（例如网上银行，支付宝）是否有每日转账金额限制&amp;nbsp;<br>3. 开始交易后数字币是锁在平台上的，请安心下单<br><br></div>"></trix-editor>
              </div>
            </div>
            <div class="col-md-9 col-md-offset-3 tips-text">
              您可以在「交易条款」内填写对交易对象的要求，例如要求出示证件等，以便买家下单前先行查看。<br><br>
            </div>
            <div class="col-md-9 col-md-offset-3">
              <div class="form-group text optional sell_offer_trading_instruction">
                <label class="text optional control-label" for="sell_offer_trading_instruction">交易备注</label>
                <textarea style="min-height: 150px;" class="text optional form-control" name="sell_offer[trading_instruction]" id="sell_offer_trading_instruction">
银行帐号：xxxx xxxx xxxx xxxx 
支付宝帐号：xxxxxxx 
微信帐号：xxxxx 
联系电话：18900000000 
下单后可以直接加我微信或用电话跟我联系，我会尽快回复。

转帐时请备注「OTCBTC 帐号名称」以加快确认速度。
                </textarea>
              </div>
            </div>
            <div class="col-md-9 col-md-offset-3 tips-text">
              您可以在「交易备注」内填写与您交易所需的信息，例如留下您的收款帐户及联系方式。留下联系方式的用户，一般可提升 30% 的成交机率。该备注将在建立订单后显示给对方。
            </div>
          </div>

          <!-- 买家限制 -->
          <div class="row">
            <div class="col-md-3">
              <div class="trade-title form-block">买家限制</div>
            </div>
            <div class="col-md-4">
              <div class="form-block">
                
                <div class="form-group integer required sell_offer_buyer_min_successful_orders">
                  <label class="integer required control-label" for="sell_offer_buyer_min_successful_orders">
                    <abbr title="required">*</abbr> 买家必须成交过几次
                  </label>
                  <input min="0" class="numeric integer required form-control" type="number" step="1" value="0" name="sell_offer[buyer_min_successful_orders]" id="sell_offer_buyer_min_successful_orders">
                </div>
                <div class="form-group boolean optional sell_offer_need_taker_identified">
                  <div class="checkbox">
                    <input value="0" type="hidden" name="sell_offer[need_taker_identified]">
                    <label class="boolean optional" for="sell_offer_need_taker_identified">
                      <input class="boolean optional" type="checkbox" value="1" name="sell_offer[need_taker_identified]" id="sell_offer_need_taker_identified">买家必须通过实名验证
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 注意事项 -->
          <div class="row">
            <div class="col-md-3">
              <div class="trade-title form-block">注意事项</div>
            </div>
            <div class="col-md-9">
              <div class="form-block">
                <div class="offer-rule">
                  <h4>交易规则</h4>
                  <ul>
                    <li>OTCBTC 为了保证用户的交易安全，将采用数字货币托管系统。严禁绕过平台私下交易，违者将自行承担损失，且<strong>永久封号</strong>。</li>
                    <li>请在交易条款及交易备注中，详细写下您所希望的交易条件，以及与您交易所需注意的事项，明确的信息将提升您的交易成功机率及评价。</li>
                    <li>请勿在 OTCBTC 尝试欺诈行为，违者将会导致帐号被冻结，并承担法律责任。</li>
                  </ul>
                  <hr>
                  <h4><strong>注意！注意！注意！务必详细阅读以下信息，以确保您的交易安全</strong></h4>
                  <ul>
                    <li>交易过程中，请先确认款项入帐后再释放数字货币。</li>
                    <li>交易过程中，不要透露与您帐户安全有关的敏感资讯。</li>
                    <li>不要直接透露你的电子邮箱给买家，否则有可能会收到诈骗信件，及对帐户安全造成危害。</li>
                    <li>永远确保你在正确的 OTCBTC 网站上，请将网站纪录在书签上，避免误闯钓鱼网站。</li>
                    <li>OTCBTC 员工将不会以官方名义与您进行交易，请不要与自称是 OTCBTC 的员工交易，避免利益损失。</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- 按钮  发布广告 -->
          <div class="row">
            <div class="col-md-12">
              <hr>
            </div>
            <div class="col-md-8 col-md-offset-2 text-center">
                <a class="btn btn-theme btn-long disabled" href="#">发布广告</a>
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
@import '../../assets/css/trix.css';

</style>
