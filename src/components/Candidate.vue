<template>
  <v-app>
    <!-- <v-parallax src=""></v-parallax> -->
    <div class="container-fluid c-home">
      <v-main>
        <div class="text-center h-2"><h4>Candidates info</h4></div>
        <b-row>
          <b-col sm></b-col>
          <b-col sm="8" xl="8" md="8">
            <v-card class="my-12" max-width="900">
              <v-avatar size="150" class="white--text mt-10">
                <img
                  alt="user"
                  :src="showFirstImageGallery(C_image)"
                  class="image-candidate center col-sm-12"
                />
              </v-avatar>

              <v-card-title
                ><p>
                  {{ C_name }}
                </p></v-card-title
              >
              <v-card-text>
                <div>
                  <v-icon color="#0bf4de">mdi-phone-outline</v-icon>
                  <b> {{ C_phone }}</b>
                </div>

                <div>
                  <v-icon color="#0bf4de">mdi-card-account-details-outline</v-icon>
                  <b>{{ C_id }}</b>
                </div>
                <div>
                  <span
                    >Age:<b> {{ C_age }} </b>
                  </span>
                </div>
                <div>
                  County:<b> {{ C_county }} / {{ C_Ward }}</b>
                </div>
                <div>
                  <span
                    >Bureau name:<b> {{ C_BureauName }}</b>
                  </span>
                </div>
                <div>
                  <span
                    >Bureau number:<b> {{ C_BureauNo }}</b>
                  </span>
                </div>
                <div>
                  <span
                    >Work status:<b> {{ C_workStatus }}</b></span
                  >
                </div>
              </v-card-text>

              <v-divider class="mx-4"></v-divider>
              <v-card-text>
                <div class="">
                  Status:
                  <span
                    ><b>{{ C_status }}</b></span
                  >
                </div>
                <div class="">
                  Reg date:
                  <span
                    ><b> {{ C_RegDate.toDate() | formatDate }} </b></span
                  >
                </div>
                <div class="">
                  <span
                    >Salary:
                    <v-chip class="p-salary"
                      ><b>{{ C_salary }}</b></v-chip
                    ></span
                  >
                </div>
              </v-card-text>

              <v-card-actions>
                <!-- <v-btn color="deep-white lighten-5" text @click="reserve"> Call </v-btn> -->
              </v-card-actions>
            </v-card></b-col
          >
          <b-col sm></b-col> </b-row
      ></v-main>
    </div>
  </v-app>
</template>
<script>
import db from "../firebaseInit";
import moment from "moment";

export default {
  name: "candidate",
  created: { fetch },
  mounted: { fetch },

  methods: {
    moment: function () {
      return moment();
    },
    fetch() {
      db.collection("Yaya_Candidates")
        .where("CandidateID", "==", this.Uid)
        .onSnapshot((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            const data = {
              id: doc.id,
              C_id: doc.data().CandidateID,
              C_image: doc.data().Profile_image,
              CName: doc.data().Candidate_name,
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
    formatDate(dt) {
      return moment(String(dt)).format("ddd, MMMM YYYY");
      // you dont have to use fromNow() it's just an example
    },
  },
  beforeRouteEnter: (to, from, next) => {
    db.collection("Yaya_Candidates")
      .where("CandidateID", "==", to.params.id)
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          next((vm) => {
            vm.Uid = doc.data().CandidateID;
            vm.C_image = doc.data().Profile_image;
            vm.C_name = doc.data().Candidate_name;
            vm.C_id = doc.data().ID_no;
            vm.C_gender = doc.data().Gender;
            vm.C_phone = doc.data().Mobile_no;
            vm.C_county = doc.data().County;
            vm.C_status = doc.data().Status;
            vm.C_dob = doc.data().DOB;
            vm.C_age = doc.data().Age;
            vm.C_Ward = doc.data().Ward;
            vm.C_salary = doc.data().Salary;
            vm.C_BureauName = doc.data().BureauName;
            vm.C_BureauNo = doc.data().BureauNo;
            vm.C_RegDate = doc.data().timestamp;
            vm.C_WorkStatus = doc.data().Working_status;
            console.log("Name", vm.C_name);
          });
        });
      });
  },
  data: () => ({
    Uid: null,
    C_name: null,
    C_id: null,
    C_image: null,
    C_dob: null,
    C_ID: null,
    C_phone: null,
    C_county: null,
    C_age: null,
    C_salary: null,
    C_status: null,
    C_RegDate: null,
    C_Ward: null,
    C_BureauName: null,
    C_BureauNo: null,
    C_WorkStatus: null,
    avatar: require("@/assets/img/avtar.png"),
  }),
};
</script>
<style>
.p-salary {
  color: #1c1b2b;
}
.h-2 {
  color: #808080;
  padding: 20px;
}
.c-home {
  background-color: #1c1b2b;
}
body {
  color: #fff;
}
b {
  color: #1c1b2b;
}
span {
  color: #1c1b2b;
}
</style>
