<template>
  <section>
    <h2>my component</h2>
    <button @click="openMyModal">open</button>
    <button @click="openMyModal2">open2</button>
    <button @click="openAnimatedModal">open animated</button>

    <v-modal ref="myModal" target="my-modal" close-on-backdrop-click>
      <div class="my-modal">
        hello

        <button v-modal-cancel>cancel</button>
        <button v-modal-submit>ok</button>
      </div>
    </v-modal>

    <v-modal
      ref="myModal2"
      target="my-modal"
      :backdrop-styles="{ background: 'red' }"
      close-on-backdrop-click
    >
      <div class="my-modal">
        hello 2

        <button v-modal-cancel>cancel</button>
        <button v-modal-submit>ok</button>
      </div>
    </v-modal>

    <v-modal
      ref="modalAnimated"
      target="my-modal"
      :backdrop-styles="{ background: 'red' }"
      close-on-backdrop-click
      transition-name="slide"
      @open="isAnimatedModalOpen = true"
      @close="isAnimatedModalOpen = false"
    >
      <div class="my-animated-modal" :class="animatedModalClasses">
        hello animated

        <button v-modal-cancel>cancel</button>
        <button v-modal-submit>ok</button>
      </div>
    </v-modal>
  </section>
</template>

<script>
export default {
  name: "ExampleComponent",
  data() {
    return {
      isAnimatedModalOpen: false,
    };
  },
  computed: {
    animatedModalClasses() {
      return {
        "my-animated-modal--closed": !this.isAnimatedModalOpen,
        "my-animated-modal--open": this.isAnimatedModalOpen,
      };
    },
  },
  methods: {
    async openMyModal() {
      const result = await this.$refs.myModal.open();

      console.log(result);
    },
    async openMyModal2() {
      const result = await this.$refs.myModal2.open();

      console.log(result);
    },
    async openAnimatedModal() {
      const result = await this.$refs.modalAnimated.open();

      console.log(result);
    },
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 1s ease-out;
}
.slide-enter,
.slide-leave-to {
  transform: translateX(100%);
}
</style>

<style scoped>
.my-modal {
  width: 600px;
  max-width: 100%;
  font-size: 60px;

  background-color: white;

  position: absolute;
  top: 33%;
  left: 50%;
  transform: translateX(-50%);
}

.my-modal button,
.my-animated-modal button {
  font-size: inherit;
}

.my-animated-modal {
  width: 600px;
  max-width: 100%;
  font-size: 60px;

  background-color: white;

  position: absolute;
  top: 33%;
  left: 50%;
  transform: translateX(-50%);
  transition: opacity 1s ease-in;
}
</style>
