<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar>
            <!--image goes here<img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">-->
          </q-avatar>
          Salisbury Wiki IT
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/Login" label="Login" />
        <q-route-tab to="/About" label="About" />
        <q-route-tab to="/Testing" label="Testing" />
      </q-tabs>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <LeftDrawer/>
    </q-drawer>

    <q-page-container>
      <router-view></router-view>
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <!--<img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg"> place an image here-->
          </q-avatar>
          <div></div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import LeftDrawer from "../components/LeftDrawer.vue"
import PageContents from "../components/PageContents.vue"
   
const leftDrawerOpen = ref(false);

  function toggleLeftDrawer(){

        leftDrawerOpen.value = !leftDrawerOpen.value;
    }
       

</script>
<!--wrap layout in slot or jung group-->