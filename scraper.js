const puppeteer = require("puppeteer");

let events = [
  "https://www.tapology.com/fightcenter/events/84364-ufc-fight-night",
  "https://www.tapology.com/fightcenter/events/83999-ufc-fight-night",
  "https://www.tapology.com/fightcenter/events/84285-ufc-fight-night",
  "https://www.tapology.com/fightcenter/events/85306-ufc-fight-night",
  "https://www.tapology.com/fightcenter/events/85814-ufc-fight-night",
  "https://www.tapology.com/fightcenter/events/86013-ufc-fight-night",
  "https://www.tapology.com/fightcenter/events/86142-ufc-fight-night",
  "https://www.tapology.com/fightcenter/events/85253-ufc-274",
  "https://www.tapology.com/fightcenter/events/85916-ufc-fight-night",
  "https://www.tapology.com/fightcenter/events/86509-ufc-fight-night",
  "https://www.tapology.com/fightcenter/events/86746-ufc-fight-night",
  "https://www.tapology.com/fightcenter/events/87286-ufc-275-teixeira-vs-prochazka",
  "https://www.tapology.com/fightcenter/events/86354-bellator-276",
  "https://www.tapology.com/fightcenter/events/86986-bellator-277-mckee-vs-pitbull-2",
  "https://www.tapology.com/fightcenter/events/86506-bellator-paris-bader-vs-kongo-2",
  "https://www.tapology.com/fightcenter/events/86088-bellator-london-amosov-vs-mvp",
  //"https://www.tapology.com/fightcenter/events/81071-one-championship-battleground-3",
  // "https://www.tapology.com/fightcenter/events/81072-one-championship-10-year-anniversary",
  "https://www.tapology.com/fightcenter/events/80968-pfl-2021-10-championships",
  "https://www.tapology.com/fightcenter/events/84662-ufc-fight-night",
  "https://www.tapology.com/fightcenter/events/85214-bellator-mma",
  //"https://www.tapology.com/fightcenter/events/81070-one-championship-battleground-2",
];
//getEventURLs();

console.log("let data = [");

let index = 0;

setTimeout(function () {
  asyncGetCards();
}, 0);

