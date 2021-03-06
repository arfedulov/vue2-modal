import PortalVue from "portal-vue";
import VModalTarget from "../components/VModalTarget";
import VModal from "../components/VModal";

const createEvent = (name) => new CustomEvent(name, { bubbles: true });

const submitCallback = (e) => {
  e.target.dispatchEvent(createEvent("modal-submit"));
};

const cancelCallback = (e) => {
  e.target.dispatchEvent(createEvent("modal-cancel"));
};

const addBooleanDataAttribute = (element, attributeName) => {
  element.dataset[attributeName] = "";
};

export default {
  install: (Vue) => {
    Vue.directive("modal-submit", {
      bind(el) {
        el.addEventListener("click", submitCallback);
        addBooleanDataAttribute(el, "modalSubmitButton");
      },
      unbind(el) {
        el.removeEventListener("click", submitCallback);
      },
    });

    Vue.directive("modal-cancel", {
      bind: function (el) {
        el.addEventListener("click", cancelCallback);
        addBooleanDataAttribute(el, "modalCancelButton");
      },
      unbind(el) {
        el.removeEventListener("click", cancelCallback);
      },
    });

    Vue.component("VModalTarget", VModalTarget);
    Vue.component("VModal", VModal);

    Vue.use(PortalVue);
  },
};
