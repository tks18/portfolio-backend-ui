<template>
  <v-app id="app">
    <navDrawer></navDrawer>
    <navbar></navbar>
    <v-main>
      <div class="content mx-2 my-1">
        <router-view></router-view>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import navbar from '@/components/navbar';
import navDrawer from '@/components/navdrawer';
export default {
  components: {
    navbar,
    navDrawer,
  },
  data: () => {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss"></style>
