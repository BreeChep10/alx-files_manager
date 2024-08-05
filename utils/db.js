import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

class DBClient {
  constructor() {
    const host = process.env.DB_HOST || 'localhost';
    const port = process.env.DB_PORT || 27017;
    const database = process.env.DB_DATABASE || 'files_manager';

    const url = `mongodb://${host}:${port}`;
    this.client = new MongoClient(url, { useUnifiedTopology: true });
    this.db = null;

    this.client.connect((err) => {
      if (err) {
        console.error('Failed to connect to MongoDB', err);
        return;
      }
      this.db = this.client.db(database);
      console.log('Connected to MongoDB');
    });
  }

  isAlive() {
    return !!this.db;
  }

  async nbUsers() {
    if (!this.isAlive()) {
      return 0;
    }
    return this.db.collection('users').countDocuments();
  }

  async nbFiles() {
    if (!this.isAlive()) {
      return 0;
    }
    return this.db.collection('files').countDocuments();
  }
}

const dbClient = new DBClient();
export default dbClient;
