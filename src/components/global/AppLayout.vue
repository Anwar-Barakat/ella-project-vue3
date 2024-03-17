<template>
  <div class="layout">
    <v-layout>
      <AppDrawer />
      <AppNav />

      <v-main>
        <slot></slot>
      </v-main>

      <AppFooter />
    </v-layout>
  </div>
</template>

<script>
import AppDrawer from "./AppDrawer.vue";
import AppFooter from "./AppFooter.vue";
import AppNav from "./AppNav.vue";

export default {
  data() {
    return {
      drawer: false,
    };
  },
  components: {
    AppNav,
    AppFooter,
    AppDrawer,
  },
};
</script>
