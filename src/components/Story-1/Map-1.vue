<template>
  <v-container>
    <!-- Centered title -->
    <v-row class="text-center my-12 green--text text--darken-3">
      <v-col cols="12"><span class="display-3">Storymap</span></v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
// import Welcome from '@/components/Welcome.vue'

export default {
  name: 'Map-1',
  components: {
    // Welcome
  },
  data: () => ({
  }),

  mounted: function () {
    this.$root.$on('handleCmd', cmd => {
      alert('Command received: ' + cmd)
      // Do whatever is appropriate
    })
  },

  destroyed: function () {
    // It is important the the event handler is detached
    this.$root.$off('handleCmd')
  }

}
</script>
