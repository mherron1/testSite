const puppeteer = require("puppeteer");

let url = "https://www.oddschecker.com/ufc-mma";

getCard(url);

function getCard(url) {
  (async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.setRequestInterception(true);
    page.on("request", (req) => {
      if (
        req.resourceType() == "stylesheet" ||
        req.resourceType() === "image"
      ) {
        req.abort();
      } else {
        req.continue();
      }
    });
    await page.goto(url);

    const getOdds = await page.evaluate(() => {
      let a = document.querySelectorAll(".basket-add");
      const b = [...a];

      return b.map((b) => b.textContent);
    });

    const getNames = await page.evaluate(() => {
      let a = document.querySelectorAll(".fixtures-bet-name");
      const b = [...a];

      return b.map((b) => b.textContent);
    });

    let b = getOdds;
    let c = getNames;

    console.log("let odds = [");

    b.forEach((item, index) => {
      leftNum = item.split("/")[0];
      rightNum = item.split("/")[1];
      let decOdds = leftNum / rightNum + 1;

      console.log(`{"name":"${c[index]}" , "odds": "${decOdds.toFixed(2)}"},`);
    });

    console.log("]");

    await browser.close();
  })();
}
