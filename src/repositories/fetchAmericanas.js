const puppeteer = require("puppeteer") // simula navegador

async function fetchAmericanas(keyword) {
  const url = `https://www.americanas.com.br/s?q=${encodeURIComponent(
    keyword
  )}&fuzzy=0&operator=and&category-1=alimentos-e-bebidas&category-1=agro-industria-e-comercio&facets=fuzzy%2Coperator%2Ccategory-1&sort=score_desc&page=0`

  const browser = await puppeteer.launch({ headless: "new" }) // inicia o navegador
  const page = await browser.newPage() // nova aba

  await page.goto(url, { waitUntil: "networkidle2" })

  await page.waitForSelector(".ProductGrid_vertical__TCnHK", {
    timeout: 10000,
  }) // espera até aparecer esse elemeto na página

  return await page.evaluate(() => {
    const products = []
    const allProducts = document.querySelectorAll(
      ".ProductCard_productCard__MwY4X"
    )

    allProducts.forEach((element) => {
      const product = {
        img: element.querySelector(".ProductCard_productImage__60DdZ > img")
          ?.src,
        title: element
          .querySelector("div > h3.ProductCard_productName__mwx7Y")
          ?.textContent?.trim(),
        price: element
          .querySelector("div > p.ProductCard_productPrice__XFEqu")
          ?.textContent?.trim(),
        from: "Americanas",
        url: element.querySelector("a")?.href,
      }

      if (product.title && product.img) {
        products.push(product)
      }
    })

    return products
  })
}

module.exports = fetchAmericanas
