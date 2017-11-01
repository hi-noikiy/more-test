<template>
  <div class="page-view content ng-scope" ui-view="">
    <ul>
        <li><router-link :to="{ name: 'offersNew'}" class="pull-left">发布</router-link></li>
        <li><router-link :to="{ name: 'sellOffers'}" class="pull-left">购买</router-link></li>
    </ul>
     
     
  </div>
</template>

<script>
// import {IndexData} from '../libs/DataSource.js'
// import IndexItem from '../components/IndexItem'

export default {
  name: 'Index',
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