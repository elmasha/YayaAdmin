<template>
  <v-app>
    <div class="container-fluid">
      <v-content>
        <b-row class="row-top">
          <b-col sm class="col-top">
            <v-card :loading="loading" class="my-2" max-width="400" dark color="#1c1b2b">
              <template slot="progress">
                <v-progress-linear
                  color="deep-purple"
                  height="10"
                  indeterminate
                ></v-progress-linear>
              </template>

              <v-avatar size="100" class="white--text mt-8">
                <img
                  alt="user"
                  :src="showFirstImageGallery(B_image)"
                  class="image-bureau"
                />
              </v-avatar>

              <v-card-title
                ><p>
                  {{ UserName }}
                </p></v-card-title
              >
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
          <hr />
          <b-col sm>
            <v-card max-width="500" dark color="#1c1b2b">
              <h4 class="data-h4">{{ B_name }} candidates</h4>
              <v-list shaped class="v-list-c" color="#1c1b2b">
                <v-subheader>Candidate list</v-subheader>
                <v-list-item-group v-for="(Candidate, id) in Candidates" v-bind:key="id">
                  <v-list-item>
                    <v-list-item-avatar>
                      <img
                        :src="showFirstImageGallery(Candidate.C_image)"
                        @error="avatar"
                        class="image-candidate"
                    /></v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title class=""
                        ><h3 class="name-bureau d-flex">
                          <b>{{ Candidate.C_name }}</b>
                        </h3></v-list-item-title
                      >
                      <p class="name-candidate">
                        <span>Status: </span>{{ Candidate.C_status }}
                      </p>
                      <br />
                      <span class="work-candidate"
                        >Work status:<b class="b-list">{{
                          Candidate.C_workStatus
                        }}</b></span
                      >
                    </v-list-item-content>
                    <v-btn icon>
                      <router-link
                        v-bind:to="{
                          name: 'candidate',
                          params: { id: Candidate.id },
                        }"
                      >
                        <v-icon>mdi-information-outline</v-icon>
                      </router-link>
                    </v-btn>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
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
  created() {
    this.fetch();
  },
  mounted() {
    this.fetch();
  },
  beforeRouteEnter: (to, from, next) => {
    db.collection("Yaya_Bureau")
      .where("User_id", "==", to.params.id)
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          next((vm) => {
            vm.Uid = doc.data().User_id;
            vm.UserName = doc.data().Name;
            vm.B_image = doc.data().Bureau_Image;
            vm.B_name = doc.data().Bureau_Name;
            vm.B_id = doc.data().ID_no;
            vm.B_email = doc.data().Email;
            vm.B_phone = doc.data().Phone_NO;
            vm.B_county = doc.data().County;
            vm.B_box = doc.data().Box_No;
            vm.NoOfCandidate = doc.data().No_of_candidates;
            console.log("Name", vm.UserName);
          });
        });
      });
  },

  data: () => ({
    UserName: null,
    Uid: null,
    id: null,
    B_name: null,
    B_image: null,
    B_id: null,
    B_email: null,
    B_phone: null,
    B_box: null,
    B_county: null,
    C_name: null,
    C_phone: null,
    C_status: null,
    C_gender: null,
    C_workStatus: null,
    C_image: null,
    C_id: null,
    NoOfCandidate: 0,
    Candidates: [],
    avatar: require("@/assets/img/avtar.png"),
  }),
  methods: {
    fetch() {
      db.collection("Yaya_Candidates")
        .where("User_ID", "==", this.Uid)
        .onSnapshot((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            const data = {
              id: doc.id,
              C_id: doc.data().CandidateID,
              C_image: doc.data().Profile_image,
              C_name: doc.data().Candidate_name,
              C_status: doc.data().Status,
              C_phone: doc.data().Mobile_no,
              C_workStatus: doc.data().Working_status,
              C_gender: doc.data().Gender,
            };
            this.Candidates.push(data);
            console.log("My Candidate", this.Candidates);
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
};
</script>

<style>
.rout-link {
  text-decoration: none;
}
body {
  color: rgb(160, 160, 160);
}
.row-top {
  color: aliceblue;
  background-color: #1c1b2b;
  border-radius: 0px 0px 10px 10px;
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
.v-list-c {
  height: 600px;
  overflow-y: auto;
  transition: overflow 0 2s;
}
.h1-name {
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
}
.data-h4 {
  color: #0bf4de;
  font-size: 20px;
  font-weight: 500;
  text-decoration: none;
}
.name-bureau {
  font-weight: 200;
  font-size: 15px;
  color: rgb(179, 176, 176);
}
.name-candidate {
  font-weight: 400;
  font-size: 14px;
  color: #fff;
}
.work-candidate {
  font-weight: 400;
  font-size: 15px;
  color: #0bf4de;
}
.label-b {
  color: #0bf4de;
}

.b-list {
  font-size: 15px;
  color: #1c1b2b;
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
