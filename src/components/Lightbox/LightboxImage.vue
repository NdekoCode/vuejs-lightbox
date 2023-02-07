<template>
  <div class="">
    <img :src="image" alt="Image" />
  </div>
</template>

<script>
export default {
  name: "LightboxImage",
  props: {
    image: {
      type: String,
    },
  },
};
</script>
