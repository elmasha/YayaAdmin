<template>
  <div>
    <v-app>
      <div class="container"></div>

      <template class="col-md-12">
        <v-container class="grey lighten-5">
          <v-row no-gutters>
            <v-col cols="12" sm="6">
              <v-card class="pa-10">
                <v-card-title>No of bureau registered</v-card-title>
                <v-divider class="mx-4"></v-divider>
                <v-card-text>
                  <v-chip-group
                    v-model="selection"
                    active-class="deep-purple accent-6 white--text"
                    column
                  >
                    <v-chip><h1>10</h1></v-chip>
                  </v-chip-group>
                </v-card-text>
              </v-card>
              <br />
              <v-card class="pa-10">
                <v-card-title>No of bureau candidate</v-card-title>
                <v-divider class="mx-4"></v-divider>
                <v-card-text>
                  <v-chip-group
                    v-model="selection"
                    active-class="deep-purple accent-6 white--text"
                    column
                    style="padding: 20px"
                  >
                    <v-chip class="v-chip"><h1>200</h1></v-chip>
                  </v-chip-group>
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
//import db from "../firebaseInit";
export default {
  name: "dashboard",
  mounted() {},
  methods: {
    data() {
      return {
        NoOfBue: 0,
        NoOfCandidate: 0,
      };
    },
    Fetcth() {
      //   db.collection("Admin")
      //     .doc("No_of_bureau")
      //     .get()
      //     .then((doc) => {
      //       (this.BureauCount = doc.data().No),
      //         (this.CandidateCount = doc.data().No_of_candidates),
      //         console.log("Trash", this.trash);
      //     });
      //   db.collection("Admin")
      //     .doc("No_of_candidates")
      //     .get()
      //     .then((doc) => {
      //       (this.CandidateCount = doc.data().Total_number),
      //         console.log("Trash", this.trash);
      //     });
    },
  },
};
</script>

<style>
h1 {
  color: rgb(196, 8, 8);
}
.v-chip {
  padding: 30px;
}
</style>
