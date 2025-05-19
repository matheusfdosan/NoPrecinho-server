const loginController = require("../controllers/loginController.js")

module.exports = async (server) => {
  server.post("/login", loginController)
}
