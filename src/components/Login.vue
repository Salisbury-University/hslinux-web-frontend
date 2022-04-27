<script setup lang="ts">
import { ref } from "vue";
import { useAuthStore } from "../stores/auth.ts";

const store = useAuthStore();

function submit() {
  store.login();
}
</script>

<template>
  <q-page>
    <div>
      <p>Username</p>
      <input v-model="store.uid" placeHolder="Type here" />
    </div>

    <div>
      <p>Password</p>
      <input type="password" v-model="store.password" placeHolder="Type here" />
    </div>

    <div>
      <button @click="submit">Submit</button>
    </div>
  </q-page>
</template>
