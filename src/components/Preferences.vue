<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useAuthStore } from "../stores/auth.ts";
import { useQuasar } from "quasar";
import { SCOPABLE_TYPES } from "@babel/types";

const $q = useQuasar(); // TODO - This can probably be some kind of global variable instead of an instance in every page

/** Defines a pinia store used for data and actions */
const store = useAuthStore();

// DEBUG vvvvv
function sleep() {
  return new Promise((resolve) => {
    setTimeout(resolve, 10);
  });
}
// DEBUG ^^^^^

async function updateDarkMode() {
  // TODO - Very much a bandaid fix right now, but making it sleep like 10ms ensures that the v-model value is updated in time for the updateDarkMode function to work
  //  and use the proper updated value. This should probably be changed to async / await somehow to make it better in the future
  await sleep();

  $q.dark.set(store.persistence.darkMode);
}

function updateDarkModePageLoad() {
  $q.dark.set(store.persistence.darkMode);
}

onMounted(() => {
  updateDarkModePageLoad(); // Update theme
});
</script>

<template>
  <!-- Conditionally render the Preferences input field based on the "showLogin" variable in the store -->
  <div>
    <!-- TODO - store the checked fields in the store -->
    <input
      type="checkbox"
      v-model="store.persistence.darkMode"
      @click="updateDarkMode"
      id="darkMode"
      value="value"
    />
    <label for="darkMode"> Dark Mode</label><br />
    <div>
      Test :
      {{ store.persistence.darkMode }}
    </div>
  </div>
</template>
