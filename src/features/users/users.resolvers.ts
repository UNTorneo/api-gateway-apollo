import { ContextValue } from "../..";
import { checkToken } from "../../core/middlewares/checkJWT";
import { redisClient } from "../../core/redis/redis";

export const tokenResolver = {
    TokenResponse: {
        __resolveType(obj, contextValue, info) {
            if (obj.accessToken) {
                return 'RequestToken';
            }
            if (obj.error) {
                return 'ErrorResponse';
            }
            return null; // GraphQLError is thrown
        },
    },
}

export const usersQueryResolvers = {
    user: async (_, { id }, { dataSources }: ContextValue) => {
        const res = dataSources.usersApi.getUser(id);
        console.log(res);
        return res;
    },

    users: async (_, __, { dataSources }: ContextValue) => {
        const res = dataSources.usersApi.getUsers();
        console.log(res);
        return res;
    },

    city: async (_, { id }, { dataSources }: ContextValue) => {
        const res = dataSources.usersApi.getCity(id);
        console.log(res);
        return res;
    },

    cities: async (_, __, { dataSources }: ContextValue) => {
        const res = dataSources.usersApi.getCities();
        console.log(res);
        return res;
    },

    country: async (_, { id }, { dataSources }: ContextValue) => {
        const res = dataSources.usersApi.getCountry(id);
        console.log(res);
        return res;
    },

    countries: async (_, __, { dataSources }: ContextValue) => {
        const res = dataSources.usersApi.getCountries();
        console.log(res);
        return res;
    }
}

export const usersMutationResolvers = {
    login: async (_, { email, password }, { dataSources }: ContextValue) => {
        
        const res = await dataSources.usersApi.login(email, password); 
        if((res as any).accessToken) await redisClient.set((res as any).accessToken,(res as any).accessToken,{EX: 60});
        return res;
    },

    addUser: async (_, {name, lastName, username, birthday, email, password, countryId, cityId, latitude, longitude, photoUrl }, { dataSources }: ContextValue) => {
        return dataSources.usersApi.addUser(name, lastName, username, birthday, email, password, countryId, cityId, latitude, longitude, photoUrl);
    },
    updateUser: async (_, { id, name, lastName, username, birthday, email, password, countryId, cityId, latitude, longitude, photoUrl }, { dataSources }: ContextValue) => {
        return dataSources.usersApi.updateUser(id, name, lastName, username, birthday, email, password, countryId, cityId, latitude, longitude, photoUrl);
    },
    deleteUser: async (_, { id }, { dataSources }: ContextValue) => {
        return dataSources.usersApi.deleteUser(id);
    },

    addCity: async (_, { name }, { dataSources }: ContextValue) => {
        return dataSources.usersApi.addCity(name);
    },
    updateCity: async (_, { id, name }, { dataSources }: ContextValue) => {
        return dataSources.usersApi.updateCity(id, name);
    },
    deleteCity: async (_, { id }, { dataSources }: ContextValue) => {
        return dataSources.usersApi.deleteCity(id);
    },

    addCountry: async (_, { name }, { dataSources }: ContextValue) => {
        return dataSources.usersApi.addCountry(name);
    },
    updateCountry: async (_, { id, name }, { dataSources }: ContextValue) => {
        return dataSources.usersApi.updateCountry(id, name);
    },
    deleteCountry: async (_, { id }, { dataSources }: ContextValue) => {
        return dataSources.usersApi.deleteCountry(id);
    }
}