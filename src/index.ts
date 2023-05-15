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
import winston from 'winston';
import { ChatApi } from './features/chats/chats.api';
dotenv.config()

export interface ContextValue {
    dataSources: {
        tournamentVenueApi: TournamentVenueApi;
        sportsApi: sportsApi;
        usersApi: UsersApi;
        clanApi: ClanApi;
        tournamentApi: TournamentApi;
        chatsApi: ChatApi;
    };
}

const server = new ApolloServer<ContextValue>({
    typeDefs,
    resolvers,
});

const { url } = await startStandaloneServer(server, {
    context: async () => {
        const { cache } = server;
        const logger = winston.createLogger({
            transports: [
                new winston.transports.Console(),
            ]
        });
        return {
            dataSources: {
                tournamentVenueApi: new TournamentVenueApi({ cache, logger }),
                sportsApi: new sportsApi({ cache, logger }),
                usersApi: new UsersApi({ cache, logger }),
                clanApi: new ClanApi({ cache, logger }),
                tournamentApi: new TournamentApi({ cache, logger }),
                chatsApi: new ChatApi({ cache, logger})
            },
        };
    },
});

console.log(`🚀  Server ready at: ${url}`);