import Vue from "vue";
import ExampleApp from "./example/ExampleApp.vue";
import Vue2Modal from "../index";

Vue.config.productionTip = false;
Vue.use(Vue2Modal);

new Vue({
  render: (h) => h(ExampleApp),
}).$mount("#app");
