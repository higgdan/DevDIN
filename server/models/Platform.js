const mongoose = require('mongoose');

const { Schema } = mongoose;

const platformSchema = new Schema({
  name: {
    type: String,
    required: true,
  }
});

const Platform = mongoose.model('Platform', platformSchema);

module.exports = Platform;