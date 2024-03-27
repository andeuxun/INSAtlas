const mongoose = require('mongoose');

const SalleSchema = new mongoose.Schema({
    id: String,
    batiment: String,
    etage: String,
    usage: String,
    departement: String
});

module.exports = mongoose.model('Salle', SalleSchema);