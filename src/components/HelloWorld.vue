<template>
  <div>
    <v-app :style="{ background: $vuetify.theme.themes.dark.background }">
      <SideBar />
      <router-view />
    </v-app>
  </div>
</template>

<script>
import SideBar from "../components/SideBar.vue";
export default {
  name: "HelloWorld",
  components: {
    SideBar,
  },
  data: () => ({}),
};
</script>
