<script setup lang="ts">
import { usePageStore } from "../stores/markdown";
import defineComponent from "../scripts/pageIndex";
import { ref } from "vue";

const usePage = usePageStore();
usePage.setPage();

const pageSize = usePage.content.length; //amount of documents
</script>

<template>
  <div class="list">
    <li v-for="index in pageSize" :key="index">
      <button @click="i = index">
        {{ usePage.name[index - 1] }}
      </button>
    </li>
  </div>
</template>
