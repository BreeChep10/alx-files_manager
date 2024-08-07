# 📂 0x04. Files Manager
`Back-end` `JavaScript` `ES6` `NoSQL` `MongoDB` `Redis` `NodeJS` `ExpressJS` `Kue`
<br></br>

## 📝 Project Details
- **Team**: Ernest Shongwe
- **Start Date**: Jun 27, 2024, 6:00 AM
- **End Date**: Jul 4, 2024, 6:00 AM

This project summarizes this back-end trimester: authentication, NodeJS, MongoDB, Redis, pagination, and background processing.
<br></br>

## 📋 Objective
Build a simple platform to upload and view files:
- 🔒 User authentication via a token
- 📂 List all files
- ⬆️ Upload a new file
- 🔄 Change permission of a file
- 👀 View a file
- 🖼️ Generate thumbnails for images
<br></br>

## 📚 Resources
- [Node JS getting started](https://nodejs.dev/learn)
- [Process API doc](https://nodejs.org/api/process.html)
- [Express getting started](https://expressjs.com/en/starter/installing.html)
- [Mocha documentation](https://mochajs.org/)
- [Nodemon documentation](https://nodemon.io/)
- [MongoDB](https://docs.mongodb.com/)
- [Bull](https://github.com/OptimalBits/bull)
- [Image thumbnail](https://www.npmjs.com/package/image-thumbnail)
- [Mime-Types](https://www.npmjs.com/package/mime-types)
- [Redis](https://redis.io/documentation)
<br></br>

## 🎯 Learning Objectives
At the end of this project, you should be able to explain:
- How to create an API with Express
- How to authenticate a user
- How to store data in MongoDB
- How to store temporary data in Redis
- How to set up and use a background worker
<br></br>

## 💻 Requirements
- **Editors**: vi, vim, emacs, Visual Studio Code
- **Environment**: Ubuntu 18.04 LTS, Node (version 12.x.x)
- **File Ending**: All files should end with a new line
- **README.md**: Mandatory
- **Code Extension**: .js
- **Linting**: Verified using ESLint
<br></br>

## 📦 Provided Files
- **package.json**
- **.eslintrc.js**
- **babel.config.js**

Don't forget to run `$ npm install` when you have the package.json
<br></br>

## 📝 Tasks

| Task No. | Task Description | File(s) |
|----------|------------------|---------|
| 0️⃣ | Redis utils | `utils/redis.js` |
| 1️⃣ | MongoDB utils | `utils/db.js` |
| 2️⃣ | First API | `server.js`, `routes/index.js`, `controllers/AppController.js` |
| 3️⃣ | Create a new user | `utils/`, `routes/index.js`, `controllers/UsersController.js` |
| 4️⃣ | Authenticate a user | `utils/`, `routes/index.js`, `controllers/UsersController.js`, `controllers/AuthController.js` |
| 5️⃣ | First file | `utils/`, `routes/index.js`, `controllers/FilesController.js` |
| 6️⃣ | Get and list file | `utils/`, `routes/index.js`, `controllers/FilesController.js` |
| 7️⃣ | File publish/unpublish | `utils/`, `routes/index.js`, `controllers/FilesController.js` |
| 8️⃣ | File data | `utils/`, `routes/index.js`, `controllers/FilesController.js` |
| 9️⃣ | Image Thumbnails | `utils/`, `routes/index.js`, `controllers/FilesController.js` |

---
## 🚀 Doing Hard Things
