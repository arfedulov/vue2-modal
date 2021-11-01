<template>
  <portal-target :name="name" slim />
</template>

<script>
export default {
  name: "VModalTarget",
  props: {
    name: {
      type: String,
      required: true,
    },
  },
};
</script>
