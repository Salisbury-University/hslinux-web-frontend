<script setup lang="ts">
import { ref } from "vue";
import { onMounted } from "vue";
import { usePageStore } from "../stores/markdown";
//localStorage

const usePage = usePageStore();
usePage.setPage();

let i = Number(localStorage.index);

function changeIndex() {
  i = localStorage.index = 2;
  console.log("changed to ", Number(localStorage.index));
}
</script>

<template>
  <div v-html="usePage.content[i]"></div>
  <button @click="changeIndex()">im clickable</button>
</template>
