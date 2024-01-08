import { defineStore } from "pinia";

export const useCustomizationStore = defineStore("customizationStore", {
  state: () => ({
    mode: false,
  }),
  actions: {
    modeChange(value) {
      this.mode = value;
      console.log("this.mode", this.mode);
      return this.mode;
    },
  },
});
