const redis = require('redis');

/**
 * Represents a Redis client.
 */
class RedisClient {
  /**
   * Creates a new RedisClient instance.
   */
  constructor() {
    this.client = redis.createClient();
    this.client.on('error', (err) => {
      console.error(`Redis client error: ${err}`);
    });
  }

  /**
   * Checks if this client is alive.
   * @returns {boolean} True if the client is connected, false otherwise.
   */
  isAlive() {
    return this.client.connected;
  }

  /**
   * Retrieves the value of a given key.
   * @param {String} key The key of the item to retrieve.
   * @returns {Promise<String>} The value of the key.
   */
  async get(key) {
    return new Promise((resolve, reject) => {
      this.client.get(key, (err, value) => {
        if (err) return reject(err);
        resolve(value);
      });
    });
  }

  /**
   * Stores a key and its value along with an expiration time.
   * @param {String} key The key of the item to store.
   * @param {String | Number | Boolean} value The item to store.
   * @param {Number} duration The expiration time of the item in seconds.
   * @returns {Promise<void>}
   */
  async set(key, value, duration) {
    return new Promise((resolve, reject) => {
      this.client.setex(key, duration, value, (err) => {
        if (err) return reject(err);
        resolve();
      });
    });
  }
