const { MongoClient } = require('mongodb');
const { env } = require('process');

/**
 * Represents a MongoDB client.
 */
class DBClient {
  /**
   * Creates a new DBClient instance.
   */
  constructor() {
    const host = env.DB_HOST || 'localhost';
    const port = env.DB_PORT || 27017;
    const database = env.DB_DATABASE || 'files_manager';
    const uri = `mongodb://${host}:${port}`;

    this.client = new MongoClient(uri, { useUnifiedTopology: true });
    this.database = this.client.db(database);

    this.client.connect()
      .then(() => console.log('Connected to MongoDB'))
      .catch((err) => console.error(`MongoDB connection error: ${err}`));
  }

  /**
   * Checks if the connection to MongoDB is alive.
   * @returns {boolean} True if the connection is alive, false otherwise.
   */
  isAlive() {
    return this.client && this.client.isConnected();
  }

  /**
   * Returns the number of documents in the collection 'users'.
   * @returns {Promise<number>} The number of documents in the 'users' collection.
   */
  async nbUsers() {
    return this.database.collection('users').countDocuments();
  }

  /**
   * Returns the number of documents in the collection 'files'.
   * @returns {Promise<number>} The number of documents in the 'files' collection.
   */
  async nbFiles() {
    return this.database.collection('files').countDocuments();
  }
}

// Create and export an instance of DBClient
const dbClient = new DBClient();
module.exports = dbClient;
