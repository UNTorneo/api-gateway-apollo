import { ContextValue } from "../../..";

export const courtTMQueryResolvers = {
    getCourts: async (_, __, { dataSources }: ContextValue) => {
        return dataSources.tournamentVenueApi.getCourts()
    },
    getCourt: async (_, { id }, { dataSources }: ContextValue) => {
        return dataSources.tournamentVenueApi.getCourt(id)
    },
    getCourtsByVenueId: async (_, { venueId }, { dataSources }: ContextValue) => {
        return dataSources.tournamentVenueApi.getCourtsByVenueId(venueId)
    },
    getCourtsBySportId: async (_, { sportId }, { dataSources }: ContextValue) => {
        return dataSources.tournamentVenueApi.getCourtsBySportId(sportId)
    },
}

export const courtTMMutationResolvers = {
    addCourt: async (_, { court }, { dataSources }: ContextValue) => {
        return dataSources.tournamentVenueApi.addCourt(court)
    },
    deleteCourt: async (_, { id }, { dataSources }: ContextValue) => {
        return dataSources.tournamentVenueApi.deleteCourt(id)
    },
    updateCourt: async (_, { id, court }, { dataSources }: ContextValue) => {
        return dataSources.tournamentVenueApi.updateCourt(id, court)
    },
}