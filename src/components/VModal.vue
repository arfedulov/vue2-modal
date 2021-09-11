<template>
  <div
    v-if="isOpen"
    class="v-modal"
    @modal-submit="onSubmit"
    @modal-cancel="onCancel"
  >
    <div class="v-modal__backdrop" @click="onBackdropClick"></div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "VModal",
  props: {
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
