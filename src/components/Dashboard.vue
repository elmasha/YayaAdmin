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
              <p class="h1-name">No of bureau candidates</p>
            </v-card-title>
            <v-card-text>
              <h1 class="h1-dash" sm="3">{{ NoOfCandidate }}</h1>
            </v-card-text>
          </v-card></b-col
        >
        <b-col sm>
          <v-card color="#0bf4de" class="pa-8">
            <v-card-title class="h1-name">
              <p class="h1-name">Total number of helpers</p>
            </v-card-title>
            <v-card-text>
              <h1 class="h1-dash" sm="3">{{ NoOfHelpers }}</h1>
            </v-card-text>
          </v-card></b-col
        >
      </b-row>

      <div class="container-fluid">
        <hr />
        <b-row>
          <b-col sm
            ><v-card max-width="700" tile>
              <h5 class="data-h3">List of bureau registered</h5>
              <v-list>
                <v-subheader>Bureau</v-subheader>
                <v-list-item-group
                  v-for="(Bureau, id) in Bureaus"
                  v-bind:key="id"
                  color="primary"
                >
                  <v-list-item>
                    <v-list-item-avatar>
                      <img
                        :src="showFirstImageGallery(Bureau.image)"
                        @error="avatar"
                        class="image-bureau"
                    /></v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title
                        ><h3 class="name-bureau">
                          <b>{{ Bureau.Name }}</b>
                        </h3></v-list-item-title
                      ><br />
                      <span><b class="label-b"> Bureau: </b>{{ Bureau.BName }}</span>
                      <br />
                      <span
                        >Candidates <b class="b-list"> {{ Bureau.NoOfCad }}</b></span
                      >
                    </v-list-item-content>
                  </v-list-item></v-list-item-group
                >
              </v-list>
            </v-card></b-col
          >
          <b-col sm>col-sm</b-col>
          <b-col sm>col-sm</b-col>
        </b-row>
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
    this.BureuaGetList();
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

    BureuaGetList() {
      db.collection("Yaya_Bureau")
        .get()
        .then((queryResult) => {
          queryResult.forEach((doc) => {
            const data = {
              id: doc.id,
              Name: doc.data().Name,
              NoOfCad: doc.data().No_of_candidates,
              image: doc.data().Bureau_Image,
              BName: doc.data().Bureau_Name,
            };
            this.Bureaus.push(data);
            console.log("All", data);
          });
        });
    },

    showFirstImageGallery(v) {
      if (v == null) {
        return this.avatar;
      } else {
        return v;
      }
    },
  },
  data: () => ({
    NoOfBue: 0,
    NoOfCandidate: 0,
    NoOfHelpers: 0,
    Bureaus: [],
    avatar: require("@/assets/img/avtar.png"),
  }),
};
</script>

<style>
.label-b {
  color: #0bf4de;
}
.v-list {
  height: 400px;
  overflow-y: auto;
}
.b-list {
  font-size: 15px;
  color: #1c1b2b;
}
.b-list :hover {
  font-size: 20px;
  color: #0bf4de;
}
.name-bureau {
  font-weight: 400;
  font-size: 16px;
}
.image-bureau {
  width: 50px;
  border-radius: 30px;
  margin: 6px;
}
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
