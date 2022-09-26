<script setup lang="ts">
import { defineComponent, ref } from "vue";
import markDownToHtml from "../scripts/scripts";

export default defineComponent({
  el: "#Contents",
  data() {
    return {
      markDown: "<p>Home Page</p>",
    };
  },
});
</script>

<template>
  <div>
    <button @click="changeMarkDown()">Change markDown</button>
  </div>
  <br /><br />
  <div id="Contents" v-html="markDown"></div>
</template>
