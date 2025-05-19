const puppeteer = require("puppeteer")

async function fetchCarrefour(keyword) {
  const url = `https://mercado.carrefour.com.br/busca/${encodeURIComponent(
    keyword
  )}`
  const browser = await puppeteer.launch({ headless: "new" })
  const page = await browser.newPage()

  await page.goto(url, { waitUntil: "networkidle2" })

  await page.waitForSelector("[data-id='product-grid']", { timeout: 10000 })

  return await page.evaluate(() => {
    const products = []
    const allProducts = document.querySelectorAll(
      "[data-id='product-grid'] > a"
    )

    allProducts.forEach((element) => {
      const product = {
        img: element.querySelector("img")?.src,
        title: element.querySelector("h2")?.textContent?.trim(),
        price: element
          .querySelector(
            "span.text-base.font-bold.text-default-dark.whitespace-nowrap"
          )
          ?.textContent?.trim(),
        from: "Carrefour",
        url: element?.href,
      }

      if (product.img && product.title) {
        products.push(product)
      }
    })

    return products
  })
}

module.exports = fetchCarrefour
