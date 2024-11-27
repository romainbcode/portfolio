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
      descriptionPresentation: "",
      descriptionObjectifs: "",
      descriptionCompetences: "",
      video: "",
      illustrationGoal: "",
      illustrationPresentation: "",
      illustrationStudying: "",
    },
  }),
  actions: {
    setCurrentProject(project: any) {
      this.currentProject = project;
    },
  },
});
