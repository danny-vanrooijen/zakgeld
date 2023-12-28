import { defineStore } from "pinia";
import { Person } from "@/models/Person";

interface GlobalState {
  showDetails: boolean;
  activePerson: Person | null;
}

export const useGlobalStore = defineStore("main", {
  state: (): GlobalState => ({ showDetails: false, activePerson: null }),
});
