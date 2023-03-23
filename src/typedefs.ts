import { baseTypesDef } from "./core/graphql/base-responses";
import { tournamentVenueMutationsDef, tournamentVenueQuerysDef, tournamentVenueTypesDef } from "./features/tournament-venue/tournament-venue.type-defs";

const typeDef: String[] = [
    baseTypesDef,
    tournamentVenueTypesDef,
]
const queryDef: String[] = [
    tournamentVenueQuerysDef,
]
const mutationDef: String[] = [
    tournamentVenueMutationsDef,
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