<template>
  <div id="test">
    <button @click="jiahoandler(inval)">加加</button>
    <button @click="jianhandler(inval)">减减</button>
    <p>{{_testcount}}</p>
    <p>{{_getconut}}</p>
    <input type="text" v-model="inval">
  </div>

</template>
<script>
  import {mapState} from 'vuex';
  import {mapGetters} from 'vuex';
  import {mapActions } from 'vuex';
  export default {
    name:"test",
    data:function(){
      return {
        inval:1,
      }
    },
    computed:{
      ...mapState({
        _testcount:(state)=>state.count,
      }),
      ...mapGetters({
        _getconut:'doublecount',
      })
    },
    methods:{
      ...mapActions({
        jiahoandler:'add',
        jianhandler:'del',

      })
    }
  }
</script>
<style scoped>
  #test{
    width:200px;
    height:200px;
    background: red;
  }


</style>
