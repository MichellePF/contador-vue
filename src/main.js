import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    contador: 0
  },
  mutations: {
    incremento(state){
      state.contador++
    }
  }
})

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
