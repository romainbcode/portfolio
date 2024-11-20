<template>
  <div
    class="text-sm rounded-xl px-3 py-0.5 text-black"
    v-tooltip.bottom="typeTool"
    :class="backgroundColor"
  >
    {{ name }}
  </div>
</template>

<script lang="ts">
import { SkillName, SkillColor } from "@/enums/SkillColor";
export default {
  name: "Skill",
  props: {
    name: {
      type: SkillName,
      required: true,
    },
  },

  computed: {
    backgroundColor() {
      switch (this.name) {
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
        case SkillName.WebScrapping:
          return SkillColor.WebScrapping;
        default:
          return "#FFF";
      }
    },
    typeTool() {
      switch (this.name) {
        case SkillName.AGILE:
          return "méthodologie";
        case SkillName.PipelineGitlab:
          return "devops";
        case SkillName.Trello:
          return "gestion de projet";
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
        case SkillName.WebScrapping:
          return "JSP";
        default:
          return "";
      }
    },
  },
};
</script>
