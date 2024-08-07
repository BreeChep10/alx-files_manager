const redisClient = require('../utils/redis');
const dbClient = require('../utils/db');

class AppController {
/**
 * Controller for endpoint GET /status that retrieves
 * mongodb client and redis client connection status
 * @typedef {import("express").Request} Request
 * @typedef {import("express").Response} Response
 * @param {Request} _req - request object
 * @param {Response} res  - response object
 */

  static getStatus(req, res) {
    res.status(200).json({
      redis: redisClient.isAlive(),
      db: dbClient.isAlive()
    });
  }

  static async getStats(req, res) {
    const usersCount = await dbClient.nbUsers();
    const filesCount = await dbClient.nbFiles();
    res.status(200).json({
      users: usersCount,
      files: filesCount
    });
  }
}

module.exports = AppController;
