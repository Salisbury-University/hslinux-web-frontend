import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
import http from "../../http";
import { info } from "console";

export const usePageStore = defineStore("page", {
  state: () => {
    return {
      content: [],
    };
  },
  getters: {
    /**
     * get markdown content
     *
     * @param {any} state all state information
     * @returns {string} content state
     */

    getContent(state: any): string {
      return state.content;
    },
  },

  actions: {
    /**
     * set content
     *
     * @param {string} newContent content of markdown
     */

    setContent(newContent: string): void {
      this.content = newContent;
    },

    setPage(): void {
      //two http calls first is to get amount of documents second is to get individual content
      http()
        .get("/api/v1/docs")
        .then((res) => {
          const info = res.data.docs;

          //array for pages
          for (let i = 0; i < info.length; i++) {
            http()
              .get("/api/v1/doc/".concat(info[i]))
              .then((response) => {
                const metadata = response.data;

                this.content = metadata.content;
              });
          }
        });
    },
  },
});
