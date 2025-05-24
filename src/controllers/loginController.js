const loginService = require("../services/loginService.js")

const loginController = async (request, reply) => {
  let { email, password } = request.body

  const result = await loginService(email, password)
  reply.status(200).send(result)
}

module.exports = loginController
