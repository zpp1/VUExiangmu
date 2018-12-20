<template>
  <div id="xiangqing">
    {{_xiangqingcount}}
  </div>
</template>
<script>
  import {mapState} from 'vuex';
  export default{
    name:"xiangqing",
    data:function(){
      return{

      }
    },
    computed:{
      ...mapState({
        _xiangqingcount:(state)=>state.count,
      })
    }
  }
</script>
<style scoped>
  #xiangqing{
    width:200px;
    height:100px;
    background: red;
  }

</style>
