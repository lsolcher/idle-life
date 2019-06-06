<template>
  <v-container>
    <v-flex xs12>
      <p class="mb-3">Idea: personal dynasty through the ages</p>
    </v-flex>
    <v-layout xs12>
      <v-flex xs2>
        <TaskBar name="Gather Food"/>
      </v-flex>
      <v-flex xs8>
        <v-card dark color="primary">
          <v-card-text class="px-0">main</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs2>
        <v-card dark color="primary">
          <v-card-text class="px-0">task</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <v-flex xs2>
      <v-card dark color="primary">
        <v-card-text class="px-0">task</v-card-text>
      </v-card>
    </v-flex>
    <v-flex xs2>
      <v-card dark color="primary">
        <v-card-text class="px-0">task</v-card-text>
      </v-card>
    </v-flex>
    <v-flex xs2>
      <v-card dark color="primary">
        <v-card-text class="px-0">task</v-card-text>
      </v-card>
    </v-flex>
    <v-flex xs2>
      <v-card dark color="primary">
        <v-card-text class="px-0">task</v-card-text>
      </v-card>
    </v-flex>
  </v-container>
</template>

<script>
import TaskBar from "../components/TaskBar";

export default {
  components: { TaskBar },
  data() {
    return {
      valueDeterminate: 50
    };
  }
};
</script>
