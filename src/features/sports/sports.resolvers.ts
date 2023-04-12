import { ContextValue } from "../..";

export const sportsQueryResolvers = {
    sport: async (_, {id}, { dataSources }: ContextValue) => {
        const res = await dataSources.sportsApi.getSport(id);
        console.log(res);
        return res;
    },

    sports:async (_, __, { dataSources }: ContextValue) => {
        const res = await dataSources.sportsApi.getSports();
        console.log(res);
        return res;
    },

    modes: async (_, {sportId}, { dataSources }: ContextValue) => {
        const res = await dataSources.sportsApi.getModes(sportId);
        console.log(res);
        return res;
    }
}

export const sportsMutationResolvers = {
    addSport: async (_, {name,description,imgs,logo,recommendation}, { dataSources }: ContextValue) => {
        return await dataSources.sportsApi.addSport(name,description,imgs,logo,recommendation);
    },
    updateSport: async (_, {id,name,description,imgs,logo,recommendation}, { dataSources }: ContextValue) => {
        return await dataSources.sportsApi.updateSport(id,name,description,imgs,logo,recommendation);
    },
    deleteSport: async (_, { id }, { dataSources }: ContextValue) => {
        return dataSources.sportsApi.deleteSport(id);
    },
    addMode: async (_, { sportId,name,winningPoints,teamsNumber,playersPerTeam,description,substitutePlayers}, { dataSources }: ContextValue) => {
        return dataSources.sportsApi.addMode(sportId,name,winningPoints,teamsNumber,playersPerTeam,description,substitutePlayers);
    },
    updateMode: async (_, { id,name,winningPoints,teamsNumber,playersPerTeam,description,substitutePlayers}, { dataSources }: ContextValue) => {
        return dataSources.sportsApi.updateMode(id,name,winningPoints,teamsNumber,playersPerTeam,description,substitutePlayers);
    },
    deleteMode: async (_, { modeId,sportId }, { dataSources }: ContextValue) => {
        return dataSources.sportsApi.deleteMode( modeId,sportId);
    },
    
}