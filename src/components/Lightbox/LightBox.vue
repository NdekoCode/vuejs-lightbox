<template>
  <div>
    {{ url }}
  </div>
</template>

<script>
import "./LightboxDirective";
export default {
  name: "LightBox",
  data() {
    return {
      url: "??",
    };
  },
};
</script>

<style lang="scss" scoped>
</style>