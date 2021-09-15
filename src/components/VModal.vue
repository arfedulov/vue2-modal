<template>
  <portal :to="target">
    <div
      v-if="isOpen"
      class="v-modal"
      role="dialog"
      aria-modal="true"
      :style="modalStyles"
      @modal-submit="onSubmit"
      @modal-cancel="onCancel"
    >
      <div
        class="v-modal__backdrop"
        :style="combinedBackdropStyles"
        @click="onBackdropClick"
      ></div>
      <slot></slot>
    </div>
  </portal>
</template>

<script>
const getPrimaryElement = () =>
  document.querySelector("[data-modal-submit-button]") ||
  document.querySelector("[data-modal-cancel-button]");

const DEFAULT_BACKDROP_STYLES = {
  background: "grey",
  opacity: "0.3",
};

export default {
  name: "VModal",
  props: {
    target: {
      type: String,
      required: true,
    },
    closeOnBackdropClick: {
      type: Boolean,
      default: false,
    },
    backdropStyles: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      isOpen: false,
      resolveAnswer: null,
      lastFocus: null,
      vh100: null,
    };
  },
  computed: {
    modalStyles() {
      return { "--vh100": this.vh100 };
    },
    combinedBackdropStyles() {
      return {
        ...DEFAULT_BACKDROP_STYLES,
        ...this.backdropStyles,
      };
    },
  },
  created() {
    this.recalculateVH();
    this.setResizeListener();
  },
  beforeDestroy() {
    this.removeResizeListener();
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
    recalculateVH() {
      this.vh100 = `${window.innerHeight}px`;
    },
    setResizeListener() {
      window.addEventListener("resize", this.recalculateVH);
    },
    removeResizeListener() {
      window.removeEventListener("resize", this.recalculateVH);
    },
  },
};
</script>

<style>
.v-modal-noscroll {
  overflow: hidden !important;
}
</style>

<style scoped>
.v-modal {
  position: fixed;
  z-index: 2147483647;
  left: 0;
  top: 0;
  width: 100vw;
  height: var(--vh100);
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
}
</style>
