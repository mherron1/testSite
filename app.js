let delay = 0;

if (true) {
  delay = -22000000;
}

let assets = [
  "may01.jpg",
  "may06.jpg",
  "may07.jpg",
  "may08.jpg",
  "may22.jpg",
  "may28.jpg",
  "jun05.jpg",
  "jun10.jpg",
  "jun11.jpg",
  "jun12.jpg",
  "jun17.jpg",
  "jun19.jpg",
  "jun26.jpg",
  "jul10.jpg",
  "jul17.jpg",
  "aug07.jpg",
  "sep04.jpg",
];

let times = [
  {
    date: "jun05",
    promo: "Ultimate Fighting Championship",
    time: new Date(2021, 05, 05, 23, 00, 00),
    prelims: new Date(2021, 05, 05, 20, 00, 00),
    videos: ["5G3M93bUg7E"],
  },
  {
    date: "jun10",
    promo: "Professional Fighters League",
    time: new Date(2021, 05, 11, 02, 00, 00),
    prelims: new Date(2021, 05, 10, 23, 00, 00),
    videos: ["bBqUoDGvL3E"],
  },
  {
    date: "jun11",
    promo: "ONE Championship",
    time: new Date(2021, 05, 11, 12, 30, 00),
    prelims: new Date(2021, 05, 11, 12, 30, 00),
    videos: [],
  },
  {
    date: "jun11",
    promo: "Bellator MMA",
    time: new Date(2021, 05, 12, 01, 00, 00),
    prelims: new Date(2021, 05, 11, 22, 00, 00),
    videos: ["M-kufERKXCA"],
  },
  {
    date: "jun12",
    promo: "Ultimate Fighting Championship",
    time: new Date(2021, 05, 13, 02, 00, 00),
    prelims: new Date(2021, 05, 12, 22, 30, 00),
    videos: ["RA7DcV5SRgQ"],
  },
  {
    date: "jun17",
    promo: "Professional Fighters League",
    time: new Date(2021, 05, 18, 01, 00, 00),
    prelims: new Date(2021, 05, 17, 21, 30, 00),
    videos: ["hZ15pgfG8dk"],
  },
  {
    date: "jun19",
    promo: "Ultimate Fighting Championship",
    time: new Date(2021, 05, 19, 23, 00, 00),
    prelims: new Date(2021, 05, 19, 20, 00, 00),
    videos: ["MpZxfPcMtYE"],
  },
  {
    date: "jun25",
    promo: "Bellator MMA",
    time: new Date(2021, 05, 26, 01, 00, 00),
    prelims: new Date(2021, 05, 25, 22, 00, 00),
    videos: [],
  },
  {
    date: "jun26",
    promo: "Ultimate Fighting Championship",
    time: new Date(2021, 05, 27, 01, 00, 00),
    prelims: new Date(2021, 05, 26, 22, 00, 00),
    videos: ["kBc82zZsupY"],
  },
  {
    date: "jul10",
    promo: "Ultimate Fighting Championship",
    time: false,
    prelims: false,
    videos: ["fiYyc0z5g1U"],
  },
  {
    date: "jul17",
    promo: "Ultimate Fighting Championship",
    time: false,
    prelims: false,
    videos: ["b7CotB8o_tg"],
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
    new Date(event[1] - 50000000).toString().split(" ")[1] +
    new Date(event[1] - 50000000).toString().split(" ")[2] +
    ".jpg";
  if (
    assets.indexOf(tempTime.toLowerCase()) > -1 &&
    event[0] != "ONE Championship"
  ) {
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

let android = false;
var ua = navigator.userAgent.toLowerCase();
var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
if (isAndroid) {
  android = true;
}
