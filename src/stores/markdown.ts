import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
import http from "../../http";
import { marked } from "marked";
import { useAuthStore } from "./auth";

export const usePageStore = defineStore("page", {
  state: () => {
    return {
      name: [],
      content: [],
      pageIndex: -1,
      arraySize: 0,
      persistence: useStorage("page", {
        headers: {
          Authorization: "Bearer ",
        },
      }),
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

    /**
     * get file title
     * @param {any} state all state information
     * @returns {string} title state
     */
    getTitle(state: any): string {
      return state.name;
    },

    /**
     *
     */
    getPageIndex(state: any): Number {
      return state.pageIndex;
    },

    getArraySize(state: any): Number {
      return state.arraySize;
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

    /**
     * set title
     *
     * @param {string} newName
     */

    setTitle(newName: string): void {
      this.name = newName;
    },

    setPageIndex(newPageIndex: Number) {
      this.pageIndex = newPageIndex;
    },

    setArraySize(newArraySize: Number) {
      this.arraySize = newArraySize;
    },

    setPage(): void {
      //two http calls first is to get amount of documents second is to get individual content
      http()
        .get("/api/v1/docs", {
          headers: {
            Authorization: "Bearer " + useAuthStore().$state.persistence.token,
          },
        })
        .then((res) => {
          const docData = res.data.docs;

          this.arraySize = docData.length;

          //array for pages
          for (let i = 0; i < docData.length; i++) {
            http()
              .get("/api/v1/doc/".concat(docData[i]), {
                headers: {
                  Authorization:
                    "Bearer " + useAuthStore().$state.persistence.token,
                },
              })
              .then((response) => {
                const markContent = response.data;
                const metadata = markContent.metadata;

                //metadata
                this.name[i] = metadata.title;
                this.content[i] = marked.parse(markContent.content);
              });
          }
        });
    },

    /** When logging out, set all values to their original (this gets rid of old file buttons on sidebar when logging out) */
    onLogout() {
      this.name = [];
      this.content = [];
      this.pageIndex = -1;
      this.arraySize = 0;
    },
  },
});
