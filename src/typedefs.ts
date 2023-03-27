import { baseTypesDef } from "./core/graphql/base-responses";
import { sportTypesDef, sportsMutationsDef, sportsQuerysDef } from "./features/sports/sports.type-defs";
import { tournamentVenueMutationsDef, tournamentVenueQuerysDef, tournamentVenueTypesDef } from "./features/tournament-venue/tournament-venue.type-defs";

const typeDef: String[] = [
    baseTypesDef,
    tournamentVenueTypesDef,
    sportTypesDef,
]
const queryDef: String[] = [
    tournamentVenueQuerysDef,
    sportsQuerysDef
]
const mutationDef: String[] = [
    tournamentVenueMutationsDef,
    sportsMutationsDef
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