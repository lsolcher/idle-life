<template>
  <v-card dark color="primary" style="cursor: pointer">
    <v-card-text class="pa-1 ma-0" @click="startAction()">
      <p class="pa-0 ma-0">
        <v-flex class="text-xs-center">
          {{name}}
          <img :src="getImage()" height="20px">
        </v-flex>
      </p>
      <v-progress-linear color="success" class="pa0 ma0" v-model="progressValue"></v-progress-linear>
    </v-card-text>
  </v-card>
</template>

<script>
import inventory from "../store/modules/inventory";

export default {
  data: () => ({
    progressValue: 50
  }),
  props: ["name", "image", "store", "kind"],
  methods: {
    startAction() {
      const self = this;
      this.intervalid1 = setInterval(function() {
        self.progressValue += 1;
      }, 50);
    },
    getImage() {
      return require("../assets/" + this.image);
    }
  },
  watch: {
    progressValue: function(value) {
      if (value >= 100) {
        //console.log(inventory);
        console.log(
          this.store +
            "/add" +
            (this.kind.charAt(0).toUpperCase() + this.kind.slice(1))
        );
        this.progressValue = 0;
        console.log(this.$store);
        // add inventory for the given kind
        this.$store.commit(
          this.store +
            "/add" +
            (this.kind.charAt(0).toUpperCase() + this.kind.slice(1)),
          1
        );
        console.log(this.$store.getters["inventory/meat"]);
      }
    }
  }
};
</script>

<style>
</style>
