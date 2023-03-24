import { baseResolver } from "./core/graphql/base-resolver";
import { tournamentVenueMutationResolvers, tournamentVenueQueryResolvers } from "./features/tournament-venue/tournament-venue.resolvers";
import { clansMutationResolvers, clansQueryResolvers } from "./features/clans/clans.resolvers";

export const resolvers = {
    ...baseResolver,
    Query: {
        ...tournamentVenueQueryResolvers,
        ...clansQueryResolvers
    },
    Mutation: {
        ...tournamentVenueMutationResolvers,
        ...clansMutationResolvers
    },
}