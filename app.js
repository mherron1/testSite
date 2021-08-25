let delay = 0;

if (false) {
  delay = -28800000;
}

let assets = [
  "jul24-u.jpg",
  "jul30-o.jpg",
  "jul31-u.jpg",
  "jul31-b.jpg",
  "aug07-u.jpg",
  "aug13-b.jpg",
  "aug13-o.jpg",
  "aug13-p.jpg",
  "aug19-p.jpg",
  "aug20-b.jpg",
  "aug21-u.jpg",
  "aug27-p.jpg",
  "aug27-o.jpg",
  "aug28-u.jpg",
  "sep25-u.jpg",
  "oct01-b.jpg",
  "oct02-u.jpg",
  "oct16-b.jpg",
  "oct23-b.jpg",
  "oct31-u.jpg",
  "nov06-u.jpg",
];

let times = [
  {
    date: "aug07",
    promo: "Ultimate Fighting Championship",
    time: new Date(2021, 07, 08, 02, 00, 00),
    prelims: new Date(2021, 07, 07, 22, 00, 00),
    videos: ["VbYU54MYfF0"],
  },
  {
    date: "aug21",
    promo: "Ultimate Fighting Championship",
    time: new Date(2021, 07, 22, 02, 00, 00),
    prelims: new Date(2021, 07, 21, 23, 00, 00),
    videos: ["5YQcqZUgcXI"],
  },
  {
    date: "aug28",
    promo: "Ultimate Fighting Championship",
    time: new Date(2021, 29, 29, 02, 00, 00),
    prelims: new Date(2021, 28, 28, 23, 00, 00),
    videos: ["5YQcqZUgcXI"],
  },
  {
    date: "aug13",
    promo: "ONE Championship",
    time: new Date(2021, 07, 13, 12, 30, 00),
    prelims: new Date(2021, 07, 13, 12, 30, 00),
    videos: ["ArmS7WGoQZQ"],
  },
  {
    date: "aug27",
    promo: "ONE Championship",
    time: new Date(2021, 07, 27, 12, 30, 00),
    prelims: new Date(2021, 07, 27, 12, 30, 00),
    videos: [],
  },
  {
    date: "aug13",
    promo: "Professional Fighters League",
    time: new Date(2021, 07, 14, 01, 00, 00),
    prelims: new Date(2021, 07, 13, 22, 00, 00),
    videos: ["HVxCo6Z7XRM"],
  },
  {
    date: "aug19",
    promo: "Professional Fighters League",
    time: new Date(2021, 07, 20, 01, 00, 00),
    prelims: new Date(2021, 07, 19, 22, 00, 00),
    videos: ["ihYuWvH-ijY"],
  },
  {
    date: "aug27",
    promo: "Professional Fighters League",
    time: new Date(2021, 07, 28, 02, 00, 00),
    prelims: new Date(2021, 07, 27, 22, 30, 00),
    videos: [],
  },
  {
    date: "aug13",
    promo: "Bellator MMA",
    time: new Date(2021, 07, 14, 01, 00, 00),
    prelims: new Date(2021, 07, 14, 00, 30, 00),
    videos: ["U2CxMzcO1vI"],
  },
  {
    date: "aug20",
    promo: "Bellator MMA",
    time: new Date(2021, 07, 21, 01, 00, 00),
    prelims: new Date(2021, 07, 20, 22, 00, 00),
    videos: ["zI75KXeP0hU"],
  },
  {
    date: "oct31",
    promo: "Ultimate Fighting Championship",
    time: new Date(2021, 09, 31, 02, 00, 00),
    prelims: new Date(2021, 09, 30, 23, 00, 00),
    videos: [],
  },
];

data2 = data.sort((a, b) => {
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
