//this is the backend server, handles API endpoints and Mongoose connection
// server.js

// first we import our dependencies…
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const {Batiments, Salles} = require('./db_schema');
const {Reperes} = require('./db_schema'); 
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/hi', (req, res) => {
  res.json({ message: 'Hello, World!' });
  //res.send("Hello world");
});

app.get('/money', (req,res) => {
  res.send("Money");
});

app.get('/findplace', async(req,res) => {
  try {

    const {name} = req.query;

    const regexPattern = new RegExp(name, 'i');

    const query_batiments = { $or: [
      { name: regexPattern },
      { name2: regexPattern },
      { dept: regexPattern },
    ] };

    const query_salles = { $or: [
      { id: regexPattern},
      { batiment : regexPattern},
      { etage : regexPattern},
      { usage : regexPattern},
      { departement : regexPattern}
    ]};

    console.log(query_batiments, query_salles);
    const data_batiments_raw = await Batiments.find(query_batiments);
    const data_salles_raw = await Salles.find(query_salles);

    console.log(data_batiments_raw);

    const dataBatiments = data_batiments_raw.map(doc => ({
      id: doc.id,
      name: doc.name,
      name2: doc.name2,
      dept: doc.dept,
      address: doc.address,
      coordonnees: doc.coordonnees
    }));

    console.log("Data Batiments: \n", dataBatiments);
    
    const dataSalles = data_salles_raw.map(doc => ({
      id: doc.id,
      batiment: doc.batiment,
      etage: doc.etage,
      usage: doc.usage,
      departement: doc.departement
    }));
    console.log("Data Salles\n", dataSalles);

    const sentData = dataBatiments.concat(dataSalles);

    //console.log(sentData);  
    res.status(200).json(sentData);
    //console.log(res);  
  } catch (error) {
    console.log("Error");
    res.status(500).json({message: error.message})
  }
})

app.get('/getreperes', async(req, res) => {
  try {
    const data_reperes_raw = await Reperes.find({});

    const dataReperes = data_reperes_raw.map(doc => ({
      id: doc.id,
      name: doc.name,
      coord: doc.coord,
      picture: doc.picture
    }));

    console.log("Data Reperes: \n", dataReperes);

    res.status(200).json(dataReperes);
  } catch (error) {
    console.log("Error");
    res.status(500).json({message: error.message})
  }
});

app.post('/addSalle', async (req, res) => {
  const newSalle = new Salles({
    id: req.body.id,
    batiment: req.body.batiment,
    etage: req.body.etage,
    usage: req.body.usage,
    departement: req.body.departement
  });

  try {
    const savedSalle = await newSalle.save();
    res.status(201).json(savedSalle);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


mongoose.connect("mongodb+srv://jean:WEB_INSATLAS123@insatlas.ws8zgj1.mongodb.net/sample_mflix?retryWrites=true&w=majority&appName=INSAtlas")
.then(() => {
  console.log("Connected to MongoDB");
  app.listen(3001, () => {
    console.log("Listening on port 3001");
  });
}).catch((error) => {
  console.log(error);
});
