<template>
  <header class="bar bar-nav">
    <router-link :to="{ name: 'index'}" class="pull-left">
      <img ng-src="../assets/logo-bfaa88e2591ae7b33536fb66b217fd103b1f35404d81cfe7344eacf6c8e65915.png" class="logo" src="../assets/logo-bfaa88e2591ae7b33536fb66b217fd103b1f35404d81cfe7344eacf6c8e65915.png">
    </router-link>
    <div class="pull-right">
      <!-- ngIf: !isLogin && notChinese -->
      <span class="btn ng-scope" ng-if="!isLogin &amp;&amp; notChinese">
        <router-link :to="{ name: 'register'}" class="ng-binding">Register</router-link>
        <span ng-if="notChinese" class="ng-scope">|</span><!-- end ngIf: notChinese -->
        <router-link :to="{ name: 'login'}" class="ng-binding">Login</router-link>
      </span><!-- end ngIf: !isLogin && notChinese -->
      <i class="icon icon-menu open-panel panel-right" data-panel="#panel-left-demo"></i>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
    }
  }
}
</script>
<style>
header.bar{height:2.8rem;background:#1c2226;z-index:99999;}
header.bar:after{height:0;}
header.bar .logo{height:1.1rem;}
header.bar .pull-left,header.bar .pull-right{line-height:100%;}
header.bar .pull-left{margin-top:0.85rem;}
header.bar .pull-right{margin-top:0.75rem;}
header.bar .pull-right .btn{display:inline-block;border-radius:0.1rem;padding:0 0.5rem;height:1.25rem;font-size:0.6rem;color:#fff;}
header.bar .pull-right .btn a{font-size:0.7rem;color:#fff;line-height:1.25rem;margin:0 0.7rem;}
header.bar .pull-right .btn a:last-of-type{margin-right:0;}
header.bar .pull-right .icon{font-size:1.3rem;color:#fff;}
header.bar .icon{padding:0;}
</style>