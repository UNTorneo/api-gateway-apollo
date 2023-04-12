export const userTypesDef = `#graphql
    type User{
        id : Number!
        username : String!
        birthday : Date!
        email: String!
        password : String!
        country_id : Number!
        city_id : Number!
        latitude : Number!
        longitude : Number!
        is_active : Boolean!
    }

    type City{
        id: Number!
        name: String!
    }

    type Country{
        id: Number!
        name: String!
    }
`;



export const usersQuerysDef = `#graphql
    user(id: Number!): User
    users: [User] 
    city(id: Number!): City
    cities: [City]
    country(id: Number!): Country
    countries: [Country]
`;

export const usersMutationsDef = `#graphql
    addUser(username : String!,birthday : Date!,email: String!,password : String!,country_id : Number!,city_id : Number!,latitude : Number!,longitude : Number!,is_active : Boolean!): RequestResponse
    updateUser(id: Number!,username : String!,birthday : Date!,email: String!,password : String!,country_id : Number!,city_id : Number!,latitude : Number!,longitude : Number!,is_active : Boolean!): RequestResponse
    deleteUser(id: Number!): RequestResponse

    addCity(name : String!): RequestResponse
    updateCity(id: Number!,name : String!): RequestResponse
    deleteCity(id: Number!): RequestResponse

    addCountry(name : String!): RequestResponse
    updateCountry(id: Number!,name : String!): RequestResponse
    deleteCountry(id: Number!): RequestResponse
`;