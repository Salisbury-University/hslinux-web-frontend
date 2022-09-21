<script setup lang="ts">
import { ref } from "vue";
import { useAuthStore } from "../stores/auth.ts";

/** Defines a pinia store used for data and actions */
const store = useAuthStore();
</script>

<template>
  <!-- Conditionally render the Preferences input field based on the "showLogin" variable in the store -->
  <div>
    <!-- TODO - store the checked fields in the store -->
    <input type="checkbox" v-model="store.test" id="test" />
    <label for="test"> Test</label><br />
    <div>
      Test :
      {{ store.test }}
    </div>
  </div>
</template>
