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

    type Mode{
        _id: String!
        sportId: String!
        name: String!
        winningPoints: Int
        teamsNumber:Int
        playersPerTeam: Int
        description: String!
        substitutePlayers: Int
    }
`;



export const sportsQuerysDef = `#graphql
    sport(id: String!): Sport
    sports: [Sport] 
    modes(sportId: String!): [Mode]
    mode(id: String!): Mode
`;

export const sportsMutationsDef = `#graphql
    addSport(token:String!,name: String!,description: String!,imgs: [String],logo: String,recommendation: [String]): RequestResponse
    updateSport(id:String!,name: String,description: String,imgs: [String],logo: String,recommendation: [String]): RequestResponse
    deleteSport(id: String!): RequestResponse

    addMode(sportId: String!,name: String!,winningPoints: Int,teamsNumber:Int,playersPerTeam: Int,description: String!,substitutePlayers:Int): RequestResponse
    updateMode(id:String!,name:String,winningPoints: Int,teamsNumber:Int,playersPerTeam: Int,description: String,substitutePlayers:Int): RequestResponse
    deleteMode(modeId: String!, sportId: String!): RequestResponse
`;