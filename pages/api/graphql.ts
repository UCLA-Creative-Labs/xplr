
import { ApolloServer } from 'apollo-server-micro';
import * as resolvers from '../../server/resolvers';
import typeDefs from '../../server/schema';

export const config = {
  api: {
    bodyParser: false,
  },
};

export const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  context: (ctx) => ctx,
});

const startServer = server.start();

export default async function handler(req, res) {
  await startServer;
  await server.createHandler({ path: '/api/graphql' })(req, res);
}
