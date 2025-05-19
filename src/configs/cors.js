const fp = require("fastify-plugin")
const cors = require("@fastify/cors")

function corOptions(server) {
  server.register(cors, {
    origin: "*",
    methods: ["GET", "POST"],
  })
}

module.exports = fp(corOptions)
