import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
// import vueConfig from 'vue.config'
// Vue.config.productionTip = false
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    count: 1,
    sd: 555
  },
  mutations: {
    addFn(state, playload) {
      state.count += playload
    }
  },
  actions: {
    getAsyncCount(context, params) {
      setTimeout(() => {
        context.commit("addFn", params)
      }, 1000);
    }
  }

})
new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
