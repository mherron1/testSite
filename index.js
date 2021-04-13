if (localStorage.getItem("dark-mode") !== null) {
  if (localStorage.getItem("dark-mode") === "y") {
    let darkMode = document.querySelector("#darkInput");
    darkMode.checked = true;
    toggleStyleSheets();
  }
}

let i = 0;
let events = data2;
create();

function create() {
  events = data2;
  let filterArr = [];
  if (localStorage.getItem("ufc") !== null) {
    if (localStorage.getItem("ufc") === "y") {
      filterArr.push("Ultimate");
      document.querySelector("#ufcInput").checked = true;
    }
    if (localStorage.getItem("bellator") === "y") {
      filterArr.push("Bellator");
      document.querySelector("#bellatorInput").checked = true;
    }
    if (localStorage.getItem("one") === "y") {
      filterArr.push("ONE");
      document.querySelector("#oneInput").checked = true;
    }
    if (localStorage.getItem("pfl") === "y") {
      filterArr.push("Professional");
      document.querySelector("#pflInput").checked = true;
    }
    if (
      localStorage.getItem("pfl") === "y" &&
      localStorage.getItem("bellator") === "y" &&
      localStorage.getItem("one") === "y" &&
      localStorage.getItem("ufc") === "y"
    ) {
      document.querySelector("#allInput").checked = true;
    }
    events = events.filter((event) => {
      for (p = 0; p < filterArr.length; p++) {
        if (event[0].includes(filterArr[p])) {
          return true;
        }
      }
    });
  } else {
    forceToggleAll();
  }

  var highestTimeoutId = setTimeout(";");
  for (var k = 0; k < highestTimeoutId; k++) {
    clearTimeout(k);
  }

  resetDivCSS();
  generateCard(i, "");
  generateCard(i - 1, "Minus1");
  generateCard(i + 1, "Plus1");

  if (screen.width > 1000) {
    generateLinks(i);
  }
}

////////////////////////////////  End of card function

function next() {
  i++;
  if (i > events.length - 1) {
    i = 0;
  }
  create();
  console.log(i);
}
function back() {
  i--;
  if (i < 0) {
    i = events.length - 1;
  }
  console.log(i);
  create();
}
function toggleD() {
  navigator.vibrate(40);
  let detailsLeft = document.querySelectorAll(`.detailsLeft`);
  detailsLeft.forEach((detail) => {
    if (detail.style.display === "flex") {
      detail.style.display = "none";
    } else {
      detail.style.display = "flex";
    }
  });
  let detailsRight = document.querySelectorAll(`.detailsRight`);
  detailsRight.forEach((detail) => {
    if (detail.style.display === "flex") {
      detail.style.display = "none";
    } else {
      detail.style.display = "flex";
    }
  });
  let detailsVS = document.querySelectorAll(`.detailsMiddle`);
  detailsVS.forEach((detail) => {
    if (detail.style.display === "flex") {
      detail.style.display = "none";
    } else {
      detail.style.display = "flex";
    }
  });
}

function showPoster() {
  let imageContainer = document.querySelector(`#imageContainer`);
  if (screen.width < 1000) {
    $("#testDiv").toggle();
    if (imageContainer.style.overflow === "visible") {
      imageContainer.style.overflow = "hidden";
    } else {
      imageContainer.style.overflow = "visible";
    }
  }
}

function switchIcon() {
  if (screen.width < 1000) {
    let sideNav = document.querySelector("#sideNav");
    $("#hamburger-1").toggleClass("is-active");
    if (sideNav.style.right === "0px") {
      $("#dim").fadeOut(300);
    }
    sideNav.style.right = "-350px";
    eventList.innerHTML = ``;
  }
}

$(document).ready(function () {
  $(".hamburger").click(function () {
    $(this).toggleClass("is-active");
  });
});

if (screen.width > 500) {
  eventList.innerHTML = ``;
}

function toggleSideNav() {
  console.log("toggle");
  navigator.vibrate(40);
  let sideNav = document.querySelector("#sideNav");
  if (sideNav.style.right === "0px") {
    sideNav.style.right = "-350px";
    $("#dim").fadeOut(300);
  } else {
    sideNav.style.right = "0px";
    $("#dim").fadeIn(300);
    generateLinks();
  }
}

//////////////////////////// Navigation Links

