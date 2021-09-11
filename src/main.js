import Vue from "vue";
import App from "./App.vue";

import { vue2ModalPlugin } from "./plugins/vue2ModalPlugin";

Vue.config.productionTip = false;
Vue.use(vue2ModalPlugin);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
