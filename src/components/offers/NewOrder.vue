  <template>
    <div class="orders-show">
      <div class="orders-show-content">
        <div class="orders-show-info">
          <div class="orders-info-form">
            <div class="order-info-title">
              您向用户 blacksmith20130927 购买  BTC
              <span class="pull-right" style="color:grey; font-size: 12px;">订单编号：c0853e26-117e</span>
            </div>
            <ul class="user-order-head">
              <li class="order-amount">交易金额</li>
              <li class="trading-count">交易数量</li>
              <li class="trading-price">单价</li>
              <li class="order-deadline">付款期限</li>
              <li class="payment-type">交易方式</li>
              <li class="trading-status">订单状态</li>
            </ul>
            <ul class="user-order-info">
              <li class="order-amount">
                <span class="mobile-head">交易金额</span>100 CNY
              </li>
              <li class="trading-count">
                <span class="mobile-head">交易数量</span> 0.00219199BTC
              </li>
              <li class="trading-price">
                <span class="mobile-head">单价</span> 45,620.45CNY
              </li>
              <li class="order-deadline">
                <span class="mobile-head">付款期限</span> 2017-11-02 07:53
              </li>
              <li class="payment-type">
                <span class="mobile-head">交易方式</span>
                  <span class="payment-icon">
                    <img src="../../assets/img/payment_wechat.png" alt="Payment wechat">
                  </span>
              </li>
              <li class="trading-status">
                <span class="mobile-head">订单状态</span>已下单
              </li>
            </ul>
            <ul class="user-order-amount">
              <li class="trading-amount">
                <span class="amount-titlt">总额 :</span>
                <span class="total-sum">100 CNY</span>
                <br>
                <span class="amount-titlt">兑换 :</span>
                <span class="currency-token">0.00219199BTC</span>
              </li>
              <li class="order-fee">交易手续费：0 BTC (您不需要支付任何手续费，交易手续费将由广告发布者承担)</li>
            </ul>
          </div>

          <!-- 注释掉申述提示 -->
          <div style="margin-top: 10px;">
            <!-- Nav tabs -->
            <ul class="nav nav-tabs" role="tablist">
              <li role="presentation" class="active">
                <a href="#home" aria-controls="home" role="tab" data-toggle="tab">交易条款</a>
              </li>
              <li role="presentation">
                <a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">交易对象</a>
              </li>
            </ul>

            <!-- Tab panes -->
            <div class="tab-content">
              <div role="tabpanel" class="tab-pane active" id="home">
                <div class="offer-message">
                  <div class="offer-message-seller">
                    <span>交易条款：</span><br>
                    <div>
                      1.付款前请确定我在线，以免久等。<br>2.请30min内付款，付款备注“订单号”。<br>3.付款前付款方式：<br>&nbsp; &nbsp;段世浩 6216 9108 0188 9798 中国民生银行<br>&nbsp; &nbsp;微信ID:tiejiangpuzi<br>4.开始交易后数字币是锁在平台上的，请安心下单!
                    </div>
                  </div>
                  <div class="offer-message-instruction">
                    <span>交易备注 :</span>
                    <br>
                    <p>
                      银行帐号：xxxx xxxx xxxx xxxx 
                      <br>支付宝帐号：xxxxxxx 
                      <br>微信帐号：xxxxx 
                      <br>联系电话：18900000000 
                      <br>下单后可以直接加我微信或用电话跟我联系，我会尽快回复。
                    </p>
                    <p>转帐时请备注「OTCBTC 帐号名称」以加快确认速度。</p>
                  </div>
                </div>
              </div>
            <div role="tabpanel" class="tab-pane" id="profile">
              <div class="order-seller-or-buyer-info">
                <div class="row seller-or-buyer-info-content">
                  <div class="col-md-2 user-avatar-box">
                    <img src="/images/user_default_pic.png" alt="User default pic" width="75" height="75">
                  </div>
                  <div class="col-md-5 col-md-offset-1">
                    <a target="_blank" href="/users/blacksmith20130927">blacksmith20130927</a><br>
                    交易次数： 9<br>
                    好评度：100.00% ( 
                    <span class="good-review"><b>+9</b></span> / 
                    <span class="bad-review"><b>-0</b></span> )
                  </div>
                  <div class="col-md-4">
                    邮箱验证：<span>已完成 </span><i class="fa fa-check verified-checked"></i><br>
                    实名验证：<span>已完成 </span><i class="fa fa-check verified-checked"></i><br>
                    手机验证：<span>未完成 </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="orders-show-chat">
        <div class="chat-title">
          <span class="chat-title-text">聊天窗口 <i class="fa fa-comments"></i></span>
          <div class="chat-title-status-mobile">
            <span class="chat-title-status-icon"><span class="status light grow light-success"></span></span>
            <span class="chat-title-status-text">卖家状态</span>
           </div>
          <div class="chat-online-status">
            <span class="status-text">
              请在 2017-11-02 07:53 前完成转账，并点击下方"付款完成"按钮。
              <span class="chat-title-status">卖家状态 <span class="status light grow light-success"></span></span>
            </span>
          </div>
        </div>

        <div class="payment-tips">
          <span class="tips-text">请留意  
            <span class="payment-type-text-label">微信</span>
            转账的单次/单日转账限额是否足够支付本次交易</span>
        </div>

        <div class="bs-example bs-example-tabs" data-example-id="togglable-tabs" style="width:100%">
        <div class="tab-content" id="myTabContent">
          <div class="tab-pane fade active in" role="tabpanel" id="home" aria-labelledby="home-tab" style="min-height: 450px;">
            <iframe height="450px" width="100%" frameborder="0" style="border:0" src="/orders/c0853e26-117e-4c29-88ad-dcaa447496bb/chats">
                &lt;p&gt;Placeholder text; only shows up if the page DOESN'T render!&lt;/p&gt;
            </iframe>
          </div>
        </div>
      </div>
    </div>

    <div class="order-actions">
      <div id="js-order-actions" data-order-token="c0853e26-117e-4c29-88ad-dcaa447496bb">
        <div class="row">
          <div class="order-operate-block">
            <button name="button" type="button" data-toggle="modal" data-target="#modal-notify-paid" class="btn btn-theme bottom-space">标记付款已完成</button>
            <a class="btn btn-theme-light bottom-space " data-confirm="您确定要延长订单有效期？点击确认后，交易将自动延期 30 分钟（每个订单只能延期一次），请尽快在有效期内转帐并点击“标记已付款完成”。" rel="nofollow" data-method="post" href="/account/orders/c0853e26-117e-4c29-88ad-dcaa447496bb/postpone">延长订单有效期</a>

            <a class="btn btn-default" data-confirm="取消后无法回复此交易订单，是否确定取消此笔交易？" data-disable-with="处理中..." rel="nofollow" data-method="post" href="/account/orders/c0853e26-117e-4c29-88ad-dcaa447496bb/cancel">取消交易</a>
            <div class="alert alert-info">
              <i class="fa fa-info-circle"></i>您不需要提供钱包地址给卖家，交易完成后数字货币将自动转入您在 OTCBTC 上的钱包中
            </div>
          </div>
        </div>
        <div class="order-rating"></div>
      </div>
    </div>
  </div>
</div>
  </template>
  <script>
  export default {
    name: 'exchange',
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