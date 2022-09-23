<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useAuthStore } from "../stores/auth.ts";
import { useQuasar } from "quasar";
import { SCOPABLE_TYPES } from "@babel/types";

const $q = useQuasar(); // TODO - This can probably be some kind of global variable instead of an instance in every page

const checked = ref(true);

/** Defines a pinia store used for data and actions */
const store = useAuthStore();

// DEBUG vvvvv
function sleep() {
  return new Promise((resolve) => {
    setTimeout(resolve, 10);
  });
}
// DEBUG ^^^^^

// TODO - When the site loads, make sure the checkbox and shit are actually synced up with what's stored in the persistant data store

async function updateDarkMode() {
  // TODO - Very much a bandaid fix right now, but making it sleep like 10ms ensures that the v-model value is updated in time for the updateDarkMode function to work
  //  and use the proper updated value. This should probably be changed to async / await somehow to make it better in the future
  await sleep();

  store.persistence.darkMode = checked.value;

  $q.dark.set(checked.value);
}

function updateDarkModePageLoad() {
  $q.dark.set(store.persistence.darkMode);
}

onMounted(() => {
  checked.value = store.persistence.darkMode;
  // updateDarkModePageLoad();
});
</script>

<template>
  <!-- Conditionally render the Preferences input field based on the "showLogin" variable in the store -->
  <div>
    <!-- TODO - store the checked fields in the store -->
    <input
      type="checkbox"
      v-model="checked"
      @click="updateDarkMode"
      id="darkMode"
      value="value"
    />

    <!-- I need to get the value of the checked value to update the darkMode value in the store, but after that I also need to run the "updateDarkMode" function
    So i need some way to make that run after we update the value, but idk if we can update the value in the function because I don't know how to get the value in
    the function -->

    <label for="darkMode"> Test</label><br />
    <div>
      Test :
      {{ store.persistence.darkMode }}
    </div>
  </div>
</template>
