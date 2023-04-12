export const ownerTVTypesDef = `#graphql
    type Owner {
        id: Int!
        venueId: Int! 
        userId: String!
    }
`;

export const ownerTVQuerysDef = `#graphql
        owners: [Owner]
        owner(id: Int!): Owner
        ownerByVenueId(venueId: Int!): Owner
`;

export const ownerTVMutationsDef = `#graphql
    addOwner(venueId: Int!, userId: String!): RequestResponse
    deleteOwner(id: Int!): RequestResponse
`;