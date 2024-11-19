<template>
  <div class="mx-auto m-0 w-5/6">
    <div class="flex flex-row justify-evenly center-item">
      <div class="flex flex-col justify-center items-center">
        <h1 class="text-5xl font-bold tracking-wide leading-tight">
          Ingénieur logiciel <br />
          <span class="relative">
            <span
              class="absolute inset-x-0 bottom-1 h-9 bg-gray-300 -z-10"
            ></span>
            full stack
          </span>
        </h1>
        <p class="text-md text-gray-500 my-4">
          Je suis Romain BIZOT, diplomé en Juillet 2024.
        </p>
        <SocialNetwork />
      </div>
      <div class="photo_profil_mouvement"></div>
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
        <Vue3Marquee direction="reverse" duration=14 pauseOnHover="true">
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
        :photo="pari"
        :label="'web'"
        :title="'Paris sportif'"
        :description="'Paris sportif avec une monnaie virtuelle remplis de données récupérés via web scrapping'"
        :tools="[
          { name: ToolName.VueJS },
          { name: ToolName.NodeJS },
          { name: ToolName.NodeJS },
          { name: ToolName.NodeJS },
          { name: ToolName.NodeJS },
        ]"
      />
      <Project
        :id="2"
        :photo="PFE"
        :label="'web'"
        :title="`Projet fin d'étude`"
        :description="'Description of Project A'"
        :tools="[
          { name: ToolName.ReactJS },
          { name: ToolName.NodeJS },
          { name: ToolName.MongoDB },
        ]"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Github } from "lucide-vue-next";
import { Linkedin } from "lucide-vue-next";

import { Vue3Marquee } from "vue3-marquee";

import angularLogo from "@/assets/angular_logo.png";

import pari from "@/assets/project_logo/pari.png";
import PFE from "@/assets/project_logo/PFE.png";

import Project from "@/components/project/Project.vue";
import ProjectTool from "@/components/project/Projecttool.vue";
import Softskill from "@/components/skill/Softskill.vue";
import Skill from "@/components/skill/Skill.vue";

import { ToolName } from "@/enums/ToolColor";
import { SkillName } from "@/enums/SkillColor";

import SocialNetwork from "@/components/SocialNetwork.vue";

export default {
  enums: {
    ToolName,
  },
  components: {
    Github,
    Linkedin,
    Vue3Marquee,
    Project,
    Softskill,
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
      ],
    };
  },
  setup() {
    return { angularLogo, pari, PFE, ToolName };
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
