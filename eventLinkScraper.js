const puppeteer = require("puppeteer");

let events = [
  "https://www.tapology.com/fightcenter/promotions/1-ultimate-fighting-championship-ufc",
];
//getEventURLs();

console.log("let eventLinks = [");

let eventLinks = [];

let index = 0;

asyncGetCards();

function asyncGetCards() {
  getCard(events[index]);
  const delay = (t) => new Promise((resolve) => setTimeout(resolve, t));
  delay(8000).then(() => {
    index++;
    if (index < events.length) {
      asyncGetCards(index);
    } else if ((index = events.length)) {
      console.log("]");
    }
  });
}

function getCard(url) {
  (async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(url);

    const sampleURL = await page.evaluate(() => {
      let x = document.querySelectorAll(".promotion a");
      let y = [...x];
      return y;
    });

    sampleURL.forEach((x) => {
      console.log(x.innerHTML);
    });

    await browser.close();
  })();
}
