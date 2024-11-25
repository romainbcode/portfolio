<template>
  <p
    ref="descriptionRef"
    class="text-sm text-gray-400 mb-4 max-w-[500px] line-clamp-2"
  >
    {{ truncatedDescription }}
  </p>
</template>

<script>
export default {
  name: "TruncatedDescription",
  props: {
    description: {
      type: String,
      default: "",
    },
    maxWidth: {
      type: Number,
      default: 400,
    },
    maxLines: {
      type: Number,
      default: 2,
    },
  },
  data() {
    return {
      descriptionRef: false,
    };
  },
  computed: {
    truncatedDescription() {
      if (this.description.length <= 200) return this.description;
      return this.description.slice(0, 200) + "...";
    },
  },
};
</script>

<style>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
