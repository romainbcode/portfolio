<template>
  <div class="relative">
    <div class="flex flex-col items-center">
      <div class="flex flex-row justify-center space-x-5 mb-6">
        <div class="w-[50%] flex items-center justify-center">
          <img
            :src="Mac_Mockup"
            alt="Project Image"
            class="h-auto w-full object-contain"
          />
        </div>

        <div class="flex flex-col justify-evenly">
          <div class="flex flex-row items-center justify-between">
            <div
              class="w-full flex flex-row items-center justify-center space-x-5"
            >
              <img
                :src="logo"
                alt="Project Image"
                class="h-auto w-[75px] object-contain"
              />
              <h1 class="font-bold text-3xl">
                {{ titre }}
              </h1>
            </div>

            <!--<Projectlabel :label="label" :is-hovered="false" />-->
          </div>

          <div class="flex flex-col">
            <Divider :align="'left'" type="solid">
              <b>{{ $t("project_details.technical_stack") }}</b>
            </Divider>
            <div class="grid grid-cols-4 gap-2">
              <Projecttool
                v-for="(tool, index) in tools"
                :key="index"
                :name="tool.name"
              />
            </div>
          </div>

          <div class="flex flex-col">
            <Divider :align="'left'" type="solid">
              <b>{{ $t("project_details.tools") }}</b>
            </Divider>
            <div class="grid grid-cols-4 gap-2">
              <Skill
                v-for="(skill, index) in skills"
                :key="index"
                :name="skill.name"
              />
            </div>
          </div>

          <div class="flex flex-row justify-end items-end space-x-4">
            <project-button-github :url="url" />
          </div>
        </div>
      </div>

      <div class="mt-8"></div>

      <Divider
        :pt="{
          root: {
            style: 'border-top-width: 2px; width: 80%', // Épaisseur du trait
          },
        }"
      />

      <div class="flex flex-col w-3/4">
        <div class="flex flex-row items-center justify-between">
          <div class="flex flex-col w-full items-start space-y-5">
            <Telescope :size="40" />
            <h3 class="font-bold text-4xl">
              {{ $t("project_details.title_section_1") }}
            </h3>
            <p>
              {{ descriptionPresentation }}
            </p>
          </div>

          <img :src="illustrationPresentation" class="h-[35rem] w-auto" />
        </div>

        <div class="flex flex-row items-center justify-between">
          <img :src="illustrationGoal" class="h-[35rem] w-auto" />
          <div class="flex flex-col w-full items-start space-y-5">
            <Target :size="40" />
            <h3 class="font-bold text-4xl">
              {{ $t("project_details.title_section_2") }}
            </h3>
            <p>
              {{ descriptionObjectifs }}
            </p>
          </div>
        </div>

        <div class="flex flex-row items-center justify-between">
          <div class="flex flex-col w-full items-start space-y-5">
            <BrainCog :size="40" />
            <h3 class="font-bold text-4xl">
              {{ $t("project_details.title_section_3") }}
            </h3>
            <p>
              {{ descriptionCompetences }}
            </p>
          </div>
          <img :src="illustrationStudying" class="h-[35rem] w-auto" />
        </div>
      </div>

      <Divider
        :pt="{
          root: {
            style: 'border-top-width: 2px; width: 80%', // Épaisseur du trait
          },
        }"
      />

      <div class="mb-8"></div>

      <div class="flex flex-col justify-start w-2/3">
        <div class="flex flex-col items-center w-full">
          <h3 class="font-bold text-4xl">
            {{ $t("project_details.title_section_4") }}
          </h3>
          <p class="text-lg text-gray-400 mt-4">
            {{ $t("project_details.subtitle_section_4") }}
          </p>
        </div>

        <div class="my-5"></div>

        <div id="videoSection">
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
        <Camera class="screenIcon" color="black" :size="25" />
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
import { Telescope } from "lucide-vue-next";
import { Target } from "lucide-vue-next";
import { BrainCog } from "lucide-vue-next";

import { ToolName } from "@/enums/ToolColor";
import { SkillName } from "@/enums/SkillColor";

import Mac_Mockup from "@/assets/mac_mockup.png";
import Goals from "@/assets/goal_illustration.png";
import Presentation from "@/assets/presentation_illustration.png";
import Studying from "@/assets/studying_illustration.png";

export default {
  components: {
    Projectlabel,
    Projecttool,
    ProjectButtonGithub,
    Skill,
    Camera,
    Telescope,
    Target,
    BrainCog,
    Video,
  },
  enums: {
    ToolName,
    SkillName,
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
    console.log(project.value);
    return {
      logo: computed(() => project.value.logo),
      url: computed(() => project.value.url),
      titre: computed(() => project.value.titre),
      label: computed(() => project.value.label),
      tools: computed(() => project.value.tools as { name: ToolName }[]),
      skills: computed(() => project.value.skills as { name: ToolName }[]),
      descriptionPresentation: computed(
        () => project.value.descriptionPresentation
      ),
      descriptionObjectifs: computed(() => project.value.descriptionObjectifs),
      descriptionCompetences: computed(
        () => project.value.descriptionCompetences
      ),
      video: computed(() => project.value.video),
      illustrationGoal: computed(() => project.value.illustrationGoal),
      illustrationPresentation: computed(
        () => project.value.illustrationPresentation
      ),
      illustrationStudying: computed(() => project.value.illustrationStudying),
      Mac_Mockup,
      Goals,
      Studying,
      Presentation,
    };
  },
  methods: {
    scrollToSection() {
      const target = document.getElementById("videoSection");
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
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
