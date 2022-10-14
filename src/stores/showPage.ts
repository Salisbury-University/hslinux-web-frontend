import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

export const useShowContent = defineStore("index", {
  state: () => {
    return {
      counter: Number,
    };
  },
  getters: {
    getCounter(state: any): Number {
      return state.counter;
    },
  },
  actions: {
    setCounter(newCounter: Number): void {
      this.counter = newCounter;
    },
  },
});
