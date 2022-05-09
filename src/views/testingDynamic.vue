<script lang="ts">
import req from "../scripts/scripts";

import { ref } from "vue";

const markdown = "<div class='text' id='marked'>hello world</div>";
</script>

<template>
  <div>
    testingDynamic {{ $route.params.id }}
    <button @click="req">Click Me</button>
  </div>

  <div v-html="markdown"></div>
</template>
