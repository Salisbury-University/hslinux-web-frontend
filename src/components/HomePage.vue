<script setup lang="ts">
import { ref } from "vue";
import { usePageStore } from "../stores/markdown";
import defineComponent from "../scripts/pageIndex";

const usePage = usePageStore();
usePage.setPage();

const pageSize = usePage.content.length;
var i = 0;
</script>

<template>
  <div v-html="usePage.content[i]"></div>
</template>
