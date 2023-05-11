export const matchesTypesDef = `#graphql
    type Match {
        id: String!
        tournamentId: String!
        homeTeam: String!
        visitingTeam: String!
        homeTeamScore: Int!
        visitingTeamScore: Int!
        date: String!
        courtId: String!
        status: String!
        createdAt: String!
        updatedAt: String!
    }

    input AddMatch {
        tournamentId: String!
        homeTeam: String!
        visitingTeam: String!
        homeTeamScore: Int
        visitingTeamScore: Int
        date: String!
        courtId: String!
        status: String!
    }

    input UpdateMatch {
        tournamentId: String
        homeTeam: String
        visitingTeam: String
        homeTeamScore: Int
        visitingTeamScore: Int
        date: String
        courtId: String
        status: String
    }
`;

export const matchesQuerysDef = `#graphql
    getMatches: [Match]
    getMatch(id: String!): Match
    getTournamentMatches(tournamentId: String!): [Match]
    getTeamMatches(teamId: String!): [Match]
`;

export const matchesMutationsDef = `#graphql
    addMatch(match: AddMatch!): RequestResponse
    deleteMatch(id: String!): RequestResponse
    updateMatch(id: String!, match: UpdateMatch!): RequestResponse
    startMatch(id: String!): RequestResponse
    endMatch(id: String!): RequestResponse
`;