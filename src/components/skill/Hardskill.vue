<template>
  <div
    class="rounded-lg w-auto px-6 py-3"
    :style="{ color: color, backgroundColor: bgColor }"
  >
    <div class="items-center text-center">{{ title }}</div>
    <img src="logoPath" />
  </div>
</template>

<script>
export default {
  name: "Hardskill",
  props: {
    title: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    bgColor: {
      type: String,
      required: true,
    },
    logoPath: {
      type: String,
    },
  },
};
</script>
