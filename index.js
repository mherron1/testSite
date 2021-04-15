if (localStorage.getItem("dark-mode") !== null) {
  if (localStorage.getItem("dark-mode") === "y") {
    let darkMode = document.querySelector("#darkInput");
    darkMode.checked = true;
    toggleStyleSheets();
  }
}

let oddsType = "line";

if (localStorage.getItem("oddsType") !== null) {
  if (localStorage.getItem("oddsType") === "decimal") {
    oddsType = "dec";
    let oddsTypeToggle = document.querySelector("#oddsTypeToggle");
    oddsTypeToggle.checked = true;
  }
}

let i = 0;
let events = data2;

if (visualViewport.width > 1000) {
  document.querySelector("#sideNav").classList.add("notransitions");
  document.querySelector("#hamburger-1").style.display = "none";
  generateLinks();
}

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
}

////////////////////////////////  End of card function

function next() {
  i++;
  if (i > events.length - 1) {
    i = 0;
  }
  create();
}
function back() {
  i--;
  if (i < 0) {
    i = events.length - 1;
  }

  create();
}
function toggleD() {
  //navigator.vibrate(40);
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

  ////
  let detailsLeftMinus1 = document.querySelectorAll(`.detailsLeftMinus1`);
  detailsLeftMinus1.forEach((detail) => {
    if (detail.style.display === "flex") {
      detail.style.display = "none";
    } else {
      detail.style.display = "flex";
    }
  });
  let detailsRightMinus1 = document.querySelectorAll(`.detailsRightMinus1`);
  detailsRightMinus1.forEach((detail) => {
    if (detail.style.display === "flex") {
      detail.style.display = "none";
    } else {
      detail.style.display = "flex";
    }
  });
  let detailsMiddleMinus1 = document.querySelectorAll(`.detailsMiddleMinus1`);
  detailsMiddleMinus1.forEach((detail) => {
    if (detail.style.display === "flex") {
      detail.style.display = "none";
    } else {
      detail.style.display = "flex";
    }
  });

  //////
  let detailsLeftPlus1 = document.querySelectorAll(`.detailsLeftPlus1`);
  detailsLeftPlus1.forEach((detail) => {
    if (detail.style.display === "flex") {
      detail.style.display = "none";
    } else {
      detail.style.display = "flex";
    }
  });
  let detailsRightPlus1 = document.querySelectorAll(`.detailsRightPlus1`);
  detailsRightPlus1.forEach((detail) => {
    if (detail.style.display === "flex") {
      detail.style.display = "none";
    } else {
      detail.style.display = "flex";
    }
  });
  let detailsMiddlePlus1 = document.querySelectorAll(`.detailsMiddlePlus1`);
  detailsMiddlePlus1.forEach((detail) => {
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

function toggleSideNav() {
  //navigator.vibrate(40);
  let sideNav = document.querySelector("#sideNav");
  if (sideNav.style.width === "75%") {
    $("#hamburger-1").toggleClass("is-active");
    eventList.innerHTML = ``;
    sideNav.style.width = "0%";
    $("#dim").fadeOut(300);
  } else {
    $("#hamburger-1").toggleClass("is-active");
    sideNav.style.width = "75%";
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

let sideNav = document.querySelector("#sideNav");
sideNav.ontransitionstart = () => {
  $(".eventLinkDate").css("opacity", "1");
  $(".eventLink").css("opacity", "1");
};

function selectCard(index) {
  if (screen.width < 1000) {
    toggleSideNav();
  }

  i = index;
  //navigator.vibrate(40);
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
    changeX -= 50;

    content1.style.left = -changeX + "px";
    contentPlus1.style.display = "block";
    evt.preventDefault();
  } else if (changeX < -50) {
    swiping = true;
    changeX += 50;
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

function setCountdown(i, arg) {
  let mainCountdown = events[i][1];

  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  document.getElementById("days2").innerText = "-";
  document.getElementById("hours2").innerText = "-";
  document.getElementById("minutes2").innerText = "-";

  if (arg === "") {
    x = setInterval(function () {
      let now = new Date().getTime(),
        distance = mainCountdown - now;
      if (distance < 0) {
        distance = 0;
      }
      if (distance > 8.64e9) {
        document.getElementById("days2").style.width = "42px";
      }
      (document.getElementById("days2").innerText = Math.floor(distance / day)),
        (document.getElementById("hours2").innerText = Math.floor(
          (distance % day) / hour
        )),
        (document.getElementById("minutes2").innerText = Math.floor(
          (distance % hour) / minute
        ));
    }, second);
  }

  let prelimCountdown = events[i][1] - 1800000 * events[i][5];

  document.getElementById("days").innerText = "-";
  document.getElementById("hours").innerText = "-";
  document.getElementById("minutes").innerText = "-";

  y = setInterval(function () {
    let now = new Date().getTime(),
      distance2 = prelimCountdown - now;
    if (distance2 < 0) {
      distance2 = 0;
    }
    if (distance2 > 8.64e9) {
      document.getElementById("days").style.width = "42px";
    }
    (document.getElementById("days").innerText = Math.floor(distance2 / day)),
      (document.getElementById("hours").innerText = Math.floor(
        (distance2 % day) / hour
      )),
      (document.getElementById("minutes").innerText = Math.floor(
        (distance2 % hour) / minute
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

function toggleSettings() {
  //window.navigator.vibrate(40);
  $("#hamburger-1").toggle();

  let hamburger = document.querySelector("#hamburger-1");

  let closeSettings = document.querySelector("#closeSettings");

  if (closeSettings.style.opacity === "1") {
    closeSettings.style.opacity = "0";
    closeSettings.style.right = "-58px";
  } else {
    if (screen.width < 750) {
      toggleSideNav();
    }
    closeSettings.style.opacity = "1";
    closeSettings.style.right = "7px";
  }

  let settingsDiv = document.querySelector("#settings");
  if (settingsDiv.style.height === "100%") {
    $("#settings").css("position", "absolute");
    $("#settings").css("height", "0vh");
  } else {
    $("#settings").css("height", "100%");
    $("#settings").css("position", "fixed");
  }
}

function toggleStyleSheets() {
  //navigator.vibrate(40);

  let stylesheet = document.getElementById("pagestyle");
  if (stylesheet.href.toString().includes("style")) {
    document.getElementById("pagestyle").setAttribute("href", "dark.css");
  } else {
    document.getElementById("pagestyle").setAttribute("href", "style.css");
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
<img id="eventPoster${arg}" src=${events[i][2]}>
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
    prelimsTime.style.visibility = "visible";
    prelimsTime.textContent = `Prelims: ${prelimsCardTime}`;
  } else {
    prelimsTime.style.visibility = "hidden";
  }

  ///////////////////////////////countdown

  let imageDiv = document.querySelector(`#imageContainer${arg}`);

  if (localStorage.getItem("countdown") != "n") {
    document.querySelector("#showHideCountdown").checked = true;

    imageDiv.innerHTML += `

        <div id="testDiv${arg}" onclick="countdownToggle()">
  
          <div id="toggleContainer${arg}">
  
            <div id="countTogglePrelims${arg}">
            <i class="fa fa-exchange" id="toggleIcon2${arg}"></i>
              <p class="y"> Prelims </p>
            </div>
  
          <div id="countToggleMain${arg}">
          <i class="fa fa-exchange" id="toggleIcon1${arg}"></i>
            <p class="y"> Main </p>
          </div>
            
        </div>
  
        <div id="countdownPrelims${arg}">
          <ul>
            <li><span id="days${arg}"></span>days</li>
            <li><span id="hours${arg}"></span>Hours</li>
            <li><span id="minutes${arg}"></span>Minutes</li>
          </ul>
        </div>
        
        <div id="countdownMain${arg}">
          <ul>
            <li><span id="days2${arg}"></span>days</li>
            <li><span id="hours2${arg}"></span>Hours</li>
            <li><span id="minutes2${arg}"></span>Minutes</li>
          </ul>
        </div>
        <div id="leftCurve${arg}"></div>
        <div id="rightCurve${arg}"></div>
        `;

    if (arg === "") {
      setCountdown(i, arg);
    }
  }

  //////////////////////////////

  let mainCardSize = events[i][3].length - events[i][5];

  let mainCard = document.querySelector(`#mainCard${arg}`);

  for (let j = 0; j < mainCardSize; j++) {
    let leftOdds = "";
    let rightOdds = "";
    let colorA = "green";
    let colorB = "green";

    let showOdds = true;

    if (true) {
      odds.forEach((item) => {
        let name1 = item.name.replace(/'/g, "").toLowerCase();
        let fighterA = events[i][3][j]["fighterA"]
          .replace(/'/g, "")
          .toLowerCase();
        let fighterB = events[i][3][j]["fighterB"]
          .replace(/'/g, "")
          .toLowerCase();

        if (
          name1.length === fighterA.length &&
          name1[0] === fighterA[0] &&
          name1[name1.length - 1] === fighterA[fighterA.length - 1]
        ) {
          leftOdds = item.odds;
        }
        if (
          name1.length === fighterB.length &&
          name1[0] === fighterB[0] &&
          name1[name1.length - 1] === fighterB[fighterB.length - 1]
        ) {
          rightOdds = item.odds;
        }
      });
      if (leftOdds.toString() === "" || rightOdds.toString() === "") {
        leftOdds = "";
        rightOdds = "";
      } else {
        converter();

        function converter() {
          if (oddsType === "line") {
            if (leftOdds < rightOdds && rightOdds >= 2) {
              colorB = "#CD5C5C";
              rightOdds = "+" + parseInt((rightOdds - 1) * 100);
              leftOdds = parseInt(-100 / (leftOdds - 1));
            } else if (leftOdds > rightOdds && leftOdds >= 2) {
              colorA = "#CD5C5C";
              leftOdds = "+" + parseInt((leftOdds - 1) * 100);
              rightOdds = parseInt(-100 / (rightOdds - 1));
            } else {
              colorA = "skyblue";
              colorB = "skyblue";
              rightOdds = "EVS";
              leftOdds = "EVS";
            }
            if (leftOdds === 100 || leftOdds === "100") {
              leftOdds = "";
            }
            if (rightOdds === 100 || leftOdds === "100") {
              rightOdds = "";
            }
          } else if (oddsType === "dec") {
            if (leftOdds < rightOdds && rightOdds >= 2) {
              colorB = "#CD5C5C";
            } else if (leftOdds > rightOdds && leftOdds >= 2) {
              colorA = "#CD5C5C";
            } else {
              colorA = "#6082B6";
              colorB = "#6082B6";
              rightOdds = "EVS";
              leftOdds = "EVS";
            }
          }
        }
      }
    }

    mainCard.innerHTML += `
  <div class="left">
    <div>
      <a href="${events[i][3][j].fighterALink}">${events[i][3][j].fighterA}</a>
    </div>
    <div class="detailsLeft${arg}">
    <div style="color: ${colorA}; font-size:0.9rem; font-weight:bold;">${leftOdds}</div>        
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
      <div style="color: ${colorB}; font-size:0.9rem; font-weight:bold;">${rightOdds}</div>        
      </div>
  </div>
  `;
  }

  ////////////////////////////Prelims

  let numPrelims = events[0][5];

  let prelimsCard = document.querySelector(`#prelimsCard${arg}`);

  for (let j = mainCardSize; j < events[i][3].length; j++) {
    let leftOdds = "";
    let rightOdds = "";
    let colorA = "green";
    let colorB = "green";

    let showOdds = true;

    if (true) {
      odds.forEach((item) => {
        let name1 = item.name.replace(/'/g, "").toLowerCase();
        let fighterA = events[i][3][j]["fighterA"]
          .replace(/'/g, "")
          .toLowerCase();
        let fighterB = events[i][3][j]["fighterB"]
          .replace(/'/g, "")
          .toLowerCase();

        if (
          name1.length === fighterA.length &&
          name1[0] === fighterA[0] &&
          name1[name1.length - 1] === fighterA[fighterA.length - 1]
        ) {
          leftOdds = item.odds;
        }
        if (
          name1.length === fighterB.length &&
          name1[0] === fighterB[0] &&
          name1[name1.length - 1] === fighterB[fighterB.length - 1]
        ) {
          rightOdds = item.odds;
        }
      });
      if (leftOdds.toString() === "" || rightOdds.toString() === "") {
        leftOdds = "";
        rightOdds = "";
      } else {
        converter();

        function converter() {
          if (oddsType === "line") {
            if (leftOdds < rightOdds && rightOdds >= 2) {
              colorB = "#CD5C5C";
              rightOdds = "+" + parseInt((rightOdds - 1) * 100);
              leftOdds = parseInt(-100 / (leftOdds - 1));
            } else if (leftOdds > rightOdds && leftOdds >= 2) {
              colorA = "#CD5C5C";
              leftOdds = "+" + parseInt((leftOdds - 1) * 100);
              rightOdds = parseInt(-100 / (rightOdds - 1));
            } else {
              colorA = "skyblue";
              colorB = "skyblue";
              rightOdds = "EVS";
              leftOdds = "EVS";
            }
            if (leftOdds === 100 || leftOdds === "100") {
              leftOdds = "";
            }
            if (rightOdds === 100 || leftOdds === "100") {
              rightOdds = "";
            }
          } else if (oddsType === "dec") {
            if (leftOdds < rightOdds && rightOdds >= 2) {
              colorB = "#CD5C5C";
            } else if (leftOdds > rightOdds && leftOdds >= 2) {
              colorA = "#CD5C5C";
            } else {
              colorA = "skyblue";
              colorB = "skyblue";
              rightOdds = "evs";
              leftOdds = "evs";
            }
          }
        }
      }
    }

    prelimsCard.innerHTML += `
    <div class="left">
      <div>
        <a href="${events[i][3][j].fighterALink}">${events[i][3][j].fighterA}</a>
      </div>
      <div class="detailsLeft${arg}">
      <div style="color: ${colorA}; font-size:0.9rem; font-weight:bold;">${leftOdds}</div>        
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
        <div style="color: ${colorB}; font-size:0.9rem; font-weight:bold;">${rightOdds}</div>        
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
      $(".detailsLeftMinus1").css("display", "flex");
      $(".detailsRightMinus1").css("display", "flex");
      $(".detailsMiddleMinus1").css("display", "flex");
      $(".detailsLeftPlus1").css("display", "flex");
      $(".detailsRightPlus1").css("display", "flex");
      $(".detailsMiddlePlus1").css("display", "flex");
    } else if (localStorage.getItem("details") === "n") {
      let details = document.querySelector("#details");
      details.checked = false;
      $(".detailsLeft").css("display", "none");
      $(".detailsRight").css("display", "none");
      $(".detailsMiddle").css("display", "none");
      $(".detailsLeftMinus1").css("display", "none");
      $(".detailsRightMinus1").css("display", "none");
      $(".detailsMiddleMinus1").css("display", "none");
      $(".detailsLeftPlus1").css("display", "none");
      $(".detailsRightPlus1").css("display", "none");
      $(".detailsMiddlePlus1").css("display", "none");
    }
  }
}

function changeSettings() {
  //navigator.vibrate(40);
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
  //navigator.vibrate(40);
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
  //navigator.vibrate(40);

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
  //navigator.vibrate(40);
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

function toggelOddsType() {
  if (localStorage.getItem("oddsType") === "line") {
    localStorage.setItem("oddsType", "decimal");
  } else {
    localStorage.setItem("oddsType", "line");
  }

  if (oddsType === "dec") {
    oddsType = "line";
  } else {
    oddsType = "dec";
  }
}

function toggleCountDown() {
  if (document.querySelector("#showHideCountdown").checked === true) {
    localStorage.setItem("countdown", "y");
  } else {
    localStorage.setItem("countdown", "n");
  }
}

const countdownToggle = function () {
  console.log("fired");
  var x = document.getElementById("countdownPrelims");
  var y = document.getElementById("countdownMain");
  var z = document.getElementById("countToggleMain");
  var w = document.getElementById("countTogglePrelims");
  if (y.style.display === "none") {
    y.style.display = "block";
    x.style.display = "none";
    z.style.display = "block";
    w.style.display = "none";
  } else {
    y.style.display = "none";
    x.style.display = "block";
    w.style.display = "block";
    z.style.display = "none";
  }
};
