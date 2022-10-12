<script setup lang="ts">
import { usePageStore } from "../stores/markdown";
import Vue from "vue";
import { onMounted } from "vue";

const usePage = usePageStore();
usePage.setPage();
let pageSize; //amount of documents
let refresh = 1;

onMounted(() => {
  if (refresh == 0) {
    pageSize = usePage.name.length;
    refresh = 1;
  } else {
    pageSize = usePage.content.length;
    refresh = 0;
  }
  console.log("left-drawer mounted");
});
</script>

<template>
  <div class="list">
    <li v-for="index in pageSize" :key="index">
      <button @click="i">
        {{ usePage.name[index - 1] }}
      </button>
    </li>
  </div>
</template>
