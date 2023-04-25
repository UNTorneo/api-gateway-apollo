import { ApolloServer, BaseContext } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { TournamentVenueApi } from './features/tournament-venue/tournament-venue.api';
import { resolvers } from './resolvers';
import { typeDefs } from './typedefs';
import { sportsApi } from './features/sports/sports.api';
import { TournamentApi } from './features/tournaments/tournaments.api';
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
export interface ContextValue extends BaseContext{
    dataSources: {
        tournamentVenueApi: TournamentVenueApi;
        sportsApi: sportsApi;
        tournamentApi: TournamentApi;
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
                sportsApi: new sportsApi({cache}),
                tournamentApi: new TournamentApi({cache}),
            },
        };
    },
});

console.log(`🚀  Server ready at: ${url}`);