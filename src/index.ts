import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { TournamentVenueApi } from './features/tournament-venue/tournament-venue.api';
import { ClanApi } from './features/clans/clans.api';
import { resolvers } from './resolvers';
import { typeDefs } from './typedefs';

export interface ContextValue {
    dataSources: {
        tournamentVenueApi: TournamentVenueApi;
        clanApi: ClanApi;
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
                clanApi: new ClanApi({cache}),
            },
        };
    },
});

console.log(`🚀  Server ready at: ${url}`);