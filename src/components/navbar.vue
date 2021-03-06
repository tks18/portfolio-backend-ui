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
    <v-avatar
      @click="$router.push('/')"
      class="mx-2 point-cursor"
      color="primary"
      size="30"
    >
      <v-img :src="avatar"></v-img>
    </v-avatar>
    <v-toolbar-title
      @click="$router.push('/')"
      v-if="ismobile"
      class="text-h6 font-weight-black point-cursor"
    >
      {{ title }}
    </v-toolbar-title>
    <v-icon v-if="!ismobile" color="primary">mdi-chevron-double-right</v-icon>
    <v-slide-y-transition mode="out-in">
      <v-toolbar-title
        v-bind:key="routeKey"
        v-if="!ismobile"
        class="text-h6 font-weight-black"
      >
        {{ $route.name }}
      </v-toolbar-title>
    </v-slide-y-transition>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon @click="$router.push('about')"> mdi-github </v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import { ismobile } from '@/plugins/helpers';
export default {
  data: () => {
    return {
      title: 'Shan.tk',
      currentPage: '',
      routeKey: 0,
      avatar: 'https://i.ibb.co/9YwxPwZ/IMG-20191218-222419-347.webp',
    };
  },
  computed: {
    ismobile() {
      return ismobile();
    },
  },
  watch: {
    $route(to) {
      this.currentPage = to.name;
      this.routeKey++;
    },
  },
};
</script>

<style></style>
