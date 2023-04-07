export const clansTypesDef = `#graphql
    type Clan {
        id: Int!
        leaderId: Int
        name: String!
        createdAt: String!
    }
    type UsersClan {
        id: Int!
        clanId: Int!
        userId: Int!
    }
`;

export const clansQuerysDef = `#graphql
        clans: [Clan]
        clanById(id: Int!): Clan
        usersByClanId(clanIdToFind: Int!): [UsersClan]
`;

export const clansMutationsDef = `#graphql
    createClan(leaderId: Int!, name: String!, createdAt: String!): RequestResponse
    updateClan(id: Int!, leaderId: Int!, name: String!): RequestResponse
    deleteClan(id: Int!): RequestResponse
    addUserToClan(clanId: Int!, userId: Int!): RequestResponse
`;