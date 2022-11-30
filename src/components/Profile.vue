<script setup lang="ts">
import { useAuthStore } from "../stores/auth";
const store = useAuthStore();
</script>

<template>
  <!--
    TODO: Validate token? 
    TODO: Make bigger box and show login if token is set 
  -->
  <div v-if="!store.$state.persistence.token">You need to login</div>
  <div v-if="store.$state.persistence.token">Logged in!</div>
</template>
