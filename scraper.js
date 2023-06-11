const puppeteer = require("puppeteer");

const events = [
  "https://www.tapology.com/fightcenter/events/99416-ufc-294",
  "https://www.tapology.com/fightcenter/events/101315-ufc-293",
  "https://www.tapology.com/fightcenter/events/101389-ufc-fight-night",
  "https://www.tapology.com/fightcenter/events/101022-ufc-292",
  "https://www.tapology.com/fightcenter/events/101163-ufc-fight-night",
  "https://www.tapology.com/fightcenter/events/101342-ufc-fight-night",
  "https://www.tapology.com/fightcenter/events/101214-ufc-291",
  "https://www.tapology.com/fightcenter/events/99813-ufc-fight-night",
  "https://www.tapology.com/fightcenter/events/100553-ufc-fight-night",
  "https://www.tapology.com/fightcenter/events/98868-ufc-290",
  "https://www.tapology.com/fightcenter/events/100452-ufc-fight-night",
  "https://www.tapology.com/fightcenter/events/99780-ufc-fight-night",
  "https://www.tapology.com/fightcenter/events/99705-ufc-fight-night",
  "https://www.tapology.com/fightcenter/events/99346-ufc-289",
  "https://www.tapology.com/fightcenter/events/99119-ufc-fight-night",
];

async function run() {
  console.log("let data = [");
  for (const event of events) {
    await processEvent(event);
  }
  console.log("]");
  console.log("module.exports = data;");
}

async function processEvent(url) {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setRequestInterception(true);
  page.on("request", (req) => {
    if (req.resourceType() === "stylesheet" || req.resourceType() === "image") {
      req.abort();
    } else {
      req.continue();
    }
  });
  await page.goto(url);

  const eventTitle = await page.evaluate(() => {
    const title = document.querySelector(".eventPageHeaderTitles h1").textContent.split(":")[0];
    return title;
  });

  const eventDate = await page.evaluate(() => {
    const eventDate = document.querySelector("#content > div.details.details_with_poster.clearfix > div.right > ul > li.header");
    let dateArray = eventDate.textContent.split(" ");
    let year = parseInt(dateArray[1].split(".")[2]);
    let month = dateArray[1].split(".")[0] - 1;
    let day = parseInt(dateArray[1].split(".")[1]);
    let hour = parseInt(dateArray[3].split(":")[0]);

    if (hour > 11) {
      hour = hour + 5;
    } else {
      hour = hour + 12 + 5;
      if (hour > 24) {
        hour = hour - 24;
        day += 1;
      }
    }
    let minute = parseInt(dateArray[3].split(":")[1]);
    let second = 0;
    return Date.parse(new Date(year, month, day, hour, minute, second));
  });

  const promotion = await page.evaluate(() => {
    return document.querySelector("#content > div.details.details_with_poster.clearfix").getElementsByTagName("a")[0].textContent;
  });

  const poster = await page.evaluate(() => {
    return document.querySelector(".left img").src;
  });

  const broadCast = await page.evaluate(() => {
    return document.querySelector("#content > div.details.details_with_poster.clearfix > div.right > ul > li:nth-child(2)").innerText.split(" ").slice(2).join(" ");
  });

  const prelimCount = await page.evaluate(() => {
    const fightsArr = document.querySelectorAll(".billing a");
    let prelimCount = 0;
    fightsArr.forEach((fight) => {
      if (fight.textContent === "Prelim") {
        prelimCount++;
      }
    });
    return prelimCount;
  });

  const boutData = await page.evaluate(() => {
    const boutElements = Array.from(document.querySelectorAll(".fightCard"));
    return boutElements.map((boutElement) => {
      const fighterA = boutElement.querySelector(".fightCardFighterName.left").innerText;
      const fighterALink = boutElement.querySelector(".fightCardFighterName.left a").href;
      const rankA = boutElement.querySelector(".fightCardFighterRankNum.left")?.innerText || "#n/a";
      const recordA = boutElement.querySelector(".fightCardRecord").innerText;
      const fighterB = boutElement.querySelector(".fightCardFighterName.right").innerText;
      const fighterBLink = boutElement.querySelector(".fightCardFighterName.right a").href;
      const rankB = boutElement.querySelector(".fightCardFighterRankNum.right")?.innerText || "#n/a";
      const recordB = boutElement.nextElementSibling.querySelector(".fightCardRecord").innerText;
      const weight = boutElement.nextElementSibling.querySelector(".weight").innerText;

      return {
        fighterA,
        fighterALink,
        rankA,
        recordA,
        fighterB,
        fighterBLink,
        rankB,
        recordB,
        weight,
      };
    });
  });

  console.log(`["${promotion}",`);
  console.log(`${eventDate},`);
  console.log("'',");
  console.log(boutData);
  console.log(`,"${eventTitle}",`);
  console.log(`"${prelimCount}",`);
  console.log(`"${broadCast}"`);
  console.log("],");

  await browser.close();
}

run();
