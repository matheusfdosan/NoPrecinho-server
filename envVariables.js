const { config } = require("dotenv")

config({ path: "./src/configs/.env" })

const PORT = process.env.PORT
const MONGODB = process.env.MONGODB

module.exports = {
  PORT,
  MONGODB,
}