function asyncGetCards() {
  getCard(events[index]);
  const delay = (t) => new Promise((resolve) => setTimeout(resolve, t));
  delay(11000).then(() => {
    index++;
    if (index < events.length) {
      asyncGetCards(index);
    } else if ((index = events.length)) {
      console.log("]");
      console.log("module.exports = data;");
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

    const eventTitle = await page.evaluate(() => {
      const title = document
        .querySelector(".eventPageHeaderTitles h1")
        .textContent.split(":")[0];
      return title;
    });

    const eventDate = await page.evaluate(() => {
      const eventDate = document.querySelector(
        "#content > div.details.details_with_poster.clearfix > div.right > ul > li.header"
      );

      let dateArray = eventDate.textContent.split(" "); ///remove textContent if origin scrape
      let year = parseInt(dateArray[1].split(".")[2]);
      let month = dateArray[1].split(".")[0] - 1;
      let day = parseInt(dateArray[1].split(".")[1]);
      let hour = parseInt(dateArray[3].split(":")[0]);

      if (hour > 11) {
        hour = hour + 5; ///////////// +5 hours to convert to UTC time
      } else {
        hour = hour + 12 + 5; ///////////// +5 hours to convert to UTC time
        if (hour > 24) {
          hour = hour - 24;
          day += 1;
        }
      }
      let minute = parseInt(dateArray[3].split(":")[1]);
      let second = 0;
      var main = new Date(year, month, day, hour, minute, second);

      return Date.parse(main);
    });

    const promotion = await page.evaluate(() => {
      const promotion = document
        .querySelector("#content > div.details.details_with_poster.clearfix")
        .getElementsByTagName("a")[0].textContent;
      return promotion;
    });

    const poster = await page.evaluate(() => {
      let posterSRC = document.querySelector(".left img").src;
      return posterSRC;
    });

    const broadCast = await page.evaluate(() => {
      let broadCast = document
        .querySelector(
          "#content > div.details.details_with_poster.clearfix > div.right > ul > li:nth-child(2)"
        )
        .innerText.split(" ")
        .slice(2)
        .join(" ");
      return broadCast;
    });

    const fighterANames = await page.evaluate(() => {
      let a = document.querySelectorAll(".fightCardFighterName.left");
      const b = [...a];
      return b.map((b) => b.innerText);
    });
    const fighterBNames = await page.evaluate(() => {
      let a = document.querySelectorAll(".fightCardFighterName.right");
      const b = [...a];
      return b.map((b) => b.innerText);
    });
    const fightCardRecord = await page.evaluate(() => {
      let a = document.querySelectorAll(".fightCardRecord");
      const b = [...a];
      return b.map((b) => b.innerText);
    });
    const fighterLeftRank = await page.evaluate(() => {
      let a = document.querySelectorAll(".fightCardFighterRankNum.left");
      const b = [...a];
      return b.map((b) => b.innerText);
    });
    const fighterRightRank = await page.evaluate(() => {
      let a = document.querySelectorAll(".fightCardFighterRankNum.right");
      const b = [...a];
      return b.map((b) => b.innerText);
    });
    const fighterWeights = await page.evaluate(() => {
      let a = document.querySelectorAll(".weight");
      const b = [...a];
      return b.map((b) => b.innerText);
    });
    const fighterALink = await page.evaluate(() => {
      let a = document.querySelectorAll(".fightCardFighterName.left");
      const b = [...a];
      return b.map((b) => b.firstElementChild.href);
    });
    const fighterBLink = await page.evaluate(() => {
      let a = document.querySelectorAll(".fightCardFighterName.right");
      const b = [...a];
      return b.map((b) => b.firstElementChild.href);
    });

    const numPrelims = await page.evaluate(() => {
      let fightsArr = document.querySelectorAll(".billing a");
      let fArr = [...fightsArr];
      let num = 0;
      fArr.forEach((f) => {
        if (f.textContent === "Prelim") {
          num++;
        }
      });
      return num;
    });

    a = fighterANames;
    b = fighterBNames;
    c = fightCardRecord;
    d = fighterLeftRank;
    e = fighterRightRank;
    f = fighterWeights;
    g = fighterALink;
    h = fighterBLink;
    t = eventDate;
    p = poster;
    bc = broadCast;
    eventName = eventTitle;
    promo = promotion;
    n = numPrelims;
    await browser.close();
  })();

  setTimeout(() => {
    let fightCard = [];
    let j = 0;
    for (i = 0; i < a.length; i++) {
      let k = j + 1;
      let fighterA = a[i];
      let fighterALink = g[i];

      let rankA = "#n/a";
      if (typeof d[i] === "undefined") {
        e[i] = "#n/a";
      } else {
        rankA = d[i];
      }

      let recordA = c[j];
      let fighterB = b[i];
      let fighterBLink = h[i];

      let rankB = "#n/a";
      if (typeof e[i] === "undefined") {
        e[i] = "#n/a";
      } else {
        rankB = e[i];
      }

      let recordB = c[k];
      let weight = f[i];

      /*rankA = "";
      rankB = "";*/

      let newBout = {
        fighterA: fighterA,
        fighterALink: fighterALink,
        rankA: rankA,
        recordA: recordA,
        weight: weight,
        recordB: recordB,
        rankB: rankB,
        fighterBLink: fighterBLink,
        fighterB: fighterB,
      };

      fightCard.push(newBout);

      k += 1;
      j = k;
    }

    console.log(`["${promo}",`);
    console.log(`${t},`);
    console.log("'',");
    console.log(fightCard);
    console.log(`,"${eventName}",`);
    console.log(`"${n}",`);
    console.log(`"${bc}"`);
    console.log("],");
  }, 10000);
}
