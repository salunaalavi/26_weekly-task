<template>
  <v-app light>
    <v-container fluid>
      <v-card class="transition-swing">
        <v-container fill-height fluid>
          <v-layout>
            <v-flex
              xs12
              justify-center
              d-flex
            >
              <span class="headline">{{ list.title }}</span>
            </v-flex>
          </v-layout>
        </v-container>
        <v-card-actions v-for="(sublist, id) in list.subtitles" :key="id">
          <v-card-text>
            <v-chip small color="secondary" class="white--text">
              <h3>{{ sublist.title }}</h3>
            </v-chip>
            <p>{{ sublist.description }}</p>
          </v-card-text>
        </v-card-actions>
        <v-card-text style="text-align: center">
          <h3>Screenshots Task</h3>
        </v-card-text>
        <div v-for="(image, index) in list.images" :key="index">
          <v-img height="100%" :src="image.url"></v-img>
        </div>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" nuxt to="/"> Home </v-btn>
          <v-spacer />
        </v-card-actions>
      </v-card>
    </v-container>
  </v-app>
</template>
<script>
export default {
  name: 'DetailSection',
  computed: {
    list() {
      return this.$store.state.sections.lists.find(
        (list) =>
          list.title
            .toLowerCase() // LowerCase
            .replace(/\s+/g, '-') // space to -
            .replace(/&/g, `-and-`) // & to and
            .replace(/--/g, `-`) === this.$route.params.title
      )
    },
  },
}
</script>
