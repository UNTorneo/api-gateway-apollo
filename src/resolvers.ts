import { baseResolver } from "./core/graphql/base-resolver";
import { tournamentVenueMutationResolvers, tournamentVenueQueryResolvers } from "./features/tournament-venue/tournament-venue.resolvers";

export const resolvers = {
    ...baseResolver,
    Query: {
        ...tournamentVenueQueryResolvers,
    },
    Mutation: {
        ...tournamentVenueMutationResolvers,
    },
}