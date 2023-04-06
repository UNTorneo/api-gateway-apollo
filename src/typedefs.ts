import { baseTypesDef } from "./core/graphql/base-responses";
import { userTypesDef, usersMutationsDef, usersQuerysDef } from "./features/users/users.type-defs";
import { sportTypesDef, sportsMutationsDef, sportsQuerysDef } from "./features/sports/sports.type-defs";
import { tournamentVenueMutationsDef, tournamentVenueQuerysDef, tournamentVenueTypesDef } from "./features/tournament-venue/tournament-venue.type-defs";

const typeDef: String[] = [
    baseTypesDef,
    tournamentVenueTypesDef,
    sportTypesDef,
    userTypesDef
]
const queryDef: String[] = [
    tournamentVenueQuerysDef,
    sportsQuerysDef,
    usersQuerysDef
]
const mutationDef: String[] = [
    tournamentVenueMutationsDef,
    sportsMutationsDef,
    usersMutationsDef
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