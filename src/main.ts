import Aura from "@primevue/themes/aura";
import { createPinia } from "pinia";
import { Button, Card, Divider } from "primevue";
import PrimeVue from "primevue/config";
import Tooltip from "primevue/tooltip";
import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import router from "./router";
import i18n from "./i18n";

const pinia = createPinia();
const app = createApp(App);

app.component("Button", Button);
app
  .use(PrimeVue, {
    theme: {
      preset: Aura,
    },
  })
  .use(router)
  .use(pinia)
  .use(i18n)
  .component("Card", Card)
  .component("Divider", Divider)
  .directive("tooltip", Tooltip)
  .mount("#app");
