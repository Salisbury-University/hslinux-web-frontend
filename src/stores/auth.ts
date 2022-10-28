import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";
import http from "../http";

/** This is a pinia store that keeps track of all data */

export const useAuthStore = defineStore("useAuthStore", {
  state: () => {
    return {
      nonpersistence: {
        uid: "",
        password: "",
        baseURL: "http://localhost:3005", // The url that the site will try to send POST and GET requests to
        loginurl: "/api/v1/auth/login",
        preferenceRoute: "/api/v1/preferences",
      },
      persistence: useLocalStorage("auth", {
        token: "", // Stored token for a logged in user
        showLogin: true, // Controls whether pages relating to logging in/out or being logged in should be shown
        /* Preferences */
        darkMode: false,
        currentText: 0x000000,
        lightText: 0x000000,
        darkText: 0xffffff,
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
        .post(this.nonpersistence.loginurl, {
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
    /** Logout Function : Clears the user's token, and enables the "login"
     *    input field variable */
    logout() {
      this.persistence.token = "";
      this.persistence.showLogin = true;
      this.persistence.darkMode = false;
    },
    setDarkMode() {
      // TODO - Send a POST request to the backend preference route, with the value that we want to set
      // console.log("Pinia store");

      http()
        .post(this.nonpersistence.preferenceRoute, {})
        .then((response) => {})
        .catch(function (error) {});
    },
    getDarkMode() {
      // TODO - Send a GET request to the backend preference route to RETRIEVE the user's dark mode pref
      console.log("Getting Dark moded");

      if (this.nonpersistence.uid == "Alice") {
        this.persistence.darkMode = true;
      } else if (this.nonpersistence.uid == "Bob") {
        this.persistence.darkMode = false;
      }

      http()
        .get(this.nonpersistence.preferenceRoute, {})
        .then((response) => {
          // TEMPROARY
          // this.persistence.darkMode = true;
          // For now, just log the response data darkmode
          // In the future, make it so we read this and
          // console.log(response.data.preferences.darkmode);  // Might come in as a string maybe
          // I believe this will set the currently loaded value of darkmode to the user's pref in the database
          // this.persistence.darkMode = response.data.darkmode;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
});
