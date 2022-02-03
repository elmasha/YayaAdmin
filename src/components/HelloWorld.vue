<template>
  <div>
    <v-app :style="{ background: $vuetify.theme.themes.dark.background }">
      <SideBar />
      <Dashboard />
    </v-app>
  </div>
</template>

<script>
import SideBar from "../components/SideBar.vue";
import Dashboard from "./Dashboard.vue";
export default {
  name: "HelloWorld",
  components: {
    SideBar,
    Dashboard,
  },
  data: () => ({}),
};
</script>
