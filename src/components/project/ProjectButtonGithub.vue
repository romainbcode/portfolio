<template>
  <div class="group relative inline-block">
    <a
      :href="url"
      target="_blank"
      rel="noopener noreferrer"
      class="flex items-center gap-2 px-3.5 py-1.5 bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-gray-300 rounded-md transition-all duration-300 ease-in-out"
    >
      <span class="text-sm text-gray-600 font-medium">
        {{ $t("buttons_label.github") }}
      </span>
      <img
        :src="LogoGithub"
        class="h-4 w-auto transition-transform duration-300 group-hover:rotate-6"
        alt="GitHub Logo"
      />
    </a>
  </div>
</template>

<script>
import LogoGithub from "@/assets/logo_github.png";
export default {
  props: {
    url: {
      type: String,
      required: true,
    },
  },
  setup() {
    return { LogoGithub };
  },
};
</script>
