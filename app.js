let delay = 0;

if (true) {
  delay = -25000000;
}

let assets = [
  "aug13-u.jpg",
  "aug20-u.jpg",
  "aug20-p.jpg",
  "sep03-u.jpg",
  "sep10-u.jpg",
  "sep17-u.jpg",
  "sep23-b.jpg",
];

let times = [
  {
    date: "aug13",
    promo: "Professional Fighters League",
    time: new Date(2022, 7, 13, 20, 30, 00),
    prelims: new Date(2022, 7, 13, 16, 00, 00),
    videos: [],
  },
  {
    date: "aug20",
    promo: "Professional Fighters League",
    time: new Date(2022, 7, 20, 21, 00, 00),
    prelims: new Date(2022, 7, 20, 18, 00, 00),
    videos: [],
  },
  {
    date: "aug13",
    promo: "Ultimate Fighting Championship",
    time: new Date(2022, 7, 13, 23, 00, 00),
    prelims: new Date(2022, 7, 13, 20, 00, 00),
    videos: [],
  },
  {
    date: "aug20",
    promo: "Ultimate Fighting Championship",
    time: new Date(2022, 7, 21, 02, 00, 00),
    prelims: new Date(2022, 7, 20, 22, 00, 00),
    videos: [],
  },
  {
    date: "aug12",
    promo: "Bellator MMA",
    time: new Date(2022, 7, 13, 01, 00, 00),
    prelims: new Date(2022, 7, 12, 22, 00, 00),
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
    event[2] = "images/defaults/ufc.png";
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
