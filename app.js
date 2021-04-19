let assets = [
  "apr16.jpg",
  "apr17.jpg",
  "apr22.jpg",
  "apr23.jpg",
  "apr24.jpg",
  "apr25.jpg",
  "apr29.jpg",
  "may01.jpg",
  "may06.jpg",
  "may07.jpg",
  "may08.jpg",
  "may15.jpg",
  "may21.jpg",
  "may22.jpg",
  "jun10.jpg",
  "jun12.jpg",
  "jun19.jpg",
  "jun26.jpg",
  "jul10.jpg",
];

let times = [
  {
    date: "apr17",
    promo: "Ultimate Fighting Championship",
    time: new Date(2021, 03, 18, 02, 00, 00),
    prelims: new Date(2021, 03, 17, 23, 00, 00),
    videos: ["VFYmEMsqKVQ"],
  },
  {
    date: "apr21",
    promo: "ONE Championship",
    time: new Date(2021, 03, 22, 02, 00, 00),
    prelims: new Date(2021, 03, 22, 02, 0, 00),
    videos: [],
  },
  {
    date: "apr23",
    promo: "Professional Fighters League",
    time: new Date(2021, 03, 24, 01, 00, 00),
    prelims: new Date(2021, 03, 23, 21, 30, 00),
    videos: ["pLus7_iYH2k"],
  },
  {
    date: "apr24",
    promo: "Ultimate Fighting Championship",
    time: new Date(2021, 03, 25, 02, 00, 00),
    prelims: new Date(2021, 03, 24, 22, 00, 00),
    videos: ["LBiQ2X9zS90"],
  },
  {
    date: "may01",
    promo: "Ultimate Fighting Championship",
    time: false,
    prelims: false,
    videos: ["-w_NAOO7jzY"],
  },
  {
    date: "may06",
    promo: "Professional Fighters League",
    time: false,
    prelims: false,
    videos: ["POxIkp6Ly7A"],
  },
  {
    date: "may07",
    promo: "Bellator MMA",
    time: false,
    prelims: false,
    videos: ["Vq3qSM__vec"],
  },
  {
    date: "may08",
    promo: "Ultimate Fighting Championship",
    time: false,
    prelims: false,
    videos: ["0rZe1C96VF0"],
  },
  {
    date: "may15",
    promo: "Ultimate Fighting Championship",
    time: new Date(2021, 04, 16, 02, 00, 00),
    prelims: new Date(2021, 04, 15, 22, 00, 00),
    videos: ["tYalY6IQTHc"],
  },
  {
    date: "may21",
    promo: "Bellator MMA",
    time: false,
    prelims: false,
    videos: ["KvSE9yLdgVo"],
  },
  {
    date: "may22",
    promo: "Ultimate Fighting Championship",
    time: false,
    prelims: false,
    videos: ["OV1t65MC6JA"],
  },
  {
    date: "jun10",
    promo: "Professional Fighters League",
    time: false,
    prelims: false,
    videos: ["FbcGBvKNegk"],
  },
  {
    date: "jul10",
    promo: "Ultimate Fighting Championship",
    time: false,
    prelims: false,
    videos: ["Of1Rp3iPpX0"],
  },
];

let data2 = data.sort((a, b) => {
  return a[1] - b[1];
});

data2.push(data2.shift());

data2.forEach((event) => {
  for (let i = 0; i < event[3].length; i++) {
    event[3][i].rankA = "";
    event[3][i].rankB = "";
  }

  let tempTime =
    new Date(event[1] - 36000000).toString().split(" ")[1] +
    new Date(event[1] - 36000000).toString().split(" ")[2] +
    ".jpg";
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
});

let android = false;
var ua = navigator.userAgent.toLowerCase();
var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
if (isAndroid) {
  android = true;
}
