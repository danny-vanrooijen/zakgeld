import { defineStore } from "pinia";

export const useGlobalStore = defineStore("main", {
  state: () => ({ showDetails: false, activePerson: null }),
});
