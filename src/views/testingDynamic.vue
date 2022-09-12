<script setup lang="ts">
import markdownToHtml from "../scripts/scripts";

import { ref } from "vue";

const markdown = ref("");
</script>

<template>
  <div>
    testingDynamic {{ $route.params.id }}
    <button @click="markdown = markdownToHtml()">Show Content</button>
  </div>

  <div v-html="markdown"></div>
</template>
