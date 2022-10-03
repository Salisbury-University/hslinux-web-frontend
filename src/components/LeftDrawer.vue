<script setup lang="ts">
import { usePageStore } from "../stores/markdown";
import { ref } from "vue";

const usePage = usePageStore();
usePage.setPage();

const pageSize = usePage.title.length; //amount of documents
</script>

<template>
  <div v-for="i in pageSize" :key="i">
    {{ usePage.title[i] }}
  </div>
</template>
