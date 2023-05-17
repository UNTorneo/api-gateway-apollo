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

    type TournamentSport{
        _id: String!
        name: String!
        modes: [String]
        description: String!
        recommendation: [String]
    }

    type TournamentMode{
        _id: String!
        sportId: String!
        name: String!
        winningPoints: Int
        teamsNumber:Int
        playersPerTeam: Int
        description: String
        substitutePlayers: Int
    }

    type TournamentClan {
        id: Int!
        leaderId: Int
        name: String!
        createdAt: String!
    }

    type TournamentVenue {
        id: Int!
        location: String!
        description: String!
        isActive: Boolean!
    }

    type TournamentPopulated {
        id: String!
        name: String!
        teams: [Team]!
        sportId: TournamentSport!
        modeId: TournamentMode!
        clanId: TournamentClan
        venueId: TournamentVenue
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
    getTournaments: [TournamentPopulated]
    getTournament(id: String!): TournamentPopulated
    getTournamentsInProgress: [Tournament]
    getTournamentsByStatus(status: String!): [Tournament]
`;

export const tournamentMutationsDef = `#graphql
    addTournament(tournament: AddTournament): RequestResponse
    deleteTournament(id: String!): RequestResponse
    updateTournament(id: String!, tournament: UpdateTournament!): RequestResponse
    startTournament(id: String!): RequestResponse
    endTournament(id: String!): RequestResponse
`;