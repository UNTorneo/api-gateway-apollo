export const clansTypesDef = `#graphql
    type Clan {
        id: Int!
        leaderId: Int! 
        name: String!
        createdAt: Date!
    }
    type UsersClan {
        id: Int!
        clanId: Int!
        userId: Int!
    }
`;

export const clansQuerysDef = `#graphql
        clans: [Clan]
        clans(id: Int!): Clan
        clanById(id: Int!): Clan
        usersByClanId(clanId: Int!): UsersClan
`;

export const clansMutationsDef = `#graphql
    createClan(leaderId: Int!, name: String!, createdAt: Date!): RequestResponse
    updateClan(id: Int!, leaderId: Int!, name: String!): RequestResposne
    deleteClan(id: Int!): RequestResponse
    addUserToClan(clanId: Int!, userId: Int!): RequestResponse
`;