<template>
  <div
    class="inline-block px-5 py-0.5 rounded-xl transition-all duration-500 ease-out font-bold"
    :class="[bgColorClass]"
    :style="[animationStyle, { 'text-transform': 'uppercase' }]"
  >
    {{ label }}
  </div>
</template>

<script>
export default {
  name: "ProjectLabel",
  props: {
    label: {
      type: String,
      required: true,
      validator: (value) => ["web", "mobile"].includes(value),
    },
    isHovered: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    bgColorClass() {
      return {
        "bg-blue-200 text-blue-700": this.label === "web",
        "bg-green-200 text-green-700": this.label === "mobile",
      };
    },
    animationStyle() {
      return {
        transform: this.isHovered
          ? "translateX(20px) rotate(2deg)"
          : "translateX(0) rotate(0deg)",
        opacity: this.isHovered ? "0.9" : "1",
      };
    },
  },
};
</script>
