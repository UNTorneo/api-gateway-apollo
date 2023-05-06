import { ContextValue } from "../..";

export const usersQueryResolvers = {
    user: async (_, { id }, { dataSources }: ContextValue) => {
        const res = await dataSources.usersApi.getUser(id);
        console.log(res);
        return res;
    },

    users: async (_, __, { dataSources }: ContextValue) => {
        const res = await dataSources.usersApi.getUsers();
        console.log(res);
        return res;
    },

    city: async (_, { id }, { dataSources }: ContextValue) => {
        const res = await dataSources.usersApi.getCity(id);
        console.log(res);
        return res;
    },

    cities: async (_, __, { dataSources }: ContextValue) => {
        const res = await dataSources.usersApi.getCities();
        console.log(res);
        return res;
    },

    country: async (_, { id }, { dataSources }: ContextValue) => {
        const res = await dataSources.usersApi.getCountry(id);
        console.log(res);
        return res;
    },

    countries: async (_, __, { dataSources }: ContextValue) => {
        const res = await dataSources.usersApi.getCountries();
        console.log(res);
        return res;
    }
}

export const usersMutationResolvers = {
    addUser: async (_, { username, birthday, email, password, countryId, cityId, latitude, longitude}, { dataSources }: ContextValue) => {
        return await dataSources.usersApi.addUser(username, birthday, email, password, countryId, cityId, latitude, longitude);
    },
    updateUser: async (_, { id, username, birthday, email, password, countryId, cityId, latitude, longitude}, { dataSources }: ContextValue) => {
        return await dataSources.usersApi.updateUser(id, username, birthday, email, password, countryId, cityId, latitude, longitude);
    },
    deleteUser: async (_, { id }, { dataSources }: ContextValue) => {
        return dataSources.usersApi.deleteUser(id);
    },

    addCity: async (_, { name }, { dataSources }: ContextValue) => {
        return await dataSources.usersApi.addCity(name);
    },
    updateCity: async (_, { id, name }, { dataSources }: ContextValue) => {
        return await dataSources.usersApi.updateCity(id, name);
    },
    deleteCity: async (_, { id }, { dataSources }: ContextValue) => {
        return dataSources.usersApi.deleteCity(id);
    },

    addCountry: async (_, { name }, { dataSources }: ContextValue) => {
        return await dataSources.usersApi.addCountry(name);
    },
    updateCountry: async (_, { id, name }, { dataSources }: ContextValue) => {
        return await dataSources.usersApi.updateCountry(id, name);
    },
    deleteCountry: async (_, { id }, { dataSources }: ContextValue) => {
        return dataSources.usersApi.deleteCountry(id);
    }

}