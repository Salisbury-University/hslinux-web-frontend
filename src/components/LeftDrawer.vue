<script setup lang="ts">
import { usePageStore } from "../stores/markdown";
import Vue from "vue";
import { onMounted } from "vue";

const usePage = usePageStore();
usePage.setPage();
const pageSize = usePage.name.length; //amount of documents

const Component = {};
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
