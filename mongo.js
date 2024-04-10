const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb://localhost:3000'; // Change this if your MongoDB server is running on a different port or host

// Database Name
const dbName = 'UX'; // Change this to your database name

// Function to connect to MongoDB
async function connectToDB() {
    const client = new MongoClient(uri);

    try {
        // Connect to the MongoDB client
        await client.connect();
        console.log('Connected to MongoDB');

        // Access the database
        const database = client.db(UX);
        return database;
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
    }
}

module.exports = connectToDB;