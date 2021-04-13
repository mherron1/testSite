let data2 = data.sort((a, b) => {
  return a[1] - b[1];
});

let assets = ["jun26.jpg", "may08.jpg"];

data2.forEach((event) => {
  let tempTime =
    new Date(event[1]).toString().split(" ")[1] +
    new Date(event[1]).toString().split(" ")[2] +
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
