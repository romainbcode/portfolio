import Aura from "@primevue/themes/aura";
import { Button, Card } from "primevue";
import PrimeVue from "primevue/config";
import Tooltip from "primevue/tooltip";
import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import router from "./router";

const app = createApp(App);

app.component("Button", Button);
app
  .use(PrimeVue, {
    theme: {
      preset: Aura,
    },
  })
  .use(router)
  .component("Card", Card)
  .directive("tooltip", Tooltip)
  .mount("#app");
