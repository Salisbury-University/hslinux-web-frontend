<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useAuthStore } from "../stores/auth.ts";
import { useQuasar } from "quasar";
import { SCOPABLE_TYPES } from "@babel/types";

const store = useAuthStore();
const $q = useQuasar(); // TODO - This can probably be some kind of global variable instead of an instance in every page

function sleep() {
  return new Promise((resolve) => {
    setTimeout(resolve, 10);
  });
}

async function updateDarkMode() {
  await sleep();

  $q.dark.set(store.persistence.darkMode);
}

onMounted(() => {
  updateDarkMode();
  console.log("Preferences Mounted");
});
</script>

<template>
  <div>
    <!-- Conditionally render the Preferences input field based on the "showLogin" variable in the store -->
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
