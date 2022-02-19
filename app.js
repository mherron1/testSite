let delay = 0;

if (true) {
  delay = -25200000;
}

let assets = [
  "jan29-b.jpg",
  "feb12-u.jpg",
  "feb19-u.jpg",
  "feb19-b.jpg",
  "feb25-b.jpg",
  "feb26-u.jpg",
  "mar05-u.jpg",
  "apr09-u.jpg",
  "may07-u.jpg",
];

let times = [
  {
    date: "feb19",
    promo: "Ultimate Fighting Championship",
    time: new Date(2022, 1, 20, 00, 00, 00),
    prelims: new Date(2022, 1, 19, 21, 00, 00),
    videos: ["-UYGD7Y8408"],
  },
  {
    date: "feb19",
    promo: "Bellator MMA",
    time: new Date(2022, 1, 20, 02, 00, 00),
    prelims: new Date(2022, 1, 19, 23, 00, 00),
    videos: [],
  },
  {
    date: "feb29",
    promo: "Ultimate Fighting Championship",
    time: new Date(2022, 1, 20, 00, 00, 00),
    prelims: new Date(2022, 1, 19, 21, 00, 00),
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
