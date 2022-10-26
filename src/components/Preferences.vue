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

// TODO - When logging out, clear the persistent storage so that we go back to light mode

async function buffer() {
  // Temporary for now maybe? We have to have a tiny buffer window between the v-model update and refereshing the page, or else it'll refresh using
  // the old value
  await sleep();
}

onUpdated(() => {
  buffer();
  console.log("Test");

  $q.dark.set(store.persistence.darkMode);
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
