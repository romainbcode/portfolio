<template>
  <div
    class="flex justify-center items-center inline-block text-sm rounded-xl px-3 py-0.5 text-black text-center"
    v-tooltip.bottom="typeTool"
    :class="backgroundColor"
  >
    {{ name }}
  </div>
</template>

<script lang="ts">
import { ToolName, ToolColor } from "@/enums/ToolColor";
import { useI18n } from "vue-i18n";

import { computed } from "vue";
export default {
  name: "ProjectTool",
  props: {
    name: {
      type: ToolName,
      required: true,
    },
  },
  setup(props: any) {
    const { t } = useI18n();

    const backgroundColor = computed<string>(() => {
      switch (props.name) {
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
        case ToolName.Python:
          return ToolColor.Python;
        case ToolName.IntelligenceArtificielle:
          return ToolColor.IntelligenceArtificielle;
        case ToolName.PostgreSQL:
          return ToolColor.PostgreSQL;
        case ToolName.MongoDB:
          return ToolColor.MongoDB;
        case ToolName.Redis:
          return ToolColor.Redis;
        default:
          return "bg-gray-200";
      }
    });

    const typeTool = computed<string>(() => {
      switch (props.name) {
        case ToolName.ReactJS:
        case ToolName.VueJS:
        case ToolName.AngularJS:
          return "frontend";
        case ToolName.NodeJS:
        case ToolName.SpringBoot:
        case ToolName.Quarkus:
        case ToolName.Python:
        case ToolName.IntelligenceArtificielle:
          return "backend";
        case ToolName.PostgreSQL:
        case ToolName.MongoDB:
        case ToolName.Redis:
          return t("tool.database");
        default:
          return "autre";
      }
    });
    return { t, backgroundColor, typeTool };
  },
};
</script>
