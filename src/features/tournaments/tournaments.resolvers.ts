import { tournamentQueryResolvers, tournamentMutationResolvers } from './tournament/tournament.resolvers';
import { teamsQueryResolvers, teamsMutationResolvers } from './teams/teams.resolvers';
import { matchesQueryResolvers, matchesMutationResolvers } from './matches/matches.resolvers';

export const tournamentsQueryResolvers = {
    ...tournamentQueryResolvers,
    ...teamsQueryResolvers,
    ...matchesQueryResolvers,
}

export const tournamentsMutationResolvers = {
    ...tournamentMutationResolvers,
    ...teamsMutationResolvers,
    ...matchesMutationResolvers,
}