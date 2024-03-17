<template>
  <div class="navbar">
    <v-app-bar>
      <v-app-bar-nav-icon @click="openCart"></v-app-bar-nav-icon>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  inject: ["Emitter"],
  methods: {
    openCart() {
      this.Emitter.emit("openCart");
    },
  },
};
</script>
