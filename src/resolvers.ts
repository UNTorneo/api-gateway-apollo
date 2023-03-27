import { baseResolver } from "./core/graphql/base-resolver";
import { sportsMutationResolvers, sportsQueryResolvers } from "./features/sports/sports.resolvers";
import { tournamentVenueMutationResolvers, tournamentVenueQueryResolvers } from "./features/tournament-venue/tournament-venue.resolvers";

export const resolvers = {
    ...baseResolver,
    Query: {
        ...tournamentVenueQueryResolvers,
        ...sportsQueryResolvers
    },
    Mutation: {
        ...tournamentVenueMutationResolvers,
        ...sportsMutationResolvers
    },
}