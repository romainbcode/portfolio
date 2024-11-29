<template>
  <div class="p-2 bg-white border-2 rounded-xl border-black">
    <div>
      <div v-if="!isVideoReady" class="loader">Chargement de la vidéo...</div>
      <video
        controls
        @canplay="handleVideoReady"
        :style="{ display: isVideoReady ? 'block' : 'none' }"
      >
        <source :src="mp4" type="video/mp4" />
      </video>
    </div>
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
  data() {
    return {
      isVideoReady: false,
    };
  },
  methods: {
    handleVideoReady() {
      this.isVideoReady = true;
    },
  },
};
</script>

<style scoped>
.loader {
  /* Styles de votre loader */
  text-align: center;
  padding: 20px;
}
</style>
