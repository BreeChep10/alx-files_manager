import sha1 from 'sha1';
import { ObjectId } from 'mongodb';
import dbClient from '../utils/db.js';
import redisClient from '../utils/redis.js';

export async function createUser(req, res) {
  const email = req.body?.email ?? null;
  const password = req.body?.password ?? null;

  if (!email) {
    return res.status(400).json({ error: 'Missing email' });
  }
  if (!password) {
    return res.status(400).json({ error: 'Missing password' });
  }

  const collection = dbClient.db.collection('users');
  const user = await collection.findOne({ email });

  if (user) {
    return res.status(400).json({ error: 'Already exist' });
  }

  const hashedPassword = sha1(password);
  const result = await collection.insertOne({ email, password: hashedPassword });
  const userId = result.insertedId.toString();

  return res.status(201).json({ email, id: userId });
}
