import { ContextValue } from "../..";

export const tournamentVenueQueryResolvers = {
    owners: async (_, __, { dataSources }: ContextValue) => {
        return dataSources.tournamentVenueApi.getOwners();
    },
    owner: async (_, { id }, { dataSources }: ContextValue) => {
        return dataSources.tournamentVenueApi.getOwner(id);
    },
    ownerByVenueId: async (_, { venueId }, { dataSources }: ContextValue) => {
        return dataSources.tournamentVenueApi.getOwnerByVenueId(venueId);
    }
}

export const tournamentVenueMutationResolvers = {
    addOwner: async (_, { venueId, userId }, { dataSources }: ContextValue) => {
        return dataSources.tournamentVenueApi.addOwner(venueId, userId);
    },
    deleteOwner: async (_, { id }, { dataSources }: ContextValue) => {
        return dataSources.tournamentVenueApi.deleteOwner(id);
    }
}