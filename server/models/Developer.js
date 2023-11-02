const mongoose = require('mongoose');

const { Schema } = mongoose;

const developerSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    established: {
        type: Date,
    },
    country: { 
        type: String,
    },
    state: {
        type: String,
    },
    city: {
        type: String,
    },
    website: {
        type: String,
    }
});

const Developer = mongoose.model('Developer', developerSchema);

module.exports = Developer;