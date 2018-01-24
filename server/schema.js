const axios = require('axios');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull,
} = require('graphql');

// Rate Type
const RateType = new GraphQLObjectType({
    name: 'Rate',
    fields: () => ({
        "countryName": {type: GraphQLString},
        "countryCode": {type: GraphQLString},
        "regionCode": {type: GraphQLInt},
        "maxLength": {type: GraphQLInt},
        "maxLWH": {type: GraphQLInt},
        "method": {type: GraphQLString},
        "minWeight": {type: GraphQLInt},
        "maxWeight": {type: GraphQLInt},
        "rate": {type: GraphQLInt}
    })
});

// Root Query
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        rates: {
            type: new GraphQLList(RateType),
            resolve(parentValue) {
                return axios.get('http://localhost:3000/rates')
                    .then(res => res.data);
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});