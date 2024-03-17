<template>
  <div class="drawer">
    <v-navigation-drawer
      v-model="drawer"
      location="right"
    ></v-navigation-drawer>
  </div>
</template>

<script>
export default {
  inject: ["Emitter"],
  data() {
    return {
      drawer: true,
    };
  },
  mounted() {
    this.Emitter.on("openCart", () => {
      this.drawer = !this.drawer;
    });
  },
};
</script>

<style lang="scss" scoped></style>
