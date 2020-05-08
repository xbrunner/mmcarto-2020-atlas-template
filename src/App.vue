<!--
  ATLAS TEMPLATE
  Multimedia Cartography
  Institute of Cartography
  Spring semester 2020
  hbaer@ethz.ch
-->

<template>

  <!-- Contents of the application window -->
  <v-app>
    <v-app-bar app color="green darken-4" dark flat>

      <!-- Navigation icon -->
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>Atlas of Sustainable Development</v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- Use of Vue Router to link dieffernet content.
           See router/index.js to learn how to add new components. -->
      <v-btn text to="/">Welcome</v-btn>
      <v-btn text to="/content">Content</v-btn>
      <v-btn text to="/imprint">Imprint</v-btn>

    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary clipped></v-navigation-drawer>

    <v-content>
      <!-- This is where the selected component is displayed -->
      <router-view/>
    </v-content>

  </v-app>

</template>


<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    drawer: false
  }),
};
</script>
