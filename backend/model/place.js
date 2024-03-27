const mongoose = require('mongoose');

const PlaceSchema = new mongoose.Schema({
    name: String,
    description: String,
    building: String,
    schedule: String,
    // any other fields you want
});

module.exports = mongoose.model('Place', PlaceSchema);