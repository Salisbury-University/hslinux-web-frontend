<script setup lang="ts">
import { ref } from "vue"

const storedName = ref("");
const storedPassword = ref("");

const textName = ref("");
const textPassword = ref("");

function submit(){
  storedName.value = textName.value;
  storedPassword.value = textPassword.value;
}

</script>

<template>
  <div>
    <p>Username : {{ storedName }}</p>
    <p>Password : {{ storedPassword }}</p>
  </div>

  <div>
    <p>Username</p>
    <input v-model="textName" placeHolder="Type here">
  </div>
  
  <div>
    <p>Password</p>
    <input v-model="textPassword" placeHolder="Type here">
  </div>

  <div>
    <button @click="submit">Submit</button>
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
