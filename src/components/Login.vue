<script setup lang="ts">
import { useAuthStore } from "../stores/auth.ts";

const store = useAuthStore();

// TODO - Properly V-Model the auth ts stuff, when it's hardcoded it works fine

function submit() {
  store.login();
}
</script>

<template>
  <!-- Conditionally render the Login input field based on the "showLogin" variable in the store -->
  <q-page v-if="store.persistence.showLogin">
    <!--- User ID -->
    <div>
      <!--- Data directly v-modeled into the "uid" value of the store, so updates in real time -->
      <p>Username</p>
      <input v-model="store.nonpersistence.uid" placeHolder="Type here" />
    </div>

    <!--- User Password -->
    <div>
      <!--- Data directly v-modeled into the "password" value of the store, so updates in real time -->
      <p>Password</p>
      <input
        type="password"
        v-model="store.nonpersistence.password"
        placeHolder="Type here"
      />
    </div>

    <!--- Password submit -->
    <div>
      <!--- Uses the "submit" function defined in the pinia store -->
      <button @click="submit">Submit</button>
    </div>
  </q-page>
</template>
