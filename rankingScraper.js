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
      a.splice(64, 14);
      a.splice(176, 1);

      return a.map((a) => a.textContent);
    });

    let a = getRankings;
    count = 0;

    console.log("let ufcRankings = [");

    getRankings.forEach((item) => {
      console.log(`{
            name: "${item}",
            rank: ${count}
            },`);

      count++;
      if (count === 16) {
        count = 0;
      }
    });

    console.log("]");
    console.log("module.exports = ufcRankings;");

    await browser.close();
  })();
}
