import vue from 'vue';
import vuex from 'vuex';
vue.use(vuex);
const store=new vuex.Store({
  state:{
    'count':1,

  },
  mutations:{
    addc:function(store,s){
      store.count=s;
},



  },
  getters:{
    doublecount:function(store){
      return store.count+'元';

    }

  },
  actions:{
    add:function(context,s){
      if(s){

        context.state.count+=Number(s);
      }else{
        context.state.count++;
      }
      context.commit('addc', context.state.count);
    },
    del(context,s){
      if(s){
        context.state.count-=Number(s);
      }else{
        context.state.count--;
      }
      context.commit('addc', context.state.count);
    }
  },
})
export default store;
