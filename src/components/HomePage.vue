<script setup lang="ts">
import { usePageStore } from "../stores/markdown";
//localStorage

const usePage = usePageStore();
usePage.setPage();
</script>

<template>
  <div v-html="usePage.content[usePage.pageIndex]"></div>
</template>
