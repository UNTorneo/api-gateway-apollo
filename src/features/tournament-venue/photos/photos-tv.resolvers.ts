import { ContextValue } from "../../..";

export const photosTMQueryResolvers = {
    getPhotos: async (_, __, { dataSources }: ContextValue) => {
        return dataSources.tournamentVenueApi.getPhotos()
    },
    getPhoto: async (_, { id }, { dataSources }: ContextValue) => {
        return dataSources.tournamentVenueApi.getPhoto(id)
    },
    getPhotosByCourtId: async (_, { courtId }, { dataSources }: ContextValue) => {
        return dataSources.tournamentVenueApi.getPhotosByCourtId(courtId)
    },
}

export const photosTMMutationResolvers = {
    addPhoto: async (_, { photo }, { dataSources }: ContextValue) => {
        return dataSources.tournamentVenueApi.addPhoto(photo)
    },
    deletePhoto: async (_, { id }, { dataSources }: ContextValue) => {
        return dataSources.tournamentVenueApi.deletePhoto(id)
    },
    updatePhoto: async (_, { id, photo }, { dataSources }: ContextValue) => {
        return dataSources.tournamentVenueApi.updatePhoto(id, photo)
    },
}