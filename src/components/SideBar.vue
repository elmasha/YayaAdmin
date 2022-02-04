<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    color="#1C1B2B"
    mini-variant
    draggable="true"
    :mini-variant-width="mini"
  >
    <h5 class="d-block text-center mx-auto mt-4" size="60" style="color: #0bf4de">
      Dashboard
    </h5>
    <v-list flat class="mt-16" dark>
      <v-list-item-group v-model="selectItem">
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          active-class="border"
          class=""
          :ripple="false"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
        </v-list-item>

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
      { icon: "fas fa-plus" },
      { icon: "fas fa-th-large" },
      { icon: "fas fa-align-center" },
      { icon: "fab fa-gitter" },
      { icon: "fas fa-chart-line" },
    ],
  }),

  computed() {
    switch (this.$vuetify.breakpoint.name) {
      case "xs":
        return true;
      case "sm":
        return true;
      case "md":
        return true;
      case "lg":
        return true;
      case "xl":
        return true;
    }
  },

  methods: {
    mini() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return true;
        case "sm":
          return true;
        case "md":
          return true;
        case "lg":
          return true;
        case "xl":
          return true;
      }
    },
  },
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
  color: #0bf4de;
}
span {
  font-size: 13x;
}
</style>
