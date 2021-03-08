<template>
  <div class="content">
    <v-row>
      <v-col class="mt-12 mb-2 mx-6" cols="12">
        <div class="gradient-background non-touch clip-text">
          <div class="text-subtitle-2 font-weight-bold">
            The Most Iconic Portfolio Website Lol xD
          </div>
          <v-tooltip top transition="slide-x-transition">
            <template v-slot:activator="{ on, attrs }">
              <div
                v-on="on"
                v-bind="attrs"
                :class="
                  (ismobile ? ' text-h2 ' : ' text-h1 ') +
                  ' underhover point-cursor font-weight-black'
                "
                @click="goToUrl('https://shaaan.tk')"
              >
                Shan.tk
              </div>
            </template>
            <span> Visit Now Immediately </span>
          </v-tooltip>
          <div class="text-h6 font-weight-bold">
            Next big feat? Let's Get that Done !
          </div>
        </div>
        <div class="text-body-2">
          <span class="font-weight-light">Project Codename: </span>
          <span class="font-weight-bold cyan--text"
            >&#8220; Mistaken-delicacy &#8221;</span
          >
        </div>
      </v-col>
      <v-col cols="12" class="non-touch">
        <div class="text-subtitle-1 mx-5 font-weight-bold">
          Utilizing Next Gen Technologies
          <v-icon class="mx-1" color="error">mdi-web</v-icon>
        </div>
        <div class="text-h6 mx-3 font-weight-bold">
          <span class="mx-2"> Uses </span>
          <span class="icon">
            <v-tooltip
              v-for="(icon, index) in techIcons"
              v-bind:key="index"
              top
              transition="slide-y-transition"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  :large="!ismobile"
                  v-on="on"
                  v-bind="attrs"
                  @click="goToUrl(icon.link)"
                >
                  <v-icon :color="icon.color">
                    {{ icon.icon }}
                  </v-icon>
                </v-btn>
              </template>
              <span>
                {{ icon.tip }}
              </span>
            </v-tooltip>
          </span>
          <span class="text-h5 mx-1"> and also.... </span>
          <span>
            <v-tooltip top transition="slide-y-transition">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  @click="goToUrl(accountDetails.link)"
                  v-on="on"
                  v-bind="attrs"
                  :large="!ismobile"
                  icon
                >
                  <v-icon color="primary">
                    {{ accountDetails.icon }}
                  </v-icon>
                </v-btn>
              </template>
              <span>{{ accountDetails.tip }}</span>
            </v-tooltip>
          </span>
        </div>
      </v-col>
      <v-col cols="12" class="my-0">
        <v-divider></v-divider>
      </v-col>
      <v-col cols="12">
        <div class="text-subtitle-1 font-weight-bold">Brief:</div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { ismobile } from '@/plugins/helpers';
export default {
  name: 'Home',
  data: () => {
    return {
      accountDetails: {
        icon: 'mdi-account-tie',
        tip: 'A Developer like Me',
        link: 'https://shaaan.tk/',
      },
    };
  },
  components: {},
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
    techIcons() {
      return [
        {
          icon: 'mdi-vuejs',
          tip: 'Vue Js',
          color: 'green',
          link: 'https://vuejs.org',
        },
        {
          icon: 'mdi-vuetify',
          tip: 'Vuetify Framework',
          color: 'blue',
          link: 'https://vuetifyjs.com/',
        },
        {
          icon: 'mdi-nodejs',
          tip: 'Nodejs Server',
          color: 'green',
          link: 'https://nodejs.org/',
        },
        {
          icon: 'mdi-api',
          tip: 'Express API',
          color: 'yellow',
          link: 'https://expressjs.com/',
        },
        {
          icon: 'mdi-database',
          tip: 'MongoDB Database',
          color: 'red',
          link: 'https://mongodb.com/',
        },
      ];
    },
  },
};
</script>
