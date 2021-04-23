import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
  beforeCreate() {
    console.log("before")
    this.$store.commit('initialiseStore')
    // this.$store.commit('changeItemState', { text: "Text" })
  }
}).$mount('#app')
