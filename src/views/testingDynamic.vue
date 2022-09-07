<script setup lang="ts">
import req from "../scripts/scripts";

import { ref } from "vue";

const markdown = ref("");
</script>

<template>
  <div>
    testingDynamic {{ $route.params.id }}
    <button @click="req">Click Me</button>
  </div>

  <div v-html="markdown"></div>
</template>
