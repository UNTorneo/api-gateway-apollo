import { baseResolver } from "./core/graphql/base-resolver";
import { tokenResolver, usersMutationResolvers, usersQueryResolvers } from "./features/users/users.resolvers";
import { sportsMutationResolvers, sportsQueryResolvers } from "./features/sports/sports.resolvers";
import { tournamentVenueMutationResolvers, tournamentVenueQueryResolvers } from "./features/tournament-venue/tournament-venue.resolvers";
import { clansMutationResolvers, clansQueryResolvers } from "./features/clans/clans.resolvers";
import { tournamentsMutationResolvers, tournamentsQueryResolvers } from './features/tournaments/tournaments.resolvers';

export const resolvers = {
    ...baseResolver,
    ...tokenResolver,
    Query: {
        ...tournamentVenueQueryResolvers,
        ...sportsQueryResolvers,
        ...usersQueryResolvers,
        ...clansQueryResolvers,
        ...tournamentsQueryResolvers,
    },
    Mutation: {
        ...tournamentVenueMutationResolvers,
        ...sportsMutationResolvers,
        ...usersMutationResolvers,
        ...clansMutationResolvers,
        ...tournamentsMutationResolvers,
    },
}