<template>
  <div
    v-tooltip.bottom="'ok'"
    class="rounded-lg w-auto px-4 py-1 border-2"
    :style="{
      color: color,
      borderColor: borderColor,
    }"
  >
    <div class="items-center text-center">
      {{ title }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Softskill",
  props: {
    title: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },

    borderColor: {
      type: String,
      required: true,
    },
  },
};
</script>
