<template>
  <v-card dark color="primary" style="cursor: pointer">
    <v-card-text class="pa-1 ma-0" @click="startAction()">
      <p class="pa-0 ma-0">
        <v-flex class="text-xs-center">
          {{name}}
          <img src="../assets/steak.png" height="20px">
        </v-flex>
      </p>
      <v-progress-linear color="success" class="pa0 ma0" v-model="progressValue"></v-progress-linear>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    progressValue: 50
  }),
  props: ["name"],
  methods: {
    startAction() {
      const self = this;
      this.intervalid1 = setInterval(function() {
        self.progressValue += 1;
      }, 300);
    }
  },
  watch: {
    progressValue: function(value) {
      console.log(value);
      if (value >= 100) {
        this.progressValue = 0;
      }
    }
  }
};
</script>

<style>
</style>
