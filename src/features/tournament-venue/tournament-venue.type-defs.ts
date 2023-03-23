export const tournamentVenueTypesDef = `#graphql
    type Owner {
        id: Int!
        venueId: Int! 
        userId: String!
    }
`;

export const tournamentVenueQuerysDef = `#graphql
        owners: [Owner]
        owner(id: Int!): Owner
        ownerByVenueId(venueId: Int!): Owner
`;

export const tournamentVenueMutationsDef = `#graphql
    addOwner(venueId: Int!, userId: String!): RequestResponse
    deleteOwner(id: Int!): RequestResponse
`;