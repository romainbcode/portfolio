<template>
  <nav
    class="z-10 fixed top-4 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-md px-6 py-3 w-auto"
  >
    <div class="flex justify-center items-center">
      <RouterLink
        to="/"
        class="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-300 px-2 rounded-md hover:bg-blue-50"
      >
        {{ $t("nav.home") }}
      </RouterLink>
      <button
        v-tooltip.bottom="$t('nav.translate')"
        class="flex items-center ml-4"
        @click="changeLanguage($t('nav.langue'))"
      >
        <img :src="showFlag" class="w-auto h-5" />
      </button>
    </div>
  </nav>
</template>

<script lang="ts">
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";

import Flag_FR from "@/assets/flag_fr.png";
import Flag_US from "@/assets/flag_us.jpg";

import { computed } from "vue";

export default {
  name: "Navbar",
  setup() {
    const { locale, t } = useI18n();
    const router = useRouter();

    const changeLanguage = (langue: string) => {
      locale.value = langue;
      localStorage.setItem("language", langue);
      router.push({
        name: "Home",
      });
    };

    const showFlag = computed<string>(() => {
      switch (t("nav.langue")) {
        case "fr":
          return Flag_FR;
        case "en":
          return Flag_US;
        default:
          return "";
      }
    });

    return { changeLanguage, showFlag };
  },
};
</script>
