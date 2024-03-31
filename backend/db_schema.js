//defines the data instances for Mongoose
const mongoose = require('mongoose');

const dataSchema = mongoose.Schema({
        name : {
            type: String,
            required : true
        },
        email : {
            type: String,
            required : true
        },
        password : {
            type: String,
            required : true
        }
});

const sallesSchema = mongoose.Schema({
    id : {
        type : String,
        required: true
    },
    batiment : {
        type : String,
        required: true
    },
    etage : {
        type : String,
        required: true
    },
    usage : {
        type : String,
        required: true
    },
    departement : {
        type : String,
        required: true
    }
})

const batimentsSchema = mongoose.Schema({
    id : {
        type : Number,
        required: true
    },
    name : {
        type : String,
        required: true
    },
    name2 : {
        type : String,
        required: true
    },
    dept : {
        type : Array,
        required: true
    },
    address : {
        type : String,
        required: true
    },
    coordonnees : {
        type : String,
        required: true
    }
})


const Data = mongoose.model("Data", dataSchema, "users");
const Salles = mongoose.model("Salles", sallesSchema, "salles");
const Batiments = mongoose.model("Batiments", batimentsSchema, "batiments");
module.exports = {Salles, Batiments};
