let i = 0;

if (window.location.search === "") {
  i = 0;
} else {
  i = parseInt(window.location.search.slice(1));
}

console.log(i);

let events = data;

let rowColor = "#f8f8f8";

generateCardSet(i);

function generateCardSet(i) {
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

    prelimsTime.textContent = `Prelims: ${prelimsCardTime}`;

    ///////////////////////////////

    let mainCardSize = events[i][3].length - events[i][5];

    let mainCard = document.querySelector(`#mainCard${arg}`);

    for (let j = 0; j < mainCardSize; j++) {
      if (j % 2 === 0) {
        rowColor = "#f8f8f8";
      } else {
        rowColor = "white";
      }
      mainCard.innerHTML += `
    <i class="material-icons" id="expand${arg}" onclick="toggleD()">expand_more</i>
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

function showPoster(arg) {
  let imageContainer = document.querySelector(`#imageContainer${arg}`);
  if (imageContainer.style.overflow === "visible") {
    imageContainer.style.overflow = "hidden";
  } else {
    imageContainer.style.overflow = "visible";
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
  } else {
    sideNav.style.width = "70%";
    setTimeout(() => {
      generateLinks();
    }, 0);
  }
}

//////////////////////////// Navigation Links

function generateLinks() {
  let eventList = document.querySelector("#eventList");
  for (i = 0; i < events.length; i++) {
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
  toggleSideNav();
  i = index;
  generateCardSet(i);
  document.querySelector("#hamburger-1").classList = "hamburger";
}

////////////////////////////swiping

let content1 = document.querySelector("#content");
let contentPlus1 = document.querySelector("#contentPlus1");
let contentMinus1 = document.querySelector("#contentMinus1");

var startingX;

function touchStart(evt) {
  startingX = evt.touches[0].clientX;
}
var touch;

function touchMove(evt) {
  touch = evt.touches[0];
  var change = startingX - touch.clientX;
  if (change > 50) {
    change -= 50;
    content1.style.left = -change + "px";
    contentPlus1.style.display = "block";
    // contentPlus1.style.left = screen.width - change + "px";
    evt.preventDefault();
  } else if (change < -50) {
    change += 50;
    content1.style.left = -change + "px";
    contentMinus1.style.display = "block";
    //contentMinus1.style.left = -screen.width - change + "px";
  }
  //evt.preventDefault();
}

function touchEnd(evt) {
  var change = startingX - evt.changedTouches[0].clientX;
  var third = screen.width / 4;
  if (change < third && change > -third) {
    content1.style.left = 0;
    contentPlus1.style.display = "none";
  } else if (change > 0) {
    content1.style.transition = "all 0.15s";
    content1.style.left = "-102%";
    i++;
    content1.addEventListener("transitionend", () => {
      content1.classList.add("notransition");
      contentPlus1.style.left = "0";
      if (i > events.length - 1) {
        i = 0;
      }
      generateCardSet(i);
    });
  } else if (change < 0) {
    content1.style.transition = "all 0.15s";
    content1.style.left = "+102%";
    i--;
    content1.addEventListener("transitionend", () => {
      content1.classList.add("notransition");
      contentMinus1.style.left = "0";
      if (i < 0) {
        i = events.length - 1;
      }
      console.log("transition");
      generateCardSet(i);
    });
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
/*

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
    if (distance < 3600000) {
      document.getElementById("minutes").style.color = "darkred";
    }
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

function stopTimer() {
  clearInterval(x);
}


*/

let tr = -450;

function slideLeft() {
  if (tr < 0) {
    tr += 450;
  }
  let displayCard = document.querySelector("#displayCard");
  displayCard.style.transform = "translateX(" + tr + "px)";
}

function slideRight() {
  if (tr > -900) {
    tr -= 450;
  }
  let displayCard = document.querySelector("#displayCard");
  displayCard.style.transform = "translateX(" + tr + "px)";
}

function resetDivCSS() {
  let content1 = document.querySelector("#content");
  let contentPlus1 = document.querySelector("#contentPlus1");
  let contentMinus1 = document.querySelector("#contentMinus1");
  content1.style.left = "0";
  contentMinus1.style.display = "none";
  contentPlus1.style.display = "none";
}
