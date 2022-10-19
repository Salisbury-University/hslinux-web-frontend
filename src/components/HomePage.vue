<script setup lang="js">
import { compileFunction } from "vm";
import { defineComponent, ref } from "vue";
import { usePageStore } from "../stores/markdown";
//localStorage

const usePage = usePageStore();
usePage.setPage();

let i = localStorage.index = 2;

export default {
  components: {
    Page
  }
  methods: {
    forceUpdate() {
      this.$forceUpdate();
    }
  },
  template: `
    <div v-html="usePage.content[i]"></div>
    <button @click="forceUpdate()"></button>
    `
}
</script>

<template>
  <Page />
</template>
