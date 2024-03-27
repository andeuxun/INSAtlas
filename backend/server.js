// server.js

// first we import our dependencies…
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Salle = require('./model/salle'); 
const fs = require('fs').promises; // Use promises version of fs
const path = require('path');

// and create our instances
const app = express();
const router = express.Router();

// set our port to either a predetermined port number if you have set it up, or 3001
const API_PORT = process.env.API_PORT || 3001;
// now we should configure the API to use bodyParser and look for JSON data in the request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect("mongodb+srv://cristinacanela:Cambrils@insatlas.ws8zgj1.mongodb.net/", { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection.useDb('sample_mflix');
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', async function() { // Make this function async
  console.log("Connected to MongoDB database!");

  const directoryPath = path.join(__dirname, 'data');

  try {
    const files = await fs.readdir(directoryPath);
    const jsonFiles = files.filter(file => file.endsWith('.json') && file.startsWith('TC'));

    // Read each file and insert it into the collection
    for (const file of jsonFiles) {
      const filePath = path.join(directoryPath, file);
      const doc = JSON.parse(await fs.readFile(filePath, 'utf8'));

      try {
        await db.collection('salles').insertOne(doc);
        console.log(`Inserted document from ${file}`);
      } catch (err) {
        console.error(`Error inserting document from ${file}: ${err}`);
      }
    }
     // Close the MongoDB connection
     db.close();
     console.log("Closed the MongoDB connection.");
 
  } catch (err) {
    console.error(`Error reading directory: ${err}`);
  }
});



router.get('/', (req, res) => {
  res.json({ message: 'Hello, World!' });
});
router.get('/places', (req, res) => {
  Salle.find((err, salles) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: salles });
  });
});

// Route to search for places
router.get('/search', (req, res) => {
  const { query } = req.query;
  Salle.find({ name: { $regex: query, $options: 'i' } }) // Replace Place with Salle
    .then(salles => res.json({ success: true, data: salles }))
    .catch(err => res.json({ success: false, error: err }));
});

// Use our router configuration when we call /api
app.use('/api', router);

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));