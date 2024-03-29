import Vue from "vue";
import App from "./App.vue";
import locale from "element-ui/lib/locale";
import lang from "element-ui/lib/locale/lang/en";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import Avue from "@smallwei/avue";
import "@smallwei/avue/lib/index.css";
import axios from "axios";
import VueProgress from "vue-progress-path";
import NProgress from "vue-nprogress";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Import Bootstrap and BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

locale.use(lang);
Vue.config.productionTip = false;
Vue.use(ElementUI, { locale });
Vue.use(Avue);
Vue.use(Avue, { axios });
Vue.use(VueProgress);
Vue.use(NProgress);

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
const nprogress = new NProgress();

window.axios = axios;

new Vue({
  nprogress,
  render: (h) => h(App),
}).$mount("#app");
