<script setup lang="ts">
import { ref, onMounted } from "vue";
import LeftDrawer from "../components/LeftDrawer.vue";
import { useAuthStore } from "../stores/auth.ts";
import { useQuasar } from "quasar";

const $q = useQuasar();

const leftDrawerOpen = ref(false);
const store = useAuthStore();

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

function updateDarkMode() {
  $q.dark.set(store.persistence.darkMode);
}

onMounted(() => {
  updateDarkMode();
  // console.log("HomeLayout mounted");
});
</script>

<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar>
            <!--image goes here-->
          </q-avatar>
          Salisbury Wiki IT
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="../views/Home" label="Home" />
        <q-route-tab
          to="../views/Login"
          label="Login"
          v-if="store.persistence.showLogin"
        />
        <q-route-tab
          to="../views/Preferences"
          label="Preferences"
          v-if="!store.persistence.showLogin"
        />
      </q-tabs>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <LeftDrawer />
    </q-drawer>

    <q-page-container>
      <router-view></router-view>
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <!--place an image here-->
          </q-avatar>
          <div></div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>
