let delay = 0;

if (true) {
  delay = -40000000;
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
  "jul16.jpg",
  "jul17.jpg",
  "jul24.jpg",
  "aug07.jpg",
  "sep25.jpg",
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
    date: "jun11",
    promo: "Bellator MMA",
    time: new Date(2021, 05, 12, 01, 00, 00),
    prelims: new Date(2021, 05, 11, 22, 00, 00),
    videos: ["M-kufERKXCA"],
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
    videos: ["M1F_8nQh--s"],
  },
  {
    date: "jun25",
    promo: "Professional Fighters League",
    time: new Date(2021, 05, 26, 02, 00, 00),
    prelims: new Date(2021, 05, 25, 22, 00, 00),
    videos: ["rnkOf9a3Pds"],
  },
  {
    date: "jun26",
    promo: "Ultimate Fighting Championship",
    time: new Date(2021, 05, 26, 20, 00, 00),
    prelims: new Date(2021, 05, 26, 17, 00, 00),
    videos: ["Lehc_v635rs"],
  },
  {
    date: "jul10",
    promo: "Ultimate Fighting Championship",
    time: new Date(2021, 06, 11, 02, 00, 00),
    prelims: new Date(2021, 06, 10, 22, 00, 00),
    videos: ["fiYyc0z5g1U"],
  },
  {
    date: "jul17",
    promo: "Ultimate Fighting Championship",
    time: false,
    prelims: false,
    videos: ["Th4hu3ruG7Q"],
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
  let tempTime = event[7].split(" ").join("") + ".jpg";
  if (
    assets.indexOf(tempTime.toLowerCase()) > -1 &&
    event[0] != "Professional Fighters League" &&
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
