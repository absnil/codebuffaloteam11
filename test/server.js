// import express from 'express';
// import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
// import bodyParser from 'body-parser';
// import schema from './data/schema';
var express = require('express');
var bodyParser = require('body-parser');
var { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
var { makeExecutableSchema } = require('graphql-tools');
var app = express();

var typeDefs = [`
type Query {
  hello: String
}

schema {
  query: Query
}`];

var resolvers = {
  Query: {
    hello(root) {
      return 'world';
    }
  }
};

var schema = makeExecutableSchema({typeDefs, resolvers});

app.use('/graphql', bodyParser.json(), graphqlExpress({schema}));
app.use('/graphiql', graphiqlExpress({endpointURL: '/graphql'}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphiql'));
