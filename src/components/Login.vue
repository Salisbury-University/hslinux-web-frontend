<script setup lang="ts">
import { useAuthStore } from "../stores/auth";

const store = useAuthStore();

function submit() {
  store.login();
}
</script>

<template>
  <!-- Conditionally render the Login input field based on the "showLogin" variable in the store -->
  <!--- User ID -->
  <div>
    <!--- Data directly v-modeled into the "uid" value of the store, so updates in real time -->
    <p>Username</p>
    <q-input v-model="store.nonpersistence.uid" placeHolder="Type here" />
  </div>

  <!--- User Password -->
  <div>
    <!--- Data directly v-modeled into the "password" value of the store, so updates in real time -->
    <p>Password</p>
    <q-input
      type="password"
      v-model="store.nonpersistence.password"
      placeHolder="Type here"
    />
  </div>

  <!--- Password submit -->
  <div>
    <!--- Uses the "submit" function defined in the pinia store -->
    <q-btn type="submit">Submit</q-btn>
  </div>
</template>
