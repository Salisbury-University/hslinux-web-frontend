<script setup lang="ts">
import { ref } from "vue";
import { useAuthStore } from "../stores/auth.ts";

/** Defines a pinia store used for data and actions */
const store = useAuthStore();
</script>

<template>
  <!-- Conditionally render the Preferences input field based on the "showLogin" variable in the store -->
  <q-page v-if="store.persistence.showLogin">
    <div>
      <input type="checkbox" id="test" />
      <label for="test"> Test</label><br />
    </div>
  </q-page>
</template>
