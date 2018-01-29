<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-list three-line>
          <template v-for="(item, index) in allPosts">
            <v-list-tile v-bind:key="item.id" @click="toggle(index)">
              <v-list-tile-content>
                <v-list-tile-title>{{ item.countryName }} - {{ item.countryCode }}</v-list-tile-title>
                <v-list-tile-sub-title>US$ {{ formatPrice(item.rate) }}</v-list-tile-sub-title>
                <v-list-tile-sub-title>{{ item.method }}</v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-list-tile-action-text>{{ item.minWeight }} ~ {{ item.maxWeight }} grams</v-list-tile-action-text>
                <v-icon
                  color="grey lighten-1"
                  v-if="selected.indexOf(index) < 0"
                >star_border</v-icon>
                <v-icon
                  color="yellow darken-2"
                  v-else
                >star</v-icon>
              </v-list-tile-action>
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
        selected: [0],
        objQuery: {
          country: this.$store.state.searchObj.country,
          weight: parseInt(this.$store.state.searchObj.weight),
          length: parseInt(this.$store.state.searchObj.length),
          width: parseInt(this.$store.state.searchObj.width),
          height: parseInt(this.$store.state.searchObj.height),
          LWH: parseInt(this.$store.state.searchObj.length *
            this.$store.state.searchObj.width *
            this.$store.state.searchObj.height)
        }
      }
    },
    apollo: {
      allPosts: {
        query: FeedQuery,
        variables () {
          return this.objQuery
        },
        skip () {
          return !this.objQuery
        }
      }
    },
    name: 'Rate',
    methods: {
      toggle (index) {
        const i = this.selected.indexOf(index)

        if (i > -1) {
          this.selected.splice(i, 1)
        } else {
          this.selected.push(index)
        }
      },
      formatPrice (value) {
        let val = (value / 1).toFixed(2).replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
      }
    }
  }
</script>