function generateLinks() {
  let eventList = document.querySelector("#eventList");
  eventList.innerHTML = `
  <i class="material-icons" id ="settingsIcon" onclick="toggleSettings()">tune</i>
  `;

  let eventLimit = events.length;
  if (events.length > 15) {
    eventLimit = 15;
  }

  for (let i = 0; i < eventLimit; i++) {
    let dateString = new Date(events[i][1] - 18000000).toString();

    let date = `${dateString.split(" ")[1]} ${dateString.split(" ")[2]}`;
    eventList.innerHTML += `  
      <div class="eventLink" onclick="selectCard(${i})">
         <div class="eventLinkDate">${date}</div>
         <div class="eventLinkText">${events[i][4]}</div>
      </div>
  `;
  }
}

function selectCard(index) {
  if (screen.width < 1000) {
    toggleSideNav();
  }
  i = index;
  navigator.vibrate(40);
  pausecomp(50);

  create();

  document.querySelector("#hamburger-1").classList = "hamburger";
}

////////////////////////////swiping

let content1 = document.querySelector("#content");
let contentPlus1 = document.querySelector("#contentPlus1");
let contentMinus1 = document.querySelector("#contentMinus1");

function touchStart(evt) {
  startingX = evt.touches[0].clientX;
  startingY = evt.touches[0].clientY;
}
var touch;
let swiping = false;

function touchMove(evt) {
  touch = evt.touches[0];
  var changeX = startingX - touch.clientX;

  if (changeX > 50) {
    swiping = true;
    changeX += 50;

    content1.style.left = -changeX + "px";
    contentPlus1.style.display = "block";
    evt.preventDefault();
  } else if (changeX < -50) {
    swiping = true;
    changeX -= 50;
    content1.style.left = -changeX + "px";
    contentMinus1.style.display = "block";
    evt.preventDefault();
  }
}

function touchEnd(evt) {
  var changeX = startingX - evt.changedTouches[0].clientX;
  var third = screen.width / 3;
  if (changeX < third && changeX > -third) {
    content1.style.left = -changeX + "px";
    content1.style.left = 0;
    content1.classList.add("notransition");
    contentPlus1.style.display = "none";
  } else if (changeX > 0) {
    content1.style.transition = "all .2s";
    content1.style.left = "-102%";
    content1.classList.add("notransition");
    contentPlus1.style.left = "0";
    i++;
    if (i > events.length - 1) {
      i = 0;
    }

    create();
    // location.href = `./?${newPage}`;
  } else if (changeX < 0) {
    content1.style.transition = "all .2s";
    content1.style.left = "+102%";
    content1.classList.add("notransition");
    contentMinus1.style.left = "0";
    i--;
    if (i < 0) {
      i = events.length - 1;
    }
    swiping = false;

    create();
    //location.href = `./?${newPage1}`;
  }
}

//////////////////////// Key Mapping

document.addEventListener("keydown", function (e) {
  switch (e.keyCode) {
    case 37:
      back();
      break;
    case 39:
      next();
      break;
    case 13:
      toggleD();
      break;
  }
});

/////////////////////////////////// countdowns

function setCountdown() {
  let mainCountdown = events[i][1];

  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  document.getElementById("days").innerText = "-";
  document.getElementById("hours").innerText = "-";
  document.getElementById("minutes").innerText = "-";

  x = setInterval(function () {
    let now = new Date().getTime(),
      distance = mainCountdown - now;
    if (distance < 0) {
      distance = 0;
    }
    if (distance > 8.64e9) {
      document.getElementById("days").style.width = "42px";
    }
    (document.getElementById("days").innerText = Math.floor(distance / day)),
      (document.getElementById("hours").innerText = Math.floor(
        (distance % day) / hour
      )),
      (document.getElementById("minutes").innerText = Math.floor(
        (distance % hour) / minute
      ));
  }, second);
}

//////////////////////////////////////////////////////////

function resetDivCSS() {
  startingX = 0;
  startingY = 0;
  let content1 = document.querySelector("#content");
  let contentPlus1 = document.querySelector("#contentPlus1");
  let contentMinus1 = document.querySelector("#contentMinus1");
  content1.style.left = "0";
  contentMinus1.style.display = "none";
  contentPlus1.style.display = "none";
}

function filterEvents(arg) {}

function setQuery(arg) {
  location.href = `?${arg}`;
}

function toggleSettings() {
  navigator.vibrate(40);
  $("#hamburger-1").toggle();

  let hamburger = document.querySelector("#hamburger-1");

  let closeSettings = document.querySelector("#closeSettings");
  if (closeSettings.style.opacity === "1") {
    closeSettings.style.opacity = "0";
    closeSettings.style.right = "-58px";
  } else {
    closeSettings.style.opacity = "1";
    closeSettings.style.right = "7px";
  }

  let settingsDiv = document.querySelector("#settings");
  if (settingsDiv.style.height === "100vh") {
    $("#settings").css("height", "0vh");
  } else {
    $("#settings").css("height", "100vh");
  }

  let sideNav = document.querySelector("#sideNav");
  if (sideNav.style.right === "0px") {
    eventList.innerHTML = ``;
    sideNav.style.right = "-350px";
    $("#dim").fadeOut(300);

    hamburger.classList.remove("is-active");
  }
}

