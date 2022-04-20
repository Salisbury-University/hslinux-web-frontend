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
<q-page>
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
  </q-page>
</template>


