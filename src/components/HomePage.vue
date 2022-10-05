<script setup lang="ts">
import { ref } from "vue";
import { usePageStore } from "../stores/markdown";

const usePage = usePageStore();
usePage.setPage();

const pageSize = usePage.name.length;
</script>

<template>
  <div v-html="usePage.content[i]"></div>
</template>
