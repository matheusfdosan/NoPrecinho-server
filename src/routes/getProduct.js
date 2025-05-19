const getProductController = require("../controllers/getProductController.js")

module.exports = async (server) => {
  server.get("/scrape", getProductController)
}