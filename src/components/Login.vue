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
  console.log("Login Mounted");
});

function submit() {
  store.login();
}

function logout() {
  store.logout();
}
</script>

<template>
  <!-- Conditionally render the Login input field based on the "showLogin" variable in the store -->
  <q-page v-if="store.persistence.showLogin">
    <!--- User ID -->
    <div>
      <!--- Data directly v-modeled into the "uid" value of the store, so updates in real time -->
      <p>Username</p>
      <input v-model="store.uid" placeHolder="Type here" />
    </div>

    <!--- User Password -->
    <div>
      <!--- Data directly v-modeled into the "password" value of the store, so updates in real time -->
      <p>Password</p>
      <input type="password" v-model="store.password" placeHolder="Type here" />
    </div>

    <!--- Password submit -->
    <div>
      <!--- Uses the "submit" function defined in the pinia store -->
      <button @click="submit">Submit</button>
    </div>
  </q-page>
</template>
