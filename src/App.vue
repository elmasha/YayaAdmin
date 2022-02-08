<template>
  <v-app>
    <v-content>
      <v-toolbar dark color="#1C1B2B">
        <v-app-bar-nav-icon
          v-model="drawer"
          @click="drawer = !drawer"
        ></v-app-bar-nav-icon>

        <v-toolbar-title>Yaya Admin</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-export</v-icon>
        </v-btn>
      </v-toolbar>

      <nav>
        <v-navigation-drawer
          v-model="drawer"
          app
          draggable="true"
          color="#1C1B2B"
          mini-variant
          mini-variant-width="100"
        >
          <h5
            class="d-block text-center mx-auto mt-4"
            size="60"
            style="color: #0bf4de"
          ></h5>
          <v-list flat class="mt-16 text-center" dark>
            <v-list-item-group v-model="selectItem">
              <v-list-item
                v-for="(item, i) in items"
                :key="i"
                active-class="border"
                class=""
              >
                <v-list-item-icon>
                  <v-icon v-text="item.icon"></v-icon>
                </v-list-item-icon>
              </v-list-item>

              <router-link to="/" active-class="border"
                ><v-list-item>
                  <v-icon>mdi-view-dashboard</v-icon>
                </v-list-item>
                <span id="one">Overview</span>
              </router-link>

              <hr class="hr" />
              <router-link to="/bureau" active-class="border"
                ><v-list-item>
                  <v-icon>mdi-face-agent</v-icon>

                  <font-awesome-icon icon="coffee"></font-awesome-icon>
                </v-list-item>
                <span id="one">Bureau</span></router-link
              >

              <hr class="hr" />
              <router-link to="/client" active-class="border">
                <v-list-item>
                  <v-icon>mdi-badge-account</v-icon>
                </v-list-item>
                <span id="one">Clients</span></router-link
              >

              <hr class="hr" />
              <router-link to="/" active-class="border">
                <v-list-item> <v-icon>mdi-account-child</v-icon> </v-list-item>
                <span id="one">Auth</span>
              </router-link>
            </v-list-item-group>
          </v-list>
        </v-navigation-drawer>
      </nav>
      <v-main> <router-view /></v-main>
    </v-content>
  </v-app>
</template>
<script>
// import SideBar from "./components/SideBar.vue";
export default {
  components: {},
  data() {
    return {
      drawer: false,
      selectItem: 0,
      items: [{ icon: "fas fa-plus" }],
    };
  },
};
</script>

<style scoped>
#one {
  text-decoration: none;
  color: #fff;
}
.router-link {
  text-decoration: none;
  color: #fff;
}

span {
  text-decoration: none;
  tab-size: 22px;
}
.hr {
  background-color: rgb(75, 75, 75);
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
