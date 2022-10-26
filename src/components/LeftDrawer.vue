<script setup lang="ts">
import { usePageStore } from "../stores/markdown";

const usePage = usePageStore();
usePage.setPage();
let pageSize = usePage.content.length; //amount of documents
</script>

<template>
  <div class="list">
    <li v-for="index in pageSize" :key="index">
      <button @click="usePage.setPageIndex(index - 1)">
        {{ usePage.name[index - 1] }}
      </button>
    </li>
  </div>
</template>