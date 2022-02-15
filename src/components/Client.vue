<template>
  <v-app>
    <div class="container-fluid">
      <b-row>
        <b-col sm>
          <v-card color="#1c1b2b" class="pa-8 dash-top">
            <v-card-title class="h1-name">
              <p class="h1-name">Total number of helpers</p>
            </v-card-title>
            <v-card-text>
              <h1 class="h1-dash" sm="3">{{ NoOfHelpers }}</h1>
            </v-card-text>
          </v-card>
        </b-col>
      </b-row>
      <div class="container-fluid">
        <b-row>
          <b-col sm>
            <!-- Col 2-->
            <v-card max-width="700" tile>
              <v-list shaped class="v-list-b">
                <v-subheader><h5>Registered employers</h5></v-subheader>
                <v-form>
                  <v-container>
                    <v-row>
                      <v-col cols="12" md="8" sm="8">
                        <div class="d-flex">
                          <v-text-field
                            v-model="ids"
                            :counter="12"
                            label="Search"
                            clearable
                            outlined
                            required
                          ></v-text-field
                          ><v-fab-transition>
                            <v-btn
                              class="btn-search"
                              color="#0bf4de"
                              fab
                              small
                              v-on:click="SearchCat(ids)"
                            >
                              <v-icon color="black">mdi-magnify</v-icon>
                            </v-btn>
                          </v-fab-transition>
                        </div>
                      </v-col></v-row
                    >
                  </v-container>
                </v-form>

                <v-list-item-group v-for="(Helper, id) in Helpers" v-bind:key="id">
                  <v-list-item>
                    <v-list-item-avatar size="60">
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
                        <!-- <b class="label-b">mdi-at</b>-->
                        ID no:
                        <b> {{ Helper.Id_No }}</b>
                      </span>
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
                      <v-icon>>mdi-information-outline</v-icon>
                    </v-btn>
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
  name: "client",
  mounted() {
    this.Fetch();
    this.GetAllHelper();
  },
  created() {},
  methods: {
    SearchCat(val) {
      if (val == null) {
        console.log("My Candidate", val);
      } else {
        this.Helpers.splice(this.Helpers);
        db.collection("Yaya_Employer")
          .where("ID_no", "==", val)
          .get()
          .then((queryResult) => {
            queryResult.forEach((doc) => {
              const data = {
                id: doc.id,
                Name: doc.data().Name,
                email: doc.data().Email,
                Id_No: doc.data().ID_no,
                imageHelper: doc.data().UserImage,
                cCount: doc.data().CandidatesCount,
                phone: doc.data().Phone_NO,
              };
              this.Helpers.push(data);
              console.log("My Candidate", val);
            });
          });
      }
    },
    Fetch() {
      db.collection("Admin")
        .doc("No_of_helpers")
        .get()
        .then((doc) => {
          this.NoOfHelpers = doc.data().No;
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
              Id_No: doc.data().ID_no,
              email: doc.data().Email,
              imageHelper: doc.data().UserImage,
              cCount: doc.data().CandidatesCount,
              phone: doc.data().Phone_NO,
            };
            this.Helpers.push(data);
            console.log("Helpers", this.Helpers);
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
      NoOfHelpers: 0,
      Helpers: [],
      avatar: require("@/assets/img/avtar.png"),
    };
  },
};
</script>

<style>
.btn-search {
  margin-left: 8px;
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
  color: #0bf4de;
}
.v-list-b {
  height: 900px;
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
