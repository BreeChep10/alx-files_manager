const redis = require('redis');


/**
 * Represents a redis client
 */
class RedisClient {
	/**
	 * Creates a new redisclientinstance.
	 */
	constructor() {
		this.client = redis.createClient();
		this.client.on('error', (err) => {
			console.error(`Redis client error: ${err}`);
			});
	}
	/**
	 * Checks if this client is alive.
	 * @returns {boolean}
	 */
	isAlive() {
		return this.client.connected;
	}

	/**
	 * Retreives the value of a given key.
	 * @param {String} key of the item to retrieve.
	 * @retuens {String | Object}
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
	
	/**
	 * Removes the value of a given key.
	 * @param {String} key The key of the item to remove.
	 * @returns {Promise<void>}
	 */

	async del(key) {
		return new Promise((resolve, reject) => {
			this.client.del(key, (err) => {
				if (err) return reject(err);
				resolve();
				});
			});
		}
	const redisClient = new RedisClient();
	module.exports = redisClient;
