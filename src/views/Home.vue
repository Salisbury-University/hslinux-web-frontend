<script setup lang="ts">
import { useAuthStore } from "../stores/auth.ts";

const store = useAuthStore();

function logout() {
  store.logout();
}
</script>

<template>
  <q-page>
    <div>
      <button @click="logout" v-if="!store.persistence.showLogin">
        Logout
      </button>
    </div>
  </q-page>
</template>
