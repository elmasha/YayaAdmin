<template>
  <v-app>
    <div class="app">
      <SideBar />
      <v-container fluid> <router-view /></v-container>
    </div>
  </v-app>
</template>
<script>
import SideBar from "./components/SideBar.vue";
export default {
  components: {
    SideBar,
  },
};
</script>

<style lang="scss"></style>
