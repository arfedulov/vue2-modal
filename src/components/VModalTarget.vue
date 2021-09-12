<template>
  <portal-target :name="name" />
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
