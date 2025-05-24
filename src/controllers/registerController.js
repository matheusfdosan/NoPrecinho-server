const registerService = require("../services/registerService.js")

const registerController = async (request, reply) => {
  let { email, password } = request.body

  const result = await registerService(email, password)
  reply.status(201).send(result)
}

module.exports = registerController