function toggleStyleSheets() {
  navigator.vibrate(40);

  let stylesheet = document.getElementById("pagestyle");
  if (stylesheet.href.toString().includes("style")) {
    document.getElementById("pagestyle").setAttribute("href", "dark.css");
    localStorage.setItem("dark-mode", "y");
  } else {
    document.getElementById("pagestyle").setAttribute("href", "style.css");
    localStorage.setItem("dark-mode", "n");
  }
}

function generateCard(i, arg) {
  if (i < 0) {
    i = events.length - 1;
  } else if (i > events.length - 1) {
    i = 0;
  }
  let content = document.querySelector(`#content${arg}`);
  content.innerHTML = `
<h2 style="background-color:none" id="mainHeader${arg}"></h2>
<div id="imageContainer${arg}"></div>
<div id="mainTime${arg}"></div>
<div id="mainCard${arg}"></div> 
<div id="prelimsTime${arg}"></div>
<div id="prelimsCard${arg}"></div> 
`;

  let mainHeader = document.querySelector(`#mainHeader${arg}`);
  mainHeader.textContent += `${events[i][4]}`;

  let imageContainer = document.querySelector(`#imageContainer${arg}`);
  imageContainer.innerHTML = `
<img id="eventPoster${arg}" onclick="showPoster()" src=${events[i][2]}>
`;

  ////////////event date

  let eventTimeLocal = new Date(events[i][1]);
  let mainTime = document.querySelector(`#mainTime${arg}`);
  let prelimsTime = document.querySelector(`#prelimsTime${arg}`);

  mainCardTime = eventTimeLocal.toLocaleString([], {
    month: "short",
    day: "numeric",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short",
  });

  mainTime.textContent = `Main: ${mainCardTime}`;
  mainTime.innerHTML += `
 <i class="material-icons noSelect" id="expandLess" onclick="toggleD()">expand_less</i>
  <i class="material-icons noSelect" id="expandMore" onclick="toggleD()">expand_more</i>
   `;
  let mSecsPrelims = 1800000 * events[i][5];
  let prelimCardTime = new Date(events[i][1] - mSecsPrelims);
  prelimsCardTime = prelimCardTime.toLocaleString([], {
    month: "short",
    day: "numeric",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short",
  });

  if (parseInt(events[i][5]) > 0) {
    prelimsTime.textContent = `Prelims: ${prelimsCardTime}`;
  }

  ///////////////////////////////countdown

  if (arg === "") {
    let centerImageDiv = document.querySelector("#imageContainer");
    centerImageDiv.innerHTML += `
    <div id="testDiv">
    <div id="countdown">
          <ul>
            <li><span id="days"></span>days</li>
            <li><span id="hours"></span>Hours</li>
            <li><span id="minutes"></span>Minutes</li>
          </ul>
        </div>
    </div>
    `;
    setCountdown();
    if (screen.width < 1000) {
      setTimeout(() => {
        $("#testDiv").fadeIn(200);
      }, 200);
    }
  }

  //////////////////////////////

  let mainCardSize = events[i][3].length - events[i][5];

  let mainCard = document.querySelector(`#mainCard${arg}`);

  for (let j = 0; j < mainCardSize; j++) {
    mainCard.innerHTML += `


  <div class="left">
    <div>
      <a href="${events[i][3][j].fighterALink}">${events[i][3][j].fighterA}</a>
    </div>
    <div class="detailsLeft${arg}">
      <div style="color:rgb(214, 76, 76);font-size: 0.9rem;">-125</div>
      <div>${events[i][3][j].rankA}</div>
      <div>${events[i][3][j].recordA}</div>
    </div>
  </div>
  <div  class="middle">vs
   <div class="detailsMiddle${arg}">${events[i][3][j].weight}</div>
  </div>
   
  <div  class="right">
    <div>
      <a href="${events[i][3][j].fighterBLink}">${events[i][3][j].fighterB}</a>
      
    <div class="detailsRight${arg}">
      <div>${events[i][3][j].recordB}</div>
      <div>${events[i][3][j].rankB}</div>
      <div style="color:green;font-size: 0.9rem;">+125</div>        
    </div>
  </div>
  `;
  }

  ////////////////////////////Prelims

  let numPrelims = events[0][5];

  let prelimsCard = document.querySelector(`#prelimsCard${arg}`);

  for (let j = mainCardSize; j < events[i][3].length; j++) {
    prelimsCard.innerHTML += `

  <div class="left">
    <a href="${events[i][3][j].fighterALink}">${events[i][3][j].fighterA}</a>
    <div class="detailsLeft${arg}">
      <div style="color:rgb(214, 76, 76);font-size: 0.9rem;">-125</div>
      <div>${events[i][3][j].rankA}</div>
      <div>${events[i][3][j].recordA}</div>
    </div>
  </div>
  <div class="middle">vs
   <div class="detailsMiddle${arg}">${events[i][3][j].weight}</div>
  </div>
   
  <div  class="right">
    <a href="${events[i][3][j].fighterBLink}">${events[i][3][j].fighterB}</a>
    <div class="detailsRight${arg}">
      <div>${events[i][3][j].recordB}</div>
      <div>${events[i][3][j].rankB}</div>
      <div style="color:green;font-size: 0.9rem;">+125</div>        
    </div>
  </div>

`;
  }

  if (localStorage.getItem("details") !== null) {
    if (localStorage.getItem("details") === "y") {
      let details = document.querySelector("#details");
      details.checked = true;
      $(".detailsLeft").css("display", "flex");
      $(".detailsRight").css("display", "flex");
      $(".detailsMiddle").css("display", "flex");
    } else if (localStorage.getItem("details") === "n") {
      let details = document.querySelector("#details");
      details.checked = false;
      $(".detailsLeft").css("display", "none");
      $(".detailsRight").css("display", "none");
      $(".details").css("display", "none");
    }
  }
}

