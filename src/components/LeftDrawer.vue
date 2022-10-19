<script setup lang="ts">
import { usePageStore } from "../stores/markdown";
import Vue from "vue";
import { onMounted } from "vue";

const usePage = usePageStore();
usePage.setPage();
let pageSize = usePage.name.length; //amount of documents

onMounted(() => {
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

    <button @click="localStorage.index = 4">Click me</button>
  </div>
</template>
