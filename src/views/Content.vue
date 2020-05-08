<template>

  <v-card elevation="0" max-width="60%" class="mx-auto">

    <v-card-title>Choose a story map</v-card-title>

    <v-carousel v-model="model">
      <v-carousel-item v-for="(story, i) in stories" :key="story.color">
        <v-sheet @click="showStory(story.link)" :color="story.color" height="100%" tile>
          <v-row class="fill-height" align="center" justify="center">
            <div class="display-3">Story Map {{ i + 1 }}</div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>

  </v-card>

</template>


<script>

  export default {

    name: 'Content',

    data () {
      return {
        stories: [
          { color: 'primary lighten-3', link: '/story-1' },
          { color: 'secondary lighten-4', link: '/story-2' },
          { color: 'yellow lighten-2' },
          { color: 'red lighten-3' },
          { color: 'orange lighten-3' }
        ],
        model: 0,
      }
    },

    methods: {

      // Attaches source to iframe element
      showStory: function(link) {
        if (link) {
          this.$router.push(link)
        }
        else {
          alert('Story map not yet available.')
        }
      }

    }

  }

</script>
