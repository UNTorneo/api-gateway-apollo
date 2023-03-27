export const sportTypesDef = `#graphql
    type Sport{
        _id: String!
        name: String!
        modes: [String]
        description: String!
        imgs: [String]
        logo: String
        recommendation: [String]
    }
`;



export const sportsQuerysDef = `#graphql
    sport(id: String!): Sport
`;

export const sportsMutationsDef = `#graphql
    addSport(name: String!,description: String!,imgs: [String],logo: String,recommendation: [String]): RequestResponse
    deleteSport(id: String!): RequestResponse
`;