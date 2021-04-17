const puppeteer = require("puppeteer");

function getOdds() {
  (async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto("https://www.oddschecker.com/ufc-mma");
    const fightOdds = await page.evaluate(() => {
      let odds = [];
      document
        .getElementsByClassName("fixtures-bet-name beta-footnote")
        .forEach((name, index) => {
          name.textContent = name.textContent.replace("TJ", "T.J.");
          odds.push({
            name: name.textContent,
            odds: document
              .getElementsByClassName(
                "odds beta-footnote bold add-to-bet-basket"
              )
              [index].textContent.split("/"),
          });
        });

      let newOdds = odds.map((item) => {
        let decOdds = (item.odds = item.odds[0] / item.odds[1] + 1);
        return { name: item.name, odds: decOdds.toFixed(2) };
      });

      return newOdds;
    });
    console.log("let odds = ");

    const util = require("util");
    console.log(util.inspect(fightOdds, { maxArrayLength: null }));

    await browser.close();
  })();
}

getOdds();
