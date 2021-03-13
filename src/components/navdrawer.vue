<template>
  <v-navigation-drawer v-model="$state.navbar.active" app>
    <v-container>
      <div v-if="!show_home" @mouseover="trigger_hover()" class="text-center">
        <v-toolbar-title class="text-h6 font-weight-black">
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
      <transition mode="out-in" type="fade">
        <v-tooltip
          :key="home_key"
          v-if="show_home"
          bottom
          transition="slide-y-transition"
        >
          <template v-slot:activator="{ on, attrs }">
            <div
              @mouseleave="trigger_hover()"
              v-on="on"
              v-bind="attrs"
              class="text-center"
            >
              <v-img
                src="https://media.giphy.com/media/38pz4QK5fettC/giphy.gif"
              ></v-img>
            </div>
          </template>
          <span>Go to Home</span>
        </v-tooltip>
      </transition>
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
      <div class="navigator">
        <v-list-item-group>
          <v-list-item
            v-for="(item, index) in $state.navdrawericons"
            v-bind:key="index"
            @click="$vuetify.goTo(item.id)"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </div>
    </v-container>
  </v-navigation-drawer>
</template>

<script>
import { ismobile } from '@/plugins/helpers';
export default {
  data: () => {
    return {
      title: 'Shan.tk',
      show_home: false,
      home_key: 0,
    };
  },
  methods: {
    goToUrl(url) {
      window.open(url);
      return;
    },
    trigger_hover() {
      this.show_home = !this.show_home;
      this.home_key++;
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
