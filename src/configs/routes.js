const fp = require("fastify-plugin")

const register = require("../routes/register.js")
const login = require("../routes/login.js")
const getProduct = require("../routes/getProduct.js")

function allRoutes(server) {
  server.register(register)
  server.register(login)
  server.register(getProduct)
}

module.exports = fp(allRoutes)
