<template>
  <div>
    <epet-header></epet-header>
    <div class="tab">
      <div class="tab-item">
        <router-link></router-link>
      </div>
    </div>

  </div>
</template>

<script>
  import header from "./components/header/header.vue"
  export default {
    components:{
      "epet-header": header
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
