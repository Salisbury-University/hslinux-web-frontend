<script setup lang="ts">
import markdownToHtml from "../scripts/scripts";

import { ref } from "vue";

const markdown = ref();

async function getMarkDown() {
  let markdown = await markdownToHtml();
}
</script>

<template>
  <div>
    testingDynamic {{ $route.params.id }}
    <button @click="getMarkDown()">Show Content</button>
  </div>

  <div v-html="markdown"></div>
</template>
