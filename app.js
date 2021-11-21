let delay = 0;

if (true) {
  delay = -51800000;
}

let assets = [
  "nov20-u.jpg",
  "oct27-p.jpg",
  "nov05-b.jpg",
  "nov06-u.jpg",
  "nov12-b.jpg",
  "nov13-u.jpg",
  "nov20-u.jpg",
  "dec03-b.jpg",
  "dec04-u.jpg",
  "dec11-u.jpg",
  "dec18-u.jpg",
  "jan15-u.jpg",
  "jan22-u.jpg",
  "feb12-u.jpg",
];

let times = [
  {
    date: "nov20",
    promo: "Ultimate Fighting Championship",
    time: new Date(2021, 10, 20, 23, 00, 00),
    prelims: new Date(2021, 10, 20, 20, 00, 00),
    videos: [],
  },
  {
    date: "nov12",
    promo: "Bellator MMA",
    time: new Date(2021, 10, 13, 03, 00, 00),
    prelims: new Date(2021, 10, 13, 00, 00, 00),
    videos: ["sCH4MGrbidU"],
  },
  {
    date: "oct27",
    promo: "Professional Fighters League",
    time: new Date(2021, 09, 28, 00, 00, 00),
    prelims: new Date(2021, 09, 27, 20, 30, 00),
    videos: [],
  },
];

data2 = data.sort((a, b) => {
  return a[1] - b[1];
});

let nowEpochX = new Date().getTime();
let winners = [];

data2.forEach((event) => {
  if (event[0] === "Most Valuable Promotions") {
    event[0] = "Ultimate Fighting Championship";
  }

  let tempTime =
    event[7].split(" ").join("") + "-" + event[0][0].split(" ")[0] + ".jpg";
  if (assets.indexOf(tempTime.toLowerCase()) > -1) {
    event[2] =
      "images/eventImages/" + assets[assets.indexOf(tempTime.toLowerCase())];
  } else if (event[0].includes("Ultimate")) {
    event[2] = "images/defaults/ufc.jpg";
  } else if (event[0].includes("Bellator")) {
    event[2] = "images/defaults/bellator.jpg";
  } else if (event[0].includes("Professional Fight")) {
    event[2] = "images/defaults/pfl.jpg";
  } else if (event[0].includes("ONE")) {
    event[2] = "images/defaults/one.jpg";
  } else {
    event[2] = "images/defaults/placeholder.jpg";
  }
  if (event[4].includes("Paul")) {
    event[2] = "images/eventImages/special.jpg";
    event[1] = 1630278000000;
  }

  if (event[6].includes("|")) {
    event[6] = "Broadcast: Main Card : " + event[6].split("|").join(",");
  } else if (event[6] === "") {
  } else {
    event[6] = "Broadcast: " + event[6];
  }

  if (new Date(event[1]) - nowEpochX < delay) {
    event[6] = "";
    event[3].forEach((fight) => {
      winners.push(fight.fighterA);

      let rand = Math.floor(Math.random() * 10);
      if (rand % 2 === 0) {
        let tempName = fight.fighterA;
        fight.fighterA = fight.fighterB;
        fight.fighterB = tempName;
        let tempLink = fight.fighterALink;
        fight.fighterALink = fight.fighterBLink;
        fight.fighterBLink = tempLink;
      }
    });
  }
});
