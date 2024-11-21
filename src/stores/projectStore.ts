import { defineStore } from "pinia";

export const useProjectStore = defineStore("project", {
  state: () => ({
    currentProject: {
      logo: "",
      titre: "",
      label: "",
      tools: [],
      descriptionObjectifs: "",
      descriptionCompetences: "",
      video: "",
    },
  }),
  actions: {
    setCurrentProject(project: any) {
      this.currentProject = project;
    },
  },
});
