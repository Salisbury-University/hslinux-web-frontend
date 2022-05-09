<script setup lang="ts">
import { ref } from "vue"

const textName = ref("");
const textPassword = ref("");

function submit(){
  // This needs to send a request to the backend to verify the username and password given and get the token
}

// Login is going to have to take the username and passwords that are submitted by the user, and send them
// to the backend as a request to see if it is valid and what kind of access the user has to the wiki (student, 
// faculty, admin, etc...)

// Right now it only takes the username and password and stores them, going to work on sending it to the backend

</script>

<template>
  <div>
    <p>Username</p>
    <input v-model="textName" placeHolder="Type here">
  </div>
  
  <div>
    <p>Password</p>
    <input type="password" v-model="textPassword" placeHolder="Type here">
  </div>

  <div>
    <button @click="submit">Submit</button>
  </div>
</template>


