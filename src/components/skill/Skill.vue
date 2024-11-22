<template>
  <div
    class="text-sm rounded-xl px-3 py-0.5 text-black text-center"
    v-tooltip.bottom="typeTool"
    :class="backgroundColor"
  >
    {{ name }}
  </div>
</template>

<script lang="ts">
import { SkillName, SkillColor } from "@/enums/SkillColor";
import { useI18n } from "vue-i18n";

import { computed } from "vue";
export default {
  name: "Skill",
  props: {
    name: {
      type: SkillName,
      required: true,
    },
  },
  setup(props) {
    const { t } = useI18n();

    const backgroundColor = computed(() => {
      switch (props.name) {
        case SkillName.AGILE:
          return SkillColor.AGILE;
        case SkillName.PipelineGitlab:
          return SkillColor.PipelineGitlab;
        case SkillName.Trello:
          return SkillColor.Trello;
        case SkillName.Docker:
          return SkillColor.Docker;
        case SkillName.Git:
          return SkillColor.Git;
        case SkillName.Figma:
          return SkillColor.Figma;
        case SkillName.MicroServices:
          return SkillColor.MicroServices;
        case SkillName.GoogleApis:
          return SkillColor.GoogleApis;
        case SkillName.WebScraping:
          return SkillColor.WebScraping;
        default:
          return "#FFF";
      }
    });

    const typeTool = computed(() => {
      switch (props.name) {
        case SkillName.AGILE:
          return t("skills.methodology");
        case SkillName.PipelineGitlab:
          return "devops";
        case SkillName.Trello:
          return t("skills.project_management");
        case SkillName.Docker:
          return "devops";
        case SkillName.Git:
          return "versionning";
        case SkillName.Figma:
          return "design";
        case SkillName.MicroServices:
          return "architecture";
        case SkillName.GoogleApis:
          return "service";
        case SkillName.WebScraping:
          return "JSP";
        default:
          return "";
      }
    });

    return {
      t,
      backgroundColor,
      typeTool,
    };
  },
};
</script>
