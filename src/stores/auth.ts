import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";
import http from "../http";

export const useAuthStore = defineStore("useAuthStore", {
  state: () => {
    return {
      nonpersistence: {
        uid: "cxarausa",
        password: "testing",
        baseURL: "http://localhost:3005",
      },
      persistence: useLocalStorage("auth", {
        token: "",
        showLogin: true,
      }),
    };
  },
  actions: {
    login() {
      http()
        .post("/api/v1/auth/login", {
          uid: this.nonpersistence.uid,
          password: this.nonpersistence.password,
        })
        .then((response) => {
          this.persistence.token = response.data.token;
          this.persistence.showLogin = false;
          // Clean up debug
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    logout() {
      this.persistence.token = "";
      this.persistence.showLogin = true;
    },
  },
});
