import { tournamentQueryResolvers, tournamentMutationResolvers } from './tournament/tournament.resolvers';

export const tournamentsQueryResolvers = {
    ...tournamentQueryResolvers,
}

export const tournamentsMutationResolvers = {
    ...tournamentMutationResolvers,
}