<template>
  <div class="px-2 py-0.5 rounded-lg bg-gray-200">
    <a :href="url" target="_blank" class="cursor-pointer">
      {{ $t("buttons_label.github") }}
    </a>
  </div>
</template>

<script>
export default {
  name: "ProjectButtonGithub",
  props: {
    url: {
      type: String,
      required: true,
    },
  },
};
</script>
