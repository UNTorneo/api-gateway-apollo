export const userTypesDef = `#graphql

    type Login{
        email: String!
        password: String!
    }

    type RequestToken {
        accessToken: String!
        user: User!
    }

    type ErrorResponse {
        error: String!
    }

    union TokenResponse = RequestToken | ErrorResponse

    type User{
        id: Int!
        name: String!
        lastName: String!
        username: String!
        birthday: String!
        email: String!
        countryId: Int!
        cityId: Int!
        latitude: Float!
        longitude: Float!
        isActive: Boolean!
        photoUrl: String
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

    login(email: String!,password: String!): TokenResponse

    addUser(name: String!,lastName: String!,username: String!,birthday: String!,email: String!,password: String!,countryId: Int!,cityId: Int!,latitude: Float!,longitude: Float!, photoUrl: String): RequestResponse
    updateUser(id: Int!,name: String,lastName: String,username: String,birthday: String,email: String,password: String ,countryId: Int,cityId: Int,latitude: Float,longitude: Float, photoUrl: String): RequestResponse
    deleteUser(id: Int!): RequestResponse

    addCity(name: String!): RequestResponse
    updateCity(id: Int!,name: String!): RequestResponse
    deleteCity(id: Int!): RequestResponse

    addCountry(name: String!): RequestResponse
    updateCountry(id: Int!,name: String!): RequestResponse
    deleteCountry(id: Int!): RequestResponse
`;