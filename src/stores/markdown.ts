import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
import http from "../../http";
import { marked } from "marked";

export const usePageStore = defineStore("page", {
  state: () => {
    return {
      name: [],
      content: [],
      pageIndex: -1,
      persistence: useStorage("page", {
        header: {
          Authorization: "",
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
      console.log(this.pageIndex);
    },

    setPage(): void {
      //two http calls first is to get amount of documents second is to get individual content
      http()
        .get("/api/v1/docs")
        .then((res) => {
          const docData = res.data.docs;

          //array for pages
          for (let i = 0; i < docData.length; i++) {
            http()
              .get("/api/v1/doc/".concat(docData[i]))
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
  },
});
