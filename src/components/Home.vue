<script setup lang="ts">
import { useAuthStore } from "../stores/auth.ts";
import { ref, onUpdated, getCurrentInstance } from "vue";
import { useQuasar } from "quasar";

const store = useAuthStore();
const $q = useQuasar();

onUpdated(() => {
  $q.dark.set(store.persistence.darkMode);
});

function logout() {
  store.logout();
}
</script>

<template>
  <button @click="logout" v-if="!store.persistence.showLogin">Logout</button>
</template>
