<template>
  <v-app>
    <div class="container-fluid">
      <b-row>
        <b-col sm md>
          <v-card color="#1c1b2b" class="pa-8 dash-top">
            <v-card-title>
              <p class="h1-name">No of bureau registered</p>
            </v-card-title>
            <v-card-text>
              <h1 class="h1-dash" sm>{{ NoOfBue }}</h1>
            </v-card-text>
          </v-card>
        </b-col>
      </b-row>

      <div class="container-fluid">
        <b-row>
          <b-col sm>
            <!-- Col 1-->
            <v-card max-width="700" tile>
              <v-list shaped class="v-list-b">
                <v-subheader><h5>List of registered bureau</h5></v-subheader>
                <v-form>
                  <v-container>
                    <v-row>
                      <v-col cols="12" md="8" sm="8" class="d-flex">
                        <div class="container-fluid d-flex">
                          <v-text-field
                            v-model="ids"
                            label="Search"
                            :counter="12"
                            outlined
                            clearable
                          ></v-text-field>
                          <v-fab-transition>
                            <v-btn
                              class="btn-search"
                              color="#0bf4de"
                              fab
                              small
                              right
                              @click="SearchCat(ids)"
                            >
                              <v-icon color="black">mdi-magnify</v-icon>
                            </v-btn>
                          </v-fab-transition>
                        </div>
                      </v-col></v-row
                    >
                  </v-container> </v-form
                ><br />
                <hr />
                <v-list-item-group
                  v-for="(Bureau, id) in Bureaus"
                  v-bind:key="id"
                  color="primary"
                >
                  <v-list-item>
                    <v-list-item-avatar size="60">
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
                      ><span><b class="label-b">ID no:</b>{{ Bureau.Id_No }}</span>
                      <br />
                      <span><b class="label-b">Bureau:</b>{{ Bureau.BName }}</span>
                      <br />
                      <span
                        >Candidates:<b class="b-list">{{ Bureau.NoOfCad }}</b></span
                      >
                    </v-list-item-content>
                    <router-link
                      v-bind:to="{
                        name: 'mybureau',
                        params: { id: Bureau.id },
                      }"
                    >
                      <v-btn icon>
                        <v-icon>mdi-information-outline</v-icon>
                      </v-btn>
                    </router-link>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-card>
          </b-col>
        </b-row>
      </div>
    </div>
  </v-app>
</template>

<script>
import db from "../firebaseInit";
export default {
  name: "bureau",
  mounted() {
    this.Fetch();
    this.BureauGetList();
  },
  created() {},
  methods: {
    SearchCat(val) {
      if (val == null) {
        console.log("My Candidate", val);
      } else {
        this.Bureaus.splice(this.Bureaus);
        db.collection("Yaya_Bureau")
          .where("ID_no", "==", val)
          .get()
          .then((queryResult) => {
            queryResult.forEach((doc) => {
              const data = {
                id: doc.id,
                Id_No: doc.data().ID_no,
                Name: doc.data().Name,
                NoOfCad: doc.data().No_of_candidates,
                image: doc.data().Bureau_Image,
                BName: doc.data().Bureau_Name,
              };
              this.Bureaus.push(data);
              console.log("My Candidate", val);
            });
          });
      }
    },
    Fetch() {
      db.collection("Admin")
        .doc("No_of_bureau")
        .get()
        .then((doc) => {
          this.NoOfBue = doc.data().No;
        });
    },
    BureauGetList() {
      db.collection("Yaya_Bureau")
        .get()
        .then((queryResult) => {
          queryResult.forEach((doc) => {
            const data = {
              id: doc.id,
              Id_No: doc.data().ID_no,
              Name: doc.data().Name,
              NoOfCad: doc.data().No_of_candidates,
              image: doc.data().Bureau_Image,
              BName: doc.data().Bureau_Name,
            };
            this.Bureaus.push(data);
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
  data() {
    return {
      NoOfBue: 0,
      Bureaus: [],
      ids: null,
      avatar: require("@/assets/img/avtar.png"),
    };
  },
};
</script>

<style>
.btn-search {
  margin-left: 18px;
  margin-top: 8px;
}
.dash-top {
  color: #fff;
  margin: 10px;
}

.h1-name {
  color: #fff;
}
.h1-dash {
  position: relative;
  border-radius: 30px;
  font-size: 30px;
  font-weight: 500;
  color: #0bf4de;
}
.label-b {
  color: #808080;
}
.v-list-b {
  height: 900px;
  overflow-y: auto;
}
.b-list {
  font-size: 15px;
  color: #1c1b2b;
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
/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #0bf4de;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(95, 92, 92);
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
