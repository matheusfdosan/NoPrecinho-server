const fetchAmericanas = require("../repositories/fetchAmericanas.js")
const fetchCarrefour = require("../repositories/fetchCarrefour.js")

const getProductService = async (keyword) => {
  let americanasData = []
  let carrefourData = []

  const [americanasResult, carrefourResult] = await Promise.allSettled([
    fetchAmericanas(keyword),
    fetchCarrefour(keyword),
  ])

  if ((americanasResult.status = "fulfilled")) {
    americanasData = americanasResult.value
  } else {
    console.error(
      "Error to fetch Americana products! " + americanasResult.reason
    )
  }

  if ((carrefourResult.status = "fulfilled")) {
    carrefourData = carrefourResult.value
  } else {
    console.error(
      "Error to fetch Carrefour products! " + carrefourResult.reason
    )
  }

  return americanasData.concat(carrefourData)
}

module.exports = getProductService
