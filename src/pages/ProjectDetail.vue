<template>
  <div class="relative">
    <div class="flex flex-col items-center">
      <div class="flex flex-row justify-center space-x-5 mb-6">
        <div class="w-[30%] flex items-center justify-center">
          <img
            :src="logo"
            alt="Project Image"
            class="h-auto w-full object-contain"
          />
        </div>

        <div class="flex flex-col justify-evenly">
          <div class="flex flex-row items-center justify-between mb-6">
            <h1 class="font-bold text-3xl">
              {{ titre }}
            </h1>
            <Projectlabel :label="label" :is-hovered="false" />
          </div>
          <div class="grid grid-cols-4 gap-2">
            <Projecttool
              v-for="(tool, index) in tools"
              :key="index"
              :name="tool.name"
            />
          </div>
          <div class="flex flex-row justify-end items-end space-x-4">
            <project-button-github url="" />
          </div>
        </div>
      </div>

      <div class="flex flex-col justify-start">
        <h3 class="font-bold text-2xl">Objectifs du projet</h3>
        <Divider />
        <p>{{ descriptionObjectifs }}</p>

        <div class="my-8"></div>

        <h3 class="font-bold text-2xl">Compétences travaillées</h3>
        <Divider />
        <p>{{ descriptionCompetences }}</p>

        <div class="my-8"></div>
        <div id="videoSection">
          <h3 class="font-bold text-2xl">Présentation visuel du projet</h3>
          <Divider />

          <div class="h-[80vh]"></div>
          <!--<Video :mp4="require(`@/assets/project_video/video.mp4`)" />-->
        </div>
      </div>
    </div>

    <div
      class="fixed right-10 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4"
    >
      <button @click="scrollToSection" class="button">
        <Camera class="screenIcon" color="black" size="25" />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { computed } from "vue";
import { useProjectStore } from "@/stores/projectStore";
import Divider from "primevue/divider";

import ProjectButtonGithub from "@/components/project/ProjectButtonGithub.vue";

import Projectlabel from "@/components/project/Projectlabel.vue";
import Projecttool from "@/components/project/Projecttool.vue";
import Video from "@/components/Video.vue";

import { Camera } from "lucide-vue-next";

export default {
  components: {
    Projectlabel,
    Projecttool,
    ProjectButtonGithub,
    Camera,
    Video,
  },
  setup() {
    const projectStore = useProjectStore();

    const project = computed(() => projectStore.currentProject);
    return {
      logo: computed(() => project.value.logo),
      titre: computed(() => project.value.titre),
      label: computed(() => project.value.label),
      tools: computed(() => project.value.tools),
      descriptionObjectifs: computed(() => project.value.descriptionObjectifs),
      descriptionCompetences: computed(
        () => project.value.descriptionCompetences
      ),
    };
  },
  methods: {
    scrollToSection() {
      const target = document.getElementById("videoSection");
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    },
  },
};
</script>

<style>
.button {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: white;
  border: none;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 0px 2px rgb(207, 207, 207);
  cursor: pointer;
  transition-duration: 0.3s;
  overflow: hidden;
  position: relative;
}

.screenIcon {
  transition-duration: 0.3s;
}

.svgIcon path {
  fill: white;
}

.button:hover {
  width: 140px;
  border-radius: 50px;
  transition-duration: 0.3s;
  background-color: rgb(167, 167, 167);
  align-items: center;
}

.button:hover .screenIcon {
  /* width: 20px; */
  transition-duration: 0.3s;
  transform: translateY(-200%);
}

.button::before {
  position: absolute;
  bottom: -20px;
  content: "Voir la vidéo";
  color: white;
  /* transition-duration: .3s; */
  font-size: 0px;
}

.button:hover::before {
  font-size: 13px;
  opacity: 1;
  bottom: unset;
  /* transform: translateY(-30px); */
  transition-duration: 0.3s;
}
</style>
