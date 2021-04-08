let i = 0;

let events = data;

//filterEvents(data, "Bell");
let rowColor = "#f8f8f8";

generateCard();

function generateCard() {
  let content = document.querySelector("#content");
  content.innerHTML = `
  <h2 style="background-color:${rowColor};" id="mainHeader"></h2>
  <div id="imageContainer"></div>
  <div id="mainTime"></div>
  <div id="mainCard"></div> 
  <div id="prelimsTime"></div>
  <div id="prelimsCard"></div> 
  `;

  let mainHeader = document.querySelector("#mainHeader");
  mainHeader.textContent = `${events[i][4]}`;

  let imageContainer = document.querySelector("#imageContainer");
  imageContainer.innerHTML = `
  <img id="eventPoster" onclick="showPoster()" src=${events[i][2]}/>`;

  ////////////event date

  let eventTimeLocal = new Date(events[i][1]);
  let mainTime = document.querySelector("#mainTime");
  let prelimsTime = document.querySelector("#prelimsTime");

  mainCardTime = eventTimeLocal.toLocaleString([], {
    month: "short",
    day: "numeric",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short",
  });

  mainTime.textContent = `${mainCardTime}`;

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

  prelimsTime.textContent = `${prelimsCardTime}`;

  ///////////////////////////////

  let mainCardSize = events[i][3].length - events[i][5];

  let mainCard = document.querySelector("#mainCard");

  for (let j = 0; j < mainCardSize; j++) {
    if (j % 2 === 0) {
      rowColor = "#f8f8f8";
    } else {
      rowColor = "white";
    }
    mainCard.innerHTML += `
    <div style="background-color:${rowColor};" id="left">
    <a href="${events[i][3][j].fighterALink}">${events[i][3][j].fighterA}</a>
        <div class="detailsLeft">
          <div></div>
          <div>${events[i][3][j].rankA}</div>
          <div>${events[i][3][j].recordA}</div>
        </div>
    </div>
    <div style="background-color:${rowColor};" id="middle">vs
       <div class="detailsVS">${events[i][3][j].weight}</div>
    </div>
        
    <div style="background-color:${rowColor};" id="right">
    <a href="${events[i][3][j].fighterBLink}">${events[i][3][j].fighterB}</a>
        <div class="detailsRight">
          <div>${events[i][3][j].recordB}</div>
          <div>${events[i][3][j].rankB}</div>
          <div></div>
        </div>
    </div>
    `;
  }

  ////////////////////////////Prelims

  let numPrelims = events[0][5];

  let prelimsCard = document.querySelector("#prelimsCard");

  for (let j = mainCardSize; j < events[i][3].length; j++) {
    if (j % 2 === 0) {
      rowColor = "#f8f8f8";
    } else {
      rowColor = "white";
    }
    prelimsCard.innerHTML += `
  <div style="background-color:${rowColor};" id="left">
  <a href="${events[i][3][j].fighterALink}">${events[i][3][j].fighterA}</a>
      <div class="detailsLeft">
        <div></div>
        <div>${events[i][3][j].rankA}</div>
        <div>${events[i][3][j].recordA}</div>
      </div>
  </div>
  <div style="background-color:${rowColor};" id="middle">vs
     <div class="detailsVS">${events[i][3][j].weight}</div>
  </div>
      
  <div style="background-color:${rowColor};" id="right">
  <a href="${events[i][3][j].fighterBLink}">${events[i][3][j].fighterB}</a>
      <div class="detailsRight">
        <div>${events[i][3][j].recordB}</div>
        <div>${events[i][3][j].rankB}</div>
        <div></div>
      </div>
  </div>
  `;
  }

  ////////////////////////////////

  toggleD();
}

function next() {
  i++;
  if (i === events.length) {
    i = 0;
  }
  generateCard();
}

function back() {
  i--;
  if (i === -1) {
    i = events.length - 1;
  }
  generateCard();
}

$("#toggleDetails").click(function () {
  toggleD();
});

function toggleD() {
  $(".detailsLeft").toggle();
  $(".detailsRight").toggle();
  $(".detailsVS").toggle();
}

function showPoster() {
  let imageContainer = document.querySelector("#imageContainer");
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
  if (sideNav.style.right === "0%") {
    eventList.innerHTML = ``;
    sideNav.style.right = "-70%";
  } else {
    sideNav.style.right = "0%";
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
         <div>${events[i][4]}</div>
      </div>
  `;
  }
}

function selectCard(index) {
  toggleSideNav();
  i = index;
  generateCard();
  document.querySelector("#hamburger-1").classList = "hamburger";
}

////////////////////////////swiping navigator

var startingX, startingY, movingX, movingY;

function touchStart(evt) {
  startingX = evt.touches[0].clientX;
}

function touchMove(evt) {
  movingX = evt.touches[0].clientX;
}

function touchEnd() {
  if (startingX + 100 < movingX) {
    back();
  } else if (startingX - 100 > movingX) {
    next();
  } else {
    movingX = undefined;
  }
}

function filterEvents(data, str) {
  let ufcEvents = data.filter((event) => event[0].includes(str));
  events = ufcEvents;
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
