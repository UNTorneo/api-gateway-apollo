export const ownerTVTypesDef = `#graphql
    type Owner {
        id: Int!
        venueId: Int! 
        userId: String!
    }

    type UserOwner {
        username: String!
        birthday: String!
        email: String!
        id: Int!,
        isActive: Boolean!,
    }

    type OwnerPopulated {
        id: Int!
        venueId: Int! 
        user: UserOwner!
    }
`;

export const ownerTVQuerysDef = `#graphql
        owners: [Owner]
        owner(id: Int!): OwnerPopulated
        ownerByVenueId(venueId: Int!): OwnerPopulated
`;

export const ownerTVMutationsDef = `#graphql
    addOwner(venueId: Int!, userId: String!): RequestResponse
    deleteOwner(id: Int!): RequestResponse
`;