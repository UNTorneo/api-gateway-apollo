import { baseResolver } from "./core/graphql/base-resolver";
import { usersMutationResolvers, usersQueryResolvers } from "./features/users/users.resolvers";
import { sportsMutationResolvers, sportsQueryResolvers } from "./features/sports/sports.resolvers";
import { tournamentVenueMutationResolvers, tournamentVenueQueryResolvers } from "./features/tournament-venue/tournament-venue.resolvers";

export const resolvers = {
    ...baseResolver,
    Query: {
        ...tournamentVenueQueryResolvers,
        ...sportsQueryResolvers,
        ...usersQueryResolvers
    },
    Mutation: {
        ...tournamentVenueMutationResolvers,
        ...sportsMutationResolvers,
        ...usersMutationResolvers
    },
}