<template>
  <v-app light>
    <v-navigation-drawer
      fixed
      clipped
      hide-overlay
      :mini-variant="miniVariant"
      v-model="drawer"
      app
    >
      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :to="item.link"
          :key="i"
          exact
        >
          <v-list-tile-action>
            <v-icon light v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed app class="primary white--text">
      <v-toolbar-side-icon dark @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <router-link to="/" tag="span" style="cursor: pointer">
        <v-toolbar-title v-text="this.$route.name"></v-toolbar-title>
      </router-link>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        drawer: false,
        items: [
          {icon: 'home', title: 'Home', link: '/'}
        ],
        miniVariant: true,
        title: 'Calculator'
      }
    }
  }
</script>
