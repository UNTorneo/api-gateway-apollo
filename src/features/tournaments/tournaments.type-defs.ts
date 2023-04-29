import { tournamentMutationsDef, tournamentQuerysDef, tournamentTypesDef } from './tournament/tournament.type-defs';
import { teamsMutationsDef, teamsQuerysDef, teamsTypesDef } from './teams/teams.type-defs';
import { matchesMutationsDef, matchesQuerysDef, matchesTypesDef } from './matches/matches.type-defs';

const _tournamentsTypesDef = [
    tournamentTypesDef,
    teamsTypesDef,
    matchesTypesDef,
]
const _tournamentsQuerysDef = [
    tournamentQuerysDef,
    teamsQuerysDef,
    matchesQuerysDef,
]

const _tournamentsMutationsDef = [
    tournamentMutationsDef,
    teamsMutationsDef,
    matchesMutationsDef,
]

export const tournamentsTypesDef = `#graphql
    ${_tournamentsTypesDef.join('\n')}
`;

export const tournamentsQuerysDef = `#graphql
    ${_tournamentsQuerysDef.join('\n')}
`;

export const tournamentsMutationsDef = `#graphql
    ${_tournamentsMutationsDef.join('\n')}
`;