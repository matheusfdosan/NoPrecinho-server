const getProductService = require("../services/getProductService.js")

const getProductController = async (request, reply) => {
  const keyword = request.query.keyword

  const result = await getProductService(keyword)
  reply.status(200).send(result)
}

module.exports = getProductController
