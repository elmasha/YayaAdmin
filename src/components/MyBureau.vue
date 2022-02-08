<template>
  <v-app>
    <div class="container-fluid">
      <h3>MyBureau Section{{ name }}</h3>
    </div>
  </v-app>
</template>

<script>
import db from "../firebaseInit";

export default {
  name: "mybureau",
  beforeEnter: (to, next) => {
    db.collection("Yaya_Bureau")
      .doc(to.params.id)
      .get()
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          next((vm) => {
            vm.name = doc.data().Name;
          });
        });
      });
  },
  data: () => ({
    name: null,
    NoOfCandidate: 0,
    NoOfHelpers: 0,
    Helpers: [],
    avatar: require("@/assets/img/avtar.png"),
  }),
};
</script>

<style></style>
