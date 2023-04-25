import { baseTypesDef } from "./core/graphql/base-responses";
import { userTypesDef, usersMutationsDef, usersQuerysDef } from "./features/users/users.type-defs";
import { sportTypesDef, sportsMutationsDef, sportsQuerysDef } from "./features/sports/sports.type-defs";
import { tournamentVenueMutationsDef, tournamentVenueQuerysDef, tournamentVenueTypesDef } from "./features/tournament-venue/tournament-venue.type-defs";
import { clansTypesDef, clansQuerysDef, clansMutationsDef } from "./features/clans/clans.type-defs";
import { tournamentsMutationsDef, tournamentsTypesDef, tournamentsQuerysDef } from './features/tournaments/tournaments.type-defs';

const typeDef: String[] = [
    baseTypesDef,
    tournamentVenueTypesDef,
    sportTypesDef,
    userTypesDef,
    clansTypesDef,
    tournamentsTypesDef,
]
const queryDef: String[] = [
    tournamentVenueQuerysDef,
    sportsQuerysDef,
    usersQuerysDef,
    clansQuerysDef,
    tournamentsQuerysDef,
]
const mutationDef: String[] = [
    tournamentVenueMutationsDef,
    sportsMutationsDef,
    usersMutationsDef,
    clansMutationsDef,
    tournamentsMutationsDef,
]


export const typeDefs = `#graphql
    ${typeDef.join('\n')}

    type Query {
        ${queryDef.join('\n')}
    }

    type Mutation {
        ${mutationDef.join('\n')}
    }
`;