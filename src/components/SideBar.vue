<template>
  <div></div>
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
