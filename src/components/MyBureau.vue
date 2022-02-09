<template>
  <v-app>
    <div class="container-fluid">
      <v-content>
        <b-row class="row-top">
          <b-col sm class="col-top">
            <v-card :loading="loading" class="my-2" max-width="500" dark color="#1c1b2b">
              <template slot="progress">
                <v-progress-linear
                  color="deep-purple"
                  height="10"
                  indeterminate
                ></v-progress-linear>
              </template>

              <v-card-title class="white--text mt-5">
                <v-avatar size="100">
                  <img alt="user" :src="showFirstImageGallery(B_image)" />
                </v-avatar>
                <p class="ml-6">{{ name }}</p>
              </v-card-title>

              <v-card-text>
                <!-- <v-rating
                    :value="NoOfCandidate"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="14"
                  ></v-rating>-->

                <div>
                  <v-icon color="#0bf4de" class="label-b">mdi-at</v-icon>
                  {{ B_email }}
                </div>

                <div>
                  <v-icon color="#0bf4de">mdi-phone-outline</v-icon>
                  {{ B_phone }}
                </div>

                <div>
                  <v-icon color="#0bf4de">mdi-card-account-details-outline</v-icon>
                  {{ B_id }}
                </div>
              </v-card-text>

              <v-divider class="mx-4"></v-divider>
              <v-card-text>
                <div class="text-subtitle-1">{{ B_name }}</div>
                <div class="text-subtitle-1">
                  <span>No of Candidates: </span> <v-chip>{{ NoOfCandidate }}</v-chip>
                </div>

                <div><span>P.O. Box: </span>{{ B_box }}</div></v-card-text
              >

              <v-card-actions>
                <v-btn color="deep-white lighten-5" text @click="reserve"> Call </v-btn>
              </v-card-actions>
            </v-card>
          </b-col>
        </b-row>
      </v-content>
    </div>
  </v-app>
</template>

<script>
import db from "../firebaseInit";

export default {
  name: "mybureau",
  beforeRouteEnter: (to, from, next) => {
    db.collection("Yaya_Bureau")
      .where("User_id", "==", to.params.id)
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          next((vm) => {
            vm.Uid = doc.data().User_id;
            vm.name = doc.data().Name;
            vm.B_image = doc.data().Bureau_Image;
            vm.B_name = doc.data().Bureau_Name;
            vm.B_id = doc.data().ID_no;
            vm.B_email = doc.data().Email;
            vm.B_phone = doc.data().Phone_NO;
            vm.B_county = doc.data().County;
            vm.B_box = doc.data().Box_No;
            vm.NoOfCandidate = doc.data().No_of_candidates;
            console.log("Name", vm.name);
          });
        });
      });
  },
  mounted() {},
  data: () => ({
    name: null,
    Uid: null,
    id: null,
    B_name: null,
    B_image: null,
    B_id: null,
    B_email: null,
    B_phone: null,
    B_box: null,
    B_county: null,
    NoOfCandidate: 0,
    Candidates: [],
    avatar: require("@/assets/img/avtar.png"),
  }),
  methods: {
    fetch() {},
    showFirstImageGallery(v) {
      if (v == null) {
        return this.avatar;
      } else {
        return v;
      }
    },
  },
};
</script>

<style>
body {
}
.row-top {
  color: aliceblue;
  background-color: #1c1b2b;
  border-radius: 10px;
  padding: 10px;
}
.col-top {
}
.v-icon {
  color: #0bf4de;
  padding: 5px;
}
span {
  color: #0bf4de;
}
</style>
