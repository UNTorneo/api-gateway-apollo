import { ContextValue } from "../..";

export const clansQueryResolvers = {
    clans: async (_, __, { dataSources }: ContextValue) => {
        return dataSources.clanApi.getClans();
    },
    clanById: async (_, { id }, { dataSources }: ContextValue) => {
        return dataSources.clanApi.getClanById(id);
    },
    usersByClanId: async (_, { clanIdToFind }, { dataSources }: ContextValue) => {
        return dataSources.clanApi.getUsersByClanId(clanIdToFind);
    }
}

export const clansMutationResolvers = {
    createClan: async (_, { leaderId, name, createdAt }, { dataSources }: ContextValue) => {
        return dataSources.clanApi.createClan(name, leaderId, createdAt);
    },
    updateClan: async (_, {id, leaderId, name}, { dataSources }: ContextValue) => {
        return dataSources.clanApi.updateClan(id, leaderId, name);
    },
    deleteClan: async (_, {id}, { dataSources }: ContextValue) => {
        return dataSources.clanApi.deleteClan(id);
    },
    addUserToClan: async (_, {clanId, userId}, { dataSources }: ContextValue) => {
        return dataSources.clanApi.addUserToClan(clanId, userId);
    }
}