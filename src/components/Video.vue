<template>
  <div class="video-wrap">
    <video controls>
      <source :src="mp4" type="video/mp4" />
    </video>
  </div>
</template>
<script>
export default {
  name: "Video",
  props: {
    mp4: {
      type: String,
      required: true,
    },
  },
};
</script>
