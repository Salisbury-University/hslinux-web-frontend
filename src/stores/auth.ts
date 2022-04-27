import { defineStore } from "pinia";
import http from "../http";

export const useAuthStore = defineStore("useAuthStore", {
  state: () => {
    return {
      uid: "",
      password: "",
      baseURL: "http://localhost:3000",
      token: "",
    };
  },
  actions: {
    login() {
      http()
        .post("/api/v1/auth/login", {
          uid: this.uid,
          password: this.password,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
});
