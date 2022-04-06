<script setup lang="ts">
import { useCounterStore } from "../stores/counter";

const store = useCounterStore();

defineProps<{ msg: string }>();
</script>

<template>
  <h1>{{ msg }}</h1>
  <h1>Gameing</h1>
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
