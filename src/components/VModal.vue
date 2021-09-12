<template>
  <portal :to="name">
    <div
      v-if="isOpen"
      class="v-modal"
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
    };
  },
  methods: {
    onBackdropClick() {
      if (this.closeOnBackdropClick) {
        this.onCancel();
      }
    },
    onCancel() {
      this.isOpen = false;
      this.resolveAnswer(false);
    },
    onSubmit() {
      this.isOpen = false;
      this.resolveAnswer(true);
    },
    async open() {
      this.isOpen = true;

      return new Promise((resolve) => {
        this.resolveAnswer = resolve;
      });
    },
  },
};
</script>

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

  border: 30px solid black;
}
</style>
