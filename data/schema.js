
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import resolvers from './resolvers';
const typeDefs = `
type Query {

  getWeatherDetail: String

  activity(type: String!):BoredApi


}

query getAct($ty: String!){
  BoredApi(type:$ty){activity}
}

type BoredApi {
  activity: String
  accessibility: Float
  type: String
  participants : Int
  price: Float
  key: Int
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });
export default schema;
