# vue2-modal

## why so ugly

This is a vue component for creating your modal windows. It is
designed to be highly customizable in its appearance so it goes
almost without any styling. It is a responsibility of a user of this
package to provide css for your component.

So what is the responsibility of this package then? It provides
the core functionality of modal windows, like the following:

- opens over the main document;
- disables the access to main document (navigation, scrolling etc.);
- has a backdrop which may obcure the underlying page content (for
  focusing user attention on the modal content);
- allows receiving yes/no response from a user;
- utilizes ARIA means;

[See example](https://www.w3.org/TR/wai-aria-practices-1.1/examples/dialog-modal/dialog.html)

## why "vue2"

This package relies on [portal-vue](https://www.npmjs.com/package/portal-vue) library wich brings portals in vue2. vue3 has portals included in core library so we don't need to use any additional dependencies if we want to use portals in vue3.

## some examples

In your _main.js_ file:

```js
import { Vue2Modal } from "@arfedulov/vue2-modal";

Vue.use(Vue2Modal);
```

In your application root:

```js
import { VModalTarget } from "@arfedulov/vue2-modal";
```

```html
<template>
  <div>
    <!-- this is the palce where your modals will be mounted at -->
    <v-modal-target name="the-name-of-the-target" />
  </div>
</template>
```

In multiple components of your application you may
have something like this:

```html
<template>
  <div>
    <button @click="openMyModal">open</button>

    <v-modal
      ref="myModal"
      target="the-name-of-the-target"
      close-on-backdrop-click
    >
      <div class="my-modal">
        Agree?

        <button v-modal-cancel>cancel</button>
        <button v-modal-submit>ok</button>
      </div>
    </v-modal>
  </div>
</template>
```

```js
import { VModal } from "@arfedulov/vue2-modal";

export default {
  components: { VModal },
  methods: {
    async openMyModal() {
      const result = await this.$refs.myModal.open();

      console.log(result); // `true` or `false`
    },
  },
};
```

## API

### css custom properties

- `--v-modal-backdrop-background`
- `--v-modal-backdrop-opacity`

### v-modal properties

- `target` - the name of the modal's target
- `close-on-backdrop-click`

### direcitves

- `v-modal-submit` - mark a submit button
- `v-modal-cancel` - mark a cancel button
