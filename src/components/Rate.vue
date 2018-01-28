<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-btn to="/">
        <v-icon>home</v-icon>
      </v-btn>
      <v-card>
        <v-list three-line>
          <template v-for="(item, index) in allPosts">
            <v-list-tile v-bind:key="index">
              <v-list-tile-content>
                <v-list-tile-title>Country: {{ item.countryName }} - {{ item.countryCode }}</v-list-tile-title>
                <v-list-tile-sub-title>Region code: {{ item.regionCode }} - Max Length: {{ item.maxLength }}</v-list-tile-sub-title>
                <v-list-tile-sub-title>Max LWH: {{ item.maxLWH }} - Method:{{ item.method }}</v-list-tile-sub-title>
                <v-list-tile-sub-title>Min Weight: {{ item.minWeight }} - Max Weight: {{ item.maxWeight }} - Rate: {{ item.rate }}</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-divider v-if="index + 1 < allPosts.length" :key="index"></v-divider>
          </template>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  import { FeedQuery } from '../constants/graphql'
  export default {
    data () {
      return {
        allPosts: {},
        variaveis: {
          country: String(this.$store.state.searchObj.country)
        }
      }
    },
    apollo: {
      allPosts: {
        query: FeedQuery,
        variables () {
          return this.variaveis
        },
        skip () {
          return !this.variaveis
        }
      }
    },
    name: 'Rate'
  }
</script>