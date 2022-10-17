<script setup lang="ts">
import { ref } from "vue";
import { usePageStore } from "../stores/markdown";
//localStorage
import { marked } from "marked";

const usePage = usePageStore();
usePage.setPage();
usePage.setCounter(0);
</script>

<template>
  <div v-html="usePage.content[0]"></div>
</template>
