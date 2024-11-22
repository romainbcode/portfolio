<template>
  <div class="mx-auto m-0 w-5/6">
    <div class="flex flex-row justify-center center-item w-full">
      <div class="flex flex-col justify-center items-center w-3/5">
        <h1 class="text-5xl font-bold tracking-wide leading-tight">
          {{ $t("home.title_1") }}<br />
          <span class="relative">
            <span
              class="absolute inset-x-0 bottom-1 h-9 bg-gray-300 -z-10"
            ></span>
            {{ $t("home.title_2") }}
          </span>
        </h1>
        <p class="text-md text-gray-500 my-4 text-justify space-y-2 w-3/4">
          {{ $t("home.description_1") }}
          <span>{{ $t("home.description_2") }}</span>
          <Br />
          <span> {{ $t("home.description_3") }}</span>
        </p>
        <div class="w-3/4">
          <div class="flex flex-row justify-evenly items-center justify-center">
            <SocialNetwork />
            <p class="flex flex-row items-center space-x-2">
              <span>Lyon</span>
              <img
                :src="franceLogo"
                alt="France logo"
                class="h-auto w-[40px]"
              />
            </p>
          </div>
        </div>
      </div>
      <div class="w-2/5">
        <div class="photo_profil_mouvement"></div>
      </div>
    </div>
    <div class="flex justify-center">
      <div class="my-20 w-[60%]">
        <Vue3Marquee direction="normal" duration="15" pauseOnHover="true">
          <div class="flex space-x-8">
            <div v-for="(softskill, index) in softskills" :key="index">
              <ProjectTool :name="softskill.name" />
            </div>
          </div>
          <div class="px-4"></div>
        </Vue3Marquee>
        <div class="my-4"></div>
        <Vue3Marquee direction="reverse" duration="14" pauseOnHover="true">
          <div class="flex space-x-8">
            <div v-for="(skill, index) in skills" :key="index">
              <Skill :name="skill.name" />
            </div>
          </div>
          <div class="px-4"></div>
        </Vue3Marquee>
      </div>
    </div>

    <div class="my-4 grid gap-4 flex justify-center">
      <Project
        :id="1"
        :photo="PFE"
        :url="'https://github.com/romainbcode/PFE-Forma'"
        :label="$t('project_1.label')"
        :title="$t('project_1.title')"
        :description="$t('project_1.description')"
        :tools="[
          { name: ToolName.ReactJS },
          { name: ToolName.NodeJS },
          { name: ToolName.MongoDB },
        ]"
        :skills="[
          { name: SkillName.Figma },
          { name: SkillName.MicroServices },
          { name: SkillName.Git },
          { name: SkillName.GoogleApis },
          { name: SkillName.Trello },
        ]"
        :video="PFE_video"
      />

      <Project
        :id="2"
        :photo="pari"
        :label="$t('project_2.label')"
        :title="$t('project_2.title')"
        :description="$t('project_2.description')"
        :tools="[
          { name: ToolName.VueJS },
          { name: ToolName.Python },
          { name: ToolName.Redis },

          //METTRE la base relationnel
        ]"
        :skills="[
          {
            name: SkillName.Git,
          },
          { name: SkillName.MicroServices },
          { name: SkillName.WebScraping },
        ]"
        :video="PFE_video"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { SkillName } from "@/enums/SkillColor";
import { ToolName } from "@/enums/ToolColor";

import { Vue3Marquee } from "vue3-marquee";

import franceLogo from "@/assets/france_logo.png";
import pari from "@/assets/project_logo/pari.png";
import PFE from "@/assets/project_logo/PFE.png";

import Project from "@/components/project/Project.vue";
import ProjectTool from "@/components/project/Projecttool.vue";
import Skill from "@/components/skill/Skill.vue";
import SocialNetwork from "@/components/SocialNetwork.vue";

import PFE_video from "@/assets/project_video/PFE.mp4";

export default {
  components: {
    Vue3Marquee,
    Project,
    Skill,
    ProjectTool,
    SocialNetwork,
  },
  data() {
    return {
      softskills: [
        {
          name: ToolName.VueJS,
        },
        {
          name: ToolName.NodeJS,
        },
        {
          name: ToolName.SpringBoot,
        },
        {
          name: ToolName.AngularJS,
        },
        {
          name: ToolName.Quarkus,
        },
        {
          name: ToolName.Python,
        },
        {
          name: ToolName.IntelligenceArtificielle,
        },
        {
          name: ToolName.PostgreSQL,
        },
        {
          name: ToolName.ReactJS,
        },
        {
          name: ToolName.MongoDB,
        },
        {
          name: ToolName.Redis,
        },
      ],
      skills: [
        {
          name: SkillName.AGILE,
        },
        {
          name: SkillName.PipelineGitlab,
        },
        {
          name: SkillName.Trello,
        },
        {
          name: SkillName.Docker,
        },
        {
          name: SkillName.Git,
        },
        {
          name: SkillName.Figma,
        },
        {
          name: SkillName.MicroServices,
        },
      ],
    };
  },
  setup() {
    return {
      franceLogo,
      pari,
      PFE,
      ToolName,
      SkillName,
      PFE_video,
    };
  },
};
</script>
<style>
.photo_profil_mouvement {
  animation: morph 10s ease-in-out infinite;
  background-image: url("C:\Users\r.bizot\Documents\test\test\src\assets\photo_profil_romain-removebg.png");
  background-position: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  border: 3px solid #2d2e32;
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  height: 20rem;
  position: relative;
  transition: all 1s ease-in-out;
  width: 20rem;
}
@keyframes morph {
  0% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }
  50% {
    border-radius: 40% 60% 70% 40% / 50% 60% 30% 60%;
  }
  100% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }
}
</style>
