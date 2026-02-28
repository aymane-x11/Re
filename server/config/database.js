const { MongoClient } = require('mongodb');

// MongoDB connection URL
const url = 'your_mongodb_connection_string_here';
const client = new MongoClient(url);

const dbName = 'your_database_name_here';

async function connect() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    return client.db(dbName);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
}

module.exports = { connect };