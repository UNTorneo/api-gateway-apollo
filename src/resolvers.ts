import { baseResolver } from "./core/graphql/base-resolver";
import { sportsMutationResolvers, sportsQueryResolvers } from "./features/sports/sports.resolvers";
import { tournamentVenueMutationResolvers, tournamentVenueQueryResolvers } from "./features/tournament-venue/tournament-venue.resolvers";
import { tournamentsMutationResolvers, tournamentsQueryResolvers } from './features/tournaments/tournaments.resolvers';

export const resolvers = {
    ...baseResolver,
    Query: {
        ...tournamentVenueQueryResolvers,
        ...sportsQueryResolvers,
        ...tournamentsQueryResolvers,
    },
    Mutation: {
        ...tournamentVenueMutationResolvers,
        ...sportsMutationResolvers,
        ...tournamentsMutationResolvers,
    },
}