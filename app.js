let assets = [
  "may01.jpg",
  "may06.jpg",
  "may07.jpg",
  "may15.jpg",
  "may21.jpg",
  "may22.jpg",
  "may28.jpg",
  "jun05.jpg",
  "jun10.jpg",
  "jun11.jpg",
  "jun12.jpg",
  "jun19.jpg",
  "jun26.jpg",
  "jul10.jpg",
  "jul17.jpg",
];

let times = [
  {
    date: "may01",
    promo: "Ultimate Fighting Championship",
    time: new Date(2021, 04, 02, 02, 00, 00),
    prelims: new Date(2021, 04, 01, 23, 00, 00),
    videos: ["j6RqdippPjQ"],
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
    time: new Date(2021, 04, 09, 00, 00, 00),
    prelims: new Date(2021, 04, 08, 21, 00, 00),
    videos: [],
  },
  {
    date: "may15",
    promo: "ONE Championship",
    time: new Date(2021, 04, 15, 14, 00, 00),
    prelims: new Date(2021, 04, 15, 14, 00, 00),
    videos: [],
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
  {
    date: "jul17",
    promo: "Ultimate Fighting Championship",
    time: false,
    prelims: false,
    videos: ["b7CotB8o_tg"],
  },
];

let data2 = data.sort((a, b) => {
  return a[1] - b[1];
});

//data2.push(data2.shift());

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
});

let android = false;
var ua = navigator.userAgent.toLowerCase();
var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
if (isAndroid) {
  android = true;
}
