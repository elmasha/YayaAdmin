<template>
  <div>
    <v-app id="app" class="app">
      <div class="container"></div>

      <template class="col-md-12">
        <v-container class="grey lighten-4 text-center">
          <v-row no-gutters>
            <v-col cols="12" sm="4" lg="6" xs="6">
              <v-card color="#0bf4de" class="pa-6">
                <v-card-title>
                  <h1 class="h1-name">No of bureau registered</h1>
                </v-card-title>
                <v-divider class="mx-6"></v-divider>
                <v-card-text>
                  <h1 class="h1-dash">14{{ NoOfBue }}</h1>
                </v-card-text>
              </v-card>
              <br />
              <v-card color="#0bf4de" class="pa-6">
                <v-card-title class="h1-name">
                  <h1 class="h1-name">No of bureau candidate</h1>
                </v-card-title>
                <v-divider class="mx-6"></v-divider>
                <v-card-text>
                  <h1 class="h1-dash" sm="4">24</h1>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </template>
    </v-app>
  </div>
</template>

<script>
import db from "../firebaseInit";
export default {
  name: "dashboard",
  created() {
    this.Fetcth;
  },
  mounted() {
    this.Fetcth;
  },

  methods: {
    data() {
      return {
        NoOfBue: null,
        NoOfCandidate: 0,
      };
    },
    Fetcth() {
      db.collection("Admin")
        .doc("No_of_bureau")
        .get()
        .then((doc) => {
          this.NoOfBue = doc.data().No;
          console.log("Doc", this.NoOfBue);
        });
      // db.collection("Admin")
      //   .doc("No_of_candidates")
      //   .get()
      //   .then((doc) => {
      //     (this.NoOfCandidate = doc.data().Total_number),
      //       console.log("Trash", this.trash);
      //   });
    },
  },
};
</script>

<style>
h1 {
  color: #1c1b2b;
}
.v-chip {
  padding: 30px;
}
.h1-dash {
  background-color: #1c1b2b;
  position: relative;
  border-radius: 30px;
  padding: 22px;
  font-size: 30px;
  font-weight: 500;
  color: #0bf4de;
}
.h1-dash:hover {
  padding: 22px;
  font-size: 30px;
  font-weight: 500;
  color: #fff;
}
.h1-name {
  font-size: 20px;
  font-weight: 400;
  text-align: center;
}
</style>
