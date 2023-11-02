const { Game, Genre, Platform, Developer, Publisher } = require('../models');
const { endOfMonth } = require('date-fns')

const resolvers = {
    Query: {
        games: async () => {
            return await Game.find({});
            // .populate('genres').populate('platforms').populate('developers');
        },
        game: async (_, { gameId }) => {
            return await Game.findOne({ _id: gameId });
        },
        genres: async () => {
            return await Genre.find({});
        },
        platforms: async () => {
            return await Platform.find({});
        },
        developers: async () => {
            return await Developer.find({});
        },
        developer: async (_, { developerId }) => {
            return await Developer.findOne({ _id: developerId });
        },
        publishers: async () => {
            return await Publisher.find({});
        },
        getGamesWithinRange: async (_, { month, year }) => {
            const startDate = new Date(year, month, 1);
            // check month index 
            const endDate = endOfMonth(startDate);
            return await Game.find({ release: { $gte: startDate, $lte: endDate }});
        },
        getGamesByState: async (_, { stateName }) => {
            return await Game.aggregate([
                {
                  $lookup: {
                    from: "developers",
                    localField: "developer",
                    foreignField: "_id",
                    as: "developerInfo"
                  }
                },
                {
                  $match: {
                    "developerInfo.state": stateName
                  }
                },
            ])
        },
        getGamesByCity: async (_, { cityName }) => {
            return await Game.aggregate([
                {
                  $lookup: {
                    from: "developers",
                    localField: "developer",
                    foreignField: "_id",
                    as: "developerInfo"
                  }
                },
                {
                  $match: {
                    "developerInfo.city": cityName
                  }
                },
            ])
        }
    },
    Game: {
        genres: async (parent) => {
            const game = await Game.findById(parent._id).populate('genres');
            // find all genres where id in parent game
            return game.genres;
        },
        platforms: async (parent) => {
            const game = await Game.findById(parent._id).populate('platforms');
            return game.platforms;
        },
        developer: async (parent) => {
            const game = await Game.findById(parent._id).populate('developer');
            return game.developer;
        },
        publisher: async (parent) => {
            const game = await Game.findById(parent._id).populate('publisher');
            return game.publisher;
        },
    },
    Developer: {
        games: async (parent) => {
            const games = await Game.find({ developer: parent._id })
            return games;
        },
    }
};

module.exports = resolvers;
