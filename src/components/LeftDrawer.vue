<script setup lang="ts">
import { usePageStore } from "../stores/markdown";
import { ref } from "vue";

const usePage = usePageStore();
usePage.setPage();

const pageSize = usePage.name.length; //amount of documents
</script>

<template>
  <div class="list">
    <li v-for="index in pageSize" :key="index">
      <button @click="loadPage(index - 1)">
        {{ usePage.name[index - 1] }}
      </button>
    </li>
  </div>
</template>
