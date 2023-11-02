const mongoose = require('mongoose');

const { Schema } = mongoose;

const genreSchema = new Schema({
  name: {
    type: String,
    required: true,
  }
});

const Genre = mongoose.model('Genre', genreSchema);

module.exports = Genre;