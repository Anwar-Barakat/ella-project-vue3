<template>
  <div class="navbar">
    <v-app-bar color="#02218f" height="fit-content">
      <v-container>
        <v-row>
          <v-col cols="3" class="d-flex justify-start">
            <img src="@/assets/images/logo.png" width="200" />
          </v-col>
          <v-col cols="5">
            <input
              type="search"
              placeholder="Search..."
              id="search"
              class="w-100 py-3 px-5 bg-white rounded-xl shadow-none"
            />
          </v-col>
          <v-col cols="4">
            <div
              class="parent text-white d-flex justify-space-between align-center"
            >
              <div
                class="available d-flex flex-column justify-center align-center"
              >
                <span>Available 24/7 at</span>
                <strong>(0123) 123-123</strong>
              </div>
              <div
                class="wishlist d-flex flex-column justify-center align-center"
              >
                <v-icon class="text-main-color">mdi-account</v-icon>
                <strong>Sign In</strong>
              </div>
              <div
                class="wishlist d-flex flex-column justify-center align-center"
              >
                <v-icon class="text-main-color">mdi-heart</v-icon>
                <strong>Wish List</strong>
              </div>
              <div
                class="wishlist d-flex flex-column justify-center align-center"
                @click="openCart"
              >
                <v-icon class="text-main-color">mdi-basket</v-icon>
                <strong>My Cart</strong>
              </div>
            </div>
          </v-col>
        </v-row>
        <v-row class="mt-8 mb-1">
          <v-col cols="8">
            <ul class="list-unstyled d-flex ga-4">
              <li class="text-subtitle-1">Theme Demo</li>
              <li class="text-subtitle-1">Shop</li>
              <li class="text-subtitle-1">Products</li>
              <li class="text-subtitle-1">New In</li>
              <li class="text-subtitle-1">Must Have</li>
              <li class="text-subtitle-1">Collections</li>
              <li class="text-subtitle-1">Collections</li>
            </ul>
          </v-col>
        </v-row>
      </v-container>
      <!-- <v-app-bar-nav-icon @click="openCart"></v-app-bar-nav-icon> -->
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
