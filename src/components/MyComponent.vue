<template>
  <section>
    <h2>my component</h2>
    <button @click="openMyModal">open</button>
    <button @click="openMyModal2">open2</button>

    <v-modal ref="myModal" name="my-modal" close-on-backdrop-click>
      <div class="my-modal">
        hello

        <button v-modal-cancel>cancel</button>
        <button v-modal-submit>ok</button>
      </div>
    </v-modal>

    <v-modal ref="myModal2" name="my-modal" close-on-backdrop-click>
      <div class="my-modal">
        hello 2

        <button v-modal-cancel>cancel</button>
        <button v-modal-submit>ok</button>
      </div>
    </v-modal>
  </section>
</template>

<script>
import VModal from "@/components/VModal.vue";

export default {
  name: "MyComponent",
  components: { VModal },
  methods: {
    async openMyModal() {
      const result = await this.$refs.myModal.open();

      console.log(result);
    },
    async openMyModal2() {
      const result = await this.$refs.myModal2.open();

      console.log(result);
    },
  },
};
</script>

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

.my-modal button {
  font-size: inherit;
}
</style>
