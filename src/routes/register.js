const registerController = require("../controllers/registerController.js")

module.exports = async (server) => {
  server.post("/register", registerController)
}