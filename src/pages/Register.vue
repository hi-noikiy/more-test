<template>
  <div class="content ng-scope" ng-controller="registerCtr">
  <form class="findpassword-form ng-pristine ng-valid" method="post" action="/user/register.html" id="register-form">
    <input type="hidden" name="lang" id="language">
    <div class="login register">
      <div class="loginInner">
        <div class="loginTitle ng-binding">Register</div>
      
        
        <div class="email">
          <input type="text" placeholder="Email" id="email" name="email" datatype="registerEmail" errormsg="Invalid email address." nullmsg="This field is required.">
          <!-- ngIf: email -->
          <p class="f-nomargin Validform_checktip"></p>
        </div>
        <div class="password">
          <input type="password" placeholder="Password" name="userPassword" id="regiterPassword" datatype="pwd" errormsg="Password must be at least 8 characters with uppercase letters." nullmsg="This field is required.">
          <input type="hidden" name="password" id="password">
          <!-- ngIf: password -->
          <p class="f-nomargin Validform_checktip"></p>
        </div>
        <div class="password">
          <input type="password" placeholder="Repeat Password" datatype="pwd" errormsg="Passwords are not the same." recheck="userPassword" nullmsg="This field is required." id="regiterRepeatPassword">
          <!-- ngIf: RepeatPassword -->
          <p class="f-nomargin Validform_checktip"></p>
        </div>
          
          <!-- ngIf: sarted --><div ng-if="sarted" class="ng-scope">
          <!-- ngIf: !ref --><input type="text" placeholder="Referral ID (optional)" id="ref" ng-if="!ref" name="ref" datatype="agentId" ng-model="agentId" errormsg="Referral ID is invalid." class="ng-scope ng-pristine ng-valid"><!-- end ngIf: !ref -->
          <!-- ngIf: ref -->
          <p class="f-nomargin Validform_checktip"></p>
        </div><!-- end ngIf: sarted -->
        
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
        <label class="agreement" for="agree">
          <input type="checkbox" name="agree" id="agree" datatype="*" nullmsg="Please agree to the terms.">
          <span class="ng-binding">I agree to Binance's</span>
          <a href="https://binance.zendesk.com/hc/en-us/articles/115000421672-Terms-of-Use" class="ng-binding">Terms Of Use.</a>
          <p class="f-nomargin Validform_checktip"></p>
        </label>
        <div class="loginBtn">
          <input type="submit" id="register-btn" value="Register" class="btnYellow">
        </div>
        <div class="register">
          <span class="ng-binding">Already Registered? </span>
          <a class="regRedirect ng-binding" href="/m-login.html">Login</a>
        </div>
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
      msg: 'Welcome to rg'
    }
  }
}
</script>
<style scoped>
  @import '../assets/css/login.css';
</style>