import gql from 'graphql-tag'

export const FeedQuery = gql `
  query allPosts($country:[String!], $weight:Int!, $LWH:Int!, $length:Int!) {
    allPosts(filter: {
      countryName_in: $country,
      maxWeight_gte: $weight,
      minWeight_lte: $weight,
      maxLWH_gte: $LWH,
      maxLength_gte: $length
    }
    orderBy: rate_DESC) {
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
export const Countries = gql `
  query allPosts {
    allPosts {
      countryName
    }
  }
`
