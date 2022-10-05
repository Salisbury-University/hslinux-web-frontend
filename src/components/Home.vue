<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useAuthStore } from "../stores/auth.ts";
import { useQuasar } from "quasar";

const store = useAuthStore();
const $q = useQuasar();

function updateDarkMode() {
  $q.dark.set(store.persistence.darkMode);
}

onMounted(() => {
  updateDarkMode();
  console.log("Home Mounted");
});

function logout() {
  store.logout();
}
</script>

<template>
  <button @click="logout" v-if="!store.persistence.showLogin">Logout</button>
</template>
