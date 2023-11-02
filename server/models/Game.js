const mongoose = require('mongoose');

const { Schema } = mongoose;

const gameSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    genres: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Genre'
        }
    ],
    platforms: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Platform'
        }
    ],
    trailer: {
        type: String,
    },
    release: {
        type: Date,
    },
    website: {
        type: String,
    },
    presskit: {
        type: String,
    },
    developer: {
        type: Schema.Types.ObjectId,
        ref: 'Developer',
        required: true
    },
    publisher: {
        type: Schema.Types.ObjectId,
        ref: 'Publisher',
    }
});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;