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
import { ToolName, ToolColor } from "@/enums/ToolColor";
export default {
  name: "ProjectTool",
  props: {
    name: {
      type: ToolName,
      required: true,
    },
  },
  computed: {
    backgroundColor() {
      switch (this.name) {
        case ToolName.ReactJS:
          return ToolColor.ReactJS;
        case ToolName.VueJS:
          return ToolColor.VueJS;
        case ToolName.AngularJS:
          return ToolColor.AngularJS;
        case ToolName.NodeJS:
          return ToolColor.NodeJS;
        case ToolName.SpringBoot:
          return ToolColor.SpringBoot;
        case ToolName.Quarkus:
          return ToolColor.Quarkus;
        case ToolName.PostgreSQL:
          return ToolColor.PostgreSQL;
        case ToolName.MongoDB:
          return ToolColor.MongoDB;
        case ToolName.Redis:
          return ToolColor.Redis;
        default:
          return "bg-gray-200";
      }
    },
    typeTool() {
      switch (this.name) {
        case ToolName.ReactJS:
          return "frontend";
        case ToolName.VueJS:
          return "frontend";
        case ToolName.AngularJS:
          return "frontend";
        case ToolName.NodeJS:
          return "backend";
        case ToolName.SpringBoot:
          return "backend";
        case ToolName.Quarkus:
          return "backend";
        case ToolName.PostgreSQL:
          return "base de données";
        case ToolName.MongoDB:
          return "base de données";
        case ToolName.Redis:
          return "base de données";
        default:
          return "";
      }
    },
  },
};
</script>
