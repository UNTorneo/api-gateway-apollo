import { baseTypesDef } from "./core/graphql/base-responses";
import { tournamentVenueMutationsDef, tournamentVenueQuerysDef, tournamentVenueTypesDef } from "./features/tournament-venue/tournament-venue.type-defs";
import { clansTypesDef, clansQuerysDef, clansMutationsDef } from "./features/clans/clans.type-defs";

const typeDef: String[] = [
    baseTypesDef,
    tournamentVenueTypesDef,
    clansTypesDef,
]
const queryDef: String[] = [
    tournamentVenueQuerysDef,
    clansQuerysDef,
]
const mutationDef: String[] = [
    tournamentVenueMutationsDef,
    clansMutationsDef,
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