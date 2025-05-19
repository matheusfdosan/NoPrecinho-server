const server = require("fastify")({ logger: true })
const { PORT } = require("../envVariables")

const routes = require("./configs/routes.js")
server.register(routes)

const db = require("./configs/db.js")
server.register(db)

const cors = require("./configs/cors.js")
server.register(cors)

server.listen({ port: PORT, host: "0.0.0.0" }, (err, address) => {
  if (err) {
    server.log.error("Error to start server: " + err)
    process.exit(1)
  }

  server.log.info("Server now is listen on " + address)
})
