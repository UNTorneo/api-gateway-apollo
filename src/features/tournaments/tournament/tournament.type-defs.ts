export const tournamentTypesDef = `#graphql
    type Tournament {
        id: String!
        name: String!
        teams: [String]!
        sportId: String!
        modeId: String!
        clanId: String
        venueId: String
        venueName: String
        access: String!
        status: String!
        createdAt: String!
        updatedAt: String!
    }

    input AddTournament {
        name: String!
        teams: [String]!
        sportId: String!
        modeId: String!
        clanId: String
        venueId: String
        venueName: String
        access: String!
        status: String!
    }

    input UpdateTournament {
        name: String
        teams: [String]
        sportId: String
        modeId: String
        clanId: String
        venueId: String
        venueName: String
        access: String
        status: String
    }
`;

export const tournamentQuerysDef = `#graphql
    getTournaments: [Tournament]
    getTournament(id: String!): Tournament
    getTournamentsInProgress: [Tournament]
    getTournamentsByStatus(status: String!): [Tournament]
`;

export const tournamentMutationsDef = `#graphql
    addTournament(tournament: AddTournament): RequestResponse
    deleteTournament(id: String!): RequestResponse
    updateTournament(id: String!, tournament: UpdateTournament!): RequestResponse
`;