import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { TournamentVenueApi } from './features/tournament-venue/tournament-venue.api';
import { resolvers } from './resolvers';
import { typeDefs } from './typedefs';

export interface ContextValue {
    dataSources: {
        tournamentVenueApi: TournamentVenueApi;
    };
}

const server = new ApolloServer<ContextValue>({
    typeDefs,
    resolvers,
});

const { url } = await startStandaloneServer(server, {
    context: async () => {
        const { cache } = server;
        return {
            dataSources: {
                tournamentVenueApi: new TournamentVenueApi({ cache }),
            },
        };
    },
});

console.log(`🚀  Server ready at: ${url}`);