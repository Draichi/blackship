<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        {{ this.searchObj }}
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
  import gql from 'graphql-tag'
  const FeedQuery = gql `
    query allPosts {
      allPosts(filter: {
        countryName_in:"CHINA"
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
      searchObj: {
        type: Object,
        default: function () {
          return { description: '', imageUrl: '' }
        }
      }
    }
  }
</script>