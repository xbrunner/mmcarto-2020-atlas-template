<template>

  <v-container fluid fill-height pa-0>
    <!-- This is the navigation drawer at the left side -->
    <v-navigation-drawer absolute permanent expand-on-hover color="green darken-4">
      <!-- The list is created from data -->
      <v-list>
        <!-- Clicks are handled by menuCmd in methods -->
        <v-list-item @click="menuCmd(item.cmd)" v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

    </v-navigation-drawer>
    <Map_1/>
    <!-- Add other other components as appropriate -->
  </v-container>

</template>


<script>

// @ is an alias to /src
import Map_1 from '@/components/Story-1/Map-1.vue'

export default {
  name: 'Story-1',
  components: {
    Map_1
  },
  data () {
    return {
      items: [
        { title: 'Menu item 1', icon: 'mdi-home', cmd: 'cmd-1' },
        { title: 'Menu item 2', icon: 'mdi-train', cmd: 'cmd-2' },
        { title: 'Menu item 3', icon: 'mdi-human', cmd: 'cmd-3' },
      ],
    }
  },
  methods: {
    // Handle click events
    menuCmd: function(cmd) {
      // The menu command will be received by the map panel
      this.$root.$emit('handleCmd', cmd)
    }
  }
}
</script>
