export const venuesTVTypesDef = `#graphql
    type Venue {
        id: Int!
        location: String!
        description: String!
        isActive: Boolean!
    }

    input AddVenue {
        location: String!
        description: String!
        isActive: Boolean!
    }

    input UpdateVenue {
        location: String
        description: String
        isActive: Boolean
    }
`;

export const venuesTVQuerysDef = `#graphql
    getVenues: [Venue]
    getVenue(id: Int!): Venue
    getVenuesByUserId(userId: Int!): [Venue]
`;

export const venuesTVMutationsDef = `#graphql
    addVenue(venue: AddVenue): RequestResponse
    deleteVenue(id: Int!): RequestResponse
    updateVenue(id: Int!, venue: UpdateVenue!): RequestResponse
`;