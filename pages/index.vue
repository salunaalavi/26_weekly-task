<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card>
        <v-card-title class="headline">
          Welcome to Saluna Alavi's weekly task
        </v-card-title>
        <v-card-text>
          <p>
            Pada weekly task ini berisi materi-materi berikut:
          </p>
          <v-list>
            <v-list-item
              v-for="(item, i) in items"
              :key="i"
              :to="toUrl(item.title)"
              router
              exact
            >
              <v-list-item-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title v-text="item.title" />
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
  computed: {
    items() {
      return this.$store.state.sections.lists;
    },
  },
  methods: {
    toUrl(value) {
      value = value
        .toLowerCase() // LowerCase
        .replace(/\s+/g, '-') // space to -
        .replace(/&/g, `-and-`) // & to and
        .replace(/--/g, `-`)
      return value
    },
  }, 
}
</script>
