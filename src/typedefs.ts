import { baseTypesDef } from "./core/graphql/base-responses";
import { sportTypesDef, sportsMutationsDef, sportsQuerysDef } from "./features/sports/sports.type-defs";
import { tournamentVenueMutationsDef, tournamentVenueQuerysDef, tournamentVenueTypesDef } from "./features/tournament-venue/tournament-venue.type-defs";
import { tournamentsMutationsDef, tournamentsTypesDef, tournamentsQuerysDef } from './features/tournaments/tournaments.type-defs';

const typeDef: String[] = [
    baseTypesDef,
    tournamentVenueTypesDef,
    sportTypesDef,
    tournamentsTypesDef,
]
const queryDef: String[] = [
    tournamentVenueQuerysDef,
    sportsQuerysDef,
    tournamentsQuerysDef,
]
const mutationDef: String[] = [
    tournamentVenueMutationsDef,
    sportsMutationsDef,
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