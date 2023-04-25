import { tournamentMutationsDef, tournamentQuerysDef, tournamentTypesDef } from './tournament/tournament.type-defs';

const _tournamentsTypesDef = [
    tournamentTypesDef,
]
const _tournamentsQuerysDef = [
    tournamentQuerysDef,
]

const _tournamentsMutationsDef = [
    tournamentMutationsDef,
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