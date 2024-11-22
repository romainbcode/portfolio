<template>
  <div
    class="relative flex flex-row max-w-[800px] rounded-xl bg-white p-1"
    :class="hoverStyle"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
    @click="navigateToDetail"
  >
    <Projectlabel
      :label="label"
      :is-hovered="isHovered"
      class="absolute top-2 -right-8"
    />
    <div class="w-1/4 flex items-center justify-center ml-1">
      <img
        :src="photo"
        alt="Project Image"
        class="h-auto w-full object-contain"
      />
    </div>

    <div class="w-3/4 flex flex-col align-start justify-center my-1 mx-4">
      <h2 class="text-xl font-bold mb-2 text-4xl">{{ title }}</h2>
      <TruncatedDescription :description="description" />
      <div class="flex flex-col space-y-2">
        <div class="flex flex-row space-x-2">
          <Projecttool
            v-for="(tool, index) in tools"
            :key="index"
            :name="tool.name"
          />
        </div>
        <div class="flex flex-row space-x-2">
          <Skill
            v-for="(skill, index) in skills"
            :key="index"
            :name="skill.name"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useRouter } from "vue-router";

import { ToolName } from "@/enums/ToolColor";
import { SkillName } from "@/enums/SkillColor";

import Projectlabel from "@/components/project/Projectlabel.vue";
import Projecttool from "@/components/project/Projecttool.vue";
import Skill from "@/components/skill/Skill.vue";
import TruncatedDescription from "@/components/TruncatedDescription.vue";

import { useProjectStore } from "@/stores/projectStore";

import { useI18n } from "vue-i18n";

export default {
  name: "Project",
  enums: {
    ToolName,
    SkillName,
  },
  components: {
    Projectlabel,
    Projecttool,
    Skill,
    TruncatedDescription,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    tools: [
      {
        name: {
          type: ToolName,
          required: true,
        },
      },
    ],
    skills: [
      {
        name: {
          type: SkillName,
          required: true,
        },
      },
    ],
    video: {
      type: String,
      required: true,
    },
  },
  computed: {
    hoverStyle() {
      return {
        "cursor-pointer": this.isHovered,
        "bg-slate-200": this.isHovered,
      };
    },
  },
  setup(props) {
    const router = useRouter();
    const projectStore = useProjectStore();
    const { t } = useI18n();
    const navigateToDetail = () => {
      projectStore.setCurrentProject({
        logo: props.photo,
        titre: t("project_" + props.id + ".title"),
        label: props.label,
        tools: props.tools,
        skills: props.skills,
        descriptionObjectifs: t(
          "project_details_" + props.id + ".description_section_1"
        ),
        descriptionCompetences: t(
          "project_details_" + props.id + ".description_section_2"
        ),
        video: props.video,
      });

      router.push({
        name: "ProjectDetail",
        params: { id: props.id },
      });
    };

    return {
      navigateToDetail,
    };
  },
  data() {
    return {
      isHovered: false,
    };
  },
};
</script>
