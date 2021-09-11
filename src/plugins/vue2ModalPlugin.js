const createEvent = (name) => new CustomEvent(name, { bubbles: true });

const submitCallback = (e) => {
  e.target.dispatchEvent(createEvent("modal-submit"));
};

const cancelCallback = (e) => {
  e.target.dispatchEvent(createEvent("modal-cancel"));
};

export const vue2ModalPlugin = {
  install: (Vue) => {
    Vue.directive("modal-submit", {
      bind(el) {
        el.addEventListener("click", submitCallback);
      },
      unbind(el) {
        el.removeEventListener("click", submitCallback);
      },
    });

    Vue.directive("modal-cancel", {
      bind: function (el) {
        el.addEventListener("click", cancelCallback);
      },
      unbind(el) {
        el.removeEventListener("click", cancelCallback);
      },
    });
  },
};
