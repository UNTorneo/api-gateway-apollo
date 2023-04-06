import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { TournamentVenueApi } from './features/tournament-venue/tournament-venue.api';
import { resolvers } from './resolvers';
import { typeDefs } from './typedefs';
import { sportsApi } from './features/sports/sports.api';
import { UsersApi } from './features/users/users.api';

export interface ContextValue {
    dataSources: {
        tournamentVenueApi: TournamentVenueApi;
        sportsApi: sportsApi;
        usersApi: UsersApi;
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
                usersApi: new UsersApi({cache})
            },
        };
    },
});

console.log(`🚀  Server ready at: ${url}`);