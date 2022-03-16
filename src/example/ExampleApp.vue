<template>
  <div class="app">
    <header class="header"></header>
    <example-component />

    <p class="text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec
      ligula finibus, faucibus turpis ac, mollis urna. Donec semper odio non
      fringilla luctus. Curabitur a sagittis dolor. In hac habitasse platea
      dictumst. Sed facilisis, neque a tincidunt vulputate, ipsum magna
      imperdiet augue, ut malesuada tellus enim in lorem. Maecenas venenatis
      erat rutrum, faucibus ligula eget, lobortis arcu. Nam tempus purus quis
      tempus varius. Fusce condimentum, arcu vel faucibus tempus, lectus metus
      congue neque, vel semper mauris lectus et purus. Sed iaculis risus eu
      ligula hendrerit venenatis. Sed tempus, nisl ac blandit luctus, turpis dui
      mattis sapien, vitae suscipit eros mauris sit amet massa. Praesent a arcu
      sed nibh aliquet porttitor. Praesent efficitur vitae tortor vel viverra.
      Cras at velit auctor, consequat urna in, facilisis justo. Fusce auctor,
      urna et lobortis imperdiet, erat velit placerat arcu, nec euismod tortor
      erat quis est. Ut magna quam, dapibus sed posuere sit amet, rhoncus sit
      amet arcu. Cras lobortis condimentum turpis non bibendum. Nunc nec posuere
      sem, sit amet dignissim magna. Praesent quis accumsan massa. Donec eget
      orci ultricies, vestibulum velit sed, commodo justo. Orci varius natoque
      penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer
      ut rhoncus tellus. Curabitur pretium lorem et euismod semper. Vestibulum
      facilisis diam non justo hendrerit cursus ut id neque. Fusce posuere eros
      tortor, et dapibus lacus imperdiet ut. Donec suscipit ipsum nec velit
      imperdiet consectetur. Nullam dapibus dui est, viverra aliquam lorem
      malesuada aliquet. Pellentesque habitant morbi tristique senectus et netus
      et malesuada fames ac turpis egestas. Maecenas aliquam nulla quis mi
      eleifend commodo. Nullam vulputate rutrum lacus ut lacinia. Quisque sit
      amet massa auctor, ullamcorper erat at, dignissim ante. Duis a metus
      magna. Donec suscipit iaculis nisi in tincidunt. Sed congue velit sed eros
      dapibus elementum. Integer a magna vel erat semper sollicitudin. Duis
      pulvinar cursus condimentum. Donec eros velit, malesuada eget aliquam sit
      amet, placerat eget magna. Nunc ac placerat urna, vitae blandit elit.
      Nulla dignissim, tellus in pharetra bibendum, quam sem tincidunt sapien,
      eget venenatis enim elit vitae justo. Morbi et orci urna. Ut eu eleifend
      mauris, vitae iaculis ante. Aliquam blandit felis ac suscipit lacinia.
      Vivamus scelerisque urna lectus, eu condimentum urna semper vel. Praesent
      justo lorem, feugiat quis orci sit amet, posuere fermentum metus. Cras
      sodales lobortis tempor. Phasellus id finibus felis. Sed porta molestie
      dui. Maecenas ultricies orci elit, et feugiat eros sodales tempus. Sed
      quam quam, auctor vel venenatis sit amet, feugiat sed sem. Suspendisse vel
      tempor dolor. Vestibulum et neque non odio tristique tincidunt et id
      dolor. Nam suscipit laoreet sem, eu mattis nisl ultricies at. Vivamus at
      egestas leo. Pellentesque egestas ante turpis, in efficitur odio pretium
      a. Nullam facilisis urna sed ante vehicula, eget egestas mauris molestie.
      Vestibulum at mauris sagittis, condimentum sem a, porta nunc. Sed non
      lectus quam. Maecenas molestie elementum tellus, sed porta purus tempus
      at. Nulla ut orci placerat, maximus enim sit amet, finibus diam.
      Pellentesque suscipit maximus pharetra. Fusce non ante viverra quam
      rhoncus porta ac at velit. In id leo porttitor dolor mattis dapibus.
      Pellentesque sit amet pellentesque lacus.
    </p>

    <footer class="footer"></footer>

    <v-modal-target name="my-modal" class="my-modal-target" />
  </div>
</template>

<script>
import ExampleComponent from "@/example/ExampleComponent.vue";

export default {
  name: "ExampleApp",
  components: {
    ExampleComponent,
  },
};
</script>

<style>
.app {
  position: relative;
  padding: 100px 0 200px 0;
}

.text {
  font-size: 32px;
  line-height: 1.4em;
}

.header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background-color: lightcoral;
  z-index: 1000;
}

.footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 200px;
  background-color: lightgreen;
  z-index: 1000;
}
</style>
