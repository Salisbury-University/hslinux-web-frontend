<script setup lang="ts">
import { ref } from "vue";
import { usePageStore } from "../stores/markdown";
import { useShowContent } from "../stores/showPage";
import { marked } from "marked";

const usePage = usePageStore();
usePage.setPage();
</script>

<template>
  <div v-html="usePage.content[0]"></div>
</template>
