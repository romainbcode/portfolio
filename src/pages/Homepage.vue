<template>
  <div class="mx-auto m-0 w-5/6">
    <div class="flex flex-col md:flex-row justify-center center-item w-full">
      <div class="flex flex-col justify-center items-center md:max-w-[40rem]">
        <div class="text-center md:text-start space-y-10">
          <h1
            class="text-3xl md:text-6xl font-bold tracking-wide leading-tight"
          >
            {{ $t("home.title_1") }}<br />
            <span class="relative">
              <span
                class="absolute -inset-x-3 bottom-1 h-9 md:h-12 bg-gray-300 -z-10"
              ></span>
              {{ $t("home.title_2") }}
            </span>
          </h1>

          <div class="block md:hidden">
            <div class="md:ml-5 flex items-center justify-center">
              <div class="photo_profil_mouvement"></div>
            </div>
          </div>
          <p class="text-lg text-gray-500 my-4 text-justify space-y-2">
            {{ $t("home.description_1") }}
            <span>{{ $t("home.description_2") }}</span>
            <Br />
            <span> {{ $t("home.description_3") }}</span>
          </p>
        </div>
        <div class="w-full mt-10">
          <div class="flex flex-row justify-center items-center justify-center">
            <SocialNetwork />
            <img :src="franceLogo" alt="France logo" class="h-auto w-[40px]" />
          </div>
        </div>
      </div>
      <div class="hidden md:block">
        <div class="ml-5 flex items-center justify-center">
          <div class="photo_profil_mouvement"></div>
        </div>
      </div>
    </div>

    <div class="my-5"></div>

    <div class="flex flex-col items-center w-full">
      <Divider
        :pt="{
          root: {
            style: 'border-top-width: 2px; width: 80%; border-color: #e5e7eb', // Épaisseur du trait
          },
        }"
      />

      <div class="h-[2rem]"></div>

      <div class="flex flex-col items-center w-full">
        <h3 class="font-bold text-2xl md:text-4xl">
          {{ $t("home.title_section_2") }}
        </h3>
        <p class="text-base md:text-lg text-gray-400 mt-4 text-justify">
          {{ $t("home.subtitle_section_4") }}
        </p>
      </div>

      <div class="h-[4rem]"></div>

      <div class="flex-col mb-10 w-2/3">
        <div class="my-4 grid gap-10 flex justify-center">
          <Project
            :id="'1'"
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
            :mockup="MacMockupEduvolution"
            :illustrationGoal="IllustrationEduvolutionGoal"
            :illustrationPresentation="IllustrationEduvolutionPresentation"
            :illustrationStudying="IllustrationEduvolutionStudying"
            :video="VideoEduvolution"
          />

          <Project
            :id="'2'"
            :photo="pari"
            :url="'https://github.com/romainbcode/PFE-Forma'"
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
            :mockup="MacMockupPari"
            :illustrationGoal="IllustrationPariGoal"
            :illustrationPresentation="IllustrationPariPresentation"
            :illustrationStudying="IllustrationPariStudying"
            :video="VideoPari"
          />

          <Project
            :id="'3'"
            :photo="LogoIAAgentImmob"
            :url="'https://github.com/romainbcode/TP_Projet_AgentImmobilierIA'"
            :label="$t('project_3.label')"
            :title="$t('project_3.title')"
            :description="$t('project_3.description')"
            :tools="[
              { name: ToolName.ReactJS },
              { name: ToolName.Python },
              { name: ToolName.IntelligenceArtificielle },
            ]"
            :skills="[
              { name: SkillName.Figma },
              { name: SkillName.MicroServices },
              { name: SkillName.Git },
            ]"
            :mockup="MacMockupIAAgentImmobGoal"
            :illustrationGoal="IllustrationIAAgentImmobGoal"
            :illustrationPresentation="IllustrationIAAgentImmobPresentation"
            :illustrationStudying="IllustrationIAAgentImmobStudying"
            :video="VideoIAAgentImmob"
          />
        </div>
      </div>
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
import LogoIAAgentImmob from "@/assets/project_logo/IA-AgentImmob.png";

import Project from "@/components/project/Project.vue";
import ProjectTool from "@/components/project/Projecttool.vue";
import Skill from "@/components/skill/Skill.vue";
import SocialNetwork from "@/components/SocialNetwork.vue";

import MacMockupEduvolution from "@/assets/mac_mockup/mac_mockup_Eduvolution.png";
import IllustrationEduvolutionGoal from "@/assets/illustrations_Eduvolution/illustration_Eduvolution_goal.png";
import IllustrationEduvolutionPresentation from "@/assets/illustrations_Eduvolution/illustration_Eduvolution_presentation.png";
import IllustrationEduvolutionStudying from "@/assets/illustrations_Eduvolution/illustration_Eduvolution_studying.png";
import VideoEduvolution from "@/assets/project_video/PFE.mp4";

import MacMockupPari from "@/assets/mac_mockup/mac_mockup_Pari.png";
import IllustrationPariGoal from "@/assets/illustrations_Pari/illustration_Pari_goal.png";
import IllustrationPariPresentation from "@/assets/illustrations_Pari/illustration_Pari_presentation.png";
import IllustrationPariStudying from "@/assets/illustrations_Pari/illustration_Pari_studying.png";
import VideoPari from "@/assets/project_video/Pari.mp4";

import MacMockupIAAgentImmobGoal from "@/assets/mac_mockup/mac_mockup_IA-AgentImmob.png";
import IllustrationIAAgentImmobGoal from "@/assets/illustrations_IA-AgentImmob/illustration_IA-AgentImmob_goal.png";
import IllustrationIAAgentImmobPresentation from "@/assets/illustrations_IA-AgentImmob/illustration_IA-AgentImmob_presentation.png";
import IllustrationIAAgentImmobStudying from "@/assets/illustrations_IA-AgentImmob/illustration_IA-AgentImmob_studying.png";
import VideoIAAgentImmob from "@/assets/project_video/IA-AgentImmob.mp4";

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
      LogoIAAgentImmob,
      ToolName,
      SkillName,
      VideoEduvolution,
      MacMockupEduvolution,
      IllustrationEduvolutionGoal,
      IllustrationEduvolutionPresentation,
      IllustrationEduvolutionStudying,
      VideoPari,
      MacMockupPari,
      IllustrationPariGoal,
      IllustrationPariPresentation,
      IllustrationPariStudying,
      VideoIAAgentImmob,
      MacMockupIAAgentImmobGoal,
      IllustrationIAAgentImmobGoal,
      IllustrationIAAgentImmobPresentation,
      IllustrationIAAgentImmobStudying,
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
  height: 25rem;
  position: relative;
  transition: all 1s ease-in-out;
  width: 25rem;
}

@media (max-width: 768px) {
  .photo_profil_mouvement {
    height: 20rem;
    width: 20rem;
  }
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
