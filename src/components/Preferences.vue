<script setup lang="ts">
import { ref, onUpdated, getCurrentInstance } from "vue";
import { useAuthStore } from "../stores/auth.ts";
import { useQuasar } from "quasar";
import { SCOPABLE_TYPES } from "@babel/types";

const store = useAuthStore();
const $q = useQuasar();

function sleep() {
  return new Promise((resolve) => {
    setTimeout(resolve, 10);
  });
}

async function buffer() {
  // Temporary for now maybe? We have to have a tiny buffer window between the v-model update and refereshing the page, or else it'll refresh using
  // the old value
  await sleep();
}

onUpdated(() => {
  buffer();
  console.log("Test");

  // TODO - Right now, this is included because when we update the dark mode we want to reflect the change immediately
  // without having to refresh the page, but if we can somehow stealth-refresh the page then we can get rid of this and
  // just have it refresh on the HomeLayout when it mounts like normal
});
</script>

<template>
  <div>
    <!-- Conditionally render the Preferences input field based on the "showLogin" variable in the store -->
    <input
      type="checkbox"
      v-model="store.persistence.darkMode"
      id="darkMode"
      value="value"
    />
    <label for="darkMode"> Dark Mode</label><br />
  </div>
</template>
