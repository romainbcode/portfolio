<template></template>

<script lang="ts">
import { SkillName, SkillColor } from "@/enums/SkillColor";
export default {
  name: "Skill",
  props: {
    name: {
      type: ToolName,
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
      }
    },
  },
};
</script>
