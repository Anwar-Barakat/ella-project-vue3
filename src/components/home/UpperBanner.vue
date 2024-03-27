<template>
  <div class="banner">
    <div class="parent">
      <v-container>
        <v-col>
          <h1>Huge Saving on</h1>
          <h1>UHD Television</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi,
            assumenda.
          </p>
          <v-btn density="compact" variant="outlined">Shop Now</v-btn>
        </v-col>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.banner {
  padding-top: 167px;
  .parent {
    height: 400px;
    background: url("../../assets/images/banner-bg.jpg");
    background-position: center center;
    background-size: contain;
  }
}
</style>
