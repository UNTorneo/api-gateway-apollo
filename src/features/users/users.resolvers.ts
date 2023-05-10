import { ContextValue } from "../..";

export const usersQueryResolvers = {
    user: async (_, { id }, { dataSources }: ContextValue) => {
        const res =  dataSources.usersApi.getUser(id);
        console.log(res);
        return res;
    },

    users: async (_, __, { dataSources }: ContextValue) => {
        const res =  dataSources.usersApi.getUsers();
        console.log(res);
        return res;
    },

    city: async (_, { id }, { dataSources }: ContextValue) => {
        const res =  dataSources.usersApi.getCity(id);
        console.log(res);
        return res;
    },

    cities: async (_, __, { dataSources }: ContextValue) => {
        const res =  dataSources.usersApi.getCities();
        console.log(res);
        return res;
    },

    country: async (_, { id }, { dataSources }: ContextValue) => {
        const res =  dataSources.usersApi.getCountry(id);
        console.log(res);
        return res;
    },

    countries: async (_, __, { dataSources }: ContextValue) => {
        const res =  dataSources.usersApi.getCountries();
        console.log(res);
        return res;
    }
}

export const usersMutationResolvers = {
    login: async (_, { email, password}, { dataSources }: ContextValue) => {
        return  dataSources.usersApi.login(email, password);
    },
    
    addUser: async (_, { username, birthday, email, password, countryId, cityId, latitude, longitude}, { dataSources }: ContextValue) => {
        return  dataSources.usersApi.addUser(username, birthday, email, password, countryId, cityId, latitude, longitude);
    },
    updateUser: async (_, { id, username, birthday, email, password, countryId, cityId, latitude, longitude}, { dataSources }: ContextValue) => {
        return  dataSources.usersApi.updateUser(id, username, birthday, email, password, countryId, cityId, latitude, longitude);
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
        return  dataSources.usersApi.addCountry(name);
    },
    updateCountry: async (_, { id, name }, { dataSources }: ContextValue) => {
        return  dataSources.usersApi.updateCountry(id, name);
    },
    deleteCountry: async (_, { id }, { dataSources }: ContextValue) => {
        return dataSources.usersApi.deleteCountry(id);
    }

}