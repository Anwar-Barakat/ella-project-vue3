import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// Vuetify
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
const vuetify = createVuetify({
  components,
  directives,
});

// Pinia
import { createPinia } from "pinia";

// Emitter
import mitt from "mitt";
const Emitter = mitt();

createApp(App)
  .use(vuetify)
  .provide("Emitter", Emitter)
  .use(createPinia())
  .use(router)
  .mount("#app");
