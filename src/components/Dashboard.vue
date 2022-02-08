<template>
  <div class="container-fluid">
    <v-content class="">
      <b-row class="text-center b-row">
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
          <b-col sm>
            <!-- Col 1-->
            <v-card max-width="900" tile>
              <h5 class="data-h3">List of registered bureau</h5>
              <v-list shaped class="v-list-b">
                <v-subheader>Bureau list</v-subheader>
                <v-list-item-group
                  v-for="(Bureau, id) in Bureaus"
                  v-bind:key="id"
                  color="primary"
                >
                  <router-link
                    v-bind:to="{
                      name: 'mybureau',
                      params: { id: Bureau.id },
                    }"
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
                        >
                        <span><b class="label-b">Bureau:</b>{{ Bureau.BName }}</span>
                        <br />
                        <span
                          >Candidates:<b class="b-list">{{ Bureau.NoOfCad }}</b></span
                        >
                      </v-list-item-content>
                      <v-btn icon>
                        <v-icon>mdi-animation</v-icon>
                      </v-btn>
                    </v-list-item></router-link
                  >
                </v-list-item-group>
              </v-list>
            </v-card>
          </b-col>
          <b-col sm>
            <!-- Col 2-->
            <v-card max-width="900" tile>
              <h5 class="data-h3">Registered employers</h5>
              <v-list shaped class="v-list-b">
                <v-subheader>Employers list</v-subheader>
                <v-list-item-group v-for="(Helper, id) in Helpers" v-bind:key="id">
                  <v-list-item>
                    <v-list-item-avatar>
                      <img
                        :src="showFirstImageGallery(Helper.imageHelper)"
                        @error="avatar"
                        class="image-bureau"
                      />
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title
                        ><h3 class="name-bureau">
                          <b>{{ Helper.Name }}</b>
                        </h3></v-list-item-title
                      >
                      <span>
                        <!-- <b class="label-b">mdi-at</b>-->
                        {{ Helper.email }}</span
                      >
                      <span>
                        <!--<v-icon color="#1c1b2b">mdi-phone-outline</v-icon> -->
                        <b class=""> </b>{{ Helper.phone }}</span
                      >
                      <hr />
                      <span
                        >Current employee:
                        <b class="b-list"> {{ Helper.cCount }}</b></span
                      >
                      <br />
                    </v-list-item-content>
                    <v-btn icon>
                      <v-icon>mdi-animation</v-icon>
                    </v-btn>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-card>
          </b-col>
          <!-- Col 3-->
          <b-col sm
            ><v-card class="mt-4 mx-auto" max-width="600">
              <v-sheet
                class="v-sheet--offset mx-auto"
                color="cyan"
                elevation="0"
                max-width="calc(100% - 32px)"
              >
                <v-sparkline
                  :labels="Helpers"
                  value="1000"
                  color="white"
                  line-width="3"
                  padding="16"
                ></v-sparkline>
              </v-sheet>

              <v-card-text class="pt-0">
                <div class="text-h6 font-weight-light mb-2">User Registrations</div>
                <div class="subheading font-weight-light grey--text">
                  Last Campaign Performance
                </div>
                <v-divider class="my-2"></v-divider>
                <v-icon class="mr-2" small> mdi-clock </v-icon>
                <span class="text-caption grey--text font-weight-light"
                  >last registration 26 minutes ago</span
                >
              </v-card-text>
            </v-card></b-col
          >
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
    this.GetAllHelper();
  },
  mounted() {
    this.Fetch();
  },
  updated() {
    this.Fetch();
  },
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
    GetAllHelper() {
      db.collection("Yaya_Employer")
        .get()
        .then((queryResult) => {
          queryResult.forEach((doc) => {
            const data = {
              id: doc.id,
              Name: doc.data().Name,
              email: doc.data().Email,
              imageHelper: doc.data().UserImage,
              cCount: doc.data().CandidatesCount,
              phone: doc.data().Phone_NO,
            };
            this.Helpers.push(data);
            console.log("Helpers", data);
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
    Helpers: [],
    avatar: require("@/assets/img/avtar.png"),
  }),
};
</script>

<style>
body {
  font-size: 14px;
}
.v-card {
  border-color: #fff solid 2px;
}
.label-b {
  color: #0bf4de;
}
.v-list-b {
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
  color: #1c1b2b;
}
.image-bureau {
  width: 50px;
  border-radius: 30px;
  margin: 6px;
}
.b-row {
  background-color: #1c1b2b;
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
