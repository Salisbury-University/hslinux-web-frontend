<script setup lang="ts">
import { useAuthStore } from "../stores/auth";
import { usePageStore } from "../stores/markdown";
import Login from "./Login.vue";
const store = useAuthStore();
function submit() {
  store.login();
}
function logout() {
  usePageStore().onLogout();
  store.logout();
}
</script>

<template>
  <!--
    TODO: Validate token? 
    TODO: Change styling of box
  -->

  <!-- if token is not set, show login box -->
  <!-- row class with margin on top, left, and right, all medium size -->
  <div
    v-if="!store.$state.persistence.token"
    class="row q-mt-md q-ml-xl q-mr-xl q-mb-xl"
  >
    <q-form @submit="submit()">
      <Login />
    </q-form>
  </div>
  <!-- if token is not set, TODO: show user info?? -->
  <div v-if="store.$state.persistence.token" class="column">
    <div>Logged in!</div>
    <q-btn @click="logout">Logout!</q-btn>
  </div>
</template>
