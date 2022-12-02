<script setup lang="ts">
import { usePageStore } from "../stores/markdown";

const usePage = usePageStore();
usePage.setPage();
</script>

<style scoped>
@import "../assets/style.css";
</style>

<template>
  <div class="list">
    <li v-for="index in usePage.arraySize" :key="index">
      <q-btn
        unelevated
        dense
        text-color="blue"
        @click="usePage.setPageIndex(index - 1)"
        to="/"
      >
        {{ usePage.name[index - 1] }}
      </q-btn>
    </li>
  </div>
</template>
