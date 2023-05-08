export const teamsTypesDef = `#graphql
    type Team {
        id: String!
        name: String!
        clanId: String
        members: [String]!
        tournaments: [String]!
        createdAt: String!
        updatedAt: String!
    }

    export interface TeamUser {
        username: String!
        birthday: String!
        email: String!
        id: Int!
    }

    export interface TeamUserPopulated {
        id: String!
        name: String!
        clanId: String
        members: [TeamUser]!
        tournaments: [String]!
        createdAt: Date!
        updatedAt: Date!
    }

    input AddTeam {
        name: String!
        clanId: String
        members: [String]!
        tournaments: [String]!
    }

    input UpdateTeam {
        name: String
        clanId: String
        members: [String]
        tournaments: [String]
    }
`;

export const teamsQuerysDef = `#graphql
    getTeams: [Team]
    getTeam(id: String!): TeamUserPopulated
`;

export const teamsMutationsDef = `#graphql
    addTeam(team: AddTeam): RequestResponse
    deleteTeam(id: String!): RequestResponse
    updateTeam(id: String!, team: UpdateTeam!): RequestResponse
    registerTeam(teamId: String!, tournamentId: String!): RequestResponse
`;