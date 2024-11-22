import { defineStore } from "pinia";

export const useProjectStore = defineStore("project", {
  state: () => ({
    currentProject: {
      logo: "",
      url: "",
      titre: "",
      label: "",
      tools: [],
      skills: [],
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
