import Vue from 'vue'
import App from './App.vue'
import locale from 'element-ui/lib/locale'
import lang from 'element-ui/lib/locale/lang/en'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
locale.use(lang)
Vue.config.productionTip = false
Vue.use(ElementUI, { locale })

new Vue({
  render: h => h(App),
}).$mount('#app')
