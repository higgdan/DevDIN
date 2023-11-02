const typeDefs = `#graphql
type Game {
    _id: ID
    name: String!
    genres: [Genre]
    platforms: [Platform]
    trailer: String
    release: String
    website: String
    presskit: String
    developer: Developer!
    publisher: Publisher
}

type Genre {
    _id: ID
    name: String
}

type Platform {
    _id: ID
    name: String
}

type Developer {
    _id: ID
    name: String
    country: String
    state: String
    city: String
    website: String
    games: [Game!]
}
 
type Publisher {
    _id: ID
    name: String
}

type Query {
    games: [Game]
    game(gameId: ID!): Game
    genres: [Genre]
    platforms: [Platform]
    developers: [Developer]
    developer(developerId: ID!): Developer
    publishers: [Publisher]
    getGamesWithinRange(month: Int!, year: Int!): [Game]
    getGamesByState(stateName: String!): [Game]
    getGamesByCity(cityName: String!): [Game]
}

`;

module.exports = typeDefs;