import { ApolloServer, BaseContext } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { TournamentVenueApi } from './features/tournament-venue/tournament-venue.api';
import { ClanApi } from './features/clans/clans.api';
import { resolvers } from './resolvers';
import { typeDefs } from './typedefs';
import { sportsApi } from './features/sports/sports.api';
import { UsersApi } from './features/users/users.api';
import { TournamentApi } from './features/tournaments/tournaments.api';
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

export interface ContextValue {
    dataSources: {
        tournamentVenueApi: TournamentVenueApi;
        sportsApi: sportsApi;
        usersApi: UsersApi;
        clanApi: ClanApi;
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
                usersApi: new UsersApi({cache}),
                clanApi: new ClanApi({cache}),
                tournamentApi: new TournamentApi({cache}),
            },
        };
    },
});

console.log(`🚀  Server ready at: ${url}`);