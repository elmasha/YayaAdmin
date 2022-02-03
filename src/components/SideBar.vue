<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    color="#1C1B2B"
    mini-variant
    mini-variant-width="90"
  >
    <h4 class="d-block text-center mx-auto mt-4" size="60" style="color: #0bf4de">
      Admin
    </h4>
    <v-list flat class="mt-16" dark>
      <v-list-item-group v-model="selectItem">
        <a href="/">
          <v-list-item active-class="border" :v-slot="{ active }" ripple="false">
            <font-awesome-icon icon="chart-line" />
            <span>Overview</span>
          </v-list-item></a
        >
        <a href="bureau">
          <v-list-item active-class="border" :v-slot="{ active }" ripple="false">
            <span>Bureau</span>
            <font-awesome-icon icon="coffee"></font-awesome-icon> </v-list-item
        ></a>
        <a href="client">
          <v-list-item active-class="border" :v-slot="{ active }" ripple="false">
            <span>Clients</span>
          </v-list-item>
        </a>

        <v-list-item active-class="border" :v-slot="{ active }" ripple="false">
          <span>Auth</span>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    selectItem: 0,
    drawer: null,
    items: [
      { icon: require("@/assets/img/account.png") },
      { icon: require("@/assets/img/account.png") },
      { icon: require("@/assets/img/account.png") },
      { icon: require("@/assets/img/account.png") },
    ],
  }),
};
</script>

<style>
a {
  text-decoration: none;
  tab-size: 22px;
}
.border {
  text-decoration: none;
  text-shadow: 1px 1px 2px black, 0 0 15px #0bf4de, 0 0 5px aqua;
}
.v-list-item-group .v-list-item-active {
  color: #0bf4de !important;
}
</style>