function changeSettings() {
  navigator.vibrate(40);
  let all = document.querySelector("#allInput");
  let ufc = document.querySelector("#ufcInput");
  let bellator = document.querySelector("#bellatorInput");
  let one = document.querySelector("#oneInput");
  let pfl = document.querySelector("#pflInput");
  let darkMode = document.querySelector("#darkInput");

  if (
    ufc.checked === false &&
    bellator.checked === false &&
    one.checked === false &&
    pfl.checked === false
  ) {
    all.checked = true;
    forceToggleAll();
  }

  toggleSettings();

  if (ufc.checked === true) {
    localStorage.setItem("ufc", "y");
  } else {
    localStorage.setItem("ufc", "n");
  }

  if (bellator.checked === true) {
    localStorage.setItem("bellator", "y");
  } else {
    localStorage.setItem("bellator", "n");
  }

  if (one.checked === true) {
    localStorage.setItem("one", "y");
  } else {
    localStorage.setItem("one", "n");
  }

  if (pfl.checked === true) {
    localStorage.setItem("pfl", "y");
  } else {
    localStorage.setItem("pfl", "n");
  }

  if (all.checked === true) {
    localStorage.setItem("bellator", "y");
    localStorage.setItem("one", "y");
    localStorage.setItem("ufc", "y");
    localStorage.setItem("pfl", "y");
  }

  if (darkMode.checked === true) {
    localStorage.setItem("dark-mode", "y");
  } else {
    localStorage.setItem("dark-mode", "n");
  }

  i = 0;
  create();
}

function forceToggleAll() {
  navigator.vibrate(40);
  let all = document.querySelector("#allInput");
  let ufc = document.querySelector("#ufcInput");
  let bellator = document.querySelector("#bellatorInput");
  let one = document.querySelector("#oneInput");
  let pfl = document.querySelector("#pflInput");

  if (all.checked === true) {
    ufc.checked = true;
    bellator.checked = true;
    one.checked = true;
    pfl.checked = true;
    all.checked === true;
  }
  if (all.checked === false) {
    ufc.checked = false;
    bellator.checked = false;
    one.checked = false;
    pfl.checked = false;
    all.checked === false;
  }
}

function forceToggle() {
  navigator.vibrate(40);
  console.log("test");
  let all = document.querySelector("#allInput");
  let ufc = document.querySelector("#ufcInput");
  let bellator = document.querySelector("#bellatorInput");
  let one = document.querySelector("#oneInput");
  let pfl = document.querySelector("#pflInput");

  if (
    ufc.checked === false ||
    bellator.checked === false ||
    one.checked === false ||
    pfl.checked === false
  ) {
    all.checked = false;
  }
}

function showDetailsSettings() {
  navigator.vibrate(40);
  if (localStorage.getItem("details") === "y") {
    localStorage.setItem("details", "n");
  } else {
    localStorage.setItem("details", "y");
  }
  toggleD();
}

function pausecomp(millis) {
  var date = new Date();
  var curDate = null;
  do {
    curDate = new Date();
  } while (curDate - date < millis);
}
