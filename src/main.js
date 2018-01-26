// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'

import App from './App'
import router from './router'

const httpLink = new HttpLink({
  // http://localhost:4000/graphql
  // https://api.graph.cool/simple/v1/cjcupexrw13wv0152imgofd8l
  uri: 'https://api.graph.cool/simple/v1/cjcupexrw13wv0152imgofd8l'
})

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true
})

Vue.use(VueApollo)

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})

Vue.use(Vuetify, {
  theme: {
    primary: '#009688',
    secondary: '#80CBC4',
    accent: '#00796B'
  }
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  apolloProvider,
  template: '<App/>',
  components: { App }
})
