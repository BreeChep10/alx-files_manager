import redisClient from '../utils/redis.js';
import dbClient from '../utils/db.js';

/**
 * Controller for handling application-level routes.
 */
class AppController {
  /**
   * Handles GET /status
   * Returns the status of Redis and MongoDB clients.
   * @param {Object} req - Express request object
   * @param {Object} res - Express response object
   */
  static getStatus(req, res) {
    // Check if Redis and MongoDB are alive and send the status as JSON response
    res.status(200).json({ redis: redisClient.isAlive(), db: dbClient.isAlive() });
  }

  /**
   * Handles GET /stats
   * Returns the number of users and files in the database.
   * @param {Object} req - Express request object
   * @param {Object} res - Express response object
   */
  static async getStats(req, res) {
    const users = await dbClient.nbUsers();
    const files = await dbClient.nbFiles();
    
    res.status(200).json({ users, files });
  }
}

export default AppController;
