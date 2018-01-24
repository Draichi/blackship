const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema.js');

const app = express();

app.use('/graphql', expressGraphQL({
    schema: schema,
    graphiql: true
}))

app.listen(4000, () => {
    console.log('\x1b[36m%s\x1b[0m','GRAPHIQL: http://localhost:4000/graphql');
})