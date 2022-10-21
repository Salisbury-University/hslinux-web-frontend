<script setup lang="ts">
import { ref } from "vue";
import { onMounted } from "vue";
import { usePageStore } from "../stores/markdown";
//localStorage

const usePage = usePageStore();
usePage.setPage();
</script>

<template>
  <div v-html="usePage.content[1]"></div>
</template>
