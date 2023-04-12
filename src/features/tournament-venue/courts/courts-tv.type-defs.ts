export const courtsTVTypesDef = `#graphql
    type Court {
        id: Int!
        venueId: Int!
        sportId: String!
        isActive: Boolean!
    }

    input AddCourt {
        venueId: Int!
        sportId: String!
        isActive: Boolean!
    }

    input UpdateCourt {
        venueId: Int,
        sportId: String,
        isActive: Boolean,
    }
`;

export const courtsTVQuerysDef = `#graphql
        getCourts: [Court]
        getCourt(id: Int!): Court
        getCourtsByVenueId(venueId: Int!): [Court]
        getCourtsBySportId(sportId: String!): [Court]
`;

export const courtsTVMutationsDef = `#graphql
    addCourt(court: AddCourt): RequestResponse
    deleteCourt(id: Int!): RequestResponse
    updateCourt(id: Int!, court: UpdateCourt!): RequestResponse
`;