import { defineStore } from "pinia";

export const useCustomizationStore = defineStore("customizationStore", {
  state: () => ({
    mode: localStorage.getItem("mode"),
  }),
  actions: {
    modeChange(value) {
      this.mode = value;

      localStorage.setItem("mode", this.mode);

      // return this.mode;
    },
  },
});
