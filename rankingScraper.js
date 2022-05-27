const puppeteer = require("puppeteer");

let url = "https://www.ufc.com/rankings";

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

    const getRankings = await page.evaluate(() => {
      let a = Array.from(document.querySelectorAll(".view-grouping-content a"));
      a.splice(0, 15);
      a.splice(128, 15);
      a.splice(63, 0, "");
      a.splice(176, 1);

      return a.map((a) => a.textContent);
    });

    let a = getRankings;

    console.log("let ufcRankings = [");

    let count = 0;

    getRankings.forEach((item, index) => {
      if (index % 16 === 0) {
        count = 0;
      }

      console.log(`{
            name: "${item}",
            rank: ${count},
            index: ${index}
            },`);

      count++;
    });

    console.log("]");
    console.log("module.exports = ufcRankings;");

    await browser.close();
  })();
}
