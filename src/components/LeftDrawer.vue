<script setup lang="ts">
import { usePageStore } from "../stores/markdown";

const usePage = usePageStore();
usePage.setPage();
</script>

<style scoped>
@import "../assets/style.css";
</style>

<template>
  <div class="search">
    <q-form @submit="doNothing()">
      <q-input placeholder="Search Documents">
        <template v-slot:append>
          <q-btn round flat @click="doNothing()">
            <q-icon name="search" size="30px" />
          </q-btn>
        </template>
      </q-input>
    </q-form>
  </div>

  <div class="list">
    <li v-for="index in usePage.arraySize" :key="index">
      <button @click="usePage.setPageIndex(index - 1)">
        {{ usePage.name[index - 1] }}
      </button>
    </li>
  </div>
</template>
