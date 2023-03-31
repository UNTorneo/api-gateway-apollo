import { ContextValue } from "../../..";

export const venueTMQueryResolvers = {
    getVenues: async (_, __, { dataSources }: ContextValue) => {
        return dataSources.tournamentVenueApi.getVenues()
    },
    getVenue: async (_, { id }, { dataSources }: ContextValue) => {
        return dataSources.tournamentVenueApi.getVenue(id)
    },
    getVenuesByUserId: async (_, { userId }, { dataSources }: ContextValue) => {
        return dataSources.tournamentVenueApi.getVenuesByUserId(userId)
    },
}

export const venueTMMutationResolvers = {
    addVenue: async (_, { venue }, { dataSources }: ContextValue) => {
        return dataSources.tournamentVenueApi.addVenue(venue)
    },
    deleteVenue: async (_, { id }, { dataSources }: ContextValue) => {
        return dataSources.tournamentVenueApi.deleteVenue(id)
    },
    updateVenue: async (_, { id, venue }, { dataSources }: ContextValue) => {
        return dataSources.tournamentVenueApi.updateVenue(id, venue)
    },
}