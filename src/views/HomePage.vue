<script setup lang="ts">
import HomePage from "../components/HomePage.vue";
import { defineComponent } from "vue";
import { ref } from "vue";

const componentKey = ref(0);

localStorage.index = 0;

const forceRender = (index: Number) => {
  localStorage.index = index;
  componentKey.value += 1;
  console.log("rerender value", componentKey.value);
};
</script>

<template>
  <q-page>
    <button @click="forceRender(1)">rerender</button>
    <div>
      <HomePage :key="componentKey" />
    </div>
  </q-page>
</template>
