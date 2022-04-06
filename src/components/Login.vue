<script setup lang="ts">
import { ref } from "vue"
import { useCounterStore } from "../stores/counter";

const store = useCounterStore();

const name: string = "asd";
const pass: string = "gfasd";

const name2 = ref("");
const pass2 = ref("");

function submit(){
  name2.value = name;
  pass2.value = pass;
}

</script>

<template>
  <div>
    <p>Username : {{ name2 }}</p>
    <p>Password : {{ pass2 }}</p>
  </div>

  <div>
    <p>Username</p>
    <input v-model="name">
  </div>
  
  <div>
    <p>Password</p>
    <input v-model="pass">
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
