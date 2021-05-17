const puppeteer = require("puppeteer");

let events = [
  "https://www.tapology.com/fightcenter/events/77264-ufc-fight-night",
  "https://www.tapology.com/fightcenter/events/77692-ufc-fight-night",
  "https://www.tapology.com/fightcenter/events/77570-ufc-263",
  "https://www.tapology.com/fightcenter/events/77656-ufc-fight-night",
  "https://www.tapology.com/fightcenter/events/77763-ufc-fight-night",
  "https://www.tapology.com/fightcenter/events/78106-ufc-264",
  "https://www.tapology.com/fightcenter/events/77535-one-championship",
  "https://www.tapology.com/fightcenter/events/77893-bellator-259",
  "https://www.tapology.com/fightcenter/events/78542-bellator-260",
  "https://www.tapology.com/fightcenter/events/79075-bellator-261",
  "https://www.tapology.com/fightcenter/events/73517-pfl-2021-4",
  "https://www.tapology.com/fightcenter/events/77263-ufc-fight-night",
  "https://www.tapology.com/fightcenter/events/73516-pfl-2021-3",
  "https://www.tapology.com/fightcenter/events/78930-one-championship-dangal",
  "https://www.tapology.com/fightcenter/events/77132-bellator-258-archuleta-vs-pettis",
];

//getEventURLs();

console.log("let data = [");

let index = 0;

asyncGetCards();

function asyncGetCards() {
  getCard(events[index]);
  const delay = (t) => new Promise((resolve) => setTimeout(resolve, t));
  delay(15000).then(() => {
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
    console.log(`"${n}"`);
    console.log("],");
  }, 14000);
}
