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
    <v-avatar class="mx-2" color="primary" size="30">
      <v-img :src="avatar"></v-img>
    </v-avatar>
    <v-toolbar-title v-if="ismobile" class="text-h6 font-weight-black">
      {{ title }}
    </v-toolbar-title>
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
      avatar: 'https://i.ibb.co/9YwxPwZ/IMG-20191218-222419-347.webp',
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
