export const userTypesDef = `#graphql

    type Login{
        email: String!
        password: String!
    }

    type User{
        id: Int!
        username: String!
        birthday: String!
        email: String!
        password: String!
        countryId: Int!
        cityId: Int!
        latitude: Float!
        longitude: Float!
        isActive: Boolean!
    }

    type City{
        id: Int!
        name: String!
    }

    type Country{
        id: Int!
        name: String!
    }
`;



export const usersQuerysDef = `#graphql
    user(id: Int!): User
    users: [User] 
    city(id: Int!): City
    cities: [City]
    country(id: Int!): Country
    countries: [Country]
`;

export const usersMutationsDef = `#graphql

    login(email: String!,password: String!): RequestResponse

    addUser(username: String!,birthday: String!,email: String!,password: String!,countryId: Int!,cityId: Int!,latitude: Float!,longitude: Float!): RequestResponse
    updateUser(id: Int!,username: String!,birthday: String!,email: String!,password: String!,countryId: Int!,cityId: Int!,latitude: Float!,longitude: Float!): RequestResponse
    deleteUser(id: Int!): RequestResponse

    addCity(name: String!): RequestResponse
    updateCity(id: Int!,name: String!): RequestResponse
    deleteCity(id: Int!): RequestResponse

    addCountry(name: String!): RequestResponse
    updateCountry(id: Int!,name: String!): RequestResponse
    deleteCountry(id: Int!): RequestResponse
`;