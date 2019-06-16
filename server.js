import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import bodyParser from 'body-parser';
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import schema from './data/schema';
var cors = require('cors');
const GRAPHQL_PORT = 3000;

const graphQLServer = express();
graphQLServer.use(cors());
graphQLServer.use('/graphql', bodyParser.json(), graphqlExpress({ schema: schema,
    graphiql: true }));
graphQLServer.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

graphQLServer.listen(GRAPHQL_PORT, () =>
  console.log(
    `GraphiQL is now running on http://localhost:${GRAPHQL_PORT}/graphiql`
  )
);
