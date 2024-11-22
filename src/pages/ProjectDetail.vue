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
          <div class="grid grid-cols-4 gap-2">
            <Skill
              v-for="(skill, index) in skills"
              :key="index"
              :name="skill.name"
            />
          </div>
          <div class="flex flex-row justify-end items-end space-x-4">
            <project-button-github :url="url" />
          </div>
        </div>
      </div>

      <div class="flex flex-col justify-start w-2/3">
        <h3 class="font-bold text-2xl">
          {{ $t("project_details.title_section_1") }}
        </h3>
        <Divider />
        <p class="description-text">{{ descriptionObjectifs }}</p>

        <div class="my-8"></div>

        <h3 class="font-bold text-2xl">
          {{ $t("project_details.title_section_2") }}
        </h3>
        <Divider />
        <p>{{ descriptionCompetences }}</p>

        <div class="my-8"></div>
        <div id="videoSection">
          <h3 class="font-bold text-2xl">
            {{ $t("project_details.title_section_3") }}
          </h3>
          <Divider />

          <div class="h-[80vh]">
            <Video :mp4="video"></Video>
          </div>
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
import { useRouter } from "vue-router";

import { watch, computed } from "vue";
import { useProjectStore } from "@/stores/projectStore";
import Divider from "primevue/divider";

import ProjectButtonGithub from "@/components/project/ProjectButtonGithub.vue";
import Skill from "@/components/skill/Skill.vue";

import Projectlabel from "@/components/project/Projectlabel.vue";
import Projecttool from "@/components/project/Projecttool.vue";
import Video from "@/components/Video.vue";

import { Camera } from "lucide-vue-next";

export default {
  components: {
    Projectlabel,
    Projecttool,
    ProjectButtonGithub,
    Skill,
    Camera,
    Video,
  },
  setup() {
    const router = useRouter();
    const projectStore = useProjectStore();

    const project = computed(() => projectStore.currentProject);

    watch(
      project,
      (newProject) => {
        if (newProject.titre === "") {
          router.push("/");
        }
      },
      { immediate: true }
    );

    return {
      logo: computed(() => project.value.logo),
      url: computed(() => project.value.url),
      titre: computed(() => project.value.titre),
      label: computed(() => project.value.label),
      tools: computed(() => project.value.tools),
      skills: computed(() => project.value.skills),
      descriptionObjectifs: computed(() => project.value.descriptionObjectifs),
      descriptionCompetences: computed(
        () => project.value.descriptionCompetences
      ),
      video: computed(() => project.value.video),
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

.description-text {
  white-space: pre-line;
}
</style>
