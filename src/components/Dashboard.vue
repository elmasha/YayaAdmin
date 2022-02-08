<template>
  <div class="container-fluid">
    <v-content class="">
      <b-row class="grey lighten-5 text-center b-row">
        <b-col sm>
          <v-card color="#0bf4de" class="pa-8">
            <v-card-title>
              <p class="h1-name">No of bureau registered</p>
            </v-card-title>
            <v-card-text>
              <h1 class="h1-dash" sm="3">{{ NoOfBue }}</h1>
            </v-card-text>
          </v-card></b-col
        >
        <b-col sm>
          <v-card color="#0bf4de" class="pa-8">
            <v-card-title class="h1-name">
              <p class="h1-name">No of bureau candidate</p>
            </v-card-title>
            <v-card-text>
              <h1 class="h1-dash" sm="3">{{ NoOfCandidate }}</h1>
            </v-card-text>
          </v-card></b-col
        >
        <b-col sm>
          <v-card color="#0bf4de" class="pa-8">
            <v-card-title class="h1-name">
              <p class="h1-name">Total number of helper</p>
            </v-card-title>
            <v-card-text>
              <h1 class="h1-dash" sm="3">{{ NoOfHelpers }}</h1>
            </v-card-text>
          </v-card></b-col
        >
      </b-row>

      <div class="container-fluid">
        <hr />
        <h5 class="data-h3">List of bureau registered</h5>
      </div>
    </v-content>
  </div>
</template>

<script>
import db from "../firebaseInit";

export default {
  name: "dashboard",
  created() {
    this.Fetch();
  },
  mounted() {},

  methods: {
    Fetch() {
      db.collection("Admin")
        .doc("No_of_bureau")
        .get()
        .then((doc) => {
          this.NoOfBue = doc.data().No;
          console.log("Doc", this.NoOfBue);
        });
      db.collection("Admin")
        .doc("No_of_candidates")
        .get()
        .then((doc) => {
          (this.NoOfCandidate = doc.data().Total_number),
            console.log("Trash", this.trash);
        });
      db.collection("Admin")
        .doc("No_of_helpers")
        .get()
        .then((doc) => {
          (this.NoOfHelpers = doc.data().No), console.log("Trash", this.trash);
        });
    },
  },
  data: () => ({
    NoOfBue: 0,
    NoOfCandidate: 0,
    NoOfHelpers: 0,
  }),
};
</script>

<style>
.b-row {
  margin-top: 20px;
}
.data-h3 {
  text-decoration: none;
  text-emphasis: none;
}
h1 {
  color: #1c1b2b;
}
.v-chip {
  padding: 30px;
}
.v-card {
  margin: 10px;
  padding: 20px;
  width: 100%;
}
.h1-dash {
  background-color: #1c1b2b;
  position: relative;
  border-radius: 30px;
  padding: 22px;
  font-size: 30px;
  font-weight: 500;
  color: #fff;
}
.h1-dash:hover {
  padding: 22px;
  font-size: 30px;
  font-weight: 500;
  color: #0bf4de;
  text-decoration: none;
}
.h1-name {
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
}
</style>
