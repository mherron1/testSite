let i = 0;

let events = data2;
let rowColor = "#f8f8f8";

let z = window.location.search.slice(1);

if (z === "?") {
  z = "all";
}

filterEvents(z);

generateCardSet(i);

function generateCardSet(i) {
  var highestTimeoutId = setTimeout(";");
  for (var k = 0; k < highestTimeoutId; k++) {
    clearTimeout(k);
  }
  resetDivCSS();
  generateCard(i, "");
  generateCard(i - 1, "Minus1");
  generateCard(i + 1, "Plus1");

  function generateCard(i, arg) {
    if (i < 0) {
      i = events.length - 1;
    } else if (i > events.length - 1) {
      i = 0;
    }
    let content = document.querySelector(`#content${arg}`);
    content.innerHTML = `
  <h2 style="background-color:${rowColor};" id="mainHeader${arg}"></h2>
  <div id="imageContainer${arg}"></div>
  <div id="mainTime${arg}"></div>
  <div id="mainCard${arg}"></div> 
  <div id="prelimsTime${arg}"></div>
  <div id="prelimsCard${arg}"></div> 
  `;

    let mainHeader = document.querySelector(`#mainHeader${arg}`);
    mainHeader.textContent = `${events[i][4]}`;

    let imageContainer = document.querySelector(`#imageContainer${arg}`);
    imageContainer.innerHTML = `
  <img id="eventPoster${arg}" onclick="showPoster()" src=${events[i][2]}>`;

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
      if (j % 2 === 0) {
        rowColor = "#f8f8f8";
      } else {
        rowColor = "white";
      }
      mainCard.innerHTML += `
      <i class="material-icons noSelect" id="expand" onclick="toggleD()">expand_more</i>
    <div style="background-color:${rowColor};" id="left">
    <a href="${events[i][3][j].fighterALink}">${events[i][3][j].fighterA}</a>
        <div class="detailsLeft${arg}">
        <div style="color:red;font-size: 0.9rem;">+125</div>
          <div>${events[i][3][j].rankA}</div>
          <div>${events[i][3][j].recordA}</div>
        </div>
    </div>
    <div style="background-color:${rowColor};" id="middle">vs
       <div class="detailsVS${arg}">${events[i][3][j].weight}</div>
    </div>
        
    <div style="background-color:${rowColor};" id="right">
    <a href="${events[i][3][j].fighterBLink}">${events[i][3][j].fighterB}</a>
        <div class="detailsRight${arg}">
          <div>${events[i][3][j].recordB}</div>
          <div>${events[i][3][j].rankB}</div>
          <div style="color:green; font-size: 0.9rem;">+125</div>
        </div>
    </div>
    `;
    }

    ////////////////////////////Prelims

    let numPrelims = events[0][5];

    let prelimsCard = document.querySelector(`#prelimsCard${arg}`);

    for (let j = mainCardSize; j < events[i][3].length; j++) {
      if ((j - 1) % 2 === 0) {
        rowColor = "#f8f8f8";
      } else {
        rowColor = "white";
      }
      prelimsCard.innerHTML += `
  <div style="background-color:${rowColor};" id="left">
  <a href="${events[i][3][j].fighterALink}">${events[i][3][j].fighterA}</a>
      <div class="detailsLeft${arg}">
      <div style="color:red;font-size: 0.9rem;">-125</div>
        <div>${events[i][3][j].rankA}</div>
        <div>${events[i][3][j].recordA}</div>
      </div>
  </div>
  <div style="background-color:${rowColor};" id="middle">vs
     <div class="detailsVS${arg}">${events[i][3][j].weight}</div>
  </div>
      
  <div style="background-color:${rowColor};" id="right">
  <a href="${events[i][3][j].fighterBLink}">${events[i][3][j].fighterB}</a>
      <div class="detailsRight${arg}">
        <div>${events[i][3][j].recordB}</div>
        <div>${events[i][3][j].rankB}</div>
        <div style="color:green;font-size: 0.9rem;">+125</div>
        <div></div>
      </div>
  </div>
  `;
    }
  }
}

////////////////////////////////  End of card function

function next() {
  i++;
  if (i > events.length - 1) {
    i = 0;
  }
  generateCardSet(i);
}
function back() {
  i--;
  if (i < 0) {
    i = events.length - 1;
  }

  generateCardSet(i);
}
function toggleD() {
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
  let detailsVS = document.querySelectorAll(`.detailsVS`);
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
    if (sideNav.style.width === "70%") {
      $("#dim").fadeOut(300);
    }
    sideNav.style.width = "0%";
    eventList.innerHTML = ``;
  }
}

$(document).ready(function () {
  $(".hamburger").click(function () {
    $(this).toggleClass("is-active");
  });
});

function toggleSideNav() {
  let sideNav = document.querySelector("#sideNav");
  if (sideNav.style.width === "70%") {
    eventList.innerHTML = ``;
    sideNav.style.width = "0%";
    $("#dim").fadeOut(300);
  } else {
    sideNav.style.width = "70%";
    $("#dim").fadeIn(300);
    generateLinks();
  }
}

//////////////////////////// Navigation Links

if (screen.width > 1000) {
  generateLinks();
}

function generateLinks() {
  let eventList = document.querySelector("#eventList");
  eventList.innerHTML = `<i class="material-icons" id ="settingsIcon" onclick="toggleSettings()">tune</i>`;

  for (let i = 0; i < events.length; i++) {
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
  $(".eventLinkDate").fadeIn(400);
};

function selectCard(index) {
  if (screen.width < 1000) {
    toggleSideNav();
  }
  i = index;
  generateCardSet(i);

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
    navigator.vibrate(1000);
    generateCardSet(i);
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
    navigator.vibrate(1000);
    generateCardSet(i);
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

function filterEvents(arg) {
  i = 0;
  events = events.filter((event) => {
    if (arg === "all") {
      return true;
    } else if (event[0].includes(arg)) {
      return true;
    }
  });
  generateCardSet(i);
}

function setQuery(arg) {
  location.href = `?${arg}`;
}

function toggleSettings() {
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
  if (sideNav.style.width === "70%") {
    eventList.innerHTML = ``;
    sideNav.style.width = "0%";
    $("#dim").fadeOut(300);

    hamburger.classList.remove("is-active");
  }
}
