<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-list three-line>
          <template v-for="(item, index) in allPosts">
            <v-list-tile v-bind:key="index">
              <v-list-tile-content>
                <v-list-tile-title>{{ item.countryName }} - {{ item.countryCode }}</v-list-tile-title>
                <v-list-tile-sub-title>{{ item.regionCode }} - {{ item.maxLength }}</v-list-tile-sub-title>
                <v-list-tile-sub-title>{{ item.maxLWH }} - {{ item.method }}</v-list-tile-sub-title>
                <v-list-tile-sub-title>{{ item.minWeight }} - {{ item.maxWeight }} - {{ item.rate }}</v-list-tile-sub-title>
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
  import gql from 'graphql-tag'
  const FeedQuery = gql `
    query allPosts {
      allPosts(filter: {
        countryName_in:"terceiro"
      }) {
        countryName
        countryCode
        regionCode
        maxLength
        maxLWH
        method
        minWeight
        maxWeight
        rate
      }
    }
`
  export default {
    data () {
      return {
        allPosts: {}
      }
    },
    apollo: {
      allPosts: {
        query: FeedQuery
      }
    },
    props: {
      obj: {
        type: Object,
        default: function () {
          return { description: '', imageUrl: '' }
        }
      }
    }
  }
</script>