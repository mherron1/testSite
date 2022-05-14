const puppeteer = require("puppeteer");

let events = [
  "https://www.tapology.com/fightcenter/events/85253-ufc-274",
  "https://www.tapology.com/fightcenter/events/86088-bellator-london-amosov-vs-mvp",
  "https://www.tapology.com/fightcenter/events/87834-pfl-2022-3-regular-season",
  // "https://www.tapology.com/fightcenter/events/81070-one-championship-battleground-2",
];
//getEventURLs();

console.log("let resultsList = [");

let index = 0;

asyncGetCards();

function asyncGetCards() {
  getCard(events[index]);
  const delay = (t) => new Promise((resolve) => setTimeout(resolve, t));
  delay(11000).then(() => {
    index++;
    if (index < events.length) {
      asyncGetCards(index);
    } else if ((index = events.length)) {
      console.log("]");
      console.log("module.exports = resultsList;");
    }
  });
}

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

    const fighterANames = await page.evaluate(() => {
      let a = document.querySelectorAll(".fightCardFighterName.left");
      const b = [...a];
      return b.map((b) => b.innerText);
    });

    const fighterBLink = await page.evaluate(() => {
      let a = document.querySelectorAll(".fightCardFighterName.right a");
      const b = [...a];
      return b.map((b) => b.href);
    });

    const method = await page.evaluate(() => {
      let a = document.querySelectorAll(".result");
      const b = [...a];
      return b.map((b) => b.innerText);
    });

    const time = await page.evaluate(() => {
      let a = document.querySelectorAll(".time");
      const b = [...a];
      return b.map((b) => b.innerText);
    });

    a = fighterANames;
    h = fighterBLink;
    m = method;
    t = time;

    await browser.close();
  })();

  setTimeout(() => {
    let fightCard = [];
    let timeX = "";
    let j = 0;
    for (i = 0; i < a.length; i++) {
      if (t[i].includes("Rounds")) {
        timeX = t[i].split(",")[0];
      } else {
        timeX = t[i].split(" o")[0];
      }

      let k = j + 1;
      let fighterA = a[i];
      let methodOfVictory = m[i].split(",")[0].toLowerCase();

      let fighterBLink = h[i];

      let newBout = {
        winner: fighterA,
        time: timeX,
        method: methodOfVictory,
        b_Link: fighterBLink,
      };

      fightCard.push(newBout);

      k += 1;
      j = k;
    }

    fightCard.forEach((item) => {
      console.log(item);
      console.log(",");
    });
  }, 10000);
}
