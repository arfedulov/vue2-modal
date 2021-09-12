<template>
  <portal :to="name">
    <div
      v-if="isOpen"
      class="v-modal"
      role="dialog"
      aria-modal="true"
      @modal-submit="onSubmit"
      @modal-cancel="onCancel"
    >
      <div class="v-modal__backdrop" @click="onBackdropClick"></div>
      <slot></slot>
    </div>
  </portal>
</template>

<script>
// TODO: prepare package
// TODO: add examples in storybook
// TODO: add tests
// TODO: add documentation

const getPrimaryElement = () =>
  document.querySelector("[data-modal-submit-button]") ||
  document.querySelector("[data-modal-cancel-button]");

export default {
  name: "VModal",
  props: {
    name: {
      type: String,
      required: true,
    },
    closeOnBackdropClick: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isOpen: false,
      resolveAnswer: null,
      lastFocus: null,
    };
  },
  methods: {
    onBackdropClick() {
      if (this.closeOnBackdropClick) {
        this.onCancel();
      }
    },
    onCancel() {
      this.close();
      this.resolveAnswer(false);
    },
    onSubmit() {
      this.close();
      this.resolveAnswer(true);
    },
    takeFocus() {
      this.lastFocus = document.activeElement;
      const primaryElement = getPrimaryElement();

      if (primaryElement) {
        primaryElement.focus();
      }
    },
    releaseFocus() {
      this.lastFocus.focus();
      this.lastFocus = null;
    },
    async open() {
      this.isOpen = true;
      this.disableDocumentScroll();
      this.takeFocus();

      return new Promise((resolve) => {
        this.resolveAnswer = resolve;
      });
    },
    close() {
      this.enableDocumentScroll();
      this.isOpen = false;
      this.releaseFocus();
    },
    disableDocumentScroll() {
      document.body.classList.add("v-modal-noscroll");
    },
    enableDocumentScroll() {
      document.body.classList.remove("v-modal-noscroll");
    },
  },
};
</script>

<style>
.v-modal-noscroll {
  overflow: hidden;
}
</style>

<style scoped>
.v-modal {
  position: fixed;
  z-index: 2147483647;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh; /* TODO: handle mobile  case */
}

.v-modal,
.v-modal * {
  box-sizing: border-box;
}

.v-modal__backdrop {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: var(--v-modal-backdrop-background, grey);
  opacity: var(--v-modal-backdrop-opacity, 0.3);
}
</style>
