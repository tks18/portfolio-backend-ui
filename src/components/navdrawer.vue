<template>
  <v-navigation-drawer v-model="$state.navbar.active" app>
    <v-container>
      <div class="text-center">
        <v-toolbar-title v-if="!ismobile" class="text-h6 font-weight-black">
          {{ title }}
        </v-toolbar-title>
        <div
          :class="
            ismobile
              ? 'text-subtitle-2 font-weight-normal'
              : 'text-caption font-weight-light'
          "
        >
          Backend API Docs
        </div>
      </div>
      <v-divider class="my-1"></v-divider>
      <div class="text-center">
        <v-tooltip
          v-for="(icon, index) in icons"
          v-bind:key="index"
          bottom
          transition="slide-y-transition"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-on="on" v-bind="attrs" @click="goToUrl(icon.link)" icon>
              <v-icon color="primary" class="mx-1">{{ icon.icon }}</v-icon>
            </v-btn>
          </template>
          <span>{{ icon.tooltip }}</span>
        </v-tooltip>
      </div>
      <v-divider class="my-1"></v-divider>
    </v-container>
  </v-navigation-drawer>
</template>

<script>
import { ismobile } from '@/plugins/helpers';
export default {
  data: () => {
    return {
      title: 'Shan.tk',
    };
  },
  methods: {
    goToUrl(url) {
      window.open(url);
      return;
    },
  },
  computed: {
    ismobile() {
      return ismobile();
    },
    icons() {
      return [
        {
          icon: 'mdi-twitter',
          link: 'https://twitter.com/shantk18',
          tooltip: 'Twitter',
        },
        {
          icon: 'mdi-github',
          link: 'https://github.com/tks18',
          tooltip: 'Github',
        },
        {
          icon: 'mdi-mail',
          link: 'mailto:me@shaaan.tk',
          tooltip: 'Email Me',
        },
        {
          icon: 'mdi-linkedin',
          link: 'https://www.linkedin.com/in/shantk18/',
          tooltip: 'Linked In',
        },
        {
          icon: 'mdi-camera',
          link: 'https://unsplash.com/@shantk18',
          tooltip: 'Photos',
        },
      ];
    },
  },
};
</script>

<style></style>
