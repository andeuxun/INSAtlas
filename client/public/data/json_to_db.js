const fs = require('fs');
const path = require('path');
const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://localhost:3010';

// Database Name
const dbName = 'sample_mflix';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
    console.assert(null, err);
    console.log("Connected successfully to server");

    const db = client.db(dbName);
    const collection = db.collection('salles');

    // Get all files in the 'data' directory
    fs.readdir('client/data', (err, files) => {
        if (err) throw err;

        // Filter the files to only include .json files that start with 'BS_'
        const jsonFiles = files.filter(file => file.startsWith('BS_') && file.endsWith('.json'));

        // Read each file and insert it into the collection
        const insertOperations = jsonFiles.map(file => {
            const filePath = path.join('client/data', file);
            const doc = JSON.parse(fs.readFileSync(filePath, 'utf8'));
            return collection.insertOne(doc)
                .then(() => console.log(`Inserted document from ${file}`))
                .catch(err => console.error(`Error inserting document from ${file}: ${err}`));
        });

        // Wait for all insert operations to complete, then close the connection
        Promise.all(insertOperations)
            .then(() => client.close())
            .catch(err => console.error(`Error: ${err}`));
    });
});