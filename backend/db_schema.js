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
    }, 
    autre: {
        type : String,
        required: false
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

const reperesSchema = mongoose.Schema({
    id : {
        type : String,
        required: true
    },
    name : {
        type : String,
        required: true
    },
    coord : {
        type : String,
        required: true
    },
    picture : {
        type : String,
        required: true
    }
})


const Data = mongoose.model("Data", dataSchema, "users");
const Salles = mongoose.model("Salles", sallesSchema, "salles");
const Batiments = mongoose.model("Batiments", batimentsSchema, "batiments");
const Reperes = mongoose.model("Reperes", reperesSchema, "reperes");
module.exports = {Salles, Batiments, Reperes};
