<template>
  <div id="shop">
    <button @click="addclickhandler">
      购物车的加
    </button>
    <button @click="delclickhandler">
      购物车的减
    </button>
    <p>这是购车的count------{{_shopcount}}</p>
    <p>这是购车的getcount------ {{_shopcountdb}}</p>
  </div>

</template>
<script>
  import {mapState} from 'vuex';
  import {mapGetters} from 'vuex';
  import {mapActions } from 'vuex';
   export  default {
     name:"shop",
     methods:{
       ...mapActions({
         addclickhandler:'add',
         delclickhandler:'del',
       })
     },
     computed:{
       ...mapState({
         _shopcount(state){return state.count},
       }),
       ...mapGetters({
         _shopcountdb:'doublecount',
       })
     }

   }
</script>
<style scoped>
  #shop{
    width:200px;
    height:200px;
    background: green;
  }

</style>
