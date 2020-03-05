import Vue from 'vue'
import App from './App.vue'
import vuetify from './router/vuetify'
import router from './router/index'
import 'vuetify/dist/vuetify.min.css'
import Vuetify from 'vuetify'

Vue.config.productionTip = false

Vue.use(Vuetify)

new Vue({
  vuetify,
  router,
  render: h => h(App),
}).$mount('#app')





