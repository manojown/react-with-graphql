import express from 'express';
import bodyParser from 'body-parser';
import {
  graphqlExpress,
  graphiqlExpress
} from 'apollo-server-express';
import {
  makeExecutableSchema
} from 'graphql-tools';
import typeDefs from './schema/career';
import resolvers from './resolver/user';
import Collection from './config/connection'
import mongoose from 'mongoose';
import cors from 'cors'

let Port = process.env.PORT || 4000;
let MONGO = process.env.MONGO
mongoose.connect(MONGO);

const app = express();
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
app.use('/', express.static('build'))
app.use('/graphql', cors(), bodyParser.json(), graphqlExpress({
  schema,
  context: {
    Collection
  }
}));

app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}));


app.listen(Port, () => {
  console.log(`Go to http://localhost:${Port}/graphiql to run queries!`);
});