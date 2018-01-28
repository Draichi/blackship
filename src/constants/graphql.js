import gql from 'graphql-tag'

export const FeedQuery = gql `
  query allPosts($country:[String!]) {
    allPosts(filter: {
      countryName_in:$country
    }) {
      id
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
