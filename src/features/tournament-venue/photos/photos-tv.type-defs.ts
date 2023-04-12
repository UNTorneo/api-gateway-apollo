export const photosTVTypesDef = `#graphql
    type Photo {
        id: Int!,
        courtId: Int!,
        url: String!,
    }

    input AddPhoto {
        courtId: Int!,
        url: String!,
    }

    input UpdatePhoto {
        id: Int
        courtId: Int
        url: String
    }
`;

export const photosTVQuerysDef = `#graphql
        getPhotos: [Photo]
        getPhoto(id: Int!): Photo
        getPhotosByCourtId(courtId: Int!): [Photo]
`;

export const photosTVMutationsDef = `#graphql
    addPhoto(photo: AddPhoto): RequestResponse
    deletePhoto(id: Int!): RequestResponse
    updatePhoto(id: Int!, photo: UpdatePhoto!): RequestResponse
`;