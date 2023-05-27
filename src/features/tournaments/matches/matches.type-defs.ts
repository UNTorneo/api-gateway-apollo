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

    type MatchPopulated {
        id: String!
        tournamentId: Tournament!
        homeTeam: Team!
        visitingTeam: Team!
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
    getMatches: [MatchPopulated]
    getMatch(id: String!): MatchPopulated
    getTournamentMatches(tournamentId: String!): [Match]
    getTeamMatches(teamId: String!): [Match]
`;

export const matchesMutationsDef = `#graphql
    addMatch(match: AddMatch!): RequestResponse
    deleteMatch(id: String!): RequestResponse
    updateMatch(id: String!, match: UpdateMatch!): RequestResponse
    startMatch(token:String!,id: String!): RequestResponse
    endMatch(token:String!,id: String!): RequestResponse
`;