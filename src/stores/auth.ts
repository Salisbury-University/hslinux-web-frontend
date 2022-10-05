import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";
import http from "../http";

/** This is a pinia store that keeps track of all data */

export const useAuthStore = defineStore("useAuthStore", {
  state: () => {
    return {
      nonpersistence: {
        uid: " ",
        password: " ",
        baseURL: "http://localhost:3005", // The url that the site will try to send POST and GET requests to
        loginurl: "/api/v1/auth/login",
      },
      persistence: useLocalStorage("auth", {
        token: "", // Stored token for a logged in user
        showLogin: true, // Controls whether pages relating to logging in/out or being logged in should be shown
        // Preferences
        darkMode: false,
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
      // DEBUG vvv
      // This makes it so we don't need to talk with the backend to get a "real" login
      this.persistence.showLogin = false;
      // DEBUG ^^^

      http()
        .post(this.nonpersistence.loginurl, {
          uid: this.nonpersistence.uid,
          password: this.nonpersistence.password,
        })
        .then((response) => {
          this.persistence.token = response.data.token;
          this.persistence.showLogin = false;
        })
        .catch(function (error) {
          //console.log(error);
        });
    },
    /** Logout Function : Clears the user's token, and enables the "login"
     *    input field variable */
    logout() {
      this.persistence.token = "";
      this.persistence.showLogin = true;
    },
    setDarkMode() {
      // TODO - Make dark mode actually make it D A R K
    },
  },
});
