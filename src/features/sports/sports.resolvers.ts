import { ContextValue } from "../..";

export const sportsQueryResolvers = {
    sport: async (_, {id}, { dataSources }: ContextValue) => {
        const res = await dataSources.sportsApi.getSport(id);
        console.log(res);
        return res;
    }
}

export const sportsMutationResolvers = {
    addSport: async (_, {name,description,imgs,logo,recommendation}, { dataSources }: ContextValue) => {
        return await dataSources.sportsApi.addSport(name,description,imgs,logo,recommendation);
    },
    deleteSport: async (_, { id }, { dataSources }: ContextValue) => {
        return dataSources.sportsApi.deleteSport(id);
    }
}