<template>
  <div class="drawer">
    <v-navigation-drawer
      v-model="drawer"
      location="right"
      temporary=""
    ></v-navigation-drawer>
  </div>
</template>

<script>
export default {
  inject: ["Emitter"],
  data() {
    return {
      drawer: false,
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
