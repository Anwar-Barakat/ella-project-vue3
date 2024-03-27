<template>
  <div class="home">
    <UpperBanner />
  </div>
</template>

<script>
import UpperBanner from "@/components/home/UpperBanner.vue";

// @ is an alias to /src

export default {
  name: "HomeView",
  components: {
    UpperBanner,
  },
};
</script>
