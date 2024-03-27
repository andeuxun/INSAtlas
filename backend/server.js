// server.js

// first we import our dependencies…
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Place = require("./model/place");

// and create our instances
const app = express();
const router = express.Router();

// set our port to either a predetermined port number if you have set it up, or 3001
const API_PORT = process.env.API_PORT || 3001;
// now we should configure the API to use bodyParser and look for JSON data in the request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect("mongodb://localhost:3010/", { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', function() {
  console.log("Connected to MongoDB database!");
});

// now we can set the route path & initialize the API
router.get('/', (req, res) => {
  res.json({ message: 'Hello, World!' });
});
router.get('/places', (req, res) => {
  Comment.find((err, places) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: places });
  });
});

// Route to add a new place
/* router.post('/places', (req, res) => {
  const place = new Place();
  const { name, description, building, schedule } = req.body;
  if (!name || !description || !building || !schedule) {
    return res.json({
      success: false,
      error: 'You must provide a name, description, building, and schedule'
    });
  }
  place.name = name;
  place.description = description;
  place.building = building;
  place.schedule = schedule;
  place.save(err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
}); */

// Route to search for places
router.get('/search', (req, res) => {
  const { query } = req.query;
  Place.find({ name: { $regex: query, $options: 'i' } })
    .then(places => res.json({ success: true, data: places }))
    .catch(err => res.json({ success: false, error: err }));
});

// Use our router configuration when we call /api
app.use('/api', router);

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));
