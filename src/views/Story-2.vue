<template>

  <v-container fluid fill-height pa-0>
    <!-- This is the navigation drawer at the left side -->
    <v-navigation-drawer absolute permanent expand-on-hover color="orange lighten-2">
      <v-list>
        <!-- Clicks are handled by menuCmd in methods -->
        <v-list-item @click="menuCmd" v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon color="red">{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <iframe class="storymap" src="/parallax/index.html"></iframe>

  </v-container>

</template>


<script>

export default {
  name: 'Story-2',
  components: {
  },
  data () {
    return {
      items: [
        { title: 'Note', icon: 'mdi-information', cmd: 'cmd-1' },
      ],
    }
  },
  methods: {
    menuCmd: function() {
      alert('Note: You cannot call directly methods in an iframe.')
    }
  }
}
</script>


<style scoped>
  .storymap {
    width: 100%;
    height: 100%;
    border: 0;
  }
</style>
