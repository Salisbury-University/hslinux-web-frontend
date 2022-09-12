import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";
import http from "../http";

/** This is a pinia store that keeps track of all persistent data */

export const useAuthStore = defineStore("useAuthStore", {
  state: () => {
    return {
      nonpersistence: {
        uid: "cxarausa",
        password: "testing",
        baseURL: "http://localhost:3005", // The url that the site will try to send POST and GET requests to
      },
      persistence: useLocalStorage("auth", {
        token: "", // Stored token for a logged in user
        showLogin: true, // Used as reference as to whether the "login" input field should be shown on the login page
      }),
    };
  },
  actions: {
    /** Login function : Send a POST request to the specified api path,
     *    attempting to use the uid and password from the input field.
     *    On successful login, catches and stores a unique token and
     *      disables the "login" input field variable.
     *    In event of an error, logs the appropriate error message that was
     *      caught out to the console
     */
    login() {
      http()
        .post("/api/v1/auth/login", {
          uid: this.nonpersistence.uid,
          password: this.nonpersistence.password,
        })
        .then((response) => {
          this.persistence.token = response.data.token;
          this.persistence.showLogin = false;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    /** Lougout Function : Clears the user's token, and enables the "login"
     *    input field variable */
    logout() {
      this.persistence.token = "";
      this.persistence.showLogin = true;
    },
  },
});