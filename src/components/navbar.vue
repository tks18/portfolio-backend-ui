<template>
  <v-app-bar app absolute elevate-on-scroll dense flat>
    <v-app-bar-nav-icon
      v-if="ismobile"
      @click="
        $state.navbar.active == null
          ? ($state.navbar.active = true)
          : ($state.navbar.active = !$state.navbar.active)
      "
    ></v-app-bar-nav-icon>
    <v-toolbar-title> {{ title }} </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon> mdi-github </v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import { ismobile } from '@/plugins/helpers';
export default {
  data: () => {
    return {
      title: 'Shan.tk',
    };
  },
  computed: {
    ismobile() {
      return ismobile();
    },
  },
};
</script>

<style></style>
