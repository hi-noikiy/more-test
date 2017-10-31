<template>
  <div class="content ng-scope" style="padding-bottom: 2.5rem;" ng-controller="loginCtr">
  <form class="findpassword-form ng-pristine ng-valid" action="/user/login.html" method="post" id="login-form">
    <div class="login">
      <div class="loginInner">
        <div class="loginTitle ng-binding">Login</div>
      
        <div class="email">
          <input type="text" placeholder="Email" id="email" v-model="email" name="email" datatype="e" errormsg="Invalid email address." nullmsg="This field is required." class="ng-pristine ng-valid">
          <p class="f-nomargin Validform_checktip"></p>
        </div>
        <div class="password">
          <input type="password" id="pwd" placeholder="Password" v-model="password" datatype="*" nullmsg="This field is required." class="ng-pristine ng-valid">
          <input type="hidden" id="password" name="password">
          <p class="f-nomargin Validform_checktip"></p>
        </div>
        <div>
          <div id="dom_id" class="slideValidate nc-container" data-nc-idx="1">
            <div id="nc_1_wrapper" class="nc_wrapper">
            <div id="nc_1_n1t" class="nc_scale">
            <div id="nc_1__bg" class="nc_bg"></div>
            <span id="nc_1_n1z" class="nc_iconfont btn_slide"></span>
            <div id="nc_1__scale_text" class="scale_text slidetounlock"><span class="nc-lang-cnt" data-nc-lang="_startTEXT">Please slide to verify</span></div>
            <div id="nc_1_clickCaptcha" class="clickCaptcha">
            <div class="clickCaptcha_text">
            <b id="nc_1__captcha_text" class="nc_captch_text"></b>
            <i id="nc_1__btn_2" class="nc_iconfont nc_btn_2 btn_refresh"></i>
            </div>
            <div class="clickCaptcha_img"></div>
            <div class="clickCaptcha_btn"></div>
            </div>
            <div id="nc_1_imgCaptcha" class="imgCaptcha">
            <div class="imgCaptcha_text"><input id="nc_1_captcha_input" maxlength="6" type="text" style="ime-mode:disabled"></div>
            <div class="imgCaptcha_img" id="nc_1__imgCaptcha_img"></div>
            <i id="nc_1__btn_1" class="nc_iconfont nc_btn_1 btn_refresh" onclick="document.getElementById('nc_1__imgCaptcha_img').children[0].click()"></i>
            <div class="imgCaptcha_btn">
            <div id="nc_1__captcha_img_text" class="nc_captcha_img_text"></div>
            <div id="nc_1_scale_submit" class="nc_scale_submit"></div>
            </div>
            </div>
            <div id="nc_1_cc" class="nc-cc"></div>
            <i id="nc_1__voicebtn" tabindex="0" role="button" class="nc_voicebtn nc_iconfont" style="display:none"></i>
            <b id="nc_1__helpbtn" class="nc_helpbtn"><span class="nc-lang-cnt" data-nc-lang="_learning">help</span></b>
            </div>
            <div id="nc_1__voice" class="nc_voice"></div>
            </div>
            </div>
          <input type="hidden" name="csessionid">
          <input type="hidden" name="sig">
          <input type="hidden" name="token">
          <input type="hidden" name="scene">
        </div>
        <div class="loginBtn" style="margin-top: 1.5rem">
          <input type="submit" value="Login" id="login-btn" ng-class="{true: 'btnYellow', false: 'btnGray'}[(email!=null&amp;&amp;email!='')||(password!=null&amp;&amp;password!='')||(cap!=null&amp;&amp;cap!='')]" class="btnGray">
        </div>
        <div class="forgot" style="padding: 1.75rem 0 0.5rem 0">
          <a href="/m-resetPass.html" class="ng-binding">Forgot your password?</a>
        </div>
        <!-- ngIf: notChinese --><div class="register ng-scope" style="margin-top: 0" ng-if="notChinese">
          <span class="ng-binding">Don't have an account yet?</span>
          <a class="regRedirect ng-binding" href="/m-register.html">Register</a>
        </div><!-- end ngIf: notChinese -->
      </div>
    </div>
  </form>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      email: '',
      password: '',

      msg: 'Welcome to login'
    }
  }
}
</script>
<style scoped>
  @import '../assets/css/login.css';
  @import '../assets/css/login2.css';

/*   .nc-container .imgCaptcha {
    position: absolute;
    left: 0;
    top: 35px;
    height: auto;
    padding-bottom: 15px;
    border: 1px solid #ccc;
    background: #fff;
  }
  .nc-container .nc_scale .imgCaptcha, .nc-container .nc_scale .clickCaptcha {
    display: none;
    overflow: hidden;
    border: 1px solid #ccc;
    background: #fff;
    z-index: 20000;
}
.nc_scale {
    width: auto;
    height: 34px;
    background: #e8e8e8;
    position: relative;
    margin: 0;
    padding: 0;
}
.nc-container .nc_scale .nc_bg {
    position: absolute;
    height: 100%;
    _height: 34px;
    left: 0;
    width: 10px;
}
.nc-container .nc_scale .scale_text {
    width: 100%;
    height: 100%;
    text-align: center;
    position: absolute;
    z-index: 1;
    background: transparent;
    color: #9c9c9c;
    line-height: 34px;
    font-size: 12px;
    cursor: pointer;
}
.nc-container .scale_text.scale_text span[data-nc-lang="_startTEXT"] {
    display: inline-block;
    width: 100%;
}
.nc-container .scale_text.scale_text.slidetounlock span[data-nc-lang="_startTEXT"] {
    background: -webkit-gradient(linear,left top,right top,color-stop(0,#4d4d4d),color-stop(.4,#4d4d4d),color-stop(.5,#fff),color-stop(.6,#4d4d4d),color-stop(1,#4d4d4d));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-animation: slidetounlock 3s infinite;
    -webkit-text-size-adjust: none;
}*/
</style>