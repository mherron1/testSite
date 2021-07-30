let delay = 0;

if (false) {
  delay = -400000000;
}

let assets = [
  "jun25-p.jpg",
  "jun25-b.jpg",
  "jun26-u.jpg",
  "jul10-u.jpg",
  "jul16-b.jpg",
  "jul17-u.jpg",
  "jul24-u.jpg",
  "jul30-o.jpg",
  "jul31-u.jpg",
  "jul31-b.jpg",
  "aug07-u.jpg",
  "aug13-b.jpg",
  "aug21-u.jpg",
  "aug28-u.jpg",
  "sep25-u.jpg",
  "oct02-u.jpg",
  "oct23-b.jpg",
  "oct31-u.jpg",
  "nov06-u.jpg",
];

let times = [
  {
    date: "jun11",
    promo: "ONE Championship",
    time: new Date(2021, 05, 11, 12, 30, 00),
    prelims: new Date(2021, 05, 11, 12, 30, 00),
    videos: [],
  },
  {
    date: "jun25",
    promo: "Professional Fighters League",
    time: new Date(2021, 05, 26, 02, 00, 00),
    prelims: new Date(2021, 05, 25, 22, 00, 00),
    videos: ["rnkOf9a3Pds"],
  },
  {
    date: "jul16",
    promo: "Bellator MMA",
    time: new Date(2021, 06, 17, 01, 00, 00),
    prelims: new Date(2021, 06, 16, 22, 00, 00),
    videos: ["jF9MUhp460U"],
  },
  {
    date: "jul17",
    promo: "Ultimate Fighting Championship",
    time: new Date(2021, 06, 18, 02, 00, 00),
    prelims: new Date(2021, 06, 17, 23, 00, 00),
    videos: ["m8bzzO1XnvI"],
  },
  {
    date: "jul24",
    promo: "Ultimate Fighting Championship",
    time: new Date(2021, 06, 24, 23, 00, 00),
    prelims: new Date(2021, 06, 24, 20, 00, 00),
    videos: ["RPwZk3T4kaI"],
  },
  {
    date: "jul30",
    promo: "ONE Championship",
    time: new Date(2021, 06, 30, 12, 30, 00),
    prelims: new Date(2021, 06, 30, 12, 30, 00),
    videos: ["0Azxuhd3lQo"],
  },
  {
    date: "jul31",
    promo: "Ultimate Fighting Championship",
    time: new Date(2021, 07, 01, 01, 00, 00),
    prelims: new Date(2021, 06, 31, 22, 00, 00),
    videos: ["IZxJK6pDkd4"],
  },
  {
    date: "jul31",
    promo: "Bellator MMA",
    time: new Date(2021, 07, 01, 01, 00, 00),
    prelims: new Date(2021, 06, 31, 22, 00, 00),
    videos: ["LoBoFtwQIHk"],
  },
  {
    date: "aug07",
    promo: "Ultimate Fighting Championship",
    time: new Date(2021, 07, 08, 02, 00, 00),
    prelims: new Date(2021, 07, 07, 22, 00, 00),
    videos: ["WKmi414prVU"],
  },
  {
    date: "aug13",
    promo: "ONE Championship",
    time: new Date(2021, 07, 13, 12, 30, 00),
    prelims: new Date(2021, 07, 13, 12, 30, 00),
    videos: [],
  },
  {
    date: "oct31",
    promo: "Ultimate Fighting Championship",
    time: new Date(2021, 09, 31, 02, 00, 00),
    prelims: new Date(2021, 09, 30, 23, 00, 00),
    videos: [],
  },
];
//tempFix
data.forEach((event) => {
  if (event[1] === 1623457800000) {
    event[1] = new Date(2021, 05, 11, 12, 30, 00).getTime();
  }
});

let data2 = data.sort((a, b) => {
  return a[1] - b[1];
});

let nowEpochX = new Date().getTime();
let winners = [];

data2.forEach((event) => {
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
