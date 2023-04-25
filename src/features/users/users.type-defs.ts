export const userTypesDef = `#graphql
    type User{
        id: Int!
        username: String!
        birthday: String!
        email: String!
        password: String!
        country_id: Int!
        city_id: Int!
        latitude: Float!
        longitude: Float!
        is_active: Boolean!
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
    addUser(username: String!,birthday: String!,email: String!,password: String!,country_id: Int!,city_id: Int!,latitude: Float!,longitude: Float!,is_active: Boolean!): RequestResponse
    updateUser(id: Int!,username: String!,birthday: String!,email: String!,password: String!,country_id: Int!,city_id: Int!,latitude: Float!,longitude: Float!,is_active: Boolean!): RequestResponse
    deleteUser(id: Int!): RequestResponse

    addCity(name: String!): RequestResponse
    updateCity(id: Int!,name: String!): RequestResponse
    deleteCity(id: Int!): RequestResponse

    addCountry(name: String!): RequestResponse
    updateCountry(id: Int!,name: String!): RequestResponse
    deleteCountry(id: Int!): RequestResponse
`;