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
    date: "apr16",
    promo: "Bellator MMA",
    time: new Date(2021, 03, 17, 02, 00, 00),
    prelims: new Date(2021, 03, 16, 22, 30, 00),
  },
  {
    date: "apr17",
    promo: "Ultimate Fighting Championship",
    time: new Date(2021, 03, 18, 03, 00, 00),
    prelims: new Date(2021, 03, 18, 00, 00, 00),
  },
  {
    date: "apr23",
    promo: "Professional Fighters League",
    time: new Date(2021, 03, 24, 02, 00, 00),
    prelims: new Date(2021, 03, 23, 22, 30, 00),
  },
  {
    date: "apr21",
    promo: "ONE Championship",
    time: new Date(2021, 03, 22, 03, 00, 00),
    prelims: new Date(2021, 03, 22, 03, 0, 00),
  },
];

let data2 = data.sort((a, b) => {
  return a[1] - b[1];
});

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
