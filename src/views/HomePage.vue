<script setup lang="ts">
import HomePage from "../components/HomePage.vue";
import { ref } from "vue";

const componentKey = ref(0);

localStorage.index = 0;

const forceRender = () => {
  localStorage.index = 1;
  componentKey.value += 1;
  console.log("rerender value", componentKey.value);
};
</script>

<template>
  <q-page>
    <div>
      <HomePage :key="componentKey" />
    </div>
    <button @click="forceRender()">rerender</button>
  </q-page>
</template>
